const dotenv = require("dotenv");
dotenv.config();
module.exports = {
 atlas: process.env.DBURL,
 appdb: process.env.DB,
 teamcollection: process.env.TEAMCOLLECTION,
 memcollection: process.env.MEMBERCOLLECTION,
 productscollection: process.env.PRODUCTSCOLLECTION,
 sprintscollection: process.env.SPRINTSCOLLECTION,
 storycollection: process.env.STORYCOLLECTION,
 taskcollection: process.env.SUBTASKCOLLECTION,
 port: process.env.PORT,
 graphql: process.env.GRAPHQLURL
};