import React from 'react';
import Modal from 'react-native-modal';
import { Text, View} from 'react-native';
import { Button } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';

const ModalReloadExam = (props) => {
    const {navigation, route} = props;
    const {itemId, mainId, positionExam} = route.params;
    const isVisible = useSelector(state => state.modalReducer);
    
    const dispatch = useDispatch();
    function onCloseModal() {
        dispatch({
            type: "CLOSE_MODAL"
        })
    }
    function deleteUserAnswer(){
        dispatch({
            type: "DELETE_USER_STATE",
            position: positionExam - 1,
            
        })
        
    }
    return (
        <Modal isVisible={isVisible}>
            <View style={{backgroundColor: 'white', padding: 16, height: 130, borderRadius: 3}}>
                <View style={{marginBottom: 16}}>
                    <Text style={{ fontSize: 15}}>Làm lại bài thi?</Text>
                    <Text style={{ fontSize: 13, color: 'black', opacity: 0.66}}>Bài thi sẽ được xóa kết quả trước khi bắt đầu.</Text>
                </View>  
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', padding: 4}}>
                    <Button transparent
                    onPress = {onCloseModal}
                    style={{ padding: 4, marginRight: 4}}>
                        <Text style={{ color: 'black', opacity: 0.83}}>Bỏ qua</Text>
                    </Button>
                    <Button style={{ padding: 8, backgroundColor: 'green', borderRadius: 3}}
                    onPress={() => {
                        deleteUserAnswer();
                        return navigation.navigate("initExam",
                            {
                                itemId: itemId,
                                mainId: mainId,
                                positionExam: positionExam,
                            }
                        )
                    }}
                    >
                        <Text style={{ color: 'white'}}>OK</Text>
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

export default ModalReloadExam;