/**
 * list
 * our Request handler.
 */
const queryFindAllTenants = require("../queries/findAllTenants.js");

module.exports = {
   /**
    * Key: the cote message key we respond to.
    */
   key: "tenant_manager.config.list",

   /**
    * fn
    * our Request handler.
    * @param {obj} req
    *        the request object sent by the api_sails/api/controllers/tenant_manager/list.
    * @param {fn} cb
    *        a node style callback(err, results) to send data when job is finished
    */
   fn: function handler(req, cb) {
      queryFindAllTenants(req)
         .then((tenants) => {
            // the list of tenants returned for our config.list
            // is a simple set of data:

            var list = [];
            tenants.forEach((t) => {
               var item = {
                  uuid: t.uuid,
                  key: t.key,
                  title: t.properties.title,
               };
               list.push(item);
            });

            cb(null, list);
         })
         .catch(cb);
   },
};
