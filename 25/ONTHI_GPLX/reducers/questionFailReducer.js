export default function questionFailReducer (state = [], action) {

    switch (action.type) {
        case "UPDATE_FAIL":
            if(state.length > 0) 
                if (state.find(question => question.id == action.question.id) == undefined)
                    state.push(question);
            state.forEach(question => {
                if(question.id == action.question.id) {
                    question = action.question;
                }
            });
            return state;
        
        default:
            return state;
    }
}

