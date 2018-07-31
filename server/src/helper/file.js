const fs = require('fs')


exports.remove = (fileName) => {
	const filePath = `./public/images/${fileName}`
	fs.stat(filePath, function (err, stats) {
	  if (err) return console.error(`In reading File: ${fileName} --Err:` ,err)

		fs.unlink(filePath, function(err){
	    if(err) return console.log(err)
	    console.log('file deleted successfully')
	  })
	})
}
