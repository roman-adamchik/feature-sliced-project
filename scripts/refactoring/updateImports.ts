import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isAbsolute = (value: string) => {
  const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];

  return layers.some((layer) => value.startsWith(layer));
};

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`);
    }
  });
});

void project.save();
