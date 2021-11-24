import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID anaPrlqSoc0_KqB5X_76ZNl0YzUSl7lnjCitoiqrdFU"
    }
});