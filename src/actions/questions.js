// questions.js
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_VOTE = 'ADD_VOTE';
export const ADD_QUESTION = 'ADD_QUESTION';


export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function addVote(questionId, vote, userId){
  return{
    type: ADD_VOTE,
    userId,
    questionId,
    vote
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}
