import React,{forwardRef} from 'react'

function Test2(props,ref) {
  return (
    <div><input className=' bg-red-300' type="text" ref={ref} /></div>
  )
}

export default forwardRef(Test2)