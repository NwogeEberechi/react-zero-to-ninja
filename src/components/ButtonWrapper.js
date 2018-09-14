import React, { Component } from 'react'

class ButtonWrapper extends Component {
  render () {
    return <div className="buttons"> {this.props.children} </div>
  }
}
export default ButtonWrapper
