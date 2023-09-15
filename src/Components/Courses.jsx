import { FaDollarSign, FaBook } from 'react-icons/fa'
import PropTypes from 'prop-types';
const Courses = ({ data, handleName }) => {
    const { name, course_cover_img, description, price, credit } = data
    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl ">
                <figure><img className='w-full m-5' src={course_cover_img} alt="Shoes" /></figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-[18px] font-light'>{description}</p>
                    <div className='flex flex-wrap text-[#1C1B1B99]  justify-center font-medium text-center items-center gap-5'>
                        <p className='flex items-center gap-1'><FaDollarSign/> Price:{price}</p>
                        <p className='flex items-center gap-1'><FaBook/> Credit:{credit}hr</p>
                    </div>
                    <div onClick={()=>{handleName(data)}} className="card-actions ">

                        <button className="btn btn-primary w-full">select</button>
                    </div>
                </div>
            </div>
        </>
    );
};
Courses.propTypes = {
    data:PropTypes.object,
    handleName:PropTypes.func,
}
export default Courses;