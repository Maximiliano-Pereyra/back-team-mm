let itineraries = [
  {
    cityId: "636e5f227aecf78aa64dd7d9",
    name: "Cairo",
    photo: [
      "https://www.egypttoursportal.com/images/2020/07/Outdoor-Activities-to-Do-from-Cairo-Egypt-Tours-Portal.jpg",
      "https://www.likealocalguide.com/media/cache/84/d7/84d76a1d59c58cbe5b61b3597d7b1ec1.jpg",
      "https://tourscanner.com/blog/wp-content/uploads/2021/08/Cairo-Citadel-Egypt.jpg",
    ],
    description: "Tour to Pyramids & The Egyptian Museum",
    price: "100",
    duration: "8",
    userId: "636d8bcade38ce0e1619410e",
  },
  {
    cityId: "636e5f227aecf78aa64dd7d9",
    name: "Cairo",
    photo: [
      "https://media.staticontent.com/media/pictures/2533eccd-3e50-4214-bc3c-5a5c185587e7/950x696",
      "https://img.remediosdigitales.com/3fa584/iglesiacolgante/1366_2000.jpg",
      "https://spain.egypttoursportal.com/wp-content/uploads/2020/07/La-Iglesia-Colgante-Egypt-Tours-Portal.jpg",
    ],
    description: "Half day visit to the Churches of Old Cairo",
    price: "70",
    duration: "5",
    userId: "636d8bcade38ce0e1619410e",
  },
  {
    cityId: "636e5f227aecf78aa64dd7da",
    name: "Athens",
    photo: [
      "https://cdn.getyourguide.com/img/location/276c1f4578c2ee5e.jpeg/99.jpg",
      "https://www.planetware.com/wpimages/2019/09/greece-athens-visiting-acropolis-odeon-of-herodes.jpg",
      "https://cdn.projectexpedition.com/photos/33761touractivity_dcp5281copy1280x850800x531_sized.jpg",
    ],
    description: "Athens City Tour, Acropolis & Acropolis Museum Tour",
    price: "67",
    duration: "5",
    userId: "636d8bcade38ce0e1619410f",
  },
  {
    cityId: "636e5f227aecf78aa64dd7da",
    name: "Athens",
    photo: [
      "https://cdn2.civitatis.com/grecia/atenas/galeria/paisaje-egina.jpg",
      "https://cdn2.civitatis.com/images/reviews/activities/12655215/activity_12655215_attach_0.jpg",
      "https://cdn2.civitatis.com/grecia/atenas/galeria/egina.jpg",
    ],
    description: "Cruise to Hydra, Poros and Aegina",
    price: "110",
    duration: "12",
    userId: "636d8bcade38ce0e1619410f",
  },
  {
    cityId: "636e5f227aecf78aa64dd7db",
    name: "Paris",
    photo: [
      "https://cdn-imgix.headout.com/blog-banner/image/a62daa4ad526d5a0ed2200c46b3af043-il-vagabiondo-FlkxnZdebMk-unsplash%20(1).jpg?auto=compress&fm=pjpg&q=10",
      "https://cdn.destguides.com/files/store/itinerarystop/3849/background_image/jpeg_medium_202112291737-ea0ec487e3e961e51d1249a25a8e1ab6.jpeg",
      "https://dreamsinparis.com/wp-content/uploads/2021/05/eiffel-tower-view-from-Passerelle-Debilly-1024x768.jpg",
    ],
    description:
      "Eiffel Tower Tour With Small Group, With Summit Access by Elevator ",
    price: "45",
    duration: "2",
    userId: "636d8bcade38ce0e1619410c",
  },
  {
    cityId: "636e5f227aecf78aa64dd7db",
    name: "Paris",
    photo: [
      "https://media.traveler.es/photos/61375ed232d932c80fcb8076/4:3/w_1396,h_1047,c_limit/212470.jpg",
      "https://static.dw.com/image/57055352_303.jpg",
      "https://cdn2.civitatis.com/francia/paris/galeria/piramide-louvre.jpg",
    ],
    description: "Louvre Museum with priority access",
    price: "75",
    duration: "2",
    userId: "636d8bcade38ce0e1619410c",
  },
  {
    cityId: "636e5f227aecf78aa64dd7de",
    name: "Ushuaia",
    photo: [
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/78/ea.jpg",
      "https://www.interpatagonia.com/paseos/navegacion-isla-lobos-pinguinos/navegacion-ushuaia-beagle-3.jpg",
      "https://i.pinimg.com/736x/75/0b/d8/750bd817058c870fcba760edfb092584.jpg",
    ],
    description:
      "Catamaran cruise through the Beagle Channel and Isla de Lobos",
    price: "55",
    duration: "4",
    userId: "636d8bcade38ce0e1619410f",
  },
  {
    cityId: "636e5f227aecf78aa64dd7de",
    name: "Ushuaia",
    photo: [
      "https://i0.wp.com/patagoniaandina.com/wp-content/uploads/2020/05/vinciguerra.jpg?resize=640%2C480&ssl=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/97/ca/9f/laguna-de-los-tempanos.jpg?w=1200&h=1200&s=1",
      "https://companiadeguias.com.ar/wp-content/uploads/2022/05/Vinciguerra-Glacier-Trekking-Compania-de-guias-Ushuaia-_7_comprimida.png",
    ],
    description: "Vinciguerr Glacier Trekking",
    price: "90",
    duration: "7",
    userId: "636d8bcade38ce0e1619410f",
  },
  {
    cityId: "636e5f227aecf78aa64dd7e0",
    name: "Praga",
    photo: [
      "https://tourscanner.com/blog/wp-content/uploads/2021/05/fun-things-to-do-in-Prague.jpg",
      "https://www.prague.fm/wp-content/uploads/dreamstime_xxl_58996671-780x470.jpg",
      "https://7daysabroad.com/wp-content/uploads/2020/01/Prague-Czech-Republic-1024x683.jpg",
    ],
    description: "City Walking Tour, Boat Cruise, and Typical Czech Lunch",
    price: "58",
    duration: "6",
    userId: "636d8bcade38ce0e1619410d",
  },
  {
    cityId: "636e5f227aecf78aa64dd7e0",
    name: "Praga",
    photo: [
      "https://static.neweuropetours.eu/wp-content/uploads/2018/09/thio-prg-terezin-23-1600x900.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/6f/68/86.jpg",
      "https://cdn.tourcms.com/a/11676/1551/1/default.jpg",
    ],
    description: "Excursion to the Terezín Concentration Camp",
    price: "50",
    duration: "6",
    userId: "636d8bcade38ce0e1619410d",
  },
  {
    cityId: "636e5f227aecf78aa64dd7e1",
    name: "San Miguel de Allende",
    photo: [
      "https://mediaim.expedia.com/localexpert/3474693/f9f5a4c5-8ec7-4d18-9003-2eb4f462e479.jpg?impolicy=resizecrop&rw=1005&rh=565",
      "https://thetravelogist.com/wp-content/uploads/2021/04/san-miguel-1.jpg",
      "https://journeyswithstephen.com/wp-content/uploads/2017/01/Kismet-Street-Chapel-of-Jimmy-Ray-Mexico.jpg",
    ],
    description:
      "Take a walk along the cobblestone streets, admiring the stunning architecture as you bounce between museums, cafes, and galleries",
    price: "30",
    duration: "4",
    userId: "636d8bcade38ce0e1619410e",
  },
  {
    cityId: "636e5f227aecf78aa64dd7e1",
    name: "San Miguel de Allende",
    photo: [
      "https://www.yaconic.com/wp-content/uploads/2021/09/desfile-dia-muertos-cdmx-1024x538.jpg",
      "https://cdn2.civitatis.com/mexico/san-miguel-de-allende/galeria/dead-mexico.jpg",
      "https://cdn2.civitatis.com/mexico/san-miguel-de-allende/galeria/altar-dia-muertos.jpg",
    ],
    description: "Day of the Dead Tour",
    price: "15",
    duration: "4",
    userId: "636d8bcade38ce0e1619410e",
  },
];

require("dotenv").config();
require("../../config/database/database");
const Itinerary = require("../Itinerary");

itineraries.forEach((element) => {
  Itinerary.create({
    cityId: element.cityId,
    name: element.name,
    photo: element.photo,
    description: element.description,
    price: element.price,
    duration: element.duration,
    userId: element.userId,
  });
});
