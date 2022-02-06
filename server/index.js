const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

const PORT = 3001;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yathin017',
    database: 'restaurants'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


//! Contact us
app.get('/api/getQuery', (req, res)=>{
    const sqlContactUs = "SELECT * FROM contact_us";
    db.query(sqlContactUs, (err, result)=>{
        // console.log(result);
        res.send(result);
    });
});

app.post('/api/insertQuery', (req, res)=>{
    const Email = req.body.Email;
    const Query = req.body.Query;

    const sqlInsert = "INSERT INTO contact_us (Email, Query) VALUES (?,?)";
    db.query(sqlInsert, [Email, Query], (err, result)=>{
        console.log("Query added to ContactUs");
        console.log(result);
        console.log(err);
        console.log("**********************");
    });
});

app.delete('/api/deleteQuery/:id', (req, res)=>{
    const id = req.params.id;
    const sqlDelete = "DELETE FROM contact_us WHERE id=?";
    db.query(sqlDelete, id, (err, result)=>{
        if(err) console.log(err);
    })
});


//! restaurant1
app.get('/api/get1', (req, res)=>{
    const sqlSelect = "SELECT * FROM restaurant1";
    db.query(sqlSelect, (err, result)=>{
        // console.log(result);
        res.send(result);
    });
});

app.post('/api/insert1', (req, res)=>{
    const Name = req.body.Name;
    const Email = req.body.Email;
    const PhoneNumber = req.body.PhoneNumber;
    const NumberOfSeats = req.body.NumberOfSeats;
    const Date = req.body.Date;
    const Time = req.body.Time;
    const Food = req.body.Food;
    const Quantity = req.body.Quantity;
    const sqlInsert = "INSERT INTO restaurant1 (Name, Email, PhoneNumber, NumberOfSeats, Date, Time, Food, Quantity) VALUES (?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [Name, Email, PhoneNumber, NumberOfSeats, Date, Time, Food, Quantity], (err, result)=>{
        console.log("Booking added to restaurant1");
        console.log(result);
        console.log(err);
        console.log("**********************");
    });
});

app.delete('/api/delete1/:id', (req, res)=>{
    const id = req.params.id;
    const sqlDelete = "DELETE FROM restaurant1 WHERE id=?";
    db.query(sqlDelete, id, (err, result)=>{
        if(err) console.log(err);
    })
    // added
    const sqlDeleteFood = "DELETE FROM food_order WHERE id=?";
    db.query(sqlDelete, id, (err, result)=>{
        if(err) console.log(err);
    })
});

//! food1
app.get('/api/getFood1', (req, res)=>{
    const sqlContactUs = "SELECT * FROM food_order1";
    db.query(sqlContactUs, (err, result)=>{
        // console.log(result);
        res.send(result);
    });
});

app.post('/api/insertFood1', (req, res)=>{
    const Food = req.body.Food;
    const Price = req.body.Price;

    const sqlInsert = "INSERT INTO food_order1 (Food, Price) VALUES (?,?)";
    db.query(sqlInsert, [Food, Price], (err, result)=>{
        console.log("Food added to Menu");
        console.log(result);
        console.log(err);
        console.log("**********************");
    });
});

app.delete('/api/deleteFood1/:FoodID', (req, res)=>{
    const FoodID = req.params.FoodID;
    const sqlDelete = "DELETE FROM food_order1 WHERE FoodID=?";
    db.query(sqlDelete, FoodID, (err, result)=>{
        if(err) console.log(err);
    })
});


//! restaurant2
app.get('/api/get2', (req, res)=>{
    const sqlSelect = "SELECT * FROM restaurant2";
    db.query(sqlSelect, (err, result)=>{
        // console.log(result);
        res.send(result);
    });
});

app.post('/api/insert2', (req, res)=>{
    const Name = req.body.Name;
    const Email = req.body.Email;
    const PhoneNumber = req.body.PhoneNumber;
    const NumberOfSeats = req.body.NumberOfSeats;
    const Date = req.body.Date;
    const Time = req.body.Time;
    const Food = req.body.Food;
    const Quantity = req.body.Quantity;
    const sqlInsert = "INSERT INTO restaurant2 (Name, Email, PhoneNumber, NumberOfSeats, Date, Time, Food, Quantity) VALUES (?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [Name, Email, PhoneNumber, NumberOfSeats, Date, Time, Food, Quantity], (err, result)=>{
        console.log("Booking added to restaurant2");
        console.log(result);
        console.log(err);
        console.log("**********************");
    });
});

app.delete('/api/delete2/:id', (req, res)=>{
    const id = req.params.id;
    const sqlDelete = "DELETE FROM restaurant2 WHERE id=?";
    db.query(sqlDelete, id, (err, result)=>{
        if(err) console.log(err);
    })
    // added
    const sqlDeleteFood = "DELETE FROM food_order WHERE id=?";
    db.query(sqlDelete, id, (err, result)=>{
        if(err) console.log(err);
    })
});

//! food2
app.get('/api/getFood2', (req, res)=>{
    const sqlContactUs = "SELECT * FROM food_order2";
    db.query(sqlContactUs, (err, result)=>{
        // console.log(result);
        res.send(result);
    });
});

app.post('/api/insertFood2', (req, res)=>{
    const Food = req.body.Food;
    const Price = req.body.Price;

    const sqlInsert = "INSERT INTO food_order2 (Food, Price) VALUES (?,?)";
    db.query(sqlInsert, [Food, Price], (err, result)=>{
        console.log("Food added to Menu2");
        console.log(result);
        console.log(err);
        console.log("**********************");
    });
});

app.delete('/api/deleteFood2/:FoodID', (req, res)=>{
    const FoodID = req.params.FoodID;
    const sqlDelete = "DELETE FROM food_order2 WHERE FoodID=?";
    db.query(sqlDelete, FoodID, (err, result)=>{
        if(err) console.log(err);
    })
});


//! restaurant3
app.get('/api/get3', (req, res)=>{
    const sqlSelect = "SELECT * FROM restaurant3";
    db.query(sqlSelect, (err, result)=>{
        // console.log(result);
        res.send(result);
    });
});

app.post('/api/insert3', (req, res)=>{
    const Name = req.body.Name;
    const Email = req.body.Email;
    const PhoneNumber = req.body.PhoneNumber;
    const NumberOfSeats = req.body.NumberOfSeats;
    const Date = req.body.Date;
    const Time = req.body.Time;
    const Food = req.body.Food;
    const Quantity = req.body.Quantity;
    const sqlInsert = "INSERT INTO restaurant3 (Name, Email, PhoneNumber, NumberOfSeats, Date, Time, Food, Quantity) VALUES (?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [Name, Email, PhoneNumber, NumberOfSeats, Date, Time, Food, Quantity], (err, result)=>{
        console.log("Booking added to restaurant3");
        console.log(result);
        console.log(err);
        console.log("**********************");
    });
});

app.delete('/api/delete3/:id', (req, res)=>{
    const id = req.params.id;
    const sqlDelete = "DELETE FROM restaurant3 WHERE id=?";
    db.query(sqlDelete, id, (err, result)=>{
        if(err) console.log(err);
    })
    // added
    const sqlDeleteFood = "DELETE FROM food_order WHERE id=?";
    db.query(sqlDelete, id, (err, result)=>{
        if(err) console.log(err);
    })
});

//! food3
app.get('/api/getFood3', (req, res)=>{
    const sqlContactUs = "SELECT * FROM food_order3";
    db.query(sqlContactUs, (err, result)=>{
        // console.log(result);
        res.send(result);
    });
});

app.post('/api/insertFood3', (req, res)=>{
    const Food = req.body.Food;
    const Price = req.body.Price;

    const sqlInsert = "INSERT INTO food_order3 (Food, Price) VALUES (?,?)";
    db.query(sqlInsert, [Food, Price], (err, result)=>{
        console.log("Food added to Menu3");
        console.log(result);
        console.log(err);
        console.log("**********************");
    });
});

app.delete('/api/deleteFood3/:FoodID', (req, res)=>{
    const FoodID = req.params.FoodID;
    const sqlDelete = "DELETE FROM food_order3 WHERE FoodID=?";
    db.query(sqlDelete, FoodID, (err, result)=>{
        if(err) console.log(err);
    })
});


//! restaurant4
app.get('/api/get4', (req, res)=>{
    const sqlSelect = "SELECT * FROM restaurant4";
    db.query(sqlSelect, (err, result)=>{
        // console.log(result);
        res.send(result);
    });
});

app.post('/api/insert4', (req, res)=>{
    const Name = req.body.Name;
    const Email = req.body.Email;
    const PhoneNumber = req.body.PhoneNumber;
    const NumberOfSeats = req.body.NumberOfSeats;
    const Date = req.body.Date;
    const Time = req.body.Time;
    const Food = req.body.Food;
    const Quantity = req.body.Quantity;
    const sqlInsert = "INSERT INTO restaurant4 (Name, Email, PhoneNumber, NumberOfSeats, Date, Time, Food, Quantity) VALUES (?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [Name, Email, PhoneNumber, NumberOfSeats, Date, Time, Food, Quantity], (err, result)=>{
        console.log("Booking added to restaurant4");
        console.log(result);
        console.log(err);
        console.log("**********************");
    });
});

app.delete('/api/delete4/:id', (req, res)=>{
    const id = req.params.id;
    const sqlDelete = "DELETE FROM restaurant4 WHERE id=?";
    db.query(sqlDelete, id, (err, result)=>{
        if(err) console.log(err);
    })
    // added
    const sqlDeleteFood = "DELETE FROM food_order WHERE id=?";
    db.query(sqlDelete, id, (err, result)=>{
        if(err) console.log(err);
    })
});

//! food4
app.get('/api/getFood4', (req, res)=>{
    const sqlContactUs = "SELECT * FROM food_order4";
    db.query(sqlContactUs, (err, result)=>{
        // console.log(result);
        res.send(result);
    });
});

app.post('/api/insertFood4', (req, res)=>{
    const Food = req.body.Food;
    const Price = req.body.Price;

    const sqlInsert = "INSERT INTO food_order4 (Food, Price) VALUES (?,?)";
    db.query(sqlInsert, [Food, Price], (err, result)=>{
        console.log("Food added to Menu4");
        console.log(result);
        console.log(err);
        console.log("**********************");
    });
});

app.delete('/api/deleteFood4/:FoodID', (req, res)=>{
    const FoodID = req.params.FoodID;
    const sqlDelete = "DELETE FROM food_order4 WHERE FoodID=?";
    db.query(sqlDelete, FoodID, (err, result)=>{
        if(err) console.log(err);
    })
});


//! restaurant5
app.get('/api/get5', (req, res)=>{
    const sqlSelect = "SELECT * FROM restaurant5";
    db.query(sqlSelect, (err, result)=>{
        // console.log(result);
        res.send(result);
    });
});

app.post('/api/insert5', (req, res)=>{
    const Name = req.body.Name;
    const Email = req.body.Email;
    const PhoneNumber = req.body.PhoneNumber;
    const NumberOfSeats = req.body.NumberOfSeats;
    const Date = req.body.Date;
    const Time = req.body.Time;
    const Food = req.body.Food;
    const Quantity = req.body.Quantity;
    const sqlInsert = "INSERT INTO restaurant5 (Name, Email, PhoneNumber, NumberOfSeats, Date, Time, Food, Quantity) VALUES (?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [Name, Email, PhoneNumber, NumberOfSeats, Date, Time, Food, Quantity], (err, result)=>{
        console.log("Booking added to restaurant5");
        console.log(result);
        console.log(err);
        console.log("**********************");
    });
});

app.delete('/api/delete5/:id', (req, res)=>{
    const id = req.params.id;
    const sqlDelete = "DELETE FROM restaurant5 WHERE id=?";
    db.query(sqlDelete, id, (err, result)=>{
        if(err) console.log(err);
    })
    // added
    const sqlDeleteFood = "DELETE FROM food_order WHERE id=?";
    db.query(sqlDelete, id, (err, result)=>{
        if(err) console.log(err);
    })
});

//! food5
app.get('/api/getFood5', (req, res)=>{
    const sqlContactUs = "SELECT * FROM food_order5";
    db.query(sqlContactUs, (err, result)=>{
        // console.log(result);
        res.send(result);
    });
});

app.post('/api/insertFood5', (req, res)=>{
    const Food = req.body.Food;
    const Price = req.body.Price;

    const sqlInsert = "INSERT INTO food_order5 (Food, Price) VALUES (?,?)";
    db.query(sqlInsert, [Food, Price], (err, result)=>{
        console.log("Food added to Menu5");
        console.log(result);
        console.log(err);
        console.log("**********************");
    });
});

app.delete('/api/deleteFood5/:FoodID', (req, res)=>{
    const FoodID = req.params.FoodID;
    const sqlDelete = "DELETE FROM food_order5 WHERE FoodID=?";
    db.query(sqlDelete, FoodID, (err, result)=>{
        if(err) console.log(err);
    })
});


//! restaurant6
app.get('/api/get6', (req, res)=>{
    const sqlSelect = "SELECT * FROM restaurant6";
    db.query(sqlSelect, (err, result)=>{
        // console.log(result);
        res.send(result);
    });
});

app.post('/api/insert6', (req, res)=>{
    const Name = req.body.Name;
    const Email = req.body.Email;
    const PhoneNumber = req.body.PhoneNumber;
    const NumberOfSeats = req.body.NumberOfSeats;
    const Date = req.body.Date;
    const Time = req.body.Time;
    const Food = req.body.Food;
    const Quantity = req.body.Quantity;
    const sqlInsert = "INSERT INTO restaurant6 (Name, Email, PhoneNumber, NumberOfSeats, Date, Time, Food, Quantity) VALUES (?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [Name, Email, PhoneNumber, NumberOfSeats, Date, Time, Food, Quantity], (err, result)=>{
        console.log("Booking added to restaurant6");
        console.log(result);
        console.log(err);
        console.log("**********************");
    });
});

app.delete('/api/delete6/:id', (req, res)=>{
    const id = req.params.id;
    const sqlDelete = "DELETE FROM restaurant6 WHERE id=?";
    db.query(sqlDelete, id, (err, result)=>{
        if(err) console.log(err);
    })
    // added
    const sqlDeleteFood = "DELETE FROM food_order WHERE id=?";
    db.query(sqlDelete, id, (err, result)=>{
        if(err) console.log(err);
    })
});

//! food6
app.get('/api/getFood6', (req, res)=>{
    const sqlContactUs = "SELECT * FROM food_order6";
    db.query(sqlContactUs, (err, result)=>{
        // console.log(result);
        res.send(result);
    });
});

app.post('/api/insertFood6', (req, res)=>{
    const Food = req.body.Food;
    const Price = req.body.Price;

    const sqlInsert = "INSERT INTO food_order6 (Food, Price) VALUES (?,?)";
    db.query(sqlInsert, [Food, Price], (err, result)=>{
        console.log("Food added to Menu6");
        console.log(result);
        console.log(err);
        console.log("**********************");
    });
});

app.delete('/api/deleteFood6/:FoodID', (req, res)=>{
    const FoodID = req.params.FoodID;
    const sqlDelete = "DELETE FROM food_order6 WHERE FoodID=?";
    db.query(sqlDelete, FoodID, (err, result)=>{
        if(err) console.log(err);
    })
});


app.listen(process.env.PORT || PORT,()=>{
    console.log(`Running on ${PORT}`);
});