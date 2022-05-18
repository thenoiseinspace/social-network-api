const { Course, Student } = require('../models');

//match:  getThoughts,getSingleThought,createThought, updateThought, deleteThought,

module.exports = {
  getThoughts(req, res) {
    Course.find()
      .then((courses) => res.json(courses))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Course.findOne({ _id: req.params.courseId })
      .select('-__v')
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Course.create(req.body)
      .then((course) => res.json(course))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  deleteThought(req, res) {
    Course.findOneAndDelete({ _id: req.params.courseId })
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Student.deleteMany({ _id: { $in: course.students } })
      )
      .then(() => res.json({ message: 'Thought deleted' }))
      .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {
    Course.findOneAndUpdate(
      { _id: req.params.courseId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },
};
