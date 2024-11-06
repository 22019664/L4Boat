import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({ name, description, picture }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Icon name="sailboat" size={20} color="#808080" style={styles.icon} />
                <Text style={styles.name}>{name}</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description}</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image source={picture} style={styles.image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        borderRadius: 15,
        marginBottom: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    imageContainer: {
        marginTop: 15,
        borderRadius: 12,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    descriptionContainer: {
        marginVertical: 10,
    },
    description: {
        fontSize: 15,
        color: '#666',
        lineHeight: 22,
    },
});

export default Boat;
