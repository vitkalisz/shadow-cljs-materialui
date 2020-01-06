goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__34955__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34957__i = 0, G__34957__a = new Array(arguments.length -  0);
while (G__34957__i < G__34957__a.length) {G__34957__a[G__34957__i] = arguments[G__34957__i + 0]; ++G__34957__i;}
  args = new cljs.core.IndexedSeq(G__34957__a,0,null);
} 
return G__34955__delegate.call(this,args);};
G__34955.cljs$lang$maxFixedArity = 0;
G__34955.cljs$lang$applyTo = (function (arglist__34958){
var args = cljs.core.seq(arglist__34958);
return G__34955__delegate(args);
});
G__34955.cljs$core$IFn$_invoke$arity$variadic = G__34955__delegate;
return G__34955;
})()
);

(o.error = (function() { 
var G__34959__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34960__i = 0, G__34960__a = new Array(arguments.length -  0);
while (G__34960__i < G__34960__a.length) {G__34960__a[G__34960__i] = arguments[G__34960__i + 0]; ++G__34960__i;}
  args = new cljs.core.IndexedSeq(G__34960__a,0,null);
} 
return G__34959__delegate.call(this,args);};
G__34959.cljs$lang$maxFixedArity = 0;
G__34959.cljs$lang$applyTo = (function (arglist__34961){
var args = cljs.core.seq(arglist__34961);
return G__34959__delegate(args);
});
G__34959.cljs$core$IFn$_invoke$arity$variadic = G__34959__delegate;
return G__34959;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
