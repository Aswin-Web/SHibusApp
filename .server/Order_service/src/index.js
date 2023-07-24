const app=require('./app')
const PORT=process.env.PORT || 5001

const http =require('http')

const server=http.createServer(app)


server.listen(PORT,()=> console.log(`Service Started @ PORT:${PORT}`))