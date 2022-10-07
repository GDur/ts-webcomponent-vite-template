import "@fontsource/material-icons"
import "@fontsource/quicksand"

import "./components/game-page"
import "./components/home-page"
import "./components/navigation-bar"
import "./components/not-found-page"

import { $ } from "./helpers/quickQuerySelector"

import { Context, Router, Commands, ActionResult } from "@vaadin/router"

import "./DevUi"
import { GLOBAL_PARAMS } from "./DevUi"
import { log } from "./helpers/utils"

const router = new Router(document.getElementById("outlet"))

// redirect to /login if not logged in
let loadComponent = (
  componentName: string
): ((context: Context, commands: Commands) => ActionResult) => {
  return (context, commands) => {
    try {
      if (customElements.get(componentName) === undefined) {
        throw new Error(
          "component not importet or other problem: " + componentName
        )
      }
      return commands.component(componentName)
    } catch (error) {
      console.error(error)
      return commands.component("not-found-page")
    }
  }
}

router.setRoutes([
  { path: "/", action: loadComponent("home-page") },
  { path: "/games/:gameName/:gameId", action: loadComponent("game-page") },
  { path: "(.*)", component: "not-found-page" },
])

export function setColorMode() {
  if (localStorage.getItem("color-mode") === "dark") {
    $("html")?.classList.add("dark")
    $("html")?.classList.remove("light")
    $("body")?.classList.add("dark")
    $("body")?.classList.remove("light")
    $(".enable-dark-mode")?.classList.add("is-primary")
    $(".enable-light-mode")?.classList.remove("is-primary")
  } else if (localStorage.getItem("color-mode") === "light") {
    $("html")?.classList.remove("dark")
    $("html")?.classList.add("light")
    $("body")?.classList.remove("dark")
    $("body")?.classList.add("light")
    $(".enable-dark-mode")?.classList.remove("is-primary")
    $(".enable-light-mode")?.classList.add("is-primary")
  } else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      $("html")?.classList.add("dark")
      $("html")?.classList.remove("light")
      $("body")?.classList.add("dark")
      $("body")?.classList.remove("light")
      $(".enable-dark-mode")?.classList.add("is-primary")
      $(".enable-light-mode")?.classList.remove("is-primary")
    }
  }
}

setColorMode()
