
import PropTypes from 'prop-types';
const Courses = ({data,handleName}) => {
    const{name,course_cover_img,description,price,credit}=data;
   
    return (
        <div className="w-[320px] mx-auto h-[400px] shadow-md  border bg-[#fff] text-center p-2 space-y-5 rounded-lg">
              <img className="w-fit mx-auto" src={course_cover_img} alt="" />
              <p className="text-[18px] font-bold">{name}</p>

              <p className="text-start text-[18px] font-light w-fit mx-auto ml-5 "><small>{description}</small></p>

              <div className="flex text-[#1C1B1B99]  justify-center font-medium gap-10">

                <div className="">
                     <p>Price:{price}</p>
                </div>



                <div>
                    <p>Credit:{credit}hr</p>
                </div>
                      
                      
              </div>
              <button onClick={()=>{handleName(data)}} className=" w-72 relative top-[-10px] mx-auto bg-purple-500 py-3 rounded-md text-lg font-medium text-[#fff]">Select</button>

        </div>
    );
};

Courses.propTypes = {
    data:PropTypes.object,
    handleName:PropTypes.func,
}
export default Courses;