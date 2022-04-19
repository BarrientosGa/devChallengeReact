export const getAuthorizationHeader = () => {
    const token = localStorage.getItem('token')
    const auth = {
        headers: {
            authorization: `JWT ${token}`
        }
    }

    return token !== null ? auth : null
}
