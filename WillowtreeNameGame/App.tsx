import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import AppStack from '~/navigation/AppStack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default App;
