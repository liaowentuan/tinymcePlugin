declare const tinymce: any;

const setup = (editor, url) => {
  editor.ui.registry.addButton('test', {
    text: 'test button',
    onAction: () => {
      // tslint:disable-next-line:no-console
      editor.setContent('<p>content added from test</p>');
    }
  });
};

export default () => {
  tinymce.PluginManager.add('test', setup);
};
