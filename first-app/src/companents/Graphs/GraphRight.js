import React from 'react';
import './Graph.scss';

class GraphRight extends React.Component {
    constructor(options) {
        super();
        this.rightTitle = options.rightTitle;
        this.rightPoint = options.rightPoint;

      }

      render(){
          return(
              <div className="graph-right">
                <p className="graph-right-title">{this.rightTitle}</p>
                <h1 className="graph-right-point">{this.rightPoint}</h1>
              </div>
          )
      }
}

export default GraphRight;