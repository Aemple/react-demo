import React,{Component} from 'react';
import './index.less';
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import logo from '@/images/logo1.png';

export default class HomeHeader extends Component {
    constructor (props) {
        super(props);
        this.state = {
            menuShow: false
        };
        this.changeCategory = (event)=>{
        event.target.getAttribute('data-category');//{cateogry:'react'}
        let category = event.target.dataset.category;
        this.props.changeCategory(category);
        this.setState({menuShow:false});
        this.props.refreshShow();
        }
    }

    render () {
        let {menuShow} = this.state;
        return (
            <div className='home-header'>
              <div className="home-logo">
                <img src={logo} />
                <div onClick={() => this.setState({ menuShow: !menuShow })}>
                    {
                        menuShow ? <i className="iconfont icon-iconfontclose"></i> : <i className="iconfont icon-caidan"></i>
                    }
                </div>
              </div>
              <TransitionGroup>
                    {
                        menuShow && (
                            <CSSTransition timeout={500} classNames="fade">
                                <ul className="home-menus" onClick={this.changeCategory}>
                                    <li data-category="sucai" className={this.props.category=='sucai'?'active':''}>蔬菜(Vegetables)</li>
                                    <li data-category="shuiguo"  className={this.props.category=='shuiguo'?'active':''}>水果(Fruitage)</li>
                                </ul>
                            </CSSTransition>
                        )
                    }
                </TransitionGroup>
            </div>
        )
    }
}