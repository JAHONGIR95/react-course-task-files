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
                  <GraphRight rightTitle="real" rightPoint="123"/>
                  <GraphRight rightTitle="real" rightPoint="123"/>
                  <GraphRight className="last-child" rightTitle="real" rightPoint="123"/>
                  <GraphMain/>
              </div>
          )
      }
}

export default OverviewGraph;