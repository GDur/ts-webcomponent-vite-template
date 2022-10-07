export const $ = document.querySelector.bind(document)
export const $$ = document.querySelectorAll.bind(document)

export function $on(selector: string, event: string, func: Function) {
  $$(selector)?.forEach((box: any) => box.addEventListener(event, func))
}

export function $each(selector: string, func: Function) {
  $$(selector)?.forEach((box: Element) => {
    func(box)
  })
}

export function $waitForThen(selector: string, func: (e: Element) => void) {
  let id = setInterval(() => {
    let elements = $$(selector)
    if (elements.length > 0) {
      elements?.forEach((box: Element) => {
        func(box)
      })
      clearInterval(id)
    }
  }, 100)
}
