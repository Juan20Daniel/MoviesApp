import { Image, Pressable, StyleSheet, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/StackNavigator';

interface Props {
    movie:Movie;
    width?:number; 
    height?:number;
}

export const MoviePoster = ({movie, width=150, height}:Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <Pressable 
            onPress={() => navigation.navigate('Details',{movieId:movie.id})}
            style={({pressed}) => ({
                marginVertical: 20,
                opacity: pressed ? 0.9 : 1,
            })}    
        >
            <View style={{...styles.imageContainer, width, height:height??'100%'}}>
                <Image 
                    source={{uri:movie.poster}}
                    style={styles.image}
                />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9
    },
    image: {
        flex: 1,
        borderRadius: 18
    }
})
