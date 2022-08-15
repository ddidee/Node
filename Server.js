var http = require('http')

function userRequest() {
    console.log(`This user made a request ${request.url}`);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('LAWYER KUNLE');
    response.end()


    
}

http.createServer(userRequest).listen(5000)
console.log('YOUR SERVER IS CURRENTLY ACTIVE');