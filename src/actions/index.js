import {getNewsList,getHistoryList} from '../api'
import  * as ActionTypes from './actionTypes.js'
import axios from 'axios'



export const getLatest = () => {
	return dispatch => {
		getNewsList().then(res  =>{
			if(res && res.status==200){
				dispatch(getLatestData(res.data))
				// console.log(res);
			}
		})
		.catch( error =>{
			console.log(error)
		})

	}
}
//异步获取之后的回调
export const getLatestData =(data) =>{
	return {
		type :ActionTypes.GET_LATEST_DATA,
		data
	}
}


export const getHistory =(date) =>{
   return dispatch => {
		getHistoryList(date).then(res =>{
			if(res && res.status==200){ 
				// console.log(res);
				dispatch(getHistoryData(res.data))	
		    }
		})
		.catch( error =>{
				console.log(error)
		})	    
    }
}
//异步获取之后的回调
export const getHistoryData =(data) =>{
	return {
		type:ActionTypes.GET_HISTORY_DATA,
		data
	}
}