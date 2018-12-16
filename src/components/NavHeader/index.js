import React,{Component} from 'react';
import './index.less';
import {withRouter} from 'react-router-dom';

@withRouter
export default class NavHeader extends Component {
    render(){
        return (
            <div className="navheader">
              <i 
              onClick={()=>this.props.history.goBack()}
              className="iconfont icon-gongxiangtubiaozhuangtaileicaozuolei59"></i>
                {this.props.title}
            </div>
        )
    }
}