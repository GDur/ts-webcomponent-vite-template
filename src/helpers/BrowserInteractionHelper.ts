export enum ScreenOrientation {
  PortraitMode,
  LandscapeMode,
}

export class BrowserInteractionHelper {
  static getScreenOrientation(): ScreenOrientation {
    if (window.orientation === undefined) {
      if (window.innerWidth > window.innerHeight) {
        return ScreenOrientation.LandscapeMode
      } else {
        return ScreenOrientation.PortraitMode
      }
    }
    if (window.orientation > 45 && window.orientation < 90 + 45) {
      return ScreenOrientation.LandscapeMode
    } else {
      return ScreenOrientation.PortraitMode
    }
  }

  static isRunningLocally() {
    return window.location.href.indexOf("tools101.net") < 0
  }

  static deviceType() {
    const ua = navigator.userAgent
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet"
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile"
    }
    return "desktop"
  }

  static checkBrowser() {
    // Get the user-agent string
    let userAgentString = navigator.userAgent

    // Detect Chrome
    let chromeAgent = userAgentString.indexOf("Chrome") > -1

    // Detect Internet Explorer
    let IExplorerAgent =
      userAgentString.indexOf("MSIE") > -1 ||
      userAgentString.indexOf("rv:") > -1

    // Detect Firefox
    let firefoxAgent = userAgentString.indexOf("Firefox") > -1

    // Detect Safari
    let safariAgent = userAgentString.indexOf("Safari") > -1

    // Discard Safari since it also matches Chrome
    if (chromeAgent && safariAgent) safariAgent = false

    // Detect Opera
    let operaAgent = userAgentString.indexOf("OP") > -1

    // Discard Chrome since it also matches Opera
    if (chromeAgent && operaAgent) chromeAgent = false

    return {
      isFirefox: firefoxAgent,
      isChrome: chromeAgent,
      isInternetExplorer: IExplorerAgent,
    }
  }

  static enableFullscreenOnDoubleClick() {
    document.addEventListener(
      "dblclick",
      function (e) {
        toggleFullScreen()
      },
      false
    )
    let mylatesttap = 0
    document.addEventListener(
      "touchstart",
      function (e) {
        doubletap()
      },
      false
    )
    function toggleFullScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
      }
    }
    function doubletap() {
      var now = new Date().getTime()
      var timesince = now - mylatesttap

      if (timesince < 600 && timesince > 0) {
        // double tap
        toggleFullScreen()
      }

      mylatesttap = new Date().getTime()
    }
  }
}
