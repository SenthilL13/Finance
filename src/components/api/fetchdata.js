import { api } from "./api";

const api_name = "FINO_ChatBot/"

export default {
  ac_login: (data) => {
    let url = api_name + "login"
    return api.postMethod(url, data);
  },
  ac_signup: (data) => {
    let url = api_name + "signup"
    return api.postMethod(url, data);
  },
   ac_user_manage: (data) => {
    let url = api_name + "user_management"
    return api.postMethod(url, data);
  },
    ac_content_manage: (data) => {
    let url = api_name + "services_management"
    return api.postMethod(url, data);
  },
  ac_get_workout_plans: (data) => {
    let url = api_name + "workout_plan?data=" + encodeURIComponent(JSON.stringify(data));
    return api.getMethod(url);
  },
  ac_get_diet: (data) => {
    let url = api_name + "diet_plan?data=" + encodeURIComponent(JSON.stringify(data));
    return api.getMethod(url);
  },
  ac_get_recipes: (data) => {
    let url = api_name + "recipes?data=" + encodeURIComponent(JSON.stringify(data));
    return api.getMethod(url);
  },
  ac_task_completed: (data) => {
    let url = api_name + "task_completed"
    return api.postMethod(url, data);
  },
  ac_get_bmitype: (data) => {
    let url = api_name + "get_bmitype?data=" + encodeURIComponent(JSON.stringify(data));
    return api.getMethod(url);
  },
  
}