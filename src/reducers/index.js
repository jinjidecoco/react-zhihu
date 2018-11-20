import { combineReducers } from 'redux'
import * as actionTypes  from '../actions/actionTypes'
import moment from 'moment'



const  newsLists =(state=[],action) => {
	switch(action.type) {
		case actionTypes.GET_LATEST_DATA:
			return action.data.stories
		case actionTypes.GET_HISTORY_DATA:
		    return [...state, ...action.data.stories];
		     //return Object.assign({},state,{
			 //   stories: state.stories.concat(action.data.stories),
			 // 	  date: moment(action.data.date).subtract(1,'day').format('YYYYMMDD')
			 // })
		default:
			return state;
	}
}
//轮播图
const newswiper =(state=[],action) =>{
	switch(action.type){
		case actionTypes.GET_LATEST_PIC:
		    return action.data.top_stories
	    default:
	        return state
    }    
}

const initState={
	curDate:moment().format('YYYYMMDD'),
	loading:true
}


const prevDate =(state = initState, action) =>{
	switch(action.type){
		case actionTypes.PREV_DATE:
	    	return {...state,curDate:moment(state.curDate).subtract(1,'day').format('YYYYMMDD'),}
	    case actionTypes.SET_START_LOAD:
	         return {...state,loading:true}	

		case actionTypes.SET_STOP_LOAD:
		    return {...state,loading:false}	
	    default:
	        return state
    }
}
const bgDisplay =(state={show:false},action) =>{
	switch(action.type){
		case actionTypes.SET_BG_SHOW:
			return {...state,show:true}
		case actionTypes.SET_BG_HIDE:
		    return {...state,show:false}	
	    default:
	        return state		
	}
}


export  default combineReducers({
	newsLists,prevDate,newswiper,bgDisplay
})