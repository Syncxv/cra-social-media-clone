import { Feilds, FieldError } from '../types'

export const validate = (str: string, feild: Feilds): FieldError[] | null => {
    if (!str.length)
        return [
            {
                feild,
                message: 'ayo it cant be empty'
            }
        ]
    switch (feild) {
        case Feilds.EMAIL:
            if (!validateEmail(str)) {
                return [
                    {
                        feild,
                        message: 'email isnt valid bruv'
                    }
                ]
            }
            break
        case Feilds.USERNAME:
            if (str.length < 3) {
                return [
                    {
                        feild,
                        message: 'ayo username needs to be at least 3 charechters i cant spell'
                    }
                ]
            }
            break
        case Feilds.PASSWORD:
            const errors: FieldError[] = []
            if (str.length < 6)
                errors.push({
                    feild,
                    message: 'ayo password needs to be at least 6 characters long'
                })

            if (!str.match(/[a-z]/g))
                errors.push({
                    feild,
                    message: 'ayo needs at least one letter'
                })
            if (str.search(/[0-9]/) < 0) {
                errors.push({
                    feild,
                    message: 'ayo needs at least one number'
                })
            }
            if (errors.length) return errors
            break
    }
    return null
}

export const validateEmail = (str: string) => {
    return str
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}
