var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Campground = require('./models/campground');

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// Campground.create({
//   name: 'Granite Hill', 
//   image: 'https://cdn.vox-cdn.com/thumbor/-JoPdcgAuLTUsWiDZ62CX4wb33k=/0x0:5225x3479/1200x800/filters:focal(2195x1322:3031x2158)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg',
//   description: 'This is a huge granite hill, no bathroom'
// }, function(err, campground){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Newly created campground: ");
//         console.log(campground);
//     }
// });

app.get('/', function(req, res){
    res.render("landing");
});

// INDEX
app.get('/campgrounds', function(req, res){
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        } else {
            res.render('index', {campgrounds: campgrounds});
        }
    });
});

// NEW
app.get('/campgrounds/new', function(req, res){
    res.render('new.ejs');
});

// CREATE
app.post('/campgrounds', function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCamp = {name: name, image: image, description: desc};
    Campground.create(newCamp, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect('/campgrounds');
        }
    });
});

// SHOW 
app.get('/campgrounds/:id', function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err) {
            console.log(err);
        } else {
            res.render('show', {campground: foundCampground});
        }
    });
    
});

app.listen(3000, function(){
    console.log("Server started");
})