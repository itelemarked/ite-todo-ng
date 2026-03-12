import { isInterface, isString } from "./valid-types"

export type Identifiable<T> = T & { uid: string }

export const isIdentifiable = <T>(val: any): val is Identifiable<T> => {
    return isInterface({
        uid: [isString]
    })(val)
}