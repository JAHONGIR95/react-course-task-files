import { Component } from 'react';

import OverviewBars from '../../companents/OverviewBars/OverviewBars';

import './main.scss';

class Overview extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    render() {

        return(
            <div className="overview-top">
                <OverviewBars/>
            </div>
        )  
    }
}

// const Overview = () => {
//     return(
//         <div className="overview">
            
//         </div>
//     )
// }

export default Overview;