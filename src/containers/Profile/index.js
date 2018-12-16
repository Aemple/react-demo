import React, { Component } from 'react';
import './index.less';
import profile from '@/images/profile.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
@connect(state => state.session)
export default class Profile extends Component {
    render() {
        return (
            <div className="profile-all">
                <div className="profile">
                    <img src={profile} />
                    {
                        this.props.user ? <a>{this.props.user.username}</a> : <Link to="/login">登录</Link>
                    }
                </div>
                <div className="ggao"></div>
                <div className="profile-menu">
                    <div className="fuli">
                    <i className="iconfont icon-fuli"></i>
                    福利专区
                    </div>
                    <div className="dingd">
                    <i className="iconfont icon-huabanfuben"></i>
                    订单管理
                    <i className="iconfont icon-arrow-right right"></i>
                    </div>
                    <div className="xinxi">
                    <i className="iconfont icon-gerenxinxi"></i>
                    个人信息
                    <i className="iconfont icon-arrow-right right"></i>
                    </div>
                    <div className="yijian">
                    <i className="iconfont icon-yijianfankui"></i>
                    意见反馈
                    <i className="iconfont icon-arrow-right right"></i>
                    </div>
                    
                </div>
            </div>
        )
    }
}