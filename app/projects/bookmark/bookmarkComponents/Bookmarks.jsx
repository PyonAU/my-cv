import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Bookmarks.module.css';

const Bookmarks = ({ inputData, handleDelete }) => {

  const mappedData = inputData.map((card, i) => {
    return (
      <div className={styles.container} key={`card${i}`}>
        <div className={styles.item}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.deleteBookmark}
            onClick={() => handleDelete(i)}
          />
          <div className={styles.name}>
            <img
              src={`https://s2.googleusercontent.com/s2/favicons?domain=${card.url}`}
              className={styles.iconImage}
              alt="Favicon"
            />
            <a
              href={card.url}
              target="_blank"
              rel="noreferrer"
              className={styles.urlLink}
            >
              {card.name}
            </a>
          </div>
        </div>
      </div>
    );
  });

  return mappedData;
};

export default Bookmarks;
