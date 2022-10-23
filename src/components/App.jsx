import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import '../components/App.module.css';
import fetchImages from '../api';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    imgTags: '',
    error: null,
  };

  componentDidMount() {
    if (this.state.isLoading) {
      this.fetchPictures();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fecthImages();
    }
  }

  submitForm = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
      error: null,
    });
  };

  fecthImages = () => {
    const { page, searchQuery } = this.state;

    this.setState({ isLoading: true });

    const options = {
      searchQuery,
      page,
    };

    fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  setLargeImg = ({ target }) => {
    const { largeImageUrl, tags } = target.dataset;
    this.setState({ largeImageURL: largeImageUrl, imgTags: tags });
    this.toggleModal();
  };

  // largeImage = largeImageURL => {
  //   this.setState({ largeImageURL });
  //   this.toggleModal();
  // };

  // fetchPictures = () => {
  //   const { page, searchQuery } = this.state;
  //   const options = { searchQuery, page };
  //   this.setState({ isLoading: true });

  //   fetchImages(options)
  //     .then(pictures => {
  //       this.setState(prevState => ({
  //         pictures: [...prevState.pictures, ...pictures],
  //         page: prevState.page + 1,
  //       }));
  //     })
  //     .catch(error => this.state({ error }))
  //     .finally(() => this.setState({ isLoading: false }));
  // };

  render() {
    const {
      images,
      isLoading,
      error,
      largeImageURL,
      imgTags,
      showModal,
    } = this.state;
    return (
      <>
        {error && <p>Whoops, something went wrong.</p>}
        <Searchbar onSubmit={this.submitForm} />
        {isLoading && <Loader />}
        <ImageGallery images={images} setLargeImg={this.setLargeImg} />
        {images.length > 0 && !isLoading && (
          <Button onClick={this.fecthImages} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={imgTags} />
          </Modal>
        )}
      </>
    );
  }
}
