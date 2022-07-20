/**
 * find
 * our Request handler.
 */
const queryFindTenantByKey = require("../queries/findTenantByKey.js");

module.exports = {
   /**
    * Key: the cote message key we respond to.
    */
   key: "tenant_manager.find",

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
      key: { string: true, required: true },
   },

   /**
    * fn
    * our Request handler.
    * @param {obj} req
    *        the request object sent by the api_sails/api/controllers/tenant_manager/find.
    * @param {fn} cb
    *        a node style callback(err, results) to send data when job is finished
    */
   fn: function handler(req, cb) {
      // verify required parameters in job
      var key = req.param("key");

      queryFindTenantByKey(req, key)
         .then((list) => {
            cb(null, list[0]);
         })
         .catch(cb);
   },
};
