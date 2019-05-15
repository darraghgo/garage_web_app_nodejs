module.exports = {
    
    //shows path to the home page
    homePage: (req, res) => {
     

      
         
            res.render('home.ejs', {
                title:'home page',
              
            });
       
    },
    
    
    //shows path to the welcome page
        welcome: (req, res) => {
     

      
         
            res.render('welcome.ejs', {
                
                title:'welcome page',
              
            });
       
    },
    
    
            //shows path to about page
            aboutPage: (req, res) => {
        
            res.render('about.ejs', {
                title:'All About Us',
              
            });
       
    },
    
};