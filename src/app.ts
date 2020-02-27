import { lesEchos } from './websites/lesechos'

const main = async () => {
  const url = window.location.href
  console.log(url)

  if (url.includes('lesechos.fr') && !!document.querySelector('.post-paywall')) {
    lesEchos()
  }
}

main()
