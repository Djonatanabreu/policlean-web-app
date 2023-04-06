'use client';

import { Star } from '@/components/Icon/lib';
import { useState } from 'react';
import classes from './ratingStars.module.css';

export const RatingStars = () => {
  const stars = Array.from(Array(5).keys());
  const [shouldFill, setShouldFill] = useState<number[]>([]);

  function clickHandler(index: number) {
    const lastIndex = shouldFill[shouldFill.length - 1];

    if (index < lastIndex) {
      setShouldFill(shouldFill.slice(0, index + 1));
      return;
    }

    if (shouldFill.length === 0 || index > lastIndex) {
      setShouldFill(stars.slice(0, index + 1));
      return;
    }

    setShouldFill([]);
  }

  function fillStar(index: number) {
    return shouldFill.includes(index) ? '#FBB832' : 'transparent';
  }

  return (
    <div className={classes.starRatingBox}>
      <div>
        {stars.map((_, index) => (
          <Star
            fill={fillStar(index)}
            onClick={() => clickHandler(index)}
            key={index}
          />
        ))}
      </div>
      <p>{`(${shouldFill.length && 1}) ${
        shouldFill.length ? 'Avalição' : 'Avaliações'
      }`}</p>
    </div>
  );
};

// Ref pra cada, A star que for clicada iria alterar o seu attri empty que pode ser true ou false na mudança interna do fill no SVG
