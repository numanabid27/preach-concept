import React from 'react'

export default function Error({text}:any) {
  return (
    <span style={{color:'red', lineHeight:1.1, display:'block'}}>{text}</span>
  )
}
