goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29288 = arguments.length;
switch (G__29288) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29304 = (function (f,blockable,meta29305){
this.f = f;
this.blockable = blockable;
this.meta29305 = meta29305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29306,meta29305__$1){
var self__ = this;
var _29306__$1 = this;
return (new cljs.core.async.t_cljs$core$async29304(self__.f,self__.blockable,meta29305__$1));
}));

(cljs.core.async.t_cljs$core$async29304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29306){
var self__ = this;
var _29306__$1 = this;
return self__.meta29305;
}));

(cljs.core.async.t_cljs$core$async29304.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29304.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29305","meta29305",-268623104,null)], null);
}));

(cljs.core.async.t_cljs$core$async29304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29304");

(cljs.core.async.t_cljs$core$async29304.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29304.
 */
cljs.core.async.__GT_t_cljs$core$async29304 = (function cljs$core$async$__GT_t_cljs$core$async29304(f__$1,blockable__$1,meta29305){
return (new cljs.core.async.t_cljs$core$async29304(f__$1,blockable__$1,meta29305));
});

}

return (new cljs.core.async.t_cljs$core$async29304(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29350 = arguments.length;
switch (G__29350) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29361 = arguments.length;
switch (G__29361) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29374 = arguments.length;
switch (G__29374) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31884 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31884) : fn1.call(null,val_31884));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31884) : fn1.call(null,val_31884));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29385 = arguments.length;
switch (G__29385) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___31925 = n;
var x_31926 = (0);
while(true){
if((x_31926 < n__4666__auto___31925)){
(a[x_31926] = x_31926);

var G__31928 = (x_31926 + (1));
x_31926 = G__31928;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29386 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29386 = (function (flag,meta29387){
this.flag = flag;
this.meta29387 = meta29387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29388,meta29387__$1){
var self__ = this;
var _29388__$1 = this;
return (new cljs.core.async.t_cljs$core$async29386(self__.flag,meta29387__$1));
}));

(cljs.core.async.t_cljs$core$async29386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29388){
var self__ = this;
var _29388__$1 = this;
return self__.meta29387;
}));

(cljs.core.async.t_cljs$core$async29386.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29386.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29387","meta29387",161787948,null)], null);
}));

(cljs.core.async.t_cljs$core$async29386.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29386");

(cljs.core.async.t_cljs$core$async29386.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29386");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29386.
 */
cljs.core.async.__GT_t_cljs$core$async29386 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29386(flag__$1,meta29387){
return (new cljs.core.async.t_cljs$core$async29386(flag__$1,meta29387));
});

}

return (new cljs.core.async.t_cljs$core$async29386(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29395 = (function (flag,cb,meta29396){
this.flag = flag;
this.cb = cb;
this.meta29396 = meta29396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29397,meta29396__$1){
var self__ = this;
var _29397__$1 = this;
return (new cljs.core.async.t_cljs$core$async29395(self__.flag,self__.cb,meta29396__$1));
}));

(cljs.core.async.t_cljs$core$async29395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29397){
var self__ = this;
var _29397__$1 = this;
return self__.meta29396;
}));

(cljs.core.async.t_cljs$core$async29395.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29395.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29396","meta29396",-1282816325,null)], null);
}));

(cljs.core.async.t_cljs$core$async29395.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29395");

(cljs.core.async.t_cljs$core$async29395.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29395");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29395.
 */
cljs.core.async.__GT_t_cljs$core$async29395 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29395(flag__$1,cb__$1,meta29396){
return (new cljs.core.async.t_cljs$core$async29395(flag__$1,cb__$1,meta29396));
});

}

return (new cljs.core.async.t_cljs$core$async29395(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29406_SHARP_){
var G__29423 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29406_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29423) : fret.call(null,G__29423));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29408_SHARP_){
var G__29424 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29408_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29424) : fret.call(null,G__29424));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31958 = (i + (1));
i = G__31958;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___31962 = arguments.length;
var i__4790__auto___31963 = (0);
while(true){
if((i__4790__auto___31963 < len__4789__auto___31962)){
args__4795__auto__.push((arguments[i__4790__auto___31963]));

var G__31964 = (i__4790__auto___31963 + (1));
i__4790__auto___31963 = G__31964;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29456){
var map__29457 = p__29456;
var map__29457__$1 = (((((!((map__29457 == null))))?(((((map__29457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29457):map__29457);
var opts = map__29457__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29442){
var G__29443 = cljs.core.first(seq29442);
var seq29442__$1 = cljs.core.next(seq29442);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29443,seq29442__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29486 = arguments.length;
switch (G__29486) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29197__auto___31988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_29586){
var state_val_29587 = (state_29586[(1)]);
if((state_val_29587 === (7))){
var inst_29572 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29593_31989 = state_29586__$1;
(statearr_29593_31989[(2)] = inst_29572);

(statearr_29593_31989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (1))){
var state_29586__$1 = state_29586;
var statearr_29598_31995 = state_29586__$1;
(statearr_29598_31995[(2)] = null);

(statearr_29598_31995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (4))){
var inst_29542 = (state_29586[(7)]);
var inst_29542__$1 = (state_29586[(2)]);
var inst_29546 = (inst_29542__$1 == null);
var state_29586__$1 = (function (){var statearr_29600 = state_29586;
(statearr_29600[(7)] = inst_29542__$1);

return statearr_29600;
})();
if(cljs.core.truth_(inst_29546)){
var statearr_29601_32000 = state_29586__$1;
(statearr_29601_32000[(1)] = (5));

} else {
var statearr_29602_32002 = state_29586__$1;
(statearr_29602_32002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (13))){
var state_29586__$1 = state_29586;
var statearr_29604_32003 = state_29586__$1;
(statearr_29604_32003[(2)] = null);

(statearr_29604_32003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (6))){
var inst_29542 = (state_29586[(7)]);
var state_29586__$1 = state_29586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29586__$1,(11),to,inst_29542);
} else {
if((state_val_29587 === (3))){
var inst_29578 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29586__$1,inst_29578);
} else {
if((state_val_29587 === (12))){
var state_29586__$1 = state_29586;
var statearr_29621_32010 = state_29586__$1;
(statearr_29621_32010[(2)] = null);

(statearr_29621_32010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (2))){
var state_29586__$1 = state_29586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29586__$1,(4),from);
} else {
if((state_val_29587 === (11))){
var inst_29562 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
if(cljs.core.truth_(inst_29562)){
var statearr_29626_32017 = state_29586__$1;
(statearr_29626_32017[(1)] = (12));

} else {
var statearr_29627_32018 = state_29586__$1;
(statearr_29627_32018[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (9))){
var state_29586__$1 = state_29586;
var statearr_29628_32020 = state_29586__$1;
(statearr_29628_32020[(2)] = null);

(statearr_29628_32020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (5))){
var state_29586__$1 = state_29586;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29629_32022 = state_29586__$1;
(statearr_29629_32022[(1)] = (8));

} else {
var statearr_29631_32025 = state_29586__$1;
(statearr_29631_32025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (14))){
var inst_29570 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29632_32030 = state_29586__$1;
(statearr_29632_32030[(2)] = inst_29570);

(statearr_29632_32030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (10))){
var inst_29559 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29633_32033 = state_29586__$1;
(statearr_29633_32033[(2)] = inst_29559);

(statearr_29633_32033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (8))){
var inst_29556 = cljs.core.async.close_BANG_(to);
var state_29586__$1 = state_29586;
var statearr_29635_32063 = state_29586__$1;
(statearr_29635_32063[(2)] = inst_29556);

(statearr_29635_32063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28820__auto__ = null;
var cljs$core$async$state_machine__28820__auto____0 = (function (){
var statearr_29636 = [null,null,null,null,null,null,null,null];
(statearr_29636[(0)] = cljs$core$async$state_machine__28820__auto__);

(statearr_29636[(1)] = (1));

return statearr_29636;
});
var cljs$core$async$state_machine__28820__auto____1 = (function (state_29586){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_29586);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e29637){if((e29637 instanceof Object)){
var ex__28823__auto__ = e29637;
var statearr_29638_32071 = state_29586;
(statearr_29638_32071[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32073 = state_29586;
state_29586 = G__32073;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$state_machine__28820__auto__ = function(state_29586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28820__auto____1.call(this,state_29586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28820__auto____0;
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28820__auto____1;
return cljs$core$async$state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_29640 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_29640[(6)] = c__29197__auto___31988);

return statearr_29640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29650){
var vec__29651 = p__29650;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29651,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29651,(1),null);
var job = vec__29651;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29197__auto___32095 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_29659){
var state_val_29660 = (state_29659[(1)]);
if((state_val_29660 === (1))){
var state_29659__$1 = state_29659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29659__$1,(2),res,v);
} else {
if((state_val_29660 === (2))){
var inst_29656 = (state_29659[(2)]);
var inst_29657 = cljs.core.async.close_BANG_(res);
var state_29659__$1 = (function (){var statearr_29661 = state_29659;
(statearr_29661[(7)] = inst_29656);

return statearr_29661;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29659__$1,inst_29657);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____0 = (function (){
var statearr_29669 = [null,null,null,null,null,null,null,null];
(statearr_29669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__);

(statearr_29669[(1)] = (1));

return statearr_29669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____1 = (function (state_29659){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_29659);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e29670){if((e29670 instanceof Object)){
var ex__28823__auto__ = e29670;
var statearr_29671_32112 = state_29659;
(statearr_29671_32112[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32117 = state_29659;
state_29659 = G__32117;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__ = function(state_29659){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____1.call(this,state_29659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_29678 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_29678[(6)] = c__29197__auto___32095);

return statearr_29678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29679){
var vec__29681 = p__29679;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29681,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29681,(1),null);
var job = vec__29681;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___32129 = n;
var __32130 = (0);
while(true){
if((__32130 < n__4666__auto___32129)){
var G__29686_32132 = type;
var G__29686_32133__$1 = (((G__29686_32132 instanceof cljs.core.Keyword))?G__29686_32132.fqn:null);
switch (G__29686_32133__$1) {
case "compute":
var c__29197__auto___32139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32130,c__29197__auto___32139,G__29686_32132,G__29686_32133__$1,n__4666__auto___32129,jobs,results,process,async){
return (function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = ((function (__32130,c__29197__auto___32139,G__29686_32132,G__29686_32133__$1,n__4666__auto___32129,jobs,results,process,async){
return (function (state_29699){
var state_val_29700 = (state_29699[(1)]);
if((state_val_29700 === (1))){
var state_29699__$1 = state_29699;
var statearr_29705_32146 = state_29699__$1;
(statearr_29705_32146[(2)] = null);

(statearr_29705_32146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (2))){
var state_29699__$1 = state_29699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29699__$1,(4),jobs);
} else {
if((state_val_29700 === (3))){
var inst_29697 = (state_29699[(2)]);
var state_29699__$1 = state_29699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29699__$1,inst_29697);
} else {
if((state_val_29700 === (4))){
var inst_29689 = (state_29699[(2)]);
var inst_29690 = process(inst_29689);
var state_29699__$1 = state_29699;
if(cljs.core.truth_(inst_29690)){
var statearr_29711_32152 = state_29699__$1;
(statearr_29711_32152[(1)] = (5));

} else {
var statearr_29712_32153 = state_29699__$1;
(statearr_29712_32153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (5))){
var state_29699__$1 = state_29699;
var statearr_29713_32154 = state_29699__$1;
(statearr_29713_32154[(2)] = null);

(statearr_29713_32154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (6))){
var state_29699__$1 = state_29699;
var statearr_29714_32159 = state_29699__$1;
(statearr_29714_32159[(2)] = null);

(statearr_29714_32159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (7))){
var inst_29695 = (state_29699[(2)]);
var state_29699__$1 = state_29699;
var statearr_29715_32160 = state_29699__$1;
(statearr_29715_32160[(2)] = inst_29695);

(statearr_29715_32160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32130,c__29197__auto___32139,G__29686_32132,G__29686_32133__$1,n__4666__auto___32129,jobs,results,process,async))
;
return ((function (__32130,switch__28819__auto__,c__29197__auto___32139,G__29686_32132,G__29686_32133__$1,n__4666__auto___32129,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____0 = (function (){
var statearr_29716 = [null,null,null,null,null,null,null];
(statearr_29716[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__);

(statearr_29716[(1)] = (1));

return statearr_29716;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____1 = (function (state_29699){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_29699);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e29719){if((e29719 instanceof Object)){
var ex__28823__auto__ = e29719;
var statearr_29724_32169 = state_29699;
(statearr_29724_32169[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29719;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32173 = state_29699;
state_29699 = G__32173;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__ = function(state_29699){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____1.call(this,state_29699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__;
})()
;})(__32130,switch__28819__auto__,c__29197__auto___32139,G__29686_32132,G__29686_32133__$1,n__4666__auto___32129,jobs,results,process,async))
})();
var state__29199__auto__ = (function (){var statearr_29725 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_29725[(6)] = c__29197__auto___32139);

return statearr_29725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
});})(__32130,c__29197__auto___32139,G__29686_32132,G__29686_32133__$1,n__4666__auto___32129,jobs,results,process,async))
);


break;
case "async":
var c__29197__auto___32180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32130,c__29197__auto___32180,G__29686_32132,G__29686_32133__$1,n__4666__auto___32129,jobs,results,process,async){
return (function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = ((function (__32130,c__29197__auto___32180,G__29686_32132,G__29686_32133__$1,n__4666__auto___32129,jobs,results,process,async){
return (function (state_29743){
var state_val_29744 = (state_29743[(1)]);
if((state_val_29744 === (1))){
var state_29743__$1 = state_29743;
var statearr_29745_32184 = state_29743__$1;
(statearr_29745_32184[(2)] = null);

(statearr_29745_32184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (2))){
var state_29743__$1 = state_29743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29743__$1,(4),jobs);
} else {
if((state_val_29744 === (3))){
var inst_29741 = (state_29743[(2)]);
var state_29743__$1 = state_29743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29743__$1,inst_29741);
} else {
if((state_val_29744 === (4))){
var inst_29733 = (state_29743[(2)]);
var inst_29734 = async(inst_29733);
var state_29743__$1 = state_29743;
if(cljs.core.truth_(inst_29734)){
var statearr_29748_32197 = state_29743__$1;
(statearr_29748_32197[(1)] = (5));

} else {
var statearr_29749_32199 = state_29743__$1;
(statearr_29749_32199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (5))){
var state_29743__$1 = state_29743;
var statearr_29750_32204 = state_29743__$1;
(statearr_29750_32204[(2)] = null);

(statearr_29750_32204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (6))){
var state_29743__$1 = state_29743;
var statearr_29753_32205 = state_29743__$1;
(statearr_29753_32205[(2)] = null);

(statearr_29753_32205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (7))){
var inst_29739 = (state_29743[(2)]);
var state_29743__$1 = state_29743;
var statearr_29754_32206 = state_29743__$1;
(statearr_29754_32206[(2)] = inst_29739);

(statearr_29754_32206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32130,c__29197__auto___32180,G__29686_32132,G__29686_32133__$1,n__4666__auto___32129,jobs,results,process,async))
;
return ((function (__32130,switch__28819__auto__,c__29197__auto___32180,G__29686_32132,G__29686_32133__$1,n__4666__auto___32129,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____0 = (function (){
var statearr_29755 = [null,null,null,null,null,null,null];
(statearr_29755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__);

(statearr_29755[(1)] = (1));

return statearr_29755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____1 = (function (state_29743){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_29743);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e29757){if((e29757 instanceof Object)){
var ex__28823__auto__ = e29757;
var statearr_29758_32212 = state_29743;
(statearr_29758_32212[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32213 = state_29743;
state_29743 = G__32213;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__ = function(state_29743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____1.call(this,state_29743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__;
})()
;})(__32130,switch__28819__auto__,c__29197__auto___32180,G__29686_32132,G__29686_32133__$1,n__4666__auto___32129,jobs,results,process,async))
})();
var state__29199__auto__ = (function (){var statearr_29759 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_29759[(6)] = c__29197__auto___32180);

return statearr_29759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
});})(__32130,c__29197__auto___32180,G__29686_32132,G__29686_32133__$1,n__4666__auto___32129,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29686_32133__$1)].join('')));

}

var G__32219 = (__32130 + (1));
__32130 = G__32219;
continue;
} else {
}
break;
}

var c__29197__auto___32224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_29786){
var state_val_29787 = (state_29786[(1)]);
if((state_val_29787 === (7))){
var inst_29782 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29792_32230 = state_29786__$1;
(statearr_29792_32230[(2)] = inst_29782);

(statearr_29792_32230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (1))){
var state_29786__$1 = state_29786;
var statearr_29793_32231 = state_29786__$1;
(statearr_29793_32231[(2)] = null);

(statearr_29793_32231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (4))){
var inst_29766 = (state_29786[(7)]);
var inst_29766__$1 = (state_29786[(2)]);
var inst_29767 = (inst_29766__$1 == null);
var state_29786__$1 = (function (){var statearr_29794 = state_29786;
(statearr_29794[(7)] = inst_29766__$1);

return statearr_29794;
})();
if(cljs.core.truth_(inst_29767)){
var statearr_29795_32232 = state_29786__$1;
(statearr_29795_32232[(1)] = (5));

} else {
var statearr_29797_32233 = state_29786__$1;
(statearr_29797_32233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (6))){
var inst_29771 = (state_29786[(8)]);
var inst_29766 = (state_29786[(7)]);
var inst_29771__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29773 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29774 = [inst_29766,inst_29771__$1];
var inst_29775 = (new cljs.core.PersistentVector(null,2,(5),inst_29773,inst_29774,null));
var state_29786__$1 = (function (){var statearr_29798 = state_29786;
(statearr_29798[(8)] = inst_29771__$1);

return statearr_29798;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29786__$1,(8),jobs,inst_29775);
} else {
if((state_val_29787 === (3))){
var inst_29784 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29786__$1,inst_29784);
} else {
if((state_val_29787 === (2))){
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29786__$1,(4),from);
} else {
if((state_val_29787 === (9))){
var inst_29779 = (state_29786[(2)]);
var state_29786__$1 = (function (){var statearr_29803 = state_29786;
(statearr_29803[(9)] = inst_29779);

return statearr_29803;
})();
var statearr_29804_32235 = state_29786__$1;
(statearr_29804_32235[(2)] = null);

(statearr_29804_32235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (5))){
var inst_29769 = cljs.core.async.close_BANG_(jobs);
var state_29786__$1 = state_29786;
var statearr_29805_32236 = state_29786__$1;
(statearr_29805_32236[(2)] = inst_29769);

(statearr_29805_32236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (8))){
var inst_29771 = (state_29786[(8)]);
var inst_29777 = (state_29786[(2)]);
var state_29786__$1 = (function (){var statearr_29806 = state_29786;
(statearr_29806[(10)] = inst_29777);

return statearr_29806;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29786__$1,(9),results,inst_29771);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____0 = (function (){
var statearr_29808 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__);

(statearr_29808[(1)] = (1));

return statearr_29808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____1 = (function (state_29786){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_29786);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e29809){if((e29809 instanceof Object)){
var ex__28823__auto__ = e29809;
var statearr_29810_32248 = state_29786;
(statearr_29810_32248[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29809;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32253 = state_29786;
state_29786 = G__32253;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__ = function(state_29786){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____1.call(this,state_29786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_29811 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_29811[(6)] = c__29197__auto___32224);

return statearr_29811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));


var c__29197__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_29850){
var state_val_29851 = (state_29850[(1)]);
if((state_val_29851 === (7))){
var inst_29846 = (state_29850[(2)]);
var state_29850__$1 = state_29850;
var statearr_29853_32255 = state_29850__$1;
(statearr_29853_32255[(2)] = inst_29846);

(statearr_29853_32255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (20))){
var state_29850__$1 = state_29850;
var statearr_29854_32256 = state_29850__$1;
(statearr_29854_32256[(2)] = null);

(statearr_29854_32256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (1))){
var state_29850__$1 = state_29850;
var statearr_29857_32257 = state_29850__$1;
(statearr_29857_32257[(2)] = null);

(statearr_29857_32257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (4))){
var inst_29814 = (state_29850[(7)]);
var inst_29814__$1 = (state_29850[(2)]);
var inst_29815 = (inst_29814__$1 == null);
var state_29850__$1 = (function (){var statearr_29860 = state_29850;
(statearr_29860[(7)] = inst_29814__$1);

return statearr_29860;
})();
if(cljs.core.truth_(inst_29815)){
var statearr_29862_32260 = state_29850__$1;
(statearr_29862_32260[(1)] = (5));

} else {
var statearr_29864_32261 = state_29850__$1;
(statearr_29864_32261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (15))){
var inst_29828 = (state_29850[(8)]);
var state_29850__$1 = state_29850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29850__$1,(18),to,inst_29828);
} else {
if((state_val_29851 === (21))){
var inst_29841 = (state_29850[(2)]);
var state_29850__$1 = state_29850;
var statearr_29865_32262 = state_29850__$1;
(statearr_29865_32262[(2)] = inst_29841);

(statearr_29865_32262[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (13))){
var inst_29843 = (state_29850[(2)]);
var state_29850__$1 = (function (){var statearr_29866 = state_29850;
(statearr_29866[(9)] = inst_29843);

return statearr_29866;
})();
var statearr_29867_32263 = state_29850__$1;
(statearr_29867_32263[(2)] = null);

(statearr_29867_32263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (6))){
var inst_29814 = (state_29850[(7)]);
var state_29850__$1 = state_29850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29850__$1,(11),inst_29814);
} else {
if((state_val_29851 === (17))){
var inst_29836 = (state_29850[(2)]);
var state_29850__$1 = state_29850;
if(cljs.core.truth_(inst_29836)){
var statearr_29872_32264 = state_29850__$1;
(statearr_29872_32264[(1)] = (19));

} else {
var statearr_29873_32265 = state_29850__$1;
(statearr_29873_32265[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (3))){
var inst_29848 = (state_29850[(2)]);
var state_29850__$1 = state_29850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29850__$1,inst_29848);
} else {
if((state_val_29851 === (12))){
var inst_29825 = (state_29850[(10)]);
var state_29850__$1 = state_29850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29850__$1,(14),inst_29825);
} else {
if((state_val_29851 === (2))){
var state_29850__$1 = state_29850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29850__$1,(4),results);
} else {
if((state_val_29851 === (19))){
var state_29850__$1 = state_29850;
var statearr_29877_32267 = state_29850__$1;
(statearr_29877_32267[(2)] = null);

(statearr_29877_32267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (11))){
var inst_29825 = (state_29850[(2)]);
var state_29850__$1 = (function (){var statearr_29881 = state_29850;
(statearr_29881[(10)] = inst_29825);

return statearr_29881;
})();
var statearr_29882_32269 = state_29850__$1;
(statearr_29882_32269[(2)] = null);

(statearr_29882_32269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (9))){
var state_29850__$1 = state_29850;
var statearr_29886_32274 = state_29850__$1;
(statearr_29886_32274[(2)] = null);

(statearr_29886_32274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (5))){
var state_29850__$1 = state_29850;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29888_32276 = state_29850__$1;
(statearr_29888_32276[(1)] = (8));

} else {
var statearr_29893_32277 = state_29850__$1;
(statearr_29893_32277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (14))){
var inst_29828 = (state_29850[(8)]);
var inst_29828__$1 = (state_29850[(2)]);
var inst_29829 = (inst_29828__$1 == null);
var inst_29830 = cljs.core.not(inst_29829);
var state_29850__$1 = (function (){var statearr_29895 = state_29850;
(statearr_29895[(8)] = inst_29828__$1);

return statearr_29895;
})();
if(inst_29830){
var statearr_29896_32278 = state_29850__$1;
(statearr_29896_32278[(1)] = (15));

} else {
var statearr_29897_32279 = state_29850__$1;
(statearr_29897_32279[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (16))){
var state_29850__$1 = state_29850;
var statearr_29901_32280 = state_29850__$1;
(statearr_29901_32280[(2)] = false);

(statearr_29901_32280[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (10))){
var inst_29821 = (state_29850[(2)]);
var state_29850__$1 = state_29850;
var statearr_29902_32282 = state_29850__$1;
(statearr_29902_32282[(2)] = inst_29821);

(statearr_29902_32282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (18))){
var inst_29833 = (state_29850[(2)]);
var state_29850__$1 = state_29850;
var statearr_29906_32284 = state_29850__$1;
(statearr_29906_32284[(2)] = inst_29833);

(statearr_29906_32284[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29851 === (8))){
var inst_29818 = cljs.core.async.close_BANG_(to);
var state_29850__$1 = state_29850;
var statearr_29907_32286 = state_29850__$1;
(statearr_29907_32286[(2)] = inst_29818);

(statearr_29907_32286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____0 = (function (){
var statearr_29912 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29912[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__);

(statearr_29912[(1)] = (1));

return statearr_29912;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____1 = (function (state_29850){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_29850);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e29913){if((e29913 instanceof Object)){
var ex__28823__auto__ = e29913;
var statearr_29914_32289 = state_29850;
(statearr_29914_32289[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29913;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32290 = state_29850;
state_29850 = G__32290;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__ = function(state_29850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____1.call(this,state_29850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_29915 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_29915[(6)] = c__29197__auto__);

return statearr_29915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));

return c__29197__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29917 = arguments.length;
switch (G__29917) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29928 = arguments.length;
switch (G__29928) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29945 = arguments.length;
switch (G__29945) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29197__auto___32311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_29974){
var state_val_29975 = (state_29974[(1)]);
if((state_val_29975 === (7))){
var inst_29970 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
var statearr_29982_32316 = state_29974__$1;
(statearr_29982_32316[(2)] = inst_29970);

(statearr_29982_32316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (1))){
var state_29974__$1 = state_29974;
var statearr_29983_32317 = state_29974__$1;
(statearr_29983_32317[(2)] = null);

(statearr_29983_32317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (4))){
var inst_29948 = (state_29974[(7)]);
var inst_29948__$1 = (state_29974[(2)]);
var inst_29952 = (inst_29948__$1 == null);
var state_29974__$1 = (function (){var statearr_29984 = state_29974;
(statearr_29984[(7)] = inst_29948__$1);

return statearr_29984;
})();
if(cljs.core.truth_(inst_29952)){
var statearr_29985_32318 = state_29974__$1;
(statearr_29985_32318[(1)] = (5));

} else {
var statearr_29986_32319 = state_29974__$1;
(statearr_29986_32319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (13))){
var state_29974__$1 = state_29974;
var statearr_29988_32320 = state_29974__$1;
(statearr_29988_32320[(2)] = null);

(statearr_29988_32320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (6))){
var inst_29948 = (state_29974[(7)]);
var inst_29957 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29948) : p.call(null,inst_29948));
var state_29974__$1 = state_29974;
if(cljs.core.truth_(inst_29957)){
var statearr_29989_32321 = state_29974__$1;
(statearr_29989_32321[(1)] = (9));

} else {
var statearr_29990_32322 = state_29974__$1;
(statearr_29990_32322[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (3))){
var inst_29972 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29974__$1,inst_29972);
} else {
if((state_val_29975 === (12))){
var state_29974__$1 = state_29974;
var statearr_29991_32325 = state_29974__$1;
(statearr_29991_32325[(2)] = null);

(statearr_29991_32325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (2))){
var state_29974__$1 = state_29974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29974__$1,(4),ch);
} else {
if((state_val_29975 === (11))){
var inst_29948 = (state_29974[(7)]);
var inst_29961 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29974__$1,(8),inst_29961,inst_29948);
} else {
if((state_val_29975 === (9))){
var state_29974__$1 = state_29974;
var statearr_29993_32326 = state_29974__$1;
(statearr_29993_32326[(2)] = tc);

(statearr_29993_32326[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (5))){
var inst_29954 = cljs.core.async.close_BANG_(tc);
var inst_29955 = cljs.core.async.close_BANG_(fc);
var state_29974__$1 = (function (){var statearr_29994 = state_29974;
(statearr_29994[(8)] = inst_29954);

return statearr_29994;
})();
var statearr_29995_32328 = state_29974__$1;
(statearr_29995_32328[(2)] = inst_29955);

(statearr_29995_32328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (14))){
var inst_29968 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
var statearr_29996_32329 = state_29974__$1;
(statearr_29996_32329[(2)] = inst_29968);

(statearr_29996_32329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (10))){
var state_29974__$1 = state_29974;
var statearr_29998_32330 = state_29974__$1;
(statearr_29998_32330[(2)] = fc);

(statearr_29998_32330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (8))){
var inst_29963 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
if(cljs.core.truth_(inst_29963)){
var statearr_29999_32331 = state_29974__$1;
(statearr_29999_32331[(1)] = (12));

} else {
var statearr_30000_32334 = state_29974__$1;
(statearr_30000_32334[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28820__auto__ = null;
var cljs$core$async$state_machine__28820__auto____0 = (function (){
var statearr_30006 = [null,null,null,null,null,null,null,null,null];
(statearr_30006[(0)] = cljs$core$async$state_machine__28820__auto__);

(statearr_30006[(1)] = (1));

return statearr_30006;
});
var cljs$core$async$state_machine__28820__auto____1 = (function (state_29974){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_29974);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e30007){if((e30007 instanceof Object)){
var ex__28823__auto__ = e30007;
var statearr_30008_32336 = state_29974;
(statearr_30008_32336[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30007;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32337 = state_29974;
state_29974 = G__32337;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$state_machine__28820__auto__ = function(state_29974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28820__auto____1.call(this,state_29974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28820__auto____0;
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28820__auto____1;
return cljs$core$async$state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_30011 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_30011[(6)] = c__29197__auto___32311);

return statearr_30011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29197__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_30035){
var state_val_30036 = (state_30035[(1)]);
if((state_val_30036 === (7))){
var inst_30031 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
var statearr_30038_32345 = state_30035__$1;
(statearr_30038_32345[(2)] = inst_30031);

(statearr_30038_32345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (1))){
var inst_30013 = init;
var state_30035__$1 = (function (){var statearr_30039 = state_30035;
(statearr_30039[(7)] = inst_30013);

return statearr_30039;
})();
var statearr_30040_32353 = state_30035__$1;
(statearr_30040_32353[(2)] = null);

(statearr_30040_32353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (4))){
var inst_30017 = (state_30035[(8)]);
var inst_30017__$1 = (state_30035[(2)]);
var inst_30018 = (inst_30017__$1 == null);
var state_30035__$1 = (function (){var statearr_30041 = state_30035;
(statearr_30041[(8)] = inst_30017__$1);

return statearr_30041;
})();
if(cljs.core.truth_(inst_30018)){
var statearr_30042_32361 = state_30035__$1;
(statearr_30042_32361[(1)] = (5));

} else {
var statearr_30045_32365 = state_30035__$1;
(statearr_30045_32365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (6))){
var inst_30022 = (state_30035[(9)]);
var inst_30017 = (state_30035[(8)]);
var inst_30013 = (state_30035[(7)]);
var inst_30022__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30013,inst_30017) : f.call(null,inst_30013,inst_30017));
var inst_30023 = cljs.core.reduced_QMARK_(inst_30022__$1);
var state_30035__$1 = (function (){var statearr_30048 = state_30035;
(statearr_30048[(9)] = inst_30022__$1);

return statearr_30048;
})();
if(inst_30023){
var statearr_30049_32373 = state_30035__$1;
(statearr_30049_32373[(1)] = (8));

} else {
var statearr_30051_32378 = state_30035__$1;
(statearr_30051_32378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (3))){
var inst_30033 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30035__$1,inst_30033);
} else {
if((state_val_30036 === (2))){
var state_30035__$1 = state_30035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30035__$1,(4),ch);
} else {
if((state_val_30036 === (9))){
var inst_30022 = (state_30035[(9)]);
var inst_30013 = inst_30022;
var state_30035__$1 = (function (){var statearr_30054 = state_30035;
(statearr_30054[(7)] = inst_30013);

return statearr_30054;
})();
var statearr_30056_32387 = state_30035__$1;
(statearr_30056_32387[(2)] = null);

(statearr_30056_32387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (5))){
var inst_30013 = (state_30035[(7)]);
var state_30035__$1 = state_30035;
var statearr_30057_32393 = state_30035__$1;
(statearr_30057_32393[(2)] = inst_30013);

(statearr_30057_32393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (10))){
var inst_30029 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
var statearr_30058_32399 = state_30035__$1;
(statearr_30058_32399[(2)] = inst_30029);

(statearr_30058_32399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (8))){
var inst_30022 = (state_30035[(9)]);
var inst_30025 = cljs.core.deref(inst_30022);
var state_30035__$1 = state_30035;
var statearr_30061_32401 = state_30035__$1;
(statearr_30061_32401[(2)] = inst_30025);

(statearr_30061_32401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28820__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28820__auto____0 = (function (){
var statearr_30062 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30062[(0)] = cljs$core$async$reduce_$_state_machine__28820__auto__);

(statearr_30062[(1)] = (1));

return statearr_30062;
});
var cljs$core$async$reduce_$_state_machine__28820__auto____1 = (function (state_30035){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_30035);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e30064){if((e30064 instanceof Object)){
var ex__28823__auto__ = e30064;
var statearr_30066_32402 = state_30035;
(statearr_30066_32402[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30064;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32403 = state_30035;
state_30035 = G__32403;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28820__auto__ = function(state_30035){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28820__auto____1.call(this,state_30035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28820__auto____0;
cljs$core$async$reduce_$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28820__auto____1;
return cljs$core$async$reduce_$_state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_30070 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_30070[(6)] = c__29197__auto__);

return statearr_30070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));

return c__29197__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29197__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_30081){
var state_val_30082 = (state_30081[(1)]);
if((state_val_30082 === (1))){
var inst_30075 = cljs.core.async.reduce(f__$1,init,ch);
var state_30081__$1 = state_30081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30081__$1,(2),inst_30075);
} else {
if((state_val_30082 === (2))){
var inst_30077 = (state_30081[(2)]);
var inst_30078 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30077) : f__$1.call(null,inst_30077));
var state_30081__$1 = state_30081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30081__$1,inst_30078);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28820__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28820__auto____0 = (function (){
var statearr_30087 = [null,null,null,null,null,null,null];
(statearr_30087[(0)] = cljs$core$async$transduce_$_state_machine__28820__auto__);

(statearr_30087[(1)] = (1));

return statearr_30087;
});
var cljs$core$async$transduce_$_state_machine__28820__auto____1 = (function (state_30081){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_30081);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e30088){if((e30088 instanceof Object)){
var ex__28823__auto__ = e30088;
var statearr_30089_32408 = state_30081;
(statearr_30089_32408[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30088;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32409 = state_30081;
state_30081 = G__32409;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28820__auto__ = function(state_30081){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28820__auto____1.call(this,state_30081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28820__auto____0;
cljs$core$async$transduce_$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28820__auto____1;
return cljs$core$async$transduce_$_state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_30090 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_30090[(6)] = c__29197__auto__);

return statearr_30090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));

return c__29197__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30099 = arguments.length;
switch (G__30099) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29197__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_30128){
var state_val_30129 = (state_30128[(1)]);
if((state_val_30129 === (7))){
var inst_30110 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
var statearr_30132_32411 = state_30128__$1;
(statearr_30132_32411[(2)] = inst_30110);

(statearr_30132_32411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (1))){
var inst_30104 = cljs.core.seq(coll);
var inst_30105 = inst_30104;
var state_30128__$1 = (function (){var statearr_30136 = state_30128;
(statearr_30136[(7)] = inst_30105);

return statearr_30136;
})();
var statearr_30137_32414 = state_30128__$1;
(statearr_30137_32414[(2)] = null);

(statearr_30137_32414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (4))){
var inst_30105 = (state_30128[(7)]);
var inst_30108 = cljs.core.first(inst_30105);
var state_30128__$1 = state_30128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30128__$1,(7),ch,inst_30108);
} else {
if((state_val_30129 === (13))){
var inst_30122 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
var statearr_30138_32418 = state_30128__$1;
(statearr_30138_32418[(2)] = inst_30122);

(statearr_30138_32418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (6))){
var inst_30113 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
if(cljs.core.truth_(inst_30113)){
var statearr_30139_32422 = state_30128__$1;
(statearr_30139_32422[(1)] = (8));

} else {
var statearr_30140_32425 = state_30128__$1;
(statearr_30140_32425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (3))){
var inst_30126 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30128__$1,inst_30126);
} else {
if((state_val_30129 === (12))){
var state_30128__$1 = state_30128;
var statearr_30143_32427 = state_30128__$1;
(statearr_30143_32427[(2)] = null);

(statearr_30143_32427[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (2))){
var inst_30105 = (state_30128[(7)]);
var state_30128__$1 = state_30128;
if(cljs.core.truth_(inst_30105)){
var statearr_30145_32429 = state_30128__$1;
(statearr_30145_32429[(1)] = (4));

} else {
var statearr_30146_32430 = state_30128__$1;
(statearr_30146_32430[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (11))){
var inst_30119 = cljs.core.async.close_BANG_(ch);
var state_30128__$1 = state_30128;
var statearr_30151_32433 = state_30128__$1;
(statearr_30151_32433[(2)] = inst_30119);

(statearr_30151_32433[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (9))){
var state_30128__$1 = state_30128;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30152_32434 = state_30128__$1;
(statearr_30152_32434[(1)] = (11));

} else {
var statearr_30153_32435 = state_30128__$1;
(statearr_30153_32435[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (5))){
var inst_30105 = (state_30128[(7)]);
var state_30128__$1 = state_30128;
var statearr_30157_32437 = state_30128__$1;
(statearr_30157_32437[(2)] = inst_30105);

(statearr_30157_32437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (10))){
var inst_30124 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
var statearr_30158_32440 = state_30128__$1;
(statearr_30158_32440[(2)] = inst_30124);

(statearr_30158_32440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (8))){
var inst_30105 = (state_30128[(7)]);
var inst_30115 = cljs.core.next(inst_30105);
var inst_30105__$1 = inst_30115;
var state_30128__$1 = (function (){var statearr_30159 = state_30128;
(statearr_30159[(7)] = inst_30105__$1);

return statearr_30159;
})();
var statearr_30160_32441 = state_30128__$1;
(statearr_30160_32441[(2)] = null);

(statearr_30160_32441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28820__auto__ = null;
var cljs$core$async$state_machine__28820__auto____0 = (function (){
var statearr_30161 = [null,null,null,null,null,null,null,null];
(statearr_30161[(0)] = cljs$core$async$state_machine__28820__auto__);

(statearr_30161[(1)] = (1));

return statearr_30161;
});
var cljs$core$async$state_machine__28820__auto____1 = (function (state_30128){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_30128);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e30162){if((e30162 instanceof Object)){
var ex__28823__auto__ = e30162;
var statearr_30163_32445 = state_30128;
(statearr_30163_32445[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30162;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32447 = state_30128;
state_30128 = G__32447;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$state_machine__28820__auto__ = function(state_30128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28820__auto____1.call(this,state_30128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28820__auto____0;
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28820__auto____1;
return cljs$core$async$state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_30171 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_30171[(6)] = c__29197__auto__);

return statearr_30171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));

return c__29197__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30210 = (function (ch,cs,meta30211){
this.ch = ch;
this.cs = cs;
this.meta30211 = meta30211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30212,meta30211__$1){
var self__ = this;
var _30212__$1 = this;
return (new cljs.core.async.t_cljs$core$async30210(self__.ch,self__.cs,meta30211__$1));
}));

(cljs.core.async.t_cljs$core$async30210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30212){
var self__ = this;
var _30212__$1 = this;
return self__.meta30211;
}));

(cljs.core.async.t_cljs$core$async30210.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30210.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30210.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30210.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30210.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30210.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30211","meta30211",-1448177473,null)], null);
}));

(cljs.core.async.t_cljs$core$async30210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30210");

(cljs.core.async.t_cljs$core$async30210.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30210.
 */
cljs.core.async.__GT_t_cljs$core$async30210 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30210(ch__$1,cs__$1,meta30211){
return (new cljs.core.async.t_cljs$core$async30210(ch__$1,cs__$1,meta30211));
});

}

return (new cljs.core.async.t_cljs$core$async30210(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29197__auto___32464 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_30381){
var state_val_30382 = (state_30381[(1)]);
if((state_val_30382 === (7))){
var inst_30377 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30383_32466 = state_30381__$1;
(statearr_30383_32466[(2)] = inst_30377);

(statearr_30383_32466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (20))){
var inst_30268 = (state_30381[(7)]);
var inst_30284 = cljs.core.first(inst_30268);
var inst_30286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30284,(0),null);
var inst_30287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30284,(1),null);
var state_30381__$1 = (function (){var statearr_30385 = state_30381;
(statearr_30385[(8)] = inst_30286);

return statearr_30385;
})();
if(cljs.core.truth_(inst_30287)){
var statearr_30386_32467 = state_30381__$1;
(statearr_30386_32467[(1)] = (22));

} else {
var statearr_30387_32468 = state_30381__$1;
(statearr_30387_32468[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (27))){
var inst_30326 = (state_30381[(9)]);
var inst_30321 = (state_30381[(10)]);
var inst_30226 = (state_30381[(11)]);
var inst_30319 = (state_30381[(12)]);
var inst_30326__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30319,inst_30321);
var inst_30327 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30326__$1,inst_30226,done);
var state_30381__$1 = (function (){var statearr_30397 = state_30381;
(statearr_30397[(9)] = inst_30326__$1);

return statearr_30397;
})();
if(cljs.core.truth_(inst_30327)){
var statearr_30398_32472 = state_30381__$1;
(statearr_30398_32472[(1)] = (30));

} else {
var statearr_30403_32473 = state_30381__$1;
(statearr_30403_32473[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (1))){
var state_30381__$1 = state_30381;
var statearr_30404_32474 = state_30381__$1;
(statearr_30404_32474[(2)] = null);

(statearr_30404_32474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (24))){
var inst_30268 = (state_30381[(7)]);
var inst_30293 = (state_30381[(2)]);
var inst_30294 = cljs.core.next(inst_30268);
var inst_30238 = inst_30294;
var inst_30239 = null;
var inst_30240 = (0);
var inst_30241 = (0);
var state_30381__$1 = (function (){var statearr_30407 = state_30381;
(statearr_30407[(13)] = inst_30238);

(statearr_30407[(14)] = inst_30240);

(statearr_30407[(15)] = inst_30293);

(statearr_30407[(16)] = inst_30239);

(statearr_30407[(17)] = inst_30241);

return statearr_30407;
})();
var statearr_30413_32478 = state_30381__$1;
(statearr_30413_32478[(2)] = null);

(statearr_30413_32478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (39))){
var state_30381__$1 = state_30381;
var statearr_30422_32479 = state_30381__$1;
(statearr_30422_32479[(2)] = null);

(statearr_30422_32479[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (4))){
var inst_30226 = (state_30381[(11)]);
var inst_30226__$1 = (state_30381[(2)]);
var inst_30227 = (inst_30226__$1 == null);
var state_30381__$1 = (function (){var statearr_30429 = state_30381;
(statearr_30429[(11)] = inst_30226__$1);

return statearr_30429;
})();
if(cljs.core.truth_(inst_30227)){
var statearr_30430_32480 = state_30381__$1;
(statearr_30430_32480[(1)] = (5));

} else {
var statearr_30431_32481 = state_30381__$1;
(statearr_30431_32481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (15))){
var inst_30238 = (state_30381[(13)]);
var inst_30240 = (state_30381[(14)]);
var inst_30239 = (state_30381[(16)]);
var inst_30241 = (state_30381[(17)]);
var inst_30262 = (state_30381[(2)]);
var inst_30263 = (inst_30241 + (1));
var tmp30418 = inst_30238;
var tmp30419 = inst_30240;
var tmp30420 = inst_30239;
var inst_30238__$1 = tmp30418;
var inst_30239__$1 = tmp30420;
var inst_30240__$1 = tmp30419;
var inst_30241__$1 = inst_30263;
var state_30381__$1 = (function (){var statearr_30432 = state_30381;
(statearr_30432[(13)] = inst_30238__$1);

(statearr_30432[(14)] = inst_30240__$1);

(statearr_30432[(18)] = inst_30262);

(statearr_30432[(16)] = inst_30239__$1);

(statearr_30432[(17)] = inst_30241__$1);

return statearr_30432;
})();
var statearr_30433_32486 = state_30381__$1;
(statearr_30433_32486[(2)] = null);

(statearr_30433_32486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (21))){
var inst_30297 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30437_32487 = state_30381__$1;
(statearr_30437_32487[(2)] = inst_30297);

(statearr_30437_32487[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (31))){
var inst_30326 = (state_30381[(9)]);
var inst_30330 = done(null);
var inst_30331 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30326);
var state_30381__$1 = (function (){var statearr_30439 = state_30381;
(statearr_30439[(19)] = inst_30330);

return statearr_30439;
})();
var statearr_30440_32491 = state_30381__$1;
(statearr_30440_32491[(2)] = inst_30331);

(statearr_30440_32491[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (32))){
var inst_30321 = (state_30381[(10)]);
var inst_30320 = (state_30381[(20)]);
var inst_30318 = (state_30381[(21)]);
var inst_30319 = (state_30381[(12)]);
var inst_30333 = (state_30381[(2)]);
var inst_30334 = (inst_30321 + (1));
var tmp30434 = inst_30320;
var tmp30435 = inst_30318;
var tmp30436 = inst_30319;
var inst_30318__$1 = tmp30435;
var inst_30319__$1 = tmp30436;
var inst_30320__$1 = tmp30434;
var inst_30321__$1 = inst_30334;
var state_30381__$1 = (function (){var statearr_30441 = state_30381;
(statearr_30441[(10)] = inst_30321__$1);

(statearr_30441[(20)] = inst_30320__$1);

(statearr_30441[(22)] = inst_30333);

(statearr_30441[(21)] = inst_30318__$1);

(statearr_30441[(12)] = inst_30319__$1);

return statearr_30441;
})();
var statearr_30442_32494 = state_30381__$1;
(statearr_30442_32494[(2)] = null);

(statearr_30442_32494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (40))){
var inst_30347 = (state_30381[(23)]);
var inst_30351 = done(null);
var inst_30352 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30347);
var state_30381__$1 = (function (){var statearr_30443 = state_30381;
(statearr_30443[(24)] = inst_30351);

return statearr_30443;
})();
var statearr_30446_32495 = state_30381__$1;
(statearr_30446_32495[(2)] = inst_30352);

(statearr_30446_32495[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (33))){
var inst_30337 = (state_30381[(25)]);
var inst_30339 = cljs.core.chunked_seq_QMARK_(inst_30337);
var state_30381__$1 = state_30381;
if(inst_30339){
var statearr_30447_32496 = state_30381__$1;
(statearr_30447_32496[(1)] = (36));

} else {
var statearr_30448_32497 = state_30381__$1;
(statearr_30448_32497[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (13))){
var inst_30252 = (state_30381[(26)]);
var inst_30259 = cljs.core.async.close_BANG_(inst_30252);
var state_30381__$1 = state_30381;
var statearr_30449_32498 = state_30381__$1;
(statearr_30449_32498[(2)] = inst_30259);

(statearr_30449_32498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (22))){
var inst_30286 = (state_30381[(8)]);
var inst_30290 = cljs.core.async.close_BANG_(inst_30286);
var state_30381__$1 = state_30381;
var statearr_30450_32502 = state_30381__$1;
(statearr_30450_32502[(2)] = inst_30290);

(statearr_30450_32502[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (36))){
var inst_30337 = (state_30381[(25)]);
var inst_30341 = cljs.core.chunk_first(inst_30337);
var inst_30342 = cljs.core.chunk_rest(inst_30337);
var inst_30344 = cljs.core.count(inst_30341);
var inst_30318 = inst_30342;
var inst_30319 = inst_30341;
var inst_30320 = inst_30344;
var inst_30321 = (0);
var state_30381__$1 = (function (){var statearr_30451 = state_30381;
(statearr_30451[(10)] = inst_30321);

(statearr_30451[(20)] = inst_30320);

(statearr_30451[(21)] = inst_30318);

(statearr_30451[(12)] = inst_30319);

return statearr_30451;
})();
var statearr_30452_32504 = state_30381__$1;
(statearr_30452_32504[(2)] = null);

(statearr_30452_32504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (41))){
var inst_30337 = (state_30381[(25)]);
var inst_30354 = (state_30381[(2)]);
var inst_30355 = cljs.core.next(inst_30337);
var inst_30318 = inst_30355;
var inst_30319 = null;
var inst_30320 = (0);
var inst_30321 = (0);
var state_30381__$1 = (function (){var statearr_30453 = state_30381;
(statearr_30453[(10)] = inst_30321);

(statearr_30453[(20)] = inst_30320);

(statearr_30453[(27)] = inst_30354);

(statearr_30453[(21)] = inst_30318);

(statearr_30453[(12)] = inst_30319);

return statearr_30453;
})();
var statearr_30454_32509 = state_30381__$1;
(statearr_30454_32509[(2)] = null);

(statearr_30454_32509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (43))){
var state_30381__$1 = state_30381;
var statearr_30455_32510 = state_30381__$1;
(statearr_30455_32510[(2)] = null);

(statearr_30455_32510[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (29))){
var inst_30363 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30456_32515 = state_30381__$1;
(statearr_30456_32515[(2)] = inst_30363);

(statearr_30456_32515[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (44))){
var inst_30374 = (state_30381[(2)]);
var state_30381__$1 = (function (){var statearr_30458 = state_30381;
(statearr_30458[(28)] = inst_30374);

return statearr_30458;
})();
var statearr_30459_32519 = state_30381__$1;
(statearr_30459_32519[(2)] = null);

(statearr_30459_32519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (6))){
var inst_30310 = (state_30381[(29)]);
var inst_30309 = cljs.core.deref(cs);
var inst_30310__$1 = cljs.core.keys(inst_30309);
var inst_30311 = cljs.core.count(inst_30310__$1);
var inst_30312 = cljs.core.reset_BANG_(dctr,inst_30311);
var inst_30317 = cljs.core.seq(inst_30310__$1);
var inst_30318 = inst_30317;
var inst_30319 = null;
var inst_30320 = (0);
var inst_30321 = (0);
var state_30381__$1 = (function (){var statearr_30460 = state_30381;
(statearr_30460[(29)] = inst_30310__$1);

(statearr_30460[(10)] = inst_30321);

(statearr_30460[(20)] = inst_30320);

(statearr_30460[(21)] = inst_30318);

(statearr_30460[(30)] = inst_30312);

(statearr_30460[(12)] = inst_30319);

return statearr_30460;
})();
var statearr_30461_32523 = state_30381__$1;
(statearr_30461_32523[(2)] = null);

(statearr_30461_32523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (28))){
var inst_30337 = (state_30381[(25)]);
var inst_30318 = (state_30381[(21)]);
var inst_30337__$1 = cljs.core.seq(inst_30318);
var state_30381__$1 = (function (){var statearr_30462 = state_30381;
(statearr_30462[(25)] = inst_30337__$1);

return statearr_30462;
})();
if(inst_30337__$1){
var statearr_30463_32527 = state_30381__$1;
(statearr_30463_32527[(1)] = (33));

} else {
var statearr_30464_32528 = state_30381__$1;
(statearr_30464_32528[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (25))){
var inst_30321 = (state_30381[(10)]);
var inst_30320 = (state_30381[(20)]);
var inst_30323 = (inst_30321 < inst_30320);
var inst_30324 = inst_30323;
var state_30381__$1 = state_30381;
if(cljs.core.truth_(inst_30324)){
var statearr_30465_32529 = state_30381__$1;
(statearr_30465_32529[(1)] = (27));

} else {
var statearr_30466_32530 = state_30381__$1;
(statearr_30466_32530[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (34))){
var state_30381__$1 = state_30381;
var statearr_30467_32534 = state_30381__$1;
(statearr_30467_32534[(2)] = null);

(statearr_30467_32534[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (17))){
var state_30381__$1 = state_30381;
var statearr_30468_32535 = state_30381__$1;
(statearr_30468_32535[(2)] = null);

(statearr_30468_32535[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (3))){
var inst_30379 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30381__$1,inst_30379);
} else {
if((state_val_30382 === (12))){
var inst_30305 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30471_32536 = state_30381__$1;
(statearr_30471_32536[(2)] = inst_30305);

(statearr_30471_32536[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (2))){
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30381__$1,(4),ch);
} else {
if((state_val_30382 === (23))){
var state_30381__$1 = state_30381;
var statearr_30474_32541 = state_30381__$1;
(statearr_30474_32541[(2)] = null);

(statearr_30474_32541[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (35))){
var inst_30361 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30477_32545 = state_30381__$1;
(statearr_30477_32545[(2)] = inst_30361);

(statearr_30477_32545[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (19))){
var inst_30268 = (state_30381[(7)]);
var inst_30273 = cljs.core.chunk_first(inst_30268);
var inst_30274 = cljs.core.chunk_rest(inst_30268);
var inst_30278 = cljs.core.count(inst_30273);
var inst_30238 = inst_30274;
var inst_30239 = inst_30273;
var inst_30240 = inst_30278;
var inst_30241 = (0);
var state_30381__$1 = (function (){var statearr_30478 = state_30381;
(statearr_30478[(13)] = inst_30238);

(statearr_30478[(14)] = inst_30240);

(statearr_30478[(16)] = inst_30239);

(statearr_30478[(17)] = inst_30241);

return statearr_30478;
})();
var statearr_30479_32549 = state_30381__$1;
(statearr_30479_32549[(2)] = null);

(statearr_30479_32549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (11))){
var inst_30238 = (state_30381[(13)]);
var inst_30268 = (state_30381[(7)]);
var inst_30268__$1 = cljs.core.seq(inst_30238);
var state_30381__$1 = (function (){var statearr_30480 = state_30381;
(statearr_30480[(7)] = inst_30268__$1);

return statearr_30480;
})();
if(inst_30268__$1){
var statearr_30481_32553 = state_30381__$1;
(statearr_30481_32553[(1)] = (16));

} else {
var statearr_30482_32554 = state_30381__$1;
(statearr_30482_32554[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (9))){
var inst_30307 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30483_32558 = state_30381__$1;
(statearr_30483_32558[(2)] = inst_30307);

(statearr_30483_32558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (5))){
var inst_30236 = cljs.core.deref(cs);
var inst_30237 = cljs.core.seq(inst_30236);
var inst_30238 = inst_30237;
var inst_30239 = null;
var inst_30240 = (0);
var inst_30241 = (0);
var state_30381__$1 = (function (){var statearr_30484 = state_30381;
(statearr_30484[(13)] = inst_30238);

(statearr_30484[(14)] = inst_30240);

(statearr_30484[(16)] = inst_30239);

(statearr_30484[(17)] = inst_30241);

return statearr_30484;
})();
var statearr_30485_32562 = state_30381__$1;
(statearr_30485_32562[(2)] = null);

(statearr_30485_32562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (14))){
var state_30381__$1 = state_30381;
var statearr_30486_32566 = state_30381__$1;
(statearr_30486_32566[(2)] = null);

(statearr_30486_32566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (45))){
var inst_30369 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30488_32567 = state_30381__$1;
(statearr_30488_32567[(2)] = inst_30369);

(statearr_30488_32567[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (26))){
var inst_30310 = (state_30381[(29)]);
var inst_30365 = (state_30381[(2)]);
var inst_30366 = cljs.core.seq(inst_30310);
var state_30381__$1 = (function (){var statearr_30491 = state_30381;
(statearr_30491[(31)] = inst_30365);

return statearr_30491;
})();
if(inst_30366){
var statearr_30492_32571 = state_30381__$1;
(statearr_30492_32571[(1)] = (42));

} else {
var statearr_30495_32575 = state_30381__$1;
(statearr_30495_32575[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (16))){
var inst_30268 = (state_30381[(7)]);
var inst_30270 = cljs.core.chunked_seq_QMARK_(inst_30268);
var state_30381__$1 = state_30381;
if(inst_30270){
var statearr_30498_32576 = state_30381__$1;
(statearr_30498_32576[(1)] = (19));

} else {
var statearr_30499_32577 = state_30381__$1;
(statearr_30499_32577[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (38))){
var inst_30358 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30500_32578 = state_30381__$1;
(statearr_30500_32578[(2)] = inst_30358);

(statearr_30500_32578[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (30))){
var state_30381__$1 = state_30381;
var statearr_30501_32579 = state_30381__$1;
(statearr_30501_32579[(2)] = null);

(statearr_30501_32579[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (10))){
var inst_30239 = (state_30381[(16)]);
var inst_30241 = (state_30381[(17)]);
var inst_30251 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30239,inst_30241);
var inst_30252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30251,(0),null);
var inst_30254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30251,(1),null);
var state_30381__$1 = (function (){var statearr_30502 = state_30381;
(statearr_30502[(26)] = inst_30252);

return statearr_30502;
})();
if(cljs.core.truth_(inst_30254)){
var statearr_30503_32581 = state_30381__$1;
(statearr_30503_32581[(1)] = (13));

} else {
var statearr_30504_32582 = state_30381__$1;
(statearr_30504_32582[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (18))){
var inst_30303 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30505_32583 = state_30381__$1;
(statearr_30505_32583[(2)] = inst_30303);

(statearr_30505_32583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (42))){
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30381__$1,(45),dchan);
} else {
if((state_val_30382 === (37))){
var inst_30337 = (state_30381[(25)]);
var inst_30226 = (state_30381[(11)]);
var inst_30347 = (state_30381[(23)]);
var inst_30347__$1 = cljs.core.first(inst_30337);
var inst_30348 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30347__$1,inst_30226,done);
var state_30381__$1 = (function (){var statearr_30506 = state_30381;
(statearr_30506[(23)] = inst_30347__$1);

return statearr_30506;
})();
if(cljs.core.truth_(inst_30348)){
var statearr_30507_32584 = state_30381__$1;
(statearr_30507_32584[(1)] = (39));

} else {
var statearr_30508_32585 = state_30381__$1;
(statearr_30508_32585[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (8))){
var inst_30240 = (state_30381[(14)]);
var inst_30241 = (state_30381[(17)]);
var inst_30243 = (inst_30241 < inst_30240);
var inst_30245 = inst_30243;
var state_30381__$1 = state_30381;
if(cljs.core.truth_(inst_30245)){
var statearr_30509_32586 = state_30381__$1;
(statearr_30509_32586[(1)] = (10));

} else {
var statearr_30510_32587 = state_30381__$1;
(statearr_30510_32587[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28820__auto__ = null;
var cljs$core$async$mult_$_state_machine__28820__auto____0 = (function (){
var statearr_30511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30511[(0)] = cljs$core$async$mult_$_state_machine__28820__auto__);

(statearr_30511[(1)] = (1));

return statearr_30511;
});
var cljs$core$async$mult_$_state_machine__28820__auto____1 = (function (state_30381){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_30381);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e30512){if((e30512 instanceof Object)){
var ex__28823__auto__ = e30512;
var statearr_30513_32588 = state_30381;
(statearr_30513_32588[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32589 = state_30381;
state_30381 = G__32589;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28820__auto__ = function(state_30381){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28820__auto____1.call(this,state_30381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28820__auto____0;
cljs$core$async$mult_$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28820__auto____1;
return cljs$core$async$mult_$_state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_30514 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_30514[(6)] = c__29197__auto___32464);

return statearr_30514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30522 = arguments.length;
switch (G__30522) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32597 = arguments.length;
var i__4790__auto___32598 = (0);
while(true){
if((i__4790__auto___32598 < len__4789__auto___32597)){
args__4795__auto__.push((arguments[i__4790__auto___32598]));

var G__32602 = (i__4790__auto___32598 + (1));
i__4790__auto___32598 = G__32602;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30562){
var map__30563 = p__30562;
var map__30563__$1 = (((((!((map__30563 == null))))?(((((map__30563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30563):map__30563);
var opts = map__30563__$1;
var statearr_30565_32604 = state;
(statearr_30565_32604[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30566_32605 = state;
(statearr_30566_32605[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30567_32606 = state;
(statearr_30567_32606[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30556){
var G__30557 = cljs.core.first(seq30556);
var seq30556__$1 = cljs.core.next(seq30556);
var G__30558 = cljs.core.first(seq30556__$1);
var seq30556__$2 = cljs.core.next(seq30556__$1);
var G__30559 = cljs.core.first(seq30556__$2);
var seq30556__$3 = cljs.core.next(seq30556__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30557,G__30558,G__30559,seq30556__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30592 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30592 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30593){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30593 = meta30593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30594,meta30593__$1){
var self__ = this;
var _30594__$1 = this;
return (new cljs.core.async.t_cljs$core$async30592(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30593__$1));
}));

(cljs.core.async.t_cljs$core$async30592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30594){
var self__ = this;
var _30594__$1 = this;
return self__.meta30593;
}));

(cljs.core.async.t_cljs$core$async30592.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30592.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30592.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30592.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30592.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30592.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30592.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30592.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30593","meta30593",-536873023,null)], null);
}));

(cljs.core.async.t_cljs$core$async30592.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30592");

(cljs.core.async.t_cljs$core$async30592.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30592");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30592.
 */
cljs.core.async.__GT_t_cljs$core$async30592 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30592(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30593){
return (new cljs.core.async.t_cljs$core$async30592(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30593));
});

}

return (new cljs.core.async.t_cljs$core$async30592(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29197__auto___32617 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_30711){
var state_val_30712 = (state_30711[(1)]);
if((state_val_30712 === (7))){
var inst_30617 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
var statearr_30715_32618 = state_30711__$1;
(statearr_30715_32618[(2)] = inst_30617);

(statearr_30715_32618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (20))){
var inst_30632 = (state_30711[(7)]);
var state_30711__$1 = state_30711;
var statearr_30717_32619 = state_30711__$1;
(statearr_30717_32619[(2)] = inst_30632);

(statearr_30717_32619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (27))){
var state_30711__$1 = state_30711;
var statearr_30718_32623 = state_30711__$1;
(statearr_30718_32623[(2)] = null);

(statearr_30718_32623[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (1))){
var inst_30604 = (state_30711[(8)]);
var inst_30604__$1 = calc_state();
var inst_30606 = (inst_30604__$1 == null);
var inst_30607 = cljs.core.not(inst_30606);
var state_30711__$1 = (function (){var statearr_30723 = state_30711;
(statearr_30723[(8)] = inst_30604__$1);

return statearr_30723;
})();
if(inst_30607){
var statearr_30724_32629 = state_30711__$1;
(statearr_30724_32629[(1)] = (2));

} else {
var statearr_30725_32635 = state_30711__$1;
(statearr_30725_32635[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (24))){
var inst_30684 = (state_30711[(9)]);
var inst_30667 = (state_30711[(10)]);
var inst_30658 = (state_30711[(11)]);
var inst_30684__$1 = (inst_30658.cljs$core$IFn$_invoke$arity$1 ? inst_30658.cljs$core$IFn$_invoke$arity$1(inst_30667) : inst_30658.call(null,inst_30667));
var state_30711__$1 = (function (){var statearr_30726 = state_30711;
(statearr_30726[(9)] = inst_30684__$1);

return statearr_30726;
})();
if(cljs.core.truth_(inst_30684__$1)){
var statearr_30727_32636 = state_30711__$1;
(statearr_30727_32636[(1)] = (29));

} else {
var statearr_30728_32637 = state_30711__$1;
(statearr_30728_32637[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (4))){
var inst_30620 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
if(cljs.core.truth_(inst_30620)){
var statearr_30729_32638 = state_30711__$1;
(statearr_30729_32638[(1)] = (8));

} else {
var statearr_30730_32639 = state_30711__$1;
(statearr_30730_32639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (15))){
var inst_30652 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
if(cljs.core.truth_(inst_30652)){
var statearr_30731_32640 = state_30711__$1;
(statearr_30731_32640[(1)] = (19));

} else {
var statearr_30732_32641 = state_30711__$1;
(statearr_30732_32641[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (21))){
var inst_30657 = (state_30711[(12)]);
var inst_30657__$1 = (state_30711[(2)]);
var inst_30658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30657__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30657__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30657__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30711__$1 = (function (){var statearr_30733 = state_30711;
(statearr_30733[(13)] = inst_30659);

(statearr_30733[(11)] = inst_30658);

(statearr_30733[(12)] = inst_30657__$1);

return statearr_30733;
})();
return cljs.core.async.ioc_alts_BANG_(state_30711__$1,(22),inst_30660);
} else {
if((state_val_30712 === (31))){
var inst_30693 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
if(cljs.core.truth_(inst_30693)){
var statearr_30734_32642 = state_30711__$1;
(statearr_30734_32642[(1)] = (32));

} else {
var statearr_30735_32643 = state_30711__$1;
(statearr_30735_32643[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (32))){
var inst_30666 = (state_30711[(14)]);
var state_30711__$1 = state_30711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30711__$1,(35),out,inst_30666);
} else {
if((state_val_30712 === (33))){
var inst_30657 = (state_30711[(12)]);
var inst_30632 = inst_30657;
var state_30711__$1 = (function (){var statearr_30742 = state_30711;
(statearr_30742[(7)] = inst_30632);

return statearr_30742;
})();
var statearr_30743_32644 = state_30711__$1;
(statearr_30743_32644[(2)] = null);

(statearr_30743_32644[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (13))){
var inst_30632 = (state_30711[(7)]);
var inst_30641 = inst_30632.cljs$lang$protocol_mask$partition0$;
var inst_30642 = (inst_30641 & (64));
var inst_30643 = inst_30632.cljs$core$ISeq$;
var inst_30644 = (cljs.core.PROTOCOL_SENTINEL === inst_30643);
var inst_30645 = ((inst_30642) || (inst_30644));
var state_30711__$1 = state_30711;
if(cljs.core.truth_(inst_30645)){
var statearr_30747_32645 = state_30711__$1;
(statearr_30747_32645[(1)] = (16));

} else {
var statearr_30750_32646 = state_30711__$1;
(statearr_30750_32646[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (22))){
var inst_30666 = (state_30711[(14)]);
var inst_30667 = (state_30711[(10)]);
var inst_30665 = (state_30711[(2)]);
var inst_30666__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30665,(0),null);
var inst_30667__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30665,(1),null);
var inst_30668 = (inst_30666__$1 == null);
var inst_30669 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30667__$1,change);
var inst_30670 = ((inst_30668) || (inst_30669));
var state_30711__$1 = (function (){var statearr_30751 = state_30711;
(statearr_30751[(14)] = inst_30666__$1);

(statearr_30751[(10)] = inst_30667__$1);

return statearr_30751;
})();
if(cljs.core.truth_(inst_30670)){
var statearr_30754_32647 = state_30711__$1;
(statearr_30754_32647[(1)] = (23));

} else {
var statearr_30755_32648 = state_30711__$1;
(statearr_30755_32648[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (36))){
var inst_30657 = (state_30711[(12)]);
var inst_30632 = inst_30657;
var state_30711__$1 = (function (){var statearr_30758 = state_30711;
(statearr_30758[(7)] = inst_30632);

return statearr_30758;
})();
var statearr_30759_32655 = state_30711__$1;
(statearr_30759_32655[(2)] = null);

(statearr_30759_32655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (29))){
var inst_30684 = (state_30711[(9)]);
var state_30711__$1 = state_30711;
var statearr_30760_32656 = state_30711__$1;
(statearr_30760_32656[(2)] = inst_30684);

(statearr_30760_32656[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (6))){
var state_30711__$1 = state_30711;
var statearr_30761_32657 = state_30711__$1;
(statearr_30761_32657[(2)] = false);

(statearr_30761_32657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (28))){
var inst_30680 = (state_30711[(2)]);
var inst_30681 = calc_state();
var inst_30632 = inst_30681;
var state_30711__$1 = (function (){var statearr_30762 = state_30711;
(statearr_30762[(7)] = inst_30632);

(statearr_30762[(15)] = inst_30680);

return statearr_30762;
})();
var statearr_30764_32658 = state_30711__$1;
(statearr_30764_32658[(2)] = null);

(statearr_30764_32658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (25))){
var inst_30707 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
var statearr_30767_32659 = state_30711__$1;
(statearr_30767_32659[(2)] = inst_30707);

(statearr_30767_32659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (34))){
var inst_30705 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
var statearr_30768_32660 = state_30711__$1;
(statearr_30768_32660[(2)] = inst_30705);

(statearr_30768_32660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (17))){
var state_30711__$1 = state_30711;
var statearr_30769_32661 = state_30711__$1;
(statearr_30769_32661[(2)] = false);

(statearr_30769_32661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (3))){
var state_30711__$1 = state_30711;
var statearr_30770_32662 = state_30711__$1;
(statearr_30770_32662[(2)] = false);

(statearr_30770_32662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (12))){
var inst_30709 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30711__$1,inst_30709);
} else {
if((state_val_30712 === (2))){
var inst_30604 = (state_30711[(8)]);
var inst_30609 = inst_30604.cljs$lang$protocol_mask$partition0$;
var inst_30610 = (inst_30609 & (64));
var inst_30611 = inst_30604.cljs$core$ISeq$;
var inst_30612 = (cljs.core.PROTOCOL_SENTINEL === inst_30611);
var inst_30613 = ((inst_30610) || (inst_30612));
var state_30711__$1 = state_30711;
if(cljs.core.truth_(inst_30613)){
var statearr_30771_32663 = state_30711__$1;
(statearr_30771_32663[(1)] = (5));

} else {
var statearr_30773_32664 = state_30711__$1;
(statearr_30773_32664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (23))){
var inst_30666 = (state_30711[(14)]);
var inst_30675 = (inst_30666 == null);
var state_30711__$1 = state_30711;
if(cljs.core.truth_(inst_30675)){
var statearr_30774_32665 = state_30711__$1;
(statearr_30774_32665[(1)] = (26));

} else {
var statearr_30779_32666 = state_30711__$1;
(statearr_30779_32666[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (35))){
var inst_30696 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
if(cljs.core.truth_(inst_30696)){
var statearr_30784_32673 = state_30711__$1;
(statearr_30784_32673[(1)] = (36));

} else {
var statearr_30785_32674 = state_30711__$1;
(statearr_30785_32674[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (19))){
var inst_30632 = (state_30711[(7)]);
var inst_30654 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30632);
var state_30711__$1 = state_30711;
var statearr_30786_32675 = state_30711__$1;
(statearr_30786_32675[(2)] = inst_30654);

(statearr_30786_32675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (11))){
var inst_30632 = (state_30711[(7)]);
var inst_30638 = (inst_30632 == null);
var inst_30639 = cljs.core.not(inst_30638);
var state_30711__$1 = state_30711;
if(inst_30639){
var statearr_30791_32676 = state_30711__$1;
(statearr_30791_32676[(1)] = (13));

} else {
var statearr_30792_32677 = state_30711__$1;
(statearr_30792_32677[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (9))){
var inst_30604 = (state_30711[(8)]);
var state_30711__$1 = state_30711;
var statearr_30793_32678 = state_30711__$1;
(statearr_30793_32678[(2)] = inst_30604);

(statearr_30793_32678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (5))){
var state_30711__$1 = state_30711;
var statearr_30794_32679 = state_30711__$1;
(statearr_30794_32679[(2)] = true);

(statearr_30794_32679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (14))){
var state_30711__$1 = state_30711;
var statearr_30795_32680 = state_30711__$1;
(statearr_30795_32680[(2)] = false);

(statearr_30795_32680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (26))){
var inst_30667 = (state_30711[(10)]);
var inst_30677 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30667);
var state_30711__$1 = state_30711;
var statearr_30796_32681 = state_30711__$1;
(statearr_30796_32681[(2)] = inst_30677);

(statearr_30796_32681[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (16))){
var state_30711__$1 = state_30711;
var statearr_30797_32682 = state_30711__$1;
(statearr_30797_32682[(2)] = true);

(statearr_30797_32682[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (38))){
var inst_30701 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
var statearr_30798_32683 = state_30711__$1;
(statearr_30798_32683[(2)] = inst_30701);

(statearr_30798_32683[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (30))){
var inst_30659 = (state_30711[(13)]);
var inst_30667 = (state_30711[(10)]);
var inst_30658 = (state_30711[(11)]);
var inst_30688 = cljs.core.empty_QMARK_(inst_30658);
var inst_30689 = (inst_30659.cljs$core$IFn$_invoke$arity$1 ? inst_30659.cljs$core$IFn$_invoke$arity$1(inst_30667) : inst_30659.call(null,inst_30667));
var inst_30690 = cljs.core.not(inst_30689);
var inst_30691 = ((inst_30688) && (inst_30690));
var state_30711__$1 = state_30711;
var statearr_30799_32684 = state_30711__$1;
(statearr_30799_32684[(2)] = inst_30691);

(statearr_30799_32684[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (10))){
var inst_30604 = (state_30711[(8)]);
var inst_30626 = (state_30711[(2)]);
var inst_30628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30626,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30626,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30626,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30632 = inst_30604;
var state_30711__$1 = (function (){var statearr_30800 = state_30711;
(statearr_30800[(7)] = inst_30632);

(statearr_30800[(16)] = inst_30630);

(statearr_30800[(17)] = inst_30628);

(statearr_30800[(18)] = inst_30631);

return statearr_30800;
})();
var statearr_30801_32691 = state_30711__$1;
(statearr_30801_32691[(2)] = null);

(statearr_30801_32691[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (18))){
var inst_30649 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
var statearr_30802_32692 = state_30711__$1;
(statearr_30802_32692[(2)] = inst_30649);

(statearr_30802_32692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (37))){
var state_30711__$1 = state_30711;
var statearr_30803_32693 = state_30711__$1;
(statearr_30803_32693[(2)] = null);

(statearr_30803_32693[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (8))){
var inst_30604 = (state_30711[(8)]);
var inst_30623 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30604);
var state_30711__$1 = state_30711;
var statearr_30804_32694 = state_30711__$1;
(statearr_30804_32694[(2)] = inst_30623);

(statearr_30804_32694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28820__auto__ = null;
var cljs$core$async$mix_$_state_machine__28820__auto____0 = (function (){
var statearr_30805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30805[(0)] = cljs$core$async$mix_$_state_machine__28820__auto__);

(statearr_30805[(1)] = (1));

return statearr_30805;
});
var cljs$core$async$mix_$_state_machine__28820__auto____1 = (function (state_30711){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_30711);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e30806){if((e30806 instanceof Object)){
var ex__28823__auto__ = e30806;
var statearr_30807_32695 = state_30711;
(statearr_30807_32695[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30806;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32696 = state_30711;
state_30711 = G__32696;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28820__auto__ = function(state_30711){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28820__auto____1.call(this,state_30711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28820__auto____0;
cljs$core$async$mix_$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28820__auto____1;
return cljs$core$async$mix_$_state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_30810 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_30810[(6)] = c__29197__auto___32617);

return statearr_30810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30825 = arguments.length;
switch (G__30825) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30835 = arguments.length;
switch (G__30835) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30827_SHARP_){
if(cljs.core.truth_((p1__30827_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30827_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30827_SHARP_.call(null,topic)))){
return p1__30827_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30827_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30839 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30840){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30840 = meta30840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30841,meta30840__$1){
var self__ = this;
var _30841__$1 = this;
return (new cljs.core.async.t_cljs$core$async30839(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30840__$1));
}));

(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30841){
var self__ = this;
var _30841__$1 = this;
return self__.meta30840;
}));

(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30840","meta30840",1198383936,null)], null);
}));

(cljs.core.async.t_cljs$core$async30839.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30839");

(cljs.core.async.t_cljs$core$async30839.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30839");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30839.
 */
cljs.core.async.__GT_t_cljs$core$async30839 = (function cljs$core$async$__GT_t_cljs$core$async30839(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30840){
return (new cljs.core.async.t_cljs$core$async30839(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30840));
});

}

return (new cljs.core.async.t_cljs$core$async30839(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29197__auto___32705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_30925){
var state_val_30928 = (state_30925[(1)]);
if((state_val_30928 === (7))){
var inst_30921 = (state_30925[(2)]);
var state_30925__$1 = state_30925;
var statearr_30932_32706 = state_30925__$1;
(statearr_30932_32706[(2)] = inst_30921);

(statearr_30932_32706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (20))){
var state_30925__$1 = state_30925;
var statearr_30933_32707 = state_30925__$1;
(statearr_30933_32707[(2)] = null);

(statearr_30933_32707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (1))){
var state_30925__$1 = state_30925;
var statearr_30934_32708 = state_30925__$1;
(statearr_30934_32708[(2)] = null);

(statearr_30934_32708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (24))){
var inst_30904 = (state_30925[(7)]);
var inst_30913 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30904);
var state_30925__$1 = state_30925;
var statearr_30938_32711 = state_30925__$1;
(statearr_30938_32711[(2)] = inst_30913);

(statearr_30938_32711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (4))){
var inst_30856 = (state_30925[(8)]);
var inst_30856__$1 = (state_30925[(2)]);
var inst_30857 = (inst_30856__$1 == null);
var state_30925__$1 = (function (){var statearr_30939 = state_30925;
(statearr_30939[(8)] = inst_30856__$1);

return statearr_30939;
})();
if(cljs.core.truth_(inst_30857)){
var statearr_30940_32712 = state_30925__$1;
(statearr_30940_32712[(1)] = (5));

} else {
var statearr_30941_32713 = state_30925__$1;
(statearr_30941_32713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (15))){
var inst_30898 = (state_30925[(2)]);
var state_30925__$1 = state_30925;
var statearr_30943_32715 = state_30925__$1;
(statearr_30943_32715[(2)] = inst_30898);

(statearr_30943_32715[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (21))){
var inst_30918 = (state_30925[(2)]);
var state_30925__$1 = (function (){var statearr_30945 = state_30925;
(statearr_30945[(9)] = inst_30918);

return statearr_30945;
})();
var statearr_30946_32717 = state_30925__$1;
(statearr_30946_32717[(2)] = null);

(statearr_30946_32717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (13))){
var inst_30880 = (state_30925[(10)]);
var inst_30882 = cljs.core.chunked_seq_QMARK_(inst_30880);
var state_30925__$1 = state_30925;
if(inst_30882){
var statearr_30952_32718 = state_30925__$1;
(statearr_30952_32718[(1)] = (16));

} else {
var statearr_30957_32719 = state_30925__$1;
(statearr_30957_32719[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (22))){
var inst_30910 = (state_30925[(2)]);
var state_30925__$1 = state_30925;
if(cljs.core.truth_(inst_30910)){
var statearr_30958_32720 = state_30925__$1;
(statearr_30958_32720[(1)] = (23));

} else {
var statearr_30959_32721 = state_30925__$1;
(statearr_30959_32721[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (6))){
var inst_30904 = (state_30925[(7)]);
var inst_30856 = (state_30925[(8)]);
var inst_30906 = (state_30925[(11)]);
var inst_30904__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30856) : topic_fn.call(null,inst_30856));
var inst_30905 = cljs.core.deref(mults);
var inst_30906__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30905,inst_30904__$1);
var state_30925__$1 = (function (){var statearr_30960 = state_30925;
(statearr_30960[(7)] = inst_30904__$1);

(statearr_30960[(11)] = inst_30906__$1);

return statearr_30960;
})();
if(cljs.core.truth_(inst_30906__$1)){
var statearr_30961_32723 = state_30925__$1;
(statearr_30961_32723[(1)] = (19));

} else {
var statearr_30962_32725 = state_30925__$1;
(statearr_30962_32725[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (25))){
var inst_30915 = (state_30925[(2)]);
var state_30925__$1 = state_30925;
var statearr_30963_32726 = state_30925__$1;
(statearr_30963_32726[(2)] = inst_30915);

(statearr_30963_32726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (17))){
var inst_30880 = (state_30925[(10)]);
var inst_30889 = cljs.core.first(inst_30880);
var inst_30890 = cljs.core.async.muxch_STAR_(inst_30889);
var inst_30891 = cljs.core.async.close_BANG_(inst_30890);
var inst_30892 = cljs.core.next(inst_30880);
var inst_30866 = inst_30892;
var inst_30867 = null;
var inst_30868 = (0);
var inst_30869 = (0);
var state_30925__$1 = (function (){var statearr_30966 = state_30925;
(statearr_30966[(12)] = inst_30866);

(statearr_30966[(13)] = inst_30867);

(statearr_30966[(14)] = inst_30868);

(statearr_30966[(15)] = inst_30869);

(statearr_30966[(16)] = inst_30891);

return statearr_30966;
})();
var statearr_30967_32728 = state_30925__$1;
(statearr_30967_32728[(2)] = null);

(statearr_30967_32728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (3))){
var inst_30923 = (state_30925[(2)]);
var state_30925__$1 = state_30925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30925__$1,inst_30923);
} else {
if((state_val_30928 === (12))){
var inst_30900 = (state_30925[(2)]);
var state_30925__$1 = state_30925;
var statearr_30968_32729 = state_30925__$1;
(statearr_30968_32729[(2)] = inst_30900);

(statearr_30968_32729[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (2))){
var state_30925__$1 = state_30925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30925__$1,(4),ch);
} else {
if((state_val_30928 === (23))){
var state_30925__$1 = state_30925;
var statearr_30969_32730 = state_30925__$1;
(statearr_30969_32730[(2)] = null);

(statearr_30969_32730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (19))){
var inst_30856 = (state_30925[(8)]);
var inst_30906 = (state_30925[(11)]);
var inst_30908 = cljs.core.async.muxch_STAR_(inst_30906);
var state_30925__$1 = state_30925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30925__$1,(22),inst_30908,inst_30856);
} else {
if((state_val_30928 === (11))){
var inst_30880 = (state_30925[(10)]);
var inst_30866 = (state_30925[(12)]);
var inst_30880__$1 = cljs.core.seq(inst_30866);
var state_30925__$1 = (function (){var statearr_30970 = state_30925;
(statearr_30970[(10)] = inst_30880__$1);

return statearr_30970;
})();
if(inst_30880__$1){
var statearr_30971_32731 = state_30925__$1;
(statearr_30971_32731[(1)] = (13));

} else {
var statearr_30972_32732 = state_30925__$1;
(statearr_30972_32732[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (9))){
var inst_30902 = (state_30925[(2)]);
var state_30925__$1 = state_30925;
var statearr_30973_32733 = state_30925__$1;
(statearr_30973_32733[(2)] = inst_30902);

(statearr_30973_32733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (5))){
var inst_30863 = cljs.core.deref(mults);
var inst_30864 = cljs.core.vals(inst_30863);
var inst_30865 = cljs.core.seq(inst_30864);
var inst_30866 = inst_30865;
var inst_30867 = null;
var inst_30868 = (0);
var inst_30869 = (0);
var state_30925__$1 = (function (){var statearr_30974 = state_30925;
(statearr_30974[(12)] = inst_30866);

(statearr_30974[(13)] = inst_30867);

(statearr_30974[(14)] = inst_30868);

(statearr_30974[(15)] = inst_30869);

return statearr_30974;
})();
var statearr_30975_32736 = state_30925__$1;
(statearr_30975_32736[(2)] = null);

(statearr_30975_32736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (14))){
var state_30925__$1 = state_30925;
var statearr_30981_32737 = state_30925__$1;
(statearr_30981_32737[(2)] = null);

(statearr_30981_32737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (16))){
var inst_30880 = (state_30925[(10)]);
var inst_30884 = cljs.core.chunk_first(inst_30880);
var inst_30885 = cljs.core.chunk_rest(inst_30880);
var inst_30886 = cljs.core.count(inst_30884);
var inst_30866 = inst_30885;
var inst_30867 = inst_30884;
var inst_30868 = inst_30886;
var inst_30869 = (0);
var state_30925__$1 = (function (){var statearr_30982 = state_30925;
(statearr_30982[(12)] = inst_30866);

(statearr_30982[(13)] = inst_30867);

(statearr_30982[(14)] = inst_30868);

(statearr_30982[(15)] = inst_30869);

return statearr_30982;
})();
var statearr_30983_32738 = state_30925__$1;
(statearr_30983_32738[(2)] = null);

(statearr_30983_32738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (10))){
var inst_30866 = (state_30925[(12)]);
var inst_30867 = (state_30925[(13)]);
var inst_30868 = (state_30925[(14)]);
var inst_30869 = (state_30925[(15)]);
var inst_30874 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30867,inst_30869);
var inst_30875 = cljs.core.async.muxch_STAR_(inst_30874);
var inst_30876 = cljs.core.async.close_BANG_(inst_30875);
var inst_30877 = (inst_30869 + (1));
var tmp30977 = inst_30866;
var tmp30978 = inst_30867;
var tmp30979 = inst_30868;
var inst_30866__$1 = tmp30977;
var inst_30867__$1 = tmp30978;
var inst_30868__$1 = tmp30979;
var inst_30869__$1 = inst_30877;
var state_30925__$1 = (function (){var statearr_30987 = state_30925;
(statearr_30987[(12)] = inst_30866__$1);

(statearr_30987[(13)] = inst_30867__$1);

(statearr_30987[(17)] = inst_30876);

(statearr_30987[(14)] = inst_30868__$1);

(statearr_30987[(15)] = inst_30869__$1);

return statearr_30987;
})();
var statearr_30988_32740 = state_30925__$1;
(statearr_30988_32740[(2)] = null);

(statearr_30988_32740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (18))){
var inst_30895 = (state_30925[(2)]);
var state_30925__$1 = state_30925;
var statearr_30989_32741 = state_30925__$1;
(statearr_30989_32741[(2)] = inst_30895);

(statearr_30989_32741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (8))){
var inst_30868 = (state_30925[(14)]);
var inst_30869 = (state_30925[(15)]);
var inst_30871 = (inst_30869 < inst_30868);
var inst_30872 = inst_30871;
var state_30925__$1 = state_30925;
if(cljs.core.truth_(inst_30872)){
var statearr_30991_32742 = state_30925__$1;
(statearr_30991_32742[(1)] = (10));

} else {
var statearr_30993_32743 = state_30925__$1;
(statearr_30993_32743[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28820__auto__ = null;
var cljs$core$async$state_machine__28820__auto____0 = (function (){
var statearr_30995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30995[(0)] = cljs$core$async$state_machine__28820__auto__);

(statearr_30995[(1)] = (1));

return statearr_30995;
});
var cljs$core$async$state_machine__28820__auto____1 = (function (state_30925){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_30925);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e30996){if((e30996 instanceof Object)){
var ex__28823__auto__ = e30996;
var statearr_30997_32744 = state_30925;
(statearr_30997_32744[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30996;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32745 = state_30925;
state_30925 = G__32745;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$state_machine__28820__auto__ = function(state_30925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28820__auto____1.call(this,state_30925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28820__auto____0;
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28820__auto____1;
return cljs$core$async$state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_30998 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_30998[(6)] = c__29197__auto___32705);

return statearr_30998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31005 = arguments.length;
switch (G__31005) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31035 = arguments.length;
switch (G__31035) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31042 = arguments.length;
switch (G__31042) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29197__auto___32762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_31086){
var state_val_31087 = (state_31086[(1)]);
if((state_val_31087 === (7))){
var state_31086__$1 = state_31086;
var statearr_31088_32763 = state_31086__$1;
(statearr_31088_32763[(2)] = null);

(statearr_31088_32763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (1))){
var state_31086__$1 = state_31086;
var statearr_31089_32764 = state_31086__$1;
(statearr_31089_32764[(2)] = null);

(statearr_31089_32764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (4))){
var inst_31047 = (state_31086[(7)]);
var inst_31049 = (inst_31047 < cnt);
var state_31086__$1 = state_31086;
if(cljs.core.truth_(inst_31049)){
var statearr_31090_32770 = state_31086__$1;
(statearr_31090_32770[(1)] = (6));

} else {
var statearr_31091_32771 = state_31086__$1;
(statearr_31091_32771[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (15))){
var inst_31082 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31092_32772 = state_31086__$1;
(statearr_31092_32772[(2)] = inst_31082);

(statearr_31092_32772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (13))){
var inst_31075 = cljs.core.async.close_BANG_(out);
var state_31086__$1 = state_31086;
var statearr_31093_32777 = state_31086__$1;
(statearr_31093_32777[(2)] = inst_31075);

(statearr_31093_32777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (6))){
var state_31086__$1 = state_31086;
var statearr_31094_32783 = state_31086__$1;
(statearr_31094_32783[(2)] = null);

(statearr_31094_32783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (3))){
var inst_31084 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31086__$1,inst_31084);
} else {
if((state_val_31087 === (12))){
var inst_31072 = (state_31086[(8)]);
var inst_31072__$1 = (state_31086[(2)]);
var inst_31073 = cljs.core.some(cljs.core.nil_QMARK_,inst_31072__$1);
var state_31086__$1 = (function (){var statearr_31095 = state_31086;
(statearr_31095[(8)] = inst_31072__$1);

return statearr_31095;
})();
if(cljs.core.truth_(inst_31073)){
var statearr_31096_32785 = state_31086__$1;
(statearr_31096_32785[(1)] = (13));

} else {
var statearr_31097_32790 = state_31086__$1;
(statearr_31097_32790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (2))){
var inst_31046 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31047 = (0);
var state_31086__$1 = (function (){var statearr_31098 = state_31086;
(statearr_31098[(9)] = inst_31046);

(statearr_31098[(7)] = inst_31047);

return statearr_31098;
})();
var statearr_31099_32799 = state_31086__$1;
(statearr_31099_32799[(2)] = null);

(statearr_31099_32799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (11))){
var inst_31047 = (state_31086[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31086,(10),Object,null,(9));
var inst_31059 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31047) : chs__$1.call(null,inst_31047));
var inst_31060 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31047) : done.call(null,inst_31047));
var inst_31061 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31059,inst_31060);
var state_31086__$1 = state_31086;
var statearr_31100_32808 = state_31086__$1;
(statearr_31100_32808[(2)] = inst_31061);


cljs.core.async.impl.ioc_helpers.process_exception(state_31086__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (9))){
var inst_31047 = (state_31086[(7)]);
var inst_31063 = (state_31086[(2)]);
var inst_31064 = (inst_31047 + (1));
var inst_31047__$1 = inst_31064;
var state_31086__$1 = (function (){var statearr_31101 = state_31086;
(statearr_31101[(7)] = inst_31047__$1);

(statearr_31101[(10)] = inst_31063);

return statearr_31101;
})();
var statearr_31102_32812 = state_31086__$1;
(statearr_31102_32812[(2)] = null);

(statearr_31102_32812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (5))){
var inst_31070 = (state_31086[(2)]);
var state_31086__$1 = (function (){var statearr_31103 = state_31086;
(statearr_31103[(11)] = inst_31070);

return statearr_31103;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31086__$1,(12),dchan);
} else {
if((state_val_31087 === (14))){
var inst_31072 = (state_31086[(8)]);
var inst_31077 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31072);
var state_31086__$1 = state_31086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31086__$1,(16),out,inst_31077);
} else {
if((state_val_31087 === (16))){
var inst_31079 = (state_31086[(2)]);
var state_31086__$1 = (function (){var statearr_31107 = state_31086;
(statearr_31107[(12)] = inst_31079);

return statearr_31107;
})();
var statearr_31108_32816 = state_31086__$1;
(statearr_31108_32816[(2)] = null);

(statearr_31108_32816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (10))){
var inst_31051 = (state_31086[(2)]);
var inst_31052 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31086__$1 = (function (){var statearr_31113 = state_31086;
(statearr_31113[(13)] = inst_31051);

return statearr_31113;
})();
var statearr_31114_32820 = state_31086__$1;
(statearr_31114_32820[(2)] = inst_31052);


cljs.core.async.impl.ioc_helpers.process_exception(state_31086__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31087 === (8))){
var inst_31068 = (state_31086[(2)]);
var state_31086__$1 = state_31086;
var statearr_31119_32821 = state_31086__$1;
(statearr_31119_32821[(2)] = inst_31068);

(statearr_31119_32821[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28820__auto__ = null;
var cljs$core$async$state_machine__28820__auto____0 = (function (){
var statearr_31124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31124[(0)] = cljs$core$async$state_machine__28820__auto__);

(statearr_31124[(1)] = (1));

return statearr_31124;
});
var cljs$core$async$state_machine__28820__auto____1 = (function (state_31086){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_31086);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e31127){if((e31127 instanceof Object)){
var ex__28823__auto__ = e31127;
var statearr_31128_32828 = state_31086;
(statearr_31128_32828[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32829 = state_31086;
state_31086 = G__32829;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$state_machine__28820__auto__ = function(state_31086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28820__auto____1.call(this,state_31086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28820__auto____0;
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28820__auto____1;
return cljs$core$async$state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_31129 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_31129[(6)] = c__29197__auto___32762);

return statearr_31129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31134 = arguments.length;
switch (G__31134) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29197__auto___32832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_31169){
var state_val_31170 = (state_31169[(1)]);
if((state_val_31170 === (7))){
var inst_31148 = (state_31169[(7)]);
var inst_31149 = (state_31169[(8)]);
var inst_31148__$1 = (state_31169[(2)]);
var inst_31149__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31148__$1,(0),null);
var inst_31150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31148__$1,(1),null);
var inst_31151 = (inst_31149__$1 == null);
var state_31169__$1 = (function (){var statearr_31173 = state_31169;
(statearr_31173[(7)] = inst_31148__$1);

(statearr_31173[(8)] = inst_31149__$1);

(statearr_31173[(9)] = inst_31150);

return statearr_31173;
})();
if(cljs.core.truth_(inst_31151)){
var statearr_31174_32835 = state_31169__$1;
(statearr_31174_32835[(1)] = (8));

} else {
var statearr_31175_32837 = state_31169__$1;
(statearr_31175_32837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (1))){
var inst_31138 = cljs.core.vec(chs);
var inst_31139 = inst_31138;
var state_31169__$1 = (function (){var statearr_31176 = state_31169;
(statearr_31176[(10)] = inst_31139);

return statearr_31176;
})();
var statearr_31177_32840 = state_31169__$1;
(statearr_31177_32840[(2)] = null);

(statearr_31177_32840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (4))){
var inst_31139 = (state_31169[(10)]);
var state_31169__$1 = state_31169;
return cljs.core.async.ioc_alts_BANG_(state_31169__$1,(7),inst_31139);
} else {
if((state_val_31170 === (6))){
var inst_31165 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31183_32841 = state_31169__$1;
(statearr_31183_32841[(2)] = inst_31165);

(statearr_31183_32841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (3))){
var inst_31167 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31169__$1,inst_31167);
} else {
if((state_val_31170 === (2))){
var inst_31139 = (state_31169[(10)]);
var inst_31141 = cljs.core.count(inst_31139);
var inst_31142 = (inst_31141 > (0));
var state_31169__$1 = state_31169;
if(cljs.core.truth_(inst_31142)){
var statearr_31186_32844 = state_31169__$1;
(statearr_31186_32844[(1)] = (4));

} else {
var statearr_31187_32845 = state_31169__$1;
(statearr_31187_32845[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (11))){
var inst_31139 = (state_31169[(10)]);
var inst_31158 = (state_31169[(2)]);
var tmp31184 = inst_31139;
var inst_31139__$1 = tmp31184;
var state_31169__$1 = (function (){var statearr_31188 = state_31169;
(statearr_31188[(10)] = inst_31139__$1);

(statearr_31188[(11)] = inst_31158);

return statearr_31188;
})();
var statearr_31189_32849 = state_31169__$1;
(statearr_31189_32849[(2)] = null);

(statearr_31189_32849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (9))){
var inst_31149 = (state_31169[(8)]);
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31169__$1,(11),out,inst_31149);
} else {
if((state_val_31170 === (5))){
var inst_31163 = cljs.core.async.close_BANG_(out);
var state_31169__$1 = state_31169;
var statearr_31198_32851 = state_31169__$1;
(statearr_31198_32851[(2)] = inst_31163);

(statearr_31198_32851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (10))){
var inst_31161 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31199_32852 = state_31169__$1;
(statearr_31199_32852[(2)] = inst_31161);

(statearr_31199_32852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (8))){
var inst_31139 = (state_31169[(10)]);
var inst_31148 = (state_31169[(7)]);
var inst_31149 = (state_31169[(8)]);
var inst_31150 = (state_31169[(9)]);
var inst_31153 = (function (){var cs = inst_31139;
var vec__31144 = inst_31148;
var v = inst_31149;
var c = inst_31150;
return (function (p1__31130_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31130_SHARP_);
});
})();
var inst_31154 = cljs.core.filterv(inst_31153,inst_31139);
var inst_31139__$1 = inst_31154;
var state_31169__$1 = (function (){var statearr_31200 = state_31169;
(statearr_31200[(10)] = inst_31139__$1);

return statearr_31200;
})();
var statearr_31202_32855 = state_31169__$1;
(statearr_31202_32855[(2)] = null);

(statearr_31202_32855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28820__auto__ = null;
var cljs$core$async$state_machine__28820__auto____0 = (function (){
var statearr_31211 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31211[(0)] = cljs$core$async$state_machine__28820__auto__);

(statearr_31211[(1)] = (1));

return statearr_31211;
});
var cljs$core$async$state_machine__28820__auto____1 = (function (state_31169){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_31169);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e31213){if((e31213 instanceof Object)){
var ex__28823__auto__ = e31213;
var statearr_31214_32856 = state_31169;
(statearr_31214_32856[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31213;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32857 = state_31169;
state_31169 = G__32857;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$state_machine__28820__auto__ = function(state_31169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28820__auto____1.call(this,state_31169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28820__auto____0;
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28820__auto____1;
return cljs$core$async$state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_31221 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_31221[(6)] = c__29197__auto___32832);

return statearr_31221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31229 = arguments.length;
switch (G__31229) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29197__auto___32859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_31262){
var state_val_31263 = (state_31262[(1)]);
if((state_val_31263 === (7))){
var inst_31244 = (state_31262[(7)]);
var inst_31244__$1 = (state_31262[(2)]);
var inst_31245 = (inst_31244__$1 == null);
var inst_31246 = cljs.core.not(inst_31245);
var state_31262__$1 = (function (){var statearr_31269 = state_31262;
(statearr_31269[(7)] = inst_31244__$1);

return statearr_31269;
})();
if(inst_31246){
var statearr_31270_32864 = state_31262__$1;
(statearr_31270_32864[(1)] = (8));

} else {
var statearr_31271_32865 = state_31262__$1;
(statearr_31271_32865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (1))){
var inst_31237 = (0);
var state_31262__$1 = (function (){var statearr_31272 = state_31262;
(statearr_31272[(8)] = inst_31237);

return statearr_31272;
})();
var statearr_31273_32866 = state_31262__$1;
(statearr_31273_32866[(2)] = null);

(statearr_31273_32866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (4))){
var state_31262__$1 = state_31262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31262__$1,(7),ch);
} else {
if((state_val_31263 === (6))){
var inst_31257 = (state_31262[(2)]);
var state_31262__$1 = state_31262;
var statearr_31275_32867 = state_31262__$1;
(statearr_31275_32867[(2)] = inst_31257);

(statearr_31275_32867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (3))){
var inst_31259 = (state_31262[(2)]);
var inst_31260 = cljs.core.async.close_BANG_(out);
var state_31262__$1 = (function (){var statearr_31277 = state_31262;
(statearr_31277[(9)] = inst_31259);

return statearr_31277;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31262__$1,inst_31260);
} else {
if((state_val_31263 === (2))){
var inst_31237 = (state_31262[(8)]);
var inst_31239 = (inst_31237 < n);
var state_31262__$1 = state_31262;
if(cljs.core.truth_(inst_31239)){
var statearr_31278_32868 = state_31262__$1;
(statearr_31278_32868[(1)] = (4));

} else {
var statearr_31279_32869 = state_31262__$1;
(statearr_31279_32869[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (11))){
var inst_31237 = (state_31262[(8)]);
var inst_31249 = (state_31262[(2)]);
var inst_31250 = (inst_31237 + (1));
var inst_31237__$1 = inst_31250;
var state_31262__$1 = (function (){var statearr_31280 = state_31262;
(statearr_31280[(10)] = inst_31249);

(statearr_31280[(8)] = inst_31237__$1);

return statearr_31280;
})();
var statearr_31281_32874 = state_31262__$1;
(statearr_31281_32874[(2)] = null);

(statearr_31281_32874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (9))){
var state_31262__$1 = state_31262;
var statearr_31282_32875 = state_31262__$1;
(statearr_31282_32875[(2)] = null);

(statearr_31282_32875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (5))){
var state_31262__$1 = state_31262;
var statearr_31283_32877 = state_31262__$1;
(statearr_31283_32877[(2)] = null);

(statearr_31283_32877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (10))){
var inst_31254 = (state_31262[(2)]);
var state_31262__$1 = state_31262;
var statearr_31284_32878 = state_31262__$1;
(statearr_31284_32878[(2)] = inst_31254);

(statearr_31284_32878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (8))){
var inst_31244 = (state_31262[(7)]);
var state_31262__$1 = state_31262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31262__$1,(11),out,inst_31244);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28820__auto__ = null;
var cljs$core$async$state_machine__28820__auto____0 = (function (){
var statearr_31285 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31285[(0)] = cljs$core$async$state_machine__28820__auto__);

(statearr_31285[(1)] = (1));

return statearr_31285;
});
var cljs$core$async$state_machine__28820__auto____1 = (function (state_31262){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_31262);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e31286){if((e31286 instanceof Object)){
var ex__28823__auto__ = e31286;
var statearr_31287_32880 = state_31262;
(statearr_31287_32880[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31286;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32881 = state_31262;
state_31262 = G__32881;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$state_machine__28820__auto__ = function(state_31262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28820__auto____1.call(this,state_31262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28820__auto____0;
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28820__auto____1;
return cljs$core$async$state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_31291 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_31291[(6)] = c__29197__auto___32859);

return statearr_31291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31294 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31294 = (function (f,ch,meta31295){
this.f = f;
this.ch = ch;
this.meta31295 = meta31295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31296,meta31295__$1){
var self__ = this;
var _31296__$1 = this;
return (new cljs.core.async.t_cljs$core$async31294(self__.f,self__.ch,meta31295__$1));
}));

(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31296){
var self__ = this;
var _31296__$1 = this;
return self__.meta31295;
}));

(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31302 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31302 = (function (f,ch,meta31295,_,fn1,meta31303){
this.f = f;
this.ch = ch;
this.meta31295 = meta31295;
this._ = _;
this.fn1 = fn1;
this.meta31303 = meta31303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31304,meta31303__$1){
var self__ = this;
var _31304__$1 = this;
return (new cljs.core.async.t_cljs$core$async31302(self__.f,self__.ch,self__.meta31295,self__._,self__.fn1,meta31303__$1));
}));

(cljs.core.async.t_cljs$core$async31302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31304){
var self__ = this;
var _31304__$1 = this;
return self__.meta31303;
}));

(cljs.core.async.t_cljs$core$async31302.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31302.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31292_SHARP_){
var G__31313 = (((p1__31292_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31292_SHARP_) : self__.f.call(null,p1__31292_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31313) : f1.call(null,G__31313));
});
}));

(cljs.core.async.t_cljs$core$async31302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31295","meta31295",1986873495,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31294","cljs.core.async/t_cljs$core$async31294",1843052508,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31303","meta31303",1267632383,null)], null);
}));

(cljs.core.async.t_cljs$core$async31302.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31302");

(cljs.core.async.t_cljs$core$async31302.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31302");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31302.
 */
cljs.core.async.__GT_t_cljs$core$async31302 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31302(f__$1,ch__$1,meta31295__$1,___$2,fn1__$1,meta31303){
return (new cljs.core.async.t_cljs$core$async31302(f__$1,ch__$1,meta31295__$1,___$2,fn1__$1,meta31303));
});

}

return (new cljs.core.async.t_cljs$core$async31302(self__.f,self__.ch,self__.meta31295,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31324 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31324) : self__.f.call(null,G__31324));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31295","meta31295",1986873495,null)], null);
}));

(cljs.core.async.t_cljs$core$async31294.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31294");

(cljs.core.async.t_cljs$core$async31294.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31294");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31294.
 */
cljs.core.async.__GT_t_cljs$core$async31294 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31294(f__$1,ch__$1,meta31295){
return (new cljs.core.async.t_cljs$core$async31294(f__$1,ch__$1,meta31295));
});

}

return (new cljs.core.async.t_cljs$core$async31294(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31327 = (function (f,ch,meta31328){
this.f = f;
this.ch = ch;
this.meta31328 = meta31328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31329,meta31328__$1){
var self__ = this;
var _31329__$1 = this;
return (new cljs.core.async.t_cljs$core$async31327(self__.f,self__.ch,meta31328__$1));
}));

(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31329){
var self__ = this;
var _31329__$1 = this;
return self__.meta31328;
}));

(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31328","meta31328",1409522544,null)], null);
}));

(cljs.core.async.t_cljs$core$async31327.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31327");

(cljs.core.async.t_cljs$core$async31327.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31327");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31327.
 */
cljs.core.async.__GT_t_cljs$core$async31327 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31327(f__$1,ch__$1,meta31328){
return (new cljs.core.async.t_cljs$core$async31327(f__$1,ch__$1,meta31328));
});

}

return (new cljs.core.async.t_cljs$core$async31327(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31342 = (function (p,ch,meta31343){
this.p = p;
this.ch = ch;
this.meta31343 = meta31343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31344,meta31343__$1){
var self__ = this;
var _31344__$1 = this;
return (new cljs.core.async.t_cljs$core$async31342(self__.p,self__.ch,meta31343__$1));
}));

(cljs.core.async.t_cljs$core$async31342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31344){
var self__ = this;
var _31344__$1 = this;
return self__.meta31343;
}));

(cljs.core.async.t_cljs$core$async31342.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31342.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31342.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31342.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31343","meta31343",302620121,null)], null);
}));

(cljs.core.async.t_cljs$core$async31342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31342");

(cljs.core.async.t_cljs$core$async31342.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31342.
 */
cljs.core.async.__GT_t_cljs$core$async31342 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31342(p__$1,ch__$1,meta31343){
return (new cljs.core.async.t_cljs$core$async31342(p__$1,ch__$1,meta31343));
});

}

return (new cljs.core.async.t_cljs$core$async31342(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31353 = arguments.length;
switch (G__31353) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29197__auto___32896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_31381){
var state_val_31382 = (state_31381[(1)]);
if((state_val_31382 === (7))){
var inst_31377 = (state_31381[(2)]);
var state_31381__$1 = state_31381;
var statearr_31388_32898 = state_31381__$1;
(statearr_31388_32898[(2)] = inst_31377);

(statearr_31388_32898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (1))){
var state_31381__$1 = state_31381;
var statearr_31391_32899 = state_31381__$1;
(statearr_31391_32899[(2)] = null);

(statearr_31391_32899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (4))){
var inst_31363 = (state_31381[(7)]);
var inst_31363__$1 = (state_31381[(2)]);
var inst_31364 = (inst_31363__$1 == null);
var state_31381__$1 = (function (){var statearr_31393 = state_31381;
(statearr_31393[(7)] = inst_31363__$1);

return statearr_31393;
})();
if(cljs.core.truth_(inst_31364)){
var statearr_31394_32901 = state_31381__$1;
(statearr_31394_32901[(1)] = (5));

} else {
var statearr_31396_32902 = state_31381__$1;
(statearr_31396_32902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (6))){
var inst_31363 = (state_31381[(7)]);
var inst_31368 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31363) : p.call(null,inst_31363));
var state_31381__$1 = state_31381;
if(cljs.core.truth_(inst_31368)){
var statearr_31399_32903 = state_31381__$1;
(statearr_31399_32903[(1)] = (8));

} else {
var statearr_31400_32904 = state_31381__$1;
(statearr_31400_32904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (3))){
var inst_31379 = (state_31381[(2)]);
var state_31381__$1 = state_31381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31381__$1,inst_31379);
} else {
if((state_val_31382 === (2))){
var state_31381__$1 = state_31381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31381__$1,(4),ch);
} else {
if((state_val_31382 === (11))){
var inst_31371 = (state_31381[(2)]);
var state_31381__$1 = state_31381;
var statearr_31401_32907 = state_31381__$1;
(statearr_31401_32907[(2)] = inst_31371);

(statearr_31401_32907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (9))){
var state_31381__$1 = state_31381;
var statearr_31402_32911 = state_31381__$1;
(statearr_31402_32911[(2)] = null);

(statearr_31402_32911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (5))){
var inst_31366 = cljs.core.async.close_BANG_(out);
var state_31381__$1 = state_31381;
var statearr_31403_32913 = state_31381__$1;
(statearr_31403_32913[(2)] = inst_31366);

(statearr_31403_32913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (10))){
var inst_31374 = (state_31381[(2)]);
var state_31381__$1 = (function (){var statearr_31408 = state_31381;
(statearr_31408[(8)] = inst_31374);

return statearr_31408;
})();
var statearr_31409_32914 = state_31381__$1;
(statearr_31409_32914[(2)] = null);

(statearr_31409_32914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (8))){
var inst_31363 = (state_31381[(7)]);
var state_31381__$1 = state_31381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31381__$1,(11),out,inst_31363);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28820__auto__ = null;
var cljs$core$async$state_machine__28820__auto____0 = (function (){
var statearr_31418 = [null,null,null,null,null,null,null,null,null];
(statearr_31418[(0)] = cljs$core$async$state_machine__28820__auto__);

(statearr_31418[(1)] = (1));

return statearr_31418;
});
var cljs$core$async$state_machine__28820__auto____1 = (function (state_31381){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_31381);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e31419){if((e31419 instanceof Object)){
var ex__28823__auto__ = e31419;
var statearr_31420_32916 = state_31381;
(statearr_31420_32916[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31419;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32917 = state_31381;
state_31381 = G__32917;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$state_machine__28820__auto__ = function(state_31381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28820__auto____1.call(this,state_31381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28820__auto____0;
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28820__auto____1;
return cljs$core$async$state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_31421 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_31421[(6)] = c__29197__auto___32896);

return statearr_31421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31423 = arguments.length;
switch (G__31423) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29197__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_31489){
var state_val_31490 = (state_31489[(1)]);
if((state_val_31490 === (7))){
var inst_31485 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31493_32923 = state_31489__$1;
(statearr_31493_32923[(2)] = inst_31485);

(statearr_31493_32923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (20))){
var inst_31452 = (state_31489[(7)]);
var inst_31463 = (state_31489[(2)]);
var inst_31464 = cljs.core.next(inst_31452);
var inst_31438 = inst_31464;
var inst_31439 = null;
var inst_31440 = (0);
var inst_31441 = (0);
var state_31489__$1 = (function (){var statearr_31497 = state_31489;
(statearr_31497[(8)] = inst_31439);

(statearr_31497[(9)] = inst_31440);

(statearr_31497[(10)] = inst_31441);

(statearr_31497[(11)] = inst_31438);

(statearr_31497[(12)] = inst_31463);

return statearr_31497;
})();
var statearr_31501_32924 = state_31489__$1;
(statearr_31501_32924[(2)] = null);

(statearr_31501_32924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (1))){
var state_31489__$1 = state_31489;
var statearr_31502_32925 = state_31489__$1;
(statearr_31502_32925[(2)] = null);

(statearr_31502_32925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (4))){
var inst_31427 = (state_31489[(13)]);
var inst_31427__$1 = (state_31489[(2)]);
var inst_31428 = (inst_31427__$1 == null);
var state_31489__$1 = (function (){var statearr_31505 = state_31489;
(statearr_31505[(13)] = inst_31427__$1);

return statearr_31505;
})();
if(cljs.core.truth_(inst_31428)){
var statearr_31507_32926 = state_31489__$1;
(statearr_31507_32926[(1)] = (5));

} else {
var statearr_31508_32927 = state_31489__$1;
(statearr_31508_32927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (15))){
var state_31489__$1 = state_31489;
var statearr_31512_32928 = state_31489__$1;
(statearr_31512_32928[(2)] = null);

(statearr_31512_32928[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (21))){
var state_31489__$1 = state_31489;
var statearr_31516_32929 = state_31489__$1;
(statearr_31516_32929[(2)] = null);

(statearr_31516_32929[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (13))){
var inst_31439 = (state_31489[(8)]);
var inst_31440 = (state_31489[(9)]);
var inst_31441 = (state_31489[(10)]);
var inst_31438 = (state_31489[(11)]);
var inst_31448 = (state_31489[(2)]);
var inst_31449 = (inst_31441 + (1));
var tmp31509 = inst_31439;
var tmp31510 = inst_31440;
var tmp31511 = inst_31438;
var inst_31438__$1 = tmp31511;
var inst_31439__$1 = tmp31509;
var inst_31440__$1 = tmp31510;
var inst_31441__$1 = inst_31449;
var state_31489__$1 = (function (){var statearr_31517 = state_31489;
(statearr_31517[(8)] = inst_31439__$1);

(statearr_31517[(14)] = inst_31448);

(statearr_31517[(9)] = inst_31440__$1);

(statearr_31517[(10)] = inst_31441__$1);

(statearr_31517[(11)] = inst_31438__$1);

return statearr_31517;
})();
var statearr_31518_32931 = state_31489__$1;
(statearr_31518_32931[(2)] = null);

(statearr_31518_32931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (22))){
var state_31489__$1 = state_31489;
var statearr_31520_32932 = state_31489__$1;
(statearr_31520_32932[(2)] = null);

(statearr_31520_32932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (6))){
var inst_31427 = (state_31489[(13)]);
var inst_31436 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31427) : f.call(null,inst_31427));
var inst_31437 = cljs.core.seq(inst_31436);
var inst_31438 = inst_31437;
var inst_31439 = null;
var inst_31440 = (0);
var inst_31441 = (0);
var state_31489__$1 = (function (){var statearr_31521 = state_31489;
(statearr_31521[(8)] = inst_31439);

(statearr_31521[(9)] = inst_31440);

(statearr_31521[(10)] = inst_31441);

(statearr_31521[(11)] = inst_31438);

return statearr_31521;
})();
var statearr_31522_32933 = state_31489__$1;
(statearr_31522_32933[(2)] = null);

(statearr_31522_32933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (17))){
var inst_31452 = (state_31489[(7)]);
var inst_31456 = cljs.core.chunk_first(inst_31452);
var inst_31457 = cljs.core.chunk_rest(inst_31452);
var inst_31458 = cljs.core.count(inst_31456);
var inst_31438 = inst_31457;
var inst_31439 = inst_31456;
var inst_31440 = inst_31458;
var inst_31441 = (0);
var state_31489__$1 = (function (){var statearr_31524 = state_31489;
(statearr_31524[(8)] = inst_31439);

(statearr_31524[(9)] = inst_31440);

(statearr_31524[(10)] = inst_31441);

(statearr_31524[(11)] = inst_31438);

return statearr_31524;
})();
var statearr_31525_32934 = state_31489__$1;
(statearr_31525_32934[(2)] = null);

(statearr_31525_32934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (3))){
var inst_31487 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31489__$1,inst_31487);
} else {
if((state_val_31490 === (12))){
var inst_31475 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31527_32940 = state_31489__$1;
(statearr_31527_32940[(2)] = inst_31475);

(statearr_31527_32940[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (2))){
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31489__$1,(4),in$);
} else {
if((state_val_31490 === (23))){
var inst_31483 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31528_32943 = state_31489__$1;
(statearr_31528_32943[(2)] = inst_31483);

(statearr_31528_32943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (19))){
var inst_31467 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31531_32944 = state_31489__$1;
(statearr_31531_32944[(2)] = inst_31467);

(statearr_31531_32944[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (11))){
var inst_31438 = (state_31489[(11)]);
var inst_31452 = (state_31489[(7)]);
var inst_31452__$1 = cljs.core.seq(inst_31438);
var state_31489__$1 = (function (){var statearr_31532 = state_31489;
(statearr_31532[(7)] = inst_31452__$1);

return statearr_31532;
})();
if(inst_31452__$1){
var statearr_31535_32945 = state_31489__$1;
(statearr_31535_32945[(1)] = (14));

} else {
var statearr_31536_32946 = state_31489__$1;
(statearr_31536_32946[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (9))){
var inst_31477 = (state_31489[(2)]);
var inst_31478 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31489__$1 = (function (){var statearr_31537 = state_31489;
(statearr_31537[(15)] = inst_31477);

return statearr_31537;
})();
if(cljs.core.truth_(inst_31478)){
var statearr_31538_32947 = state_31489__$1;
(statearr_31538_32947[(1)] = (21));

} else {
var statearr_31539_32948 = state_31489__$1;
(statearr_31539_32948[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (5))){
var inst_31430 = cljs.core.async.close_BANG_(out);
var state_31489__$1 = state_31489;
var statearr_31543_32949 = state_31489__$1;
(statearr_31543_32949[(2)] = inst_31430);

(statearr_31543_32949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (14))){
var inst_31452 = (state_31489[(7)]);
var inst_31454 = cljs.core.chunked_seq_QMARK_(inst_31452);
var state_31489__$1 = state_31489;
if(inst_31454){
var statearr_31547_32950 = state_31489__$1;
(statearr_31547_32950[(1)] = (17));

} else {
var statearr_31549_32951 = state_31489__$1;
(statearr_31549_32951[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (16))){
var inst_31472 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31550_32952 = state_31489__$1;
(statearr_31550_32952[(2)] = inst_31472);

(statearr_31550_32952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (10))){
var inst_31439 = (state_31489[(8)]);
var inst_31441 = (state_31489[(10)]);
var inst_31446 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31439,inst_31441);
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31489__$1,(13),out,inst_31446);
} else {
if((state_val_31490 === (18))){
var inst_31452 = (state_31489[(7)]);
var inst_31461 = cljs.core.first(inst_31452);
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31489__$1,(20),out,inst_31461);
} else {
if((state_val_31490 === (8))){
var inst_31440 = (state_31489[(9)]);
var inst_31441 = (state_31489[(10)]);
var inst_31443 = (inst_31441 < inst_31440);
var inst_31444 = inst_31443;
var state_31489__$1 = state_31489;
if(cljs.core.truth_(inst_31444)){
var statearr_31551_32954 = state_31489__$1;
(statearr_31551_32954[(1)] = (10));

} else {
var statearr_31553_32955 = state_31489__$1;
(statearr_31553_32955[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28820__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28820__auto____0 = (function (){
var statearr_31557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31557[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28820__auto__);

(statearr_31557[(1)] = (1));

return statearr_31557;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28820__auto____1 = (function (state_31489){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_31489);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e31558){if((e31558 instanceof Object)){
var ex__28823__auto__ = e31558;
var statearr_31559_32956 = state_31489;
(statearr_31559_32956[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31558;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32957 = state_31489;
state_31489 = G__32957;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28820__auto__ = function(state_31489){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28820__auto____1.call(this,state_31489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28820__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28820__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_31560 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_31560[(6)] = c__29197__auto__);

return statearr_31560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));

return c__29197__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31562 = arguments.length;
switch (G__31562) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31566 = arguments.length;
switch (G__31566) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31571 = arguments.length;
switch (G__31571) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29197__auto___32962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_31596){
var state_val_31597 = (state_31596[(1)]);
if((state_val_31597 === (7))){
var inst_31591 = (state_31596[(2)]);
var state_31596__$1 = state_31596;
var statearr_31598_32963 = state_31596__$1;
(statearr_31598_32963[(2)] = inst_31591);

(statearr_31598_32963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (1))){
var inst_31572 = null;
var state_31596__$1 = (function (){var statearr_31599 = state_31596;
(statearr_31599[(7)] = inst_31572);

return statearr_31599;
})();
var statearr_31601_32964 = state_31596__$1;
(statearr_31601_32964[(2)] = null);

(statearr_31601_32964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (4))){
var inst_31576 = (state_31596[(8)]);
var inst_31576__$1 = (state_31596[(2)]);
var inst_31577 = (inst_31576__$1 == null);
var inst_31578 = cljs.core.not(inst_31577);
var state_31596__$1 = (function (){var statearr_31602 = state_31596;
(statearr_31602[(8)] = inst_31576__$1);

return statearr_31602;
})();
if(inst_31578){
var statearr_31603_32965 = state_31596__$1;
(statearr_31603_32965[(1)] = (5));

} else {
var statearr_31604_32967 = state_31596__$1;
(statearr_31604_32967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (6))){
var state_31596__$1 = state_31596;
var statearr_31605_32971 = state_31596__$1;
(statearr_31605_32971[(2)] = null);

(statearr_31605_32971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (3))){
var inst_31593 = (state_31596[(2)]);
var inst_31594 = cljs.core.async.close_BANG_(out);
var state_31596__$1 = (function (){var statearr_31606 = state_31596;
(statearr_31606[(9)] = inst_31593);

return statearr_31606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31596__$1,inst_31594);
} else {
if((state_val_31597 === (2))){
var state_31596__$1 = state_31596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31596__$1,(4),ch);
} else {
if((state_val_31597 === (11))){
var inst_31576 = (state_31596[(8)]);
var inst_31585 = (state_31596[(2)]);
var inst_31572 = inst_31576;
var state_31596__$1 = (function (){var statearr_31607 = state_31596;
(statearr_31607[(7)] = inst_31572);

(statearr_31607[(10)] = inst_31585);

return statearr_31607;
})();
var statearr_31608_32976 = state_31596__$1;
(statearr_31608_32976[(2)] = null);

(statearr_31608_32976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (9))){
var inst_31576 = (state_31596[(8)]);
var state_31596__$1 = state_31596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31596__$1,(11),out,inst_31576);
} else {
if((state_val_31597 === (5))){
var inst_31572 = (state_31596[(7)]);
var inst_31576 = (state_31596[(8)]);
var inst_31580 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31576,inst_31572);
var state_31596__$1 = state_31596;
if(inst_31580){
var statearr_31610_32979 = state_31596__$1;
(statearr_31610_32979[(1)] = (8));

} else {
var statearr_31611_32980 = state_31596__$1;
(statearr_31611_32980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (10))){
var inst_31588 = (state_31596[(2)]);
var state_31596__$1 = state_31596;
var statearr_31612_32981 = state_31596__$1;
(statearr_31612_32981[(2)] = inst_31588);

(statearr_31612_32981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (8))){
var inst_31572 = (state_31596[(7)]);
var tmp31609 = inst_31572;
var inst_31572__$1 = tmp31609;
var state_31596__$1 = (function (){var statearr_31613 = state_31596;
(statearr_31613[(7)] = inst_31572__$1);

return statearr_31613;
})();
var statearr_31614_32982 = state_31596__$1;
(statearr_31614_32982[(2)] = null);

(statearr_31614_32982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28820__auto__ = null;
var cljs$core$async$state_machine__28820__auto____0 = (function (){
var statearr_31615 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31615[(0)] = cljs$core$async$state_machine__28820__auto__);

(statearr_31615[(1)] = (1));

return statearr_31615;
});
var cljs$core$async$state_machine__28820__auto____1 = (function (state_31596){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_31596);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e31616){if((e31616 instanceof Object)){
var ex__28823__auto__ = e31616;
var statearr_31617_32983 = state_31596;
(statearr_31617_32983[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31616;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32984 = state_31596;
state_31596 = G__32984;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$state_machine__28820__auto__ = function(state_31596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28820__auto____1.call(this,state_31596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28820__auto____0;
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28820__auto____1;
return cljs$core$async$state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_31619 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_31619[(6)] = c__29197__auto___32962);

return statearr_31619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31622 = arguments.length;
switch (G__31622) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29197__auto___32988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_31660){
var state_val_31661 = (state_31660[(1)]);
if((state_val_31661 === (7))){
var inst_31656 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
var statearr_31662_32991 = state_31660__$1;
(statearr_31662_32991[(2)] = inst_31656);

(statearr_31662_32991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (1))){
var inst_31623 = (new Array(n));
var inst_31624 = inst_31623;
var inst_31625 = (0);
var state_31660__$1 = (function (){var statearr_31663 = state_31660;
(statearr_31663[(7)] = inst_31625);

(statearr_31663[(8)] = inst_31624);

return statearr_31663;
})();
var statearr_31664_32992 = state_31660__$1;
(statearr_31664_32992[(2)] = null);

(statearr_31664_32992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (4))){
var inst_31628 = (state_31660[(9)]);
var inst_31628__$1 = (state_31660[(2)]);
var inst_31629 = (inst_31628__$1 == null);
var inst_31630 = cljs.core.not(inst_31629);
var state_31660__$1 = (function (){var statearr_31669 = state_31660;
(statearr_31669[(9)] = inst_31628__$1);

return statearr_31669;
})();
if(inst_31630){
var statearr_31670_32993 = state_31660__$1;
(statearr_31670_32993[(1)] = (5));

} else {
var statearr_31671_32994 = state_31660__$1;
(statearr_31671_32994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (15))){
var inst_31650 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
var statearr_31672_32995 = state_31660__$1;
(statearr_31672_32995[(2)] = inst_31650);

(statearr_31672_32995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (13))){
var state_31660__$1 = state_31660;
var statearr_31673_32996 = state_31660__$1;
(statearr_31673_32996[(2)] = null);

(statearr_31673_32996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (6))){
var inst_31625 = (state_31660[(7)]);
var inst_31646 = (inst_31625 > (0));
var state_31660__$1 = state_31660;
if(cljs.core.truth_(inst_31646)){
var statearr_31674_32997 = state_31660__$1;
(statearr_31674_32997[(1)] = (12));

} else {
var statearr_31675_32998 = state_31660__$1;
(statearr_31675_32998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (3))){
var inst_31658 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31660__$1,inst_31658);
} else {
if((state_val_31661 === (12))){
var inst_31624 = (state_31660[(8)]);
var inst_31648 = cljs.core.vec(inst_31624);
var state_31660__$1 = state_31660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31660__$1,(15),out,inst_31648);
} else {
if((state_val_31661 === (2))){
var state_31660__$1 = state_31660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31660__$1,(4),ch);
} else {
if((state_val_31661 === (11))){
var inst_31640 = (state_31660[(2)]);
var inst_31641 = (new Array(n));
var inst_31624 = inst_31641;
var inst_31625 = (0);
var state_31660__$1 = (function (){var statearr_31680 = state_31660;
(statearr_31680[(7)] = inst_31625);

(statearr_31680[(8)] = inst_31624);

(statearr_31680[(10)] = inst_31640);

return statearr_31680;
})();
var statearr_31681_33000 = state_31660__$1;
(statearr_31681_33000[(2)] = null);

(statearr_31681_33000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (9))){
var inst_31624 = (state_31660[(8)]);
var inst_31638 = cljs.core.vec(inst_31624);
var state_31660__$1 = state_31660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31660__$1,(11),out,inst_31638);
} else {
if((state_val_31661 === (5))){
var inst_31628 = (state_31660[(9)]);
var inst_31625 = (state_31660[(7)]);
var inst_31624 = (state_31660[(8)]);
var inst_31633 = (state_31660[(11)]);
var inst_31632 = (inst_31624[inst_31625] = inst_31628);
var inst_31633__$1 = (inst_31625 + (1));
var inst_31634 = (inst_31633__$1 < n);
var state_31660__$1 = (function (){var statearr_31682 = state_31660;
(statearr_31682[(12)] = inst_31632);

(statearr_31682[(11)] = inst_31633__$1);

return statearr_31682;
})();
if(cljs.core.truth_(inst_31634)){
var statearr_31684_33002 = state_31660__$1;
(statearr_31684_33002[(1)] = (8));

} else {
var statearr_31689_33003 = state_31660__$1;
(statearr_31689_33003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (14))){
var inst_31653 = (state_31660[(2)]);
var inst_31654 = cljs.core.async.close_BANG_(out);
var state_31660__$1 = (function (){var statearr_31694 = state_31660;
(statearr_31694[(13)] = inst_31653);

return statearr_31694;
})();
var statearr_31695_33005 = state_31660__$1;
(statearr_31695_33005[(2)] = inst_31654);

(statearr_31695_33005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (10))){
var inst_31644 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
var statearr_31698_33006 = state_31660__$1;
(statearr_31698_33006[(2)] = inst_31644);

(statearr_31698_33006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (8))){
var inst_31624 = (state_31660[(8)]);
var inst_31633 = (state_31660[(11)]);
var tmp31690 = inst_31624;
var inst_31624__$1 = tmp31690;
var inst_31625 = inst_31633;
var state_31660__$1 = (function (){var statearr_31699 = state_31660;
(statearr_31699[(7)] = inst_31625);

(statearr_31699[(8)] = inst_31624__$1);

return statearr_31699;
})();
var statearr_31700_33007 = state_31660__$1;
(statearr_31700_33007[(2)] = null);

(statearr_31700_33007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28820__auto__ = null;
var cljs$core$async$state_machine__28820__auto____0 = (function (){
var statearr_31706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31706[(0)] = cljs$core$async$state_machine__28820__auto__);

(statearr_31706[(1)] = (1));

return statearr_31706;
});
var cljs$core$async$state_machine__28820__auto____1 = (function (state_31660){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_31660);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e31709){if((e31709 instanceof Object)){
var ex__28823__auto__ = e31709;
var statearr_31711_33015 = state_31660;
(statearr_31711_33015[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31709;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33019 = state_31660;
state_31660 = G__33019;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$state_machine__28820__auto__ = function(state_31660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28820__auto____1.call(this,state_31660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28820__auto____0;
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28820__auto____1;
return cljs$core$async$state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_31714 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_31714[(6)] = c__29197__auto___32988);

return statearr_31714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31719 = arguments.length;
switch (G__31719) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29197__auto___33024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_31774){
var state_val_31775 = (state_31774[(1)]);
if((state_val_31775 === (7))){
var inst_31768 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31781_33025 = state_31774__$1;
(statearr_31781_33025[(2)] = inst_31768);

(statearr_31781_33025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (1))){
var inst_31725 = [];
var inst_31726 = inst_31725;
var inst_31727 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31774__$1 = (function (){var statearr_31785 = state_31774;
(statearr_31785[(7)] = inst_31727);

(statearr_31785[(8)] = inst_31726);

return statearr_31785;
})();
var statearr_31786_33029 = state_31774__$1;
(statearr_31786_33029[(2)] = null);

(statearr_31786_33029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (4))){
var inst_31732 = (state_31774[(9)]);
var inst_31732__$1 = (state_31774[(2)]);
var inst_31733 = (inst_31732__$1 == null);
var inst_31734 = cljs.core.not(inst_31733);
var state_31774__$1 = (function (){var statearr_31787 = state_31774;
(statearr_31787[(9)] = inst_31732__$1);

return statearr_31787;
})();
if(inst_31734){
var statearr_31788_33030 = state_31774__$1;
(statearr_31788_33030[(1)] = (5));

} else {
var statearr_31789_33031 = state_31774__$1;
(statearr_31789_33031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (15))){
var inst_31762 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31796_33035 = state_31774__$1;
(statearr_31796_33035[(2)] = inst_31762);

(statearr_31796_33035[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (13))){
var state_31774__$1 = state_31774;
var statearr_31798_33036 = state_31774__$1;
(statearr_31798_33036[(2)] = null);

(statearr_31798_33036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (6))){
var inst_31726 = (state_31774[(8)]);
var inst_31757 = inst_31726.length;
var inst_31758 = (inst_31757 > (0));
var state_31774__$1 = state_31774;
if(cljs.core.truth_(inst_31758)){
var statearr_31802_33037 = state_31774__$1;
(statearr_31802_33037[(1)] = (12));

} else {
var statearr_31803_33038 = state_31774__$1;
(statearr_31803_33038[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (3))){
var inst_31770 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31774__$1,inst_31770);
} else {
if((state_val_31775 === (12))){
var inst_31726 = (state_31774[(8)]);
var inst_31760 = cljs.core.vec(inst_31726);
var state_31774__$1 = state_31774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31774__$1,(15),out,inst_31760);
} else {
if((state_val_31775 === (2))){
var state_31774__$1 = state_31774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31774__$1,(4),ch);
} else {
if((state_val_31775 === (11))){
var inst_31732 = (state_31774[(9)]);
var inst_31736 = (state_31774[(10)]);
var inst_31750 = (state_31774[(2)]);
var inst_31751 = [];
var inst_31752 = inst_31751.push(inst_31732);
var inst_31726 = inst_31751;
var inst_31727 = inst_31736;
var state_31774__$1 = (function (){var statearr_31808 = state_31774;
(statearr_31808[(11)] = inst_31752);

(statearr_31808[(7)] = inst_31727);

(statearr_31808[(12)] = inst_31750);

(statearr_31808[(8)] = inst_31726);

return statearr_31808;
})();
var statearr_31810_33043 = state_31774__$1;
(statearr_31810_33043[(2)] = null);

(statearr_31810_33043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (9))){
var inst_31726 = (state_31774[(8)]);
var inst_31748 = cljs.core.vec(inst_31726);
var state_31774__$1 = state_31774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31774__$1,(11),out,inst_31748);
} else {
if((state_val_31775 === (5))){
var inst_31732 = (state_31774[(9)]);
var inst_31736 = (state_31774[(10)]);
var inst_31727 = (state_31774[(7)]);
var inst_31736__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31732) : f.call(null,inst_31732));
var inst_31741 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31736__$1,inst_31727);
var inst_31742 = cljs.core.keyword_identical_QMARK_(inst_31727,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31743 = ((inst_31741) || (inst_31742));
var state_31774__$1 = (function (){var statearr_31815 = state_31774;
(statearr_31815[(10)] = inst_31736__$1);

return statearr_31815;
})();
if(cljs.core.truth_(inst_31743)){
var statearr_31816_33056 = state_31774__$1;
(statearr_31816_33056[(1)] = (8));

} else {
var statearr_31817_33057 = state_31774__$1;
(statearr_31817_33057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (14))){
var inst_31765 = (state_31774[(2)]);
var inst_31766 = cljs.core.async.close_BANG_(out);
var state_31774__$1 = (function (){var statearr_31819 = state_31774;
(statearr_31819[(13)] = inst_31765);

return statearr_31819;
})();
var statearr_31820_33058 = state_31774__$1;
(statearr_31820_33058[(2)] = inst_31766);

(statearr_31820_33058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (10))){
var inst_31755 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31821_33059 = state_31774__$1;
(statearr_31821_33059[(2)] = inst_31755);

(statearr_31821_33059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (8))){
var inst_31732 = (state_31774[(9)]);
var inst_31736 = (state_31774[(10)]);
var inst_31726 = (state_31774[(8)]);
var inst_31745 = inst_31726.push(inst_31732);
var tmp31818 = inst_31726;
var inst_31726__$1 = tmp31818;
var inst_31727 = inst_31736;
var state_31774__$1 = (function (){var statearr_31823 = state_31774;
(statearr_31823[(14)] = inst_31745);

(statearr_31823[(7)] = inst_31727);

(statearr_31823[(8)] = inst_31726__$1);

return statearr_31823;
})();
var statearr_31825_33060 = state_31774__$1;
(statearr_31825_33060[(2)] = null);

(statearr_31825_33060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28820__auto__ = null;
var cljs$core$async$state_machine__28820__auto____0 = (function (){
var statearr_31833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31833[(0)] = cljs$core$async$state_machine__28820__auto__);

(statearr_31833[(1)] = (1));

return statearr_31833;
});
var cljs$core$async$state_machine__28820__auto____1 = (function (state_31774){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_31774);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e31837){if((e31837 instanceof Object)){
var ex__28823__auto__ = e31837;
var statearr_31839_33061 = state_31774;
(statearr_31839_33061[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33062 = state_31774;
state_31774 = G__33062;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
cljs$core$async$state_machine__28820__auto__ = function(state_31774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28820__auto____1.call(this,state_31774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28820__auto____0;
cljs$core$async$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28820__auto____1;
return cljs$core$async$state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_31843 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_31843[(6)] = c__29197__auto___33024);

return statearr_31843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
