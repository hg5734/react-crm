import BaseSevice from "./base";
import { postRequest, getRequest } from '../utils/axios'
import { User, Lead } from '../interfaces/interface';
import { apiUri } from "../utils/constant";
const { userListUrl, userUrl, leadUrl } = apiUri;

export class AppSevice extends BaseSevice {

    static async addUser(data: User) {
        try {
            const { data: result } = await postRequest(userUrl, { data }, this.getToken(), false)
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async addLead(data: Lead) {
        try {
            const { data: result } = await postRequest(leadUrl, { data }, this.getToken(), false)
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async userList() {
        try {
            const { data: result } = await getRequest(userListUrl, {}, this.getToken())
            return result;
        } catch (error) {
            throw error;
        }
    }

}