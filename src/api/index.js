import axios from 'axios'

export function  getNewsList(){
	const url ='/api/4/news/latest'
	return axios.get(url)
}
export function getNewsDetail(id){
	const url ='/api/4/news/'+ id
	return axios.get(url)
}
export function getHistoryList(date){
	const url ='/api/4/news/before/'+ date
	return axios.get(url);
}
