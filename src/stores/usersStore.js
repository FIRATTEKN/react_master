import { makeAutoObservable, observable } from "mobx";
import request from "../utils/request.js";

class usersStore{
    users = []; 
    constructor(){
        // otomatik observable yapmak 
        makeAutoObservable(this);
    }

    async getUsers(){
        const resp = await request("","GET");
        console.log(resp.data);
        this.users=resp.data;
    }

    async addUsers(){
        console.log("emre kaşardır")
    }
}
const UsersStore = new usersStore();
export default UsersStore;
