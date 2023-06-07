import { useEffect, useRef } from 'react';
import styles from './GamePage.module.css';

function GamePage({ isPlaying, equationArray, handleClickAnswer, valueY, isFinished }) {

  // Ref
  const itemRef = useRef(null);

  useEffect(() => {
    itemRef.current.scroll(0, valueY);
  }, [valueY]);

  useEffect(() => {
    itemRef.current.scrollTo({ top: 0, behavior: 'instant'});
  }, [isPlaying]);
  
  return (
    <div className={styles.card} hidden={isFinished ? true : !isPlaying}>
      {/* Item Container */}
      <div className={styles.itemContainer} ref={itemRef}>
        {/* Spacer */}
        <div className={styles.topSpace}></div>
        {/* Selected Item */}
        <div className={styles.selectedItem}></div>
        {equationArray.map((item, i) => {
          return <div className={styles.item} key={`equation${i}`}>
            <h1 className={styles.equation}>{item.value}</h1>
          </div>
        })}
        {/* Set Blank Space Below */}
        <div className={styles.bottomSpace}></div>
      </div>

      {/* Right/Wrong Buttons */}
      <div className={styles.itemFooter}>
        <button className={styles.wrong} onClick={() => handleClickAnswer(false)}>Wrong</button>
        <button className={styles.right} onClick={() => handleClickAnswer(true)}>Right</button>
      </div>
    </div>
  );
}

export default GamePage;