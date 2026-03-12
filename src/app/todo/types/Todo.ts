import { isBoolean, isInterface, isString } from './valid-types';

export type Todo = {
  title: string
  completed: boolean
}

export const isTodo = (val: any): val is Todo => {
  return isInterface({
    title: [isString],
    completed: [isBoolean],
  })(val)
}
