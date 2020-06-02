import React, {useState, useLayoutEffect, useEffect} from 'react';
import {
    List,
    ListItem, 
    Text,
    H1,
    CheckBox,
    Body,
    Spinner,
    Thumbnail
} from 'native-base';

import {color} from '../Component/color';
import { useSelector,useDispatch } from 'react-redux';

const InitQuestion = (props) => {
    const { question, positionExam,indexQuestion } = props;
    const { id,content,img, answers } = question;
    const [answerState, setAnswerState] = useState();
    const dispatch = useDispatch();
    useEffect( () => {   
        setAnswerState(
            answers.map(item => {
                return {
                    select: false,
                    box_color: color.BaseCheckBox,
                    id: item.id,
                    answer: item.answer,
                    check: item.check,
                }
            })
        );

    }, []);
    function updateUserAnswer(data) {
        dispatch({
            type: "UPDATE_USER_ANSWER",
            position: positionExam - 1,
            value: {
                "index": indexQuestion,
                "userAnswers": data
            }
        })
    }
    return (
        <List>
            <ListItem>
                <Body>
                    <H1>{content}</H1>
                    {
                    img == null ? null : <Thumbnail square large source={{uri: img}} style={{width: null, height: 130}} />
                    }
                    
                </Body>
            </ListItem>
            {
                answerState == undefined ? <Spinner style={{flex: 1}}/> : answerState.map( (item) => {
                    return <ListItem 
                            key={item.id}
                            button>
                                <CheckBox
                                color={item.box_color}
                                checked={item.select}
                                onPress={
                                    () => {
                                        
                                        setAnswerState(
                                            answerState.map(data => {
                                                if(item.id == data.id) {
                                                    if(!data.select) {
                                                        
                                                        data.box_color = color.CorrectCheckBox;
                                                    }
                                                    else {
                                                        
                                                        data.box_color = color.BaseCheckBox;
                                                    }
                                                    data.select = !data.select;
                                                }
                                                return data;
                                            }))
                                        updateUserAnswer(answerState);
                                    }
                                }
                                
                                />
                                <Body>
                                    <Text>{item.answer}</Text>
                                </Body>
                            </ListItem>
                })
            }
        </List>
    );
}
export default InitQuestion;