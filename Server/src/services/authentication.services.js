const authorizeUser = require("../utils/authoriseUser.utils");

async function authorizeUserService(token){
    try {
        const _id=authorizeUser(token)
        
    } catch (error) {
        
    }
}