/*
 * @Author: lyttonlee lzr3278@163.com
 * @Date: 2022-12-30 09:47:08
 * @LastEditors: lyttonlee lzr3278@163.com
 * @LastEditTime: 2022-12-30 16:40:56
 * @FilePath: \westone-editor\packages\sdk\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { exampleSetup } from 'prosemirror-example-setup';
import { DOMParser } from 'prosemirror-model';
import { mySchema } from './state';
import 'prosemirror-view/style/prosemirror.css';

const initDom = document.createElement('p');
initDom.innerText = 'start edit';

interface Option {
  dom: string | HTMLParagraphElement;
}

class Editor {
  private el: HTMLParagraphElement | null | HTMLElement;
  constructor(option: Option) {
    this.el =
      typeof option.dom === 'string'
        ? document.getElementById(option.dom)
        : option.dom;
    this.mount();
  }

  mount() {
    const view = new EditorView(this.el, {
      state: EditorState.create({
        doc: DOMParser.fromSchema(mySchema).parse(initDom),
        plugins: exampleSetup({
          schema: mySchema,
          menuBar: false,
        }),
      }),
    });
    console.log(view);
  }
}

export { Editor };
