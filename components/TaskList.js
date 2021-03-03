import React from "react";
import {FlatList, StyleSheet, Text, View, ScrollView} from "react-native";
import { taskMock } from "../MockData";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        width: "100%"
    },
    item: {
        padding: 10,
        fontSize: 10,
        height: 40,
    },
});


const TaskList = () => {
    return (
        <ScrollView style={styles.container}>
            <FlatList data={taskMock}
                      renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}/>
        </ScrollView>
    );
}

export default TaskList;
