import React from "react";
import { View } from "react-native";
import Main from "./components/Main/Main";
import SkillsAndSpells from "./components/SkillsAndSpells/SkillsAndSpells";
import Inventory from "./components/Inventory/Inventory";
import { createStackNavigator } from "react-navigation";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AppStackNavigator />;
  }
}
const AppStackNavigator = createStackNavigator({
  Main: { screen: Main },
  SkillsAndSpells: { screen: SkillsAndSpells },
  Inventory: { screen: Inventory }
});
