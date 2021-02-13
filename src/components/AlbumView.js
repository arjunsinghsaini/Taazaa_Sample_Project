import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

export const AlbumView = ({ item, onPress }) => {
    return (
        <TouchableOpacity
            style={{ width: '50%' }}
            onPress={() => onPress()}>
            <View style={styles.rightContainerlist}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: item.artworkUrl100 }}
                />
                <Text style={styles.TitleContainer}>
                    {item.trackName}
                </Text>
                <Text style={styles.subContainer}>
                    {'Collection Price : Rs.' + item.collectionPrice}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    rightContainerlist: {
        flexDirection: "column",
        marginHorizontal: "5%",
    },
    TitleContainer: {
        flexWrap: "wrap",
        width: "100%",
        fontSize: 16,
        alignSelf: "flex-start",
        marginBottom: 5,
    },
    subContainer: {
        flexWrap: "wrap",
        width: "100%",
        fontSize: 12,
        alignSelf: "flex-start",
        marginBottom: 5,
    },

});


export default AlbumView;