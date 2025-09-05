import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
	title: '',
}

export const createBookWithID = (book) => {
	return {
		...book,
		name: 'API get',
		id: uuidv4(),
	}
}

export const fetchBook = createAsyncThunk('fetchBook', async () => {
	const res = await axios.get('http://localhost:4000/random-book')
	return res.data
})

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setTitleFilter: (state, action) => {
			return { ...state, title: action.payload }
			// state.title = action.payload
		},
		resetFilters: () => {
			return initialState
			// state.title = ''
		},
	},
})

export const { setTitleFilter, resetFilters } = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title

export default filterSlice.reducer
