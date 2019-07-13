import React, { Component} from 'react';
import './index.less'
import xx from '@/xx.png'

export default class HomeSwipe extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {menu} = this.props;
        const menu1 = menu.slice(0, 4);
        const menu2 = menu.slice(4, 8);
        return ( 
            <div className="home-menu">
                <ul>
                    {
                        menu1.map((item)=>(
                            <li key={item.id} className="menu-icon">
                                <img src={item.poster}></img>
                                <span>{item.title}</span>
                            </li>
                        ))
                    }
                    {/* <li className="menu-icon">
                      <img src={xx}></img>
                      <span>京东超市</span>
                    </li>
                    <li className="menu-icon">
                      <img src={xx}></img>
                      <span>京东超市</span>
                    </li>
                    <li className="menu-icon">
                      <img src={xx}></img>
                      <span>京东超市</span>
                    </li>
                    <li className="menu-icon">
                      <img src={xx}></img>
                      <span>京东超市</span>
                    </li> */}
                </ul>
                <ul>
                    {
                        menu2.map((item)=>(
                            <li key={item.id} className="menu-icon">
                                <img src={item.poster}></img>
                                <span>{item.title}</span>
                            </li>
                        ))
                    }
                    {/* <li className="menu-icon">
                      <img src={xx}></img>
                      <span>京东超市</span>
                    </li>
                    <li className="menu-icon">
                      <img src={xx}></img>
                      <span>京东超市</span>
                    </li>
                    <li className="menu-icon">
                      <img src={xx}></img>
                      <span>京东超市</span>
                    </li>
                    <li className="menu-icon">
                      <img src={xx}></img>
                      <span>京东超市</span>
                    </li> */}
                </ul>
            </div>
        )
    }
}
