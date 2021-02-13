import { NetworkManager } from '../utils/index'
import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native'
import { apis } from '../../res/URL';
import AlbumView from '../components/AlbumView'
import { getAlbumList, saveAlbums } from '../database/RealmManager'
import NetInfo from "@react-native-community/netinfo";

export default class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            albumList: []
        }
    }

    apiHandler = async () => {
        NetInfo.fetch().then(async state => {
            if (state.isConnected) {
                const res = await NetworkManager.networkManagerInstance.fetchRequest(apis.ALBUM_LIST, apis.getRequest)
                this.setState({ albumList: res.results })
                res.results.sort((a,b) => (a.trackId > b.trackId) ? 1 : ((b.trackId > a.trackId) ? -1 : 0))
                if (res.results.length > 0)
                    saveAlbums(res.results)

            } else {
              getAlbumList().then((listing)=>{
                listing.sort((a,b) => (a.trackId > b.trackId) ? 1 : ((b.trackId > a.trackId) ? -1 : 0))
                this.setState({ albumList: listing })
             });
            }
        });
    }

    componentDidMount() {
        this.apiHandler();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    style={{ marginVertical: 10 }}
                    showsVerticalScrollIndicator={false}
                    data={this.state.albumList}
                    keyExtractor={(item, index) => item.trackId}
                    renderItem={({ item }) => <AlbumView
                        item={item}
                        onPress={() => {
                            this.props.navigation.navigate('AlbumDetail', {
                                'album': item
                            })
                        }}
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