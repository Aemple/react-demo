import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';

@connect(state => state.session)
export default  class PrivateRoute extends Component {
    render(){
        //path是匹配的路径 component是要渲染的组件
        let {path,component:Comp,user} = this.props;
        //Route的渲染有三种方式 component render children
        if(user){
            return <Route path={path} component={Comp}/>;
        }else{
            return <Redirect to={{pathname:'/login',state:{from:path}}}/>
        }
    }
}
