import React from 'react';
import { Route, Switch } from 'react-router';
import Collection from '../views/movies/Collection';
import Detail from '../views/movies/Detail';
import Genre from '../views/movies/Genre';
import NowPlaying from '../views/movies/NowPlaying';
import TopRated from '../views/movies/TopRated';
import UpComming from '../views/movies/UpComming';

function Router() {
	return (
		<Switch>
			<Route exact path="/">
				<NowPlaying/>
			</Route>
			<Route exact path="/up-comming">
				<UpComming/>
			</Route>
			<Route exact path="/top-rated">
				<TopRated/>
			</Route>
			<Route exact path="/collection">
				<Collection/>
			</Route>

			<Route exact path="/movie/detail">
				<Detail/>
			</Route>

			<Route exact path="/genres">
				<Genre/>
			</Route>
		</Switch>
	);
}

export default Router;