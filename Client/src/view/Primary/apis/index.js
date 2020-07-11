import { getAccessToken } from "../../../util/Common";
import { fetchAPI } from "../../../util/fetchAPI";
export const callGetMathCourses = id => 
    fetchAPI("https://courses", {id, accessToken: getAccessToken()})