import React,{Component} from 'react';
import './index.less'
import loading from '@/images/loading.gif';

export default class Loading extends Component {
    render () {
        return (
            <div className="loading">
                <img src={loading}/>
            </div>
        )
    }
}
