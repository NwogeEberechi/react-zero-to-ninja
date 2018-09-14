import React, { Component } from 'react'
import Display from './components/Display'
import ButtonWrapper from './components/ButtonWrapper'
import Button from './components/Button'
import './styles/app.scss'

class App extends Component {
  render () {
    return (
      <div id="root-container">
        <Display />
        <ButtonWrapper>
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="C" />

          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="/" />

          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="X" />

          <Button label="." />
          <Button label="0" />
          <Button label="=" />
          <Button label="+" />
        </ButtonWrapper>
      </div>
    )
  }
}

export default App
