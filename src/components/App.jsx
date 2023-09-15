import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  arrForMarkup = Object.keys(this.state);

  handleBtnClick = item => {
    this.setState(prev => ({ [item]: prev[item] + 1 }));
  };

  countTotalFeedback() {
    const { bad, good, neutral } = this.state;
    return bad + good + neutral;
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback() === 0
      ? 0
      : Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <div>
        <Section title="Please Leave feedback">
          <FeedbackOptions
            arrForMarkup={this.arrForMarkup}
            handleBtnClick={this.handleBtnClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              state={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
