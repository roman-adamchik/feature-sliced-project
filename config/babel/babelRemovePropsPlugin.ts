import { type PluginItem } from '@babel/core';

export default function (): PluginItem {
  return {
    visitor: {
      Program(path, state) {
        const attributesToRemove = state.opts.props || [];

        path.traverse({
          JSXIdentifier(current) {
            const nodeName = current.node.name;

            if (attributesToRemove.includes(nodeName)) {
              current.parentPath.remove();
            }
          },
        });
      },
    },
  };
}
