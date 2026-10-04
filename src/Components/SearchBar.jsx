import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../Redux/Features/searchSlice'


const SearchBar = () => {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e)=>{
        e.preventDefault();
        setText('')
        dispatch(setQuery(text))
    } 
  return (
    <div>
  <form
    onSubmit={(e) => {
      submitHandler(e);
    }}
    className="flex flex-col sm:flex-row bg-gray-900 gap-3 sm:gap-5 py-6 px-4 sm:py-8 sm:px-10 md:py-10 md:px-14 w-full"
  >
    <input
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
      required
      className="w-full border-2 border-gray-700 focus:border-white px-4 py-2 text-base sm:text-lg md:text-xl rounded outline-none text-white bg-transparent transition"
      type="text"
      placeholder="Search anything.."
    />
    <button
      type="submit"
      className="w-full sm:w-auto active:scale-95 cursor-pointer border-2 border-white px-6 py-2 text-base sm:text-lg md:text-xl font-medium rounded text-white hover:bg-white hover:text-black transition duration-200 shrink-0"
    >
      Search
    </button>
  </form>
</div>
  )
}

export default SearchBar
