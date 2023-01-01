import React from 'react'
import Back from '../../components/atoms/Back'
import PageHeader from '../../components/atoms/PageHeader'

function Evaluation() {
  return (
    <>
    <div className="content">
        <div className="flex-content">
            <PageHeader title="評定メーカー" />
            <Back url="/app" />
        </div>
    </div>
    </>
  )
}

export default Evaluation