import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icons/star.svg';

interface StarRatingProps {
  className?: string
  handleSelect?: (starsCount: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const {
    className,
    size = 30,
    selectedStars = 0,
    handleSelect,
  } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const handleHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const handleLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      handleSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames('', {}, [className])}>
      {stars.map((starNumber) => (
        <StarIcon
          className={classNames(
            cls.starIcon,
            {
              [cls.selected]: isSelected,
            },
            [currentStarsCount >= starNumber ? cls.hovered : cls.normal],
          )}
          key={starNumber}
          width={size}
          height={size}
          onMouseLeave={handleLeave}
          onMouseEnter={handleHover(starNumber)}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
});

StarRating.displayName = 'StarRating';
