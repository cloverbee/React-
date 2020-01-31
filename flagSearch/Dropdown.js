import React from 'react';
//import FontAwesome from 'react-fontawesome';

class Dropdown extends React.Component{
    
        constructor(props){
            super(props)
            this.state = {
                listOpen: false,
                headerTitle: this.props.title
            }
        }
        handleClickOutside(){
            this.setState({
                listOpen: false
            })
        }
        toggleList(){
            this.setState(prevState => ({
                listOpen: !prevState.listOpen
            }))
        }
        render(){
            const {list} = this.props;
            const {listOpen, headerTitle} = this.state
            console.log('list in dropdown', list);
            console.log("listOpen, headerTitle", listOpen, headerTitle);
            return(
                <div className="dd-wrapper" style={{border:"1px solid grey", width:"180px"}}>
                    
                    <div className="dd-header" onClick={() => this.toggleList()}>
                        <div className="dd-header-title" >{headerTitle}</div>
                        {(listOpen==='false')? <i class="fa fa-angle-up"></i> : <i class="fa fa-angle-down"></i>
                        }
                    </div>
                    {listOpen && <ul className="dd-list" >
                            {list.map((item, index) => (
                                <div key = {index} style={{display:"inline"}}>
                                    <li key={index} onClick={() => this.props.toggleItem(list.indexOf(item), list)}>{item.name} {item.selected && <p>&#10004;</p>}</li>
                                </div>
                            ))}
                            </ul>
                    }
                </div>
            
            )
        }
    } 

export default Dropdown;