<template>
  <div>
    <post-header
      :title="post.title"
      :description="post.description"
      :author="post.author"
      :avatar="post.avatar"
      :date="post.created_at"
    />
    <div class="post-buttons d-flex align-center justify-space-between py-2">
      <div class="post-stats">
        <post-like :like-count="post.likes" />
        <post-comment :comment-count="post.comments" />
      </div>
      <div class="post-actions">
        <post-bookmark :post="post" :top="true" />
        <post-share :top="true" />
      </div>
    </div>
    <div class="content my-4">
      <div class="post-image">
        <v-img :src="`/posts/${post.img}.jpg`" :lazy-src="`/posts/${post.img}_thumbnail.png`" height="400" class="rounded" />
      </div>
      <div class="post-content py-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas repellat maxime necessitatibus sapiente temporibus dolor soluta excepturi voluptatibus impedit, optio fuga, quisquam possimus libero consequuntur voluptatum deserunt repellendus corrupti nobis molestiae voluptate provident nisi itaque quam. Quidem maxime amet, cum quos eos similique fuga impedit quod, veniam magnam doloribus in. Unde reiciendis et nam enim dignissimos repudiandae eaque itaque voluptas molestias eum vero recusandae, dolorum facilis officiis optio nemo tenetur inventore ex quibusdam soluta voluptatem, laboriosam qui! Explicabo optio, aperiam tempore impedit adipisci, velit itaque cumque quia suscipit quam voluptatibus, blanditiis sed exercitationem repudiandae. Expedita laboriosam sequi aut vero quibusdam.
        </p>
        <blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perspiciatis saepe reiciendis, magni maiores placeat quasi. In, temporibus vero ab aperiam nemo possimus, accusamus ut quaerat harum maiores mollitia ducimus placeat sit dolorem veniam fugit.
        </blockquote>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptates, temporibus illum reprehenderit quas voluptatibus, possimus beatae voluptate eos repellat quam vitae nam molestiae odit expedita voluptas accusamus ab debitis officiis ex nisi cum. Rerum fugiat saepe excepturi inventore officia provident soluta quo eos esse iure earum, odit voluptatum neque.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus sequi mollitia perspiciatis placeat vero, quibusdam perferendis ipsum deserunt alias porro voluptate possimus inventore eos? Iste earum facilis quae laborum sed, doloribus inventore molestiae quidem! Debitis nostrum nisi dolor, velit sed impedit dignissimos nulla error itaque cupiditate inventore! Consequatur necessitatibus et, inventore dolorum adipisci minima ipsam culpa! Harum iste officiis eius est unde commodi deserunt, perspiciatis, corporis voluptas sint ducimus tempore omnis eos assumenda, expedita incidunt necessitatibus nostrum consequatur soluta excepturi. Hic tempore laboriosam illo rem incidunt velit quis eveniet reprehenderit placeat repellat deleniti, labore vel delectus cum reiciendis facilis similique ad ipsum vitae voluptas debitis temporibus dignissimos! Maiores reprehenderit qui nihil harum voluptate ullam unde, ipsam esse! Pariatur, aliquam debitis?
        </p>
      </div>
    </div>
    <div class="post-footer">
      <div class="tags">
        <v-chip v-for="tag in post.tags" :key="tag" nuxt :to="`/tag/${tag}`" class="text-capitalize mr-2">
          {{ tag }}
        </v-chip>
      </div>
      <div class="post-buttons d-flex align-center justify-space-between py-2 mt-4">
        <div class="post-stats">
          <post-like :like-count="post.likes" />
          <post-comment :comment-count="post.comments" />
        </div>
        <div class="post-actions">
          <post-bookmark :post="post" :top="false" />
          <post-share :top="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import PostHeader from './PostHeader.vue'
import PostBookmark from './button/PostBookmark.vue'
import PostComment from './button/PostComment.vue'
import PostLike from './button/PostLike.vue'
import PostShare from './button/PostShare.vue'

export default {
  components: { PostHeader, PostLike, PostComment, PostBookmark, PostShare },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      follow: false
    }
  },
  computed: {
    postDate () {
      return moment(this.post.created_at).format('DD MMM HH:MM:SS')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.post-buttons{
  min-height: 50px;
}

p{
    font-size: 20px;
    letter-spacing: -0.003em;
    line-height: 32px;
    font-weight: 300;
    margin: 40px 0;
}

blockquote{
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    line-height: 32px;
    border-left: 2px solid #000;
    padding: 6px;
    padding-left: 10px;
    padding-right: 0;
}
</style>
