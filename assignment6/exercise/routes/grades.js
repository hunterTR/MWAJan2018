var { Grade } = require('../models/grade');

var express = require('express');
var router = express.Router();

let grades = [];
grades.push(new Grade(1, "Cem Kaya", "CS572", "95"));
grades.push(new Grade(2, "Ebru Kaya", "CS572", "95"));
grades.push(new Grade(3, "Illidan Stormrage", "CS572", "55"));
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.status(200).json(grades);
});
router.post('/', function (req, res, next) {
    //console.log(req);
    if (req.body.id == "" || req.body.id == undefined) {
        res.status(400).json({ error: "id can not be empty." });
        return;
    }

    if (req.body.name == "" || req.body.name == undefined) {
        res.status(400).json({ error: "name can not be empty." });
        return;
    }
    let newGrade = new Grade(req.body.id, req.body.name, req.body.course, req.body.grade);
    grades.push(newGrade);
    console.log(newGrade);
    res.status(200).json(req.body);
});
router.put('/', function (req, res, next) {
    let item = grades.find(g => g.id == req.body.id);
    if (item !== undefined) {
        let index = grades.indexOf(item);

        if (req.body.id == "" || req.body.id == undefined) {
            res.status(400).json({ error: "id can not be empty." });
            return;
        }

        if (req.body.name == "" || req.body.name == undefined) {
            res.status(400).json({ error: "name can not be empty." });
            return;
        }

        grades[index].name = req.body.name;
        grades[index].course = req.body.course;
        grades[index].grade = req.body.grade;
        res.status(200).json(grades[index]);

    }
    else
        res.status(404).json({});

});
router.delete('/', function (req, res, next) {
    let item = grades.find(g => g.id == req.body.id);
    if (item !== undefined) {
        let index = grades.indexOf(item);
        grades.splice(index, 1);
        res.status(200).json(item);
    }
    else
        res.status(404).json({});
});


module.exports = router;