export async function redirectIfNot(pageLang, where = "index") {
  const lang = navigator.language.split("-")[0]
  if (lang === pageLang) {
    return
  }
  const base = `${where}`
  const suffixUrl = `${base}_${lang}.html`
  const fallbackUrl = `${base}.html`

  async function exists(url) {
    try {
      const res = await fetch(url, { method: "HEAD", cache: "no-cache" })
      return res.ok
    } catch {
      return false
    }
  }

  let target = null
  if (await exists(suffixUrl)) {
    target = suffixUrl
  } else if (await exists(fallbackUrl)) {
    target = fallbackUrl
  }
  if (target && target !== window.location.pathname) {
    window.location.replace(target)
  }
}

document.getElementById("y").textContent = new Date().getFullYear()
