import React from 'react';
import { 
    Container,
    Tab,
    Tabs,
    ScrollableTab,
    Spinner
} from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import MyHeader from '../itemComponent/Header';
import QnA from '../itemComponent/QnA';
import { color } from '../Component/color';
import {data} from '../data/Question';
const ListQuestion = (props) => {

    const { navigation,route } = props;
    const { itemId,mainId,title } = route.params;
    // const {data} = useSelector(state => ({...state.questionReducer}));

    return (
        <Container>
            <MyHeader title={title} itemId={itemId} mainId={mainId} navigation={navigation} />
            <Tabs 
                tabBarBackgroundColor={color.header}
                tabContainerStyle={{flex: 1}}
                renderTabBar={()=> <ScrollableTab />}
                >
                    {
                        data == undefined ? <Spinner style={{flex:1}}/> : 
                        data.map((item, index) => {
                            const {id, questions} = item;
                            if (itemId == 1) {
                                return questions.map(it => {
                                    const heading = "Câu" + it.id;
                                    return (
                                        <Tab heading={heading} 
                                        tabStyle={{backgroundColor: color.header }}
                                        activeTabStyle={{backgroundColor: color.header }}>
                                            <QnA question={it} />
                                        </Tab>
                                    );
                                })
                            }
                            else if(id == itemId) {
                                    return questions.map(it => {
                                        const heading = "Câu" + it.id;
                                        return (
                                            <Tab heading={heading} 
                                            tabStyle={{backgroundColor: color.header }}
                                            activeTabStyle={{backgroundColor: color.header }}>
                                                <QnA question={it} />
                                            </Tab>
                                        );
                                    })
                                }
                        })
                    }
                </Tabs>
        
        </Container>
    );
}
export default ListQuestion;