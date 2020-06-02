import React from 'react';
import {
    List,
    ListItem, 
    Text,
    H1,
    CheckBox,
    Body,
    Spinner,
    Thumbnail,
    CardItem,
    Card
} from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {color} from '../Component/color';

const ResultQuestion = (props) => {
    const { question } = props;
    const { content,img, userAnswers, explain } = question;
    return (
        <List>
            <ListItem>
                <Body>
                    <H1>{content}</H1>
                    {
                        img == null ? null : <Thumbnail square large source={{uri: img}} style={{width: null, height: 135}} />
                    }
                </Body>
                
            </ListItem>
            {
                userAnswers == undefined ? <Spinner style={{flex: 1}}/> : userAnswers.map( (item) => {
                    
                    return <ListItem 
                            key={item.id}
                            button>
                                <CheckBox
                                color={item.select == item.check ? color.CorrectCheckBox : "red"}
                                checked={item.select}
                                />
                                <Body>
                                    <Text>{item.answer}</Text>
                                </Body>
                            </ListItem>
                })
            }
            <ListItem>
                {
                    explain == null || explain == undefined ? null :
                    <Body >
                        <Card transparent>
                            <CardItem style={{paddingLeft: 0}}>
                                <FontAwesome5Icon name="lightbulb" style={{fontSize: 20, color: "#f57c00", marginRight: 8}} solid />
                                <Text style={{fontSize: 15, color: "#f57c00", fontWeight: 'bold'}}>Giải thích đáp án</Text>
                            </CardItem>
                            <CardItem style={{padding: 4, marginTop: 4, backgroundColor: "#ffb74d", borderRadius: 3}}>
                                <Text>{explain}</Text>
                            </CardItem>
                        </Card>
                    </Body>
            
                }
            </ListItem>
        </List>
        
    );
}
export default ResultQuestion;