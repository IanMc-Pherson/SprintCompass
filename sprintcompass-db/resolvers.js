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
  products: async() => {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, productscollection, {}, {});
  },
  team_members: async () => {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, memcollection, {}, {});
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
      name: args.name,
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
  // accepts productID
 /*  sprints: async(args) => {
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
  }, */

  //! Updated to remove need for IDs
  sprints: async() => {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, sprintscollection, {}, {});
  },
  // accepts sprintID
  stories: async() => {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, storycollection, {}, {});
  },
  // accepts storyID
  subtasks: async() => {
    let db = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, taskcollection, {}, {});
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

  },

  addStory: async(args) => {
    let db = await dbRtns.getDBInstance();

    let story = {
      storyID: args.storyID,
      sprintID: args.sprintID,
      productID: args.productID,
      storyDescription: args.storyDescription,
      pointEstimate: args.pointEstimate,
      costEstimate: args.costEstimate,
      status: args.status
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
      hoursLeft: args.hoursLeft,
      status: args.status,
      assignedTo: args.assignedTo
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
      hoursLeft: args.hoursLeft,
      status: args.status,
      assignedTo: args.assignedTo
    };
    let results = await dbRtns.updateOne(
      db, 
      taskcollection,
      {subtaskID: args.subtaskID},
      {
        taskDescription: subtask.taskDescription,
        hoursWorked: subtask.hoursWorked,
        hoursLeft: subtask.hoursLeft,
        status: subtask.status,
        assignedTo: subtask.assignedTo
      }
    );
    return results.lastErrorObject.updatedExisting
      ? (msg = `Subtask was updated`)
      : (msg = `Subtask was not updated`);
  },
};

module.exports = { resolvers };
