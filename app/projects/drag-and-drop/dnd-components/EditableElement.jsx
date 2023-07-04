import { Children, cloneElement, useEffect, useRef } from 'react';

const EditableElement = ({ children, onChange }) => {
  // Ref
  const element = useRef();

  let elements = Children.toArray(children);

  if (elements.length > 1) {
    throw Error("Can't have more than one child");
  }

  const onMouseUp = () => {
    const value = element.current?.value || element.current?.innerText;
    if (onChange) {
      onChange(value);
    }
  };

  elements = cloneElement(elements[0], {
    contentEditable: true,
    suppressContentEditableWarning: true,
    ref: element,
    onKeyUp: onMouseUp
  });
  return elements;
};

export default EditableElement;
