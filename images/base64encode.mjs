import { readFile } from 'fs';

const filename = process.argv[2];
if (filename === undefined) throw Error('No filename was given as argument');

readFile(filename, (err, data) => {
	if (err) throw err;
	const encodedData = data.toString('base64');
	console.log(encodedData);
});
