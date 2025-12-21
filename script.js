export function redirectIfNot(pageLang) {
  const lang = navigator.language.split("-")[0]
  if (lang !== pageLang) {
    const langSuffix = ["it", "es", "fr"].includes(lang) ? `_${lang}` : ""
    let redirect = `/index${langSuffix}.html`
    if (redirect !== window.location.pathname) {
      window.location.replace(redirect)
    }
  }
}
document.getElementById("y").textContent = new Date().getFullYear()
