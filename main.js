const http = require('http');
const fs = require('fs').promises

const server = http.createServer(async(req, res)=>{
  const data = await fs.readFile('./mainhtml')
}).listen(8080)


server.on('listening', ()=>{
  console.log('서버가 연결되었습니다.')
})

server.on('error', (error)=>{
  console.error(error)
})