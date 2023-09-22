const Events = require("../../../../models/event/EventModel");
const { checkpoints } = require("../../../../utils");
const moment = require('moment');

const homeController = {
  render: async (req, res) => {
    try { 
      if(req.user){
        if(req.user.checkpoint === 3) {
          const userData = req.user;
          const events = await Events.find({ eventDate: { $gt: moment() } });
          const eventsShowable = events.map((item) => {
            const daysRemaining = moment(item.eventDate).diff(moment(), 'days');
            return {
              title: item.title,
              date: moment(item.eventDate).date(),
              month: moment(item.eventDate).format('MMM'),
              description: `${item.description?.substring(0, 55)}${(item.description && (item.description?.length > 55)) ? "..." : ''}`,
              location: item.eventLocation,
              to_go_time: daysRemaining === 0 ? `Today, ${moment(item.eventTime).format('hh:mm a')}` : `${daysRemaining} days to go`
            }
          });


          res.render("home", {
            userData,
            events: eventsShowable
          });
        } else {
          res.redirect(checkpoints.urls[req.user.checkpoint]);
        }
      } else {
        res.render("landing-page", {})
      }
    } catch(error) { 
      console.log(error);
      res.redirect("/error.html");
    }
  }
}

module.exports = homeController;