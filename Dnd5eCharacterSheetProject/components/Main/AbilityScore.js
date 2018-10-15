import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/MainStyles/AbilityScoreStyle";
import Ability from "./Ability";

export default class AbilityScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Ability />
        <Text>Proficiency Bonus</Text>
      </View>
    );
  }
}
