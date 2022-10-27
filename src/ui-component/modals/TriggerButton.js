import React from 'react';
const Trigger = ({ triggerText }) => {
  return (
    <button
      className="btn btn-lg btn-danger center modal-button"
    >
      {triggerText}
    </button>
  );
};
export default Trigger;
