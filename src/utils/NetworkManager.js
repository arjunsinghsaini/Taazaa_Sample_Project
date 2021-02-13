import NetInfo from "@react-native-community/netinfo";
import URL, { apis, AppInfo } from '../../res/URL';

export default class NetworkManager {
    static networkManagerInstance = NetworkManager.networkManagerInstance == null ? new NetworkManager() : this.networkManagerInstance;

    async fetchRequest(api, method) {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        
        let url = `${apis.baseURL}${api}`;
        let timeout = (1000 * 60) * 2;  // 2 mins
        let body = (method == 'GET' ? null : JSON.stringify(parameters));

        return fetch(url, { method, timeout, headers, body })
            .then(response => {
                return response.json();
            }).then(data => {
                if (__DEV__) {
                    // console.log(`[Network Success]: ${JSON.stringify(data)}`);
                }
                return data;
            }).catch(error => {
                console.log(error);
                alert(error ? error.message : 'Something went wrong..!!');
            });
    }
}