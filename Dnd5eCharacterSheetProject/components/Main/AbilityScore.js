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
    //Destructure Props
    const {
      ability_score,
      skills,
      saving_throws,
      proficiencyBonus
    } = this.props;
    //Create specific ability components
    let renderListAbilities;
    if (ability_score) {
      renderListAbilities = ability_score.map(key => {
        //Check if character has a saving throw for that ability category
        let save = false;
        if (saving_throws.includes(key.ability)) {
          save = true;
        }
        //Check if character has skills for that ability category
        let abilitySkills = skills[key.ability] || [];
        //Return fully built ability component
        return (
          <Ability
            key={key.ability}
            ability={key.ability}
            score={key.score}
            save={save}
            skills={abilitySkills}
            proficiencyBonus={proficiencyBonus}
          />
        );
      });
    }

    return (
      <View style={styles.container}>
        {renderListAbilities}
        <View style={styles.proficiency}>
          <Text>Proficiency Bonus</Text>
          <Text style={styles.textProficiency}>{proficiencyBonus}</Text>
        </View>
      </View>
    );
  }
}
