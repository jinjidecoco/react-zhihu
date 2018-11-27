import axios from 'axios'

// const urlPrefix ='';
// const urlPrefix ='https://news-at.zhihu.com';

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
