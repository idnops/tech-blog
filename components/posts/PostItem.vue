<template>
  <div>
    <post-item-controls />
    <div class="content my-4">
      <div class="post-image">
        <v-img :src="`/posts/${post.img}`" height="400" class="rounded" />
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
        <v-chip v-for="tag in tags" :key="tag" class="text-capitalize mr-4">
          {{ tag }}
        </v-chip>
      </div>
      <post-item-controls class="mt-4" position="bottom" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import PostItemControls from './PostItemControls.vue'
export default {
  components: { PostItemControls },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      follow: false,
      tags: ['technology', 'programming', 'gadgets', 'hardware', 'computer science']
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
