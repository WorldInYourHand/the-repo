import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import * as firebase from "firebase";

export const PostHolder = props => {
  const {
    author = "Unnamed",
    description = "Description",
    destination = "from A to B",
    imagesSouce = {},
    avatarImage = {}
  } = props;
  //need to finish props

  return (
    <View>
      <View>
        <Image />
        <Text>{author}</Text>
      </View>
      <View>
        <Image />
        <Text>{description}</Text>
      </View>
      <View>
        <Text>{destination}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {},
  authorView: {},
  avatarView: {},
  postView: {},
  destinationView: {}
});
