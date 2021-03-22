import React from 'react';
import { GraphRight } from '../Graphs';
import './OverviewBottom.scss';

class BottomRight extends React.Component {

    render(){
        
        return(
            <div className="overview-bottom-right">
                <div className="title">
                    <div className="title-left">
                        <h3 className="title-top">Tasks</h3>
                        <p className="title-bottom">Today</p>
                    </div>
                    <div className="title-right">View details</div>
                </div>
            </div>
        )
    }
}

export default BottomRight;