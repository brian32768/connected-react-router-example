import React from 'react'
import HelloChild from './HelloChild'

const Hello = (props) => {
    console.log("Hello", props);
    return (
      <div>
        <div>Hello</div>
        <HelloChild />
      </div>
    )
}

export default Hello
