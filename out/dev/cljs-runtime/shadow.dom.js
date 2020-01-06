goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32258 = coll;
var G__32259 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32258,G__32259) : shadow.dom.lazy_native_coll_seq.call(null,G__32258,G__32259));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32304 = arguments.length;
switch (G__32304) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32315 = arguments.length;
switch (G__32315) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32324 = arguments.length;
switch (G__32324) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32400 = arguments.length;
switch (G__32400) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32415 = arguments.length;
switch (G__32415) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__32420 = document;
var G__32421 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32420,G__32421);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__32431 = shadow.dom.dom_node(parent);
var G__32432 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32431,G__32432);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__32438 = shadow.dom.dom_node(el);
var G__32439 = cls;
return goog.dom.classlist.add(G__32438,G__32439);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__32442 = shadow.dom.dom_node(el);
var G__32443 = cls;
return goog.dom.classlist.remove(G__32442,G__32443);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32446 = arguments.length;
switch (G__32446) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__32450 = shadow.dom.dom_node(el);
var G__32451 = cls;
return goog.dom.classlist.toggle(G__32450,G__32451);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32454){if((e32454 instanceof Object)){
var e = e32454;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32454;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32459 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32460 = null;
var count__32461 = (0);
var i__32462 = (0);
while(true){
if((i__32462 < count__32461)){
var el = chunk__32460.cljs$core$IIndexed$_nth$arity$2(null,i__32462);
var handler_33111__$1 = ((function (seq__32459,chunk__32460,count__32461,i__32462,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32459,chunk__32460,count__32461,i__32462,el))
;
var G__32482_33112 = el;
var G__32483_33113 = cljs.core.name(ev);
var G__32484_33114 = handler_33111__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32482_33112,G__32483_33113,G__32484_33114) : shadow.dom.dom_listen.call(null,G__32482_33112,G__32483_33113,G__32484_33114));


var G__33115 = seq__32459;
var G__33116 = chunk__32460;
var G__33117 = count__32461;
var G__33118 = (i__32462 + (1));
seq__32459 = G__33115;
chunk__32460 = G__33116;
count__32461 = G__33117;
i__32462 = G__33118;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32459);
if(temp__5735__auto__){
var seq__32459__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32459__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32459__$1);
var G__33119 = cljs.core.chunk_rest(seq__32459__$1);
var G__33120 = c__4609__auto__;
var G__33121 = cljs.core.count(c__4609__auto__);
var G__33122 = (0);
seq__32459 = G__33119;
chunk__32460 = G__33120;
count__32461 = G__33121;
i__32462 = G__33122;
continue;
} else {
var el = cljs.core.first(seq__32459__$1);
var handler_33123__$1 = ((function (seq__32459,chunk__32460,count__32461,i__32462,el,seq__32459__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32459,chunk__32460,count__32461,i__32462,el,seq__32459__$1,temp__5735__auto__))
;
var G__32488_33124 = el;
var G__32489_33125 = cljs.core.name(ev);
var G__32490_33126 = handler_33123__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32488_33124,G__32489_33125,G__32490_33126) : shadow.dom.dom_listen.call(null,G__32488_33124,G__32489_33125,G__32490_33126));


var G__33127 = cljs.core.next(seq__32459__$1);
var G__33128 = null;
var G__33129 = (0);
var G__33130 = (0);
seq__32459 = G__33127;
chunk__32460 = G__33128;
count__32461 = G__33129;
i__32462 = G__33130;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32493 = arguments.length;
switch (G__32493) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__32499 = shadow.dom.dom_node(el);
var G__32500 = cljs.core.name(ev);
var G__32501 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32499,G__32500,G__32501) : shadow.dom.dom_listen.call(null,G__32499,G__32500,G__32501));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__32505 = shadow.dom.dom_node(el);
var G__32506 = cljs.core.name(ev);
var G__32507 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__32505,G__32506,G__32507) : shadow.dom.dom_listen_remove.call(null,G__32505,G__32506,G__32507));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32511 = cljs.core.seq(events);
var chunk__32512 = null;
var count__32513 = (0);
var i__32514 = (0);
while(true){
if((i__32514 < count__32513)){
var vec__32524 = chunk__32512.cljs$core$IIndexed$_nth$arity$2(null,i__32514);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32524,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32524,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33132 = seq__32511;
var G__33133 = chunk__32512;
var G__33134 = count__32513;
var G__33135 = (i__32514 + (1));
seq__32511 = G__33132;
chunk__32512 = G__33133;
count__32513 = G__33134;
i__32514 = G__33135;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32511);
if(temp__5735__auto__){
var seq__32511__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32511__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32511__$1);
var G__33136 = cljs.core.chunk_rest(seq__32511__$1);
var G__33137 = c__4609__auto__;
var G__33138 = cljs.core.count(c__4609__auto__);
var G__33139 = (0);
seq__32511 = G__33136;
chunk__32512 = G__33137;
count__32513 = G__33138;
i__32514 = G__33139;
continue;
} else {
var vec__32531 = cljs.core.first(seq__32511__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32531,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32531,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33140 = cljs.core.next(seq__32511__$1);
var G__33141 = null;
var G__33142 = (0);
var G__33143 = (0);
seq__32511 = G__33140;
chunk__32512 = G__33141;
count__32513 = G__33142;
i__32514 = G__33143;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32537 = cljs.core.seq(styles);
var chunk__32538 = null;
var count__32539 = (0);
var i__32540 = (0);
while(true){
if((i__32540 < count__32539)){
var vec__32559 = chunk__32538.cljs$core$IIndexed$_nth$arity$2(null,i__32540);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32559,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32559,(1),null);
var G__32563_33146 = dom;
var G__32564_33147 = cljs.core.name(k);
var G__32565_33148 = (((v == null))?"":v);
goog.style.setStyle(G__32563_33146,G__32564_33147,G__32565_33148);


var G__33149 = seq__32537;
var G__33150 = chunk__32538;
var G__33151 = count__32539;
var G__33152 = (i__32540 + (1));
seq__32537 = G__33149;
chunk__32538 = G__33150;
count__32539 = G__33151;
i__32540 = G__33152;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32537);
if(temp__5735__auto__){
var seq__32537__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32537__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32537__$1);
var G__33153 = cljs.core.chunk_rest(seq__32537__$1);
var G__33154 = c__4609__auto__;
var G__33155 = cljs.core.count(c__4609__auto__);
var G__33156 = (0);
seq__32537 = G__33153;
chunk__32538 = G__33154;
count__32539 = G__33155;
i__32540 = G__33156;
continue;
} else {
var vec__32568 = cljs.core.first(seq__32537__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32568,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32568,(1),null);
var G__32572_33157 = dom;
var G__32573_33158 = cljs.core.name(k);
var G__32574_33159 = (((v == null))?"":v);
goog.style.setStyle(G__32572_33157,G__32573_33158,G__32574_33159);


var G__33160 = cljs.core.next(seq__32537__$1);
var G__33161 = null;
var G__33162 = (0);
var G__33163 = (0);
seq__32537 = G__33160;
chunk__32538 = G__33161;
count__32539 = G__33162;
i__32540 = G__33163;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32580_33164 = key;
var G__32580_33165__$1 = (((G__32580_33164 instanceof cljs.core.Keyword))?G__32580_33164.fqn:null);
switch (G__32580_33165__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33167 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33167,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33167,"aria-");
}
})())){
el.setAttribute(ks_33167,value);
} else {
(el[ks_33167] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__32592 = shadow.dom.dom_node(el);
var G__32593 = cls;
return goog.dom.classlist.contains(G__32592,G__32593);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32594){
var map__32595 = p__32594;
var map__32595__$1 = (((((!((map__32595 == null))))?(((((map__32595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32595):map__32595);
var props = map__32595__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32595__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32599 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32599,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32599,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32599,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32603 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32603,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32603;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32608 = arguments.length;
switch (G__32608) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32609){
var vec__32610 = p__32609;
var seq__32611 = cljs.core.seq(vec__32610);
var first__32612 = cljs.core.first(seq__32611);
var seq__32611__$1 = cljs.core.next(seq__32611);
var nn = first__32612;
var first__32612__$1 = cljs.core.first(seq__32611__$1);
var seq__32611__$2 = cljs.core.next(seq__32611__$1);
var np = first__32612__$1;
var nc = seq__32611__$2;
var node = vec__32610;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32613 = nn;
var G__32614 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32613,G__32614) : create_fn.call(null,G__32613,G__32614));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32615 = nn;
var G__32616 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32615,G__32616) : create_fn.call(null,G__32615,G__32616));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32620 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32620,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32620,(1),null);
var seq__32624_33176 = cljs.core.seq(node_children);
var chunk__32625_33177 = null;
var count__32626_33178 = (0);
var i__32627_33179 = (0);
while(true){
if((i__32627_33179 < count__32626_33178)){
var child_struct_33180 = chunk__32625_33177.cljs$core$IIndexed$_nth$arity$2(null,i__32627_33179);
var children_33181 = shadow.dom.dom_node(child_struct_33180);
if(cljs.core.seq_QMARK_(children_33181)){
var seq__32667_33182 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33181));
var chunk__32669_33183 = null;
var count__32670_33184 = (0);
var i__32671_33185 = (0);
while(true){
if((i__32671_33185 < count__32670_33184)){
var child_33186 = chunk__32669_33183.cljs$core$IIndexed$_nth$arity$2(null,i__32671_33185);
if(cljs.core.truth_(child_33186)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33186);


var G__33187 = seq__32667_33182;
var G__33188 = chunk__32669_33183;
var G__33189 = count__32670_33184;
var G__33190 = (i__32671_33185 + (1));
seq__32667_33182 = G__33187;
chunk__32669_33183 = G__33188;
count__32670_33184 = G__33189;
i__32671_33185 = G__33190;
continue;
} else {
var G__33191 = seq__32667_33182;
var G__33192 = chunk__32669_33183;
var G__33193 = count__32670_33184;
var G__33194 = (i__32671_33185 + (1));
seq__32667_33182 = G__33191;
chunk__32669_33183 = G__33192;
count__32670_33184 = G__33193;
i__32671_33185 = G__33194;
continue;
}
} else {
var temp__5735__auto___33195 = cljs.core.seq(seq__32667_33182);
if(temp__5735__auto___33195){
var seq__32667_33196__$1 = temp__5735__auto___33195;
if(cljs.core.chunked_seq_QMARK_(seq__32667_33196__$1)){
var c__4609__auto___33198 = cljs.core.chunk_first(seq__32667_33196__$1);
var G__33199 = cljs.core.chunk_rest(seq__32667_33196__$1);
var G__33200 = c__4609__auto___33198;
var G__33201 = cljs.core.count(c__4609__auto___33198);
var G__33202 = (0);
seq__32667_33182 = G__33199;
chunk__32669_33183 = G__33200;
count__32670_33184 = G__33201;
i__32671_33185 = G__33202;
continue;
} else {
var child_33203 = cljs.core.first(seq__32667_33196__$1);
if(cljs.core.truth_(child_33203)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33203);


var G__33204 = cljs.core.next(seq__32667_33196__$1);
var G__33205 = null;
var G__33206 = (0);
var G__33207 = (0);
seq__32667_33182 = G__33204;
chunk__32669_33183 = G__33205;
count__32670_33184 = G__33206;
i__32671_33185 = G__33207;
continue;
} else {
var G__33208 = cljs.core.next(seq__32667_33196__$1);
var G__33209 = null;
var G__33210 = (0);
var G__33211 = (0);
seq__32667_33182 = G__33208;
chunk__32669_33183 = G__33209;
count__32670_33184 = G__33210;
i__32671_33185 = G__33211;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33181);
}


var G__33212 = seq__32624_33176;
var G__33213 = chunk__32625_33177;
var G__33214 = count__32626_33178;
var G__33215 = (i__32627_33179 + (1));
seq__32624_33176 = G__33212;
chunk__32625_33177 = G__33213;
count__32626_33178 = G__33214;
i__32627_33179 = G__33215;
continue;
} else {
var temp__5735__auto___33216 = cljs.core.seq(seq__32624_33176);
if(temp__5735__auto___33216){
var seq__32624_33217__$1 = temp__5735__auto___33216;
if(cljs.core.chunked_seq_QMARK_(seq__32624_33217__$1)){
var c__4609__auto___33218 = cljs.core.chunk_first(seq__32624_33217__$1);
var G__33220 = cljs.core.chunk_rest(seq__32624_33217__$1);
var G__33221 = c__4609__auto___33218;
var G__33222 = cljs.core.count(c__4609__auto___33218);
var G__33223 = (0);
seq__32624_33176 = G__33220;
chunk__32625_33177 = G__33221;
count__32626_33178 = G__33222;
i__32627_33179 = G__33223;
continue;
} else {
var child_struct_33226 = cljs.core.first(seq__32624_33217__$1);
var children_33227 = shadow.dom.dom_node(child_struct_33226);
if(cljs.core.seq_QMARK_(children_33227)){
var seq__32685_33228 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33227));
var chunk__32687_33229 = null;
var count__32688_33230 = (0);
var i__32689_33231 = (0);
while(true){
if((i__32689_33231 < count__32688_33230)){
var child_33232 = chunk__32687_33229.cljs$core$IIndexed$_nth$arity$2(null,i__32689_33231);
if(cljs.core.truth_(child_33232)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33232);


var G__33233 = seq__32685_33228;
var G__33234 = chunk__32687_33229;
var G__33235 = count__32688_33230;
var G__33236 = (i__32689_33231 + (1));
seq__32685_33228 = G__33233;
chunk__32687_33229 = G__33234;
count__32688_33230 = G__33235;
i__32689_33231 = G__33236;
continue;
} else {
var G__33238 = seq__32685_33228;
var G__33239 = chunk__32687_33229;
var G__33240 = count__32688_33230;
var G__33241 = (i__32689_33231 + (1));
seq__32685_33228 = G__33238;
chunk__32687_33229 = G__33239;
count__32688_33230 = G__33240;
i__32689_33231 = G__33241;
continue;
}
} else {
var temp__5735__auto___33242__$1 = cljs.core.seq(seq__32685_33228);
if(temp__5735__auto___33242__$1){
var seq__32685_33244__$1 = temp__5735__auto___33242__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32685_33244__$1)){
var c__4609__auto___33245 = cljs.core.chunk_first(seq__32685_33244__$1);
var G__33246 = cljs.core.chunk_rest(seq__32685_33244__$1);
var G__33247 = c__4609__auto___33245;
var G__33248 = cljs.core.count(c__4609__auto___33245);
var G__33249 = (0);
seq__32685_33228 = G__33246;
chunk__32687_33229 = G__33247;
count__32688_33230 = G__33248;
i__32689_33231 = G__33249;
continue;
} else {
var child_33251 = cljs.core.first(seq__32685_33244__$1);
if(cljs.core.truth_(child_33251)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33251);


var G__33252 = cljs.core.next(seq__32685_33244__$1);
var G__33253 = null;
var G__33254 = (0);
var G__33255 = (0);
seq__32685_33228 = G__33252;
chunk__32687_33229 = G__33253;
count__32688_33230 = G__33254;
i__32689_33231 = G__33255;
continue;
} else {
var G__33256 = cljs.core.next(seq__32685_33244__$1);
var G__33257 = null;
var G__33258 = (0);
var G__33259 = (0);
seq__32685_33228 = G__33256;
chunk__32687_33229 = G__33257;
count__32688_33230 = G__33258;
i__32689_33231 = G__33259;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33227);
}


var G__33260 = cljs.core.next(seq__32624_33217__$1);
var G__33261 = null;
var G__33262 = (0);
var G__33263 = (0);
seq__32624_33176 = G__33260;
chunk__32625_33177 = G__33261;
count__32626_33178 = G__33262;
i__32627_33179 = G__33263;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__32698 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__32698);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32701 = cljs.core.seq(node);
var chunk__32702 = null;
var count__32703 = (0);
var i__32704 = (0);
while(true){
if((i__32704 < count__32703)){
var n = chunk__32702.cljs$core$IIndexed$_nth$arity$2(null,i__32704);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33264 = seq__32701;
var G__33265 = chunk__32702;
var G__33266 = count__32703;
var G__33267 = (i__32704 + (1));
seq__32701 = G__33264;
chunk__32702 = G__33265;
count__32703 = G__33266;
i__32704 = G__33267;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32701);
if(temp__5735__auto__){
var seq__32701__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32701__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32701__$1);
var G__33268 = cljs.core.chunk_rest(seq__32701__$1);
var G__33269 = c__4609__auto__;
var G__33270 = cljs.core.count(c__4609__auto__);
var G__33271 = (0);
seq__32701 = G__33268;
chunk__32702 = G__33269;
count__32703 = G__33270;
i__32704 = G__33271;
continue;
} else {
var n = cljs.core.first(seq__32701__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33275 = cljs.core.next(seq__32701__$1);
var G__33276 = null;
var G__33277 = (0);
var G__33278 = (0);
seq__32701 = G__33275;
chunk__32702 = G__33276;
count__32703 = G__33277;
i__32704 = G__33278;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__32709 = shadow.dom.dom_node(new$);
var G__32710 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__32709,G__32710);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32716 = arguments.length;
switch (G__32716) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32724 = arguments.length;
switch (G__32724) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32735 = arguments.length;
switch (G__32735) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33286 = arguments.length;
var i__4790__auto___33287 = (0);
while(true){
if((i__4790__auto___33287 < len__4789__auto___33286)){
args__4795__auto__.push((arguments[i__4790__auto___33287]));

var G__33288 = (i__4790__auto___33287 + (1));
i__4790__auto___33287 = G__33288;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32758_33293 = cljs.core.seq(nodes);
var chunk__32759_33294 = null;
var count__32760_33295 = (0);
var i__32761_33296 = (0);
while(true){
if((i__32761_33296 < count__32760_33295)){
var node_33297 = chunk__32759_33294.cljs$core$IIndexed$_nth$arity$2(null,i__32761_33296);
fragment.appendChild(shadow.dom._to_dom(node_33297));


var G__33298 = seq__32758_33293;
var G__33299 = chunk__32759_33294;
var G__33300 = count__32760_33295;
var G__33301 = (i__32761_33296 + (1));
seq__32758_33293 = G__33298;
chunk__32759_33294 = G__33299;
count__32760_33295 = G__33300;
i__32761_33296 = G__33301;
continue;
} else {
var temp__5735__auto___33302 = cljs.core.seq(seq__32758_33293);
if(temp__5735__auto___33302){
var seq__32758_33303__$1 = temp__5735__auto___33302;
if(cljs.core.chunked_seq_QMARK_(seq__32758_33303__$1)){
var c__4609__auto___33304 = cljs.core.chunk_first(seq__32758_33303__$1);
var G__33305 = cljs.core.chunk_rest(seq__32758_33303__$1);
var G__33306 = c__4609__auto___33304;
var G__33307 = cljs.core.count(c__4609__auto___33304);
var G__33308 = (0);
seq__32758_33293 = G__33305;
chunk__32759_33294 = G__33306;
count__32760_33295 = G__33307;
i__32761_33296 = G__33308;
continue;
} else {
var node_33309 = cljs.core.first(seq__32758_33303__$1);
fragment.appendChild(shadow.dom._to_dom(node_33309));


var G__33310 = cljs.core.next(seq__32758_33303__$1);
var G__33311 = null;
var G__33312 = (0);
var G__33313 = (0);
seq__32758_33293 = G__33310;
chunk__32759_33294 = G__33311;
count__32760_33295 = G__33312;
i__32761_33296 = G__33313;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32753){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32753));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32795_33314 = cljs.core.seq(scripts);
var chunk__32796_33315 = null;
var count__32797_33316 = (0);
var i__32798_33317 = (0);
while(true){
if((i__32798_33317 < count__32797_33316)){
var vec__32813_33318 = chunk__32796_33315.cljs$core$IIndexed$_nth$arity$2(null,i__32798_33317);
var script_tag_33319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32813_33318,(0),null);
var script_body_33320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32813_33318,(1),null);
eval(script_body_33320);


var G__33321 = seq__32795_33314;
var G__33322 = chunk__32796_33315;
var G__33323 = count__32797_33316;
var G__33324 = (i__32798_33317 + (1));
seq__32795_33314 = G__33321;
chunk__32796_33315 = G__33322;
count__32797_33316 = G__33323;
i__32798_33317 = G__33324;
continue;
} else {
var temp__5735__auto___33328 = cljs.core.seq(seq__32795_33314);
if(temp__5735__auto___33328){
var seq__32795_33329__$1 = temp__5735__auto___33328;
if(cljs.core.chunked_seq_QMARK_(seq__32795_33329__$1)){
var c__4609__auto___33330 = cljs.core.chunk_first(seq__32795_33329__$1);
var G__33331 = cljs.core.chunk_rest(seq__32795_33329__$1);
var G__33332 = c__4609__auto___33330;
var G__33333 = cljs.core.count(c__4609__auto___33330);
var G__33334 = (0);
seq__32795_33314 = G__33331;
chunk__32796_33315 = G__33332;
count__32797_33316 = G__33333;
i__32798_33317 = G__33334;
continue;
} else {
var vec__32817_33335 = cljs.core.first(seq__32795_33329__$1);
var script_tag_33336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32817_33335,(0),null);
var script_body_33337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32817_33335,(1),null);
eval(script_body_33337);


var G__33338 = cljs.core.next(seq__32795_33329__$1);
var G__33339 = null;
var G__33340 = (0);
var G__33341 = (0);
seq__32795_33314 = G__33338;
chunk__32796_33315 = G__33339;
count__32797_33316 = G__33340;
i__32798_33317 = G__33341;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32822){
var vec__32823 = p__32822;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32823,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32823,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__32833 = shadow.dom.dom_node(el);
var G__32834 = cls;
return goog.dom.getAncestorByClass(G__32833,G__32834);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32839 = arguments.length;
switch (G__32839) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__32842 = shadow.dom.dom_node(el);
var G__32843 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__32842,G__32843);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__32846 = shadow.dom.dom_node(el);
var G__32847 = cljs.core.name(tag);
var G__32848 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__32846,G__32847,G__32848);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__32850 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__32850);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__32853 = shadow.dom.dom_node(dom);
var G__32854 = value;
return goog.dom.forms.setValue(G__32853,G__32854);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32860 = cljs.core.seq(style_keys);
var chunk__32861 = null;
var count__32862 = (0);
var i__32863 = (0);
while(true){
if((i__32863 < count__32862)){
var it = chunk__32861.cljs$core$IIndexed$_nth$arity$2(null,i__32863);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33346 = seq__32860;
var G__33347 = chunk__32861;
var G__33348 = count__32862;
var G__33349 = (i__32863 + (1));
seq__32860 = G__33346;
chunk__32861 = G__33347;
count__32862 = G__33348;
i__32863 = G__33349;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32860);
if(temp__5735__auto__){
var seq__32860__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32860__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32860__$1);
var G__33353 = cljs.core.chunk_rest(seq__32860__$1);
var G__33354 = c__4609__auto__;
var G__33355 = cljs.core.count(c__4609__auto__);
var G__33356 = (0);
seq__32860 = G__33353;
chunk__32861 = G__33354;
count__32862 = G__33355;
i__32863 = G__33356;
continue;
} else {
var it = cljs.core.first(seq__32860__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33357 = cljs.core.next(seq__32860__$1);
var G__33358 = null;
var G__33359 = (0);
var G__33360 = (0);
seq__32860 = G__33357;
chunk__32861 = G__33358;
count__32862 = G__33359;
i__32863 = G__33360;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32871,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32879 = k32871;
var G__32879__$1 = (((G__32879 instanceof cljs.core.Keyword))?G__32879.fqn:null);
switch (G__32879__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32871,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32882){
var vec__32883 = p__32882;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32883,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32883,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32870){
var self__ = this;
var G__32870__$1 = this;
return (new cljs.core.RecordIter((0),G__32870__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32886 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32886(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32872,other32873){
var self__ = this;
var this32872__$1 = this;
return (((!((other32873 == null)))) && ((this32872__$1.constructor === other32873.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32872__$1.x,other32873.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32872__$1.y,other32873.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32872__$1.__extmap,other32873.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32870){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32887 = cljs.core.keyword_identical_QMARK_;
var expr__32888 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32890 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__32891 = expr__32888;
return (pred__32887.cljs$core$IFn$_invoke$arity$2 ? pred__32887.cljs$core$IFn$_invoke$arity$2(G__32890,G__32891) : pred__32887.call(null,G__32890,G__32891));
})())){
return (new shadow.dom.Coordinate(G__32870,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32892 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__32893 = expr__32888;
return (pred__32887.cljs$core$IFn$_invoke$arity$2 ? pred__32887.cljs$core$IFn$_invoke$arity$2(G__32892,G__32893) : pred__32887.call(null,G__32892,G__32893));
})())){
return (new shadow.dom.Coordinate(self__.x,G__32870,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32870),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32870){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32870,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32876){
var extmap__4478__auto__ = (function (){var G__32894 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32876,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32876)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32894);
} else {
return G__32894;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32876),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32876),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__32897 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__32897);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__32900 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__32900);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__32905 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__32905);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32908,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32915 = k32908;
var G__32915__$1 = (((G__32915 instanceof cljs.core.Keyword))?G__32915.fqn:null);
switch (G__32915__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32908,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32918){
var vec__32920 = p__32918;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32920,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32920,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32906){
var self__ = this;
var G__32906__$1 = this;
return (new cljs.core.RecordIter((0),G__32906__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32930 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32930(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32909,other32910){
var self__ = this;
var this32909__$1 = this;
return (((!((other32910 == null)))) && ((this32909__$1.constructor === other32910.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32909__$1.w,other32910.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32909__$1.h,other32910.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32909__$1.__extmap,other32910.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32906){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32935 = cljs.core.keyword_identical_QMARK_;
var expr__32936 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32938 = new cljs.core.Keyword(null,"w","w",354169001);
var G__32939 = expr__32936;
return (pred__32935.cljs$core$IFn$_invoke$arity$2 ? pred__32935.cljs$core$IFn$_invoke$arity$2(G__32938,G__32939) : pred__32935.call(null,G__32938,G__32939));
})())){
return (new shadow.dom.Size(G__32906,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32941 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__32942 = expr__32936;
return (pred__32935.cljs$core$IFn$_invoke$arity$2 ? pred__32935.cljs$core$IFn$_invoke$arity$2(G__32941,G__32942) : pred__32935.call(null,G__32941,G__32942));
})())){
return (new shadow.dom.Size(self__.w,G__32906,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32906),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32906){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32906,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32912){
var extmap__4478__auto__ = (function (){var G__32953 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32912,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32912)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32953);
} else {
return G__32953;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32912),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32912),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__32958 = shadow.dom.dom_node(el);
return goog.style.getSize(G__32958);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__33387 = (i + (1));
var G__33388 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33387;
ret = G__33388;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32972){
var vec__32973 = p__32972;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32973,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32973,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32978 = arguments.length;
switch (G__32978) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__32986_33390 = new_node;
var G__32987_33391 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__32986_33390,G__32987_33391);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__32989_33394 = new_node;
var G__32990_33395 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__32989_33394,G__32990_33395);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33396 = ps;
var G__33397 = (i + (1));
el__$1 = G__33396;
i = G__33397;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__32999 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__32999);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33001 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33001);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33004 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33004);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33008 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33008,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33008,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33008,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33011_33399 = cljs.core.seq(props);
var chunk__33012_33400 = null;
var count__33013_33401 = (0);
var i__33014_33402 = (0);
while(true){
if((i__33014_33402 < count__33013_33401)){
var vec__33026_33403 = chunk__33012_33400.cljs$core$IIndexed$_nth$arity$2(null,i__33014_33402);
var k_33404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33026_33403,(0),null);
var v_33405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33026_33403,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33404);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33404),v_33405);


var G__33406 = seq__33011_33399;
var G__33407 = chunk__33012_33400;
var G__33408 = count__33013_33401;
var G__33409 = (i__33014_33402 + (1));
seq__33011_33399 = G__33406;
chunk__33012_33400 = G__33407;
count__33013_33401 = G__33408;
i__33014_33402 = G__33409;
continue;
} else {
var temp__5735__auto___33410 = cljs.core.seq(seq__33011_33399);
if(temp__5735__auto___33410){
var seq__33011_33411__$1 = temp__5735__auto___33410;
if(cljs.core.chunked_seq_QMARK_(seq__33011_33411__$1)){
var c__4609__auto___33412 = cljs.core.chunk_first(seq__33011_33411__$1);
var G__33413 = cljs.core.chunk_rest(seq__33011_33411__$1);
var G__33414 = c__4609__auto___33412;
var G__33415 = cljs.core.count(c__4609__auto___33412);
var G__33416 = (0);
seq__33011_33399 = G__33413;
chunk__33012_33400 = G__33414;
count__33013_33401 = G__33415;
i__33014_33402 = G__33416;
continue;
} else {
var vec__33032_33418 = cljs.core.first(seq__33011_33411__$1);
var k_33419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33032_33418,(0),null);
var v_33420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33032_33418,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33419);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33419),v_33420);


var G__33422 = cljs.core.next(seq__33011_33411__$1);
var G__33423 = null;
var G__33424 = (0);
var G__33425 = (0);
seq__33011_33399 = G__33422;
chunk__33012_33400 = G__33423;
count__33013_33401 = G__33424;
i__33014_33402 = G__33425;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33040 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33040,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33040,(1),null);
var seq__33044_33426 = cljs.core.seq(node_children);
var chunk__33046_33427 = null;
var count__33047_33428 = (0);
var i__33048_33429 = (0);
while(true){
if((i__33048_33429 < count__33047_33428)){
var child_struct_33431 = chunk__33046_33427.cljs$core$IIndexed$_nth$arity$2(null,i__33048_33429);
if((!((child_struct_33431 == null)))){
if(typeof child_struct_33431 === 'string'){
var text_33432 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33432),child_struct_33431].join(''));
} else {
var children_33433 = shadow.dom.svg_node(child_struct_33431);
if(cljs.core.seq_QMARK_(children_33433)){
var seq__33069_33434 = cljs.core.seq(children_33433);
var chunk__33071_33435 = null;
var count__33072_33436 = (0);
var i__33073_33437 = (0);
while(true){
if((i__33073_33437 < count__33072_33436)){
var child_33438 = chunk__33071_33435.cljs$core$IIndexed$_nth$arity$2(null,i__33073_33437);
if(cljs.core.truth_(child_33438)){
node.appendChild(child_33438);


var G__33439 = seq__33069_33434;
var G__33440 = chunk__33071_33435;
var G__33441 = count__33072_33436;
var G__33442 = (i__33073_33437 + (1));
seq__33069_33434 = G__33439;
chunk__33071_33435 = G__33440;
count__33072_33436 = G__33441;
i__33073_33437 = G__33442;
continue;
} else {
var G__33443 = seq__33069_33434;
var G__33444 = chunk__33071_33435;
var G__33445 = count__33072_33436;
var G__33446 = (i__33073_33437 + (1));
seq__33069_33434 = G__33443;
chunk__33071_33435 = G__33444;
count__33072_33436 = G__33445;
i__33073_33437 = G__33446;
continue;
}
} else {
var temp__5735__auto___33447 = cljs.core.seq(seq__33069_33434);
if(temp__5735__auto___33447){
var seq__33069_33448__$1 = temp__5735__auto___33447;
if(cljs.core.chunked_seq_QMARK_(seq__33069_33448__$1)){
var c__4609__auto___33453 = cljs.core.chunk_first(seq__33069_33448__$1);
var G__33454 = cljs.core.chunk_rest(seq__33069_33448__$1);
var G__33455 = c__4609__auto___33453;
var G__33456 = cljs.core.count(c__4609__auto___33453);
var G__33457 = (0);
seq__33069_33434 = G__33454;
chunk__33071_33435 = G__33455;
count__33072_33436 = G__33456;
i__33073_33437 = G__33457;
continue;
} else {
var child_33458 = cljs.core.first(seq__33069_33448__$1);
if(cljs.core.truth_(child_33458)){
node.appendChild(child_33458);


var G__33460 = cljs.core.next(seq__33069_33448__$1);
var G__33461 = null;
var G__33462 = (0);
var G__33463 = (0);
seq__33069_33434 = G__33460;
chunk__33071_33435 = G__33461;
count__33072_33436 = G__33462;
i__33073_33437 = G__33463;
continue;
} else {
var G__33464 = cljs.core.next(seq__33069_33448__$1);
var G__33465 = null;
var G__33466 = (0);
var G__33467 = (0);
seq__33069_33434 = G__33464;
chunk__33071_33435 = G__33465;
count__33072_33436 = G__33466;
i__33073_33437 = G__33467;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33433);
}
}


var G__33468 = seq__33044_33426;
var G__33469 = chunk__33046_33427;
var G__33470 = count__33047_33428;
var G__33471 = (i__33048_33429 + (1));
seq__33044_33426 = G__33468;
chunk__33046_33427 = G__33469;
count__33047_33428 = G__33470;
i__33048_33429 = G__33471;
continue;
} else {
var G__33472 = seq__33044_33426;
var G__33473 = chunk__33046_33427;
var G__33474 = count__33047_33428;
var G__33475 = (i__33048_33429 + (1));
seq__33044_33426 = G__33472;
chunk__33046_33427 = G__33473;
count__33047_33428 = G__33474;
i__33048_33429 = G__33475;
continue;
}
} else {
var temp__5735__auto___33476 = cljs.core.seq(seq__33044_33426);
if(temp__5735__auto___33476){
var seq__33044_33477__$1 = temp__5735__auto___33476;
if(cljs.core.chunked_seq_QMARK_(seq__33044_33477__$1)){
var c__4609__auto___33478 = cljs.core.chunk_first(seq__33044_33477__$1);
var G__33479 = cljs.core.chunk_rest(seq__33044_33477__$1);
var G__33480 = c__4609__auto___33478;
var G__33481 = cljs.core.count(c__4609__auto___33478);
var G__33482 = (0);
seq__33044_33426 = G__33479;
chunk__33046_33427 = G__33480;
count__33047_33428 = G__33481;
i__33048_33429 = G__33482;
continue;
} else {
var child_struct_33483 = cljs.core.first(seq__33044_33477__$1);
if((!((child_struct_33483 == null)))){
if(typeof child_struct_33483 === 'string'){
var text_33484 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33484),child_struct_33483].join(''));
} else {
var children_33486 = shadow.dom.svg_node(child_struct_33483);
if(cljs.core.seq_QMARK_(children_33486)){
var seq__33075_33487 = cljs.core.seq(children_33486);
var chunk__33077_33488 = null;
var count__33078_33489 = (0);
var i__33079_33490 = (0);
while(true){
if((i__33079_33490 < count__33078_33489)){
var child_33491 = chunk__33077_33488.cljs$core$IIndexed$_nth$arity$2(null,i__33079_33490);
if(cljs.core.truth_(child_33491)){
node.appendChild(child_33491);


var G__33492 = seq__33075_33487;
var G__33493 = chunk__33077_33488;
var G__33494 = count__33078_33489;
var G__33495 = (i__33079_33490 + (1));
seq__33075_33487 = G__33492;
chunk__33077_33488 = G__33493;
count__33078_33489 = G__33494;
i__33079_33490 = G__33495;
continue;
} else {
var G__33496 = seq__33075_33487;
var G__33497 = chunk__33077_33488;
var G__33498 = count__33078_33489;
var G__33499 = (i__33079_33490 + (1));
seq__33075_33487 = G__33496;
chunk__33077_33488 = G__33497;
count__33078_33489 = G__33498;
i__33079_33490 = G__33499;
continue;
}
} else {
var temp__5735__auto___33501__$1 = cljs.core.seq(seq__33075_33487);
if(temp__5735__auto___33501__$1){
var seq__33075_33505__$1 = temp__5735__auto___33501__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33075_33505__$1)){
var c__4609__auto___33506 = cljs.core.chunk_first(seq__33075_33505__$1);
var G__33507 = cljs.core.chunk_rest(seq__33075_33505__$1);
var G__33508 = c__4609__auto___33506;
var G__33509 = cljs.core.count(c__4609__auto___33506);
var G__33510 = (0);
seq__33075_33487 = G__33507;
chunk__33077_33488 = G__33508;
count__33078_33489 = G__33509;
i__33079_33490 = G__33510;
continue;
} else {
var child_33511 = cljs.core.first(seq__33075_33505__$1);
if(cljs.core.truth_(child_33511)){
node.appendChild(child_33511);


var G__33512 = cljs.core.next(seq__33075_33505__$1);
var G__33513 = null;
var G__33514 = (0);
var G__33515 = (0);
seq__33075_33487 = G__33512;
chunk__33077_33488 = G__33513;
count__33078_33489 = G__33514;
i__33079_33490 = G__33515;
continue;
} else {
var G__33516 = cljs.core.next(seq__33075_33505__$1);
var G__33517 = null;
var G__33518 = (0);
var G__33519 = (0);
seq__33075_33487 = G__33516;
chunk__33077_33488 = G__33517;
count__33078_33489 = G__33518;
i__33079_33490 = G__33519;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33486);
}
}


var G__33520 = cljs.core.next(seq__33044_33477__$1);
var G__33521 = null;
var G__33522 = (0);
var G__33523 = (0);
seq__33044_33426 = G__33520;
chunk__33046_33427 = G__33521;
count__33047_33428 = G__33522;
i__33048_33429 = G__33523;
continue;
} else {
var G__33524 = cljs.core.next(seq__33044_33477__$1);
var G__33525 = null;
var G__33526 = (0);
var G__33527 = (0);
seq__33044_33426 = G__33524;
chunk__33046_33427 = G__33525;
count__33047_33428 = G__33526;
i__33048_33429 = G__33527;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33081_33528 = shadow.dom._to_svg;
var G__33082_33529 = "string";
var G__33083_33530 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__33081_33528,G__33082_33529,G__33083_33530);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33084_33531 = shadow.dom._to_svg;
var G__33085_33532 = "null";
var G__33086_33533 = (function (_){
return null;
});
goog.object.set(G__33084_33531,G__33085_33532,G__33086_33533);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33534 = arguments.length;
var i__4790__auto___33535 = (0);
while(true){
if((i__4790__auto___33535 < len__4789__auto___33534)){
args__4795__auto__.push((arguments[i__4790__auto___33535]));

var G__33536 = (i__4790__auto___33535 + (1));
i__4790__auto___33535 = G__33536;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33087){
var G__33088 = cljs.core.first(seq33087);
var seq33087__$1 = cljs.core.next(seq33087);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33088,seq33087__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33090 = arguments.length;
switch (G__33090) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__33091_33539 = shadow.dom.dom_node(el);
var G__33092_33540 = cljs.core.name(event);
var G__33093_33541 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33091_33539,G__33092_33540,G__33093_33541) : shadow.dom.dom_listen.call(null,G__33091_33539,G__33092_33540,G__33093_33541));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__29197__auto___33542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29198__auto__ = (function (){var switch__28819__auto__ = (function (state_33098){
var state_val_33099 = (state_33098[(1)]);
if((state_val_33099 === (1))){
var state_33098__$1 = state_33098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33098__$1,(2),once_or_cleanup);
} else {
if((state_val_33099 === (2))){
var inst_33095 = (state_33098[(2)]);
var inst_33096 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33098__$1 = (function (){var statearr_33100 = state_33098;
(statearr_33100[(7)] = inst_33095);

return statearr_33100;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33098__$1,inst_33096);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28820__auto__ = null;
var shadow$dom$state_machine__28820__auto____0 = (function (){
var statearr_33101 = [null,null,null,null,null,null,null,null];
(statearr_33101[(0)] = shadow$dom$state_machine__28820__auto__);

(statearr_33101[(1)] = (1));

return statearr_33101;
});
var shadow$dom$state_machine__28820__auto____1 = (function (state_33098){
while(true){
var ret_value__28821__auto__ = (function (){try{while(true){
var result__28822__auto__ = switch__28819__auto__(state_33098);
if(cljs.core.keyword_identical_QMARK_(result__28822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28822__auto__;
}
break;
}
}catch (e33102){if((e33102 instanceof Object)){
var ex__28823__auto__ = e33102;
var statearr_33103_33550 = state_33098;
(statearr_33103_33550[(5)] = ex__28823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33102;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33551 = state_33098;
state_33098 = G__33551;
continue;
} else {
return ret_value__28821__auto__;
}
break;
}
});
shadow$dom$state_machine__28820__auto__ = function(state_33098){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28820__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28820__auto____1.call(this,state_33098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28820__auto____0;
shadow$dom$state_machine__28820__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28820__auto____1;
return shadow$dom$state_machine__28820__auto__;
})()
})();
var state__29199__auto__ = (function (){var statearr_33104 = (f__29198__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29198__auto__.cljs$core$IFn$_invoke$arity$0() : f__29198__auto__.call(null));
(statearr_33104[(6)] = c__29197__auto___33542);

return statearr_33104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29199__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
