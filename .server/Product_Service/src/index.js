const app=require('./app')

require('./utils/connectDB')()

const http =require('http')


const PORT = process.env.PORT || 5002;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started @ ${PORT}`);
});

