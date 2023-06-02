/*
 * tenant_manager
 */
const AB = require("@digiserve/ab-utils");
const env = AB.defaults.env;

module.exports = {
   tenant_manager: {
      /*************************************************************************/
      /* enable: {bool} is this service active?                                */
      /*************************************************************************/
      enable: env("TENANT_MANAGER_ENABLE", true),

      /*************************************************************************/
      /* siteTenantID: {string} the uuid of the "Admin" Tenant.                */
      /* this resolves to the Tenant Manager Site, and is established on       */
      /* install.  It can be reconfigured ... but only if you know what you    */
      /* are doing.                                                            */
      /* You have been warned ...                                              */
      /*************************************************************************/
      siteTenantID: env("TENANT_MANAGER_TENANT_ID", "admin"),
   },

   /**
    * datastores:
    * Sails style DB connection settings
    */
   datastores: AB.defaults.datastores(),
};
