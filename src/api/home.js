import {get,post} from './index';

export function getSliders(){
    return get('/getSliders');
}

export function getMenu() {
    return get('/getMenu');
}

export function getShow(category, offset, limit) {
    return get(`/getShow/${category}?offset=${offset}&limit=${limit}`);
}

