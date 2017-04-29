self.$dart_deferred_initializers$=self.$dart_deferred_initializers$||Object.create(null)
$dart_deferred_initializers$.current=function($globals$,$){var A=$globals$.A
var B=$globals$.B
var C=$globals$.C
var D=$globals$.D
var E=$globals$.E
var F=$globals$.F
var G=$globals$.G
var H=$globals$.H
var J=$globals$.J
var K=$globals$.K
var L=$globals$.L
var M=$globals$.M
var N=$globals$.N
var O=$globals$.O
var P=$globals$.P
var Q=$globals$.Q
var R=$globals$.R
var S=$globals$.S
var T=$globals$.T
var U=$globals$.U
var V=$globals$.V
var W=$globals$.W
var X=$globals$.X
var Y=$globals$.Y
var Z=$globals$.Z
var init=$globals$.init
var setupProgram=$globals$.setupProgram
var I=$globals$.I
var dart=[["","",,P,{"^":"",
p2:function(a,b,c){var z=new P.Q(0,$.p,null,[c])
P.jw(a,new P.wJ(b,z))
return z},
wJ:{"^":"b:0;a,b",
$0:[function(){var z,y,x,w
try{x=this.a.$0()
this.b.ai(x)}catch(w){z=H.E(w)
y=H.N(w)
P.kk(this.b,z,y)}},null,null,0,0,null,"call"]}}],["","",,P,{"^":"",
e3:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.uK(a,Object.create(null),null)
for(z=0;z<a.length;++z)a[z]=P.e3(a[z])
return a},
CG:[function(a){return a.ka()},"$1","mw",2,0,0,31],
uK:{"^":"a;a,b,c",
i:function(a,b){var z,y
z=this.b
if(z==null)return this.c.i(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.i0(b):y}},
gh:function(a){var z
if(this.b==null){z=this.c
z=z.gh(z)}else z=this.az().length
return z},
gw:function(a){var z
if(this.b==null){z=this.c
z=z.gh(z)}else z=this.az().length
return z===0},
ga_:function(a){var z
if(this.b==null){z=this.c
return z.ga_(z)}return new P.uL(this)},
gaH:function(a){var z
if(this.b==null){z=this.c
return z.gaH(z)}return H.cl(this.az(),new P.uM(this),null,null)},
j:function(a,b,c){var z,y
if(this.b==null)this.c.j(0,b,c)
else if(this.T(0,b)){z=this.b
z[b]=c
y=this.a
if(y==null?z!=null:y!==z)y[b]=null}else this.eK().j(0,b,c)},
T:function(a,b){if(this.b==null)return this.c.T(0,b)
if(typeof b!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,b)},
aE:function(a,b,c){var z
if(this.T(0,b))return this.i(0,b)
z=c.$0()
this.j(0,b,z)
return z},
v:function(a,b){if(this.b!=null&&!this.T(0,b))return
return this.eK().v(0,b)},
C:function(a,b){var z,y,x,w
if(this.b==null)return this.c.C(0,b)
z=this.az()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.e3(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.c(new P.a1(this))}},
k:function(a){return P.eV(this)},
az:function(){var z=this.c
if(z==null){z=Object.keys(this.a)
this.c=z}return z},
eK:function(){var z,y,x,w,v
if(this.b==null)return this.c
z=P.ay()
y=this.az()
for(x=0;w=y.length,x<w;++x){v=y[x]
z.j(0,v,this.i(0,v))}if(w===0)y.push(null)
else C.c.sh(y,0)
this.b=null
this.a=null
this.c=z
return z},
i0:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.e3(this.a[a])
return this.b[a]=z},
$isC:1,
$asC:I.D},
uM:{"^":"b:1;a",
$1:[function(a){return this.a.i(0,a)},null,null,2,0,null,42,"call"]},
uL:{"^":"b6;a",
gh:function(a){var z=this.a
if(z.b==null){z=z.c
z=z.gh(z)}else z=z.az().length
return z},
t:function(a,b){var z=this.a
if(z.b==null)z=z.ga_(z).t(0,b)
else{z=z.az()
if(b>>>0!==b||b>=z.length)return H.i(z,b)
z=z[b]}return z},
gB:function(a){var z=this.a
if(z.b==null){z=z.ga_(z)
z=z.gB(z)}else{z=z.az()
z=new J.bj(z,z.length,0,null,[H.y(z,0)])}return z},
$asb6:I.D,
$asf:I.D,
$ase:I.D},
eO:{"^":"a4;a,b",
k:function(a){if(this.b!=null)return"Converting object to an encodable object failed."
else return"Converting object did not return an encodable object."}},
qu:{"^":"eO;a,b",
k:function(a){return"Cyclic error in JSON stringify"}},
qt:{"^":"bE;a,b",
iP:function(a,b){var z=P.ks(a,this.gd9().a)
return z},
d8:function(a){return this.iP(a,null)},
j_:function(a,b){var z,y,x
this.gdd()
z=new P.c_("")
y=new P.k1(z,[],P.mw())
y.bP(a)
x=z.A
return x.charCodeAt(0)==0?x:x},
f_:function(a){return this.j_(a,null)},
gdd:function(){return C.bM},
gd9:function(){return C.bL},
$asbE:function(){return[P.a,P.o]}},
qw:{"^":"bS;a,b",
F:function(a){var z,y,x
z=new P.c_("")
y=new P.k1(z,[],P.mw())
y.bP(a)
x=z.A
return x.charCodeAt(0)==0?x:x},
$asbS:function(){return[P.a,P.o]}},
qv:{"^":"bS;a",
F:function(a){return P.ks(a,this.a)},
$asbS:function(){return[P.o,P.a]}},
uN:{"^":"a;",
fB:function(a){var z,y,x,w,v,u
z=J.J(a)
y=z.gh(a)
if(typeof y!=="number")return H.B(y)
x=0
w=0
for(;w<y;++w){v=z.c6(a,w)
if(v>92)continue
if(v<32){if(w>x)this.dE(a,x,w)
x=w+1
this.a6(92)
switch(v){case 8:this.a6(98)
break
case 9:this.a6(116)
break
case 10:this.a6(110)
break
case 12:this.a6(102)
break
case 13:this.a6(114)
break
default:this.a6(117)
this.a6(48)
this.a6(48)
u=v>>>4&15
this.a6(u<10?48+u:87+u)
u=v&15
this.a6(u<10?48+u:87+u)
break}}else if(v===34||v===92){if(w>x)this.dE(a,x,w)
x=w+1
this.a6(92)
this.a6(v)}}if(x===0)this.a1(a)
else if(x<y)this.dE(a,x,y)},
cB:function(a){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(a==null?w==null:a===w)throw H.c(new P.qu(a,null))}z.push(a)},
bP:function(a){var z,y,x,w
if(this.fA(a))return
this.cB(a)
try{z=this.b.$1(a)
if(!this.fA(z))throw H.c(new P.eO(a,null))
x=this.a
if(0>=x.length)return H.i(x,-1)
x.pop()}catch(w){y=H.E(w)
throw H.c(new P.eO(a,y))}},
fA:function(a){var z,y
if(typeof a==="number"){if(!isFinite(a))return!1
this.kg(a)
return!0}else if(a===!0){this.a1("true")
return!0}else if(a===!1){this.a1("false")
return!0}else if(a==null){this.a1("null")
return!0}else if(typeof a==="string"){this.a1('"')
this.fB(a)
this.a1('"')
return!0}else{z=J.t(a)
if(!!z.$isd){this.cB(a)
this.ke(a)
z=this.a
if(0>=z.length)return H.i(z,-1)
z.pop()
return!0}else if(!!z.$isC){this.cB(a)
y=this.kf(a)
z=this.a
if(0>=z.length)return H.i(z,-1)
z.pop()
return y}else return!1}},
ke:function(a){var z,y,x
this.a1("[")
z=J.J(a)
if(J.P(z.gh(a),0)){this.bP(z.i(a,0))
y=1
while(!0){x=z.gh(a)
if(typeof x!=="number")return H.B(x)
if(!(y<x))break
this.a1(",")
this.bP(z.i(a,y));++y}}this.a1("]")},
kf:function(a){var z,y,x,w,v,u
z={}
y=J.J(a)
if(y.gw(a)){this.a1("{}")
return!0}x=y.gh(a)
if(typeof x!=="number")return x.dJ()
x*=2
w=new Array(x)
z.a=0
z.b=!0
y.C(a,new P.uO(z,w))
if(!z.b)return!1
this.a1("{")
for(v='"',u=0;u<x;u+=2,v=',"'){this.a1(v)
this.fB(w[u])
this.a1('":')
y=u+1
if(y>=x)return H.i(w,y)
this.bP(w[y])}this.a1("}")
return!0}},
uO:{"^":"b:3;a,b",
$2:function(a,b){var z,y,x,w,v
if(typeof a!=="string")this.a.b=!1
z=this.b
y=this.a
x=y.a
w=x+1
y.a=w
v=z.length
if(x>=v)return H.i(z,x)
z[x]=a
y.a=w+1
if(w>=v)return H.i(z,w)
z[w]=b}},
k1:{"^":"uN;c,a,b",
kg:function(a){this.c.A+=C.r.k(a)},
a1:function(a){this.c.A+=H.j(a)},
dE:function(a,b,c){this.c.A+=J.hB(a,b,c)},
a6:function(a){this.c.A+=H.dM(a)}}}],["","",,W,{"^":"",
pf:function(a,b,c){return W.ph(a,null,null,b,null,null,null,c).aZ(new W.pg())},
ph:function(a,b,c,d,e,f,g,h){var z,y,x,w
z=W.cW
y=new P.Q(0,$.p,null,[z])
x=new P.dd(y,[z])
w=new XMLHttpRequest()
C.bv.jS(w,"GET",a,!0)
z=W.rx
W.de(w,"load",new W.pi(x,w),!1,z)
W.de(w,"error",x.geW(),!1,z)
w.send()
return y},
pg:{"^":"b:92;",
$1:[function(a){return J.nu(a)},null,null,2,0,null,81,"call"]},
pi:{"^":"b:1;a,b",
$1:function(a){var z,y,x,w,v
z=this.b
y=z.status
if(typeof y!=="number")return y.b2()
x=y>=200&&y<300
w=y>307&&y<400
y=x||y===0||y===304||w
v=this.a
if(y)v.ax(0,z)
else v.d5(a)}}}],["","",,S,{}],["","",,Q,{"^":"",
yQ:function(a){var z
if(a==null)z=""
else z=typeof a==="string"?a:J.aL(a)
return z}}],["","",,N,{"^":"",bY:{"^":"a;jY:a<",
aq:function(){var z=0,y=new P.cO(),x=1,w,v=this,u,t,s
var $async$aq=P.di(function(a,b){if(a===1){w=b
z=x}while(true)switch(z){case 0:t=H
s=C.bK
z=2
return P.a5(W.pf("https://api.github.com/repos/dart-lang/angular2/tags",null,null),$async$aq,y)
case 2:u=t.hn(s.d8(b),"$isd",[P.C],"$asd")
z=3
return P.a5(P.p2(C.bu,new N.rM(),null),$async$aq,y)
case 3:v.a=J.cM(u,new N.rN()).a5(0)
return P.a5(null,0,y)
case 1:return P.a5(w,1,y)}})
return P.a5(null,$async$aq,y)}},rM:{"^":"b:0;",
$0:function(){return 3}},rN:{"^":"b:1;",
$1:[function(a){var z=J.J(a)
return new N.p9(z.i(a,"name"),J.q(z.i(a,"commit"),"url"))},null,null,2,0,null,75,"call"]},p9:{"^":"a;n:a>,b_:b>"}}],["","",,K,{"^":"",
D3:[function(a,b){var z=new K.tP(null,null,null,null,null,C.ea,P.am(["$implicit",null]),a,b,null,null,null,C.m,!1,null,H.z([],[{func:1,v:true}]),null,null,C.j,null,null,!1,null)
z.e=new L.bv(z)
z.f=$.dX
return z},"$2","zb",4,0,1],
D4:[function(a,b){var z,y
z=new K.tQ(null,null,C.a3,P.ay(),a,b,null,null,null,C.m,!1,null,H.z([],[{func:1,v:true}]),null,null,C.j,null,null,!1,null)
z.e=new L.bv(z)
y=$.fo
if(y==null){y=$.bL.bb("",C.n,C.a)
$.fo=y}z.b3(y)
return z},"$2","zc",4,0,2],
xy:function(){if($.fX)return
$.fX=!0
$.$get$v().a.j(0,C.w,new M.u(C.c6,C.a,new K.xW(),C.ak,null))
L.Z()},
tO:{"^":"T;fx,fy,go,id,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr",
a3:function(){var z,y,x,w,v,u
z=this.dg(this.r)
y=document
x=S.bM(y,"ul",z)
this.fx=x
this.aO(x)
w=y.createTextNode("\n\n    ")
this.fx.appendChild(w)
v=$.$get$nb().cloneNode(!1)
this.fx.appendChild(v)
x=new V.dc(2,0,this,v,null,null,null)
this.fy=x
this.go=new R.f0(x,null,null,null,new D.cs(x,K.zb()))
u=y.createTextNode("\n\n")
this.fx.appendChild(u)
this.aX(C.a,C.a)
return},
aC:function(){var z,y,x,w,v,u
z=this.db.gjY()
y=this.id
if(y!==z){y=this.go
y.c=z
if(y.b==null&&!0){x=new R.os(y.d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
w=$.$get$ni()
x.a=w
y.b=x}this.id=z}if(!$.du){y=this.go
v=y.b
if(v!=null){u=y.c
if(!(u!=null))u=C.a
v=v.iG(0,u)?v:null
if(v!=null)y.hk(v)}}this.fy.dc()},
bd:function(){this.fy.da()},
$asT:function(){return[N.bY]}},
tP:{"^":"T;fx,fy,go,id,k1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr",
a3:function(){var z,y,x,w
z=document
y=z.createElement("li")
this.fx=y
this.d0(y)
x=z.createTextNode("\n       ")
this.fx.appendChild(x)
y=S.bM(z,"a",this.fx)
this.fy=y
this.aO(y)
y=z.createTextNode("")
this.go=y
this.fy.appendChild(y)
w=z.createTextNode("\n    ")
this.fx.appendChild(w)
this.aX([this.fx],C.a)
return},
aC:function(){var z,y,x,w
z=this.b
y=J.nw(z.i(0,"$implicit"))
x=this.id
if(x==null?y!=null:x!==y){this.fy.href=$.bL.gfG().fF(y)
this.id=y}w=Q.yQ(J.ns(z.i(0,"$implicit")))
z=this.k1
if(z==null?w!=null:z!==w){this.go.textContent=w
this.k1=w}},
$asT:function(){return[N.bY]}},
tQ:{"^":"T;fx,fy,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr",
a3:function(){var z,y,x
z=new K.tO(null,null,null,null,C.o,P.ay(),this,0,null,null,null,C.m,!1,null,H.z([],[{func:1,v:true}]),null,null,C.j,null,null,!1,null)
z.e=new L.bv(z)
y=document.createElement("release")
z.r=y
y=$.dX
if(y==null){y=$.bL.bb("",C.n,C.cS)
$.dX=y}z.b3(y)
this.fx=z
this.r=z.r
y=new N.bY(C.a)
this.fy=y
x=this.dx
z.db=y
z.dx=x
z.a3()
this.aX([this.r],C.a)
return new D.ex(this,0,this.r,this.fy,[null])},
bC:function(a,b,c){if(a===C.w&&0===b)return this.fy
return c},
aC:function(){if(this.cy===C.j&&!$.du)this.fy.aq()
this.fx.aT()},
bd:function(){this.fx.bc()},
$asT:I.D},
xW:{"^":"b:0;",
$0:[function(){return new N.bY(C.a)},null,null,0,0,null,"call"]}}]]
setupProgram(dart,init.types.length)
var deferredTypes=[{func:1,args:[,]},{func:1,ret:[S.T,N.bY],args:[S.T,P.aq]},{func:1,ret:S.T,args:[S.T,P.aq]}]
init.types.push.apply(init.types,deferredTypes)
C.w=H.m("bY")
C.be=C.w
C.bu=new P.al(3e6)
C.bK=new P.qt(null,null)
C.bL=new P.qv(null)
C.bM=new P.qw(null,null)
C.bY=I.l([C.w,C.a])
C.bq=new D.cP("release",K.zc(),C.w,C.bY)
C.c6=I.l([C.bq])
C.d3=I.l(["ul._ngcontent-%COMP% { margin:0; padding:0; } ul._ngcontent-%COMP% li._ngcontent-%COMP% { color:dodgerblue; }"])
C.cS=I.l([C.d3])
C.ea=new R.fp(2,"ViewType.EMBEDDED")
$.dX=null
$.fo=null
$.fX=!1;(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
var v=a[z++]
I.$lazy(y,x,w,null,v)}})(["nb","$get$nb",function(){var z=W.x_()
return z.createComment("template bindings={}")},$])}
$dart_deferred_initializers$["nQLmHD4GHmevbZqweIGddJ3n1RQ="]=$dart_deferred_initializers$.current
