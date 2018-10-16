import React from "react";
import { Text, View, TouchableHighlight } from "react-native";
import styles from "../../styles/Inventory/ActionButtonStyle";

class ActionButton extends React.Component {
  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight
          underlayColor="#24CE84"
          onPress={this.props.onPress}
        >
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = ActionButton;
