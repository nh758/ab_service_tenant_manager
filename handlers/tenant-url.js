/**
 * tenant-url
 * our Request handler.
 */
const queryFindTenantByUUID = require("../queries/findTenantByUUID.js");

module.exports = {
   /**
    * Key: the cote message key we respond to.
    */
   key: "tenant_manager.tenant-url",

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
      req.log("tenant_manager.tenant-url()");

      const uuid = req.param("uuid");

      queryFindTenantByUUID(req, uuid)
         .then((list) => {
            const tenant = list[0];

            if (tenant) {
               cb(null, {
                  url: JSON.parse(tenant.properties).url,
               });
            } else {
               req.log(`no Tenant found for uuid(${uuid})`);
            }
         })
         .catch(cb);
   },
};
