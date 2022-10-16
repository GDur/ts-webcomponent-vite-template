import { Router, RouterLocation } from "@vaadin/router"
import { html, log } from "../helpers/utils"

class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html` <navigation-bar></navigation-bar>
      <div
        style="width: 100%; height: 100vh; display:flex; justify-content: center; align-items: center"
        id="home-container"
        class="container home-container"
      >
        <div>
          Welcome to the home page.

          <br />
          <a href="/games/pong/123123" class="pong-starter">go to test page</a>
        </div>
      </div>`
  }

  onBeforeEnter(location: RouterLocation) {
    log("loaded home page")
  }
}

customElements.define("home-page", HomePage)
