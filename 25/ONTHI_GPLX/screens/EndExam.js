import React from 'react';
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
    const listQuestion = useSelector(state => state.questionReducer)[positionExam].exams;
    const dispatch = useDispatch();
    function openModal() {
        dispatch({
            type: "OPEN_MODAL"
        })
    }
    const userAnswer = useSelector(state => state.userAnswerReducer);
    // console.log(listQuestion);
    return (
        <Container>
            <Header style={styles.header} hasTabs>
                <Left>
                    <Button transparent
                        onPress={() => navigation.navigate("ListComponent", {
                            itemId: itemId,
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
                    
                </Right>
            </Header>
            <Tabs 
                tabBarBackgroundColor={color.header}
                tabContainerStyle={{flex: 1}}
                renderTabBar={()=> <ScrollableTab />}
                >
                
                    {
                        userAnswer == undefined ? <Spinner style={{flex:1}}/> : userAnswer.map((item) => {
                            
                            if(listQuestion.indexOf(item.questionID) != -1) {
                                let textStyle = color.header;
                                if(item.isPass == false) textStyle = "red"; 
                                else if(item.isPass == null) textStyle = "#f57c00";
                                const heading = "Câu "+ item.index;
                                return (
                                    <Tab heading={heading} 
                                    textStyle={textStyle}
                                    tabStyle={{backgroundColor: color.header }}
                                    activeTabStyle={{backgroundColor: color.header }}>
                                        {
                                            item.userAnswers == null ? <QnA question={item} />
                                            : <ResultQuestion question={item} />
                                        }
                                    </Tab>
                                );
                            }

                        })
                    }
                </Tabs>
            <ModalReloadExam navigation={navigation} route={route} />
        </Container>
    );

}
export default EndExam;