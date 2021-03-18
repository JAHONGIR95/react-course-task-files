import { Component } from "react";

import OverviewBars from "../../companents/OverviewBars/OverviewBars";
import OverviewGraph from '../OverviewGraph/OverviewGraph';

import "./main.scss";

class Overview extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="overview">
        <div className="overview-top">
          <OverviewBars barTitle="Unresolved" barPoint="60" />
          <OverviewBars barTitle="OverDue" barPoint="16" />
          <OverviewBars barTitle="Open" barPoint="43" />
          <OverviewBars barTitle="On hold" barPoint="64" />
        </div>
        <div className="overview-middle">
            <OverviewGraph/>
        </div>
        <div className="overview-bottom">
          
        </div>
      </div>
    );
  }
}

// const Overview = () => {
//     return(
//         <div className="overview">

//         </div>
//     )
// }

export default Overview;
