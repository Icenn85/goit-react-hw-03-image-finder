import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags = '',
  setLargeImg,
}) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        data-largeimageurl={largeImageURL}
        data-tags={tags}
        loading="lazy"
        onClick={setLargeImg}
        className={css.imageGalleryItem__image}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  setLargeImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
