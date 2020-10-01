import Axios from 'axios';


const instance = Axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    "api-key" : "2866ae23-0926-4ea1-a264-0fd929bc5489"

})

const usersAPI ={
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
        }
    }

    export default usersAPI;