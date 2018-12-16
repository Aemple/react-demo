import React,{Component} from 'react';
import './index.less'
import ReactSwipe from 'react-swipe';
export default class HomeSwipe extends Component{
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }
    render(){
        let swipeOptions = {
            continuous:true,
            callback:(index)=>{
                this.setState({index});
            }
        }
        let {sliders} = this.props;
        return (
            <div className="home-swipe">
            {
                sliders.length>0?(
                    <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
                        {
                            sliders.map((item,index)=>(
                                <div key={index}>
                                    <img src={item}/>
                                </div>
                            ))
                        }
                    </ReactSwipe>
                ):null
            }
                <div className="dots">
                    {
                        sliders.map((item,index)=>(
                            <span className={`dot ${index==this.state.index?'active':''}`} key={index}></span>
                        ))
                    }
                </div>
            </div>
        )
    }
}