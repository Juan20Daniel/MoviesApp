import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components';


const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isLoading, nowPlaying } = useMovies();

    if(isLoading) {
        return (
            <View style={{marginTop: top+20}}>
                <Text>Cargando...</Text>
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={{marginTop:top+20}}> 
                <PosterCarousel movies={nowPlaying} />
            </View>
        </ScrollView>
    )
}

export default HomeScreen;
