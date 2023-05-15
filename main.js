const http = require('http');
const fs = require('fs').promises

const server = http.createServer(async(req, res)=>{
  if(req.url === '/'){
    if(req.method === "GET") {
      const data = await fs.readFile('./mainhtml')
      res.end(data)
    }
  }
  if(req.url === '/'){
    if(req.method === "GET") {
      const data = await fs.readFile('./mainhtml')
      res.end(data)
    }
  }
  
}).listen(8080)


server.on('listening', ()=>{
  console.log('서버가 연결되었습니다')
})

server.on('error', (error)=>{
  console.error(error)
})