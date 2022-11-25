import React,{useRef} from 'react'
import Test2 from './Test2'


function Test() {
    const tref=useRef();
    const handleClick=()=>{
        tref.current.focus();
    }
  return (
    <div>
        <Test2 ref={tref}/>
        <button onClick={handleClick}>Break</button>
    </div>
  )
}

export default Test