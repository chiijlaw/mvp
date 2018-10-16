import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/MainStyles/AbilityStyle";

const allSkills = {
  Strength: ["Athletics"],
  Dexterity: ["Acrobatics", "Sleight of Hand", "Stealth"],
  Constitution: [],
  Intelligence: ["Arcana", "History", "Invesitgation", "Nature", "Religion"],
  Wisdom: ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"],
  Charisma: ["Deception", "Intimidation", "Performance", "Persuasion"]
};

export default (Ability = props => {
  //Destructure props
  const { ability, score, save, skills, proficiencyBonus } = props;
  //Calculate ability modifier
  const modifier = Math.floor((score - 10) / 2);
  //Calculate Saving throw modifier
  let saveModifier = modifier;
  if (save) {
    saveModifier = saveModifier + proficiencyBonus;
  }
  //List out skills for the given ability
  const skillList = allSkills[ability].map(skill => {
    let skillModifier = modifier;
    if (skills.includes(skill)) {
      skillModifier = skillModifier + proficiencyBonus;
    }
    return (
      <Text key={skill} style={styles.textSkills}>
        {skillModifier} : {skill}
      </Text>
    );
  });
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
      <View style={styles.skillsContainer}>{skillList}</View>
      <View style={styles.save}>
        <Text>Saving Throw: {saveModifier}</Text>
      </View>
    </View>
  );
});
