import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "../../styles/MainStyles/MainStyle";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Strength: 0,
      Dexterity: 0,
      Constitution: 0,
      Intelligence: 0,
      Wisdom: 0,
      Charisma: 0
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Testing stuff!</Text>
      </View>
    );
  }
}
