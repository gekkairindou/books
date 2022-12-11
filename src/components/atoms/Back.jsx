import React from 'react'

function Back(props) {

  return (
    <>
       <ul>
            <li 
            className="back" 
            onClick={() => {
                window.location.pathname = props.url;
            }}
            >
              <div id="title"><p>戻る</p></div>
            </li>
        </ul>
    </>
  )
}

export default Back