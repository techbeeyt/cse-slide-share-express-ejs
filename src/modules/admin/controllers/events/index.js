const moment = require("moment");
const Events = require("../../../../models/event/EventModel");
const { Mongoose, isValidObjectId } = require("mongoose");

const eventsController = {
  render: async (req, res) => {
    const userData = req.user;
    const events = await Events.find({ eventDate: {$gte: moment()} }).sort({ eventDate: 1})

    const eventsList = events.map((item, index) => {
      return {
        index,
        id: item._id,
        title: item.title,
        date: moment(item.eventDate).format('DD-MM-YYYY'),
        time: moment(item.eventTime).format("hh:mm A"),
        description: `${item.description?.substring(0, 55)} ${(item.description && (item.description?.length > 55)) ? "..." : ''}`
      }
    });

    console.log(eventsList);

    res.render("admin/events", {
      userData,
      events: eventsList
    });
  },
  renderCreate: (req, res) => {
    const userData = req.user;
    res.render("admin/events/create", {
      userData,
      message: undefined
    });
  },
  saveEvent: async (req, res) => {
    const eventBody = req.body;
    try {
      // console.log(eventBody);
      eventBody.eventDate = new Date(eventBody.eventDate);
      eventBody.eventTime = new Date("1970-01-01T" + eventBody.eventTime);
      const event = new Events(eventBody);
      await event.save();
      res.render("admin/events/create", {
        userData: req.user,
        success: true,
        message: "Event Created Successfully"
      });
    } catch(err) {
      let ErrorMessages = {};
      const jsonString = err.message;
      let data = jsonString.slice(24);
      data = data.split(",");
      data.forEach(item => {
        ErrorMessages[item.split(":")[0].trim()] = item.split(":")[1].trim()
      });
      console.log(ErrorMessages)
      res.render("admin/events/create", {
        userData: req.user,
        success: false,
        message: "Couldn't Create Event",
      })
    }
  },
  renderEditEvent: async (req, res) => {
    const id = req.params.id;
    try {
      if(isValidObjectId(id)) {
        const event = await Events.findById(id);
        const eventdata = {
          id: event._id,
          title: event.title,
          description: event.description,
          date: moment(event.eventDate).format("YYYY-MM-DD"),
          time: moment(event.eventTime).format("HH:MM"),
          location: event.eventLocation
        }
        if(event) {
          res.render("admin/events/edit", {
            userData: req.user,
            event: eventdata,
            message: ""
          })
        } else {
          res.send("No event with this id");
        }
      } else {
        return res.send("Not a valid ID.")
      }
    } catch(err) {
      console.log(err);
      res.send("Hi")
    }
  },
  doEditEvent: async(req, res) => {
    const id = req.params.id;
    const eventBody = req.body;
    try {
      eventBody.eventDate = new Date(eventBody.eventDate);
      eventBody.eventTime = new Date("1970-01-01T" + eventBody.eventTime);
      await Events.findByIdAndUpdate(id, eventBody);

      res.redirect("/admin/events");
    } catch(err) {
      let ErrorMessages = {};
      const jsonString = err.message;
      let data = jsonString.slice(24);
      data = data.split(",");
      data.forEach(item => {
        ErrorMessages[item.split(":")[0].trim()] = item.split(":")[1].trim()
      });
      console.log(ErrorMessages)
      res.render(`admin/events/edit/${id}`, {
        userData: req.user,
        success: false,
        message: "Couldn't Create Event",
      })
    }
  },

  deleteEvent: async(req, res) => {
    const id = req.params.id;
    try {
      await Events.findByIdAndDelete(id);
      res.redirect("/admin/events");
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = eventsController;