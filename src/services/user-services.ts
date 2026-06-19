import apiClient from "./api-client";

export type User = {
  id: number,
  name: string
};

class UserServices {
    getAllUsers(){
        const controller = new AbortController();
        const request = apiClient.get<User[]>('/users', {signal: controller.signal});
        return { request, abort: ()=> controller.abort()};
    }

    deleteUser(user: User){
        return apiClient.delete('/users/'+user.id);
    }

    addUser(user: User){
        return apiClient.post('/users',user);
    }

    updateUser(user: User){
        return apiClient.patch('/users/'+user.id, user);
    }
}

export default new UserServices();