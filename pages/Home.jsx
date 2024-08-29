import { Text, View, StyleSheet } from 'react-native';
import Card from '../components/Card';
import RadioButtonGroup from '../components/RadioButtonGroup';
import IconButton from '../components/IconButton';
import Progressbar from '../components/Progressbar';
import Snackbar from '../components/Snackbar';
import Fab from '../components/Fab';
import List from '../components/List';
import Menu from '../components/Menu';
import { Provider as PaperProvider } from 'react-native-paper'

export default function Home() {
  const titles = ["Login", "Register", "Esqueci Minha Senha"];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Home</Text>
        <Card>
          <RadioButtonGroup options={titles} />
          <IconButton icon="camera" />
          <Progressbar progress={0.5} color="red" />
        </Card>
        <Menu titles={titles} />
        <Fab icon="camera" />
        <List
          title="Teste List"
          description="Teste Componente list"
          icon="camera"
        />
        <Snackbar>Teste</Snackbar>
      </View>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});