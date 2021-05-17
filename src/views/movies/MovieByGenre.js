import React, { useState, useEffect } from 'react';
import Movie from '../../components/Movie';
//import Search from '../../components/Search';
import MovieApi from '../../apis/Movie'
import Loading from '../../components/Loading';

const MovieByGenre = () => {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(false)
	const [query, setQuery] = useState(null)
	const [page, setPage] = useState(1)

	const getMovies = async () => {
		setPage(1)
		setLoading(true)
		try {
			const response = await MovieApi.getNowPlayings(page)
			setMovies(response.data.results)
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	const search = async (q) => {
		setQuery(q)
		setLoading(true)
		try {
			const response = await MovieApi.search(query)
			setMovies(response.data.results)
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	useEffect(() => {
		getMovies()
	}, [])

	return (
		<div className="h-full">
			<Loading state={loading}/>
			<div className="h-full py-4 px-9 bg-gray-900 w-full">
				<div className="flex justify-between items-center mb-5">
					<div className="text-white border-b border-white pb-2 font-semibold">Now Playing</div>
					{/* <Search onChange={ (e) => search(e.target.value)}/> */}
				</div>
				<div className="h-full overflow-y-auto">
					<div className="mb-20 flex flex-wrap gap-4 justify-evenly">
						{
							movies.map((movie, index) => <Movie movie={movie} key={index}/>)
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieByGenre;