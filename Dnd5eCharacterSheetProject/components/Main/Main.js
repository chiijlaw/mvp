import React from "react";
import { Text, View, Button, StatusBar } from "react-native";
import firebaseApp from "../../database";
import styles from "../../styles/MainStyles/MainStyle";
import MainHeader from "./MainHeader";
import AbilityScore from "./AbilityScore";

export default class Main extends React.Component {
  //Get rid of Navigation header
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
    //Access Database at this endpoint
    this.charaRef = firebaseApp.database().ref(`/characters/Aria`);
  }

  // Get data from database.
  // Keep up to date with database data.
  listenForCharacterData(charaRef) {
    var charData = {};
    charaRef.on("value", snap => {
      snap.forEach(child => {
        charData[child.key] = child.val();
      });
      this.setState(charData);
    });
  }

  componentDidMount() {
    this.listenForCharacterData(this.charaRef);
  }

  render() {
    //Destructure state
    const {
      character_name,
      character_class,
      level,
      exp,
      race,
      ability_score,
      saving_throws,
      skills
    } = this.state;
    //Calculate proficiency bonus
    const proficiencyBonus = 1 + Math.ceil(level / 4);

    //Hide statusbar
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.navigationContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="Skills/Spells"
              color="green"
              onPress={() => this.props.navigation.navigate("SkillsAndSpells")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Inventory"
              color="steelblue"
              onPress={() => this.props.navigation.navigate("Inventory")}
            />
          </View>
        </View>
        <MainHeader
          name={character_name}
          character_class={character_class}
          level={level}
          exp={exp}
          race={race}
        />
        <AbilityScore
          ability_score={ability_score}
          saving_throws={saving_throws}
          skills={skills}
          proficiencyBonus={proficiencyBonus}
        />
      </View>
    );
  }
}
