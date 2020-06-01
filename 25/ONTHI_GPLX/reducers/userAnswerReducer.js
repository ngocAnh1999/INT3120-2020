var initState = []
export default function userAnswerReducer (state = initState, action) {
    switch (action.type) {
        case "SET_USER_STATE":
            var checkExit = false;
            for(let i = 0; i < state.length; i++) {
                if(state[i].questionID == action.value.questionID) {
                    state[i] = action.value;
                    checkExit = true;
                    break;
                }
            }
            if(checkExit == false) state.push(action.value);
            return state;
        case "UPDATE_USER_ANSWER":
            if(action.position == null) state.push(action.value);
            else {
                state[action.position] = action.value;
                console.log(state.length);
            }
            return state;
        case "DELETE_USER_STATE":
            for (let i = 0; i < state.length; i++) {
                let questionID = state[i].questionID;
                if(action.listQuestion.indexOf(questionID) != -1) {
                    delete state[i];
                }
            }
            return state;
        default:
            return state;
    }

}