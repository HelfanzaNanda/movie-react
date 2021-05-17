import React from 'react';

const Loading = ({state}) => {
	return (
		<div className={ (state ? "flex" : "hidden") + " h-screen w-screen top-0 left-0 justify-center items-center bg-opacity-70 text-white fixed bg-black"} >
			<i className="fas fa-circle-notch fa-spin fa-2x"></i>
		</div>	
	);	
};

export default Loading;