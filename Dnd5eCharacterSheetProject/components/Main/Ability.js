import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/MainStyles/AbilityStyle";

export default (Ability = props => {
  return (
    <View>
      <View>
        <Text>AbilityScore</Text>
        <Text>Modifier</Text>
      </View>
      <View>
        <Text>List of Skills</Text>
      </View>
    </View>
  );
});
