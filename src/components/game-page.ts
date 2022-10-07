import { Router, RouterLocation } from "@vaadin/router"
import { html, log } from "../helpers/utils"

class GamePage extends HTMLElement {
  private gameName?: string
  private gameId?: string

  connectedCallback() {
    this.innerHTML = html` <div
      style="width: 100%; height: 100vh; display:flex; justify-content: center; align-items: center"
      id="game-container-canvas"
      class="container game-container"
    >
      <div class="game-score">0 : 0</div>
    </div>`
  }

  onBeforeEnter(location: RouterLocation) {}
}

customElements.define("game-page", GamePage)
