import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import moment from "moment";
// import {
//   AppBreadcrumb,
//   AppFooter,
//   AppHeader,
//   AppSidebar,
//   AppSidebarFooter,
//   AppSidebarForm,
//   AppSidebarHeader,
//   AppSidebarMinimizer,
//   AppSidebarNav,
// } from "@coreui/react";
// import navigation from "../navigation";
import routes from "../routes";
import { getAccessToken, } from "../../../util/Common";
// import Aside from "../../../components/Aside";
import Footer from "../Footer";
import Header1 from "../Header1";
import CareCustomer from "../../Primary/components/Care_customer";
import { EXPIRE_TIME } from '../../../util/Constant'

class DefaultLayout extends Component {
  componentDidMount() {
    if (!getAccessToken()) {
      this.props.history.push("/");
    }
    this.checkSessionTimeout()
  }

  checkSessionTimeout = () => {
    try {
      const currentTime = moment().valueOf()
      const expireTime = Number(localStorage.getItem(EXPIRE_TIME));
      if (expireTime > currentTime) {
        setTimeout(() => {
          this.props.setAlert({ message: 'Session expired' })
          this.signOut()
        }, (expireTime - currentTime))
      }
    } catch (err) {}
  }

  signOut(e) {
    if(e) e.preventDefault();
    this.props.logout();
    this.props.history.push("/login");
  }

  render() {
   
    console.log(routes);
    return (
      <div className="app">
        {/* <AppHeader fixed> */}
          
            <Header1/>
          
        {/* </AppHeader> */}
        <div className="app-body">
          
            
           
          <main className="main">
            {/* <AppBreadcrumb appRoutes={routes} /> */}
            <Container fluid>
              
                <Switch>
                  {routes.map((route, idx) => {
                    console.log(route);
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => <route.component {...props} />}
                      />
                    ) : null;
                  })}
                  {/* <Redirect from="/" to="/primary" /> */}
                </Switch>
              
            </Container>
          </main>
         
        </div>
        
          
            <CareCustomer /> 
            <Footer />
         
       
      </div>
    );
  }
}
export default DefaultLayout;
