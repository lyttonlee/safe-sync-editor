/*
 * @Author: lyttonlee lzr3278@163.com
 * @Date: 2022-12-30 09:56:46
 * @LastEditors: lyttonlee lzr3278@163.com
 * @LastEditTime: 2022-12-30 10:23:34
 * @FilePath: \westone-editor\packages\server\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Websocket from 'ws';
import http from 'http';
import { Server as StaticServer } from 'node-static';

const setupWSConnection = require('y-websocket/bin/utils').setupWSConnection;

const production = false;
const PORT = 9500;

const staticServer = new StaticServer('./', { cache: 300 });

const server = http.createServer((req, res) => {
  req
    .addListener('end', () => {
      staticServer.serve(req, res);
    })
    .resume();
});

const ws = new Websocket.Server({ server });

ws.on('connection', (conn, req) => {
  // console.log(conn.protocol);
  console.log(req.url);
  setupWSConnection(conn, req, {
    gc: true,
  });
});

server.listen(PORT, () => {
  console.log(`the server is running on port: ${PORT}`);
});
