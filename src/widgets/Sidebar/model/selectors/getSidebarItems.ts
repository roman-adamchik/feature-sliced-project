import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { type SidebarItemType } from '../types/sidebar';
import AboutIcon from '@/shared/assets/icons/about.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { AppRoutes, RoutePath } from '@/shared/const/router';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (authData) => {
    const sidebarItemsList: SidebarItemType[] = [
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
    ];

    if (authData) {
      sidebarItemsList.push(
        {
          path: RoutePath[AppRoutes.PROFILE] + authData.id,
          text: 'Profile',
          Icon: ProfileIcon,
          authOnly: true,
        },
        {
          path: RoutePath[AppRoutes.ARTICLES],
          text: 'Articles',
          Icon: ArticleIcon,
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
