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
            
            initExams.push(id_question);
        }
        initExams.sort();
        exams.push({
            "id_exam": i +1,
            "exams": initExams
        })
    }
    return exams;
}
export default function questionReducer (state = exam(data), action) {
    switch (action.type) {
        default:
            return state;
    }
}
