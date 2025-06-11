
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import DetailesScreen from '../screens/details/DetailsScreen';

export type RootStackParamList = {
    Home: undefined;
    Details: {movieId:number}
}

const Stack = createStackNavigator<RootStackParamList>();

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailesScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigator