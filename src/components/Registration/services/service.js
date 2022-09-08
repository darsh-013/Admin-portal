import axios from "axios";
class UserDataService {

  getAll() {
    return axios.get("http://localhost:8080/users");
  }

  get(id) {
    return axios.get(`http://localhost:8080/findOne/${id}`);
  }

  create(userData) {
    return axios.post("http://localhost:8080/users", userData);
  }

  update(id, userData) {
    return axios.put(`http://localhost:8080/update/${id}`, userData);
  }

  delete(id) {
    return axios.delete(`http://localhost:8080/delete/${id}`);
  }

}
export default new UserDataService();