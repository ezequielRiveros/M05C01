const express =require('express');
const app = express();
const heroesRouter=require('./routes/heroes')
const mainRouter=require('./routes/main')

app.use('/',mainRouter)
app.use('/heroes',heroesRouter)

app.listen(3030, () => console.log('Server running in 3030 port'));
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});