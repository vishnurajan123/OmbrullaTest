import { serverURL } from "./BASE_URL"
import { commonAPI } from "./commonAPI"

export const getAllUsersApi=async ()=>{
    return await commonAPI("GET",`${serverURL}`,"")
}