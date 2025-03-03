const argv=process.argv;
for (let x in argv){
	console.log(argv[x]+": "+argv[x].length);
}
