import axios from "axios";

async function request(url,method,data=null){
    const SERVER = "https://www.api.saruhan.eu/saruhaneu_saruhan-api/saruhaneu_saruhan-api/";
    const reqUrl = SERVER + url;   
    const response = await axios(reqUrl,{
      withCredentials: false,
        method:method,
        headers: {
        },
        data:data
    }
    );

    return response;
}

export default request;