import axios from 'axios'

// const urlPrefix ='';
// const urlPrefix ='http://news-at.zhihu.com';
const  urlPrefix ='http://localhost:8081';

export function  getNewsList(){
	const url = urlPrefix + '/api/4/news/latest'
	return axios.get(url)
}
export function getNewsDetail(id){
	const url = urlPrefix+ '/api/4/news/'+ id
	return axios.get(url)
}
export function getHistoryList(date){
	const url = urlPrefix + '/api/4/news/before/'+ date
	return axios.get(url);
}
export function getExtraData(id){
	const url =urlPrefix + '/api/4/story-extra/'+ id
	return axios.get(url);
}
