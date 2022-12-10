import React from 'react'

function Back() {

  return (
    <>
       <ul>
            <li 
            className="back" 
            onClick={() => {
                window.location.pathname = "/app";
            }}
            >
              <div id="title"><p>戻る</p></div>
            </li>
        </ul>
    </>
  )
}

export default Back