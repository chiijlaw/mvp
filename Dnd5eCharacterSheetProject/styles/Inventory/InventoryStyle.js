import { StyleSheet } from "react-native";

export default (InventoryStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "steelblue"
  },
  title: {
    flex: 1,
    alignSelf: "center"
  },
  navigationContainer: {
    flexDirection: "row",
    backgroundColor: "lightblue",
    alignItems: "stretch"
  },
  buttonContainer: {
    flex: 1
  },
  listView: {
    flex: 1
  },
  listContainer: {
    flex: 8
  },
  textTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold"
  }
}));
