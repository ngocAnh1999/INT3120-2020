import React from 'react';
import {View} from 'react-native';
import { 
    Content,
    Text,
    Card,
    CardItem,
    H1,
    List,
    ListItem
} from 'native-base';
import {styles} from '../Component/Style';
import {color} from '../Component/color';

// component cửa sổ danh sách câu hỏi trong bài thi
const SideBar = (props) => {
    const {data} = props;
    return (
        <Content style={{backgroundColor: color.containerColor}}>
            <List>
                <ListItem itemDivider>
                    <H1>Danh sách câu hỏi</H1>
                </ListItem>
                <ListItem style={{
                        flex: 1, 
                        flexWrap: 'wrap',
                        flexDirection: 'row'
                    }} 
                >
                {
                    data.map((item,index) => {
                        
                        return <Card transparent>
                                    <CardItem 
                                    // onPress = {} // khi click vào thì chuyển đến tab câu hỏi đó
                                    style={{marginRight: 4, width: 60, justifyContent: 'center'}}>
                                        <Text>{index + 1}</Text>
                                    </CardItem>
                                </Card>
                        })
                        
                }
                </ListItem>

            </List>
        </Content>
    );
}
export default SideBar;