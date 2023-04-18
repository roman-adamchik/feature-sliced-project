import { EditableProfileCard } from 'features/EditableProfileCard';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';

const ProfilePage = memo(() => {
  const { id: profileId } = useParams<{ id: string }>();

  return (
    <Page>
      <EditableProfileCard profileId={profileId}/>
    </Page>
  );
});

export default ProfilePage;
