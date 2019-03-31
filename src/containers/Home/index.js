import React,{Component,Fragment} from 'react';
import HomeHeader from './components/HomeHeader';
import HomeSwipe from './components/HomeSwipe';
import HomeShow from './components/HomeShow';
import HomeMenu from './components/HomeMenu';
import {connect} from 'react-redux';
import actions from '@/store/actions/home';
import {loadMore,downReferesh} from '@/utils';
import './index.less';

@connect(state => state.home, actions)
export default  class Home extends Component {
    componentDidMount(){
        this.props.getSliders();
        this.props.getMenu();
        this.props.getShow();
        loadMore(this.mainContent, this.props.getShow);
        downReferesh(this.mainContent, this.props.refreshShow)
    }
    render () {
        let {category,changeCategory,sliders,menu,show,refreshShow} = this.props;
        return (
            <Fragment>
                <HomeHeader 
                  category={category}
                  changeCategory={changeCategory}
                  refreshShow={refreshShow}
                />
                <div className="main-content" ref ={ ref=>this.mainContent =ref }>
                  <HomeSwipe sliders={sliders} />
                  <HomeMenu menu={menu}></HomeMenu>
                  <HomeShow show={show} getShow={this.props.getShow} />
                </div> 
            </Fragment>
        )
    }
}
