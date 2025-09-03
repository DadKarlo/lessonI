import './Filter.css'
import { setTitleFilter, resetFilters } from '../../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Filter = () => {
	const dispatch = useDispatch()
	const titleFilter = useSelector((state) => state.filter.title)

	const handleTitleFilterChenge = (e) => {
		dispatch(setTitleFilter(e.target.value))
	}

	const handleResetFilters = () => {
		dispatch(resetFilters())
	}

	return (
		<div className="app-block filter">
			<div className="filter-row">
				<div className="filter-group">
					<input
						type="text"
						value={titleFilter}
						placeholder="filter..."
						onChange={handleTitleFilterChenge}
					/>
				</div>
				<button type="button" onClick={handleResetFilters}>
					Reset filter
				</button>
			</div>
		</div>
	)
}
export default Filter
