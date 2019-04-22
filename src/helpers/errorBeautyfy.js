


export const googleAuthErrorBeautyfy = (error) => {

    const erroPrefix = 'RNGoogleSignInError:'
    const textMessage = error;
    const initalStr = String(textMessage).indexOf(erroPrefix);
    const finalStr  = String(textMessage).indexOf('.');

    const beautyError = String(textMessage).substring(initalStr + erroPrefix.length,finalStr)
    return String(beautyError);
    //RNGoogleSignInError: The user canceled the sign in request.

}