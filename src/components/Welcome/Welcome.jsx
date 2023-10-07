import React, { Component } from 'react'
import './Welcome.css'

export default class Welcome extends Component {
  render() {
    console.log('@Weclome',this);
    return (
      <div >Welcome To myApp !!!</div>
    )
  }
}
