import { type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

/**
 * Deprecated, use new components from redesigned folder
 * @deprecated
 */
export const Portal: FC<PortalProps> = (props) => {
  const { children, container = document.body } = props;

  return createPortal(children, container);
};
