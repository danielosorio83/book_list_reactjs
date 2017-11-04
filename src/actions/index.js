import { BOOK_SELECTED } from '../constants';

export function selectBook(book){
  return {
    type: BOOK_SELECTED,
    payload: book
  }
}
