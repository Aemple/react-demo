import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.less';

export default class Tab extends Component {
    render () {
        return (
            <nav className="tab">
                <NavLink exact to="/" activeClassName='x'>
                <i className="iconfont icon-shouye"></i>
                首页
                </NavLink>

                <NavLink  to="/mime" activeClassName='y'>
                <i className="iconfont icon-jian1"></i>
                个性推荐
                </NavLink>

                <NavLink  to="/profile" activeClassName='z'>
                <i className="iconfont icon-wode"></i>
                个人中心
                </NavLink>
            </nav>
        )
    }
}
