import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './BookForm.css'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { addBook } from '../../redux/books/actionCreators'

const BookForm = () => {
	// const [formData, setFormData]=useState({})
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()

		if (title && author) {
			const book = {
				title,
				author,
				id: uuidv4(),
			}
			dispatch(addBook(book))

			setAuthor('')
			setTitle('')
		}
	}

	const eee = (book) => {
		return {
			...book,
			id: uuidv4(),
		}
	}

	const handleAddBookAPI = async () => {
		try {
			const res = await axios.get('http://localhost:4000/random-book')
			if (res?.data?.title && res?.data?.author) {
				dispatch(addBook(eee(res.data)))
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="app-block book-form">
			<h2>Add New Book</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title">Title: </label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="author">Author: </label>
					<input
						type="text"
						id="author"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</div>
				<button type="submit">Add Book</button>
				<button type="button" onClick={handleAddBookAPI}>
					API Book
				</button>
			</form>
		</div>
	)
}

export default BookForm
