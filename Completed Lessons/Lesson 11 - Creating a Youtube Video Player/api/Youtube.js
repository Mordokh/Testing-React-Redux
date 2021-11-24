import axios from "axios";

const KEY = "AIzaSyA87ksM2LYRTZ5A-FFtr4iTpBlIDV6_924";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params:{
     part: "snippet",
     maxResults: 5,
     crossDomain:true,
     key: KEY
    }
})
