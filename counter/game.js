(()=>{var hu="170";var ng=0,id=1,ig=2;var Mf=1,du=2,ei=3,Mn=0,$t=1,Rt=2,Ri=0,Pn=1,Vn=2,sd=3,rd=4,sg=5,ns=100,rg=101,ag=102,og=103,lg=104,cg=200,ug=201,hg=202,dg=203,Jl=204,jl=205,fg=206,pg=207,mg=208,gg=209,xg=210,_g=211,yg=212,vg=213,Mg=214,Ql=0,ec=1,tc=2,Ys=3,nc=4,ic=5,sc=6,rc=7,bf=0,bg=1,Sg=2,Ci=0,wg=1,Tg=2,Eg=3,Ag=4,Rg=5,Cg=6,Ig=7,ad="attached",Pg="detached",Sf=300,Ks=301,Zs=302,ac=303,oc=304,Fo=306,ss=1e3,ni=1001,rs=1002,Ot=1003,fu=1004;var Hs=1005;var rn=1006,Yr=1007;var Hn=1008;var ri=1009,wf=1010,Tf=1011,jr=1012,pu=1013,as=1014,In=1015,aa=1016,mu=1017,gu=1018,Js=1020,Ef=35902,Af=1021,Rf=1022,vn=1023,Cf=1024,If=1025,Xs=1026,js=1027,xu=1028,_u=1029,Pf=1030,yu=1031;var vu=1033,to=33776,no=33777,io=33778,so=33779,lc=35840,cc=35841,uc=35842,hc=35843,dc=36196,fc=37492,pc=37496,mc=37808,gc=37809,xc=37810,_c=37811,yc=37812,vc=37813,Mc=37814,bc=37815,Sc=37816,wc=37817,Tc=37818,Ec=37819,Ac=37820,Rc=37821,ro=36492,Cc=36494,Ic=36495,Lf=36283,Pc=36284,Lc=36285,Dc=36286,Mu=2200,bu=2201,Lg=2202,Qs=2300,er=2301,_l=2302,Vs=2400,Gs=2401,ao=2402,Su=2500,Dg=2501,Df=0,Bo=1,oa=2,Ng=3200,Ug=3201;var wu=0,kg=1,Ti="",At="srgb",Yt="srgb-linear",zo="linear",pt="srgb";var bs=7680;var od=519,Og=512,Fg=513,Bg=514,Nf=515,zg=516,Hg=517,Vg=518,Gg=519,Nc=35044;var ld="300 es",ii=2e3,oo=2001,ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=1234567,Kr=Math.PI/180,tr=180/Math.PI;function Ln(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function zt(i,e,t){return Math.max(e,Math.min(t,i))}function Tu(i,e){return(i%e+e)%e}function Wg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Xg(i,e,t){return i!==e?(t-i)/(e-i):0}function Zr(i,e,t){return(1-t)*i+t*e}function qg(i,e,t,n){return Zr(i,e,1-Math.exp(-t*n))}function $g(i,e=1){return e-Math.abs(Tu(i,e*2)-e)}function Yg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Kg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Zg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Jg(i,e){return i+Math.random()*(e-i)}function jg(i){return i*(.5-Math.random())}function Qg(i){i!==void 0&&(cd=i);let e=cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function e0(i){return i*Kr}function t0(i){return i*tr}function n0(i){return(i&i-1)===0&&i!==0}function i0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function s0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function r0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),f=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*f,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*f,o*c);break;case"ZYZ":i.set(l*f,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Uf={DEG2RAD:Kr,RAD2DEG:tr,generateUUID:Ln,clamp:zt,euclideanModulo:Tu,mapLinear:Wg,inverseLerp:Xg,lerp:Zr,damp:qg,pingpong:$g,smoothstep:Yg,smootherstep:Kg,randInt:Zg,randFloat:Jg,randFloatSpread:jg,seededRandom:Qg,degToRad:e0,radToDeg:t0,isPowerOfTwo:n0,ceilPowerOfTwo:i0,floorPowerOfTwo:s0,setQuaternionFromProperEuler:r0,normalize:ft,denormalize:Cn},Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],f=n[8],x=s[0],p=s[3],g=s[6],M=s[1],b=s[4],v=s[7],E=s[2],T=s[5],R=s[8];return r[0]=a*x+o*M+l*E,r[3]=a*p+o*b+l*T,r[6]=a*g+o*v+l*R,r[1]=c*x+u*M+h*E,r[4]=c*p+u*b+h*T,r[7]=c*g+u*v+h*R,r[2]=d*x+m*M+f*E,r[5]=d*p+m*b+f*T,r[8]=d*g+m*v+f*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,m=c*r-a*l,f=t*h+n*d+s*m;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yl.makeScale(e,t)),this}rotate(e){return this.premultiply(yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yl=new Ye;function kf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function a0(){let i=Qr("canvas");return i.style.display="block",i}var ud={};function qr(i){i in ud||(ud[i]=!0,console.warn(i))}function o0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function l0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function c0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var et={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(i.r=qs(i.r),i.g=qs(i.g),i.b=qs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ti?zo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hd=[.64,.33,.3,.6,.15,.06],dd=[.2126,.7152,.0722],fd=[.3127,.329],pd=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[Yt]:{primaries:hd,whitePoint:fd,transfer:zo,toXYZ:pd,fromXYZ:md,luminanceCoefficients:dd,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:hd,whitePoint:fd,transfer:pt,toXYZ:pd,fromXYZ:md,luminanceCoefficients:dd,outputColorSpaceConfig:{drawingBufferColorSpace:At}}});var Ss,Uc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=Qr("canvas")),Ss.width=e.width,Ss.height=e.height;let n=Ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Qr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},u0=0,lo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vl(s[a].image)):r.push(vl(s[a]))}else r=vl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function vl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Uc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var h0=0,Lt=class i extends ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ni,s=ni,r=rn,a=Hn,o=vn,l=ri,c=i.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Ln(),this.name="",this.source=new lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ss:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case rs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ss:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case rs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Sf;Lt.DEFAULT_ANISOTROPY=1;var ot=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],f=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(f-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(f+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,v=(m+1)/2,E=(g+1)/2,T=(u+d)/4,R=(h+x)/4,L=(f+p)/4;return b>v&&b>E?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=R/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=L/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=L/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-f)*(p-f)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-f)/M,this.y=(h-x)/M,this.z=(d-u)/M,this.w=Math.acos((c+m+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kc=class extends ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Lt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new lo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends kc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},co=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oc=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var an=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],m=r[a+1],f=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=f,e[t+3]=x;return}if(h!==x||l!==d||c!==m||u!==f){let p=1-o,g=l*d+c*m+u*f+h*x,M=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){let E=Math.sqrt(b),T=Math.atan2(E,g*M);p=Math.sin(p*T)/E,o=Math.sin(o*T)/E}let v=o*M;if(l=l*p+d*v,c=c*p+m*v,u=u*p+f*v,h=h*p+x*v,p===1-o){let E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],m=r[a+2],f=r[a+3];return e[t]=o*f+u*h+l*m-c*d,e[t+1]=l*f+u*d+c*h-o*m,e[t+2]=c*f+u*m+o*d-l*h,e[t+3]=u*f-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),m=l(s/2),f=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*m*f,this._y=c*m*h-d*u*f,this._z=c*u*f+d*m*h,this._w=c*u*h-d*m*f;break;case"YXZ":this._x=d*u*h+c*m*f,this._y=c*m*h-d*u*f,this._z=c*u*f-d*m*h,this._w=c*u*h+d*m*f;break;case"ZXY":this._x=d*u*h-c*m*f,this._y=c*m*h+d*u*f,this._z=c*u*f+d*m*h,this._w=c*u*h-d*m*f;break;case"ZYX":this._x=d*u*h-c*m*f,this._y=c*m*h+d*u*f,this._z=c*u*f-d*m*h,this._w=c*u*h+d*m*f;break;case"YZX":this._x=d*u*h+c*m*f,this._y=c*m*h+d*u*f,this._z=c*u*f-d*m*h,this._w=c*u*h-d*m*f;break;case"XZY":this._x=d*u*h-c*m*f,this._y=c*m*h-d*u*f,this._z=c*u*f+d*m*h,this._w=c*u*h+d*m*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>h){let m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){let m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ml.copy(this).projectOnVector(e),this.sub(Ml)}reflect(e){return this.sub(Ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ml=new P,gd=new an,Ft=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),Ea.subVectors(this.max,Ur),ws.subVectors(e.a,Ur),Ts.subVectors(e.b,Ur),Es.subVectors(e.c,Ur),yi.subVectors(Ts,ws),vi.subVectors(Es,Ts),Ki.subVectors(ws,Es);let t=[0,-yi.z,yi.y,0,-vi.z,vi.y,0,-Ki.z,Ki.y,yi.z,0,-yi.x,vi.z,0,-vi.x,Ki.z,0,-Ki.x,-yi.y,yi.x,0,-vi.y,vi.x,0,-Ki.y,Ki.x,0];return!bl(t,ws,Ts,Es,Ea)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,ws,Ts,Es,Ea))?!1:(Aa.crossVectors(yi,vi),t=[Aa.x,Aa.y,Aa.z],bl(t,ws,Ts,Es,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Yn=[new P,new P,new P,new P,new P,new P,new P,new P],En=new P,Ta=new Ft,ws=new P,Ts=new P,Es=new P,yi=new P,vi=new P,Ki=new P,Ur=new P,Ea=new P,Aa=new P,Zi=new P;function bl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zi.fromArray(i,r);let o=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),u=n.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var d0=new Ft,kr=new P,Sl=new P,dn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):d0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(kr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Sl)),this.expandByPoint(kr.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new P,wl=new P,Ra=new P,Mi=new P,Tl=new P,Ca=new P,El=new P,nr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wl.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(wl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ra),o=Mi.dot(this.direction),l=-Mi.dot(Ra),c=Mi.lengthSq(),u=Math.abs(1-a*a),h,d,m,f;if(u>0)if(h=a*l-o,d=a*o-l,f=r*u,h>=0)if(d>=-f)if(d<=f){let x=1/u;h*=x,d*=x,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-f?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=f?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(wl).addScaledVector(Ra,d),m}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,s,r){Tl.subVectors(t,e),Ca.subVectors(n,e),El.crossVectors(Tl,Ca);let a=this.direction.dot(El),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);let l=o*this.direction.dot(Ca.crossVectors(Mi,Ca));if(l<0)return null;let c=o*this.direction.dot(Tl.cross(Mi));if(c<0||l+c>a)return null;let u=-o*Mi.dot(El);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,d,m,f,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,m,f,x,p)}set(e,t,n,s,r,a,o,l,c,u,h,d,m,f,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=m,g[7]=f,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),a=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,m=a*h,f=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+f*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=f+m*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,m=l*h,f=c*u,x=c*h;t[0]=d+x*o,t[4]=f*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-f,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,m=l*h,f=c*u,x=c*h;t[0]=d-x*o,t[4]=-a*h,t[8]=f+m*o,t[1]=m+f*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,m=a*h,f=o*u,x=o*h;t[0]=l*u,t[4]=f*c-m,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=m*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,m=a*c,f=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=f*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+f,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*l,m=a*c,f=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=a*u,t[9]=m*h-f,t[2]=f*h-m,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f0,e,p0)}lookAt(e,t,n){let s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),bi.crossVectors(n,un),bi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),bi.crossVectors(n,un)),bi.normalize(),Ia.crossVectors(un,bi),s[0]=bi.x,s[4]=Ia.x,s[8]=un.x,s[1]=bi.y,s[5]=Ia.y,s[9]=un.y,s[2]=bi.z,s[6]=Ia.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],f=n[2],x=n[6],p=n[10],g=n[14],M=n[3],b=n[7],v=n[11],E=n[15],T=s[0],R=s[4],L=s[8],y=s[12],_=s[1],I=s[5],V=s[9],C=s[13],N=s[2],G=s[6],D=s[10],z=s[14],F=s[3],Y=s[7],ee=s[11],ae=s[15];return r[0]=a*T+o*_+l*N+c*F,r[4]=a*R+o*I+l*G+c*Y,r[8]=a*L+o*V+l*D+c*ee,r[12]=a*y+o*C+l*z+c*ae,r[1]=u*T+h*_+d*N+m*F,r[5]=u*R+h*I+d*G+m*Y,r[9]=u*L+h*V+d*D+m*ee,r[13]=u*y+h*C+d*z+m*ae,r[2]=f*T+x*_+p*N+g*F,r[6]=f*R+x*I+p*G+g*Y,r[10]=f*L+x*V+p*D+g*ee,r[14]=f*y+x*C+p*z+g*ae,r[3]=M*T+b*_+v*N+E*F,r[7]=M*R+b*I+v*G+E*Y,r[11]=M*L+b*V+v*D+E*ee,r[15]=M*y+b*C+v*z+E*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],f=e[3],x=e[7],p=e[11],g=e[15];return f*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*m-n*l*m)+x*(+t*l*m-t*c*d+r*a*d-s*a*m+s*c*u-r*l*u)+p*(+t*c*h-t*o*m-r*a*h+n*a*m+r*o*u-n*c*u)+g*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],f=e[12],x=e[13],p=e[14],g=e[15],M=h*p*c-x*d*c+x*l*m-o*p*m-h*l*g+o*d*g,b=f*d*c-u*p*c-f*l*m+a*p*m+u*l*g-a*d*g,v=u*x*c-f*h*c+f*o*m-a*x*m-u*o*g+a*h*g,E=f*h*l-u*x*l-f*o*d+a*x*d+u*o*p-a*h*p,T=t*M+n*b+s*v+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=M*R,e[1]=(x*d*r-h*p*r-x*s*m+n*p*m+h*s*g-n*d*g)*R,e[2]=(o*p*r-x*l*r+x*s*c-n*p*c-o*s*g+n*l*g)*R,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*m-n*l*m)*R,e[4]=b*R,e[5]=(u*p*r-f*d*r+f*s*m-t*p*m-u*s*g+t*d*g)*R,e[6]=(f*l*r-a*p*r-f*s*c+t*p*c+a*s*g-t*l*g)*R,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*m+t*l*m)*R,e[8]=v*R,e[9]=(f*h*r-u*x*r-f*n*m+t*x*m+u*n*g-t*h*g)*R,e[10]=(a*x*r-f*o*r+f*n*c-t*x*c-a*n*g+t*o*g)*R,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*m-t*o*m)*R,e[12]=E*R,e[13]=(u*x*s-f*h*s+f*n*d-t*x*d-u*n*p+t*h*p)*R,e[14]=(f*o*s-a*x*s-f*n*l+t*x*l+a*n*p-t*o*p)*R,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,m=r*u,f=r*h,x=a*u,p=a*h,g=o*h,M=l*c,b=l*u,v=l*h,E=n.x,T=n.y,R=n.z;return s[0]=(1-(x+g))*E,s[1]=(m+v)*E,s[2]=(f-b)*E,s[3]=0,s[4]=(m-v)*T,s[5]=(1-(d+g))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(f+b)*R,s[9]=(p-M)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=As.set(s[0],s[1],s[2]).length(),a=As.set(s[4],s[5],s[6]).length(),o=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);let c=1/r,u=1/a,h=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,t.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ii){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),m,f;if(o===ii)m=-(a+r)/(a-r),f=-2*a*r/(a-r);else if(o===oo)m=-a/(a-r),f=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ii){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*c,m=(n+s)*u,f,x;if(o===ii)f=(a+r)*h,x=-2*h;else if(o===oo)f=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},As=new P,An=new We,f0=new P(0,0,0),p0=new P(1,1,1),bi=new P,Ia=new P,un=new P,xd=new We,_d=new an,Gn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _d.setFromEuler(this),this.setFromQuaternion(_d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var uo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},m0=0,yd=new P,Rs=new an,Zn=new We,Pa=new P,Or=new P,g0=new P,x0=new an,vd=new P(1,0,0),Md=new P(0,1,0),bd=new P(0,0,1),Sd={type:"added"},_0={type:"removed"},Cs={type:"childadded",child:null},Al={type:"childremoved",child:null},bt=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Gn,n=new an,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Ye}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(vd,e)}rotateY(e){return this.rotateOnAxis(Md,e)}rotateZ(e){return this.rotateOnAxis(bd,e)}translateOnAxis(e,t){return yd.copy(e).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vd,e)}translateY(e){return this.translateOnAxis(Md,e)}translateZ(e){return this.translateOnAxis(bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pa.copy(e):Pa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Or,Pa,this.up):Zn.lookAt(Pa,Or,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(Zn),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sd),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_0),Al.child=e,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sd),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,g0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,x0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};bt.DEFAULT_UP=new P(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new P,Jn=new P,Rl=new P,jn=new P,Is=new P,Ps=new P,wd=new P,Cl=new P,Il=new P,Pl=new P,Ll=new ot,Dl=new ot,Nl=new ot,Ei=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),Jn.subVectors(n,t),Rl.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(Jn),l=Rn.dot(Rl),c=Jn.dot(Jn),u=Jn.dot(Rl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,m=(c*l-o*u)*d,f=(a*u-o*l)*d;return r.set(1-m-f,f,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ll.setScalar(0),Dl.setScalar(0),Nl.setScalar(0),Ll.fromBufferAttribute(e,t),Dl.fromBufferAttribute(e,n),Nl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ll,r.x),a.addScaledVector(Dl,r.y),a.addScaledVector(Nl,r.z),a}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),Jn.subVectors(e,t),Rn.cross(Jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Rn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Is.subVectors(s,n),Ps.subVectors(r,n),Cl.subVectors(e,n);let l=Is.dot(Cl),c=Ps.dot(Cl);if(l<=0&&c<=0)return t.copy(n);Il.subVectors(e,s);let u=Is.dot(Il),h=Ps.dot(Il);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Is,a);Pl.subVectors(e,r);let m=Is.dot(Pl),f=Ps.dot(Pl);if(f>=0&&m<=f)return t.copy(r);let x=m*c-l*f;if(x<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Ps,o);let p=u*f-m*h;if(p<=0&&h-u>=0&&m-f>=0)return wd.subVectors(r,s),o=(h-u)/(h-u+(m-f)),t.copy(s).addScaledVector(wd,o);let g=1/(p+x+d);return a=x*g,o=d*g,t.copy(n).addScaledVector(Is,a).addScaledVector(Ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},La={h:0,s:0,l:0};function Ul(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Tu(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ul(a,r,e+1/3),this.g=Ul(a,r,e),this.b=Ul(a,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=Of[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return et.fromWorkingColorSpace(qt.copy(this),e),Math.round(zt(qt.r*255,0,255))*65536+Math.round(zt(qt.g*255,0,255))*256+Math.round(zt(qt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(qt.copy(this),t);let n=qt.r,s=qt.g,r=qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=At){et.fromWorkingColorSpace(qt.copy(this),e);let t=qt.r,n=qt.g,s=qt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(La);let n=Zr(Si.h,La.h,t),s=Zr(Si.s,La.s,t),r=Zr(Si.l,La.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Ae;Ae.NAMES=Of;var y0=0,jt=class extends ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Ln(),this.name="",this.blending=Pn,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=jl,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pn&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jl&&(n.blendSrc=this.blendSrc),this.blendDst!==jl&&(n.blendDst=this.blendDst),this.blendEquation!==ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==od&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ct=class extends jt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pt=new P,Da=new Ne,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nc&&(e.usage=this.usage),e}};var ho=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var fo=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ht=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},v0=0,yn=new We,kl=new bt,Ls=new P,hn=new Ft,Fr=new Ft,kt=new P,wt=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kf(e)?fo:ho)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return kl.lookAt(e),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(hn.min,Fr.min),hn.expandByPoint(kt),kt.addVectors(hn.max,Fr.max),hn.expandByPoint(kt)):(hn.expandByPoint(Fr.min),hn.expandByPoint(Fr.max))}hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)kt.fromBufferAttribute(o,c),l&&(Ls.fromBufferAttribute(e,c),kt.add(Ls)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new P,l[L]=new P;let c=new P,u=new P,h=new P,d=new Ne,m=new Ne,f=new Ne,x=new P,p=new P;function g(L,y,_){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,_),d.fromBufferAttribute(r,L),m.fromBufferAttribute(r,y),f.fromBufferAttribute(r,_),u.sub(c),h.sub(c),m.sub(d),f.sub(d);let I=1/(m.x*f.y-f.x*m.y);isFinite(I)&&(x.copy(u).multiplyScalar(f.y).addScaledVector(h,-m.y).multiplyScalar(I),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-f.x).multiplyScalar(I),o[L].add(x),o[y].add(x),o[_].add(x),l[L].add(p),l[y].add(p),l[_].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,y=M.length;L<y;++L){let _=M[L],I=_.start,V=_.count;for(let C=I,N=I+V;C<N;C+=3)g(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let b=new P,v=new P,E=new P,T=new P;function R(L){E.fromBufferAttribute(s,L),T.copy(E);let y=o[L];b.copy(y),b.sub(E.multiplyScalar(E.dot(y))).normalize(),v.crossVectors(T,y);let I=v.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,I)}for(let L=0,y=M.length;L<y;++L){let _=M[L],I=_.start,V=_.count;for(let C=I,N=I+V;C<N;C+=3)R(e.getX(C+0)),R(e.getX(C+1)),R(e.getX(C+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){let f=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),m=0,f=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*u;for(let g=0;g<u;g++)d[f++]=c[m++]}return new Et(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Td=new We,Ji=new nr,Na=new dn,Ed=new P,Ua=new P,ka=new P,Oa=new P,Ol=new P,Fa=new P,Ad=new P,Ba=new P,Pe=class extends bt{constructor(e=new wt,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Ol.fromBufferAttribute(h,e),a?Fa.addScaledVector(Ol,u):Fa.addScaledVector(Ol.sub(t),u))}t.add(Fa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(Na.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Na,Ed)===null||Ji.origin.distanceToSquared(Ed)>(e.far-e.near)**2))&&(Td.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Td),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,x=d.length;f<x;f++){let p=d[f],g=a[p.materialIndex],M=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=M,E=b;v<E;v+=3){let T=o.getX(v),R=o.getX(v+1),L=o.getX(v+2);s=za(this,g,e,n,c,u,h,T,R,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let f=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=f,g=x;p<g;p+=3){let M=o.getX(p),b=o.getX(p+1),v=o.getX(p+2);s=za(this,a,e,n,c,u,h,M,b,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,x=d.length;f<x;f++){let p=d[f],g=a[p.materialIndex],M=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=M,E=b;v<E;v+=3){let T=v,R=v+1,L=v+2;s=za(this,g,e,n,c,u,h,T,R,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let f=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=f,g=x;p<g;p+=3){let M=p,b=p+1,v=p+2;s=za(this,a,e,n,c,u,h,M,b,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function M0(i,e,t,n,s,r,a,o){let l;if(e.side===$t?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Mn,o),l===null)return null;Ba.copy(o),Ba.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:i}}function za(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ua),i.getVertexPosition(l,ka),i.getVertexPosition(c,Oa);let u=M0(i,e,t,n,Ua,ka,Oa,Ad);if(u){let h=new P;Ei.getBarycoord(Ad,Ua,ka,Oa,h),s&&(u.uv=Ei.getInterpolatedAttribute(s,o,l,c,h,new Ne)),r&&(u.uv1=Ei.getInterpolatedAttribute(r,o,l,c,h,new Ne)),a&&(u.normal=Ei.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};Ei.getNormal(Ua,ka,Oa,d.normal),u.face=d,u.barycoord=h}return u}var fn=class i extends wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,m=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(h,2));function f(x,p,g,M,b,v,E,T,R,L,y){let _=v/R,I=E/L,V=v/2,C=E/2,N=T/2,G=R+1,D=L+1,z=0,F=0,Y=new P;for(let ee=0;ee<D;ee++){let ae=ee*I-C;for(let xe=0;xe<G;xe++){let ke=xe*_-V;Y[x]=ke*M,Y[p]=ae*b,Y[g]=N,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[g]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(xe/R),h.push(1-ee/L),z+=1}}for(let ee=0;ee<L;ee++)for(let ae=0;ae<R;ae++){let xe=d+ae+G*ee,ke=d+ae+G*(ee+1),H=d+(ae+1)+G*(ee+1),Z=d+(ae+1)+G*ee;l.push(xe,ke,Z),l.push(ke,H,Z),F+=6}o.addGroup(m,F,y),m+=F,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ir(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jt(i){let e={};for(let t=0;t<i.length;t++){let n=ir(i[t]);for(let s in n)e[s]=n[s]}return e}function b0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ff(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var S0={clone:ir,merge:Jt},w0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qt=class extends jt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w0,this.fragmentShader=T0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=b0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},po=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wi=new P,Rd=new Ne,Cd=new Ne,Dt=class extends po{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Rd,Cd),t.subVectors(Cd,Rd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ds=-90,Ns=1,Fc=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dt(Ds,Ns,e,t);s.layers=this.layers,this.add(s);let r=new Dt(Ds,Ns,e,t);r.layers=this.layers,this.add(r);let a=new Dt(Ds,Ns,e,t);a.layers=this.layers,this.add(a);let o=new Dt(Ds,Ns,e,t);o.layers=this.layers,this.add(o);let l=new Dt(Ds,Ns,e,t);l.layers=this.layers,this.add(l);let c=new Dt(Ds,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},mo=class extends Lt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bc=class extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new mo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fn(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Ri});r.uniforms.tEquirect.value=t;let a=new Pe(s,r),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=rn),new Fc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Fl=new P,E0=new P,A0=new Ye,ti=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Fl.subVectors(n,t).cross(E0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Fl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||A0.getNormalMatrix(e),s=this.coplanarPoint(Fl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new dn,Ha=new P,ea=class{constructor(e=new ti,t=new ti,n=new ti,s=new ti,r=new ti,a=new ti){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],m=s[8],f=s[9],x=s[10],p=s[11],g=s[12],M=s[13],b=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,p-m,v-g).normalize(),n[1].setComponents(l+r,d+c,p+m,v+g).normalize(),n[2].setComponents(l+a,d+u,p+f,v+M).normalize(),n[3].setComponents(l-a,d-u,p-f,v-M).normalize(),n[4].setComponents(l-o,d-h,p-x,v-b).normalize(),t===ii)n[5].setComponents(l+o,d+h,p+x,v+b).normalize();else if(t===oo)n[5].setComponents(o,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ha.x=s.normal.x>0?e.max.x:e.min.x,Ha.y=s.normal.y>0?e.max.y:e.min.y,Ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function R0(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((m,f)=>m.start-f.start);let d=0;for(let m=1;m<h.length;m++){let f=h[d],x=h[m];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++d,h[d]=x)}h.length=d+1;for(let m=0,f=h.length;m<f;m++){let x=h[m];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Dn=class i extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,m=[],f=[],x=[],p=[];for(let g=0;g<u;g++){let M=g*d-a;for(let b=0;b<c;b++){let v=b*h-r;f.push(v,-M,0),x.push(0,0,1),p.push(b/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){let b=M+c*g,v=M+c*(g+1),E=M+1+c*(g+1),T=M+1+c*g;m.push(b,v,T),m.push(v,E,T)}this.setIndex(m),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},C0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I0=`#ifdef USE_ALPHAHASH
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
#endif`,P0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
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
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
#endif`,F0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V0=`#ifdef USE_IRIDESCENCE
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
#endif`,G0=`#ifdef USE_BUMPMAP
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,j0=`#define PI 3.141592653589793
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
} // validated`,Q0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ex=`vec3 transformedNormal = objectNormal;
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
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ox=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vx=`uniform bool receiveShadow;
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
#endif`,Mx=`#ifdef USE_ENVMAP
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
#endif`,bx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
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
#endif`,Ax=`struct PhysicalMaterial {
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
}`,Rx=`
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
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fx=`#if defined( USE_POINTS_UV )
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
#endif`,Bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$x=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jx=`#ifdef USE_NORMALMAP
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
#endif`,jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f_=`float getShadowMask() {
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
}`,p_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m_=`#ifdef USE_SKINNING
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
#endif`,g_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x_=`#ifdef USE_SKINNING
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
#endif`,__=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,S_=`#ifdef USE_TRANSMISSION
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,R_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C_=`uniform sampler2D t2D;
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
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`#include <common>
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
}`,U_=`#if DEPTH_PACKING == 3200
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
}`,k_=`#define DISTANCE
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
}`,O_=`#define DISTANCE
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
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z_=`uniform float scale;
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
}`,H_=`uniform vec3 diffuse;
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
}`,V_=`#include <common>
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
}`,G_=`uniform vec3 diffuse;
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
}`,W_=`#define LAMBERT
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
}`,X_=`#define LAMBERT
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
}`,q_=`#define MATCAP
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
}`,$_=`#define MATCAP
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
}`,Y_=`#define NORMAL
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
}`,K_=`#define NORMAL
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
}`,Z_=`#define PHONG
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
}`,J_=`#define PHONG
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
}`,j_=`#define STANDARD
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
}`,Q_=`#define STANDARD
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
}`,ey=`#define TOON
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
}`,ty=`#define TOON
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
}`,ny=`uniform float size;
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
}`,iy=`uniform vec3 diffuse;
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
}`,sy=`#include <common>
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
}`,ry=`uniform vec3 color;
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
}`,ay=`uniform float rotation;
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
}`,oy=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:C0,alphahash_pars_fragment:I0,alphamap_fragment:P0,alphamap_pars_fragment:L0,alphatest_fragment:D0,alphatest_pars_fragment:N0,aomap_fragment:U0,aomap_pars_fragment:k0,batching_pars_vertex:O0,batching_vertex:F0,begin_vertex:B0,beginnormal_vertex:z0,bsdfs:H0,iridescence_fragment:V0,bumpmap_pars_fragment:G0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:$0,color_fragment:Y0,color_pars_fragment:K0,color_pars_vertex:Z0,color_vertex:J0,common:j0,cube_uv_reflection_fragment:Q0,defaultnormal_vertex:ex,displacementmap_pars_vertex:tx,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:sx,colorspace_fragment:rx,colorspace_pars_fragment:ax,envmap_fragment:ox,envmap_common_pars_fragment:lx,envmap_pars_fragment:cx,envmap_pars_vertex:ux,envmap_physical_pars_fragment:Mx,envmap_vertex:hx,fog_vertex:dx,fog_pars_vertex:fx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_pars_fragment:xx,lights_lambert_fragment:_x,lights_lambert_pars_fragment:yx,lights_pars_begin:vx,lights_toon_fragment:bx,lights_toon_pars_fragment:Sx,lights_phong_fragment:wx,lights_phong_pars_fragment:Tx,lights_physical_fragment:Ex,lights_physical_pars_fragment:Ax,lights_fragment_begin:Rx,lights_fragment_maps:Cx,lights_fragment_end:Ix,logdepthbuf_fragment:Px,logdepthbuf_pars_fragment:Lx,logdepthbuf_pars_vertex:Dx,logdepthbuf_vertex:Nx,map_fragment:Ux,map_pars_fragment:kx,map_particle_fragment:Ox,map_particle_pars_fragment:Fx,metalnessmap_fragment:Bx,metalnessmap_pars_fragment:zx,morphinstance_vertex:Hx,morphcolor_vertex:Vx,morphnormal_vertex:Gx,morphtarget_pars_vertex:Wx,morphtarget_vertex:Xx,normal_fragment_begin:qx,normal_fragment_maps:$x,normal_pars_fragment:Yx,normal_pars_vertex:Kx,normal_vertex:Zx,normalmap_pars_fragment:Jx,clearcoat_normal_fragment_begin:jx,clearcoat_normal_fragment_maps:Qx,clearcoat_pars_fragment:e_,iridescence_pars_fragment:t_,opaque_fragment:n_,packing:i_,premultiplied_alpha_fragment:s_,project_vertex:r_,dithering_fragment:a_,dithering_pars_fragment:o_,roughnessmap_fragment:l_,roughnessmap_pars_fragment:c_,shadowmap_pars_fragment:u_,shadowmap_pars_vertex:h_,shadowmap_vertex:d_,shadowmask_pars_fragment:f_,skinbase_vertex:p_,skinning_pars_vertex:m_,skinning_vertex:g_,skinnormal_vertex:x_,specularmap_fragment:__,specularmap_pars_fragment:y_,tonemapping_fragment:v_,tonemapping_pars_fragment:M_,transmission_fragment:b_,transmission_pars_fragment:S_,uv_pars_fragment:w_,uv_pars_vertex:T_,uv_vertex:E_,worldpos_vertex:A_,background_vert:R_,background_frag:C_,backgroundCube_vert:I_,backgroundCube_frag:P_,cube_vert:L_,cube_frag:D_,depth_vert:N_,depth_frag:U_,distanceRGBA_vert:k_,distanceRGBA_frag:O_,equirect_vert:F_,equirect_frag:B_,linedashed_vert:z_,linedashed_frag:H_,meshbasic_vert:V_,meshbasic_frag:G_,meshlambert_vert:W_,meshlambert_frag:X_,meshmatcap_vert:q_,meshmatcap_frag:$_,meshnormal_vert:Y_,meshnormal_frag:K_,meshphong_vert:Z_,meshphong_frag:J_,meshphysical_vert:j_,meshphysical_frag:Q_,meshtoon_vert:ey,meshtoon_frag:ty,points_vert:ny,points_frag:iy,shadow_vert:sy,shadow_frag:ry,sprite_vert:ay,sprite_frag:oy},ce={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},zn={basic:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Jt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Jt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Jt([ce.points,ce.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Jt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Jt([ce.common,ce.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Jt([ce.sprite,ce.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Jt([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Jt([ce.lights,ce.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};zn.physical={uniforms:Jt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Va={r:0,b:0,g:0},Qi=new Gn,ly=new We;function cy(i,e,t,n,s,r,a){let o=new Ae(0),l=r===!0?0:1,c,u,h=null,d=0,m=null;function f(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?t:e).get(b)),b}function x(M){let b=!1,v=f(M);v===null?g(o,l):v&&v.isColor&&(g(v,1),b=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,b){let v=f(b);v&&(v.isCubeTexture||v.mapping===Fo)?(u===void 0&&(u=new Pe(new fn(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:ir(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qi.copy(b.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ly.makeRotationFromEuler(Qi)),u.material.toneMapped=et.getTransfer(v.colorSpace)!==pt,(h!==v||d!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Pe(new Dn(2,2),new Qt({name:"BackgroundMaterial",uniforms:ir(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,b){M.getRGB(Va,Ff(i)),n.buffers.color.setClear(Va.r,Va.g,Va.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),l=b,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(o,l)},render:x,addToRenderList:p}}function uy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(_,I,V,C,N){let G=!1,D=h(C,V,I);r!==D&&(r=D,c(r.object)),G=m(_,C,V,N),G&&f(_,C,V,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(_,I,V,C),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,I,V){let C=V.wireframe===!0,N=n[_.id];N===void 0&&(N={},n[_.id]=N);let G=N[I.id];G===void 0&&(G={},N[I.id]=G);let D=G[C];return D===void 0&&(D=d(l()),G[C]=D),D}function d(_){let I=[],V=[],C=[];for(let N=0;N<t;N++)I[N]=0,V[N]=0,C[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:C,object:_,attributes:{},index:null}}function m(_,I,V,C){let N=r.attributes,G=I.attributes,D=0,z=V.getAttributes();for(let F in z)if(z[F].location>=0){let ee=N[F],ae=G[F];if(ae===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor)),ee===void 0||ee.attribute!==ae||ae&&ee.data!==ae.data)return!0;D++}return r.attributesNum!==D||r.index!==C}function f(_,I,V,C){let N={},G=I.attributes,D=0,z=V.getAttributes();for(let F in z)if(z[F].location>=0){let ee=G[F];ee===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(ee=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(ee=_.instanceColor));let ae={};ae.attribute=ee,ee&&ee.data&&(ae.data=ee.data),N[F]=ae,D++}r.attributes=N,r.attributesNum=D,r.index=C}function x(){let _=r.newAttributes;for(let I=0,V=_.length;I<V;I++)_[I]=0}function p(_){g(_,0)}function g(_,I){let V=r.newAttributes,C=r.enabledAttributes,N=r.attributeDivisors;V[_]=1,C[_]===0&&(i.enableVertexAttribArray(_),C[_]=1),N[_]!==I&&(i.vertexAttribDivisor(_,I),N[_]=I)}function M(){let _=r.newAttributes,I=r.enabledAttributes;for(let V=0,C=I.length;V<C;V++)I[V]!==_[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function b(_,I,V,C,N,G,D){D===!0?i.vertexAttribIPointer(_,I,V,N,G):i.vertexAttribPointer(_,I,V,C,N,G)}function v(_,I,V,C){x();let N=C.attributes,G=V.getAttributes(),D=I.defaultAttributeValues;for(let z in G){let F=G[z];if(F.location>=0){let Y=N[z];if(Y===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(Y=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(Y=_.instanceColor)),Y!==void 0){let ee=Y.normalized,ae=Y.itemSize,xe=e.get(Y);if(xe===void 0)continue;let ke=xe.buffer,H=xe.type,Z=xe.bytesPerElement,oe=H===i.INT||H===i.UNSIGNED_INT||Y.gpuType===pu;if(Y.isInterleavedBufferAttribute){let W=Y.data,_e=W.stride,le=Y.offset;if(W.isInstancedInterleavedBuffer){for(let fe=0;fe<F.locationSize;fe++)g(F.location+fe,W.meshPerAttribute);_.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let fe=0;fe<F.locationSize;fe++)p(F.location+fe);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let fe=0;fe<F.locationSize;fe++)b(F.location+fe,ae/F.locationSize,H,ee,_e*Z,(le+ae/F.locationSize*fe)*Z,oe)}else{if(Y.isInstancedBufferAttribute){for(let W=0;W<F.locationSize;W++)g(F.location+W,Y.meshPerAttribute);_.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let W=0;W<F.locationSize;W++)p(F.location+W);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let W=0;W<F.locationSize;W++)b(F.location+W,ae/F.locationSize,H,ee,ae*Z,ae/F.locationSize*W*Z,oe)}}else if(D!==void 0){let ee=D[z];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(F.location,ee);break;case 3:i.vertexAttrib3fv(F.location,ee);break;case 4:i.vertexAttrib4fv(F.location,ee);break;default:i.vertexAttrib1fv(F.location,ee)}}}}M()}function E(){L();for(let _ in n){let I=n[_];for(let V in I){let C=I[V];for(let N in C)u(C[N].object),delete C[N];delete I[V]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;let I=n[_.id];for(let V in I){let C=I[V];for(let N in C)u(C[N].object),delete C[N];delete I[V]}delete n[_.id]}function R(_){for(let I in n){let V=n[I];if(V[_.id]===void 0)continue;let C=V[_.id];for(let N in C)u(C[N].object),delete C[N];delete V[_.id]}}function L(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function hy(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let f=0;f<h;f++)m+=u[f];t.update(m,n,1)}function l(c,u,h,d){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<c.length;f++)a(c[f],u[f],d[f]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let f=0;for(let x=0;x<h;x++)f+=u[x]*d[x];t.update(f,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let L=R===aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ri&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==In&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:E,maxSamples:T}}function fy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ti,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){let f=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,g=i.get(h);if(!s||f===null||f.length===0||r&&!p)r?u(null):c();else{let M=r?0:n,b=M*4,v=g.clippingState||null;l.value=v,v=u(f,d,b,m);for(let E=0;E!==b;++E)v[E]=t[E];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,f){let x=h!==null?h.length:0,p=null;if(x!==0){if(p=l.value,f!==!0||p===null){let g=m+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,v=m;b!==x;++b,v+=4)a.copy(h[b]).applyMatrix4(M,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function py(i){let e=new WeakMap;function t(a,o){return o===ac?a.mapping=Ks:o===oc&&(a.mapping=Zs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ac||o===oc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Bc(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var sr=class extends po{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ws=4,Id=[.125,.215,.35,.446,.526,.582],is=20,Bl=new sr,Pd=new Ae,zl=null,Hl=0,Vl=0,Gl=!1,ts=(1+Math.sqrt(5))/2,Us=1/ts,Ld=[new P(-ts,Us,0),new P(ts,Us,0),new P(-Us,0,ts),new P(Us,0,ts),new P(0,ts,-Us),new P(0,ts,Us),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],go=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){zl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zl,Hl,Vl),this._renderer.xr.enabled=Gl,e.scissorTest=!1,Ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:aa,format:vn,colorSpace:Yt,depthBuffer:!1},s=Dd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=my(r)),this._blurMaterial=gy(r,e,t)}return s}_compileMaterial(e){let t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,Bl)}_sceneToCubeUV(e,t,n,s){let o=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Pd),u.toneMapping=Ci,u.autoClear=!1;let m=new Ct({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),f=new Pe(new fn,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Pd),x=!0);for(let g=0;g<6;g++){let M=g%3;M===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):M===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));let b=this._cubeSize;Ga(s,M*b,g>2?b:0,b,b),u.setRenderTarget(s),x&&u.render(f,o),u.render(e,o)}f.geometry.dispose(),f.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ks||e.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ga(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Bl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ld[(s-r-1)%Ld.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Pe(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*is-1),x=r/f,p=isFinite(r)?1+Math.floor(u*x):is;p>is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${is}`);let g=[],M=0;for(let R=0;R<is;++R){let L=R/x,y=Math.exp(-L*L/2);g.push(y),R===0?M+=y:R<p&&(M+=2*y)}for(let R=0;R<g.length;R++)g[R]=g[R]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=f,d.mipInt.value=b-n;let v=this._sizeLods[s],E=3*v*(s>b-Ws?s-b+Ws:0),T=4*(this._cubeSize-v);Ga(t,E,T,3*v,2*v),l.setRenderTarget(t),l.render(h,Bl)}};function my(i){let e=[],t=[],n=[],s=i,r=i-Ws+1+Id.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ws?l=Id[a-i+Ws-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,f=6,x=3,p=2,g=1,M=new Float32Array(x*f*m),b=new Float32Array(p*f*m),v=new Float32Array(g*f*m);for(let T=0;T<m;T++){let R=T%3*2/3-1,L=T>2?0:-1,y=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];M.set(y,x*f*T),b.set(d,p*f*T);let _=[T,T,T,T,T,T];v.set(_,g*f*T)}let E=new wt;E.setAttribute("position",new Et(M,x)),E.setAttribute("uv",new Et(b,p)),E.setAttribute("faceIndex",new Et(v,g)),e.push(E),s>Ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dd(i,e,t){let n=new oi(i,e,t);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ga(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gy(i,e,t){let n=new Float32Array(is),s=new P(0,1,0);return new Qt({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Nd(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Ud(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Eu(){return`

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
	`}function xy(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ac||l===oc,u=l===Ks||l===Zs;if(c||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new go(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new go(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function _y(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&qr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function yy(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let f in d.attributes)e.remove(d.attributes[f]);for(let f in d.morphAttributes){let x=d.morphAttributes[f];for(let p=0,g=x.length;p<g;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER);let m=h.morphAttributes;for(let f in m){let x=m[f];for(let p=0,g=x.length;p<g;p++)e.update(x[p],i.ARRAY_BUFFER)}}function c(h){let d=[],m=h.index,f=h.attributes.position,x=0;if(m!==null){let M=m.array;x=m.version;for(let b=0,v=M.length;b<v;b+=3){let E=M[b+0],T=M[b+1],R=M[b+2];d.push(E,T,T,R,R,E)}}else if(f!==void 0){let M=f.array;x=f.version;for(let b=0,v=M.length/3-1;b<v;b+=3){let E=b+0,T=b+1,R=b+2;d.push(E,T,T,R,R,E)}}else return;let p=new(kf(d)?fo:ho)(d,1);p.version=x;let g=r.get(h);g&&e.remove(g),r.set(h,p)}function u(h){let d=r.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function vy(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*a),t.update(m,n,1)}function c(d,m,f){f!==0&&(i.drawElementsInstanced(n,m,r,d*a,f),t.update(m,n,f))}function u(d,m,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,f);let p=0;for(let g=0;g<f;g++)p+=m[g];t.update(p,n,1)}function h(d,m,f,x){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/a,m[g],x[g]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,x,0,f);let g=0;for(let M=0;M<f;M++)g+=m[M]*x[M];t.update(g,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function My(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function by(i,e,t){let n=new WeakMap,s=new ot;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let y=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],b=0;m===!0&&(b=1),f===!0&&(b=2),x===!0&&(b=3);let v=o.attributes.position.count*b,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*E*4*h),R=new co(T,v,E,h);R.type=In,R.needsUpdate=!0;let L=b*4;for(let _=0;_<h;_++){let I=p[_],V=g[_],C=M[_],N=v*E*4*_;for(let G=0;G<I.count;G++){let D=G*L;m===!0&&(s.fromBufferAttribute(I,G),T[N+D+0]=s.x,T[N+D+1]=s.y,T[N+D+2]=s.z,T[N+D+3]=0),f===!0&&(s.fromBufferAttribute(V,G),T[N+D+4]=s.x,T[N+D+5]=s.y,T[N+D+6]=s.z,T[N+D+7]=0),x===!0&&(s.fromBufferAttribute(C,G),T[N+D+8]=s.x,T[N+D+9]=s.y,T[N+D+10]=s.z,T[N+D+11]=C.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new Ne(v,E)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let f=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Sy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var xo=class extends Lt{constructor(e,t,n,s,r,a,o,l,c,u=Xs){if(u!==Xs&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xs&&(n=as),n===void 0&&u===js&&(n=Js),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},zf=new Lt,kd=new xo(1,1),Hf=new co,Vf=new Oc,Gf=new mo,Od=[],Fd=[],Bd=new Float32Array(16),zd=new Float32Array(9),Hd=new Float32Array(4);function mr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Od[s];if(r===void 0&&(r=new Float32Array(s),Od[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ho(i,e){let t=Fd[e];t===void 0&&(t=new Int32Array(e),Fd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function Ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function Ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function Ry(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Hd.set(n),i.uniformMatrix2fv(this.addr,!1,Hd),Ut(t,n)}}function Cy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;zd.set(n),i.uniformMatrix3fv(this.addr,!1,zd),Ut(t,n)}}function Iy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Bd.set(n),i.uniformMatrix4fv(this.addr,!1,Bd),Ut(t,n)}}function Py(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function Uy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function By(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kd.compareFunction=Nf,r=kd):r=zf,t.setTexture2D(e||r,s)}function zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vf,s)}function Hy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Gf,s)}function Vy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hf,s)}function Gy(i){switch(i){case 5126:return wy;case 35664:return Ty;case 35665:return Ey;case 35666:return Ay;case 35674:return Ry;case 35675:return Cy;case 35676:return Iy;case 5124:case 35670:return Py;case 35667:case 35671:return Ly;case 35668:case 35672:return Dy;case 35669:case 35673:return Ny;case 5125:return Uy;case 36294:return ky;case 36295:return Oy;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Vy}}function Wy(i,e){i.uniform1fv(this.addr,e)}function Xy(i,e){let t=mr(e,this.size,2);i.uniform2fv(this.addr,t)}function qy(i,e){let t=mr(e,this.size,3);i.uniform3fv(this.addr,t)}function $y(i,e){let t=mr(e,this.size,4);i.uniform4fv(this.addr,t)}function Yy(i,e){let t=mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ky(i,e){let t=mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zy(i,e){let t=mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jy(i,e){i.uniform1iv(this.addr,e)}function jy(i,e){i.uniform2iv(this.addr,e)}function Qy(i,e){i.uniform3iv(this.addr,e)}function ev(i,e){i.uniform4iv(this.addr,e)}function tv(i,e){i.uniform1uiv(this.addr,e)}function nv(i,e){i.uniform2uiv(this.addr,e)}function iv(i,e){i.uniform3uiv(this.addr,e)}function sv(i,e){i.uniform4uiv(this.addr,e)}function rv(i,e,t){let n=this.cache,s=e.length,r=Ho(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||zf,r[a])}function av(i,e,t){let n=this.cache,s=e.length,r=Ho(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vf,r[a])}function ov(i,e,t){let n=this.cache,s=e.length,r=Ho(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Gf,r[a])}function lv(i,e,t){let n=this.cache,s=e.length,r=Ho(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hf,r[a])}function cv(i){switch(i){case 5126:return Wy;case 35664:return Xy;case 35665:return qy;case 35666:return $y;case 35674:return Yy;case 35675:return Ky;case 35676:return Zy;case 5124:case 35670:return Jy;case 35667:case 35671:return jy;case 35668:case 35672:return Qy;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return lv}}var zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gy(t.type)}},Hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cv(t.type)}},Vc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Wl=/(\w+)(\])?(\[|\.)?/g;function Vd(i,e){i.seq.push(e),i.map[e.id]=e}function uv(i,e,t){let n=i.name,s=n.length;for(Wl.lastIndex=0;;){let r=Wl.exec(n),a=Wl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vd(t,c===void 0?new zc(o,i,e):new Hc(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Vc(o),Vd(t,h)),t=h}}}var $s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);uv(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Gd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var hv=37297,dv=0;function fv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Wd=new Ye;function pv(i){et._getMatrix(Wd,et.workingColorSpace,i);let e=`mat3( ${Wd.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case zo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+fv(i.getShaderSource(e),a)}else return s}function mv(i,e){let t=pv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gv(i,e){let t;switch(e){case wg:t="Linear";break;case Tg:t="Reinhard";break;case Eg:t="Cineon";break;case Ag:t="ACESFilmic";break;case Cg:t="AgX";break;case Ig:t="Neutral";break;case Rg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wa=new P;function xv(){et.getLuminanceCoefficients(Wa);let i=Wa.x.toFixed(4),e=Wa.y.toFixed(4),t=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _v(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function yv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function $r(i){return i!==""}function qd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $d(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(i){return i.replace(Mv,Sv)}var bv=new Map;function Sv(i,e){let t=Je[e];if(t===void 0){let n=bv.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gc(t)}var wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yd(i){return i.replace(wv,Tv)}function Tv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Ev(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===du?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Av(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case Fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function Cv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bf:e="ENVMAP_BLENDING_MULTIPLY";break;case bg:e="ENVMAP_BLENDING_MIX";break;case Sg:e="ENVMAP_BLENDING_ADD";break}return e}function Iv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Ev(t),c=Av(t),u=Rv(t),h=Cv(t),d=Iv(t),m=_v(t),f=yv(r),x=s.createProgram(),p,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter($r).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter($r).join(`
`),g.length>0&&(g+=`
`)):(p=[Kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),g=[Kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ci?gv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,mv("linearToOutputTexel",t.outputColorSpace),xv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),a=Gc(a),a=qd(a,t),a=$d(a,t),o=Gc(o),o=qd(o,t),o=$d(o,t),a=Yd(a),o=Yd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=M+p+a,v=M+g+o,E=Gd(s,s.VERTEX_SHADER,b),T=Gd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,E),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(I){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(x).trim(),C=s.getShaderInfoLog(E).trim(),N=s.getShaderInfoLog(T).trim(),G=!0,D=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,T);else{let z=Xd(s,E,"vertex"),F=Xd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+z+`
`+F)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(C===""||N==="")&&(D=!1);D&&(I.diagnostics={runnable:G,programLog:V,vertexShader:{log:C,prefix:p},fragmentShader:{log:N,prefix:g}})}s.deleteShader(E),s.deleteShader(T),L=new $s(s,x),y=vv(s,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,hv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}var Lv=0,Wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xc(e),t.set(e,n)),n}},Xc=class{constructor(e){this.id=Lv++,this.code=e,this.usedTimes=0}};function Dv(i,e,t,n,s,r,a){let o=new uo,l=new Wc,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,_,I,V,C){let N=V.fog,G=C.geometry,D=y.isMeshStandardMaterial?V.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||D),F=z&&z.mapping===Fo?z.image.height:null,Y=f[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let ee=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=ee!==void 0?ee.length:0,xe=0;G.morphAttributes.position!==void 0&&(xe=1),G.morphAttributes.normal!==void 0&&(xe=2),G.morphAttributes.color!==void 0&&(xe=3);let ke,H,Z,oe;if(Y){let dt=zn[Y];ke=dt.vertexShader,H=dt.fragmentShader}else ke=y.vertexShader,H=y.fragmentShader,l.update(y),Z=l.getVertexShaderID(y),oe=l.getFragmentShaderID(y);let W=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),le=C.isInstancedMesh===!0,fe=C.isBatchedMesh===!0,Ce=!!y.map,Oe=!!y.matcap,st=!!z,U=!!y.aoMap,Ke=!!y.lightMap,Ve=!!y.bumpMap,Fe=!!y.normalMap,be=!!y.displacementMap,rt=!!y.emissiveMap,De=!!y.metalnessMap,A=!!y.roughnessMap,S=y.anisotropy>0,X=y.clearcoat>0,Q=y.dispersion>0,ie=y.iridescence>0,J=y.sheen>0,Se=y.transmission>0,ue=S&&!!y.anisotropyMap,ve=X&&!!y.clearcoatMap,se=X&&!!y.clearcoatNormalMap,ne=X&&!!y.clearcoatRoughnessMap,de=ie&&!!y.iridescenceMap,ze=ie&&!!y.iridescenceThicknessMap,He=J&&!!y.sheenColorMap,Me=J&&!!y.sheenRoughnessMap,nt=!!y.specularMap,Ze=!!y.specularColorMap,gt=!!y.specularIntensityMap,k=Se&&!!y.transmissionMap,he=Se&&!!y.thicknessMap,K=!!y.gradientMap,te=!!y.alphaMap,ge=y.alphaTest>0,pe=!!y.alphaHash,qe=!!y.extensions,Tt=Ci;y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Tt=i.toneMapping);let Wt={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:ke,fragmentShader:H,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:fe,batchingColor:fe&&C._colorsTexture!==null,instancing:le,instancingColor:le&&C.instanceColor!==null,instancingMorph:le&&C.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Yt,alphaToCoverage:!!y.alphaToCoverage,map:Ce,matcap:Oe,envMap:st,envMapMode:st&&z.mapping,envMapCubeUVHeight:F,aoMap:U,lightMap:Ke,bumpMap:Ve,normalMap:Fe,displacementMap:d&&be,emissiveMap:rt,normalMapObjectSpace:Fe&&y.normalMapType===kg,normalMapTangentSpace:Fe&&y.normalMapType===wu,metalnessMap:De,roughnessMap:A,anisotropy:S,anisotropyMap:ue,clearcoat:X,clearcoatMap:ve,clearcoatNormalMap:se,clearcoatRoughnessMap:ne,dispersion:Q,iridescence:ie,iridescenceMap:de,iridescenceThicknessMap:ze,sheen:J,sheenColorMap:He,sheenRoughnessMap:Me,specularMap:nt,specularColorMap:Ze,specularIntensityMap:gt,transmission:Se,transmissionMap:k,thicknessMap:he,gradientMap:K,opaque:y.transparent===!1&&y.blending===Pn&&y.alphaToCoverage===!1,alphaMap:te,alphaTest:ge,alphaHash:pe,combine:y.combine,mapUv:Ce&&x(y.map.channel),aoMapUv:U&&x(y.aoMap.channel),lightMapUv:Ke&&x(y.lightMap.channel),bumpMapUv:Ve&&x(y.bumpMap.channel),normalMapUv:Fe&&x(y.normalMap.channel),displacementMapUv:be&&x(y.displacementMap.channel),emissiveMapUv:rt&&x(y.emissiveMap.channel),metalnessMapUv:De&&x(y.metalnessMap.channel),roughnessMapUv:A&&x(y.roughnessMap.channel),anisotropyMapUv:ue&&x(y.anisotropyMap.channel),clearcoatMapUv:ve&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:He&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&x(y.sheenRoughnessMap.channel),specularMapUv:nt&&x(y.specularMap.channel),specularColorMapUv:Ze&&x(y.specularColorMap.channel),specularIntensityMapUv:gt&&x(y.specularIntensityMap.channel),transmissionMapUv:k&&x(y.transmissionMap.channel),thicknessMapUv:he&&x(y.thicknessMap.channel),alphaMapUv:te&&x(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Fe||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!G.attributes.uv&&(Ce||te),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:_e,skinning:C.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:xe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Ce&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===pt,decodeVideoTextureEmissive:rt&&y.emissiveMap.isVideoTexture===!0&&et.getTransfer(y.emissiveMap.colorSpace)===pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Rt,flipSided:y.side===$t,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:qe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&y.extensions.multiDraw===!0||fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function g(y){let _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)_.push(I),_.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(M(_,y),b(_,y),_.push(i.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function M(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function b(y,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){let _=f[y.type],I;if(_){let V=zn[_];I=S0.clone(V.uniforms)}else I=y.uniforms;return I}function E(y,_){let I;for(let V=0,C=u.length;V<C;V++){let N=u[V];if(N.cacheKey===_){I=N,++I.usedTimes;break}}return I===void 0&&(I=new Pv(i,_,y,r),u.push(I)),I}function T(y){if(--y.usedTimes===0){let _=u.indexOf(y);u[_]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:v,acquireProgram:E,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:L}}function Nv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Uv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Zd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,m,f,x,p){let g=i[e];return g===void 0?(g={id:h.id,object:h,geometry:d,material:m,groupOrder:f,renderOrder:h.renderOrder,z:x,group:p},i[e]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=m,g.groupOrder=f,g.renderOrder=h.renderOrder,g.z=x,g.group=p),e++,g}function o(h,d,m,f,x,p){let g=a(h,d,m,f,x,p);m.transmission>0?n.push(g):m.transparent===!0?s.push(g):t.push(g)}function l(h,d,m,f,x,p){let g=a(h,d,m,f,x,p);m.transmission>0?n.unshift(g):m.transparent===!0?s.unshift(g):t.unshift(g)}function c(h,d){t.length>1&&t.sort(h||Uv),n.length>1&&n.sort(d||Zd),s.length>1&&s.sort(d||Zd)}function u(){for(let h=e,d=i.length;h<d;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function kv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Jd,i.set(n,[a])):s>=r.length?(a=new Jd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ov(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ae};break;case"SpotLight":t={position:new P,direction:new P,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Fv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Bv=0;function zv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hv(i){let e=new Ov,t=Fv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new We,a=new We;function o(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,f=0,x=0,p=0,g=0,M=0,b=0,v=0,E=0,T=0,R=0;c.sort(zv);for(let y=0,_=c.length;y<_;y++){let I=c[y],V=I.color,C=I.intensity,N=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=V.r*C,h+=V.g*C,d+=V.b*C;else if(I.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(I.sh.coefficients[D],C);R++}else if(I.isDirectionalLight){let D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let z=I.shadow,F=t.get(I);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,n.directionalShadow[m]=F,n.directionalShadowMap[m]=G,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=D,m++}else if(I.isSpotLight){let D=e.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(V).multiplyScalar(C),D.distance=N,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,n.spot[x]=D;let z=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,z.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[x]=z.matrix,I.castShadow){let F=t.get(I);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,n.spotShadow[x]=F,n.spotShadowMap[x]=G,v++}x++}else if(I.isRectAreaLight){let D=e.get(I);D.color.copy(V).multiplyScalar(C),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=D,p++}else if(I.isPointLight){let D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),D.distance=I.distance,D.decay=I.decay,I.castShadow){let z=I.shadow,F=t.get(I);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,F.shadowCameraNear=z.camera.near,F.shadowCameraFar=z.camera.far,n.pointShadow[f]=F,n.pointShadowMap[f]=G,n.pointShadowMatrix[f]=I.shadow.matrix,b++}n.point[f]=D,f++}else if(I.isHemisphereLight){let D=e.get(I);D.skyColor.copy(I.color).multiplyScalar(C),D.groundColor.copy(I.groundColor).multiplyScalar(C),n.hemi[g]=D,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==m||L.pointLength!==f||L.spotLength!==x||L.rectAreaLength!==p||L.hemiLength!==g||L.numDirectionalShadows!==M||L.numPointShadows!==b||L.numSpotShadows!==v||L.numSpotMaps!==E||L.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=f,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.directionalLength=m,L.pointLength=f,L.spotLength=x,L.rectAreaLength=p,L.hemiLength=g,L.numDirectionalShadows=M,L.numPointShadows=b,L.numSpotShadows=v,L.numSpotMaps=E,L.numLightProbes=R,n.version=Bv++)}function l(c,u){let h=0,d=0,m=0,f=0,x=0,p=u.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){let b=c[g];if(b.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),h++}else if(b.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let v=n.rectArea[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),f++}else if(b.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function jd(i){let e=new Hv(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Vv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new jd(i),e.set(s,[o])):r>=a.length?(o=new jd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var qc=class extends jt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ng,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$c=class extends jt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wv=`uniform sampler2D shadow_pass;
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
}`;function Xv(i,e,t){let n=new ea,s=new Ne,r=new Ne,a=new ot,o=new qc({depthPacking:Ug}),l=new $c,c={},u=t.maxTextureSize,h={[Mn]:$t,[$t]:Mn,[Rt]:Rt},d=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Gv,fragmentShader:Wv}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let f=new wt;f.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pe(f,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mf;let g=this.type;this.render=function(T,R,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let y=i.getRenderTarget(),_=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Ri),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let C=g!==ei&&this.type===ei,N=g===ei&&this.type!==ei;for(let G=0,D=T.length;G<D;G++){let z=T[G],F=z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let Y=F.getFrameExtents();if(s.multiply(Y),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,F.mapSize.y=r.y)),F.map===null||C===!0||N===!0){let ae=this.type!==ei?{minFilter:Ot,magFilter:Ot}:{};F.map!==null&&F.map.dispose(),F.map=new oi(s.x,s.y,ae),F.map.texture.name=z.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();let ee=F.getViewportCount();for(let ae=0;ae<ee;ae++){let xe=F.getViewport(ae);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),V.viewport(a),F.updateMatrices(z,ae),n=F.getFrustum(),v(R,L,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===ei&&M(F,L),F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(y,_,I)};function M(T,R){let L=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new oi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,L,m,x,null)}function b(T,R,L,y){let _=null,I=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)_=I;else if(_=L.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let V=_.uuid,C=R.uuid,N=c[V];N===void 0&&(N={},c[V]=N);let G=N[C];G===void 0&&(G=_.clone(),N[C]=G,R.addEventListener("dispose",E)),_=G}if(_.visible=R.visible,_.wireframe=R.wireframe,y===ei?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:h[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let V=i.properties.get(_);V.light=L}return _}function v(T,R,L,y,_){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===ei)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let C=e.update(T),N=T.material;if(Array.isArray(N)){let G=C.groups;for(let D=0,z=G.length;D<z;D++){let F=G[D],Y=N[F.materialIndex];if(Y&&Y.visible){let ee=b(T,Y,y,_);T.onBeforeShadow(i,T,R,L,C,ee,F),i.renderBufferDirect(L,null,C,ee,T,F),T.onAfterShadow(i,T,R,L,C,ee,F)}}}else if(N.visible){let G=b(T,N,y,_);T.onBeforeShadow(i,T,R,L,C,G,null),i.renderBufferDirect(L,null,C,G,T,null),T.onAfterShadow(i,T,R,L,C,G,null)}}let V=T.children;for(let C=0,N=V.length;C<N;C++)v(V[C],R,L,y,_)}function E(T){T.target.removeEventListener("dispose",E);for(let L in c){let y=c[L],_=T.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}var qv={[Ql]:ec,[tc]:sc,[nc]:rc,[Ys]:ic,[ec]:Ql,[sc]:tc,[rc]:nc,[ic]:Ys};function $v(i,e){function t(){let k=!1,he=new ot,K=null,te=new ot(0,0,0,0);return{setMask:function(ge){K!==ge&&!k&&(i.colorMask(ge,ge,ge,ge),K=ge)},setLocked:function(ge){k=ge},setClear:function(ge,pe,qe,Tt,Wt){Wt===!0&&(ge*=Tt,pe*=Tt,qe*=Tt),he.set(ge,pe,qe,Tt),te.equals(he)===!1&&(i.clearColor(ge,pe,qe,Tt),te.copy(he))},reset:function(){k=!1,K=null,te.set(-1,0,0,0)}}}function n(){let k=!1,he=!1,K=null,te=null,ge=null;return{setReversed:function(pe){if(he!==pe){let qe=e.get("EXT_clip_control");he?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);let Tt=ge;ge=null,this.setClear(Tt)}he=pe},getReversed:function(){return he},setTest:function(pe){pe?W(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(pe){K!==pe&&!k&&(i.depthMask(pe),K=pe)},setFunc:function(pe){if(he&&(pe=qv[pe]),te!==pe){switch(pe){case Ql:i.depthFunc(i.NEVER);break;case ec:i.depthFunc(i.ALWAYS);break;case tc:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case nc:i.depthFunc(i.EQUAL);break;case ic:i.depthFunc(i.GEQUAL);break;case sc:i.depthFunc(i.GREATER);break;case rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=pe}},setLocked:function(pe){k=pe},setClear:function(pe){ge!==pe&&(he&&(pe=1-pe),i.clearDepth(pe),ge=pe)},reset:function(){k=!1,K=null,te=null,ge=null,he=!1}}}function s(){let k=!1,he=null,K=null,te=null,ge=null,pe=null,qe=null,Tt=null,Wt=null;return{setTest:function(dt){k||(dt?W(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(dt){he!==dt&&!k&&(i.stencilMask(dt),he=dt)},setFunc:function(dt,wn,qn){(K!==dt||te!==wn||ge!==qn)&&(i.stencilFunc(dt,wn,qn),K=dt,te=wn,ge=qn)},setOp:function(dt,wn,qn){(pe!==dt||qe!==wn||Tt!==qn)&&(i.stencilOp(dt,wn,qn),pe=dt,qe=wn,Tt=qn)},setLocked:function(dt){k=dt},setClear:function(dt){Wt!==dt&&(i.clearStencil(dt),Wt=dt)},reset:function(){k=!1,he=null,K=null,te=null,ge=null,pe=null,qe=null,Tt=null,Wt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,m=[],f=null,x=!1,p=null,g=null,M=null,b=null,v=null,E=null,T=null,R=new Ae(0,0,0),L=0,y=!1,_=null,I=null,V=null,C=null,N=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,z=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(F)[1]),D=z>=1):F.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),D=z>=2);let Y=null,ee={},ae=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),ke=new ot().fromArray(ae),H=new ot().fromArray(xe);function Z(k,he,K,te){let ge=new Uint8Array(4),pe=i.createTexture();i.bindTexture(k,pe),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<K;qe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(he+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return pe}let oe={};oe[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(i.DEPTH_TEST),a.setFunc(Ys),Ve(!1),Fe(id),W(i.CULL_FACE),U(Ri);function W(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function _e(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function le(k,he){return h[k]!==he?(i.bindFramebuffer(k,he),h[k]=he,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=he),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=he),!0):!1}function fe(k,he){let K=m,te=!1;if(k){K=d.get(he),K===void 0&&(K=[],d.set(he,K));let ge=k.textures;if(K.length!==ge.length||K[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,qe=ge.length;pe<qe;pe++)K[pe]=i.COLOR_ATTACHMENT0+pe;K.length=ge.length,te=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,te=!0);te&&i.drawBuffers(K)}function Ce(k){return f!==k?(i.useProgram(k),f=k,!0):!1}let Oe={[ns]:i.FUNC_ADD,[rg]:i.FUNC_SUBTRACT,[ag]:i.FUNC_REVERSE_SUBTRACT};Oe[og]=i.MIN,Oe[lg]=i.MAX;let st={[cg]:i.ZERO,[ug]:i.ONE,[hg]:i.SRC_COLOR,[Jl]:i.SRC_ALPHA,[xg]:i.SRC_ALPHA_SATURATE,[mg]:i.DST_COLOR,[fg]:i.DST_ALPHA,[dg]:i.ONE_MINUS_SRC_COLOR,[jl]:i.ONE_MINUS_SRC_ALPHA,[gg]:i.ONE_MINUS_DST_COLOR,[pg]:i.ONE_MINUS_DST_ALPHA,[_g]:i.CONSTANT_COLOR,[yg]:i.ONE_MINUS_CONSTANT_COLOR,[vg]:i.CONSTANT_ALPHA,[Mg]:i.ONE_MINUS_CONSTANT_ALPHA};function U(k,he,K,te,ge,pe,qe,Tt,Wt,dt){if(k===Ri){x===!0&&(_e(i.BLEND),x=!1);return}if(x===!1&&(W(i.BLEND),x=!0),k!==sg){if(k!==p||dt!==y){if((g!==ns||v!==ns)&&(i.blendEquation(i.FUNC_ADD),g=ns,v=ns),dt)switch(k){case Pn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vn:i.blendFunc(i.ONE,i.ONE);break;case sd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Pn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,b=null,E=null,T=null,R.set(0,0,0),L=0,p=k,y=dt}return}ge=ge||he,pe=pe||K,qe=qe||te,(he!==g||ge!==v)&&(i.blendEquationSeparate(Oe[he],Oe[ge]),g=he,v=ge),(K!==M||te!==b||pe!==E||qe!==T)&&(i.blendFuncSeparate(st[K],st[te],st[pe],st[qe]),M=K,b=te,E=pe,T=qe),(Tt.equals(R)===!1||Wt!==L)&&(i.blendColor(Tt.r,Tt.g,Tt.b,Wt),R.copy(Tt),L=Wt),p=k,y=!1}function Ke(k,he){k.side===Rt?_e(i.CULL_FACE):W(i.CULL_FACE);let K=k.side===$t;he&&(K=!K),Ve(K),k.blending===Pn&&k.transparent===!1?U(Ri):U(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let te=k.stencilWrite;o.setTest(te),te&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),rt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(k){_!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),_=k)}function Fe(k){k!==ng?(W(i.CULL_FACE),k!==I&&(k===id?i.cullFace(i.BACK):k===ig?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),I=k}function be(k){k!==V&&(D&&i.lineWidth(k),V=k)}function rt(k,he,K){k?(W(i.POLYGON_OFFSET_FILL),(C!==he||N!==K)&&(i.polygonOffset(he,K),C=he,N=K)):_e(i.POLYGON_OFFSET_FILL)}function De(k){k?W(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function A(k){k===void 0&&(k=i.TEXTURE0+G-1),Y!==k&&(i.activeTexture(k),Y=k)}function S(k,he,K){K===void 0&&(Y===null?K=i.TEXTURE0+G-1:K=Y);let te=ee[K];te===void 0&&(te={type:void 0,texture:void 0},ee[K]=te),(te.type!==k||te.texture!==he)&&(Y!==K&&(i.activeTexture(K),Y=K),i.bindTexture(k,he||oe[k]),te.type=k,te.texture=he)}function X(){let k=ee[Y];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(k){ke.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ke.copy(k))}function Me(k){H.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),H.copy(k))}function nt(k,he){let K=c.get(he);K===void 0&&(K=new WeakMap,c.set(he,K));let te=K.get(k);te===void 0&&(te=i.getUniformBlockIndex(he,k.name),K.set(k,te))}function Ze(k,he){let te=c.get(he).get(k);l.get(he)!==te&&(i.uniformBlockBinding(he,te,k.__bindingPointIndex),l.set(he,te))}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,ee={},h={},d=new WeakMap,m=[],f=null,x=!1,p=null,g=null,M=null,b=null,v=null,E=null,T=null,R=new Ae(0,0,0),L=0,y=!1,_=null,I=null,V=null,C=null,N=null,ke.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:W,disable:_e,bindFramebuffer:le,drawBuffers:fe,useProgram:Ce,setBlending:U,setMaterial:Ke,setFlipSided:Ve,setCullFace:Fe,setLineWidth:be,setPolygonOffset:rt,setScissorTest:De,activeTexture:A,bindTexture:S,unbindTexture:X,compressedTexImage2D:Q,compressedTexImage3D:ie,texImage2D:de,texImage3D:ze,updateUBOMapping:nt,uniformBlockBinding:Ze,texStorage2D:se,texStorage3D:ne,texSubImage2D:J,texSubImage3D:Se,compressedTexSubImage2D:ue,compressedTexSubImage3D:ve,scissor:He,viewport:Me,reset:gt}}function Qd(i,e,t,n){let s=Yv(n);switch(t){case Af:return i*e;case Cf:return i*e;case If:return i*e*2;case xu:return i*e/s.components*s.byteLength;case _u:return i*e/s.components*s.byteLength;case Pf:return i*e*2/s.components*s.byteLength;case yu:return i*e*2/s.components*s.byteLength;case Rf:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case vu:return i*e*4/s.components*s.byteLength;case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case io:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cc:case hc:return Math.max(i,16)*Math.max(e,8)/4;case lc:case uc:return Math.max(i,8)*Math.max(e,8)/2;case dc:case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ro:case Cc:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lf:case Pc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Lc:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yv(i){switch(i){case ri:case wf:return{byteLength:1,components:1};case jr:case Tf:case aa:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case as:case pu:case In:return{byteLength:4,components:1};case Ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Kv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,S){return m?new OffscreenCanvas(A,S):Qr("canvas")}function x(A,S,X){let Q=1,ie=De(A);if((ie.width>X||ie.height>X)&&(Q=X/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let J=Math.floor(Q*ie.width),Se=Math.floor(Q*ie.height);h===void 0&&(h=f(J,Se));let ue=S?f(J,Se):h;return ue.width=J,ue.height=Se,ue.getContext("2d").drawImage(A,0,0,J,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Se+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function p(A){return A.generateMipmaps}function g(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,S,X,Q,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=S;if(S===i.RED&&(X===i.FLOAT&&(J=i.R32F),X===i.HALF_FLOAT&&(J=i.R16F),X===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.R8UI),X===i.UNSIGNED_SHORT&&(J=i.R16UI),X===i.UNSIGNED_INT&&(J=i.R32UI),X===i.BYTE&&(J=i.R8I),X===i.SHORT&&(J=i.R16I),X===i.INT&&(J=i.R32I)),S===i.RG&&(X===i.FLOAT&&(J=i.RG32F),X===i.HALF_FLOAT&&(J=i.RG16F),X===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.RG8UI),X===i.UNSIGNED_SHORT&&(J=i.RG16UI),X===i.UNSIGNED_INT&&(J=i.RG32UI),X===i.BYTE&&(J=i.RG8I),X===i.SHORT&&(J=i.RG16I),X===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.RGB8UI),X===i.UNSIGNED_SHORT&&(J=i.RGB16UI),X===i.UNSIGNED_INT&&(J=i.RGB32UI),X===i.BYTE&&(J=i.RGB8I),X===i.SHORT&&(J=i.RGB16I),X===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),X===i.UNSIGNED_INT&&(J=i.RGBA32UI),X===i.BYTE&&(J=i.RGBA8I),X===i.SHORT&&(J=i.RGBA16I),X===i.INT&&(J=i.RGBA32I)),S===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),S===i.RGBA){let Se=ie?zo:et.getTransfer(Q);X===i.FLOAT&&(J=i.RGBA32F),X===i.HALF_FLOAT&&(J=i.RGBA16F),X===i.UNSIGNED_BYTE&&(J=Se===pt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(A,S){let X;return A?S===null||S===as||S===Js?X=i.DEPTH24_STENCIL8:S===In?X=i.DEPTH32F_STENCIL8:S===jr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===as||S===Js?X=i.DEPTH_COMPONENT24:S===In?X=i.DEPTH_COMPONENT32F:S===jr&&(X=i.DEPTH_COMPONENT16),X}function E(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ot&&A.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){let S=A.target;S.removeEventListener("dispose",T),L(S),S.isVideoTexture&&u.delete(S)}function R(A){let S=A.target;S.removeEventListener("dispose",R),_(S)}function L(A){let S=n.get(A);if(S.__webglInit===void 0)return;let X=A.source,Q=d.get(X);if(Q){let ie=Q[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&y(A),Object.keys(Q).length===0&&d.delete(X)}n.remove(A)}function y(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let X=A.source,Q=d.get(X);delete Q[S.__cacheKey],a.memory.textures--}function _(A){let S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ie=0;ie<S.__webglFramebuffer[Q].length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[Q][ie]);else i.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let X=A.textures;for(let Q=0,ie=X.length;Q<ie;Q++){let J=n.get(X[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(X[Q])}n.remove(A)}let I=0;function V(){I=0}function C(){let A=I;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function N(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function G(A,S){let X=n.get(A);if(A.isVideoTexture&&be(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(X,A,S);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function D(A,S){let X=n.get(A);if(A.version>0&&X.__version!==A.version){H(X,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function z(A,S){let X=n.get(A);if(A.version>0&&X.__version!==A.version){H(X,A,S);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function F(A,S){let X=n.get(A);if(A.version>0&&X.__version!==A.version){Z(X,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}let Y={[ss]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[rs]:i.MIRRORED_REPEAT},ee={[Ot]:i.NEAREST,[fu]:i.NEAREST_MIPMAP_NEAREST,[Hs]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},ae={[Og]:i.NEVER,[Gg]:i.ALWAYS,[Fg]:i.LESS,[Nf]:i.LEQUAL,[Bg]:i.EQUAL,[Vg]:i.GEQUAL,[zg]:i.GREATER,[Hg]:i.NOTEQUAL};function xe(A,S){if(S.type===In&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===rn||S.magFilter===Yr||S.magFilter===Hs||S.magFilter===Hn||S.minFilter===rn||S.minFilter===Yr||S.minFilter===Hs||S.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Y[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Y[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Y[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ee[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ee[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ot||S.minFilter!==Hs&&S.minFilter!==Hn||S.type===In&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ke(A,S){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));let Q=S.source,ie=d.get(Q);ie===void 0&&(ie={},d.set(Q,ie));let J=N(S);if(J!==A.__cacheKey){ie[J]===void 0&&(ie[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ie[J].usedTimes++;let Se=ie[A.__cacheKey];Se!==void 0&&(ie[A.__cacheKey].usedTimes--,Se.usedTimes===0&&y(S)),A.__cacheKey=J,A.__webglTexture=ie[J].texture}return X}function H(A,S,X){let Q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=i.TEXTURE_3D);let ie=ke(A,S),J=S.source;t.bindTexture(Q,A.__webglTexture,i.TEXTURE0+X);let Se=n.get(J);if(J.version!==Se.__version||ie===!0){t.activeTexture(i.TEXTURE0+X);let ue=et.getPrimaries(et.workingColorSpace),ve=S.colorSpace===Ti?null:et.getPrimaries(S.colorSpace),se=S.colorSpace===Ti||ue===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ne=x(S.image,!1,s.maxTextureSize);ne=rt(S,ne);let de=r.convert(S.format,S.colorSpace),ze=r.convert(S.type),He=b(S.internalFormat,de,ze,S.colorSpace,S.isVideoTexture);xe(Q,S);let Me,nt=S.mipmaps,Ze=S.isVideoTexture!==!0,gt=Se.__version===void 0||ie===!0,k=J.dataReady,he=E(S,ne);if(S.isDepthTexture)He=v(S.format===js,S.type),gt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,He,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,He,ne.width,ne.height,0,de,ze,null));else if(S.isDataTexture)if(nt.length>0){Ze&&gt&&t.texStorage2D(i.TEXTURE_2D,he,He,nt[0].width,nt[0].height);for(let K=0,te=nt.length;K<te;K++)Me=nt[K],Ze?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,de,ze,Me.data):t.texImage2D(i.TEXTURE_2D,K,He,Me.width,Me.height,0,de,ze,Me.data);S.generateMipmaps=!1}else Ze?(gt&&t.texStorage2D(i.TEXTURE_2D,he,He,ne.width,ne.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,de,ze,ne.data)):t.texImage2D(i.TEXTURE_2D,0,He,ne.width,ne.height,0,de,ze,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ze&&gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,He,nt[0].width,nt[0].height,ne.depth);for(let K=0,te=nt.length;K<te;K++)if(Me=nt[K],S.format!==vn)if(de!==null)if(Ze){if(k)if(S.layerUpdates.size>0){let ge=Qd(Me.width,Me.height,S.format,S.type);for(let pe of S.layerUpdates){let qe=Me.data.subarray(pe*ge/Me.data.BYTES_PER_ELEMENT,(pe+1)*ge/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,pe,Me.width,Me.height,1,de,qe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ne.depth,de,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,He,Me.width,Me.height,ne.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ne.depth,de,ze,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,He,Me.width,Me.height,ne.depth,0,de,ze,Me.data)}else{Ze&&gt&&t.texStorage2D(i.TEXTURE_2D,he,He,nt[0].width,nt[0].height);for(let K=0,te=nt.length;K<te;K++)Me=nt[K],S.format!==vn?de!==null?Ze?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,de,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,K,He,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,de,ze,Me.data):t.texImage2D(i.TEXTURE_2D,K,He,Me.width,Me.height,0,de,ze,Me.data)}else if(S.isDataArrayTexture)if(Ze){if(gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,He,ne.width,ne.height,ne.depth),k)if(S.layerUpdates.size>0){let K=Qd(ne.width,ne.height,S.format,S.type);for(let te of S.layerUpdates){let ge=ne.data.subarray(te*K/ne.data.BYTES_PER_ELEMENT,(te+1)*K/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,ne.width,ne.height,1,de,ze,ge)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,de,ze,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,ne.width,ne.height,ne.depth,0,de,ze,ne.data);else if(S.isData3DTexture)Ze?(gt&&t.texStorage3D(i.TEXTURE_3D,he,He,ne.width,ne.height,ne.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,de,ze,ne.data)):t.texImage3D(i.TEXTURE_3D,0,He,ne.width,ne.height,ne.depth,0,de,ze,ne.data);else if(S.isFramebufferTexture){if(gt)if(Ze)t.texStorage2D(i.TEXTURE_2D,he,He,ne.width,ne.height);else{let K=ne.width,te=ne.height;for(let ge=0;ge<he;ge++)t.texImage2D(i.TEXTURE_2D,ge,He,K,te,0,de,ze,null),K>>=1,te>>=1}}else if(nt.length>0){if(Ze&&gt){let K=De(nt[0]);t.texStorage2D(i.TEXTURE_2D,he,He,K.width,K.height)}for(let K=0,te=nt.length;K<te;K++)Me=nt[K],Ze?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,de,ze,Me):t.texImage2D(i.TEXTURE_2D,K,He,de,ze,Me);S.generateMipmaps=!1}else if(Ze){if(gt){let K=De(ne);t.texStorage2D(i.TEXTURE_2D,he,He,K.width,K.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,ze,ne)}else t.texImage2D(i.TEXTURE_2D,0,He,de,ze,ne);p(S)&&g(Q),Se.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Z(A,S,X){if(S.image.length!==6)return;let Q=ke(A,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+X);let J=n.get(ie);if(ie.version!==J.__version||Q===!0){t.activeTexture(i.TEXTURE0+X);let Se=et.getPrimaries(et.workingColorSpace),ue=S.colorSpace===Ti?null:et.getPrimaries(S.colorSpace),ve=S.colorSpace===Ti||Se===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let se=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,de=[];for(let te=0;te<6;te++)!se&&!ne?de[te]=x(S.image[te],!0,s.maxCubemapSize):de[te]=ne?S.image[te].image:S.image[te],de[te]=rt(S,de[te]);let ze=de[0],He=r.convert(S.format,S.colorSpace),Me=r.convert(S.type),nt=b(S.internalFormat,He,Me,S.colorSpace),Ze=S.isVideoTexture!==!0,gt=J.__version===void 0||Q===!0,k=ie.dataReady,he=E(S,ze);xe(i.TEXTURE_CUBE_MAP,S);let K;if(se){Ze&&gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,nt,ze.width,ze.height);for(let te=0;te<6;te++){K=de[te].mipmaps;for(let ge=0;ge<K.length;ge++){let pe=K[ge];S.format!==vn?He!==null?Ze?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,pe.width,pe.height,He,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,nt,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,pe.width,pe.height,He,Me,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,nt,pe.width,pe.height,0,He,Me,pe.data)}}}else{if(K=S.mipmaps,Ze&&gt){K.length>0&&he++;let te=De(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,nt,te.width,te.height)}for(let te=0;te<6;te++)if(ne){Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,de[te].width,de[te].height,He,Me,de[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,nt,de[te].width,de[te].height,0,He,Me,de[te].data);for(let ge=0;ge<K.length;ge++){let qe=K[ge].image[te].image;Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,qe.width,qe.height,He,Me,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,nt,qe.width,qe.height,0,He,Me,qe.data)}}else{Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,He,Me,de[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,nt,He,Me,de[te]);for(let ge=0;ge<K.length;ge++){let pe=K[ge];Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,He,Me,pe.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,nt,He,Me,pe.image[te])}}}p(S)&&g(i.TEXTURE_CUBE_MAP),J.__version=ie.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function oe(A,S,X,Q,ie,J){let Se=r.convert(X.format,X.colorSpace),ue=r.convert(X.type),ve=b(X.internalFormat,Se,ue,X.colorSpace),se=n.get(S),ne=n.get(X);if(ne.__renderTarget=S,!se.__hasExternalTextures){let de=Math.max(1,S.width>>J),ze=Math.max(1,S.height>>J);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,ve,de,ze,S.depth,0,Se,ue,null):t.texImage2D(ie,J,ve,de,ze,0,Se,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ie,ne.__webglTexture,0,Ve(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ie,ne.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function W(A,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let Q=S.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,J=v(S.stencilBuffer,ie),Se=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=Ve(S);Fe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,J,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,A)}else{let Q=S.textures;for(let ie=0;ie<Q.length;ie++){let J=Q[ie],Se=r.convert(J.format,J.colorSpace),ue=r.convert(J.type),ve=b(J.internalFormat,Se,ue,J.colorSpace),se=Ve(S);X&&Fe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ve,S.width,S.height):Fe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ve,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);let ie=Q.__webglTexture,J=Ve(S);if(S.depthTexture.format===Xs)Fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(S.depthTexture.format===js)Fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function le(A){let S=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let Q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){let ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",ie)};Q.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=Q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");_e(S.__webglFramebuffer,A)}else if(X){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=i.createRenderbuffer(),W(S.__webglDepthbuffer[Q],A,!1);else{let ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),W(S.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(A,S,X){let Q=n.get(A);S!==void 0&&oe(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&le(A)}function Ce(A){let S=A.texture,X=n.get(A),Q=n.get(S);A.addEventListener("dispose",R);let ie=A.textures,J=A.isWebGLCubeRenderTarget===!0,Se=ie.length>1;if(Se||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=S.version,a.memory.textures++),J){X.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[ue]=[];for(let ve=0;ve<S.mipmaps.length;ve++)X.__webglFramebuffer[ue][ve]=i.createFramebuffer()}else X.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)X.__webglFramebuffer[ue]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ue=0,ve=ie.length;ue<ve;ue++){let se=n.get(ie[ue]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Fe(A)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ue=0;ue<ie.length;ue++){let ve=ie[ue];X.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ue]);let se=r.convert(ve.format,ve.colorSpace),ne=r.convert(ve.type),de=b(ve.internalFormat,se,ne,ve.colorSpace,A.isXRRenderTarget===!0),ze=Ve(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,de,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,X.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),W(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),xe(i.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)oe(X.__webglFramebuffer[ue][ve],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve);else oe(X.__webglFramebuffer[ue],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(S)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ue=0,ve=ie.length;ue<ve;ue++){let se=ie[ue],ne=n.get(se);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),xe(i.TEXTURE_2D,se),oe(X.__webglFramebuffer,A,se,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),p(se)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Q.__webglTexture),xe(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)oe(X.__webglFramebuffer[ve],A,S,i.COLOR_ATTACHMENT0,ue,ve);else oe(X.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ue,0);p(S)&&g(ue),t.unbindTexture()}A.depthBuffer&&le(A)}function Oe(A){let S=A.textures;for(let X=0,Q=S.length;X<Q;X++){let ie=S[X];if(p(ie)){let J=M(A),Se=n.get(ie).__webglTexture;t.bindTexture(J,Se),g(J),t.unbindTexture()}}}let st=[],U=[];function Ke(A){if(A.samples>0){if(Fe(A)===!1){let S=A.textures,X=A.width,Q=A.height,ie=i.COLOR_BUFFER_BIT,J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(A),ue=S.length>1;if(ue)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);let se=n.get(S[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,X,Q,0,0,X,Q,ie,i.NEAREST),l===!0&&(st.length=0,U.length=0,st.push(i.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(st.push(J),U.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);let se=n.get(S[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ve(A){return Math.min(s.maxSamples,A.samples)}function Fe(A){let S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function be(A){let S=a.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function rt(A,S){let X=A.colorSpace,Q=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==Yt&&X!==Ti&&(et.getTransfer(X)===pt?(Q!==vn||ie!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function De(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=V,this.setTexture2D=G,this.setTexture2DArray=D,this.setTexture3D=z,this.setTextureCube=F,this.rebindTextures=fe,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Fe}function Zv(i,e){function t(n,s=Ti){let r,a=et.getTransfer(s);if(n===ri)return i.UNSIGNED_BYTE;if(n===mu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ef)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wf)return i.BYTE;if(n===Tf)return i.SHORT;if(n===jr)return i.UNSIGNED_SHORT;if(n===pu)return i.INT;if(n===as)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===aa)return i.HALF_FLOAT;if(n===Af)return i.ALPHA;if(n===Rf)return i.RGB;if(n===vn)return i.RGBA;if(n===Cf)return i.LUMINANCE;if(n===If)return i.LUMINANCE_ALPHA;if(n===Xs)return i.DEPTH_COMPONENT;if(n===js)return i.DEPTH_STENCIL;if(n===xu)return i.RED;if(n===_u)return i.RED_INTEGER;if(n===Pf)return i.RG;if(n===yu)return i.RG_INTEGER;if(n===vu)return i.RGBA_INTEGER;if(n===to||n===no||n===io||n===so)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lc||n===cc||n===uc||n===hc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dc||n===fc||n===pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dc||n===fc)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mc||n===gc||n===xc||n===_c||n===yc||n===vc||n===Mc||n===bc||n===Sc||n===wc||n===Tc||n===Ec||n===Ac||n===Rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ec)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ro||n===Cc||n===Ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ro)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lf||n===Pc||n===Lc||n===Dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Yc=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},lt=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jv={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,f=.005;c.inputState.pinching&&d>m+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qv=`
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

}`,Kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Lt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qt({vertexShader:jv,fragmentShader:Qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new Dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zc=class extends ai{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,f=null,x=new Kc,p=t.getContextAttributes(),g=null,M=null,b=[],v=[],E=new Ne,T=null,R=new Dt;R.viewport=new ot;let L=new Dt;L.viewport=new ot;let y=[R,L],_=new Yc,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=b[H];return Z===void 0&&(Z=new Jr,b[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=b[H];return Z===void 0&&(Z=new Jr,b[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=b[H];return Z===void 0&&(Z=new Jr,b[H]=Z),Z.getHandSpace()};function C(H){let Z=v.indexOf(H.inputSource);if(Z===-1)return;let oe=b[Z];oe!==void 0&&(oe.update(H.inputSource,H.frame,c||a),oe.dispatchEvent({type:H.type,data:H.inputSource}))}function N(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",G);for(let H=0;H<b.length;H++){let Z=v[H];Z!==null&&(v[H]=null,b[H].disconnect(Z))}I=null,V=null,x.reset(),e.setRenderTarget(g),m=null,d=null,h=null,s=null,M=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",N),s.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0){let Z={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new oi(m.framebufferWidth,m.framebufferHeight,{format:vn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,oe=null,W=null;p.depth&&(W=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=p.stencil?js:Xs,oe=p.stencil?Js:as);let _e={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(_e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new oi(d.textureWidth,d.textureHeight,{format:vn,type:ri,depthTexture:new xo(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(H){for(let Z=0;Z<H.removed.length;Z++){let oe=H.removed[Z],W=v.indexOf(oe);W>=0&&(v[W]=null,b[W].disconnect(oe))}for(let Z=0;Z<H.added.length;Z++){let oe=H.added[Z],W=v.indexOf(oe);if(W===-1){for(let le=0;le<b.length;le++)if(le>=v.length){v.push(oe),W=le;break}else if(v[le]===null){v[le]=oe,W=le;break}if(W===-1)break}let _e=b[W];_e&&_e.connect(oe)}}let D=new P,z=new P;function F(H,Z,oe){D.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(oe.matrixWorld);let W=D.distanceTo(z),_e=Z.projectionMatrix.elements,le=oe.projectionMatrix.elements,fe=_e[14]/(_e[10]-1),Ce=_e[14]/(_e[10]+1),Oe=(_e[9]+1)/_e[5],st=(_e[9]-1)/_e[5],U=(_e[8]-1)/_e[0],Ke=(le[8]+1)/le[0],Ve=fe*U,Fe=fe*Ke,be=W/(-U+Ke),rt=be*-U;if(Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(rt),H.translateZ(be),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),_e[10]===-1)H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let De=fe+be,A=Ce+be,S=Ve-rt,X=Fe+(W-rt),Q=Oe*Ce/A*De,ie=st*Ce/A*De;H.projectionMatrix.makePerspective(S,X,Q,ie,De,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Y(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Z=H.near,oe=H.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(oe=x.depthFar)),_.near=L.near=R.near=Z,_.far=L.far=R.far=oe,(I!==_.near||V!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,V=_.far),R.layers.mask=H.layers.mask|2,L.layers.mask=H.layers.mask|4,_.layers.mask=R.layers.mask|L.layers.mask;let W=H.parent,_e=_.cameras;Y(_,W);for(let le=0;le<_e.length;le++)Y(_e[le],W);_e.length===2?F(_,R,L):_.projectionMatrix.copy(R.projectionMatrix),ee(H,_,W)};function ee(H,Z,oe){oe===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(oe.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=tr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let ae=null;function xe(H,Z){if(u=Z.getViewerPose(c||a),f=Z,u!==null){let oe=u.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let W=!1;oe.length!==_.cameras.length&&(_.cameras.length=0,W=!0);for(let le=0;le<oe.length;le++){let fe=oe[le],Ce=null;if(m!==null)Ce=m.getViewport(fe);else{let st=h.getViewSubImage(d,fe);Ce=st.viewport,le===0&&(e.setRenderTargetTextures(M,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(M))}let Oe=y[le];Oe===void 0&&(Oe=new Dt,Oe.layers.enable(le),Oe.viewport=new ot,y[le]=Oe),Oe.matrix.fromArray(fe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(fe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),le===0&&(_.matrix.copy(Oe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),W===!0&&_.cameras.push(Oe)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")){let le=h.getDepthInformation(oe[0]);le&&le.isValid&&le.texture&&x.init(e,le,s.renderState)}}for(let oe=0;oe<b.length;oe++){let W=v[oe],_e=b[oe];W!==null&&_e!==void 0&&_e.update(W,Z,c||a)}ae&&ae(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),f=null}let ke=new Bf;ke.setAnimationLoop(xe),this.setAnimationLoop=function(H){ae=H},this.dispose=function(){}}},es=new Gn,eM=new We;function tM(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Ff(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,b,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&m(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),f(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,M,b):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===$t&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===$t&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let M=e.get(g),b=M.envMap,v=M.envMapRotation;b&&(p.envMap.value=b,es.copy(v),es.x*=-1,es.y*=-1,es.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),p.envMapRotation.value.setFromMatrix4(eM.makeRotationFromEuler(es)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=b*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function m(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$t&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function f(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let M=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nM(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){let v=b.program;n.uniformBlockBinding(M,v)}function c(M,b){let v=s[M.id];v===void 0&&(f(M),v=u(M),s[M.id]=v,M.addEventListener("dispose",p));let E=b.program;n.updateUBOMapping(M,E);let T=e.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function u(M){let b=h();M.__bindingPointIndex=b;let v=i.createBuffer(),E=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let b=s[M.id],v=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,R=v.length;T<R;T++){let L=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,_=L.length;y<_;y++){let I=L[y];if(m(I,T,y,E)===!0){let V=I.__offset,C=Array.isArray(I.value)?I.value:[I.value],N=0;for(let G=0;G<C.length;G++){let D=C[G],z=x(D);typeof D=="number"||typeof D=="boolean"?(I.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,V+N,I.__data)):D.isMatrix3?(I.__data[0]=D.elements[0],I.__data[1]=D.elements[1],I.__data[2]=D.elements[2],I.__data[3]=0,I.__data[4]=D.elements[3],I.__data[5]=D.elements[4],I.__data[6]=D.elements[5],I.__data[7]=0,I.__data[8]=D.elements[6],I.__data[9]=D.elements[7],I.__data[10]=D.elements[8],I.__data[11]=0):(D.toArray(I.__data,N),N+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,b,v,E){let T=M.value,R=b+"_"+v;if(E[R]===void 0)return typeof T=="number"||typeof T=="boolean"?E[R]=T:E[R]=T.clone(),!0;{let L=E[R];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return E[R]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function f(M){let b=M.uniforms,v=0,E=16;for(let R=0,L=b.length;R<L;R++){let y=Array.isArray(b[R])?b[R]:[b[R]];for(let _=0,I=y.length;_<I;_++){let V=y[_],C=Array.isArray(V.value)?V.value:[V.value];for(let N=0,G=C.length;N<G;N++){let D=C[N],z=x(D),F=v%E,Y=F%z.boundary,ee=F+Y;v+=Y,ee!==0&&E-ee<z.storage&&(v+=E-ee),V.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=z.storage}}}let T=v%E;return T>0&&(v+=E-T),M.__size=v,M.__cache={},this}function x(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function p(M){let b=M.target;b.removeEventListener("dispose",p);let v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}var _o=class{constructor(e={}){let{canvas:t=a0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let f=new Uint32Array(4),x=new Int32Array(4),p=null,g=null,M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=Ci,this.toneMappingExposure=1;let v=this,E=!1,T=0,R=0,L=null,y=-1,_=null,I=new ot,V=new ot,C=null,N=new Ae(0),G=0,D=t.width,z=t.height,F=1,Y=null,ee=null,ae=new ot(0,0,D,z),xe=new ot(0,0,D,z),ke=!1,H=new ea,Z=!1,oe=!1,W=new We,_e=new We,le=new P,fe=new ot,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function st(){return L===null?F:1}let U=n;function Ke(w,O){return t.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hu}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),U===null){let O="webgl2";if(U=Ke(O,w),U===null)throw Ke(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ve,Fe,be,rt,De,A,S,X,Q,ie,J,Se,ue,ve,se,ne,de,ze,He,Me,nt,Ze,gt,k;function he(){Ve=new _y(U),Ve.init(),Ze=new Zv(U,Ve),Fe=new dy(U,Ve,e,Ze),be=new $v(U,Ve),Fe.reverseDepthBuffer&&d&&be.buffers.depth.setReversed(!0),rt=new My(U),De=new Nv,A=new Kv(U,Ve,be,De,Fe,Ze,rt),S=new py(v),X=new xy(v),Q=new R0(U),gt=new uy(U,Q),ie=new yy(U,Q,rt,gt),J=new Sy(U,ie,Q,rt),He=new by(U,Fe,A),ne=new fy(De),Se=new Dv(v,S,X,Ve,Fe,gt,ne),ue=new tM(v,De),ve=new kv,se=new Vv(Ve),ze=new cy(v,S,X,be,J,m,l),de=new Xv(v,J,Fe),k=new nM(U,rt,Fe,be),Me=new hy(U,Ve,rt),nt=new vy(U,Ve,rt),rt.programs=Se.programs,v.capabilities=Fe,v.extensions=Ve,v.properties=De,v.renderLists=ve,v.shadowMap=de,v.state=be,v.info=rt}he();let K=new Zc(v,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=Ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(D,z,!1))},this.getSize=function(w){return w.set(D,z)},this.setSize=function(w,O,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,z=O,t.width=Math.floor(w*F),t.height=Math.floor(O*F),q===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(D*F,z*F).floor()},this.setDrawingBufferSize=function(w,O,q){D=w,z=O,F=q,t.width=Math.floor(w*q),t.height=Math.floor(O*q),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,O,q,$){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,O,q,$),be.viewport(I.copy(ae).multiplyScalar(F).round())},this.getScissor=function(w){return w.copy(xe)},this.setScissor=function(w,O,q,$){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,O,q,$),be.scissor(V.copy(xe).multiplyScalar(F).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(w){be.setScissorTest(ke=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){ee=w},this.getClearColor=function(w){return w.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(w=!0,O=!0,q=!0){let $=0;if(w){let B=!1;if(L!==null){let re=L.texture.format;B=re===vu||re===yu||re===_u}if(B){let re=L.texture.type,me=re===ri||re===as||re===jr||re===Js||re===mu||re===gu,we=ze.getClearColor(),Te=ze.getClearAlpha(),Ge=we.r,$e=we.g,Ee=we.b;me?(f[0]=Ge,f[1]=$e,f[2]=Ee,f[3]=Te,U.clearBufferuiv(U.COLOR,0,f)):(x[0]=Ge,x[1]=$e,x[2]=Ee,x[3]=Te,U.clearBufferiv(U.COLOR,0,x))}else $|=U.COLOR_BUFFER_BIT}O&&($|=U.DEPTH_BUFFER_BIT),q&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ve.dispose(),se.dispose(),De.dispose(),S.dispose(),X.dispose(),J.dispose(),gt.dispose(),k.dispose(),Se.dispose(),K.dispose(),K.removeEventListener("sessionstart",Kh),K.removeEventListener("sessionend",Zh),Yi.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=rt.autoReset,O=de.enabled,q=de.autoUpdate,$=de.needsUpdate,B=de.type;he(),rt.autoReset=w,de.enabled=O,de.autoUpdate=q,de.needsUpdate=$,de.type=B}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function qe(w){let O=w.target;O.removeEventListener("dispose",qe),Tt(O)}function Tt(w){Wt(w),De.remove(w)}function Wt(w){let O=De.get(w).programs;O!==void 0&&(O.forEach(function(q){Se.releaseProgram(q)}),w.isShaderMaterial&&Se.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,q,$,B,re){O===null&&(O=Ce);let me=B.isMesh&&B.matrixWorld.determinant()<0,we=Qm(w,O,q,$,B);be.setMaterial($,me);let Te=q.index,Ge=1;if($.wireframe===!0){if(Te=ie.getWireframeAttribute(q),Te===void 0)return;Ge=2}let $e=q.drawRange,Ee=q.attributes.position,at=$e.start*Ge,xt=($e.start+$e.count)*Ge;re!==null&&(at=Math.max(at,re.start*Ge),xt=Math.min(xt,(re.start+re.count)*Ge)),Te!==null?(at=Math.max(at,0),xt=Math.min(xt,Te.count)):Ee!=null&&(at=Math.max(at,0),xt=Math.min(xt,Ee.count));let yt=xt-at;if(yt<0||yt===1/0)return;gt.setup(B,$,we,q,Te);let sn,ct=Me;if(Te!==null&&(sn=Q.get(Te),ct=nt,ct.setIndex(sn)),B.isMesh)$.wireframe===!0?(be.setLineWidth($.wireframeLinewidth*st()),ct.setMode(U.LINES)):ct.setMode(U.TRIANGLES);else if(B.isLine){let Ie=$.linewidth;Ie===void 0&&(Ie=1),be.setLineWidth(Ie*st()),B.isLineSegments?ct.setMode(U.LINES):B.isLineLoop?ct.setMode(U.LINE_LOOP):ct.setMode(U.LINE_STRIP)}else B.isPoints?ct.setMode(U.POINTS):B.isSprite&&ct.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ct.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))ct.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ie=B._multiDrawStarts,$n=B._multiDrawCounts,ut=B._multiDrawCount,Tn=Te?Q.get(Te).bytesPerElement:1,Ms=De.get($).currentProgram.getUniforms();for(let cn=0;cn<ut;cn++)Ms.setValue(U,"_gl_DrawID",cn),ct.render(Ie[cn]/Tn,$n[cn])}else if(B.isInstancedMesh)ct.renderInstances(at,yt,B.count);else if(q.isInstancedBufferGeometry){let Ie=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,$n=Math.min(q.instanceCount,Ie);ct.renderInstances(at,yt,$n)}else ct.render(at,yt)};function dt(w,O,q){w.transparent===!0&&w.side===Rt&&w.forceSinglePass===!1?(w.side=$t,w.needsUpdate=!0,wa(w,O,q),w.side=Mn,w.needsUpdate=!0,wa(w,O,q),w.side=Rt):wa(w,O,q)}this.compile=function(w,O,q=null){q===null&&(q=w),g=se.get(q),g.init(O),b.push(g),q.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),w!==q&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();let $=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let re=B.material;if(re)if(Array.isArray(re))for(let me=0;me<re.length;me++){let we=re[me];dt(we,q,B),$.add(we)}else dt(re,q,B),$.add(re)}),b.pop(),g=null,$},this.compileAsync=function(w,O,q=null){let $=this.compile(w,O,q);return new Promise(B=>{function re(){if($.forEach(function(me){De.get(me).currentProgram.isReady()&&$.delete(me)}),$.size===0){B(w);return}setTimeout(re,10)}Ve.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let wn=null;function qn(w){wn&&wn(w)}function Kh(){Yi.stop()}function Zh(){Yi.start()}let Yi=new Bf;Yi.setAnimationLoop(qn),typeof self!="undefined"&&Yi.setContext(self),this.setAnimationLoop=function(w){wn=w,K.setAnimationLoop(w),w===null?Yi.stop():Yi.start()},K.addEventListener("sessionstart",Kh),K.addEventListener("sessionend",Zh),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,L),g=se.get(w,b.length),g.init(O),b.push(g),_e.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H.setFromProjectionMatrix(_e),oe=this.localClippingEnabled,Z=ne.init(this.clippingPlanes,oe),p=ve.get(w,M.length),p.init(),M.push(p),K.enabled===!0&&K.isPresenting===!0){let re=v.xr.getDepthSensingMesh();re!==null&&xl(re,O,-1/0,v.sortObjects)}xl(w,O,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(Y,ee),Oe=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Oe&&ze.addToRenderList(p,w),this.info.render.frame++,Z===!0&&ne.beginShadows();let q=g.state.shadowsArray;de.render(q,w,O),Z===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=p.opaque,B=p.transmissive;if(g.setupLights(),O.isArrayCamera){let re=O.cameras;if(B.length>0)for(let me=0,we=re.length;me<we;me++){let Te=re[me];jh($,B,w,Te)}Oe&&ze.render(w);for(let me=0,we=re.length;me<we;me++){let Te=re[me];Jh(p,w,Te,Te.viewport)}}else B.length>0&&jh($,B,w,O),Oe&&ze.render(w),Jh(p,w,O);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(v,w,O),gt.resetDefaultState(),y=-1,_=null,b.pop(),b.length>0?(g=b[b.length-1],Z===!0&&ne.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function xl(w,O,q,$){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||H.intersectsSprite(w)){$&&fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_e);let me=J.update(w),we=w.material;we.visible&&p.push(w,me,we,q,fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||H.intersectsObject(w))){let me=J.update(w),we=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),fe.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),fe.copy(me.boundingSphere.center)),fe.applyMatrix4(w.matrixWorld).applyMatrix4(_e)),Array.isArray(we)){let Te=me.groups;for(let Ge=0,$e=Te.length;Ge<$e;Ge++){let Ee=Te[Ge],at=we[Ee.materialIndex];at&&at.visible&&p.push(w,me,at,q,fe.z,Ee)}}else we.visible&&p.push(w,me,we,q,fe.z,null)}}let re=w.children;for(let me=0,we=re.length;me<we;me++)xl(re[me],O,q,$)}function Jh(w,O,q,$){let B=w.opaque,re=w.transmissive,me=w.transparent;g.setupLightsView(q),Z===!0&&ne.setGlobalState(v.clippingPlanes,q),$&&be.viewport(I.copy($)),B.length>0&&Sa(B,O,q),re.length>0&&Sa(re,O,q),me.length>0&&Sa(me,O,q),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function jh(w,O,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new oi(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?aa:ri,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let re=g.state.transmissionRenderTarget[$.id],me=$.viewport||I;re.setSize(me.z,me.w);let we=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(N),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Oe&&ze.render(q);let Te=v.toneMapping;v.toneMapping=Ci;let Ge=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),Z===!0&&ne.setGlobalState(v.clippingPlanes,$),Sa(w,q,$),A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ee=0,at=O.length;Ee<at;Ee++){let xt=O[Ee],yt=xt.object,sn=xt.geometry,ct=xt.material,Ie=xt.group;if(ct.side===Rt&&yt.layers.test($.layers)){let $n=ct.side;ct.side=$t,ct.needsUpdate=!0,Qh(yt,q,$,sn,ct,Ie),ct.side=$n,ct.needsUpdate=!0,$e=!0}}$e===!0&&(A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re))}v.setRenderTarget(we),v.setClearColor(N,G),Ge!==void 0&&($.viewport=Ge),v.toneMapping=Te}function Sa(w,O,q){let $=O.isScene===!0?O.overrideMaterial:null;for(let B=0,re=w.length;B<re;B++){let me=w[B],we=me.object,Te=me.geometry,Ge=$===null?me.material:$,$e=me.group;we.layers.test(q.layers)&&Qh(we,O,q,Te,Ge,$e)}}function Qh(w,O,q,$,B,re){w.onBeforeRender(v,O,q,$,B,re),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(v,O,q,$,w,re),B.transparent===!0&&B.side===Rt&&B.forceSinglePass===!1?(B.side=$t,B.needsUpdate=!0,v.renderBufferDirect(q,O,$,B,w,re),B.side=Mn,B.needsUpdate=!0,v.renderBufferDirect(q,O,$,B,w,re),B.side=Rt):v.renderBufferDirect(q,O,$,B,w,re),w.onAfterRender(v,O,q,$,B,re)}function wa(w,O,q){O.isScene!==!0&&(O=Ce);let $=De.get(w),B=g.state.lights,re=g.state.shadowsArray,me=B.state.version,we=Se.getParameters(w,B.state,re,O,q),Te=Se.getProgramCacheKey(we),Ge=$.programs;$.environment=w.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(w.isMeshStandardMaterial?X:S).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",qe),Ge=new Map,$.programs=Ge);let $e=Ge.get(Te);if($e!==void 0){if($.currentProgram===$e&&$.lightsStateVersion===me)return td(w,we),$e}else we.uniforms=Se.getUniforms(w),w.onBeforeCompile(we,v),$e=Se.acquireProgram(we,Te),Ge.set(Te,$e),$.uniforms=we.uniforms;let Ee=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ee.clippingPlanes=ne.uniform),td(w,we),$.needsLights=tg(w),$.lightsStateVersion=me,$.needsLights&&(Ee.ambientLightColor.value=B.state.ambient,Ee.lightProbe.value=B.state.probe,Ee.directionalLights.value=B.state.directional,Ee.directionalLightShadows.value=B.state.directionalShadow,Ee.spotLights.value=B.state.spot,Ee.spotLightShadows.value=B.state.spotShadow,Ee.rectAreaLights.value=B.state.rectArea,Ee.ltc_1.value=B.state.rectAreaLTC1,Ee.ltc_2.value=B.state.rectAreaLTC2,Ee.pointLights.value=B.state.point,Ee.pointLightShadows.value=B.state.pointShadow,Ee.hemisphereLights.value=B.state.hemi,Ee.directionalShadowMap.value=B.state.directionalShadowMap,Ee.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ee.spotShadowMap.value=B.state.spotShadowMap,Ee.spotLightMatrix.value=B.state.spotLightMatrix,Ee.spotLightMap.value=B.state.spotLightMap,Ee.pointShadowMap.value=B.state.pointShadowMap,Ee.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=$e,$.uniformsList=null,$e}function ed(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=$s.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function td(w,O){let q=De.get(w);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Qm(w,O,q,$,B){O.isScene!==!0&&(O=Ce),A.resetTextureUnits();let re=O.fog,me=$.isMeshStandardMaterial?O.environment:null,we=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Yt,Te=($.isMeshStandardMaterial?X:S).get($.envMap||me),Ge=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$e=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ee=!!q.morphAttributes.position,at=!!q.morphAttributes.normal,xt=!!q.morphAttributes.color,yt=Ci;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(yt=v.toneMapping);let sn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ct=sn!==void 0?sn.length:0,Ie=De.get($),$n=g.state.lights;if(Z===!0&&(oe===!0||w!==_)){let _n=w===_&&$.id===y;ne.setState($,w,_n)}let ut=!1;$.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==$n.state.version||Ie.outputColorSpace!==we||B.isBatchedMesh&&Ie.batching===!1||!B.isBatchedMesh&&Ie.batching===!0||B.isBatchedMesh&&Ie.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ie.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ie.instancing===!1||!B.isInstancedMesh&&Ie.instancing===!0||B.isSkinnedMesh&&Ie.skinning===!1||!B.isSkinnedMesh&&Ie.skinning===!0||B.isInstancedMesh&&Ie.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ie.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ie.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ie.instancingMorph===!1&&B.morphTexture!==null||Ie.envMap!==Te||$.fog===!0&&Ie.fog!==re||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ne.numPlanes||Ie.numIntersection!==ne.numIntersection)||Ie.vertexAlphas!==Ge||Ie.vertexTangents!==$e||Ie.morphTargets!==Ee||Ie.morphNormals!==at||Ie.morphColors!==xt||Ie.toneMapping!==yt||Ie.morphTargetsCount!==ct)&&(ut=!0):(ut=!0,Ie.__version=$.version);let Tn=Ie.currentProgram;ut===!0&&(Tn=wa($,O,B));let Ms=!1,cn=!1,Dr=!1,vt=Tn.getUniforms(),Bn=Ie.uniforms;if(be.useProgram(Tn.program)&&(Ms=!0,cn=!0,Dr=!0),$.id!==y&&(y=$.id,cn=!0),Ms||_!==w){be.buffers.depth.getReversed()?(W.copy(w.projectionMatrix),l0(W),c0(W),vt.setValue(U,"projectionMatrix",W)):vt.setValue(U,"projectionMatrix",w.projectionMatrix),vt.setValue(U,"viewMatrix",w.matrixWorldInverse);let xi=vt.map.cameraPosition;xi!==void 0&&xi.setValue(U,le.setFromMatrixPosition(w.matrixWorld)),Fe.logarithmicDepthBuffer&&vt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&vt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,cn=!0,Dr=!0)}if(B.isSkinnedMesh){vt.setOptional(U,B,"bindMatrix"),vt.setOptional(U,B,"bindMatrixInverse");let _n=B.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),vt.setValue(U,"boneTexture",_n.boneTexture,A))}B.isBatchedMesh&&(vt.setOptional(U,B,"batchingTexture"),vt.setValue(U,"batchingTexture",B._matricesTexture,A),vt.setOptional(U,B,"batchingIdTexture"),vt.setValue(U,"batchingIdTexture",B._indirectTexture,A),vt.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&vt.setValue(U,"batchingColorTexture",B._colorsTexture,A));let Nr=q.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0)&&He.update(B,q,Tn),(cn||Ie.receiveShadow!==B.receiveShadow)&&(Ie.receiveShadow=B.receiveShadow,vt.setValue(U,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Bn.envMap.value=Te,Bn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(Bn.envMapIntensity.value=O.environmentIntensity),cn&&(vt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&eg(Bn,Dr),re&&$.fog===!0&&ue.refreshFogUniforms(Bn,re),ue.refreshMaterialUniforms(Bn,$,F,z,g.state.transmissionRenderTarget[w.id]),$s.upload(U,ed(Ie),Bn,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&($s.upload(U,ed(Ie),Bn,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&vt.setValue(U,"center",B.center),vt.setValue(U,"modelViewMatrix",B.modelViewMatrix),vt.setValue(U,"normalMatrix",B.normalMatrix),vt.setValue(U,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let _n=$.uniformsGroups;for(let xi=0,_i=_n.length;xi<_i;xi++){let nd=_n[xi];k.update(nd,Tn),k.bind(nd,Tn)}}return Tn}function eg(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function tg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,O,q){De.get(w.texture).__webglTexture=O,De.get(w.depthTexture).__webglTexture=q;let $=De.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let q=De.get(w);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,q=0){L=w,T=O,R=q;let $=!0,B=null,re=!1,me=!1;if(w){let Te=De.get(w);if(Te.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(U.FRAMEBUFFER,null),$=!1;else if(Te.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Te.__hasExternalTextures)A.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ee=w.depthTexture;if(Te.__boundDepthTexture!==Ee){if(Ee!==null&&De.has(Ee)&&(w.width!==Ee.image.width||w.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Ge=w.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(me=!0);let $e=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($e[O])?B=$e[O][q]:B=$e[O],re=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?B=De.get(w).__webglMultisampledFramebuffer:Array.isArray($e)?B=$e[q]:B=$e,I.copy(w.viewport),V.copy(w.scissor),C=w.scissorTest}else I.copy(ae).multiplyScalar(F).floor(),V.copy(xe).multiplyScalar(F).floor(),C=ke;if(be.bindFramebuffer(U.FRAMEBUFFER,B)&&$&&be.drawBuffers(w,B),be.viewport(I),be.scissor(V),be.setScissorTest(C),re){let Te=De.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Te.__webglTexture,q)}else if(me){let Te=De.get(w.texture),Ge=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.__webglTexture,q||0,Ge)}y=-1},this.readRenderTargetPixels=function(w,O,q,$,B,re,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){be.bindFramebuffer(U.FRAMEBUFFER,we);try{let Te=w.texture,Ge=Te.format,$e=Te.type;if(!Fe.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-$&&q>=0&&q<=w.height-B&&U.readPixels(O,q,$,B,Ze.convert(Ge),Ze.convert($e),re)}finally{let Te=L!==null?De.get(L).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(w,O,q,$,B,re,me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){let Te=w.texture,Ge=Te.format,$e=Te.type;if(!Fe.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-$&&q>=0&&q<=w.height-B){be.bindFramebuffer(U.FRAMEBUFFER,we);let Ee=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ee),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(O,q,$,B,Ze.convert(Ge),Ze.convert($e),0);let at=L!==null?De.get(L).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,at);let xt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await o0(U,xt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ee),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(Ee),U.deleteSync(xt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,q=0){w.isTexture!==!0&&(qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let $=Math.pow(2,-q),B=Math.floor(w.image.width*$),re=Math.floor(w.image.height*$),me=O!==null?O.x:0,we=O!==null?O.y:0;A.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,me,we,B,re),be.unbindTexture()},this.copyTextureToTexture=function(w,O,q=null,$=null,B=0){w.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],O=arguments[2],B=arguments[3]||0,q=null);let re,me,we,Te,Ge,$e,Ee,at,xt,yt=w.isCompressedTexture?w.mipmaps[B]:w.image;q!==null?(re=q.max.x-q.min.x,me=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Te=q.min.x,Ge=q.min.y,$e=q.isBox3?q.min.z:0):(re=yt.width,me=yt.height,we=yt.depth||1,Te=0,Ge=0,$e=0),$!==null?(Ee=$.x,at=$.y,xt=$.z):(Ee=0,at=0,xt=0);let sn=Ze.convert(O.format),ct=Ze.convert(O.type),Ie;O.isData3DTexture?(A.setTexture3D(O,0),Ie=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),Ie=U.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),Ie=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let $n=U.getParameter(U.UNPACK_ROW_LENGTH),ut=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Tn=U.getParameter(U.UNPACK_SKIP_PIXELS),Ms=U.getParameter(U.UNPACK_SKIP_ROWS),cn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,yt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Te),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ge),U.pixelStorei(U.UNPACK_SKIP_IMAGES,$e);let Dr=w.isDataArrayTexture||w.isData3DTexture,vt=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Bn=De.get(w),Nr=De.get(O),_n=De.get(Bn.__renderTarget),xi=De.get(Nr.__renderTarget);be.bindFramebuffer(U.READ_FRAMEBUFFER,_n.__webglFramebuffer),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let _i=0;_i<we;_i++)Dr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.get(w).__webglTexture,B,$e+_i),w.isDepthTexture?(vt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.get(O).__webglTexture,B,xt+_i),U.blitFramebuffer(Te,Ge,re,me,Ee,at,re,me,U.DEPTH_BUFFER_BIT,U.NEAREST)):vt?U.copyTexSubImage3D(Ie,B,Ee,at,xt+_i,Te,Ge,re,me):U.copyTexSubImage2D(Ie,B,Ee,at,xt+_i,Te,Ge,re,me);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else vt?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Ie,B,Ee,at,xt,re,me,we,sn,ct,yt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Ie,B,Ee,at,xt,re,me,we,sn,yt.data):U.texSubImage3D(Ie,B,Ee,at,xt,re,me,we,sn,ct,yt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,Ee,at,re,me,sn,ct,yt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,Ee,at,yt.width,yt.height,sn,yt.data):U.texSubImage2D(U.TEXTURE_2D,B,Ee,at,re,me,sn,ct,yt);U.pixelStorei(U.UNPACK_ROW_LENGTH,$n),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Tn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ms),U.pixelStorei(U.UNPACK_SKIP_IMAGES,cn),B===0&&O.generateMipmaps&&U.generateMipmap(Ie),be.unbindTexture()},this.copyTextureToTexture3D=function(w,O,q=null,$=null,B=0){return w.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,w=arguments[2],O=arguments[3],B=arguments[4]||0),qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,q,$,B)},this.initRenderTarget=function(w){De.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),be.unbindTexture()},this.resetState=function(){T=0,R=0,L=null,be.reset(),gt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var yo=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nc,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zt=new P,os=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},li=class extends jt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ks,Br=new P,Os=new P,Fs=new P,Bs=new Ne,zr=new Ne,Wf=new We,Xa=new P,Hr=new P,qa=new P,ef=new Ne,Xl=new Ne,tf=new Ne,Ii=class extends bt{constructor(e=new li){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new rr(t,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new os(n,3,0,!1)),ks.setAttribute("uv",new os(n,2,3,!1))}this.geometry=ks,this.material=e,this.center=new Ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),Wf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Fs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;$a(Xa.set(-.5,-.5,0),Fs,a,Os,s,r),$a(Hr.set(.5,-.5,0),Fs,a,Os,s,r),$a(qa.set(.5,.5,0),Fs,a,Os,s,r),ef.set(0,0),Xl.set(1,0),tf.set(1,1);let o=e.ray.intersectTriangle(Xa,Hr,qa,!1,Br);if(o===null&&($a(Hr.set(-.5,.5,0),Fs,a,Os,s,r),Xl.set(0,1),o=e.ray.intersectTriangle(Xa,qa,Hr,!1,Br),o===null))return;let l=e.ray.origin.distanceTo(Br);l<e.near||l>e.far||t.push({distance:l,point:Br.clone(),uv:Ei.getInterpolation(Br,Xa,Hr,qa,ef,Xl,tf,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function $a(i,e,t,n,s,r){Bs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(zr.x=r*Bs.x-s*Bs.y,zr.y=s*Bs.x+r*Bs.y):zr.copy(Bs),i.copy(e),i.x+=zr.x,i.y+=zr.y,i.applyMatrix4(Wf)}var nf=new P,sf=new ot,rf=new ot,iM=new P,af=new We,Ya=new P,ql=new dn,of=new We,$l=new nr,vo=class extends Pe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ad,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ft),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ya),this.boundingBox.expandByPoint(Ya)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ya),this.boundingSphere.expandByPoint(Ya)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ql.copy(this.boundingSphere),ql.applyMatrix4(s),e.ray.intersectsSphere(ql)!==!1&&(of.copy(s).invert(),$l.copy(e.ray).applyMatrix4(of),!(this.boundingBox!==null&&$l.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$l)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ad?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;sf.fromBufferAttribute(s.attributes.skinIndex,e),rf.fromBufferAttribute(s.attributes.skinWeight,e),nf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=rf.getComponent(r);if(a!==0){let o=sf.getComponent(r);af.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(iM.copy(nf).applyMatrix4(af),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},ta=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ar=class extends Lt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ot,u=Ot,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lf=new We,sM=new We,Mo=class i{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:sM;lf.multiplyMatrices(o,t[r]),lf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ar(t,e,e,vn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ta),this.bones.push(a),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},ls=class extends Et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zs=new We,cf=new We,Ka=[],uf=new Ft,rM=new We,Vr=new Pe,Gr=new dn,bo=class extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ls(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ft),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),uf.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(uf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),Gr.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(n),e.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),cf.multiplyMatrices(n,zs),Vr.matrixWorld=cf,Vr.raycast(e,Ka);for(let a=0,o=Ka.length;a<o;a++){let l=Ka[a];l.instanceId=r,l.object=this,t.push(l)}Ka.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ar(new Float32Array(s*this.count),s,this.count,xu,In));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var na=class extends jt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},So=new P,wo=new P,hf=new We,Wr=new nr,Za=new dn,Yl=new P,df=new P,or=class extends bt{constructor(e=new wt,t=new na){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)So.fromBufferAttribute(t,s-1),wo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=So.distanceTo(wo);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(s),Za.radius+=r,e.ray.intersectsSphere(Za)===!1)return;hf.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(hf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let m=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let x=m,p=f-1;x<p;x+=c){let g=u.getX(x),M=u.getX(x+1),b=Ja(this,e,Wr,l,g,M);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(f-1),p=u.getX(m),g=Ja(this,e,Wr,l,x,p);g&&t.push(g)}}else{let m=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=m,p=f-1;x<p;x+=c){let g=Ja(this,e,Wr,l,x,x+1);g&&t.push(g)}if(this.isLineLoop){let x=Ja(this,e,Wr,l,f-1,m);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ja(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(So.fromBufferAttribute(a,s),wo.fromBufferAttribute(a,r),t.distanceSqToSegment(So,wo,Yl,df)>n)return;Yl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Yl);if(!(l<e.near||l>e.far))return{distance:l,point:df.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ff=new P,pf=new P,To=class extends or{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ff.fromBufferAttribute(t,s),pf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ff.distanceTo(pf);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Eo=class extends or{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ia=class extends jt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mf=new We,Jc=new nr,ja=new dn,Qa=new P,lr=class extends bt{constructor(e=new wt,t=new ia){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(s),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;mf.copy(s).invert(),Jc.copy(e.ray).applyMatrix4(mf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let f=d,x=m;f<x;f++){let p=c.getX(f);Qa.fromBufferAttribute(h,p),gf(Qa,p,l,s,e,t,this)}}else{let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let f=d,x=m;f<x;f++)Qa.fromBufferAttribute(h,f),gf(Qa,f,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function gf(i,e,t,n,s,r,a){let o=Jc.distanceSqToPoint(i);if(o<t){let l=new P;Jc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ao=class extends Lt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ro=class i extends wt{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=zt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,h=new P,d=new Ne,m=new P,f=new P,x=new P,p=0,g=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:p=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,m.x=g*1,m.y=-p,m.z=g*0,x.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,m.x=g*1,m.y=-p,m.z=g*0,f.copy(m),m.x+=x.x,m.y+=x.y,m.z+=x.z,m.normalize(),l.push(m.x,m.y,m.z),x.copy(f)}for(let M=0;M<=t;M++){let b=n+M*u*s,v=Math.sin(b),E=Math.cos(b);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*v,h.y=e[T].y,h.z=e[T].x*E,a.push(h.x,h.y,h.z),d.x=M/t,d.y=T/(e.length-1),o.push(d.x,d.y);let R=l[3*T+0]*v,L=l[3*T+1],y=l[3*T+0]*E;c.push(R,L,y)}}for(let M=0;M<t;M++)for(let b=0;b<e.length-1;b++){let v=b+M*e.length,E=v,T=v+e.length,R=v+e.length+1,L=v+1;r.push(E,T,L),r.push(R,L,T)}this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("uv",new ht(o,2)),this.setAttribute("normal",new ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Pi=class i extends wt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,u=new Ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let m=n+h/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nn=class i extends wt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],m=[],f=0,x=[],p=n/2,g=0;M(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(m,2));function M(){let v=new P,E=new P,T=0,R=(t-e)/n;for(let L=0;L<=r;L++){let y=[],_=L/r,I=_*(t-e)+e;for(let V=0;V<=s;V++){let C=V/s,N=C*l+o,G=Math.sin(N),D=Math.cos(N);E.x=I*G,E.y=-_*n+p,E.z=I*D,h.push(E.x,E.y,E.z),v.set(G,R,D).normalize(),d.push(v.x,v.y,v.z),m.push(C,1-_),y.push(f++)}x.push(y)}for(let L=0;L<s;L++)for(let y=0;y<r;y++){let _=x[y][L],I=x[y+1][L],V=x[y+1][L+1],C=x[y][L+1];(e>0||y!==0)&&(u.push(_,I,C),T+=3),(t>0||y!==r-1)&&(u.push(I,V,C),T+=3)}c.addGroup(g,T,0),g+=T}function b(v){let E=f,T=new Ne,R=new P,L=0,y=v===!0?e:t,_=v===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,p*_,0),d.push(0,_,0),m.push(.5,.5),f++;let I=f;for(let V=0;V<=s;V++){let N=V/s*l+o,G=Math.cos(N),D=Math.sin(N);R.x=y*D,R.y=p*_,R.z=y*G,h.push(R.x,R.y,R.z),d.push(0,_,0),T.x=G*.5+.5,T.y=D*.5*_+.5,m.push(T.x,T.y),f++}for(let V=0;V<s;V++){let C=E+V,N=I+V;v===!0?u.push(N,N+1,C):u.push(N+1,N,C),L+=3}c.addGroup(g,L,v===!0?1:2),g+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Co=class i extends Nn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jc=class i extends wt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let b=new P,v=new P,E=new P;for(let T=0;T<t.length;T+=3)m(t[T+0],b),m(t[T+1],v),m(t[T+2],E),l(b,v,E,M)}function l(M,b,v,E){let T=E+1,R=[];for(let L=0;L<=T;L++){R[L]=[];let y=M.clone().lerp(v,L/T),_=b.clone().lerp(v,L/T),I=T-L;for(let V=0;V<=I;V++)V===0&&L===T?R[L][V]=y:R[L][V]=y.clone().lerp(_,V/I)}for(let L=0;L<T;L++)for(let y=0;y<2*(T-L)-1;y++){let _=Math.floor(y/2);y%2===0?(d(R[L][_+1]),d(R[L+1][_]),d(R[L][_])):(d(R[L][_+1]),d(R[L+1][_+1]),d(R[L+1][_]))}}function c(M){let b=new P;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(M),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function u(){let M=new P;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];let v=p(M)/2/Math.PI+.5,E=g(M)/Math.PI+.5;a.push(v,1-E)}f(),h()}function h(){for(let M=0;M<a.length;M+=6){let b=a[M+0],v=a[M+2],E=a[M+4],T=Math.max(b,v,E),R=Math.min(b,v,E);T>.9&&R<.1&&(b<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),E<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function m(M,b){let v=M*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function f(){let M=new P,b=new P,v=new P,E=new P,T=new Ne,R=new Ne,L=new Ne;for(let y=0,_=0;y<r.length;y+=9,_+=6){M.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),T.set(a[_+0],a[_+1]),R.set(a[_+2],a[_+3]),L.set(a[_+4],a[_+5]),E.copy(M).add(b).add(v).divideScalar(3);let I=p(E);x(T,_+0,M,I),x(R,_+2,b,I),x(L,_+4,v,I)}}function x(M,b,v,E){E<0&&M.x===1&&(a[b]=M.x-1),v.x===0&&v.z===0&&(a[b]=E/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var cr=class i extends jc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var en=class i extends wt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,m=new P,f=new Ne;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let g=r+p/n*a;m.x=h*Math.cos(g),m.y=h*Math.sin(g),l.push(m.x,m.y,m.z),c.push(0,0,1),f.x=(m.x/t+1)/2,f.y=(m.y/t+1)/2,u.push(f.x,f.y)}h+=d}for(let x=0;x<s;x++){let p=x*(n+1);for(let g=0;g<n;g++){let M=g+p,b=M,v=M+n+1,E=M+n+2,T=M+1;o.push(b,v,T),o.push(v,E,T)}}this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ur=class i extends wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new P,h=new P,d=new P;for(let m=0;m<=n;m++)for(let f=0;f<=s;f++){let x=f/s*r,p=m/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(x),h.y=(e+t*Math.cos(p))*Math.sin(x),h.z=t*Math.sin(p),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(f/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let f=1;f<=s;f++){let x=(s+1)*m+f-1,p=(s+1)*(m-1)+f-1,g=(s+1)*(m-1)+f,M=(s+1)*m+f;a.push(x,p,M),a.push(p,g,M)}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var hr=class extends jt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wu,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pn=class extends hr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var tn=class extends jt{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Ae(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wu,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function eo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function aM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function oM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function xf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Xf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qc=class extends Li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vs,endingEnd:Vs}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gs:r=e,o=2*t-n;break;case ao:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gs:a=e,l=2*n-t;break;case ao:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,f=(n-t)/(s-t),x=f*f,p=x*f,g=-d*p+2*d*x-d*f,M=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*f+1,b=(-1-m)*p+(1.5+m)*x+.5*f,v=m*p-m*x;for(let E=0;E!==o;++E)r[E]=g*a[u+E]+M*a[c+E]+b*a[l+E]+v*a[h+E];return r}},Io=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},eu=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=eo(t,this.TimeBufferType),this.values=eo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:eo(e.times,Array),values:eo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new eu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case er:t=this.InterpolantFactoryMethodLinear;break;case _l:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return er;case this.InterpolantFactoryMethodSmooth:return _l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&aM(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_l,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,m=h+n;for(let f=0;f!==n;++f){let x=t[h+f];if(x!==t[d+f]||x!==t[m+f]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=er;var Di=class extends bn{constructor(e,t,n){super(e,t,n)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Qs;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends bn{};Po.prototype.ValueTypeName="color";var ci=class extends bn{};ci.prototype.ValueTypeName="number";var tu=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)an.slerpFlat(r,0,a,c-o,a,c,l);return r}},ui=class extends bn{InterpolantFactoryMethodLinear(e){return new tu(this.times,this.values,this.getValueSize(),e)}};ui.prototype.ValueTypeName="quaternion";ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends bn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Qs;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends bn{};hi.prototype.ValueTypeName="vector";var dr=class{constructor(e="",t=-1,n=[],s=Su){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(cM(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=oM(l);l=xf(l,1,u),c=xf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ci(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,m,f,x){if(m.length!==0){let p=[],g=[];Xf(m,p,g,f),p.length!==0&&x.push(new h(d,p,g))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},f;for(f=0;f<d.length;f++)if(d[f].morphTargets)for(let x=0;x<d[f].morphTargets.length;x++)m[d[f].morphTargets[x]]=-1;for(let x in m){let p=[],g=[];for(let M=0;M!==d[f].morphTargets.length;++M){let b=d[f];p.push(b.time),g.push(b.morphTarget===x?1:0)}s.push(new ci(".morphTargetInfluence["+x+"]",p,g))}l=m.length*a}else{let m=".bones["+t[h].name+"]";n(hi,m+".position",d,"pos",s),n(ui,m+".quaternion",d,"rot",s),n(hi,m+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function lM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ci;case"vector":case"vector2":case"vector3":case"vector4":return hi;case"color":return Po;case"quaternion":return ui;case"bool":case"boolean":return Di;case"string":return Ni}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function cM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=lM(i.type);if(i.times===void 0){let t=[],n=[];Xf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ai={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},nu=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let m=c[h],f=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return f}return null}}},uM=new nu,di=class{constructor(e){this.manager=e!==void 0?e:uM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qn={},iu=class extends Error{constructor(e,t){super(e),this.response=t}},sa=class extends di{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ai.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:n,onError:s});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=Qn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,f=m!==0,x=0,p=new ReadableStream({start(g){M();function M(){h.read().then(({done:b,value:v})=>{if(b)g.close();else{x+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:f,loaded:x,total:m});for(let T=0,R=u.length;T<R;T++){let L=u[T];L.onProgress&&L.onProgress(E)}g.enqueue(v),M()}},b=>{g.error(b)})}}});return new Response(p)}else throw new iu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(f=>m.decode(f))}}}).then(c=>{Ai.add(e,c);let u=Qn[e];delete Qn[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{let u=Qn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Qn[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var su=class extends di{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ai.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Qr("img");function l(){u(),Ai.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Lo=class extends di{constructor(e){super(e)}load(e,t,n,s){let r=new Lt,a=new su(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},fr=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Do=class extends fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Kl=new We,_f=new P,yf=new P,ra=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ea,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;_f.setFromMatrixPosition(e.matrixWorld),t.position.copy(_f),yf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yf),t.updateMatrixWorld(),Kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ru=class extends ra{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=tr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},No=class extends fr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ru}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},vf=new We,Xr=new P,Zl=new P,au=class extends ra{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xr),Zl.copy(n.position),Zl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Zl),n.updateMatrixWorld(),s.makeTranslation(-Xr.x,-Xr.y,-Xr.z),vf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf)}},Uo=class extends fr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new au}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ou=class extends ra{constructor(){super(new sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new ou}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ui=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ko=class extends di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ai.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ai.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ai.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ai.add(e,l),r.manager.itemStart(e)}};var lu=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){an.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;an.multiplyQuaternionsFlat(e,a,e,t,e,n),an.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},Au="\\[\\]\\.:\\/",hM=new RegExp("["+Au+"]","g"),Ru="[^"+Au+"]",dM="[^"+Au.replace("\\.","")+"]",fM=/((?:WC+[\/:])*)/.source.replace("WC",Ru),pM=/(WCOD+)?/.source.replace("WCOD",dM),mM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),gM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),xM=new RegExp("^"+fM+pM+mM+gM+"$"),_M=["material","materials","bones","map"],cu=class{constructor(e,t,n){let s=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hM,"")}static parseTrackName(e){let t=xM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_M.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=cu;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uu=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Vs,endingEnd:Vs};for(let c=0;c!==a;++c){let u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=bu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Dg:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Su:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===Lg;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Mu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Gs,s.endingEnd=Gs):(e?s.endingStart=this.zeroSlopeAtStart?Gs:Vs:s.endingStart=ao,t?s.endingEnd=this.zeroSlopeAtEnd?Gs:Vs:s.endingEnd=ao)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},yM=new Float32Array(1),Oo=class extends ai{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=s[h],m=d.name,f=u[m];if(f!==void 0)++f.referenceCount,a[h]=f;else{if(f=a[h],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,m));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;f=new lu(mt.create(n,m,x),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,m),a[h]=f}o[h].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Io(new Float32Array(2),new Float32Array(2),1,yM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?dr.findByName(s,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Su),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let u=new uu(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?dr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);function Cu(i,e){if(e===Df)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===oa||e===Bo){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===oa)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Vo=class extends di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ku(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Zu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ui.extractUrlBase(e);a=Ui.resolveURL(c,this.path)}else a=Ui.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new sa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Zf){try{a[je.KHR_BINARY_GLTF]=new Ju(e)}catch(h){s&&s(h);return}r=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new sh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:a[h]=new Nu;break;case je.KHR_DRACO_MESH_COMPRESSION:a[h]=new ju(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[h]=new Qu;break;case je.KHR_MESH_QUANTIZATION:a[h]=new eh;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function vM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Du=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ae(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Yt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new pr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Uo(u),c.distance=h;break;case"spot":c=new No(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Nu=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Ct}extendParams(e,t,n){let s=[];e.color=new Ae(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Yt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}},Uu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ku=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(o,o)}return Promise.all(r)}},Ou=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Fu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Bu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Yt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,At)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},zu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Hu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(o[0],o[1],o[2],Yt),Promise.all(r)}},Vu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Gu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(o[0],o[1],o[2],Yt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,At)),Promise.all(r)}},Wu=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Xu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},qu=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},$u=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Yu=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ku=class{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(m){return m.buffer}):a.ready.then(function(){let m=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(m),u,h,d,s.mode,s.filter),m})})}else return null}},Zu=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Sn.TRIANGLES&&c.mode!==Sn.TRIANGLE_STRIP&&c.mode!==Sn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,m=[];for(let f of h){let x=new We,p=new P,g=new an,M=new P(1,1,1),b=new bo(f.geometry,f.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),b.setMatrixAt(v,x.compose(p,g,M));for(let v in l)if(v==="_COLOR_0"){let E=l[v];b.instanceColor=new ls(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&f.geometry.setAttribute(v,l[v]);bt.prototype.copy.call(b,f),this.parser.assignFinalMaterial(b),m.push(b)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}},Zf="glTF",ca=12,qf={JSON:1313821514,BIN:5130562},Ju=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ca),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ca,r=new DataView(e,ca),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===qf.JSON){let c=new Uint8Array(e,ca+a,o);this.content=n.decode(c)}else if(l===qf.BIN){let c=ca+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ju=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=nh[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=nh[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],m=gr[d.componentType];c[h]=m.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(m){for(let f in m.attributes){let x=m.attributes[f],p=l[f];p!==void 0&&(x.normalized=p)}h(m)},o,c,Yt,d)})})}},Qu=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},eh=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},Go=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,m=d*h,f=e*c,x=f-c,p=-2*m+3*d,g=m-d,M=1-p,b=g-d+h;for(let v=0;v!==o;v++){let E=a[x+v+o],T=a[x+v+l]*u,R=a[f+v+o],L=a[f+v]*u;r[v]=M*E+b*T+p*R+g*L}return r}},MM=new an,th=class extends Go{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return MM.fromArray(r).normalize().toArray(r),r}},Sn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$f={9728:Ot,9729:rn,9984:fu,9985:Yr,9986:Hs,9987:Hn},Yf={33071:ni,33648:rs,10497:ss},Iu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},bM={CUBICSPLINE:void 0,LINEAR:er,STEP:Qs},Pu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function SM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new hr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mn})),i.DefaultMaterial}function cs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function TM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function EM(i){let e,t=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lu(t.attributes):e=i.indices+":"+Lu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Lu(i.targets[n]);return e}function Lu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ih(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var RM=new We,sh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&a<98?this.textureLoader=new Lo(this.options.manager):this.textureLoader=new ko(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return cs(r,o,s),fi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ui.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Iu[s.type],o=gr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Et(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Iu[s.type],c=gr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,m=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,f=s.normalized===!0,x,p;if(m&&m!==h){let g=Math.floor(d/m),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,b=t.cache.get(M);b||(x=new c(o,g*m,s.count*m/u),b=new rr(x,m/u),t.cache.add(M,b)),p=new os(b,l,d%m/u,f)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),p=new Et(x,l,f);if(s.sparse!==void 0){let g=Iu.SCALAR,M=gr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new M(a[1],b,s.sparse.count*g),T=new c(a[2],v,s.sparse.count*l);o!==null&&(p=new Et(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let R=0,L=E.length;R<L;R++){let y=E[R];if(p.setX(y,T[R*l]),l>=2&&p.setY(y,T[R*l+1]),l>=3&&p.setZ(y,T[R*l+2]),l>=4&&p.setW(y,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=f}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=$f[d.magFilter]||rn,u.minFilter=$f[d.minFilter]||Hn,u.wrapS=Yf[d.wrapS]||ss,u.wrapT=Yf[d.wrapT]||ss,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ot&&u.minFilter!==rn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,m){let f=d;t.isImageBitmapLoader===!0&&(f=function(x){let p=new Lt(x);p.needsUpdate=!0,d(p)}),t.load(Ui.resolveURL(h,r.path),f,void 0,m)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),fi(h,a),h.userData.mimeType=a.mimeType||AM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ia,jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new na,jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return hr}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){let h=s[je.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Yt),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,At)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Rt);let u=r.alphaMode||Pu.OPAQUE;if(u===Pu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Pu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ct&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Ct&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ct){let h=r.emissiveFactor;o.emissive=new Ae().setRGB(h[0],h[1],h[2],Yt)}return r.emissiveTexture!==void 0&&a!==Ct&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,At)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),fi(h,r),t.associations.set(h,{materials:e}),r.extensions&&cs(s,h,r),h})}createUniqueName(e){let t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Kf(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=EM(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Kf(new wt,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?SM(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,f=u.length;m<f;m++){let x=u[m],p=a[m],g,M=c[m];if(p.mode===Sn.TRIANGLES||p.mode===Sn.TRIANGLE_STRIP||p.mode===Sn.TRIANGLE_FAN||p.mode===void 0)g=r.isSkinnedMesh===!0?new vo(x,M):new Pe(x,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===Sn.TRIANGLE_STRIP?g.geometry=Cu(g.geometry,Bo):p.mode===Sn.TRIANGLE_FAN&&(g.geometry=Cu(g.geometry,oa));else if(p.mode===Sn.LINES)g=new To(x,M);else if(p.mode===Sn.LINE_STRIP)g=new or(x,M);else if(p.mode===Sn.LINE_LOOP)g=new Eo(x,M);else if(p.mode===Sn.POINTS)g=new lr(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&TM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),fi(g,r),p.extensions&&cs(s,g,p),t.assignFinalMaterial(g),h.push(g)}for(let m=0,f=h.length;m<f;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return r.extensions&&cs(s,h[0],r),h[0];let d=new lt;r.extensions&&cs(s,d,r),t.associations.set(d,{meshes:e});for(let m=0,f=h.length;m<f;m++)d.add(h[m]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(Uf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new sr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new We;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Mo(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let m=s.channels[h],f=s.samplers[m.sampler],x=m.target,p=x.node,g=s.parameters!==void 0?s.parameters[f.input]:f.input,M=s.parameters!==void 0?s.parameters[f.output]:f.output;x.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",M)),c.push(f),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],m=h[1],f=h[2],x=h[3],p=h[4],g=[];for(let M=0,b=d.length;M<b;M++){let v=d[M],E=m[M],T=f[M],R=x[M],L=p[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let y=n._createAnimationTracks(v,E,T,R,L);if(y)for(let _=0;_<y.length;_++)g.push(y[_])}return new dr(r,void 0,g)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(d,RM)});for(let m=0,f=h.length;m<f;m++)u.add(h[m]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new ta:c.length>1?u=new lt:c.length===1?u=c[0]:u=new bt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),fi(u,r),r.extensions&&cs(n,u,r),r.matrix!==void 0){let h=new We;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new lt;n.name&&(r.name=s.createUniqueName(n.name)),fi(r,n),n.extensions&&cs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,m]of s.associations)(d instanceof jt||d instanceof Lt)&&h.set(d,m);return u.traverse(d=>{let m=s.associations.get(d);m!=null&&h.set(d,m)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];ki[r.path]===ki.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(ki[r.path]){case ki.weights:c=ci;break;case ki.rotation:c=ui;break;case ki.position:case ki.scale:c=hi;break;default:switch(n.itemSize){case 1:c=ci;break;case 2:case 3:default:c=hi;break}break}let u=s.interpolation!==void 0?bM[s.interpolation]:er,h=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){let f=new c(l[d]+"."+ki[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),a.push(f)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ih(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ui?th:Go;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function CM(i,e,t){let n=e.attributes,s=new Ft;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){let u=ih(gr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,l=new P;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],m=d.min,f=d.max;if(m!==void 0&&f!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(f[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(f[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(f[2]))),d.normalized){let x=ih(gr[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new dn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Kf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=nh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return et.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),fi(i,e),CM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?wM(i,e.targets,t):i})}var rh={_about:"Hero moves. Times in frames at 60 Hz (startup = frames before the hit, active = frames the hit can land, recovery = frames after). reach in metres, arc in radians. balance = Balance points added on hit. All numbers are first guesses until people play.",light1:{role:"string",startup:5,active:3,recovery:13,next:"light2",nextFrom:7,cancel:7,dmg:6,balance:3,reach:1.9,arc:1.7,lunge:.35,stop:3,clip:"attack",sfx:"light"},light2:{role:"string",startup:5,active:3,recovery:14,next:"light3",nextFrom:7,cancel:7,dmg:7,balance:3.5,reach:1.9,arc:1.7,lunge:.35,stop:3,clip:"slash2",sfx:"light"},light3:{role:"string",startup:8,active:4,recovery:20,cancel:11,dmg:10,balance:5,reach:2,arc:1.9,lunge:.6,stop:5,clip:"slash3",sfx:"heavy"},sunder:{role:"opener",cd:2.4,startup:9,active:4,recovery:16,cancel:13,dmg:9,balance:4,apply:{cracked:1},reach:2.1,arc:1.5,lunge:.8,stop:5,clip:"sunder",sfx:"sunder"},tether:{role:"linker",cd:3,startup:7,active:6,recovery:14,cancel:13,dmg:4,balance:6,apply:{bound:1},reach:6.5,arc:.6,lunge:0,stop:4,clip:"tether",sfx:"tether"},breaker:{role:"ender",cd:4,startup:16,active:5,recovery:24,cancel:21,dmg:14,balance:8,consume:{cracked:{dmg:8,balance:16},bound:{dmg:4,balance:12}},reach:2.4,arc:1.9,lunge:.5,stop:7,stopPerStatus:2,clip:"breaker",sfx:"breaker"},giantfall:{role:"finisher",startup:18,active:6,recovery:30,dmg:40,perComboHit:3,reach:3.2,arc:3.2,lunge:1.2,stop:18,slow:[.5,.35],clip:"giantfall",sfx:"giantfall"},counter:{role:"counter",startup:7,active:4,recovery:16,cancel:11,dmg:60,balance:24,reach:2.6,arc:2.2,lunge:5,stop:14,slow:[.45,.35],clip:"slash3",sfx:"heavy",_note:"only after a perfect roll (rules.counter): the hero leaps up to lunge metres at the giant and is safe until the blow lands"},dodge:{clip:"roll",frames:17,iframes:20,perfect:11,dist:3,cd:.45,cancelFrom:12},_cancel:"What a move can be cut into. 'hit' = only after it landed and from its cancel frame; 'recovery' = from the first recovery frame even on a miss; 'hitOrRecovery' = either; 'any' = at any frame (light hits never trap you); 'always' = from nextFrom, hit or miss.",cancelRules:{string:{next:"always",skill:"hit",dodge:"any"},opener:{light:"hit",skill:"hit",dodge:"hitOrRecovery"},linker:{light:"hit",skill:"hit",dodge:"hitOrRecovery"},ender:{light:"hit",skill:"hit",dodge:"recovery"},counter:{light:"hit",skill:"hit",dodge:"hitOrRecovery"},finisher:{dodge:"recovery"}}};var ah={_about:"Rules shared by every fight. Seconds unless the name says frames. First guesses until people play; sources in design/NUMBERS.md.",arena:{radius:8.2},hero:{hp:100,speed:5.2,radius:.45,hurtIframes:.6,hurtLock:.25,hurtPush:1.2,moveInMove:.12,aimAssist:3,pullTime:.16},input:{buffer:.15,dodgeBuffer:.45},combo:{window:2,cap:20,variety:[1,1,1.3,1.6],repeat:.6},balance:{idle:1.5,drain:20,drainFloor:.35},topple:{time:4,dmgMul:2,grow:1.2,getup:.9,afterFinisher:.6,quake:{r:2.4,dmg:60},fallWindow:1.4},status:{cracked:{max:2,time:6,balanceGainPerStack:.25},bound:{max:1,time:3,giantTimeMul:.65}},perfect:{balance:8,slow:[.3,.3]},counter:{_about:"Perfect-dodge counter: after a perfect roll, Strike within window seconds (game time) leaps at whoever struck (a standing giant, a small foe, or a stone's thrower within the leap). On in the game (Jame 21 Nov); ?nocounter=1 turns it off for comparison.",enabled:!0,window:.6},feel:{stopGap:.25,toppleStop:14,toppleSlow:[.45,.3],winSlow:[1.2,.25]},assist:{offerAfter:2,startPct:20,perDownPct:5,capPct:60},flow:{intro:2}};var Kt={_about:"Giants. wind = telegraph time before the blow (seconds), open = punish window after it, track = share of the wind-up during which a slam follows the hero before it locks. range = [min, max] distance from the giant at which it picks this attack. First guesses until people play.",hollen:{name:"Hollen",title:"Warden of the East Gate",hp:3150,balance:200,radius:1.6,height:5.4,speed:1.35,turn:2.4,reachWant:2.6,think:[.3,.8],phases:[{from:1,attacks:["slam","sweep","charge"],windMul:1,openMul:1},{from:.5,attacks:["slam","sweep","charge","slamSweep"],windMul:.85,openMul:.8,roar:1.4}],attacks:{slam:{shape:"circle",at:"hero",r:2.3,wind:1.05,track:.5,open:1.1,dmg:18,range:[0,7.5],weight:3,sfx:"slam"},sweep:{shape:"ring",at:"self",r:3.9,inner:0,wind:.95,open:.9,dmg:14,range:[0,3.6],weight:3,sfx:"sweep"},charge:{shape:"lane",at:"self",w:3.2,len:9,wind:1,dash:.55,open:1.3,dmg:20,range:[4,30],weight:2,sfx:"charge"},slamSweep:{chain:["slam","sweep"],weight:2}},tint:null},cairn:{name:"Cairn",title:"the Young Warden",hp:1500,balance:80,radius:1.25,height:3.6,speed:1.25,turn:2.2,reachWant:2.3,think:[.6,1.2],tint:"#c7c08a",phases:[{from:1,attacks:["slam","sweep"],windMul:1,openMul:1}],attacks:{slam:{shape:"circle",at:"hero",r:2,wind:1.15,track:.45,open:1.4,dmg:12,range:[0,7],weight:3,sfx:"slam"},sweep:{shape:"ring",at:"self",r:3.2,inner:0,wind:1,open:1.2,dmg:9,range:[0,3],weight:2,sfx:"sweep"}}}};var Jf={_about:"Elara's lines. Each event has several lines; she says one, never the same one twice in a row, and waits `gap` seconds between lines and stays up long enough to read (at least `show` seconds, or words / `wordsPerSec`) unless the event is urgent. {key:x} is replaced by the key the player uses for x. Plain words, short, warm, a little teasing. Never 'you died'. Non-urgent lines wait `gap` seconds after any line; the same event speaks at most once per `repeatGap` seconds. Urgent = the few story moments (first fight, giant intros, first topple, the end of a run).",gap:18,show:2.8,events:{intro:{urgent:!0,lines:["That's Hollen. Oldest of them all. Be gentle \u2014 he only forgot why he stands.","Hollen again. He's not angry at you. He's just lost.","Ready? Crack him, hold him, break him \u2014 in any order. Mixing is what fills the bar."]},firstFight:{urgent:!0,lines:["Little stones first. Move with {key:move}, strike with {key:light}. Watch the red on the floor \u2014 that's where they land."]},firstWind:{lines:["Red floor means he's coming down there. Roll out with {key:dodge}!","See him wind up? That's your cue to roll."],urgent:!1},firstHurt:{lines:["Ouch. Roll when the red fills up, not before.","Get out of the red, Breaker!"],urgent:!1},firstPerfect:{urgent:!1,lines:["Perfect! Rolling right as he lands shakes his balance.","Ooh \u2014 right on the beat. He felt that."]},firstCounter:{urgent:!1,lines:["He's open \u2014 {key:light}, strike back now!","Now! {key:light} \u2014 hit him before he recovers!"]},noSkills:{lines:["Try {key:sunder} \u2014 Sunder cracks the stone.","Strikes alone won't bring him down. Crack him with {key:sunder}."],urgent:!1},firstCracked:{urgent:!1,lines:["He's cracked! Now hold him with {key:tether}, or break it open with {key:breaker}.","Cracked! A Break on that will hurt his balance a lot."]},firstBound:{lines:["Bound! He's slow now. Finish with {key:breaker}.","Got him tethered. Break it, quick!"],urgent:!1},firstSpend:{urgent:!1,lines:["See the gold bar jump? That's his balance going.","That's it \u2014 crack, hold, break. Look at his balance bar!"]},teeter:{lines:["He's teetering! One more push!","Almost \u2014 he's swaying!"],urgent:!1},firstTopple:{urgent:!0,lines:["He's DOWN! Hit him while he's down \u2014 when Break says FALL!, finish him with {key:breaker}.","Down he goes! Beat on him \u2014 then Giantfall with {key:breaker} when it says FALL!"]},topple:{urgent:!1,lines:["Down again!","Timber!","He's down \u2014 make it count!","Again! He'll be steadier next time."]},finisherBig:{lines:["That was beautiful.","The terrace shook. Did you feel it?","Big combo, big fall. I like your style."],urgent:!1},repeat:{lines:["Same trick again? He's learning it. Mix it up.","You keep doing that one. Try a different order!","Variety, Breaker. The bar fills faster when you mix."],urgent:!1},lowHp:{urgent:!1,lines:["Careful! You're hurt. Roll more, swing less.","Breathe. Watch him. Roll."]},phase2:{urgent:!1,lines:["He's angry now. Faster swings \u2014 watch closely.","Half his strength gone and he knows it. Stay sharp!"]},winFirst:{urgent:!0,lines:["\u266A Hm-mm, hm-mm\u2026 \u266A Sleep now, Hollen. \u2026Thank you, Breaker."]},win:{urgent:!0,lines:["\u266A Hm-mm\u2026 \u266A He's sleeping. Gently done.","\u266A Hm, hm-mm\u2026 \u266A Rest, old Warden.","\u266A Hm-mm\u2026 \u266A Another fall. You're getting good at this."]},down1:{urgent:!0,lines:["Get up, Breaker. He was hurting too.","Up you get. You saw his moves now."]},down2:{urgent:!0,lines:["That was close. If you want, I can take some of the hits with you \u2014 your choice.","Again? Good. I'm staying right here."]},downMore:{urgent:!0,lines:["Every fall teaches something. What did he do just before?","You're closer each time. I can see it.","Deep breath. Mix your skills \u2014 the bar fills faster."]},close:{urgent:!0,lines:["He was SO close to falling. One more try?","A sliver! He had a sliver left!"]},runAgain:{urgent:!0,lines:["The terrace again. You know them better now.","Up we go. Crack, hold, break \u2014 any order, just mix.","Back where we started \u2014 but you're not the same Breaker."]},firstFoeWind:{lines:["See that little red circle? It's about to jump at you. Roll!","Shardlings lunge after they glow. Hit them first \u2014 a hit breaks their wind-up."],urgent:!1},firstKill:{lines:["One down!","Shardlings are bits of Warden stone. They'll sleep too.","Nice. Keep moving."],urgent:!1},waveNext:{lines:["More coming. The far ones throw stones \u2014 Tether pulls them close.","Slingers keep their distance. {key:tether} drags them in.","Here comes the next lot."],urgent:!1},swarm:{urgent:!1,lines:["The wind's turning. Dusk is when Hollen wakes.","A whole swarm. Stay moving, Breaker.","They're everywhere \u2014 use the walls, don't get surrounded."]},pickFirst:{urgent:!0,lines:["Rest a moment. Pick a power \u2014 each one changes how your combos work."]},pick:{urgent:!1,lines:["Choose well.","Which one feels like you?","Take a breath. Then choose."]},picked:{lines:["Good choice.","Ooh, I like that one.","Let's see what that does to them."],urgent:!1},cairnIntro:{urgent:!0,lines:["That's Cairn. The youngest Warden. Watch the gold bar under his name \u2014 fill it and he falls.","Cairn! He's clumsy. Fill the gold bar under his name and he'll sit down hard."]},cairnAgain:{urgent:!0,lines:["Cairn again. You know his trick.","Hello again, little Warden."]},cairnRest:{urgent:!0,lines:["Sleep, Cairn. ...Hear that? Something big is waking.","He's resting. That was the easy one."]},hollenIntro:{urgent:!0,lines:["That's Hollen. Oldest of them all. Be gentle \u2014 he only forgot why he stands.","Hollen. He guarded the East Gate before anyone remembers. Bring him down."]},hollenAgain:{urgent:!0,lines:["Hollen again. He remembers you too.","Him. Deep breath."]},adds:{lines:["He's calling the little ones! Topple him next to them \u2014 the fall smashes them.","Shardlings! Lure them close to him, then bring him down on them."],urgent:!1},firstCrush:{urgent:!1,lines:["Did you see that? His fall smashed them!","Ha! Bring him down next to them \u2014 the ground does the rest."]},crush:{lines:["Crushed!","The fall did that. Beautiful.","Timber \u2014 and the little ones with him."],urgent:!1}},repeatGap:90,wordsPerSec:3.5};var jf={_about:"Elara in Thai (test link only, src/i18n.js). Same events and placeholders as lines.json. charsPerSec: Thai has few spaces, so reading time is counted in characters.",gap:18,show:2.8,events:{intro:{urgent:!0,lines:["\u0E19\u0E31\u0E48\u0E19\u0E04\u0E37\u0E2D Hollen \u0E41\u0E01\u0E48\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E2B\u0E21\u0E39\u0E48\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32 \u0E04\u0E48\u0E2D\u0E22\u0E46 \u0E19\u0E30 \u0E40\u0E02\u0E32\u0E41\u0E04\u0E48\u0E25\u0E37\u0E21\u0E44\u0E1B\u0E27\u0E48\u0E32\u0E22\u0E37\u0E19\u0E40\u0E1D\u0E49\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E30\u0E44\u0E23","Hollen \u0E2D\u0E35\u0E01\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E02\u0E32\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E42\u0E01\u0E23\u0E18\u0E40\u0E23\u0E32 \u0E40\u0E02\u0E32\u0E41\u0E04\u0E48\u0E2B\u0E25\u0E07\u0E17\u0E32\u0E07","\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E44\u0E2B\u0E21? \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E23\u0E49\u0E32\u0E27 \u0E21\u0E31\u0E14\u0E44\u0E27\u0E49 \u0E41\u0E25\u0E49\u0E27\u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01 \u0E25\u0E33\u0E14\u0E31\u0E1A\u0E44\u0E2B\u0E19\u0E01\u0E47\u0E44\u0E14\u0E49 \u0E1C\u0E2A\u0E21\u0E2A\u0E01\u0E34\u0E25\u0E41\u0E25\u0E49\u0E27\u0E41\u0E16\u0E1A\u0E25\u0E49\u0E21\u0E08\u0E30\u0E40\u0E15\u0E47\u0E21\u0E40\u0E23\u0E47\u0E27"]},firstFight:{urgent:!0,lines:["\u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01\u0E2B\u0E34\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E47\u0E01\u0E01\u0E48\u0E2D\u0E19 \u0E40\u0E14\u0E34\u0E19\u0E14\u0E49\u0E27\u0E22 {key:move} \u0E1F\u0E31\u0E19\u0E14\u0E49\u0E27\u0E22 {key:light} \u0E14\u0E39\u0E1E\u0E37\u0E49\u0E19\u0E2A\u0E35\u0E41\u0E14\u0E07\u0E44\u0E27\u0E49 \u0E19\u0E31\u0E48\u0E19\u0E04\u0E37\u0E2D\u0E08\u0E38\u0E14\u0E17\u0E35\u0E48\u0E21\u0E31\u0E19\u0E08\u0E30\u0E1F\u0E32\u0E14\u0E25\u0E07\u0E21\u0E32"]},firstWind:{lines:["\u0E1E\u0E37\u0E49\u0E19\u0E41\u0E14\u0E07\u0E04\u0E37\u0E2D\u0E08\u0E38\u0E14\u0E17\u0E35\u0E48\u0E21\u0E31\u0E19\u0E08\u0E30\u0E1F\u0E32\u0E14\u0E25\u0E07\u0E21\u0E32 \u0E21\u0E49\u0E27\u0E19\u0E2D\u0E2D\u0E01\u0E14\u0E49\u0E27\u0E22 {key:dodge}!","\u0E40\u0E2B\u0E47\u0E19\u0E21\u0E31\u0E19\u0E07\u0E49\u0E32\u0E07\u0E44\u0E2B\u0E21? \u0E19\u0E31\u0E48\u0E19\u0E41\u0E2B\u0E25\u0E30\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E13\u0E43\u0E2B\u0E49\u0E21\u0E49\u0E27\u0E19"],urgent:!1},firstHurt:{lines:["\u0E42\u0E2D\u0E4A\u0E22 \u0E21\u0E49\u0E27\u0E19\u0E15\u0E2D\u0E19\u0E2A\u0E35\u0E41\u0E14\u0E07\u0E40\u0E15\u0E47\u0E21\u0E27\u0E07 \u0E2D\u0E22\u0E48\u0E32\u0E21\u0E49\u0E27\u0E19\u0E01\u0E48\u0E2D\u0E19","\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E2A\u0E35\u0E41\u0E14\u0E07\u0E40\u0E23\u0E47\u0E27 \u0E19\u0E31\u0E01\u0E17\u0E38\u0E1A!"],urgent:!1},firstPerfect:{urgent:!1,lines:["\u0E2B\u0E25\u0E1A\u0E1E\u0E2D\u0E14\u0E35! \u0E21\u0E49\u0E27\u0E19\u0E15\u0E2D\u0E19\u0E21\u0E31\u0E19\u0E1F\u0E32\u0E14\u0E25\u0E07\u0E1E\u0E2D\u0E14\u0E35 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E21\u0E31\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E25\u0E31\u0E01","\u0E42\u0E2D\u0E49 \u0E15\u0E23\u0E07\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E30\u0E40\u0E1B\u0E4A\u0E30 \u0E21\u0E31\u0E19\u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E40\u0E25\u0E22"]},firstCounter:{urgent:!1,lines:["\u0E21\u0E31\u0E19\u0E40\u0E1B\u0E34\u0E14\u0E0A\u0E48\u0E2D\u0E07! \u0E01\u0E14 {key:light} \u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E40\u0E25\u0E22!","\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49! {key:light} \u0E15\u0E35\u0E01\u0E48\u0E2D\u0E19\u0E21\u0E31\u0E19\u0E15\u0E31\u0E49\u0E07\u0E15\u0E31\u0E27!"]},noSkills:{lines:["\u0E25\u0E2D\u0E07 {key:sunder} \u0E2A\u0E34 \u0E17\u0E38\u0E1A\u0E23\u0E49\u0E32\u0E27\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E2B\u0E34\u0E19\u0E23\u0E49\u0E32\u0E27","\u0E1F\u0E31\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E25\u0E49\u0E21\u0E21\u0E31\u0E19\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E2B\u0E23\u0E2D\u0E01 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E21\u0E31\u0E19\u0E23\u0E49\u0E32\u0E27\u0E14\u0E49\u0E27\u0E22 {key:sunder}"],urgent:!1},firstCracked:{urgent:!1,lines:["\u0E21\u0E31\u0E19\u0E23\u0E49\u0E32\u0E27\u0E41\u0E25\u0E49\u0E27! \u0E21\u0E31\u0E14\u0E44\u0E27\u0E49\u0E14\u0E49\u0E27\u0E22 {key:tether} \u0E2B\u0E23\u0E37\u0E2D\u0E17\u0E38\u0E1A\u0E43\u0E2B\u0E49\u0E41\u0E15\u0E01\u0E14\u0E49\u0E27\u0E22 {key:breaker}","\u0E23\u0E49\u0E32\u0E27\u0E41\u0E25\u0E49\u0E27! \u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01\u0E15\u0E23\u0E07\u0E19\u0E31\u0E49\u0E19 \u0E41\u0E16\u0E1A\u0E25\u0E49\u0E21\u0E08\u0E30\u0E02\u0E36\u0E49\u0E19\u0E40\u0E22\u0E2D\u0E30\u0E21\u0E32\u0E01"]},firstBound:{lines:["\u0E21\u0E31\u0E14\u0E44\u0E14\u0E49\u0E41\u0E25\u0E49\u0E27! \u0E21\u0E31\u0E19\u0E0A\u0E49\u0E32\u0E25\u0E07 \u0E1B\u0E34\u0E14\u0E14\u0E49\u0E27\u0E22 {key:breaker}","\u0E21\u0E31\u0E14\u0E21\u0E31\u0E19\u0E44\u0E27\u0E49\u0E41\u0E25\u0E49\u0E27 \u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01\u0E40\u0E23\u0E47\u0E27!"],urgent:!1},firstSpend:{urgent:!1,lines:["\u0E40\u0E2B\u0E47\u0E19\u0E41\u0E16\u0E1A\u0E17\u0E2D\u0E07\u0E01\u0E23\u0E30\u0E42\u0E14\u0E14\u0E02\u0E36\u0E49\u0E19\u0E44\u0E2B\u0E21? \u0E19\u0E31\u0E48\u0E19\u0E04\u0E37\u0E2D\u0E21\u0E31\u0E19\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E25\u0E31\u0E01","\u0E19\u0E31\u0E48\u0E19\u0E41\u0E2B\u0E25\u0E30 \u0E23\u0E49\u0E32\u0E27 \u0E21\u0E31\u0E14 \u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01 \u0E14\u0E39\u0E41\u0E16\u0E1A\u0E25\u0E49\u0E21\u0E02\u0E2D\u0E07\u0E21\u0E31\u0E19\u0E2A\u0E34!"]},teeter:{lines:["\u0E21\u0E31\u0E19\u0E42\u0E2D\u0E19\u0E40\u0E2D\u0E19\u0E41\u0E25\u0E49\u0E27! \u0E2D\u0E35\u0E01\u0E19\u0E34\u0E14\u0E40\u0E14\u0E35\u0E22\u0E27!","\u0E40\u0E01\u0E37\u0E2D\u0E1A\u0E41\u0E25\u0E49\u0E27 \u0E21\u0E31\u0E19\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E0B!"],urgent:!1},firstTopple:{urgent:!0,lines:["\u0E21\u0E31\u0E19\u0E25\u0E49\u0E21\u0E41\u0E25\u0E49\u0E27! \u0E15\u0E35\u0E15\u0E2D\u0E19\u0E21\u0E31\u0E19\u0E25\u0E49\u0E21\u0E2D\u0E22\u0E39\u0E48 \u0E1E\u0E2D\u0E1B\u0E38\u0E48\u0E21\u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01\u0E02\u0E36\u0E49\u0E19\u0E27\u0E48\u0E32 \u0E1B\u0E34\u0E14\u0E09\u0E32\u0E01! \u0E01\u0E14 {key:breaker} \u0E08\u0E1A\u0E21\u0E31\u0E19\u0E40\u0E25\u0E22","\u0E25\u0E49\u0E21\u0E25\u0E07\u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27! \u0E23\u0E38\u0E21\u0E15\u0E35\u0E40\u0E25\u0E22 \u0E41\u0E25\u0E49\u0E27\u0E1E\u0E2D\u0E02\u0E36\u0E49\u0E19\u0E27\u0E48\u0E32 \u0E1B\u0E34\u0E14\u0E09\u0E32\u0E01! \u0E01\u0E14 {key:breaker}"]},topple:{urgent:!1,lines:["\u0E25\u0E49\u0E21\u0E2D\u0E35\u0E01\u0E41\u0E25\u0E49\u0E27!","\u0E25\u0E49\u0E21\u0E21\u0E21!","\u0E21\u0E31\u0E19\u0E25\u0E49\u0E21\u0E41\u0E25\u0E49\u0E27 \u0E15\u0E35\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E49\u0E21!","\u0E2D\u0E35\u0E01\u0E41\u0E25\u0E49\u0E27! \u0E04\u0E23\u0E31\u0E49\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E21\u0E31\u0E19\u0E08\u0E30\u0E22\u0E37\u0E19\u0E21\u0E31\u0E48\u0E19\u0E02\u0E36\u0E49\u0E19\u0E19\u0E30"]},finisherBig:{lines:["\u0E2A\u0E27\u0E22\u0E21\u0E32\u0E01","\u0E25\u0E32\u0E19\u0E2B\u0E34\u0E19\u0E2A\u0E31\u0E48\u0E19\u0E44\u0E1B\u0E2B\u0E21\u0E14 \u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E44\u0E2B\u0E21?","\u0E04\u0E2D\u0E21\u0E42\u0E1A\u0E22\u0E32\u0E27 \u0E25\u0E49\u0E21\u0E41\u0E23\u0E07 \u0E0A\u0E2D\u0E1A\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E19\u0E35\u0E49"],urgent:!1},repeat:{lines:["\u0E17\u0E48\u0E32\u0E40\u0E14\u0E34\u0E21\u0E2D\u0E35\u0E01\u0E41\u0E25\u0E49\u0E27? \u0E21\u0E31\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E33\u0E44\u0E14\u0E49\u0E41\u0E25\u0E49\u0E27\u0E19\u0E30 \u0E25\u0E2D\u0E07\u0E1C\u0E2A\u0E21\u0E14\u0E39","\u0E43\u0E0A\u0E49\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19\u0E0B\u0E49\u0E33\u0E46 \u0E25\u0E2D\u0E07\u0E2A\u0E25\u0E31\u0E1A\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E14\u0E39\u0E2A\u0E34!","\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22\u0E2B\u0E19\u0E48\u0E2D\u0E22 \u0E19\u0E31\u0E01\u0E17\u0E38\u0E1A \u0E1C\u0E2A\u0E21\u0E2A\u0E01\u0E34\u0E25\u0E41\u0E25\u0E49\u0E27\u0E41\u0E16\u0E1A\u0E40\u0E15\u0E47\u0E21\u0E40\u0E23\u0E47\u0E27\u0E01\u0E27\u0E48\u0E32"],urgent:!1},lowHp:{urgent:!1,lines:["\u0E23\u0E30\u0E27\u0E31\u0E07! \u0E40\u0E08\u0E47\u0E1A\u0E41\u0E25\u0E49\u0E27 \u0E21\u0E49\u0E27\u0E19\u0E40\u0E22\u0E2D\u0E30\u0E46 \u0E1F\u0E31\u0E19\u0E19\u0E49\u0E2D\u0E22\u0E25\u0E07","\u0E2B\u0E32\u0E22\u0E43\u0E08\u0E25\u0E36\u0E01\u0E46 \u0E14\u0E39\u0E21\u0E31\u0E19\u0E44\u0E27\u0E49 \u0E41\u0E25\u0E49\u0E27\u0E21\u0E49\u0E27\u0E19"]},phase2:{urgent:!1,lines:["\u0E21\u0E31\u0E19\u0E42\u0E01\u0E23\u0E18\u0E41\u0E25\u0E49\u0E27 \u0E1F\u0E32\u0E14\u0E40\u0E23\u0E47\u0E27\u0E02\u0E36\u0E49\u0E19 \u0E14\u0E39\u0E14\u0E35\u0E46","\u0E41\u0E23\u0E07\u0E21\u0E31\u0E19\u0E2B\u0E32\u0E22\u0E44\u0E1B\u0E04\u0E23\u0E36\u0E48\u0E07\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E41\u0E25\u0E49\u0E27 \u0E21\u0E31\u0E19\u0E23\u0E39\u0E49\u0E15\u0E31\u0E27 \u0E23\u0E30\u0E27\u0E31\u0E07\u0E44\u0E27\u0E49!"]},winFirst:{urgent:!0,lines:["\u266A \u0E2E\u0E36\u0E21-\u0E21\u0E21 \u0E2E\u0E36\u0E21-\u0E21\u0E21\u2026 \u266A \u0E2B\u0E25\u0E31\u0E1A\u0E40\u0E16\u0E2D\u0E30 Hollen \u2026\u0E02\u0E2D\u0E1A\u0E43\u0E08\u0E19\u0E30 \u0E19\u0E31\u0E01\u0E17\u0E38\u0E1A"]},win:{urgent:!0,lines:["\u266A \u0E2E\u0E36\u0E21-\u0E21\u0E21\u2026 \u266A \u0E40\u0E02\u0E32\u0E2B\u0E25\u0E31\u0E1A\u0E41\u0E25\u0E49\u0E27 \u0E17\u0E33\u0E44\u0E14\u0E49\u0E19\u0E38\u0E48\u0E21\u0E19\u0E27\u0E25\u0E14\u0E35","\u266A \u0E2E\u0E36\u0E21 \u0E2E\u0E36\u0E21-\u0E21\u0E21\u2026 \u266A \u0E1E\u0E31\u0E01\u0E40\u0E16\u0E2D\u0E30 \u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E1C\u0E39\u0E49\u0E40\u0E12\u0E48\u0E32","\u266A \u0E2E\u0E36\u0E21-\u0E21\u0E21\u2026 \u266A \u0E25\u0E49\u0E21\u0E44\u0E14\u0E49\u0E2D\u0E35\u0E01\u0E15\u0E31\u0E27 \u0E40\u0E01\u0E48\u0E07\u0E02\u0E36\u0E49\u0E19\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E22\u0E46 \u0E19\u0E30"]},down1:{urgent:!0,lines:["\u0E25\u0E38\u0E01\u0E02\u0E36\u0E49\u0E19\u0E21\u0E32 \u0E19\u0E31\u0E01\u0E17\u0E38\u0E1A \u0E21\u0E31\u0E19\u0E01\u0E47\u0E40\u0E08\u0E47\u0E1A\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E01\u0E31\u0E19","\u0E25\u0E38\u0E01\u0E40\u0E16\u0E2D\u0E30 \u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E40\u0E2B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E21\u0E31\u0E19\u0E2B\u0E21\u0E14\u0E41\u0E25\u0E49\u0E27"]},down2:{urgent:!0,lines:["\u0E40\u0E09\u0E35\u0E22\u0E14\u0E09\u0E34\u0E27 \u0E16\u0E49\u0E32\u0E2D\u0E22\u0E32\u0E01\u0E44\u0E14\u0E49 \u0E09\u0E31\u0E19\u0E0A\u0E48\u0E27\u0E22\u0E23\u0E31\u0E1A\u0E41\u0E23\u0E07\u0E15\u0E35\u0E01\u0E31\u0E1A\u0E40\u0E18\u0E2D\u0E44\u0E14\u0E49\u0E19\u0E30 \u0E41\u0E25\u0E49\u0E27\u0E41\u0E15\u0E48\u0E40\u0E18\u0E2D\u0E40\u0E25\u0E37\u0E2D\u0E01","\u0E2D\u0E35\u0E01\u0E23\u0E2D\u0E1A\u0E40\u0E2B\u0E23\u0E2D? \u0E14\u0E35\u0E40\u0E25\u0E22 \u0E09\u0E31\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E15\u0E23\u0E07\u0E19\u0E35\u0E49\u0E19\u0E30"]},downMore:{urgent:!0,lines:["\u0E25\u0E49\u0E21\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E31\u0E49\u0E19\u0E21\u0E31\u0E19\u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23?","\u0E43\u0E01\u0E25\u0E49\u0E02\u0E36\u0E49\u0E19\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 \u0E09\u0E31\u0E19\u0E40\u0E2B\u0E47\u0E19\u0E19\u0E30","\u0E2B\u0E32\u0E22\u0E43\u0E08\u0E25\u0E36\u0E01\u0E46 \u0E1C\u0E2A\u0E21\u0E2A\u0E01\u0E34\u0E25\u0E44\u0E27\u0E49 \u0E41\u0E16\u0E1A\u0E08\u0E30\u0E40\u0E15\u0E47\u0E21\u0E40\u0E23\u0E47\u0E27\u0E02\u0E36\u0E49\u0E19"]},close:{urgent:!0,lines:["\u0E21\u0E31\u0E19\u0E40\u0E01\u0E37\u0E2D\u0E1A\u0E25\u0E49\u0E21\u0E41\u0E25\u0E49\u0E27\u0E08\u0E23\u0E34\u0E07\u0E46! \u0E2D\u0E35\u0E01\u0E2A\u0E31\u0E01\u0E23\u0E2D\u0E1A\u0E44\u0E2B\u0E21?","\u0E19\u0E34\u0E14\u0E40\u0E14\u0E35\u0E22\u0E27! \u0E21\u0E31\u0E19\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E41\u0E23\u0E07\u0E19\u0E34\u0E14\u0E40\u0E14\u0E35\u0E22\u0E27\u0E40\u0E2D\u0E07!"]},runAgain:{urgent:!0,lines:["\u0E25\u0E32\u0E19\u0E2B\u0E34\u0E19\u0E2D\u0E35\u0E01\u0E23\u0E2D\u0E1A \u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01\u0E1E\u0E27\u0E01\u0E21\u0E31\u0E19\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E41\u0E25\u0E49\u0E27","\u0E44\u0E1B\u0E01\u0E31\u0E19\u0E40\u0E25\u0E22 \u0E23\u0E49\u0E32\u0E27 \u0E21\u0E31\u0E14 \u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01 \u0E25\u0E33\u0E14\u0E31\u0E1A\u0E44\u0E2B\u0E19\u0E01\u0E47\u0E44\u0E14\u0E49 \u0E02\u0E2D\u0E41\u0E04\u0E48\u0E1C\u0E2A\u0E21","\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E17\u0E35\u0E48\u0E40\u0E14\u0E34\u0E21 \u0E41\u0E15\u0E48\u0E40\u0E18\u0E2D\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E19\u0E31\u0E01\u0E17\u0E38\u0E1A\u0E04\u0E19\u0E40\u0E14\u0E34\u0E21\u0E41\u0E25\u0E49\u0E27"]},firstFoeWind:{lines:["\u0E40\u0E2B\u0E47\u0E19\u0E27\u0E07\u0E41\u0E14\u0E07\u0E40\u0E25\u0E47\u0E01\u0E46 \u0E44\u0E2B\u0E21? \u0E21\u0E31\u0E19\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E1E\u0E38\u0E48\u0E07\u0E43\u0E2A\u0E48 \u0E21\u0E49\u0E27\u0E19\u0E40\u0E25\u0E22!","\u0E2B\u0E34\u0E19\u0E08\u0E34\u0E4B\u0E27\u0E08\u0E30\u0E1E\u0E38\u0E48\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E40\u0E23\u0E37\u0E2D\u0E07\u0E41\u0E2A\u0E07 \u0E15\u0E35\u0E21\u0E31\u0E19\u0E01\u0E48\u0E2D\u0E19 \u0E15\u0E35\u0E42\u0E14\u0E19\u0E41\u0E25\u0E49\u0E27\u0E21\u0E31\u0E19\u0E08\u0E30\u0E07\u0E49\u0E32\u0E07\u0E44\u0E21\u0E48\u0E08\u0E1A"],urgent:!1},firstKill:{lines:["\u0E15\u0E31\u0E27\u0E19\u0E36\u0E07\u0E41\u0E25\u0E49\u0E27!","\u0E2B\u0E34\u0E19\u0E08\u0E34\u0E4B\u0E27\u0E04\u0E37\u0E2D\u0E40\u0E28\u0E29\u0E2B\u0E34\u0E19\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39 \u0E1E\u0E27\u0E01\u0E21\u0E31\u0E19\u0E08\u0E30\u0E2B\u0E25\u0E31\u0E1A\u0E14\u0E49\u0E27\u0E22","\u0E14\u0E35\u0E21\u0E32\u0E01 \u0E40\u0E14\u0E34\u0E19\u0E15\u0E48\u0E2D\u0E44\u0E1B"],urgent:!1},waveNext:{lines:["\u0E21\u0E35\u0E21\u0E32\u0E2D\u0E35\u0E01 \u0E15\u0E31\u0E27\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E44\u0E01\u0E25\u0E08\u0E30\u0E02\u0E27\u0E49\u0E32\u0E07\u0E2B\u0E34\u0E19 \u0E43\u0E0A\u0E49\u0E21\u0E31\u0E14\u0E14\u0E36\u0E07\u0E21\u0E31\u0E19\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32","\u0E15\u0E31\u0E27\u0E02\u0E27\u0E49\u0E32\u0E07\u0E0A\u0E2D\u0E1A\u0E2D\u0E22\u0E39\u0E48\u0E2B\u0E48\u0E32\u0E07 {key:tether} \u0E14\u0E36\u0E07\u0E21\u0E31\u0E19\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E44\u0E14\u0E49","\u0E0A\u0E38\u0E14\u0E15\u0E48\u0E2D\u0E44\u0E1B\u0E21\u0E32\u0E41\u0E25\u0E49\u0E27"],urgent:!1},swarm:{urgent:!1,lines:["\u0E25\u0E21\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E25\u0E49\u0E27 \u0E15\u0E2D\u0E19\u0E1E\u0E25\u0E1A\u0E04\u0E48\u0E33 Hollen \u0E08\u0E30\u0E15\u0E37\u0E48\u0E19","\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E1D\u0E39\u0E07\u0E40\u0E25\u0E22 \u0E2D\u0E22\u0E48\u0E32\u0E2B\u0E22\u0E38\u0E14\u0E40\u0E14\u0E34\u0E19 \u0E19\u0E31\u0E01\u0E17\u0E38\u0E1A","\u0E40\u0E15\u0E47\u0E21\u0E44\u0E1B\u0E2B\u0E21\u0E14 \u0E2D\u0E32\u0E28\u0E31\u0E22\u0E01\u0E33\u0E41\u0E1E\u0E07 \u0E2D\u0E22\u0E48\u0E32\u0E43\u0E2B\u0E49\u0E42\u0E14\u0E19\u0E25\u0E49\u0E2D\u0E21"]},pickFirst:{urgent:!0,lines:["\u0E1E\u0E31\u0E01\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48 \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1E\u0E25\u0E31\u0E07\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07 \u0E41\u0E15\u0E48\u0E25\u0E30\u0E2D\u0E31\u0E19\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E27\u0E34\u0E18\u0E35\u0E17\u0E35\u0E48\u0E04\u0E2D\u0E21\u0E42\u0E1A\u0E17\u0E33\u0E07\u0E32\u0E19"]},pick:{urgent:!1,lines:["\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E14\u0E35\u0E46","\u0E2D\u0E31\u0E19\u0E44\u0E2B\u0E19\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E40\u0E18\u0E2D\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14?","\u0E2B\u0E32\u0E22\u0E43\u0E08\u0E01\u0E48\u0E2D\u0E19 \u0E41\u0E25\u0E49\u0E27\u0E04\u0E48\u0E2D\u0E22\u0E40\u0E25\u0E37\u0E2D\u0E01"]},picked:{lines:["\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E14\u0E49\u0E14\u0E35","\u0E42\u0E2D\u0E49 \u0E0A\u0E2D\u0E1A\u0E2D\u0E31\u0E19\u0E19\u0E35\u0E49","\u0E21\u0E32\u0E14\u0E39\u0E01\u0E31\u0E19\u0E27\u0E48\u0E32\u0E21\u0E31\u0E19\u0E08\u0E30\u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23\u0E01\u0E31\u0E1A\u0E1E\u0E27\u0E01\u0E19\u0E31\u0E49\u0E19\u0E44\u0E14\u0E49"],urgent:!1},cairnIntro:{urgent:!0,lines:["\u0E19\u0E31\u0E48\u0E19\u0E04\u0E37\u0E2D Cairn \u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E17\u0E35\u0E48\u0E2D\u0E32\u0E22\u0E38\u0E19\u0E49\u0E2D\u0E22\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14 \u0E14\u0E39\u0E41\u0E16\u0E1A\u0E17\u0E2D\u0E07\u0E43\u0E15\u0E49\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E32 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E15\u0E47\u0E21\u0E41\u0E25\u0E49\u0E27\u0E40\u0E02\u0E32\u0E08\u0E30\u0E25\u0E49\u0E21","Cairn! \u0E40\u0E02\u0E32\u0E0B\u0E38\u0E48\u0E21\u0E0B\u0E48\u0E32\u0E21 \u0E40\u0E15\u0E34\u0E21\u0E41\u0E16\u0E1A\u0E17\u0E2D\u0E07\u0E43\u0E15\u0E49\u0E0A\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E15\u0E47\u0E21 \u0E41\u0E25\u0E49\u0E27\u0E40\u0E02\u0E32\u0E08\u0E30\u0E25\u0E49\u0E21\u0E01\u0E49\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01"]},cairnAgain:{urgent:!0,lines:["Cairn \u0E2D\u0E35\u0E01\u0E41\u0E25\u0E49\u0E27 \u0E23\u0E39\u0E49\u0E17\u0E32\u0E07\u0E40\u0E02\u0E32\u0E41\u0E25\u0E49\u0E27\u0E19\u0E35\u0E48","\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 \u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E15\u0E31\u0E27\u0E19\u0E49\u0E2D\u0E22"]},cairnRest:{urgent:!0,lines:["\u0E2B\u0E25\u0E31\u0E1A\u0E40\u0E16\u0E2D\u0E30 Cairn \u2026\u0E44\u0E14\u0E49\u0E22\u0E34\u0E19\u0E44\u0E2B\u0E21? \u0E2D\u0E30\u0E44\u0E23\u0E15\u0E31\u0E27\u0E43\u0E2B\u0E0D\u0E48\u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E37\u0E48\u0E19","\u0E40\u0E02\u0E32\u0E1E\u0E31\u0E01\u0E41\u0E25\u0E49\u0E27 \u0E19\u0E31\u0E48\u0E19\u0E15\u0E31\u0E27\u0E07\u0E48\u0E32\u0E22\u0E19\u0E30"]},hollenIntro:{urgent:!0,lines:["\u0E19\u0E31\u0E48\u0E19\u0E04\u0E37\u0E2D Hollen \u0E41\u0E01\u0E48\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E2B\u0E21\u0E39\u0E48\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32 \u0E04\u0E48\u0E2D\u0E22\u0E46 \u0E19\u0E30 \u0E40\u0E02\u0E32\u0E41\u0E04\u0E48\u0E25\u0E37\u0E21\u0E44\u0E1B\u0E27\u0E48\u0E32\u0E22\u0E37\u0E19\u0E40\u0E1D\u0E49\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E30\u0E44\u0E23","Hollen \u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E43\u0E04\u0E23\u0E08\u0E30\u0E08\u0E33\u0E44\u0E14\u0E49 \u0E25\u0E49\u0E21\u0E40\u0E02\u0E32\u0E43\u0E2B\u0E49\u0E44\u0E14\u0E49"]},hollenAgain:{urgent:!0,lines:["Hollen \u0E2D\u0E35\u0E01\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E02\u0E32\u0E01\u0E47\u0E08\u0E33\u0E40\u0E18\u0E2D\u0E44\u0E14\u0E49\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E01\u0E31\u0E19","\u0E40\u0E02\u0E32\u0E19\u0E31\u0E48\u0E19\u0E41\u0E2B\u0E25\u0E30 \u0E2B\u0E32\u0E22\u0E43\u0E08\u0E25\u0E36\u0E01\u0E46"]},adds:{lines:["\u0E21\u0E31\u0E19\u0E40\u0E23\u0E35\u0E22\u0E01\u0E15\u0E31\u0E27\u0E40\u0E25\u0E47\u0E01\u0E21\u0E32\u0E0A\u0E48\u0E27\u0E22! \u0E25\u0E49\u0E21\u0E21\u0E31\u0E19\u0E02\u0E49\u0E32\u0E07\u0E1E\u0E27\u0E01\u0E19\u0E31\u0E49\u0E19 \u0E15\u0E2D\u0E19\u0E25\u0E49\u0E21\u0E08\u0E30\u0E17\u0E31\u0E1A\u0E41\u0E2B\u0E25\u0E01","\u0E2B\u0E34\u0E19\u0E08\u0E34\u0E4B\u0E27! \u0E25\u0E48\u0E2D\u0E1E\u0E27\u0E01\u0E21\u0E31\u0E19\u0E21\u0E32\u0E43\u0E01\u0E25\u0E49\u0E40\u0E02\u0E32 \u0E41\u0E25\u0E49\u0E27\u0E25\u0E49\u0E21\u0E40\u0E02\u0E32\u0E17\u0E31\u0E1A\u0E1E\u0E27\u0E01\u0E21\u0E31\u0E19"],urgent:!1},firstCrush:{urgent:!1,lines:["\u0E40\u0E2B\u0E47\u0E19\u0E44\u0E2B\u0E21? \u0E15\u0E2D\u0E19\u0E25\u0E49\u0E21\u0E17\u0E31\u0E1A\u0E1E\u0E27\u0E01\u0E19\u0E31\u0E49\u0E19\u0E41\u0E2B\u0E25\u0E01\u0E40\u0E25\u0E22!","\u0E2E\u0E48\u0E32! \u0E25\u0E49\u0E21\u0E40\u0E02\u0E32\u0E02\u0E49\u0E32\u0E07\u0E1E\u0E27\u0E01\u0E21\u0E31\u0E19 \u0E1E\u0E37\u0E49\u0E19\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E40\u0E2D\u0E07"]},crush:{lines:["\u0E17\u0E31\u0E1A\u0E41\u0E2B\u0E25\u0E01!","\u0E15\u0E2D\u0E19\u0E25\u0E49\u0E21\u0E17\u0E33\u0E41\u0E1A\u0E1A\u0E19\u0E31\u0E49\u0E19\u0E40\u0E2D\u0E07 \u0E2A\u0E27\u0E22\u0E21\u0E32\u0E01","\u0E25\u0E49\u0E21\u0E21\u0E21 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E15\u0E31\u0E27\u0E40\u0E25\u0E47\u0E01\u0E14\u0E49\u0E27\u0E22"],urgent:!1}},repeatGap:90,wordsPerSec:3.5,charsPerSec:13};var us="en";function ep(i){us=i==="th"?"th":"en"}var Qf={Strike:"\u0E1F\u0E31\u0E19",Sunder:"\u0E17\u0E38\u0E1A\u0E23\u0E49\u0E32\u0E27",Tether:"\u0E21\u0E31\u0E14",Break:"\u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01",Roll:"\u0E21\u0E49\u0E27\u0E19",Counter:"\u0E2A\u0E27\u0E19",crack:"\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E23\u0E49\u0E32\u0E27",hold:"\u0E15\u0E23\u0E36\u0E07\u0E44\u0E27\u0E49",spend:"\u0E43\u0E0A\u0E49\u0E23\u0E2D\u0E22","FALL!":"\u0E1B\u0E34\u0E14\u0E09\u0E32\u0E01!",BALANCE:"\u0E41\u0E16\u0E1A\u0E25\u0E49\u0E21",TOPPLED:"\u0E25\u0E49\u0E21\u0E41\u0E25\u0E49\u0E27",HITS:"\u0E2E\u0E34\u0E15",HP:"\u0E40\u0E25\u0E37\u0E2D\u0E14",Elara:"\u0E40\u0E2D\u0E25\u0E32\u0E23\u0E48\u0E32",CRACKED:"\u0E23\u0E49\u0E32\u0E27",BOUND:"\u0E16\u0E39\u0E01\u0E21\u0E31\u0E14",CRUSHED:"\u0E17\u0E31\u0E1A\u0E41\u0E2B\u0E25\u0E01",PERFECT:"\u0E2B\u0E25\u0E1A\u0E1E\u0E2D\u0E14\u0E35!","STRIKE BACK!":"\u0E2A\u0E27\u0E19\u0E40\u0E25\u0E22!","COUNTER!":"\u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A!","SPENT!":"\u0E43\u0E0A\u0E49\u0E23\u0E2D\u0E22!","REPEAT \xD70.6":"\u0E0B\u0E49\u0E33 \xD70.6","MIX \xD7{n}":"\u0E1C\u0E2A\u0E21 \xD7{n}","TOPPLED!":"\u0E25\u0E49\u0E21\u0E41\u0E25\u0E49\u0E27!","Hit him while he's down \u2014 double damage":"\u0E15\u0E35\u0E15\u0E2D\u0E19\u0E21\u0E31\u0E19\u0E25\u0E49\u0E21 \u0E14\u0E32\u0E40\u0E21\u0E08 \xD72","GIANTFALL!":"\u0E1B\u0E34\u0E14\u0E09\u0E32\u0E01!","Tap FALL! \u2014 finish him":"\u0E41\u0E15\u0E30\u0E1B\u0E38\u0E48\u0E21 \u0E1B\u0E34\u0E14\u0E09\u0E32\u0E01! \u0E08\u0E1A\u0E21\u0E31\u0E19\u0E40\u0E25\u0E22","Press [{key}] \u2014 finish him":"\u0E01\u0E14 [{key}] \u0E08\u0E1A\u0E21\u0E31\u0E19\u0E40\u0E25\u0E22","{name} AWAKENS":"{name} \u0E15\u0E37\u0E48\u0E19\u0E40\u0E15\u0E47\u0E21\u0E17\u0E35\u0E48","He strikes faster now":"\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E21\u0E31\u0E19\u0E1F\u0E32\u0E14\u0E40\u0E23\u0E47\u0E27\u0E02\u0E36\u0E49\u0E19","{name} RESTS":"{name} \u0E2B\u0E25\u0E31\u0E1A\u0E41\u0E25\u0E49\u0E27","The terrace goes quiet\u2026":"\u0E25\u0E32\u0E19\u0E2B\u0E34\u0E19\u0E40\u0E07\u0E35\u0E22\u0E1A\u0E25\u0E07\u2026","THE DAWN TERRACES":"\u0E25\u0E32\u0E19\u0E2B\u0E34\u0E19\u0E23\u0E38\u0E48\u0E07\u0E2D\u0E23\u0E38\u0E13","Bring the Wardens to rest":"\u0E1E\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E44\u0E1B\u0E1E\u0E31\u0E01\u0E1C\u0E48\u0E2D\u0E19",FALLEN:"\u0E25\u0E49\u0E21\u0E25\u0E07","The Terrace Wakes":"\u0E25\u0E32\u0E19\u0E2B\u0E34\u0E19\u0E15\u0E37\u0E48\u0E19","Stones That Throw":"\u0E2B\u0E34\u0E19\u0E02\u0E27\u0E49\u0E32\u0E07","The Swarm":"\u0E1D\u0E39\u0E07\u0E2B\u0E34\u0E19","Warden of the East Gate":"\u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01","the Young Warden":"\u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E23\u0E38\u0E48\u0E19\u0E40\u0E22\u0E32\u0E27\u0E4C","Mix your skills, break their balance, and bring down giants a hundred times your size.":"\u0E1C\u0E2A\u0E21\u0E2A\u0E01\u0E34\u0E25 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E25\u0E31\u0E01 \u0E41\u0E25\u0E49\u0E27\u0E25\u0E49\u0E21\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E17\u0E35\u0E48\u0E15\u0E31\u0E27\u0E43\u0E2B\u0E0D\u0E48\u0E01\u0E27\u0E48\u0E32\u0E40\u0E23\u0E32\u0E23\u0E49\u0E2D\u0E22\u0E40\u0E17\u0E48\u0E32",Begin:"\u0E40\u0E23\u0E34\u0E48\u0E21","Copy play report":"\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19","One run: about 3 minutes \xB7 two Wardens to bring down":"\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E23\u0E2D\u0E1A\u0E23\u0E32\u0E27 3\u20134 \u0E19\u0E32\u0E17\u0E35 \xB7 \u0E15\u0E49\u0E2D\u0E07\u0E25\u0E49\u0E21\u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39 2 \u0E15\u0E19","Fight lab \xB7 Hollen only":"\u0E25\u0E32\u0E19\u0E1D\u0E36\u0E01 \xB7 Hollen \u0E15\u0E31\u0E27\u0E40\u0E14\u0E35\u0E22\u0E27","Choose a power":"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1E\u0E25\u0E31\u0E07","Elara hums while you rest (+{n} HP). One of three:":"\u0E40\u0E2D\u0E25\u0E32\u0E23\u0E48\u0E32\u0E2E\u0E31\u0E21\u0E40\u0E1E\u0E25\u0E07\u0E43\u0E2B\u0E49\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1E\u0E31\u0E01 (+{n} \u0E40\u0E25\u0E37\u0E2D\u0E14) \u0E40\u0E25\u0E37\u0E2D\u0E01 1 \u0E43\u0E19 3:",Paused:"\u0E2B\u0E22\u0E38\u0E14\u0E40\u0E01\u0E21","Your powers":"\u0E1E\u0E25\u0E31\u0E07\u0E17\u0E35\u0E48\u0E21\u0E35",Resume:"\u0E40\u0E25\u0E48\u0E19\u0E15\u0E48\u0E2D","Sound: on":"\u0E40\u0E2A\u0E35\u0E22\u0E07: \u0E40\u0E1B\u0E34\u0E14","Sound: off":"\u0E40\u0E2A\u0E35\u0E22\u0E07: \u0E1B\u0E34\u0E14","Screen shake: full":"\u0E08\u0E2D\u0E2A\u0E31\u0E48\u0E19: \u0E40\u0E15\u0E47\u0E21","Screen shake: less":"\u0E08\u0E2D\u0E2A\u0E31\u0E48\u0E19: \u0E19\u0E49\u0E2D\u0E22","Screen shake: off":"\u0E08\u0E2D\u0E2A\u0E31\u0E48\u0E19: \u0E1B\u0E34\u0E14","Elara: all hints":"\u0E40\u0E2D\u0E25\u0E32\u0E23\u0E48\u0E32: \u0E1A\u0E2D\u0E01\u0E17\u0E38\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07","Elara: key moments":"\u0E40\u0E2D\u0E25\u0E32\u0E23\u0E48\u0E32: \u0E40\u0E09\u0E1E\u0E32\u0E30\u0E2A\u0E33\u0E04\u0E31\u0E0D","Elara: off":"\u0E40\u0E2D\u0E25\u0E32\u0E23\u0E48\u0E32: \u0E1B\u0E34\u0E14","The Terraces sleep.":"\u0E25\u0E32\u0E19\u0E2B\u0E34\u0E19\u0E2B\u0E25\u0E31\u0E1A\u0E43\u0E2B\u0E25\u0E41\u0E25\u0E49\u0E27","Hollen rests.":"Hollen \u0E2B\u0E25\u0E31\u0E1A\u0E41\u0E25\u0E49\u0E27","So close.":"\u0E40\u0E01\u0E37\u0E2D\u0E1A\u0E41\u0E25\u0E49\u0E27!","Get up, Breaker.":"\u0E25\u0E38\u0E01\u0E02\u0E36\u0E49\u0E19\u0E21\u0E32 \u0E19\u0E31\u0E01\u0E17\u0E38\u0E1A","You fell at {stage}":"\u0E25\u0E49\u0E21\u0E17\u0E35\u0E48 {stage}"," \u2014 {giant} had {n}% left":" \u2014 {giant} \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E41\u0E23\u0E07 {n}%",time:"\u0E40\u0E27\u0E25\u0E32","HP left":"\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E40\u0E2B\u0E25\u0E37\u0E2D","Hollen's strength left":"\u0E41\u0E23\u0E07 Hollen \u0E17\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E37\u0E2D",topples:"\u0E25\u0E49\u0E21\u0E22\u0E31\u0E01\u0E29\u0E4C",crushed:"\u0E17\u0E31\u0E1A\u0E41\u0E2B\u0E25\u0E01","best combo":"\u0E04\u0E2D\u0E21\u0E42\u0E1A\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14","perfect rolls":"\u0E2B\u0E25\u0E1A\u0E1E\u0E2D\u0E14\u0E35","Powers: {list}":"\u0E1E\u0E25\u0E31\u0E07: {list}","Face {who} again":"\u0E2A\u0E39\u0E49 {who} \u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",him:"\u0E21\u0E31\u0E19","Run from the start":"\u0E40\u0E23\u0E34\u0E48\u0E21\u0E43\u0E2B\u0E21\u0E48\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E15\u0E49\u0E19","Run again":"\u0E40\u0E25\u0E48\u0E19\u0E2D\u0E35\u0E01\u0E23\u0E2D\u0E1A","Fight again":"\u0E2A\u0E39\u0E49\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07","Elara's Shield: take {n}% less damage":"\u0E42\u0E25\u0E48\u0E02\u0E2D\u0E07\u0E40\u0E2D\u0E25\u0E32\u0E23\u0E48\u0E32: \u0E42\u0E14\u0E19\u0E40\u0E1A\u0E32\u0E25\u0E07 {n}%","(your choice \u2014 it never weakens Hollen)":"(\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E2D\u0E07\u0E44\u0E14\u0E49 \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E17\u0E33\u0E43\u0E2B\u0E49 Hollen \u0E2D\u0E48\u0E2D\u0E19\u0E25\u0E07)","Copied. Paste it to whoever asked you to play.":"\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27 \u0E27\u0E32\u0E07\u0E2A\u0E48\u0E07\u0E43\u0E2B\u0E49\u0E04\u0E19\u0E17\u0E35\u0E48\u0E0A\u0E27\u0E19\u0E40\u0E25\u0E48\u0E19\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22","Left side: move":"\u0E0B\u0E49\u0E32\u0E22\u0E08\u0E2D: \u0E40\u0E14\u0E34\u0E19",cracks:"\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E23\u0E49\u0E32\u0E27",holds:"\u0E15\u0E23\u0E36\u0E07\u0E44\u0E27\u0E49",spends:"\u0E43\u0E0A\u0E49\u0E23\u0E2D\u0E22",dodges:"\u0E2B\u0E25\u0E1A",move:"\u0E40\u0E14\u0E34\u0E19","/ click strike":"/ \u0E04\u0E25\u0E34\u0E01 \u0E1F\u0E31\u0E19","Sunder \u2014 crack":"\u0E17\u0E38\u0E1A\u0E23\u0E49\u0E32\u0E27 \u2014 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E23\u0E49\u0E32\u0E27","Tether \u2014 hold":"\u0E21\u0E31\u0E14 \u2014 \u0E15\u0E23\u0E36\u0E07\u0E44\u0E27\u0E49","Break \u2014 spend":"\u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01 \u2014 \u0E43\u0E0A\u0E49\u0E23\u0E2D\u0E22",roll:"\u0E21\u0E49\u0E27\u0E19",pause:"\u0E2B\u0E22\u0E38\u0E14","the stick":"\u0E08\u0E2D\u0E22\u0E0B\u0E49\u0E32\u0E22","Loading\u2026":"\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14\u2026","Waking the terraces\u2026":"\u0E01\u0E33\u0E25\u0E31\u0E07\u0E1B\u0E25\u0E38\u0E01\u0E25\u0E32\u0E19\u0E2B\u0E34\u0E19\u2026",Ready:"\u0E1E\u0E23\u0E49\u0E2D\u0E21","Could not load. Please reload.":"\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E25\u0E2D\u0E07\u0E42\u0E2B\u0E25\u0E14\u0E2B\u0E19\u0E49\u0E32\u0E43\u0E2B\u0E21\u0E48","Turn your phone sideways":"\u0E2B\u0E21\u0E38\u0E19\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19","Toppleheart plays in landscape":"Toppleheart \u0E40\u0E25\u0E48\u0E19\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19"},Wo={burningTether:["\u0E21\u0E31\u0E14\u0E40\u0E1E\u0E25\u0E34\u0E07","\u0E21\u0E31\u0E14\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E2B\u0E34\u0E19\u0E23\u0E49\u0E32\u0E27\u0E14\u0E49\u0E27\u0E22 \u0E04\u0E39\u0E25\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E02\u0E2D\u0E07\u0E21\u0E31\u0E14\u0E19\u0E32\u0E19\u0E02\u0E36\u0E49\u0E19 1 \u0E27\u0E34"],deepFissure:["\u0E23\u0E2D\u0E22\u0E23\u0E49\u0E32\u0E27\u0E25\u0E36\u0E01","\u0E23\u0E2D\u0E22\u0E23\u0E49\u0E32\u0E27\u0E0B\u0E49\u0E2D\u0E19\u0E44\u0E14\u0E49\u0E16\u0E36\u0E07 3 \u0E0A\u0E31\u0E49\u0E19 \u0E04\u0E39\u0E25\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E02\u0E2D\u0E07\u0E17\u0E38\u0E1A\u0E23\u0E49\u0E32\u0E27\u0E19\u0E32\u0E19\u0E02\u0E36\u0E49\u0E19 0.6 \u0E27\u0E34"],lingering:["\u0E23\u0E2D\u0E22\u0E23\u0E49\u0E32\u0E27\u0E04\u0E49\u0E32\u0E07","\u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01\u0E41\u0E25\u0E49\u0E27\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E23\u0E2D\u0E22\u0E23\u0E49\u0E32\u0E27\u0E44\u0E27\u0E49 1 \u0E0A\u0E31\u0E49\u0E19 \u0E41\u0E15\u0E48\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E44\u0E1B\u0E40\u0E15\u0E34\u0E21\u0E41\u0E16\u0E1A\u0E25\u0E49\u0E21\u0E19\u0E49\u0E2D\u0E22\u0E25\u0E07 25%"],rollCrack:["\u0E21\u0E49\u0E27\u0E19\u0E1C\u0E48\u0E32\u0E2B\u0E34\u0E19","\u0E2B\u0E25\u0E1A\u0E1E\u0E2D\u0E14\u0E35\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E23\u0E49\u0E32\u0E27"],longTether:["\u0E21\u0E31\u0E14\u0E44\u0E01\u0E25","\u0E21\u0E31\u0E14\u0E22\u0E34\u0E07\u0E44\u0E01\u0E25\u0E02\u0E36\u0E49\u0E19 3 \u0E40\u0E21\u0E15\u0E23 \u0E41\u0E25\u0E30\u0E14\u0E36\u0E07\u0E15\u0E31\u0E27\u0E40\u0E23\u0E32\u0E44\u0E1B\u0E2B\u0E32\u0E22\u0E31\u0E01\u0E29\u0E4C \u0E04\u0E39\u0E25\u0E14\u0E32\u0E27\u0E19\u0E4C +0.5 \u0E27\u0E34"],quickHands:["\u0E21\u0E37\u0E2D\u0E44\u0E27","\u0E01\u0E32\u0E23\u0E1F\u0E31\u0E19\u0E40\u0E15\u0E34\u0E21\u0E41\u0E16\u0E1A\u0E25\u0E49\u0E21\u0E40\u0E1E\u0E34\u0E48\u0E21 60% \u0E41\u0E15\u0E48\u0E17\u0E38\u0E01\u0E2A\u0E01\u0E34\u0E25\u0E04\u0E39\u0E25\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E0A\u0E49\u0E32\u0E25\u0E07 20%"],heavySunder:["\u0E17\u0E38\u0E1A\u0E23\u0E49\u0E32\u0E27\u0E2B\u0E19\u0E31\u0E01","\u0E17\u0E38\u0E1A\u0E23\u0E49\u0E32\u0E27\u0E17\u0E35\u0E40\u0E14\u0E35\u0E22\u0E27\u0E23\u0E49\u0E32\u0E27 2 \u0E0A\u0E31\u0E49\u0E19 \u0E04\u0E39\u0E25\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E19\u0E32\u0E19\u0E02\u0E36\u0E49\u0E19 1.5 \u0E27\u0E34"],afterquake:["\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27\u0E15\u0E32\u0E21","\u0E17\u0E48\u0E32\u0E1B\u0E34\u0E14\u0E09\u0E32\u0E01\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E25\u0E32\u0E19\u0E2A\u0E31\u0E48\u0E19\u0E17\u0E31\u0E49\u0E07\u0E25\u0E32\u0E19 \u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E31\u0E27\u0E40\u0E25\u0E47\u0E01\u0E17\u0E38\u0E01\u0E15\u0E31\u0E27\u0E42\u0E14\u0E19 40 \u0E41\u0E25\u0E30\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E25\u0E49\u0E21\u0E19\u0E32\u0E19\u0E02\u0E36\u0E49\u0E19 1 \u0E27\u0E34"],secondWind:["\u0E25\u0E21\u0E2B\u0E32\u0E22\u0E43\u0E08\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E07","\u0E1F\u0E37\u0E49\u0E19\u0E40\u0E25\u0E37\u0E2D\u0E14 2 \u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E25\u0E49\u0E21"],chainReaction:["\u0E1B\u0E0F\u0E34\u0E01\u0E34\u0E23\u0E34\u0E22\u0E32\u0E25\u0E39\u0E01\u0E42\u0E0B\u0E48","\u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E21\u0E31\u0E14 \u0E41\u0E25\u0E49\u0E27\u0E21\u0E31\u0E14\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E0A\u0E49\u0E17\u0E31\u0E19\u0E17\u0E35"],glassStone:["\u0E2B\u0E34\u0E19\u0E41\u0E01\u0E49\u0E27","\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 25% \u0E41\u0E15\u0E48\u0E42\u0E14\u0E19\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 25%"],steadyFeet:["\u0E40\u0E17\u0E49\u0E32\u0E21\u0E31\u0E48\u0E19","\u0E21\u0E49\u0E27\u0E19\u0E0B\u0E49\u0E33\u0E44\u0E14\u0E49\u0E40\u0E23\u0E47\u0E27\u0E02\u0E36\u0E49\u0E19 40% \u0E41\u0E15\u0E48\u0E0A\u0E48\u0E27\u0E07\u0E44\u0E21\u0E48\u0E42\u0E14\u0E19\u0E15\u0E35\u0E15\u0E2D\u0E19\u0E21\u0E49\u0E27\u0E19\u0E2A\u0E31\u0E49\u0E19\u0E25\u0E07 40% \xB7 \u0E0A\u0E48\u0E27\u0E07\u0E2B\u0E25\u0E1A\u0E1E\u0E2D\u0E14\u0E35\u0E22\u0E32\u0E27\u0E02\u0E36\u0E49\u0E19 4 \u0E40\u0E1F\u0E23\u0E21 \xB7 \u0E01\u0E32\u0E23\u0E1F\u0E31\u0E19\u0E41\u0E23\u0E07\u0E25\u0E07 15%"]};function j(i,e){let t=us==="th"&&i!=null&&Qf[i]!=null?Qf[i]:i;return e&&t!=null&&(t=String(t).replace(/\{(\w+)\}/g,(n,s)=>s in e?e[s]:n)),t}var xr=i=>us==="th"&&Wo[i.id]?Wo[i.id][0]:i.name,Xo=i=>us==="th"&&Wo[i.id]?Wo[i.id][1]:i.text;var _r=i=>`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${i}</svg>`,Oi={light:_r('<path d="M5 19 L17.5 6.5 L19.5 4.5 L19 7 L6.5 19.5 Z" fill="currentColor" stroke-width="1.6"/><path d="M4 15.5 L8.5 20"/><path d="M3.2 20.8 L5.2 18.8"/>'),sunder:_r('<path d="M12 2.5 L10 8 L13.5 11 L9.5 15.5 L12 21.5"/><path d="M13.5 11 L19 9"/><path d="M10 8 L5 6.5"/><path d="M9.5 15.5 L4.5 17"/><path d="M13 17 L18.5 18.5"/>'),tether:_r('<rect x="2.5" y="8.5" width="10" height="7" rx="3.5" transform="rotate(-30 7.5 12)"/><rect x="11.5" y="8.5" width="10" height="7" rx="3.5" transform="rotate(-30 16.5 12)"/>'),breaker:_r('<path d="M12 3 L13.6 8.4 L19 6.5 L15.6 11 L21 13 L15.4 14.2 L17 20 L12 16.4 L7 20 L8.6 14.2 L3 13 L8.4 11 L5 6.5 L10.4 8.4 Z" fill="currentColor" fill-opacity=".25"/>'),heart:_r('<path d="M12 20 C5 15 3 11.5 3 8.5 A4.5 4.5 0 0 1 12 6.5 A4.5 4.5 0 0 1 21 8.5 C21 11.5 19 15 12 20 Z" fill="currentColor" fill-opacity=".25"/>'),dodge:_r('<path d="M19.5 12 A7.5 7.5 0 1 1 15.5 5.4"/><path d="M15.8 1.8 L16 5.8 L12 6.2"/>')};var tp={_about:"Small foes: Shardlings, young bits of Warden stone. No Balance bar; a hit interrupts their wind-up (stagger). wind = warning before the blow (s). First guesses until people play.",shardling:{name:"Shardling",hp:70,radius:.55,height:1.3,speed:2.6,reach:1.4,wind:.55,dmg:7,lunge:1.6,rest:[.9,1.6],stagger:.35,push:.6,tint:"#b9a17a"},slinger:{name:"Slinger",hp:50,radius:.5,height:1.15,speed:2.2,keep:[4.5,6.5],wind:.7,dmg:7,shot:{speed:9,radius:.35,life:1.6},rest:[1.4,2.2],stagger:.4,push:.6,tint:"#7d8aa8"},status:{crackedDmgMul:1.5,boundStun:1.2,breakerShatter:2.5,counterPush:2.2,counterStop:10}};var yr={_about:"Power cards: one is picked from three after each early stage. Each changes how combos are built and most cost something. 'set' writes into sim.mods (src/sim/mods.js). Numbers are first guesses.",cards:[{id:"burningTether",icons:["tether","sunder"],name:"Burning Tether",text:"Tether also CRACKS the stone. Its cooldown is 1 s longer.",set:{tetherCracks:!0,"cd.tether":1}},{id:"deepFissure",icons:["sunder"],name:"Deep Fissure",text:"CRACKED stacks up to 3. Sunder's cooldown is 0.6 s longer.",set:{crackedMax:1,"cd.sunder":.6}},{id:"lingering",icons:["breaker","sunder"],name:"Lingering Crack",text:"Break leaves one CRACK behind, but each spent status gives 25% less Balance.",set:{breakKeepsCrack:!0,breakGainMul:.75}},{id:"rollCrack",icons:["dodge","sunder"],name:"Splitting Roll",text:"A Perfect roll CRACKS the giant.",set:{perfectCracks:!0}},{id:"longTether",icons:["tether"],name:"Long Tether",text:"Tether reaches 3 m further and pulls YOU to the giant. Cooldown +0.5 s.",set:{tetherReach:3,tetherPullsSelf:!0,"cd.tether":.5}},{id:"quickHands",icons:["light"],name:"Quick Hands",text:"Strikes add 60% more Balance. Every skill cools down 20% slower.",set:{lightBalanceMul:1.6,cdMul:1.2}},{id:"heavySunder",icons:["sunder"],name:"Heavy Sunder",text:"Sunder cracks twice. Its cooldown is 1.5 s longer.",set:{sunderStacks:2,"cd.sunder":1.5}},{id:"afterquake",icons:["breaker"],name:"Afterquake",text:"Giantfall shakes the whole terrace: every small foe takes 40. Topples last 1 s longer.",set:{giantfallQuake:40,toppleTime:1}},{id:"secondWind",icons:["heart"],name:"Second Wind",text:"Heal 2 HP every time a giant topples.",set:{toppleHeal:2}},{id:"chainReaction",icons:["breaker","tether"],name:"Chain Reaction",text:"Breaking a BOUND giant makes Tether ready again.",set:{breakResetsTether:!0}},{id:"glassStone",icons:["light","heart"],name:"Glass Stone",text:"Deal 25% more damage. Take 25% more damage.",set:{dmgOut:1.25,dmgIn:1.25}},{id:"steadyFeet",icons:["dodge"],name:"Steady Feet",text:"Roll again 40% sooner, but each roll keeps you safe 40% shorter. Perfect window 4 frames longer. Strikes do 15% less damage.",set:{dodgeCdMul:.6,perfectBonus:4,lightDmgMul:.85,dodgeSafeMul:.6}}]};var qo={_about:"One run, about 4 minutes. Stages play in order; 'pick' offers 3 power cards (and rests: heal). The run is won when the last giant rests; a down restarts the run. Spawn ring = metres from the centre. Targets per stage are guesses to check with bots (tools/run-sweep.mjs).",intro:1.6,pickHeal:35,spawnRing:7.2,stages:[{type:"wave",name:"The Terrace Wakes",mood:1,foes:[["shardling",3]],target:"0:00-0:25",later:[["shardling",2]]},{type:"pick"},{type:"wave",name:"Stones That Throw",mood:1,foes:[["shardling",3],["slinger",2]],target:"0:30-0:55",later:[["shardling",2],["slinger",1]]},{type:"giant",giant:"cairn",mood:1,foes:[],target:"1:00-1:45",adds:{at:.5,foes:[["shardling",3]]}},{type:"pick"},{type:"wave",name:"The Swarm",mood:2,foes:[["shardling",3],["slinger",2]],later:[["shardling",3],["slinger",1]],target:"1:50-2:40"},{type:"pick"},{type:"giant",giant:"hollen",mood:2,foes:[],adds:{at:.6,foes:[["shardling",3]]},target:"2:50-4:30"}]};function Yo(i){let e=i>>>0||1,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.weighted=(n,s)=>{let r=n.reduce((o,l)=>o+s(l),0),a=t()*r;for(let o of n)if(a-=s(o),a<=0)return o;return n[n.length-1]},t.state=()=>e,t}var $o=class{constructor(){this.n={},this.timed=[]}add(e){this.n[e]=(this.n[e]||0)+1}release(e){if(!this.n[e])throw new Error(`lock "${e}" released more often than taken`);this.n[e]--}has(e){return(this.n[e]||0)>0}hold(e,t){this.add(e),this.timed.push({k:e,t})}tick(e){for(let t=this.timed.length-1;t>=0;t--){let n=this.timed[t];n.t-=e,n.t<=0&&(this.release(n.k),this.timed.splice(t,1))}}clear(){this.n={},this.timed=[]}};function np(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0).toString(16).padStart(8,"0")}var it=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z),St=(i,e)=>Math.atan2(e.x-i.x,e.z-i.z),oh=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},vr=(i,e,t)=>{let n=oh(e-i);return i+Math.max(-t,Math.min(t,n))};var FM=new Set(["opener","linker","ender"]);function lh(){return{hits:0,t:0,skills:[],last:null,best:0}}function Ko(i,e=i.combo){let t=i.data.rules.combo.variety,n=new Set(e.skills).size;return t[Math.min(n,t.length-1)]}function Mr(i,e){let t=i.combo;if(t.hits>0){let s=t.skills.join(">");i.fight.combos.push({hits:t.hits,seq:s,reason:e,variety:Ko(i)}),i.emit({t:"comboEnd",hits:t.hits,seq:s,reason:e})}let n=Math.max(t.best,t.hits);i.combo=lh(),i.combo.best=n}function ip(i,e){let t=i.combo;t.hits===0||i.hero.dodge||(t.t-=e,t.t<=0&&Mr(i,"time"))}function ch(i,e){let t=i.data.rules,n=i.data.moves[e],s=i.combo;if(e==="giantfall")return s.hits++,s.t=t.combo.window,{variety:1,repeat:!1};let r=!1;return FM.has(n.role)&&(r=s.last===e,s.skills.push(e),s.last=e),s.hits++,s.t=t.combo.window,{variety:Ko(i),repeat:r}}function BM(i,e){return i.data.rules.status[e].max+(e==="cracked"?i.mods.crackedMax:0)}function uh(i,e,t,n=1){let s=i.data.rules.status[t],r=e.status[t],a=r.n;r.n=Math.min(BM(i,t),r.n+n),r.t=s.time,r.n!==a&&i.emit({t:"status",on:!0,name:t,n:r.n,target:e.kind,id:e.id}),t==="cracked"&&r.n>i.data.rules.status.cracked.max&&i.powerFired("deepFissure")}function Zo(i,e,t){for(let n of Object.keys(e.status)){let s=e.status[n];s.n>0&&(s.t-=t,s.t<=0&&(s.n=0,i.emit({t:"status",on:!1,name:n,n:0,target:e.kind,id:e.id})))}}function sp(i,e,t){let n={...t.apply||{}};return e==="sunder"&&(n.cracked=i.mods.sunderStacks),e==="tether"&&i.mods.tetherCracks&&(n.cracked=(n.cracked||0)+1),n}var rp=(i,e)=>i.mods.dmgOut*(e.role==="string"?i.mods.lightDmgMul:1);function ap(i,e,t,n){let s=i.mods;e==="tether"&&s.tetherCracks&&i.powerFired("burningTether"),e==="sunder"&&s.sunderStacks>1&&i.powerFired("heavySunder"),t.role==="string"&&s.lightBalanceMul>1&&n&&i.powerFired("quickHands"),s.dmgOut>1&&i.powerFired("glassStone"),t.role==="string"&&s.lightDmgMul<1&&i.powerFired("steadyFeet")}function op(i,e,t,n=ch(i,e)){let s=i.data.rules,r=i.mods,a=i.data.moves[e],o=t.state==="toppled",l={move:e,role:a.role,dmg:a.dmg,dmgMul:rp(i,a),balance:a.balance||0,balanceMul:a.role==="string"?r.lightBalanceMul:1,apply:sp(i,e,a),consumed:{},variety:n.variety,repeat:n.repeat,toppled:o,toppledNow:!1};if(a.consume){for(let[d,m]of Object.entries(a.consume)){let f=t.status[d].n;f>0&&(l.dmg+=m.dmg*f,l.balance+=m.balance*f*r.breakGainMul,l.consumed[d]=f,t.status[d].n=0,i.emit({t:"status",on:!1,name:d,n:0,consumed:!0,target:"giant"}))}r.breakKeepsCrack&&l.consumed.cracked&&(t.status.cracked.n=1,t.status.cracked.t=s.status.cracked.time,i.powerFired("lingering")),r.breakResetsTether&&l.consumed.bound&&(i.hero.cd.tether=0,i.powerFired("chainReaction"))}if(l.balanceMul+=s.status.cracked.balanceGainPerStack*t.status.cracked.n,e==="giantfall"){let d=t.toppleQ||{hits:0,variety:1};l.dmg+=a.perComboHit*d.hits,l.dmgMul*=d.variety,l.variety=d.variety}else{o&&(l.dmgMul*=s.topple.dmgMul);let d=l.repeat?s.combo.repeat:1;l.dmgMul*=l.variety*d,l.balanceMul*=l.variety*d}for(let d of i.hooks.beforeHit)d(l,t,i);let c=Math.max(1,Math.round(l.dmg*l.dmgMul));t.hp=Math.max(0,t.hp-c);let u=i.hero;t.lastHitDir=St(u,t),t.sinceHit=0;let h=0;!o&&t.state!=="fallen"&&(h=l.balance*l.balanceMul,Number.isFinite(h)||(h=0),t.balance=Math.min(t.balMax,t.balance+h));for(let[d,m]of Object.entries(l.apply))uh(i,t,d,m);if(e==="tether"&&r.tetherPullsSelf){let d=St(t,u),m=t.radius+1,f=s.hero.pullTime;u.pull={x0:u.x,z0:u.z,x1:t.x+Math.sin(d)*m,z1:t.z+Math.cos(d)*m,t:0,dur:f},u.iframe=Math.max(u.iframe,f+.05),i.emit({t:"pull",x0:u.x,z0:u.z,x:u.pull.x1,z:u.pull.z1}),i.powerFired("longTether")}ap(i,e,a,h>0),i.fight.dmgDealt+=c,i.emit({t:"hit",target:"giant",move:e,dmg:c,gain:Math.round(h*10)/10,variety:l.variety,repeat:l.repeat,consumed:l.consumed,toppled:o,x:t.x,z:t.z,combo:i.combo.hits}),e==="counter"?(i.slowT=0,i.slowScale=1,i.stopT=Math.max(i.stopT,a.stop/60),i.lastStopAt=i.realTime,i.lastStopLen=a.stop/60):i.stop(a.stop+(a.stopPerStatus||0)*Object.values(l.consumed).reduce((d,m)=>d+m,0)),a.slow&&i.slow(a.slow[0],a.slow[1]);for(let d of i.hooks.afterHit)d(l,t,i);if(e==="giantfall"&&r.giantfallQuake){for(let d of i.foes)d.hp>0&&Jo(i,d,r.giantfallQuake,"quake",St(t,d),1.5);i.powerFired("afterquake")}if(t.hp<=0)return i.giantFallen(t),l;if(e==="giantfall"&&t.state==="toppled"&&(t.t=Math.min(t.t,s.topple.afterFinisher)),!o&&t.balance>=t.balMax)i.topple(t),l.toppledNow=!0;else{let d=i.giantDef(t).phases[t.phase+1];d&&t.hp/t.max<=d.from&&i.phaseUp(t)}return i.combo.hits>=s.combo.cap&&Mr(i,"cap"),l}function Jo(i,e,t,n,s,r=1){let a=i.data.foes[e.type];e.hp=Math.max(0,e.hp-t),(e.state==="wind"||e.state==="move"||e.state==="rest")&&(e.state="stagger",e.t=a.stagger,e.tg=null),e.x+=Math.sin(s)*a.push*r,e.z+=Math.cos(s)*a.push*r,e.flash=1,e.hp<=0&&i.foeDown(e,n)}function lp(i,e,t,n){let s=i.data.moves[e],r=i.data.foes.status,a=i.data.rules,o=s.dmg*rp(i,s)*n.variety*(n.repeat?a.combo.repeat:1),l=1,c={};if(t.status.cracked.n>0&&(o*=r.crackedDmgMul),s.consume)for(let[f,x]of Object.entries(s.consume)){let p=t.status[f].n;p>0&&(o+=x.dmg*2*p,c[f]=p,t.status[f].n=0,l=r.breakerShatter)}let u=i.hero,h=St(u,t),d=sp(i,e,s);for(let[f,x]of Object.entries(d))uh(i,t,f,x);if(e==="counter"&&(l=r.counterPush),d.bound){let f=1.1+t.radius;t.x=u.x+Math.sin(h)*f,t.z=u.z+Math.cos(h)*f,t.state="stun",t.t=r.boundStun,t.tg=null,l=0}let m=Math.max(1,Math.round(o));if(i.fight.dmgDealt+=m,ap(i,e,s,!1),i.emit({t:"hit",target:"foe",id:t.id,move:e,dmg:m,variety:n.variety,repeat:n.repeat,consumed:c,x:t.x,z:t.z,combo:i.combo.hits}),Jo(i,t,m,e,h,l),t.state==="stagger"&&d.bound&&(t.state="stun",t.t=r.boundStun),e==="counter"){let f=r.counterStop/60;i.slowT=0,i.slowScale=1,i.stopT=Math.max(i.stopT,f),i.lastStopAt=i.realTime,i.lastStopLen=f}else i.stop(Math.max(2,s.stop-2));i.combo.hits>=a.combo.cap&&Mr(i,"cap")}function hs(i,e,t){var u,h;let n=i.hero,s=i.data.rules,r=i.data.moves.dodge,a=t&&t.kind==="giant"?t:null;if(i.flow.state!=="fight"||n.hp<=0||i.giant&&i.giant.state==="fallen")return"none";if(n.dodge&&n.dodge.t*60<r.perfect+i.mods.perfectBonus){if(i.fight.perfects++,i.emit({t:"perfect",x:n.x,z:n.z}),i.slow(s.perfect.slow[0],s.perfect.slow[1]),n.dodge.t*60>=r.perfect&&i.powerFired("steadyFeet"),a&&a.state!=="toppled"&&a.state!=="fallen"&&(a.balance=Math.min(a.balMax,a.balance+s.perfect.balance),a.sinceHit=0,i.mods.perfectCracks&&(uh(i,a,"cracked",1),i.powerFired("rollCrack")),a.balance>=a.balMax&&(a.lastHitDir=St(n,a),i.topple(a))),i.counterOn){let d=i.data.moves.counter,m=null;if(a)m=a.state!=="toppled"&&a.state!=="fallen"&&a.hp>0?a:null;else if(t&&t.kind==="foe")m=t.hp>0?t:null;else if(t&&t.kind==="shot"){let f=i.foes.find(x=>x.id===t.from&&x.hp>0);m=f&&it(n,f)-f.radius<=d.lunge+d.reach?f:null}m&&(n.counterT=s.counter.window,n.counterOn={kind:m.kind,id:m.id},i.fight.counterWins++,i.emit({t:"counterReady",x:n.x,z:n.z,target:m.kind}))}return"perfect"}if(n.iframe>0||n.hurtT>0)return i.emit({t:"evade"}),"evade";let o={dmg:e.dmg,mul:(1-i.assistPct/100)*i.mods.dmgIn};for(let d of i.hooks.beforeHurt)d(o,t,i);let l=Math.max(1,Math.round(o.dmg*o.mul));i.mods.dmgIn>1&&i.powerFired("glassStone",{hurt:!0}),n.hp=Math.max(0,n.hp-l),n.hurtT=s.hero.hurtIframes,n.iframe=s.hero.hurtIframes,i.locks.hold("act",s.hero.hurtLock),n.move=null;let c=St(t,n);n.x+=Math.sin(c)*s.hero.hurtPush*(a?1:.5),n.z+=Math.cos(c)*s.hero.hurtPush*(a?1:.5),i.fight.hitsTaken++,i.fight.dmgTaken+=l;{let d=(a?a.id+":":"")+(e.name||"?");if(i.fight.hitsBy[d]=(i.fight.hitsBy[d]||0)+1,i.run){let m=(u=i.fight.hitsByStage)[h=i.run.stage]||(u[h]={});m[d]=(m[d]||0)+1}}return Mr(i,"hurt"),i.emit({t:"hurt",dmg:l,hp:n.hp,from:e.name}),n.hp<=0&&i.heroDown(),"hurt"}var zM=["light","sunder","tether","breaker","dodge"],hp=["sunder","tether","breaker"];function dp(i){return{x:0,z:4.5,face:Math.PI,hp:i.hero.hp,max:i.hero.hp,move:null,dodge:null,dodgeCd:0,iframe:0,hurtT:0,counterT:0,counterOn:null,pull:null,cd:{sunder:0,tether:0,breaker:0},mx:0,mz:0,moving:!1}}var fp=i=>i&&i.state!=="fallen"&&i.state!=="intro";function br(i){let e=i.foes.filter(t=>t.hp>0&&t.state!=="spawn");return fp(i.giant)&&e.push(i.giant),e}function ua(i){let e=i.hero,t=e.counterOn;if(!(e.counterT>0)||!t)return null;if(t.kind==="giant"){let s=i.giant;return s&&s.id===t.id&&fp(s)&&s.state!=="toppled"&&s.hp>0?s:null}let n=i.foes.find(s=>s.id===t.id);return n&&n.hp>0&&n.state!=="spawn"?n:null}function HM(i,e){let t=i.hero,n=i.data.moves,s=i.giant;if(e==="light"&&ua(i))return"counter";if(e==="light"){let r=t.move&&n[t.move.id];return r&&r.role==="string"&&r.next?r.next:"light1"}return e==="breaker"&&s&&s.state==="toppled"&&!s.finisherUsed?"giantfall":e}function cp(i,e){let t=i.hero,n=i.data.moves;if(i.locks.has("act")||hp.includes(e)&&t.cd[e]>0||e==="dodge"&&t.dodgeCd>0)return!1;if(t.dodge)return e==="counter"||e!=="dodge"&&t.dodge.t*60+1e-6>=n.dodge.cancelFrom;if(!t.move)return e!=="light2"&&e!=="light3";let s=n[t.move.id],r=t.move.t*60+1e-6,a=n.cancelRules[s.role]||{},o;e==="dodge"?o="dodge":s.role==="string"&&e===s.next?o="next":n[e].role==="string"?o="light":o="skill";let l=a[o];return l?l==="always"?r>=s.nextFrom:l==="hit"?t.move.hit&&r>=s.cancel:l==="recovery"?r>=s.startup+s.active:l==="hitOrRecovery"?t.move.hit&&r>=s.cancel||r>=s.startup+s.active:l==="any":!1}var pp=(i,e)=>i.data.moves[e].reach+(e==="tether"?i.mods.tetherReach:0);function VM(i,e){let t=i.hero,n=i.data.moves,s=i.data.rules,r=n[e],a=i.giant,o=e==="counter"?ua(i):null;t.move&&t.move.id!==e&&i.emit({t:"cancel",from:t.move.id,to:e}),t.dodge=null,t.move={id:e,t:0,hit:!1,done:!1},t.counterT=0,e==="counter"&&(i.slowT=0,i.slowScale=1,t.iframe=Math.max(t.iframe,(r.startup+r.active)/60),i.fight.counters++),r.cd&&(t.cd[e]=(r.cd+i.mods.cd[e])*i.mods.cdMul),e==="giantfall"&&a&&(a.finisherUsed=!0,a.state==="toppled"&&(a.t=Math.max(a.t,(r.startup+r.active)/60+.05)));let l=pp(i,e)+s.hero.aimAssist,c=br(i).filter(h=>it(t,h)-h.radius<l).sort((h,d)=>it(t,h)-h.radius-(it(t,d)-d.radius)),u=o||(e==="giantfall"&&a?a:null)||(c.includes(a)&&it(t,a)-a.radius<r.reach+1.2?a:c[0]);u?t.face=St(t,u):t.moving&&(t.face=Math.atan2(t.mx,t.mz)),i.fight.moves[e]=(i.fight.moves[e]||0)+1,i.emit({t:"swing",move:e})}function up(i){let e=i.hero,t=i.data.moves.dodge;e.move&&i.emit({t:"cancel",from:e.move.id,to:"dodge"}),e.move=null,e.counterT=0,e.pull=null;let n=e.moving?Math.atan2(e.mx,e.mz):e.face+Math.PI;e.dodge={t:0,a:n,p:0},e.dodgeCd=t.cd*i.mods.dodgeCdMul,e.iframe=t.iframes/60*i.mods.dodgeSafeMul,i.fight.dodges++,i.emit({t:"dodge"})}function mp(i,e){for(let t of e||[]){if(!zM.includes(t))continue;let n=t==="dodge"&&i.buffer.find(s=>s.p==="dodge");n?n.age=0:i.buffer.push({p:t,age:0})}}function gp(i,e){var r;let t=i.data.rules.input,n=t.buffer,s=(r=t.dodgeBuffer)!=null?r:t.buffer;for(let a=i.buffer.length-1;a>=0;a--){let o=i.buffer[a];o.age+=e,o.age>(o.p==="dodge"?s:n)&&(i.fight.dropped++,i.buffer.splice(a,1))}}function GM(i){let e=i.buffer.findIndex(t=>t.p==="dodge");if(e>=0){cp(i,"dodge")&&(i.buffer.splice(e,1),up(i));return}for(let t=0;t<i.buffer.length;t++){let n=HM(i,i.buffer[t].p);if(cp(i,n)){i.buffer.splice(t,1),n==="dodge"?up(i):VM(i,n);return}}}function WM(i,e,t,n){let s=i.hero,r=it(s,n);if(r-n.radius>t)return!1;let a=e.arc/2+Math.asin(Math.min(1,n.radius/Math.max(r,.01)));return Math.abs(oh(St(s,n)-s.face))<=a}function XM(i,e){let t=i.data.moves[e],n=pp(i,e),s=i.hero,r=br(i).filter(a=>WM(i,t,n,a));return e==="giantfall"&&(r=r.filter(a=>a.kind==="giant")),e==="tether"&&r.length>1&&(r.sort((a,o)=>it(s,a)-a.radius-(it(s,o)-o.radius)),r=[r[0]]),r.sort((a,o)=>(o.kind==="giant")-(a.kind==="giant"))}function xp(i,e,t){let n=i.hero,s=i.data.rules,r=i.data.moves;for(let o of hp)n.cd[o]=Math.max(0,n.cd[o]-e);n.dodgeCd-=e,n.iframe-=e,n.hurtT-=e,n.counterT=Math.max(0,n.counterT-e),n.counterT>0&&!ua(i)&&(n.counterT=0),i.locks.tick(e),n.mx=t.mx||0,n.mz=t.mz||0;let a=Math.hypot(n.mx,n.mz);if(a>1&&(n.mx/=a,n.mz/=a),n.moving=Math.hypot(n.mx,n.mz)>.15,i.flow.state!=="fight"||n.hp<=0){n.move=null,n.dodge=null;return}if(GM(i),n.pull){let o=n.pull;o.t+=e;let l=Math.min(1,o.t/o.dur),c=1-(1-l)*(1-l);n.x=o.x0+(o.x1-o.x0)*c,n.z=o.z0+(o.z1-o.z0)*c,l>=1&&(n.pull=null,i.emit({t:"pullEnd",x:n.x,z:n.z}))}if(n.move){let o=n.move,l=r[o.id],c=o.t*60;o.t+=e;let u=o.t*60+1e-6;if(c<l.startup&&l.lunge&&!n.pull){let h=l.lunge*(Math.min(u,l.startup)-c)/l.startup,d=n.x+Math.sin(n.face)*h,m=n.z+Math.cos(n.face)*h;br(i).some(f=>it({x:d,z:m},f)<=f.radius+s.hero.radius+.15)||(n.x=d,n.z=m)}if(n.moving&&!n.pull&&(n.x+=n.mx*s.hero.speed*s.hero.moveInMove*e,n.z+=n.mz*s.hero.speed*s.hero.moveInMove*e),!o.done&&u>=l.startup){let h=XM(i,o.id);if(h.length){o.hit=!0,o.done=!0;let d=ch(i,o.id);for(let m of h)m.kind==="giant"?op(i,o.id,m,d):m.hp>0&&lp(i,o.id,m,d)}else u>=l.startup+l.active&&(o.done=!0,i.emit({t:"whiff",move:o.id}))}n.move===o&&u>=l.startup+l.active+l.recovery&&(n.move=null)}else if(n.dodge){let o=r.dodge,l=n.dodge;l.t+=e;let c=Math.min(1,l.t*60/o.frames),u=1-(1-c)*(1-c),h=u-l.p;l.p=u,n.x+=Math.sin(l.a)*o.dist*h,n.z+=Math.cos(l.a)*o.dist*h,c>=1&&(n.dodge=null)}else n.moving&&!n.pull&&!i.locks.has("act")&&(n.x+=n.mx*s.hero.speed*e,n.z+=n.mz*s.hero.speed*e,n.face=Math.atan2(n.mx,n.mz));qM(i)}function qM(i){let e=i.hero,t=i.data.rules;for(let r of br(i)){let a=it(e,r),o=r.radius+t.hero.radius;if(a<o){let l=a>1e-4?St(r,e):0;e.x=r.x+Math.sin(l)*o,e.z=r.z+Math.cos(l)*o}}let n=Math.hypot(e.x,e.z),s=t.arena.radius-t.hero.radius;n>s&&(e.x*=s/n,e.z*=s/n)}function hh(i,e){let t=i.data.giants[e];return{kind:"giant",id:e,x:0,z:-2.5,introT:null,face:0,hp:t.hp,max:t.hp,balance:0,balMax:t.balance,radius:t.radius,state:"intro",t:0,atk:null,queue:[],phase:0,tg:null,windAge:0,think:0,dashLeft:0,struck:!1,status:{cracked:{n:0,t:0},bound:{n:0,t:0}},sinceHit:99,lastHitDir:0,toppleDir:0,toppleQ:null,topples:0}}var Sr=(i,e)=>i.data.giants[e.id],jo=(i,e)=>Sr(i,e).phases[e.phase];function $M(i,e){let t=Sr(i,e),n=it(e,i.hero),s=jo(i,e).attacks.filter(r=>{let a=t.attacks[r];return a.chain?n<=Math.min(...a.chain.map(o=>t.attacks[o].range[1])):n>=a.range[0]&&n<=a.range[1]});return s.length?i.rng.weighted(s,r=>t.attacks[r].weight):null}function _p(i,e,t){let n=Sr(i,e),s=jo(i,e),r=n.attacks[t];r.chain&&(e.queue=r.chain.slice(1),t=r.chain[0],r=n.attacks[t]),e.state="wind",e.atk=t,e.windAge=0,e.t=r.wind*s.windMul,e.struck=!1;let a=i.hero;e.tg={kind:r.shape,x:r.at==="hero"?a.x:e.x,z:r.at==="hero"?a.z:e.z,r:r.r||0,inner:r.inner||0,w:r.w||0,len:r.len||0,ang:e.face,k:0,dur:e.t},i.emit({t:"wind",atk:t,dur:e.t})}function YM(i,e){let t=Sr(i,e),n=t.attacks[e.atk],s=i.hero,r=e.tg,a={name:e.atk,dmg:n.dmg};if(i.emit({t:"strike",atk:e.atk,x:r.x,z:r.z}),n.shape==="circle")it(s,r)<=r.r+.15&&hs(i,a,e);else if(n.shape==="ring"){let o=it(s,e);o<=r.r&&o>=r.inner&&hs(i,a,e)}if(e.state==="wind"){if(n.shape==="lane"){e.state="active",e.dashLeft=n.dash;return}yp(i,e)}}function yp(i,e){let t=Sr(i,e).attacks[e.atk];e.state="open",e.t=t.open*jo(i,e).openMul,e.tg=null}function vp(i,e,t){let n=i.data.rules,s=Sr(i,e),r=i.hero;Zo(i,e,t);let a=t*(e.status.bound.n>0?n.status.bound.giantTimeMul:1);if(e.sinceHit+=t,e.state!=="toppled"&&e.state!=="fallen"&&e.sinceHit>n.balance.idle&&e.balance>0){let c=n.balance.drainFloor+(1-n.balance.drainFloor)*(e.hp/e.max);e.balance=Math.max(0,e.balance-n.balance.drain*c*t)}let o=St(e,r),l=it(e,r);switch(e.state){case"intro":e.introT!=null&&(e.introT-=t,e.introT<=0&&(e.state="approach",e.think=.6,i.emit({t:"giantReady",id:e.id})));break;case"approach":{if(e.face=vr(e.face,o,s.turn*a),l>s.reachWant+e.radius&&(e.x+=Math.sin(e.face)*s.speed*a,e.z+=Math.cos(e.face)*s.speed*a),e.think-=a,e.think<=0){let c=$M(i,e);c&&_p(i,e,c)}break}case"wind":{let c=s.attacks[e.atk];e.t-=a,e.windAge+=a;let u=c.track?c.track:.7;e.windAge<e.tg.dur*u&&(e.face=vr(e.face,o,s.turn*a),c.at==="hero"?(e.tg.x=r.x,e.tg.z=r.z):(e.tg.x=e.x,e.tg.z=e.z,e.tg.ang=e.face)),e.tg.k=1-Math.max(0,e.t)/e.tg.dur,e.t<=0&&YM(i,e);break}case"active":{let c=s.attacks[e.atk],u=c.len/c.dash;e.x+=Math.sin(e.tg.ang)*u*a,e.z+=Math.cos(e.tg.ang)*u*a,e.dashLeft-=a;let h=Math.hypot(e.x,e.z),d=n.arena.radius-e.radius*.6;h>d&&(e.x*=d/h,e.z*=d/h,e.dashLeft=0,i.emit({t:"wallHit",x:e.x,z:e.z})),!e.struck&&it(e,r)<=c.w/2+n.hero.radius&&(e.struck=!0,hs(i,{name:e.atk,dmg:c.dmg},e)),e.state==="active"&&e.dashLeft<=0&&yp(i,e);break}case"open":e.t-=a,e.t<=0&&(e.queue.length?_p(i,e,e.queue.shift()):(e.state="approach",e.atk=null,e.think=i.rng.range(s.think[0],s.think[1])));break;case"roar":e.t-=a,e.t<=0&&(e.state="approach",e.think=i.rng.range(s.think[0],s.think[1]));break;case"toppled":e.t-=t,!e.fallReady&&e.t<=n.topple.fallWindow&&(e.fallReady=!0,i.emit({t:"fallReady"})),e.t<=0&&(e.state="getup",e.t=n.topple.getup,i.emit({t:"getup"}));break;case"getup":e.t-=a,e.t<=0&&(e.state="approach",e.think=i.rng.range(s.think[0],s.think[1])*.5);break;default:break}}function Mp(i,e,t){let n=i.data.rules,s=i.hero;e.state="toppled",e.t=n.topple.time+i.mods.toppleTime,e.tg=null,e.queue=[],e.atk=null,e.fallReady=!1,i.mods.toppleTime>0&&i.powerFired("afterquake"),e.balance=0,e.balMax*=n.topple.grow,e.toppleQ=t,e.topples++,e.finisherUsed=!1;let r=e.lastHitDir;Math.abs(Math.sin(r))<.5&&(r+=(s.x>=e.x?-1:1)*Math.PI/3),e.toppleDir=r,i.emit({t:"topple",dir:r,x:e.x,z:e.z,n:e.topples,hits:t.hits});let a=i.giantDef(e).height*.9,o=Math.sin(r),l=Math.cos(r);for(let u of i.foes){if(u.hp<=0||u.state==="dead")continue;let h=u.x-e.x,d=u.z-e.z,m=h*o+d*l,f=Math.abs(h*l-d*o);m>-.5&&m<a&&f<1.3+u.radius&&(u.hp=0,i.fight.crushes++,i.emit({t:"crush",id:u.id,x:u.x,z:u.z}),i.foeDown(u,"crush"))}let c=i.data.rules.topple.quake;for(let u of i.foes)u.hp>0&&u.state!=="dead"&&Math.hypot(u.x-e.x,u.z-e.z)<e.radius+c.r&&(i.fight.crushes++,Jo(i,u,c.dmg,"quake",Math.atan2(u.x-e.x,u.z-e.z),2.5));if(i.mods.toppleHeal){let u=s.hp;s.hp=Math.min(s.max,s.hp+i.mods.toppleHeal),s.hp>u&&(i.emit({t:"heal",n:s.hp-u}),i.powerFired("secondWind"))}}function bp(i,e){e.phase++;let t=jo(i,e);i.emit({t:"phase",n:e.phase}),!(e.state==="toppled"||e.state==="getup")&&(e.state="roar",e.t=t.roar||1,e.tg=null,e.queue=[],e.atk=null)}function wp(i,e,t,n){let s=i.data.foes[e];return{kind:"foe",id:++i.nextId,type:e,x:t,z:n,face:St({x:t,z:n},i.hero),hp:s.hp,max:s.hp,radius:s.radius,state:"spawn",t:.7,tg:null,status:{cracked:{n:0,t:0},bound:{n:0,t:0}},flash:0,struck:!1,lungeLeft:0,cool:0}}function Sp(i,e){let t=i.data.foes[e.type],n=i.hero;e.state="wind",e.t=t.wind,e.struck=!1,e.face=St(e,n),e.tg=e.type==="slinger"?{kind:"lane",x:e.x,z:e.z,w:.7,len:9,ang:e.face,k:0,dur:t.wind,small:!0}:{kind:"lane",x:e.x,z:e.z,w:2*(e.radius+.35),len:t.lunge+e.radius+.35,ang:e.face,k:0,dur:t.wind,small:!0},i.emit({t:"foeWind",id:e.id,type:e.type})}function Tp(i,e){let t=i.hero,n=i.data.rules;for(let r=i.foes.length-1;r>=0;r--){let a=i.foes[r],o=i.data.foes[a.type];if(a.flash=Math.max(0,a.flash-e*8),a.state==="dead"){a.t-=e,a.t<=0&&i.foes.splice(r,1);continue}Zo(i,a,e);let l=it(a,t),c=St(a,t);switch(a.state){case"spawn":a.t-=e,a.t<=0&&(a.state="move",a.cool=i.rng.range(.2,.8));break;case"move":{if(a.face=vr(a.face,c,6*e),a.cool-=e,a.type==="slinger"){let[u,h]=o.keep;l<u?(a.x-=Math.sin(c)*o.speed*e,a.z-=Math.cos(c)*o.speed*e):l>h&&(a.x+=Math.sin(c)*o.speed*e,a.z+=Math.cos(c)*o.speed*e),l<=h+1&&a.cool<=0&&Sp(i,a)}else l>o.reach+a.radius+n.hero.radius?(a.x+=Math.sin(a.face)*o.speed*e,a.z+=Math.cos(a.face)*o.speed*e):a.cool<=0&&Sp(i,a);break}case"wind":if(a.t-=e,a.t>a.tg.dur*.45&&(a.face=vr(a.face,c,5*e),a.type==="slinger"?(a.tg.x=a.x,a.tg.z=a.z,a.tg.ang=a.face):(a.tg.x=a.x+Math.sin(a.face)*o.lunge,a.tg.z=a.z+Math.cos(a.face)*o.lunge)),a.tg.k=1-Math.max(0,a.t)/a.tg.dur,a.t<=0)if(a.type==="slinger"){let u=o.shot;i.shots.push({x:a.x+Math.sin(a.tg.ang)*.6,z:a.z+Math.cos(a.tg.ang)*.6,vx:Math.sin(a.tg.ang)*u.speed,vz:Math.cos(a.tg.ang)*u.speed,r:u.radius,life:u.life,dmg:o.dmg,kind:"shot",from:a.id}),i.emit({t:"throw",id:a.id}),a.state="rest",a.t=i.rng.range(o.rest[0],o.rest[1]),a.tg=null}else a.state="act",a.lungeLeft=.16,a.tg=null,i.emit({t:"lunge",id:a.id});break;case"act":{let u=o.lunge/.16;a.x+=Math.sin(a.face)*u*e,a.z+=Math.cos(a.face)*u*e,a.lungeLeft-=e,!a.struck&&it(a,t)<=a.radius+n.hero.radius+.35&&(a.struck=!0,hs(i,{name:a.type,dmg:o.dmg},a)),a.lungeLeft<=0&&a.state==="act"&&(a.state="rest",a.t=i.rng.range(o.rest[0],o.rest[1]));break}case"rest":case"stagger":case"stun":a.t-=e,a.t<=0&&(a.cool=a.state==="rest"?0:i.rng.range(.1,.4),a.state="move");break;default:break}}let s=i.foes.filter(r=>r.state!=="dead");for(let r=0;r<s.length;r++){let a=s[r];for(let u=r+1;u<s.length;u++){let h=s[u],d=it(a,h),m=a.radius+h.radius;if(d<m&&d>1e-4){let f=(m-d)/2,x=St(a,h);a.x-=Math.sin(x)*f,a.z-=Math.cos(x)*f,h.x+=Math.sin(x)*f,h.z+=Math.cos(x)*f}}let o=i.giant;if(o&&o.state!=="fallen"){let u=it(a,o),h=a.radius+o.radius;if(u<h&&u>1e-4){let d=St(o,a);a.x=o.x+Math.sin(d)*h,a.z=o.z+Math.cos(d)*h}}let l=Math.hypot(a.x,a.z),c=n.arena.radius-a.radius;l>c&&(a.x*=c/l,a.z*=c/l)}}function Ep(i,e){let t=i.hero,n=i.data.rules;for(let s=i.shots.length-1;s>=0;s--){let r=i.shots[s];if(r.x+=r.vx*e,r.z+=r.vz*e,r.life-=e,it(r,t)<=r.r+n.hero.radius){hs(i,{name:"stone",dmg:r.dmg},r),i.shots.splice(s,1);continue}(r.life<=0||Math.hypot(r.x,r.z)>n.arena.radius+1)&&i.shots.splice(s,1)}}var KM=new Set(["crackedMax","tetherReach","toppleTime","toppleHeal","giantfallQuake","perfectBonus","sunderStacks"]),ZM=new Set(["breakGainMul","lightBalanceMul","cdMul","dmgOut","dmgIn","dodgeCdMul","dodgeSafeMul","lightDmgMul"]);function Ap(){return{tetherCracks:!1,crackedMax:0,breakKeepsCrack:!1,breakGainMul:1,perfectCracks:!1,tetherReach:0,tetherPullsSelf:!1,lightBalanceMul:1,cdMul:1,cd:{sunder:0,tether:0,breaker:0},sunderStacks:1,giantfallQuake:0,toppleTime:0,toppleHeal:0,breakResetsTether:!1,dmgOut:1,dmgIn:1,dodgeCdMul:1,dodgeSafeMul:1,perfectBonus:0,lightDmgMul:1}}function dh(i,e){for(let[t,n]of Object.entries(e.set))if(t.startsWith("cd."))i.cd[t.slice(3)]+=n;else if(t==="sunderStacks")i.sunderStacks=Math.max(i.sunderStacks,n);else if(KM.has(t))i[t]+=n;else if(ZM.has(t))i[t]*=n;else if(typeof n=="boolean")i[t]=n;else throw new Error(`power card ${e.id}: unknown field ${t}`)}var Fi=1/60,JM={intro:["fight"],fight:["pick","won","down"],pick:["fight"],won:["intro"],down:["intro"]};function Rp(i,e={}){var d,m;let t={data:i,seed:(d=e.seed)!=null?d:1,strict:!!e.strict,counterOn:(m=e.counter)!=null?m:!!(i.rules.counter&&i.rules.counter.enabled),mode:e.mode||"lab",giantId:e.giant||"hollen",events:[],hooks:{beforeHit:[],afterHit:[],beforeHurt:[]},flow:{state:"intro",t:0,seen:{},errors:[]},log:[],downsInRow:0,assistPct:0,nextId:0,realTime:0,runsStarted:0,resume:null,time:0,stopT:0,lastStopAt:-99,lastStopLen:0,slowT:0,slowScale:1},n=i.run;t.emit=f=>{f.at=Math.round(t.time*1e3)/1e3,t.events.push(f)},t.drain=()=>{let f=t.events;return t.events=[],f},t.powerFired=(f,x={})=>{t.run&&t.run.picks.includes(f)&&t.emit({t:"power",id:f,...x})},t.giantDef=f=>i.giants[f.id],t.setFlow=f=>{let x=t.flow.state,p=`${x}>${f}`;if(t.flow.seen[p]=(t.flow.seen[p]||0)+1,!(JM[x]||[]).includes(f)&&(t.flow.errors.push(p),t.strict))throw new Error(`flow ${p} is not allowed`);t.flow.state=f,t.flow.t=0,t.emit({t:"flow",from:x,to:f})},t.stop=f=>{let x=f/60,p=i.rules.feel.stopGap;x<=0||t.slowT>0||t.realTime-t.lastStopAt<p&&x<=t.lastStopLen||(t.stopT=Math.max(t.stopT,x),t.lastStopAt=t.realTime,t.lastStopLen=x)},t.slow=(f,x)=>{t.slowScale=t.slowT>0?Math.min(t.slowScale,x):x,t.slowT=Math.max(t.slowT,f)},t.topple=f=>{Mp(t,f,{hits:t.combo.hits,variety:Ko(t)}),t.fight.topples++,t.stopT=Math.max(t.stopT,i.rules.feel.toppleStop/60),t.lastStopAt=t.realTime,t.slow(i.rules.feel.toppleSlow[0],i.rules.feel.toppleSlow[1])},t.phaseUp=f=>bp(t,f),t.giantFallen=f=>{if(f.state="fallen",f.tg=null,f.balance=0,Mr(t,"win"),t.slow(i.rules.feel.winSlow[0],i.rules.feel.winSlow[1]),t.fight.giantsDown++,t.emit({t:"fallen",id:f.id,x:f.x,z:f.z,last:t.mode==="lab"||t.run.stage===n.stages.length-1}),t.mode==="lab"){s("won");return}for(let x of t.foes)x.hp>0&&(x.hp=0,t.foeDown(x,"crumble"));t.shots.length=0,t.run.clearT=0},t.foeDown=(f,x)=>{f.state!=="dead"&&(f.hp=0,f.state="dead",f.t=.9,f.tg=null,f.how=x,t.fight.foesDown++,t.emit({t:"foeDown",id:f.id,type:f.type,how:x,x:f.x,z:f.z}))},t.heroDown=()=>{s("down")};function s(f){var M;let x=t.fight,p=t.giant,g=t.hero;x.result=f,x.time=Math.round(t.time*10)/10,x.heroHp=g.hp,x.realSec=t.run?Math.round((t.realTime-t.run.t0)*10)/10:x.time,x.giantHpPct=p?p.hp>0?Math.max(1,Math.round(100*p.hp/p.max)):0:null,x.assistPct=t.assistPct,x.bestCombo=t.combo.best,t.mode==="run"&&(x.resumedAt=(M=t.run.resumedAt)!=null?M:null,x.stage=t.run.stage,x.stages=n.stages.length,x.stageName=r(t.run.stage),x.powers=t.run.picks.slice(),x.hpAt=t.run.hpAt.slice(),x.stageTimes=t.run.times.slice()),t.log.push(x),t.downsInRow=f==="down"?t.downsInRow+1:0,t.setFlow(f)}let r=f=>{let x=n&&n.stages[f];return x?x.type==="giant"?i.giants[x.giant].name:x.name||x.type:""};function a(f){let x=t.hero,p=Math.PI-Math.sign(x.x||1)*Math.min(.7,Math.abs(x.x)*.15),g=0,M=f.reduce((b,[,v])=>b+v,0);for(let[b,v]of f)for(let E=0;E<v;E++){let T=p+(g-(M-1)/2)*.55+t.rng.range(-.15,.15);g++,t.foes.push(wp(t,b,Math.sin(T)*n.spawnRing,Math.cos(T)*n.spawnRing))}t.emit({t:"spawn",n:M})}function o(f){let x=n.stages[f];if(t.run.stage=f,t.run.stageT=0,t.run.laterDone=!1,t.run.addsDone=!1,t.run.clearT=-1,x.type==="giant"){t.giant=hh(t,x.giant),t.giant.introT=n.intro;let p=t.hero;Math.hypot(p.x-t.giant.x,p.z-t.giant.z)<4&&(p.x=0,p.z=4.5)}else t.giant=null;x.foes&&x.foes.length&&a(x.foes),t.emit({t:"stage",i:f,type:x.type,name:r(f),mood:x.mood||1,giant:x.giant||null})}function l(){let f=n.stages[t.run.stage],x=t.foes.some(p=>p.state!=="dead");return f.type==="wave"?!x&&(!f.later||t.run.laterDone):t.giant&&t.giant.state==="fallen"&&t.run.clearT>=2.6}function c(){t.run.times.push(Math.round((t.realTime-t.run.t0)*10)/10),t.run.hpAt.push(Math.round(t.hero.hp));let f=t.run.stage+1;if(f>=n.stages.length){s("won");return}if(n.stages[f].type==="pick"){t.run.stage=f,u(),t.setFlow("pick");return}o(f)}function u(){let f=i.powers.cards.filter(p=>!t.run.picks.includes(p.id)),x=[];for(;x.length<3&&f.length;)x.push(f.splice(Math.floor(t.rng()*f.length),1)[0]);t.run.offer=x,t.emit({t:"offer",cards:x.map(p=>p.id)})}t.choose=f=>{if(t.flow.state!=="pick"||!t.run.offer||!t.run.offer[f])return!1;let x=t.run.offer[f];dh(t.mods,x),t.run.picks.push(x.id),t.run.offer=null,t.run.times.push(Math.round((t.realTime-t.run.t0)*10)/10),t.run.hpAt.push(Math.round(t.hero.hp));let p=t.hero,g=p.hp;return p.hp=Math.min(p.max,p.hp+n.pickHeal),t.emit({t:"picked",id:x.id,heal:p.hp-g}),t.setFlow("fight"),o(t.run.stage+1),!0};function h(f){if(t.flow.state!=="fight")return;let x=n.stages[t.run.stage];t.run.stageT+=f,x.type==="wave"&&x.later&&!t.run.laterDone&&t.foes.filter(p=>p.state!=="dead").length<=1&&(t.run.laterDone=!0,a(x.later)),x.type==="giant"&&x.adds&&!t.run.addsDone&&t.giant&&t.giant.hp/t.giant.max<=x.adds.at&&(t.run.addsDone=!0,a(x.adds.foes)),t.run.clearT>=0&&(t.run.clearT+=f),l()&&c()}return t.reset=()=>{t.rng=Yo(t.seed+t.log.length*7919),t.locks=new $o,t.buffer=[],t.mods=Ap(),t.hero=dp(i.rules),t.foes=[],t.shots=[],t.nextId=0,t.giant=t.mode==="lab"?hh(t,t.giantId):null,t.run=t.mode==="run"?{stage:-1,stageT:0,picks:[],offer:null,clearT:-1,times:[],hpAt:[],t0:t.realTime}:null,t.combo=lh(),t.time=0,t.stopT=0,t.slowT=0,t.slowScale=1,t.fight={n:t.log.length+1,result:null,hitsTaken:0,dmgTaken:0,dmgDealt:0,topples:0,perfects:0,counterWins:0,counters:0,dodges:0,dropped:0,combos:[],moves:{},hitsBy:{},hitsByStage:{},foesDown:0,crushes:0,giantsDown:0},t.flow.state!=="intro"&&t.setFlow("intro"),t.flow.t=0},t.setAssist=f=>{t.assistPct=Math.max(0,Math.min(i.rules.assist.capPct,f))},t.assistOffer=()=>{let f=i.rules.assist;return t.downsInRow<f.offerAfter?0:Math.min(f.capPct,f.startPct+f.perDownPct*(t.downsInRow-f.offerAfter))},t.step=(f={})=>{if(t.realTime+=Fi,t.flow.state==="pick")return;if(mp(t,f.press),t.stopT>1e-6){t.stopT-=Fi;return}let x=1;t.slowT>0&&(x=t.slowScale,t.slowT-=Fi,t.slowT<=0&&(t.slowScale=1));let p=Fi*x;if(t.time+=p,t.flow.t+=p,gp(t,Fi),t.flow.state==="intro"&&t.flow.t>=(t.mode==="run"?n.intro:i.rules.flow.intro))if(t.mode==="lab")t.giant.state="approach",t.giant.think=.6,t.setFlow("fight"),t.runsStarted++;else{t.setFlow("fight"),t.runsStarted++;let M=t.resume;if(t.resume=null,M){for(let b of M.picks){let v=i.powers.cards.find(E=>E.id===b);v&&(dh(t.mods,v),t.run.picks.push(b))}t.run.resumedAt=M.stage,o(M.stage)}else o(0)}xp(t,p,f),(t.flow.state==="fight"||t.flow.state==="intro")&&t.giant&&vp(t,t.giant,p),t.flow.state==="fight"&&(Tp(t,p),Ep(t,p),ip(t,p),t.mode==="run"&&h(p))},t.hash=()=>{let f=g=>Math.round(g*1e3),x=t.hero,p=t.giant;return np(JSON.stringify([t.flow.state,f(t.time),f(x.x),f(x.z),f(x.face),x.hp,x.move&&x.move.id,p?[f(p.x),f(p.z),f(p.face),p.hp,f(p.balance),p.state,p.atk,p.topples]:null,t.foes.map(g=>[g.id,f(g.x),f(g.z),g.hp,g.state]),t.combo.hits,t.rng.state(),t.log.length,t.run&&t.run.stage]))},t.report=()=>{let f=t.log,x=f.flatMap(E=>E.combos).filter(E=>E.seq),p={};for(let E of x)p[E.seq]=(p[E.seq]||0)+1;let g=Object.entries(p).sort((E,T)=>T[1]-E[1])[0],M={};for(let E of x){let T=E.seq.split(">").slice(0,3).join(">");M[T]=(M[T]||0)+1}let b=Object.entries(M).sort((E,T)=>T[1]-E[1])[0],v=f.filter(E=>E.result==="won");return{version:3,mode:t.mode,...t.counterOn?{counter:!0}:{},runs:f.length,wins:v.length,firstWinAt:v.length?f.indexOf(v[0])+1:null,zeroHitWins:v.filter(E=>E.hitsTaken===0).length,runsStarted:t.runsStarted,topSequence:g?{seq:g[0],share:Math.round(100*g[1]/x.length)}:null,topOpening:b?{seq:b[0],share:Math.round(100*b[1]/x.length)}:null,skillCombos:x.length,perRun:f.map(E=>{var T,R;return{n:E.n,result:E.result,time:E.time,realSec:E.realSec,resumedAt:(T=E.resumedAt)!=null?T:null,stage:(R=E.stageName)!=null?R:null,heroHp:E.heroHp,giantHpPct:E.giantHpPct,hitsTaken:E.hitsTaken,topples:E.topples,crushes:E.crushes,perfects:E.perfects,hpAtStageEnd:E.hpAt||[],hitsBy:E.hitsBy||{},hitsByStage:E.hitsByStage||{},rolls:E.dodges,rollsPerMin:E.time>0?Math.round(E.dodges/(E.time/60)*10)/10:0,bestCombo:E.bestCombo,powers:E.powers||[],stageTimes:E.stageTimes||[],assistPct:E.assistPct,...t.counterOn?{counterWins:E.counterWins,counters:E.counters}:{}}})}},t.reset(),t}var jM={novice:{reaction:.4,miss:.3,lead:[.04,.45],plan:"mash",gap:.22,careful:0,counter:.25},mid:{reaction:.28,miss:.15,lead:[.03,.26],plan:"mixed",gap:.15,careful:.5,counter:.6},skilled:{reaction:.18,miss:.04,lead:[.02,.13],plan:"combo",gap:.1,careful:1,counter:.95},human:{reaction:.32,miss:.08,readMu:.84,readSd:.18,lead:[.03,.32],plan:"mixed",gap:.34,careful:.3,counter:.5}};function QM(i,e,t,n){if(t.kind==="circle")return it(i,t)<=t.r+n;if(t.kind==="ring")return it(i,e)<=t.r+n;let s=i.x-t.x,r=i.z-t.z,a=s*Math.sin(t.ang)+r*Math.cos(t.ang),o=Math.abs(s*Math.cos(t.ang)-r*Math.sin(t.ang));return a>-1&&a<t.len+1&&o<t.w/2+n}function Cp(i,e,t){if(t.kind==="ring")return St(e,i);if(t.kind==="circle")return it(i,t)>.2?St(t,i):St(e,i);let n=(i.x-t.x)*Math.cos(t.ang)-(i.z-t.z)*Math.sin(t.ang);return t.ang+(n>=0?-Math.PI/2:Math.PI/2)}var eb=i=>.5*(1+Math.tanh(.7978845608*(i+.044715*i*i*i)));function tb(i,e,t){if(e.src!==t||i.readMu==null)return i.miss;let n=e.age+e.left;return Math.max(i.miss,1-eb((n-i.readMu)/i.readSd))}function Ip(i,e=1){let t=jM[i],n=Yo(e),s=new Map,r=0,a=!1,o=0,l=null,c=!1;return u=>{let h=u.giant,d=u.hero,m=[],f=0,x=0;if(u.time<o&&(s=new Map,r=0,a=!1),o=u.time,u.flow.state==="pick")return u.choose(Math.floor(n()*u.run.offer.length)),{mx:f,mz:x,press:m};if(u.flow.state!=="fight")return{mx:f,mz:x,press:m};let p=[];h&&h.state==="wind"&&p.push({key:`g${h.atk}@${(u.time-h.windAge).toFixed(2)}`,age:h.windAge,left:h.t,src:h,tg:h.tg});for(let _ of u.foes)_.state==="wind"&&_.tg&&p.push({key:`f${_.id}@${(u.time-(_.tg.dur-_.t)).toFixed(2)}`,age:_.tg.dur-_.t,left:_.t+(_.type==="slinger"?it(_,d)/u.data.foes.slinger.shot.speed:.08),src:_,tg:_.tg});let g=null;for(let _ of p){if(_.age<t.reaction)continue;s.has(_.key)||s.set(_.key,{miss:n()<tb(t,_,h),lead:n.range(t.lead[0],t.lead[1]),done:!1});let I=s.get(_.key);I.miss||I.done||!QM(d,_.src,_.tg,.6)||(!g||_.left<g.left)&&(g={..._,p:I})}if(s.size>60&&(s=new Map([...s].slice(-20))),g&&g.left<=g.p.lead){let _=Cp(d,g.src,g.tg);return g.p.done=!0,{mx:Math.sin(_),mz:Math.cos(_),press:["dodge"]}}if(h&&h.state==="active"&&!a&&it(h,d)<h.radius+2.2&&(a=!0,n()>=t.miss)){let _=Cp(d,h,h.tg||{kind:"ring"});return{mx:Math.sin(_),mz:Math.cos(_),press:["dodge"]}}(!h||h.state!=="active")&&(a=!1);let M=ua(u);if(M){let _=`${u.fight.n}:${u.fight.counterWins}`,I=u.data.moves.counter;if(l!==_&&(l=_,c=n()<(t.counter||0)),c&&u.data.rules.counter.window-d.counterT>=t.reaction*.5&&it(d,M)-M.radius<I.reach+I.lunge)return c=!1,{mx:f,mz:x,press:["light"]}}if(g&&g.left<.5&&n()<t.careful)return{mx:f,mz:x,press:m};let b=br(u);if(!b.length)return{mx:f,mz:x,press:m};let v=b.includes(h)?h:b.sort((_,I)=>it(d,_)-it(d,I))[0],E=it(d,v);if(E-v.radius>1.5){let _=St(d,v);f=Math.sin(_),x=Math.cos(_)}if(u.time<r||E-v.radius>2.1)return{mx:f,mz:x,press:m};r=u.time+t.gap*n.range(.8,1.25);let T=_=>d.cd[_]<=0,R=h&&h.state==="toppled",L=R&&h.fallReady,y="light";if(t.plan==="mash"){if(R&&n()<.4)y="breaker";else if(n()<.22){let _=["sunder","tether","breaker"].filter(T);_.length&&(y=_[Math.floor(n()*_.length)])}}else if(t.plan==="mixed"){if(L&&n()<.75)y="breaker";else if(n()<.5){let _=["sunder","tether","breaker"].filter(I=>T(I)&&!(R&&I==="breaker"));_.length&&(y=_[Math.floor(n()*_.length)])}}else{let _=v.status.cracked.n,I=v.status.bound.n;L?y="breaker":R?y="light":_>=1&&I===0&&T("tether")?y="tether":(_>=1||I)&&T("breaker")?y="breaker":T("sunder")&&_<2&&(y="sunder")}return m.push(y),{mx:f,mz:x,press:m}}}var ha={value:0};function Dp(i){ha.value=i}var fh=`
float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vn(p); p *= 2.03; a *= 0.5; } return s; }
`;function Pp(i,e){let t=[];for(let n=0;n<=14;n++){let s=n/14;t.push(new Ne(e*Math.sin(Math.PI*Math.min(1,s*1.25+.05))*(1-s)**.55+.001,s*i))}return new Ro(t,18)}function Lp(i,e,t){return new Qt({uniforms:{uT:ha,uPh:{value:e},uK:t,uInner:{value:i?1:0}},vertexShader:`
      uniform float uT, uPh; varying vec2 vUv; varying float vRim;
      void main(){
        vUv = uv; vec3 p = position; float y = uv.y;
        float sw = sin(y * 5.0 - uT * 7.0 + uPh) * 0.09 + sin(y * 9.0 - uT * 13.0 + uPh * 2.0) * 0.04;   // sways more toward the tip
        p.x += sw * y * 1.4; p.z += cos(y * 4.0 - uT * 6.0 + uPh) * 0.06 * y;
        p.y *= 1.0 + sin(uT * 11.0 + uPh) * 0.06 + sin(uT * 17.3 + uPh * 1.7) * 0.04;                       // flicker
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vec3 n = normalize(normalMatrix * normal); vRim = abs(dot(n, normalize(-mv.xyz)));
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:fh+`
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
      }`,transparent:!0,depthWrite:!1,blending:i?Vn:Pn,side:Rt})}function nb(i,e,t,n){let s=new Dn(e,i);s.translate(0,i/2,0);let r=new Qt({uniforms:{uT:ha,uPh:{value:t},uK:n},vertexShader:`
      varying vec2 vUv; void main(){ vUv = uv;
        vec4 c = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);                    // spherical billboard around the base
        vec3 sx = vec3(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz), 1.0);
        c.xy += position.xy * sx.xy; gl_Position = projectionMatrix * c; }`,fragmentShader:fh+`
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
      }`,transparent:!0,depthWrite:!1,side:Rt}),a=new Pe(s,r);return a.frustumCulled=!1,a.renderOrder=5,a}function ib(i,e,t,n,s){let r=new wt,a=new Float32Array(i);for(let c=0;c<i;c++)a[c]=(c+.37)/i;r.setAttribute("position",new Et(new Float32Array(i*3),3)),r.setAttribute("aSeed",new Et(a,1));let o=new Qt({uniforms:{uT:ha,uPh:{value:n},uH:{value:e},uR:{value:t},uK:s,uPx:{value:1}},vertexShader:`
      attribute float aSeed; uniform float uT, uPh, uH, uR, uPx; varying float vL;
      void main(){
        float s = aSeed * 17.31 + uPh, life = fract(uT * (0.45 + fract(s) * 0.4) + aSeed);
        vec3 p = vec3(sin(s * 6.1 + life * 3.0) * uR * (0.4 + life), life * uH * 2.2, cos(s * 4.7 + life * 2.6) * uR * (0.4 + life));
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vL = life;
        gl_PointSize = uPx * (1.0 - life) * 0.09 * 600.0 / -mv.z; gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uK; varying float vL;
      void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)) * (1.0 - vL) * uK; gl_FragColor = vec4(vec3(1.0, 0.62, 0.2) * a, a); }`,transparent:!0,depthWrite:!1,blending:Vn}),l=new lr(r,o);return l.frustumCulled=!1,l.userData.px=o.uniforms.uPx,l}function Np(i=1,e=.3,{sparks:t=10,ph:n=Math.random()*10}={}){let s=new lt,r={value:1},a=nb(i*1.1,e*2.6,n,r),o=new Pe(Pp(i*.8,e),Lp(!1,n,r));o.renderOrder=4;let l=new Pe(Pp(i*.5,e*.55),Lp(!0,n+3.1,r));return l.renderOrder=6,s.add(o,a,l),t&&s.add(ib(t,i,e,n,r)),s.userData.k=r,s}function ph(i,e){let t={value:0},n=new Qt({uniforms:{uT:ha,uOpen:t},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:fh+`
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
      }`,transparent:!0,depthWrite:!1,side:Rt}),s=new Pe(new Dn(i,e),n);return s.userData.setOpen=(r,a=.016)=>{t.value+=((r?1:0)-t.value)*Math.min(1,a*3)},s}function Up(i,e,t){let n=new lt,s=e*9301+49297,r=()=>(s=(s*9301+49297)%233280,s/233280),a=new cr(1,2),o=7+Math.floor(r()*4);for(let c=0;c<o;c++){let u=c/(o-1)-.5,h=1-Math.abs(u)*1.1,d=new Pe(a,t),m=i*(.45+h*.55)*(.8+r()*.4);d.position.set(u*i*3+(r()-.5)*i*.4,m*.25+r()*i*.25*h,(r()-.5)*i*.9),d.scale.set(m,m*.82,m*.9),n.add(d)}let l=new Pe(a,t);return l.scale.set(i*1.9,i*.38,i*.9),l.position.y=-i*.05,n.add(l),n.userData.craft="cloud",n}function kp(i){let e=new Map,t=new Map,n=i.clone();return Op(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Op(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Op(i.children[n],e.children[n],t)}var _t={sky:["#8fc6f7","#ffd0b0","#ffb38a"],outline:"#3a2b25",floor:"#eadfc8",floor2:"#d9c9a6",trim:"#b88f5a",tower:"#cdb994",pillar:"#f1e8d6",golem:"#c9b38c",golem2:"#a48a63",moss:"#7fae5a",core:"#5fd8ff",eye:"#ffb84a",sun:"#fff0d2",amb:"#ffe2c6",slime:"#6fdcc4",shield:"#8fa6d9",sprout:"#9ad16a",petal:"#ff8fb1",warn:"#ff4b3a",portal:"#ffd36b",wolf:"#5d5a8f",wolf2:"#3f3c6b",wolfEye:"#ff5c7a",dusk:["#5b6bc8","#c58ab8","#ff9a72"]},ds=null,Wn=()=>{if(ds)return ds;let i=[110,185,255],e=new Uint8Array(i.length*4);return i.forEach((t,n)=>{e[n*4]=e[n*4+1]=e[n*4+2]=t,e[n*4+3]=255}),ds=new ar(e,i.length,1),ds.minFilter=ds.magFilter=Ot,ds.needsUpdate=!0,ds},mh=new Map,Bi=i=>(mh.has(i)||mh.set(i,new tn({color:i,gradientMap:Wn()})),mh.get(i)),sb=new Ct({color:_t.outline,side:$t});function zi(i,e,t=0,n=0,s=0,r=!0,a=!0){let o=new Pe(i,e);if(o.position.set(t,n,s),o.castShadow=a,r){i.computeBoundingSphere();let l=new Pe(i,sb);l.scale.setScalar(1+.035/Math.max(i.boundingSphere.radius,.08)),o.add(l)}return o}function wr(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Ao(n);return s.colorSpace=At,s}var gh=wr(64,64,i=>{let e=i.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,64,64)});function fs(i,e,t=1){let n=new Ii(new li({map:gh,color:i,blending:Vn,depthWrite:!1,transparent:!0,opacity:t}));return n.scale.setScalar(e),n}function Fp(i,e){let t=i.scene.clone(!0);t.traverse(o=>{if(!o.isMesh)return;let l=o.material,c=l.emissive&&l.emissive.getHex()!==0;o.material=new tn({color:l.color,gradientMap:Wn(),emissive:c?l.emissive:l.color,emissiveIntensity:c?1.1:.16,transparent:l.transparent,opacity:l.opacity}),o.castShadow=!0});let n=new Ft().setFromObject(t),s=n.getSize(new P),r=e/s.y;t.scale.multiplyScalar(r),t.position.set(-(n.min.x+s.x/2)*r,-n.min.y*r,-(n.min.z+s.z/2)*r);let a=new lt;return a.add(t),a}var xh=(i,e)=>i.getObjectByName(e)||null,_h=i=>{let e=new Pe(new Pi(i,24),new Ct({color:"#3a2a20",transparent:!0,opacity:.25,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.03,e};function da(i,e){let t=i.scene.clone(!0),n=new Ft().setFromObject(t),s=n.getSize(new P),r=e/s.y;t.scale.multiplyScalar(r),t.position.set(-(n.min.x+s.x/2)*r,-n.min.y*r,-(n.min.z+s.z/2)*r),t.traverse(o=>{if(!o.isMesh)return;let l=o.material,c=l.transparent||l.alphaTest>0;o.material=new tn({map:l.map,gradientMap:Wn(),emissive:"#ffffff",emissiveMap:l.map,emissiveIntensity:.25,alphaTest:c?.5:0,side:c?Rt:Mn}),o.castShadow=!0,o.receiveShadow=!c});let a=new lt;return a.add(t),a}function Bp(i,e,t={},n=8.2){let s=C=>{let N=new Lt(C);return N.colorSpace=At,N.anisotropy=4,N.needsUpdate=!0,N};i.background=t.skyDawn?s(t.skyDawn):wr(4,256,(C,N,G)=>{let D=C.createLinearGradient(0,0,0,G);D.addColorStop(0,_t.sky[0]),D.addColorStop(.55,_t.sky[1]),D.addColorStop(1,_t.sky[2]),C.fillStyle=D,C.fillRect(0,0,N,G)}),i.add(new Do(_t.amb,_t.floor2,1.25));let r=new pr(_t.sun,2.6);r.position.set(-6,12,7),e.shadows&&(r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:40}),r.shadow.bias=-8e-4,r.shadow.normalBias=.03),i.add(r);let a=new lt;i.add(a);let o=wr(512,512,(C,N)=>{C.fillStyle=_t.floor,C.fillRect(0,0,N,N);let G=N/2;C.strokeStyle=_t.floor2,C.lineWidth=7;for(let D of[.12,.26,.4,.47])C.beginPath(),C.arc(G,G,D*N,0,7),C.stroke();C.lineWidth=4;for(let D=0;D<12;D++){let z=D*Math.PI/6;C.beginPath(),C.moveTo(G+Math.cos(z)*.26*N,G+Math.sin(z)*.26*N),C.lineTo(G+Math.cos(z)*.47*N,G+Math.sin(z)*.47*N),C.stroke()}}),l=n+.4,c=new Pe(new Pi(l,64),new tn({map:t.floor?s(t.floor):o,gradientMap:Wn()}));c.rotation.x=-Math.PI/2,c.receiveShadow=!0,a.add(c);let u=l+1.35,h=l+.68,d=new Pe(new en(l-.05,u,72,1),new tn({color:"#c9a273",gradientMap:Wn()}));d.rotation.x=-Math.PI/2,d.position.y=-.02,d.receiveShadow=!0,a.add(d),a.add(zi(new Nn(u+.12,u+.12,.5,64,1,!0),Bi(_t.trim),0,-.27,0,!1,!1)),a.add(zi(new Nn(l-.3,l-.9,40,24,1,!0),Bi(_t.tower),0,-20.4,0,!1,!1));let m=[];for(let C=0;C<7;C++){let N=Math.PI*(1.08+C*.14),G=Math.cos(N)*h,D=Math.sin(N)*h,z=C%3===1?2.6:4.6,F=C%3===1,Y=F&&t.pillarCracked||t.pillar;if(Y){let ee=da(Y,4.8);if(!F&&C%3===0&&t.pillarClaw){let ae=da(t.pillarClaw,4.8);ae.visible=!1,ae.rotation.y=-Math.atan2(-G,-D),ee.add(ae),m.push([ee.children[0],ae])}if(F&&t.bannerTorn){ee.updateMatrixWorld(!0);let ae=[];if(ee.traverse(xe=>{xe.isMesh&&xe.material.alphaTest>0&&ae.push(xe)}),ae.length){let xe=new Ft;ae.forEach(Z=>xe.expandByObject(Z));let ke=xe.getSize(new P),H=da(t.bannerTorn,ke.y);H.position.set((xe.min.x+xe.max.x)/2,xe.min.y,xe.max.z+.01),H.visible=!1,ee.add(H),ae.forEach(Z=>m.push([Z,null])),m.push([null,H])}}ee.position.set(G,0,D),ee.rotation.y=Math.atan2(-G,-D),ee.userData.pillar=!0,a.add(ee);continue}a.add(zi(new Nn(.42,.5,z,10),Bi(_t.pillar),G,z/2,D)),a.children[a.children.length-1].userData.pillar=!0,a.add(zi(new fn(1.25,.32,1.25),Bi(_t.trim),G,z+.16,D)),a.add(zi(new fn(1.3,.3,1.3),Bi(_t.trim),G,.15,D,!0,!1))}if(t.wall){let C=s(t.wall);C.wrapS=rs;let N=new tn({color:"#d2aa78",map:C,gradientMap:Wn(),side:Rt}),G=new tn({color:"#fbe9c8",gradientMap:Wn(),side:Rt}),D=l+.15,z=.34,F=t.wall.width/t.wall.height,Y=(ee,ae,xe)=>{let ke=ae-ee,H=Math.ceil(ke*20),Z=Math.max(1,Math.round(D*ke/(xe*F)));for(let W of[D+z/2,D-z/2]){let _e=new Nn(W,W,xe,H,1,!0,ee,ke),le=_e.attributes.uv;for(let Ce=0;Ce<le.count;Ce++)le.setX(Ce,le.getX(Ce)*Z);let fe=new Pe(_e,N);fe.position.y=xe/2,fe.receiveShadow=!0,a.add(fe)}let oe=new Pe(new en(D-z/2,D+z/2,H,1,Math.PI/2-ae,ke),G);oe.rotation.x=Math.PI/2,oe.position.y=xe,a.add(oe);for(let W of[ee,ae]){let _e=new Pe(new Dn(z,xe),G);_e.position.set(D*Math.sin(W),xe/2,D*Math.cos(W)),_e.rotation.y=W+Math.PI/2,a.add(_e)}};Y(-Math.PI/2,Math.PI/2,.5),Y(Math.PI/2,Math.PI-.34,1),Y(Math.PI+.34,Math.PI*1.5,1)}let f=[],x=1;if(t.brazier)for(let[C,N]of[[-Math.PI/2,h],[Math.PI/2,h],[-.3*Math.PI,h],[.3*Math.PI,h]]){let G=N*Math.sin(C),D=N*Math.cos(C),z=da(t.brazier,1);z.position.set(G,0,D),a.add(z);let F=Np(1.15,.28,{sparks:14,ph:f.length*2.7});F.position.set(G,.9,D),a.add(F);let Y=fs("#ff9a3c",1.8,.3);Y.position.set(G,1.3,D),a.add(Y),f.push({f:F,h:Y,ph:f.length*1.9})}let p=new tn({color:"#fff4e6",gradientMap:Wn(),emissive:"#ffe3cf",emissiveIntensity:.45}),g=[];for(let[C,N,G,D]of[[-14,-3,-12,3],[-9,-4.5,-15,2.2],[13,-2.5,-14,3.4],[17,-5,-6,2.4],[-18,-5,-4,2.6],[4,-6,-20,3]]){let z=Up(D*.75,g.length+3,p);z.position.set(C,N,G),z.rotation.y=(g.length%3-1)*.4,i.add(z),g.push({cl:z,x:C,ph:g.length*1.3})}let M=fs("#fff0c0",26,.9);M.position.set(9,6,-30),i.add(M);let b=new lt;b.position.set(0,0,-(n-.3)),a.add(b);let v,E;t.gate?(b.add(da(t.gate,5.2)),v=ph(1.75,4.05),v.position.set(0,.5+2.02,.45),E=fs(_t.portal,5,0),E.position.set(0,2.4,.8)):(b.add(zi(new fn(.7,4.4,.7),Bi(_t.pillar),-1.7,2.2,0),zi(new fn(.7,4.4,.7),Bi(_t.pillar),1.7,2.2,0),zi(new fn(4.6,.8,.9),Bi(_t.trim),0,4.7,0)),v=ph(2.7,4.2),v.position.set(0,2.15,0),E=fs(_t.portal,5,0),E.position.set(0,2.3,.4)),b.add(v,E);let T=i.children.find(C=>C.isHemisphereLight),R=i.background,L=t.skyDusk?s(t.skyDusk):wr(4,256,(C,N,G)=>{let D=C.createLinearGradient(0,0,0,G);D.addColorStop(0,_t.dusk[0]),D.addColorStop(.55,_t.dusk[1]),D.addColorStop(1,_t.dusk[2]),C.fillStyle=D,C.fillRect(0,0,N,G)}),y=[];a.traverse(C=>{C.userData.pillar&&y.push(C)});for(let C of y){let N=new P;C.getWorldPosition(N),C.userData.at=N,C.userData.fade=1,C.userData.mats=[],C.traverse(G=>{G.isMesh&&(G.material=G.material.clone(),G.material.userData.op0=G.material.opacity,C.userData.mats.push(G.material))})}let _=.75,I=4.9,V=(C,N,G,D,z)=>{let F=C.position,Y=N.userData.at,ee=G-F.x,ae=D-F.y,xe=z-F.z,ke=Math.hypot(ee,ae,xe),H=ee/ke,Z=ae/ke,oe=xe/ke,W=F.x-Y.x,_e=F.z-Y.z,le=H*H+oe*oe,fe=2*(W*H+_e*oe),Ce=W*W+_e*_e-_*_,Oe=fe*fe-4*le*Ce;if(Oe<0||le<1e-9)return!1;let st=(-fe-Math.sqrt(Oe))/(2*le);if(st<=0||st>=ke)return!1;let U=F.y+Z*st;return U>=0&&U<=I};return{sun:r,tower:a,pillars:y,fadePillars(C,N,G){let D=1-Math.exp(-G*10);for(let z of y){let F=N.some(([ee,ae,xe])=>V(C,z,ee,ae,xe))?.28:1,Y=z.userData.fade+=(F-z.userData.fade)*D;for(let ee of z.userData.mats){let ae=Y<.99;ee.transparent=ae||ee.userData.op0<1||ee.alphaTest>0,ee.opacity=ee.userData.op0*Y,ee.depthWrite=!ae}}},setZone(C){x=C===2?1.25:1;for(let[N,G]of m)N&&(N.visible=C!==2),G&&(G.visible=C===2);p.color.set(C===2?"#c9b3e0":"#fff4e6"),p.emissive.set(C===2?"#8a6fae":"#ffe3cf"),i.background=C===2?L:R,T.color.set(C===2?"#c9b6ff":_t.amb),r.color.set(C===2?"#ffc79a":_t.sun),r.intensity=C===2?2.2:2.6},setGate(C,N=0){var D;let G=Math.min(.1,Math.max(0,N-((D=this._gt)!=null?D:N)));this._gt=N,v.userData.setOpen(C,G),E.material.opacity=C?.55:0},gatePos:new P(0,0,-(n-.3)),tick(C){for(let N of g)N.cl.position.x=N.x+Math.sin(C*.05+N.ph)*1.2;for(let{f:N,h:G,ph:D}of f){let z=1+Math.sin(C*11+D)*.08+Math.sin(C*17.3+D*2)*.05;N.userData.k.value=x,N.scale.setScalar(x**.5),G.material.opacity=(.24+Math.sin(C*9+D)*.05)*x}}}}function yh(i,e,t=-Math.PI/2){let n=new lt,s=new lt,r=kp(i.scene),a=new Ft().setFromObject(r),o=a.getSize(new P),l=e/o.y;r.scale.multiplyScalar(l),r.position.set(-(a.min.x+o.x/2)*l,-a.min.y*l,-(a.min.z+o.z/2)*l);let c=new lt;c.rotation.y=t,c.add(r),s.add(c),n.add(s);let u=[];r.traverse(d=>{if(d.isMesh){let m=new tn({map:d.material.map,gradientMap:Wn(),transparent:!0,side:d.material.side,emissive:"#ffffff",emissiveMap:d.material.map,emissiveIntensity:.3});d.material=m,d.frustumCulled=!1,u.push(m)}});let h=new Pe(new Pi(.42,20),new Ct({color:"#3a2a20",transparent:!0,opacity:.25,depthWrite:!1}));return h.rotation.x=-Math.PI/2,h.position.y=.02,n.add(h),n.userData={body:s,mats:u,H:e,anim:rb(r,i.animations||[])},n}function rb(i,e){let t=new Oo(i),n={};for(let l of e)n[l.name]=t.clipAction(l);let s=null,r=null,a=!1,o=(l,c)=>{let u=n[l];return u?(s===u&&!c||(u.reset(),u.setLoop(c?Mu:bu,1/0),u.clampWhenFinished=!!c,u.enabled=!0,u.setEffectiveWeight(1),u.play(),s&&s!==u&&s.crossFadeTo(u,c?.06:.15,!1),s=u),!0):!1};return t.addEventListener("finished",l=>{l.action===r&&(r=null)}),{has:l=>!!n[l],current:()=>s?s.getClip().name:null,once(l){o(l,!0)&&(r=n[l])},hold(l,c){let u=n[l];return u?(s!==u&&o(l,!0),r=null,u.paused=!0,u.time=Math.min(.999,Math.max(0,c))*u.getClip().duration,a=!0,!0):!1},update(l,c,u=1){if(Number.isFinite(l)||(l=0),Number.isFinite(t.time)||t.setTime(0),a){a=!1,t.update(l);return}s&&s.paused&&(s.paused=!1),r||(o(c,!1),n[c]&&(n[c].timeScale=u)),t.update(l)}}}function zp(i,e,t,n=!1){if(i.userData.weapon&&(i.userData.weapon.removeFromParent(),i.userData.weapon=null),!e)return!1;let s=null;if(i.traverse(l=>{l.isBone&&/forearm\.?R$/i.test(l.name)&&(s=l)}),!s)return!1;let r=e.scene.clone(!0);r.traverse(l=>{if(!l.isMesh)return;let c=l.material,u=c.emissive&&c.emissive.getHex()!==0;l.material=new tn({color:c.color,gradientMap:Wn(),emissive:u?c.emissive:"#000000",emissiveIntensity:u?1.1:0}),l.castShadow=!0,l.frustumCulled=!1});let a=new Ft().setFromObject(r);r.scale.setScalar(t/(a.max.y-a.min.y)),n&&(r.rotation.x=Math.PI),i.updateMatrixWorld(!0);let o=new lt;return o.add(r),o.scale.setScalar(1/s.getWorldScale(new P).x),o.position.set(0,s.position.length()*.92,0),s.add(o),i.userData.weapon=o,!0}function Hp(i){let e=yh(i,1.75),t=new Pe(new Co(.16,.38,3),new Ct({color:"#f2b33d",transparent:!0,opacity:.85,depthWrite:!1}));t.userData.craft="facing arrow",t.rotation.x=Math.PI/2,t.position.set(0,.04,.85);let n=new lt;return n.add(t),e.add(n),e.userData.arrow=n,e}function Tr(i,e,t){let n=new lt,s=new Ct({color:_t.warn,transparent:!0,opacity:.25,depthWrite:!1}),r=new Ct({color:_t.warn,transparent:!0,opacity:.55,depthWrite:!1}),a;if(i==="circle")n.add(new Pe(new Pi(e,40),s)),n.add(new Pe(new en(e*.93,e,48),r)),a=new Pe(new Pi(e,40),r),n.add(a);else if(i==="ring")n.add(new Pe(new en(t,e,48),s)),n.add(new Pe(new en(e*.95,e,48),r)),a=new Pe(new en(t,e,48),r),n.add(a);else{let l=new Pe(new Dn(e,t),s);l.position.y=t/2,n.add(l),a=new Pe(new Dn(e,t),r),a.position.y=t/2,n.add(a)}n.rotation.x=-Math.PI/2,n.position.y=.03;let o=new lt;return o.add(n),o.userData={fill:a,kind:i,len:t},o}function vh(i,e){if(!i)return;let t=i.userData.fill,n=Math.max(.001,e);i.userData.kind==="lane"?(t.scale.set(1,n,1),t.position.y=i.userData.len*n/2):t.scale.set(n,n,1)}function fa(i){i&&(i.removeFromParent(),i.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}))}var ab=wr(128,128,i=>{let e=[[[18,20],[46,52],[38,70],[66,92],[60,110]],[[46,52],[80,44],[104,26]],[[66,92],[96,96]]];for(let[t,n]of[[17,"#3a0c00"],[10,"#ff5a0a"],[4,"#ffe08a"]]){i.strokeStyle=n,i.lineWidth=t,i.lineJoin="round",i.lineCap="round";for(let s of e)i.beginPath(),s.forEach(([r,a],o)=>o?i.lineTo(r,a):i.moveTo(r,a)),i.stroke()}}),Gp=i=>!!(i&&i.animations&&i.animations.length);function Wp(i,e,t){if(Gp(i)){let s=yh(i,e);for(let r of s.userData.mats)r.emissiveIntensity=.1;return{root:s,anim:s.userData.anim,mats:s.userData.mats}}let n=Fp(i,e);return lb(n,t),{root:n,anim:null}}var nn=i=>i*i*(3-2*i),Mh=i=>Math.max(0,Math.min(1,i)),ob={light1:[[-40,-80],[-80,60]],light2:[[-80,60],[-40,-80]],light3:[[-165,-10],[-45,0]],sunder:[[-175,-10],[-35,5]],tether:[[-20,0],[-95,0]],counter:[[-160,-45],[-50,45]]},Vp=Math.PI/180;function Xp(i,e){let t=Hp(i),n=t.userData;e&&zp(t,e,1.05);let s=0,r=0,a=null,o=null,l=null,c=null,u=null,h=0;t.traverse(M=>{M.isBone&&/upperarm\.?R$/i.test(M.name)&&!l&&(l=M)});let d=l&&l.quaternion.clone(),m=l&&l.quaternion.clone(),f=l&&l.position.clone().set(1,0,0),x=l&&l.position.clone().set(0,0,1),p=null,g=null;return{obj:t,update(M,b,v){let E=M.hero,T=n.body;if(c===null||!(E.hurtT>0)||!(b>0))(c===null||b>0)&&(c=E.x,u=E.z);else{let y=1-Math.exp(-b*24);c+=(E.x-c)*y,u+=(E.z-u)*y}if(t.position.set(c,0,u),o===null||!(b>0))o=E.face;else{let y=Math.atan2(Math.sin(E.face-o),Math.cos(E.face-o));o+=y*(1-Math.exp(-b*22))}t.rotation.y=o,T.position.y=0,T.rotation.set(0,0,0),T.scale.set(1,1,1);let R=E.moving&&!E.move?"run":"idle";if(E.move){let y=v[E.move.id],_=E.move.t*60,I=y.startup+y.active,V=_<y.startup?.45*_/y.startup:_<I?.45+.15*(_-y.startup)/y.active:.6+.4*Mh((_-I)/y.recovery);n.anim.hold(n.anim.has(y.clip)?y.clip:"attack",V);let C=ob[E.move.id];if(C){let[N,G]=C,D=(z,F,Y)=>[z[0]+(F[0]-z[0])*Y,z[1]+(F[1]-z[1])*Y];p=V<.3?D([0,0],N,nn(V/.3)):V<.45?D(N,G,nn((V-.3)/.15)):V<.6?G:D(G,[0,0],nn((V-.6)/.4))}if(E.move.id==="light2"&&(T.rotation.y=.5*Math.sin(Math.PI*V)),E.move.id==="breaker"){let N=_<y.startup?Math.sin(Math.PI*_/y.startup):0;T.position.y=N*.7,T.rotation.x=.35*N}if(E.move.id==="counter"){let N=_<y.startup?Math.sin(Math.PI*_/y.startup):0;T.position.y=N*.9,T.rotation.x=-.35*N}if(E.move.id==="giantfall"){let N=_<y.startup?Math.sin(Math.PI*.5*_/y.startup):Math.max(0,1-(_-y.startup)/6);T.position.y=N*1.6,T.rotation.x=-.6*N}E.move.id!==a&&(s=0)}else if(E.dodge){let y=Mh(E.dodge.t*60/v.dodge.frames);n.anim.has("roll")?(n.anim.hold("roll",y),T.rotation.x=Math.sin(Math.PI*y)*.5,T.position.y=Math.sin(Math.PI*y)*.15):(s=y*Math.PI*2,T.rotation.y=-s,T.scale.set(1.08,.82,1.08),T.position.y=Math.sin(Math.PI*y)*.12),R="run"}a=E.move?E.move.id:null,E.pull&&(T.rotation.x=.55),r=E.hp<=0?Math.min(1,r+b*2.5):0,r>0?(T.rotation.x=-Math.PI/2*nn(r),T.position.y=.25*r):h>0&&(h=Math.max(0,h-b*3.2),T.rotation.x-=.5*h,T.position.y+=.28*Math.sin(Math.PI*(1-h)));let L=E.hurtT>0&&Math.floor(E.hurtT*20)%2===0;for(let y of n.mats)y.opacity=L?.45:1;n.arrow.visible=M.flow.state==="fight",E.move?n.anim.update(b,R):n.anim.update(b,R,R==="run"?1.2:1),l&&!g&&!E.move&&(g=l.quaternion.clone()),l&&g&&p&&(d.setFromAxisAngle(x,p[0]*Vp),m.setFromAxisAngle(f,p[1]*Vp),l.quaternion.copy(g).multiply(d).multiply(m)),p=null},hurt(){n.anim.once("hurt"),h=1},win(){n.anim.once("win")}}}var lb=(i,e)=>{if(!e)return;let t=new Ae(e);i.traverse(n=>{n.isMesh&&(n.material.color.multiply(t),n.material.emissive&&n.material.emissive.multiply(t))})};function bh(i,e,t=5.4,n=null,s="hollen"){let r=new lt,a=new lt,o=new lt;r.add(a,_h(t*.3)),a.add(o);let l=Wp(i,t,n),c=l.root,u=l.anim;o.add(c);let h=H=>u?null:xh(c,H),d=h("upper"),m=h("armL"),f=h("armR"),x=h("head"),p=h("legL"),g=h("legR");r.updateMatrixWorld(!0);for(let H of[m,f,x])H&&d&&d.attach(H);let M=new Map;for(let H of[d,m,f,x,p,g])H&&M.set(H,H.rotation.clone());let b=[];c.traverse(H=>{H.isMesh&&H.material.emissive&&b.push({m:H.material,e:H.material.emissive.clone(),ei:H.material.emissiveIntensity})}),r.userData.rigged=!!u;let v=t*.32,E=[[-.45,.62],[.38,.72],[.05,.47],[-.18,.82],[.55,.5],[-.6,.42]].map(([H,Z],oe)=>{let W=new Ii(new li({map:ab,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,rotation:oe*1.1}));return W.scale.setScalar(t*.26),W.position.set(H*v,Z*t,v*.95),W.renderOrder=6,a.add(W),W}),T=new Ct({color:"#1fb5ea",transparent:!0,opacity:0,depthWrite:!1}),R=[.3,.58].map(H=>{let Z=new Pe(new ur(v*1.08,t*.022,8,40),T);return Z.rotation.x=Math.PI/2,Z.position.set(0,H*t,0),Z.userData.y=H*t,a.add(Z),Z}),L=[0,1,2,3].map(()=>{let H=fs("#ffe48a",.45,0);return o.add(H),H});u||(r.userData.placeholder=`${s}: stand-in Stone Guardian parts (art/boss-guardian.glb) until art/giant-${s}.glb loads`);for(let H of[...E,...L,...R])H.userData.craft="giant status light";let y=0,_=null,I=null,V=0,C=0,N=0,G=0,D=0,z=9,F="",Y=0,ee=0,ae=0,xe=new P,ke=(H,Z=0,oe=0,W=0)=>{if(!H)return;let _e=M.get(H);H.rotation.set(_e.x+Z,_e.y+oe,_e.z+W)};return{obj:r,get tg(){return _},get heals(){return y},hit(H,Z){N=.06,G=H.move==="counter"?.34:Math.min(.22,.05+(Number.isFinite(H.gain)?H.gain:0)*.006+(H.move==="breaker"?.08:0)),D=Number.isFinite(Z)?Z:0},strike(){z=0},update(H,Z,oe){let W=H.giant&&H.giant.id===s?H.giant:null;if(r.visible=!!W,!W)return _&&(fa(_),_=null,I=null),{struckT:z};let _e=H.data.giants[W.id];W.state!==F?(F=W.state,Y=0):Y+=Z,r.position.set(W.x,0,W.z),o.rotation.y=W.face,z+=Z,N-=Z,G=Math.max(0,G-Z*1.6),ee+=Z;let le=W.state==="approach"||W.state==="active";V+=Z*(W.state==="active"?9:le?3.2:0);let fe=le?Math.sin(V)*(W.state==="active"?.55:.3):0;ke(p,fe),ke(g,-fe);let Ce=0,Oe=0,st=0,U=[0,0,0],Ke=[0,0,0],Ve=0,Fe=0,be=W.atk,rt=W.tg?W.tg.k:0;if(W.state==="wind"&&be==="slam"){let se=nn(rt);U=[-2.7*se,0,.2*se],Ke=[-2.7*se,0,-.2*se],Ce=-.3*se}else if(W.state==="wind"&&be==="sweep"){let se=nn(rt);Oe=1.1*se,Ke=[-1.2*se,0,-1.2*se],U=[0,0,.5*se]}else if(W.state==="wind"&&be==="charge"){let se=nn(rt);Ce=.45*se,Ve=.25*se,U=[.8*se,0,0],Ke=[.8*se,0,0]}else if(W.state==="active")Ce=.6,U=[1,0,0],Ke=[1,0,0];else if(W.state==="open"){let se=_e.attacks[be]||{},ne=Mh(1-W.t/Math.max(.01,se.open||1));if(be==="slam"){let de=Math.min(1,Y/.08);Ce=.55*de*(1-nn(ne)),U=[(-2.7+3.4*de)*(1-nn(ne)),0,0],Ke=U.slice(),Ve=.35*de*(1-nn(ne))}else be==="sweep"?(Oe=(1.1-2.5*Math.min(1,Y/.1))*(1-nn(ne)),Ke=[-1.2*(1-nn(ne)),0,-1.2*(1-nn(ne))]):Ce=.35*(1-nn(ne))}else if(W.state==="roar"){let se=Math.sin(Math.min(1,Y/.3)*Math.PI/2);Ce=-.35*se,U=[-.6*se,0,1.3*se],Ke=[-.6*se,0,-1.3*se],Fe=Math.sin(oe*40)*.06*se}let De=W.balMax?W.balance/W.balMax:0,A=De*De*.09;if(st+=Math.sin(oe*3.1)*A,Ce+=Math.sin(oe*2.3+1)*A*.6,Ce-=G*Math.cos(D-W.face),st+=G*Math.sin(D-W.face)*.6,ke(d,Ce,Oe,st),ke(m,...U),ke(f,...Ke),ke(x,Fe),u){let se=_e.attacks[be]||{},ne=be==="sweep";W.state==="wind"?u.hold(ne?"windup2":"windup",be==="charge"?rt*.6:rt):W.state==="open"&&Y<(se.open||1)*.6?u.hold(ne?"strike2":"strike",Math.min(1,Y/.25)):W.state==="roar"&&u.hold("windup2",Math.min(1,Y/.4)),u.update(Z,W.state==="toppled"||W.state==="fallen"||W.state==="getup"?"dizzy":le?"run":"idle",W.state==="active"?2.2:1),c.rotation.z=st,c.rotation.x=Ce*.5}o.position.y=-Ve,W.state==="toppled"?C=Math.min(1,C+Z/.45):W.state==="getup"?C=Math.max(0,1-Y/(H.data.rules.topple.getup||.9)):W.state==="fallen"?(C=Math.min(1,C+Z/1.1),ae=Math.min(1,ae+Z/3)):C=Math.max(0,C-Z*3);let S=W.state==="fallen"?1.45:1.2,X=W.state==="toppled"||W.state==="fallen"?C*C:nn(C),Q=W.state==="toppled"&&C>=1?Math.max(0,Math.sin(Math.min(1,(Y-.45)/.35)*Math.PI))*.08:0,ie=W.toppleDir;xe.set(Math.cos(ie),0,-Math.sin(ie)),a.quaternion.setFromAxisAngle(xe,X*S-Q),a.position.y=-1.1*X,X>0&&(ke(p,-.9*X),ke(g,-.7*X));let J=W.status.cracked.n,Se=W.status.bound.n;for(let se of b)N>0?(se.m.emissive.copy(se.e).lerp(new Ae("#fff4dc"),.6),se.m.emissiveIntensity=se.ei+.35):J>0?(se.m.emissive.copy(se.e).lerp(new Ae("#ff5a10"),Math.min(.8,.4*J)*(.75+.25*Math.sin(oe*6))),se.m.emissiveIntensity=se.ei+.25*J):ae>0?(se.m.emissive.copy(se.e).lerp(new Ae("#ffe8a8"),.4*ae),se.m.emissiveIntensity=se.ei):(se.m.emissive.copy(se.e),se.m.emissiveIntensity=se.ei);E.forEach((se,ne)=>{se.material.opacity=ne<J*2?.85+.15*Math.sin(oe*7+ne):0}),T.opacity=Se?.8+.15*Math.sin(oe*8):0,R.forEach((se,ne)=>{se.position.y=se.userData.y+t*.02*Math.sin(oe*4+ne*2),se.rotation.z=oe*(ne?-.8:.8)});let ue=W.state==="toppled";return L.forEach((se,ne)=>{let de=oe*3+ne*Math.PI/2;se.position.set(Math.sin(de)*.9,t*.92,Math.cos(de)*.9),se.material.opacity=ue?.9:0}),((W.tg?W.tg.kind:null)!==I||_&&!W.tg)&&(fa(_),_=null,I=null),W.tg&&!_&&(_=W.tg.kind==="circle"?Tr("circle",W.tg.r):W.tg.kind==="ring"?Tr("ring",W.tg.r,W.tg.inner):Tr("lane",W.tg.w,W.tg.len),_.userData.craft="telegraph",I=W.tg.kind,e.add(_)),_&&(_.position.set(W.tg.x,0,W.tg.z),I==="lane"&&(_.rotation.y=W.tg.ang+Math.PI),vh(_,W.tg.k)),[r.position.x,r.position.z,o.rotation.y,o.position.y,c.rotation.x,c.rotation.z,a.quaternion.x,a.quaternion.y,a.quaternion.z,a.quaternion.w,a.position.y].every(Number.isFinite)||(y++,G=0,D=0,C=0,r.position.set(W.x||0,0,W.z||0),o.rotation.y=W.face||0,o.position.y=0,c.rotation.set(0,0,0),a.quaternion.identity(),a.position.y=0),{struckT:z}}}}function qp(i,e,t={}){let n=new Map,s=new Map,r=new cr(.26,0),a=new tn({color:"#8d8476"});function o(c,u){let h=new lt,d=new lt;h.add(d,_h(u.radius*1.1));let m=t[c.type]||i,f=Wp(m,u.height,Gp(m)?null:u.tint),x=f.root;d.add(x);let p=y=>f.anim?null:xh(x,y),g=p("upper"),M=p("armL"),b=p("armR"),v=p("legL"),E=p("legR");h.updateMatrixWorld(!0);for(let y of[M,b,p("head")])y&&g&&g.attach(y);let T=new Map;for(let y of[g,M,b,v,E])y&&T.set(y,y.rotation.clone());let R=[];x.traverse(y=>{y.isMesh&&y.material.emissive&&R.push({m:y.material,e:y.material.emissive.clone()})});let L=fs("#ffe48a",.35,0);return L.position.y=u.height*1.05,d.add(L),f.anim||(h.userData.placeholder=`${c.type}: stand-in tinted guardian parts until art/foe-${c.type}.glb loads`),L.userData.craft="stun light",e.add(h),{obj:h,yaw:d,up:g,aL:M,aR:b,lL:v,lR:E,rest:T,mats:R,star:L,anim:f.anim,walk:Math.random()*6,tg:null,tgKind:null,deadT:0}}let l=(c,u,h=0,d=0,m=0)=>{if(!u)return;let f=c.rest.get(u);u.rotation.set(f.x+h,f.y+d,f.z+m)};return{update(c,u,h){let d=new Set;for(let f of c.foes){let x=c.data.foes[f.type],p=n.get(f.id);p||(p=o(f,x),n.set(f.id,p)),d.add(f.id),p.obj.position.set(f.x,0,f.z),p.yaw.rotation.y=f.face;let g=f.state==="move";p.walk+=u*(g?9:0);let M=g?Math.sin(p.walk)*.5:0;l(p,p.lL,M),l(p,p.lR,-M);let b=0,v=0,E=1,T=0;if(f.state==="spawn")E=Math.min(1,1-f.t/.7+.2),T=-.6*(f.t/.7);else if(f.state==="wind"){let _=f.tg?f.tg.k:0;v=-2.4*_,b=f.type==="slinger"?-.3*_:.25*_}else f.state==="act"?(b=.6,v=.8):f.state==="stagger"?b=-.35*Math.max(0,f.t/x.stagger):f.state==="dead"&&(p.deadT+=u,E=Math.max(.01,1-p.deadT/.9),T=-.5*p.deadT,b=.6*p.deadT);l(p,p.up,b),l(p,p.aL,v),l(p,p.aR,f.type==="slinger"?0:v),p.anim&&(f.state==="wind"?p.anim.hold("windup",f.tg?f.tg.k:0):(f.state==="act"||f.state==="rest"&&f.t>.6)&&p.anim.hold("strike",f.state==="act"?.6:1),p.anim.update(u,f.state==="stun"||f.state==="stagger"?"dizzy":g?"run":"idle",g?1.4:1));let R=0;if(f.state==="stagger"&&(R=-.45*Math.max(0,f.t/x.stagger)),f.state==="act"){let _=Math.min(1,1-Math.max(0,f.lungeLeft||0)/.16);T+=Math.sin(Math.PI*_)*.45,R=.35}p.yaw.rotation.x=R,p.sx===void 0&&(p.sx=f.x,p.sz=f.z);let L=Math.hypot(f.x-p.sx,f.z-p.sz);if(L>.25&&u>0&&f.state!=="act"){let _=1-Math.exp(-u*24);p.sx+=(f.x-p.sx)*_,p.sz+=(f.z-p.sz)*_}else(u>0||L<=.25)&&(p.sx=f.x,p.sz=f.z);p.obj.position.x=p.sx,p.obj.position.z=p.sz,p.obj.scale.setScalar(E),p.obj.position.y=T;for(let _ of p.mats)f.flash>0?_.m.emissive.set("#fff4dc"):f.status.cracked.n?_.m.emissive.copy(_.e).lerp(new Ae("#ff6a1a"),.35):_.m.emissive.copy(_.e);p.star.material.opacity=f.state==="stun"?.9:0,p.star.position.x=Math.sin(h*6)*.3,(f.tg?f.tg.kind:null)!==p.tgKind&&(fa(p.tg),p.tg=null,p.tgKind=null),f.tg&&!p.tg&&(p.tg=f.tg.kind==="circle"?Tr("circle",f.tg.r):Tr("lane",f.tg.w,f.tg.len),p.tg.userData.craft="telegraph",p.tgKind=f.tg.kind,p.tg.traverse(_=>{_.material&&(_.material.opacity*=.8)}),e.add(p.tg)),p.tg&&(p.tg.position.set(f.tg.x,0,f.tg.z),p.tgKind==="lane"&&(p.tg.rotation.y=f.tg.ang+Math.PI),vh(p.tg,f.tg.k))}for(let[f,x]of n)d.has(f)||(fa(x.tg),x.obj.removeFromParent(),x.obj.traverse(p=>{p.isMesh&&p.material&&p.material.dispose()}),n.delete(f));let m=new Set;for(let f of c.shots){let x=s.get(f);x||(x=new Pe(r,a),x.castShadow=!0,x.userData.craft="thrown stone",e.add(x),s.set(f,x)),m.add(f),x.position.set(f.x,1,f.z),x.rotation.x+=u*12}for(let[f,x]of s)m.has(f)||(x.removeFromParent(),s.delete(f))},count:()=>n.size}}var Ht={arc:new en(.9,1.35,24,1,-.9,1.8),arcBig:new en(1.2,2.1,32,1,-1.3,2.6),ring:new en(.86,1,48),spark:new fn(.07,.07,.32),beam:new Nn(.05,.05,1,6,1,!0),beamCore:new Nn(.11,.11,1,8,1,!0),chop:new en(.75,1.55,28,1,-1,2),crack:new wt().setFromPoints([new P(-.14,0,0),new P(.14,0,0),new P(.05,.55,0),new P(.14,0,0),new P(.09,.5,0),new P(.05,.55,0),new P(.05,.55,0),new P(.09,.5,0),new P(-.02,1,0)]),bindRing:new ur(1,.085,6,40)};Ht.crack.rotateX(-Math.PI/2);Ht.beam.translate(0,.5,0);Ht.beam.rotateX(Math.PI/2);Ht.beamCore.translate(0,.5,0);Ht.beamCore.rotateX(Math.PI/2);var $p=i=>i-Math.PI/2,Yp={light1:["#fff4d6",0],light2:["#fff4d6",.5],light3:["#ffe2a0",-.4],sunder:["#ff8a3c",.25],breaker:["#ffd36b",0],giantfall:["#ffffff",0],counter:["#12aee0",-.55]};function Kp(i){let e=[],t=(r,a,o)=>(r.userData.craft="hit effect",i.add(r),e.push({obj:r,life:a,t:0,step:o}),r),n=(r,a=1,o=!0)=>new Ct({color:r,transparent:!0,opacity:a,depthWrite:!1,side:Rt,blending:o?Vn:Pn}),s=(r,a,o=1)=>{let l=new Ii(new li({map:gh,color:r,transparent:!0,opacity:o,depthWrite:!1,blending:Vn}));return l.scale.setScalar(a),l};return{count:()=>e.length,slash(r,a){let[o,l]=Yp[a]||Yp.light1,c=a==="breaker"||a==="giantfall",u=a==="counter",h=new Pe(c||u?Ht.arcBig:Ht.arc,n(o,u?.95:.85,!u));if(h.position.set(r.x,c?.25:1,r.z),h.rotation.order="YXZ",h.rotation.y=$p(r.face),h.rotation.x=c?-Math.PI/2:-Math.PI/2+l,t(h,c||u?.24:.2,d=>{h.material.opacity=(u?.95:.85)*(1-d),h.scale.setScalar(1+d*.35)}),!c){let d=a==="light2"?1:-1;for(let m=1;m<=2;m++){let f=new Pe(h.geometry,n(o,(u?.6:.5)/m,!u));f.position.copy(h.position),f.rotation.order="YXZ",f.rotation.copy(h.rotation),f.rotation.z+=d*.32*m;let x=f.material.opacity;t(f,.22+.07*m,p=>{f.material.opacity=x*(1-p)*(1-p),f.scale.setScalar(1+p*.2)})}}},chop(r){let a=new Pe(Ht.chop,n("#f26a1b",.92,!1));a.position.set(r.x,1.1,r.z),a.rotation.order="YXZ",a.rotation.y=$p(r.face),a.rotation.x=-Math.PI/2+.75,t(a,.2,o=>{a.material.opacity=.95*(1-o),a.scale.setScalar(1+o*.25)})},cracks(r,a,o,l=7){for(let c=0;c<l;c++){let u=new Pe(Ht.crack,n(c%2?"#b2400c":"#e85a10",.95,!1)),h=1.3+Math.random()*1.1;u.position.set(r,.05,a),u.rotation.y=o+c*(Math.PI*2/l)+(Math.random()-.5)*.4,t(u,.6,d=>{u.scale.set(1-d*.5,1,h*Math.min(1,d*6)),u.material.opacity=.9*(1-d*d)})}this.flash(r,.5,a,"#ff9a4a",2.2,.2)},bind(r,a,o,l){for(let[c,u]of[[0,a],[.08,a+.45]]){let h=new Pe(Ht.bindRing,n("#13a9d6",0,!1));h.rotation.x=Math.PI/2,h.position.set(r,u,o),t(h,.45+c,(d,m,f)=>{let x=Math.max(0,(f-c)/.45);h.scale.setScalar(l*(1.9-.9*Math.min(1,x*2.5))),h.material.opacity=x<=0?0:.95*(1-Math.max(0,x-.5)*2)})}},sparks(r,a,o,l,c=10,u="#ffd9a0"){for(let h=0;h<c;h++){let d=new Pe(Ht.spark,n(u,1));d.position.set(r,a,o);let m=l+(Math.random()-.5)*2.2,f=Math.random()*4+1,x=Math.random()*6+3,p=new P(Math.sin(m)*x,f,Math.cos(m)*x);d.lookAt(d.position.clone().add(p)),t(d,.28+Math.random()*.15,(g,M)=>{p.y-=14*M,d.position.addScaledVector(p,M),d.material.opacity=1-g})}},shatter(r,a,o,l,c=14,u="#ff8a3c",h=2.2){for(let d=0;d<c;d++){let m=new Pe(Ht.spark,n(u,1,!1));m.scale.setScalar(h*(.7+Math.random()*.6));let f=Math.random()*Math.PI*2,x=Math.random()*5+2,p=Math.random()*5+4;m.position.set(r+Math.sin(f)*l,a+(Math.random()-.3)*l,o+Math.cos(f)*l);let g=new P(Math.sin(f)*p,x,Math.cos(f)*p),M=new P(Math.random()*12,Math.random()*12,0);t(m,.55+Math.random()*.25,(b,v)=>{g.y-=16*v,m.position.addScaledVector(g,v),m.rotation.x+=M.x*v,m.rotation.y+=M.y*v,m.material.opacity=b<.6?1:(1-b)/.4})}},shock(r,a,o,l="#ffe7b0",c=.45){let u=new Pe(Ht.ring,n(l,.8));u.rotation.x=-Math.PI/2,u.position.set(r,.06,a),t(u,c,h=>{u.scale.setScalar(o*(.25+.75*Math.sqrt(h))),u.material.opacity=.8*(1-h)})},dust(r,a,o=10,l=2,c="#d8c4a0"){for(let u=0;u<o;u++){let h=s(c,1.2,.5);h.material.blending=Pn;let d=Math.random()*Math.PI*2,m=Math.random()*l;h.position.set(r+Math.sin(d)*m,.4,a+Math.cos(d)*m);let f=new P(Math.sin(d)*1.6,.8+Math.random(),Math.cos(d)*1.6);t(h,.9+Math.random()*.5,(x,p)=>{h.position.addScaledVector(f,p),h.scale.setScalar(1.2+x*2.2),h.material.opacity=.5*(1-x)})}},beam(r,a,o="#7fe3ff"){let l=Math.hypot(a.x-r.x,a.z-r.z),c=Math.atan2(a.x-r.x,a.z-r.z);for(let[u,h,d,m]of[[Ht.beamCore,"#13a9d6",.85,!1],[Ht.beam,"#ffffff",1,!0]]){let f=new Pe(u,n(h,d,m));f.position.set(r.x,1.15,r.z),f.rotation.y=c,f.scale.set(1,1,.01),t(f,.36,x=>{f.scale.set(1+x*.6,1+x*.6,l*Math.min(1,x*5)),f.material.opacity=d*(1-x*x)})}},dash(r,a,o,l,c="#6fd0ff"){let u=Math.hypot(o-r,l-a),h=Math.atan2(o-r,l-a);if(u>.3)for(let[d,m,f,x,p]of[[Ht.beamCore,c,.8,!1,2.2],[Ht.beam,"#ffffff",.9,!0,1.5]]){let g=new Pe(d,n(m,f,x));g.position.set(r,.45,a),g.rotation.y=h,g.scale.set(p,p,u),t(g,.3,M=>{g.scale.set(p*(1-M),p*(1-M),u),g.material.opacity=f*(1-M)})}},flash(r,a,o,l,c=2.5,u=.18){let h=s(l,c,1);h.position.set(r,a,o),t(h,u,d=>{h.material.opacity=1-d,h.scale.setScalar(c*(1+d))})},motes(r,a,o=24,l="#ffe8a8"){for(let c=0;c<o;c++){let u=s(l,.35,.9),h=Math.random()*Math.PI*2,d=Math.random()*2;u.position.set(r+Math.sin(h)*d,.3+Math.random(),a+Math.cos(h)*d);let m=.8+Math.random()*1.4,f=Math.random()*6;t(u,2.5+Math.random()*1.5,(x,p,g)=>{u.position.y+=m*p,u.position.x+=Math.sin(g*2+f)*p*.3,u.material.opacity=.9*Math.sin(Math.PI*Math.min(1,x*1.2))})}},update(r){for(let a=e.length-1;a>=0;a--){let o=e[a];o.t+=r;let l=Math.min(1,o.t/o.life);o.step(l,r,o.t),l>=1&&(o.obj.removeFromParent(),o.obj.material.dispose(),e.splice(a,1))}}}}var Zp={light:["KeyJ","Mouse0"],sunder:["KeyK","Digit1"],tether:["KeyL","Digit2"],breaker:["Semicolon","Digit3","KeyI"],dodge:["Space","ShiftLeft","ShiftRight"]},Un={light:"J",sunder:"K",tether:"L",breaker:";",dodge:"SPACE"},pa={up:["KeyW","ArrowUp"],down:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"]},Sh={};for(let[i,e]of Object.entries(Zp))for(let t of e)Sh[t]=i;var cb=new Set([...Object.values(Zp).flat(),...Object.values(pa).flat()]),ps=new Set,pi={x:0,y:0},Er=[],wh=null,ma=!0,Th={presses:0},ub=i=>{let e=i.target;return!!e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)};window.addEventListener("keydown",i=>{if(ub(i))return;cb.has(i.code)&&i.preventDefault();let e=!ps.has(i.code);if(ps.add(i.code),wh){wh(i.code,i);return}e&&ma&&Sh[i.code]&&(Er.push(Sh[i.code]),Th.presses++)});window.addEventListener("keyup",i=>ps.delete(i.code));window.addEventListener("blur",()=>{ps.clear(),Er=[],pi.x=pi.y=0});window.addEventListener("contextmenu",i=>i.preventDefault());var Vt={stats:Th,touch:pi,onKey(i){wh=i},setEnabled(i){ma=i,i||(Er=[])},press(i){ma&&(Er.push(i),Th.presses++)},hold(i,e){e?ps.add(i):ps.delete(i)},frame(){let i=r=>r.some(a=>ps.has(a)),e=(i(pa.right)?1:0)-(i(pa.left)?1:0)+pi.x,t=(i(pa.down)?1:0)-(i(pa.up)?1:0)+pi.y,n=Math.hypot(e,t);n>1&&(e/=n,t/=n);let s=Er;return Er=[],{mx:ma?e:0,mz:ma?t:0,press:s}}};function Jp(i){i.addEventListener("pointerdown",e=>{e.pointerType==="mouse"&&e.button===0&&Vt.press("light")})}function jp(i){let e=document.createElement("div");e.className="tpad",e.innerHTML='<div class="tbase"><div class="tknob"></div></div>';let t=document.createElement("div");t.className="tbtns",t.innerHTML=[["light","Strike"],["sunder","Sunder"],["tether","Tether"],["breaker","Break"],["dodge","Roll"]].map(([f,x])=>`<button class="tb tb-${f}" data-a="${f}" aria-label="${j(x)}">${Oi[f]}<b>${j(x)}</b><em></em></button>`).join(""),i.append(e,t);let n=e.querySelector(".tbase"),s=e.querySelector(".tknob"),r=null,a=0,o=0,l=0,c=0,u=54,h=.12,d=()=>{n.style.left=`${a-l}px`,n.style.top=`${o-c}px`};e.addEventListener("pointerdown",f=>{if(r!==null)return;let x=e.getBoundingClientRect();l=x.left,c=x.top,r=f.pointerId,a=f.clientX,o=f.clientY,e.setPointerCapture(r),d(),n.classList.add("on")}),e.addEventListener("pointermove",f=>{if(f.pointerId!==r)return;let x=f.clientX-a,p=f.clientY-o,g=Math.hypot(x,p);g>u&&(a+=x*(1-u/g),o+=p*(1-u/g),x*=u/g,p*=u/g,d()),s.style.transform=`translate(${x}px, ${p}px)`;let M=Math.min(1,g/u);pi.x=M<h?0:x/u,pi.y=M<h?0:p/u});let m=f=>{f.pointerId===r&&(r=null,pi.x=pi.y=0,s.style.transform="",n.classList.remove("on"),n.style.left=n.style.top="")};e.addEventListener("pointerup",m),e.addEventListener("pointercancel",m);for(let f of t.querySelectorAll("button")){f.addEventListener("pointerdown",p=>{p.preventDefault(),f.classList.add("down"),Vt.press(f.dataset.a)});let x=()=>f.classList.remove("down");f.addEventListener("pointerup",x),f.addEventListener("pointercancel",x),f.addEventListener("pointerleave",x)}return t}var Be=null,Hi=null,Qo=null,Gt=null,Ah=0,Vi=i=>440*2**((i-69)/12);function rm(i,e){if(Be)return;Be=i,Hi=Be.createGain(),Hi.gain.value=.62,Hi.connect(e);let t=Math.floor(Be.sampleRate*2.2),n=Be.createBuffer(2,t,Be.sampleRate);for(let r=0;r<2;r++){let a=n.getChannelData(r);for(let o=0;o<t;o++)a[o]=(Math.random()*2-1)*(1-o/t)**2.6}let s=Be.createConvolver();s.buffer=n,Qo=Be.createGain(),Qo.gain.value=.32,Qo.connect(s),s.connect(Hi),hb()}function hb(){let i=new Set;for(let[n,s]of[[lm,"town"],[Ar,"climb"],[cm,"boss"]])for(let r=0;r<8;r++){let a=n.chords[r],o=n.bass[r];if(s==="town"){i.add(`${o}:0.3`),i.add(`${o+7}:0.3`);for(let l of[a[0],a[1],a[2],a[0]+12,a[1]+12])i.add(`${l+12}:0.55`)}else{for(let l of[a[0],a[2],a[0]+12])i.add(`${l+(s==="boss"?0:12)}:0.65`);i.add(`${o}:0.25`),i.add(`${o+12}:0.25`)}}for(let n of[65,69,72,77,81,60,64,67,72,76,79,84])i.add(`${n}:0.7`);for(let n of[69,65,62,57])i.add(`${n}:0.35`);let e=[...i].map(n=>n.split(":").map(Number)),t=()=>{for(let n=0;n<3&&e.length;n++){let[s,r]=e.shift();am(s,r)}e.length&&setTimeout(t,30)};setTimeout(t,30)}var Eh=new Map;function am(i,e=.5,t=1.6){let n=`${i}:${e}`;if(Eh.has(n))return Eh.get(n);let s=Be.sampleRate,r=Math.floor(s*t),a=Math.max(2,Math.round(s/Vi(i))),o=Be.createBuffer(1,r,s),l=o.getChannelData(0),c=0;for(let h=0;h<a;h++){let d=Math.random()*2-1;c=c+(d-c)*(.35+e*.6),l[h]=c}let u=.996-(i>76?.004:0);for(let h=a;h<r;h++)l[h]=u*.5*(l[h-a]+l[h-a-1<0?0:h-a-1]);return Eh.set(n,o),o}function ms(i,e,t=1){let n=Be.createGain();if(n.gain.value=e,i.connect(n),n.connect(Gt?Gt.gain:Hi),t){let s=Be.createGain();s.gain.value=t,n.connect(s),s.connect(Qo)}return n}function ga(i,e,t=.3,n=.5){let s=Be.createBufferSource();s.buffer=am(i,n),ms(s,t),s.start(e)}function Qp(i,e,t,n=.12){let s=Be.createOscillator(),r=Be.createOscillator(),a=Be.createGain(),o=Be.createOscillator(),l=Be.createGain();s.type="sine",s.frequency.value=Vi(i),r.type="triangle",r.frequency.value=Vi(i)*2,o.frequency.value=5.2,l.gain.value=Vi(i)*.006,o.connect(l),l.connect(s.frequency),l.connect(r.frequency);let c=Be.createGain();c.gain.value=.12,r.connect(c),c.connect(a),s.connect(a),a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(1,e+.07),a.gain.setValueAtTime(1,e+Math.max(.08,t-.12)),a.gain.exponentialRampToValueAtTime(1e-4,e+t+.18),ms(a,n,1.4);for(let u of[s,r,o])u.start(e),u.stop(e+t+.25)}function em(i,e,t,n=.035){let s=Be.createBiquadFilter();s.type="lowpass",s.frequency.value=900;let r=Be.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(1,e+Math.min(1.2,t*.4)),r.gain.setValueAtTime(1,e+t*.75),r.gain.exponentialRampToValueAtTime(1e-4,e+t+.8),s.connect(r),ms(r,n,1.2);for(let a of i)for(let o of[-6,6]){let l=Be.createOscillator();l.type="sawtooth",l.frequency.value=Vi(a),l.detune.value=o,l.connect(s),l.start(e),l.stop(e+t+1)}}function el(){if(el.b)return el.b;let i=Be.sampleRate*.5,e=Be.createBuffer(1,i,Be.sampleRate),t=e.getChannelData(0);for(let n=0;n<i;n++)t[n]=Math.random()*2-1;return el.b=e}function tm(i,e=.5){let t=Be.createOscillator(),n=Be.createGain();t.frequency.setValueAtTime(130,i),t.frequency.exponentialRampToValueAtTime(42,i+.22),n.gain.setValueAtTime(1,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.32),t.connect(n),ms(n,e,.1),t.start(i),t.stop(i+.35)}function om(i,e,t,n){let s=Be.createBufferSource(),r=Be.createBiquadFilter(),a=Be.createGain();s.buffer=el(),r.type="highpass",r.frequency.value=t,a.gain.setValueAtTime(1,i),a.gain.exponentialRampToValueAtTime(1e-4,i+n),s.connect(r),r.connect(a),ms(a,e,.4),s.start(i),s.stop(i+n+.02)}var db=(i,e=.16)=>{om(i,e,1400,.16);let t=Be.createOscillator(),n=Be.createGain();t.frequency.value=190,n.gain.setValueAtTime(.6,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.1),t.connect(n),ms(n,e*.6,.3),t.start(i),t.stop(i+.12)},fb=(i,e=.05)=>om(i,e,6500,.05);function pb(i,e,t=.1){let n=Be.createOscillator(),s=Be.createOscillator(),r=Be.createGain(),a=Be.createGain();n.frequency.value=Vi(i),s.frequency.value=Vi(i)*3.5,r.gain.value=Vi(i)*1.2,s.connect(r),r.connect(n.frequency),a.gain.setValueAtTime(1,e),a.gain.exponentialRampToValueAtTime(1e-4,e+1.6),n.connect(a),ms(a,t,1.5);for(let o of[n,s])o.start(e),o.stop(e+1.7)}var lm={bpm:88,chords:[[53,57,60],[57,60,64],[58,62,65],[60,64,67],[53,57,60],[50,53,57],[58,62,65],[60,64,67]],bass:[41,45,46,48,41,50,46,48],melody:[[[0,72,1],[1,69,1],[2,67,.5],[2.5,69,1.5]],[[0,64,2],[2,67,1],[3,69,1]],[[0,65,1],[1,67,1],[2,69,2]],[[0,67,3],[3,64,1]],[[0,72,1],[1,74,1],[2,72,.5],[2.5,69,1.5]],[[0,69,2],[2,65,1],[3,67,1]],[[0,65,1.5],[1.5,62,.5],[2,65,1],[3,67,1]],[[0,64,2],[2,60,2]]]},Ar={bpm:124,chords:[[62,65,69],[58,62,65],[60,64,67],[57,61,64],[62,65,69],[58,62,65],[60,64,67],[57,61,64]],bass:[38,34,36,33,38,34,36,33],melody:[[[0,74,1],[1,77,1],[2,76,.5],[2.5,74,1.5]],[[0,70,1],[1,74,1],[2,77,2]],[[0,76,1.5],[1.5,74,.5],[2,72,2]],[[0,73,2],[2,76,1],[3,69,1]],[[0,74,.5],[.5,77,.5],[1,81,1],[2,79,1],[3,77,1]],[[0,74,2],[2,77,2]],[[0,79,1],[1,76,1],[2,72,1],[3,76,1]],[[0,73,3],[3,76,1]]]},cm={...Ar,bpm:138,chords:Ar.chords.map(i=>i.map(e=>e+2)),bass:Ar.bass.map(i=>i+2),melody:Ar.melody.map(i=>i.map(([e,t,n])=>[e,t-10,n]))};function mb(i,e,t,n,s){let r=60/i.bpm,a=i.chords[t%8],o=i.bass[t%8];if(e==="town"){if(em(a,n,r*4),ga(o,n,.34,.3),ga(o+7,n+r*2,.22,.3),[a[0],a[1],a[2],a[0]+12,a[1]+12,a[2],a[1],a[0]].forEach((c,u)=>ga(c+12,n+u*r/2,.16+(u===0?.05:0),.55)),s%2===0)for(let[c,u,h]of i.melody[t%8])Qp(u,n+c*r,h*r*.95,.11);t%8===7&&pb(84,n+r*3.5,.05)}else{let l=e==="boss";em(a.map(c=>c-12),n,r*4,.03);for(let c=0;c<16;c++){let u=[a[0],a[2],a[0]+12,a[2]][c%4]+(l?0:12);ga(u,n+c*r/4,c%4===0?.15:.09,.65)}for(let c=0;c<8;c++)ga(o+(c%2?12:0),n+c*r/2,.3,.25);for(let c=0;c<4;c++)(c%2===0||l)&&tm(n+c*r,l?.55:.45),c%2&&db(n+c*r);if(l)for(let c=0;c<4;c++)tm(n+(c+.5)*r,.25);for(let c=0;c<8;c++)fb(n+c*r/2,c%2?.04:.025);if(s%2===1||l)for(let[c,u,h]of i.melody[t%8])Qp(u,n+c*r,h*r*.9,l?.1:.09)}}var tl={},nm={},im=1.1;function sm(i){tl[i]||nm[i]||(nm[i]=!0,fetch(`music-${i}.mp3`).then(e=>e.ok?e.arrayBuffer():Promise.reject(e.status)).then(e=>new Promise((t,n)=>Be.decodeAudioData(e,t,n))).then(e=>{let t=e.getChannelData(0),n=0,s=t.length-1;for(;n<8192&&Math.abs(t[n])<1e-4;)n++;for(;s>t.length-8192&&Math.abs(t[s])<1e-4;)s--;tl[i]={b:e,t0:n/e.sampleRate,len:(s-n)/e.sampleRate},Gt&&Gt.kind===i&&Gt.synth&&Rh(i,!0)}).catch(()=>{}))}function gb(i,e){let t=tl[i],n=.04,s=a=>{let o=Be.createBufferSource(),l=Be.createGain();return o.buffer=t.b,o.connect(l),l.connect(e.gain),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(im,a+n),l.gain.setValueAtTime(im,a+t.len-n),l.gain.exponentialRampToValueAtTime(1e-4,a+t.len),o.start(a,t.t0,t.len+.01),e.srcs.push(o),e.srcs.length>3&&e.srcs.shift(),a+t.len-n};e.next=s(Be.currentTime+.05),Ah=setInterval(()=>{if(Gt===e)for(;e.next<Be.currentTime+1.5;)e.next=s(e.next)},400)}function Rh(i,e=!1){if(!Be||Gt&&Gt.kind===i&&!e)return;if(Gt){let a=Gt;a.gain.gain.cancelScheduledValues(Be.currentTime),a.gain.gain.setTargetAtTime(0,Be.currentTime,.4),setTimeout(()=>{a.gain.disconnect();for(let o of a.srcs||[])try{o.stop()}catch{}},3e3)}if(Gt=null,clearInterval(Ah),!i)return;let t=Be.createGain();t.gain.value=0,t.connect(Hi),t.gain.setTargetAtTime(1,Be.currentTime,.6),sm(i);for(let a of["climb","boss"])a!==i&&setTimeout(()=>sm(a),4e3);if(tl[i]){let a=Gt={kind:i,gain:t,srcs:[],synth:!1};gb(i,a);return}let n={town:lm,climb:Ar,boss:cm}[i],s=Gt={kind:i,gain:t,next:Be.currentTime+.15,i:0,synth:!0},r=()=>{if(Gt!==s)return;let a=240/n.bpm;for(;s.next<Be.currentTime+.6;)mb(n,i,s.i,s.next,Math.floor(s.i/8)),s.next+=a,s.i++};r(),Ah=setInterval(r,200)}function um(i){Hi&&Be&&Hi.gain.setTargetAtTime(i?.22:.62,Be.currentTime,.25)}var hm=()=>Gt?Gt.kind+(Gt.synth?":code":":file"):"";var Le=null,kn=null,rl=!0,Ph=!1,vm="";function Mm(i){try{let e=navigator.audioSession;e&&e.type!==(i?"playback":"ambient")&&(e.type=i?"playback":"ambient")}catch{}}function Rr(){if(!Le){Mm(rl);let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;Le=new i,kn=Le.createGain(),kn.gain.value=.5,kn.connect(Le.destination)}return Le}var dm=()=>{kn&&kn.gain.setTargetAtTime(rl&&!Ph?.5:0,Le.currentTime,.05)},gs=()=>rl&&!Ph&&Rr()&&Le.state==="running";function tt(i,e,t,n="square",s=.2,r=0){if(!gs())return;let a=Le.currentTime+r,o=Le.createOscillator(),l=Le.createGain();o.type=n,o.frequency.setValueAtTime(i,a),o.frequency.exponentialRampToValueAtTime(Math.max(20,e),a+t),l.gain.setValueAtTime(s,a),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l),l.connect(kn),o.start(a),o.stop(a+t+.02)}function mn(i,e=.25,t=900){if(!gs())return;let n=Le.currentTime,s=Math.floor(Le.sampleRate*i),r=Le.createBuffer(1,s,Le.sampleRate),a=r.getChannelData(0);for(let u=0;u<s;u++)a[u]=(Math.random()*2-1)*(1-u/s);let o=Le.createBufferSource(),l=Le.createBiquadFilter(),c=Le.createGain();o.buffer=r,l.type="lowpass",l.frequency.value=t,c.gain.value=e,o.connect(l),l.connect(c),c.connect(kn),o.start(n)}var Lh={slash:["knifeSlice","knifeSlice2"],draw:["drawKnife1","drawKnife2","drawKnife3"],chop:["chop"],clang:["metalPot1","metalPot2","metalPot3"],click:["metalClick"],latch:["metalLatch"],cloth:["cloth1","cloth2","cloth3","cloth4"],step:["footstep00","footstep01","footstep02","footstep03","footstep04","footstep05"],coins:["handleCoins","handleCoins2"],soft:["impactSoft_medium_000","impactSoft_medium_001","impactSoft_medium_002","impactSoft_medium_003","impactSoft_medium_004"],wood:["impactWood_light_000","impactWood_light_001","impactWood_light_002","impactWood_light_003","impactWood_light_004"],metal:["impactMetal_medium_000","impactMetal_medium_001","impactMetal_medium_002","impactMetal_medium_003","impactMetal_medium_004"],punch:["impactPunch_medium_000","impactPunch_medium_001","impactPunch_medium_002","impactPunch_medium_003","impactPunch_medium_004"],punchHeavy:["impactPunch_heavy_000","impactPunch_heavy_001","impactPunch_heavy_002","impactPunch_heavy_003","impactPunch_heavy_004"],stone:["impactMining_000","impactMining_001","impactMining_002","impactMining_003","impactMining_004"],bell:["impactBell_heavy_000","impactBell_heavy_001","impactBell_heavy_002","impactBell_heavy_003","impactBell_heavy_004"],thud:["impactPlate_heavy_000","impactPlate_heavy_001","impactPlate_heavy_002","impactPlate_heavy_003","impactPlate_heavy_004"],stepStone:["footstep_concrete_000","footstep_concrete_001","footstep_concrete_002","footstep_concrete_003","footstep_concrete_004"],glass:["impactGlass_light_000","impactGlass_light_001","impactGlass_light_002","impactGlass_light_003","impactGlass_light_004"],open:["bookOpen"],close:["bookClose"],flip:["bookFlip1"],belt:["beltHandle1","clothBelt"],creak:["creak1"],door:["doorOpen_1"],uiClick:["click_002"],jLevel:["jingles_PIZZI04"],jWin:["jingles_PIZZI02"],jDown:["jingles_PIZZI01"],jTing:["jingles_PIZZI16"],chest_common:["jingles_PIZZI08"],chest_rare:["jingles_PIZZI10"],chest_epic:["jingles_PIZZI13"],chest_legend:["jingles_PIZZI15"]},il={},Ch={},fm=!1,bm=0,nl="";function xb(){if(fm||!Rr())return;fm=!0;let i=[...new Set(Object.values(Lh).flat())],e=()=>{let t=i.shift();t&&fetch(`sfx-${t}.mp3`).then(n=>n.ok?n.arrayBuffer():Promise.reject(n.status)).then(n=>new Promise((s,r)=>Le.decodeAudioData(n,s,r))).then(n=>{il[t]=n}).catch(()=>{bm++}).finally(()=>setTimeout(e,15))};for(let t=0;t<4;t++)e()}function Xe(i,e=.5,t=.06){if(!gs())return!1;let n=Lh[i].filter(a=>il[a]);if(!n.length)return!1;let s=Le.createBufferSource(),r=Le.createGain();return s.buffer=il[n[Math.floor(Math.random()*n.length)]],s.playbackRate.value=1+(Math.random()*2-1)*t,r.gain.value=e,s.connect(r),r.connect(kn),s.start(),Ch[i]=(Ch[i]||0)+1,!0}var mi=null,sl="",Ih=0;function _b(i=2){let e=Le.sampleRate*i,t=Le.createBuffer(1,e,Le.sampleRate),n=t.getChannelData(0),s=0;for(let r=0;r<e;r++){let a=Math.random()*2-1;s=(s+.02*a)/1.02,n[r]=s*3.5}return t}function yb(i,e,t){let n=Le.createOscillator(),s=Le.createGain();n.type="sine",n.frequency.setValueAtTime(e,i),n.frequency.exponentialRampToValueAtTime(e*1.5,i+.05),n.frequency.exponentialRampToValueAtTime(e*1.1,i+.09),s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(t,i+.012),s.gain.exponentialRampToValueAtTime(1e-4,i+.1),n.connect(s),s.connect(mi.out),n.start(i),n.stop(i+.12)}var pm=[[69,.5],[65,.45],[67,.7],[64,.6],[65,.45],[62,1.5]];function mm(i,e,t,n=.16){let s=pm.reduce((f,x)=>f+x[1],0),r=f=>440*2**((f-69)/12),a=i.createOscillator(),o=i.createOscillator(),l=i.createGain(),c=i.createBiquadFilter(),u=i.createGain(),h=i.createOscillator(),d=i.createGain();a.type="sine",o.type="triangle",l.gain.value=.35,c.type="lowpass",c.frequency.value=900,c.Q.value=.7,h.frequency.value=5.2,d.gain.value=4,h.connect(d),d.connect(a.frequency),d.connect(o.frequency),a.connect(c),o.connect(l),l.connect(c),c.connect(u),u.connect(e),u.gain.setValueAtTime(1e-4,t);let m=t;for(let[f,x]of pm)a.frequency.setTargetAtTime(r(f),m,.04),o.frequency.setTargetAtTime(r(f),m,.04),u.gain.setTargetAtTime(n,m,.06),u.gain.setTargetAtTime(n*.55,m+x-.08,.04),m+=x;u.gain.setTargetAtTime(1e-4,m-.6,.25);for(let f of[a,o,h])f.start(t),f.stop(t+s+.5);return s}function vb(i,e){for(let[t,n]of[[0,330],[.28,300],[.5,280]]){let s=Le.createOscillator(),r=Le.createGain(),a=Le.createOscillator(),o=Le.createGain();s.type="sine",s.frequency.value=n,a.frequency.value=26,o.gain.value=18,a.connect(o),o.connect(s.frequency),r.gain.setValueAtTime(1e-4,i+t),r.gain.exponentialRampToValueAtTime(e,i+t+.05),r.gain.exponentialRampToValueAtTime(1e-4,i+t+.22),s.connect(r),r.connect(mi.out),s.start(i+t),a.start(i+t),s.stop(i+t+.25),a.stop(i+t+.25)}}function Mb(i,e){let t=Math.floor(Le.sampleRate*.03),n=Le.createBuffer(1,t,Le.sampleRate),s=n.getChannelData(0);for(let l=0;l<t;l++)s[l]=(Math.random()*2-1)*Math.exp(-l/(t*.15));let r=Le.createBufferSource(),a=Le.createBiquadFilter(),o=Le.createGain();r.buffer=n,a.type="highpass",a.frequency.value=1200,o.gain.value=e,r.connect(a),a.connect(o),o.connect(mi.out),r.start(i)}function gm(i){if(Sm(),!Rr())return;let e=Le.createGain();e.gain.value=0,e.connect(kn);let t=Le.createBufferSource();t.buffer=_b(),t.loop=!0;let n=Le.createBiquadFilter(),s=Le.createOscillator(),r=Le.createGain();i==="town"?(n.type="bandpass",n.frequency.value=900,n.Q.value=.7,s.frequency.value=.35,r.gain.value=260):(n.type="lowpass",n.frequency.value=420,n.Q.value=.4,s.frequency.value=.08,r.gain.value=240),s.connect(r),r.connect(n.frequency),t.connect(n),n.connect(e),t.start(),s.start(),mi={out:e,nodes:[t,s],kind:i},sl=i,e.gain.linearRampToValueAtTime(i==="town"?.16:.13,Le.currentTime+1.5),clearInterval(Ih),Ih=setInterval(()=>{if(!mi||!gs())return;let a=Le.currentTime+Math.random()*.4;if(mi.kind==="town"){if(Math.random()<.35){let o=2600+Math.random()*1400;for(let l=0;l<2+Math.floor(Math.random()*3);l++)yb(a+l*.13,o*(1+(Math.random()-.5)*.1),.05)}Math.random()<.08&&vb(a,.07)}else for(let o=0;o<3+Math.floor(Math.random()*5);o++)Mb(a+Math.random()*.9,.05+Math.random()*.06)},1e3)}var xm=!1;function _m(){!Rr()||Le.state!=="running"||(xm||(rm(Le,kn),xm=!0),Rh(vm))}function Sm(){if(clearInterval(Ih),!mi)return;let i=mi;mi=null,sl="";try{i.out.gain.cancelScheduledValues(Le.currentTime),i.out.gain.setValueAtTime(i.out.gain.value,Le.currentTime),i.out.gain.linearRampToValueAtTime(0,Le.currentTime+.6)}catch{}setTimeout(()=>{for(let e of i.nodes)try{e.stop()}catch{}i.out.disconnect()},700)}var ym=0,Ue={ambience(i){if(i!==sl){if(!i){Sm();return}Rr()&&Le.state==="running"?gm(i):nl=i}},unlock(){let i=()=>{nl&&(gm(nl),nl=""),_m()};Rr()&&Le.state!=="running"?Le.resume().then(i).catch(()=>{}):i(),xb()},music(i){vm=i,_m()},duck(i){um(i)},debug(){return{music:hm(),ambience:sl,state:Le?Le.state:"none",files:new Set(Object.values(Lh).flat()).size,loaded:Object.keys(il).length,failed:bm,played:{...Ch}}},setEnabled(i){rl=i,Mm(i),dm()},setForcedMute(i){Ph=i,dm()},click(){Xe("uiClick",.3,.05)},swing(i){if(i==="tether"){Xe("click",.35,.1),tt(330,990,.18,"triangle",.06);return}if(i==="breaker"||i==="giantfall"){Xe("draw",.55,.05),mn(.22,.14,900);return}if(i==="counter"){Xe("draw",.5,.05),tt(600,1800,.14,"triangle",.07);return}Xe("slash",i==="light3"||i==="sunder"?.55:.4,.12)||mn(.09,.12,2400)},hit(i,e){let t=Le?Le.currentTime:0;t-ym<.03||(ym=t,tt(150,60,.09,"sine",.16),Xe("stone",.55,.1),Xe("chop",.3,.12),i==="sunder"&&(Xe("glass",.32,.08),tt(1500,700,.12,"square",.03)),i==="tether"&&(Xe("latch",.4,.05),tt(440,660,.25,"sine",.05)),i==="breaker"&&(Xe("punchHeavy",.6,.04),Xe("thud",.5,.04),e&&(Xe("bell",.35,.03),tt(220,880,.3,"triangle",.08))),i==="counter"&&(Xe("punchHeavy",.7,.04),Xe("thud",.7,.03),Xe("bell",.45,.02),Xe("glass",.3,.05),tt(110,45,.5,"sine",.3),tt(900,2200,.3,"triangle",.08,.05)),i==="giantfall"&&(tt(70,30,.9,"sine",.42),mn(.6,.22,320),Xe("thud",.9,.02),Xe("bell",.5,.01)))},whiff(){mn(.05,.04,3e3)},status(i){i==="cracked"?(Xe("glass",.25,.1),tt(900,1800,.12,"sine",.05)):(Xe("click",.3,.05),tt(520,780,.2,"triangle",.05))},wind(i){gs()&&(i==="slam"?(tt(60,150,.7,"sawtooth",.06),Xe("clang",.12,.2)):i==="sweep"?(tt(90,210,.6,"sawtooth",.05),mn(.5,.06,700)):(tt(50,120,.8,"square",.04),mn(.7,.08,300)))},strike(i){i==="slam"?(tt(90,35,.45,"sine",.35),mn(.35,.3,380),Xe("thud",.8,.05),Xe("stone",.5,.1)):i==="sweep"?(mn(.3,.22,1200),Xe("stone",.4,.15)):(mn(.5,.25,260),Xe("stepStone",.6,.1))},wallHit(){tt(70,35,.5,"sine",.3),Xe("stone",.7,.05),Xe("thud",.6,.05)},topple(){gs()&&(tt(55,28,1.6,"sine",.45),mn(1.2,.22,240),Xe("thud",1,0),setTimeout(()=>Xe("bell",.55,0),180),setTimeout(()=>Xe("stone",.6,.05),380))},getup(){tt(60,110,.7,"sawtooth",.05),Xe("stone",.35,.1)},roar(){Xe("bell",.5,0),tt(110,330,.8,"sawtooth",.08),tt(70,40,1,"sine",.3),mn(.8,.12,500)},counterReady(){tt(880,1760,.16,"triangle",.12,.08),tt(1320,2640,.16,"sine",.07,.12)},perfect(){Xe("glass",.4,.05),tt(660,1320,.25,"triangle",.16),tt(990,1980,.25,"triangle",.09,.06)},land(){Xe("stone",.3,.1),tt(140,70,.12,"sine",.1)},dodge(){Xe("cloth",.6,.1)||mn(.12,.14,900)},hurt(){Xe("punchHeavy",.7,.06)?tt(220,90,.16,"triangle",.08):tt(300,80,.2,"sawtooth",.16)},step(i=.16){Xe("stepStone",i,.08)},giantStep(i=.35){Xe("thud",i,.1),tt(55,40,.18,"sine",i*.4)},power(){tt(1175,1760,.12,"sine",.07),tt(1568,2349,.14,"triangle",.04,.05)},foeWind(){tt(320,620,.18,"triangle",.035)},foeDown(){Xe("stone",.45,.15),mn(.18,.1,600)},combo(i){tt(660+i*20,990+i*30,.08,"triangle",.035)},hum(){gs()&&mm(Le,kn,Le.currentTime+.05)},async renderHum(){let e=new OfflineAudioContext(1,12e4,24e3);return mm(e,e.destination,.05),(await e.startRendering()).getChannelData(0)},win(){Xe("jWin",.55,0)||[523,659,784,1047,1319].forEach((i,e)=>tt(i,i,.22,"triangle",.17,e*.1))},down(){Xe("jDown",.5,0)||tt(400,60,.5,"triangle",.18)},ting(){Xe("jTing",.4,0)||tt(1568,1568,.12,"sine",.14)}};var Bt=null,On=!1,al="none",Dh=!1;function xa(i){if(On)try{i()}catch{}}var Uh=!1,Nh=-1e9,kh=null;function Tm(){if(kh=null,Uh===Dh)return;let i=performance.now();if(i-Nh<1100){kh=setTimeout(Tm,1100-(i-Nh));return}Dh=Uh,Nh=i,xa(()=>Dh?Bt.game.gameplayStart():Bt.game.gameplayStop())}function wm(i){Uh=i,kh||Tm()}var gn={async init(){try{window.CrazyGames&&window.CrazyGames.SDK&&(Bt=window.CrazyGames.SDK,await Promise.race([Bt.init(),new Promise((i,e)=>setTimeout(()=>e(new Error("timeout")),5e3))]),al=Bt.environment,On=al==="local"||al==="crazygames")}catch{On=!1}return On},get env(){return al},storage(){try{return On&&Bt.data?Bt.data:null}catch{return null}},loadingStart(){xa(()=>Bt.game.loadingStart())},loadingStop(){xa(()=>Bt.game.loadingStop())},gameplayStart(){wm(!0)},gameplayStop(){wm(!1)},happytime(){xa(()=>Bt.game.happytime())},muted(){try{return!!(On&&Bt.game.settings&&Bt.game.settings.muteAudio)}catch{return!1}},onSettings(i){xa(()=>Bt.game.addSettingsChangeListener(i))},deviceType(){try{return On?Bt.user.systemInfo.device.type:null}catch{return null}},locale(){try{return On?Bt.user.systemInfo.locale:null}catch{return null}},async hasAdblock(){if(!On)return!1;try{return!!await Promise.race([Bt.ad.hasAdblock(),new Promise(i=>setTimeout(()=>i(!1),3e3))])}catch{return!1}},rewarded(i){return new Promise(e=>{if(!On){e({ok:!1,code:"noSdk"});return}let t=!1,n=s=>{t||(t=!0,e(s))};try{Bt.ad.requestAd("rewarded",{adStarted:()=>{i&&i()},adFinished:()=>n({ok:!0}),adError:s=>n({ok:!1,code:s&&s.code||"other"})})}catch{n({ok:!1,code:"other"})}})},midgame(i){return new Promise(e=>{if(!On){e(!1);return}let t=!1,n=!1,s=r=>{n||(n=!0,e(r))};setTimeout(()=>{t||s(!1)},8e3);try{Bt.ad.requestAd("midgame",{adStarted:()=>{t=!0,i&&i()},adFinished:()=>s(!0),adError:()=>s(!1)})}catch{s(!1)}})}};var xn=(i,e,t="")=>{let n=document.createElement(i);return e&&(n.className=e),n.innerHTML=t,n},bb=[["light","Strike",""],["sunder","Sunder","crack"],["tether","Tether","hold"],["breaker","Break","spend"],["dodge","Roll",""]];function Em(i,{touch:e,stages:t=null}){let n=xn("div","gbar",`<div class="gname"><b></b><span></span></div>
    <div class="bar hp"><i class="trail"></i><i class="fill"></i></div>
    <div class="bar bal"><i class="fill"></i><em>${j("BALANCE")}</em></div>
    <div class="chips"></div>`),s=xn("div","hbar",'<div class="lab">HP <b></b></div><div class="bar mine"><i class="trail"></i><i class="fill"></i></div><div class="powers"></div>'),r=xn("div","keys"+(e?" hide":""),bb.map(([D,z,F])=>`<div class="key k-${D}" data-a="${D}"><kbd>${Un[D]}</kbd>${Oi[D]}<b>${j(z)}</b><small>${F?j(F):""}</small><i class="cd"></i></div>`).join("")),a=xn("div","combo",`<b>0</b><span>${j("HITS")}</span><em></em>`),o=xn("div","banner"),l=xn("div","coach",`<b>${j("Elara")}</b><span></span>`),c=xn("div","nums"),u=xn("div","flash"),h=xn("div","prog"+(t?"":" hide"),t?t.map((D,z)=>`<i class="s-${D.type}" data-i="${z}" title="${D.type==="giant"?D.giant:D.name||"power"}"></i>`).join(""):""),d=xn("button","pausebtn","II");d.setAttribute("aria-label","Pause");let m=xn("div","modal hide");i.append(u,c,n,s,r,a,o,l,h,d,m);let f=(D,z)=>D.querySelector(z),x=f(n,".hp .fill"),p=f(n,".hp .trail"),g=f(n,".bal .fill"),M=f(n,".chips"),b=f(n,".bal"),v=f(s,".fill"),E=f(s,".trail"),T=f(s,".lab b"),R=1,L=1,y=0,_=0,I=0,V="",C=[],N=[];return{setGiant(D,z){f(n,".gname b").textContent=D,f(n,".gname span").textContent=z},onPause(D){d.onclick=D},showBars(D){for(let z of[n,s,r,a])z.classList.toggle("off",!D)},setPowers(D){let z=f(s,".powers");z.innerHTML=D.map(F=>`<i data-id="${F.id}" title="${F.text}">${F.name}</i>`).join("")},powerPulse(D){let z=f(s,`.powers [data-id="${D}"]`);z&&(z.classList.remove("fire"),z.offsetWidth,z.classList.add("fire"))},setStage(D){!t||!D.run||h.querySelectorAll("i").forEach((z,F)=>{z.classList.toggle("done",F<D.run.stage),z.classList.toggle("now",F===D.run.stage)})},banner(D,z="",F="",Y=1.6){o.className=`banner show ${F}`,o.innerHTML=`<b>${D}</b>${z?`<span>${z}</span>`:""}`,_=Y},say(D,z=2.8){f(l,"span").textContent=D,l.classList.add("show"),I=z},flash(D="#fff",z=.5){u.style.background=D,u.style.transition="none",u.style.opacity=z,requestAnimationFrame(()=>{u.style.transition="opacity .35s",u.style.opacity=0})},num(D,z,F=""){C.length>24&&C.shift().e.remove();let Y=xn("div",`num ${F}`,z);c.append(Y),C.push({e:Y,pos:{...D},t:0,life:F.includes("big")?1.1:.75})},sparks(D,z,F="gold"){for(let Y=0;Y<z&&N.length<80;Y++){let ee=xn("i",`spark ${F}`);ee.style.opacity=0,c.append(ee),N.push({e:ee,pos:{...D},from:null,t:-Y*.035,life:.45+Math.random()*.1,jx:(Math.random()-.5)*90,jy:-60-Math.random()*70})}},dropNums(D){for(let z=C.length-1;z>=0;z--)C[z].e.classList.contains(D)&&(C[z].e.remove(),C.splice(z,1))},comboPulse(D,z){let F=f(a,"em");F.textContent=D,F.className=z,F.style.animation="none",F.offsetWidth,F.style.animation=""},update(D,z,F){let Y=D.giant,ee=D.hero;if(n.classList.toggle("hide",!Y||Y.state==="fallen"),Y){let le=Y.hp/Y.max;R=Math.max(le,R-z*.35),x.style.width=`${le*100}%`,p.style.width=`${R*100}%`;let fe=Y.state==="toppled"?Y.t/D.data.rules.topple.time:Y.balance/Y.balMax;g.style.width=`${fe*100}%`,b.classList.toggle("down",Y.state==="toppled"),b.classList.toggle("near",Y.state!=="toppled"&&fe>.75),f(b,"em").textContent=j(Y.state==="toppled"?"TOPPLED":"BALANCE");let Ce=[];Y.status.cracked.n&&Ce.push(`<i class="c-cracked">${Oi.sunder}${j("CRACKED")}${Y.status.cracked.n>1?" \xD7"+Y.status.cracked.n:""}</i>`),Y.status.bound.n&&Ce.push(`<i class="c-bound">${Oi.tether}${j("BOUND")}</i>`);let Oe=Ce.join("");Oe!==V&&(M.innerHTML=Oe,V=Oe)}let ae=ee.hp/ee.max;L=Math.max(ae,L-z*.5),v.style.width=`${ae*100}%`,E.style.width=`${L*100}%`,T.textContent=ee.hp,s.classList.toggle("low",ae<=.3);let xe=D.data.moves;for(let le of["sunder","tether","breaker"]){let fe=ee.cd[le]/xe[le].cd;f(r,`.k-${le} .cd`).style.height=`${Math.max(0,fe)*100}%`}let ke=!!Y&&Y.status.cracked.n+Y.status.bound.n>0,H=!!Y&&Y.state==="toppled"&&!Y.finisherUsed&&!!Y.fallReady,Z=f(r,".k-breaker");Z.classList.toggle("glow",ke||H),f(Z,"b").textContent=j(H?"FALL!":"Break");let oe=ee.counterT>0,W=f(r,".k-light");if(W.classList.toggle("glow",oe),f(W,"b").textContent=j(oe?"Counter":"Strike"),e){let le=i.querySelector(".tb-light");le&&(le.classList.toggle("glow",oe),le.querySelector("b").textContent=j(oe?"Counter":"Strike"))}if(f(r,".k-dodge .cd").style.height=`${Math.max(0,ee.dodgeCd/xe.dodge.cd)*100}%`,e)for(let le of["sunder","tether","breaker","dodge"]){let fe=i.querySelector(`.tb-${le}`);if(!fe)continue;let Ce=le==="dodge"?ee.dodgeCd/xe.dodge.cd:ee.cd[le]/xe[le].cd;fe.querySelector("em").style.height=`${Math.max(0,Ce)*100}%`,le==="breaker"&&(fe.classList.toggle("glow",ke||H),fe.querySelector("b").textContent=j(H?"FALL!":"Break"))}let _e=D.combo;if(_e.hits>=2&&(y=1.2,f(a,"b").textContent=_e.hits),y-=z,a.classList.toggle("show",y>0),_-=z,_<=0&&o.classList.remove("show"),I-=z,I<=0&&l.classList.remove("show"),N.length){let le=b.getBoundingClientRect(),fe=g.getBoundingClientRect(),Ce=Math.max(le.left+6,fe.right),Oe=le.top+le.height/2,st=!1;for(let U=N.length-1;U>=0;U--){let Ke=N[U];if(Ke.t+=z,Ke.t<0)continue;Ke.from||(Ke.from=F(Ke.pos.x,Ke.pos.y,Ke.pos.z));let Ve=Math.min(1,Ke.t/Ke.life),Fe=Ve*Ve*(3-2*Ve),be=Ke.from.x+Ke.jx,rt=Math.min(Ke.from.y,Oe)+Ke.jy,De=(1-Fe)*(1-Fe)*Ke.from.x+2*(1-Fe)*Fe*be+Fe*Fe*Ce,A=(1-Fe)*(1-Fe)*Ke.from.y+2*(1-Fe)*Fe*rt+Fe*Fe*Oe;Ke.e.style.opacity=1,Ke.e.style.transform=`translate(${De}px, ${A}px) translate(-50%, -50%) scale(${1-.4*Ve})`,Ve>=1&&(Ke.e.remove(),N.splice(U,1),st=!0)}st&&(b.classList.remove("gain"),b.offsetWidth,b.classList.add("gain"))}for(let le=C.length-1;le>=0;le--){let fe=C[le];fe.t+=z;let Ce=fe.t/fe.life;if(Ce>=1){fe.e.remove(),C.splice(le,1);continue}let Oe=F(fe.pos.x,fe.pos.y+Ce*.9,fe.pos.z);fe.e.style.transform=`translate(${Oe.x}px, ${Oe.y}px) translate(-50%, -50%) scale(${Ce<.12?.6+Ce*4:1})`,fe.e.style.opacity=Ce>.7?(1-Ce)/.3:1}},modal(D,z={}){return m.innerHTML=`<div class="card">${D}</div>`,m.classList.remove("hide"),document.body.classList.add("modal-on"),m},closeModal(){m.classList.add("hide"),m.innerHTML="",document.body.classList.remove("modal-on")},get modalOpen(){return!m.classList.contains("hide")}}}function Am(i,e,t,n=()=>"all"){let s=new Set,r={},a=new Set,o={},l=0,c=0,u={seq:"",n:0},h=0,d=!1,m=g=>g.replace(/\{key:(\w+)\}/g,(M,b)=>b==="move"?t.move:`[${t[b]||b}]`);function f(g,M={}){var L;let b=i.events[g];if(!b)return!1;let v=n();if(v==="off"||v==="key"&&!b.urgent||c>0&&!b.urgent&&!M.force||!M.force&&l-((L=o[g])!=null?L:-1e9)<(i.repeatGap||0))return!1;o[g]=l;let E=b.lines.length,T=Math.floor(Math.random()*E);E>1&&T===r[g]&&(T=(T+1)%E),r[g]=T,c=i.gap;let R=m(b.lines[T]);return e.say(R,Math.max(i.show,i.charsPerSec?R.length/i.charsPerSec:R.split(/\s+/).length/(i.wordsPerSec||3.5))),!0}let x=(g,M)=>s.has(g)?!1:f(M)?(s.add(g),!0):!1,p=(g,M)=>{a.has(g)||f(M)&&a.add(g)};return{say:f,handle(g,M){switch(g.t){case"flow":if(g.to==="intro"&&(a.clear(),h=0,d=!1,u={seq:"",n:0}),g.to==="fight"&&g.from==="intro"&&(s.has("fought")?f(M.mode==="run"?"runAgain":"intro",{force:!0}):(s.add("fought"),f("firstFight",{force:!0}))),g.to==="won"&&(f(s.has("won")?"win":"winFirst",{force:!0}),s.add("won")),g.to==="pick"&&x("picked","pickFirst"),g.to==="down"){let b=M.giant;b&&b.hp/b.max<=.15?f("close",{force:!0}):f(M.downsInRow===1?"down1":M.downsInRow===2?"down2":"downMore",{force:!0})}break;case"wind":x("wind","firstWind");break;case"hurt":!x("hurt","firstHurt")&&g.hp>0&&g.hp<=30&&p("low","lowHp");break;case"perfect":x("perfect","firstPerfect");break;case"counterReady":s.has("counter")||(s.add("counter"),f("firstCounter",{force:!0}));break;case"status":g.on&&x(g.name,g.name==="cracked"?"firstCracked":"firstBound");break;case"hit":g.consumed&&Object.keys(g.consumed).length&&x("spend","firstSpend"),g.move==="giantfall"&&M.giant.toppleQ&&M.giant.toppleQ.hits>=12&&f("finisherBig");break;case"swing":["sunder","tether","breaker"].includes(g.move)&&h++;break;case"topple":x("topple","firstTopple");break;case"phase":f("phase2");break;case"stage":g.giant?(f(g.giant==="cairn"?s.has("cairn")?"cairnAgain":"cairnIntro":s.has("hollen")?"hollenAgain":"hollenIntro",{force:!0}),s.add(g.giant)):g.i>0&&f(g.mood===2?"swarm":"waveNext");break;case"foeWind":x("foeWind","firstFoeWind");break;case"foeDown":g.how==="crush"||g.how==="quake"?x("crush","firstCrush")||f("crush"):p("firstKill","firstKill");break;case"spawn":M.giant&&M.giant.state!=="fallen"&&f("adds");break;case"fallen":g.last||f(g.id==="cairn"?"cairnRest":"win");break;case"comboEnd":if(!g.seq)break;g.seq===u.seq?u.n++:u={seq:g.seq,n:1},u.n>=3&&p("repeat","repeat");break;default:break}},tick(g,M){if(c-=g,l+=g,M.flow.state!=="fight")return;M.time>14&&h===0&&M.giant&&p("noSkills","noSkills");let b=M.giant;b&&!d&&b.state!=="toppled"&&b.balance/b.balMax>.85&&(d=!0,x("teeter","teeter"))}}}var ln=new URLSearchParams(location.search),gi=ln.has("capture"),Sb=gi||ln.has("test"),Ma=ln.get("bot"),Hm=ln.has("holdpick"),Fn=matchMedia("(pointer: coarse)").matches||ln.has("touch"),Vm=matchMedia("(prefers-reduced-motion: reduce)").matches,wb={moves:rh,rules:ah,giants:Kt,foes:tp,powers:yr,run:qo},Rm={all:"all hints",key:"key moments",off:"off"},ys=ln.has("lab")?"lab":"run",Cm=Un,Vh="WASD",Gm="giantfall_v1",pl=()=>gn.storage()||(()=>{try{return window.localStorage}catch{return null}})(),Mt={sound:!0,shake:Vm?"less":"full",elara:"all",fights:0,wins:0};function Tb(){try{let i=pl(),e=i&&i.getItem(Gm);e&&(Mt={...Mt,...JSON.parse(e)})}catch{}}function ll(){try{let i=pl();i&&i.setItem(Gm,JSON.stringify(Mt))}catch{}}var Wm="77feff3",Xm=ln.has("counter")?"giantfall_report_counter_v1":"giantfall_report_v1",Xi=null,qi=null,qh=ln.has("tester")||/(^|\.)titanth\.com$/.test(location.hostname);ep(ln.get("lang")||(qh?"th":"en"));document.documentElement.lang=us;var Eb=us==="th"?jf:Jf;{let i=(e,t)=>{let n=document.querySelector(e);n&&(n.textContent=j(t))};i("#ltext","Loading\u2026"),i("#turn b","Turn your phone sideways"),i("#turn span","Toppleheart plays in landscape")}function Ab(){if(!(gi||Ma))try{let i=pl(),e=i&&i.getItem(Xm);if(!e)return;let t=JSON.parse(e);Array.isArray(t.log)&&ye.log.push(...t.log),t.answers&&(qi=t.answers),ye.fight&&ye.fight.result==null&&(ye.fight.n=ye.log.length+1),ye.runsStarted=t.runsStarted||0,Xi=t.beganAt||null}catch{}}function Gh(){if(!(gi||Ma))try{let i=pl();i&&i.setItem(Xm,JSON.stringify({log:ye.log,runsStarted:ye.runsStarted,beganAt:Xi,answers:qi}))}catch{}}function Rb(){let i=ye.report();return i.build=Wm,qi&&(i.answers=qi),i.viewHeals=vs?Object.values(vs).reduce((e,t)=>e+t.heals,0):0,i.minutesSinceFirstBegin=Xi?Math.round((Date.now()-Xi)/6e3)/10:null,i.perRun=i.perRun.map((e,t)=>({...e,wallMin:ye.log[t]&&ye.log[t].wallMin!=null?ye.log[t].wallMin:null})),i}function ml(i){let e=JSON.stringify(Rb()).replace(/":/g,'": '),t=document.getElementById(i);(navigator.clipboard?navigator.clipboard.writeText(e):Promise.reject()).then(()=>{t&&(t.textContent=j("Copied. Paste it to whoever asked you to play."))}).catch(()=>{t&&(t.textContent=e)})}var xs,Xn,It,Lr,ba,vs,$h,Qe,Re,Yh,ye,hl=null,ol=()=>ye.giant?vs[ye.giant.id]:null,Im=-9,Pm=0,_a=null,Oh=!1,$i=!1,Gi=!1,_s=0,Lm=0,Ir=0,cl=0,Dm=0,Pr=!1,Nm=new P(0,12,16),Um=new P(0,1,0),Fh=new P,km=document.getElementById("ui");function Cb(i){return new Promise((e,t)=>{let n=new Image;n.onload=()=>e(n),n.onerror=t,n.src=i})}function Bh(i,e){let t=document.getElementById("lfill"),n=document.getElementById("ltext");t&&(t.style.width=`${Math.round(i*100)}%`),n&&e&&(n.textContent=e)}var dl=40,Om=!1;function Fm(){let i=innerWidth,e=innerHeight;xs.setSize(i,e,!1),It.aspect=i/e;let t=i/e;dl=t<1?62:t<1.4?50:40,Om||(It.fov=dl,Om=!0),It.updateProjectionMatrix()}function Ib(i,e,t){return Fh.set(i,e,t).project(It),{x:(Fh.x+1)/2*innerWidth,y:(1-Fh.y)/2*innerHeight}}var on=(i,e=null)=>{Ir=Math.max(Ir,i),cl=e},zh={v:1},Hh=new Set,Bm={};function Pb(i){let e=ye.giant,t=ye.hero;switch(Yh.handle(i,ye),i.t){case"swing":Ue.swing(i.move),i.move==="counter"&&(Re.dropNums("counter"),Re.dropNums("perfect"),_a={x:t.x,z:t.z},Oh=!1);break;case"hit":{Ue.hit(i.move,i.consumed&&Object.keys(i.consumed).length);let n=i.target==="giant",s=n?e.radius:.5,r=n?1.4+Math.random()*.8:.7,a=Math.atan2(t.x-i.x,t.z-i.z),o=i.x+Math.sin(a)*s*.9,l=i.z+Math.cos(a)*s*.9,c=i.move==="breaker"||i.move==="giantfall";if(Hh.has(i.move+ye.combo.hits)||(Hh.add(i.move+ye.combo.hits),i.move==="tether"?Qe.beam(t,i):i.move==="sunder"?Qe.chop(t):Qe.slash(t,i.move)),i.move==="sunder"?Qe.cracks(o,l,a):i.move==="tether"&&Qe.bind(i.x,n?1.2:.7,i.z,n?e.radius*.9:.6),Qe.sparks(o,r,l,a,c?18:n?9:6,i.move==="sunder"?"#ff9a4a":"#ffe2a8"),Qe.dust(o,l,c?7:n?4:3,c?1.2:.5),c&&n&&(Qe.shock(i.x,i.z,i.move==="giantfall"?6:3.2),Qe.flash(o,1.6,l,"#ffd36b",3)),n&&i.consumed){let u=Kt[e.id].height;i.consumed.cracked&&Qe.shatter(e.x,u*.6,e.z,u*.3,10+6*i.consumed.cracked,"#ff7a1f",2.4),i.consumed.bound&&(Qe.shatter(e.x,u*.45,e.z,u*.35,12,"#1fb5ea",2.8),Qe.shock(e.x,e.z,u*.7,"#7fe3ff",.4))}if(n&&i.gain>0){let u=i.consumed&&Object.keys(i.consumed).length?"spend":i.repeat?"repeat":i.variety>1?"mix":"gold",h=Math.max(u==="repeat"?1:2,Math.min(16,Math.round(i.gain/(u==="repeat"?4:1.5))));Re.sparks({x:o,y:r,z:l},h,u)}if(n&&ol()&&ol().hit(i,t.face),i.move==="counter"?Re.num({x:n?e.x:i.x,y:n?4:2,z:n?e.z:i.z},i.dmg,"big counterdmg"):Re.num({x:o,y:n?2.6:1.6,z:l},i.dmg,c&&n?"big":i.toppled?"down":n?"":"small"),i.consumed&&Object.keys(i.consumed).length?(Re.comboPulse(j("SPENT!"),"spent"),Re.flash("#ffd36b",.18)):i.repeat?Re.comboPulse(j("REPEAT \xD70.6"),"repeat"):i.variety>zh.v&&Re.comboPulse(j("MIX \xD7{n}",{n:i.variety}),"mix"),zh.v=i.variety,on(c?.55:.12+(i.move==="sunder"?.08:0),a+Math.PI),i.move==="giantfall"&&(Re.flash("#fff6d8",.55),on(.9)),i.move==="counter"&&!Oh){Oh=!0;let u=n?e.x:i.x,h=n?e.z:i.z;Re.comboPulse(j("COUNTER!"),"counter"),Re.flash("#9ff0ff",n?.32:.22),_a&&(Qe.dash(_a.x,_a.z,t.x,t.z,"#2fc8ff"),_a=null),Qe.flash(u,n?2.8:1,h,"#2fc8ff",n?9:4.5,.45),Qe.flash(o,n?1.6:.8,l,"#ffffff",3.5,.25),Qe.shock(i.x,i.z,n?e.radius+3.2:2.2,"#7fe6ff",.55),Qe.sparks(o,r,l,a,n?28:20,"#9ff0ff"),Re.num({x:u,y:n?5.3:2.8,z:h},j("COUNTER!"),"counterbig"),on(n?.85:.55,a+Math.PI)}ye.combo.hits>=5&&ye.combo.hits%5===0&&Ue.combo(ye.combo.hits);break}case"whiff":i.move==="tether"?Qe.beam(t,{x:t.x+Math.sin(t.face)*6.5,z:t.z+Math.cos(t.face)*6.5}):i.move==="sunder"?Qe.chop(t):Qe.slash(t,i.move),Ue.whiff();break;case"cancel":break;case"comboEnd":zh.v=1,Hh.clear();break;case"status":i.on&&i.target==="giant"&&e&&(Ue.status(i.name),Re.num({x:e.x,y:3.6,z:e.z},j(i.name==="cracked"?"CRACKED":"BOUND"),`tag ${i.name}`));break;case"wind":Ue.wind(i.atk);break;case"strike":{Ue.strike(i.atk),ol()&&ol().strike(),i.atk==="slam"?(Qe.shock(i.x,i.z,2.6,"#ffb08a"),Qe.dust(i.x,i.z,10,1.6),on(.5)):i.atk==="sweep"?(Qe.shock(e.x,e.z,4.2,"#ffc9a8",.35),on(.25)):on(.3);break}case"wallHit":Ue.wallHit(),Qe.dust(i.x,i.z,14,2),on(.6);break;case"topple":{Ue.topple(),Ue.duck(!0),va(1.6,()=>Ue.duck(!1));let n=e.x+Math.sin(i.dir)*1.6,s=e.z+Math.cos(i.dir)*1.6;Qe.dust(n,s,22,2.8),Qe.shock(n,s,7,"#ffe7b0",.7),on(1),Re.flash("#ffe7b0",.35),Re.banner(j("TOPPLED!"),j("Hit him while he's down \u2014 double damage"),"topple",2.2);break}case"fallReady":Re.banner(j("GIANTFALL!"),Fn?j("Tap FALL! \u2014 finish him"):j("Press [{key}] \u2014 finish him",{key:Un.breaker}),"topple",1.3),Ue.ting();break;case"getup":Ue.getup(),Qe.dust(e.x,e.z,8,1.5);break;case"phase":Ue.roar(),Re.banner(j("{name} AWAKENS",{name:Kt[e.id].name.toUpperCase()}),j("He strikes faster now"),"phase",2),on(.45);break;case"stage":{Lr.setZone(i.mood===2?2:1),Ue.music(i.type==="giant"?"boss":"climb"),i.giant?(Re.setGiant(Kt[i.giant].name,j(Kt[i.giant].title)),Re.banner(Kt[i.giant].name.toUpperCase(),j(Kt[i.giant].title),"intro",2.2),Ue.roar(),on(.4)):Re.banner(j(i.name),"","stage",1.6),Re.setStage(ye);break}case"spawn":Ue.getup();break;case"foeWind":Ue.foeWind();break;case"lunge":Ue.dodge();break;case"throw":Ue.swing("light1");break;case"foeDown":Qe.dust(i.x,i.z,i.how==="crush"||i.how==="quake"?8:5,.6),Ue.foeDown(),(i.how==="quake"||i.how==="crush")&&Re.num({x:i.x,y:1.4,z:i.z},j("CRUSHED"),"tag crushed");break;case"heal":Re.num({x:t.x,y:2.2,z:t.z},`+${i.n}`,"heal"),Ue.ting();break;case"pull":Qe.dash(i.x0,i.z0,i.x,i.z,"#6fd0ff"),Ue.dodge();break;case"pullEnd":Qe.dust(i.x,i.z,6,.5),Ue.land(),on(.2);break;case"giantReady":break;case"offer":break;case"picked":Ue.ting(),i.heal&&Re.num({x:t.x,y:2.2,z:t.z},`+${i.heal}`,"heal"),Re.setPowers(ye.run.picks.map(n=>yr.cards.find(s=>s.id===n)).map(n=>({...n,name:xr(n),text:Xo(n)})));break;case"power":{Re.powerPulse(i.id);let n=ye.realTime;if(n-(Bm[i.id]||-9)<2.5)break;Bm[i.id]=n;let s=yr.cards.find(o=>o.id===i.id),r=n-Im<.8?Math.min(Pm+1,3):0,a=.55*r;Pm=r,Im=n,Re.num({x:t.x,y:2.9+a,z:t.z},xr(s),`tag power${i.hurt?" cost":""}`),Ue.power();break}case"counterReady":Ue.counterReady(),Re.num({x:t.x,y:3,z:t.z},Fn?j("STRIKE BACK!"):`[${Un.light}] ${j("STRIKE BACK!")}`,"tag counter");break;case"perfect":Ue.perfect(),Qe.flash(t.x,1,t.z,"#9ff0ff",3,.3),Re.num({x:t.x,y:2.3,z:t.z},j("PERFECT"),"tag perfect"),on(.15);break;case"dodge":Ue.dodge(),Qe.dust(t.x,t.z,3,.3);break;case"hurt":Ue.hurt(),ba.hurt(),Re.flash("#ff3a2a",.32),Re.num({x:t.x,y:2.2,z:t.z},`-${i.dmg}`,"hurt"),on(.45);break;case"fallen":Ue.duck(!0),Qe.motes(e.x,e.z),Qe.dust(e.x,e.z,26,3),on(1),Re.banner(j("{name} RESTS",{name:Kt[e.id].name.toUpperCase()}),i.last?"":j("The terrace goes quiet\u2026"),"win",3),i.last&&ba.win(),i.last?(va(.9,()=>Ue.hum()),va(5.4,()=>{Ue.win(),Ue.duck(!1)})):va(.9,()=>{Ue.ting(),Ue.duck(!1)});break;case"flow":if(i.to==="fight"&&i.from==="intro"&&(Xi||(Xi=Date.now()),Gh()),i.to==="fight"&&(gn.gameplayStart(),ys==="lab"&&Ue.music("boss"),Re.showBars(!0),i.from==="pick"&&(Vt.onKey(null),Re.closeModal())),i.to==="pick"&&(gn.gameplayStop(),(!hl||Hm)&&Db()),i.to==="intro"&&(ys==="lab"?Re.banner(Kt[ye.giantId].name.toUpperCase(),j(Kt[ye.giantId].title),"intro",2):(Lr.setZone(1),Re.banner(j("THE DAWN TERRACES"),j("Bring the Wardens to rest"),"intro",2),Ue.music("climb")),Re.showBars(!0),Re.setStage(ye),Re.setPowers([]),Pr=!1),i.to==="won"||i.to==="down"){Mt.fights++,i.to==="won"&&Mt.wins++,ll();let n=ye.log[ye.log.length-1];n&&Xi&&(n.wallMin=Math.round((Date.now()-Xi)/6e3)/10),Gh(),i.to==="down"&&(Ue.down(),Re.banner(j("FALLEN"),"","down",2)),va(i.to==="won"?2.6:1.5,()=>{gn.gameplayStop(),Km()})}break;default:break}}function qm(){return Fn?`<p class="small">${j("Left side: move")} \xB7 <b>${j("Strike")}</b> \xB7 <b>${j("Sunder")}</b> ${j("cracks")} \xB7 <b>${j("Tether")}</b> ${j("holds")} \xB7 <b>${j("Break")}</b> ${j("spends")} \xB7 <b>${j("Roll")}</b> ${j("dodges")}</p>`:`<div class="ctl"><span><kbd>${Vh}</kbd> ${j("move")}</span><span><kbd>${Un.light}</kbd> ${j("/ click strike")}</span><span><kbd>${Un.sunder}</kbd> ${j("Sunder \u2014 crack")}</span><span><kbd>${Un.tether}</kbd> ${j("Tether \u2014 hold")}</span><span><kbd>${Un.breaker}</kbd> ${j("Break \u2014 spend")}</span><span><kbd>SPACE</kbd> ${j("roll")}</span><span><kbd>P</kbd> ${j("pause")}</span></div>`}function gl(i){let e=document.querySelector(".modal");for(let[t,n]of Object.entries(i)){let s=e.querySelector(t);s&&(s.onclick=r=>{r.preventDefault(),Ue.click(),n()})}}function Lb(){if(Fn)try{let i=screen.orientation;i&&i.lock&&i.lock("landscape").catch(()=>{})}catch{}}var zm=[["q1","\u0E16\u0E49\u0E32\u0E40\u0E25\u0E48\u0E32\u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E1F\u0E31\u0E07 \u0E40\u0E01\u0E21\u0E19\u0E35\u0E49\u0E43\u0E2B\u0E49\u0E40\u0E23\u0E32\u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23"],["q2","\u0E16\u0E49\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E2D\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19: \u0E17\u0E33\u0E22\u0E31\u0E07\u0E44\u0E07\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E16\u0E36\u0E07\u0E25\u0E49\u0E21 (\u0E2A\u0E15\u0E31\u0E49\u0E19)? \u0E40\u0E25\u0E48\u0E32\u0E27\u0E34\u0E18\u0E35\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32 1\u20132 \u0E1B\u0E23\u0E30\u0E42\u0E22\u0E04"],["q3","\u0E0A\u0E48\u0E27\u0E07\u0E44\u0E2B\u0E19\u0E17\u0E35\u0E48\u0E25\u0E38\u0E49\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14"],["q5","\u0E21\u0E35\u0E15\u0E2D\u0E19\u0E44\u0E2B\u0E19\u0E17\u0E35\u0E48\u0E07\u0E07 \u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E27\u0E48\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23\u0E44\u0E2B\u0E21"],["q6","\u0E21\u0E35\u0E15\u0E2D\u0E19\u0E44\u0E2B\u0E19\u0E17\u0E35\u0E48\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21\u0E41\u0E25\u0E49\u0E27\u0E40\u0E01\u0E21\u0E44\u0E21\u0E48\u0E17\u0E33\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E17\u0E35\u0E48\u0E15\u0E31\u0E49\u0E07\u0E43\u0E08\u0E44\u0E2B\u0E21"]];function $m(i){let e=qi||{},t=a=>String(a||"").replace(/[&<>"]/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[o]),n=(a,o)=>`<div class="qpick" data-q="${a}">${o.map(([l,c])=>`<button type="button" class="ghost${e[a]===l?" on":""}" data-v="${l}">${c}</button>`).join("")}</div>`;Re.modal(`<h2>\u0E04\u0E33\u0E16\u0E32\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E04\u0E19\u0E17\u0E14\u0E2A\u0E2D\u0E1A</h2><p class="small">\u0E15\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E04\u0E33\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 1\u20132 \u0E1B\u0E23\u0E30\u0E42\u0E22\u0E04 \u0E04\u0E33\u0E15\u0E2D\u0E1A\u0E08\u0E30\u0E15\u0E34\u0E14\u0E44\u0E1B\u0E01\u0E31\u0E1A\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19</p>
    <div class="qa"><label>\u0E40\u0E04\u0E22\u0E40\u0E2B\u0E47\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E19\u0E35\u0E49\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E21</label>${n("seen",[["no","\u0E44\u0E21\u0E48\u0E40\u0E04\u0E22"],["yes","\u0E40\u0E04\u0E22"]])}
    ${zm.slice(0,3).map(([a,o])=>`<label for="${a}">${o}</label><textarea id="${a}" rows="2">${t(e[a])}</textarea>`).join("")}
    <label>\u0E15\u0E2D\u0E19\u0E41\u0E1E\u0E49 \u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E27\u0E48\u0E32</label>${n("q4",[["me","\u0E40\u0E23\u0E32\u0E1E\u0E25\u0E32\u0E14\u0E40\u0E2D\u0E07"],["game","\u0E40\u0E01\u0E21\u0E44\u0E21\u0E48\u0E41\u0E1F\u0E23\u0E4C"],["none","\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E41\u0E1E\u0E49"]])}
    <textarea id="q4note" rows="1" placeholder="(\u0E17\u0E33\u0E44\u0E21 \u0E16\u0E49\u0E32\u0E2D\u0E22\u0E32\u0E01\u0E40\u0E25\u0E48\u0E32)">${t(e.q4note)}</textarea>
    ${zm.slice(3).map(([a,o])=>`<label for="${a}">${o}</label><textarea id="${a}" rows="2">${t(e[a])}</textarea>`).join("")}</div>
    <button class="go" id="qsave">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 \u0E41\u0E25\u0E49\u0E27\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19</button><button class="ghost" id="qback">\u0E01\u0E25\u0E31\u0E1A</button><p class="small" id="rep"></p>`);let s={seen:e.seen,q4:e.q4};document.querySelectorAll(".qpick").forEach(a=>a.querySelectorAll("button").forEach(o=>{o.onclick=()=>{s[a.dataset.q]=o.dataset.v,a.querySelectorAll("button").forEach(l=>l.classList.toggle("on",l===o))}}));let r=()=>{qi={seen:s.seen||null,q4:s.q4||null,at:new Date().toISOString().slice(0,16)},qi.qv=2;for(let a of["q1","q2","q3","q4note","q5","q6"])qi[a]=(document.getElementById(a).value||"").trim().slice(0,600);Gh()};gl({"#qsave":()=>{r(),ml("rep")},"#qback":()=>{r(),i()}}),Vt.onKey(null)}function Ym(){Re.modal(`<h1>TOPPLE<span>HEART</span></h1><p class="promise">${j("Mix your skills, break their balance, and bring down giants a hundred times your size.")}</p>${qm()}<button class="go" id="go">${j("Begin")}</button>${ye.log.length?`${qh?'<button class="ghost" id="qs">\u0E15\u0E2D\u0E1A\u0E04\u0E33\u0E16\u0E32\u0E21\u0E04\u0E19\u0E17\u0E14\u0E2A\u0E2D\u0E1A</button>':""}<button class="ghost" id="report">${j("Copy play report")}</button><p class="small" id="rep"></p>`:""}<p class="small">${ys==="run"?j("One run: about 3 minutes \xB7 two Wardens to bring down"):j("Fight lab \xB7 Hollen only")}</p>`);let i=()=>{$i||($i=!0,Vt.onKey(null),Re.closeModal(),Ue.unlock(),Ue.setEnabled(Mt.sound),Ue.ambience("tower"),_s=0,Lb())};gl({"#go":i,"#report":()=>ml("rep"),"#qs":()=>$m(Ym)}),Vt.onKey(e=>{e!=="Escape"&&i()})}function Db(){let i=ye.run.offer;Re.modal(`<h2>${j("Choose a power")}</h2><p class="small">${j("Elara hums while you rest (+{n} HP). One of three:",{n:qo.pickHeal})}</p>
    <div class="cards">${i.map((t,n)=>`<button class="pcard" data-k="${n}"><kbd>${n+1}</kbd><i class="picons">${(t.icons||[]).map(s=>Oi[s]||"").join("")}</i><b>${xr(t)}</b><span>${Xo(t)}</span></button>`).join("")}</div>`);let e=t=>{ye.choose(t)&&Ue.click()};document.querySelectorAll(".pcard").forEach(t=>{t.onclick=()=>e(+t.dataset.k)}),Vt.onKey(t=>{let n=["Digit1","Digit2","Digit3"].indexOf(t);n>=0&&e(n)})}function Km(){if(Pr)return;Pr=!0;let i=ye.log[ye.log.length-1],e=i.result==="won",t=ye.assistOffer(),n=!e&&i.giantHpPct!=null&&i.giantHpPct<=15,s=ys==="run"&&!e&&i.giant&&i.stage===i.stages-1,r=ys==="run",a=u=>`${Math.floor(u/60)}:${String(Math.floor(u%60)).padStart(2,"0")}`,o=r?Math.round(100*(i.stage+(i.giantHpPct!=null?1-i.giantHpPct/100:0))/i.stages):0,l=r?i.powers.map(u=>yr.cards.find(h=>h.id===u)).filter(Boolean).map(xr):[];Re.modal(`<h2>${j(e?r?"The Terraces sleep.":"Hollen rests.":n?"So close.":"Get up, Breaker.")}</h2>
    ${r&&!e?`<p class="small">${j("You fell at {stage}",{stage:`<b>${j(i.stageName)}</b>`})}${i.giantHpPct!=null?j(" \u2014 {giant} had {n}% left",{giant:i.giant==="hollen"?"Hollen":"Cairn",n:i.giantHpPct}):""}.</p><div class="runbar"><i style="width:${o}%"></i></div>`:""}
    <div class="stats">
      ${e?`<div><b>${r?a(i.realSec):i.time+"s"}</b><span>${j("time")}</span></div><div><b>${i.heroHp}</b><span>${j("HP left")}</span></div>`:i.giantHpPct!=null&&!r?`<div><b>${i.giantHpPct}%</b><span>${j("Hollen's strength left")}</span></div>`:""}
      <div><b>${i.topples}</b><span>${j("topples")}</span></div>${r?`<div><b>${i.crushes}</b><span>${j("crushed")}</span></div>`:""}<div><b>${i.bestCombo}</b><span>${j("best combo")}</span></div><div><b>${i.perfects}</b><span>${j("perfect rolls")}</span></div>
    </div>
    ${l.length?`<p class="small">${j("Powers: {list}",{list:l.join(" \xB7 ")})}</p>`:""}
    ${t?`<label class="assist"><input type="checkbox" id="assist" ${ye.assistPct?"checked":""}> ${j("Elara's Shield: take {n}% less damage",{n:t})} <small>${j("(your choice \u2014 it never weakens Hollen)")}</small></label>`:""}
    ${s?`<button class="go" id="retry">${j("Face {who} again",{who:i.giant==="hollen"?"Hollen":j("him")})}</button><button class="ghost" id="again">${j("Run from the start")}</button>`:`<button class="go" id="again">${j(r?"Run again":"Fight again")}</button>`}
    ${qh?'<button class="ghost" id="qs">\u0E15\u0E2D\u0E1A\u0E04\u0E33\u0E16\u0E32\u0E21\u0E04\u0E19\u0E17\u0E14\u0E2A\u0E2D\u0E1A</button>':""}<button class="ghost" id="report">${j("Copy play report")}</button><p class="small" id="rep"></p>`),gl({"#qs":()=>$m(()=>{Pr=!1,Km()}),"#again":ul,"#retry":()=>ul({stage:i.stage,picks:i.powers.slice()}),"#report":()=>ml("rep")});let c=document.getElementById("assist");c&&(c.onchange=()=>ye.setAssist(c.checked?t:0)),Vt.onKey(u=>{(u==="Enter"||u==="Space")&&ul(s?{stage:i.stage,picks:i.powers.slice()}:null)})}function ul(i=null){Vt.onKey(null),Re.closeModal(),ye.reset(),ye.resume=i,_s=0}function Wi(i){if(!(!$i||Pr||Gi===i))if(Gi=i,i){gn.gameplayStop(),Ue.duck(!0);let e=ye.run?ye.run.picks.map(t=>yr.cards.find(n=>n.id===t)):[];Re.modal(`<h2>${j("Paused")}</h2>${e.length?`<div class="plist"><b>${j("Your powers")}</b>${e.map(t=>`<div><b>${xr(t)}</b>${Xo(t)}</div>`).join("")}</div>`:""}${qm()}<div class="row"><button class="ghost" id="snd">${j(`Sound: ${Mt.sound?"on":"off"}`)}</button><button class="ghost" id="shk">${j(`Screen shake: ${Mt.shake}`)}</button><button class="ghost" id="ela">${j(`Elara: ${Rm[Mt.elara]}`)}</button></div><button class="go" id="res">${j("Resume")}</button><button class="ghost" id="report">${j("Copy play report")}</button><p class="small" id="rep"></p><p class="small build">build ${Wm}</p>`),gl({"#res":()=>Wi(!1),"#report":()=>ml("rep"),"#snd":()=>{Mt.sound=!Mt.sound,Ue.setEnabled(Mt.sound),ll(),document.getElementById("snd").textContent=j(`Sound: ${Mt.sound?"on":"off"}`)},"#ela":()=>{Mt.elara=Mt.elara==="all"?"key":Mt.elara==="key"?"off":"all",ll(),document.getElementById("ela").textContent=j(`Elara: ${Rm[Mt.elara]}`)},"#shk":()=>{Mt.shake=Mt.shake==="full"?"less":Mt.shake==="less"?"off":"full",ll(),document.getElementById("shk").textContent=j(`Screen shake: ${Mt.shake}`)}}),Vt.onKey(t=>{(t==="Escape"||t==="KeyP")&&Wi(!1)})}else Vt.onKey(null),Re.closeModal(),Ue.duck(!1),ye.flow.state==="fight"&&gn.gameplayStart(),_s=0}function Nb(){let i=ye.hero,e=[[i.x,.5,i.z],[i.x,1.6,i.z]];for(let n of ye.foes)n.state!=="dead"&&e.push([n.x,.6,n.z]);let t=ye.giant;return t&&t.state!=="fallen"&&e.push([t.x,1,t.z],[t.x,3,t.z]),e}function Zm(i){let e=gi&&fl.lookAt;if(e){It.position.set(e[0]+e[3],e[1]+e[4],e[2]+e[5]),It.lookAt(e[0],e[1],e[2]);return}let t=ye.hero,n=ye.giant,s=new P(t.x*.8,1,t.z*.75-.8);if(n&&n.state!=="fallen")s.lerp(new P(n.x,1.8,n.z),.32);else if(ye.foes.length){let c=0,u=0;for(let h of ye.foes)c+=h.x,u+=h.z;s.lerp(new P(c/ye.foes.length,1,u/ye.foes.length),.2)}let a=innerWidth/innerHeight<1?new P(0,14.5,13):new P(0,12,13);n&&n.state==="toppled"&&a.multiplyScalar(.88);let o=s.clone().add(a),l=1-Math.exp(-i*5);if(Nm.lerp(o,l),Um.lerp(s,l),It.position.copy(Nm),Ir>0&&Mt.shake!=="off"){let c=Math.min(1,Ir),u=c*c*.45*(Mt.shake==="less"||Vm?.3:1)*(innerWidth<600?.7:1);Dm+=i;let h=Math.sin(Dm*70)*u;cl!=null?(It.position.x+=Math.sin(cl)*h,It.position.z+=Math.cos(cl)*h,It.position.y+=(Math.random()-.5)*u*.3):(It.position.x+=(Math.random()-.5)*u*2,It.position.y+=(Math.random()-.5)*u*2)}Ir=Math.max(0,Ir-i*2.4),Math.abs(It.fov-dl)>.01&&(It.fov+=(dl-It.fov)*(1-Math.exp(-(i||.016)*6)),It.updateProjectionMatrix()),It.lookAt(Um)}var Jm=0,Wh=0,ya=0,Cr=[],va=(i,e)=>Cr.push({t:i,fn:e});function Xh(i){Jm++;for(let n=Cr.length-1;n>=0&&!Gi;n--)if(Cr[n].t-=i,Cr[n].t<=0){let s=Cr[n].fn;Cr.splice(n,1),s()}if($i&&!Gi){_s+=i;let n=0;for(;_s>=Fi&&n<8;){ye.step(hl&&!(Hm&&ye.flow.state==="pick")?hl(ye):Vt.frame());for(let s of ye.drain())Pb(s);_s-=Fi,n++,Wh++}n===8&&(_s=0),Yh.tick(i,ye)}let e=!$i||Gi||ye.stopT>1e-6?0:i*(ye.slowT>0?ye.slowScale:1),t=Gi?0:i;ya+=t,ba.update(ye,e,rh);for(let n of Object.values(vs))n.update(ye,e,ya);$h.update(ye,e,ya),Qe.update(e),Lr.tick(ya),Dp(ya),Gi||Zm(i),Lr.fadePillars(It,Nb(),t),Re.update(ye,t,Ib),xs.render(Xn,It)}function jm(i){let e=Math.min(.1,(i-(Lm||i))/1e3);Lm=i,Xh(e),requestAnimationFrame(jm)}async function Ub(){gn.loadingStart(),Bh(.05,j("Waking the terraces\u2026")),await gn.init(),Tb();let i=gn.deviceType();i&&!ln.has("touch")&&(Fn=i!=="desktop"),Fn&&(Cm={light:j("Strike"),sunder:j("Sunder"),tether:j("Tether"),breaker:j("Break"),dodge:j("Roll")});try{if(navigator.keyboard&&navigator.keyboard.getLayoutMap){let y=await Promise.race([navigator.keyboard.getLayoutMap(),new Promise(V=>setTimeout(()=>V(null),300))]),_=y&&y.get("Semicolon");_&&_!==";"&&(Un.breaker=_.toUpperCase());let I=y&&["KeyW","KeyA","KeyS","KeyD"].map(V=>y.get(V)).join("");I&&I.length===4&&(Vh=I.toUpperCase())}}catch{}let e=new Vo,t=y=>e.loadAsync(y).catch(()=>null),n=0,s=y=>y.then(_=>(n++,Bh(.1+.85*n/14),_)),[r,a,o,l,c,u,h,d,m]=await Promise.all(["hero","boss-guardian","weapon-firstLight","arena-pillar","arena-pillar-cracked","arena-pillar-claw","arena-gate","arena-brazier","arena-banner-torn"].map(y=>s(t(`${y}.glb`)))),f=await fetch("models.json").then(y=>y.json()).catch(()=>[]),x={};await Promise.all(["giant-hollen","giant-cairn","foe-shardling","foe-slinger"].filter(y=>f.includes(`${y}.glb`)).map(async y=>{x[y]=await t(`${y}.glb`)}));let[p,g,M,b]=await Promise.all(["arena-floor","sky-dawn","sky-dusk","arena-wall"].map(y=>s(Cb(`${y}.webp`).catch(()=>null)))),v=document.getElementById("c"),E=(navigator.hardwareConcurrency||4)<=4||Fn;xs=new _o({canvas:v,antialias:!E,powerPreference:"high-performance",preserveDrawingBuffer:gi}),xs.setPixelRatio(Math.min(devicePixelRatio,E?1.5:2)),xs.shadowMap.enabled=!0,xs.shadowMap.type=du,Xn=new yo,It=new Dt(40,16/9,.1,200),Lr=Bp(Xn,{shadows:!0},{floor:p,skyDawn:g,skyDusk:M,wall:b,pillar:l,pillarCracked:c,pillarClaw:u,gate:h,brazier:d,bannerTorn:m},ah.arena.radius),Lr.setGate(!1,0),ye=Rp(wb,{seed:+(ln.get("seed")||Date.now()%1e5),mode:ys,counter:ln.has("nocounter")?!1:ln.has("counter")?!0:void 0}),Ma&&(hl=Ip(Ma,7)),Ab(),ba=Xp(r,o),Xn.add(ba.obj),vs={hollen:bh(x["giant-hollen"]||a,Xn,Kt.hollen.height,null,"hollen"),cairn:bh(x["giant-cairn"]||a,Xn,Kt.cairn.height,Kt.cairn.tint,"cairn")};for(let y of Object.values(vs))Xn.add(y.obj);$h=qp(a,Xn,{shardling:x["foe-shardling"],slinger:x["foe-slinger"]}),Qe=Kp(Xn),Re=Em(km,{touch:Fn,stages:ys==="run"?qo.stages:null}),Re.setGiant(Kt.hollen.name,j(Kt.hollen.title)),Re.onPause(()=>Wi(!0)),Yh=Am(Eb,Re,{...Cm,move:Fn?j("the stick"):Vh},()=>Mt.elara),Fn?(document.body.classList.add("touch-ui"),jp(km)):Jp(v),addEventListener("resize",Fm),Fm();for(let y of["gesturestart","gesturechange","gestureend"])document.addEventListener(y,_=>_.preventDefault(),{passive:!1});document.addEventListener("dblclick",y=>y.preventDefault(),{passive:!1}),document.addEventListener("touchmove",y=>{(y.touches.length>1||!y.target.closest(".modal"))&&y.preventDefault()},{passive:!1});let T=0;if(document.addEventListener("touchend",y=>{y.timeStamp-T<320&&!y.target.closest(".modal")&&y.preventDefault(),T=y.timeStamp},{passive:!1}),ln.has("dbg")){let y=document.createElement("pre");y.style.cssText="position:fixed;left:50%;top:0;z-index:99;margin:0;font:11px monospace;background:#000a;color:#fff;pointer-events:none;padding:2px 4px",document.body.append(y);let _=0,I="",V=0;addEventListener("touchstart",C=>{_=C.touches.length;let N=C.target;I=`${N.tagName}${N.id?"#"+N.id:""}.${String(N.className).split(" ")[0]} @${Math.round(C.touches[0].clientX)},${Math.round(C.touches[0].clientY)}`},!0),addEventListener("click",()=>{V++},!0),addEventListener("touchend",C=>{_=C.touches.length},!0),setInterval(()=>{let C=visualViewport;y.textContent=`zoom ${C?C.scale.toFixed(2):"?"} vv ${C?Math.round(C.width)+"x"+Math.round(C.height):""} win ${innerWidth}x${innerHeight} dpr ${devicePixelRatio} touches ${_} stick ${Vt.touch?Vt.touch.x.toFixed(2):"-"}
last touch ${I} clicks ${V}`},200)}let R=matchMedia("(orientation: portrait)"),L=()=>{let y=Fn&&R.matches;document.body.classList.toggle("turn",y),y&&!gi&&Wi(!0)};R.addEventListener("change",L),L(),addEventListener("keydown",y=>{(y.code==="Escape"||y.code==="KeyP")&&!Re.modalOpen&&Wi(!0)}),addEventListener("pointerdown",()=>Ue.unlock()),addEventListener("keydown",()=>Ue.unlock()),addEventListener("touchend",()=>Ue.unlock()),document.addEventListener("visibilitychange",()=>{document.hidden&&Wi(!0)}),addEventListener("blur",()=>{gi||Wi(!0)}),gn.muted()&&Ue.setForcedMute(!0),gn.onSettings(y=>Ue.setForcedMute(!!y.muteAudio)),Bh(1,j("Ready")),document.getElementById("loader").classList.add("gone"),gn.loadingStop(),Zm(1),Ma||gi?$i=!0:Ym(),gi||requestAnimationFrame(jm),fl.ready=!0}var fl={ready:!1,lookAt:null,get sim(){return ye},rigged:()=>Object.fromEntries(Object.entries(vs).map(([i,e])=>[i,e.obj.userData.rigged])),foeViews:()=>$h.count(),pick:i=>ye.choose(i),get scene(){return Xn},get renderer(){return xs},get camera(){return It},input:Vt,audio:Ue,settings:()=>Mt,advance(i){let e=Math.round(i/16.666666666666668);for(let t=0;t<e;t++)Xh(1/60)},frameAt(i){return Xh(1/i),Wh},start(){$i||($i=!0,Vt.onKey(null),Re.closeModal())},pause:Wi,again:ul,fxCount:()=>Qe.count(),frames:()=>Jm,steps:()=>Wh,shown:()=>({modal:Re.modalOpen,ended:Pr,paused:Gi})};Sb&&(window.__gf=fl);Ub().catch(i=>{console.error(i);let e=document.getElementById("ltext");e&&(e.textContent=j("Could not load. Please reload."))});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
