import React from 'react'

function PageHeader(props) {
  return (
    <div className="PageHeader">
        <h2>{props.title}</h2>
    </div>
  )
}

export default PageHeader