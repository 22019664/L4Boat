import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({ name, description, picture }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Icon name="sailboat" size={20} color="#808080" style={styles.icon}>
                <Text style={styles.name}>{name}</Text>
                </Icon>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Image source={picture} style={styles.image}/>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    icon: {
        marginRight: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
});

export default Boat;


