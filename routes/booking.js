module.exports = {
    
    //this renders the booking pace
    bookingPage: (req, res) => {
       

         
            res.render('booking.ejs', {
                title:'booking page',
                
            });
       
    },
        //this is to create a booking in the customer table
        newBooking: (req, res) => {
   
            
        let message = '';
        let fname = req.body.fname;
        let lname = req.body.lname;
        let  email= req.body.email;
        let  password= req.body.password;
        let phone = req.body.phone;
        let  vechile= req.body.vechile;
        let  model= req.body.model;
        let  licence= req.body.licence;
        let  engine= req.body.engine;
        let  comments= req.body.comments;

        let booking = req.body.booking;
        let date = req.body.pickdate;
           console.log("new Booking recieved for " + date);


        let bookingQuery = "insert into customers (fname,lname,email,password,phone,vechile,model,licence,engine,booking,date,comments) values ('"+ fname +"','"+lname +"','"+email+"','"+password+"','"+phone+"','"+vechile+"','"+model+"','"+licence+"','"+engine+"','"+booking+"','"+date+"','"+comments+"')";

        db.query(bookingQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
 
        });
    },
    
    //this the webpage to allow the admin to select a customer to assign costs
        editBookingPage: (req, res) => {
        let bookNo = req.params.bookNo;
        let query = "SELECT * FROM costs,`customers` WHERE bookNo = '" + bookNo + "' order by code";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-customer.ejs', {
                title: 'five  customer'
                ,customer: result
                ,message: ''
            });
        });
    },
    
    
    //this is where the assigns are inserted into the bill table
    editBooking: (req, res) => {
        
  
        let bookNo = req.body.bookNo;
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
       
      
        
        
        //query to insert costs into bill table in the database
                let query = "insert into bill (bookNo,labour ,oil_change , wiper_change ,basic_service, annual_service , repair , major_repair , change_tyres , engine_parts ,fuel_injector , fuel_cap ,body_panel , bonnett , window , bumper , grill ,ignition_lead , spark_plugs ,alternator ,heater ,rad ,water_pump ,rad_hose,fuel_pump  ,oil ,spray_paint  ,red_paint , silver_paint  ,black_paint ,white_paint ,air_pump ,rotate_tyres ,rethread ,head_lamps ,oil_filter ,fog_lamp_bulb , rearlight_bulb , reg_light_bulb ,clutch ,exhaust_pipe ,wheel_bearings  ,hub_caps , wiper_blades,air_filter ,timing_belt ,batteries,brake_disc, brake_pad ,drive_belt ,total) VALUES('"+bookNo+"','"+price0+"','"+price1+"','"+price2+"','"+price3+"','"+price4+"','"+price5+"','"+price6+"', '"+price7+"', '"+price8+"','"+price9+"','"+price10+"','"+price11+"','"+price12+"','"+price13+"','"+price14+"', '"+price15+"', '"+price16+"','"+price17+"','"+price18+"','"+price19+"','"+price20+"','"+price21+"', '"+price22+"', '"+price23+"','"+price24+"','"+price25+"','"+price26+"','"+price27+"','"+price28+"','"+price29+"', '"+price30+"', '"+price31+"','"+price32+"','"+price33+"','"+price34+"','"+price35+"','"+price36+"', '"+price37+"','"+price38+"','"+price39+"','"+price40+"','"+price41+"','"+price42+"','"+price43+"','"+price44+"','"+price45+"','"+price46+"','"+price47+"','"+price48+"', labour+oil_change + wiper_change +basic_service+ annual_service + repair + major_repair+ change_tyres + engine_parts +fuel_injector + fuel_cap +body_panel + bonnett + window + bumper + grill +ignition_lead + spark_plugs +alternator +heater +rad +water_pump +rad_hose+fuel_pump  +oil +spray_paint  +red_paint + silver_paint  +black_paint +white_paint +air_pump +rotate_tyres +rethread +head_lamps +oil_filter +fog_lamp_bulb + rearlight_bulb + reg_light_bulb +clutch +exhaust_pipe +wheel_bearings  +hub_caps + wiper_blades+air_filter +timing_belt +batteries+brake_disc+ brake_pad +drive_belt)";

        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
               
            res.redirect('/admin');
        });
    },
    
    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    
    


    
};


    