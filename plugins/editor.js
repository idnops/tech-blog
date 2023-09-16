import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Delimiter from '@editorjs/delimiter'
import List from '@editorjs/list'
import Image from '@editorjs/image'

export default (context, inject) => {
  const defaultOptions = {
    id: '',
    data: {},
    params: {},
    onChange: () => {}
  }

  const editor = (options = defaultOptions) => {
    return new EditorJS({
      ...options.params,
      holder: options.id,
      logLevel: 'ERROR',
      tools: {
        header: {
          class: Header,
          inlineToolbar: true
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          }
        },
        delimiter: Delimiter,
        image: {
          class: Image,
          inlineToolbar: true,
          config: {
            uploader: {
              async uploadByFile (file) {
                const url = await context.store.dispatch('storage/UPLOAD_FILE', { file, path: 'images' })
                return {
                  success: true,
                  file: {
                    url
                  }
                }
              }
            }
          }
        }

      },
      data: options.data || {},
      onChange (data) {
        options.onChange(data)
      }
    })
  }

  inject('editor', options => editor(options))
}
