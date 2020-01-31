import React from 'react';

class DisplayMaps extends React.Component{

    render(){
        console.log("maps from step2", this.props.maps);
        return(
            <div>
            {   this.props.maps.map((node, index)=>
                
            <li key = {index}>
            {node.flag}
            </li>
                )
            }
            </div>
        )
    }
}
export default DisplayMaps;