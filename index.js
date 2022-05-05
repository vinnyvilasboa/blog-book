const http = require('http')
const fs = require('fs')
const express = require('express')
const path = require('path')
const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('notfound.html')

///////////////////SERVER SET UP WITHOUT EXPRESS////////////////////////////
// const server = http.createServer((req, res) => {
//     if(req.url === '/about')
//     res.end(aboutPage)
//     else if(req.url === '/contact')
//     res.end(contactPage)
//     else if(req.url === '/')
//     res.end(homePage)
//     else{
//         res.writeHead(404)
//         res.end(notFoundPage)
//     }
// })

// server.listen(3000)
///////////////////////////////////////////////////////////////////////////


///////////////////SERVER SET UP --WITH-- EXPRESS//////////////////////////

const app = express() //calls express function to start a new express app
app.listen(3000, () => {
    console.log("App is listening on port 3000")
})
//express takes care of the http, request and response objects behind the scenes. the call back function provided in the 2nd arg in app.listen() is executed when the servers start listening. 

///////////////////////////////////////////////////////////////////////////
////////////////////Building an API -- AKA Routing////////////////////////
app.get('/about', (req, res) => {
    res.json({
        name:'Vinny'
    })
})
///////////////////////////////////////////////////////////////////////////
/*Instead of building out a bunch of conditional statements 
we make a bunch of request handlers to make the app more modular
 and maintanable. This also replaces the http server creation*/

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname,'about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname,'contact.html'))
})