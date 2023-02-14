const { readdirSync, lstatSync } = require("fs");
const { join } = require("path");

/**
 * Fetches the directory recursively for files
 * @param {string} path
 * @param {string[]} files
 * @returns {string[]}
 */
function readDirRecursive(path, files = []) {
	for (let file of readdirSync(path).filter((v) => v.endsWith("js"))) {
		file = join(path, file);
		lstatSync(file).isDirectory()
			? files.concat(readDirRecursive(file))
			: files.push(file);
	}
	return files;
}

module.exports = {
	readDirRecursive,
};
