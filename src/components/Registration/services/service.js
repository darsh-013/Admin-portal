import axios from "axios";
class UserDataService {

  getAll() {
        return axios.get("http://localhost:8080/users");
    }

  get(id) {
    return axios.get(`localhost:8080/findOne/${id}`);
  }

  create(userData) {
    return axios.post("http://localhost:8080/users", userData);
  }


}
export default new UserDataService();