// Require de Express
const express =require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

const welcome_test="Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los héroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos"
// Ruta Raíz / ➝ Home
app.get('/', (req,res)=> {res.send(welcome_test)});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req,res) => {
	res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/:id', (req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	
	let heroe = heroes.find((value,index,obj)=>{
		let hero=heroes[index]
		return hero.id == req.params.id
	});
	let mensaje="no tenemos en nuestra base ningun heroe ni heroina con ese id"
	if(heroe !== undefined){
		mensaje=`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`
	}
	res.send(mensaje)
	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/:id/resenia/:tipo?', (req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.find((value,index,obj)=>{
		let hero=heroes[index]
		return hero.id == req.params.id
	});
	if(heroe != undefined){
		let tipo=req.params.tipo
		if(tipo === undefined || tipo !== "tipo"){
			let mensaje=""
			let palabras=heroe.resenia.split(' ')
			for(let i = 0; i<30;i++){
				mensaje+=`${palabras[i]} ` 
				
			}	
			res.send({"nombre":heroe.nombre,"descripcion":mensaje})	
		}else{
			res.send({"nombre":heroe.nombre,"descripcion":heroe.resenia})
		}
	}else{
		res.send("no tenemos en nuestra base ningun heroe ni heroina con ese id")
	}

	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error

});

// Ruta Créditos
app.get('/creditos', (req, res) => {
	res.send('200 ok Ezequiel Riveros');
})

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});