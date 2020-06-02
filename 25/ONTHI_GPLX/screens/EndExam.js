import React, {useEffect} from 'react';
import {
    Container,
    Header,
    Title,
    Body,
    Tab,
    Tabs,
    ScrollableTab,
    Button,
    Right,
    Left
} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from '../Component/Style';
import {color} from '../Component/color';
import ModalReloadExam from '../itemComponent/ModalReloadExam';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import ResultQuestion from '../itemComponent/ResultQuestion';
import QnA from '../itemComponent/QnA';

const EndExam = (props) => {
    const {navigation, route} = props;
    const {itemId, mainId, positionExam} = route.params;
    const listQuestion = useSelector(state => state.questionReducer)[positionExam - 1].exams;
    const dispatch = useDispatch();
    
    const openModal = () => {
        dispatch({
            type: "OPEN_MODAL"
        })
    }
    const updateQuestionFail = (question) => {
        dispatch({
            type: "UPDATE_FAIL",
            question: question
        })
    }
    
    return (
        <Container style={styles.container}>
            <Header style={styles.header} hasTabs>
                <Left>
                    <Button transparent
                        onPress={() => navigation.navigate("ListComponent", {
                            mainId: mainId
                        })}
                    >
                        <FontAwesome5Icon name="arrow-left" style={{ fontSize: 20, color: 'white' }} solid />
                    </Button>
                </Left>
                <Body>
                    <Title>Kết quả bài thi {itemId == "ListExam" ? positionExam : " ngẫu nhiên"}</Title>
                </Body>
                <Right >
                    <Button transparent 
                    style={{alignItems: 'center'}}
                    onPress={openModal}
                    >
                        <FontAwesome5Icon name="redo-alt" 
                        style={{fontSize: 20, color: color.textButton}} solid/>
                        
                    </Button>
                    <ModalReloadExam navigation={navigation} route={route} />
                    
                </Right>
            </Header>
            <Tabs 
                tabBarBackgroundColor={color.header}
                tabContainerStyle={{flex: 1}}
                renderTabBar={()=> <ScrollableTab />}
                >
                
                    {
                        listQuestion == undefined ? <Spinner style={{flex:1}}/> : listQuestion.map((item,index) => {
                            
                            let textStyle = color.textButton;
                            if(item.userAnswers != null) {
                                updateQuestionFail(item)
                                for(let i = 0; i < item.userAnswers.length; i++) {
                                    if(item.userAnswers[i].select != item.userAnswers[i].check) {
                                        textStyle = "#ff1744";
                                        break;
                                    }
                                }

                            }
                            else textStyle = "#ffee58";

                                
                            const heading = "Câu "+ (index+1);
                            
                            return (
                                <Tab heading={heading} 
                                activeTextStyle={{color: textStyle}}
                                tabStyle={{backgroundColor: color.header }}
                                activeTabStyle={{backgroundColor: color.header }}>
                                    {
                                        item.userAnswers != null && item.userAnswers != undefined ? <ResultQuestion question={item} />
                                        : <QnA question={item} />
                                    }
                                </Tab>
                            );
                        
                        })
                    }
                </Tabs>
            
        </Container>
    );

}
export default EndExam;