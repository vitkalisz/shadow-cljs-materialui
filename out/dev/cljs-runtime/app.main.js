goog.provide('app.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('app.layout');
app.main.main_page = (function app$main$main_page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.layout.frame], null);
});
app.main.mount_app = (function app$main$mount_app(){
var G__26317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.main_page], null);
var G__26318 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__26317,G__26318) : reagent.core.render_component.call(null,G__26317,G__26318));
});
app.main.main_BANG_ = (function app$main$main_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[main]: loading"], 0));

return app.main.mount_app();
});
app.main.reload_BANG_ = (function app$main$reload_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[main]: reload!"], 0));

return app.main.mount_app();
});

//# sourceMappingURL=app.main.js.map
