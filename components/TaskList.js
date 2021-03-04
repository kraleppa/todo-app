import React, {useState} from "react";
import {FlatList, StyleSheet, View, Button, Modal, TextInput, Text} from "react-native";
import { taskMock } from "../MockData";
import Task from "./Task";
import TaskModal from "./TaskModal";

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

            <TaskModal modalVisible={modalVisible} closeModal={() => setModalVisible(false)} />
            <FlatList data={taskMock} renderItem={({item}) => <Task task={item}/>}/>

            <Button title="Dodaj" onPress={() => setModalVisible(true)}/>
        </View>
    );
}

export default TaskList;
