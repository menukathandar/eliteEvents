'use client'
import { changeHeight, changeShape } from '@/redux/reducerSlices/boxSlice'
import { Button, Input } from '@nextui-org/react'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

const Box = () => {
    const {height, width, backgroundColor} = useSelector(state=>state.box)
    const dispatch = useDispatch()
  return (
    <div>
      <div style={{backgroundColor: backgroundColor, height: height, width:width, borderRadius: '50%' }}>
      </div>
    <Button>+Width</Button>
    <Button onClick={()=>dispatch(changeHeight())}>+Height</Button>
    <Button>Change to circle</Button>
    <Input placeholder='Enter color'/>

    </div>
  )
}

export default Box