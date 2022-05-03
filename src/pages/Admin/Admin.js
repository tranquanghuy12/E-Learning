import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
        <NavLink className='btn btn-dark' to='/home'>Trở về</NavLink>
    </div>
  )
}
