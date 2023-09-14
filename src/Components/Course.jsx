

import PropTypes from 'prop-types';
const Course = ({data}) => {
    console.log(data);
    const {name}=data;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};
Course.propTypes = {
    data:PropTypes.object,
   
}
export default Course;