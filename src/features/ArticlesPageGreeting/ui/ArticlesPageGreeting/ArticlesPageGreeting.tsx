import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { isMobile } from 'react-device-detect';
import { Drawer } from '@/shared/ui/redesigned/Drawer';

export const ArticlesPageGreeting = memo(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isArticlesPageGreetingsOpened } = useJsonSettings();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (!isArticlesPageGreetingsOpened) {
      setIsModalOpen(true);
      void dispatch(saveJsonSettings({ isArticlesPageGreetingsOpened: true }));
    }
  }, [isArticlesPageGreetingsOpened, dispatch]);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const content = (
    <Text
      title={t('Here is the article page.')}
      text={t('You can choose any article, read it and rate if you want.')}
    />
  );

  if (isMobile) {
    return (
      <Drawer isOpen={isModalOpen} onClose={handleModalClose}>
        {content}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isModalOpen} onClose={handleModalClose}>
      {content}
    </Modal>
  );
});

ArticlesPageGreeting.displayName = 'ArticlesPageGreeting';
