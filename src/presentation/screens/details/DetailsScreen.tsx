import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../../navigations/StackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'Details'> {}

const DetaileScreen = ({route}:Props) => {
    const { movieId } = route.params;
    // const { movieId } = useRoute().params;
    console.log(movieId);
    return (
        <View>
            <Text>DetaileScreen</Text>
        </View>
    )
}

export default DetaileScreen;
