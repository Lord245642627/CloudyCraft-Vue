import { defineStore } from 'pinia'
import { i18n } from '@/locales/index'
import cookies from 'js-cookie'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

nProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
  parent: '#loading-bar-wrapper'
})

const setTheme = (theme: string) => {
  if (theme === 'theme-dark') {
    document.body.classList.remove('theme-light')
    document.body.classList.add('theme-dark')
  } else {
    document.body.classList.remove('theme-dark')
    document.body.classList.add('theme-light')
  }
}

export const useAppStore = defineStore('appStore', {
  state: () => {
    return {
      themeConfig: {
        theme: cookies.get('theme') ? String(cookies.get('theme')) : 'theme-dark',
        profile_shape: 'circle-avatar',
        feature: true,
        // gradient: {
        //   color_1: '#24c6dc',
        //   color_2: '#5433ff',
        //   color_3: '#ff0099'
        // },
        gradient: {
          color_1: '#2CD8D5',
          color_2: '#C5C1FF',
          color_3: '#FFBAC3'
        },
        // header_gradient_css: 'linear-gradient(423deg, #002FA7 30.5% , #B8B9D4 60.07%, #6B1AE6 20.05%)',
        // header_gradient_css: 'linear-gradient(130deg, #FFDAF3 30.5%, #C394F2 60.07%, #6ECFEF 76.05%)',
        // header_gradient_css: 'linear-gradient(130deg, #1FA2FF 30.5%, #12D8FA 60.07%, #A6FFCB 90%)',
        header_gradient_css: 'linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)',
        // header_gradient_css: 'linear-gradient(103.3deg, rgb(252, 225, 208) 30%, rgb(255, 173, 214) 55.7%, rgb(162, 186, 245) 81.8%)',
        background_gradient_style: {
          background: 
          // 'linear-gradient(423deg, #002FA7 30.5% , #B8B9D4 60.07%, #6B1AE6 20.05%)',
          // 'linear-gradient(130deg, #FFDAF3 30.5%, #C394F2 60.07%, #6ECFEF 76.05%)',
          // 'linear-gradient(130deg, #1FA2FF 30.5%, #12D8FA 60.07%, #A6FFCB 76.05%)',
          'linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          '-webkit-box-decoration-break': 'clone',
          'box-decoration-break': 'clone'
        }
      },
      appLoading: false,
      websiteConfig: '' as any,
      viewCount: 0,
      articleCount: 0,
      talkCount: 0,
      categoryCount: 0,
      tagCount: 0,
      NPTimeout: -1,
      loadingTimeout: -1,
      aurora_bot_enable: true
    }
  },
  actions: {
    changeLocale(locale: string) {
      cookies.set('locale', locale, { expires: 7 })
      i18n.global.locale = locale
    },
    initializeTheme(mode: string) {
      setTheme(mode)
    },
    toggleTheme(isDark?: boolean) {
      this.themeConfig.theme =
        isDark === true || this.themeConfig.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
      cookies.set('theme', this.themeConfig.theme, { expires: 7 })
      setTheme(this.themeConfig.theme)
    },
    startLoading() {
      if (this.appLoading === true) return
      if (this.NPTimeout !== -1) clearTimeout(this.NPTimeout)
      if (this.loadingTimeout !== -1) clearTimeout(this.loadingTimeout)
      nProgress.start()
      this.appLoading = true
    },
    endLoading() {
      this.NPTimeout = <any>setTimeout(() => {
        nProgress.done()
      }, 100)

      this.loadingTimeout = <any>setTimeout(() => {
        this.appLoading = false
      }, 300)
    }
  }
})
