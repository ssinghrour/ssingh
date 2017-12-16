/** Router Middleware
* @author Sarvesh Singhrour
* @description Some sample routers to explore koa-compose
*/

module.exports = {
  /**
  * @description If path is equal to '/random', return a random number
  */
  random : function(){
    return async function(ctx, next){
      if ('/random' == ctx.path) {
        ctx.body = Math.floor(Math.random() * 100);
      } else {
        await next();
      }
    }
  },
  pi : function(){
    return async function(ctx, next){
      if ('/pi' == ctx.path) {
        ctx.body = String(Math.PI);
      } else {
        await next();
      }
    }
  }
}
