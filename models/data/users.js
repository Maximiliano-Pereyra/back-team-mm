let users= [
	{
		"name": "Lucas",
		"lastName": "Rodriguez",
        "role": "Admin",
        "photo":"https://th.bing.com/th/id/OIP.EhcUo8VT6CUL7BVZckYoBwHaHa?pid=ImgDet&w=1600&h=1600&rs=1",
		"age": 25,
		"email": "lu_rodriguez@gmail.com",
		"password": "lalala029",
		"code": "noseme.ocurrenada",
		"verified": "true",
		"logged": "true"
	},
	{
		"name": "Sofia",
		"lastName": "Ledesma",
        "role": "Admin",
        "photo":"https://i.pinimg.com/originals/0a/32/c2/0a32c251d88555877b87ea2a2fda3f96.jpg",
		"age": 33,
		"email": "sofi_led@gmail.com",
		"password": "lololo89",
		"code": "yamete.kudasai",
		"verified": "true",
		"logged": "true"
	},
	{
		"name": "Michael",
		"lastName": "Smith",
        "role": "Admin",
        "photo":"https://i.pinimg.com/originals/5b/67/6c/5b676c9185d709313e0633fd985a06b8.jpg",
		"age": 38,
		"email": "mich_smi@gmail.com",
		"password": "wololooo",
		"code": "solose.quenosenada",
		"verified": "true",
		"logged": "true"
	},
	{
		"name": "Anne",
		"lastName": "Jhonson",
        "role": "Admin",
        "photo":"https://i.pinimg.com/originals/63/01/eb/6301eb4c1c4bfad32f0b46fbb72bd87a.jpg",
		"age": 23,
		"email": "anne_jho@gmail.com",
		"password": "ñamñamñam",
		"code": "bastade.codigos",
		"verified": "true",
		"logged": "true"

	},
	{
        "name": "Robert",
        "lastName": "Mayer",
		"role": "User",
		"photo":"https://i.pinimg.com/originals/63/01/eb/6301eb4c1c4bfad32f0b46fbb72bd87a.jpg",
        "age": 40,
        "email": "rob_40@yahoo.edu",
        "password": "may40",
        "code": "andin.polo",
        "verified": true,
        "logged": true
    },
    {
        "name": "Micaela",
        "lastName": "Allende",
		"role": "User",
		"photo":"https://i.pinimg.com/originals/5b/67/6c/5b676c9185d709313e0633fd985a06b8.jpg",
        "age": 30,
        "email": "mic_all@icloud.net",
        "password": "mic30",
        "code": "mama.lila",
        "verified": true,
        "logged": true
    },
    {
        "name": "Bradley",
        "lastName": "Henderson",
		"role":"User",
		"photo":"https://i.pinimg.com/originals/0a/32/c2/0a32c251d88555877b87ea2a2fda3f96.jpg",
        "age": 25,
        "email": "brad_hend@aol.edu",
        "password": "brad25",
        "code": "vestibulum.brad",
        "verified": true,
        "logged": true
    },
    {
        "name": "Mary",
        "lastName": "Cooper",
		"role": "User",
		"photo":"https://th.bing.com/th/id/OIP.EhcUo8VT6CUL7BVZckYoBwHaHa?pid=ImgDet&w=1600&h=1600&rs=1",
        "age": 29,
        "email": "mary_coop@hotmail.edu",
        "password": "mary29",
        "code": "awita.deuwu",
        "verified": true,
        "logged": true
    }

	}

]

require('dotenv').config()
require('../../config/database/database')
const User=require('../User')

users.forEach(elemento=> {
    User.create({
        name: elemento.name,
        lastName: elemento.lastName,
        role: elemento.role,
        photo: elemento.photo,
        age: elemento.age,
        email: elemento.email,
        password: elemento.password,
        code: elemento.code,
        verified: elemento.verified,
        logged: elemento.logged
    })
})


