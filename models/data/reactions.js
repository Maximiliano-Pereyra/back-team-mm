let reactions = [
  {
    itineraryId: "6386e9f57af2d363643c743f",
    name: "like",
    icon: "https://banner2.cleanpng.com/20180326/jhq/kisspng-social-media-facebook-thumb-signal-computer-icons-like-us-on-facebook-5ab9ae8e979127.8443168215221182866208.jpg",
    iconBack:
      "https://banner2.cleanpng.com/20180328/gkw/kisspng-facebook-like-button-facebook-like-button-computer-like-5abc3153b7d293.986498611522282835753.jpg",
    userId: ["6386e81c7af2d363643c741f"],
  },
  {
    itineraryId: "6386e9f57af2d363643c743f",
    name: "dislike",
    icon: "https://banner2.cleanpng.com/20180320/ugw/kisspng-social-media-facebook-messenger-security-hacker-bl-free-pictures-clipart-dislike-button-5ab138872a2ce1.3891960315215637831728.jpg",
    iconBack:
      "https://banner2.cleanpng.com/20180625/yeu/kisspng-computer-icons-icon-design-like-button-clip-art-dislike-5b30cc99efcb20.3568625715299247619822.jpg",
    userId: ["6386e81c7af2d363643c741f"],
  },
  {
    itineraryId: "6386e9f57af2d363643c743f",
    name: "love",
    icon: "https://banner2.cleanpng.com/20180614/it/kisspng-heart-clip-art-heart-emoji-5b2274257660e6.4972794315289846134849.jpg",
    iconBack:
      "https://banner2.cleanpng.com/20180506/hde/kisspng-line-clip-art-broken-heart-5aef79c437e969.270361771525643716229.jpg",
    userId: ["6386e81c7af2d363643c741f"],
  },
  {
    itineraryId: "6386e9f57af2d363643c743f",
    name: "surprise",
    icon: "https://banner2.cleanpng.com/20180425/tbe/kisspng-emoji-emoticon-smiley-iphone-computer-icons-be-surprised-5ae0edf90a1297.1911788015246904250413.jpg",
    iconBack:
      "https://banner2.cleanpng.com/20180802/jah/kisspng-black-white-emoticon-smiley-computer-icons-clip-smile-svg-png-icon-free-download-505342-onlin-5b62bb39c6b557.1725305215331971138139.jpg",
    userId: ["6386e81c7af2d363643c741f"],
  },
];
require("dotenv").config();
require("../../config/database/database");
const Reaction = require("../Reaction");

reactions.forEach((element) => {
  Reaction.create({
    itineraryId: element.itineraryId,
    name: element.name,
    icon: element.icon,
    iconBack: element.iconBack,
    userId: element.userId,
  });
});
