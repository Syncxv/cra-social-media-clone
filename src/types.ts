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
        user: UserResponse
        accessToken: string
        __typename: string
    }
}

export interface RegisterResponse {
    userRegister: {
        errors: FieldError[]
        user: UserResponse
        accessToken: string
        __typename: string
    }
}
export interface UserResponse extends UserType {
    __typename: string
}
export enum Fields {
    USERNAME = 'username',
    PASSWORD = 'password',
    EMAIL = 'email',
    UNKOWN = 'unkown'
}
