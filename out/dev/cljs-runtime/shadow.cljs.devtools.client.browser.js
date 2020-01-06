goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35040 = arguments.length;
var i__4790__auto___35041 = (0);
while(true){
if((i__4790__auto___35041 < len__4789__auto___35040)){
args__4795__auto__.push((arguments[i__4790__auto___35041]));

var G__35042 = (i__4790__auto___35041 + (1));
i__4790__auto___35041 = G__35042;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34645){
var G__34646 = cljs.core.first(seq34645);
var seq34645__$1 = cljs.core.next(seq34645);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34646,seq34645__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__34667){
var map__34668 = p__34667;
var map__34668__$1 = (((((!((map__34668 == null))))?(((((map__34668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34668):map__34668);
var src = map__34668__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34668__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34668__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34674 = cljs.core.seq(sources);
var chunk__34675 = null;
var count__34676 = (0);
var i__34677 = (0);
while(true){
if((i__34677 < count__34676)){
var map__34702 = chunk__34675.cljs$core$IIndexed$_nth$arity$2(null,i__34677);
var map__34702__$1 = (((((!((map__34702 == null))))?(((((map__34702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34702):map__34702);
var src = map__34702__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34702__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34702__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34702__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34702__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34708){var e_35051 = e34708;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35051);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35051.message)].join('')));
}

var G__35052 = seq__34674;
var G__35053 = chunk__34675;
var G__35054 = count__34676;
var G__35055 = (i__34677 + (1));
seq__34674 = G__35052;
chunk__34675 = G__35053;
count__34676 = G__35054;
i__34677 = G__35055;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34674);
if(temp__5735__auto__){
var seq__34674__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34674__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34674__$1);
var G__35056 = cljs.core.chunk_rest(seq__34674__$1);
var G__35057 = c__4609__auto__;
var G__35058 = cljs.core.count(c__4609__auto__);
var G__35059 = (0);
seq__34674 = G__35056;
chunk__34675 = G__35057;
count__34676 = G__35058;
i__34677 = G__35059;
continue;
} else {
var map__34709 = cljs.core.first(seq__34674__$1);
var map__34709__$1 = (((((!((map__34709 == null))))?(((((map__34709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34709):map__34709);
var src = map__34709__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34709__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34709__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34709__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34709__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34711){var e_35061 = e34711;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35061);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35061.message)].join('')));
}

var G__35063 = cljs.core.next(seq__34674__$1);
var G__35064 = null;
var G__35065 = (0);
var G__35066 = (0);
seq__34674 = G__35063;
chunk__34675 = G__35064;
count__34676 = G__35065;
i__34677 = G__35066;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__34717 = cljs.core.seq(js_requires);
var chunk__34718 = null;
var count__34719 = (0);
var i__34720 = (0);
while(true){
if((i__34720 < count__34719)){
var js_ns = chunk__34718.cljs$core$IIndexed$_nth$arity$2(null,i__34720);
var require_str_35070 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35070);


var G__35071 = seq__34717;
var G__35072 = chunk__34718;
var G__35073 = count__34719;
var G__35074 = (i__34720 + (1));
seq__34717 = G__35071;
chunk__34718 = G__35072;
count__34719 = G__35073;
i__34720 = G__35074;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34717);
if(temp__5735__auto__){
var seq__34717__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34717__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34717__$1);
var G__35075 = cljs.core.chunk_rest(seq__34717__$1);
var G__35076 = c__4609__auto__;
var G__35077 = cljs.core.count(c__4609__auto__);
var G__35078 = (0);
seq__34717 = G__35075;
chunk__34718 = G__35076;
count__34719 = G__35077;
i__34720 = G__35078;
continue;
} else {
var js_ns = cljs.core.first(seq__34717__$1);
var require_str_35079 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35079);


var G__35080 = cljs.core.next(seq__34717__$1);
var G__35081 = null;
var G__35082 = (0);
var G__35083 = (0);
seq__34717 = G__35080;
chunk__34718 = G__35081;
count__34719 = G__35082;
i__34720 = G__35083;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__34721 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34721) : callback.call(null,G__34721));
} else {
var G__34722 = shadow.cljs.devtools.client.env.files_url();
var G__34723 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__34724 = "POST";
var G__34725 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__34726 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34722,G__34723,G__34724,G__34725,G__34726);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34730){
var map__34731 = p__34730;
var map__34731__$1 = (((((!((map__34731 == null))))?(((((map__34731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34731):map__34731);
var msg = map__34731__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34731__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34731__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__34733 = info;
var map__34733__$1 = (((((!((map__34733 == null))))?(((((map__34733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34733):map__34733);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34733__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34733__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34735(s__34736){
return (new cljs.core.LazySeq(null,(function (){
var s__34736__$1 = s__34736;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34736__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34742 = cljs.core.first(xs__6292__auto__);
var map__34742__$1 = (((((!((map__34742 == null))))?(((((map__34742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34742):map__34742);
var src = map__34742__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34742__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34742__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34736__$1,map__34742,map__34742__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34733,map__34733__$1,sources,compiled,map__34731,map__34731__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34735_$_iter__34737(s__34738){
return (new cljs.core.LazySeq(null,((function (s__34736__$1,map__34742,map__34742__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34733,map__34733__$1,sources,compiled,map__34731,map__34731__$1,msg,info,reload_info){
return (function (){
var s__34738__$1 = s__34738;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34738__$1);
if(temp__5735__auto____$1){
var s__34738__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34738__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34738__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34740 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34739 = (0);
while(true){
if((i__34739 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__34739);
cljs.core.chunk_append(b__34740,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35089 = (i__34739 + (1));
i__34739 = G__35089;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34740),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34735_$_iter__34737(cljs.core.chunk_rest(s__34738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34740),null);
}
} else {
var warning = cljs.core.first(s__34738__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34735_$_iter__34737(cljs.core.rest(s__34738__$2)));
}
} else {
return null;
}
break;
}
});})(s__34736__$1,map__34742,map__34742__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34733,map__34733__$1,sources,compiled,map__34731,map__34731__$1,msg,info,reload_info))
,null,null));
});})(s__34736__$1,map__34742,map__34742__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34733,map__34733__$1,sources,compiled,map__34731,map__34731__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34735(cljs.core.rest(s__34736__$1)));
} else {
var G__35090 = cljs.core.rest(s__34736__$1);
s__34736__$1 = G__35090;
continue;
}
} else {
var G__35091 = cljs.core.rest(s__34736__$1);
s__34736__$1 = G__35091;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__34745_35092 = cljs.core.seq(warnings);
var chunk__34746_35093 = null;
var count__34747_35094 = (0);
var i__34748_35095 = (0);
while(true){
if((i__34748_35095 < count__34747_35094)){
var map__34753_35096 = chunk__34746_35093.cljs$core$IIndexed$_nth$arity$2(null,i__34748_35095);
var map__34753_35097__$1 = (((((!((map__34753_35096 == null))))?(((((map__34753_35096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34753_35096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34753_35096):map__34753_35096);
var w_35098 = map__34753_35097__$1;
var msg_35099__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34753_35097__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34753_35097__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34753_35097__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34753_35097__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35102)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35100),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35101),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35099__$1)].join(''));


var G__35103 = seq__34745_35092;
var G__35104 = chunk__34746_35093;
var G__35105 = count__34747_35094;
var G__35106 = (i__34748_35095 + (1));
seq__34745_35092 = G__35103;
chunk__34746_35093 = G__35104;
count__34747_35094 = G__35105;
i__34748_35095 = G__35106;
continue;
} else {
var temp__5735__auto___35107 = cljs.core.seq(seq__34745_35092);
if(temp__5735__auto___35107){
var seq__34745_35108__$1 = temp__5735__auto___35107;
if(cljs.core.chunked_seq_QMARK_(seq__34745_35108__$1)){
var c__4609__auto___35109 = cljs.core.chunk_first(seq__34745_35108__$1);
var G__35110 = cljs.core.chunk_rest(seq__34745_35108__$1);
var G__35111 = c__4609__auto___35109;
var G__35112 = cljs.core.count(c__4609__auto___35109);
var G__35113 = (0);
seq__34745_35092 = G__35110;
chunk__34746_35093 = G__35111;
count__34747_35094 = G__35112;
i__34748_35095 = G__35113;
continue;
} else {
var map__34755_35114 = cljs.core.first(seq__34745_35108__$1);
var map__34755_35115__$1 = (((((!((map__34755_35114 == null))))?(((((map__34755_35114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34755_35114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34755_35114):map__34755_35114);
var w_35116 = map__34755_35115__$1;
var msg_35117__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34755_35115__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34755_35115__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34755_35115__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34755_35115__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35120)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35118),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35119),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35117__$1)].join(''));


var G__35121 = cljs.core.next(seq__34745_35108__$1);
var G__35122 = null;
var G__35123 = (0);
var G__35124 = (0);
seq__34745_35092 = G__35121;
chunk__34746_35093 = G__35122;
count__34747_35094 = G__35123;
i__34748_35095 = G__35124;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34757){
var map__34759 = p__34757;
var map__34759__$1 = (((((!((map__34759 == null))))?(((((map__34759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34759):map__34759);
var src = map__34759__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34759__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34759__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34764){
var map__34766 = p__34764;
var map__34766__$1 = (((((!((map__34766 == null))))?(((((map__34766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34766):map__34766);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34766__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34771){
var map__34772 = p__34771;
var map__34772__$1 = (((((!((map__34772 == null))))?(((((map__34772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34772):map__34772);
var rc = map__34772__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34772__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34729_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34729_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34788){
var map__34789 = p__34788;
var map__34789__$1 = (((((!((map__34789 == null))))?(((((map__34789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34789):map__34789);
var msg = map__34789__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34789__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34793 = cljs.core.seq(updates);
var chunk__34795 = null;
var count__34796 = (0);
var i__34797 = (0);
while(true){
if((i__34797 < count__34796)){
var path = chunk__34795.cljs$core$IIndexed$_nth$arity$2(null,i__34797);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34876_35136 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34879_35137 = null;
var count__34880_35138 = (0);
var i__34881_35139 = (0);
while(true){
if((i__34881_35139 < count__34880_35138)){
var node_35140 = chunk__34879_35137.cljs$core$IIndexed$_nth$arity$2(null,i__34881_35139);
var path_match_35141 = shadow.cljs.devtools.client.browser.match_paths(node_35140.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35141)){
var new_link_35142 = (function (){var G__34903 = node_35140.cloneNode(true);
G__34903.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35141),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34903;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35141], 0));

goog.dom.insertSiblingAfter(new_link_35142,node_35140);

goog.dom.removeNode(node_35140);


var G__35143 = seq__34876_35136;
var G__35144 = chunk__34879_35137;
var G__35145 = count__34880_35138;
var G__35146 = (i__34881_35139 + (1));
seq__34876_35136 = G__35143;
chunk__34879_35137 = G__35144;
count__34880_35138 = G__35145;
i__34881_35139 = G__35146;
continue;
} else {
var G__35147 = seq__34876_35136;
var G__35148 = chunk__34879_35137;
var G__35149 = count__34880_35138;
var G__35150 = (i__34881_35139 + (1));
seq__34876_35136 = G__35147;
chunk__34879_35137 = G__35148;
count__34880_35138 = G__35149;
i__34881_35139 = G__35150;
continue;
}
} else {
var temp__5735__auto___35151 = cljs.core.seq(seq__34876_35136);
if(temp__5735__auto___35151){
var seq__34876_35152__$1 = temp__5735__auto___35151;
if(cljs.core.chunked_seq_QMARK_(seq__34876_35152__$1)){
var c__4609__auto___35154 = cljs.core.chunk_first(seq__34876_35152__$1);
var G__35155 = cljs.core.chunk_rest(seq__34876_35152__$1);
var G__35156 = c__4609__auto___35154;
var G__35157 = cljs.core.count(c__4609__auto___35154);
var G__35158 = (0);
seq__34876_35136 = G__35155;
chunk__34879_35137 = G__35156;
count__34880_35138 = G__35157;
i__34881_35139 = G__35158;
continue;
} else {
var node_35162 = cljs.core.first(seq__34876_35152__$1);
var path_match_35163 = shadow.cljs.devtools.client.browser.match_paths(node_35162.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35163)){
var new_link_35164 = (function (){var G__34907 = node_35162.cloneNode(true);
G__34907.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35163),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34907;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35163], 0));

goog.dom.insertSiblingAfter(new_link_35164,node_35162);

goog.dom.removeNode(node_35162);


var G__35165 = cljs.core.next(seq__34876_35152__$1);
var G__35166 = null;
var G__35167 = (0);
var G__35168 = (0);
seq__34876_35136 = G__35165;
chunk__34879_35137 = G__35166;
count__34880_35138 = G__35167;
i__34881_35139 = G__35168;
continue;
} else {
var G__35169 = cljs.core.next(seq__34876_35152__$1);
var G__35170 = null;
var G__35171 = (0);
var G__35172 = (0);
seq__34876_35136 = G__35169;
chunk__34879_35137 = G__35170;
count__34880_35138 = G__35171;
i__34881_35139 = G__35172;
continue;
}
}
} else {
}
}
break;
}


var G__35173 = seq__34793;
var G__35174 = chunk__34795;
var G__35175 = count__34796;
var G__35176 = (i__34797 + (1));
seq__34793 = G__35173;
chunk__34795 = G__35174;
count__34796 = G__35175;
i__34797 = G__35176;
continue;
} else {
var G__35178 = seq__34793;
var G__35179 = chunk__34795;
var G__35180 = count__34796;
var G__35181 = (i__34797 + (1));
seq__34793 = G__35178;
chunk__34795 = G__35179;
count__34796 = G__35180;
i__34797 = G__35181;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34793);
if(temp__5735__auto__){
var seq__34793__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34793__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34793__$1);
var G__35182 = cljs.core.chunk_rest(seq__34793__$1);
var G__35183 = c__4609__auto__;
var G__35184 = cljs.core.count(c__4609__auto__);
var G__35185 = (0);
seq__34793 = G__35182;
chunk__34795 = G__35183;
count__34796 = G__35184;
i__34797 = G__35185;
continue;
} else {
var path = cljs.core.first(seq__34793__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34912_35186 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34916_35187 = null;
var count__34917_35188 = (0);
var i__34918_35189 = (0);
while(true){
if((i__34918_35189 < count__34917_35188)){
var node_35190 = chunk__34916_35187.cljs$core$IIndexed$_nth$arity$2(null,i__34918_35189);
var path_match_35191 = shadow.cljs.devtools.client.browser.match_paths(node_35190.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35191)){
var new_link_35192 = (function (){var G__34948 = node_35190.cloneNode(true);
G__34948.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35191),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34948;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35191], 0));

goog.dom.insertSiblingAfter(new_link_35192,node_35190);

goog.dom.removeNode(node_35190);


var G__35193 = seq__34912_35186;
var G__35194 = chunk__34916_35187;
var G__35195 = count__34917_35188;
var G__35196 = (i__34918_35189 + (1));
seq__34912_35186 = G__35193;
chunk__34916_35187 = G__35194;
count__34917_35188 = G__35195;
i__34918_35189 = G__35196;
continue;
} else {
var G__35197 = seq__34912_35186;
var G__35198 = chunk__34916_35187;
var G__35199 = count__34917_35188;
var G__35200 = (i__34918_35189 + (1));
seq__34912_35186 = G__35197;
chunk__34916_35187 = G__35198;
count__34917_35188 = G__35199;
i__34918_35189 = G__35200;
continue;
}
} else {
var temp__5735__auto___35201__$1 = cljs.core.seq(seq__34912_35186);
if(temp__5735__auto___35201__$1){
var seq__34912_35202__$1 = temp__5735__auto___35201__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34912_35202__$1)){
var c__4609__auto___35203 = cljs.core.chunk_first(seq__34912_35202__$1);
var G__35204 = cljs.core.chunk_rest(seq__34912_35202__$1);
var G__35205 = c__4609__auto___35203;
var G__35206 = cljs.core.count(c__4609__auto___35203);
var G__35207 = (0);
seq__34912_35186 = G__35204;
chunk__34916_35187 = G__35205;
count__34917_35188 = G__35206;
i__34918_35189 = G__35207;
continue;
} else {
var node_35208 = cljs.core.first(seq__34912_35202__$1);
var path_match_35209 = shadow.cljs.devtools.client.browser.match_paths(node_35208.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35209)){
var new_link_35210 = (function (){var G__34956 = node_35208.cloneNode(true);
G__34956.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35209),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34956;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35209], 0));

goog.dom.insertSiblingAfter(new_link_35210,node_35208);

goog.dom.removeNode(node_35208);


var G__35211 = cljs.core.next(seq__34912_35202__$1);
var G__35212 = null;
var G__35213 = (0);
var G__35214 = (0);
seq__34912_35186 = G__35211;
chunk__34916_35187 = G__35212;
count__34917_35188 = G__35213;
i__34918_35189 = G__35214;
continue;
} else {
var G__35215 = cljs.core.next(seq__34912_35202__$1);
var G__35216 = null;
var G__35217 = (0);
var G__35218 = (0);
seq__34912_35186 = G__35215;
chunk__34916_35187 = G__35216;
count__34917_35188 = G__35217;
i__34918_35189 = G__35218;
continue;
}
}
} else {
}
}
break;
}


var G__35219 = cljs.core.next(seq__34793__$1);
var G__35220 = null;
var G__35221 = (0);
var G__35222 = (0);
seq__34793 = G__35219;
chunk__34795 = G__35220;
count__34796 = G__35221;
i__34797 = G__35222;
continue;
} else {
var G__35223 = cljs.core.next(seq__34793__$1);
var G__35224 = null;
var G__35225 = (0);
var G__35226 = (0);
seq__34793 = G__35223;
chunk__34795 = G__35224;
count__34796 = G__35225;
i__34797 = G__35226;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34969){
var map__34970 = p__34969;
var map__34970__$1 = (((((!((map__34970 == null))))?(((((map__34970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34970):map__34970);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34970__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34970__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34972,done){
var map__34973 = p__34972;
var map__34973__$1 = (((((!((map__34973 == null))))?(((((map__34973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34973):map__34973);
var msg = map__34973__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34973__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34973__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34973__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34973__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34978){
var map__34979 = p__34978;
var map__34979__$1 = (((((!((map__34979 == null))))?(((((map__34979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34979):map__34979);
var src = map__34979__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34979__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e34988){var e = e34988;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34992,done){
var map__34993 = p__34992;
var map__34993__$1 = (((((!((map__34993 == null))))?(((((map__34993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34993):map__34993);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34993__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34993__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35002){
var map__35004 = p__35002;
var map__35004__$1 = (((((!((map__35004 == null))))?(((((map__35004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35004):map__35004);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35004__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35004__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35012,done){
var map__35013 = p__35012;
var map__35013__$1 = (((((!((map__35013 == null))))?(((((map__35013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35013):map__35013);
var msg = map__35013__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35013__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35015_35275 = type;
var G__35015_35276__$1 = (((G__35015_35275 instanceof cljs.core.Keyword))?G__35015_35275.fqn:null);
switch (G__35015_35276__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35018 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35019 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__35020 = "POST";
var G__35021 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35022 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35018,G__35019,G__35020,G__35021,G__35022);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__35024 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__35023 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__35023.cljs$core$IFn$_invoke$arity$1 ? fexpr__35023.cljs$core$IFn$_invoke$arity$1(G__35024) : fexpr__35023.call(null,G__35024));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e35031){var e = e35031;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35278 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35278)){
var s_35279 = temp__5735__auto___35278;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35279.onclose = (function (e){
return null;
}));

s_35279.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
