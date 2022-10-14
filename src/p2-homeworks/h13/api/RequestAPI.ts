// @ts-ignore

const url = `https://neko-cafe-back.herokuapp.com/auth/test`


//без settings (withCredentials не нужен, API_KEY не нужен, мой сервер работает без этого)


export const RequestApi = {
    postRequest(isSuccess: boolean) {
        const body = {success: isSuccess}
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then((res) => {
            console.log(res)
            return res.json()
        })
    }
}