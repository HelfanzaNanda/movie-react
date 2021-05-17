import React, { useState, useEffect } from 'react';

const Movie = (item, key) => {

	const [isFavorite, setIsFavorite] = useState(false)

	const getFavorite = () => {
		if (localStorage.getItem('cart-'+item.movie.id)) {
			setIsFavorite(true)
		}else{
			setIsFavorite(false)
		}
	}

	const setLocalStorage = (movie_id) => {
		if (isFavorite) {
			localStorage.removeItem('cart-'+JSON.stringify(movie_id))
			setIsFavorite(false)
		}else{
			localStorage.setItem('cart-'+JSON.stringify(movie_id), JSON.stringify(movie_id))
			setIsFavorite(true)
		}
	}

	useEffect(() => {
		getFavorite()
	}, [])
	return (
		<div className="relative flex w-1/5 h-full flex-col cursor-pointer" key={key}
		onClick={() => {
			setLocalStorage(item.movie.id)
		}}>
			<img className="h-2/3 rounded-lg shadow-2xl object-cover object-center
				hover:bg-black hover:opacity-50 hover:rounded-md"
				src={'https://image.tmdb.org/t/p/w500/' +item.movie.poster_path} alt="" />
			<div className={"w-8 h-8 bg-white absolute top-0 -right-3 rounded-full flex justify-center items-center "+ (isFavorite ? 'text-red-500' : 'text-green-300 ')}>
				<i className="fas fa-heart "></i>
			</div>
			<p className="text-white font-semibold">{item.movie.title}</p>
			<small className="text-gray-500">{item.movie.release_date}</small>
			
		</div>
	);
};

export default Movie;