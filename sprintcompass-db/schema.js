const { buildSchema } = require("graphql");

const schema = buildSchema(`
type Query {
    teams: [Team],
    team_members: [TeamMember],
    products: [Product],
    sprints(productID: Int): [Sprint],
    stories(sprintID: Int): [Story],
    subtasks(storyID: Int): [SubTask],
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
    name: String
}
type Product {
    productID: Int
    productName: String
}
type Sprint {
    sprintID: Int
    productID: Int
    sprintNumber: Int
}
type Story {
    storyID: Int
    sprintID: Int
    storyDescription: String
    pointEstimate: Int
    costEstimate: Float
} 
type SubTask {
    subtaskID: Int
    storyID: Int
    taskDescription: String
    hoursWorked: Int
    hoursLeft: Int
    assignedTo: String
}
type Mutation {
    addteam(name: String, product: String, startDate: String, hoursToPoint: Int, totalPoints: Int, totalCost: Float): Team,
    addmember(teamName: String, name: String): TeamMember,

    addProduct(productID: Int, productName: String): Product,
    addSprint(sprintID: Int, productID: Int, sprintNumber: Int): Sprint,
    addStory(storyID: Int, sprintID: Int, storyDescription: String, pointEstimate: Int, costEstimate: Float): Story,
    addSubtask(subtaskID: Int, storyID: Int, taskDescription: String, hoursWorked: Int, hoursLeft: Int, assignedTo: String): SubTask,
    updateSubtask(subtaskID: Int, storyID: Int, taskDescription: String, hoursWorked: Int, hoursLeft: Int): String

   }
`);
module.exports = { schema };

