/*
 * @Author: lyttonlee lzr3278@163.com
 * @Date: 2022-12-30 09:47:50
 * @LastEditors: lyttonlee lzr3278@163.com
 * @LastEditTime: 2022-12-30 11:44:40
 * @FilePath: \westone-editor\packages\sdk\src\state\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Schema } from 'prosemirror-model';
import { schema } from 'prosemirror-schema-basic';
import { addListNodes } from 'prosemirror-schema-list';

const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, 'paragraph block*', 'block'),
  marks: schema.spec.marks,
});

export { mySchema };
