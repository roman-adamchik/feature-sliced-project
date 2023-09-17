import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { type SidebarItemType } from '../types/sidebar';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg';
import HomeIconDeprecated from '@/shared/assets/icons/home.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article.svg';
import HomeIcon from '@/shared/assets/icons/redesign_home.svg';
import AboutIcon from '@/shared/assets/icons/redesign_info.svg';
import ProfileIcon from '@/shared/assets/icons/redesign_avatar.svg';
import ArticleIcon from '@/shared/assets/icons/redesign_doc.svg';
import {
  getRouteMain,
  getRouteProfile,
  getRouteArticles,
  getRouteAbout,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      text: 'Main',
      Icon: toggleFeatures({
        feature: 'isNewDesign',
        on: () => HomeIcon,
        off: () => HomeIconDeprecated,
      }),
    },
    {
      path: getRouteAbout(),
      text: 'About',
      Icon: toggleFeatures({
        feature: 'isNewDesign',
        on: () => AboutIcon,
        off: () => AboutIconDeprecated,
      }),
    },
  ];

  if (authData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(authData.id),
        text: 'Profile',
        Icon: toggleFeatures({
          feature: 'isNewDesign',
          on: () => ProfileIcon,
          off: () => ProfileIconDeprecated,
        }),
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: 'Articles',
        Icon: toggleFeatures({
          feature: 'isNewDesign',
          on: () => ArticleIcon,
          off: () => ArticleIconDeprecated,
        }),
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
