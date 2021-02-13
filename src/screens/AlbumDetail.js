import { NetworkManager } from '../utils/index'
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { apis } from '../../res/URL';
import AlbumView from '../components/AlbumView'

export default class AlbumDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            albumList: [],
        }
    }

    apiHandler = async () => {
        const res = await NetworkManager.networkManagerInstance.fetchRequest(apis.ALBUM_LIST, apis.getRequest, true, null, () => this.apiHandler())
        this.setState({ albumList: res.results })
    }

    componentDidMount() {
        this.apiHandler();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    style={{ marginHorizontal: 10, }}
                    showsVerticalScrollIndicator={false}
                    data={this.state.albumList}
                    keyExtractor={(item, index) => item.trackId}
                    renderItem={({ item }) => <AlbumView
                        item={item}
                    />}
                />
            </View>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        margin: 20
    },
    textStyle: {
        fontSize: 14
    },
    TitleContainer: {
        flexWrap: "wrap",
        width: "100%",
        fontSize: 16,
        alignSelf: "flex-start",
        marginBottom: 5,
    },
});