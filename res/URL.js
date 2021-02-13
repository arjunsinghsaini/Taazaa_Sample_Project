export const AppInfo = {
    baseUrlAPI: 'https://itunes.apple.com/',
    apiVersion: '',
};

export const apis = {
    getRequest: 'GET',
    postRequest: 'POST',
    deleteRequest: 'DELETE',
    putRequest: 'PUT',
    baseURL: AppInfo.baseUrlAPI + "/" + AppInfo.apiVersion + "",
    ALBUM_LIST: 'search?term=jack+johnson',
}
