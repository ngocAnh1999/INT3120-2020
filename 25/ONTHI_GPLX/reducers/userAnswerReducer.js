var initState = []
export default function userAnswerReducer (state = initState, action) {
    switch (action.type) {
        case "SET_USER_STATE":
            var checkExit = false;
            for(let i = 0; i < state.length; i++) {
                if(state[i].questionID == action.value.questionID) {
                    state[i] = action.value;
                    console.log("log check exit true" + state[i].questionID);
                    checkExit = true;
                }
            }
            if(checkExit == false) {
                console.log("checkExit false: " + action.value.questionID);
                state.push(action.value);
            }
            // console.log("SET_USER_STATE "+ action.value);
            return state;
        
        default:
            return state;
    }

}