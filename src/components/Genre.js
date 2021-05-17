import React from 'react';

const Genre = ({genre, index}) => {
	return (
		<div className="w-1/4 p-3 text-center cursor-pointer bg-white text-gray-900 rounded-lg
		hover:bg-gray-200 hover:bg-opacity-80
		" key={index}>
			{genre.name}
		</div>
	);
};

export default Genre;