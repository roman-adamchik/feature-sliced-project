import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { AppRoutes, RoutePath } from 'shared/config/routerConfig/routerConfig';

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath[AppRoutes.MAIN],
    text: 'Main',
    Icon: HomeIcon,
  },
  {
    path: RoutePath[AppRoutes.ABOUT],
    text: 'About',
    Icon: AboutIcon,
  },
  {
    path: RoutePath[AppRoutes.PROFILE],
    text: 'Profile',
    Icon: ProfileIcon,
    authOnly: true,
  },
];
