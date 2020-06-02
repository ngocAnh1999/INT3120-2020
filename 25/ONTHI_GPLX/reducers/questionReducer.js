import {data} from '../data/Question';

function exam(data) {
    var exams = [];
    var lenData = 0;
    for (let i = 0; i < data.length; i++) {
        lenData += data[i].questions.length;
    }
    for (let i = 0; i < 15; i++) {
        var initExams = [];
        for (let j = 0; j < 20; j++) {
            do {
                id_question = parseInt(Math.random() * lenData % lenData + 1);
                if(lenData < 20) break;
            }
            while(initExams.indexOf(id_question) != -1);
            const question = null;
            for (let i = 0; i < data.length; i++) {
                question = data[i].questions.find(item => item.id == id_question);
                if(question != null || question != undefined) break;
            }
            let value = {
                ...question, "userAnswers": null
                
            }
            initExams.push(value);
        }
        exams.push({
            "id_exam": i +1,
            "exams": initExams
        })
    }
    return exams;
}
export default function questionReducer (state = exam(data), action) {
    switch (action.type) {
        case "UPDATE_USER_ANSWER":
            state[action.position].exams[action.value.index].userAnswers = action.value.userAnswers;
            return state;
        case "DELETE_USER_STATE":
            state.forEach(item => {
                item.exams.forEach(question => {
                    question.userAnswers = null;
                })
            });
            return state;
        default:
            return state;
    }
}
