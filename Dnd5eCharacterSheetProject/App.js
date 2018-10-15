import React from "react";
import { Text, View } from "react-native";
import Main from "./components/Main/Main";
import styles from "./styles/AppStyle";
import * as firebase from "firebase";
import firebaseConfig from "./config";

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testing: "hey hey"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Roll for initiative!</Text>
        <Main />
        <Text>{this.state.testing}</Text>
      </View>
    );
  }
}
