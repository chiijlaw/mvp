import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import styles from "../../styles/Inventory/ListItemStyle";

class ListItem extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.textLi}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListItem;
