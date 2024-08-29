import RadioButton from '../components/RadioButton';
import { useState } from 'react';
import { View } from 'react-native';

export default function RadioButtonGroup({ options }) {
  const [checked, setChecked] = useState(null);

  function handlePress(value) {
    setChecked(value);
  };

  return (
    <View>
      {options.map((option, index) => (
        <RadioButton
          key={index}
          label={option}
          value={option}
          status={checked === option ? 'checked' : 'unchecked'}
          onPress={() => handlePress(option)}
        />
      ))}
    </View>
  );
}
