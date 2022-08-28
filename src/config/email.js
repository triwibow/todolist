const emailConfig = () => {
    const email = process.env.REACT_APP_EMAIL;
    const encodedEmail = encodeURIComponent(email);
    return encodedEmail;
}

export {
    emailConfig
}