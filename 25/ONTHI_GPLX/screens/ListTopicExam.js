import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Container, Header, 
    Body, Right,
    Title, Text,
    Button, 
    Card, CardItem, Left, 
} from 'native-base';
import { styles } from '../Component/Style';
import { color } from '../Component/color'
import { ScrollView,View } from 'react-native';
import MyHeader from '../itemComponent/Header';

const ListTopicExam = (props) => {

    const { navigation,route } = props;
    const { itemId,mainId } = route.params;
    const data = useSelector(state => state.questionReducer);
    return (
        <Container style={styles.container}>
            <MyHeader title="Danh sách đề thi" itemId={itemId} mainId={mainId} navigation={navigation} />
            <ScrollView style={{backgroundColor: color.containerColor,}}>
                <View style={{
                    paddingTop: 4,
                    paddingLeft: 6,
                    flex: 1, 
                    flexWrap: 'wrap',
                    flexDirection: 'row'
                }} 
                >
                {
                    data.map((item)=> {
                        return <Card transparent>
                                    <CardItem 
                                    style={styles.CardExam}
                                    button
                                    onPress = {() => navigation.navigate("initExam",
                                        {
                                            itemId: itemId,
                                            mainId: mainId,
                                            positionExam: item.id_exam,
                                        }
                                    )}
                                    >
                                        <Body style={{alignItems: 'center', justifyContent: 'center'}}>
                                            <Text style={{fontSize: 17}}>Đề thi số </Text>
                                            <Text style={{fontSize: 17}}>{item.id_exam}</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                    })
                }
                </View>
            </ScrollView>
        </Container>
    );
}

export default ListTopicExam;