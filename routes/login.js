module.exports = {
    
    //renders the login page
    loginPage: (req, res) => {
       
          
            res.render('login.ejs', {
                title:'login page',
                
            });
       
    },
    
    //displays customers own page
    displayCustomerPage: (req,res)=>{
        
        
        console.log("login successful");
           let email = req.body.email;
        let password = req.body.password;
        
        //query from database which matches login to entry in customer table
         
        let query = "SELECT * FROM customers WHERE email = '" + email + "' and password = '"+ password +"';";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('displayCustomer.ejs', {
               
                title: 'Login'
                ,customer: result[0]
                ,message: ''
                
            });
        });
    },
            
                adminLoginPage: (req, res) => {
       

          
            res.render('adminLogin.ejs', {
                title:'login page',
                
            });
       
    },
        

    
    
};