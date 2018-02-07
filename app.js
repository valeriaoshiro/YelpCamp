var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("landing");
});

app.get('/campgrounds', function(req, res){
    var campgrounds = [
        {name: 'Salmond Creek', image: 'http://www.dismalscanyon.com/campsites/images/sleeping_water_5177_900px.jpg'},
        {name: 'Granite Hill', image: 'https://cdn.vox-cdn.com/thumbor/-JoPdcgAuLTUsWiDZ62CX4wb33k=/0x0:5225x3479/1200x800/filters:focal(2195x1322:3031x2158)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg'},
        {name: "Mountain Goat's Rest", image: 'https://edallens.com/wp-content/gallery/campsites/ed-allens-campsites-dsc_0016.jpg?x83656'}
    ];
    res.render('campgrounds', {campgrounds});
});

app.listen(3000, function(){
    console.log("Server started");
})