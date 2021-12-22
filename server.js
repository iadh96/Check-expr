const express = require ("express")


const app = express ()

var products = 
[
    {id:0, shoes:'Nike', Qty:100},
    {id:1, shoes:'Adidas', Qty:90},
    {id:2, shoes:'Puma', Qty:120},
    {id:3, shoes:'Reebok', Qty:130},
    {id:4, shoes:'Levis', Qty:105},
    {id:5, shoes:'Fila', Qty:104}
]

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/Home Page.html')
})

app.get('/services', (req, res) => {
    res.sendFile(__dirname+'/public/Our services.html')
})

app.get('/products', (req, res)=>{
    res.send( {msg: "List of products", products} )
} )

app.get('/products/:id', (req, res)=>{
    const {id}=req.params
    const product = products.find(el => el.id==id)
    res.send({msg: "product found", product})
    
})


app.post('/addProduct', (req, res)=>{
    products = [...products, req.body ]
    res.send({msg:"Adding product succeed", products})
})

app.delete('/deleteProduct/:id', (req, res)=>{
    const {id}=req.params
    products = products.filter(el=>el.id!=id)
    res.send({msg:"Product deleted", products})
})

app.put('/editProduct/:id', (req, res)=>{
    const {id}=req.params
    products = products.map(el=> el.id == id?
        {...el, ...req.body} : el)
    res.send({msg:"Product edited", products})

    })

    app.get('/Contact', (req, res) => {
        res.sendFile(__dirname+'/public/Contact.html')
    })


const port = 8000

app.listen(port,()=> console.log (`server is running ${port}` )  )