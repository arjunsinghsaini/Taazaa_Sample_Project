import NetInfo from "@react-native-community/netinfo";
import URL, { apis, AppInfo } from '../../res/URL';

export default class NetworkManager {
    static networkManagerInstance = NetworkManager.networkManagerInstance == null ? new NetworkManager() : this.networkManagerInstance;

    async fetchRequest(api, method, showProgressBar = false, parameters = {}, onRetryClicked = null, serviceTimeOut = AppInfo.serviceTimeOut) {
        // if (!this.isInternetConnected) {
        //     console.log('isInternetConnected :' + this.isInternetConnected);
        //     if (onRetryClicked != null) {
        //         Utility.sharedInstance.HOC.showOverlay({ type: 'NO_NETWORK', onRetryClicked: onRetryClicked });
        //         throw new Error('NO_NETWORK');
        //     }
        //     return { success: false, error: 'Please check your internet connection' };
        // }

        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        
        let url = `${apis.baseURL}${api}`;
        let timeout = (1000 * 60) * 2;  // 2 mins
        let body = (method == 'GET' ? null : JSON.stringify(parameters));
        // if (__DEV__) {
        //     console.log(
        //         '\n--------------------- [Network] ---------------------\nURL: ' + url +
        //         '\nMethod: ' + method +
        //         '\nHeaders: ' + JSON.stringify(headers) +
        //         '\nTimeout: ' + timeout +
        //         '\nParameters:\n' + body + '\n',
        //     );
        // }
        return fetch(url, { method, timeout, headers, body })
            .then(response => {
                return response.json();
            }).then(data => {
                if (__DEV__) {
                    console.log(`[Network Success]: ${JSON.stringify(data)}`);
                }
                return data;
            }).catch(error => {
                console.log(error);
                alert(error ? error.message : 'Something went wrong..!!');
            });
    }
}