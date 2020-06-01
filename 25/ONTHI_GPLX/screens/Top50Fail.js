import React from 'react';
import { 
    Container,
    Tab,
    Tabs,
    ScrollableTab,
    Spinner,
} from 'native-base';
import MyHeader from '../itemComponent/Header';
import QnA from '../itemComponent/QnA';
import { data } from '../data/Question';
import { color } from '../Component/color';

const Top50Fail = (props) => {
    const {navigation, route} = props;
    const {itemId, mainId} = route;

    return (
        <Container>
            <MyHeader title="50 câu nhiều người sai" itemId={itemId} mainId={mainId} navigation={navigation} />
            <Tabs 
                tabBarBackgroundColor={color.header}
                tabContainerStyle={{flex: 1}}
                renderTabBar={()=> <ScrollableTab />}
                >
                    {
                        data == undefined ? <Spinner style={{flex:1}}/> : 
                        data.map((item, index) => {
                            const {id, questions} = item;
                            
                            return questions.map(it => {
                                if(it.top50 == 1) {
                                    const heading = "Câu" + it.id;
                                    return (
                                        <Tab heading={heading} 
                                        tabStyle={{backgroundColor: color.header }}
                                        activeTabStyle={{backgroundColor: color.header }}>
                                            <QnA question={it} />
                                        </Tab>
                                    );
                                }
                            })
                        })
                    }
                </Tabs>
        
        </Container>
    );
}
export default Top50Fail;