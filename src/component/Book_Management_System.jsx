import React, { Component } from "react";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      title: "",
      author: "",
      isbn: "",
      search: "",
    };
  }

  addBook = () => {
    const { title, author, isbn } = this.state;
    if (
      title.trim() === "" ||
      author.trim() === "" ||
      isbn.trim() === ""
    )
      return;

    const newBook = {
      id: Date.now(),
      title,
      author,
      isbn,
      visible: false,
    };

    this.setState((prevState) => ({
      books: [newBook, ...prevState.books],
      title: "",
      author: "",
      isbn: "",
    }));
  };

  onTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onAuthorChange = (e) => {
    this.setState({ author: e.target.value });
  };

  onIsbnChange = (e) => {
    this.setState({ isbn: e.target.value });
  };

  onSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  deleteBook = (id) => {
    this.setState((prevState) => ({
      books: prevState.books.filter((b) => b.id !== id),
    }));
  };

  toggleView = (id) => {
    this.setState((prevState) => ({
      books: prevState.books.map((b) =>
        b.id === id ? { ...b, visible: !b.visible } : b
      ),
    }));
  };

  render() {
    const { books, title, author, isbn, search } = this.state;

    const filteredBooks = books.filter(
      (b) =>
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.author.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <>
        <h2>Book Management System</h2>

        {/* Add Book */}
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={this.onTitleChange}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={this.onAuthorChange}
        />
        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={this.onIsbnChange}
        />
        <br />
        <button onClick={this.addBook}>Add Book</button>

        <hr />

        {/* Search */}
        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={this.onSearchChange}
        />

        <ul>
          {filteredBooks.map((b) => (
            <li key={b.id}>
              {b.title}
              <button onClick={() => this.toggleView(b.id)}>View</button>
              <button onClick={() => this.deleteBook(b.id)}>Delete</button>

              <div style={{ display: b.visible ? "block" : "none" }}>
                Author: {b.author} <br />
                ISBN: {b.isbn}
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default BookList;
