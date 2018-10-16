import React from "react";
import { Text, View, StatusBar, Button } from "react-native";
import firebaseApp from "../../database";
import styles from "../../styles/Inventory/InventoryStyle";

export default class Inventory extends React.Component {
  //Get rid of Navigation header
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.navigationContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="Character"
              color="lightblue"
              onPress={() => this.props.navigation.navigate("Main")}
            />
          </View>
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
        <Text>Inventory</Text>
      </View>
    );
  }
}
