/**
 * Tenant.js
 * define our DB operations.
 */
const AB = require("ab-utils");
module.exports = {
   site_only: true,
   table_name: "site_tenant",
   attributes: {
      uuid: { type: "uuid", required: true },
      key: "string",
      properties: "json"
   },
   beforeCreate: function(valuesToCreate, cb) {
      if (!valuesToCreate.uuid) {
         valuesToCreate.uuid = AB.uuid();
      }
      cb();
   }
};
