const express = require('express');
const exphbs = require('express-handlebars');


const app = express();

// tell express to use handlebars as template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res)=>{
  res.redirect('/home')
  });
app.get('/home', (req, res)=>{
  res.render('home', {
    name: 'Juan'
  });
});
app.get('/product/:id', (req, res)=>{
  res.render('prodct')
});
app.get('/product/create', (req, res)=>{
  res.render('product_create')
});

//list of brands
app.get('/brands', (req, res)=>{
  res.render('brands')
});
// create brand
app.get('/brand/create', (req, res)=>{
  res.render('brand_create')
});

// list of categories
app.get('/categories', (req, res)=>{
  res.render('categories')
});

// create category
app.get('/category/create', (req, res)=>{
  res.render('category_create')
});


// start server
app.listen(4000, () => {
  console.log('server started at port 4000');
});

