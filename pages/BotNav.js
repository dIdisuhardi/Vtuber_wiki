import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./HomeScreen";
import Profile from "./Profile";
import "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Channel from './Channel';

const BottomTab = createBottomTabNavigator();

export default function Navbar(){
    return(
        <BottomTab.Navigator screenOptions={{headerShown:false}}>
        <BottomTab.Screen 
        name="live" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Live Stream',
          tabBarIcon:({color, size}) => 
          (<Icon name="stream" color= "#69bf64" size={size}/>),
        }
        }/>
        <BottomTab.Screen 
        name="Channel" 
        component={Channel}
        options={{
          tabBarLabel: 'Channel',
          tabBarIcon:({color, size}) => 
          (<Icon name="youtube" color= "#69bf64" size={size}/>),
        }
        }/>
        <BottomTab.Screen  
        name="Profile" 
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon:({color, size}) =>
          (<Icon name="user" color= "#69bf64" size={size}/>),
        }
      }/>
      </BottomTab.Navigator>

    );
  }
  