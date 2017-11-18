//app.js

const http = require('http');
const fs = require('fs');


const port = 3000;
const host = 'localhost';


const server = http.createServer((req,res)=> {
	try {
		var data = fs.readFileSync('./index.html', 'utf8');
	}
	catch (err) {
		console.error(err);
	}

	if (data)
		{
			res.writeHead(200, {'Content-type': 'text/html'});
			res.end(data);
	
		} 

	});

server.listen(port,host,()=>
{
	
	console.log(`listening on ${port} on ${host}`);

});