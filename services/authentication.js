// SERVICES > authentication.js
import JWT from 'jsonwebtoken';

const APP_SECRET = "$uvajitWillM@keit";
// Creating user token for authentication
export const create_token_for_user = (user) => {
    const payload = {
        _id : user._id,
        email : user.email,
        userprofileimage : user.userprofileimage,
        role : user.role
    };
    const token = JWT.sign(payload, APP_SECRET);
    return token;
}
// Verifying the user token for authentication
export const validate_payload = (token) => {
    const payload = JWT.verify(token, APP_SECRET);
    return payload;
}