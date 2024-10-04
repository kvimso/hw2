import React from 'react'
import './Button.css'

export default function Button({ButtonText, gamaferi, sigane, sigrdze,}) {
  return (
    <div className='container'>
        <button className='gilak' style={{backgroundColor:gamaferi, width:sigane, height:sigrdze,}}>
            {ButtonText}
        </button>
    </div>
  )
}
