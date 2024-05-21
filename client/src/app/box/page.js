'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const Box = () => {
    const {backgroundColor,height,width} = useSelector(state=>state.box)
  return (
    <div style = {{backgroundColor: backgroundColor, height: height, width:width }}>
        {backgroundColor}
        {height}
        {width}
    </div>
  )
}

export default Box