import BaseSevice from "./base";
import { postRequest } from '../utils/axios'
import { LoginInterface } from '../interfaces/interface';
import { apiUri } from "../utils/constant";
const { loginUrl } = apiUri;

export class AppSevice extends BaseSevice {

    static async login(data: LoginInterface) {
        try {
            const { data: result } = await postRequest(loginUrl, { data }, null, true)
            return result;
        } catch (error) {
            throw error;
        }
    }

}