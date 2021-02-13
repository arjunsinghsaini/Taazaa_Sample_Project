import React, { Component } from 'react';
import { View,Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SoundPlayer from 'react-native-sound-player'

export default class AlbumDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isSongPlaying: false,
        }
    }
    componentDidMount() {
        try {
            SoundPlayer.loadUrl(this.props.route.params.album.previewUrl)
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

    componentWillUnmount() {
        SoundPlayer.unmount()
    }

    playPauseSong(url) {
        this.setState({
            isSongPlaying: !this.state.isSongPlaying
        })
        try {
            if (this.state.isSongPlaying) {
                SoundPlayer.pause();
            } else
                SoundPlayer.play();
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

    render() {
        let item=this.props.route.params.album
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 160, height: 160 }}
                    source={{ uri: item.artworkUrl100 }}
                />
                <Text style={styles.TitleContainer}>
                    {item.trackName}
                </Text>
                <Text style={styles.subContainer}>
                    {'Collection Price : Rs.' + item.collectionPrice}
                </Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => this.playPauseSong(this.props.route.params.album.previewUrl)}>
                    <Text style={styles.textStyle}>{this.state.isSongPlaying ? 'Pause Song' : 'Play Song'}</Text>
                </TouchableOpacity>
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
        margin: 50
    },
    textStyle: {
        fontSize: 14,
    },
    TitleContainer: {
        flexWrap: "wrap",
        fontSize: 16,
        marginTop:10,
        marginBottom:5,
    },
    subContainer: {
        flexWrap: "wrap",
        fontSize: 12,
        marginBottom: 5,
    },
});