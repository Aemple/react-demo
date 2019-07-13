import React,{Component,Fragment} from 'react';
import Tab from '@/components/Tab';
import '@/common/rest.less';

export default class Home extends Component {
    render () {
        return (
            <Fragment>
                {this.props.children}
                <Tab/>
            </Fragment>
        )
    }
}
