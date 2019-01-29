import React, { Component } from 'react'

export default class QAViewer extends Component {
  state = {
      openAll: false,
      showAnsFor: -1
  }
  showAnswerFor = (showAnsFor) => {
    let showIndex = -1
    if (showAnsFor !== this.state.showAnsFor) {
      showIndex = showAnsFor
    }
    this.setState({showAnsFor: showIndex})
  }
  render() {
    const {topic,title} = this.props
    const {showAnsFor} = this.state
    return (
      <div className="topics">
        <h1>{title}</h1>
        <div className="questions-answers">
          {topic.map((qa, index) => <div className="question" key={`qa-${index}`}>
              <h3 onClick={() => this.showAnswerFor(index)}>Q: <span>{qa.q}</span>
                <a target="_blank" href={qa.link}>[ read more ]</a>
                <button onClick={() => this.showAnswerFor(index)}>[ show answer ]</button> 
              </h3>
              {index === showAnsFor && <div className="answer">
                { Object.keys(qa.a).map((ans,index) => <div className="sub-ans" key={`ls-${index}`}>
                  <h3>{ans}</h3>
                  <ul >
                    {Object.keys(qa.a[ans]).map((akey,index) => <li key={`ans-${index}`}>{qa.a[ans][akey]}</li>)}
                  </ul>
                </div>)}
              </div>}
            </div>)}
          </div>
       </div>
    )
  }
}
