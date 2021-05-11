// users.js
import { RECEIVE_USERS, ADD_VOTE_TO_USER, ADD_QUESTION_TO_USER } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_VOTE_TO_USER:
      const { userId, questionId, vote } = action
      return {
        ...state,
        [userId]: {
          ...state[userId],
          answers: {
            ...state[userId].answers,
            [questionId]: vote
          }
        }
      };
      case ADD_QUESTION_TO_USER:
        const { question } = action
        return {
          ...state,
          [question.author]: {
            ...state[question.author],
            questions: state[question.author].questions.concat(question)
          }
        };
    default:
      return state;
  }
}
