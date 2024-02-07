<template>
  <div>
    <Breadcrumb :current="t('menu.friends')"/>
    <div class="flex flex-col">
      <div class="post-header">
        <h1 class="post-title text-white uppercase">{{ t('titles.friends') }}</h1>
      </div>
      <div class="main-grid">
        <div class="relative space-y-5">
          <div class="bg-ob-deep-800 p-4 lg:p-14 rounded-2xl shadow-xl mb-8 lg:mb-0">
            <el-row :gutter="36">
              <template v-for="link in links" :key="link.id">
                <el-col :span="8" :xs="{ span: 20, offset: 2 }" class="mb-3">
                  <el-card shadow="never" class="shadow-md">
                    <div class="block">
                      <el-avatar :size="60" :src="link.linkAvatar"/>
                    </div>
                    <div class="info">
                      <a :href="link.linkAddress" target="_blank">
                        <div class="link-name font-semibold">{{ link.linkName }}</div>
                      </a>
                      <div class="link-intro truncate">{{ link.linkIntro }}</div>
                    </div>
                  </el-card>
                </el-col>
              </template>
            </el-row>
          </div>
          <!--          <div-->
          <!--              class="post-html"-->
          <!--              v-html="-->
          <!--              `<h2>注意事项</h2>-->
          <!--                <ul>-->
          <!--                  <li>需要交换友链的可在下方留言💖</li>-->
          <!--                  <li>申请时麻烦请做好本站友情链接💖</li>-->
          <!--                </ul>-->

          <!--              <h2>申请格式</h2>-->
          <!--                <ul>-->
          <!--                  <li>博客名称：纤云弄巧</li>-->
          <!--                  <li>博客简介：一个建立于 21 世纪，存活于互联网边缘的小站</li>-->
          <!--                  <li>博客头像: https://img.cloudycraft.cn/blog/config/a5dc50da718070d5e7d1b4baa0fa91d4.png</li>-->
          <!--                  <li>博客地址: https://www.cloudycraft.cn</li>-->
          <!--                </ul>-->

          <!--              <h2>定时清理</h2>-->
          <!--              <ul>-->
          <!--                 <li>定时排查无法访问或友联取消，将会移除链接💖</li>-->
          <!--              </ul>`-->
          <!--        "/>-->
          <div class="post-html">
            <h2>注意事项</h2>
            <ul>
              <li>需要交换友链的可在下方留言💖</li>
              <li>申请时麻烦请做好本站友情链接💖</li>
            </ul>
            <h2>申请格式</h2>
            <ul>
              <li>博客名称：纤云弄巧</li>
              <li>博客简介：一个建立于 21 世纪，存活于互联网边缘的小站</li>
              <li>博客头像: https://www.cloudycraft.cn/img/favicon.png</li>
              <li>博客地址: https://www.cloudycraft.cn</li>
            </ul>

            <h2>定时清理</h2>
            <ul>
              <li>定时排查无法访问或友联取消，将会移除链接💖</li>
            </ul>
          </div>
          <Comment/>
        </div>
        <div class="col-span-1">
          <Sidebar>
            <Profile/>
          </Sidebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, provide, computed, toRefs, onMounted} from 'vue'
import {useI18n} from 'vue-i18n'
import {Sidebar, Profile} from '../components/Sidebar'
import Breadcrumb from '@/components/Breadcrumb.vue'
import {Comment} from '../components/Comment'
import {useCommentStore} from '@/stores/comment'
import emitter from '@/utils/mitt'
import api from '@/api/api'

export default defineComponent({
  name: 'FriendLink',
  components: {Sidebar, Profile, Breadcrumb, Comment},
  setup() {
    const {t} = useI18n()
    const commentStore = useCommentStore()
    const reactiveData = reactive({
      links: '' as any,
      comments: [] as any,
      haveMore: false as any,
      isReload: false as any
    })
    const pageInfo = reactive({
      current: 1,
      size: 7
    })
    commentStore.type = 4
    onMounted(() => {
      fetchLinks()
      fetchComments()
    })
    provide(
        'comments',
        computed(() => reactiveData.comments)
    )
    provide(
        'haveMore',
        computed(() => reactiveData.haveMore)
    )
    emitter.on('friendLinkFetchComment', () => {
      pageInfo.current = 1
      reactiveData.isReload = true
      fetchComments()
    })
    emitter.on('friendLinkFetchReplies', (index) => {
      fetchReplies(index)
    })
    emitter.on('friendLinkLoadMore', () => {
      fetchComments()
    })
    const fetchLinks = () => {
      api.getFriendLink().then(({data}) => {
        reactiveData.links = data.data
      })
    }
    const fetchComments = () => {
      const params = {
        type: 4,
        topicId: null,
        current: pageInfo.current,
        size: pageInfo.size
      }
      api.getComments(params).then(({data}) => {
        if (reactiveData.isReload) {
          reactiveData.comments = data.data.records
          reactiveData.isReload = false
        } else {
          reactiveData.comments.push(...data.data.records)
        }
        if (data.data.total <= reactiveData.comments.length) {
          reactiveData.haveMore = false
        } else {
          reactiveData.haveMore = true
        }
        pageInfo.current++
      })
    }
    const fetchReplies = (index: any) => {
      api.getRepliesByCommentId(reactiveData.comments[index].id).then(({data}) => {
        reactiveData.comments[index].replyDTOs = data.data
      })
    }
    return {
      ...toRefs(reactiveData),
      t
    }
  }
})
</script>

<style lang="scss" scoped>
.block {
  display: inline-block;
  width: 24%;
}

.info {
  display: inline-block;
  width: 76%;
  height: 100%;
}

.link-name {
  margin-left: 20px;
  margin-bottom: 5px;
  margin-top: 2px;
  color: var(--text-normal);
  font-size: large;
}

.link-intro {
  margin-left: 20px;
  margin-bottom: 1px;
  color: var(--text-normal);
}

.el-card {
  background: var(--background-primary);
  border-radius: 10px;
  border: 0;
}
</style>
