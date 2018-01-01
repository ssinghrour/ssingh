/** Logger Middleware Class
* @author Sarvesh Singhrour
*/

module.exports = {
  /** Method to console log every request method and url, uses promise
  * @param {string} format
  * @yields {middleware}
  * @description Console.log HTTP method and URL
  */
  logMethod : function(format){
    format = format || ':method ":url"';

    return async function(ctx, next){
      const str = format
        .replace(':method', ctx.method)
        .replace(':url', ctx.url);
      console.log(str);

      await next();
    }
  },
  /** Method to console log every request method and url, uses promise
  * @param {string} format
  * @yields {middleware}
  * @description Console.log HTTP method and URL
  */
  logTime : function(){
    return async function(ctx, next){
      const start = Date.now();
      await next();
      const ms = Date.now() - start;
      console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    }
  }
}
