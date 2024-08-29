import { Button as ButtonPaper } from 'react-native-paper';

export default function Button({ children, props }) {
  return <ButtonPaper {...props}>{children}</ButtonPaper>;
}