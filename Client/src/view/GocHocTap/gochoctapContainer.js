import { connect } from "react-redux";
import GocHocTap from './index'


const mapStateToProps = ({math: {courses, id}}) => ({
    courses, id
})

// const mapDispatchToProps = { getMathCourses };

export default connect(mapStateToProps, null)(GocHocTap);