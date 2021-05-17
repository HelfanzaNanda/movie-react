import React from 'react';

const Search = ({onChange}) => {
	return (
		<div>
			<div className="group p-3 h-10 w-auto rounded-full transition duration-500 ease-in-out
				 text-white flex justify-center items-center bg-red-600 
				 hover:bg-red-500
				 focus:w-52 focus:outline-none focus:bg-red-500
				 focus:flex focus:justify-between">
					 <input type="text" placeholder="search movie ..."
					 onChange={onChange}
					 className="p-2 outline-none text-sm text-white bg-transparent flex
					 placeholder-gray-200"/>
					<i className="fas fa-search"></i>
				</div>
		</div>
	);
};

export default Search;