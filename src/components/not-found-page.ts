import { html } from "../helpers/utils"

class NotFoundPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html`<navigation-bar></navigation-bar>
      <div class="container page-centered-child fade-u-0">
        <h2 class="title">Page not found</h2>
      </div>`
  }
}
customElements.define("not-found-page", NotFoundPage)
