import { validate_payload } from "../services/authentication.js";

// MIDDLEWARES > check.js
export const check_for_authentication_cookie = (cookieName) => {
    return ( request, response, next ) => {
        const token_cookie_value = request.cookies[cookieName];
        if ( !token_cookie_value ) {
            return next();
        }
        try {
            const user_payload = validate_payload(token_cookie_value);
            request.user = user_payload;
        } catch( error ) {}
        return next();
    }
}