import React from "react";
import { Text, View } from "react-native";
import firebaseApp from "../../database";

export default class App extends React.Component {
  //Get rid of Navigation header
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Inventory</Text>
      </View>
    );
  }
}
