const AB = require("ab-utils");

module.exports = function (req, data) {
   return new Promise((resolve, reject) => {
      let tenantDB = "`appbuilder-admin`";
      // {string} tenantDB
      // the DB name of the administrative tenant that manages the other
      // tenants.
      // By default it is `appbuilder-admin` but this value can be over
      // ridden in the  req.connections().site.database  setting.

      let conn = req.connections();
      if (conn.site && conn.site.database)
         tenantDB = `\`${conn.site.database}\``;
      tenantDB += ".";

      let sql = `INSERT INTO ${tenantDB}\`site_tenant\` ( \`uuid\`, \`key\`, \`properties\` ) VALUES ( ?, ?, ? );`;

      var values = [];
      values.push(AB.uuid()); // uuid
      values.push(data.key); // key
      values.push(`{ "title":"${data.title}", "authType":"${data.authType}" }`);

      req.query(sql, values, (error, results, fields) => {
         if (error) {
            req.log(sql);
            reject(error);
         } else {
            resolve(results);
         }
      });
   });
};
