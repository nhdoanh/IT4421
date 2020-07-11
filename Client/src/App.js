import React from 'react';
import { createStore } from 'redux'
// import { Button } from 'element-react';
import 'element-theme-default';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './view/Layout/Footer';
import Header1 from './view/Layout/Header1.jsx';
import Primary from './view/Primary/Primary';
import GocHocTap from './view/GocHocTap';
import history from "./util/history";
import { Provider } from "react-redux";
import DefaultLayout from './view/Layout/views';
import { Route, Switch, Router } from "react-router-dom";
import rootReducer from './rootReducer';

const store = createStore(rootReducer);
const App = () => (
        <Provider store={store}>
         
          {/* <ModalDeleteWrapper ref={ref => register(ref)} /> */}
          <Router history={history}>
            <Switch>
              {/* <Route exact path="/primary" name="Primary" component={Primary} />
              <Route exact path="/tin" name="GocHocTap" component={GocHocTap} /> */}
              <Route path="/" name="Home" component={DefaultLayout} />
            </Switch>
          </Router>
        </Provider>
      );
      
      export default App;
