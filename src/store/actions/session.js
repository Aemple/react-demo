import * as types from '../action-types';
import {login,reg} from '@/api/session';
import {push} from 'react-router-redux';

export default {
    reg(body){
        return function(dispatch,getState){
            reg(body).then(payload=>{// {user,succcess,error}
                console.log(payload);
                
                dispatch({type:types.SET_SESSION,payload});
                //如果说注册成功，要跳到登录页登录，如果注册失败，重新填写提交
                if(!payload.error)
                  dispatch(push('/login'));
                  /**
                  dispatch( {
                    type:CALL_HISTORY_METHOD,
                    payload:{
                        method:'push',
                        args:['/login']
                    }
                   });
                    */
            });
        }
    },
    login(body){
        return function(dispatch,getState){
            login(body).then(payload=>{// {user,succcess,error}
                dispatch({type:types.SET_SESSION,payload});
                //如果说注册成功，要跳到登录页登录，如果注册失败，重新填写提交
                if(!payload.error){
                    let state =  getState().router.location.state;
                    let target = state?state.from:'/profile';
                    dispatch(push(target));
                }
            });
        }
    }
}
