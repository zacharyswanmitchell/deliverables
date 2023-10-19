const skills = [
    {id: 1, skill: "HTML", knowledge: "good" },
    {id: 2,  skill: "CSS", knowledge: "good" },
    {id: 3, skill: "Javascript", knowledge: "good" },
    {id: 4,  skill: "Node.js", knowledge: "minimal" },
    {id: 5,  skill: "Express", knowledge: "minimal" },
    {id: 6,  skill: "Mongoose", knowledge: "unknown" },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function getAll() {
  return skills;
};

function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}
function create(skill) {
  skill.id = Date.now() % 1000000000;
  skills.push(skill);
};

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
 };