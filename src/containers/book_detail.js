import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book){
      return (
        <p className="text-danger">Select a book to get started!</p>
      );
    }

    return (
      <div className="col-sm-8">
        <h1>Book Details:</h1>
        <p>Title: {this.props.book.title}</p>
        <p>Pages: {this.props.book.pages}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book: state.active_book
  };
}

export default connect(mapStateToProps)(BookDetail);
