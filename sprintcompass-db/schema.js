const { buildSchema } = require("graphql");
const schema = buildSchema(`
type Query {
    teams: [Team],
    team_members(teamName: String): [TeamMember],
    stories(productName: String): [Story],
    subtasks(storyDescription: String): [SubTask],
}
type Team {
    name: String
    product: String
    startDate: String
    hoursToPoint: Int
    totalPoints: Int
    totalCost: Float
   }
type TeamMember {
    teamName: String
    firstName: String
    lastName: String
   }
type Story {
    productName: String
    storyDescription: String
    pointEstimate: Int
    costEstimate: Float
   }
type SubTask {
    storyDescription: String
    text: String
    hoursWorked: Int
    hoursLeft: Int
   }
type Mutation {
    addteam(name: String, product: String, startDate: String, hoursToPoint: Int, totalPoints: Int, totalCost: Float): Team,
    addmember(teamName: String, firstName: String, lastName: String): TeamMember,
    addstory(productName: String, storyDescription: String, pointEstimate: Int, costEstimate: Float): Story,
    addsubtask(storyDescription: String, text: String, hoursWorked: Int, hoursLeft: Int): SubTask,
    updatesubtask(storyDescription: String, text: String, hoursWorked: Int, hoursLeft: Int): String
   }
`);
module.exports = { schema };