import React from 'react';
import { isMobile } from 'react-device-detect';
import MobileHandler from './MobileHandle';
import Routing from './Routing';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { windowWidth: window.innerWidth };
    }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    const windowWidth = this.state; 

    return (
      <div>
        {isMobile ? <MobileHandler /> : <Routing />}
      </div>
    )
  }
}

export default App
