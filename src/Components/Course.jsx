

import PropTypes from 'prop-types';

const Course = ({data,index}) => {
    const {name}=data
   
    return (
        <div>
             <p>{++index}. {name}</p>
        </div>
    );
};
Course.propTypes = {
    data:PropTypes.object,
    index:PropTypes.number
    
}
export default Course;