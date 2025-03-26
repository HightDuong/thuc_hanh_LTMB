import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const Button = (props) => {
  return (
      <TouchableOpacity style={styles.button} onPress={props.onMyPress}>
        <Text style={styles.button_text}>{props.title}</Text>
      </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 100,
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 120,
    marginLeft: 50,
    marginRight: 50,
  },
  button_text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black'
  }
});
export default Button;