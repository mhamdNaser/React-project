import React from 'react'
import { useState } from 'react'

const StateExam = () => {
    const [count, setCount]= useState(0); // count = The now value , setCount i use it to change the value , use state = start Value
    const [text, setText]= useState('text'); 
    // console.log(count);

    const increase=()=>{
        setCount(count +1)
    }
    const decrease=()=>{
        setCount(count -1)
    }

    const textChange=(event)=>{
        setText(event.target.value)
    }
    
  return (
    <div className='row p-5 m-3 justify-content-center'>
        <div class="col-lg-6 g-2">
            <div class="row justify-content-center align-items-center g-2  g-2 m-5">
                <div class="col-lg-6 g-2 text-center">
                    <button className='col-lg-6 btn btn-success' onClick={increase}>+</button>
                </div>
                <div class="col-lg-6 g-2 text-center">
                    <button className='col-lg-6 btn btn-success' onClick={decrease}>-</button>
                </div>
            </div>
            <div class="row justify-content-center align-items-center g-2 m-5">
                <label className='row bg-success text-white fs-3 p-3'><p className='col-lg-6'>Count is </p>{count}</label><br/> 
            </div>
            <div class="row justify-content-center align-items-center g-2 m-5">
                <input type="text" value={text} onChange={textChange}/>
                <label><p>Your Text is </p>{text}</label>
            </div>
            
        </div>
    </div>
  )
}

export default StateExam