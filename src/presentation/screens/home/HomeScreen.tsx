import React from 'react';
import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';

const HomeScreen = () => {
    const {} = useMovies();
    return (
        <View>
            <Text>ProfileScree</Text>
        </View>
    )
}

export default HomeScreen;
