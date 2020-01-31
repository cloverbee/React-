import React from 'react';

class App extends React.Component{
    state={
        name:'',
        email:"",
        department:"",
        total:"",
    }
    handleEmail=(e)=>{
        this.setState({
            email: e.target.value
        })
    }
    handleDepartment=(e)=>{
        this.setState({
            department:e.target.value
        })
    }
    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleSubmitForm=(e)=>{
        e.preventDefault();
        console.log("you want to contact", this.state.name, this.state.email,this.state.department);
        this.setState({
            total:"You want to connect"+this.state.name+this.state.department+this.state.email
        })
    }
    render(){
        return(
            <div style={{background:"blue", opacity:"0.7"}}>
            <form onSubmit={this.handleSubmitForm} >
                <input onChange={this.handleName} value = {this.state.name}/><br/>
                <input onChange={this.handleDepartment} value = {this.state.department}/><br/>
                <input onChange={this.handleEmail} value={this.state.email}/><br/>
                <input type="submit" value="Submit"/>
            </form>
            <b>{this.state.total}</b>
            </div>
        )
    }
}
export default App;