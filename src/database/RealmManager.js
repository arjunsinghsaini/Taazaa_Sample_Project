const Realm = require('realm');

// Define your models and their properties
const Album = {
    name: 'Album',
    primaryKey: 'trackId',
    properties: {
        trackId: { type: 'int', default: 0 },
        trackName: 'string',
        collectionPrice: { type: 'double', default: 0.0 },
        artworkUrl100: 'string',
        previewUrl: 'string'
    }
};


export function getAlbumList() {
    let albums = []
    var promise = new Promise((resolve, reject) => {
        Realm.open({ schema: [Album] })
            .then(realm => {
                albums = realm.objects('Album').toJSON()
                console.log("albums are ", albums.length);
                realm.close()
                resolve(albums)
            })
    });
    return promise;

}

export function saveAlbums(albums) {
    Realm.open({ schema: [Album] })
        .then(realm => {
            realm.write(() => {
                albums.map((album) => {
                    realm.create('Album', {
                        trackId: album.trackId, trackName: album.trackName, artworkUrl100: album.artworkUrl100,
                        previewUrl: album.previewUrl, collectionPrice: album.collectionPrice
                    });
                })
            });
            realm.close()
        })
}