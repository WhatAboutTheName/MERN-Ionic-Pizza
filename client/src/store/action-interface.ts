export interface IAuth {
    auth: {
        isAdmin: boolean,
        isLogin: boolean,
        userId: string,
        token: string,
        expiresIn: string
    }
}