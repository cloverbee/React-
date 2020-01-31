import React from 'react';

class Selector extends React.Component{

    state = {
        step1:"",
        step2:[],
    }
    handleChange = (e) => {
        this.setState({step1:e.target.value})
        console.log("handle change");
        if(this.props.continent.includes(e.target.value)){
            //handle second
            //this.setState({step2: 00,});
            this.props.handleSecond(this.props.all[this.props.all.map(node=>node.continent).indexOf(e.target.value)].countries);
        }
    }
    
    render(){
        //console.log(this.props.continent)
        //console.log(this.props.continent.filter(node=>node.includes(this.state.step1)))
        //console.log(this.state.step1)
        //console.log('this.state.step2',this.state.step2)
        return(
            <div>
                <form action="/action_page.php">
                    <input list="continent" name="cotinents" value={this.state.step1} onChange={this.handleChange}/>
                    <datalist id="continent">
                        {this.props.continent.filter(node=>node.includes(this.state.step1)).map((node, index)=>{
                            return <option key={index} value={node}/>
                        })}
                        </datalist>
        
                </form>
            </div>
        )
    }
}
export default Selector;