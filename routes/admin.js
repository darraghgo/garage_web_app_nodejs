module.exports = {

    
    adminPage:(req,res)=>{
         let query = "SELECT * FROM `customers` ORDER BY date DESC"; // query database to get all the customers, they are displayed with the oldest date at the bottom
        
        
        
       
                db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');//if error redirected to home page
            }  //if query is successful the admin page is loaded
            res.render('admin.ejs', {
                title:'Admin page',
                customers: result //the customers object is the result of the query
                
            });
        });
                   
      
    },
                //page to set the price of products
                setPrice:(req,res)=>{
                    
                  let price = req.body.price;
                   let product = req.body.product;
                
                    
                    //database query to update the price of products
         let query = "UPDATE costs set price = '"+price+"' where product = '"+product+"'"; 
        
        
        
         
                db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('setPrice.ejs', {
                title:'set price page',
                result: result
                
            });
        });
                   
      
    },
    
                //page to set the price of products
                    setPricePage:(req,res)=>{
       
        
        let query = "SELECT product FROM costs";
         
                db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('setPrice.ejs', {
                title:'Change Price',
                message: '',
                 result: result
                
              
                
            });
        });
                   
      
    },
    
            
            //allows user to delete  bookings from the customer table
            removeBooking:(req,res)=>{
                
                 let bookNo = req.params.bookNo;
         let query = "DELETE FROM customers WHERE bookNo = '"+ bookNo + "';"; 
        
        

                db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }

                    res.redirect('/admin');
        });
                   
      
    },
    
        todayDate:(req,res)=>{
         let query = "SELECT * from customers where DATE = CURDATE();"; // query database to display bookings by todays date
        
        
        
         
                db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('admin.ejs', {
                title:'Admin page',
                customers: result
                
            });
        });
                   
      
    },
    
            tomorrowDate:(req,res)=>{
         let query = "SELECT * from customers where DATE = CURDATE()+1;"; // query database to display bookings by tomorrows date
        
        
        
                db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('admin.ejs', {
                title:'Admin page',
                customers: result
                
            });
        });
                   
      
    },
    
    
    
                weekDate:(req,res)=>{
         let query = "SELECT * from customers where DATE BETWEEN  CURDATE() AND  CURDATE()+7;"; //query database to display bookings from today to the next seven days
        
        
        
         
                db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('admin.ejs', {
                title:'Admin page',
                customers: result
                
            });
        });
                   
      
    },
    

    
        //this section updates booking to add an employee to each bookings
        applyEmp: (req, res) => {
         
           let employee = req.body.employee;
            let bookNo = req.params.bookNo;
           
        
         console.log(" employee assigned : " + employee + bookNo);
          
             //query to assign mechanic to booking
        let query = "Update customers set employee ='"+ employee + "' where bookNo = '"+bookNo+"'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            
            
            res.redirect('/admin');

        });
        
          },
    
                //this section is used to assign status to the booking
        setStatus: (req, res) => {
         console.log("status assigned");//shows confirmation in the node console
           let status = req.body.status;
            let bookNo = req.params.bookNo;
           
             
        let query = "Update customers set status ='"+ status + "' where bookNo = '"+bookNo+"'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            
            
            res.redirect('/admin');

        });
        
          },
    
        
    //this section is used to send the customer dates as an oject. It can be used as a JSON object to be manipulated
    displayDate:(req,res)=>{
         let query = "SELECT date FROM `customers` ORDER BY id ASC"; // query database to get dates from database
        
        
        
  
                db.query(query, (err, dateResult) => {
            if (err) {
                res.redirect('/');
            }
            res.render('admin.ejs', {
                title:'Admin page',
                bookingDate: dateResult
                
            });
        });
                   
      
    },
    
    
/////////////////////////////////////////////////////////////
    
    
//    This is the bill page where the admin can see the costs assigned to the customers 
            billPage: (req, res) => {
        let bookNo = req.params.bookNo;
            
       //variables assigned to the values being retrieved from the database , used to display the prices in the page
        let fname = req.body.fname;
        let lname = req.body.lname;
        let booking = req.body.booking;
        let paint = req.body.paint;
        let price0 = req.body.price0;
        let price1 = req.body.price1;
        let price2 = req.body.price2;
        let price3 = req.body.price3;
        let price4 = req.body.price4;
        let price5 = req.body.price5;
        let price6 = req.body.price6;
        let price7 = req.body.price7;
        let price8 = req.body.price8;
        let price9 = req.body.price9;
        let price10 = req.body.price10;
        let price11 = req.body.price11;
        let price12 = req.body.price12;
        let price13 = req.body.price13;
        let price14 = req.body.price14;
        let price15 = req.body.price15;
        let price16 = req.body.price16;  
        let price17 = req.body.price17;
        let price18 = req.body.price18;
        let price19 = req.body.price19;
        let price20 = req.body.price20;
      
        let price21 = req.body.price21;
        let price22 = req.body.price22;
        let price23 = req.body.price23;
        let price24 = req.body.price24;
        let price25 = req.body.price25;
        let price26 = req.body.price26;
        let price27 = req.body.price27;
        let price28 = req.body.price28;
        let price29 = req.body.price29;
        let price30 = req.body.price30;
      
        let price31 = req.body.price31;
        let price32 = req.body.price32;
        let price33 = req.body.price33;
        let price34 = req.body.price34;
        let price35 = req.body.price35;
        let price36 = req.body.price36;
        let price37 = req.body.price37;
        let price38 = req.body.price38;
        let price39 = req.body.price39;
        let price40 = req.body.price40;
        let price41 = req.body.price41;
        
        let price42 = req.body.price42;
        let price43 = req.body.price43;
        let price44 = req.body.price44;
        let price45 = req.body.price45;
        let price46 = req.body.price46;
        let price47 = req.body.price47;
        let price48 = req.body.price48;
        let price49 = req.body.price49;
      
                
        let query = "SELECT * FROM `bill` WHERE bookNo = '" + bookNo + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('bill.ejs', {
                title: 'Bill'
                ,customer: result[0]
                ,message: ''
            });
        });
    },
    
};