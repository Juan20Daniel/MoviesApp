import { Pressable, StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Ionicons';

export const Navbar = () => {
    const {top} = useSafeAreaInsets();
    return (
        <View style={{...styles.container, paddingTop:top+20}}>
            <Text style={styles.appName}>Movies.App</Text>
            <Pressable style={({pressed}) => ({
                opacity: pressed ? 0.4 : 1
            })}>
                <Icon name="search-outline" size={30} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top:0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
        paddingHorizontal: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        zIndex:1,
    },
    appName: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});