import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    render() {
        const {books} = this.props
        console.log("BookList", books)
        return (
            <div>
                <ol className="books-grid">
                    {books.map((book) => (
                        <Book book={book} key={book.id}/>
                    ))}
                </ol>
            </div>
        )
    }
}

export default BooksList