import React from "react";
import { View, TextInput, Text } from "react-native";
import styles from "../../styles/MainStyles/MainHeaderStyle";

export default class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.name} Main Header Component</Text>
        <Text>{this.props.level}</Text>
        <Text>{this.props.class}</Text>
        <Text>{this.props.race}</Text>
        <Text>{this.props.exp}</Text>
      </View>
    );
  }
}
