import { StyleSheet } from "react-native";

export default (appStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffaa60",
    alignItems: "center"
  },
  subContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  number: {
    alignSelf: "center"
  },
  textScore: {
    fontSize: 10
  },
  textModifier: {
    fontSize: 18,
    fontWeight: "bold"
  },
  statBox: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15
  },
  skills: {
    flex: 4
  }
}));
