import { Router } from "@vaadin/router"
import { setColorMode } from ".."
import { $on, $ } from "../helpers/quickQuerySelector"
import { html } from "../helpers/utils"

class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html` <nav
      class="fade-d-1 navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="/assets/images/logo.png" />
          Template
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start"></div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="light-mode-toggle buttons has-addons">
              <button class="enable-light-mode button is-small is-primary">
                Light
              </button>
              <button class="enable-dark-mode button is-small">Dark</button>
            </div>
          </div>
        </div>
      </div>
    </nav>`

    $on(".switch-to-logged-off", "click", async () => {
      Router.go("logout")
    })

    // $on(".switch-to-register", "click", async () => {
    //   Router.go("register")
    // })

    $on(".switch-to-login", "click", async () => {
      Router.go("login")
    })

    $(".light-mode-toggle")?.addEventListener("click", () => {
      if (localStorage.getItem("color-mode") === "dark") {
        localStorage.setItem("color-mode", "light")
        setColorMode()
      } else {
        localStorage.setItem("color-mode", "dark")
        setColorMode()
      }
    })

    let navbarButton = $(".navbar-burger") as HTMLElement | undefined
    navbarButton?.addEventListener("click", (event) => {
      // Get the target from the "data-target" attribute
      const target = navbarButton!.dataset.target!
      const $target = document.getElementById(target)

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      navbarButton?.classList.toggle("is-active")
      $target?.classList.toggle("is-active")
    })
  }
}

customElements.define("navigation-bar", NavigationBar)
