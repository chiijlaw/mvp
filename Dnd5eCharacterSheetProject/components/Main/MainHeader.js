import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/MainStyles/MainHeaderStyle";

export default class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, level, character_class, race, exp } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.name}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.block}>
            <Text>Level {level}</Text>
            <Text>Exp {exp}</Text>
          </View>
          <View style={styles.block}>
            <Text>{character_class}</Text>
            <Text>{race}</Text>
          </View>
        </View>
      </View>
    );
  }
}
