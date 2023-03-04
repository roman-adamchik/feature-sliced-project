import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { memo, useEffect } from 'react';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
