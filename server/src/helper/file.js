const fs = require('fs')
const path = require('path')


const filesPath = path.resolve(process.env.WEBLITE_WAPPS_DIR, 'phlico')

const imagesPath = path.resolve(filesPath, 'images')

const getImagePath = fileName => path.resolve(imagesPath, fileName)

const remove = (fileName) => {
	const filePath = getImagePath(fileName)
	fs.stat(filePath, function (err, stats) {
	  if (err) return console.error(`In reading File: ${fileName} --Err:` ,err)

		fs.unlink(filePath, function(err){
	    if(err) return console.log(err)
	    console.log('file deleted successfully')
	  })
	})
}

module.exports = {
	filesPath,
	imagesPath,
	getImagePath,
	remove,
}
