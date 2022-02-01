import { Fields, FieldError } from '../types'

export const validate = (str: string, field: Fields): FieldError[] | null => {
    if (!str.length)
        return [
            {
                field,
                message: 'ayo it cant be empty'
            }
        ]
    switch (field) {
        case Fields.EMAIL:
            if (!validateEmail(str)) {
                return [
                    {
                        field,
                        message: 'email isnt valid bruv'
                    }
                ]
            }
            break
        case Fields.USERNAME:
            if (str.length < 3) {
                return [
                    {
                        field,
                        message: 'ayo username needs to be at least 3 characters '
                    }
                ]
            }
            break
        case Fields.PASSWORD:
            const errors: FieldError[] = []
            if (str.length < 6)
                errors.push({
                    field,
                    message: 'ayo password needs to be at least 6 characters long'
                })

            if (!str.match(/[a-z]/g))
                errors.push({
                    field,
                    message: 'ayo needs at least one letter'
                })
            if (str.search(/[0-9]/) < 0) {
                errors.push({
                    field,
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
