import { type ProfileSchema } from './model/types/profile';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { EditableProfileCard } from './ui/EditableProfileCard/EditableProfileCard';

export {
  type ProfileSchema,
  profileActions,
  profileReducer,
  fetchProfileData,
  EditableProfileCard,
};
