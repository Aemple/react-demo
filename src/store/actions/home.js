import * as types from '../action-types';
import {getSliders,getShow,getMenu} from '@/api/home';
export default {
    changeCategory(category){
        return {type:types.CHANGE_CATEGORY,payload:category}
    },
    getSliders() {
        return function (dispatch) {
            getSliders().then(sliders => {
                dispatch({
                    type: types.SET_HOME_SLIDERS,
                    payload: sliders
                });
            });
        }
    },
    getMenu() {
        return function (dispatch) {
            getMenu().then(menu => {
                dispatch({
                    type: types.SET_HOME_MENU,
                    payload: menu
                });
            });
        }
    },
    getShow() {
         //这二个参数是redux-thunk 提供的
        return function(dispatch,getState){
            let {category,show:{offset,limit,hasMore,loading}} = getState().home;
            if(hasMore && !loading){
                //保证初次渲染 上拉增加也954有loding
                dispatch({type:types.SET_HOME_SHOW_LOADING,payload:true});
                getShow(category, offset, limit).then(payload => {
                    dispatch({type:types.SET_HOME_SHOW,payload});
                });
            }
        }
    },
    refreshShow() {
        return function(dispatch,getState){
            let {category,show:{limit,loading}} = getState().home;
            if(!loading){
                //清空list loading=true
                dispatch({type:types.RESET_HOME_SHOW});
                getShow(category, 0, limit).then(payload => {
                    dispatch({type:types.REFRESH_HOME_SHOW,payload});
                });
            }
        }
    }
};
