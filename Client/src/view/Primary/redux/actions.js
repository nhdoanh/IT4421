import RETRIVE_MATH_COURSES from './actionTypes';
import { API_STATUS } from '../../../util/Constant';
import history from "../../../util/history";
import { handleError } from "../../../util/Common";
import {
    callGetMathCourses
  } from "../apis";
const getMathCourses = id => async dispatch => {
    const type = RETRIVE_MATH_COURSES;
    dispatch({ type, apiStatus: API_STATUS.IN_PROGRESS });
    const res = await callGetMathCourses(id);
    if (res.data) {
        dispatch({
            type,
            courses: res.courses,
        })
    } else {
        handleError(dispatch, res);
        dispatch({
            type,
            apiStatus: API_STATUS.ERROR,
        })
    }
}

export default getMathCourses;