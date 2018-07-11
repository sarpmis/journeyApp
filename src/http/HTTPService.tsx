// @ts-ignore
import { conf } from "@src/config/Configuration";

// import axios from 'axios';

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
        // new Promise( /* executor */ function(resolve, reject) { ... } );
        return new Promise ((resolve, reject) => {
            let returnElement: any = null;
            fetch(conf.users.getAll)
            .then((response) => response.json())
            .then((responseJson) => {
                responseJson.forEach((element: any) => {
                    if ((username === element.username)) {
                        console.log("found");
                        returnElement = element;
                    }
                });
                if (returnElement === null) {
                    reject("no such user");
                } else {
                    resolve(returnElement);
                }
            })
            .catch((error) => {
                console.error(error);
            });
        });
    }
}

// export const endpoint = new HTTPService();
