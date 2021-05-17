import React from 'react';
import Loading from '../../components/Loading';

const Detail = () => {
	return (
		<div className="h-full">
			<Loading state={false} />
			<div className="h-full py-4 px-9 bg-gray-900 w-full">
				<img className="w-full h-1/2 mb-3" src="https://via.placeholder.com/300.png/09f/fff%20C/O%20" alt="" />

				<div>
					<div className="flex justify-between">
						<div className="text-gray-300 mb-7 font-semibold text-2xl">title</div>
						<div className="flex gap-4">
							<div className="bg-gray-400 px-3 flex w-10 h-10 justify-center items-center rounded-full text-gray-800">1</div>
							<div className="bg-gray-400 px-3 flex w-10 h-10 justify-center items-center rounded-full text-gray-800">2</div>
							<div className="bg-gray-400 px-3 flex w-10 h-10 justify-center items-center rounded-full text-gray-800">3</div>
						</div>
					</div>
					
					<p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi fugit doloribus! Voluptatum eligendi quo ipsum aspernatur numquam consectetur possimus velit tempore asperiores! Blanditiis perferendis sapiente cum, tempora corporis labore!</p>
				</div>
			</div>
		</div>
	);
};

export default Detail;