/**
 * config
 * our Request handler.
 */
const queryFindTenantByUUID = require("../queries/findTenantByUUID.js");

function returnDefaultTenant(cb) {
   cb(null, {
      id: "default",
      options: {
         title: "AppBuilder",
         textClickToEnter: "Click to Enter the AppBuilder",
      },
   });
}

module.exports = {
   /**
    * Key: the cote message key we respond to.
    */
   key: "tenant_manager.config",

   /**
    * inputValidation
    * define the expected inputs to this service handler:
    * Format:
    * "parameterName" : {
    *    {joi.fn}   : {bool},  // performs: joi.{fn}();
    *    {joi.fn}   : {
    *       {joi.fn1} : true,   // performs: joi.{fn}().{fn1}();
    *       {joi.fn2} : { options } // performs: joi.{fn}().{fn2}({options})
    *    }
    *    // examples:
    *    "required" : {bool},  // default = false
    *
    *    // custom:
    *        "validation" : {fn} a function(value, {allValues hash}) that
    *                       returns { error:{null || {new Error("Error Message")} }, value: {normalize(value)}}
    * }
    */
   inputValidation: {
      uuid: { string: true, /*{ uuid: true },*/ required: true },
   },

   /**
    * fn
    * our Request handler.
    * @param {obj} req
    *        the request object sent by the api_sails/api/controllers/tenant_manager/config.
    * @param {fn} cb
    *        a node style callback(err, results) to send data when job is finished
    */
   fn: function handler(req, cb) {
      req.log("tenant_manager.config()");

      var uuid = req.param("uuid");

      // access any Models you need
      queryFindTenantByUUID(req, uuid)
         .then((list) => {
            var tenant = list[0];
            if (tenant) {
               cb(null, {
                  id: tenant.uuid,
                  options: tenant.properties,
               });
            } else {
               req.log(`no Tenant found for uuid(${uuid})`);

               // Q: do we return our Default entry when one can't be
               // found?

               returnDefaultTenant(cb);
            }
         })
         .catch((err) => {
            // it is possible this is run before a Tenant is resolved.
            // if that is the returned error, then we return our
            // "default" entry.

            if (err.code == "ENOTENANT") {
               returnDefaultTenant(cb);
               return;
            }
            console.log(err);
            cb(err);
         });
   },
};
