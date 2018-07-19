import React, { Component } from 'react'

import Clickable from './genericComponents/Clickable';




export default class Homepage extends React.Component{
    constructor(props) {
        super(props);
        this.state ={showModal :false}
    }
    render() {
        return(
            <div >
                
{/*                 
                <Clickable onClick={() => this.setState({showModal: true})}>
                    <Title><h1>Sign up</h1></Title>
                </Clickable>
                {this.state.showModal && <SignUpModal addProfile={addProfile} onClose={() => this.setState({showModal: false})}></SignUpModal>} */}
            </div>
        );
    }  
}


const Title = ({children}) => <div style={{border: "1px solid black", alignItems: 'center'}}>{children}</div>



