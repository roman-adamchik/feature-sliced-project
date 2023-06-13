import { EditableProfileCard } from '@/features/EditableProfileCard';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { ProfileRating } from '@/features/ProfileRating';
import { VStack } from '@/shared/ui/Stack';

const ProfilePage = memo(() => {
  const { id: profileId } = useParams<{ id: string }>();

  if (!profileId) return null;

  return (
    <Page
      data-testid='ProfilePage'
    >
      <VStack gap='16' align='stretch'>
        <EditableProfileCard profileId={profileId}/>
        <ProfileRating profileId={profileId}/>
      </VStack>
    </Page>
  );
});

export default ProfilePage;
