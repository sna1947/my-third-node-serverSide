const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000; // or process.evn.PORI || 3000; 
 
app.get('/', (req, res) => {
  res.send('Hello From my third ever node')
});

const users = [
    {id:0, name:'lana',email:'lana@gmail.com',phone:986514321},
    {id:1, name:'mana',email:'mana@gmail.com',phone:986542321},
    {id:2, name:'yana',email:'yana@gmail.com',phone:986543521},
    {id:3, name:'gana',email:'gana@gmail.com',phone:986543281},
    {id:4, name:'pana',email:'pana@gmail.com',phone:986543218}
]

//** normally users send to ui ============================= */
app.get('/users',(req,res)=>{
    res.send(users)
});


//**dynamic paramater========== */
app.get('/users/:id', (req,res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
});


// *   arry data ==============================*/
app.get('/fruits',(req,res)=>{
    res.send(['amm','jam','kathal'])
});


//**query parameter "?" =============================*/
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult)
}
    
else{
        res.send(users)
    }

});

//** recive data from ui or user and send data to ui */
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send('inside post')
    res.send(JSON.stringify(newUser));
    // res.json(newUser)
})

 
app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
  console.log('listing to port', port)
})
