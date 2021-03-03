import React, {useState} from 'react';
import {Text, StyleSheet, View, CheckBox} from "react-native";

const styles = StyleSheet.create({
    view: {
        fontSize: 15,
        height: 40,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        flexDirection: "row"
    }
})

const Task = (props) => {

    const [state, setState] = useState(props.task);

    const updateTask = () => {
        setState({
            key: state.key,
            name: state.name,
            done: !state.done
        })
    }
    return (
        <View style={styles.view}>
            <Text>{state.name}</Text>
            <CheckBox onValueChange={updateTask} value={state.done}/>
        </View>
    )
}

export default Task;
