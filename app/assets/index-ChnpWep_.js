(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Mh="modulepreload",Sh=function(s){return"/muonline-bmd-viewer/app/"+s},Lo={},Po=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};var a=c;document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(t.map(h=>{if(h=Sh(h),h in Lo)return;Lo[h]=!0;const d=h.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${u}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":Mh,d||(p.as="script"),p.crossOrigin="",p.href=h,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((g,x)=>{p.addEventListener("load",g),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})};const gr="181",Ei={ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Eh=0,Do=1,Th=2,dc=1,Ah=2,Mn=3,On=0,Bt=1,Kt=2,Ct=0,Nn=1,tr=2,nr=3,ir=4,wh=5,Zn=100,Ch=101,Rh=102,Ih=103,Lh=104,Ph=200,Dh=201,Uh=202,Fh=203,ma=204,ga=205,Nh=206,Bh=207,Oh=208,kh=209,zh=210,Vh=211,Hh=212,Gh=213,Wh=214,xa=0,_a=1,va=2,Ai=3,ba=4,ya=5,Ma=6,Sa=7,ro=0,Xh=1,qh=2,Bn=0,$h=1,Yh=2,jh=3,Kh=4,Zh=5,Jh=6,Qh=7,Uo="attached",ed="detached",uc=300,wi=301,Ci=302,Ea=303,Ta=304,xr=306,Ri=1e3,on=1001,sr=1002,Ot=1003,fc=1004,ts=1005,Wt=1006,Ys=1007,Un=1008,hn=1009,pc=1010,mc=1011,os=1012,ao=1013,Qn=1014,ln=1015,Pi=1016,oo=1017,lo=1018,ls=1020,gc=35902,xc=35899,_c=1021,vc=1022,Xt=1023,cs=1026,hs=1027,bc=1028,co=1029,ho=1030,uo=1031,fo=1033,js=33776,Ks=33777,Zs=33778,Js=33779,Aa=35840,wa=35841,Ca=35842,Ra=35843,Ia=36196,La=37492,Pa=37496,Da=37808,Ua=37809,Fa=37810,Na=37811,Ba=37812,Oa=37813,ka=37814,za=37815,Va=37816,Ha=37817,Ga=37818,Wa=37819,Xa=37820,qa=37821,$a=36492,Ya=36494,ja=36495,Ka=36283,Za=36284,Ja=36285,Qa=36286,td=2200,nd=2201,id=2202,ds=2300,rr=2301,Ar=2302,Mi=2400,Si=2401,ar=2402,po=2500,sd=2501,rd=3200,ad=3201,yc=0,od=1,Sn="",Pt="srgb",Ii="srgb-linear",or="linear",nt="srgb",ii=7680,Fo=519,ld=512,cd=513,hd=514,Mc=515,dd=516,ud=517,fd=518,pd=519,No=35044,Bo="300 es",cn=2e3,lr=2001;function Sc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function us(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function md(){const s=us("canvas");return s.style.display="block",s}const Oo={};function ko(...s){const e="THREE."+s.shift();console.log(e,...s)}function Me(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ve(...s){const e="THREE."+s.shift();console.error(e,...s)}function fs(...s){const e=s.join(" ");e in Oo||(Oo[e]=!0,Me(...s))}function gd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zo=1234567;const rs=Math.PI/180,ps=180/Math.PI;function zn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[s&255]+At[s>>8&255]+At[s>>16&255]+At[s>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Oe(s,e,t){return Math.max(e,Math.min(t,s))}function mo(s,e){return(s%e+e)%e}function xd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function _d(s,e,t){return s!==e?(t-s)/(e-s):0}function as(s,e,t){return(1-t)*s+t*e}function vd(s,e,t,n){return as(s,e,1-Math.exp(-t*n))}function bd(s,e=1){return e-Math.abs(mo(s,e*2)-e)}function yd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Md(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Sd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ed(s,e){return s+Math.random()*(e-s)}function Td(s){return s*(.5-Math.random())}function Ad(s){s!==void 0&&(zo=s);let e=zo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wd(s){return s*rs}function Cd(s){return s*ps}function Rd(s){return(s&s-1)===0&&s!==0}function Id(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ld(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Pd(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function It(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const cr={DEG2RAD:rs,RAD2DEG:ps,generateUUID:zn,clamp:Oe,euclideanModulo:mo,mapLinear:xd,inverseLerp:_d,lerp:as,damp:vd,pingpong:bd,smoothstep:yd,smootherstep:Md,randInt:Sd,randFloat:Ed,randFloatSpread:Td,seededRandom:Ad,degToRad:wd,radToDeg:Cd,isPowerOfTwo:Rd,ceilPowerOfTwo:Id,floorPowerOfTwo:Ld,setQuaternionFromProperEuler:Pd,normalize:It,denormalize:vi};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o>=1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==u||c!==p||h!==g){let f=l*u+c*p+h*g+d*x;f<0&&(u=-u,p=-p,g=-g,x=-x,f=-f);let m=1-o;if(f<.9995){const M=Math.acos(f),S=Math.sin(M);m=Math.sin(m*M)/S,o=Math.sin(o*M)/S,l=l*m+u*o,c=c*m+p*o,h=h*m+g*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+p*o,h=h*m+g*o,d=d*m+x*o;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wr.copy(this).projectOnVector(e),this.sub(wr)}reflect(e){return this.sub(wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wr=new O,Vo=new $t;class De{constructor(e,t,n,i,r,a,o,l,c){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],x=i[0],f=i[3],m=i[6],M=i[1],S=i[4],A=i[7],R=i[2],v=i[5],E=i[8];return r[0]=a*x+o*M+l*R,r[3]=a*f+o*S+l*v,r[6]=a*m+o*A+l*E,r[1]=c*x+h*M+d*R,r[4]=c*f+h*S+d*v,r[7]=c*m+h*A+d*E,r[2]=u*x+p*M+g*R,r[5]=u*f+p*S+g*v,r[8]=u*m+p*A+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=t*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cr.makeScale(e,t)),this}rotate(e){return this.premultiply(Cr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cr=new De,Ho=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Go=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dd(){const s={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(i.r=En(i.r),i.g=En(i.g),i.b=En(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Sn?or:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ii]:{primaries:e,whitePoint:n,transfer:or,toXYZ:Ho,fromXYZ:Go,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Ho,fromXYZ:Go,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),s}const Ke=Dd();function En(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ti(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let si;class Ec{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{si===void 0&&(si=us("canvas")),si.width=e.width,si.height=e.height;const i=si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=En(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(En(t[n]/255)*255):t[n]=En(t[n]);return{data:t,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ud=0;class _r{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Rr(i[a].image)):r.push(Rr(i[a]))}else r=Rr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Rr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ec.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let Fd=0;const Ir=new O;class yt extends kn{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=on,i=on,r=Wt,a=Un,o=Xt,l=hn,c=yt.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=zn(),this.name="",this.source=new _r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ir).x}get height(){return this.source.getSize(Ir).y}get depth(){return this.source.getSize(Ir).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Me(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Me(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ri:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ri:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=uc;yt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],x=l[2],f=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,A=(p+1)/2,R=(m+1)/2,v=(h+u)/4,E=(d+x)/4,I=(g+f)/4;return S>A&&S>R?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=v/n,r=E/n):A>R?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=v/i,r=I/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=E/r,i=I/r),this.set(n,i,r,t),this}let M=Math.sqrt((f-g)*(f-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nd extends kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new yt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new _r(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Nd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tc extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bd extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zt{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(r,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(e.matrixWorld),this.union(ys)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),Ms.subVectors(this.max,ki),ri.subVectors(e.a,ki),ai.subVectors(e.b,ki),oi.subVectors(e.c,ki),An.subVectors(ai,ri),wn.subVectors(oi,ai),Wn.subVectors(ri,oi);let t=[0,-An.z,An.y,0,-wn.z,wn.y,0,-Wn.z,Wn.y,An.z,0,-An.x,wn.z,0,-wn.x,Wn.z,0,-Wn.x,-An.y,An.x,0,-wn.y,wn.x,0,-Wn.y,Wn.x,0];return!Lr(t,ri,ai,oi,Ms)||(t=[1,0,0,0,1,0,0,0,1],!Lr(t,ri,ai,oi,Ms))?!1:(Ss.crossVectors(An,wn),t=[Ss.x,Ss.y,Ss.z],Lr(t,ri,ai,oi,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fn=[new O,new O,new O,new O,new O,new O,new O,new O],Qt=new O,ys=new Zt,ri=new O,ai=new O,oi=new O,An=new O,wn=new O,Wn=new O,ki=new O,Ms=new O,Ss=new O,Xn=new O;function Lr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Xn.fromArray(s,r);const o=i.x*Math.abs(Xn.x)+i.y*Math.abs(Xn.y)+i.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Od=new Zt,zi=new O,Pr=new O;class Di{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Od.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zi.subVectors(e,this.center);const t=zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(zi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zi.copy(e.center).add(Pr)),this.expandByPoint(zi.copy(e.center).sub(Pr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pn=new O,Dr=new O,Es=new O,Cn=new O,Ur=new O,Ts=new O,Fr=new O;class vr{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Dr.copy(e).add(t).multiplyScalar(.5),Es.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(Dr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Es),o=Cn.dot(this.direction),l=-Cn.dot(Es),c=Cn.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Dr).addScaledVector(Es,u),p}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,i,r){Ur.subVectors(t,e),Ts.subVectors(n,e),Fr.crossVectors(Ur,Ts);let a=this.direction.dot(Fr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const l=o*this.direction.dot(Ts.crossVectors(Cn,Ts));if(l<0)return null;const c=o*this.direction.dot(Ur.cross(Cn));if(c<0||l+c>a)return null;const h=-o*Cn.dot(Fr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,n,i,r,a,o,l,c,h,d,u,p,g,x,f){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,p,g,x,f)}set(e,t,n,i,r,a,o,l,c,h,d,u,p,g,x,f){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=p,m[7]=g,m[11]=x,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/li.setFromMatrixColumn(e,0).length(),r=1/li.setFromMatrixColumn(e,1).length(),a=1/li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-x*d}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kd,e,zd)}lookAt(e,t,n){const i=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Rn.crossVectors(n,Vt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Rn.crossVectors(n,Vt)),Rn.normalize(),As.crossVectors(Vt,Rn),i[0]=Rn.x,i[4]=As.x,i[8]=Vt.x,i[1]=Rn.y,i[5]=As.y,i[9]=Vt.y,i[2]=Rn.z,i[6]=As.z,i[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],x=n[6],f=n[10],m=n[14],M=n[3],S=n[7],A=n[11],R=n[15],v=i[0],E=i[4],I=i[8],b=i[12],_=i[1],w=i[5],L=i[9],U=i[13],N=i[2],F=i[6],V=i[10],q=i[14],G=i[3],Q=i[7],te=i[11],ge=i[15];return r[0]=a*v+o*_+l*N+c*G,r[4]=a*E+o*w+l*F+c*Q,r[8]=a*I+o*L+l*V+c*te,r[12]=a*b+o*U+l*q+c*ge,r[1]=h*v+d*_+u*N+p*G,r[5]=h*E+d*w+u*F+p*Q,r[9]=h*I+d*L+u*V+p*te,r[13]=h*b+d*U+u*q+p*ge,r[2]=g*v+x*_+f*N+m*G,r[6]=g*E+x*w+f*F+m*Q,r[10]=g*I+x*L+f*V+m*te,r[14]=g*b+x*U+f*q+m*ge,r[3]=M*v+S*_+A*N+R*G,r[7]=M*E+S*w+A*F+R*Q,r[11]=M*I+S*L+A*V+R*te,r[15]=M*b+S*U+A*q+R*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],x=e[7],f=e[11],m=e[15];return g*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*p-n*l*p)+x*(+t*l*p-t*c*u+r*a*u-i*a*p+i*c*h-r*l*h)+f*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+m*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],x=e[13],f=e[14],m=e[15],M=d*f*c-x*u*c+x*l*p-o*f*p-d*l*m+o*u*m,S=g*u*c-h*f*c-g*l*p+a*f*p+h*l*m-a*u*m,A=h*x*c-g*d*c+g*o*p-a*x*p-h*o*m+a*d*m,R=g*d*l-h*x*l-g*o*u+a*x*u+h*o*f-a*d*f,v=t*M+n*S+i*A+r*R;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=M*E,e[1]=(x*u*r-d*f*r-x*i*p+n*f*p+d*i*m-n*u*m)*E,e[2]=(o*f*r-x*l*r+x*i*c-n*f*c-o*i*m+n*l*m)*E,e[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*p-n*l*p)*E,e[4]=S*E,e[5]=(h*f*r-g*u*r+g*i*p-t*f*p-h*i*m+t*u*m)*E,e[6]=(g*l*r-a*f*r-g*i*c+t*f*c+a*i*m-t*l*m)*E,e[7]=(a*u*r-h*l*r+h*i*c-t*u*c-a*i*p+t*l*p)*E,e[8]=A*E,e[9]=(g*d*r-h*x*r-g*n*p+t*x*p+h*n*m-t*d*m)*E,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*m+t*o*m)*E,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*p-t*o*p)*E,e[12]=R*E,e[13]=(h*x*i-g*d*i+g*n*u-t*x*u-h*n*f+t*d*f)*E,e[14]=(g*o*i-a*x*i-g*n*l+t*x*l+a*n*f-t*o*f)*E,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,x=a*h,f=a*d,m=o*d,M=l*c,S=l*h,A=l*d,R=n.x,v=n.y,E=n.z;return i[0]=(1-(x+m))*R,i[1]=(p+A)*R,i[2]=(g-S)*R,i[3]=0,i[4]=(p-A)*v,i[5]=(1-(u+m))*v,i[6]=(f+M)*v,i[7]=0,i[8]=(g+S)*E,i[9]=(f-M)*E,i[10]=(1-(u+x))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=li.set(i[0],i[1],i[2]).length();const a=li.set(i[4],i[5],i[6]).length(),o=li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);const c=1/r,h=1/a,d=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,t.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=cn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),p=(n+i)/(n-i);let g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===cn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===lr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=cn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),p=-(n+i)/(n-i);let g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===cn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===lr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const li=new O,en=new qe,kd=new O(0,0,0),zd=new O(1,1,1),Rn=new O,As=new O,Vt=new O,Wo=new qe,Xo=new $t;class dn{constructor(e=0,t=0,n=0,i=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xo.setFromEuler(this),this.setFromQuaternion(Xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vd=0;const qo=new O,ci=new $t,mn=new qe,ws=new O,Vi=new O,Hd=new O,Gd=new $t,$o=new O(1,0,0),Yo=new O(0,1,0),jo=new O(0,0,1),Ko={type:"added"},Wd={type:"removed"},hi={type:"childadded",child:null},Nr={type:"childremoved",child:null};class Mt extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new O,t=new dn,n=new $t,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new De}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis($o,e)}rotateY(e){return this.rotateOnAxis(Yo,e)}rotateZ(e){return this.rotateOnAxis(jo,e)}translateOnAxis(e,t){return qo.copy(e).applyQuaternion(this.quaternion),this.position.add(qo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($o,e)}translateY(e){return this.translateOnAxis(Yo,e)}translateZ(e){return this.translateOnAxis(jo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ws.copy(e):ws.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Vi,ws,this.up):mn.lookAt(ws,Vi,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(mn),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ko),hi.child=e,this.dispatchEvent(hi),hi.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wd),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ko),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,Hd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,Gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DEFAULT_UP=new O(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new O,gn=new O,Br=new O,xn=new O,di=new O,ui=new O,Zo=new O,Or=new O,kr=new O,zr=new O,Vr=new ot,Hr=new ot,Gr=new ot;class nn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){tn.subVectors(i,t),gn.subVectors(n,t),Br.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(gn),l=tn.dot(Br),c=gn.dot(gn),h=gn.dot(Br),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Vr.setScalar(0),Hr.setScalar(0),Gr.setScalar(0),Vr.fromBufferAttribute(e,t),Hr.fromBufferAttribute(e,n),Gr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Vr,r.x),a.addScaledVector(Hr,r.y),a.addScaledVector(Gr,r.z),a}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),gn.subVectors(e,t),tn.cross(gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),tn.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;di.subVectors(i,n),ui.subVectors(r,n),Or.subVectors(e,n);const l=di.dot(Or),c=ui.dot(Or);if(l<=0&&c<=0)return t.copy(n);kr.subVectors(e,i);const h=di.dot(kr),d=ui.dot(kr);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(di,a);zr.subVectors(e,r);const p=di.dot(zr),g=ui.dot(zr);if(g>=0&&p<=g)return t.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ui,o);const f=h*g-p*d;if(f<=0&&d-h>=0&&p-g>=0)return Zo.subVectors(r,i),o=(d-h)/(d-h+(p-g)),t.copy(i).addScaledVector(Zo,o);const m=1/(f+x+u);return a=x*m,o=u*m,t.copy(n).addScaledVector(di,a).addScaledVector(ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Wr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=mo(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wr(a,r,e+1/3),this.g=Wr(a,r,e),this.b=Wr(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,i),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Me("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=wc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Ke.workingToColorSpace(wt.copy(this),e),Math.round(Oe(wt.r*255,0,255))*65536+Math.round(Oe(wt.g*255,0,255))*256+Math.round(Oe(wt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(wt.copy(this),t);const n=wt.r,i=wt.g,r=wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Pt){Ke.workingToColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,i=wt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(Cs);const n=as(In.h,Cs.h,t),i=as(In.s,Cs.s,t),r=as(In.l,Cs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Re;Re.NAMES=wc;let Xd=0;class Ui extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Nn,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Me(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Nn&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cc extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new O,Rs=new Fe;let qd=0;class pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=No,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==No&&(e.usage=this.usage),e}}class go extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rc extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $d=0;const jt=new qe,Xr=new Mt,fi=new O,Ht=new Zt,Hi=new Zt,bt=new O;class Tt extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sc(e)?Rc:go)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Xr.lookAt(e),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Ht.min,Hi.min),Ht.expandByPoint(bt),bt.addVectors(Ht.max,Hi.max),Ht.expandByPoint(bt)):(Ht.expandByPoint(Hi.min),Ht.expandByPoint(Hi.max))}Ht.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bt.fromBufferAttribute(o,c),l&&(fi.fromBufferAttribute(e,c),bt.add(fi)),i=Math.max(i,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new O,l[I]=new O;const c=new O,h=new O,d=new O,u=new Fe,p=new Fe,g=new Fe,x=new O,f=new O;function m(I,b,_){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,_),u.fromBufferAttribute(r,I),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,_),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(w),f.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(w),o[I].add(x),o[b].add(x),o[_].add(x),l[I].add(f),l[b].add(f),l[_].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,b=M.length;I<b;++I){const _=M[I],w=_.start,L=_.count;for(let U=w,N=w+L;U<N;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const S=new O,A=new O,R=new O,v=new O;function E(I){R.fromBufferAttribute(i,I),v.copy(R);const b=o[I];S.copy(b),S.sub(R.multiplyScalar(R.dot(b))).normalize(),A.crossVectors(v,b);const w=A.dot(l[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,w)}for(let I=0,b=M.length;I<b;++I){const _=M[I],w=_.start,L=_.count;for(let U=w,N=w+L;U<N;U+=3)E(e.getX(U+0)),E(e.getX(U+1)),E(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),x=e.getX(u+1),f=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,f),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,f=l.length;x<f;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[p++]}return new pt(u,h,d)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jo=new qe,qn=new vr,Is=new Di,Qo=new O,Ls=new O,Ps=new O,Ds=new O,qr=new O,Us=new O,el=new O,Fs=new O;class Tn extends Mt{constructor(e=new Tt,t=new Cc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Us.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(qr.fromBufferAttribute(d,e),a?Us.addScaledVector(qr,h):Us.addScaledVector(qr.sub(t),h))}t.add(Us)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(r),qn.copy(e.ray).recast(e.near),!(Is.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Is,Qo)===null||qn.origin.distanceToSquared(Qo)>(e.far-e.near)**2))&&(Jo.copy(r).invert(),qn.copy(e.ray).applyMatrix4(Jo),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const f=u[g],m=a[f.materialIndex],M=Math.max(f.start,p.start),S=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let A=M,R=S;A<R;A+=3){const v=o.getX(A),E=o.getX(A+1),I=o.getX(A+2);i=Ns(this,m,e,n,c,h,d,v,E,I),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){const M=o.getX(f),S=o.getX(f+1),A=o.getX(f+2);i=Ns(this,a,e,n,c,h,d,M,S,A),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const f=u[g],m=a[f.materialIndex],M=Math.max(f.start,p.start),S=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let A=M,R=S;A<R;A+=3){const v=A,E=A+1,I=A+2;i=Ns(this,m,e,n,c,h,d,v,E,I),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){const M=f,S=f+1,A=f+2;i=Ns(this,a,e,n,c,h,d,M,S,A),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function Yd(s,e,t,n,i,r,a,o){let l;if(e.side===Bt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===On,o),l===null)return null;Fs.copy(o),Fs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Fs);return c<t.near||c>t.far?null:{distance:c,point:Fs.clone(),object:s}}function Ns(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ls),s.getVertexPosition(l,Ps),s.getVertexPosition(c,Ds);const h=Yd(s,e,t,n,Ls,Ps,Ds,el);if(h){const d=new O;nn.getBarycoord(el,Ls,Ps,Ds,d),i&&(h.uv=nn.getInterpolatedAttribute(i,o,l,c,d,new Fe)),r&&(h.uv1=nn.getInterpolatedAttribute(r,o,l,c,d,new Fe)),a&&(h.normal=nn.getInterpolatedAttribute(a,o,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};nn.getNormal(Ls,Ps,Ds,u.normal),h.face=u,h.barycoord=d}return h}class xs extends Tt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function g(x,f,m,M,S,A,R,v,E,I,b){const _=A/E,w=R/I,L=A/2,U=R/2,N=v/2,F=E+1,V=I+1;let q=0,G=0;const Q=new O;for(let te=0;te<V;te++){const ge=te*w-U;for(let He=0;He<F;He++){const Ze=He*_-L;Q[x]=Ze*M,Q[f]=ge*S,Q[m]=N,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[f]=0,Q[m]=v>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(He/E),d.push(1-te/I),q+=1}}for(let te=0;te<I;te++)for(let ge=0;ge<E;ge++){const He=u+ge+F*te,Ze=u+ge+F*(te+1),Je=u+(ge+1)+F*(te+1),Qe=u+(ge+1)+F*te;l.push(He,Ze,Qe),l.push(Ze,Je,Qe),G+=6}o.addGroup(p,G,b),p+=G,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Li(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Lt(s){const e={};for(let t=0;t<s.length;t++){const n=Li(s[t]);for(const i in n)e[i]=n[i]}return e}function jd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ic(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Kd={clone:Li,merge:Lt};var Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=jd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lc extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new O,tl=new Fe,nl=new Fe;class Gt extends Lc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,tl,nl),t.subVectors(nl,tl)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pi=-90,mi=1;class Qd extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(pi,mi,e,t);i.layers=this.layers,this.add(i);const r=new Gt(pi,mi,e,t);r.layers=this.layers,this.add(r);const a=new Gt(pi,mi,e,t);a.layers=this.layers,this.add(a);const o=new Gt(pi,mi,e,t);o.layers=this.layers,this.add(o);const l=new Gt(pi,mi,e,t);l.layers=this.layers,this.add(l);const c=new Gt(pi,mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pc extends yt{constructor(e=[],t=wi,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eu extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Pc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xs(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Ct});r.uniforms.tEquirect.value=t;const a=new Tn(i,r),o=t.minFilter;return t.minFilter===Un&&(t.minFilter=Wt),new Qd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class ns extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tu={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const f=t.getJointPose(x,n),m=this._getHandJoint(c,x);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ns;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hr extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const il=new O,sl=new ot,rl=new ot,nu=new O,al=new qe,Bs=new O,Yr=new Di,ol=new qe,jr=new vr;class iu extends Tn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uo,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bs),this.boundingBox.expandByPoint(Bs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Di),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bs),this.boundingSphere.expandByPoint(Bs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(i),e.ray.intersectsSphere(Yr)!==!1&&(ol.copy(i).invert(),jr.copy(e.ray).applyMatrix4(ol),!(this.boundingBox!==null&&jr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ed?this.bindMatrixInverse.copy(this.bindMatrix).invert():Me("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;sl.fromBufferAttribute(i.attributes.skinIndex,e),rl.fromBufferAttribute(i.attributes.skinWeight,e),il.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=rl.getComponent(r);if(a!==0){const o=sl.getComponent(r);al.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(nu.copy(il).applyMatrix4(al),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Dc extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Uc extends yt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ot,h=Ot,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ll=new qe,su=new qe;class xo{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Me("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:su;ll.multiplyMatrices(o,t[r]),ll.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Uc(t,e,e,Xt,ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Me("Skeleton: No bone found with UUID:",r),a=new Dc),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}const Kr=new O,ru=new O,au=new De;class Dn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Kr.subVectors(n,t).cross(ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Kr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||au.getNormalMatrix(e),i=this.coplanarPoint(Kr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new Di,ou=new Fe(.5,.5),Os=new O;class _o{constructor(e=new Dn,t=new Dn,n=new Dn,i=new Dn,r=new Dn,a=new Dn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],x=r[9],f=r[10],m=r[11],M=r[12],S=r[13],A=r[14],R=r[15];if(i[0].setComponents(c-a,p-h,m-g,R-M).normalize(),i[1].setComponents(c+a,p+h,m+g,R+M).normalize(),i[2].setComponents(c+o,p+d,m+x,R+S).normalize(),i[3].setComponents(c-o,p-d,m-x,R-S).normalize(),n)i[4].setComponents(l,u,f,A).normalize(),i[5].setComponents(c-l,p-u,m-f,R-A).normalize();else if(i[4].setComponents(c-l,p-u,m-f,R-A).normalize(),t===cn)i[5].setComponents(c+l,p+u,m+f,R+A).normalize();else if(t===lr)i[5].setComponents(l,u,f,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){$n.center.set(0,0,0);const t=ou.distanceTo(e.center);return $n.radius=.7071067811865476+t,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Os.x=i.normal.x>0?e.max.x:e.min.x,Os.y=i.normal.y>0?e.max.y:e.min.y,Os.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vn extends Ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dr=new O,ur=new O,cl=new qe,Gi=new vr,ks=new Di,Zr=new O,hl=new O;class lu extends Mt{constructor(e=new Tt,t=new Vn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)dr.fromBufferAttribute(t,i-1),ur.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=dr.distanceTo(ur);e.setAttribute("lineDistance",new gt(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(i),ks.radius+=r,e.ray.intersectsSphere(ks)===!1)return;cl.copy(i).invert(),Gi.copy(e.ray).applyMatrix4(cl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=p,f=g-1;x<f;x+=c){const m=h.getX(x),M=h.getX(x+1),S=zs(this,e,Gi,l,m,M,x);S&&t.push(S)}if(this.isLineLoop){const x=h.getX(g-1),f=h.getX(p),m=zs(this,e,Gi,l,x,f,g-1);m&&t.push(m)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=p,f=g-1;x<f;x+=c){const m=zs(this,e,Gi,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){const x=zs(this,e,Gi,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function zs(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(dr.fromBufferAttribute(o,i),ur.fromBufferAttribute(o,r),t.distanceSqToSegment(dr,ur,Zr,hl)>n)return;Zr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Zr);if(!(c<e.near||c>e.far))return{distance:c,point:hl.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const dl=new O,ul=new O;class ti extends lu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)dl.fromBufferAttribute(t,i),ul.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+dl.distanceTo(ul);e.setAttribute("lineDistance",new gt(n,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jr extends yt{constructor(e,t,n,i,r,a,o,l,c,h,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Fc extends yt{constructor(e,t,n=Qn,i,r,a,o=Ot,l=Ot,c,h=cs,d=1){if(h!==cs&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nc extends yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class br extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],x=[],f=[];for(let m=0;m<h;m++){const M=m*u-a;for(let S=0;S<c;S++){const A=S*d-r;g.push(A,-M,0),x.push(0,0,1),f.push(S/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const S=M+c*m,A=M+c*(m+1),R=M+1+c*(m+1),v=M+1+c*m;p.push(S,A,v),p.push(A,R,v)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.widthSegments,e.heightSegments)}}class cu extends Ui{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hu extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class du extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Vs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function uu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function fu(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function fl(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Bc(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class yr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pu extends yr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mi,endingEnd:Mi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Si:r=e,o=2*t-n;break;case ar:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Si:a=e,l=2*n-t;break;case ar:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),x=g*g,f=x*g,m=-u*f+2*u*x-u*g,M=(1+u)*f+(-1.5-2*u)*x+(-.5+u)*g+1,S=(-1-p)*f+(1.5+p)*x+.5*g,A=p*f-p*x;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+M*a[c+R]+S*a[l+R]+A*a[d+R];return r}}class Oc extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class mu extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vs(t,this.TimeBufferType),this.values=Vs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vs(e.times,Array),values:Vs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ds:t=this.InterpolantFactoryMethodDiscrete;break;case rr:t=this.InterpolantFactoryMethodLinear;break;case Ar:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ds;case this.InterpolantFactoryMethodLinear:return rr;case this.InterpolantFactoryMethodSmooth:return Ar}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&uu(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ar,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){const x=t[d+g];if(x!==t[u+g]||x!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=rr;class Fi extends sn{constructor(e,t,n){super(e,t,n)}}Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=ds;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;class kc extends sn{constructor(e,t,n,i){super(e,t,n,i)}}kc.prototype.ValueTypeName="color";class fr extends sn{constructor(e,t,n,i){super(e,t,n,i)}}fr.prototype.ValueTypeName="number";class gu extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)$t.slerpFlat(r,0,a,c-o,a,c,l);return r}}class _s extends sn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new gu(this.times,this.values,this.getValueSize(),e)}}_s.prototype.ValueTypeName="quaternion";_s.prototype.InterpolantFactoryMethodSmooth=void 0;class Ni extends sn{constructor(e,t,n){super(e,t,n)}}Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=ds;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;class ms extends sn{constructor(e,t,n,i){super(e,t,n,i)}}ms.prototype.ValueTypeName="vector";class eo{constructor(e="",t=-1,n=[],i=po){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(_u(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=fu(l);l=fl(l,1,h),c=fl(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new fr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Me("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ve("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,p,g,x){if(p.length!==0){const f=[],m=[];Bc(p,f,m,g),f.length!==0&&x.push(new d(u,f,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let x=0;x<u[g].morphTargets.length;x++)p[u[g].morphTargets[x]]=-1;for(const x in p){const f=[],m=[];for(let M=0;M!==u[g].morphTargets.length;++M){const S=u[g];f.push(S.time),m.push(S.morphTarget===x?1:0)}i.push(new fr(".morphTargetInfluence["+x+"]",f,m))}l=p.length*a}else{const p=".bones["+t[d].name+"]";n(ms,p+".position",u,"pos",i),n(_s,p+".quaternion",u,"rot",i),n(ms,p+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function xu(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fr;case"vector":case"vector2":case"vector3":case"vector4":return ms;case"color":return kc;case"quaternion":return _s;case"bool":case"boolean":return Fi;case"string":return Ni}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function _u(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xu(s.type);if(s.times===void 0){const t=[],n=[];Bc(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Qr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class vu{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const bu=new vu;class vo{constructor(e){this.manager=e!==void 0?e:bu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}vo.DEFAULT_MATERIAL_NAME="__DEFAULT";const gi=new WeakMap;class yu extends vo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Qr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=gi.get(a);d===void 0&&(d=[],gi.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=us("img");function l(){h(),t&&t(this);const d=gi.get(this)||[];for(let u=0;u<d.length;u++){const p=d[u];p.onLoad&&p.onLoad(this)}gi.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),Qr.remove(`image:${e}`);const u=gi.get(this)||[];for(let p=0;p<u.length;p++){const g=u[p];g.onError&&g.onError(d)}gi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class zc extends vo{constructor(e){super(e)}load(e,t,n,i){const r=new yt,a=new yu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Vc extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ea=new qe,pl=new O,ml=new O;class Mu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pl.setFromMatrixPosition(e.matrixWorld),t.position.copy(pl),ml.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ml),t.updateMatrixWorld(),ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hc extends Lc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Su extends Mu{constructor(){super(new Hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gc extends Vc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Su}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wc extends Vc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Eu extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Xc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Tu{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){$t.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;$t.multiplyQuaternionsFlat(e,a,e,t,e,n),$t.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const bo="\\[\\]\\.:\\/",Au=new RegExp("["+bo+"]","g"),yo="[^"+bo+"]",wu="[^"+bo.replace("\\.","")+"]",Cu=/((?:WC+[\/:])*)/.source.replace("WC",yo),Ru=/(WCOD+)?/.source.replace("WCOD",wu),Iu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yo),Lu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yo),Pu=new RegExp("^"+Cu+Ru+Iu+Lu+"$"),Du=["material","materials","bones","map"];class Uu{constructor(e,t,n){const i=n||Ye.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ye{constructor(e,t,n){this.path=t,this.parsedPath=n||Ye.parseTrackName(t),this.node=Ye.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ye.Composite(e,t,n):new Ye(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Au,"")}static parseTrackName(e){const t=Pu.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Du.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ye.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=Uu;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fu{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Mi,endingEnd:Mi};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=nd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case sd:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case po:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===id;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===td){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Si,i.endingEnd=Si):(e?i.endingStart=this.zeroSlopeAtStart?Si:Mi:i.endingStart=ar,t?i.endingEnd=this.zeroSlopeAtEnd?Si:Mi:i.endingEnd=ar)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const Nu=new Float32Array(1);class qc extends kn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const u=i[d],p=u.name;let g=h[p];if(g!==void 0)++g.referenceCount,a[d]=g;else{if(g=a[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const x=t&&t._propertyBindings[d].binding.parsedPath;g=new Tu(Ye.create(n,p,x),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Oc(new Float32Array(2),new Float32Array(2),1,Nu),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?eo.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=po),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Fu(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?eo.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class gl{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Oe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Pn=new O,Hs=new qe,ta=new qe;class bi extends ti{constructor(e){const t=$c(e),n=new Tt,i=[],r=[];for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new gt(i,3)),n.setAttribute("color",new gt(r,3));const a=new Vn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new Re(255),l=new Re(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");ta.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(Hs.multiplyMatrices(ta,o.matrixWorld),Pn.setFromMatrixPosition(Hs),i.setXYZ(a,Pn.x,Pn.y,Pn.z),Hs.multiplyMatrices(ta,o.parent.matrixWorld),Pn.setFromMatrixPosition(Hs),i.setXYZ(a+1,Pn.x,Pn.y,Pn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,e.r,e.g,e.b),i.setXYZ(r+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function $c(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...$c(s.children[t]));return e}class Yc extends ti{constructor(e=10,t=10,n=4473924,i=8947848){n=new Re(n),i=new Re(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,p=0,g=-o;u<=t;u++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const x=u===r?n:i;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}const h=new Tt;h.setAttribute("position",new gt(l,3)),h.setAttribute("color",new gt(c,3));const d=new Vn({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Gs=new Zt;class jc extends ti{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Tt;r.setIndex(new pt(n,1)),r.setAttribute("position",new pt(i,3)),super(r,new Vn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Gs.setFromObject(this.object),Gs.isEmpty())return;const e=Gs.min,t=Gs.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Kc extends ti{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Tt;i.setAttribute("position",new gt(t,3)),i.setAttribute("color",new gt(n,3));const r=new Vn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Re,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Bu extends kn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Me("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function xl(s,e,t,n){const i=Ou(n);switch(t){case _c:return s*e;case bc:return s*e/i.components*i.byteLength;case co:return s*e/i.components*i.byteLength;case ho:return s*e*2/i.components*i.byteLength;case uo:return s*e*2/i.components*i.byteLength;case vc:return s*e*3/i.components*i.byteLength;case Xt:return s*e*4/i.components*i.byteLength;case fo:return s*e*4/i.components*i.byteLength;case js:case Ks:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zs:case Js:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wa:case Ra:return Math.max(s,16)*Math.max(e,8)/4;case Aa:case Ca:return Math.max(s,8)*Math.max(e,8)/2;case Ia:case La:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Da:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Na:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ka:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case za:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Va:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xa:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case qa:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case $a:case Ya:case ja:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ka:case Za:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ja:case Qa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ou(s){switch(s){case hn:case pc:return{byteLength:1,components:1};case os:case mc:case Pi:return{byteLength:2,components:1};case oo:case lo:return{byteLength:2,components:4};case Qn:case ao:case ln:return{byteLength:4,components:1};case gc:case xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gr}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gr);function Zc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ku(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var zu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vu=`#ifdef USE_ALPHAHASH
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
#endif`,Hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qu=`#ifdef USE_AOMAP
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
#endif`,$u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yu=`#ifdef USE_BATCHING
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
#endif`,ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ju=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qu=`#ifdef USE_IRIDESCENCE
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
#endif`,ef=`#ifdef USE_BUMPMAP
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hf=`#define PI 3.141592653589793
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
} // validated`,df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uf=`vec3 transformedNormal = objectNormal;
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
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",_f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
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
}`,Rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pf=`uniform bool receiveShadow;
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
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,kf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kf=`#if defined( USE_POINTS_UV )
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
#endif`,Zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`#ifdef USE_MORPHTARGETS
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
#endif`,ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cp=`#ifdef USE_NORMALMAP
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
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tp=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,Cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rp=`#ifdef USE_SKINNING
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
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`#include <common>
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
}`,$p=`#if DEPTH_PACKING == 3200
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
}`,Yp=`#define DISTANCE
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
}`,jp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`uniform float scale;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,tm=`uniform vec3 diffuse;
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
}`,nm=`#define LAMBERT
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
}`,im=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sm=`#define MATCAP
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
}`,rm=`#define MATCAP
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
}`,am=`#define NORMAL
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
}`,om=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lm=`#define PHONG
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
}`,cm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,hm=`#define STANDARD
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
}`,dm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,um=`#define TOON
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
}`,fm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,pm=`uniform float size;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,xm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_m=`uniform float rotation;
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
}`,vm=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:zu,alphahash_pars_fragment:Vu,alphamap_fragment:Hu,alphamap_pars_fragment:Gu,alphatest_fragment:Wu,alphatest_pars_fragment:Xu,aomap_fragment:qu,aomap_pars_fragment:$u,batching_pars_vertex:Yu,batching_vertex:ju,begin_vertex:Ku,beginnormal_vertex:Zu,bsdfs:Ju,iridescence_fragment:Qu,bumpmap_pars_fragment:ef,clipping_planes_fragment:tf,clipping_planes_pars_fragment:nf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:rf,color_fragment:af,color_pars_fragment:of,color_pars_vertex:lf,color_vertex:cf,common:hf,cube_uv_reflection_fragment:df,defaultnormal_vertex:uf,displacementmap_pars_vertex:ff,displacementmap_vertex:pf,emissivemap_fragment:mf,emissivemap_pars_fragment:gf,colorspace_fragment:xf,colorspace_pars_fragment:_f,envmap_fragment:vf,envmap_common_pars_fragment:bf,envmap_pars_fragment:yf,envmap_pars_vertex:Mf,envmap_physical_pars_fragment:Df,envmap_vertex:Sf,fog_vertex:Ef,fog_pars_vertex:Tf,fog_fragment:Af,fog_pars_fragment:wf,gradientmap_pars_fragment:Cf,lightmap_pars_fragment:Rf,lights_lambert_fragment:If,lights_lambert_pars_fragment:Lf,lights_pars_begin:Pf,lights_toon_fragment:Uf,lights_toon_pars_fragment:Ff,lights_phong_fragment:Nf,lights_phong_pars_fragment:Bf,lights_physical_fragment:Of,lights_physical_pars_fragment:kf,lights_fragment_begin:zf,lights_fragment_maps:Vf,lights_fragment_end:Hf,logdepthbuf_fragment:Gf,logdepthbuf_pars_fragment:Wf,logdepthbuf_pars_vertex:Xf,logdepthbuf_vertex:qf,map_fragment:$f,map_pars_fragment:Yf,map_particle_fragment:jf,map_particle_pars_fragment:Kf,metalnessmap_fragment:Zf,metalnessmap_pars_fragment:Jf,morphinstance_vertex:Qf,morphcolor_vertex:ep,morphnormal_vertex:tp,morphtarget_pars_vertex:np,morphtarget_vertex:ip,normal_fragment_begin:sp,normal_fragment_maps:rp,normal_pars_fragment:ap,normal_pars_vertex:op,normal_vertex:lp,normalmap_pars_fragment:cp,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:dp,clearcoat_pars_fragment:up,iridescence_pars_fragment:fp,opaque_fragment:pp,packing:mp,premultiplied_alpha_fragment:gp,project_vertex:xp,dithering_fragment:_p,dithering_pars_fragment:vp,roughnessmap_fragment:bp,roughnessmap_pars_fragment:yp,shadowmap_pars_fragment:Mp,shadowmap_pars_vertex:Sp,shadowmap_vertex:Ep,shadowmask_pars_fragment:Tp,skinbase_vertex:Ap,skinning_pars_vertex:wp,skinning_vertex:Cp,skinnormal_vertex:Rp,specularmap_fragment:Ip,specularmap_pars_fragment:Lp,tonemapping_fragment:Pp,tonemapping_pars_fragment:Dp,transmission_fragment:Up,transmission_pars_fragment:Fp,uv_pars_fragment:Np,uv_pars_vertex:Bp,uv_vertex:Op,worldpos_vertex:kp,background_vert:zp,background_frag:Vp,backgroundCube_vert:Hp,backgroundCube_frag:Gp,cube_vert:Wp,cube_frag:Xp,depth_vert:qp,depth_frag:$p,distanceRGBA_vert:Yp,distanceRGBA_frag:jp,equirect_vert:Kp,equirect_frag:Zp,linedashed_vert:Jp,linedashed_frag:Qp,meshbasic_vert:em,meshbasic_frag:tm,meshlambert_vert:nm,meshlambert_frag:im,meshmatcap_vert:sm,meshmatcap_frag:rm,meshnormal_vert:am,meshnormal_frag:om,meshphong_vert:lm,meshphong_frag:cm,meshphysical_vert:hm,meshphysical_frag:dm,meshtoon_vert:um,meshtoon_frag:fm,points_vert:pm,points_frag:mm,shadow_vert:gm,shadow_frag:xm,sprite_vert:_m,sprite_frag:vm},ae={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},an={basic:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Lt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Lt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Lt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Lt([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Lt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Lt([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Lt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Lt([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Lt([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Lt([ae.lights,ae.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};an.physical={uniforms:Lt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Ws={r:0,b:0,g:0},Yn=new dn,bm=new qe;function ym(s,e,t,n,i,r,a){const o=new Re(0);let l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(S){let A=S.isScene===!0?S.background:null;return A&&A.isTexture&&(A=(S.backgroundBlurriness>0?t:e).get(A)),A}function x(S){let A=!1;const R=g(S);R===null?m(o,l):R&&R.isColor&&(m(R,1),A=!0);const v=s.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(S,A){const R=g(A);R&&(R.isCubeTexture||R.mapping===xr)?(h===void 0&&(h=new Tn(new xs(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Li(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(v,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Yn.copy(A.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bm.makeRotationFromEuler(Yn)),h.material.toneMapped=Ke.getTransfer(R.colorSpace)!==nt,(d!==R||u!==R.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=R,u=R.version,p=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Tn(new br(2,2),new un({name:"BackgroundMaterial",uniforms:Li(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(R.colorSpace)!==nt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||u!==R.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=R,u=R.version,p=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,A){S.getRGB(Ws,Ic(s)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,A,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),l=A,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:x,addToRenderList:f,dispose:M}}function Mm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(_,w,L,U,N){let F=!1;const V=d(U,L,w);r!==V&&(r=V,c(r.object)),F=p(_,U,L,N),F&&g(_,U,L,N),N!==null&&e.update(N,s.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,A(_,w,L,U),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function d(_,w,L){const U=L.wireframe===!0;let N=n[_.id];N===void 0&&(N={},n[_.id]=N);let F=N[w.id];F===void 0&&(F={},N[w.id]=F);let V=F[U];return V===void 0&&(V=u(l()),F[U]=V),V}function u(_){const w=[],L=[],U=[];for(let N=0;N<t;N++)w[N]=0,L[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:L,attributeDivisors:U,object:_,attributes:{},index:null}}function p(_,w,L,U){const N=r.attributes,F=w.attributes;let V=0;const q=L.getAttributes();for(const G in q)if(q[G].location>=0){const te=N[G];let ge=F[G];if(ge===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ge=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ge=_.instanceColor)),te===void 0||te.attribute!==ge||ge&&te.data!==ge.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function g(_,w,L,U){const N={},F=w.attributes;let V=0;const q=L.getAttributes();for(const G in q)if(q[G].location>=0){let te=F[G];te===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(te=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(te=_.instanceColor));const ge={};ge.attribute=te,te&&te.data&&(ge.data=te.data),N[G]=ge,V++}r.attributes=N,r.attributesNum=V,r.index=U}function x(){const _=r.newAttributes;for(let w=0,L=_.length;w<L;w++)_[w]=0}function f(_){m(_,0)}function m(_,w){const L=r.newAttributes,U=r.enabledAttributes,N=r.attributeDivisors;L[_]=1,U[_]===0&&(s.enableVertexAttribArray(_),U[_]=1),N[_]!==w&&(s.vertexAttribDivisor(_,w),N[_]=w)}function M(){const _=r.newAttributes,w=r.enabledAttributes;for(let L=0,U=w.length;L<U;L++)w[L]!==_[L]&&(s.disableVertexAttribArray(L),w[L]=0)}function S(_,w,L,U,N,F,V){V===!0?s.vertexAttribIPointer(_,w,L,N,F):s.vertexAttribPointer(_,w,L,U,N,F)}function A(_,w,L,U){x();const N=U.attributes,F=L.getAttributes(),V=w.defaultAttributeValues;for(const q in F){const G=F[q];if(G.location>=0){let Q=N[q];if(Q===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor)),Q!==void 0){const te=Q.normalized,ge=Q.itemSize,He=e.get(Q);if(He===void 0)continue;const Ze=He.buffer,Je=He.type,Qe=He.bytesPerElement,$=Je===s.INT||Je===s.UNSIGNED_INT||Q.gpuType===ao;if(Q.isInterleavedBufferAttribute){const K=Q.data,de=K.stride,Le=Q.offset;if(K.isInstancedInterleavedBuffer){for(let _e=0;_e<G.locationSize;_e++)m(G.location+_e,K.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let _e=0;_e<G.locationSize;_e++)f(G.location+_e);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let _e=0;_e<G.locationSize;_e++)S(G.location+_e,ge/G.locationSize,Je,te,de*Qe,(Le+ge/G.locationSize*_e)*Qe,$)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)m(G.location+K,Q.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<G.locationSize;K++)f(G.location+K);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let K=0;K<G.locationSize;K++)S(G.location+K,ge/G.locationSize,Je,te,ge*Qe,ge/G.locationSize*K*Qe,$)}}else if(V!==void 0){const te=V[q];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(G.location,te);break;case 3:s.vertexAttrib3fv(G.location,te);break;case 4:s.vertexAttrib4fv(G.location,te);break;default:s.vertexAttrib1fv(G.location,te)}}}}M()}function R(){I();for(const _ in n){const w=n[_];for(const L in w){const U=w[L];for(const N in U)h(U[N].object),delete U[N];delete w[L]}delete n[_]}}function v(_){if(n[_.id]===void 0)return;const w=n[_.id];for(const L in w){const U=w[L];for(const N in U)h(U[N].object),delete U[N];delete w[L]}delete n[_.id]}function E(_){for(const w in n){const L=n[w];if(L[_.id]===void 0)continue;const U=L[_.id];for(const N in U)h(U[N].object),delete U[N];delete L[_.id]}}function I(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:v,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:f,disableUnusedAttributes:M}}function Sm(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Em(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==Xt&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const I=E===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==hn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ln&&!I)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Me("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,v=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:A,vertexTextures:R,maxSamples:v}}function Tm(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Dn,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,x=d.clipIntersection,f=d.clipShadows,m=s.get(d);if(!i||g===null||g.length===0||r&&!f)r?h(null):c();else{const M=r?0:n,S=M*4;let A=m.clippingState||null;l.value=A,A=h(g,u,S,p);for(let R=0;R!==S;++R)A[R]=t[R];m.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){const x=d!==null?d.length:0;let f=null;if(x!==0){if(f=l.value,g!==!0||f===null){const m=p+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<m)&&(f=new Float32Array(m));for(let S=0,A=p;S!==x;++S,A+=4)a.copy(d[S]).applyMatrix4(M,o),a.normal.toArray(f,A),f[A+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function Am(s){let e=new WeakMap;function t(a,o){return o===Ea?a.mapping=wi:o===Ta&&(a.mapping=Ci),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ea||o===Ta)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new eu(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Fn=4,_l=[.125,.215,.35,.446,.526,.582],Jn=20,wm=256,Wi=new Hc,vl=new Re;let na=null,ia=0,sa=0,ra=!1;const Cm=new O;class bl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Cm}=r;na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(na,ia,sa),this._renderer.xr.enabled=ra,e.scissorTest=!1,xi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Pi,format:Xt,colorSpace:Ii,depthBuffer:!1},i=yl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Rm(r)),this._blurMaterial=Lm(r,e,t),this._ggxMaterial=Im(r,e,t)}return i}_compileMaterial(e){const t=new Tn(new Tt,e);this._renderer.compile(t,Wi)}_sceneToCubeUV(e,t,n,i,r){const l=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(vl),d.toneMapping=Bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tn(new xs,new Cc({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,f=x.material;let m=!1;const M=e.background;M?M.isColor&&(f.color.copy(M),e.background=null,m=!0):(f.color.copy(vl),m=!0);for(let S=0;S<6;S++){const A=S%3;A===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):A===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const R=this._cubeSize;xi(i,A*R,S>2?R:0,R,R),d.setRenderTarget(i),m&&d.render(x,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===wi||e.mapping===Ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;xi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Wi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=.05+c*.95,p=d*u,{_lodMax:g}=this,x=this._sizeLods[n],f=3*x*(n>g-Fn?n-g+Fn:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,xi(r,f,m,3*x,2*x),i.setRenderTarget(r),i.render(o,Wi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,xi(e,f,m,3*x,2*x),i.setRenderTarget(e),i.render(o,Wi)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=c;const u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),x=r/g,f=isFinite(r)?1+Math.floor(h*x):Jn;f>Jn&&Me(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Jn}`);const m=[];let M=0;for(let E=0;E<Jn;++E){const I=E/x,b=Math.exp(-I*I/2);m.push(b),E===0?M+=b:E<f&&(M+=2*b)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const A=this._sizeLods[i],R=3*A*(i>S-Fn?i-S+Fn:0),v=4*(this._cubeSize-A);xi(t,R,v,3*A,2*A),l.setRenderTarget(t),l.render(d,Wi)}}function Rm(s){const e=[],t=[],n=[];let i=s;const r=s-Fn+1+_l.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Fn?l=_l[a-s+Fn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,f=2,m=1,M=new Float32Array(x*g*p),S=new Float32Array(f*g*p),A=new Float32Array(m*g*p);for(let v=0;v<p;v++){const E=v%3*2/3-1,I=v>2?0:-1,b=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];M.set(b,x*g*v),S.set(u,f*g*v);const _=[v,v,v,v,v,v];A.set(_,m*g*v)}const R=new Tt;R.setAttribute("position",new pt(M,x)),R.setAttribute("uv",new pt(S,f)),R.setAttribute("faceIndex",new pt(A,m)),n.push(new Tn(R,null)),i>Fn&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function yl(s,e,t){const n=new ei(s,e,t);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Im(s,e,t){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mr(),fragmentShader:`

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
		`,blending:Ct,depthTest:!1,depthWrite:!1})}function Lm(s,e,t){const n=new Float32Array(Jn),i=new O(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mr(),fragmentShader:`

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
		`,blending:Ct,depthTest:!1,depthWrite:!1})}function Ml(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mr(),fragmentShader:`

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
		`,blending:Ct,depthTest:!1,depthWrite:!1})}function Sl(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ct,depthTest:!1,depthWrite:!1})}function Mr(){return`

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
	`}function Pm(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ea||l===Ta,h=l===wi||l===Ci;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new bl(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new bl(s)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Dm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&fs("WebGLRenderer: "+n+" extension not supported."),i}}}function Um(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)e.update(u[p],s.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const M=p.array;x=p.version;for(let S=0,A=M.length;S<A;S+=3){const R=M[S+0],v=M[S+1],E=M[S+2];u.push(R,v,v,E,E,R)}}else if(g!==void 0){const M=g.array;x=g.version;for(let S=0,A=M.length/3-1;S<A;S+=3){const R=S+0,v=S+1,E=S+2;u.push(R,v,v,E,E,R)}}else return;const f=new(Sc(u)?Rc:go)(u,1);f.version=x;const m=r.get(d);m&&e.remove(m),r.set(d,f)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Fm(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){s.drawElements(n,p,r,u*a),t.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,u*a,g),t.update(p,n,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];t.update(f,n,1)}function d(u,p,g,x){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u.length;m++)c(u[m]/a,p[m],x[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,x,0,g);let m=0;for(let M=0;M<g;M++)m+=p[M]*x[M];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Nm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bm(s,e,t){const n=new WeakMap,i=new ot;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let _=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var p=_;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let A=0;g===!0&&(A=1),x===!0&&(A=2),f===!0&&(A=3);let R=o.attributes.position.count*A,v=1;R>e.maxTextureSize&&(v=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const E=new Float32Array(R*v*4*d),I=new Tc(E,R,v,d);I.type=ln,I.needsUpdate=!0;const b=A*4;for(let w=0;w<d;w++){const L=m[w],U=M[w],N=S[w],F=R*v*4*w;for(let V=0;V<L.count;V++){const q=V*b;g===!0&&(i.fromBufferAttribute(L,V),E[F+q+0]=i.x,E[F+q+1]=i.y,E[F+q+2]=i.z,E[F+q+3]=0),x===!0&&(i.fromBufferAttribute(U,V),E[F+q+4]=i.x,E[F+q+5]=i.y,E[F+q+6]=i.z,E[F+q+7]=0),f===!0&&(i.fromBufferAttribute(N,V),E[F+q+8]=i.x,E[F+q+9]=i.y,E[F+q+10]=i.z,E[F+q+11]=N.itemSize===4?i.w:1)}}u={count:d,texture:I,size:new Fe(R,v)},n.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Om(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Jc=new yt,El=new Fc(1,1),Qc=new Tc,eh=new Bd,th=new Pc,Tl=[],Al=[],wl=new Float32Array(16),Cl=new Float32Array(9),Rl=new Float32Array(4);function Bi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Tl[i];if(r===void 0&&(r=new Float32Array(i),Tl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function _t(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Sr(s,e){let t=Al[e];t===void 0&&(t=new Int32Array(e),Al[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function km(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function zm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2fv(this.addr,e),vt(t,e)}}function Vm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;s.uniform3fv(this.addr,e),vt(t,e)}}function Hm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4fv(this.addr,e),vt(t,e)}}function Gm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Rl.set(n),s.uniformMatrix2fv(this.addr,!1,Rl),vt(t,n)}}function Wm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Cl.set(n),s.uniformMatrix3fv(this.addr,!1,Cl),vt(t,n)}}function Xm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;wl.set(n),s.uniformMatrix4fv(this.addr,!1,wl),vt(t,n)}}function qm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2iv(this.addr,e),vt(t,e)}}function Ym(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3iv(this.addr,e),vt(t,e)}}function jm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4iv(this.addr,e),vt(t,e)}}function Km(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Zm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2uiv(this.addr,e),vt(t,e)}}function Jm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3uiv(this.addr,e),vt(t,e)}}function Qm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4uiv(this.addr,e),vt(t,e)}}function e0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(El.compareFunction=Mc,r=El):r=Jc,t.setTexture2D(e||r,i)}function t0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||eh,i)}function n0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||th,i)}function i0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qc,i)}function s0(s){switch(s){case 5126:return km;case 35664:return zm;case 35665:return Vm;case 35666:return Hm;case 35674:return Gm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return qm;case 35667:case 35671:return $m;case 35668:case 35672:return Ym;case 35669:case 35673:return jm;case 5125:return Km;case 36294:return Zm;case 36295:return Jm;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}function r0(s,e){s.uniform1fv(this.addr,e)}function a0(s,e){const t=Bi(e,this.size,2);s.uniform2fv(this.addr,t)}function o0(s,e){const t=Bi(e,this.size,3);s.uniform3fv(this.addr,t)}function l0(s,e){const t=Bi(e,this.size,4);s.uniform4fv(this.addr,t)}function c0(s,e){const t=Bi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function h0(s,e){const t=Bi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function d0(s,e){const t=Bi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function u0(s,e){s.uniform1iv(this.addr,e)}function f0(s,e){s.uniform2iv(this.addr,e)}function p0(s,e){s.uniform3iv(this.addr,e)}function m0(s,e){s.uniform4iv(this.addr,e)}function g0(s,e){s.uniform1uiv(this.addr,e)}function x0(s,e){s.uniform2uiv(this.addr,e)}function _0(s,e){s.uniform3uiv(this.addr,e)}function v0(s,e){s.uniform4uiv(this.addr,e)}function b0(s,e,t){const n=this.cache,i=e.length,r=Sr(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Jc,r[a])}function y0(s,e,t){const n=this.cache,i=e.length,r=Sr(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||eh,r[a])}function M0(s,e,t){const n=this.cache,i=e.length,r=Sr(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||th,r[a])}function S0(s,e,t){const n=this.cache,i=e.length,r=Sr(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Qc,r[a])}function E0(s){switch(s){case 5126:return r0;case 35664:return a0;case 35665:return o0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return d0;case 5124:case 35670:return u0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return x0;case 36295:return _0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}class T0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=s0(t.type)}}class A0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E0(t.type)}}class w0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function Il(s,e){s.seq.push(e),s.map[e.id]=e}function C0(s,e,t){const n=s.name,i=n.length;for(aa.lastIndex=0;;){const r=aa.exec(n),a=aa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Il(t,c===void 0?new T0(o,s,e):new A0(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new w0(o),Il(t,d)),t=d}}}class Qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);C0(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ll(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const R0=37297;let I0=0;function L0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Pl=new De;function P0(s){Ke._getMatrix(Pl,Ke.workingColorSpace,s);const e=`mat3( ${Pl.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case or:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Dl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+L0(s.getShaderSource(e),o)}else return r}function D0(s,e){const t=P0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U0(s,e){let t;switch(e){case $h:t="Linear";break;case Yh:t="Reinhard";break;case jh:t="Cineon";break;case Kh:t="ACESFilmic";break;case Jh:t="AgX";break;case Qh:t="Neutral";break;case Zh:t="Custom";break;default:Me("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xs=new O;function F0(){Ke.getLuminanceCoefficients(Xs);const s=Xs.x.toFixed(4),e=Xs.y.toFixed(4),t=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function B0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function O0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function is(s){return s!==""}function Ul(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(s){return s.replace(k0,V0)}const z0=new Map;function V0(s,e){let t=Ne[e];if(t===void 0){const n=z0.get(e);if(n!==void 0)t=Ne[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return to(t)}const H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(s){return s.replace(H0,G0)}function G0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Bl(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function W0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ah?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function X0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case wi:case Ci:e="ENVMAP_TYPE_CUBE";break;case xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ci:e="ENVMAP_MODE_REFRACTION";break}return e}function $0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ro:e="ENVMAP_BLENDING_MULTIPLY";break;case Xh:e="ENVMAP_BLENDING_MIX";break;case qh:e="ENVMAP_BLENDING_ADD";break}return e}function Y0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function j0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=W0(t),c=X0(t),h=q0(t),d=$0(t),u=Y0(t),p=N0(t),g=B0(r),x=i.createProgram();let f,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(is).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(is).join(`
`),m.length>0&&(m+=`
`)):(f=[Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),m=[Bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Bn?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,D0("linearToOutputTexel",t.outputColorSpace),F0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),a=to(a),a=Ul(a,t),a=Fl(a,t),o=to(o),o=Ul(o,t),o=Fl(o,t),a=Nl(a),o=Nl(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",t.glslVersion===Bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=M+f+a,A=M+m+o,R=Ll(i,i.VERTEX_SHADER,S),v=Ll(i,i.FRAGMENT_SHADER,A);i.attachShader(x,R),i.attachShader(x,v),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function E(w){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(x)||"",U=i.getShaderInfoLog(R)||"",N=i.getShaderInfoLog(v)||"",F=L.trim(),V=U.trim(),q=N.trim();let G=!0,Q=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,R,v);else{const te=Dl(i,R,"vertex"),ge=Dl(i,v,"fragment");Ve("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+te+`
`+ge)}else F!==""?Me("WebGLProgram: Program Info Log:",F):(V===""||q==="")&&(Q=!1);Q&&(w.diagnostics={runnable:G,programLog:F,vertexShader:{log:V,prefix:f},fragmentShader:{log:q,prefix:m}})}i.deleteShader(R),i.deleteShader(v),I=new Qs(i,x),b=O0(i,x)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,R0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=v,this}let K0=0;class Z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new J0(e),t.set(e,n)),n}}class J0{constructor(e){this.id=K0++,this.code=e,this.usedTimes=0}}function Q0(s,e,t,n,i,r,a){const o=new Ac,l=new Z0,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function f(b,_,w,L,U){const N=L.fog,F=U.geometry,V=b.isMeshStandardMaterial?L.environment:null,q=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),G=q&&q.mapping===xr?q.image.height:null,Q=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&Me("WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const te=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ge=te!==void 0?te.length:0;let He=0;F.morphAttributes.position!==void 0&&(He=1),F.morphAttributes.normal!==void 0&&(He=2),F.morphAttributes.color!==void 0&&(He=3);let Ze,Je,Qe,$;if(Q){const et=an[Q];Ze=et.vertexShader,Je=et.fragmentShader}else Ze=b.vertexShader,Je=b.fragmentShader,l.update(b),Qe=l.getVertexShaderID(b),$=l.getFragmentShaderID(b);const K=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),Le=U.isInstancedMesh===!0,_e=U.isBatchedMesh===!0,Be=!!b.map,St=!!b.matcap,ke=!!q,lt=!!b.aoMap,P=!!b.lightMap,Ge=!!b.bumpMap,We=!!b.normalMap,rt=!!b.displacementMap,me=!!b.emissiveMap,ct=!!b.metalnessMap,ye=!!b.roughnessMap,Ue=b.anisotropy>0,C=b.clearcoat>0,y=b.dispersion>0,z=b.iridescence>0,Y=b.sheen>0,Z=b.transmission>0,X=Ue&&!!b.anisotropyMap,ve=C&&!!b.clearcoatMap,oe=C&&!!b.clearcoatNormalMap,Se=C&&!!b.clearcoatRoughnessMap,xe=z&&!!b.iridescenceMap,J=z&&!!b.iridescenceThicknessMap,ie=Y&&!!b.sheenColorMap,we=Y&&!!b.sheenRoughnessMap,Te=!!b.specularMap,he=!!b.specularColorMap,Ie=!!b.specularIntensityMap,D=Z&&!!b.transmissionMap,le=Z&&!!b.thicknessMap,se=!!b.gradientMap,re=!!b.alphaMap,ee=b.alphaTest>0,j=!!b.alphaHash,fe=!!b.extensions;let Pe=Bn;b.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Pe=s.toneMapping);const at={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:Ze,fragmentShader:Je,defines:b.defines,customVertexShaderID:Qe,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:_e,batchingColor:_e&&U._colorsTexture!==null,instancing:Le,instancingColor:Le&&U.instanceColor!==null,instancingMorph:Le&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ii,alphaToCoverage:!!b.alphaToCoverage,map:Be,matcap:St,envMap:ke,envMapMode:ke&&q.mapping,envMapCubeUVHeight:G,aoMap:lt,lightMap:P,bumpMap:Ge,normalMap:We,displacementMap:u&&rt,emissiveMap:me,normalMapObjectSpace:We&&b.normalMapType===od,normalMapTangentSpace:We&&b.normalMapType===yc,metalnessMap:ct,roughnessMap:ye,anisotropy:Ue,anisotropyMap:X,clearcoat:C,clearcoatMap:ve,clearcoatNormalMap:oe,clearcoatRoughnessMap:Se,dispersion:y,iridescence:z,iridescenceMap:xe,iridescenceThicknessMap:J,sheen:Y,sheenColorMap:ie,sheenRoughnessMap:we,specularMap:Te,specularColorMap:he,specularIntensityMap:Ie,transmission:Z,transmissionMap:D,thicknessMap:le,gradientMap:se,opaque:b.transparent===!1&&b.blending===Nn&&b.alphaToCoverage===!1,alphaMap:re,alphaTest:ee,alphaHash:j,combine:b.combine,mapUv:Be&&x(b.map.channel),aoMapUv:lt&&x(b.aoMap.channel),lightMapUv:P&&x(b.lightMap.channel),bumpMapUv:Ge&&x(b.bumpMap.channel),normalMapUv:We&&x(b.normalMap.channel),displacementMapUv:rt&&x(b.displacementMap.channel),emissiveMapUv:me&&x(b.emissiveMap.channel),metalnessMapUv:ct&&x(b.metalnessMap.channel),roughnessMapUv:ye&&x(b.roughnessMap.channel),anisotropyMapUv:X&&x(b.anisotropyMap.channel),clearcoatMapUv:ve&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(b.sheenRoughnessMap.channel),specularMapUv:Te&&x(b.specularMap.channel),specularColorMapUv:he&&x(b.specularColorMap.channel),specularIntensityMapUv:Ie&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:le&&x(b.thicknessMap.channel),alphaMapUv:re&&x(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(We||Ue),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(Be||re),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:de,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:He,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Be&&b.map.isVideoTexture===!0&&Ke.getTransfer(b.map.colorSpace)===nt,decodeVideoTextureEmissive:me&&b.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(b.emissiveMap.colorSpace)===nt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Kt,flipSided:b.side===Bt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:fe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&b.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function m(b){const _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(const w in b.defines)_.push(w),_.push(b.defines[w]);return b.isRawShaderMaterial===!1&&(M(_,b),S(_,b),_.push(s.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function M(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function S(b,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),b.push(o.mask)}function A(b){const _=g[b.type];let w;if(_){const L=an[_];w=Kd.clone(L.uniforms)}else w=b.uniforms;return w}function R(b,_){let w;for(let L=0,U=h.length;L<U;L++){const N=h[L];if(N.cacheKey===_){w=N,++w.usedTimes;break}}return w===void 0&&(w=new j0(s,_,b,r),h.push(w)),w}function v(b){if(--b.usedTimes===0){const _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function E(b){l.remove(b)}function I(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:A,acquireProgram:R,releaseProgram:v,releaseShaderCache:E,programs:h,dispose:I}}function eg(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function tg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ol(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function kl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,p,g,x,f){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:f},s[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=x,m.group=f),e++,m}function o(d,u,p,g,x,f){const m=a(d,u,p,g,x,f);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(d,u,p,g,x,f){const m=a(d,u,p,g,x,f);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,u){t.length>1&&t.sort(d||tg),n.length>1&&n.sort(u||Ol),i.length>1&&i.sort(u||Ol)}function h(){for(let d=e,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function ng(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new kl,s.set(n,[a])):i>=r.length?(a=new kl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function ig(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Re};break;case"SpotLight":t={position:new O,direction:new O,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function sg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let rg=0;function ag(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function og(s){const e=new ig,t=sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,r=new qe,a=new qe;function o(c){let h=0,d=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,x=0,f=0,m=0,M=0,S=0,A=0,R=0,v=0,E=0;c.sort(ag);for(let b=0,_=c.length;b<_;b++){const w=c[b],L=w.color,U=w.intensity,N=w.distance,F=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=L.r*U,d+=L.g*U,u+=L.b*U;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],U);E++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const q=w.shadow,G=t.get(w);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=F,n.directionalShadowMatrix[p]=w.shadow.matrix,M++}n.directional[p]=V,p++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(L).multiplyScalar(U),V.distance=N,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[x]=V;const q=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,q.updateMatrices(w),w.castShadow&&v++),n.spotLightMatrix[x]=q.matrix,w.castShadow){const G=t.get(w);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=F,A++}x++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(L).multiplyScalar(U),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[f]=V,f++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const q=w.shadow,G=t.get(w);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=w.shadow.matrix,S++}n.point[g]=V,g++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(U),V.groundColor.copy(w.groundColor).multiplyScalar(U),n.hemi[m]=V,m++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==f||I.hemiLength!==m||I.numDirectionalShadows!==M||I.numPointShadows!==S||I.numSpotShadows!==A||I.numSpotMaps!==R||I.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=A+R-v,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=E,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=f,I.hemiLength=m,I.numDirectionalShadows=M,I.numPointShadows=S,I.numSpotShadows=A,I.numSpotMaps=R,I.numLightProbes=E,n.version=rg++)}function l(c,h){let d=0,u=0,p=0,g=0,x=0;const f=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const S=c[m];if(S.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(f),d++}else if(S.isSpotLight){const A=n.spot[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(f),p++}else if(S.isRectAreaLight){const A=n.rectArea[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),a.identity(),r.copy(S.matrixWorld),r.premultiply(f),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const A=n.point[u];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),u++}else if(S.isHemisphereLight){const A=n.hemi[x];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(f),x++}}}return{setup:o,setupView:l,state:n}}function zl(s){const e=new og(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function lg(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new zl(s),e.set(i,[o])):r>=a.length?(o=new zl(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dg(s,e,t){let n=new _o;const i=new Fe,r=new Fe,a=new ot,o=new hu({depthPacking:ad}),l=new du,c={},h=t.maxTextureSize,d={[On]:Bt,[Bt]:On,[Kt]:Kt},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:cg,fragmentShader:hg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Tn(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let m=this.type;this.render=function(v,E,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||v.length===0)return;const b=s.getRenderTarget(),_=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ct),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=m!==Mn&&this.type===Mn,N=m===Mn&&this.type!==Mn;for(let F=0,V=v.length;F<V;F++){const q=v[F],G=q.shadow;if(G===void 0){Me("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const Q=G.getFrameExtents();if(i.multiply(Q),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,G.mapSize.y=r.y)),G.map===null||U===!0||N===!0){const ge=this.type!==Mn?{minFilter:Ot,magFilter:Ot}:{};G.map!==null&&G.map.dispose(),G.map=new ei(i.x,i.y,ge),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const te=G.getViewportCount();for(let ge=0;ge<te;ge++){const He=G.getViewport(ge);a.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),L.viewport(a),G.updateMatrices(q,ge),n=G.getFrustum(),A(E,I,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===Mn&&M(G,I),G.needsUpdate=!1}m=this.type,f.needsUpdate=!1,s.setRenderTarget(b,_,w)};function M(v,E){const I=e.update(x);u.defines.VSM_SAMPLES!==v.blurSamples&&(u.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new ei(i.x,i.y)),u.uniforms.shadow_pass.value=v.map.texture,u.uniforms.resolution.value=v.mapSize,u.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(E,null,I,u,x,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(E,null,I,p,x,null)}function S(v,E,I,b){let _=null;const w=I.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(w!==void 0)_=w;else if(_=I.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const L=_.uuid,U=E.uuid;let N=c[L];N===void 0&&(N={},c[L]=N);let F=N[U];F===void 0&&(F=_.clone(),N[U]=F,E.addEventListener("dispose",R)),_=F}if(_.visible=E.visible,_.wireframe=E.wireframe,b===Mn?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:d[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const L=s.properties.get(_);L.light=I}return _}function A(v,E,I,b,_){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&_===Mn)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,v.matrixWorld);const U=e.update(v),N=v.material;if(Array.isArray(N)){const F=U.groups;for(let V=0,q=F.length;V<q;V++){const G=F[V],Q=N[G.materialIndex];if(Q&&Q.visible){const te=S(v,Q,b,_);v.onBeforeShadow(s,v,E,I,U,te,G),s.renderBufferDirect(I,null,U,te,v,G),v.onAfterShadow(s,v,E,I,U,te,G)}}}else if(N.visible){const F=S(v,N,b,_);v.onBeforeShadow(s,v,E,I,U,F,null),s.renderBufferDirect(I,null,U,F,v,null),v.onAfterShadow(s,v,E,I,U,F,null)}}const L=v.children;for(let U=0,N=L.length;U<N;U++)A(L[U],E,I,b,_)}function R(v){v.target.removeEventListener("dispose",R);for(const I in c){const b=c[I],_=v.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}const ug={[xa]:_a,[va]:Ma,[ba]:Sa,[Ai]:ya,[_a]:xa,[Ma]:va,[Sa]:ba,[ya]:Ai};function fg(s,e){function t(){let D=!1;const le=new ot;let se=null;const re=new ot(0,0,0,0);return{setMask:function(ee){se!==ee&&!D&&(s.colorMask(ee,ee,ee,ee),se=ee)},setLocked:function(ee){D=ee},setClear:function(ee,j,fe,Pe,at){at===!0&&(ee*=Pe,j*=Pe,fe*=Pe),le.set(ee,j,fe,Pe),re.equals(le)===!1&&(s.clearColor(ee,j,fe,Pe),re.copy(le))},reset:function(){D=!1,se=null,re.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,se=null,re=null,ee=null;return{setReversed:function(j){if(le!==j){const fe=e.get("EXT_clip_control");j?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),le=j;const Pe=ee;ee=null,this.setClear(Pe)}},getReversed:function(){return le},setTest:function(j){j?K(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(j){se!==j&&!D&&(s.depthMask(j),se=j)},setFunc:function(j){if(le&&(j=ug[j]),re!==j){switch(j){case xa:s.depthFunc(s.NEVER);break;case _a:s.depthFunc(s.ALWAYS);break;case va:s.depthFunc(s.LESS);break;case Ai:s.depthFunc(s.LEQUAL);break;case ba:s.depthFunc(s.EQUAL);break;case ya:s.depthFunc(s.GEQUAL);break;case Ma:s.depthFunc(s.GREATER);break;case Sa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}re=j}},setLocked:function(j){D=j},setClear:function(j){ee!==j&&(le&&(j=1-j),s.clearDepth(j),ee=j)},reset:function(){D=!1,se=null,re=null,ee=null,le=!1}}}function i(){let D=!1,le=null,se=null,re=null,ee=null,j=null,fe=null,Pe=null,at=null;return{setTest:function(et){D||(et?K(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function(et){le!==et&&!D&&(s.stencilMask(et),le=et)},setFunc:function(et,rn,Jt){(se!==et||re!==rn||ee!==Jt)&&(s.stencilFunc(et,rn,Jt),se=et,re=rn,ee=Jt)},setOp:function(et,rn,Jt){(j!==et||fe!==rn||Pe!==Jt)&&(s.stencilOp(et,rn,Jt),j=et,fe=rn,Pe=Jt)},setLocked:function(et){D=et},setClear:function(et){at!==et&&(s.clearStencil(et),at=et)},reset:function(){D=!1,le=null,se=null,re=null,ee=null,j=null,fe=null,Pe=null,at=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,x=!1,f=null,m=null,M=null,S=null,A=null,R=null,v=null,E=new Re(0,0,0),I=0,b=!1,_=null,w=null,L=null,U=null,N=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=q>=2);let Q=null,te={};const ge=s.getParameter(s.SCISSOR_BOX),He=s.getParameter(s.VIEWPORT),Ze=new ot().fromArray(ge),Je=new ot().fromArray(He);function Qe(D,le,se,re){const ee=new Uint8Array(4),j=s.createTexture();s.bindTexture(D,j),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let fe=0;fe<se;fe++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,re,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(le+fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return j}const $={};$[s.TEXTURE_2D]=Qe(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=Qe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=Qe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=Qe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(s.DEPTH_TEST),a.setFunc(Ai),Ge(!1),We(Do),K(s.CULL_FACE),lt(Ct);function K(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function de(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Le(D,le){return d[D]!==le?(s.bindFramebuffer(D,le),d[D]=le,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=le),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=le),!0):!1}function _e(D,le){let se=p,re=!1;if(D){se=u.get(le),se===void 0&&(se=[],u.set(le,se));const ee=D.textures;if(se.length!==ee.length||se[0]!==s.COLOR_ATTACHMENT0){for(let j=0,fe=ee.length;j<fe;j++)se[j]=s.COLOR_ATTACHMENT0+j;se.length=ee.length,re=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,re=!0);re&&s.drawBuffers(se)}function Be(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const St={[Zn]:s.FUNC_ADD,[Ch]:s.FUNC_SUBTRACT,[Rh]:s.FUNC_REVERSE_SUBTRACT};St[Ih]=s.MIN,St[Lh]=s.MAX;const ke={[Ph]:s.ZERO,[Dh]:s.ONE,[Uh]:s.SRC_COLOR,[ma]:s.SRC_ALPHA,[zh]:s.SRC_ALPHA_SATURATE,[Oh]:s.DST_COLOR,[Nh]:s.DST_ALPHA,[Fh]:s.ONE_MINUS_SRC_COLOR,[ga]:s.ONE_MINUS_SRC_ALPHA,[kh]:s.ONE_MINUS_DST_COLOR,[Bh]:s.ONE_MINUS_DST_ALPHA,[Vh]:s.CONSTANT_COLOR,[Hh]:s.ONE_MINUS_CONSTANT_COLOR,[Gh]:s.CONSTANT_ALPHA,[Wh]:s.ONE_MINUS_CONSTANT_ALPHA};function lt(D,le,se,re,ee,j,fe,Pe,at,et){if(D===Ct){x===!0&&(de(s.BLEND),x=!1);return}if(x===!1&&(K(s.BLEND),x=!0),D!==wh){if(D!==f||et!==b){if((m!==Zn||A!==Zn)&&(s.blendEquation(s.FUNC_ADD),m=Zn,A=Zn),et)switch(D){case Nn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tr:s.blendFunc(s.ONE,s.ONE);break;case nr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ir:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ve("WebGLState: Invalid blending: ",D);break}else switch(D){case Nn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case nr:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ir:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",D);break}M=null,S=null,R=null,v=null,E.set(0,0,0),I=0,f=D,b=et}return}ee=ee||le,j=j||se,fe=fe||re,(le!==m||ee!==A)&&(s.blendEquationSeparate(St[le],St[ee]),m=le,A=ee),(se!==M||re!==S||j!==R||fe!==v)&&(s.blendFuncSeparate(ke[se],ke[re],ke[j],ke[fe]),M=se,S=re,R=j,v=fe),(Pe.equals(E)===!1||at!==I)&&(s.blendColor(Pe.r,Pe.g,Pe.b,at),E.copy(Pe),I=at),f=D,b=!1}function P(D,le){D.side===Kt?de(s.CULL_FACE):K(s.CULL_FACE);let se=D.side===Bt;le&&(se=!se),Ge(se),D.blending===Nn&&D.transparent===!1?lt(Ct):lt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const re=D.stencilWrite;o.setTest(re),re&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),me(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){_!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),_=D)}function We(D){D!==Eh?(K(s.CULL_FACE),D!==w&&(D===Do?s.cullFace(s.BACK):D===Th?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),w=D}function rt(D){D!==L&&(V&&s.lineWidth(D),L=D)}function me(D,le,se){D?(K(s.POLYGON_OFFSET_FILL),(U!==le||N!==se)&&(s.polygonOffset(le,se),U=le,N=se)):de(s.POLYGON_OFFSET_FILL)}function ct(D){D?K(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function ye(D){D===void 0&&(D=s.TEXTURE0+F-1),Q!==D&&(s.activeTexture(D),Q=D)}function Ue(D,le,se){se===void 0&&(Q===null?se=s.TEXTURE0+F-1:se=Q);let re=te[se];re===void 0&&(re={type:void 0,texture:void 0},te[se]=re),(re.type!==D||re.texture!==le)&&(Q!==se&&(s.activeTexture(se),Q=se),s.bindTexture(D,le||$[D]),re.type=D,re.texture=le)}function C(){const D=te[Q];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function Y(){try{s.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Z(){try{s.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function ve(){try{s.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function oe(){try{s.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Se(){try{s.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function xe(){try{s.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function J(){try{s.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ie(D){Ze.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function we(D){Je.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Je.copy(D))}function Te(D,le){let se=c.get(le);se===void 0&&(se=new WeakMap,c.set(le,se));let re=se.get(D);re===void 0&&(re=s.getUniformBlockIndex(le,D.name),se.set(D,re))}function he(D,le){const re=c.get(le).get(D);l.get(le)!==re&&(s.uniformBlockBinding(le,re,D.__bindingPointIndex),l.set(le,re))}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Q=null,te={},d={},u=new WeakMap,p=[],g=null,x=!1,f=null,m=null,M=null,S=null,A=null,R=null,v=null,E=new Re(0,0,0),I=0,b=!1,_=null,w=null,L=null,U=null,N=null,Ze.set(0,0,s.canvas.width,s.canvas.height),Je.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:de,bindFramebuffer:Le,drawBuffers:_e,useProgram:Be,setBlending:lt,setMaterial:P,setFlipSided:Ge,setCullFace:We,setLineWidth:rt,setPolygonOffset:me,setScissorTest:ct,activeTexture:ye,bindTexture:Ue,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:z,texImage2D:xe,texImage3D:J,updateUBOMapping:Te,uniformBlockBinding:he,texStorage2D:oe,texStorage3D:Se,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:ve,scissor:ie,viewport:we,reset:Ie}}function pg(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return p?new OffscreenCanvas(C,y):us("canvas")}function x(C,y,z){let Y=1;const Z=Ue(C);if((Z.width>z||Z.height>z)&&(Y=z/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor(Y*Z.width),ve=Math.floor(Y*Z.height);d===void 0&&(d=g(X,ve));const oe=y?g(X,ve):d;return oe.width=X,oe.height=ve,oe.getContext("2d").drawImage(C,0,0,X,ve),Me("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+ve+")."),oe}else return"data"in C&&Me("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function f(C){return C.generateMipmaps}function m(C){s.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(C,y,z,Y,Z=!1){if(C!==null){if(s[C]!==void 0)return s[C];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=y;if(y===s.RED&&(z===s.FLOAT&&(X=s.R32F),z===s.HALF_FLOAT&&(X=s.R16F),z===s.UNSIGNED_BYTE&&(X=s.R8)),y===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(X=s.R8UI),z===s.UNSIGNED_SHORT&&(X=s.R16UI),z===s.UNSIGNED_INT&&(X=s.R32UI),z===s.BYTE&&(X=s.R8I),z===s.SHORT&&(X=s.R16I),z===s.INT&&(X=s.R32I)),y===s.RG&&(z===s.FLOAT&&(X=s.RG32F),z===s.HALF_FLOAT&&(X=s.RG16F),z===s.UNSIGNED_BYTE&&(X=s.RG8)),y===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(X=s.RG8UI),z===s.UNSIGNED_SHORT&&(X=s.RG16UI),z===s.UNSIGNED_INT&&(X=s.RG32UI),z===s.BYTE&&(X=s.RG8I),z===s.SHORT&&(X=s.RG16I),z===s.INT&&(X=s.RG32I)),y===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(X=s.RGB8UI),z===s.UNSIGNED_SHORT&&(X=s.RGB16UI),z===s.UNSIGNED_INT&&(X=s.RGB32UI),z===s.BYTE&&(X=s.RGB8I),z===s.SHORT&&(X=s.RGB16I),z===s.INT&&(X=s.RGB32I)),y===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),z===s.UNSIGNED_INT&&(X=s.RGBA32UI),z===s.BYTE&&(X=s.RGBA8I),z===s.SHORT&&(X=s.RGBA16I),z===s.INT&&(X=s.RGBA32I)),y===s.RGB&&(z===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),y===s.RGBA){const ve=Z?or:Ke.getTransfer(Y);z===s.FLOAT&&(X=s.RGBA32F),z===s.HALF_FLOAT&&(X=s.RGBA16F),z===s.UNSIGNED_BYTE&&(X=ve===nt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function A(C,y){let z;return C?y===null||y===Qn||y===ls?z=s.DEPTH24_STENCIL8:y===ln?z=s.DEPTH32F_STENCIL8:y===os&&(z=s.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Qn||y===ls?z=s.DEPTH_COMPONENT24:y===ln?z=s.DEPTH_COMPONENT32F:y===os&&(z=s.DEPTH_COMPONENT16),z}function R(C,y){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ot&&C.minFilter!==Wt?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function v(C){const y=C.target;y.removeEventListener("dispose",v),I(y),y.isVideoTexture&&h.delete(y)}function E(C){const y=C.target;y.removeEventListener("dispose",E),_(y)}function I(C){const y=n.get(C);if(y.__webglInit===void 0)return;const z=C.source,Y=u.get(z);if(Y){const Z=Y[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(C),Object.keys(Y).length===0&&u.delete(z)}n.remove(C)}function b(C){const y=n.get(C);s.deleteTexture(y.__webglTexture);const z=C.source,Y=u.get(z);delete Y[y.__cacheKey],a.memory.textures--}function _(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let Z=0;Z<y.__webglFramebuffer[Y].length;Z++)s.deleteFramebuffer(y.__webglFramebuffer[Y][Z]);else s.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)s.deleteFramebuffer(y.__webglFramebuffer[Y]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=C.textures;for(let Y=0,Z=z.length;Y<Z;Y++){const X=n.get(z[Y]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(z[Y])}n.remove(C)}let w=0;function L(){w=0}function U(){const C=w;return C>=i.maxTextures&&Me("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),w+=1,C}function N(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function F(C,y){const z=n.get(C);if(C.isVideoTexture&&ct(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const Y=C.image;if(Y===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,C,y);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+y)}function V(C,y){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){$(z,C,y);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+y)}function q(C,y){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){$(z,C,y);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+y)}function G(C,y){const z=n.get(C);if(C.version>0&&z.__version!==C.version){K(z,C,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+y)}const Q={[Ri]:s.REPEAT,[on]:s.CLAMP_TO_EDGE,[sr]:s.MIRRORED_REPEAT},te={[Ot]:s.NEAREST,[fc]:s.NEAREST_MIPMAP_NEAREST,[ts]:s.NEAREST_MIPMAP_LINEAR,[Wt]:s.LINEAR,[Ys]:s.LINEAR_MIPMAP_NEAREST,[Un]:s.LINEAR_MIPMAP_LINEAR},ge={[ld]:s.NEVER,[pd]:s.ALWAYS,[cd]:s.LESS,[Mc]:s.LEQUAL,[hd]:s.EQUAL,[fd]:s.GEQUAL,[dd]:s.GREATER,[ud]:s.NOTEQUAL};function He(C,y){if(y.type===ln&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Wt||y.magFilter===Ys||y.magFilter===ts||y.magFilter===Un||y.minFilter===Wt||y.minFilter===Ys||y.minFilter===ts||y.minFilter===Un)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Q[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Q[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Q[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,te[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,te[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ge[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ot||y.minFilter!==ts&&y.minFilter!==Un||y.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ze(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",v));const Y=y.source;let Z=u.get(Y);Z===void 0&&(Z={},u.set(Y,Z));const X=N(y);if(X!==C.__cacheKey){Z[X]===void 0&&(Z[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[X].usedTimes++;const ve=Z[C.__cacheKey];ve!==void 0&&(Z[C.__cacheKey].usedTimes--,ve.usedTimes===0&&b(y)),C.__cacheKey=X,C.__webglTexture=Z[X].texture}return z}function Je(C,y,z){return Math.floor(Math.floor(C/z)/y)}function Qe(C,y,z,Y){const X=C.updateRanges;if(X.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,z,Y,y.data);else{X.sort((J,ie)=>J.start-ie.start);let ve=0;for(let J=1;J<X.length;J++){const ie=X[ve],we=X[J],Te=ie.start+ie.count,he=Je(we.start,y.width,4),Ie=Je(ie.start,y.width,4);we.start<=Te+1&&he===Ie&&Je(we.start+we.count-1,y.width,4)===he?ie.count=Math.max(ie.count,we.start+we.count-ie.start):(++ve,X[ve]=we)}X.length=ve+1;const oe=s.getParameter(s.UNPACK_ROW_LENGTH),Se=s.getParameter(s.UNPACK_SKIP_PIXELS),xe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let J=0,ie=X.length;J<ie;J++){const we=X[J],Te=Math.floor(we.start/4),he=Math.ceil(we.count/4),Ie=Te%y.width,D=Math.floor(Te/y.width),le=he,se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,Ie,D,le,se,z,Y,y.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,oe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Se),s.pixelStorei(s.UNPACK_SKIP_ROWS,xe)}}function $(C,y,z){let Y=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=s.TEXTURE_3D);const Z=Ze(C,y),X=y.source;t.bindTexture(Y,C.__webglTexture,s.TEXTURE0+z);const ve=n.get(X);if(X.version!==ve.__version||Z===!0){t.activeTexture(s.TEXTURE0+z);const oe=Ke.getPrimaries(Ke.workingColorSpace),Se=y.colorSpace===Sn?null:Ke.getPrimaries(y.colorSpace),xe=y.colorSpace===Sn||oe===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let J=x(y.image,!1,i.maxTextureSize);J=ye(y,J);const ie=r.convert(y.format,y.colorSpace),we=r.convert(y.type);let Te=S(y.internalFormat,ie,we,y.colorSpace,y.isVideoTexture);He(Y,y);let he;const Ie=y.mipmaps,D=y.isVideoTexture!==!0,le=ve.__version===void 0||Z===!0,se=X.dataReady,re=R(y,J);if(y.isDepthTexture)Te=A(y.format===hs,y.type),le&&(D?t.texStorage2D(s.TEXTURE_2D,1,Te,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,Te,J.width,J.height,0,ie,we,null));else if(y.isDataTexture)if(Ie.length>0){D&&le&&t.texStorage2D(s.TEXTURE_2D,re,Te,Ie[0].width,Ie[0].height);for(let ee=0,j=Ie.length;ee<j;ee++)he=Ie[ee],D?se&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,he.width,he.height,ie,we,he.data):t.texImage2D(s.TEXTURE_2D,ee,Te,he.width,he.height,0,ie,we,he.data);y.generateMipmaps=!1}else D?(le&&t.texStorage2D(s.TEXTURE_2D,re,Te,J.width,J.height),se&&Qe(y,J,ie,we)):t.texImage2D(s.TEXTURE_2D,0,Te,J.width,J.height,0,ie,we,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){D&&le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,Te,Ie[0].width,Ie[0].height,J.depth);for(let ee=0,j=Ie.length;ee<j;ee++)if(he=Ie[ee],y.format!==Xt)if(ie!==null)if(D){if(se)if(y.layerUpdates.size>0){const fe=xl(he.width,he.height,y.format,y.type);for(const Pe of y.layerUpdates){const at=he.data.subarray(Pe*fe/he.data.BYTES_PER_ELEMENT,(Pe+1)*fe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Pe,he.width,he.height,1,ie,at)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,J.depth,ie,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Te,he.width,he.height,J.depth,0,he.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,J.depth,ie,we,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Te,he.width,he.height,J.depth,0,ie,we,he.data)}else{D&&le&&t.texStorage2D(s.TEXTURE_2D,re,Te,Ie[0].width,Ie[0].height);for(let ee=0,j=Ie.length;ee<j;ee++)he=Ie[ee],y.format!==Xt?ie!==null?D?se&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,he.width,he.height,ie,he.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Te,he.width,he.height,0,he.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?se&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,he.width,he.height,ie,we,he.data):t.texImage2D(s.TEXTURE_2D,ee,Te,he.width,he.height,0,ie,we,he.data)}else if(y.isDataArrayTexture)if(D){if(le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,Te,J.width,J.height,J.depth),se)if(y.layerUpdates.size>0){const ee=xl(J.width,J.height,y.format,y.type);for(const j of y.layerUpdates){const fe=J.data.subarray(j*ee/J.data.BYTES_PER_ELEMENT,(j+1)*ee/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,J.width,J.height,1,ie,we,fe)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ie,we,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,J.width,J.height,J.depth,0,ie,we,J.data);else if(y.isData3DTexture)D?(le&&t.texStorage3D(s.TEXTURE_3D,re,Te,J.width,J.height,J.depth),se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ie,we,J.data)):t.texImage3D(s.TEXTURE_3D,0,Te,J.width,J.height,J.depth,0,ie,we,J.data);else if(y.isFramebufferTexture){if(le)if(D)t.texStorage2D(s.TEXTURE_2D,re,Te,J.width,J.height);else{let ee=J.width,j=J.height;for(let fe=0;fe<re;fe++)t.texImage2D(s.TEXTURE_2D,fe,Te,ee,j,0,ie,we,null),ee>>=1,j>>=1}}else if(Ie.length>0){if(D&&le){const ee=Ue(Ie[0]);t.texStorage2D(s.TEXTURE_2D,re,Te,ee.width,ee.height)}for(let ee=0,j=Ie.length;ee<j;ee++)he=Ie[ee],D?se&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ie,we,he):t.texImage2D(s.TEXTURE_2D,ee,Te,ie,we,he);y.generateMipmaps=!1}else if(D){if(le){const ee=Ue(J);t.texStorage2D(s.TEXTURE_2D,re,Te,ee.width,ee.height)}se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie,we,J)}else t.texImage2D(s.TEXTURE_2D,0,Te,ie,we,J);f(y)&&m(Y),ve.__version=X.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function K(C,y,z){if(y.image.length!==6)return;const Y=Ze(C,y),Z=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);const X=n.get(Z);if(Z.version!==X.__version||Y===!0){t.activeTexture(s.TEXTURE0+z);const ve=Ke.getPrimaries(Ke.workingColorSpace),oe=y.colorSpace===Sn?null:Ke.getPrimaries(y.colorSpace),Se=y.colorSpace===Sn||ve===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const xe=y.isCompressedTexture||y.image[0].isCompressedTexture,J=y.image[0]&&y.image[0].isDataTexture,ie=[];for(let j=0;j<6;j++)!xe&&!J?ie[j]=x(y.image[j],!0,i.maxCubemapSize):ie[j]=J?y.image[j].image:y.image[j],ie[j]=ye(y,ie[j]);const we=ie[0],Te=r.convert(y.format,y.colorSpace),he=r.convert(y.type),Ie=S(y.internalFormat,Te,he,y.colorSpace),D=y.isVideoTexture!==!0,le=X.__version===void 0||Y===!0,se=Z.dataReady;let re=R(y,we);He(s.TEXTURE_CUBE_MAP,y);let ee;if(xe){D&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,re,Ie,we.width,we.height);for(let j=0;j<6;j++){ee=ie[j].mipmaps;for(let fe=0;fe<ee.length;fe++){const Pe=ee[fe];y.format!==Xt?Te!==null?D?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,Pe.width,Pe.height,Te,Pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Ie,Pe.width,Pe.height,0,Pe.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,Pe.width,Pe.height,Te,he,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Ie,Pe.width,Pe.height,0,Te,he,Pe.data)}}}else{if(ee=y.mipmaps,D&&le){ee.length>0&&re++;const j=Ue(ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,re,Ie,j.width,j.height)}for(let j=0;j<6;j++)if(J){D?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ie[j].width,ie[j].height,Te,he,ie[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ie,ie[j].width,ie[j].height,0,Te,he,ie[j].data);for(let fe=0;fe<ee.length;fe++){const at=ee[fe].image[j].image;D?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,at.width,at.height,Te,he,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Ie,at.width,at.height,0,Te,he,at.data)}}else{D?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te,he,ie[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ie,Te,he,ie[j]);for(let fe=0;fe<ee.length;fe++){const Pe=ee[fe];D?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,Te,he,Pe.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Ie,Te,he,Pe.image[j])}}}f(y)&&m(s.TEXTURE_CUBE_MAP),X.__version=Z.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function de(C,y,z,Y,Z,X){const ve=r.convert(z.format,z.colorSpace),oe=r.convert(z.type),Se=S(z.internalFormat,ve,oe,z.colorSpace),xe=n.get(y),J=n.get(z);if(J.__renderTarget=y,!xe.__hasExternalTextures){const ie=Math.max(1,y.width>>X),we=Math.max(1,y.height>>X);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,Se,ie,we,y.depth,0,ve,oe,null):t.texImage2D(Z,X,Se,ie,we,0,ve,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),me(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Z,J.__webglTexture,0,rt(y)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Z,J.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(C,y,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){const Y=y.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,X=A(y.stencilBuffer,Z),ve=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=rt(y);me(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,X,y.width,y.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,X,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,X,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,C)}else{const Y=y.textures;for(let Z=0;Z<Y.length;Z++){const X=Y[Z],ve=r.convert(X.format,X.colorSpace),oe=r.convert(X.type),Se=S(X.internalFormat,ve,oe,X.colorSpace),xe=rt(y);z&&me(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,Se,y.width,y.height):me(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,Se,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Se,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _e(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),F(y.depthTexture,0);const Z=Y.__webglTexture,X=rt(y);if(y.depthTexture.format===cs)me(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(y.depthTexture.format===hs)me(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Be(C){const y=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=Y}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Y=C.texture.mipmaps;Y&&Y.length>0?_e(y.__webglFramebuffer[0],C):_e(y.__webglFramebuffer,C)}else if(z){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=s.createRenderbuffer(),Le(y.__webglDepthbuffer[Y],C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,X)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Le(y.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,X)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function St(C,y,z){const Y=n.get(C);y!==void 0&&de(Y.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Be(C)}function ke(C){const y=C.texture,z=n.get(C),Y=n.get(y);C.addEventListener("dispose",E);const Z=C.textures,X=C.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=y.version,a.memory.textures++),X){z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[oe]=[];for(let Se=0;Se<y.mipmaps.length;Se++)z.__webglFramebuffer[oe][Se]=s.createFramebuffer()}else z.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)z.__webglFramebuffer[oe]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(ve)for(let oe=0,Se=Z.length;oe<Se;oe++){const xe=n.get(Z[oe]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&me(C)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const Se=Z[oe];z.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[oe]);const xe=r.convert(Se.format,Se.colorSpace),J=r.convert(Se.type),ie=S(Se.internalFormat,xe,J,Se.colorSpace,C.isXRRenderTarget===!0),we=rt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ie,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,z.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),He(s.TEXTURE_CUBE_MAP,y);for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)de(z.__webglFramebuffer[oe][Se],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se);else de(z.__webglFramebuffer[oe],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);f(y)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let oe=0,Se=Z.length;oe<Se;oe++){const xe=Z[oe],J=n.get(xe);let ie=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,J.__webglTexture),He(ie,xe),de(z.__webglFramebuffer,C,xe,s.COLOR_ATTACHMENT0+oe,ie,0),f(xe)&&m(ie)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),He(oe,y),y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)de(z.__webglFramebuffer[Se],C,y,s.COLOR_ATTACHMENT0,oe,Se);else de(z.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,oe,0);f(y)&&m(oe),t.unbindTexture()}C.depthBuffer&&Be(C)}function lt(C){const y=C.textures;for(let z=0,Y=y.length;z<Y;z++){const Z=y[z];if(f(Z)){const X=M(C),ve=n.get(Z).__webglTexture;t.bindTexture(X,ve),m(X),t.unbindTexture()}}}const P=[],Ge=[];function We(C){if(C.samples>0){if(me(C)===!1){const y=C.textures,z=C.width,Y=C.height;let Z=s.COLOR_BUFFER_BIT;const X=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(C),oe=y.length>1;if(oe)for(let xe=0;xe<y.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Se=C.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let xe=0;xe<y.length;xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);const J=n.get(y[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,z,Y,0,0,z,Y,Z,s.NEAREST),l===!0&&(P.length=0,Ge.length=0,P.push(s.COLOR_ATTACHMENT0+xe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(P.push(X),Ge.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ge)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let xe=0;xe<y.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);const J=n.get(y[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,J,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function rt(C){return Math.min(i.maxSamples,C.samples)}function me(C){const y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ct(C){const y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function ye(C,y){const z=C.colorSpace,Y=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Ii&&z!==Sn&&(Ke.getTransfer(z)===nt?(Y!==Xt||Z!==hn)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",z)),y}function Ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=F,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=St,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=de,this.useMultisampledRTT=me}function mg(s,e){function t(n,i=Sn){let r;const a=Ke.getTransfer(i);if(n===hn)return s.UNSIGNED_BYTE;if(n===oo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===gc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===pc)return s.BYTE;if(n===mc)return s.SHORT;if(n===os)return s.UNSIGNED_SHORT;if(n===ao)return s.INT;if(n===Qn)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===Pi)return s.HALF_FLOAT;if(n===_c)return s.ALPHA;if(n===vc)return s.RGB;if(n===Xt)return s.RGBA;if(n===cs)return s.DEPTH_COMPONENT;if(n===hs)return s.DEPTH_STENCIL;if(n===bc)return s.RED;if(n===co)return s.RED_INTEGER;if(n===ho)return s.RG;if(n===uo)return s.RG_INTEGER;if(n===fo)return s.RGBA_INTEGER;if(n===js||n===Ks||n===Zs||n===Js)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===wa||n===Ca||n===Ra)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===La||n===Pa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ia||n===La)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Da||n===Ua||n===Fa||n===Na||n===Ba||n===Oa||n===ka||n===za||n===Va||n===Ha||n===Ga||n===Wa||n===Xa||n===qa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Da)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ga)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$a||n===Ya||n===ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$a)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ka||n===Za||n===Ja||n===Qa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
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

}`;class _g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Nc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new un({vertexShader:gg,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tn(new br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vg extends kn{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",f=new _g,m={},M=t.getContextAttributes();let S=null,A=null;const R=[],v=[],E=new Fe;let I=null;const b=new Gt;b.viewport=new ot;const _=new Gt;_.viewport=new ot;const w=[b,_],L=new Eu;let U=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=R[$];return K===void 0&&(K=new $r,R[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=R[$];return K===void 0&&(K=new $r,R[$]=K),K.getGripSpace()},this.getHand=function($){let K=R[$];return K===void 0&&(K=new $r,R[$]=K),K.getHandSpace()};function F($){const K=v.indexOf($.inputSource);if(K===-1)return;const de=R[K];de!==void 0&&(de.update($.inputSource,$.frame,c||a),de.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",q);for(let $=0;$<R.length;$++){const K=v[$];K!==null&&(v[$]=null,R[$].disconnect(K))}U=null,N=null,f.reset();for(const $ in m)delete m[$];e.setRenderTarget(S),p=null,u=null,d=null,i=null,A=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",q),M.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Le=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=M.stencil?hs:cs,Le=M.stencil?ls:Qn);const Be={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Be),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),A=new ei(u.textureWidth,u.textureHeight,{format:Xt,type:hn,depthTexture:new Fc(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const de={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new ei(p.framebufferWidth,p.framebufferHeight,{format:Xt,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function q($){for(let K=0;K<$.removed.length;K++){const de=$.removed[K],Le=v.indexOf(de);Le>=0&&(v[Le]=null,R[Le].disconnect(de))}for(let K=0;K<$.added.length;K++){const de=$.added[K];let Le=v.indexOf(de);if(Le===-1){for(let Be=0;Be<R.length;Be++)if(Be>=v.length){v.push(de),Le=Be;break}else if(v[Be]===null){v[Be]=de,Le=Be;break}if(Le===-1)break}const _e=R[Le];_e&&_e.connect(de)}}const G=new O,Q=new O;function te($,K,de){G.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(de.matrixWorld);const Le=G.distanceTo(Q),_e=K.projectionMatrix.elements,Be=de.projectionMatrix.elements,St=_e[14]/(_e[10]-1),ke=_e[14]/(_e[10]+1),lt=(_e[9]+1)/_e[5],P=(_e[9]-1)/_e[5],Ge=(_e[8]-1)/_e[0],We=(Be[8]+1)/Be[0],rt=St*Ge,me=St*We,ct=Le/(-Ge+We),ye=ct*-Ge;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ye),$.translateZ(ct),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_e[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ue=St+ct,C=ke+ct,y=rt-ye,z=me+(Le-ye),Y=lt*ke/C*Ue,Z=P*ke/C*Ue;$.projectionMatrix.makePerspective(y,z,Y,Z,Ue,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ge($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let K=$.near,de=$.far;f.texture!==null&&(f.depthNear>0&&(K=f.depthNear),f.depthFar>0&&(de=f.depthFar)),L.near=_.near=b.near=K,L.far=_.far=b.far=de,(U!==L.near||N!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,N=L.far),L.layers.mask=$.layers.mask|6,b.layers.mask=L.layers.mask&3,_.layers.mask=L.layers.mask&5;const Le=$.parent,_e=L.cameras;ge(L,Le);for(let Be=0;Be<_e.length;Be++)ge(_e[Be],Le);_e.length===2?te(L,b,_):L.projectionMatrix.copy(b.projectionMatrix),He($,L,Le)};function He($,K,de){de===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(de.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ps*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(L)},this.getCameraTexture=function($){return m[$]};let Ze=null;function Je($,K){if(h=K.getViewerPose(c||a),g=K,h!==null){const de=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let Le=!1;de.length!==L.cameras.length&&(L.cameras.length=0,Le=!0);for(let ke=0;ke<de.length;ke++){const lt=de[ke];let P=null;if(p!==null)P=p.getViewport(lt);else{const We=d.getViewSubImage(u,lt);P=We.viewport,ke===0&&(e.setRenderTargetTextures(A,We.colorTexture,We.depthStencilTexture),e.setRenderTarget(A))}let Ge=w[ke];Ge===void 0&&(Ge=new Gt,Ge.layers.enable(ke),Ge.viewport=new ot,w[ke]=Ge),Ge.matrix.fromArray(lt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(lt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(P.x,P.y,P.width,P.height),ke===0&&(L.matrix.copy(Ge.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Le===!0&&L.cameras.push(Ge)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const ke=d.getDepthInformation(de[0]);ke&&ke.isValid&&ke.texture&&f.init(ke,i.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let ke=0;ke<de.length;ke++){const lt=de[ke].camera;if(lt){let P=m[lt];P||(P=new Nc,m[lt]=P);const Ge=d.getCameraImage(lt);P.sourceTexture=Ge}}}}for(let de=0;de<R.length;de++){const Le=v[de],_e=R[de];Le!==null&&_e!==void 0&&_e.update(Le,K,c||a)}Ze&&Ze($,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Qe=new Zc;Qe.setAnimationLoop(Je),this.setAnimationLoop=function($){Ze=$},this.dispose=function(){}}}const jn=new dn,bg=new qe;function yg(s,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Ic(s)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,M,S,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),d(f,m)):m.isMeshPhongMaterial?(r(f,m),h(f,m)):m.isMeshStandardMaterial?(r(f,m),u(f,m),m.isMeshPhysicalMaterial&&p(f,m,A)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),x(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,M,S):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Bt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Bt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const M=e.get(m),S=M.envMap,A=M.envMapRotation;S&&(f.envMap.value=S,jn.copy(A),jn.x*=-1,jn.y*=-1,jn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),f.envMapRotation.value.setFromMatrix4(bg.makeRotationFromEuler(jn)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,M,S){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*M,f.scale.value=S*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function d(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function u(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,M){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bt&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function x(f,m){const M=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Mg(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const A=S.program;n.uniformBlockBinding(M,A)}function c(M,S){let A=i[M.id];A===void 0&&(g(M),A=h(M),i[M.id]=A,M.addEventListener("dispose",f));const R=S.program;n.updateUBOMapping(M,R);const v=e.render.frame;r[M.id]!==v&&(u(M),r[M.id]=v)}function h(M){const S=d();M.__bindingPointIndex=S;const A=s.createBuffer(),R=M.__size,v=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,R,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,A),A}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const S=i[M.id],A=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let v=0,E=A.length;v<E;v++){const I=Array.isArray(A[v])?A[v]:[A[v]];for(let b=0,_=I.length;b<_;b++){const w=I[b];if(p(w,v,b,R)===!0){const L=w.__offset,U=Array.isArray(w.value)?w.value:[w.value];let N=0;for(let F=0;F<U.length;F++){const V=U[F],q=x(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,L+N,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,S,A,R){const v=M.value,E=S+"_"+A;if(R[E]===void 0)return typeof v=="number"||typeof v=="boolean"?R[E]=v:R[E]=v.clone(),!0;{const I=R[E];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return R[E]=v,!0}else if(I.equals(v)===!1)return I.copy(v),!0}return!1}function g(M){const S=M.uniforms;let A=0;const R=16;for(let E=0,I=S.length;E<I;E++){const b=Array.isArray(S[E])?S[E]:[S[E]];for(let _=0,w=b.length;_<w;_++){const L=b[_],U=Array.isArray(L.value)?L.value:[L.value];for(let N=0,F=U.length;N<F;N++){const V=U[N],q=x(V),G=A%R,Q=G%q.boundary,te=G+Q;A+=Q,te!==0&&R-te<q.storage&&(A+=R-te),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=A,A+=q.storage}}}const v=A%R;return v>0&&(A+=R-v),M.__size=A,M.__cache={},this}function x(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Me("WebGLRenderer: Unsupported uniform value type.",M),S}function f(M){const S=M.target;S.removeEventListener("dispose",f);const A=a.indexOf(S.__bindingPointIndex);a.splice(A,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function m(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}const Sg=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let _n=null;function Eg(){return _n===null&&(_n=new Uc(Sg,32,32,ho,Pi),_n.minFilter=Wt,_n.magFilter=Wt,_n.wrapS=on,_n.wrapT=on,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}class nh{constructor(e={}){const{canvas:t=md(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Set([fo,uo,co]),x=new Set([hn,Qn,os,ls,oo,lo]),f=new Uint32Array(4),m=new Int32Array(4);let M=null,S=null;const A=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=Pt;let I=0,b=0,_=null,w=-1,L=null;const U=new ot,N=new ot;let F=null;const V=new Re(0);let q=0,G=t.width,Q=t.height,te=1,ge=null,He=null;const Ze=new ot(0,0,G,Q),Je=new ot(0,0,G,Q);let Qe=!1;const $=new _o;let K=!1,de=!1;const Le=new qe,_e=new O,Be=new ot,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function lt(){return _===null?te:1}let P=n;function Ge(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gr}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",fe,!1),P===null){const B="webgl2";if(P=Ge(B,T),P===null)throw Ge(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let We,rt,me,ct,ye,Ue,C,y,z,Y,Z,X,ve,oe,Se,xe,J,ie,we,Te,he,Ie,D,le;function se(){We=new Dm(P),We.init(),Ie=new mg(P,We),rt=new Em(P,We,e,Ie),me=new fg(P,We),rt.reversedDepthBuffer&&u&&me.buffers.depth.setReversed(!0),ct=new Nm(P),ye=new eg,Ue=new pg(P,We,me,ye,rt,Ie,ct),C=new Am(v),y=new Pm(v),z=new ku(P),D=new Mm(P,z),Y=new Um(P,z,ct,D),Z=new Om(P,Y,z,ct),we=new Bm(P,rt,Ue),xe=new Tm(ye),X=new Q0(v,C,y,We,rt,D,xe),ve=new yg(v,ye),oe=new ng,Se=new lg(We),ie=new ym(v,C,y,me,Z,p,l),J=new dg(v,Z,rt),le=new Mg(P,ct,rt,me),Te=new Sm(P,We,ct),he=new Fm(P,We,ct),ct.programs=X.programs,v.capabilities=rt,v.extensions=We,v.properties=ye,v.renderLists=oe,v.shadowMap=J,v.state=me,v.info=ct}se();const re=new vg(v,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=We.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=We.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(G,Q,!1))},this.getSize=function(T){return T.set(G,Q)},this.setSize=function(T,B,H=!0){if(re.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,Q=B,t.width=Math.floor(T*te),t.height=Math.floor(B*te),H===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(G*te,Q*te).floor()},this.setDrawingBufferSize=function(T,B,H){G=T,Q=B,te=H,t.width=Math.floor(T*H),t.height=Math.floor(B*H),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(Ze)},this.setViewport=function(T,B,H,W){T.isVector4?Ze.set(T.x,T.y,T.z,T.w):Ze.set(T,B,H,W),me.viewport(U.copy(Ze).multiplyScalar(te).round())},this.getScissor=function(T){return T.copy(Je)},this.setScissor=function(T,B,H,W){T.isVector4?Je.set(T.x,T.y,T.z,T.w):Je.set(T,B,H,W),me.scissor(N.copy(Je).multiplyScalar(te).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(T){me.setScissorTest(Qe=T)},this.setOpaqueSort=function(T){ge=T},this.setTransparentSort=function(T){He=T},this.getClearColor=function(T){return T.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,H=!0){let W=0;if(T){let k=!1;if(_!==null){const ne=_.texture.format;k=g.has(ne)}if(k){const ne=_.texture.type,ce=x.has(ne),pe=ie.getClearColor(),ue=ie.getClearAlpha(),Ae=pe.r,Ce=pe.g,be=pe.b;ce?(f[0]=Ae,f[1]=Ce,f[2]=be,f[3]=ue,P.clearBufferuiv(P.COLOR,0,f)):(m[0]=Ae,m[1]=Ce,m[2]=be,m[3]=ue,P.clearBufferiv(P.COLOR,0,m))}else W|=P.COLOR_BUFFER_BIT}B&&(W|=P.DEPTH_BUFFER_BIT),H&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ie.dispose(),oe.dispose(),Se.dispose(),ye.dispose(),C.dispose(),y.dispose(),Z.dispose(),D.dispose(),le.dispose(),X.dispose(),re.dispose(),re.removeEventListener("sessionstart",Eo),re.removeEventListener("sessionend",To),Hn.stop()};function ee(T){T.preventDefault(),ko("WebGLRenderer: Context Lost."),E=!0}function j(){ko("WebGLRenderer: Context Restored."),E=!1;const T=ct.autoReset,B=J.enabled,H=J.autoUpdate,W=J.needsUpdate,k=J.type;se(),ct.autoReset=T,J.enabled=B,J.autoUpdate=H,J.needsUpdate=W,J.type=k}function fe(T){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pe(T){const B=T.target;B.removeEventListener("dispose",Pe),at(B)}function at(T){et(T),ye.remove(T)}function et(T){const B=ye.get(T).programs;B!==void 0&&(B.forEach(function(H){X.releaseProgram(H)}),T.isShaderMaterial&&X.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,H,W,k,ne){B===null&&(B=St);const ce=k.isMesh&&k.matrixWorld.determinant()<0,pe=gh(T,B,H,W,k);me.setMaterial(W,ce);let ue=H.index,Ae=1;if(W.wireframe===!0){if(ue=Y.getWireframeAttribute(H),ue===void 0)return;Ae=2}const Ce=H.drawRange,be=H.attributes.position;let Xe=Ce.start*Ae,tt=(Ce.start+Ce.count)*Ae;ne!==null&&(Xe=Math.max(Xe,ne.start*Ae),tt=Math.min(tt,(ne.start+ne.count)*Ae)),ue!==null?(Xe=Math.max(Xe,0),tt=Math.min(tt,ue.count)):be!=null&&(Xe=Math.max(Xe,0),tt=Math.min(tt,be.count));const ut=tt-Xe;if(ut<0||ut===1/0)return;D.setup(k,W,pe,H,ue);let ft,st=Te;if(ue!==null&&(ft=z.get(ue),st=he,st.setIndex(ft)),k.isMesh)W.wireframe===!0?(me.setLineWidth(W.wireframeLinewidth*lt()),st.setMode(P.LINES)):st.setMode(P.TRIANGLES);else if(k.isLine){let Ee=W.linewidth;Ee===void 0&&(Ee=1),me.setLineWidth(Ee*lt()),k.isLineSegments?st.setMode(P.LINES):k.isLineLoop?st.setMode(P.LINE_LOOP):st.setMode(P.LINE_STRIP)}else k.isPoints?st.setMode(P.POINTS):k.isSprite&&st.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)fs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))st.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ee=k._multiDrawStarts,ht=k._multiDrawCounts,je=k._multiDrawCount,kt=ue?z.get(ue).bytesPerElement:1,ni=ye.get(W).currentProgram.getUniforms();for(let zt=0;zt<je;zt++)ni.setValue(P,"_gl_DrawID",zt),st.render(Ee[zt]/kt,ht[zt])}else if(k.isInstancedMesh)st.renderInstances(Xe,ut,k.count);else if(H.isInstancedBufferGeometry){const Ee=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ht=Math.min(H.instanceCount,Ee);st.renderInstances(Xe,ut,ht)}else st.render(Xe,ut)};function rn(T,B,H){T.transparent===!0&&T.side===Kt&&T.forceSinglePass===!1?(T.side=Bt,T.needsUpdate=!0,bs(T,B,H),T.side=On,T.needsUpdate=!0,bs(T,B,H),T.side=Kt):bs(T,B,H)}this.compile=function(T,B,H=null){H===null&&(H=T),S=Se.get(H),S.init(B),R.push(S),H.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),T!==H&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights();const W=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ne=k.material;if(ne)if(Array.isArray(ne))for(let ce=0;ce<ne.length;ce++){const pe=ne[ce];rn(pe,H,k),W.add(pe)}else rn(ne,H,k),W.add(ne)}),S=R.pop(),W},this.compileAsync=function(T,B,H=null){const W=this.compile(T,B,H);return new Promise(k=>{function ne(){if(W.forEach(function(ce){ye.get(ce).currentProgram.isReady()&&W.delete(ce)}),W.size===0){k(T);return}setTimeout(ne,10)}We.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Jt=null;function mh(T){Jt&&Jt(T)}function Eo(){Hn.stop()}function To(){Hn.start()}const Hn=new Zc;Hn.setAnimationLoop(mh),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(T){Jt=T,re.setAnimationLoop(T),T===null?Hn.stop():Hn.start()},re.addEventListener("sessionstart",Eo),re.addEventListener("sessionend",To),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(B),B=re.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,_),S=Se.get(T,R.length),S.init(B),R.push(S),Le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(Le,cn,B.reversedDepth),de=this.localClippingEnabled,K=xe.init(this.clippingPlanes,de),M=oe.get(T,A.length),M.init(),A.push(M),re.enabled===!0&&re.isPresenting===!0){const ne=v.xr.getDepthSensingMesh();ne!==null&&Er(ne,B,-1/0,v.sortObjects)}Er(T,B,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(ge,He),ke=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ke&&ie.addToRenderList(M,T),this.info.render.frame++,K===!0&&xe.beginShadows();const H=S.state.shadowsArray;J.render(H,T,B),K===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=M.opaque,k=M.transmissive;if(S.setupLights(),B.isArrayCamera){const ne=B.cameras;if(k.length>0)for(let ce=0,pe=ne.length;ce<pe;ce++){const ue=ne[ce];wo(W,k,T,ue)}ke&&ie.render(T);for(let ce=0,pe=ne.length;ce<pe;ce++){const ue=ne[ce];Ao(M,T,ue,ue.viewport)}}else k.length>0&&wo(W,k,T,B),ke&&ie.render(T),Ao(M,T,B);_!==null&&b===0&&(Ue.updateMultisampleRenderTarget(_),Ue.updateRenderTargetMipmap(_)),T.isScene===!0&&T.onAfterRender(v,T,B),D.resetDefaultState(),w=-1,L=null,R.pop(),R.length>0?(S=R[R.length-1],K===!0&&xe.setGlobalState(v.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function Er(T,B,H,W){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){W&&Be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Le);const ce=Z.update(T),pe=T.material;pe.visible&&M.push(T,ce,pe,H,Be.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const ce=Z.update(T),pe=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Be.copy(T.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Be.copy(ce.boundingSphere.center)),Be.applyMatrix4(T.matrixWorld).applyMatrix4(Le)),Array.isArray(pe)){const ue=ce.groups;for(let Ae=0,Ce=ue.length;Ae<Ce;Ae++){const be=ue[Ae],Xe=pe[be.materialIndex];Xe&&Xe.visible&&M.push(T,ce,Xe,H,Be.z,be)}}else pe.visible&&M.push(T,ce,pe,H,Be.z,null)}}const ne=T.children;for(let ce=0,pe=ne.length;ce<pe;ce++)Er(ne[ce],B,H,W)}function Ao(T,B,H,W){const{opaque:k,transmissive:ne,transparent:ce}=T;S.setupLightsView(H),K===!0&&xe.setGlobalState(v.clippingPlanes,H),W&&me.viewport(U.copy(W)),k.length>0&&vs(k,B,H),ne.length>0&&vs(ne,B,H),ce.length>0&&vs(ce,B,H),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function wo(T,B,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[W.id]===void 0&&(S.state.transmissionRenderTarget[W.id]=new ei(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Pi:hn,minFilter:Un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ne=S.state.transmissionRenderTarget[W.id],ce=W.viewport||U;ne.setSize(ce.z*v.transmissionResolutionScale,ce.w*v.transmissionResolutionScale);const pe=v.getRenderTarget(),ue=v.getActiveCubeFace(),Ae=v.getActiveMipmapLevel();v.setRenderTarget(ne),v.getClearColor(V),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),ke&&ie.render(H);const Ce=v.toneMapping;v.toneMapping=Bn;const be=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),S.setupLightsView(W),K===!0&&xe.setGlobalState(v.clippingPlanes,W),vs(T,H,W),Ue.updateMultisampleRenderTarget(ne),Ue.updateRenderTargetMipmap(ne),We.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let tt=0,ut=B.length;tt<ut;tt++){const ft=B[tt],{object:st,geometry:Ee,material:ht,group:je}=ft;if(ht.side===Kt&&st.layers.test(W.layers)){const kt=ht.side;ht.side=Bt,ht.needsUpdate=!0,Co(st,H,W,Ee,ht,je),ht.side=kt,ht.needsUpdate=!0,Xe=!0}}Xe===!0&&(Ue.updateMultisampleRenderTarget(ne),Ue.updateRenderTargetMipmap(ne))}v.setRenderTarget(pe,ue,Ae),v.setClearColor(V,q),be!==void 0&&(W.viewport=be),v.toneMapping=Ce}function vs(T,B,H){const W=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ne=T.length;k<ne;k++){const ce=T[k],{object:pe,geometry:ue,group:Ae}=ce;let Ce=ce.material;Ce.allowOverride===!0&&W!==null&&(Ce=W),pe.layers.test(H.layers)&&Co(pe,B,H,ue,Ce,Ae)}}function Co(T,B,H,W,k,ne){T.onBeforeRender(v,B,H,W,k,ne),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,B,H,W,T,ne),k.transparent===!0&&k.side===Kt&&k.forceSinglePass===!1?(k.side=Bt,k.needsUpdate=!0,v.renderBufferDirect(H,B,W,k,T,ne),k.side=On,k.needsUpdate=!0,v.renderBufferDirect(H,B,W,k,T,ne),k.side=Kt):v.renderBufferDirect(H,B,W,k,T,ne),T.onAfterRender(v,B,H,W,k,ne)}function bs(T,B,H){B.isScene!==!0&&(B=St);const W=ye.get(T),k=S.state.lights,ne=S.state.shadowsArray,ce=k.state.version,pe=X.getParameters(T,k.state,ne,B,H),ue=X.getProgramCacheKey(pe);let Ae=W.programs;W.environment=T.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(T.isMeshStandardMaterial?y:C).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ae===void 0&&(T.addEventListener("dispose",Pe),Ae=new Map,W.programs=Ae);let Ce=Ae.get(ue);if(Ce!==void 0){if(W.currentProgram===Ce&&W.lightsStateVersion===ce)return Io(T,pe),Ce}else pe.uniforms=X.getUniforms(T),T.onBeforeCompile(pe,v),Ce=X.acquireProgram(pe,ue),Ae.set(ue,Ce),W.uniforms=pe.uniforms;const be=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=xe.uniform),Io(T,pe),W.needsLights=_h(T),W.lightsStateVersion=ce,W.needsLights&&(be.ambientLightColor.value=k.state.ambient,be.lightProbe.value=k.state.probe,be.directionalLights.value=k.state.directional,be.directionalLightShadows.value=k.state.directionalShadow,be.spotLights.value=k.state.spot,be.spotLightShadows.value=k.state.spotShadow,be.rectAreaLights.value=k.state.rectArea,be.ltc_1.value=k.state.rectAreaLTC1,be.ltc_2.value=k.state.rectAreaLTC2,be.pointLights.value=k.state.point,be.pointLightShadows.value=k.state.pointShadow,be.hemisphereLights.value=k.state.hemi,be.directionalShadowMap.value=k.state.directionalShadowMap,be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,be.spotShadowMap.value=k.state.spotShadowMap,be.spotLightMatrix.value=k.state.spotLightMatrix,be.spotLightMap.value=k.state.spotLightMap,be.pointShadowMap.value=k.state.pointShadowMap,be.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Ce,W.uniformsList=null,Ce}function Ro(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Qs.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Io(T,B){const H=ye.get(T);H.outputColorSpace=B.outputColorSpace,H.batching=B.batching,H.batchingColor=B.batchingColor,H.instancing=B.instancing,H.instancingColor=B.instancingColor,H.instancingMorph=B.instancingMorph,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function gh(T,B,H,W,k){B.isScene!==!0&&(B=St),Ue.resetTextureUnits();const ne=B.fog,ce=W.isMeshStandardMaterial?B.environment:null,pe=_===null?v.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Ii,ue=(W.isMeshStandardMaterial?y:C).get(W.envMap||ce),Ae=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ce=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!H.morphAttributes.position,Xe=!!H.morphAttributes.normal,tt=!!H.morphAttributes.color;let ut=Bn;W.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(ut=v.toneMapping);const ft=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,st=ft!==void 0?ft.length:0,Ee=ye.get(W),ht=S.state.lights;if(K===!0&&(de===!0||T!==L)){const Rt=T===L&&W.id===w;xe.setState(W,T,Rt)}let je=!1;W.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==ht.state.version||Ee.outputColorSpace!==pe||k.isBatchedMesh&&Ee.batching===!1||!k.isBatchedMesh&&Ee.batching===!0||k.isBatchedMesh&&Ee.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ee.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ee.instancing===!1||!k.isInstancedMesh&&Ee.instancing===!0||k.isSkinnedMesh&&Ee.skinning===!1||!k.isSkinnedMesh&&Ee.skinning===!0||k.isInstancedMesh&&Ee.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ee.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ee.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ee.instancingMorph===!1&&k.morphTexture!==null||Ee.envMap!==ue||W.fog===!0&&Ee.fog!==ne||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==xe.numPlanes||Ee.numIntersection!==xe.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Ce||Ee.morphTargets!==be||Ee.morphNormals!==Xe||Ee.morphColors!==tt||Ee.toneMapping!==ut||Ee.morphTargetsCount!==st)&&(je=!0):(je=!0,Ee.__version=W.version);let kt=Ee.currentProgram;je===!0&&(kt=bs(W,B,k));let ni=!1,zt=!1,Oi=!1;const dt=kt.getUniforms(),Dt=Ee.uniforms;if(me.useProgram(kt.program)&&(ni=!0,zt=!0,Oi=!0),W.id!==w&&(w=W.id,zt=!0),ni||L!==T){me.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),dt.setValue(P,"projectionMatrix",T.projectionMatrix),dt.setValue(P,"viewMatrix",T.matrixWorldInverse);const Ut=dt.map.cameraPosition;Ut!==void 0&&Ut.setValue(P,_e.setFromMatrixPosition(T.matrixWorld)),rt.logarithmicDepthBuffer&&dt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&dt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),L!==T&&(L=T,zt=!0,Oi=!0)}if(k.isSkinnedMesh){dt.setOptional(P,k,"bindMatrix"),dt.setOptional(P,k,"bindMatrixInverse");const Rt=k.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),dt.setValue(P,"boneTexture",Rt.boneTexture,Ue))}k.isBatchedMesh&&(dt.setOptional(P,k,"batchingTexture"),dt.setValue(P,"batchingTexture",k._matricesTexture,Ue),dt.setOptional(P,k,"batchingIdTexture"),dt.setValue(P,"batchingIdTexture",k._indirectTexture,Ue),dt.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&dt.setValue(P,"batchingColorTexture",k._colorsTexture,Ue));const Yt=H.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&we.update(k,H,kt),(zt||Ee.receiveShadow!==k.receiveShadow)&&(Ee.receiveShadow=k.receiveShadow,dt.setValue(P,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Dt.envMap.value=ue,Dt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Dt.envMapIntensity.value=B.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=Eg()),zt&&(dt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&xh(Dt,Oi),ne&&W.fog===!0&&ve.refreshFogUniforms(Dt,ne),ve.refreshMaterialUniforms(Dt,W,te,Q,S.state.transmissionRenderTarget[T.id]),Qs.upload(P,Ro(Ee),Dt,Ue)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Qs.upload(P,Ro(Ee),Dt,Ue),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&dt.setValue(P,"center",k.center),dt.setValue(P,"modelViewMatrix",k.modelViewMatrix),dt.setValue(P,"normalMatrix",k.normalMatrix),dt.setValue(P,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Rt=W.uniformsGroups;for(let Ut=0,Tr=Rt.length;Ut<Tr;Ut++){const Gn=Rt[Ut];le.update(Gn,kt),le.bind(Gn,kt)}}return kt}function xh(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function _h(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(T,B,H){const W=ye.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ye.get(T.texture).__webglTexture=B,ye.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:H,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const H=ye.get(T);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0};const vh=P.createFramebuffer();this.setRenderTarget=function(T,B=0,H=0){_=T,I=B,b=H;let W=!0,k=null,ne=!1,ce=!1;if(T){const ue=ye.get(T);if(ue.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(ue.__webglFramebuffer===void 0)Ue.setupRenderTarget(T);else if(ue.__hasExternalTextures)Ue.rebindTextures(T,ye.get(T.texture).__webglTexture,ye.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const be=T.depthTexture;if(ue.__boundDepthTexture!==be){if(be!==null&&ye.has(be)&&(T.width!==be.image.width||T.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(T)}}const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ce=!0);const Ce=ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[B])?k=Ce[B][H]:k=Ce[B],ne=!0):T.samples>0&&Ue.useMultisampledRTT(T)===!1?k=ye.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?k=Ce[H]:k=Ce,U.copy(T.viewport),N.copy(T.scissor),F=T.scissorTest}else U.copy(Ze).multiplyScalar(te).floor(),N.copy(Je).multiplyScalar(te).floor(),F=Qe;if(H!==0&&(k=vh),me.bindFramebuffer(P.FRAMEBUFFER,k)&&W&&me.drawBuffers(T,k),me.viewport(U),me.scissor(N),me.setScissorTest(F),ne){const ue=ye.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,ue.__webglTexture,H)}else if(ce){const ue=B;for(let Ae=0;Ae<T.textures.length;Ae++){const Ce=ye.get(T.textures[Ae]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,H,ue)}}else if(T!==null&&H!==0){const ue=ye.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ue.__webglTexture,H)}w=-1},this.readRenderTargetPixels=function(T,B,H,W,k,ne,ce,pe=0){if(!(T&&T.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(ue=ue[ce]),ue){me.bindFramebuffer(P.FRAMEBUFFER,ue);try{const Ae=T.textures[pe],Ce=Ae.format,be=Ae.type;if(!rt.textureFormatReadable(Ce)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(be)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-W&&H>=0&&H<=T.height-k&&(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe),P.readPixels(B,H,W,k,Ie.convert(Ce),Ie.convert(be),ne))}finally{const Ae=_!==null?ye.get(_).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(T,B,H,W,k,ne,ce,pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(ue=ue[ce]),ue)if(B>=0&&B<=T.width-W&&H>=0&&H<=T.height-k){me.bindFramebuffer(P.FRAMEBUFFER,ue);const Ae=T.textures[pe],Ce=Ae.format,be=Ae.type;if(!rt.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Xe),P.bufferData(P.PIXEL_PACK_BUFFER,ne.byteLength,P.STREAM_READ),T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe),P.readPixels(B,H,W,k,Ie.convert(Ce),Ie.convert(be),0);const tt=_!==null?ye.get(_).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,tt);const ut=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await gd(P,ut,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Xe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ne),P.deleteBuffer(Xe),P.deleteSync(ut),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,H=0){const W=Math.pow(2,-H),k=Math.floor(T.image.width*W),ne=Math.floor(T.image.height*W),ce=B!==null?B.x:0,pe=B!==null?B.y:0;Ue.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,ce,pe,k,ne),me.unbindTexture()};const bh=P.createFramebuffer(),yh=P.createFramebuffer();this.copyTextureToTexture=function(T,B,H=null,W=null,k=0,ne=null){ne===null&&(k!==0?(fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=k,k=0):ne=0);let ce,pe,ue,Ae,Ce,be,Xe,tt,ut;const ft=T.isCompressedTexture?T.mipmaps[ne]:T.image;if(H!==null)ce=H.max.x-H.min.x,pe=H.max.y-H.min.y,ue=H.isBox3?H.max.z-H.min.z:1,Ae=H.min.x,Ce=H.min.y,be=H.isBox3?H.min.z:0;else{const Yt=Math.pow(2,-k);ce=Math.floor(ft.width*Yt),pe=Math.floor(ft.height*Yt),T.isDataArrayTexture?ue=ft.depth:T.isData3DTexture?ue=Math.floor(ft.depth*Yt):ue=1,Ae=0,Ce=0,be=0}W!==null?(Xe=W.x,tt=W.y,ut=W.z):(Xe=0,tt=0,ut=0);const st=Ie.convert(B.format),Ee=Ie.convert(B.type);let ht;B.isData3DTexture?(Ue.setTexture3D(B,0),ht=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ue.setTexture2DArray(B,0),ht=P.TEXTURE_2D_ARRAY):(Ue.setTexture2D(B,0),ht=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);const je=P.getParameter(P.UNPACK_ROW_LENGTH),kt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ni=P.getParameter(P.UNPACK_SKIP_PIXELS),zt=P.getParameter(P.UNPACK_SKIP_ROWS),Oi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ae),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ce),P.pixelStorei(P.UNPACK_SKIP_IMAGES,be);const dt=T.isDataArrayTexture||T.isData3DTexture,Dt=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const Yt=ye.get(T),Rt=ye.get(B),Ut=ye.get(Yt.__renderTarget),Tr=ye.get(Rt.__renderTarget);me.bindFramebuffer(P.READ_FRAMEBUFFER,Ut.__webglFramebuffer),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let Gn=0;Gn<ue;Gn++)dt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(T).__webglTexture,k,be+Gn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(B).__webglTexture,ne,ut+Gn)),P.blitFramebuffer(Ae,Ce,ce,pe,Xe,tt,ce,pe,P.DEPTH_BUFFER_BIT,P.NEAREST);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||ye.has(T)){const Yt=ye.get(T),Rt=ye.get(B);me.bindFramebuffer(P.READ_FRAMEBUFFER,bh),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,yh);for(let Ut=0;Ut<ue;Ut++)dt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Yt.__webglTexture,k,be+Ut):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Yt.__webglTexture,k),Dt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.__webglTexture,ne,ut+Ut):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Rt.__webglTexture,ne),k!==0?P.blitFramebuffer(Ae,Ce,ce,pe,Xe,tt,ce,pe,P.COLOR_BUFFER_BIT,P.NEAREST):Dt?P.copyTexSubImage3D(ht,ne,Xe,tt,ut+Ut,Ae,Ce,ce,pe):P.copyTexSubImage2D(ht,ne,Xe,tt,Ae,Ce,ce,pe);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Dt?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(ht,ne,Xe,tt,ut,ce,pe,ue,st,Ee,ft.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(ht,ne,Xe,tt,ut,ce,pe,ue,st,ft.data):P.texSubImage3D(ht,ne,Xe,tt,ut,ce,pe,ue,st,Ee,ft):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ne,Xe,tt,ce,pe,st,Ee,ft.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ne,Xe,tt,ft.width,ft.height,st,ft.data):P.texSubImage2D(P.TEXTURE_2D,ne,Xe,tt,ce,pe,st,Ee,ft);P.pixelStorei(P.UNPACK_ROW_LENGTH,je),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,kt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ni),P.pixelStorei(P.UNPACK_SKIP_ROWS,zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Oi),ne===0&&B.generateMipmaps&&P.generateMipmap(ht),me.unbindTexture()},this.initRenderTarget=function(T){ye.get(T).__webglFramebuffer===void 0&&Ue.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ue.setTextureCube(T,0):T.isData3DTexture?Ue.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ue.setTexture2DArray(T,0):Ue.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){I=0,b=0,_=null,me.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const Vl={type:"change"},Mo={type:"start"},ih={type:"end"},qs=new vr,Hl=new Dn,Tg=Math.cos(70*cr.DEG2RAD),xt=new O,Ft=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oa=1e-6;class sh extends Bu{constructor(e,t=null){super(e,t),this.state=it.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new $t,this._lastTargetPosition=new O,this._quat=new $t().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gl,this._sphericalDelta=new gl,this._scale=1,this._panOffset=new O,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new O,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wg.bind(this),this._onPointerDown=Ag.bind(this),this._onPointerUp=Cg.bind(this),this._onContextMenu=Fg.bind(this),this._onMouseWheel=Lg.bind(this),this._onKeyDown=Pg.bind(this),this._onTouchStart=Dg.bind(this),this._onTouchMove=Ug.bind(this),this._onMouseDown=Rg.bind(this),this._onMouseMove=Ig.bind(this),this._interceptControlDown=Ng.bind(this),this._interceptControlUp=Bg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vl),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;xt.copy(t).sub(this.target),xt.applyQuaternion(this._quat),this._spherical.setFromVector3(xt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ft:n>Math.PI&&(n-=Ft),i<-Math.PI?i+=Ft:i>Math.PI&&(i-=Ft),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(xt.setFromSpherical(this._spherical),xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=xt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(qs.origin.copy(this.object.position),qs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qs.direction))<Tg?this.object.lookAt(this.target):(Hl.setFromNormalAndCoplanarPoint(this.object.up,this.target),qs.intersectPlane(Hl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>oa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oa||this._lastTargetPosition.distanceToSquared(this.target)>oa?(this.dispatchEvent(Vl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ft/60*this.autoRotateSpeed*e:Ft/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xt.setFromMatrixColumn(t,0),xt.multiplyScalar(-e),this._panOffset.add(xt)}_panUp(e,t){this.screenSpacePanning===!0?xt.setFromMatrixColumn(t,1):(xt.setFromMatrixColumn(t,0),xt.crossVectors(this.object.up,xt)),xt.multiplyScalar(e),this._panOffset.add(xt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;xt.copy(i).sub(this.target);let r=xt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ag(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function wg(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Cg(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ih),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Rg(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=it.DOLLY;break;case Ei.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=it.ROTATE}break;case Ei.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Mo)}function Ig(s){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Lg(s){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(s.preventDefault(),this.dispatchEvent(Mo),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(ih))}function Pg(s){this.enabled!==!1&&this._handleKeyDown(s)}function Dg(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case yi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=it.TOUCH_ROTATE;break;case yi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case yi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=it.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Mo)}function Ug(s){switch(this._trackPointer(s),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=it.NONE}}function Fg(s){this.enabled!==!1&&s.preventDefault()}function Ng(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bg(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Xi=new O,qi=new O,Gl=new De;class Og extends ti{constructor(e,t=1,n=16711680){const i=new Tt,r=e.geometry.attributes.normal.count,a=new gt(r*2*3,3);i.setAttribute("position",a),super(i,new Vn({color:n,toneMapped:!1})),this.object=e,this.size=t,this.type="VertexNormalsHelper",this.matrixAutoUpdate=!1,this.isVertexNormalsHelper=!0,this.update()}update(){this.object.updateMatrixWorld(!0),Gl.getNormalMatrix(this.object.matrixWorld);const e=this.object.matrixWorld,t=this.geometry.attributes.position,n=this.object.geometry;if(n){const i=n.attributes.position,r=n.attributes.normal;let a=0;for(let o=0,l=i.count;o<l;o++)Xi.fromBufferAttribute(i,o).applyMatrix4(e),qi.fromBufferAttribute(r,o),qi.applyMatrix3(Gl).normalize().multiplyScalar(this.size).add(Xi),t.setXYZ(a,Xi.x,Xi.y,Xi.z),a=a+1,t.setXYZ(a,qi.x,qi.y,qi.z),a=a+1}t.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function kg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var la={},vn={},Wl;function So(){if(Wl)return vn;Wl=1,Object.defineProperty(vn,"__esModule",{value:!0}),vn.handleWarning=vn.DecodeWarning=vn.DecodeError=void 0;class s extends Error{constructor(i,r,a){super(r),this.offset=a,this.partiallyDecodedImage={details:{header:i.header,footer:i.footer,imageId:i.identificationField,developerDirectory:i.developerDirectory,extensionArea:i.extensionArea},warnings:i.warnings}}}vn.DecodeError=s;class e extends Error{constructor(i,r){super(i),this.offset=r}}vn.DecodeWarning=e;function t(n,i){if(n.options.strictMode)throw i;n.warnings.push(i)}return vn.handleWarning=t,vn}var $i={},Yi={},Xl;function zg(){if(Xl)return Yi;Xl=1,Object.defineProperty(Yi,"__esModule",{value:!0}),Yi.ByteStreamReader=void 0;class s{constructor(t,n){this.data=t,this._le=n,this.offset=0,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength)}readUint8(){return this.view.getUint8(this.offset++)}readUint16(){const t=this.view.getUint16(this.offset,this._le);return this.offset+=2,t}readUint32(){const t=this.view.getUint32(this.offset,this._le);return this.offset+=4,t}}return Yi.ByteStreamReader=s,Yi}var ji={},ql;function Vg(){if(ql)return ji;ql=1,Object.defineProperty(ji,"__esModule",{value:!0}),ji.readText=void 0;const s=So();function e(t,n,i,r){const a=[];let o=0,l=0;const c=t.reader.offset;for(;l<i;l++){try{o=t.reader.view.getUint8(t.reader.offset)}catch(h){throw h instanceof Error&&h.message==="Offset is outside the bounds of the DataView"&&(0,s.handleWarning)(t,new s.DecodeWarning("EOF while reading text",t.reader.offset)),h}if(!r&&o===0)break;t.reader.offset++,a.push(o)}return t.reader.offset=c+i,n?n.decode(new Uint8Array(a)):String.fromCharCode(...a)}return ji.readText=e,ji}var bn={},$l;function Hg(){if($l)return bn;$l=1,Object.defineProperty(bn,"__esModule",{value:!0}),bn.isValidBitDepth=bn.isValidColorMapDepth=bn.isValidImageType=void 0;function s(n){return n===1||n===2||n===3||n===9||n===10||n===11}bn.isValidImageType=s;function e(n){return n===15||n===16||n===24||n===32}bn.isValidColorMapDepth=e;function t(n,i){return i===1||i===9?n===8:i===3||i===11?n===8||n===16:n===15||n===16||n===24||n===32}return bn.isValidBitDepth=t,bn}var Yl;function Gg(){if(Yl)return $i;Yl=1,Object.defineProperty($i,"__esModule",{value:!0}),$i.decodeTga=void 0;const s=So(),e=zg(),t=Vg(),n=Hg();async function i(v,E={}){const I={reader:new e.ByteStreamReader(v,!0),hasAlpha:!1,ambiguousAlpha:!1,options:E,warnings:[]},b=r(I),_={...I,header:b};_.identificationField=(0,t.readText)(_,void 0,_.header.idLength);const w=_.reader.offset;return _.footer=R(_),_.extensionArea=m(_),_.developerDirectory=M(_),_.reader.offset=w,_.header.colorMap?.type===1&&(_.colorMap=a(_,_.header.colorMap)),_.hasAlpha=_.colorMap&&_.header.colorMap?.depth===32||(_.header.attributeBitsPerPixel>0||_.header.bitDepth===32)&&(_.extensionArea===void 0||_.extensionArea.attributesType>2),_.ambiguousAlpha=_.hasAlpha&&_.header.attributeBitsPerPixel===0,_.image=o(_,_.reader.offset),{image:_.image,details:{header:_.header,imageId:_.identificationField,footer:_.footer,extensionArea:_.extensionArea,developerDirectory:_.developerDirectory},warnings:_.warnings}}$i.decodeTga=i;function r(v){const E=v.reader.readUint8(),I=v.reader.readUint8();let b;I===0||I===1?b=I:((0,s.handleWarning)(v,new s.DecodeWarning("Color map type unrecognized",v.reader.offset-1)),b=2);const _=v.reader.readUint8();if(!(0,n.isValidImageType)(_))throw new s.DecodeError(v,`Invalid image type "${_}"`,v.reader.offset-1);b===1&&_!==1&&_!==9&&(0,s.handleWarning)(v,new s.DecodeWarning(`Image type "${_}" cannot have a color map`,v.reader.offset-2));const w=v.reader.readUint16(),L=v.reader.readUint16(),U=v.reader.readUint8();if(b===1&&(w>=L&&(0,s.handleWarning)(v,new s.DecodeWarning(`Color map origin "${w}" is greater than color map length "${L}"`,v.reader.offset-5)),!(0,n.isValidColorMapDepth)(U)))throw new s.DecodeError(v,`Unsupported color map bit depth "${U}"`,v.reader.offset-1);const N=v.reader.readUint16(),F=v.reader.readUint16(),V=v.reader.readUint16(),q=v.reader.readUint16(),G=v.reader.readUint8();if(!(0,n.isValidBitDepth)(G,_))throw new s.DecodeError(v,`Unsupported TGA bit depth "${G}" with image type ${_}`,16);const Q=v.reader.readUint8(),te=(Q&15)>>0,ge=(Q&48)>>4;return ge===1&&(0,s.handleWarning)(v,new s.DecodeWarning("This image is encoded using a bottom right screen origin, many image editors won't read this correctly",v.reader.offset-1)),ge===3&&(0,s.handleWarning)(v,new s.DecodeWarning("This image is encoded using a top right screen origin, many image editors won't read this correctly",v.reader.offset-1)),{idLength:E,colorMap:b!==0?{type:b,depth:U,length:L,origin:w}:void 0,imageType:_,origin:{x:N,y:F},width:V,height:q,bitDepth:G,imageDescriptor:Q,attributeBitsPerPixel:te,screenOrigin:ge}}function a(v,E){const I=v.reader.offset,b=Math.ceil(E.depth/8);v.reader.offset+=E.length*b;let _;switch(E.depth){case 15:_=u;break;case 16:v.hasAlpha?_=p:_=u;break;case 24:_=g;break;case 32:_=x;break}return(w,L,U,N)=>{const F=U.getUint8(N);return _(w,L,v.reader.view,I+F*b),1}}function o(v,E){const I={width:v.header.width,height:v.header.height,data:new Uint8Array(v.header.width*v.header.height*4)};let b;if(v.colorMap)b=v.colorMap;else switch(v.header.bitDepth){case 8:b=c;break;case 15:b=u;break;case 16:v.header.imageType===11||v.header.imageType===3?b=h:v.hasAlpha?b=p:b=u;break;case 24:b=g;break;case 32:v.hasAlpha?b=x:b=f;break}let _=v.reader.view;if(v.header.imageType&8){const w=l(v);_=new DataView(w.buffer,w.byteOffset,w.length),E=0}switch(v.header.screenOrigin){case 0:{let w=0;for(let L=I.height-1;L>=0;L--){w=v.header.width*L*4;for(let U=0;U<I.width;U++)E+=b(I.data,w,_,E),w+=4}break}case 1:{let w=0;for(let L=I.height-1;L>=0;L--){w=(v.header.width*L+(v.header.width-1))*4;for(let U=0;U<I.width;U++)E+=b(I.data,w,_,E),w-=4}break}case 2:{let w=0;for(let L=0;L<I.height;L++)for(let U=0;U<I.width;U++)E+=b(I.data,w,_,E),w+=4;break}case 3:{let w=0;for(let L=0;L<I.height;L++){w=(v.header.width*L+(v.header.width-1))*4;for(let U=0;U<I.width;U++)E+=b(I.data,w,_,E),w-=4}break}}if(v.ambiguousAlpha&&!v.options.strictMode&&v.options.detectAmbiguousAlphaChannel){let w=!1;for(let L=3;L<I.width*I.height*4;L+=4)I.data[L]>0&&(w=!0);if(!w){(0,s.handleWarning)(v,new s.DecodeWarning("Image has ambiguous alpha and is fully transparent, alpha has been disabled",-1));for(let L=3;L<I.width*I.height*4;L+=4)I.data[L]=255}}return I}function l(v){const E=Math.ceil(v.header.bitDepth/8),I=new Uint8Array(v.header.width*v.header.height*E);let b=0,_=0,w=0,L=0,U=0;for(;w<I.length;)if(b=v.reader.readUint8(),_=(b&127)+1,b&128){for(L=0;L<E;L++)for(b=v.reader.readUint8(),U=0;U<_;U++)I[w+U*E+L]=b;w+=_*E}else{_*=E;for(let N=0;N<_;N++)I[w++]=v.reader.readUint8()}return I}function c(v,E,I,b){return v[E]=I.getUint8(b),v[E+1]=v[E],v[E+2]=v[E],v[E+3]=255,1}function h(v,E,I,b){return v[E]=I.getUint8(b),v[E+1]=v[E],v[E+2]=v[E],v[E+3]=I.getUint8(b+1),2}let d=0;function u(v,E,I,b){return d=I.getUint16(b,!0),v[E]=d>>10&31,v[E+1]=d>>5&31,v[E+2]=d&31,v[E]=v[E]<<3|v[E]>>2,v[E+1]=v[E+1]<<3|v[E+1]>>2,v[E+2]=v[E+2]<<3|v[E+2]>>2,v[E+3]=255,2}function p(v,E,I,b){return d=I.getUint16(b,!0),v[E]=d>>10&31,v[E+1]=d>>5&31,v[E+2]=d&31,v[E]=v[E]<<3|v[E]>>2,v[E+1]=v[E+1]<<3|v[E+1]>>2,v[E+2]=v[E+2]<<3|v[E+2]>>2,v[E+3]=d&32768?0:255,2}function g(v,E,I,b){return v[E]=I.getUint8(b+2),v[E+1]=I.getUint8(b+1),v[E+2]=I.getUint8(b),v[E+3]=255,3}function x(v,E,I,b){return v[E]=I.getUint8(b+2),v[E+1]=I.getUint8(b+1),v[E+2]=I.getUint8(b),v[E+3]=I.getUint8(b+3),4}function f(v,E,I,b){return v[E]=I.getUint8(b+2),v[E+1]=I.getUint8(b+1),v[E+2]=I.getUint8(b),v[E+3]=255,4}function m(v){if(v.footer?.extensionAreaOffset===void 0||v.footer.extensionAreaOffset===0)return;v.reader.offset=v.footer.extensionAreaOffset;const E=v.reader.readUint16();E!==495&&(0,s.handleWarning)(v,new s.DecodeWarning("TGA file is a version other than v2",v.reader.offset-2));const I=(0,t.readText)(v,void 0,41).trim()||void 0,b=(0,t.readText)(v,void 0,324).trim()||void 0,_=S(v),w=(0,t.readText)(v,void 0,41).trim()||void 0,L=A(v),U=(0,t.readText)(v,void 0,41).trim()||void 0,N=v.reader.readUint8()/100,F=(0,t.readText)(v,void 0,2);let V;N===0&&(F===" "||F.length===0)?V=void 0:V=`${N}${F}`;const q=v.reader.readUint8(),G=v.reader.readUint8(),Q=v.reader.readUint8(),te=v.reader.readUint8();let ge;q===0&&G===0&&Q===0&&te===0?ge=void 0:ge=new Uint8Array([G,Q,te,q]);const He=v.reader.readUint16(),Ze=v.reader.readUint16();let Je;Ze===0?Je=void 0:Je=He/Ze;const Qe=v.reader.readUint16(),$=v.reader.readUint16();let K;$===0?K=void 0:K=Qe/$;const de=v.reader.readUint32(),Le=v.reader.readUint32(),_e=v.reader.readUint32(),Be=v.reader.readUint8();return{extensionSize:E,authorName:I,authorComments:b,dateTimestamp:_,jobName:w,jobTime:L,softwareId:U,softwareVersion:V,keyColor:ge,aspectRatio:Je,gamma:K,colorCorrectionOffset:de,postageStampOffset:Le,scanLineOffset:_e,attributesType:Be}}function M(v){if(v.footer?.developerDirectoryOffset===void 0||v.footer.developerDirectoryOffset===0)return[];v.reader.offset=v.footer.developerDirectoryOffset;const E=v.reader.readUint16(),I=[];for(let b=0;b<E;b++){const _=v.reader.readUint16(),w=v.reader.readUint32(),L=v.reader.readUint32();I.push({tag:_,offset:w,length:L})}return I}function S(v){const E=v.reader.readUint16(),I=v.reader.readUint16(),b=v.reader.readUint16(),_=v.reader.readUint16(),w=v.reader.readUint16(),L=v.reader.readUint16();if(!(E===0&&I===0&&b===0&&_===0&&w===0&&L===0))return new Date(b,E,I,_,w,L)}function A(v){const E=v.reader.readUint16(),I=v.reader.readUint16(),b=v.reader.readUint16();if(!(E===0&&I===0&&b===0))return{hours:E,minutes:I,seconds:b}}function R(v){if(v.reader.offset=v.reader.view.byteLength-26+8,(0,t.readText)(v,void 0,17)!=="TRUEVISION-XFILE."||v.reader.readUint8()!==0)return{extensionAreaOffset:0,developerDirectoryOffset:0};v.reader.offset=v.reader.view.byteLength-26;let I=v.reader.readUint32();I>=v.reader.view.byteLength&&((0,s.handleWarning)(v,new s.DecodeWarning(`Extension area offset "${I}" is invalid`,v.reader.offset-4)),I=0);let b=v.reader.readUint32();return b>=v.reader.view.byteLength&&((0,s.handleWarning)(v,new s.DecodeWarning(`Developer directory offset "${b}" is invalid`,v.reader.offset-4)),b=0),{extensionAreaOffset:I,developerDirectoryOffset:b}}return $i}var Ki={},Zi={},yn={},jl;function rh(){if(jl)return yn;jl=1,Object.defineProperty(yn,"__esModule",{value:!0}),yn.handleWarning=yn.EncodeWarning=yn.EncodeError=void 0;class s extends Error{constructor(i,r){super(i),this.offset=r}}yn.EncodeError=s;class e extends Error{constructor(i,r){super(i),this.offset=r}}yn.EncodeWarning=e;function t(n,i){if(n.options.strictMode)throw i;n.warnings.push(i)}return yn.handleWarning=t,yn}var Kl;function Wg(){if(Kl)return Zi;Kl=1,Object.defineProperty(Zi,"__esModule",{value:!0}),Zi.analyze=void 0;const s=rh();function e(a,o={}){const l=[],c=[],h={options:o,warnings:l};if(a.width>65535)throw new s.EncodeError(`Image width is out of range (${a.width} > 65535)`,-1);if(a.height>65535)throw new s.EncodeError(`Image height is out of range (${a.height} > 65535)`,-1);if(a.data.length!==a.width*a.height*4)throw new s.EncodeError(`Provided image data length (${a.data.length}) is not expected length (${a.width*a.height*4})`,Math.min(a.data.length,a.width*a.height*4)-1);if(o.imageId&&o.imageId.length>255)throw new s.EncodeError(`Image ID length is out of range (${o.imageId.length} > 255)`,-1);if(o.origin&&(o.origin.x||0)>65535)throw new s.EncodeError(`X origin is out of range (${o.origin.x} > 65535)`,-1);if(o.origin&&(o.origin.y||0)>65535)throw new s.EncodeError(`Y origin is out of range (${o.origin.y} > 65535)`,-1);if(o.screenOrigin===1&&(0,s.handleWarning)(h,new s.EncodeWarning("This image is encoded using a bottom right screen origin, many image editors won't read this correctly",17)),o.screenOrigin===3&&(0,s.handleWarning)(h,new s.EncodeWarning("This image is encoded using a top right screen origin, many image editors won't read this correctly",17)),o.bitDepth!==void 0&&o.imageType===void 0||o.bitDepth===void 0&&o.imageType!==void 0&&o.imageType>=0)throw new s.EncodeError("Bit depth and image type options must be used together",-1);const d=o.imageType;let u,p;d!==void 0&&(d===-2||d===-1?p=d:u=d);let g=o.bitDepth,x;if(g===24&&t(a)&&(0,s.handleWarning)({options:o,warnings:l},new s.EncodeWarning("Cannot encode 24 bit image without data loss as it contains transparent colors",0)),u===9||u===1){const f=n(a,p);if(!f.colorMap)throw new s.EncodeError("Image has too many colors to encode using a color map",-1);x=f.colorMap}if(!g||p!==void 0){const f=n(a,p);if(g&&g<f.bitDepth)throw new s.EncodeError("Image cannot be encoded using specified bit depth",-1);g=f.bitDepth,u=f.imageType,x=f.colorMap}if(!u)throw new Error("No ImageType set");return{bitDepth:g,imageType:u,colorMap:x,imageId:o.imageId||"",options:o,warnings:l,info:c,image:a}}Zi.analyze=e;function t(a){const l=a.width*a.height*4;let c=!1;for(let h=0;h<l;h+=4)c||(c=a.data[h+3]<255);return c}function n(a,o){const c=a.width*a.height*4;let h=!1,d=!1,u=!1,p=!1;const g=new Set;for(let x=0;x<c;x+=4)h||(h=a.data[x+3]>0&&a.data[x+3]<255),d||(d=a.data[x+3]<255),u||u||(u=!r(a.data[x])||!r(a.data[x+1])||!r(a.data[x+2])||!r(a.data[x+3])),p||(p=a.data[x]!==a.data[x+1]||a.data[x]!==a.data[x+2]),g.size<256&&g.add((a.data[x]<<24)+(a.data[x+1]<<16)+(a.data[x+2]<<8)+a.data[x+3]);if(g.size<255){const x=new Map;let f=0;for(const M of g)x.set(M,f++);let m;return u?d?m={colorToIndexMap:x,bitDepth:32}:m={colorToIndexMap:x,bitDepth:24}:d?m={colorToIndexMap:x,bitDepth:32}:m={colorToIndexMap:x,bitDepth:15},{imageType:i(9,o),bitDepth:8,colorMap:m}}return p?u?d?{imageType:i(10,o),bitDepth:32}:{imageType:i(10,o),bitDepth:24}:d?h?{imageType:i(10,o),bitDepth:32}:{imageType:i(10,o),bitDepth:16}:{imageType:i(10,o),bitDepth:15}:d?{imageType:i(11,o),bitDepth:16}:{imageType:i(11,o),bitDepth:8}}function i(a,o){if(o===void 0)return a;switch(a){case 1:case 9:return o===-2?9:1;case 2:case 10:return o===-2?10:2;case 3:case 11:return o===-2?11:3}}function r(a){return(a>>5&7)===(a&7)}return Zi}var Ji={},Zl;function Xg(){if(Zl)return Ji;Zl=1,Object.defineProperty(Ji,"__esModule",{value:!0}),Ji.ByteStream=void 0;class s{constructor(t,n){this._le=n,this.offset=0,this.array=new Uint8Array(t),this.view=new DataView(this.array.buffer,this.array.byteOffset,this.array.byteLength)}writeUint8(t){this.view.setUint8(this.offset,t),this.offset+=1}writeUint16(t){this.view.setUint16(this.offset,t,this._le),this.offset+=2}assertAtEnd(){if(this.offset!==this.array.length)throw new Error("Writing finished before expected length of stream")}}return Ji.ByteStream=s,Ji}var Qi={},Jl;function qg(){if(Jl)return Qi;Jl=1,Object.defineProperty(Qi,"__esModule",{value:!0}),Qi.encodeRunLengthEncoding=void 0;const s=rh();function e(t,n){const i=Math.ceil(t.bitDepth/8),r=i+1,a=new Uint8Array(t.image.width*t.image.height*r);let o=0,l=0,c=1,h=0,d=!1,u=0,p=0,g=!1;for(let x=i;x<n.length;x+=i){let f=!1;for(h=0;h<i;h++)f||(f=n[l+h]!==n[x+h]);if(f){for(;c>0;){for(d=c===1,g&&d?(u=a[p]&127,u<127?a[p]=u+1:(a[o]=Math.min(c,128)-1,p=o,o++)):(a[o]=Math.min(c,128)-1|(d?0:128),p=o,o++),h=0;h<i;h++)a[o+h]=n[l+h];o+=i,g=d,c-=128}l=x,c=1}else c++}for(;c>0;){for(d=c===1,g&&d?(u=a[p]&127,u<127?a[p]=u+1:(a[o]=Math.min(c,128)-1,p=o,o++)):(a[o]=Math.min(c,128)-1|(d?0:128),p=o,o++),h=0;h<i;h++)a[o+h]=n[l+h];o+=i,c-=128}return o-1>n.length&&(0,s.handleWarning)(t,new s.EncodeWarning("RLE encoded was used but it is larger than unencoded would be",-1)),a.slice(0,o)}return Qi.encodeRunLengthEncoding=e,Qi}var Ql;function $g(){if(Ql)return Ki;Ql=1,Object.defineProperty(Ki,"__esModule",{value:!0}),Ki.encodeTga=void 0;const s=Wg(),e=Xg(),t=qg();async function n(g,x={}){const f=(0,s.analyze)(g,x),m=[];m.push(i(f)),f.imageId.length>0&&m.push(r(f)),f.colorMap&&m.push(a(f)),m.push(o(f));const M=m.reduce((R,v)=>R+v.length,0),S=new Uint8Array(M);let A=0;for(const R of m)S.set(R,A),A+=R.length;return{data:S,warnings:f.warnings,info:f.info}}Ki.encodeTga=n;function i(g){const x=new e.ByteStream(18,!0);x.writeUint8(g.imageId.length),x.writeUint8(g.colorMap?1:0),x.writeUint8(g.imageType),x.writeUint16(0),x.writeUint16(g.colorMap?.colorToIndexMap.size??0),x.writeUint8(g.colorMap?.bitDepth??0),x.writeUint16(g.options.origin?.x||0),x.writeUint16(g.options.origin?.y||0),x.writeUint16(g.image.width),x.writeUint16(g.image.height),x.writeUint8(g.bitDepth);let f=0;g.bitDepth===32&&(f=8);const m=f&15|(g.options.screenOrigin??0)<<4&48;return x.writeUint8(m),x.assertAtEnd(),x.array}function r(g){const x=new e.ByteStream(g.imageId.length,!0);for(let f=0;f<g.imageId.length;f++)x.writeUint8(g.imageId.charCodeAt(f));return x.assertAtEnd(),x.array}function a(g){const x=g.colorMap;if(!x)throw new Error("Cannot write color map undefined");const f=Math.ceil(x.bitDepth/8),m=new e.ByteStream(x.colorToIndexMap.size*f,!0);let M;switch(x.bitDepth){case 15:M=c;break;case 16:M=h;break;case 24:M=u;break;case 32:M=p;break;default:throw new Error(`Unsupported bit depth for color map "${x.bitDepth}"`)}const S=Array.from(x.colorToIndexMap.entries()).sort((A,R)=>A[1]-R[1]).map(A=>A[0]);for(const A of S)M(m,new Uint8Array([A>>24&255,A>>16&255,A>>8&255,A&255]),0);return m.assertAtEnd(),m.array}function o(g){const x=Math.ceil(g.bitDepth/8),f=new e.ByteStream(g.image.width*g.image.height*x,!0);let m=0,M;if(g.colorMap){const S=g.colorMap;M=(A,R,v)=>{const E=S.colorToIndexMap.get((R[v]<<24)+(R[v+1]<<16)+(R[v+2]<<8)+R[v+3]);A.writeUint8(E)}}else switch(g.bitDepth){case 8:if(g.imageType===3||g.imageType===11)M=l;else throw new Error(`Unsupported image type (${g.imageType}) with bit depth (${g.bitDepth})`);break;case 15:M=c;break;case 16:g.imageType===3||g.imageType===11?M=d:M=h;break;case 24:M=u;break;case 32:M=p;break;default:throw new Error("NYI")}switch(g.options.screenOrigin??0){case 0:for(let S=g.image.height-1;S>=0;S--){m=g.image.width*S*4;for(let A=0;A<g.image.width;A++)M(f,g.image.data,m),m+=4}break;case 1:for(let S=g.image.height-1;S>=0;S--){m=(g.image.width*S+(g.image.width-1))*4;for(let A=0;A<g.image.width;A++)M(f,g.image.data,m),m-=4}break;case 2:for(let S=0;S<g.image.height;S++){m=g.image.width*S*4;for(let A=0;A<g.image.width;A++)M(f,g.image.data,m),m+=4}break;case 3:for(let S=0;S<g.image.height;S++){m=(g.image.width*S+(g.image.width-1))*4;for(let A=0;A<g.image.width;A++)M(f,g.image.data,m),m-=4}break}return f.assertAtEnd(),g.imageType&8?(0,t.encodeRunLengthEncoding)(g,f.array):f.array}function l(g,x,f){g.writeUint8(x[f])}function c(g,x,f){g.writeUint16((x[f+0]>>3&31)<<10|(x[f+1]>>3&31)<<5|(x[f+2]>>3&31)<<0)}function h(g,x,f){g.writeUint16((x[f+0]>>3&31)<<10|(x[f+1]>>3&31)<<5|(x[f+2]>>3&31)<<0|(x[f+3]===255?32768:0))}function d(g,x,f){g.writeUint8(x[f]),g.writeUint8(x[f+3])}function u(g,x,f){g.writeUint8(x[f+2]),g.writeUint8(x[f+1]),g.writeUint8(x[f+0])}function p(g,x,f){g.writeUint8(x[f+2]),g.writeUint8(x[f+1]),g.writeUint8(x[f+0]),g.writeUint8(x[f+3])}return Ki}var ec;function Yg(){return ec||(ec=1,function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.encodeTga=s.decodeTga=s.DecodeWarning=s.DecodeError=void 0;var e=So();Object.defineProperty(s,"DecodeError",{enumerable:!0,get:function(){return e.DecodeError}}),Object.defineProperty(s,"DecodeWarning",{enumerable:!0,get:function(){return e.DecodeWarning}});async function t(i,r){return(await Promise.resolve().then(()=>Gg())).decodeTga(i,r)}s.decodeTga=t;async function n(i,r){return(await Promise.resolve().then(()=>$g())).encodeTga(i,r)}s.encodeTga=n}(la)),la}var jg=Yg();const Kg=new Uint32Array([3287280091,1147300610,2044886154,2027892972,1902027934,3347438090,3763270186,3854829911]),Nt=(s,e)=>(s<<(e&31)|s>>>32-(e&31))>>>0,Zg=(s,e)=>(s>>>(e&31)|s<<32-(e&31))>>>0;function Jg(s){const e=new Uint32Array(192),t=new Uint32Array(s);for(let n=0;n<32;n++){const i=Kg[n&7],r=n*6&7;t[r+0&7]=Nt(t[r+0&7]+Nt(i,n)>>>0,1),t[r+1&7]=Nt(t[r+1&7]+Nt(i,n+1)>>>0,3),t[r+2&7]=Nt(t[r+2&7]+Nt(i,n+2)>>>0,6),t[r+3&7]=Nt(t[r+3&7]+Nt(i,n+3)>>>0,11),t[r+4&7]=Nt(t[r+4&7]+Nt(i,n+4)>>>0,13),t[r+5&7]=Nt(t[r+5&7]+Nt(i,n+5)>>>0,17),e.set([t[r+0&7],t[r+1&7],t[r+2&7],t[r+3&7],t[r+4&7],t[r+5&7]],n*6)}return e}function Qg(s,e,t){e[0]=s[3],e[1]=(Zg(s[0],9)-(e[0]^t[0])^t[1])>>>0,e[2]=(Nt(s[1],5)-(e[1]^t[2])^t[3])>>>0,e[3]=(Nt(s[2],3)-(e[2]^t[4])^t[5])>>>0}function ex(s){if(s.length!==32)throw new Error("LEA-256 key must be 32 bytes");const e=new Uint32Array(8);for(let a=0;a<8;a++)e[a]=s[a*4+3]<<24|s[a*4+2]<<16|s[a*4+1]<<8|s[a*4];const t=Jg(e),n=new Uint32Array(4),i=new Uint32Array(4),r=new Uint32Array(6);return function(o){if(o.length%16!==0)throw new Error("LEA-ECB: data length must be a multiple of 16 B");const l=o.slice(),c=new DataView(l.buffer,l.byteOffset);for(let h=0;h<l.length;h+=16){for(let d=0;d<4;d++)n[d]=c.getUint32(h+d*4,!0);for(let d=0;d<32;d++)r.set(t.subarray((31-d)*6,(32-d)*6)),Qg(n,i,r),n.set(i);for(let d=0;d<4;d++)c.setUint32(h+d*4,n[d],!0)}return l}}const no={int16:{size:2,read:(s,e)=>s.getInt16(e,!0)},uint16:{size:2,read:(s,e)=>s.getUint16(e,!0)},uint8:{size:1,read:(s,e)=>s.getUint8(e)},float32:{size:4,read:(s,e)=>s.getFloat32(e,!0)}};function ah(s){let e=0;for(const[,t]of s)e+=no[t].size;return e}function tx(s,e,t){const n=ah(e);if(t+n>s.byteLength)throw new Error(`Cannot read struct at offset ${t}: would require ${n} bytes but only ${s.byteLength-t} bytes available`);const i={};let r=t;for(const[a,o]of e)try{a.startsWith("__")||(i[a]=no[o].read(s,r)),r+=no[o].size}catch(l){throw new Error(`Error reading field '${a}' of type '${o}' at offset ${r}: ${l}`)}return{data:i,newOffset:r}}function ca(s,e,t,n){if(n===0)return{data:[],newOffset:t};const i=ah(e),r=i*n;if(t+r>s.byteLength)return console.error(`Cannot read ${n} structs of size ${i} (total ${r} bytes) at offset ${t}: buffer size is ${s.byteLength}`),null;const a=[];let o=t;for(let l=0;l<n;l++)try{const{data:c,newOffset:h}=tx(s,e,o);a.push(c),o=h}catch(c){return console.error(`Error reading struct ${l}/${n} at offset ${o}:`,c),null}return{data:a,newOffset:o}}const nx=[["node","int16"],["__padding0","int16"],["x","float32"],["y","float32"],["z","float32"]],ix=[["node","int16"],["__padding0","int16"],["nx","float32"],["ny","float32"],["nz","float32"],["bindVertex","int16"],["__padding1","int16"]],sx=[["u","float32"],["v","float32"]],rx=new Uint8Array([204,80,69,19,194,166,87,78,214,154,69,137,191,47,188,217,57,179,179,189,80,189,204,182,133,70,209,214,22,84,224,135]),ax=ex(rx);function ox(s){const e=new Uint8Array([209,115,82,246,210,154,203,39,62,175,89,49,55,179,231,162]),t=new Uint8Array(s.length);let n=94;for(let i=0;i<s.length;i++)t[i]=(s[i]^e[i&15])-n,n=s[i]+61&255;return t}function lx(s){return ax(s)}async function oh(s){const e=await jg.decodeTga(new Uint8Array(s)),{width:t,height:n,data:i}=e.image,r=document.createElement("canvas");r.width=t,r.height=n;const a=r.getContext("2d"),o=a.createImageData(t,n);return o.data.set(i),a.putImageData(o,0,0),r.toDataURL("image/png")}function cx(s){const e=s.x*.5,t=s.y*.5,n=s.z*.5,i=Math.sin(e),r=Math.cos(e),a=Math.sin(t),o=Math.cos(t),l=Math.sin(n),c=Math.cos(n),h=r*o*c+i*a*l,d=i*o*c-r*a*l,u=r*a*c+i*o*l,p=r*o*l-i*a*c;return new $t(d,u,p,h).normalize()}class lh{async load(e){console.groupCollapsed("%cBMDLoader.load","color:lime;font-weight:bold"),console.time("BMDLoader.load total");const t=this.parse(e);console.log("Parsed BMD:",t);const n=[...new Set(t.meshes.map(c=>c.texturePath))];console.log("Required textures:",n);const i=new ns;i.name=t.name;const r=[];t.bones.forEach(c=>{const h=new Dc;h.name=c.name,r.push(h)});const a=[];r.forEach((c,h)=>{const d=t.bones[h].parent;d>=0&&d<r.length?r[d].add(c):a.push(c)}),a.forEach(c=>i.add(c));const o=new xo(r);t.meshes.forEach(c=>{const h=new Tt,d=new cu({color:13421772,side:Kt}),{positions:u,normals:p,uvs:g,skinIndices:x,skinWeights:f}=this.extractGeometry(c);h.setAttribute("position",new gt(u,3)),h.setAttribute("normal",new gt(p,3)),h.setAttribute("uv",new gt(g,2)),h.setAttribute("skinIndex",new go(x,4)),h.setAttribute("skinWeight",new gt(f,4));const m=new iu(h,d);m.name=`mesh_${i.children.length}`,m.userData.texturePath=c.texturePath,m.bind(o),i.add(m)}),t.bones.forEach((c,h)=>{if(c.isDummy||!c.matrixes?.length)return;const d=c.matrixes[0],u=d.position[0]??{x:0,y:0,z:0},p=d.quaternion[0]??{x:0,y:0,z:0,w:1},g=r[h];g.position.set(u.x,u.y,u.z),g.quaternion.set(p.x,p.y,p.z,p.w)});const l=this.createAnimations(t,r);return l.length>0&&(i.animations=l),i.rotation.x=-Math.PI/2,console.timeEnd("BMDLoader.load total"),console.groupEnd(),{group:i,requiredTextures:n}}loadAnimationsFrom(e,t){const n=Array.isArray(t)?t:t.bones,i=this.parse(e);return this.createAnimations(i,n)}parse(e){console.groupCollapsed("parse()"),console.log(`Buffer size: ${e.byteLength} bytes`);const t=e.slice(0),n=new DataView(t);if(new TextDecoder("ascii").decode(t.slice(0,3))!=="BMD")throw new Error("Invalid BMD header");const r=n.getUint8(3);console.log(`BMD version: ${r}`);let a=4;if(r===12||r===15){const f=n.getInt32(4,!0),m=new Uint8Array(t,8,f),M=r===12?ox(m):lx(m);new Uint8Array(t,8,f).set(M),a=8,console.log(`Decrypted ${f} B @8`)}let o=a;const l=()=>{const f=n.getInt16(o,!0);return o+=2,f},c=()=>{const f=n.getUint16(o,!0);return o+=2,f},h=()=>{const f=n.getFloat32(o,!0);return o+=4,f},d=this.readStringFromDataView(n,o,32);o+=32;const u=c(),p=c(),g=c();console.log(`Counts – Meshes:${u}, Bones:${p}, Actions:${g}`);const x={version:r,name:d,meshes:[],bones:[],actions:[]};for(let f=0;f<u;f++){console.log(`Reading mesh ${f+1}/${u} at offset ${o}`);const m=l(),M=l(),S=l(),A=l(),R=l();console.log(`Mesh ${f}: v=${m}, n=${M}, t=${S}, tri=${A}`);const v=ca(n,nx,o,m);if(!v){console.error(`Failed to read vertices for mesh ${f}`);continue}o=v.newOffset;const E=v.data.map(F=>({node:F.node,position:{x:F.x,y:F.y,z:F.z}})),I=ca(n,ix,o,M);if(!I){console.error(`Failed to read normals for mesh ${f}`);continue}o=I.newOffset;const b=I.data.map(F=>({node:F.node,normal:{x:F.nx,y:F.ny,z:F.nz},bindVertex:F.bindVertex})),_=ca(n,sx,o,S);if(!_){console.error(`Failed to read texCoords for mesh ${f}`);continue}o=_.newOffset;const w=_.data,L=[],U=64;for(let F=0;F<A;F++){const V=o;L.push({polygon:n.getUint8(V),vertexIndex:[0,1,2,3].map(q=>n.getInt16(V+2+q*2,!0)),normalIndex:[0,1,2,3].map(q=>n.getInt16(V+10+q*2,!0)),texCoordIndex:[0,1,2,3].map(q=>n.getInt16(V+18+q*2,!0)),lightMapCoord:[],lightMapIndexes:0}),o+=U}const N=this.readStringFromDataView(n,o,32);o+=32,x.meshes.push({texture:R,numVertices:m,numNormals:M,numTexCoords:S,numTriangles:A,vertices:E,normals:b,texCoords:w,triangles:L,texturePath:N})}for(let f=0;f<g;f++){const m=l(),M=n.getUint8(o)>0;if(o+=1,x.actions.push({numAnimationKeys:m,lockPositions:M,positions:[]}),M)for(let S=0;S<m;S++){const A={x:h(),y:h(),z:h()};x.actions[f].positions.push(A)}}for(let f=0;f<p;f++){const m=n.getUint8(o)>0;if(o+=1,m){x.bones.push({name:`dummy_${f}`,parent:-1,isDummy:!0,matrixes:[]});continue}const M=this.readStringFromDataView(n,o,32);o+=32;const S=l(),A={name:M,parent:S,isDummy:!1,matrixes:[]};for(let R=0;R<g;R++){const E=x.actions[R].numAnimationKeys;if(E===0){A.matrixes.push({position:[{x:0,y:0,z:0}],rotation:[{x:0,y:0,z:0}],quaternion:[{x:0,y:0,z:0,w:1}]});continue}const I={position:[],rotation:[],quaternion:[]};for(let b=0;b<E;b++)I.position.push({x:h(),y:h(),z:h()});for(let b=0;b<E;b++)I.rotation.push({x:h(),y:h(),z:h()});I.rotation.forEach(b=>{const _=cx(b);I.quaternion.push({x:_.x,y:_.y,z:_.z,w:_.w})}),A.matrixes.push(I)}x.bones.push(A)}return console.log(`Parse completed. Final offset: ${o}/${t.byteLength}`),console.groupEnd(),x}readStringFromDataView(e,t,n){if(t+n>e.byteLength)return console.warn(`Cannot read string at offset ${t}: would exceed buffer bounds`),"";const i=new Uint8Array(e.buffer,e.byteOffset+t,n),r=i.indexOf(0);return new TextDecoder("ascii").decode(r!==-1?i.subarray(0,r):i)}extractGeometry(e){const t=[],n=[],i=[],r=[],a=[],o=(l,c,h)=>{if(l<0||l>=e.vertices.length||c<0||c>=e.normals.length||h<0||h>=e.texCoords.length)return!1;const d=e.vertices[l],u=e.normals[c],p=e.texCoords[h];return t.push(d.position.x,d.position.y,d.position.z),n.push(u.normal.x,u.normal.y,u.normal.z),i.push(p.u,p.v),r.push(d.node,0,0,0),a.push(1,0,0,0),!0};for(const l of e.triangles){const c=l.vertexIndex,h=l.normalIndex,d=l.texCoordIndex;o(c[0],h[0],d[0]),o(c[2],h[2],d[2]),o(c[1],h[1],d[1]),l.polygon===4&&(o(c[0],h[0],d[0]),o(c[2],h[2],d[2]),o(c[3],h[3],d[3]))}return{positions:t,normals:n,uvs:i,skinIndices:r,skinWeights:a}}createAnimations(e,t){const n=[];for(let r=0;r<e.actions.length;r++){const a=e.actions[r];if(a.numAnimationKeys<=1)continue;const o=(a.numAnimationKeys-1)/24,l=[];for(let c=0;c<e.bones.length;c++){const h=t[c],d=e.bones[c];if(d.isDummy||!d.matrixes[r])continue;const u=d.matrixes[r],p=[],g=[],x=[];for(let f=0;f<a.numAnimationKeys;f++){p.push(f/24);const m=u.position[f],M=u.quaternion[f];g.push(m.x,m.y,m.z),x.push(M.x,M.y,M.z,M.w)}l.push(new ms(`${h.name}.position`,p,g)),l.push(new _s(`${h.name}.quaternion`,p,x))}if(l.length){const c=new eo(`action_${r}`,o,l);c.userData={numAnimationKeys:a.numAnimationKeys},n.push(c)}}return n}readString(e,t,n){if(t+n>e.byteLength)return console.warn(`Cannot read string at offset ${t}: would exceed buffer bounds`),"";const i=new Uint8Array(e.buffer,t,n),r=i.indexOf(0),a=r!==-1?i.slice(0,r):i;return new TextDecoder("ascii",{fatal:!1}).decode(a)}}async function ch(s){const e=new Uint8Array(s),t=e.length;let n=-1;for(let h=20;h<Math.min(30,t-2);h++)if(e[h]===255&&e[h+1]===216&&e[h+2]===255){n=h;break}if(n!==-1)return hx(s,n);const i=new DataView(s);if(t<22)throw new Error("File too small for OZT");const r=i.getInt16(16,!0),a=i.getInt16(18,!0),o=i.getUint8(20),l=22+r*a*4;if(!(r>0&&a>0&&r<=1024&&a<=1024&&o===32&&l<=t))throw new Error("Unsupported OZ? file");return dx(s,r,a)}async function hx(s,e){new DataView(s).getUint8(17);const n=s.slice(e);try{const i=new Blob([n],{type:"image/jpeg"}),r=await createImageBitmap(i),a=Object.assign(document.createElement("canvas"),{width:r.width,height:r.height});return a.getContext("2d").drawImage(r,0,0),r.close(),a.toDataURL("image/png")}catch(i){throw console.error("OZJ decode error:",i),new Error(`Failed to decode JPEG: ${i}`)}}function dx(s,e,t){const n=new Uint8Array(s);let i=22;const r=Object.assign(document.createElement("canvas"),{width:e,height:t}),a=r.getContext("2d"),o=a.createImageData(e,t),l=o.data;for(let c=0;c<t;c++){const h=(t-1-c)*e*4;for(let d=0;d<e;d++){const u=n[i++],p=n[i++],g=n[i++],x=n[i++],f=h+d*4;l[f]=g,l[f+1]=p,l[f+2]=u,l[f+3]=x}}return a.putImageData(o,0,0),r.toDataURL("image/png")}const tc={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class pr{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new Mx(e)}),this.register(function(e){return new Sx(e)}),this.register(function(e){return new wx(e)}),this.register(function(e){return new Cx(e)}),this.register(function(e){return new Rx(e)}),this.register(function(e){return new Ix(e)}),this.register(function(e){return new Ex(e)}),this.register(function(e){return new Tx(e)}),this.register(function(e){return new Ax(e)}),this.register(function(e){return new Lx(e)}),this.register(function(e){return new Px(e)}),this.register(function(e){return new Dx(e)}),this.register(function(e){return new Ux(e)}),this.register(function(e){return new Fx(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,i){const r=new yx,a=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}}const ze={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},ha="KHR_mesh_quantization",qt={};qt[Ot]=ze.NEAREST;qt[fc]=ze.NEAREST_MIPMAP_NEAREST;qt[ts]=ze.NEAREST_MIPMAP_LINEAR;qt[Wt]=ze.LINEAR;qt[Ys]=ze.LINEAR_MIPMAP_NEAREST;qt[Un]=ze.LINEAR_MIPMAP_LINEAR;qt[on]=ze.CLAMP_TO_EDGE;qt[Ri]=ze.REPEAT;qt[sr]=ze.MIRRORED_REPEAT;const nc={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},ux=new Re,ic=12,fx=1179937895,px=2,sc=8,mx=1313821514,gx=5130562;function ss(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function xx(s){return new TextEncoder().encode(s).buffer}function _x(s){return ss(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function vx(s,e,t){const n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let r=0;r<s.itemSize;r++){let a;s.itemSize>4?a=s.array[i*s.itemSize+r]:(r===0?a=s.getX(i):r===1?a=s.getY(i):r===2?a=s.getZ(i):r===3&&(a=s.getW(i)),s.normalized===!0&&(a=cr.normalize(a,s.array))),n.min[r]=Math.min(n.min[r],a),n.max[r]=Math.max(n.max[r],a)}return n}function hh(s){return Math.ceil(s/4)*4}function da(s,e=0){const t=hh(s.byteLength);if(t!==s.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function rc(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function bx(s,e){if(typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}else return new Promise(t=>s.toBlob(t,e))}class yx{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+gr}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const i=this,r=i.buffers,a=i.json;n=i.options;const o=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(o),d=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),d.length>0&&(a.extensionsRequired=d),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0){const u=new FileReader;u.readAsArrayBuffer(c),u.onloadend=function(){const p=da(u.result),g=new DataView(new ArrayBuffer(sc));g.setUint32(0,p.byteLength,!0),g.setUint32(4,gx,!0);const x=da(xx(JSON.stringify(a)),32),f=new DataView(new ArrayBuffer(sc));f.setUint32(0,x.byteLength,!0),f.setUint32(4,mx,!0);const m=new ArrayBuffer(ic),M=new DataView(m);M.setUint32(0,fx,!0),M.setUint32(4,px,!0);const S=ic+f.byteLength+x.byteLength+g.byteLength+p.byteLength;M.setUint32(8,S,!0);const A=new Blob([m,f,x,g,p],{type:"application/octet-stream"}),R=new FileReader;R.readAsArrayBuffer(A),R.onloadend=function(){t(R.result)}}}else if(a.buffers&&a.buffers.length>0){const u=new FileReader;u.readAsDataURL(c),u.onloadend=function(){const p=u.result;a.buffers[0].uri=p,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],i[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new O;for(let i=0,r=e.count;i<r;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new O;for(let r=0,a=n.count;r<a;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(p){return p.colorSpace===Pt?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}e instanceof Jr&&(e=await this.decompressTextureAsync(e)),t instanceof Jr&&(t=await this.decompressTextureAsync(t));const i=e?e.image:null,r=t?t.image:null,a=Math.max(i?i.width:0,r?r.width:0),o=Math.max(i?i.height:0,r?r.height:0),l=rc();l.width=a,l.height=o;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,o);const h=c.getImageData(0,0,a,o);if(i){c.drawImage(i,0,0,a,o);const p=n(e),g=c.getImageData(0,0,a,o).data;for(let x=2;x<g.length;x+=4)h.data[x]=p(g[x]/256)*256}if(r){c.drawImage(r,0,0,a,o);const p=n(t),g=c.getImageData(0,0,a,o).data;for(let x=1;x<g.length;x+=4)h.data[x]=p(g[x]/256)*256}c.putImageData(h,0,0);const u=(e||t).clone();return u.source=new _r(l),u.colorSpace=Sn,u.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),u}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){const a=this.json;a.bufferViews||(a.bufferViews=[]);let o;switch(t){case ze.BYTE:case ze.UNSIGNED_BYTE:o=1;break;case ze.SHORT:case ze.UNSIGNED_SHORT:o=2;break;default:o=4}let l=e.itemSize*o;r===ze.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=hh(i*l),h=new DataView(new ArrayBuffer(c));let d=0;for(let g=n;g<n+i;g++){for(let x=0;x<e.itemSize;x++){let f;e.itemSize>4?f=e.array[g*e.itemSize+x]:(x===0?f=e.getX(g):x===1?f=e.getY(g):x===2?f=e.getZ(g):x===3&&(f=e.getW(g)),e.normalized===!0&&(f=cr.normalize(f,e.array))),t===ze.FLOAT?h.setFloat32(d,f,!0):t===ze.INT?h.setInt32(d,f,!0):t===ze.UNSIGNED_INT?h.setUint32(d,f,!0):t===ze.SHORT?h.setInt16(d,f,!0):t===ze.UNSIGNED_SHORT?h.setUint16(d,f,!0):t===ze.BYTE?h.setInt8(d,f):t===ze.UNSIGNED_BYTE&&h.setUint8(d,f),d+=o}d%l!==0&&(d+=l-d%l)}const u={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(u.target=r),r===ze.ARRAY_BUFFER&&(u.byteStride=l),this.byteOffset+=c,a.bufferViews.push(u),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const a=da(r.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,i(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,i){const r=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let o;if(e.array.constructor===Float32Array)o=ze.FLOAT;else if(e.array.constructor===Int32Array)o=ze.INT;else if(e.array.constructor===Uint32Array)o=ze.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=ze.SHORT;else if(e.array.constructor===Uint16Array)o=ze.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=ze.BYTE;else if(e.array.constructor===Uint8Array)o=ze.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;const l=vx(e,n,i);let c;t!==void 0&&(c=e===t.index?ze.ELEMENT_ARRAY_BUFFER:ze.ARRAY_BUFFER);const h=this.processBufferView(e,o,n,i,c),d={bufferView:h.id,byteOffset:h.byteOffset,componentType:o,count:i,max:l.max,min:l.min,type:a[e.itemSize]};return e.normalized===!0&&(d.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(d)-1}processImage(e,t,n,i="image/png"){if(e!==null){const r=this,a=r.cache,o=r.json,l=r.options,c=r.pending;a.images.has(e)||a.images.set(e,{});const h=a.images.get(e),d=i+":flipY/"+n.toString();if(h[d]!==void 0)return h[d];o.images||(o.images=[]);const u={mimeType:i},p=rc();p.width=Math.min(e.width,l.maxTextureSize),p.height=Math.min(e.height,l.maxTextureSize);const g=p.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,p.height),g.scale(1,-1)),e.data!==void 0){t!==Xt&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const f=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<f.length;m+=4)f[m+0]=e.data[m+0],f[m+1]=e.data[m+1],f[m+2]=e.data[m+2],f[m+3]=e.data[m+3];g.putImageData(new ImageData(f,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,p.width,p.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(bx(p,i).then(f=>r.processBufferViewImage(f)).then(f=>{u.bufferView=f})):u.uri=Ec.getDataURL(p,i);const x=o.images.push(u)-1;return h[d]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:qt[e.magFilter],minFilter:qt[e.minFilter],wrapS:qt[e.wrapS],wrapT:qt[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,i=this.cache,r=this.json;if(i.textures.has(e))return i.textures.get(e);r.textures||(r.textures=[]),e instanceof Jr&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let a=e.userData.mimeType;a==="image/webp"&&(a="image/png");const o={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,a)};e.name&&(o.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,o)});const l=r.textures.push(o)-1;return i.textures.set(e,l),l}async processMaterialAsync(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(ss(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=0,i.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const o=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(o),texCoord:o.channel};this.applyTextureTransform(l,o),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const o={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),i.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){const o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),i.emissiveTexture=c}}if(e.normalMap){const o={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),i.normalTexture=o}if(e.aoMap){const o={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),i.occlusionTexture=o}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===Kt&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),await this._invokeAllAsync(async function(o){o.writeMaterialAsync&&await o.writeMaterialAsync(e,i)});const a=n.materials.push(i)-1;return t.materials.set(e,a),a}async processMeshAsync(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let A=0,R=e.material.length;A<R;A++)i.push(e.material[A].uuid);else i.push(e.material.uuid);const r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);const a=e.geometry;let o;e.isLineSegments?o=ze.LINES:e.isLineLoop?o=ze.LINE_LOOP:e.isLine?o=ze.LINE_STRIP:e.isPoints?o=ze.POINTS:o=e.material.wireframe?ze.LINES:ze.TRIANGLES;const l={},c={},h=[],d=[],u={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},p=a.getAttribute("normal");p!==void 0&&!this.isNormalizedNormalAttribute(p)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(p)));let g=null;for(let A in a.attributes){if(A.slice(0,5)==="morph")continue;const R=a.attributes[A];if(A=u[A]||A.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(A)||(A="_"+A),t.attributes.has(this.getUID(R))){c[A]=t.attributes.get(this.getUID(R));continue}g=null;const E=R.array;A==="JOINTS_0"&&!(E instanceof Uint16Array)&&!(E instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new pt(new Uint16Array(E),R.itemSize,R.normalized)):(E instanceof Uint32Array||E instanceof Int32Array)&&!A.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${A}" converted to type FLOAT.`),g=pr.Utils.toFloat32BufferAttribute(R));const I=this.processAccessor(g||R,a);I!==null&&(A.startsWith("_")||this.detectMeshQuantization(A,R),c[A]=I,t.attributes.set(this.getUID(R),I))}if(p!==void 0&&a.setAttribute("normal",p),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const A=[],R=[],v={};if(e.morphTargetDictionary!==void 0)for(const E in e.morphTargetDictionary)v[e.morphTargetDictionary[E]]=E;for(let E=0;E<e.morphTargetInfluences.length;++E){const I={};let b=!1;for(const _ in a.morphAttributes){if(_!=="position"&&_!=="normal"){b||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),b=!0);continue}const w=a.morphAttributes[_][E],L=_.toUpperCase(),U=a.attributes[_];if(t.attributes.has(this.getUID(w,!0))){I[L]=t.attributes.get(this.getUID(w,!0));continue}const N=w.clone();if(!a.morphTargetsRelative)for(let F=0,V=w.count;F<V;F++)for(let q=0;q<w.itemSize;q++)q===0&&N.setX(F,w.getX(F)-U.getX(F)),q===1&&N.setY(F,w.getY(F)-U.getY(F)),q===2&&N.setZ(F,w.getZ(F)-U.getZ(F)),q===3&&N.setW(F,w.getW(F)-U.getW(F));I[L]=this.processAccessor(N,a),t.attributes.set(this.getUID(U,!0),I[L])}d.push(I),A.push(e.morphTargetInfluences[E]),e.morphTargetDictionary!==void 0&&R.push(v[E])}l.weights=A,R.length>0&&(l.extras={},l.extras.targetNames=R)}const x=Array.isArray(e.material);if(x&&a.groups.length===0)return null;let f=!1;if(x&&a.index===null){const A=[];for(let R=0,v=a.attributes.position.count;R<v;R++)A[R]=R;a.setIndex(A),f=!0}const m=x?e.material:[e.material],M=x?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let A=0,R=M.length;A<R;A++){const v={mode:o,attributes:c};if(this.serializeUserData(a,v),d.length>0&&(v.targets=d),a.index!==null){let I=this.getUID(a.index);(M[A].start!==void 0||M[A].count!==void 0)&&(I+=":"+M[A].start+":"+M[A].count),t.attributes.has(I)?v.indices=t.attributes.get(I):(v.indices=this.processAccessor(a.index,a,M[A].start,M[A].count),t.attributes.set(I,v.indices)),v.indices===null&&delete v.indices}const E=await this.processMaterialAsync(m[M[A].materialIndex]);E!==null&&(v.material=E),h.push(v)}f===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(A){A.writeMesh&&A.writeMesh(e,l)});const S=n.meshes.push(l)-1;return t.meshes.set(r,S),S}detectMeshQuantization(e,t){if(this.extensionsUsed[ha])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const i=e.split("_",1)[0];tc[i]&&tc[i].includes(n)&&(this.extensionsUsed[ha]=!0,this.extensionsRequired[ha]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:cr.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=pr.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,a=[],o=[];for(let c=0;c<r.length;++c){const h=r[c],d=Ye.parseTrackName(h.name);let u=Ye.findNode(t,d.nodeName);const p=nc[d.propertyName];if(d.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(d.objectIndex):u=void 0),!u||!p){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}const g=1;let x=h.values.length/h.times.length;p===nc.morphTargetInfluences&&(x/=u.morphTargetInfluences.length);let f;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(f="CUBICSPLINE",x/=3):h.getInterpolation()===ds?f="STEP":f="LINEAR",o.push({input:this.processAccessor(new pt(h.times,g)),output:this.processAccessor(new pt(h.values,x)),interpolation:f}),a.push({sampler:o.length-1,target:{node:i.get(u),path:p}})}const l={name:e.name||"clip_"+n.animations.length,samplers:o,channels:a};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const a=e.skeleton.bones[0];if(a===void 0)return null;const o=[],l=new Float32Array(r.bones.length*16),c=new qe;for(let d=0;d<r.bones.length;++d)o.push(n.get(r.bones[d])),c.copy(r.boneInverses[d]),c.multiply(e.bindMatrix).toArray(l,d*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new pt(l,16)),joints:o,skeleton:n.get(a)}),i.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const o=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();ss(o,[0,0,0,1])||(r.rotation=o),ss(l,[0,0,0])||(r.translation=l),ss(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),_x(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const o=await this.processMeshAsync(e);o!==null&&(r.mesh=o)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);const a=t.nodes.push(r)-1;if(i.set(e,a),e.children.length>0){const o=[];for(let l=0,c=e.children.length;l<c;l++){const h=e.children[l];if(h.visible||n.onlyVisible===!1){const d=await this.processNodeAsync(h);d!==null&&o.push(d)}}o.length>0&&(r.children=o)}return await this._invokeAllAsync(function(o){o.writeNode&&o.writeNode(e,r)}),a}async processSceneAsync(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const r=[];for(let a=0,o=e.children.length;a<o;a++){const l=e.children[a];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}async processObjectsAsync(e){const t=new hr;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof hr?await this.processSceneAsync(e[i]):n.push(e[i]);n.length>0&&await this.processObjectsAsync(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);await this._invokeAllAsync(function(i){i.afterParse&&i.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}}class Mx{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,i=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(1-e.penumbra)*e.angle,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);const o=i.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}}class Sx{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class Ex{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const a={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(a,e.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const a={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){const a={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(a.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(a,e.clearcoatNormalMap),r.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Tx{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const i=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Ax{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const a={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(a,e.iridescenceMap),r.iridescenceTexture=a}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const a={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(a,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class wx{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const a={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(a,e.transmissionMap),r.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Cx{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const a={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(a,e.thicknessMap),r.thicknessTexture=a}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Rx{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const i=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Ix{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(ux)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.specularIntensityMap){const a={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(a,e.specularIntensityMap),r.specularTexture=a}if(e.specularColorMap){const a={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(a,e.specularColorMap),r.specularColorTexture=a}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Lx{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.sheenRoughnessMap){const a={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(a,e.sheenRoughnessMap),r.sheenRoughnessTexture=a}if(e.sheenColorMap){const a={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(a,e.sheenColorMap),r.sheenColorTexture=a}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Px{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.anisotropyMap){const a={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(a,e.anisotropyMap),r.anisotropyTexture=a}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Dx{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const i=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Ux{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.bumpMap){const a={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(a,e.bumpMap),r.bumpTexture=a}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Fx{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,i=e,r=new Float32Array(i.count*3),a=new Float32Array(i.count*4),o=new Float32Array(i.count*3),l=new qe,c=new O,h=new $t,d=new O;for(let p=0;p<i.count;p++)i.getMatrixAt(p,l),l.decompose(c,h,d),c.toArray(r,p*3),h.toArray(a,p*4),d.toArray(o,p*3);const u={TRANSLATION:n.processAccessor(new pt(r,3)),ROTATION:n.processAccessor(new pt(a,4)),SCALE:n.processAccessor(new pt(o,3))};i.instanceColor&&(u._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:u},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}pr.Utils={insertKeyframe:function(s,e){const n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),a=s.createInterpolant(new s.ValueBufferType(n));let o;if(s.times.length===0){i[0]=e;for(let l=0;l<n;l++)r[l]=0;o=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(a.evaluate(e),0),r.set(s.values,n),o=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(a.evaluate(e),s.values.length),o=i.length-1}else for(let l=0;l<s.times.length;l++){if(Math.abs(s.times[l]-e)<.001)return l;if(s.times[l]<e&&s.times[l+1]>e){i.set(s.times.slice(0,l+1),0),i[l+1]=e,i.set(s.times.slice(l+1),l+2),r.set(s.values.slice(0,(l+1)*n),0),r.set(a.evaluate(e),(l+1)*n),r.set(s.values.slice((l+1)*n),(l+2)*n),o=l+1;break}}return s.times=i,s.values=r,o},mergeMorphTargetTracks:function(s,e){const t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let a=i[r];const o=Ye.parseTrackName(a.name),l=Ye.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(rr)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let d;if(n[l.uuid]===void 0){d=a.clone();const p=new d.ValueBufferType(c*d.times.length);for(let g=0;g<d.times.length;g++)p[g*c+h]=d.values[g];d.name=(o.nodeName||"")+".morphTargetInfluences",d.values=p,n[l.uuid]=d,t.push(d);continue}const u=a.createInterpolant(new a.ValueBufferType(1));d=n[l.uuid];for(let p=0;p<d.times.length;p++)d.values[p*c+h]=u.evaluate(d.times[p]);for(let p=0;p<a.times.length;p++){const g=this.insertKeyframe(d,a.times[p]);d.values[g*c+h]=a.values[p]}}return s.tracks=t,s},toFloat32BufferAttribute:function(s){const e=new pt(new Float32Array(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return e.array.set(s.array),e;for(let t=0,n=s.count;t<n;t++)for(let i=0;i<s.itemSize;i++)e.setComponent(t,i,s.getComponent(t,i));return e}};function $s(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ua={exports:{}},ac;function Nx(){return ac||(ac=1,function(s,e){(function(t){s.exports=t()})(function(){return function t(n,i,r){function a(c,h){if(!i[c]){if(!n[c]){var d=typeof $s=="function"&&$s;if(!h&&d)return d(c,!0);if(o)return o(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var p=i[c]={exports:{}};n[c][0].call(p.exports,function(g){var x=n[c][1][g];return a(x||g)},p,p.exports,t,n,i,r)}return i[c].exports}for(var o=typeof $s=="function"&&$s,l=0;l<r.length;l++)a(r[l]);return a}({1:[function(t,n,i){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}n.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(h){if(!o(h)||h<0||isNaN(h))throw TypeError("n must be a positive number");return this._maxListeners=h,this},r.prototype.emit=function(h){var d,u,p,g,x,f;if(this._events||(this._events={}),h==="error"&&(!this._events.error||l(this._events.error)&&!this._events.error.length)){if(d=arguments[1],d instanceof Error)throw d;var m=new Error('Uncaught, unspecified "error" event. ('+d+")");throw m.context=d,m}if(u=this._events[h],c(u))return!1;if(a(u))switch(arguments.length){case 1:u.call(this);break;case 2:u.call(this,arguments[1]);break;case 3:u.call(this,arguments[1],arguments[2]);break;default:g=Array.prototype.slice.call(arguments,1),u.apply(this,g)}else if(l(u))for(g=Array.prototype.slice.call(arguments,1),f=u.slice(),p=f.length,x=0;x<p;x++)f[x].apply(this,g);return!0},r.prototype.addListener=function(h,d){var u;if(!a(d))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",h,a(d.listener)?d.listener:d),this._events[h]?l(this._events[h])?this._events[h].push(d):this._events[h]=[this._events[h],d]:this._events[h]=d,l(this._events[h])&&!this._events[h].warned&&(c(this._maxListeners)?u=r.defaultMaxListeners:u=this._maxListeners,u&&u>0&&this._events[h].length>u&&(this._events[h].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[h].length),typeof console.trace=="function"&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(h,d){if(!a(d))throw TypeError("listener must be a function");var u=!1;function p(){this.removeListener(h,p),u||(u=!0,d.apply(this,arguments))}return p.listener=d,this.on(h,p),this},r.prototype.removeListener=function(h,d){var u,p,g,x;if(!a(d))throw TypeError("listener must be a function");if(!this._events||!this._events[h])return this;if(u=this._events[h],g=u.length,p=-1,u===d||a(u.listener)&&u.listener===d)delete this._events[h],this._events.removeListener&&this.emit("removeListener",h,d);else if(l(u)){for(x=g;x-- >0;)if(u[x]===d||u[x].listener&&u[x].listener===d){p=x;break}if(p<0)return this;u.length===1?(u.length=0,delete this._events[h]):u.splice(p,1),this._events.removeListener&&this.emit("removeListener",h,d)}return this},r.prototype.removeAllListeners=function(h){var d,u;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[h]&&delete this._events[h],this;if(arguments.length===0){for(d in this._events)d!=="removeListener"&&this.removeAllListeners(d);return this.removeAllListeners("removeListener"),this._events={},this}if(u=this._events[h],a(u))this.removeListener(h,u);else if(u)for(;u.length;)this.removeListener(h,u[u.length-1]);return delete this._events[h],this},r.prototype.listeners=function(h){var d;return!this._events||!this._events[h]?d=[]:a(this._events[h])?d=[this._events[h]]:d=this._events[h].slice(),d},r.prototype.listenerCount=function(h){if(this._events){var d=this._events[h];if(a(d))return 1;if(d)return d.length}return 0},r.listenerCount=function(h,d){return h.listenerCount(d)};function a(h){return typeof h=="function"}function o(h){return typeof h=="number"}function l(h){return typeof h=="object"&&h!==null}function c(h){return h===void 0}},{}],2:[function(t,n,i){var r,a,o,l,c;c=navigator.userAgent.toLowerCase(),l=navigator.platform.toLowerCase(),r=c.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],o=r[1]==="ie"&&document.documentMode,a={name:r[1]==="version"?r[3]:r[1],version:o||parseFloat(r[1]==="opera"&&r[4]?r[4]:r[2]),platform:{name:c.match(/ip(?:ad|od|hone)/)?"ios":(c.match(/(?:webos|android)/)||l.match(/mac|win|linux/)||["other"])[0]}},a[a.name]=!0,a[a.name+parseInt(a.version,10)]=!0,a.platform[a.platform.name]=!0,n.exports=a},{}],3:[function(t,n,i){var r,a,o,l=function(u,p){for(var g in p)c.call(p,g)&&(u[g]=p[g]);function x(){this.constructor=u}return x.prototype=p.prototype,u.prototype=new x,u.__super__=p.prototype,u},c={}.hasOwnProperty,h=[].indexOf||function(u){for(var p=0,g=this.length;p<g;p++)if(p in this&&this[p]===u)return p;return-1},d=[].slice;r=t("events").EventEmitter,o=t("./browser.coffee"),a=function(u){var p,g;l(x,u),p={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},g={delay:500,copy:!1};function x(f){var m,M,S;this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(f);for(M in p)S=p[M],(m=this.options)[M]==null&&(m[M]=S)}return x.prototype.setOption=function(f,m){if(this.options[f]=m,this._canvas!=null&&(f==="width"||f==="height"))return this._canvas[f]=m},x.prototype.setOptions=function(f){var m,M,S;M=[];for(m in f)c.call(f,m)&&(S=f[m],M.push(this.setOption(m,S)));return M},x.prototype.addFrame=function(f,m){var M,S;m==null&&(m={}),M={},M.transparent=this.options.transparent;for(S in g)M[S]=m[S]||g[S];if(this.options.width==null&&this.setOption("width",f.width),this.options.height==null&&this.setOption("height",f.height),typeof ImageData<"u"&&ImageData!==null&&f instanceof ImageData)M.data=f.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!==null&&f instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!==null&&f instanceof WebGLRenderingContext)m.copy?M.data=this.getContextData(f):M.context=f;else if(f.childNodes!=null)m.copy?M.data=this.getImageData(f):M.image=f;else throw new Error("Invalid image");return this.frames.push(M)},x.prototype.render=function(){var f,m,M;if(this.running)throw new Error("Already running");if(this.options.width==null||this.options.height==null)throw new Error("Width and height must be set prior to rendering");if(this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(function(){var S,A,R;for(R=[],S=0,A=this.frames.length;0<=A?S<A:S>A;0<=A?++S:--S)R.push(null);return R}).call(this),m=this.spawnWorkers(),this.options.globalPalette===!0)this.renderNextFrame();else for(f=0,M=m;0<=M?f<M:f>M;0<=M?++f:--f)this.renderNextFrame();return this.emit("start"),this.emit("progress",0)},x.prototype.abort=function(){for(var f;f=this.activeWorkers.shift(),f!=null;)this.log("killing active worker"),f.terminate();return this.running=!1,this.emit("abort")},x.prototype.spawnWorkers=function(){var f,m,M;return f=Math.min(this.options.workers,this.frames.length),(function(){M=[];for(var S=m=this.freeWorkers.length;m<=f?S<f:S>f;m<=f?S++:S--)M.push(S);return M}).apply(this).forEach(function(S){return function(A){var R;return S.log("spawning worker "+A),R=new Worker(S.options.workerScript),R.onmessage=function(v){return S.activeWorkers.splice(S.activeWorkers.indexOf(R),1),S.freeWorkers.push(R),S.frameFinished(v.data)},S.freeWorkers.push(R)}}(this)),f},x.prototype.frameFinished=function(f){var m,M;if(this.log("frame "+f.index+" finished - "+this.activeWorkers.length+" active"),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[f.index]=f,this.options.globalPalette===!0&&(this.options.globalPalette=f.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(m=1,M=this.freeWorkers.length;1<=M?m<M:m>M;1<=M?++m:--m)this.renderNextFrame();return h.call(this.imageParts,null)>=0?this.renderNextFrame():this.finishRendering()},x.prototype.finishRendering=function(){var f,m,M,S,A,R,v,E,I,b,_,w,L,U,N,F;for(E=0,U=this.imageParts,A=0,I=U.length;A<I;A++)m=U[A],E+=(m.data.length-1)*m.pageSize+m.cursor;for(E+=m.pageSize-m.cursor,this.log("rendering finished - filesize "+Math.round(E/1e3)+"kb"),f=new Uint8Array(E),w=0,N=this.imageParts,R=0,b=N.length;R<b;R++)for(m=N[R],F=m.data,M=v=0,_=F.length;v<_;M=++v)L=F[M],f.set(L,w),M===m.data.length-1?w+=m.cursor:w+=m.pageSize;return S=new Blob([f],{type:"image/gif"}),this.emit("finished",S,f)},x.prototype.renderNextFrame=function(){var f,m,M;if(this.freeWorkers.length===0)throw new Error("No free workers");if(!(this.nextFrame>=this.frames.length))return f=this.frames[this.nextFrame++],M=this.freeWorkers.shift(),m=this.getTask(f),this.log("starting frame "+(m.index+1)+" of "+this.frames.length),this.activeWorkers.push(M),M.postMessage(m)},x.prototype.getContextData=function(f){return f.getImageData(0,0,this.options.width,this.options.height).data},x.prototype.getImageData=function(f){var m;return this._canvas==null&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),m=this._canvas.getContext("2d"),m.setFill=this.options.background,m.fillRect(0,0,this.options.width,this.options.height),m.drawImage(f,0,0),this.getContextData(m)},x.prototype.getTask=function(f){var m,M;if(m=this.frames.indexOf(f),M={index:m,last:m===this.frames.length-1,delay:f.delay,transparent:f.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:o.name==="chrome"},f.data!=null)M.data=f.data;else if(f.context!=null)M.data=this.getContextData(f.context);else if(f.image!=null)M.data=this.getImageData(f.image);else throw new Error("Invalid frame");return M},x.prototype.log=function(){var f;if(f=1<=arguments.length?d.call(arguments,0):[],!!this.options.debug)return console.log.apply(console,f)},x}(r),n.exports=a},{"./browser.coffee":2,events:1}]},{},[3])(3)})}(ua)),ua.exports}var Bx=Nx();const dh=kg(Bx),uh="/muonline-bmd-viewer/app/assets/gif.worker-CjkyQP34.js";function Et(){return window.electronAPI?.isElectron===!0}function er(s){return!Et()||!window.electronAPI?null:window.electronAPI.getFilePath(s)}async function Ox(s){return!Et()||!window.electronAPI?(console.warn("openFileDialog is only available in Electron"),null):window.electronAPI.openFile({filters:s})}async function fh(){return!Et()||!window.electronAPI?(console.warn("openDirectoryDialog is only available in Electron"),null):window.electronAPI.openDirectory()}async function gs(s){return!Et()||!window.electronAPI?(console.warn("readFileFromPath is only available in Electron"),null):window.electronAPI.readFile(s)}async function ph(s,e){return!Et()||!window.electronAPI?(console.warn("searchTextures is only available in Electron"),{}):window.electronAPI.searchTextures(s,e)}function io(s,e){const t=new Blob([e]);return new File([t],s)}async function so(s,e){if(!Et()||!window.electronAPI)return console.warn("autoSearchTextures is only available in Electron"),{};if(!s||e.length===0)return console.warn("autoSearchTextures: invalid params",{bmdFilePath:s,requiredTextures:e}),{};const t=Math.max(s.lastIndexOf("/"),s.lastIndexOf("\\")),n=s.substring(0,t);let i=await window.electronAPI.searchTextures(n,e);const r=Object.keys(i).length,a=e.length;if(r<a){console.log(`[Texture Search] Found ${r}/${a} textures in current directory, searching parent directory...`);const o=Math.max(n.lastIndexOf("/"),n.lastIndexOf("\\"));if(o>0){const l=n.substring(0,o),c=e.filter(h=>{const d=h.split(/[\\/]/).pop().toLowerCase().replace(/\.[^.]+$/,"");return!i[d]});if(c.length>0){const h=await window.electronAPI.searchTextures(l,c);i={...i,...h};const d=Object.keys(i).length;console.log(`[Texture Search] After parent search: ${d}/${a} textures found`)}}}return i}const oc=Object.freeze(Object.defineProperty({__proto__:null,autoSearchTextures:so,createFileFromElectronData:io,getFilePathFromFile:er,isElectron:Et,openDirectoryDialog:fh,openFileDialog:Ox,readFileFromPath:gs,searchTextures:ph},Symbol.toStringTag,{value:"Module"})),lc=new Uint8Array([252,207,171]);function kx(s){for(let e=0;e<s.length;e++)s[e]^=lc[e%lc.length]}function fa(s,e,t){if(e+t>s.byteLength)return"";const n=new Uint8Array(s.buffer,s.byteOffset+e,t),i=n.indexOf(0),r=i>=0?n.subarray(0,i):n;return new TextDecoder("windows-1252",{fatal:!1}).decode(r).trim()}function cc(s){return s.replace(/\\/g,"/").replace(/^\/+/,"")}function zx(s,e){const t=cc(s.trim()),n=cc(e.trim());return n?!t||n.includes("/")?n:t.endsWith("/")?`${t}${n}`:`${t}/${n}`:""}function Vx(s){const e=new DataView(s);if(e.byteLength<8)return[];const t=e.getInt32(0,!0);if(t<=0)return[];const n=Math.floor((e.byteLength-8)/t);if(n<=0)return[];const i=[];let r=4;for(let a=0;a<t&&r+n<=e.byteLength-4;a++){const o=new Uint8Array(s,r,n),l=new Uint8Array(o);kx(l);const c=new DataView(l.buffer,l.byteOffset,l.byteLength),h=c.getInt32(0,!0),d=c.getUint16(4,!0),u=c.getUint16(6,!0),p=fa(c,8,260),g=fa(c,268,260),x=fa(c,528,64),f=c.getUint8(602),m=c.getUint8(603),M=zx(p,g);i.push({index:h,group:d,id:u,modelFolder:p,modelName:g,itemName:x,modelPath:M,width:f,height:m}),r+=n}return i}let Hx=class extends ti{skinned;size;_vertex=new O;_skinnedVertex=new O;_normal=new O;_indices;constructor(e,t,n){const r=e.geometry.getAttribute("position"),a=r?r.count:0,l=a>0?Math.min(a,2e3):0,c=new Uint32Array(l||0);for(let p=0;p<l;p++)c[p]=Math.floor(p/l*a);const h=new Float32Array(c.length*2*3),d=new Tt;d.setAttribute("position",new pt(h,3));const u=new Vn({color:n,toneMapped:!1});super(d,u),this.skinned=e,this.size=t,this._indices=c,this.matrixAutoUpdate=!1}update(){const e=this.skinned,t=e.geometry,n=t.getAttribute("position"),i=t.getAttribute("normal"),r=this.geometry.getAttribute("position");if(!n||!i||!r||!this._indices.length)return;e.updateMatrixWorld(!0);const a=e.matrixWorld,o=new De().getNormalMatrix(a),l=this.size,c=this._vertex,h=this._skinnedVertex,d=this._normal;for(let u=0;u<this._indices.length;u++){const p=this._indices[u];c.fromBufferAttribute(n,p),h.copy(c),e.applyBoneTransform(p,h),h.applyMatrix4(a),d.fromBufferAttribute(i,p),d.applyMatrix3(o).normalize().multiplyScalar(l);const g=u*2;r.setXYZ(g,h.x,h.y,h.z),r.setXYZ(g+1,h.x+d.x,h.y+d.y,h.z+d.z)}r.needsUpdate=!0,this.matrixWorld.identity()}};const Gx=[".jpg",".jpeg",".png",".tga",".ozj",".ozt"],Wx=[{value:1,label:"Dark Wizard"},{value:201,label:"Soul Master"},{value:301,label:"Grand Master"},{value:401,label:"Soul Wizard"},{value:2,label:"Dark Knight"},{value:202,label:"Blade Knight"},{value:302,label:"Blade Master"},{value:402,label:"Dragon Knight"},{value:3,label:"Fairy Elf"},{value:203,label:"Muse Elf"},{value:303,label:"High Elf"},{value:403,label:"Noble Elf"},{value:4,label:"Magic Gladiator"},{value:304,label:"Duel Master"},{value:404,label:"Magic Knight"},{value:5,label:"Dark Lord"},{value:305,label:"Lord Emperor"},{value:405,label:"Empire Lord"},{value:6,label:"Summoner"},{value:206,label:"Bloody Summoner"},{value:306,label:"Dimension Master"},{value:406,label:"Dimension Summoner"},{value:7,label:"Rage Fighter"},{value:307,label:"Fist Master"},{value:407,label:"Fist Blazer"},{value:8,label:"Glow Lancer"},{value:308,label:"Mirage Lancer"},{value:408,label:"Shining Lancer"},{value:9,label:"Rune Mage"},{value:209,label:"Rune Spell Master"},{value:309,label:"Grand Rune Master"},{value:409,label:"Majestic Rune Wizard"},{value:10,label:"Slayer"},{value:210,label:"Royal Slayer"},{value:310,label:"Master Slayer"},{value:410,label:"Slaughterer"},{value:11,label:"Gun Crusher"},{value:211,label:"Gun Breaker"},{value:311,label:"Master Gun Breaker"},{value:411,label:"Heist Gun Crasher"},{value:12,label:"White Wizard"},{value:212,label:"Light Master"},{value:312,label:"Shine Wizard"},{value:412,label:"Shine Master"},{value:13,label:"Mage"},{value:213,label:"Wo Mage"},{value:313,label:"Arch Mage"},{value:413,label:"Mystic Mage"},{value:14,label:"Illusion Knight"},{value:214,label:"Mirage Knight"},{value:314,label:"Illusion Master"},{value:414,label:"Mystic Knight"},{value:15,label:"Alchemist"},{value:215,label:"Alchemic Master"},{value:315,label:"Alchemic Force"},{value:415,label:"Creator"}];function _i(s){let e=s.replace(/\\/g,"/").replace(/^\/+/,"");return e.toLowerCase().startsWith("data/")&&(e=e.slice(5)),e.toLowerCase()}function hc(s){return(s.replace(/\\/g,"/").split("/").pop()||"").toLowerCase().replace(/\.[^.]+$/,"")}function es(s){const e=s.toLowerCase(),t=e.lastIndexOf(".");return t>=0?e.slice(t):""}function Xx(s){return s>=400?s-400:s>=300?s-300:s>=200?s-200:s}function qx(s){return s.toString().padStart(2,"0")}class $x{scene;camera;renderer;controls;clock=new Xc;ambientLight;directionalLight;mixer=null;currentAction=null;bmdLoader=new lh;textureLoader=new zc;dataFiles=new Map;textureIndex=new Map;dataRootPath=null;itemDefinitions=[];itemByKey=new Map;textureCache=new Map;electronTextureMap=new Map;missingDataPaths=new Set;characterRoot=null;baseSkeleton=null;baseBindMatrix=null;characterOffset=new O;characterHeightOffset=80;hasFramed=!1;lastClassValue=null;currentClassValue=null;playerAnimations=null;animationSpeed=.2;selectedAnimationIndex=null;characterScale=1;itemLevel=0;itemGlowColor=new Re(1,1,1);itemIsExcellent=!1;itemIsAncient=!1;itemExcellentIntensity=1;itemShaderMaterials=new Set;skeletonHelper=null;boundingBoxHelper=null;axesHelper=null;normalHelpers=[];normalsVisible=!1;normalsUpdateCounter=0;isRecordingGif=!1;meshRefs=[];gridHelper=null;isActive=!0;isAutoRotating=!0;userIsInteracting=!1;buildToken=0;containerEl;dataDropZone;dataInput;dataStatus;classSelect;helmSelect;armorSelect;pantsSelect;glovesSelect;bootsSelect;leftWeaponSelect;rightWeaponSelect;wingSelect;animationSelect;autoRotateCheckbox;speedSlider;speedValueEl;scaleSlider;scaleValueEl;itemLevelSlider;itemLevelValueEl;itemExcellentCheckbox;itemAncientCheckbox;itemExcellentIntensitySlider;itemExcellentIntensityValueEl;exportGifBtn;gifWidthInput;gifHeightInput;gifDelayInput;gifFrameMultiplierInput;blendingBox;blendingList;showSkeletonCheckbox;wireframeCheckbox;showBoundingBoxCheckbox;showAxesCheckbox;showNormalsCheckbox;bgColorInput;brightnessSlider;brightnessLabel;statusEl;constructor(){this.initThree(),this.initUI(),this.animate(performance.now())}setActive(e){this.isActive=e,e&&this.refreshViewport()}initThree(){const e=document.getElementById("character-canvas-container");if(!e)throw new Error("#character-canvas-container not found");this.containerEl=e,this.scene=new hr,this.scene.background=new Re(2830134),this.camera=new Gt(75,e.clientWidth/e.clientHeight,.1,1e4),this.camera.position.set(0,200,400),this.renderer=new nh({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement),window.addEventListener("resize",()=>{this.refreshViewport()}),this.controls=new sh(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.addEventListener("start",()=>{this.userIsInteracting=!0}),this.controls.addEventListener("end",()=>{this.userIsInteracting=!1}),this.ambientLight=new Wc(16777215,.7),this.directionalLight=new Gc(16777215,1.5),this.directionalLight.position.set(5,10,7.5),this.scene.add(this.ambientLight,this.directionalLight),this.gridHelper=new Yc(500,10),this.scene.add(this.gridHelper)}initUI(){this.dataDropZone=document.getElementById("data-drop-zone"),this.dataInput=document.getElementById("data-folder-input"),this.dataStatus=document.getElementById("data-folder-status"),this.classSelect=document.getElementById("character-class-select"),this.helmSelect=document.getElementById("character-helm-select"),this.armorSelect=document.getElementById("character-armor-select"),this.pantsSelect=document.getElementById("character-pants-select"),this.glovesSelect=document.getElementById("character-gloves-select"),this.bootsSelect=document.getElementById("character-boots-select"),this.leftWeaponSelect=document.getElementById("character-left-weapon-select"),this.rightWeaponSelect=document.getElementById("character-right-weapon-select"),this.wingSelect=document.getElementById("character-wing-select"),this.animationSelect=document.getElementById("character-animation-select"),this.autoRotateCheckbox=document.getElementById("character-auto-rotate"),this.speedSlider=document.getElementById("character-speed-slider"),this.speedValueEl=document.getElementById("character-speed-value"),this.scaleSlider=document.getElementById("character-scale-slider"),this.scaleValueEl=document.getElementById("character-scale-value"),this.itemLevelSlider=document.getElementById("character-item-level"),this.itemLevelValueEl=document.getElementById("character-item-level-value"),this.itemExcellentCheckbox=document.getElementById("character-item-excellent"),this.itemAncientCheckbox=document.getElementById("character-item-ancient"),this.itemExcellentIntensitySlider=document.getElementById("character-excellent-intensity"),this.itemExcellentIntensityValueEl=document.getElementById("character-excellent-intensity-value"),this.exportGifBtn=document.getElementById("character-export-gif-btn"),this.gifWidthInput=document.getElementById("character-gif-width-input"),this.gifHeightInput=document.getElementById("character-gif-height-input"),this.gifDelayInput=document.getElementById("character-gif-delay-input"),this.gifFrameMultiplierInput=document.getElementById("character-gif-frame-multiplier-input"),this.blendingBox=document.getElementById("character-blending-controls"),this.blendingList=document.getElementById("character-blending-container"),this.showSkeletonCheckbox=document.getElementById("character-show-skeleton"),this.wireframeCheckbox=document.getElementById("character-wireframe"),this.showBoundingBoxCheckbox=document.getElementById("character-show-bbox"),this.showAxesCheckbox=document.getElementById("character-show-axes"),this.showNormalsCheckbox=document.getElementById("character-show-normals"),this.bgColorInput=document.getElementById("character-bg-color"),this.brightnessSlider=document.getElementById("character-brightness-slider"),this.brightnessLabel=document.getElementById("character-brightness-label"),this.statusEl=document.getElementById("character-status"),this.autoRotateCheckbox.addEventListener("change",()=>{this.isAutoRotating=this.autoRotateCheckbox.checked}),this.autoRotateCheckbox.checked=!1,this.isAutoRotating=this.autoRotateCheckbox.checked,this.speedSlider.value=this.animationSpeed.toString(),this.speedValueEl.textContent=`${this.animationSpeed.toFixed(2)}x`,this.speedSlider.addEventListener("input",t=>{const n=parseFloat(t.target.value);this.speedValueEl.textContent=`${n.toFixed(2)}x`,this.setAnimationSpeed(n)}),this.setAnimationSpeed(this.animationSpeed),this.scaleSlider.value=this.characterScale.toString(),this.scaleValueEl.textContent=`${this.characterScale.toFixed(2)}x`,this.scaleSlider.addEventListener("input",t=>{const n=parseFloat(t.target.value);this.scaleValueEl.textContent=`${n.toFixed(2)}x`,this.setCharacterScale(n)}),this.itemLevelSlider.value=this.itemLevel.toString(),this.itemLevelValueEl.textContent=`+${this.itemLevel}`,this.itemLevelSlider.addEventListener("input",t=>{const n=parseInt(t.target.value,10)||0;this.itemLevel=Math.min(Math.max(n,0),15),this.itemLevelValueEl.textContent=`+${this.itemLevel}`,this.updateItemShaderParams()}),this.itemExcellentCheckbox.checked=!1,this.itemAncientCheckbox.checked=!1,this.itemExcellentCheckbox.addEventListener("change",()=>{this.itemIsExcellent=this.itemExcellentCheckbox.checked,this.updateItemShaderParams()}),this.itemAncientCheckbox.addEventListener("change",()=>{this.itemIsAncient=this.itemAncientCheckbox.checked,this.updateItemShaderParams()}),this.itemExcellentIntensitySlider.value=this.itemExcellentIntensity.toString(),this.itemExcellentIntensityValueEl.textContent=`${this.itemExcellentIntensity.toFixed(2)}x`,this.itemExcellentIntensitySlider.addEventListener("input",t=>{const n=parseFloat(t.target.value);this.itemExcellentIntensity=Math.min(Math.max(n,0),2.5),this.itemExcellentIntensityValueEl.textContent=`${this.itemExcellentIntensity.toFixed(2)}x`,this.updateItemShaderParams()}),this.exportGifBtn.addEventListener("click",()=>this.exportGif()),this.showSkeletonCheckbox.addEventListener("change",()=>{this.updateSkeletonHelperState()}),this.wireframeCheckbox.addEventListener("change",()=>{this.applyWireframeState()}),this.showBoundingBoxCheckbox.addEventListener("change",()=>{this.updateBoundingBoxHelperState()}),this.showAxesCheckbox.addEventListener("change",()=>{this.updateAxesHelperState()}),this.showNormalsCheckbox.addEventListener("change",()=>{this.updateNormalsHelpersState()}),this.bgColorInput.addEventListener("input",t=>{const n=t.target.value;this.scene.background=new Re(n),this.containerEl.style.backgroundColor=n}),this.bgColorInput.value="#2b2f36",this.scene.background=new Re(2830134),this.containerEl.style.backgroundColor="#2b2f36",this.brightnessSlider.addEventListener("input",t=>{const n=parseFloat(t.target.value);this.brightnessLabel.textContent=`Brightness: ${n.toFixed(2)}×`,this.setBrightness(n)}),this.brightnessSlider.value="2.0",this.brightnessLabel.textContent="Brightness: 2.00×",this.setBrightness(2),this.populateClassSelect(),this.bindSelectChanges(),((t,n)=>{t.addEventListener("click",()=>this.handleDataSelectClick(n)),t.addEventListener("dragover",i=>{i.preventDefault(),t.classList.add("drag-over")}),t.addEventListener("dragleave",()=>t.classList.remove("drag-over")),t.addEventListener("drop",i=>{i.preventDefault(),t.classList.remove("drag-over"),i.dataTransfer?.files&&i.dataTransfer.files.length>0&&this.loadDataFolder(Array.from(i.dataTransfer.files))}),n.addEventListener("change",i=>{const r=i.target.files;r?.length&&this.loadDataFolder(Array.from(r))})})(this.dataDropZone,this.dataInput)}populateClassSelect(){this.classSelect.innerHTML="";for(const e of Wx){const t=document.createElement("option");t.value=e.value.toString(),t.textContent=e.label,this.classSelect.appendChild(t)}this.classSelect.value="1"}bindSelectChanges(){const e=()=>this.scheduleRebuild();this.classSelect.addEventListener("change",e),this.helmSelect.addEventListener("change",e),this.armorSelect.addEventListener("change",e),this.pantsSelect.addEventListener("change",e),this.glovesSelect.addEventListener("change",e),this.bootsSelect.addEventListener("change",e),this.leftWeaponSelect.addEventListener("change",e),this.rightWeaponSelect.addEventListener("change",e),this.wingSelect.addEventListener("change",e),this.animationSelect.addEventListener("change",()=>{const t=parseInt(this.animationSelect.value,10);Number.isNaN(t)||!this.characterRoot?.animations?.length||this.playAnimation(t)})}async handleDataSelectClick(e){if(Et()){const t=await fh();t&&this.loadDataFolder(t)}else e.click()}async loadDataFolder(e){if(this.dataStatus.textContent="Loading Data folder...",this.statusEl.textContent="Loading Data folder...",this.dataFiles.clear(),this.textureIndex.clear(),this.dataRootPath=null,this.electronTextureMap.clear(),this.missingDataPaths.clear(),this.playerAnimations=null,this.hasFramed=!1,this.lastClassValue=null,this.currentClassValue=null,this.characterOffset.set(0,0,0),typeof e=="string"){this.dataRootPath=e,await this.loadItemDatabase()?(this.dataStatus.textContent=`Loaded Data folder: ${e}`,this.statusEl.textContent="Item database loaded.",this.scheduleRebuild()):(this.dataStatus.textContent="Failed to load item.bmd from Data folder.",this.statusEl.textContent="Missing Data/Local/item.bmd");return}const t=e;if(!t.length){this.dataStatus.textContent="No files selected.";return}const i=(t[0].webkitRelativePath||t[0].name).split("/")[0];for(const a of t){const o=a.webkitRelativePath||a.name,l=o.startsWith(i+"/")?o.slice(i.length+1):o,c=_i(l);this.dataFiles.set(c,a);const h=es(c);if(Gx.includes(h)){const d=hc(c),u=this.textureIndex.get(d)||[];u.push(c),this.textureIndex.set(d,u)}}await this.loadItemDatabase()?(this.dataStatus.textContent=`Loaded Data folder (${t.length} files)`,this.statusEl.textContent="Item database loaded.",this.scheduleRebuild()):(this.dataStatus.textContent="Failed to load item.bmd from Data folder.",this.statusEl.textContent="Missing Data/Local/item.bmd")}async loadItemDatabase(){const e=await this.readDataFile("Local/item.bmd");return e?(this.itemDefinitions=Vx(e.buffer).filter(t=>t.modelPath),this.itemByKey.clear(),this.itemDefinitions.forEach(t=>{this.itemByKey.set(`${t.group}:${t.id}`,t)}),this.populateItemSelects(),!0):!1}populateItemSelects(){const e=new Map;for(const r of this.itemDefinitions){const a=e.get(r.group)||[];a.push(r),e.set(r.group,a)}const t=r=>(r||[]).slice().sort((a,o)=>a.id-o.id),n={helm:7,armor:8,pants:9,gloves:10,boots:11};this.fillSelect(this.helmSelect,t(e.get(n.helm)),"None"),this.fillSelect(this.armorSelect,t(e.get(n.armor)),"None"),this.fillSelect(this.pantsSelect,t(e.get(n.pants)),"None"),this.fillSelect(this.glovesSelect,t(e.get(n.gloves)),"None"),this.fillSelect(this.bootsSelect,t(e.get(n.boots)),"None");const i=[];for(let r=0;r<=6;r++)i.push(...e.get(r)||[]);i.sort((r,a)=>r.group-a.group||r.id-a.id),this.fillSelect(this.leftWeaponSelect,i,"None"),this.fillSelect(this.rightWeaponSelect,i,"None"),this.fillSelect(this.wingSelect,t(e.get(12)),"None")}fillSelect(e,t,n){e.innerHTML="";const i=document.createElement("option");i.value="",i.textContent=n,e.appendChild(i);for(const r of t){const a=document.createElement("option");a.value=`${r.group}:${r.id}`;const o=r.itemName||r.modelName||`Item ${r.id}`;a.textContent=`${o} (G${r.group} / ${r.id})`,e.appendChild(a)}e.value=""}scheduleRebuild(){this.itemDefinitions.length&&this.rebuildCharacter()}async rebuildCharacter(){const e=++this.buildToken;this.statusEl.textContent="Building character...";const t=parseInt(this.classSelect.value,10),n=Xx(t),i=qx(n),r=this.lastClassValue!==t||!this.hasFramed,a=this.characterOffset.clone(),o=this.characterRoot?this.characterRoot.rotation.clone():null,l=this.selectedAnimationIndex;this.currentClassValue=t,this.lastClassValue=t,this.clearCharacter(),this.animationSelect.innerHTML='<option value="">No animations</option>';const c=`Player/ArmorClass${i}.bmd`,h=await this.loadBmdGroup(c);if(!h||e!==this.buildToken){this.statusEl.textContent=`Missing base model: ${c}`;return}if(this.characterRoot=h.group,this.characterRoot.name="character_root",this.tagMeshes(this.characterRoot,`Base ArmorClass${i}`,"base"),this.characterRoot.scale.set(this.characterScale,this.characterScale,this.characterScale),r||(this.characterRoot.position.copy(a),o&&this.characterRoot.rotation.copy(o)),this.scene.add(this.characterRoot),this.baseSkeleton=this.findSkeleton(this.characterRoot),!this.baseSkeleton){this.statusEl.textContent="No skeleton found in base model.";return}if(this.baseBindMatrix=this.findBaseBindMatrix(this.characterRoot),await this.applyTexturesForGroup(h.group),e!==this.buildToken)return;const d=await this.ensurePlayerAnimations();if(d&&d.length&&(this.characterRoot.animations=d),this.mixer=this.characterRoot.animations.length?new qc(this.characterRoot):null,this.mixer&&this.characterRoot.animations.length>0){const g=l??(this.characterRoot.animations.length>1?1:0),x=Math.min(Math.max(g,0),this.characterRoot.animations.length-1);this.populateAnimationSelect(this.characterRoot.animations.length,x),this.playAnimation(x)}const u=[{path:`Player/HelmClass${i}.bmd`,label:`Base HelmClass${i}`},{path:`Player/PantClass${i}.bmd`,label:`Base PantClass${i}`},{path:`Player/GloveClass${i}.bmd`,label:`Base GloveClass${i}`},{path:`Player/BootClass${i}.bmd`,label:`Base BootClass${i}`}];for(const g of u){const x=await this.loadBmdGroup(g.path);if(!x){console.warn(`[CharacterTestScene] Missing base part: ${g.path}`);continue}if(e!==this.buildToken||(this.tagMeshes(x.group,g.label,"base"),await this.applyTexturesForGroup(x.group),await this.attachBodyPart(x.group),e!==this.buildToken))return}const p=[{select:this.helmSelect,type:"armor",label:"Helm"},{select:this.armorSelect,type:"armor",label:"Armor"},{select:this.pantsSelect,type:"armor",label:"Pants"},{select:this.glovesSelect,type:"armor",label:"Gloves"},{select:this.bootsSelect,type:"armor",label:"Boots"},{select:this.leftWeaponSelect,type:"weapon",bone:33,label:"Left Weapon"},{select:this.rightWeaponSelect,type:"weapon",bone:42,label:"Right Weapon"},{select:this.wingSelect,type:"wing",bone:47,label:"Wings"}];for(const g of p){const x=this.getSelectedItem(g.select);if(!x)continue;const f=`${g.label}: ${this.describeItem(x)}`;if(g.type==="armor"){const m=this.resolveArmorPath(x.modelPath),M=await this.loadBmdGroupWithFallback(m);if(!M){console.warn(`[CharacterTestScene] Missing armor model: ${x.modelPath}`);continue}if(e!==this.buildToken)return;this.tagMeshes(M.group,f,"equipment"),await this.applyTexturesForGroup(M.group),await this.attachBodyPart(M.group)}else{const m=await this.loadBmdGroupWithFallback(x.modelPath);if(!m){console.warn(`[CharacterTestScene] Missing attachment model: ${x.modelPath}`);continue}if(e!==this.buildToken)return;this.tagMeshes(m.group,f,"equipment"),this.attachToBone(m.group,g.bone??0),await this.applyTexturesForGroup(m.group)}}r&&this.frameCharacter(),this.meshRefs=[],this.characterRoot&&this.characterRoot.traverse(g=>{g.isMesh&&this.meshRefs.push(g)}),this.buildBlendingUI(),this.refreshRenderHelpers(),this.statusEl.textContent="Character ready."}resolveArmorPath(e){const t=_i(e);return t.startsWith("item/")?[`player/${t.slice(5)}`,t]:[t]}async loadBmdGroupWithFallback(e){const t=Array.isArray(e)?e:[e];for(const n of t){const i=await this.loadBmdGroup(this.ensureBmdExtension(n));if(i)return i}return null}async loadBmdGroup(e){const t=await this.readDataFile(e);if(!t)return console.warn(`[CharacterTestScene] Missing file: ${e}`),null;try{return await this.bmdLoader.load(t.buffer)}catch(n){return console.error("[CharacterTestScene] Failed to load BMD",e,n),null}}describeItem(e){return`${e.itemName||e.modelName||`Item ${e.id}`} (G${e.group} / ${e.id})`}tagMeshes(e,t,n){e.traverse(i=>{i.isMesh&&(i.userData.itemLabel=t,i.userData.itemKind=n)})}ensureBmdExtension(e){return e.toLowerCase().endsWith(".bmd")?e:`${e}.bmd`}findSkeleton(e){let t=null;return e.traverse(n=>{!t&&n.isSkinnedMesh&&(t=n.skeleton)}),t}findBaseBindMatrix(e){let t=null;return e.traverse(n=>{!t&&n.isSkinnedMesh&&(t=n.bindMatrix.clone())}),t}async attachBodyPart(e){if(!this.characterRoot||!this.baseSkeleton)return;const t=[];e.traverse(n=>{n.isSkinnedMesh&&t.push(n)});for(const n of t)n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.set(1,1,1),this.characterRoot.add(n),n.bind(this.baseSkeleton,this.baseBindMatrix??n.bindMatrix)}attachToBone(e,t){if(!this.baseSkeleton)return;const n=this.baseSkeleton.bones[t];if(!n){console.warn(`[CharacterTestScene] Missing bone ${t}`);return}e.position.set(0,0,0),e.rotation.set(0,0,0),e.scale.set(1,1,1),n.add(e)}async applyTexturesForGroup(e){const t=new Set,n=[];e.traverse(r=>{if(r.isMesh&&r.userData?.texturePath){const a=r.userData.texturePath;t.add(_i(a)),n.push(r)}});const i=new Map;for(const r of t){const a=await this.getTextureForPath(r);a&&i.set(r,a)}n.forEach(r=>{const a=_i(r.userData?.texturePath||""),o=i.get(a);if(!o)return;if(r.userData?.itemKind==="equipment"){this.applyItemShader(r,o);return}const l=r.material;l&&"map"in l&&(l.map=o,l.color.set(16777215),l.needsUpdate=!0)})}applyItemShader(e,t){const n=e.material;Array.isArray(n)?n.forEach(r=>r.dispose()):n&&n.dispose();const i=this.createItemShaderMaterial(t);e.material=i,this.itemShaderMaterials.add(i)}updateItemShaderParams(){const e=new O(.707,-.707,0).normalize(),t=new Re(.3,.3,.3),n=this.itemGlowColor;this.itemShaderMaterials.forEach(i=>{i.uniforms.uItemLevel.value=this.itemLevel,i.uniforms.uIsExcellent.value=this.itemIsExcellent?1:0,i.uniforms.uIsAncient.value=this.itemIsAncient?1:0,i.uniforms.uExcellentIntensity.value=this.itemExcellentIntensity,i.uniforms.uLightDirection.value.copy(e),i.uniforms.uAmbientColor.value.copy(t),i.uniforms.uGlowColor.value.copy(n)})}createItemShaderMaterial(e){const t=`
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
    `,i=new un({uniforms:{uMap:{value:e},uTime:{value:0},uItemLevel:{value:this.itemLevel},uIsExcellent:{value:this.itemIsExcellent?1:0},uIsAncient:{value:this.itemIsAncient?1:0},uExcellentIntensity:{value:this.itemExcellentIntensity},uGlowColor:{value:this.itemGlowColor.clone()},uLightDirection:{value:new O(.707,-.707,0).normalize()},uAmbientColor:{value:new Re(.3,.3,.3)}},vertexShader:t,fragmentShader:n,transparent:!1,depthWrite:!0,blending:Ct,toneMapped:!0,side:Kt});return i.skinning=!0,i.needsUpdate=!0,i}async getTextureForPath(e){const t=_i(e);if(this.textureCache.has(t))return this.textureCache.get(t);const n=hc(t),i=this.getTextureBaseCandidates(n);for(const r of i){const a=r===n?t:this.replaceBaseName(t,r);if(a!==t&&this.textureCache.has(a))return this.textureCache.get(a);const o=await this.readDataFile(a);if(o){const l=await this.loadTexture(o.buffer,o.name);if(l)return this.textureCache.set(a,l),l}}for(const r of i){const a=`base:${r}`;if(this.textureCache.has(a))return this.textureCache.get(a);const o=await this.findTextureByBase(r);if(!o)continue;const l=await this.loadTexture(o.buffer,o.name);if(l)return this.textureCache.set(a,l),l}return null}getTextureBaseCandidates(e){const t=e.match(/^([a-z]*skinclass)(\d+)$/i);if(!t||this.currentClassValue===null)return[e];const n=t[1].toLowerCase(),i=this.currentClassValue,r=i>=200?i:100+i,a=`${n}${r}`;return a===e?[e]:[a,e]}replaceBaseName(e,t){const n=es(e),i=e.replace(/\\/g,"/");return i.includes("/")?`${i.replace(/\/[^/]*$/,"")}/${t}${n}`:`${t}${n}`}async findTextureByBase(e){if(!e)return null;if(this.dataRootPath){if(!this.electronTextureMap.has(e))try{const l=(await ph(this.dataRootPath,[e]))[e]||[];if(l.length>0){const c=this.pickPreferredTexture(l);this.electronTextureMap.set(e,c)}}catch(o){console.warn("[CharacterTestScene] Texture search failed",o)}const r=this.electronTextureMap.get(e);if(!r)return null;const a=await gs(r);return a?{name:a.name,buffer:a.data}:null}const t=this.textureIndex.get(e);if(!t||t.length===0)return null;const n=this.pickPreferredTexture(t),i=this.dataFiles.get(n);return i?{name:i.name,buffer:await i.arrayBuffer()}:null}pickPreferredTexture(e){const t=[".ozj",".ozt",".tga",".png",".jpg",".jpeg"],n=r=>{const a=t.indexOf(r);return a===-1?t.length:a};return e.slice().sort((r,a)=>{const o=es(r),l=es(a);return n(o)-n(l)})[0]}async loadTexture(e,t){const n=es(t);try{let i;if(n===".tga")i=await this.textureLoader.loadAsync(await oh(e));else if(n===".ozj"||n===".ozt")i=await this.textureLoader.loadAsync(await ch(e));else{const r=new Blob([e]),a=URL.createObjectURL(r);i=await this.textureLoader.loadAsync(a),URL.revokeObjectURL(a)}return i.colorSpace=Pt,i.wrapS=i.wrapT=Ri,i.flipY=!1,i.name=t,i}catch(i){return console.warn("[CharacterTestScene] Texture load failed",t,i),null}}getSelectedItem(e){const t=e.value;return t&&this.itemByKey.get(t)||null}async readDataFile(e){const t=_i(e);if(this.dataFiles.size>0){const n=this.dataFiles.get(t);return n?{name:n.name,buffer:await n.arrayBuffer()}:null}if(this.dataRootPath&&Et()){const n=this.joinDataPath(t);if(this.missingDataPaths.has(t))return null;try{const i=await gs(n);return i?{name:i.name,buffer:i.data}:null}catch{return this.missingDataPaths.add(t),null}}return null}joinDataPath(e){if(!this.dataRootPath)return e;const t=this.dataRootPath.includes("\\")?"\\":"/",n=this.dataRootPath.replace(/[\\/]+$/,""),i=e.replace(/[\\/]+/g,t);return`${n}${t}${i}`}populateAnimationSelect(e,t=null){this.animationSelect.innerHTML="";for(let n=0;n<e;n++){const i=document.createElement("option");i.value=n.toString(),i.textContent=`Animation ${n}`,this.animationSelect.appendChild(i)}if(e>0){const n=e>1?1:0,i=t!==null&&t>=0&&t<e?t:n;this.animationSelect.value=i.toString()}}playAnimation(e){if(!this.mixer||!this.characterRoot?.animations?.length)return;const t=this.characterRoot.animations[e];t&&(this.mixer.stopAllAction(),this.currentAction=this.mixer.clipAction(t),this.currentAction.setEffectiveTimeScale(this.animationSpeed),this.currentAction.reset().play(),this.selectedAnimationIndex=e)}setAnimationSpeed(e){this.animationSpeed=e,this.currentAction&&this.currentAction.setEffectiveTimeScale(e)}setCharacterScale(e){this.characterScale=e,this.characterRoot&&this.characterRoot.scale.set(e,e,e)}setBrightness(e){this.renderer.toneMappingExposure=e,this.ambientLight&&(this.ambientLight.intensity=.7*e),this.directionalLight&&(this.directionalLight.intensity=1.5*e)}refreshViewport(e=0){if(!this.containerEl)return;const t=this.containerEl.clientWidth,n=this.containerEl.clientHeight;if(t===0||n===0){e<5&&requestAnimationFrame(()=>this.refreshViewport(e+1));return}this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n),this.renderer.render(this.scene,this.camera)}buildBlendingUI(){if(!this.blendingBox||!this.blendingList)return;this.blendingList.innerHTML="";const e={Opaque:Ct,Normal:Nn,Additive:tr,Multiply:ir,Subtractive:nr};this.meshRefs.forEach((t,n)=>{const i=document.createElement("div");i.style.display="flex",i.style.alignItems="center",i.style.gap="0.5rem",i.style.marginBottom="0.75rem";const r=document.createElement("span"),a=t.userData?.itemLabel||"Unknown item",o=t.name||`Mesh ${n}`;r.textContent=`${a} · ${o}`,r.style.flex="1";const l=document.createElement("select");Object.keys(e).forEach(u=>{const p=document.createElement("option");p.value=u,p.text=u,l.appendChild(p)});const c=t.material,h=Array.isArray(c)?c[0]?.blending:c.blending,d=Object.entries(e).find(([,u])=>u===h);l.value=d?d[0]:"Normal",l.addEventListener("change",()=>{const u=p=>{p.blending=e[l.value],p.transparent=p.blending!==Ct,p.depthWrite=p.blending===Ct,p.needsUpdate=!0};Array.isArray(c)?c.forEach(u):u(c)}),i.append(r,l),this.blendingList.appendChild(i)}),this.blendingBox.style.display=this.meshRefs.length?"block":"none"}refreshRenderHelpers(){this.updateSkeletonHelperState(),this.applyWireframeState(),this.updateBoundingBoxHelperState(),this.updateAxesHelperState(),this.updateNormalsHelpersState()}updateSkeletonHelperState(){if(!this.characterRoot){this.skeletonHelper&&(this.scene.remove(this.skeletonHelper),this.skeletonHelper.geometry.dispose(),this.skeletonHelper=null);return}this.skeletonHelper||(this.skeletonHelper=new bi(this.characterRoot),this.scene.add(this.skeletonHelper)),this.skeletonHelper.visible=this.showSkeletonCheckbox.checked}applyWireframeState(){if(!this.characterRoot)return;const e=this.wireframeCheckbox.checked;this.characterRoot.traverse(t=>{if(t.isMesh){const n=t.material,i=r=>{"wireframe"in r&&(r.wireframe=e,r.needsUpdate=!0)};Array.isArray(n)?n.forEach(i):n&&i(n)}})}updateBoundingBoxHelperState(){if(!this.showBoundingBoxCheckbox.checked||!this.characterRoot){this.boundingBoxHelper&&(this.boundingBoxHelper.visible=!1);return}this.boundingBoxHelper||(this.boundingBoxHelper=new jc(this.characterRoot,16776960),this.boundingBoxHelper.name="character_bbox_helper",this.scene.add(this.boundingBoxHelper)),this.boundingBoxHelper.visible=!0,this.updateSkinnedMeshesBoundingBoxes(),this.boundingBoxHelper.update()}getModelSizeHint(){if(!this.characterRoot)return 100;const t=new Zt().setFromObject(this.characterRoot).getSize(new O);return Math.max(t.x,t.y,t.z)||100}updateAxesHelperState(){if(!this.showAxesCheckbox.checked||!this.characterRoot){this.axesHelper&&(this.axesHelper.visible=!1);return}const t=this.getModelSizeHint()*.6||100;this.axesHelper||(this.axesHelper=new Kc(t),this.axesHelper.name="character_axes_helper",this.axesHelper.matrixAutoUpdate=!0,this.scene.add(this.axesHelper)),this.axesHelper.visible=!0}updateNormalsHelpersState(){if(!this.showNormalsCheckbox.checked||!this.characterRoot){this.normalsVisible=!1,this.normalHelpers.length&&this.normalHelpers.forEach(t=>{t.visible=!1});return}if(this.normalsVisible=!0,this.normalHelpers.length)this.normalHelpers.forEach(t=>{t.visible=!0});else{const t=this.getModelSizeHint()*.015;this.characterRoot.traverse(n=>{if(n.isSkinnedMesh){const i=new Hx(n,t,6151423);i.visible=!0,this.scene.add(i),this.normalHelpers.push(i)}})}}updateSkinnedMeshesBoundingBoxes(){this.characterRoot&&this.characterRoot.traverse(e=>{const t=e;if(!t.isSkinnedMesh)return;const n=t.geometry;if(!n.getAttribute("position"))return;if(!!n.getAttribute("skinIndex")&&!!n.getAttribute("skinWeight")){t.computeBoundingBox();return}t.boundingBox||(t.boundingBox=new Zt),n.boundingBox===null&&n.computeBoundingBox(),n.boundingBox&&t.boundingBox&&t.boundingBox.copy(n.boundingBox)})}exportGif(){if(this.isRecordingGif)return;if(!this.characterRoot){alert("Load a character first.");return}this.isRecordingGif=!0,this.exportGifBtn.disabled=!0,this.statusEl.textContent="Recording GIF…";const e=Math.max(16,Math.min(1024,parseInt(this.gifWidthInput?.value??"800",10)||800)),t=Math.max(16,Math.min(1024,parseInt(this.gifHeightInput?.value??"600",10)||600)),n=!!(this.currentAction&&this.mixer);let i=null,r=0;n&&this.currentAction&&(i=this.currentAction.getClip(),r=i.userData?.numAnimationKeys??0);const a=parseInt(this.gifDelayInput?.value??"",10),o=!Number.isNaN(a)&&a>0?a:null,l=Math.max(1,Math.min(8,parseInt(this.gifFrameMultiplierInput?.value??"1",10)||1)),c=document.createElement("canvas");c.width=e,c.height=t;const h=c.getContext("2d"),d=65280,u=d>>16&255,p=d>>8&255,g=d&255,x=new dh({workers:2,workerScript:uh,quality:10,width:e,height:t,transparent:d}),f=this.scene.background?this.scene.background.clone():null;this.scene.background=null;const m=this.gridHelper?.visible??!1;this.gridHelper&&(this.gridHelper.visible=!1),x.on("progress",b=>{this.statusEl.textContent=`Rendering GIF… ${(b*100).toFixed(0)}%`});const M=b=>{f?this.scene.background=f:this.scene.background=null,this.gridHelper&&(this.gridHelper.visible=m),this.isRecordingGif=!1,this.exportGifBtn.disabled=!1,this.statusEl.textContent=b};if(x.on("finished",b=>{const _=URL.createObjectURL(b),w=document.createElement("a");w.href=_,w.download=`character_${e}x${t}.gif`,w.click(),URL.revokeObjectURL(_),M(`GIF saved (${e}×${t}).`)}),x.on("abort",()=>M("GIF recording aborted.")),!n||!i||r===0){this.renderer.render(this.scene,this.camera),h.clearRect(0,0,e,t),h.drawImage(this.renderer.domElement,0,0,e,t);const b=h.getImageData(0,0,e,t),_=b.data,w=40;for(let L=0;L<_.length;L+=4)_[L+3]<w&&(_[L]=u,_[L+1]=p,_[L+2]=g,_[L+3]=255);h.putImageData(b,0,0),x.addFrame(h,{copy:!0,delay:Math.min(Math.max(o??120,10),1e3)}),x.render();return}const S=Math.max(1,r*l),A=this.currentAction?._effectiveTimeScale??this.animationSpeed,R=i.duration/Math.max(A,1e-4)/S*1e3,v=Math.min(Math.max(o??Math.round(R),5),1e3);let E=0;const I=()=>{if(!this.mixer||!i)return;if(E>=S){x.render();return}const b=E/S;this.currentAction.time=b*i.duration,this.mixer.update(0),this.renderer.render(this.scene,this.camera),h.clearRect(0,0,e,t),h.drawImage(this.renderer.domElement,0,0,e,t);const _=h.getImageData(0,0,e,t),w=_.data,L=40;for(let U=0;U<w.length;U+=4)w[U+3]<L&&(w[U]=u,w[U+1]=p,w[U+2]=g,w[U+3]=255);h.putImageData(_,0,0),x.addFrame(h,{copy:!0,delay:v}),E+=1,requestAnimationFrame(I)};I()}frameCharacter(){if(!this.characterRoot)return;const e=new Zt().setFromObject(this.characterRoot),t=e.getSize(new O),n=e.getCenter(new O);this.characterRoot.position.sub(n),this.characterRoot.position.y+=this.characterHeightOffset,this.characterOffset.copy(this.characterRoot.position),this.hasFramed=!0;const i=Math.max(t.x,t.y,t.z)||200;this.camera.position.set(0,i*.8,i*1.6),this.camera.lookAt(0,0,0),this.controls.target.set(0,0,0),this.controls.update()}clearCharacter(){this.characterRoot&&(this.scene.remove(this.characterRoot),this.characterRoot.traverse(e=>{if(e.isMesh){const t=e;t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(i=>i.dispose()):n&&n.dispose()}}),this.characterRoot=null,this.baseSkeleton=null,this.baseBindMatrix=null,this.mixer=null,this.currentAction=null,this.skeletonHelper&&(this.scene.remove(this.skeletonHelper),this.skeletonHelper.geometry.dispose(),this.skeletonHelper=null),this.boundingBoxHelper&&(this.scene.remove(this.boundingBoxHelper),this.boundingBoxHelper.geometry.dispose(),this.boundingBoxHelper.material.dispose(),this.boundingBoxHelper=null),this.axesHelper&&(this.scene.remove(this.axesHelper),this.axesHelper.geometry.dispose(),this.axesHelper.material.dispose(),this.axesHelper=null),this.normalHelpers.length&&(this.normalHelpers.forEach(e=>{this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}),this.normalHelpers=[]),this.meshRefs=[],this.blendingBox&&(this.blendingBox.style.display="none"),this.blendingList&&(this.blendingList.innerHTML=""),this.itemShaderMaterials.clear())}async ensurePlayerAnimations(){if(!this.baseSkeleton)return null;if(this.playerAnimations)return this.playerAnimations;const e=await this.readDataFile("Player/player.bmd");if(!e)return console.warn("[CharacterTestScene] Missing Player/player.bmd for animations"),null;try{const t=this.bmdLoader.loadAnimationsFrom(e.buffer,this.baseSkeleton);return this.playerAnimations=t,t}catch(t){return console.warn("[CharacterTestScene] Failed to load player animations",t),null}}animate=()=>{requestAnimationFrame(this.animate);const e=this.clock.getDelta();if(this.isActive){if(this.characterRoot&&this.isAutoRotating&&!this.userIsInteracting&&!this.isRecordingGif&&(this.characterRoot.rotation.z+=e*.2),this.mixer&&!this.isRecordingGif&&this.mixer.update(e),this.itemShaderMaterials.size){const t=performance.now()*.001;this.itemShaderMaterials.forEach(n=>{n.uniforms.uTime.value=t})}this.axesHelper&&this.characterRoot&&this.axesHelper.visible&&(this.axesHelper.position.copy(this.characterRoot.position),this.axesHelper.quaternion.copy(this.characterRoot.quaternion),this.axesHelper.scale.copy(this.characterRoot.scale)),this.boundingBoxHelper&&this.boundingBoxHelper.visible&&(this.updateSkinnedMeshesBoundingBoxes(),this.boundingBoxHelper.update()),this.normalsVisible&&this.normalHelpers.length&&(this.normalsUpdateCounter=(this.normalsUpdateCounter+1)%3,this.normalsUpdateCounter===0&&this.normalHelpers.forEach(t=>t.update())),this.controls.update(),this.renderer.render(this.scene,this.camera)}}}class Yx extends ti{skinned;size;_vertex=new O;_skinnedVertex=new O;_normal=new O;_indices;constructor(e,t,n){const r=e.geometry.getAttribute("position"),a=r?r.count:0,l=a>0?Math.min(a,2e3):0,c=new Uint32Array(l||0);for(let p=0;p<l;p++)c[p]=Math.floor(p/l*a);const h=new Float32Array(c.length*2*3),d=new Tt;d.setAttribute("position",new pt(h,3));const u=new Vn({color:n,toneMapped:!1});super(d,u),this.skinned=e,this.size=t,this._indices=c,this.matrixAutoUpdate=!1}update(){const e=this.skinned,t=e.geometry,n=t.getAttribute("position"),i=t.getAttribute("normal"),r=this.geometry.getAttribute("position");if(!n||!i||!r||!this._indices.length)return;e.updateMatrixWorld(!0);const a=e.matrixWorld,o=new De().getNormalMatrix(a),l=this.size,c=this._vertex,h=this._skinnedVertex,d=this._normal;for(let u=0;u<this._indices.length;u++){const p=this._indices[u];c.fromBufferAttribute(n,p),h.copy(c),e.applyBoneTransform(p,h),h.applyMatrix4(a),d.fromBufferAttribute(i,p),d.applyMatrix3(o).normalize().multiplyScalar(l);const g=u*2;r.setXYZ(g,h.x,h.y,h.z),r.setXYZ(g+1,h.x+d.x,h.y+d.y,h.z+d.z)}r.needsUpdate=!0,this.matrixWorld.identity()}}let $e=null;const Kn=document.getElementById("show-skeleton-checkbox"),pa=document.getElementById("wireframe-checkbox");class jx{scene;camera;renderer;controls;clock=new Xc;ambientLight;directionalLight;mixer=null;isRecordingGif=!1;gridHelper=null;currentAction=null;bmdFile=null;animBmdFile=null;loadedGroup=null;requiredTextures=[];exportBtn;gifWidthInput;gifHeightInput;gifDelayInput;gifFrameMultiplierInput;textureLoader=new zc;lastBmdFilePath=null;lastAttachmentFilePath=null;isAutoRotating=!0;userIsInteracting=!1;isActive=!0;diagActionsCountEl;diagAnimationKeysEl;diagAnimationsCountEl;diagCurrentFrameEl;diagBonesCountEl;diagMeshesCountEl;diagFpsEl;lastFrameTime=0;frameCount=0;fps=0;lockFrameCheckbox;lockFrameInput;lockCurrentBtn;isFrameLocked=!1;lockedFrame=0;bmdLoader=new lh;meshRefs=[];attachments=[];currentAttachment=null;currentAttachmentFile=null;mainSkeleton=null;boundingBoxHelper=null;axesHelper=null;normalHelpers=[];showBoundingBoxCheckbox;showAxesCheckbox;showNormalsCheckbox;normalsVisible=!1;normalsUpdateCounter=0;constructor(){console.log("%c[App] constructor","color:#0f0"),this.initThree(),this.initUI(),this.animate(performance.now())}setActive(e){this.isActive=e}initThree(){console.groupCollapsed("%c[App] initThree()","color:#0f0");const e=document.getElementById("canvas-container");if(!e)throw new Error("#canvas-container not found in HTML!");this.scene=new hr,this.scene.background=new Re(1710618),this.camera=new Gt(75,e.clientWidth/e.clientHeight,.1,1e4),this.camera.position.set(0,200,400),this.renderer=new nh({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement),window.addEventListener("resize",()=>{this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight)}),this.controls=new sh(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.addEventListener("start",()=>{this.userIsInteracting=!0}),this.controls.addEventListener("end",()=>{this.userIsInteracting=!1}),this.ambientLight=new Wc(16777215,.7),this.directionalLight=new Gc(16777215,1.5),this.directionalLight.position.set(5,10,7.5),this.scene.add(this.ambientLight),this.scene.add(this.directionalLight),this.gridHelper=new Yc(500,10),this.scene.add(this.gridHelper),console.groupEnd()}initUI(){console.groupCollapsed("%c[App] initUI()","color:#0f0");const e=document.getElementById("bmd-drop-zone"),t=document.getElementById("bmd-file-input"),n=document.getElementById("anim-bmd-drop-zone"),i=document.getElementById("anim-bmd-file-input"),r=document.getElementById("texture-drop-zone"),a=document.getElementById("texture-file-input");this.exportBtn=document.getElementById("export-textures-btn"),this.exportBtn.addEventListener("click",()=>this.exportTextures());const o=document.getElementById("speed-slider"),l=document.getElementById("speed-label");this.gifWidthInput=document.getElementById("gif-width-input"),this.gifHeightInput=document.getElementById("gif-height-input"),this.gifDelayInput=document.getElementById("gif-delay-input"),this.gifFrameMultiplierInput=document.getElementById("gif-frame-multiplier-input"),document.getElementById("export-gif-btn").addEventListener("click",()=>this.exportGif()),document.getElementById("export-glb-btn").addEventListener("click",()=>this.exportToGLB()),o.addEventListener("input",_=>{const w=parseFloat(_.target.value);l.textContent=`Speed: ${w.toFixed(2)}x`,this.setAnimationSpeed(w)}),l.textContent=`Speed: ${parseFloat(o.value).toFixed(2)}x`;const d=document.getElementById("status");d.textContent="Waiting for BMD file…",this.initScaleSlider();const u=document.getElementById("auto-rotate-checkbox");u.addEventListener("change",_=>{this.isAutoRotating=_.target.checked}),this.isAutoRotating=u.checked,document.getElementById("bg-color-input").addEventListener("input",_=>{const w=_.target.value;this.scene.background=new Re(w),document.getElementById("canvas-container").style.backgroundColor=w});const g=document.getElementById("brightness-slider"),x=document.getElementById("brightness-label");g.addEventListener("input",_=>{const w=parseFloat(_.target.value);x.textContent=`Brightness: ${w.toFixed(2)}×`,this.setBrightness(w)}),x.textContent="Brightness: 1.00×",this.diagActionsCountEl=document.getElementById("diag-actions-count"),this.diagAnimationKeysEl=document.getElementById("diag-animation-keys"),this.diagCurrentFrameEl=document.getElementById("diag-current-frame"),this.diagBonesCountEl=document.getElementById("diag-bones-count"),this.diagMeshesCountEl=document.getElementById("diag-meshes-count"),this.diagFpsEl=document.getElementById("diag-fps"),this.updateDiagnosticInfo(0),this.lockFrameCheckbox=document.getElementById("lock-frame-checkbox"),this.lockFrameInput=document.getElementById("lock-frame-input"),this.lockCurrentBtn=document.getElementById("lock-current-btn"),this.lockFrameCheckbox.addEventListener("change",()=>{this.isFrameLocked=this.lockFrameCheckbox.checked,this.isFrameLocked&&this.applyLockedFrame()}),this.lockFrameInput.addEventListener("input",()=>{this.lockedFrame=parseInt(this.lockFrameInput.value,10)||0,this.isFrameLocked&&this.applyLockedFrame()}),this.lockCurrentBtn.addEventListener("click",()=>{const _=parseInt(this.diagCurrentFrameEl.textContent||"0",10)||0;this.lockFrameInput.value=_.toString(),this.lockedFrame=_,this.lockFrameCheckbox.checked=!0,this.isFrameLocked=!0,this.applyLockedFrame()});const f=(_,w,L)=>{_.addEventListener("click",()=>w.click()),_.addEventListener("dragover",U=>{U.preventDefault(),_.classList.add("drag-over")}),_.addEventListener("dragleave",()=>_.classList.remove("drag-over")),_.addEventListener("drop",U=>{U.preventDefault(),_.classList.remove("drag-over"),U.dataTransfer?.files.length&&L(U.dataTransfer.files)}),w.addEventListener("change",U=>{const N=U.target.files;N?.length&&L(N)})};(async(_,w)=>{const L=async()=>{if(Et()){const{openFileDialog:N,readFileFromPath:F,createFileFromElectronData:V}=await Po(async()=>{const{openFileDialog:G,readFileFromPath:Q,createFileFromElectronData:te}=await Promise.resolve().then(()=>oc);return{openFileDialog:G,readFileFromPath:Q,createFileFromElectronData:te}},void 0),q=await N([{name:"BMD Files",extensions:["bmd"]}]);if(q){const G=await F(q);if(G){const Q=V(G.name,G.data);this.handleBmdFile(Q,q)}}}else w.click()};_.addEventListener("click",L),_.addEventListener("dragover",N=>{N.preventDefault(),_.classList.add("drag-over")}),_.addEventListener("dragleave",()=>_.classList.remove("drag-over")),_.addEventListener("drop",N=>{if(N.preventDefault(),N.stopPropagation(),_.classList.remove("drag-over"),N.dataTransfer?.files&&N.dataTransfer.files.length>0){const F=N.dataTransfer.files[0];let V;if(Et()){const q=er(F);q?(V=q,console.log("[BMD drop] Got path from Electron API:",V)):console.warn("[BMD drop] Could not get file path from Electron")}this.handleBmdFile(F,V)}});let U=!1;_.addEventListener("dragenter",()=>{U=!0}),_.addEventListener("dragleave",()=>{U=!1}),w.addEventListener("change",N=>{if(U){U=!1;return}const F=N.target.files;F?.length&&this.handleBmdFile(F[0])})})(e,t),f(n,i,_=>this.handleAnimBmdFile(_[0])),f(r,a,_=>this.handleMultipleTextureFiles(_));const M=document.getElementById("attach-drop-zone"),S=document.getElementById("attach-bmd-input");(async(_,w)=>{const L=async()=>{if(Et()){const{openFileDialog:N,readFileFromPath:F,createFileFromElectronData:V}=await Po(async()=>{const{openFileDialog:G,readFileFromPath:Q,createFileFromElectronData:te}=await Promise.resolve().then(()=>oc);return{openFileDialog:G,readFileFromPath:Q,createFileFromElectronData:te}},void 0),q=await N([{name:"BMD Files",extensions:["bmd"]}]);if(q){const G=await F(q);if(G){const Q=V(G.name,G.data);document.querySelector("#attach-drop-zone p").textContent=`Selected: ${Q.name}`,this.currentAttachmentFile=Q,this.lastAttachmentFilePath=q,this.setupAttachmentControls()}}}else w.click()};_.addEventListener("click",L),_.addEventListener("dragover",N=>{N.preventDefault(),_.classList.add("drag-over")}),_.addEventListener("dragleave",()=>_.classList.remove("drag-over")),_.addEventListener("drop",N=>{if(N.preventDefault(),N.stopPropagation(),_.classList.remove("drag-over"),N.dataTransfer?.files.length){const F=N.dataTransfer.files[0];let V;if(Et()){const q=er(F);q?(V=q,console.log("[Attachment drop] Got path from Electron API:",V)):console.warn("[Attachment drop] Could not get file path from Electron")}document.querySelector("#attach-drop-zone p").textContent=`Selected: ${F.name}`,this.currentAttachmentFile=F,this.lastAttachmentFilePath=V||null,this.setupAttachmentControls()}});let U=!1;_.addEventListener("dragenter",()=>{U=!0}),_.addEventListener("dragleave",()=>{U=!1}),w.addEventListener("change",N=>{if(U){U=!1;return}const F=N.target.files;if(F?.length){const V=F[0];document.querySelector("#attach-drop-zone p").textContent=`Selected: ${V.name}`,this.currentAttachmentFile=V,this.lastAttachmentFilePath=null,this.setupAttachmentControls()}})})(M,S);const R=document.getElementById("canvas-container");R.addEventListener("dragover",_=>{_.preventDefault(),_.stopPropagation()}),R.addEventListener("drop",async _=>{if(_.preventDefault(),_.stopPropagation(),!_.dataTransfer?.files||_.dataTransfer.files.length===0)return;const w=Array.from(_.dataTransfer.files),L=w.filter(N=>N.name.toLowerCase().endsWith(".bmd")),U=w.filter(N=>{const F=N.name.toLowerCase().split(".").pop();return["jpg","jpeg","png","tga","ozj","ozt"].includes(F||"")});if(L.length>0){const N=L[0];let F;if(Et()){const V=er(N);V&&(F=V,console.log("%c[Canvas drop] Got BMD path from Electron API:","color: #4CAF50",F))}await this.handleBmdFile(N,F),console.log("%c[Canvas drop] Loaded BMD:","color: #4CAF50",N.name)}U.length>0&&(await this.handleMultipleTextureFiles(U),console.log("%c[Canvas drop] Loaded textures:","color: #4CAF50",U.map(N=>N.name).join(", "))),L.length===0&&U.length===0&&console.warn("[Canvas drop] No BMD or texture files found in drop")}),Kn.addEventListener("change",()=>{$e&&($e.visible=Kn.checked)}),pa.addEventListener("change",()=>{const _=pa.checked;this.scene.traverse(w=>{if(w.isMesh){const L=w.material;"wireframe"in L&&(L.wireframe=_,L.needsUpdate=!0)}})}),this.showBoundingBoxCheckbox=document.getElementById("show-bbox-checkbox"),this.showAxesCheckbox=document.getElementById("show-axes-checkbox"),this.showNormalsCheckbox=document.getElementById("show-normals-checkbox"),this.showBoundingBoxCheckbox.addEventListener("change",()=>{this.updateBoundingBoxHelperState()}),this.showAxesCheckbox.addEventListener("change",()=>{this.updateAxesHelperState()}),this.showNormalsCheckbox.addEventListener("change",()=>{this.updateNormalsHelpersState()});const v=document.getElementById("attach-bone-select"),E=document.getElementById("attach-bone-slider"),I=document.getElementById("attach-bone-value"),b=document.getElementById("undo-attach-btn");v.addEventListener("change",()=>{const _=parseInt(v.value);isNaN(_)||(E.value=_.toString(),I.textContent=_.toString(),this.changeBoneForAttachment(_))}),E.addEventListener("input",()=>{const _=parseInt(E.value);v.value=_.toString(),I.textContent=_.toString(),this.changeBoneForAttachment(_)}),b.addEventListener("click",()=>this.removeAttachment()),console.groupEnd()}initScaleSlider(){const e=document.getElementById("scale-slider"),t=document.getElementById("scale-label");e.addEventListener("input",n=>{const i=parseFloat(n.target.value);t.textContent=`Scale: ${i.toFixed(2)}x`,this.setModelScale(i)}),t.textContent=`Scale: ${parseFloat(e.value).toFixed(2)}x`}setModelScale(e){this.loadedGroup&&this.loadedGroup.scale.set(e,e,e)}handleBmdFile=(e,t)=>{console.log(`[App] handleBmdFile("${e.name}")`),this.bmdFile=e,this.lastBmdFilePath=t||null,document.querySelector("#bmd-drop-zone p").textContent=`Selected: ${e.name}`,this.loadAndDisplayModel()};handleAnimBmdFile=e=>{console.log(`[App] handleAnimBmdFile("${e.name}")`),this.animBmdFile=e,document.querySelector("#anim-bmd-drop-zone p").textContent=`Selected: ${e.name}`,this.loadExternalAnimations()};handleMultipleTextureFiles=e=>{Array.from(e).forEach(t=>this.loadAndApplyTexture(t))};handleTextureFile=e=>{console.log(`[App] handleTextureFile("${e.name}")`),this.loadAndApplyTexture(e)};exportToGLB(){if(!this.loadedGroup){alert("Load a BMD model first.");return}const e=new pr,t={binary:!0,animations:this.loadedGroup.animations,embedImages:!0};e.parse(this.loadedGroup,n=>{const i=n,r=new Blob([i],{type:"model/gltf-binary"}),a=(this.loadedGroup.name||"model").replace(/[^a-z0-9_-]/gi,"_"),o=new Date().toISOString().replace(/[:T]/g,"").split(".")[0],l=`${a}_${o}.glb`,c=document.createElement("a");c.href=URL.createObjectURL(r),c.download=l,c.click(),URL.revokeObjectURL(c.href),console.log(`✔️  Saved ${l} (${(r.size/1024).toFixed(1)} KB)`)},n=>{console.error("❌ GLTFExporter error:",n),alert("Error during export. Check the console.")},t)}exportGif(){if(this.isRecordingGif)return;if(!this.loadedGroup){alert("Load a BMD model first.");return}const e=document.getElementById("status"),t=document.getElementById("export-gif-btn");this.isRecordingGif=!0,e.textContent="Recording GIF…",t&&(t.disabled=!0);const n=Math.max(16,Math.min(1024,parseInt(this.gifWidthInput?.value??"800",10)||800)),i=Math.max(16,Math.min(1024,parseInt(this.gifHeightInput?.value??"600",10)||600)),r=document.getElementById("speed-slider"),a=parseFloat(r?.value??"1")||1,o=!!(this.currentAction&&this.mixer);let l=null,c=0;o&&this.currentAction&&(l=this.currentAction.getClip(),c=l.userData?.numAnimationKeys??0);const h=parseInt(this.gifDelayInput?.value??"",10),d=!Number.isNaN(h)&&h>0?h:null,u=Math.max(1,Math.min(8,parseInt(this.gifFrameMultiplierInput?.value??"1",10)||1)),p=document.createElement("canvas");p.width=n,p.height=i;const g=p.getContext("2d"),x=65280,f=x>>16&255,m=x>>8&255,M=x&255,S=new dh({workers:2,workerScript:uh,quality:10,width:n,height:i,transparent:x}),A=this.scene.background?this.scene.background.clone():null;this.scene.background=null;const R=this.gridHelper?.visible??!1;if(this.gridHelper&&(this.gridHelper.visible=!1),S.on("progress",L=>{e.textContent=`Rendering GIF… ${(L*100).toFixed(0)}%`}),S.on("finished",L=>{A?this.scene.background=A:this.scene.background=null,this.gridHelper&&(this.gridHelper.visible=R);const U=URL.createObjectURL(L),N=document.createElement("a");N.href=U,N.download=`model_${n}x${i}.gif`,N.click(),URL.revokeObjectURL(U),this.isRecordingGif=!1,t&&(t.disabled=!1),e.textContent=`GIF saved (${n}×${i}).`}),S.on("abort",()=>{A?this.scene.background=A:this.scene.background=null,this.gridHelper&&(this.gridHelper.visible=R),this.isRecordingGif=!1,t&&(t.disabled=!1),e.textContent="GIF recording aborted."}),!o||!l||c===0){this.renderer.render(this.scene,this.camera),g.clearRect(0,0,n,i),g.drawImage(this.renderer.domElement,0,0,n,i);const L=g.getImageData(0,0,n,i),U=L.data,N=40;for(let F=0;F<U.length;F+=4)U[F+3]<N&&(U[F]=f,U[F+1]=m,U[F+2]=M,U[F+3]=255);g.putImageData(L,0,0),S.addFrame(g,{copy:!0,delay:Math.min(Math.max(d??120,10),1e3)}),S.render();return}const v=Math.max(1,c*u),E=this.currentAction._effectiveTimeScale??a,I=l.duration/Math.max(E,1e-4)/v*1e3,b=Math.min(Math.max(d??Math.round(I),5),1e3);let _=0;const w=()=>{if(_>=v){S.render();return}const L=_/v*l.duration;this.currentAction.time=L,this.mixer.update(0),this.renderer.render(this.scene,this.camera),g.clearRect(0,0,n,i),g.drawImage(this.renderer.domElement,0,0,n,i);const U=g.getImageData(0,0,n,i),N=U.data,F=40;for(let V=0;V<N.length;V+=4)N[V+3]<F&&(N[V]=f,N[V+1]=m,N[V+2]=M,N[V+3]=255);g.putImageData(U,0,0),S.addFrame(g,{copy:!0,delay:b}),_++,requestAnimationFrame(w)};requestAnimationFrame(w)}async loadAndDisplayModel(){if(!this.bmdFile)return;const e=document.getElementById("status");e.textContent="Loading model…",console.groupCollapsed("%c[App] loadAndDisplayModel()","color:yellow"),console.time("loadAndDisplayModel"),this.clearScene(),this.loadedGroup=null,this.requiredTextures=[],document.getElementById("texture-controls").style.display="none";try{const t=await this.bmdFile.arrayBuffer(),{group:n,requiredTextures:i}=await this.bmdLoader.load(t);n.name="bmd_model",this.scene.add(n),this.loadedGroup=n,this.requiredTextures=i;const r=n.getObjectByProperty("type","SkinnedMesh");if(this.mainSkeleton=r?.skeleton||null,this.setupAnimations(n),e.textContent=`Loaded: ${n.name} (animations: ${n.animations.length})`,this.updateTextureUI(),this.updateDiagnosticInfo(),this.exportBtn&&(this.exportBtn.disabled=!1),Et()&&this.lastBmdFilePath&&i.length>0){console.log("%c[Electron] Auto-searching textures...","color: #4CAF50"),console.log("[Electron] Required textures from BMD:",i),console.log("[Electron] BMD file path:",this.lastBmdFilePath),e.textContent="Searching for textures...";try{const a=await so(this.lastBmdFilePath,i),o=Object.keys(a).length;if(console.log("[Electron] Search result:",a),o>0){const l=Object.values(a).reduce((c,h)=>c+h.length,0);console.log(`%c[Electron] Found ${o} texture names (${l} files), loading...`,"color: #4CAF50");for(const[c,h]of Object.entries(a))for(const d of h){const u=await gs(d);if(u){const p=io(u.name,u.data);await this.loadAndApplyTexture(p)}}e.textContent=`Loaded: ${n.name} | Auto-loaded ${l} texture files for ${o} base names`}else e.textContent=`Loaded: ${n.name} | No textures found automatically`}catch(a){console.error("[Electron] Error auto-searching textures:",a),e.textContent=`Loaded: ${n.name} | Texture search failed`}}$e&&(this.scene.remove($e),$e.geometry.dispose(),$e=null),$e=new bi(n),$e.visible=Kn.checked,this.scene.add($e),n.traverse(a=>{if(a.isMesh){const o=a.material;"wireframe"in o&&(o.wireframe=pa.checked,o.needsUpdate=!0)}}),this.meshRefs=[],n.traverse(a=>{a.isMesh&&this.meshRefs.push(a)}),this.buildBlendingUI(),this.updateBoundingBoxHelperState(),this.updateAxesHelperState(),this.updateNormalsHelpersState()}catch(t){console.error("‼️ loader.load() ERROR",t),e.textContent=`Error: ${t.message}`}finally{console.timeEnd("loadAndDisplayModel"),console.groupEnd()}}async loadExternalAnimations(){if(!(!this.loadedGroup||!this.animBmdFile))try{const e=await this.animBmdFile.arrayBuffer();let t=this.mainSkeleton;if(t||(console.log("[loadExternalAnimations] mainSkeleton not available, searching in loadedGroup..."),this.loadedGroup.traverse(i=>{!t&&i.isSkinnedMesh&&(t=i.skeleton)})),!t){console.warn("No skeleton found for external animations");return}console.log("[loadExternalAnimations] Using skeleton with",t.bones.length,"bones");const n=this.bmdLoader.loadAnimationsFrom(e,t);n.length&&(this.loadedGroup.animations=n,this.setupAnimations(this.loadedGroup),document.getElementById("status").textContent=`Animations loaded from ${this.animBmdFile.name}`)}catch(e){console.error("Failed to load external animations",e)}}buildBlendingUI(){const e=document.getElementById("blending-controls"),t=document.getElementById("blending-container");t.innerHTML="";const n={Opaque:Ct,Normal:Nn,Additive:tr,Multiply:ir,Subtractive:nr};this.meshRefs.forEach((i,r)=>{const a=document.createElement("div");a.style.display="flex",a.style.alignItems="center",a.style.gap="0.5rem",a.style.marginBottom="0.75rem";const o=document.createElement("span");o.textContent=i.name||`Mesh ${r}`,o.style.flex="1";const l=document.createElement("select");Object.keys(n).forEach(h=>{const d=document.createElement("option");d.value=h,d.text=h,l.appendChild(d)});const c=Object.entries(n).find(([,h])=>h===i.material.blending);l.value=c?c[0]:"Normal",l.addEventListener("change",()=>{const h=i.material;h.blending=n[l.value],h.transparent=h.blending!==Ct,h.depthWrite=h.blending===Ct,h.needsUpdate=!0}),a.append(o,l),t.appendChild(a)}),e.style.display=this.meshRefs.length?"block":"none"}clearScene(){const e=this.scene.getObjectByName("bmd_model");e&&(this.scene.remove(e),e.traverse(t=>{if(t.isMesh){t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(i=>i.dispose()):n&&("map"in n&&n.map&&n.map instanceof yt&&n.map.dispose(),n.dispose())}}),this.mixer=null,this.currentAction=null,document.getElementById("animations-container").innerHTML=""),this.meshRefs=[],this.mainSkeleton=null,this.boundingBoxHelper&&(this.scene.remove(this.boundingBoxHelper),this.boundingBoxHelper.geometry.dispose(),this.boundingBoxHelper.material.dispose(),this.boundingBoxHelper=null),this.axesHelper&&(this.scene.remove(this.axesHelper),this.axesHelper.geometry.dispose(),this.axesHelper.material.dispose(),this.axesHelper=null),this.normalHelpers.length&&(this.normalHelpers.forEach(t=>{this.scene.remove(t),t.geometry.dispose(),t.material.dispose()}),this.normalHelpers=[]),this.normalsVisible=!1,this.exportBtn&&(this.exportBtn.disabled=!0),this.updateDiagnosticInfo()}updateTextureUI(){const e=document.getElementById("texture-controls"),t=document.getElementById("texture-info-text"),n=Array.from(new Set(this.requiredTextures));n.length>0&&n[0]?(t.textContent=n.join(", "),e.style.display="block"):(t.textContent="This model does not require textures.",e.style.display="block",document.getElementById("texture-drop-zone").style.display="none")}async loadAndApplyTexture(e){if(!this.loadedGroup){console.warn("Model not loaded - no textures.");return}const t=document.getElementById("status");t.textContent=`Loading: ${e.name}…`;try{let n=function(d){const u=d.split(/[\\/]/).pop().toLowerCase(),p=u.split(".").pop();return{base:u.replace(/\.[^.]+$/,""),ext:p}};const i=e.name.split(".").pop().toLowerCase();let r;if(i==="tga")r=await this.textureLoader.loadAsync(await oh(await e.arrayBuffer()));else if(i==="ozj"||i==="ozt")r=await this.textureLoader.loadAsync(await ch(await e.arrayBuffer()));else{const d=URL.createObjectURL(e);r=await this.textureLoader.loadAsync(d),URL.revokeObjectURL(d)}r.colorSpace=Pt,r.wrapS=r.wrapT=Ri,r.flipY=!1,r.name=e.name;const a={jpg:["ozj","jpeg"],jpeg:["ozj","jpg"],ozj:["jpg","jpeg","png"],png:["ozj","ozt"],tga:["ozt","png"],ozt:["tga","png"]},o=e.name.toLowerCase(),l=o.replace(/\.[^.]+$/,""),c=o.split(".").pop(),h=[];if(this.loadedGroup.traverse(d=>{if(d.isMesh&&d.userData.texturePath){const u=d.userData.texturePath,{base:p,ext:g}=n(u),f=(g===c||a[g]?.includes(c)||a[c]?.includes(g))&&p===l;h.push({mesh:d,path:u,isMatch:f})}}),c==="ozj"||c==="ozt"){let d=!1;h.forEach(u=>{if(u.isMatch){const p=u.mesh.material;p.map&&p.map.dispose(),p.map=r,p.color.set(16777215),p.needsUpdate=!0,d=!0,this.exportBtn&&(this.exportBtn.disabled=!1)}}),d||console.warn(`No matching mesh found for "${e.name}"`),t.textContent=d?`Texture "${e.name}" loaded.`:`No matching mesh found for "${e.name}". Check the console.`}else{let d=`Apply texture "${e.name}" to which mesh?
`;h.forEach((g,x)=>{d+=`${x}: ${g.mesh.name} (needs ${g.path})
`});const u=window.prompt(d,""),p=u!==null?parseInt(u,10):NaN;if(!isNaN(p)&&h[p]){const x=h[p].mesh.material;x.map&&x.map.dispose(),x.map=r,x.color.set(16777215),x.needsUpdate=!0,this.exportBtn&&(this.exportBtn.disabled=!1),t.textContent=`Texture "${e.name}" loaded.`}else t.textContent=`Texture "${e.name}" was not applied.`}}catch(n){console.error("Texture load error:",n),t.textContent=`Error: ${n.message}`}}isDrawableTextureImage(e){if(!e||typeof e!="object"&&typeof e!="function")return!1;const t=e;return typeof t.width=="number"&&typeof t.height=="number"}exportTextures(){if(!this.loadedGroup)return;const e=new Set;this.loadedGroup.traverse(n=>{if(n.isMesh){const i=n.material;if(!i.map||e.has(i.map))return;const r=i.map.image;if(!this.isDrawableTextureImage(r))return;const a=r,o=document.createElement("canvas");o.width=a.width,o.height=a.height;const l=o.getContext("2d");if(!l)return;l.drawImage(a,0,0),o.toBlob(c=>{if(!c)return;const h=document.createElement("a");h.href=URL.createObjectURL(c);const d=(i.map?.name?i.map.name:"texture").replace(/\.[^.]+$/,"");h.download=`${d}.png`,h.style.display="none",document.body.appendChild(h),h.click(),document.body.removeChild(h)},"image/png"),e.add(i.map)}});const t=document.getElementById("status");t.textContent=e.size?`Exported ${e.size} texture(s).`:"No loaded textures to export."}getModelSizeHint(){if(!this.loadedGroup)return 100;const t=new Zt().setFromObject(this.loadedGroup).getSize(new O);return Math.max(t.x,t.y,t.z)||100}updateBoundingBoxHelperState(){if(!this.showBoundingBoxCheckbox?.checked||!this.loadedGroup){this.boundingBoxHelper&&(this.boundingBoxHelper.visible=!1);return}this.boundingBoxHelper||(this.boundingBoxHelper=new jc(this.loadedGroup,16776960),this.boundingBoxHelper.name="bmd_bbox_helper",this.scene.add(this.boundingBoxHelper)),this.boundingBoxHelper.visible=!0,this.updateSkinnedMeshesBoundingBoxes(),this.boundingBoxHelper.update()}updateSkinnedMeshesBoundingBoxes(){this.loadedGroup&&this.loadedGroup.traverse(e=>{const t=e;if(!t.isSkinnedMesh)return;const n=t.geometry;if(!n.getAttribute("position"))return;if(!!n.getAttribute("skinIndex")&&!!n.getAttribute("skinWeight")){t.computeBoundingBox();return}t.boundingBox||(t.boundingBox=new Zt),n.boundingBox===null&&n.computeBoundingBox(),n.boundingBox&&t.boundingBox&&t.boundingBox.copy(n.boundingBox)})}updateAxesHelperState(){if(!this.showAxesCheckbox?.checked||!this.loadedGroup){this.axesHelper&&(this.axesHelper.visible=!1);return}const t=this.getModelSizeHint()*.6||100;this.axesHelper||(this.axesHelper=new Kc(t),this.axesHelper.name="bmd_axes_helper",this.axesHelper.matrixAutoUpdate=!0,this.scene.add(this.axesHelper)),this.axesHelper.visible=!0}updateNormalsHelpersState(){if(!this.showNormalsCheckbox?.checked||!this.loadedGroup){this.normalsVisible=!1,this.normalHelpers.length&&this.normalHelpers.forEach(t=>{t.visible=!1});return}if(!this.normalHelpers.length){const t=this.getModelSizeHint()*.05||5;this.loadedGroup.traverse(n=>{const i=n;if(i.isMesh&&i.geometry.attributes?.normal){let r;i.isSkinnedMesh?r=new Yx(i,t,65535):r=new Og(i,t,65535),r.name=`bmd_normals_helper_${this.normalHelpers.length}`,this.scene.add(r),this.normalHelpers.push(r)}})}this.normalHelpers.forEach(t=>{t.visible=!0}),this.normalsVisible=!0,this.normalsUpdateCounter=0,this.normalHelpers.forEach(t=>t.update())}setAnimationSpeed(e){this.currentAction&&this.currentAction.setEffectiveTimeScale(e)}setupAnimations(e){this.mixer=new qc(e),this.currentAction=null;const t=document.getElementById("animations-container"),n=document.getElementById("speed-slider");if(t.innerHTML="",!e.animations.length){t.textContent="No animations in this model.";return}const i=document.createElement("select");i.classList.add("animation-dropdown"),i.id="animation-select";const r=document.createElement("option");r.textContent="Select Animation",r.value="",r.disabled=!0,i.appendChild(r),e.animations.forEach((o,l)=>{const c=document.createElement("option");c.value=l.toString(),c.textContent=`Animation ${l}`,i.appendChild(c)}),i.onchange=()=>{const o=parseInt(i.value);if(isNaN(o))return;const l=e.animations[o];this.mixer.stopAllAction(),this.currentAction=this.mixer.clipAction(l);const c=parseFloat(n.value);this.currentAction.setEffectiveTimeScale(c),this.currentAction.reset().play()},t.appendChild(i),e.animations.length>0&&(i.value="0",i.dispatchEvent(new Event("change")));const a=document.getElementById("frame-lock-controls");a.style.display=e.animations.length&&e.animations[0].userData?.numAnimationKeys?"block":"none",this.lockFrameCheckbox.checked=!1,this.isFrameLocked=!1,this.updateDiagnosticInfo()}animate=e=>{requestAnimationFrame(this.animate);const t=this.clock.getDelta();this.isActive&&(this.loadedGroup&&this.isAutoRotating&&!this.userIsInteracting&&!this.isRecordingGif&&(this.loadedGroup.rotation.z+=t*.2),this.mixer&&(this.isFrameLocked?this.applyLockedFrame():this.isRecordingGif||this.mixer.update(t)),this.axesHelper&&this.loadedGroup&&this.axesHelper.visible&&(this.axesHelper.position.copy(this.loadedGroup.position),this.axesHelper.quaternion.copy(this.loadedGroup.quaternion),this.axesHelper.scale.copy(this.loadedGroup.scale)),this.boundingBoxHelper&&this.loadedGroup&&this.boundingBoxHelper.visible&&(this.updateSkinnedMeshesBoundingBoxes(),this.boundingBoxHelper.update()),this.normalsVisible&&this.normalHelpers.length&&(this.normalsUpdateCounter=(this.normalsUpdateCounter+1)%3,this.normalsUpdateCounter===0&&this.normalHelpers.forEach(n=>n.update())),this.controls.update(),this.renderer.render(this.scene,this.camera),this.updateDiagnosticInfo(e))};applyLockedFrame(){if(!this.currentAction)return;const e=this.currentAction.getClip(),t=e.userData?.numAnimationKeys??0;if(!t)return;const n=Math.min(Math.max(this.lockedFrame,0),t-1);this.currentAction.time=n/t*e.duration,this.mixer.update(0)}updateDiagnosticInfo(e=0){if(this.diagActionsCountEl.textContent=this.loadedGroup?.animations.length.toString()||"0",this.currentAction){const r=this.currentAction.getClip(),a=r.userData?.numAnimationKeys??0;if(this.diagAnimationKeysEl.textContent=a.toString(),a>0){const o=(this.currentAction.time%r.duration+r.duration)%r.duration;o/r.duration;const l=this.isFrameLocked?this.lockedFrame:Math.floor(o/r.duration*a);this.diagCurrentFrameEl.textContent=l.toString()}else this.diagCurrentFrameEl.textContent="N/A"}else this.diagAnimationKeysEl.textContent="0",this.diagCurrentFrameEl.textContent="N/A";let t=0;this.loadedGroup&&this.loadedGroup.traverse(r=>{r.isBone&&t++}),this.diagBonesCountEl.textContent=t.toString();let n=0;this.loadedGroup&&this.loadedGroup.traverse(r=>{r.isMesh&&n++}),this.diagMeshesCountEl.textContent=n.toString(),this.frameCount++;const i=e-this.lastFrameTime;i>=1e3&&(this.fps=this.frameCount*1e3/i,this.diagFpsEl.textContent=this.fps.toFixed(0),this.frameCount=0,this.lastFrameTime=e)}setBrightness(e){this.renderer.toneMappingExposure=e,this.ambientLight&&(this.ambientLight.intensity=.7*e),this.directionalLight&&(this.directionalLight.intensity=1.5*e)}async setupAttachmentControls(){if(console.log("[setupAttachmentControls] Starting..."),!this.loadedGroup||!this.currentAttachmentFile){alert("First load the base character model.");return}if(!this.mainSkeleton){alert("The base model does not include a skeleton.");return}const e=this.mainSkeleton.bones;console.log(`[setupAttachmentControls] Main skeleton has ${e.length} bones`);const t=document.getElementById("attach-controls");t.style.display="block";const n=document.getElementById("attach-bone-select"),i=document.getElementById("attach-bone-slider"),r=document.getElementById("attach-bone-value");n.innerHTML='<option value="">-- Select Bone --</option>',e.forEach((a,o)=>{const l=document.createElement("option");l.value=o.toString(),l.textContent=`${o}: ${a.name||"Unnamed"}`,n.appendChild(l)}),i.min="0",i.max=(e.length-1).toString(),i.value="0",r.textContent="0",await this.loadAttachmentAtBone(0),n.value="0"}async loadAttachmentAtBone(e){if(console.log(`[loadAttachmentAtBone] Loading attachment at bone ${e}`),!this.loadedGroup||!this.currentAttachmentFile||!this.mainSkeleton){console.warn("[loadAttachmentAtBone] Missing required objects");return}const t=this.mainSkeleton.bones;if(e<0||e>=t.length){console.warn("[loadAttachmentAtBone] Bone index out of range");return}const n=t[e];console.log(`[loadAttachmentAtBone] Attaching to bone: ${n.name||"Unnamed"}`),this.currentAttachment&&(this.currentAttachment.parent&&this.currentAttachment.parent.remove(this.currentAttachment),this.disposeAttachment(this.currentAttachment));const{group:i,requiredTextures:r}=await this.bmdLoader.load(await this.currentAttachmentFile.arrayBuffer());if(i.name=`attachment_bone_${e}`,i.position.set(0,0,0),i.rotation.set(0,0,0),i.scale.set(1,1,1),n.add(i),this.currentAttachment=i,this.requiredTextures.push(...r),this.updateTextureUI(),Et()&&this.lastAttachmentFilePath&&r.length>0){console.log("%c[Electron] Auto-searching textures for attachment...","color: #4CAF50");try{const a=await so(this.lastAttachmentFilePath,r),o=Object.keys(a).length;if(o>0){const l=Object.values(a).reduce((c,h)=>c+h.length,0);console.log(`%c[Electron] Found ${o} texture names (${l} files) for attachment, loading...`,"color: #4CAF50");for(const[c,h]of Object.entries(a))for(const d of h){const u=await gs(d);if(u){const p=io(u.name,u.data);await this.loadAndApplyTexture(p)}}console.log(`%c[Electron] Auto-loaded ${l} texture files for ${o} base names`,"color: #4CAF50")}}catch(a){console.error("[Electron] Error auto-searching textures for attachment:",a)}}$e&&(this.scene.remove($e),$e.geometry.dispose()),$e=new bi(this.loadedGroup),$e.visible=Kn.checked,this.scene.add($e),this.meshRefs=[],this.loadedGroup.traverse(a=>{a.isMesh&&this.meshRefs.push(a)}),this.buildBlendingUI()}changeBoneForAttachment(e){if(console.log(`[changeBoneForAttachment] Changing to bone ${e}`),!this.loadedGroup||!this.currentAttachment||!this.mainSkeleton){console.warn("[changeBoneForAttachment] Missing required objects");return}const t=this.mainSkeleton.bones;if(e<0||e>=t.length){console.warn(`[changeBoneForAttachment] Bone index ${e} out of range (0-${t.length-1})`);return}const n=t[e];console.log(`[changeBoneForAttachment] Target bone: ${n.name||"Unnamed"}`),this.currentAttachment.parent&&this.currentAttachment.parent.remove(this.currentAttachment),this.currentAttachment.position.set(0,0,0),this.currentAttachment.rotation.set(0,0,0),this.currentAttachment.scale.set(1,1,1),n.add(this.currentAttachment),this.currentAttachment.name=`attachment_bone_${e}`,this.currentAttachment.matrixWorldNeedsUpdate=!0,this.currentAttachment.parent&&(this.currentAttachment.parent.matrixWorldNeedsUpdate=!0)}removeAttachment(){if(!this.currentAttachment){alert("No attachment to remove.");return}this.currentAttachment.parent&&this.currentAttachment.parent.remove(this.currentAttachment),this.disposeAttachment(this.currentAttachment),this.currentAttachment=null,this.currentAttachmentFile=null;const e=document.getElementById("attach-controls");e.style.display="none",document.querySelector("#attach-drop-zone p").textContent="Drop attachment .bmd",$e&&this.loadedGroup&&(this.scene.remove($e),$e.geometry.dispose(),$e=new bi(this.loadedGroup),$e.visible=Kn.checked,this.scene.add($e)),this.meshRefs=[],this.loadedGroup&&this.loadedGroup.traverse(t=>{t.isMesh&&this.meshRefs.push(t)}),this.buildBlendingUI(),this.updateTextureUI()}disposeAttachment(e){e.traverse(t=>{if(t.isMesh){t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(i=>i.dispose()):(n.map&&n.map.dispose(),n.dispose())}})}async attachModelToBone(e,t){if(!this.loadedGroup){alert("First load the base character model.");return}const n=this.loadedGroup.getObjectByProperty("type","SkinnedMesh");if(!n){alert("The base model does not include a skeleton.");return}const i=n.skeleton.bones;let r=null;if(typeof t=="number"){if(t<0||t>=i.length){alert(`The ${t} index is out of range (0 - ${i.length-1}).`);return}r=i[t]}else if(r=this.loadedGroup.getObjectByName(t),!r){alert(`The bone named “${t}” was not found.`);return}const{group:a,requiredTextures:o}=await this.bmdLoader.load(await e.arrayBuffer());a.name=`attachment_${t}_${this.attachments.length}`,a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),r.add(a),this.attachments.push(a),this.requiredTextures.push(...o),this.updateTextureUI(),$e&&(this.scene.remove($e),$e.geometry.dispose()),$e=new bi(this.loadedGroup),$e.visible=Kn.checked,this.scene.add($e),this.meshRefs=[],this.loadedGroup.traverse(l=>{l.isMesh&&this.meshRefs.push(l)}),this.buildBlendingUI()}undoLastAttachment(){const e=this.attachments.pop();if(!e){alert("No attachments to remove.");return}e.parent&&e.parent.remove(e),e.traverse(t=>{if(t.isMesh){t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(i=>i.dispose()):(n.map&&n.map.dispose(),n.dispose())}}),$e&&(this.scene.remove($e),$e.geometry.dispose()),this.loadedGroup&&($e=new bi(this.loadedGroup),$e.visible=Kn.checked,this.scene.add($e),this.meshRefs=[],this.loadedGroup.traverse(t=>{t.isMesh&&this.meshRefs.push(t)})),this.buildBlendingUI(),this.updateTextureUI()}}const Kx=new jx;let mr=null;if(Et())mr=new $x,mr.setActive(!1);else{const s=document.querySelector('.tab-btn[data-view="character"]');s&&(s.style.display="none");const e=document.getElementById("sidebar-character");e&&e.classList.add("hidden");const t=document.getElementById("view-character");t&&t.classList.add("hidden")}const Zx=document.querySelectorAll(".tab-btn");Zx.forEach(s=>{s.addEventListener("click",()=>{const e=s.dataset.view||"bmd";Kx.setActive(e==="bmd"),mr&&mr.setActive(e==="character")})});
