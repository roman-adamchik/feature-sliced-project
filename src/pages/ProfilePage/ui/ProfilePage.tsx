import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { memo } from 'react';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    void dispatch(fetchProfileData());
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
