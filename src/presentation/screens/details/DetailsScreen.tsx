import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { RootStackParamList } from '../../navigations/StackNavigator';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MobieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';

interface Props extends StackScreenProps<RootStackParamList, 'Details'> {}

const DetaileScreen = ({route}:Props) => {
    const { movieId } = route.params;
    const { isLoading, movie, cast } = useMovie(movieId);
    
    if(isLoading) {
        return <Text>Cargando...</Text>
    }

    return (
        <ScrollView>
            <StatusBar barStyle='light-content' />
            <MovieHeader
                poster={movie?.poster!}
                originalTitle={movie?.originalTitle!}
                title={movie?.title!}
            />
            <MovieDetails 
                movie={movie!}
                cast={cast!}
            />
        </ScrollView>
    )
}

export default DetaileScreen;
