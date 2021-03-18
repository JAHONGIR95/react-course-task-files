import React from 'react';
import './OverviewBottom.scss';

class LeftDetail extends React.Component {

    render(){

        const { detailLeft, detailRight } = this.props;
        return(
            <div className="LeftDetail">
                <p className="detail-left">{detailLeft}</p>
                <p className="detail-right">{detailRight}</p>
            </div>
        )
    }
}

export default LeftDetail;