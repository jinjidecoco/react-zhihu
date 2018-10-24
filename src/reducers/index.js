import { combineReducers } from 'redux'
import * as actionTypes  from '../actions/actionTypes'
import moment from 'moment'


const initialState ={
   stories:[],
   date:'' 
};

const  newsLists =(state=initialState,action) => {
	switch(action.type) {
		case actionTypes.GET_LATEST_DATA:
			return {...state, 
				stories:action.data.stories,
				date:moment(action.data.date).subtract(1,'day').format('YYYYMMDD')
			}
		

		case actionTypes.GET_HISTORY_DATA:
		// 	return {...state, stories:action.data.stories,date:action.data.date}
		    return Object.assign({},state,{
				stories: state.stories.concat(action.data.stories),
				date: moment(action.data.date).subtract(1,'day').format('YYYYMMDD')
			})

		    // return action.data.stories	
		default:
			return state
	}
}


export  default combineReducers({
	newsLists
})