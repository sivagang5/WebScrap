const express = require('express')
const cheerio = require('cheerio')
const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient

const app = express()
const port = 5000
app.use(express.json())
const dburl = 'mongodb+srv://dbUser:po12po12@cluster0.jouan.mongodb.net/<dbname>?retryWrites=true&w=majority'

app.post ('/usercreate', (req,res) => {
    
    const client = mongoClient.connect(dburl)
    res.send(req.body)
    // const db = client.db('webscrap1')
    // const user = await db.collection("users").insertOne(req.body)
    // client.close()
    // res.json({
    //     message: 'Record Created'
    // })
})

app.listen(port, () => {
    console.log (`Server running on port: ${port}`)
})



// let url = 'https://www.flipkart.com/search?q=samsung+mobiles'
// request (url, (error, response, html) => {
//     if (!error && response.statusCode==200) {
//         const $ = cheerio.load(html)

        // const mobiles = $('._3pLy-c row')
        // console.log(mobiles.text())

        // $('._4rR01T').each((i,el)=>{
        //     const title = $(el).text()
        //     console.log(title)
        // })
        // $('._3LWZlK').each((i,el)=>{
        //     const rating = $(el).text()
        //     console.log(rating)
        // })

        // $('._3I9_wc _27UcVY').each((i,el)=>{
        //     const price = $(el).text()
        //     console.log(price)
        // })
        // $('._30jeq3 _1_WHN1').each((i,el)=>{
        //     const discprice = $(el).text()
        //     console.log(discprice)
        // })
    // }
// })
