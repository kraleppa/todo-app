import React from "react";
import {FlatList, StyleSheet, Text, View, ScrollView} from "react-native";
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
    return (
        <View style={styles.container}>
            <FlatList data={taskMock} renderItem={({item}) => <Task name={item.name}/>} />
        </View>
    );
}

export default TaskList;
