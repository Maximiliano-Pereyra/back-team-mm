let showes =[
    {
     "hotelId": "636d9149ebb2055a7828eb71",
     "name": "Private cinema for hotel tenants",
     "description": "The ideal plan to relax",
     "photo": "https://cf.bstatic.com/images/hotel/840x460/379/379164191.jpg",
     "price": 40,
     "date":  Date("15/12/2022"),
     "userId": "636d8bcade38ce0e1619410e"
     },
     {
     "hotelId": "636d9149ebb2055a7828eb71",
     "name": "Music Show",
     "description": "Music for all tastes",
     "photo": "http://www.auccaravan.com/wp-content/uploads/2016/11/DSC_2280-e1479731110649.jpg",
     "price": 20,
     "date":  Date("18/12/2022"),
     "userId": "636d8bcade38ce0e1619410e"
     },
     {
     "hotelId": "636d9149ebb2055a7828eb72",
     "name": "Music Show",
     "description": "An alternative plan, to get out of the routine",
     "photo": "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_750,q_60,w_1605,x_2291,y_817/v1/clients/athens-redesign/music_90_40458acd-8908-4e55-92b4-5695004d8970.jpg",
     "price": 35,
     "date":  Date("20/11/2022"),
     "userId": "636d8bcade38ce0e1619410f"
     },
     {
     "hotelId": "636d9149ebb2055a7828eb72",
     "name": "Dance Show Night",
     "description": "Very good plan for both novice and experienced dancers",
     "photo": "https://www.letsbooktravel.eu/wp-content/uploads/2019/03/IMG_2436.jpg",
     "price": 15,
     "date":  Date("27/11/2022"),
     "userId": "636d8bcade38ce0e1619410f"
     },
     {
     "hotelId": "636d914aebb2055a7828eb73",
     "name": "Theater show, children's special",
     "description": "A very fun plan for children",
     "photo": "https://www.novotel-paris-toureiffel.com/wp-content/uploads/sites/6/2016/05/497A2953_M.jpg",
     "price": 22,
     "date":  Date("13/11/2022"),
     "userId": "636d8bcade38ce0e1619410c"
     },
     {
     "hotelId": "636d914aebb2055a7828eb73",
     "name": "Classical music concert",
     "description": "Concert with the best interpretations of classical music",
     "photo": "https://media.timeout.com/images/101725965/750/422/image.jpg",
     "price": 28,
     "date":  Date("13/11/2022"),
     "userId": "636d8bcade38ce0e1619410c"
     },
     {
     "hotelId": "636d9149ebb2055a7828eb70",
     "name": "Interview with the music group One Direction",
     "description": "The best plan with the best group today",
     "photo": "https://thumbnailer.digitalnz.org/?src=https%3A%2F%2Fndhadeliver.natlib.govt.nz%2FNLNZStreamGate%2Fget%3Fdps_pid%3DIE16558110&cache_version=1&format=webp",
     "price": 60,
     "date":  Date("23/11/2022"),
     "userId": "636d8bcade38ce0e1619410d"
     },
     {
     "hotelId": "636d9149ebb2055a7828eb70",
     "name": "Wellington Horse Shows",
     "description": "Un plan ideal para los amantes de los caballos, muy buena presentación",
     "photo": "https://jumpernewscom.files.wordpress.com/2021/07/2021.07.16.99.99-events-three-weeks-of-fei-action-during-esp-fall-series.jpg?w=1024",
     "price": 37,
     "date": Date("12/11/2022"),
     "userId": "636d8bcade38ce0e1619410d"
     },
     {
     "hotelId": "636d9149ebb2055a7828eb6f",
     "name": "Christmas show",
     "description": "A show for the whole family, based on Christmas",
     "photo": "https://www.radiofueguina.com/wp-content/uploads/2020/12/ushuaia-navidad.jpg",
     "price": 5,
     "date": Date("25/12/2022"),
     "userId": "636d8bcade38ce0e1619410e"
     },
     {
     "hotelId": "636d9149ebb2055a7828eb6f",
     "name": "Folklore show",
     "description": "A show that shows the customs of the place and its traditions. It has very good decoration",
     "photo": "https://fmfuego.com.ar/galeria/fotos/2021/11/23/o_1637662748.jpeg",
     "price": 17,
     "date": Date("30/11/2022"),
     "userId": "636d8bcade38ce0e1619410e"
     },
     {
     "hotelId": "636d914aebb2055a7828eb77",
     "name": "Contemporary dance show",
     "description": "Interesting proposal with a guest dance group",
     "photo": "https://www.wearefullcircle.co.uk/app/uploads/2017/03/epson.jpg",
     "price": 25,
     "date": Date("14/11/2022"),
     "userId": "636d8bcade38ce0e1619410f"
     },
     {
     "hotelId": "636d914aebb2055a7828eb77",
     "name": "Dance Night",
     "description": "It is a plan to remember the times when you danced every weekend",
     "photo": "https://cdn0.bodas.com.mx/vendor/7769/3_2/960/jpg/10524728-798818750152372-1669477131087217439-n_5_127769.jpeg",
     "price": 27,
     "date": Date("03/12/2022"),
     "userId": "636d8bcade38ce0e1619410f"
     }
]

require('dotenv').config()
require('../../config/database/database.js')
const Show = require('../Show')

showes.forEach(elemento=> {
    Show.create({
        hotelId: elemento.hotelId,
        name: elemento.name,
        description: elemento.description,
        photo: elemento.photo,
        price: elemento.price,
        date: elemento.date,
        userId: elemento.userId
    })
})




