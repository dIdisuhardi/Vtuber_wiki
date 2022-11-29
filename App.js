import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./pages/HomeScreen";
import Profile from "./pages/Profile";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Channel from './pages/Channel';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Navbar from './pages/BotNav';
import DetailScreen from './pages/DetailScreen';
import ChannelDetail from './pages/ChannelDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer>
<Stack.Navigator screenOptions={{ headerShown: true }} style={styles.container}>
        <Stack.Screen name="Vtuber Channel Wiki" component={Navbar}/>
        <Stack.Screen name="Lives" component={HomeScreen} />
        <Stack.Screen name="Channels" component={Channel} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ChannelDetail" component={ChannelDetail} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#588061',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold"
  },
});
