const http = require('http')

http.createServer(async(req, res)=>{
  res.write('<h1>Hello</h1>')

  res.end()
}).listen(8080, () => {
  console.log('fdfd')
})

for