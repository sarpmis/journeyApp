// import axios from 'axios';
import { conf } from "@src/config/configuration";

// interface RequestOptions {
//     success: Function;
// }

export default class HTTPService {
    // static getTest(){
    //     axios.get('https://randomuser.me/api/?format=pretty')
    //     .then(function (response) {
    //         console.log(response.data.results[0].name);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // }

    // request(url, method, options){
    //     fetch(url, method)
    //     .then((response) => response.json())
    //     .then((data) => {

    //         options.success(data)
    //     })
    //     .catch((error) => options.error(error));
    // }
    static checkUser(username: string, password: string) {
        let returnElement: any = null;
        fetch(conf.users.getAll)
        .then((response) => response.json())
        .then((responseJson) => {
            responseJson.forEach((element: any) => {
                if ((username === element.username) && (password === element.password)) {
                    console.log("found");
                    returnElement = element;
                }
            });
            return returnElement;
        })
        .catch((error) => {
           console.error(error);
        });
    }
}

export const endpoint = new HTTPService();
