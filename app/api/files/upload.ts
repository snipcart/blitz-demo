import { BlitzApiHandler, BlitzApiRequest, BlitzApiResponse } from "blitz"
var formidable = require("formidable")
var path = require("path")
var fs = require("fs")

const handler: BlitzApiHandler = async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  if (req.method == "POST") {
    //await runMiddleware(req, res)
    console.log(__dirname)

    const form = new formidable.IncomingForm()
    form.parse(req, function (err, fields, files) {
      const oldpath = files.filetoupload.path
      const filename = files.filetoupload.name
      const newpath = path.resolve().split(".blitz")[0] + "/public/" + files.filetoupload.name
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err
        res.write(`File "${filename}" uploaded successfully`)
        return res.end()
      })
    })
  } else {
    res.writeHead(200, { "Content-Type": "text/html" })
    res.write('<form  method="post" enctype="multipart/form-data">')
    res.write('<input type="file" name="filetoupload"><br>')
    res.write('<input type="submit">')
    res.write("</form>")
    return res.end()
  }
}
export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
