import { Node, Project, SyntaxKind } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isToggleFeatures = (node: Node) => {
  let isToggleFeatures = false;

  node.forEachChild(child => {
    if (child.asKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures') {
      isToggleFeatures = true;
    };
  });

  return isToggleFeatures;
};

const featureToApply = process.argv[2];
const featureState = process.argv[3]; // 'on' | 'off'

if (!featureToApply) {
  throw new Error('You need to pass feature name to apply as a first argument');
}

if (!featureState) {
  throw new Error('You need to pass feature state (on or off) as a second argument');
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Second argument must be on or off only');
}

files.forEach((file) => {
  file.forEachDescendant(node => {
    if (node.asKind(SyntaxKind.CallExpression) && isToggleFeatures(node)) {
      const propsObject = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
      if (!propsObject) return;

      const onFunctionProperty = propsObject.getProperty('on')
        ?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
        ?.getBody()
        .getText() || '';
      const offFunctionProperty = propsObject.getProperty('off')
        ?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
        ?.getBody()
        .getText() || '';
      const featureName = propsObject
        .getProperty('name')
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);

      if (featureToApply !== featureName) {
        return;
      }

      // TODO consider refactor it to make it possible to work with arrow functions with multiline body.

      if (featureState === 'on') {
        node.replaceWithText(onFunctionProperty);
      }

      if (featureState === 'off') {
        node.replaceWithText(offFunctionProperty);
      }
    }
  });
});

void project.save();