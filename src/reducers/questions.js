// questions.js
import { RECEIVE_QUESTIONS, ADD_VOTE, ADD_QUESTION } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
      case ADD_VOTE:
        const {userId, questionId, vote} = action
      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [vote]:{
            ...state[questionId][vote],
            votes: state[questionId][vote].votes.concat(userId)
          }
        }
      };
      case ADD_QUESTION:
        const {question} = action;
        return{
          ...state,
          [question.id]: question
        }
    default:
      return state;
  }
}
