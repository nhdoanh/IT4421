const express = require("express");
const Lesson = require("../models/lesson");
const Result = require("../models/ReturnItems/result");
const LessonCourse = require("../models/lessoncourse");
const lessonRouter = new express.Router();

lessonRouter.post("/lesson", async (req, res) => {
  let lesson = new Lesson({
    Name: req.body.Name,
    LessonVideo: req.body.LessonVideo,
    Grade: req.body.Grade,
    IsDeleted: false
  });

  try {
    await lesson.save();
    let result = new Result(true, "Thêm thành công", "");
    res.status(201).send(result);
  } catch (e) {
    let result = new Result(false, "", "Thêm thất bại");
    res.status(200).send(result);
  }
});

lessonRouter.get("/lesson", async (req, res) => {
  try {
    let lesson = await Lesson.find();
    let result = new Result(true, lesson, "");
    res.status(200).send(result);
  } catch (e) {
    let result = new Result(false, "", "Lỗi");
    res.status(200).send(result);
  }
});

//Get Lesson By Course
lessonRouter.get("/lesson", async (req, res) => {
  if (!req.query.Course) {
    let result = new Result(false, "", "Sai tham số");
    return res.status(200).send(result);
  }

  let parts = req.query.course.split(":");
  let course = parts[1];
  try {
    let lessoncourse = await LessonCourse.find({ CourseId: course }).order({
      order: 1
    });
    // let lesson = await Lesson.find({});
    let result = new Result(true, lessoncourse, "");
    res.status(200).send(result);
  } catch (e) {
    let result = new Result(false, "", "Lỗi");
    res.status(200).send(result);
  }
});

//Get by Grade, subject
lessonRouter.get("/lesson", async (req, res) => {
  let partssubject = "";
  let subject = "";
  let partsgrade = "";
  let grade = "";

  if (req.query.Subject) {
    partssubject = req.query.Subject.split(":");
    subject = partscourse[1];
  }

  if (req.query.Grade) {
    partsgrade = req.query.Grade.split(":");
    grade = partscourse[1];
  }

  try {
    let lesson = "";
    if (subject != "" && grade == "") {
      lesson = await Lesson.find({ Subject: subject });
    } else {
      if (subject == "" && grade != "") {
        lesson = await Lesson.find({ Grade: grade });
      } else {
        lesson = await Lesson.find({ Subject: subject, Grade: grade });
      }
    }

    let result = new Result(true, lesson, "");
    res.status(200).send(result);
  } catch (e) {
    let result = new Result(false, "", "Lỗi");
    res.status(200).send(result);
  }
});

lessonRouter.get("/lesson/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let lesson = await Lesson.find({ _id: id });
    let result = new Result(true, lesson, "");
    res.status(200).send(result);
  } catch (e) {
    let result = new Result(false, "", "Lỗi");
    res.status(200).send(result);
  }
});

lessonRouter.get("/lesson/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let lesson = await Lesson.find({ _id: id });
    let result = new Result(true, lesson, "");
    res.status(200).send(result);
  } catch (e) {
    let result = new Result(false, "", "Lỗi");
    res.status(200).send(result);
  }
});

lessonRouter.patch("/lesson/:id", async (req, res) => {
  let id = req.params.id;
  let updates = await Object.keys(req.body);

  let allowedUpdates = ["Name", "LessonVideo", "Grade"];
  let IsValid = updates.every(update => {
    allowedUpdates.includes(update);
  });

  if (!IsValid) {
    let result = new Result(false, "", "Tham số không hợp lệ");
    return res.status(200).send(result);
  }

  try {
    let lesson = await Lesson.findOne({ _id: id});
    if (!lesson) {
        let result = new Result(false, "", "Tham số không hợp lệ");
        return res.status(200).send(result);
    }

    updates.forEach(update => (lesson[update] = req.body[update]));
    await lesson.save();
    let result = new Result(true, "Update success", "");
    res.status(200).send(result);
  } catch (e) {
    let result = new Result(false, "", "Update fail");
    res.status(200).send(result);
  }
});

lessonRouter.delete('/lesson/:id', async(req, res) => {
    let id = req.params.id
    try {
        let lesson = Lesson.findOne({_id : id})
        lesson.IsDeleted = true
        await lesson.save()
        let result = new Result(true, 'Xóa thành công', '')
        res.status(200).send(result)
    } catch (e) {
        let result = new Result(false, '', 'Xóa thất bại')
        res.status(200).send(result)
    }
})

// Table Lesson {
//     Id ObjectId [pk]
//     Name string
//     LessonVideo string
//     Grade string
//     IsDeleted bool
//   }
