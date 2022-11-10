let cities = [
	{
        "name": "Cairo",
        "continent": "Africa",
        "photo": "https://p4.wallpaperbetter.com/wallpaper/956/765/235/architecture-buildings-cairo-egypt-wallpaper-preview.jpg",
        "population": "21000000",
        "userId": "636d4e81a0851f9efdf8eff4"
	},
	{
        "name": "Athens",
        "continent": "Europe",
        "photo": "https://a.cdn-hotels.com/gdcs/production88/d756/3984cc60-f585-11e8-b8fa-0242ac11000d.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        "population": "6000000",
        "userId": "636d4e81a0851f9efdf8eff5"
	},
	{
        "name": "Paris",
        "continent": "Europe",
        "photo": "https://media.traveler.es/photos/61377a97fd8ea62e2db3250b/master/w_1600,c_limit/98404.jpg",
        "population": "2000000",
        "userId": "636d4e81a0851f9efdf8eff2"
	},
	{
        "name": "Hokkaido",
        "continent": "Asia",
        "photo": "https://s3.voyapon.com/wp-content/uploads/sites/3/2021/09/15174714/hokkaido-jozankei-2.jpeg",
        "population": "5000000",
        "userId": "636d4e81a0851f9efdf8eff3"
	},
    {
        "name": "Wellington",
        "continent": "Oceania",
        "photo": "https://www.planetware.com/photos-large/NZ/new-zealand-wellington-cable-car.jpg",
        "population": "200000",
        "userId": "636d4e81a0851f9efdf8eff4"
	},
    {
        "name": "Ushuaia",
        "continent": "America",
        "photo": "https://www.clarin.com/img/2018/04/05/r1uqK7HoG_1256x620__1.jpg",
        "population": "70000",
        "userId": "636d4e81a0851f9efdf8eff5"
	},
    {
        "name": "Amsterdam",
        "continent": "Europe",
        "photo": "https://a.cdn-hotels.com/gdcs/production166/d427/b65225f3-0135-4c38-bee6-ddcb1e92f7eb.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
        "population": "800000",
        "userId": "636d4e81a0851f9efdf8eff2"
	},
    {
        "name": "Praga",
        "continent": "Europe",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Prague_%286365119737%29.jpg/1920px-Prague_%286365119737%29.jpg",
        "population": "1000000",
        "userId": "636d4e81a0851f9efdf8eff3"
	},
    {
        "name": "San Miguel de Allende",
        "continent": "America",
        "photo": "https://www.roadaffair.com/wp-content/uploads/2021/08/parroquia-archangel-church-jardin-town-square-san-miguel-de-allende-mexico-shutterstock_347319533-1024x683.jpg",
        "population": "72000",
        "userId": "636d4e81a0851f9efdf8eff4"
	},
    {
        "name": "Bangkok",
        "continent": "Asia",
        "photo": "https://www.npo3.nl/uploads/media_item/media_item/436/81/5f828a8e-21e3-4d24-96a4-1c551c747fce_widescreen_large-1605104668.jpg",
        "population": "10000000",
        "userId": "636d4e81a0851f9efdf8eff5"
	},
    {
        "name": "San Sebastián",
        "continent": "Europe",
        "photo": "https://images.ecestaticos.com/gfSlHCl69zMr-2rMpNFcSHyckTI=/507x92:2121x1302/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F48d%2Fc6f%2F656%2F48dc6f656f179809f8b8bf06af15b9eb.jpg",
        "population": "180000",
        "userId": "636d4e81a0851f9efdf8eff2"
	},
    {
        "name": "Chauen",
        "continent": "Africa",
        "photo": "https://viajerosocultos.com/wp-content/uploads/2021/09/the-famous-blue-city-of-chefchaouen-top-view.jpg",
        "population": "42000",
        "userId": "636d4e81a0851f9efdf8eff3"
	}
]

require('dotenv').config()
require('../../config/database/database')
const City = require('../City')

cities.forEach(element=> {
    City.create({
        name: element.name,
        continent: element.continent,
        photo: element.photo,
        population: element.population,
        userId: element.userId
    })
})