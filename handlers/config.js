/**
 * config
 * our Request handler.
 */
var config;

module.exports = {
   /**
    * Key: the cote message key we respond to.
    */
   key: "tenant_manager.config",

   /**
    * fn
    * our Request handler.
    * @param {obj} req
    *        the request object sent by the api_sails/api/controllers/tenant_manager/config.
    * @param {fn} cb
    *        a node style callback(err, results) to send data when job is finished
    */
   fn: function handler(req, cb) {
      var err;

      req.log("tenant_manager.config()");

      // var config = req.config();

      var uuid = req.param("uuid");
      if (!uuid) {
         var err = new Error("missing param: uuid");

         cb(err);
         return;
      }

      // access any Models you need
      var Tenant = req.model("Tenant");
      Tenant.find({ uuid })
         .then((list) => {
            var tenant = list[0];
            if (tenant) {
               cb(null, {
                  id: tenant.uuid,
                  options: tenant.properties
               });
            } else {
               req.log(`no Tenant found for uuid(${uuid})`);

               // Q: do we return our Default entry when one can't be
               // found?

               cb(null, {
                  id: "default",
                  options: {
                     title: "AppBuilder",
                     textClickToEnter: "Click to Enter the AppBuilder"
                  }
               });
            }
         })
         .catch(cb);
   },

   /**
    * inputValidation
    * define the expected inputs to this service handler:
    * Format:
    * "parameterName" : {
    *    "required" : {bool},  // default = false
    *    "validation" : {fn|obj}, 
    *                   {fn} a function(value) that returns true/false if 
    *                        the value if valid.
    *                   {obj}: .type: {string} the data type
    }
    */
   inputValidation: {
      uuid: {
         required: true,
         validation: { type: "string" }
      }
   }
};
