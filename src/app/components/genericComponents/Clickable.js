import React, { Component } from 'react'



class Clickable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false,
            down: false
        }
        this.mouseOver = this.mouseOver.bind(this)
        this.mouseOut = this.mouseOut.bind(this)
        this.mouseDown = this.mouseDown.bind(this)
        this.mouseUp = this.mouseUp.bind(this)
    }

    mouseOver(event){
        // console.log('mouse enter')
       this.setState({hover:true})
    }

    mouseOut(){
        // console.log('mouse out')
        this.setState({hover:false})
    }

    mouseDown(){
        // console.log('mouse down')
        this.setState({down:true})
    }

    mouseUp(){
        // console.log('mouse up')
        this.setState({down:false})
    }



    render(){
        return <div 
        onClick = {this.props.onClick}
        onMouseEnter= {this.mouseOver} 
        
        onMouseLeave={this.mouseOut} 
        onMouseDown={this.mouseDown} 
        onMouseUp={this.mouseUp}
        style= {{ color: this.state.down ? 'black' : 'green', 
                opacity: this.state.hover ? 0.5 : 1,
                curser: 'pointer'}}>
        {this.props.children}
        </div>
    }
}

export default Clickable

