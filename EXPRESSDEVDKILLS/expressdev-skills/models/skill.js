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
};

function getAll() {
  return skills;
};