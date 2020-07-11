import { connect } from "react-redux";
import Primary from './Primary';
import getMathCourses from './redux/actions';

// const mapStateToProps = ({math: {courses, id}}) => ({
//     courses, id
// })

const mapDispatchToProps = { getMathCourses };

export default connect(null, mapDispatchToProps)(Primary);