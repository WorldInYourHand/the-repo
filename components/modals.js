import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
// import { Modal } from "react-native-modal";
// import ModalButton from "../components/buttons";

//this shit is not working - tried all and yet...
export const ErrorModal = props => {
  const {
    visible = false,
    message = "err",
    buttonText = "OK",
    onPress = {}
  } = props;

  return (
    <View>
      <Modal visible={visible}>
        <View style={styles.modal}>
          <Text>{message}</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1
  },
  modal: {
    width: "80%",
    height: "40%",
    backgroundColor: "blue"
  }
});
