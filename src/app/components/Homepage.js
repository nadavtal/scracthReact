import React, { Component } from 'react'
import SignUpModal from './SignUpModal';
import Clickable from './Clickable';
import { addProfile } from '../../redux/ActionCreaters';

const styles = {
    container: {
        width: '100%',
        height: '600px',
        position: 'relative',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        background: `Linear-gradient(to top right, purple, pink`,
        // border: '1px solid black'
    }
}

export default class Homepage extends React.Component{
    constructor(props) {
        super(props);
        this.state ={showModal :false}
    }
    render() {
        return(
            <div style={styles.container}>
                
                
                <Clickable onClick={() => this.setState({showModal: true})}>
                    <Title><h1>Sign up</h1></Title>
                </Clickable>
                {this.state.showModal && <SignUpModal addProfile={addProfile} onClose={() => this.setState({showModal: false})}></SignUpModal>}
            </div>
        );
    }  
}


const Title = ({children}) => <div style={{border: "1px solid black", alignItems: 'center'}}>{children}</div>



