// eslint-disable-next-line fsd-slivki/path-check-layers
import { UserRole } from '@/entities/User';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
};
