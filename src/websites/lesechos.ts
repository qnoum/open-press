// TODO: find a workaround for the bug that forces the user to manually refresh the page
export const lesEchos = () => {
  const url = window.location.href
  const html = document.documentElement.outerHTML

  // Forces the page to reload to bypass some weird cache
  if (!window.location.hash) {
    window.location.href = url + '#loaded'
  }

  const split1 = html.split('window.__PRELOADED_STATE__')[1]
  const split2 = split1.split('</script>')[0].trim()
  const state = split2.substr(1, split2.length - 2)

  try {
    const data = JSON.parse(state)
    const article = data.article.data.stripes[0].mainContent[0].data.description

    const paywallNode = document.querySelector('.post-paywall')
    if (paywallNode) {
      const contentNode = document.createElement('div')
      contentNode.innerHTML = article
      contentNode.className = paywallNode.className
      paywallNode.parentNode?.insertBefore(contentNode, paywallNode)

      paywallNode.setAttribute('style', 'opacity: 0!important; height: 200px!important;')
    }
  } catch (err) {
    console.warn('unable to parse lesechos payload')
    console.warn(err)
  }
}
