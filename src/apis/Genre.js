import Api from './Api.js'

const API_KEY = '9f8808cfea557f655e533ea784664924'
const ApiGenres = {
	getGenres() {
		return Api().get('https://api.themoviedb.org/3/genre/movie/list?api_key='+API_KEY)
	}
}

export default ApiGenres