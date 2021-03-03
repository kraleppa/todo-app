import React, {useState} from "react";
import {FlatList, StyleSheet, View, Button, Modal, Alert, Text} from "react-native";
import { taskMock } from "../MockData";
import Task from "./Task";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "10%",
        width: "100%"
    }
});


const TaskList = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <Text>Eluwina</Text>
                <Button title="Zamknij" onPress={() => setModalVisible(false)} />
            </Modal>

            <FlatList data={taskMock} renderItem={({item}) => <Task task={item}/>}/>
            <Button title="Dodaj" onPress={() => setModalVisible(true)}/>
        </View>
    );
}

export default TaskList;
