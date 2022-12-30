/*
 * @Author: lyttonlee lzr3278@163.com
 * @Date: 2022-12-29 17:10:54
 * @LastEditors: lyttonlee lzr3278@163.com
 * @LastEditTime: 2022-12-29 17:14:56
 * @FilePath: \westone-editor\packages\editor-utils\rollup.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ts from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';

const config = defineConfig([
  {
    input: './src/main.ts',
    output: [
      {
        file: './dist/utils.esm.js',
        format: 'module',
      },
      {
        file: './dist/utils.umd.js',
        format: 'umd',
        name: 'utils',
      },
    ],
    plugins: [
      ts(),
      terser({
        compress: {
          drop_console: true,
        },
      }),
    ],
  },
  {
    input: './src/main.ts',
    plugins: [dts()],
    output: {
      format: 'esm',
      file: 'dist/utils.d.ts',
    },
  },
]);
export default config;
