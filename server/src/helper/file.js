const fs = require('fs')

exports.remove = (filename) => {
	const filePath = `./public/images/${filename}`
	// remove photo
	fs.stat(filePath, function (err, stats) {
	  if (err) console.error(`In reading File: ${filename} --Err:` ,err)
	  fs.unlink(filePath, function(err){
	    if(err) return console.log(err)
	    console.log('file deleted successfully')
	  })
	})
}