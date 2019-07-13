import {get,post} from './index';

export function login(body){
    return post('/login',body);
}
export function reg(body){
    return post('/reg',body);
}
//把本地的cookie发给服务器，服务器判断cookie就否合法，
//如果合法返回此cookie对应的用户,如果cookie不合法，返回未登录的提示
