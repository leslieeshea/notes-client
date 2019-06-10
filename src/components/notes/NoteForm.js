import React from 'react';
import PropTypes from 'prop-types';

function NoteForm({ onSubmit, onChange, title, body, submitText }) {
  return (
    <form onSubmit={onSubmit}>
      <p>Note Title: </p>
      <input type="text" name="title" value={title} onChange={onChange} />

      <p>Note Body: </p>
      <input type="text" name="body" value={body} onChange={onChange} />

      <button>{submitText}</button>
    </form>
  );
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  submitText: PropTypes.string
};

NoteForm.defaultProps = {
  submitText: 'Submit'
};

export default NoteForm;
