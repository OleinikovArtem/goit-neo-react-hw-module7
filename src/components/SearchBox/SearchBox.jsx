import { useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/filtersSlice'

import styles from './SearchBox.module.css'
import clsx from 'clsx'


const SearchBox = () => {
  const dispatch = useDispatch()

  const onChange = (event) => {
    const value = event.target.value
    dispatch(changeFilter(value))
  }

  return (
    <label className={clsx('controller border', styles.searchbox)}>
      Find contacts by name
      <input name='search' onChange={onChange} />
    </label>
  )
}

export default SearchBox
