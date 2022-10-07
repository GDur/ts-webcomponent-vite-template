import { Pane } from "tweakpane"
import { BrowserInteractionHelper } from "./helpers/BrowserInteractionHelper"

/**
 * Example Access:
 * 
    import { GLOBAL_PARAMS } from "./DevUi"
    log(GLOBAL_PARAMS)
 */

export const GLOBAL_PARAMS = {
  devmode: false,
}

function initTweakPane() {
  const pane = new Pane()
  pane.addInput(GLOBAL_PARAMS, "devmode", {
    label: "DevMode",
  })

  // load if preset available
  let l = localStorage.getItem("global_params")
  if (l !== null) pane.importPreset(JSON.parse(l))

  // save on change
  pane.on("change", () => {
    const preset = pane.exportPreset()
    localStorage.setItem("global_params", JSON.stringify(preset))
  })
}

if (BrowserInteractionHelper.isRunningLocally()) {
  initTweakPane()
}
