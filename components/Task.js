import React, {useState} from 'react';
import {Text, StyleSheet, View, CheckBox} from "react-native";
import {API_KEY} from "./ApiKey";

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

        fetch(`https://api.airtable.com/v0/appgcXYlwEoacIrsU/Tasks/${state.key}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                "fields": {
                    "done": !state.done
                }
            })
        })
            .then(data => data.json())
    }

    return (
        <View style={styles.view}>
            <Text>{state.name}</Text>
            <CheckBox onValueChange={updateTask} value={state.done}/>
        </View>
    )
}

export default Task;
