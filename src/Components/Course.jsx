

import PropTypes from 'prop-types';
const Course = ({data,index}) => {
    console.log(data);
    const {name}=data;
    return (
        <>
               
                <p>{++index}. {name}</p>
                 
        </>
            
        
    );
};
Course.propTypes = {
    data:PropTypes.object,
    index:PropTypes.number
    
}
export default Course;