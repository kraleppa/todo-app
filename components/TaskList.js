import React, {useState} from "react";
import {FlatList, StyleSheet, View, Button, Modal, TextInput, Text} from "react-native";
// import { taskMock } from "../MockData";
import Task from "./Task";
import TaskModal from "./TaskModal";
import {API_KEY} from "./ApiKey";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "10%",
        width: "100%"
    }
});


const TaskList = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [tasks, setTasks] = useState([]);

    fetch("https://api.airtable.com/v0/appgcXYlwEoacIrsU/Tasks?view=Grid%20view", {
        headers: {
            "Authorization": `Bearer ${API_KEY}`
        }
    })
        .then(data => data.json())
        .then(json => {setTasks(json.records)})


    return (
        <View style={styles.container}>

            <TaskModal modalVisible={modalVisible} closeModal={() => setModalVisible(false)}/>
            <FlatList data={tasks} renderItem={({item}) => <Task task={item.fields}/>}/>

            <Button title="Dodaj" onPress={() => setModalVisible(true)}/>
        </View>
    );
}

export default TaskList;
