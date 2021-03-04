import React, {useState} from "react";
import {Button, Modal, Text, TextInput, View, StyleSheet} from "react-native";

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
    }
})

const TaskModal = ({modalVisible, closeModal}) => {
    const [name, setName] = useState("");

    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
        >
            <View style={styles.modal}>
                <Text>Dodaj zadanie</Text>
                <TextInput style={styles.input} onChangeText={text => setName(text)} value={name}/>
                <Button title="Zamknij" onPress={() => {setName(""); closeModal();}} />
            </View>
        </Modal>
    );
}

export default TaskModal;
