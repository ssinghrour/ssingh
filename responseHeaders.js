/** Response headers Middleware
* @author Sarvesh Singhrour
* @description any middleware to write response headers in res.
*/

module.exports = {
  /**
  * @description Set X-Response-Time header, time taken in processing the whole request
  */
  setResponseTime : function(){
    return async function(ctx, next){
      const start = Date.now();
      await next();
      const ms = Date.now() - start;
      ctx.set('X-Response-Time' , `${ms}ms`);
    }
  }
}
