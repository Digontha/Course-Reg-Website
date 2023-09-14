import {useState, useEffect  } from 'react'

import './App.css'
import Courses from './Components/Courses'

import Course from './Components/Course'
 

function App() {

  const [courses,setCourses]=useState([])

  const [courseName,setCourseName]=useState([])
  
  const [credit,setCredit]=useState(0)
  const [remaining,setRemaining]=useState(20)


  
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  },[])

  function handleName(data){
      
    const Have = courseName.find(item=>item.id===data.id)
    if(Have){
      alert('Already have')
    }else{
      const NowCredit=credit+data.credit
      if(NowCredit>20){
        alert(`credit remaining ${remaining}`)
      }else{
        const NewName =[...courseName,data]
        const NewCredit = credit+data.credit
        setCredit(NewCredit)
        setRemaining(remaining-data.credit)
        setCourseName(NewName)
      }
     
    }
    


    

  }

  return (
    <>
      <div className=' md:flex md:justify-between md:w-9/12 mt-20 mb-20 md:mx-auto '>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 '>
      {
            courses.map(data=><Courses key={data.id} handleName={handleName} data={data}></Courses>)
      }
      </div>




      


       <div className=' className=" w-[350px] mx-auto h-fit shadow-md  border bg-[#fff] text-start p-2 space-y-5 rounded-lg'>
       <p className="text-[20px] font-bold text-[#2F80ED;]">Credit Hour Remaining :{remaining}</p>
       <p className="text-[20px] font-bold">Course Name:</p>

       {
          courseName.map(data=><Course key={data.id} data={data}></Course>)
        }
             <p  className="text-[20px] font-bold">Total Credit Hour :{credit}</p>
       </div>

      


      </div>
    </>
  )
}

export default App
