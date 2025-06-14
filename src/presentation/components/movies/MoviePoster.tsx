import { Image, Pressable, StyleSheet, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigations/StackNavigator';
import type { Movie } from '../../../core/entities/movie.entity'

interface Props {
    movie:Movie;
    width?:number; 
    height?:number;
    marginLeft?:boolean;
}

export const MoviePoster = ({movie, width=150, height, marginLeft}:Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <Pressable 
            onPress={() => navigation.navigate('Details',{movieId:movie.id})}
            style={({pressed}) => ({
                ...styles.btnPress,
                marginLeft: marginLeft ? 10 : 0,
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
    btnPress: {
        marginTop:10,
        marginRight: 10,
        marginBottom: 20,
    },
    imageContainer: {
        flex: 1,
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
        borderRadius: 10
    }
})
