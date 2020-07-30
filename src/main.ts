type AnyObject = { [key: string]: PossibleObject } | AnyObject[]
type PossibleObject = AnyObject | unknown

export const isObject = function (o: AnyObject | unknown): o is AnyObject {
  return o === Object(o) && !Array.isArray(o) && typeof o !== 'function'
}

export function isArray<T>(o: unknown | T[]): o is T[] {
  return Array.isArray(o)
}

export const toCamel = (s: string): string => {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '')
  })
}

export function toCamelKeyReducer(acc: AnyObject, [key, value]: [string, PossibleObject]): AnyObject {
  return { ...acc, [toCamel(key)]: toCamelKeys(value) }
}

export function toCamelKeys(obj: PossibleObject): PossibleObject {
  if (isObject(obj)) {
    return Object.entries<PossibleObject>(obj).reduce(toCamelKeyReducer, {})
  }

  if (isArray(obj)) {
    return obj.map(toCamelKeys)
  }

  return obj
}
