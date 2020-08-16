import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
import { PlyrComponent } from 'plyr-react';






class App extends React.Component {
   

 state = {
  videoID:'SRgwUpyI7t4',
 }
  constructor() {
    super();
    this.state = {
      videoID : 'SRgwUpyI7t4',
      sources: {
       type: 'video',
        sources: [
        {
            src: this.state.videoID,
            provider: 'youtube',
        },
    ],
}
    };
  }
  Account ({ match }) {
    // this.setState({
    //   videoID: match.params.account
    // });
    console.log('hello');
    //videoID = match.params.account;
    return <div>
      <PlyrComponent sources={{
       type: 'video',
        sources: [
        {
            src: match.params.account,
            provider: 'youtube',
        },
    ],
      }}/>
    </div>
  }
  render() {
    
    console.log('hi')
    return (
       
      <Router>
       
        <React.Fragment>
        <div>
      
      </div>
          <Route path='/:account'  component={this.Account} />
      
        </React.Fragment>
      </Router>

     
      
    )
  }
}

export default App