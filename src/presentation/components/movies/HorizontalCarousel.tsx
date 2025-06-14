import { useEffect, useRef } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View } from 'react-native';
import type { Movie } from '../../../core/entities/movie.entity';
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[];
    title?: string;
    loadNextPage?: () => void;
}

export const HorizontalCarousel = ({movies, title, loadNextPage}:Props) => {
    const isLoadingPages = useRef(false);
    useEffect(() => {
        setTimeout(() => {
            isLoadingPages.current = false;
        }, 200);
    },[movies]);
    const onScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
        if(isLoadingPages.current) return;
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const isEndReached = (contentOffset.x + layoutMeasurement.width + 300) >= contentSize.width;
        if(!isEndReached) return;
        isLoadingPages.current = true;
        loadNextPage && loadNextPage();
    }

    return (
        <View 
            style={{
                height: title ? 200 : 220,
            }}
        >
            {title && <Text style={styles.title}>{title}</Text>}
            <FlatList 
                data={movies}
                renderItem={({item, index}) => (
                    <MoviePoster
                        marginLeft={!index}
                        movie={item} 
                        width={100} 
                        height={180}
                    />
                )}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => onScroll(event)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        marginLeft: 10,
    }
})
