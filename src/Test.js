import * as React from 'react';
import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {scale, scaleVertical} from './utils/scale';

class Test extends React.Component{
    render(): React.ReactNode {
        return (
            <TouchableOpacity
                style={styles.container}>
                <Image
                    style={styles.avatar}
                    resizeMode='cover'
                    source={require('./assets/avatars/Image1.png')}
                />
                <View style={styles.detail}>
                    <Text style={styles.name}>AAAAAAAAAAAAAAA</Text>
                    <Text style={styles.email}>AAAAAA</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        height: scale(45),
        width: scale(45),
        borderRadius: 25,
        margin: 10,
    },
    detail: {
        borderWidth: 1,
    },
    name: {
        fontWeight: 'bold',
        fontSize: scale(18),
        color: 'black',
    },
    email: {
        fontSize: scale(14),
        color: '#999',
    },
});

export {Test};
