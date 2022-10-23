import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = (images, setLargeImg) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(({ webformatURL, tags, largeImageURL, id }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            setLargeImg={setLargeImg}
          />
        );
      })}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  setLargeImg: PropTypes.func.isRequired,
};

export default ImageGallery;
