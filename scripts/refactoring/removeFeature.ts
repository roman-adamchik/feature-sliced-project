import { JsxAttribute, Node, Project, SyntaxKind } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const featureToApply = process.argv[2];
const featureState = process.argv[3]; // 'on' | 'off'

const TOGGLE_FUNC_NAME = 'toggleFeatures';
const TOGGLE_COMP_NAME = 'ToggleFeatures';

const isToggleFunc = (node: Node) => {
  let isToggleFeatures = false;

  node.forEachChild(child => {
    if (child.asKind(SyntaxKind.Identifier) && child.getText() === TOGGLE_FUNC_NAME) {
      isToggleFeatures = true;
    };
  });

  return isToggleFeatures;
};

const isToggleComp = (node: Node) => {
  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

  if (!identifier) return;

  return identifier.getText() === TOGGLE_COMP_NAME;
};

if (!featureToApply) {
  throw new Error('You need to pass feature name to apply as a first argument');
}

if (!featureState) {
  throw new Error('You need to pass feature state (on or off) as a second argument');
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Second argument must be on or off only');
}

const removeFunctions = (node: Node) => {
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
};

const getAttributeByNodeName = (
  jsxAttributes: JsxAttribute[],
  name: string,
) => {
  return jsxAttributes.find(node=> node.getName() === name);
};

const getReplaceComponent = (attribute: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText();
  
  if (value?.startsWith('(')) {
    return value.slice(1, -1);
  }

  return value;
};

const removeComponents = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  const onAttribute = getAttributeByNodeName(attributes, 'on');
  const offAttribute = getAttributeByNodeName(attributes, 'off');
  const featureNameAttribute = getAttributeByNodeName(attributes, 'feature');
  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    ?.slice(1,-1);
  
  if (featureToApply !== featureName || !onAttribute || !offAttribute) return;

  const onValue = getReplaceComponent(onAttribute);
  const offValue = getReplaceComponent(offAttribute);

  if (featureState === 'on' && onValue) {
    node.replaceWithText(onValue);
  }

  if (featureState === 'off' && offValue) {
    node.replaceWithText(offValue);
  }
};

files.forEach((file) => {
  file.forEachDescendant(node => {
    if (node.asKind(SyntaxKind.CallExpression) && isToggleFunc(node)) {
      removeFunctions(node);
    }

    if (node.asKind(SyntaxKind.JsxSelfClosingElement) && isToggleComp(node)) {
      removeComponents(node);
    }
  });
});

void project.save();