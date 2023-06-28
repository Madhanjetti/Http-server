const http=require('http')
const port=5090;
const host='localhost'
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write("<h1>These server is creating using HTTP request</h1>");
    }
   
    res.end();
})
server.listen(5090);

console.log(`Https is running ${host} on ${port}`);