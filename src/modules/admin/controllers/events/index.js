const moment = require("moment");
const Events = require("../../../../models/event/EventModel");

const eventsController = {
  render: (req, res) => {
    const userData = req.user;
    res.render("admin/events", {
      userData
    });
  },
  renderCreate: (req, res) => {
    const userData = req.user;
    res.render("admin/events/create", {
      userData
    });
  },
  saveEvent: async (req, res) => {
    const eventBody = req.body;
    try {
      console.log(new Date(eventBody.eventDate) | "Hi");
      eventBody.eventDate = new Date(eventBody.eventDate);
      eventBody.eventTime = new Date("1970-01-01T" + eventBody.eventTime);
      const event = new Events(eventBody);
      await event.save();
      res.send("Success!")
    } catch(err) {
      let ErrorMessages = {};
      const jsonString = err.message;
      let data = jsonString.slice(24);
      data = data.split(",");
      data.forEach(item => {
        ErrorMessages[item.split(":")[0].trim()] = item.split(":")[1].trim()
      });

      console.log(ErrorMessages)

    }
  }
}

module.exports = eventsController;