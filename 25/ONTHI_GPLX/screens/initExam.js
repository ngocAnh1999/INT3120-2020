import React, {useState} from 'react';
import { 
    Body, 
    Button, 
    Container, 
    Header, 
    Left, 
    Right, 
    ScrollableTab, 
    Tab, 
    Tabs, 
    Text, 
    Title,
    Drawer,
    Spinner
} from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';

import { color } from '../Component/color';
import { styles } from '../Component/Style.js';
import InitQuestion from '../itemComponent/InitQuestion';
import SideBar from '../itemComponent/SideBar';
import Clock from '../itemComponent/Clock';
import ModalEndExam from '../itemComponent/ModalEndExam';
import {data} from '../data/Question';

const InitExam = (props) => {
    const { navigation, route } = props;
    const { mainId,itemId,positionExam } = route.params;
    const [drawer, setDrawer] = useState();
    const listQuestion = useSelector(state => state.questionReducer)[positionExam].exams;
    const closeDrawer = () => {
        drawer._root.close();
    };
    const openDrawer = () => { 
        drawer._root.open();
    };
    
    const dispatch = useDispatch();

    function openModal() {
        dispatch({
            type: "OPEN_MODAL"
        })
    }
    var userAnswerState = useSelector(state => state.userAnswerReducer);
    console.log(userAnswerState.length);
    
    return (
        <Drawer 
        ref={(ref) => setDrawer(ref)} 
        content={<SideBar navigator={navigator} data = {listQuestion} />} 
        onClose={closeDrawer} 
        >
            <Container>
                <Header style={styles.header} hasTabs>
                    <Left>
                        <Button 
                        onPress={openDrawer}
                        transparent>
                            <FontAwesome5Icon name="bars" style={{fontSize: 20, color: color.textButton}} solid/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Đề thi {itemId == "ListExam" ? " số " + positionExam : " ngẫu nhiên"}</Title>
                    </Body>
                    <Right >
                        <Clock />
                        <Button success transparent 
                        onPress = {openModal}
                        style={{alignItems: 'center'}}>
                            <FontAwesome5Icon name="check-double" 
                            style={{fontSize: 20, color: color.textButton}} solid/>
                            {/* <Text style={{color: color.textButton}}>Nộp bài</Text> */}
                        
                        </Button>
                        
                    </Right>
                </Header>
                <Tabs 
                tabBarBackgroundColor={color.header}
                tabContainerStyle={{flex: 1}}
                renderTabBar={()=> <ScrollableTab />}
                >
                    {
                        data == undefined ? <Spinner style={{flex:1}}/> : data.map((item) => {
                            const {questions} = item;
                            var index_q = 1;
                            return questions.map(question => {
                                if(listQuestion.indexOf(question.id) != -1) {
                                    const heading = "Câu "+ index_q;
                                    dispatch({
                                        type: "SET_USER_STATE",
                                        value: {
                                            "index": index_q,
                                            "questionID": question.id,
                                            "content": question.content,
                                            "img": question.img,
                                            "answers": question.answers,
                                            "userAnswers": null,
                                            "isPass": null,
                                            "explain": question.explain
                                        }
                                    })
                                    index_q++;
                                    return (
                                        <Tab heading={heading} 
                                        tabStyle={{backgroundColor: color.header }}
                                        activeTabStyle={{backgroundColor: color.header }}>
                                            <InitQuestion question={question} index={index_q} />
                                        </Tab>
                                    );
                                }
                            })
                        })
                    }
                </Tabs>
                <ModalEndExam {...props} />
            </Container>
            
        </Drawer>
    );
}
export default InitExam;