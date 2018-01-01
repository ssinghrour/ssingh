/** Router Middleware
* @author Sarvesh Singhrour
* @description Some sample routers to explore koa-compose
*/

module.exports = {
  /**
  * @description If path is '/' or '/home', return home page
  */
  home : function(){
    return async function(ctx, next){
      if('/' == ctx.path || '/home' == ctx.path){
        ctx.body = 'You have reached home page';
      }
      else{
        await next();
      }
    }
  },
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
  /**
  * @description If path is equal to '/pi', value of pi
  */
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
