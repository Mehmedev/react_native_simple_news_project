import { StyleSheet } from "react-native";

export const allstyles = StyleSheet.create({
  card_container: {
    backgroundColor: 'blue',
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
  },
  card_title: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'bisquit',
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
  },
  card_text: {
    fontSize: 15,
    margin: 5,
  },
  button_container: {
    backgroundColor: 'violet',
    padding: 15,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
  },
  button_text: {
    backgroundColor: 'white',
    color: 'purple',
    fontSize: 15,
    fontWeight: 'bold',
  },
});