const { coll } = require("./config");
const express = require("express");
const router = express.Router();
const dbRtns = require("./dbroutines");
const setup = require("./setupalerts");

// define a default route to retrieve all users
router.get("/setup", async (req, res) => {
 try {
 let db = await dbRtns.getDBInstance();
 let results = await setup.setupAlerts();
 res.status(200).send({ results });
 } catch (err) {
 console.log(err.stack);
 res.status(500).send("get all users failed - internal server error");
 }
});
router.post("/", async (req, res) => {
    try {
    let user = req.body;
    let db = await dbRtns.getDBInstance();
    let addedUser = await dbRtns.addOne(db, coll, user);
    res.status(200).send({msg: `${addedUser.insertedCount} user was added`});
    } catch (err) {
    console.log(err.stack);
    res.status(500).send("no users added");
    }
   });
router.get('/:name', async (req, res) => {
    let name = req.params.name;
    db = await dbRtns.getDBInstance();
    let user = await dbRtns.findOne(db, coll, { name: name });
    if (!user)
    {
        res.status(200).send(`<body>No user with the name ${name} could be found</body>`);
    }
    else 
    {
       res.status(200).send({user});
    }
});
router.put("/", async (req, res) => {
    try {
    let user = req.body;
    let db = await dbRtns.getDBInstance();
    let updateResults = await dbRtns.updateOne(db, coll, { name: user.name }, {age: user.age, email: user.email});
    updateResults.lastErrorObject.updatedExisting ? msg = `user was updated`: msg = `user was not
updated`;
    res.status(200).send({msg});
    } catch (err) {
    console.log(err.stack);
    res.status(500).send({msg});
    }
   });
router.delete('/:name', async (req, res) => {
    let name = req.params.name;
    try {
        db = await dbRtns.getDBInstance();
        let user = await dbRtns.findOne(db, coll, { name: name });
        let deletedUser = await dbRtns.deleteOne(db, coll, {_id: user._id})
        res.status(200).send({msg: `${deletedUser.deletedCount} user was deleted`});
        } catch (err) {
        console.log(err.stack);
        res.status(500).send("no users deleted");
        }
});
module.exports = router;