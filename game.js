(()=>{var Yl="170";var Mm=0,Fu=1,bm=2;var ef=1,$l=2,Zn=3,mn=0,Gt=1,Et=2,Si=0,In=1,gn=2,Ou=3,Bu=4,Sm=5,qi=100,wm=101,Tm=102,Em=103,Am=104,Rm=200,Cm=201,Im=202,Pm=203,Dc=204,Nc=205,Lm=206,Dm=207,Nm=208,Um=209,km=210,Fm=211,Om=212,Bm=213,zm=214,Uc=0,kc=1,Fc=2,Fs=3,Oc=4,Bc=5,zc=6,Hc=7,tf=0,Hm=1,Vm=2,wi=0,Gm=1,Wm=2,Xm=3,qm=4,Ym=5,$m=6,Km=7,zu="attached",Zm="detached",nf=300,Os=301,Bs=302,Vc=303,Gc=304,Eo=306,$i=1e3,jn=1001,Ki=1002,Nt=1003,Kl=1004;var Is=1005;var en=1006,Or=1007;var Fn=1008;var ti=1009,sf=1010,rf=1011,Vr=1012,Zl=1013,Zi=1014,Cn=1015,Zr=1016,Jl=1017,jl=1018,zs=1020,af=35902,of=1021,cf=1022,pn=1023,lf=1024,hf=1025,Ns=1026,Hs=1027,Ql=1028,eh=1029,uf=1030,th=1031;var nh=1033,Ga=33776,Wa=33777,Xa=33778,qa=33779,Wc=35840,Xc=35841,qc=35842,Yc=35843,$c=36196,Kc=37492,Zc=37496,Jc=37808,jc=37809,Qc=37810,el=37811,tl=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,cl=37819,ll=37820,hl=37821,Ya=36492,ul=36494,dl=36495,df=36283,fl=36284,pl=36285,ml=36286,ih=2200,sh=2201,Jm=2202,Vs=2300,Gs=2301,ec=2302,Ps=2400,Ls=2401,$a=2402,rh=2500,jm=2501,ff=0,Ao=1,Jr=2,Qm=3200,eg=3201;var ah=0,tg=1,vi="",Tt="srgb",Wt="srgb-linear",Ro="linear",ut="srgb";var us=7680;var Hu=519,ng=512,ig=513,sg=514,pf=515,rg=516,ag=517,og=518,cg=519,gl=35044;var Vu="300 es",Qn=2e3,Ka=2001,ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gu=1234567,Br=Math.PI/180,Ws=180/Math.PI;function Pn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ft(i,e,t){return Math.max(e,Math.min(t,i))}function oh(i,e){return(i%e+e)%e}function lg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hg(i,e,t){return i!==e?(t-i)/(e-i):0}function zr(i,e,t){return(1-t)*i+t*e}function ug(i,e,t,n){return zr(i,e,1-Math.exp(-t*n))}function dg(i,e=1){return e-Math.abs(oh(i,e*2)-e)}function fg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gg(i,e){return i+Math.random()*(e-i)}function xg(i){return i*(.5-Math.random())}function _g(i){i!==void 0&&(Gu=i);let e=Gu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yg(i){return i*Br}function vg(i){return i*Ws}function Mg(i){return(i&i-1)===0&&i!==0}function bg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*p,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*p,o*l);break;case"ZYZ":i.set(c*p,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var mf={DEG2RAD:Br,RAD2DEG:Ws,generateUUID:Pn,clamp:Ft,euclideanModulo:oh,mapLinear:lg,inverseLerp:hg,lerp:zr,damp:ug,pingpong:dg,smoothstep:fg,smootherstep:pg,randInt:mg,randFloat:gg,randFloatSpread:xg,seededRandom:_g,degToRad:yg,radToDeg:vg,isPowerOfTwo:Mg,ceilPowerOfTwo:bg,floorPowerOfTwo:Sg,setQuaternionFromProperEuler:wg,normalize:ct,denormalize:Rn},Te=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],_=s[1],v=s[4],y=s[7],C=s[2],T=s[5],A=s[8];return r[0]=a*x+o*_+c*C,r[3]=a*g+o*v+c*T,r[6]=a*m+o*y+c*A,r[1]=l*x+h*_+u*C,r[4]=l*g+h*v+u*T,r[7]=l*m+h*y+u*A,r[2]=d*x+f*_+p*C,r[5]=d*g+f*v+p*T,r[8]=d*m+f*y+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(tc.makeScale(e,t)),this}rotate(e){return this.premultiply(tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tc=new We;function gf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tg(){let i=Gr("canvas");return i.style.display="block",i}var Wu={};function kr(i){i in Wu||(Wu[i]=!0,console.warn(i))}function Eg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ag(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ke={enabled:!0,workingColorSpace:Wt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ut&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ut&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?Ro:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xu=[.64,.33,.3,.6,.15,.06],qu=[.2126,.7152,.0722],Yu=[.3127,.329],$u=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ku=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[Wt]:{primaries:Xu,whitePoint:Yu,transfer:Ro,toXYZ:$u,fromXYZ:Ku,luminanceCoefficients:qu,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:Xu,whitePoint:Yu,transfer:ut,toXYZ:$u,fromXYZ:Ku,luminanceCoefficients:qu,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});var ds,xl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=Gr("canvas")),ds.width=e.width,ds.height=e.height;let n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Gr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ei(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cg=0,Za=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nc(s[a].image)):r.push(nc(s[a]))}else r=nc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function nc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?xl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ig=0,Ct=class i extends ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=jn,s=jn,r=en,a=Fn,o=pn,c=ti,l=i.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Pn(),this.name="",this.source=new Za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Ki:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Ki:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=nf;Ct.DEFAULT_ANISOTROPY=1;var tt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,y=(f+1)/2,C=(m+1)/2,T=(h+d)/4,A=(u+x)/4,R=(p+g)/4;return v>y&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=A/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=R/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=R/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_l=class extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ct(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Za(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends _l{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ja=class extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yl=class extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==p){let g=1-o,m=c*d+l*f+h*p+u*x,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let C=Math.sqrt(v),T=Math.atan2(C,m*_);g=Math.sin(g*T)/C,o=Math.sin(o*T)/C}let y=o*_;if(c=c*g+d*y,l=l*g+f*y,h=h*g+p*y,u=u*g+x*y,g===1-o){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-o*f,e[t+2]=l*p+h*f+o*d-c*u,e[t+3]=h*p-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ic=new I,Zu=new tn,Ut=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),pa.subVectors(this.max,Tr),fs.subVectors(e.a,Tr),ps.subVectors(e.b,Tr),ms.subVectors(e.c,Tr),pi.subVectors(ps,fs),mi.subVectors(ms,ps),Bi.subVectors(fs,ms);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Bi.z,Bi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Bi.z,0,-Bi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Bi.y,Bi.x,0];return!sc(t,fs,ps,ms,pa)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,fs,ps,ms,pa))?!1:(ma.crossVectors(pi,mi),t=[ma.x,ma.y,ma.z],sc(t,fs,ps,ms,pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Wn=[new I,new I,new I,new I,new I,new I,new I,new I],Tn=new I,fa=new Ut,fs=new I,ps=new I,ms=new I,pi=new I,mi=new I,Bi=new I,Tr=new I,pa=new I,ma=new I,zi=new I;function sc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zi.fromArray(i,r);let o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=e.dot(zi),l=t.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Pg=new Ut,Er=new I,rc=new I,cn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Pg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);let t=Er.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(rc)),this.expandByPoint(Er.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new I,ac=new I,ga=new I,gi=new I,oc=new I,xa=new I,cc=new I,Xs=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ac.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(ac);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ga),o=gi.dot(this.direction),c=-gi.dot(ga),l=gi.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*c-o,d=a*o-c,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ac).addScaledVector(ga,d),f}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,s,r){oc.subVectors(t,e),xa.subVectors(n,e),cc.crossVectors(oc,xa);let a=this.direction.dot(cc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,e);let c=o*this.direction.dot(xa.crossVectors(gi,xa));if(c<0)return null;let l=o*this.direction.dot(oc.cross(gi));if(l<0||c+l>a)return null;let h=-o*gi.dot(cc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,p,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,p,x,g)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,p=l*h,x=l*u;t[0]=d+x*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,p=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,x=o*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,p=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,f=a*l,p=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lg,e,Dg)}lookAt(e,t,n){let s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),xi.crossVectors(n,an),xi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),xi.crossVectors(n,an)),xi.normalize(),_a.crossVectors(an,xi),s[0]=xi.x,s[4]=_a.x,s[8]=an.x,s[1]=xi.y,s[5]=_a.y,s[9]=an.y,s[2]=xi.z,s[6]=_a.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],v=n[7],y=n[11],C=n[15],T=s[0],A=s[4],R=s[8],S=s[12],b=s[1],L=s[5],W=s[9],P=s[13],F=s[2],N=s[6],D=s[10],G=s[14],z=s[3],ee=s[7],ie=s[11],re=s[15];return r[0]=a*T+o*b+c*F+l*z,r[4]=a*A+o*L+c*N+l*ee,r[8]=a*R+o*W+c*D+l*ie,r[12]=a*S+o*P+c*G+l*re,r[1]=h*T+u*b+d*F+f*z,r[5]=h*A+u*L+d*N+f*ee,r[9]=h*R+u*W+d*D+f*ie,r[13]=h*S+u*P+d*G+f*re,r[2]=p*T+x*b+g*F+m*z,r[6]=p*A+x*L+g*N+m*ee,r[10]=p*R+x*W+g*D+m*ie,r[14]=p*S+x*P+g*G+m*re,r[3]=_*T+v*b+y*F+C*z,r[7]=_*A+v*L+y*N+C*ee,r[11]=_*R+v*W+y*D+C*ie,r[15]=_*S+v*P+y*G+C*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+x*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+g*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+m*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],_=u*g*l-x*d*l+x*c*f-o*g*f-u*c*m+o*d*m,v=p*d*l-h*g*l-p*c*f+a*g*f+h*c*m-a*d*m,y=h*x*l-p*u*l+p*o*f-a*x*f-h*o*m+a*u*m,C=p*u*c-h*x*c-p*o*d+a*x*d+h*o*g-a*u*g,T=t*_+n*v+s*y+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=_*A,e[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*m-n*d*m)*A,e[2]=(o*g*r-x*c*r+x*s*l-n*g*l-o*s*m+n*c*m)*A,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*A,e[4]=v*A,e[5]=(h*g*r-p*d*r+p*s*f-t*g*f-h*s*m+t*d*m)*A,e[6]=(p*c*r-a*g*r-p*s*l+t*g*l+a*s*m-t*c*m)*A,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*A,e[8]=y*A,e[9]=(p*u*r-h*x*r-p*n*f+t*x*f+h*n*m-t*u*m)*A,e[10]=(a*x*r-p*o*r+p*n*l-t*x*l-a*n*m+t*o*m)*A,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*A,e[12]=C*A,e[13]=(h*x*s-p*u*s+p*n*d-t*x*d-h*n*g+t*u*g)*A,e[14]=(p*o*s-a*x*s-p*n*c+t*x*c+a*n*g-t*o*g)*A,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,p=r*u,x=a*h,g=a*u,m=o*u,_=c*l,v=c*h,y=c*u,C=n.x,T=n.y,A=n.z;return s[0]=(1-(x+m))*C,s[1]=(f+y)*C,s[2]=(p-v)*C,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+m))*T,s[6]=(g+_)*T,s[7]=0,s[8]=(p+v)*A,s[9]=(g-_)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),a=gs.set(s[4],s[5],s[6]).length(),o=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);let l=1/r,h=1/a,u=1/o;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Qn){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,p;if(o===Qn)f=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===Ka)f=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Qn){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*l,f=(n+s)*h,p,x;if(o===Qn)p=(a+r)*u,x=-2*u;else if(o===Ka)p=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gs=new I,En=new ze,Lg=new I(0,0,0),Dg=new I(1,1,1),xi=new I,_a=new I,an=new I,Ju=new ze,ju=new tn,On=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ju.setFromEuler(this),this.setFromQuaternion(ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var ja=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ng=0,Qu=new I,xs=new tn,qn=new ze,ya=new I,Ar=new I,Ug=new I,kg=new tn,ed=new I(1,0,0),td=new I(0,1,0),nd=new I(0,0,1),id={type:"added"},Fg={type:"removed"},_s={type:"childadded",child:null},lc={type:"childremoved",child:null},vt=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new On,n=new tn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new We}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(ed,e)}rotateY(e){return this.rotateOnAxis(td,e)}rotateZ(e){return this.rotateOnAxis(nd,e)}translateOnAxis(e,t){return Qu.copy(e).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ed,e)}translateY(e){return this.translateOnAxis(td,e)}translateZ(e){return this.translateOnAxis(nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ya.copy(e):ya.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Ar,ya,this.up):qn.lookAt(ya,Ar,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(qn),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(id),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fg),lc.child=e,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(id),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Ug),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,kg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};vt.DEFAULT_UP=new I(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new I,Yn=new I,hc=new I,$n=new I,ys=new I,vs=new I,sd=new I,uc=new I,dc=new I,fc=new I,pc=new tt,mc=new tt,gc=new tt,Mi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),An.subVectors(e,t),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){An.subVectors(s,t),Yn.subVectors(n,t),hc.subVectors(e,t);let a=An.dot(An),o=An.dot(Yn),c=An.dot(hc),l=Yn.dot(Yn),h=Yn.dot(hc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,p=(a*h-o*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(a,$n.y),c.addScaledVector(o,$n.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),gc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pc,r.x),a.addScaledVector(mc,r.y),a.addScaledVector(gc,r.z),a}static isFrontFacing(e,t,n,s){return An.subVectors(n,t),Yn.subVectors(e,t),An.cross(Yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),An.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ys.subVectors(s,n),vs.subVectors(r,n),uc.subVectors(e,n);let c=ys.dot(uc),l=vs.dot(uc);if(c<=0&&l<=0)return t.copy(n);dc.subVectors(e,s);let h=ys.dot(dc),u=vs.dot(dc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ys,a);fc.subVectors(e,r);let f=ys.dot(fc),p=vs.dot(fc);if(p>=0&&f<=p)return t.copy(r);let x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(vs,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return sd.subVectors(r,s),o=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(sd,o);let m=1/(g+x+d);return a=x*m,o=d*m,t.copy(n).addScaledVector(ys,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},va={h:0,s:0,l:0};function xc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=oh(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xc(a,r,e+1/3),this.g=xc(a,r,e),this.b=xc(a,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=xf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Ke.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Ft(Vt.r*255,0,255))*65536+Math.round(Ft(Vt.g*255,0,255))*256+Math.round(Ft(Vt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Vt.copy(this),t);let n=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Tt){Ke.fromWorkingColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,s=Vt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(va);let n=zr(_i.h,va.h,t),s=zr(_i.s,va.s,t),r=zr(_i.l,va.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Se;Se.NAMES=xf;var Og=0,$t=class extends ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Pn(),this.name="",this.blending=In,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Nc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==In&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dc&&(n.blendSrc=this.blendSrc),this.blendDst!==Nc&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},At=class extends $t{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Rt=new I,Ma=new Te,wt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gl,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gl&&(e.usage=this.usage),e}};var Qa=class extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var eo=class extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var at=class extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Bg=0,fn=new ze,_c=new vt,Ms=new I,on=new Ut,Rr=new Ut,Dt=new I,bt=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gf(e)?eo:Qa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ut);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(on.min,Rr.min),on.expandByPoint(Dt),Dt.addVectors(on.max,Rr.max),on.expandByPoint(Dt)):(on.expandByPoint(Rr.min),on.expandByPoint(Rr.max))}on.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Dt.fromBufferAttribute(o,l),c&&(Ms.fromBufferAttribute(e,l),Dt.add(Ms)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new I,c[R]=new I;let l=new I,h=new I,u=new I,d=new Te,f=new Te,p=new Te,x=new I,g=new I;function m(R,S,b){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,b),h.sub(l),u.sub(l),f.sub(d),p.sub(d);let L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),o[R].add(x),o[S].add(x),o[b].add(x),c[R].add(g),c[S].add(g),c[b].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,S=_.length;R<S;++R){let b=_[R],L=b.start,W=b.count;for(let P=L,F=L+W;P<F;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let v=new I,y=new I,C=new I,T=new I;function A(R){C.fromBufferAttribute(s,R),T.copy(C);let S=o[R];v.copy(S),v.sub(C.multiplyScalar(C.dot(S))).normalize(),y.crossVectors(T,S);let L=y.dot(c[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,S=_.length;R<S;++R){let b=_[R],L=b.start,W=b.count;for(let P=L,F=L+W;P<F;P+=3)A(e.getX(P+0)),A(e.getX(P+1)),A(e.getX(P+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,p=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let m=0;m<h;m++)d[p++]=l[f++]}return new wt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rd=new ze,Hi=new Xs,ba=new cn,ad=new I,Sa=new I,wa=new I,Ta=new I,yc=new I,Ea=new I,od=new I,Aa=new I,Ae=class extends vt{constructor(e=new bt,t=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ea.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(yc.fromBufferAttribute(u,e),a?Ea.addScaledVector(yc,h):Ea.addScaledVector(yc.sub(t),h))}t.add(Ea)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!(ba.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(ba,ad)===null||Hi.origin.distanceToSquared(ad)>(e.far-e.near)**2))&&(rd.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(rd),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,C=v;y<C;y+=3){let T=o.getX(y),A=o.getX(y+1),R=o.getX(y+2);s=Ra(this,m,e,n,l,h,u,T,A,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);s=Ra(this,a,e,n,l,h,u,_,v,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,C=v;y<C;y+=3){let T=y,A=y+1,R=y+2;s=Ra(this,m,e,n,l,h,u,T,A,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=g,v=g+1,y=g+2;s=Ra(this,a,e,n,l,h,u,_,v,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function zg(i,e,t,n,s,r,a,o){let c;if(e.side===Gt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===mn,o),c===null)return null;Aa.copy(o),Aa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Aa);return l<t.near||l>t.far?null:{distance:l,point:Aa.clone(),object:i}}function Ra(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Sa),i.getVertexPosition(c,wa),i.getVertexPosition(l,Ta);let h=zg(i,e,t,n,Sa,wa,Ta,od);if(h){let u=new I;Mi.getBarycoord(od,Sa,wa,Ta,u),s&&(h.uv=Mi.getInterpolatedAttribute(s,o,c,l,u,new Te)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,o,c,l,u,new Te)),a&&(h.normal=Mi.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new I,materialIndex:0};Mi.getNormal(Sa,wa,Ta,d.normal),h.face=d,h.barycoord=u}return h}var ln=class i extends bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function p(x,g,m,_,v,y,C,T,A,R,S){let b=y/A,L=C/R,W=y/2,P=C/2,F=T/2,N=A+1,D=R+1,G=0,z=0,ee=new I;for(let ie=0;ie<D;ie++){let re=ie*L-P;for(let te=0;te<N;te++){let ge=te*b-W;ee[x]=ge*_,ee[g]=re*v,ee[m]=F,l.push(ee.x,ee.y,ee.z),ee[x]=0,ee[g]=0,ee[m]=T>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(te/A),u.push(1-ie/R),G+=1}}for(let ie=0;ie<R;ie++)for(let re=0;re<A;re++){let te=d+re+N*ie,ge=d+re+N*(ie+1),Y=d+(re+1)+N*(ie+1),H=d+(re+1)+N*ie;c.push(te,ge,H),c.push(ge,Y,H),z+=6}o.addGroup(f,z,S),f+=z,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function qs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=qs(i[t]);for(let s in n)e[s]=n[s]}return e}function Hg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _f(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var Vg={clone:qs,merge:Yt},Gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends $t{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gg,this.fragmentShader=Wg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=Hg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},to=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yi=new I,cd=new Te,ld=new Te,It=class extends to{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,cd,ld),t.subVectors(ld,cd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Br*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bs=-90,Ss=1,vl=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new It(bs,Ss,e,t);s.layers=this.layers,this.add(s);let r=new It(bs,Ss,e,t);r.layers=this.layers,this.add(r);let a=new It(bs,Ss,e,t);a.layers=this.layers,this.add(a);let o=new It(bs,Ss,e,t);o.layers=this.layers,this.add(o);let c=new It(bs,Ss,e,t);c.layers=this.layers,this.add(c);let l=new It(bs,Ss,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},no=class extends Ct{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Os,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ml=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new no(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Si});r.uniforms.tEquirect.value=t;let a=new Ae(s,r),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=en),new vl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},vc=new I,Xg=new I,qg=new We,Jn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=vc.subVectors(n,t).cross(Xg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(vc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qg.getNormalMatrix(e),s=this.coplanarPoint(vc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new cn,Ca=new I,Wr=class{constructor(e=new Jn,t=new Jn,n=new Jn,s=new Jn,r=new Jn,a=new Jn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],x=s[10],g=s[11],m=s[12],_=s[13],v=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,g-f,y-m).normalize(),n[1].setComponents(c+r,d+l,g+f,y+m).normalize(),n[2].setComponents(c+a,d+h,g+p,y+_).normalize(),n[3].setComponents(c-a,d-h,g-p,y-_).normalize(),n[4].setComponents(c-o,d-u,g-x,y-v).normalize(),t===Qn)n[5].setComponents(c+o,d+u,g+x,y+v).normalize();else if(t===Ka)n[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ca.x=s.normal.x>0?e.max.x:e.min.x,Ca.y=s.normal.y>0?e.max.y:e.min.y,Ca.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Yg(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ln=class i extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*d-a;for(let v=0;v<l;v++){let y=v*u-r;p.push(y,-_,0),x.push(0,0,1),g.push(v/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<o;_++){let v=_+l*m,y=_+l*(m+1),C=_+1+l*(m+1),T=_+1+l*m;f.push(v,y,T),f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new at(p,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},$g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kg=`#ifdef USE_ALPHAHASH
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
#endif`,Zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e0=`#ifdef USE_AOMAP
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
#endif`,t0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n0=`#ifdef USE_BATCHING
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
#endif`,i0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o0=`#ifdef USE_IRIDESCENCE
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
#endif`,c0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,x0=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,_0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y0=`vec3 transformedNormal = objectNormal;
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
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w0="gl_FragColor = linearToOutputTexel( gl_FragColor );",T0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
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
}`,k0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B0=`uniform bool receiveShadow;
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
#endif`,z0=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
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
#endif`,q0=`struct PhysicalMaterial {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Y0=`
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ex=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ix=`#if defined( USE_POINTS_UV )
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
#endif`,sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ox=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`#ifdef USE_MORPHTARGETS
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
#endif`,hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gx=`#ifdef USE_NORMALMAP
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
#endif`,xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lx=`float getShadowMask() {
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
}`,Dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nx=`#ifdef USE_SKINNING
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
#endif`,Ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,Fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hx=`#ifdef USE_TRANSMISSION
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
#endif`,Vx=`#ifdef USE_TRANSMISSION
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$x=`uniform sampler2D t2D;
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`#include <common>
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
}`,e_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,t_=`#define DISTANCE
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
}`,n_=`#define DISTANCE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`uniform float scale;
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
}`,a_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,c_=`uniform vec3 diffuse;
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
}`,l_=`#define LAMBERT
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
}`,h_=`#define LAMBERT
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
}`,u_=`#define MATCAP
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
}`,d_=`#define MATCAP
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
}`,f_=`#define NORMAL
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
}`,p_=`#define NORMAL
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
}`,m_=`#define PHONG
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
}`,g_=`#define PHONG
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
}`,x_=`#define STANDARD
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
}`,__=`#define STANDARD
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
}`,y_=`#define TOON
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
}`,v_=`#define TOON
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
}`,M_=`uniform float size;
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
}`,b_=`uniform vec3 diffuse;
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
}`,S_=`#include <common>
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
}`,w_=`uniform vec3 color;
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
}`,T_=`uniform float rotation;
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
}`,E_=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:$g,alphahash_pars_fragment:Kg,alphamap_fragment:Zg,alphamap_pars_fragment:Jg,alphatest_fragment:jg,alphatest_pars_fragment:Qg,aomap_fragment:e0,aomap_pars_fragment:t0,batching_pars_vertex:n0,batching_vertex:i0,begin_vertex:s0,beginnormal_vertex:r0,bsdfs:a0,iridescence_fragment:o0,bumpmap_pars_fragment:c0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:h0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:d0,color_fragment:f0,color_pars_fragment:p0,color_pars_vertex:m0,color_vertex:g0,common:x0,cube_uv_reflection_fragment:_0,defaultnormal_vertex:y0,displacementmap_pars_vertex:v0,displacementmap_vertex:M0,emissivemap_fragment:b0,emissivemap_pars_fragment:S0,colorspace_fragment:w0,colorspace_pars_fragment:T0,envmap_fragment:E0,envmap_common_pars_fragment:A0,envmap_pars_fragment:R0,envmap_pars_vertex:C0,envmap_physical_pars_fragment:z0,envmap_vertex:I0,fog_vertex:P0,fog_pars_vertex:L0,fog_fragment:D0,fog_pars_fragment:N0,gradientmap_pars_fragment:U0,lightmap_pars_fragment:k0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:O0,lights_pars_begin:B0,lights_toon_fragment:H0,lights_toon_pars_fragment:V0,lights_phong_fragment:G0,lights_phong_pars_fragment:W0,lights_physical_fragment:X0,lights_physical_pars_fragment:q0,lights_fragment_begin:Y0,lights_fragment_maps:$0,lights_fragment_end:K0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:J0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:Q0,map_fragment:ex,map_pars_fragment:tx,map_particle_fragment:nx,map_particle_pars_fragment:ix,metalnessmap_fragment:sx,metalnessmap_pars_fragment:rx,morphinstance_vertex:ax,morphcolor_vertex:ox,morphnormal_vertex:cx,morphtarget_pars_vertex:lx,morphtarget_vertex:hx,normal_fragment_begin:ux,normal_fragment_maps:dx,normal_pars_fragment:fx,normal_pars_vertex:px,normal_vertex:mx,normalmap_pars_fragment:gx,clearcoat_normal_fragment_begin:xx,clearcoat_normal_fragment_maps:_x,clearcoat_pars_fragment:yx,iridescence_pars_fragment:vx,opaque_fragment:Mx,packing:bx,premultiplied_alpha_fragment:Sx,project_vertex:wx,dithering_fragment:Tx,dithering_pars_fragment:Ex,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:Rx,shadowmap_pars_fragment:Cx,shadowmap_pars_vertex:Ix,shadowmap_vertex:Px,shadowmask_pars_fragment:Lx,skinbase_vertex:Dx,skinning_pars_vertex:Nx,skinning_vertex:Ux,skinnormal_vertex:kx,specularmap_fragment:Fx,specularmap_pars_fragment:Ox,tonemapping_fragment:Bx,tonemapping_pars_fragment:zx,transmission_fragment:Hx,transmission_pars_fragment:Vx,uv_pars_fragment:Gx,uv_pars_vertex:Wx,uv_vertex:Xx,worldpos_vertex:qx,background_vert:Yx,background_frag:$x,backgroundCube_vert:Kx,backgroundCube_frag:Zx,cube_vert:Jx,cube_frag:jx,depth_vert:Qx,depth_frag:e_,distanceRGBA_vert:t_,distanceRGBA_frag:n_,equirect_vert:i_,equirect_frag:s_,linedashed_vert:r_,linedashed_frag:a_,meshbasic_vert:o_,meshbasic_frag:c_,meshlambert_vert:l_,meshlambert_frag:h_,meshmatcap_vert:u_,meshmatcap_frag:d_,meshnormal_vert:f_,meshnormal_frag:p_,meshphong_vert:m_,meshphong_frag:g_,meshphysical_vert:x_,meshphysical_frag:__,meshtoon_vert:y_,meshtoon_frag:v_,points_vert:M_,points_frag:b_,shadow_vert:S_,shadow_frag:w_,sprite_vert:T_,sprite_frag:E_},le={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},kn={basic:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Yt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Yt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Yt([le.points,le.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Yt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Yt([le.common,le.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Yt([le.sprite,le.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Yt([le.common,le.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Yt([le.lights,le.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};kn.physical={uniforms:Yt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Ia={r:0,b:0,g:0},Gi=new On,A_=new ze;function R_(i,e,t,n,s,r,a){let o=new Se(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function p(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function x(_){let v=!1,y=p(_);y===null?m(o,c):y&&y.isColor&&(m(y,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,v){let y=p(v);y&&(y.isCubeTexture||y.mapping===Eo)?(h===void 0&&(h=new Ae(new ln(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:qs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gi.copy(v.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(A_.makeRotationFromEuler(Gi)),h.material.toneMapped=Ke.getTransfer(y.colorSpace)!==ut,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ae(new Ln(2,2),new Kt({name:"BackgroundMaterial",uniforms:qs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,v){_.getRGB(Ia,_f(i)),n.buffers.color.setClear(Ia.r,Ia.g,Ia.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),c=v,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,m(o,c)},render:x,addToRenderList:g}}function C_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(b,L,W,P,F){let N=!1,D=u(P,W,L);r!==D&&(r=D,l(r.object)),N=f(b,P,W,F),N&&p(b,P,W,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,y(b,L,W,P),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,L,W){let P=W.wireframe===!0,F=n[b.id];F===void 0&&(F={},n[b.id]=F);let N=F[L.id];N===void 0&&(N={},F[L.id]=N);let D=N[P];return D===void 0&&(D=d(c()),N[P]=D),D}function d(b){let L=[],W=[],P=[];for(let F=0;F<t;F++)L[F]=0,W[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:P,object:b,attributes:{},index:null}}function f(b,L,W,P){let F=r.attributes,N=L.attributes,D=0,G=W.getAttributes();for(let z in G)if(G[z].location>=0){let ie=F[z],re=N[z];if(re===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),ie===void 0||ie.attribute!==re||re&&ie.data!==re.data)return!0;D++}return r.attributesNum!==D||r.index!==P}function p(b,L,W,P){let F={},N=L.attributes,D=0,G=W.getAttributes();for(let z in G)if(G[z].location>=0){let ie=N[z];ie===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor));let re={};re.attribute=ie,ie&&ie.data&&(re.data=ie.data),F[z]=re,D++}r.attributes=F,r.attributesNum=D,r.index=P}function x(){let b=r.newAttributes;for(let L=0,W=b.length;L<W;L++)b[L]=0}function g(b){m(b,0)}function m(b,L){let W=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;W[b]=1,P[b]===0&&(i.enableVertexAttribArray(b),P[b]=1),F[b]!==L&&(i.vertexAttribDivisor(b,L),F[b]=L)}function _(){let b=r.newAttributes,L=r.enabledAttributes;for(let W=0,P=L.length;W<P;W++)L[W]!==b[W]&&(i.disableVertexAttribArray(W),L[W]=0)}function v(b,L,W,P,F,N,D){D===!0?i.vertexAttribIPointer(b,L,W,F,N):i.vertexAttribPointer(b,L,W,P,F,N)}function y(b,L,W,P){x();let F=P.attributes,N=W.getAttributes(),D=L.defaultAttributeValues;for(let G in N){let z=N[G];if(z.location>=0){let ee=F[G];if(ee===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor)),ee!==void 0){let ie=ee.normalized,re=ee.itemSize,te=e.get(ee);if(te===void 0)continue;let ge=te.buffer,Y=te.type,H=te.bytesPerElement,se=Y===i.INT||Y===i.UNSIGNED_INT||ee.gpuType===Zl;if(ee.isInterleavedBufferAttribute){let j=ee.data,he=j.stride,me=ee.offset;if(j.isInstancedInterleavedBuffer){for(let Le=0;Le<z.locationSize;Le++)m(z.location+Le,j.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Le=0;Le<z.locationSize;Le++)g(z.location+Le);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Le=0;Le<z.locationSize;Le++)v(z.location+Le,re/z.locationSize,Y,ie,he*H,(me+re/z.locationSize*Le)*H,se)}else{if(ee.isInstancedBufferAttribute){for(let j=0;j<z.locationSize;j++)m(z.location+j,ee.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let j=0;j<z.locationSize;j++)g(z.location+j);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let j=0;j<z.locationSize;j++)v(z.location+j,re/z.locationSize,Y,ie,re*H,re/z.locationSize*j*H,se)}}else if(D!==void 0){let ie=D[G];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(z.location,ie);break;case 3:i.vertexAttrib3fv(z.location,ie);break;case 4:i.vertexAttrib4fv(z.location,ie);break;default:i.vertexAttrib1fv(z.location,ie)}}}}_()}function C(){R();for(let b in n){let L=n[b];for(let W in L){let P=L[W];for(let F in P)h(P[F].object),delete P[F];delete L[W]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let L=n[b.id];for(let W in L){let P=L[W];for(let F in P)h(P[F].object),delete P[F];delete L[W]}delete n[b.id]}function A(b){for(let L in n){let W=n[L];if(W[b.id]===void 0)continue;let P=W[b.id];for(let F in P)h(P[F].object),delete P[F];delete W[b.id]}}function R(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function I_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)a(l[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*d[x];t.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function P_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let R=A===Zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ti&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Cn&&!R)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function L_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Jn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):l();else{let _=r?0:n,v=_*4,y=m.clippingState||null;c.value=y,y=h(p,d,v,f);for(let C=0;C!==v;++C)y[C]=t[C];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=f+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=f;v!==x;++v,y+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function D_(i){let e=new WeakMap;function t(a,o){return o===Vc?a.mapping=Os:o===Gc&&(a.mapping=Bs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Vc||o===Gc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ml(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ys=class extends to{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ds=4,hd=[.125,.215,.35,.446,.526,.582],Yi=20,Mc=new Ys,ud=new Se,bc=null,Sc=0,wc=0,Tc=!1,Xi=(1+Math.sqrt(5))/2,ws=1/Xi,dd=[new I(-Xi,ws,0),new I(Xi,ws,0),new I(-ws,0,Xi),new I(ws,0,Xi),new I(0,Xi,-ws),new I(0,Xi,ws),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],io=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,Sc,wc),this._renderer.xr.enabled=Tc,e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Zr,format:pn,colorSpace:Wt,depthBuffer:!1},s=fd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N_(r)),this._blurMaterial=U_(r,e,t)}return s}_compileMaterial(e){let t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,n,s){let o=new It(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ud),h.toneMapping=wi,h.autoClear=!1;let f=new At({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),p=new Ae(new ln,f),x=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(ud),x=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):_===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));let v=this._cubeSize;Pa(s,_*v,m>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(p,o),h.render(e,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Os||e.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Pa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Mc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dd[(s-r-1)%dd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ae(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):Yi;g>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yi}`);let m=[],_=0;for(let A=0;A<Yi;++A){let R=A/x,S=Math.exp(-R*R/2);m.push(S),A===0?_+=S:A<g&&(_+=2*S)}for(let A=0;A<m.length;A++)m[A]=m[A]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;let y=this._sizeLods[s],C=3*y*(s>v-Ds?s-v+Ds:0),T=4*(this._cubeSize-y);Pa(t,C,T,3*y,2*y),c.setRenderTarget(t),c.render(u,Mc)}};function N_(i){let e=[],t=[],n=[],s=i,r=i-Ds+1+hd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ds?c=hd[a-i+Ds-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*f),v=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,R=T>2?0:-1,S=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];_.set(S,x*p*T),v.set(d,g*p*T);let b=[T,T,T,T,T,T];y.set(b,m*p*T)}let C=new bt;C.setAttribute("position",new wt(_,x)),C.setAttribute("uv",new wt(v,g)),C.setAttribute("faceIndex",new wt(y,m)),e.push(C),s>Ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fd(i,e,t){let n=new ii(i,e,t);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function U_(i,e,t){let n=new Float32Array(Yi),s=new I(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function pd(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function md(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function k_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Vc||c===Gc,h=c===Os||c===Bs;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new io(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new io(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function F_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&kr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function O_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);for(let p in d.morphAttributes){let x=d.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let x=f[p];for(let g=0,m=x.length;g<m;g++)e.update(x[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let v=0,y=_.length;v<y;v+=3){let C=_[v+0],T=_[v+1],A=_[v+2];d.push(C,T,T,A,A,C)}}else if(p!==void 0){let _=p.array;x=p.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let C=v+0,T=v+1,A=v+2;d.push(C,T,T,A,A,C)}}else return;let g=new(gf(d)?eo:Qa)(d,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function B_(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*a,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function u(d,f,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/a,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_]*x[_];t.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function z_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function H_(i,e,t){let n=new WeakMap,s=new tt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;f===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let y=o.attributes.position.count*v,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*C*4*u),A=new Ja(T,y,C,u);A.type=Cn,A.needsUpdate=!0;let R=v*4;for(let b=0;b<u;b++){let L=g[b],W=m[b],P=_[b],F=y*C*4*b;for(let N=0;N<L.count;N++){let D=N*R;f===!0&&(s.fromBufferAttribute(L,N),T[F+D+0]=s.x,T[F+D+1]=s.y,T[F+D+2]=s.z,T[F+D+3]=0),p===!0&&(s.fromBufferAttribute(W,N),T[F+D+4]=s.x,T[F+D+5]=s.y,T[F+D+6]=s.z,T[F+D+7]=0),x===!0&&(s.fromBufferAttribute(P,N),T[F+D+8]=s.x,T[F+D+9]=s.y,T[F+D+10]=s.z,T[F+D+11]=P.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new Te(y,C)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function V_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var so=class extends Ct{constructor(e,t,n,s,r,a,o,c,l,h=Ns){if(h!==Ns&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ns&&(n=Zi),n===void 0&&h===Hs&&(n=zs),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=c!==void 0?c:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},vf=new Ct,gd=new so(1,1),Mf=new Ja,bf=new yl,Sf=new no,xd=[],_d=[],yd=new Float32Array(16),vd=new Float32Array(9),Md=new Float32Array(4);function rr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=xd[s];if(r===void 0&&(r=new Float32Array(s),xd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Co(i,e){let t=_d[e];t===void 0&&(t=new Int32Array(e),_d[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function G_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function W_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function X_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function Y_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Md.set(n),i.uniformMatrix2fv(this.addr,!1,Md),Lt(t,n)}}function $_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;vd.set(n),i.uniformMatrix3fv(this.addr,!1,vd),Lt(t,n)}}function K_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;yd.set(n),i.uniformMatrix4fv(this.addr,!1,yd),Lt(t,n)}}function Z_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function ey(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function sy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gd.compareFunction=pf,r=gd):r=vf,t.setTexture2D(e||r,s)}function ry(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bf,s)}function ay(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Sf,s)}function oy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Mf,s)}function cy(i){switch(i){case 5126:return G_;case 35664:return W_;case 35665:return X_;case 35666:return q_;case 35674:return Y_;case 35675:return $_;case 35676:return K_;case 5124:case 35670:return Z_;case 35667:case 35671:return J_;case 35668:case 35672:return j_;case 35669:case 35673:return Q_;case 5125:return ey;case 36294:return ty;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return ry;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return oy}}function ly(i,e){i.uniform1fv(this.addr,e)}function hy(i,e){let t=rr(e,this.size,2);i.uniform2fv(this.addr,t)}function uy(i,e){let t=rr(e,this.size,3);i.uniform3fv(this.addr,t)}function dy(i,e){let t=rr(e,this.size,4);i.uniform4fv(this.addr,t)}function fy(i,e){let t=rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function py(i,e){let t=rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function my(i,e){let t=rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gy(i,e){i.uniform1iv(this.addr,e)}function xy(i,e){i.uniform2iv(this.addr,e)}function _y(i,e){i.uniform3iv(this.addr,e)}function yy(i,e){i.uniform4iv(this.addr,e)}function vy(i,e){i.uniform1uiv(this.addr,e)}function My(i,e){i.uniform2uiv(this.addr,e)}function by(i,e){i.uniform3uiv(this.addr,e)}function Sy(i,e){i.uniform4uiv(this.addr,e)}function wy(i,e,t){let n=this.cache,s=e.length,r=Co(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||vf,r[a])}function Ty(i,e,t){let n=this.cache,s=e.length,r=Co(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bf,r[a])}function Ey(i,e,t){let n=this.cache,s=e.length,r=Co(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Sf,r[a])}function Ay(i,e,t){let n=this.cache,s=e.length,r=Co(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Mf,r[a])}function Ry(i){switch(i){case 5126:return ly;case 35664:return hy;case 35665:return uy;case 35666:return dy;case 35674:return fy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return xy;case 35668:case 35672:return _y;case 35669:case 35673:return yy;case 5125:return vy;case 36294:return My;case 36295:return by;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return Ay}}var bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cy(t.type)}},Sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ry(t.type)}},wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ec=/(\w+)(\])?(\[|\.)?/g;function bd(i,e){i.seq.push(e),i.map[e.id]=e}function Cy(i,e,t){let n=i.name,s=n.length;for(Ec.lastIndex=0;;){let r=Ec.exec(n),a=Ec.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){bd(t,l===void 0?new bl(o,i,e):new Sl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new wl(o),bd(t,u)),t=u}}}var ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Cy(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Sd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Iy=37297,Py=0;function Ly(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var wd=new We;function Dy(i){Ke._getMatrix(wd,Ke.workingColorSpace,i);let e=`mat3( ${wd.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Ro:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Td(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ly(i.getShaderSource(e),a)}else return s}function Ny(i,e){let t=Dy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Uy(i,e){let t;switch(e){case Gm:t="Linear";break;case Wm:t="Reinhard";break;case Xm:t="Cineon";break;case qm:t="ACESFilmic";break;case $m:t="AgX";break;case Km:t="Neutral";break;case Ym:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var La=new I;function ky(){Ke.getLuminanceCoefficients(La);let i=La.x.toFixed(4),e=La.y.toFixed(4),t=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function Oy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function By(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Fr(i){return i!==""}function Ed(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ad(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(i){return i.replace(zy,Vy)}var Hy=new Map;function Vy(i,e){let t=Ye[e];if(t===void 0){let n=Hy.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tl(t)}var Gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(i){return i.replace(Gy,Wy)}function Wy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ef?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function qy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Os:case Bs:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function $y(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tf:e="ENVMAP_BLENDING_MULTIPLY";break;case Hm:e="ENVMAP_BLENDING_MIX";break;case Vm:e="ENVMAP_BLENDING_ADD";break}return e}function Ky(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Xy(t),l=qy(t),h=Yy(t),u=$y(t),d=Ky(t),f=Fy(t),p=Oy(r),x=s.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fr).join(`
`),m.length>0&&(m+=`
`)):(g=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),m=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==wi?Uy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Ny("linearToOutputTexel",t.outputColorSpace),ky(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),a=Tl(a),a=Ed(a,t),a=Ad(a,t),o=Tl(o),o=Ed(o,t),o=Ad(o,t),a=Rd(a),o=Rd(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=_+g+a,y=_+m+o,C=Sd(s,s.VERTEX_SHADER,v),T=Sd(s,s.FRAGMENT_SHADER,y);s.attachShader(x,C),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(x).trim(),P=s.getShaderInfoLog(C).trim(),F=s.getShaderInfoLog(T).trim(),N=!0,D=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,T);else{let G=Td(s,C,"vertex"),z=Td(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+G+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(P===""||F==="")&&(D=!1);D&&(L.diagnostics={runnable:N,programLog:W,vertexShader:{log:P,prefix:g},fragmentShader:{log:F,prefix:m}})}s.deleteShader(C),s.deleteShader(T),R=new ks(s,x),S=By(s,x)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Iy)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Py++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}var Jy=0,El=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Al(e),t.set(e,n)),n}},Al=class{constructor(e){this.id=Jy++,this.code=e,this.usedTimes=0}};function jy(i,e,t,n,s,r,a){let o=new ja,c=new El,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,b,L,W,P){let F=W.fog,N=P.geometry,D=S.isMeshStandardMaterial?W.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||D),z=G&&G.mapping===Eo?G.image.height:null,ee=p[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ie=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,re=ie!==void 0?ie.length:0,te=0;N.morphAttributes.position!==void 0&&(te=1),N.morphAttributes.normal!==void 0&&(te=2),N.morphAttributes.color!==void 0&&(te=3);let ge,Y,H,se;if(ee){let ot=kn[ee];ge=ot.vertexShader,Y=ot.fragmentShader}else ge=S.vertexShader,Y=S.fragmentShader,c.update(S),H=c.getVertexShaderID(S),se=c.getFragmentShaderID(S);let j=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),me=P.isInstancedMesh===!0,Le=P.isBatchedMesh===!0,Je=!!S.map,ke=!!S.matcap,je=!!G,k=!!S.aoMap,Xt=!!S.lightMap,Oe=!!S.bumpMap,Xe=!!S.normalMap,Re=!!S.displacementMap,ht=!!S.emissiveMap,Ce=!!S.metalnessMap,E=!!S.roughnessMap,M=S.anisotropy>0,V=S.clearcoat>0,J=S.dispersion>0,ne=S.iridescence>0,Z=S.sheen>0,be=S.transmission>0,K=M&&!!S.anisotropyMap,ce=V&&!!S.clearcoatMap,He=V&&!!S.clearcoatNormalMap,ae=V&&!!S.clearcoatRoughnessMap,xe=ne&&!!S.iridescenceMap,De=ne&&!!S.iridescenceThicknessMap,Fe=Z&&!!S.sheenColorMap,_e=Z&&!!S.sheenRoughnessMap,Qe=!!S.specularMap,qe=!!S.specularColorMap,pt=!!S.specularIntensityMap,U=be&&!!S.transmissionMap,ue=be&&!!S.thicknessMap,$=!!S.gradientMap,Q=!!S.alphaMap,pe=S.alphaTest>0,de=!!S.alphaHash,Ve=!!S.extensions,St=wi;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(St=i.toneMapping);let zt={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:ge,fragmentShader:Y,defines:S.defines,customVertexShaderID:H,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Le,batchingColor:Le&&P._colorsTexture!==null,instancing:me,instancingColor:me&&P.instanceColor!==null,instancingMorph:me&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Wt,alphaToCoverage:!!S.alphaToCoverage,map:Je,matcap:ke,envMap:je,envMapMode:je&&G.mapping,envMapCubeUVHeight:z,aoMap:k,lightMap:Xt,bumpMap:Oe,normalMap:Xe,displacementMap:d&&Re,emissiveMap:ht,normalMapObjectSpace:Xe&&S.normalMapType===tg,normalMapTangentSpace:Xe&&S.normalMapType===ah,metalnessMap:Ce,roughnessMap:E,anisotropy:M,anisotropyMap:K,clearcoat:V,clearcoatMap:ce,clearcoatNormalMap:He,clearcoatRoughnessMap:ae,dispersion:J,iridescence:ne,iridescenceMap:xe,iridescenceThicknessMap:De,sheen:Z,sheenColorMap:Fe,sheenRoughnessMap:_e,specularMap:Qe,specularColorMap:qe,specularIntensityMap:pt,transmission:be,transmissionMap:U,thicknessMap:ue,gradientMap:$,opaque:S.transparent===!1&&S.blending===In&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:pe,alphaHash:de,combine:S.combine,mapUv:Je&&x(S.map.channel),aoMapUv:k&&x(S.aoMap.channel),lightMapUv:Xt&&x(S.lightMap.channel),bumpMapUv:Oe&&x(S.bumpMap.channel),normalMapUv:Xe&&x(S.normalMap.channel),displacementMapUv:Re&&x(S.displacementMap.channel),emissiveMapUv:ht&&x(S.emissiveMap.channel),metalnessMapUv:Ce&&x(S.metalnessMap.channel),roughnessMapUv:E&&x(S.roughnessMap.channel),anisotropyMapUv:K&&x(S.anisotropyMap.channel),clearcoatMapUv:ce&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:He&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:De&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(S.sheenRoughnessMap.channel),specularMapUv:Qe&&x(S.specularMap.channel),specularColorMapUv:qe&&x(S.specularColorMap.channel),specularIntensityMapUv:pt&&x(S.specularIntensityMap.channel),transmissionMapUv:U&&x(S.transmissionMap.channel),thicknessMapUv:ue&&x(S.thicknessMap.channel),alphaMapUv:Q&&x(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Xe||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!N.attributes.uv&&(Je||Q),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:he,skinning:P.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:Je&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===ut,decodeVideoTextureEmissive:ht&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Et,flipSided:S.side===Gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ve&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&S.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function m(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(_(b,S),v(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function _(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function v(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){let b=p[S.type],L;if(b){let W=kn[b];L=Vg.clone(W.uniforms)}else L=S.uniforms;return L}function C(S,b){let L;for(let W=0,P=h.length;W<P;W++){let F=h[W];if(F.cacheKey===b){L=F,++L.usedTimes;break}}return L===void 0&&(L=new Zy(i,b,S,r),h.push(L)),L}function T(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function A(S){c.remove(S)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:R}}function Qy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ev(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Id(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,p,x,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function o(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function c(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||ev),n.length>1&&n.sort(d||Id),s.length>1&&s.sort(d||Id)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function tv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Pd,i.set(n,[a])):s>=r.length?(a=new Pd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function nv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Se};break;case"SpotLight":t={position:new I,direction:new I,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function iv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var sv=0;function rv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function av(i){let e=new nv,t=iv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new ze,a=new ze;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,_=0,v=0,y=0,C=0,T=0,A=0;l.sort(rv);for(let S=0,b=l.length;S<b;S++){let L=l[S],W=L.color,P=L.intensity,F=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=W.r*P,u+=W.g*P,d+=W.b*P;else if(L.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(L.sh.coefficients[D],P);A++}else if(L.isDirectionalLight){let D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let G=L.shadow,z=t.get(L);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=L.shadow.matrix,_++}n.directional[f]=D,f++}else if(L.isSpotLight){let D=e.get(L);D.position.setFromMatrixPosition(L.matrixWorld),D.color.copy(W).multiplyScalar(P),D.distance=F,D.coneCos=Math.cos(L.angle),D.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),D.decay=L.decay,n.spot[x]=D;let G=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,G.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[x]=G.matrix,L.castShadow){let z=t.get(L);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=N,y++}x++}else if(L.isRectAreaLight){let D=e.get(L);D.color.copy(W).multiplyScalar(P),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=D,g++}else if(L.isPointLight){let D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),D.distance=L.distance,D.decay=L.decay,L.castShadow){let G=L.shadow,z=t.get(L);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,n.pointShadow[p]=z,n.pointShadowMap[p]=N,n.pointShadowMatrix[p]=L.shadow.matrix,v++}n.point[p]=D,p++}else if(L.isHemisphereLight){let D=e.get(L);D.skyColor.copy(L.color).multiplyScalar(P),D.groundColor.copy(L.groundColor).multiplyScalar(P),n.hemi[m]=D,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==p||R.spotLength!==x||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,R.directionalLength=f,R.pointLength=p,R.spotLength=x,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=A,n.version=sv++)}function c(l,h){let u=0,d=0,f=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,_=l.length;m<_;m++){let v=l[m];if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(v.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let y=n.rectArea[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function Ld(i){let e=new av(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ov(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ld(i),e.set(s,[o])):r>=a.length?(o=new Ld(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Rl=class extends $t{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cl=class extends $t{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lv=`uniform sampler2D shadow_pass;
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
}`;function hv(i,e,t){let n=new Wr,s=new Te,r=new Te,a=new tt,o=new Rl({depthPacking:eg}),c=new Cl,l={},h=t.maxTextureSize,u={[mn]:Gt,[Gt]:mn,[Et]:Et},d=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:cv,fragmentShader:lv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new bt;p.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ae(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef;let m=this.type;this.render=function(T,A,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Si),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let P=m!==Zn&&this.type===Zn,F=m===Zn&&this.type!==Zn;for(let N=0,D=T.length;N<D;N++){let G=T[N],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ee=z.getFrameExtents();if(s.multiply(ee),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,z.mapSize.y=r.y)),z.map===null||P===!0||F===!0){let re=this.type!==Zn?{minFilter:Nt,magFilter:Nt}:{};z.map!==null&&z.map.dispose(),z.map=new ii(s.x,s.y,re),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let ie=z.getViewportCount();for(let re=0;re<ie;re++){let te=z.getViewport(re);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),W.viewport(a),z.updateMatrices(G,re),n=z.getFrustum(),y(A,R,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Zn&&_(z,R),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,b,L)};function _(T,A){let R=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ii(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,R,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,R,f,x,null)}function v(T,A,R,S){let b=null,L=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=R.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let W=b.uuid,P=A.uuid,F=l[W];F===void 0&&(F={},l[W]=F);let N=F[P];N===void 0&&(N=b.clone(),F[P]=N,A.addEventListener("dispose",C)),b=N}if(b.visible=A.visible,b.wireframe=A.wireframe,S===Zn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let W=i.properties.get(b);W.light=R}return b}function y(T,A,R,S,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let P=e.update(T),F=T.material;if(Array.isArray(F)){let N=P.groups;for(let D=0,G=N.length;D<G;D++){let z=N[D],ee=F[z.materialIndex];if(ee&&ee.visible){let ie=v(T,ee,S,b);T.onBeforeShadow(i,T,A,R,P,ie,z),i.renderBufferDirect(R,null,P,ie,T,z),T.onAfterShadow(i,T,A,R,P,ie,z)}}}else if(F.visible){let N=v(T,F,S,b);T.onBeforeShadow(i,T,A,R,P,N,null),i.renderBufferDirect(R,null,P,N,T,null),T.onAfterShadow(i,T,A,R,P,N,null)}}let W=T.children;for(let P=0,F=W.length;P<F;P++)y(W[P],A,R,S,b)}function C(T){T.target.removeEventListener("dispose",C);for(let R in l){let S=l[R],b=T.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var uv={[Uc]:kc,[Fc]:zc,[Oc]:Hc,[Fs]:Bc,[kc]:Uc,[zc]:Fc,[Hc]:Oc,[Bc]:Fs};function dv(i,e){function t(){let U=!1,ue=new tt,$=null,Q=new tt(0,0,0,0);return{setMask:function(pe){$!==pe&&!U&&(i.colorMask(pe,pe,pe,pe),$=pe)},setLocked:function(pe){U=pe},setClear:function(pe,de,Ve,St,zt){zt===!0&&(pe*=St,de*=St,Ve*=St),ue.set(pe,de,Ve,St),Q.equals(ue)===!1&&(i.clearColor(pe,de,Ve,St),Q.copy(ue))},reset:function(){U=!1,$=null,Q.set(-1,0,0,0)}}}function n(){let U=!1,ue=!1,$=null,Q=null,pe=null;return{setReversed:function(de){if(ue!==de){let Ve=e.get("EXT_clip_control");ue?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let St=pe;pe=null,this.setClear(St)}ue=de},getReversed:function(){return ue},setTest:function(de){de?j(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(de){$!==de&&!U&&(i.depthMask(de),$=de)},setFunc:function(de){if(ue&&(de=uv[de]),Q!==de){switch(de){case Uc:i.depthFunc(i.NEVER);break;case kc:i.depthFunc(i.ALWAYS);break;case Fc:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case Oc:i.depthFunc(i.EQUAL);break;case Bc:i.depthFunc(i.GEQUAL);break;case zc:i.depthFunc(i.GREATER);break;case Hc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=de}},setLocked:function(de){U=de},setClear:function(de){pe!==de&&(ue&&(de=1-de),i.clearDepth(de),pe=de)},reset:function(){U=!1,$=null,Q=null,pe=null,ue=!1}}}function s(){let U=!1,ue=null,$=null,Q=null,pe=null,de=null,Ve=null,St=null,zt=null;return{setTest:function(ot){U||(ot?j(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(ot){ue!==ot&&!U&&(i.stencilMask(ot),ue=ot)},setFunc:function(ot,Sn,Vn){($!==ot||Q!==Sn||pe!==Vn)&&(i.stencilFunc(ot,Sn,Vn),$=ot,Q=Sn,pe=Vn)},setOp:function(ot,Sn,Vn){(de!==ot||Ve!==Sn||St!==Vn)&&(i.stencilOp(ot,Sn,Vn),de=ot,Ve=Sn,St=Vn)},setLocked:function(ot){U=ot},setClear:function(ot){zt!==ot&&(i.clearStencil(ot),zt=ot)},reset:function(){U=!1,ue=null,$=null,Q=null,pe=null,de=null,Ve=null,St=null,zt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,v=null,y=null,C=null,T=null,A=new Se(0,0,0),R=0,S=!1,b=null,L=null,W=null,P=null,F=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,G=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),D=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),D=G>=2);let ee=null,ie={},re=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),ge=new tt().fromArray(re),Y=new tt().fromArray(te);function H(U,ue,$,Q){let pe=new Uint8Array(4),de=i.createTexture();i.bindTexture(U,de),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<$;Ve++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ue+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return de}let se={};se[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),se[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),se[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Fs),Oe(!1),Xe(Fu),j(i.CULL_FACE),k(Si);function j(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function he(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function me(U,ue){return u[U]!==ue?(i.bindFramebuffer(U,ue),u[U]=ue,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Le(U,ue){let $=f,Q=!1;if(U){$=d.get(ue),$===void 0&&($=[],d.set(ue,$));let pe=U.textures;if($.length!==pe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Ve=pe.length;de<Ve;de++)$[de]=i.COLOR_ATTACHMENT0+de;$.length=pe.length,Q=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Q=!0);Q&&i.drawBuffers($)}function Je(U){return p!==U?(i.useProgram(U),p=U,!0):!1}let ke={[qi]:i.FUNC_ADD,[wm]:i.FUNC_SUBTRACT,[Tm]:i.FUNC_REVERSE_SUBTRACT};ke[Em]=i.MIN,ke[Am]=i.MAX;let je={[Rm]:i.ZERO,[Cm]:i.ONE,[Im]:i.SRC_COLOR,[Dc]:i.SRC_ALPHA,[km]:i.SRC_ALPHA_SATURATE,[Nm]:i.DST_COLOR,[Lm]:i.DST_ALPHA,[Pm]:i.ONE_MINUS_SRC_COLOR,[Nc]:i.ONE_MINUS_SRC_ALPHA,[Um]:i.ONE_MINUS_DST_COLOR,[Dm]:i.ONE_MINUS_DST_ALPHA,[Fm]:i.CONSTANT_COLOR,[Om]:i.ONE_MINUS_CONSTANT_COLOR,[Bm]:i.CONSTANT_ALPHA,[zm]:i.ONE_MINUS_CONSTANT_ALPHA};function k(U,ue,$,Q,pe,de,Ve,St,zt,ot){if(U===Si){x===!0&&(he(i.BLEND),x=!1);return}if(x===!1&&(j(i.BLEND),x=!0),U!==Sm){if(U!==g||ot!==S){if((m!==qi||y!==qi)&&(i.blendEquation(i.FUNC_ADD),m=qi,y=qi),ot)switch(U){case In:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFunc(i.ONE,i.ONE);break;case Ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case In:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,v=null,C=null,T=null,A.set(0,0,0),R=0,g=U,S=ot}return}pe=pe||ue,de=de||$,Ve=Ve||Q,(ue!==m||pe!==y)&&(i.blendEquationSeparate(ke[ue],ke[pe]),m=ue,y=pe),($!==_||Q!==v||de!==C||Ve!==T)&&(i.blendFuncSeparate(je[$],je[Q],je[de],je[Ve]),_=$,v=Q,C=de,T=Ve),(St.equals(A)===!1||zt!==R)&&(i.blendColor(St.r,St.g,St.b,zt),A.copy(St),R=zt),g=U,S=!1}function Xt(U,ue){U.side===Et?he(i.CULL_FACE):j(i.CULL_FACE);let $=U.side===Gt;ue&&($=!$),Oe($),U.blending===In&&U.transparent===!1?k(Si):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let Q=U.stencilWrite;o.setTest(Q),Q&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ht(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(U){b!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),b=U)}function Xe(U){U!==Mm?(j(i.CULL_FACE),U!==L&&(U===Fu?i.cullFace(i.BACK):U===bm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),L=U}function Re(U){U!==W&&(D&&i.lineWidth(U),W=U)}function ht(U,ue,$){U?(j(i.POLYGON_OFFSET_FILL),(P!==ue||F!==$)&&(i.polygonOffset(ue,$),P=ue,F=$)):he(i.POLYGON_OFFSET_FILL)}function Ce(U){U?j(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function E(U){U===void 0&&(U=i.TEXTURE0+N-1),ee!==U&&(i.activeTexture(U),ee=U)}function M(U,ue,$){$===void 0&&(ee===null?$=i.TEXTURE0+N-1:$=ee);let Q=ie[$];Q===void 0&&(Q={type:void 0,texture:void 0},ie[$]=Q),(Q.type!==U||Q.texture!==ue)&&(ee!==$&&(i.activeTexture($),ee=$),i.bindTexture(U,ue||se[U]),Q.type=U,Q.texture=ue)}function V(){let U=ie[ee];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(U){ge.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ge.copy(U))}function _e(U){Y.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function Qe(U,ue){let $=l.get(ue);$===void 0&&($=new WeakMap,l.set(ue,$));let Q=$.get(U);Q===void 0&&(Q=i.getUniformBlockIndex(ue,U.name),$.set(U,Q))}function qe(U,ue){let Q=l.get(ue).get(U);c.get(ue)!==Q&&(i.uniformBlockBinding(ue,Q,U.__bindingPointIndex),c.set(ue,Q))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ee=null,ie={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,v=null,y=null,C=null,T=null,A=new Se(0,0,0),R=0,S=!1,b=null,L=null,W=null,P=null,F=null,ge.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:he,bindFramebuffer:me,drawBuffers:Le,useProgram:Je,setBlending:k,setMaterial:Xt,setFlipSided:Oe,setCullFace:Xe,setLineWidth:Re,setPolygonOffset:ht,setScissorTest:Ce,activeTexture:E,bindTexture:M,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:xe,texImage3D:De,updateUBOMapping:Qe,uniformBlockBinding:qe,texStorage2D:He,texStorage3D:ae,texSubImage2D:Z,texSubImage3D:be,compressedTexSubImage2D:K,compressedTexSubImage3D:ce,scissor:Fe,viewport:_e,reset:pt}}function Dd(i,e,t,n){let s=fv(n);switch(t){case of:return i*e;case lf:return i*e;case hf:return i*e*2;case Ql:return i*e/s.components*s.byteLength;case eh:return i*e/s.components*s.byteLength;case uf:return i*e*2/s.components*s.byteLength;case th:return i*e*2/s.components*s.byteLength;case cf:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case nh:return i*e*4/s.components*s.byteLength;case Ga:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xc:case Yc:return Math.max(i,16)*Math.max(e,8)/4;case Wc:case qc:return Math.max(i,8)*Math.max(e,8)/2;case $c:case Kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ya:case ul:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case df:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pl:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fv(i){switch(i){case ti:case sf:return{byteLength:1,components:1};case Vr:case rf:case Zr:return{byteLength:2,components:1};case Jl:case jl:return{byteLength:2,components:4};case Zi:case Zl:case Cn:return{byteLength:4,components:1};case af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function pv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Te,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,M){return f?new OffscreenCanvas(E,M):Gr("canvas")}function x(E,M,V){let J=1,ne=Ce(E);if((ne.width>V||ne.height>V)&&(J=V/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){let Z=Math.floor(J*ne.width),be=Math.floor(J*ne.height);u===void 0&&(u=p(Z,be));let K=M?p(Z,be):u;return K.width=Z,K.height=be,K.getContext("2d").drawImage(E,0,0,Z,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+be+")."),K}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),E;return E}function g(E){return E.generateMipmaps}function m(E){i.generateMipmap(E)}function _(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(E,M,V,J,ne=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=M;if(M===i.RED&&(V===i.FLOAT&&(Z=i.R32F),V===i.HALF_FLOAT&&(Z=i.R16F),V===i.UNSIGNED_BYTE&&(Z=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.R8UI),V===i.UNSIGNED_SHORT&&(Z=i.R16UI),V===i.UNSIGNED_INT&&(Z=i.R32UI),V===i.BYTE&&(Z=i.R8I),V===i.SHORT&&(Z=i.R16I),V===i.INT&&(Z=i.R32I)),M===i.RG&&(V===i.FLOAT&&(Z=i.RG32F),V===i.HALF_FLOAT&&(Z=i.RG16F),V===i.UNSIGNED_BYTE&&(Z=i.RG8)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RG8UI),V===i.UNSIGNED_SHORT&&(Z=i.RG16UI),V===i.UNSIGNED_INT&&(Z=i.RG32UI),V===i.BYTE&&(Z=i.RG8I),V===i.SHORT&&(Z=i.RG16I),V===i.INT&&(Z=i.RG32I)),M===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),V===i.UNSIGNED_INT&&(Z=i.RGB32UI),V===i.BYTE&&(Z=i.RGB8I),V===i.SHORT&&(Z=i.RGB16I),V===i.INT&&(Z=i.RGB32I)),M===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),V===i.UNSIGNED_INT&&(Z=i.RGBA32UI),V===i.BYTE&&(Z=i.RGBA8I),V===i.SHORT&&(Z=i.RGBA16I),V===i.INT&&(Z=i.RGBA32I)),M===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),M===i.RGBA){let be=ne?Ro:Ke.getTransfer(J);V===i.FLOAT&&(Z=i.RGBA32F),V===i.HALF_FLOAT&&(Z=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Z=be===ut?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(E,M){let V;return E?M===null||M===Zi||M===zs?V=i.DEPTH24_STENCIL8:M===Cn?V=i.DEPTH32F_STENCIL8:M===Vr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zi||M===zs?V=i.DEPTH_COMPONENT24:M===Cn?V=i.DEPTH_COMPONENT32F:M===Vr&&(V=i.DEPTH_COMPONENT16),V}function C(E,M){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Nt&&E.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function T(E){let M=E.target;M.removeEventListener("dispose",T),R(M),M.isVideoTexture&&h.delete(M)}function A(E){let M=E.target;M.removeEventListener("dispose",A),b(M)}function R(E){let M=n.get(E);if(M.__webglInit===void 0)return;let V=E.source,J=d.get(V);if(J){let ne=J[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&S(E),Object.keys(J).length===0&&d.delete(V)}n.remove(E)}function S(E){let M=n.get(E);i.deleteTexture(M.__webglTexture);let V=E.source,J=d.get(V);delete J[M.__cacheKey],a.memory.textures--}function b(E){let M=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let ne=0;ne<M.__webglFramebuffer[J].length;ne++)i.deleteFramebuffer(M.__webglFramebuffer[J][ne]);else i.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)i.deleteFramebuffer(M.__webglFramebuffer[J]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let V=E.textures;for(let J=0,ne=V.length;J<ne;J++){let Z=n.get(V[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(V[J])}n.remove(E)}let L=0;function W(){L=0}function P(){let E=L;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function F(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function N(E,M){let V=n.get(E);if(E.isVideoTexture&&Re(E),E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){let J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(V,E,M);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function D(E,M){let V=n.get(E);if(E.version>0&&V.__version!==E.version){Y(V,E,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function G(E,M){let V=n.get(E);if(E.version>0&&V.__version!==E.version){Y(V,E,M);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function z(E,M){let V=n.get(E);if(E.version>0&&V.__version!==E.version){H(V,E,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}let ee={[$i]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[Ki]:i.MIRRORED_REPEAT},ie={[Nt]:i.NEAREST,[Kl]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},re={[ng]:i.NEVER,[cg]:i.ALWAYS,[ig]:i.LESS,[pf]:i.LEQUAL,[sg]:i.EQUAL,[og]:i.GEQUAL,[rg]:i.GREATER,[ag]:i.NOTEQUAL};function te(E,M){if(M.type===Cn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===Or||M.magFilter===Is||M.magFilter===Fn||M.minFilter===en||M.minFilter===Or||M.minFilter===Is||M.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ee[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ee[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ee[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ie[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ie[M.minFilter]),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Nt||M.minFilter!==Is&&M.minFilter!==Fn||M.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ge(E,M){let V=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",T));let J=M.source,ne=d.get(J);ne===void 0&&(ne={},d.set(J,ne));let Z=F(M);if(Z!==E.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ne[Z].usedTimes++;let be=ne[E.__cacheKey];be!==void 0&&(ne[E.__cacheKey].usedTimes--,be.usedTimes===0&&S(M)),E.__cacheKey=Z,E.__webglTexture=ne[Z].texture}return V}function Y(E,M,V){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);let ne=ge(E,M),Z=M.source;t.bindTexture(J,E.__webglTexture,i.TEXTURE0+V);let be=n.get(Z);if(Z.version!==be.__version||ne===!0){t.activeTexture(i.TEXTURE0+V);let K=Ke.getPrimaries(Ke.workingColorSpace),ce=M.colorSpace===vi?null:Ke.getPrimaries(M.colorSpace),He=M.colorSpace===vi||K===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ae=x(M.image,!1,s.maxTextureSize);ae=ht(M,ae);let xe=r.convert(M.format,M.colorSpace),De=r.convert(M.type),Fe=v(M.internalFormat,xe,De,M.colorSpace,M.isVideoTexture);te(J,M);let _e,Qe=M.mipmaps,qe=M.isVideoTexture!==!0,pt=be.__version===void 0||ne===!0,U=Z.dataReady,ue=C(M,ae);if(M.isDepthTexture)Fe=y(M.format===Hs,M.type),pt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Fe,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Fe,ae.width,ae.height,0,xe,De,null));else if(M.isDataTexture)if(Qe.length>0){qe&&pt&&t.texStorage2D(i.TEXTURE_2D,ue,Fe,Qe[0].width,Qe[0].height);for(let $=0,Q=Qe.length;$<Q;$++)_e=Qe[$],qe?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,_e.width,_e.height,xe,De,_e.data):t.texImage2D(i.TEXTURE_2D,$,Fe,_e.width,_e.height,0,xe,De,_e.data);M.generateMipmaps=!1}else qe?(pt&&t.texStorage2D(i.TEXTURE_2D,ue,Fe,ae.width,ae.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,xe,De,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,ae.width,ae.height,0,xe,De,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Fe,Qe[0].width,Qe[0].height,ae.depth);for(let $=0,Q=Qe.length;$<Q;$++)if(_e=Qe[$],M.format!==pn)if(xe!==null)if(qe){if(U)if(M.layerUpdates.size>0){let pe=Dd(_e.width,_e.height,M.format,M.type);for(let de of M.layerUpdates){let Ve=_e.data.subarray(de*pe/_e.data.BYTES_PER_ELEMENT,(de+1)*pe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,de,_e.width,_e.height,1,xe,Ve)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,ae.depth,xe,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Fe,_e.width,_e.height,ae.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,ae.depth,xe,De,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Fe,_e.width,_e.height,ae.depth,0,xe,De,_e.data)}else{qe&&pt&&t.texStorage2D(i.TEXTURE_2D,ue,Fe,Qe[0].width,Qe[0].height);for(let $=0,Q=Qe.length;$<Q;$++)_e=Qe[$],M.format!==pn?xe!==null?qe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Fe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,_e.width,_e.height,xe,De,_e.data):t.texImage2D(i.TEXTURE_2D,$,Fe,_e.width,_e.height,0,xe,De,_e.data)}else if(M.isDataArrayTexture)if(qe){if(pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Fe,ae.width,ae.height,ae.depth),U)if(M.layerUpdates.size>0){let $=Dd(ae.width,ae.height,M.format,M.type);for(let Q of M.layerUpdates){let pe=ae.data.subarray(Q*$/ae.data.BYTES_PER_ELEMENT,(Q+1)*$/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ae.width,ae.height,1,xe,De,pe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,xe,De,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,ae.width,ae.height,ae.depth,0,xe,De,ae.data);else if(M.isData3DTexture)qe?(pt&&t.texStorage3D(i.TEXTURE_3D,ue,Fe,ae.width,ae.height,ae.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,xe,De,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,ae.width,ae.height,ae.depth,0,xe,De,ae.data);else if(M.isFramebufferTexture){if(pt)if(qe)t.texStorage2D(i.TEXTURE_2D,ue,Fe,ae.width,ae.height);else{let $=ae.width,Q=ae.height;for(let pe=0;pe<ue;pe++)t.texImage2D(i.TEXTURE_2D,pe,Fe,$,Q,0,xe,De,null),$>>=1,Q>>=1}}else if(Qe.length>0){if(qe&&pt){let $=Ce(Qe[0]);t.texStorage2D(i.TEXTURE_2D,ue,Fe,$.width,$.height)}for(let $=0,Q=Qe.length;$<Q;$++)_e=Qe[$],qe?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,xe,De,_e):t.texImage2D(i.TEXTURE_2D,$,Fe,xe,De,_e);M.generateMipmaps=!1}else if(qe){if(pt){let $=Ce(ae);t.texStorage2D(i.TEXTURE_2D,ue,Fe,$.width,$.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,De,ae)}else t.texImage2D(i.TEXTURE_2D,0,Fe,xe,De,ae);g(M)&&m(J),be.__version=Z.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function H(E,M,V){if(M.image.length!==6)return;let J=ge(E,M),ne=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+V);let Z=n.get(ne);if(ne.version!==Z.__version||J===!0){t.activeTexture(i.TEXTURE0+V);let be=Ke.getPrimaries(Ke.workingColorSpace),K=M.colorSpace===vi?null:Ke.getPrimaries(M.colorSpace),ce=M.colorSpace===vi||be===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let He=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let Q=0;Q<6;Q++)!He&&!ae?xe[Q]=x(M.image[Q],!0,s.maxCubemapSize):xe[Q]=ae?M.image[Q].image:M.image[Q],xe[Q]=ht(M,xe[Q]);let De=xe[0],Fe=r.convert(M.format,M.colorSpace),_e=r.convert(M.type),Qe=v(M.internalFormat,Fe,_e,M.colorSpace),qe=M.isVideoTexture!==!0,pt=Z.__version===void 0||J===!0,U=ne.dataReady,ue=C(M,De);te(i.TEXTURE_CUBE_MAP,M);let $;if(He){qe&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Qe,De.width,De.height);for(let Q=0;Q<6;Q++){$=xe[Q].mipmaps;for(let pe=0;pe<$.length;pe++){let de=$[pe];M.format!==pn?Fe!==null?qe?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,de.width,de.height,Fe,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,Qe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,de.width,de.height,Fe,_e,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,Qe,de.width,de.height,0,Fe,_e,de.data)}}}else{if($=M.mipmaps,qe&&pt){$.length>0&&ue++;let Q=Ce(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ae){qe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xe[Q].width,xe[Q].height,Fe,_e,xe[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Qe,xe[Q].width,xe[Q].height,0,Fe,_e,xe[Q].data);for(let pe=0;pe<$.length;pe++){let Ve=$[pe].image[Q].image;qe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,Ve.width,Ve.height,Fe,_e,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,Qe,Ve.width,Ve.height,0,Fe,_e,Ve.data)}}else{qe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Fe,_e,xe[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Qe,Fe,_e,xe[Q]);for(let pe=0;pe<$.length;pe++){let de=$[pe];qe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,Fe,_e,de.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,Qe,Fe,_e,de.image[Q])}}}g(M)&&m(i.TEXTURE_CUBE_MAP),Z.__version=ne.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function se(E,M,V,J,ne,Z){let be=r.convert(V.format,V.colorSpace),K=r.convert(V.type),ce=v(V.internalFormat,be,K,V.colorSpace),He=n.get(M),ae=n.get(V);if(ae.__renderTarget=M,!He.__hasExternalTextures){let xe=Math.max(1,M.width>>Z),De=Math.max(1,M.height>>Z);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,Z,ce,xe,De,M.depth,0,be,K,null):t.texImage2D(ne,Z,ce,xe,De,0,be,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Xe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ne,ae.__webglTexture,0,Oe(M)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ne,ae.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function j(E,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer){let J=M.depthTexture,ne=J&&J.isDepthTexture?J.type:null,Z=y(M.stencilBuffer,ne),be=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=Oe(M);Xe(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,Z,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,Z,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Z,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,E)}else{let J=M.textures;for(let ne=0;ne<J.length;ne++){let Z=J[ne],be=r.convert(Z.format,Z.colorSpace),K=r.convert(Z.type),ce=v(Z.internalFormat,be,K,Z.colorSpace),He=Oe(M);V&&Xe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,ce,M.width,M.height):Xe(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,ce,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ce,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),N(M.depthTexture,0);let ne=J.__webglTexture,Z=Oe(M);if(M.depthTexture.format===Ns)Xe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(M.depthTexture.format===Hs)Xe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function me(E){let M=n.get(E),V=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){let J=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){let ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=J}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");he(M.__webglFramebuffer,E)}else if(V){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=i.createRenderbuffer(),j(M.__webglDepthbuffer[J],E,!1);else{let ne=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),j(M.__webglDepthbuffer,E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(E,M,V){let J=n.get(E);M!==void 0&&se(J.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&me(E)}function Je(E){let M=E.texture,V=n.get(E),J=n.get(M);E.addEventListener("dispose",A);let ne=E.textures,Z=E.isWebGLCubeRenderTarget===!0,be=ne.length>1;if(be||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,a.memory.textures++),Z){V.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[K]=[];for(let ce=0;ce<M.mipmaps.length;ce++)V.__webglFramebuffer[K][ce]=i.createFramebuffer()}else V.__webglFramebuffer[K]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)V.__webglFramebuffer[K]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(be)for(let K=0,ce=ne.length;K<ce;K++){let He=n.get(ne[K]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Xe(E)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let K=0;K<ne.length;K++){let ce=ne[K];V.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[K]);let He=r.convert(ce.format,ce.colorSpace),ae=r.convert(ce.type),xe=v(ce.internalFormat,He,ae,ce.colorSpace,E.isXRRenderTarget===!0),De=Oe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,xe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,V.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),j(V.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),te(i.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)se(V.__webglFramebuffer[K][ce],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce);else se(V.__webglFramebuffer[K],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);g(M)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let K=0,ce=ne.length;K<ce;K++){let He=ne[K],ae=n.get(He);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),te(i.TEXTURE_2D,He),se(V.__webglFramebuffer,E,He,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,0),g(He)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,J.__webglTexture),te(K,M),M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)se(V.__webglFramebuffer[ce],E,M,i.COLOR_ATTACHMENT0,K,ce);else se(V.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,K,0);g(M)&&m(K),t.unbindTexture()}E.depthBuffer&&me(E)}function ke(E){let M=E.textures;for(let V=0,J=M.length;V<J;V++){let ne=M[V];if(g(ne)){let Z=_(E),be=n.get(ne).__webglTexture;t.bindTexture(Z,be),m(Z),t.unbindTexture()}}}let je=[],k=[];function Xt(E){if(E.samples>0){if(Xe(E)===!1){let M=E.textures,V=E.width,J=E.height,ne=i.COLOR_BUFFER_BIT,Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(E),K=M.length>1;if(K)for(let ce=0;ce<M.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[ce]);let He=n.get(M[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,V,J,0,0,V,J,ne,i.NEAREST),c===!0&&(je.length=0,k.length=0,je.push(i.COLOR_ATTACHMENT0+ce),E.depthBuffer&&E.resolveDepthBuffer===!1&&(je.push(Z),k.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ce=0;ce<M.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,be.__webglColorRenderbuffer[ce]);let He=n.get(M[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let M=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Oe(E){return Math.min(s.maxSamples,E.samples)}function Xe(E){let M=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Re(E){let M=a.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function ht(E,M){let V=E.colorSpace,J=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||V!==Wt&&V!==vi&&(Ke.getTransfer(V)===ut?(J!==pn||ne!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Ce(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=W,this.setTexture2D=N,this.setTexture2DArray=D,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=Le,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Xe}function mv(i,e){function t(n,s=vi){let r,a=Ke.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===Jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===af)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sf)return i.BYTE;if(n===rf)return i.SHORT;if(n===Vr)return i.UNSIGNED_SHORT;if(n===Zl)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Zr)return i.HALF_FLOAT;if(n===of)return i.ALPHA;if(n===cf)return i.RGB;if(n===pn)return i.RGBA;if(n===lf)return i.LUMINANCE;if(n===hf)return i.LUMINANCE_ALPHA;if(n===Ns)return i.DEPTH_COMPONENT;if(n===Hs)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===eh)return i.RED_INTEGER;if(n===uf)return i.RG;if(n===th)return i.RG_INTEGER;if(n===nh)return i.RGBA_INTEGER;if(n===Ga||n===Wa||n===Xa||n===qa)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wc||n===Xc||n===qc||n===Yc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$c||n===Kc||n===Zc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$c||n===Kc)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jc||n===jc||n===Qc||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===cl||n===ll||n===hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ll)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya||n===ul||n===dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ya)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===df||n===fl||n===pl||n===ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Il=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},nt=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},gv={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_v=`
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

}`,Pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Ct,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Kt({vertexShader:xv,fragmentShader:_v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ll=class extends ni{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null,x=new Pl,g=t.getContextAttributes(),m=null,_=null,v=[],y=[],C=new Te,T=null,A=new It;A.viewport=new tt;let R=new It;R.viewport=new tt;let S=[A,R],b=new Il,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let H=v[Y];return H===void 0&&(H=new Hr,v[Y]=H),H.getTargetRaySpace()},this.getControllerGrip=function(Y){let H=v[Y];return H===void 0&&(H=new Hr,v[Y]=H),H.getGripSpace()},this.getHand=function(Y){let H=v[Y];return H===void 0&&(H=new Hr,v[Y]=H),H.getHandSpace()};function P(Y){let H=y.indexOf(Y.inputSource);if(H===-1)return;let se=v[H];se!==void 0&&(se.update(Y.inputSource,Y.frame,l||a),se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",N);for(let Y=0;Y<v.length;Y++){let H=y[Y];H!==null&&(y[Y]=null,v[Y].disconnect(H))}L=null,W=null,x.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,_=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",F),s.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let H={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,H),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ii(f.framebufferWidth,f.framebufferHeight,{format:pn,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let H=null,se=null,j=null;g.depth&&(j=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=g.stencil?Hs:Ns,se=g.stencil?zs:Zi);let he={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(he),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new ii(d.textureWidth,d.textureHeight,{format:pn,type:ti,depthTexture:new so(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(Y){for(let H=0;H<Y.removed.length;H++){let se=Y.removed[H],j=y.indexOf(se);j>=0&&(y[j]=null,v[j].disconnect(se))}for(let H=0;H<Y.added.length;H++){let se=Y.added[H],j=y.indexOf(se);if(j===-1){for(let me=0;me<v.length;me++)if(me>=y.length){y.push(se),j=me;break}else if(y[me]===null){y[me]=se,j=me;break}if(j===-1)break}let he=v[j];he&&he.connect(se)}}let D=new I,G=new I;function z(Y,H,se){D.setFromMatrixPosition(H.matrixWorld),G.setFromMatrixPosition(se.matrixWorld);let j=D.distanceTo(G),he=H.projectionMatrix.elements,me=se.projectionMatrix.elements,Le=he[14]/(he[10]-1),Je=he[14]/(he[10]+1),ke=(he[9]+1)/he[5],je=(he[9]-1)/he[5],k=(he[8]-1)/he[0],Xt=(me[8]+1)/me[0],Oe=Le*k,Xe=Le*Xt,Re=j/(-k+Xt),ht=Re*-k;if(H.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ht),Y.translateZ(Re),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),he[10]===-1)Y.projectionMatrix.copy(H.projectionMatrix),Y.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{let Ce=Le+Re,E=Je+Re,M=Oe-ht,V=Xe+(j-ht),J=ke*Je/E*Ce,ne=je*Je/E*Ce;Y.projectionMatrix.makePerspective(M,V,J,ne,Ce,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ee(Y,H){H===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(H.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let H=Y.near,se=Y.far;x.texture!==null&&(x.depthNear>0&&(H=x.depthNear),x.depthFar>0&&(se=x.depthFar)),b.near=R.near=A.near=H,b.far=R.far=A.far=se,(L!==b.near||W!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,W=b.far),A.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,b.layers.mask=A.layers.mask|R.layers.mask;let j=Y.parent,he=b.cameras;ee(b,j);for(let me=0;me<he.length;me++)ee(he[me],j);he.length===2?z(b,A,R):b.projectionMatrix.copy(A.projectionMatrix),ie(Y,b,j)};function ie(Y,H,se){se===null?Y.matrix.copy(H.matrixWorld):(Y.matrix.copy(se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(H.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(H.projectionMatrix),Y.projectionMatrixInverse.copy(H.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ws*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let re=null;function te(Y,H){if(h=H.getViewerPose(l||a),p=H,h!==null){let se=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let j=!1;se.length!==b.cameras.length&&(b.cameras.length=0,j=!0);for(let me=0;me<se.length;me++){let Le=se[me],Je=null;if(f!==null)Je=f.getViewport(Le);else{let je=u.getViewSubImage(d,Le);Je=je.viewport,me===0&&(e.setRenderTargetTextures(_,je.colorTexture,d.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(_))}let ke=S[me];ke===void 0&&(ke=new It,ke.layers.enable(me),ke.viewport=new tt,S[me]=ke),ke.matrix.fromArray(Le.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Le.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Je.x,Je.y,Je.width,Je.height),me===0&&(b.matrix.copy(ke.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),j===!0&&b.cameras.push(ke)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")){let me=u.getDepthInformation(se[0]);me&&me.isValid&&me.texture&&x.init(e,me,s.renderState)}}for(let se=0;se<v.length;se++){let j=y[se],he=v[se];j!==null&&he!==void 0&&he.update(j,H,l||a)}re&&re(Y,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),p=null}let ge=new yf;ge.setAnimationLoop(te),this.setAnimationLoop=function(Y){re=Y},this.dispose=function(){}}},Wi=new On,yv=new ze;function vv(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,_f(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,_,v):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Gt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Gt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),v=_.envMap,y=_.envMapRotation;v&&(g.envMap.value=v,Wi.copy(y),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),g.envMapRotation.value.setFromMatrix4(yv.makeRotationFromEuler(Wi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){let y=v.program;n.uniformBlockBinding(_,y)}function l(_,v){let y=s[_.id];y===void 0&&(p(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",g));let C=v.program;n.updateUBOMapping(_,C);let T=e.render.frame;r[_.id]!==T&&(d(_),r[_.id]=T)}function h(_){let v=u();_.__bindingPointIndex=v;let y=i.createBuffer(),C=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],y=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,A=y.length;T<A;T++){let R=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,b=R.length;S<b;S++){let L=R[S];if(f(L,T,S,C)===!0){let W=L.__offset,P=Array.isArray(L.value)?L.value:[L.value],F=0;for(let N=0;N<P.length;N++){let D=P[N],G=x(D);typeof D=="number"||typeof D=="boolean"?(L.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,W+F,L.__data)):D.isMatrix3?(L.__data[0]=D.elements[0],L.__data[1]=D.elements[1],L.__data[2]=D.elements[2],L.__data[3]=0,L.__data[4]=D.elements[3],L.__data[5]=D.elements[4],L.__data[6]=D.elements[5],L.__data[7]=0,L.__data[8]=D.elements[6],L.__data[9]=D.elements[7],L.__data[10]=D.elements[8],L.__data[11]=0):(D.toArray(L.__data,F),F+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,y,C){let T=_.value,A=v+"_"+y;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{let R=C[A];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return C[A]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function p(_){let v=_.uniforms,y=0,C=16;for(let A=0,R=v.length;A<R;A++){let S=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,L=S.length;b<L;b++){let W=S[b],P=Array.isArray(W.value)?W.value:[W.value];for(let F=0,N=P.length;F<N;F++){let D=P[F],G=x(D),z=y%C,ee=z%G.boundary,ie=z+ee;y+=ee,ie!==0&&C-ie<G.storage&&(y+=C-ie),W.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=G.storage}}}let T=y%C;return T>0&&(y+=C-T),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}var ro=class{constructor(e={}){let{canvas:t=Tg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=wi,this.toneMappingExposure=1;let y=this,C=!1,T=0,A=0,R=null,S=-1,b=null,L=new tt,W=new tt,P=null,F=new Se(0),N=0,D=t.width,G=t.height,z=1,ee=null,ie=null,re=new tt(0,0,D,G),te=new tt(0,0,D,G),ge=!1,Y=new Wr,H=!1,se=!1,j=new ze,he=new ze,me=new I,Le=new tt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function je(){return R===null?z:1}let k=n;function Xt(w,O){return t.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yl}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",de,!1),k===null){let O="webgl2";if(k=Xt(O,w),k===null)throw Xt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Oe,Xe,Re,ht,Ce,E,M,V,J,ne,Z,be,K,ce,He,ae,xe,De,Fe,_e,Qe,qe,pt,U;function ue(){Oe=new F_(k),Oe.init(),qe=new mv(k,Oe),Xe=new P_(k,Oe,e,qe),Re=new dv(k,Oe),Xe.reverseDepthBuffer&&d&&Re.buffers.depth.setReversed(!0),ht=new z_(k),Ce=new Qy,E=new pv(k,Oe,Re,Ce,Xe,qe,ht),M=new D_(y),V=new k_(y),J=new Yg(k),pt=new C_(k,J),ne=new O_(k,J,ht,pt),Z=new V_(k,ne,J,ht),Fe=new H_(k,Xe,E),ae=new L_(Ce),be=new jy(y,M,V,Oe,Xe,pt,ae),K=new vv(y,Ce),ce=new tv,He=new ov(Oe),De=new R_(y,M,V,Re,Z,f,c),xe=new hv(y,Z,Xe),U=new Mv(k,ht,Xe,Re),_e=new I_(k,Oe,ht),Qe=new B_(k,Oe,ht),ht.programs=be.programs,y.capabilities=Xe,y.extensions=Oe,y.properties=Ce,y.renderLists=ce,y.shadowMap=xe,y.state=Re,y.info=ht}ue();let $=new Ll(y,k);this.xr=$,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let w=Oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(D,G,!1))},this.getSize=function(w){return w.set(D,G)},this.setSize=function(w,O,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,G=O,t.width=Math.floor(w*z),t.height=Math.floor(O*z),X===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(D*z,G*z).floor()},this.setDrawingBufferSize=function(w,O,X){D=w,G=O,z=X,t.width=Math.floor(w*X),t.height=Math.floor(O*X),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(re)},this.setViewport=function(w,O,X,q){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,O,X,q),Re.viewport(L.copy(re).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,O,X,q){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,O,X,q),Re.scissor(W.copy(te).multiplyScalar(z).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(w){Re.setScissorTest(ge=w)},this.setOpaqueSort=function(w){ee=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(w=!0,O=!0,X=!0){let q=0;if(w){let B=!1;if(R!==null){let oe=R.texture.format;B=oe===nh||oe===th||oe===eh}if(B){let oe=R.texture.type,fe=oe===ti||oe===Zi||oe===Vr||oe===zs||oe===Jl||oe===jl,ye=De.getClearColor(),ve=De.getClearAlpha(),Be=ye.r,Ge=ye.g,Me=ye.b;fe?(p[0]=Be,p[1]=Ge,p[2]=Me,p[3]=ve,k.clearBufferuiv(k.COLOR,0,p)):(x[0]=Be,x[1]=Ge,x[2]=Me,x[3]=ve,k.clearBufferiv(k.COLOR,0,x))}else q|=k.COLOR_BUFFER_BIT}O&&(q|=k.DEPTH_BUFFER_BIT),X&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ce.dispose(),He.dispose(),Ce.dispose(),M.dispose(),V.dispose(),Z.dispose(),pt.dispose(),U.dispose(),be.dispose(),$.dispose(),$.removeEventListener("sessionstart",Cu),$.removeEventListener("sessionend",Iu),Oi.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=ht.autoReset,O=xe.enabled,X=xe.autoUpdate,q=xe.needsUpdate,B=xe.type;ue(),ht.autoReset=w,xe.enabled=O,xe.autoUpdate=X,xe.needsUpdate=q,xe.type=B}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ve(w){let O=w.target;O.removeEventListener("dispose",Ve),St(O)}function St(w){zt(w),Ce.remove(w)}function zt(w){let O=Ce.get(w).programs;O!==void 0&&(O.forEach(function(X){be.releaseProgram(X)}),w.isShaderMaterial&&be.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,X,q,B,oe){O===null&&(O=Je);let fe=B.isMesh&&B.matrixWorld.determinant()<0,ye=_m(w,O,X,q,B);Re.setMaterial(q,fe);let ve=X.index,Be=1;if(q.wireframe===!0){if(ve=ne.getWireframeAttribute(X),ve===void 0)return;Be=2}let Ge=X.drawRange,Me=X.attributes.position,et=Ge.start*Be,mt=(Ge.start+Ge.count)*Be;oe!==null&&(et=Math.max(et,oe.start*Be),mt=Math.min(mt,(oe.start+oe.count)*Be)),ve!==null?(et=Math.max(et,0),mt=Math.min(mt,ve.count)):Me!=null&&(et=Math.max(et,0),mt=Math.min(mt,Me.count));let xt=mt-et;if(xt<0||xt===1/0)return;pt.setup(B,q,ye,X,ve);let Qt,st=_e;if(ve!==null&&(Qt=J.get(ve),st=Qe,st.setIndex(Qt)),B.isMesh)q.wireframe===!0?(Re.setLineWidth(q.wireframeLinewidth*je()),st.setMode(k.LINES)):st.setMode(k.TRIANGLES);else if(B.isLine){let we=q.linewidth;we===void 0&&(we=1),Re.setLineWidth(we*je()),B.isLineSegments?st.setMode(k.LINES):B.isLineLoop?st.setMode(k.LINE_LOOP):st.setMode(k.LINE_STRIP)}else B.isPoints?st.setMode(k.POINTS):B.isSprite&&st.setMode(k.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)st.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))st.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let we=B._multiDrawStarts,Gn=B._multiDrawCounts,rt=B._multiDrawCount,wn=ve?J.get(ve).bytesPerElement:1,hs=Ce.get(q).currentProgram.getUniforms();for(let rn=0;rn<rt;rn++)hs.setValue(k,"_gl_DrawID",rn),st.render(we[rn]/wn,Gn[rn])}else if(B.isInstancedMesh)st.renderInstances(et,xt,B.count);else if(X.isInstancedBufferGeometry){let we=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Gn=Math.min(X.instanceCount,we);st.renderInstances(et,xt,Gn)}else st.render(et,xt)};function ot(w,O,X){w.transparent===!0&&w.side===Et&&w.forceSinglePass===!1?(w.side=Gt,w.needsUpdate=!0,da(w,O,X),w.side=mn,w.needsUpdate=!0,da(w,O,X),w.side=Et):da(w,O,X)}this.compile=function(w,O,X=null){X===null&&(X=w),m=He.get(X),m.init(O),v.push(m),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),w!==X&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();let q=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let oe=B.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){let ye=oe[fe];ot(ye,X,B),q.add(ye)}else ot(oe,X,B),q.add(oe)}),v.pop(),m=null,q},this.compileAsync=function(w,O,X=null){let q=this.compile(w,O,X);return new Promise(B=>{function oe(){if(q.forEach(function(fe){Ce.get(fe).currentProgram.isReady()&&q.delete(fe)}),q.size===0){B(w);return}setTimeout(oe,10)}Oe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Sn=null;function Vn(w){Sn&&Sn(w)}function Cu(){Oi.stop()}function Iu(){Oi.start()}let Oi=new yf;Oi.setAnimationLoop(Vn),typeof self!="undefined"&&Oi.setContext(self),this.setAnimationLoop=function(w){Sn=w,$.setAnimationLoop(w),w===null?Oi.stop():Oi.start()},$.addEventListener("sessionstart",Cu),$.addEventListener("sessionend",Iu),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,O,R),m=He.get(w,v.length),m.init(O),v.push(m),he.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(he),se=this.localClippingEnabled,H=ae.init(this.clippingPlanes,se),g=ce.get(w,_.length),g.init(),_.push(g),$.enabled===!0&&$.isPresenting===!0){let oe=y.xr.getDepthSensingMesh();oe!==null&&Qo(oe,O,-1/0,y.sortObjects)}Qo(w,O,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ee,ie),ke=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ke&&De.addToRenderList(g,w),this.info.render.frame++,H===!0&&ae.beginShadows();let X=m.state.shadowsArray;xe.render(X,w,O),H===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,B=g.transmissive;if(m.setupLights(),O.isArrayCamera){let oe=O.cameras;if(B.length>0)for(let fe=0,ye=oe.length;fe<ye;fe++){let ve=oe[fe];Lu(q,B,w,ve)}ke&&De.render(w);for(let fe=0,ye=oe.length;fe<ye;fe++){let ve=oe[fe];Pu(g,w,ve,ve.viewport)}}else B.length>0&&Lu(q,B,w,O),ke&&De.render(w),Pu(g,w,O);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(y,w,O),pt.resetDefaultState(),S=-1,b=null,v.pop(),v.length>0?(m=v[v.length-1],H===!0&&ae.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Qo(w,O,X,q){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){q&&Le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);let fe=Z.update(w),ye=w.material;ye.visible&&g.push(w,fe,ye,X,Le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){let fe=Z.update(w),ye=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Le.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Le.copy(fe.boundingSphere.center)),Le.applyMatrix4(w.matrixWorld).applyMatrix4(he)),Array.isArray(ye)){let ve=fe.groups;for(let Be=0,Ge=ve.length;Be<Ge;Be++){let Me=ve[Be],et=ye[Me.materialIndex];et&&et.visible&&g.push(w,fe,et,X,Le.z,Me)}}else ye.visible&&g.push(w,fe,ye,X,Le.z,null)}}let oe=w.children;for(let fe=0,ye=oe.length;fe<ye;fe++)Qo(oe[fe],O,X,q)}function Pu(w,O,X,q){let B=w.opaque,oe=w.transmissive,fe=w.transparent;m.setupLightsView(X),H===!0&&ae.setGlobalState(y.clippingPlanes,X),q&&Re.viewport(L.copy(q)),B.length>0&&ua(B,O,X),oe.length>0&&ua(oe,O,X),fe.length>0&&ua(fe,O,X),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Lu(w,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new ii(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Zr:ti,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let oe=m.state.transmissionRenderTarget[q.id],fe=q.viewport||L;oe.setSize(fe.z,fe.w);let ye=y.getRenderTarget();y.setRenderTarget(oe),y.getClearColor(F),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear(),ke&&De.render(X);let ve=y.toneMapping;y.toneMapping=wi;let Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),H===!0&&ae.setGlobalState(y.clippingPlanes,q),ua(w,X,q),E.updateMultisampleRenderTarget(oe),E.updateRenderTargetMipmap(oe),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Me=0,et=O.length;Me<et;Me++){let mt=O[Me],xt=mt.object,Qt=mt.geometry,st=mt.material,we=mt.group;if(st.side===Et&&xt.layers.test(q.layers)){let Gn=st.side;st.side=Gt,st.needsUpdate=!0,Du(xt,X,q,Qt,st,we),st.side=Gn,st.needsUpdate=!0,Ge=!0}}Ge===!0&&(E.updateMultisampleRenderTarget(oe),E.updateRenderTargetMipmap(oe))}y.setRenderTarget(ye),y.setClearColor(F,N),Be!==void 0&&(q.viewport=Be),y.toneMapping=ve}function ua(w,O,X){let q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,oe=w.length;B<oe;B++){let fe=w[B],ye=fe.object,ve=fe.geometry,Be=q===null?fe.material:q,Ge=fe.group;ye.layers.test(X.layers)&&Du(ye,O,X,ve,Be,Ge)}}function Du(w,O,X,q,B,oe){w.onBeforeRender(y,O,X,q,B,oe),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(y,O,X,q,w,oe),B.transparent===!0&&B.side===Et&&B.forceSinglePass===!1?(B.side=Gt,B.needsUpdate=!0,y.renderBufferDirect(X,O,q,B,w,oe),B.side=mn,B.needsUpdate=!0,y.renderBufferDirect(X,O,q,B,w,oe),B.side=Et):y.renderBufferDirect(X,O,q,B,w,oe),w.onAfterRender(y,O,X,q,B,oe)}function da(w,O,X){O.isScene!==!0&&(O=Je);let q=Ce.get(w),B=m.state.lights,oe=m.state.shadowsArray,fe=B.state.version,ye=be.getParameters(w,B.state,oe,O,X),ve=be.getProgramCacheKey(ye),Be=q.programs;q.environment=w.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(w.isMeshStandardMaterial?V:M).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",Ve),Be=new Map,q.programs=Be);let Ge=Be.get(ve);if(Ge!==void 0){if(q.currentProgram===Ge&&q.lightsStateVersion===fe)return Uu(w,ye),Ge}else ye.uniforms=be.getUniforms(w),w.onBeforeCompile(ye,y),Ge=be.acquireProgram(ye,ve),Be.set(ve,Ge),q.uniforms=ye.uniforms;let Me=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Me.clippingPlanes=ae.uniform),Uu(w,ye),q.needsLights=vm(w),q.lightsStateVersion=fe,q.needsLights&&(Me.ambientLightColor.value=B.state.ambient,Me.lightProbe.value=B.state.probe,Me.directionalLights.value=B.state.directional,Me.directionalLightShadows.value=B.state.directionalShadow,Me.spotLights.value=B.state.spot,Me.spotLightShadows.value=B.state.spotShadow,Me.rectAreaLights.value=B.state.rectArea,Me.ltc_1.value=B.state.rectAreaLTC1,Me.ltc_2.value=B.state.rectAreaLTC2,Me.pointLights.value=B.state.point,Me.pointLightShadows.value=B.state.pointShadow,Me.hemisphereLights.value=B.state.hemi,Me.directionalShadowMap.value=B.state.directionalShadowMap,Me.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Me.spotShadowMap.value=B.state.spotShadowMap,Me.spotLightMatrix.value=B.state.spotLightMatrix,Me.spotLightMap.value=B.state.spotLightMap,Me.pointShadowMap.value=B.state.pointShadowMap,Me.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Ge,q.uniformsList=null,Ge}function Nu(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=ks.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Uu(w,O){let X=Ce.get(w);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function _m(w,O,X,q,B){O.isScene!==!0&&(O=Je),E.resetTextureUnits();let oe=O.fog,fe=q.isMeshStandardMaterial?O.environment:null,ye=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Wt,ve=(q.isMeshStandardMaterial?V:M).get(q.envMap||fe),Be=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Me=!!X.morphAttributes.position,et=!!X.morphAttributes.normal,mt=!!X.morphAttributes.color,xt=wi;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(xt=y.toneMapping);let Qt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,st=Qt!==void 0?Qt.length:0,we=Ce.get(q),Gn=m.state.lights;if(H===!0&&(se===!0||w!==b)){let dn=w===b&&q.id===S;ae.setState(q,w,dn)}let rt=!1;q.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Gn.state.version||we.outputColorSpace!==ye||B.isBatchedMesh&&we.batching===!1||!B.isBatchedMesh&&we.batching===!0||B.isBatchedMesh&&we.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&we.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&we.instancing===!1||!B.isInstancedMesh&&we.instancing===!0||B.isSkinnedMesh&&we.skinning===!1||!B.isSkinnedMesh&&we.skinning===!0||B.isInstancedMesh&&we.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&we.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&we.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&we.instancingMorph===!1&&B.morphTexture!==null||we.envMap!==ve||q.fog===!0&&we.fog!==oe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ae.numPlanes||we.numIntersection!==ae.numIntersection)||we.vertexAlphas!==Be||we.vertexTangents!==Ge||we.morphTargets!==Me||we.morphNormals!==et||we.morphColors!==mt||we.toneMapping!==xt||we.morphTargetsCount!==st)&&(rt=!0):(rt=!0,we.__version=q.version);let wn=we.currentProgram;rt===!0&&(wn=da(q,O,B));let hs=!1,rn=!1,Sr=!1,_t=wn.getUniforms(),Un=we.uniforms;if(Re.useProgram(wn.program)&&(hs=!0,rn=!0,Sr=!0),q.id!==S&&(S=q.id,rn=!0),hs||b!==w){Re.buffers.depth.getReversed()?(j.copy(w.projectionMatrix),Ag(j),Rg(j),_t.setValue(k,"projectionMatrix",j)):_t.setValue(k,"projectionMatrix",w.projectionMatrix),_t.setValue(k,"viewMatrix",w.matrixWorldInverse);let di=_t.map.cameraPosition;di!==void 0&&di.setValue(k,me.setFromMatrixPosition(w.matrixWorld)),Xe.logarithmicDepthBuffer&&_t.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_t.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,rn=!0,Sr=!0)}if(B.isSkinnedMesh){_t.setOptional(k,B,"bindMatrix"),_t.setOptional(k,B,"bindMatrixInverse");let dn=B.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),_t.setValue(k,"boneTexture",dn.boneTexture,E))}B.isBatchedMesh&&(_t.setOptional(k,B,"batchingTexture"),_t.setValue(k,"batchingTexture",B._matricesTexture,E),_t.setOptional(k,B,"batchingIdTexture"),_t.setValue(k,"batchingIdTexture",B._indirectTexture,E),_t.setOptional(k,B,"batchingColorTexture"),B._colorsTexture!==null&&_t.setValue(k,"batchingColorTexture",B._colorsTexture,E));let wr=X.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0)&&Fe.update(B,X,wn),(rn||we.receiveShadow!==B.receiveShadow)&&(we.receiveShadow=B.receiveShadow,_t.setValue(k,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Un.envMap.value=ve,Un.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Un.envMapIntensity.value=O.environmentIntensity),rn&&(_t.setValue(k,"toneMappingExposure",y.toneMappingExposure),we.needsLights&&ym(Un,Sr),oe&&q.fog===!0&&K.refreshFogUniforms(Un,oe),K.refreshMaterialUniforms(Un,q,z,G,m.state.transmissionRenderTarget[w.id]),ks.upload(k,Nu(we),Un,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ks.upload(k,Nu(we),Un,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_t.setValue(k,"center",B.center),_t.setValue(k,"modelViewMatrix",B.modelViewMatrix),_t.setValue(k,"normalMatrix",B.normalMatrix),_t.setValue(k,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let dn=q.uniformsGroups;for(let di=0,fi=dn.length;di<fi;di++){let ku=dn[di];U.update(ku,wn),U.bind(ku,wn)}}return wn}function ym(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function vm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,O,X){Ce.get(w.texture).__webglTexture=O,Ce.get(w.depthTexture).__webglTexture=X;let q=Ce.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let X=Ce.get(w);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,X=0){R=w,T=O,A=X;let q=!0,B=null,oe=!1,fe=!1;if(w){let ve=Ce.get(w);if(ve.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(ve.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(ve.__hasExternalTextures)E.rebindTextures(w,Ce.get(w.texture).__webglTexture,Ce.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Me=w.depthTexture;if(ve.__boundDepthTexture!==Me){if(Me!==null&&Ce.has(Me)&&(w.width!==Me.image.width||w.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}let Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(fe=!0);let Ge=Ce.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?B=Ge[O][X]:B=Ge[O],oe=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?B=Ce.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?B=Ge[X]:B=Ge,L.copy(w.viewport),W.copy(w.scissor),P=w.scissorTest}else L.copy(re).multiplyScalar(z).floor(),W.copy(te).multiplyScalar(z).floor(),P=ge;if(Re.bindFramebuffer(k.FRAMEBUFFER,B)&&q&&Re.drawBuffers(w,B),Re.viewport(L),Re.scissor(W),Re.setScissorTest(P),oe){let ve=Ce.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,X)}else if(fe){let ve=Ce.get(w.texture),Be=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ve.__webglTexture,X||0,Be)}S=-1},this.readRenderTargetPixels=function(w,O,X,q,B,oe,fe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){Re.bindFramebuffer(k.FRAMEBUFFER,ye);try{let ve=w.texture,Be=ve.format,Ge=ve.type;if(!Xe.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-q&&X>=0&&X<=w.height-B&&k.readPixels(O,X,q,B,qe.convert(Be),qe.convert(Ge),oe)}finally{let ve=R!==null?Ce.get(R).__webglFramebuffer:null;Re.bindFramebuffer(k.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(w,O,X,q,B,oe,fe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){let ve=w.texture,Be=ve.format,Ge=ve.type;if(!Xe.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-q&&X>=0&&X<=w.height-B){Re.bindFramebuffer(k.FRAMEBUFFER,ye);let Me=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Me),k.bufferData(k.PIXEL_PACK_BUFFER,oe.byteLength,k.STREAM_READ),k.readPixels(O,X,q,B,qe.convert(Be),qe.convert(Ge),0);let et=R!==null?Ce.get(R).__webglFramebuffer:null;Re.bindFramebuffer(k.FRAMEBUFFER,et);let mt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Eg(k,mt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Me),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,oe),k.deleteBuffer(Me),k.deleteSync(mt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,X=0){w.isTexture!==!0&&(kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let q=Math.pow(2,-X),B=Math.floor(w.image.width*q),oe=Math.floor(w.image.height*q),fe=O!==null?O.x:0,ye=O!==null?O.y:0;E.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,fe,ye,B,oe),Re.unbindTexture()},this.copyTextureToTexture=function(w,O,X=null,q=null,B=0){w.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],O=arguments[2],B=arguments[3]||0,X=null);let oe,fe,ye,ve,Be,Ge,Me,et,mt,xt=w.isCompressedTexture?w.mipmaps[B]:w.image;X!==null?(oe=X.max.x-X.min.x,fe=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,ve=X.min.x,Be=X.min.y,Ge=X.isBox3?X.min.z:0):(oe=xt.width,fe=xt.height,ye=xt.depth||1,ve=0,Be=0,Ge=0),q!==null?(Me=q.x,et=q.y,mt=q.z):(Me=0,et=0,mt=0);let Qt=qe.convert(O.format),st=qe.convert(O.type),we;O.isData3DTexture?(E.setTexture3D(O,0),we=k.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),we=k.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),we=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,O.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,O.unpackAlignment);let Gn=k.getParameter(k.UNPACK_ROW_LENGTH),rt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),wn=k.getParameter(k.UNPACK_SKIP_PIXELS),hs=k.getParameter(k.UNPACK_SKIP_ROWS),rn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,xt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ve),k.pixelStorei(k.UNPACK_SKIP_ROWS,Be),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ge);let Sr=w.isDataArrayTexture||w.isData3DTexture,_t=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Un=Ce.get(w),wr=Ce.get(O),dn=Ce.get(Un.__renderTarget),di=Ce.get(wr.__renderTarget);Re.bindFramebuffer(k.READ_FRAMEBUFFER,dn.__webglFramebuffer),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let fi=0;fi<ye;fi++)Sr&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.get(w).__webglTexture,B,Ge+fi),w.isDepthTexture?(_t&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.get(O).__webglTexture,B,mt+fi),k.blitFramebuffer(ve,Be,oe,fe,Me,et,oe,fe,k.DEPTH_BUFFER_BIT,k.NEAREST)):_t?k.copyTexSubImage3D(we,B,Me,et,mt+fi,ve,Be,oe,fe):k.copyTexSubImage2D(we,B,Me,et,mt+fi,ve,Be,oe,fe);Re.bindFramebuffer(k.READ_FRAMEBUFFER,null),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else _t?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(we,B,Me,et,mt,oe,fe,ye,Qt,st,xt.data):O.isCompressedArrayTexture?k.compressedTexSubImage3D(we,B,Me,et,mt,oe,fe,ye,Qt,xt.data):k.texSubImage3D(we,B,Me,et,mt,oe,fe,ye,Qt,st,xt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,B,Me,et,oe,fe,Qt,st,xt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,B,Me,et,xt.width,xt.height,Qt,xt.data):k.texSubImage2D(k.TEXTURE_2D,B,Me,et,oe,fe,Qt,st,xt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Gn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,rt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,wn),k.pixelStorei(k.UNPACK_SKIP_ROWS,hs),k.pixelStorei(k.UNPACK_SKIP_IMAGES,rn),B===0&&O.generateMipmaps&&k.generateMipmap(we),Re.unbindTexture()},this.copyTextureToTexture3D=function(w,O,X=null,q=null,B=0){return w.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,w=arguments[2],O=arguments[3],B=arguments[4]||0),kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,X,q,B)},this.initRenderTarget=function(w){Ce.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){T=0,A=0,R=null,Re.reset(),pt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var ao=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},$s=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gl,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qt=new I,Ji=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ji=class extends $t{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ts,Cr=new I,Es=new I,As=new I,Rs=new Te,Ir=new Te,wf=new ze,Da=new I,Pr=new I,Na=new I,Nd=new Te,Ac=new Te,Ud=new Te,Ks=class extends vt{constructor(e=new ji){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $s(t,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new Ji(n,3,0,!1)),Ts.setAttribute("uv",new Ji(n,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new Te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),wf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-As.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ua(Da.set(-.5,-.5,0),As,a,Es,s,r),Ua(Pr.set(.5,-.5,0),As,a,Es,s,r),Ua(Na.set(.5,.5,0),As,a,Es,s,r),Nd.set(0,0),Ac.set(1,0),Ud.set(1,1);let o=e.ray.intersectTriangle(Da,Pr,Na,!1,Cr);if(o===null&&(Ua(Pr.set(-.5,.5,0),As,a,Es,s,r),Ac.set(0,1),o=e.ray.intersectTriangle(Da,Na,Pr,!1,Cr),o===null))return;let c=e.ray.origin.distanceTo(Cr);c<e.near||c>e.far||t.push({distance:c,point:Cr.clone(),uv:Mi.getInterpolation(Cr,Da,Pr,Na,Nd,Ac,Ud,new Te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ua(i,e,t,n,s,r){Rs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ir.x=r*Rs.x-s*Rs.y,Ir.y=s*Rs.x+r*Rs.y):Ir.copy(Rs),i.copy(e),i.x+=Ir.x,i.y+=Ir.y,i.applyMatrix4(wf)}var kd=new I,Fd=new tt,Od=new tt,bv=new I,Bd=new ze,ka=new I,Rc=new cn,zd=new ze,Cc=new Xs,oo=class extends Ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zu,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ut),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ka),this.boundingBox.expandByPoint(ka)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ka),this.boundingSphere.expandByPoint(ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rc.copy(this.boundingSphere),Rc.applyMatrix4(s),e.ray.intersectsSphere(Rc)!==!1&&(zd.copy(s).invert(),Cc.copy(e.ray).applyMatrix4(zd),!(this.boundingBox!==null&&Cc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Fd.fromBufferAttribute(s.attributes.skinIndex,e),Od.fromBufferAttribute(s.attributes.skinWeight,e),kd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Od.getComponent(r);if(a!==0){let o=Fd.getComponent(r);Bd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(bv.copy(kd).applyMatrix4(Bd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Xr=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Zs=class extends Ct{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Nt,h=Nt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hd=new ze,Sv=new ze,co=class i{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Sv;Hd.multiplyMatrices(o,t[r]),Hd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Zs(t,e,e,pn,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Xr),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Qi=class extends wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cs=new ze,Vd=new ze,Fa=[],Gd=new Ut,wv=new ze,Lr=new Ae,Dr=new cn,lo=class extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ut),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),Gd.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Gd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),Dr.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Vd.multiplyMatrices(n,Cs),Lr.matrixWorld=Vd,Lr.raycast(e,Fa);for(let a=0,o=Fa.length;a<o;a++){let c=Fa[a];c.instanceId=r,c.object=this,t.push(c)}Fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zs(new Float32Array(s*this.count),s,this.count,Ql,Cn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qr=class extends $t{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ho=new I,uo=new I,Wd=new ze,Nr=new Xs,Oa=new cn,Ic=new I,Xd=new I,Js=class extends vt{constructor(e=new bt,t=new qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ho.fromBufferAttribute(t,s-1),uo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ho.distanceTo(uo);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(s),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;Wd.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(Wd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=l){let m=h.getX(x),_=h.getX(x+1),v=Ba(this,e,Nr,c,m,_);v&&t.push(v)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=Ba(this,e,Nr,c,x,g);m&&t.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=l){let m=Ba(this,e,Nr,c,x,x+1);m&&t.push(m)}if(this.isLineLoop){let x=Ba(this,e,Nr,c,p-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ba(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(ho.fromBufferAttribute(a,s),uo.fromBufferAttribute(a,r),t.distanceSqToSegment(ho,uo,Ic,Xd)>n)return;Ic.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ic);if(!(c<e.near||c>e.far))return{distance:c,point:Xd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var qd=new I,Yd=new I,fo=class extends Js{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)qd.fromBufferAttribute(t,s),Yd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qd.distanceTo(Yd);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},po=class extends Js{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Yr=class extends $t{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$d=new ze,Dl=new Xs,za=new cn,Ha=new I,js=class extends vt{constructor(e=new bt,t=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;$d.copy(s).invert(),Dl.copy(e.ray).applyMatrix4($d);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let g=l.getX(p);Ha.fromBufferAttribute(u,g),Kd(Ha,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)Ha.fromBufferAttribute(u,p),Kd(Ha,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Kd(i,e,t,n,s,r,a){let o=Dl.distanceSqToPoint(i);if(o<t){let c=new I;Dl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var mo=class extends Ct{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var go=class i extends bt{constructor(e=[new Te(0,-.5),new Te(.5,0),new Te(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ft(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new I,d=new Te,f=new I,p=new I,x=new I,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=t;_++){let v=n+_*h*s,y=Math.sin(v),C=Math.cos(v);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*y,u.y=e[T].y,u.z=e[T].x*C,a.push(u.x,u.y,u.z),d.x=_/t,d.y=T/(e.length-1),o.push(d.x,d.y);let A=c[3*T+0]*y,R=c[3*T+1],S=c[3*T+0]*C;l.push(A,R,S)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let y=v+_*e.length,C=y,T=y+e.length,A=y+e.length+1,R=y+1;r.push(C,T,R),r.push(A,R,T)}this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("uv",new at(o,2)),this.setAttribute("normal",new at(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ti=class i extends bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new I,h=new Te;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Dn=class i extends bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],g=n/2,m=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function _(){let y=new I,C=new I,T=0,A=(t-e)/n;for(let R=0;R<=r;R++){let S=[],b=R/r,L=b*(t-e)+e;for(let W=0;W<=s;W++){let P=W/s,F=P*c+o,N=Math.sin(F),D=Math.cos(F);C.x=L*N,C.y=-b*n+g,C.z=L*D,u.push(C.x,C.y,C.z),y.set(N,A,D).normalize(),d.push(y.x,y.y,y.z),f.push(P,1-b),S.push(p++)}x.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){let b=x[S][R],L=x[S+1][R],W=x[S+1][R+1],P=x[S][R+1];(e>0||S!==0)&&(h.push(b,L,P),T+=3),(t>0||S!==r-1)&&(h.push(L,W,P),T+=3)}l.addGroup(m,T,0),m+=T}function v(y){let C=p,T=new Te,A=new I,R=0,S=y===!0?e:t,b=y===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),p++;let L=p;for(let W=0;W<=s;W++){let F=W/s*c+o,N=Math.cos(F),D=Math.sin(F);A.x=S*D,A.y=g*b,A.z=S*N,u.push(A.x,A.y,A.z),d.push(0,b,0),T.x=N*.5+.5,T.y=D*.5*b+.5,f.push(T.x,T.y),p++}for(let W=0;W<s;W++){let P=C+W,F=L+W;y===!0?h.push(F,F+1,P):h.push(F+1,F,P),R+=3}l.addGroup(m,R,y===!0?1:2),m+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xo=class i extends Dn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Nl=class i extends bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let v=new I,y=new I,C=new I;for(let T=0;T<t.length;T+=3)f(t[T+0],v),f(t[T+1],y),f(t[T+2],C),c(v,y,C,_)}function c(_,v,y,C){let T=C+1,A=[];for(let R=0;R<=T;R++){A[R]=[];let S=_.clone().lerp(y,R/T),b=v.clone().lerp(y,R/T),L=T-R;for(let W=0;W<=L;W++)W===0&&R===T?A[R][W]=S:A[R][W]=S.clone().lerp(b,W/L)}for(let R=0;R<T;R++)for(let S=0;S<2*(T-R)-1;S++){let b=Math.floor(S/2);S%2===0?(d(A[R][b+1]),d(A[R+1][b]),d(A[R][b])):(d(A[R][b+1]),d(A[R+1][b+1]),d(A[R+1][b]))}}function l(_){let v=new I;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let _=new I;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let y=g(_)/2/Math.PI+.5,C=m(_)/Math.PI+.5;a.push(y,1-C)}p(),u()}function u(){for(let _=0;_<a.length;_+=6){let v=a[_+0],y=a[_+2],C=a[_+4],T=Math.max(v,y,C),A=Math.min(v,y,C);T>.9&&A<.1&&(v<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),C<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){let y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function p(){let _=new I,v=new I,y=new I,C=new I,T=new Te,A=new Te,R=new Te;for(let S=0,b=0;S<r.length;S+=9,b+=6){_.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),T.set(a[b+0],a[b+1]),A.set(a[b+2],a[b+3]),R.set(a[b+4],a[b+5]),C.copy(_).add(v).add(y).divideScalar(3);let L=g(C);x(T,b+0,_,L),x(A,b+2,v,L),x(R,b+4,y,L)}}function x(_,v,y,C){C<0&&_.x===1&&(a[v]=_.x-1),y.x===0&&y.z===0&&(a[v]=C/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Qs=class i extends Nl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Zt=class i extends bt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new I,p=new Te;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let _=m+g,v=_,y=_+n+1,C=_+n+2,T=_+1;o.push(v,y,T),o.push(y,C,T)}}this.setIndex(o),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var er=class i extends bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){let x=p/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(p/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,_=(s+1)*f+p;a.push(x,g,_),a.push(g,m,_)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var tr=class extends $t{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hn=class extends tr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Jt=class extends $t{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function Va(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Tv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ev(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Zd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Tf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ei=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ul=class extends Ei{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ps,endingEnd:Ps}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ls:r=e,o=2*t-n;break;case $a:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ls:a=e,c=2*n-t;break;case $a:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,v=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let C=0;C!==o;++C)r[C]=m*a[h+C]+_*a[l+C]+v*a[c+C]+y*a[u+C];return r}},_o=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},kl=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Va(t,this.TimeBufferType),this.values=Va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Va(e.times,Array),values:Va(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ul(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case ec:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return ec}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Tv(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ec,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Gs;var Ai=class extends xn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Vs;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends xn{};yo.prototype.ValueTypeName="color";var si=class extends xn{};si.prototype.ValueTypeName="number";var Fl=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)tn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ri=class extends xn{InterpolantFactoryMethodLinear(e){return new Fl(this.times,this.values,this.getValueSize(),e)}};ri.prototype.ValueTypeName="quaternion";ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends xn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Vs;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends xn{};ai.prototype.ValueTypeName="vector";var nr=class{constructor(e="",t=-1,n=[],s=rh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Rv(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(xn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Ev(c);c=Zd(c,1,h),l=Zd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new si(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,p,x){if(f.length!==0){let g=[],m=[];Tf(f,g,m,p),g.length!==0&&x.push(new u(d,g,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let x=0;x<d[p].morphTargets.length;x++)f[d[p].morphTargets[x]]=-1;for(let x in f){let g=[],m=[];for(let _=0;_!==d[p].morphTargets.length;++_){let v=d[p];g.push(v.time),m.push(v.morphTarget===x?1:0)}s.push(new si(".morphTargetInfluence["+x+"]",g,m))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(ai,f+".position",d,"pos",s),n(ri,f+".quaternion",d,"rot",s),n(ai,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Av(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return si;case"vector":case"vector2":case"vector3":case"vector4":return ai;case"color":return yo;case"quaternion":return ri;case"bool":case"boolean":return Ai;case"string":return Ri}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Rv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Av(i.type);if(i.times===void 0){let t=[],n=[];Tf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ol=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},Cv=new Ol,oi=class{constructor(e){this.manager=e!==void 0?e:Cv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kn={},Bl=class extends Error{constructor(e,t){super(e),this.response=t}},$r=class extends oi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=bi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:s});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=Kn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,g=new ReadableStream({start(m){_();function _(){u.read().then(({done:v,value:y})=>{if(v)m.close();else{x+=y.byteLength;let C=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let T=0,A=h.length;T<A;T++){let R=h[T];R.onProgress&&R.onProgress(C)}m.enqueue(y),_()}},v=>{m.error(v)})}}});return new Response(g)}else throw new Bl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{bi.add(e,l);let h=Kn[e];delete Kn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Kn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Kn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var zl=class extends oi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=bi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Gr("img");function c(){h(),bi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var vo=class extends oi{constructor(e){super(e)}load(e,t,n,s){let r=new Ct,a=new zl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ir=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Mo=class extends ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Pc=new ze,Jd=new I,jd=new I,Kr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jd),jd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jd),t.updateMatrixWorld(),Pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hl=class extends Kr{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ws*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},bo=class extends ir{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Hl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Qd=new ze,Ur=new I,Lc=new I,Vl=class extends Kr{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ur),Lc.copy(n.position),Lc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Lc),n.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd)}},So=class extends ir{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Gl=class extends Kr{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sr=class extends ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Gl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ci=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var wo=class extends oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=bi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return bi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),bi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});bi.add(e,c),r.manager.itemStart(e)}};var Wl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){tn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;tn.multiplyQuaternionsFlat(e,a,e,t,e,n),tn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},lh="\\[\\]\\.:\\/",Iv=new RegExp("["+lh+"]","g"),hh="[^"+lh+"]",Pv="[^"+lh.replace("\\.","")+"]",Lv=/((?:WC+[\/:])*)/.source.replace("WC",hh),Dv=/(WCOD+)?/.source.replace("WCOD",Pv),Nv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),Uv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),kv=new RegExp("^"+Lv+Dv+Nv+Uv+"$"),Fv=["material","materials","bones","map"],Xl=class{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Iv,"")}static parseTrackName(e){let t=kv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Fv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Xl;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ql=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Ps,endingEnd:Ps};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=sh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case jm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case rh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===Jm;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===ih){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Ls,s.endingEnd=Ls):(e?s.endingStart=this.zeroSlopeAtStart?Ls:Ps:s.endingStart=$a,t?s.endingEnd=this.zeroSlopeAtEnd?Ls:Ps:s.endingEnd=$a)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},Ov=new Float32Array(1),To=class extends ni{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;p=new Wl(dt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new _o(new Float32Array(2),new Float32Array(2),1,Ov),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?nr.findByName(s,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=rh),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new ql(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?nr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);function uh(i,e){if(e===ff)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Jr||e===Ao){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Jr)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Io=class extends oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _h(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Lh(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ci.extractUrlBase(e);a=Ci.resolveURL(l,this.path)}else a=Ci.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new $r(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===If){try{a[$e.KHR_BINARY_GLTF]=new Dh(e)}catch(u){s&&s(u);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new zh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:a[u]=new gh;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[u]=new Nh(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[u]=new Uh;break;case $e.KHR_MESH_QUANTIZATION:a[u]=new kh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Bv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},mh=class{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Se(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Wt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new sr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new So(h),l.distance=u;break;case"spot":l=new bo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},gh=class{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return At}extendParams(e,t,n){let s=[];e.color=new Se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Wt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}},xh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},_h=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(o,o)}return Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},vh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Wt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Tt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},bh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Sh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(o[0],o[1],o[2],Wt),Promise.all(r)}},wh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Th=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(o[0],o[1],o[2],Wt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Tt)),Promise.all(r)}},Eh=class{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Ah=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Rh=class{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ch=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ih=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ph=class{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Lh=class{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==_n.TRIANGLES&&l.mode!==_n.TRIANGLE_STRIP&&l.mode!==_n.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let p of u){let x=new ze,g=new I,m=new tn,_=new I(1,1,1),v=new lo(p.geometry,p.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&_.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,x.compose(g,m,_));for(let y in c)if(y==="_COLOR_0"){let C=c[y];v.instanceColor=new Qi(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,c[y]);vt.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},If="glTF",Qr=12,Ef={JSON:1313821514,BIN:5130562},Dh=class{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==If)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Qr,r=new DataView(e,Qr),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Ef.JSON){let l=new Uint8Array(e,Qr+a,o);this.content=n.decode(l)}else if(c===Ef.BIN){let l=Qr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Nh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Oh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Oh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ar[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],g=c[p];g!==void 0&&(x.normalized=g)}u(f)},o,l,Wt,d)})})}},Uh=class{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},kh=class{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}},Po=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*l,x=p-l,g=-2*f+3*d,m=f-d,_=1-g,v=m-d+u;for(let y=0;y!==o;y++){let C=a[x+y+o],T=a[x+y+c]*h,A=a[p+y+o],R=a[p+y]*h;r[y]=_*C+v*T+g*A+m*R}return r}},zv=new tn,Fh=class extends Po{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return zv.fromArray(r).normalize().toArray(r),r}},_n={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ar={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Af={9728:Nt,9729:en,9984:Kl,9985:Or,9986:Is,9987:Fn},Rf={33071:jn,33648:Ki,10497:$i},dh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Hv={CUBICSPLINE:void 0,LINEAR:Gs,STEP:Vs},fh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Vv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new tr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mn})),i.DefaultMaterial}function es(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Gv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Wv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Xv(i){let e,t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ph(t.attributes):e=i.indices+":"+ph(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ph(i.targets[n]);return e}function ph(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Bh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Yv=new ze,zh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Bv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&a<98?this.textureLoader=new vo(this.options.manager):this.textureLoader=new wo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $r(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return es(r,o,s),ci(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ci.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=dh[s.type],o=ar[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new wt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=dh[s.type],l=ar[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,g;if(f&&f!==u){let m=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,v=t.cache.get(_);v||(x=new l(o,m*f,s.count*f/h),v=new $s(x,f/h),t.cache.add(_,v)),g=new Ji(v,c,d%f/h,p)}else o===null?x=new l(s.count*c):x=new l(o,d,s.count*c),g=new wt(x,c,p);if(s.sparse!==void 0){let m=dh.SCALAR,_=ar[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,C=new _(a[1],v,s.sparse.count*m),T=new l(a[2],y,s.sparse.count*c);o!==null&&(g=new wt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,R=C.length;A<R;A++){let S=C[A];if(g.setX(S,T[A*c]),c>=2&&g.setY(S,T[A*c+1]),c>=3&&g.setZ(S,T[A*c+2]),c>=4&&g.setW(S,T[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Af[d.magFilter]||en,h.minFilter=Af[d.minFilter]||Fn,h.wrapS=Rf[d.wrapS]||$i,h.wrapT=Rf[d.wrapT]||$i,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==en,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){let g=new Ct(x);g.needsUpdate=!0,d(g)}),t.load(Ci.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),ci(u,a),u.userData.mimeType=a.mimeType||qv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Yr,$t.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new qr,$t.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return tr}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){let u=s[$e.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Wt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Et);let h=r.alphaMode||fh.OPAQUE;if(h===fh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===fh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==At&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==At&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==At){let u=r.emissiveFactor;o.emissive=new Se().setRGB(u[0],u[1],u[2],Wt)}return r.emissiveTexture!==void 0&&a!==At&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),ci(u,r),t.associations.set(u,{materials:e}),r.extensions&&es(s,u,r),u})}createUniqueName(e){let t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Cf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Xv(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Cf(new bt,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Vv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],g=a[f],m,_=l[f];if(g.mode===_n.TRIANGLES||g.mode===_n.TRIANGLE_STRIP||g.mode===_n.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new oo(x,_):new Ae(x,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===_n.TRIANGLE_STRIP?m.geometry=uh(m.geometry,Ao):g.mode===_n.TRIANGLE_FAN&&(m.geometry=uh(m.geometry,Jr));else if(g.mode===_n.LINES)m=new fo(x,_);else if(g.mode===_n.LINE_STRIP)m=new Js(x,_);else if(g.mode===_n.LINE_LOOP)m=new po(x,_);else if(g.mode===_n.POINTS)m=new js(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Wv(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ci(m,r),g.extensions&&es(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&es(s,u[0],r),u[0];let d=new nt;r.extensions&&es(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new It(mf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ys(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new co(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],x=f.target,g=x.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,_=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",_)),l.push(p),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],x=u[3],g=u[4],m=[];for(let _=0,v=d.length;_<v;_++){let y=d[_],C=f[_],T=p[_],A=x[_],R=g[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let S=n._createAnimationTracks(y,C,T,A,R);if(S)for(let b=0;b<S.length;b++)m.push(S[b])}return new nr(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Yv)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Xr:l.length>1?h=new nt:l.length===1?h=l[0]:h=new vt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ci(h,r),r.extensions&&es(n,h,r),r.matrix!==void 0){let u=new ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new nt;n.name&&(r.name=s.createUniqueName(n.name)),ci(r,n),n.extensions&&es(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof $t||d instanceof Ct)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];Ii[r.path]===Ii.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Ii[r.path]){case Ii.weights:l=si;break;case Ii.rotation:l=ri;break;case Ii.position:case Ii.scale:l=ai;break;default:switch(n.itemSize){case 1:l=si;break;case 2:case 3:default:l=ai;break}break}let h=s.interpolation!==void 0?Hv[s.interpolation]:Gs,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let p=new l(c[d]+"."+Ii[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Bh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ri?Fh:Po;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function $v(i,e,t){let n=e.attributes,s=new Ut;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){let h=Bh(ar[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,c=new I;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=Bh(ar[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new cn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Cf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Oh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ke.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),ci(i,e),$v(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Gv(i,e.targets,t):i})}var Hh={_about:"Hero moves. Times in frames at 60 Hz (startup = frames before the hit, active = frames the hit can land, recovery = frames after). reach in metres, arc in radians. balance = Balance points added on hit. All numbers are first guesses until people play.",light1:{role:"string",startup:5,active:3,recovery:13,next:"light2",nextFrom:7,cancel:7,dmg:6,balance:3,reach:1.9,arc:1.7,lunge:.35,stop:3,clip:"attack",sfx:"light"},light2:{role:"string",startup:5,active:3,recovery:14,next:"light3",nextFrom:7,cancel:7,dmg:7,balance:3.5,reach:1.9,arc:1.7,lunge:.35,stop:3,clip:"slash2",sfx:"light"},light3:{role:"string",startup:8,active:4,recovery:20,cancel:11,dmg:10,balance:5,reach:2,arc:1.9,lunge:.6,stop:5,clip:"slash3",sfx:"heavy"},sunder:{role:"opener",cd:2.4,startup:9,active:4,recovery:16,cancel:13,dmg:9,balance:4,apply:{cracked:1},reach:2.1,arc:1.5,lunge:.8,stop:5,clip:"sunder",sfx:"sunder"},tether:{role:"linker",cd:3,startup:7,active:6,recovery:14,cancel:13,dmg:4,balance:6,apply:{bound:1},reach:6.5,arc:.6,lunge:0,stop:4,clip:"tether",sfx:"tether"},breaker:{role:"ender",cd:4,startup:16,active:5,recovery:24,cancel:21,dmg:14,balance:8,consume:{cracked:{dmg:8,balance:16},bound:{dmg:4,balance:12}},reach:2.4,arc:1.9,lunge:.5,stop:7,stopPerStatus:2,clip:"breaker",sfx:"breaker"},giantfall:{role:"finisher",startup:18,active:6,recovery:30,dmg:40,perComboHit:3,reach:3.2,arc:3.2,lunge:1.2,stop:18,slow:[.5,.35],clip:"giantfall",sfx:"giantfall"},dodge:{clip:"roll",frames:17,iframes:20,perfect:11,dist:3,cd:.45,cancelFrom:12},_cancel:"What a move can be cut into. 'hit' = only after it landed and from its cancel frame; 'recovery' = from the first recovery frame even on a miss; 'hitOrRecovery' = either; 'any' = at any frame (light hits never trap you); 'always' = from nextFrom, hit or miss.",cancelRules:{string:{next:"always",skill:"hit",dodge:"any"},opener:{light:"hit",skill:"hit",dodge:"hitOrRecovery"},linker:{light:"hit",skill:"hit",dodge:"hitOrRecovery"},ender:{light:"hit",skill:"hit",dodge:"recovery"},finisher:{dodge:"recovery"}}};var Vh={_about:"Rules shared by every fight. Seconds unless the name says frames. First guesses until people play; sources in design/NUMBERS.md.",arena:{radius:8.2},hero:{hp:100,speed:5.2,radius:.45,hurtIframes:.6,hurtLock:.25,hurtPush:1.2,moveInMove:.12,aimAssist:3},input:{buffer:.15},combo:{window:2,cap:20,variety:[1,1,1.3,1.6],repeat:.6},balance:{idle:1.5,drain:20,drainFloor:.35},topple:{time:4,dmgMul:2,grow:1.45,getup:.9,afterFinisher:.6,quake:{r:2.4,dmg:60}},status:{cracked:{max:2,time:6,balanceGainPerStack:.25},bound:{max:1,time:3,giantTimeMul:.65}},perfect:{balance:8,slow:[.3,.3]},feel:{stopGap:.25,toppleStop:14,toppleSlow:[.45,.3],winSlow:[1.2,.25]},assist:{offerAfter:2,startPct:20,perDownPct:5,capPct:60},flow:{intro:2}};var jt={_about:"Giants. wind = telegraph time before the blow (seconds), open = punish window after it, track = share of the wind-up during which a slam follows the hero before it locks. range = [min, max] distance from the giant at which it picks this attack. First guesses until people play.",hollen:{name:"Hollen",title:"Warden of the East Gate",hp:3e3,balance:100,radius:1.6,height:5.4,speed:1.35,turn:2.4,reachWant:2.6,think:[.3,.8],phases:[{from:1,attacks:["slam","sweep","charge"],windMul:1,openMul:1},{from:.5,attacks:["slam","sweep","charge","slamSweep"],windMul:.82,openMul:.8,roar:1.4}],attacks:{slam:{shape:"circle",at:"hero",r:2.3,wind:.95,track:.5,open:1.1,dmg:18,range:[0,7.5],weight:3,sfx:"slam"},sweep:{shape:"ring",at:"self",r:3.9,inner:0,wind:.8,open:.9,dmg:14,range:[0,3.6],weight:3,sfx:"sweep"},charge:{shape:"lane",at:"self",w:2.4,len:9,wind:.9,dash:.55,open:1.3,dmg:20,range:[4,30],weight:2,sfx:"charge"},slamSweep:{chain:["slam","sweep"],weight:2}},tint:null},cairn:{name:"Cairn",title:"the Young Warden",hp:1500,balance:80,radius:1.25,height:3.6,speed:1.25,turn:2.2,reachWant:2.3,think:[.6,1.2],tint:"#c7c08a",phases:[{from:1,attacks:["slam","sweep"],windMul:1,openMul:1}],attacks:{slam:{shape:"circle",at:"hero",r:2,wind:1.15,track:.45,open:1.4,dmg:12,range:[0,7],weight:3,sfx:"slam"},sweep:{shape:"ring",at:"self",r:3.2,inner:0,wind:1,open:1.2,dmg:9,range:[0,3],weight:2,sfx:"sweep"}}}};var Pf={_about:"Elara's lines. Each event has several lines; she says one, never the same one twice in a row, and waits `gap` seconds between lines unless the event is urgent. {key:x} is replaced by the key the player uses for x. Plain words, short, warm, a little teasing. Never 'you died'. Non-urgent lines wait `gap` seconds after any line; the same event speaks at most once per `repeatGap` seconds. Urgent = the few story moments (first fight, giant intros, first topple, the end of a run).",gap:18,show:2.8,events:{intro:{urgent:!0,lines:["That's Hollen. Oldest of them all. Be gentle \u2014 he only forgot why he stands.","Hollen again. He's not angry at you. He's just lost.","Ready? Crack him, hold him, break him. In that order, if you can."]},firstFight:{urgent:!0,lines:["Little stones first. Move with {key:move}, strike with {key:light}. Watch the red on the floor \u2014 that's where they land."]},firstWind:{lines:["Red floor means he's coming down there. Roll out with {key:dodge}!","See him wind up? That's your cue to roll."],urgent:!1},firstHurt:{lines:["Ouch. Roll when the red fills up, not before.","Get out of the red, Breaker!"],urgent:!1},firstPerfect:{urgent:!1,lines:["Perfect! Rolling right as he lands shakes his balance.","Ooh \u2014 right on the beat. He felt that."]},noSkills:{lines:["Try {key:sunder} \u2014 Sunder cracks the stone.","Strikes alone won't bring him down. Crack him with {key:sunder}."],urgent:!1},firstCracked:{urgent:!1,lines:["He's cracked! Now hold him with {key:tether}, or break it open with {key:breaker}.","Cracked! A Break on that will hurt his balance a lot."]},firstBound:{lines:["Bound! He's slow now. Finish with {key:breaker}.","Got him tethered. Break it, quick!"],urgent:!1},firstSpend:{urgent:!1,lines:["See the gold bar jump? That's his balance going.","That's it \u2014 crack, hold, break. Look at his balance bar!"]},teeter:{lines:["He's teetering! One more push!","Almost \u2014 he's swaying!"],urgent:!1},firstTopple:{urgent:!0,lines:["He's DOWN! Hit {key:breaker} now \u2014 Giantfall!","Down he goes! Giantfall \u2014 {key:breaker}!"]},topple:{urgent:!1,lines:["Down again!","Timber!","He's down \u2014 make it count!","Again! He'll be steadier next time."]},finisherBig:{lines:["That was beautiful.","The terrace shook. Did you feel it?","Big combo, big fall. I like your style."],urgent:!1},repeat:{lines:["Same trick again? He's learning it. Mix it up.","You keep doing that one. Try a different order!","Variety, Breaker. The bar fills faster when you mix."],urgent:!1},lowHp:{urgent:!1,lines:["Careful! You're hurt. Roll more, swing less.","Breathe. Watch him. Roll."]},phase2:{urgent:!1,lines:["He's angry now. Faster swings \u2014 watch closely.","Half his strength gone and he knows it. Stay sharp!"]},winFirst:{urgent:!0,lines:["You did it. Rest now, Hollen. ...Thank you, Breaker."]},win:{urgent:!0,lines:["He's sleeping. Gently done.","Rest, old Warden.","Another fall. You're getting good at this."]},down1:{urgent:!0,lines:["Get up, Breaker. He was hurting too.","Up you get. You saw his moves now."]},down2:{urgent:!0,lines:["That was close. If you want, I can take some of the hits with you \u2014 your choice.","Again? Good. I'm staying right here."]},downMore:{urgent:!0,lines:["Every fall teaches something. What did he do just before?","You're closer each time. I can see it.","Deep breath. Crack, hold, break."]},close:{urgent:!0,lines:["He was SO close to falling. One more try?","A sliver! He had a sliver left!"]},runAgain:{urgent:!0,lines:["The terrace again. You know them better now.","Up we go. Crack, hold, break.","Back where we started \u2014 but you're not the same Breaker."]},firstFoeWind:{lines:["See that little red circle? It's about to jump at you. Roll!","Shardlings lunge after they glow. Hit them first \u2014 a hit breaks their wind-up."],urgent:!1},firstKill:{lines:["One down!","Shardlings are bits of Warden stone. They'll sleep too.","Nice. Keep moving."],urgent:!1},waveNext:{lines:["More coming. The far ones throw stones \u2014 Tether pulls them close.","Slingers keep their distance. {key:tether} drags them in.","Here comes the next lot."],urgent:!1},swarm:{urgent:!1,lines:["The wind's turning. Dusk is when Hollen wakes.","A whole swarm. Stay moving, Breaker.","They're everywhere \u2014 use the walls, don't get surrounded."]},pickFirst:{urgent:!0,lines:["Rest a moment. Pick a power \u2014 each one changes how your combos work."]},pick:{urgent:!1,lines:["Choose well.","Which one feels like you?","Take a breath. Then choose."]},picked:{lines:["Good choice.","Ooh, I like that one.","Let's see what that does to them."],urgent:!1},cairnIntro:{urgent:!0,lines:["That's Cairn. The youngest Warden. Watch the gold bar under his name \u2014 fill it and he falls.","Cairn! He's clumsy. Crack him, hold him, break him \u2014 and he'll sit down hard."]},cairnAgain:{urgent:!0,lines:["Cairn again. You know his trick.","Hello again, little Warden."]},cairnRest:{urgent:!0,lines:["Sleep, Cairn. ...Hear that? Something big is waking.","He's resting. That was the easy one."]},hollenIntro:{urgent:!0,lines:["That's Hollen. Oldest of them all. Be gentle \u2014 he only forgot why he stands.","Hollen. He guarded the East Gate before anyone remembers. Bring him down."]},hollenAgain:{urgent:!0,lines:["Hollen again. He remembers you too.","Him. Deep breath."]},adds:{lines:["He's calling the little ones! Topple him next to them \u2014 the fall smashes them.","Shardlings! Lure them close to him, then bring him down on them."],urgent:!1},firstCrush:{urgent:!1,lines:["Did you see that? His fall smashed them!","Ha! Bring him down next to them \u2014 the ground does the rest."]},crush:{lines:["Crushed!","The fall did that. Beautiful.","Timber \u2014 and the little ones with him."],urgent:!1}},repeatGap:90};var Lf={_about:"Small foes: Shardlings, young bits of Warden stone. No Balance bar; a hit interrupts their wind-up (stagger). wind = warning before the blow (s). First guesses until people play.",shardling:{name:"Shardling",hp:70,radius:.55,height:1.3,speed:2.6,reach:1.4,wind:.55,dmg:7,lunge:1.6,rest:[.9,1.6],stagger:.35,push:.6,tint:"#b9a17a"},slinger:{name:"Slinger",hp:50,radius:.5,height:1.15,speed:2.2,keep:[4.5,6.5],wind:.7,dmg:7,shot:{speed:9,radius:.35,life:1.6},rest:[1.4,2.2],stagger:.4,push:.6,tint:"#7d8aa8"},status:{crackedDmgMul:1.5,boundStun:1.2,breakerShatter:2.5}};var or={_about:"Power cards: one is picked from three after each early stage. Each changes how combos are built and most cost something. 'set' writes into sim.mods (src/sim/mods.js). Numbers are first guesses.",cards:[{id:"burningTether",name:"Burning Tether",text:"Tether also CRACKS the stone. Its cooldown is 1 s longer.",set:{tetherCracks:!0,"cd.tether":1}},{id:"deepFissure",name:"Deep Fissure",text:"CRACKED stacks up to 3. Sunder's cooldown is 0.6 s longer.",set:{crackedMax:1,"cd.sunder":.6}},{id:"lingering",name:"Lingering Crack",text:"Break leaves one CRACK behind, but each spent status gives 25% less Balance.",set:{breakKeepsCrack:!0,breakGainMul:.75}},{id:"rollCrack",name:"Splitting Roll",text:"A Perfect roll CRACKS the giant.",set:{perfectCracks:!0}},{id:"longTether",name:"Long Tether",text:"Tether reaches 3 m further and pulls YOU to the giant. Cooldown +0.5 s.",set:{tetherReach:3,tetherPullsSelf:!0,"cd.tether":.5}},{id:"quickHands",name:"Quick Hands",text:"Strikes add 60% more Balance. Every skill cools down 20% slower.",set:{lightBalanceMul:1.6,cdMul:1.2}},{id:"heavySunder",name:"Heavy Sunder",text:"Sunder cracks twice. Its cooldown is 1.5 s longer.",set:{sunderStacks:2,"cd.sunder":1.5}},{id:"afterquake",name:"Afterquake",text:"Giantfall shakes the whole terrace: every small foe takes 40. Topples last 1 s longer.",set:{giantfallQuake:40,toppleTime:1}},{id:"secondWind",name:"Second Wind",text:"Heal 12 HP every time a giant topples.",set:{toppleHeal:12}},{id:"chainReaction",name:"Chain Reaction",text:"Breaking a BOUND giant makes Tether ready again.",set:{breakResetsTether:!0}},{id:"glassStone",name:"Glass Stone",text:"Deal 25% more damage. Take 25% more damage.",set:{dmgOut:1.25,dmgIn:1.25}},{id:"steadyFeet",name:"Steady Feet",text:"Roll recovers 40% faster and the Perfect window is 4 frames longer. Strikes do 15% less damage.",set:{dodgeCdMul:.6,perfectBonus:4,lightDmgMul:.85}}]};var Lo={_about:"One run, about 4 minutes. Stages play in order; 'pick' offers 3 power cards (and rests: heal). The run is won when the last giant rests; a down restarts the run. Spawn ring = metres from the centre. Targets per stage are guesses to check with bots (tools/run-sweep.mjs).",intro:1.6,pickHeal:35,spawnRing:7.2,stages:[{type:"wave",name:"The Terrace Wakes",mood:1,foes:[["shardling",3]],target:"0:00-0:25",later:[["shardling",2]]},{type:"pick"},{type:"wave",name:"Stones That Throw",mood:1,foes:[["shardling",3],["slinger",2]],target:"0:30-0:55",later:[["shardling",2],["slinger",1]]},{type:"giant",giant:"cairn",mood:1,foes:[],target:"1:00-1:45",adds:{at:.5,foes:[["shardling",3]]}},{type:"pick"},{type:"wave",name:"The Swarm",mood:2,foes:[["shardling",3],["slinger",2]],later:[["shardling",3],["slinger",1]],target:"1:50-2:40"},{type:"pick"},{type:"giant",giant:"hollen",mood:2,foes:[],adds:{at:.6,foes:[["shardling",3]]},target:"2:50-4:30"}]};function No(i){let e=i>>>0||1,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.weighted=(n,s)=>{let r=n.reduce((o,c)=>o+s(c),0),a=t()*r;for(let o of n)if(a-=s(o),a<=0)return o;return n[n.length-1]},t.state=()=>e,t}var Do=class{constructor(){this.n={},this.timed=[]}add(e){this.n[e]=(this.n[e]||0)+1}release(e){if(!this.n[e])throw new Error(`lock "${e}" released more often than taken`);this.n[e]--}has(e){return(this.n[e]||0)>0}hold(e,t){this.add(e),this.timed.push({k:e,t})}tick(e){for(let t=this.timed.length-1;t>=0;t--){let n=this.timed[t];n.t-=e,n.t<=0&&(this.release(n.k),this.timed.splice(t,1))}}clear(){this.n={},this.timed=[]}};function Df(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0).toString(16).padStart(8,"0")}var it=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z),Mt=(i,e)=>Math.atan2(e.x-i.x,e.z-i.z),Gh=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},cr=(i,e,t)=>{let n=Gh(e-i);return i+Math.max(-t,Math.min(t,n))};var nM=new Set(["opener","linker","ender"]);function Wh(){return{hits:0,t:0,skills:[],last:null,best:0}}function Uo(i,e=i.combo){let t=i.data.rules.combo.variety,n=new Set(e.skills).size;return t[Math.min(n,t.length-1)]}function lr(i,e){let t=i.combo;if(t.hits>0){let s=t.skills.join(">");i.fight.combos.push({hits:t.hits,seq:s,reason:e,variety:Uo(i)}),i.emit({t:"comboEnd",hits:t.hits,seq:s,reason:e})}let n=Math.max(t.best,t.hits);i.combo=Wh(),i.combo.best=n}function Nf(i,e){let t=i.combo;t.hits===0||i.hero.dodge||(t.t-=e,t.t<=0&&lr(i,"time"))}function Xh(i,e){let t=i.data.rules,n=i.data.moves[e],s=i.combo;if(e==="giantfall")return s.hits++,s.t=t.combo.window,{variety:1,repeat:!1};let r=!1;return nM.has(n.role)&&(r=s.last===e,s.skills.push(e),s.last=e),s.hits++,s.t=t.combo.window,{variety:Uo(i),repeat:r}}function iM(i,e){return i.data.rules.status[e].max+(e==="cracked"?i.mods.crackedMax:0)}function qh(i,e,t,n=1){let s=i.data.rules.status[t],r=e.status[t],a=r.n;r.n=Math.min(iM(i,t),r.n+n),r.t=s.time,r.n!==a&&i.emit({t:"status",on:!0,name:t,n:r.n,target:e.kind,id:e.id}),t==="cracked"&&r.n>i.data.rules.status.cracked.max&&i.powerFired("deepFissure")}function ko(i,e,t){for(let n of Object.keys(e.status)){let s=e.status[n];s.n>0&&(s.t-=t,s.t<=0&&(s.n=0,i.emit({t:"status",on:!1,name:n,n:0,target:e.kind,id:e.id})))}}function Uf(i,e,t){let n={...t.apply||{}};return e==="sunder"&&(n.cracked=i.mods.sunderStacks),e==="tether"&&i.mods.tetherCracks&&(n.cracked=(n.cracked||0)+1),n}var kf=(i,e)=>i.mods.dmgOut*(e.role==="string"?i.mods.lightDmgMul:1);function Ff(i,e,t,n){let s=i.mods;e==="tether"&&s.tetherCracks&&i.powerFired("burningTether"),e==="sunder"&&s.sunderStacks>1&&i.powerFired("heavySunder"),t.role==="string"&&s.lightBalanceMul>1&&n&&i.powerFired("quickHands"),s.dmgOut>1&&i.powerFired("glassStone"),t.role==="string"&&s.lightDmgMul<1&&i.powerFired("steadyFeet")}function Of(i,e,t,n=Xh(i,e)){let s=i.data.rules,r=i.mods,a=i.data.moves[e],o=t.state==="toppled",c={move:e,role:a.role,dmg:a.dmg,dmgMul:kf(i,a),balance:a.balance,balanceMul:a.role==="string"?r.lightBalanceMul:1,apply:Uf(i,e,a),consumed:{},variety:n.variety,repeat:n.repeat,toppled:o,toppledNow:!1};if(a.consume){for(let[d,f]of Object.entries(a.consume)){let p=t.status[d].n;p>0&&(c.dmg+=f.dmg*p,c.balance+=f.balance*p*r.breakGainMul,c.consumed[d]=p,t.status[d].n=0,i.emit({t:"status",on:!1,name:d,n:0,consumed:!0,target:"giant"}))}r.breakKeepsCrack&&c.consumed.cracked&&(t.status.cracked.n=1,t.status.cracked.t=s.status.cracked.time,i.powerFired("lingering")),r.breakResetsTether&&c.consumed.bound&&(i.hero.cd.tether=0,i.powerFired("chainReaction"))}if(c.balanceMul+=s.status.cracked.balanceGainPerStack*t.status.cracked.n,e==="giantfall"){let d=t.toppleQ||{hits:0,variety:1};c.dmg+=a.perComboHit*d.hits,c.dmgMul*=d.variety,c.variety=d.variety}else{o&&(c.dmgMul*=s.topple.dmgMul);let d=c.repeat?s.combo.repeat:1;c.dmgMul*=c.variety*d,c.balanceMul*=c.variety*d}for(let d of i.hooks.beforeHit)d(c,t,i);let l=Math.max(1,Math.round(c.dmg*c.dmgMul));t.hp=Math.max(0,t.hp-l);let h=i.hero;t.lastHitDir=Mt(h,t),t.sinceHit=0;let u=0;!o&&t.state!=="fallen"&&(u=c.balance*c.balanceMul,t.balance=Math.min(t.balMax,t.balance+u));for(let[d,f]of Object.entries(c.apply))qh(i,t,d,f);if(e==="tether"&&r.tetherPullsSelf){let d=Mt(t,h),f=t.radius+1;h.x=t.x+Math.sin(d)*f,h.z=t.z+Math.cos(d)*f,i.emit({t:"pull",x:h.x,z:h.z}),i.powerFired("longTether")}Ff(i,e,a,u>0),i.fight.dmgDealt+=l,i.emit({t:"hit",target:"giant",move:e,dmg:l,gain:Math.round(u*10)/10,variety:c.variety,repeat:c.repeat,consumed:c.consumed,toppled:o,x:t.x,z:t.z,combo:i.combo.hits}),i.stop(a.stop+(a.stopPerStatus||0)*Object.values(c.consumed).reduce((d,f)=>d+f,0)),a.slow&&i.slow(a.slow[0],a.slow[1]);for(let d of i.hooks.afterHit)d(c,t,i);if(e==="giantfall"&&r.giantfallQuake){for(let d of i.foes)d.hp>0&&Fo(i,d,r.giantfallQuake,"quake",Mt(t,d),1.5);i.powerFired("afterquake")}if(t.hp<=0)return i.giantFallen(t),c;if(e==="giantfall"&&t.state==="toppled"&&(t.t=Math.min(t.t,s.topple.afterFinisher)),!o&&t.balance>=t.balMax)i.topple(t),c.toppledNow=!0;else{let d=i.giantDef(t).phases[t.phase+1];d&&t.hp/t.max<=d.from&&i.phaseUp(t)}return i.combo.hits>=s.combo.cap&&lr(i,"cap"),c}function Fo(i,e,t,n,s,r=1){let a=i.data.foes[e.type];e.hp=Math.max(0,e.hp-t),(e.state==="wind"||e.state==="move"||e.state==="rest")&&(e.state="stagger",e.t=a.stagger,e.tg=null),e.x+=Math.sin(s)*a.push*r,e.z+=Math.cos(s)*a.push*r,e.flash=1,e.hp<=0&&i.foeDown(e,n)}function Bf(i,e,t,n){let s=i.data.moves[e],r=i.data.foes.status,a=i.data.rules,o=s.dmg*kf(i,s)*n.variety*(n.repeat?a.combo.repeat:1),c=1,l={};if(t.status.cracked.n>0&&(o*=r.crackedDmgMul),s.consume)for(let[p,x]of Object.entries(s.consume)){let g=t.status[p].n;g>0&&(o+=x.dmg*2*g,l[p]=g,t.status[p].n=0,c=r.breakerShatter)}let h=i.hero,u=Mt(h,t),d=Uf(i,e,s);for(let[p,x]of Object.entries(d))qh(i,t,p,x);if(d.bound){let p=1.1+t.radius;t.x=h.x+Math.sin(u)*p,t.z=h.z+Math.cos(u)*p,t.state="stun",t.t=r.boundStun,t.tg=null,c=0}let f=Math.max(1,Math.round(o));i.fight.dmgDealt+=f,Ff(i,e,s,!1),i.emit({t:"hit",target:"foe",id:t.id,move:e,dmg:f,variety:n.variety,repeat:n.repeat,consumed:l,x:t.x,z:t.z,combo:i.combo.hits}),Fo(i,t,f,e,u,c),t.state==="stagger"&&d.bound&&(t.state="stun",t.t=r.boundStun),i.stop(Math.max(2,s.stop-2)),i.combo.hits>=a.combo.cap&&lr(i,"cap")}function ts(i,e,t){let n=i.hero,s=i.data.rules,r=i.data.moves.dodge,a=t&&t.kind==="giant"?t:null;if(i.flow.state!=="fight"||n.hp<=0)return"none";if(n.dodge&&n.dodge.t*60<r.perfect+i.mods.perfectBonus)return i.fight.perfects++,i.emit({t:"perfect",x:n.x,z:n.z}),i.slow(s.perfect.slow[0],s.perfect.slow[1]),n.dodge.t*60>=r.perfect&&i.powerFired("steadyFeet"),a&&a.state!=="toppled"&&a.state!=="fallen"&&(a.balance=Math.min(a.balMax,a.balance+s.perfect.balance),a.sinceHit=0,i.mods.perfectCracks&&(qh(i,a,"cracked",1),i.powerFired("rollCrack")),a.balance>=a.balMax&&(a.lastHitDir=Mt(n,a),i.topple(a))),"perfect";if(n.iframe>0||n.hurtT>0)return i.emit({t:"evade"}),"evade";let o={dmg:e.dmg,mul:(1-i.assistPct/100)*i.mods.dmgIn};for(let h of i.hooks.beforeHurt)h(o,t,i);let c=Math.max(1,Math.round(o.dmg*o.mul));i.mods.dmgIn>1&&i.powerFired("glassStone",{hurt:!0}),n.hp=Math.max(0,n.hp-c),n.hurtT=s.hero.hurtIframes,n.iframe=s.hero.hurtIframes,i.locks.hold("act",s.hero.hurtLock),n.move=null;let l=Mt(t,n);return n.x+=Math.sin(l)*s.hero.hurtPush*(a?1:.5),n.z+=Math.cos(l)*s.hero.hurtPush*(a?1:.5),i.fight.hitsTaken++,i.fight.dmgTaken+=c,lr(i,"hurt"),i.emit({t:"hurt",dmg:c,hp:n.hp,from:e.name}),n.hp<=0&&i.heroDown(),"hurt"}var sM=["light","sunder","tether","breaker","dodge"],Vf=["sunder","tether","breaker"];function Gf(i){return{x:0,z:4.5,face:Math.PI,hp:i.hero.hp,max:i.hero.hp,move:null,dodge:null,dodgeCd:0,iframe:0,hurtT:0,cd:{sunder:0,tether:0,breaker:0},mx:0,mz:0,moving:!1}}var rM=i=>i&&i.state!=="fallen"&&i.state!=="intro";function hr(i){let e=i.foes.filter(t=>t.hp>0&&t.state!=="spawn");return rM(i.giant)&&e.push(i.giant),e}function aM(i,e){let t=i.hero,n=i.data.moves,s=i.giant;if(e==="light"){let r=t.move&&n[t.move.id];return r&&r.role==="string"&&r.next?r.next:"light1"}return e==="breaker"&&s&&s.state==="toppled"&&!s.finisherUsed?"giantfall":e}function zf(i,e){let t=i.hero,n=i.data.moves;if(i.locks.has("act")||Vf.includes(e)&&t.cd[e]>0||e==="dodge"&&t.dodgeCd>0)return!1;if(t.dodge)return e!=="dodge"&&t.dodge.t*60+1e-6>=n.dodge.cancelFrom;if(!t.move)return e!=="light2"&&e!=="light3";let s=n[t.move.id],r=t.move.t*60+1e-6,a=n.cancelRules[s.role]||{},o;e==="dodge"?o="dodge":s.role==="string"&&e===s.next?o="next":n[e].role==="string"?o="light":o="skill";let c=a[o];return c?c==="always"?r>=s.nextFrom:c==="hit"?t.move.hit&&r>=s.cancel:c==="recovery"?r>=s.startup+s.active:c==="hitOrRecovery"?t.move.hit&&r>=s.cancel||r>=s.startup+s.active:c==="any":!1}var Wf=(i,e)=>i.data.moves[e].reach+(e==="tether"?i.mods.tetherReach:0);function oM(i,e){let t=i.hero,n=i.data.moves,s=i.data.rules,r=n[e],a=i.giant;t.move&&t.move.id!==e&&i.emit({t:"cancel",from:t.move.id,to:e}),t.dodge=null,t.move={id:e,t:0,hit:!1,done:!1},r.cd&&(t.cd[e]=(r.cd+i.mods.cd[e])*i.mods.cdMul),e==="giantfall"&&a&&(a.finisherUsed=!0);let o=Wf(i,e)+s.hero.aimAssist,c=hr(i).filter(h=>it(t,h)-h.radius<o).sort((h,u)=>it(t,h)-h.radius-(it(t,u)-u.radius)),l=e==="giantfall"&&a||c.includes(a)&&it(t,a)-a.radius<r.reach+1.2?a:c[0];l?t.face=Mt(t,l):t.moving&&(t.face=Math.atan2(t.mx,t.mz)),i.fight.moves[e]=(i.fight.moves[e]||0)+1,i.emit({t:"swing",move:e})}function Hf(i){let e=i.hero,t=i.data.moves.dodge;e.move&&i.emit({t:"cancel",from:e.move.id,to:"dodge"}),e.move=null;let n=e.moving?Math.atan2(e.mx,e.mz):e.face+Math.PI;e.dodge={t:0,a:n,p:0},e.dodgeCd=t.cd*i.mods.dodgeCdMul,e.iframe=t.iframes/60,i.fight.dodges++,i.emit({t:"dodge"})}function Xf(i,e){for(let t of e||[])sM.includes(t)&&i.buffer.push({p:t,age:0})}function qf(i,e){let t=i.data.rules.input.buffer;for(let n=i.buffer.length-1;n>=0;n--)i.buffer[n].age+=e,i.buffer[n].age>t&&(i.fight.dropped++,i.buffer.splice(n,1))}function cM(i){let e=i.buffer.findIndex(t=>t.p==="dodge");if(e>=0){zf(i,"dodge")&&(i.buffer.splice(e,1),Hf(i));return}for(let t=0;t<i.buffer.length;t++){let n=aM(i,i.buffer[t].p);if(zf(i,n)){i.buffer.splice(t,1),n==="dodge"?Hf(i):oM(i,n);return}}}function lM(i,e,t,n){let s=i.hero,r=it(s,n);if(r-n.radius>t)return!1;let a=e.arc/2+Math.asin(Math.min(1,n.radius/Math.max(r,.01)));return Math.abs(Gh(Mt(s,n)-s.face))<=a}function hM(i,e){let t=i.data.moves[e],n=Wf(i,e),s=i.hero,r=hr(i).filter(a=>lM(i,t,n,a));return e==="giantfall"&&(r=r.filter(a=>a.kind==="giant")),e==="tether"&&r.length>1&&(r.sort((a,o)=>it(s,a)-a.radius-(it(s,o)-o.radius)),r=[r[0]]),r.sort((a,o)=>(o.kind==="giant")-(a.kind==="giant"))}function Yf(i,e,t){let n=i.hero,s=i.data.rules,r=i.data.moves;for(let o of Vf)n.cd[o]=Math.max(0,n.cd[o]-e);n.dodgeCd-=e,n.iframe-=e,n.hurtT-=e,i.locks.tick(e),n.mx=t.mx||0,n.mz=t.mz||0;let a=Math.hypot(n.mx,n.mz);if(a>1&&(n.mx/=a,n.mz/=a),n.moving=Math.hypot(n.mx,n.mz)>.15,i.flow.state!=="fight"||n.hp<=0){n.move=null,n.dodge=null;return}if(cM(i),n.move){let o=n.move,c=r[o.id],l=o.t*60;o.t+=e;let h=o.t*60+1e-6;if(l<c.startup&&c.lunge){let u=c.lunge*(Math.min(h,c.startup)-l)/c.startup,d=n.x+Math.sin(n.face)*u,f=n.z+Math.cos(n.face)*u;hr(i).some(p=>it({x:d,z:f},p)<=p.radius+s.hero.radius+.15)||(n.x=d,n.z=f)}if(n.moving&&(n.x+=n.mx*s.hero.speed*s.hero.moveInMove*e,n.z+=n.mz*s.hero.speed*s.hero.moveInMove*e),!o.done&&h>=c.startup){let u=hM(i,o.id);if(u.length){o.hit=!0,o.done=!0;let d=Xh(i,o.id);for(let f of u)f.kind==="giant"?Of(i,o.id,f,d):f.hp>0&&Bf(i,o.id,f,d)}else h>=c.startup+c.active&&(o.done=!0,i.emit({t:"whiff",move:o.id}))}n.move===o&&h>=c.startup+c.active+c.recovery&&(n.move=null)}else if(n.dodge){let o=r.dodge,c=n.dodge;c.t+=e;let l=Math.min(1,c.t*60/o.frames),h=1-(1-l)*(1-l),u=h-c.p;c.p=h,n.x+=Math.sin(c.a)*o.dist*u,n.z+=Math.cos(c.a)*o.dist*u,l>=1&&(n.dodge=null)}else n.moving&&!i.locks.has("act")&&(n.x+=n.mx*s.hero.speed*e,n.z+=n.mz*s.hero.speed*e,n.face=Math.atan2(n.mx,n.mz));uM(i)}function uM(i){let e=i.hero,t=i.data.rules;for(let r of hr(i)){let a=it(e,r),o=r.radius+t.hero.radius;if(a<o){let c=a>1e-4?Mt(r,e):0;e.x=r.x+Math.sin(c)*o,e.z=r.z+Math.cos(c)*o}}let n=Math.hypot(e.x,e.z),s=t.arena.radius-t.hero.radius;n>s&&(e.x*=s/n,e.z*=s/n)}function Yh(i,e){let t=i.data.giants[e];return{kind:"giant",id:e,x:0,z:-2.5,introT:null,face:0,hp:t.hp,max:t.hp,balance:0,balMax:t.balance,radius:t.radius,state:"intro",t:0,atk:null,queue:[],phase:0,tg:null,windAge:0,think:0,dashLeft:0,struck:!1,status:{cracked:{n:0,t:0},bound:{n:0,t:0}},sinceHit:99,lastHitDir:0,toppleDir:0,toppleQ:null,topples:0}}var ur=(i,e)=>i.data.giants[e.id],Oo=(i,e)=>ur(i,e).phases[e.phase];function dM(i,e){let t=ur(i,e),n=it(e,i.hero),s=Oo(i,e).attacks.filter(r=>{let a=t.attacks[r];return a.chain?n<=Math.min(...a.chain.map(o=>t.attacks[o].range[1])):n>=a.range[0]&&n<=a.range[1]});return s.length?i.rng.weighted(s,r=>t.attacks[r].weight):null}function $f(i,e,t){let n=ur(i,e),s=Oo(i,e),r=n.attacks[t];r.chain&&(e.queue=r.chain.slice(1),t=r.chain[0],r=n.attacks[t]),e.state="wind",e.atk=t,e.windAge=0,e.t=r.wind*s.windMul,e.struck=!1;let a=i.hero;e.tg={kind:r.shape,x:r.at==="hero"?a.x:e.x,z:r.at==="hero"?a.z:e.z,r:r.r||0,inner:r.inner||0,w:r.w||0,len:r.len||0,ang:e.face,k:0,dur:e.t},i.emit({t:"wind",atk:t,dur:e.t})}function fM(i,e){let t=ur(i,e),n=t.attacks[e.atk],s=i.hero,r=e.tg,a={name:e.atk,dmg:n.dmg};if(i.emit({t:"strike",atk:e.atk,x:r.x,z:r.z}),n.shape==="circle")it(s,r)<=r.r+.15&&ts(i,a,e);else if(n.shape==="ring"){let o=it(s,e);o<=r.r&&o>=r.inner&&ts(i,a,e)}if(e.state==="wind"){if(n.shape==="lane"){e.state="active",e.dashLeft=n.dash;return}Kf(i,e)}}function Kf(i,e){let t=ur(i,e).attacks[e.atk];e.state="open",e.t=t.open*Oo(i,e).openMul,e.tg=null}function Zf(i,e,t){let n=i.data.rules,s=ur(i,e),r=i.hero;ko(i,e,t);let a=t*(e.status.bound.n>0?n.status.bound.giantTimeMul:1);if(e.sinceHit+=t,e.state!=="toppled"&&e.state!=="fallen"&&e.sinceHit>n.balance.idle&&e.balance>0){let l=n.balance.drainFloor+(1-n.balance.drainFloor)*(e.hp/e.max);e.balance=Math.max(0,e.balance-n.balance.drain*l*t)}let o=Mt(e,r),c=it(e,r);switch(e.state){case"intro":e.introT!=null&&(e.introT-=t,e.introT<=0&&(e.state="approach",e.think=.6,i.emit({t:"giantReady",id:e.id})));break;case"approach":{if(e.face=cr(e.face,o,s.turn*a),c>s.reachWant+e.radius&&(e.x+=Math.sin(e.face)*s.speed*a,e.z+=Math.cos(e.face)*s.speed*a),e.think-=a,e.think<=0){let l=dM(i,e);l&&$f(i,e,l)}break}case"wind":{let l=s.attacks[e.atk];e.t-=a,e.windAge+=a;let h=l.track?l.track:.7;e.windAge<e.tg.dur*h&&(e.face=cr(e.face,o,s.turn*a),l.at==="hero"?(e.tg.x=r.x,e.tg.z=r.z):(e.tg.x=e.x,e.tg.z=e.z,e.tg.ang=e.face)),e.tg.k=1-Math.max(0,e.t)/e.tg.dur,e.t<=0&&fM(i,e);break}case"active":{let l=s.attacks[e.atk],h=l.len/l.dash;e.x+=Math.sin(e.tg.ang)*h*a,e.z+=Math.cos(e.tg.ang)*h*a,e.dashLeft-=a;let u=Math.hypot(e.x,e.z),d=n.arena.radius-e.radius*.6;u>d&&(e.x*=d/u,e.z*=d/u,e.dashLeft=0,i.emit({t:"wallHit",x:e.x,z:e.z})),!e.struck&&it(e,r)<=e.radius+l.w/2&&(e.struck=!0,ts(i,{name:e.atk,dmg:l.dmg},e)),e.state==="active"&&e.dashLeft<=0&&Kf(i,e);break}case"open":e.t-=a,e.t<=0&&(e.queue.length?$f(i,e,e.queue.shift()):(e.state="approach",e.atk=null,e.think=i.rng.range(s.think[0],s.think[1])));break;case"roar":e.t-=a,e.t<=0&&(e.state="approach",e.think=i.rng.range(s.think[0],s.think[1]));break;case"toppled":e.t-=t,e.t<=0&&(e.state="getup",e.t=n.topple.getup,i.emit({t:"getup"}));break;case"getup":e.t-=a,e.t<=0&&(e.state="approach",e.think=i.rng.range(s.think[0],s.think[1])*.5);break;default:break}}function Jf(i,e,t){let n=i.data.rules,s=i.hero;e.state="toppled",e.t=n.topple.time+i.mods.toppleTime,e.tg=null,e.queue=[],e.atk=null,i.mods.toppleTime>0&&i.powerFired("afterquake"),e.balance=0,e.balMax*=n.topple.grow,e.toppleQ=t,e.topples++,e.finisherUsed=!1;let r=e.lastHitDir;Math.abs(Math.sin(r))<.5&&(r+=(s.x>=e.x?-1:1)*Math.PI/3),e.toppleDir=r,i.emit({t:"topple",dir:r,x:e.x,z:e.z,n:e.topples,hits:t.hits});let a=i.giantDef(e).height*.9,o=Math.sin(r),c=Math.cos(r);for(let h of i.foes){if(h.hp<=0||h.state==="dead")continue;let u=h.x-e.x,d=h.z-e.z,f=u*o+d*c,p=Math.abs(u*c-d*o);f>-.5&&f<a&&p<1.3+h.radius&&(h.hp=0,i.fight.crushes++,i.emit({t:"crush",id:h.id,x:h.x,z:h.z}),i.foeDown(h,"crush"))}let l=i.data.rules.topple.quake;for(let h of i.foes)h.hp>0&&h.state!=="dead"&&Math.hypot(h.x-e.x,h.z-e.z)<e.radius+l.r&&(i.fight.crushes++,Fo(i,h,l.dmg,"quake",Math.atan2(h.x-e.x,h.z-e.z),2.5));if(i.mods.toppleHeal){let h=s.hp;s.hp=Math.min(s.max,s.hp+i.mods.toppleHeal),s.hp>h&&(i.emit({t:"heal",n:s.hp-h}),i.powerFired("secondWind"))}}function jf(i,e){e.phase++;let t=Oo(i,e);i.emit({t:"phase",n:e.phase}),!(e.state==="toppled"||e.state==="getup")&&(e.state="roar",e.t=t.roar||1,e.tg=null,e.queue=[],e.atk=null)}function ep(i,e,t,n){let s=i.data.foes[e];return{kind:"foe",id:++i.nextId,type:e,x:t,z:n,face:Mt({x:t,z:n},i.hero),hp:s.hp,max:s.hp,radius:s.radius,state:"spawn",t:.7,tg:null,status:{cracked:{n:0,t:0},bound:{n:0,t:0}},flash:0,struck:!1,lungeLeft:0,cool:0}}function Qf(i,e){let t=i.data.foes[e.type],n=i.hero;e.state="wind",e.t=t.wind,e.struck=!1,e.face=Mt(e,n),e.tg=e.type==="slinger"?{kind:"lane",x:e.x,z:e.z,w:.7,len:9,ang:e.face,k:0,dur:t.wind,small:!0}:{kind:"circle",x:e.x+Math.sin(e.face)*t.lunge,z:e.z+Math.cos(e.face)*t.lunge,r:.95,k:0,dur:t.wind,small:!0},i.emit({t:"foeWind",id:e.id,type:e.type})}function tp(i,e){let t=i.hero,n=i.data.rules;for(let r=i.foes.length-1;r>=0;r--){let a=i.foes[r],o=i.data.foes[a.type];if(a.flash=Math.max(0,a.flash-e*8),a.state==="dead"){a.t-=e,a.t<=0&&i.foes.splice(r,1);continue}ko(i,a,e);let c=it(a,t),l=Mt(a,t);switch(a.state){case"spawn":a.t-=e,a.t<=0&&(a.state="move",a.cool=i.rng.range(.2,.8));break;case"move":{if(a.face=cr(a.face,l,6*e),a.cool-=e,a.type==="slinger"){let[h,u]=o.keep;c<h?(a.x-=Math.sin(l)*o.speed*e,a.z-=Math.cos(l)*o.speed*e):c>u&&(a.x+=Math.sin(l)*o.speed*e,a.z+=Math.cos(l)*o.speed*e),c<=u+1&&a.cool<=0&&Qf(i,a)}else c>o.reach+a.radius+n.hero.radius?(a.x+=Math.sin(a.face)*o.speed*e,a.z+=Math.cos(a.face)*o.speed*e):a.cool<=0&&Qf(i,a);break}case"wind":if(a.t-=e,a.t>a.tg.dur*.45&&(a.face=cr(a.face,l,5*e),a.type==="slinger"?(a.tg.x=a.x,a.tg.z=a.z,a.tg.ang=a.face):(a.tg.x=a.x+Math.sin(a.face)*o.lunge,a.tg.z=a.z+Math.cos(a.face)*o.lunge)),a.tg.k=1-Math.max(0,a.t)/a.tg.dur,a.t<=0)if(a.type==="slinger"){let h=o.shot;i.shots.push({x:a.x+Math.sin(a.tg.ang)*.6,z:a.z+Math.cos(a.tg.ang)*.6,vx:Math.sin(a.tg.ang)*h.speed,vz:Math.cos(a.tg.ang)*h.speed,r:h.radius,life:h.life,dmg:o.dmg,kind:"shot"}),i.emit({t:"throw",id:a.id}),a.state="rest",a.t=i.rng.range(o.rest[0],o.rest[1]),a.tg=null}else a.state="act",a.lungeLeft=.16,a.tg=null,i.emit({t:"lunge",id:a.id});break;case"act":{let h=o.lunge/.16;a.x+=Math.sin(a.face)*h*e,a.z+=Math.cos(a.face)*h*e,a.lungeLeft-=e,!a.struck&&it(a,t)<=a.radius+n.hero.radius+.35&&(a.struck=!0,ts(i,{name:a.type,dmg:o.dmg},a)),a.lungeLeft<=0&&a.state==="act"&&(a.state="rest",a.t=i.rng.range(o.rest[0],o.rest[1]));break}case"rest":case"stagger":case"stun":a.t-=e,a.t<=0&&(a.cool=a.state==="rest"?0:i.rng.range(.1,.4),a.state="move");break;default:break}}let s=i.foes.filter(r=>r.state!=="dead");for(let r=0;r<s.length;r++){let a=s[r];for(let h=r+1;h<s.length;h++){let u=s[h],d=it(a,u),f=a.radius+u.radius;if(d<f&&d>1e-4){let p=(f-d)/2,x=Mt(a,u);a.x-=Math.sin(x)*p,a.z-=Math.cos(x)*p,u.x+=Math.sin(x)*p,u.z+=Math.cos(x)*p}}let o=i.giant;if(o&&o.state!=="fallen"){let h=it(a,o),u=a.radius+o.radius;if(h<u&&h>1e-4){let d=Mt(o,a);a.x=o.x+Math.sin(d)*u,a.z=o.z+Math.cos(d)*u}}let c=Math.hypot(a.x,a.z),l=n.arena.radius-a.radius;c>l&&(a.x*=l/c,a.z*=l/c)}}function np(i,e){let t=i.hero,n=i.data.rules;for(let s=i.shots.length-1;s>=0;s--){let r=i.shots[s];if(r.x+=r.vx*e,r.z+=r.vz*e,r.life-=e,it(r,t)<=r.r+n.hero.radius){ts(i,{name:"stone",dmg:r.dmg},r),i.shots.splice(s,1);continue}(r.life<=0||Math.hypot(r.x,r.z)>n.arena.radius+1)&&i.shots.splice(s,1)}}var pM=new Set(["crackedMax","tetherReach","toppleTime","toppleHeal","giantfallQuake","perfectBonus","sunderStacks"]),mM=new Set(["breakGainMul","lightBalanceMul","cdMul","dmgOut","dmgIn","dodgeCdMul","lightDmgMul"]);function ip(){return{tetherCracks:!1,crackedMax:0,breakKeepsCrack:!1,breakGainMul:1,perfectCracks:!1,tetherReach:0,tetherPullsSelf:!1,lightBalanceMul:1,cdMul:1,cd:{sunder:0,tether:0,breaker:0},sunderStacks:1,giantfallQuake:0,toppleTime:0,toppleHeal:0,breakResetsTether:!1,dmgOut:1,dmgIn:1,dodgeCdMul:1,perfectBonus:0,lightDmgMul:1}}function sp(i,e){for(let[t,n]of Object.entries(e.set))if(t.startsWith("cd."))i.cd[t.slice(3)]+=n;else if(t==="sunderStacks")i.sunderStacks=Math.max(i.sunderStacks,n);else if(pM.has(t))i[t]+=n;else if(mM.has(t))i[t]*=n;else if(typeof n=="boolean")i[t]=n;else throw new Error(`power card ${e.id}: unknown field ${t}`)}var Pi=1/60,gM={intro:["fight"],fight:["pick","won","down"],pick:["fight"],won:["intro"],down:["intro"]};function rp(i,e={}){var d;let t={data:i,seed:(d=e.seed)!=null?d:1,strict:!!e.strict,mode:e.mode||"lab",giantId:e.giant||"hollen",events:[],hooks:{beforeHit:[],afterHit:[],beforeHurt:[]},flow:{state:"intro",t:0,seen:{},errors:[]},log:[],downsInRow:0,assistPct:0,nextId:0,realTime:0,time:0,stopT:0,lastStopAt:-99,lastStopLen:0,slowT:0,slowScale:1},n=i.run;t.emit=f=>{f.at=Math.round(t.time*1e3)/1e3,t.events.push(f)},t.drain=()=>{let f=t.events;return t.events=[],f},t.powerFired=(f,p={})=>{t.run&&t.run.picks.includes(f)&&t.emit({t:"power",id:f,...p})},t.giantDef=f=>i.giants[f.id],t.setFlow=f=>{let p=t.flow.state,x=`${p}>${f}`;if(t.flow.seen[x]=(t.flow.seen[x]||0)+1,!(gM[p]||[]).includes(f)&&(t.flow.errors.push(x),t.strict))throw new Error(`flow ${x} is not allowed`);t.flow.state=f,t.flow.t=0,t.emit({t:"flow",from:p,to:f})},t.stop=f=>{let p=f/60,x=i.rules.feel.stopGap;p<=0||t.slowT>0||t.realTime-t.lastStopAt<x&&p<=t.lastStopLen||(t.stopT=Math.max(t.stopT,p),t.lastStopAt=t.realTime,t.lastStopLen=p)},t.slow=(f,p)=>{t.slowScale=t.slowT>0?Math.min(t.slowScale,p):p,t.slowT=Math.max(t.slowT,f)},t.topple=f=>{Jf(t,f,{hits:t.combo.hits,variety:Uo(t)}),t.fight.topples++,t.stopT=Math.max(t.stopT,i.rules.feel.toppleStop/60),t.lastStopAt=t.realTime,t.slow(i.rules.feel.toppleSlow[0],i.rules.feel.toppleSlow[1])},t.phaseUp=f=>jf(t,f),t.giantFallen=f=>{if(f.state="fallen",f.tg=null,f.balance=0,lr(t,"win"),t.slow(i.rules.feel.winSlow[0],i.rules.feel.winSlow[1]),t.fight.giantsDown++,t.emit({t:"fallen",id:f.id,x:f.x,z:f.z,last:t.mode==="lab"||t.run.stage===n.stages.length-1}),t.mode==="lab"){s("won");return}for(let p of t.foes)p.hp>0&&(p.hp=0,t.foeDown(p,"crumble"));t.run.clearT=0},t.foeDown=(f,p)=>{f.state!=="dead"&&(f.hp=0,f.state="dead",f.t=.9,f.tg=null,f.how=p,t.fight.foesDown++,t.emit({t:"foeDown",id:f.id,type:f.type,how:p,x:f.x,z:f.z}))},t.heroDown=()=>{s("down")};function s(f){let p=t.fight,x=t.giant,g=t.hero;p.result=f,p.time=Math.round(t.time*10)/10,p.heroHp=g.hp,p.realSec=t.run?Math.round((t.realTime-t.run.t0)*10)/10:p.time,p.giantHpPct=x?Math.round(100*x.hp/x.max):null,p.giant=x?x.id:null,p.assistPct=t.assistPct,p.bestCombo=t.combo.best,t.mode==="run"&&(p.stage=t.run.stage,p.stages=n.stages.length,p.stageName=r(t.run.stage),p.powers=t.run.picks.slice(),p.stageTimes=t.run.times.slice()),t.log.push(p),t.downsInRow=f==="down"?t.downsInRow+1:0,t.setFlow(f)}let r=f=>{let p=n&&n.stages[f];return p?p.type==="giant"?i.giants[p.giant].name:p.name||p.type:""};function a(f){let p=t.hero,x=Math.PI-Math.sign(p.x||1)*Math.min(.7,Math.abs(p.x)*.15),g=0,m=f.reduce((_,[,v])=>_+v,0);for(let[_,v]of f)for(let y=0;y<v;y++){let C=x+(g-(m-1)/2)*.55+t.rng.range(-.15,.15);g++,t.foes.push(ep(t,_,Math.sin(C)*n.spawnRing,Math.cos(C)*n.spawnRing))}t.emit({t:"spawn",n:m})}function o(f){let p=n.stages[f];if(t.run.stage=f,t.run.stageT=0,t.run.laterDone=!1,t.run.addsDone=!1,t.run.clearT=-1,p.type==="giant"){t.giant=Yh(t,p.giant),t.giant.introT=n.intro;let x=t.hero;Math.hypot(x.x-t.giant.x,x.z-t.giant.z)<4&&(x.x=0,x.z=4.5)}else t.giant=null;p.foes&&p.foes.length&&a(p.foes),t.emit({t:"stage",i:f,type:p.type,name:r(f),mood:p.mood||1,giant:p.giant||null})}function c(){let f=n.stages[t.run.stage],p=t.foes.some(x=>x.state!=="dead");return f.type==="wave"?!p&&(!f.later||t.run.laterDone):t.giant&&t.giant.state==="fallen"&&t.run.clearT>=2.6}function l(){t.run.times.push(Math.round((t.realTime-t.run.t0)*10)/10);let f=t.run.stage+1;if(f>=n.stages.length){s("won");return}if(n.stages[f].type==="pick"){t.run.stage=f,h(),t.setFlow("pick");return}o(f)}function h(){let f=i.powers.cards.filter(x=>!t.run.picks.includes(x.id)),p=[];for(;p.length<3&&f.length;)p.push(f.splice(Math.floor(t.rng()*f.length),1)[0]);t.run.offer=p,t.emit({t:"offer",cards:p.map(x=>x.id)})}t.choose=f=>{if(t.flow.state!=="pick"||!t.run.offer||!t.run.offer[f])return!1;let p=t.run.offer[f];sp(t.mods,p),t.run.picks.push(p.id),t.run.offer=null,t.run.times.push(Math.round((t.realTime-t.run.t0)*10)/10);let x=t.hero,g=x.hp;return x.hp=Math.min(x.max,x.hp+n.pickHeal),t.emit({t:"picked",id:p.id,heal:x.hp-g}),t.setFlow("fight"),o(t.run.stage+1),!0};function u(f){let p=n.stages[t.run.stage];t.run.stageT+=f,p.type==="wave"&&p.later&&!t.run.laterDone&&t.foes.filter(x=>x.state!=="dead").length<=1&&(t.run.laterDone=!0,a(p.later)),p.type==="giant"&&p.adds&&!t.run.addsDone&&t.giant&&t.giant.hp/t.giant.max<=p.adds.at&&(t.run.addsDone=!0,a(p.adds.foes)),t.run.clearT>=0&&(t.run.clearT+=f),c()&&l()}return t.reset=()=>{t.rng=No(t.seed+t.log.length*7919),t.locks=new Do,t.buffer=[],t.mods=ip(),t.hero=Gf(i.rules),t.foes=[],t.shots=[],t.nextId=0,t.giant=t.mode==="lab"?Yh(t,t.giantId):null,t.run=t.mode==="run"?{stage:-1,stageT:0,picks:[],offer:null,clearT:-1,times:[],t0:t.realTime}:null,t.combo=Wh(),t.time=0,t.stopT=0,t.slowT=0,t.slowScale=1,t.fight={n:t.log.length+1,result:null,hitsTaken:0,dmgTaken:0,dmgDealt:0,topples:0,perfects:0,dodges:0,dropped:0,combos:[],moves:{},foesDown:0,crushes:0,giantsDown:0},t.flow.state!=="intro"&&t.setFlow("intro"),t.flow.t=0},t.setAssist=f=>{t.assistPct=Math.max(0,Math.min(i.rules.assist.capPct,f))},t.assistOffer=()=>{let f=i.rules.assist;return t.downsInRow<f.offerAfter?0:Math.min(f.capPct,f.startPct+f.perDownPct*(t.downsInRow-f.offerAfter))},t.step=(f={})=>{if(t.realTime+=Pi,t.flow.state==="pick")return;if(Xf(t,f.press),t.stopT>1e-6){t.stopT-=Pi;return}let p=1;t.slowT>0&&(p=t.slowScale,t.slowT-=Pi,t.slowT<=0&&(t.slowScale=1));let x=Pi*p;t.time+=x,t.flow.t+=x,qf(t,Pi),t.flow.state==="intro"&&t.flow.t>=(t.mode==="run"?n.intro:i.rules.flow.intro)&&(t.mode==="lab"?(t.giant.state="approach",t.giant.think=.6,t.setFlow("fight")):(t.setFlow("fight"),o(0))),Yf(t,x,f),(t.flow.state==="fight"||t.flow.state==="intro")&&t.giant&&Zf(t,t.giant,x),t.flow.state==="fight"&&(tp(t,x),np(t,x),Nf(t,x),t.mode==="run"&&u(x))},t.hash=()=>{let f=g=>Math.round(g*1e3),p=t.hero,x=t.giant;return Df(JSON.stringify([t.flow.state,f(t.time),f(p.x),f(p.z),f(p.face),p.hp,p.move&&p.move.id,x?[f(x.x),f(x.z),f(x.face),x.hp,f(x.balance),x.state,x.atk,x.topples]:null,t.foes.map(g=>[g.id,f(g.x),f(g.z),g.hp,g.state]),t.combo.hits,t.rng.state(),t.log.length,t.run&&t.run.stage]))},t.report=()=>{let f=t.log,p=f.flatMap(_=>_.combos).filter(_=>_.seq),x={};for(let _ of p)x[_.seq]=(x[_.seq]||0)+1;let g=Object.entries(x).sort((_,v)=>v[1]-_[1])[0],m=f.filter(_=>_.result==="won");return{version:2,mode:t.mode,runs:f.length,wins:m.length,firstWinAt:m.length?f.indexOf(m[0])+1:null,zeroHitWins:m.filter(_=>_.hitsTaken===0).length,topSequence:g?{seq:g[0],share:Math.round(100*g[1]/p.length)}:null,skillCombos:p.length,perRun:f.map(_=>{var v;return{n:_.n,result:_.result,time:_.time,stage:(v=_.stageName)!=null?v:null,heroHp:_.heroHp,giantHpPct:_.giantHpPct,hitsTaken:_.hitsTaken,topples:_.topples,crushes:_.crushes,perfects:_.perfects,bestCombo:_.bestCombo,powers:_.powers||[],stageTimes:_.stageTimes||[],assistPct:_.assistPct}})}},t.reset(),t}var xM={novice:{reaction:.4,miss:.3,lead:[.04,.45],plan:"mash",gap:.22,careful:0},mid:{reaction:.28,miss:.15,lead:[.03,.26],plan:"mixed",gap:.15,careful:.5},skilled:{reaction:.18,miss:.04,lead:[.02,.13],plan:"combo",gap:.1,careful:1}};function _M(i,e,t,n){if(t.kind==="circle")return it(i,t)<=t.r+n;if(t.kind==="ring")return it(i,e)<=t.r+n;let s=i.x-t.x,r=i.z-t.z,a=s*Math.sin(t.ang)+r*Math.cos(t.ang),o=Math.abs(s*Math.cos(t.ang)-r*Math.sin(t.ang));return a>-1&&a<t.len+1&&o<t.w/2+n}function ap(i,e,t){if(t.kind==="ring")return Mt(e,i);if(t.kind==="circle")return it(i,t)>.2?Mt(t,i):Mt(e,i);let n=(i.x-t.x)*Math.cos(t.ang)-(i.z-t.z)*Math.sin(t.ang);return t.ang+(n>=0?-Math.PI/2:Math.PI/2)}function op(i,e=1){let t=xM[i],n=No(e),s=new Map,r=0,a=!1,o=0;return c=>{let l=c.giant,h=c.hero,u=[],d=0,f=0;if(c.time<o&&(s=new Map,r=0,a=!1),o=c.time,c.flow.state==="pick")return c.choose(Math.floor(n()*c.run.offer.length)),{mx:d,mz:f,press:u};if(c.flow.state!=="fight")return{mx:d,mz:f,press:u};let p=[];l&&l.state==="wind"&&p.push({key:`g${l.atk}@${(c.time-l.windAge).toFixed(2)}`,age:l.windAge,left:l.t,src:l,tg:l.tg});for(let T of c.foes)T.state==="wind"&&T.tg&&p.push({key:`f${T.id}@${(c.time-(T.tg.dur-T.t)).toFixed(2)}`,age:T.tg.dur-T.t,left:T.t+(T.type==="slinger"?it(T,h)/c.data.foes.slinger.shot.speed:.08),src:T,tg:T.tg});let x=null;for(let T of p){if(T.age<t.reaction)continue;s.has(T.key)||s.set(T.key,{miss:n()<t.miss,lead:n.range(t.lead[0],t.lead[1]),done:!1});let A=s.get(T.key);A.miss||A.done||!_M(h,T.src,T.tg,.6)||(!x||T.left<x.left)&&(x={...T,p:A})}if(s.size>60&&(s=new Map([...s].slice(-20))),x&&x.left<=x.p.lead){let T=ap(h,x.src,x.tg);return x.p.done=!0,{mx:Math.sin(T),mz:Math.cos(T),press:["dodge"]}}if(l&&l.state==="active"&&!a&&it(l,h)<l.radius+2.2&&(a=!0,n()>=t.miss)){let T=ap(h,l,l.tg||{kind:"ring"});return{mx:Math.sin(T),mz:Math.cos(T),press:["dodge"]}}if((!l||l.state!=="active")&&(a=!1),x&&x.left<.5&&n()<t.careful)return{mx:d,mz:f,press:u};let g=hr(c);if(!g.length)return{mx:d,mz:f,press:u};let m=g.includes(l)?l:g.sort((T,A)=>it(h,T)-it(h,A))[0],_=it(h,m);if(_-m.radius>1.5){let T=Mt(h,m);d=Math.sin(T),f=Math.cos(T)}if(c.time<r||_-m.radius>2.1)return{mx:d,mz:f,press:u};r=c.time+t.gap*n.range(.8,1.25);let v=T=>h.cd[T]<=0,y=l&&l.state==="toppled",C="light";if(t.plan==="mash"){if(y&&n()<.4)C="breaker";else if(n()<.22){let T=["sunder","tether","breaker"].filter(v);T.length&&(C=T[Math.floor(n()*T.length)])}}else if(t.plan==="mixed"){if(y&&n()<.75)C="breaker";else if(n()<.5){let T=["sunder","tether","breaker"].filter(v);T.length&&(C=T[Math.floor(n()*T.length)])}}else{let T=m.status.cracked.n,A=m.status.bound.n;y?C="breaker":T>=1&&A===0&&v("tether")?C="tether":(T>=1||A)&&v("breaker")?C="breaker":v("sunder")&&T<2&&(C="sunder")}return u.push(C),{mx:d,mz:f,press:u}}}var ea={value:0};function hp(i){ea.value=i}var $h=`
float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vn(p); p *= 2.03; a *= 0.5; } return s; }
`;function cp(i,e){let t=[];for(let n=0;n<=14;n++){let s=n/14;t.push(new Te(e*Math.sin(Math.PI*Math.min(1,s*1.25+.05))*(1-s)**.55+.001,s*i))}return new go(t,18)}function lp(i,e,t){return new Kt({uniforms:{uT:ea,uPh:{value:e},uK:t,uInner:{value:i?1:0}},vertexShader:`
      uniform float uT, uPh; varying vec2 vUv; varying float vRim;
      void main(){
        vUv = uv; vec3 p = position; float y = uv.y;
        float sw = sin(y * 5.0 - uT * 7.0 + uPh) * 0.09 + sin(y * 9.0 - uT * 13.0 + uPh * 2.0) * 0.04;   // sways more toward the tip
        p.x += sw * y * 1.4; p.z += cos(y * 4.0 - uT * 6.0 + uPh) * 0.06 * y;
        p.y *= 1.0 + sin(uT * 11.0 + uPh) * 0.06 + sin(uT * 17.3 + uPh * 1.7) * 0.04;                       // flicker
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vec3 n = normalize(normalMatrix * normal); vRim = abs(dot(n, normalize(-mv.xyz)));
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:$h+`
      uniform float uT, uPh, uK, uInner; varying vec2 vUv; varying float vRim;
      void main(){
        float n = fbm(vec2(vUv.x * 5.0 + uPh, vUv.y * 3.2 - uT * 2.6));
        float tongues = 0.5 + 0.5 * sin(vUv.x * 6.2832 * 3.0 + uPh + sin(uT * 3.0 + vUv.y * 4.0));   // three tongues around the flame
        float body = clamp((1.0 - vUv.y) * 1.75 - n * (0.55 + vUv.y * 0.9) - (1.0 - tongues) * vUv.y * 0.75, 0.0, 1.0);   // noise eats the tips: licking flames
        float a = body * pow(vRim, 1.4) * uK;   // soft round edges: a glowing volume inside the flame
        vec3 deep = vec3(0.95, 0.25, 0.05), mid = vec3(1.0, 0.58, 0.12), hot = vec3(1.0, 0.93, 0.6);
        vec3 c = mix(deep, mid, smoothstep(0.1, 0.55, body));
        c = mix(c, hot, smoothstep(0.55, 0.95, body) * (0.6 + 0.4 * uInner));
        if (uInner > 0.5) { gl_FragColor = vec4(mix(hot, vec3(1.0), 0.3) * a * 0.55, a); return; }   // hot core: added on top
        gl_FragColor = vec4(c, min(1.0, a * 1.15));                                                     // body: real orange, readable on a bright sky
      }`,transparent:!0,depthWrite:!1,blending:i?gn:In,side:Et})}function yM(i,e,t,n){let s=new Ln(e,i);s.translate(0,i/2,0);let r=new Kt({uniforms:{uT:ea,uPh:{value:t},uK:n},vertexShader:`
      varying vec2 vUv; void main(){ vUv = uv;
        vec4 c = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);                    // spherical billboard around the base
        vec3 sx = vec3(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz), 1.0);
        c.xy += position.xy * sx.xy; gl_Position = projectionMatrix * c; }`,fragmentShader:$h+`
      uniform float uT, uPh, uK; varying vec2 vUv;
      void main(){
        vec2 q = vUv; q.x += (fbm(vec2(q.y * 2.0 - uT * 1.3, uPh)) - 0.5) * 0.35 * q.y;   // the whole flame wavers, more at the top
        float n = fbm(vec2(q.x * 5.5 + uPh, q.y * 4.2 - uT * 3.6));
        float x = (q.x - 0.5) * 2.0, y = q.y;
        float wd = mix(0.92, 0.08, pow(y, 1.25));                                   // wide at the base, a point at the top
        float sh = 1.0 - smoothstep(wd * 0.45, wd, abs(x));                       // soft sides, always inside the sheet
        float vt = smoothstep(0.0, 0.1, y) * (1.0 - smoothstep(0.45, 1.0, y));
        float f = clamp(sh * vt * 1.3 - n * (0.22 + y * 1.7) + 0.08, 0.0, 1.0);          // tongues burn away as they rise
        vec3 c = mix(vec3(0.9, 0.2, 0.04), vec3(1.0, 0.55, 0.1), smoothstep(0.05, 0.4, f));
        c = mix(c, vec3(1.0, 0.92, 0.62), smoothstep(0.5, 0.9, f) * (1.0 - smoothstep(0.15, 0.55, y)));   // yellow-white only low in the middle
        float a = smoothstep(0.0, 0.32, f) * uK;
        gl_FragColor = vec4(c, a);
      }`,transparent:!0,depthWrite:!1,side:Et}),a=new Ae(s,r);return a.frustumCulled=!1,a.renderOrder=5,a}function vM(i,e,t,n,s){let r=new bt,a=new Float32Array(i);for(let l=0;l<i;l++)a[l]=(l+.37)/i;r.setAttribute("position",new wt(new Float32Array(i*3),3)),r.setAttribute("aSeed",new wt(a,1));let o=new Kt({uniforms:{uT:ea,uPh:{value:n},uH:{value:e},uR:{value:t},uK:s,uPx:{value:1}},vertexShader:`
      attribute float aSeed; uniform float uT, uPh, uH, uR, uPx; varying float vL;
      void main(){
        float s = aSeed * 17.31 + uPh, life = fract(uT * (0.45 + fract(s) * 0.4) + aSeed);
        vec3 p = vec3(sin(s * 6.1 + life * 3.0) * uR * (0.4 + life), life * uH * 2.2, cos(s * 4.7 + life * 2.6) * uR * (0.4 + life));
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vL = life;
        gl_PointSize = uPx * (1.0 - life) * 0.09 * 600.0 / -mv.z; gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uK; varying float vL;
      void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)) * (1.0 - vL) * uK; gl_FragColor = vec4(vec3(1.0, 0.62, 0.2) * a, a); }`,transparent:!0,depthWrite:!1,blending:gn}),c=new js(r,o);return c.frustumCulled=!1,c.userData.px=o.uniforms.uPx,c}function up(i=1,e=.3,{sparks:t=10,ph:n=Math.random()*10}={}){let s=new nt,r={value:1},a=yM(i*1.1,e*2.6,n,r),o=new Ae(cp(i*.8,e),lp(!1,n,r));o.renderOrder=4;let c=new Ae(cp(i*.5,e*.55),lp(!0,n+3.1,r));return c.renderOrder=6,s.add(o,a,c),t&&s.add(vM(t,i,e,n,r)),s.userData.k=r,s}function Kh(i,e){let t={value:0},n=new Kt({uniforms:{uT:ea,uOpen:t},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:$h+`
      uniform float uT, uOpen; varying vec2 vUv;
      void main(){
        vec2 p = vUv; float x = p.x * 2.0 - 1.0;
        float top = 0.66 + 0.34 * sqrt(max(0.0, 1.0 - x * x));                  // round arch top
        float inArch = step(p.y, top) * smoothstep(1.0, 0.96, abs(x));
        if (inArch < 0.5) discard;
        vec2 c = vec2(x, (p.y - 0.42) * 1.6); float r = length(c), a = atan(c.y, c.x);
        float sw = fbm(vec2(a * 1.6 + r * 2.5 - uT * (0.25 + uOpen * 1.6), r * 3.0 - uT * (0.2 + uOpen * 1.2)));
        float rays = pow(0.5 + 0.5 * sin(a * 9.0 + uT * 2.0 + sw * 4.0), 3.0) * uOpen;
        vec3 closed = mix(vec3(0.16, 0.2, 0.32), vec3(0.42, 0.52, 0.72), sw) + vec3(0.25, 0.32, 0.5) * smoothstep(0.62, 0.9, sw);
        vec3 opened = mix(vec3(1.0, 0.62, 0.2), vec3(1.0, 0.95, 0.7), sw) + vec3(1.0, 0.9, 0.6) * (rays * 0.5 + smoothstep(0.55, 0.0, r) * 0.6);
        vec3 col = mix(closed, opened, uOpen);
        float edge = smoothstep(0.0, 0.08, top - p.y) * smoothstep(1.0, 0.92, abs(x));
        gl_FragColor = vec4(col, (0.85 + 0.15 * uOpen) * mix(0.75, 1.0, edge));
      }`,transparent:!0,depthWrite:!1,side:Et}),s=new Ae(new Ln(i,e),n);return s.userData.setOpen=(r,a=.016)=>{t.value+=((r?1:0)-t.value)*Math.min(1,a*3)},s}function dp(i,e,t){let n=new nt,s=e*9301+49297,r=()=>(s=(s*9301+49297)%233280,s/233280),a=new Qs(1,2),o=7+Math.floor(r()*4);for(let l=0;l<o;l++){let h=l/(o-1)-.5,u=1-Math.abs(h)*1.1,d=new Ae(a,t),f=i*(.45+u*.55)*(.8+r()*.4);d.position.set(h*i*3+(r()-.5)*i*.4,f*.25+r()*i*.25*u,(r()-.5)*i*.9),d.scale.set(f,f*.82,f*.9),n.add(d)}let c=new Ae(a,t);return c.scale.set(i*1.9,i*.38,i*.9),c.position.y=-i*.05,n.add(c),n.userData.craft="cloud",n}function fp(i){let e=new Map,t=new Map,n=i.clone();return pp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function pp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)pp(i.children[n],e.children[n],t)}var gt={sky:["#8fc6f7","#ffd0b0","#ffb38a"],outline:"#3a2b25",floor:"#eadfc8",floor2:"#d9c9a6",trim:"#b88f5a",tower:"#cdb994",pillar:"#f1e8d6",golem:"#c9b38c",golem2:"#a48a63",moss:"#7fae5a",core:"#5fd8ff",eye:"#ffb84a",sun:"#fff0d2",amb:"#ffe2c6",slime:"#6fdcc4",shield:"#8fa6d9",sprout:"#9ad16a",petal:"#ff8fb1",warn:"#ff4b3a",portal:"#ffd36b",wolf:"#5d5a8f",wolf2:"#3f3c6b",wolfEye:"#ff5c7a",dusk:["#5b6bc8","#c58ab8","#ff9a72"]},ns=null,Bn=()=>{if(ns)return ns;let i=[110,185,255],e=new Uint8Array(i.length*4);return i.forEach((t,n)=>{e[n*4]=e[n*4+1]=e[n*4+2]=t,e[n*4+3]=255}),ns=new Zs(e,i.length,1),ns.minFilter=ns.magFilter=Nt,ns.needsUpdate=!0,ns},Zh=new Map,Li=i=>(Zh.has(i)||Zh.set(i,new Jt({color:i,gradientMap:Bn()})),Zh.get(i)),MM=new At({color:gt.outline,side:Gt});function Di(i,e,t=0,n=0,s=0,r=!0,a=!0){let o=new Ae(i,e);if(o.position.set(t,n,s),o.castShadow=a,r){i.computeBoundingSphere();let c=new Ae(i,MM);c.scale.setScalar(1+.035/Math.max(i.boundingSphere.radius,.08)),o.add(c)}return o}function Bo(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new mo(n);return s.colorSpace=Tt,s}var Jh=Bo(64,64,i=>{let e=i.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,64,64)});function Ni(i,e,t=1){let n=new Ks(new ji({map:Jh,color:i,blending:gn,depthWrite:!1,transparent:!0,opacity:t}));return n.scale.setScalar(e),n}function mp(i,e){let t=i.scene.clone(!0);t.traverse(o=>{if(!o.isMesh)return;let c=o.material,l=c.emissive&&c.emissive.getHex()!==0;o.material=new Jt({color:c.color,gradientMap:Bn(),emissive:l?c.emissive:c.color,emissiveIntensity:l?1.1:.16,transparent:c.transparent,opacity:c.opacity}),o.castShadow=!0});let n=new Ut().setFromObject(t),s=n.getSize(new I),r=e/s.y;t.scale.multiplyScalar(r),t.position.set(-(n.min.x+s.x/2)*r,-n.min.y*r,-(n.min.z+s.z/2)*r);let a=new nt;return a.add(t),a}var jh=(i,e)=>i.getObjectByName(e)||null,Qh=i=>{let e=new Ae(new Ti(i,24),new At({color:"#3a2a20",transparent:!0,opacity:.25,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.03,e};function ta(i,e){let t=i.scene.clone(!0),n=new Ut().setFromObject(t),s=n.getSize(new I),r=e/s.y;t.scale.multiplyScalar(r),t.position.set(-(n.min.x+s.x/2)*r,-n.min.y*r,-(n.min.z+s.z/2)*r),t.traverse(o=>{if(!o.isMesh)return;let c=o.material,l=c.transparent||c.alphaTest>0;o.material=new Jt({map:c.map,gradientMap:Bn(),emissive:"#ffffff",emissiveMap:c.map,emissiveIntensity:.25,alphaTest:l?.5:0,side:l?Et:mn}),o.castShadow=!0,o.receiveShadow=!l});let a=new nt;return a.add(t),a}function gp(i,e,t={},n=8.2){let s=P=>{let F=new Ct(P);return F.colorSpace=Tt,F.anisotropy=4,F.needsUpdate=!0,F};i.background=t.skyDawn?s(t.skyDawn):Bo(4,256,(P,F,N)=>{let D=P.createLinearGradient(0,0,0,N);D.addColorStop(0,gt.sky[0]),D.addColorStop(.55,gt.sky[1]),D.addColorStop(1,gt.sky[2]),P.fillStyle=D,P.fillRect(0,0,F,N)}),i.add(new Mo(gt.amb,gt.floor2,1.25));let r=new sr(gt.sun,2.6);r.position.set(-6,12,7),e.shadows&&(r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:40}),r.shadow.bias=-8e-4,r.shadow.normalBias=.03),i.add(r);let a=new nt;i.add(a);let o=Bo(512,512,(P,F)=>{P.fillStyle=gt.floor,P.fillRect(0,0,F,F);let N=F/2;P.strokeStyle=gt.floor2,P.lineWidth=7;for(let D of[.12,.26,.4,.47])P.beginPath(),P.arc(N,N,D*F,0,7),P.stroke();P.lineWidth=4;for(let D=0;D<12;D++){let G=D*Math.PI/6;P.beginPath(),P.moveTo(N+Math.cos(G)*.26*F,N+Math.sin(G)*.26*F),P.lineTo(N+Math.cos(G)*.47*F,N+Math.sin(G)*.47*F),P.stroke()}}),c=n+.4,l=new Ae(new Ti(c,64),new Jt({map:t.floor?s(t.floor):o,gradientMap:Bn()}));l.rotation.x=-Math.PI/2,l.receiveShadow=!0,a.add(l);let h=c+1.35,u=c+.68,d=new Ae(new Zt(c-.05,h,72,1),new Jt({color:"#c9a273",gradientMap:Bn()}));d.rotation.x=-Math.PI/2,d.position.y=-.02,d.receiveShadow=!0,a.add(d),a.add(Di(new Dn(h+.12,h+.12,.5,64,1,!0),Li(gt.trim),0,-.27,0,!1,!1)),a.add(Di(new Dn(c-.3,c-.9,40,24,1,!0),Li(gt.tower),0,-20.4,0,!1,!1));let f=[];for(let P=0;P<7;P++){let F=Math.PI*(1.08+P*.14),N=Math.cos(F)*u,D=Math.sin(F)*u,G=P%3===1?2.6:4.6,z=P%3===1,ee=z&&t.pillarCracked||t.pillar;if(ee){let ie=ta(ee,4.8);if(!z&&P%3===0&&t.pillarClaw){let re=ta(t.pillarClaw,4.8);re.visible=!1,re.rotation.y=-Math.atan2(-N,-D),ie.add(re),f.push([ie.children[0],re])}if(z&&t.bannerTorn){ie.updateMatrixWorld(!0);let re=[];if(ie.traverse(te=>{te.isMesh&&te.material.alphaTest>0&&re.push(te)}),re.length){let te=new Ut;re.forEach(H=>te.expandByObject(H));let ge=te.getSize(new I),Y=ta(t.bannerTorn,ge.y);Y.position.set((te.min.x+te.max.x)/2,te.min.y,te.max.z+.01),Y.visible=!1,ie.add(Y),re.forEach(H=>f.push([H,null])),f.push([null,Y])}}ie.position.set(N,0,D),ie.rotation.y=Math.atan2(-N,-D),ie.userData.pillar=!0,a.add(ie);continue}a.add(Di(new Dn(.42,.5,G,10),Li(gt.pillar),N,G/2,D)),a.children[a.children.length-1].userData.pillar=!0,a.add(Di(new ln(1.25,.32,1.25),Li(gt.trim),N,G+.16,D)),a.add(Di(new ln(1.3,.3,1.3),Li(gt.trim),N,.15,D,!0,!1))}if(t.wall){let P=s(t.wall);P.wrapS=Ki;let F=new Jt({color:"#d2aa78",map:P,gradientMap:Bn(),side:Et}),N=new Jt({color:"#fbe9c8",gradientMap:Bn(),side:Et}),D=c+.15,G=.34,z=t.wall.width/t.wall.height,ee=(ie,re,te)=>{let ge=re-ie,Y=Math.ceil(ge*20),H=Math.max(1,Math.round(D*ge/(te*z)));for(let j of[D+G/2,D-G/2]){let he=new Dn(j,j,te,Y,1,!0,ie,ge),me=he.attributes.uv;for(let Je=0;Je<me.count;Je++)me.setX(Je,me.getX(Je)*H);let Le=new Ae(he,F);Le.position.y=te/2,Le.receiveShadow=!0,a.add(Le)}let se=new Ae(new Zt(D-G/2,D+G/2,Y,1,Math.PI/2-re,ge),N);se.rotation.x=Math.PI/2,se.position.y=te,a.add(se);for(let j of[ie,re]){let he=new Ae(new Ln(G,te),N);he.position.set(D*Math.sin(j),te/2,D*Math.cos(j)),he.rotation.y=j+Math.PI/2,a.add(he)}};ee(-Math.PI/2,Math.PI/2,.5),ee(Math.PI/2,Math.PI-.34,1),ee(Math.PI+.34,Math.PI*1.5,1)}let p=[],x=1;if(t.brazier)for(let[P,F]of[[-Math.PI/2,u],[Math.PI/2,u],[-.3*Math.PI,u],[.3*Math.PI,u]]){let N=F*Math.sin(P),D=F*Math.cos(P),G=ta(t.brazier,1);G.position.set(N,0,D),a.add(G);let z=up(1.15,.28,{sparks:14,ph:p.length*2.7});z.position.set(N,.9,D),a.add(z);let ee=Ni("#ff9a3c",1.8,.3);ee.position.set(N,1.3,D),a.add(ee),p.push({f:z,h:ee,ph:p.length*1.9})}let g=new Jt({color:"#fff4e6",gradientMap:Bn(),emissive:"#ffe3cf",emissiveIntensity:.45}),m=[];for(let[P,F,N,D]of[[-14,-3,-12,3],[-9,-4.5,-15,2.2],[13,-2.5,-14,3.4],[17,-5,-6,2.4],[-18,-5,-4,2.6],[4,-6,-20,3]]){let G=dp(D*.75,m.length+3,g);G.position.set(P,F,N),G.rotation.y=(m.length%3-1)*.4,i.add(G),m.push({cl:G,x:P,ph:m.length*1.3})}let _=Ni("#fff0c0",26,.9);_.position.set(9,6,-30),i.add(_);let v=new nt;v.position.set(0,0,-(n-.3)),a.add(v);let y,C;t.gate?(v.add(ta(t.gate,5.2)),y=Kh(1.75,4.05),y.position.set(0,.5+2.02,.45),C=Ni(gt.portal,5,0),C.position.set(0,2.4,.8)):(v.add(Di(new ln(.7,4.4,.7),Li(gt.pillar),-1.7,2.2,0),Di(new ln(.7,4.4,.7),Li(gt.pillar),1.7,2.2,0),Di(new ln(4.6,.8,.9),Li(gt.trim),0,4.7,0)),y=Kh(2.7,4.2),y.position.set(0,2.15,0),C=Ni(gt.portal,5,0),C.position.set(0,2.3,.4)),v.add(y,C);let T=i.children.find(P=>P.isHemisphereLight),A=i.background,R=t.skyDusk?s(t.skyDusk):Bo(4,256,(P,F,N)=>{let D=P.createLinearGradient(0,0,0,N);D.addColorStop(0,gt.dusk[0]),D.addColorStop(.55,gt.dusk[1]),D.addColorStop(1,gt.dusk[2]),P.fillStyle=D,P.fillRect(0,0,F,N)}),S=[];a.traverse(P=>{P.userData.pillar&&S.push(P)});for(let P of S){let F=new I;P.getWorldPosition(F),P.userData.at=F,P.userData.fade=1,P.userData.mats=[],P.traverse(N=>{N.isMesh&&(N.material=N.material.clone(),N.material.userData.op0=N.material.opacity,P.userData.mats.push(N.material))})}let b=.75,L=4.9,W=(P,F,N,D,G)=>{let z=P.position,ee=F.userData.at,ie=N-z.x,re=D-z.y,te=G-z.z,ge=Math.hypot(ie,re,te),Y=ie/ge,H=re/ge,se=te/ge,j=z.x-ee.x,he=z.z-ee.z,me=Y*Y+se*se,Le=2*(j*Y+he*se),Je=j*j+he*he-b*b,ke=Le*Le-4*me*Je;if(ke<0||me<1e-9)return!1;let je=(-Le-Math.sqrt(ke))/(2*me);if(je<=0||je>=ge)return!1;let k=z.y+H*je;return k>=0&&k<=L};return{sun:r,tower:a,pillars:S,fadePillars(P,F,N){let D=1-Math.exp(-N*10);for(let G of S){let z=F.some(([ie,re,te])=>W(P,G,ie,re,te))?.28:1,ee=G.userData.fade+=(z-G.userData.fade)*D;for(let ie of G.userData.mats){let re=ee<.99;ie.transparent=re||ie.userData.op0<1||ie.alphaTest>0,ie.opacity=ie.userData.op0*ee,ie.depthWrite=!re}}},setZone(P){x=P===2?1.25:1;for(let[F,N]of f)F&&(F.visible=P!==2),N&&(N.visible=P===2);g.color.set(P===2?"#c9b3e0":"#fff4e6"),g.emissive.set(P===2?"#8a6fae":"#ffe3cf"),i.background=P===2?R:A,T.color.set(P===2?"#c9b6ff":gt.amb),r.color.set(P===2?"#ffc79a":gt.sun),r.intensity=P===2?2.2:2.6},setGate(P,F=0){var D;let N=Math.min(.1,Math.max(0,F-((D=this._gt)!=null?D:F)));this._gt=F,y.userData.setOpen(P,N),C.material.opacity=P?.55:0},gatePos:new I(0,0,-(n-.3)),tick(P){for(let F of m)F.cl.position.x=F.x+Math.sin(P*.05+F.ph)*1.2;for(let{f:F,h:N,ph:D}of p){let G=1+Math.sin(P*11+D)*.08+Math.sin(P*17.3+D*2)*.05;F.userData.k.value=x,F.scale.setScalar(x**.5),N.material.opacity=(.24+Math.sin(P*9+D)*.05)*x}}}}function eu(i,e,t=-Math.PI/2){let n=new nt,s=new nt,r=fp(i.scene),a=new Ut().setFromObject(r),o=a.getSize(new I),c=e/o.y;r.scale.multiplyScalar(c),r.position.set(-(a.min.x+o.x/2)*c,-a.min.y*c,-(a.min.z+o.z/2)*c);let l=new nt;l.rotation.y=t,l.add(r),s.add(l),n.add(s);let h=[];r.traverse(d=>{if(d.isMesh){let f=new Jt({map:d.material.map,gradientMap:Bn(),transparent:!0,side:d.material.side,emissive:"#ffffff",emissiveMap:d.material.map,emissiveIntensity:.3});d.material=f,d.frustumCulled=!1,h.push(f)}});let u=new Ae(new Ti(.42,20),new At({color:"#3a2a20",transparent:!0,opacity:.25,depthWrite:!1}));return u.rotation.x=-Math.PI/2,u.position.y=.02,n.add(u),n.userData={body:s,mats:h,H:e,anim:bM(r,i.animations||[])},n}function bM(i,e){let t=new To(i),n={};for(let c of e)n[c.name]=t.clipAction(c);let s=null,r=null,a=!1,o=(c,l)=>{let h=n[c];return h?(s===h&&!l||(h.reset(),h.setLoop(l?ih:sh,1/0),h.clampWhenFinished=!!l,h.enabled=!0,h.setEffectiveWeight(1),h.play(),s&&s!==h&&s.crossFadeTo(h,l?.06:.15,!1),s=h),!0):!1};return t.addEventListener("finished",c=>{c.action===r&&(r=null)}),{has:c=>!!n[c],current:()=>s?s.getClip().name:null,once(c){o(c,!0)&&(r=n[c])},hold(c,l){let h=n[c];return h?(s!==h&&o(c,!0),r=null,h.paused=!0,h.time=Math.min(.999,Math.max(0,l))*h.getClip().duration,a=!0,!0):!1},update(c,l,h=1){if(a){a=!1,t.update(c);return}s&&s.paused&&(s.paused=!1),r||(o(l,!1),n[l]&&(n[l].timeScale=h)),t.update(c)}}}function xp(i,e,t,n=!1){if(i.userData.weapon&&(i.userData.weapon.removeFromParent(),i.userData.weapon=null),!e)return!1;let s=null;if(i.traverse(c=>{c.isBone&&/forearm\.?R$/i.test(c.name)&&(s=c)}),!s)return!1;let r=e.scene.clone(!0);r.traverse(c=>{if(!c.isMesh)return;let l=c.material,h=l.emissive&&l.emissive.getHex()!==0;c.material=new Jt({color:l.color,gradientMap:Bn(),emissive:h?l.emissive:"#000000",emissiveIntensity:h?1.1:0}),c.castShadow=!0,c.frustumCulled=!1});let a=new Ut().setFromObject(r);r.scale.setScalar(t/(a.max.y-a.min.y)),n&&(r.rotation.x=Math.PI),i.updateMatrixWorld(!0);let o=new nt;return o.add(r),o.scale.setScalar(1/s.getWorldScale(new I).x),o.position.set(0,s.position.length()*.92,0),s.add(o),i.userData.weapon=o,!0}function _p(i){let e=eu(i,1.75),t=new Ae(new xo(.16,.38,3),new At({color:"#f2b33d",transparent:!0,opacity:.85,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.set(0,.04,-.85);let n=new nt;return n.add(t),e.add(n),e.userData.arrow=n,e}function dr(i,e,t){let n=new nt,s=new At({color:gt.warn,transparent:!0,opacity:.25,depthWrite:!1}),r=new At({color:gt.warn,transparent:!0,opacity:.55,depthWrite:!1}),a;if(i==="circle")n.add(new Ae(new Ti(e,40),s)),n.add(new Ae(new Zt(e*.93,e,48),r)),a=new Ae(new Ti(e,40),r),n.add(a);else if(i==="ring")n.add(new Ae(new Zt(t,e,48),s)),n.add(new Ae(new Zt(e*.95,e,48),r)),a=new Ae(new Zt(t,e,48),r),n.add(a);else{let c=new Ae(new Ln(e,t),s);c.position.y=t/2,n.add(c),a=new Ae(new Ln(e,t),r),a.position.y=t/2,n.add(a)}n.rotation.x=-Math.PI/2,n.position.y=.03;let o=new nt;return o.add(n),o.userData={fill:a,kind:i,len:t},o}function tu(i,e){if(!i)return;let t=i.userData.fill,n=Math.max(.001,e);i.userData.kind==="lane"?(t.scale.set(1,n,1),t.position.y=i.userData.len*n/2):t.scale.set(n,n,1)}function na(i){i&&(i.removeFromParent(),i.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}))}var yp=i=>!!(i&&i.animations&&i.animations.length);function vp(i,e,t){if(yp(i)){let s=eu(i,e);for(let r of s.userData.mats)r.emissiveIntensity=.1;return{root:s,anim:s.userData.anim,mats:s.userData.mats}}let n=mp(i,e);return SM(n,t),{root:n,anim:null}}var yn=i=>i*i*(3-2*i),nu=i=>Math.max(0,Math.min(1,i));function Mp(i,e){let t=_p(i),n=t.userData;e&&xp(t,e,1.05);let s=0,r=0,a=null;return{obj:t,update(o,c,l){let h=o.hero,u=n.body;t.position.set(h.x,0,h.z),t.rotation.y=h.face,u.position.y=0,u.rotation.set(0,0,0),u.scale.set(1,1,1);let d=h.moving&&!h.move?"run":"idle";if(h.move){let p=l[h.move.id],x=h.move.t*60,g=p.startup+p.active,m=x<p.startup?.45*x/p.startup:x<g?.45+.15*(x-p.startup)/p.active:.6+.4*nu((x-g)/p.recovery);if(n.anim.hold(n.anim.has(p.clip)?p.clip:"attack",m),h.move.id==="light2"&&(u.rotation.y=.5*Math.sin(Math.PI*m)),h.move.id==="breaker"){let _=x<p.startup?Math.sin(Math.PI*x/p.startup):0;u.position.y=_*.7,u.rotation.x=.35*_}if(h.move.id==="giantfall"){let _=x<p.startup?Math.sin(Math.PI*.5*x/p.startup):Math.max(0,1-(x-p.startup)/6);u.position.y=_*1.6,u.rotation.x=-.6*_}h.move.id!==a&&(s=0)}else if(h.dodge){let p=nu(h.dodge.t*60/l.dodge.frames);n.anim.has("roll")?(n.anim.hold("roll",p),u.rotation.x=Math.sin(Math.PI*p)*.5,u.position.y=Math.sin(Math.PI*p)*.15):(s=p*Math.PI*2,u.rotation.y=-s,u.scale.set(1.08,.82,1.08),u.position.y=Math.sin(Math.PI*p)*.12),d="run"}a=h.move?h.move.id:null,r=h.hp<=0?Math.min(1,r+c*2.5):0,r>0&&(u.rotation.x=-Math.PI/2*yn(r),u.position.y=.25*r);let f=h.hurtT>0&&Math.floor(h.hurtT*20)%2===0;for(let p of n.mats)p.opacity=f?.45:1;n.arrow.visible=o.flow.state==="fight",h.move?n.anim.update(c,d):n.anim.update(c,d,d==="run"?1.2:1)},hurt(){n.anim.once("hurt")},win(){n.anim.once("win")}}}var SM=(i,e)=>{if(!e)return;let t=new Se(e);i.traverse(n=>{n.isMesh&&(n.material.color.multiply(t),n.material.emissive&&n.material.emissive.multiply(t))})};function iu(i,e,t=5.4,n=null,s="hollen"){let r=new nt,a=new nt,o=new nt;r.add(a,Qh(t*.3)),a.add(o);let c=vp(i,t,n),l=c.root,h=c.anim;o.add(l);let u=te=>h?null:jh(l,te),d=u("upper"),f=u("armL"),p=u("armR"),x=u("head"),g=u("legL"),m=u("legR");r.updateMatrixWorld(!0);for(let te of[f,p,x])te&&d&&d.attach(te);let _=new Map;for(let te of[d,f,p,x,g,m])te&&_.set(te,te.rotation.clone());let v=[];l.traverse(te=>{te.isMesh&&te.material.emissive&&v.push({m:te.material,e:te.material.emissive.clone(),ei:te.material.emissiveIntensity})}),r.userData.rigged=!!h;let y=[[0,.62,.55],[-.45,.78,.35],[.42,.7,.42]].map(([te,ge,Y])=>{let H=Ni("#ff7a2a",.9,0);return H.position.set(te*t*.32,ge*t,Y*t*.32),o.add(H),H}),C=new At({color:"#7fe3ff",transparent:!0,opacity:0,depthWrite:!1,blending:gn}),T=[-.38,.38].map(te=>{let ge=new Ae(new er(.42,.05,6,28),C);return ge.rotation.x=Math.PI/2,ge.position.set(te*t*.22,.5,0),o.add(ge),ge}),A=[0,1,2,3].map(()=>{let te=Ni("#ffe48a",.45,0);return o.add(te),te});r.userData.craft=`${s}: Stone Guardian Blender model (art/boss-guardian.glb)`;for(let te of[...y,...A,...T])te.userData.craft="giant status light";let R=null,S=null,b=0,L=0,W=0,P=0,F=0,N=9,D="",G=0,z=0,ee=0,ie=new I,re=(te,ge=0,Y=0,H=0)=>{if(!te)return;let se=_.get(te);te.rotation.set(se.x+ge,se.y+Y,se.z+H)};return{obj:r,get tg(){return R},hit(te,ge){W=.06,P=Math.min(.22,.05+te.gain*.006+(te.move==="breaker"?.08:0)),F=ge},strike(){N=0},update(te,ge,Y){let H=te.giant&&te.giant.id===s?te.giant:null;if(r.visible=!!H,!H)return R&&(na(R),R=null,S=null),{struckT:N};let se=te.data.giants[H.id];H.state!==D?(D=H.state,G=0):G+=ge,r.position.set(H.x,0,H.z),o.rotation.y=H.face,N+=ge,W-=ge,P=Math.max(0,P-ge*1.6),z+=ge;let j=H.state==="approach"||H.state==="active";b+=ge*(H.state==="active"?9:j?3.2:0);let he=j?Math.sin(b)*(H.state==="active"?.55:.3):0;re(g,he),re(m,-he);let me=0,Le=0,Je=0,ke=[0,0,0],je=[0,0,0],k=0,Xt=0,Oe=H.atk,Xe=H.tg?H.tg.k:0;if(H.state==="wind"&&Oe==="slam"){let K=yn(Xe);ke=[-2.7*K,0,.2*K],je=[-2.7*K,0,-.2*K],me=-.3*K}else if(H.state==="wind"&&Oe==="sweep"){let K=yn(Xe);Le=1.1*K,je=[-1.2*K,0,-1.2*K],ke=[0,0,.5*K]}else if(H.state==="wind"&&Oe==="charge"){let K=yn(Xe);me=.45*K,k=.25*K,ke=[.8*K,0,0],je=[.8*K,0,0]}else if(H.state==="active")me=.6,ke=[1,0,0],je=[1,0,0];else if(H.state==="open"){let K=se.attacks[Oe]||{},ce=nu(1-H.t/Math.max(.01,K.open||1));if(Oe==="slam"){let He=Math.min(1,G/.08);me=.55*He*(1-yn(ce)),ke=[(-2.7+3.4*He)*(1-yn(ce)),0,0],je=ke.slice(),k=.35*He*(1-yn(ce))}else Oe==="sweep"?(Le=(1.1-2.5*Math.min(1,G/.1))*(1-yn(ce)),je=[-1.2*(1-yn(ce)),0,-1.2*(1-yn(ce))]):me=.35*(1-yn(ce))}else if(H.state==="roar"){let K=Math.sin(Math.min(1,G/.3)*Math.PI/2);me=-.35*K,ke=[-.6*K,0,1.3*K],je=[-.6*K,0,-1.3*K],Xt=Math.sin(Y*40)*.06*K}let Re=H.balMax?H.balance/H.balMax:0,ht=Re*Re*.09;if(Je+=Math.sin(Y*3.1)*ht,me+=Math.sin(Y*2.3+1)*ht*.6,me-=P*Math.cos(F-H.face),Je+=P*Math.sin(F-H.face)*.6,re(d,me,Le,Je),re(f,...ke),re(p,...je),re(x,Xt),h){let K=se.attacks[Oe]||{},ce=Oe==="sweep";H.state==="wind"?h.hold(ce?"windup2":"windup",Oe==="charge"?Xe*.6:Xe):H.state==="open"&&G<(K.open||1)*.6?h.hold(ce?"strike2":"strike",Math.min(1,G/.25)):H.state==="roar"&&h.hold("windup2",Math.min(1,G/.4)),h.update(ge,H.state==="toppled"||H.state==="fallen"||H.state==="getup"?"dizzy":j?"run":"idle",H.state==="active"?2.2:1),l.rotation.z=Je,l.rotation.x=me*.5}o.position.y=-k,H.state==="toppled"?L=Math.min(1,L+ge/.45):H.state==="getup"?L=Math.max(0,1-G/(te.data.rules.topple.getup||.9)):H.state==="fallen"?(L=Math.min(1,L+ge/1.1),ee=Math.min(1,ee+ge/3)):L=Math.max(0,L-ge*3);let Ce=H.state==="fallen"?1.45:1.2,E=H.state==="toppled"||H.state==="fallen"?L*L:yn(L),M=H.state==="toppled"&&L>=1?Math.max(0,Math.sin(Math.min(1,(G-.45)/.35)*Math.PI))*.08:0,V=H.toppleDir;ie.set(Math.cos(V),0,-Math.sin(V)),a.quaternion.setFromAxisAngle(ie,E*Ce-M),a.position.y=-1.1*E,E>0&&(re(g,-.9*E),re(m,-.7*E));let J=H.status.cracked.n,ne=H.status.bound.n;for(let K of v)W>0?(K.m.emissive.copy(K.e).lerp(new Se("#fff4dc"),.6),K.m.emissiveIntensity=K.ei+.35):J>0?(K.m.emissive.copy(K.e).lerp(new Se("#ff6a1a"),.25*J*(.7+.3*Math.sin(Y*6))),K.m.emissiveIntensity=K.ei+.12*J):ee>0?(K.m.emissive.copy(K.e).lerp(new Se("#ffe8a8"),.4*ee),K.m.emissiveIntensity=K.ei):(K.m.emissive.copy(K.e),K.m.emissiveIntensity=K.ei);y.forEach((K,ce)=>{K.material.opacity=ce<J*2-(J===2?0:1)?.7+.3*Math.sin(Y*7+ce):0}),C.opacity=ne?.55+.3*Math.sin(Y*8):0,T.forEach((K,ce)=>{K.position.y=.5+.06*Math.sin(Y*4+ce*2)});let Z=H.state==="toppled";return A.forEach((K,ce)=>{let He=Y*3+ce*Math.PI/2;K.position.set(Math.sin(He)*.9,t*.92,Math.cos(He)*.9),K.material.opacity=Z?.9:0}),((H.tg?H.tg.kind:null)!==S||R&&!H.tg)&&(na(R),R=null,S=null),H.tg&&!R&&(R=H.tg.kind==="circle"?dr("circle",H.tg.r):H.tg.kind==="ring"?dr("ring",H.tg.r,H.tg.inner):dr("lane",H.tg.w,H.tg.len),R.userData.craft="telegraph",S=H.tg.kind,e.add(R)),R&&(R.position.set(H.tg.x,0,H.tg.z),S==="lane"&&(R.rotation.y=H.tg.ang+Math.PI),tu(R,H.tg.k)),{struckT:N}}}}function bp(i,e,t={}){let n=new Map,s=new Map,r=new Qs(.26,0),a=new Jt({color:"#8d8476"});function o(l,h){let u=new nt,d=new nt;u.add(d,Qh(h.radius*1.1));let f=t[l.type]||i,p=vp(f,h.height,yp(f)?null:h.tint),x=p.root;d.add(x);let g=S=>p.anim?null:jh(x,S),m=g("upper"),_=g("armL"),v=g("armR"),y=g("legL"),C=g("legR");u.updateMatrixWorld(!0);for(let S of[_,v,g("head")])S&&m&&m.attach(S);let T=new Map;for(let S of[m,_,v,y,C])S&&T.set(S,S.rotation.clone());let A=[];x.traverse(S=>{S.isMesh&&S.material.emissive&&A.push({m:S.material,e:S.material.emissive.clone()})});let R=Ni("#ffe48a",.35,0);return R.position.y=h.height*1.05,d.add(R),u.userData.craft=`${l.type}: small Warden stone (art/boss-guardian.glb, tinted)`,R.userData.craft="stun light",e.add(u),{obj:u,yaw:d,up:m,aL:_,aR:v,lL:y,lR:C,rest:T,mats:A,star:R,anim:p.anim,walk:Math.random()*6,tg:null,tgKind:null,deadT:0}}let c=(l,h,u=0,d=0,f=0)=>{if(!h)return;let p=l.rest.get(h);h.rotation.set(p.x+u,p.y+d,p.z+f)};return{update(l,h,u){let d=new Set;for(let p of l.foes){let x=l.data.foes[p.type],g=n.get(p.id);g||(g=o(p,x),n.set(p.id,g)),d.add(p.id),g.obj.position.set(p.x,0,p.z),g.yaw.rotation.y=p.face;let m=p.state==="move";g.walk+=h*(m?9:0);let _=m?Math.sin(g.walk)*.5:0;c(g,g.lL,_),c(g,g.lR,-_);let v=0,y=0,C=1,T=0;if(p.state==="spawn")C=Math.min(1,1-p.t/.7+.2),T=-.6*(p.t/.7);else if(p.state==="wind"){let R=p.tg?p.tg.k:0;y=-2.4*R,v=p.type==="slinger"?-.3*R:.25*R}else p.state==="act"?(v=.6,y=.8):p.state==="stagger"?v=-.35*Math.sin(u*30):p.state==="dead"&&(g.deadT+=h,C=Math.max(.01,1-g.deadT/.9),T=-.5*g.deadT,v=.6*g.deadT);c(g,g.up,v),c(g,g.aL,y),c(g,g.aR,p.type==="slinger"?0:y),g.anim&&(p.state==="wind"?g.anim.hold("windup",p.tg?p.tg.k:0):(p.state==="act"||p.state==="rest"&&p.t>.6)&&g.anim.hold("strike",p.state==="act"?.6:1),g.anim.update(h,p.state==="stun"||p.state==="stagger"?"dizzy":m?"run":"idle",m?1.4:1)),g.obj.scale.setScalar(C),g.obj.position.y=T;for(let R of g.mats)p.flash>0?R.m.emissive.set("#fff4dc"):p.status.cracked.n?R.m.emissive.copy(R.e).lerp(new Se("#ff6a1a"),.35):R.m.emissive.copy(R.e);g.star.material.opacity=p.state==="stun"?.9:0,g.star.position.x=Math.sin(u*6)*.3,(p.tg?p.tg.kind:null)!==g.tgKind&&(na(g.tg),g.tg=null,g.tgKind=null),p.tg&&!g.tg&&(g.tg=p.tg.kind==="circle"?dr("circle",p.tg.r):dr("lane",p.tg.w,p.tg.len),g.tg.userData.craft="telegraph",g.tgKind=p.tg.kind,g.tg.traverse(R=>{R.material&&(R.material.opacity*=.8)}),e.add(g.tg)),g.tg&&(g.tg.position.set(p.tg.x,0,p.tg.z),g.tgKind==="lane"&&(g.tg.rotation.y=p.tg.ang+Math.PI),tu(g.tg,p.tg.k))}for(let[p,x]of n)d.has(p)||(na(x.tg),x.obj.removeFromParent(),x.obj.traverse(g=>{g.isMesh&&g.material&&g.material.dispose()}),n.delete(p));let f=new Set;for(let p of l.shots){let x=s.get(p);x||(x=new Ae(r,a),x.castShadow=!0,x.userData.craft="thrown stone",e.add(x),s.set(p,x)),f.add(p),x.position.set(p.x,1,p.z),x.rotation.x+=h*12}for(let[p,x]of s)f.has(p)||(x.removeFromParent(),s.delete(p))},count:()=>n.size}}var nn={arc:new Zt(.9,1.35,24,1,-.9,1.8),arcBig:new Zt(1.2,2.1,32,1,-1.3,2.6),ring:new Zt(.86,1,48),spark:new ln(.07,.07,.32),beam:new Dn(.05,.05,1,6,1,!0),beamCore:new Dn(.11,.11,1,8,1,!0),chop:new Zt(.75,1.55,28,1,-1,2),crack:new bt().setFromPoints([new I(-.14,0,0),new I(.14,0,0),new I(.05,.55,0),new I(.14,0,0),new I(.09,.5,0),new I(.05,.55,0),new I(.05,.55,0),new I(.09,.5,0),new I(-.02,1,0)]),bindRing:new er(1,.085,6,40)};nn.crack.rotateX(-Math.PI/2);nn.beam.translate(0,.5,0);nn.beam.rotateX(Math.PI/2);nn.beamCore.translate(0,.5,0);nn.beamCore.rotateX(Math.PI/2);var Sp={light1:["#fff4d6",0],light2:["#fff4d6",.5],light3:["#ffe2a0",-.4],sunder:["#ff8a3c",.25],breaker:["#ffd36b",0],giantfall:["#ffffff",0]};function wp(i){let e=[],t=(r,a,o)=>(i.add(r),e.push({obj:r,life:a,t:0,step:o}),r),n=(r,a=1,o=!0)=>new At({color:r,transparent:!0,opacity:a,depthWrite:!1,side:Et,blending:o?gn:In}),s=(r,a,o=1)=>{let c=new Ks(new ji({map:Jh,color:r,transparent:!0,opacity:o,depthWrite:!1,blending:gn}));return c.scale.setScalar(a),c};return{count:()=>e.length,slash(r,a){let[o,c]=Sp[a]||Sp.light1,l=a==="breaker"||a==="giantfall",h=new Ae(l?nn.arcBig:nn.arc,n(o,.85));h.position.set(r.x,l?.25:1,r.z),h.rotation.order="YXZ",h.rotation.y=r.face,h.rotation.x=l?-Math.PI/2:-Math.PI/2+c,t(h,l?.22:.14,u=>{h.material.opacity=.85*(1-u),h.scale.setScalar(1+u*.35)})},chop(r){let a=new Ae(nn.chop,n("#f26a1b",.92,!1));a.position.set(r.x,1,r.z),a.rotation.order="YXZ",a.rotation.y=r.face,a.rotation.x=-Math.PI/2+1.05,t(a,.2,o=>{a.material.opacity=.95*(1-o),a.scale.setScalar(1+o*.25)})},cracks(r,a,o,c=7){for(let l=0;l<c;l++){let h=new Ae(nn.crack,n(l%2?"#b2400c":"#e85a10",.95,!1)),u=1.3+Math.random()*1.1;h.position.set(r,.05,a),h.rotation.y=o+l*(Math.PI*2/c)+(Math.random()-.5)*.4,t(h,.6,d=>{h.scale.set(1-d*.5,1,u*Math.min(1,d*6)),h.material.opacity=.9*(1-d*d)})}this.flash(r,.5,a,"#ff9a4a",2.2,.2)},bind(r,a,o,c){for(let[l,h]of[[0,a],[.08,a+.45]]){let u=new Ae(nn.bindRing,n("#13a9d6",0,!1));u.rotation.x=Math.PI/2,u.position.set(r,h,o),t(u,.45+l,(d,f,p)=>{let x=Math.max(0,(p-l)/.45);u.scale.setScalar(c*(1.9-.9*Math.min(1,x*2.5))),u.material.opacity=x<=0?0:.95*(1-Math.max(0,x-.5)*2)})}},sparks(r,a,o,c,l=10,h="#ffd9a0"){for(let u=0;u<l;u++){let d=new Ae(nn.spark,n(h,1));d.position.set(r,a,o);let f=c+(Math.random()-.5)*2.2,p=Math.random()*4+1,x=Math.random()*6+3,g=new I(Math.sin(f)*x,p,Math.cos(f)*x);d.lookAt(d.position.clone().add(g)),t(d,.28+Math.random()*.15,(m,_)=>{g.y-=14*_,d.position.addScaledVector(g,_),d.material.opacity=1-m})}},shock(r,a,o,c="#ffe7b0",l=.45){let h=new Ae(nn.ring,n(c,.8));h.rotation.x=-Math.PI/2,h.position.set(r,.06,a),t(h,l,u=>{h.scale.setScalar(o*(.25+.75*Math.sqrt(u))),h.material.opacity=.8*(1-u)})},dust(r,a,o=10,c=2,l="#d8c4a0"){for(let h=0;h<o;h++){let u=s(l,1.2,.5);u.material.blending=In;let d=Math.random()*Math.PI*2,f=Math.random()*c;u.position.set(r+Math.sin(d)*f,.4,a+Math.cos(d)*f);let p=new I(Math.sin(d)*1.6,.8+Math.random(),Math.cos(d)*1.6);t(u,.9+Math.random()*.5,(x,g)=>{u.position.addScaledVector(p,g),u.scale.setScalar(1.2+x*2.2),u.material.opacity=.5*(1-x)})}},beam(r,a,o="#7fe3ff"){let c=Math.hypot(a.x-r.x,a.z-r.z),l=Math.atan2(a.x-r.x,a.z-r.z);for(let[h,u,d,f]of[[nn.beamCore,"#13a9d6",.85,!1],[nn.beam,"#ffffff",1,!0]]){let p=new Ae(h,n(u,d,f));p.position.set(r.x,1.15,r.z),p.rotation.y=l,p.scale.set(1,1,.01),t(p,.36,x=>{p.scale.set(1+x*.6,1+x*.6,c*Math.min(1,x*5)),p.material.opacity=d*(1-x*x)})}},flash(r,a,o,c,l=2.5,h=.18){let u=s(c,l,1);u.position.set(r,a,o),t(u,h,d=>{u.material.opacity=1-d,u.scale.setScalar(l*(1+d))})},motes(r,a,o=24,c="#ffe8a8"){for(let l=0;l<o;l++){let h=s(c,.35,.9),u=Math.random()*Math.PI*2,d=Math.random()*2;h.position.set(r+Math.sin(u)*d,.3+Math.random(),a+Math.cos(u)*d);let f=.8+Math.random()*1.4,p=Math.random()*6;t(h,2.5+Math.random()*1.5,(x,g,m)=>{h.position.y+=f*g,h.position.x+=Math.sin(m*2+p)*g*.3,h.material.opacity=.9*Math.sin(Math.PI*Math.min(1,x*1.2))})}},update(r){for(let a=e.length-1;a>=0;a--){let o=e[a];o.t+=r;let c=Math.min(1,o.t/o.life);o.step(c,r,o.t),c>=1&&(o.obj.removeFromParent(),o.obj.material.dispose(),e.splice(a,1))}}}}var ia=i=>`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${i}</svg>`,zo={light:ia('<path d="M5 19 L17.5 6.5 L19.5 4.5 L19 7 L6.5 19.5 Z" fill="currentColor" stroke-width="1.6"/><path d="M4 15.5 L8.5 20"/><path d="M3.2 20.8 L5.2 18.8"/>'),sunder:ia('<path d="M12 2.5 L10 8 L13.5 11 L9.5 15.5 L12 21.5"/><path d="M13.5 11 L19 9"/><path d="M10 8 L5 6.5"/><path d="M9.5 15.5 L4.5 17"/><path d="M13 17 L18.5 18.5"/>'),tether:ia('<rect x="2.5" y="8.5" width="10" height="7" rx="3.5" transform="rotate(-30 7.5 12)"/><rect x="11.5" y="8.5" width="10" height="7" rx="3.5" transform="rotate(-30 16.5 12)"/>'),breaker:ia('<path d="M12 3 L13.6 8.4 L19 6.5 L15.6 11 L21 13 L15.4 14.2 L17 20 L12 16.4 L7 20 L8.6 14.2 L3 13 L8.4 11 L5 6.5 L10.4 8.4 Z" fill="currentColor" fill-opacity=".25"/>'),dodge:ia('<path d="M19.5 12 A7.5 7.5 0 1 1 15.5 5.4"/><path d="M15.8 1.8 L16 5.8 L12 6.2"/>')};var Tp={light:["KeyJ","Mouse0"],sunder:["KeyK","Digit1"],tether:["KeyL","Digit2"],breaker:["Semicolon","Digit3","KeyI"],dodge:["Space","ShiftLeft","ShiftRight"]},hi={light:"J",sunder:"K",tether:"L",breaker:";",dodge:"SPACE"},sa={up:["KeyW","ArrowUp"],down:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"]},su={};for(let[i,e]of Object.entries(Tp))for(let t of e)su[t]=i;var wM=new Set([...Object.values(Tp).flat(),...Object.values(sa).flat()]),is=new Set,li={x:0,y:0},fr=[],ru=null,ra=!0,au={presses:0},TM=i=>{let e=i.target;return!!e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)};window.addEventListener("keydown",i=>{if(TM(i))return;wM.has(i.code)&&i.preventDefault();let e=!is.has(i.code);if(is.add(i.code),ru){ru(i.code,i);return}e&&ra&&su[i.code]&&(fr.push(su[i.code]),au.presses++)});window.addEventListener("keyup",i=>is.delete(i.code));window.addEventListener("blur",()=>{is.clear(),fr=[],li.x=li.y=0});window.addEventListener("contextmenu",i=>i.preventDefault());var sn={stats:au,touch:li,onKey(i){ru=i},setEnabled(i){ra=i,i||(fr=[])},press(i){ra&&(fr.push(i),au.presses++)},hold(i,e){e?is.add(i):is.delete(i)},frame(){let i=r=>r.some(a=>is.has(a)),e=(i(sa.right)?1:0)-(i(sa.left)?1:0)+li.x,t=(i(sa.down)?1:0)-(i(sa.up)?1:0)+li.y,n=Math.hypot(e,t);n>1&&(e/=n,t/=n);let s=fr;return fr=[],{mx:ra?e:0,mz:ra?t:0,press:s}}};function Ep(i){i.addEventListener("pointerdown",e=>{e.pointerType==="mouse"&&e.button===0&&sn.press("light")})}function Ap(i){let e=document.createElement("div");e.className="tpad",e.innerHTML='<div class="tbase"><div class="tknob"></div></div>';let t=document.createElement("div");t.className="tbtns",t.innerHTML=[["light","Strike"],["sunder","Sunder"],["tether","Tether"],["breaker","Break"],["dodge","Roll"]].map(([p,x])=>`<button class="tb tb-${p}" data-a="${p}" aria-label="${x}">${zo[p]}<b>${x}</b><em></em></button>`).join(""),i.append(e,t);let n=e.querySelector(".tbase"),s=e.querySelector(".tknob"),r=null,a=0,o=0,c=0,l=0,h=54,u=.12,d=()=>{n.style.left=`${a-c}px`,n.style.top=`${o-l}px`};e.addEventListener("pointerdown",p=>{if(r!==null)return;let x=e.getBoundingClientRect();c=x.left,l=x.top,r=p.pointerId,a=p.clientX,o=p.clientY,e.setPointerCapture(r),d(),n.classList.add("on")}),e.addEventListener("pointermove",p=>{if(p.pointerId!==r)return;let x=p.clientX-a,g=p.clientY-o,m=Math.hypot(x,g);m>h&&(a+=x*(1-h/m),o+=g*(1-h/m),x*=h/m,g*=h/m,d()),s.style.transform=`translate(${x}px, ${g}px)`;let _=Math.min(1,m/h);li.x=_<u?0:x/h,li.y=_<u?0:g/h});let f=p=>{p.pointerId===r&&(r=null,li.x=li.y=0,s.style.transform="",n.classList.remove("on"),n.style.left=n.style.top="")};e.addEventListener("pointerup",f),e.addEventListener("pointercancel",f);for(let p of t.querySelectorAll("button")){p.addEventListener("pointerdown",g=>{g.preventDefault(),p.classList.add("down"),sn.press(p.dataset.a)});let x=()=>p.classList.remove("down");p.addEventListener("pointerup",x),p.addEventListener("pointercancel",x),p.addEventListener("pointerleave",x)}return t}var Pe=null,Ui=null,Ho=null,Ot=null,cu=0,ki=i=>440*2**((i-69)/12);function Np(i,e){if(Pe)return;Pe=i,Ui=Pe.createGain(),Ui.gain.value=.62,Ui.connect(e);let t=Math.floor(Pe.sampleRate*2.2),n=Pe.createBuffer(2,t,Pe.sampleRate);for(let r=0;r<2;r++){let a=n.getChannelData(r);for(let o=0;o<t;o++)a[o]=(Math.random()*2-1)*(1-o/t)**2.6}let s=Pe.createConvolver();s.buffer=n,Ho=Pe.createGain(),Ho.gain.value=.32,Ho.connect(s),s.connect(Ui),EM()}function EM(){let i=new Set;for(let[n,s]of[[Fp,"town"],[pr,"climb"],[Op,"boss"]])for(let r=0;r<8;r++){let a=n.chords[r],o=n.bass[r];if(s==="town"){i.add(`${o}:0.3`),i.add(`${o+7}:0.3`);for(let c of[a[0],a[1],a[2],a[0]+12,a[1]+12])i.add(`${c+12}:0.55`)}else{for(let c of[a[0],a[2],a[0]+12])i.add(`${c+(s==="boss"?0:12)}:0.65`);i.add(`${o}:0.25`),i.add(`${o+12}:0.25`)}}for(let n of[65,69,72,77,81,60,64,67,72,76,79,84])i.add(`${n}:0.7`);for(let n of[69,65,62,57])i.add(`${n}:0.35`);let e=[...i].map(n=>n.split(":").map(Number)),t=()=>{for(let n=0;n<3&&e.length;n++){let[s,r]=e.shift();Up(s,r)}e.length&&setTimeout(t,30)};setTimeout(t,30)}var ou=new Map;function Up(i,e=.5,t=1.6){let n=`${i}:${e}`;if(ou.has(n))return ou.get(n);let s=Pe.sampleRate,r=Math.floor(s*t),a=Math.max(2,Math.round(s/ki(i))),o=Pe.createBuffer(1,r,s),c=o.getChannelData(0),l=0;for(let u=0;u<a;u++){let d=Math.random()*2-1;l=l+(d-l)*(.35+e*.6),c[u]=l}let h=.996-(i>76?.004:0);for(let u=a;u<r;u++)c[u]=h*.5*(c[u-a]+c[u-a-1<0?0:u-a-1]);return ou.set(n,o),o}function ss(i,e,t=1){let n=Pe.createGain();if(n.gain.value=e,i.connect(n),n.connect(Ot?Ot.gain:Ui),t){let s=Pe.createGain();s.gain.value=t,n.connect(s),s.connect(Ho)}return n}function aa(i,e,t=.3,n=.5){let s=Pe.createBufferSource();s.buffer=Up(i,n),ss(s,t),s.start(e)}function Rp(i,e,t,n=.12){let s=Pe.createOscillator(),r=Pe.createOscillator(),a=Pe.createGain(),o=Pe.createOscillator(),c=Pe.createGain();s.type="sine",s.frequency.value=ki(i),r.type="triangle",r.frequency.value=ki(i)*2,o.frequency.value=5.2,c.gain.value=ki(i)*.006,o.connect(c),c.connect(s.frequency),c.connect(r.frequency);let l=Pe.createGain();l.gain.value=.12,r.connect(l),l.connect(a),s.connect(a),a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(1,e+.07),a.gain.setValueAtTime(1,e+Math.max(.08,t-.12)),a.gain.exponentialRampToValueAtTime(1e-4,e+t+.18),ss(a,n,1.4);for(let h of[s,r,o])h.start(e),h.stop(e+t+.25)}function Cp(i,e,t,n=.035){let s=Pe.createBiquadFilter();s.type="lowpass",s.frequency.value=900;let r=Pe.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(1,e+Math.min(1.2,t*.4)),r.gain.setValueAtTime(1,e+t*.75),r.gain.exponentialRampToValueAtTime(1e-4,e+t+.8),s.connect(r),ss(r,n,1.2);for(let a of i)for(let o of[-6,6]){let c=Pe.createOscillator();c.type="sawtooth",c.frequency.value=ki(a),c.detune.value=o,c.connect(s),c.start(e),c.stop(e+t+1)}}function Vo(){if(Vo.b)return Vo.b;let i=Pe.sampleRate*.5,e=Pe.createBuffer(1,i,Pe.sampleRate),t=e.getChannelData(0);for(let n=0;n<i;n++)t[n]=Math.random()*2-1;return Vo.b=e}function Ip(i,e=.5){let t=Pe.createOscillator(),n=Pe.createGain();t.frequency.setValueAtTime(130,i),t.frequency.exponentialRampToValueAtTime(42,i+.22),n.gain.setValueAtTime(1,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.32),t.connect(n),ss(n,e,.1),t.start(i),t.stop(i+.35)}function kp(i,e,t,n){let s=Pe.createBufferSource(),r=Pe.createBiquadFilter(),a=Pe.createGain();s.buffer=Vo(),r.type="highpass",r.frequency.value=t,a.gain.setValueAtTime(1,i),a.gain.exponentialRampToValueAtTime(1e-4,i+n),s.connect(r),r.connect(a),ss(a,e,.4),s.start(i),s.stop(i+n+.02)}var AM=(i,e=.16)=>{kp(i,e,1400,.16);let t=Pe.createOscillator(),n=Pe.createGain();t.frequency.value=190,n.gain.setValueAtTime(.6,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.1),t.connect(n),ss(n,e*.6,.3),t.start(i),t.stop(i+.12)},RM=(i,e=.05)=>kp(i,e,6500,.05);function CM(i,e,t=.1){let n=Pe.createOscillator(),s=Pe.createOscillator(),r=Pe.createGain(),a=Pe.createGain();n.frequency.value=ki(i),s.frequency.value=ki(i)*3.5,r.gain.value=ki(i)*1.2,s.connect(r),r.connect(n.frequency),a.gain.setValueAtTime(1,e),a.gain.exponentialRampToValueAtTime(1e-4,e+1.6),n.connect(a),ss(a,t,1.5);for(let o of[n,s])o.start(e),o.stop(e+1.7)}var Fp={bpm:88,chords:[[53,57,60],[57,60,64],[58,62,65],[60,64,67],[53,57,60],[50,53,57],[58,62,65],[60,64,67]],bass:[41,45,46,48,41,50,46,48],melody:[[[0,72,1],[1,69,1],[2,67,.5],[2.5,69,1.5]],[[0,64,2],[2,67,1],[3,69,1]],[[0,65,1],[1,67,1],[2,69,2]],[[0,67,3],[3,64,1]],[[0,72,1],[1,74,1],[2,72,.5],[2.5,69,1.5]],[[0,69,2],[2,65,1],[3,67,1]],[[0,65,1.5],[1.5,62,.5],[2,65,1],[3,67,1]],[[0,64,2],[2,60,2]]]},pr={bpm:124,chords:[[62,65,69],[58,62,65],[60,64,67],[57,61,64],[62,65,69],[58,62,65],[60,64,67],[57,61,64]],bass:[38,34,36,33,38,34,36,33],melody:[[[0,74,1],[1,77,1],[2,76,.5],[2.5,74,1.5]],[[0,70,1],[1,74,1],[2,77,2]],[[0,76,1.5],[1.5,74,.5],[2,72,2]],[[0,73,2],[2,76,1],[3,69,1]],[[0,74,.5],[.5,77,.5],[1,81,1],[2,79,1],[3,77,1]],[[0,74,2],[2,77,2]],[[0,79,1],[1,76,1],[2,72,1],[3,76,1]],[[0,73,3],[3,76,1]]]},Op={...pr,bpm:138,chords:pr.chords.map(i=>i.map(e=>e+2)),bass:pr.bass.map(i=>i+2),melody:pr.melody.map(i=>i.map(([e,t,n])=>[e,t-10,n]))};function IM(i,e,t,n,s){let r=60/i.bpm,a=i.chords[t%8],o=i.bass[t%8];if(e==="town"){if(Cp(a,n,r*4),aa(o,n,.34,.3),aa(o+7,n+r*2,.22,.3),[a[0],a[1],a[2],a[0]+12,a[1]+12,a[2],a[1],a[0]].forEach((l,h)=>aa(l+12,n+h*r/2,.16+(h===0?.05:0),.55)),s%2===0)for(let[l,h,u]of i.melody[t%8])Rp(h,n+l*r,u*r*.95,.11);t%8===7&&CM(84,n+r*3.5,.05)}else{let c=e==="boss";Cp(a.map(l=>l-12),n,r*4,.03);for(let l=0;l<16;l++){let h=[a[0],a[2],a[0]+12,a[2]][l%4]+(c?0:12);aa(h,n+l*r/4,l%4===0?.15:.09,.65)}for(let l=0;l<8;l++)aa(o+(l%2?12:0),n+l*r/2,.3,.25);for(let l=0;l<4;l++)(l%2===0||c)&&Ip(n+l*r,c?.55:.45),l%2&&AM(n+l*r);if(c)for(let l=0;l<4;l++)Ip(n+(l+.5)*r,.25);for(let l=0;l<8;l++)RM(n+l*r/2,l%2?.04:.025);if(s%2===1||c)for(let[l,h,u]of i.melody[t%8])Rp(h,n+l*r,u*r*.9,c?.1:.09)}}var Go={},Pp={},Lp=1.1;function Dp(i){Go[i]||Pp[i]||(Pp[i]=!0,fetch(`music-${i}.mp3`).then(e=>e.ok?e.arrayBuffer():Promise.reject(e.status)).then(e=>new Promise((t,n)=>Pe.decodeAudioData(e,t,n))).then(e=>{let t=e.getChannelData(0),n=0,s=t.length-1;for(;n<8192&&Math.abs(t[n])<1e-4;)n++;for(;s>t.length-8192&&Math.abs(t[s])<1e-4;)s--;Go[i]={b:e,t0:n/e.sampleRate,len:(s-n)/e.sampleRate},Ot&&Ot.kind===i&&Ot.synth&&lu(i,!0)}).catch(()=>{}))}function PM(i,e){let t=Go[i],n=.04,s=a=>{let o=Pe.createBufferSource(),c=Pe.createGain();return o.buffer=t.b,o.connect(c),c.connect(e.gain),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(Lp,a+n),c.gain.setValueAtTime(Lp,a+t.len-n),c.gain.exponentialRampToValueAtTime(1e-4,a+t.len),o.start(a,t.t0,t.len+.01),e.srcs.push(o),e.srcs.length>3&&e.srcs.shift(),a+t.len-n};e.next=s(Pe.currentTime+.05),cu=setInterval(()=>{if(Ot===e)for(;e.next<Pe.currentTime+1.5;)e.next=s(e.next)},400)}function lu(i,e=!1){if(!Pe||Ot&&Ot.kind===i&&!e)return;if(Ot){let a=Ot;a.gain.gain.cancelScheduledValues(Pe.currentTime),a.gain.gain.setTargetAtTime(0,Pe.currentTime,.4),setTimeout(()=>{a.gain.disconnect();for(let o of a.srcs||[])try{o.stop()}catch{}},3e3)}if(Ot=null,clearInterval(cu),!i)return;let t=Pe.createGain();t.gain.value=0,t.connect(Ui),t.gain.setTargetAtTime(1,Pe.currentTime,.6),Dp(i);for(let a of["climb","boss"])a!==i&&setTimeout(()=>Dp(a),4e3);if(Go[i]){let a=Ot={kind:i,gain:t,srcs:[],synth:!1};PM(i,a);return}let n={town:Fp,climb:pr,boss:Op}[i],s=Ot={kind:i,gain:t,next:Pe.currentTime+.15,i:0,synth:!0},r=()=>{if(Ot!==s)return;let a=240/n.bpm;for(;s.next<Pe.currentTime+.6;)IM(n,i,s.i,s.next,Math.floor(s.i/8)),s.next+=a,s.i++};r(),cu=setInterval(r,200)}function Bp(i){Ui&&Pe&&Ui.gain.setTargetAtTime(i?.22:.62,Pe.currentTime,.25)}var zp=()=>Ot?Ot.kind+(Ot.synth?":code":":file"):"";var Ee=null,zn=null,du=!0,fu=!1,Yp="";function mr(){if(!Ee){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;Ee=new i,zn=Ee.createGain(),zn.gain.value=.5,zn.connect(Ee.destination)}return Ee}var Hp=()=>{zn&&zn.gain.setTargetAtTime(du&&!fu?.5:0,Ee.currentTime,.05)},gr=()=>du&&!fu&&mr()&&Ee.state==="running";function lt(i,e,t,n="square",s=.2,r=0){if(!gr())return;let a=Ee.currentTime+r,o=Ee.createOscillator(),c=Ee.createGain();o.type=n,o.frequency.setValueAtTime(i,a),o.frequency.exponentialRampToValueAtTime(Math.max(20,e),a+t),c.gain.setValueAtTime(s,a),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(c),c.connect(zn),o.start(a),o.stop(a+t+.02)}function un(i,e=.25,t=900){if(!gr())return;let n=Ee.currentTime,s=Math.floor(Ee.sampleRate*i),r=Ee.createBuffer(1,s,Ee.sampleRate),a=r.getChannelData(0);for(let h=0;h<s;h++)a[h]=(Math.random()*2-1)*(1-h/s);let o=Ee.createBufferSource(),c=Ee.createBiquadFilter(),l=Ee.createGain();o.buffer=r,c.type="lowpass",c.frequency.value=t,l.gain.value=e,o.connect(c),c.connect(l),l.connect(zn),o.start(n)}var pu={slash:["knifeSlice","knifeSlice2"],draw:["drawKnife1","drawKnife2","drawKnife3"],chop:["chop"],clang:["metalPot1","metalPot2","metalPot3"],click:["metalClick"],latch:["metalLatch"],cloth:["cloth1","cloth2","cloth3","cloth4"],step:["footstep00","footstep01","footstep02","footstep03","footstep04","footstep05"],coins:["handleCoins","handleCoins2"],soft:["impactSoft_medium_000","impactSoft_medium_001","impactSoft_medium_002","impactSoft_medium_003","impactSoft_medium_004"],wood:["impactWood_light_000","impactWood_light_001","impactWood_light_002","impactWood_light_003","impactWood_light_004"],metal:["impactMetal_medium_000","impactMetal_medium_001","impactMetal_medium_002","impactMetal_medium_003","impactMetal_medium_004"],punch:["impactPunch_medium_000","impactPunch_medium_001","impactPunch_medium_002","impactPunch_medium_003","impactPunch_medium_004"],punchHeavy:["impactPunch_heavy_000","impactPunch_heavy_001","impactPunch_heavy_002","impactPunch_heavy_003","impactPunch_heavy_004"],stone:["impactMining_000","impactMining_001","impactMining_002","impactMining_003","impactMining_004"],bell:["impactBell_heavy_000","impactBell_heavy_001","impactBell_heavy_002","impactBell_heavy_003","impactBell_heavy_004"],thud:["impactPlate_heavy_000","impactPlate_heavy_001","impactPlate_heavy_002","impactPlate_heavy_003","impactPlate_heavy_004"],stepStone:["footstep_concrete_000","footstep_concrete_001","footstep_concrete_002","footstep_concrete_003","footstep_concrete_004"],glass:["impactGlass_light_000","impactGlass_light_001","impactGlass_light_002","impactGlass_light_003","impactGlass_light_004"],open:["bookOpen"],close:["bookClose"],flip:["bookFlip1"],belt:["beltHandle1","clothBelt"],creak:["creak1"],door:["doorOpen_1"],uiClick:["click_002"],jLevel:["jingles_PIZZI04"],jWin:["jingles_PIZZI02"],jDown:["jingles_PIZZI01"],jTing:["jingles_PIZZI16"],chest_common:["jingles_PIZZI08"],chest_rare:["jingles_PIZZI10"],chest_epic:["jingles_PIZZI13"],chest_legend:["jingles_PIZZI15"]},Xo={},hu={},Vp=!1,$p=0,Wo="";function LM(){if(Vp||!mr())return;Vp=!0;let i=[...new Set(Object.values(pu).flat())],e=()=>{let t=i.shift();t&&fetch(`sfx-${t}.mp3`).then(n=>n.ok?n.arrayBuffer():Promise.reject(n.status)).then(n=>new Promise((s,r)=>Ee.decodeAudioData(n,s,r))).then(n=>{Xo[t]=n}).catch(()=>{$p++}).finally(()=>setTimeout(e,15))};for(let t=0;t<4;t++)e()}function Ze(i,e=.5,t=.06){if(!gr())return!1;let n=pu[i].filter(a=>Xo[a]);if(!n.length)return!1;let s=Ee.createBufferSource(),r=Ee.createGain();return s.buffer=Xo[n[Math.floor(Math.random()*n.length)]],s.playbackRate.value=1+(Math.random()*2-1)*t,r.gain.value=e,s.connect(r),r.connect(zn),s.start(),hu[i]=(hu[i]||0)+1,!0}var ui=null,qo="",uu=0;function DM(i=2){let e=Ee.sampleRate*i,t=Ee.createBuffer(1,e,Ee.sampleRate),n=t.getChannelData(0),s=0;for(let r=0;r<e;r++){let a=Math.random()*2-1;s=(s+.02*a)/1.02,n[r]=s*3.5}return t}function NM(i,e,t){let n=Ee.createOscillator(),s=Ee.createGain();n.type="sine",n.frequency.setValueAtTime(e,i),n.frequency.exponentialRampToValueAtTime(e*1.5,i+.05),n.frequency.exponentialRampToValueAtTime(e*1.1,i+.09),s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(t,i+.012),s.gain.exponentialRampToValueAtTime(1e-4,i+.1),n.connect(s),s.connect(ui.out),n.start(i),n.stop(i+.12)}function UM(i,e){for(let[t,n]of[[0,330],[.28,300],[.5,280]]){let s=Ee.createOscillator(),r=Ee.createGain(),a=Ee.createOscillator(),o=Ee.createGain();s.type="sine",s.frequency.value=n,a.frequency.value=26,o.gain.value=18,a.connect(o),o.connect(s.frequency),r.gain.setValueAtTime(1e-4,i+t),r.gain.exponentialRampToValueAtTime(e,i+t+.05),r.gain.exponentialRampToValueAtTime(1e-4,i+t+.22),s.connect(r),r.connect(ui.out),s.start(i+t),a.start(i+t),s.stop(i+t+.25),a.stop(i+t+.25)}}function kM(i,e){let t=Math.floor(Ee.sampleRate*.03),n=Ee.createBuffer(1,t,Ee.sampleRate),s=n.getChannelData(0);for(let c=0;c<t;c++)s[c]=(Math.random()*2-1)*Math.exp(-c/(t*.15));let r=Ee.createBufferSource(),a=Ee.createBiquadFilter(),o=Ee.createGain();r.buffer=n,a.type="highpass",a.frequency.value=1200,o.gain.value=e,r.connect(a),a.connect(o),o.connect(ui.out),r.start(i)}function Gp(i){if(Kp(),!mr())return;let e=Ee.createGain();e.gain.value=0,e.connect(zn);let t=Ee.createBufferSource();t.buffer=DM(),t.loop=!0;let n=Ee.createBiquadFilter(),s=Ee.createOscillator(),r=Ee.createGain();i==="town"?(n.type="bandpass",n.frequency.value=900,n.Q.value=.7,s.frequency.value=.35,r.gain.value=260):(n.type="lowpass",n.frequency.value=420,n.Q.value=.4,s.frequency.value=.08,r.gain.value=240),s.connect(r),r.connect(n.frequency),t.connect(n),n.connect(e),t.start(),s.start(),ui={out:e,nodes:[t,s],kind:i},qo=i,e.gain.linearRampToValueAtTime(i==="town"?.16:.13,Ee.currentTime+1.5),clearInterval(uu),uu=setInterval(()=>{if(!ui||!gr())return;let a=Ee.currentTime+Math.random()*.4;if(ui.kind==="town"){if(Math.random()<.35){let o=2600+Math.random()*1400;for(let c=0;c<2+Math.floor(Math.random()*3);c++)NM(a+c*.13,o*(1+(Math.random()-.5)*.1),.05)}Math.random()<.08&&UM(a,.07)}else for(let o=0;o<3+Math.floor(Math.random()*5);o++)kM(a+Math.random()*.9,.05+Math.random()*.06)},1e3)}var Wp=!1;function Xp(){!mr()||Ee.state!=="running"||(Wp||(Np(Ee,zn),Wp=!0),lu(Yp))}function Kp(){if(clearInterval(uu),!ui)return;let i=ui;ui=null,qo="";try{i.out.gain.cancelScheduledValues(Ee.currentTime),i.out.gain.setValueAtTime(i.out.gain.value,Ee.currentTime),i.out.gain.linearRampToValueAtTime(0,Ee.currentTime+.6)}catch{}setTimeout(()=>{for(let e of i.nodes)try{e.stop()}catch{}i.out.disconnect()},700)}var qp=0,Ne={ambience(i){if(i!==qo){if(!i){Kp();return}mr()&&Ee.state==="running"?Gp(i):Wo=i}},unlock(){let i=()=>{Wo&&(Gp(Wo),Wo=""),Xp()};mr()&&Ee.state!=="running"?Ee.resume().then(i).catch(()=>{}):i(),LM()},music(i){Yp=i,Xp()},duck(i){Bp(i)},debug(){return{music:zp(),ambience:qo,state:Ee?Ee.state:"none",files:new Set(Object.values(pu).flat()).size,loaded:Object.keys(Xo).length,failed:$p,played:{...hu}}},setEnabled(i){du=i,Hp()},setForcedMute(i){fu=i,Hp()},click(){Ze("uiClick",.3,.05)},swing(i){if(i==="tether"){Ze("click",.35,.1),lt(330,990,.18,"triangle",.06);return}if(i==="breaker"||i==="giantfall"){Ze("draw",.55,.05),un(.22,.14,900);return}Ze("slash",i==="light3"||i==="sunder"?.55:.4,.12)||un(.09,.12,2400)},hit(i,e){let t=Ee?Ee.currentTime:0;t-qp<.03||(qp=t,lt(150,60,.09,"sine",.16),Ze("stone",.55,.1),Ze("chop",.3,.12),i==="sunder"&&(Ze("glass",.32,.08),lt(1500,700,.12,"square",.03)),i==="tether"&&(Ze("latch",.4,.05),lt(440,660,.25,"sine",.05)),i==="breaker"&&(Ze("punchHeavy",.6,.04),Ze("thud",.5,.04),e&&(Ze("bell",.35,.03),lt(220,880,.3,"triangle",.08))),i==="giantfall"&&(lt(70,30,.9,"sine",.42),un(.6,.22,320),Ze("thud",.9,.02),Ze("bell",.5,.01)))},whiff(){un(.05,.04,3e3)},status(i){i==="cracked"?(Ze("glass",.25,.1),lt(900,1800,.12,"sine",.05)):(Ze("click",.3,.05),lt(520,780,.2,"triangle",.05))},wind(i){gr()&&(i==="slam"?(lt(60,150,.7,"sawtooth",.06),Ze("clang",.12,.2)):i==="sweep"?(lt(90,210,.6,"sawtooth",.05),un(.5,.06,700)):(lt(50,120,.8,"square",.04),un(.7,.08,300)))},strike(i){i==="slam"?(lt(90,35,.45,"sine",.35),un(.35,.3,380),Ze("thud",.8,.05),Ze("stone",.5,.1)):i==="sweep"?(un(.3,.22,1200),Ze("stone",.4,.15)):(un(.5,.25,260),Ze("stepStone",.6,.1))},wallHit(){lt(70,35,.5,"sine",.3),Ze("stone",.7,.05),Ze("thud",.6,.05)},topple(){gr()&&(lt(55,28,1.6,"sine",.45),un(1.2,.22,240),Ze("thud",1,0),setTimeout(()=>Ze("bell",.55,0),180),setTimeout(()=>Ze("stone",.6,.05),380))},getup(){lt(60,110,.7,"sawtooth",.05),Ze("stone",.35,.1)},roar(){Ze("bell",.5,0),lt(110,330,.8,"sawtooth",.08),lt(70,40,1,"sine",.3),un(.8,.12,500)},perfect(){Ze("glass",.4,.05),lt(660,1320,.25,"triangle",.16),lt(990,1980,.25,"triangle",.09,.06)},dodge(){Ze("cloth",.6,.1)||un(.12,.14,900)},hurt(){Ze("punchHeavy",.7,.06)?lt(220,90,.16,"triangle",.08):lt(300,80,.2,"sawtooth",.16)},step(i=.16){Ze("stepStone",i,.08)},giantStep(i=.35){Ze("thud",i,.1),lt(55,40,.18,"sine",i*.4)},power(){lt(1175,1760,.12,"sine",.07),lt(1568,2349,.14,"triangle",.04,.05)},foeWind(){lt(320,620,.18,"triangle",.035)},foeDown(){Ze("stone",.45,.15),un(.18,.1,600)},combo(i){lt(660+i*20,990+i*30,.08,"triangle",.035)},win(){Ze("jWin",.55,0)||[523,659,784,1047,1319].forEach((i,e)=>lt(i,i,.22,"triangle",.17,e*.1))},down(){Ze("jDown",.5,0)||lt(400,60,.5,"triangle",.18)},ting(){Ze("jTing",.4,0)||lt(1568,1568,.12,"sine",.14)}};var kt=null,Nn=!1,Yo="none",mu=!1;function oa(i){if(Nn)try{i()}catch{}}var xu=!1,gu=-1e9,_u=null;function Jp(){if(_u=null,xu===mu)return;let i=performance.now();if(i-gu<1100){_u=setTimeout(Jp,1100-(i-gu));return}mu=xu,gu=i,oa(()=>mu?kt.game.gameplayStart():kt.game.gameplayStop())}function Zp(i){xu=i,_u||Jp()}var vn={async init(){try{window.CrazyGames&&window.CrazyGames.SDK&&(kt=window.CrazyGames.SDK,await Promise.race([kt.init(),new Promise((i,e)=>setTimeout(()=>e(new Error("timeout")),5e3))]),Yo=kt.environment,Nn=Yo==="local"||Yo==="crazygames")}catch{Nn=!1}return Nn},get env(){return Yo},storage(){try{return Nn&&kt.data?kt.data:null}catch{return null}},loadingStart(){oa(()=>kt.game.loadingStart())},loadingStop(){oa(()=>kt.game.loadingStop())},gameplayStart(){Zp(!0)},gameplayStop(){Zp(!1)},happytime(){oa(()=>kt.game.happytime())},muted(){try{return!!(Nn&&kt.game.settings&&kt.game.settings.muteAudio)}catch{return!1}},onSettings(i){oa(()=>kt.game.addSettingsChangeListener(i))},deviceType(){try{return Nn?kt.user.systemInfo.device.type:null}catch{return null}},locale(){try{return Nn?kt.user.systemInfo.locale:null}catch{return null}},async hasAdblock(){if(!Nn)return!1;try{return!!await Promise.race([kt.ad.hasAdblock(),new Promise(i=>setTimeout(()=>i(!1),3e3))])}catch{return!1}},rewarded(i){return new Promise(e=>{if(!Nn){e({ok:!1,code:"noSdk"});return}let t=!1,n=s=>{t||(t=!0,e(s))};try{kt.ad.requestAd("rewarded",{adStarted:()=>{i&&i()},adFinished:()=>n({ok:!0}),adError:s=>n({ok:!1,code:s&&s.code||"other"})})}catch{n({ok:!1,code:"other"})}})},midgame(i){return new Promise(e=>{if(!Nn){e(!1);return}let t=!1,n=!1,s=r=>{n||(n=!0,e(r))};setTimeout(()=>{t||s(!1)},8e3);try{kt.ad.requestAd("midgame",{adStarted:()=>{t=!0,i&&i()},adFinished:()=>s(!0),adError:()=>s(!1)})}catch{s(!1)}})}};var Mn=(i,e,t="")=>{let n=document.createElement(i);return e&&(n.className=e),n.innerHTML=t,n},FM=[["light","Strike",""],["sunder","Sunder","crack"],["tether","Tether","hold"],["breaker","Break","spend"],["dodge","Roll",""]];function jp(i,{touch:e,stages:t=null}){let n=Mn("div","gbar",`<div class="gname"><b></b><span></span></div>
    <div class="bar hp"><i class="trail"></i><i class="fill"></i></div>
    <div class="bar bal"><i class="fill"></i><em>BALANCE</em></div>
    <div class="chips"></div>`),s=Mn("div","hbar",'<div class="lab">HP <b></b></div><div class="bar mine"><i class="trail"></i><i class="fill"></i></div><div class="powers"></div>'),r=Mn("div","keys"+(e?" hide":""),FM.map(([N,D,G])=>`<div class="key k-${N}" data-a="${N}"><kbd>${hi[N]}</kbd>${zo[N]}<b>${D}</b><small>${G}</small><i class="cd"></i></div>`).join("")),a=Mn("div","combo","<b>0</b><span>HITS</span><em></em>"),o=Mn("div","banner"),c=Mn("div","coach","<b>Elara</b><span></span>"),l=Mn("div","nums"),h=Mn("div","flash"),u=Mn("div","prog"+(t?"":" hide"),t?t.map((N,D)=>`<i class="s-${N.type}" data-i="${D}" title="${N.type==="giant"?N.giant:N.name||"power"}"></i>`).join(""):""),d=Mn("button","pausebtn","II");d.setAttribute("aria-label","Pause");let f=Mn("div","modal hide");i.append(h,l,n,s,r,a,o,c,u,d,f);let p=(N,D)=>N.querySelector(D),x=p(n,".hp .fill"),g=p(n,".hp .trail"),m=p(n,".bal .fill"),_=p(n,".chips"),v=p(n,".bal"),y=p(s,".fill"),C=p(s,".trail"),T=p(s,".lab b"),A=1,R=1,S=0,b=0,L=0,W="",P=[];return{setGiant(N,D){p(n,".gname b").textContent=N,p(n,".gname span").textContent=D},onPause(N){d.onclick=N},showBars(N){for(let D of[n,s,r,a])D.classList.toggle("off",!N)},setPowers(N){let D=p(s,".powers");D.innerHTML=N.map(G=>`<i data-id="${G.id}" title="${G.text}">${G.name}</i>`).join("")},powerPulse(N){let D=p(s,`.powers [data-id="${N}"]`);D&&(D.classList.remove("fire"),D.offsetWidth,D.classList.add("fire"))},setStage(N){!t||!N.run||u.querySelectorAll("i").forEach((D,G)=>{D.classList.toggle("done",G<N.run.stage),D.classList.toggle("now",G===N.run.stage)})},banner(N,D="",G="",z=1.6){o.className=`banner show ${G}`,o.innerHTML=`<b>${N}</b>${D?`<span>${D}</span>`:""}`,b=z},say(N,D=2.8){p(c,"span").textContent=N,c.classList.add("show"),L=D},flash(N="#fff",D=.5){h.style.background=N,h.style.transition="none",h.style.opacity=D,requestAnimationFrame(()=>{h.style.transition="opacity .35s",h.style.opacity=0})},num(N,D,G=""){P.length>24&&P.shift().e.remove();let z=Mn("div",`num ${G}`,D);l.append(z),P.push({e:z,pos:{...N},t:0,life:G.includes("big")?1.1:.75})},comboPulse(N,D){let G=p(a,"em");G.textContent=N,G.className=D,G.style.animation="none",G.offsetWidth,G.style.animation=""},update(N,D,G){let z=N.giant,ee=N.hero;if(n.classList.toggle("hide",!z||z.state==="fallen"),z){let se=z.hp/z.max;A=Math.max(se,A-D*.35),x.style.width=`${se*100}%`,g.style.width=`${A*100}%`;let j=z.state==="toppled"?z.t/N.data.rules.topple.time:z.balance/z.balMax;m.style.width=`${j*100}%`,v.classList.toggle("down",z.state==="toppled"),v.classList.toggle("near",z.state!=="toppled"&&j>.75),p(v,"em").textContent=z.state==="toppled"?"TOPPLED":"BALANCE";let he=[];z.status.cracked.n&&he.push(`<i class="c-cracked">CRACKED${z.status.cracked.n>1?" \xD7"+z.status.cracked.n:""}</i>`),z.status.bound.n&&he.push('<i class="c-bound">BOUND</i>');let me=he.join("");me!==W&&(_.innerHTML=me,W=me)}let ie=ee.hp/ee.max;R=Math.max(ie,R-D*.5),y.style.width=`${ie*100}%`,C.style.width=`${R*100}%`,T.textContent=ee.hp,s.classList.toggle("low",ie<=.3);let re=N.data.moves;for(let se of["sunder","tether","breaker"]){let j=ee.cd[se]/re[se].cd;p(r,`.k-${se} .cd`).style.height=`${Math.max(0,j)*100}%`}let te=!!z&&z.status.cracked.n+z.status.bound.n>0,ge=!!z&&z.state==="toppled"&&!z.finisherUsed,Y=p(r,".k-breaker");if(Y.classList.toggle("glow",te||ge),p(Y,"b").textContent=ge?"FALL!":"Break",p(r,".k-dodge .cd").style.height=`${Math.max(0,ee.dodgeCd/re.dodge.cd)*100}%`,e)for(let se of["sunder","tether","breaker","dodge"]){let j=i.querySelector(`.tb-${se}`);if(!j)continue;let he=se==="dodge"?ee.dodgeCd/re.dodge.cd:ee.cd[se]/re[se].cd;j.querySelector("em").style.height=`${Math.max(0,he)*100}%`,se==="breaker"&&(j.classList.toggle("glow",te||ge),j.querySelector("b").textContent=ge?"FALL!":"Break")}let H=N.combo;H.hits>=2&&(S=1.2,p(a,"b").textContent=H.hits),S-=D,a.classList.toggle("show",S>0),b-=D,b<=0&&o.classList.remove("show"),L-=D,L<=0&&c.classList.remove("show");for(let se=P.length-1;se>=0;se--){let j=P[se];j.t+=D;let he=j.t/j.life;if(he>=1){j.e.remove(),P.splice(se,1);continue}let me=G(j.pos.x,j.pos.y+he*.9,j.pos.z);j.e.style.transform=`translate(${me.x}px, ${me.y}px) translate(-50%, -50%) scale(${he<.12?.6+he*4:1})`,j.e.style.opacity=he>.7?(1-he)/.3:1}},modal(N,D={}){return f.innerHTML=`<div class="card">${N}</div>`,f.classList.remove("hide"),f},closeModal(){f.classList.add("hide"),f.innerHTML=""},get modalOpen(){return!f.classList.contains("hide")}}}function Qp(i,e,t,n=()=>"all"){let s=new Set,r={},a=new Set,o={},c=0,l=0,h={seq:"",n:0},u=0,d=!1,f=m=>m.replace(/\{key:(\w+)\}/g,(_,v)=>v==="move"?t.move:`[${t[v]||v}]`);function p(m,_={}){var A;let v=i.events[m];if(!v)return!1;let y=n();if(y==="off"||y==="key"&&!v.urgent||l>0&&!v.urgent&&!_.force||!_.force&&c-((A=o[m])!=null?A:-1e9)<(i.repeatGap||0))return!1;o[m]=c;let C=v.lines.length,T=Math.floor(Math.random()*C);return C>1&&T===r[m]&&(T=(T+1)%C),r[m]=T,l=i.gap,e.say(f(v.lines[T]),i.show),!0}let x=(m,_)=>s.has(m)?!1:p(_)?(s.add(m),!0):!1,g=(m,_)=>{a.has(m)||p(_)&&a.add(m)};return{say:p,handle(m,_){switch(m.t){case"flow":if(m.to==="intro"&&(a.clear(),u=0,d=!1,h={seq:"",n:0}),m.to==="fight"&&m.from==="intro"&&(s.has("fought")?p(_.mode==="run"?"runAgain":"intro",{force:!0}):(s.add("fought"),p("firstFight",{force:!0}))),m.to==="won"&&(p(s.has("won")?"win":"winFirst",{force:!0}),s.add("won")),m.to==="pick"&&x("picked","pickFirst"),m.to==="down"){let v=_.giant;v&&v.hp/v.max<=.15?p("close",{force:!0}):p(_.downsInRow===1?"down1":_.downsInRow===2?"down2":"downMore",{force:!0})}break;case"wind":x("wind","firstWind");break;case"hurt":!x("hurt","firstHurt")&&m.hp>0&&m.hp<=30&&g("low","lowHp");break;case"perfect":x("perfect","firstPerfect");break;case"status":m.on&&x(m.name,m.name==="cracked"?"firstCracked":"firstBound");break;case"hit":m.consumed&&Object.keys(m.consumed).length&&x("spend","firstSpend"),m.move==="giantfall"&&_.giant.toppleQ&&_.giant.toppleQ.hits>=12&&p("finisherBig");break;case"swing":["sunder","tether","breaker"].includes(m.move)&&u++;break;case"topple":x("topple","firstTopple");break;case"phase":p("phase2");break;case"stage":m.giant?(p(m.giant==="cairn"?s.has("cairn")?"cairnAgain":"cairnIntro":s.has("hollen")?"hollenAgain":"hollenIntro",{force:!0}),s.add(m.giant)):m.i>0&&p(m.mood===2?"swarm":"waveNext");break;case"foeWind":x("foeWind","firstFoeWind");break;case"foeDown":m.how==="crush"||m.how==="quake"?x("crush","firstCrush")||p("crush"):g("firstKill","firstKill");break;case"spawn":_.giant&&_.giant.state!=="fallen"&&p("adds");break;case"fallen":m.last||p(m.id==="cairn"?"cairnRest":"win");break;case"comboEnd":if(!m.seq)break;m.seq===h.seq?h.n++:h={seq:m.seq,n:1},h.n>=3&&g("repeat","repeat");break;default:break}},tick(m,_){if(l-=m,c+=m,_.flow.state!=="fight")return;_.time>14&&u===0&&_.giant&&g("noSkills","noSkills");let v=_.giant;v&&!d&&v.state!=="toppled"&&v.balance/v.balMax>.85&&(d=!0,x("teeter","teeter"))}}}var ls=new URLSearchParams(location.search),_r=ls.has("capture"),OM=_r||ls.has("test"),yu=ls.get("bot"),cm=ls.has("holdpick"),rs=matchMedia("(pointer: coarse)").matches||ls.has("touch"),lm=matchMedia("(prefers-reduced-motion: reduce)").matches,BM={moves:Hh,rules:Vh,giants:jt,foes:Lf,powers:or,run:Lo},em={all:"all hints",key:"key moments",off:"off"},Mr=ls.has("lab")?"lab":"run",zM=rs?{light:"Strike",sunder:"Sunder",tether:"Tether",breaker:"Break",dodge:"Roll"}:hi,hm="giantfall_v1",um=()=>vn.storage()||(()=>{try{return window.localStorage}catch{return null}})(),yt={sound:!0,shake:lm?"less":"full",elara:"all",fights:0,wins:0};function HM(){try{let i=um(),e=i&&i.getItem(hm);e&&(yt={...yt,...JSON.parse(e)})}catch{}}function Ko(){try{let i=um();i&&i.setItem(hm,JSON.stringify(yt))}catch{}}var as,Hn,Bt,br,ca,la,Eu,ft,Ue,Au,Ie,Jo=null,$o=()=>Ie.giant?la[Ie.giant.id]:null,Fi=!1,vr=!1,os=0,tm=0,yr=0,Zo=0,nm=0,ha=!1,im=new I(0,12,16),sm=new I(0,1,0),vu=new I,rm=document.getElementById("ui");function VM(i){return new Promise((e,t)=>{let n=new Image;n.onload=()=>e(n),n.onerror=t,n.src=i})}function Mu(i,e){let t=document.getElementById("lfill"),n=document.getElementById("ltext");t&&(t.style.width=`${Math.round(i*100)}%`),n&&e&&(n.textContent=e)}function am(){let i=innerWidth,e=innerHeight;as.setSize(i,e,!1),Bt.aspect=i/e,Bt.fov=i/e<1?62:i/e<1.4?50:40,Bt.updateProjectionMatrix()}function GM(i,e,t){return vu.set(i,e,t).project(Bt),{x:(vu.x+1)/2*innerWidth,y:(1-vu.y)/2*innerHeight}}var bn=(i,e=null)=>{yr=Math.max(yr,i),Zo=e},bu={v:1},Su=new Set,om={};function WM(i){let e=Ie.giant,t=Ie.hero;switch(Au.handle(i,Ie),i.t){case"swing":Ne.swing(i.move);break;case"hit":{Ne.hit(i.move,i.consumed&&Object.keys(i.consumed).length);let n=i.target==="giant",s=n?e.radius:.5,r=n?1.4+Math.random()*.8:.7,a=Math.atan2(t.x-i.x,t.z-i.z),o=i.x+Math.sin(a)*s*.9,c=i.z+Math.cos(a)*s*.9,l=i.move==="breaker"||i.move==="giantfall";Su.has(i.move+Ie.combo.hits)||(Su.add(i.move+Ie.combo.hits),i.move==="tether"?ft.beam(t,i):i.move==="sunder"?ft.chop(t):ft.slash(t,i.move)),i.move==="sunder"?ft.cracks(o,c,a):i.move==="tether"&&ft.bind(i.x,n?1.2:.7,i.z,n?e.radius*.9:.6),ft.sparks(o,r,c,a,l?18:n?9:6,i.move==="sunder"?"#ff9a4a":"#ffe2a8"),l&&n&&(ft.shock(i.x,i.z,i.move==="giantfall"?6:3.2),ft.flash(o,1.6,c,"#ffd36b",3)),n&&$o()&&$o().hit(i,t.face),Ue.num({x:o,y:n?2.6:1.6,z:c},i.dmg,l&&n?"big":i.toppled?"down":n?"":"small"),i.consumed&&Object.keys(i.consumed).length?(Ue.comboPulse("SPENT!","spent"),Ue.flash("#ffd36b",.18)):i.repeat?Ue.comboPulse("REPEAT \xD70.6","repeat"):i.variety>bu.v&&Ue.comboPulse(`MIX \xD7${i.variety}`,"mix"),bu.v=i.variety,bn(l?.55:.12+(i.move==="sunder"?.08:0),a+Math.PI),i.move==="giantfall"&&(Ue.flash("#fff6d8",.55),bn(.9)),Ie.combo.hits>=5&&Ie.combo.hits%5===0&&Ne.combo(Ie.combo.hits);break}case"whiff":i.move==="tether"?ft.beam(t,{x:t.x+Math.sin(t.face)*6.5,z:t.z+Math.cos(t.face)*6.5}):i.move==="sunder"?ft.chop(t):ft.slash(t,i.move),Ne.whiff();break;case"cancel":break;case"comboEnd":bu.v=1,Su.clear();break;case"status":i.on&&i.target==="giant"&&e&&(Ne.status(i.name),Ue.num({x:e.x,y:3.6,z:e.z},i.name==="cracked"?"CRACKED":"BOUND",`tag ${i.name}`));break;case"wind":Ne.wind(i.atk);break;case"strike":{Ne.strike(i.atk),$o()&&$o().strike(),i.atk==="slam"?(ft.shock(i.x,i.z,2.6,"#ffb08a"),ft.dust(i.x,i.z,10,1.6),bn(.5)):i.atk==="sweep"?(ft.shock(e.x,e.z,4.2,"#ffc9a8",.35),bn(.25)):bn(.3);break}case"wallHit":Ne.wallHit(),ft.dust(i.x,i.z,14,2),bn(.6);break;case"topple":{Ne.topple(),Ne.duck(!0),wu(1.6,()=>Ne.duck(!1));let n=e.x+Math.sin(i.dir)*1.6,s=e.z+Math.cos(i.dir)*1.6;ft.dust(n,s,22,2.8),ft.shock(n,s,7,"#ffe7b0",.7),bn(1),Ue.flash("#ffe7b0",.35),Ue.banner("TOPPLED!",rs?"Tap Break \u2014 GIANTFALL":`Press [${hi.breaker}] \u2014 GIANTFALL`,"topple",2.2);break}case"getup":Ne.getup(),ft.dust(e.x,e.z,8,1.5);break;case"phase":Ne.roar(),Ue.banner(`${jt[e.id].name.toUpperCase()} AWAKENS`,"He strikes faster now","phase",2),bn(.45);break;case"stage":{br.setZone(i.mood===2?2:1),Ne.music(i.type==="giant"?"boss":"climb"),i.giant?(Ue.setGiant(jt[i.giant].name,jt[i.giant].title),Ue.banner(jt[i.giant].name.toUpperCase(),jt[i.giant].title,"intro",2.2),Ne.roar(),bn(.4)):Ue.banner(i.name,"","stage",1.6),Ue.setStage(Ie);break}case"spawn":Ne.getup();break;case"foeWind":Ne.foeWind();break;case"lunge":Ne.dodge();break;case"throw":Ne.swing("light1");break;case"foeDown":ft.dust(i.x,i.z,i.how==="crush"||i.how==="quake"?8:5,.6),Ne.foeDown(),(i.how==="quake"||i.how==="crush")&&Ue.num({x:i.x,y:1.4,z:i.z},"CRUSHED","tag crushed");break;case"heal":Ue.num({x:t.x,y:2.2,z:t.z},`+${i.n}`,"heal"),Ne.ting();break;case"pull":ft.dust(t.x,t.z,4,.4);break;case"giantReady":break;case"offer":break;case"picked":Ne.ting(),i.heal&&Ue.num({x:t.x,y:2.2,z:t.z},`+${i.heal}`,"heal"),Ue.setPowers(Ie.run.picks.map(n=>or.cards.find(s=>s.id===n)));break;case"power":{Ue.powerPulse(i.id);let n=Ie.realTime;if(n-(om[i.id]||-9)<2.5)break;om[i.id]=n;let s=or.cards.find(r=>r.id===i.id);Ue.num({x:t.x,y:2.9,z:t.z},s.name,`tag power${i.hurt?" cost":""}`),Ne.power();break}case"perfect":Ne.perfect(),ft.flash(t.x,1,t.z,"#9ff0ff",3,.3),Ue.num({x:t.x,y:2.3,z:t.z},"PERFECT","tag perfect"),bn(.15);break;case"dodge":Ne.dodge(),ft.dust(t.x,t.z,3,.3);break;case"hurt":Ne.hurt(),ca.hurt(),Ue.flash("#ff3a2a",.32),Ue.num({x:t.x,y:2.2,z:t.z},`-${i.dmg}`,"hurt"),bn(.45);break;case"fallen":Ne.duck(!0),ft.motes(e.x,e.z),ft.dust(e.x,e.z,26,3),bn(1),Ue.banner(`${jt[e.id].name.toUpperCase()} RESTS`,i.last?"":"The terrace goes quiet\u2026","win",3),i.last&&ca.win(),wu(.9,()=>{i.last?Ne.win():Ne.ting(),Ne.duck(!1)});break;case"flow":i.to==="fight"&&(vn.gameplayStart(),Mr==="lab"&&Ne.music("boss"),Ue.showBars(!0),i.from==="pick"&&(sn.onKey(null),Ue.closeModal())),i.to==="pick"&&(vn.gameplayStop(),(!Jo||cm)&&qM()),i.to==="intro"&&(Mr==="lab"?Ue.banner(jt[Ie.giantId].name.toUpperCase(),jt[Ie.giantId].title,"intro",2):(br.setZone(1),Ue.banner("THE DAWN TERRACES","Bring the Wardens to rest","intro",2),Ne.music("climb")),Ue.showBars(!0),Ue.setStage(Ie),Ue.setPowers([]),ha=!1),(i.to==="won"||i.to==="down")&&(yt.fights++,i.to==="won"&&yt.wins++,Ko(),i.to==="down"&&(Ne.down(),Ue.banner("FALLEN","","down",2)),wu(i.to==="won"?2.6:1.5,()=>{vn.gameplayStop(),YM()}));break;default:break}}function dm(){return rs?'<p class="small">Left side: move \xB7 <b>Strike</b> \xB7 <b>Sunder</b> cracks \xB7 <b>Tether</b> holds \xB7 <b>Break</b> spends \xB7 <b>Roll</b> dodges</p>':`<div class="ctl"><span><kbd>WASD</kbd> move</span><span><kbd>${hi.light}</kbd> / click strike</span><span><kbd>${hi.sunder}</kbd> Sunder \u2014 crack</span><span><kbd>${hi.tether}</kbd> Tether \u2014 hold</span><span><kbd>${hi.breaker}</kbd> Break \u2014 spend</span><span><kbd>SPACE</kbd> roll</span><span><kbd>ESC</kbd> pause</span></div>`}function Ru(i){let e=document.querySelector(".modal");for(let[t,n]of Object.entries(i)){let s=e.querySelector(t);s&&(s.onclick=r=>{r.preventDefault(),Ne.click(),n()})}}function XM(){Ue.modal(`<h1>GIANT<span>FALL</span></h1><p class="promise">Mix your skills, break their balance, and bring down giants a hundred times your size.</p>${dm()}<button class="go" id="go">Begin</button><p class="small">${Mr==="run"?"One run: about 4 minutes \xB7 two Wardens to bring down":"Fight lab \xB7 Hollen only"}</p>`);let i=()=>{Fi||(Fi=!0,sn.onKey(null),Ue.closeModal(),Ne.unlock(),Ne.setEnabled(yt.sound),Ne.ambience("tower"),os=0)};Ru({"#go":i}),sn.onKey(e=>{e!=="Escape"&&i()})}function qM(){let i=Ie.run.offer;Ue.modal(`<h2>Choose a power</h2><p class="small">Elara hums while you rest (+${Lo.pickHeal} HP). One of three:</p>
    <div class="cards">${i.map((t,n)=>`<button class="pcard" data-k="${n}"><kbd>${n+1}</kbd><b>${t.name}</b><span>${t.text}</span></button>`).join("")}</div>`);let e=t=>{Ie.choose(t)&&Ne.click()};document.querySelectorAll(".pcard").forEach(t=>{t.onclick=()=>e(+t.dataset.k)}),sn.onKey(t=>{let n=["Digit1","Digit2","Digit3"].indexOf(t);n>=0&&e(n)})}function YM(){if(ha)return;ha=!0;let i=Ie.log[Ie.log.length-1],e=i.result==="won",t=Ie.assistOffer(),n=!e&&i.giantHpPct!=null&&i.giantHpPct<=15,s=Mr==="run",r=l=>`${Math.floor(l/60)}:${String(Math.floor(l%60)).padStart(2,"0")}`,a=s?Math.round(100*(i.stage+(i.giantHpPct!=null?1-i.giantHpPct/100:0))/i.stages):0,o=s?i.powers.map(l=>(or.cards.find(h=>h.id===l)||{}).name).filter(Boolean):[];Ue.modal(`<h2>${e?s?"The Terraces sleep.":"Hollen rests.":n?"So close.":"Get up, Breaker."}</h2>
    ${s&&!e?`<p class="small">You fell at <b>${i.stageName}</b>${i.giantHpPct!=null?` \u2014 ${i.giant==="hollen"?"Hollen":"Cairn"} had ${i.giantHpPct}% left`:""}.</p><div class="runbar"><i style="width:${a}%"></i></div>`:""}
    <div class="stats">
      ${e?`<div><b>${s?r(i.realSec):i.time+"s"}</b><span>time</span></div><div><b>${i.heroHp}</b><span>HP left</span></div>`:i.giantHpPct!=null&&!s?`<div><b>${i.giantHpPct}%</b><span>Hollen's strength left</span></div>`:""}
      <div><b>${i.topples}</b><span>topples</span></div>${s?`<div><b>${i.crushes}</b><span>crushed</span></div>`:""}<div><b>${i.bestCombo}</b><span>best combo</span></div><div><b>${i.perfects}</b><span>perfect rolls</span></div>
    </div>
    ${o.length?`<p class="small">Powers: ${o.join(" \xB7 ")}</p>`:""}
    ${t?`<label class="assist"><input type="checkbox" id="assist" ${Ie.assistPct?"checked":""}> Elara's Shield: take ${t}% less damage <small>(your choice \u2014 it never weakens Hollen)</small></label>`:""}
    <button class="go" id="again">${s?"Run again":"Fight again"}</button>
    <button class="ghost" id="report">Copy play report</button><p class="small" id="rep"></p>`),Ru({"#again":Tu,"#report":()=>{let l=JSON.stringify(Ie.report());(navigator.clipboard?navigator.clipboard.writeText(l):Promise.reject()).then(()=>{document.getElementById("rep").textContent="Copied. Paste it to whoever asked you to play."}).catch(()=>{document.getElementById("rep").textContent=l})}});let c=document.getElementById("assist");c&&(c.onchange=()=>Ie.setAssist(c.checked?t:0)),sn.onKey(l=>{(l==="Enter"||l==="Space")&&Tu()})}function Tu(){sn.onKey(null),Ue.closeModal(),Ie.reset(),os=0}function cs(i){if(!(!Fi||ha||vr===i))if(vr=i,i){vn.gameplayStop(),Ne.duck(!0);let e=Ie.run?Ie.run.picks.map(t=>or.cards.find(n=>n.id===t)):[];Ue.modal(`<h2>Paused</h2>${e.length?`<div class="plist"><b>Your powers</b>${e.map(t=>`<div><b>${t.name}</b>${t.text}</div>`).join("")}</div>`:""}${dm()}<div class="row"><button class="ghost" id="snd">Sound: ${yt.sound?"on":"off"}</button><button class="ghost" id="shk">Screen shake: ${yt.shake}</button><button class="ghost" id="ela">Elara: ${em[yt.elara]}</button></div><button class="go" id="res">Resume</button>`),Ru({"#res":()=>cs(!1),"#snd":()=>{yt.sound=!yt.sound,Ne.setEnabled(yt.sound),Ko(),document.getElementById("snd").textContent=`Sound: ${yt.sound?"on":"off"}`},"#ela":()=>{yt.elara=yt.elara==="all"?"key":yt.elara==="key"?"off":"all",Ko(),document.getElementById("ela").textContent=`Elara: ${em[yt.elara]}`},"#shk":()=>{yt.shake=yt.shake==="full"?"less":yt.shake==="less"?"off":"full",Ko(),document.getElementById("shk").textContent=`Screen shake: ${yt.shake}`}}),sn.onKey(t=>{(t==="Escape"||t==="KeyP")&&cs(!1)})}else sn.onKey(null),Ue.closeModal(),Ne.duck(!1),Ie.flow.state==="fight"&&vn.gameplayStart(),os=0}function $M(){let i=Ie.hero,e=[[i.x,.5,i.z],[i.x,1.6,i.z]];for(let n of Ie.foes)n.state!=="dead"&&e.push([n.x,.6,n.z]);let t=Ie.giant;return t&&t.state!=="fallen"&&e.push([t.x,1,t.z],[t.x,3,t.z]),e}function fm(i){let e=_r&&jo.lookAt;if(e){Bt.position.set(e[0]+e[3],e[1]+e[4],e[2]+e[5]),Bt.lookAt(e[0],e[1],e[2]);return}let t=Ie.hero,n=Ie.giant,s=new I(t.x*.8,1,t.z*.75-.8);if(n&&n.state!=="fallen")s.lerp(new I(n.x,1.8,n.z),.32);else if(Ie.foes.length){let l=0,h=0;for(let u of Ie.foes)l+=u.x,h+=u.z;s.lerp(new I(l/Ie.foes.length,1,h/Ie.foes.length),.2)}let a=innerWidth/innerHeight<1?new I(0,14.5,13):new I(0,12,13);n&&n.state==="toppled"&&a.multiplyScalar(.88);let o=s.clone().add(a),c=1-Math.exp(-i*5);if(im.lerp(o,c),sm.lerp(s,c),Bt.position.copy(im),yr>0&&yt.shake!=="off"){let l=Math.min(1,yr),h=l*l*.45*(yt.shake==="less"||lm?.3:1)*(innerWidth<600?.7:1);nm+=i;let u=Math.sin(nm*70)*h;Zo!=null?(Bt.position.x+=Math.sin(Zo)*u,Bt.position.z+=Math.cos(Zo)*u,Bt.position.y+=(Math.random()-.5)*h*.3):(Bt.position.x+=(Math.random()-.5)*h*2,Bt.position.y+=(Math.random()-.5)*h*2)}yr=Math.max(0,yr-i*2.4),Bt.lookAt(sm)}var pm=0,mm=0,xr=[],wu=(i,e)=>xr.push({t:i,fn:e});function gm(i){pm++;for(let t=xr.length-1;t>=0&&!vr;t--)if(xr[t].t-=i,xr[t].t<=0){let n=xr[t].fn;xr.splice(t,1),n()}if(Fi&&!vr){os+=i;let t=0;for(;os>=Pi&&t<8;){Ie.step(Jo&&!(cm&&Ie.flow.state==="pick")?Jo(Ie):sn.frame());for(let n of Ie.drain())WM(n);os-=Pi,t++,mm++}t===8&&(os=0),Au.tick(i,Ie)}let e=!Fi||vr||Ie.stopT>1e-6?0:i*(Ie.slowT>0?Ie.slowScale:1);ca.update(Ie,e,Hh);for(let t of Object.values(la))t.update(Ie,e,performance.now()/1e3);Eu.update(Ie,e,performance.now()/1e3),ft.update(e),br.tick(performance.now()/1e3),hp(performance.now()/1e3),fm(i),br.fadePillars(Bt,$M(),i),Ue.update(Ie,i,GM),as.render(Hn,Bt)}function xm(i){let e=Math.min(.1,(i-(tm||i))/1e3);tm=i,gm(e),requestAnimationFrame(xm)}async function KM(){vn.loadingStart(),Mu(.05,"Waking the terraces\u2026"),await vn.init(),HM();let i=new Io,e=C=>i.loadAsync(C).catch(()=>null),t=0,n=C=>C.then(T=>(t++,Mu(.1+.85*t/14),T)),[s,r,a,o,c,l,h,u,d]=await Promise.all(["hero","boss-guardian","weapon-firstLight","arena-pillar","arena-pillar-cracked","arena-pillar-claw","arena-gate","arena-brazier","arena-banner-torn"].map(C=>n(e(`${C}.glb`)))),f=await fetch("models.json").then(C=>C.json()).catch(()=>[]),p={};await Promise.all(["giant-hollen","giant-cairn","foe-shardling","foe-slinger"].filter(C=>f.includes(`${C}.glb`)).map(async C=>{p[C]=await e(`${C}.glb`)}));let[x,g,m,_]=await Promise.all(["arena-floor","sky-dawn","sky-dusk","arena-wall"].map(C=>n(VM(`${C}.webp`).catch(()=>null)))),v=document.getElementById("c"),y=(navigator.hardwareConcurrency||4)<=4||rs;as=new ro({canvas:v,antialias:!y,powerPreference:"high-performance",preserveDrawingBuffer:_r}),as.setPixelRatio(Math.min(devicePixelRatio,y?1.5:2)),as.shadowMap.enabled=!0,as.shadowMap.type=$l,Hn=new ao,Bt=new It(40,16/9,.1,200),br=gp(Hn,{shadows:!0},{floor:x,skyDawn:g,skyDusk:m,wall:_,pillar:o,pillarCracked:c,pillarClaw:l,gate:h,brazier:u,bannerTorn:d},Vh.arena.radius),br.setGate(!1,0),Ie=rp(BM,{seed:+(ls.get("seed")||Date.now()%1e5),mode:Mr}),yu&&(Jo=op(yu,7)),ca=Mp(s,a),Hn.add(ca.obj),la={hollen:iu(p["giant-hollen"]||r,Hn,jt.hollen.height,null,"hollen"),cairn:iu(p["giant-cairn"]||r,Hn,jt.cairn.height,jt.cairn.tint,"cairn")};for(let C of Object.values(la))Hn.add(C.obj);Eu=bp(r,Hn,{shardling:p["foe-shardling"],slinger:p["foe-slinger"]}),ft=wp(Hn),Ue=jp(rm,{touch:rs,stages:Mr==="run"?Lo.stages:null}),Ue.setGiant(jt.hollen.name,jt.hollen.title),Ue.onPause(()=>cs(!0)),Au=Qp(Pf,Ue,{...zM,move:rs?"the stick":"WASD"},()=>yt.elara),rs?(document.body.classList.add("touch-ui"),Ap(rm)):Ep(v),addEventListener("resize",am),am(),addEventListener("keydown",C=>{(C.code==="Escape"||C.code==="KeyP")&&!Ue.modalOpen&&cs(!0)}),addEventListener("pointerdown",()=>Ne.unlock()),addEventListener("keydown",()=>Ne.unlock()),document.addEventListener("visibilitychange",()=>{document.hidden&&cs(!0)}),addEventListener("blur",()=>{_r||cs(!0)}),vn.muted()&&Ne.setForcedMute(!0),vn.onSettings(C=>Ne.setForcedMute(!!C.muteAudio)),Mu(1,"Ready"),document.getElementById("loader").classList.add("gone"),vn.loadingStop(),fm(1),yu||_r?Fi=!0:XM(),_r||requestAnimationFrame(xm),jo.ready=!0}var jo={ready:!1,lookAt:null,get sim(){return Ie},rigged:()=>Object.fromEntries(Object.entries(la).map(([i,e])=>[i,e.obj.userData.rigged])),foeViews:()=>Eu.count(),pick:i=>Ie.choose(i),get scene(){return Hn},get renderer(){return as},get camera(){return Bt},input:sn,audio:Ne,settings:()=>yt,advance(i){let e=Math.round(i/16.666666666666668);for(let t=0;t<e;t++)gm(1/60)},start(){Fi||(Fi=!0,sn.onKey(null),Ue.closeModal())},pause:cs,again:Tu,fxCount:()=>ft.count(),frames:()=>pm,steps:()=>mm,shown:()=>({modal:Ue.modalOpen,ended:ha,paused:vr})};OM&&(window.__gf=jo);KM().catch(i=>{console.error(i);let e=document.getElementById("ltext");e&&(e.textContent="Could not load. Please reload.")});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
