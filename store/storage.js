import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import app from '~/plugins/firebase'

const storage = getStorage(app)

export const actions = {
  UPLOAD_FILE: async (state, payload) => {
    const { path, file } = payload
    const metadata = {
      contentType: file.type
    }
    const storageRef = ref(storage, `${path}/${file.name}`)

    try {
      const uploadTask = await uploadBytes(storageRef, file, metadata)
      const downloadUrl = await getDownloadURL(uploadTask.ref)
      return downloadUrl
    } catch (error) {
      return error
    }
  }
}
