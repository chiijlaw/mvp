import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/MainStyles/AbilityScoreStyle";
import Ability from "./Ability";

export default class AbilityScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      ability_score,
      skills,
      saving_throws,
      proficiencyBonus
    } = this.props;
    let listAbilities;
    if (ability_score) {
      listAbilities = Object.keys(ability_score).map(key => (
        <Ability key={key} ability={key} score={ability_score[key]} />
      ));
    }

    return (
      <View style={styles.container}>
        {listAbilities}
        <View style={styles.proficiency}>
          <Text>Proficiency Bonus</Text>
          <Text style={styles.textProficiency}>{proficiencyBonus}</Text>
        </View>
      </View>
    );
  }
}
