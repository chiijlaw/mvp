import React from "react";
import { StatusBar, View } from "react-native";
import Main from "./components/Main/Main";
import styles from "./styles/AppStyle";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { charData: {} };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Main />
      </View>
    );
  }
}
