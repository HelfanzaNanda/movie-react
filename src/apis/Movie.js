import Api from './Api.js'

const API_KEY = '9f8808cfea557f655e533ea784664924'
const ApiMovies = {
    getNowPlayings(page) {
        return Api().get('movie/now_playing?api_key='+API_KEY+'&page='+page+'')
    },

	getUpCommings(page) {
		return Api().get('movie/upcoming?api_key='+API_KEY+'&page='+page+'')
	},

	getTopRateds(page) {
		return Api().get('movie/top_rated?api_key='+API_KEY+'&page='+page+'')
	},

	getDetail(movieId){
		return Api().get('movie/'+movieId+'?api_key='+API_KEY)
	},

	search(query){
		return Api().get('search/movie?api_key='+API_KEY+'&query='+query)
	},
}

export default ApiMovies