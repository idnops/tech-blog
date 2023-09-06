import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Delimiter from '@editorjs/delimiter'
import List from '@editorjs/list'

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
        delimiter: Delimiter

      },
      data: options.data || {},
      onChange (data) {
        options.onChange(data)
      }
    })
  }

  inject('editor', options => editor(options))
}
