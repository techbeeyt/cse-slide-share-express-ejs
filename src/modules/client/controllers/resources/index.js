const { Error } = require("mongoose");
const drive = require("../../../../utils/drive");

const resourceController = {
    render: async (req, res) => {
      let id = req.query.folder_id;
      if(!id) {
        id = "root";
      }
      const q = `'${id}' in parents and trashed = false`;
      const listParams = {
        q: q,
        fields: 'nextPageToken, files(id, name, mimeType)'
      }
      const response = await drive.files.list(listParams);
      console.log(response.data);
      const userData = req.user;


      return res.render("resources", {
        userData,
        resourceData: response.data.files,
        nextPageToken: response.data.nextPageToken
      });
    },
    openFile: async (req, res) => {
      let id = req.query.file_id;
      if(!id) {
        return res.send("Wrong URL")
      }
      const response = await drive.files.get({ fileId: id, fields: "id, name, mimeType, webViewLink"})
      const userData = req.user;

      console.log(response.data)
      return res.render("resources/file", {
        userData,
        fileData: response.data,
      });
    }
}

module.exports = resourceController;