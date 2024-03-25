import axios from "axios";

const base_urt_main = {
    BASE_URL_ROUTE : "",
    USER_PLAN_ID : -1,
}

const instanceRequst = axios.create({
    baseURL: base_urt_main.BASE_URL_ROUTE,
    headers: { "Baraer": "sdfkjlasddfhwensaklldfnlkjhwffuh" },
});

export default instanceRequst;
