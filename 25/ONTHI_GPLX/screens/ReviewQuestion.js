import React from 'react';
import { 
    Container,
    Content,
    Text,
    H3,
    ListItem,
    Spinner,
    Body
} from 'native-base';
import { styles } from '../Component/Style.js';
import MyHeader from '../itemComponent/Header';
import { useSelector, useDispatch } from 'react-redux';
import { data } from '../data/Question';

const ReviewQuestion = (props) => {
    
    const { navigation,route } = props;
    const { itemId,mainId } = route.params;
    // const {data} = useSelector(state => ({...state.questionReducer}));
    return (
        <Container>
            <MyHeader title="Ôn tập câu hỏi" itemId={itemId} mainId={mainId} navigation={navigation} />
            <Content>
                {
                    data==undefined ? <Spinner style={{marginTop: 200}}/> : 
                    data.map((item) => {
                        const {id, type, description} = item;
                        return <ListItem 
                        onPress={() => navigation.navigate("ListQuestion", {
                            itemId: id,
                            mainId: mainId,
                            title: type
                        })}
                        key={id}>
                            <Body>
                                <H3 style={styles.Heading}>{type}</H3>
                                <Text style={styles.subText}>{description}</Text>
                            </Body>
                        </ListItem>
                    })
                }
            </Content>
        </Container>
    );
}
export default ReviewQuestion;