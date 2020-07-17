
class BaseSevice {

    commonErrorHandler(errorObject:any, ) {
        if (errorObject && errorObject.response && errorObject.response.status) {
            if (errorObject.response.status === 401 || errorObject.response.status === 403) {
                // Redirect to login
            }
        }
    }
}

export default BaseSevice;