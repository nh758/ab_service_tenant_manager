/**
 * find
 * our Request handler.
 */
var config;

module.exports = {
   /**
    * Key: the cote message key we respond to.
    */
   key: "tenant_manager.find",

   /**
    * fn
    * our Request handler.
    * @param {obj} req
    *        the request object sent by the api_sails/api/controllers/tenant_manager/find.
    * @param {fn} cb
    *        a node style callback(err, results) to send data when job is finished
    */
   fn: function handler(req, cb) {
      var err;

      var config = req.config();

      // // if config not set, we have not be initialized properly.
      // if (!config) {
      //    req.log("WARN: tenant_manager.find handler not setup properly.");
      //    err = new Error("tenant_manager.find: Missing config");
      //    err.code = "EMISSINGCONFIG";
      //    err.req = req;
      //    cb(err);
      //    return;
      // }

      // // check if we are enabled
      // if (!config.enable) {
      //    // we shouldn't be getting notification.email messages
      //    req.log(
      //       "WARN: tenant_manager job received, but config.enable is false."
      //    );
      //    err = new Error("tenant_manager.find service is disabled.");
      //    err.code = "EDISABLED";
      //    cb(err);
      //    return;
      // }

      // verify required parameters in job
      var key = req.param("key");
      // if (!key) {
      //    var err2 = new Error(
      //       ".key parameter required in tenant_manager.find service."
      //    );
      //    err2.code = "EMISSINGPARAM";
      //    cb(err2);
      //    return;
      // }

      // access any Models you need

      var Tenant = req.model("Tenant");
      Tenant.find({ key: key })
         .then((list) => {
            cb(null, list[0]);
         })
         .catch(cb);
   },

   inputValidation: {
      key: {
         required: true,
         validation: { type: "string" }
      }
   }
};
