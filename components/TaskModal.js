import React, {useState} from "react";
import {Button, Modal, Text, TextInput, View, StyleSheet, AsyncStorage} from "react-native";

const styles = StyleSheet.create({
    modal: {
        marginTop: "10%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    input: {
        borderColor: "gray",
        borderWidth: 1,
        width: "80%",
        borderRadius: 5,
        marginTop: "5%",
        marginBottom: "10%"
    },
    lowerView: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
})

const TaskModal = ({modalVisible, closeModal}) => {
    const [name, setName] = useState("");

    const saveTask = () => {
        console.log(name);
    }

    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
        >
            <View style={styles.modal}>
                <Text>Dodaj zadanie</Text>
                <TextInput style={styles.input} onChangeText={text => setName(text)} value={name}/>
                <View style={styles.lowerView}>
                    <Button title="Zamknij" onPress={() => {setName(""); closeModal();}}/>
                    <Button title="Dodaj" onPress={saveTask}/>
                </View>
            </View>
        </Modal>
    );
}

export default TaskModal;
