(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const lu="modulepreload",cu=function(s){return"/muonline-bmd-viewer/app/"+s},hl={},ul=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};var a=c;document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(t.map(h=>{if(h=cu(h),h in hl)return;hl[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":lu,u||(p.as="script"),p.crossOrigin="",p.href=h,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})};const Ir="182",Di={ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hu=0,dl=1,uu=2,ar=1,Po=2,ds=3,Gn=0,Ot=1,en=2,Dt=0,Hn=1,pr=2,mr=3,gr=4,du=5,ii=100,fu=101,pu=102,mu=103,gu=104,_u=200,xu=201,vu=202,yu=203,Na=204,Ba=205,Mu=206,bu=207,Su=208,Eu=209,wu=210,Tu=211,Au=212,Cu=213,Ru=214,Oa=0,ka=1,za=2,Fi=3,Va=4,Ha=5,Ga=6,Wa=7,Lr=0,Iu=1,Lu=2,gn=0,Yc=1,jc=2,Kc=3,Pr=4,Zc=5,Jc=6,Qc=7,fl="attached",Pu="detached",eh=300,oi=301,Ni=302,Xa=303,qa=304,Dr=306,Bi=1e3,pn=1001,_r=1002,Tt=1003,th=1004,fs=1005,Rt=1006,or=1007,zn=1008,Yt=1009,nh=1010,ih=1011,vs=1012,Do=1013,xn=1014,tn=1015,In=1016,Uo=1017,Fo=1018,ys=1020,sh=35902,rh=35899,ah=1021,oh=1022,jt=1023,Ln=1026,ri=1027,No=1028,Bo=1029,Oi=1030,Oo=1031,ko=1033,lr=33776,cr=33777,hr=33778,ur=33779,$a=35840,Ya=35841,ja=35842,Ka=35843,Za=36196,Ja=37492,Qa=37496,eo=37488,to=37489,no=37490,io=37491,so=37808,ro=37809,ao=37810,oo=37811,lo=37812,co=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,_o=37820,xo=37821,vo=36492,yo=36494,Mo=36495,bo=36283,So=36284,Eo=36285,wo=36286,Du=2200,Uu=2201,Fu=2202,Ms=2300,xr=2301,qr=2302,Li=2400,Pi=2401,vr=2402,zo=2500,Nu=2501,Bu=3200,Ur=0,Ou=1,Cn="",At="srgb",ki="srgb-linear",yr="linear",et="srgb",hi=7680,pl=519,ku=512,zu=513,Vu=514,Vo=515,Hu=516,Gu=517,Ho=518,Wu=519,ml=35044,gl="300 es",mn=2e3,Mr=2001;function lh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qu(){const s=bs("canvas");return s.style.display="block",s}const _l={};function xl(...s){const e="THREE."+s.shift();console.log(e,...s)}function Se(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Re(...s){const e="THREE."+s.shift();console.error(e,...s)}function Ss(...s){const e=s.join(" ");e in _l||(_l[e]=!0,Se(...s))}function $u(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vl=1234567;const _s=Math.PI/180,Es=180/Math.PI;function Xn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function He(s,e,t){return Math.max(e,Math.min(t,s))}function Go(s,e){return(s%e+e)%e}function Yu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ju(s,e,t){return s!==e?(t-s)/(e-s):0}function xs(s,e,t){return(1-t)*s+t*e}function Ku(s,e,t,n){return xs(s,e,1-Math.exp(-t*n))}function Zu(s,e=1){return e-Math.abs(Go(s,e*2)-e)}function Ju(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Qu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ed(s,e){return s+Math.floor(Math.random()*(e-s+1))}function td(s,e){return s+Math.random()*(e-s)}function nd(s){return s*(.5-Math.random())}function id(s){s!==void 0&&(vl=s);let e=vl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sd(s){return s*_s}function rd(s){return s*Es}function ad(s){return(s&s-1)===0&&s!==0}function od(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ld(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function cd(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:Se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ci(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const br={DEG2RAD:_s,RAD2DEG:Es,generateUUID:Xn,clamp:He,euclideanModulo:Go,mapLinear:Yu,inverseLerp:ju,lerp:xs,damp:Ku,pingpong:Zu,smoothstep:Ju,smootherstep:Qu,randInt:ed,randFloat:td,randFloatSpread:nd,seededRandom:id,degToRad:sd,radToDeg:rd,isPowerOfTwo:ad,ceilPowerOfTwo:od,floorPowerOfTwo:ld,setQuaternionFromProperEuler:cd,normalize:Nt,denormalize:Ci};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let f=l*d+c*p+h*g+u*_;f<0&&(d=-d,p=-p,g=-g,_=-_,f=-f);let m=1-o;if(f<.9995){const b=Math.acos(f),A=Math.sin(b);m=Math.sin(m*b)/A,o=Math.sin(o*b)/A,l=l*m+d*o,c=c*m+p*o,h=h*m+g*o,u=u*m+_*o}else{l=l*m+d*o,c=c*m+p*o,h=h*m+g*o,u=u*m+_*o;const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:Se("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $r.copy(this).projectOnVector(e),this.sub($r)}reflect(e){return this.sub($r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $r=new N,yl=new Zt;class Ue{constructor(e,t,n,i,r,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],f=i[3],m=i[6],b=i[1],A=i[4],E=i[7],C=i[2],x=i[5],S=i[8];return r[0]=a*_+o*b+l*C,r[3]=a*f+o*A+l*x,r[6]=a*m+o*E+l*S,r[1]=c*_+h*b+u*C,r[4]=c*f+h*A+u*x,r[7]=c*m+h*E+u*S,r[2]=d*_+p*b+g*C,r[5]=d*f+p*A+g*x,r[8]=d*m+p*E+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yr.makeScale(e,t)),this}rotate(e){return this.premultiply(Yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new Ue,Ml=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hd(){const s={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(i.r=Rn(i.r),i.g=Rn(i.g),i.b=Rn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cn?yr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ki]:{primaries:e,whitePoint:n,transfer:yr,toXYZ:Ml,fromXYZ:bl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Ml,fromXYZ:bl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),s}const Ye=hd();function Rn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ui(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ui;class ch{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ui===void 0&&(ui=bs("canvas")),ui.width=e.width,ui.height=e.height;const i=ui.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Rn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return Se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ud=0;class Fr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(jr(i[a].image)):r.push(jr(i[a]))}else r=jr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function jr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ch.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Se("Texture: Unable to serialize Texture."),{})}let dd=0;const Kr=new N;class ut extends Wn{constructor(e=ut.DEFAULT_IMAGE,t=ut.DEFAULT_MAPPING,n=pn,i=pn,r=Rt,a=zn,o=jt,l=Yt,c=ut.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Xn(),this.name="",this.source=new Fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kr).x}get height(){return this.source.getSize(Kr).y}get depth(){return this.source.getSize(Kr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Se(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Se(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case _r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case _r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ut.DEFAULT_IMAGE=null;ut.DEFAULT_MAPPING=eh;ut.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],f=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,E=(p+1)/2,C=(m+1)/2,x=(h+d)/4,S=(u+_)/4,I=(g+f)/4;return A>E&&A>C?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=x/n,r=S/n):E>C?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=x/i,r=I/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=S/r,i=I/r),this.set(n,i,r,t),this}let b=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(f-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fd extends Wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new ut(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Fr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends fd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hh extends ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pd extends ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ut{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ps.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(e.matrixWorld),this.union(Ps)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Ds.subVectors(this.max,$i),di.subVectors(e.a,$i),fi.subVectors(e.b,$i),pi.subVectors(e.c,$i),Pn.subVectors(fi,di),Dn.subVectors(pi,fi),Kn.subVectors(di,pi);let t=[0,-Pn.z,Pn.y,0,-Dn.z,Dn.y,0,-Kn.z,Kn.y,Pn.z,0,-Pn.x,Dn.z,0,-Dn.x,Kn.z,0,-Kn.x,-Pn.y,Pn.x,0,-Dn.y,Dn.x,0,-Kn.y,Kn.x,0];return!Zr(t,di,fi,pi,Ds)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,di,fi,pi,Ds))?!1:(Us.crossVectors(Pn,Dn),t=[Us.x,Us.y,Us.z],Zr(t,di,fi,pi,Ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yn=[new N,new N,new N,new N,new N,new N,new N,new N],sn=new N,Ps=new Ut,di=new N,fi=new N,pi=new N,Pn=new N,Dn=new N,Kn=new N,$i=new N,Ds=new N,Us=new N,Zn=new N;function Zr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Zn.fromArray(s,r);const o=i.x*Math.abs(Zn.x)+i.y*Math.abs(Zn.y)+i.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const md=new Ut,Yi=new N,Jr=new N;class qn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):md.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);const t=Yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Yi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(Jr)),this.expandByPoint(Yi.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mn=new N,Qr=new N,Fs=new N,Un=new N,ea=new N,Ns=new N,ta=new N;class Nr{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qr.copy(e).add(t).multiplyScalar(.5),Fs.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(Qr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Fs),o=Un.dot(this.direction),l=-Un.dot(Fs),c=Un.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Qr).addScaledVector(Fs,d),p}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,i,r){ea.subVectors(t,e),Ns.subVectors(n,e),ta.crossVectors(ea,Ns);let a=this.direction.dot(ta),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,e);const l=o*this.direction.dot(Ns.crossVectors(Un,Ns));if(l<0)return null;const c=o*this.direction.dot(ea.cross(Un));if(c<0||l+c>a)return null;const h=-o*Un.dot(ta);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,r,a,o,l,c,h,u,d,p,g,_,f){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,p,g,_,f)}set(e,t,n,i,r,a,o,l,c,h,u,d,p,g,_,f){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=_,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/mi.setFromMatrixColumn(e,0).length(),r=1/mi.setFromMatrixColumn(e,1).length(),a=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gd,e,_d)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Fn.crossVectors(n,qt),Fn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Fn.crossVectors(n,qt)),Fn.normalize(),Bs.crossVectors(qt,Fn),i[0]=Fn.x,i[4]=Bs.x,i[8]=qt.x,i[1]=Fn.y,i[5]=Bs.y,i[9]=qt.y,i[2]=Fn.z,i[6]=Bs.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],f=n[10],m=n[14],b=n[3],A=n[7],E=n[11],C=n[15],x=i[0],S=i[4],I=i[8],v=i[12],M=i[1],T=i[5],L=i[9],P=i[13],z=i[2],U=i[6],V=i[10],k=i[14],q=i[3],ee=i[7],te=i[11],ie=i[15];return r[0]=a*x+o*M+l*z+c*q,r[4]=a*S+o*T+l*U+c*ee,r[8]=a*I+o*L+l*V+c*te,r[12]=a*v+o*P+l*k+c*ie,r[1]=h*x+u*M+d*z+p*q,r[5]=h*S+u*T+d*U+p*ee,r[9]=h*I+u*L+d*V+p*te,r[13]=h*v+u*P+d*k+p*ie,r[2]=g*x+_*M+f*z+m*q,r[6]=g*S+_*T+f*U+m*ee,r[10]=g*I+_*L+f*V+m*te,r[14]=g*v+_*P+f*k+m*ie,r[3]=b*x+A*M+E*z+C*q,r[7]=b*S+A*T+E*U+C*ee,r[11]=b*I+A*L+E*V+C*te,r[15]=b*v+A*P+E*k+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],f=e[11],m=e[15],b=l*p-c*d,A=o*p-c*u,E=o*d-l*u,C=a*p-c*h,x=a*d-l*h,S=a*u-o*h;return t*(_*b-f*A+m*E)-n*(g*b-f*C+m*x)+i*(g*A-_*C+m*S)-r*(g*E-_*x+f*S)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],f=e[14],m=e[15],b=u*f*c-_*d*c+_*l*p-o*f*p-u*l*m+o*d*m,A=g*d*c-h*f*c-g*l*p+a*f*p+h*l*m-a*d*m,E=h*_*c-g*u*c+g*o*p-a*_*p-h*o*m+a*u*m,C=g*u*l-h*_*l-g*o*d+a*_*d+h*o*f-a*u*f,x=t*b+n*A+i*E+r*C;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=b*S,e[1]=(_*d*r-u*f*r-_*i*p+n*f*p+u*i*m-n*d*m)*S,e[2]=(o*f*r-_*l*r+_*i*c-n*f*c-o*i*m+n*l*m)*S,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*S,e[4]=A*S,e[5]=(h*f*r-g*d*r+g*i*p-t*f*p-h*i*m+t*d*m)*S,e[6]=(g*l*r-a*f*r-g*i*c+t*f*c+a*i*m-t*l*m)*S,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*p+t*l*p)*S,e[8]=E*S,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*m-t*u*m)*S,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*m+t*o*m)*S,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*S,e[12]=C*S,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*f+t*u*f)*S,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*f-t*o*f)*S,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,f=a*u,m=o*u,b=l*c,A=l*h,E=l*u,C=n.x,x=n.y,S=n.z;return i[0]=(1-(_+m))*C,i[1]=(p+E)*C,i[2]=(g-A)*C,i[3]=0,i[4]=(p-E)*x,i[5]=(1-(d+m))*x,i[6]=(f+b)*x,i[7]=0,i[8]=(g+A)*S,i[9]=(f-b)*S,i[10]=(1-(d+_))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=mi.set(i[0],i[1],i[2]).length();const a=mi.set(i[4],i[5],i[6]).length(),o=mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),rn.copy(this);const c=1/r,h=1/a,u=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=mn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===mn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Mr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=mn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===mn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Mr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mi=new N,rn=new ze,gd=new N(0,0,0),_d=new N(1,1,1),Fn=new N,Bs=new N,qt=new N,Sl=new ze,El=new Zt;class nn{constructor(e=0,t=0,n=0,i=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Se("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return El.setFromEuler(this),this.setFromQuaternion(El,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class uh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xd=0;const wl=new N,gi=new Zt,bn=new ze,Os=new N,ji=new N,vd=new N,yd=new Zt,Tl=new N(1,0,0),Al=new N(0,1,0),Cl=new N(0,0,1),Rl={type:"added"},Md={type:"removed"},_i={type:"childadded",child:null},na={type:"childremoved",child:null};class vt extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new N,t=new nn,n=new Zt,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ue}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(Tl,e)}rotateY(e){return this.rotateOnAxis(Al,e)}rotateZ(e){return this.rotateOnAxis(Cl,e)}translateOnAxis(e,t){return wl.copy(e).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tl,e)}translateY(e){return this.translateOnAxis(Al,e)}translateZ(e){return this.translateOnAxis(Cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Os.copy(e):Os.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ji,Os,this.up):bn.lookAt(Os,ji,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(bn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rl),_i.child=e,this.dispatchEvent(_i),_i.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Md),na.child=e,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rl),_i.child=e,this.dispatchEvent(_i),_i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new N(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new N,Sn=new N,ia=new N,En=new N,xi=new N,vi=new N,Il=new N,sa=new N,ra=new N,aa=new N,oa=new ht,la=new ht,ca=new ht;class on{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),an.subVectors(e,t),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){an.subVectors(i,t),Sn.subVectors(n,t),ia.subVectors(e,t);const a=an.dot(an),o=an.dot(Sn),l=an.dot(ia),c=Sn.dot(Sn),h=Sn.dot(ia),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return oa.setScalar(0),la.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(e,t),la.fromBufferAttribute(e,n),ca.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(oa,r.x),a.addScaledVector(la,r.y),a.addScaledVector(ca,r.z),a}static isFrontFacing(e,t,n,i){return an.subVectors(n,t),Sn.subVectors(e,t),an.cross(Sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),an.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return on.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;xi.subVectors(i,n),vi.subVectors(r,n),sa.subVectors(e,n);const l=xi.dot(sa),c=vi.dot(sa);if(l<=0&&c<=0)return t.copy(n);ra.subVectors(e,i);const h=xi.dot(ra),u=vi.dot(ra);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(xi,a);aa.subVectors(e,r);const p=xi.dot(aa),g=vi.dot(aa);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(vi,o);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return Il.subVectors(r,i),o=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(Il,o);const m=1/(f+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(xi,a).addScaledVector(vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},ks={h:0,s:0,l:0};function ha(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=Go(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ha(a,r,e+1/3),this.g=ha(a,r,e),this.b=ha(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,i),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&Se("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Se("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=dh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ye.workingToColorSpace(Pt.copy(this),e),Math.round(He(Pt.r*255,0,255))*65536+Math.round(He(Pt.g*255,0,255))*256+Math.round(He(Pt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Pt.copy(this),t);const n=Pt.r,i=Pt.g,r=Pt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=At){Ye.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,i=Pt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(ks);const n=xs(Nn.h,ks.h,t),i=xs(Nn.s,ks.s,t),r=xs(Nn.l,ks.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Te;Te.NAMES=dh;let bd=0;class $n extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Hn,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Ba,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Se(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Se(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hn&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fh extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new N,zs=new Pe;let Sd=0;class pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ml,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),e}}class Wo extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ph extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ed=0;const Qt=new ze,ua=new vt,yi=new N,$t=new Ut,Ki=new Ut,wt=new N;class It extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lh(e)?ph:Wo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ut);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors($t.min,Ki.min),$t.expandByPoint(wt),wt.addVectors($t.max,Ki.max),$t.expandByPoint(wt)):($t.expandByPoint(Ki.min),$t.expandByPoint(Ki.max))}$t.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(yi.fromBufferAttribute(e,c),wt.add(yi)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new N,l[I]=new N;const c=new N,h=new N,u=new N,d=new Pe,p=new Pe,g=new Pe,_=new N,f=new N;function m(I,v,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(T),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(T),o[I].add(_),o[v].add(_),o[M].add(_),l[I].add(f),l[v].add(f),l[M].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,v=b.length;I<v;++I){const M=b[I],T=M.start,L=M.count;for(let P=T,z=T+L;P<z;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const A=new N,E=new N,C=new N,x=new N;function S(I){C.fromBufferAttribute(i,I),x.copy(C);const v=o[I];A.copy(v),A.sub(C.multiplyScalar(C.dot(v))).normalize(),E.crossVectors(x,v);const T=E.dot(l[I])<0?-1:1;a.setXYZW(I,A.x,A.y,A.z,T)}for(let I=0,v=b.length;I<v;++I){const M=b[I],T=M.start,L=M.count;for(let P=T,z=T+L;P<z;P+=3)S(e.getX(P+0)),S(e.getX(P+1)),S(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[p++]}return new pt(d,h,u)}if(this.index===null)return Se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ll=new ze,Jn=new Nr,Vs=new qn,Pl=new N,Hs=new N,Gs=new N,Ws=new N,da=new N,Xs=new N,Dl=new N,qs=new N;class Mt extends vt{constructor(e=new It,t=new fh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(da.fromBufferAttribute(u,e),a?Xs.addScaledVector(da,h):Xs.addScaledVector(da.sub(t),h))}t.add(Xs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),Jn.copy(e.ray).recast(e.near),!(Vs.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Vs,Pl)===null||Jn.origin.distanceToSquared(Pl)>(e.far-e.near)**2))&&(Ll.copy(r).invert(),Jn.copy(e.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],m=a[f.materialIndex],b=Math.max(f.start,p.start),A=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let E=b,C=A;E<C;E+=3){const x=o.getX(E),S=o.getX(E+1),I=o.getX(E+2);i=$s(this,m,e,n,c,h,u,x,S,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const b=o.getX(f),A=o.getX(f+1),E=o.getX(f+2);i=$s(this,a,e,n,c,h,u,b,A,E),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],m=a[f.materialIndex],b=Math.max(f.start,p.start),A=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let E=b,C=A;E<C;E+=3){const x=E,S=E+1,I=E+2;i=$s(this,m,e,n,c,h,u,x,S,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const b=f,A=f+1,E=f+2;i=$s(this,a,e,n,c,h,u,b,A,E),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function wd(s,e,t,n,i,r,a,o){let l;if(e.side===Ot?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Gn,o),l===null)return null;qs.copy(o),qs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(qs);return c<t.near||c>t.far?null:{distance:c,point:qs.clone(),object:s}}function $s(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Hs),s.getVertexPosition(l,Gs),s.getVertexPosition(c,Ws);const h=wd(s,e,t,n,Hs,Gs,Ws,Dl);if(h){const u=new N;on.getBarycoord(Dl,Hs,Gs,Ws,u),i&&(h.uv=on.getInterpolatedAttribute(i,o,l,c,u,new Pe)),r&&(h.uv1=on.getInterpolatedAttribute(r,o,l,c,u,new Pe)),a&&(h.normal=on.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};on.getNormal(Hs,Gs,Ws,d.normal),h.face=d,h.barycoord=u}return h}class Vi extends It{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(u,2));function g(_,f,m,b,A,E,C,x,S,I,v){const M=E/S,T=C/I,L=E/2,P=C/2,z=x/2,U=S+1,V=I+1;let k=0,q=0;const ee=new N;for(let te=0;te<V;te++){const ie=te*T-P;for(let Ne=0;Ne<U;Ne++){const Fe=Ne*M-L;ee[_]=Fe*b,ee[f]=ie*A,ee[m]=z,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[f]=0,ee[m]=x>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(Ne/S),u.push(1-te/I),k+=1}}for(let te=0;te<I;te++)for(let ie=0;ie<S;ie++){const Ne=d+ie+U*te,Fe=d+ie+U*(te+1),it=d+(ie+1)+U*(te+1),st=d+(ie+1)+U*te;l.push(Ne,Fe,st),l.push(Fe,it,st),q+=6}o.addGroup(p,q,v),p+=q,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(s){const e={};for(let t=0;t<s.length;t++){const n=zi(s[t]);for(const i in n)e[i]=n[i]}return e}function Td(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function mh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Ad={clone:zi,merge:Bt};var Cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cd,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gh extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new N,Ul=new Pe,Fl=new Pe;class Gt extends gh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,Ul,Fl),t.subVectors(Fl,Ul)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mi=-90,bi=1;class Id extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(Mi,bi,e,t);i.layers=this.layers,this.add(i);const r=new Gt(Mi,bi,e,t);r.layers=this.layers,this.add(r);const a=new Gt(Mi,bi,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Mi,bi,e,t);o.layers=this.layers,this.add(o);const l=new Gt(Mi,bi,e,t);l.layers=this.layers,this.add(l);const c=new Gt(Mi,bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _h extends ut{constructor(e=[],t=oi,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xh extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _h(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Vi(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Dt});r.uniforms.tEquirect.value=t;const a=new Mt(i,r),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=Rt),new Id(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class ps extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ld={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),m=this._getHandJoint(c,_);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ld)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ps;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Br{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new Br(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ws extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Nl=new N,Bl=new ht,Ol=new ht,Pd=new N,kl=new ze,Ys=new N,pa=new qn,zl=new ze,ma=new Nr;class Dd extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fl,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ut),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ys),this.boundingBox.expandByPoint(Ys)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ys),this.boundingSphere.expandByPoint(Ys)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(i),e.ray.intersectsSphere(pa)!==!1&&(zl.copy(i).invert(),ma.copy(e.ray).applyMatrix4(zl),!(this.boundingBox!==null&&ma.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ma)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pu?this.bindMatrixInverse.copy(this.bindMatrix).invert():Se("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Bl.fromBufferAttribute(i.attributes.skinIndex,e),Ol.fromBufferAttribute(i.attributes.skinWeight,e),Nl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Ol.getComponent(r);if(a!==0){const o=Bl.getComponent(r);kl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Pd.copy(Nl).applyMatrix4(kl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class vh extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xo extends ut{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Tt,h=Tt,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vl=new ze,Ud=new ze;class qo{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Se("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Ud;Vl.multiplyMatrices(o,t[r]),Vl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new qo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xo(t,e,e,jt,tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Se("Skeleton: No bone found with UUID:",r),a=new vh),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Hl extends pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Si=new ze,Gl=new ze,js=[],Wl=new Ut,Fd=new ze,Zi=new Mt,Ji=new qn;class Nd extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Fd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ut),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Si),Wl.copy(e.boundingBox).applyMatrix4(Si),this.boundingBox.union(Wl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Si),Ji.copy(e.boundingSphere).applyMatrix4(Si),this.boundingSphere.union(Ji)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ji.copy(this.boundingSphere),Ji.applyMatrix4(n),e.ray.intersectsSphere(Ji)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Si),Gl.multiplyMatrices(n,Si),Zi.matrixWorld=Gl,Zi.raycast(e,js);for(let a=0,o=js.length;a<o;a++){const l=js[a];l.instanceId=r,l.object=this,t.push(l)}js.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xo(new Float32Array(i*this.count),i,this.count,No,tn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ga=new N,Bd=new N,Od=new Ue;class kn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ga.subVectors(n,t).cross(Bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Od.getNormalMatrix(e),i=this.coplanarPoint(ga).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new qn,kd=new Pe(.5,.5),Ks=new N;class $o{constructor(e=new kn,t=new kn,n=new kn,i=new kn,r=new kn,a=new kn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],_=r[9],f=r[10],m=r[11],b=r[12],A=r[13],E=r[14],C=r[15];if(i[0].setComponents(c-a,p-h,m-g,C-b).normalize(),i[1].setComponents(c+a,p+h,m+g,C+b).normalize(),i[2].setComponents(c+o,p+u,m+_,C+A).normalize(),i[3].setComponents(c-o,p-u,m-_,C-A).normalize(),n)i[4].setComponents(l,d,f,E).normalize(),i[5].setComponents(c-l,p-d,m-f,C-E).normalize();else if(i[4].setComponents(c-l,p-d,m-f,C-E).normalize(),t===mn)i[5].setComponents(c+l,p+d,m+f,C+E).normalize();else if(t===Mr)i[5].setComponents(l,d,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){Qn.center.set(0,0,0);const t=kd.distanceTo(e.center);return Qn.radius=.7071067811865476+t,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ks.x=i.normal.x>0?e.max.x:e.min.x,Ks.y=i.normal.y>0?e.max.y:e.min.y,Ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class li extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sr=new N,Er=new N,Xl=new ze,Qi=new Nr,Zs=new qn,_a=new N,ql=new N;class zd extends vt{constructor(e=new It,t=new li){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Sr.fromBufferAttribute(t,i-1),Er.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Sr.distanceTo(Er);e.setAttribute("lineDistance",new mt(n,1))}else Se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(i),Zs.radius+=r,e.ray.intersectsSphere(Zs)===!1)return;Xl.copy(i).invert(),Qi.copy(e.ray).applyMatrix4(Xl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,f=g-1;_<f;_+=c){const m=h.getX(_),b=h.getX(_+1),A=Js(this,e,Qi,l,m,b,_);A&&t.push(A)}if(this.isLineLoop){const _=h.getX(g-1),f=h.getX(p),m=Js(this,e,Qi,l,_,f,g-1);m&&t.push(m)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,f=g-1;_<f;_+=c){const m=Js(this,e,Qi,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Js(this,e,Qi,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Js(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Sr.fromBufferAttribute(o,i),Er.fromBufferAttribute(o,r),t.distanceSqToSegment(Sr,Er,_a,ql)>n)return;_a.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(_a);if(!(c<e.near||c>e.far))return{distance:c,point:ql.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const $l=new N,Yl=new N;class Hi extends zd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)$l.fromBufferAttribute(t,i),Yl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$l.distanceTo(Yl);e.setAttribute("lineDistance",new mt(n,1))}else Se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xa extends ut{constructor(e,t,n,i,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Ts extends ut{constructor(e,t,n=xn,i,r,a,o=Tt,l=Tt,c,h=Ln,u=1){if(h!==Ln&&h!==ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vd extends Ts{constructor(e,t=xn,n=oi,i,r,a=Tt,o=Tt,l,c=Ln){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yh extends ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Or extends It{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],_=[],f=[];for(let m=0;m<h;m++){const b=m*d-a;for(let A=0;A<c;A++){const E=A*u-r;g.push(E,-b,0),_.push(0,0,1),f.push(A/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){const A=b+c*m,E=b+c*(m+1),C=b+1+c*(m+1),x=b+1+c*m;p.push(A,E,x),p.push(E,C,x)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hd extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jl extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yo extends $n{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Te(16777215),this.specular=new Te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gd extends $n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wd extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xd extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Qs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function qd(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Kl(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Mh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class kr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $d extends kr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Li,endingEnd:Li}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pi:r=e,o=2*t-n;break;case vr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pi:a=e,l=2*n-t;break;case vr:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,f=_*g,m=-d*f+2*d*_-d*g,b=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,A=(-1-p)*f+(1.5+p)*_+.5*g,E=p*f-p*_;for(let C=0;C!==o;++C)r[C]=m*a[h+C]+b*a[c+C]+A*a[l+C]+E*a[u+C];return r}}class bh extends kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class Yd extends kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class cn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qs(t,this.TimeBufferType),this.values=Qs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qs(e.times,Array),values:Qs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $d(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case xr:t=this.InterpolantFactoryMethodLinear;break;case qr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Se("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return xr;case this.InterpolantFactoryMethodSmooth:return qr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Re("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Re("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Re("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Re("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Xu(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Re("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=xr;class Gi extends cn{constructor(e,t,n){super(e,t,n)}}Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Ms;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Sh extends cn{constructor(e,t,n,i){super(e,t,n,i)}}Sh.prototype.ValueTypeName="color";class wr extends cn{constructor(e,t,n,i){super(e,t,n,i)}}wr.prototype.ValueTypeName="number";class jd extends kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Zt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Rs extends cn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new jd(this.times,this.values,this.getValueSize(),e)}}Rs.prototype.ValueTypeName="quaternion";Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Wi extends cn{constructor(e,t,n){super(e,t,n)}}Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Ms;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends cn{constructor(e,t,n,i){super(e,t,n,i)}}As.prototype.ValueTypeName="vector";class To{constructor(e="",t=-1,n=[],i=zo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Xn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Zd(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(cn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=qd(l);l=Kl(l,1,h),c=Kl(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new wr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Se("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Re("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,_){if(p.length!==0){const f=[],m=[];Mh(p,f,m,g),f.length!==0&&_.push(new u(d,f,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const f=[],m=[];for(let b=0;b!==d[g].morphTargets.length;++b){const A=d[g];f.push(A.time),m.push(A.morphTarget===_?1:0)}i.push(new wr(".morphTargetInfluence["+_+"]",f,m))}l=p.length*a}else{const p=".bones["+t[u].name+"]";n(As,p+".position",d,"pos",i),n(Rs,p+".quaternion",d,"rot",i),n(As,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Kd(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wr;case"vector":case"vector2":case"vector3":case"vector4":return As;case"color":return Sh;case"quaternion":return Rs;case"bool":case"boolean":return Gi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Zd(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Kd(s.type);if(s.times===void 0){const t=[],n=[];Mh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const va={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Jd{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Qd=new Jd;class jo{constructor(e){this.manager=e!==void 0?e:Qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}jo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ei=new WeakMap;class ef extends jo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=va.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ei.get(a);u===void 0&&(u=[],Ei.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=bs("img");function l(){h(),t&&t(this);const u=Ei.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}Ei.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),va.remove(`image:${e}`);const d=Ei.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(u)}Ei.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),va.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Eh extends jo{constructor(e){super(e)}load(e,t,n,i){const r=new ut,a=new ef(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class zr extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class wh extends zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ya=new ze,Zl=new N,Jl=new N;class Th{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zl),Jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jl),t.updateMatrixWorld(),ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tf extends Th{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0}}class nf extends zr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ko extends gh{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sf extends Th{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tr extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new sf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ah extends zr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class rf extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ch{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class af{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Zt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Zt.multiplyQuaternionsFlat(e,a,e,t,e,n),Zt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Zo="\\[\\]\\.:\\/",of=new RegExp("["+Zo+"]","g"),Jo="[^"+Zo+"]",lf="[^"+Zo.replace("\\.","")+"]",cf=/((?:WC+[\/:])*)/.source.replace("WC",Jo),hf=/(WCOD+)?/.source.replace("WCOD",lf),uf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jo),df=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jo),ff=new RegExp("^"+cf+hf+uf+df+"$"),pf=["material","materials","bones","map"];class mf{constructor(e,t,n){const i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(of,"")}static parseTrackName(e){const t=ff.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);pf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Se("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Re("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=mf;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class gf{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Li,endingEnd:Li};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Uu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Nu:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case zo:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===Fu;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Du){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Pi,i.endingEnd=Pi):(e?i.endingStart=this.zeroSlopeAtStart?Pi:Li:i.endingStart=vr,t?i.endingEnd=this.zeroSlopeAtEnd?Pi:Li:i.endingEnd=vr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const _f=new Float32Array(1);class Rh extends Wn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],p=d.name;let g=h[p];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new af($e.create(n,p,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new bh(new Float32Array(2),new Float32Array(2),1,_f),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?To.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=zo),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new gf(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?To.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Ql{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=He(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(He(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const On=new N,er=new ze,Ma=new ze;class Ri extends Hi{constructor(e){const t=Ih(e),n=new It,i=[],r=[];for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new mt(i,3)),n.setAttribute("color",new mt(r,3));const a=new li({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new Te(255),l=new Te(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ma.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(er.multiplyMatrices(Ma,o.matrixWorld),On.setFromMatrixPosition(er),i.setXYZ(a,On.x,On.y,On.z),er.multiplyMatrices(Ma,o.parent.matrixWorld),On.setFromMatrixPosition(er),i.setXYZ(a+1,On.x,On.y,On.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,e.r,e.g,e.b),i.setXYZ(r+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ih(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...Ih(s.children[t]));return e}class Lh extends Hi{constructor(e=10,t=10,n=4473924,i=8947848){n=new Te(n),i=new Te(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,p=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===r?n:i;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new It;h.setAttribute("position",new mt(l,3)),h.setAttribute("color",new mt(c,3));const u=new li({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const tr=new Ut;class Ph extends Hi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new It;r.setIndex(new pt(n,1)),r.setAttribute("position",new pt(i,3)),super(r,new li({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&tr.setFromObject(this.object),tr.isEmpty())return;const e=tr.min,t=tr.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Dh extends Hi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new It;i.setAttribute("position",new mt(t,3)),i.setAttribute("color",new mt(n,3));const r=new li({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Te,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class xf extends Wn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Se("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ec(s,e,t,n){const i=vf(n);switch(t){case ah:return s*e;case No:return s*e/i.components*i.byteLength;case Bo:return s*e/i.components*i.byteLength;case Oi:return s*e*2/i.components*i.byteLength;case Oo:return s*e*2/i.components*i.byteLength;case oh:return s*e*3/i.components*i.byteLength;case jt:return s*e*4/i.components*i.byteLength;case ko:return s*e*4/i.components*i.byteLength;case lr:case cr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hr:case ur:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ya:case Ka:return Math.max(s,16)*Math.max(e,8)/4;case $a:case ja:return Math.max(s,8)*Math.max(e,8)/2;case Za:case Ja:case eo:case to:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qa:case no:case io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ro:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ao:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case oo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case lo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case co:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ho:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case uo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case fo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case po:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case mo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case go:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case _o:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case xo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case vo:case yo:case Mo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case bo:case So:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Eo:case wo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vf(s){switch(s){case Yt:case nh:return{byteLength:1,components:1};case vs:case ih:case In:return{byteLength:2,components:1};case Uo:case Fo:return{byteLength:2,components:4};case xn:case Do:case tn:return{byteLength:4,components:1};case sh:case rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ir}}));typeof window<"u"&&(window.__THREE__?Se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ir);function Uh(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function yf(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Af=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,If=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Df=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ff=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ip=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Am=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,km=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Mf,alphahash_pars_fragment:bf,alphamap_fragment:Sf,alphamap_pars_fragment:Ef,alphatest_fragment:wf,alphatest_pars_fragment:Tf,aomap_fragment:Af,aomap_pars_fragment:Cf,batching_pars_vertex:Rf,batching_vertex:If,begin_vertex:Lf,beginnormal_vertex:Pf,bsdfs:Df,iridescence_fragment:Uf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:Of,clipping_planes_vertex:kf,color_fragment:zf,color_pars_fragment:Vf,color_pars_vertex:Hf,color_vertex:Gf,common:Wf,cube_uv_reflection_fragment:Xf,defaultnormal_vertex:qf,displacementmap_pars_vertex:$f,displacementmap_vertex:Yf,emissivemap_fragment:jf,emissivemap_pars_fragment:Kf,colorspace_fragment:Zf,colorspace_pars_fragment:Jf,envmap_fragment:Qf,envmap_common_pars_fragment:ep,envmap_pars_fragment:tp,envmap_pars_vertex:np,envmap_physical_pars_fragment:fp,envmap_vertex:ip,fog_vertex:sp,fog_pars_vertex:rp,fog_fragment:ap,fog_pars_fragment:op,gradientmap_pars_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:hp,lights_lambert_pars_fragment:up,lights_pars_begin:dp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:_p,lights_physical_fragment:xp,lights_physical_pars_fragment:vp,lights_fragment_begin:yp,lights_fragment_maps:Mp,lights_fragment_end:bp,logdepthbuf_fragment:Sp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:Tp,map_fragment:Ap,map_pars_fragment:Cp,map_particle_fragment:Rp,map_particle_pars_fragment:Ip,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Pp,morphinstance_vertex:Dp,morphcolor_vertex:Up,morphnormal_vertex:Fp,morphtarget_pars_vertex:Np,morphtarget_vertex:Bp,normal_fragment_begin:Op,normal_fragment_maps:kp,normal_pars_fragment:zp,normal_pars_vertex:Vp,normal_vertex:Hp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:qp,iridescence_pars_fragment:$p,opaque_fragment:Yp,packing:jp,premultiplied_alpha_fragment:Kp,project_vertex:Zp,dithering_fragment:Jp,dithering_pars_fragment:Qp,roughnessmap_fragment:em,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:sm,shadowmask_pars_fragment:rm,skinbase_vertex:am,skinning_pars_vertex:om,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:hm,specularmap_pars_fragment:um,tonemapping_fragment:dm,tonemapping_pars_fragment:fm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:_m,uv_vertex:xm,worldpos_vertex:vm,background_vert:ym,background_frag:Mm,backgroundCube_vert:bm,backgroundCube_frag:Sm,cube_vert:Em,cube_frag:wm,depth_vert:Tm,depth_frag:Am,distance_vert:Cm,distance_frag:Rm,equirect_vert:Im,equirect_frag:Lm,linedashed_vert:Pm,linedashed_frag:Dm,meshbasic_vert:Um,meshbasic_frag:Fm,meshlambert_vert:Nm,meshlambert_frag:Bm,meshmatcap_vert:Om,meshmatcap_frag:km,meshnormal_vert:zm,meshnormal_frag:Vm,meshphong_vert:Hm,meshphong_frag:Gm,meshphysical_vert:Wm,meshphysical_frag:Xm,meshtoon_vert:qm,meshtoon_frag:$m,points_vert:Ym,points_frag:jm,shadow_vert:Km,shadow_frag:Zm,sprite_vert:Jm,sprite_frag:Qm},ce={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},fn={basic:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Te(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Bt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Bt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Te(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Bt([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Bt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Bt([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Bt([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Bt([ce.common,ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Bt([ce.lights,ce.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};fn.physical={uniforms:Bt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const nr={r:0,b:0,g:0},ei=new nn,eg=new ze;function tg(s,e,t,n,i,r,a){const o=new Te(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function _(A){let E=!1;const C=g(A);C===null?m(o,l):C&&C.isColor&&(m(C,1),E=!0);const x=s.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(A,E){const C=g(E);C&&(C.isCubeTexture||C.mapping===Dr)?(h===void 0&&(h=new Mt(new Vi(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:zi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(x,S,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ei.copy(E.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(eg.makeRotationFromEuler(ei)),h.material.toneMapped=Ye.getTransfer(C.colorSpace)!==et,(u!==C||d!==C.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,p=s.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Mt(new Or(2,2),new ln({name:"BackgroundMaterial",uniforms:zi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(C.colorSpace)!==et,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,p=s.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function m(A,E){A.getRGB(nr,mh(s)),n.buffers.color.setClear(nr.r,nr.g,nr.b,E,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,E=1){o.set(A),l=E,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,m(o,l)},render:_,addToRenderList:f,dispose:b}}function ng(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,T,L,P,z){let U=!1;const V=u(P,L,T);r!==V&&(r=V,c(r.object)),U=p(M,P,L,z),U&&g(M,P,L,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,E(M,T,L,P),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,T,L){const P=L.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let U=z[T.id];U===void 0&&(U={},z[T.id]=U);let V=U[P];return V===void 0&&(V=d(l()),U[P]=V),V}function d(M){const T=[],L=[],P=[];for(let z=0;z<t;z++)T[z]=0,L[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:P,object:M,attributes:{},index:null}}function p(M,T,L,P){const z=r.attributes,U=T.attributes;let V=0;const k=L.getAttributes();for(const q in k)if(k[q].location>=0){const te=z[q];let ie=U[q];if(ie===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),te===void 0||te.attribute!==ie||ie&&te.data!==ie.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function g(M,T,L,P){const z={},U=T.attributes;let V=0;const k=L.getAttributes();for(const q in k)if(k[q].location>=0){let te=U[q];te===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(te=M.instanceColor));const ie={};ie.attribute=te,te&&te.data&&(ie.data=te.data),z[q]=ie,V++}r.attributes=z,r.attributesNum=V,r.index=P}function _(){const M=r.newAttributes;for(let T=0,L=M.length;T<L;T++)M[T]=0}function f(M){m(M,0)}function m(M,T){const L=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;L[M]=1,P[M]===0&&(s.enableVertexAttribArray(M),P[M]=1),z[M]!==T&&(s.vertexAttribDivisor(M,T),z[M]=T)}function b(){const M=r.newAttributes,T=r.enabledAttributes;for(let L=0,P=T.length;L<P;L++)T[L]!==M[L]&&(s.disableVertexAttribArray(L),T[L]=0)}function A(M,T,L,P,z,U,V){V===!0?s.vertexAttribIPointer(M,T,L,z,U):s.vertexAttribPointer(M,T,L,P,z,U)}function E(M,T,L,P){_();const z=P.attributes,U=L.getAttributes(),V=T.defaultAttributeValues;for(const k in U){const q=U[k];if(q.location>=0){let ee=z[k];if(ee===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const te=ee.normalized,ie=ee.itemSize,Ne=e.get(ee);if(Ne===void 0)continue;const Fe=Ne.buffer,it=Ne.type,st=Ne.bytesPerElement,Y=it===s.INT||it===s.UNSIGNED_INT||ee.gpuType===Do;if(ee.isInterleavedBufferAttribute){const Z=ee.data,pe=Z.stride,De=ee.offset;if(Z.isInstancedInterleavedBuffer){for(let ge=0;ge<q.locationSize;ge++)m(q.location+ge,Z.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ge=0;ge<q.locationSize;ge++)f(q.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let ge=0;ge<q.locationSize;ge++)A(q.location+ge,ie/q.locationSize,it,te,pe*st,(De+ie/q.locationSize*ge)*st,Y)}else{if(ee.isInstancedBufferAttribute){for(let Z=0;Z<q.locationSize;Z++)m(q.location+Z,ee.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Z=0;Z<q.locationSize;Z++)f(q.location+Z);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let Z=0;Z<q.locationSize;Z++)A(q.location+Z,ie/q.locationSize,it,te,ie*st,ie/q.locationSize*Z*st,Y)}}else if(V!==void 0){const te=V[k];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(q.location,te);break;case 3:s.vertexAttrib3fv(q.location,te);break;case 4:s.vertexAttrib4fv(q.location,te);break;default:s.vertexAttrib1fv(q.location,te)}}}}b()}function C(){I();for(const M in n){const T=n[M];for(const L in T){const P=T[L];for(const z in P)h(P[z].object),delete P[z];delete T[L]}delete n[M]}}function x(M){if(n[M.id]===void 0)return;const T=n[M.id];for(const L in T){const P=T[L];for(const z in P)h(P[z].object),delete P[z];delete T[L]}delete n[M.id]}function S(M){for(const T in n){const L=n[T];if(L[M.id]===void 0)continue;const P=L[M.id];for(const z in P)h(P[z].object),delete P[z];delete L[M.id]}}function I(){v(),a=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:v,dispose:C,releaseStatesOfGeometry:x,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:f,disableUnusedAttributes:b}}function ig(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){return!(S!==jt&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const I=S===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Yt&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==tn&&!I)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Se("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=s.getParameter(s.MAX_SAMPLES),x=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:E,maxSamples:C,samples:x}}function rg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new kn,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!f)r?h(null):c();else{const b=r?0:n,A=b*4;let E=m.clippingState||null;l.value=E,E=h(g,d,A,p);for(let C=0;C!==A;++C)E[C]=t[C];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const m=p+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<m)&&(f=new Float32Array(m));for(let A=0,E=p;A!==_;++A,E+=4)a.copy(u[A]).applyMatrix4(b,o),a.normal.toArray(f,E),f[E+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function ag(s){let e=new WeakMap;function t(a,o){return o===Xa?a.mapping=oi:o===qa&&(a.mapping=Ni),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xa||o===qa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new xh(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Vn=4,tc=[.125,.215,.35,.446,.526,.582],si=20,og=256,es=new Ko,nc=new Te;let ba=null,Sa=0,Ea=0,wa=!1;const lg=new N;class Ar{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=lg}=r;ba=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,Sa,Ea),this._renderer.xr.enabled=wa,e.scissorTest=!1,wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oi||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:In,format:jt,colorSpace:ki,depthBuffer:!1},i=ic(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ic(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cg(r)),this._blurMaterial=ug(r,e,t),this._ggxMaterial=hg(r,e,t)}return i}_compileMaterial(e){const t=new Mt(new It,e);this._renderer.compile(t,es)}_sceneToCubeUV(e,t,n,i,r){const l=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(nc),u.toneMapping=gn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mt(new Vi,new fh({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,f=_.material;let m=!1;const b=e.background;b?b.isColor&&(f.color.copy(b),e.background=null,m=!0):(f.color.copy(nc),m=!0);for(let A=0;A<6;A++){const E=A%3;E===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):E===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));const C=this._cubeSize;wi(i,E*C,A>2?C:0,C,C),u.setRenderTarget(i),m&&u.render(_,l),u.render(e,l)}u.toneMapping=p,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===oi||e.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;wi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,es)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,p=u*d,{_lodMax:g}=this,_=this._sizeLods[n],f=3*_*(n>g-Vn?n-g+Vn:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,wi(r,f,m,3*_,2*_),i.setRenderTarget(r),i.render(o,es),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,wi(e,f,m,3*_,2*_),i.setRenderTarget(e),i.render(o,es)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*si-1),_=r/g,f=isFinite(r)?1+Math.floor(h*_):si;f>si&&Se(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${si}`);const m=[];let b=0;for(let S=0;S<si;++S){const I=S/_,v=Math.exp(-I*I/2);m.push(v),S===0?b+=v:S<f&&(b+=2*v)}for(let S=0;S<m.length;S++)m[S]=m[S]/b;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-n;const E=this._sizeLods[i],C=3*E*(i>A-Vn?i-A+Vn:0),x=4*(this._cubeSize-E);wi(t,C,x,3*E,2*E),l.setRenderTarget(t),l.render(u,es)}}function cg(s){const e=[],t=[],n=[];let i=s;const r=s-Vn+1+tc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Vn?l=tc[a-s+Vn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,f=2,m=1,b=new Float32Array(_*g*p),A=new Float32Array(f*g*p),E=new Float32Array(m*g*p);for(let x=0;x<p;x++){const S=x%3*2/3-1,I=x>2?0:-1,v=[S,I,0,S+2/3,I,0,S+2/3,I+1,0,S,I,0,S+2/3,I+1,0,S,I+1,0];b.set(v,_*g*x),A.set(d,f*g*x);const M=[x,x,x,x,x,x];E.set(M,m*g*x)}const C=new It;C.setAttribute("position",new pt(b,_)),C.setAttribute("uv",new pt(A,f)),C.setAttribute("faceIndex",new pt(E,m)),n.push(new Mt(C,null)),i>Vn&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ic(s,e,t){const n=new _n(s,e,t);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function hg(s,e,t){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:og,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Dt,depthTest:!1,depthWrite:!1})}function ug(s,e,t){const n=new Float32Array(si),i=new N(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dt,depthTest:!1,depthWrite:!1})}function sc(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dt,depthTest:!1,depthWrite:!1})}function rc(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dt,depthTest:!1,depthWrite:!1})}function Vr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Xa||l===qa,h=l===oi||l===Ni;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ar(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Ar(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function fg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ss("WebGLRenderer: "+n+" extension not supported."),i}}}function pg(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],s.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let A=0,E=b.length;A<E;A+=3){const C=b[A+0],x=b[A+1],S=b[A+2];d.push(C,x,x,S,S,C)}}else if(g!==void 0){const b=g.array;_=g.version;for(let A=0,E=b.length/3-1;A<E;A+=3){const C=A+0,x=A+1,S=A+2;d.push(C,x,x,S,S,C)}}else return;const f=new(lh(d)?ph:Wo)(d,1);f.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,f)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function mg(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*a,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];t.update(f,n,1)}function u(d,p,g,_){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)c(d[m]/a,p[m],_[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let m=0;for(let b=0;b<g;b++)m+=p[b]*_[b];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function gg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Re("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _g(s,e,t){const n=new WeakMap,i=new ht;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),f===!0&&(E=3);let C=o.attributes.position.count*E,x=1;C>e.maxTextureSize&&(x=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const S=new Float32Array(C*x*4*u),I=new hh(S,C,x,u);I.type=tn,I.needsUpdate=!0;const v=E*4;for(let T=0;T<u;T++){const L=m[T],P=b[T],z=A[T],U=C*x*4*T;for(let V=0;V<L.count;V++){const k=V*v;g===!0&&(i.fromBufferAttribute(L,V),S[U+k+0]=i.x,S[U+k+1]=i.y,S[U+k+2]=i.z,S[U+k+3]=0),_===!0&&(i.fromBufferAttribute(P,V),S[U+k+4]=i.x,S[U+k+5]=i.y,S[U+k+6]=i.z,S[U+k+7]=0),f===!0&&(i.fromBufferAttribute(z,V),S[U+k+8]=i.x,S[U+k+9]=i.y,S[U+k+10]=i.z,S[U+k+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new Pe(C,x)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function xg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const vg={[Yc]:"LINEAR_TONE_MAPPING",[jc]:"REINHARD_TONE_MAPPING",[Kc]:"CINEON_TONE_MAPPING",[Pr]:"ACES_FILMIC_TONE_MAPPING",[Jc]:"AGX_TONE_MAPPING",[Qc]:"NEUTRAL_TONE_MAPPING",[Zc]:"CUSTOM_TONE_MAPPING"};function yg(s,e,t,n,i){const r=new _n(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new _n(e,t,{type:In,depthBuffer:!1,stencilBuffer:!1}),o=new It;o.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new mt([0,2,0,0,2,0],2));const l=new Hd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Mt(o,l),h=new Ko(-1,1,1,-1,0,1);let u=null,d=null,p=!1,g,_=null,f=[],m=!1;this.setSize=function(b,A){r.setSize(b,A),a.setSize(b,A);for(let E=0;E<f.length;E++){const C=f[E];C.setSize&&C.setSize(b,A)}},this.setEffects=function(b){f=b,m=f.length>0&&f[0].isRenderPass===!0;const A=r.width,E=r.height;for(let C=0;C<f.length;C++){const x=f[C];x.setSize&&x.setSize(A,E)}},this.begin=function(b,A){if(p||b.toneMapping===gn&&f.length===0)return!1;if(_=A,A!==null){const E=A.width,C=A.height;(r.width!==E||r.height!==C)&&this.setSize(E,C)}return m===!1&&b.setRenderTarget(r),g=b.toneMapping,b.toneMapping=gn,!0},this.hasRenderPass=function(){return m},this.end=function(b,A){b.toneMapping=g,p=!0;let E=r,C=a;for(let x=0;x<f.length;x++){const S=f[x];if(S.enabled!==!1&&(S.render(b,C,E,A),S.needsSwap!==!1)){const I=E;E=C,C=I}}if(u!==b.outputColorSpace||d!==b.toneMapping){u=b.outputColorSpace,d=b.toneMapping,l.defines={},Ye.getTransfer(u)===et&&(l.defines.SRGB_TRANSFER="");const x=vg[d];x&&(l.defines[x]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(_),b.render(c,h),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Fh=new ut,Ao=new Ts(1,1),Nh=new hh,Bh=new pd,Oh=new _h,ac=[],oc=[],lc=new Float32Array(16),cc=new Float32Array(9),hc=new Float32Array(4);function Xi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ac[i];if(r===void 0&&(r=new Float32Array(i),ac[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function St(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Hr(s,e){let t=oc[e];t===void 0&&(t=new Int32Array(e),oc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Mg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function bg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2fv(this.addr,e),St(t,e)}}function Sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;s.uniform3fv(this.addr,e),St(t,e)}}function Eg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4fv(this.addr,e),St(t,e)}}function wg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;hc.set(n),s.uniformMatrix2fv(this.addr,!1,hc),St(t,n)}}function Tg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;cc.set(n),s.uniformMatrix3fv(this.addr,!1,cc),St(t,n)}}function Ag(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;lc.set(n),s.uniformMatrix4fv(this.addr,!1,lc),St(t,n)}}function Cg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Rg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2iv(this.addr,e),St(t,e)}}function Ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3iv(this.addr,e),St(t,e)}}function Lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4iv(this.addr,e),St(t,e)}}function Pg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2uiv(this.addr,e),St(t,e)}}function Ug(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3uiv(this.addr,e),St(t,e)}}function Fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4uiv(this.addr,e),St(t,e)}}function Ng(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ao.compareFunction=t.isReversedDepthBuffer()?Ho:Vo,r=Ao):r=Fh,t.setTexture2D(e||r,i)}function Bg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bh,i)}function Og(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Oh,i)}function kg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Nh,i)}function zg(s){switch(s){case 5126:return Mg;case 35664:return bg;case 35665:return Sg;case 35666:return Eg;case 35674:return wg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Cg;case 35667:case 35671:return Rg;case 35668:case 35672:return Ig;case 35669:case 35673:return Lg;case 5125:return Pg;case 36294:return Dg;case 36295:return Ug;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return kg}}function Vg(s,e){s.uniform1fv(this.addr,e)}function Hg(s,e){const t=Xi(e,this.size,2);s.uniform2fv(this.addr,t)}function Gg(s,e){const t=Xi(e,this.size,3);s.uniform3fv(this.addr,t)}function Wg(s,e){const t=Xi(e,this.size,4);s.uniform4fv(this.addr,t)}function Xg(s,e){const t=Xi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function qg(s,e){const t=Xi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function $g(s,e){const t=Xi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Yg(s,e){s.uniform1iv(this.addr,e)}function jg(s,e){s.uniform2iv(this.addr,e)}function Kg(s,e){s.uniform3iv(this.addr,e)}function Zg(s,e){s.uniform4iv(this.addr,e)}function Jg(s,e){s.uniform1uiv(this.addr,e)}function Qg(s,e){s.uniform2uiv(this.addr,e)}function e0(s,e){s.uniform3uiv(this.addr,e)}function t0(s,e){s.uniform4uiv(this.addr,e)}function n0(s,e,t){const n=this.cache,i=e.length,r=Hr(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ao:a=Fh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function i0(s,e,t){const n=this.cache,i=e.length,r=Hr(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Bh,r[a])}function s0(s,e,t){const n=this.cache,i=e.length,r=Hr(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Oh,r[a])}function r0(s,e,t){const n=this.cache,i=e.length,r=Hr(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Nh,r[a])}function a0(s){switch(s){case 5126:return Vg;case 35664:return Hg;case 35665:return Gg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return $g;case 5124:case 35670:return Yg;case 35667:case 35671:return jg;case 35668:case 35672:return Kg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return Qg;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}class o0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zg(t.type)}}class l0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a0(t.type)}}class c0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function uc(s,e){s.seq.push(e),s.map[e.id]=e}function h0(s,e,t){const n=s.name,i=n.length;for(Ta.lastIndex=0;;){const r=Ta.exec(n),a=Ta.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){uc(t,c===void 0?new o0(o,s,e):new l0(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new c0(o),uc(t,u)),t=u}}}class dr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);h0(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function dc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const u0=37297;let d0=0;function f0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const fc=new Ue;function p0(s){Ye._getMatrix(fc,Ye.workingColorSpace,s);const e=`mat3( ${fc.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(s)){case yr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Se("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function pc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+f0(s.getShaderSource(e),o)}else return r}function m0(s,e){const t=p0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const g0={[Yc]:"Linear",[jc]:"Reinhard",[Kc]:"Cineon",[Pr]:"ACESFilmic",[Jc]:"AgX",[Qc]:"Neutral",[Zc]:"Custom"};function _0(s,e){const t=g0[e];return t===void 0?(Se("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ir=new N;function x0(){Ye.getLuminanceCoefficients(ir);const s=ir.x.toFixed(4),e=ir.y.toFixed(4),t=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function y0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ms(s){return s!==""}function mc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(s){return s.replace(b0,E0)}const S0=new Map;function E0(s,e){let t=Be[e];if(t===void 0){const n=S0.get(e);if(n!==void 0)t=Be[n],Se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Co(t)}const w0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(s){return s.replace(w0,T0)}function T0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const A0={[ar]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function C0(s){return A0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R0={[oi]:"ENVMAP_TYPE_CUBE",[Ni]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE_UV"};function I0(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":R0[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const L0={[Ni]:"ENVMAP_MODE_REFRACTION"};function P0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":L0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const D0={[Lr]:"ENVMAP_BLENDING_MULTIPLY",[Iu]:"ENVMAP_BLENDING_MIX",[Lu]:"ENVMAP_BLENDING_ADD"};function U0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":D0[s.combine]||"ENVMAP_BLENDING_NONE"}function F0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function N0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=C0(t),c=I0(t),h=P0(t),u=U0(t),d=F0(t),p=v0(t),g=y0(r),_=i.createProgram();let f,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ms).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ms).join(`
`),m.length>0&&(m+=`
`)):(f=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),m=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?Be.tonemapping_pars_fragment:"",t.toneMapping!==gn?_0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,m0("linearToOutputTexel",t.outputColorSpace),x0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),a=Co(a),a=mc(a,t),a=gc(a,t),o=Co(o),o=mc(o,t),o=gc(o,t),a=_c(a),o=_c(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",t.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=b+f+a,E=b+m+o,C=dc(i,i.VERTEX_SHADER,A),x=dc(i,i.FRAGMENT_SHADER,E);i.attachShader(_,C),i.attachShader(_,x),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function S(T){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(_)||"",P=i.getShaderInfoLog(C)||"",z=i.getShaderInfoLog(x)||"",U=L.trim(),V=P.trim(),k=z.trim();let q=!0,ee=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,C,x);else{const te=pc(i,C,"vertex"),ie=pc(i,x,"fragment");Re("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+te+`
`+ie)}else U!==""?Se("WebGLProgram: Program Info Log:",U):(V===""||k==="")&&(ee=!1);ee&&(T.diagnostics={runnable:q,programLog:U,vertexShader:{log:V,prefix:f},fragmentShader:{log:k,prefix:m}})}i.deleteShader(C),i.deleteShader(x),I=new dr(i,_),v=M0(i,_)}let I;this.getUniforms=function(){return I===void 0&&S(this),I};let v;this.getAttributes=function(){return v===void 0&&S(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,u0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=x,this}let B0=0;class O0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new k0(e),t.set(e,n)),n}}class k0{constructor(e){this.id=B0++,this.code=e,this.usedTimes=0}}function z0(s,e,t,n,i,r,a){const o=new uh,l=new O0,c=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function f(v,M,T,L,P){const z=L.fog,U=P.geometry,V=v.isMeshStandardMaterial?L.environment:null,k=(v.isMeshStandardMaterial?t:e).get(v.envMap||V),q=k&&k.mapping===Dr?k.image.height:null,ee=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&Se("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const te=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ie=te!==void 0?te.length:0;let Ne=0;U.morphAttributes.position!==void 0&&(Ne=1),U.morphAttributes.normal!==void 0&&(Ne=2),U.morphAttributes.color!==void 0&&(Ne=3);let Fe,it,st,Y;if(ee){const Je=fn[ee];Fe=Je.vertexShader,it=Je.fragmentShader}else Fe=v.vertexShader,it=v.fragmentShader,l.update(v),st=l.getVertexShaderID(v),Y=l.getFragmentShaderID(v);const Z=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),De=P.isInstancedMesh===!0,ge=P.isBatchedMesh===!0,We=!!v.map,Et=!!v.matcap,Xe=!!k,Ze=!!v.aoMap,rt=!!v.lightMap,Oe=!!v.bumpMap,gt=!!v.normalMap,D=!!v.displacementMap,_t=!!v.emissiveMap,Ke=!!v.metalnessMap,ot=!!v.roughnessMap,ve=v.anisotropy>0,R=v.clearcoat>0,y=v.dispersion>0,B=v.iridescence>0,$=v.sheen>0,K=v.transmission>0,X=ve&&!!v.anisotropyMap,Me=R&&!!v.clearcoatMap,re=R&&!!v.clearcoatNormalMap,xe=R&&!!v.clearcoatRoughnessMap,Ie=B&&!!v.iridescenceMap,Q=B&&!!v.iridescenceThicknessMap,oe=$&&!!v.sheenColorMap,_e=$&&!!v.sheenRoughnessMap,ye=!!v.specularMap,ae=!!v.specularColorMap,ke=!!v.specularIntensityMap,F=K&&!!v.transmissionMap,ue=K&&!!v.thicknessMap,ne=!!v.gradientMap,de=!!v.alphaMap,J=v.alphaTest>0,j=!!v.alphaHash,se=!!v.extensions;let Le=gn;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Le=s.toneMapping);const lt={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:Fe,fragmentShader:it,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:ge,batchingColor:ge&&P._colorsTexture!==null,instancing:De,instancingColor:De&&P.instanceColor!==null,instancingMorph:De&&P.morphTexture!==null,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ki,alphaToCoverage:!!v.alphaToCoverage,map:We,matcap:Et,envMap:Xe,envMapMode:Xe&&k.mapping,envMapCubeUVHeight:q,aoMap:Ze,lightMap:rt,bumpMap:Oe,normalMap:gt,displacementMap:D,emissiveMap:_t,normalMapObjectSpace:gt&&v.normalMapType===Ou,normalMapTangentSpace:gt&&v.normalMapType===Ur,metalnessMap:Ke,roughnessMap:ot,anisotropy:ve,anisotropyMap:X,clearcoat:R,clearcoatMap:Me,clearcoatNormalMap:re,clearcoatRoughnessMap:xe,dispersion:y,iridescence:B,iridescenceMap:Ie,iridescenceThicknessMap:Q,sheen:$,sheenColorMap:oe,sheenRoughnessMap:_e,specularMap:ye,specularColorMap:ae,specularIntensityMap:ke,transmission:K,transmissionMap:F,thicknessMap:ue,gradientMap:ne,opaque:v.transparent===!1&&v.blending===Hn&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:J,alphaHash:j,combine:v.combine,mapUv:We&&_(v.map.channel),aoMapUv:Ze&&_(v.aoMap.channel),lightMapUv:rt&&_(v.lightMap.channel),bumpMapUv:Oe&&_(v.bumpMap.channel),normalMapUv:gt&&_(v.normalMap.channel),displacementMapUv:D&&_(v.displacementMap.channel),emissiveMapUv:_t&&_(v.emissiveMap.channel),metalnessMapUv:Ke&&_(v.metalnessMap.channel),roughnessMapUv:ot&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:Me&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(v.sheenRoughnessMap.channel),specularMapUv:ye&&_(v.specularMap.channel),specularColorMapUv:ae&&_(v.specularColorMap.channel),specularIntensityMapUv:ke&&_(v.specularIntensityMap.channel),transmissionMapUv:F&&_(v.transmissionMap.channel),thicknessMapUv:ue&&_(v.thicknessMap.channel),alphaMapUv:de&&_(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(gt||ve),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(We||de),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:P.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:We&&v.map.isVideoTexture===!0&&Ye.getTransfer(v.map.colorSpace)===et,decodeVideoTextureEmissive:_t&&v.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(v.emissiveMap.colorSpace)===et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===en,flipSided:v.side===Ot,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function m(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const T in v.defines)M.push(T),M.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(b(M,v),A(M,v),M.push(s.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function b(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function A(v,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function E(v){const M=g[v.type];let T;if(M){const L=fn[M];T=Ad.clone(L.uniforms)}else T=v.uniforms;return T}function C(v,M){let T=u.get(M);return T!==void 0?++T.usedTimes:(T=new N0(s,M,v,r),h.push(T),u.set(M,T)),T}function x(v){if(--v.usedTimes===0){const M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function S(v){l.remove(v)}function I(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:E,acquireProgram:C,releaseProgram:x,releaseShaderCache:S,programs:h,dispose:I}}function V0(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function H0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,p,g,_,f){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},s[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=f),e++,m}function o(u,d,p,g,_,f){const m=a(u,d,p,g,_,f);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(u,d,p,g,_,f){const m=a(u,d,p,g,_,f);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||H0),n.length>1&&n.sort(d||vc),i.length>1&&i.sort(d||vc)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function G0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new yc,s.set(n,[a])):i>=r.length?(a=new yc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function W0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Te};break;case"SpotLight":t={position:new N,direction:new N,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function X0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let q0=0;function $0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Y0(s){const e=new W0,t=X0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,r=new ze,a=new ze;function o(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,_=0,f=0,m=0,b=0,A=0,E=0,C=0,x=0,S=0;c.sort($0);for(let v=0,M=c.length;v<M;v++){const T=c[v],L=T.color,P=T.intensity,z=T.distance;let U=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Oi?U=T.shadow.map.texture:U=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=L.r*P,u+=L.g*P,d+=L.b*P;else if(T.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(T.sh.coefficients[V],P);S++}else if(T.isDirectionalLight){const V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const k=T.shadow,q=t.get(T);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=U,n.directionalShadowMatrix[p]=T.shadow.matrix,b++}n.directional[p]=V,p++}else if(T.isSpotLight){const V=e.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(L).multiplyScalar(P),V.distance=z,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,n.spot[_]=V;const k=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,k.updateMatrices(T),T.castShadow&&x++),n.spotLightMatrix[_]=k.matrix,T.castShadow){const q=t.get(T);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=U,E++}_++}else if(T.isRectAreaLight){const V=e.get(T);V.color.copy(L).multiplyScalar(P),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),n.rectArea[f]=V,f++}else if(T.isPointLight){const V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){const k=T.shadow,q=t.get(T);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=T.shadow.matrix,A++}n.point[g]=V,g++}else if(T.isHemisphereLight){const V=e.get(T);V.skyColor.copy(T.color).multiplyScalar(P),V.groundColor.copy(T.groundColor).multiplyScalar(P),n.hemi[m]=V,m++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==f||I.hemiLength!==m||I.numDirectionalShadows!==b||I.numPointShadows!==A||I.numSpotShadows!==E||I.numSpotMaps!==C||I.numLightProbes!==S)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=E+C-x,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=S,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=f,I.hemiLength=m,I.numDirectionalShadows=b,I.numPointShadows=A,I.numSpotShadows=E,I.numSpotMaps=C,I.numLightProbes=S,n.version=q0++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const f=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const A=c[m];if(A.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(f),u++}else if(A.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(f),p++}else if(A.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(f),a.identity(),r.copy(A.matrixWorld),r.premultiply(f),a.extractRotation(r),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(f),d++}else if(A.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(f),_++}}}return{setup:o,setupView:l,state:n}}function Mc(s){const e=new Y0(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function j0(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Mc(s),e.set(i,[o])):r>=a.length?(o=new Mc(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,J0=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Q0=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],bc=new ze,ts=new N,Aa=new N;function e_(s,e,t){let n=new $o;const i=new Pe,r=new Pe,a=new ht,o=new Wd,l=new Xd,c={},h=t.maxTextureSize,u={[Gn]:Ot,[Ot]:Gn,[en]:en},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:K0,fragmentShader:Z0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ar;let m=this.type;this.render=function(x,S,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||x.length===0)return;x.type===Po&&(Se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),x.type=ar);const v=s.getRenderTarget(),M=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Dt),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const P=m!==this.type;P&&S.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(U=>U.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,U=x.length;z<U;z++){const V=x[z],k=V.shadow;if(k===void 0){Se("WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const q=k.getFrameExtents();if(i.multiply(q),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,k.mapSize.y=r.y)),k.map===null||P===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ds){if(V.isPointLight){Se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new _n(i.x,i.y,{format:Oi,type:In,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),k.map.texture.name=V.name+".shadowMap",k.map.depthTexture=new Ts(i.x,i.y,tn),k.map.depthTexture.name=V.name+".shadowMapDepth",k.map.depthTexture.format=Ln,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Tt,k.map.depthTexture.magFilter=Tt}else{V.isPointLight?(k.map=new xh(i.x),k.map.depthTexture=new Vd(i.x,xn)):(k.map=new _n(i.x,i.y),k.map.depthTexture=new Ts(i.x,i.y,xn)),k.map.depthTexture.name=V.name+".shadowMap",k.map.depthTexture.format=Ln;const te=s.state.buffers.depth.getReversed();this.type===ar?(k.map.depthTexture.compareFunction=te?Ho:Vo,k.map.depthTexture.minFilter=Rt,k.map.depthTexture.magFilter=Rt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Tt,k.map.depthTexture.magFilter=Tt)}k.camera.updateProjectionMatrix()}const ee=k.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<ee;te++){if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,te),s.clear();else{te===0&&(s.setRenderTarget(k.map),s.clear());const ie=k.getViewport(te);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),L.viewport(a)}if(V.isPointLight){const ie=k.camera,Ne=k.matrix,Fe=V.distance||ie.far;Fe!==ie.far&&(ie.far=Fe,ie.updateProjectionMatrix()),ts.setFromMatrixPosition(V.matrixWorld),ie.position.copy(ts),Aa.copy(ie.position),Aa.add(J0[te]),ie.up.copy(Q0[te]),ie.lookAt(Aa),ie.updateMatrixWorld(),Ne.makeTranslation(-ts.x,-ts.y,-ts.z),bc.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),k._frustum.setFromProjectionMatrix(bc,ie.coordinateSystem,ie.reversedDepth)}else k.updateMatrices(V);n=k.getFrustum(),E(S,I,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===ds&&b(k,I),k.needsUpdate=!1}m=this.type,f.needsUpdate=!1,s.setRenderTarget(v,M,T)};function b(x,S){const I=e.update(_);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new _n(i.x,i.y,{format:Oi,type:In})),d.uniforms.shadow_pass.value=x.map.depthTexture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,s.setRenderTarget(x.mapPass),s.clear(),s.renderBufferDirect(S,null,I,d,_,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,s.setRenderTarget(x.map),s.clear(),s.renderBufferDirect(S,null,I,p,_,null)}function A(x,S,I,v){let M=null;const T=I.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(T!==void 0)M=T;else if(M=I.isPointLight===!0?l:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const L=M.uuid,P=S.uuid;let z=c[L];z===void 0&&(z={},c[L]=z);let U=z[P];U===void 0&&(U=M.clone(),z[P]=U,S.addEventListener("dispose",C)),M=U}if(M.visible=S.visible,M.wireframe=S.wireframe,v===ds?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:u[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=s.properties.get(M);L.light=I}return M}function E(x,S,I,v,M){if(x.visible===!1)return;if(x.layers.test(S.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===ds)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,x.matrixWorld);const P=e.update(x),z=x.material;if(Array.isArray(z)){const U=P.groups;for(let V=0,k=U.length;V<k;V++){const q=U[V],ee=z[q.materialIndex];if(ee&&ee.visible){const te=A(x,ee,v,M);x.onBeforeShadow(s,x,S,I,P,te,q),s.renderBufferDirect(I,null,P,te,x,q),x.onAfterShadow(s,x,S,I,P,te,q)}}}else if(z.visible){const U=A(x,z,v,M);x.onBeforeShadow(s,x,S,I,P,U,null),s.renderBufferDirect(I,null,P,U,x,null),x.onAfterShadow(s,x,S,I,P,U,null)}}const L=x.children;for(let P=0,z=L.length;P<z;P++)E(L[P],S,I,v,M)}function C(x){x.target.removeEventListener("dispose",C);for(const I in c){const v=c[I],M=x.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const t_={[Oa]:ka,[za]:Ga,[Va]:Wa,[Fi]:Ha,[ka]:Oa,[Ga]:za,[Wa]:Va,[Ha]:Fi};function n_(s,e){function t(){let F=!1;const ue=new ht;let ne=null;const de=new ht(0,0,0,0);return{setMask:function(J){ne!==J&&!F&&(s.colorMask(J,J,J,J),ne=J)},setLocked:function(J){F=J},setClear:function(J,j,se,Le,lt){lt===!0&&(J*=Le,j*=Le,se*=Le),ue.set(J,j,se,Le),de.equals(ue)===!1&&(s.clearColor(J,j,se,Le),de.copy(ue))},reset:function(){F=!1,ne=null,de.set(-1,0,0,0)}}}function n(){let F=!1,ue=!1,ne=null,de=null,J=null;return{setReversed:function(j){if(ue!==j){const se=e.get("EXT_clip_control");j?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),ue=j;const Le=J;J=null,this.setClear(Le)}},getReversed:function(){return ue},setTest:function(j){j?Z(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(j){ne!==j&&!F&&(s.depthMask(j),ne=j)},setFunc:function(j){if(ue&&(j=t_[j]),de!==j){switch(j){case Oa:s.depthFunc(s.NEVER);break;case ka:s.depthFunc(s.ALWAYS);break;case za:s.depthFunc(s.LESS);break;case Fi:s.depthFunc(s.LEQUAL);break;case Va:s.depthFunc(s.EQUAL);break;case Ha:s.depthFunc(s.GEQUAL);break;case Ga:s.depthFunc(s.GREATER);break;case Wa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=j}},setLocked:function(j){F=j},setClear:function(j){J!==j&&(ue&&(j=1-j),s.clearDepth(j),J=j)},reset:function(){F=!1,ne=null,de=null,J=null,ue=!1}}}function i(){let F=!1,ue=null,ne=null,de=null,J=null,j=null,se=null,Le=null,lt=null;return{setTest:function(Je){F||(Je?Z(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(Je){ue!==Je&&!F&&(s.stencilMask(Je),ue=Je)},setFunc:function(Je,hn,vn){(ne!==Je||de!==hn||J!==vn)&&(s.stencilFunc(Je,hn,vn),ne=Je,de=hn,J=vn)},setOp:function(Je,hn,vn){(j!==Je||se!==hn||Le!==vn)&&(s.stencilOp(Je,hn,vn),j=Je,se=hn,Le=vn)},setLocked:function(Je){F=Je},setClear:function(Je){lt!==Je&&(s.clearStencil(Je),lt=Je)},reset:function(){F=!1,ue=null,ne=null,de=null,J=null,j=null,se=null,Le=null,lt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,f=null,m=null,b=null,A=null,E=null,C=null,x=null,S=new Te(0,0,0),I=0,v=!1,M=null,T=null,L=null,P=null,z=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,k=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=k>=2);let ee=null,te={};const ie=s.getParameter(s.SCISSOR_BOX),Ne=s.getParameter(s.VIEWPORT),Fe=new ht().fromArray(ie),it=new ht().fromArray(Ne);function st(F,ue,ne,de){const J=new Uint8Array(4),j=s.createTexture();s.bindTexture(F,j),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let se=0;se<ne;se++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(ue+se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return j}const Y={};Y[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(s.DEPTH_TEST),a.setFunc(Fi),Oe(!1),gt(dl),Z(s.CULL_FACE),Ze(Dt);function Z(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function pe(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function De(F,ue){return u[F]!==ue?(s.bindFramebuffer(F,ue),u[F]=ue,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ue),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function ge(F,ue){let ne=p,de=!1;if(F){ne=d.get(ue),ne===void 0&&(ne=[],d.set(ue,ne));const J=F.textures;if(ne.length!==J.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let j=0,se=J.length;j<se;j++)ne[j]=s.COLOR_ATTACHMENT0+j;ne.length=J.length,de=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,de=!0);de&&s.drawBuffers(ne)}function We(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const Et={[ii]:s.FUNC_ADD,[fu]:s.FUNC_SUBTRACT,[pu]:s.FUNC_REVERSE_SUBTRACT};Et[mu]=s.MIN,Et[gu]=s.MAX;const Xe={[_u]:s.ZERO,[xu]:s.ONE,[vu]:s.SRC_COLOR,[Na]:s.SRC_ALPHA,[wu]:s.SRC_ALPHA_SATURATE,[Su]:s.DST_COLOR,[Mu]:s.DST_ALPHA,[yu]:s.ONE_MINUS_SRC_COLOR,[Ba]:s.ONE_MINUS_SRC_ALPHA,[Eu]:s.ONE_MINUS_DST_COLOR,[bu]:s.ONE_MINUS_DST_ALPHA,[Tu]:s.CONSTANT_COLOR,[Au]:s.ONE_MINUS_CONSTANT_COLOR,[Cu]:s.CONSTANT_ALPHA,[Ru]:s.ONE_MINUS_CONSTANT_ALPHA};function Ze(F,ue,ne,de,J,j,se,Le,lt,Je){if(F===Dt){_===!0&&(pe(s.BLEND),_=!1);return}if(_===!1&&(Z(s.BLEND),_=!0),F!==du){if(F!==f||Je!==v){if((m!==ii||E!==ii)&&(s.blendEquation(s.FUNC_ADD),m=ii,E=ii),Je)switch(F){case Hn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pr:s.blendFunc(s.ONE,s.ONE);break;case mr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gr:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Re("WebGLState: Invalid blending: ",F);break}else switch(F){case Hn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case mr:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gr:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",F);break}b=null,A=null,C=null,x=null,S.set(0,0,0),I=0,f=F,v=Je}return}J=J||ue,j=j||ne,se=se||de,(ue!==m||J!==E)&&(s.blendEquationSeparate(Et[ue],Et[J]),m=ue,E=J),(ne!==b||de!==A||j!==C||se!==x)&&(s.blendFuncSeparate(Xe[ne],Xe[de],Xe[j],Xe[se]),b=ne,A=de,C=j,x=se),(Le.equals(S)===!1||lt!==I)&&(s.blendColor(Le.r,Le.g,Le.b,lt),S.copy(Le),I=lt),f=F,v=!1}function rt(F,ue){F.side===en?pe(s.CULL_FACE):Z(s.CULL_FACE);let ne=F.side===Ot;ue&&(ne=!ne),Oe(ne),F.blending===Hn&&F.transparent===!1?Ze(Dt):Ze(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const de=F.stencilWrite;o.setTest(de),de&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),_t(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(F){M!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),M=F)}function gt(F){F!==hu?(Z(s.CULL_FACE),F!==T&&(F===dl?s.cullFace(s.BACK):F===uu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),T=F}function D(F){F!==L&&(V&&s.lineWidth(F),L=F)}function _t(F,ue,ne){F?(Z(s.POLYGON_OFFSET_FILL),(P!==ue||z!==ne)&&(s.polygonOffset(ue,ne),P=ue,z=ne)):pe(s.POLYGON_OFFSET_FILL)}function Ke(F){F?Z(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function ot(F){F===void 0&&(F=s.TEXTURE0+U-1),ee!==F&&(s.activeTexture(F),ee=F)}function ve(F,ue,ne){ne===void 0&&(ee===null?ne=s.TEXTURE0+U-1:ne=ee);let de=te[ne];de===void 0&&(de={type:void 0,texture:void 0},te[ne]=de),(de.type!==F||de.texture!==ue)&&(ee!==ne&&(s.activeTexture(ne),ee=ne),s.bindTexture(F,ue||Y[F]),de.type=F,de.texture=ue)}function R(){const F=te[ee];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(F){Re("WebGLState:",F)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(F){Re("WebGLState:",F)}}function $(){try{s.texSubImage2D(...arguments)}catch(F){Re("WebGLState:",F)}}function K(){try{s.texSubImage3D(...arguments)}catch(F){Re("WebGLState:",F)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Re("WebGLState:",F)}}function Me(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Re("WebGLState:",F)}}function re(){try{s.texStorage2D(...arguments)}catch(F){Re("WebGLState:",F)}}function xe(){try{s.texStorage3D(...arguments)}catch(F){Re("WebGLState:",F)}}function Ie(){try{s.texImage2D(...arguments)}catch(F){Re("WebGLState:",F)}}function Q(){try{s.texImage3D(...arguments)}catch(F){Re("WebGLState:",F)}}function oe(F){Fe.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Fe.copy(F))}function _e(F){it.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),it.copy(F))}function ye(F,ue){let ne=c.get(ue);ne===void 0&&(ne=new WeakMap,c.set(ue,ne));let de=ne.get(F);de===void 0&&(de=s.getUniformBlockIndex(ue,F.name),ne.set(F,de))}function ae(F,ue){const de=c.get(ue).get(F);l.get(ue)!==de&&(s.uniformBlockBinding(ue,de,F.__bindingPointIndex),l.set(ue,de))}function ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ee=null,te={},u={},d=new WeakMap,p=[],g=null,_=!1,f=null,m=null,b=null,A=null,E=null,C=null,x=null,S=new Te(0,0,0),I=0,v=!1,M=null,T=null,L=null,P=null,z=null,Fe.set(0,0,s.canvas.width,s.canvas.height),it.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:pe,bindFramebuffer:De,drawBuffers:ge,useProgram:We,setBlending:Ze,setMaterial:rt,setFlipSided:Oe,setCullFace:gt,setLineWidth:D,setPolygonOffset:_t,setScissorTest:Ke,activeTexture:ot,bindTexture:ve,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:B,texImage2D:Ie,texImage3D:Q,updateUBOMapping:ye,uniformBlockBinding:ae,texStorage2D:re,texStorage3D:xe,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:Me,scissor:oe,viewport:_e,reset:ke}}function i_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return p?new OffscreenCanvas(R,y):bs("canvas")}function _(R,y,B){let $=1;const K=ve(R);if((K.width>B||K.height>B)&&($=B/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor($*K.width),Me=Math.floor($*K.height);u===void 0&&(u=g(X,Me));const re=y?g(X,Me):u;return re.width=X,re.height=Me,re.getContext("2d").drawImage(R,0,0,X,Me),Se("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+Me+")."),re}else return"data"in R&&Se("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function f(R){return R.generateMipmaps}function m(R){s.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(R,y,B,$,K=!1){if(R!==null){if(s[R]!==void 0)return s[R];Se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=y;if(y===s.RED&&(B===s.FLOAT&&(X=s.R32F),B===s.HALF_FLOAT&&(X=s.R16F),B===s.UNSIGNED_BYTE&&(X=s.R8)),y===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.R8UI),B===s.UNSIGNED_SHORT&&(X=s.R16UI),B===s.UNSIGNED_INT&&(X=s.R32UI),B===s.BYTE&&(X=s.R8I),B===s.SHORT&&(X=s.R16I),B===s.INT&&(X=s.R32I)),y===s.RG&&(B===s.FLOAT&&(X=s.RG32F),B===s.HALF_FLOAT&&(X=s.RG16F),B===s.UNSIGNED_BYTE&&(X=s.RG8)),y===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.RG8UI),B===s.UNSIGNED_SHORT&&(X=s.RG16UI),B===s.UNSIGNED_INT&&(X=s.RG32UI),B===s.BYTE&&(X=s.RG8I),B===s.SHORT&&(X=s.RG16I),B===s.INT&&(X=s.RG32I)),y===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.RGB8UI),B===s.UNSIGNED_SHORT&&(X=s.RGB16UI),B===s.UNSIGNED_INT&&(X=s.RGB32UI),B===s.BYTE&&(X=s.RGB8I),B===s.SHORT&&(X=s.RGB16I),B===s.INT&&(X=s.RGB32I)),y===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),B===s.UNSIGNED_INT&&(X=s.RGBA32UI),B===s.BYTE&&(X=s.RGBA8I),B===s.SHORT&&(X=s.RGBA16I),B===s.INT&&(X=s.RGBA32I)),y===s.RGB&&(B===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),y===s.RGBA){const Me=K?yr:Ye.getTransfer($);B===s.FLOAT&&(X=s.RGBA32F),B===s.HALF_FLOAT&&(X=s.RGBA16F),B===s.UNSIGNED_BYTE&&(X=Me===et?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function E(R,y){let B;return R?y===null||y===xn||y===ys?B=s.DEPTH24_STENCIL8:y===tn?B=s.DEPTH32F_STENCIL8:y===vs&&(B=s.DEPTH24_STENCIL8,Se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===xn||y===ys?B=s.DEPTH_COMPONENT24:y===tn?B=s.DEPTH_COMPONENT32F:y===vs&&(B=s.DEPTH_COMPONENT16),B}function C(R,y){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tt&&R.minFilter!==Rt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function x(R){const y=R.target;y.removeEventListener("dispose",x),I(y),y.isVideoTexture&&h.delete(y)}function S(R){const y=R.target;y.removeEventListener("dispose",S),M(y)}function I(R){const y=n.get(R);if(y.__webglInit===void 0)return;const B=R.source,$=d.get(B);if($){const K=$[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&v(R),Object.keys($).length===0&&d.delete(B)}n.remove(R)}function v(R){const y=n.get(R);s.deleteTexture(y.__webglTexture);const B=R.source,$=d.get(B);delete $[y.__cacheKey],a.memory.textures--}function M(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let K=0;K<y.__webglFramebuffer[$].length;K++)s.deleteFramebuffer(y.__webglFramebuffer[$][K]);else s.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)s.deleteFramebuffer(y.__webglFramebuffer[$]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=R.textures;for(let $=0,K=B.length;$<K;$++){const X=n.get(B[$]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(B[$])}n.remove(R)}let T=0;function L(){T=0}function P(){const R=T;return R>=i.maxTextures&&Se("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),T+=1,R}function z(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function U(R,y){const B=n.get(R);if(R.isVideoTexture&&Ke(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const $=R.image;if($===null)Se("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Se("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,R,y);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+y)}function V(R,y){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Y(B,R,y);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+y)}function k(R,y){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Y(B,R,y);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+y)}function q(R,y){const B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){Z(B,R,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+y)}const ee={[Bi]:s.REPEAT,[pn]:s.CLAMP_TO_EDGE,[_r]:s.MIRRORED_REPEAT},te={[Tt]:s.NEAREST,[th]:s.NEAREST_MIPMAP_NEAREST,[fs]:s.NEAREST_MIPMAP_LINEAR,[Rt]:s.LINEAR,[or]:s.LINEAR_MIPMAP_NEAREST,[zn]:s.LINEAR_MIPMAP_LINEAR},ie={[ku]:s.NEVER,[Wu]:s.ALWAYS,[zu]:s.LESS,[Vo]:s.LEQUAL,[Vu]:s.EQUAL,[Ho]:s.GEQUAL,[Hu]:s.GREATER,[Gu]:s.NOTEQUAL};function Ne(R,y){if(y.type===tn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rt||y.magFilter===or||y.magFilter===fs||y.magFilter===zn||y.minFilter===Rt||y.minFilter===or||y.minFilter===fs||y.minFilter===zn)&&Se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ee[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ee[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ee[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,te[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,te[y.minFilter]),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Tt||y.minFilter!==fs&&y.minFilter!==zn||y.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Fe(R,y){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",x));const $=y.source;let K=d.get($);K===void 0&&(K={},d.set($,K));const X=z(y);if(X!==R.__cacheKey){K[X]===void 0&&(K[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[X].usedTimes++;const Me=K[R.__cacheKey];Me!==void 0&&(K[R.__cacheKey].usedTimes--,Me.usedTimes===0&&v(y)),R.__cacheKey=X,R.__webglTexture=K[X].texture}return B}function it(R,y,B){return Math.floor(Math.floor(R/B)/y)}function st(R,y,B,$){const X=R.updateRanges;if(X.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,B,$,y.data);else{X.sort((Q,oe)=>Q.start-oe.start);let Me=0;for(let Q=1;Q<X.length;Q++){const oe=X[Me],_e=X[Q],ye=oe.start+oe.count,ae=it(_e.start,y.width,4),ke=it(oe.start,y.width,4);_e.start<=ye+1&&ae===ke&&it(_e.start+_e.count-1,y.width,4)===ae?oe.count=Math.max(oe.count,_e.start+_e.count-oe.start):(++Me,X[Me]=_e)}X.length=Me+1;const re=s.getParameter(s.UNPACK_ROW_LENGTH),xe=s.getParameter(s.UNPACK_SKIP_PIXELS),Ie=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Q=0,oe=X.length;Q<oe;Q++){const _e=X[Q],ye=Math.floor(_e.start/4),ae=Math.ceil(_e.count/4),ke=ye%y.width,F=Math.floor(ye/y.width),ue=ae,ne=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,F),t.texSubImage2D(s.TEXTURE_2D,0,ke,F,ue,ne,B,$,y.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function Y(R,y,B){let $=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=s.TEXTURE_3D);const K=Fe(R,y),X=y.source;t.bindTexture($,R.__webglTexture,s.TEXTURE0+B);const Me=n.get(X);if(X.version!==Me.__version||K===!0){t.activeTexture(s.TEXTURE0+B);const re=Ye.getPrimaries(Ye.workingColorSpace),xe=y.colorSpace===Cn?null:Ye.getPrimaries(y.colorSpace),Ie=y.colorSpace===Cn||re===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Q=_(y.image,!1,i.maxTextureSize);Q=ot(y,Q);const oe=r.convert(y.format,y.colorSpace),_e=r.convert(y.type);let ye=A(y.internalFormat,oe,_e,y.colorSpace,y.isVideoTexture);Ne($,y);let ae;const ke=y.mipmaps,F=y.isVideoTexture!==!0,ue=Me.__version===void 0||K===!0,ne=X.dataReady,de=C(y,Q);if(y.isDepthTexture)ye=E(y.format===ri,y.type),ue&&(F?t.texStorage2D(s.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,ye,Q.width,Q.height,0,oe,_e,null));else if(y.isDataTexture)if(ke.length>0){F&&ue&&t.texStorage2D(s.TEXTURE_2D,de,ye,ke[0].width,ke[0].height);for(let J=0,j=ke.length;J<j;J++)ae=ke[J],F?ne&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ae.width,ae.height,oe,_e,ae.data):t.texImage2D(s.TEXTURE_2D,J,ye,ae.width,ae.height,0,oe,_e,ae.data);y.generateMipmaps=!1}else F?(ue&&t.texStorage2D(s.TEXTURE_2D,de,ye,Q.width,Q.height),ne&&st(y,Q,oe,_e)):t.texImage2D(s.TEXTURE_2D,0,ye,Q.width,Q.height,0,oe,_e,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){F&&ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,ye,ke[0].width,ke[0].height,Q.depth);for(let J=0,j=ke.length;J<j;J++)if(ae=ke[J],y.format!==jt)if(oe!==null)if(F){if(ne)if(y.layerUpdates.size>0){const se=ec(ae.width,ae.height,y.format,y.type);for(const Le of y.layerUpdates){const lt=ae.data.subarray(Le*se/ae.data.BYTES_PER_ELEMENT,(Le+1)*se/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,Le,ae.width,ae.height,1,oe,lt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,Q.depth,oe,ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,ye,ae.width,ae.height,Q.depth,0,ae.data,0,0);else Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,Q.depth,oe,_e,ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,ye,ae.width,ae.height,Q.depth,0,oe,_e,ae.data)}else{F&&ue&&t.texStorage2D(s.TEXTURE_2D,de,ye,ke[0].width,ke[0].height);for(let J=0,j=ke.length;J<j;J++)ae=ke[J],y.format!==jt?oe!==null?F?ne&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(s.TEXTURE_2D,J,ye,ae.width,ae.height,0,ae.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ne&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ae.width,ae.height,oe,_e,ae.data):t.texImage2D(s.TEXTURE_2D,J,ye,ae.width,ae.height,0,oe,_e,ae.data)}else if(y.isDataArrayTexture)if(F){if(ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,ye,Q.width,Q.height,Q.depth),ne)if(y.layerUpdates.size>0){const J=ec(Q.width,Q.height,y.format,y.type);for(const j of y.layerUpdates){const se=Q.data.subarray(j*J/Q.data.BYTES_PER_ELEMENT,(j+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,oe,_e,se)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,_e,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,oe,_e,Q.data);else if(y.isData3DTexture)F?(ue&&t.texStorage3D(s.TEXTURE_3D,de,ye,Q.width,Q.height,Q.depth),ne&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,_e,Q.data)):t.texImage3D(s.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,oe,_e,Q.data);else if(y.isFramebufferTexture){if(ue)if(F)t.texStorage2D(s.TEXTURE_2D,de,ye,Q.width,Q.height);else{let J=Q.width,j=Q.height;for(let se=0;se<de;se++)t.texImage2D(s.TEXTURE_2D,se,ye,J,j,0,oe,_e,null),J>>=1,j>>=1}}else if(ke.length>0){if(F&&ue){const J=ve(ke[0]);t.texStorage2D(s.TEXTURE_2D,de,ye,J.width,J.height)}for(let J=0,j=ke.length;J<j;J++)ae=ke[J],F?ne&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,oe,_e,ae):t.texImage2D(s.TEXTURE_2D,J,ye,oe,_e,ae);y.generateMipmaps=!1}else if(F){if(ue){const J=ve(Q);t.texStorage2D(s.TEXTURE_2D,de,ye,J.width,J.height)}ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe,_e,Q)}else t.texImage2D(s.TEXTURE_2D,0,ye,oe,_e,Q);f(y)&&m($),Me.__version=X.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Z(R,y,B){if(y.image.length!==6)return;const $=Fe(R,y),K=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+B);const X=n.get(K);if(K.version!==X.__version||$===!0){t.activeTexture(s.TEXTURE0+B);const Me=Ye.getPrimaries(Ye.workingColorSpace),re=y.colorSpace===Cn?null:Ye.getPrimaries(y.colorSpace),xe=y.colorSpace===Cn||Me===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ie=y.isCompressedTexture||y.image[0].isCompressedTexture,Q=y.image[0]&&y.image[0].isDataTexture,oe=[];for(let j=0;j<6;j++)!Ie&&!Q?oe[j]=_(y.image[j],!0,i.maxCubemapSize):oe[j]=Q?y.image[j].image:y.image[j],oe[j]=ot(y,oe[j]);const _e=oe[0],ye=r.convert(y.format,y.colorSpace),ae=r.convert(y.type),ke=A(y.internalFormat,ye,ae,y.colorSpace),F=y.isVideoTexture!==!0,ue=X.__version===void 0||$===!0,ne=K.dataReady;let de=C(y,_e);Ne(s.TEXTURE_CUBE_MAP,y);let J;if(Ie){F&&ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,ke,_e.width,_e.height);for(let j=0;j<6;j++){J=oe[j].mipmaps;for(let se=0;se<J.length;se++){const Le=J[se];y.format!==jt?ye!==null?F?ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,se,0,0,Le.width,Le.height,ye,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,se,ke,Le.width,Le.height,0,Le.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,se,0,0,Le.width,Le.height,ye,ae,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,se,ke,Le.width,Le.height,0,ye,ae,Le.data)}}}else{if(J=y.mipmaps,F&&ue){J.length>0&&de++;const j=ve(oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,ke,j.width,j.height)}for(let j=0;j<6;j++)if(Q){F?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,oe[j].width,oe[j].height,ye,ae,oe[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,oe[j].width,oe[j].height,0,ye,ae,oe[j].data);for(let se=0;se<J.length;se++){const lt=J[se].image[j].image;F?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,se+1,0,0,lt.width,lt.height,ye,ae,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,se+1,ke,lt.width,lt.height,0,ye,ae,lt.data)}}else{F?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ye,ae,oe[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,ye,ae,oe[j]);for(let se=0;se<J.length;se++){const Le=J[se];F?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,se+1,0,0,ye,ae,Le.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,se+1,ke,ye,ae,Le.image[j])}}}f(y)&&m(s.TEXTURE_CUBE_MAP),X.__version=K.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function pe(R,y,B,$,K,X){const Me=r.convert(B.format,B.colorSpace),re=r.convert(B.type),xe=A(B.internalFormat,Me,re,B.colorSpace),Ie=n.get(y),Q=n.get(B);if(Q.__renderTarget=y,!Ie.__hasExternalTextures){const oe=Math.max(1,y.width>>X),_e=Math.max(1,y.height>>X);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,X,xe,oe,_e,y.depth,0,Me,re,null):t.texImage2D(K,X,xe,oe,_e,0,Me,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),_t(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,K,Q.__webglTexture,0,D(y)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,K,Q.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(R,y,B){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer){const $=y.depthTexture,K=$&&$.isDepthTexture?$.type:null,X=E(y.stencilBuffer,K),Me=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_t(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(y),X,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(y),X,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,X,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,R)}else{const $=y.textures;for(let K=0;K<$.length;K++){const X=$[K],Me=r.convert(X.format,X.colorSpace),re=r.convert(X.type),xe=A(X.internalFormat,Me,re,X.colorSpace);_t(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(y),xe,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(y),xe,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,xe,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(R,y,B){const $=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(y.depthTexture);if(K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$){if(K.__webglInit===void 0&&(K.__webglInit=!0,y.depthTexture.addEventListener("dispose",x)),K.__webglTexture===void 0){K.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,y.depthTexture);const Ie=r.convert(y.depthTexture.format),Q=r.convert(y.depthTexture.type);let oe;y.depthTexture.format===Ln?oe=s.DEPTH_COMPONENT24:y.depthTexture.format===ri&&(oe=s.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,y.width,y.height,0,Ie,Q,null)}}else U(y.depthTexture,0);const X=K.__webglTexture,Me=D(y),re=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,xe=y.depthTexture.format===ri?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ln)_t(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,re,X,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,xe,re,X,0);else if(y.depthTexture.format===ri)_t(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,re,X,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,xe,re,X,0);else throw new Error("Unknown depthTexture format")}function We(R){const y=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=$}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let $=0;$<6;$++)ge(y.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?ge(y.__webglFramebuffer[0],R,0):ge(y.__webglFramebuffer,R,0)}else if(B){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=s.createRenderbuffer(),De(y.__webglDepthbuffer[$],R,!1);else{const K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,X)}}else{const $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),De(y.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,X)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(R,y,B){const $=n.get(R);y!==void 0&&pe($.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&We(R)}function Xe(R){const y=R.texture,B=n.get(R),$=n.get(y);R.addEventListener("dispose",S);const K=R.textures,X=R.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=y.version,a.memory.textures++),X){B.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[re]=[];for(let xe=0;xe<y.mipmaps.length;xe++)B.__webglFramebuffer[re][xe]=s.createFramebuffer()}else B.__webglFramebuffer[re]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)B.__webglFramebuffer[re]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Me)for(let re=0,xe=K.length;re<xe;re++){const Ie=n.get(K[re]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&_t(R)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const xe=K[re];B.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[re]);const Ie=r.convert(xe.format,xe.colorSpace),Q=r.convert(xe.type),oe=A(xe.internalFormat,Ie,Q,xe.colorSpace,R.isXRRenderTarget===!0),_e=D(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,oe,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,B.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),De(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)pe(B.__webglFramebuffer[re][xe],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe);else pe(B.__webglFramebuffer[re],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);f(y)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let re=0,xe=K.length;re<xe;re++){const Ie=K[re],Q=n.get(Ie);let oe=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,Q.__webglTexture),Ne(oe,Ie),pe(B.__webglFramebuffer,R,Ie,s.COLOR_ATTACHMENT0+re,oe,0),f(Ie)&&m(oe)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),Ne(re,y),y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)pe(B.__webglFramebuffer[xe],R,y,s.COLOR_ATTACHMENT0,re,xe);else pe(B.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,re,0);f(y)&&m(re),t.unbindTexture()}R.depthBuffer&&We(R)}function Ze(R){const y=R.textures;for(let B=0,$=y.length;B<$;B++){const K=y[B];if(f(K)){const X=b(R),Me=n.get(K).__webglTexture;t.bindTexture(X,Me),m(X),t.unbindTexture()}}}const rt=[],Oe=[];function gt(R){if(R.samples>0){if(_t(R)===!1){const y=R.textures,B=R.width,$=R.height;let K=s.COLOR_BUFFER_BIT;const X=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(R),re=y.length>1;if(re)for(let Ie=0;Ie<y.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const xe=R.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ie=0;Ie<y.length;Ie++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Ie]);const Q=n.get(y[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,B,$,0,0,B,$,K,s.NEAREST),l===!0&&(rt.length=0,Oe.length=0,rt.push(s.COLOR_ATTACHMENT0+Ie),R.depthBuffer&&R.resolveDepthBuffer===!1&&(rt.push(X),Oe.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Oe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let Ie=0;Ie<y.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Ie]);const Q=n.get(y[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,Q,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function D(R){return Math.min(i.maxSamples,R.samples)}function _t(R){const y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ke(R){const y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function ot(R,y){const B=R.colorSpace,$=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==ki&&B!==Cn&&(Ye.getTransfer(B)===et?($!==jt||K!==Yt)&&Se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",B)),y}function ve(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=L,this.setTexture2D=U,this.setTexture2DArray=V,this.setTexture3D=k,this.setTextureCube=q,this.rebindTextures=Et,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function s_(s,e){function t(n,i=Cn){let r;const a=Ye.getTransfer(i);if(n===Yt)return s.UNSIGNED_BYTE;if(n===Uo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===sh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===nh)return s.BYTE;if(n===ih)return s.SHORT;if(n===vs)return s.UNSIGNED_SHORT;if(n===Do)return s.INT;if(n===xn)return s.UNSIGNED_INT;if(n===tn)return s.FLOAT;if(n===In)return s.HALF_FLOAT;if(n===ah)return s.ALPHA;if(n===oh)return s.RGB;if(n===jt)return s.RGBA;if(n===Ln)return s.DEPTH_COMPONENT;if(n===ri)return s.DEPTH_STENCIL;if(n===No)return s.RED;if(n===Bo)return s.RED_INTEGER;if(n===Oi)return s.RG;if(n===Oo)return s.RG_INTEGER;if(n===ko)return s.RGBA_INTEGER;if(n===lr||n===cr||n===hr||n===ur)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Ya||n===ja||n===Ka)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ja||n===Qa||n===eo||n===to||n===no||n===io)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ja)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===eo)return r.COMPRESSED_R11_EAC;if(n===to)return r.COMPRESSED_SIGNED_R11_EAC;if(n===no)return r.COMPRESSED_RG11_EAC;if(n===io)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===so)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ro)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ao)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===co)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ho)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===po)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===go)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_o)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===yo||n===Mo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vo)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bo||n===So||n===Eo||n===wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const r_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class o_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new yh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ln({vertexShader:r_,fragmentShader:a_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l_ extends Wn{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",f=new o_,m={},b=t.getContextAttributes();let A=null,E=null;const C=[],x=[],S=new Pe;let I=null;const v=new Gt;v.viewport=new ht;const M=new Gt;M.viewport=new ht;const T=[v,M],L=new rf;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=C[Y];return Z===void 0&&(Z=new fa,C[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=C[Y];return Z===void 0&&(Z=new fa,C[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=C[Y];return Z===void 0&&(Z=new fa,C[Y]=Z),Z.getHandSpace()};function U(Y){const Z=x.indexOf(Y.inputSource);if(Z===-1)return;const pe=C[Z];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,c||a),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",k);for(let Y=0;Y<C.length;Y++){const Z=x[Y];Z!==null&&(x[Y]=null,C[Y].disconnect(Z))}P=null,z=null,f.reset();for(const Y in m)delete m[Y];e.setRenderTarget(A),p=null,d=null,u=null,i=null,E=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",V),i.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(S),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,De=null,ge=null;b.depth&&(ge=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=b.stencil?ri:Ln,De=b.stencil?ys:xn);const We={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(We),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new _n(d.textureWidth,d.textureHeight,{format:jt,type:Yt,depthTexture:new Ts(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new _n(p.framebufferWidth,p.framebufferHeight,{format:jt,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function k(Y){for(let Z=0;Z<Y.removed.length;Z++){const pe=Y.removed[Z],De=x.indexOf(pe);De>=0&&(x[De]=null,C[De].disconnect(pe))}for(let Z=0;Z<Y.added.length;Z++){const pe=Y.added[Z];let De=x.indexOf(pe);if(De===-1){for(let We=0;We<C.length;We++)if(We>=x.length){x.push(pe),De=We;break}else if(x[We]===null){x[We]=pe,De=We;break}if(De===-1)break}const ge=C[De];ge&&ge.connect(pe)}}const q=new N,ee=new N;function te(Y,Z,pe){q.setFromMatrixPosition(Z.matrixWorld),ee.setFromMatrixPosition(pe.matrixWorld);const De=q.distanceTo(ee),ge=Z.projectionMatrix.elements,We=pe.projectionMatrix.elements,Et=ge[14]/(ge[10]-1),Xe=ge[14]/(ge[10]+1),Ze=(ge[9]+1)/ge[5],rt=(ge[9]-1)/ge[5],Oe=(ge[8]-1)/ge[0],gt=(We[8]+1)/We[0],D=Et*Oe,_t=Et*gt,Ke=De/(-Oe+gt),ot=Ke*-Oe;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ot),Y.translateZ(Ke),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ge[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ve=Et+Ke,R=Xe+Ke,y=D-ot,B=_t+(De-ot),$=Ze*Xe/R*ve,K=rt*Xe/R*ve;Y.projectionMatrix.makePerspective(y,B,$,K,ve,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ie(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Z=Y.near,pe=Y.far;f.texture!==null&&(f.depthNear>0&&(Z=f.depthNear),f.depthFar>0&&(pe=f.depthFar)),L.near=M.near=v.near=Z,L.far=M.far=v.far=pe,(P!==L.near||z!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,z=L.far),L.layers.mask=Y.layers.mask|6,v.layers.mask=L.layers.mask&3,M.layers.mask=L.layers.mask&5;const De=Y.parent,ge=L.cameras;ie(L,De);for(let We=0;We<ge.length;We++)ie(ge[We],De);ge.length===2?te(L,v,M):L.projectionMatrix.copy(v.projectionMatrix),Ne(Y,L,De)};function Ne(Y,Z,pe){pe===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Es*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(L)},this.getCameraTexture=function(Y){return m[Y]};let Fe=null;function it(Y,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let De=!1;pe.length!==L.cameras.length&&(L.cameras.length=0,De=!0);for(let Xe=0;Xe<pe.length;Xe++){const Ze=pe[Xe];let rt=null;if(p!==null)rt=p.getViewport(Ze);else{const gt=u.getViewSubImage(d,Ze);rt=gt.viewport,Xe===0&&(e.setRenderTargetTextures(E,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(E))}let Oe=T[Xe];Oe===void 0&&(Oe=new Gt,Oe.layers.enable(Xe),Oe.viewport=new ht,T[Xe]=Oe),Oe.matrix.fromArray(Ze.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ze.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(rt.x,rt.y,rt.width,rt.height),Xe===0&&(L.matrix.copy(Oe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),De===!0&&L.cameras.push(Oe)}const ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Xe=u.getDepthInformation(pe[0]);Xe&&Xe.isValid&&Xe.texture&&f.init(Xe,i.renderState)}if(ge&&ge.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Xe=0;Xe<pe.length;Xe++){const Ze=pe[Xe].camera;if(Ze){let rt=m[Ze];rt||(rt=new yh,m[Ze]=rt);const Oe=u.getCameraImage(Ze);rt.sourceTexture=Oe}}}}for(let pe=0;pe<C.length;pe++){const De=x[pe],ge=C[pe];De!==null&&ge!==void 0&&ge.update(De,Z,c||a)}Fe&&Fe(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const st=new Uh;st.setAnimationLoop(it),this.setAnimationLoop=function(Y){Fe=Y},this.dispose=function(){}}}const ti=new nn,c_=new ze;function h_(s,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,mh(s)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,b,A,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),u(f,m)):m.isMeshPhongMaterial?(r(f,m),h(f,m)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,E)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),_(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,b,A):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Ot&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Ot&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const b=e.get(m),A=b.envMap,E=b.envMapRotation;A&&(f.envMap.value=A,ti.copy(E),ti.x*=-1,ti.y*=-1,ti.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),f.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(ti)),f.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,b,A){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*b,f.scale.value=A*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,b){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ot&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function _(f,m){const b=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function u_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){const E=A.program;n.uniformBlockBinding(b,E)}function c(b,A){let E=i[b.id];E===void 0&&(g(b),E=h(b),i[b.id]=E,b.addEventListener("dispose",f));const C=A.program;n.updateUBOMapping(b,C);const x=e.render.frame;r[b.id]!==x&&(d(b),r[b.id]=x)}function h(b){const A=u();b.__bindingPointIndex=A;const E=s.createBuffer(),C=b.__size,x=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,E),E}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const A=i[b.id],E=b.uniforms,C=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let x=0,S=E.length;x<S;x++){const I=Array.isArray(E[x])?E[x]:[E[x]];for(let v=0,M=I.length;v<M;v++){const T=I[v];if(p(T,x,v,C)===!0){const L=T.__offset,P=Array.isArray(T.value)?T.value:[T.value];let z=0;for(let U=0;U<P.length;U++){const V=P[U],k=_(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,L+z,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,z),z+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,A,E,C){const x=b.value,S=A+"_"+E;if(C[S]===void 0)return typeof x=="number"||typeof x=="boolean"?C[S]=x:C[S]=x.clone(),!0;{const I=C[S];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return C[S]=x,!0}else if(I.equals(x)===!1)return I.copy(x),!0}return!1}function g(b){const A=b.uniforms;let E=0;const C=16;for(let S=0,I=A.length;S<I;S++){const v=Array.isArray(A[S])?A[S]:[A[S]];for(let M=0,T=v.length;M<T;M++){const L=v[M],P=Array.isArray(L.value)?L.value:[L.value];for(let z=0,U=P.length;z<U;z++){const V=P[z],k=_(V),q=E%C,ee=q%k.boundary,te=q+ee;E+=ee,te!==0&&C-te<k.storage&&(E+=C-te),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=k.storage}}}const x=E%C;return x>0&&(E+=C-x),b.__size=E,b.__cache={},this}function _(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?Se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Se("WebGLRenderer: Unsupported uniform value type.",b),A}function f(b){const A=b.target;A.removeEventListener("dispose",f);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function m(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}const d_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let un=null;function f_(){return un===null&&(un=new Xo(d_,16,16,Oi,In),un.name="DFG_LUT",un.minFilter=Rt,un.magFilter=Rt,un.wrapS=pn,un.wrapT=pn,un.generateMipmaps=!1,un.needsUpdate=!0),un}class kh{constructor(e={}){const{canvas:t=qu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Yt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=p,f=new Set([ko,Oo,Bo]),m=new Set([Yt,xn,vs,ys,Uo,Fo]),b=new Uint32Array(4),A=new Int32Array(4);let E=null,C=null;const x=[],S=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let M=!1;this._outputColorSpace=At;let T=0,L=0,P=null,z=-1,U=null;const V=new ht,k=new ht;let q=null;const ee=new Te(0);let te=0,ie=t.width,Ne=t.height,Fe=1,it=null,st=null;const Y=new ht(0,0,ie,Ne),Z=new ht(0,0,ie,Ne);let pe=!1;const De=new $o;let ge=!1,We=!1;const Et=new ze,Xe=new N,Ze=new ht,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function gt(){return P===null?Fe:1}let D=n;function _t(w,O){return t.getContext(w,O)}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ir}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Je,!1),D===null){const O="webgl2";if(D=_t(O,w),D===null)throw _t(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Re("WebGLRenderer: "+w.message),w}let Ke,ot,ve,R,y,B,$,K,X,Me,re,xe,Ie,Q,oe,_e,ye,ae,ke,F,ue,ne,de,J;function j(){Ke=new fg(D),Ke.init(),ne=new s_(D,Ke),ot=new sg(D,Ke,e,ne),ve=new n_(D,Ke),ot.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),R=new gg(D),y=new V0,B=new i_(D,Ke,ve,y,ot,ne,R),$=new ag(v),K=new dg(v),X=new yf(D),de=new ng(D,X),Me=new pg(D,X,R,de),re=new xg(D,Me,X,R),ke=new _g(D,ot,B),_e=new rg(y),xe=new z0(v,$,K,Ke,ot,de,_e),Ie=new h_(v,y),Q=new G0,oe=new j0(Ke),ae=new tg(v,$,K,ve,re,g,l),ye=new e_(v,re,ot),J=new u_(D,R,ot,ve),F=new ig(D,Ke,R),ue=new mg(D,Ke,R),R.programs=xe.programs,v.capabilities=ot,v.extensions=Ke,v.properties=y,v.renderLists=Q,v.shadowMap=ye,v.state=ve,v.info=R}j(),_!==Yt&&(I=new yg(_,t.width,t.height,i,r));const se=new l_(v,D);this.xr=se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(w){w!==void 0&&(Fe=w,this.setSize(ie,Ne,!1))},this.getSize=function(w){return w.set(ie,Ne)},this.setSize=function(w,O,W=!0){if(se.isPresenting){Se("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=w,Ne=O,t.width=Math.floor(w*Fe),t.height=Math.floor(O*Fe),W===!0&&(t.style.width=w+"px",t.style.height=O+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(ie*Fe,Ne*Fe).floor()},this.setDrawingBufferSize=function(w,O,W){ie=w,Ne=O,Fe=W,t.width=Math.floor(w*W),t.height=Math.floor(O*W),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(_===Yt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,O,W,G){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,O,W,G),ve.viewport(V.copy(Y).multiplyScalar(Fe).round())},this.getScissor=function(w){return w.copy(Z)},this.setScissor=function(w,O,W,G){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,O,W,G),ve.scissor(k.copy(Z).multiplyScalar(Fe).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(w){ve.setScissorTest(pe=w)},this.setOpaqueSort=function(w){it=w},this.setTransparentSort=function(w){st=w},this.getClearColor=function(w){return w.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,W=!0){let G=0;if(w){let H=!1;if(P!==null){const le=P.texture.format;H=f.has(le)}if(H){const le=P.texture.type,fe=m.has(le),he=ae.getClearColor(),me=ae.getClearAlpha(),be=he.r,Ce=he.g,Ee=he.b;fe?(b[0]=be,b[1]=Ce,b[2]=Ee,b[3]=me,D.clearBufferuiv(D.COLOR,0,b)):(A[0]=be,A[1]=Ce,A[2]=Ee,A[3]=me,D.clearBufferiv(D.COLOR,0,A))}else G|=D.COLOR_BUFFER_BIT}O&&(G|=D.DEPTH_BUFFER_BIT),W&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),ae.dispose(),Q.dispose(),oe.dispose(),y.dispose(),$.dispose(),K.dispose(),re.dispose(),de.dispose(),J.dispose(),xe.dispose(),se.dispose(),se.removeEventListener("sessionstart",il),se.removeEventListener("sessionend",sl),Yn.stop()};function Le(w){w.preventDefault(),xl("WebGLRenderer: Context Lost."),M=!0}function lt(){xl("WebGLRenderer: Context Restored."),M=!1;const w=R.autoReset,O=ye.enabled,W=ye.autoUpdate,G=ye.needsUpdate,H=ye.type;j(),R.autoReset=w,ye.enabled=O,ye.autoUpdate=W,ye.needsUpdate=G,ye.type=H}function Je(w){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function hn(w){const O=w.target;O.removeEventListener("dispose",hn),vn(O)}function vn(w){eu(w),y.remove(w)}function eu(w){const O=y.get(w).programs;O!==void 0&&(O.forEach(function(W){xe.releaseProgram(W)}),w.isShaderMaterial&&xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,W,G,H,le){O===null&&(O=rt);const fe=H.isMesh&&H.matrixWorld.determinant()<0,he=nu(w,O,W,G,H);ve.setMaterial(G,fe);let me=W.index,be=1;if(G.wireframe===!0){if(me=Me.getWireframeAttribute(W),me===void 0)return;be=2}const Ce=W.drawRange,Ee=W.attributes.position;let Ve=Ce.start*be,tt=(Ce.start+Ce.count)*be;le!==null&&(Ve=Math.max(Ve,le.start*be),tt=Math.min(tt,(le.start+le.count)*be)),me!==null?(Ve=Math.max(Ve,0),tt=Math.min(tt,me.count)):Ee!=null&&(Ve=Math.max(Ve,0),tt=Math.min(tt,Ee.count));const dt=tt-Ve;if(dt<0||dt===1/0)return;de.setup(H,G,he,W,me);let ft,at=F;if(me!==null&&(ft=X.get(me),at=ue,at.setIndex(ft)),H.isMesh)G.wireframe===!0?(ve.setLineWidth(G.wireframeLinewidth*gt()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(H.isLine){let we=G.linewidth;we===void 0&&(we=1),ve.setLineWidth(we*gt()),H.isLineSegments?at.setMode(D.LINES):H.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else H.isPoints?at.setMode(D.POINTS):H.isSprite&&at.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ss("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))at.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const we=H._multiDrawStarts,Qe=H._multiDrawCounts,je=H._multiDrawCount,Wt=me?X.get(me).bytesPerElement:1,ci=y.get(G).currentProgram.getUniforms();for(let Xt=0;Xt<je;Xt++)ci.setValue(D,"_gl_DrawID",Xt),at.render(we[Xt]/Wt,Qe[Xt])}else if(H.isInstancedMesh)at.renderInstances(Ve,dt,H.count);else if(W.isInstancedBufferGeometry){const we=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Qe=Math.min(W.instanceCount,we);at.renderInstances(Ve,dt,Qe)}else at.render(Ve,dt)};function nl(w,O,W){w.transparent===!0&&w.side===en&&w.forceSinglePass===!1?(w.side=Ot,w.needsUpdate=!0,Ls(w,O,W),w.side=Gn,w.needsUpdate=!0,Ls(w,O,W),w.side=en):Ls(w,O,W)}this.compile=function(w,O,W=null){W===null&&(W=w),C=oe.get(W),C.init(O),S.push(C),W.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(C.pushLight(H),H.castShadow&&C.pushShadow(H))}),w!==W&&w.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(C.pushLight(H),H.castShadow&&C.pushShadow(H))}),C.setupLights();const G=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const le=H.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){const he=le[fe];nl(he,W,H),G.add(he)}else nl(le,W,H),G.add(le)}),C=S.pop(),G},this.compileAsync=function(w,O,W=null){const G=this.compile(w,O,W);return new Promise(H=>{function le(){if(G.forEach(function(fe){y.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){H(w);return}setTimeout(le,10)}Ke.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Gr=null;function tu(w){Gr&&Gr(w)}function il(){Yn.stop()}function sl(){Yn.start()}const Yn=new Uh;Yn.setAnimationLoop(tu),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(w){Gr=w,se.setAnimationLoop(w),w===null?Yn.stop():Yn.start()},se.addEventListener("sessionstart",il),se.addEventListener("sessionend",sl),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const W=se.enabled===!0&&se.isPresenting===!0,G=I!==null&&(P===null||W)&&I.begin(v,P);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(O),O=se.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,P),C=oe.get(w,S.length),C.init(O),S.push(C),Et.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),De.setFromProjectionMatrix(Et,mn,O.reversedDepth),We=this.localClippingEnabled,ge=_e.init(this.clippingPlanes,We),E=Q.get(w,x.length),E.init(),x.push(E),se.enabled===!0&&se.isPresenting===!0){const fe=v.xr.getDepthSensingMesh();fe!==null&&Wr(fe,O,-1/0,v.sortObjects)}Wr(w,O,0,v.sortObjects),E.finish(),v.sortObjects===!0&&E.sort(it,st),Oe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Oe&&ae.addToRenderList(E,w),this.info.render.frame++,ge===!0&&_e.beginShadows();const H=C.state.shadowsArray;if(ye.render(H,w,O),ge===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&I.hasRenderPass())===!1){const fe=E.opaque,he=E.transmissive;if(C.setupLights(),O.isArrayCamera){const me=O.cameras;if(he.length>0)for(let be=0,Ce=me.length;be<Ce;be++){const Ee=me[be];al(fe,he,w,Ee)}Oe&&ae.render(w);for(let be=0,Ce=me.length;be<Ce;be++){const Ee=me[be];rl(E,w,Ee,Ee.viewport)}}else he.length>0&&al(fe,he,w,O),Oe&&ae.render(w),rl(E,w,O)}P!==null&&L===0&&(B.updateMultisampleRenderTarget(P),B.updateRenderTargetMipmap(P)),G&&I.end(v),w.isScene===!0&&w.onAfterRender(v,w,O),de.resetDefaultState(),z=-1,U=null,S.pop(),S.length>0?(C=S[S.length-1],ge===!0&&_e.setGlobalState(v.clippingPlanes,C.state.camera)):C=null,x.pop(),x.length>0?E=x[x.length-1]:E=null};function Wr(w,O,W,G){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)C.pushLight(w),w.castShadow&&C.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||De.intersectsSprite(w)){G&&Ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Et);const fe=re.update(w),he=w.material;he.visible&&E.push(w,fe,he,W,Ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||De.intersectsObject(w))){const fe=re.update(w),he=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ze.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ze.copy(fe.boundingSphere.center)),Ze.applyMatrix4(w.matrixWorld).applyMatrix4(Et)),Array.isArray(he)){const me=fe.groups;for(let be=0,Ce=me.length;be<Ce;be++){const Ee=me[be],Ve=he[Ee.materialIndex];Ve&&Ve.visible&&E.push(w,fe,Ve,W,Ze.z,Ee)}}else he.visible&&E.push(w,fe,he,W,Ze.z,null)}}const le=w.children;for(let fe=0,he=le.length;fe<he;fe++)Wr(le[fe],O,W,G)}function rl(w,O,W,G){const{opaque:H,transmissive:le,transparent:fe}=w;C.setupLightsView(W),ge===!0&&_e.setGlobalState(v.clippingPlanes,W),G&&ve.viewport(V.copy(G)),H.length>0&&Is(H,O,W),le.length>0&&Is(le,O,W),fe.length>0&&Is(fe,O,W),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function al(w,O,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[G.id]===void 0){const Ve=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[G.id]=new _n(1,1,{generateMipmaps:!0,type:Ve?In:Yt,minFilter:zn,samples:ot.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const le=C.state.transmissionRenderTarget[G.id],fe=G.viewport||V;le.setSize(fe.z*v.transmissionResolutionScale,fe.w*v.transmissionResolutionScale);const he=v.getRenderTarget(),me=v.getActiveCubeFace(),be=v.getActiveMipmapLevel();v.setRenderTarget(le),v.getClearColor(ee),te=v.getClearAlpha(),te<1&&v.setClearColor(16777215,.5),v.clear(),Oe&&ae.render(W);const Ce=v.toneMapping;v.toneMapping=gn;const Ee=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),C.setupLightsView(G),ge===!0&&_e.setGlobalState(v.clippingPlanes,G),Is(w,W,G),B.updateMultisampleRenderTarget(le),B.updateRenderTargetMipmap(le),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let tt=0,dt=O.length;tt<dt;tt++){const ft=O[tt],{object:at,geometry:we,material:Qe,group:je}=ft;if(Qe.side===en&&at.layers.test(G.layers)){const Wt=Qe.side;Qe.side=Ot,Qe.needsUpdate=!0,ol(at,W,G,we,Qe,je),Qe.side=Wt,Qe.needsUpdate=!0,Ve=!0}}Ve===!0&&(B.updateMultisampleRenderTarget(le),B.updateRenderTargetMipmap(le))}v.setRenderTarget(he,me,be),v.setClearColor(ee,te),Ee!==void 0&&(G.viewport=Ee),v.toneMapping=Ce}function Is(w,O,W){const G=O.isScene===!0?O.overrideMaterial:null;for(let H=0,le=w.length;H<le;H++){const fe=w[H],{object:he,geometry:me,group:be}=fe;let Ce=fe.material;Ce.allowOverride===!0&&G!==null&&(Ce=G),he.layers.test(W.layers)&&ol(he,O,W,me,Ce,be)}}function ol(w,O,W,G,H,le){w.onBeforeRender(v,O,W,G,H,le),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(v,O,W,G,w,le),H.transparent===!0&&H.side===en&&H.forceSinglePass===!1?(H.side=Ot,H.needsUpdate=!0,v.renderBufferDirect(W,O,G,H,w,le),H.side=Gn,H.needsUpdate=!0,v.renderBufferDirect(W,O,G,H,w,le),H.side=en):v.renderBufferDirect(W,O,G,H,w,le),w.onAfterRender(v,O,W,G,H,le)}function Ls(w,O,W){O.isScene!==!0&&(O=rt);const G=y.get(w),H=C.state.lights,le=C.state.shadowsArray,fe=H.state.version,he=xe.getParameters(w,H.state,le,O,W),me=xe.getProgramCacheKey(he);let be=G.programs;G.environment=w.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(w.isMeshStandardMaterial?K:$).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,be===void 0&&(w.addEventListener("dispose",hn),be=new Map,G.programs=be);let Ce=be.get(me);if(Ce!==void 0){if(G.currentProgram===Ce&&G.lightsStateVersion===fe)return cl(w,he),Ce}else he.uniforms=xe.getUniforms(w),w.onBeforeCompile(he,v),Ce=xe.acquireProgram(he,me),be.set(me,Ce),G.uniforms=he.uniforms;const Ee=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ee.clippingPlanes=_e.uniform),cl(w,he),G.needsLights=su(w),G.lightsStateVersion=fe,G.needsLights&&(Ee.ambientLightColor.value=H.state.ambient,Ee.lightProbe.value=H.state.probe,Ee.directionalLights.value=H.state.directional,Ee.directionalLightShadows.value=H.state.directionalShadow,Ee.spotLights.value=H.state.spot,Ee.spotLightShadows.value=H.state.spotShadow,Ee.rectAreaLights.value=H.state.rectArea,Ee.ltc_1.value=H.state.rectAreaLTC1,Ee.ltc_2.value=H.state.rectAreaLTC2,Ee.pointLights.value=H.state.point,Ee.pointLightShadows.value=H.state.pointShadow,Ee.hemisphereLights.value=H.state.hemi,Ee.directionalShadowMap.value=H.state.directionalShadowMap,Ee.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ee.spotShadowMap.value=H.state.spotShadowMap,Ee.spotLightMatrix.value=H.state.spotLightMatrix,Ee.spotLightMap.value=H.state.spotLightMap,Ee.pointShadowMap.value=H.state.pointShadowMap,Ee.pointShadowMatrix.value=H.state.pointShadowMatrix),G.currentProgram=Ce,G.uniformsList=null,Ce}function ll(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=dr.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function cl(w,O){const W=y.get(w);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function nu(w,O,W,G,H){O.isScene!==!0&&(O=rt),B.resetTextureUnits();const le=O.fog,fe=G.isMeshStandardMaterial?O.environment:null,he=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ki,me=(G.isMeshStandardMaterial?K:$).get(G.envMap||fe),be=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ce=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ee=!!W.morphAttributes.position,Ve=!!W.morphAttributes.normal,tt=!!W.morphAttributes.color;let dt=gn;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(dt=v.toneMapping);const ft=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,at=ft!==void 0?ft.length:0,we=y.get(G),Qe=C.state.lights;if(ge===!0&&(We===!0||w!==U)){const Ft=w===U&&G.id===z;_e.setState(G,w,Ft)}let je=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Qe.state.version||we.outputColorSpace!==he||H.isBatchedMesh&&we.batching===!1||!H.isBatchedMesh&&we.batching===!0||H.isBatchedMesh&&we.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&we.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&we.instancing===!1||!H.isInstancedMesh&&we.instancing===!0||H.isSkinnedMesh&&we.skinning===!1||!H.isSkinnedMesh&&we.skinning===!0||H.isInstancedMesh&&we.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&we.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&we.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&we.instancingMorph===!1&&H.morphTexture!==null||we.envMap!==me||G.fog===!0&&we.fog!==le||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==_e.numPlanes||we.numIntersection!==_e.numIntersection)||we.vertexAlphas!==be||we.vertexTangents!==Ce||we.morphTargets!==Ee||we.morphNormals!==Ve||we.morphColors!==tt||we.toneMapping!==dt||we.morphTargetsCount!==at)&&(je=!0):(je=!0,we.__version=G.version);let Wt=we.currentProgram;je===!0&&(Wt=Ls(G,O,H));let ci=!1,Xt=!1,qi=!1;const ct=Wt.getUniforms(),kt=we.uniforms;if(ve.useProgram(Wt.program)&&(ci=!0,Xt=!0,qi=!0),G.id!==z&&(z=G.id,Xt=!0),ci||U!==w){ve.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ct.setValue(D,"projectionMatrix",w.projectionMatrix),ct.setValue(D,"viewMatrix",w.matrixWorldInverse);const zt=ct.map.cameraPosition;zt!==void 0&&zt.setValue(D,Xe.setFromMatrixPosition(w.matrixWorld)),ot.logarithmicDepthBuffer&&ct.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ct.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),U!==w&&(U=w,Xt=!0,qi=!0)}if(we.needsLights&&(Qe.state.directionalShadowMap.length>0&&ct.setValue(D,"directionalShadowMap",Qe.state.directionalShadowMap,B),Qe.state.spotShadowMap.length>0&&ct.setValue(D,"spotShadowMap",Qe.state.spotShadowMap,B),Qe.state.pointShadowMap.length>0&&ct.setValue(D,"pointShadowMap",Qe.state.pointShadowMap,B)),H.isSkinnedMesh){ct.setOptional(D,H,"bindMatrix"),ct.setOptional(D,H,"bindMatrixInverse");const Ft=H.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ct.setValue(D,"boneTexture",Ft.boneTexture,B))}H.isBatchedMesh&&(ct.setOptional(D,H,"batchingTexture"),ct.setValue(D,"batchingTexture",H._matricesTexture,B),ct.setOptional(D,H,"batchingIdTexture"),ct.setValue(D,"batchingIdTexture",H._indirectTexture,B),ct.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&ct.setValue(D,"batchingColorTexture",H._colorsTexture,B));const Jt=W.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&ke.update(H,W,Wt),(Xt||we.receiveShadow!==H.receiveShadow)&&(we.receiveShadow=H.receiveShadow,ct.setValue(D,"receiveShadow",H.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(kt.envMap.value=me,kt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(kt.envMapIntensity.value=O.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=f_()),Xt&&(ct.setValue(D,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&iu(kt,qi),le&&G.fog===!0&&Ie.refreshFogUniforms(kt,le),Ie.refreshMaterialUniforms(kt,G,Fe,Ne,C.state.transmissionRenderTarget[w.id]),dr.upload(D,ll(we),kt,B)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(dr.upload(D,ll(we),kt,B),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ct.setValue(D,"center",H.center),ct.setValue(D,"modelViewMatrix",H.modelViewMatrix),ct.setValue(D,"normalMatrix",H.normalMatrix),ct.setValue(D,"modelMatrix",H.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ft=G.uniformsGroups;for(let zt=0,Xr=Ft.length;zt<Xr;zt++){const jn=Ft[zt];J.update(jn,Wt),J.bind(jn,Wt)}}return Wt}function iu(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function su(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,O,W){const G=y.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),y.get(w.texture).__webglTexture=O,y.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const W=y.get(w);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const ru=D.createFramebuffer();this.setRenderTarget=function(w,O=0,W=0){P=w,T=O,L=W;let G=null,H=!1,le=!1;if(w){const he=y.get(w);if(he.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),V.copy(w.viewport),k.copy(w.scissor),q=w.scissorTest,ve.viewport(V),ve.scissor(k),ve.setScissorTest(q),z=-1;return}else if(he.__webglFramebuffer===void 0)B.setupRenderTarget(w);else if(he.__hasExternalTextures)B.rebindTextures(w,y.get(w.texture).__webglTexture,y.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ce=w.depthTexture;if(he.__boundDepthTexture!==Ce){if(Ce!==null&&y.has(Ce)&&(w.width!==Ce.image.width||w.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(w)}}const me=w.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(le=!0);const be=y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(be[O])?G=be[O][W]:G=be[O],H=!0):w.samples>0&&B.useMultisampledRTT(w)===!1?G=y.get(w).__webglMultisampledFramebuffer:Array.isArray(be)?G=be[W]:G=be,V.copy(w.viewport),k.copy(w.scissor),q=w.scissorTest}else V.copy(Y).multiplyScalar(Fe).floor(),k.copy(Z).multiplyScalar(Fe).floor(),q=pe;if(W!==0&&(G=ru),ve.bindFramebuffer(D.FRAMEBUFFER,G)&&ve.drawBuffers(w,G),ve.viewport(V),ve.scissor(k),ve.setScissorTest(q),H){const he=y.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,he.__webglTexture,W)}else if(le){const he=O;for(let me=0;me<w.textures.length;me++){const be=y.get(w.textures[me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+me,be.__webglTexture,W,he)}}else if(w!==null&&W!==0){const he=y.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,W)}z=-1},this.readRenderTargetPixels=function(w,O,W,G,H,le,fe,he=0){if(!(w&&w.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){ve.bindFramebuffer(D.FRAMEBUFFER,me);try{const be=w.textures[he],Ce=be.format,Ee=be.type;if(!ot.textureFormatReadable(Ce)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Ee)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-G&&W>=0&&W<=w.height-H&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),D.readPixels(O,W,G,H,ne.convert(Ce),ne.convert(Ee),le))}finally{const be=P!==null?y.get(P).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,O,W,G,H,le,fe,he=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(O>=0&&O<=w.width-G&&W>=0&&W<=w.height-H){ve.bindFramebuffer(D.FRAMEBUFFER,me);const be=w.textures[he],Ce=be.format,Ee=be.type;if(!ot.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ve),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),D.readPixels(O,W,G,H,ne.convert(Ce),ne.convert(Ee),0);const tt=P!==null?y.get(P).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,tt);const dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await $u(D,dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ve),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le),D.deleteBuffer(Ve),D.deleteSync(dt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,W=0){const G=Math.pow(2,-W),H=Math.floor(w.image.width*G),le=Math.floor(w.image.height*G),fe=O!==null?O.x:0,he=O!==null?O.y:0;B.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,fe,he,H,le),ve.unbindTexture()};const au=D.createFramebuffer(),ou=D.createFramebuffer();this.copyTextureToTexture=function(w,O,W=null,G=null,H=0,le=null){le===null&&(H!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=H,H=0):le=0);let fe,he,me,be,Ce,Ee,Ve,tt,dt;const ft=w.isCompressedTexture?w.mipmaps[le]:w.image;if(W!==null)fe=W.max.x-W.min.x,he=W.max.y-W.min.y,me=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,Ce=W.min.y,Ee=W.isBox3?W.min.z:0;else{const Jt=Math.pow(2,-H);fe=Math.floor(ft.width*Jt),he=Math.floor(ft.height*Jt),w.isDataArrayTexture?me=ft.depth:w.isData3DTexture?me=Math.floor(ft.depth*Jt):me=1,be=0,Ce=0,Ee=0}G!==null?(Ve=G.x,tt=G.y,dt=G.z):(Ve=0,tt=0,dt=0);const at=ne.convert(O.format),we=ne.convert(O.type);let Qe;O.isData3DTexture?(B.setTexture3D(O,0),Qe=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(B.setTexture2DArray(O,0),Qe=D.TEXTURE_2D_ARRAY):(B.setTexture2D(O,0),Qe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const je=D.getParameter(D.UNPACK_ROW_LENGTH),Wt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ci=D.getParameter(D.UNPACK_SKIP_PIXELS),Xt=D.getParameter(D.UNPACK_SKIP_ROWS),qi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ee);const ct=w.isDataArrayTexture||w.isData3DTexture,kt=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const Jt=y.get(w),Ft=y.get(O),zt=y.get(Jt.__renderTarget),Xr=y.get(Ft.__renderTarget);ve.bindFramebuffer(D.READ_FRAMEBUFFER,zt.__webglFramebuffer),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xr.__webglFramebuffer);for(let jn=0;jn<me;jn++)ct&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,y.get(w).__webglTexture,H,Ee+jn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,y.get(O).__webglTexture,le,dt+jn)),D.blitFramebuffer(be,Ce,fe,he,Ve,tt,fe,he,D.DEPTH_BUFFER_BIT,D.NEAREST);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||y.has(w)){const Jt=y.get(w),Ft=y.get(O);ve.bindFramebuffer(D.READ_FRAMEBUFFER,au),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,ou);for(let zt=0;zt<me;zt++)ct?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Jt.__webglTexture,H,Ee+zt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Jt.__webglTexture,H),kt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ft.__webglTexture,le,dt+zt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ft.__webglTexture,le),H!==0?D.blitFramebuffer(be,Ce,fe,he,Ve,tt,fe,he,D.COLOR_BUFFER_BIT,D.NEAREST):kt?D.copyTexSubImage3D(Qe,le,Ve,tt,dt+zt,be,Ce,fe,he):D.copyTexSubImage2D(Qe,le,Ve,tt,be,Ce,fe,he);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else kt?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Qe,le,Ve,tt,dt,fe,he,me,at,we,ft.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Qe,le,Ve,tt,dt,fe,he,me,at,ft.data):D.texSubImage3D(Qe,le,Ve,tt,dt,fe,he,me,at,we,ft):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,le,Ve,tt,fe,he,at,we,ft.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,le,Ve,tt,ft.width,ft.height,at,ft.data):D.texSubImage2D(D.TEXTURE_2D,le,Ve,tt,fe,he,at,we,ft);D.pixelStorei(D.UNPACK_ROW_LENGTH,je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Wt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ci),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qi),le===0&&O.generateMipmaps&&D.generateMipmap(Qe),ve.unbindTexture()},this.initRenderTarget=function(w){y.get(w).__webglFramebuffer===void 0&&B.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?B.setTextureCube(w,0):w.isData3DTexture?B.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?B.setTexture2DArray(w,0):B.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){T=0,L=0,P=null,ve.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const Sc={type:"change"},Qo={type:"start"},zh={type:"end"},sr=new Nr,Ec=new kn,p_=Math.cos(70*br.DEG2RAD),yt=new N,Vt=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ca=1e-6;class Vh extends xf{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Zt,this._lastTargetPosition=new N,this._quat=new Zt().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ql,this._sphericalDelta=new Ql,this._scale=1,this._panOffset=new N,this._rotateStart=new Pe,this._rotateEnd=new Pe,this._rotateDelta=new Pe,this._panStart=new Pe,this._panEnd=new Pe,this._panDelta=new Pe,this._dollyStart=new Pe,this._dollyEnd=new Pe,this._dollyDelta=new Pe,this._dollyDirection=new N,this._mouse=new Pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=g_.bind(this),this._onPointerDown=m_.bind(this),this._onPointerUp=__.bind(this),this._onContextMenu=E_.bind(this),this._onMouseWheel=y_.bind(this),this._onKeyDown=M_.bind(this),this._onTouchStart=b_.bind(this),this._onTouchMove=S_.bind(this),this._onMouseDown=x_.bind(this),this._onMouseMove=v_.bind(this),this._interceptControlDown=w_.bind(this),this._interceptControlUp=T_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sc),this.update(),this.state=nt.NONE}update(e=null){const t=this.object.position;yt.copy(t).sub(this.target),yt.applyQuaternion(this._quat),this._spherical.setFromVector3(yt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Vt:n>Math.PI&&(n-=Vt),i<-Math.PI?i+=Vt:i>Math.PI&&(i-=Vt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(yt.setFromSpherical(this._spherical),yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=yt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(sr.origin.copy(this.object.position),sr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sr.direction))<p_?this.object.lookAt(this.target):(Ec.setFromNormalAndCoplanarPoint(this.object.up,this.target),sr.intersectPlane(Ec,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ca||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ca||this._lastTargetPosition.distanceToSquared(this.target)>Ca?(this.dispatchEvent(Sc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vt/60*this.autoRotateSpeed*e:Vt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yt.setFromMatrixColumn(t,0),yt.multiplyScalar(-e),this._panOffset.add(yt)}_panUp(e,t){this.screenSpacePanning===!0?yt.setFromMatrixColumn(t,1):(yt.setFromMatrixColumn(t,0),yt.crossVectors(this.object.up,yt)),yt.multiplyScalar(e),this._panOffset.add(yt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;yt.copy(i).sub(this.target);let r=yt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function m_(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function g_(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function __(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zh),this.state=nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function x_(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=nt.DOLLY;break;case Di.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=nt.ROTATE}break;case Di.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Qo)}function v_(s){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function y_(s){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(s.preventDefault(),this.dispatchEvent(Qo),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(zh))}function M_(s){this.enabled!==!1&&this._handleKeyDown(s)}function b_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ii.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=nt.TOUCH_ROTATE;break;case Ii.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case Ii.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=nt.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Qo)}function S_(s){switch(this._trackPointer(s),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=nt.NONE}}function E_(s){this.enabled!==!1&&s.preventDefault()}function w_(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function T_(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Hh extends ws{constructor(){super(),this.name="RoomEnvironment";const e=new Vi;e.deleteAttribute("uv");const t=new jl({side:Ot}),n=new jl,i=new nf(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Mt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Nd(e,n,6),o=new vt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Mt(e,Ti(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Mt(e,Ti(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Mt(e,Ti(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Mt(e,Ti(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new Mt(e,Ti(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const p=new Mt(e,Ti(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ti(s){return new Gd({color:0,emissive:16777215,emissiveIntensity:s})}const ns=new N,is=new N,wc=new Ue;class A_ extends Hi{constructor(e,t=1,n=16711680){const i=new It,r=e.geometry.attributes.normal.count,a=new mt(r*2*3,3);i.setAttribute("position",a),super(i,new li({color:n,toneMapped:!1})),this.object=e,this.size=t,this.type="VertexNormalsHelper",this.matrixAutoUpdate=!1,this.isVertexNormalsHelper=!0,this.update()}update(){this.object.updateMatrixWorld(!0),wc.getNormalMatrix(this.object.matrixWorld);const e=this.object.matrixWorld,t=this.geometry.attributes.position,n=this.object.geometry;if(n){const i=n.attributes.position,r=n.attributes.normal;let a=0;for(let o=0,l=i.count;o<l;o++)ns.fromBufferAttribute(i,o).applyMatrix4(e),is.fromBufferAttribute(r,o),is.applyMatrix3(wc).normalize().multiplyScalar(this.size).add(ns),t.setXYZ(a,ns.x,ns.y,ns.z),a=a+1,t.setXYZ(a,is.x,is.y,is.z),a=a+1}t.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function C_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ra={},wn={},Tc;function el(){if(Tc)return wn;Tc=1,Object.defineProperty(wn,"__esModule",{value:!0}),wn.handleWarning=wn.DecodeWarning=wn.DecodeError=void 0;class s extends Error{constructor(i,r,a){super(r),this.offset=a,this.partiallyDecodedImage={details:{header:i.header,footer:i.footer,imageId:i.identificationField,developerDirectory:i.developerDirectory,extensionArea:i.extensionArea},warnings:i.warnings}}}wn.DecodeError=s;class e extends Error{constructor(i,r){super(i),this.offset=r}}wn.DecodeWarning=e;function t(n,i){if(n.options.strictMode)throw i;n.warnings.push(i)}return wn.handleWarning=t,wn}var ss={},rs={},Ac;function R_(){if(Ac)return rs;Ac=1,Object.defineProperty(rs,"__esModule",{value:!0}),rs.ByteStreamReader=void 0;class s{constructor(t,n){this.data=t,this._le=n,this.offset=0,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength)}readUint8(){return this.view.getUint8(this.offset++)}readUint16(){const t=this.view.getUint16(this.offset,this._le);return this.offset+=2,t}readUint32(){const t=this.view.getUint32(this.offset,this._le);return this.offset+=4,t}}return rs.ByteStreamReader=s,rs}var as={},Cc;function I_(){if(Cc)return as;Cc=1,Object.defineProperty(as,"__esModule",{value:!0}),as.readText=void 0;const s=el();function e(t,n,i,r){const a=[];let o=0,l=0;const c=t.reader.offset;for(;l<i;l++){try{o=t.reader.view.getUint8(t.reader.offset)}catch(h){throw h instanceof Error&&h.message==="Offset is outside the bounds of the DataView"&&(0,s.handleWarning)(t,new s.DecodeWarning("EOF while reading text",t.reader.offset)),h}if(!r&&o===0)break;t.reader.offset++,a.push(o)}return t.reader.offset=c+i,n?n.decode(new Uint8Array(a)):String.fromCharCode(...a)}return as.readText=e,as}var Tn={},Rc;function L_(){if(Rc)return Tn;Rc=1,Object.defineProperty(Tn,"__esModule",{value:!0}),Tn.isValidBitDepth=Tn.isValidColorMapDepth=Tn.isValidImageType=void 0;function s(n){return n===1||n===2||n===3||n===9||n===10||n===11}Tn.isValidImageType=s;function e(n){return n===15||n===16||n===24||n===32}Tn.isValidColorMapDepth=e;function t(n,i){return i===1||i===9?n===8:i===3||i===11?n===8||n===16:n===15||n===16||n===24||n===32}return Tn.isValidBitDepth=t,Tn}var Ic;function P_(){if(Ic)return ss;Ic=1,Object.defineProperty(ss,"__esModule",{value:!0}),ss.decodeTga=void 0;const s=el(),e=R_(),t=I_(),n=L_();async function i(x,S={}){const I={reader:new e.ByteStreamReader(x,!0),hasAlpha:!1,ambiguousAlpha:!1,options:S,warnings:[]},v=r(I),M={...I,header:v};M.identificationField=(0,t.readText)(M,void 0,M.header.idLength);const T=M.reader.offset;return M.footer=C(M),M.extensionArea=m(M),M.developerDirectory=b(M),M.reader.offset=T,M.header.colorMap?.type===1&&(M.colorMap=a(M,M.header.colorMap)),M.hasAlpha=M.colorMap&&M.header.colorMap?.depth===32||(M.header.attributeBitsPerPixel>0||M.header.bitDepth===32)&&(M.extensionArea===void 0||M.extensionArea.attributesType>2),M.ambiguousAlpha=M.hasAlpha&&M.header.attributeBitsPerPixel===0,M.image=o(M,M.reader.offset),{image:M.image,details:{header:M.header,imageId:M.identificationField,footer:M.footer,extensionArea:M.extensionArea,developerDirectory:M.developerDirectory},warnings:M.warnings}}ss.decodeTga=i;function r(x){const S=x.reader.readUint8(),I=x.reader.readUint8();let v;I===0||I===1?v=I:((0,s.handleWarning)(x,new s.DecodeWarning("Color map type unrecognized",x.reader.offset-1)),v=2);const M=x.reader.readUint8();if(!(0,n.isValidImageType)(M))throw new s.DecodeError(x,`Invalid image type "${M}"`,x.reader.offset-1);v===1&&M!==1&&M!==9&&(0,s.handleWarning)(x,new s.DecodeWarning(`Image type "${M}" cannot have a color map`,x.reader.offset-2));const T=x.reader.readUint16(),L=x.reader.readUint16(),P=x.reader.readUint8();if(v===1&&(T>=L&&(0,s.handleWarning)(x,new s.DecodeWarning(`Color map origin "${T}" is greater than color map length "${L}"`,x.reader.offset-5)),!(0,n.isValidColorMapDepth)(P)))throw new s.DecodeError(x,`Unsupported color map bit depth "${P}"`,x.reader.offset-1);const z=x.reader.readUint16(),U=x.reader.readUint16(),V=x.reader.readUint16(),k=x.reader.readUint16(),q=x.reader.readUint8();if(!(0,n.isValidBitDepth)(q,M))throw new s.DecodeError(x,`Unsupported TGA bit depth "${q}" with image type ${M}`,16);const ee=x.reader.readUint8(),te=(ee&15)>>0,ie=(ee&48)>>4;return ie===1&&(0,s.handleWarning)(x,new s.DecodeWarning("This image is encoded using a bottom right screen origin, many image editors won't read this correctly",x.reader.offset-1)),ie===3&&(0,s.handleWarning)(x,new s.DecodeWarning("This image is encoded using a top right screen origin, many image editors won't read this correctly",x.reader.offset-1)),{idLength:S,colorMap:v!==0?{type:v,depth:P,length:L,origin:T}:void 0,imageType:M,origin:{x:z,y:U},width:V,height:k,bitDepth:q,imageDescriptor:ee,attributeBitsPerPixel:te,screenOrigin:ie}}function a(x,S){const I=x.reader.offset,v=Math.ceil(S.depth/8);x.reader.offset+=S.length*v;let M;switch(S.depth){case 15:M=d;break;case 16:x.hasAlpha?M=p:M=d;break;case 24:M=g;break;case 32:M=_;break}return(T,L,P,z)=>{const U=P.getUint8(z);return M(T,L,x.reader.view,I+U*v),1}}function o(x,S){const I={width:x.header.width,height:x.header.height,data:new Uint8Array(x.header.width*x.header.height*4)};let v;if(x.colorMap)v=x.colorMap;else switch(x.header.bitDepth){case 8:v=c;break;case 15:v=d;break;case 16:x.header.imageType===11||x.header.imageType===3?v=h:x.hasAlpha?v=p:v=d;break;case 24:v=g;break;case 32:x.hasAlpha?v=_:v=f;break}let M=x.reader.view;if(x.header.imageType&8){const T=l(x);M=new DataView(T.buffer,T.byteOffset,T.length),S=0}switch(x.header.screenOrigin){case 0:{let T=0;for(let L=I.height-1;L>=0;L--){T=x.header.width*L*4;for(let P=0;P<I.width;P++)S+=v(I.data,T,M,S),T+=4}break}case 1:{let T=0;for(let L=I.height-1;L>=0;L--){T=(x.header.width*L+(x.header.width-1))*4;for(let P=0;P<I.width;P++)S+=v(I.data,T,M,S),T-=4}break}case 2:{let T=0;for(let L=0;L<I.height;L++)for(let P=0;P<I.width;P++)S+=v(I.data,T,M,S),T+=4;break}case 3:{let T=0;for(let L=0;L<I.height;L++){T=(x.header.width*L+(x.header.width-1))*4;for(let P=0;P<I.width;P++)S+=v(I.data,T,M,S),T-=4}break}}if(x.ambiguousAlpha&&!x.options.strictMode&&x.options.detectAmbiguousAlphaChannel){let T=!1;for(let L=3;L<I.width*I.height*4;L+=4)I.data[L]>0&&(T=!0);if(!T){(0,s.handleWarning)(x,new s.DecodeWarning("Image has ambiguous alpha and is fully transparent, alpha has been disabled",-1));for(let L=3;L<I.width*I.height*4;L+=4)I.data[L]=255}}return I}function l(x){const S=Math.ceil(x.header.bitDepth/8),I=new Uint8Array(x.header.width*x.header.height*S);let v=0,M=0,T=0,L=0,P=0;for(;T<I.length;)if(v=x.reader.readUint8(),M=(v&127)+1,v&128){for(L=0;L<S;L++)for(v=x.reader.readUint8(),P=0;P<M;P++)I[T+P*S+L]=v;T+=M*S}else{M*=S;for(let z=0;z<M;z++)I[T++]=x.reader.readUint8()}return I}function c(x,S,I,v){return x[S]=I.getUint8(v),x[S+1]=x[S],x[S+2]=x[S],x[S+3]=255,1}function h(x,S,I,v){return x[S]=I.getUint8(v),x[S+1]=x[S],x[S+2]=x[S],x[S+3]=I.getUint8(v+1),2}let u=0;function d(x,S,I,v){return u=I.getUint16(v,!0),x[S]=u>>10&31,x[S+1]=u>>5&31,x[S+2]=u&31,x[S]=x[S]<<3|x[S]>>2,x[S+1]=x[S+1]<<3|x[S+1]>>2,x[S+2]=x[S+2]<<3|x[S+2]>>2,x[S+3]=255,2}function p(x,S,I,v){return u=I.getUint16(v,!0),x[S]=u>>10&31,x[S+1]=u>>5&31,x[S+2]=u&31,x[S]=x[S]<<3|x[S]>>2,x[S+1]=x[S+1]<<3|x[S+1]>>2,x[S+2]=x[S+2]<<3|x[S+2]>>2,x[S+3]=u&32768?0:255,2}function g(x,S,I,v){return x[S]=I.getUint8(v+2),x[S+1]=I.getUint8(v+1),x[S+2]=I.getUint8(v),x[S+3]=255,3}function _(x,S,I,v){return x[S]=I.getUint8(v+2),x[S+1]=I.getUint8(v+1),x[S+2]=I.getUint8(v),x[S+3]=I.getUint8(v+3),4}function f(x,S,I,v){return x[S]=I.getUint8(v+2),x[S+1]=I.getUint8(v+1),x[S+2]=I.getUint8(v),x[S+3]=255,4}function m(x){if(x.footer?.extensionAreaOffset===void 0||x.footer.extensionAreaOffset===0)return;x.reader.offset=x.footer.extensionAreaOffset;const S=x.reader.readUint16();S!==495&&(0,s.handleWarning)(x,new s.DecodeWarning("TGA file is a version other than v2",x.reader.offset-2));const I=(0,t.readText)(x,void 0,41).trim()||void 0,v=(0,t.readText)(x,void 0,324).trim()||void 0,M=A(x),T=(0,t.readText)(x,void 0,41).trim()||void 0,L=E(x),P=(0,t.readText)(x,void 0,41).trim()||void 0,z=x.reader.readUint8()/100,U=(0,t.readText)(x,void 0,2);let V;z===0&&(U===" "||U.length===0)?V=void 0:V=`${z}${U}`;const k=x.reader.readUint8(),q=x.reader.readUint8(),ee=x.reader.readUint8(),te=x.reader.readUint8();let ie;k===0&&q===0&&ee===0&&te===0?ie=void 0:ie=new Uint8Array([q,ee,te,k]);const Ne=x.reader.readUint16(),Fe=x.reader.readUint16();let it;Fe===0?it=void 0:it=Ne/Fe;const st=x.reader.readUint16(),Y=x.reader.readUint16();let Z;Y===0?Z=void 0:Z=st/Y;const pe=x.reader.readUint32(),De=x.reader.readUint32(),ge=x.reader.readUint32(),We=x.reader.readUint8();return{extensionSize:S,authorName:I,authorComments:v,dateTimestamp:M,jobName:T,jobTime:L,softwareId:P,softwareVersion:V,keyColor:ie,aspectRatio:it,gamma:Z,colorCorrectionOffset:pe,postageStampOffset:De,scanLineOffset:ge,attributesType:We}}function b(x){if(x.footer?.developerDirectoryOffset===void 0||x.footer.developerDirectoryOffset===0)return[];x.reader.offset=x.footer.developerDirectoryOffset;const S=x.reader.readUint16(),I=[];for(let v=0;v<S;v++){const M=x.reader.readUint16(),T=x.reader.readUint32(),L=x.reader.readUint32();I.push({tag:M,offset:T,length:L})}return I}function A(x){const S=x.reader.readUint16(),I=x.reader.readUint16(),v=x.reader.readUint16(),M=x.reader.readUint16(),T=x.reader.readUint16(),L=x.reader.readUint16();if(!(S===0&&I===0&&v===0&&M===0&&T===0&&L===0))return new Date(v,S,I,M,T,L)}function E(x){const S=x.reader.readUint16(),I=x.reader.readUint16(),v=x.reader.readUint16();if(!(S===0&&I===0&&v===0))return{hours:S,minutes:I,seconds:v}}function C(x){if(x.reader.offset=x.reader.view.byteLength-26+8,(0,t.readText)(x,void 0,17)!=="TRUEVISION-XFILE."||x.reader.readUint8()!==0)return{extensionAreaOffset:0,developerDirectoryOffset:0};x.reader.offset=x.reader.view.byteLength-26;let I=x.reader.readUint32();I>=x.reader.view.byteLength&&((0,s.handleWarning)(x,new s.DecodeWarning(`Extension area offset "${I}" is invalid`,x.reader.offset-4)),I=0);let v=x.reader.readUint32();return v>=x.reader.view.byteLength&&((0,s.handleWarning)(x,new s.DecodeWarning(`Developer directory offset "${v}" is invalid`,x.reader.offset-4)),v=0),{extensionAreaOffset:I,developerDirectoryOffset:v}}return ss}var os={},ls={},An={},Lc;function Gh(){if(Lc)return An;Lc=1,Object.defineProperty(An,"__esModule",{value:!0}),An.handleWarning=An.EncodeWarning=An.EncodeError=void 0;class s extends Error{constructor(i,r){super(i),this.offset=r}}An.EncodeError=s;class e extends Error{constructor(i,r){super(i),this.offset=r}}An.EncodeWarning=e;function t(n,i){if(n.options.strictMode)throw i;n.warnings.push(i)}return An.handleWarning=t,An}var Pc;function D_(){if(Pc)return ls;Pc=1,Object.defineProperty(ls,"__esModule",{value:!0}),ls.analyze=void 0;const s=Gh();function e(a,o={}){const l=[],c=[],h={options:o,warnings:l};if(a.width>65535)throw new s.EncodeError(`Image width is out of range (${a.width} > 65535)`,-1);if(a.height>65535)throw new s.EncodeError(`Image height is out of range (${a.height} > 65535)`,-1);if(a.data.length!==a.width*a.height*4)throw new s.EncodeError(`Provided image data length (${a.data.length}) is not expected length (${a.width*a.height*4})`,Math.min(a.data.length,a.width*a.height*4)-1);if(o.imageId&&o.imageId.length>255)throw new s.EncodeError(`Image ID length is out of range (${o.imageId.length} > 255)`,-1);if(o.origin&&(o.origin.x||0)>65535)throw new s.EncodeError(`X origin is out of range (${o.origin.x} > 65535)`,-1);if(o.origin&&(o.origin.y||0)>65535)throw new s.EncodeError(`Y origin is out of range (${o.origin.y} > 65535)`,-1);if(o.screenOrigin===1&&(0,s.handleWarning)(h,new s.EncodeWarning("This image is encoded using a bottom right screen origin, many image editors won't read this correctly",17)),o.screenOrigin===3&&(0,s.handleWarning)(h,new s.EncodeWarning("This image is encoded using a top right screen origin, many image editors won't read this correctly",17)),o.bitDepth!==void 0&&o.imageType===void 0||o.bitDepth===void 0&&o.imageType!==void 0&&o.imageType>=0)throw new s.EncodeError("Bit depth and image type options must be used together",-1);const u=o.imageType;let d,p;u!==void 0&&(u===-2||u===-1?p=u:d=u);let g=o.bitDepth,_;if(g===24&&t(a)&&(0,s.handleWarning)({options:o,warnings:l},new s.EncodeWarning("Cannot encode 24 bit image without data loss as it contains transparent colors",0)),d===9||d===1){const f=n(a,p);if(!f.colorMap)throw new s.EncodeError("Image has too many colors to encode using a color map",-1);_=f.colorMap}if(!g||p!==void 0){const f=n(a,p);if(g&&g<f.bitDepth)throw new s.EncodeError("Image cannot be encoded using specified bit depth",-1);g=f.bitDepth,d=f.imageType,_=f.colorMap}if(!d)throw new Error("No ImageType set");return{bitDepth:g,imageType:d,colorMap:_,imageId:o.imageId||"",options:o,warnings:l,info:c,image:a}}ls.analyze=e;function t(a){const l=a.width*a.height*4;let c=!1;for(let h=0;h<l;h+=4)c||(c=a.data[h+3]<255);return c}function n(a,o){const c=a.width*a.height*4;let h=!1,u=!1,d=!1,p=!1;const g=new Set;for(let _=0;_<c;_+=4)h||(h=a.data[_+3]>0&&a.data[_+3]<255),u||(u=a.data[_+3]<255),d||d||(d=!r(a.data[_])||!r(a.data[_+1])||!r(a.data[_+2])||!r(a.data[_+3])),p||(p=a.data[_]!==a.data[_+1]||a.data[_]!==a.data[_+2]),g.size<256&&g.add((a.data[_]<<24)+(a.data[_+1]<<16)+(a.data[_+2]<<8)+a.data[_+3]);if(g.size<255){const _=new Map;let f=0;for(const b of g)_.set(b,f++);let m;return d?u?m={colorToIndexMap:_,bitDepth:32}:m={colorToIndexMap:_,bitDepth:24}:u?m={colorToIndexMap:_,bitDepth:32}:m={colorToIndexMap:_,bitDepth:15},{imageType:i(9,o),bitDepth:8,colorMap:m}}return p?d?u?{imageType:i(10,o),bitDepth:32}:{imageType:i(10,o),bitDepth:24}:u?h?{imageType:i(10,o),bitDepth:32}:{imageType:i(10,o),bitDepth:16}:{imageType:i(10,o),bitDepth:15}:u?{imageType:i(11,o),bitDepth:16}:{imageType:i(11,o),bitDepth:8}}function i(a,o){if(o===void 0)return a;switch(a){case 1:case 9:return o===-2?9:1;case 2:case 10:return o===-2?10:2;case 3:case 11:return o===-2?11:3}}function r(a){return(a>>5&7)===(a&7)}return ls}var cs={},Dc;function U_(){if(Dc)return cs;Dc=1,Object.defineProperty(cs,"__esModule",{value:!0}),cs.ByteStream=void 0;class s{constructor(t,n){this._le=n,this.offset=0,this.array=new Uint8Array(t),this.view=new DataView(this.array.buffer,this.array.byteOffset,this.array.byteLength)}writeUint8(t){this.view.setUint8(this.offset,t),this.offset+=1}writeUint16(t){this.view.setUint16(this.offset,t,this._le),this.offset+=2}assertAtEnd(){if(this.offset!==this.array.length)throw new Error("Writing finished before expected length of stream")}}return cs.ByteStream=s,cs}var hs={},Uc;function F_(){if(Uc)return hs;Uc=1,Object.defineProperty(hs,"__esModule",{value:!0}),hs.encodeRunLengthEncoding=void 0;const s=Gh();function e(t,n){const i=Math.ceil(t.bitDepth/8),r=i+1,a=new Uint8Array(t.image.width*t.image.height*r);let o=0,l=0,c=1,h=0,u=!1,d=0,p=0,g=!1;for(let _=i;_<n.length;_+=i){let f=!1;for(h=0;h<i;h++)f||(f=n[l+h]!==n[_+h]);if(f){for(;c>0;){for(u=c===1,g&&u?(d=a[p]&127,d<127?a[p]=d+1:(a[o]=Math.min(c,128)-1,p=o,o++)):(a[o]=Math.min(c,128)-1|(u?0:128),p=o,o++),h=0;h<i;h++)a[o+h]=n[l+h];o+=i,g=u,c-=128}l=_,c=1}else c++}for(;c>0;){for(u=c===1,g&&u?(d=a[p]&127,d<127?a[p]=d+1:(a[o]=Math.min(c,128)-1,p=o,o++)):(a[o]=Math.min(c,128)-1|(u?0:128),p=o,o++),h=0;h<i;h++)a[o+h]=n[l+h];o+=i,c-=128}return o-1>n.length&&(0,s.handleWarning)(t,new s.EncodeWarning("RLE encoded was used but it is larger than unencoded would be",-1)),a.slice(0,o)}return hs.encodeRunLengthEncoding=e,hs}var Fc;function N_(){if(Fc)return os;Fc=1,Object.defineProperty(os,"__esModule",{value:!0}),os.encodeTga=void 0;const s=D_(),e=U_(),t=F_();async function n(g,_={}){const f=(0,s.analyze)(g,_),m=[];m.push(i(f)),f.imageId.length>0&&m.push(r(f)),f.colorMap&&m.push(a(f)),m.push(o(f));const b=m.reduce((C,x)=>C+x.length,0),A=new Uint8Array(b);let E=0;for(const C of m)A.set(C,E),E+=C.length;return{data:A,warnings:f.warnings,info:f.info}}os.encodeTga=n;function i(g){const _=new e.ByteStream(18,!0);_.writeUint8(g.imageId.length),_.writeUint8(g.colorMap?1:0),_.writeUint8(g.imageType),_.writeUint16(0),_.writeUint16(g.colorMap?.colorToIndexMap.size??0),_.writeUint8(g.colorMap?.bitDepth??0),_.writeUint16(g.options.origin?.x||0),_.writeUint16(g.options.origin?.y||0),_.writeUint16(g.image.width),_.writeUint16(g.image.height),_.writeUint8(g.bitDepth);let f=0;g.bitDepth===32&&(f=8);const m=f&15|(g.options.screenOrigin??0)<<4&48;return _.writeUint8(m),_.assertAtEnd(),_.array}function r(g){const _=new e.ByteStream(g.imageId.length,!0);for(let f=0;f<g.imageId.length;f++)_.writeUint8(g.imageId.charCodeAt(f));return _.assertAtEnd(),_.array}function a(g){const _=g.colorMap;if(!_)throw new Error("Cannot write color map undefined");const f=Math.ceil(_.bitDepth/8),m=new e.ByteStream(_.colorToIndexMap.size*f,!0);let b;switch(_.bitDepth){case 15:b=c;break;case 16:b=h;break;case 24:b=d;break;case 32:b=p;break;default:throw new Error(`Unsupported bit depth for color map "${_.bitDepth}"`)}const A=Array.from(_.colorToIndexMap.entries()).sort((E,C)=>E[1]-C[1]).map(E=>E[0]);for(const E of A)b(m,new Uint8Array([E>>24&255,E>>16&255,E>>8&255,E&255]),0);return m.assertAtEnd(),m.array}function o(g){const _=Math.ceil(g.bitDepth/8),f=new e.ByteStream(g.image.width*g.image.height*_,!0);let m=0,b;if(g.colorMap){const A=g.colorMap;b=(E,C,x)=>{const S=A.colorToIndexMap.get((C[x]<<24)+(C[x+1]<<16)+(C[x+2]<<8)+C[x+3]);E.writeUint8(S)}}else switch(g.bitDepth){case 8:if(g.imageType===3||g.imageType===11)b=l;else throw new Error(`Unsupported image type (${g.imageType}) with bit depth (${g.bitDepth})`);break;case 15:b=c;break;case 16:g.imageType===3||g.imageType===11?b=u:b=h;break;case 24:b=d;break;case 32:b=p;break;default:throw new Error("NYI")}switch(g.options.screenOrigin??0){case 0:for(let A=g.image.height-1;A>=0;A--){m=g.image.width*A*4;for(let E=0;E<g.image.width;E++)b(f,g.image.data,m),m+=4}break;case 1:for(let A=g.image.height-1;A>=0;A--){m=(g.image.width*A+(g.image.width-1))*4;for(let E=0;E<g.image.width;E++)b(f,g.image.data,m),m-=4}break;case 2:for(let A=0;A<g.image.height;A++){m=g.image.width*A*4;for(let E=0;E<g.image.width;E++)b(f,g.image.data,m),m+=4}break;case 3:for(let A=0;A<g.image.height;A++){m=(g.image.width*A+(g.image.width-1))*4;for(let E=0;E<g.image.width;E++)b(f,g.image.data,m),m-=4}break}return f.assertAtEnd(),g.imageType&8?(0,t.encodeRunLengthEncoding)(g,f.array):f.array}function l(g,_,f){g.writeUint8(_[f])}function c(g,_,f){g.writeUint16((_[f+0]>>3&31)<<10|(_[f+1]>>3&31)<<5|(_[f+2]>>3&31)<<0)}function h(g,_,f){g.writeUint16((_[f+0]>>3&31)<<10|(_[f+1]>>3&31)<<5|(_[f+2]>>3&31)<<0|(_[f+3]===255?32768:0))}function u(g,_,f){g.writeUint8(_[f]),g.writeUint8(_[f+3])}function d(g,_,f){g.writeUint8(_[f+2]),g.writeUint8(_[f+1]),g.writeUint8(_[f+0])}function p(g,_,f){g.writeUint8(_[f+2]),g.writeUint8(_[f+1]),g.writeUint8(_[f+0]),g.writeUint8(_[f+3])}return os}var Nc;function B_(){return Nc||(Nc=1,(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.encodeTga=s.decodeTga=s.DecodeWarning=s.DecodeError=void 0;var e=el();Object.defineProperty(s,"DecodeError",{enumerable:!0,get:function(){return e.DecodeError}}),Object.defineProperty(s,"DecodeWarning",{enumerable:!0,get:function(){return e.DecodeWarning}});async function t(i,r){return(await Promise.resolve().then(()=>P_())).decodeTga(i,r)}s.decodeTga=t;async function n(i,r){return(await Promise.resolve().then(()=>N_())).encodeTga(i,r)}s.encodeTga=n})(Ra)),Ra}var O_=B_();const k_=new Uint32Array([3287280091,1147300610,2044886154,2027892972,1902027934,3347438090,3763270186,3854829911]),Ht=(s,e)=>(s<<(e&31)|s>>>32-(e&31))>>>0,z_=(s,e)=>(s>>>(e&31)|s<<32-(e&31))>>>0;function V_(s){const e=new Uint32Array(192),t=new Uint32Array(s);for(let n=0;n<32;n++){const i=k_[n&7],r=n*6&7;t[r+0&7]=Ht(t[r+0&7]+Ht(i,n)>>>0,1),t[r+1&7]=Ht(t[r+1&7]+Ht(i,n+1)>>>0,3),t[r+2&7]=Ht(t[r+2&7]+Ht(i,n+2)>>>0,6),t[r+3&7]=Ht(t[r+3&7]+Ht(i,n+3)>>>0,11),t[r+4&7]=Ht(t[r+4&7]+Ht(i,n+4)>>>0,13),t[r+5&7]=Ht(t[r+5&7]+Ht(i,n+5)>>>0,17),e.set([t[r+0&7],t[r+1&7],t[r+2&7],t[r+3&7],t[r+4&7],t[r+5&7]],n*6)}return e}function H_(s,e,t){e[0]=s[3],e[1]=(z_(s[0],9)-(e[0]^t[0])^t[1])>>>0,e[2]=(Ht(s[1],5)-(e[1]^t[2])^t[3])>>>0,e[3]=(Ht(s[2],3)-(e[2]^t[4])^t[5])>>>0}function G_(s){if(s.length!==32)throw new Error("LEA-256 key must be 32 bytes");const e=new Uint32Array(8);for(let a=0;a<8;a++)e[a]=s[a*4+3]<<24|s[a*4+2]<<16|s[a*4+1]<<8|s[a*4];const t=V_(e),n=new Uint32Array(4),i=new Uint32Array(4),r=new Uint32Array(6);return function(o){if(o.length%16!==0)throw new Error("LEA-ECB: data length must be a multiple of 16 B");const l=o.slice(),c=new DataView(l.buffer,l.byteOffset);for(let h=0;h<l.length;h+=16){for(let u=0;u<4;u++)n[u]=c.getUint32(h+u*4,!0);for(let u=0;u<32;u++)r.set(t.subarray((31-u)*6,(32-u)*6)),H_(n,i,r),n.set(i);for(let u=0;u<4;u++)c.setUint32(h+u*4,n[u],!0)}return l}}const Ro={int16:{size:2,read:(s,e)=>s.getInt16(e,!0)},uint16:{size:2,read:(s,e)=>s.getUint16(e,!0)},uint8:{size:1,read:(s,e)=>s.getUint8(e)},float32:{size:4,read:(s,e)=>s.getFloat32(e,!0)}};function Wh(s){let e=0;for(const[,t]of s)e+=Ro[t].size;return e}function W_(s,e,t){const n=Wh(e);if(t+n>s.byteLength)throw new Error(`Cannot read struct at offset ${t}: would require ${n} bytes but only ${s.byteLength-t} bytes available`);const i={};let r=t;for(const[a,o]of e)try{a.startsWith("__")||(i[a]=Ro[o].read(s,r)),r+=Ro[o].size}catch(l){throw new Error(`Error reading field '${a}' of type '${o}' at offset ${r}: ${l}`)}return{data:i,newOffset:r}}function Ia(s,e,t,n){if(n===0)return{data:[],newOffset:t};const i=Wh(e),r=i*n;if(t+r>s.byteLength)return console.error(`Cannot read ${n} structs of size ${i} (total ${r} bytes) at offset ${t}: buffer size is ${s.byteLength}`),null;const a=[];let o=t;for(let l=0;l<n;l++)try{const{data:c,newOffset:h}=W_(s,e,o);a.push(c),o=h}catch(c){return console.error(`Error reading struct ${l}/${n} at offset ${o}:`,c),null}return{data:a,newOffset:o}}const X_=[["node","int16"],["__padding0","int16"],["x","float32"],["y","float32"],["z","float32"]],q_=[["node","int16"],["__padding0","int16"],["nx","float32"],["ny","float32"],["nz","float32"],["bindVertex","int16"],["__padding1","int16"]],$_=[["u","float32"],["v","float32"]],Y_=new Uint8Array([204,80,69,19,194,166,87,78,214,154,69,137,191,47,188,217,57,179,179,189,80,189,204,182,133,70,209,214,22,84,224,135]),j_=G_(Y_);function K_(s){const e=new Uint8Array([209,115,82,246,210,154,203,39,62,175,89,49,55,179,231,162]),t=new Uint8Array(s.length);let n=94;for(let i=0;i<s.length;i++)t[i]=(s[i]^e[i&15])-n,n=s[i]+61&255;return t}function Z_(s){return j_(s)}async function Xh(s){const e=await O_.decodeTga(new Uint8Array(s)),{width:t,height:n,data:i}=e.image,r=document.createElement("canvas");r.width=t,r.height=n;const a=r.getContext("2d"),o=a.createImageData(t,n);return o.data.set(i),a.putImageData(o,0,0),r.toDataURL("image/png")}function J_(s){const e=s.x*.5,t=s.y*.5,n=s.z*.5,i=Math.sin(e),r=Math.cos(e),a=Math.sin(t),o=Math.cos(t),l=Math.sin(n),c=Math.cos(n),h=r*o*c+i*a*l,u=i*o*c-r*a*l,d=r*a*c+i*o*l,p=r*o*l-i*a*c;return new Zt(u,d,p,h).normalize()}class qh{async load(e){console.groupCollapsed("%cBMDLoader.load","color:lime;font-weight:bold"),console.time("BMDLoader.load total");const t=this.parse(e);console.log("Parsed BMD:",t);const n=[...new Set(t.meshes.map(c=>c.texturePath))];console.log("Required textures:",n);const i=new ps;i.name=t.name;const r=[];t.bones.forEach(c=>{const h=new vh;h.name=c.name,r.push(h)});const a=[];r.forEach((c,h)=>{const u=t.bones[h].parent;u>=0&&u<r.length?r[u].add(c):a.push(c)}),a.forEach(c=>i.add(c));const o=new qo(r);t.meshes.forEach(c=>{const h=new It,u=new Yo({color:13421772,side:en}),{positions:d,normals:p,uvs:g,skinIndices:_,skinWeights:f}=this.extractGeometry(c);h.setAttribute("position",new mt(d,3)),h.setAttribute("normal",new mt(p,3)),h.setAttribute("uv",new mt(g,2)),h.setAttribute("skinIndex",new Wo(_,4)),h.setAttribute("skinWeight",new mt(f,4));const m=new Dd(h,u);m.name=`mesh_${i.children.length}`,m.userData.texturePath=c.texturePath,m.bind(o),i.add(m)}),t.bones.forEach((c,h)=>{if(c.isDummy||!c.matrixes?.length)return;const u=c.matrixes[0],d=u.position[0]??{x:0,y:0,z:0},p=u.quaternion[0]??{x:0,y:0,z:0,w:1},g=r[h];g.position.set(d.x,d.y,d.z),g.quaternion.set(p.x,p.y,p.z,p.w)});const l=this.createAnimations(t,r);return l.length>0&&(i.animations=l),i.rotation.x=-Math.PI/2,console.timeEnd("BMDLoader.load total"),console.groupEnd(),{group:i,requiredTextures:n}}loadAnimationsFrom(e,t){const n=Array.isArray(t)?t:t.bones,i=this.parse(e);return this.createAnimations(i,n)}parse(e){console.groupCollapsed("parse()"),console.log(`Buffer size: ${e.byteLength} bytes`);const t=e.slice(0),n=new DataView(t);if(new TextDecoder("ascii").decode(t.slice(0,3))!=="BMD")throw new Error("Invalid BMD header");const r=n.getUint8(3);console.log(`BMD version: ${r}`);let a=4;if(r===12||r===15){const f=n.getInt32(4,!0),m=new Uint8Array(t,8,f),b=r===12?K_(m):Z_(m);new Uint8Array(t,8,f).set(b),a=8,console.log(`Decrypted ${f} B @8`)}let o=a;const l=()=>{const f=n.getInt16(o,!0);return o+=2,f},c=()=>{const f=n.getUint16(o,!0);return o+=2,f},h=()=>{const f=n.getFloat32(o,!0);return o+=4,f},u=this.readStringFromDataView(n,o,32);o+=32;const d=c(),p=c(),g=c();console.log(`Counts – Meshes:${d}, Bones:${p}, Actions:${g}`);const _={version:r,name:u,meshes:[],bones:[],actions:[]};for(let f=0;f<d;f++){console.log(`Reading mesh ${f+1}/${d} at offset ${o}`);const m=l(),b=l(),A=l(),E=l(),C=l();console.log(`Mesh ${f}: v=${m}, n=${b}, t=${A}, tri=${E}`);const x=Ia(n,X_,o,m);if(!x){console.error(`Failed to read vertices for mesh ${f}`);continue}o=x.newOffset;const S=x.data.map(U=>({node:U.node,position:{x:U.x,y:U.y,z:U.z}})),I=Ia(n,q_,o,b);if(!I){console.error(`Failed to read normals for mesh ${f}`);continue}o=I.newOffset;const v=I.data.map(U=>({node:U.node,normal:{x:U.nx,y:U.ny,z:U.nz},bindVertex:U.bindVertex})),M=Ia(n,$_,o,A);if(!M){console.error(`Failed to read texCoords for mesh ${f}`);continue}o=M.newOffset;const T=M.data,L=[],P=64;for(let U=0;U<E;U++){const V=o;L.push({polygon:n.getUint8(V),vertexIndex:[0,1,2,3].map(k=>n.getInt16(V+2+k*2,!0)),normalIndex:[0,1,2,3].map(k=>n.getInt16(V+10+k*2,!0)),texCoordIndex:[0,1,2,3].map(k=>n.getInt16(V+18+k*2,!0)),lightMapCoord:[],lightMapIndexes:0}),o+=P}const z=this.readStringFromDataView(n,o,32);o+=32,_.meshes.push({texture:C,numVertices:m,numNormals:b,numTexCoords:A,numTriangles:E,vertices:S,normals:v,texCoords:T,triangles:L,texturePath:z})}for(let f=0;f<g;f++){const m=l(),b=n.getUint8(o)>0;if(o+=1,_.actions.push({numAnimationKeys:m,lockPositions:b,positions:[]}),b)for(let A=0;A<m;A++){const E={x:h(),y:h(),z:h()};_.actions[f].positions.push(E)}}for(let f=0;f<p;f++){const m=n.getUint8(o)>0;if(o+=1,m){_.bones.push({name:`dummy_${f}`,parent:-1,isDummy:!0,matrixes:[]});continue}const b=this.readStringFromDataView(n,o,32);o+=32;const A=l(),E={name:b,parent:A,isDummy:!1,matrixes:[]};for(let C=0;C<g;C++){const S=_.actions[C].numAnimationKeys;if(S===0){E.matrixes.push({position:[{x:0,y:0,z:0}],rotation:[{x:0,y:0,z:0}],quaternion:[{x:0,y:0,z:0,w:1}]});continue}const I={position:[],rotation:[],quaternion:[]};for(let v=0;v<S;v++)I.position.push({x:h(),y:h(),z:h()});for(let v=0;v<S;v++)I.rotation.push({x:h(),y:h(),z:h()});I.rotation.forEach(v=>{const M=J_(v);I.quaternion.push({x:M.x,y:M.y,z:M.z,w:M.w})}),E.matrixes.push(I)}_.bones.push(E)}return console.log(`Parse completed. Final offset: ${o}/${t.byteLength}`),console.groupEnd(),_}readStringFromDataView(e,t,n){if(t+n>e.byteLength)return console.warn(`Cannot read string at offset ${t}: would exceed buffer bounds`),"";const i=new Uint8Array(e.buffer,e.byteOffset+t,n),r=i.indexOf(0);return new TextDecoder("ascii").decode(r!==-1?i.subarray(0,r):i)}extractGeometry(e){const t=[],n=[],i=[],r=[],a=[],o=(l,c,h)=>{if(l<0||l>=e.vertices.length||c<0||c>=e.normals.length||h<0||h>=e.texCoords.length)return!1;const u=e.vertices[l],d=e.normals[c],p=e.texCoords[h];return t.push(u.position.x,u.position.y,u.position.z),n.push(d.normal.x,d.normal.y,d.normal.z),i.push(p.u,p.v),r.push(u.node,0,0,0),a.push(1,0,0,0),!0};for(const l of e.triangles){const c=l.vertexIndex,h=l.normalIndex,u=l.texCoordIndex;o(c[0],h[0],u[0]),o(c[2],h[2],u[2]),o(c[1],h[1],u[1]),l.polygon===4&&(o(c[0],h[0],u[0]),o(c[2],h[2],u[2]),o(c[3],h[3],u[3]))}return{positions:t,normals:n,uvs:i,skinIndices:r,skinWeights:a}}createAnimations(e,t){const n=[];for(let r=0;r<e.actions.length;r++){const a=e.actions[r];if(a.numAnimationKeys<=1)continue;const o=(a.numAnimationKeys-1)/24,l=[];for(let c=0;c<e.bones.length;c++){const h=t[c],u=e.bones[c];if(u.isDummy||!u.matrixes[r])continue;const d=u.matrixes[r],p=[],g=[],_=[];for(let f=0;f<a.numAnimationKeys;f++){p.push(f/24);const m=d.position[f],b=d.quaternion[f];g.push(m.x,m.y,m.z),_.push(b.x,b.y,b.z,b.w)}l.push(new As(`${h.name}.position`,p,g)),l.push(new Rs(`${h.name}.quaternion`,p,_))}if(l.length){const c=new To(`action_${r}`,o,l);c.userData={numAnimationKeys:a.numAnimationKeys},n.push(c)}}return n}readString(e,t,n){if(t+n>e.byteLength)return console.warn(`Cannot read string at offset ${t}: would exceed buffer bounds`),"";const i=new Uint8Array(e.buffer,t,n),r=i.indexOf(0),a=r!==-1?i.slice(0,r):i;return new TextDecoder("ascii",{fatal:!1}).decode(a)}}async function $h(s){const e=new Uint8Array(s),t=e.length;let n=-1;for(let h=20;h<Math.min(30,t-2);h++)if(e[h]===255&&e[h+1]===216&&e[h+2]===255){n=h;break}if(n!==-1)return Q_(s,n);const i=new DataView(s);if(t<22)throw new Error("File too small for OZT");const r=i.getInt16(16,!0),a=i.getInt16(18,!0),o=i.getUint8(20),l=22+r*a*4;if(!(r>0&&a>0&&r<=1024&&a<=1024&&o===32&&l<=t))throw new Error("Unsupported OZ? file");return ex(s,r,a)}async function Q_(s,e){new DataView(s).getUint8(17);const n=s.slice(e);try{const i=new Blob([n],{type:"image/jpeg"}),r=await createImageBitmap(i),a=Object.assign(document.createElement("canvas"),{width:r.width,height:r.height});return a.getContext("2d").drawImage(r,0,0),r.close(),a.toDataURL("image/png")}catch(i){throw console.error("OZJ decode error:",i),new Error(`Failed to decode JPEG: ${i}`)}}function ex(s,e,t){const n=new Uint8Array(s);let i=22;const r=Object.assign(document.createElement("canvas"),{width:e,height:t}),a=r.getContext("2d"),o=a.createImageData(e,t),l=o.data;for(let c=0;c<t;c++){const h=(t-1-c)*e*4;for(let u=0;u<e;u++){const d=n[i++],p=n[i++],g=n[i++],_=n[i++],f=h+u*4;l[f]=g,l[f+1]=p,l[f+2]=d,l[f+3]=_}}return a.putImageData(o,0,0),r.toDataURL("image/png")}const Bc={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Cr{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new ux(e)}),this.register(function(e){return new dx(e)}),this.register(function(e){return new gx(e)}),this.register(function(e){return new _x(e)}),this.register(function(e){return new xx(e)}),this.register(function(e){return new vx(e)}),this.register(function(e){return new fx(e)}),this.register(function(e){return new px(e)}),this.register(function(e){return new mx(e)}),this.register(function(e){return new yx(e)}),this.register(function(e){return new Mx(e)}),this.register(function(e){return new bx(e)}),this.register(function(e){return new Sx(e)}),this.register(function(e){return new Ex(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,i){const r=new hx,a=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}}const Ge={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},La="KHR_mesh_quantization",Kt={};Kt[Tt]=Ge.NEAREST;Kt[th]=Ge.NEAREST_MIPMAP_NEAREST;Kt[fs]=Ge.NEAREST_MIPMAP_LINEAR;Kt[Rt]=Ge.LINEAR;Kt[or]=Ge.LINEAR_MIPMAP_NEAREST;Kt[zn]=Ge.LINEAR_MIPMAP_LINEAR;Kt[pn]=Ge.CLAMP_TO_EDGE;Kt[Bi]=Ge.REPEAT;Kt[_r]=Ge.MIRRORED_REPEAT;const Oc={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},tx=new Te,kc=12,nx=1179937895,ix=2,zc=8,sx=1313821514,rx=5130562;function gs(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function ax(s){return new TextEncoder().encode(s).buffer}function ox(s){return gs(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function lx(s,e,t){const n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let r=0;r<s.itemSize;r++){let a;s.itemSize>4?a=s.array[i*s.itemSize+r]:(r===0?a=s.getX(i):r===1?a=s.getY(i):r===2?a=s.getZ(i):r===3&&(a=s.getW(i)),s.normalized===!0&&(a=br.normalize(a,s.array))),n.min[r]=Math.min(n.min[r],a),n.max[r]=Math.max(n.max[r],a)}return n}function Yh(s){return Math.ceil(s/4)*4}function Pa(s,e=0){const t=Yh(s.byteLength);if(t!==s.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function Vc(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function cx(s,e){if(typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}else return new Promise(t=>s.toBlob(t,e))}class hx{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Ir}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const i=this,r=i.buffers,a=i.json;n=i.options;const o=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(o),u=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0){const d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){const p=Pa(d.result),g=new DataView(new ArrayBuffer(zc));g.setUint32(0,p.byteLength,!0),g.setUint32(4,rx,!0);const _=Pa(ax(JSON.stringify(a)),32),f=new DataView(new ArrayBuffer(zc));f.setUint32(0,_.byteLength,!0),f.setUint32(4,sx,!0);const m=new ArrayBuffer(kc),b=new DataView(m);b.setUint32(0,nx,!0),b.setUint32(4,ix,!0);const A=kc+f.byteLength+_.byteLength+g.byteLength+p.byteLength;b.setUint32(8,A,!0);const E=new Blob([m,f,_,g,p],{type:"application/octet-stream"}),C=new FileReader;C.readAsArrayBuffer(E),C.onloadend=function(){t(C.result)}}}else if(a.buffers&&a.buffers.length>0){const d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){const p=d.result;a.buffers[0].uri=p,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],i[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new N;for(let i=0,r=e.count;i<r;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new N;for(let r=0,a=n.count;r<a;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(p){return p.colorSpace===At?function(_){return _<.04045?_*.0773993808:Math.pow(_*.9478672986+.0521327014,2.4)}:function(_){return _}}e instanceof xa&&(e=await this.decompressTextureAsync(e)),t instanceof xa&&(t=await this.decompressTextureAsync(t));const i=e?e.image:null,r=t?t.image:null,a=Math.max(i?i.width:0,r?r.width:0),o=Math.max(i?i.height:0,r?r.height:0),l=Vc();l.width=a,l.height=o;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,o);const h=c.getImageData(0,0,a,o);if(i){c.drawImage(i,0,0,a,o);const p=n(e),g=c.getImageData(0,0,a,o).data;for(let _=2;_<g.length;_+=4)h.data[_]=p(g[_]/256)*256}if(r){c.drawImage(r,0,0,a,o);const p=n(t),g=c.getImageData(0,0,a,o).data;for(let _=1;_<g.length;_+=4)h.data[_]=p(g[_]/256)*256}c.putImageData(h,0,0);const d=(e||t).clone();return d.source=new Fr(l),d.colorSpace=Cn,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){const a=this.json;a.bufferViews||(a.bufferViews=[]);let o;switch(t){case Ge.BYTE:case Ge.UNSIGNED_BYTE:o=1;break;case Ge.SHORT:case Ge.UNSIGNED_SHORT:o=2;break;default:o=4}let l=e.itemSize*o;r===Ge.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=Yh(i*l),h=new DataView(new ArrayBuffer(c));let u=0;for(let g=n;g<n+i;g++){for(let _=0;_<e.itemSize;_++){let f;e.itemSize>4?f=e.array[g*e.itemSize+_]:(_===0?f=e.getX(g):_===1?f=e.getY(g):_===2?f=e.getZ(g):_===3&&(f=e.getW(g)),e.normalized===!0&&(f=br.normalize(f,e.array))),t===Ge.FLOAT?h.setFloat32(u,f,!0):t===Ge.INT?h.setInt32(u,f,!0):t===Ge.UNSIGNED_INT?h.setUint32(u,f,!0):t===Ge.SHORT?h.setInt16(u,f,!0):t===Ge.UNSIGNED_SHORT?h.setUint16(u,f,!0):t===Ge.BYTE?h.setInt8(u,f):t===Ge.UNSIGNED_BYTE&&h.setUint8(u,f),u+=o}u%l!==0&&(u+=l-u%l)}const d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(d.target=r),r===Ge.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=c,a.bufferViews.push(d),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const a=Pa(r.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,i(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,i){const r=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let o;if(e.array.constructor===Float32Array)o=Ge.FLOAT;else if(e.array.constructor===Int32Array)o=Ge.INT;else if(e.array.constructor===Uint32Array)o=Ge.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=Ge.SHORT;else if(e.array.constructor===Uint16Array)o=Ge.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=Ge.BYTE;else if(e.array.constructor===Uint8Array)o=Ge.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;const l=lx(e,n,i);let c;t!==void 0&&(c=e===t.index?Ge.ELEMENT_ARRAY_BUFFER:Ge.ARRAY_BUFFER);const h=this.processBufferView(e,o,n,i,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:o,count:i,max:l.max,min:l.min,type:a[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,i="image/png"){if(e!==null){const r=this,a=r.cache,o=r.json,l=r.options,c=r.pending;a.images.has(e)||a.images.set(e,{});const h=a.images.get(e),u=i+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];o.images||(o.images=[]);const d={mimeType:i},p=Vc();p.width=Math.min(e.width,l.maxTextureSize),p.height=Math.min(e.height,l.maxTextureSize);const g=p.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,p.height),g.scale(1,-1)),e.data!==void 0){t!==jt&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const f=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<f.length;m+=4)f[m+0]=e.data[m+0],f[m+1]=e.data[m+1],f[m+2]=e.data[m+2],f[m+3]=e.data[m+3];g.putImageData(new ImageData(f,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,p.width,p.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(cx(p,i).then(f=>r.processBufferViewImage(f)).then(f=>{d.bufferView=f})):d.uri=ch.getDataURL(p,i);const _=o.images.push(d)-1;return h[u]=_,_}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:Kt[e.magFilter],minFilter:Kt[e.minFilter],wrapS:Kt[e.wrapS],wrapT:Kt[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,i=this.cache,r=this.json;if(i.textures.has(e))return i.textures.get(e);r.textures||(r.textures=[]),e instanceof xa&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let a=e.userData.mimeType;a==="image/webp"&&(a="image/png");const o={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,a)};e.name&&(o.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,o)});const l=r.textures.push(o)-1;return i.textures.set(e,l),l}async processMaterialAsync(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(gs(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=0,i.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const o=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(o),texCoord:o.channel};this.applyTextureTransform(l,o),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const o={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),i.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){const o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),i.emissiveTexture=c}}if(e.normalMap){const o={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),i.normalTexture=o}if(e.aoMap){const o={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),i.occlusionTexture=o}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===en&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),await this._invokeAllAsync(async function(o){o.writeMaterialAsync&&await o.writeMaterialAsync(e,i)});const a=n.materials.push(i)-1;return t.materials.set(e,a),a}async processMeshAsync(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let E=0,C=e.material.length;E<C;E++)i.push(e.material[E].uuid);else i.push(e.material.uuid);const r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);const a=e.geometry;let o;e.isLineSegments?o=Ge.LINES:e.isLineLoop?o=Ge.LINE_LOOP:e.isLine?o=Ge.LINE_STRIP:e.isPoints?o=Ge.POINTS:o=e.material.wireframe?Ge.LINES:Ge.TRIANGLES;const l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},p=a.getAttribute("normal");p!==void 0&&!this.isNormalizedNormalAttribute(p)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(p)));let g=null;for(let E in a.attributes){if(E.slice(0,5)==="morph")continue;const C=a.attributes[E];if(E=d[E]||E.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(E)||(E="_"+E),t.attributes.has(this.getUID(C))){c[E]=t.attributes.get(this.getUID(C));continue}g=null;const S=C.array;E==="JOINTS_0"&&!(S instanceof Uint16Array)&&!(S instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new pt(new Uint16Array(S),C.itemSize,C.normalized)):(S instanceof Uint32Array||S instanceof Int32Array)&&!E.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${E}" converted to type FLOAT.`),g=Cr.Utils.toFloat32BufferAttribute(C));const I=this.processAccessor(g||C,a);I!==null&&(E.startsWith("_")||this.detectMeshQuantization(E,C),c[E]=I,t.attributes.set(this.getUID(C),I))}if(p!==void 0&&a.setAttribute("normal",p),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const E=[],C=[],x={};if(e.morphTargetDictionary!==void 0)for(const S in e.morphTargetDictionary)x[e.morphTargetDictionary[S]]=S;for(let S=0;S<e.morphTargetInfluences.length;++S){const I={};let v=!1;for(const M in a.morphAttributes){if(M!=="position"&&M!=="normal"){v||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),v=!0);continue}const T=a.morphAttributes[M][S],L=M.toUpperCase(),P=a.attributes[M];if(t.attributes.has(this.getUID(T,!0))){I[L]=t.attributes.get(this.getUID(T,!0));continue}const z=T.clone();if(!a.morphTargetsRelative)for(let U=0,V=T.count;U<V;U++)for(let k=0;k<T.itemSize;k++)k===0&&z.setX(U,T.getX(U)-P.getX(U)),k===1&&z.setY(U,T.getY(U)-P.getY(U)),k===2&&z.setZ(U,T.getZ(U)-P.getZ(U)),k===3&&z.setW(U,T.getW(U)-P.getW(U));I[L]=this.processAccessor(z,a),t.attributes.set(this.getUID(P,!0),I[L])}u.push(I),E.push(e.morphTargetInfluences[S]),e.morphTargetDictionary!==void 0&&C.push(x[S])}l.weights=E,C.length>0&&(l.extras={},l.extras.targetNames=C)}const _=Array.isArray(e.material);if(_&&a.groups.length===0)return null;let f=!1;if(_&&a.index===null){const E=[];for(let C=0,x=a.attributes.position.count;C<x;C++)E[C]=C;a.setIndex(E),f=!0}const m=_?e.material:[e.material],b=_?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let E=0,C=b.length;E<C;E++){const x={mode:o,attributes:c};if(this.serializeUserData(a,x),u.length>0&&(x.targets=u),a.index!==null){let I=this.getUID(a.index);(b[E].start!==void 0||b[E].count!==void 0)&&(I+=":"+b[E].start+":"+b[E].count),t.attributes.has(I)?x.indices=t.attributes.get(I):(x.indices=this.processAccessor(a.index,a,b[E].start,b[E].count),t.attributes.set(I,x.indices)),x.indices===null&&delete x.indices}const S=await this.processMaterialAsync(m[b[E].materialIndex]);S!==null&&(x.material=S),h.push(x)}f===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(E){E.writeMesh&&E.writeMesh(e,l)});const A=n.meshes.push(l)-1;return t.meshes.set(r,A),A}detectMeshQuantization(e,t){if(this.extensionsUsed[La])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const i=e.split("_",1)[0];Bc[i]&&Bc[i].includes(n)&&(this.extensionsUsed[La]=!0,this.extensionsRequired[La]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:br.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=Cr.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,a=[],o=[];for(let c=0;c<r.length;++c){const h=r[c],u=$e.parseTrackName(h.name);let d=$e.findNode(t,u.nodeName);const p=Oc[u.propertyName];if(u.objectName==="bones"&&(d.isSkinnedMesh===!0?d=d.skeleton.getBoneByName(u.objectIndex):d=void 0),!d||!p){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}const g=1;let _=h.values.length/h.times.length;p===Oc.morphTargetInfluences&&(_/=d.morphTargetInfluences.length);let f;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(f="CUBICSPLINE",_/=3):h.getInterpolation()===Ms?f="STEP":f="LINEAR",o.push({input:this.processAccessor(new pt(h.times,g)),output:this.processAccessor(new pt(h.values,_)),interpolation:f}),a.push({sampler:o.length-1,target:{node:i.get(d),path:p}})}const l={name:e.name||"clip_"+n.animations.length,samplers:o,channels:a};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const a=e.skeleton.bones[0];if(a===void 0)return null;const o=[],l=new Float32Array(r.bones.length*16),c=new ze;for(let u=0;u<r.bones.length;++u)o.push(n.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new pt(l,16)),joints:o,skeleton:n.get(a)}),i.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const o=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();gs(o,[0,0,0,1])||(r.rotation=o),gs(l,[0,0,0])||(r.translation=l),gs(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),ox(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const o=await this.processMeshAsync(e);o!==null&&(r.mesh=o)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);const a=t.nodes.push(r)-1;if(i.set(e,a),e.children.length>0){const o=[];for(let l=0,c=e.children.length;l<c;l++){const h=e.children[l];if(h.visible||n.onlyVisible===!1){const u=await this.processNodeAsync(h);u!==null&&o.push(u)}}o.length>0&&(r.children=o)}return await this._invokeAllAsync(function(o){o.writeNode&&o.writeNode(e,r)}),a}async processSceneAsync(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const r=[];for(let a=0,o=e.children.length;a<o;a++){const l=e.children[a];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}async processObjectsAsync(e){const t=new ws;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof ws?await this.processSceneAsync(e[i]):n.push(e[i]);n.length>0&&await this.processObjectsAsync(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);await this._invokeAllAsync(function(i){i.afterParse&&i.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}}class ux{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,i=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(1-e.penumbra)*e.angle,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);const o=i.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}}class dx{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class fx{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const a={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(a,e.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const a={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){const a={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(a.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(a,e.clearcoatNormalMap),r.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class px{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const i=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class mx{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const a={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(a,e.iridescenceMap),r.iridescenceTexture=a}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const a={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(a,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class gx{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const a={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(a,e.transmissionMap),r.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class _x{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const a={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(a,e.thicknessMap),r.thicknessTexture=a}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class xx{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const i=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class vx{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(tx)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.specularIntensityMap){const a={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(a,e.specularIntensityMap),r.specularTexture=a}if(e.specularColorMap){const a={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(a,e.specularColorMap),r.specularColorTexture=a}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class yx{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.sheenRoughnessMap){const a={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(a,e.sheenRoughnessMap),r.sheenRoughnessTexture=a}if(e.sheenColorMap){const a={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(a,e.sheenColorMap),r.sheenColorTexture=a}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Mx{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.anisotropyMap){const a={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(a,e.anisotropyMap),r.anisotropyTexture=a}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class bx{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const i=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Sx{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.bumpMap){const a={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(a,e.bumpMap),r.bumpTexture=a}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Ex{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,i=e,r=new Float32Array(i.count*3),a=new Float32Array(i.count*4),o=new Float32Array(i.count*3),l=new ze,c=new N,h=new Zt,u=new N;for(let p=0;p<i.count;p++)i.getMatrixAt(p,l),l.decompose(c,h,u),c.toArray(r,p*3),h.toArray(a,p*4),u.toArray(o,p*3);const d={TRANSLATION:n.processAccessor(new pt(r,3)),ROTATION:n.processAccessor(new pt(a,4)),SCALE:n.processAccessor(new pt(o,3))};i.instanceColor&&(d._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}Cr.Utils={insertKeyframe:function(s,e){const n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),a=s.createInterpolant(new s.ValueBufferType(n));let o;if(s.times.length===0){i[0]=e;for(let l=0;l<n;l++)r[l]=0;o=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(a.evaluate(e),0),r.set(s.values,n),o=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(a.evaluate(e),s.values.length),o=i.length-1}else for(let l=0;l<s.times.length;l++){if(Math.abs(s.times[l]-e)<.001)return l;if(s.times[l]<e&&s.times[l+1]>e){i.set(s.times.slice(0,l+1),0),i[l+1]=e,i.set(s.times.slice(l+1),l+2),r.set(s.values.slice(0,(l+1)*n),0),r.set(a.evaluate(e),(l+1)*n),r.set(s.values.slice((l+1)*n),(l+2)*n),o=l+1;break}}return s.times=i,s.values=r,o},mergeMorphTargetTracks:function(s,e){const t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let a=i[r];const o=$e.parseTrackName(a.name),l=$e.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(xr)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let u;if(n[l.uuid]===void 0){u=a.clone();const p=new u.ValueBufferType(c*u.times.length);for(let g=0;g<u.times.length;g++)p[g*c+h]=u.values[g];u.name=(o.nodeName||"")+".morphTargetInfluences",u.values=p,n[l.uuid]=u,t.push(u);continue}const d=a.createInterpolant(new a.ValueBufferType(1));u=n[l.uuid];for(let p=0;p<u.times.length;p++)u.values[p*c+h]=d.evaluate(u.times[p]);for(let p=0;p<a.times.length;p++){const g=this.insertKeyframe(u,a.times[p]);u.values[g*c+h]=a.values[p]}}return s.tracks=t,s},toFloat32BufferAttribute:function(s){const e=new pt(new Float32Array(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return e.array.set(s.array),e;for(let t=0,n=s.count;t<n;t++)for(let i=0;i<s.itemSize;i++)e.setComponent(t,i,s.getComponent(t,i));return e}};function rr(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Da={exports:{}},Hc;function wx(){return Hc||(Hc=1,(function(s,e){(function(t){s.exports=t()})(function(){return(function t(n,i,r){function a(c,h){if(!i[c]){if(!n[c]){var u=typeof rr=="function"&&rr;if(!h&&u)return u(c,!0);if(o)return o(c,!0);var d=new Error("Cannot find module '"+c+"'");throw d.code="MODULE_NOT_FOUND",d}var p=i[c]={exports:{}};n[c][0].call(p.exports,function(g){var _=n[c][1][g];return a(_||g)},p,p.exports,t,n,i,r)}return i[c].exports}for(var o=typeof rr=="function"&&rr,l=0;l<r.length;l++)a(r[l]);return a})({1:[function(t,n,i){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}n.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(h){if(!o(h)||h<0||isNaN(h))throw TypeError("n must be a positive number");return this._maxListeners=h,this},r.prototype.emit=function(h){var u,d,p,g,_,f;if(this._events||(this._events={}),h==="error"&&(!this._events.error||l(this._events.error)&&!this._events.error.length)){if(u=arguments[1],u instanceof Error)throw u;var m=new Error('Uncaught, unspecified "error" event. ('+u+")");throw m.context=u,m}if(d=this._events[h],c(d))return!1;if(a(d))switch(arguments.length){case 1:d.call(this);break;case 2:d.call(this,arguments[1]);break;case 3:d.call(this,arguments[1],arguments[2]);break;default:g=Array.prototype.slice.call(arguments,1),d.apply(this,g)}else if(l(d))for(g=Array.prototype.slice.call(arguments,1),f=d.slice(),p=f.length,_=0;_<p;_++)f[_].apply(this,g);return!0},r.prototype.addListener=function(h,u){var d;if(!a(u))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",h,a(u.listener)?u.listener:u),this._events[h]?l(this._events[h])?this._events[h].push(u):this._events[h]=[this._events[h],u]:this._events[h]=u,l(this._events[h])&&!this._events[h].warned&&(c(this._maxListeners)?d=r.defaultMaxListeners:d=this._maxListeners,d&&d>0&&this._events[h].length>d&&(this._events[h].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[h].length),typeof console.trace=="function"&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(h,u){if(!a(u))throw TypeError("listener must be a function");var d=!1;function p(){this.removeListener(h,p),d||(d=!0,u.apply(this,arguments))}return p.listener=u,this.on(h,p),this},r.prototype.removeListener=function(h,u){var d,p,g,_;if(!a(u))throw TypeError("listener must be a function");if(!this._events||!this._events[h])return this;if(d=this._events[h],g=d.length,p=-1,d===u||a(d.listener)&&d.listener===u)delete this._events[h],this._events.removeListener&&this.emit("removeListener",h,u);else if(l(d)){for(_=g;_-- >0;)if(d[_]===u||d[_].listener&&d[_].listener===u){p=_;break}if(p<0)return this;d.length===1?(d.length=0,delete this._events[h]):d.splice(p,1),this._events.removeListener&&this.emit("removeListener",h,u)}return this},r.prototype.removeAllListeners=function(h){var u,d;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[h]&&delete this._events[h],this;if(arguments.length===0){for(u in this._events)u!=="removeListener"&&this.removeAllListeners(u);return this.removeAllListeners("removeListener"),this._events={},this}if(d=this._events[h],a(d))this.removeListener(h,d);else if(d)for(;d.length;)this.removeListener(h,d[d.length-1]);return delete this._events[h],this},r.prototype.listeners=function(h){var u;return!this._events||!this._events[h]?u=[]:a(this._events[h])?u=[this._events[h]]:u=this._events[h].slice(),u},r.prototype.listenerCount=function(h){if(this._events){var u=this._events[h];if(a(u))return 1;if(u)return u.length}return 0},r.listenerCount=function(h,u){return h.listenerCount(u)};function a(h){return typeof h=="function"}function o(h){return typeof h=="number"}function l(h){return typeof h=="object"&&h!==null}function c(h){return h===void 0}},{}],2:[function(t,n,i){var r,a,o,l,c;c=navigator.userAgent.toLowerCase(),l=navigator.platform.toLowerCase(),r=c.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],o=r[1]==="ie"&&document.documentMode,a={name:r[1]==="version"?r[3]:r[1],version:o||parseFloat(r[1]==="opera"&&r[4]?r[4]:r[2]),platform:{name:c.match(/ip(?:ad|od|hone)/)?"ios":(c.match(/(?:webos|android)/)||l.match(/mac|win|linux/)||["other"])[0]}},a[a.name]=!0,a[a.name+parseInt(a.version,10)]=!0,a.platform[a.platform.name]=!0,n.exports=a},{}],3:[function(t,n,i){var r,a,o,l=function(d,p){for(var g in p)c.call(p,g)&&(d[g]=p[g]);function _(){this.constructor=d}return _.prototype=p.prototype,d.prototype=new _,d.__super__=p.prototype,d},c={}.hasOwnProperty,h=[].indexOf||function(d){for(var p=0,g=this.length;p<g;p++)if(p in this&&this[p]===d)return p;return-1},u=[].slice;r=t("events").EventEmitter,o=t("./browser.coffee"),a=(function(d){var p,g;l(_,d),p={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},g={delay:500,copy:!1};function _(f){var m,b,A;this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(f);for(b in p)A=p[b],(m=this.options)[b]==null&&(m[b]=A)}return _.prototype.setOption=function(f,m){if(this.options[f]=m,this._canvas!=null&&(f==="width"||f==="height"))return this._canvas[f]=m},_.prototype.setOptions=function(f){var m,b,A;b=[];for(m in f)c.call(f,m)&&(A=f[m],b.push(this.setOption(m,A)));return b},_.prototype.addFrame=function(f,m){var b,A;m==null&&(m={}),b={},b.transparent=this.options.transparent;for(A in g)b[A]=m[A]||g[A];if(this.options.width==null&&this.setOption("width",f.width),this.options.height==null&&this.setOption("height",f.height),typeof ImageData<"u"&&ImageData!==null&&f instanceof ImageData)b.data=f.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!==null&&f instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!==null&&f instanceof WebGLRenderingContext)m.copy?b.data=this.getContextData(f):b.context=f;else if(f.childNodes!=null)m.copy?b.data=this.getImageData(f):b.image=f;else throw new Error("Invalid image");return this.frames.push(b)},_.prototype.render=function(){var f,m,b;if(this.running)throw new Error("Already running");if(this.options.width==null||this.options.height==null)throw new Error("Width and height must be set prior to rendering");if(this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(function(){var A,E,C;for(C=[],A=0,E=this.frames.length;0<=E?A<E:A>E;0<=E?++A:--A)C.push(null);return C}).call(this),m=this.spawnWorkers(),this.options.globalPalette===!0)this.renderNextFrame();else for(f=0,b=m;0<=b?f<b:f>b;0<=b?++f:--f)this.renderNextFrame();return this.emit("start"),this.emit("progress",0)},_.prototype.abort=function(){for(var f;f=this.activeWorkers.shift(),f!=null;)this.log("killing active worker"),f.terminate();return this.running=!1,this.emit("abort")},_.prototype.spawnWorkers=function(){var f,m,b;return f=Math.min(this.options.workers,this.frames.length),(function(){b=[];for(var A=m=this.freeWorkers.length;m<=f?A<f:A>f;m<=f?A++:A--)b.push(A);return b}).apply(this).forEach((function(A){return function(E){var C;return A.log("spawning worker "+E),C=new Worker(A.options.workerScript),C.onmessage=function(x){return A.activeWorkers.splice(A.activeWorkers.indexOf(C),1),A.freeWorkers.push(C),A.frameFinished(x.data)},A.freeWorkers.push(C)}})(this)),f},_.prototype.frameFinished=function(f){var m,b;if(this.log("frame "+f.index+" finished - "+this.activeWorkers.length+" active"),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[f.index]=f,this.options.globalPalette===!0&&(this.options.globalPalette=f.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(m=1,b=this.freeWorkers.length;1<=b?m<b:m>b;1<=b?++m:--m)this.renderNextFrame();return h.call(this.imageParts,null)>=0?this.renderNextFrame():this.finishRendering()},_.prototype.finishRendering=function(){var f,m,b,A,E,C,x,S,I,v,M,T,L,P,z,U;for(S=0,P=this.imageParts,E=0,I=P.length;E<I;E++)m=P[E],S+=(m.data.length-1)*m.pageSize+m.cursor;for(S+=m.pageSize-m.cursor,this.log("rendering finished - filesize "+Math.round(S/1e3)+"kb"),f=new Uint8Array(S),T=0,z=this.imageParts,C=0,v=z.length;C<v;C++)for(m=z[C],U=m.data,b=x=0,M=U.length;x<M;b=++x)L=U[b],f.set(L,T),b===m.data.length-1?T+=m.cursor:T+=m.pageSize;return A=new Blob([f],{type:"image/gif"}),this.emit("finished",A,f)},_.prototype.renderNextFrame=function(){var f,m,b;if(this.freeWorkers.length===0)throw new Error("No free workers");if(!(this.nextFrame>=this.frames.length))return f=this.frames[this.nextFrame++],b=this.freeWorkers.shift(),m=this.getTask(f),this.log("starting frame "+(m.index+1)+" of "+this.frames.length),this.activeWorkers.push(b),b.postMessage(m)},_.prototype.getContextData=function(f){return f.getImageData(0,0,this.options.width,this.options.height).data},_.prototype.getImageData=function(f){var m;return this._canvas==null&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),m=this._canvas.getContext("2d"),m.setFill=this.options.background,m.fillRect(0,0,this.options.width,this.options.height),m.drawImage(f,0,0),this.getContextData(m)},_.prototype.getTask=function(f){var m,b;if(m=this.frames.indexOf(f),b={index:m,last:m===this.frames.length-1,delay:f.delay,transparent:f.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:o.name==="chrome"},f.data!=null)b.data=f.data;else if(f.context!=null)b.data=this.getContextData(f.context);else if(f.image!=null)b.data=this.getImageData(f.image);else throw new Error("Invalid frame");return b},_.prototype.log=function(){var f;if(f=1<=arguments.length?u.call(arguments,0):[],!!this.options.debug)return console.log.apply(console,f)},_})(r),n.exports=a},{"./browser.coffee":2,events:1}]},{},[3])(3)})})(Da)),Da.exports}var Tx=wx();const jh=C_(Tx),Kh="/muonline-bmd-viewer/app/assets/gif.worker-CjkyQP34.js";function Ct(){return window.electronAPI?.isElectron===!0}function fr(s){return!Ct()||!window.electronAPI?null:window.electronAPI.getFilePath(s)}async function Ax(s){return!Ct()||!window.electronAPI?(console.warn("openFileDialog is only available in Electron"),null):window.electronAPI.openFile({filters:s})}async function Zh(){return!Ct()||!window.electronAPI?(console.warn("openDirectoryDialog is only available in Electron"),null):window.electronAPI.openDirectory()}async function Cs(s){return!Ct()||!window.electronAPI?(console.warn("readFileFromPath is only available in Electron"),null):window.electronAPI.readFile(s)}async function Jh(s,e){return!Ct()||!window.electronAPI?(console.warn("searchTextures is only available in Electron"),{}):window.electronAPI.searchTextures(s,e)}function Io(s,e){const t=new Blob([e]);return new File([t],s)}async function Lo(s,e){if(!Ct()||!window.electronAPI)return console.warn("autoSearchTextures is only available in Electron"),{};if(!s||e.length===0)return console.warn("autoSearchTextures: invalid params",{bmdFilePath:s,requiredTextures:e}),{};const t=Math.max(s.lastIndexOf("/"),s.lastIndexOf("\\")),n=s.substring(0,t);let i=await window.electronAPI.searchTextures(n,e);const r=Object.keys(i).length,a=e.length;if(r<a){console.log(`[Texture Search] Found ${r}/${a} textures in current directory, searching parent directory...`);const o=Math.max(n.lastIndexOf("/"),n.lastIndexOf("\\"));if(o>0){const l=n.substring(0,o),c=e.filter(h=>{const u=h.split(/[\\/]/).pop().toLowerCase().replace(/\.[^.]+$/,"");return!i[u]});if(c.length>0){const h=await window.electronAPI.searchTextures(l,c);i={...i,...h};const u=Object.keys(i).length;console.log(`[Texture Search] After parent search: ${u}/${a} textures found`)}}}return i}const Gc=Object.freeze(Object.defineProperty({__proto__:null,autoSearchTextures:Lo,createFileFromElectronData:Io,getFilePathFromFile:fr,isElectron:Ct,openDirectoryDialog:Zh,openFileDialog:Ax,readFileFromPath:Cs,searchTextures:Jh},Symbol.toStringTag,{value:"Module"})),Wc=new Uint8Array([252,207,171]);function Cx(s){for(let e=0;e<s.length;e++)s[e]^=Wc[e%Wc.length]}function Ua(s,e,t){if(e+t>s.byteLength)return"";const n=new Uint8Array(s.buffer,s.byteOffset+e,t),i=n.indexOf(0),r=i>=0?n.subarray(0,i):n;return new TextDecoder("windows-1252",{fatal:!1}).decode(r).trim()}function Xc(s){return s.replace(/\\/g,"/").replace(/^\/+/,"")}function Rx(s,e){const t=Xc(s.trim()),n=Xc(e.trim());return n?!t||n.includes("/")?n:t.endsWith("/")?`${t}${n}`:`${t}/${n}`:""}function Ix(s){const e=new DataView(s);if(e.byteLength<8)return[];const t=e.getInt32(0,!0);if(t<=0)return[];const n=Math.floor((e.byteLength-8)/t);if(n<=0)return[];const i=[];let r=4;for(let a=0;a<t&&r+n<=e.byteLength-4;a++){const o=new Uint8Array(s,r,n),l=new Uint8Array(o);Cx(l);const c=new DataView(l.buffer,l.byteOffset,l.byteLength),h=c.getInt32(0,!0),u=c.getUint16(4,!0),d=c.getUint16(6,!0),p=Ua(c,8,260),g=Ua(c,268,260),_=Ua(c,528,64),f=c.getUint8(602),m=c.getUint8(603),b=Rx(p,g);i.push({index:h,group:u,id:d,modelFolder:p,modelName:g,itemName:_,modelPath:b,width:f,height:m}),r+=n}return i}class Qh extends Hi{skinned;size;_vertex=new N;_skinnedVertex=new N;_normal=new N;_indices;constructor(e,t,n){const r=e.geometry.getAttribute("position"),a=r?r.count:0,l=a>0?Math.min(a,2e3):0,c=new Uint32Array(l||0);for(let p=0;p<l;p++)c[p]=Math.floor(p/l*a);const h=new Float32Array(c.length*2*3),u=new It;u.setAttribute("position",new pt(h,3));const d=new li({color:n,toneMapped:!1});super(u,d),this.skinned=e,this.size=t,this._indices=c,this.matrixAutoUpdate=!1}update(){const e=this.skinned,t=e.geometry,n=t.getAttribute("position"),i=t.getAttribute("normal"),r=this.geometry.getAttribute("position");if(!n||!i||!r||!this._indices.length)return;e.updateMatrixWorld(!0);const a=e.matrixWorld,o=new Ue().getNormalMatrix(a),l=this.size,c=this._vertex,h=this._skinnedVertex,u=this._normal;for(let d=0;d<this._indices.length;d++){const p=this._indices[d];c.fromBufferAttribute(n,p),h.copy(c),e.applyBoneTransform(p,h),h.applyMatrix4(a),u.fromBufferAttribute(i,p),u.applyMatrix3(o).normalize().multiplyScalar(l);const g=d*2;r.setXYZ(g,h.x,h.y,h.z),r.setXYZ(g+1,h.x+u.x,h.y+u.y,h.z+u.z)}r.needsUpdate=!0,this.matrixWorld.identity()}}class ai{static disposeTexture(e){e&&e.dispose()}static disposeTextureCache(e){e.forEach(t=>{t.dispose()}),e.clear()}static disposeMaterial(e){if(!e)return;const t=e;t.map instanceof ut&&this.disposeTexture(t.map),t.normalMap instanceof ut&&this.disposeTexture(t.normalMap),t.alphaMap instanceof ut&&this.disposeTexture(t.alphaMap),t.emissiveMap instanceof ut&&this.disposeTexture(t.emissiveMap),t.roughnessMap instanceof ut&&this.disposeTexture(t.roughnessMap),t.metalnessMap instanceof ut&&this.disposeTexture(t.metalnessMap),e.dispose()}static disposeGeometry(e){e&&e.dispose()}static disposeObject3D(e){e&&(e.traverse(t=>{if(t.geometry&&this.disposeGeometry(t.geometry),t.material){const n=t.material;Array.isArray(n)?n.forEach(i=>this.disposeMaterial(i)):this.disposeMaterial(n)}}),e.parent&&e.parent.remove(e))}static disposeShaderMaterials(e){e.forEach(t=>t.dispose()),e.clear()}static disposeMixer(e){return e&&e.stopAllAction(),null}static disposeObjectArray(e){e.forEach(t=>this.disposeObject3D(t)),e.length=0}}const Lx=[".jpg",".jpeg",".png",".tga",".ozj",".ozt"],Px=[{value:1,label:"Dark Wizard"},{value:201,label:"Soul Master"},{value:301,label:"Grand Master"},{value:401,label:"Soul Wizard"},{value:2,label:"Dark Knight"},{value:202,label:"Blade Knight"},{value:302,label:"Blade Master"},{value:402,label:"Dragon Knight"},{value:3,label:"Fairy Elf"},{value:203,label:"Muse Elf"},{value:303,label:"High Elf"},{value:403,label:"Noble Elf"},{value:4,label:"Magic Gladiator"},{value:304,label:"Duel Master"},{value:404,label:"Magic Knight"},{value:5,label:"Dark Lord"},{value:305,label:"Lord Emperor"},{value:405,label:"Empire Lord"},{value:6,label:"Summoner"},{value:206,label:"Bloody Summoner"},{value:306,label:"Dimension Master"},{value:406,label:"Dimension Summoner"},{value:7,label:"Rage Fighter"},{value:307,label:"Fist Master"},{value:407,label:"Fist Blazer"},{value:8,label:"Glow Lancer"},{value:308,label:"Mirage Lancer"},{value:408,label:"Shining Lancer"},{value:9,label:"Rune Mage"},{value:209,label:"Rune Spell Master"},{value:309,label:"Grand Rune Master"},{value:409,label:"Majestic Rune Wizard"},{value:10,label:"Slayer"},{value:210,label:"Royal Slayer"},{value:310,label:"Master Slayer"},{value:410,label:"Slaughterer"},{value:11,label:"Gun Crusher"},{value:211,label:"Gun Breaker"},{value:311,label:"Master Gun Breaker"},{value:411,label:"Heist Gun Crasher"},{value:12,label:"White Wizard"},{value:212,label:"Light Master"},{value:312,label:"Shine Wizard"},{value:412,label:"Shine Master"},{value:13,label:"Mage"},{value:213,label:"Wo Mage"},{value:313,label:"Arch Mage"},{value:413,label:"Mystic Mage"},{value:14,label:"Illusion Knight"},{value:214,label:"Mirage Knight"},{value:314,label:"Illusion Master"},{value:414,label:"Mystic Knight"},{value:15,label:"Alchemist"},{value:215,label:"Alchemic Master"},{value:315,label:"Alchemic Force"},{value:415,label:"Creator"}];function Ai(s){let e=s.replace(/\\/g,"/").replace(/^\/+/,"");return e.toLowerCase().startsWith("data/")&&(e=e.slice(5)),e.toLowerCase()}function qc(s){return(s.replace(/\\/g,"/").split("/").pop()||"").toLowerCase().replace(/\.[^.]+$/,"")}function us(s){const e=s.toLowerCase(),t=e.lastIndexOf(".");return t>=0?e.slice(t):""}function Dx(s){return s>=400?s-400:s>=300?s-300:s>=200?s-200:s}function Ux(s){return s.toString().padStart(2,"0")}class tl{scene;camera;renderer;controls;clock=new Ch;ambientLight;hemisphereLight;directionalLight;rimLight;mixer=null;currentAction=null;bmdLoader=new qh;textureLoader=new Eh;dataFiles=new Map;textureIndex=new Map;dataRootPath=null;itemDefinitions=[];itemByKey=new Map;textureCache=new Map;electronTextureMap=new Map;missingDataPaths=new Set;characterRoot=null;baseSkeleton=null;baseBindMatrix=null;characterOffset=new N;characterHeightOffset=80;hasFramed=!1;lastClassValue=null;currentClassValue=null;playerAnimations=null;animationSpeed=.2;selectedAnimationIndex=null;characterScale=1;itemLevel=0;itemGlowColor=new Te(1,1,1);itemIsExcellent=!1;itemIsAncient=!1;itemExcellentIntensity=1;itemShaderMaterials=new Set;skeletonHelper=null;boundingBoxHelper=null;axesHelper=null;normalHelpers=[];normalsVisible=!1;normalsUpdateCounter=0;isRecordingGif=!1;meshRefs=[];gridHelper=null;isActive=!0;isAutoRotating=!0;userIsInteracting=!1;buildToken=0;containerEl;dataDropZone;dataInput;dataStatus;classSelect;helmSelect;armorSelect;pantsSelect;glovesSelect;bootsSelect;leftWeaponSelect;rightWeaponSelect;wingSelect;animationSelect;autoRotateCheckbox;speedSlider;speedValueEl;scaleSlider;scaleValueEl;itemLevelSlider;itemLevelValueEl;itemExcellentCheckbox;itemAncientCheckbox;itemExcellentIntensitySlider;itemExcellentIntensityValueEl;exportGifBtn;gifWidthInput;gifHeightInput;gifDelayInput;gifFrameMultiplierInput;blendingBox;blendingList;showSkeletonCheckbox;wireframeCheckbox;showBoundingBoxCheckbox;showAxesCheckbox;showNormalsCheckbox;bgColorInput;brightnessSlider;brightnessLabel;statusEl;constructor(){this.initThree(),this.initUI(),this.animate()}setActive(e){this.isActive=e,e&&this.refreshViewport()}initThree(){const e=document.getElementById("character-canvas-container");if(!e)throw new Error("#character-canvas-container not found");this.containerEl=e,this.scene=new ws,this.scene.background=new Te(725794),this.scene.fog=new Br(725794,.0013),this.camera=new Gt(75,e.clientWidth/e.clientHeight,.1,1e4),this.camera.position.set(0,200,400),this.renderer=new kh({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=At,this.renderer.toneMapping=Pr,this.renderer.toneMappingExposure=1.14,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Po,this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement);const t=new Ar(this.renderer),n=new Hh;this.scene.environment=t.fromScene(n).texture,n.dispose(),t.dispose(),window.addEventListener("resize",()=>{this.refreshViewport()}),this.controls=new Vh(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.target.set(0,90,0),this.controls.addEventListener("start",()=>{this.userIsInteracting=!0}),this.controls.addEventListener("end",()=>{this.userIsInteracting=!1}),this.ambientLight=new Ah(13493247,.42),this.hemisphereLight=new wh(9033727,1120807,.52),this.directionalLight=new Tr(16777215,1.7),this.directionalLight.position.set(180,260,140),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.set(2048,2048),this.directionalLight.shadow.radius=3,this.directionalLight.shadow.bias=-4e-4,this.directionalLight.shadow.camera.near=10,this.directionalLight.shadow.camera.far=1400,this.directionalLight.shadow.camera.left=-360,this.directionalLight.shadow.camera.right=360,this.directionalLight.shadow.camera.top=360,this.directionalLight.shadow.camera.bottom=-360,this.rimLight=new Tr(7653887,.72),this.rimLight.position.set(-160,130,-210),this.rimLight.castShadow=!1,this.scene.add(this.ambientLight,this.hemisphereLight,this.directionalLight,this.rimLight,this.directionalLight.target),this.gridHelper=new Lh(600,24,4152196,1847113);const i=this.gridHelper.material;Array.isArray(i)?i.forEach(r=>{r.transparent=!0,r.opacity=.35,r.depthWrite=!1}):(i.transparent=!0,i.opacity=.35,i.depthWrite=!1),this.scene.add(this.gridHelper)}initUI(){this.dataDropZone=document.getElementById("data-drop-zone"),this.dataInput=document.getElementById("data-folder-input"),this.dataStatus=document.getElementById("data-folder-status"),this.classSelect=document.getElementById("character-class-select"),this.helmSelect=document.getElementById("character-helm-select"),this.armorSelect=document.getElementById("character-armor-select"),this.pantsSelect=document.getElementById("character-pants-select"),this.glovesSelect=document.getElementById("character-gloves-select"),this.bootsSelect=document.getElementById("character-boots-select"),this.leftWeaponSelect=document.getElementById("character-left-weapon-select"),this.rightWeaponSelect=document.getElementById("character-right-weapon-select"),this.wingSelect=document.getElementById("character-wing-select"),this.animationSelect=document.getElementById("character-animation-select"),this.autoRotateCheckbox=document.getElementById("character-auto-rotate"),this.speedSlider=document.getElementById("character-speed-slider"),this.speedValueEl=document.getElementById("character-speed-value"),this.scaleSlider=document.getElementById("character-scale-slider"),this.scaleValueEl=document.getElementById("character-scale-value"),this.itemLevelSlider=document.getElementById("character-item-level"),this.itemLevelValueEl=document.getElementById("character-item-level-value"),this.itemExcellentCheckbox=document.getElementById("character-item-excellent"),this.itemAncientCheckbox=document.getElementById("character-item-ancient"),this.itemExcellentIntensitySlider=document.getElementById("character-excellent-intensity"),this.itemExcellentIntensityValueEl=document.getElementById("character-excellent-intensity-value"),this.exportGifBtn=document.getElementById("character-export-gif-btn"),this.gifWidthInput=document.getElementById("character-gif-width-input"),this.gifHeightInput=document.getElementById("character-gif-height-input"),this.gifDelayInput=document.getElementById("character-gif-delay-input"),this.gifFrameMultiplierInput=document.getElementById("character-gif-frame-multiplier-input"),this.blendingBox=document.getElementById("character-blending-controls"),this.blendingList=document.getElementById("character-blending-container"),this.showSkeletonCheckbox=document.getElementById("character-show-skeleton"),this.wireframeCheckbox=document.getElementById("character-wireframe"),this.showBoundingBoxCheckbox=document.getElementById("character-show-bbox"),this.showAxesCheckbox=document.getElementById("character-show-axes"),this.showNormalsCheckbox=document.getElementById("character-show-normals"),this.bgColorInput=document.getElementById("character-bg-color"),this.brightnessSlider=document.getElementById("character-brightness-slider"),this.brightnessLabel=document.getElementById("character-brightness-label"),this.statusEl=document.getElementById("character-status"),this.autoRotateCheckbox.addEventListener("change",()=>{this.isAutoRotating=this.autoRotateCheckbox.checked}),this.autoRotateCheckbox.checked=!1,this.isAutoRotating=this.autoRotateCheckbox.checked,this.speedSlider.value=this.animationSpeed.toString(),this.speedValueEl.textContent=`${this.animationSpeed.toFixed(2)}x`,this.speedSlider.addEventListener("input",n=>{const i=parseFloat(n.target.value);this.speedValueEl.textContent=`${i.toFixed(2)}x`,this.setAnimationSpeed(i)}),this.setAnimationSpeed(this.animationSpeed),this.scaleSlider.value=this.characterScale.toString(),this.scaleValueEl.textContent=`${this.characterScale.toFixed(2)}x`,this.scaleSlider.addEventListener("input",n=>{const i=parseFloat(n.target.value);this.scaleValueEl.textContent=`${i.toFixed(2)}x`,this.setCharacterScale(i)}),this.itemLevelSlider.value=this.itemLevel.toString(),this.itemLevelValueEl.textContent=`+${this.itemLevel}`,this.itemLevelSlider.addEventListener("input",n=>{const i=parseInt(n.target.value,10)||0;this.itemLevel=Math.min(Math.max(i,0),15),this.itemLevelValueEl.textContent=`+${this.itemLevel}`,this.updateItemShaderParams()}),this.itemExcellentCheckbox.checked=!1,this.itemAncientCheckbox.checked=!1,this.itemExcellentCheckbox.addEventListener("change",()=>{this.itemIsExcellent=this.itemExcellentCheckbox.checked,this.updateItemShaderParams()}),this.itemAncientCheckbox.addEventListener("change",()=>{this.itemIsAncient=this.itemAncientCheckbox.checked,this.updateItemShaderParams()}),this.itemExcellentIntensitySlider.value=this.itemExcellentIntensity.toString(),this.itemExcellentIntensityValueEl.textContent=`${this.itemExcellentIntensity.toFixed(2)}x`,this.itemExcellentIntensitySlider.addEventListener("input",n=>{const i=parseFloat(n.target.value);this.itemExcellentIntensity=Math.min(Math.max(i,0),2.5),this.itemExcellentIntensityValueEl.textContent=`${this.itemExcellentIntensity.toFixed(2)}x`,this.updateItemShaderParams()}),this.exportGifBtn.addEventListener("click",()=>this.exportGif()),this.showSkeletonCheckbox.addEventListener("change",()=>{this.updateSkeletonHelperState()}),this.wireframeCheckbox.addEventListener("change",()=>{this.applyWireframeState()}),this.showBoundingBoxCheckbox.addEventListener("change",()=>{this.updateBoundingBoxHelperState()}),this.showAxesCheckbox.addEventListener("change",()=>{this.updateAxesHelperState()}),this.showNormalsCheckbox.addEventListener("change",()=>{this.updateNormalsHelpersState()}),this.bgColorInput.addEventListener("input",n=>{const i=n.target.value;this.setSceneBackground(i)}),this.setSceneBackground(this.bgColorInput.value||"#0b1322"),this.brightnessSlider.addEventListener("input",n=>{const i=parseFloat(n.target.value);this.brightnessLabel.textContent=`Brightness: ${i.toFixed(2)}×`,this.setBrightness(i)});const e=parseFloat(this.brightnessSlider.value)||2;this.brightnessLabel.textContent=`Brightness: ${e.toFixed(2)}×`,this.setBrightness(e),this.populateClassSelect(),this.bindSelectChanges(),((n,i)=>{n.addEventListener("click",()=>this.handleDataSelectClick(i)),n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>n.classList.remove("drag-over")),n.addEventListener("drop",r=>{r.preventDefault(),n.classList.remove("drag-over"),r.dataTransfer?.files&&r.dataTransfer.files.length>0&&this.loadDataFolder(Array.from(r.dataTransfer.files))}),i.addEventListener("change",r=>{const a=r.target.files;a?.length&&this.loadDataFolder(Array.from(a))})})(this.dataDropZone,this.dataInput)}populateClassSelect(){this.classSelect.innerHTML="";for(const e of Px){const t=document.createElement("option");t.value=e.value.toString(),t.textContent=e.label,this.classSelect.appendChild(t)}this.classSelect.value="1"}bindSelectChanges(){const e=()=>this.scheduleRebuild();this.classSelect.addEventListener("change",e),this.helmSelect.addEventListener("change",e),this.armorSelect.addEventListener("change",e),this.pantsSelect.addEventListener("change",e),this.glovesSelect.addEventListener("change",e),this.bootsSelect.addEventListener("change",e),this.leftWeaponSelect.addEventListener("change",e),this.rightWeaponSelect.addEventListener("change",e),this.wingSelect.addEventListener("change",e),this.animationSelect.addEventListener("change",()=>{const t=parseInt(this.animationSelect.value,10);Number.isNaN(t)||!this.characterRoot?.animations?.length||this.playAnimation(t)})}async handleDataSelectClick(e){if(Ct()){const t=await Zh();t&&this.loadDataFolder(t)}else e.click()}async loadDataFolder(e){if(this.dataStatus.textContent="Loading Data folder...",this.statusEl.textContent="Loading Data folder...",this.dataFiles.clear(),this.textureIndex.clear(),this.dataRootPath=null,this.electronTextureMap.clear(),this.missingDataPaths.clear(),this.playerAnimations=null,this.hasFramed=!1,this.lastClassValue=null,this.currentClassValue=null,this.characterOffset.set(0,0,0),typeof e=="string"){this.dataRootPath=e,await this.loadItemDatabase()?(this.dataStatus.textContent=`Loaded Data folder: ${e}`,this.statusEl.textContent="Item database loaded.",this.scheduleRebuild()):(this.dataStatus.textContent="Failed to load item.bmd from Data folder.",this.statusEl.textContent="Missing Data/Local/item.bmd");return}const t=e;if(!t.length){this.dataStatus.textContent="No files selected.";return}const i=(t[0].webkitRelativePath||t[0].name).split("/")[0];for(const a of t){const o=a.webkitRelativePath||a.name,l=o.startsWith(i+"/")?o.slice(i.length+1):o,c=Ai(l);this.dataFiles.set(c,a);const h=us(c);if(Lx.includes(h)){const u=qc(c),d=this.textureIndex.get(u)||[];d.push(c),this.textureIndex.set(u,d)}}await this.loadItemDatabase()?(this.dataStatus.textContent=`Loaded Data folder (${t.length} files)`,this.statusEl.textContent="Item database loaded.",this.scheduleRebuild()):(this.dataStatus.textContent="Failed to load item.bmd from Data folder.",this.statusEl.textContent="Missing Data/Local/item.bmd")}async loadItemDatabase(){const e=await this.readDataFile("Local/item.bmd");return e?(this.itemDefinitions=Ix(e.buffer).filter(t=>t.modelPath),this.itemByKey.clear(),this.itemDefinitions.forEach(t=>{this.itemByKey.set(`${t.group}:${t.id}`,t)}),this.populateItemSelects(),!0):!1}populateItemSelects(){const e=new Map;for(const r of this.itemDefinitions){const a=e.get(r.group)||[];a.push(r),e.set(r.group,a)}const t=r=>(r||[]).slice().sort((a,o)=>a.id-o.id),n={helm:7,armor:8,pants:9,gloves:10,boots:11};this.fillSelect(this.helmSelect,t(e.get(n.helm)),"None"),this.fillSelect(this.armorSelect,t(e.get(n.armor)),"None"),this.fillSelect(this.pantsSelect,t(e.get(n.pants)),"None"),this.fillSelect(this.glovesSelect,t(e.get(n.gloves)),"None"),this.fillSelect(this.bootsSelect,t(e.get(n.boots)),"None");const i=[];for(let r=0;r<=6;r++)i.push(...e.get(r)||[]);i.sort((r,a)=>r.group-a.group||r.id-a.id),this.fillSelect(this.leftWeaponSelect,i,"None"),this.fillSelect(this.rightWeaponSelect,i,"None"),this.fillSelect(this.wingSelect,t(e.get(12)),"None")}fillSelect(e,t,n){e.innerHTML="";const i=document.createElement("option");i.value="",i.textContent=n,e.appendChild(i);for(const r of t){const a=document.createElement("option");a.value=`${r.group}:${r.id}`;const o=r.itemName||r.modelName||`Item ${r.id}`;a.textContent=`${o} (G${r.group} / ${r.id})`,e.appendChild(a)}e.value=""}scheduleRebuild(){this.itemDefinitions.length&&this.rebuildCharacter()}async rebuildCharacter(){const e=++this.buildToken;this.statusEl.textContent="Building character...";const t=parseInt(this.classSelect.value,10),n=Dx(t),i=Ux(n),r=this.lastClassValue!==t||!this.hasFramed,a=this.characterOffset.clone(),o=this.characterRoot?this.characterRoot.rotation.clone():null,l=this.selectedAnimationIndex;this.currentClassValue=t,this.lastClassValue=t,this.clearCharacter(),this.animationSelect.innerHTML='<option value="">No animations</option>';const c=`Player/ArmorClass${i}.bmd`,h=await this.loadBmdGroup(c);if(!h||e!==this.buildToken){this.statusEl.textContent=`Missing base model: ${c}`;return}if(this.characterRoot=h.group,this.characterRoot.name="character_root",this.tagMeshes(this.characterRoot,`Base ArmorClass${i}`,"base"),this.applySceneMaterialTuning(this.characterRoot),this.characterRoot.scale.set(this.characterScale,this.characterScale,this.characterScale),r||(this.characterRoot.position.copy(a),o&&this.characterRoot.rotation.copy(o)),this.scene.add(this.characterRoot),this.baseSkeleton=this.findSkeleton(this.characterRoot),!this.baseSkeleton){this.statusEl.textContent="No skeleton found in base model.";return}if(this.baseBindMatrix=this.findBaseBindMatrix(this.characterRoot),await this.applyTexturesForGroup(h.group),e!==this.buildToken)return;const u=await this.ensurePlayerAnimations();if(u&&u.length&&(this.characterRoot.animations=u),this.mixer=this.characterRoot.animations.length?new Rh(this.characterRoot):null,this.mixer&&this.characterRoot.animations.length>0){const g=l??(this.characterRoot.animations.length>1?1:0),_=Math.min(Math.max(g,0),this.characterRoot.animations.length-1);this.populateAnimationSelect(this.characterRoot.animations.length,_),this.playAnimation(_)}const d=[{path:`Player/HelmClass${i}.bmd`,label:`Base HelmClass${i}`},{path:`Player/PantClass${i}.bmd`,label:`Base PantClass${i}`},{path:`Player/GloveClass${i}.bmd`,label:`Base GloveClass${i}`},{path:`Player/BootClass${i}.bmd`,label:`Base BootClass${i}`}];for(const g of d){const _=await this.loadBmdGroup(g.path);if(!_){console.warn(`[CharacterTestScene] Missing base part: ${g.path}`);continue}if(e!==this.buildToken||(this.tagMeshes(_.group,g.label,"base"),this.applySceneMaterialTuning(_.group),await this.applyTexturesForGroup(_.group),await this.attachBodyPart(_.group),e!==this.buildToken))return}const p=[{select:this.helmSelect,type:"armor",label:"Helm"},{select:this.armorSelect,type:"armor",label:"Armor"},{select:this.pantsSelect,type:"armor",label:"Pants"},{select:this.glovesSelect,type:"armor",label:"Gloves"},{select:this.bootsSelect,type:"armor",label:"Boots"},{select:this.leftWeaponSelect,type:"weapon",bone:33,label:"Left Weapon"},{select:this.rightWeaponSelect,type:"weapon",bone:42,label:"Right Weapon"},{select:this.wingSelect,type:"wing",bone:47,label:"Wings"}];for(const g of p){const _=this.getSelectedItem(g.select);if(!_)continue;const f=`${g.label}: ${this.describeItem(_)}`;if(g.type==="armor"){const m=this.resolveArmorPath(_.modelPath),b=await this.loadBmdGroupWithFallback(m);if(!b){console.warn(`[CharacterTestScene] Missing armor model: ${_.modelPath}`);continue}if(e!==this.buildToken)return;this.tagMeshes(b.group,f,"equipment"),this.applySceneMaterialTuning(b.group),await this.applyTexturesForGroup(b.group),await this.attachBodyPart(b.group)}else{const m=await this.loadBmdGroupWithFallback(_.modelPath);if(!m){console.warn(`[CharacterTestScene] Missing attachment model: ${_.modelPath}`);continue}if(e!==this.buildToken)return;this.tagMeshes(m.group,f,"equipment"),this.applySceneMaterialTuning(m.group),this.attachToBone(m.group,g.bone??0),await this.applyTexturesForGroup(m.group)}}this.hideReplacedBaseParts(i,p),r&&this.frameCharacter(),this.meshRefs=[],this.characterRoot&&this.characterRoot.traverse(g=>{g.isMesh&&this.meshRefs.push(g)}),this.buildBlendingUI(),this.refreshRenderHelpers(),this.updateStageForObject(this.characterRoot),this.statusEl.textContent="Character ready."}resolveArmorPath(e){const t=Ai(e);return t.startsWith("item/")?[`player/${t.slice(5)}`,t]:[t]}async loadBmdGroupWithFallback(e){const t=Array.isArray(e)?e:[e];for(const n of t){const i=await this.loadBmdGroup(this.ensureBmdExtension(n));if(i)return i}return null}async loadBmdGroup(e){const t=await this.readDataFile(e);if(!t)return console.warn(`[CharacterTestScene] Missing file: ${e}`),null;try{return await this.bmdLoader.load(t.buffer)}catch(n){return console.error("[CharacterTestScene] Failed to load BMD",e,n),null}}describeItem(e){return`${e.itemName||e.modelName||`Item ${e.id}`} (G${e.group} / ${e.id})`}static SLOT_TO_BASE_PART={Helm:"Base HelmClass",Armor:"Base ArmorClass",Pants:"Base PantClass",Gloves:"Base GloveClass",Boots:"Base BootClass"};hideReplacedBaseParts(e,t){if(!this.characterRoot)return;const n=new Set;for(const i of t){if(i.type!=="armor"||!this.getSelectedItem(i.select))continue;const a=tl.SLOT_TO_BASE_PART[i.label];a&&n.add(`${a}${e}`)}n.size!==0&&this.characterRoot.traverse(i=>{if(!i.isMesh)return;const r=i;r.userData.itemKind==="base"&&typeof r.userData.itemLabel=="string"&&n.has(r.userData.itemLabel)&&(r.visible=!1)})}tagMeshes(e,t,n){e.traverse(i=>{i.isMesh&&(i.userData.itemLabel=t,i.userData.itemKind=n)})}ensureBmdExtension(e){return e.toLowerCase().endsWith(".bmd")?e:`${e}.bmd`}findSkeleton(e){let t=null;return e.traverse(n=>{!t&&n.isSkinnedMesh&&(t=n.skeleton)}),t}findBaseBindMatrix(e){let t=null;return e.traverse(n=>{!t&&n.isSkinnedMesh&&(t=n.bindMatrix.clone())}),t}async attachBodyPart(e){if(!this.characterRoot||!this.baseSkeleton)return;const t=[];e.traverse(n=>{n.isSkinnedMesh&&t.push(n)});for(const n of t)n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.set(1,1,1),this.characterRoot.add(n),n.bind(this.baseSkeleton,this.baseBindMatrix??n.bindMatrix)}attachToBone(e,t){if(!this.baseSkeleton)return;const n=this.baseSkeleton.bones[t];if(!n){console.warn(`[CharacterTestScene] Missing bone ${t}`);return}e.position.set(0,0,0),e.rotation.set(0,0,0),e.scale.set(1,1,1),n.add(e)}async applyTexturesForGroup(e){const t=new Set,n=[];e.traverse(r=>{if(r.isMesh&&r.userData?.texturePath){const a=r.userData.texturePath;t.add(Ai(a)),n.push(r)}});const i=new Map;for(const r of t){const a=await this.getTextureForPath(r);a&&i.set(r,a)}n.forEach(r=>{const a=Ai(r.userData?.texturePath||""),o=i.get(a);if(!o)return;if(r.userData?.itemKind==="equipment"){this.applyItemShader(r,o);return}const l=r.material;l&&"map"in l&&(l.map=o,l.color.set(16777215),l.needsUpdate=!0)})}applyItemShader(e,t){const n=e.material;Array.isArray(n)?n.forEach(r=>r.dispose()):n&&n.dispose();const i=this.createItemShaderMaterial(t);e.material=i,this.itemShaderMaterials.add(i)}updateItemShaderParams(){const e=new N(.707,-.707,0).normalize(),t=new Te(.3,.3,.3),n=this.itemGlowColor;this.itemShaderMaterials.forEach(i=>{i.uniforms.uItemLevel.value=this.itemLevel,i.uniforms.uIsExcellent.value=this.itemIsExcellent?1:0,i.uniforms.uIsAncient.value=this.itemIsAncient?1:0,i.uniforms.uExcellentIntensity.value=this.itemExcellentIntensity,i.uniforms.uLightDirection.value.copy(e),i.uniforms.uAmbientColor.value.copy(t),i.uniforms.uGlowColor.value.copy(n)})}createItemShaderMaterial(e){const t=`
      #include <common>
      #include <skinning_pars_vertex>

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vViewDir;

      void main() {
        vUv = uv;

        #include <begin_vertex>
        #include <beginnormal_vertex>
        #include <skinbase_vertex>
        #include <skinning_vertex>
        #include <skinnormal_vertex>

        vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
        vWorldPosition = worldPosition.xyz;
        vNormal = normalize(mat3(modelMatrix) * objectNormal);
        vViewDir = normalize(cameraPosition - worldPosition.xyz);

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,n=`
      #include <common>

      uniform sampler2D uMap;
      uniform float uTime;
      uniform float uItemLevel;
      uniform float uIsExcellent;
      uniform float uIsAncient;
      uniform float uExcellentIntensity;
      uniform vec3 uGlowColor;
      uniform vec3 uLightDirection;
      uniform vec3 uAmbientColor;

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vViewDir;

      void main() {
        vec4 base = texture2D(uMap, vUv);
        if (base.a < 0.1) discard;

        vec3 normal = normalize(vNormal);
        float ndotl = max(0.1, dot(normal, -uLightDirection));
        vec3 color = base.rgb * (uAmbientColor + vec3(ndotl));

        float itemLevel = uItemLevel;
        float excellentEnabled = step(0.5, uIsExcellent);
        float ancientEnabled = step(0.5, uIsAncient);
        float brightness = 1.0;
        float ghostIntensity = 0.0;

        if (itemLevel < 7.0) {
          brightness = 1.0;
          ghostIntensity = 0.0;
        } else if (itemLevel < 9.0) {
          brightness = 1.6 + (itemLevel - 8.0) * 0.2;
          ghostIntensity = 0.30;
        } else if (itemLevel < 10.0) {
          brightness = 1.8 + (itemLevel - 9.0) * 0.2;
          ghostIntensity = 0.8;
        } else {
          brightness = 1.8 + (itemLevel - 10.0) * 0.2;
          ghostIntensity = 0.7 + (itemLevel / 30.0);
        }

        float subtlePulse = (1.0 + sin(uTime * 0.8)) * 0.03 + 0.97;
        float shimmer = (1.0 + sin(uTime * 8.0 + normal.x * 12.0)) * 0.15 + 0.85;

        vec2 ghostOffset1 = vec2(sin(uTime * 0.8) * 0.035, cos(uTime * 0.7) * 0.035) * ghostIntensity;
        vec2 ghostOffset2 = vec2(sin(uTime * 1.0 + 2.1) * 0.025, cos(uTime * 0.9 + 1.8) * 0.025) * ghostIntensity;
        vec2 ghostOffset3 = vec2(sin(uTime * 1.2 + 4.2) * 0.02, cos(uTime * 1.1 + 3.7) * 0.02) * ghostIntensity;
        vec2 ghostOffset4 = vec2(sin(uTime * 0.6 + 1.1) * 0.015, cos(uTime * 1.3 + 2.3) * 0.015) * ghostIntensity;

        vec3 ghost1 = texture2D(uMap, vUv + ghostOffset1).rgb;
        vec3 ghost2 = texture2D(uMap, vUv + ghostOffset2).rgb;
        vec3 ghost3 = texture2D(uMap, vUv + ghostOffset3).rgb;
        vec3 ghost4 = texture2D(uMap, vUv + ghostOffset4).rgb;

        if (itemLevel >= 7.0) {
          color = color * brightness * subtlePulse;
          color += ghost1 * (0.8 * ghostIntensity) * shimmer;
          color += ghost2 * (0.6 * ghostIntensity) * shimmer;
          color += ghost3 * (0.5 * ghostIntensity) * shimmer;
          color += ghost4 * (0.4 * ghostIntensity) * shimmer;
        } else {
          color = color * brightness;
        }

        float extraGlow = max(itemLevel - 9.0, 0.0) * 0.1;
        float glowEffect = (1.0 + sin(uTime * 1.0)) * 0.03 + 0.2;
        color += base.rgb * glowEffect * extraGlow * 0.2;

        // Ancient effect: blue sweep with long pause
        if (ancientEnabled > 0.5) {
          float cycle = fract(uTime * 0.08); // slow cycle
          float sweepDuration = 0.18;
          float sweepPhase = clamp(cycle / sweepDuration, 0.0, 1.0);
          float sweepActive = step(cycle, sweepDuration);
          float beamPos = sweepPhase;
          float dist = abs(vUv.x - beamPos);
          float beam = smoothstep(0.22, 0.0, dist);
          float wave = sin(uTime * 3.0 + vUv.y * 6.0) * 0.3 + 0.7;
          float intensity = beam * wave * sweepActive;
          vec3 ancientColor = vec3(0.25, 0.45, 1.0);
          color += ancientColor * intensity * 0.55;
          color += ghost1 * ancientColor * intensity * 0.35;
          color += ghost2 * ancientColor * intensity * 0.25;
          color += color * ancientColor * (0.05 + 0.04 * step(9.0, itemLevel));
        }

        // Excellent effect: full rainbow across the entire item
        if (excellentEnabled > 0.5) {
          float exScale = max(uExcellentIntensity, 0.0);
          float hue = fract(uTime * 0.08 + vUv.x * 0.35 + vUv.y * 0.25);
          float hue2 = fract(hue + 0.33);

          float c = 1.0;
          float x1 = c * (1.0 - abs(mod(hue * 6.0, 2.0) - 1.0));
          vec3 rgb1 = (hue < 1.0/6.0) ? vec3(c, x1, 0.0)
                     : (hue < 2.0/6.0) ? vec3(x1, c, 0.0)
                     : (hue < 3.0/6.0) ? vec3(0.0, c, x1)
                     : (hue < 4.0/6.0) ? vec3(0.0, x1, c)
                     : (hue < 5.0/6.0) ? vec3(x1, 0.0, c)
                     : vec3(c, 0.0, x1);

          float x2 = c * (1.0 - abs(mod(hue2 * 6.0, 2.0) - 1.0));
          vec3 rgb2 = (hue2 < 1.0/6.0) ? vec3(c, x2, 0.0)
                     : (hue2 < 2.0/6.0) ? vec3(x2, c, 0.0)
                     : (hue2 < 3.0/6.0) ? vec3(0.0, c, x2)
                     : (hue2 < 4.0/6.0) ? vec3(0.0, x2, c)
                     : (hue2 < 5.0/6.0) ? vec3(x2, 0.0, c)
                     : vec3(c, 0.0, x2);

          float pulse = sin(uTime * 1.1) * 0.5 + 0.5;
          float fresnel = pow(1.0 - max(dot(normalize(vViewDir), normal), 0.0), 2.0);

          vec3 rainbow = mix(rgb1, rgb2, 0.5 + 0.5 * sin(uTime * 0.6));
          vec3 rainbowTint = mix(vec3(1.0), rainbow, 0.65 * exScale);
          color *= rainbowTint;

          color += ghost1 * rgb1 * (0.26 + 0.22 * pulse) * exScale;
          color += ghost2 * rgb2 * (0.22 + 0.18 * pulse) * exScale;
          color += rgb2 * fresnel * 0.14 * exScale;
        }

        gl_FragColor = vec4(color, base.a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,i=new ln({uniforms:{uMap:{value:e},uTime:{value:0},uItemLevel:{value:this.itemLevel},uIsExcellent:{value:this.itemIsExcellent?1:0},uIsAncient:{value:this.itemIsAncient?1:0},uExcellentIntensity:{value:this.itemExcellentIntensity},uGlowColor:{value:this.itemGlowColor.clone()},uLightDirection:{value:new N(.707,-.707,0).normalize()},uAmbientColor:{value:new Te(.3,.3,.3)}},vertexShader:t,fragmentShader:n,transparent:!1,depthWrite:!0,blending:Dt,toneMapped:!0,side:en});return i.skinning=!0,i.needsUpdate=!0,i}async getTextureForPath(e){const t=Ai(e);if(this.textureCache.has(t))return this.textureCache.get(t);const n=qc(t),i=this.getTextureBaseCandidates(n);for(const r of i){const a=r===n?t:this.replaceBaseName(t,r);if(a!==t&&this.textureCache.has(a))return this.textureCache.get(a);const o=await this.readDataFile(a);if(o){const l=await this.loadTexture(o.buffer,o.name);if(l)return this.textureCache.set(a,l),l}}for(const r of i){const a=`base:${r}`;if(this.textureCache.has(a))return this.textureCache.get(a);const o=await this.findTextureByBase(r);if(!o)continue;const l=await this.loadTexture(o.buffer,o.name);if(l)return this.textureCache.set(a,l),l}return null}getTextureBaseCandidates(e){const t=e.match(/^([a-z]*skinclass)(\d+)$/i);if(!t||this.currentClassValue===null)return[e];const n=t[1].toLowerCase(),i=this.currentClassValue,r=i>=200?i:100+i,a=`${n}${r}`;return a===e?[e]:[a,e]}replaceBaseName(e,t){const n=us(e),i=e.replace(/\\/g,"/");return i.includes("/")?`${i.replace(/\/[^/]*$/,"")}/${t}${n}`:`${t}${n}`}async findTextureByBase(e){if(!e)return null;if(this.dataRootPath){if(!this.electronTextureMap.has(e))try{const l=(await Jh(this.dataRootPath,[e]))[e]||[];if(l.length>0){const c=this.pickPreferredTexture(l);this.electronTextureMap.set(e,c)}}catch(o){console.warn("[CharacterTestScene] Texture search failed",o)}const r=this.electronTextureMap.get(e);if(!r)return null;const a=await Cs(r);return a?{name:a.name,buffer:a.data}:null}const t=this.textureIndex.get(e);if(!t||t.length===0)return null;const n=this.pickPreferredTexture(t),i=this.dataFiles.get(n);return i?{name:i.name,buffer:await i.arrayBuffer()}:null}pickPreferredTexture(e){const t=[".ozj",".ozt",".tga",".png",".jpg",".jpeg"],n=r=>{const a=t.indexOf(r);return a===-1?t.length:a};return e.slice().sort((r,a)=>{const o=us(r),l=us(a);return n(o)-n(l)})[0]}async loadTexture(e,t){const n=us(t);try{let i;if(n===".tga")i=await this.textureLoader.loadAsync(await Xh(e));else if(n===".ozj"||n===".ozt")i=await this.textureLoader.loadAsync(await $h(e));else{const r=new Blob([e]),a=URL.createObjectURL(r);i=await this.textureLoader.loadAsync(a),URL.revokeObjectURL(a)}return i.colorSpace=At,i.wrapS=i.wrapT=Bi,i.flipY=!1,i.name=t,i}catch(i){return console.warn("[CharacterTestScene] Texture load failed",t,i),null}}getSelectedItem(e){const t=e.value;return t&&this.itemByKey.get(t)||null}async readDataFile(e){const t=Ai(e);if(this.dataFiles.size>0){const n=this.dataFiles.get(t);return n?{name:n.name,buffer:await n.arrayBuffer()}:null}if(this.dataRootPath&&Ct()){const n=this.joinDataPath(t);if(this.missingDataPaths.has(t))return null;try{const i=await Cs(n);return i?{name:i.name,buffer:i.data}:null}catch{return this.missingDataPaths.add(t),null}}return null}joinDataPath(e){if(!this.dataRootPath)return e;const t=this.dataRootPath.includes("\\")?"\\":"/",n=this.dataRootPath.replace(/[\\/]+$/,""),i=e.replace(/[\\/]+/g,t);return`${n}${t}${i}`}populateAnimationSelect(e,t=null){this.animationSelect.innerHTML="";for(let n=0;n<e;n++){const i=document.createElement("option");i.value=n.toString(),i.textContent=`Animation ${n}`,this.animationSelect.appendChild(i)}if(e>0){const n=e>1?1:0,i=t!==null&&t>=0&&t<e?t:n;this.animationSelect.value=i.toString()}}playAnimation(e){if(!this.mixer||!this.characterRoot?.animations?.length)return;const t=this.characterRoot.animations[e];t&&(this.mixer.stopAllAction(),this.currentAction=this.mixer.clipAction(t),this.currentAction.setEffectiveTimeScale(this.animationSpeed),this.currentAction.reset().play(),this.selectedAnimationIndex=e)}setAnimationSpeed(e){this.animationSpeed=e,this.currentAction&&this.currentAction.setEffectiveTimeScale(e)}setCharacterScale(e){this.characterScale=e,this.characterRoot&&(this.characterRoot.scale.set(e,e,e),this.updateStageForObject(this.characterRoot))}setSceneBackground(e){const t=new Te(e);this.scene.background=t,this.scene.fog&&this.scene.fog.color.copy(t),this.containerEl&&(this.containerEl.style.backgroundColor=e)}applySceneMaterialTuning(e){e.traverse(t=>{const n=t;if(!n.isMesh)return;n.castShadow=!0,n.receiveShadow=!0,(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{r&&(r instanceof Yo&&(r.shininess=Math.max(r.shininess,12),r.specular.set(3098729)),"envMapIntensity"in r&&(r.envMapIntensity=.72),r.needsUpdate=!0)})})}updateStageForObject(e){if(!e){this.gridHelper&&(this.gridHelper.position.y=0,this.gridHelper.scale.set(1,1,1));return}const t=new Ut().setFromObject(e);if(!Number.isFinite(t.min.y)||!Number.isFinite(t.max.y))return;const n=t.getSize(new N),i=Math.max(120,Math.max(n.x,n.z)*.74+30),r=t.min.y-1.2;if(this.gridHelper){const a=Math.max(.65,Math.min(2.4,i/230));this.gridHelper.position.y=r,this.gridHelper.scale.set(a,1,a)}this.directionalLight.target.position.set(0,(t.min.y+t.max.y)*.5,0),this.directionalLight.target.updateMatrixWorld()}setBrightness(e){const t=Math.max(.1,e);this.renderer.toneMappingExposure=t,this.ambientLight&&(this.ambientLight.intensity=.48*t),this.hemisphereLight&&(this.hemisphereLight.intensity=.62*t),this.directionalLight&&(this.directionalLight.intensity=1.85*t),this.rimLight&&(this.rimLight.intensity=.82*t)}refreshViewport(e=0){if(!this.containerEl)return;const t=this.containerEl.clientWidth,n=this.containerEl.clientHeight;if(t===0||n===0){e<5&&requestAnimationFrame(()=>this.refreshViewport(e+1));return}this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,n),this.renderer.render(this.scene,this.camera)}buildBlendingUI(){if(!this.blendingBox||!this.blendingList)return;this.blendingList.innerHTML="";const e={Opaque:Dt,Normal:Hn,Additive:pr,Multiply:gr,Subtractive:mr};this.meshRefs.forEach((t,n)=>{const i=document.createElement("div");i.className="blend-row";const r=document.createElement("span"),a=t.userData?.itemLabel||"Unknown item",o=t.name||`Mesh ${n}`;r.textContent=`${a} · ${o}`,r.className="blend-label";const l=document.createElement("select");l.className="animation-dropdown blend-select",Object.keys(e).forEach(d=>{const p=document.createElement("option");p.value=d,p.text=d,l.appendChild(p)});const c=t.material,h=Array.isArray(c)?c[0]?.blending:c.blending,u=Object.entries(e).find(([,d])=>d===h);l.value=u?u[0]:"Normal",l.addEventListener("change",()=>{const d=p=>{p.blending=e[l.value],p.transparent=p.blending!==Dt,p.depthWrite=p.blending===Dt,p.needsUpdate=!0};Array.isArray(c)?c.forEach(d):d(c)}),i.append(r,l),this.blendingList.appendChild(i)}),this.blendingBox.style.display=this.meshRefs.length?"block":"none"}refreshRenderHelpers(){this.updateSkeletonHelperState(),this.applyWireframeState(),this.updateBoundingBoxHelperState(),this.updateAxesHelperState(),this.updateNormalsHelpersState()}updateSkeletonHelperState(){if(!this.characterRoot){this.skeletonHelper&&(this.scene.remove(this.skeletonHelper),this.skeletonHelper.geometry.dispose(),this.skeletonHelper=null);return}this.skeletonHelper||(this.skeletonHelper=new Ri(this.characterRoot),this.scene.add(this.skeletonHelper)),this.skeletonHelper.visible=this.showSkeletonCheckbox.checked}applyWireframeState(){if(!this.characterRoot)return;const e=this.wireframeCheckbox.checked;this.characterRoot.traverse(t=>{if(t.isMesh){const n=t.material,i=r=>{"wireframe"in r&&(r.wireframe=e,r.needsUpdate=!0)};Array.isArray(n)?n.forEach(i):n&&i(n)}})}updateBoundingBoxHelperState(){if(!this.showBoundingBoxCheckbox.checked||!this.characterRoot){this.boundingBoxHelper&&(this.boundingBoxHelper.visible=!1);return}this.boundingBoxHelper||(this.boundingBoxHelper=new Ph(this.characterRoot,16776960),this.boundingBoxHelper.name="character_bbox_helper",this.scene.add(this.boundingBoxHelper)),this.boundingBoxHelper.visible=!0,this.updateSkinnedMeshesBoundingBoxes(),this.boundingBoxHelper.update()}getModelSizeHint(){if(!this.characterRoot)return 100;const t=new Ut().setFromObject(this.characterRoot).getSize(new N);return Math.max(t.x,t.y,t.z)||100}updateAxesHelperState(){if(!this.showAxesCheckbox.checked||!this.characterRoot){this.axesHelper&&(this.axesHelper.visible=!1);return}const t=this.getModelSizeHint()*.6||100;this.axesHelper||(this.axesHelper=new Dh(t),this.axesHelper.name="character_axes_helper",this.axesHelper.matrixAutoUpdate=!0,this.scene.add(this.axesHelper)),this.axesHelper.visible=!0}updateNormalsHelpersState(){if(!this.showNormalsCheckbox.checked||!this.characterRoot){this.normalsVisible=!1,this.normalHelpers.length&&this.normalHelpers.forEach(t=>{t.visible=!1});return}if(this.normalsVisible=!0,this.normalHelpers.length)this.normalHelpers.forEach(t=>{t.visible=!0});else{const t=this.getModelSizeHint()*.015;this.characterRoot.traverse(n=>{if(n.isSkinnedMesh){const i=new Qh(n,t,6151423);i.visible=!0,this.scene.add(i),this.normalHelpers.push(i)}})}}updateSkinnedMeshesBoundingBoxes(){this.characterRoot&&this.characterRoot.traverse(e=>{const t=e;if(!t.isSkinnedMesh)return;const n=t.geometry;if(!n.getAttribute("position"))return;if(!!n.getAttribute("skinIndex")&&!!n.getAttribute("skinWeight")){t.computeBoundingBox();return}t.boundingBox||(t.boundingBox=new Ut),n.boundingBox===null&&n.computeBoundingBox(),n.boundingBox&&t.boundingBox&&t.boundingBox.copy(n.boundingBox)})}exportGif(){if(this.isRecordingGif)return;if(!this.characterRoot){alert("Load a character first.");return}this.isRecordingGif=!0,this.exportGifBtn.disabled=!0,this.statusEl.textContent="Recording GIF…";const e=Math.max(16,Math.min(1024,parseInt(this.gifWidthInput?.value??"800",10)||800)),t=Math.max(16,Math.min(1024,parseInt(this.gifHeightInput?.value??"600",10)||600)),n=!!(this.currentAction&&this.mixer);let i=null,r=0;n&&this.currentAction&&(i=this.currentAction.getClip(),r=i.userData?.numAnimationKeys??0);const a=parseInt(this.gifDelayInput?.value??"",10),o=!Number.isNaN(a)&&a>0?a:null,l=Math.max(1,Math.min(8,parseInt(this.gifFrameMultiplierInput?.value??"1",10)||1)),c=document.createElement("canvas");c.width=e,c.height=t;const h=c.getContext("2d"),u=65280,d=u>>16&255,p=u>>8&255,g=u&255,_=new jh({workers:2,workerScript:Kh,quality:10,width:e,height:t,transparent:u}),f=this.scene.background?this.scene.background.clone():null;this.scene.background=null;const m=this.gridHelper?.visible??!1;this.gridHelper&&(this.gridHelper.visible=!1),_.on("progress",v=>{this.statusEl.textContent=`Rendering GIF… ${(v*100).toFixed(0)}%`});const b=v=>{f?this.scene.background=f:this.scene.background=null,this.gridHelper&&(this.gridHelper.visible=m),this.isRecordingGif=!1,this.exportGifBtn.disabled=!1,this.statusEl.textContent=v};if(_.on("finished",v=>{const M=URL.createObjectURL(v),T=document.createElement("a");T.href=M,T.download=`character_${e}x${t}.gif`,T.click(),URL.revokeObjectURL(M),b(`GIF saved (${e}×${t}).`)}),_.on("abort",()=>b("GIF recording aborted.")),!n||!i||r===0){this.renderer.render(this.scene,this.camera),h.clearRect(0,0,e,t),h.drawImage(this.renderer.domElement,0,0,e,t);const v=h.getImageData(0,0,e,t),M=v.data,T=40;for(let L=0;L<M.length;L+=4)M[L+3]<T&&(M[L]=d,M[L+1]=p,M[L+2]=g,M[L+3]=255);h.putImageData(v,0,0),_.addFrame(h,{copy:!0,delay:Math.min(Math.max(o??120,10),1e3)}),_.render();return}const A=Math.max(1,r*l),E=this.currentAction?._effectiveTimeScale??this.animationSpeed,C=i.duration/Math.max(E,1e-4)/A*1e3,x=Math.min(Math.max(o??Math.round(C),5),1e3);let S=0;const I=()=>{if(!this.mixer||!i)return;if(S>=A){_.render();return}const v=S/A;this.currentAction.time=v*i.duration,this.mixer.update(0),this.renderer.render(this.scene,this.camera),h.clearRect(0,0,e,t),h.drawImage(this.renderer.domElement,0,0,e,t);const M=h.getImageData(0,0,e,t),T=M.data,L=40;for(let P=0;P<T.length;P+=4)T[P+3]<L&&(T[P]=d,T[P+1]=p,T[P+2]=g,T[P+3]=255);h.putImageData(M,0,0),_.addFrame(h,{copy:!0,delay:x}),S+=1,requestAnimationFrame(I)};I()}frameCharacter(){if(!this.characterRoot)return;const e=new Ut().setFromObject(this.characterRoot),t=e.getSize(new N),n=e.getCenter(new N);this.characterRoot.position.sub(n),this.characterRoot.position.y+=this.characterHeightOffset,this.characterOffset.copy(this.characterRoot.position),this.hasFramed=!0;const i=Math.max(t.x,t.y,t.z)||200;this.camera.position.set(0,i*.8,i*1.6),this.camera.lookAt(0,0,0),this.controls.target.set(0,0,0),this.controls.update()}clearCharacter(){this.characterRoot&&(this.scene.remove(this.characterRoot),this.characterRoot.traverse(e=>{if(e.isMesh){const t=e;t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(i=>i.dispose()):n&&n.dispose()}}),this.characterRoot=null,this.baseSkeleton=null,this.baseBindMatrix=null,this.mixer=ai.disposeMixer(this.mixer),this.currentAction=null,this.skeletonHelper&&(this.scene.remove(this.skeletonHelper),this.skeletonHelper.geometry.dispose(),this.skeletonHelper=null),this.boundingBoxHelper&&(this.scene.remove(this.boundingBoxHelper),this.boundingBoxHelper.geometry.dispose(),this.boundingBoxHelper.material.dispose(),this.boundingBoxHelper=null),this.axesHelper&&(this.scene.remove(this.axesHelper),this.axesHelper.geometry.dispose(),this.axesHelper.material.dispose(),this.axesHelper=null),this.normalHelpers.length&&(this.normalHelpers.forEach(e=>{this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}),this.normalHelpers=[]),this.meshRefs=[],this.blendingBox&&(this.blendingBox.style.display="none"),this.blendingList&&(this.blendingList.innerHTML=""),ai.disposeShaderMaterials(this.itemShaderMaterials),this.updateStageForObject(null))}clearTextureCache(){ai.disposeTextureCache(this.textureCache)}dispose(){this.clearCharacter(),this.clearTextureCache(),this.renderer.dispose(),this.gridHelper&&ai.disposeObject3D(this.gridHelper)}async ensurePlayerAnimations(){if(!this.baseSkeleton)return null;if(this.playerAnimations)return this.playerAnimations;const e=await this.readDataFile("Player/player.bmd");if(!e)return console.warn("[CharacterTestScene] Missing Player/player.bmd for animations"),null;try{const t=this.bmdLoader.loadAnimationsFrom(e.buffer,this.baseSkeleton);return this.playerAnimations=t,t}catch(t){return console.warn("[CharacterTestScene] Failed to load player animations",t),null}}animate=()=>{requestAnimationFrame(this.animate);const e=this.clock.getDelta();if(!this.isActive)return;const n=performance.now()*25e-5;if(this.rimLight.position.x=-160+Math.sin(n)*18,this.rimLight.position.z=-210+Math.cos(n)*14,this.characterRoot&&this.isAutoRotating&&!this.userIsInteracting&&!this.isRecordingGif&&(this.characterRoot.rotation.z+=e*.2),this.mixer&&!this.isRecordingGif&&this.mixer.update(e),this.itemShaderMaterials.size){const i=performance.now()*.001;this.itemShaderMaterials.forEach(r=>{r.uniforms.uTime.value=i})}this.axesHelper&&this.characterRoot&&this.axesHelper.visible&&(this.axesHelper.position.copy(this.characterRoot.position),this.axesHelper.quaternion.copy(this.characterRoot.quaternion),this.axesHelper.scale.copy(this.characterRoot.scale)),this.boundingBoxHelper&&this.boundingBoxHelper.visible&&(this.updateSkinnedMeshesBoundingBoxes(),this.boundingBoxHelper.update()),this.normalsVisible&&this.normalHelpers.length&&(this.normalsUpdateCounter=(this.normalsUpdateCounter+1)%3,this.normalsUpdateCounter===0&&this.normalHelpers.forEach(i=>i.update())),this.controls.update(),this.renderer.render(this.scene,this.camera)}}const $c=50*1024*1024,Fx=new Uint8Array([66,77,68]),Nx=new Set([10,12,15]);class dn extends Error{constructor(e){super(e),this.name="FileValidationError"}}class Bx{static validateFileSize(e,t){const n=e instanceof File?e.size:e.byteLength,i=e instanceof File?e.name:t||"unknown";if(n>$c)throw new dn(`File "${i}" is too large (${(n/(1024*1024)).toFixed(2)} MB). Maximum size is ${$c/(1024*1024)} MB.`);if(n===0)throw new dn(`File "${i}" is empty.`)}static validateBMDHeader(e,t){const n=t||"unknown";if(e.byteLength<4)throw new dn(`File "${n}" is too small to be a valid BMD file (minimum 4 bytes required).`);const i=new Uint8Array(e,0,4),r=Array.from(i).map(l=>l.toString(16).padStart(2,"0")).join(" ");if(!Fx.every((l,c)=>l===i[c]))throw new dn(`File "${n}" does not appear to be a valid BMD file. Header: ${r}`);const o=i[3];if(!Nx.has(o)){const l=`0x${o.toString(16).padStart(2,"0")}`;throw new dn(`File "${n}" has unsupported BMD version ${l}. Supported versions: 0x0A, 0x0C, 0x0F.`)}}static validateTextureExtension(e){const t=e.toLowerCase().split(".").pop();return["jpg","jpeg","png","tga","ozj","ozt"].includes(t||"")}static validateImageHeader(e,t){if(e.byteLength<4)throw new dn(`Image file "${t}" is too small.`);const n=new Uint8Array(e,0,8),i=t.toLowerCase().split(".").pop();if(i==="png"&&![137,80,78,71,13,10,26,10].every((o,l)=>n[l]===o))throw new dn(`File "${t}" is not a valid PNG image.`);if((i==="jpg"||i==="jpeg")&&!(n[0]===255&&n[1]===216&&n[2]===255))throw new dn(`File "${t}" is not a valid JPEG image.`)}static async validateBMDFile(e){this.validateFileSize(e);const t=await e.slice(0,4).arrayBuffer();this.validateBMDHeader(t,e.name)}static async validateTextureFile(e){if(this.validateFileSize(e),!this.validateTextureExtension(e.name))throw new dn(`File "${e.name}" has an unsupported extension. Supported formats: JPG, PNG, TGA, OZJ, OZT`);const t=Math.min(e.size,8),n=await e.slice(0,t).arrayBuffer();this.validateImageHeader(n,e.name)}static sanitizeFilePath(e){return e.replace(/\.\.[/\\]/g,"").replace(/^[/\\]+/,"")}}class Ox{level;isDev;constructor(){this.isDev=!1,this.level=this.isDev?0:1}setLevel(e){this.level=e}getLevel(){return this.level}debug(...e){this.level<=0&&this.isDev&&console.log("[DEBUG]",...e)}info(...e){this.level<=1&&console.log("[INFO]",...e)}warn(...e){this.level<=2&&console.warn("[WARN]",...e)}error(...e){this.level<=3&&console.error("[ERROR]",...e)}groupDebug(e,...t){this.level<=0&&this.isDev&&console.groupCollapsed(`[DEBUG] ${e}`,...t)}groupEnd(){this.level<=0&&this.isDev&&console.groupEnd()}time(e){this.level<=0&&this.isDev&&console.time(`[DEBUG] ${e}`)}timeEnd(e){this.level<=0&&this.isDev&&console.timeEnd(`[DEBUG] ${e}`)}}const Ae=new Ox;let qe=null;const ni=document.getElementById("show-skeleton-checkbox"),Fa=document.getElementById("wireframe-checkbox");class kx{scene;camera;renderer;controls;clock=new Ch;ambientLight;hemisphereLight;directionalLight;rimLight;mixer=null;isRecordingGif=!1;gridHelper=null;currentAction=null;bmdFile=null;animBmdFile=null;loadedGroup=null;requiredTextures=[];exportBtn;gifWidthInput;gifHeightInput;gifDelayInput;gifFrameMultiplierInput;textureLoader=new Eh;lastBmdFilePath=null;lastAttachmentFilePath=null;isAutoRotating=!0;userIsInteracting=!1;isActive=!0;diagActionsCountEl;diagAnimationKeysEl;diagAnimationsCountEl;diagCurrentFrameEl;diagBonesCountEl;diagMeshesCountEl;diagFpsEl;lastFrameTime=0;frameCount=0;fps=0;lockFrameCheckbox;lockFrameInput;lockCurrentBtn;isFrameLocked=!1;lockedFrame=0;bmdLoader=new qh;meshRefs=[];attachments=[];currentAttachment=null;currentAttachmentFile=null;mainSkeleton=null;boundingBoxHelper=null;axesHelper=null;normalHelpers=[];showBoundingBoxCheckbox;showAxesCheckbox;showNormalsCheckbox;normalsVisible=!1;normalsUpdateCounter=0;constructor(){Ae.debug("%c[App] constructor","color:#0f0"),this.initThree(),this.initUI(),this.animate(performance.now())}setActive(e){this.isActive=e}initThree(){Ae.groupDebug("%c[App] initThree()","color:#0f0");const e=document.getElementById("canvas-container");if(!e)throw new Error("#canvas-container not found in HTML!");this.scene=new ws,this.scene.background=new Te(725794),this.scene.fog=new Br(725794,.00125),this.camera=new Gt(75,e.clientWidth/e.clientHeight,.1,1e4),this.camera.position.set(0,200,400),this.renderer=new kh({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=At,this.renderer.toneMapping=Pr,this.renderer.toneMappingExposure=.95,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Po,this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement);const t=new Ar(this.renderer),n=new Hh;this.scene.environment=t.fromScene(n).texture,n.dispose(),t.dispose(),window.addEventListener("resize",()=>{this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e.clientWidth,e.clientHeight)}),this.controls=new Vh(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.target.set(0,90,0),this.controls.addEventListener("start",()=>{this.userIsInteracting=!0}),this.controls.addEventListener("end",()=>{this.userIsInteracting=!1}),this.ambientLight=new Ah(13493247,.42),this.hemisphereLight=new wh(9033727,1120807,.52),this.directionalLight=new Tr(16777215,1.7),this.directionalLight.position.set(180,260,140),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.set(2048,2048),this.directionalLight.shadow.radius=3,this.directionalLight.shadow.bias=-4e-4,this.directionalLight.shadow.camera.near=10,this.directionalLight.shadow.camera.far=1400,this.directionalLight.shadow.camera.left=-360,this.directionalLight.shadow.camera.right=360,this.directionalLight.shadow.camera.top=360,this.directionalLight.shadow.camera.bottom=-360,this.rimLight=new Tr(7653887,.72),this.rimLight.position.set(-160,130,-210),this.rimLight.castShadow=!1,this.scene.add(this.ambientLight),this.scene.add(this.hemisphereLight),this.scene.add(this.directionalLight),this.scene.add(this.rimLight),this.scene.add(this.directionalLight.target),this.gridHelper=new Lh(600,24,4152196,1847113);const i=this.gridHelper.material;Array.isArray(i)?i.forEach(r=>{r.transparent=!0,r.opacity=.35,r.depthWrite=!1}):(i.transparent=!0,i.opacity=.35,i.depthWrite=!1),this.scene.add(this.gridHelper),Ae.groupEnd()}initUI(){Ae.groupDebug("%c[App] initUI()","color:#0f0");const e=document.getElementById("bmd-drop-zone"),t=document.getElementById("bmd-file-input"),n=document.getElementById("anim-bmd-drop-zone"),i=document.getElementById("anim-bmd-file-input"),r=document.getElementById("texture-drop-zone"),a=document.getElementById("texture-file-input");this.exportBtn=document.getElementById("export-textures-btn"),this.exportBtn.addEventListener("click",()=>this.exportTextures());const o=document.getElementById("speed-slider"),l=document.getElementById("speed-label");this.gifWidthInput=document.getElementById("gif-width-input"),this.gifHeightInput=document.getElementById("gif-height-input"),this.gifDelayInput=document.getElementById("gif-delay-input"),this.gifFrameMultiplierInput=document.getElementById("gif-frame-multiplier-input"),document.getElementById("export-gif-btn").addEventListener("click",()=>this.exportGif()),document.getElementById("export-glb-btn").addEventListener("click",()=>this.exportToGLB()),o.addEventListener("input",T=>{const L=parseFloat(T.target.value);l.textContent=`Speed: ${L.toFixed(2)}x`,this.setAnimationSpeed(L)}),l.textContent=`Speed: ${parseFloat(o.value).toFixed(2)}x`;const u=document.getElementById("status");u.textContent="Waiting for BMD file…",this.initScaleSlider();const d=document.getElementById("auto-rotate-checkbox");d.addEventListener("change",T=>{this.isAutoRotating=T.target.checked}),this.isAutoRotating=d.checked;const p=document.getElementById("bg-color-input");p.addEventListener("input",T=>{const L=T.target.value;this.setSceneBackground(L)}),this.setSceneBackground(p.value||"#0b1322");const g=document.getElementById("brightness-slider"),_=document.getElementById("brightness-label");g.addEventListener("input",T=>{const L=parseFloat(T.target.value);_.textContent=`Brightness: ${L.toFixed(2)}×`,this.setBrightness(L)});const f=parseFloat(g.value)||2;_.textContent=`Brightness: ${f.toFixed(2)}×`,this.setBrightness(f),this.diagActionsCountEl=document.getElementById("diag-actions-count"),this.diagAnimationKeysEl=document.getElementById("diag-animation-keys"),this.diagCurrentFrameEl=document.getElementById("diag-current-frame"),this.diagBonesCountEl=document.getElementById("diag-bones-count"),this.diagMeshesCountEl=document.getElementById("diag-meshes-count"),this.diagFpsEl=document.getElementById("diag-fps"),this.updateDiagnosticInfo(0),this.lockFrameCheckbox=document.getElementById("lock-frame-checkbox"),this.lockFrameInput=document.getElementById("lock-frame-input"),this.lockCurrentBtn=document.getElementById("lock-current-btn"),this.lockFrameCheckbox.addEventListener("change",()=>{this.isFrameLocked=this.lockFrameCheckbox.checked,this.isFrameLocked&&this.applyLockedFrame()}),this.lockFrameInput.addEventListener("input",()=>{this.lockedFrame=parseInt(this.lockFrameInput.value,10)||0,this.isFrameLocked&&this.applyLockedFrame()}),this.lockCurrentBtn.addEventListener("click",()=>{const T=parseInt(this.diagCurrentFrameEl.textContent||"0",10)||0;this.lockFrameInput.value=T.toString(),this.lockedFrame=T,this.lockFrameCheckbox.checked=!0,this.isFrameLocked=!0,this.applyLockedFrame()});const m=(T,L,P)=>{T.addEventListener("click",()=>L.click()),T.addEventListener("dragover",z=>{z.preventDefault(),T.classList.add("drag-over")}),T.addEventListener("dragleave",()=>T.classList.remove("drag-over")),T.addEventListener("drop",z=>{z.preventDefault(),T.classList.remove("drag-over"),z.dataTransfer?.files.length&&P(z.dataTransfer.files)}),L.addEventListener("change",z=>{const U=z.target.files;U?.length&&P(U)})};(async(T,L)=>{const P=async()=>{if(Ct()){const{openFileDialog:U,readFileFromPath:V,createFileFromElectronData:k}=await ul(async()=>{const{openFileDialog:ee,readFileFromPath:te,createFileFromElectronData:ie}=await Promise.resolve().then(()=>Gc);return{openFileDialog:ee,readFileFromPath:te,createFileFromElectronData:ie}},void 0),q=await U([{name:"BMD Files",extensions:["bmd"]}]);if(q){const ee=await V(q);if(ee){const te=k(ee.name,ee.data);this.handleBmdFile(te,q)}}}else L.click()};T.addEventListener("click",P),T.addEventListener("dragover",U=>{U.preventDefault(),T.classList.add("drag-over")}),T.addEventListener("dragleave",()=>T.classList.remove("drag-over")),T.addEventListener("drop",U=>{if(U.preventDefault(),U.stopPropagation(),T.classList.remove("drag-over"),U.dataTransfer?.files&&U.dataTransfer.files.length>0){const V=U.dataTransfer.files[0];let k;if(Ct()){const q=fr(V);q?(k=q,Ae.debug("[BMD drop] Got path from Electron API:",k)):Ae.warn("[BMD drop] Could not get file path from Electron")}this.handleBmdFile(V,k)}});let z=!1;T.addEventListener("dragenter",()=>{z=!0}),T.addEventListener("dragleave",()=>{z=!1}),L.addEventListener("change",U=>{if(z){z=!1;return}const V=U.target.files;V?.length&&this.handleBmdFile(V[0])})})(e,t),m(n,i,T=>this.handleAnimBmdFile(T[0])),m(r,a,T=>this.handleMultipleTextureFiles(T));const A=document.getElementById("attach-drop-zone"),E=document.getElementById("attach-bmd-input");(async(T,L)=>{const P=async()=>{if(Ct()){const{openFileDialog:U,readFileFromPath:V,createFileFromElectronData:k}=await ul(async()=>{const{openFileDialog:ee,readFileFromPath:te,createFileFromElectronData:ie}=await Promise.resolve().then(()=>Gc);return{openFileDialog:ee,readFileFromPath:te,createFileFromElectronData:ie}},void 0),q=await U([{name:"BMD Files",extensions:["bmd"]}]);if(q){const ee=await V(q);if(ee){const te=k(ee.name,ee.data);document.querySelector("#attach-drop-zone p").textContent=`Selected: ${te.name}`,this.currentAttachmentFile=te,this.lastAttachmentFilePath=q,this.setupAttachmentControls()}}}else L.click()};T.addEventListener("click",P),T.addEventListener("dragover",U=>{U.preventDefault(),T.classList.add("drag-over")}),T.addEventListener("dragleave",()=>T.classList.remove("drag-over")),T.addEventListener("drop",U=>{if(U.preventDefault(),U.stopPropagation(),T.classList.remove("drag-over"),U.dataTransfer?.files.length){const V=U.dataTransfer.files[0];let k;if(Ct()){const q=fr(V);q?(k=q,Ae.debug("[Attachment drop] Got path from Electron API:",k)):Ae.warn("[Attachment drop] Could not get file path from Electron")}document.querySelector("#attach-drop-zone p").textContent=`Selected: ${V.name}`,this.currentAttachmentFile=V,this.lastAttachmentFilePath=k||null,this.setupAttachmentControls()}});let z=!1;T.addEventListener("dragenter",()=>{z=!0}),T.addEventListener("dragleave",()=>{z=!1}),L.addEventListener("change",U=>{if(z){z=!1;return}const V=U.target.files;if(V?.length){const k=V[0];document.querySelector("#attach-drop-zone p").textContent=`Selected: ${k.name}`,this.currentAttachmentFile=k,this.lastAttachmentFilePath=null,this.setupAttachmentControls()}})})(A,E);const x=document.getElementById("canvas-container");x.addEventListener("dragover",T=>{T.preventDefault(),T.stopPropagation()}),x.addEventListener("drop",async T=>{if(T.preventDefault(),T.stopPropagation(),!T.dataTransfer?.files||T.dataTransfer.files.length===0)return;const L=Array.from(T.dataTransfer.files),P=L.filter(U=>U.name.toLowerCase().endsWith(".bmd")),z=L.filter(U=>{const V=U.name.toLowerCase().split(".").pop();return["jpg","jpeg","png","tga","ozj","ozt"].includes(V||"")});if(P.length>0){const U=P[0];let V;if(Ct()){const k=fr(U);k&&(V=k,Ae.debug("%c[Canvas drop] Got BMD path from Electron API:","color: #4CAF50",V))}await this.handleBmdFile(U,V),Ae.debug("%c[Canvas drop] Loaded BMD:","color: #4CAF50",U.name)}z.length>0&&(await this.handleMultipleTextureFiles(z),Ae.debug("%c[Canvas drop] Loaded textures:","color: #4CAF50",z.map(U=>U.name).join(", "))),P.length===0&&z.length===0&&Ae.warn("[Canvas drop] No BMD or texture files found in drop")}),ni.addEventListener("change",()=>{qe&&(qe.visible=ni.checked)}),Fa.addEventListener("change",()=>{const T=Fa.checked;this.scene.traverse(L=>{if(L.isMesh){const P=L.material;"wireframe"in P&&(P.wireframe=T,P.needsUpdate=!0)}})}),this.showBoundingBoxCheckbox=document.getElementById("show-bbox-checkbox"),this.showAxesCheckbox=document.getElementById("show-axes-checkbox"),this.showNormalsCheckbox=document.getElementById("show-normals-checkbox"),this.showBoundingBoxCheckbox.addEventListener("change",()=>{this.updateBoundingBoxHelperState()}),this.showAxesCheckbox.addEventListener("change",()=>{this.updateAxesHelperState()}),this.showNormalsCheckbox.addEventListener("change",()=>{this.updateNormalsHelpersState()});const S=document.getElementById("attach-bone-select"),I=document.getElementById("attach-bone-slider"),v=document.getElementById("attach-bone-value"),M=document.getElementById("undo-attach-btn");S.addEventListener("change",()=>{const T=parseInt(S.value);isNaN(T)||(I.value=T.toString(),v.textContent=T.toString(),this.changeBoneForAttachment(T))}),I.addEventListener("input",()=>{const T=parseInt(I.value);S.value=T.toString(),v.textContent=T.toString(),this.changeBoneForAttachment(T)}),M.addEventListener("click",()=>this.removeAttachment()),Ae.groupEnd()}initScaleSlider(){const e=document.getElementById("scale-slider"),t=document.getElementById("scale-label");e.addEventListener("input",n=>{const i=parseFloat(n.target.value);t.textContent=`Scale: ${i.toFixed(2)}x`,this.setModelScale(i)}),t.textContent=`Scale: ${parseFloat(e.value).toFixed(2)}x`}setModelScale(e){this.loadedGroup&&(this.loadedGroup.scale.set(e,e,e),this.updateStageForObject(this.loadedGroup))}setSceneBackground(e){const t=new Te(e);this.scene.background=t,this.scene.fog&&this.scene.fog.color.copy(t);const n=document.getElementById("canvas-container");n&&(n.style.backgroundColor=e)}applySceneMaterialTuning(e){e.traverse(t=>{const n=t;if(!n.isMesh)return;n.castShadow=!0,n.receiveShadow=!0,(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{r&&(r instanceof Yo&&(r.shininess=Math.max(r.shininess,12),r.specular.set(3098729)),"envMapIntensity"in r&&(r.envMapIntensity=.72),r.needsUpdate=!0)})})}updateStageForObject(e){if(!e){this.gridHelper&&(this.gridHelper.position.y=0,this.gridHelper.scale.set(1,1,1));return}const t=new Ut().setFromObject(e);if(!Number.isFinite(t.min.y)||!Number.isFinite(t.max.y))return;const n=t.getSize(new N),i=Math.max(120,Math.max(n.x,n.z)*.74+30),r=t.min.y-1.2;if(this.gridHelper){const a=Math.max(.65,Math.min(2.4,i/230));this.gridHelper.position.y=r,this.gridHelper.scale.set(a,1,a)}this.directionalLight.target.position.set(0,(t.min.y+t.max.y)*.5,0),this.directionalLight.target.updateMatrixWorld()}handleBmdFile=async(e,t)=>{Ae.info(`handleBmdFile("${e.name}")`);try{await Bx.validateBMDFile(e),this.bmdFile=e,this.lastBmdFilePath=t||null,document.querySelector("#bmd-drop-zone p").textContent=`Selected: ${e.name}`,this.loadAndDisplayModel()}catch(n){if(n instanceof dn)alert(`Invalid file: ${n.message}`),Ae.error("File validation failed:",n.message);else throw n}};handleAnimBmdFile=e=>{Ae.debug(`[App] handleAnimBmdFile("${e.name}")`),this.animBmdFile=e,document.querySelector("#anim-bmd-drop-zone p").textContent=`Selected: ${e.name}`,this.loadExternalAnimations()};handleMultipleTextureFiles=e=>{Array.from(e).forEach(t=>this.loadAndApplyTexture(t))};handleTextureFile=e=>{Ae.debug(`[App] handleTextureFile("${e.name}")`),this.loadAndApplyTexture(e)};exportToGLB(){if(!this.loadedGroup){alert("Load a BMD model first.");return}const e=new Cr,t={binary:!0,animations:this.loadedGroup.animations,embedImages:!0};e.parse(this.loadedGroup,n=>{const i=n,r=new Blob([i],{type:"model/gltf-binary"}),a=(this.loadedGroup.name||"model").replace(/[^a-z0-9_-]/gi,"_"),o=new Date().toISOString().replace(/[:T]/g,"").split(".")[0],l=`${a}_${o}.glb`,c=document.createElement("a");c.href=URL.createObjectURL(r),c.download=l,c.click(),URL.revokeObjectURL(c.href),Ae.debug(`✔️  Saved ${l} (${(r.size/1024).toFixed(1)} KB)`)},n=>{Ae.error("❌ GLTFExporter error:",n),alert("Error during export. Check the console.")},t)}exportGif(){if(this.isRecordingGif)return;if(!this.loadedGroup){alert("Load a BMD model first.");return}const e=document.getElementById("status"),t=document.getElementById("export-gif-btn");this.isRecordingGif=!0,e.textContent="Recording GIF…",t&&(t.disabled=!0);const n=Math.max(16,Math.min(1024,parseInt(this.gifWidthInput?.value??"800",10)||800)),i=Math.max(16,Math.min(1024,parseInt(this.gifHeightInput?.value??"600",10)||600)),r=document.getElementById("speed-slider"),a=parseFloat(r?.value??"1")||1,o=!!(this.currentAction&&this.mixer);let l=null,c=0;o&&this.currentAction&&(l=this.currentAction.getClip(),c=l.userData?.numAnimationKeys??0);const h=parseInt(this.gifDelayInput?.value??"",10),u=!Number.isNaN(h)&&h>0?h:null,d=Math.max(1,Math.min(8,parseInt(this.gifFrameMultiplierInput?.value??"1",10)||1)),p=document.createElement("canvas");p.width=n,p.height=i;const g=p.getContext("2d"),_=65280,f=_>>16&255,m=_>>8&255,b=_&255,A=new jh({workers:2,workerScript:Kh,quality:10,width:n,height:i,transparent:_}),E=this.scene.background?this.scene.background.clone():null;this.scene.background=null;const C=this.gridHelper?.visible??!1;if(this.gridHelper&&(this.gridHelper.visible=!1),A.on("progress",L=>{e.textContent=`Rendering GIF… ${(L*100).toFixed(0)}%`}),A.on("finished",L=>{E?this.scene.background=E:this.scene.background=null,this.gridHelper&&(this.gridHelper.visible=C);const P=URL.createObjectURL(L),z=document.createElement("a");z.href=P,z.download=`model_${n}x${i}.gif`,z.click(),URL.revokeObjectURL(P),this.isRecordingGif=!1,t&&(t.disabled=!1),e.textContent=`GIF saved (${n}×${i}).`}),A.on("abort",()=>{E?this.scene.background=E:this.scene.background=null,this.gridHelper&&(this.gridHelper.visible=C),this.isRecordingGif=!1,t&&(t.disabled=!1),e.textContent="GIF recording aborted."}),!o||!l||c===0){this.renderer.render(this.scene,this.camera),g.clearRect(0,0,n,i),g.drawImage(this.renderer.domElement,0,0,n,i);const L=g.getImageData(0,0,n,i),P=L.data,z=40;for(let U=0;U<P.length;U+=4)P[U+3]<z&&(P[U]=f,P[U+1]=m,P[U+2]=b,P[U+3]=255);g.putImageData(L,0,0),A.addFrame(g,{copy:!0,delay:Math.min(Math.max(u??120,10),1e3)}),A.render();return}const x=Math.max(1,c*d),S=this.currentAction._effectiveTimeScale??a,I=l.duration/Math.max(S,1e-4)/x*1e3,v=Math.min(Math.max(u??Math.round(I),5),1e3);let M=0;const T=()=>{if(M>=x){A.render();return}const L=M/x*l.duration;this.currentAction.time=L,this.mixer.update(0),this.renderer.render(this.scene,this.camera),g.clearRect(0,0,n,i),g.drawImage(this.renderer.domElement,0,0,n,i);const P=g.getImageData(0,0,n,i),z=P.data,U=40;for(let V=0;V<z.length;V+=4)z[V+3]<U&&(z[V]=f,z[V+1]=m,z[V+2]=b,z[V+3]=255);g.putImageData(P,0,0),A.addFrame(g,{copy:!0,delay:v}),M++,requestAnimationFrame(T)};requestAnimationFrame(T)}async loadAndDisplayModel(){if(!this.bmdFile)return;const e=document.getElementById("status");e.textContent="Loading model…",Ae.groupDebug("loadAndDisplayModel()"),Ae.time("loadAndDisplayModel"),this.clearScene(),this.loadedGroup=null,this.requiredTextures=[],document.getElementById("texture-controls").style.display="none";try{const t=await this.bmdFile.arrayBuffer(),{group:n,requiredTextures:i}=await this.bmdLoader.load(t);n.name="bmd_model",this.scene.add(n),this.loadedGroup=n,this.requiredTextures=i,this.applySceneMaterialTuning(n),this.updateStageForObject(n);const r=n.getObjectByProperty("type","SkinnedMesh");if(this.mainSkeleton=r?.skeleton||null,this.setupAnimations(n),e.textContent=`Loaded: ${n.name} (animations: ${n.animations.length})`,this.updateTextureUI(),this.updateDiagnosticInfo(),this.exportBtn&&(this.exportBtn.disabled=!1),Ct()&&this.lastBmdFilePath&&i.length>0){Ae.debug("%c[Electron] Auto-searching textures...","color: #4CAF50"),Ae.debug("[Electron] Required textures from BMD:",i),Ae.debug("[Electron] BMD file path:",this.lastBmdFilePath),e.textContent="Searching for textures...";try{const a=await Lo(this.lastBmdFilePath,i),o=Object.keys(a).length;if(Ae.debug("[Electron] Search result:",a),o>0){const l=Object.values(a).reduce((c,h)=>c+h.length,0);Ae.debug(`%c[Electron] Found ${o} texture names (${l} files), loading...`,"color: #4CAF50");for(const[c,h]of Object.entries(a))for(const u of h){const d=await Cs(u);if(d){const p=Io(d.name,d.data);await this.loadAndApplyTexture(p)}}e.textContent=`Loaded: ${n.name} | Auto-loaded ${l} texture files for ${o} base names`}else e.textContent=`Loaded: ${n.name} | No textures found automatically`}catch(a){Ae.error("[Electron] Error auto-searching textures:",a),e.textContent=`Loaded: ${n.name} | Texture search failed`}}qe&&(this.scene.remove(qe),qe.geometry.dispose(),qe=null),qe=new Ri(n),qe.visible=ni.checked,this.scene.add(qe),n.traverse(a=>{if(a.isMesh){const o=a.material;"wireframe"in o&&(o.wireframe=Fa.checked,o.needsUpdate=!0)}}),this.meshRefs=[],n.traverse(a=>{a.isMesh&&this.meshRefs.push(a)}),this.buildBlendingUI(),this.updateBoundingBoxHelperState(),this.updateAxesHelperState(),this.updateNormalsHelpersState()}catch(t){Ae.error("loader.load() ERROR",t),e.textContent=`Error: ${t.message}`}finally{Ae.timeEnd("loadAndDisplayModel"),Ae.groupEnd()}}async loadExternalAnimations(){if(!(!this.loadedGroup||!this.animBmdFile))try{const e=await this.animBmdFile.arrayBuffer();let t=this.mainSkeleton;if(t||(Ae.debug("[loadExternalAnimations] mainSkeleton not available, searching in loadedGroup..."),this.loadedGroup.traverse(i=>{!t&&i.isSkinnedMesh&&(t=i.skeleton)})),!t){Ae.warn("No skeleton found for external animations");return}Ae.debug("[loadExternalAnimations] Using skeleton with",t.bones.length,"bones");const n=this.bmdLoader.loadAnimationsFrom(e,t);n.length&&(this.loadedGroup.animations=n,this.setupAnimations(this.loadedGroup),document.getElementById("status").textContent=`Animations loaded from ${this.animBmdFile.name}`)}catch(e){Ae.error("Failed to load external animations",e)}}buildBlendingUI(){const e=document.getElementById("blending-controls"),t=document.getElementById("blending-container");t.innerHTML="";const n={Opaque:Dt,Normal:Hn,Additive:pr,Multiply:gr,Subtractive:mr};this.meshRefs.forEach((i,r)=>{const a=document.createElement("div");a.className="blend-row";const o=document.createElement("span");o.textContent=i.name||`Mesh ${r}`,o.className="blend-label";const l=document.createElement("select");l.className="animation-dropdown blend-select",Object.keys(n).forEach(h=>{const u=document.createElement("option");u.value=h,u.text=h,l.appendChild(u)});const c=Object.entries(n).find(([,h])=>h===i.material.blending);l.value=c?c[0]:"Normal",l.addEventListener("change",()=>{const h=i.material;h.blending=n[l.value],h.transparent=h.blending!==Dt,h.depthWrite=h.blending===Dt,h.needsUpdate=!0}),a.append(o,l),t.appendChild(a)}),e.style.display=this.meshRefs.length?"block":"none"}clearScene(){const e=this.scene.getObjectByName("bmd_model");e&&(this.scene.remove(e),e.traverse(t=>{if(t.isMesh){t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(i=>i.dispose()):n&&("map"in n&&n.map&&n.map instanceof ut&&n.map.dispose(),n.dispose())}}),this.mixer=ai.disposeMixer(this.mixer),this.currentAction=null,document.getElementById("animations-container").innerHTML=""),this.meshRefs=[],this.mainSkeleton=null,this.boundingBoxHelper&&(this.scene.remove(this.boundingBoxHelper),this.boundingBoxHelper.geometry.dispose(),this.boundingBoxHelper.material.dispose(),this.boundingBoxHelper=null),this.axesHelper&&(this.scene.remove(this.axesHelper),this.axesHelper.geometry.dispose(),this.axesHelper.material.dispose(),this.axesHelper=null),this.normalHelpers.length&&(this.normalHelpers.forEach(t=>{this.scene.remove(t),t.geometry.dispose(),t.material.dispose()}),this.normalHelpers=[]),this.normalsVisible=!1,ai.disposeObjectArray(this.attachments),this.exportBtn&&(this.exportBtn.disabled=!0),this.updateStageForObject(null),this.updateDiagnosticInfo()}updateTextureUI(){const e=document.getElementById("texture-controls"),t=document.getElementById("texture-info-text"),n=document.getElementById("texture-drop-zone"),i=Array.from(new Set(this.requiredTextures));i.length>0&&i[0]?(t.textContent=i.join(", "),e.style.display="block",n.style.display="block"):(t.textContent="This model does not require textures.",e.style.display="block",n.style.display="none")}async loadAndApplyTexture(e){if(!this.loadedGroup){Ae.warn("Model not loaded - no textures.");return}const t=document.getElementById("status");t.textContent=`Loading: ${e.name}…`;try{let n=function(u){const d=u.split(/[\\/]/).pop().toLowerCase(),p=d.split(".").pop();return{base:d.replace(/\.[^.]+$/,""),ext:p}};const i=e.name.split(".").pop().toLowerCase();let r;if(i==="tga")r=await this.textureLoader.loadAsync(await Xh(await e.arrayBuffer()));else if(i==="ozj"||i==="ozt")r=await this.textureLoader.loadAsync(await $h(await e.arrayBuffer()));else{const u=URL.createObjectURL(e);r=await this.textureLoader.loadAsync(u),URL.revokeObjectURL(u)}r.colorSpace=At,r.wrapS=r.wrapT=Bi,r.flipY=!1,r.name=e.name;const a={jpg:["ozj","jpeg"],jpeg:["ozj","jpg"],ozj:["jpg","jpeg","png"],png:["ozj","ozt"],tga:["ozt","png"],ozt:["tga","png"]},o=e.name.toLowerCase(),l=o.replace(/\.[^.]+$/,""),c=o.split(".").pop(),h=[];if(this.loadedGroup.traverse(u=>{if(u.isMesh&&u.userData.texturePath){const d=u.userData.texturePath,{base:p,ext:g}=n(d),f=(g===c||a[g]?.includes(c)||a[c]?.includes(g))&&p===l;h.push({mesh:u,path:d,isMatch:f})}}),c==="ozj"||c==="ozt"){let u=!1;h.forEach(d=>{if(d.isMatch){const p=d.mesh.material;p.map&&p.map.dispose(),p.map=r,p.color.set(16777215),p.needsUpdate=!0,u=!0,this.exportBtn&&(this.exportBtn.disabled=!1)}}),u||Ae.warn(`No matching mesh found for "${e.name}"`),t.textContent=u?`Texture "${e.name}" loaded.`:`No matching mesh found for "${e.name}". Check the console.`}else{let u=`Apply texture "${e.name}" to which mesh?
`;h.forEach((g,_)=>{u+=`${_}: ${g.mesh.name} (needs ${g.path})
`});const d=window.prompt(u,""),p=d!==null?parseInt(d,10):NaN;if(!isNaN(p)&&h[p]){const _=h[p].mesh.material;_.map&&_.map.dispose(),_.map=r,_.color.set(16777215),_.needsUpdate=!0,this.exportBtn&&(this.exportBtn.disabled=!1),t.textContent=`Texture "${e.name}" loaded.`}else t.textContent=`Texture "${e.name}" was not applied.`}}catch(n){Ae.error("Texture load error:",n),t.textContent=`Error: ${n.message}`}}isDrawableTextureImage(e){if(!e||typeof e!="object"&&typeof e!="function")return!1;const t=e;return typeof t.width=="number"&&typeof t.height=="number"}exportTextures(){if(!this.loadedGroup)return;const e=new Set;this.loadedGroup.traverse(n=>{if(n.isMesh){const i=n.material;if(!i.map||e.has(i.map))return;const r=i.map.image;if(!this.isDrawableTextureImage(r))return;const a=r,o=document.createElement("canvas");o.width=a.width,o.height=a.height;const l=o.getContext("2d");if(!l)return;l.drawImage(a,0,0),o.toBlob(c=>{if(!c)return;const h=document.createElement("a");h.href=URL.createObjectURL(c);const u=(i.map?.name?i.map.name:"texture").replace(/\.[^.]+$/,"");h.download=`${u}.png`,h.style.display="none",document.body.appendChild(h),h.click(),document.body.removeChild(h)},"image/png"),e.add(i.map)}});const t=document.getElementById("status");t.textContent=e.size?`Exported ${e.size} texture(s).`:"No loaded textures to export."}getModelSizeHint(){if(!this.loadedGroup)return 100;const t=new Ut().setFromObject(this.loadedGroup).getSize(new N);return Math.max(t.x,t.y,t.z)||100}updateBoundingBoxHelperState(){if(!this.showBoundingBoxCheckbox?.checked||!this.loadedGroup){this.boundingBoxHelper&&(this.boundingBoxHelper.visible=!1);return}this.boundingBoxHelper||(this.boundingBoxHelper=new Ph(this.loadedGroup,16776960),this.boundingBoxHelper.name="bmd_bbox_helper",this.scene.add(this.boundingBoxHelper)),this.boundingBoxHelper.visible=!0,this.updateSkinnedMeshesBoundingBoxes(),this.boundingBoxHelper.update()}updateSkinnedMeshesBoundingBoxes(){this.loadedGroup&&this.loadedGroup.traverse(e=>{const t=e;if(!t.isSkinnedMesh)return;const n=t.geometry;if(!n.getAttribute("position"))return;if(!!n.getAttribute("skinIndex")&&!!n.getAttribute("skinWeight")){t.computeBoundingBox();return}t.boundingBox||(t.boundingBox=new Ut),n.boundingBox===null&&n.computeBoundingBox(),n.boundingBox&&t.boundingBox&&t.boundingBox.copy(n.boundingBox)})}updateAxesHelperState(){if(!this.showAxesCheckbox?.checked||!this.loadedGroup){this.axesHelper&&(this.axesHelper.visible=!1);return}const t=this.getModelSizeHint()*.6||100;this.axesHelper||(this.axesHelper=new Dh(t),this.axesHelper.name="bmd_axes_helper",this.axesHelper.matrixAutoUpdate=!0,this.scene.add(this.axesHelper)),this.axesHelper.visible=!0}updateNormalsHelpersState(){if(!this.showNormalsCheckbox?.checked||!this.loadedGroup){this.normalsVisible=!1,this.normalHelpers.length&&this.normalHelpers.forEach(t=>{t.visible=!1});return}if(!this.normalHelpers.length){const t=this.getModelSizeHint()*.05||5;this.loadedGroup.traverse(n=>{const i=n;if(i.isMesh&&i.geometry.attributes?.normal){let r;i.isSkinnedMesh?r=new Qh(i,t,65535):r=new A_(i,t,65535),r.name=`bmd_normals_helper_${this.normalHelpers.length}`,this.scene.add(r),this.normalHelpers.push(r)}})}this.normalHelpers.forEach(t=>{t.visible=!0}),this.normalsVisible=!0,this.normalsUpdateCounter=0,this.normalHelpers.forEach(t=>t.update())}setAnimationSpeed(e){this.currentAction&&this.currentAction.setEffectiveTimeScale(e)}setupAnimations(e){this.mixer=new Rh(e),this.currentAction=null;const t=document.getElementById("animations-container"),n=document.getElementById("speed-slider");if(t.innerHTML="",!e.animations.length){t.textContent="No animations in this model.";return}const i=document.createElement("select");i.classList.add("animation-dropdown"),i.id="animation-select";const r=document.createElement("option");r.textContent="Select Animation",r.value="",r.disabled=!0,i.appendChild(r),e.animations.forEach((o,l)=>{const c=document.createElement("option");c.value=l.toString(),c.textContent=`Animation ${l}`,i.appendChild(c)}),i.onchange=()=>{const o=parseInt(i.value);if(isNaN(o))return;const l=e.animations[o];this.mixer.stopAllAction(),this.currentAction=this.mixer.clipAction(l);const c=parseFloat(n.value);this.currentAction.setEffectiveTimeScale(c),this.currentAction.reset().play()},t.appendChild(i),e.animations.length>0&&(i.value="0",i.dispatchEvent(new Event("change")));const a=document.getElementById("frame-lock-controls");a.style.display=e.animations.length&&e.animations[0].userData?.numAnimationKeys?"block":"none",this.lockFrameCheckbox.checked=!1,this.isFrameLocked=!1,this.updateDiagnosticInfo()}animate=e=>{requestAnimationFrame(this.animate);const t=this.clock.getDelta();if(!this.isActive)return;const n=e*25e-5;this.rimLight.position.x=-160+Math.sin(n)*18,this.rimLight.position.z=-210+Math.cos(n)*14,this.loadedGroup&&this.isAutoRotating&&!this.userIsInteracting&&!this.isRecordingGif&&(this.loadedGroup.rotation.z+=t*.2),this.mixer&&(this.isFrameLocked?this.applyLockedFrame():this.isRecordingGif||this.mixer.update(t)),this.axesHelper&&this.loadedGroup&&this.axesHelper.visible&&(this.axesHelper.position.copy(this.loadedGroup.position),this.axesHelper.quaternion.copy(this.loadedGroup.quaternion),this.axesHelper.scale.copy(this.loadedGroup.scale)),this.boundingBoxHelper&&this.loadedGroup&&this.boundingBoxHelper.visible&&(this.updateSkinnedMeshesBoundingBoxes(),this.boundingBoxHelper.update()),this.normalsVisible&&this.normalHelpers.length&&(this.normalsUpdateCounter=(this.normalsUpdateCounter+1)%3,this.normalsUpdateCounter===0&&this.normalHelpers.forEach(i=>i.update())),this.controls.update(),this.renderer.render(this.scene,this.camera),this.updateDiagnosticInfo(e)};applyLockedFrame(){if(!this.currentAction)return;const e=this.currentAction.getClip(),t=e.userData?.numAnimationKeys??0;if(!t)return;const n=Math.min(Math.max(this.lockedFrame,0),t-1);this.currentAction.time=n/t*e.duration,this.mixer.update(0)}updateDiagnosticInfo(e=0){if(this.diagActionsCountEl.textContent=this.loadedGroup?.animations.length.toString()||"0",this.currentAction){const r=this.currentAction.getClip(),a=r.userData?.numAnimationKeys??0;if(this.diagAnimationKeysEl.textContent=a.toString(),a>0){const o=(this.currentAction.time%r.duration+r.duration)%r.duration;o/r.duration;const l=this.isFrameLocked?this.lockedFrame:Math.floor(o/r.duration*a);this.diagCurrentFrameEl.textContent=l.toString()}else this.diagCurrentFrameEl.textContent="N/A"}else this.diagAnimationKeysEl.textContent="0",this.diagCurrentFrameEl.textContent="N/A";let t=0;this.loadedGroup&&this.loadedGroup.traverse(r=>{r.isBone&&t++}),this.diagBonesCountEl.textContent=t.toString();let n=0;this.loadedGroup&&this.loadedGroup.traverse(r=>{r.isMesh&&n++}),this.diagMeshesCountEl.textContent=n.toString(),this.frameCount++;const i=e-this.lastFrameTime;i>=1e3&&(this.fps=this.frameCount*1e3/i,this.diagFpsEl.textContent=this.fps.toFixed(0),this.frameCount=0,this.lastFrameTime=e)}setBrightness(e){const t=Math.max(.1,e);this.renderer.toneMappingExposure=t,this.ambientLight&&(this.ambientLight.intensity=.48*t),this.hemisphereLight&&(this.hemisphereLight.intensity=.62*t),this.directionalLight&&(this.directionalLight.intensity=1.85*t),this.rimLight&&(this.rimLight.intensity=.82*t)}async setupAttachmentControls(){if(Ae.debug("[setupAttachmentControls] Starting..."),!this.loadedGroup||!this.currentAttachmentFile){alert("First load the base character model.");return}if(!this.mainSkeleton){alert("The base model does not include a skeleton.");return}const e=this.mainSkeleton.bones;Ae.debug(`[setupAttachmentControls] Main skeleton has ${e.length} bones`);const t=document.getElementById("attach-controls");t.style.display="block";const n=document.getElementById("attach-bone-select"),i=document.getElementById("attach-bone-slider"),r=document.getElementById("attach-bone-value");n.innerHTML='<option value="">-- Select Bone --</option>',e.forEach((a,o)=>{const l=document.createElement("option");l.value=o.toString(),l.textContent=`${o}: ${a.name||"Unnamed"}`,n.appendChild(l)}),i.min="0",i.max=(e.length-1).toString(),i.value="0",r.textContent="0",await this.loadAttachmentAtBone(0),n.value="0"}async loadAttachmentAtBone(e){if(Ae.debug(`[loadAttachmentAtBone] Loading attachment at bone ${e}`),!this.loadedGroup||!this.currentAttachmentFile||!this.mainSkeleton){Ae.warn("[loadAttachmentAtBone] Missing required objects");return}const t=this.mainSkeleton.bones;if(e<0||e>=t.length){Ae.warn("[loadAttachmentAtBone] Bone index out of range");return}const n=t[e];Ae.debug(`[loadAttachmentAtBone] Attaching to bone: ${n.name||"Unnamed"}`),this.currentAttachment&&(this.currentAttachment.parent&&this.currentAttachment.parent.remove(this.currentAttachment),this.disposeAttachment(this.currentAttachment));const{group:i,requiredTextures:r}=await this.bmdLoader.load(await this.currentAttachmentFile.arrayBuffer());if(i.name=`attachment_bone_${e}`,i.position.set(0,0,0),i.rotation.set(0,0,0),i.scale.set(1,1,1),this.applySceneMaterialTuning(i),n.add(i),this.currentAttachment=i,this.requiredTextures.push(...r),this.updateTextureUI(),Ct()&&this.lastAttachmentFilePath&&r.length>0){Ae.debug("%c[Electron] Auto-searching textures for attachment...","color: #4CAF50");try{const a=await Lo(this.lastAttachmentFilePath,r),o=Object.keys(a).length;if(o>0){const l=Object.values(a).reduce((c,h)=>c+h.length,0);Ae.debug(`%c[Electron] Found ${o} texture names (${l} files) for attachment, loading...`,"color: #4CAF50");for(const[c,h]of Object.entries(a))for(const u of h){const d=await Cs(u);if(d){const p=Io(d.name,d.data);await this.loadAndApplyTexture(p)}}Ae.debug(`%c[Electron] Auto-loaded ${l} texture files for ${o} base names`,"color: #4CAF50")}}catch(a){Ae.error("[Electron] Error auto-searching textures for attachment:",a)}}qe&&(this.scene.remove(qe),qe.geometry.dispose()),qe=new Ri(this.loadedGroup),qe.visible=ni.checked,this.scene.add(qe),this.meshRefs=[],this.loadedGroup.traverse(a=>{a.isMesh&&this.meshRefs.push(a)}),this.buildBlendingUI(),this.updateStageForObject(this.loadedGroup)}changeBoneForAttachment(e){if(Ae.debug(`[changeBoneForAttachment] Changing to bone ${e}`),!this.loadedGroup||!this.currentAttachment||!this.mainSkeleton){Ae.warn("[changeBoneForAttachment] Missing required objects");return}const t=this.mainSkeleton.bones;if(e<0||e>=t.length){Ae.warn(`[changeBoneForAttachment] Bone index ${e} out of range (0-${t.length-1})`);return}const n=t[e];Ae.debug(`[changeBoneForAttachment] Target bone: ${n.name||"Unnamed"}`),this.currentAttachment.parent&&this.currentAttachment.parent.remove(this.currentAttachment),this.currentAttachment.position.set(0,0,0),this.currentAttachment.rotation.set(0,0,0),this.currentAttachment.scale.set(1,1,1),n.add(this.currentAttachment),this.currentAttachment.name=`attachment_bone_${e}`,this.currentAttachment.matrixWorldNeedsUpdate=!0,this.currentAttachment.parent&&(this.currentAttachment.parent.matrixWorldNeedsUpdate=!0),this.updateStageForObject(this.loadedGroup)}removeAttachment(){if(!this.currentAttachment){alert("No attachment to remove.");return}this.currentAttachment.parent&&this.currentAttachment.parent.remove(this.currentAttachment),this.disposeAttachment(this.currentAttachment),this.currentAttachment=null,this.currentAttachmentFile=null;const e=document.getElementById("attach-controls");e.style.display="none",document.querySelector("#attach-drop-zone p").textContent="Drop attachment .bmd",qe&&this.loadedGroup&&(this.scene.remove(qe),qe.geometry.dispose(),qe=new Ri(this.loadedGroup),qe.visible=ni.checked,this.scene.add(qe)),this.meshRefs=[],this.loadedGroup&&this.loadedGroup.traverse(t=>{t.isMesh&&this.meshRefs.push(t)}),this.buildBlendingUI(),this.updateTextureUI(),this.updateStageForObject(this.loadedGroup)}disposeAttachment(e){e.traverse(t=>{if(t.isMesh){t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(i=>i.dispose()):(n.map&&n.map.dispose(),n.dispose())}})}async attachModelToBone(e,t){if(!this.loadedGroup){alert("First load the base character model.");return}const n=this.loadedGroup.getObjectByProperty("type","SkinnedMesh");if(!n){alert("The base model does not include a skeleton.");return}const i=n.skeleton.bones;let r=null;if(typeof t=="number"){if(t<0||t>=i.length){alert(`The ${t} index is out of range (0 - ${i.length-1}).`);return}r=i[t]}else if(r=this.loadedGroup.getObjectByName(t),!r){alert(`The bone named “${t}” was not found.`);return}const{group:a,requiredTextures:o}=await this.bmdLoader.load(await e.arrayBuffer());a.name=`attachment_${t}_${this.attachments.length}`,a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),this.applySceneMaterialTuning(a),r.add(a),this.attachments.push(a),this.requiredTextures.push(...o),this.updateTextureUI(),qe&&(this.scene.remove(qe),qe.geometry.dispose()),qe=new Ri(this.loadedGroup),qe.visible=ni.checked,this.scene.add(qe),this.meshRefs=[],this.loadedGroup.traverse(l=>{l.isMesh&&this.meshRefs.push(l)}),this.buildBlendingUI(),this.updateStageForObject(this.loadedGroup)}undoLastAttachment(){const e=this.attachments.pop();if(!e){alert("No attachments to remove.");return}ai.disposeObject3D(e),qe&&(this.scene.remove(qe),qe.geometry.dispose()),this.loadedGroup&&(qe=new Ri(this.loadedGroup),qe.visible=ni.checked,this.scene.add(qe),this.meshRefs=[],this.loadedGroup.traverse(t=>{t.isMesh&&this.meshRefs.push(t)})),this.buildBlendingUI(),this.updateTextureUI(),this.updateStageForObject(this.loadedGroup)}}const zx=new kx;let Rr=null;if(Ct())Rr=new tl,Rr.setActive(!1);else{const s=document.querySelector('.tab-btn[data-view="character"]');s&&(s.style.display="none");const e=document.getElementById("sidebar-character");e&&e.classList.add("hidden");const t=document.getElementById("view-character");t&&t.classList.add("hidden")}const Vx=document.querySelectorAll(".tab-btn");Vx.forEach(s=>{s.addEventListener("click",()=>{const e=s.dataset.view||"bmd";zx.setActive(e==="bmd"),Rr&&Rr.setActive(e==="character")})});
