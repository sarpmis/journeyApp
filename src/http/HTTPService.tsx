import axios from 'axios';

// interface RequestOptions {
//     success: Function;
// }

export default class HTTPService {
    static getTest(){
        axios.get('https://randomuser.me/api/?format=pretty')
        .then(function (response) {
            console.log(response.data.results[0].name);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

     request(url, method, options){
        fetch(url, method)
        .then((response) => response.json())
        .then((data) => {

            options.success(data)
        })
        .catch((error) => options.error(error));
    }
}

export const endpoint = new HTTPService();