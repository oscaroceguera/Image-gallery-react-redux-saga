import {fetchImages} from './flickr';
import {put} from 'redux-saga/effects';

export function* loadImages() {
  const images = yield fetchImages();
  yield put({type: 'IMAGES_LOADED', images})
  console.log('load some images please');
}
