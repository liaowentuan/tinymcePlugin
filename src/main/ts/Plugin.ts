declare const tinymce: any;

const setup = (editor, url) => {
  editor.ui.registry.addButton('test', {
    // text: 'test',
    icon: 'image',
    onAction: () => {
      editor.windowManager.openUrl({
        title: '添加图片',
        width: 1000,
        height: 640,
        url: 'http://localhost:8080/learning/tinymce',
        onMessage: (api, data) => {
          editor.insertContent(data.data);
          api.close()
        }
      })
    }
  });
  
};

export default () => {
  tinymce.PluginManager.add('test', setup);
};
