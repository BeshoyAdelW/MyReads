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

    render() {
        const books = this.state.books
        let currentlyReadingBooks = books.filter((b) => {
            return b.shelf === "currentlyReading"
        })
        let wantToReadBooks = books.filter((b) => {
            return b.shelf === "wantToRead"
        })
        let readBooks = books.filter((b) => {
            return b.shelf === "read"
        })
        console.log("App", currentlyReadingBooks)
        console.log("App", wantToReadBooks)
        console.log("App", readBooks)
        return (
            <div className="app">
                <Route path='/search' component={SearchPage}/>
                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Currently Reading</h2>
                                    <div className="bookshelf-books">
                                        <BooksList books={currentlyReadingBooks}/>
                                    </div>
                                </div>

                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Want to Read</h2>
                                    <div className="bookshelf-books">
                                        <BooksList books={wantToReadBooks}/>
                                    </div>
                                </div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Read</h2>
                                    <div className="bookshelf-books">
                                        <BooksList books={readBooks}/>
                                    </div>
                                </div>
                            </div>
                        </div>
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
