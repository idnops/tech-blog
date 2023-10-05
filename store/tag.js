import { getDatabase, ref, set } from 'firebase/database'
import { v4 as uuidv4 } from 'uuid'
import slug from 'slug'
import app from '~/plugins/firebase'

export const actions = {
  CREATE_TAG: async (ctx, payload) => {
    const id = uuidv4()
    const { tag } = payload
    const db = getDatabase(app)

    await set(ref(db, `tags/${id}`), {
      name: tag,
      slug: slug(tag),
      used: 1
    })
  }
}
