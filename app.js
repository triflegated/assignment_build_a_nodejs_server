//app.js

const http = require('http');
const fs = require('fs');


const port = 3000;
const host = 'localhost';
const path = './public/index.html';

const server = http.createServer((req,res)=> {
	/*try {
		var data = fs.readFileSync('./index.html', 'utf8');
	}
	catch (err) {	
		console.error(err);
	}
	if (data)
		{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
	
		} 
	}
*/
	var data = fs.readFile(path, 'utf8', (err,data) =>{
		if (err) {
			throw err;
		}
		else {
			res.writeHead(200, {'Content-Type':'text/html'});
			
		

		let stripReq={};
		let stripRes={};

		stripReq.url=req.url;
		stripReq.method=req.method;
		stripReq.httpVersion=req.httpVersion;
		stripReq.headers=req.headers;

		stripRes.statusMessage=res.statusMessage;
		stripRes.statusCode=res.statusCode;
		stripRes._header=res._header;
 
 

		var strReq = JSON.stringify(stripReq, null, 2);
		var strRes = JSON.stringify(stripRes, null, 2);



		data=data.replace('{{ res }}', strRes);
	    data=data.replace('{{ req }}', strReq);
		res.end(data);

		}
	});
});


server.listen(port,host,()=>
{
	
	console.log(`listening on ${port} on ${host}`);

});