import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { memo, Suspense, useCallback } from 'react';
import { Input } from '@/shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Loader } from '@/shared/ui/Loader';

interface AddCommentFormProps {
  className?: string
  sendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const {
    className = '',
    sendComment,
  } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);

  const handleTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const handleSendComment = useCallback(() => {
    sendComment(text || '');
    handleTextChange('');
  }, [sendComment, handleTextChange, text]);

  return (
    <Suspense fallback={<Loader />}>
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(cls.addCommentForm, {}, [className])}>
        <Input
          placeholder={t('Enter your comment')}
          value={text}
          onChange={handleTextChange}
          className={cls.input}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={handleSendComment}
        >
          {t('Send')}
        </Button>
      </div>
      </DynamicModuleLoader>
    </Suspense>
  );
});

export default AddCommentForm;
