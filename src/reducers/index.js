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
			 // 	stories: state.stories.concat(action.data.stories),
			// 	    date: moment(action.data.date).subtract(1,'day').format('YYYYMMDD')
			// })

		default:
			return state;
	}
}
const initState={
	curDate:moment().format('YYYYMMDD')
}


const prevDate =(state = initState, action) =>{
	switch(action.type){
		case actionTypes.PREV_DATE:
	    	return {...state,curDate:moment(state.curDate).subtract(1,'day').format('YYYYMMDD')}
	  //       return Object.assign({}, state, {
			// 	curDate: moment(state.curDate).subtract(1, 'days').format('YYYYMMDD')
			// })
	    default:
	        return state
    }
}


export  default combineReducers({
	newsLists,prevDate
})