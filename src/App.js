import React, { Component } from 'react';
import Page1 from "./components/Page1" ;
// import Page2 from "./components/Page2";
// import Page3 from "./components/Page3";
import './App.css';
// import { runInThisContext } from 'vm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'page1',
      component: ''
    }
  }

  onRouteChange = (route) => {
  // Without code splitting
    // this.setState({ route: route });
  // With code splitting:
    if (route === 'page1') {
      this.setState({ route: route });
    } else if (route === 'page2' ) {
      import ("./components/Page2").then((Page2) => {
        console.log(Page2)
        this.setState({ route: route, component: Page2.default})
      })
    } else if (route === 'page3') {
      import ("./components/Page3").then((Page3) => {
        this.setState({ route: route, component: Page3.default})
      })
    }

  }



  render() {
    /* Without Code Splitting */
      // if (this.state.route === 'page1') {
      //   return <Page1 onRouteChange= {this.onRouteChange} />
      // } else if (this.state.route === 'page2') {
      //   return <Page2 onRouteChange={this.onRouteChange}/>
      // } else if (this.state.route === 'page3') {
      //   return <Page3 onRouteChange={this.onRouteChange}/>
      // }
    /* With Code Splitting */
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange= {this.onRouteChange} />
    } else {
      return <this.state.component onRouteChange = {this.onRouteChange} />
    }

    }
}

export default App;
