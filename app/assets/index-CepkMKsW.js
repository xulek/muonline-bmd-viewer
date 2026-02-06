(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Od="modulepreload",kd=function(s){return"/muonline-bmd-viewer/app/"+s},yc={},Mc=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};var a=c;document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(t.map(h=>{if(h=kd(h),h in yc)return;yc[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Od,u||(p.as="script"),p.crossOrigin="",p.href=h,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})};const ya="182",os={ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zd=0,Sc=1,Hd=2,Yr=1,Dl=2,Xs=3,Wn=0,Kt=1,dn=2,kt=0,Vn=1,er=2,sa=3,ra=4,Vd=5,Mi=100,Gd=101,Wd=102,Xd=103,$d=104,jd=200,qd=201,Yd=202,Kd=203,Fo=204,No=205,Zd=206,Jd=207,Qd=208,ef=209,tf=210,nf=211,sf=212,rf=213,af=214,Bo=0,Oo=1,ko=2,ds=3,zo=4,Ho=5,Vo=6,Go=7,Ma=0,of=1,lf=2,Rn=0,Eu=1,wu=2,Tu=3,fr=4,Au=5,Cu=6,Ru=7,bc="attached",cf="detached",Iu=300,Ai=301,fs=302,Wo=303,Xo=304,Sa=306,Ln=1e3,Bt=1001,aa=1002,bt=1003,Lu=1004,$s=1005,Pt=1006,Kr=1007,ai=1008,Wt=1009,Du=1010,Pu=1011,tr=1012,Pl=1013,Dn=1014,fn=1015,Xn=1016,Ul=1017,Fl=1018,nr=1020,Uu=35902,Fu=35899,Nu=1021,Bu=1022,ln=1023,$n=1026,Ei=1027,ls=1028,Nl=1029,ps=1030,Bl=1031,Ol=1033,Zr=33776,Jr=33777,Qr=33778,ea=33779,$o=35840,jo=35841,qo=35842,Yo=35843,Ko=36196,Zo=37492,Jo=37496,Qo=37488,el=37489,tl=37490,nl=37491,il=37808,sl=37809,rl=37810,al=37811,ol=37812,ll=37813,cl=37814,hl=37815,ul=37816,dl=37817,fl=37818,pl=37819,ml=37820,gl=37821,_l=36492,xl=36494,vl=36495,yl=36283,Ml=36284,Sl=36285,bl=36286,hf=2200,uf=2201,df=2202,ir=2300,oa=2301,Oa=2302,ns=2400,is=2401,la=2402,kl=2500,ff=2501,pf=3200,ba=0,mf=1,Tn="",Rt="srgb",ms="srgb-linear",ca="linear",ut="srgb",Ii=7680,Ec=519,gf=512,_f=513,xf=514,zl=515,vf=516,yf=517,Hl=518,Mf=519,El=35044,wc="300 es",An=2e3,ha=2001;function Ou(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function sr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bf(){const s=sr("canvas");return s.style.display="block",s}const Tc={};function Ac(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ce(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ue(...s){const e="THREE."+s.shift();console.error(e,...s)}function rr(...s){const e=s.join(" ");e in Tc||(Tc[e]=!0,Ce(...s))}function Ef(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cc=1234567;const Ys=Math.PI/180,ar=180/Math.PI;function ci(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[s&255]+zt[s>>8&255]+zt[s>>16&255]+zt[s>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function qe(s,e,t){return Math.max(e,Math.min(t,s))}function Vl(s,e){return(s%e+e)%e}function wf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Tf(s,e,t){return s!==e?(t-s)/(e-s):0}function Ks(s,e,t){return(1-t)*s+t*e}function Af(s,e,t,n){return Ks(s,e,1-Math.exp(-t*n))}function Cf(s,e=1){return e-Math.abs(Vl(s,e*2)-e)}function Rf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function If(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Lf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Df(s,e){return s+Math.random()*(e-s)}function Pf(s){return s*(.5-Math.random())}function Uf(s){s!==void 0&&(Cc=s);let e=Cc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ff(s){return s*Ys}function Nf(s){return s*ar}function Bf(s){return(s&s-1)===0&&s!==0}function Of(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function kf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zf(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ti={DEG2RAD:Ys,RAD2DEG:ar,generateUUID:ci,clamp:qe,euclideanModulo:Vl,mapLinear:wf,inverseLerp:Tf,lerp:Ks,damp:Af,pingpong:Cf,smoothstep:Rf,smootherstep:If,randInt:Lf,randFloat:Df,randFloatSpread:Pf,seededRandom:Uf,degToRad:Ff,radToDeg:Nf,isPowerOfTwo:Bf,ceilPowerOfTwo:Of,floorPowerOfTwo:kf,setQuaternionFromProperEuler:zf,normalize:jt,denormalize:Qi};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let f=l*d+c*p+h*g+u*_;f<0&&(d=-d,p=-p,g=-g,_=-_,f=-f);let m=1-o;if(f<.9995){const y=Math.acos(f),w=Math.sin(y);m=Math.sin(m*y)/w,o=Math.sin(o*y)/w,l=l*m+d*o,c=c*m+p*o,h=h*m+g*o,u=u*m+_*o}else{l=l*m+d*o,c=c*m+p*o,h=h*m+g*o,u=u*m+_*o;const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new N,Rc=new Zt;class Ge{constructor(e,t,n,i,r,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],f=i[3],m=i[6],y=i[1],w=i[4],E=i[7],C=i[2],x=i[5],b=i[8];return r[0]=a*_+o*y+l*C,r[3]=a*f+o*w+l*x,r[6]=a*m+o*E+l*b,r[1]=c*_+h*y+u*C,r[4]=c*f+h*w+u*x,r[7]=c*m+h*E+u*b,r[2]=d*_+p*y+g*C,r[5]=d*f+p*w+g*x,r[8]=d*m+p*E+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(za.makeScale(e,t)),this}rotate(e){return this.premultiply(za.makeRotation(-e)),this}translate(e,t){return this.premultiply(za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const za=new Ge,Ic=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hf(){const s={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(i.r=cs(i.r),i.g=cs(i.g),i.b=cs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Tn?ca:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ms]:{primaries:e,whitePoint:n,transfer:ca,toXYZ:Ic,fromXYZ:Lc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Ic,fromXYZ:Lc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),s}const et=Hf();function Gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Li;class ku{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Li===void 0&&(Li=sr("canvas")),Li.width=e.width,Li.height=e.height;const i=Li.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Li}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vf=0;class Ea{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ha(i[a].image)):r.push(Ha(i[a]))}else r=Ha(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ha(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ku.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let Gf=0;const Va=new N;class vt extends li{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=Bt,i=Bt,r=Pt,a=ai,o=ln,l=Wt,c=vt.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=ci(),this.name="",this.source=new Ea(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Va).x}get height(){return this.source.getSize(Va).y}get depth(){return this.source.getSize(Va).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ln:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ln:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=Iu;vt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,i=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],f=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,E=(p+1)/2,C=(m+1)/2,x=(h+d)/4,b=(u+_)/4,I=(g+f)/4;return w>E&&w>C?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=x/n,r=b/n):E>C?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=x/i,r=I/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=b/r,i=I/r),this.set(n,i,r,t),this}let y=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wf extends li{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new vt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ea(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends Wf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zu extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xf extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xt{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),xr.subVectors(this.max,Es),Di.subVectors(e.a,Es),Pi.subVectors(e.b,Es),Ui.subVectors(e.c,Es),jn.subVectors(Pi,Di),qn.subVectors(Ui,Pi),pi.subVectors(Di,Ui);let t=[0,-jn.z,jn.y,0,-qn.z,qn.y,0,-pi.z,pi.y,jn.z,0,-jn.x,qn.z,0,-qn.x,pi.z,0,-pi.x,-jn.y,jn.x,0,-qn.y,qn.x,0,-pi.y,pi.x,0];return!Ga(t,Di,Pi,Ui,xr)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,Di,Pi,Ui,xr))?!1:(vr.crossVectors(jn,qn),t=[vr.x,vr.y,vr.z],Ga(t,Di,Pi,Ui,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Un=[new N,new N,new N,new N,new N,new N,new N,new N],gn=new N,_r=new Xt,Di=new N,Pi=new N,Ui=new N,jn=new N,qn=new N,pi=new N,Es=new N,xr=new N,vr=new N,mi=new N;function Ga(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){mi.fromArray(s,r);const o=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const $f=new Xt,ws=new N,Wa=new N;class hi{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$f.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ws,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(Wa)),this.expandByPoint(ws.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fn=new N,Xa=new N,yr=new N,Yn=new N,$a=new N,Mr=new N,ja=new N;class wa{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xa.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Xa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(yr),o=Yn.dot(this.direction),l=-Yn.dot(yr),c=Yn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xa).addScaledVector(yr,d),p}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,i,r){$a.subVectors(t,e),Mr.subVectors(n,e),ja.crossVectors($a,Mr);let a=this.direction.dot(ja),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,e);const l=o*this.direction.dot(Mr.crossVectors(Yn,Mr));if(l<0)return null;const c=o*this.direction.dot($a.cross(Yn));if(c<0||l+c>a)return null;const h=-o*Yn.dot(ja);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(e,t,n,i,r,a,o,l,c,h,u,d,p,g,_,f){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,p,g,_,f)}set(e,t,n,i,r,a,o,l,c,h,u,d,p,g,_,f){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=_,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Fi.setFromMatrixColumn(e,0).length(),r=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jf,e,qf)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Kn.crossVectors(n,rn),Kn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Kn.crossVectors(n,rn)),Kn.normalize(),Sr.crossVectors(rn,Kn),i[0]=Kn.x,i[4]=Sr.x,i[8]=rn.x,i[1]=Kn.y,i[5]=Sr.y,i[9]=rn.y,i[2]=Kn.z,i[6]=Sr.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],f=n[10],m=n[14],y=n[3],w=n[7],E=n[11],C=n[15],x=i[0],b=i[4],I=i[8],v=i[12],S=i[1],T=i[5],L=i[9],P=i[13],z=i[2],U=i[6],H=i[10],O=i[14],$=i[3],Q=i[7],ee=i[11],ie=i[15];return r[0]=a*x+o*S+l*z+c*$,r[4]=a*b+o*T+l*U+c*Q,r[8]=a*I+o*L+l*H+c*ee,r[12]=a*v+o*P+l*O+c*ie,r[1]=h*x+u*S+d*z+p*$,r[5]=h*b+u*T+d*U+p*Q,r[9]=h*I+u*L+d*H+p*ee,r[13]=h*v+u*P+d*O+p*ie,r[2]=g*x+_*S+f*z+m*$,r[6]=g*b+_*T+f*U+m*Q,r[10]=g*I+_*L+f*H+m*ee,r[14]=g*v+_*P+f*O+m*ie,r[3]=y*x+w*S+E*z+C*$,r[7]=y*b+w*T+E*U+C*Q,r[11]=y*I+w*L+E*H+C*ee,r[15]=y*v+w*P+E*O+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],f=e[11],m=e[15],y=l*p-c*d,w=o*p-c*u,E=o*d-l*u,C=a*p-c*h,x=a*d-l*h,b=a*u-o*h;return t*(_*y-f*w+m*E)-n*(g*y-f*C+m*x)+i*(g*w-_*C+m*b)-r*(g*E-_*x+f*b)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],f=e[14],m=e[15],y=u*f*c-_*d*c+_*l*p-o*f*p-u*l*m+o*d*m,w=g*d*c-h*f*c-g*l*p+a*f*p+h*l*m-a*d*m,E=h*_*c-g*u*c+g*o*p-a*_*p-h*o*m+a*u*m,C=g*u*l-h*_*l-g*o*d+a*_*d+h*o*f-a*u*f,x=t*y+n*w+i*E+r*C;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=y*b,e[1]=(_*d*r-u*f*r-_*i*p+n*f*p+u*i*m-n*d*m)*b,e[2]=(o*f*r-_*l*r+_*i*c-n*f*c-o*i*m+n*l*m)*b,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*b,e[4]=w*b,e[5]=(h*f*r-g*d*r+g*i*p-t*f*p-h*i*m+t*d*m)*b,e[6]=(g*l*r-a*f*r-g*i*c+t*f*c+a*i*m-t*l*m)*b,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*p+t*l*p)*b,e[8]=E*b,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*m-t*u*m)*b,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*m+t*o*m)*b,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*b,e[12]=C*b,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*f+t*u*f)*b,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*f-t*o*f)*b,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,f=a*u,m=o*u,y=l*c,w=l*h,E=l*u,C=n.x,x=n.y,b=n.z;return i[0]=(1-(_+m))*C,i[1]=(p+E)*C,i[2]=(g-w)*C,i[3]=0,i[4]=(p-E)*x,i[5]=(1-(d+m))*x,i[6]=(f+y)*x,i[7]=0,i[8]=(g+w)*b,i[9]=(f-y)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Fi.set(i[0],i[1],i[2]).length();const a=Fi.set(i[4],i[5],i[6]).length(),o=Fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),_n.copy(this);const c=1/r,h=1/a,u=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=An,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===An)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ha)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=An,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===An)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===ha)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fi=new N,_n=new Oe,jf=new N(0,0,0),qf=new N(1,1,1),Kn=new N,Sr=new N,rn=new N,Dc=new Oe,Pc=new Zt;class pn{constructor(e=0,t=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class Hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yf=0;const Uc=new N,Ni=new Zt,Nn=new Oe,br=new N,Ts=new N,Kf=new N,Zf=new Zt,Fc=new N(1,0,0),Nc=new N(0,1,0),Bc=new N(0,0,1),Oc={type:"added"},Jf={type:"removed"},Bi={type:"childadded",child:null},qa={type:"childremoved",child:null};class Lt extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new N,t=new pn,n=new Zt,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Ge}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Nc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Uc.copy(e).applyQuaternion(this.quaternion),this.position.add(Uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Nc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?br.copy(e):br.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ts,br,this.up):Nn.lookAt(br,Ts,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Ni.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jf),qa.child=e,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,Kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Lt.DEFAULT_UP=new N(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new N,Bn=new N,Ya=new N,On=new N,Oi=new N,ki=new N,kc=new N,Ka=new N,Za=new N,Ja=new N,Qa=new yt,eo=new yt,to=new yt;class vn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xn.subVectors(e,t),i.cross(xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){xn.subVectors(i,t),Bn.subVectors(n,t),Ya.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(Bn),l=xn.dot(Ya),c=Bn.dot(Bn),h=Bn.dot(Ya),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Qa.setScalar(0),eo.setScalar(0),to.setScalar(0),Qa.fromBufferAttribute(e,t),eo.fromBufferAttribute(e,n),to.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Qa,r.x),a.addScaledVector(eo,r.y),a.addScaledVector(to,r.z),a}static isFrontFacing(e,t,n,i){return xn.subVectors(n,t),Bn.subVectors(e,t),xn.cross(Bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),xn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Oi.subVectors(i,n),ki.subVectors(r,n),Ka.subVectors(e,n);const l=Oi.dot(Ka),c=ki.dot(Ka);if(l<=0&&c<=0)return t.copy(n);Za.subVectors(e,i);const h=Oi.dot(Za),u=ki.dot(Za);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Oi,a);Ja.subVectors(e,r);const p=Oi.dot(Ja),g=ki.dot(Ja);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ki,o);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return kc.subVectors(r,i),o=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(kc,o);const m=1/(f+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(Oi,a).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function no(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Vl(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=no(a,r,e+1/3),this.g=no(a,r,e),this.b=no(a,r,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=Vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return et.workingToColorSpace(Ht.copy(this),e),Math.round(qe(Ht.r*255,0,255))*65536+Math.round(qe(Ht.g*255,0,255))*256+Math.round(qe(Ht.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,r=Ht.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Rt){et.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Er);const n=Ks(Zn.h,Er.h,t),i=Ks(Zn.s,Er.s,t),r=Ks(Zn.l,Er.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Re;Re.NAMES=Vu;let Qf=0;class ui extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Vn,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=No,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vn&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fo&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gu extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new N,wr=new He;let ep=0;class gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ep++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=El,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),e}}class Gl extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wu extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let tp=0;const un=new Oe,io=new Lt,zi=new N,an=new Xt,As=new Xt,Nt=new N;class Ot extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ou(e)?Wu:Gl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return io.lookAt(e),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];As.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(an.min,As.min),an.expandByPoint(Nt),Nt.addVectors(an.max,As.max),an.expandByPoint(Nt)):(an.expandByPoint(As.min),an.expandByPoint(As.max))}an.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(e,c),Nt.add(zi)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new N,l[I]=new N;const c=new N,h=new N,u=new N,d=new He,p=new He,g=new He,_=new N,f=new N;function m(I,v,S){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(T),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(T),o[I].add(_),o[v].add(_),o[S].add(_),l[I].add(f),l[v].add(f),l[S].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,v=y.length;I<v;++I){const S=y[I],T=S.start,L=S.count;for(let P=T,z=T+L;P<z;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const w=new N,E=new N,C=new N,x=new N;function b(I){C.fromBufferAttribute(i,I),x.copy(C);const v=o[I];w.copy(v),w.sub(C.multiplyScalar(C.dot(v))).normalize(),E.crossVectors(x,v);const T=E.dot(l[I])<0?-1:1;a.setXYZW(I,w.x,w.y,w.z,T)}for(let I=0,v=y.length;I<v;++I){const S=y[I],T=S.start,L=S.count;for(let P=T,z=T+L;P<z;P+=3)b(e.getX(P+0)),b(e.getX(P+1)),b(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[p++]}return new gt(d,h,u)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zc=new Oe,gi=new wa,Tr=new hi,Hc=new N,Ar=new N,Cr=new N,Rr=new N,so=new N,Ir=new N,Vc=new N,Lr=new N;class It extends Lt{constructor(e=new Ot,t=new Gu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(so.fromBufferAttribute(u,e),a?Ir.addScaledVector(so,h):Ir.addScaledVector(so.sub(t),h))}t.add(Ir)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(Tr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Tr,Hc)===null||gi.origin.distanceToSquared(Hc)>(e.far-e.near)**2))&&(zc.copy(r).invert(),gi.copy(e.ray).applyMatrix4(zc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],m=a[f.materialIndex],y=Math.max(f.start,p.start),w=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let E=y,C=w;E<C;E+=3){const x=o.getX(E),b=o.getX(E+1),I=o.getX(E+2);i=Dr(this,m,e,n,c,h,u,x,b,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const y=o.getX(f),w=o.getX(f+1),E=o.getX(f+2);i=Dr(this,a,e,n,c,h,u,y,w,E),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],m=a[f.materialIndex],y=Math.max(f.start,p.start),w=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let E=y,C=w;E<C;E+=3){const x=E,b=E+1,I=E+2;i=Dr(this,m,e,n,c,h,u,x,b,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const y=f,w=f+1,E=f+2;i=Dr(this,a,e,n,c,h,u,y,w,E),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function np(s,e,t,n,i,r,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Wn,o),l===null)return null;Lr.copy(o),Lr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Lr);return c<t.near||c>t.far?null:{distance:c,point:Lr.clone(),object:s}}function Dr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ar),s.getVertexPosition(l,Cr),s.getVertexPosition(c,Rr);const h=np(s,e,t,n,Ar,Cr,Rr,Vc);if(h){const u=new N;vn.getBarycoord(Vc,Ar,Cr,Rr,u),i&&(h.uv=vn.getInterpolatedAttribute(i,o,l,c,u,new He)),r&&(h.uv1=vn.getInterpolatedAttribute(r,o,l,c,u,new He)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};vn.getNormal(Ar,Cr,Rr,d.normal),h.face=d,h.barycoord=u}return h}class xs extends Ot{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function g(_,f,m,y,w,E,C,x,b,I,v){const S=E/b,T=C/I,L=E/2,P=C/2,z=x/2,U=b+1,H=I+1;let O=0,$=0;const Q=new N;for(let ee=0;ee<H;ee++){const ie=ee*T-P;for(let Be=0;Be<U;Be++){const ke=Be*S-L;Q[_]=ke*y,Q[f]=ie*w,Q[m]=z,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[f]=0,Q[m]=x>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Be/b),u.push(1-ee/I),O+=1}}for(let ee=0;ee<I;ee++)for(let ie=0;ie<b;ie++){const Be=d+ie+U*ee,ke=d+ie+U*(ee+1),lt=d+(ie+1)+U*(ee+1),tt=d+(ie+1)+U*ee;l.push(Be,ke,tt),l.push(ke,lt,tt),$+=6}o.addGroup(p,$,v),p+=$,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(s){const e={};for(let t=0;t<s.length;t++){const n=gs(s[t]);for(const i in n)e[i]=n[i]}return e}function ip(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const sp={clone:gs,merge:qt};var rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=ip(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $u extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new N,Gc=new He,Wc=new He;class Yt extends $u{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Gc,Wc),t.subVectors(Wc,Gc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Vi=1;class op extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(Hi,Vi,e,t);i.layers=this.layers,this.add(i);const r=new Yt(Hi,Vi,e,t);r.layers=this.layers,this.add(r);const a=new Yt(Hi,Vi,e,t);a.layers=this.layers,this.add(a);const o=new Yt(Hi,Vi,e,t);o.layers=this.layers,this.add(o);const l=new Yt(Hi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new Yt(Hi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ju extends vt{constructor(e=[],t=Ai,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qu extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ju(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xs(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:kt});r.uniforms.tEquirect.value=t;const a=new It(i,r),o=t.minFilter;return t.minFilter===ai&&(t.minFilter=Pt),new op(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class ss extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lp={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),m=this._getHandJoint(c,_);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ss;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ta{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new Ta(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _s extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xc=new N,$c=new yt,jc=new yt,cp=new N,qc=new Oe,Pr=new N,ao=new hi,Yc=new Oe,oo=new wa;class hp extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bc,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pr),this.boundingBox.expandByPoint(Pr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pr),this.boundingSphere.expandByPoint(Pr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(i),e.ray.intersectsSphere(ao)!==!1&&(Yc.copy(i).invert(),oo.copy(e.ray).applyMatrix4(Yc),!(this.boundingBox!==null&&oo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;$c.fromBufferAttribute(i.attributes.skinIndex,e),jc.fromBufferAttribute(i.attributes.skinWeight,e),Xc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=jc.getComponent(r);if(a!==0){const o=$c.getComponent(r);qc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(cp.copy(Xc).applyMatrix4(qc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Yu extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hs extends vt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=bt,h=bt,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kc=new Oe,up=new Oe;class Wl{constructor(e=[],t=[]){this.uuid=ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:up;Kc.multiplyMatrices(o,t[r]),Kc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Wl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new hs(t,e,e,ln,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ce("Skeleton: No bone found with UUID:",r),a=new Yu),this.bones.push(a),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Zc extends gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gi=new Oe,Jc=new Oe,Ur=[],Qc=new Xt,dp=new Oe,Cs=new It,Rs=new hi;class Ku extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,dp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),Qc.copy(e.boundingBox).applyMatrix4(Gi),this.boundingBox.union(Qc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),Rs.copy(e.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(Rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),e.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Gi),Jc.multiplyMatrices(n,Gi),Cs.matrixWorld=Jc,Cs.raycast(e,Ur);for(let a=0,o=Ur.length;a<o;a++){const l=Ur[a];l.instanceId=r,l.object=this,t.push(l)}Ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new hs(new Float32Array(i*this.count),i,this.count,ls,fn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const lo=new N,fp=new N,pp=new Ge;class ni{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=lo.subVectors(n,t).cross(fp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(lo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pp.getNormalMatrix(e),i=this.coplanarPoint(lo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new hi,mp=new He(.5,.5),Fr=new N;class Xl{constructor(e=new ni,t=new ni,n=new ni,i=new ni,r=new ni,a=new ni){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],_=r[9],f=r[10],m=r[11],y=r[12],w=r[13],E=r[14],C=r[15];if(i[0].setComponents(c-a,p-h,m-g,C-y).normalize(),i[1].setComponents(c+a,p+h,m+g,C+y).normalize(),i[2].setComponents(c+o,p+u,m+_,C+w).normalize(),i[3].setComponents(c-o,p-u,m-_,C-w).normalize(),n)i[4].setComponents(l,d,f,E).normalize(),i[5].setComponents(c-l,p-d,m-f,C-E).normalize();else if(i[4].setComponents(c-l,p-d,m-f,C-E).normalize(),t===An)i[5].setComponents(c+l,p+d,m+f,C+E).normalize();else if(t===ha)i[5].setComponents(l,d,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);const t=mp.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fr.x=i.normal.x>0?e.max.x:e.min.x,Fr.y=i.normal.y>0?e.max.y:e.min.y,Fr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ci extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ua=new N,da=new N,eh=new Oe,Is=new wa,Nr=new hi,co=new N,th=new N;class gp extends Lt{constructor(e=new Ot,t=new Ci){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ua.fromBufferAttribute(t,i-1),da.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ua.distanceTo(da);e.setAttribute("lineDistance",new Tt(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Nr.radius+=r,e.ray.intersectsSphere(Nr)===!1)return;eh.copy(i).invert(),Is.copy(e.ray).applyMatrix4(eh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,f=g-1;_<f;_+=c){const m=h.getX(_),y=h.getX(_+1),w=Br(this,e,Is,l,m,y,_);w&&t.push(w)}if(this.isLineLoop){const _=h.getX(g-1),f=h.getX(p),m=Br(this,e,Is,l,_,f,g-1);m&&t.push(m)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,f=g-1;_<f;_+=c){const m=Br(this,e,Is,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Br(this,e,Is,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Br(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(ua.fromBufferAttribute(o,i),da.fromBufferAttribute(o,r),t.distanceSqToSegment(ua,da,co,th)>n)return;co.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(co);if(!(c<e.near||c>e.far))return{distance:c,point:th.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const nh=new N,ih=new N;class vs extends gp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)nh.fromBufferAttribute(t,i),ih.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nh.distanceTo(ih);e.setAttribute("lineDistance",new Tt(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ho extends vt{constructor(e,t,n,i,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class _p extends vt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class or extends vt{constructor(e,t,n=Dn,i,r,a,o=bt,l=bt,c,h=$n,u=1){if(h!==$n&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ea(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xp extends or{constructor(e,t=Dn,n=Ai,i,r,a=bt,o=bt,l,c=$n){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zu extends vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Aa extends Ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],_=[],f=[];for(let m=0;m<h;m++){const y=m*d-a;for(let w=0;w<c;w++){const E=w*u-r;g.push(E,-y,0),_.push(0,0,1),f.push(w/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const w=y+c*m,E=y+c*(m+1),C=y+1+c*(m+1),x=y+1+c*m;p.push(w,E,x),p.push(E,C,x)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.widthSegments,e.heightSegments)}}class vp extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sh extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $l extends ui{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yp extends ui{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mp extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sp extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Or(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function bp(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Ju(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Ca{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ep extends Ca{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ns,endingEnd:ns}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case is:r=e,o=2*t-n;break;case la:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case is:a=e,l=2*n-t;break;case la:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,f=_*g,m=-d*f+2*d*_-d*g,y=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,w=(-1-p)*f+(1.5+p)*_+.5*g,E=p*f-p*_;for(let C=0;C!==o;++C)r[C]=m*a[h+C]+y*a[c+C]+w*a[l+C]+E*a[u+C];return r}}class Qu extends Ca{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class wp extends Ca{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Or(t,this.TimeBufferType),this.values=Or(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Or(e.times,Array),values:Or(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ep(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case oa:t=this.InterpolantFactoryMethodLinear;break;case Oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return oa;case this.InterpolantFactoryMethodSmooth:return Oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ue("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Sf(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Oa,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=oa;class ys extends Mn{constructor(e,t,n){super(e,t,n)}}ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=ir;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class ed extends Mn{constructor(e,t,n,i){super(e,t,n,i)}}ed.prototype.ValueTypeName="color";class fa extends Mn{constructor(e,t,n,i){super(e,t,n,i)}}fa.prototype.ValueTypeName="number";class Tp extends Ca{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Zt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class pr extends Mn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Tp(this.times,this.values,this.getValueSize(),e)}}pr.prototype.ValueTypeName="quaternion";pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends Mn{constructor(e,t,n){super(e,t,n)}}Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=ir;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class lr extends Mn{constructor(e,t,n,i){super(e,t,n,i)}}lr.prototype.ValueTypeName="vector";class wl{constructor(e="",t=-1,n=[],i=kl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ci(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Cp(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Mn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=bp(l);l=rh(l,1,h),c=rh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new fa(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Ce("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ue("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,_){if(p.length!==0){const f=[],m=[];Ju(p,f,m,g),f.length!==0&&_.push(new u(d,f,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const f=[],m=[];for(let y=0;y!==d[g].morphTargets.length;++y){const w=d[g];f.push(w.time),m.push(w.morphTarget===_?1:0)}i.push(new fa(".morphTargetInfluence["+_+"]",f,m))}l=p.length*a}else{const p=".bones["+t[u].name+"]";n(lr,p+".position",d,"pos",i),n(pr,p+".quaternion",d,"rot",i),n(lr,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Ap(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fa;case"vector":case"vector2":case"vector3":case"vector4":return lr;case"color":return ed;case"quaternion":return pr;case"bool":case"boolean":return ys;case"string":return Ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Cp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ap(s.type);if(s.times===void 0){const t=[],n=[];Ju(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const uo={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Rp{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ip=new Rp;class jl{constructor(e){this.manager=e!==void 0?e:Ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}jl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wi=new WeakMap;class Lp extends jl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=uo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Wi.get(a);u===void 0&&(u=[],Wi.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=sr("img");function l(){h(),t&&t(this);const u=Wi.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}Wi.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),uo.remove(`image:${e}`);const d=Wi.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(u)}Wi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),uo.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Ra extends jl{constructor(e){super(e)}load(e,t,n,i){const r=new vt,a=new Lp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ia extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class td extends Ia{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const fo=new Oe,ah=new N,oh=new N;class nd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Wt,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xl,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(ah),oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oh),t.updateMatrixWorld(),fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dp extends nd{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}}class Pp extends Ia{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ql extends $u{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Up extends nd{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cr extends Ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Up}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Yl extends Ia{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fp extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Kl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Np{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Zt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Zt.multiplyQuaternionsFlat(e,a,e,t,e,n),Zt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Zl="\\[\\]\\.:\\/",Bp=new RegExp("["+Zl+"]","g"),Jl="[^"+Zl+"]",Op="[^"+Zl.replace("\\.","")+"]",kp=/((?:WC+[\/:])*)/.source.replace("WC",Jl),zp=/(WCOD+)?/.source.replace("WCOD",Op),Hp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),Vp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),Gp=new RegExp("^"+kp+zp+Hp+Vp+"$"),Wp=["material","materials","bones","map"];class Xp{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bp,"")}static parseTrackName(e){const t=Gp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Wp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=Xp;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class $p{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:ns,endingEnd:ns};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=uf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ff:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case kl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===df;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===hf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=is,i.endingEnd=is):(e?i.endingStart=this.zeroSlopeAtStart?is:ns:i.endingStart=la,t?i.endingEnd=this.zeroSlopeAtEnd?is:ns:i.endingEnd=la)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const jp=new Float32Array(1);class id extends li{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],p=d.name;let g=h[p];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new Np(Qe.create(n,p,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Qu(new Float32Array(2),new Float32Array(2),1,jp),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?wl.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=kl),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new $p(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?wl.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class lh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qn=new N,kr=new Oe,po=new Oe;class es extends vs{constructor(e){const t=sd(e),n=new Ot,i=[],r=[];for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Tt(i,3)),n.setAttribute("color",new Tt(r,3));const a=new Ci({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new Re(255),l=new Re(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");po.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(kr.multiplyMatrices(po,o.matrixWorld),Qn.setFromMatrixPosition(kr),i.setXYZ(a,Qn.x,Qn.y,Qn.z),kr.multiplyMatrices(po,o.parent.matrixWorld),Qn.setFromMatrixPosition(kr),i.setXYZ(a+1,Qn.x,Qn.y,Qn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,e.r,e.g,e.b),i.setXYZ(r+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function sd(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...sd(s.children[t]));return e}class rd extends vs{constructor(e=10,t=10,n=4473924,i=8947848){n=new Re(n),i=new Re(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,p=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===r?n:i;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new Ot;h.setAttribute("position",new Tt(l,3)),h.setAttribute("color",new Tt(c,3));const u=new Ci({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const zr=new Xt;class ad extends vs{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Ot;r.setIndex(new gt(n,1)),r.setAttribute("position",new gt(i,3)),super(r,new Ci({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&zr.setFromObject(this.object),zr.isEmpty())return;const e=zr.min,t=zr.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class od extends vs{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ot;i.setAttribute("position",new Tt(t,3)),i.setAttribute("color",new Tt(n,3));const r=new Ci({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Re,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class qp extends li{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ce("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ch(s,e,t,n){const i=Yp(n);switch(t){case Nu:return s*e;case ls:return s*e/i.components*i.byteLength;case Nl:return s*e/i.components*i.byteLength;case ps:return s*e*2/i.components*i.byteLength;case Bl:return s*e*2/i.components*i.byteLength;case Bu:return s*e*3/i.components*i.byteLength;case ln:return s*e*4/i.components*i.byteLength;case Ol:return s*e*4/i.components*i.byteLength;case Zr:case Jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qr:case ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jo:case Yo:return Math.max(s,16)*Math.max(e,8)/4;case $o:case qo:return Math.max(s,8)*Math.max(e,8)/2;case Ko:case Zo:case Qo:case el:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jo:case tl:case nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case rl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case al:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ol:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ll:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case cl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case hl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ul:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case dl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case fl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case pl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ml:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case gl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _l:case xl:case vl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case yl:case Ml:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Sl:case bl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yp(s){switch(s){case Wt:case Du:return{byteLength:1,components:1};case tr:case Pu:case Xn:return{byteLength:2,components:1};case Ul:case Fl:return{byteLength:2,components:4};case Dn:case Pl:case fn:return{byteLength:4,components:1};case Uu:case Fu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);function ld(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Kp(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
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
#endif`,Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
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
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
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
#endif`,am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hm=`#ifdef USE_IRIDESCENCE
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
#endif`,um=`#ifdef USE_BUMPMAP
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ym=`#define PI 3.141592653589793
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
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sm=`vec3 transformedNormal = objectNormal;
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
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Om=`#ifdef USE_GRADIENTMAP
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
}`,km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
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
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
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
#endif`,Ym=`uniform sampler2D dfgLUT;
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
}`,Km=`
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a0=`#if defined( USE_POINTS_UV )
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
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v0=`#ifdef USE_NORMALMAP
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
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F0=`float getShadowMask() {
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
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,O0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k0=`#ifdef USE_SKINNING
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
#endif`,z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z0=`uniform sampler2D t2D;
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,rg=`#define DISTANCE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,_g=`#define NORMAL
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
}`,xg=`#define PHONG
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
}`,vg=`#define PHONG
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
}`,yg=`#define STANDARD
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
}`,Mg=`#define STANDARD
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
}`,Sg=`#define TOON
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
}`,bg=`#define TOON
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
}`,Eg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Ag=`uniform vec3 color;
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
}`,Cg=`uniform float rotation;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Zp,alphahash_pars_fragment:Jp,alphamap_fragment:Qp,alphamap_pars_fragment:em,alphatest_fragment:tm,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:sm,batching_pars_vertex:rm,batching_vertex:am,begin_vertex:om,beginnormal_vertex:lm,bsdfs:cm,iridescence_fragment:hm,bumpmap_pars_fragment:um,clipping_planes_fragment:dm,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:_m,color_pars_vertex:xm,color_vertex:vm,common:ym,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:Sm,displacementmap_pars_vertex:bm,displacementmap_vertex:Em,emissivemap_fragment:wm,emissivemap_pars_fragment:Tm,colorspace_fragment:Am,colorspace_pars_fragment:Cm,envmap_fragment:Rm,envmap_common_pars_fragment:Im,envmap_pars_fragment:Lm,envmap_pars_vertex:Dm,envmap_physical_pars_fragment:Gm,envmap_vertex:Pm,fog_vertex:Um,fog_pars_vertex:Fm,fog_fragment:Nm,fog_pars_fragment:Bm,gradientmap_pars_fragment:Om,lightmap_pars_fragment:km,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Hm,lights_pars_begin:Vm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:$m,lights_phong_pars_fragment:jm,lights_physical_fragment:qm,lights_physical_pars_fragment:Ym,lights_fragment_begin:Km,lights_fragment_maps:Zm,lights_fragment_end:Jm,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:e0,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:a0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:l0,morphinstance_vertex:c0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:d0,morphtarget_vertex:f0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:_0,normal_vertex:x0,normalmap_pars_fragment:v0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:b0,opaque_fragment:E0,packing:w0,premultiplied_alpha_fragment:T0,project_vertex:A0,dithering_fragment:C0,dithering_pars_fragment:R0,roughnessmap_fragment:I0,roughnessmap_pars_fragment:L0,shadowmap_pars_fragment:D0,shadowmap_pars_vertex:P0,shadowmap_vertex:U0,shadowmask_pars_fragment:F0,skinbase_vertex:N0,skinning_pars_vertex:B0,skinning_vertex:O0,skinnormal_vertex:k0,specularmap_fragment:z0,specularmap_pars_fragment:H0,tonemapping_fragment:V0,tonemapping_pars_fragment:G0,transmission_fragment:W0,transmission_pars_fragment:X0,uv_pars_fragment:$0,uv_pars_vertex:j0,uv_vertex:q0,worldpos_vertex:Y0,background_vert:K0,background_frag:Z0,backgroundCube_vert:J0,backgroundCube_frag:Q0,cube_vert:eg,cube_frag:tg,depth_vert:ng,depth_frag:ig,distance_vert:sg,distance_frag:rg,equirect_vert:ag,equirect_frag:og,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:_g,meshphong_vert:xg,meshphong_frag:vg,meshphysical_vert:yg,meshphysical_frag:Mg,meshtoon_vert:Sg,meshtoon_frag:bg,points_vert:Eg,points_frag:wg,shadow_vert:Tg,shadow_frag:Ag,sprite_vert:Cg,sprite_frag:Rg},pe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},wn={basic:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Re(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:qt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:qt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Re(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:qt([pe.points,pe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:qt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:qt([pe.common,pe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:qt([pe.sprite,pe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:qt([pe.common,pe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:qt([pe.lights,pe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};wn.physical={uniforms:qt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Hr={r:0,b:0,g:0},xi=new pn,Ig=new Oe;function Lg(s,e,t,n,i,r,a){const o=new Re(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function _(w){let E=!1;const C=g(w);C===null?m(o,l):C&&C.isColor&&(m(C,1),E=!0);const x=s.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(w,E){const C=g(E);C&&(C.isCubeTexture||C.mapping===Sa)?(h===void 0&&(h=new It(new xs(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:gs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(x,b,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),xi.copy(E.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(xi)),h.material.toneMapped=et.getTransfer(C.colorSpace)!==ut,(u!==C||d!==C.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,p=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new It(new Aa(2,2),new mn({name:"BackgroundMaterial",uniforms:gs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=et.getTransfer(C.colorSpace)!==ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,p=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,E){w.getRGB(Hr,Xu(s)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,E,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,E=1){o.set(w),l=E,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(o,l)},render:_,addToRenderList:f,dispose:y}}function Dg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(S,T,L,P,z){let U=!1;const H=u(P,L,T);r!==H&&(r=H,c(r.object)),U=p(S,P,L,z),U&&g(S,P,L,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,E(S,T,L,P),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,T,L){const P=L.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let U=z[T.id];U===void 0&&(U={},z[T.id]=U);let H=U[P];return H===void 0&&(H=d(l()),U[P]=H),H}function d(S){const T=[],L=[],P=[];for(let z=0;z<t;z++)T[z]=0,L[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:P,object:S,attributes:{},index:null}}function p(S,T,L,P){const z=r.attributes,U=T.attributes;let H=0;const O=L.getAttributes();for(const $ in O)if(O[$].location>=0){const ee=z[$];let ie=U[$];if(ie===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ee===void 0||ee.attribute!==ie||ie&&ee.data!==ie.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(S,T,L,P){const z={},U=T.attributes;let H=0;const O=L.getAttributes();for(const $ in O)if(O[$].location>=0){let ee=U[$];ee===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor));const ie={};ie.attribute=ee,ee&&ee.data&&(ie.data=ee.data),z[$]=ie,H++}r.attributes=z,r.attributesNum=H,r.index=P}function _(){const S=r.newAttributes;for(let T=0,L=S.length;T<L;T++)S[T]=0}function f(S){m(S,0)}function m(S,T){const L=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;L[S]=1,P[S]===0&&(s.enableVertexAttribArray(S),P[S]=1),z[S]!==T&&(s.vertexAttribDivisor(S,T),z[S]=T)}function y(){const S=r.newAttributes,T=r.enabledAttributes;for(let L=0,P=T.length;L<P;L++)T[L]!==S[L]&&(s.disableVertexAttribArray(L),T[L]=0)}function w(S,T,L,P,z,U,H){H===!0?s.vertexAttribIPointer(S,T,L,z,U):s.vertexAttribPointer(S,T,L,P,z,U)}function E(S,T,L,P){_();const z=P.attributes,U=L.getAttributes(),H=T.defaultAttributeValues;for(const O in U){const $=U[O];if($.location>=0){let Q=z[O];if(Q===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){const ee=Q.normalized,ie=Q.itemSize,Be=e.get(Q);if(Be===void 0)continue;const ke=Be.buffer,lt=Be.type,tt=Be.bytesPerElement,q=lt===s.INT||lt===s.UNSIGNED_INT||Q.gpuType===Pl;if(Q.isInterleavedBufferAttribute){const Z=Q.data,_e=Z.stride,Fe=Q.offset;if(Z.isInstancedInterleavedBuffer){for(let ye=0;ye<$.locationSize;ye++)m($.location+ye,Z.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ye=0;ye<$.locationSize;ye++)f($.location+ye);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let ye=0;ye<$.locationSize;ye++)w($.location+ye,ie/$.locationSize,lt,ee,_e*tt,(Fe+ie/$.locationSize*ye)*tt,q)}else{if(Q.isInstancedBufferAttribute){for(let Z=0;Z<$.locationSize;Z++)m($.location+Z,Q.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Z=0;Z<$.locationSize;Z++)f($.location+Z);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let Z=0;Z<$.locationSize;Z++)w($.location+Z,ie/$.locationSize,lt,ee,ie*tt,ie/$.locationSize*Z*tt,q)}}else if(H!==void 0){const ee=H[O];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv($.location,ee);break;case 3:s.vertexAttrib3fv($.location,ee);break;case 4:s.vertexAttrib4fv($.location,ee);break;default:s.vertexAttrib1fv($.location,ee)}}}}y()}function C(){I();for(const S in n){const T=n[S];for(const L in T){const P=T[L];for(const z in P)h(P[z].object),delete P[z];delete T[L]}delete n[S]}}function x(S){if(n[S.id]===void 0)return;const T=n[S.id];for(const L in T){const P=T[L];for(const z in P)h(P[z].object),delete P[z];delete T[L]}delete n[S.id]}function b(S){for(const T in n){const L=n[T];if(L[S.id]===void 0)continue;const P=L[S.id];for(const z in P)h(P[z].object),delete P[z];delete L[S.id]}}function I(){v(),a=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:v,dispose:C,releaseStatesOfGeometry:x,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:f,disableUnusedAttributes:y}}function Pg(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ug(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==ln&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const I=b===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Wt&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==fn&&!I)}function l(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=s.getParameter(s.MAX_SAMPLES),x=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:E,maxSamples:C,samples:x}}function Fg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ni,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!f)r?h(null):c();else{const y=r?0:n,w=y*4;let E=m.clippingState||null;l.value=E,E=h(g,d,w,p);for(let C=0;C!==w;++C)E[C]=t[C];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const m=p+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<m)&&(f=new Float32Array(m));for(let w=0,E=p;w!==_;++w,E+=4)a.copy(u[w]).applyMatrix4(y,o),a.normal.toArray(f,E),f[E+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function Ng(s){let e=new WeakMap;function t(a,o){return o===Wo?a.mapping=Ai:o===Xo&&(a.mapping=fs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wo||o===Xo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qu(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const oi=4,hh=[.125,.215,.35,.446,.526,.582],Si=20,Bg=256,Ls=new ql,uh=new Re;let mo=null,go=0,_o=0,xo=!1;const Og=new N;class pa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Og}=r;mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mo,go,_o),this._renderer.xr.enabled=xo,e.scissorTest=!1,Xi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Xn,format:ln,colorSpace:ms,depthBuffer:!1},i=dh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kg(r)),this._blurMaterial=Hg(r,e,t),this._ggxMaterial=zg(r,e,t)}return i}_compileMaterial(e){const t=new It(new Ot,e);this._renderer.compile(t,Ls)}_sceneToCubeUV(e,t,n,i,r){const l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(uh),u.toneMapping=Rn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new xs,new Gu({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,f=_.material;let m=!1;const y=e.background;y?y.isColor&&(f.color.copy(y),e.background=null,m=!0):(f.color.copy(uh),m=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):E===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const C=this._cubeSize;Xi(i,E*C,w>2?C:0,C,C),u.setRenderTarget(i),m&&u.render(_,l),u.render(e,l)}u.toneMapping=p,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ai||e.mapping===fs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Xi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ls)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,p=u*d,{_lodMax:g}=this,_=this._sizeLods[n],f=3*_*(n>g-oi?n-g+oi:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Xi(r,f,m,3*_,2*_),i.setRenderTarget(r),i.render(o,Ls),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Xi(e,f,m,3*_,2*_),i.setRenderTarget(e),i.render(o,Ls)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Si-1),_=r/g,f=isFinite(r)?1+Math.floor(h*_):Si;f>Si&&Ce(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Si}`);const m=[];let y=0;for(let b=0;b<Si;++b){const I=b/_,v=Math.exp(-I*I/2);m.push(v),b===0?y+=v:b<f&&(y+=2*v)}for(let b=0;b<m.length;b++)m[b]=m[b]/y;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const E=this._sizeLods[i],C=3*E*(i>w-oi?i-w+oi:0),x=4*(this._cubeSize-E);Xi(t,C,x,3*E,2*E),l.setRenderTarget(t),l.render(u,Ls)}}function kg(s){const e=[],t=[],n=[];let i=s;const r=s-oi+1+hh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-oi?l=hh[a-s+oi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,f=2,m=1,y=new Float32Array(_*g*p),w=new Float32Array(f*g*p),E=new Float32Array(m*g*p);for(let x=0;x<p;x++){const b=x%3*2/3-1,I=x>2?0:-1,v=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];y.set(v,_*g*x),w.set(d,f*g*x);const S=[x,x,x,x,x,x];E.set(S,m*g*x)}const C=new Ot;C.setAttribute("position",new gt(y,_)),C.setAttribute("uv",new gt(w,f)),C.setAttribute("faceIndex",new gt(E,m)),n.push(new It(C,null)),i>oi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function dh(s,e,t){const n=new In(s,e,t);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function zg(s,e,t){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:La(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Hg(s,e,t){const n=new Float32Array(Si),i=new N(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:La(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function fh(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function ph(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function La(){return`

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
	`}function Vg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wo||l===Xo,h=l===Ai||l===fs;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new pa(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new pa(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Gg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&rr("WebGLRenderer: "+n+" extension not supported."),i}}}function Wg(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],s.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let w=0,E=y.length;w<E;w+=3){const C=y[w+0],x=y[w+1],b=y[w+2];d.push(C,x,x,b,b,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let w=0,E=y.length/3-1;w<E;w+=3){const C=w+0,x=w+1,b=w+2;d.push(C,x,x,b,b,C)}}else return;const f=new(Ou(d)?Wu:Gl)(d,1);f.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,f)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Xg(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*a,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];t.update(f,n,1)}function u(d,p,g,_){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)c(d[m]/a,p[m],_[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=p[y]*_[y];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $g(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jg(s,e,t){const n=new WeakMap,i=new yt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),f===!0&&(E=3);let C=o.attributes.position.count*E,x=1;C>e.maxTextureSize&&(x=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*x*4*u),I=new zu(b,C,x,u);I.type=fn,I.needsUpdate=!0;const v=E*4;for(let T=0;T<u;T++){const L=m[T],P=y[T],z=w[T],U=C*x*4*T;for(let H=0;H<L.count;H++){const O=H*v;g===!0&&(i.fromBufferAttribute(L,H),b[U+O+0]=i.x,b[U+O+1]=i.y,b[U+O+2]=i.z,b[U+O+3]=0),_===!0&&(i.fromBufferAttribute(P,H),b[U+O+4]=i.x,b[U+O+5]=i.y,b[U+O+6]=i.z,b[U+O+7]=0),f===!0&&(i.fromBufferAttribute(z,H),b[U+O+8]=i.x,b[U+O+9]=i.y,b[U+O+10]=i.z,b[U+O+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new He(C,x)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function qg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Yg={[Eu]:"LINEAR_TONE_MAPPING",[wu]:"REINHARD_TONE_MAPPING",[Tu]:"CINEON_TONE_MAPPING",[fr]:"ACES_FILMIC_TONE_MAPPING",[Cu]:"AGX_TONE_MAPPING",[Ru]:"NEUTRAL_TONE_MAPPING",[Au]:"CUSTOM_TONE_MAPPING"};function Kg(s,e,t,n,i){const r=new In(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new In(e,t,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),o=new Ot;o.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const l=new vp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new It(o,l),h=new ql(-1,1,1,-1,0,1);let u=null,d=null,p=!1,g,_=null,f=[],m=!1;this.setSize=function(y,w){r.setSize(y,w),a.setSize(y,w);for(let E=0;E<f.length;E++){const C=f[E];C.setSize&&C.setSize(y,w)}},this.setEffects=function(y){f=y,m=f.length>0&&f[0].isRenderPass===!0;const w=r.width,E=r.height;for(let C=0;C<f.length;C++){const x=f[C];x.setSize&&x.setSize(w,E)}},this.begin=function(y,w){if(p||y.toneMapping===Rn&&f.length===0)return!1;if(_=w,w!==null){const E=w.width,C=w.height;(r.width!==E||r.height!==C)&&this.setSize(E,C)}return m===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=Rn,!0},this.hasRenderPass=function(){return m},this.end=function(y,w){y.toneMapping=g,p=!0;let E=r,C=a;for(let x=0;x<f.length;x++){const b=f[x];if(b.enabled!==!1&&(b.render(y,C,E,w),b.needsSwap!==!1)){const I=E;E=C,C=I}}if(u!==y.outputColorSpace||d!==y.toneMapping){u=y.outputColorSpace,d=y.toneMapping,l.defines={},et.getTransfer(u)===ut&&(l.defines.SRGB_TRANSFER="");const x=Yg[d];x&&(l.defines[x]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(_),y.render(c,h),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const cd=new vt,Tl=new or(1,1),hd=new zu,ud=new Xf,dd=new ju,mh=[],gh=[],_h=new Float32Array(16),xh=new Float32Array(9),vh=new Float32Array(4);function Ss(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=mh[i];if(r===void 0&&(r=new Float32Array(i),mh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Da(s,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Zg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2fv(this.addr,e),Ft(t,e)}}function Qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;s.uniform3fv(this.addr,e),Ft(t,e)}}function e1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4fv(this.addr,e),Ft(t,e)}}function t1(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;vh.set(n),s.uniformMatrix2fv(this.addr,!1,vh),Ft(t,n)}}function n1(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;xh.set(n),s.uniformMatrix3fv(this.addr,!1,xh),Ft(t,n)}}function i1(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;_h.set(n),s.uniformMatrix4fv(this.addr,!1,_h),Ft(t,n)}}function s1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function r1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2iv(this.addr,e),Ft(t,e)}}function a1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3iv(this.addr,e),Ft(t,e)}}function o1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4iv(this.addr,e),Ft(t,e)}}function l1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function c1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2uiv(this.addr,e),Ft(t,e)}}function h1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3uiv(this.addr,e),Ft(t,e)}}function u1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4uiv(this.addr,e),Ft(t,e)}}function d1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Tl.compareFunction=t.isReversedDepthBuffer()?Hl:zl,r=Tl):r=cd,t.setTexture2D(e||r,i)}function f1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ud,i)}function p1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||dd,i)}function m1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hd,i)}function g1(s){switch(s){case 5126:return Zg;case 35664:return Jg;case 35665:return Qg;case 35666:return e1;case 35674:return t1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return s1;case 35667:case 35671:return r1;case 35668:case 35672:return a1;case 35669:case 35673:return o1;case 5125:return l1;case 36294:return c1;case 36295:return h1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}function _1(s,e){s.uniform1fv(this.addr,e)}function x1(s,e){const t=Ss(e,this.size,2);s.uniform2fv(this.addr,t)}function v1(s,e){const t=Ss(e,this.size,3);s.uniform3fv(this.addr,t)}function y1(s,e){const t=Ss(e,this.size,4);s.uniform4fv(this.addr,t)}function M1(s,e){const t=Ss(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function S1(s,e){const t=Ss(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function b1(s,e){const t=Ss(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function E1(s,e){s.uniform1iv(this.addr,e)}function w1(s,e){s.uniform2iv(this.addr,e)}function T1(s,e){s.uniform3iv(this.addr,e)}function A1(s,e){s.uniform4iv(this.addr,e)}function C1(s,e){s.uniform1uiv(this.addr,e)}function R1(s,e){s.uniform2uiv(this.addr,e)}function I1(s,e){s.uniform3uiv(this.addr,e)}function L1(s,e){s.uniform4uiv(this.addr,e)}function D1(s,e,t){const n=this.cache,i=e.length,r=Da(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Tl:a=cd;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function P1(s,e,t){const n=this.cache,i=e.length,r=Da(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ud,r[a])}function U1(s,e,t){const n=this.cache,i=e.length,r=Da(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||dd,r[a])}function F1(s,e,t){const n=this.cache,i=e.length,r=Da(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||hd,r[a])}function N1(s){switch(s){case 5126:return _1;case 35664:return x1;case 35665:return v1;case 35666:return y1;case 35674:return M1;case 35675:return S1;case 35676:return b1;case 5124:case 35670:return E1;case 35667:case 35671:return w1;case 35668:case 35672:return T1;case 35669:case 35673:return A1;case 5125:return C1;case 36294:return R1;case 36295:return I1;case 36296:return L1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return F1}}class B1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=g1(t.type)}}class O1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N1(t.type)}}class k1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function yh(s,e){s.seq.push(e),s.map[e.id]=e}function z1(s,e,t){const n=s.name,i=n.length;for(vo.lastIndex=0;;){const r=vo.exec(n),a=vo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){yh(t,c===void 0?new B1(o,s,e):new O1(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new k1(o),yh(t,u)),t=u}}}class ta{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);z1(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Mh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const H1=37297;let V1=0;function G1(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Sh=new Ge;function W1(s){et._getMatrix(Sh,et.workingColorSpace,s);const e=`mat3( ${Sh.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(s)){case ca:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function bh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+G1(s.getShaderSource(e),o)}else return r}function X1(s,e){const t=W1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const $1={[Eu]:"Linear",[wu]:"Reinhard",[Tu]:"Cineon",[fr]:"ACESFilmic",[Cu]:"AgX",[Ru]:"Neutral",[Au]:"Custom"};function j1(s,e){const t=$1[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vr=new N;function q1(){et.getLuminanceCoefficients(Vr);const s=Vr.x.toFixed(4),e=Vr.y.toFixed(4),t=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function K1(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Z1(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function js(s){return s!==""}function Eh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(s){return s.replace(J1,e_)}const Q1=new Map;function e_(s,e){let t=We[e];if(t===void 0){const n=Q1.get(e);if(n!==void 0)t=We[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}const t_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(s){return s.replace(t_,n_)}function n_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ah(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const i_={[Yr]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function s_(s){return i_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const r_={[Ai]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE",[Sa]:"ENVMAP_TYPE_CUBE_UV"};function a_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":r_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const o_={[fs]:"ENVMAP_MODE_REFRACTION"};function l_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":o_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const c_={[Ma]:"ENVMAP_BLENDING_MULTIPLY",[of]:"ENVMAP_BLENDING_MIX",[lf]:"ENVMAP_BLENDING_ADD"};function h_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":c_[s.combine]||"ENVMAP_BLENDING_NONE"}function u_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function d_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=s_(t),c=a_(t),h=l_(t),u=h_(t),d=u_(t),p=Y1(t),g=K1(r),_=i.createProgram();let f,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`)):(f=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),m=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?We.tonemapping_pars_fragment:"",t.toneMapping!==Rn?j1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,X1("linearToOutputTexel",t.outputColorSpace),q1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),a=Al(a),a=Eh(a,t),a=wh(a,t),o=Al(o),o=Eh(o,t),o=wh(o,t),a=Th(a),o=Th(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",t.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=y+f+a,E=y+m+o,C=Mh(i,i.VERTEX_SHADER,w),x=Mh(i,i.FRAGMENT_SHADER,E);i.attachShader(_,C),i.attachShader(_,x),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(T){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(_)||"",P=i.getShaderInfoLog(C)||"",z=i.getShaderInfoLog(x)||"",U=L.trim(),H=P.trim(),O=z.trim();let $=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,C,x);else{const ee=bh(i,C,"vertex"),ie=bh(i,x,"fragment");Ue("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+ee+`
`+ie)}else U!==""?Ce("WebGLProgram: Program Info Log:",U):(H===""||O==="")&&(Q=!1);Q&&(T.diagnostics={runnable:$,programLog:U,vertexShader:{log:H,prefix:f},fragmentShader:{log:O,prefix:m}})}i.deleteShader(C),i.deleteShader(x),I=new ta(i,_),v=Z1(i,_)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let v;this.getAttributes=function(){return v===void 0&&b(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,H1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=x,this}let f_=0;class p_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new m_(e),t.set(e,n)),n}}class m_{constructor(e){this.id=f_++,this.code=e,this.usedTimes=0}}function g_(s,e,t,n,i,r,a){const o=new Hu,l=new p_,c=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function f(v,S,T,L,P){const z=L.fog,U=P.geometry,H=v.isMeshStandardMaterial?L.environment:null,O=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),$=O&&O.mapping===Sa?O.image.height:null,Q=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&Ce("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ee=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ie=ee!==void 0?ee.length:0;let Be=0;U.morphAttributes.position!==void 0&&(Be=1),U.morphAttributes.normal!==void 0&&(Be=2),U.morphAttributes.color!==void 0&&(Be=3);let ke,lt,tt,q;if(Q){const ct=wn[Q];ke=ct.vertexShader,lt=ct.fragmentShader}else ke=v.vertexShader,lt=v.fragmentShader,l.update(v),tt=l.getVertexShaderID(v),q=l.getFragmentShaderID(v);const Z=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Fe=P.isInstancedMesh===!0,ye=P.isBatchedMesh===!0,Ke=!!v.map,Mt=!!v.matcap,Xe=!!O,Ze=!!v.aoMap,ot=!!v.lightMap,Ve=!!v.bumpMap,St=!!v.normalMap,D=!!v.displacementMap,pt=!!v.emissiveMap,nt=!!v.metalnessMap,it=!!v.roughnessMap,be=v.anisotropy>0,R=v.clearcoat>0,M=v.dispersion>0,B=v.iridescence>0,j=v.sheen>0,Y=v.transmission>0,X=be&&!!v.anisotropyMap,we=R&&!!v.clearcoatMap,se=R&&!!v.clearcoatNormalMap,Ee=R&&!!v.clearcoatRoughnessMap,Ne=B&&!!v.iridescenceMap,te=B&&!!v.iridescenceThicknessMap,ue=j&&!!v.sheenColorMap,Se=j&&!!v.sheenRoughnessMap,Te=!!v.specularMap,he=!!v.specularColorMap,$e=!!v.specularIntensityMap,F=Y&&!!v.transmissionMap,ge=Y&&!!v.thicknessMap,ne=!!v.gradientMap,xe=!!v.alphaMap,J=v.alphaTest>0,K=!!v.alphaHash,ce=!!v.extensions;let ze=Rn;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ze=s.toneMapping);const _t={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:ke,fragmentShader:lt,defines:v.defines,customVertexShaderID:tt,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:ye,batchingColor:ye&&P._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&P.instanceColor!==null,instancingMorph:Fe&&P.morphTexture!==null,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ms,alphaToCoverage:!!v.alphaToCoverage,map:Ke,matcap:Mt,envMap:Xe,envMapMode:Xe&&O.mapping,envMapCubeUVHeight:$,aoMap:Ze,lightMap:ot,bumpMap:Ve,normalMap:St,displacementMap:D,emissiveMap:pt,normalMapObjectSpace:St&&v.normalMapType===mf,normalMapTangentSpace:St&&v.normalMapType===ba,metalnessMap:nt,roughnessMap:it,anisotropy:be,anisotropyMap:X,clearcoat:R,clearcoatMap:we,clearcoatNormalMap:se,clearcoatRoughnessMap:Ee,dispersion:M,iridescence:B,iridescenceMap:Ne,iridescenceThicknessMap:te,sheen:j,sheenColorMap:ue,sheenRoughnessMap:Se,specularMap:Te,specularColorMap:he,specularIntensityMap:$e,transmission:Y,transmissionMap:F,thicknessMap:ge,gradientMap:ne,opaque:v.transparent===!1&&v.blending===Vn&&v.alphaToCoverage===!1,alphaMap:xe,alphaTest:J,alphaHash:K,combine:v.combine,mapUv:Ke&&_(v.map.channel),aoMapUv:Ze&&_(v.aoMap.channel),lightMapUv:ot&&_(v.lightMap.channel),bumpMapUv:Ve&&_(v.bumpMap.channel),normalMapUv:St&&_(v.normalMap.channel),displacementMapUv:D&&_(v.displacementMap.channel),emissiveMapUv:pt&&_(v.emissiveMap.channel),metalnessMapUv:nt&&_(v.metalnessMap.channel),roughnessMapUv:it&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:we&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(v.sheenRoughnessMap.channel),specularMapUv:Te&&_(v.specularMap.channel),specularColorMapUv:he&&_(v.specularColorMap.channel),specularIntensityMapUv:$e&&_(v.specularIntensityMap.channel),transmissionMapUv:F&&_(v.transmissionMap.channel),thicknessMapUv:ge&&_(v.thicknessMap.channel),alphaMapUv:xe&&_(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(St||be),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(Ke||xe),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:P.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ke&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===ut,decodeVideoTextureEmissive:pt&&v.emissiveMap.isVideoTexture===!0&&et.getTransfer(v.emissiveMap.colorSpace)===ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===dn,flipSided:v.side===Kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ce&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&v.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function m(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const T in v.defines)S.push(T),S.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(y(S,v),w(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function w(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function E(v){const S=g[v.type];let T;if(S){const L=wn[S];T=sp.clone(L.uniforms)}else T=v.uniforms;return T}function C(v,S){let T=u.get(S);return T!==void 0?++T.usedTimes:(T=new d_(s,S,v,r),h.push(T),u.set(S,T)),T}function x(v){if(--v.usedTimes===0){const S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){l.remove(v)}function I(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:E,acquireProgram:C,releaseProgram:x,releaseShaderCache:b,programs:h,dispose:I}}function __(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function x_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ch(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Rh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,p,g,_,f){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},s[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=f),e++,m}function o(u,d,p,g,_,f){const m=a(u,d,p,g,_,f);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(u,d,p,g,_,f){const m=a(u,d,p,g,_,f);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||x_),n.length>1&&n.sort(d||Ch),i.length>1&&i.sort(d||Ch)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function v_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Rh,s.set(n,[a])):i>=r.length?(a=new Rh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function y_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Re};break;case"SpotLight":t={position:new N,direction:new N,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function M_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let S_=0;function b_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function E_(s){const e=new y_,t=M_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,r=new Oe,a=new Oe;function o(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,_=0,f=0,m=0,y=0,w=0,E=0,C=0,x=0,b=0;c.sort(b_);for(let v=0,S=c.length;v<S;v++){const T=c[v],L=T.color,P=T.intensity,z=T.distance;let U=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===ps?U=T.shadow.map.texture:U=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=L.r*P,u+=L.g*P,d+=L.b*P;else if(T.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(T.sh.coefficients[H],P);b++}else if(T.isDirectionalLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const O=T.shadow,$=t.get(T);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=U,n.directionalShadowMatrix[p]=T.shadow.matrix,y++}n.directional[p]=H,p++}else if(T.isSpotLight){const H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(L).multiplyScalar(P),H.distance=z,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,n.spot[_]=H;const O=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,O.updateMatrices(T),T.castShadow&&x++),n.spotLightMatrix[_]=O.matrix,T.castShadow){const $=t.get(T);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=U,E++}_++}else if(T.isRectAreaLight){const H=e.get(T);H.color.copy(L).multiplyScalar(P),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),n.rectArea[f]=H,f++}else if(T.isPointLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){const O=T.shadow,$=t.get(T);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,$.shadowCameraNear=O.camera.near,$.shadowCameraFar=O.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=T.shadow.matrix,w++}n.point[g]=H,g++}else if(T.isHemisphereLight){const H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(P),H.groundColor.copy(T.groundColor).multiplyScalar(P),n.hemi[m]=H,m++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==f||I.hemiLength!==m||I.numDirectionalShadows!==y||I.numPointShadows!==w||I.numSpotShadows!==E||I.numSpotMaps!==C||I.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=E+C-x,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=b,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=f,I.hemiLength=m,I.numDirectionalShadows=y,I.numPointShadows=w,I.numSpotShadows=E,I.numSpotMaps=C,I.numLightProbes=b,n.version=S_++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const f=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const w=c[m];if(w.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(f),u++}else if(w.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(f),p++}else if(w.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(f),a.identity(),r.copy(w.matrixWorld),r.premultiply(f),a.extractRotation(r),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(f),d++}else if(w.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(f),_++}}}return{setup:o,setupView:l,state:n}}function Ih(s){const e=new E_(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function w_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Ih(s),e.set(i,[o])):r>=a.length?(o=new Ih(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A_=`uniform sampler2D shadow_pass;
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
}`,C_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],R_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Lh=new Oe,Ds=new N,yo=new N;function I_(s,e,t){let n=new Xl;const i=new He,r=new He,a=new yt,o=new Mp,l=new Sp,c={},h=t.maxTextureSize,u={[Wn]:Kt,[Kt]:Wn,[dn]:dn},d=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:T_,fragmentShader:A_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new It(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let m=this.type;this.render=function(x,b,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||x.length===0)return;x.type===Dl&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),x.type=Yr);const v=s.getRenderTarget(),S=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),L=s.state;L.setBlending(kt),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const P=m!==this.type;P&&b.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(U=>U.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,U=x.length;z<U;z++){const H=x[z],O=H.shadow;if(O===void 0){Ce("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const $=O.getFrameExtents();if(i.multiply($),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,O.mapSize.y=r.y)),O.map===null||P===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Xs){if(H.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new In(i.x,i.y,{format:ps,type:Xn,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new or(i.x,i.y,fn),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=$n,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=bt,O.map.depthTexture.magFilter=bt}else{H.isPointLight?(O.map=new qu(i.x),O.map.depthTexture=new xp(i.x,Dn)):(O.map=new In(i.x,i.y),O.map.depthTexture=new or(i.x,i.y,Dn)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=$n;const ee=s.state.buffers.depth.getReversed();this.type===Yr?(O.map.depthTexture.compareFunction=ee?Hl:zl,O.map.depthTexture.minFilter=Pt,O.map.depthTexture.magFilter=Pt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=bt,O.map.depthTexture.magFilter=bt)}O.camera.updateProjectionMatrix()}const Q=O.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<Q;ee++){if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,ee),s.clear();else{ee===0&&(s.setRenderTarget(O.map),s.clear());const ie=O.getViewport(ee);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),L.viewport(a)}if(H.isPointLight){const ie=O.camera,Be=O.matrix,ke=H.distance||ie.far;ke!==ie.far&&(ie.far=ke,ie.updateProjectionMatrix()),Ds.setFromMatrixPosition(H.matrixWorld),ie.position.copy(Ds),yo.copy(ie.position),yo.add(C_[ee]),ie.up.copy(R_[ee]),ie.lookAt(yo),ie.updateMatrixWorld(),Be.makeTranslation(-Ds.x,-Ds.y,-Ds.z),Lh.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Lh,ie.coordinateSystem,ie.reversedDepth)}else O.updateMatrices(H);n=O.getFrustum(),E(b,I,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===Xs&&y(O,I),O.needsUpdate=!1}m=this.type,f.needsUpdate=!1,s.setRenderTarget(v,S,T)};function y(x,b){const I=e.update(_);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new In(i.x,i.y,{format:ps,type:Xn})),d.uniforms.shadow_pass.value=x.map.depthTexture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,s.setRenderTarget(x.mapPass),s.clear(),s.renderBufferDirect(b,null,I,d,_,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,s.setRenderTarget(x.map),s.clear(),s.renderBufferDirect(b,null,I,p,_,null)}function w(x,b,I,v){let S=null;const T=I.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(T!==void 0)S=T;else if(S=I.isPointLight===!0?l:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const L=S.uuid,P=b.uuid;let z=c[L];z===void 0&&(z={},c[L]=z);let U=z[P];U===void 0&&(U=S.clone(),z[P]=U,b.addEventListener("dispose",C)),S=U}if(S.visible=b.visible,S.wireframe=b.wireframe,v===Xs?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:u[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=s.properties.get(S);L.light=I}return S}function E(x,b,I,v,S){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&S===Xs)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,x.matrixWorld);const P=e.update(x),z=x.material;if(Array.isArray(z)){const U=P.groups;for(let H=0,O=U.length;H<O;H++){const $=U[H],Q=z[$.materialIndex];if(Q&&Q.visible){const ee=w(x,Q,v,S);x.onBeforeShadow(s,x,b,I,P,ee,$),s.renderBufferDirect(I,null,P,ee,x,$),x.onAfterShadow(s,x,b,I,P,ee,$)}}}else if(z.visible){const U=w(x,z,v,S);x.onBeforeShadow(s,x,b,I,P,U,null),s.renderBufferDirect(I,null,P,U,x,null),x.onAfterShadow(s,x,b,I,P,U,null)}}const L=x.children;for(let P=0,z=L.length;P<z;P++)E(L[P],b,I,v,S)}function C(x){x.target.removeEventListener("dispose",C);for(const I in c){const v=c[I],S=x.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const L_={[Bo]:Oo,[ko]:Vo,[zo]:Go,[ds]:Ho,[Oo]:Bo,[Vo]:ko,[Go]:zo,[Ho]:ds};function D_(s,e){function t(){let F=!1;const ge=new yt;let ne=null;const xe=new yt(0,0,0,0);return{setMask:function(J){ne!==J&&!F&&(s.colorMask(J,J,J,J),ne=J)},setLocked:function(J){F=J},setClear:function(J,K,ce,ze,_t){_t===!0&&(J*=ze,K*=ze,ce*=ze),ge.set(J,K,ce,ze),xe.equals(ge)===!1&&(s.clearColor(J,K,ce,ze),xe.copy(ge))},reset:function(){F=!1,ne=null,xe.set(-1,0,0,0)}}}function n(){let F=!1,ge=!1,ne=null,xe=null,J=null;return{setReversed:function(K){if(ge!==K){const ce=e.get("EXT_clip_control");K?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),ge=K;const ze=J;J=null,this.setClear(ze)}},getReversed:function(){return ge},setTest:function(K){K?Z(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(K){ne!==K&&!F&&(s.depthMask(K),ne=K)},setFunc:function(K){if(ge&&(K=L_[K]),xe!==K){switch(K){case Bo:s.depthFunc(s.NEVER);break;case Oo:s.depthFunc(s.ALWAYS);break;case ko:s.depthFunc(s.LESS);break;case ds:s.depthFunc(s.LEQUAL);break;case zo:s.depthFunc(s.EQUAL);break;case Ho:s.depthFunc(s.GEQUAL);break;case Vo:s.depthFunc(s.GREATER);break;case Go:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=K}},setLocked:function(K){F=K},setClear:function(K){J!==K&&(ge&&(K=1-K),s.clearDepth(K),J=K)},reset:function(){F=!1,ne=null,xe=null,J=null,ge=!1}}}function i(){let F=!1,ge=null,ne=null,xe=null,J=null,K=null,ce=null,ze=null,_t=null;return{setTest:function(ct){F||(ct?Z(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(ct){ge!==ct&&!F&&(s.stencilMask(ct),ge=ct)},setFunc:function(ct,Sn,Pn){(ne!==ct||xe!==Sn||J!==Pn)&&(s.stencilFunc(ct,Sn,Pn),ne=ct,xe=Sn,J=Pn)},setOp:function(ct,Sn,Pn){(K!==ct||ce!==Sn||ze!==Pn)&&(s.stencilOp(ct,Sn,Pn),K=ct,ce=Sn,ze=Pn)},setLocked:function(ct){F=ct},setClear:function(ct){_t!==ct&&(s.clearStencil(ct),_t=ct)},reset:function(){F=!1,ge=null,ne=null,xe=null,J=null,K=null,ce=null,ze=null,_t=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,f=null,m=null,y=null,w=null,E=null,C=null,x=null,b=new Re(0,0,0),I=0,v=!1,S=null,T=null,L=null,P=null,z=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,O=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec($)[1]),H=O>=1):$.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=O>=2);let Q=null,ee={};const ie=s.getParameter(s.SCISSOR_BOX),Be=s.getParameter(s.VIEWPORT),ke=new yt().fromArray(ie),lt=new yt().fromArray(Be);function tt(F,ge,ne,xe){const J=new Uint8Array(4),K=s.createTexture();s.bindTexture(F,K),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ce=0;ce<ne;ce++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ge,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(ge+ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return K}const q={};q[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(s.DEPTH_TEST),a.setFunc(ds),Ve(!1),St(Sc),Z(s.CULL_FACE),Ze(kt);function Z(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function _e(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Fe(F,ge){return u[F]!==ge?(s.bindFramebuffer(F,ge),u[F]=ge,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ge),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ge),!0):!1}function ye(F,ge){let ne=p,xe=!1;if(F){ne=d.get(ge),ne===void 0&&(ne=[],d.set(ge,ne));const J=F.textures;if(ne.length!==J.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let K=0,ce=J.length;K<ce;K++)ne[K]=s.COLOR_ATTACHMENT0+K;ne.length=J.length,xe=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,xe=!0);xe&&s.drawBuffers(ne)}function Ke(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const Mt={[Mi]:s.FUNC_ADD,[Gd]:s.FUNC_SUBTRACT,[Wd]:s.FUNC_REVERSE_SUBTRACT};Mt[Xd]=s.MIN,Mt[$d]=s.MAX;const Xe={[jd]:s.ZERO,[qd]:s.ONE,[Yd]:s.SRC_COLOR,[Fo]:s.SRC_ALPHA,[tf]:s.SRC_ALPHA_SATURATE,[Qd]:s.DST_COLOR,[Zd]:s.DST_ALPHA,[Kd]:s.ONE_MINUS_SRC_COLOR,[No]:s.ONE_MINUS_SRC_ALPHA,[ef]:s.ONE_MINUS_DST_COLOR,[Jd]:s.ONE_MINUS_DST_ALPHA,[nf]:s.CONSTANT_COLOR,[sf]:s.ONE_MINUS_CONSTANT_COLOR,[rf]:s.CONSTANT_ALPHA,[af]:s.ONE_MINUS_CONSTANT_ALPHA};function Ze(F,ge,ne,xe,J,K,ce,ze,_t,ct){if(F===kt){_===!0&&(_e(s.BLEND),_=!1);return}if(_===!1&&(Z(s.BLEND),_=!0),F!==Vd){if(F!==f||ct!==v){if((m!==Mi||E!==Mi)&&(s.blendEquation(s.FUNC_ADD),m=Mi,E=Mi),ct)switch(F){case Vn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case er:s.blendFunc(s.ONE,s.ONE);break;case sa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ra:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ue("WebGLState: Invalid blending: ",F);break}else switch(F){case Vn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case er:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case sa:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ra:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",F);break}y=null,w=null,C=null,x=null,b.set(0,0,0),I=0,f=F,v=ct}return}J=J||ge,K=K||ne,ce=ce||xe,(ge!==m||J!==E)&&(s.blendEquationSeparate(Mt[ge],Mt[J]),m=ge,E=J),(ne!==y||xe!==w||K!==C||ce!==x)&&(s.blendFuncSeparate(Xe[ne],Xe[xe],Xe[K],Xe[ce]),y=ne,w=xe,C=K,x=ce),(ze.equals(b)===!1||_t!==I)&&(s.blendColor(ze.r,ze.g,ze.b,_t),b.copy(ze),I=_t),f=F,v=!1}function ot(F,ge){F.side===dn?_e(s.CULL_FACE):Z(s.CULL_FACE);let ne=F.side===Kt;ge&&(ne=!ne),Ve(ne),F.blending===Vn&&F.transparent===!1?Ze(kt):Ze(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const xe=F.stencilWrite;o.setTest(xe),xe&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),pt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(F){S!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),S=F)}function St(F){F!==zd?(Z(s.CULL_FACE),F!==T&&(F===Sc?s.cullFace(s.BACK):F===Hd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),T=F}function D(F){F!==L&&(H&&s.lineWidth(F),L=F)}function pt(F,ge,ne){F?(Z(s.POLYGON_OFFSET_FILL),(P!==ge||z!==ne)&&(s.polygonOffset(ge,ne),P=ge,z=ne)):_e(s.POLYGON_OFFSET_FILL)}function nt(F){F?Z(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function it(F){F===void 0&&(F=s.TEXTURE0+U-1),Q!==F&&(s.activeTexture(F),Q=F)}function be(F,ge,ne){ne===void 0&&(Q===null?ne=s.TEXTURE0+U-1:ne=Q);let xe=ee[ne];xe===void 0&&(xe={type:void 0,texture:void 0},ee[ne]=xe),(xe.type!==F||xe.texture!==ge)&&(Q!==ne&&(s.activeTexture(ne),Q=ne),s.bindTexture(F,ge||q[F]),xe.type=F,xe.texture=ge)}function R(){const F=ee[Q];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(F){Ue("WebGLState:",F)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(F){Ue("WebGLState:",F)}}function j(){try{s.texSubImage2D(...arguments)}catch(F){Ue("WebGLState:",F)}}function Y(){try{s.texSubImage3D(...arguments)}catch(F){Ue("WebGLState:",F)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Ue("WebGLState:",F)}}function we(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Ue("WebGLState:",F)}}function se(){try{s.texStorage2D(...arguments)}catch(F){Ue("WebGLState:",F)}}function Ee(){try{s.texStorage3D(...arguments)}catch(F){Ue("WebGLState:",F)}}function Ne(){try{s.texImage2D(...arguments)}catch(F){Ue("WebGLState:",F)}}function te(){try{s.texImage3D(...arguments)}catch(F){Ue("WebGLState:",F)}}function ue(F){ke.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),ke.copy(F))}function Se(F){lt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),lt.copy(F))}function Te(F,ge){let ne=c.get(ge);ne===void 0&&(ne=new WeakMap,c.set(ge,ne));let xe=ne.get(F);xe===void 0&&(xe=s.getUniformBlockIndex(ge,F.name),ne.set(F,xe))}function he(F,ge){const xe=c.get(ge).get(F);l.get(ge)!==xe&&(s.uniformBlockBinding(ge,xe,F.__bindingPointIndex),l.set(ge,xe))}function $e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Q=null,ee={},u={},d=new WeakMap,p=[],g=null,_=!1,f=null,m=null,y=null,w=null,E=null,C=null,x=null,b=new Re(0,0,0),I=0,v=!1,S=null,T=null,L=null,P=null,z=null,ke.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:_e,bindFramebuffer:Fe,drawBuffers:ye,useProgram:Ke,setBlending:Ze,setMaterial:ot,setFlipSided:Ve,setCullFace:St,setLineWidth:D,setPolygonOffset:pt,setScissorTest:nt,activeTexture:it,bindTexture:be,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:B,texImage2D:Ne,texImage3D:te,updateUBOMapping:Te,uniformBlockBinding:he,texStorage2D:se,texStorage3D:Ee,texSubImage2D:j,texSubImage3D:Y,compressedTexSubImage2D:X,compressedTexSubImage3D:we,scissor:ue,viewport:Se,reset:$e}}function P_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):sr("canvas")}function _(R,M,B){let j=1;const Y=be(R);if((Y.width>B||Y.height>B)&&(j=B/Math.max(Y.width,Y.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(j*Y.width),we=Math.floor(j*Y.height);u===void 0&&(u=g(X,we));const se=M?g(X,we):u;return se.width=X,se.height=we,se.getContext("2d").drawImage(R,0,0,X,we),Ce("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+X+"x"+we+")."),se}else return"data"in R&&Ce("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),R;return R}function f(R){return R.generateMipmaps}function m(R){s.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(R,M,B,j,Y=!1){if(R!==null){if(s[R]!==void 0)return s[R];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=M;if(M===s.RED&&(B===s.FLOAT&&(X=s.R32F),B===s.HALF_FLOAT&&(X=s.R16F),B===s.UNSIGNED_BYTE&&(X=s.R8)),M===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.R8UI),B===s.UNSIGNED_SHORT&&(X=s.R16UI),B===s.UNSIGNED_INT&&(X=s.R32UI),B===s.BYTE&&(X=s.R8I),B===s.SHORT&&(X=s.R16I),B===s.INT&&(X=s.R32I)),M===s.RG&&(B===s.FLOAT&&(X=s.RG32F),B===s.HALF_FLOAT&&(X=s.RG16F),B===s.UNSIGNED_BYTE&&(X=s.RG8)),M===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.RG8UI),B===s.UNSIGNED_SHORT&&(X=s.RG16UI),B===s.UNSIGNED_INT&&(X=s.RG32UI),B===s.BYTE&&(X=s.RG8I),B===s.SHORT&&(X=s.RG16I),B===s.INT&&(X=s.RG32I)),M===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.RGB8UI),B===s.UNSIGNED_SHORT&&(X=s.RGB16UI),B===s.UNSIGNED_INT&&(X=s.RGB32UI),B===s.BYTE&&(X=s.RGB8I),B===s.SHORT&&(X=s.RGB16I),B===s.INT&&(X=s.RGB32I)),M===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),B===s.UNSIGNED_INT&&(X=s.RGBA32UI),B===s.BYTE&&(X=s.RGBA8I),B===s.SHORT&&(X=s.RGBA16I),B===s.INT&&(X=s.RGBA32I)),M===s.RGB&&(B===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),M===s.RGBA){const we=Y?ca:et.getTransfer(j);B===s.FLOAT&&(X=s.RGBA32F),B===s.HALF_FLOAT&&(X=s.RGBA16F),B===s.UNSIGNED_BYTE&&(X=we===ut?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function E(R,M){let B;return R?M===null||M===Dn||M===nr?B=s.DEPTH24_STENCIL8:M===fn?B=s.DEPTH32F_STENCIL8:M===tr&&(B=s.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Dn||M===nr?B=s.DEPTH_COMPONENT24:M===fn?B=s.DEPTH_COMPONENT32F:M===tr&&(B=s.DEPTH_COMPONENT16),B}function C(R,M){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==bt&&R.minFilter!==Pt?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function x(R){const M=R.target;M.removeEventListener("dispose",x),I(M),M.isVideoTexture&&h.delete(M)}function b(R){const M=R.target;M.removeEventListener("dispose",b),S(M)}function I(R){const M=n.get(R);if(M.__webglInit===void 0)return;const B=R.source,j=d.get(B);if(j){const Y=j[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&v(R),Object.keys(j).length===0&&d.delete(B)}n.remove(R)}function v(R){const M=n.get(R);s.deleteTexture(M.__webglTexture);const B=R.source,j=d.get(B);delete j[M.__cacheKey],a.memory.textures--}function S(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let Y=0;Y<M.__webglFramebuffer[j].length;Y++)s.deleteFramebuffer(M.__webglFramebuffer[j][Y]);else s.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)s.deleteFramebuffer(M.__webglFramebuffer[j]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let j=0,Y=B.length;j<Y;j++){const X=n.get(B[j]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(B[j])}n.remove(R)}let T=0;function L(){T=0}function P(){const R=T;return R>=i.maxTextures&&Ce("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),T+=1,R}function z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function U(R,M){const B=n.get(R);if(R.isVideoTexture&&nt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const j=R.image;if(j===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,R,M);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+M)}function H(R,M){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){q(B,R,M);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+M)}function O(R,M){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){q(B,R,M);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+M)}function $(R,M){const B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){Z(B,R,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+M)}const Q={[Ln]:s.REPEAT,[Bt]:s.CLAMP_TO_EDGE,[aa]:s.MIRRORED_REPEAT},ee={[bt]:s.NEAREST,[Lu]:s.NEAREST_MIPMAP_NEAREST,[$s]:s.NEAREST_MIPMAP_LINEAR,[Pt]:s.LINEAR,[Kr]:s.LINEAR_MIPMAP_NEAREST,[ai]:s.LINEAR_MIPMAP_LINEAR},ie={[gf]:s.NEVER,[Mf]:s.ALWAYS,[_f]:s.LESS,[zl]:s.LEQUAL,[xf]:s.EQUAL,[Hl]:s.GEQUAL,[vf]:s.GREATER,[yf]:s.NOTEQUAL};function Be(R,M){if(M.type===fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Pt||M.magFilter===Kr||M.magFilter===$s||M.magFilter===ai||M.minFilter===Pt||M.minFilter===Kr||M.minFilter===$s||M.minFilter===ai)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Q[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Q[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Q[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ee[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ee[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===bt||M.minFilter!==$s&&M.minFilter!==ai||M.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ke(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",x));const j=M.source;let Y=d.get(j);Y===void 0&&(Y={},d.set(j,Y));const X=z(M);if(X!==R.__cacheKey){Y[X]===void 0&&(Y[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[X].usedTimes++;const we=Y[R.__cacheKey];we!==void 0&&(Y[R.__cacheKey].usedTimes--,we.usedTimes===0&&v(M)),R.__cacheKey=X,R.__webglTexture=Y[X].texture}return B}function lt(R,M,B){return Math.floor(Math.floor(R/B)/M)}function tt(R,M,B,j){const X=R.updateRanges;if(X.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,B,j,M.data);else{X.sort((te,ue)=>te.start-ue.start);let we=0;for(let te=1;te<X.length;te++){const ue=X[we],Se=X[te],Te=ue.start+ue.count,he=lt(Se.start,M.width,4),$e=lt(ue.start,M.width,4);Se.start<=Te+1&&he===$e&&lt(Se.start+Se.count-1,M.width,4)===he?ue.count=Math.max(ue.count,Se.start+Se.count-ue.start):(++we,X[we]=Se)}X.length=we+1;const se=s.getParameter(s.UNPACK_ROW_LENGTH),Ee=s.getParameter(s.UNPACK_SKIP_PIXELS),Ne=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let te=0,ue=X.length;te<ue;te++){const Se=X[te],Te=Math.floor(Se.start/4),he=Math.ceil(Se.count/4),$e=Te%M.width,F=Math.floor(Te/M.width),ge=he,ne=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,$e),s.pixelStorei(s.UNPACK_SKIP_ROWS,F),t.texSubImage2D(s.TEXTURE_2D,0,$e,F,ge,ne,B,j,M.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,se),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ne)}}function q(R,M,B){let j=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=s.TEXTURE_3D);const Y=ke(R,M),X=M.source;t.bindTexture(j,R.__webglTexture,s.TEXTURE0+B);const we=n.get(X);if(X.version!==we.__version||Y===!0){t.activeTexture(s.TEXTURE0+B);const se=et.getPrimaries(et.workingColorSpace),Ee=M.colorSpace===Tn?null:et.getPrimaries(M.colorSpace),Ne=M.colorSpace===Tn||se===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let te=_(M.image,!1,i.maxTextureSize);te=it(M,te);const ue=r.convert(M.format,M.colorSpace),Se=r.convert(M.type);let Te=w(M.internalFormat,ue,Se,M.colorSpace,M.isVideoTexture);Be(j,M);let he;const $e=M.mipmaps,F=M.isVideoTexture!==!0,ge=we.__version===void 0||Y===!0,ne=X.dataReady,xe=C(M,te);if(M.isDepthTexture)Te=E(M.format===Ei,M.type),ge&&(F?t.texStorage2D(s.TEXTURE_2D,1,Te,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Te,te.width,te.height,0,ue,Se,null));else if(M.isDataTexture)if($e.length>0){F&&ge&&t.texStorage2D(s.TEXTURE_2D,xe,Te,$e[0].width,$e[0].height);for(let J=0,K=$e.length;J<K;J++)he=$e[J],F?ne&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,he.width,he.height,ue,Se,he.data):t.texImage2D(s.TEXTURE_2D,J,Te,he.width,he.height,0,ue,Se,he.data);M.generateMipmaps=!1}else F?(ge&&t.texStorage2D(s.TEXTURE_2D,xe,Te,te.width,te.height),ne&&tt(M,te,ue,Se)):t.texImage2D(s.TEXTURE_2D,0,Te,te.width,te.height,0,ue,Se,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){F&&ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,Te,$e[0].width,$e[0].height,te.depth);for(let J=0,K=$e.length;J<K;J++)if(he=$e[J],M.format!==ln)if(ue!==null)if(F){if(ne)if(M.layerUpdates.size>0){const ce=ch(he.width,he.height,M.format,M.type);for(const ze of M.layerUpdates){const _t=he.data.subarray(ze*ce/he.data.BYTES_PER_ELEMENT,(ze+1)*ce/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,ze,he.width,he.height,1,ue,_t)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,te.depth,ue,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Te,he.width,he.height,te.depth,0,he.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,te.depth,ue,Se,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,Te,he.width,he.height,te.depth,0,ue,Se,he.data)}else{F&&ge&&t.texStorage2D(s.TEXTURE_2D,xe,Te,$e[0].width,$e[0].height);for(let J=0,K=$e.length;J<K;J++)he=$e[J],M.format!==ln?ue!==null?F?ne&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,he.width,he.height,ue,he.data):t.compressedTexImage2D(s.TEXTURE_2D,J,Te,he.width,he.height,0,he.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ne&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,he.width,he.height,ue,Se,he.data):t.texImage2D(s.TEXTURE_2D,J,Te,he.width,he.height,0,ue,Se,he.data)}else if(M.isDataArrayTexture)if(F){if(ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,Te,te.width,te.height,te.depth),ne)if(M.layerUpdates.size>0){const J=ch(te.width,te.height,M.format,M.type);for(const K of M.layerUpdates){const ce=te.data.subarray(K*J/te.data.BYTES_PER_ELEMENT,(K+1)*J/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,ue,Se,ce)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,Se,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,te.width,te.height,te.depth,0,ue,Se,te.data);else if(M.isData3DTexture)F?(ge&&t.texStorage3D(s.TEXTURE_3D,xe,Te,te.width,te.height,te.depth),ne&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,Se,te.data)):t.texImage3D(s.TEXTURE_3D,0,Te,te.width,te.height,te.depth,0,ue,Se,te.data);else if(M.isFramebufferTexture){if(ge)if(F)t.texStorage2D(s.TEXTURE_2D,xe,Te,te.width,te.height);else{let J=te.width,K=te.height;for(let ce=0;ce<xe;ce++)t.texImage2D(s.TEXTURE_2D,ce,Te,J,K,0,ue,Se,null),J>>=1,K>>=1}}else if($e.length>0){if(F&&ge){const J=be($e[0]);t.texStorage2D(s.TEXTURE_2D,xe,Te,J.width,J.height)}for(let J=0,K=$e.length;J<K;J++)he=$e[J],F?ne&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ue,Se,he):t.texImage2D(s.TEXTURE_2D,J,Te,ue,Se,he);M.generateMipmaps=!1}else if(F){if(ge){const J=be(te);t.texStorage2D(s.TEXTURE_2D,xe,Te,J.width,J.height)}ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue,Se,te)}else t.texImage2D(s.TEXTURE_2D,0,Te,ue,Se,te);f(M)&&m(j),we.__version=X.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Z(R,M,B){if(M.image.length!==6)return;const j=ke(R,M),Y=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+B);const X=n.get(Y);if(Y.version!==X.__version||j===!0){t.activeTexture(s.TEXTURE0+B);const we=et.getPrimaries(et.workingColorSpace),se=M.colorSpace===Tn?null:et.getPrimaries(M.colorSpace),Ee=M.colorSpace===Tn||we===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let K=0;K<6;K++)!Ne&&!te?ue[K]=_(M.image[K],!0,i.maxCubemapSize):ue[K]=te?M.image[K].image:M.image[K],ue[K]=it(M,ue[K]);const Se=ue[0],Te=r.convert(M.format,M.colorSpace),he=r.convert(M.type),$e=w(M.internalFormat,Te,he,M.colorSpace),F=M.isVideoTexture!==!0,ge=X.__version===void 0||j===!0,ne=Y.dataReady;let xe=C(M,Se);Be(s.TEXTURE_CUBE_MAP,M);let J;if(Ne){F&&ge&&t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,$e,Se.width,Se.height);for(let K=0;K<6;K++){J=ue[K].mipmaps;for(let ce=0;ce<J.length;ce++){const ze=J[ce];M.format!==ln?Te!==null?F?ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,ze.width,ze.height,Te,ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,$e,ze.width,ze.height,0,ze.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,ze.width,ze.height,Te,he,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,$e,ze.width,ze.height,0,Te,he,ze.data)}}}else{if(J=M.mipmaps,F&&ge){J.length>0&&xe++;const K=be(ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,$e,K.width,K.height)}for(let K=0;K<6;K++)if(te){F?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ue[K].width,ue[K].height,Te,he,ue[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,ue[K].width,ue[K].height,0,Te,he,ue[K].data);for(let ce=0;ce<J.length;ce++){const _t=J[ce].image[K].image;F?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,_t.width,_t.height,Te,he,_t.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,$e,_t.width,_t.height,0,Te,he,_t.data)}}else{F?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Te,he,ue[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,Te,he,ue[K]);for(let ce=0;ce<J.length;ce++){const ze=J[ce];F?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Te,he,ze.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,$e,Te,he,ze.image[K])}}}f(M)&&m(s.TEXTURE_CUBE_MAP),X.__version=Y.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function _e(R,M,B,j,Y,X){const we=r.convert(B.format,B.colorSpace),se=r.convert(B.type),Ee=w(B.internalFormat,we,se,B.colorSpace),Ne=n.get(M),te=n.get(B);if(te.__renderTarget=M,!Ne.__hasExternalTextures){const ue=Math.max(1,M.width>>X),Se=Math.max(1,M.height>>X);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?t.texImage3D(Y,X,Ee,ue,Se,M.depth,0,we,se,null):t.texImage2D(Y,X,Ee,ue,Se,0,we,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),pt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Y,te.__webglTexture,0,D(M)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Y,te.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(R,M,B){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){const j=M.depthTexture,Y=j&&j.isDepthTexture?j.type:null,X=E(M.stencilBuffer,Y),we=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(M),X,M.width,M.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(M),X,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,X,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,R)}else{const j=M.textures;for(let Y=0;Y<j.length;Y++){const X=j[Y],we=r.convert(X.format,X.colorSpace),se=r.convert(X.type),Ee=w(X.internalFormat,we,se,X.colorSpace);pt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(M),Ee,M.width,M.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(M),Ee,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(R,M,B){const j=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(M.depthTexture);if(Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,M.depthTexture.addEventListener("dispose",x)),Y.__webglTexture===void 0){Y.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Be(s.TEXTURE_CUBE_MAP,M.depthTexture);const Ne=r.convert(M.depthTexture.format),te=r.convert(M.depthTexture.type);let ue;M.depthTexture.format===$n?ue=s.DEPTH_COMPONENT24:M.depthTexture.format===Ei&&(ue=s.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ue,M.width,M.height,0,Ne,te,null)}}else U(M.depthTexture,0);const X=Y.__webglTexture,we=D(M),se=j?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,Ee=M.depthTexture.format===Ei?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===$n)pt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,se,X,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,se,X,0);else if(M.depthTexture.format===Ei)pt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,se,X,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,se,X,0);else throw new Error("Unknown depthTexture format")}function Ke(R){const M=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const Y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",Y)};j.addEventListener("dispose",Y),M.__depthDisposeCallback=Y}M.__boundDepthTexture=j}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let j=0;j<6;j++)ye(M.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?ye(M.__webglFramebuffer[0],R,0):ye(M.__webglFramebuffer,R,0)}else if(B){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=s.createRenderbuffer(),Fe(M.__webglDepthbuffer[j],R,!1);else{const Y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,X)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Fe(M.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,X)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(R,M,B){const j=n.get(R);M!==void 0&&_e(j.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ke(R)}function Xe(R){const M=R.texture,B=n.get(R),j=n.get(M);R.addEventListener("dispose",b);const Y=R.textures,X=R.isWebGLCubeRenderTarget===!0,we=Y.length>1;if(we||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=M.version,a.memory.textures++),X){B.__webglFramebuffer=[];for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[se]=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)B.__webglFramebuffer[se][Ee]=s.createFramebuffer()}else B.__webglFramebuffer[se]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let se=0;se<M.mipmaps.length;se++)B.__webglFramebuffer[se]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(we)for(let se=0,Ee=Y.length;se<Ee;se++){const Ne=n.get(Y[se]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&pt(R)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let se=0;se<Y.length;se++){const Ee=Y[se];B.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[se]);const Ne=r.convert(Ee.format,Ee.colorSpace),te=r.convert(Ee.type),ue=w(Ee.internalFormat,Ne,te,Ee.colorSpace,R.isXRRenderTarget===!0),Se=D(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,ue,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,B.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Be(s.TEXTURE_CUBE_MAP,M);for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)_e(B.__webglFramebuffer[se][Ee],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee);else _e(B.__webglFramebuffer[se],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);f(M)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let se=0,Ee=Y.length;se<Ee;se++){const Ne=Y[se],te=n.get(Ne);let ue=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,te.__webglTexture),Be(ue,Ne),_e(B.__webglFramebuffer,R,Ne,s.COLOR_ATTACHMENT0+se,ue,0),f(Ne)&&m(ue)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),Be(se,M),M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)_e(B.__webglFramebuffer[Ee],R,M,s.COLOR_ATTACHMENT0,se,Ee);else _e(B.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,se,0);f(M)&&m(se),t.unbindTexture()}R.depthBuffer&&Ke(R)}function Ze(R){const M=R.textures;for(let B=0,j=M.length;B<j;B++){const Y=M[B];if(f(Y)){const X=y(R),we=n.get(Y).__webglTexture;t.bindTexture(X,we),m(X),t.unbindTexture()}}}const ot=[],Ve=[];function St(R){if(R.samples>0){if(pt(R)===!1){const M=R.textures,B=R.width,j=R.height;let Y=s.COLOR_BUFFER_BIT;const X=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(R),se=M.length>1;if(se)for(let Ne=0;Ne<M.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Ee=R.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[Ne]);const te=n.get(M[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,B,j,0,0,B,j,Y,s.NEAREST),l===!0&&(ot.length=0,Ve.length=0,ot.push(s.COLOR_ATTACHMENT0+Ne),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ot.push(X),Ve.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ve)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let Ne=0;Ne<M.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,we.__webglColorRenderbuffer[Ne]);const te=n.get(M[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function D(R){return Math.min(i.maxSamples,R.samples)}function pt(R){const M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function nt(R){const M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function it(R,M){const B=R.colorSpace,j=R.format,Y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==ms&&B!==Tn&&(et.getTransfer(B)===ut?(j!==ln||Y!==Wt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",B)),M}function be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=L,this.setTexture2D=U,this.setTexture2DArray=H,this.setTexture3D=O,this.setTextureCube=$,this.rebindTextures=Mt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function U_(s,e){function t(n,i=Tn){let r;const a=et.getTransfer(i);if(n===Wt)return s.UNSIGNED_BYTE;if(n===Ul)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Uu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Fu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Du)return s.BYTE;if(n===Pu)return s.SHORT;if(n===tr)return s.UNSIGNED_SHORT;if(n===Pl)return s.INT;if(n===Dn)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===Xn)return s.HALF_FLOAT;if(n===Nu)return s.ALPHA;if(n===Bu)return s.RGB;if(n===ln)return s.RGBA;if(n===$n)return s.DEPTH_COMPONENT;if(n===Ei)return s.DEPTH_STENCIL;if(n===ls)return s.RED;if(n===Nl)return s.RED_INTEGER;if(n===ps)return s.RG;if(n===Bl)return s.RG_INTEGER;if(n===Ol)return s.RGBA_INTEGER;if(n===Zr||n===Jr||n===Qr||n===ea)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===jo||n===qo||n===Yo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ko||n===Zo||n===Jo||n===Qo||n===el||n===tl||n===nl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ko||n===Zo)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qo)return r.COMPRESSED_R11_EAC;if(n===el)return r.COMPRESSED_SIGNED_R11_EAC;if(n===tl)return r.COMPRESSED_RG11_EAC;if(n===nl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===il)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===al)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ol)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ll)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ul)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ml)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_l||n===xl||n===vl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_l)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yl||n===Ml||n===Sl||n===bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N_=`
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

}`;class B_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Zu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mn({vertexShader:F_,fragmentShader:N_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Aa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O_ extends li{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",f=new B_,m={},y=t.getContextAttributes();let w=null,E=null;const C=[],x=[],b=new He;let I=null;const v=new Yt;v.viewport=new yt;const S=new Yt;S.viewport=new yt;const T=[v,S],L=new Fp;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=C[q];return Z===void 0&&(Z=new ro,C[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=C[q];return Z===void 0&&(Z=new ro,C[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=C[q];return Z===void 0&&(Z=new ro,C[q]=Z),Z.getHandSpace()};function U(q){const Z=x.indexOf(q.inputSource);if(Z===-1)return;const _e=C[Z];_e!==void 0&&(_e.update(q.inputSource,q.frame,c||a),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",O);for(let q=0;q<C.length;q++){const Z=x[q];Z!==null&&(x[q]=null,C[q].disconnect(Z))}P=null,z=null,f.reset();for(const q in m)delete m[q];e.setRenderTarget(w),p=null,d=null,u=null,i=null,E=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",H),i.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Fe=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=y.stencil?Ei:$n,Fe=y.stencil?nr:Dn);const Ke={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ke),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new In(d.textureWidth,d.textureHeight,{format:ln,type:Wt,depthTexture:new or(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _e={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new In(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function O(q){for(let Z=0;Z<q.removed.length;Z++){const _e=q.removed[Z],Fe=x.indexOf(_e);Fe>=0&&(x[Fe]=null,C[Fe].disconnect(_e))}for(let Z=0;Z<q.added.length;Z++){const _e=q.added[Z];let Fe=x.indexOf(_e);if(Fe===-1){for(let Ke=0;Ke<C.length;Ke++)if(Ke>=x.length){x.push(_e),Fe=Ke;break}else if(x[Ke]===null){x[Ke]=_e,Fe=Ke;break}if(Fe===-1)break}const ye=C[Fe];ye&&ye.connect(_e)}}const $=new N,Q=new N;function ee(q,Z,_e){$.setFromMatrixPosition(Z.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const Fe=$.distanceTo(Q),ye=Z.projectionMatrix.elements,Ke=_e.projectionMatrix.elements,Mt=ye[14]/(ye[10]-1),Xe=ye[14]/(ye[10]+1),Ze=(ye[9]+1)/ye[5],ot=(ye[9]-1)/ye[5],Ve=(ye[8]-1)/ye[0],St=(Ke[8]+1)/Ke[0],D=Mt*Ve,pt=Mt*St,nt=Fe/(-Ve+St),it=nt*-Ve;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(it),q.translateZ(nt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ye[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const be=Mt+nt,R=Xe+nt,M=D-it,B=pt+(Fe-it),j=Ze*Xe/R*be,Y=ot*Xe/R*be;q.projectionMatrix.makePerspective(M,B,j,Y,be,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Z=q.near,_e=q.far;f.texture!==null&&(f.depthNear>0&&(Z=f.depthNear),f.depthFar>0&&(_e=f.depthFar)),L.near=S.near=v.near=Z,L.far=S.far=v.far=_e,(P!==L.near||z!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,z=L.far),L.layers.mask=q.layers.mask|6,v.layers.mask=L.layers.mask&3,S.layers.mask=L.layers.mask&5;const Fe=q.parent,ye=L.cameras;ie(L,Fe);for(let Ke=0;Ke<ye.length;Ke++)ie(ye[Ke],Fe);ye.length===2?ee(L,v,S):L.projectionMatrix.copy(v.projectionMatrix),Be(q,L,Fe)};function Be(q,Z,_e){_e===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ar*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(L)},this.getCameraTexture=function(q){return m[q]};let ke=null;function lt(q,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const _e=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Fe=!1;_e.length!==L.cameras.length&&(L.cameras.length=0,Fe=!0);for(let Xe=0;Xe<_e.length;Xe++){const Ze=_e[Xe];let ot=null;if(p!==null)ot=p.getViewport(Ze);else{const St=u.getViewSubImage(d,Ze);ot=St.viewport,Xe===0&&(e.setRenderTargetTextures(E,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(E))}let Ve=T[Xe];Ve===void 0&&(Ve=new Yt,Ve.layers.enable(Xe),Ve.viewport=new yt,T[Xe]=Ve),Ve.matrix.fromArray(Ze.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ze.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ot.x,ot.y,ot.width,ot.height),Xe===0&&(L.matrix.copy(Ve.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Fe===!0&&L.cameras.push(Ve)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Xe=u.getDepthInformation(_e[0]);Xe&&Xe.isValid&&Xe.texture&&f.init(Xe,i.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Xe=0;Xe<_e.length;Xe++){const Ze=_e[Xe].camera;if(Ze){let ot=m[Ze];ot||(ot=new Zu,m[Ze]=ot);const Ve=u.getCameraImage(Ze);ot.sourceTexture=Ve}}}}for(let _e=0;_e<C.length;_e++){const Fe=x[_e],ye=C[_e];Fe!==null&&ye!==void 0&&ye.update(Fe,Z,c||a)}ke&&ke(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const tt=new ld;tt.setAnimationLoop(lt),this.setAnimationLoop=function(q){ke=q},this.dispose=function(){}}}const vi=new pn,k_=new Oe;function z_(s,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Xu(s)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,y,w,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),u(f,m)):m.isMeshPhongMaterial?(r(f,m),h(f,m)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,E)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),_(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,y,w):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Kt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Kt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const y=e.get(m),w=y.envMap,E=y.envMapRotation;w&&(f.envMap.value=w,vi.copy(E),vi.x*=-1,vi.y*=-1,vi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),f.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(vi)),f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,y,w){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*y,f.scale.value=w*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,y){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Kt&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function _(f,m){const y=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function H_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const E=w.program;n.uniformBlockBinding(y,E)}function c(y,w){let E=i[y.id];E===void 0&&(g(y),E=h(y),i[y.id]=E,y.addEventListener("dispose",f));const C=w.program;n.updateUBOMapping(y,C);const x=e.render.frame;r[y.id]!==x&&(d(y),r[y.id]=x)}function h(y){const w=u();y.__bindingPointIndex=w;const E=s.createBuffer(),C=y.__size,x=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,E),E}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const w=i[y.id],E=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let x=0,b=E.length;x<b;x++){const I=Array.isArray(E[x])?E[x]:[E[x]];for(let v=0,S=I.length;v<S;v++){const T=I[v];if(p(T,x,v,C)===!0){const L=T.__offset,P=Array.isArray(T.value)?T.value:[T.value];let z=0;for(let U=0;U<P.length;U++){const H=P[U],O=_(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,L+z,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,z),z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,w,E,C){const x=y.value,b=w+"_"+E;if(C[b]===void 0)return typeof x=="number"||typeof x=="boolean"?C[b]=x:C[b]=x.clone(),!0;{const I=C[b];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return C[b]=x,!0}else if(I.equals(x)===!1)return I.copy(x),!0}return!1}function g(y){const w=y.uniforms;let E=0;const C=16;for(let b=0,I=w.length;b<I;b++){const v=Array.isArray(w[b])?w[b]:[w[b]];for(let S=0,T=v.length;S<T;S++){const L=v[S],P=Array.isArray(L.value)?L.value:[L.value];for(let z=0,U=P.length;z<U;z++){const H=P[z],O=_(H),$=E%C,Q=$%O.boundary,ee=$+Q;E+=Q,ee!==0&&C-ee<O.storage&&(E+=C-ee),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=O.storage}}}const x=E%C;return x>0&&(E+=C-x),y.__size=E,y.__cache={},this}function _(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ce("WebGLRenderer: Unsupported uniform value type.",y),w}function f(y){const w=y.target;w.removeEventListener("dispose",f);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}const V_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function G_(){return bn===null&&(bn=new hs(V_,16,16,ps,Xn),bn.name="DFG_LUT",bn.minFilter=Pt,bn.magFilter=Pt,bn.wrapS=Bt,bn.wrapT=Bt,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class Ql{constructor(e={}){const{canvas:t=bf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Wt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=p,f=new Set([Ol,Bl,Nl]),m=new Set([Wt,Dn,tr,nr,Ul,Fl]),y=new Uint32Array(4),w=new Int32Array(4);let E=null,C=null;const x=[],b=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=Rt;let T=0,L=0,P=null,z=-1,U=null;const H=new yt,O=new yt;let $=null;const Q=new Re(0);let ee=0,ie=t.width,Be=t.height,ke=1,lt=null,tt=null;const q=new yt(0,0,ie,Be),Z=new yt(0,0,ie,Be);let _e=!1;const Fe=new Xl;let ye=!1,Ke=!1;const Mt=new Oe,Xe=new N,Ze=new yt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function St(){return P===null?ke:1}let D=n;function pt(A,k){return t.getContext(A,k)}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ya}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",ct,!1),D===null){const k="webgl2";if(D=pt(k,A),D===null)throw pt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ue("WebGLRenderer: "+A.message),A}let nt,it,be,R,M,B,j,Y,X,we,se,Ee,Ne,te,ue,Se,Te,he,$e,F,ge,ne,xe,J;function K(){nt=new Gg(D),nt.init(),ne=new U_(D,nt),it=new Ug(D,nt,e,ne),be=new D_(D,nt),it.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),R=new $g(D),M=new __,B=new P_(D,nt,be,M,it,ne,R),j=new Ng(v),Y=new Vg(v),X=new Kp(D),xe=new Dg(D,X),we=new Wg(D,X,R,xe),se=new qg(D,we,X,R),$e=new jg(D,it,B),Se=new Fg(M),Ee=new g_(v,j,Y,nt,it,xe,Se),Ne=new z_(v,M),te=new v_,ue=new w_(nt),he=new Lg(v,j,Y,be,se,g,l),Te=new I_(v,se,it),J=new H_(D,R,it,be),F=new Pg(D,nt,R),ge=new Xg(D,nt,R),R.programs=Ee.programs,v.capabilities=it,v.extensions=nt,v.properties=M,v.renderLists=te,v.shadowMap=Te,v.state=be,v.info=R}K(),_!==Wt&&(I=new Kg(_,t.width,t.height,i,r));const ce=new O_(v,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(A){A!==void 0&&(ke=A,this.setSize(ie,Be,!1))},this.getSize=function(A){return A.set(ie,Be)},this.setSize=function(A,k,W=!0){if(ce.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,Be=k,t.width=Math.floor(A*ke),t.height=Math.floor(k*ke),W===!0&&(t.style.width=A+"px",t.style.height=k+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(ie*ke,Be*ke).floor()},this.setDrawingBufferSize=function(A,k,W){ie=A,Be=k,ke=W,t.width=Math.floor(A*W),t.height=Math.floor(k*W),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(_===Wt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(q)},this.setViewport=function(A,k,W,G){A.isVector4?q.set(A.x,A.y,A.z,A.w):q.set(A,k,W,G),be.viewport(H.copy(q).multiplyScalar(ke).round())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,k,W,G){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,k,W,G),be.scissor(O.copy(Z).multiplyScalar(ke).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(A){be.setScissorTest(_e=A)},this.setOpaqueSort=function(A){lt=A},this.setTransparentSort=function(A){tt=A},this.getClearColor=function(A){return A.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,W=!0){let G=0;if(A){let V=!1;if(P!==null){const de=P.texture.format;V=f.has(de)}if(V){const de=P.texture.type,ve=m.has(de),me=he.getClearColor(),Me=he.getClearAlpha(),Ae=me.r,Pe=me.g,Ie=me.b;ve?(y[0]=Ae,y[1]=Pe,y[2]=Ie,y[3]=Me,D.clearBufferuiv(D.COLOR,0,y)):(w[0]=Ae,w[1]=Pe,w[2]=Ie,w[3]=Me,D.clearBufferiv(D.COLOR,0,w))}else G|=D.COLOR_BUFFER_BIT}k&&(G|=D.DEPTH_BUFFER_BIT),W&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),he.dispose(),te.dispose(),ue.dispose(),M.dispose(),j.dispose(),Y.dispose(),se.dispose(),xe.dispose(),J.dispose(),Ee.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",fc),ce.removeEventListener("sessionend",pc),di.stop()};function ze(A){A.preventDefault(),Ac("WebGLRenderer: Context Lost."),S=!0}function _t(){Ac("WebGLRenderer: Context Restored."),S=!1;const A=R.autoReset,k=Te.enabled,W=Te.autoUpdate,G=Te.needsUpdate,V=Te.type;K(),R.autoReset=A,Te.enabled=k,Te.autoUpdate=W,Te.needsUpdate=G,Te.type=V}function ct(A){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Sn(A){const k=A.target;k.removeEventListener("dispose",Sn),Pn(k)}function Pn(A){Id(A),M.remove(A)}function Id(A){const k=M.get(A).programs;k!==void 0&&(k.forEach(function(W){Ee.releaseProgram(W)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,W,G,V,de){k===null&&(k=ot);const ve=V.isMesh&&V.matrixWorld.determinant()<0,me=Dd(A,k,W,G,V);be.setMaterial(G,ve);let Me=W.index,Ae=1;if(G.wireframe===!0){if(Me=we.getWireframeAttribute(W),Me===void 0)return;Ae=2}const Pe=W.drawRange,Ie=W.attributes.position;let je=Pe.start*Ae,dt=(Pe.start+Pe.count)*Ae;de!==null&&(je=Math.max(je,de.start*Ae),dt=Math.min(dt,(de.start+de.count)*Ae)),Me!==null?(je=Math.max(je,0),dt=Math.min(dt,Me.count)):Ie!=null&&(je=Math.max(je,0),dt=Math.min(dt,Ie.count));const Et=dt-je;if(Et<0||Et===1/0)return;xe.setup(V,G,me,W,Me);let wt,mt=F;if(Me!==null&&(wt=X.get(Me),mt=ge,mt.setIndex(wt)),V.isMesh)G.wireframe===!0?(be.setLineWidth(G.wireframeLinewidth*St()),mt.setMode(D.LINES)):mt.setMode(D.TRIANGLES);else if(V.isLine){let Le=G.linewidth;Le===void 0&&(Le=1),be.setLineWidth(Le*St()),V.isLineSegments?mt.setMode(D.LINES):V.isLineLoop?mt.setMode(D.LINE_LOOP):mt.setMode(D.LINE_STRIP)}else V.isPoints?mt.setMode(D.POINTS):V.isSprite&&mt.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)rr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Le=V._multiDrawStarts,ht=V._multiDrawCounts,st=V._multiDrawCount,nn=Me?X.get(Me).bytesPerElement:1,Ri=M.get(G).currentProgram.getUniforms();for(let sn=0;sn<st;sn++)Ri.setValue(D,"_gl_DrawID",sn),mt.render(Le[sn]/nn,ht[sn])}else if(V.isInstancedMesh)mt.renderInstances(je,Et,V.count);else if(W.isInstancedBufferGeometry){const Le=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ht=Math.min(W.instanceCount,Le);mt.renderInstances(je,Et,ht)}else mt.render(je,Et)};function dc(A,k,W){A.transparent===!0&&A.side===dn&&A.forceSinglePass===!1?(A.side=Kt,A.needsUpdate=!0,gr(A,k,W),A.side=Wn,A.needsUpdate=!0,gr(A,k,W),A.side=dn):gr(A,k,W)}this.compile=function(A,k,W=null){W===null&&(W=A),C=ue.get(W),C.init(k),b.push(C),W.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(C.pushLight(V),V.castShadow&&C.pushShadow(V))}),A!==W&&A.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(C.pushLight(V),V.castShadow&&C.pushShadow(V))}),C.setupLights();const G=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const de=V.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){const me=de[ve];dc(me,W,V),G.add(me)}else dc(de,W,V),G.add(de)}),C=b.pop(),G},this.compileAsync=function(A,k,W=null){const G=this.compile(A,k,W);return new Promise(V=>{function de(){if(G.forEach(function(ve){M.get(ve).currentProgram.isReady()&&G.delete(ve)}),G.size===0){V(A);return}setTimeout(de,10)}nt.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Fa=null;function Ld(A){Fa&&Fa(A)}function fc(){di.stop()}function pc(){di.start()}const di=new ld;di.setAnimationLoop(Ld),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(A){Fa=A,ce.setAnimationLoop(A),A===null?di.stop():di.start()},ce.addEventListener("sessionstart",fc),ce.addEventListener("sessionend",pc),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const W=ce.enabled===!0&&ce.isPresenting===!0,G=I!==null&&(P===null||W)&&I.begin(v,P);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,k,P),C=ue.get(A,b.length),C.init(k),b.push(C),Mt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Fe.setFromProjectionMatrix(Mt,An,k.reversedDepth),Ke=this.localClippingEnabled,ye=Se.init(this.clippingPlanes,Ke),E=te.get(A,x.length),E.init(),x.push(E),ce.enabled===!0&&ce.isPresenting===!0){const ve=v.xr.getDepthSensingMesh();ve!==null&&Na(ve,k,-1/0,v.sortObjects)}Na(A,k,0,v.sortObjects),E.finish(),v.sortObjects===!0&&E.sort(lt,tt),Ve=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ve&&he.addToRenderList(E,A),this.info.render.frame++,ye===!0&&Se.beginShadows();const V=C.state.shadowsArray;if(Te.render(V,A,k),ye===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&I.hasRenderPass())===!1){const ve=E.opaque,me=E.transmissive;if(C.setupLights(),k.isArrayCamera){const Me=k.cameras;if(me.length>0)for(let Ae=0,Pe=Me.length;Ae<Pe;Ae++){const Ie=Me[Ae];gc(ve,me,A,Ie)}Ve&&he.render(A);for(let Ae=0,Pe=Me.length;Ae<Pe;Ae++){const Ie=Me[Ae];mc(E,A,Ie,Ie.viewport)}}else me.length>0&&gc(ve,me,A,k),Ve&&he.render(A),mc(E,A,k)}P!==null&&L===0&&(B.updateMultisampleRenderTarget(P),B.updateRenderTargetMipmap(P)),G&&I.end(v),A.isScene===!0&&A.onAfterRender(v,A,k),xe.resetDefaultState(),z=-1,U=null,b.pop(),b.length>0?(C=b[b.length-1],ye===!0&&Se.setGlobalState(v.clippingPlanes,C.state.camera)):C=null,x.pop(),x.length>0?E=x[x.length-1]:E=null};function Na(A,k,W,G){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)C.pushLight(A),A.castShadow&&C.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Fe.intersectsSprite(A)){G&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);const ve=se.update(A),me=A.material;me.visible&&E.push(A,ve,me,W,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Fe.intersectsObject(A))){const ve=se.update(A),me=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ze.copy(ve.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(me)){const Me=ve.groups;for(let Ae=0,Pe=Me.length;Ae<Pe;Ae++){const Ie=Me[Ae],je=me[Ie.materialIndex];je&&je.visible&&E.push(A,ve,je,W,Ze.z,Ie)}}else me.visible&&E.push(A,ve,me,W,Ze.z,null)}}const de=A.children;for(let ve=0,me=de.length;ve<me;ve++)Na(de[ve],k,W,G)}function mc(A,k,W,G){const{opaque:V,transmissive:de,transparent:ve}=A;C.setupLightsView(W),ye===!0&&Se.setGlobalState(v.clippingPlanes,W),G&&be.viewport(H.copy(G)),V.length>0&&mr(V,k,W),de.length>0&&mr(de,k,W),ve.length>0&&mr(ve,k,W),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function gc(A,k,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[G.id]===void 0){const je=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[G.id]=new In(1,1,{generateMipmaps:!0,type:je?Xn:Wt,minFilter:ai,samples:it.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const de=C.state.transmissionRenderTarget[G.id],ve=G.viewport||H;de.setSize(ve.z*v.transmissionResolutionScale,ve.w*v.transmissionResolutionScale);const me=v.getRenderTarget(),Me=v.getActiveCubeFace(),Ae=v.getActiveMipmapLevel();v.setRenderTarget(de),v.getClearColor(Q),ee=v.getClearAlpha(),ee<1&&v.setClearColor(16777215,.5),v.clear(),Ve&&he.render(W);const Pe=v.toneMapping;v.toneMapping=Rn;const Ie=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),C.setupLightsView(G),ye===!0&&Se.setGlobalState(v.clippingPlanes,G),mr(A,W,G),B.updateMultisampleRenderTarget(de),B.updateRenderTargetMipmap(de),nt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let dt=0,Et=k.length;dt<Et;dt++){const wt=k[dt],{object:mt,geometry:Le,material:ht,group:st}=wt;if(ht.side===dn&&mt.layers.test(G.layers)){const nn=ht.side;ht.side=Kt,ht.needsUpdate=!0,_c(mt,W,G,Le,ht,st),ht.side=nn,ht.needsUpdate=!0,je=!0}}je===!0&&(B.updateMultisampleRenderTarget(de),B.updateRenderTargetMipmap(de))}v.setRenderTarget(me,Me,Ae),v.setClearColor(Q,ee),Ie!==void 0&&(G.viewport=Ie),v.toneMapping=Pe}function mr(A,k,W){const G=k.isScene===!0?k.overrideMaterial:null;for(let V=0,de=A.length;V<de;V++){const ve=A[V],{object:me,geometry:Me,group:Ae}=ve;let Pe=ve.material;Pe.allowOverride===!0&&G!==null&&(Pe=G),me.layers.test(W.layers)&&_c(me,k,W,Me,Pe,Ae)}}function _c(A,k,W,G,V,de){A.onBeforeRender(v,k,W,G,V,de),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(v,k,W,G,A,de),V.transparent===!0&&V.side===dn&&V.forceSinglePass===!1?(V.side=Kt,V.needsUpdate=!0,v.renderBufferDirect(W,k,G,V,A,de),V.side=Wn,V.needsUpdate=!0,v.renderBufferDirect(W,k,G,V,A,de),V.side=dn):v.renderBufferDirect(W,k,G,V,A,de),A.onAfterRender(v,k,W,G,V,de)}function gr(A,k,W){k.isScene!==!0&&(k=ot);const G=M.get(A),V=C.state.lights,de=C.state.shadowsArray,ve=V.state.version,me=Ee.getParameters(A,V.state,de,k,W),Me=Ee.getProgramCacheKey(me);let Ae=G.programs;G.environment=A.isMeshStandardMaterial?k.environment:null,G.fog=k.fog,G.envMap=(A.isMeshStandardMaterial?Y:j).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ae===void 0&&(A.addEventListener("dispose",Sn),Ae=new Map,G.programs=Ae);let Pe=Ae.get(Me);if(Pe!==void 0){if(G.currentProgram===Pe&&G.lightsStateVersion===ve)return vc(A,me),Pe}else me.uniforms=Ee.getUniforms(A),A.onBeforeCompile(me,v),Pe=Ee.acquireProgram(me,Me),Ae.set(Me,Pe),G.uniforms=me.uniforms;const Ie=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=Se.uniform),vc(A,me),G.needsLights=Ud(A),G.lightsStateVersion=ve,G.needsLights&&(Ie.ambientLightColor.value=V.state.ambient,Ie.lightProbe.value=V.state.probe,Ie.directionalLights.value=V.state.directional,Ie.directionalLightShadows.value=V.state.directionalShadow,Ie.spotLights.value=V.state.spot,Ie.spotLightShadows.value=V.state.spotShadow,Ie.rectAreaLights.value=V.state.rectArea,Ie.ltc_1.value=V.state.rectAreaLTC1,Ie.ltc_2.value=V.state.rectAreaLTC2,Ie.pointLights.value=V.state.point,Ie.pointLightShadows.value=V.state.pointShadow,Ie.hemisphereLights.value=V.state.hemi,Ie.directionalShadowMap.value=V.state.directionalShadowMap,Ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ie.spotShadowMap.value=V.state.spotShadowMap,Ie.spotLightMatrix.value=V.state.spotLightMatrix,Ie.spotLightMap.value=V.state.spotLightMap,Ie.pointShadowMap.value=V.state.pointShadowMap,Ie.pointShadowMatrix.value=V.state.pointShadowMatrix),G.currentProgram=Pe,G.uniformsList=null,Pe}function xc(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=ta.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function vc(A,k){const W=M.get(A);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Dd(A,k,W,G,V){k.isScene!==!0&&(k=ot),B.resetTextureUnits();const de=k.fog,ve=G.isMeshStandardMaterial?k.environment:null,me=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ms,Me=(G.isMeshStandardMaterial?Y:j).get(G.envMap||ve),Ae=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pe=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,dt=!!W.morphAttributes.color;let Et=Rn;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Et=v.toneMapping);const wt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,mt=wt!==void 0?wt.length:0,Le=M.get(G),ht=C.state.lights;if(ye===!0&&(Ke===!0||A!==U)){const $t=A===U&&G.id===z;Se.setState(G,A,$t)}let st=!1;G.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==ht.state.version||Le.outputColorSpace!==me||V.isBatchedMesh&&Le.batching===!1||!V.isBatchedMesh&&Le.batching===!0||V.isBatchedMesh&&Le.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Le.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Le.instancing===!1||!V.isInstancedMesh&&Le.instancing===!0||V.isSkinnedMesh&&Le.skinning===!1||!V.isSkinnedMesh&&Le.skinning===!0||V.isInstancedMesh&&Le.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Le.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Le.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Le.instancingMorph===!1&&V.morphTexture!==null||Le.envMap!==Me||G.fog===!0&&Le.fog!==de||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Se.numPlanes||Le.numIntersection!==Se.numIntersection)||Le.vertexAlphas!==Ae||Le.vertexTangents!==Pe||Le.morphTargets!==Ie||Le.morphNormals!==je||Le.morphColors!==dt||Le.toneMapping!==Et||Le.morphTargetsCount!==mt)&&(st=!0):(st=!0,Le.__version=G.version);let nn=Le.currentProgram;st===!0&&(nn=gr(G,k,V));let Ri=!1,sn=!1,bs=!1;const xt=nn.getUniforms(),Jt=Le.uniforms;if(be.useProgram(nn.program)&&(Ri=!0,sn=!0,bs=!0),G.id!==z&&(z=G.id,sn=!0),Ri||U!==A){be.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),xt.setValue(D,"projectionMatrix",A.projectionMatrix),xt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Qt=xt.map.cameraPosition;Qt!==void 0&&Qt.setValue(D,Xe.setFromMatrixPosition(A.matrixWorld)),it.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,sn=!0,bs=!0)}if(Le.needsLights&&(ht.state.directionalShadowMap.length>0&&xt.setValue(D,"directionalShadowMap",ht.state.directionalShadowMap,B),ht.state.spotShadowMap.length>0&&xt.setValue(D,"spotShadowMap",ht.state.spotShadowMap,B),ht.state.pointShadowMap.length>0&&xt.setValue(D,"pointShadowMap",ht.state.pointShadowMap,B)),V.isSkinnedMesh){xt.setOptional(D,V,"bindMatrix"),xt.setOptional(D,V,"bindMatrixInverse");const $t=V.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),xt.setValue(D,"boneTexture",$t.boneTexture,B))}V.isBatchedMesh&&(xt.setOptional(D,V,"batchingTexture"),xt.setValue(D,"batchingTexture",V._matricesTexture,B),xt.setOptional(D,V,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",V._indirectTexture,B),xt.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",V._colorsTexture,B));const hn=W.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&$e.update(V,W,nn),(sn||Le.receiveShadow!==V.receiveShadow)&&(Le.receiveShadow=V.receiveShadow,xt.setValue(D,"receiveShadow",V.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Jt.envMap.value=Me,Jt.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&k.environment!==null&&(Jt.envMapIntensity.value=k.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=G_()),sn&&(xt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Le.needsLights&&Pd(Jt,bs),de&&G.fog===!0&&Ne.refreshFogUniforms(Jt,de),Ne.refreshMaterialUniforms(Jt,G,ke,Be,C.state.transmissionRenderTarget[A.id]),ta.upload(D,xc(Le),Jt,B)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ta.upload(D,xc(Le),Jt,B),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xt.setValue(D,"center",V.center),xt.setValue(D,"modelViewMatrix",V.modelViewMatrix),xt.setValue(D,"normalMatrix",V.normalMatrix),xt.setValue(D,"modelMatrix",V.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const $t=G.uniformsGroups;for(let Qt=0,Ba=$t.length;Qt<Ba;Qt++){const fi=$t[Qt];J.update(fi,nn),J.bind(fi,nn)}}return nn}function Pd(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Ud(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,k,W){const G=M.get(A);G.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=k,M.get(A.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const W=M.get(A);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const Fd=D.createFramebuffer();this.setRenderTarget=function(A,k=0,W=0){P=A,T=k,L=W;let G=null,V=!1,de=!1;if(A){const me=M.get(A);if(me.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(D.FRAMEBUFFER,me.__webglFramebuffer),H.copy(A.viewport),O.copy(A.scissor),$=A.scissorTest,be.viewport(H),be.scissor(O),be.setScissorTest($),z=-1;return}else if(me.__webglFramebuffer===void 0)B.setupRenderTarget(A);else if(me.__hasExternalTextures)B.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Pe=A.depthTexture;if(me.__boundDepthTexture!==Pe){if(Pe!==null&&M.has(Pe)&&(A.width!==Pe.image.width||A.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(A)}}const Me=A.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(de=!0);const Ae=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ae[k])?G=Ae[k][W]:G=Ae[k],V=!0):A.samples>0&&B.useMultisampledRTT(A)===!1?G=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Ae)?G=Ae[W]:G=Ae,H.copy(A.viewport),O.copy(A.scissor),$=A.scissorTest}else H.copy(q).multiplyScalar(ke).floor(),O.copy(Z).multiplyScalar(ke).floor(),$=_e;if(W!==0&&(G=Fd),be.bindFramebuffer(D.FRAMEBUFFER,G)&&be.drawBuffers(A,G),be.viewport(H),be.scissor(O),be.setScissorTest($),V){const me=M.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,me.__webglTexture,W)}else if(de){const me=k;for(let Me=0;Me<A.textures.length;Me++){const Ae=M.get(A.textures[Me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Me,Ae.__webglTexture,W,me)}}else if(A!==null&&W!==0){const me=M.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,W)}z=-1},this.readRenderTargetPixels=function(A,k,W,G,V,de,ve,me=0){if(!(A&&A.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){be.bindFramebuffer(D.FRAMEBUFFER,Me);try{const Ae=A.textures[me],Pe=Ae.format,Ie=Ae.type;if(!it.textureFormatReadable(Pe)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ie)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-G&&W>=0&&W<=A.height-V&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),D.readPixels(k,W,G,V,ne.convert(Pe),ne.convert(Ie),de))}finally{const Ae=P!==null?M.get(P).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(A,k,W,G,V,de,ve,me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(k>=0&&k<=A.width-G&&W>=0&&W<=A.height-V){be.bindFramebuffer(D.FRAMEBUFFER,Me);const Ae=A.textures[me],Pe=Ae.format,Ie=Ae.type;if(!it.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),D.readPixels(k,W,G,V,ne.convert(Pe),ne.convert(Ie),0);const dt=P!==null?M.get(P).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,dt);const Et=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ef(D,Et,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(je),D.deleteSync(Et),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,W=0){const G=Math.pow(2,-W),V=Math.floor(A.image.width*G),de=Math.floor(A.image.height*G),ve=k!==null?k.x:0,me=k!==null?k.y:0;B.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ve,me,V,de),be.unbindTexture()};const Nd=D.createFramebuffer(),Bd=D.createFramebuffer();this.copyTextureToTexture=function(A,k,W=null,G=null,V=0,de=null){de===null&&(V!==0?(rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=V,V=0):de=0);let ve,me,Me,Ae,Pe,Ie,je,dt,Et;const wt=A.isCompressedTexture?A.mipmaps[de]:A.image;if(W!==null)ve=W.max.x-W.min.x,me=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Pe=W.min.y,Ie=W.isBox3?W.min.z:0;else{const hn=Math.pow(2,-V);ve=Math.floor(wt.width*hn),me=Math.floor(wt.height*hn),A.isDataArrayTexture?Me=wt.depth:A.isData3DTexture?Me=Math.floor(wt.depth*hn):Me=1,Ae=0,Pe=0,Ie=0}G!==null?(je=G.x,dt=G.y,Et=G.z):(je=0,dt=0,Et=0);const mt=ne.convert(k.format),Le=ne.convert(k.type);let ht;k.isData3DTexture?(B.setTexture3D(k,0),ht=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(B.setTexture2DArray(k,0),ht=D.TEXTURE_2D_ARRAY):(B.setTexture2D(k,0),ht=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const st=D.getParameter(D.UNPACK_ROW_LENGTH),nn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ri=D.getParameter(D.UNPACK_SKIP_PIXELS),sn=D.getParameter(D.UNPACK_SKIP_ROWS),bs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ie);const xt=A.isDataArrayTexture||A.isData3DTexture,Jt=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const hn=M.get(A),$t=M.get(k),Qt=M.get(hn.__renderTarget),Ba=M.get($t.__renderTarget);be.bindFramebuffer(D.READ_FRAMEBUFFER,Qt.__webglFramebuffer),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ba.__webglFramebuffer);for(let fi=0;fi<Me;fi++)xt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(A).__webglTexture,V,Ie+fi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(k).__webglTexture,de,Et+fi)),D.blitFramebuffer(Ae,Pe,ve,me,je,dt,ve,me,D.DEPTH_BUFFER_BIT,D.NEAREST);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||M.has(A)){const hn=M.get(A),$t=M.get(k);be.bindFramebuffer(D.READ_FRAMEBUFFER,Nd),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,Bd);for(let Qt=0;Qt<Me;Qt++)xt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,hn.__webglTexture,V,Ie+Qt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,hn.__webglTexture,V),Jt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$t.__webglTexture,de,Et+Qt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$t.__webglTexture,de),V!==0?D.blitFramebuffer(Ae,Pe,ve,me,je,dt,ve,me,D.COLOR_BUFFER_BIT,D.NEAREST):Jt?D.copyTexSubImage3D(ht,de,je,dt,Et+Qt,Ae,Pe,ve,me):D.copyTexSubImage2D(ht,de,je,dt,Ae,Pe,ve,me);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Jt?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(ht,de,je,dt,Et,ve,me,Me,mt,Le,wt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(ht,de,je,dt,Et,ve,me,Me,mt,wt.data):D.texSubImage3D(ht,de,je,dt,Et,ve,me,Me,mt,Le,wt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,je,dt,ve,me,mt,Le,wt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,je,dt,wt.width,wt.height,mt,wt.data):D.texSubImage2D(D.TEXTURE_2D,de,je,dt,ve,me,mt,Le,wt);D.pixelStorei(D.UNPACK_ROW_LENGTH,st),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ri),D.pixelStorei(D.UNPACK_SKIP_ROWS,sn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,bs),de===0&&k.generateMipmaps&&D.generateMipmap(ht),be.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&B.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?B.setTextureCube(A,0):A.isData3DTexture?B.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?B.setTexture2DArray(A,0):B.setTexture2D(A,0),be.unbindTexture()},this.resetState=function(){T=0,L=0,P=null,be.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const Dh={type:"change"},ec={type:"start"},fd={type:"end"},Gr=new wa,Ph=new ni,W_=Math.cos(70*Ti.DEG2RAD),Dt=new N,en=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mo=1e-6;class tc extends qp{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Zt,this._lastTargetPosition=new N,this._quat=new Zt().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lh,this._sphericalDelta=new lh,this._scale=1,this._panOffset=new N,this._rotateStart=new He,this._rotateEnd=new He,this._rotateDelta=new He,this._panStart=new He,this._panEnd=new He,this._panDelta=new He,this._dollyStart=new He,this._dollyEnd=new He,this._dollyDelta=new He,this._dollyDirection=new N,this._mouse=new He,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$_.bind(this),this._onPointerDown=X_.bind(this),this._onPointerUp=j_.bind(this),this._onContextMenu=ex.bind(this),this._onMouseWheel=K_.bind(this),this._onKeyDown=Z_.bind(this),this._onTouchStart=J_.bind(this),this._onTouchMove=Q_.bind(this),this._onMouseDown=q_.bind(this),this._onMouseMove=Y_.bind(this),this._interceptControlDown=tx.bind(this),this._interceptControlUp=nx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dh),this.update(),this.state=ft.NONE}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=en:n>Math.PI&&(n-=en),i<-Math.PI?i+=en:i>Math.PI&&(i-=en),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Dt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Gr.origin.copy(this.object.position),Gr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gr.direction))<W_?this.object.lookAt(this.target):(Ph.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gr.intersectPlane(Ph,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Mo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mo||this._lastTargetPosition.distanceToSquared(this.target)>Mo?(this.dispatchEvent(Dh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Dt.copy(i).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new He,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function X_(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function $_(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function j_(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fd),this.state=ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function q_(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ft.DOLLY;break;case os.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ft.ROTATE}break;case os.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(ec)}function Y_(s){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function K_(s){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(s.preventDefault(),this.dispatchEvent(ec),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(fd))}function Z_(s){this.enabled!==!1&&this._handleKeyDown(s)}function J_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ft.TOUCH_ROTATE;break;case ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ft.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(ec)}function Q_(s){switch(this._trackPointer(s),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ft.NONE}}function ex(s){this.enabled!==!1&&s.preventDefault()}function tx(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nx(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class pd extends _s{constructor(){super(),this.name="RoomEnvironment";const e=new xs;e.deleteAttribute("uv");const t=new sh({side:Kt}),n=new sh,i=new Pp(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new It(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Ku(e,n,6),o=new Lt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new It(e,$i(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new It(e,$i(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new It(e,$i(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new It(e,$i(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new It(e,$i(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const p=new It(e,$i(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function $i(s){return new yp({color:0,emissive:16777215,emissiveIntensity:s})}const Ps=new N,Us=new N,Uh=new Ge;class ix extends vs{constructor(e,t=1,n=16711680){const i=new Ot,r=e.geometry.attributes.normal.count,a=new Tt(r*2*3,3);i.setAttribute("position",a),super(i,new Ci({color:n,toneMapped:!1})),this.object=e,this.size=t,this.type="VertexNormalsHelper",this.matrixAutoUpdate=!1,this.isVertexNormalsHelper=!0,this.update()}update(){this.object.updateMatrixWorld(!0),Uh.getNormalMatrix(this.object.matrixWorld);const e=this.object.matrixWorld,t=this.geometry.attributes.position,n=this.object.geometry;if(n){const i=n.attributes.position,r=n.attributes.normal;let a=0;for(let o=0,l=i.count;o<l;o++)Ps.fromBufferAttribute(i,o).applyMatrix4(e),Us.fromBufferAttribute(r,o),Us.applyMatrix3(Uh).normalize().multiplyScalar(this.size).add(Ps),t.setXYZ(a,Ps.x,Ps.y,Ps.z),a=a+1,t.setXYZ(a,Us.x,Us.y,Us.z),a=a+1}t.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function sx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var So={},kn={},Fh;function nc(){if(Fh)return kn;Fh=1,Object.defineProperty(kn,"__esModule",{value:!0}),kn.handleWarning=kn.DecodeWarning=kn.DecodeError=void 0;class s extends Error{constructor(i,r,a){super(r),this.offset=a,this.partiallyDecodedImage={details:{header:i.header,footer:i.footer,imageId:i.identificationField,developerDirectory:i.developerDirectory,extensionArea:i.extensionArea},warnings:i.warnings}}}kn.DecodeError=s;class e extends Error{constructor(i,r){super(i),this.offset=r}}kn.DecodeWarning=e;function t(n,i){if(n.options.strictMode)throw i;n.warnings.push(i)}return kn.handleWarning=t,kn}var Fs={},Ns={},Nh;function rx(){if(Nh)return Ns;Nh=1,Object.defineProperty(Ns,"__esModule",{value:!0}),Ns.ByteStreamReader=void 0;class s{constructor(t,n){this.data=t,this._le=n,this.offset=0,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength)}readUint8(){return this.view.getUint8(this.offset++)}readUint16(){const t=this.view.getUint16(this.offset,this._le);return this.offset+=2,t}readUint32(){const t=this.view.getUint32(this.offset,this._le);return this.offset+=4,t}}return Ns.ByteStreamReader=s,Ns}var Bs={},Bh;function ax(){if(Bh)return Bs;Bh=1,Object.defineProperty(Bs,"__esModule",{value:!0}),Bs.readText=void 0;const s=nc();function e(t,n,i,r){const a=[];let o=0,l=0;const c=t.reader.offset;for(;l<i;l++){try{o=t.reader.view.getUint8(t.reader.offset)}catch(h){throw h instanceof Error&&h.message==="Offset is outside the bounds of the DataView"&&(0,s.handleWarning)(t,new s.DecodeWarning("EOF while reading text",t.reader.offset)),h}if(!r&&o===0)break;t.reader.offset++,a.push(o)}return t.reader.offset=c+i,n?n.decode(new Uint8Array(a)):String.fromCharCode(...a)}return Bs.readText=e,Bs}var zn={},Oh;function ox(){if(Oh)return zn;Oh=1,Object.defineProperty(zn,"__esModule",{value:!0}),zn.isValidBitDepth=zn.isValidColorMapDepth=zn.isValidImageType=void 0;function s(n){return n===1||n===2||n===3||n===9||n===10||n===11}zn.isValidImageType=s;function e(n){return n===15||n===16||n===24||n===32}zn.isValidColorMapDepth=e;function t(n,i){return i===1||i===9?n===8:i===3||i===11?n===8||n===16:n===15||n===16||n===24||n===32}return zn.isValidBitDepth=t,zn}var kh;function lx(){if(kh)return Fs;kh=1,Object.defineProperty(Fs,"__esModule",{value:!0}),Fs.decodeTga=void 0;const s=nc(),e=rx(),t=ax(),n=ox();async function i(x,b={}){const I={reader:new e.ByteStreamReader(x,!0),hasAlpha:!1,ambiguousAlpha:!1,options:b,warnings:[]},v=r(I),S={...I,header:v};S.identificationField=(0,t.readText)(S,void 0,S.header.idLength);const T=S.reader.offset;return S.footer=C(S),S.extensionArea=m(S),S.developerDirectory=y(S),S.reader.offset=T,S.header.colorMap?.type===1&&(S.colorMap=a(S,S.header.colorMap)),S.hasAlpha=S.colorMap&&S.header.colorMap?.depth===32||(S.header.attributeBitsPerPixel>0||S.header.bitDepth===32)&&(S.extensionArea===void 0||S.extensionArea.attributesType>2),S.ambiguousAlpha=S.hasAlpha&&S.header.attributeBitsPerPixel===0,S.image=o(S,S.reader.offset),{image:S.image,details:{header:S.header,imageId:S.identificationField,footer:S.footer,extensionArea:S.extensionArea,developerDirectory:S.developerDirectory},warnings:S.warnings}}Fs.decodeTga=i;function r(x){const b=x.reader.readUint8(),I=x.reader.readUint8();let v;I===0||I===1?v=I:((0,s.handleWarning)(x,new s.DecodeWarning("Color map type unrecognized",x.reader.offset-1)),v=2);const S=x.reader.readUint8();if(!(0,n.isValidImageType)(S))throw new s.DecodeError(x,`Invalid image type "${S}"`,x.reader.offset-1);v===1&&S!==1&&S!==9&&(0,s.handleWarning)(x,new s.DecodeWarning(`Image type "${S}" cannot have a color map`,x.reader.offset-2));const T=x.reader.readUint16(),L=x.reader.readUint16(),P=x.reader.readUint8();if(v===1&&(T>=L&&(0,s.handleWarning)(x,new s.DecodeWarning(`Color map origin "${T}" is greater than color map length "${L}"`,x.reader.offset-5)),!(0,n.isValidColorMapDepth)(P)))throw new s.DecodeError(x,`Unsupported color map bit depth "${P}"`,x.reader.offset-1);const z=x.reader.readUint16(),U=x.reader.readUint16(),H=x.reader.readUint16(),O=x.reader.readUint16(),$=x.reader.readUint8();if(!(0,n.isValidBitDepth)($,S))throw new s.DecodeError(x,`Unsupported TGA bit depth "${$}" with image type ${S}`,16);const Q=x.reader.readUint8(),ee=(Q&15)>>0,ie=(Q&48)>>4;return ie===1&&(0,s.handleWarning)(x,new s.DecodeWarning("This image is encoded using a bottom right screen origin, many image editors won't read this correctly",x.reader.offset-1)),ie===3&&(0,s.handleWarning)(x,new s.DecodeWarning("This image is encoded using a top right screen origin, many image editors won't read this correctly",x.reader.offset-1)),{idLength:b,colorMap:v!==0?{type:v,depth:P,length:L,origin:T}:void 0,imageType:S,origin:{x:z,y:U},width:H,height:O,bitDepth:$,imageDescriptor:Q,attributeBitsPerPixel:ee,screenOrigin:ie}}function a(x,b){const I=x.reader.offset,v=Math.ceil(b.depth/8);x.reader.offset+=b.length*v;let S;switch(b.depth){case 15:S=d;break;case 16:x.hasAlpha?S=p:S=d;break;case 24:S=g;break;case 32:S=_;break}return(T,L,P,z)=>{const U=P.getUint8(z);return S(T,L,x.reader.view,I+U*v),1}}function o(x,b){const I={width:x.header.width,height:x.header.height,data:new Uint8Array(x.header.width*x.header.height*4)};let v;if(x.colorMap)v=x.colorMap;else switch(x.header.bitDepth){case 8:v=c;break;case 15:v=d;break;case 16:x.header.imageType===11||x.header.imageType===3?v=h:x.hasAlpha?v=p:v=d;break;case 24:v=g;break;case 32:x.hasAlpha?v=_:v=f;break}let S=x.reader.view;if(x.header.imageType&8){const T=l(x);S=new DataView(T.buffer,T.byteOffset,T.length),b=0}switch(x.header.screenOrigin){case 0:{let T=0;for(let L=I.height-1;L>=0;L--){T=x.header.width*L*4;for(let P=0;P<I.width;P++)b+=v(I.data,T,S,b),T+=4}break}case 1:{let T=0;for(let L=I.height-1;L>=0;L--){T=(x.header.width*L+(x.header.width-1))*4;for(let P=0;P<I.width;P++)b+=v(I.data,T,S,b),T-=4}break}case 2:{let T=0;for(let L=0;L<I.height;L++)for(let P=0;P<I.width;P++)b+=v(I.data,T,S,b),T+=4;break}case 3:{let T=0;for(let L=0;L<I.height;L++){T=(x.header.width*L+(x.header.width-1))*4;for(let P=0;P<I.width;P++)b+=v(I.data,T,S,b),T-=4}break}}if(x.ambiguousAlpha&&!x.options.strictMode&&x.options.detectAmbiguousAlphaChannel){let T=!1;for(let L=3;L<I.width*I.height*4;L+=4)I.data[L]>0&&(T=!0);if(!T){(0,s.handleWarning)(x,new s.DecodeWarning("Image has ambiguous alpha and is fully transparent, alpha has been disabled",-1));for(let L=3;L<I.width*I.height*4;L+=4)I.data[L]=255}}return I}function l(x){const b=Math.ceil(x.header.bitDepth/8),I=new Uint8Array(x.header.width*x.header.height*b);let v=0,S=0,T=0,L=0,P=0;for(;T<I.length;)if(v=x.reader.readUint8(),S=(v&127)+1,v&128){for(L=0;L<b;L++)for(v=x.reader.readUint8(),P=0;P<S;P++)I[T+P*b+L]=v;T+=S*b}else{S*=b;for(let z=0;z<S;z++)I[T++]=x.reader.readUint8()}return I}function c(x,b,I,v){return x[b]=I.getUint8(v),x[b+1]=x[b],x[b+2]=x[b],x[b+3]=255,1}function h(x,b,I,v){return x[b]=I.getUint8(v),x[b+1]=x[b],x[b+2]=x[b],x[b+3]=I.getUint8(v+1),2}let u=0;function d(x,b,I,v){return u=I.getUint16(v,!0),x[b]=u>>10&31,x[b+1]=u>>5&31,x[b+2]=u&31,x[b]=x[b]<<3|x[b]>>2,x[b+1]=x[b+1]<<3|x[b+1]>>2,x[b+2]=x[b+2]<<3|x[b+2]>>2,x[b+3]=255,2}function p(x,b,I,v){return u=I.getUint16(v,!0),x[b]=u>>10&31,x[b+1]=u>>5&31,x[b+2]=u&31,x[b]=x[b]<<3|x[b]>>2,x[b+1]=x[b+1]<<3|x[b+1]>>2,x[b+2]=x[b+2]<<3|x[b+2]>>2,x[b+3]=u&32768?0:255,2}function g(x,b,I,v){return x[b]=I.getUint8(v+2),x[b+1]=I.getUint8(v+1),x[b+2]=I.getUint8(v),x[b+3]=255,3}function _(x,b,I,v){return x[b]=I.getUint8(v+2),x[b+1]=I.getUint8(v+1),x[b+2]=I.getUint8(v),x[b+3]=I.getUint8(v+3),4}function f(x,b,I,v){return x[b]=I.getUint8(v+2),x[b+1]=I.getUint8(v+1),x[b+2]=I.getUint8(v),x[b+3]=255,4}function m(x){if(x.footer?.extensionAreaOffset===void 0||x.footer.extensionAreaOffset===0)return;x.reader.offset=x.footer.extensionAreaOffset;const b=x.reader.readUint16();b!==495&&(0,s.handleWarning)(x,new s.DecodeWarning("TGA file is a version other than v2",x.reader.offset-2));const I=(0,t.readText)(x,void 0,41).trim()||void 0,v=(0,t.readText)(x,void 0,324).trim()||void 0,S=w(x),T=(0,t.readText)(x,void 0,41).trim()||void 0,L=E(x),P=(0,t.readText)(x,void 0,41).trim()||void 0,z=x.reader.readUint8()/100,U=(0,t.readText)(x,void 0,2);let H;z===0&&(U===" "||U.length===0)?H=void 0:H=`${z}${U}`;const O=x.reader.readUint8(),$=x.reader.readUint8(),Q=x.reader.readUint8(),ee=x.reader.readUint8();let ie;O===0&&$===0&&Q===0&&ee===0?ie=void 0:ie=new Uint8Array([$,Q,ee,O]);const Be=x.reader.readUint16(),ke=x.reader.readUint16();let lt;ke===0?lt=void 0:lt=Be/ke;const tt=x.reader.readUint16(),q=x.reader.readUint16();let Z;q===0?Z=void 0:Z=tt/q;const _e=x.reader.readUint32(),Fe=x.reader.readUint32(),ye=x.reader.readUint32(),Ke=x.reader.readUint8();return{extensionSize:b,authorName:I,authorComments:v,dateTimestamp:S,jobName:T,jobTime:L,softwareId:P,softwareVersion:H,keyColor:ie,aspectRatio:lt,gamma:Z,colorCorrectionOffset:_e,postageStampOffset:Fe,scanLineOffset:ye,attributesType:Ke}}function y(x){if(x.footer?.developerDirectoryOffset===void 0||x.footer.developerDirectoryOffset===0)return[];x.reader.offset=x.footer.developerDirectoryOffset;const b=x.reader.readUint16(),I=[];for(let v=0;v<b;v++){const S=x.reader.readUint16(),T=x.reader.readUint32(),L=x.reader.readUint32();I.push({tag:S,offset:T,length:L})}return I}function w(x){const b=x.reader.readUint16(),I=x.reader.readUint16(),v=x.reader.readUint16(),S=x.reader.readUint16(),T=x.reader.readUint16(),L=x.reader.readUint16();if(!(b===0&&I===0&&v===0&&S===0&&T===0&&L===0))return new Date(v,b,I,S,T,L)}function E(x){const b=x.reader.readUint16(),I=x.reader.readUint16(),v=x.reader.readUint16();if(!(b===0&&I===0&&v===0))return{hours:b,minutes:I,seconds:v}}function C(x){if(x.reader.offset=x.reader.view.byteLength-26+8,(0,t.readText)(x,void 0,17)!=="TRUEVISION-XFILE."||x.reader.readUint8()!==0)return{extensionAreaOffset:0,developerDirectoryOffset:0};x.reader.offset=x.reader.view.byteLength-26;let I=x.reader.readUint32();I>=x.reader.view.byteLength&&((0,s.handleWarning)(x,new s.DecodeWarning(`Extension area offset "${I}" is invalid`,x.reader.offset-4)),I=0);let v=x.reader.readUint32();return v>=x.reader.view.byteLength&&((0,s.handleWarning)(x,new s.DecodeWarning(`Developer directory offset "${v}" is invalid`,x.reader.offset-4)),v=0),{extensionAreaOffset:I,developerDirectoryOffset:v}}return Fs}var Os={},ks={},Hn={},zh;function md(){if(zh)return Hn;zh=1,Object.defineProperty(Hn,"__esModule",{value:!0}),Hn.handleWarning=Hn.EncodeWarning=Hn.EncodeError=void 0;class s extends Error{constructor(i,r){super(i),this.offset=r}}Hn.EncodeError=s;class e extends Error{constructor(i,r){super(i),this.offset=r}}Hn.EncodeWarning=e;function t(n,i){if(n.options.strictMode)throw i;n.warnings.push(i)}return Hn.handleWarning=t,Hn}var Hh;function cx(){if(Hh)return ks;Hh=1,Object.defineProperty(ks,"__esModule",{value:!0}),ks.analyze=void 0;const s=md();function e(a,o={}){const l=[],c=[],h={options:o,warnings:l};if(a.width>65535)throw new s.EncodeError(`Image width is out of range (${a.width} > 65535)`,-1);if(a.height>65535)throw new s.EncodeError(`Image height is out of range (${a.height} > 65535)`,-1);if(a.data.length!==a.width*a.height*4)throw new s.EncodeError(`Provided image data length (${a.data.length}) is not expected length (${a.width*a.height*4})`,Math.min(a.data.length,a.width*a.height*4)-1);if(o.imageId&&o.imageId.length>255)throw new s.EncodeError(`Image ID length is out of range (${o.imageId.length} > 255)`,-1);if(o.origin&&(o.origin.x||0)>65535)throw new s.EncodeError(`X origin is out of range (${o.origin.x} > 65535)`,-1);if(o.origin&&(o.origin.y||0)>65535)throw new s.EncodeError(`Y origin is out of range (${o.origin.y} > 65535)`,-1);if(o.screenOrigin===1&&(0,s.handleWarning)(h,new s.EncodeWarning("This image is encoded using a bottom right screen origin, many image editors won't read this correctly",17)),o.screenOrigin===3&&(0,s.handleWarning)(h,new s.EncodeWarning("This image is encoded using a top right screen origin, many image editors won't read this correctly",17)),o.bitDepth!==void 0&&o.imageType===void 0||o.bitDepth===void 0&&o.imageType!==void 0&&o.imageType>=0)throw new s.EncodeError("Bit depth and image type options must be used together",-1);const u=o.imageType;let d,p;u!==void 0&&(u===-2||u===-1?p=u:d=u);let g=o.bitDepth,_;if(g===24&&t(a)&&(0,s.handleWarning)({options:o,warnings:l},new s.EncodeWarning("Cannot encode 24 bit image without data loss as it contains transparent colors",0)),d===9||d===1){const f=n(a,p);if(!f.colorMap)throw new s.EncodeError("Image has too many colors to encode using a color map",-1);_=f.colorMap}if(!g||p!==void 0){const f=n(a,p);if(g&&g<f.bitDepth)throw new s.EncodeError("Image cannot be encoded using specified bit depth",-1);g=f.bitDepth,d=f.imageType,_=f.colorMap}if(!d)throw new Error("No ImageType set");return{bitDepth:g,imageType:d,colorMap:_,imageId:o.imageId||"",options:o,warnings:l,info:c,image:a}}ks.analyze=e;function t(a){const l=a.width*a.height*4;let c=!1;for(let h=0;h<l;h+=4)c||(c=a.data[h+3]<255);return c}function n(a,o){const c=a.width*a.height*4;let h=!1,u=!1,d=!1,p=!1;const g=new Set;for(let _=0;_<c;_+=4)h||(h=a.data[_+3]>0&&a.data[_+3]<255),u||(u=a.data[_+3]<255),d||d||(d=!r(a.data[_])||!r(a.data[_+1])||!r(a.data[_+2])||!r(a.data[_+3])),p||(p=a.data[_]!==a.data[_+1]||a.data[_]!==a.data[_+2]),g.size<256&&g.add((a.data[_]<<24)+(a.data[_+1]<<16)+(a.data[_+2]<<8)+a.data[_+3]);if(g.size<255){const _=new Map;let f=0;for(const y of g)_.set(y,f++);let m;return d?u?m={colorToIndexMap:_,bitDepth:32}:m={colorToIndexMap:_,bitDepth:24}:u?m={colorToIndexMap:_,bitDepth:32}:m={colorToIndexMap:_,bitDepth:15},{imageType:i(9,o),bitDepth:8,colorMap:m}}return p?d?u?{imageType:i(10,o),bitDepth:32}:{imageType:i(10,o),bitDepth:24}:u?h?{imageType:i(10,o),bitDepth:32}:{imageType:i(10,o),bitDepth:16}:{imageType:i(10,o),bitDepth:15}:u?{imageType:i(11,o),bitDepth:16}:{imageType:i(11,o),bitDepth:8}}function i(a,o){if(o===void 0)return a;switch(a){case 1:case 9:return o===-2?9:1;case 2:case 10:return o===-2?10:2;case 3:case 11:return o===-2?11:3}}function r(a){return(a>>5&7)===(a&7)}return ks}var zs={},Vh;function hx(){if(Vh)return zs;Vh=1,Object.defineProperty(zs,"__esModule",{value:!0}),zs.ByteStream=void 0;class s{constructor(t,n){this._le=n,this.offset=0,this.array=new Uint8Array(t),this.view=new DataView(this.array.buffer,this.array.byteOffset,this.array.byteLength)}writeUint8(t){this.view.setUint8(this.offset,t),this.offset+=1}writeUint16(t){this.view.setUint16(this.offset,t,this._le),this.offset+=2}assertAtEnd(){if(this.offset!==this.array.length)throw new Error("Writing finished before expected length of stream")}}return zs.ByteStream=s,zs}var Hs={},Gh;function ux(){if(Gh)return Hs;Gh=1,Object.defineProperty(Hs,"__esModule",{value:!0}),Hs.encodeRunLengthEncoding=void 0;const s=md();function e(t,n){const i=Math.ceil(t.bitDepth/8),r=i+1,a=new Uint8Array(t.image.width*t.image.height*r);let o=0,l=0,c=1,h=0,u=!1,d=0,p=0,g=!1;for(let _=i;_<n.length;_+=i){let f=!1;for(h=0;h<i;h++)f||(f=n[l+h]!==n[_+h]);if(f){for(;c>0;){for(u=c===1,g&&u?(d=a[p]&127,d<127?a[p]=d+1:(a[o]=Math.min(c,128)-1,p=o,o++)):(a[o]=Math.min(c,128)-1|(u?0:128),p=o,o++),h=0;h<i;h++)a[o+h]=n[l+h];o+=i,g=u,c-=128}l=_,c=1}else c++}for(;c>0;){for(u=c===1,g&&u?(d=a[p]&127,d<127?a[p]=d+1:(a[o]=Math.min(c,128)-1,p=o,o++)):(a[o]=Math.min(c,128)-1|(u?0:128),p=o,o++),h=0;h<i;h++)a[o+h]=n[l+h];o+=i,c-=128}return o-1>n.length&&(0,s.handleWarning)(t,new s.EncodeWarning("RLE encoded was used but it is larger than unencoded would be",-1)),a.slice(0,o)}return Hs.encodeRunLengthEncoding=e,Hs}var Wh;function dx(){if(Wh)return Os;Wh=1,Object.defineProperty(Os,"__esModule",{value:!0}),Os.encodeTga=void 0;const s=cx(),e=hx(),t=ux();async function n(g,_={}){const f=(0,s.analyze)(g,_),m=[];m.push(i(f)),f.imageId.length>0&&m.push(r(f)),f.colorMap&&m.push(a(f)),m.push(o(f));const y=m.reduce((C,x)=>C+x.length,0),w=new Uint8Array(y);let E=0;for(const C of m)w.set(C,E),E+=C.length;return{data:w,warnings:f.warnings,info:f.info}}Os.encodeTga=n;function i(g){const _=new e.ByteStream(18,!0);_.writeUint8(g.imageId.length),_.writeUint8(g.colorMap?1:0),_.writeUint8(g.imageType),_.writeUint16(0),_.writeUint16(g.colorMap?.colorToIndexMap.size??0),_.writeUint8(g.colorMap?.bitDepth??0),_.writeUint16(g.options.origin?.x||0),_.writeUint16(g.options.origin?.y||0),_.writeUint16(g.image.width),_.writeUint16(g.image.height),_.writeUint8(g.bitDepth);let f=0;g.bitDepth===32&&(f=8);const m=f&15|(g.options.screenOrigin??0)<<4&48;return _.writeUint8(m),_.assertAtEnd(),_.array}function r(g){const _=new e.ByteStream(g.imageId.length,!0);for(let f=0;f<g.imageId.length;f++)_.writeUint8(g.imageId.charCodeAt(f));return _.assertAtEnd(),_.array}function a(g){const _=g.colorMap;if(!_)throw new Error("Cannot write color map undefined");const f=Math.ceil(_.bitDepth/8),m=new e.ByteStream(_.colorToIndexMap.size*f,!0);let y;switch(_.bitDepth){case 15:y=c;break;case 16:y=h;break;case 24:y=d;break;case 32:y=p;break;default:throw new Error(`Unsupported bit depth for color map "${_.bitDepth}"`)}const w=Array.from(_.colorToIndexMap.entries()).sort((E,C)=>E[1]-C[1]).map(E=>E[0]);for(const E of w)y(m,new Uint8Array([E>>24&255,E>>16&255,E>>8&255,E&255]),0);return m.assertAtEnd(),m.array}function o(g){const _=Math.ceil(g.bitDepth/8),f=new e.ByteStream(g.image.width*g.image.height*_,!0);let m=0,y;if(g.colorMap){const w=g.colorMap;y=(E,C,x)=>{const b=w.colorToIndexMap.get((C[x]<<24)+(C[x+1]<<16)+(C[x+2]<<8)+C[x+3]);E.writeUint8(b)}}else switch(g.bitDepth){case 8:if(g.imageType===3||g.imageType===11)y=l;else throw new Error(`Unsupported image type (${g.imageType}) with bit depth (${g.bitDepth})`);break;case 15:y=c;break;case 16:g.imageType===3||g.imageType===11?y=u:y=h;break;case 24:y=d;break;case 32:y=p;break;default:throw new Error("NYI")}switch(g.options.screenOrigin??0){case 0:for(let w=g.image.height-1;w>=0;w--){m=g.image.width*w*4;for(let E=0;E<g.image.width;E++)y(f,g.image.data,m),m+=4}break;case 1:for(let w=g.image.height-1;w>=0;w--){m=(g.image.width*w+(g.image.width-1))*4;for(let E=0;E<g.image.width;E++)y(f,g.image.data,m),m-=4}break;case 2:for(let w=0;w<g.image.height;w++){m=g.image.width*w*4;for(let E=0;E<g.image.width;E++)y(f,g.image.data,m),m+=4}break;case 3:for(let w=0;w<g.image.height;w++){m=(g.image.width*w+(g.image.width-1))*4;for(let E=0;E<g.image.width;E++)y(f,g.image.data,m),m-=4}break}return f.assertAtEnd(),g.imageType&8?(0,t.encodeRunLengthEncoding)(g,f.array):f.array}function l(g,_,f){g.writeUint8(_[f])}function c(g,_,f){g.writeUint16((_[f+0]>>3&31)<<10|(_[f+1]>>3&31)<<5|(_[f+2]>>3&31)<<0)}function h(g,_,f){g.writeUint16((_[f+0]>>3&31)<<10|(_[f+1]>>3&31)<<5|(_[f+2]>>3&31)<<0|(_[f+3]===255?32768:0))}function u(g,_,f){g.writeUint8(_[f]),g.writeUint8(_[f+3])}function d(g,_,f){g.writeUint8(_[f+2]),g.writeUint8(_[f+1]),g.writeUint8(_[f+0])}function p(g,_,f){g.writeUint8(_[f+2]),g.writeUint8(_[f+1]),g.writeUint8(_[f+0]),g.writeUint8(_[f+3])}return Os}var Xh;function fx(){return Xh||(Xh=1,(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.encodeTga=s.decodeTga=s.DecodeWarning=s.DecodeError=void 0;var e=nc();Object.defineProperty(s,"DecodeError",{enumerable:!0,get:function(){return e.DecodeError}}),Object.defineProperty(s,"DecodeWarning",{enumerable:!0,get:function(){return e.DecodeWarning}});async function t(i,r){return(await Promise.resolve().then(()=>lx())).decodeTga(i,r)}s.decodeTga=t;async function n(i,r){return(await Promise.resolve().then(()=>dx())).encodeTga(i,r)}s.encodeTga=n})(So)),So}var px=fx();const mx=new Uint32Array([3287280091,1147300610,2044886154,2027892972,1902027934,3347438090,3763270186,3854829911]),tn=(s,e)=>(s<<(e&31)|s>>>32-(e&31))>>>0,gx=(s,e)=>(s>>>(e&31)|s<<32-(e&31))>>>0;function _x(s){const e=new Uint32Array(192),t=new Uint32Array(s);for(let n=0;n<32;n++){const i=mx[n&7],r=n*6&7;t[r+0&7]=tn(t[r+0&7]+tn(i,n)>>>0,1),t[r+1&7]=tn(t[r+1&7]+tn(i,n+1)>>>0,3),t[r+2&7]=tn(t[r+2&7]+tn(i,n+2)>>>0,6),t[r+3&7]=tn(t[r+3&7]+tn(i,n+3)>>>0,11),t[r+4&7]=tn(t[r+4&7]+tn(i,n+4)>>>0,13),t[r+5&7]=tn(t[r+5&7]+tn(i,n+5)>>>0,17),e.set([t[r+0&7],t[r+1&7],t[r+2&7],t[r+3&7],t[r+4&7],t[r+5&7]],n*6)}return e}function xx(s,e,t){e[0]=s[3],e[1]=(gx(s[0],9)-(e[0]^t[0])^t[1])>>>0,e[2]=(tn(s[1],5)-(e[1]^t[2])^t[3])>>>0,e[3]=(tn(s[2],3)-(e[2]^t[4])^t[5])>>>0}function vx(s){if(s.length!==32)throw new Error("LEA-256 key must be 32 bytes");const e=new Uint32Array(8);for(let a=0;a<8;a++)e[a]=s[a*4+3]<<24|s[a*4+2]<<16|s[a*4+1]<<8|s[a*4];const t=_x(e),n=new Uint32Array(4),i=new Uint32Array(4),r=new Uint32Array(6);return function(o){if(o.length%16!==0)throw new Error("LEA-ECB: data length must be a multiple of 16 B");const l=o.slice(),c=new DataView(l.buffer,l.byteOffset);for(let h=0;h<l.length;h+=16){for(let u=0;u<4;u++)n[u]=c.getUint32(h+u*4,!0);for(let u=0;u<32;u++)r.set(t.subarray((31-u)*6,(32-u)*6)),xx(n,i,r),n.set(i);for(let u=0;u<4;u++)c.setUint32(h+u*4,n[u],!0)}return l}}const yx=new Uint8Array([209,115,82,246,210,154,203,39,62,175,89,49,55,179,231,162]);function Pa(s){const e=new Uint8Array(s.length);let t=94;for(let n=0;n<s.length;n++)e[n]=(s[n]^yx[n&15])-t&255,t=s[n]+61&255;return e}const Mx=new Uint8Array([252,207,171]);function Sx(s){const e=new Uint8Array(s.length);for(let t=0;t<s.length;t++)e[t]=s[t]^Mx[t%3];return e}const Cl={int16:{size:2,read:(s,e)=>s.getInt16(e,!0)},uint16:{size:2,read:(s,e)=>s.getUint16(e,!0)},uint8:{size:1,read:(s,e)=>s.getUint8(e)},float32:{size:4,read:(s,e)=>s.getFloat32(e,!0)}};function gd(s){let e=0;for(const[,t]of s)e+=Cl[t].size;return e}function bx(s,e,t){const n=gd(e);if(t+n>s.byteLength)throw new Error(`Cannot read struct at offset ${t}: would require ${n} bytes but only ${s.byteLength-t} bytes available`);const i={};let r=t;for(const[a,o]of e)try{a.startsWith("__")||(i[a]=Cl[o].read(s,r)),r+=Cl[o].size}catch(l){throw new Error(`Error reading field '${a}' of type '${o}' at offset ${r}: ${l}`)}return{data:i,newOffset:r}}function bo(s,e,t,n){if(n===0)return{data:[],newOffset:t};const i=gd(e),r=i*n;if(t+r>s.byteLength)return console.error(`Cannot read ${n} structs of size ${i} (total ${r} bytes) at offset ${t}: buffer size is ${s.byteLength}`),null;const a=[];let o=t;for(let l=0;l<n;l++)try{const{data:c,newOffset:h}=bx(s,e,o);a.push(c),o=h}catch(c){return console.error(`Error reading struct ${l}/${n} at offset ${o}:`,c),null}return{data:a,newOffset:o}}const Ex=[["node","int16"],["__padding0","int16"],["x","float32"],["y","float32"],["z","float32"]],wx=[["node","int16"],["__padding0","int16"],["nx","float32"],["ny","float32"],["nz","float32"],["bindVertex","int16"],["__padding1","int16"]],Tx=[["u","float32"],["v","float32"]],Ax=new Uint8Array([204,80,69,19,194,166,87,78,214,154,69,137,191,47,188,217,57,179,179,189,80,189,204,182,133,70,209,214,22,84,224,135]),Cx=vx(Ax);function Rx(s){return Cx(s)}async function _d(s){const e=await px.decodeTga(new Uint8Array(s)),{width:t,height:n,data:i}=e.image,r=document.createElement("canvas");r.width=t,r.height=n;const a=r.getContext("2d"),o=a.createImageData(t,n);return o.data.set(i),a.putImageData(o,0,0),r.toDataURL("image/png")}function Ix(s){const e=s.x*.5,t=s.y*.5,n=s.z*.5,i=Math.sin(e),r=Math.cos(e),a=Math.sin(t),o=Math.cos(t),l=Math.sin(n),c=Math.cos(n),h=r*o*c+i*a*l,u=i*o*c-r*a*l,d=r*a*c+i*o*l,p=r*o*l-i*a*c;return new Zt(u,d,p,h).normalize()}class ic{async load(e){console.groupCollapsed("%cBMDLoader.load","color:lime;font-weight:bold"),console.time("BMDLoader.load total");const t=this.parse(e);console.log("Parsed BMD:",t);const n=[...new Set(t.meshes.map(c=>c.texturePath))];console.log("Required textures:",n);const i=new ss;i.name=t.name;const r=[];t.bones.forEach(c=>{const h=new Yu;h.name=c.name,r.push(h)});const a=[];r.forEach((c,h)=>{const u=t.bones[h].parent;u>=0&&u<r.length?r[u].add(c):a.push(c)}),a.forEach(c=>i.add(c));const o=new Wl(r);t.meshes.forEach(c=>{const h=new Ot,u=new $l({color:13421772,side:dn}),{positions:d,normals:p,uvs:g,skinIndices:_,skinWeights:f}=this.extractGeometry(c);h.setAttribute("position",new Tt(d,3)),h.setAttribute("normal",new Tt(p,3)),h.setAttribute("uv",new Tt(g,2)),h.setAttribute("skinIndex",new Gl(_,4)),h.setAttribute("skinWeight",new Tt(f,4));const m=new hp(h,u);m.name=`mesh_${i.children.length}`,m.userData.texturePath=c.texturePath,m.bind(o),i.add(m)}),t.bones.forEach((c,h)=>{if(c.isDummy||!c.matrixes?.length)return;const u=c.matrixes[0],d=u.position[0]??{x:0,y:0,z:0},p=u.quaternion[0]??{x:0,y:0,z:0,w:1},g=r[h];g.position.set(d.x,d.y,d.z),g.quaternion.set(p.x,p.y,p.z,p.w)});const l=this.createAnimations(t,r);return l.length>0&&(i.animations=l),i.rotation.x=-Math.PI/2,console.timeEnd("BMDLoader.load total"),console.groupEnd(),{group:i,requiredTextures:n}}loadAnimationsFrom(e,t){const n=Array.isArray(t)?t:t.bones,i=this.parse(e);return this.createAnimations(i,n)}parse(e){console.groupCollapsed("parse()"),console.log(`Buffer size: ${e.byteLength} bytes`);const t=e.slice(0),n=new DataView(t);if(new TextDecoder("ascii").decode(t.slice(0,3))!=="BMD")throw new Error("Invalid BMD header");const r=n.getUint8(3);console.log(`BMD version: ${r}`);let a=4;if(r===12||r===15){const f=n.getInt32(4,!0),m=new Uint8Array(t,8,f),y=r===12?Pa(m):Rx(m);new Uint8Array(t,8,f).set(y),a=8,console.log(`Decrypted ${f} B @8`)}let o=a;const l=()=>{const f=n.getInt16(o,!0);return o+=2,f},c=()=>{const f=n.getUint16(o,!0);return o+=2,f},h=()=>{const f=n.getFloat32(o,!0);return o+=4,f},u=this.readStringFromDataView(n,o,32);o+=32;const d=c(),p=c(),g=c();console.log(`Counts – Meshes:${d}, Bones:${p}, Actions:${g}`);const _={version:r,name:u,meshes:[],bones:[],actions:[]};for(let f=0;f<d;f++){console.log(`Reading mesh ${f+1}/${d} at offset ${o}`);const m=l(),y=l(),w=l(),E=l(),C=l();console.log(`Mesh ${f}: v=${m}, n=${y}, t=${w}, tri=${E}`);const x=bo(n,Ex,o,m);if(!x){console.error(`Failed to read vertices for mesh ${f}`);continue}o=x.newOffset;const b=x.data.map(U=>({node:U.node,position:{x:U.x,y:U.y,z:U.z}})),I=bo(n,wx,o,y);if(!I){console.error(`Failed to read normals for mesh ${f}`);continue}o=I.newOffset;const v=I.data.map(U=>({node:U.node,normal:{x:U.nx,y:U.ny,z:U.nz},bindVertex:U.bindVertex})),S=bo(n,Tx,o,w);if(!S){console.error(`Failed to read texCoords for mesh ${f}`);continue}o=S.newOffset;const T=S.data,L=[],P=64;for(let U=0;U<E;U++){const H=o;L.push({polygon:n.getUint8(H),vertexIndex:[0,1,2,3].map(O=>n.getInt16(H+2+O*2,!0)),normalIndex:[0,1,2,3].map(O=>n.getInt16(H+10+O*2,!0)),texCoordIndex:[0,1,2,3].map(O=>n.getInt16(H+18+O*2,!0)),lightMapCoord:[],lightMapIndexes:0}),o+=P}const z=this.readStringFromDataView(n,o,32);o+=32,_.meshes.push({texture:C,numVertices:m,numNormals:y,numTexCoords:w,numTriangles:E,vertices:b,normals:v,texCoords:T,triangles:L,texturePath:z})}for(let f=0;f<g;f++){const m=l(),y=n.getUint8(o)>0;if(o+=1,_.actions.push({numAnimationKeys:m,lockPositions:y,positions:[]}),y)for(let w=0;w<m;w++){const E={x:h(),y:h(),z:h()};_.actions[f].positions.push(E)}}for(let f=0;f<p;f++){const m=n.getUint8(o)>0;if(o+=1,m){_.bones.push({name:`dummy_${f}`,parent:-1,isDummy:!0,matrixes:[]});continue}const y=this.readStringFromDataView(n,o,32);o+=32;const w=l(),E={name:y,parent:w,isDummy:!1,matrixes:[]};for(let C=0;C<g;C++){const b=_.actions[C].numAnimationKeys;if(b===0){E.matrixes.push({position:[{x:0,y:0,z:0}],rotation:[{x:0,y:0,z:0}],quaternion:[{x:0,y:0,z:0,w:1}]});continue}const I={position:[],rotation:[],quaternion:[]};for(let v=0;v<b;v++)I.position.push({x:h(),y:h(),z:h()});for(let v=0;v<b;v++)I.rotation.push({x:h(),y:h(),z:h()});I.rotation.forEach(v=>{const S=Ix(v);I.quaternion.push({x:S.x,y:S.y,z:S.z,w:S.w})}),E.matrixes.push(I)}_.bones.push(E)}return console.log(`Parse completed. Final offset: ${o}/${t.byteLength}`),console.groupEnd(),_}readStringFromDataView(e,t,n){if(t+n>e.byteLength)return console.warn(`Cannot read string at offset ${t}: would exceed buffer bounds`),"";const i=new Uint8Array(e.buffer,e.byteOffset+t,n),r=i.indexOf(0);return new TextDecoder("ascii").decode(r!==-1?i.subarray(0,r):i)}extractGeometry(e){const t=[],n=[],i=[],r=[],a=[],o=(l,c,h)=>{if(l<0||l>=e.vertices.length||c<0||c>=e.normals.length||h<0||h>=e.texCoords.length)return!1;const u=e.vertices[l],d=e.normals[c],p=e.texCoords[h];return t.push(u.position.x,u.position.y,u.position.z),n.push(d.normal.x,d.normal.y,d.normal.z),i.push(p.u,p.v),r.push(u.node,0,0,0),a.push(1,0,0,0),!0};for(const l of e.triangles){const c=l.vertexIndex,h=l.normalIndex,u=l.texCoordIndex;o(c[0],h[0],u[0]),o(c[2],h[2],u[2]),o(c[1],h[1],u[1]),l.polygon===4&&(o(c[0],h[0],u[0]),o(c[2],h[2],u[2]),o(c[3],h[3],u[3]))}return{positions:t,normals:n,uvs:i,skinIndices:r,skinWeights:a}}createAnimations(e,t){const n=[];for(let r=0;r<e.actions.length;r++){const a=e.actions[r];if(a.numAnimationKeys<=1)continue;const o=(a.numAnimationKeys-1)/24,l=[];for(let c=0;c<e.bones.length;c++){const h=t[c],u=e.bones[c];if(u.isDummy||!u.matrixes[r])continue;const d=u.matrixes[r],p=[],g=[],_=[];for(let f=0;f<a.numAnimationKeys;f++){p.push(f/24);const m=d.position[f],y=d.quaternion[f];g.push(m.x,m.y,m.z),_.push(y.x,y.y,y.z,y.w)}l.push(new lr(`${h.name}.position`,p,g)),l.push(new pr(`${h.name}.quaternion`,p,_))}if(l.length){const c=new wl(`action_${r}`,o,l);c.userData={numAnimationKeys:a.numAnimationKeys},n.push(c)}}return n}readString(e,t,n){if(t+n>e.byteLength)return console.warn(`Cannot read string at offset ${t}: would exceed buffer bounds`),"";const i=new Uint8Array(e.buffer,t,n),r=i.indexOf(0),a=r!==-1?i.slice(0,r):i;return new TextDecoder("ascii",{fatal:!1}).decode(a)}}async function Ua(s,e){const t=new Uint8Array(s);if(e==="ozj"){const i=$h(t,!0);if(i===-1)throw new Error("Invalid OZJ: JPEG marker not found");return qh(s,i,!0)}if(e==="ozt")return jh(s,!0);const n=$h(t,!1);return n!==-1?qh(s,n,!1):jh(s,!1)}function $h(s,e){const t=s.length,n=e?16:20,i=e?t-2:Math.min(30,t-2);for(let r=n;r<i;r++)if(s[r]===255&&s[r+1]===216&&s[r+2]===255)return r;return-1}function jh(s,e){const t=new DataView(s),n=t.byteLength;if(n<22)throw new Error("File too small for OZT");const i=t.getInt16(16,!0),r=t.getInt16(18,!0),a=t.getUint8(20),o=22+i*r*4;if(!(i>0&&r>0&&i<=1024&&r<=1024&&a===32&&o<=n))throw new Error("Unsupported OZ? file");const c=e?Yh(i):i,h=e?Yh(r):r;return Lx(s,i,r,c,h)}async function qh(s,e,t){const i=new DataView(s).getUint8(17)!==0,r=s.slice(e);try{const a=new Blob([r],{type:"image/jpeg"}),o=await createImageBitmap(a),l=Object.assign(document.createElement("canvas"),{width:o.width,height:o.height}),c=l.getContext("2d");return t&&!i&&(c.translate(0,o.height),c.scale(1,-1)),c.drawImage(o,0,0),o.close(),l.toDataURL("image/png")}catch(a){throw console.error("OZJ decode error:",a),new Error(`Failed to decode JPEG: ${a}`)}}function Lx(s,e,t,n,i){const r=new Uint8Array(s);let a=22;const o=Object.assign(document.createElement("canvas"),{width:n,height:i}),l=o.getContext("2d"),c=l.createImageData(n,i),h=c.data;for(let u=0;u<t;u++){const d=(t-1-u)*n*4;for(let p=0;p<e;p++){const g=r[a++],_=r[a++],f=r[a++],m=r[a++],y=d+p*4;h[y]=f,h[y+1]=_,h[y+2]=g,h[y+3]=m}}return l.putImageData(c,0,0),o.toDataURL("image/png")}function Yh(s){return 2**Math.ceil(Math.log2(s))}const Kh={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class ma{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new Vx(e)}),this.register(function(e){return new Gx(e)}),this.register(function(e){return new jx(e)}),this.register(function(e){return new qx(e)}),this.register(function(e){return new Yx(e)}),this.register(function(e){return new Kx(e)}),this.register(function(e){return new Wx(e)}),this.register(function(e){return new Xx(e)}),this.register(function(e){return new $x(e)}),this.register(function(e){return new Zx(e)}),this.register(function(e){return new Jx(e)}),this.register(function(e){return new Qx(e)}),this.register(function(e){return new e2(e)}),this.register(function(e){return new t2(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,i){const r=new Hx,a=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}}const Ye={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Eo="KHR_mesh_quantization",cn={};cn[bt]=Ye.NEAREST;cn[Lu]=Ye.NEAREST_MIPMAP_NEAREST;cn[$s]=Ye.NEAREST_MIPMAP_LINEAR;cn[Pt]=Ye.LINEAR;cn[Kr]=Ye.LINEAR_MIPMAP_NEAREST;cn[ai]=Ye.LINEAR_MIPMAP_LINEAR;cn[Bt]=Ye.CLAMP_TO_EDGE;cn[Ln]=Ye.REPEAT;cn[aa]=Ye.MIRRORED_REPEAT;const Zh={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Dx=new Re,Jh=12,Px=1179937895,Ux=2,Qh=8,Fx=1313821514,Nx=5130562;function qs(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function Bx(s){return new TextEncoder().encode(s).buffer}function Ox(s){return qs(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function kx(s,e,t){const n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let r=0;r<s.itemSize;r++){let a;s.itemSize>4?a=s.array[i*s.itemSize+r]:(r===0?a=s.getX(i):r===1?a=s.getY(i):r===2?a=s.getZ(i):r===3&&(a=s.getW(i)),s.normalized===!0&&(a=Ti.normalize(a,s.array))),n.min[r]=Math.min(n.min[r],a),n.max[r]=Math.max(n.max[r],a)}return n}function xd(s){return Math.ceil(s/4)*4}function wo(s,e=0){const t=xd(s.byteLength);if(t!==s.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function eu(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function zx(s,e){if(typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}else return new Promise(t=>s.toBlob(t,e))}class Hx{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+ya}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const i=this,r=i.buffers,a=i.json;n=i.options;const o=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(o),u=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0){const d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){const p=wo(d.result),g=new DataView(new ArrayBuffer(Qh));g.setUint32(0,p.byteLength,!0),g.setUint32(4,Nx,!0);const _=wo(Bx(JSON.stringify(a)),32),f=new DataView(new ArrayBuffer(Qh));f.setUint32(0,_.byteLength,!0),f.setUint32(4,Fx,!0);const m=new ArrayBuffer(Jh),y=new DataView(m);y.setUint32(0,Px,!0),y.setUint32(4,Ux,!0);const w=Jh+f.byteLength+_.byteLength+g.byteLength+p.byteLength;y.setUint32(8,w,!0);const E=new Blob([m,f,_,g,p],{type:"application/octet-stream"}),C=new FileReader;C.readAsArrayBuffer(E),C.onloadend=function(){t(C.result)}}}else if(a.buffers&&a.buffers.length>0){const d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){const p=d.result;a.buffers[0].uri=p,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],i[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new N;for(let i=0,r=e.count;i<r;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new N;for(let r=0,a=n.count;r<a;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(p){return p.colorSpace===Rt?function(_){return _<.04045?_*.0773993808:Math.pow(_*.9478672986+.0521327014,2.4)}:function(_){return _}}e instanceof ho&&(e=await this.decompressTextureAsync(e)),t instanceof ho&&(t=await this.decompressTextureAsync(t));const i=e?e.image:null,r=t?t.image:null,a=Math.max(i?i.width:0,r?r.width:0),o=Math.max(i?i.height:0,r?r.height:0),l=eu();l.width=a,l.height=o;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,o);const h=c.getImageData(0,0,a,o);if(i){c.drawImage(i,0,0,a,o);const p=n(e),g=c.getImageData(0,0,a,o).data;for(let _=2;_<g.length;_+=4)h.data[_]=p(g[_]/256)*256}if(r){c.drawImage(r,0,0,a,o);const p=n(t),g=c.getImageData(0,0,a,o).data;for(let _=1;_<g.length;_+=4)h.data[_]=p(g[_]/256)*256}c.putImageData(h,0,0);const d=(e||t).clone();return d.source=new Ea(l),d.colorSpace=Tn,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){const a=this.json;a.bufferViews||(a.bufferViews=[]);let o;switch(t){case Ye.BYTE:case Ye.UNSIGNED_BYTE:o=1;break;case Ye.SHORT:case Ye.UNSIGNED_SHORT:o=2;break;default:o=4}let l=e.itemSize*o;r===Ye.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=xd(i*l),h=new DataView(new ArrayBuffer(c));let u=0;for(let g=n;g<n+i;g++){for(let _=0;_<e.itemSize;_++){let f;e.itemSize>4?f=e.array[g*e.itemSize+_]:(_===0?f=e.getX(g):_===1?f=e.getY(g):_===2?f=e.getZ(g):_===3&&(f=e.getW(g)),e.normalized===!0&&(f=Ti.normalize(f,e.array))),t===Ye.FLOAT?h.setFloat32(u,f,!0):t===Ye.INT?h.setInt32(u,f,!0):t===Ye.UNSIGNED_INT?h.setUint32(u,f,!0):t===Ye.SHORT?h.setInt16(u,f,!0):t===Ye.UNSIGNED_SHORT?h.setUint16(u,f,!0):t===Ye.BYTE?h.setInt8(u,f):t===Ye.UNSIGNED_BYTE&&h.setUint8(u,f),u+=o}u%l!==0&&(u+=l-u%l)}const d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(d.target=r),r===Ye.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=c,a.bufferViews.push(d),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const a=wo(r.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,i(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,i){const r=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let o;if(e.array.constructor===Float32Array)o=Ye.FLOAT;else if(e.array.constructor===Int32Array)o=Ye.INT;else if(e.array.constructor===Uint32Array)o=Ye.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=Ye.SHORT;else if(e.array.constructor===Uint16Array)o=Ye.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=Ye.BYTE;else if(e.array.constructor===Uint8Array)o=Ye.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;const l=kx(e,n,i);let c;t!==void 0&&(c=e===t.index?Ye.ELEMENT_ARRAY_BUFFER:Ye.ARRAY_BUFFER);const h=this.processBufferView(e,o,n,i,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:o,count:i,max:l.max,min:l.min,type:a[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,i="image/png"){if(e!==null){const r=this,a=r.cache,o=r.json,l=r.options,c=r.pending;a.images.has(e)||a.images.set(e,{});const h=a.images.get(e),u=i+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];o.images||(o.images=[]);const d={mimeType:i},p=eu();p.width=Math.min(e.width,l.maxTextureSize),p.height=Math.min(e.height,l.maxTextureSize);const g=p.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,p.height),g.scale(1,-1)),e.data!==void 0){t!==ln&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const f=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<f.length;m+=4)f[m+0]=e.data[m+0],f[m+1]=e.data[m+1],f[m+2]=e.data[m+2],f[m+3]=e.data[m+3];g.putImageData(new ImageData(f,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,p.width,p.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(zx(p,i).then(f=>r.processBufferViewImage(f)).then(f=>{d.bufferView=f})):d.uri=ku.getDataURL(p,i);const _=o.images.push(d)-1;return h[u]=_,_}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:cn[e.magFilter],minFilter:cn[e.minFilter],wrapS:cn[e.wrapS],wrapT:cn[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,i=this.cache,r=this.json;if(i.textures.has(e))return i.textures.get(e);r.textures||(r.textures=[]),e instanceof ho&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let a=e.userData.mimeType;a==="image/webp"&&(a="image/png");const o={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,a)};e.name&&(o.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,o)});const l=r.textures.push(o)-1;return i.textures.set(e,l),l}async processMaterialAsync(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(qs(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=0,i.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const o=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(o),texCoord:o.channel};this.applyTextureTransform(l,o),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const o={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),i.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){const o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),i.emissiveTexture=c}}if(e.normalMap){const o={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),i.normalTexture=o}if(e.aoMap){const o={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),i.occlusionTexture=o}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===dn&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),await this._invokeAllAsync(async function(o){o.writeMaterialAsync&&await o.writeMaterialAsync(e,i)});const a=n.materials.push(i)-1;return t.materials.set(e,a),a}async processMeshAsync(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let E=0,C=e.material.length;E<C;E++)i.push(e.material[E].uuid);else i.push(e.material.uuid);const r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);const a=e.geometry;let o;e.isLineSegments?o=Ye.LINES:e.isLineLoop?o=Ye.LINE_LOOP:e.isLine?o=Ye.LINE_STRIP:e.isPoints?o=Ye.POINTS:o=e.material.wireframe?Ye.LINES:Ye.TRIANGLES;const l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},p=a.getAttribute("normal");p!==void 0&&!this.isNormalizedNormalAttribute(p)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(p)));let g=null;for(let E in a.attributes){if(E.slice(0,5)==="morph")continue;const C=a.attributes[E];if(E=d[E]||E.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(E)||(E="_"+E),t.attributes.has(this.getUID(C))){c[E]=t.attributes.get(this.getUID(C));continue}g=null;const b=C.array;E==="JOINTS_0"&&!(b instanceof Uint16Array)&&!(b instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new gt(new Uint16Array(b),C.itemSize,C.normalized)):(b instanceof Uint32Array||b instanceof Int32Array)&&!E.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${E}" converted to type FLOAT.`),g=ma.Utils.toFloat32BufferAttribute(C));const I=this.processAccessor(g||C,a);I!==null&&(E.startsWith("_")||this.detectMeshQuantization(E,C),c[E]=I,t.attributes.set(this.getUID(C),I))}if(p!==void 0&&a.setAttribute("normal",p),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const E=[],C=[],x={};if(e.morphTargetDictionary!==void 0)for(const b in e.morphTargetDictionary)x[e.morphTargetDictionary[b]]=b;for(let b=0;b<e.morphTargetInfluences.length;++b){const I={};let v=!1;for(const S in a.morphAttributes){if(S!=="position"&&S!=="normal"){v||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),v=!0);continue}const T=a.morphAttributes[S][b],L=S.toUpperCase(),P=a.attributes[S];if(t.attributes.has(this.getUID(T,!0))){I[L]=t.attributes.get(this.getUID(T,!0));continue}const z=T.clone();if(!a.morphTargetsRelative)for(let U=0,H=T.count;U<H;U++)for(let O=0;O<T.itemSize;O++)O===0&&z.setX(U,T.getX(U)-P.getX(U)),O===1&&z.setY(U,T.getY(U)-P.getY(U)),O===2&&z.setZ(U,T.getZ(U)-P.getZ(U)),O===3&&z.setW(U,T.getW(U)-P.getW(U));I[L]=this.processAccessor(z,a),t.attributes.set(this.getUID(P,!0),I[L])}u.push(I),E.push(e.morphTargetInfluences[b]),e.morphTargetDictionary!==void 0&&C.push(x[b])}l.weights=E,C.length>0&&(l.extras={},l.extras.targetNames=C)}const _=Array.isArray(e.material);if(_&&a.groups.length===0)return null;let f=!1;if(_&&a.index===null){const E=[];for(let C=0,x=a.attributes.position.count;C<x;C++)E[C]=C;a.setIndex(E),f=!0}const m=_?e.material:[e.material],y=_?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let E=0,C=y.length;E<C;E++){const x={mode:o,attributes:c};if(this.serializeUserData(a,x),u.length>0&&(x.targets=u),a.index!==null){let I=this.getUID(a.index);(y[E].start!==void 0||y[E].count!==void 0)&&(I+=":"+y[E].start+":"+y[E].count),t.attributes.has(I)?x.indices=t.attributes.get(I):(x.indices=this.processAccessor(a.index,a,y[E].start,y[E].count),t.attributes.set(I,x.indices)),x.indices===null&&delete x.indices}const b=await this.processMaterialAsync(m[y[E].materialIndex]);b!==null&&(x.material=b),h.push(x)}f===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(E){E.writeMesh&&E.writeMesh(e,l)});const w=n.meshes.push(l)-1;return t.meshes.set(r,w),w}detectMeshQuantization(e,t){if(this.extensionsUsed[Eo])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const i=e.split("_",1)[0];Kh[i]&&Kh[i].includes(n)&&(this.extensionsUsed[Eo]=!0,this.extensionsRequired[Eo]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:Ti.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=ma.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,a=[],o=[];for(let c=0;c<r.length;++c){const h=r[c],u=Qe.parseTrackName(h.name);let d=Qe.findNode(t,u.nodeName);const p=Zh[u.propertyName];if(u.objectName==="bones"&&(d.isSkinnedMesh===!0?d=d.skeleton.getBoneByName(u.objectIndex):d=void 0),!d||!p){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}const g=1;let _=h.values.length/h.times.length;p===Zh.morphTargetInfluences&&(_/=d.morphTargetInfluences.length);let f;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(f="CUBICSPLINE",_/=3):h.getInterpolation()===ir?f="STEP":f="LINEAR",o.push({input:this.processAccessor(new gt(h.times,g)),output:this.processAccessor(new gt(h.values,_)),interpolation:f}),a.push({sampler:o.length-1,target:{node:i.get(d),path:p}})}const l={name:e.name||"clip_"+n.animations.length,samplers:o,channels:a};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const a=e.skeleton.bones[0];if(a===void 0)return null;const o=[],l=new Float32Array(r.bones.length*16),c=new Oe;for(let u=0;u<r.bones.length;++u)o.push(n.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new gt(l,16)),joints:o,skeleton:n.get(a)}),i.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const o=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();qs(o,[0,0,0,1])||(r.rotation=o),qs(l,[0,0,0])||(r.translation=l),qs(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),Ox(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const o=await this.processMeshAsync(e);o!==null&&(r.mesh=o)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);const a=t.nodes.push(r)-1;if(i.set(e,a),e.children.length>0){const o=[];for(let l=0,c=e.children.length;l<c;l++){const h=e.children[l];if(h.visible||n.onlyVisible===!1){const u=await this.processNodeAsync(h);u!==null&&o.push(u)}}o.length>0&&(r.children=o)}return await this._invokeAllAsync(function(o){o.writeNode&&o.writeNode(e,r)}),a}async processSceneAsync(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const r=[];for(let a=0,o=e.children.length;a<o;a++){const l=e.children[a];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}async processObjectsAsync(e){const t=new _s;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof _s?await this.processSceneAsync(e[i]):n.push(e[i]);n.length>0&&await this.processObjectsAsync(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);await this._invokeAllAsync(function(i){i.afterParse&&i.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}}class Vx{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,i=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(1-e.penumbra)*e.angle,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);const o=i.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}}class Gx{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class Wx{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const a={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(a,e.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const a={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){const a={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(a.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(a,e.clearcoatNormalMap),r.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Xx{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const i=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class $x{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const a={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(a,e.iridescenceMap),r.iridescenceTexture=a}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const a={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(a,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class jx{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const a={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(a,e.transmissionMap),r.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class qx{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const a={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(a,e.thicknessMap),r.thicknessTexture=a}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Yx{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const i=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Kx{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(Dx)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.specularIntensityMap){const a={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(a,e.specularIntensityMap),r.specularTexture=a}if(e.specularColorMap){const a={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(a,e.specularColorMap),r.specularColorTexture=a}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Zx{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.sheenRoughnessMap){const a={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(a,e.sheenRoughnessMap),r.sheenRoughnessTexture=a}if(e.sheenColorMap){const a={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(a,e.sheenColorMap),r.sheenColorTexture=a}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Jx{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.anisotropyMap){const a={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(a,e.anisotropyMap),r.anisotropyTexture=a}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Qx{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const i=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class e2{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.bumpMap){const a={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(a,e.bumpMap),r.bumpTexture=a}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class t2{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,i=e,r=new Float32Array(i.count*3),a=new Float32Array(i.count*4),o=new Float32Array(i.count*3),l=new Oe,c=new N,h=new Zt,u=new N;for(let p=0;p<i.count;p++)i.getMatrixAt(p,l),l.decompose(c,h,u),c.toArray(r,p*3),h.toArray(a,p*4),u.toArray(o,p*3);const d={TRANSLATION:n.processAccessor(new gt(r,3)),ROTATION:n.processAccessor(new gt(a,4)),SCALE:n.processAccessor(new gt(o,3))};i.instanceColor&&(d._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}ma.Utils={insertKeyframe:function(s,e){const n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),a=s.createInterpolant(new s.ValueBufferType(n));let o;if(s.times.length===0){i[0]=e;for(let l=0;l<n;l++)r[l]=0;o=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(a.evaluate(e),0),r.set(s.values,n),o=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(a.evaluate(e),s.values.length),o=i.length-1}else for(let l=0;l<s.times.length;l++){if(Math.abs(s.times[l]-e)<.001)return l;if(s.times[l]<e&&s.times[l+1]>e){i.set(s.times.slice(0,l+1),0),i[l+1]=e,i.set(s.times.slice(l+1),l+2),r.set(s.values.slice(0,(l+1)*n),0),r.set(a.evaluate(e),(l+1)*n),r.set(s.values.slice((l+1)*n),(l+2)*n),o=l+1;break}}return s.times=i,s.values=r,o},mergeMorphTargetTracks:function(s,e){const t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let a=i[r];const o=Qe.parseTrackName(a.name),l=Qe.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(oa)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let u;if(n[l.uuid]===void 0){u=a.clone();const p=new u.ValueBufferType(c*u.times.length);for(let g=0;g<u.times.length;g++)p[g*c+h]=u.values[g];u.name=(o.nodeName||"")+".morphTargetInfluences",u.values=p,n[l.uuid]=u,t.push(u);continue}const d=a.createInterpolant(new a.ValueBufferType(1));u=n[l.uuid];for(let p=0;p<u.times.length;p++)u.values[p*c+h]=d.evaluate(u.times[p]);for(let p=0;p<a.times.length;p++){const g=this.insertKeyframe(u,a.times[p]);u.values[g*c+h]=a.values[p]}}return s.tracks=t,s},toFloat32BufferAttribute:function(s){const e=new gt(new Float32Array(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return e.array.set(s.array),e;for(let t=0,n=s.count;t<n;t++)for(let i=0;i<s.itemSize;i++)e.setComponent(t,i,s.getComponent(t,i));return e}};function Wr(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var To={exports:{}},tu;function n2(){return tu||(tu=1,(function(s,e){(function(t){s.exports=t()})(function(){return(function t(n,i,r){function a(c,h){if(!i[c]){if(!n[c]){var u=typeof Wr=="function"&&Wr;if(!h&&u)return u(c,!0);if(o)return o(c,!0);var d=new Error("Cannot find module '"+c+"'");throw d.code="MODULE_NOT_FOUND",d}var p=i[c]={exports:{}};n[c][0].call(p.exports,function(g){var _=n[c][1][g];return a(_||g)},p,p.exports,t,n,i,r)}return i[c].exports}for(var o=typeof Wr=="function"&&Wr,l=0;l<r.length;l++)a(r[l]);return a})({1:[function(t,n,i){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}n.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(h){if(!o(h)||h<0||isNaN(h))throw TypeError("n must be a positive number");return this._maxListeners=h,this},r.prototype.emit=function(h){var u,d,p,g,_,f;if(this._events||(this._events={}),h==="error"&&(!this._events.error||l(this._events.error)&&!this._events.error.length)){if(u=arguments[1],u instanceof Error)throw u;var m=new Error('Uncaught, unspecified "error" event. ('+u+")");throw m.context=u,m}if(d=this._events[h],c(d))return!1;if(a(d))switch(arguments.length){case 1:d.call(this);break;case 2:d.call(this,arguments[1]);break;case 3:d.call(this,arguments[1],arguments[2]);break;default:g=Array.prototype.slice.call(arguments,1),d.apply(this,g)}else if(l(d))for(g=Array.prototype.slice.call(arguments,1),f=d.slice(),p=f.length,_=0;_<p;_++)f[_].apply(this,g);return!0},r.prototype.addListener=function(h,u){var d;if(!a(u))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",h,a(u.listener)?u.listener:u),this._events[h]?l(this._events[h])?this._events[h].push(u):this._events[h]=[this._events[h],u]:this._events[h]=u,l(this._events[h])&&!this._events[h].warned&&(c(this._maxListeners)?d=r.defaultMaxListeners:d=this._maxListeners,d&&d>0&&this._events[h].length>d&&(this._events[h].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[h].length),typeof console.trace=="function"&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(h,u){if(!a(u))throw TypeError("listener must be a function");var d=!1;function p(){this.removeListener(h,p),d||(d=!0,u.apply(this,arguments))}return p.listener=u,this.on(h,p),this},r.prototype.removeListener=function(h,u){var d,p,g,_;if(!a(u))throw TypeError("listener must be a function");if(!this._events||!this._events[h])return this;if(d=this._events[h],g=d.length,p=-1,d===u||a(d.listener)&&d.listener===u)delete this._events[h],this._events.removeListener&&this.emit("removeListener",h,u);else if(l(d)){for(_=g;_-- >0;)if(d[_]===u||d[_].listener&&d[_].listener===u){p=_;break}if(p<0)return this;d.length===1?(d.length=0,delete this._events[h]):d.splice(p,1),this._events.removeListener&&this.emit("removeListener",h,u)}return this},r.prototype.removeAllListeners=function(h){var u,d;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[h]&&delete this._events[h],this;if(arguments.length===0){for(u in this._events)u!=="removeListener"&&this.removeAllListeners(u);return this.removeAllListeners("removeListener"),this._events={},this}if(d=this._events[h],a(d))this.removeListener(h,d);else if(d)for(;d.length;)this.removeListener(h,d[d.length-1]);return delete this._events[h],this},r.prototype.listeners=function(h){var u;return!this._events||!this._events[h]?u=[]:a(this._events[h])?u=[this._events[h]]:u=this._events[h].slice(),u},r.prototype.listenerCount=function(h){if(this._events){var u=this._events[h];if(a(u))return 1;if(u)return u.length}return 0},r.listenerCount=function(h,u){return h.listenerCount(u)};function a(h){return typeof h=="function"}function o(h){return typeof h=="number"}function l(h){return typeof h=="object"&&h!==null}function c(h){return h===void 0}},{}],2:[function(t,n,i){var r,a,o,l,c;c=navigator.userAgent.toLowerCase(),l=navigator.platform.toLowerCase(),r=c.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],o=r[1]==="ie"&&document.documentMode,a={name:r[1]==="version"?r[3]:r[1],version:o||parseFloat(r[1]==="opera"&&r[4]?r[4]:r[2]),platform:{name:c.match(/ip(?:ad|od|hone)/)?"ios":(c.match(/(?:webos|android)/)||l.match(/mac|win|linux/)||["other"])[0]}},a[a.name]=!0,a[a.name+parseInt(a.version,10)]=!0,a.platform[a.platform.name]=!0,n.exports=a},{}],3:[function(t,n,i){var r,a,o,l=function(d,p){for(var g in p)c.call(p,g)&&(d[g]=p[g]);function _(){this.constructor=d}return _.prototype=p.prototype,d.prototype=new _,d.__super__=p.prototype,d},c={}.hasOwnProperty,h=[].indexOf||function(d){for(var p=0,g=this.length;p<g;p++)if(p in this&&this[p]===d)return p;return-1},u=[].slice;r=t("events").EventEmitter,o=t("./browser.coffee"),a=(function(d){var p,g;l(_,d),p={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},g={delay:500,copy:!1};function _(f){var m,y,w;this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(f);for(y in p)w=p[y],(m=this.options)[y]==null&&(m[y]=w)}return _.prototype.setOption=function(f,m){if(this.options[f]=m,this._canvas!=null&&(f==="width"||f==="height"))return this._canvas[f]=m},_.prototype.setOptions=function(f){var m,y,w;y=[];for(m in f)c.call(f,m)&&(w=f[m],y.push(this.setOption(m,w)));return y},_.prototype.addFrame=function(f,m){var y,w;m==null&&(m={}),y={},y.transparent=this.options.transparent;for(w in g)y[w]=m[w]||g[w];if(this.options.width==null&&this.setOption("width",f.width),this.options.height==null&&this.setOption("height",f.height),typeof ImageData<"u"&&ImageData!==null&&f instanceof ImageData)y.data=f.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!==null&&f instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!==null&&f instanceof WebGLRenderingContext)m.copy?y.data=this.getContextData(f):y.context=f;else if(f.childNodes!=null)m.copy?y.data=this.getImageData(f):y.image=f;else throw new Error("Invalid image");return this.frames.push(y)},_.prototype.render=function(){var f,m,y;if(this.running)throw new Error("Already running");if(this.options.width==null||this.options.height==null)throw new Error("Width and height must be set prior to rendering");if(this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(function(){var w,E,C;for(C=[],w=0,E=this.frames.length;0<=E?w<E:w>E;0<=E?++w:--w)C.push(null);return C}).call(this),m=this.spawnWorkers(),this.options.globalPalette===!0)this.renderNextFrame();else for(f=0,y=m;0<=y?f<y:f>y;0<=y?++f:--f)this.renderNextFrame();return this.emit("start"),this.emit("progress",0)},_.prototype.abort=function(){for(var f;f=this.activeWorkers.shift(),f!=null;)this.log("killing active worker"),f.terminate();return this.running=!1,this.emit("abort")},_.prototype.spawnWorkers=function(){var f,m,y;return f=Math.min(this.options.workers,this.frames.length),(function(){y=[];for(var w=m=this.freeWorkers.length;m<=f?w<f:w>f;m<=f?w++:w--)y.push(w);return y}).apply(this).forEach((function(w){return function(E){var C;return w.log("spawning worker "+E),C=new Worker(w.options.workerScript),C.onmessage=function(x){return w.activeWorkers.splice(w.activeWorkers.indexOf(C),1),w.freeWorkers.push(C),w.frameFinished(x.data)},w.freeWorkers.push(C)}})(this)),f},_.prototype.frameFinished=function(f){var m,y;if(this.log("frame "+f.index+" finished - "+this.activeWorkers.length+" active"),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[f.index]=f,this.options.globalPalette===!0&&(this.options.globalPalette=f.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(m=1,y=this.freeWorkers.length;1<=y?m<y:m>y;1<=y?++m:--m)this.renderNextFrame();return h.call(this.imageParts,null)>=0?this.renderNextFrame():this.finishRendering()},_.prototype.finishRendering=function(){var f,m,y,w,E,C,x,b,I,v,S,T,L,P,z,U;for(b=0,P=this.imageParts,E=0,I=P.length;E<I;E++)m=P[E],b+=(m.data.length-1)*m.pageSize+m.cursor;for(b+=m.pageSize-m.cursor,this.log("rendering finished - filesize "+Math.round(b/1e3)+"kb"),f=new Uint8Array(b),T=0,z=this.imageParts,C=0,v=z.length;C<v;C++)for(m=z[C],U=m.data,y=x=0,S=U.length;x<S;y=++x)L=U[y],f.set(L,T),y===m.data.length-1?T+=m.cursor:T+=m.pageSize;return w=new Blob([f],{type:"image/gif"}),this.emit("finished",w,f)},_.prototype.renderNextFrame=function(){var f,m,y;if(this.freeWorkers.length===0)throw new Error("No free workers");if(!(this.nextFrame>=this.frames.length))return f=this.frames[this.nextFrame++],y=this.freeWorkers.shift(),m=this.getTask(f),this.log("starting frame "+(m.index+1)+" of "+this.frames.length),this.activeWorkers.push(y),y.postMessage(m)},_.prototype.getContextData=function(f){return f.getImageData(0,0,this.options.width,this.options.height).data},_.prototype.getImageData=function(f){var m;return this._canvas==null&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),m=this._canvas.getContext("2d"),m.setFill=this.options.background,m.fillRect(0,0,this.options.width,this.options.height),m.drawImage(f,0,0),this.getContextData(m)},_.prototype.getTask=function(f){var m,y;if(m=this.frames.indexOf(f),y={index:m,last:m===this.frames.length-1,delay:f.delay,transparent:f.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:o.name==="chrome"},f.data!=null)y.data=f.data;else if(f.context!=null)y.data=this.getContextData(f.context);else if(f.image!=null)y.data=this.getImageData(f.image);else throw new Error("Invalid frame");return y},_.prototype.log=function(){var f;if(f=1<=arguments.length?u.call(arguments,0):[],!!this.options.debug)return console.log.apply(console,f)},_})(r),n.exports=a},{"./browser.coffee":2,events:1}]},{},[3])(3)})})(To)),To.exports}var i2=n2();const vd=sx(i2),yd="/muonline-bmd-viewer/app/assets/gif.worker-CjkyQP34.js";function At(){return window.electronAPI?.isElectron===!0}function na(s){return!At()||!window.electronAPI?null:window.electronAPI.getFilePath(s)}async function s2(s){return!At()||!window.electronAPI?(console.warn("openFileDialog is only available in Electron"),null):window.electronAPI.openFile({filters:s})}async function sc(){return!At()||!window.electronAPI?(console.warn("openDirectoryDialog is only available in Electron"),null):window.electronAPI.openDirectory()}async function hr(s){return!At()||!window.electronAPI?(console.warn("readFileFromPath is only available in Electron"),null):window.electronAPI.readFile(s)}async function Md(s){return!At()||!window.electronAPI?(console.warn("scanWorldFolders is only available in Electron"),[]):window.electronAPI.scanWorldFolders(s)}async function Sd(s,e){return!At()||!window.electronAPI?(console.warn("readTerrainWorldFiles is only available in Electron"),[]):window.electronAPI.readTerrainWorldFiles(s,e)}async function bd(s,e){return!At()||!window.electronAPI?(console.warn("searchTextures is only available in Electron"),{}):window.electronAPI.searchTextures(s,e)}function ga(s,e){const t=new Blob([e]);return new File([t],s)}async function Rl(s,e){if(!At()||!window.electronAPI)return console.warn("autoSearchTextures is only available in Electron"),{};if(!s||e.length===0)return console.warn("autoSearchTextures: invalid params",{bmdFilePath:s,requiredTextures:e}),{};const t=Math.max(s.lastIndexOf("/"),s.lastIndexOf("\\")),n=s.substring(0,t);let i=await window.electronAPI.searchTextures(n,e);const r=Object.keys(i).length,a=e.length;if(r<a){console.log(`[Texture Search] Found ${r}/${a} textures in current directory, searching parent directory...`);const o=Math.max(n.lastIndexOf("/"),n.lastIndexOf("\\"));if(o>0){const l=n.substring(0,o),c=e.filter(h=>{const u=h.split(/[\\/]/).pop().toLowerCase().replace(/\.[^.]+$/,"");return!i[u]});if(c.length>0){const h=await window.electronAPI.searchTextures(l,c);i={...i,...h};const u=Object.keys(i).length;console.log(`[Texture Search] After parent search: ${u}/${a} textures found`)}}}return i}const nu=Object.freeze(Object.defineProperty({__proto__:null,autoSearchTextures:Rl,createFileFromElectronData:ga,getFilePathFromFile:na,isElectron:At,openDirectoryDialog:sc,openFileDialog:s2,readFileFromPath:hr,readTerrainWorldFiles:Sd,scanWorldFolders:Md,searchTextures:bd},Symbol.toStringTag,{value:"Module"})),iu=new Uint8Array([252,207,171]);function r2(s){for(let e=0;e<s.length;e++)s[e]^=iu[e%iu.length]}function Ao(s,e,t){if(e+t>s.byteLength)return"";const n=new Uint8Array(s.buffer,s.byteOffset+e,t),i=n.indexOf(0),r=i>=0?n.subarray(0,i):n;return new TextDecoder("windows-1252",{fatal:!1}).decode(r).trim()}function su(s){return s.replace(/\\/g,"/").replace(/^\/+/,"")}function a2(s,e){const t=su(s.trim()),n=su(e.trim());return n?!t||n.includes("/")?n:t.endsWith("/")?`${t}${n}`:`${t}/${n}`:""}function o2(s){const e=new DataView(s);if(e.byteLength<8)return[];const t=e.getInt32(0,!0);if(t<=0)return[];const n=Math.floor((e.byteLength-8)/t);if(n<=0)return[];const i=[];let r=4;for(let a=0;a<t&&r+n<=e.byteLength-4;a++){const o=new Uint8Array(s,r,n),l=new Uint8Array(o);r2(l);const c=new DataView(l.buffer,l.byteOffset,l.byteLength),h=c.getInt32(0,!0),u=c.getUint16(4,!0),d=c.getUint16(6,!0),p=Ao(c,8,260),g=Ao(c,268,260),_=Ao(c,528,64),f=c.getUint8(602),m=c.getUint8(603),y=a2(p,g);i.push({index:h,group:u,id:d,modelFolder:p,modelName:g,itemName:_,modelPath:y,width:f,height:m}),r+=n}return i}class Ed extends vs{skinned;size;_vertex=new N;_skinnedVertex=new N;_normal=new N;_indices;constructor(e,t,n){const r=e.geometry.getAttribute("position"),a=r?r.count:0,l=a>0?Math.min(a,2e3):0,c=new Uint32Array(l||0);for(let p=0;p<l;p++)c[p]=Math.floor(p/l*a);const h=new Float32Array(c.length*2*3),u=new Ot;u.setAttribute("position",new gt(h,3));const d=new Ci({color:n,toneMapped:!1});super(u,d),this.skinned=e,this.size=t,this._indices=c,this.matrixAutoUpdate=!1}update(){const e=this.skinned,t=e.geometry,n=t.getAttribute("position"),i=t.getAttribute("normal"),r=this.geometry.getAttribute("position");if(!n||!i||!r||!this._indices.length)return;e.updateMatrixWorld(!0);const a=e.matrixWorld,o=new Ge().getNormalMatrix(a),l=this.size,c=this._vertex,h=this._skinnedVertex,u=this._normal;for(let d=0;d<this._indices.length;d++){const p=this._indices[d];c.fromBufferAttribute(n,p),h.copy(c),e.applyBoneTransform(p,h),h.applyMatrix4(a),u.fromBufferAttribute(i,p),u.applyMatrix3(o).normalize().multiplyScalar(l);const g=d*2;r.setXYZ(g,h.x,h.y,h.z),r.setXYZ(g+1,h.x+u.x,h.y+u.y,h.z+u.z)}r.needsUpdate=!0,this.matrixWorld.identity()}}class wi{static disposeTexture(e){e&&e.dispose()}static disposeTextureCache(e){e.forEach(t=>{t.dispose()}),e.clear()}static disposeMaterial(e){if(!e)return;const t=e;t.map instanceof vt&&this.disposeTexture(t.map),t.normalMap instanceof vt&&this.disposeTexture(t.normalMap),t.alphaMap instanceof vt&&this.disposeTexture(t.alphaMap),t.emissiveMap instanceof vt&&this.disposeTexture(t.emissiveMap),t.roughnessMap instanceof vt&&this.disposeTexture(t.roughnessMap),t.metalnessMap instanceof vt&&this.disposeTexture(t.metalnessMap),e.dispose()}static disposeGeometry(e){e&&e.dispose()}static disposeObject3D(e){e&&(e.traverse(t=>{if(t.geometry&&this.disposeGeometry(t.geometry),t.material){const n=t.material;Array.isArray(n)?n.forEach(i=>this.disposeMaterial(i)):this.disposeMaterial(n)}}),e.parent&&e.parent.remove(e))}static disposeShaderMaterials(e){e.forEach(t=>t.dispose()),e.clear()}static disposeMixer(e){return e&&e.stopAllAction(),null}static disposeObjectArray(e){e.forEach(t=>this.disposeObject3D(t)),e.length=0}}const l2={pixelCount:0,blackRatio:0,veryDarkRatio:0,brightRatio:0,contentCoverage:0,borderBlackRatio:0,borderTransparentRatio:0,transparentRatio:0,semiTransparentRatio:0,binaryAlphaRatio:0,averageLuma:0,lumaStdDev:0,brightEnergyRatio:0},c2={additive:0,normal:0,opaque:0},h2=["glow","flare","spark","fire","smoke","trail","aura","halo","effect","fx","energy","beam","light","shine","flash","particle"],u2=["alpha","mask","decal","leaf","foliage","hair","cape","cloth","shadow","smoke","wing"],d2=["skin","body","armor","armour","face","helm","helmet","pants","gloves","boots","shield","sword","weapon"];function on(s){return Math.max(0,Math.min(1,s))}function f2(s){if(!s||typeof s!="object"&&typeof s!="function")return!1;const e=s;return typeof e.width=="number"&&typeof e.height=="number"}function Co(s,e){let t=0;for(const n of e)s.includes(n)&&t++;return t}function p2(s){const e=s.toLowerCase(),t=Co(e,h2),n=Co(e,u2),i=Co(e,d2),r=Math.min(.16,t*.055),a=Math.min(.12,n*.045),o=Math.min(.1,i*.04),l=[];return t>0&&l.push("name:additive"),n>0&&l.push("name:alpha"),i>0&&l.push("name:opaque"),{additive:r,normal:a,opaque:o,reason:l.join(", ")}}function Vs(s){return{mode:"opaque",alphaStyle:"none",confidence:0,reason:s,metrics:l2,scores:c2}}function m2(s){return s.transparentRatio+s.semiTransparentRatio<.015?"none":s.semiTransparentRatio>.11?"soft":s.transparentRatio>.08&&s.binaryAlphaRatio>.88&&s.semiTransparentRatio<.075?"cutout":s.semiTransparentRatio>.045?"soft":"cutout"}function g2(s,e){return e>.18&&s.additive<.82?"normal":s.additive>.72&&e<.09?"additive":s.normal>=s.additive+.08&&s.normal>=.36?"normal":s.additive>=s.normal+.06&&s.additive>=.44?"additive":s.opaque>=s.normal&&s.opaque>=s.additive?"opaque":s.normal>=s.additive?"normal":"additive"}function _2(s,e){const t=[s.additive,s.normal,s.opaque].sort((o,l)=>l-o),n=t[0],i=t[1]??0,r=n-i,a=s[e];return on(a*.72+r*.55)}function Ro(s){switch(s){case"additive":return"Additive";case"normal":return"Normal";default:return"Opaque"}}function ur(s,e=""){const t=s.userData?.blendHeuristicMetrics;let n;if(t)n=t;else{if(typeof document>"u")return Vs("No DOM environment");const y=s.image;if(!f2(y)||y.width<1||y.height<1)return Vs("Texture image is not drawable");const w=Math.max(1,Math.floor(y.width)),E=Math.max(1,Math.floor(y.height)),x=Math.min(1,Math.sqrt(36864/(w*E))),b=Math.max(1,Math.floor(w*x)),I=Math.max(1,Math.floor(E*x)),v=document.createElement("canvas");v.width=b,v.height=I;const S=v.getContext("2d",{willReadFrequently:!0});if(!S)return Vs("2D canvas context unavailable");try{S.clearRect(0,0,b,I),S.drawImage(y,0,0,b,I)}catch{return Vs("drawImage failed for texture source")}const T=S.getImageData(0,0,b,I).data,L=T.length/4;if(L===0)return Vs("Texture has zero sampled pixels");const P=Math.max(1,Math.floor(Math.min(b,I)*.03));let z=0,U=0,H=0,O=0,$=0,Q=0,ee=0,ie=0,Be=0,ke=0,lt=0,tt=0,q=0,Z=0,_e=0;for(let Mt=0;Mt<I;Mt++)for(let Xe=0;Xe<b;Xe++){const Ze=(Mt*b+Xe)*4,ot=T[Ze],Ve=T[Ze+1],St=T[Ze+2],D=T[Ze+3]/255,pt=Math.max(ot,Ve,St),nt=Math.min(ot,Ve,St),it=(.2126*ot+.7152*Ve+.0722*St)/255,be=pt===0?0:(pt-nt)/pt,R=D<.06,M=!R&&D<.95,B=D>.02&&pt<42&&it<.12,j=D>.02&&pt<28&&it<.08,Y=D>.12&&pt>168&&it>.46,X=D>.14&&(it>.11||be>.16);if(R&&$++,M&&Q++,D<.04&&ee++,D>.96&&ie++,j&&z++,B&&U++,Y&&H++,X&&O++,D>.02){const se=it*D;tt+=se,q+=se*se,_e++,Y&&(Z+=se)}(Xe<P||Mt<P||Xe>=b-P||Mt>=I-P)&&(Be++,(j||B)&&ke++,R&&lt++)}const Fe=_e>0?tt/_e:0,ye=_e>0?q/_e-Fe*Fe:0,Ke=Math.sqrt(Math.max(0,ye));n={pixelCount:L,blackRatio:z/L,veryDarkRatio:U/L,brightRatio:H/L,contentCoverage:O/L,borderBlackRatio:Be>0?ke/Be:0,borderTransparentRatio:Be>0?lt/Be:0,transparentRatio:$/L,semiTransparentRatio:Q/L,binaryAlphaRatio:(ee+ie)/L,averageLuma:Fe,lumaStdDev:Ke,brightEnergyRatio:tt>0?Z/tt:0},s.userData.blendHeuristicMetrics=n}const i=`${s.name||""} ${e||""}`.trim(),r=p2(i),a=on(n.transparentRatio*2.35+n.semiTransparentRatio*1.85+n.borderTransparentRatio*.72),o=on(n.semiTransparentRatio*2.15+(1-n.binaryAlphaRatio)*.55),l=on(n.transparentRatio*1.8+n.borderTransparentRatio*.9+n.binaryAlphaRatio*.42-n.semiTransparentRatio*1.5);let c=0;c+=n.borderBlackRatio*.28,c+=n.blackRatio*.2,c+=n.veryDarkRatio*.08,c+=on((.48-n.contentCoverage)/.48)*.2,c+=on((n.brightEnergyRatio-.22)/.45)*.16,c+=on((n.lumaStdDev-.16)/.42)*.08,c+=r.additive;let h=0;h+=on(a*.85+n.semiTransparentRatio*1.4),n.brightRatio<.004&&(h+=.22),n.contentCoverage>.62&&(h+=.18),n.averageLuma>.46&&(h+=.15),c=on(c-h);let u=0;u+=a*.68,u+=o*.18,u+=l*.11,u+=r.normal,c>.72&&a<.05&&(u-=.12),u=on(u);let d=0;d+=(1-a)*.56,d+=on((n.contentCoverage-.33)/.67)*.24,d+=on((n.averageLuma-.09)/.75)*.1,d+=(1-c)*.1,d+=r.opaque,d=on(d);const p={additive:c,normal:u,opaque:d},g=g2(p,a),_=g==="normal"?m2(n):"none",f=_2(p,g),m=[];return g==="additive"?m.push("dark border + sparse bright energy"):g==="normal"?m.push(`alpha detected (${_})`):m.push("solid surface profile"),r.reason&&m.push(r.reason),{mode:g,alphaStyle:_,confidence:f,reason:m.join("; "),metrics:n,scores:p}}function dr(s,e){const t=typeof e=="string"?e:e.mode,n=typeof e=="string"?"none":e.mode==="normal"?e.alphaStyle:"none";if(t==="additive"){s.blending=er,s.transparent=!0,s.depthWrite=!1,"alphaTest"in s&&(s.alphaTest=0),s.needsUpdate=!0;return}if(t==="normal"){s.blending=Vn,s.transparent=!0,n==="cutout"?(s.depthWrite=!0,"alphaTest"in s&&(s.alphaTest=.34)):(s.depthWrite=!1,"alphaTest"in s&&(s.alphaTest=.03)),s.needsUpdate=!0;return}s.blending=kt,s.transparent=!1,s.depthWrite=!0,"alphaTest"in s&&(s.alphaTest=0),s.needsUpdate=!0}const x2=[".jpg",".jpeg",".png",".tga",".ozj",".ozt"],v2=[{value:1,label:"Dark Wizard"},{value:201,label:"Soul Master"},{value:301,label:"Grand Master"},{value:401,label:"Soul Wizard"},{value:2,label:"Dark Knight"},{value:202,label:"Blade Knight"},{value:302,label:"Blade Master"},{value:402,label:"Dragon Knight"},{value:3,label:"Fairy Elf"},{value:203,label:"Muse Elf"},{value:303,label:"High Elf"},{value:403,label:"Noble Elf"},{value:4,label:"Magic Gladiator"},{value:304,label:"Duel Master"},{value:404,label:"Magic Knight"},{value:5,label:"Dark Lord"},{value:305,label:"Lord Emperor"},{value:405,label:"Empire Lord"},{value:6,label:"Summoner"},{value:206,label:"Bloody Summoner"},{value:306,label:"Dimension Master"},{value:406,label:"Dimension Summoner"},{value:7,label:"Rage Fighter"},{value:307,label:"Fist Master"},{value:407,label:"Fist Blazer"},{value:8,label:"Glow Lancer"},{value:308,label:"Mirage Lancer"},{value:408,label:"Shining Lancer"},{value:9,label:"Rune Mage"},{value:209,label:"Rune Spell Master"},{value:309,label:"Grand Rune Master"},{value:409,label:"Majestic Rune Wizard"},{value:10,label:"Slayer"},{value:210,label:"Royal Slayer"},{value:310,label:"Master Slayer"},{value:410,label:"Slaughterer"},{value:11,label:"Gun Crusher"},{value:211,label:"Gun Breaker"},{value:311,label:"Master Gun Breaker"},{value:411,label:"Heist Gun Crasher"},{value:12,label:"White Wizard"},{value:212,label:"Light Master"},{value:312,label:"Shine Wizard"},{value:412,label:"Shine Master"},{value:13,label:"Mage"},{value:213,label:"Wo Mage"},{value:313,label:"Arch Mage"},{value:413,label:"Mystic Mage"},{value:14,label:"Illusion Knight"},{value:214,label:"Mirage Knight"},{value:314,label:"Illusion Master"},{value:414,label:"Mystic Knight"},{value:15,label:"Alchemist"},{value:215,label:"Alchemic Master"},{value:315,label:"Alchemic Force"},{value:415,label:"Creator"}];function ji(s){let e=s.replace(/\\/g,"/").replace(/^\/+/,"");return e.toLowerCase().startsWith("data/")&&(e=e.slice(5)),e.toLowerCase()}function ru(s){return(s.replace(/\\/g,"/").split("/").pop()||"").toLowerCase().replace(/\.[^.]+$/,"")}function Gs(s){const e=s.toLowerCase(),t=e.lastIndexOf(".");return t>=0?e.slice(t):""}function y2(s){return s>=400?s-400:s>=300?s-300:s>=200?s-200:s}function M2(s){return s.toString().padStart(2,"0")}class rc{scene;camera;renderer;controls;clock=new Kl;ambientLight;hemisphereLight;directionalLight;rimLight;mixer=null;currentAction=null;bmdLoader=new ic;textureLoader=new Ra;dataFiles=new Map;textureIndex=new Map;dataRootPath=null;itemDefinitions=[];itemByKey=new Map;textureCache=new Map;electronTextureMap=new Map;missingDataPaths=new Set;characterRoot=null;baseSkeleton=null;baseBindMatrix=null;characterOffset=new N;characterHeightOffset=80;hasFramed=!1;lastClassValue=null;currentClassValue=null;playerAnimations=null;animationSpeed=.2;selectedAnimationIndex=null;characterScale=1;itemLevel=0;itemGlowColor=new Re(1,1,1);itemIsExcellent=!1;itemIsAncient=!1;itemExcellentIntensity=1;itemShaderMaterials=new Set;skeletonHelper=null;boundingBoxHelper=null;axesHelper=null;normalHelpers=[];normalsVisible=!1;normalsUpdateCounter=0;isRecordingGif=!1;meshRefs=[];gridHelper=null;isActive=!0;isAutoRotating=!0;userIsInteracting=!1;buildToken=0;containerEl;dataDropZone;dataInput;dataStatus;classSelect;helmSelect;armorSelect;pantsSelect;glovesSelect;bootsSelect;leftWeaponSelect;rightWeaponSelect;wingSelect;animationSelect;autoRotateCheckbox;speedSlider;speedValueEl;scaleSlider;scaleValueEl;itemLevelSlider;itemLevelValueEl;itemExcellentCheckbox;itemAncientCheckbox;itemExcellentIntensitySlider;itemExcellentIntensityValueEl;exportGifBtn;gifWidthInput;gifHeightInput;gifDelayInput;gifFrameMultiplierInput;blendingBox;blendingList;showSkeletonCheckbox;wireframeCheckbox;showBoundingBoxCheckbox;showAxesCheckbox;showNormalsCheckbox;bgColorInput;brightnessSlider;brightnessLabel;statusEl;constructor(){this.initThree(),this.initUI(),this.animate()}setActive(e){this.isActive=e,e&&this.refreshViewport()}initThree(){const e=document.getElementById("character-canvas-container");if(!e)throw new Error("#character-canvas-container not found");this.containerEl=e,this.scene=new _s,this.scene.background=new Re(725794),this.scene.fog=new Ta(725794,.0013),this.camera=new Yt(75,e.clientWidth/e.clientHeight,.1,1e4),this.camera.position.set(0,200,400),this.renderer=new Ql({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Rt,this.renderer.toneMapping=fr,this.renderer.toneMappingExposure=1.14,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Dl,this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement);const t=new pa(this.renderer),n=new pd;this.scene.environment=t.fromScene(n).texture,n.dispose(),t.dispose(),window.addEventListener("resize",()=>{this.refreshViewport()}),this.controls=new tc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.target.set(0,90,0),this.controls.addEventListener("start",()=>{this.userIsInteracting=!0}),this.controls.addEventListener("end",()=>{this.userIsInteracting=!1}),this.ambientLight=new Yl(13493247,.42),this.hemisphereLight=new td(9033727,1120807,.52),this.directionalLight=new cr(16777215,1.7),this.directionalLight.position.set(180,260,140),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.set(2048,2048),this.directionalLight.shadow.radius=3,this.directionalLight.shadow.bias=-4e-4,this.directionalLight.shadow.camera.near=10,this.directionalLight.shadow.camera.far=1400,this.directionalLight.shadow.camera.left=-360,this.directionalLight.shadow.camera.right=360,this.directionalLight.shadow.camera.top=360,this.directionalLight.shadow.camera.bottom=-360,this.rimLight=new cr(7653887,.72),this.rimLight.position.set(-160,130,-210),this.rimLight.castShadow=!1,this.scene.add(this.ambientLight,this.hemisphereLight,this.directionalLight,this.rimLight,this.directionalLight.target),this.gridHelper=new rd(600,24,4152196,1847113);const i=this.gridHelper.material;Array.isArray(i)?i.forEach(r=>{r.transparent=!0,r.opacity=.35,r.depthWrite=!1}):(i.transparent=!0,i.opacity=.35,i.depthWrite=!1),this.gridHelper.visible=!0,this.scene.add(this.gridHelper)}initUI(){this.dataDropZone=document.getElementById("data-drop-zone"),this.dataInput=document.getElementById("data-folder-input"),this.dataStatus=document.getElementById("data-folder-status"),this.classSelect=document.getElementById("character-class-select"),this.helmSelect=document.getElementById("character-helm-select"),this.armorSelect=document.getElementById("character-armor-select"),this.pantsSelect=document.getElementById("character-pants-select"),this.glovesSelect=document.getElementById("character-gloves-select"),this.bootsSelect=document.getElementById("character-boots-select"),this.leftWeaponSelect=document.getElementById("character-left-weapon-select"),this.rightWeaponSelect=document.getElementById("character-right-weapon-select"),this.wingSelect=document.getElementById("character-wing-select"),this.animationSelect=document.getElementById("character-animation-select"),this.autoRotateCheckbox=document.getElementById("character-auto-rotate"),this.speedSlider=document.getElementById("character-speed-slider"),this.speedValueEl=document.getElementById("character-speed-value"),this.scaleSlider=document.getElementById("character-scale-slider"),this.scaleValueEl=document.getElementById("character-scale-value"),this.itemLevelSlider=document.getElementById("character-item-level"),this.itemLevelValueEl=document.getElementById("character-item-level-value"),this.itemExcellentCheckbox=document.getElementById("character-item-excellent"),this.itemAncientCheckbox=document.getElementById("character-item-ancient"),this.itemExcellentIntensitySlider=document.getElementById("character-excellent-intensity"),this.itemExcellentIntensityValueEl=document.getElementById("character-excellent-intensity-value"),this.exportGifBtn=document.getElementById("character-export-gif-btn"),this.gifWidthInput=document.getElementById("character-gif-width-input"),this.gifHeightInput=document.getElementById("character-gif-height-input"),this.gifDelayInput=document.getElementById("character-gif-delay-input"),this.gifFrameMultiplierInput=document.getElementById("character-gif-frame-multiplier-input"),this.blendingBox=document.getElementById("character-blending-controls"),this.blendingList=document.getElementById("character-blending-container"),this.showSkeletonCheckbox=document.getElementById("character-show-skeleton"),this.wireframeCheckbox=document.getElementById("character-wireframe"),this.showBoundingBoxCheckbox=document.getElementById("character-show-bbox"),this.showAxesCheckbox=document.getElementById("character-show-axes"),this.showNormalsCheckbox=document.getElementById("character-show-normals"),this.bgColorInput=document.getElementById("character-bg-color"),this.brightnessSlider=document.getElementById("character-brightness-slider"),this.brightnessLabel=document.getElementById("character-brightness-label"),this.statusEl=document.getElementById("character-status"),this.autoRotateCheckbox.addEventListener("change",()=>{this.isAutoRotating=this.autoRotateCheckbox.checked}),this.autoRotateCheckbox.checked=!1,this.isAutoRotating=this.autoRotateCheckbox.checked,this.speedSlider.value=this.animationSpeed.toString(),this.speedValueEl.textContent=`${this.animationSpeed.toFixed(2)}x`,this.speedSlider.addEventListener("input",n=>{const i=parseFloat(n.target.value);this.speedValueEl.textContent=`${i.toFixed(2)}x`,this.setAnimationSpeed(i)}),this.setAnimationSpeed(this.animationSpeed),this.scaleSlider.value=this.characterScale.toString(),this.scaleValueEl.textContent=`${this.characterScale.toFixed(2)}x`,this.scaleSlider.addEventListener("input",n=>{const i=parseFloat(n.target.value);this.scaleValueEl.textContent=`${i.toFixed(2)}x`,this.setCharacterScale(i)}),this.itemLevelSlider.value=this.itemLevel.toString(),this.itemLevelValueEl.textContent=`+${this.itemLevel}`,this.itemLevelSlider.addEventListener("input",n=>{const i=parseInt(n.target.value,10)||0;this.itemLevel=Math.min(Math.max(i,0),15),this.itemLevelValueEl.textContent=`+${this.itemLevel}`,this.updateItemShaderParams()}),this.itemExcellentCheckbox.checked=!1,this.itemAncientCheckbox.checked=!1,this.itemExcellentCheckbox.addEventListener("change",()=>{this.itemIsExcellent=this.itemExcellentCheckbox.checked,this.updateItemShaderParams()}),this.itemAncientCheckbox.addEventListener("change",()=>{this.itemIsAncient=this.itemAncientCheckbox.checked,this.updateItemShaderParams()}),this.itemExcellentIntensitySlider.value=this.itemExcellentIntensity.toString(),this.itemExcellentIntensityValueEl.textContent=`${this.itemExcellentIntensity.toFixed(2)}x`,this.itemExcellentIntensitySlider.addEventListener("input",n=>{const i=parseFloat(n.target.value);this.itemExcellentIntensity=Math.min(Math.max(i,0),2.5),this.itemExcellentIntensityValueEl.textContent=`${this.itemExcellentIntensity.toFixed(2)}x`,this.updateItemShaderParams()}),this.exportGifBtn.addEventListener("click",()=>this.exportGif()),this.showSkeletonCheckbox.addEventListener("change",()=>{this.updateSkeletonHelperState()}),this.wireframeCheckbox.addEventListener("change",()=>{this.applyWireframeState()}),this.showBoundingBoxCheckbox.addEventListener("change",()=>{this.updateBoundingBoxHelperState()}),this.showAxesCheckbox.addEventListener("change",()=>{this.updateAxesHelperState()}),this.showNormalsCheckbox.addEventListener("change",()=>{this.updateNormalsHelpersState()}),this.bgColorInput.addEventListener("input",n=>{const i=n.target.value;this.setSceneBackground(i)}),this.setSceneBackground(this.bgColorInput.value||"#0b1322"),this.brightnessSlider.addEventListener("input",n=>{const i=parseFloat(n.target.value);this.brightnessLabel.textContent=`Brightness: ${i.toFixed(2)}×`,this.setBrightness(i)});const e=parseFloat(this.brightnessSlider.value)||2;this.brightnessLabel.textContent=`Brightness: ${e.toFixed(2)}×`,this.setBrightness(e),this.populateClassSelect(),this.bindSelectChanges(),((n,i)=>{n.addEventListener("click",()=>this.handleDataSelectClick(i)),n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>n.classList.remove("drag-over")),n.addEventListener("drop",r=>{r.preventDefault(),n.classList.remove("drag-over"),r.dataTransfer?.files&&r.dataTransfer.files.length>0&&this.loadDataFolder(Array.from(r.dataTransfer.files))}),i.addEventListener("change",r=>{const a=r.target.files;a?.length&&this.loadDataFolder(Array.from(a))})})(this.dataDropZone,this.dataInput)}populateClassSelect(){this.classSelect.innerHTML="";for(const e of v2){const t=document.createElement("option");t.value=e.value.toString(),t.textContent=e.label,this.classSelect.appendChild(t)}this.classSelect.value="1"}bindSelectChanges(){const e=()=>this.scheduleRebuild();this.classSelect.addEventListener("change",e),this.helmSelect.addEventListener("change",e),this.armorSelect.addEventListener("change",e),this.pantsSelect.addEventListener("change",e),this.glovesSelect.addEventListener("change",e),this.bootsSelect.addEventListener("change",e),this.leftWeaponSelect.addEventListener("change",e),this.rightWeaponSelect.addEventListener("change",e),this.wingSelect.addEventListener("change",e),this.animationSelect.addEventListener("change",()=>{const t=parseInt(this.animationSelect.value,10);Number.isNaN(t)||!this.characterRoot?.animations?.length||this.playAnimation(t)})}async handleDataSelectClick(e){if(At()){const t=await sc();t&&this.loadDataFolder(t)}else e.click()}async loadDataFolder(e){if(this.dataStatus.textContent="Loading Data folder...",this.statusEl.textContent="Loading Data folder...",this.dataFiles.clear(),this.textureIndex.clear(),this.dataRootPath=null,this.electronTextureMap.clear(),this.missingDataPaths.clear(),this.playerAnimations=null,this.hasFramed=!1,this.lastClassValue=null,this.currentClassValue=null,this.characterOffset.set(0,0,0),typeof e=="string"){this.dataRootPath=e,await this.loadItemDatabase()?(this.dataStatus.textContent=`Loaded Data folder: ${e}`,this.statusEl.textContent="Item database loaded.",this.scheduleRebuild()):(this.dataStatus.textContent="Failed to load item.bmd from Data folder.",this.statusEl.textContent="Missing Data/Local/item.bmd");return}const t=e;if(!t.length){this.dataStatus.textContent="No files selected.";return}const i=(t[0].webkitRelativePath||t[0].name).split("/")[0];for(const a of t){const o=a.webkitRelativePath||a.name,l=o.startsWith(i+"/")?o.slice(i.length+1):o,c=ji(l);this.dataFiles.set(c,a);const h=Gs(c);if(x2.includes(h)){const u=ru(c),d=this.textureIndex.get(u)||[];d.push(c),this.textureIndex.set(u,d)}}await this.loadItemDatabase()?(this.dataStatus.textContent=`Loaded Data folder (${t.length} files)`,this.statusEl.textContent="Item database loaded.",this.scheduleRebuild()):(this.dataStatus.textContent="Failed to load item.bmd from Data folder.",this.statusEl.textContent="Missing Data/Local/item.bmd")}async loadItemDatabase(){const e=await this.readDataFile("Local/item.bmd");return e?(this.itemDefinitions=o2(e.buffer).filter(t=>t.modelPath),this.itemByKey.clear(),this.itemDefinitions.forEach(t=>{this.itemByKey.set(`${t.group}:${t.id}`,t)}),this.populateItemSelects(),!0):!1}populateItemSelects(){const e=new Map;for(const r of this.itemDefinitions){const a=e.get(r.group)||[];a.push(r),e.set(r.group,a)}const t=r=>(r||[]).slice().sort((a,o)=>a.id-o.id),n={helm:7,armor:8,pants:9,gloves:10,boots:11};this.fillSelect(this.helmSelect,t(e.get(n.helm)),"None"),this.fillSelect(this.armorSelect,t(e.get(n.armor)),"None"),this.fillSelect(this.pantsSelect,t(e.get(n.pants)),"None"),this.fillSelect(this.glovesSelect,t(e.get(n.gloves)),"None"),this.fillSelect(this.bootsSelect,t(e.get(n.boots)),"None");const i=[];for(let r=0;r<=6;r++)i.push(...e.get(r)||[]);i.sort((r,a)=>r.group-a.group||r.id-a.id),this.fillSelect(this.leftWeaponSelect,i,"None"),this.fillSelect(this.rightWeaponSelect,i,"None"),this.fillSelect(this.wingSelect,t(e.get(12)),"None")}fillSelect(e,t,n){e.innerHTML="";const i=document.createElement("option");i.value="",i.textContent=n,e.appendChild(i);for(const r of t){const a=document.createElement("option");a.value=`${r.group}:${r.id}`;const o=r.itemName||r.modelName||`Item ${r.id}`;a.textContent=`${o} (G${r.group} / ${r.id})`,e.appendChild(a)}e.value=""}scheduleRebuild(){this.itemDefinitions.length&&this.rebuildCharacter()}async rebuildCharacter(){const e=++this.buildToken;this.statusEl.textContent="Building character...";const t=parseInt(this.classSelect.value,10),n=y2(t),i=M2(n),r=this.lastClassValue!==t||!this.hasFramed,a=this.characterOffset.clone(),o=this.characterRoot?this.characterRoot.rotation.clone():null,l=this.selectedAnimationIndex;this.currentClassValue=t,this.lastClassValue=t,this.clearCharacter(),this.animationSelect.innerHTML='<option value="">No animations</option>';const c=`Player/ArmorClass${i}.bmd`,h=await this.loadBmdGroup(c);if(!h||e!==this.buildToken){this.statusEl.textContent=`Missing base model: ${c}`;return}if(this.characterRoot=h.group,this.characterRoot.name="character_root",this.tagMeshes(this.characterRoot,`Base ArmorClass${i}`,"base"),this.applySceneMaterialTuning(this.characterRoot),this.characterRoot.scale.set(this.characterScale,this.characterScale,this.characterScale),r||(this.characterRoot.position.copy(a),o&&this.characterRoot.rotation.copy(o)),this.scene.add(this.characterRoot),this.baseSkeleton=this.findSkeleton(this.characterRoot),!this.baseSkeleton){this.statusEl.textContent="No skeleton found in base model.";return}if(this.baseBindMatrix=this.findBaseBindMatrix(this.characterRoot),await this.applyTexturesForGroup(h.group),e!==this.buildToken)return;const u=await this.ensurePlayerAnimations();if(u&&u.length&&(this.characterRoot.animations=u),this.mixer=this.characterRoot.animations.length?new id(this.characterRoot):null,this.mixer&&this.characterRoot.animations.length>0){const g=l??(this.characterRoot.animations.length>1?1:0),_=Math.min(Math.max(g,0),this.characterRoot.animations.length-1);this.populateAnimationSelect(this.characterRoot.animations.length,_),this.playAnimation(_)}const d=[{path:`Player/HelmClass${i}.bmd`,label:`Base HelmClass${i}`},{path:`Player/PantClass${i}.bmd`,label:`Base PantClass${i}`},{path:`Player/GloveClass${i}.bmd`,label:`Base GloveClass${i}`},{path:`Player/BootClass${i}.bmd`,label:`Base BootClass${i}`}];for(const g of d){const _=await this.loadBmdGroup(g.path);if(!_){console.warn(`[CharacterTestScene] Missing base part: ${g.path}`);continue}if(e!==this.buildToken||(this.tagMeshes(_.group,g.label,"base"),this.applySceneMaterialTuning(_.group),await this.applyTexturesForGroup(_.group),await this.attachBodyPart(_.group),e!==this.buildToken))return}const p=[{select:this.helmSelect,type:"armor",label:"Helm"},{select:this.armorSelect,type:"armor",label:"Armor"},{select:this.pantsSelect,type:"armor",label:"Pants"},{select:this.glovesSelect,type:"armor",label:"Gloves"},{select:this.bootsSelect,type:"armor",label:"Boots"},{select:this.leftWeaponSelect,type:"weapon",bone:33,label:"Left Weapon"},{select:this.rightWeaponSelect,type:"weapon",bone:42,label:"Right Weapon"},{select:this.wingSelect,type:"wing",bone:47,label:"Wings"}];for(const g of p){const _=this.getSelectedItem(g.select);if(!_)continue;const f=`${g.label}: ${this.describeItem(_)}`;if(g.type==="armor"){const m=this.resolveArmorPath(_.modelPath),y=await this.loadBmdGroupWithFallback(m);if(!y){console.warn(`[CharacterTestScene] Missing armor model: ${_.modelPath}`);continue}if(e!==this.buildToken)return;this.tagMeshes(y.group,f,"equipment"),this.applySceneMaterialTuning(y.group),await this.applyTexturesForGroup(y.group),await this.attachBodyPart(y.group)}else{const m=await this.loadBmdGroupWithFallback(_.modelPath);if(!m){console.warn(`[CharacterTestScene] Missing attachment model: ${_.modelPath}`);continue}if(e!==this.buildToken)return;this.tagMeshes(m.group,f,"equipment"),this.applySceneMaterialTuning(m.group),this.attachToBone(m.group,g.bone??0),await this.applyTexturesForGroup(m.group)}}this.hideReplacedBaseParts(i,p),r&&this.frameCharacter(),this.meshRefs=[],this.characterRoot&&this.characterRoot.traverse(g=>{g.isMesh&&this.meshRefs.push(g)}),this.buildBlendingUI(),this.refreshRenderHelpers(),this.updateStageForObject(this.characterRoot),this.statusEl.textContent="Character ready."}resolveArmorPath(e){const t=ji(e);return t.startsWith("item/")?[`player/${t.slice(5)}`,t]:[t]}async loadBmdGroupWithFallback(e){const t=Array.isArray(e)?e:[e];for(const n of t){const i=await this.loadBmdGroup(this.ensureBmdExtension(n));if(i)return i}return null}async loadBmdGroup(e){const t=await this.readDataFile(e);if(!t)return console.warn(`[CharacterTestScene] Missing file: ${e}`),null;try{return await this.bmdLoader.load(t.buffer)}catch(n){return console.error("[CharacterTestScene] Failed to load BMD",e,n),null}}describeItem(e){return`${e.itemName||e.modelName||`Item ${e.id}`} (G${e.group} / ${e.id})`}static SLOT_TO_BASE_PART={Helm:"Base HelmClass",Armor:"Base ArmorClass",Pants:"Base PantClass",Gloves:"Base GloveClass",Boots:"Base BootClass"};hideReplacedBaseParts(e,t){if(!this.characterRoot)return;const n=new Set;for(const i of t){if(i.type!=="armor"||!this.getSelectedItem(i.select))continue;const a=rc.SLOT_TO_BASE_PART[i.label];a&&n.add(`${a}${e}`)}n.size!==0&&this.characterRoot.traverse(i=>{if(!i.isMesh)return;const r=i;r.userData.itemKind==="base"&&typeof r.userData.itemLabel=="string"&&n.has(r.userData.itemLabel)&&(r.visible=!1)})}tagMeshes(e,t,n){e.traverse(i=>{i.isMesh&&(i.userData.itemLabel=t,i.userData.itemKind=n)})}ensureBmdExtension(e){return e.toLowerCase().endsWith(".bmd")?e:`${e}.bmd`}findSkeleton(e){let t=null;return e.traverse(n=>{!t&&n.isSkinnedMesh&&(t=n.skeleton)}),t}findBaseBindMatrix(e){let t=null;return e.traverse(n=>{!t&&n.isSkinnedMesh&&(t=n.bindMatrix.clone())}),t}async attachBodyPart(e){if(!this.characterRoot||!this.baseSkeleton)return;const t=[];e.traverse(n=>{n.isSkinnedMesh&&t.push(n)});for(const n of t)n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.set(1,1,1),this.characterRoot.add(n),n.bind(this.baseSkeleton,this.baseBindMatrix??n.bindMatrix)}attachToBone(e,t){if(!this.baseSkeleton)return;const n=this.baseSkeleton.bones[t];if(!n){console.warn(`[CharacterTestScene] Missing bone ${t}`);return}e.position.set(0,0,0),e.rotation.set(0,0,0),e.scale.set(1,1,1),n.add(e)}async applyTexturesForGroup(e){const t=new Set,n=[],i=new Map;e.traverse(a=>{if(a.isMesh&&a.userData?.texturePath){const o=a.userData.texturePath;t.add(ji(o)),n.push(a)}});const r=new Map;for(const a of t){const o=await this.getTextureForPath(a);o&&r.set(a,o)}n.forEach(a=>{const o=ji(a.userData?.texturePath||""),l=r.get(o);if(!l)return;const c=o.toLowerCase(),h=i.get(c)||ur(l,o);if(i.set(c,h),l.userData.blendHeuristic=h,a.userData?.itemKind==="equipment"){this.applyItemShader(a,l,h);return}const u=a.material;u&&"map"in u&&(u.map=l,u.color.set(16777215),dr(u,h))})}applyItemShader(e,t,n){const i=e.material;Array.isArray(i)?i.forEach(a=>a.dispose()):i&&i.dispose();const r=this.createItemShaderMaterial(t);dr(r,n),e.material=r,this.itemShaderMaterials.add(r)}updateItemShaderParams(){const e=new N(.707,-.707,0).normalize(),t=new Re(.3,.3,.3),n=this.itemGlowColor;this.itemShaderMaterials.forEach(i=>{i.uniforms.uItemLevel.value=this.itemLevel,i.uniforms.uIsExcellent.value=this.itemIsExcellent?1:0,i.uniforms.uIsAncient.value=this.itemIsAncient?1:0,i.uniforms.uExcellentIntensity.value=this.itemExcellentIntensity,i.uniforms.uLightDirection.value.copy(e),i.uniforms.uAmbientColor.value.copy(t),i.uniforms.uGlowColor.value.copy(n)})}createItemShaderMaterial(e){const t=`
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
    `,i=new mn({uniforms:{uMap:{value:e},uTime:{value:0},uItemLevel:{value:this.itemLevel},uIsExcellent:{value:this.itemIsExcellent?1:0},uIsAncient:{value:this.itemIsAncient?1:0},uExcellentIntensity:{value:this.itemExcellentIntensity},uGlowColor:{value:this.itemGlowColor.clone()},uLightDirection:{value:new N(.707,-.707,0).normalize()},uAmbientColor:{value:new Re(.3,.3,.3)}},vertexShader:t,fragmentShader:n,transparent:!1,depthWrite:!0,blending:kt,toneMapped:!0,side:dn});return i.skinning=!0,i.needsUpdate=!0,i}async getTextureForPath(e){const t=ji(e);if(this.textureCache.has(t))return this.textureCache.get(t);const n=ru(t),i=this.getTextureBaseCandidates(n);for(const r of i){const a=r===n?t:this.replaceBaseName(t,r);if(a!==t&&this.textureCache.has(a))return this.textureCache.get(a);const o=await this.readDataFile(a);if(o){const l=await this.loadTexture(o.buffer,o.name);if(l)return this.textureCache.set(a,l),l}}for(const r of i){const a=`base:${r}`;if(this.textureCache.has(a))return this.textureCache.get(a);const o=await this.findTextureByBase(r);if(!o)continue;const l=await this.loadTexture(o.buffer,o.name);if(l)return this.textureCache.set(a,l),l}return null}getTextureBaseCandidates(e){const t=e.match(/^([a-z]*skinclass)(\d+)$/i);if(!t||this.currentClassValue===null)return[e];const n=t[1].toLowerCase(),i=this.currentClassValue,r=i>=200?i:100+i,a=`${n}${r}`;return a===e?[e]:[a,e]}replaceBaseName(e,t){const n=Gs(e),i=e.replace(/\\/g,"/");return i.includes("/")?`${i.replace(/\/[^/]*$/,"")}/${t}${n}`:`${t}${n}`}async findTextureByBase(e){if(!e)return null;if(this.dataRootPath){if(!this.electronTextureMap.has(e))try{const l=(await bd(this.dataRootPath,[e]))[e]||[];if(l.length>0){const c=this.pickPreferredTexture(l);this.electronTextureMap.set(e,c)}}catch(o){console.warn("[CharacterTestScene] Texture search failed",o)}const r=this.electronTextureMap.get(e);if(!r)return null;const a=await hr(r);return a?{name:a.name,buffer:a.data}:null}const t=this.textureIndex.get(e);if(!t||t.length===0)return null;const n=this.pickPreferredTexture(t),i=this.dataFiles.get(n);return i?{name:i.name,buffer:await i.arrayBuffer()}:null}pickPreferredTexture(e){const t=[".ozj",".ozt",".tga",".png",".jpg",".jpeg"],n=r=>{const a=t.indexOf(r);return a===-1?t.length:a};return e.slice().sort((r,a)=>{const o=Gs(r),l=Gs(a);return n(o)-n(l)})[0]}async loadTexture(e,t){const n=Gs(t);try{let i;if(n===".tga")i=await this.textureLoader.loadAsync(await _d(e));else if(n===".ozj"||n===".ozt")i=await this.textureLoader.loadAsync(await Ua(e));else{const r=new Blob([e]),a=URL.createObjectURL(r);i=await this.textureLoader.loadAsync(a),URL.revokeObjectURL(a)}return i.colorSpace=Rt,i.wrapS=i.wrapT=Ln,i.flipY=!1,i.name=t,i.userData.blendHeuristic=ur(i,t),i}catch(i){return console.warn("[CharacterTestScene] Texture load failed",t,i),null}}getSelectedItem(e){const t=e.value;return t&&this.itemByKey.get(t)||null}async readDataFile(e){const t=ji(e);if(this.dataFiles.size>0){const n=this.dataFiles.get(t);return n?{name:n.name,buffer:await n.arrayBuffer()}:null}if(this.dataRootPath&&At()){const n=this.joinDataPath(t);if(this.missingDataPaths.has(t))return null;try{const i=await hr(n);return i?{name:i.name,buffer:i.data}:null}catch{return this.missingDataPaths.add(t),null}}return null}joinDataPath(e){if(!this.dataRootPath)return e;const t=this.dataRootPath.includes("\\")?"\\":"/",n=this.dataRootPath.replace(/[\\/]+$/,""),i=e.replace(/[\\/]+/g,t);return`${n}${t}${i}`}populateAnimationSelect(e,t=null){this.animationSelect.innerHTML="";for(let n=0;n<e;n++){const i=document.createElement("option");i.value=n.toString(),i.textContent=`Animation ${n}`,this.animationSelect.appendChild(i)}if(e>0){const n=e>1?1:0,i=t!==null&&t>=0&&t<e?t:n;this.animationSelect.value=i.toString()}}playAnimation(e){if(!this.mixer||!this.characterRoot?.animations?.length)return;const t=this.characterRoot.animations[e];t&&(this.mixer.stopAllAction(),this.currentAction=this.mixer.clipAction(t),this.currentAction.setEffectiveTimeScale(this.animationSpeed),this.currentAction.reset().play(),this.selectedAnimationIndex=e)}setAnimationSpeed(e){this.animationSpeed=e,this.currentAction&&this.currentAction.setEffectiveTimeScale(e)}setCharacterScale(e){this.characterScale=e,this.characterRoot&&(this.characterRoot.scale.set(e,e,e),this.updateStageForObject(this.characterRoot))}setSceneBackground(e){const t=new Re(e);this.scene.background=t,this.scene.fog&&this.scene.fog.color.copy(t),this.containerEl&&(this.containerEl.style.backgroundColor=e)}applySceneMaterialTuning(e){e.traverse(t=>{const n=t;if(!n.isMesh)return;n.castShadow=!0,n.receiveShadow=!0,(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{r&&(r instanceof $l&&(r.shininess=Math.max(r.shininess,12),r.specular.set(3098729)),"envMapIntensity"in r&&(r.envMapIntensity=.72),r.needsUpdate=!0)})})}updateStageForObject(e){if(!e){this.gridHelper&&(this.gridHelper.position.y=0,this.gridHelper.scale.set(1,1,1));return}const t=new Xt().setFromObject(e);if(!Number.isFinite(t.min.y)||!Number.isFinite(t.max.y))return;const n=t.getSize(new N),i=Math.max(120,Math.max(n.x,n.z)*.74+30),r=t.min.y-1.2;if(this.gridHelper){const a=Math.max(.65,Math.min(2.4,i/230));this.gridHelper.position.y=r,this.gridHelper.scale.set(a,1,a)}this.directionalLight.target.position.set(0,(t.min.y+t.max.y)*.5,0),this.directionalLight.target.updateMatrixWorld()}setBrightness(e){const t=Math.max(.1,e);this.renderer.toneMappingExposure=t,this.ambientLight&&(this.ambientLight.intensity=.48*t),this.hemisphereLight&&(this.hemisphereLight.intensity=.62*t),this.directionalLight&&(this.directionalLight.intensity=1.85*t),this.rimLight&&(this.rimLight.intensity=.82*t)}refreshViewport(e=0){if(!this.containerEl)return;const t=this.containerEl.clientWidth,n=this.containerEl.clientHeight;if(t===0||n===0){e<5&&requestAnimationFrame(()=>this.refreshViewport(e+1));return}this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,n),this.renderer.render(this.scene,this.camera)}buildBlendingUI(){if(!this.blendingBox||!this.blendingList)return;this.blendingList.innerHTML="";const e={Opaque:kt,Normal:Vn,Additive:er,Multiply:ra,Subtractive:sa};this.meshRefs.forEach((t,n)=>{const i=document.createElement("div");i.className="blend-row";const r=document.createElement("span"),a=t.userData?.itemLabel||"Unknown item",o=t.name||`Mesh ${n}`;r.textContent=`${a} · ${o}`,r.className="blend-label";const l=document.createElement("select");l.className="animation-dropdown blend-select",Object.keys(e).forEach(d=>{const p=document.createElement("option");p.value=d,p.text=d,l.appendChild(p)});const c=t.material,h=Array.isArray(c)?c[0]?.blending:c.blending,u=Object.entries(e).find(([,d])=>d===h);l.value=u?u[0]:"Normal",l.addEventListener("change",()=>{const d=p=>{p.blending=e[l.value],p.transparent=p.blending!==kt,p.depthWrite=p.blending===kt,p.needsUpdate=!0};Array.isArray(c)?c.forEach(d):d(c)}),i.append(r,l),this.blendingList.appendChild(i)}),this.blendingBox.style.display=this.meshRefs.length?"block":"none"}refreshRenderHelpers(){this.updateSkeletonHelperState(),this.applyWireframeState(),this.updateBoundingBoxHelperState(),this.updateAxesHelperState(),this.updateNormalsHelpersState()}updateSkeletonHelperState(){if(!this.characterRoot){this.skeletonHelper&&(this.scene.remove(this.skeletonHelper),this.skeletonHelper.geometry.dispose(),this.skeletonHelper=null);return}this.skeletonHelper||(this.skeletonHelper=new es(this.characterRoot),this.scene.add(this.skeletonHelper)),this.skeletonHelper.visible=this.showSkeletonCheckbox.checked}applyWireframeState(){if(!this.characterRoot)return;const e=this.wireframeCheckbox.checked;this.characterRoot.traverse(t=>{if(t.isMesh){const n=t.material,i=r=>{"wireframe"in r&&(r.wireframe=e,r.needsUpdate=!0)};Array.isArray(n)?n.forEach(i):n&&i(n)}})}updateBoundingBoxHelperState(){if(!this.showBoundingBoxCheckbox.checked||!this.characterRoot){this.boundingBoxHelper&&(this.boundingBoxHelper.visible=!1);return}this.boundingBoxHelper||(this.boundingBoxHelper=new ad(this.characterRoot,16776960),this.boundingBoxHelper.name="character_bbox_helper",this.scene.add(this.boundingBoxHelper)),this.boundingBoxHelper.visible=!0,this.updateSkinnedMeshesBoundingBoxes(),this.boundingBoxHelper.update()}getModelSizeHint(){if(!this.characterRoot)return 100;const t=new Xt().setFromObject(this.characterRoot).getSize(new N);return Math.max(t.x,t.y,t.z)||100}updateAxesHelperState(){if(!this.showAxesCheckbox.checked||!this.characterRoot){this.axesHelper&&(this.axesHelper.visible=!1);return}const t=this.getModelSizeHint()*.6||100;this.axesHelper||(this.axesHelper=new od(t),this.axesHelper.name="character_axes_helper",this.axesHelper.matrixAutoUpdate=!0,this.scene.add(this.axesHelper)),this.axesHelper.visible=!0}updateNormalsHelpersState(){if(!this.showNormalsCheckbox.checked||!this.characterRoot){this.normalsVisible=!1,this.normalHelpers.length&&this.normalHelpers.forEach(t=>{t.visible=!1});return}if(this.normalsVisible=!0,this.normalHelpers.length)this.normalHelpers.forEach(t=>{t.visible=!0});else{const t=this.getModelSizeHint()*.015;this.characterRoot.traverse(n=>{if(n.isSkinnedMesh){const i=new Ed(n,t,6151423);i.visible=!0,this.scene.add(i),this.normalHelpers.push(i)}})}}updateSkinnedMeshesBoundingBoxes(){this.characterRoot&&this.characterRoot.traverse(e=>{const t=e;if(!t.isSkinnedMesh)return;const n=t.geometry;if(!n.getAttribute("position"))return;if(!!n.getAttribute("skinIndex")&&!!n.getAttribute("skinWeight")){t.computeBoundingBox();return}t.boundingBox||(t.boundingBox=new Xt),n.boundingBox===null&&n.computeBoundingBox(),n.boundingBox&&t.boundingBox&&t.boundingBox.copy(n.boundingBox)})}exportGif(){if(this.isRecordingGif)return;if(!this.characterRoot){alert("Load a character first.");return}this.isRecordingGif=!0,this.exportGifBtn.disabled=!0,this.statusEl.textContent="Recording GIF…";const e=Math.max(16,Math.min(1024,parseInt(this.gifWidthInput?.value??"800",10)||800)),t=Math.max(16,Math.min(1024,parseInt(this.gifHeightInput?.value??"600",10)||600)),n=!!(this.currentAction&&this.mixer);let i=null,r=0;n&&this.currentAction&&(i=this.currentAction.getClip(),r=i.userData?.numAnimationKeys??0);const a=parseInt(this.gifDelayInput?.value??"",10),o=!Number.isNaN(a)&&a>0?a:null,l=Math.max(1,Math.min(8,parseInt(this.gifFrameMultiplierInput?.value??"1",10)||1)),c=document.createElement("canvas");c.width=e,c.height=t;const h=c.getContext("2d"),u=65280,d=u>>16&255,p=u>>8&255,g=u&255,_=new vd({workers:2,workerScript:yd,quality:10,width:e,height:t,transparent:u}),f=this.scene.background?this.scene.background.clone():null;this.scene.background=null;const m=this.gridHelper?.visible??!1;this.gridHelper&&(this.gridHelper.visible=!1),_.on("progress",v=>{this.statusEl.textContent=`Rendering GIF… ${(v*100).toFixed(0)}%`});const y=v=>{f?this.scene.background=f:this.scene.background=null,this.gridHelper&&(this.gridHelper.visible=m),this.isRecordingGif=!1,this.exportGifBtn.disabled=!1,this.statusEl.textContent=v};if(_.on("finished",v=>{const S=URL.createObjectURL(v),T=document.createElement("a");T.href=S,T.download=`character_${e}x${t}.gif`,T.click(),URL.revokeObjectURL(S),y(`GIF saved (${e}×${t}).`)}),_.on("abort",()=>y("GIF recording aborted.")),!n||!i||r===0){this.renderer.render(this.scene,this.camera),h.clearRect(0,0,e,t),h.drawImage(this.renderer.domElement,0,0,e,t);const v=h.getImageData(0,0,e,t),S=v.data,T=40;for(let L=0;L<S.length;L+=4)S[L+3]<T&&(S[L]=d,S[L+1]=p,S[L+2]=g,S[L+3]=255);h.putImageData(v,0,0),_.addFrame(h,{copy:!0,delay:Math.min(Math.max(o??120,10),1e3)}),_.render();return}const w=Math.max(1,r*l),E=this.currentAction?._effectiveTimeScale??this.animationSpeed,C=i.duration/Math.max(E,1e-4)/w*1e3,x=Math.min(Math.max(o??Math.round(C),5),1e3);let b=0;const I=()=>{if(!this.mixer||!i)return;if(b>=w){_.render();return}const v=b/w;this.currentAction.time=v*i.duration,this.mixer.update(0),this.renderer.render(this.scene,this.camera),h.clearRect(0,0,e,t),h.drawImage(this.renderer.domElement,0,0,e,t);const S=h.getImageData(0,0,e,t),T=S.data,L=40;for(let P=0;P<T.length;P+=4)T[P+3]<L&&(T[P]=d,T[P+1]=p,T[P+2]=g,T[P+3]=255);h.putImageData(S,0,0),_.addFrame(h,{copy:!0,delay:x}),b+=1,requestAnimationFrame(I)};I()}frameCharacter(){if(!this.characterRoot)return;const e=new Xt().setFromObject(this.characterRoot),t=e.getSize(new N),n=e.getCenter(new N);this.characterRoot.position.sub(n),this.characterRoot.position.y+=this.characterHeightOffset,this.characterOffset.copy(this.characterRoot.position),this.hasFramed=!0;const i=Math.max(t.x,t.y,t.z)||200;this.camera.position.set(0,i*.8,i*1.6),this.camera.lookAt(0,0,0),this.controls.target.set(0,0,0),this.controls.update()}clearCharacter(){this.characterRoot&&(this.scene.remove(this.characterRoot),this.characterRoot.traverse(e=>{if(e.isMesh){const t=e;t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(i=>i.dispose()):n&&n.dispose()}}),this.characterRoot=null,this.baseSkeleton=null,this.baseBindMatrix=null,this.mixer=wi.disposeMixer(this.mixer),this.currentAction=null,this.skeletonHelper&&(this.scene.remove(this.skeletonHelper),this.skeletonHelper.geometry.dispose(),this.skeletonHelper=null),this.boundingBoxHelper&&(this.scene.remove(this.boundingBoxHelper),this.boundingBoxHelper.geometry.dispose(),this.boundingBoxHelper.material.dispose(),this.boundingBoxHelper=null),this.axesHelper&&(this.scene.remove(this.axesHelper),this.axesHelper.geometry.dispose(),this.axesHelper.material.dispose(),this.axesHelper=null),this.normalHelpers.length&&(this.normalHelpers.forEach(e=>{this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}),this.normalHelpers=[]),this.meshRefs=[],this.blendingBox&&(this.blendingBox.style.display="none"),this.blendingList&&(this.blendingList.innerHTML=""),wi.disposeShaderMaterials(this.itemShaderMaterials),this.updateStageForObject(null))}clearTextureCache(){wi.disposeTextureCache(this.textureCache)}dispose(){this.clearCharacter(),this.clearTextureCache(),this.renderer.dispose(),this.gridHelper&&wi.disposeObject3D(this.gridHelper)}async ensurePlayerAnimations(){if(!this.baseSkeleton)return null;if(this.playerAnimations)return this.playerAnimations;const e=await this.readDataFile("Player/player.bmd");if(!e)return console.warn("[CharacterTestScene] Missing Player/player.bmd for animations"),null;try{const t=this.bmdLoader.loadAnimationsFrom(e.buffer,this.baseSkeleton);return this.playerAnimations=t,t}catch(t){return console.warn("[CharacterTestScene] Failed to load player animations",t),null}}animate=()=>{requestAnimationFrame(this.animate);const e=this.clock.getDelta();if(!this.isActive)return;const n=performance.now()*25e-5;if(this.rimLight.position.x=-160+Math.sin(n)*18,this.rimLight.position.z=-210+Math.cos(n)*14,this.characterRoot&&this.isAutoRotating&&!this.userIsInteracting&&!this.isRecordingGif&&(this.characterRoot.rotation.z+=e*.2),this.mixer&&!this.isRecordingGif&&this.mixer.update(e),this.itemShaderMaterials.size){const i=performance.now()*.001;this.itemShaderMaterials.forEach(r=>{r.uniforms.uTime.value=i})}this.axesHelper&&this.characterRoot&&this.axesHelper.visible&&(this.axesHelper.position.copy(this.characterRoot.position),this.axesHelper.quaternion.copy(this.characterRoot.quaternion),this.axesHelper.scale.copy(this.characterRoot.scale)),this.boundingBoxHelper&&this.boundingBoxHelper.visible&&(this.updateSkinnedMeshesBoundingBoxes(),this.boundingBoxHelper.update()),this.normalsVisible&&this.normalHelpers.length&&(this.normalsUpdateCounter=(this.normalsUpdateCounter+1)%3,this.normalsUpdateCounter===0&&this.normalHelpers.forEach(i=>i.update())),this.controls.update(),this.renderer.render(this.scene,this.camera)}}class ii{k;static BLOCK_SIZE=8;static DELTA=2654435769;static ROUNDS=32;constructor(e){const t=new DataView(e.buffer,e.byteOffset,16);this.k=new Uint32Array(4);for(let n=0;n<4;n++)this.k[n]=t.getUint32(n*4,!1)}getBlockSize(){return ii.BLOCK_SIZE}decryptBlock(e,t,n,i){const r=new DataView(e.buffer,e.byteOffset+t,8);let a=r.getUint32(0,!1),o=r.getUint32(4,!1);const l=this.k[0],c=this.k[1],h=this.k[2],u=this.k[3];let d=ii.DELTA*ii.ROUNDS>>>0;for(let g=0;g<ii.ROUNDS;g++)o=o-((a<<4)+h^a+d^(a>>>5)+u)>>>0,a=a-((o<<4)+l^o+d^(o>>>5)+c)>>>0,d=d-ii.DELTA>>>0;const p=new DataView(n.buffer,n.byteOffset+i,8);p.setUint32(0,a,!1),p.setUint32(4,o,!1)}blockDecrypt(e,t,n){for(let i=0;i<t;i+=ii.BLOCK_SIZE)this.decryptBlock(e,i,n,i)}}class rs{k=new Uint32Array(3);static ROUNDS=11;static START_D=45489;static BLOCK_SIZE=12;constructor(e){for(let n=0;n<3;n++)this.k[n]=(e[4*n+3]|e[4*n+2]<<8|e[4*n+1]<<16|e[4*n]<<24)>>>0;const t={a0:this.k[0],a1:this.k[1],a2:this.k[2]};Il(t),Do(t),this.k[0]=Io(t.a0),this.k[1]=Io(t.a1),this.k[2]=Io(t.a2)}getBlockSize(){return rs.BLOCK_SIZE}blockDecrypt(e,t,n){for(let i=0;i<t;i+=rs.BLOCK_SIZE)this.decryptBlock(e,i,n,i)}decryptBlock(e,t,n,i){const r=new DataView(e.buffer,e.byteOffset+t,12),a={a0:r.getUint32(0,!0),a1:r.getUint32(4,!0),a2:r.getUint32(8,!0)};let o=rs.START_D;Do(a);for(let c=0;c<rs.ROUNDS;c++)a.a0=(a.a0^this.k[0]^o<<16)>>>0,a.a1=(a.a1^this.k[1])>>>0,a.a2=(a.a2^this.k[2]^o)>>>0,b2(a),o=o<<1>>>0,o&65536&&(o^=69649),o&=65535;a.a0=(a.a0^this.k[0]^o<<16)>>>0,a.a1=(a.a1^this.k[1])>>>0,a.a2=(a.a2^this.k[2]^o)>>>0,Il(a),Do(a);const l=new DataView(n.buffer,n.byteOffset+i,12);l.setUint32(0,a.a0,!0),l.setUint32(4,a.a1,!0),l.setUint32(8,a.a2,!0)}}function Io(s){return((s&255)<<24|(s&65280)<<8|(s&16711680)>>>8|(s&4278190080)>>>24)>>>0}function Lo(s){return s=((s&2863311530)>>>1|(s&1431655765)<<1)>>>0,s=((s&3435973836)>>>2|(s&858993459)<<2)>>>0,((s&4042322160)>>>4|(s&252645135)<<4)>>>0}function as(s,e){return(s<<e|s>>>32-e)>>>0}function Il(s){const e=(s.a0^s.a1^s.a2)>>>0,t=(as(e,16)^as(e,8))>>>0,n=(s.a0<<24^s.a2>>>8^s.a1<<8^s.a0>>>24)>>>0,i=(s.a1<<24^s.a0>>>8^s.a2<<8^s.a1>>>24)>>>0;s.a0=(s.a0^t^n)>>>0,s.a1=(s.a1^t^i)>>>0,s.a2=(s.a2^t^(n>>>16^i<<16))>>>0}function Do(s){s.a1=Lo(s.a1);const e=Lo(s.a0);s.a0=Lo(s.a2),s.a2=e}function S2(s){const e=as(s.a2,1),t=as(s.a0,22);s.a0=as((t^(s.a1|~e>>>0))>>>0,1),s.a2=as((e^(t|~s.a1>>>0))>>>0,22),s.a1=(s.a1^(e|~t>>>0))>>>0}function b2(s){Il(s),S2(s)}class bi{static BLOCK_SIZE=8;static MAX_ROUNDS=16;static REDUCED_ROUNDS=12;kr=new Int32Array(17);km=new Uint32Array(17);rounds=bi.MAX_ROUNDS;constructor(e){this.setKey(e.slice(0,16))}getBlockSize(){return bi.BLOCK_SIZE}blockDecrypt(e,t,n){for(let i=0;i<t;i+=bi.BLOCK_SIZE)this.decryptBlock(e,i,n,i)}decryptBlock(e,t,n,i){const r=au(e,t),a=au(e,t+4),o=this.castDecipher(r,a);ou(o[0],n,i),ou(o[1],n,i+4)}castDecipher(e,t){let n=e>>>0,i=t>>>0;for(let r=this.rounds;r>0;r--){const a=n,o=i;switch(n=o,r){case 1:case 4:case 7:case 10:case 13:case 16:i=fe(a^E2(o,this.km[r],this.kr[r]));break;case 2:case 5:case 8:case 11:case 14:i=fe(a^w2(o,this.km[r],this.kr[r]));break;case 3:case 6:case 9:case 12:case 15:i=fe(a^T2(o,this.km[r],this.kr[r]));break}}return[i,n]}setKey(e){this.rounds=e.length<11?bi.REDUCED_ROUNDS:bi.MAX_ROUNDS;const t=new Array(16).fill(0),n=new Array(16).fill(0);for(let d=0;d<e.length;d++)n[d]=e[d]&255;let i,r,a,o,l,c,h,u;l=at(n,0),c=at(n,4),h=at(n,8),u=at(n,12),i=fe(l^re[n[13]]^ae[n[15]]^oe[n[12]]^le[n[14]]^oe[n[8]]),rt(i,t,0),r=fe(h^re[t[0]]^ae[t[2]]^oe[t[1]]^le[t[3]]^le[n[10]]),rt(r,t,4),a=fe(u^re[t[7]]^ae[t[6]]^oe[t[5]]^le[t[4]]^re[n[9]]),rt(a,t,8),o=fe(c^re[t[10]]^ae[t[9]]^oe[t[11]]^le[t[8]]^ae[n[11]]),rt(o,t,12),this.km[1]=fe(re[t[8]]^ae[t[9]]^oe[t[7]]^le[t[6]]^re[t[2]]),this.km[2]=fe(re[t[10]]^ae[t[11]]^oe[t[5]]^le[t[4]]^ae[t[6]]),this.km[3]=fe(re[t[12]]^ae[t[13]]^oe[t[3]]^le[t[2]]^oe[t[9]]),this.km[4]=fe(re[t[14]]^ae[t[15]]^oe[t[1]]^le[t[0]]^le[t[12]]),i=at(t,0),r=at(t,4),a=at(t,8),o=at(t,12),l=fe(a^re[t[5]]^ae[t[7]]^oe[t[4]]^le[t[6]]^oe[t[0]]),rt(l,n,0),c=fe(i^re[n[0]]^ae[n[2]]^oe[n[1]]^le[n[3]]^le[t[2]]),rt(c,n,4),h=fe(r^re[n[7]]^ae[n[6]]^oe[n[5]]^le[n[4]]^re[t[1]]),rt(h,n,8),u=fe(o^re[n[10]]^ae[n[9]]^oe[n[11]]^le[n[8]]^ae[t[3]]),rt(u,n,12),this.km[5]=fe(re[n[3]]^ae[n[2]]^oe[n[12]]^le[n[13]]^re[n[8]]),this.km[6]=fe(re[n[1]]^ae[n[0]]^oe[n[14]]^le[n[15]]^ae[n[13]]),this.km[7]=fe(re[n[7]]^ae[n[6]]^oe[n[8]]^le[n[9]]^oe[n[3]]),this.km[8]=fe(re[n[5]]^ae[n[4]]^oe[n[10]]^le[n[11]]^le[n[7]]),l=at(n,0),c=at(n,4),h=at(n,8),u=at(n,12),i=fe(l^re[n[13]]^ae[n[15]]^oe[n[12]]^le[n[14]]^oe[n[8]]),rt(i,t,0),r=fe(h^re[t[0]]^ae[t[2]]^oe[t[1]]^le[t[3]]^le[n[10]]),rt(r,t,4),a=fe(u^re[t[7]]^ae[t[6]]^oe[t[5]]^le[t[4]]^re[n[9]]),rt(a,t,8),o=fe(c^re[t[10]]^ae[t[9]]^oe[t[11]]^le[t[8]]^ae[n[11]]),rt(o,t,12),this.km[9]=fe(re[t[3]]^ae[t[2]]^oe[t[12]]^le[t[13]]^re[t[9]]),this.km[10]=fe(re[t[1]]^ae[t[0]]^oe[t[14]]^le[t[15]]^ae[t[12]]),this.km[11]=fe(re[t[7]]^ae[t[6]]^oe[t[8]]^le[t[9]]^oe[t[2]]),this.km[12]=fe(re[t[5]]^ae[t[4]]^oe[t[10]]^le[t[11]]^le[t[6]]),i=at(t,0),r=at(t,4),a=at(t,8),o=at(t,12),l=fe(a^re[t[5]]^ae[t[7]]^oe[t[4]]^le[t[6]]^oe[t[0]]),rt(l,n,0),c=fe(i^re[n[0]]^ae[n[2]]^oe[n[1]]^le[n[3]]^le[t[2]]),rt(c,n,4),h=fe(r^re[n[7]]^ae[n[6]]^oe[n[5]]^le[n[4]]^re[t[1]]),rt(h,n,8),u=fe(o^re[n[10]]^ae[n[9]]^oe[n[11]]^le[n[8]]^ae[t[3]]),rt(u,n,12),this.km[13]=fe(re[n[8]]^ae[n[9]]^oe[n[7]]^le[n[6]]^re[n[3]]),this.km[14]=fe(re[n[10]]^ae[n[11]]^oe[n[5]]^le[n[4]]^ae[n[7]]),this.km[15]=fe(re[n[12]]^ae[n[13]]^oe[n[3]]^le[n[2]]^oe[n[8]]),this.km[16]=fe(re[n[14]]^ae[n[15]]^oe[n[1]]^le[n[0]]^le[n[13]]),l=at(n,0),c=at(n,4),h=at(n,8),u=at(n,12),i=fe(l^re[n[13]]^ae[n[15]]^oe[n[12]]^le[n[14]]^oe[n[8]]),rt(i,t,0),r=fe(h^re[t[0]]^ae[t[2]]^oe[t[1]]^le[t[3]]^le[n[10]]),rt(r,t,4),a=fe(u^re[t[7]]^ae[t[6]]^oe[t[5]]^le[t[4]]^re[n[9]]),rt(a,t,8),o=fe(c^re[t[10]]^ae[t[9]]^oe[t[11]]^le[t[8]]^ae[n[11]]),rt(o,t,12),this.kr[1]=fe(re[t[8]]^ae[t[9]]^oe[t[7]]^le[t[6]]^re[t[2]])&31,this.kr[2]=fe(re[t[10]]^ae[t[11]]^oe[t[5]]^le[t[4]]^ae[t[6]])&31,this.kr[3]=fe(re[t[12]]^ae[t[13]]^oe[t[3]]^le[t[2]]^oe[t[9]])&31,this.kr[4]=fe(re[t[14]]^ae[t[15]]^oe[t[1]]^le[t[0]]^le[t[12]])&31,i=at(t,0),r=at(t,4),a=at(t,8),o=at(t,12),l=fe(a^re[t[5]]^ae[t[7]]^oe[t[4]]^le[t[6]]^oe[t[0]]),rt(l,n,0),c=fe(i^re[n[0]]^ae[n[2]]^oe[n[1]]^le[n[3]]^le[t[2]]),rt(c,n,4),h=fe(r^re[n[7]]^ae[n[6]]^oe[n[5]]^le[n[4]]^re[t[1]]),rt(h,n,8),u=fe(o^re[n[10]]^ae[n[9]]^oe[n[11]]^le[n[8]]^ae[t[3]]),rt(u,n,12),this.kr[5]=fe(re[n[3]]^ae[n[2]]^oe[n[12]]^le[n[13]]^re[n[8]])&31,this.kr[6]=fe(re[n[1]]^ae[n[0]]^oe[n[14]]^le[n[15]]^ae[n[13]])&31,this.kr[7]=fe(re[n[7]]^ae[n[6]]^oe[n[8]]^le[n[9]]^oe[n[3]])&31,this.kr[8]=fe(re[n[5]]^ae[n[4]]^oe[n[10]]^le[n[11]]^le[n[7]])&31,l=at(n,0),c=at(n,4),h=at(n,8),u=at(n,12),i=fe(l^re[n[13]]^ae[n[15]]^oe[n[12]]^le[n[14]]^oe[n[8]]),rt(i,t,0),r=fe(h^re[t[0]]^ae[t[2]]^oe[t[1]]^le[t[3]]^le[n[10]]),rt(r,t,4),a=fe(u^re[t[7]]^ae[t[6]]^oe[t[5]]^le[t[4]]^re[n[9]]),rt(a,t,8),o=fe(c^re[t[10]]^ae[t[9]]^oe[t[11]]^le[t[8]]^ae[n[11]]),rt(o,t,12),this.kr[9]=fe(re[t[3]]^ae[t[2]]^oe[t[12]]^le[t[13]]^re[t[9]])&31,this.kr[10]=fe(re[t[1]]^ae[t[0]]^oe[t[14]]^le[t[15]]^ae[t[12]])&31,this.kr[11]=fe(re[t[7]]^ae[t[6]]^oe[t[8]]^le[t[9]]^oe[t[2]])&31,this.kr[12]=fe(re[t[5]]^ae[t[4]]^oe[t[10]]^le[t[11]]^le[t[6]])&31,i=at(t,0),r=at(t,4),a=at(t,8),o=at(t,12),l=fe(a^re[t[5]]^ae[t[7]]^oe[t[4]]^le[t[6]]^oe[t[0]]),rt(l,n,0),c=fe(i^re[n[0]]^ae[n[2]]^oe[n[1]]^le[n[3]]^le[t[2]]),rt(c,n,4),h=fe(r^re[n[7]]^ae[n[6]]^oe[n[5]]^le[n[4]]^re[t[1]]),rt(h,n,8),u=fe(o^re[n[10]]^ae[n[9]]^oe[n[11]]^le[n[8]]^ae[t[3]]),rt(u,n,12),this.kr[13]=fe(re[n[8]]^ae[n[9]]^oe[n[7]]^le[n[6]]^re[n[3]])&31,this.kr[14]=fe(re[n[10]]^ae[n[11]]^oe[n[5]]^le[n[4]]^ae[n[7]])&31,this.kr[15]=fe(re[n[12]]^ae[n[13]]^oe[n[3]]^le[n[2]]^oe[n[8]])&31,this.kr[16]=fe(re[n[14]]^ae[n[15]]^oe[n[1]]^le[n[0]]^le[n[13]])&31}}function E2(s,e,t){let n=fe(e+s);return n=ac(n,t),fe(fe((oc[n>>>24&255]^lc[n>>>16&255])-cc[n>>>8&255])+hc[n&255])}function w2(s,e,t){let n=fe(e^s);return n=ac(n,t),fe(fe(oc[n>>>24&255]-lc[n>>>16&255]+cc[n>>>8&255])^hc[n&255])}function T2(s,e,t){let n=fe(e-s);return n=ac(n,t),fe(fe(oc[n>>>24&255]+lc[n>>>16&255]^cc[n>>>8&255])-hc[n&255])}function rt(s,e,t){e[t+3]=s&255,e[t+2]=s>>>8&255,e[t+1]=s>>>16&255,e[t]=s>>>24&255}function at(s,e){return((s[e]&255)<<24|(s[e+1]&255)<<16|(s[e+2]&255)<<8|s[e+3]&255)>>>0}function ac(s,e){const t=e&31;return(s<<t|s>>>32-t)>>>0}function fe(s){return s>>>0}function au(s,e){return((s[e]&255)<<24|(s[e+1]&255)<<16|(s[e+2]&255)<<8|s[e+3]&255)>>>0}function ou(s,e,t){e[t]=s>>>24&255,e[t+1]=s>>>16&255,e[t+2]=s>>>8&255,e[t+3]=s&255}const oc=new Uint32Array([821772500,2678128395,1810681135,1059425402,505495343,2617265619,1610868032,3483355465,3218386727,2294005173,3791863952,2563806837,1852023008,365126098,3269944861,584384398,677919599,3229601881,4280515016,2002735330,1136869587,3744433750,2289869850,2731719981,2714362070,879511577,1639411079,575934255,717107937,2857637483,576097850,2731753936,1725645e3,2810460463,5111599,767152862,2543075244,1251459544,1383482551,3052681127,3089939183,3612463449,1878520045,1510570527,2189125840,2431448366,582008916,3163445557,1265446783,1354458274,3529918736,3202711853,3073581712,3912963487,3029263377,1275016285,4249207360,2905708351,3304509486,1442611557,3585198765,2712415662,2731849581,3248163920,2283946226,208555832,2766454743,1331405426,1447828783,3315356441,3108627284,2957404670,2981538698,3339933917,1669711173,286233437,1465092821,1782121619,3862771680,710211251,980974943,1651941557,430374111,2051154026,704238805,4128970897,3144820574,2857402727,948965521,3333752299,2227686284,718756367,2269778983,2731643755,718440111,2857816721,3616097120,1113355533,2478022182,410092745,1811985197,1944238868,2696854588,1415722873,1682284203,1060277122,1998114690,1503841958,82706478,2315155686,1068173648,845149890,2167947013,1768146376,1993038550,3566826697,3390574031,940016341,3355073782,2328040721,904371731,1205506512,4094660742,2816623006,825647681,85914773,2857843460,1249926541,1417871568,3287612,3211054559,3126306446,1975924523,1353700161,2814456437,2438597621,1800716203,722146342,2873936343,1151126914,4160483941,2877670899,458611604,2866078500,3483680063,770352098,2652916994,3367839148,3940505011,3585973912,3809620402,718646636,2504206814,2914927912,3631288169,2857486607,2860018678,575749918,2857478043,718488780,2069512688,3548183469,453416197,1106044049,3032691430,52586708,3378514636,3459808877,3211506028,1785789304,218356169,3571399134,3759170522,1194783844,1523787992,3007827094,1975193539,2555452411,1341901877,3045838698,3776907964,3217423946,2802510864,2889438986,1057244207,1636348243,3761863214,1462225785,2632663439,481089165,718503062,24497053,3332243209,3344655856,3655024856,3960371065,1195698900,2971415156,3710176158,2115785917,4027663609,3525578417,2524296189,2745972565,3564906415,1372086093,1452307862,2780501478,1476592880,3389271281,18495466,2378148571,901398090,891748256,3279637769,3157290713,2560960102,1447622437,4284372637,216884176,2086908623,1879786977,3588903153,2242455666,2938092967,3559082096,2810645491,758861177,1121993112,215018983,642190776,4169236812,1196255959,2081185372,3508738393,941322904,4124243163,2877523539,1848581667,2205260958,3180453958,2589345134,3694731276,550028657,2519456284,3789985535,2973870856,2093648313,443148163,46942275,2734146937,1117713533,1115362972,1523183689,3717140224,1551984063]),lc=new Uint32Array([522195092,4010518363,1776537470,960447360,4267822970,4005896314,1435016340,1929119313,2913464185,1310552629,3579470798,3724818106,2579771631,1594623892,417127293,2715217907,2696228731,1508390405,3994398868,3925858569,3695444102,4019471449,3129199795,3770928635,3520741761,990456497,4187484609,2783367035,21106139,3840405339,631373633,3783325702,532942976,396095098,3548038825,4267192484,2564721535,2011709262,2039648873,620404603,3776170075,2898526339,3612357925,4159332703,1645490516,223693667,1567101217,3362177881,1029951347,3470931136,3570957959,1550265121,119497089,972513919,907948164,3840628539,1613718692,3594177948,465323573,2659255085,654439692,2575596212,2699288441,3127702412,277098644,624404830,4100943870,2717858591,546110314,2403699828,3655377447,1321679412,4236791657,1045293279,4010672264,895050893,2319792268,494945126,1914543101,2777056443,3894764339,2219737618,311263384,4275257268,3458730721,669096869,3584475730,3835122877,3319158237,3949359204,2005142349,2713102337,2228954793,3769984788,569394103,3855636576,1425027204,108000370,2736431443,3671869269,3043122623,1750473702,2211081108,762237499,3972989403,2798899386,3061857628,2943854345,867476300,964413654,1591880597,1594774276,2179821409,552026980,3026064248,3726140315,2283577634,3110545105,2152310760,582474363,1582640421,1383256631,2043843868,3322775884,1217180674,463797851,2763038571,480777679,2718707717,2289164131,3118346187,214354409,200212307,3810608407,3025414197,2674075964,3997296425,1847405948,1342460550,510035443,4080271814,815934613,833030224,1620250387,1945732119,2703661145,3966000196,1388869545,3456054182,2687178561,2092620194,562037615,1356438536,3409922145,3261847397,1688467115,2150901366,631725691,3840332284,549916902,3455104640,394546491,837744717,2114462948,751520235,2221554606,2415360136,3999097078,2063029875,803036379,2702586305,821456707,3019566164,360699898,4018502092,3511869016,3677355358,2402471449,812317050,49299192,2570164949,3259169295,2816732080,3331213574,3101303564,2156015656,3705598920,3546263921,143268808,3200304480,1638124008,3165189453,3341807610,578956953,2193977524,3638120073,2333881532,807278310,658237817,2969561766,1641658566,11683945,3086995007,148645947,1138423386,4158756760,1981396783,2401016740,3699783584,380097457,2680394679,2803068651,3334260286,441530178,4016580796,1375954390,761952171,891809099,2183123478,157052462,3683840763,1592404427,341349109,2438483839,1417898363,644327628,2233032776,2353769706,2201510100,220455161,1815641738,182899273,2995019788,3627381533,3702638151,2890684138,1052606899,588164016,1681439879,4038439418,2405343923,4229449282,167996282,1336969661,1688053129,2739224926,1543734051,1046297529,1138201970,2121126012,115334942,1819067631,1902159161,1941945968,2206692869,1159982321]),cc=new Uint32Array([2381300288,637164959,3952098751,3893414151,1197506559,916448331,2350892612,2932787856,3199334847,4009478890,3905886544,1373570990,2450425862,4037870920,3778841987,2456817877,286293407,124026297,3001279700,1028597854,3115296800,4208886496,2691114635,2188540206,1430237888,1218109995,3572471700,308166588,570424558,2187009021,2455094765,307733056,1310360322,3135275007,1384269543,2388071438,863238079,2359263624,2801553128,3380786597,2831162807,1470087780,1728663345,4072488799,1090516929,532123132,2389430977,1132193179,2578464191,3051079243,1670234342,1434557849,2711078940,1241591150,3314043432,3435360113,3091448339,1812415473,2198440252,267246943,796911696,3619716990,38830015,1526438404,2806502096,374413614,2943401790,1489179520,1603809326,1920779204,168801282,260042626,2358705581,1563175598,2397674057,1356499128,2217211040,514611088,2037363785,2186468373,4022173083,2792511869,2913485016,1173701892,4200428547,3896427269,1334932762,2455136706,602925377,2835607854,1613172210,41346230,2499634548,2457437618,2188827595,41386358,4172255629,1313404830,2405527007,3801973774,2217704835,873260488,2528884354,2478092616,4012915883,2555359016,2006953883,2463913485,575479328,2218240648,2099895446,660001756,2341502190,3038761536,3888151779,3848713377,3286851934,1022894237,1620365795,3449594689,1551255054,15374395,3570825345,4249311020,4151111129,3181912732,310226346,1133119310,530038928,136043402,2476768958,3107506709,2544909567,1036173560,2367337196,1681395281,1758231547,3641649032,306774401,1575354324,3716085866,1990386196,3114533736,2455606671,1262092282,3124342505,2768229131,4210529083,1833535011,423410938,660763973,2187129978,1639812e3,3508421329,3467445492,310289298,272797111,2188552562,2456863912,310240523,677093832,1013118031,901835429,3892695601,1116285435,3036471170,1337354835,243122523,520626091,277223598,4244441197,4194248841,1766575121,594173102,316590669,742362309,3536858622,4176435350,3838792410,2501204839,1229605004,3115755532,1552908988,2312334149,979407927,3959474601,1148277331,176638793,3614686272,2083809052,40992502,1340822838,2731552767,3535757508,3560899520,1354035053,122129617,7215240,2732932949,3118912700,2718203926,2539075635,3609230695,3725561661,1928887091,2882293555,1988674909,2063640240,2491088897,1459647954,4189817080,2302804382,1113892351,2237858528,1927010603,4002880361,1856122846,1594404395,2944033133,3855189863,3474975698,1643104450,4054590833,3431086530,1730235576,2984608721,3084664418,2131803598,4178205752,267404349,1617849798,1616132681,1462223176,736725533,2327058232,551665188,2945899023,1749386277,2575514597,1611482493,674206544,2201269090,3642560800,728599968,1680547377,2620414464,1388111496,453204106,4156223445,1094905244,2754698257,2201108165,3757000246,2704524545,3922940700,3996465027]),hc=new Uint32Array([2645754912,532081118,2814278639,3530793624,1246723035,1689095255,2236679235,4194438865,2116582143,3859789411,157234593,2045505824,4245003587,1687664561,4083425123,605965023,672431967,1336064205,3376611392,214114848,4258466608,3232053071,489488601,605322005,3998028058,264917351,1912574028,756637694,436560991,202637054,135989450,85393697,2152923392,3896401662,2895836408,2145855233,3535335007,115294817,3147733898,1922296357,3464822751,4117858305,1037454084,2725193275,2127856640,1417604070,1148013728,1827919605,642362335,2929772533,909348033,1346338451,3547799649,297154785,1917849091,4161712827,2883604526,3968694238,1469521537,3780077382,3375584256,1763717519,136166297,4290970789,1295325189,2134727907,2798151366,1566297257,3672928234,2677174161,2672173615,965822077,2780786062,289653839,1133871874,3491843819,35685304,1068898316,418943774,672553190,642281022,2346158704,1954014401,3037126780,4079815205,2030668546,3840588673,672283427,1776201016,359975446,3750173538,555499703,2769985273,1324923,69110472,152125443,3176785106,3822147285,1340634837,798073664,1434183902,15393959,216384236,1303690150,3881221631,3711134124,3960975413,106373927,2578434224,1455997841,1801814300,1578393881,1854262133,3188178946,3258078583,2302670060,1539295533,3505142565,3078625975,2372746020,549938159,3278284284,2620926080,181285381,2865321098,3970029511,68876850,488006234,1728155692,2608167508,836007927,2435231793,919367643,3339422534,3655756360,1457871481,40520939,1380155135,797931188,234455205,2255801827,3990488299,397000196,739833055,3077865373,2871719860,4022553888,772369276,390177364,3853951029,557662966,740064294,1640166671,1699928825,3535942136,622006121,3625353122,68743880,1742502,219489963,1664179233,1577743084,1236991741,410585305,2366487942,823226535,1050371084,3426619607,3586839478,212779912,4147118561,1819446015,1911218849,530248558,3486241071,3252585495,2886188651,3410272728,2342195030,20547779,2982490058,3032363469,3631753222,312714466,1870521650,1493008054,3491686656,615382978,4103671749,2534517445,1932181,2196105170,278426614,6369430,3274544417,2913018367,697336853,2143000447,2946413531,701099306,1558357093,2805003052,3500818408,2321334417,3567135975,216290473,3591032198,23009561,1996984579,3735042806,2024298078,3739440863,569400510,2339758983,3016033873,3097871343,3639523026,3844324983,3256173865,795471839,2951117563,4101031090,4091603803,3603732598,971261452,534414648,428311343,3389027175,2844869880,694888862,1227866773,2456207019,3043454569,2614353370,3749578031,3676663836,459166190,4132644070,1794958188,51825668,2252611902,3084671440,2036672799,3436641603,1099053433,2469121526,3059204941,1323291266,2061838604,1018778475,2233344254,2553501054,334295216,3556750194,1065731521,183467730]),re=new Uint32Array([2127105028,745436345,2601412319,2788391185,3093987327,500390133,1155374404,389092991,150729210,3891597772,3523549952,1935325696,716645080,946045387,2901812282,1774124410,3869435775,4039581901,3293136918,3438657920,948246080,363898952,3867875531,1286266623,1598556673,68334250,630723836,1104211938,1312863373,613332731,2377784574,1101634306,441780740,3129959883,1917973735,2510624549,3238456535,2544211978,3308894634,1299840618,4076074851,1756332096,3977027158,297047435,3790297736,2265573040,3621810518,1311375015,1667687725,47300608,3299642885,2474112369,201668394,1468347890,576830978,3594690761,3742605952,1958042578,1747032512,3558991340,1408974056,3366841779,682131401,1033214337,1545599232,4265137049,206503691,103024618,2855227313,1337551222,2428998917,2963842932,4015366655,3852247746,2796956967,3865723491,3747938335,247794022,3755824572,702416469,2434691994,397379957,851939612,2314769512,218229120,1380406772,62274761,214451378,3170103466,2276210409,3845813286,28563499,446592073,1693330814,3453727194,29968656,3093872512,220656637,2470637031,77972100,1667708854,1358280214,4064765667,2395616961,325977563,4277240721,4220025399,3605526484,3355147721,811859167,3069544926,3962126810,652502677,3075892249,4132761541,3498924215,1217549313,3250244479,3858715919,3053989961,1538642152,2279026266,2875879137,574252750,3324769229,2651358713,1758150215,141295887,2719868960,3515574750,4093007735,4194485238,1082055363,3417560400,395511885,2966884026,179534037,3646028556,3738688086,1092926436,2496269142,257381841,3772900718,1636087230,1477059743,2499234752,3811018894,2675660129,3285975680,90732309,1684827095,1150307763,1723134115,3237045386,1769919919,1240018934,815675215,750138730,2239792499,1234303040,1995484674,138143821,675421338,1145607174,1936608440,3238603024,2345230278,2105974004,323969391,779555213,3004902369,2861610098,1017501463,2098600890,2628620304,2940611490,2682542546,1171473753,3656571411,3687208071,4091869518,393037935,159126506,1662887367,1147106178,391545844,3452332695,1891500680,3016609650,1851642611,546529401,1167818917,3194020571,2848076033,3953471836,575554290,475796850,4134673196,450035699,2351251534,844027695,1080539133,86184846,1554234488,3692025454,1972511363,2018339607,1491841390,1141460869,1061690759,4244549243,2008416118,2351104703,2868147542,1598468138,722020353,1027143159,212344630,1387219594,1725294528,3745187956,2500153616,458938280,4129215917,1828119673,544571780,3503225445,2297937496,1241802790,267843827,2694610800,1397140384,1558801448,3782667683,1806446719,929573330,2234912681,400817706,616011623,4121520928,3603768725,1761550015,1968522284,4053731006,4192232858,4005120285,872482584,3140537016,3894607381,2287405443,1963876937,3663887957,1584857e3,2975024454,1833426440,4025083860]),ae=new Uint32Array([4143615901,749497569,1285769319,3795025788,2514159847,23610292,3974978748,844452780,3214870880,3751928557,2213566365,1676510905,448177848,3730751033,4086298418,2307502392,871450977,3222878141,4110862042,3831651966,2735270553,1310974780,2043402188,1218528103,2736035353,4274605013,2702448458,3936360550,2693061421,162023535,2827510090,687910808,23484817,3784910947,3371371616,779677500,3503626546,3473927188,4157212626,3500679282,4248902014,2466621104,3899384794,1958663117,925738300,1283408968,3669349440,1840910019,137959847,2679828185,1239142320,1315376211,1547541505,1690155329,739140458,3128809933,3933172616,3876308834,905091803,1548541325,4040461708,3095483362,144808038,451078856,676114313,2861728291,2469707347,993665471,373509091,2599041286,4025009006,4170239449,2149739950,3275793571,3749616649,2794760199,1534877388,572371878,2590613551,1753320020,3467782511,1405125690,4270405205,633333386,3026356924,3475123903,632057672,2846462855,1404951397,3882875879,3915906424,195638627,2385783745,3902872553,1233155085,3355999740,2380578713,2702246304,2144565621,3663341248,3894384975,2502479241,4248018925,3094885567,1594115437,572884632,3385116731,767645374,1331858858,1475698373,3793881790,3532746431,1321687957,619889600,1121017241,3440213920,2070816767,2833025776,1933951238,4095615791,890643334,3874130214,859025556,360630002,925594799,1764062180,3920222280,4078305929,979562269,2810700344,4087740022,1949714515,546639971,1165388173,3069891591,1495988560,922170659,1291546247,2107952832,1813327274,3406010024,3306028637,4241950635,153207855,2313154747,1608695416,1150242611,1967526857,721801357,1220138373,3691287617,3356069787,2112743302,3281662835,1111556101,1778980689,250857638,2298507990,673216130,2846488510,3207751581,3562756981,3008625920,3417367384,2198807050,529510932,3547516680,3426503187,2364944742,102533054,2294910856,1617093527,1204784762,3066581635,1019391227,1069574518,1317995090,1691889997,3661132003,510022745,3238594800,1362108837,1817929911,2184153760,805817662,1953603311,3699844737,120799444,2118332377,207536705,2282301548,4120041617,145305846,2508124933,3086745533,3261524335,1877257368,2977164480,3160454186,2503252186,4221677074,759945014,254147243,2767453419,3801518371,629083197,2471014217,907280572,3900796746,940896768,2751021123,2625262786,3161476951,3661752313,3260732218,1425318020,2977912069,1496677566,3988592072,2140652971,3126511541,3069632175,977771578,1392695845,1698528874,1411812681,1369733098,1343739227,3620887944,1142123638,67414216,3102056737,3088749194,1626167401,2546293654,3941374235,697522451,33404913,143560186,2595682037,994885535,1247667115,3859094837,2699155541,3547024625,4114935275,2968073508,3199963069,2732024527,1237921620,951448369,1898488916,1211705605,2790989240,2233243581,3598044975]),oe=new Uint32Array([2246066201,858518887,1714274303,3485882003,713916271,2879113490,3730835617,539548191,36158695,1298409750,419087104,1358007170,749914897,2989680476,1261868530,2995193822,2690628854,3443622377,3780124940,3796824509,2976433025,4259637129,1551479e3,512490819,1296650241,951993153,2436689437,2460458047,144139966,3136204276,310820559,3068840729,643875328,1969602020,1680088954,2185813161,3283332454,672358534,198762408,896343282,276269502,3014846926,84060815,197145886,376173866,3943890818,3813173521,3545068822,1316698879,1598252827,2633424951,1233235075,859989710,2358460855,3503838400,3409603720,1203513385,1193654839,2792018475,2060853022,207403770,1144516871,3068631394,1121114134,177607304,3785736302,326409831,1929119770,2983279095,4183308101,3474579288,3200513878,3228482096,119610148,1170376745,3378393471,3163473169,951863017,3337026068,3135789130,2907618374,1183797387,2015970143,4045674555,2182986399,2952138740,3928772205,384012900,2454997643,10178499,2879818989,2596892536,111523738,2995089006,451689641,3196290696,235406569,1441906262,3890558523,3013735005,4158569349,1644036924,376726067,1006849064,3664579700,2041234796,1021632941,1374734338,2566452058,371631263,4007144233,490221539,206551450,3140638584,1053219195,1853335209,3412429660,3562156231,735133835,1623211703,3104214392,2738312436,4096837757,3366392578,3110964274,3956598718,3196820781,2038037254,3877786376,2339753847,300912036,3766732888,2372630639,1516443558,4200396704,1574567987,4069441456,4122592016,2699739776,146372218,2748961456,2043888151,35287437,2596680554,655490400,1132482787,110692520,1031794116,2188192751,1324057718,1217253157,919197030,686247489,3261139658,1028237775,3135486431,3059715558,2460921700,986174950,2661811465,4062904701,2752986992,3709736643,367056889,1353824391,731860949,1650113154,1778481506,784341916,357075625,3608602432,1074092588,2480052770,3811426202,92751289,877911070,3600361838,1231880047,480201094,3756190983,3094495953,434011822,87971354,363687820,1717726236,1901380172,3926403882,2481662265,400339184,1490350766,2661455099,1389319756,2558787174,784598401,1983468483,30828846,3550527752,2716276238,3841122214,1765724805,1955612312,1277890269,1333098070,1564029816,2704417615,1026694237,3287671188,1260819201,3349086767,1016692350,1582273796,1073413053,1995943182,694588404,1025494639,3323872702,3551898420,4146854327,453260480,1316140391,1435673405,3038941953,3486689407,1622062951,403978347,817677117,950059133,4246079218,3278066075,1486738320,1417279718,481875527,2549965225,3933690356,760697757,1452955855,3897451437,1177426808,1702951038,4085348628,2447005172,1084371187,3516436277,3068336338,1073369276,1027665953,3284188590,1230553676,1368340146,2226246512,267243139,2274220762,4070734279,2497715176,2423353163,2504755875]),le=new Uint32Array([3793104909,3151888380,2817252029,895778965,2005530807,3871412763,237245952,86829237,296341424,3851759377,3974600970,2475086196,709006108,1994621201,2972577594,937287164,3734691505,168608556,3189338153,2225080640,3139713551,3033610191,3025041904,77524477,185966941,1208824168,2344345178,1721625922,3354191921,1066374631,1927223579,1971335949,2483503697,1551748602,2881383779,2856329572,3003241482,48746954,1398218158,2050065058,313056748,4255789917,393167848,1912293076,940740642,3465845460,3091687853,2522601570,2197016661,1727764327,364383054,492521376,1291706479,3264136376,1474851438,1685747964,2575719748,1619776915,1814040067,970743798,1561002147,2925768690,2123093554,1880132620,3151188041,697884420,2550985770,2607674513,2659114323,110200136,1489731079,997519150,1378877361,3527870668,478029773,2766872923,1022481122,431258168,1112503832,897933369,2635587303,669726182,3383752315,918222264,163866573,3246985393,3776823163,114105080,1903216136,761148244,3571337562,1690750982,3166750252,1037045171,1888456500,2010454850,642736655,616092351,365016990,1185228132,4174898510,1043824992,2023083429,2241598885,3863320456,3279669087,3674716684,108438443,2132974366,830746235,606445527,4173263986,2204105912,1844756978,2532684181,4245352700,2969441100,3796921661,1335562986,4061524517,2720232303,2679424040,634407289,885462008,3294724487,3933892248,2094100220,339117932,4048830727,3202280980,1458155303,2689246273,1022871705,2464987878,3714515309,353796843,2822958815,4256850100,4052777845,551748367,618185374,3778635579,4020649912,1904685140,3069366075,2670879810,3407193292,2954511620,4058283405,2219449317,3135758300,1120655984,3447565834,1474845562,3577699062,550456716,3466908712,2043752612,881257467,869518812,2005220179,938474677,3305539448,3850417126,1315485940,3318264702,226533026,965733244,321539988,1136104718,804158748,573969341,3708209826,937399083,3290727049,2901666755,1461057207,4013193437,4066861423,3242773476,2421326174,1581322155,3028952165,786071460,3900391652,3918438532,1485433313,4023619836,3708277595,3678951060,953673138,1467089153,1930354364,1533292819,2492563023,1346121658,1685000834,1965281866,3765933717,4190206607,2052792609,3515332758,690371149,3125873887,2180283551,2903598061,3933952357,436236910,289419410,14314871,1242357089,2904507907,1616633776,2666382180,585885352,3471299210,2699507360,1432659641,277164553,3354103607,770115018,2303809295,3741942315,3177781868,2853364978,2269453327,3774259834,987383833,1290892879,225909803,1741533526,890078084,1496906255,1111072499,916028167,243534141,1252605537,2204162171,531204876,290011180,3916834213,102027703,237315147,209093447,1486785922,220223953,2758195998,4175039106,82940208,3127791296,2569425252,518464269,1353887104,3941492737,2377294467,3935040926]);class si{static BLOCK_SIZE=8;static ROUNDS=16;static P32=3084996963;static Q32=2654435769;S;constructor(e){const t=e.slice(0,16);this.S=this.expandKey(t)}getBlockSize(){return si.BLOCK_SIZE}blockDecrypt(e,t,n){for(let i=0;i<t;i+=si.BLOCK_SIZE)this.decryptBlock(e,i,n,i)}expandKey(e){const t=si.ROUNDS,n=Math.max(e.length/4,1),i=new Uint32Array(n);for(let d=e.length-1;d>=0;d--)i[Math.floor(d/4)]=(i[Math.floor(d/4)]<<8)+e[d]>>>0;const r=2*(t+1),a=new Uint32Array(r);a[0]=si.P32;for(let d=1;d<r;d++)a[d]=a[d-1]+si.Q32>>>0;let o=0,l=0,c=0,h=0;const u=3*Math.max(r,n);for(let d=0;d<u;d++)o=a[c]=lu(a[c]+o+l>>>0,3),l=i[h]=lu(i[h]+o+l>>>0,o+l&31),c=(c+1)%r,h=(h+1)%n;return a}decryptBlock(e,t,n,i){const r=si.ROUNDS,a=this.S,o=new DataView(e.buffer,e.byteOffset+t,8);let l=o.getUint32(0,!0),c=o.getUint32(4,!0);for(let u=r;u>=1;u--)c=(cu(c-a[2*u+1]>>>0,l&31)^l)>>>0,l=(cu(l-a[2*u]>>>0,c&31)^c)>>>0;c=c-a[1]>>>0,l=l-a[0]>>>0;const h=new DataView(n.buffer,n.byteOffset+i,8);h.setUint32(0,l,!0),h.setUint32(4,c,!0)}}function lu(s,e){return(s<<e|s>>>32-e)>>>0}function cu(s,e){return(s>>>e|s<<32-e)>>>0}class ri{static BLOCK_SIZE=16;static ROUNDS=20;static P32=3084996963;static Q32=2654435769;S;constructor(e){const t=e.slice(0,16);this.S=this.expandKey(t)}getBlockSize(){return ri.BLOCK_SIZE}blockDecrypt(e,t,n){for(let i=0;i<t;i+=ri.BLOCK_SIZE)this.decryptBlock(e,i,n,i)}expandKey(e){const t=ri.ROUNDS,n=Math.max(e.length/4,1),i=new Uint32Array(n);for(let d=e.length-1;d>=0;d--)i[Math.floor(d/4)]=(i[Math.floor(d/4)]<<8)+e[d]>>>0;const r=2*t+4,a=new Uint32Array(r);a[0]=ri.P32;for(let d=1;d<r;d++)a[d]=a[d-1]+ri.Q32>>>0;let o=0,l=0,c=0,h=0;const u=3*Math.max(r,n);for(let d=0;d<u;d++)o=a[c]=Xr(a[c]+o+l>>>0,3),l=i[h]=Xr(i[h]+o+l>>>0,o+l&31),c=(c+1)%r,h=(h+1)%n;return a}decryptBlock(e,t,n,i){const r=ri.ROUNDS,a=this.S,o=new DataView(e.buffer,e.byteOffset+t,16);let l=o.getUint32(0,!0),c=o.getUint32(4,!0),h=o.getUint32(8,!0),u=o.getUint32(12,!0);h=h-a[2*r+3]>>>0,l=l-a[2*r+2]>>>0;for(let p=r;p>=1;p--){const g=u;u=h,h=c,c=l,l=g;const _=Xr(uu(u,2*u+1>>>0),5),f=Xr(uu(c,2*c+1>>>0),5);h=(hu(h-a[2*p+1]>>>0,f&31)^_)>>>0,l=(hu(l-a[2*p]>>>0,_&31)^f)>>>0}u=u-a[1]>>>0,c=c-a[0]>>>0;const d=new DataView(n.buffer,n.byteOffset+i,16);d.setUint32(0,l,!0),d.setUint32(4,c,!0),d.setUint32(8,h,!0),d.setUint32(12,u,!0)}}function Xr(s,e){return(s<<e|s>>>32-e)>>>0}function hu(s,e){return(s>>>e|s<<32-e)>>>0}function uu(s,e){return Math.imul(s,e)>>>0}class _a{static BLOCK_SIZE=16;lKey=new Uint32Array(40);constructor(e){this.setKey(e.slice(0,16))}getBlockSize(){return _a.BLOCK_SIZE}blockDecrypt(e,t,n){for(let i=0;i<t;i+=_a.BLOCK_SIZE)this.decryptBlock(e,i,n,i)}setKey(e){const t=new Uint32Array(15);for(let n=0;n<e.length/4;n++)t[n]=Ws(e,n*4);t[e.length/4]=e.length/4>>>0;for(let n=0;n<4;n++){for(let i=0;i<15;i++)t[i]=(t[i]^Cn(t[(i+8)%15]^t[(i+13)%15],3)^4*i+n)>>>0;for(let i=0;i<4;i++)for(let r=0;r<15;r++)t[r]=Cn(t[r]+yn[t[(r+14)%15]%512]>>>0,9);for(let i=0;i<10;i++)this.lKey[10*n+i]=t[4*i%15]}for(let n=5;n<37;n+=2){let i=(this.lKey[n]|3)>>>0;const r=A2(i);r!==0&&(i=(i^Cn(yn[265+(this.lKey[n]&3)],this.lKey[n-1]&31)&r)>>>0),this.lKey[n]=i}}decryptBlock(e,t,n,i){const r=this.lKey;let a=Ws(e,t)+r[36]>>>0,o=Ws(e,t+4)+r[37]>>>0,l=Ws(e,t+8)+r[38]>>>0,c=Ws(e,t+12)+r[39]>>>0;[c,l,o,a]=ei(c,l,o,a),c=c+a>>>0,[l,o,a,c]=ei(l,o,a,c),l=l+o>>>0,[o,a,c,l]=ei(o,a,c,l),[a,c,l,o]=ei(a,c,l,o),[c,l,o,a]=ei(c,l,o,a),c=c+a>>>0,[l,o,a,c]=ei(l,o,a,c),l=l+o>>>0,[o,a,c,l]=ei(o,a,c,l),[a,c,l,o]=ei(a,c,l,o),[c,l,o,a]=Vt(c,l,o,a,r,34),[l,o,a,c]=Vt(l,o,a,c,r,32),[o,a,c,l]=Vt(o,a,c,l,r,30),[a,c,l,o]=Vt(a,c,l,o,r,28),[c,l,o,a]=Vt(c,l,o,a,r,26),[l,o,a,c]=Vt(l,o,a,c,r,24),[o,a,c,l]=Vt(o,a,c,l,r,22),[a,c,l,o]=Vt(a,c,l,o,r,20),[c,a,o,l]=Vt(c,a,o,l,r,18),[l,c,a,o]=Vt(l,c,a,o,r,16),[o,l,c,a]=Vt(o,l,c,a,r,14),[a,o,l,c]=Vt(a,o,l,c,r,12),[c,a,o,l]=Vt(c,a,o,l,r,10),[l,c,a,o]=Vt(l,c,a,o,r,8),[o,l,c,a]=Vt(o,l,c,a,r,6),[a,o,l,c]=Vt(a,o,l,c,r,4),[c,l,o,a]=ti(c,l,o,a),[l,o,a,c]=ti(l,o,a,c),o=o-l>>>0,[o,a,c,l]=ti(o,a,c,l),a=a-c>>>0,[a,c,l,o]=ti(a,c,l,o),[c,l,o,a]=ti(c,l,o,a),[l,o,a,c]=ti(l,o,a,c),o=o-l>>>0,[o,a,c,l]=ti(o,a,c,l),a=a-c>>>0,[a,c,l,o]=ti(a,c,l,o),$r(a-r[0]>>>0,n,i),$r(o-r[1]>>>0,n,i+4),$r(l-r[2]>>>0,n,i+8),$r(c-r[3]>>>0,n,i+12)}}function Cn(s,e){return(s<<e|s>>>32-e)>>>0}function ia(s,e){return(s>>>e|s<<32-e)>>>0}function Ws(s,e){return(s[e]|s[e+1]<<8|s[e+2]<<16|s[e+3]<<24)>>>0}function $r(s,e,t){e[t]=s&255,e[t+1]=s>>>8&255,e[t+2]=s>>>16&255,e[t+3]=s>>>24&255}function A2(s){let e=((~s^s>>>1)&2147483647)>>>0;return e=(e&e>>>1&e>>>2)>>>0,e=(e&e>>>3&e>>>6)>>>0,e===0?0:(e=e<<1>>>0,e=(e|e<<1)>>>0,e=(e|e<<2)>>>0,e=(e|e<<4)>>>0,e=(e|e<<1&~s>>>0&2147483648)>>>0,(e&4294967292)>>>0)}function ei(s,e,t,n){let i=ia(s,8);return e=(e^yn[s&255])>>>0,e=e+yn[(i&255)+256]>>>0,i=ia(s,16),s=ia(s,24),t=t+yn[i&255]>>>0,n=(n^yn[(s&255)+256])>>>0,[s,e,t,n]}function ti(s,e,t,n){let i=Cn(s,8);return e=(e^yn[(s&255)+256])>>>0,t=t-yn[i&255]>>>0,i=Cn(s,16),s=Cn(s,24),n=n-yn[(i&255)+256]>>>0,n=(n^yn[s&255])>>>0,[s,e,t,n]}function Vt(s,e,t,n,i,r){let a=Math.imul(s,i[r+1])>>>0;s=ia(s,13);const o=s+i[r]>>>0,l=yn[o&511];a=Cn(a,5);let c=(l^a)>>>0;return t=t-Cn(o,a&31)>>>0,a=Cn(a,5),c=(c^a)>>>0,n=(n^a)>>>0,e=e-Cn(c,a&31)>>>0,[s,e,t,n]}const yn=new Uint32Array([164676729,684261344,2225761337,2645389959,2113903587,3559293793,3379405268,2037697683,2245023790,709580549,480340578,3283953565,253699557,1365260079,3331703291,1300230628,2925489140,225635910,4280540810,2983169667,4048093922,1050156610,2348105398,2135685292,2204311427,630653445,1991239556,981021140,1334076496,1550107638,554327832,3331877414,687138854,979413020,3544229476,2124947652,1382451141,2128466219,849419549,2627661958,2163664945,2876179629,1459329875,2335050076,3062191790,3525643021,692746017,3793728083,2920507209,3895111302,2469810436,2571127398,2024244444,3063654475,67397523,601578526,1187701206,803373364,1512192322,409193819,3247490787,132102214,1857587222,755878986,2764877401,932734733,3422196883,1330126149,3942419624,3675335126,2957286944,257165307,1634195880,3522451299,1303025347,1005345112,2880151572,3066876417,953558943,40378901,2402774229,153887614,3217384851,847813932,2236300949,96181059,2110610893,2687406700,4209321957,916570928,873652654,4065850466,1011817841,815982601,1759901009,2623650372,1575815864,1976437192,2522151230,1770785994,607957988,721824663,255561118,14700767,4233978214,3814691464,3229177101,93433576,2387811956,1979594104,795706010,4127924654,2515069837,1721321579,2417851803,4251807281,277916911,3764850136,3669157522,3446489957,3845731604,989021680,1648491597,1175298979,2077177641,2347880928,346734704,361229653,989691198,3539115521,698995190,4021357651,3476784911,3021247324,1715758573,38456007,1504134337,489240231,3696757414,3478604968,67795472,1826101255,2325265996,2899222627,3275657909,3521175613,3005370750,546487571,946547786,1390992728,1483042299,1350697841,1098979478,3812093822,3550458137,3380547062,1761517595,2706417381,1428523362,3949982747,3620326778,2786708894,3169883510,645054579,4026792764,1253549323,344199786,1216063921,2790246854,4136992073,951085685,3716177869,1674613967,4112292254,447009603,3091813012,3466563225,3221018480,3351410124,931419047,2065808947,964641213,1318375729,2462850968,1494608465,2583191991,3382184584,494206303,2963576312,1632497360,3044511466,1497463085,4203790840,871900340,3298186098,1073141072,1285947072,2251352420,1530903510,2107796040,2986550042,69825812,761500422,783364425,379867762,1394891168,2388609138,4184262617,118656448,222616418,2949174573,103899441,3627608014,465837312,976129039,3934487422,3112465277,330975377,3304634697,2799086771,2719337934,2203681675,1808902705,4118404434,565788563,4111951745,410910174,3914001270,725155156,1126031834,2872657957,2597520527,3756667562,1704227811,1648326755,4080299097,2872751749,860268811,1800815678,3336438264,2369920960,2601439500,2297537001,1421996073,2112542075,2373690406,1291130762,1427799242,446324488,4241904057,627069314,3776956099,3070072438,863711271,3083397908,2657079344,1800921940,2911976695,2115397773,1485253225,741328863,3817458886,812879345,136619828,3782834827,2762528123,1532827963,3366465691,1945741688,1933151538,257513278,3923716867,3903174344,2223834884,2564789186,1913265603,1750017434,2486937672,2788622674,2252037795,3514537867,1838897391,175115732,2805806783,2389313577,2257959956,3814405191,2470102376,2291445794,793844775,3724266556,6709942,293372926,1309848596,3267143526,976219152,4099286048,1434005034,1190516823,3470403022,3277856059,1811983174,4021066792,3015921735,1629355747,628896263,4258628738,991221839,599706468,2692084643,143625901,128840024,2006357052,4207591229,3231133901,4150761833,3661949421,746933266,898850723,788888991,1762010360,481344253,2064498118,2165253051,4203911706,1838586391,1732417435,1957461253,17720772,2258884963,4178032032,3489934291,361594115,679117397,3148363375,158260275,563178107,2008378246,2501255929,2797987408,2364151761,3448529596,2748724275,898263293,261856572,3601475931,4264769610,3221255054,3446139695,3807079874,2536737538,113898054,1100804525,730054725,925102474,3411751049,369879767,1565083222,905488203,508456094,235965,1732667520,3021424689,2901681074,3397474995,1516475879,808085445,2346402923,277843876,270679770,2461578379,2134429934,2871460308,40031253,2938260016,3017312954,4172465071,3673681776,3432502199,3915467628,732872692,1895204815,946639190,3456708325,32013734,1827217002,3145452676,3348245536,2637918717,101597638,3612938005,1308867399,406591886,1676587584,769389722,1834793556,2453098671,4192289334,2016941611,1500671090,2176214880,3140036289,1218498061,2797619565,2906869883,1905084778,2649773999,1152499174,88299228,3732729141,3575255947,1644727497,897778449,3379494050,1752139500,2390215528,1675744952,3356465016,2042925565,457992178,1919520125,1580633137,4158217774,2714978623,3705226046,2305758546,1271188090,2798762740,2779344332,200248134,2708077991,1960788151,1310754820,2591385095,59672520,539041348,2340082879,3326099253,407429997,2159915064,509774108,1681727751,3204765432,554249356,4131713929,125321294,2071506360,2730831187,1108703934,2720349742,2079585454,2163578105,2503054567,2011927277,3011602736,3666711350,3208934505,4067267715,4000296661,1899434549,3728891763,3034947395,2109615438,758624645,1239194211,2562956696,318884258,949689279,202922125,2753675706,2057537116,1910539608,1012726954,2099485860,43506141,3621529648,1261928491,1948822356,2934833991,1262467973,1764699912,323901326,920248511,2928369615,3988340431,723985550,386839023,2110095318,511053590,2970838529,2253265819,3622466329,985166269,3483686767,3810252674,230601833,2881052769,1399912541,4289756727,3660632315,3955849142,194556943,978128870,3746546283,362607146,3264796386,729345898,1638484672,2874544519,351183088,3742187876,430928110]);class Zs{static BLOCK_SIZE=8;static ROUNDS=8;static SUBKEYS=52;decryptKeys;constructor(e){const t=C2(e);this.decryptKeys=R2(t)}getBlockSize(){return Zs.BLOCK_SIZE}blockDecrypt(e,t,n){for(let i=0;i<t;i+=Zs.BLOCK_SIZE)this.decryptBlock(e,i,n,i)}decryptBlock(e,t,n,i){const r=new DataView(e.buffer,e.byteOffset+t,8),a=this.decryptKeys;let o=r.getUint16(0,!1),l=r.getUint16(2,!1),c=r.getUint16(4,!1),h=r.getUint16(6,!1),u=0;for(let m=0;m<Zs.ROUNDS;m++){o=qi(o,a[u++]),l=Yi(l,a[u++]),c=Yi(c,a[u++]),h=qi(h,a[u++]);const y=l,w=c;c=c^o,l=l^h,c=qi(c,a[u++]),l=Yi(l,c),l=qi(l,a[u++]),c=Yi(c,l),o=o^l,h=h^c,l=l^w,c=c^y}const d=qi(o,a[u++]),p=Yi(c,a[u++]),g=Yi(l,a[u++]),_=qi(h,a[u++]),f=new DataView(n.buffer,n.byteOffset+i,8);f.setUint16(0,d,!1),f.setUint16(2,p,!1),f.setUint16(4,g,!1),f.setUint16(6,_,!1)}}function C2(s){const e=new Uint16Array(52),t=new DataView(s.buffer,s.byteOffset,16);for(let n=0;n<8;n++)e[n]=t.getUint16(n*2,!1);for(let n=8;n<52;n++)(n&7)===6?e[n]=(e[n-7]<<9|e[n-14]>>>7)&65535:(n&7)===7?e[n]=(e[n-15]<<9|e[n-14]>>>7)&65535:e[n]=(e[n-7]<<9|e[n-6]>>>7)&65535;return e}function R2(s){const e=new Uint16Array(52);let t=0,n=52,i=Ki(s[t++]),r=Zi(s[t++]),a=Zi(s[t++]),o=Ki(s[t++]);e[--n]=o,e[--n]=a,e[--n]=r,e[--n]=i;for(let l=1;l<8;l++)i=s[t++],r=s[t++],e[--n]=r,e[--n]=i,i=Ki(s[t++]),r=Zi(s[t++]),a=Zi(s[t++]),o=Ki(s[t++]),e[--n]=o,e[--n]=r,e[--n]=a,e[--n]=i;return i=s[t++],r=s[t++],e[--n]=r,e[--n]=i,i=Ki(s[t++]),r=Zi(s[t++]),a=Zi(s[t++]),o=Ki(s[t++]),e[--n]=o,e[--n]=a,e[--n]=r,e[--n]=i,e}function qi(s,e){s=s&65535,e=e&65535,s===0&&(s=65536),e===0&&(e=65536);const t=s*e%65537;return t===65536?0:t&65535}function Yi(s,e){return s+e&65535}function Ki(s){if(s=s&65535,s<=1)return s;let e=Math.floor(65537/s),t=65537%s;if(t===1)return 65537-e&65535;let n=1;for(;t!==1;){const i=Math.floor(s/t);if(s=s%t,n=(n+i*e)%65537,s===1)return n&65535;const r=Math.floor(t/s);t=t%s,e=(e+r*n)%65537}return 65537-e&65535}function Zi(s){return 65536-(s&65535)&65535}const du=[[4,10,9,2,13,8,0,14,6,11,1,12,7,15,5,3],[14,11,4,12,6,13,15,10,2,3,8,1,0,7,5,9],[5,8,1,13,10,3,4,2,14,15,12,7,6,0,9,11],[7,13,10,1,0,8,9,15,14,4,6,12,11,2,5,3],[6,12,7,1,5,15,13,8,4,10,9,14,0,3,11,2],[4,11,10,0,7,2,1,13,3,6,8,5,9,12,15,14],[13,11,4,1,3,15,5,9,0,10,14,7,6,8,2,12],[1,15,13,0,5,7,10,4,9,2,3,14,6,11,8,12]],jr=I2();function I2(){const s=[];for(let e=0;e<4;e++){const t=new Uint32Array(256),n=du[2*e],i=du[2*e+1];for(let r=0;r<256;r++){const a=n[r&15],o=i[r>>>4&15];t[r]=(a|o<<4)<<8*e}s.push(t)}return s}function fu(s){return(jr[0][s&255]|jr[1][s>>>8&255]|jr[2][s>>>16&255]|jr[3][s>>>24&255])>>>0}function pu(s){return(s<<11|s>>>21)>>>0}function Po(s,e){return(s[e]|s[e+1]<<8|s[e+2]<<16|s[e+3]<<24)>>>0}function mu(s,e,t){e[t]=s&255,e[t+1]=s>>>8&255,e[t+2]=s>>>16&255,e[t+3]=s>>>24&255}class Js{static BLOCK_SIZE=8;static ROUNDS=32;K;decryptSchedule;constructor(e){this.K=new Uint32Array(8);for(let t=0;t<8;t++)this.K[t]=Po(e,t*4);this.decryptSchedule=new Uint32Array(Js.ROUNDS);for(let t=0;t<8;t++)this.decryptSchedule[t]=this.K[t];for(let t=0;t<3;t++)for(let n=0;n<8;n++)this.decryptSchedule[8+t*8+n]=this.K[7-n]}getBlockSize(){return Js.BLOCK_SIZE}blockDecrypt(e,t,n){for(let i=0;i<t;i+=Js.BLOCK_SIZE)this.decryptBlock(e,i,n,i)}decryptBlock(e,t,n,i){let r=Po(e,t),a=Po(e,t+4);const o=this.decryptSchedule;for(let l=0;l<31;l++){const c=r+o[l]>>>0,h=fu(c),u=pu(h),d=(a^u)>>>0;a=r,r=d}{const l=r+o[31]>>>0,c=fu(l),h=pu(c);a=(a^h)>>>0}mu(r,n,i),mu(a,n,i+4)}}function gu(s,e){switch(s&7){case 0:return new ii(e);case 1:return new rs(e);case 2:return new bi(e);case 3:return new si(e);case 4:return new ri(e);case 5:return new _a(e);case 6:return new Zs(e);case 7:return new Js(e);default:throw new Error(`Unsupported ModulusCryptor algorithm: ${s&7}`)}}const L2=new TextEncoder().encode("webzen#@!01webzen#@!01webzen#@!0"),qr=["TEA","ThreeWay","CAST5","RC5","RC6","MARS","IDEA","GOST"];function wd(s){if(s.length<34)throw new Error("ModulusCryptor: source buffer too short");const e=new Uint8Array(s),t=e[1],n=e[0],i=e.length,r=i-34;console.log(`[ModulusCryptor] size=${i}, dataSize=${r}, algo1=${t}(${qr[t&7]}), algo2=${n}(${qr[n&7]})`);const a=gu(t,L2),o=1024-1024%a.getBlockSize();if(console.log(`[ModulusCryptor] Stage1: cipher=${qr[t&7]}, blockSize=${o}, cipherBlockSize=${a.getBlockSize()}`),r>4*o){const d=2+(r>>>1);console.log(`[ModulusCryptor] Stage1: middle block at index=${d}, len=${o}`);const p=e.slice(d,d+o);a.blockDecrypt(p,p.length,p),e.set(p,d)}if(r>o){let d=i-o;console.log(`[ModulusCryptor] Stage1: end block at index=${d}, len=${o}`);let p=e.slice(d,d+o);a.blockDecrypt(p,p.length,p),e.set(p,d),d=2,console.log(`[ModulusCryptor] Stage1: start block at index=${d}, len=${o}`),p=e.slice(d,d+o),a.blockDecrypt(p,p.length,p),e.set(p,d)}const l=e.slice(2,34);console.log(`[ModulusCryptor] key2 (first 16): [${Array.from(l.slice(0,16)).map(d=>d.toString(16).padStart(2,"0")).join(" ")}]`);const c=gu(n,l),h=r-r%c.getBlockSize();if(console.log(`[ModulusCryptor] Stage2: cipher=${qr[n&7]}, decryptSize=${h}, cipherBlockSize=${c.getBlockSize()}`),h>0){const p=e.slice(34,34+h);c.blockDecrypt(p,p.length,p),e.set(p,34)}const u=e.slice(34);return console.log(`[ModulusCryptor] Result first 10: [${Array.from(u.slice(0,10)).join(", ")}]`),u}const Gt=256;var Ll=(s=>(s[s.None=0]="None",s[s.SafeZone=1]="SafeZone",s[s.Character=2]="Character",s[s.NoMove=4]="NoMove",s[s.NoGround=8]="NoGround",s[s.Water=16]="Water",s[s.Action=32]="Action",s[s.Height=64]="Height",s[s.CameraUp=128]="CameraUp",s))(Ll||{});function D2(s){let e=new Uint8Array(s);e.length>4&&e[0]===65&&e[1]===84&&e[2]===84&&e[3]===1?e=wd(e.slice(4)):e=Pa(e),e=Sx(e);const t=Gt*Gt+4,n=Gt*Gt*2+4;if(e.length!==t&&e.length!==n)throw new Error(`ATT: unexpected size ${e.length} (expected ${t} or ${n})`);const i=e.length===n,r=e[0],a=e[1],o=e[2],l=e[3],c=new Uint8Array(Gt*Gt);let h=4;for(let u=0;u<Gt*Gt;u++)i?(c[u]=e[h]&255,h+=2):(c[u]=e[h],h+=1);return{version:r,index:a,width:o,height:l,terrainWall:c}}function P2(s){let e=new Uint8Array(s);const t=Array.from(e.slice(0,8)).map(h=>h.toString(16).padStart(2,"0")).join(" ");if(console.log(`[MAP] file size=${e.length}, header: ${t}`),e.length>4&&e[0]===77&&e[1]===65&&e[2]===80&&e[3]===1){console.log("[MAP] Detected MAP\\x01 header → ModulusCryptor");const h=e.slice(4);console.log(`[MAP] ModulusCryptor input: size=${h.length}, algo bytes: [${h[0]}, ${h[1]}] → algo1=${h[1]&7}, algo2=${h[0]&7}`),e=wd(h)}else console.log("[MAP] No MAP header → FileCryptor"),e=Pa(e);console.log(`[MAP] Decrypted size=${e.length}, first 10 bytes: [${Array.from(e.slice(0,10)).join(", ")}]`);const n=Gt*Gt,i=e[0],r=e[1];let a=2;const o=e.slice(a,a+n);a+=n;const l=e.slice(a,a+n);a+=n;const c=e.slice(a,a+n);return{version:i,mapNumber:r,layer1:o,layer2:l,alpha:c}}function _u(s){const e=new DataView(s),t=new Uint8Array(s),n=String.fromCharCode(t[0],t[1],t[2]);t[3];let i=4;e.getInt16(i,!0),i+=2,e.getInt32(i,!0),i+=4,e.getInt16(i,!0),i+=2,e.getInt16(i,!0),i+=2,e.getInt32(i,!0),i+=4,e.getInt32(i,!0),i+=4;const r=e.getInt32(i,!0);i+=4;const a=e.getInt32(i,!0);if(i+=4,e.getInt16(i,!0),i+=2,e.getInt16(i,!0),i+=2,i+=24,n==="BM8"||n==="BM"){i=1084;const o=r*a,l=new Uint8Array(o*4);for(let c=0;c<o;c++){const h=t[i++];l[c*4]=h,l[c*4+1]=0,l[c*4+2]=0,l[c*4+3]=255}return{width:r,height:a,data:l}}else if(n==="BM6"){const o=r*a,l=new Uint8Array(o*4);for(let c=0;c<o;c++){const h=t[i++],u=t[i++],d=t[i++];l[c*4]=d,l[c*4+1]=u,l[c*4+2]=h,l[c*4+3]=255}return{width:r,height:a,data:l}}else throw new Error(`Unknown OZB file type: "${n}"`)}function U2(s){let e=new Uint8Array(s);e=Pa(e);const t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=e[0],i=e[1],r=t.getInt16(2,!0),o={0:32,1:34,2:35,3:47,4:48,5:56}[n];if(o===void 0)throw new Error(`OBJ: unsupported version ${n}`);const l=[];let c=4;for(let h=0;h<r;h++){const u=t.getInt16(c,!0);c+=2;const d=t.getFloat32(c,!0);c+=4;const p=t.getFloat32(c,!0);c+=4;const g=t.getFloat32(c,!0);c+=4;const _=t.getFloat32(c,!0);c+=4;const f=t.getFloat32(c,!0);c+=4;const m=t.getFloat32(c,!0);c+=4;const y=t.getFloat32(c,!0);c+=4;const w=o-32;c+=w,l.push({type:u,position:{x:d,y:p,z:g},angle:{x:_,y:f,z:m},scale:y})}return{version:n,mapNumber:i,objects:l}}const us=100,uc=Gt*us,F2=1200;function N2(s,e,t){const n=Gt,i=n+1,r=new Float32Array(i*i*3),a=new Float32Array(i*i*3),o=new Float32Array(i*i*2),l=new Float32Array(i*i*3);function c(p,g){const _=Math.min(Math.max(p,0),n-1),m=Math.min(Math.max(g,0),n-1)*n+_;let y=s.data[m*4]*1.5;return e.terrainWall[m]&Ll.Height&&(y+=F2),y}for(let p=0;p<i;p++)for(let g=0;g<i;g++){const _=p*i+g,f=Math.min(g,n-1),m=Math.min(p,n-1);if(r[_*3]=g*us,r[_*3+1]=c(f,m),r[_*3+2]=uc-p*us,o[_*2]=g/n,o[_*2+1]=p/n,t){const y=m*n+f;l[_*3]=t.data[y*4]/255,l[_*3+1]=t.data[y*4+1]/255,l[_*3+2]=t.data[y*4+2]/255}else l[_*3]=l[_*3+1]=l[_*3+2]=1}for(let p=0;p<i;p++)for(let g=0;g<i;g++){const _=p*i+g,f=Math.min(g,n-1),m=Math.min(p,n-1),y=c(f-1,m),w=c(f+1,m),E=c(f,m-1),C=c(f,m+1),x=y-w,b=2*us,I=C-E,v=Math.sqrt(x*x+b*b+I*I);a[_*3]=x/v,a[_*3+1]=b/v,a[_*3+2]=I/v}const h=new Uint32Array(n*n*6);let u=0;for(let p=0;p<n;p++)for(let g=0;g<n;g++){const _=p*n+g;if(e.terrainWall[_]&Ll.NoGround)continue;const f=p*i+g,m=p*i+g+1,y=(p+1)*i+g+1,w=(p+1)*i+g;h[u++]=f,h[u++]=m,h[u++]=w,h[u++]=m,h[u++]=y,h[u++]=w}const d=new Ot;return d.setAttribute("position",new gt(r,3)),d.setAttribute("normal",new gt(a,3)),d.setAttribute("uv",new gt(o,2)),d.setAttribute("color",new gt(l,3)),d.setIndex(new gt(h.slice(0,u),1)),d}const Ji=64;function B2(s){const t=Math.max(...s.keys(),0)+1,n=Math.ceil(Math.sqrt(t)),i=Math.ceil(t/n);let r=Ji;for(const[,h]of s){const u=h.image;if(!u)continue;const d=u.width??Ji,p=u.height??Ji;r=Math.max(r,d,p)}const a=document.createElement("canvas");a.width=n*r,a.height=i*r;const o=a.getContext("2d");o.imageSmoothingEnabled=!1,o.clearRect(0,0,a.width,a.height);for(const[h,u]of s){const d=h%n,p=Math.floor(h/n),g=u.image,_=u.image,f=_?.width??Ji,m=_?.height??Ji;if(g){const y=d*r,w=p*r;o.save(),o.beginPath(),o.rect(y,w,r,r),o.clip();for(let E=0;E<r;E+=m)for(let C=0;C<r;C+=f)o.drawImage(g,y+C,w+E);o.restore()}}const l=new _p(a);l.wrapS=Bt,l.wrapT=Bt,l.magFilter=Pt,l.minFilter=Pt,l.generateMipmaps=!1,l.flipY=!1,l.colorSpace=Tn;const c=Ji/r;return{texture:l,cols:n,rows:i,count:t,cellSize:r,tileUvScale:c}}function O2(s){const e=Gt,t=new hs(s.layer1,e,e,ls,Wt);t.needsUpdate=!0,t.minFilter=bt,t.magFilter=bt,t.wrapS=Bt,t.wrapT=Bt;const n=new hs(s.layer2,e,e,ls,Wt);n.needsUpdate=!0,n.minFilter=bt,n.magFilter=bt,n.wrapS=Bt,n.wrapT=Bt;const i=new hs(s.alpha,e,e,ls,Wt);return i.needsUpdate=!0,i.minFilter=bt,i.magFilter=bt,i.wrapS=Bt,i.wrapT=Bt,{layer1Tex:t,layer2Tex:n,alphaTex:i}}const k2=`
varying vec3 vColor;
varying vec2 vWorldXZ;

void main() {
    vColor = color;
    vWorldXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,z2=`
uniform sampler2D uAtlas;
uniform sampler2D uLayer1;
uniform sampler2D uLayer2;
uniform sampler2D uAlpha;
uniform float uAtlasCols;
uniform float uAtlasRows;
uniform float uAtlasCount;
uniform float uAtlasInset;
uniform float uTerrainSize;
uniform float uTerrainScale;
uniform float uTileUvScale;
uniform bool uUseLightmap;
uniform int uDebugMode; // 0=normal, 1=layer1 index, 2=layer2 index, 3=alpha, 4=atlas UV

varying vec3 vColor;
varying vec2 vWorldXZ;

float sampleMapIndex(sampler2D tex, vec2 tileCoord) {
    vec2 uv = (tileCoord + 0.5) / uTerrainSize;
    return floor(texture2D(tex, uv).r * 255.0 + 0.5);
}

// Convert an index 0..255 to a distinct color for debug visualization
vec3 indexToColor(float idx) {
    float h = mod(idx * 0.618033988749895, 1.0); // golden ratio for distinct hues
    float s = 0.8;
    float v = 0.9;
    // HSV to RGB
    float c = v * s;
    float x = c * (1.0 - abs(mod(h * 6.0, 2.0) - 1.0));
    float m = v - c;
    vec3 rgb;
    float hh = h * 6.0;
    if (hh < 1.0) rgb = vec3(c, x, 0.0);
    else if (hh < 2.0) rgb = vec3(x, c, 0.0);
    else if (hh < 3.0) rgb = vec3(0.0, c, x);
    else if (hh < 4.0) rgb = vec3(0.0, x, c);
    else if (hh < 5.0) rgb = vec3(x, 0.0, c);
    else rgb = vec3(c, 0.0, x);
    return rgb + m;
}

vec4 sampleAtlasTile(float tileIndex, vec2 tileUv) {
    if (tileIndex < 0.0 || tileIndex >= uAtlasCount) {
        return vec4(1.0, 0.0, 1.0, 1.0); // magenta = missing texture
    }

    float col = mod(tileIndex, uAtlasCols);
    float row = floor(tileIndex / uAtlasCols);

    // All textures are tiled to fill the full cell, so UV scale is uniform.
    // fract() provides repeating; tiled content ensures no bleed into empty space.
    vec2 localUv = fract(tileUv * uTileUvScale);

    // Clamp to prevent bilinear filtering from bleeding into adjacent atlas cells.
    localUv = clamp(localUv, vec2(uAtlasInset), vec2(1.0 - uAtlasInset));

    vec2 atlasUv = (vec2(col, row) + localUv) / vec2(uAtlasCols, uAtlasRows);
    return texture2D(uAtlas, atlasUv);
}

void main() {
    vec2 worldTileRaw = vWorldXZ / uTerrainScale;
    // Match terrain/object axis conversion: world Z is mirrored from MU Y.
    vec2 worldTile = vec2(worldTileRaw.x, uTerrainSize - worldTileRaw.y);

    // Offset by a small epsilon before floor() to prevent wrong tile lookup at exact
    // tile boundaries where shared vertices sit (e.g., position exactly at 600.0).
    vec2 tileCoord = floor(worldTile + 0.0002);
    tileCoord = clamp(tileCoord, vec2(0.0), vec2(uTerrainSize - 1.0));
    vec2 fracTile = worldTile - tileCoord;

    vec2 tileCoordX  = min(tileCoord + vec2(1.0, 0.0), vec2(uTerrainSize - 1.0));
    vec2 tileCoordY  = min(tileCoord + vec2(0.0, 1.0), vec2(uTerrainSize - 1.0));
    vec2 tileCoordXY = min(tileCoord + vec2(1.0, 1.0), vec2(uTerrainSize - 1.0));

    float idx1 = sampleMapIndex(uLayer1, tileCoord);
    float idx2 = sampleMapIndex(uLayer2, tileCoord);

    float a1 = sampleMapIndex(uAlpha, tileCoord) / 255.0;
    float a2 = sampleMapIndex(uAlpha, tileCoordX) / 255.0;
    float a3 = sampleMapIndex(uAlpha, tileCoordXY) / 255.0;
    float a4 = sampleMapIndex(uAlpha, tileCoordY) / 255.0;
    float blendAlpha = mix(mix(a1, a2, fracTile.x), mix(a4, a3, fracTile.x), fracTile.y);

    // ── Debug modes ──
    if (uDebugMode == 1) { gl_FragColor = vec4(indexToColor(idx1), 1.0); return; }
    if (uDebugMode == 2) { gl_FragColor = vec4(indexToColor(idx2), 1.0); return; }
    if (uDebugMode == 3) { gl_FragColor = vec4(vec3(blendAlpha), 1.0); return; }
    if (uDebugMode == 4) {
        // Show atlas UV as red/green — useful to see if sampling lands correctly
        float col = mod(idx1, uAtlasCols);
        float row = floor(idx1 / uAtlasCols);
        vec2 localUv = fract(worldTile * uTileUvScale);
        vec2 atlasUv = (vec2(col, row) + localUv) / vec2(uAtlasCols, uAtlasRows);
        gl_FragColor = vec4(atlasUv, 0.0, 1.0); return;
    }

    vec2 tileUv = worldTile;

    bool layer2Valid = (idx2 < 255.0) && (idx2 < uAtlasCount);
    bool isOpaque = a1 >= (254.5 / 255.0) &&
                    a2 >= (254.5 / 255.0) &&
                    a3 >= (254.5 / 255.0) &&
                    a4 >= (254.5 / 255.0);

    vec3 blended;
    if (isOpaque && layer2Valid) {
        blended = sampleAtlasTile(idx2, tileUv).rgb;
    } else {
        blended = sampleAtlasTile(idx1, tileUv).rgb;
        if (blendAlpha > 0.0 && layer2Valid) {
            vec3 overlay = sampleAtlasTile(idx2, tileUv).rgb;
            blended = mix(blended, overlay, blendAlpha);
        }
    }

    if (uUseLightmap) {
        blended *= vColor;
    }

    gl_FragColor = vec4(blended, 1.0);
}
`;function H2(s,e,t){const{layer1Tex:n,layer2Tex:i,alphaTex:r}=O2(e),a=.5/s.cellSize;return new mn({vertexShader:k2,fragmentShader:z2,uniforms:{uAtlas:{value:s.texture},uLayer1:{value:n},uLayer2:{value:i},uAlpha:{value:r},uAtlasCols:{value:s.cols},uAtlasRows:{value:s.rows},uAtlasCount:{value:s.count},uAtlasInset:{value:a},uTerrainSize:{value:Gt},uTerrainScale:{value:100},uTileUvScale:{value:s.tileUvScale},uUseLightmap:{value:t},uDebugMode:{value:0}},vertexColors:!0,side:Wn})}const V2={0:"TileGrass01.ozj",1:"TileGrass02.ozj",2:"TileGround01.ozj",3:"TileGround02.ozj",4:"TileGround03.ozj",5:"TileWater01.ozj",6:"TileWood01.ozj",7:"TileRock01.ozj",8:"TileRock02.ozj",9:"TileRock03.ozj",10:"TileRock04.ozj",11:"TileRock05.ozj",12:"TileRock06.ozj",13:"TileRock07.ozj",30:"TileGrass01.ozt",31:"TileGrass02.ozt",32:"TileGrass03.ozt",100:"leaf01.ozt",101:"leaf02.ozj",102:"rain01.ozt",103:"rain02.ozt",104:"rain03.ozt"};class G2{textureLoader=new Ra;async load(e){const t=this.findFile(e,/EncTerrain\d*\.att$/i)??this.findFile(e,/\.att$/i),n=this.findFile(e,/EncTerrain\d*\.map$/i)??this.findFile(e,/\.map$/i),i=this.findFile(e,/TerrainHeight\.ozb$/i),r=this.findFile(e,/TerrainLight\.ozb$/i),a=this.findFile(e,/EncTerrain\d*\.obj$/i)??this.findFile(e,/\.obj$/i);if(!t||!n||!i)throw new Error("Missing required terrain files: .att, .map, and TerrainHeight.OZB");const[o,l,c]=await Promise.all([t.arrayBuffer().then(D2),n.arrayBuffer().then(P2),i.arrayBuffer().then(_u)]);this.debugMapData(l);const h=r?await r.arrayBuffer().then(_u):null,u=a?await a.arrayBuffer().then(U2):null,d=await this.loadTerrainTextures(e,l),p=B2(d);this.debugAtlas(p,d);const g=N2(c,o,h),_=H2(p,l,!!h),f=new It(g,_);return f.name="terrain",{mesh:f,objectsData:u,mapNumber:l.mapNumber}}debugMapData(e){const t=new Set,n=new Set,i={zero:0,full:0,partial:0};for(let r=0;r<e.layer1.length;r++){t.add(e.layer1[r]),n.add(e.layer2[r]);const a=e.alpha[r];a===0?i.zero++:a===255?i.full++:i.partial++}console.group("[TERRAIN DEBUG] MAP data"),console.log("version:",e.version,"mapNumber:",e.mapNumber),console.log("layer1 unique indices:",[...t].sort((r,a)=>r-a)),console.log("layer2 unique indices:",[...n].sort((r,a)=>r-a)),console.log("alpha stats:",i),console.log("first 20 layer1 values:",Array.from(e.layer1.slice(0,20))),console.log("first 20 layer2 values:",Array.from(e.layer2.slice(0,20))),console.log("first 20 alpha values:",Array.from(e.alpha.slice(0,20))),console.groupEnd()}debugAtlas(e,t){console.group("[TERRAIN DEBUG] Atlas"),console.log("atlas grid:",e.cols,"x",e.rows,"=",e.count,"cells"),console.log("cellSize:",e.cellSize,"tileUvScale:",e.tileUvScale),console.log("canvas:",e.texture.image?.width,"x",e.texture.image?.height);const n=[],i=new Set;for(const[a,o]of t){const l=o.image;n.push(`  [${a}] ${l?.width}x${l?.height}`),i.add(a)}console.log("loaded textures ("+t.size+`):
`+n.join(`
`)),console.groupEnd();const r=e.texture.image;r instanceof HTMLCanvasElement&&(window.__terrainAtlasCanvas=r,console.log("[TERRAIN DEBUG] Atlas canvas stored at window.__terrainAtlasCanvas"),console.log("[TERRAIN DEBUG] To inspect: document.body.appendChild(window.__terrainAtlasCanvas)"))}findFile(e,t){for(const[n,i]of e)if(t.test(n))return i}async loadTerrainTextures(e,t){const n=new Map,i=new Set;for(let a=0;a<t.layer1.length;a++)i.add(t.layer1[a]),i.add(t.layer2[a]);console.group("[TERRAIN DEBUG] Texture loading");const r=[...i].sort((a,o)=>a-o);console.log("Need textures for indices:",r);for(const a of r){const o=await this.tryLoadTexture(e,a);o?n.set(a,o):console.warn(`  [${a}] ⚠ NO TEXTURE FOUND`)}return console.groupEnd(),n}async tryLoadTexture(e,t){const n=[],i=V2[t];if(i&&n.push(i),t>=14&&t<=29){const r=(t-14+1).toString().padStart(2,"0");n.push(`ExtTile${r}.ozj`)}if(i){const r=i.replace(/\.[^.]+$/,"");for(const a of[".ozj",".ozt",".jpg",".png"]){const o=r+a;o!==i&&n.push(o)}}for(const r of n){const a=this.findFileByName(e,r);if(a)try{const o=await this.loadTextureFile(a),l=o.image;return console.log(`  [${t}] ✓ ${a.name} (${l?.width}x${l?.height})`),o}catch(o){console.error(`  [${t}] ✗ ${a.name} DECODE ERROR:`,o)}}return null}findFileByName(e,t){const n=t.toLowerCase();for(const[i,r]of e)if(i.toLowerCase()===n||i.toLowerCase().endsWith("/"+n))return r}async loadTextureFile(e){const t=e.name.split(".").pop().toLowerCase();let n;if(t==="ozj"||t==="ozt")n=await Ua(await e.arrayBuffer(),t);else if(t==="jpg"||t==="jpeg"||t==="png")n=URL.createObjectURL(e);else throw new Error(`Unsupported texture format: ${t}`);const i=await this.textureLoader.loadAsync(n);return i.colorSpace=Rt,i.wrapS=Ln,i.wrapT=Ln,i}}function W2(s){const e=new Map,t=new Map,n=s.clone();return Td(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Td(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Td(s.children[n],e.children[n],t)}const X2={0:"Tree01",1:"Tree02",2:"Tree03",3:"Tree04",4:"Tree05",5:"Tree06",6:"Tree07",7:"Tree08",8:"Tree09",9:"Tree10",10:"Tree11",11:"Tree12",12:"Tree13",20:"Grass01",21:"Grass02",22:"Grass03",23:"Grass04",24:"Grass05",25:"Grass06",26:"Grass07",27:"Grass08",30:"Stone01",31:"Stone02",32:"Stone03",33:"Stone04",34:"Stone05",40:"StoneStatue01",41:"StoneStatue02",42:"StoneStatue03",43:"SteelStatue01",44:"Tomb01",45:"Tomb02",46:"Tomb03",50:"FireLight01",51:"FireLight02",52:"BonFire01",55:"DoungeonGate01",56:"MerchantAnimal01",57:"MerchantAnimal02",58:"TreasureDrum01",59:"TreasureChest01",60:"Shop01",65:"SteelWall01",66:"SteelWall02",67:"SteelWall03",68:"SteelDoor01",69:"StoneWall01",70:"StoneWall02",71:"StoneWall03",72:"StoneWall04",73:"StoneWall05",74:"StoneWall06",75:"StoneMuWall01",76:"StoneMuWall02",77:"StoneMuWall03",78:"StoneMuWall04",80:"Bridge01",81:"Fence01",82:"Fence02",83:"Fence03",84:"Fence04",85:"BridgeStone01",90:"StreetLight01",91:"Cannon01",92:"Cannon02",93:"Cannon03",95:"Curtain01",96:"Sign01",97:"Sign02",98:"Carriage01",99:"Carriage02",100:"Carriage03",101:"Carriage04",102:"Straw01",103:"Straw02",105:"Waterspout01",106:"Well01",107:"Well02",108:"Well03",109:"Well04",110:"Hanging01",111:"Stair01",115:"House01",116:"House02",117:"House03",118:"House04",119:"House05",120:"Tent01",121:"HouseWall01",122:"HouseWall02",123:"HouseWall03",124:"HouseWall04",125:"HouseWall05",126:"HouseWall06",127:"HouseEtc01",128:"HouseEtc02",129:"HouseEtc03",130:"Light01",131:"Light02",132:"Light03",133:"PoseBox01",140:"Forniture01",141:"Forniture02",142:"Forniture03",143:"Forniture04",144:"Forniture05",145:"Forniture06",146:"Forniture07",150:"Candle01",151:"Beer01",152:"Beer02",153:"Beer03"},Ad={1:X2},$2={forniture01:["furniture01"],forniture02:["furniture02"],forniture03:["furniture03"],forniture04:["furniture04"],forniture05:["furniture05"],forniture06:["furniture06"],forniture07:["furniture07"],shop01:["ship01"]},xu=4096,j2=64;async function q2(s,e,t,n){const i=new ss;i.name="terrain_objects",i.matrixAutoUpdate=!1,i.updateMatrix();const r=new ic,a=new Ra,o=new Map,l=new Map,c=new Map;for(const g of s.objects){const _=c.get(g.type)||[];_.push(g),c.set(g.type,_)}console.group("[TERRAIN OBJECTS] Loading"),console.log(`OBJ data: ${s.objects.length} objects, ${c.size} unique types`),console.log("Types:",[...c.keys()].sort((g,_)=>g-_).join(", "));let h=0;const u=c.size;let d=0,p=0;for(const[g,_]of c){const f=Y2(e,g,t);if(!f){console.warn(`  [type ${g}] missing ${K2(g,t)}`),p++,h++,n?.(h,u);continue}d++;try{const m=await f.arrayBuffer(),{group:y,requiredTextures:w}=await r.load(m),E=y.quaternion.clone();for(const x of w)await t3(y,x,e,a,o,l);if(!Q2(i,y,_,E))for(const x of _){const b=W2(y);b.position.set(x.position.x,x.position.z,uc-x.position.y);const I=Cd(x.angle);b.quaternion.copy(I.multiply(E)),b.scale.setScalar(x.scale),b.updateMatrix(),b.updateMatrixWorld(!0),b.matrixAutoUpdate=!1,i.add(b)}}catch(m){console.warn(`Failed to load object type ${g}:`,m)}h++,n?.(h,u)}return console.log(`BMDs found: ${d}, missing: ${p}`),console.groupEnd(),i}function Y2(s,e,t){const n=e+1,i=n.toString().padStart(2,"0"),r=[`Object${i}`,`Object${n}`],a=vu(s,t,r);if(a)return a;const o=Ad[t]?.[e];if(o){const l=$2[o.toLowerCase()]||[],c=vu(s,t,[o,...l]);if(c)return c}for(const[l,c]of s){const h=l.toLowerCase();if(h.endsWith(`/object${i}.bmd`)||h.endsWith(`/object${n}.bmd`))return c}return null}function vu(s,e,t){const n=`object${e}/`,i=new Set(t.map(Qs));for(const[r,a]of s){const o=r.toLowerCase();if(!o.startsWith(n)||!o.endsWith(".bmd"))continue;const l=o.split("/").pop().replace(/\.bmd$/i,"");if(i.has(Qs(l)))return a}return null}function Qs(s){return s.toLowerCase().replace(/[^a-z0-9]/g,"")}function K2(s,e){const n=(s+1).toString().padStart(2,"0"),i=Ad[e]?.[s];return i?`Object${e}/${i}.bmd`:`Object${e}/Object${n}.bmd`}function Cd(s){const e=Z2(Ti.degToRad(s.x),Ti.degToRad(s.y),Ti.degToRad(s.z)),t=Rd,n=J2,i=new Oe().makeRotationFromQuaternion(e),r=new Oe().copy(t).multiply(i).multiply(n);return new Zt().setFromRotationMatrix(r).normalize()}function Z2(s,e,t){const n=s*.5,i=e*.5,r=t*.5,a=Math.sin(n),o=Math.cos(n),l=Math.sin(i),c=Math.cos(i),h=Math.sin(r),u=Math.cos(r),d=o*c*u+a*l*h,p=a*c*u-o*l*h,g=o*l*u+a*c*h,_=o*c*h-a*l*u;return new Zt(p,g,_,d).normalize()}const Rd=new Oe().set(1,0,0,0,0,0,1,0,0,-1,0,0,0,0,0,1),J2=Rd.clone().transpose();function Q2(s,e,t,n){const i=[];let r=!1;if(e.traverse(p=>{const g=p;g.isMesh&&(i.push(g),g.isSkinnedMesh&&(r=!0))}),i.length===0||r)return!1;e.updateMatrixWorld(!0);const a=new Oe().copy(e.matrixWorld).invert(),o=t.length>=j2,l=new Map,c=new N,h=new N;for(let p=0;p<t.length;p++){const g=t[p];c.set(g.position.x,g.position.z,uc-g.position.y);const _=Cd(g.angle).multiply(n);h.setScalar(g.scale);const f=new Oe().compose(c,_,h),m=o?e3(c.x,c.z):"all",y=l.get(m);y?y.push(f):l.set(m,[f])}const u=new Oe,d=new Oe;for(const p of i){u.copy(a).multiply(p.matrixWorld);for(const[g,_]of l){const f=new Ku(p.geometry,p.material,_.length),m=p.name||"terrain_instanced_mesh";f.name=`${m}_${g}`,f.castShadow=p.castShadow,f.receiveShadow=p.receiveShadow,f.renderOrder=p.renderOrder,f.instanceMatrix.setUsage(El),f.matrixAutoUpdate=!1;for(let y=0;y<_.length;y++)d.multiplyMatrices(_[y],u),f.setMatrixAt(y,d);f.instanceMatrix.needsUpdate=!0,f.computeBoundingBox(),f.computeBoundingSphere(),f.updateMatrix(),s.add(f)}}return!0}function e3(s,e){const t=Math.floor(s/xu),n=Math.floor(e/xu);return`${t}:${n}`}async function t3(s,e,t,n,i,r){const a=e.split(/[\\/]/).pop().replace(/\.[^.]+$/,""),o=a.toLowerCase(),l=Qs(o),c=(d,p)=>{s.traverse(g=>{const _=g;if(!_.isMesh||!_.userData.texturePath)return;const f=_.userData.texturePath.split(/[\\/]/).pop().replace(/\.[^.]+$/,"");if(Qs(f)!==l)return;const m=_.material;m.map=d,m.color.set(16777215),dr(m,p)})},h=i.get(l),u=r.get(l);if(h&&u){c(h,u);return}for(const[d,p]of t){const g=d.split(/[\\/]/).pop().replace(/\.[^.]+$/,"");if(Qs(g)===l)try{const _=p.name.split(".").pop().toLowerCase();let f;_==="ozj"||_==="ozt"?f=await Ua(await p.arrayBuffer(),_):f=URL.createObjectURL(p);const m=await n.loadAsync(f);m.colorSpace=Rt,m.wrapS=Ln,m.wrapT=Ln,m.flipY=!1;const y=ur(m,`${a} ${d}`);m.userData.blendHeuristic=y,i.set(l,m),r.set(l,y),c(m,y);return}catch{}}}const yu=.6,Mu=1,n3=1.5,i3=1.5,Su=12e3,s3=120,r3=7e3,a3=2.2,o3=.1,l3=["KeyW","KeyA","KeyS","KeyD","ShiftLeft","ShiftRight"];class c3{scene;camera;renderer;controls;clock=new Kl;isActive=!1;ambientLight=null;sunLight=null;objectDrawDistance=Su;objectCullLastUpdateMs=0;tempCullCenter=new N;tempCullScale=new N;movementKeys={KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ShiftLeft:!1,ShiftRight:!1};tempMoveForward=new N;tempMoveRight=new N;tempMoveDelta=new N;terrainMesh=null;objectsGroup=null;terrainLoader=new G2;dataFiles=new Map;dataRootPath=null;constructor(){this.initThree(),this.initUI(),this.animate()}setActive(e){this.isActive=e,this.resetMovementKeys(),e&&(this.clock.getDelta(),window.dispatchEvent(new Event("resize")))}initThree(){const e=document.getElementById("terrain-canvas-container");if(!e)return;this.scene=new _s,this.scene.background=new Re(8900331);const t=Gt*us/2;this.camera=new Yt(60,e.clientWidth/e.clientHeight,10,1e5),this.camera.position.set(t,5e3,t+5e3),this.renderer=new Ql({antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,n3)),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.outputColorSpace=Rt,this.renderer.toneMapping=fr,this.renderer.toneMappingExposure=1,e.appendChild(this.renderer.domElement),this.controls=new tc(this.camera,this.renderer.domElement),this.controls.target.set(t,0,t),this.controls.enableDamping=!0,this.controls.maxDistance=5e4,this.controls.minDistance=100,this.ambientLight=new Yl(16777215,yu),this.sunLight=new cr(16777215,Mu),this.sunLight.position.set(t,1e4,t),this.scene.add(this.ambientLight,this.sunLight),window.addEventListener("resize",()=>{this.isActive&&(this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight))})}initUI(){const e=document.getElementById("terrain-data-drop-zone"),t=document.getElementById("terrain-data-folder-input");e&&t&&(e.addEventListener("click",()=>{At()?this.handleDataSelectElectron():t.click()}),t.addEventListener("change",()=>{t.files&&t.files.length>0&&this.handleDataFiles(t.files)}),e.addEventListener("dragover",h=>{h.preventDefault(),e.classList.add("drag-hover")}),e.addEventListener("dragleave",()=>e.classList.remove("drag-hover")),e.addEventListener("drop",h=>{h.preventDefault(),e.classList.remove("drag-hover"),h.dataTransfer?.files&&this.handleDataFiles(h.dataTransfer.files)})),document.getElementById("terrain-load-world-btn")?.addEventListener("click",()=>{const h=document.getElementById("terrain-world-select");h&&h.value&&this.loadWorld(parseInt(h.value,10))});const i=document.getElementById("terrain-wireframe");i?.addEventListener("change",()=>{this.terrainMesh&&(this.terrainMesh.material.wireframe=i.checked)}),window.addEventListener("keydown",h=>{if(!this.terrainMesh||!this.isActive)return;const u=parseInt(h.key);if(u>=0&&u<=4){const d=this.terrainMesh.material;d.uniforms.uDebugMode.value=u,console.log(`[TERRAIN] Debug mode: ${u} (0=normal, 1=layer1, 2=layer2, 3=alpha, 4=atlasUV)`)}});const r=document.getElementById("terrain-show-objects");r?.addEventListener("change",()=>{this.objectsGroup&&(this.objectsGroup.visible=r.checked,r.checked&&this.updateObjectDistanceCulling(!0))});const a=document.getElementById("terrain-brightness-slider"),o=document.getElementById("terrain-brightness-label");if(a&&o){a.addEventListener("input",u=>{const d=parseFloat(u.target.value);o.textContent=`Brightness: ${d.toFixed(2)}×`,this.setBrightness(d)});const h=parseFloat(a.value)||i3;o.textContent=`Brightness: ${h.toFixed(2)}×`,this.setBrightness(h)}const l=document.getElementById("terrain-object-distance-slider"),c=document.getElementById("terrain-object-distance-label");if(l&&c){l.addEventListener("input",u=>{const d=parseFloat(u.target.value);this.objectDrawDistance=Math.max(500,d),c.textContent=`Object Distance: ${Math.round(this.objectDrawDistance)}`,this.updateObjectDistanceCulling(!0)});const h=parseFloat(l.value)||Su;this.objectDrawDistance=Math.max(500,h),c.textContent=`Object Distance: ${Math.round(this.objectDrawDistance)}`}window.addEventListener("keydown",h=>this.handleMovementKey(h,!0)),window.addEventListener("keyup",h=>this.handleMovementKey(h,!1)),window.addEventListener("blur",()=>this.resetMovementKeys())}async handleDataSelectElectron(){const e=await sc();if(e){this.dataRootPath=e,this.dataFiles.clear();const t=document.getElementById("terrain-status");t&&(t.textContent="Scanning Data folder...");let n;try{n=await Md(e)}catch(i){console.error("Failed to scan world folders:",i);const r=i?.message||String(i);t&&(r.includes("No handler registered for 'fs:scanWorldFolders'")?t.textContent="Electron backend is outdated. Restart the desktop app.":t.textContent=`Error scanning Data folder: ${r}`);return}if(n.length===0){t&&(t.textContent=`No World folders found in Data: ${e}`);return}t&&(t.textContent=`Found ${n.length} world(s). Select one to load.`),this.populateWorldSelect(n),this.loadWorld(n[0])}}handleDataFiles(e){const t=document.getElementById("terrain-status");t&&(t.textContent="Scanning Data folder..."),this.dataFiles.clear(),this.dataRootPath=null;const i=(e[0].webkitRelativePath||e[0].name).split("/")[0];for(let a=0;a<e.length;a++){const o=e[a],l=o.webkitRelativePath||o.name,c=l.startsWith(i+"/")?l.slice(i.length+1):l;this.dataFiles.set(c.toLowerCase(),o)}const r=this.scanWorldNumbers();if(r.length===0){t&&(t.textContent="No World folders found in Data.");return}t&&(t.textContent=`Found ${r.length} world(s). Select one to load.`),this.populateWorldSelect(r),this.loadWorld(r[0])}scanWorldNumbers(){const e=new Set;for(const t of this.dataFiles.keys()){const n=t.match(/^world(\d+)\//);n&&e.add(parseInt(n[1],10))}return[...e].sort((t,n)=>t-n)}populateWorldSelect(e){const t=document.getElementById("terrain-world-selector"),n=document.getElementById("terrain-world-select");if(!(!n||!t)){n.innerHTML="";for(const i of e){const r=document.createElement("option");r.value=i.toString(),r.textContent=`World ${i}`,n.appendChild(r)}t.style.display=""}}async loadWorld(e){const t=document.getElementById("terrain-status");t&&(t.textContent=`Loading World ${e}...`),this.updateStats(0,0);const n=document.getElementById("terrain-world-select");n&&(n.value=e.toString());let i=this.buildWorldFiles(e);if(i.size===0&&this.dataRootPath&&At()){t&&(t.textContent=`Loading World ${e} files from disk...`);try{i=await this.loadWorldFilesFromElectron(e)}catch(r){console.error("Failed to load world files from Electron:",r);const a=r?.message||String(r);t&&(a.includes("No handler registered for 'fs:readTerrainWorldFiles'")?t.textContent="Electron backend is outdated. Restart the desktop app.":t.textContent=`Error loading World ${e} files: ${a}`);return}}if(i.size===0){t&&(t.textContent=`No files found for World ${e}.`),this.updateStats(0,0);return}try{const r=await this.terrainLoader.load(i);this.terrainMesh&&(this.scene.remove(this.terrainMesh),this.terrainMesh.geometry.dispose(),this.terrainMesh.material.dispose()),this.objectsGroup&&this.scene.remove(this.objectsGroup),this.terrainMesh=r.mesh,this.scene.add(this.terrainMesh),this.updateStats(this.getTerrainTileCount(r.mesh),r.objectsData?.objects.length??0);const a=Gt*us/2;if(this.controls.target.set(a,0,a),this.camera.position.set(a,5e3,a+5e3),t&&(t.textContent=`World ${r.mapNumber} loaded. Loading objects...`),r.objectsData){this.objectsGroup=await q2(r.objectsData,i,r.mapNumber,(l,c)=>{t&&(t.textContent=`Loading objects: ${l}/${c}...`)}),this.scene.add(this.objectsGroup);const o=document.getElementById("terrain-show-objects");o&&this.objectsGroup&&(this.objectsGroup.visible=o.checked,o.checked&&this.updateObjectDistanceCulling(!0))}if(t){const o=r.objectsData?.objects.length??0;t.textContent=`World ${r.mapNumber} loaded. ${o} objects.`}}catch(r){console.error("Terrain loading error:",r),t&&(t.textContent=`Error: ${r.message}`),this.updateStats(0,0)}}async loadWorldFilesFromElectron(e){if(!this.dataRootPath)return new Map;const t=await Sd(this.dataRootPath,e),n=new Map;for(const i of t)n.set(i.key.toLowerCase(),ga(i.name,i.data));return n}buildWorldFiles(e){const t=`world${e}/`,n=`object${e}/`,i=new Map;for(const[r,a]of this.dataFiles)(r.startsWith(t)||r.startsWith(n))&&i.set(r,a);return i}getTerrainTileCount(e){const t=e.geometry,n=t.getIndex()?.count??0;if(n>0)return Math.floor(n/6);const i=t.getAttribute("position")?.count??0;return Math.floor(i/4)}updateStats(e,t){const n=document.getElementById("terrain-tile-count"),i=document.getElementById("terrain-object-count");n&&(n.textContent=Math.max(0,e).toLocaleString()),i&&(i.textContent=Math.max(0,t).toLocaleString())}updateObjectDistanceCulling(e=!1){if(!this.objectsGroup||!this.objectsGroup.visible)return;const t=performance.now();if(!e&&t-this.objectCullLastUpdateMs<s3)return;e&&this.objectsGroup.updateMatrixWorld(!0);const n=this.objectDrawDistance,i=this.camera.position;for(const r of this.objectsGroup.children)r.visible=this.isWithinObjectDistance(r,i,n);this.objectCullLastUpdateMs=t}isWithinObjectDistance(e,t,n){const r=e.geometry;if(r){r.boundingSphere||r.computeBoundingSphere();const a=r.boundingSphere;if(a){this.tempCullCenter.copy(a.center).applyMatrix4(e.matrixWorld),this.tempCullScale.setFromMatrixScale(e.matrixWorld);const o=Math.max(this.tempCullScale.x,this.tempCullScale.y,this.tempCullScale.z),l=a.radius*o,c=n+l;return this.tempCullCenter.distanceToSquared(t)<=c*c}}return e.getWorldPosition(this.tempCullCenter),this.tempCullCenter.distanceToSquared(t)<=n*n}setBrightness(e){const t=Math.max(.1,e);this.renderer.toneMappingExposure=t,this.ambientLight&&(this.ambientLight.intensity=yu*t),this.sunLight&&(this.sunLight.intensity=Mu*t)}handleMovementKey(e,t){if(!this.isActive)return;const n=e.code;l3.includes(n)&&(e.ctrlKey||e.metaKey||e.altKey||t&&this.isTypingIntoUI(e.target)||(this.movementKeys[n]=t,e.preventDefault()))}isTypingIntoUI(e){if(!(e instanceof HTMLElement))return!1;const t=e.tagName.toLowerCase();return t==="input"||t==="textarea"||t==="select"||e.isContentEditable}resetMovementKeys(){this.movementKeys.KeyW=!1,this.movementKeys.KeyA=!1,this.movementKeys.KeyS=!1,this.movementKeys.KeyD=!1,this.movementKeys.ShiftLeft=!1,this.movementKeys.ShiftRight=!1}updateKeyboardMovement(e){const t=(this.movementKeys.KeyW?1:0)+(this.movementKeys.KeyS?-1:0),n=(this.movementKeys.KeyA?1:0)+(this.movementKeys.KeyD?-1:0);if(t===0&&n===0||(this.camera.getWorldDirection(this.tempMoveForward),this.tempMoveForward.y=0,this.tempMoveForward.lengthSq()<1e-8)||(this.tempMoveForward.normalize(),this.tempMoveRight.set(this.tempMoveForward.z,0,-this.tempMoveForward.x).normalize(),this.tempMoveDelta.set(0,0,0),this.tempMoveDelta.addScaledVector(this.tempMoveForward,t),this.tempMoveDelta.addScaledVector(this.tempMoveRight,n),this.tempMoveDelta.lengthSq()<1e-8))return;this.tempMoveDelta.normalize();const i=this.movementKeys.ShiftLeft||this.movementKeys.ShiftRight,r=r3*(i?a3:1);this.tempMoveDelta.multiplyScalar(r*e),this.camera.position.add(this.tempMoveDelta),this.controls.target.add(this.tempMoveDelta)}animate=()=>{if(requestAnimationFrame(this.animate),!this.isActive)return;const e=Math.min(this.clock.getDelta(),o3);this.updateKeyboardMovement(e),this.controls.update(),this.updateObjectDistanceCulling(),this.renderer.render(this.scene,this.camera)}}const bu=50*1024*1024,h3=new Uint8Array([66,77,68]),u3=new Set([10,12,15]);class En extends Error{constructor(e){super(e),this.name="FileValidationError"}}class d3{static validateFileSize(e,t){const n=e instanceof File?e.size:e.byteLength,i=e instanceof File?e.name:t||"unknown";if(n>bu)throw new En(`File "${i}" is too large (${(n/(1024*1024)).toFixed(2)} MB). Maximum size is ${bu/(1024*1024)} MB.`);if(n===0)throw new En(`File "${i}" is empty.`)}static validateBMDHeader(e,t){const n=t||"unknown";if(e.byteLength<4)throw new En(`File "${n}" is too small to be a valid BMD file (minimum 4 bytes required).`);const i=new Uint8Array(e,0,4),r=Array.from(i).map(l=>l.toString(16).padStart(2,"0")).join(" ");if(!h3.every((l,c)=>l===i[c]))throw new En(`File "${n}" does not appear to be a valid BMD file. Header: ${r}`);const o=i[3];if(!u3.has(o)){const l=`0x${o.toString(16).padStart(2,"0")}`;throw new En(`File "${n}" has unsupported BMD version ${l}. Supported versions: 0x0A, 0x0C, 0x0F.`)}}static validateTextureExtension(e){const t=e.toLowerCase().split(".").pop();return["jpg","jpeg","png","tga","ozj","ozt"].includes(t||"")}static validateImageHeader(e,t){if(e.byteLength<4)throw new En(`Image file "${t}" is too small.`);const n=new Uint8Array(e,0,8),i=t.toLowerCase().split(".").pop();if(i==="png"&&![137,80,78,71,13,10,26,10].every((o,l)=>n[l]===o))throw new En(`File "${t}" is not a valid PNG image.`);if((i==="jpg"||i==="jpeg")&&!(n[0]===255&&n[1]===216&&n[2]===255))throw new En(`File "${t}" is not a valid JPEG image.`)}static async validateBMDFile(e){this.validateFileSize(e);const t=await e.slice(0,4).arrayBuffer();this.validateBMDHeader(t,e.name)}static async validateTextureFile(e){if(this.validateFileSize(e),!this.validateTextureExtension(e.name))throw new En(`File "${e.name}" has an unsupported extension. Supported formats: JPG, PNG, TGA, OZJ, OZT`);const t=Math.min(e.size,8),n=await e.slice(0,t).arrayBuffer();this.validateImageHeader(n,e.name)}static sanitizeFilePath(e){return e.replace(/\.\.[/\\]/g,"").replace(/^[/\\]+/,"")}}class f3{level;isDev;constructor(){this.isDev=!1,this.level=this.isDev?0:1}setLevel(e){this.level=e}getLevel(){return this.level}debug(...e){this.level<=0&&this.isDev&&console.log("[DEBUG]",...e)}info(...e){this.level<=1&&console.log("[INFO]",...e)}warn(...e){this.level<=2&&console.warn("[WARN]",...e)}error(...e){this.level<=3&&console.error("[ERROR]",...e)}groupDebug(e,...t){this.level<=0&&this.isDev&&console.groupCollapsed(`[DEBUG] ${e}`,...t)}groupEnd(){this.level<=0&&this.isDev&&console.groupEnd()}time(e){this.level<=0&&this.isDev&&console.time(`[DEBUG] ${e}`)}timeEnd(e){this.level<=0&&this.isDev&&console.timeEnd(`[DEBUG] ${e}`)}}const De=new f3;let Je=null;const yi=document.getElementById("show-skeleton-checkbox"),Uo=document.getElementById("wireframe-checkbox");class p3{scene;camera;renderer;controls;clock=new Kl;ambientLight;hemisphereLight;directionalLight;rimLight;mixer=null;isRecordingGif=!1;gridHelper=null;currentAction=null;bmdFile=null;animBmdFile=null;loadedGroup=null;requiredTextures=[];exportBtn;gifWidthInput;gifHeightInput;gifDelayInput;gifFrameMultiplierInput;textureLoader=new Ra;lastBmdFilePath=null;lastAttachmentFilePath=null;isAutoRotating=!0;userIsInteracting=!1;isActive=!0;diagActionsCountEl;diagAnimationKeysEl;diagAnimationsCountEl;diagCurrentFrameEl;diagBonesCountEl;diagMeshesCountEl;diagFpsEl;lastFrameTime=0;frameCount=0;fps=0;lockFrameCheckbox;lockFrameInput;lockCurrentBtn;isFrameLocked=!1;lockedFrame=0;bmdLoader=new ic;meshRefs=[];attachments=[];currentAttachment=null;currentAttachmentFile=null;mainSkeleton=null;boundingBoxHelper=null;axesHelper=null;normalHelpers=[];showBoundingBoxCheckbox;showAxesCheckbox;showNormalsCheckbox;normalsVisible=!1;normalsUpdateCounter=0;constructor(){De.debug("%c[App] constructor","color:#0f0"),this.initThree(),this.initUI(),this.animate(performance.now())}setActive(e){this.isActive=e}initThree(){De.groupDebug("%c[App] initThree()","color:#0f0");const e=document.getElementById("canvas-container");if(!e)throw new Error("#canvas-container not found in HTML!");this.scene=new _s,this.scene.background=new Re(725794),this.scene.fog=new Ta(725794,.00125),this.camera=new Yt(75,e.clientWidth/e.clientHeight,.1,1e4),this.camera.position.set(0,200,400),this.renderer=new Ql({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Rt,this.renderer.toneMapping=fr,this.renderer.toneMappingExposure=.95,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Dl,this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement);const t=new pa(this.renderer),n=new pd;this.scene.environment=t.fromScene(n).texture,n.dispose(),t.dispose(),window.addEventListener("resize",()=>{this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e.clientWidth,e.clientHeight)}),this.controls=new tc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.target.set(0,90,0),this.controls.addEventListener("start",()=>{this.userIsInteracting=!0}),this.controls.addEventListener("end",()=>{this.userIsInteracting=!1}),this.ambientLight=new Yl(13493247,.42),this.hemisphereLight=new td(9033727,1120807,.52),this.directionalLight=new cr(16777215,1.7),this.directionalLight.position.set(180,260,140),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.set(2048,2048),this.directionalLight.shadow.radius=3,this.directionalLight.shadow.bias=-4e-4,this.directionalLight.shadow.camera.near=10,this.directionalLight.shadow.camera.far=1400,this.directionalLight.shadow.camera.left=-360,this.directionalLight.shadow.camera.right=360,this.directionalLight.shadow.camera.top=360,this.directionalLight.shadow.camera.bottom=-360,this.rimLight=new cr(7653887,.72),this.rimLight.position.set(-160,130,-210),this.rimLight.castShadow=!1,this.scene.add(this.ambientLight),this.scene.add(this.hemisphereLight),this.scene.add(this.directionalLight),this.scene.add(this.rimLight),this.scene.add(this.directionalLight.target),this.gridHelper=new rd(600,24,4152196,1847113);const i=this.gridHelper.material;Array.isArray(i)?i.forEach(r=>{r.transparent=!0,r.opacity=.35,r.depthWrite=!1}):(i.transparent=!0,i.opacity=.35,i.depthWrite=!1),this.gridHelper.visible=!0,this.scene.add(this.gridHelper),De.groupEnd()}initUI(){De.groupDebug("%c[App] initUI()","color:#0f0");const e=document.getElementById("bmd-drop-zone"),t=document.getElementById("bmd-file-input"),n=document.getElementById("anim-bmd-drop-zone"),i=document.getElementById("anim-bmd-file-input"),r=document.getElementById("texture-drop-zone"),a=document.getElementById("texture-file-input");this.exportBtn=document.getElementById("export-textures-btn"),this.exportBtn.addEventListener("click",()=>this.exportTextures());const o=document.getElementById("speed-slider"),l=document.getElementById("speed-label");this.gifWidthInput=document.getElementById("gif-width-input"),this.gifHeightInput=document.getElementById("gif-height-input"),this.gifDelayInput=document.getElementById("gif-delay-input"),this.gifFrameMultiplierInput=document.getElementById("gif-frame-multiplier-input"),document.getElementById("export-gif-btn").addEventListener("click",()=>this.exportGif()),document.getElementById("export-glb-btn").addEventListener("click",()=>this.exportToGLB()),o.addEventListener("input",T=>{const L=parseFloat(T.target.value);l.textContent=`Speed: ${L.toFixed(2)}x`,this.setAnimationSpeed(L)}),l.textContent=`Speed: ${parseFloat(o.value).toFixed(2)}x`;const u=document.getElementById("status");u.textContent="Waiting for BMD file…",this.initScaleSlider();const d=document.getElementById("auto-rotate-checkbox");d.addEventListener("change",T=>{this.isAutoRotating=T.target.checked}),this.isAutoRotating=d.checked;const p=document.getElementById("bg-color-input");p.addEventListener("input",T=>{const L=T.target.value;this.setSceneBackground(L)}),this.setSceneBackground(p.value||"#0b1322");const g=document.getElementById("brightness-slider"),_=document.getElementById("brightness-label");g.addEventListener("input",T=>{const L=parseFloat(T.target.value);_.textContent=`Brightness: ${L.toFixed(2)}×`,this.setBrightness(L)});const f=parseFloat(g.value)||2;_.textContent=`Brightness: ${f.toFixed(2)}×`,this.setBrightness(f),this.diagActionsCountEl=document.getElementById("diag-actions-count"),this.diagAnimationKeysEl=document.getElementById("diag-animation-keys"),this.diagCurrentFrameEl=document.getElementById("diag-current-frame"),this.diagBonesCountEl=document.getElementById("diag-bones-count"),this.diagMeshesCountEl=document.getElementById("diag-meshes-count"),this.diagFpsEl=document.getElementById("diag-fps"),this.updateDiagnosticInfo(0),this.lockFrameCheckbox=document.getElementById("lock-frame-checkbox"),this.lockFrameInput=document.getElementById("lock-frame-input"),this.lockCurrentBtn=document.getElementById("lock-current-btn"),this.lockFrameCheckbox.addEventListener("change",()=>{this.isFrameLocked=this.lockFrameCheckbox.checked,this.isFrameLocked&&this.applyLockedFrame()}),this.lockFrameInput.addEventListener("input",()=>{this.lockedFrame=parseInt(this.lockFrameInput.value,10)||0,this.isFrameLocked&&this.applyLockedFrame()}),this.lockCurrentBtn.addEventListener("click",()=>{const T=parseInt(this.diagCurrentFrameEl.textContent||"0",10)||0;this.lockFrameInput.value=T.toString(),this.lockedFrame=T,this.lockFrameCheckbox.checked=!0,this.isFrameLocked=!0,this.applyLockedFrame()});const m=(T,L,P)=>{T.addEventListener("click",()=>L.click()),T.addEventListener("dragover",z=>{z.preventDefault(),T.classList.add("drag-over")}),T.addEventListener("dragleave",()=>T.classList.remove("drag-over")),T.addEventListener("drop",z=>{z.preventDefault(),T.classList.remove("drag-over"),z.dataTransfer?.files.length&&P(z.dataTransfer.files)}),L.addEventListener("change",z=>{const U=z.target.files;U?.length&&P(U)})};(async(T,L)=>{const P=async()=>{if(At()){const{openFileDialog:U,readFileFromPath:H,createFileFromElectronData:O}=await Mc(async()=>{const{openFileDialog:Q,readFileFromPath:ee,createFileFromElectronData:ie}=await Promise.resolve().then(()=>nu);return{openFileDialog:Q,readFileFromPath:ee,createFileFromElectronData:ie}},void 0),$=await U([{name:"BMD Files",extensions:["bmd"]}]);if($){const Q=await H($);if(Q){const ee=O(Q.name,Q.data);this.handleBmdFile(ee,$)}}}else L.click()};T.addEventListener("click",P),T.addEventListener("dragover",U=>{U.preventDefault(),T.classList.add("drag-over")}),T.addEventListener("dragleave",()=>T.classList.remove("drag-over")),T.addEventListener("drop",U=>{if(U.preventDefault(),U.stopPropagation(),T.classList.remove("drag-over"),U.dataTransfer?.files&&U.dataTransfer.files.length>0){const H=U.dataTransfer.files[0];let O;if(At()){const $=na(H);$?(O=$,De.debug("[BMD drop] Got path from Electron API:",O)):De.warn("[BMD drop] Could not get file path from Electron")}this.handleBmdFile(H,O)}});let z=!1;T.addEventListener("dragenter",()=>{z=!0}),T.addEventListener("dragleave",()=>{z=!1}),L.addEventListener("change",U=>{if(z){z=!1;return}const H=U.target.files;H?.length&&this.handleBmdFile(H[0])})})(e,t),m(n,i,T=>this.handleAnimBmdFile(T[0])),m(r,a,T=>this.handleMultipleTextureFiles(T));const w=document.getElementById("attach-drop-zone"),E=document.getElementById("attach-bmd-input");(async(T,L)=>{const P=async()=>{if(At()){const{openFileDialog:U,readFileFromPath:H,createFileFromElectronData:O}=await Mc(async()=>{const{openFileDialog:Q,readFileFromPath:ee,createFileFromElectronData:ie}=await Promise.resolve().then(()=>nu);return{openFileDialog:Q,readFileFromPath:ee,createFileFromElectronData:ie}},void 0),$=await U([{name:"BMD Files",extensions:["bmd"]}]);if($){const Q=await H($);if(Q){const ee=O(Q.name,Q.data);document.querySelector("#attach-drop-zone p").textContent=`Selected: ${ee.name}`,this.currentAttachmentFile=ee,this.lastAttachmentFilePath=$,this.setupAttachmentControls()}}}else L.click()};T.addEventListener("click",P),T.addEventListener("dragover",U=>{U.preventDefault(),T.classList.add("drag-over")}),T.addEventListener("dragleave",()=>T.classList.remove("drag-over")),T.addEventListener("drop",U=>{if(U.preventDefault(),U.stopPropagation(),T.classList.remove("drag-over"),U.dataTransfer?.files.length){const H=U.dataTransfer.files[0];let O;if(At()){const $=na(H);$?(O=$,De.debug("[Attachment drop] Got path from Electron API:",O)):De.warn("[Attachment drop] Could not get file path from Electron")}document.querySelector("#attach-drop-zone p").textContent=`Selected: ${H.name}`,this.currentAttachmentFile=H,this.lastAttachmentFilePath=O||null,this.setupAttachmentControls()}});let z=!1;T.addEventListener("dragenter",()=>{z=!0}),T.addEventListener("dragleave",()=>{z=!1}),L.addEventListener("change",U=>{if(z){z=!1;return}const H=U.target.files;if(H?.length){const O=H[0];document.querySelector("#attach-drop-zone p").textContent=`Selected: ${O.name}`,this.currentAttachmentFile=O,this.lastAttachmentFilePath=null,this.setupAttachmentControls()}})})(w,E);const x=document.getElementById("canvas-container");x.addEventListener("dragover",T=>{T.preventDefault(),T.stopPropagation()}),x.addEventListener("drop",async T=>{if(T.preventDefault(),T.stopPropagation(),!T.dataTransfer?.files||T.dataTransfer.files.length===0)return;const L=Array.from(T.dataTransfer.files),P=L.filter(U=>U.name.toLowerCase().endsWith(".bmd")),z=L.filter(U=>{const H=U.name.toLowerCase().split(".").pop();return["jpg","jpeg","png","tga","ozj","ozt"].includes(H||"")});if(P.length>0){const U=P[0];let H;if(At()){const O=na(U);O&&(H=O,De.debug("%c[Canvas drop] Got BMD path from Electron API:","color: #4CAF50",H))}await this.handleBmdFile(U,H),De.debug("%c[Canvas drop] Loaded BMD:","color: #4CAF50",U.name)}z.length>0&&(await this.handleMultipleTextureFiles(z),De.debug("%c[Canvas drop] Loaded textures:","color: #4CAF50",z.map(U=>U.name).join(", "))),P.length===0&&z.length===0&&De.warn("[Canvas drop] No BMD or texture files found in drop")}),yi.addEventListener("change",()=>{Je&&(Je.visible=yi.checked)}),Uo.addEventListener("change",()=>{const T=Uo.checked;this.scene.traverse(L=>{if(L.isMesh){const P=L.material;"wireframe"in P&&(P.wireframe=T,P.needsUpdate=!0)}})}),this.showBoundingBoxCheckbox=document.getElementById("show-bbox-checkbox"),this.showAxesCheckbox=document.getElementById("show-axes-checkbox"),this.showNormalsCheckbox=document.getElementById("show-normals-checkbox"),this.showBoundingBoxCheckbox.addEventListener("change",()=>{this.updateBoundingBoxHelperState()}),this.showAxesCheckbox.addEventListener("change",()=>{this.updateAxesHelperState()}),this.showNormalsCheckbox.addEventListener("change",()=>{this.updateNormalsHelpersState()});const b=document.getElementById("attach-bone-select"),I=document.getElementById("attach-bone-slider"),v=document.getElementById("attach-bone-value"),S=document.getElementById("undo-attach-btn");b.addEventListener("change",()=>{const T=parseInt(b.value);isNaN(T)||(I.value=T.toString(),v.textContent=T.toString(),this.changeBoneForAttachment(T))}),I.addEventListener("input",()=>{const T=parseInt(I.value);b.value=T.toString(),v.textContent=T.toString(),this.changeBoneForAttachment(T)}),S.addEventListener("click",()=>this.removeAttachment()),De.groupEnd()}initScaleSlider(){const e=document.getElementById("scale-slider"),t=document.getElementById("scale-label");e.addEventListener("input",n=>{const i=parseFloat(n.target.value);t.textContent=`Scale: ${i.toFixed(2)}x`,this.setModelScale(i)}),t.textContent=`Scale: ${parseFloat(e.value).toFixed(2)}x`}setModelScale(e){this.loadedGroup&&(this.loadedGroup.scale.set(e,e,e),this.updateStageForObject(this.loadedGroup))}setSceneBackground(e){const t=new Re(e);this.scene.background=t,this.scene.fog&&this.scene.fog.color.copy(t);const n=document.getElementById("canvas-container");n&&(n.style.backgroundColor=e)}applySceneMaterialTuning(e){e.traverse(t=>{const n=t;if(!n.isMesh)return;n.castShadow=!0,n.receiveShadow=!0,(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{r&&(r instanceof $l&&(r.shininess=Math.max(r.shininess,12),r.specular.set(3098729)),"envMapIntensity"in r&&(r.envMapIntensity=.72),r.needsUpdate=!0)})})}updateStageForObject(e){if(!e){this.gridHelper&&(this.gridHelper.position.y=0,this.gridHelper.scale.set(1,1,1));return}const t=new Xt().setFromObject(e);if(!Number.isFinite(t.min.y)||!Number.isFinite(t.max.y))return;const n=t.getSize(new N),i=Math.max(120,Math.max(n.x,n.z)*.74+30),r=t.min.y-1.2;if(this.gridHelper){const a=Math.max(.65,Math.min(2.4,i/230));this.gridHelper.position.y=r,this.gridHelper.scale.set(a,1,a)}this.directionalLight.target.position.set(0,(t.min.y+t.max.y)*.5,0),this.directionalLight.target.updateMatrixWorld()}handleBmdFile=async(e,t)=>{De.info(`handleBmdFile("${e.name}")`);try{await d3.validateBMDFile(e),this.bmdFile=e,this.lastBmdFilePath=t||null,document.querySelector("#bmd-drop-zone p").textContent=`Selected: ${e.name}`,this.loadAndDisplayModel()}catch(n){if(n instanceof En)alert(`Invalid file: ${n.message}`),De.error("File validation failed:",n.message);else throw n}};handleAnimBmdFile=e=>{De.debug(`[App] handleAnimBmdFile("${e.name}")`),this.animBmdFile=e,document.querySelector("#anim-bmd-drop-zone p").textContent=`Selected: ${e.name}`,this.loadExternalAnimations()};handleMultipleTextureFiles=e=>{Array.from(e).forEach(t=>this.loadAndApplyTexture(t))};handleTextureFile=e=>{De.debug(`[App] handleTextureFile("${e.name}")`),this.loadAndApplyTexture(e)};exportToGLB(){if(!this.loadedGroup){alert("Load a BMD model first.");return}const e=new ma,t={binary:!0,animations:this.loadedGroup.animations,embedImages:!0};e.parse(this.loadedGroup,n=>{const i=n,r=new Blob([i],{type:"model/gltf-binary"}),a=(this.loadedGroup.name||"model").replace(/[^a-z0-9_-]/gi,"_"),o=new Date().toISOString().replace(/[:T]/g,"").split(".")[0],l=`${a}_${o}.glb`,c=document.createElement("a");c.href=URL.createObjectURL(r),c.download=l,c.click(),URL.revokeObjectURL(c.href),De.debug(`✔️  Saved ${l} (${(r.size/1024).toFixed(1)} KB)`)},n=>{De.error("❌ GLTFExporter error:",n),alert("Error during export. Check the console.")},t)}exportGif(){if(this.isRecordingGif)return;if(!this.loadedGroup){alert("Load a BMD model first.");return}const e=document.getElementById("status"),t=document.getElementById("export-gif-btn");this.isRecordingGif=!0,e.textContent="Recording GIF…",t&&(t.disabled=!0);const n=Math.max(16,Math.min(1024,parseInt(this.gifWidthInput?.value??"800",10)||800)),i=Math.max(16,Math.min(1024,parseInt(this.gifHeightInput?.value??"600",10)||600)),r=document.getElementById("speed-slider"),a=parseFloat(r?.value??"1")||1,o=!!(this.currentAction&&this.mixer);let l=null,c=0;o&&this.currentAction&&(l=this.currentAction.getClip(),c=l.userData?.numAnimationKeys??0);const h=parseInt(this.gifDelayInput?.value??"",10),u=!Number.isNaN(h)&&h>0?h:null,d=Math.max(1,Math.min(8,parseInt(this.gifFrameMultiplierInput?.value??"1",10)||1)),p=document.createElement("canvas");p.width=n,p.height=i;const g=p.getContext("2d"),_=65280,f=_>>16&255,m=_>>8&255,y=_&255,w=new vd({workers:2,workerScript:yd,quality:10,width:n,height:i,transparent:_}),E=this.scene.background?this.scene.background.clone():null;this.scene.background=null;const C=this.gridHelper?.visible??!1;if(this.gridHelper&&(this.gridHelper.visible=!1),w.on("progress",L=>{e.textContent=`Rendering GIF… ${(L*100).toFixed(0)}%`}),w.on("finished",L=>{E?this.scene.background=E:this.scene.background=null,this.gridHelper&&(this.gridHelper.visible=C);const P=URL.createObjectURL(L),z=document.createElement("a");z.href=P,z.download=`model_${n}x${i}.gif`,z.click(),URL.revokeObjectURL(P),this.isRecordingGif=!1,t&&(t.disabled=!1),e.textContent=`GIF saved (${n}×${i}).`}),w.on("abort",()=>{E?this.scene.background=E:this.scene.background=null,this.gridHelper&&(this.gridHelper.visible=C),this.isRecordingGif=!1,t&&(t.disabled=!1),e.textContent="GIF recording aborted."}),!o||!l||c===0){this.renderer.render(this.scene,this.camera),g.clearRect(0,0,n,i),g.drawImage(this.renderer.domElement,0,0,n,i);const L=g.getImageData(0,0,n,i),P=L.data,z=40;for(let U=0;U<P.length;U+=4)P[U+3]<z&&(P[U]=f,P[U+1]=m,P[U+2]=y,P[U+3]=255);g.putImageData(L,0,0),w.addFrame(g,{copy:!0,delay:Math.min(Math.max(u??120,10),1e3)}),w.render();return}const x=Math.max(1,c*d),b=this.currentAction._effectiveTimeScale??a,I=l.duration/Math.max(b,1e-4)/x*1e3,v=Math.min(Math.max(u??Math.round(I),5),1e3);let S=0;const T=()=>{if(S>=x){w.render();return}const L=S/x*l.duration;this.currentAction.time=L,this.mixer.update(0),this.renderer.render(this.scene,this.camera),g.clearRect(0,0,n,i),g.drawImage(this.renderer.domElement,0,0,n,i);const P=g.getImageData(0,0,n,i),z=P.data,U=40;for(let H=0;H<z.length;H+=4)z[H+3]<U&&(z[H]=f,z[H+1]=m,z[H+2]=y,z[H+3]=255);g.putImageData(P,0,0),w.addFrame(g,{copy:!0,delay:v}),S++,requestAnimationFrame(T)};requestAnimationFrame(T)}async loadAndDisplayModel(){if(!this.bmdFile)return;const e=document.getElementById("status");e.textContent="Loading model…",De.groupDebug("loadAndDisplayModel()"),De.time("loadAndDisplayModel"),this.clearScene(),this.loadedGroup=null,this.requiredTextures=[],document.getElementById("texture-controls").style.display="none";try{const t=await this.bmdFile.arrayBuffer(),{group:n,requiredTextures:i}=await this.bmdLoader.load(t);n.name="bmd_model",this.scene.add(n),this.loadedGroup=n,this.requiredTextures=i,this.applySceneMaterialTuning(n),this.updateStageForObject(n);const r=n.getObjectByProperty("type","SkinnedMesh");if(this.mainSkeleton=r?.skeleton||null,this.setupAnimations(n),e.textContent=`Loaded: ${n.name} (animations: ${n.animations.length})`,this.updateTextureUI(),this.updateDiagnosticInfo(),this.exportBtn&&(this.exportBtn.disabled=!1),At()&&this.lastBmdFilePath&&i.length>0){De.debug("%c[Electron] Auto-searching textures...","color: #4CAF50"),De.debug("[Electron] Required textures from BMD:",i),De.debug("[Electron] BMD file path:",this.lastBmdFilePath),e.textContent="Searching for textures...";try{const a=await Rl(this.lastBmdFilePath,i),o=Object.keys(a).length;if(De.debug("[Electron] Search result:",a),o>0){const l=Object.values(a).reduce((c,h)=>c+h.length,0);De.debug(`%c[Electron] Found ${o} texture names (${l} files), loading...`,"color: #4CAF50");for(const[c,h]of Object.entries(a))for(const u of h){const d=await hr(u);if(d){const p=ga(d.name,d.data);await this.loadAndApplyTexture(p)}}e.textContent=`Loaded: ${n.name} | Auto-loaded ${l} texture files for ${o} base names`}else e.textContent=`Loaded: ${n.name} | No textures found automatically`}catch(a){De.error("[Electron] Error auto-searching textures:",a),e.textContent=`Loaded: ${n.name} | Texture search failed`}}Je&&(this.scene.remove(Je),Je.geometry.dispose(),Je=null),Je=new es(n),Je.visible=yi.checked,this.scene.add(Je),n.traverse(a=>{if(a.isMesh){const o=a.material;"wireframe"in o&&(o.wireframe=Uo.checked,o.needsUpdate=!0)}}),this.meshRefs=[],n.traverse(a=>{a.isMesh&&this.meshRefs.push(a)}),this.buildBlendingUI(),this.updateBoundingBoxHelperState(),this.updateAxesHelperState(),this.updateNormalsHelpersState()}catch(t){De.error("loader.load() ERROR",t),e.textContent=`Error: ${t.message}`}finally{De.timeEnd("loadAndDisplayModel"),De.groupEnd()}}async loadExternalAnimations(){if(!(!this.loadedGroup||!this.animBmdFile))try{const e=await this.animBmdFile.arrayBuffer();let t=this.mainSkeleton;if(t||(De.debug("[loadExternalAnimations] mainSkeleton not available, searching in loadedGroup..."),this.loadedGroup.traverse(i=>{!t&&i.isSkinnedMesh&&(t=i.skeleton)})),!t){De.warn("No skeleton found for external animations");return}De.debug("[loadExternalAnimations] Using skeleton with",t.bones.length,"bones");const n=this.bmdLoader.loadAnimationsFrom(e,t);n.length&&(this.loadedGroup.animations=n,this.setupAnimations(this.loadedGroup),document.getElementById("status").textContent=`Animations loaded from ${this.animBmdFile.name}`)}catch(e){De.error("Failed to load external animations",e)}}buildBlendingUI(){const e=document.getElementById("blending-controls"),t=document.getElementById("blending-container");t.innerHTML="";const n={Opaque:kt,Normal:Vn,Additive:er,Multiply:ra,Subtractive:sa};this.meshRefs.forEach((i,r)=>{const a=document.createElement("div");a.className="blend-row";const o=document.createElement("span");o.textContent=i.name||`Mesh ${r}`,o.className="blend-label";const l=document.createElement("select");l.className="animation-dropdown blend-select",Object.keys(n).forEach(h=>{const u=document.createElement("option");u.value=h,u.text=h,l.appendChild(u)});const c=Object.entries(n).find(([,h])=>h===i.material.blending);l.value=c?c[0]:"Normal",l.addEventListener("change",()=>{const h=i.material;h.blending=n[l.value],h.transparent=h.blending!==kt,h.depthWrite=h.blending===kt,h.needsUpdate=!0}),a.append(o,l),t.appendChild(a)}),e.style.display=this.meshRefs.length?"block":"none"}clearScene(){const e=this.scene.getObjectByName("bmd_model");e&&(this.scene.remove(e),e.traverse(t=>{if(t.isMesh){t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(i=>i.dispose()):n&&("map"in n&&n.map&&n.map instanceof vt&&n.map.dispose(),n.dispose())}}),this.mixer=wi.disposeMixer(this.mixer),this.currentAction=null,document.getElementById("animations-container").innerHTML=""),this.meshRefs=[],this.mainSkeleton=null,this.boundingBoxHelper&&(this.scene.remove(this.boundingBoxHelper),this.boundingBoxHelper.geometry.dispose(),this.boundingBoxHelper.material.dispose(),this.boundingBoxHelper=null),this.axesHelper&&(this.scene.remove(this.axesHelper),this.axesHelper.geometry.dispose(),this.axesHelper.material.dispose(),this.axesHelper=null),this.normalHelpers.length&&(this.normalHelpers.forEach(t=>{this.scene.remove(t),t.geometry.dispose(),t.material.dispose()}),this.normalHelpers=[]),this.normalsVisible=!1,wi.disposeObjectArray(this.attachments),this.exportBtn&&(this.exportBtn.disabled=!0),this.updateStageForObject(null),this.updateDiagnosticInfo()}updateTextureUI(){const e=document.getElementById("texture-controls"),t=document.getElementById("texture-info-text"),n=document.getElementById("texture-drop-zone"),i=Array.from(new Set(this.requiredTextures));i.length>0&&i[0]?(t.textContent=i.join(", "),e.style.display="block",n.style.display="block"):(t.textContent="This model does not require textures.",e.style.display="block",n.style.display="none")}async loadAndApplyTexture(e){if(!this.loadedGroup){De.warn("Model not loaded - no textures.");return}const t=document.getElementById("status");t.textContent=`Loading: ${e.name}…`;try{let n=function(f){const m=f.split(/[\\/]/).pop().toLowerCase(),y=m.split(".").pop();return{base:m.replace(/\.[^.]+$/,""),ext:y}};const i=e.name.split(".").pop().toLowerCase();let r;if(i==="tga")r=await this.textureLoader.loadAsync(await _d(await e.arrayBuffer()));else if(i==="ozj"||i==="ozt")r=await this.textureLoader.loadAsync(await Ua(await e.arrayBuffer()));else{const f=URL.createObjectURL(e);r=await this.textureLoader.loadAsync(f),URL.revokeObjectURL(f)}r.colorSpace=Rt,r.wrapS=r.wrapT=Ln,r.flipY=!1,r.name=e.name;const a=ur(r,e.name);r.userData.blendHeuristic=a;const o=Ro(a.mode),l=Math.round(a.confidence*100),c=new Map([[e.name.toLowerCase(),a]]),h=f=>{const m=f.toLowerCase(),y=c.get(m);if(y)return y;const w=ur(r,f);return c.set(m,w),w};De.debug(`[Texture blend] "${e.name}" -> ${o} (${l}%) ${a.reason}`,{metrics:a.metrics,scores:a.scores});const u={jpg:["ozj","jpeg"],jpeg:["ozj","jpg"],ozj:["jpg","jpeg","png"],png:["ozj","ozt"],tga:["ozt","png"],ozt:["tga","png"]},d=e.name.toLowerCase(),p=d.replace(/\.[^.]+$/,""),g=d.split(".").pop(),_=[];if(this.loadedGroup.traverse(f=>{if(f.isMesh&&f.userData.texturePath){const m=f.userData.texturePath,{base:y,ext:w}=n(m),C=(w===g||u[w]?.includes(g)||u[g]?.includes(w))&&y===p;_.push({mesh:f,path:m,isMatch:C})}}),g==="ozj"||g==="ozt"){let f=!1,m=null;_.forEach(y=>{if(y.isMatch){const w=h(y.path),E=y.mesh.material;E.map&&E.map.dispose(),E.map=r,E.color.set(16777215),dr(E,w),f=!0,m||(m=w),this.exportBtn&&(this.exportBtn.disabled=!1)}}),f||De.warn(`No matching mesh found for "${e.name}"`),t.textContent=f?`Texture "${e.name}" loaded (blend: ${Ro((m||a).mode)}, ${Math.round((m||a).confidence*100)}%).`:`No matching mesh found for "${e.name}". Check the console.`}else{let f=`Apply texture "${e.name}" to which mesh?
`;_.forEach((w,E)=>{f+=`${E}: ${w.mesh.name} (needs ${w.path})
`});const m=window.prompt(f,""),y=m!==null?parseInt(m,10):NaN;if(!isNaN(y)&&_[y]){const w=_[y].mesh,E=_[y].path,C=h(E),x=w.material;x.map&&x.map.dispose(),x.map=r,x.color.set(16777215),dr(x,C),this.exportBtn&&(this.exportBtn.disabled=!1),t.textContent=`Texture "${e.name}" loaded (blend: ${Ro(C.mode)}, ${Math.round(C.confidence*100)}%).`}else t.textContent=`Texture "${e.name}" was not applied.`}}catch(n){De.error("Texture load error:",n),t.textContent=`Error: ${n.message}`}}isDrawableTextureImage(e){if(!e||typeof e!="object"&&typeof e!="function")return!1;const t=e;return typeof t.width=="number"&&typeof t.height=="number"}exportTextures(){if(!this.loadedGroup)return;const e=new Set;this.loadedGroup.traverse(n=>{if(n.isMesh){const i=n.material;if(!i.map||e.has(i.map))return;const r=i.map.image;if(!this.isDrawableTextureImage(r))return;const a=r,o=document.createElement("canvas");o.width=a.width,o.height=a.height;const l=o.getContext("2d");if(!l)return;l.drawImage(a,0,0),o.toBlob(c=>{if(!c)return;const h=document.createElement("a");h.href=URL.createObjectURL(c);const u=(i.map?.name?i.map.name:"texture").replace(/\.[^.]+$/,"");h.download=`${u}.png`,h.style.display="none",document.body.appendChild(h),h.click(),document.body.removeChild(h)},"image/png"),e.add(i.map)}});const t=document.getElementById("status");t.textContent=e.size?`Exported ${e.size} texture(s).`:"No loaded textures to export."}getModelSizeHint(){if(!this.loadedGroup)return 100;const t=new Xt().setFromObject(this.loadedGroup).getSize(new N);return Math.max(t.x,t.y,t.z)||100}updateBoundingBoxHelperState(){if(!this.showBoundingBoxCheckbox?.checked||!this.loadedGroup){this.boundingBoxHelper&&(this.boundingBoxHelper.visible=!1);return}this.boundingBoxHelper||(this.boundingBoxHelper=new ad(this.loadedGroup,16776960),this.boundingBoxHelper.name="bmd_bbox_helper",this.scene.add(this.boundingBoxHelper)),this.boundingBoxHelper.visible=!0,this.updateSkinnedMeshesBoundingBoxes(),this.boundingBoxHelper.update()}updateSkinnedMeshesBoundingBoxes(){this.loadedGroup&&this.loadedGroup.traverse(e=>{const t=e;if(!t.isSkinnedMesh)return;const n=t.geometry;if(!n.getAttribute("position"))return;if(!!n.getAttribute("skinIndex")&&!!n.getAttribute("skinWeight")){t.computeBoundingBox();return}t.boundingBox||(t.boundingBox=new Xt),n.boundingBox===null&&n.computeBoundingBox(),n.boundingBox&&t.boundingBox&&t.boundingBox.copy(n.boundingBox)})}updateAxesHelperState(){if(!this.showAxesCheckbox?.checked||!this.loadedGroup){this.axesHelper&&(this.axesHelper.visible=!1);return}const t=this.getModelSizeHint()*.6||100;this.axesHelper||(this.axesHelper=new od(t),this.axesHelper.name="bmd_axes_helper",this.axesHelper.matrixAutoUpdate=!0,this.scene.add(this.axesHelper)),this.axesHelper.visible=!0}updateNormalsHelpersState(){if(!this.showNormalsCheckbox?.checked||!this.loadedGroup){this.normalsVisible=!1,this.normalHelpers.length&&this.normalHelpers.forEach(t=>{t.visible=!1});return}if(!this.normalHelpers.length){const t=this.getModelSizeHint()*.05||5;this.loadedGroup.traverse(n=>{const i=n;if(i.isMesh&&i.geometry.attributes?.normal){let r;i.isSkinnedMesh?r=new Ed(i,t,65535):r=new ix(i,t,65535),r.name=`bmd_normals_helper_${this.normalHelpers.length}`,this.scene.add(r),this.normalHelpers.push(r)}})}this.normalHelpers.forEach(t=>{t.visible=!0}),this.normalsVisible=!0,this.normalsUpdateCounter=0,this.normalHelpers.forEach(t=>t.update())}setAnimationSpeed(e){this.currentAction&&this.currentAction.setEffectiveTimeScale(e)}setupAnimations(e){this.mixer=new id(e),this.currentAction=null;const t=document.getElementById("animations-container"),n=document.getElementById("speed-slider");if(t.innerHTML="",!e.animations.length){t.textContent="No animations in this model.";return}const i=document.createElement("select");i.classList.add("animation-dropdown"),i.id="animation-select";const r=document.createElement("option");r.textContent="Select Animation",r.value="",r.disabled=!0,i.appendChild(r),e.animations.forEach((o,l)=>{const c=document.createElement("option");c.value=l.toString(),c.textContent=`Animation ${l}`,i.appendChild(c)}),i.onchange=()=>{const o=parseInt(i.value);if(isNaN(o))return;const l=e.animations[o];this.mixer.stopAllAction(),this.currentAction=this.mixer.clipAction(l);const c=parseFloat(n.value);this.currentAction.setEffectiveTimeScale(c),this.currentAction.reset().play()},t.appendChild(i),e.animations.length>0&&(i.value="0",i.dispatchEvent(new Event("change")));const a=document.getElementById("frame-lock-controls");a.style.display=e.animations.length&&e.animations[0].userData?.numAnimationKeys?"block":"none",this.lockFrameCheckbox.checked=!1,this.isFrameLocked=!1,this.updateDiagnosticInfo()}animate=e=>{requestAnimationFrame(this.animate);const t=this.clock.getDelta();if(!this.isActive)return;const n=e*25e-5;this.rimLight.position.x=-160+Math.sin(n)*18,this.rimLight.position.z=-210+Math.cos(n)*14,this.loadedGroup&&this.isAutoRotating&&!this.userIsInteracting&&!this.isRecordingGif&&(this.loadedGroup.rotation.z+=t*.2),this.mixer&&(this.isFrameLocked?this.applyLockedFrame():this.isRecordingGif||this.mixer.update(t)),this.axesHelper&&this.loadedGroup&&this.axesHelper.visible&&(this.axesHelper.position.copy(this.loadedGroup.position),this.axesHelper.quaternion.copy(this.loadedGroup.quaternion),this.axesHelper.scale.copy(this.loadedGroup.scale)),this.boundingBoxHelper&&this.loadedGroup&&this.boundingBoxHelper.visible&&(this.updateSkinnedMeshesBoundingBoxes(),this.boundingBoxHelper.update()),this.normalsVisible&&this.normalHelpers.length&&(this.normalsUpdateCounter=(this.normalsUpdateCounter+1)%3,this.normalsUpdateCounter===0&&this.normalHelpers.forEach(i=>i.update())),this.controls.update(),this.renderer.render(this.scene,this.camera),this.updateDiagnosticInfo(e)};applyLockedFrame(){if(!this.currentAction)return;const e=this.currentAction.getClip(),t=e.userData?.numAnimationKeys??0;if(!t)return;const n=Math.min(Math.max(this.lockedFrame,0),t-1);this.currentAction.time=n/t*e.duration,this.mixer.update(0)}updateDiagnosticInfo(e=0){if(this.diagActionsCountEl.textContent=this.loadedGroup?.animations.length.toString()||"0",this.currentAction){const r=this.currentAction.getClip(),a=r.userData?.numAnimationKeys??0;if(this.diagAnimationKeysEl.textContent=a.toString(),a>0){const o=(this.currentAction.time%r.duration+r.duration)%r.duration;o/r.duration;const l=this.isFrameLocked?this.lockedFrame:Math.floor(o/r.duration*a);this.diagCurrentFrameEl.textContent=l.toString()}else this.diagCurrentFrameEl.textContent="N/A"}else this.diagAnimationKeysEl.textContent="0",this.diagCurrentFrameEl.textContent="N/A";let t=0;this.loadedGroup&&this.loadedGroup.traverse(r=>{r.isBone&&t++}),this.diagBonesCountEl.textContent=t.toString();let n=0;this.loadedGroup&&this.loadedGroup.traverse(r=>{r.isMesh&&n++}),this.diagMeshesCountEl.textContent=n.toString(),this.frameCount++;const i=e-this.lastFrameTime;i>=1e3&&(this.fps=this.frameCount*1e3/i,this.diagFpsEl.textContent=this.fps.toFixed(0),this.frameCount=0,this.lastFrameTime=e)}setBrightness(e){const t=Math.max(.1,e);this.renderer.toneMappingExposure=t,this.ambientLight&&(this.ambientLight.intensity=.48*t),this.hemisphereLight&&(this.hemisphereLight.intensity=.62*t),this.directionalLight&&(this.directionalLight.intensity=1.85*t),this.rimLight&&(this.rimLight.intensity=.82*t)}async setupAttachmentControls(){if(De.debug("[setupAttachmentControls] Starting..."),!this.loadedGroup||!this.currentAttachmentFile){alert("First load the base character model.");return}if(!this.mainSkeleton){alert("The base model does not include a skeleton.");return}const e=this.mainSkeleton.bones;De.debug(`[setupAttachmentControls] Main skeleton has ${e.length} bones`);const t=document.getElementById("attach-controls");t.style.display="block";const n=document.getElementById("attach-bone-select"),i=document.getElementById("attach-bone-slider"),r=document.getElementById("attach-bone-value");n.innerHTML='<option value="">-- Select Bone --</option>',e.forEach((a,o)=>{const l=document.createElement("option");l.value=o.toString(),l.textContent=`${o}: ${a.name||"Unnamed"}`,n.appendChild(l)}),i.min="0",i.max=(e.length-1).toString(),i.value="0",r.textContent="0",await this.loadAttachmentAtBone(0),n.value="0"}async loadAttachmentAtBone(e){if(De.debug(`[loadAttachmentAtBone] Loading attachment at bone ${e}`),!this.loadedGroup||!this.currentAttachmentFile||!this.mainSkeleton){De.warn("[loadAttachmentAtBone] Missing required objects");return}const t=this.mainSkeleton.bones;if(e<0||e>=t.length){De.warn("[loadAttachmentAtBone] Bone index out of range");return}const n=t[e];De.debug(`[loadAttachmentAtBone] Attaching to bone: ${n.name||"Unnamed"}`),this.currentAttachment&&(this.currentAttachment.parent&&this.currentAttachment.parent.remove(this.currentAttachment),this.disposeAttachment(this.currentAttachment));const{group:i,requiredTextures:r}=await this.bmdLoader.load(await this.currentAttachmentFile.arrayBuffer());if(i.name=`attachment_bone_${e}`,i.position.set(0,0,0),i.rotation.set(0,0,0),i.scale.set(1,1,1),this.applySceneMaterialTuning(i),n.add(i),this.currentAttachment=i,this.requiredTextures.push(...r),this.updateTextureUI(),At()&&this.lastAttachmentFilePath&&r.length>0){De.debug("%c[Electron] Auto-searching textures for attachment...","color: #4CAF50");try{const a=await Rl(this.lastAttachmentFilePath,r),o=Object.keys(a).length;if(o>0){const l=Object.values(a).reduce((c,h)=>c+h.length,0);De.debug(`%c[Electron] Found ${o} texture names (${l} files) for attachment, loading...`,"color: #4CAF50");for(const[c,h]of Object.entries(a))for(const u of h){const d=await hr(u);if(d){const p=ga(d.name,d.data);await this.loadAndApplyTexture(p)}}De.debug(`%c[Electron] Auto-loaded ${l} texture files for ${o} base names`,"color: #4CAF50")}}catch(a){De.error("[Electron] Error auto-searching textures for attachment:",a)}}Je&&(this.scene.remove(Je),Je.geometry.dispose()),Je=new es(this.loadedGroup),Je.visible=yi.checked,this.scene.add(Je),this.meshRefs=[],this.loadedGroup.traverse(a=>{a.isMesh&&this.meshRefs.push(a)}),this.buildBlendingUI(),this.updateStageForObject(this.loadedGroup)}changeBoneForAttachment(e){if(De.debug(`[changeBoneForAttachment] Changing to bone ${e}`),!this.loadedGroup||!this.currentAttachment||!this.mainSkeleton){De.warn("[changeBoneForAttachment] Missing required objects");return}const t=this.mainSkeleton.bones;if(e<0||e>=t.length){De.warn(`[changeBoneForAttachment] Bone index ${e} out of range (0-${t.length-1})`);return}const n=t[e];De.debug(`[changeBoneForAttachment] Target bone: ${n.name||"Unnamed"}`),this.currentAttachment.parent&&this.currentAttachment.parent.remove(this.currentAttachment),this.currentAttachment.position.set(0,0,0),this.currentAttachment.rotation.set(0,0,0),this.currentAttachment.scale.set(1,1,1),n.add(this.currentAttachment),this.currentAttachment.name=`attachment_bone_${e}`,this.currentAttachment.matrixWorldNeedsUpdate=!0,this.currentAttachment.parent&&(this.currentAttachment.parent.matrixWorldNeedsUpdate=!0),this.updateStageForObject(this.loadedGroup)}removeAttachment(){if(!this.currentAttachment){alert("No attachment to remove.");return}this.currentAttachment.parent&&this.currentAttachment.parent.remove(this.currentAttachment),this.disposeAttachment(this.currentAttachment),this.currentAttachment=null,this.currentAttachmentFile=null;const e=document.getElementById("attach-controls");e.style.display="none",document.querySelector("#attach-drop-zone p").textContent="Drop attachment .bmd",Je&&this.loadedGroup&&(this.scene.remove(Je),Je.geometry.dispose(),Je=new es(this.loadedGroup),Je.visible=yi.checked,this.scene.add(Je)),this.meshRefs=[],this.loadedGroup&&this.loadedGroup.traverse(t=>{t.isMesh&&this.meshRefs.push(t)}),this.buildBlendingUI(),this.updateTextureUI(),this.updateStageForObject(this.loadedGroup)}disposeAttachment(e){e.traverse(t=>{if(t.isMesh){t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(i=>i.dispose()):(n.map&&n.map.dispose(),n.dispose())}})}async attachModelToBone(e,t){if(!this.loadedGroup){alert("First load the base character model.");return}const n=this.loadedGroup.getObjectByProperty("type","SkinnedMesh");if(!n){alert("The base model does not include a skeleton.");return}const i=n.skeleton.bones;let r=null;if(typeof t=="number"){if(t<0||t>=i.length){alert(`The ${t} index is out of range (0 - ${i.length-1}).`);return}r=i[t]}else if(r=this.loadedGroup.getObjectByName(t),!r){alert(`The bone named “${t}” was not found.`);return}const{group:a,requiredTextures:o}=await this.bmdLoader.load(await e.arrayBuffer());a.name=`attachment_${t}_${this.attachments.length}`,a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),this.applySceneMaterialTuning(a),r.add(a),this.attachments.push(a),this.requiredTextures.push(...o),this.updateTextureUI(),Je&&(this.scene.remove(Je),Je.geometry.dispose()),Je=new es(this.loadedGroup),Je.visible=yi.checked,this.scene.add(Je),this.meshRefs=[],this.loadedGroup.traverse(l=>{l.isMesh&&this.meshRefs.push(l)}),this.buildBlendingUI(),this.updateStageForObject(this.loadedGroup)}undoLastAttachment(){const e=this.attachments.pop();if(!e){alert("No attachments to remove.");return}wi.disposeObject3D(e),Je&&(this.scene.remove(Je),Je.geometry.dispose()),this.loadedGroup&&(Je=new es(this.loadedGroup),Je.visible=yi.checked,this.scene.add(Je),this.meshRefs=[],this.loadedGroup.traverse(t=>{t.isMesh&&this.meshRefs.push(t)})),this.buildBlendingUI(),this.updateTextureUI(),this.updateStageForObject(this.loadedGroup)}}const m3=new p3;let xa=null,va=null;if(At())xa=new rc,xa.setActive(!1);else{const s=document.querySelector('.tab-btn[data-view="character"]');s&&(s.style.display="none");const e=document.getElementById("sidebar-character");e&&e.classList.add("hidden");const t=document.getElementById("view-character");t&&t.classList.add("hidden")}va=new c3;va.setActive(!1);const g3=document.querySelectorAll(".tab-btn");g3.forEach(s=>{s.addEventListener("click",()=>{const e=s.dataset.view||"bmd";m3.setActive(e==="bmd"),xa&&xa.setActive(e==="character"),va&&va.setActive(e==="terrain")})});
