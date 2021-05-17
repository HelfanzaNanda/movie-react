import React, { useState, useEffect } from 'react';
import Search from '../../components/Search';
import Loading from '../../components/Loading'; 
import MovieApi from '../../apis/Movie'


const Collection = () => {
	const [loading, setLoading] = useState(false)
	//const [item, setItems] = useState({})

	const getItems = () => {
		keyAllItems().map(value => {
			console.log(value);
			findMovie(value)
		})
	}

	const findMovie = async (key) => {
		try {
			const response = await MovieApi.search(key)
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	const keyAllItems = () => {
		let values = [],
		keys = Object.keys(localStorage),
		i = keys.length;
		while ( i-- ) {
			values.push( localStorage.getItem(keys[i]) );
		}
		return values;
	}

	useEffect(() => {
		getItems()
	}, [])
	

	return (
		<div className="h-full">
			<Loading state={loading}/>
			<div className="h-full py-4 px-9 bg-gray-900 w-full">
				<div className="flex justify-between items-center mb-5">
					<div className="text-white border-b border-white pb-2 font-semibold">My Collection</div>
					<Search onChange={ (e) => {
						console.log(e.target.value)
					}}/>
				</div>
				<div className="h-full overflow-y-auto">
					<div className="mb-20 flex flex-wrap gap-4 justify-evenly">
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Collection;