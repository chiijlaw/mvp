import { StyleSheet } from "react-native";

export default (appStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightblue",
    alignItems: "center"
  },
  name: {
    flex: 1
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  subContainer: {
    flex: 1,
    flexDirection: "row"
  },
  block: {
    flex: 1,
    alignItems: "center"
  }
}));
