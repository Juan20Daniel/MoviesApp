import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './presentation/navigations/StackNavigator';
const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  )
}
export default App;