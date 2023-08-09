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

      const userData = req.user;


      return res.render("resources", {
        userData,
        resourceData: response.data.files,
        nextPageToken: response.data.nextPageToken
      });
    }
}

module.exports = resourceController;