import React, { Component } from 'react';
import Header from './Common/Header/Header'
import QAViewer from './Common/QAViewer/QAViewer';
import {connect} from  'react-redux'
class App extends Component {
  
  render() {
    const {qa, quesFor} = this.props
   
    return (
      <div>
        <Header />
        <QAViewer topic={qa[quesFor]} title={quesFor}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  qa: state.Java.QA,
  quesFor: state.Java.quesFor
}) 
export default connect(mapStateToProps,null)(App)
