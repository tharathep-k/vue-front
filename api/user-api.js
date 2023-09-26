import axios from "./axios";

export const getalluser = () => axios.get("/user/getuserdata/")
export const deleteUser = (id) => axios.delete("/user/deleteuser/", {params: id})
export const edituser = (input) => axios.put("/user/edituser/", input)
export const searchuser = (input) => axios.get("/user/searchemail/", {params: input})