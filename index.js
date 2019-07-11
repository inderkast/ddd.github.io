var expressValidator = require('express-validator')
var expressSearch=require('express-search');
var mixin = require("mixin");


const express = require('express')
const app = express()
const config = require('./config')
const bodyParser = require('body-parser')
const path = require('path')


expressSearch.connect(config);

// const START_NUMBER = 1000
// const MAX_DIFF = 10
// const MIN_INTERVAL = 4
// const MAX_INTERVAL = 7
// let random = START_NUMBER

// setInterval(() => random += Math.floor(Math.random() * MAX_DIFF), Math.floor(MIN_INTERVAL + Math.random() * (MAX_INTERVAL - MIN_INTERVAL)))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, '/public')))


app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))

app.get('/searching', function(req, res) {
    res.render('searching')
    })
    app.get('/congratulations', function(req, res) {
        res.render('congratulations')
        })

        app.get('/questionDatabase', function(req, res) {
            res.render('questionDatabase')
            })
            app.get('/startsurvey', function(req, res) {
                res.render('startsurvey')
                })
                app.get('/sendAnswers', function(req, res) {
                    res.render('sendAnswers')
                    })
                    app.get('/mobileSent', function(req, res) {
                        res.render('mobileSent')
                        })
                        app.get('/sendAnsw', function(req, res) {
                            res.render('sendAnsw')
                            })
                            app.get('/marktQst', function(req, res) {
                                res.render('marktQst')
                                })
                                app.get('/thirdSent', function(req, res) {
                                    res.render('thirdSent')
                                    })
                                    app.get('/insuranceQ', function(req, res) {
                                        res.render('insuranceQ')
                                        })
                                        app.get('/sending', function(req, res) {
                                            res.render('sending')
                                            })
                                            app.get('/bestTV', function(req, res) {
                                                res.render('bestTV')
                                                })
                                            app.get('/count', function(req, res) {
                                                res.render('count')
                                                })
                                                app.get('/createAccount', function(req, res) {
                                                    res.render('createAccount')
                                                    })
                                                    app.get('/funds', function(req, res) {
                                                        res.render('funds')
                                                        })
                                                        app.get('/sucsess', function(req, res) {
                                                            res.render('sucsess')
                                                            })
                                                            app.get('/payment', function(req, res) {
                                                                res.render('payment')
                                                                })
                                                                app.get('/bestMobNet', function(req, res) {
                                                                    res.render('bestMobNet')
                                                                    })
                                                                    app.get('/bestBank', function(req, res) {
                                                                        res.render('bestBank')
                                                                        })
                                                                        app.get('/Sent', function(req, res) {
                                                                            res.render('Sent')
                                                                            })
                                                                            app.get('/offer', function(req, res) {
                                                                                res.render('offer')
                                                                                })
                                                                                app.get('/server', function(req, res) {
                                                                                    res.render('server')
                                                                                    })
                                                                                    app.get('/error', function(req, res) {
                                                                                        res.render('error')
                                                                                        })
                                                                                    
                                                                                            
                                                                                        


app.engine('ejs', require('ejs-locals'))




app.listen(config.PORT, function(){
    console.log(`Server Started on Port ${config.PORT}!`)
});