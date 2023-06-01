import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedUiDirectory?.getDirectories();

componentsDirs?.forEach(directory => {
  const componentName = directory.getBaseName();
  const indexFilePath = directory.getPath() + '/index.ts';
  const indexFile = directory.getSourceFile(indexFilePath);

  if (!indexFile) {
    const sourceCode = `export * from './${componentName}';`;
    const file = directory.createSourceFile(indexFilePath, sourceCode);

    void file.save();
  }
});

files.forEach(file => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach(importDeclaration => {
    const value = importDeclaration.getModuleSpecifierValue();
    const valueWithoutAlias = value.replace('@/', '');
    const segments = valueWithoutAlias.split('/');

    if (segments[0] === 'shared' && segments[1] === 'ui') {
      const newImportPath = `@/${segments.slice(0, 3).join('/')}`;

      importDeclaration.setModuleSpecifier(newImportPath);
    }
  });
});

void project.save();
