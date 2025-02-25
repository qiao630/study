const http=require("http");
const https=require("https");
const getOption={
	hostname: 'www.baidu.com',
	port: 443,
	path: "/",
	method: 'GET',
}

let req=https.request(getOption, res=>{
	data="";
	res.on('data', chunk=>{data+=chunk;});
	res.on('end', ()=>{
		console.log(data);
	})
})
req.on('error', err=>{console.log("ERROR when get web: "+ err.message)});
req.end();
