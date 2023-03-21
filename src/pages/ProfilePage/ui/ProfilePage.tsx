import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();
  const { id: profileId } = useParams<{ id: string }>();

  useInitialEffect(() => {
    if (profileId) {
      void dispatch(fetchProfileData(profileId));
    }
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <EditableProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
