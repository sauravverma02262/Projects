import React, { Component } from 'react'
import { connect } from 'react-redux'
import {topics} from '../../../Store/Data/Topics'
import {setTopic} from '.././../../Store/JavaQuestions/actionCreator'
export class Header extends Component {
  getQuestion = (topic) => {
    this.props.setTopic(topic)
  }
  render() {
    const {appTitle} = this.props
    return (
      <div className="app-header">
        <div className="app-title">{appTitle}</div>
        <nav>
          {topics.map((topic, index) => <div key={index} onClick={() => this.getQuestion(topic)}>{topic.toUpperCase()}</div>)}
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  appTitle: state.Header.appTitle
})

const mapDispatchToProps = {
  setTopic
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
