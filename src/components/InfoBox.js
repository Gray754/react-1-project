import React, {Component} from 'react';
import Students from './Students';

class InfoBox extends Component{
    constructor(props){
        super(props);
        this.state={
            previous: null,
            next: null
        }
    }
    
    render(props){
        return(
            <div className="infoBox">
                <Students/>
            </div>
        )
    }

}

export default InfoBox;