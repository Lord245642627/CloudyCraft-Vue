<template>
  <n-drawer class="side-bg" v-model:show="drawerVisible" :width="240" :block-scroll="false" placement="right">
    <n-drawer-content style="padding-top: 0.5rem">
      <div class="author-container">
        <img class="author-avatar" :src="blog.blogInfo.siteConfig.authorAvatar" />
        <p class="author-name">{{ blog.blogInfo.siteConfig.siteAuthor }}</p>
        <div class="site-desc">{{ blog.blogInfo.siteConfig.siteIntro }}</div>
      </div>
      <blog-info></blog-info>
      <social-list></social-list>
      <ul class="side-menu">
        <template v-for="menu of routes" :key="menu.name">
          <li v-if="!menu.children" class="item" :class="{ active: route.path === menu.path }">
            <router-link :to="menu.path"><svg-icon :icon-class="menu.icon"></svg-icon> {{ menu.name }} </router-link>
          </li>
          <li v-else class="item dropdown" :class="{ expand: expand(menu.children) }">
            <a><svg-icon :icon-class="menu.icon"></svg-icon> {{ menu.name }} </a>
            <ul class="submenu">
              <li class="item" v-for="submenu of menu.children" :key="submenu.name"
                  :class="{ active: route.path === submenu.path }">
                <router-link :to="submenu.path"> <svg-icon :icon-class="submenu.icon"></svg-icon> {{ submenu.name }}
                </router-link>
              </li>
            </ul>
          </li>
        </template>
        <li class="item" v-if="!user.id">
          <a @click="app.loginFlag = true"> <svg-icon icon-class="user"></svg-icon> 登录 </a>
        </li>
        <template v-else>
          <li class="item" :class="{ active: route.path === '/user' }">
            <router-link to="/user">
              <svg-icon icon-class="author"></svg-icon> 个人中心
            </router-link>
          </li>
          <li class="item">
            <a @click="logout"> <svg-icon icon-class="logout"></svg-icon> 退出 </a>
          </li>
        </template>
      </ul>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent, onMounted, reactive, toRef, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Dropdown, DropdownMenu, DropdownItem } from '@/components/Dropdown'
import { isExternal } from '@/utils/validate'
import config from '@/config/config'
import api from '@/api/api'

export default defineComponent({
  name: 'Drawer',
  components: { Dropdown, DropdownMenu, DropdownItem },
  setup() {
    const { t, te } = useI18n()
    const router = useRouter()
    const pushPage = (path: string): void => {
      if (!path) return
      if (isExternal(path)) {
        window.location.href = path
      } else {
        router.push({
          path: path
        })
      }
    }
    const reactiveData = reactive({
      albums: [] as any
    })
    onMounted(() => {
      api.getAlbums().then(({ data }) => {
        reactiveData.albums = data.data
      })
    })
    const openPhotoAlbum = (id: any): void => {
      router.push('/photos/' + id)
    }
    return {
      ...toRefs(reactiveData),
      routes: config.routes,
      pushPage,
      openPhotoAlbum,
      te,
      t
    }
  }
})
</script>

<style lang="scss" scoped>
.side-menu {
  text-align: center;
  line-height: 3;
  padding: 1rem 1rem 1.25rem;
  background-color: transparent;
  animation: sidebarItem 0.8s;

  .item {
    color: var(--grey-5);
    border-radius: 0.9375rem;
    margin-bottom: 0.625rem;
    transition: all 0.2s ease-in-out 0s;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      color: inherit;

      .submenu {
        display: block;
      }
    }

    .submenu {
      display: none;
    }
  }
}

.item.expand {
  background-color: rgba(0, 0, 0, 0.05);
}

.item.expand .submenu {
  display: block;
}

.item.active {
  color: var(--grey-0);
  background-image: linear-gradient(to right, var(--color-pink) 0, var(--color-orange) 100%);
  box-shadow: 0 0 0.75rem var(--color-pink-a3);

  &:hover {
    color: var(--grey-0);
    box-shadow: 0 0 0.75rem var(--color-pink);
  }
}
</style>
