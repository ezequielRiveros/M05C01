const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync(__dirname + '/../../data/heroes.json', 'utf-8'));
const mensaje_error="no tenemos en nuestra base ningun heroe ni heroina con ese id"

module.exports={
    'getHeroes':(req,res) => { res.send(heroes); },
    'getHeroeById': (req,res) => {
        let heroe = heroes.find((value,index,obj)=>{let hero=heroes[index];return hero.id == req.params.id});
        if(heroe !== undefined){
            mensaje=`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`
            res.send(mensaje)
        }else{
            res.send(mensaje_error)
        }},
    'getReseniaById':   (req,res) => {
        // Acá lo primero será encontrar al héroe que corresponda
        let heroe = heroes.find((value,index,obj)=>{let hero=heroes[index];return hero.id == req.params.id});
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
            res.send(mensaje_error)
        }
    }
}

