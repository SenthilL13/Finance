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
  
  ac_welcome_chat: (data) => {
    console.log("datass",data)
    let url = api_name + "chatbot_welcome" 
    return api.postMethod(url,data);

  },

   ac_followup_chat: (data) => {
    console.log("datass",data)
    let url = api_name + "chat_assist" 
    return api.postMethod(url,data);

  },

    ac_send_chat: (data) => {
    console.log("datass",data)
    let url = api_name + "send_chat" 
    return api.postMethod(url,data);

  },
  
   ac_notes: (data) => {
    console.log("datass",data)
    let url = api_name + "notes" 
    return api.postMethod(url,data);

  },


  
}