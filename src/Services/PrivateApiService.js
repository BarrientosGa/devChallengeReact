export const getAuthorizationHeader = () => {
    const token = localStorage.getItem('token')
    const auth = {
        authorization: 'JWT' + token
    }

    return token !== null ? auth : null
}
