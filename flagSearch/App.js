import React from 'react';
import continents from './continents.json';
import Selector from './Selector.js';
import SecondSelector from './SecondSelector';


class App extends React.Component{

    state = {
        step1:"",
        step2:[],
        step3:[]
    }
    handleChange = (e) => {
        this.setState({step1:e.target.value})
    }
    handleSecond = (param) =>{
        
        console.log('passed from selector1',param);
        this.setState({
            step2:param/*.map((node, index)=>{
                let rObj = {}
                rObj.id = index;
                rObj.name = node.name;
                rObj.selected = false;
                rObj.key = 'countries';
                rObj.flag = node.flag;
                return rObj;
            })*/
        })
    }
    render(){
        //console.log(continents)
        return(
            <div>
               <Selector all = {continents} continent={continents.map(node=>node.continent)} handleSecond={this.handleSecond}></Selector>
               <SecondSelector countries={this.state.step2}/>
               
            </div>
        )
    }
}
export default App;