import React,{Component} from 'react';
import NavHeader from '@/components/NavHeader';
import {Redirect} from 'react-router-dom';
import './index.less';
//withRouter 什么时候才需要用withRouter,
//detail是由路由渲染出来的话，会有三个属性 history location match

export default class Detail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lesson: this.props.location.state || {}
        };
    }
    componentDidMount(){
        let lesson = this.state.lesson;
        if(!lesson || !lesson.title){
            let id = this.props.match.params.id;
        }
    }
    render(){
        let {lesson} = this.state;
        return (
            lesson?(
                <div className="lesson-detail">
                    <NavHeader title="商 品 详 情"/>
                    <img src={lesson.poster}/>
                    <p>{lesson.title}</p>
                    <p>{lesson.price}</p>
                </div>
            ):<Redirect to="/"/>
        )
    }
}
