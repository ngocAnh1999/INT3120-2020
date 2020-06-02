import React from 'react';
import {
    Container,
    Tab,
    Tabs,
    ScrollableTab,
    H1
} from 'native-base';
import {useSelector} from 'react-redux';
import {styles} from '../Component/Style';
import {color} from '../Component/color';

import ResultQuestion from '../itemComponent/ResultQuestion';
import MyHeader from '../itemComponent/Header';

const QuestionFalse = (props) => {
    const { navigation,route } = props;
    const { itemId,mainId } = route.params;
    const listQuestion = useSelector(state => state.questionFailReducer);
    console.log("question False: " + JSON.stringify(listQuestion));
    return (
        <Container style={styles.container}>
            <MyHeader title="Xem lại các đáp án sai" itemId={itemId} mainId={mainId} navigation={navigation} />
            {
                listQuestion == undefined || listQuestion.length == 0 ? 
                <H1 style={{opacity: 0.66,flex: 1, alignSelf: 'center', marginTop: 60}}>Chưa có câu hỏi nào bị sai.</H1>
                :
                <Tabs 
                    tabBarBackgroundColor={color.header}
                    tabContainerStyle={{flex: 1}}
                    renderTabBar={()=> <ScrollableTab />}
                    >
                    
                        {
                            listQuestion == undefined ? <Spinner style={{flex:1}}/> : 
                            listQuestion.map(question => {
                                
                                if(question.userAnswers != null && question.userAnswers != undefined){
                                    let textStyle = color.textButton;
                                    exitFail = true;
                                    for(i = 0; i < question.userAnswers.length; i++) {
                                        if(question.userAnswers[i].select != question.userAnswers[i].check) {
                                            textStyle = "#ff1744";
                                            break;
                                        }
                                    }
                                    
                                    const heading = "Câu "+ (question.id);
                                
                                    return (
                                        <Tab heading={heading} 
                                        activeTextStyle={{color: textStyle}}
                                        tabStyle={{backgroundColor: color.header }}
                                        activeTabStyle={{backgroundColor: color.header }}>
                                            <ResultQuestion question={question} />
                                        </Tab>
                                    );
                                }
                            })
                        }
                    </Tabs> 
            }

        </Container>
    );

}
export default QuestionFalse;