import React from 'react';
import { ScrollView, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalCarousel, Navbar, PosterCarousel } from '../../components';
import { FullScreenLoader } from '../../components';

const HomeScreen = () => {
    const { top, bottom } = useSafeAreaInsets();
    const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

    if(isLoading) {
        return <FullScreenLoader />
    }
    return (
       <>
            <Navbar />
            <ScrollView style={{backgroundColor: 'white'}}>
            <View style={{marginTop:top+70, marginBottom: bottom}}>
                <PosterCarousel movies={nowPlaying} />
                <HorizontalCarousel 
                    movies={popular} 
                    title='Populares'
                    loadNextPage={() => popularNextPage()}
                />
                <HorizontalCarousel 
                    movies={topRated} 
                    title='Top rated'
                />
                <HorizontalCarousel 
                    movies={upcoming} 
                    title='Upcoming'
                />
            </View>
        </ScrollView>
       </>
    )
}

export default HomeScreen;
