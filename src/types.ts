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
