import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'
import BooksList from './BooksList'

class BooksApp extends React.Component {
  state = {
    books : []
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
    return (
      <div className="app">
        <Route path='/search' component={SearchPage} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BooksList books={this.state.books}/>
            <div className="open-search">

              <Link
                  to='/Search'
               ><button></button></Link>

            </div>
          </div>
          )} />
      </div>
    )
  }
}

export default BooksApp
