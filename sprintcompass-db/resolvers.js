const dbRtns = require("./dbroutines");
const {
  teamcollection,
  memcollection,
  productscollection,
  sprintscollection,
  storycollection,
  taskcollection,
} = require("./config");
const resolvers = {
  teams: async () => {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, teamcollection, {}, {});
  },
  team_members: async (args) => {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findAll(
      db,
      memcollection,
      { teamName: args.teamName },
      {}
    );
  },
  addteam: async (args) => {
    let db = await dbRtns.getDBInstance();
    let team = {
      name: args.name,
      product: args.product,
      startDate: args.startDate,
      hoursToPoint: args.hoursToPoint,
      totalPoints: args.totalPoints,
      totalCost: args.totalCost,
    };
    let results = await dbRtns.addOne(db, teamcollection, team);
    return results.insertedCount === 1 ? team : null;
  },
  addmember: async (args) => {
    let db = await dbRtns.getDBInstance();
    let mem = {
      teamName: args.teamName,
      firstName: args.firstName,
      lastName: args.lastName,
    };
    let results = await dbRtns.addOne(db, memcollection, mem);
    return results.insertedCount === 1 ? mem : null;
  },


  /* 
  ToDo:
  products
  sprints
  stories
  subtask
  addProduct
  addSprint
  addStory
  addSubtask
  updateSubtask
  */

  products: async() => {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, productscollection, {}, {});
  },
  // accepts productID
  sprints: async(args) => {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, sprintscollection, {productID: args.productID}, {});
  },
  // accepts sprintID
  stories: async(args) => {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, storycollection, {sprintID: args.sprintID}, {});
  },
  // accepts storyID
  subtasks: async(args) => {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, taskcollection, {storyID: args.storyID}, {});
  },

  // accepts productID (generated clientside), productName 
  addProduct: async(args) => {
    let db = await dbRtns.getDBInstance();

    let product = {
      productID: args.productID,
      productName: args.productName,
    };

    let results = await dbRtns.addOne(db, productscollection, product);
    return results.insertedCount === 1 ? product : null;
  },

  // accepts sprintID, productId, sprintNumber (sequential, different from ID)
  addSprint: async(args) => {
    let db = await dbRtns.getDBInstance();
    
    let sprint = {
      sprintID: args.sprintID,
      productID: args.productID,
      sprintNumber: args.sprintNumber
    };

    let results = await dbRtns.addOne(db, sprintscollection, sprint);
    return results.insertedCount === 1 ? sprint : null;

     //? Could work, might break my calling .insertedCount too soon
    //return await dbRtns.addOne(db, sprintscollection, sprint).insertedCount === 1 ? sprint : null;
  },

  addStory: async(args) => {
    let db = await dbRtns.getDBInstance();

    let story = {
      storyID: args.storyID,
      sprintID: args.sprintID,
      storyDescription: args.storyDescription,
      pointEstimate: args.pointEstimate,
      costEstimate: args.costEstimate
    };

    let results = await dbRtns.addOne(db, storycollection, story);
    return results.insertedCount === 1 ? story : null;
  },

  addSubtask: async(args) => {
    let db = await dbRtns.getDBInstance();

    let subtask = {
      subtaskID: args.subtaskID,
      storyID: args.storyID,
      taskDescription: args.taskDescription,
      hoursWorked: args.hoursWorked,
      hoursLeft: args.hoursLeft 
    };

    let results = await dbRtns.addOne(db, taskcollection, subtask);
    return results.insertedCount === 1 ? subtask : null;
  },
  
  updateSubtask: async (args) => {
    let db = await dbRtns.getDBInstance();
    let subtask = {
      subtaskID: args.subtaskID,
      //storyID: args.storyID,
      taskDescription: args.taskDescription,
      hoursWorked: args.hoursWorked,
      hoursLeft: args.hoursLeft
    };
    let results = await dbRtns.updateOne(
      db, 
      taskcollection,
      {subtaskID: args.subtaskID},
      {
        taskDescription: subtask.taskDescription,
        hoursWorked: subtask.hoursWorked,
        hoursLeft: subtask.hoursLeft
      }
    );
    return results.lastErrorObject.updatedExisting
      ? (msg = `Subtask was updated`)
      : (msg = `Subtask was not updated`);
  },
};

module.exports = { resolvers };
