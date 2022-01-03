import React from 'react'
//css
import '../../css/error.css'
//resources
import error from '../../resources/error.png'

const Error = (props) => {
  return (
    <div className="error">
      <h2 className="center">
        {props.message}
      </h2>
      <img className="errorImg" src={error} alt="error"/>
    </div>
  )
}

export default Error
