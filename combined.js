var e;
(function(){function a(a){return Math.sin(6.283184*a)}function c(a,b){setTimeout(function(){function c(){for(var a=new Date,v=0;0<=r;)if(d[r]=0,d[r+1]=128,r-=2,v+=1,0===v%1E3&&100<new Date-a){setTimeout(c,0);return}setTimeout(function(){b(d)},0)}var d=new Uint8Array(4*a),r=d.length-2;setTimeout(c,0)},0)}function b(a,b,c,d,r){function h(){for(var c=new Date,d=0;x<b-l;){var f=4*x,k=4*(x+l),n=a[k]+(a[k+1]<<8)+(a[f+2]+(a[f+3]<<8)-32768)*p;a[k]=n&255;a[k+1]=n>>8&255;n=a[k+2]+(a[k+3]<<8)+(a[f]+(a[f+1]<<
8)-32768)*p;a[k+2]=n&255;a[k+3]=n>>8&255;++x;d+=1;if(0===d%1E3&&100<new Date-c){setTimeout(h,0);return}}setTimeout(r,0)}var l=c.Ib*d>>1,p=c.Hb/255,x=0;setTimeout(h,0)}e={};var d=null,h=[a,function(b){return 0>a(b)?-1:1},function(a){return a%1-.5},function(a){a=a%1*4;return 2>a?a-1:3-a}];e.la=function(a){this.gb=a;this.W=a.length/2/2};e.la.prototype.Ca=function(a){function b(){for(var d=new Date,g=0;p<h;){var q=4*(c[4*p]+(c[4*p+1]<<8)-32768),q=-32768>q?-32768:32767<q?32767:q;D[p]=q/32768;q=4*(c[4*
p+2]+(c[4*p+3]<<8)-32768);q=-32768>q?-32768:32767<q?32767:q;l[p]=q/32768;p+=1;g+=1;if(0===g%1E3&&100<new Date-d){setTimeout(b,0);return}}setTimeout(function(){a(r)},0)}null===d&&(d=new AudioContext);var c=this.gb,h=this.W,r=d.createBuffer(2,this.W,44100),D=r.getChannelData(0),l=r.getChannelData(1),p=0;setTimeout(b,0)};e.ea=function(a,b){this.B=a;this.ba=b||5605;this.mb=h[a.Sb];this.kb=h[a.Xb];this.lb=h[a.cc];this.attack=a.Db;this.ka=a.Gb;this.release=a.Fb;this.nb=Math.pow(2,a.Mb-8)/this.ba;this.fb=
Math.pow(2,a.Pb-8)/this.ba};e.ea.prototype.Ba=function(b,c,d){var h=0,r=0,D=.00390625*Math.pow(1.059463094,b+12*(this.B.Vb-8)+this.B.Tb-128)*(1+8E-4*this.B.Ub);b=.00390625*Math.pow(1.059463094,b+12*(this.B.ac-8)+this.B.Zb-128)*(1+8E-4*this.B.$b);for(var l=this.B.Nb/255,p=0,x=0,g=this.attack+this.ka+this.release-1;0<=g;--g){var q=g+d,f=this.mb(q*this.fb)*this.B.Ob/512+.5,k=1;g<this.attack?k=g/this.attack:g>=this.attack+this.ka&&(k-=(g-this.attack-this.ka)/this.release);var n=D;this.B.Rb&&(n+=f);this.B.Yb&&
(n=n*k*k);var h=h+n,A=this.kb(h)*this.B.Wb,n=b;this.B.dc&&(n=n*k*k);r+=n;A+=this.lb(r)*this.B.bc;this.B.ib&&(A+=(2*Math.random()-1)*this.B.ib*k);A*=k/255;n=this.B.Kb;this.B.Qb&&(n*=f);n=1.5*Math.sin(3.141592*n/44100);p+=n*x;f=l*(A-x)-p;x+=n*f;switch(this.B.Jb){case 1:A=f;break;case 2:A=p;break;case 3:A=x;break;case 4:A=p+f}n=a(q*this.nb)*this.B.Lb/512+.5;A=39*A*this.B.Eb;q*=4;q+3<c.length&&(f=c[q]+(c[q+1]<<8)+A*(1-n),c[q]=f&255,c[q+1]=f>>8&255,f=c[q+2]+(c[q+3]<<8)+A*n,c[q+2]=f&255,c[q+3]=f>>8&255)}};
e.ea.prototype.pa=function(a,d){var h=this.attack+this.ka+this.release-1+32*this.ba,C=this;c(h,function(c){C.Ba(a,c,0);b(c,h,C.B,C.ba,function(){d(new e.la(c))})})};e.ea.prototype.Aa=function(a,b){this.pa(a,function(a){a.Ca(b)})};e.da=function(a){this.va=a;this.W=44100*a.gc};e.da.prototype.eb=function(a,d,h){var C=this;c(this.W,function(c){function D(){for(var a=new Date,b=0;y<g;){var p=d[y]+(d[y+1]<<8)+c[y]+(c[y+1]<<8)-32768;d[y]=p&255;d[y+1]=p>>8&255;y+=2;b+=1;if(0===b%1E3&&100<new Date-a){setTimeout(D,
0);return}}setTimeout(h,0)}function l(){b(c,x,a,q,D)}function p(){for(var b=new Date;;){if(A===k){setTimeout(l,0);break}var d=a.jb[A];d&&f.Ba(d,c,n);A++;n+=3*q;if(100<new Date-b){setTimeout(p,0);break}}}var x=C.W,g=4*C.W,q=C.va.ba,f=new e.ea(a,q),k=a.jb.length,n=0,A=0,y=0;setTimeout(p,0)})};e.da.prototype.pa=function(a){var b=this;c(this.W,function(c){function d(){h<b.va.zb.length?(h+=1,b.eb(b.va.zb[h-1],c,d)):a(new e.la(c))}var h=0;d()})};e.da.prototype.Aa=function(a){this.pa(function(b){b.Ca(a)})}})();
function ba(){this.tb=function(a){for(var c=0;24>c;c++)this[String.fromCharCode(97+c)]=a[c]||0;.01>this.c&&(this.c=.01);a=this.b+this.c+this.e;.18>a&&(a=.18/a,this.b*=a,this.c*=a,this.e*=a)}}
var ca=new function(){this.fa=new ba;var a,c,b,d,h,v,B,L,C,r,D,l;this.reset=function(){var a=this.fa;d=100/(a.f*a.f+.001);h=100/(a.g*a.g+.001);v=1-a.h*a.h*a.h*.01;B=-a.i*a.i*a.i*1E-6;a.a||(D=.5-a.n/2,l=5E-5*-a.o);L=1+a.l*a.l*(0<a.l?-.9:10);C=0;r=1==a.m?0:(1-a.m)*(1-a.m)*2E4+32};this.Bb=function(){this.reset();var d=this.fa;a=d.b*d.b*1E5;c=d.c*d.c*1E5;b=d.e*d.e*1E5+12;return 3*((a+c+b)/3|0)};this.Ab=function(p,x){var g=this.fa,q=1!=g.s||g.v,f=g.v*g.v*.1,k=1+3E-4*g.w,n=g.s*g.s*g.s*.1,A=1+1E-4*g.t,y=
1!=g.s,U=g.x*g.x,m=g.g,F=g.q||g.r,J=g.r*g.r*g.r*.2,M=g.q*g.q*(0>g.q?-1020:1020),ta=g.p?((1-g.p)*(1-g.p)*2E4|0)+32:0,Da=g.d,ua=g.j/2,Ea=g.k*g.k*.01,ja=g.a,ka=a,Fa=1/a,Ga=1/c,Ha=1/b,g=5/(1+g.u*g.u*20)*(.01+n);.8<g&&(g=.8);for(var g=1-g,la=!1,va=0,X=0,Y=0,ea=0,V=0,Z,W=0,G,P=0,R,ma=0,z,wa=0,Q,na=0,fa=Array(1024),aa=Array(32),N=fa.length;N--;)fa[N]=0;for(N=aa.length;N--;)aa[N]=2*Math.random()-1;for(N=0;N<x;N++){if(la)return N;ta&&++wa>=ta&&(wa=0,this.reset());r&&++C>=r&&(r=0,d*=L);v+=B;d*=v;d>h&&(d=h,
0<m&&(la=!0));G=d;0<ua&&(na+=Ea,G*=1+Math.sin(na)*ua);G|=0;8>G&&(G=8);ja||(D+=l,0>D?D=0:.5<D&&(D=.5));if(++X>ka)switch(X=0,++va){case 1:ka=c;break;case 2:ka=b}switch(va){case 0:Y=X*Fa;break;case 1:Y=1+2*(1-X*Ga)*Da;break;case 2:Y=1-X*Ha;break;case 3:Y=0,la=!0}F&&(M+=J,R=M|0,0>R?R=-R:1023<R&&(R=1023));q&&k&&(f*=k,1E-5>f?f=1E-5:.1<f&&(f=.1));Q=0;for(var Ia=8;Ia--;){P++;if(P>=G&&(P%=G,3==ja))for(Z=aa.length;Z--;)aa[Z]=2*Math.random()-1;switch(ja){case 0:z=P/G<D?.5:-.5;break;case 1:z=1-P/G*2;break;case 2:z=
P/G;z=6.28318531*(.5<z?z-1:z);z=1.27323954*z+.405284735*z*z*(0>z?1:-1);z=.225*((0>z?-1:1)*z*z-z)+z;break;case 3:z=aa[Math.abs(32*P/G|0)]}q&&(Z=W,n*=A,0>n?n=0:.1<n&&(n=.1),y?(V+=(z-W)*n,V*=g):(W=z,V=0),W+=V,ea+=W-Z,z=ea*=1-f);F&&(fa[ma%1024]=z,z+=fa[(ma-R+1024)%1024],ma++);Q+=z}Q=.125*Q*Y*U;p[N]=1<=Q?32767:-1>=Q?-32768:32767*Q|0}return x}};
window.jsfxr=function(a){ca.fa.tb(a);var c=ca.Bb();a=new Uint8Array(4*((c+1)/2|0)+44);var c=2*ca.Ab(new Uint16Array(a.buffer,44),c),b=new Uint32Array(a.buffer,0,44);b[0]=1179011410;b[1]=c+36;b[2]=1163280727;b[3]=544501094;b[4]=16;b[5]=65537;b[6]=44100;b[7]=88200;b[8]=1048578;b[9]=1635017060;b[10]=c;for(var c=c+44,b=0,d="data:audio/wav;base64,";b<c;b+=3)var h=a[b]<<16|a[b+1]<<8|a[b+2],d=d+("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[h>>18]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[h>>
12&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[h>>6&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[h&63]);return d};var t,da,u,w,E,ga,ha;function ia(){var a=oa,c=[];t={};c.push(pa(a.images));c.push(qa(a.ca));return Promise.all(c).then(function(){return t})}
function pa(a){var c={},b=[],d;for(d in a)b.push(new Promise(function(b){var v=d,B=new Image;B.addEventListener("load",function(){var d=document.createElement("canvas"),C=d.getContext("2d"),r;r=a[v].I?a[v].I:{x:0,y:0,G:B.width,D:B.height};d.width=r.G;d.height=r.D;C.drawImage(B,r.x,r.y,r.G,r.D,0,0,r.G,r.D);c[v]=d;b()});B.src=a[d].data}));return Promise.all(b).then(function(){t.images=c;return t.images})}
function qa(a){da=new AudioContext;var c={},b=[],d;for(d in a)b.push(new Promise(function(b){var v=d;a[d].ra(a[d].data,function(a){console.log("Loaded ",v);c[v]={play:function(a){a=void 0==typeof a?!1:a;var b=da.createBufferSource();b.loop=a;b.buffer=this.buffer;b.connect(da.destination);b.start(0)},buffer:a};b()})}));return Promise.all(b).then(function(){t.ca=c;return t.ca})}for(var ra={},sa=0;256>sa;sa++)ra[sa]=0;var H={};
function I(a){var c=performance.now(),b=a.object[a.L],d=a.value,h=a.duration?a.duration:Math.abs(d-b)/a.ua;return new Promise(function(v){function B(){var L=(performance.now()-c)/h;1<=L?(a.object[a.L]=d,v()):(a.object[a.L]=L*d+(1-L)*b,window.requestAnimationFrame(B))}window.requestAnimationFrame(B)})}var K=[],xa=0;
function ya(a){for(name in a)a.hasOwnProperty(name)&&(this[name]=a[name]);if("number"!==typeof this.x)throw"Entity.x must be a number";if("number"!==typeof this.y)throw"Entity.y must be a number";if("function"!==typeof this.qa)throw"Entity.listen must be a function";this.wa=xa;u[this.wa]=this;xa++}ya.prototype.x=0;ya.prototype.y=0;ya.prototype.qa=function(){};
function O(a){a="undefined"!==typeof a?a:{};if("function"===typeof a.U)throw this.U=a.U,"Scene.initialize must be function";if("function"===typeof a.T)throw this.T=a.T,"Scene.preUpdate must be function";if("function"===typeof a.aa)throw this.aa=a.aa,"Scene.postUpdate must be function";if("function"===typeof a.P)throw this.P=a.P,"Scene.draw must be function";}O.prototype.U=function(){};O.prototype.T=function(){};O.prototype.aa=function(){};O.prototype.P=function(){};O.prototype.oa=function(){};
function za(){w=document.getElementById("canvas");E=w.getContext("2d");E.X=function(){E.clearRect(0,0,w.width,w.height)}}
function Aa(){za();document.addEventListener("keydown",function(a){a.preventDefault();0==ra[a.which]?(ra[a.which]=1,a.O="keypress"):a.O="keyheld";K.push(a)});document.addEventListener("keyup",function(a){a.preventDefault();a.O="keyup";ra[a.which]=0;K.push(a)});document.addEventListener("touchstart",function(a){a.preventDefault();for(var c=0;c<a.touches.length;c++){var b=a.touches[c];H[b.identifier]||(H[b.identifier]={Da:b,current:b})}console.log("touchstart:",a,JSON.stringify(H))});document.addEventListener("touchmove",
function(a){a.preventDefault();for(var c=0;c<a.touches.length;c++){var b=a.touches[c];H[b.identifier]&&(H[b.identifier].current=b)}console.log("touchmove:",a,JSON.stringify(H))});document.addEventListener("touchend",function(a){a.preventDefault();for(var c in H){for(var b=!1,d=0;d<a.touches.length;d++)a.touches[d].identifier==c&&(b=!0);if(!b){var b=H[c].Da.screenX,d=H[c].Da.screenY,h=H[c].current.screenX,v=H[c].current.screenY;20>Math.abs(b-h)+Math.abs(d-v)?K.push({O:"keypress",which:90}):40>Math.abs(d-
v)&&20<b-h?K.push({O:"keypress",which:37}):40>Math.abs(d-v)&&20<h-b&&K.push({O:"keypress",which:39});delete H[c]}}console.log("touchend:",a,JSON.stringify(H))})}var Ba;function Ca(){ga.T(S.now());ga.P(S.now());ga.aa(S.now());Ba=window.requestAnimationFrame(Ca)}
function T(a){Ba&&window.cancelAnimationFrame(Ba);if(void 0===a||null===a||"function"!==typeof a.U||"function"!==typeof a.T||"function"!==typeof a.aa||"function"!==typeof a.P)throw"No scene attached!";u={};ga=a;ga.U();Ba=window.requestAnimationFrame(Ca)}var S=Object.create(performance);S.sa=0;S.now=function(){return Ja?ha:performance.now()-S.sa};var Ja=!1,Ka=0;function La(){S.sa+=performance.now()-Ka;Ja=!1}var Ma=new O;Ma.T=function(){K=[]};
Ma.P=function(a){E.X();E.save();E.fillStyle="#30403b";E.fillRect(0,0,w.width,w.height);E.restore();text=["LOADING","LOADING.","LOADING..","LOADING..."];E.save();E.textAlign="center";E.textBaseline="center";E.font="18px font";E.fillStyle="#8ed4a5";E.lineWidth=2;E.fillText(text[Math.round(a/500)%4],w.width/2,w.height/2);E.restore()};
var Oa=function(){var a,c=new O,b;c.U=function(){b={ta:!0,blink:!0,Fa:1};a=!1};c.P=function(){E.X();E.save();E.fillStyle="#30403b";E.fillRect(0,0,w.width,w.height);E.restore();b.ta&&(E.save(),E.globalAlpha=b.Fa,E.textAlign="center",E.textBaseline="center",E.font="24px font",E.fillStyle="white",E.fillText("PRESS   Z",w.width/2,250),E.restore());E.save();E.globalAlpha=b.Fa;E.textAlign="center";E.textBaseline="center";E.font="10px font";E.fillStyle="#50605b";E.lineWidth=2;E.fillText("HERMAN CHAU (KCAZE)",
w.width/2,380);E.restore()};c.T=function(c){for(var h=0;h<K.length;h++)"keypress"!=K[h].O||90!=K[h].which||a||(a=!0,b.blink=!1,b.ta=!1,I({object:b,L:"text_alpha",value:0,duration:500}).then(function(){setTimeout(function(){T(Na)},500)}));K=[];b.blink&&(b.ta=2>Math.floor(c/500)%4?!0:!1)};c.oa=function(){};return c}(),Pa,Na=function(){var a,c=new O,b;c.U=function(){a=0;b=[{description:"ENDS TURN WHITE",name:"BOAR",K:t.images.Ma,R:"",F:10<=parseInt(localStorage.getItem("playcount"))},{description:"CLEAR ROW ABOVE",
name:"CAT",K:t.images.Na,F:!0,Cb:function(a){var b=a.state,c=a.$a,B=a.sb;B--;for(var L=[],C=0;C<c.H;C++)b.A[B][C].V&&L.push(b.A[B][C].V);for(C=0;C<c.H;C++)b.A[B][C]={C:0};a.Ja(L)}},{description:"CLEAR LEFT SIDE",name:"DOG",K:t.images.Oa,R:"",F:!1},{description:"CLEAR 4 ON ENDS",name:"DRAGON",K:t.images.Pa,R:"",F:!1},{description:"CLEAR 12 RANDOM",name:"HARE",K:t.images.Qa,R:"",F:!1},{description:"SCORE +2",name:"HORSE",K:t.images.Ra,R:"",F:!1},{description:"DELAY ROW DROP",name:"MONKEY",K:t.images.Sa,
R:"",F:!1},{description:"ENDS TURN BLACK",name:"OX",K:t.images.Ta,R:"",F:!1},{description:"NEXT ALL WHITE",name:"RAT",K:t.images.Va,R:"",F:!1},{description:"CLEAR RIGHT SIDE",name:"ROOSTER",K:t.images.Wa,R:"",F:!1},{description:"CLEAR TOP ROW",name:"SHEEP",K:t.images.Xa,R:"",F:10<=parseInt(localStorage.getItem("highscore"))},{description:"NEXT ALL BLACK",name:"SNAKE",K:t.images.Ya,R:"",F:!1},{description:"SCORE +LEVEL/3",name:"TIGER",K:t.images.Za,R:"",F:!1},{description:"",name:"RANDOM",K:t.images.Ua,
F:!0}]};c.P=function(c){E.X();E.save();E.fillStyle="#30403b";E.fillRect(0,0,w.width,w.height);E.restore();for(var h=0;7>h;h++)for(var v=0;2>v;v++){var B=2*h+v;if(B>=b.length)break;E.drawImage(b[B].K,49*v+10,49*h+20);b[B].F||(E.fillStyle="rgba(0,0,0,0.7)",E.fillRect(49*v+11,49*h+21,48,48))}Math.floor(c/200)%3&&(E.strokeStyle="#fff",E.lineWidth=1,E.strokeRect(a%2*49+10,49*Math.floor(a/2)+20,50,50));E.textAlign="right";E.textBaseline="center";E.font="24px font";E.fillStyle="white";E.fillText(b[a].name,
w.width-10,330);E.textAlign="right";E.textBaseline="center";E.font="16px font";E.fillStyle="white";b[a].F?E.fillText(b[a].description,w.width-10,360):E.fillText("LOCKED",w.width-10,360)};c.T=function(){for(var c=0;c<K.length;c++)if("keypress"==K[c].O)if(39==K[c].which)a=Math.min(13,a+1);else if(40==K[c].which)a=Math.min(13,a+2);else if(37==K[c].which)a=Math.max(0,a-1);else if(38==K[c].which)a=Math.max(0,a-2);else if(90==K[c].which){if(13==a)for(a=Math.floor(14*Math.random());!b[a].F;)a=Math.floor(14*
Math.random());b[a].F&&(Pa=b[a],T(Qa))}K=[]};c.oa=function(){};return c}(),Qa=function(){function a(){I({object:J,L:"pause_alpha",value:0,duration:50}).then(La)}function c(){return new Promise(function(a){a()})}function b(a){return a[Math.floor(Math.random()*a.length)]}function d(a,b,d){return new ya({x:a,y:b,type:d,alpha:1,ya:0,Y:0,M:c()})}function h(a){return[t.images.qb,t.images.pb,t.images.rb][a-1]}function v(){m.na=!1;localStorage.getItem("playcount")?localStorage.setItem("playcount",parseInt(localStorage.getItem("playcount"))+
1):localStorage.setItem("playcount","1");console.log("Lost :(");n.clearRect(0,0,q.width,q.height);n.drawImage(w,0,0);I({object:J,L:"gameover_background_alpha",value:1,duration:1E3}).then(function(){return I({object:J,L:"gameover_text_alpha",value:1,duration:1E3})}).then(function(){m.za=!0})}function B(a){t.ca.ec.play();var b=[];a.forEach(function(a){b.push(a.M)});b=Promise.all(b);a.forEach(function(a){var c=b.then(function(){return I({object:a,L:"alpha",value:0,duration:100}).then(function(){delete u[a.wa]})});
a.M=c})}function L(){for(var a=l.N-1;0<a;a--)for(var b=0;b<l.H;b++)m.A[a][b].C&&!m.A[a-1][b].C&&(m.A[a-1][b]=m.A[a][b],m.A[a][b]={C:y.S},function(a){a.M=a.M.then(function(){return I({object:a,L:"y",value:a.y-l.J,duration:100})})}(m.A[a-1][b].V))}function C(a,b){var c=[1,-1,0,0,1,1,-1,-1],d=[0,0,1,-1,1,-1,1,-1],f=m.A[b][a].C;if(f!=y.S)for(var g=0;8>g;g++){for(var h=c[g],k=d[g],n=!1,q=1,p=a+q*h,r=b+q*k;0<=p&&0<=r&&p<l.H&&r<l.N&&m.A[r][p].C!=y.S&&m.A[r][p].C!=y.ma;){if(m.A[r][p].C==f){n=!0;break}q++;
p=a+q*h;r=b+q*k}if(n)for(n=1;n<q;n++)p=a+n*h,r=b+n*k,m.A[r][p].C=f,function(a){a.M=a.M.then(function(){return new Promise(function(b){a.Y=f;return I({object:a,L:"blend_alpha",value:1,duration:100}).then(function(){a.type=a.Y;a.Y=0;a.ya=0;b()})})})}(m.A[r][p].V)}}function r(){for(var a=[],c=0;c<l.H;c++){var f=b(U);a.push({C:f,V:d(1+20*c,-19,f)})}for(c=0;c<l.H;c++){if(m.A[l.N-1][c].C!=y.S){v();return}for(f=l.N-1;0<f;f--)m.A[f][c]=m.A[f-1][c];m.A[0][c]=a[c]}m.A.forEach(function(a){a.forEach(function(a){var b=
a.V;b&&(b.M=b.M.then(function(){return I({object:b,L:"y",value:b.y+l.J,ua:1})}))})})}function D(){for(var a=0;a<K.length;a++)"keypress"==K[a].O&&90==K[a].which&&m.za&&I({object:J,L:"gameover_text_alpha",value:0,duration:1E3}).then(function(){T(Oa)});K=[]}var l={H:8,N:17,J:20,hb:8,$:1E4},p=document.createElement("canvas"),x=document.createElement("canvas"),g=document.createElement("canvas"),q=document.createElement("canvas");p.width=l.H*l.J;p.height=390;x.width=96;x.height=390;q.width=280;q.height=
390;g.width=280;g.height=390;var f=p.getContext("2d"),k=x.getContext("2d"),n=q.getContext("2d"),A=g.getContext("2d"),y={S:0,Ha:1,Ga:2,ma:3},U=[y.Ha,y.Ga],m,F,J,M=new O;M.U=function(){J={Ka:E.createPattern(t.images.background,"repeat"),ob:0,bb:0,cb:0};m={na:!0,La:S.now(),A:[],za:!1,ia:0,level:1,$:l.$,ga:0};m.ga=S.now()+m.$;for(var a=0;a<l.N;a++){m.A.push([]);for(var g=0;g<l.H;g++)if(2>a){var h=b(U),k=d(1+20*g,1+20*a,h);m.A[a].push({C:h,V:k})}else m.A[a].push({C:y.S})}F=0;m.ha=new ya({frames:[t.images.vb,
t.images.wb,t.images.xb,t.images.yb],ab:[500,200,200,200],Z:0,xa:S.now(),Ia:function(a){a-this.xa>this.ab[this.Z]&&(this.Z++,this.Z%=this.frames.length,this.xa=a)},x:Math.floor(l.H/2),ja:4+Math.floor(l.H/2)*l.J,Ea:l.N*l.J+23,M:c(),P:function(a){a.drawImage(this.frames[this.Z],this.ja,this.Ea);for(a=l.N-1;0<=a&&m.A[a][this.x].C==y.S;a--);f.save();f.globalAlpha=1;f.lineWidth=1;f.setLineDash([2,8]);f.strokeStyle="#8ed4a5";f.beginPath();f.moveTo(this.ja+l.J/2-5,this.Ea-8);f.lineTo(this.ja+l.J/2-5,(a+
1)*l.J+20);f.stroke();f.restore()},qa:function(a){if("keypress"==a.O)switch(a.which){case 37:this.move(-1);break;case 39:this.move(1);break;case 90:this.ub()}else if("keyheld"==a.O)switch(a.which){case 37:this.move(-1);break;case 39:this.move(1)}},move:function(a){0<=this.x+a&&this.x+a<l.H&&(this.x+=a,this.M=this.M.then(function(){return I({object:this,L:"sprite_x",value:this.ja+a*l.J,ua:.7}).then(function(){return c()}.bind(this))}.bind(this)))},next:[],ub:function(){if(m.A[l.N-1][this.x].C!=y.S)v();
else{var a=this.next.shift();this.next.push(1<16*Math.random()?b(U):y.ma);for(var c=l.N-1;0<c&&m.A[c-1][this.x].C==y.S;)c--;var f=d(this.x*l.J+1,(l.N-1)*l.J+1,a);m.A[c][this.x]={C:a,V:f};C(this.x,c);f.M=f.M.then(function(){t.ca.fc.play();return I({object:f,L:"y",value:1+20*c,ua:3})})}}});for(a=0;8>a;a++)m.ha.next.push(b(U))};M.P=function(a){if(Ja)E.X(),E.save(),E.globalAlpha=1,E.drawImage(g,0,0),E.globalAlpha=J.ob,E.fillStyle="#000000",E.fillRect(0,0,w.width,w.height),E.restore(),E.save(),E.textAlign=
"center",E.textBaseline="center",E.font="24px font",E.fillStyle=0==F?"#fff":"#666",E.fillText("RESUME",w.width/2,w.height/2-48),E.fillStyle=1==F?"#fff":"#666",E.fillText("RESTART",w.width/2,w.height/2),E.fillStyle=2==F?"#fff":"#666",E.fillText("QUIT",w.width/2,w.height/2+48),E.restore();else if(m.na){E.X();f.clearRect(0,0,p.width,p.height);k.clearRect(0,0,x.width,x.height);f.fillStyle="rgba(0,0,0,0.5)";f.fillRect(0,0,p.width,p.height);f.save();f.globalAlpha=1;f.lineWidth=1;f.strokeStyle="#50605b";
f.beginPath();f.moveTo(0,l.N*l.J+20);f.lineTo(l.H*l.J,l.N*l.J+20);f.stroke();f.restore();for(var b in u){var c=u[b];c.type&&(f.globalAlpha=c.alpha,f.drawImage(h(c.type),c.x,c.y+20),c.Y&&(f.globalAlpha=c.ya,f.drawImage(h(c.Y),c.x,c.y+20)))}f.globalAlpha=1;m.ha.P(f);f.fillStyle="rgba(0, 0, 0, 0.5)";f.fillRect(0,8,p.width,5);f.fillStyle="rgba(142, 212, 165, 1)";f.fillRect(0,8,p.width*(m.ga-a)/m.$,5);k.fillStyle="rgba(0, 0, 0, 0.5)";k.fillRect(0,10,x.width,x.width);k.fillRect(0,117,x.width,80);k.fillRect(0,
208,x.width,50);k.fillRect(0,269,x.width,50);k.fillRect(0,330,x.width,50);k.textAlign="center";k.textBaseline="top";k.font="24px font";k.fillStyle="white";k.fillText("NEXT",48,120);k.fillText("SCORE",48,211);k.fillText("LEVEL",48,272);k.fillText("TIME",48,333);k.font="20px font";k.textBaseline="bottom";k.fillText(Pa.name,48,101);k.font="20px font";k.fillText(""+m.level,48,316);a=""+m.ia;a="0".repeat(5-a.length)+a;k.fillText(a,48,255);b=Math.floor((S.now()-m.La)/1E3);a=""+b%60;b=""+Math.floor(b/60);
time_string="0".repeat(2-b.length)+b+":"+"0".repeat(2-a.length)+a;k.fillText(time_string,48,377);for(a=0;a<l.hb;a++)k.drawImage(h(m.ha.next[a]),9+a%4*l.J,148+23*Math.floor(a/4));k.drawImage(Pa.K,23,20);E.fillStyle=J.Ka;E.fillRect(0,0,w.width,w.height);E.drawImage(p,10,0);E.drawImage(x,10+p.width+7,0)}else E.X(),E.save(),E.globalAlpha=1,E.drawImage(q,0,0),E.globalAlpha=J.bb,E.fillStyle="#290000",E.fillRect(0,0,w.width,w.height),E.globalAlpha=J.cb,E.textAlign="center",E.textBaseline="center",E.font=
"48px font",E.strokeStyle="#ce0000",E.fillStyle="#ffa100",E.lineWidth=6,E.strokeText("GAME OVER",w.width/2,w.height/2),E.fillText("GAME OVER",w.width/2,w.height/2),E.restore()};M.T=function(b){if(Ja){for(var c=0;c<K.length;c++)"keypress"==K[c].O&&(27==K[c].which?a():40==K[c].which?F=Math.min(2,F+1):38==K[c].which?F=Math.max(0,F-1):90==K[c].which&&(a(),0!=F&&(1==F?T(M):T(Oa))));K=[]}else if(m.na)a:{for(var d=0;d<K.length;d++)if("keypress"==K[d].O&&27==K[d].which){ha=S.now();Ka=performance.now();Ja=
!0;F=0;A.clearRect(0,0,g.width,g.height);A.drawImage(w,0,0);I({object:J,L:"pause_alpha",value:.8,duration:50});K=[];break a}for(d=0;d<K.length;d++)for(var f in u)u[f].qa(K[d]);K=[];m.ha.Ia(b);m.ga<b&&(r(),m.ga=b+m.$);b=!1;for(d=0;d<l.N;d++){var h=m.A[d][0].C,k=0,n=!0;for(f=0;f<l.H;f++)if(m.A[d][f].C==y.ma&&k++,h&=m.A[d][f].C,0==h){n=!1;break}if(n){0<k&&(b=!0);c=d;break}}if("undefined"!==typeof c){m.ia++;(!localStorage.getItem("highscore")||parseInt(localStorage.getItem("highscore"))<m.ia)&&localStorage.setItem("highscore",
""+m.ia);d=[];for(f=0;f<l.H;f++)d.push(m.A[c][f].V);for(f=0;f<l.H;f++)m.A[c][f]={C:y.S};B(d);b&&Pa.Cb({state:m,Ja:B,$a:l,sb:c})}L()}else D()};M.oa=function(){};return M}(),Ra=new AudioContext;function Sa(a,c){var b=new XMLHttpRequest;b.open("GET",a,!0);b.responseType="arraybuffer";b.onload=function(){Ra.decodeAudioData(b.response,c)};b.send()}
var oa={images:{background:{data:"images/background.gif"},Ma:{data:"images/characters.gif",I:{x:0,y:0,G:50,D:50}},Na:{data:"images/characters.gif",I:{x:49,y:0,G:50,D:50}},Oa:{data:"images/characters.gif",I:{x:0,y:49,G:50,D:50}},Pa:{data:"images/characters.gif",I:{x:49,y:49,G:50,D:50}},Qa:{data:"images/characters.gif",I:{x:0,y:98,G:50,D:50}},Ra:{data:"images/characters.gif",I:{x:49,y:98,G:50,D:50}},Sa:{data:"images/characters.gif",I:{x:0,y:147,G:50,D:50}},Ta:{data:"images/characters.gif",I:{x:49,y:147,
G:50,D:50}},Va:{data:"images/characters.gif",I:{x:0,y:196,G:50,D:50}},Wa:{data:"images/characters.gif",I:{x:49,y:196,G:50,D:50}},Xa:{data:"images/characters.gif",I:{x:0,y:245,G:50,D:50}},Ya:{data:"images/characters.gif",I:{x:49,y:245,G:50,D:50}},Za:{data:"images/characters.gif",I:{x:0,y:294,G:50,D:50}},Ua:{data:"images/characters.gif",I:{x:49,y:294,G:50,D:50}},pb:{data:"images/piece_black.gif"},qb:{data:"images/piece_white.gif"},rb:{data:"images/piece_zodiac.gif"},vb:{data:"images/shooter0.gif"},
wb:{data:"images/shooter1.gif"},xb:{data:"images/shooter2.gif"},yb:{data:"images/shooter1.gif"}},ca:{sfx_shoot:{data:jsfxr([0,,.1881,,.3164,.8042,.2,-.2915,,,,,,.4661,.156,,.1754,-.182,1,,,.1755,,.5]),ra:Sa},sfx_clear:{data:jsfxr([1,,.06,.4848,.4938,.8917,,,,,,,,,,,,,1,,,,,.49]),ra:Sa},bgm_game:{ra:function(a,c){(new e.da(a)).Aa(c)},