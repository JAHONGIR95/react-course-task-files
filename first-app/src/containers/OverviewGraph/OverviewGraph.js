import React from 'react';

import {
    GraphTop,
    GraphRight,
    GraphMain
} from '../../companents/Graphs'
import './OverviewGraph.scss';

class OverviewGraph extends React.Component {
    constructor() {
        super();
      }

      render(){
          return(
              <div className="overview-graph">
                  <h1>overview graph</h1>
                  <GraphTop/>
                  <GraphRight rightTitle="Resolved" rightPoint="449"/>
                  <GraphRight rightTitle="Received" rightPoint="426"/>
                  <GraphRight rightTitle="Average first response time" rightPoint="33m"/>
                  <GraphRight rightTitle="Average response time" rightPoint="3h 8m"/>
                  <GraphRight className="last-child" rightTitle="Resolution within SLA" rightPoint="94%"/>
                  <GraphMain/>
              </div>
          )
      }
}

export default OverviewGraph;