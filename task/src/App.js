import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Navbar} from "./components/Navbar/Navbar";
import {Layout} from "./hoc/Layout/Layout";
import {routes} from "./routes";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Navbar />
            <Layout>
                {routes}
            </Layout>
        </BrowserRouter>
    );
  }
}


export default App;
