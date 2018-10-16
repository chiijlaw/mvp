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
import styles from "../../styles/SkillsAndSpellsStyles/SkillsAndSpellsStyles";
import ListSkillsAndSpells from "./ListSkillsAndSpells";
import ActionButton from "../ActionButton";

export default class SkillsAndSpells extends React.Component {
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
    this.skillsAndSpellsRef = firebaseApp
      .database()
      .ref(`/characters/Aria/SkillsAndSpells`);
    this.renderSkillOrSpell = this.renderSkillOrSpell.bind(this);
    this.promptAdd = this.promptAdd.bind(this);
    this.addSkillOrSpell = this.addSkillOrSpell.bind(this);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  listenForSkillsOrSpells(skillsAndSpellsRef) {
    skillsAndSpellsRef.on("value", snap => {
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

  addSkillOrSpell(text) {
    this.skillsAndSpellsRef.push({ title: text });
  }

  renderSkillOrSpell(item) {
    const onPress = () => {
      Alert.alert("Remove", "Are you sure you want to remove the item?", [
        {
          text: "Remove",
          onPress: text => this.skillsAndSpellsRef.child(item._key).remove()
        },
        { text: "Cancel", onPress: text => console.log("Cancelled") }
      ]);
    };

    return <ListSkillsAndSpells item={item} onPress={onPress} />;
  }

  componentDidMount() {
    this.listenForSkillsOrSpells(this.skillsAndSpellsRef);
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
        <View style={styles.title}>
          <Text style={styles.textTitle}>Skills and Spells</Text>
        </View>
        <View style={styles.listContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderSkillOrSpell}
            enableEmptySections={true}
            style={styles.listview}
          />
        </View>
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
              <Text>Add a Skill or Spell!</Text>
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
                  this.addSkillOrSpell(this.state.text);
                  this.setState({ text: "" });
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Add Skill or Spell</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <ActionButton title="Add" onPress={this.promptAdd} />
      </View>
    );
  }
}
