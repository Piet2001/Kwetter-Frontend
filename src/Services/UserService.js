import axios from "axios";
import { protectedResources } from "../authConfig";

const url = protectedResources.apiUser.endpoint;

export async function GetdefaultUser(token) {
    var response = await axios.get(url + "user/", {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}