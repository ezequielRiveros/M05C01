const welcome_test="Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los héroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos"

module.exports={
    'getIndex':(req,res)=> {res.send(welcome_test)},
    'getCreditos':(req, res) => {res.send('200 ok Ezequiel Riveros');}
}