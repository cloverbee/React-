import React from 'react';

class App extends React.Component{

    state={
        clickedID:[],
    }
    handleChange=(id)=>{
        let index = this.state.clickedID.indexOf(id);
        if(index > -1){
            this.setState({
                clickedID: this.state.clickedID.slice(0, index) + this.state.clickedID.slice(index + 1, )
            })
        }
        else{
            this.setState({
                clickedID:this.state.clickedID + [id],
            })
        }
    }
    render(){
        return(
            <div>
                <input type='checkbox' value='black' onChange={()=>this.handleChange(0)}/>{'black'}
                <input type='checkbox' value='blue' onChange={()=>this.handleChange(1)}/>{"blue"}
                <input type='checkbox' value='red' onChange={()=>this.handleChange(2)}/>{'red'}
                <input type='checkbox' value='green' onChange={()=>this.handleChange(3)}/>{'green'}
                <br/>
                <b>{this.state.clickedID.length>0 && `${this.state.clickedID} is checked`}</b>
                    
            </div>
        )
    }
}
export default App;