import Index from '../views/Index'
import About from '../views/About'
import { component } from 'react'

const routes =[
  {
    path:'/',
    component:Index
  },
  {
    path:'/about',
    component:About
  }
]

export default routes