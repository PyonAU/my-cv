import { Children, cloneElement, useEffect, useRef } from 'react';

const EditableElement = ({ children }) => {

  let elements = Children.toArray(children);

  if (elements.length > 1) {
    throw Error("Can't have more than one child");
  }

  elements = cloneElement(elements[0], {
    contentEditable: true,
    suppressContentEditableWarning: true
  });
  return elements;
};

export default EditableElement;
