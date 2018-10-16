import React from "react";
import { Text, View } from "react-native";
import * as firebase from "firebase";
import firebaseConfig from "../../config";
import styles from "../../styles/MainStyles/MainStyle";
import MainHeader from "./MainHeader";
import AbilityScore from "./AbilityScore";

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.charaRef = firebaseApp.database().ref(`/characters/Aria`);
  }

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

    const proficiencyBonus = 1 + Math.ceil(level / 4);

    return (
      <View style={styles.container}>
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
