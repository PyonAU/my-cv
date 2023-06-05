import { useState, useEffect, useRef } from 'react';
import Bookmarks from './Bookmarks';
import styles from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// Validate Form
function validate(nameValue, urlValue) {
  const expression = /(https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
  const regex = new RegExp(expression);
  if (!nameValue || !urlValue) {
    alert('Please submit values for both fields.');
    return false;
  }
  if (!urlValue.match(regex)) {
    alert('Please provide a valid web address.');
    return false;
  }
  // Valid
  return true;
}

const Modal = () => {
  // State
  const [isAdding, setIsAdding] = useState(false);
  const [inputData, setInputData] = useState([
    { name: 'Ayako GitHub', url: 'https://github.com/PyonAU' },
  ]);
  const [inputField, setInputField] = useState({
    name: '',
    url: '',
  });

  // Ref
  const inputRef = useRef(null);

  // CSS module
  const openModal = isAdding
    ? `${styles.modalContainer} ${styles.showModal}`
    : styles.modalContainer;

  useEffect(() => {
    if (isAdding) {
      inputRef.current.focus();
    }
  }, [isAdding]);

  const handleSubmit = (userInput) => {
    const nameValue = userInput.name;

    if (!userInput.url.includes('http://') && !userInput.url.includes('https://')) {
      userInput.url = `https://${userInput.url}`;
    }
    if (!validate(nameValue, userInput.url)) {
      return false;
    }
    saveInputs(userInput);
    inputRef.current.focus();
  };

  const saveInputs = (input) => {
    let newData = [...inputData, input];
    setInputData(newData);
    setInputField({
      name: '',
      url: ''
    });
  };

  const handleDelete = (url) => {
    setInputData(inputData.filter((data) => data.url !== url));
  };

  return (
    <div>
      {/* Open Modal */}
      <h1 className={styles.addBookmark} onClick={() => setIsAdding(true)}>
        Add Bookmark
      </h1>

      <Bookmarks inputData={inputData} handleDelete={handleDelete} />

      {/* Modal */}
      <div className={openModal}>
        <div className={styles.modal}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.closeIcon}
            onClick={() => setIsAdding(false)}
          />
          <div className={styles.modalHeader}>
            <h3 className={styles.title}>Add Bookmark</h3>
          </div>
          <div className={styles.modalContent}>
            <form
              className={styles.bookmarkForm}
              onSubmit={(event) => event.preventDefault()}
            >
              {/* website Name */}
              <div className={styles.formGroup}>
                <label htmlFor="website-name" className={styles.formLabel}>
                  Website Name
                </label>
                <input
                  type="text"
                  ref={inputRef}
                  onChange={(event) =>
                    setInputField({
                      ...inputField,
                      name: event.currentTarget.value,
                    })
                  }
                  value={inputField.name}
                  className={styles.formInput}
                  minLength="1"
                  maxLength="25"
                  placeholder="max 25 characters"
                />
              </div>
              {/* Website URL */}
              <div className={styles.formGroup}>
                <label htmlFor="website-url" className={styles.formLabel}>
                  Website URL
                </label>
                <input
                  type="text"
                  onChange={(event) =>
                    setInputField({
                      ...inputField,
                      url: event.currentTarget.value,
                    })
                  }
                  value={inputField.url}
                  className={styles.formInput}
                  minLength="7"
                  placeholder="https://example.com/"
                />
              </div>
              <button
                type="submit"
                className={styles.saveButton}
                onClick={() => handleSubmit(inputField)}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
