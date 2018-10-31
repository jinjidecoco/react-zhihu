import {getNewsList,getHistoryList} from '../api'
import  * as ActionTypes from './actionTypes.js'
import axios from 'axios'



export const getLatest = () => {
	return (dispatch,getState) => {
		getNewsList().then(res  =>{
			if(res && res.status==200){
				dispatch(getLatestData(res.data))
				dispatch(getHistory( getState().prevDate.curDate) );
				// dispatch(setHistoryLoad(getState().prevDate.loading))
				// console.log(getState() );  //data信息
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
				dispatch(getPrevDate())
				dispatch(getHistoryData(res.data))
				dispatch(setStopLoad())
	
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
export const setStartLoad =(data) =>{
	return {
		type:ActionTypes.SET_START_LOAD,
		data
	}
}
export const setStopLoad =(data) =>{
	return {
		type:ActionTypes.SET_STOP_LOAD,
		data
	}
}

export const getPrevDate =(date) =>{
	return {
		type:ActionTypes.PREV_DATE,
		date
	}
}