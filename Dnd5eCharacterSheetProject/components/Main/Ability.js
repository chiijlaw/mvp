import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/MainStyles/AbilityStyle";

export default (Ability = props => {
  const { ability, score } = props;
  const modifier = Math.floor((score - 10) / 2);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.statBox}>
          <View style={styles.number}>
            <Text style={styles.textScore}>{score}</Text>
          </View>
          <View style={styles.number}>
            <Text style={styles.textModifier}>{modifier}</Text>
          </View>
        </View>
        <View>
          <Text>{ability}</Text>
        </View>
      </View>
      <View style={styles.skills}>
        <Text>List of Skills</Text>
      </View>
    </View>
  );
});
