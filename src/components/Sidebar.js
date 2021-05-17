import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	const [lengthCollection, setlengthCollection] = useState(0)

	const getTotalCollection = () => {
		let values = [],
		keys = Object.keys(localStorage),
		i = keys.length;
		while ( i-- ) {
			values.push( localStorage.getItem(keys[i]) );
		}
		setlengthCollection(values.length)
	}

	useEffect(() => {
		getTotalCollection()
	}, [])

	return (
		<div className="bg-gray-800 h-full">
				<div className="flex mb-6 p-3">
					<div>image</div>
					<div>name</div>
				</div>
				
				<div className="flex flex-col">
					
					<NavLink exact to="/" className="flex mb-3 justify-between items-center 
					text-gray-400 pl-6 pr-3 text-sm py-2 transition duration-500 ease-in-out 
					hover:bg-gray-700 hover:text-gray-300 hover:rounded-sm hover:border-l-4 hover:border-green-600
					focus:bg-gray-700 focus:text-gray-300 focus:rounded-sm focus:border-l-4 focus:border-green-600
					active:bg-gray-700 active:text-gray-300 active:rounded-sm active:border-l-4 active:border-green-600">
						<span>Now Playing</span>
					</NavLink>

					<NavLink exact to="/up-comming" className="flex mb-3 justify-between items-center 
					text-gray-400 pl-6 pr-3 text-sm py-2 transition duration-500 ease-in-out 
					hover:bg-gray-700 hover:text-gray-300 hover:rounded-sm hover:border-l-4 hover:border-green-600
					focus:bg-gray-700 focus:text-gray-300 focus:rounded-sm focus:border-l-4 focus:border-green-600
					active:bg-gray-700 active:text-gray-300 active:rounded-sm active:border-l-4 active:border-green-600">
						<span>Up Comming</span>
					</NavLink>

					<NavLink exact to="/top-rated" className="flex mb-3 justify-between items-center 
					text-gray-400 pl-6 pr-3 text-sm py-2 transition duration-500 ease-in-out 
					hover:bg-gray-700 hover:text-gray-300 hover:rounded-sm hover:border-l-4 hover:border-green-600
					focus:bg-gray-700 focus:text-gray-300 focus:rounded-sm focus:border-l-4 focus:border-green-600
					active:bg-gray-700 active:text-gray-300 active:rounded-sm active:border-l-4 active:border-green-600">
						<span>Top Rated</span>
					</NavLink>

					<NavLink exact to="/collection" className="flex mb-3 justify-between items-center 
					text-gray-400 pl-6 pr-3 text-sm py-2 transition duration-500 ease-in-out 
					hover:bg-gray-700 hover:text-gray-300 hover:rounded-sm hover:border-l-4 hover:border-green-600
					focus:bg-gray-700 focus:text-gray-300 focus:rounded-sm focus:border-l-4 focus:border-green-600
					active:bg-gray-700 active:text-gray-300 active:rounded-sm active:border-l-4 active:border-green-600">
						<span>My Collection</span>
						<div className="bg-red-500 py-1 px-3 text-white flex justify-center items-center rounded-full">
							<small>{lengthCollection}</small>
						</div>
						
					</NavLink>

					<NavLink exact to="/genres" className="flex mb-3 justify-between items-center 
					text-gray-400 pl-6 pr-3 text-sm py-2 transition duration-500 ease-in-out 
					hover:bg-gray-700 hover:text-gray-300 hover:rounded-sm hover:border-l-4 hover:border-green-600
					focus:bg-gray-700 focus:text-gray-300 focus:rounded-sm focus:border-l-4 focus:border-green-600
					active:bg-gray-700 active:text-gray-300 active:rounded-sm active:border-l-4 active:border-green-600">
						<span>Genres</span>
					</NavLink>

				</div>
			</div>
	);
};

export default Sidebar;