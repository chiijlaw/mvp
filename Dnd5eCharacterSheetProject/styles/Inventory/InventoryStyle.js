import { StyleSheet } from "react-native";

export default (InventoryStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "steelblue"
  },
  navigationContainer: {
    flexDirection: "row",
    backgroundColor: "lightblue",
    alignItems: "stretch"
  },
  buttonContainer: {
    flex: 1
  },
  listview: {
    flex: 1
  }
}));
