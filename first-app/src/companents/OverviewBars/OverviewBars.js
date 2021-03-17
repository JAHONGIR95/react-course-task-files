import React from 'react';
import './OverviewBars.scss';

class OverviewBars extends React.Component {
    constructor(options){
        super();
        this.barPoint = options.barPoint;
        this.barTitle = options.barTitle;
          
    }
    
    render(){

        return(
            <div className="bar-holder">
                <p className="bar-title">{this.barTitle}</p>
                <h1 className="bar-point">{this.barPoint}</h1>
            </div>
        )
    }
}

export default OverviewBars;