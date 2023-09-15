import { useEffect, useState } from 'react'

import './App.css'
import Courses from './components/Courses'
import Course from './components/Course'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [courses, setCourses] = useState([])
  const [courseName, setCourseName] = useState([])
  const [credit,setCredit]=useState(0)
  const [remaining,setRemaining]=useState(20)
  

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  
  function handleName(data) {

    const Have = courseName.find(item=>item.id===data.id)
    if(Have){
      toast('Already added');
      
    }else{
      const NowCredit=credit+data.credit
      if(NowCredit>20){
        toast(`credit remaining ${remaining}`)
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
    <p className='text-center text-[32px] font-bold'>Course Registration</p>
      <div className='lg:flex  justify-center gap-5 px-5 my-10 md:px-[10%]'>

        <div className='grid lg:w-3/4  gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-10 '>
          {
            courses.map(data => <Courses key={data.id} handleName={handleName} data={data}></Courses>)
          }
        </div>



        <div className='lg:w-1/4 h-fit shadow-md  border bg-[#fff]  p-2 space-y-5 rounded-lg'>
          <p className="text-[20px] font-bold text-[#2F80ED;]">Credit Hour Remaining :{remaining}hr</p>
          <hr />
          <p className="text-[20px] font-bold">Course Name:</p>

          {
             courseName.map((data,index)=><Course index={index} key={data.id} data={data}></Course>)
          }
             <hr />
             <p  className="text-[20px] font-bold">Total Credit Hour :{credit}</p>
        </div>

      </div>


      <ToastContainer />
    </>
  )
}

export default App
