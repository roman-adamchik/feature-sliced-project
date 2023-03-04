import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { type ProfileSchema, type Profile } from './model/types/profile';

export {
  type ProfileSchema,
  type Profile,
  profileActions,
  profileReducer,
  fetchProfileData,
  ProfileCard,
};
