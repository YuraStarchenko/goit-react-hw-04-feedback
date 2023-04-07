import { useState } from 'react';
import { Container } from './Container.styled';
import { GlobalStyle } from '../GlobalStyle';
import { Statistics } from './Feedback/Statistics/Statistics';
import { OptionsFeedback } from './Feedback/OptionsFeedbeck/OptionsFeedback';
import { Section } from './Feedback/Section/Section';
import { Notification } from './Feedback/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackBtnClick = event => {
    switch (event.target.value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  };

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <OptionsFeedback
					options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={feedbackBtnClick}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={Math.round(countPositiveFeedbackPercentage())}
          />
        )}
      </Section>
      <GlobalStyle />
    </Container>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   feedbackBtnClick = event => {
//     const value = event.target.value;
//     this.setState(prevState => {
//       return {
//         [value]: prevState[value] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return (this.state.good / this.countTotalFeedback()) * 100;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <Container>
//         <Section title={'Please leave feedback'}>
//           <OptionsFeedback
//             options={Object.keys({ good, neutral, bad })}
//             onLeaveFeedback={this.feedbackBtnClick}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={Math.round(
//                 this.countPositiveFeedbackPercentage()
//               )}
//             />
//           )}
//         </Section>
//         <GlobalStyle />
//       </Container>
//     );
//   }
// }
