import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book, i) => {
      return (
        <li
          className="list-group-item"
          key={i}
          onClick={ () => this.props.selectBook(book) }
        >
          {book.title}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

function mapStateToProps(state){
  return {
    books: state.books
  };
}

function mapDispatchtoProps(dispatch){
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(BookList);
