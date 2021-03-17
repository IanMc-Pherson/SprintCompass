const dbRtns = require("./dbroutines");
const { teamcollection, memcollection, storycollection, taskcollection } = require("./config");
const resolvers = 
{
  teams: async () => 
  {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, teamcollection, {}, {})
  },
  team_members: async args => 
 {
   let db = await dbRtns.getDBInstance();
   return await dbRtns.findAll(db, memcollection, {teamName: args.teamName}, {})
 },
 stories: async args => 
 {
   let db = await dbRtns.getDBInstance();
   return await dbRtns.findAll(db, storycollection, {productName: args.productName}, {})
 },
 subtasks: async args => 
 {
   let db = await dbRtns.getDBInstance();
   return await dbRtns.findAll(db, taskcollection, {storyDescription: args.storyDescription}, {})
 },
 addteam: async args => 
 {
   let db = await dbRtns.getDBInstance();
   let team = {name: args.name, product: args.product, startDate: args.startDate, hoursToPoint: args.hoursToPoint, totalPoints: args.totalPoints, totalCost: args.totalCost};
   let results = await dbRtns.addOne(db,teamcollection,team);
   return results.insertedCount === 1 ? team : null;
 },
 addmember: async args => 
 {
   let db = await dbRtns.getDBInstance();
   let mem = {teamName: args.teamName, firstName: args.firstName, lastName: args.lastName};
   let results = await dbRtns.addOne(db,memcollection,mem);
   return results.insertedCount === 1 ? mem : null;
 },
 addstory: async args => 
 {
   let db = await dbRtns.getDBInstance();
   let story = {teamName: args.teamName, productName: args.productName, storyDescription: args.storyDescription, pointEstimate: args.pointEstimate, costEstimate: args.costEstimate};
   let results = await dbRtns.addOne(db,storycollection,story);
   return results.insertedCount === 1 ? story : null;
 },
 addsubtask: async args => 
 {
   let db = await dbRtns.getDBInstance();
   let task = {storyDescription: args.storyDescription, text: args.text, hoursWorked: args.hoursWorked, hoursLeft: args.hoursLeft};
   let results = await dbRtns.addOne(db,taskcollection,task);
   return results.insertedCount === 1 ? task : null;
 },
 updatesubtask: async args => 
 {
   let db = await dbRtns.getDBInstance();
   let task = {storyDescription: args.storyDescription, text: args.text, hoursWorked: args.hoursWorked, hoursLeft: args.hoursLeft};
   let results = await dbRtns.updateOne(db,taskcollection,{storyDescription: args.storyDescription}, {text: task.text, hoursWorked: task.hoursWorked, hoursLeft: task.hoursLeft});
   return results.lastErrorObject.updatedExisting ? msg = `user was updated`: msg = `user was not
   updated`;;
 },
};

 module.exports = { resolvers }; 
