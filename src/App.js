import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from 'react-router-dom'
import SearchPage from './SearchPage'
import {Route} from 'react-router-dom'
import BooksList from './BooksList'

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            });
    }

    changeShelf = (changedBook, shelf) => {
        BooksAPI.update(changedBook, shelf).then(response => {
            changedBook.shelf = shelf;
            this.setState(prevState => ({
                books: prevState.books
                    .filter(book => book.id !== changedBook.id)
                    .concat(changedBook)
            }));
        });
    };

    render() {
        const books = this.state.books
        return (
            <div className="app">
                <Route path="/search" render={() => (<SearchPage books={books} changeShelf={this.changeShelf}/>)}/>
                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <BooksList books={books} changeShelf={this.changeShelf}/>
                        <div className="open-search">
                            <Link
                                to='/Search'
                            >
                                <button></button>
                            </Link>

                        </div>
                    </div>
                )}/>
            </div>
        )
    }
}

export default BooksApp
