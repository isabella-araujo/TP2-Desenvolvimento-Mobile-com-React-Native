import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Registro from './pages/Registro';
import NovoItem from './pages/NovoItem';
import Perfil from './pages/Perfil';
import EsqueciMinhaSenha from './pages/EsqueciMinhaSenha';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" component={Home}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="NovoItem" component={NovoItem}/>
        <Stack.Screen name="Perfil" component={Perfil}/>
        <Stack.Screen name="Registro" component={Registro}/>
        <Stack.Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
