import React from 'react';
import {Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    item: {
        fontSize: 15,
        height: 40,
        marginTop: 10,
        paddingLeft: 10,
        textAlignVertical: "center",

        backgroundColor: "blue"
    }
})

const Task = (props) => {
    return (
        <Text style={styles.item}>{props.name}</Text>
    )
}

export default Task;
