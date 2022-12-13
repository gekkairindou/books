import React from 'react'

function Back(props) {

  return (
      <div 
        className="back" 
        id="title" 
        onClick={() => {
            window.location.pathname = props.url;
        }}
        >
          戻る
      </div>
  )
}

export default Back
