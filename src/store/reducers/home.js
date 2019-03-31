import * as types from '../action-types';

let initState = {
    category: 'all', //菜品分类
    sliders: [], //此处放置轮播图的数据
    menu: [], //此处放置菜单的数据
    show: {
        list:[],//商品列表数据
        hasMore:true,//是否还有数据
        offset:0,//取下一页数据的偏移量
        limit:5,//每页的条数
        loading:false//是否正在加载
    }
}

export default function(state=initState,action) {
    switch (action.type) {
        case types.CHANGE_CATEGORY:
            return { ...state,
                category: action.payload
            };
        case types.SET_HOME_SLIDERS:
            return { ...state,
                sliders: action.payload
            };
        case types.SET_HOME_MENU:
            return { ...state,
                menu: action.payload
            };
        case types.SET_HOME_SHOW:
            return { ...state,
                show: {
                    ...state.show,
                    list: [...state.show.list, ...action.payload.list],
                    hasMore: action.payload.hasMore,
                    offset: state.show.offset + action.payload.list.length,
                    loading: false
                }
            };
        case types.RESET_HOME_SHOW:
            return { ...state,
                show: {
                    ...state.show,
                    list: [],
                    hasMore: true,
                    offset: 0,
                    loading: true
                }
            };
        case types.REFRESH_HOME_SHOW:
            return { ...state,
                show: {
                    ...state.show,
                    list: action.payload.list,
                    hasMore: action.payload.hasMore,
                    offset: action.payload.list.length,
                    loading: false
                }
            };
        case types.SET_HOME_SHOW_LOADING:
            return { ...state,
                show: {
                    ...state.show,
                    loading: action.payload
                }
            };
        default:
            return state;
    }
}
