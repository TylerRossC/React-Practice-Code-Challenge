import React, { Fragment, useState } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  const[idx, setIdx] = useState(0)

  const renderSushi = () => {
    const sushiSlice = props.sushiItems.slice(idx, idx + 4)
    return sushiSlice.map(sushi => {
      return <Sushi key = {sushi.id} sushi = {sushi} updateMoney = {props.updateMoney} money = {props.money}/>
    })
  }
  
  const handleIdxChange = () => {
    setIdx(idx + 4)
  }
  
  return (
    <Fragment>
      <div className="belt">
        
         {renderSushi()}
        
        <MoreButton handleIdxChange = {handleIdxChange} />
      </div>
    </Fragment>
  )
}

export default SushiContainer