import React from 'react';
import 'element-theme-default';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card'
import SearchBar from './components/SearchBar';
import Toan from './components/Toan';
import Setup from './components/Setup_learn';
import SchoolNews from './components/School_news';
import DoVui from './components/Do_vui';
import CareCustomer from './components/Care_customer';
import News from './components/News';
import KhoaHocTot from '../KhoaHocTot';


class Primary extends React.Component {
    constructor(props) {
        super(props);
        
    }

    
    render() {
        // const {
        //     match: {
        //       params: { id },
        //     },
        //   } = this.props;

    return (
        <>
            <Card id={1}/>
            {/* <SearchBar />
            <Toan />
            <Setup />
            <SchoolNews />
            <News />
            <DoVui />
            <CareCustomer /> */}
            {/* <KhoaHocTot /> */} */}
        </>
    );
}
}

export default Primary;