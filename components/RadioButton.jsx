import { StyleSheet, Text, View, Pressable } from 'react-native';
import { RadioButton as RadioPaper } from 'react-native-paper';

export default function RadioButton({ label, ...props }) {
  return (
    <View style={styles.radio}>
      <Text>{label}</Text>
      <Pressable onPress={props.onPress}>
        <RadioPaper {...props} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});