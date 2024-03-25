import instanceRequst from "../Config/baseApi";

const PostRequstlogin =(route,data)=>{
    return instanceRequst.post(route,data)
}

export default PostRequstlogin