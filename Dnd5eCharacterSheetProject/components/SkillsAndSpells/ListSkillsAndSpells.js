import React from "react";
import { View, TouchableHighlight, Text, Alert } from "react-native";
import styles from "../../styles/SkillsAndSpellsStyles/ListSkillsAndSpellsStyle";

class ListSkillsAndSpells extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getDesc = this.getDesc.bind(this);
  }
  getDesc(text) {
    (async function getDescFromAPI(text) {
      let searchParams = text.replace(/\s/g, "+");
      try {
        let desc = await fetch(
          `http://dnd5eapi.co/api/spells/?name=${searchParams}`
        );
        let descJSON = await desc.json();
        desc = await fetch(descJSON.results[0].url);
        descJSON = await desc.json();
        let spellDesc = descJSON.desc[0];
        Alert.alert(text, spellDesc, [
          {
            text: "Dismiss",
            onPress: () => console.log("Dismiss Pressed"),
            style: "cancel"
          }
        ]);
      } catch (err) {
        Alert.alert("Error", "Sorry, can't find description", [
          {
            text: "Dismiss",
            onPress: () => console.log("Dismiss Pressed"),
            style: "cancel"
          }
        ]);
        console.log(err);
      }
    })(text);
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        onLongPress={() => this.getDesc(this.props.item.title)}
      >
        <View style={styles.li}>
          <Text style={styles.textLi}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListSkillsAndSpells;
