const express = require("express");
const Course = require("../models/course");
const Lesson = require("../models/lesson")
const Result = require("../models/ReturnItems/result");
const courseRouter = new express.Router();

/*
 * @param req(TeacherId, Price, Subject, Grade, IsFree)
 * Subject == 0 ? Math : Literature
 */
courseRouter.post("/course", async (req, res) => {
  let Subject = req.body.Subject == "0" ? "Math" : "Literature";
  let course = new Course({
    TeacherId: req.body.TeacherId,
    Price: req.body.Price,
    Subject: Subject,
    Grade: req.body.Grade,
    IsFree: false
  });
  try {
    await course.save();
    let result = new Result(true, "Thêm thành công", "");
    res.status(201).send(result);
  } catch (e) {
    let result = new Result(false, "", "Lỗi khi thêm ");
    res.status(200).send(result);
  }
});

courseRouter.get("/course", async (req, res) => {
  const math = {};
  const sort = {};

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(":");
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }
  try {
    let course = await Course.find();
    let result = new Result(true, course, "");
    res.status(200).send(result);
  } catch (error) 
  {
    let result = new Result(false, "", "Lỗi");
    res.status(200).send(result);
  }
});

//Course Info only
courseRouter.get("/course/:id", async (req, res) => {
  let id = req.params.id;

  try {
    let course = await Course.findById(id);
    let result = new Result(true, course, "");
    res.status(200).send(result);
  } catch (e) {
    let result = new Result(false, "", "Không tồn tại");
    res.status(200).send(result);
  }
});

courseRouter.patch("/course/:id", async (req, res) => {
  let id = req.params.id;
  let updates = await Object.keys(req.boby);
  let allowedUpdates = ["TeacherId", "Price", "Subject", "Grade", "IsFree"];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    let result = new Result(false, "", "Update khong thoa man");
    return res.status(200).send(result);
  }

  try {
    const course = await Course.findOne({ _id: req.params.id });
    if (!course) {
      return res.status(404).send();
    }

    updates.forEach(update => (course[update] = req.body[update]));
    await course.save();
    let result = new Result(true, "Update success", "");
    res.status(200).send(result);
  } catch (e) {
    let result = new Result(false, "", "Update fail");
    res.status(200).send(result);
  }
});

courseRouter.delete("/course/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const course = await Course.findOne({ _id: req.params.id });
    if (!course) {
      return res
        .status(200)
        .send(new Result(false, "", "Không tồn tại Course"));
    }

    course.IsDeleted = true;
    course.save();
    return res.status(200).send(new Result(true, "Delete Success", ""));
  } catch (e) {
    return res.status(200).send(new Result(false, "", "Delete Fail"));
  }
});

module.exports = courseRouter;
// Table Course as C {
//     Id ObjectId [pk]
//     TeacherId ObjectId
//     Price int
//     Subject string
//     Grade   string
//     IsFree bool
//   }
