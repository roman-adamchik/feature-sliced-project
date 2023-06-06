import { getRouteAbout } from './../../../../shared/const/router';
import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { type SidebarItemType } from '../types/sidebar';
import AboutIcon from '@/shared/assets/icons/about.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { getRouteMain, getRouteProfile, getRouteArticles } from '@/shared/const/router';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (authData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        text: 'Main',
        Icon: HomeIcon,
      },
      {
        path: getRouteAbout(),
        text: 'About',
        Icon: AboutIcon,
      },
    ];

    if (authData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(authData.id),
          text: 'Profile',
          Icon: ProfileIcon,
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          text: 'Articles',
          Icon: ArticleIcon,
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
