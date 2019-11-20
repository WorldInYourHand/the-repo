import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { BigButton, SocialButton, LinkButton } from "../../components/buttons";
import * as firebase from "firebase";

export default class LoginWithSocial extends React.Component {
  // isUserEqual = (googleUser, firebaseUser) => {
  //   if (firebaseUser) {
  //     var providerData = firebaseUser.providerData;
  //     for (var i = 0; i < providerData.length; i++) {
  //       if (
  //         providerData[i].providerId ===
  //           firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
  //         providerData[i].uid === googleUser.getBasicProfile().getId()
  //       ) {
  //         // We don't need to reauth the Firebase connection.
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // };

  // onSignIn = googleUser => {
  //   console.log("Google Auth Response", googleUser);
  //   // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  //   var unsubscribe = firebase
  //     .auth()
  //     .onAuthStateChanged(function(firebaseUser) {
  //       unsubscribe();
  //       // Check if we are already signed-in Firebase with the correct user.
  //       if (!isUserEqual(googleUser, firebaseUser)) {
  //         // Build Firebase credential with the Google ID token.
  //         var credential = firebase.auth.GoogleAuthProvider.credential(
  //           googleUser.idToken,
  //           googleUser.acessToken
  //         );
  //         // Sign in with credential from the Google user.
  //         firebase
  //           .auth()
  //           .signInWithCredential(credential)
  //           .then(function() {
  //             console.log("user signed in");
  //           })
  //           .catch(function(error) {
  //             // Handle Errors here.
  //             var errorCode = error.code;
  //             var errorMessage = error.message;
  //             // The email of the user's account used.
  //             var email = error.email;
  //             // The firebase.auth.AuthCredential type that was used.
  //             var credential = error.credential;
  //             // ...
  //           });
  //       } else {
  //         console.log("User already signed-in Firebase.");
  //       }
  //     });
  // };

  onRegisterPress = () => {
    this.props.navigation.navigate("RegisterScreen");
  };

  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/photo_blurred.png")}
        style={styles.login}
      >
        <Text style={styles.line}>Sign in with</Text>
        <View style={styles.rowView}>
          <SocialButton
            source={require("../../assets/images/fb_button.png")}
            onPress={() => console.log("fb")}
          />
          <SocialButton
            source={require("../../assets/images/tw_button.png")}
            onPress={() => console.log("twit")}
          />
          <SocialButton
            source={require("../../assets/images/google_button.png")}
            onPress={() => console.log("google")}
          />
        </View>
        <Text style={styles.line}>or</Text>
        <BigButton
          title="LOGIN"
          onPress={() => this.props.navigation.navigate("LoginWithAcc")}
        />
        <LinkButton
          title="create an account >"
          style={styles.linkButton}
          onPress={this.onRegisterPress}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    fontFamily: "oxygen",
    paddingBottom: 150
  },
  line: {
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 24,
    marginVertical: 30,
    fontFamily: "oxygen"
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center"
  },
  linkButton: {
    backgroundColor: "transparent",
    borderWidth: 0,
    color: "white",
    fontFamily: "oxygen",
    marginBottom: 130
  }
});
