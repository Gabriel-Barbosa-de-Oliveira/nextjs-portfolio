import { IButton } from '../../interfaces/IButton'
import React from 'react'

export default function Button(component?: IButton) {

    
    const fillClassType = component?.fillType === "bordered" ? "btn-bordered" : "btn-filled";  
    const buttonThemeName = component?.theme;
    
    return (
    <button className={`btn ${fillClassType} ${buttonThemeName}`}> 
        <span>{component?.text}</span>
    </button>
  )
}
