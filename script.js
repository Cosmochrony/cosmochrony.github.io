export function redirectIfNot(pageLang, where = "index") {
  const lang = navigator.language.split("-")[0]
  if (lang !== pageLang) {
    const langSuffix = ["it", "es", "fr", "de"].includes(lang) ? `_${lang}` : ""
    let redirect = `${where}${langSuffix}.html`
    if (redirect !== window.location.pathname) {
      window.location.replace(redirect)
    }
  }
}
document.getElementById("y").textContent = new Date().getFullYear()
