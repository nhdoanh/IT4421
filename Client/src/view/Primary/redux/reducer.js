import RETRIVE_MATH_COURSES from './actionTypes';

const toan = (state = {}, actions) => {
    const {type} = actions;
    switch (type) {
        case RETRIVE_MATH_COURSES:
            return {
                ...state,
                courses: actions.courses
            }
        default:
            return state;
    }
}

export default toan;