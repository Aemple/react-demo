import React,{Component} from 'react';
import './index.less'
import profile from '@/images/profile.png';
import NavHeader from '@/components/NavHeader';
import Alert from '@/components/Alert';
import {Link} from 'react-router-dom';
import actions from '@/store/actions/session';
import {connect} from 'react-redux';
@connect(
    state=>state.session,
    actions
)
export default class Login extends Component {
    handleSubmit = (event)=>{
        let username = this.username.value;
        let password = this.password.value;
        this.props.login({username,password});
    }
    render () {
        return (
            <div className="login">
                <NavHeader title="登 录"/>
                <div className="login-bg">
                    <img src={profile}/>
                </div>
                用户名:<input ref={ref=>this.username=ref} type="text" placeholder="请输入用户名"/>
                密码:<input  ref={ref=>this.password=ref} type="password"  placeholder="密码"/>
                <button onClick={this.handleSubmit}>登&nbsp;&nbsp;录</button>
                 <Link to="/reg">还没有账号？赶快前往注册吧！</Link>
                 {
                    (this.props.success||this.props.error)&&(
                        <Alert
                        type={this.props.success?'success':'error'}
                        message={this.props.success||this.props.error}
                       />
                    )
                }
            </div>
        )
    }
}