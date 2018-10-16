import { StyleSheet } from "react-native";

export default (AbilityStyles = StyleSheet.create({
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
  skillsContainer: {
    flex: 3
  },
  textSkills: {
    fontSize: 12
  },
  save: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  textSave: {
    fontSize: 18
  }
}));
