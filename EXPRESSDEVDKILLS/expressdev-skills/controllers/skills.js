// controllers/skills.js
const Skill = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill,
  create
};
function newSkill(req, res) {
  res.render("skills/new", { title: "New Skill" });
};

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: "Skills All"
    });
  }

function show(req, res) {
    res.render('skills/show', {
      skills: Skill.getOne(req.params.id),
      title: "Skills Details"
    });
}
function create(req, res) {
  console.log(req.body)
  Skill.create(req.body);
  res.redirect("/skills")
};