import React from 'react';
import './OverviewBottom.scss';

import LeftDetail from './LeftDetail';


class BottomLeft extends React.Component {

    render(){
        
        return(
            <div className="overview-bottom-left">
                <div className="title">
                    <div className="title-left">
                        <h3 className="title-top">Unresolved tickets</h3>
                        <p className="title-bottom">Group: <span className="title-next">Support</span></p>
                    </div>
                    <div className="title-right">View details</div>
                </div>
                <div className="main-side">
                    <LeftDetail detailLeft="Waiting on Feature Request" detailRight="4238"/>
                    <LeftDetail detailLeft="Awaiting Customer Response" detailRight="1005"/>
                    <LeftDetail detailLeft="Awaiting Developer Fix" detailRight="914"/>
                    <LeftDetail detailLeft="Pending" detailRight="201"/>
                </div>
            </div>
        )
    }
}

export default BottomLeft;