import { useSelector } from 'react-redux'
import './BookList.css'

const BookList = () => {
	const books = useSelector((state) => state.books)
	return (
		<div className="app-block book-list">
			<h2>Book List</h2>
			{books.length === 0 ? (
				<p>no alements...</p>
			) : (
				<ul>
					{books.map((book, i) => (
						<li key={i}>
							<div className="book-info">
								{++i}. <strong>{book.title}</strong> and {book.author}
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
export default BookList
