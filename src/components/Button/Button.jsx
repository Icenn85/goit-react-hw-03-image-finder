import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

function Button({ onClickButton }) {
  return (
    <button
      className={css.button}
      type="button"
      onClick={onClickButton}
    >
      Load more
    </button>
  );
}

Button.propTypes = {
  onClickButton: PropTypes.func,
};

export default Button;
