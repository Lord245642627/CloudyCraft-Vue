<template>
  <div class="header-controls absolute top-10 right-0 flex flex-row" @keydown.k="handleOpenModel" tabindex="0">
    <span class="ob-drop-shadow" data-dia="search" @click="handleOpenModel">
      <svg-icon icon-class="search" />
    </span>
    <!-- <span></span> -->
    <Dropdown v-if="multiLanguage === 1" @command="handleClick">
      <span class="ob-drop-shadow" data-dia="language">
        <span v-if="$i18n.locale == 'cn'"> <svg-icon icon-class="cn" />中文 </span>
        <span v-if="$i18n.locale == 'en'"> <svg-icon icon-class="en" />EN </span>
      </span>
      <DropdownMenu>
        <DropdownItem name="en">English</DropdownItem>
        <DropdownItem name="cn">中文</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <!-- <span></span> -->
    <template v-if="userInfo === ''">
      <span class="mr-3" @click="openLoginDialog"
        ><strong>{{ t('settings.login') }}</strong></span
      >
    </template>
    <template v-if="userInfo !== ''">
      <Dropdown hover>
        <span class="mr-2">
          <div class="flex-shrink-0">
            <div class="rounded-full ring-gray-100 overflow-hidden shaodw-lg w-9">
              <img class="avatar-img" :src="userInfo.avatar" alt="" />
            </div>
          </div>
        </span>
        <DropdownMenu>
          <template v-if="!isMobile">
            <DropdownItem @click="openUserCenter">{{ t('settings.personal-center') }}</DropdownItem>
          </template>
          <DropdownItem @click="logout">{{ t('settings.logout') }}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </template>
    <!-- <span></span> -->
    <span no-hover-effect class="ob-drop-shadow" data-dia="light-switch">
      <ThemeToggle />
    </span>
  </div>
  <el-dialog v-model="loginDialogVisible" width="380px" >
    <el-form @keyup.enter.native="login">
      <el-form-item
        label="账号"
        model="userInfo"
        class="mt-5"
        style="text-align: center; margin-left: -10px; margin-right: 20px">
        <el-input v-model="loginInfo.username" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item
        label="密码"
        model="userInfo"
        type="password"
        class="mt-8"
        style="text-align: center; margin-left: -10px; margin-right: 20px">
        <el-input v-model="loginInfo.password" type="password" show-password placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="success"
          @click="login"
          size="large"
          class="mx-auto mt-3"
          style="border-radius: 30px; width: 50%"
          >登录</el-button
        >
      </el-form-item>
      <div class="mt-8">
        <span class="text" @click="openRegisterDialog">立即注册</span>
        <span class="text float-right" @click="openForgetPasswordDialog">忘记密码</span>
      </div>
      <div v-if="websiteConfig.thirdLogin === 1">
        <div class="social-login-title">社交账号登录</div>
        <div class="social-login-wrapper">
          <a @click="openAuthLogin('qq')">
            <svg-icon icon-class="social-qq" />
          </a>
          <a @click="openAuthLogin('gitee')">
            <svg-icon icon-class="social-gitee" />
          </a>
          <a @click="openAuthLogin('github')">
            <svg-icon icon-class="github" />
          </a>
        </div>
      </div>
    </el-form>
  </el-dialog>
  <el-dialog v-model="registerDialogVisible" width="380px">
    <el-form>
      <el-form-item
        label="邮箱:"
        model="userInfo"
        class="mt-5"
        style="text-align: center; margin-left: -10px; margin-right: 20px">
        <el-input v-model="loginInfo.username" placeholder="请输入邮箱" />
      </el-form-item>
      <el-form-item
        label="验证码:"
        model="userInfo"
        class="mt-8"
        style="text-align: center; margin-left: -10px; margin-right: 20px">
        <el-input v-model="loginInfo.code" placeholder="请输入验证码">
          <template #append>
            <span v-if="show" class="text" @click="sendCode" style="width: 70px; text-align: center">获取验证码</span>
            <span v-if="!show" class="count" style="width: 70px; text-align: center">{{ count }}秒后重试</span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item
        label="密码:"
        model="userInfo"
        type="password"
        class="mt-8"
        style="text-align: center; margin-left: -10px; margin-right: 20px">
        <el-input v-model="loginInfo.password" type="password" show-password placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="register"
          size="large"
          class="mx-auto mt-3"
          style="border-radius: 30px; width: 50%"
          >注册</el-button
        >
      </el-form-item>
      <span class="text" @click="returnLoginDialog">已有账号？去登录</span>
    </el-form>
  </el-dialog>
  <el-dialog v-model="forgetPasswordDialogVisible" width="380px">
    <el-form>
      <el-form-item
        label="邮箱:"
        model="userInfo"
        class="mt-5"
        style="text-align: center; margin-left: -10px; margin-right: 20px">
        <el-input v-model="loginInfo.username" placeholder="请输入邮箱" />
      </el-form-item>
      <el-form-item
        label="验证码:"
        model="userInfo"
        class="mt-8"
        style="text-align: center; margin-left: -10px; margin-right: 20px">
        <el-input v-model="loginInfo.code" placeholder="请输入验证码">
          <template #append>
            <span v-if="show" class="text" @click="sendCode" style="width: 70px; text-align: center">获取验证码</span>
            <span v-if="!show" class="count" style="width: 70px; text-align: center">{{ count }}秒后重试</span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item
        label="新密码:"
        model="userInfo"
        type="password"
        class="mt-8"
        style="text-align: center; margin-left: -10px; margin-right: 20px">
        <el-input v-model="loginInfo.password" type="password" show-password placeholder="请输入新密码" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="updatePassword"
          size="large"
          class="mx-auto mt-3"
          style="border-radius: 30px; width: 50%"
          >确定</el-button
        >
      </el-form-item>
      <span class="text" @click="returnLoginDialog">返回登录</span>
    </el-form>
  </el-dialog>
  <el-dialog v-model="articlePasswordDialogVisible" width="380px">
    <el-form @submit.native.prevent @keyup.enter.native="accessArticle">
      <el-form-item model="userInfo" class="mt-5">
        <el-input id="article-password-input" v-model="articlePassword" placeholder="文章受密码保护,请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="accessArticle" size="large" class="mx-auto mt-3">校验密码</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <teleport to="body">
    <SearchModel />
  </teleport>
</template>

<script lang="ts">
import { computed, defineComponent, toRef, toRefs, reactive, getCurrentInstance, nextTick, ref } from 'vue'
import { Dropdown, DropdownMenu, DropdownItem } from '@/components/Dropdown'
import { useAppStore } from '@/stores/app'
import { useCommonStore } from '@/stores/common'
import { useUserStore } from '@/stores/user'
import { useRoute, useRouter } from 'vue-router'
import ThemeToggle from '@/components/ToggleSwitch/ThemeToggle.vue'
import api from '@/api/api'
import SearchModel from '@/components/SearchModel.vue'
import { useSearchStore } from '@/stores/search'
import config from '@/config/config'
import { useI18n } from 'vue-i18n'
import emitter from '@/utils/mitt'

export default defineComponent({
  name: 'Controls',
  components: {
    Dropdown,
    DropdownMenu,
    DropdownItem,
    ThemeToggle,
    SearchModel
  },
  setup() {
    const show = ref(true)
    const count = ref(0)
    const { t } = useI18n()
    const proxy: any = getCurrentInstance()?.appContext.config.globalProperties
    const appStore = useAppStore()
    const commonStore = useCommonStore()
    const userStore = useUserStore()
    const searchStore = useSearchStore()
    const route = useRoute()
    const router = useRouter()
    const loginInfo = reactive({
      username: '' as any,
      password: '' as any,
      code: '' as any
    })
    const reactiveDate = reactive({
      loginDialogVisible: false,
      registerDialogVisible: false,
      forgetPasswordDialogVisible: false,
      articlePasswordDialogVisible: false,
      articlePassword: '',
      articleId: ''
    })
    emitter.on('changeArticlePasswordDialogVisible', (articleId: any) => {
      reactiveDate.articlePasswordDialogVisible = true
      reactiveDate.articlePassword = ''
      reactiveDate.articleId = articleId
      nextTick(() => {
        document.getElementById('article-password-input')?.focus()
      })
    })
    const handleClick = (name: string): void => {
      appStore.changeLocale(name)
    }
    const login = () => {
      if (loginInfo.username.trim().length == 0 || loginInfo.password.trim().length == 0) {
        proxy.$notify({
          title: 'Warning',
          message: '账号或者密码不能为空',
          type: 'warning'
        })
        return
      }
      let params = new URLSearchParams()
      params.append('username', loginInfo.username)
      params.append('password', loginInfo.password)
      api.login(params).then(({ data }) => {
        if (data.code === 0) {
          userStore.userInfo = data.data
          sessionStorage.setItem('token', data.data.token)
          userStore.token = data.data.token
          proxy.$notify({
            title: 'Success',
            message: '登录成功',
            type: 'success'
          })
          reactiveDate.loginDialogVisible = false
        }
      })
    }
    const logout = () => {
      api.logout().then(({ data }) => {
        if (data.code === 0) {
          userStore.userInfo = ''
          userStore.token = ''
          userStore.accessArticles = []
          sessionStorage.removeItem('token')
          proxy.$notify({
            title: 'Success',
            message: '登出成功',
            type: 'success'
          })
        }
      })
    }
    const openUserCenter = () => {
      userStore.userVisible = true
    }
    const openLoginDialog = () => {
      reactiveDate.loginDialogVisible = true
    }
    const openRegisterDialog = () => {
      loginInfo.code = ''
      reactiveDate.loginDialogVisible = false
      reactiveDate.registerDialogVisible = true
    }
    const returnLoginDialog = () => {
      reactiveDate.registerDialogVisible = false
      reactiveDate.forgetPasswordDialogVisible = false
      reactiveDate.loginDialogVisible = true
    }
    const openForgetPasswordDialog = () => {
      loginInfo.code = ''
      reactiveDate.loginDialogVisible = false
      reactiveDate.forgetPasswordDialogVisible = true
    }
    const sendCode = () => {
      if (loginInfo.username == '') {
        proxy.$notify({
          title: 'warning',
          message: '请输入邮箱',
          type: 'warning'
        })
        return false
      } else {
        if (loginInfo.username != '') {
          var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
          if (!reg.test(loginInfo.username)) {
            proxy.$notify({
              title: 'warning',
              message: '邮箱格式有误，请检查您的邮箱',
              type: 'warning'
            })
          } else {
            api.sendValidationCode(loginInfo.username).then(({ data }) => {
              if (data.code === 0) {
                show.value = false
                if (count.value === 0) {
                  // 初始化为60秒
                  count.value = 60
                  // 每1秒更新倒计时值
                  setInterval(() => {
                    count.value--
                    // 当倒计时结束时清空输入框内容并将倒计时值还原为0
                    if (count.value <= 0 || count.value > 60) {
                      clearInterval()
                      show.value = true
                      count.value = 0
                    }
                  }, 1000)
                }
                proxy.$notify({
                  title: 'Success',
                  message: '验证码已发送',
                  type: 'success'
                })
              }
            })
          }
        }
      }
    }
    const register = () => {
      let params = {
        code: loginInfo.code,
        username: loginInfo.username,
        password: loginInfo.password
      }
      api.register(params).then(({ data }) => {
        if (data.code === 0) {
          proxy.$notify({
            title: 'Success',
            message: '注册成功',
            type: 'success'
          })
          reactiveDate.registerDialogVisible = false
          reactiveDate.loginDialogVisible = true
        }
      })
    }
    const handleOpenModel: any = (status: boolean) => {
      searchStore.setOpenModal(status)
    }
    const openAuthLogin: any = (loginType: string) => {
      userStore.currentUrl = route.path
      reactiveDate.loginDialogVisible = false
      if (commonStore.isMobile) {
        api.openAuthUrl(loginType).then(({ data }) => {
          if (data.code === 0) {
            window.open(data.data, '_self')
          }
        })
      } else {
        api.openAuthUrl(loginType).then(({ data }) => {
          if (data.code === 0) {
            window.open(data.data, '_self')
          }
        })
      }
    }
    const updatePassword = () => {
      api.updatePassword(loginInfo).then(({ data }) => {
        if (data.code === 0) {
          proxy.$notify({
            title: 'Success',
            message: '修改成功',
            type: 'success'
          })
          reactiveDate.forgetPasswordDialogVisible = false
          reactiveDate.loginDialogVisible = true
        }
      })
    }
    const accessArticle = () => {
      if (reactiveDate.articlePassword.trim().length == 0) {
        proxy.$notify({
          title: 'Warning',
          message: '密码不能为空',
          type: 'warning'
        })
        return
      }
      api
        .accessArticle({
          articleId: reactiveDate.articleId,
          articlePassword: reactiveDate.articlePassword
        })
        .then(({ data }) => {
          if (data.code === 0) {
            reactiveDate.articlePasswordDialogVisible = false
            userStore.accessArticles.push(reactiveDate.articleId)
            router.push({ path: '/articles/' + reactiveDate.articleId })
          }
        })
    }
    return {
      show,
      count,
      handleOpenModel,
      loginInfo,
      ...toRefs(reactiveDate),
      userInfo: toRef(userStore.$state, 'userInfo'),
      isMobile: toRef(commonStore.$state, 'isMobile'),
      login,
      openAuthLogin,
      logout,
      handleClick,
      openUserCenter,
      openLoginDialog,
      openRegisterDialog,
      returnLoginDialog,
      sendCode,
      register,
      updatePassword,
      openForgetPasswordDialog,
      accessArticle,
      multiLanguage: computed(() => {
        let websiteConfig: any = appStore.websiteConfig
        return websiteConfig.multiLanguage
      }),
      websiteConfig: computed(() => appStore.websiteConfig),
      t
    }
  }
})
</script>
<style lang="scss">
.my-el-button {
  width: 300px !important;
}
.el-button {
  width: 300px;
}
.el-dialog__headerbtn {
  outline: none !important;
}
.el-dialog {
  border-radius: 20px !important;
}
.el-input-group__append {
  background-color: var(--background-primary-alt) !important;
}
.el-form-item__label {
  text-align: left;
  width: 70px;
  color: var(--text-normal) !important;
}
.el-input__inner {
  color: var(--text-normal) !important;
  background-color: var(--background-primary-alt) !important;
}
.el-input__wrapper {
  background: var(--background-primary-alt) !important;
}
</style>

<style lang="scss" scoped>
.text {
  color: var(--text-normal);
  cursor: pointer;
}
#submit-button {
  outline: none;
  background: #0fb6d6;
}
.header-controls {
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
    transition: opacity 250ms ease;
    padding-right: 0.5rem;
    &[no-hover-effect] {
      &:hover {
        opacity: 1;
      }
    }
    &:hover {
      opacity: 0.5;
    }
    .svg-icon {
      stroke: #fff;
      height: 2rem;
      width: 2rem;
      margin-right: 0.5rem;
      pointer-events: none;
    }
  }
  .search-bar {
    @apply bg-transparent flex flex-row px-0 mr-2 rounded-full;
    opacity: 0;
    width: 0;
    transition: 300ms all ease-out;
    &.active {
      @apply bg-ob-deep-800;
      opacity: 0.95;
      width: 200px;
      imput {
        width: initial;
      }
    }
    &:focus {
      appearance: none;
      outline: none;
    }
    input {
      @apply flex flex-1 bg-transparent text-ob-normal px-6 box-border;
      width: 0;
      appearance: none;
      outline: none;
    }
    svg {
      @apply float-right;
    }
  }
}

.social-login-title {
  margin-top: 1.5rem;
  color: #b5b5b5;
  font-size: 0.75rem;
  text-align: center;

  &::before {
    content: '';
    display: inline-block;
    background-color: #d8d8d8;
    width: 60px;
    height: 1px;
    margin: 0 12px;
    vertical-align: middle;
  }

  &::after {
    content: '';
    display: inline-block;
    background-color: #d8d8d8;
    width: 60px;
    height: 1px;
    margin: 0 12px;
    vertical-align: middle;
  }
}

.social-login-wrapper {
  margin-top: 1rem;
  font-size: 2rem;
  text-align: center;

  a {
    text-decoration: none;
    margin-left: 20px;
    cursor: pointer;

    svg {
      width: 30px;
      height: 30px;
    }
  }
}
</style>

function ref(arg0: boolean) {
  throw new Error('Function not implemented.')
}

function ref(arg0: boolean) {
  throw new Error('Function not implemented.')
}
