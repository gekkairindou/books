import React, { useState } from 'react'
import Back from '../../components/atoms/Back'
import tokenList from '../../js/tokenList'

function Theme() {
  const [token, setToken] = useState("");
  const handleToken = () => {
    setToken(tokenList.getRandToken);
  }

  return (
    <>
    <div className="content">
      <div className="flex-content">
        <h2>お題メーカー</h2>
        <button onClick={handleToken}>お題を出す</button>
        <div>{token}</div>
        <Back url="/app" />
      </div>
    </div>
    </>
  )
}

export default Theme