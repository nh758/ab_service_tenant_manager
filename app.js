//
// tenant_manager
// (AppBuilder) A service to manage the site&#39;s tenants
//
const AB = require("@digiserve/ab-utils");

var controller = AB.controller("tenant_manager");
// controller.afterStartup((cb)=>{ return cb(/* err */) });
// controller.beforeShutdown((cb)=>{ return cb(/* err */) });
controller.init();
