const router = require("express").Router();
// const { request } = require("express");
const Student = require("../models/Student.js");

//add Student routes

http://localhost:8070/Stuent/add   //create route for the create student operation .backend URL 

router.route("/add").post((req, res) => {

    //body
    //create constant varialble for the records that create for schema

    const name = req.body.name;
    const age = Number(req.body.age);   // cast the datatype of the age string to number
    const gender = req.body.gender;    //body->get the data through the body of the frontEnd


    const newStudent = new Student({

        name,
        age,
        gender

    })

    newStudent.save().then(() => (       //save and pass the value of the objects to the database
        res.json("student Added"))     //josn format  , java script promise(like if else)  .then (success )   .catch (error)

    ).catch(() => {                    //Exception handling part
        console.log(err);
    })

})






//Get all student route


http://localhost:8070/student/display


router.route("/").get((req, res) => {

    Student.find().then((Students) => (
        res.json(Students)
    )).catch((err) => {
        console.log(err)
    })


})




//update student route

http://localhost:8070/Student/update/     //nerver update the relevent person we want


//no need to give the module.it create unique id and generate in the database automatically

router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id;

    const { name, age, gender } = req.body;  // Destructure method . 

    const updateStudent = {    //create object too update
        name,
        age,
        gender
    }
    await Student.findByIdAndUpdate(userId, updateStudent).then(() => (    //await ->await for  promise or  do the updation for the relevate person
        res.status(200).send({ status: "User Updated" })        //then,catch 

    )).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updation data", error: err.message });

    })


})








//delete student route

http://localhost:8070/delete/aGDDW8WDWXAA    //(User id)

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;
    await Student.findByIdAndDelete(userId).then(() => {
        res.status(200).send({ status: "user deleted" })

    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete user", error: err.message })
    })
})








//Get only one student details

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Student.findById(userId)
        .then(() => {
            res.status(200).send({ status: "user fetched", user: user })
        }).catch((err) => {
            console.log(err.message);
            re.status(500).send(send({ status: "Error with get user", error: err.message }));
        })
})

module.exports = router;

