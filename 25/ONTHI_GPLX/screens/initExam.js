import React, {useEffect} from 'react';
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
// import SideBar from '../itemComponent/SideBar';
import Clock from '../itemComponent/Clock';
import ModalEndExam from '../itemComponent/ModalEndExam';

const InitExam = (props) => {
    const { navigation, route } = props;
    const { mainId,itemId,positionExam } = route.params;
    const listQuestion = useSelector(state => state.questionReducer)[positionExam - 1].exams;
    // const [drawer, setDrawer] = useState();
    // const closeDrawer = () => {
    //     drawer._root.close();
    // };
    // const openDrawer = () => { 
    //     drawer._root.open();
    // };
    
    
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch({
            type: "OPEN_MODAL"
        })
    }
    
    // const stateModalReload = useSelector(state => state.modalReloadExamReducer);
    // if(stateModalReload) {
    //     dispatch({
    //         type: "CLOSE_MODAL_RELOAD"
    //     })
    // }
   
    return (
        // <Drawer 
        // ref={(ref) => setDrawer(ref)} 
        // content={<SideBar navigator={navigator} data = {listQuestion} />} 
        // onClose={closeDrawer} 
        // >
            <Container>
                <Header style={styles.header} hasTabs>
                    <Left>
                        <Button 
                        // onPress={openDrawer}
                        transparent>
                            <FontAwesome5Icon name="bars" style={{fontSize: 20, color: color.textButton}} solid/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Đề thi {itemId == "ListExam" ? " số " + positionExam : " ngẫu nhiên"}</Title>
                    </Body>
                    <Right >
                        <Clock {...props} />
                        <Button success transparent 
                        onPress = {openModal}
                        style={{alignItems: 'center'}}>
                            <FontAwesome5Icon name="check-double" 
                            style={{fontSize: 20, color: color.textButton}} solid/>
                            {/* <Text style={{color: color.textButton}}>Nộp bài</Text> */}
                        
                        </Button>
                        <ModalEndExam navigation={navigation} route={route} />
                    </Right>
                </Header>
                <Tabs 
                tabBarBackgroundColor={color.header}
                tabContainerStyle={{flex: 1}}
                renderTabBar={()=> <ScrollableTab />}
                >
                    {
                        listQuestion == undefined ? <Spinner style={{flex:1}}/> : listQuestion.map((item,index) => {
                 
                            const heading = "Câu "+ (index+1);
                            return (
                                <Tab heading={heading} 
                                tabStyle={{backgroundColor: color.header }}
                                activeTabStyle={{backgroundColor: color.header }}>
                                    <InitQuestion question={item} positionExam={positionExam} indexQuestion={index} />
                                </Tab>
                            );
                            
                        })
                    }
                </Tabs>
                
            </Container>
            
        // </Drawer>
    );
}
export default InitExam;