import axios from "axios";
import baseUrl from "./base_url";

export const api = {
  header: () => {
    // const cookies = new Cookies();
    // let token = cookies.get('token')
    let header = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    //   Authorization: `Bearer ${token}`
    };
    return header;
  },

  getMethod: (url) => {
    var headers = api.header();
    return new Promise((resolve, reject) => {
      axios
        .get(baseUrl.baseUrl + url, {
          headers: headers,
        })
        .then((res) => {
          if (res.status == 200) {
            resolve(res.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  postMethod: (url, data) => {
    var headers = api.header();
    return new Promise((resolve, reject) => {
      axios
        .post(baseUrl.baseUrl + url, data, {
          headers: headers,
        })
        .then((res) => {
          if (res.status == 200) {
            resolve(res.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  putMethod: (url, data) => {
    var headers = api.header();
    return new Promise((resolve, reject) => {
      axios
        .put(baseUrl + url, data, {
          headers: headers,
        })
        .then((res) => {
          if (res.status == 200) {
            resolve(res.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getFile: (url) => {
    var headers = api.header();
    return new Promise((resolve, reject) => {
      axios
        .get(baseUrl.baseUrl + url, {
          headers: headers,
          responseType: 'blob'
        })
        .then((res) => {
          if (res.status == 200) {
            resolve(res.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};