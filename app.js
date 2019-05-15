const express = require('express');//framework which simplifies the creation of a server
var session = require('express-session'); //put before app.get
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser'); //handles http requests for express
const mysql = require('mysql');
const path = require('path');
const app = express();



//set the port for the server to listen out for
const port = 5000;

//app will use session to prevent unauthorised access
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));



 const {displayCustomerPage,loginPage,adminLoginPage} = require('./routes/login');
 const {homePage,welcome,aboutPage} = require('./routes/home');
const {bookingPage,newBooking,editBookingPage,editBooking} = require('./routes/booking');
const {adminPage,applyEmp,setStatus,billPage,removeBooking,todayDate,tomorrowDate,weekDate,setPrice,setPricePage} = require('./routes/admin');



// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'garage',
    dateStrings: 'date' //Changes dates to strings in yyyy-mm--dd format
});

//two different database connections because one is used for the datepicker and it was easier to create two seperate connections as there is a limit to how many querys can be sent at once from the same location
const datab = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'garage',
    dateStrings: 'date' //Changes dates to strings in yyyy-mm--dd format
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app
app.get('/', welcome);
app.get('/about', aboutPage);
app.get('/home', homePage);
app.get('/login', loginPage);
app.get('/booking', bookingPage);
app.get('/bill/:bookNo', billPage);
app.get('/login', displayCustomerPage);
app.get('/editBooking/:bookNo',editBookingPage);
app.get('/remove/:bookNo',removeBooking);

app.get('/today',todayDate);
app.get('/tomorrow',tomorrowDate);
app.get('/week',weekDate);

app.get('/setPrice',setPricePage);
app.post('/setPrice',setPrice);

app.post('/login', displayCustomerPage);


app.post('/editBooking/:id',editBooking);
app.post('/remove/:bookNo',removeBooking);
app.post('/applyEmp/:bookNo', applyEmp);
app.post('/setStatus/:bookNo', setStatus);
app.post('/makeBooking',newBooking);


//this is where the authorisation for session happens
app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username) { //if login is correct the following occurs
		datab.query('SELECT * FROM admin WHERE username = ?', [username], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
                app.get('/admin',adminPage);
				response.redirect('/admin');
                
			} else { //if login is incorrect
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else { //if nothing is entered
		response.send('Please enter Username and Password!');
		response.end();
	}
});
//admin login kept on seperate path for security reasons
app.get('/adminLogin', function(request, response) {
	response.sendFile(path.join(__dirname + '/views/adminLogin.html'));
});

//request for dates for datepicker
app.get('/dates', function(request, response){
    console.log("dates requested")

      
    db.query('SELECT date FROM customers WHERE date IN (SELECT date FROM customers GROUP BY date HAVING COUNT(*) > 2) or booking = "major repair";', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);

            
        }
    });
      
});






// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
