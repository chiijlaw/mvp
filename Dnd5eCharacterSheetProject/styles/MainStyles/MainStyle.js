import { StyleSheet } from "react-native";

export default (appStyles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "aliceblue"
  },
  navigationContainer: {
    flexDirection: "row",
    backgroundColor: "lightblue",
    alignItems: "stretch"
  },
  buttonContainer: {
    flex: 1
  }
}));
