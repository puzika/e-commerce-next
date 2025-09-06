import styles from './stars.module.scss';

type StarProps = {
  filled: number,
}

function Star({ filled }: StarProps) {
  return (
    <span
      style={{
        backgroundImage: `
          linear-gradient(
            to right, 
            #FFAD33 ${filled}%, 
            #808080 ${filled}%
          )
        `
      }}
      className={styles.star}
    >
    </span>
  )
}

type StarsProps = {
  rating: number,
}

export default function Stars({ rating }: StarsProps) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    let fillVal;
    const starsLeft = rating - i;

    if (starsLeft > 1) fillVal = 1;
    else if (starsLeft < 0) fillVal = 0;
    else fillVal = starsLeft;

    stars.push(
      <Star 
        key={`rating-star-${i}`}
        filled={fillVal * 100}
      />
    )
  }

  return (
    <div className={styles.stars}>
      { stars }
    </div>
  )
}