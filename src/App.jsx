import {useState, useEffect  } from 'react'

import './App.css'
import Courses from './Components/Courses'
import { data } from 'autoprefixer'
import Course from './Components/Course'
 

function App() {

  const [courses,setCourses]=useState([])
  
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  },[])


  return (
    <>
      <div className=' md:flex md:justify-between md:w-9/12 mt-20 mb-20 md:mx-auto '>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 '>
      {
            courses.map(data=><Courses data={data}></Courses>)
      }
      </div>

      <div className=''>
        <Course></Course>
      </div>
      
      </div>
    </>
  )
}

export default App
