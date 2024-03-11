import React from 'react'

function Submit(props) {
  return (
    <div>
      <h3>Name: {props.cname}</h3>
      <h4>Email: {props.cemail}</h4>
      <h5>Phone: {props.cphone}</h5>
      <h6>cmessage: {props.cmessage}</h6>
    </div>
  )
}
export default Submit
