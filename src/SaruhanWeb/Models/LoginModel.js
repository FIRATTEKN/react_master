import { makeAutoObservable, observable } from "mobx";
import request from "../Utils/request.js";

class LoginModel{
    result = []; 
    constructor(){
        // otomatik observable yapmak 
        makeAutoObservable(this);
    }

    async checkAccount(user_name,password){
        const resp = await request("login/"+user_name+"/"+password,"GET");
        this.result = resp.data;
        return resp.data;
    }

}
const loginModel = new LoginModel();
export default loginModel;
