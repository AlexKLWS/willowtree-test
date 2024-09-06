import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GameModeSelectScreen from '@/screens/GameModeSelectScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Navigator>
        <Stack.Screen name="GameModeSelect" component={GameModeSelectScreen} />
        {/* <Stack.Screen name="PracticeGame" component={PracticeGameScreen} />
        <Stack.Screen name="TimedGame" component={TimedGameScreen} /> */}
      </Stack.Navigator>
    </Stack.Navigator>
  );
};

export default AuthStack;
