import React from "react";
import {
  Text,
  TextInput,
  View,
  StatusBar,
  Button,
  ListView,
  Modal,
  TouchableHighlight,
  Alert
} from "react-native";
import firebaseApp from "../../database";
import styles from "../../styles/Inventory/InventoryStyle";
import ListItem from "./ListItem";
import ActionButton from "./ActionButton";

export default class Inventory extends React.Component {
  //Get rid of Navigation header
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      modalVisible: false,
      text: ""
    };
    this.itemsRef = firebaseApp.database().ref(`/characters/Aria/Inventory`);
    this.renderItem = this.renderItem.bind(this);
    this.promptAdd = this.promptAdd.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  listenForItems(itemsRef) {
    itemsRef.on("value", snap => {
      // get children as an array
      var items = [];
      snap.forEach(child => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });
  }

  promptAdd() {
    this.setModalVisible(true);
  }

  addItem(text) {
    this.itemsRef.push({ title: text });
  }

  renderItem(item) {
    const onPress = () => {
      Alert.alert("Remove", "Are you sure you want to remove the item?", [
        {
          text: "Remove",
          onPress: text => this.itemsRef.child(item._key).remove()
        },
        { text: "Cancel", onPress: text => console.log("Cancelled") }
      ]);
    };

    return <ListItem item={item} onPress={onPress} />;
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  //Hide statusbar
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
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderItem}
          enableEmptySections={true}
          style={styles.listview}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Add an Item!</Text>
              <TextInput onChangeText={text => this.setState({ text })}>
                {this.state.text}
              </TextInput>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  this.addItem(this.state.text);
                  this.setState({ text: "" });
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Add Item</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <ActionButton title="Add" onPress={this.promptAdd} />
      </View>
    );
  }
}
