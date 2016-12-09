import {fetchImages} from '../api/flickr';
import {put, take, fork} from 'redux-saga/effects';

export function* loadImages() {
  try {
    const images = yield fetchImages();
    yield put({type: 'IMAGES_LOADED', images})
    yield put({type: 'IMAGE_SELECTED', image: images[2]})
  } catch (err) {
    yield put({type: 'IMAGE_LOAD_FAILURE', error})
  }
}

export function* watchForLoadImages() {
  while(true) {
    yield take('LOAD_IMAGES')
    yield fork(loadImages)
  }
}
