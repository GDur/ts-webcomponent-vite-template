let log = console.log.bind(window)

export const html = (strings: any, ...values: any) =>
  String.raw({ raw: strings }, ...values)

export { log }
