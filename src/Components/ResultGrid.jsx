import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../Redux/Features/searchSlice'
import { store } from '../Redux/store'
import ResultCard from './ResultCard'

const ResultGrid = () => {

  const dispatch = useDispatch()

  const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

  useEffect(function () {
    if (!query) return
    const getData = async () => {
      try {
        dispatch(setLoading())
        if (activeTab == 'Photos') {
          const data = await fetchPhotos(query)
          const response = data.results.map((item) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full
          }))
          dispatch(setResults(response))


        }

      } catch (err) {
        dispatch(setError(err.message))
      }
    }
    getData()
  }, [query, activeTab, dispatch])

  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <div className='flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start w-full px-4 sm:px-8 py-6'>
            {results.map((item, idx) => {
                return <div key={idx}>
                    <ResultCard item={item} />
                </div>
            })}
        </div>
  )
}

export default ResultGrid
