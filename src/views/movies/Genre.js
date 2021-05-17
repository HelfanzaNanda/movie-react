import React, { useEffect, useState } from 'react';
import ApiGenres from '../../apis/Genre';
import Loading from '../../components/Loading';
import Search from '../../components/Search';
import CardGenre from '../../components/Genre';

const Genre = () => {

	const [genres, setGenres] = useState([])
	const [loading, setLoading] = useState(false)

	const getGenres = async () => {
		setLoading(true)
		try {
			const response = await ApiGenres.getGenres()
			setGenres(response.data.genres)
			setLoading(false)
		} catch (error) {
			console.log(error);
			setLoading(false)
		}
	}

	useEffect(() => {
		getGenres()
	}, [])

	return (
		<div className="h-full">
			<Loading state={loading}/>
			<div className="h-full py-4 px-9 bg-gray-900 w-full">
				<div className="flex justify-between items-center mb-5">
					<div className="text-white border-b border-white pb-2 font-semibold">Genre</div>
					<Search onChange={ (e) => {
						console.log(e.target.value)
					}}/>
				</div>
				<div className="h-full overflow-y-auto">
					<div className="mb-20 flex flex-wrap gap-4 justify-evenly">
						{
							genres.map((genre, index) => <CardGenre genre={genre} key={index}/>)
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Genre;