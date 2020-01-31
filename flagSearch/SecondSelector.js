import React from 'react';
import DisplayMaps from './DisplayMaps';
import Dropdown from './Dropdown';

class SecondSelector extends React.Component{

    state = {
        countries: this.props.countries,
        maps: []
    }
    toggleSelected =(id, countries)=>{
        let temp = countries;
        console.log('tmp', temp);
        temp[id].selected = !temp[id].selected
        this.setState({
          countries: temp,
          maps: temp.filter(node=>node.selected===true)
        })
    }
    render(){
        //const{list} = this.props
        //const{listOpen, headerTitle} = this.state

        //console.log('passed fmaps',this.props.countries.filter(node=>node.selected===true).map(node=>node.flag))
        return(
            <div className="dd-wrapper">
              <Dropdown title="Select Country" list={this.props.countries} toggleItem={this.toggleSelected}/>  
              <DisplayMaps maps={this.state.maps}/>
            </div>
        
        )
    }
} 

export default SecondSelector;