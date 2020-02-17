import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksList extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
      }
    render(){
        const books = this.props
        // console.log(books)
        const currentlyReadingBooks = books.books.filter((b) => {
            return  b.shelf === "currentlyReading"
            })
        const wantToReadBooks = books.books.filter((b) => {
            return  b.shelf === "wantToRead"
            })
        const readBooks = books.books.filter((b) => {
            return  b.shelf === "read"
            })
        return(
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                  <ol className="books-grid">
                    {currentlyReadingBooks.map((book)=>(
                       <Book book={book} />
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  <ol className="books-grid">
                    {wantToReadBooks.map((book)=>(
                       <Book book={book} />
                    ))}
                  </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  <ol className="books-grid">
                    {readBooks.map((book) => (
                       <Book book={book} />
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
export default BooksList