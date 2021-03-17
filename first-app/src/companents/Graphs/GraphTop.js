import React from 'react';
import './Graph.scss';

class Graph extends React.Component {
    constructor() {
        super();
      }

      render(){
          return(
              <div className="graph-top">
                  <div className="top-right">
                      <h3 className="top-title">Today’s trends</h3>
                      <p className="top-info">as of 25 May 2019, 09:41 PM</p>

                  </div>
                  <div className="top-left">
                    <p className="day"><span className="line1"></span>Today</p>
                    <p className="day"><span className="line2"></span>Yesterday</p>
                  </div>
              </div>
          )
      }
}

export default Graph;