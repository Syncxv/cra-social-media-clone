export interface Follower {
    _id: string
    username: string
}

export interface UserType {
    _id: string
    username: string
    email: string
    avatar: string
    followers: Follower[]
    isStaff: boolean
}

export interface Errors {
    message: string
}

export interface FieldError extends Errors {
    field: Fields
}

export interface LoginResponse {
    userLogin: {
        errors: FieldError[]
        user: {
            _id: string
            username: string
            email: string
            avatar: null
            __typename: string
        }
        accessToken: string
        __typename: string
    }
}

export enum Fields {
    USERNAME = 'username',
    PASSWORD = 'password',
    EMAIL = 'email',
    UNKOWN = 'unkown'
}
