
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import DetailesScreen from '../screens/details/DetailsScreen';
import SearchScreen from '../screens/search/SearchScreen';

export type RootStackParamList = {
    Home: undefined;
    Details: {movieId:number},
    Search: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }
        }
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailesScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigator