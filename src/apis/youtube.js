import Axios from "axios"

const KEY = "AIzaSyBdWRM6W8SeyKibwRHqTZvoSs_ud416zNo";

export default Axios.create({
    baseURL:"https:/www.googleapis.com/youtube/v3",
    params : {
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});