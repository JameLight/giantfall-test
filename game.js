(()=>{var fu="170";var dg=0,od=1,fg=2;var Tf=1,pu=2,ti=3,Mn=0,$t=1,Rt=2,Pi=0,Pn=1,Gn=2,ld=3,cd=4,pg=5,rs=100,mg=101,gg=102,xg=103,_g=104,yg=200,vg=201,Mg=202,bg=203,Ql=204,ec=205,Sg=206,wg=207,Tg=208,Eg=209,Ag=210,Rg=211,Cg=212,Ig=213,Pg=214,tc=0,nc=1,ic=2,Ks=3,sc=4,rc=5,ac=6,oc=7,Ef=0,Lg=1,Dg=2,Li=0,Ng=1,Ug=2,kg=3,Og=4,Fg=5,Bg=6,zg=7,ud="attached",Hg="detached",Af=300,Zs=301,Js=302,lc=303,cc=304,zo=306,os=1e3,ii=1001,ls=1002,Ot=1003,mu=1004;var Vs=1005;var an=1006,Kr=1007;var Vn=1008;var ai=1009,Rf=1010,Cf=1011,Qr=1012,gu=1013,cs=1014,In=1015,oa=1016,xu=1017,_u=1018,js=1020,If=35902,Pf=1021,Lf=1022,vn=1023,Df=1024,Nf=1025,qs=1026,Qs=1027,yu=1028,vu=1029,Uf=1030,Mu=1031;var bu=1033,io=33776,so=33777,ro=33778,ao=33779,uc=35840,hc=35841,dc=35842,fc=35843,pc=36196,mc=37492,gc=37496,xc=37808,_c=37809,yc=37810,vc=37811,Mc=37812,bc=37813,Sc=37814,wc=37815,Tc=37816,Ec=37817,Ac=37818,Rc=37819,Cc=37820,Ic=37821,oo=36492,Pc=36494,Lc=36495,kf=36283,Dc=36284,Nc=36285,Uc=36286,Su=2200,wu=2201,Vg=2202,er=2300,tr=2301,vl=2302,Gs=2400,Ws=2401,lo=2402,Tu=2500,Gg=2501,Of=0,Ho=1,la=2,Wg=3200,Xg=3201;var Eu=0,qg=1,Ri="",At="srgb",Yt="srgb-linear",Vo="linear",mt="srgb";var Ss=7680;var hd=519,$g=512,Yg=513,Kg=514,Ff=515,Zg=516,Jg=517,jg=518,Qg=519,kc=35044;var dd="300 es",si=2e3,co=2001,oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fd=1234567,Zr=Math.PI/180,nr=180/Math.PI;function Ln(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function zt(i,e,t){return Math.max(e,Math.min(t,i))}function Au(i,e){return(i%e+e)%e}function e0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function t0(i,e,t){return i!==e?(t-i)/(e-i):0}function Jr(i,e,t){return(1-t)*i+t*e}function n0(i,e,t,n){return Jr(i,e,1-Math.exp(-t*n))}function i0(i,e=1){return e-Math.abs(Au(i,e*2)-e)}function s0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function r0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function a0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function o0(i,e){return i+Math.random()*(e-i)}function l0(i){return i*(.5-Math.random())}function c0(i){i!==void 0&&(fd=i);let e=fd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function u0(i){return i*Zr}function h0(i){return i*nr}function d0(i){return(i&i-1)===0&&i!==0}function f0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function p0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function m0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),g=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*g,o*c);break;case"YXY":i.set(l*g,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*g,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Bf={DEG2RAD:Zr,RAD2DEG:nr,generateUUID:Ln,clamp:zt,euclideanModulo:Au,mapLinear:e0,inverseLerp:t0,lerp:Jr,damp:n0,pingpong:i0,smoothstep:s0,smootherstep:r0,randInt:a0,randFloat:o0,randFloatSpread:l0,seededRandom:c0,degToRad:u0,radToDeg:h0,isPowerOfTwo:d0,ceilPowerOfTwo:f0,floorPowerOfTwo:p0,setQuaternionFromProperEuler:m0,normalize:pt,denormalize:Cn},Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],g=n[5],m=n[8],x=s[0],p=s[3],f=s[6],y=s[1],b=s[4],M=s[7],C=s[2],E=s[5],T=s[8];return r[0]=a*x+o*y+l*C,r[3]=a*p+o*b+l*E,r[6]=a*f+o*M+l*T,r[1]=c*x+u*y+h*C,r[4]=c*p+u*b+h*E,r[7]=c*f+u*M+h*T,r[2]=d*x+g*y+m*C,r[5]=d*p+g*b+m*E,r[8]=d*f+g*M+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,g=c*r-a*l,m=t*h+n*d+s*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=g*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ml=new Ye;function zf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function g0(){let i=ea("canvas");return i.style.display="block",i}var pd={};function $r(i){i in pd||(pd[i]=!0,console.warn(i))}function x0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function _0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function y0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var et={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(i.r=$s(i.r),i.g=$s(i.g),i.b=$s(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ri?Vo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var md=[.64,.33,.3,.6,.15,.06],gd=[.2126,.7152,.0722],xd=[.3127,.329],_d=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yd=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[Yt]:{primaries:md,whitePoint:xd,transfer:Vo,toXYZ:_d,fromXYZ:yd,luminanceCoefficients:gd,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:md,whitePoint:xd,transfer:mt,toXYZ:_d,fromXYZ:yd,luminanceCoefficients:gd,outputColorSpaceConfig:{drawingBufferColorSpace:At}}});var ws,Oc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ws===void 0&&(ws=ea("canvas")),ws.width=e.width,ws.height=e.height;let n=ws.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ea("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},v0=0,uo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bl(s[a].image)):r.push(bl(s[a]))}else r=bl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function bl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Oc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var M0=0,Lt=class i extends oi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ii,s=ii,r=an,a=Vn,o=vn,l=ai,c=i.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Ln(),this.name="",this.source=new uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case ls:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case ls:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Af;Lt.DEFAULT_ANISOTROPY=1;var lt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],g=l[5],m=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(g+1)/2,C=(f+1)/2,E=(u+d)/4,T=(h+x)/4,I=(m+p)/4;return b>M&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=E/n,r=T/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=I/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=I/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-m)*(p-m)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fc=class extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Lt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},li=class extends Fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ho=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bc=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var on=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],g=r[a+1],m=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=g,e[t+2]=m,e[t+3]=x;return}if(h!==x||l!==d||c!==g||u!==m){let p=1-o,f=l*d+c*g+u*m+h*x,y=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let C=Math.sqrt(b),E=Math.atan2(C,f*y);p=Math.sin(p*E)/C,o=Math.sin(o*E)/C}let M=o*y;if(l=l*p+d*M,c=c*p+g*M,u=u*p+m*M,h=h*p+x*M,p===1-o){let C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],g=r[a+2],m=r[a+3];return e[t]=o*m+u*h+l*g-c*d,e[t+1]=l*m+u*d+c*h-o*g,e[t+2]=c*m+u*g+o*d-l*h,e[t+3]=u*m-o*h-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),g=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*g*m,this._y=c*g*h-d*u*m,this._z=c*u*m+d*g*h,this._w=c*u*h-d*g*m;break;case"YXZ":this._x=d*u*h+c*g*m,this._y=c*g*h-d*u*m,this._z=c*u*m-d*g*h,this._w=c*u*h+d*g*m;break;case"ZXY":this._x=d*u*h-c*g*m,this._y=c*g*h+d*u*m,this._z=c*u*m+d*g*h,this._w=c*u*h-d*g*m;break;case"ZYX":this._x=d*u*h-c*g*m,this._y=c*g*h+d*u*m,this._z=c*u*m-d*g*h,this._w=c*u*h+d*g*m;break;case"YZX":this._x=d*u*h+c*g*m,this._y=c*g*h+d*u*m,this._z=c*u*m-d*g*h,this._w=c*u*h-d*g*m;break;case"XZY":this._x=d*u*h-c*g*m,this._y=c*g*h-d*u*m,this._z=c*u*m+d*g*h,this._w=c*u*h+d*g*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>h){let g=2*Math.sqrt(1+n-o-h);this._w=(u-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>h){let g=2*Math.sqrt(1+o-n-h);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+u)/g}else{let g=2*Math.sqrt(1+h-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sl=new L,vd=new on,Ft=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Ra.subVectors(this.max,kr),Ts.subVectors(e.a,kr),Es.subVectors(e.b,kr),As.subVectors(e.c,kr),bi.subVectors(Es,Ts),Si.subVectors(As,Es),ji.subVectors(Ts,As);let t=[0,-bi.z,bi.y,0,-Si.z,Si.y,0,-ji.z,ji.y,bi.z,0,-bi.x,Si.z,0,-Si.x,ji.z,0,-ji.x,-bi.y,bi.x,0,-Si.y,Si.x,0,-ji.y,ji.x,0];return!wl(t,Ts,Es,As,Ra)||(t=[1,0,0,0,1,0,0,0,1],!wl(t,Ts,Es,As,Ra))?!1:(Ca.crossVectors(bi,Si),t=[Ca.x,Ca.y,Ca.z],wl(t,Ts,Es,As,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Kn=[new L,new L,new L,new L,new L,new L,new L,new L],En=new L,Aa=new Ft,Ts=new L,Es=new L,As=new L,bi=new L,Si=new L,ji=new L,kr=new L,Ra=new L,Ca=new L,Qi=new L;function wl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qi.fromArray(i,r);let o=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var b0=new Ft,Or=new L,Tl=new L,dn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):b0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(Tl)),this.expandByPoint(Or.copy(e.center).sub(Tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zn=new L,El=new L,Ia=new L,wi=new L,Al=new L,Pa=new L,Rl=new L,ir=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){El.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(El);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ia),o=wi.dot(this.direction),l=-wi.dot(Ia),c=wi.lengthSq(),u=Math.abs(1-a*a),h,d,g,m;if(u>0)if(h=a*l-o,d=a*o-l,m=r*u,h>=0)if(d>=-m)if(d<=m){let x=1/u;h*=x,d*=x,g=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),g=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),g=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(El).addScaledVector(Ia,d),g}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);let n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,s,r){Al.subVectors(t,e),Pa.subVectors(n,e),Rl.crossVectors(Al,Pa);let a=this.direction.dot(Rl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,e);let l=o*this.direction.dot(Pa.crossVectors(wi,Pa));if(l<0)return null;let c=o*this.direction.dot(Al.cross(wi));if(c<0||l+c>a)return null;let u=-o*wi.dot(Rl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,d,g,m,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,g,m,x,p)}set(e,t,n,s,r,a,o,l,c,u,h,d,g,m,x,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=g,f[7]=m,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),a=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,g=a*h,m=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=g+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+g*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,g=l*h,m=c*u,x=c*h;t[0]=d+x*o,t[4]=m*o-g,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=g*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,g=l*h,m=c*u,x=c*h;t[0]=d-x*o,t[4]=-a*h,t[8]=m+g*o,t[1]=g+m*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,g=a*h,m=o*u,x=o*h;t[0]=l*u,t[4]=m*c-g,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=g*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,g=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=m*h+g,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=g*h+m,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*l,g=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=a*u,t[9]=g*h-m,t[2]=m*h-g,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S0,e,w0)}lookAt(e,t,n){let s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),Ti.crossVectors(n,un),Ti.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ti.crossVectors(n,un)),Ti.normalize(),La.crossVectors(un,Ti),s[0]=Ti.x,s[4]=La.x,s[8]=un.x,s[1]=Ti.y,s[5]=La.y,s[9]=un.y,s[2]=Ti.z,s[6]=La.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],g=n[13],m=n[2],x=n[6],p=n[10],f=n[14],y=n[3],b=n[7],M=n[11],C=n[15],E=s[0],T=s[4],I=s[8],v=s[12],_=s[1],P=s[5],V=s[9],R=s[13],N=s[2],G=s[6],D=s[10],z=s[14],F=s[3],Y=s[7],ee=s[11],ae=s[15];return r[0]=a*E+o*_+l*N+c*F,r[4]=a*T+o*P+l*G+c*Y,r[8]=a*I+o*V+l*D+c*ee,r[12]=a*v+o*R+l*z+c*ae,r[1]=u*E+h*_+d*N+g*F,r[5]=u*T+h*P+d*G+g*Y,r[9]=u*I+h*V+d*D+g*ee,r[13]=u*v+h*R+d*z+g*ae,r[2]=m*E+x*_+p*N+f*F,r[6]=m*T+x*P+p*G+f*Y,r[10]=m*I+x*V+p*D+f*ee,r[14]=m*v+x*R+p*z+f*ae,r[3]=y*E+b*_+M*N+C*F,r[7]=y*T+b*P+M*G+C*Y,r[11]=y*I+b*V+M*D+C*ee,r[15]=y*v+b*R+M*z+C*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],g=e[14],m=e[3],x=e[7],p=e[11],f=e[15];return m*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*g-n*l*g)+x*(+t*l*g-t*c*d+r*a*d-s*a*g+s*c*u-r*l*u)+p*(+t*c*h-t*o*g-r*a*h+n*a*g+r*o*u-n*c*u)+f*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],g=e[11],m=e[12],x=e[13],p=e[14],f=e[15],y=h*p*c-x*d*c+x*l*g-o*p*g-h*l*f+o*d*f,b=m*d*c-u*p*c-m*l*g+a*p*g+u*l*f-a*d*f,M=u*x*c-m*h*c+m*o*g-a*x*g-u*o*f+a*h*f,C=m*h*l-u*x*l-m*o*d+a*x*d+u*o*p-a*h*p,E=t*y+n*b+s*M+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return e[0]=y*T,e[1]=(x*d*r-h*p*r-x*s*g+n*p*g+h*s*f-n*d*f)*T,e[2]=(o*p*r-x*l*r+x*s*c-n*p*c-o*s*f+n*l*f)*T,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*g-n*l*g)*T,e[4]=b*T,e[5]=(u*p*r-m*d*r+m*s*g-t*p*g-u*s*f+t*d*f)*T,e[6]=(m*l*r-a*p*r-m*s*c+t*p*c+a*s*f-t*l*f)*T,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*g+t*l*g)*T,e[8]=M*T,e[9]=(m*h*r-u*x*r-m*n*g+t*x*g+u*n*f-t*h*f)*T,e[10]=(a*x*r-m*o*r+m*n*c-t*x*c-a*n*f+t*o*f)*T,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*g-t*o*g)*T,e[12]=C*T,e[13]=(u*x*s-m*h*s+m*n*d-t*x*d-u*n*p+t*h*p)*T,e[14]=(m*o*s-a*x*s-m*n*l+t*x*l+a*n*p-t*o*p)*T,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,g=r*u,m=r*h,x=a*u,p=a*h,f=o*h,y=l*c,b=l*u,M=l*h,C=n.x,E=n.y,T=n.z;return s[0]=(1-(x+f))*C,s[1]=(g+M)*C,s[2]=(m-b)*C,s[3]=0,s[4]=(g-M)*E,s[5]=(1-(d+f))*E,s[6]=(p+y)*E,s[7]=0,s[8]=(m+b)*T,s[9]=(p-y)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Rs.set(s[0],s[1],s[2]).length(),a=Rs.set(s[4],s[5],s[6]).length(),o=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);let c=1/r,u=1/a,h=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,t.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=si){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),g,m;if(o===si)g=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===co)g=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=si){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*c,g=(n+s)*u,m,x;if(o===si)m=(a+r)*h,x=-2*h;else if(o===co)m=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rs=new L,An=new We,S0=new L(0,0,0),w0=new L(1,1,1),Ti=new L,La=new L,un=new L,Md=new We,bd=new on,Wn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Md.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Md,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bd.setFromEuler(this),this.setFromQuaternion(bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var fo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},T0=0,Sd=new L,Cs=new on,Jn=new We,Da=new L,Fr=new L,E0=new L,A0=new on,wd=new L(1,0,0),Td=new L(0,1,0),Ed=new L(0,0,1),Ad={type:"added"},R0={type:"removed"},Is={type:"childadded",child:null},Cl={type:"childremoved",child:null},bt=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Wn,n=new on,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Ye}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(wd,e)}rotateY(e){return this.rotateOnAxis(Td,e)}rotateZ(e){return this.rotateOnAxis(Ed,e)}translateOnAxis(e,t){return Sd.copy(e).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wd,e)}translateY(e){return this.translateOnAxis(Td,e)}translateZ(e){return this.translateOnAxis(Ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Da.copy(e):Da.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Fr,Da,this.up):Jn.lookAt(Da,Fr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(Jn),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ad),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R0),Cl.child=e,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ad),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,E0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,A0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),g=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};bt.DEFAULT_UP=new L(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new L,jn=new L,Il=new L,Qn=new L,Ps=new L,Ls=new L,Rd=new L,Pl=new L,Ll=new L,Dl=new L,Nl=new lt,Ul=new lt,kl=new lt,Ci=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),jn.subVectors(n,t),Il.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(jn),l=Rn.dot(Il),c=jn.dot(jn),u=jn.dot(Il),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,g=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-g-m,m,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Nl.setScalar(0),Ul.setScalar(0),kl.setScalar(0),Nl.fromBufferAttribute(e,t),Ul.fromBufferAttribute(e,n),kl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Nl,r.x),a.addScaledVector(Ul,r.y),a.addScaledVector(kl,r.z),a}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),jn.subVectors(e,t),Rn.cross(jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Rn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ps.subVectors(s,n),Ls.subVectors(r,n),Pl.subVectors(e,n);let l=Ps.dot(Pl),c=Ls.dot(Pl);if(l<=0&&c<=0)return t.copy(n);Ll.subVectors(e,s);let u=Ps.dot(Ll),h=Ls.dot(Ll);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ps,a);Dl.subVectors(e,r);let g=Ps.dot(Dl),m=Ls.dot(Dl);if(m>=0&&g<=m)return t.copy(r);let x=g*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Ls,o);let p=u*m-g*h;if(p<=0&&h-u>=0&&g-m>=0)return Rd.subVectors(r,s),o=(h-u)/(h-u+(g-m)),t.copy(s).addScaledVector(Rd,o);let f=1/(p+x+d);return a=x*f,o=d*f,t.copy(n).addScaledVector(Ps,a).addScaledVector(Ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Na={h:0,s:0,l:0};function Ol(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Au(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ol(a,r,e+1/3),this.g=Ol(a,r,e),this.b=Ol(a,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=Hf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return et.fromWorkingColorSpace(qt.copy(this),e),Math.round(zt(qt.r*255,0,255))*65536+Math.round(zt(qt.g*255,0,255))*256+Math.round(zt(qt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(qt.copy(this),t);let n=qt.r,s=qt.g,r=qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=At){et.fromWorkingColorSpace(qt.copy(this),e);let t=qt.r,n=qt.g,s=qt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Na);let n=Jr(Ei.h,Na.h,t),s=Jr(Ei.s,Na.s,t),r=Jr(Ei.l,Na.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Re;Re.NAMES=Hf;var C0=0,Qt=class extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Ln(),this.name="",this.blending=Pn,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=ec,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pn&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ql&&(n.blendSrc=this.blendSrc),this.blendDst!==ec&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ct=class extends Qt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pt=new L,Ua=new Ne,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kc&&(e.usage=this.usage),e}};var po=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var mo=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},I0=0,yn=new We,Fl=new bt,Ds=new L,hn=new Ft,Br=new Ft,kt=new L,wt=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zf(e)?mo:po)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return Fl.lookAt(e),Fl.updateMatrix(),this.applyMatrix4(Fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(hn.min,Br.min),hn.expandByPoint(kt),kt.addVectors(hn.max,Br.max),hn.expandByPoint(kt)):(hn.expandByPoint(Br.min),hn.expandByPoint(Br.max))}hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)kt.fromBufferAttribute(o,c),l&&(Ds.fromBufferAttribute(e,c),kt.add(Ds)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new L,l[I]=new L;let c=new L,u=new L,h=new L,d=new Ne,g=new Ne,m=new Ne,x=new L,p=new L;function f(I,v,_){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,_),d.fromBufferAttribute(r,I),g.fromBufferAttribute(r,v),m.fromBufferAttribute(r,_),u.sub(c),h.sub(c),g.sub(d),m.sub(d);let P=1/(g.x*m.y-m.x*g.y);isFinite(P)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-g.y).multiplyScalar(P),p.copy(h).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar(P),o[I].add(x),o[v].add(x),o[_].add(x),l[I].add(p),l[v].add(p),l[_].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,v=y.length;I<v;++I){let _=y[I],P=_.start,V=_.count;for(let R=P,N=P+V;R<N;R+=3)f(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let b=new L,M=new L,C=new L,E=new L;function T(I){C.fromBufferAttribute(s,I),E.copy(C);let v=o[I];b.copy(v),b.sub(C.multiplyScalar(C.dot(v))).normalize(),M.crossVectors(E,v);let P=M.dot(l[I])<0?-1:1;a.setXYZW(I,b.x,b.y,b.z,P)}for(let I=0,v=y.length;I<v;++I){let _=y[I],P=_.start,V=_.count;for(let R=P,N=P+V;R<N;R+=3)T(e.getX(R+0)),T(e.getX(R+1)),T(e.getX(R+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,g=e.count;d<g;d+=3){let m=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=t.count;d<g;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),g=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?g=l[x]*o.data.stride+o.offset:g=l[x]*u;for(let f=0;f<u;f++)d[m++]=c[g++]}return new Et(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],g=e(d,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let g=c[h];u.push(g.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,g=h.length;d<g;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cd=new We,es=new ir,ka=new dn,Id=new L,Oa=new L,Fa=new L,Ba=new L,Bl=new L,za=new L,Pd=new L,Ha=new L,Pe=class extends bt{constructor(e=new wt,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){za.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Bl.fromBufferAttribute(h,e),a?za.addScaledVector(Bl,u):za.addScaledVector(Bl.sub(t),u))}t.add(za)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(ka.containsPoint(es.origin)===!1&&(es.intersectSphere(ka,Id)===null||es.origin.distanceToSquared(Id)>(e.far-e.near)**2))&&(Cd.copy(r).invert(),es.copy(e.ray).applyMatrix4(Cd),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let p=d[m],f=a[p.materialIndex],y=Math.max(p.start,g.start),b=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let M=y,C=b;M<C;M+=3){let E=o.getX(M),T=o.getX(M+1),I=o.getX(M+2);s=Va(this,f,e,n,c,u,h,E,T,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let p=m,f=x;p<f;p+=3){let y=o.getX(p),b=o.getX(p+1),M=o.getX(p+2);s=Va(this,a,e,n,c,u,h,y,b,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let p=d[m],f=a[p.materialIndex],y=Math.max(p.start,g.start),b=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let M=y,C=b;M<C;M+=3){let E=M,T=M+1,I=M+2;s=Va(this,f,e,n,c,u,h,E,T,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let p=m,f=x;p<f;p+=3){let y=p,b=p+1,M=p+2;s=Va(this,a,e,n,c,u,h,y,b,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function P0(i,e,t,n,s,r,a,o){let l;if(e.side===$t?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Mn,o),l===null)return null;Ha.copy(o),Ha.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ha);return c<t.near||c>t.far?null:{distance:c,point:Ha.clone(),object:i}}function Va(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Oa),i.getVertexPosition(l,Fa),i.getVertexPosition(c,Ba);let u=P0(i,e,t,n,Oa,Fa,Ba,Pd);if(u){let h=new L;Ci.getBarycoord(Pd,Oa,Fa,Ba,h),s&&(u.uv=Ci.getInterpolatedAttribute(s,o,l,c,h,new Ne)),r&&(u.uv1=Ci.getInterpolatedAttribute(r,o,l,c,h,new Ne)),a&&(u.normal=Ci.getInterpolatedAttribute(a,o,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};Ci.getNormal(Oa,Fa,Ba,d.normal),u.face=d,u.barycoord=h}return u}var fn=class i extends wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,g=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2));function m(x,p,f,y,b,M,C,E,T,I,v){let _=M/T,P=C/I,V=M/2,R=C/2,N=E/2,G=T+1,D=I+1,z=0,F=0,Y=new L;for(let ee=0;ee<D;ee++){let ae=ee*P-R;for(let _e=0;_e<G;_e++){let ke=_e*_-V;Y[x]=ke*y,Y[p]=ae*b,Y[f]=N,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[f]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(_e/T),h.push(1-ee/I),z+=1}}for(let ee=0;ee<I;ee++)for(let ae=0;ae<T;ae++){let _e=d+ae+G*ee,ke=d+ae+G*(ee+1),H=d+(ae+1)+G*(ee+1),Z=d+(ae+1)+G*ee;l.push(_e,ke,Z),l.push(ke,H,Z),F+=6}o.addGroup(g,F,v),g+=F,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function sr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function jt(i){let e={};for(let t=0;t<i.length;t++){let n=sr(i[t]);for(let s in n)e[s]=n[s]}return e}function L0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var D0={clone:sr,merge:jt},N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends Qt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=U0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=L0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},go=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ai=new L,Ld=new Ne,Dd=new Ne,Dt=class extends go{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,Ld,Dd),t.subVectors(Dd,Ld)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ns=-90,Us=1,zc=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dt(Ns,Us,e,t);s.layers=this.layers,this.add(s);let r=new Dt(Ns,Us,e,t);r.layers=this.layers,this.add(r);let a=new Dt(Ns,Us,e,t);a.layers=this.layers,this.add(a);let o=new Dt(Ns,Us,e,t);o.layers=this.layers,this.add(o);let l=new Dt(Ns,Us,e,t);l.layers=this.layers,this.add(l);let c=new Dt(Ns,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,g),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},xo=class extends Lt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hc=class extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new xo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fn(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Pi});r.uniforms.tEquirect.value=t;let a=new Pe(s,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=an),new zc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},zl=new L,k0=new L,O0=new Ye,ni=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zl.subVectors(n,t).cross(k0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(zl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||O0.getNormalMatrix(e),s=this.coplanarPoint(zl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new dn,Ga=new L,ta=class{constructor(e=new ni,t=new ni,n=new ni,s=new ni,r=new ni,a=new ni){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],g=s[8],m=s[9],x=s[10],p=s[11],f=s[12],y=s[13],b=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,p-g,M-f).normalize(),n[1].setComponents(l+r,d+c,p+g,M+f).normalize(),n[2].setComponents(l+a,d+u,p+m,M+y).normalize(),n[3].setComponents(l-a,d-u,p-m,M-y).normalize(),n[4].setComponents(l-o,d-h,p-x,M-b).normalize(),t===si)n[5].setComponents(l+o,d+h,p+x,M+b).normalize();else if(t===co)n[5].setComponents(o,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ga.x=s.normal.x>0?e.max.x:e.min.x,Ga.y=s.normal.y>0?e.max.y:e.min.y,Ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function F0(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((g,m)=>g.start-m.start);let d=0;for(let g=1;g<h.length;g++){let m=h[d],x=h[g];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,h[d]=x)}h.length=d+1;for(let g=0,m=h.length;g<m;g++){let x=h[g];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Dn=class i extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,g=[],m=[],x=[],p=[];for(let f=0;f<u;f++){let y=f*d-a;for(let b=0;b<c;b++){let M=b*h-r;m.push(M,-y,0),x.push(0,0,1),p.push(b/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let b=y+c*f,M=y+c*(f+1),C=y+1+c*(f+1),E=y+1+c*f;g.push(b,M,E),g.push(M,C,E)}this.setIndex(g),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},B0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z0=`#ifdef USE_ALPHAHASH
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
#endif`,H0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X0=`#ifdef USE_AOMAP
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
#endif`,q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$0=`#ifdef USE_BATCHING
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
#endif`,Y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j0=`#ifdef USE_IRIDESCENCE
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
#endif`,Q0=`#ifdef USE_BUMPMAP
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
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lx=`#define PI 3.141592653589793
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
} // validated`,cx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ux=`vec3 transformedNormal = objectNormal;
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
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ex=`#ifdef USE_GRADIENTMAP
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
}`,Ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ix=`uniform bool receiveShadow;
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
#endif`,Px=`#ifdef USE_ENVMAP
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
#endif`,Lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kx=`PhysicalMaterial material;
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
#endif`,Ox=`struct PhysicalMaterial {
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
}`,Fx=`
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
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
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
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yx=`#if defined( USE_POINTS_UV )
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
#endif`,Kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`#ifdef USE_MORPHTARGETS
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
#endif`,t_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o_=`#ifdef USE_NORMALMAP
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
#endif`,l_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,__=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S_=`float getShadowMask() {
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
}`,w_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T_=`#ifdef USE_SKINNING
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
#endif`,E_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A_=`#ifdef USE_SKINNING
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
#endif`,R_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L_=`#ifdef USE_TRANSMISSION
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
#endif`,D_=`#ifdef USE_TRANSMISSION
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,F_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B_=`uniform sampler2D t2D;
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
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`#include <common>
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
}`,X_=`#if DEPTH_PACKING == 3200
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
}`,q_=`#define DISTANCE
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
}`,$_=`#define DISTANCE
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
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`uniform float scale;
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
}`,J_=`uniform vec3 diffuse;
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
}`,j_=`#include <common>
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
}`,Q_=`uniform vec3 diffuse;
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
}`,ey=`#define LAMBERT
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
}`,ty=`#define LAMBERT
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
}`,ny=`#define MATCAP
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
}`,iy=`#define MATCAP
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
}`,sy=`#define NORMAL
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
}`,ry=`#define NORMAL
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
}`,ay=`#define PHONG
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
}`,oy=`#define PHONG
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
}`,ly=`#define STANDARD
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
}`,cy=`#define STANDARD
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
}`,uy=`#define TOON
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
}`,hy=`#define TOON
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
}`,dy=`uniform float size;
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
}`,fy=`uniform vec3 diffuse;
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
}`,py=`#include <common>
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
}`,my=`uniform vec3 color;
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
}`,gy=`uniform float rotation;
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
}`,xy=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:B0,alphahash_pars_fragment:z0,alphamap_fragment:H0,alphamap_pars_fragment:V0,alphatest_fragment:G0,alphatest_pars_fragment:W0,aomap_fragment:X0,aomap_pars_fragment:q0,batching_pars_vertex:$0,batching_vertex:Y0,begin_vertex:K0,beginnormal_vertex:Z0,bsdfs:J0,iridescence_fragment:j0,bumpmap_pars_fragment:Q0,clipping_planes_fragment:ex,clipping_planes_pars_fragment:tx,clipping_planes_pars_vertex:nx,clipping_planes_vertex:ix,color_fragment:sx,color_pars_fragment:rx,color_pars_vertex:ax,color_vertex:ox,common:lx,cube_uv_reflection_fragment:cx,defaultnormal_vertex:ux,displacementmap_pars_vertex:hx,displacementmap_vertex:dx,emissivemap_fragment:fx,emissivemap_pars_fragment:px,colorspace_fragment:mx,colorspace_pars_fragment:gx,envmap_fragment:xx,envmap_common_pars_fragment:_x,envmap_pars_fragment:yx,envmap_pars_vertex:vx,envmap_physical_pars_fragment:Px,envmap_vertex:Mx,fog_vertex:bx,fog_pars_vertex:Sx,fog_fragment:wx,fog_pars_fragment:Tx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:Ax,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:Cx,lights_pars_begin:Ix,lights_toon_fragment:Lx,lights_toon_pars_fragment:Dx,lights_phong_fragment:Nx,lights_phong_pars_fragment:Ux,lights_physical_fragment:kx,lights_physical_pars_fragment:Ox,lights_fragment_begin:Fx,lights_fragment_maps:Bx,lights_fragment_end:zx,logdepthbuf_fragment:Hx,logdepthbuf_pars_fragment:Vx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:Wx,map_fragment:Xx,map_pars_fragment:qx,map_particle_fragment:$x,map_particle_pars_fragment:Yx,metalnessmap_fragment:Kx,metalnessmap_pars_fragment:Zx,morphinstance_vertex:Jx,morphcolor_vertex:jx,morphnormal_vertex:Qx,morphtarget_pars_vertex:e_,morphtarget_vertex:t_,normal_fragment_begin:n_,normal_fragment_maps:i_,normal_pars_fragment:s_,normal_pars_vertex:r_,normal_vertex:a_,normalmap_pars_fragment:o_,clearcoat_normal_fragment_begin:l_,clearcoat_normal_fragment_maps:c_,clearcoat_pars_fragment:u_,iridescence_pars_fragment:h_,opaque_fragment:d_,packing:f_,premultiplied_alpha_fragment:p_,project_vertex:m_,dithering_fragment:g_,dithering_pars_fragment:x_,roughnessmap_fragment:__,roughnessmap_pars_fragment:y_,shadowmap_pars_fragment:v_,shadowmap_pars_vertex:M_,shadowmap_vertex:b_,shadowmask_pars_fragment:S_,skinbase_vertex:w_,skinning_pars_vertex:T_,skinning_vertex:E_,skinnormal_vertex:A_,specularmap_fragment:R_,specularmap_pars_fragment:C_,tonemapping_fragment:I_,tonemapping_pars_fragment:P_,transmission_fragment:L_,transmission_pars_fragment:D_,uv_pars_fragment:N_,uv_pars_vertex:U_,uv_vertex:k_,worldpos_vertex:O_,background_vert:F_,background_frag:B_,backgroundCube_vert:z_,backgroundCube_frag:H_,cube_vert:V_,cube_frag:G_,depth_vert:W_,depth_frag:X_,distanceRGBA_vert:q_,distanceRGBA_frag:$_,equirect_vert:Y_,equirect_frag:K_,linedashed_vert:Z_,linedashed_frag:J_,meshbasic_vert:j_,meshbasic_frag:Q_,meshlambert_vert:ey,meshlambert_frag:ty,meshmatcap_vert:ny,meshmatcap_frag:iy,meshnormal_vert:sy,meshnormal_frag:ry,meshphong_vert:ay,meshphong_frag:oy,meshphysical_vert:ly,meshphysical_frag:cy,meshtoon_vert:uy,meshtoon_frag:hy,points_vert:dy,points_frag:fy,shadow_vert:py,shadow_frag:my,sprite_vert:gy,sprite_frag:xy},ue={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Hn={basic:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Re(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:jt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:jt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Re(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:jt([ue.points,ue.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:jt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:jt([ue.common,ue.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:jt([ue.sprite,ue.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:jt([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:jt([ue.lights,ue.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Hn.physical={uniforms:jt([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Wa={r:0,b:0,g:0},ns=new Wn,_y=new We;function yy(i,e,t,n,s,r,a){let o=new Re(0),l=r===!0?0:1,c,u,h=null,d=0,g=null;function m(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function x(y){let b=!1,M=m(y);M===null?f(o,l):M&&M.isColor&&(f(M,1),b=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,b){let M=m(b);M&&(M.isCubeTexture||M.mapping===zo)?(u===void 0&&(u=new Pe(new fn(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:sr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ns.copy(b.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_y.makeRotationFromEuler(ns)),u.material.toneMapped=et.getTransfer(M.colorSpace)!==mt,(h!==M||d!==M.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,g=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Pe(new Dn(2,2),new en({name:"BackgroundMaterial",uniforms:sr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=et.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,g=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,b){y.getRGB(Wa,Vf(i)),n.buffers.color.setClear(Wa.r,Wa.g,Wa.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:x,addToRenderList:p}}function vy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(_,P,V,R,N){let G=!1,D=h(R,V,P);r!==D&&(r=D,c(r.object)),G=g(_,R,V,N),G&&m(_,R,V,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(_,P,V,R),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,P,V){let R=V.wireframe===!0,N=n[_.id];N===void 0&&(N={},n[_.id]=N);let G=N[P.id];G===void 0&&(G={},N[P.id]=G);let D=G[R];return D===void 0&&(D=d(l()),G[R]=D),D}function d(_){let P=[],V=[],R=[];for(let N=0;N<t;N++)P[N]=0,V[N]=0,R[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:R,object:_,attributes:{},index:null}}function g(_,P,V,R){let N=r.attributes,G=P.attributes,D=0,z=V.getAttributes();for(let F in z)if(z[F].location>=0){let ee=N[F],ae=G[F];if(ae===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor)),ee===void 0||ee.attribute!==ae||ae&&ee.data!==ae.data)return!0;D++}return r.attributesNum!==D||r.index!==R}function m(_,P,V,R){let N={},G=P.attributes,D=0,z=V.getAttributes();for(let F in z)if(z[F].location>=0){let ee=G[F];ee===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(ee=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(ee=_.instanceColor));let ae={};ae.attribute=ee,ee&&ee.data&&(ae.data=ee.data),N[F]=ae,D++}r.attributes=N,r.attributesNum=D,r.index=R}function x(){let _=r.newAttributes;for(let P=0,V=_.length;P<V;P++)_[P]=0}function p(_){f(_,0)}function f(_,P){let V=r.newAttributes,R=r.enabledAttributes,N=r.attributeDivisors;V[_]=1,R[_]===0&&(i.enableVertexAttribArray(_),R[_]=1),N[_]!==P&&(i.vertexAttribDivisor(_,P),N[_]=P)}function y(){let _=r.newAttributes,P=r.enabledAttributes;for(let V=0,R=P.length;V<R;V++)P[V]!==_[V]&&(i.disableVertexAttribArray(V),P[V]=0)}function b(_,P,V,R,N,G,D){D===!0?i.vertexAttribIPointer(_,P,V,N,G):i.vertexAttribPointer(_,P,V,R,N,G)}function M(_,P,V,R){x();let N=R.attributes,G=V.getAttributes(),D=P.defaultAttributeValues;for(let z in G){let F=G[z];if(F.location>=0){let Y=N[z];if(Y===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(Y=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(Y=_.instanceColor)),Y!==void 0){let ee=Y.normalized,ae=Y.itemSize,_e=e.get(Y);if(_e===void 0)continue;let ke=_e.buffer,H=_e.type,Z=_e.bytesPerElement,oe=H===i.INT||H===i.UNSIGNED_INT||Y.gpuType===gu;if(Y.isInterleavedBufferAttribute){let W=Y.data,ye=W.stride,le=Y.offset;if(W.isInstancedInterleavedBuffer){for(let pe=0;pe<F.locationSize;pe++)f(F.location+pe,W.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let pe=0;pe<F.locationSize;pe++)p(F.location+pe);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let pe=0;pe<F.locationSize;pe++)b(F.location+pe,ae/F.locationSize,H,ee,ye*Z,(le+ae/F.locationSize*pe)*Z,oe)}else{if(Y.isInstancedBufferAttribute){for(let W=0;W<F.locationSize;W++)f(F.location+W,Y.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let W=0;W<F.locationSize;W++)p(F.location+W);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let W=0;W<F.locationSize;W++)b(F.location+W,ae/F.locationSize,H,ee,ae*Z,ae/F.locationSize*W*Z,oe)}}else if(D!==void 0){let ee=D[z];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(F.location,ee);break;case 3:i.vertexAttrib3fv(F.location,ee);break;case 4:i.vertexAttrib4fv(F.location,ee);break;default:i.vertexAttrib1fv(F.location,ee)}}}}y()}function C(){I();for(let _ in n){let P=n[_];for(let V in P){let R=P[V];for(let N in R)u(R[N].object),delete R[N];delete P[V]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;let P=n[_.id];for(let V in P){let R=P[V];for(let N in R)u(R[N].object),delete R[N];delete P[V]}delete n[_.id]}function T(_){for(let P in n){let V=n[P];if(V[_.id]===void 0)continue;let R=V[_.id];for(let N in R)u(R[N].object),delete R[N];delete V[_.id]}}function I(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:v,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function My(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let g=0;for(let m=0;m<h;m++)g+=u[m];t.update(g,n,1)}function l(c,u,h,d){if(h===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<c.length;m++)a(c[m],u[m],d[m]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x]*d[x];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function by(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let I=T===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ai&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==In&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:g,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:C,maxSamples:E}}function Sy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ni,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let g=h.length!==0||d||n!==0||s;return s=d,n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,g){let m=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{let y=r?0:n,b=y*4,M=f.clippingState||null;l.value=M,M=u(m,d,b,g);for(let C=0;C!==b;++C)M[C]=t[C];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,g,m){let x=h!==null?h.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let f=g+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,M=g;b!==x;++b,M+=4)a.copy(h[b]).applyMatrix4(y,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function wy(i){let e=new WeakMap;function t(a,o){return o===lc?a.mapping=Zs:o===cc&&(a.mapping=Js),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===lc||o===cc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Hc(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var rr=class extends go{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xs=4,Nd=[.125,.215,.35,.446,.526,.582],as=20,Hl=new rr,Ud=new Re,Vl=null,Gl=0,Wl=0,Xl=!1,ss=(1+Math.sqrt(5))/2,ks=1/ss,kd=[new L(-ss,ks,0),new L(ss,ks,0),new L(-ks,0,ss),new L(ks,0,ss),new L(0,ss,-ks),new L(0,ss,ks),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],_o=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Vl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vl,Gl,Wl),this._renderer.xr.enabled=Xl,e.scissorTest=!1,Xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:oa,format:vn,colorSpace:Yt,depthBuffer:!1},s=Od(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Od(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ty(r)),this._blurMaterial=Ey(r,e,t)}return s}_compileMaterial(e){let t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,Hl)}_sceneToCubeUV(e,t,n,s){let o=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ud),u.toneMapping=Li,u.autoClear=!1;let g=new Ct({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),m=new Pe(new fn,g),x=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,x=!0):(g.color.copy(Ud),x=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let b=this._cubeSize;Xa(s,y*b,f>2?b:0,b,b),u.setRenderTarget(s),x&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Zs||e.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Xa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Hl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kd[(s-r-1)%kd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Pe(this._lodPlanes[s],c),d=c.uniforms,g=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*as-1),x=r/m,p=isFinite(r)?1+Math.floor(u*x):as;p>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${as}`);let f=[],y=0;for(let T=0;T<as;++T){let I=T/x,v=Math.exp(-I*I/2);f.push(v),T===0?y+=v:T<p&&(y+=2*v)}for(let T=0;T<f.length;T++)f[T]=f[T]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-n;let M=this._sizeLods[s],C=3*M*(s>b-Xs?s-b+Xs:0),E=4*(this._cubeSize-M);Xa(t,C,E,3*M,2*M),l.setRenderTarget(t),l.render(h,Hl)}};function Ty(i){let e=[],t=[],n=[],s=i,r=i-Xs+1+Nd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Xs?l=Nd[a-i+Xs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,m=6,x=3,p=2,f=1,y=new Float32Array(x*m*g),b=new Float32Array(p*m*g),M=new Float32Array(f*m*g);for(let E=0;E<g;E++){let T=E%3*2/3-1,I=E>2?0:-1,v=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];y.set(v,x*m*E),b.set(d,p*m*E);let _=[E,E,E,E,E,E];M.set(_,f*m*E)}let C=new wt;C.setAttribute("position",new Et(y,x)),C.setAttribute("uv",new Et(b,p)),C.setAttribute("faceIndex",new Et(M,f)),e.push(C),s>Xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Od(i,e,t){let n=new li(i,e,t);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ey(i,e,t){let n=new Float32Array(as),s=new L(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Fd(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Bd(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Ru(){return`

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
	`}function Ay(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===lc||l===cc,u=l===Zs||l===Js;if(c||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new _o(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let g=o.image;return c&&g&&g.height>0||u&&g&&s(g)?(t===null&&(t=new _o(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ry(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&$r("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cy(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete s[d.id];let g=r.get(d);g&&(e.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER);let g=h.morphAttributes;for(let m in g){let x=g[m];for(let p=0,f=x.length;p<f;p++)e.update(x[p],i.ARRAY_BUFFER)}}function c(h){let d=[],g=h.index,m=h.attributes.position,x=0;if(g!==null){let y=g.array;x=g.version;for(let b=0,M=y.length;b<M;b+=3){let C=y[b+0],E=y[b+1],T=y[b+2];d.push(C,E,E,T,T,C)}}else if(m!==void 0){let y=m.array;x=m.version;for(let b=0,M=y.length/3-1;b<M;b+=3){let C=b+0,E=b+1,T=b+2;d.push(C,E,E,T,T,C)}}else return;let p=new(zf(d)?mo:po)(d,1);p.version=x;let f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){let d=r.get(h);if(d){let g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Iy(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,g){i.drawElements(n,g,r,d*a),t.update(g,n,1)}function c(d,g,m){m!==0&&(i.drawElementsInstanced(n,g,r,d*a,m),t.update(g,n,m))}function u(d,g,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,d,0,m);let p=0;for(let f=0;f<m;f++)p+=g[f];t.update(p,n,1)}function h(d,g,m,x){if(m===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,g[f],x[f]);else{p.multiDrawElementsInstancedWEBGL(n,g,0,r,d,0,x,0,m);let f=0;for(let y=0;y<m;y++)f+=g[y]*x[y];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Py(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ly(i,e,t){let n=new WeakMap,s=new lt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let v=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;g===!0&&(b=1),m===!0&&(b=2),x===!0&&(b=3);let M=o.attributes.position.count*b,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*C*4*h),T=new ho(E,M,C,h);T.type=In,T.needsUpdate=!0;let I=b*4;for(let _=0;_<h;_++){let P=p[_],V=f[_],R=y[_],N=M*C*4*_;for(let G=0;G<P.count;G++){let D=G*I;g===!0&&(s.fromBufferAttribute(P,G),E[N+D+0]=s.x,E[N+D+1]=s.y,E[N+D+2]=s.z,E[N+D+3]=0),m===!0&&(s.fromBufferAttribute(V,G),E[N+D+4]=s.x,E[N+D+5]=s.y,E[N+D+6]=s.z,E[N+D+7]=0),x===!0&&(s.fromBufferAttribute(R,G),E[N+D+8]=s.x,E[N+D+9]=s.y,E[N+D+10]=s.z,E[N+D+11]=R.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new Ne(M,C)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];let m=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Dy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var yo=class extends Lt{constructor(e,t,n,s,r,a,o,l,c,u=qs){if(u!==qs&&u!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qs&&(n=cs),n===void 0&&u===Qs&&(n=js),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Wf=new Lt,zd=new yo(1,1),Xf=new ho,qf=new Bc,$f=new xo,Hd=[],Vd=[],Gd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function gr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hd[s];if(r===void 0&&(r=new Float32Array(s),Hd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Go(i,e){let t=Vd[e];t===void 0&&(t=new Int32Array(e),Vd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ny(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function Fy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Xd.set(n),i.uniformMatrix2fv(this.addr,!1,Xd),Ut(t,n)}}function By(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Wd.set(n),i.uniformMatrix3fv(this.addr,!1,Wd),Ut(t,n)}}function zy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Gd.set(n),i.uniformMatrix4fv(this.addr,!1,Gd),Ut(t,n)}}function Hy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function Xy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function Yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function Ky(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zd.compareFunction=Ff,r=zd):r=Wf,t.setTexture2D(e||r,s)}function Zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qf,s)}function Jy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||$f,s)}function jy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xf,s)}function Qy(i){switch(i){case 5126:return Ny;case 35664:return Uy;case 35665:return ky;case 35666:return Oy;case 35674:return Fy;case 35675:return By;case 35676:return zy;case 5124:case 35670:return Hy;case 35667:case 35671:return Vy;case 35668:case 35672:return Gy;case 35669:case 35673:return Wy;case 5125:return Xy;case 36294:return qy;case 36295:return $y;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return jy}}function ev(i,e){i.uniform1fv(this.addr,e)}function tv(i,e){let t=gr(e,this.size,2);i.uniform2fv(this.addr,t)}function nv(i,e){let t=gr(e,this.size,3);i.uniform3fv(this.addr,t)}function iv(i,e){let t=gr(e,this.size,4);i.uniform4fv(this.addr,t)}function sv(i,e){let t=gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rv(i,e){let t=gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function av(i,e){let t=gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ov(i,e){i.uniform1iv(this.addr,e)}function lv(i,e){i.uniform2iv(this.addr,e)}function cv(i,e){i.uniform3iv(this.addr,e)}function uv(i,e){i.uniform4iv(this.addr,e)}function hv(i,e){i.uniform1uiv(this.addr,e)}function dv(i,e){i.uniform2uiv(this.addr,e)}function fv(i,e){i.uniform3uiv(this.addr,e)}function pv(i,e){i.uniform4uiv(this.addr,e)}function mv(i,e,t){let n=this.cache,s=e.length,r=Go(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Wf,r[a])}function gv(i,e,t){let n=this.cache,s=e.length,r=Go(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||qf,r[a])}function xv(i,e,t){let n=this.cache,s=e.length,r=Go(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||$f,r[a])}function _v(i,e,t){let n=this.cache,s=e.length,r=Go(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Xf,r[a])}function yv(i){switch(i){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return av;case 5124:case 35670:return ov;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return uv;case 5125:return hv;case 36294:return dv;case 36295:return fv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return _v}}var Vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qy(t.type)}},Gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yv(t.type)}},Wc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ql=/(\w+)(\])?(\[|\.)?/g;function qd(i,e){i.seq.push(e),i.map[e.id]=e}function vv(i,e,t){let n=i.name,s=n.length;for(ql.lastIndex=0;;){let r=ql.exec(n),a=ql.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){qd(t,c===void 0?new Vc(o,i,e):new Gc(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Wc(o),qd(t,h)),t=h}}}var Ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);vv(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function $d(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Mv=37297,bv=0;function Sv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Yd=new Ye;function wv(i){et._getMatrix(Yd,et.workingColorSpace,i);let e=`mat3( ${Yd.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Vo:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Sv(i.getShaderSource(e),a)}else return s}function Tv(i,e){let t=wv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ev(i,e){let t;switch(e){case Ng:t="Linear";break;case Ug:t="Reinhard";break;case kg:t="Cineon";break;case Og:t="ACESFilmic";break;case Bg:t="AgX";break;case zg:t="Neutral";break;case Fg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var qa=new L;function Av(){et.getLuminanceCoefficients(qa);let i=qa.x.toFixed(4),e=qa.y.toFixed(4),t=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function Cv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Iv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Yr(i){return i!==""}function Zd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(i){return i.replace(Pv,Dv)}var Lv=new Map;function Dv(i,e){let t=Je[e];if(t===void 0){let n=Lv.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xc(t)}var Nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(i){return i.replace(Nv,Uv)}function Uv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function kv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Ov(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function Bv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ef:e="ENVMAP_BLENDING_MULTIPLY";break;case Lg:e="ENVMAP_BLENDING_MIX";break;case Dg:e="ENVMAP_BLENDING_ADD";break}return e}function zv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=kv(t),c=Ov(t),u=Fv(t),h=Bv(t),d=zv(t),g=Rv(t),m=Cv(r),x=s.createProgram(),p,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Yr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Yr).join(`
`),f.length>0&&(f+=`
`)):(p=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),f=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Je.tonemapping_pars_fragment:"",t.toneMapping!==Li?Ev("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Tv("linearToOutputTexel",t.outputColorSpace),Av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),a=Xc(a),a=Zd(a,t),a=Jd(a,t),o=Xc(o),o=Zd(o,t),o=Jd(o,t),a=jd(a),o=jd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=y+p+a,M=y+f+o,C=$d(s,s.VERTEX_SHADER,b),E=$d(s,s.FRAGMENT_SHADER,M);s.attachShader(x,C),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(P){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(x).trim(),R=s.getShaderInfoLog(C).trim(),N=s.getShaderInfoLog(E).trim(),G=!0,D=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,E);else{let z=Kd(s,C,"vertex"),F=Kd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+z+`
`+F)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(R===""||N==="")&&(D=!1);D&&(P.diagnostics={runnable:G,programLog:V,vertexShader:{log:R,prefix:p},fragmentShader:{log:N,prefix:f}})}s.deleteShader(C),s.deleteShader(E),I=new Ys(s,x),v=Iv(s,x)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,Mv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=E,this}var Vv=0,qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new $c(e),t.set(e,n)),n}},$c=class{constructor(e){this.id=Vv++,this.code=e,this.usedTimes=0}};function Gv(i,e,t,n,s,r,a){let o=new fo,l=new qc,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,g=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,_,P,V,R){let N=V.fog,G=R.geometry,D=v.isMeshStandardMaterial?V.environment:null,z=(v.isMeshStandardMaterial?t:e).get(v.envMap||D),F=z&&z.mapping===zo?z.image.height:null,Y=m[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let ee=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=ee!==void 0?ee.length:0,_e=0;G.morphAttributes.position!==void 0&&(_e=1),G.morphAttributes.normal!==void 0&&(_e=2),G.morphAttributes.color!==void 0&&(_e=3);let ke,H,Z,oe;if(Y){let ft=Hn[Y];ke=ft.vertexShader,H=ft.fragmentShader}else ke=v.vertexShader,H=v.fragmentShader,l.update(v),Z=l.getVertexShaderID(v),oe=l.getFragmentShaderID(v);let W=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),le=R.isInstancedMesh===!0,pe=R.isBatchedMesh===!0,Ce=!!v.map,Oe=!!v.matcap,rt=!!z,U=!!v.aoMap,Ke=!!v.lightMap,Ve=!!v.bumpMap,Fe=!!v.normalMap,be=!!v.displacementMap,at=!!v.emissiveMap,De=!!v.metalnessMap,A=!!v.roughnessMap,S=v.anisotropy>0,X=v.clearcoat>0,Q=v.dispersion>0,ie=v.iridescence>0,J=v.sheen>0,we=v.transmission>0,he=S&&!!v.anisotropyMap,ve=X&&!!v.clearcoatMap,se=X&&!!v.clearcoatNormalMap,ne=X&&!!v.clearcoatRoughnessMap,fe=ie&&!!v.iridescenceMap,ze=ie&&!!v.iridescenceThicknessMap,He=J&&!!v.sheenColorMap,Me=J&&!!v.sheenRoughnessMap,nt=!!v.specularMap,Ze=!!v.specularColorMap,xt=!!v.specularIntensityMap,k=we&&!!v.transmissionMap,de=we&&!!v.thicknessMap,K=!!v.gradientMap,te=!!v.alphaMap,xe=v.alphaTest>0,me=!!v.alphaHash,qe=!!v.extensions,Tt=Li;v.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Tt=i.toneMapping);let Wt={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:ke,fragmentShader:H,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:pe,batchingColor:pe&&R._colorsTexture!==null,instancing:le,instancingColor:le&&R.instanceColor!==null,instancingMorph:le&&R.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Yt,alphaToCoverage:!!v.alphaToCoverage,map:Ce,matcap:Oe,envMap:rt,envMapMode:rt&&z.mapping,envMapCubeUVHeight:F,aoMap:U,lightMap:Ke,bumpMap:Ve,normalMap:Fe,displacementMap:d&&be,emissiveMap:at,normalMapObjectSpace:Fe&&v.normalMapType===qg,normalMapTangentSpace:Fe&&v.normalMapType===Eu,metalnessMap:De,roughnessMap:A,anisotropy:S,anisotropyMap:he,clearcoat:X,clearcoatMap:ve,clearcoatNormalMap:se,clearcoatRoughnessMap:ne,dispersion:Q,iridescence:ie,iridescenceMap:fe,iridescenceThicknessMap:ze,sheen:J,sheenColorMap:He,sheenRoughnessMap:Me,specularMap:nt,specularColorMap:Ze,specularIntensityMap:xt,transmission:we,transmissionMap:k,thicknessMap:de,gradientMap:K,opaque:v.transparent===!1&&v.blending===Pn&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:xe,alphaHash:me,combine:v.combine,mapUv:Ce&&x(v.map.channel),aoMapUv:U&&x(v.aoMap.channel),lightMapUv:Ke&&x(v.lightMap.channel),bumpMapUv:Ve&&x(v.bumpMap.channel),normalMapUv:Fe&&x(v.normalMap.channel),displacementMapUv:be&&x(v.displacementMap.channel),emissiveMapUv:at&&x(v.emissiveMap.channel),metalnessMapUv:De&&x(v.metalnessMap.channel),roughnessMapUv:A&&x(v.roughnessMap.channel),anisotropyMapUv:he&&x(v.anisotropyMap.channel),clearcoatMapUv:ve&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:He&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&x(v.sheenRoughnessMap.channel),specularMapUv:nt&&x(v.specularMap.channel),specularColorMapUv:Ze&&x(v.specularColorMap.channel),specularIntensityMapUv:xt&&x(v.specularIntensityMap.channel),transmissionMapUv:k&&x(v.transmissionMap.channel),thicknessMapUv:de&&x(v.thicknessMap.channel),alphaMapUv:te&&x(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Fe||S),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!G.attributes.uv&&(Ce||te),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ye,skinning:R.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:_e,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Ce&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:at&&v.emissiveMap.isVideoTexture===!0&&et.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rt,flipSided:v.side===$t,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:qe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&v.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function f(v){let _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)_.push(P),_.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(y(_,v),b(_,v),_.push(i.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function y(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function b(v,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),v.push(o.mask)}function M(v){let _=m[v.type],P;if(_){let V=Hn[_];P=D0.clone(V.uniforms)}else P=v.uniforms;return P}function C(v,_){let P;for(let V=0,R=u.length;V<R;V++){let N=u[V];if(N.cacheKey===_){P=N,++P.usedTimes;break}}return P===void 0&&(P=new Hv(i,_,v,r),u.push(P)),P}function E(v){if(--v.usedTimes===0){let _=u.indexOf(v);u[_]=u[u.length-1],u.pop(),v.destroy()}}function T(v){l.remove(v)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:I}}function Wv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ef(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,g,m,x,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:g,groupOrder:m,renderOrder:h.renderOrder,z:x,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=g,f.groupOrder=m,f.renderOrder=h.renderOrder,f.z=x,f.group=p),e++,f}function o(h,d,g,m,x,p){let f=a(h,d,g,m,x,p);g.transmission>0?n.push(f):g.transparent===!0?s.push(f):t.push(f)}function l(h,d,g,m,x,p){let f=a(h,d,g,m,x,p);g.transmission>0?n.unshift(f):g.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Xv),n.length>1&&n.sort(d||ef),s.length>1&&s.sort(d||ef)}function u(){for(let h=e,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function qv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new tf,i.set(n,[a])):s>=r.length?(a=new tf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function $v(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Re};break;case"SpotLight":t={position:new L,direction:new L,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Yv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Kv=0;function Zv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jv(i){let e=new $v,t=Yv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new We,a=new We;function o(c){let u=0,h=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let g=0,m=0,x=0,p=0,f=0,y=0,b=0,M=0,C=0,E=0,T=0;c.sort(Zv);for(let v=0,_=c.length;v<_;v++){let P=c[v],V=P.color,R=P.intensity,N=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=V.r*R,h+=V.g*R,d+=V.b*R;else if(P.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(P.sh.coefficients[D],R);T++}else if(P.isDirectionalLight){let D=e.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let z=P.shadow,F=t.get(P);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,n.directionalShadow[g]=F,n.directionalShadowMap[g]=G,n.directionalShadowMatrix[g]=P.shadow.matrix,y++}n.directional[g]=D,g++}else if(P.isSpotLight){let D=e.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(V).multiplyScalar(R),D.distance=N,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,n.spot[x]=D;let z=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,z.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[x]=z.matrix,P.castShadow){let F=t.get(P);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,n.spotShadow[x]=F,n.spotShadowMap[x]=G,M++}x++}else if(P.isRectAreaLight){let D=e.get(P);D.color.copy(V).multiplyScalar(R),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=D,p++}else if(P.isPointLight){let D=e.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){let z=P.shadow,F=t.get(P);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,F.shadowCameraNear=z.camera.near,F.shadowCameraFar=z.camera.far,n.pointShadow[m]=F,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=P.shadow.matrix,b++}n.point[m]=D,m++}else if(P.isHemisphereLight){let D=e.get(P);D.skyColor.copy(P.color).multiplyScalar(R),D.groundColor.copy(P.groundColor).multiplyScalar(R),n.hemi[f]=D,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==g||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==p||I.hemiLength!==f||I.numDirectionalShadows!==y||I.numPointShadows!==b||I.numSpotShadows!==M||I.numSpotMaps!==C||I.numLightProbes!==T)&&(n.directional.length=g,n.spot.length=x,n.rectArea.length=p,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,I.directionalLength=g,I.pointLength=m,I.spotLength=x,I.rectAreaLength=p,I.hemiLength=f,I.numDirectionalShadows=y,I.numPointShadows=b,I.numSpotShadows=M,I.numSpotMaps=C,I.numLightProbes=T,n.version=Kv++)}function l(c,u){let h=0,d=0,g=0,m=0,x=0,p=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){let b=c[f];if(b.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(b.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let M=n.rectArea[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function nf(i){let e=new Jv(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function jv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new nf(i),e.set(s,[o])):r>=a.length?(o=new nf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Yc=class extends Qt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Kc=class extends Qt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eM=`uniform sampler2D shadow_pass;
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
}`;function tM(i,e,t){let n=new ta,s=new Ne,r=new Ne,a=new lt,o=new Yc({depthPacking:Xg}),l=new Kc,c={},u=t.maxTextureSize,h={[Mn]:$t,[$t]:Mn,[Rt]:Rt},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Qv,fragmentShader:eM}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let m=new wt;m.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pe(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tf;let f=this.type;this.render=function(E,T,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let v=i.getRenderTarget(),_=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Pi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let R=f!==ti&&this.type===ti,N=f===ti&&this.type!==ti;for(let G=0,D=E.length;G<D;G++){let z=E[G],F=z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let Y=F.getFrameExtents();if(s.multiply(Y),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,F.mapSize.y=r.y)),F.map===null||R===!0||N===!0){let ae=this.type!==ti?{minFilter:Ot,magFilter:Ot}:{};F.map!==null&&F.map.dispose(),F.map=new li(s.x,s.y,ae),F.map.texture.name=z.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();let ee=F.getViewportCount();for(let ae=0;ae<ee;ae++){let _e=F.getViewport(ae);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),V.viewport(a),F.updateMatrices(z,ae),n=F.getFrustum(),M(T,I,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===ti&&y(F,I),F.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(v,_,P)};function y(E,T){let I=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new li(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,I,d,x,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,I,g,x,null)}function b(E,T,I,v){let _=null,P=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)_=P;else if(_=I.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let V=_.uuid,R=T.uuid,N=c[V];N===void 0&&(N={},c[V]=N);let G=N[R];G===void 0&&(G=_.clone(),N[R]=G,T.addEventListener("dispose",C)),_=G}if(_.visible=T.visible,_.wireframe=T.wireframe,v===ti?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:h[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let V=i.properties.get(_);V.light=I}return _}function M(E,T,I,v,_){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===ti)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let R=e.update(E),N=E.material;if(Array.isArray(N)){let G=R.groups;for(let D=0,z=G.length;D<z;D++){let F=G[D],Y=N[F.materialIndex];if(Y&&Y.visible){let ee=b(E,Y,v,_);E.onBeforeShadow(i,E,T,I,R,ee,F),i.renderBufferDirect(I,null,R,ee,E,F),E.onAfterShadow(i,E,T,I,R,ee,F)}}}else if(N.visible){let G=b(E,N,v,_);E.onBeforeShadow(i,E,T,I,R,G,null),i.renderBufferDirect(I,null,R,G,E,null),E.onAfterShadow(i,E,T,I,R,G,null)}}let V=E.children;for(let R=0,N=V.length;R<N;R++)M(V[R],T,I,v,_)}function C(E){E.target.removeEventListener("dispose",C);for(let I in c){let v=c[I],_=E.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}var nM={[tc]:nc,[ic]:ac,[sc]:oc,[Ks]:rc,[nc]:tc,[ac]:ic,[oc]:sc,[rc]:Ks};function iM(i,e){function t(){let k=!1,de=new lt,K=null,te=new lt(0,0,0,0);return{setMask:function(xe){K!==xe&&!k&&(i.colorMask(xe,xe,xe,xe),K=xe)},setLocked:function(xe){k=xe},setClear:function(xe,me,qe,Tt,Wt){Wt===!0&&(xe*=Tt,me*=Tt,qe*=Tt),de.set(xe,me,qe,Tt),te.equals(de)===!1&&(i.clearColor(xe,me,qe,Tt),te.copy(de))},reset:function(){k=!1,K=null,te.set(-1,0,0,0)}}}function n(){let k=!1,de=!1,K=null,te=null,xe=null;return{setReversed:function(me){if(de!==me){let qe=e.get("EXT_clip_control");de?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);let Tt=xe;xe=null,this.setClear(Tt)}de=me},getReversed:function(){return de},setTest:function(me){me?W(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(me){K!==me&&!k&&(i.depthMask(me),K=me)},setFunc:function(me){if(de&&(me=nM[me]),te!==me){switch(me){case tc:i.depthFunc(i.NEVER);break;case nc:i.depthFunc(i.ALWAYS);break;case ic:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case sc:i.depthFunc(i.EQUAL);break;case rc:i.depthFunc(i.GEQUAL);break;case ac:i.depthFunc(i.GREATER);break;case oc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=me}},setLocked:function(me){k=me},setClear:function(me){xe!==me&&(de&&(me=1-me),i.clearDepth(me),xe=me)},reset:function(){k=!1,K=null,te=null,xe=null,de=!1}}}function s(){let k=!1,de=null,K=null,te=null,xe=null,me=null,qe=null,Tt=null,Wt=null;return{setTest:function(ft){k||(ft?W(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(ft){de!==ft&&!k&&(i.stencilMask(ft),de=ft)},setFunc:function(ft,wn,$n){(K!==ft||te!==wn||xe!==$n)&&(i.stencilFunc(ft,wn,$n),K=ft,te=wn,xe=$n)},setOp:function(ft,wn,$n){(me!==ft||qe!==wn||Tt!==$n)&&(i.stencilOp(ft,wn,$n),me=ft,qe=wn,Tt=$n)},setLocked:function(ft){k=ft},setClear:function(ft){Wt!==ft&&(i.clearStencil(ft),Wt=ft)},reset:function(){k=!1,de=null,K=null,te=null,xe=null,me=null,qe=null,Tt=null,Wt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,g=[],m=null,x=!1,p=null,f=null,y=null,b=null,M=null,C=null,E=null,T=new Re(0,0,0),I=0,v=!1,_=null,P=null,V=null,R=null,N=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,z=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(F)[1]),D=z>=1):F.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),D=z>=2);let Y=null,ee={},ae=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),ke=new lt().fromArray(ae),H=new lt().fromArray(_e);function Z(k,de,K,te){let xe=new Uint8Array(4),me=i.createTexture();i.bindTexture(k,me),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<K;qe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(de+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return me}let oe={};oe[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(i.DEPTH_TEST),a.setFunc(Ks),Ve(!1),Fe(od),W(i.CULL_FACE),U(Pi);function W(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function ye(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function le(k,de){return h[k]!==de?(i.bindFramebuffer(k,de),h[k]=de,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function pe(k,de){let K=g,te=!1;if(k){K=d.get(de),K===void 0&&(K=[],d.set(de,K));let xe=k.textures;if(K.length!==xe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let me=0,qe=xe.length;me<qe;me++)K[me]=i.COLOR_ATTACHMENT0+me;K.length=xe.length,te=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,te=!0);te&&i.drawBuffers(K)}function Ce(k){return m!==k?(i.useProgram(k),m=k,!0):!1}let Oe={[rs]:i.FUNC_ADD,[mg]:i.FUNC_SUBTRACT,[gg]:i.FUNC_REVERSE_SUBTRACT};Oe[xg]=i.MIN,Oe[_g]=i.MAX;let rt={[yg]:i.ZERO,[vg]:i.ONE,[Mg]:i.SRC_COLOR,[Ql]:i.SRC_ALPHA,[Ag]:i.SRC_ALPHA_SATURATE,[Tg]:i.DST_COLOR,[Sg]:i.DST_ALPHA,[bg]:i.ONE_MINUS_SRC_COLOR,[ec]:i.ONE_MINUS_SRC_ALPHA,[Eg]:i.ONE_MINUS_DST_COLOR,[wg]:i.ONE_MINUS_DST_ALPHA,[Rg]:i.CONSTANT_COLOR,[Cg]:i.ONE_MINUS_CONSTANT_COLOR,[Ig]:i.CONSTANT_ALPHA,[Pg]:i.ONE_MINUS_CONSTANT_ALPHA};function U(k,de,K,te,xe,me,qe,Tt,Wt,ft){if(k===Pi){x===!0&&(ye(i.BLEND),x=!1);return}if(x===!1&&(W(i.BLEND),x=!0),k!==pg){if(k!==p||ft!==v){if((f!==rs||M!==rs)&&(i.blendEquation(i.FUNC_ADD),f=rs,M=rs),ft)switch(k){case Pn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFunc(i.ONE,i.ONE);break;case ld:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Pn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ld:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,b=null,C=null,E=null,T.set(0,0,0),I=0,p=k,v=ft}return}xe=xe||de,me=me||K,qe=qe||te,(de!==f||xe!==M)&&(i.blendEquationSeparate(Oe[de],Oe[xe]),f=de,M=xe),(K!==y||te!==b||me!==C||qe!==E)&&(i.blendFuncSeparate(rt[K],rt[te],rt[me],rt[qe]),y=K,b=te,C=me,E=qe),(Tt.equals(T)===!1||Wt!==I)&&(i.blendColor(Tt.r,Tt.g,Tt.b,Wt),T.copy(Tt),I=Wt),p=k,v=!1}function Ke(k,de){k.side===Rt?ye(i.CULL_FACE):W(i.CULL_FACE);let K=k.side===$t;de&&(K=!K),Ve(K),k.blending===Pn&&k.transparent===!1?U(Pi):U(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let te=k.stencilWrite;o.setTest(te),te&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),at(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(k){_!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),_=k)}function Fe(k){k!==dg?(W(i.CULL_FACE),k!==P&&(k===od?i.cullFace(i.BACK):k===fg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),P=k}function be(k){k!==V&&(D&&i.lineWidth(k),V=k)}function at(k,de,K){k?(W(i.POLYGON_OFFSET_FILL),(R!==de||N!==K)&&(i.polygonOffset(de,K),R=de,N=K)):ye(i.POLYGON_OFFSET_FILL)}function De(k){k?W(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function A(k){k===void 0&&(k=i.TEXTURE0+G-1),Y!==k&&(i.activeTexture(k),Y=k)}function S(k,de,K){K===void 0&&(Y===null?K=i.TEXTURE0+G-1:K=Y);let te=ee[K];te===void 0&&(te={type:void 0,texture:void 0},ee[K]=te),(te.type!==k||te.texture!==de)&&(Y!==K&&(i.activeTexture(K),Y=K),i.bindTexture(k,de||oe[k]),te.type=k,te.texture=de)}function X(){let k=ee[Y];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(k){ke.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ke.copy(k))}function Me(k){H.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),H.copy(k))}function nt(k,de){let K=c.get(de);K===void 0&&(K=new WeakMap,c.set(de,K));let te=K.get(k);te===void 0&&(te=i.getUniformBlockIndex(de,k.name),K.set(k,te))}function Ze(k,de){let te=c.get(de).get(k);l.get(de)!==te&&(i.uniformBlockBinding(de,te,k.__bindingPointIndex),l.set(de,te))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,ee={},h={},d=new WeakMap,g=[],m=null,x=!1,p=null,f=null,y=null,b=null,M=null,C=null,E=null,T=new Re(0,0,0),I=0,v=!1,_=null,P=null,V=null,R=null,N=null,ke.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:W,disable:ye,bindFramebuffer:le,drawBuffers:pe,useProgram:Ce,setBlending:U,setMaterial:Ke,setFlipSided:Ve,setCullFace:Fe,setLineWidth:be,setPolygonOffset:at,setScissorTest:De,activeTexture:A,bindTexture:S,unbindTexture:X,compressedTexImage2D:Q,compressedTexImage3D:ie,texImage2D:fe,texImage3D:ze,updateUBOMapping:nt,uniformBlockBinding:Ze,texStorage2D:se,texStorage3D:ne,texSubImage2D:J,texSubImage3D:we,compressedTexSubImage2D:he,compressedTexSubImage3D:ve,scissor:He,viewport:Me,reset:xt}}function sf(i,e,t,n){let s=sM(n);switch(t){case Pf:return i*e;case Df:return i*e;case Nf:return i*e*2;case yu:return i*e/s.components*s.byteLength;case vu:return i*e/s.components*s.byteLength;case Uf:return i*e*2/s.components*s.byteLength;case Mu:return i*e*2/s.components*s.byteLength;case Lf:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case bu:return i*e*4/s.components*s.byteLength;case io:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ro:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:case fc:return Math.max(i,16)*Math.max(e,8)/4;case uc:case dc:return Math.max(i,8)*Math.max(e,8)/2;case pc:case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oo:case Pc:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case kf:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nc:case Uc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sM(i){switch(i){case ai:case Rf:return{byteLength:1,components:1};case Qr:case Cf:case oa:return{byteLength:2,components:1};case xu:case _u:return{byteLength:2,components:4};case cs:case gu:case In:return{byteLength:4,components:1};case If:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function rM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,S){return g?new OffscreenCanvas(A,S):ea("canvas")}function x(A,S,X){let Q=1,ie=De(A);if((ie.width>X||ie.height>X)&&(Q=X/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let J=Math.floor(Q*ie.width),we=Math.floor(Q*ie.height);h===void 0&&(h=m(J,we));let he=S?m(J,we):h;return he.width=J,he.height=we,he.getContext("2d").drawImage(A,0,0,J,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+we+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function p(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,S,X,Q,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=S;if(S===i.RED&&(X===i.FLOAT&&(J=i.R32F),X===i.HALF_FLOAT&&(J=i.R16F),X===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.R8UI),X===i.UNSIGNED_SHORT&&(J=i.R16UI),X===i.UNSIGNED_INT&&(J=i.R32UI),X===i.BYTE&&(J=i.R8I),X===i.SHORT&&(J=i.R16I),X===i.INT&&(J=i.R32I)),S===i.RG&&(X===i.FLOAT&&(J=i.RG32F),X===i.HALF_FLOAT&&(J=i.RG16F),X===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.RG8UI),X===i.UNSIGNED_SHORT&&(J=i.RG16UI),X===i.UNSIGNED_INT&&(J=i.RG32UI),X===i.BYTE&&(J=i.RG8I),X===i.SHORT&&(J=i.RG16I),X===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.RGB8UI),X===i.UNSIGNED_SHORT&&(J=i.RGB16UI),X===i.UNSIGNED_INT&&(J=i.RGB32UI),X===i.BYTE&&(J=i.RGB8I),X===i.SHORT&&(J=i.RGB16I),X===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),X===i.UNSIGNED_INT&&(J=i.RGBA32UI),X===i.BYTE&&(J=i.RGBA8I),X===i.SHORT&&(J=i.RGBA16I),X===i.INT&&(J=i.RGBA32I)),S===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),S===i.RGBA){let we=ie?Vo:et.getTransfer(Q);X===i.FLOAT&&(J=i.RGBA32F),X===i.HALF_FLOAT&&(J=i.RGBA16F),X===i.UNSIGNED_BYTE&&(J=we===mt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(A,S){let X;return A?S===null||S===cs||S===js?X=i.DEPTH24_STENCIL8:S===In?X=i.DEPTH32F_STENCIL8:S===Qr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===cs||S===js?X=i.DEPTH_COMPONENT24:S===In?X=i.DEPTH_COMPONENT32F:S===Qr&&(X=i.DEPTH_COMPONENT16),X}function C(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ot&&A.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function E(A){let S=A.target;S.removeEventListener("dispose",E),I(S),S.isVideoTexture&&u.delete(S)}function T(A){let S=A.target;S.removeEventListener("dispose",T),_(S)}function I(A){let S=n.get(A);if(S.__webglInit===void 0)return;let X=A.source,Q=d.get(X);if(Q){let ie=Q[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&v(A),Object.keys(Q).length===0&&d.delete(X)}n.remove(A)}function v(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let X=A.source,Q=d.get(X);delete Q[S.__cacheKey],a.memory.textures--}function _(A){let S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ie=0;ie<S.__webglFramebuffer[Q].length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[Q][ie]);else i.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let X=A.textures;for(let Q=0,ie=X.length;Q<ie;Q++){let J=n.get(X[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(X[Q])}n.remove(A)}let P=0;function V(){P=0}function R(){let A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function N(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function G(A,S){let X=n.get(A);if(A.isVideoTexture&&be(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(X,A,S);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function D(A,S){let X=n.get(A);if(A.version>0&&X.__version!==A.version){H(X,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function z(A,S){let X=n.get(A);if(A.version>0&&X.__version!==A.version){H(X,A,S);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function F(A,S){let X=n.get(A);if(A.version>0&&X.__version!==A.version){Z(X,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}let Y={[os]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[ls]:i.MIRRORED_REPEAT},ee={[Ot]:i.NEAREST,[mu]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Kr]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},ae={[$g]:i.NEVER,[Qg]:i.ALWAYS,[Yg]:i.LESS,[Ff]:i.LEQUAL,[Kg]:i.EQUAL,[jg]:i.GEQUAL,[Zg]:i.GREATER,[Jg]:i.NOTEQUAL};function _e(A,S){if(S.type===In&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===an||S.magFilter===Kr||S.magFilter===Vs||S.magFilter===Vn||S.minFilter===an||S.minFilter===Kr||S.minFilter===Vs||S.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Y[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Y[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Y[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ee[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ee[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ot||S.minFilter!==Vs&&S.minFilter!==Vn||S.type===In&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ke(A,S){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));let Q=S.source,ie=d.get(Q);ie===void 0&&(ie={},d.set(Q,ie));let J=N(S);if(J!==A.__cacheKey){ie[J]===void 0&&(ie[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ie[J].usedTimes++;let we=ie[A.__cacheKey];we!==void 0&&(ie[A.__cacheKey].usedTimes--,we.usedTimes===0&&v(S)),A.__cacheKey=J,A.__webglTexture=ie[J].texture}return X}function H(A,S,X){let Q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=i.TEXTURE_3D);let ie=ke(A,S),J=S.source;t.bindTexture(Q,A.__webglTexture,i.TEXTURE0+X);let we=n.get(J);if(J.version!==we.__version||ie===!0){t.activeTexture(i.TEXTURE0+X);let he=et.getPrimaries(et.workingColorSpace),ve=S.colorSpace===Ri?null:et.getPrimaries(S.colorSpace),se=S.colorSpace===Ri||he===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ne=x(S.image,!1,s.maxTextureSize);ne=at(S,ne);let fe=r.convert(S.format,S.colorSpace),ze=r.convert(S.type),He=b(S.internalFormat,fe,ze,S.colorSpace,S.isVideoTexture);_e(Q,S);let Me,nt=S.mipmaps,Ze=S.isVideoTexture!==!0,xt=we.__version===void 0||ie===!0,k=J.dataReady,de=C(S,ne);if(S.isDepthTexture)He=M(S.format===Qs,S.type),xt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,He,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,He,ne.width,ne.height,0,fe,ze,null));else if(S.isDataTexture)if(nt.length>0){Ze&&xt&&t.texStorage2D(i.TEXTURE_2D,de,He,nt[0].width,nt[0].height);for(let K=0,te=nt.length;K<te;K++)Me=nt[K],Ze?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,fe,ze,Me.data):t.texImage2D(i.TEXTURE_2D,K,He,Me.width,Me.height,0,fe,ze,Me.data);S.generateMipmaps=!1}else Ze?(xt&&t.texStorage2D(i.TEXTURE_2D,de,He,ne.width,ne.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,fe,ze,ne.data)):t.texImage2D(i.TEXTURE_2D,0,He,ne.width,ne.height,0,fe,ze,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ze&&xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,He,nt[0].width,nt[0].height,ne.depth);for(let K=0,te=nt.length;K<te;K++)if(Me=nt[K],S.format!==vn)if(fe!==null)if(Ze){if(k)if(S.layerUpdates.size>0){let xe=sf(Me.width,Me.height,S.format,S.type);for(let me of S.layerUpdates){let qe=Me.data.subarray(me*xe/Me.data.BYTES_PER_ELEMENT,(me+1)*xe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,me,Me.width,Me.height,1,fe,qe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ne.depth,fe,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,He,Me.width,Me.height,ne.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ne.depth,fe,ze,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,He,Me.width,Me.height,ne.depth,0,fe,ze,Me.data)}else{Ze&&xt&&t.texStorage2D(i.TEXTURE_2D,de,He,nt[0].width,nt[0].height);for(let K=0,te=nt.length;K<te;K++)Me=nt[K],S.format!==vn?fe!==null?Ze?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,fe,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,K,He,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,fe,ze,Me.data):t.texImage2D(i.TEXTURE_2D,K,He,Me.width,Me.height,0,fe,ze,Me.data)}else if(S.isDataArrayTexture)if(Ze){if(xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,He,ne.width,ne.height,ne.depth),k)if(S.layerUpdates.size>0){let K=sf(ne.width,ne.height,S.format,S.type);for(let te of S.layerUpdates){let xe=ne.data.subarray(te*K/ne.data.BYTES_PER_ELEMENT,(te+1)*K/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,ne.width,ne.height,1,fe,ze,xe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,ze,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,ne.width,ne.height,ne.depth,0,fe,ze,ne.data);else if(S.isData3DTexture)Ze?(xt&&t.texStorage3D(i.TEXTURE_3D,de,He,ne.width,ne.height,ne.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,ze,ne.data)):t.texImage3D(i.TEXTURE_3D,0,He,ne.width,ne.height,ne.depth,0,fe,ze,ne.data);else if(S.isFramebufferTexture){if(xt)if(Ze)t.texStorage2D(i.TEXTURE_2D,de,He,ne.width,ne.height);else{let K=ne.width,te=ne.height;for(let xe=0;xe<de;xe++)t.texImage2D(i.TEXTURE_2D,xe,He,K,te,0,fe,ze,null),K>>=1,te>>=1}}else if(nt.length>0){if(Ze&&xt){let K=De(nt[0]);t.texStorage2D(i.TEXTURE_2D,de,He,K.width,K.height)}for(let K=0,te=nt.length;K<te;K++)Me=nt[K],Ze?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,fe,ze,Me):t.texImage2D(i.TEXTURE_2D,K,He,fe,ze,Me);S.generateMipmaps=!1}else if(Ze){if(xt){let K=De(ne);t.texStorage2D(i.TEXTURE_2D,de,He,K.width,K.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,ze,ne)}else t.texImage2D(i.TEXTURE_2D,0,He,fe,ze,ne);p(S)&&f(Q),we.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Z(A,S,X){if(S.image.length!==6)return;let Q=ke(A,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+X);let J=n.get(ie);if(ie.version!==J.__version||Q===!0){t.activeTexture(i.TEXTURE0+X);let we=et.getPrimaries(et.workingColorSpace),he=S.colorSpace===Ri?null:et.getPrimaries(S.colorSpace),ve=S.colorSpace===Ri||we===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let se=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let te=0;te<6;te++)!se&&!ne?fe[te]=x(S.image[te],!0,s.maxCubemapSize):fe[te]=ne?S.image[te].image:S.image[te],fe[te]=at(S,fe[te]);let ze=fe[0],He=r.convert(S.format,S.colorSpace),Me=r.convert(S.type),nt=b(S.internalFormat,He,Me,S.colorSpace),Ze=S.isVideoTexture!==!0,xt=J.__version===void 0||Q===!0,k=ie.dataReady,de=C(S,ze);_e(i.TEXTURE_CUBE_MAP,S);let K;if(se){Ze&&xt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,nt,ze.width,ze.height);for(let te=0;te<6;te++){K=fe[te].mipmaps;for(let xe=0;xe<K.length;xe++){let me=K[xe];S.format!==vn?He!==null?Ze?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,me.width,me.height,He,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,nt,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,me.width,me.height,He,Me,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,nt,me.width,me.height,0,He,Me,me.data)}}}else{if(K=S.mipmaps,Ze&&xt){K.length>0&&de++;let te=De(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,nt,te.width,te.height)}for(let te=0;te<6;te++)if(ne){Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,fe[te].width,fe[te].height,He,Me,fe[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,nt,fe[te].width,fe[te].height,0,He,Me,fe[te].data);for(let xe=0;xe<K.length;xe++){let qe=K[xe].image[te].image;Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,qe.width,qe.height,He,Me,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,nt,qe.width,qe.height,0,He,Me,qe.data)}}else{Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,He,Me,fe[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,nt,He,Me,fe[te]);for(let xe=0;xe<K.length;xe++){let me=K[xe];Ze?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,He,Me,me.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,nt,He,Me,me.image[te])}}}p(S)&&f(i.TEXTURE_CUBE_MAP),J.__version=ie.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function oe(A,S,X,Q,ie,J){let we=r.convert(X.format,X.colorSpace),he=r.convert(X.type),ve=b(X.internalFormat,we,he,X.colorSpace),se=n.get(S),ne=n.get(X);if(ne.__renderTarget=S,!se.__hasExternalTextures){let fe=Math.max(1,S.width>>J),ze=Math.max(1,S.height>>J);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,ve,fe,ze,S.depth,0,we,he,null):t.texImage2D(ie,J,ve,fe,ze,0,we,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ie,ne.__webglTexture,0,Ve(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ie,ne.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function W(A,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let Q=S.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,J=M(S.stencilBuffer,ie),we=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=Ve(S);Fe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,J,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,A)}else{let Q=S.textures;for(let ie=0;ie<Q.length;ie++){let J=Q[ie],we=r.convert(J.format,J.colorSpace),he=r.convert(J.type),ve=b(J.internalFormat,we,he,J.colorSpace),se=Ve(S);X&&Fe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ve,S.width,S.height):Fe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ve,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);let ie=Q.__webglTexture,J=Ve(S);if(S.depthTexture.format===qs)Fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Qs)Fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function le(A){let S=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let Q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){let ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",ie)};Q.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=Q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ye(S.__webglFramebuffer,A)}else if(X){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=i.createRenderbuffer(),W(S.__webglDepthbuffer[Q],A,!1);else{let ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),W(S.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(A,S,X){let Q=n.get(A);S!==void 0&&oe(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&le(A)}function Ce(A){let S=A.texture,X=n.get(A),Q=n.get(S);A.addEventListener("dispose",T);let ie=A.textures,J=A.isWebGLCubeRenderTarget===!0,we=ie.length>1;if(we||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=S.version,a.memory.textures++),J){X.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[he]=[];for(let ve=0;ve<S.mipmaps.length;ve++)X.__webglFramebuffer[he][ve]=i.createFramebuffer()}else X.__webglFramebuffer[he]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)X.__webglFramebuffer[he]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(we)for(let he=0,ve=ie.length;he<ve;he++){let se=n.get(ie[he]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Fe(A)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let he=0;he<ie.length;he++){let ve=ie[he];X.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[he]);let se=r.convert(ve.format,ve.colorSpace),ne=r.convert(ve.type),fe=b(ve.internalFormat,se,ne,ve.colorSpace,A.isXRRenderTarget===!0),ze=Ve(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,fe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,X.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),W(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),_e(i.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)oe(X.__webglFramebuffer[he][ve],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else oe(X.__webglFramebuffer[he],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);p(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let he=0,ve=ie.length;he<ve;he++){let se=ie[he],ne=n.get(se);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),_e(i.TEXTURE_2D,se),oe(X.__webglFramebuffer,A,se,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),p(se)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Q.__webglTexture),_e(he,S),S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)oe(X.__webglFramebuffer[ve],A,S,i.COLOR_ATTACHMENT0,he,ve);else oe(X.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,he,0);p(S)&&f(he),t.unbindTexture()}A.depthBuffer&&le(A)}function Oe(A){let S=A.textures;for(let X=0,Q=S.length;X<Q;X++){let ie=S[X];if(p(ie)){let J=y(A),we=n.get(ie).__webglTexture;t.bindTexture(J,we),f(J),t.unbindTexture()}}}let rt=[],U=[];function Ke(A){if(A.samples>0){if(Fe(A)===!1){let S=A.textures,X=A.width,Q=A.height,ie=i.COLOR_BUFFER_BIT,J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(A),he=S.length>1;if(he)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);let se=n.get(S[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,X,Q,0,0,X,Q,ie,i.NEAREST),l===!0&&(rt.length=0,U.length=0,rt.push(i.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(rt.push(J),U.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);let se=n.get(S[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ve(A){return Math.min(s.maxSamples,A.samples)}function Fe(A){let S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function be(A){let S=a.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function at(A,S){let X=A.colorSpace,Q=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==Yt&&X!==Ri&&(et.getTransfer(X)===mt?(Q!==vn||ie!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function De(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=V,this.setTexture2D=G,this.setTexture2DArray=D,this.setTexture3D=z,this.setTextureCube=F,this.rebindTextures=pe,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Fe}function aM(i,e){function t(n,s=Ri){let r,a=et.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===xu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_u)return i.UNSIGNED_SHORT_5_5_5_1;if(n===If)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rf)return i.BYTE;if(n===Cf)return i.SHORT;if(n===Qr)return i.UNSIGNED_SHORT;if(n===gu)return i.INT;if(n===cs)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===oa)return i.HALF_FLOAT;if(n===Pf)return i.ALPHA;if(n===Lf)return i.RGB;if(n===vn)return i.RGBA;if(n===Df)return i.LUMINANCE;if(n===Nf)return i.LUMINANCE_ALPHA;if(n===qs)return i.DEPTH_COMPONENT;if(n===Qs)return i.DEPTH_STENCIL;if(n===yu)return i.RED;if(n===vu)return i.RED_INTEGER;if(n===Uf)return i.RG;if(n===Mu)return i.RG_INTEGER;if(n===bu)return i.RGBA_INTEGER;if(n===io||n===so||n===ro||n===ao)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uc||n===hc||n===dc||n===fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pc||n===mc||n===gc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pc||n===mc)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xc||n===_c||n===yc||n===vc||n===Mc||n===bc||n===Sc||n===wc||n===Tc||n===Ec||n===Ac||n===Rc||n===Cc||n===Ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_c)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ac)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oo||n===Pc||n===Lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oo)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kf||n===Dc||n===Nc||n===Uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Zc=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ct=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},oM={type:"move"},jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),g=.02,m=.005;c.inputState.pinching&&d>g+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(oM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},lM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cM=`
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

}`,Jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Lt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new en({vertexShader:lM,fragmentShader:cM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new Dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jc=class extends oi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,g=null,m=null,x=new Jc,p=t.getContextAttributes(),f=null,y=null,b=[],M=[],C=new Ne,E=null,T=new Dt;T.viewport=new lt;let I=new Dt;I.viewport=new lt;let v=[T,I],_=new Zc,P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=b[H];return Z===void 0&&(Z=new jr,b[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=b[H];return Z===void 0&&(Z=new jr,b[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=b[H];return Z===void 0&&(Z=new jr,b[H]=Z),Z.getHandSpace()};function R(H){let Z=M.indexOf(H.inputSource);if(Z===-1)return;let oe=b[Z];oe!==void 0&&(oe.update(H.inputSource,H.frame,c||a),oe.dispatchEvent({type:H.type,data:H.inputSource}))}function N(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",G);for(let H=0;H<b.length;H++){let Z=M[H];Z!==null&&(M[H]=null,b[H].disconnect(Z))}P=null,V=null,x.reset(),e.setRenderTarget(f),g=null,d=null,h=null,s=null,y=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",N),s.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let Z={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new li(g.framebufferWidth,g.framebufferHeight,{format:vn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,oe=null,W=null;p.depth&&(W=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=p.stencil?Qs:qs,oe=p.stencil?js:cs);let ye={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ye),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new li(d.textureWidth,d.textureHeight,{format:vn,type:ai,depthTexture:new yo(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(H){for(let Z=0;Z<H.removed.length;Z++){let oe=H.removed[Z],W=M.indexOf(oe);W>=0&&(M[W]=null,b[W].disconnect(oe))}for(let Z=0;Z<H.added.length;Z++){let oe=H.added[Z],W=M.indexOf(oe);if(W===-1){for(let le=0;le<b.length;le++)if(le>=M.length){M.push(oe),W=le;break}else if(M[le]===null){M[le]=oe,W=le;break}if(W===-1)break}let ye=b[W];ye&&ye.connect(oe)}}let D=new L,z=new L;function F(H,Z,oe){D.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(oe.matrixWorld);let W=D.distanceTo(z),ye=Z.projectionMatrix.elements,le=oe.projectionMatrix.elements,pe=ye[14]/(ye[10]-1),Ce=ye[14]/(ye[10]+1),Oe=(ye[9]+1)/ye[5],rt=(ye[9]-1)/ye[5],U=(ye[8]-1)/ye[0],Ke=(le[8]+1)/le[0],Ve=pe*U,Fe=pe*Ke,be=W/(-U+Ke),at=be*-U;if(Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(at),H.translateZ(be),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ye[10]===-1)H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let De=pe+be,A=Ce+be,S=Ve-at,X=Fe+(W-at),Q=Oe*Ce/A*De,ie=rt*Ce/A*De;H.projectionMatrix.makePerspective(S,X,Q,ie,De,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Y(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Z=H.near,oe=H.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(oe=x.depthFar)),_.near=I.near=T.near=Z,_.far=I.far=T.far=oe,(P!==_.near||V!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),P=_.near,V=_.far),T.layers.mask=H.layers.mask|2,I.layers.mask=H.layers.mask|4,_.layers.mask=T.layers.mask|I.layers.mask;let W=H.parent,ye=_.cameras;Y(_,W);for(let le=0;le<ye.length;le++)Y(ye[le],W);ye.length===2?F(_,T,I):_.projectionMatrix.copy(T.projectionMatrix),ee(H,_,W)};function ee(H,Z,oe){oe===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(oe.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=nr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let ae=null;function _e(H,Z){if(u=Z.getViewerPose(c||a),m=Z,u!==null){let oe=u.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let W=!1;oe.length!==_.cameras.length&&(_.cameras.length=0,W=!0);for(let le=0;le<oe.length;le++){let pe=oe[le],Ce=null;if(g!==null)Ce=g.getViewport(pe);else{let rt=h.getViewSubImage(d,pe);Ce=rt.viewport,le===0&&(e.setRenderTargetTextures(y,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(y))}let Oe=v[le];Oe===void 0&&(Oe=new Dt,Oe.layers.enable(le),Oe.viewport=new lt,v[le]=Oe),Oe.matrix.fromArray(pe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(pe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),le===0&&(_.matrix.copy(Oe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),W===!0&&_.cameras.push(Oe)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")){let le=h.getDepthInformation(oe[0]);le&&le.isValid&&le.texture&&x.init(e,le,s.renderState)}}for(let oe=0;oe<b.length;oe++){let W=M[oe],ye=b[oe];W!==null&&ye!==void 0&&ye.update(W,Z,c||a)}ae&&ae(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}let ke=new Gf;ke.setAnimationLoop(_e),this.setAnimationLoop=function(H){ae=H},this.dispose=function(){}}},is=new Wn,uM=new We;function hM(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Vf(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,y,b,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&g(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),m(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),x(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,y,b):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===$t&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===$t&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y=e.get(f),b=y.envMap,M=y.envMapRotation;b&&(p.envMap.value=b,is.copy(M),is.x*=-1,is.y*=-1,is.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),p.envMapRotation.value.setFromMatrix4(uM.makeRotationFromEuler(is)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===$t&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){let y=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dM(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let M=b.program;n.uniformBlockBinding(y,M)}function c(y,b){let M=s[y.id];M===void 0&&(m(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",p));let C=b.program;n.updateUBOMapping(y,C);let E=e.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function u(y){let b=h();y.__bindingPointIndex=b;let M=i.createBuffer(),C=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let b=s[y.id],M=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,T=M.length;E<T;E++){let I=Array.isArray(M[E])?M[E]:[M[E]];for(let v=0,_=I.length;v<_;v++){let P=I[v];if(g(P,E,v,C)===!0){let V=P.__offset,R=Array.isArray(P.value)?P.value:[P.value],N=0;for(let G=0;G<R.length;G++){let D=R[G],z=x(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,V+N,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,N),N+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,b,M,C){let E=y.value,T=b+"_"+M;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{let I=C[T];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return C[T]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function m(y){let b=y.uniforms,M=0,C=16;for(let T=0,I=b.length;T<I;T++){let v=Array.isArray(b[T])?b[T]:[b[T]];for(let _=0,P=v.length;_<P;_++){let V=v[_],R=Array.isArray(V.value)?V.value:[V.value];for(let N=0,G=R.length;N<G;N++){let D=R[N],z=x(D),F=M%C,Y=F%z.boundary,ee=F+Y;M+=Y,ee!==0&&C-ee<z.storage&&(M+=C-ee),V.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=z.storage}}}let E=M%C;return E>0&&(M+=C-E),y.__size=M,y.__cache={},this}function x(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function p(y){let b=y.target;b.removeEventListener("dispose",p);let M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var vo=class{constructor(e={}){let{canvas:t=g0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let m=new Uint32Array(4),x=new Int32Array(4),p=null,f=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=Li,this.toneMappingExposure=1;let M=this,C=!1,E=0,T=0,I=null,v=-1,_=null,P=new lt,V=new lt,R=null,N=new Re(0),G=0,D=t.width,z=t.height,F=1,Y=null,ee=null,ae=new lt(0,0,D,z),_e=new lt(0,0,D,z),ke=!1,H=new ta,Z=!1,oe=!1,W=new We,ye=new We,le=new L,pe=new lt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function rt(){return I===null?F:1}let U=n;function Ke(w,O){return t.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fu}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",me,!1),U===null){let O="webgl2";if(U=Ke(O,w),U===null)throw Ke(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ve,Fe,be,at,De,A,S,X,Q,ie,J,we,he,ve,se,ne,fe,ze,He,Me,nt,Ze,xt,k;function de(){Ve=new Ry(U),Ve.init(),Ze=new aM(U,Ve),Fe=new by(U,Ve,e,Ze),be=new iM(U,Ve),Fe.reverseDepthBuffer&&d&&be.buffers.depth.setReversed(!0),at=new Py(U),De=new Wv,A=new rM(U,Ve,be,De,Fe,Ze,at),S=new wy(M),X=new Ay(M),Q=new F0(U),xt=new vy(U,Q),ie=new Cy(U,Q,at,xt),J=new Dy(U,ie,Q,at),He=new Ly(U,Fe,A),ne=new Sy(De),we=new Gv(M,S,X,Ve,Fe,xt,ne),he=new hM(M,De),ve=new qv,se=new jv(Ve),ze=new yy(M,S,X,be,J,g,l),fe=new tM(M,J,Fe),k=new dM(U,at,Fe,be),Me=new My(U,Ve,at),nt=new Iy(U,Ve,at),at.programs=we.programs,M.capabilities=Fe,M.extensions=Ve,M.properties=De,M.renderLists=ve,M.shadowMap=fe,M.state=be,M.info=at}de();let K=new jc(M,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=Ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(D,z,!1))},this.getSize=function(w){return w.set(D,z)},this.setSize=function(w,O,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,z=O,t.width=Math.floor(w*F),t.height=Math.floor(O*F),q===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(D*F,z*F).floor()},this.setDrawingBufferSize=function(w,O,q){D=w,z=O,F=q,t.width=Math.floor(w*q),t.height=Math.floor(O*q),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,O,q,$){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,O,q,$),be.viewport(P.copy(ae).multiplyScalar(F).round())},this.getScissor=function(w){return w.copy(_e)},this.setScissor=function(w,O,q,$){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,O,q,$),be.scissor(V.copy(_e).multiplyScalar(F).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(w){be.setScissorTest(ke=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){ee=w},this.getClearColor=function(w){return w.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(w=!0,O=!0,q=!0){let $=0;if(w){let B=!1;if(I!==null){let re=I.texture.format;B=re===bu||re===Mu||re===vu}if(B){let re=I.texture.type,ge=re===ai||re===cs||re===Qr||re===js||re===xu||re===_u,Te=ze.getClearColor(),Ee=ze.getClearAlpha(),Ge=Te.r,$e=Te.g,Ae=Te.b;ge?(m[0]=Ge,m[1]=$e,m[2]=Ae,m[3]=Ee,U.clearBufferuiv(U.COLOR,0,m)):(x[0]=Ge,x[1]=$e,x[2]=Ae,x[3]=Ee,U.clearBufferiv(U.COLOR,0,x))}else $|=U.COLOR_BUFFER_BIT}O&&($|=U.DEPTH_BUFFER_BIT),q&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ve.dispose(),se.dispose(),De.dispose(),S.dispose(),X.dispose(),J.dispose(),xt.dispose(),k.dispose(),we.dispose(),K.dispose(),K.removeEventListener("sessionstart",Qh),K.removeEventListener("sessionend",ed),Ji.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=at.autoReset,O=fe.enabled,q=fe.autoUpdate,$=fe.needsUpdate,B=fe.type;de(),at.autoReset=w,fe.enabled=O,fe.autoUpdate=q,fe.needsUpdate=$,fe.type=B}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function qe(w){let O=w.target;O.removeEventListener("dispose",qe),Tt(O)}function Tt(w){Wt(w),De.remove(w)}function Wt(w){let O=De.get(w).programs;O!==void 0&&(O.forEach(function(q){we.releaseProgram(q)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,q,$,B,re){O===null&&(O=Ce);let ge=B.isMesh&&B.matrixWorld.determinant()<0,Te=cg(w,O,q,$,B);be.setMaterial($,ge);let Ee=q.index,Ge=1;if($.wireframe===!0){if(Ee=ie.getWireframeAttribute(q),Ee===void 0)return;Ge=2}let $e=q.drawRange,Ae=q.attributes.position,ot=$e.start*Ge,_t=($e.start+$e.count)*Ge;re!==null&&(ot=Math.max(ot,re.start*Ge),_t=Math.min(_t,(re.start+re.count)*Ge)),Ee!==null?(ot=Math.max(ot,0),_t=Math.min(_t,Ee.count)):Ae!=null&&(ot=Math.max(ot,0),_t=Math.min(_t,Ae.count));let vt=_t-ot;if(vt<0||vt===1/0)return;xt.setup(B,$,Te,q,Ee);let rn,ut=Me;if(Ee!==null&&(rn=Q.get(Ee),ut=nt,ut.setIndex(rn)),B.isMesh)$.wireframe===!0?(be.setLineWidth($.wireframeLinewidth*rt()),ut.setMode(U.LINES)):ut.setMode(U.TRIANGLES);else if(B.isLine){let Ie=$.linewidth;Ie===void 0&&(Ie=1),be.setLineWidth(Ie*rt()),B.isLineSegments?ut.setMode(U.LINES):B.isLineLoop?ut.setMode(U.LINE_LOOP):ut.setMode(U.LINE_STRIP)}else B.isPoints?ut.setMode(U.POINTS):B.isSprite&&ut.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ut.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))ut.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ie=B._multiDrawStarts,Yn=B._multiDrawCounts,ht=B._multiDrawCount,Tn=Ee?Q.get(Ee).bytesPerElement:1,bs=De.get($).currentProgram.getUniforms();for(let cn=0;cn<ht;cn++)bs.setValue(U,"_gl_DrawID",cn),ut.render(Ie[cn]/Tn,Yn[cn])}else if(B.isInstancedMesh)ut.renderInstances(ot,vt,B.count);else if(q.isInstancedBufferGeometry){let Ie=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Yn=Math.min(q.instanceCount,Ie);ut.renderInstances(ot,vt,Yn)}else ut.render(ot,vt)};function ft(w,O,q){w.transparent===!0&&w.side===Rt&&w.forceSinglePass===!1?(w.side=$t,w.needsUpdate=!0,Ea(w,O,q),w.side=Mn,w.needsUpdate=!0,Ea(w,O,q),w.side=Rt):Ea(w,O,q)}this.compile=function(w,O,q=null){q===null&&(q=w),f=se.get(q),f.init(O),b.push(f),q.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),w!==q&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();let $=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let re=B.material;if(re)if(Array.isArray(re))for(let ge=0;ge<re.length;ge++){let Te=re[ge];ft(Te,q,B),$.add(Te)}else ft(re,q,B),$.add(re)}),b.pop(),f=null,$},this.compileAsync=function(w,O,q=null){let $=this.compile(w,O,q);return new Promise(B=>{function re(){if($.forEach(function(ge){De.get(ge).currentProgram.isReady()&&$.delete(ge)}),$.size===0){B(w);return}setTimeout(re,10)}Ve.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let wn=null;function $n(w){wn&&wn(w)}function Qh(){Ji.stop()}function ed(){Ji.start()}let Ji=new Gf;Ji.setAnimationLoop($n),typeof self!="undefined"&&Ji.setContext(self),this.setAnimationLoop=function(w){wn=w,K.setAnimationLoop(w),w===null?Ji.stop():Ji.start()},K.addEventListener("sessionstart",Qh),K.addEventListener("sessionend",ed),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,O,I),f=se.get(w,b.length),f.init(O),b.push(f),ye.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H.setFromProjectionMatrix(ye),oe=this.localClippingEnabled,Z=ne.init(this.clippingPlanes,oe),p=ve.get(w,y.length),p.init(),y.push(p),K.enabled===!0&&K.isPresenting===!0){let re=M.xr.getDepthSensingMesh();re!==null&&yl(re,O,-1/0,M.sortObjects)}yl(w,O,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(Y,ee),Oe=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Oe&&ze.addToRenderList(p,w),this.info.render.frame++,Z===!0&&ne.beginShadows();let q=f.state.shadowsArray;fe.render(q,w,O),Z===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=p.opaque,B=p.transmissive;if(f.setupLights(),O.isArrayCamera){let re=O.cameras;if(B.length>0)for(let ge=0,Te=re.length;ge<Te;ge++){let Ee=re[ge];nd($,B,w,Ee)}Oe&&ze.render(w);for(let ge=0,Te=re.length;ge<Te;ge++){let Ee=re[ge];td(p,w,Ee,Ee.viewport)}}else B.length>0&&nd($,B,w,O),Oe&&ze.render(w),td(p,w,O);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(M,w,O),xt.resetDefaultState(),v=-1,_=null,b.pop(),b.length>0?(f=b[b.length-1],Z===!0&&ne.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function yl(w,O,q,$){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||H.intersectsSprite(w)){$&&pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ye);let ge=J.update(w),Te=w.material;Te.visible&&p.push(w,ge,Te,q,pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||H.intersectsObject(w))){let ge=J.update(w),Te=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),pe.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),pe.copy(ge.boundingSphere.center)),pe.applyMatrix4(w.matrixWorld).applyMatrix4(ye)),Array.isArray(Te)){let Ee=ge.groups;for(let Ge=0,$e=Ee.length;Ge<$e;Ge++){let Ae=Ee[Ge],ot=Te[Ae.materialIndex];ot&&ot.visible&&p.push(w,ge,ot,q,pe.z,Ae)}}else Te.visible&&p.push(w,ge,Te,q,pe.z,null)}}let re=w.children;for(let ge=0,Te=re.length;ge<Te;ge++)yl(re[ge],O,q,$)}function td(w,O,q,$){let B=w.opaque,re=w.transmissive,ge=w.transparent;f.setupLightsView(q),Z===!0&&ne.setGlobalState(M.clippingPlanes,q),$&&be.viewport(P.copy($)),B.length>0&&Ta(B,O,q),re.length>0&&Ta(re,O,q),ge.length>0&&Ta(ge,O,q),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function nd(w,O,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new li(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?oa:ai,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let re=f.state.transmissionRenderTarget[$.id],ge=$.viewport||P;re.setSize(ge.z,ge.w);let Te=M.getRenderTarget();M.setRenderTarget(re),M.getClearColor(N),G=M.getClearAlpha(),G<1&&M.setClearColor(16777215,.5),M.clear(),Oe&&ze.render(q);let Ee=M.toneMapping;M.toneMapping=Li;let Ge=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),Z===!0&&ne.setGlobalState(M.clippingPlanes,$),Ta(w,q,$),A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ae=0,ot=O.length;Ae<ot;Ae++){let _t=O[Ae],vt=_t.object,rn=_t.geometry,ut=_t.material,Ie=_t.group;if(ut.side===Rt&&vt.layers.test($.layers)){let Yn=ut.side;ut.side=$t,ut.needsUpdate=!0,id(vt,q,$,rn,ut,Ie),ut.side=Yn,ut.needsUpdate=!0,$e=!0}}$e===!0&&(A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re))}M.setRenderTarget(Te),M.setClearColor(N,G),Ge!==void 0&&($.viewport=Ge),M.toneMapping=Ee}function Ta(w,O,q){let $=O.isScene===!0?O.overrideMaterial:null;for(let B=0,re=w.length;B<re;B++){let ge=w[B],Te=ge.object,Ee=ge.geometry,Ge=$===null?ge.material:$,$e=ge.group;Te.layers.test(q.layers)&&id(Te,O,q,Ee,Ge,$e)}}function id(w,O,q,$,B,re){w.onBeforeRender(M,O,q,$,B,re),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(M,O,q,$,w,re),B.transparent===!0&&B.side===Rt&&B.forceSinglePass===!1?(B.side=$t,B.needsUpdate=!0,M.renderBufferDirect(q,O,$,B,w,re),B.side=Mn,B.needsUpdate=!0,M.renderBufferDirect(q,O,$,B,w,re),B.side=Rt):M.renderBufferDirect(q,O,$,B,w,re),w.onAfterRender(M,O,q,$,B,re)}function Ea(w,O,q){O.isScene!==!0&&(O=Ce);let $=De.get(w),B=f.state.lights,re=f.state.shadowsArray,ge=B.state.version,Te=we.getParameters(w,B.state,re,O,q),Ee=we.getProgramCacheKey(Te),Ge=$.programs;$.environment=w.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(w.isMeshStandardMaterial?X:S).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",qe),Ge=new Map,$.programs=Ge);let $e=Ge.get(Ee);if($e!==void 0){if($.currentProgram===$e&&$.lightsStateVersion===ge)return rd(w,Te),$e}else Te.uniforms=we.getUniforms(w),w.onBeforeCompile(Te,M),$e=we.acquireProgram(Te,Ee),Ge.set(Ee,$e),$.uniforms=Te.uniforms;let Ae=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ae.clippingPlanes=ne.uniform),rd(w,Te),$.needsLights=hg(w),$.lightsStateVersion=ge,$.needsLights&&(Ae.ambientLightColor.value=B.state.ambient,Ae.lightProbe.value=B.state.probe,Ae.directionalLights.value=B.state.directional,Ae.directionalLightShadows.value=B.state.directionalShadow,Ae.spotLights.value=B.state.spot,Ae.spotLightShadows.value=B.state.spotShadow,Ae.rectAreaLights.value=B.state.rectArea,Ae.ltc_1.value=B.state.rectAreaLTC1,Ae.ltc_2.value=B.state.rectAreaLTC2,Ae.pointLights.value=B.state.point,Ae.pointLightShadows.value=B.state.pointShadow,Ae.hemisphereLights.value=B.state.hemi,Ae.directionalShadowMap.value=B.state.directionalShadowMap,Ae.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ae.spotShadowMap.value=B.state.spotShadowMap,Ae.spotLightMatrix.value=B.state.spotLightMatrix,Ae.spotLightMap.value=B.state.spotLightMap,Ae.pointShadowMap.value=B.state.pointShadowMap,Ae.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=$e,$.uniformsList=null,$e}function sd(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Ys.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function rd(w,O){let q=De.get(w);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function cg(w,O,q,$,B){O.isScene!==!0&&(O=Ce),A.resetTextureUnits();let re=O.fog,ge=$.isMeshStandardMaterial?O.environment:null,Te=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Yt,Ee=($.isMeshStandardMaterial?X:S).get($.envMap||ge),Ge=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$e=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ae=!!q.morphAttributes.position,ot=!!q.morphAttributes.normal,_t=!!q.morphAttributes.color,vt=Li;$.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(vt=M.toneMapping);let rn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=rn!==void 0?rn.length:0,Ie=De.get($),Yn=f.state.lights;if(Z===!0&&(oe===!0||w!==_)){let _n=w===_&&$.id===v;ne.setState($,w,_n)}let ht=!1;$.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Yn.state.version||Ie.outputColorSpace!==Te||B.isBatchedMesh&&Ie.batching===!1||!B.isBatchedMesh&&Ie.batching===!0||B.isBatchedMesh&&Ie.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ie.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ie.instancing===!1||!B.isInstancedMesh&&Ie.instancing===!0||B.isSkinnedMesh&&Ie.skinning===!1||!B.isSkinnedMesh&&Ie.skinning===!0||B.isInstancedMesh&&Ie.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ie.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ie.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ie.instancingMorph===!1&&B.morphTexture!==null||Ie.envMap!==Ee||$.fog===!0&&Ie.fog!==re||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ne.numPlanes||Ie.numIntersection!==ne.numIntersection)||Ie.vertexAlphas!==Ge||Ie.vertexTangents!==$e||Ie.morphTargets!==Ae||Ie.morphNormals!==ot||Ie.morphColors!==_t||Ie.toneMapping!==vt||Ie.morphTargetsCount!==ut)&&(ht=!0):(ht=!0,Ie.__version=$.version);let Tn=Ie.currentProgram;ht===!0&&(Tn=Ea($,O,B));let bs=!1,cn=!1,Nr=!1,Mt=Tn.getUniforms(),zn=Ie.uniforms;if(be.useProgram(Tn.program)&&(bs=!0,cn=!0,Nr=!0),$.id!==v&&(v=$.id,cn=!0),bs||_!==w){be.buffers.depth.getReversed()?(W.copy(w.projectionMatrix),_0(W),y0(W),Mt.setValue(U,"projectionMatrix",W)):Mt.setValue(U,"projectionMatrix",w.projectionMatrix),Mt.setValue(U,"viewMatrix",w.matrixWorldInverse);let vi=Mt.map.cameraPosition;vi!==void 0&&vi.setValue(U,le.setFromMatrixPosition(w.matrixWorld)),Fe.logarithmicDepthBuffer&&Mt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Mt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,cn=!0,Nr=!0)}if(B.isSkinnedMesh){Mt.setOptional(U,B,"bindMatrix"),Mt.setOptional(U,B,"bindMatrixInverse");let _n=B.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Mt.setValue(U,"boneTexture",_n.boneTexture,A))}B.isBatchedMesh&&(Mt.setOptional(U,B,"batchingTexture"),Mt.setValue(U,"batchingTexture",B._matricesTexture,A),Mt.setOptional(U,B,"batchingIdTexture"),Mt.setValue(U,"batchingIdTexture",B._indirectTexture,A),Mt.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&Mt.setValue(U,"batchingColorTexture",B._colorsTexture,A));let Ur=q.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0)&&He.update(B,q,Tn),(cn||Ie.receiveShadow!==B.receiveShadow)&&(Ie.receiveShadow=B.receiveShadow,Mt.setValue(U,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(zn.envMap.value=Ee,zn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(zn.envMapIntensity.value=O.environmentIntensity),cn&&(Mt.setValue(U,"toneMappingExposure",M.toneMappingExposure),Ie.needsLights&&ug(zn,Nr),re&&$.fog===!0&&he.refreshFogUniforms(zn,re),he.refreshMaterialUniforms(zn,$,F,z,f.state.transmissionRenderTarget[w.id]),Ys.upload(U,sd(Ie),zn,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ys.upload(U,sd(Ie),zn,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Mt.setValue(U,"center",B.center),Mt.setValue(U,"modelViewMatrix",B.modelViewMatrix),Mt.setValue(U,"normalMatrix",B.normalMatrix),Mt.setValue(U,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let _n=$.uniformsGroups;for(let vi=0,Mi=_n.length;vi<Mi;vi++){let ad=_n[vi];k.update(ad,Tn),k.bind(ad,Tn)}}return Tn}function ug(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function hg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,O,q){De.get(w.texture).__webglTexture=O,De.get(w.depthTexture).__webglTexture=q;let $=De.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let q=De.get(w);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,q=0){I=w,E=O,T=q;let $=!0,B=null,re=!1,ge=!1;if(w){let Ee=De.get(w);if(Ee.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(U.FRAMEBUFFER,null),$=!1;else if(Ee.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Ee.__hasExternalTextures)A.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ae=w.depthTexture;if(Ee.__boundDepthTexture!==Ae){if(Ae!==null&&De.has(Ae)&&(w.width!==Ae.image.width||w.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Ge=w.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ge=!0);let $e=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($e[O])?B=$e[O][q]:B=$e[O],re=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?B=De.get(w).__webglMultisampledFramebuffer:Array.isArray($e)?B=$e[q]:B=$e,P.copy(w.viewport),V.copy(w.scissor),R=w.scissorTest}else P.copy(ae).multiplyScalar(F).floor(),V.copy(_e).multiplyScalar(F).floor(),R=ke;if(be.bindFramebuffer(U.FRAMEBUFFER,B)&&$&&be.drawBuffers(w,B),be.viewport(P),be.scissor(V),be.setScissorTest(R),re){let Ee=De.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,q)}else if(ge){let Ee=De.get(w.texture),Ge=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.__webglTexture,q||0,Ge)}v=-1},this.readRenderTargetPixels=function(w,O,q,$,B,re,ge){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){be.bindFramebuffer(U.FRAMEBUFFER,Te);try{let Ee=w.texture,Ge=Ee.format,$e=Ee.type;if(!Fe.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-$&&q>=0&&q<=w.height-B&&U.readPixels(O,q,$,B,Ze.convert(Ge),Ze.convert($e),re)}finally{let Ee=I!==null?De.get(I).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(w,O,q,$,B,re,ge){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){let Ee=w.texture,Ge=Ee.format,$e=Ee.type;if(!Fe.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-$&&q>=0&&q<=w.height-B){be.bindFramebuffer(U.FRAMEBUFFER,Te);let Ae=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(O,q,$,B,Ze.convert(Ge),Ze.convert($e),0);let ot=I!==null?De.get(I).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,ot);let _t=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await x0(U,_t,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(Ae),U.deleteSync(_t),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,q=0){w.isTexture!==!0&&($r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let $=Math.pow(2,-q),B=Math.floor(w.image.width*$),re=Math.floor(w.image.height*$),ge=O!==null?O.x:0,Te=O!==null?O.y:0;A.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,ge,Te,B,re),be.unbindTexture()},this.copyTextureToTexture=function(w,O,q=null,$=null,B=0){w.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],O=arguments[2],B=arguments[3]||0,q=null);let re,ge,Te,Ee,Ge,$e,Ae,ot,_t,vt=w.isCompressedTexture?w.mipmaps[B]:w.image;q!==null?(re=q.max.x-q.min.x,ge=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,Ee=q.min.x,Ge=q.min.y,$e=q.isBox3?q.min.z:0):(re=vt.width,ge=vt.height,Te=vt.depth||1,Ee=0,Ge=0,$e=0),$!==null?(Ae=$.x,ot=$.y,_t=$.z):(Ae=0,ot=0,_t=0);let rn=Ze.convert(O.format),ut=Ze.convert(O.type),Ie;O.isData3DTexture?(A.setTexture3D(O,0),Ie=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),Ie=U.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),Ie=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let Yn=U.getParameter(U.UNPACK_ROW_LENGTH),ht=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Tn=U.getParameter(U.UNPACK_SKIP_PIXELS),bs=U.getParameter(U.UNPACK_SKIP_ROWS),cn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,vt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ee),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ge),U.pixelStorei(U.UNPACK_SKIP_IMAGES,$e);let Nr=w.isDataArrayTexture||w.isData3DTexture,Mt=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let zn=De.get(w),Ur=De.get(O),_n=De.get(zn.__renderTarget),vi=De.get(Ur.__renderTarget);be.bindFramebuffer(U.READ_FRAMEBUFFER,_n.__webglFramebuffer),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Mi=0;Mi<Te;Mi++)Nr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.get(w).__webglTexture,B,$e+Mi),w.isDepthTexture?(Mt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.get(O).__webglTexture,B,_t+Mi),U.blitFramebuffer(Ee,Ge,re,ge,Ae,ot,re,ge,U.DEPTH_BUFFER_BIT,U.NEAREST)):Mt?U.copyTexSubImage3D(Ie,B,Ae,ot,_t+Mi,Ee,Ge,re,ge):U.copyTexSubImage2D(Ie,B,Ae,ot,_t+Mi,Ee,Ge,re,ge);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Mt?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Ie,B,Ae,ot,_t,re,ge,Te,rn,ut,vt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Ie,B,Ae,ot,_t,re,ge,Te,rn,vt.data):U.texSubImage3D(Ie,B,Ae,ot,_t,re,ge,Te,rn,ut,vt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,Ae,ot,re,ge,rn,ut,vt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,Ae,ot,vt.width,vt.height,rn,vt.data):U.texSubImage2D(U.TEXTURE_2D,B,Ae,ot,re,ge,rn,ut,vt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Yn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ht),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Tn),U.pixelStorei(U.UNPACK_SKIP_ROWS,bs),U.pixelStorei(U.UNPACK_SKIP_IMAGES,cn),B===0&&O.generateMipmaps&&U.generateMipmap(Ie),be.unbindTexture()},this.copyTextureToTexture3D=function(w,O,q=null,$=null,B=0){return w.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,w=arguments[2],O=arguments[3],B=arguments[4]||0),$r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,q,$,B)},this.initRenderTarget=function(w){De.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),be.unbindTexture()},this.resetState=function(){E=0,T=0,I=null,be.reset(),xt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var Mo=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ar=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kc,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Jt=new L,us=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ci=class extends Qt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Os,zr=new L,Fs=new L,Bs=new L,zs=new Ne,Hr=new Ne,Yf=new We,$a=new L,Vr=new L,Ya=new L,rf=new Ne,$l=new Ne,af=new Ne,Di=class extends bt{constructor(e=new ci){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ar(t,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new us(n,3,0,!1)),Os.setAttribute("uv",new us(n,2,3,!1))}this.geometry=Os,this.material=e,this.center=new Ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),Yf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Bs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ka($a.set(-.5,-.5,0),Bs,a,Fs,s,r),Ka(Vr.set(.5,-.5,0),Bs,a,Fs,s,r),Ka(Ya.set(.5,.5,0),Bs,a,Fs,s,r),rf.set(0,0),$l.set(1,0),af.set(1,1);let o=e.ray.intersectTriangle($a,Vr,Ya,!1,zr);if(o===null&&(Ka(Vr.set(-.5,.5,0),Bs,a,Fs,s,r),$l.set(0,1),o=e.ray.intersectTriangle($a,Ya,Vr,!1,zr),o===null))return;let l=e.ray.origin.distanceTo(zr);l<e.near||l>e.far||t.push({distance:l,point:zr.clone(),uv:Ci.getInterpolation(zr,$a,Vr,Ya,rf,$l,af,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ka(i,e,t,n,s,r){zs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Hr.x=r*zs.x-s*zs.y,Hr.y=s*zs.x+r*zs.y):Hr.copy(zs),i.copy(e),i.x+=Hr.x,i.y+=Hr.y,i.applyMatrix4(Yf)}var of=new L,lf=new lt,cf=new lt,fM=new L,uf=new We,Za=new L,Yl=new dn,hf=new We,Kl=new ir,bo=class extends Pe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ud,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ft),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Za),this.boundingBox.expandByPoint(Za)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Za),this.boundingSphere.expandByPoint(Za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yl.copy(this.boundingSphere),Yl.applyMatrix4(s),e.ray.intersectsSphere(Yl)!==!1&&(hf.copy(s).invert(),Kl.copy(e.ray).applyMatrix4(hf),!(this.boundingBox!==null&&Kl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ud?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;lf.fromBufferAttribute(s.attributes.skinIndex,e),cf.fromBufferAttribute(s.attributes.skinWeight,e),of.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=cf.getComponent(r);if(a!==0){let o=lf.getComponent(r);uf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(fM.copy(of).applyMatrix4(uf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},na=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},or=class extends Lt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ot,u=Ot,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},df=new We,pM=new We,So=class i{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:pM;df.multiplyMatrices(o,t[r]),df.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new or(t,e,e,vn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new na),this.bones.push(a),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},hs=class extends Et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hs=new We,ff=new We,Ja=[],pf=new Ft,mM=new We,Gr=new Pe,Wr=new dn,wo=class extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ft),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),pf.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(pf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Wr.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(n),e.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),ff.multiplyMatrices(n,Hs),Gr.matrixWorld=ff,Gr.raycast(e,Ja);for(let a=0,o=Ja.length;a<o;a++){let l=Ja[a];l.instanceId=r,l.object=this,t.push(l)}Ja.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new or(new Float32Array(s*this.count),s,this.count,yu,In));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ia=class extends Qt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},To=new L,Eo=new L,mf=new We,Xr=new ir,ja=new dn,Zl=new L,gf=new L,lr=class extends bt{constructor(e=new wt,t=new ia){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)To.fromBufferAttribute(t,s-1),Eo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=To.distanceTo(Eo);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(s),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;mf.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(mf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let g=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=g,p=m-1;x<p;x+=c){let f=u.getX(x),y=u.getX(x+1),b=Qa(this,e,Xr,l,f,y);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(m-1),p=u.getX(g),f=Qa(this,e,Xr,l,x,p);f&&t.push(f)}}else{let g=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=g,p=m-1;x<p;x+=c){let f=Qa(this,e,Xr,l,x,x+1);f&&t.push(f)}if(this.isLineLoop){let x=Qa(this,e,Xr,l,m-1,g);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qa(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(To.fromBufferAttribute(a,s),Eo.fromBufferAttribute(a,r),t.distanceSqToSegment(To,Eo,Zl,gf)>n)return;Zl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Zl);if(!(l<e.near||l>e.far))return{distance:l,point:gf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var xf=new L,_f=new L,Ao=class extends lr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)xf.fromBufferAttribute(t,s),_f.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xf.distanceTo(_f);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ro=class extends lr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},sa=class extends Qt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yf=new We,Qc=new ir,eo=new dn,to=new L,cr=class extends bt{constructor(e=new wt,t=new sa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;yf.copy(s).invert(),Qc.copy(e.ray).applyMatrix4(yf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let m=d,x=g;m<x;m++){let p=c.getX(m);to.fromBufferAttribute(h,p),vf(to,p,l,s,e,t,this)}}else{let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let m=d,x=g;m<x;m++)to.fromBufferAttribute(h,m),vf(to,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vf(i,e,t,n,s,r,a){let o=Qc.distanceSqToPoint(i);if(o<t){let l=new L;Qc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Co=class extends Lt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Io=class i extends wt{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=zt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,h=new L,d=new Ne,g=new L,m=new L,x=new L,p=0,f=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,g.x=f*1,g.y=-p,g.z=f*0,x.copy(g),g.normalize(),l.push(g.x,g.y,g.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,g.x=f*1,g.y=-p,g.z=f*0,m.copy(g),g.x+=x.x,g.y+=x.y,g.z+=x.z,g.normalize(),l.push(g.x,g.y,g.z),x.copy(m)}for(let y=0;y<=t;y++){let b=n+y*u*s,M=Math.sin(b),C=Math.cos(b);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*M,h.y=e[E].y,h.z=e[E].x*C,a.push(h.x,h.y,h.z),d.x=y/t,d.y=E/(e.length-1),o.push(d.x,d.y);let T=l[3*E+0]*M,I=l[3*E+1],v=l[3*E+0]*C;c.push(T,I,v)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let M=b+y*e.length,C=M,E=M+e.length,T=M+e.length+1,I=M+1;r.push(C,E,I),r.push(T,I,E)}this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("uv",new dt(o,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ni=class i extends wt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,u=new Ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let g=n+h/t*s;c.x=e*Math.cos(g),c.y=e*Math.sin(g),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nn=class i extends wt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],g=[],m=0,x=[],p=n/2,f=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(g,2));function y(){let M=new L,C=new L,E=0,T=(t-e)/n;for(let I=0;I<=r;I++){let v=[],_=I/r,P=_*(t-e)+e;for(let V=0;V<=s;V++){let R=V/s,N=R*l+o,G=Math.sin(N),D=Math.cos(N);C.x=P*G,C.y=-_*n+p,C.z=P*D,h.push(C.x,C.y,C.z),M.set(G,T,D).normalize(),d.push(M.x,M.y,M.z),g.push(R,1-_),v.push(m++)}x.push(v)}for(let I=0;I<s;I++)for(let v=0;v<r;v++){let _=x[v][I],P=x[v+1][I],V=x[v+1][I+1],R=x[v][I+1];(e>0||v!==0)&&(u.push(_,P,R),E+=3),(t>0||v!==r-1)&&(u.push(P,V,R),E+=3)}c.addGroup(f,E,0),f+=E}function b(M){let C=m,E=new Ne,T=new L,I=0,v=M===!0?e:t,_=M===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,p*_,0),d.push(0,_,0),g.push(.5,.5),m++;let P=m;for(let V=0;V<=s;V++){let N=V/s*l+o,G=Math.cos(N),D=Math.sin(N);T.x=v*D,T.y=p*_,T.z=v*G,h.push(T.x,T.y,T.z),d.push(0,_,0),E.x=G*.5+.5,E.y=D*.5*_+.5,g.push(E.x,E.y),m++}for(let V=0;V<s;V++){let R=C+V,N=P+V;M===!0?u.push(N,N+1,R):u.push(N+1,N,R),I+=3}c.addGroup(f,I,M===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Po=class i extends Nn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},eu=class i extends wt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let b=new L,M=new L,C=new L;for(let E=0;E<t.length;E+=3)g(t[E+0],b),g(t[E+1],M),g(t[E+2],C),l(b,M,C,y)}function l(y,b,M,C){let E=C+1,T=[];for(let I=0;I<=E;I++){T[I]=[];let v=y.clone().lerp(M,I/E),_=b.clone().lerp(M,I/E),P=E-I;for(let V=0;V<=P;V++)V===0&&I===E?T[I][V]=v:T[I][V]=v.clone().lerp(_,V/P)}for(let I=0;I<E;I++)for(let v=0;v<2*(E-I)-1;v++){let _=Math.floor(v/2);v%2===0?(d(T[I][_+1]),d(T[I+1][_]),d(T[I][_])):(d(T[I][_+1]),d(T[I+1][_+1]),d(T[I+1][_]))}}function c(y){let b=new L;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(y),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function u(){let y=new L;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let M=p(y)/2/Math.PI+.5,C=f(y)/Math.PI+.5;a.push(M,1-C)}m(),h()}function h(){for(let y=0;y<a.length;y+=6){let b=a[y+0],M=a[y+2],C=a[y+4],E=Math.max(b,M,C),T=Math.min(b,M,C);E>.9&&T<.1&&(b<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function g(y,b){let M=y*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function m(){let y=new L,b=new L,M=new L,C=new L,E=new Ne,T=new Ne,I=new Ne;for(let v=0,_=0;v<r.length;v+=9,_+=6){y.set(r[v+0],r[v+1],r[v+2]),b.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),E.set(a[_+0],a[_+1]),T.set(a[_+2],a[_+3]),I.set(a[_+4],a[_+5]),C.copy(y).add(b).add(M).divideScalar(3);let P=p(C);x(E,_+0,y,P),x(T,_+2,b,P),x(I,_+4,M,P)}}function x(y,b,M,C){C<0&&y.x===1&&(a[b]=y.x-1),M.x===0&&M.z===0&&(a[b]=C/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var ur=class i extends eu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var tn=class i extends wt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,g=new L,m=new Ne;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let f=r+p/n*a;g.x=h*Math.cos(f),g.y=h*Math.sin(f),l.push(g.x,g.y,g.z),c.push(0,0,1),m.x=(g.x/t+1)/2,m.y=(g.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let x=0;x<s;x++){let p=x*(n+1);for(let f=0;f<n;f++){let y=f+p,b=y,M=y+n+1,C=y+n+2,E=y+1;o.push(b,M,E),o.push(M,C,E)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var hr=class i extends wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new L,h=new L,d=new L;for(let g=0;g<=n;g++)for(let m=0;m<=s;m++){let x=m/s*r,p=g/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(x),h.y=(e+t*Math.cos(p))*Math.sin(x),h.z=t*Math.sin(p),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(g/n)}for(let g=1;g<=n;g++)for(let m=1;m<=s;m++){let x=(s+1)*g+m-1,p=(s+1)*(g-1)+m-1,f=(s+1)*(g-1)+m,y=(s+1)*g+m;a.push(x,p,y),a.push(p,f,y)}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var dr=class extends Qt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eu,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pn=class extends dr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var nn=class extends Qt{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eu,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function no(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Mf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Kf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tu=class extends Ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gs,endingEnd:Gs}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ws:r=e,o=2*t-n;break;case lo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ws:a=e,l=2*n-t;break;case lo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,g=this._weightNext,m=(n-t)/(s-t),x=m*m,p=x*m,f=-d*p+2*d*x-d*m,y=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*m+1,b=(-1-g)*p+(1.5+g)*x+.5*m,M=g*p-g*x;for(let C=0;C!==o;++C)r[C]=f*a[u+C]+y*a[c+C]+b*a[l+C]+M*a[h+C];return r}},Lo=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},nu=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=no(t,this.TimeBufferType),this.values=no(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:no(e.times,Array),values:no(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case er:t=this.InterpolantFactoryMethodDiscrete;break;case tr:t=this.InterpolantFactoryMethodLinear;break;case vl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return tr;case this.InterpolantFactoryMethodSmooth:return vl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&gM(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,g=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[d+m]||x!==t[g+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let g=0;g!==n;++g)t[d+g]=t[h+g]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=tr;var ki=class extends bn{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=er;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends bn{};Do.prototype.ValueTypeName="color";var ui=class extends bn{};ui.prototype.ValueTypeName="number";var iu=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)on.slerpFlat(r,0,a,c-o,a,c,l);return r}},hi=class extends bn{InterpolantFactoryMethodLinear(e){return new iu(this.times,this.values,this.getValueSize(),e)}};hi.prototype.ValueTypeName="quaternion";hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends bn{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=er;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends bn{};di.prototype.ValueTypeName="vector";var fr=class{constructor(e="",t=-1,n=[],s=Tu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(yM(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=xM(l);l=Mf(l,1,u),c=Mf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ui(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,g,m,x){if(g.length!==0){let p=[],f=[];Kf(g,p,f,m),p.length!==0&&x.push(new h(d,p,f))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let g={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)g[d[m].morphTargets[x]]=-1;for(let x in g){let p=[],f=[];for(let y=0;y!==d[m].morphTargets.length;++y){let b=d[m];p.push(b.time),f.push(b.morphTarget===x?1:0)}s.push(new ui(".morphTargetInfluence["+x+"]",p,f))}l=g.length*a}else{let g=".bones["+t[h].name+"]";n(di,g+".position",d,"pos",s),n(hi,g+".quaternion",d,"rot",s),n(di,g+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function _M(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ui;case"vector":case"vector2":case"vector3":case"vector4":return di;case"color":return Do;case"quaternion":return hi;case"bool":case"boolean":return ki;case"string":return Oi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function yM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=_M(i.type);if(i.times===void 0){let t=[],n=[];Kf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ii={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},su=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let g=c[h],m=c[h+1];if(g.global&&(g.lastIndex=0),g.test(u))return m}return null}}},vM=new su,fi=class{constructor(e){this.manager=e!==void 0?e:vM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ei={},ru=class extends Error{constructor(e,t){super(e),this.response=t}},ra=class extends fi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ii.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:n,onError:s});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=ei[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),g=d?parseInt(d):0,m=g!==0,x=0,p=new ReadableStream({start(f){y();function y(){h.read().then(({done:b,value:M})=>{if(b)f.close();else{x+=M.byteLength;let C=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:g});for(let E=0,T=u.length;E<T;E++){let I=u[E];I.onProgress&&I.onProgress(C)}f.enqueue(M),y()}},b=>{f.error(b)})}}});return new Response(p)}else throw new ru(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,g=new TextDecoder(d);return c.arrayBuffer().then(m=>g.decode(m))}}}).then(c=>{Ii.add(e,c);let u=ei[e];delete ei[e];for(let h=0,d=u.length;h<d;h++){let g=u[h];g.onLoad&&g.onLoad(c)}}).catch(c=>{let u=ei[e];if(u===void 0)throw this.manager.itemError(e),c;delete ei[e];for(let h=0,d=u.length;h<d;h++){let g=u[h];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var au=class extends fi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ii.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=ea("img");function l(){u(),Ii.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var No=class extends fi{constructor(e){super(e)}load(e,t,n,s){let r=new Lt,a=new au(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},pr=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Uo=class extends pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Jl=new We,bf=new L,Sf=new L,aa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;bf.setFromMatrixPosition(e.matrixWorld),t.position.copy(bf),Sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sf),t.updateMatrixWorld(),Jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ou=class extends aa{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=nr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ko=class extends pr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ou}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},wf=new We,qr=new L,jl=new L,lu=class extends aa{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qr.setFromMatrixPosition(e.matrixWorld),n.position.copy(qr),jl.copy(n.position),jl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jl),n.updateMatrixWorld(),s.makeTranslation(-qr.x,-qr.y,-qr.z),wf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wf)}},Oo=class extends pr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},cu=class extends aa{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mr=class extends pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new cu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Fi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Fo=class extends fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ii.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ii.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ii.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ii.add(e,l),r.manager.itemStart(e)}};var uu=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){on.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;on.multiplyQuaternionsFlat(e,a,e,t,e,n),on.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},Cu="\\[\\]\\.:\\/",MM=new RegExp("["+Cu+"]","g"),Iu="[^"+Cu+"]",bM="[^"+Cu.replace("\\.","")+"]",SM=/((?:WC+[\/:])*)/.source.replace("WC",Iu),wM=/(WCOD+)?/.source.replace("WCOD",bM),TM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Iu),EM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Iu),AM=new RegExp("^"+SM+wM+TM+EM+"$"),RM=["material","materials","bones","map"],hu=class{constructor(e,t,n){let s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(MM,"")}static parseTrackName(e){let t=AM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);RM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=hu;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var du=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Gs,endingEnd:Gs};for(let c=0;c!==a;++c){let u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=wu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Gg:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Tu:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===Vg;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Su){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Ws,s.endingEnd=Ws):(e?s.endingStart=this.zeroSlopeAtStart?Ws:Gs:s.endingStart=lo,t?s.endingEnd=this.zeroSlopeAtEnd?Ws:Gs:s.endingEnd=lo)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},CM=new Float32Array(1),Bo=class extends oi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=s[h],g=d.name,m=u[g];if(m!==void 0)++m.referenceCount,a[h]=m;else{if(m=a[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,g));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;m=new uu(gt.create(n,g,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,g),a[h]=m}o[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Lo(new Float32Array(2),new Float32Array(2),1,CM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?fr.findByName(s,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Tu),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let u=new du(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?fr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fu);function Pu(i,e){if(e===Of)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===la||e===Ho){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===la)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Wo=class extends fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new ju(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Fi.extractUrlBase(e);a=Fi.resolveURL(c,this.path)}else a=Fi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ra(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ep){try{a[je.KHR_BINARY_GLTF]=new Qu(e)}catch(h){s&&s(h);return}r=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ah(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:a[h]=new ku;break;case je.KHR_DRACO_MESH_COMPRESSION:a[h]=new eh(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[h]=new th;break;case je.KHR_MESH_QUANTIZATION:a[h]=new nh;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function IM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Uu=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Re(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Yt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new mr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Oo(u),c.distance=h;break;case"spot":c=new ko(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},ku=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Ct}extendParams(e,t,n){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Yt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}},Ou=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Fu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(o,o)}return Promise.all(r)}},Bu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},zu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Hu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Yt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,At)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Vu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Gu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(o[0],o[1],o[2],Yt),Promise.all(r)}},Wu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Xu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(o[0],o[1],o[2],Yt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,At)),Promise.all(r)}},qu=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},$u=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Yu=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ku=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Zu=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ju=class{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(g){return g.buffer}):a.ready.then(function(){let g=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(g),u,h,d,s.mode,s.filter),g})})}else return null}},ju=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Sn.TRIANGLES&&c.mode!==Sn.TRIANGLE_STRIP&&c.mode!==Sn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,g=[];for(let m of h){let x=new We,p=new L,f=new on,y=new L(1,1,1),b=new wo(m.geometry,m.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,M),l.SCALE&&y.fromBufferAttribute(l.SCALE,M),b.setMatrixAt(M,x.compose(p,f,y));for(let M in l)if(M==="_COLOR_0"){let C=l[M];b.instanceColor=new hs(C.array,C.itemSize,C.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,l[M]);bt.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),g.push(b)}return u.isGroup?(u.clear(),u.add(...g),u):g[0]}))}},ep="glTF",ua=12,Zf={JSON:1313821514,BIN:5130562},Qu=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ua),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ep)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ua,r=new DataView(e,ua),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Zf.JSON){let c=new Uint8Array(e,ua+a,o);this.content=n.decode(c)}else if(l===Zf.BIN){let c=ua+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},eh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=sh[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=sh[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],g=xr[d.componentType];c[h]=g.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(g){for(let m in g.attributes){let x=g.attributes[m],p=l[m];p!==void 0&&(x.normalized=p)}h(g)},o,c,Yt,d)})})}},th=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},nh=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},Xo=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,g=d*h,m=e*c,x=m-c,p=-2*g+3*d,f=g-d,y=1-p,b=f-d+h;for(let M=0;M!==o;M++){let C=a[x+M+o],E=a[x+M+l]*u,T=a[m+M+o],I=a[m+M]*u;r[M]=y*C+b*E+p*T+f*I}return r}},PM=new on,ih=class extends Xo{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return PM.fromArray(r).normalize().toArray(r),r}},Sn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jf={9728:Ot,9729:an,9984:mu,9985:Kr,9986:Vs,9987:Vn},jf={33071:ii,33648:ls,10497:os},Lu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},LM={CUBICSPLINE:void 0,LINEAR:tr,STEP:er},Du={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function DM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new dr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mn})),i.DefaultMaterial}function ds(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function NM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function UM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kM(i){let e,t=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nu(t.attributes):e=i.indices+":"+Nu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Nu(i.targets[n]);return e}function Nu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function rh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function OM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var FM=new We,ah=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new IM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&a<98?this.textureLoader=new No(this.options.manager):this.textureLoader=new Fo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ra(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ds(r,o,s),pi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Fi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Lu[s.type],o=xr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Et(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Lu[s.type],c=xr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,g=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,p;if(g&&g!==h){let f=Math.floor(d/g),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count,b=t.cache.get(y);b||(x=new c(o,f*g,s.count*g/u),b=new ar(x,g/u),t.cache.add(y,b)),p=new us(b,l,d%g/u,m)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),p=new Et(x,l,m);if(s.sparse!==void 0){let f=Lu.SCALAR,y=xr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,C=new y(a[1],b,s.sparse.count*f),E=new c(a[2],M,s.sparse.count*l);o!==null&&(p=new Et(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,I=C.length;T<I;T++){let v=C[T];if(p.setX(v,E[T*l]),l>=2&&p.setY(v,E[T*l+1]),l>=3&&p.setZ(v,E[T*l+2]),l>=4&&p.setW(v,E[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Jf[d.magFilter]||an,u.minFilter=Jf[d.minFilter]||Vn,u.wrapS=jf[d.wrapS]||os,u.wrapT=jf[d.wrapT]||os,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ot&&u.minFilter!==an,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,g){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){let p=new Lt(x);p.needsUpdate=!0,d(p)}),t.load(Fi.resolveURL(h,r.path),m,void 0,g)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),pi(h,a),h.userData.mimeType=a.mimeType||OM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new sa,Qt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ia,Qt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return dr}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){let h=s[je.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Yt),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,At)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Rt);let u=r.alphaMode||Du.OPAQUE;if(u===Du.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Du.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ct&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Ct&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ct){let h=r.emissiveFactor;o.emissive=new Re().setRGB(h[0],h[1],h[2],Yt)}return r.emissiveTexture!==void 0&&a!==Ct&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,At)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),pi(h,r),t.associations.set(h,{materials:e}),r.extensions&&ds(s,h,r),h})}createUniqueName(e){let t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Qf(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=kM(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Qf(new wt,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?DM(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let g=0,m=u.length;g<m;g++){let x=u[g],p=a[g],f,y=c[g];if(p.mode===Sn.TRIANGLES||p.mode===Sn.TRIANGLE_STRIP||p.mode===Sn.TRIANGLE_FAN||p.mode===void 0)f=r.isSkinnedMesh===!0?new bo(x,y):new Pe(x,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===Sn.TRIANGLE_STRIP?f.geometry=Pu(f.geometry,Ho):p.mode===Sn.TRIANGLE_FAN&&(f.geometry=Pu(f.geometry,la));else if(p.mode===Sn.LINES)f=new Ao(x,y);else if(p.mode===Sn.LINE_STRIP)f=new lr(x,y);else if(p.mode===Sn.LINE_LOOP)f=new Ro(x,y);else if(p.mode===Sn.POINTS)f=new cr(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&UM(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),pi(f,r),p.extensions&&ds(s,f,p),t.assignFinalMaterial(f),h.push(f)}for(let g=0,m=h.length;g<m;g++)t.associations.set(h[g],{meshes:e,primitives:g});if(h.length===1)return r.extensions&&ds(s,h[0],r),h[0];let d=new ct;r.extensions&&ds(s,d,r),t.associations.set(d,{meshes:e});for(let g=0,m=h.length;g<m;g++)d.add(h[g]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(Bf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new rr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new We;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new So(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let g=s.channels[h],m=s.samplers[g.sampler],x=g.target,p=x.node,f=s.parameters!==void 0?s.parameters[m.input]:m.input,y=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",y)),c.push(m),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],g=h[1],m=h[2],x=h[3],p=h[4],f=[];for(let y=0,b=d.length;y<b;y++){let M=d[y],C=g[y],E=m[y],T=x[y],I=p[y];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let v=n._createAnimationTracks(M,C,E,T,I);if(v)for(let _=0;_<v.length;_++)f.push(v[_])}return new fr(r,void 0,f)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(g){g.isSkinnedMesh&&g.bind(d,FM)});for(let g=0,m=h.length;g<m;g++)u.add(h[g]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new na:c.length>1?u=new ct:c.length===1?u=c[0]:u=new bt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),pi(u,r),r.extensions&&ds(n,u,r),r.matrix!==void 0){let h=new We;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ct;n.name&&(r.name=s.createUniqueName(n.name)),pi(r,n),n.extensions&&ds(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,g]of s.associations)(d instanceof Qt||d instanceof Lt)&&h.set(d,g);return u.traverse(d=>{let g=s.associations.get(d);g!=null&&h.set(d,g)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];Bi[r.path]===Bi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Bi[r.path]){case Bi.weights:c=ui;break;case Bi.rotation:c=hi;break;case Bi.position:case Bi.scale:c=di;break;default:switch(n.itemSize){case 1:c=ui;break;case 2:case 3:default:c=di;break}break}let u=s.interpolation!==void 0?LM[s.interpolation]:tr,h=this._getArrayFromAccessor(n);for(let d=0,g=l.length;d<g;d++){let m=new c(l[d]+"."+Bi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=rh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof hi?ih:Xo;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function BM(i,e,t){let n=e.attributes,s=new Ft;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){let u=rh(xr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,l=new L;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],g=d.min,m=d.max;if(g!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(g[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(g[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(g[2]),Math.abs(m[2]))),d.normalized){let x=rh(xr[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new dn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Qf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=sh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return et.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),pi(i,e),BM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?NM(i,e.targets,t):i})}var oh={_about:"Hero moves. Times in frames at 60 Hz (startup = frames before the hit, active = frames the hit can land, recovery = frames after). reach in metres, arc in radians. balance = Balance points added on hit. All numbers are first guesses until people play.",light1:{role:"string",startup:5,active:3,recovery:13,next:"light2",nextFrom:7,cancel:7,dmg:6,balance:3,reach:1.9,arc:1.7,lunge:.35,stop:3,clip:"attack",sfx:"light"},light2:{role:"string",startup:5,active:3,recovery:14,next:"light3",nextFrom:7,cancel:7,dmg:7,balance:3.5,reach:1.9,arc:1.7,lunge:.35,stop:3,clip:"slash2",sfx:"light"},light3:{role:"string",startup:8,active:4,recovery:20,cancel:11,dmg:10,balance:5,reach:2,arc:1.9,lunge:.6,stop:5,clip:"slash3",sfx:"heavy"},sunder:{role:"opener",cd:2.4,startup:9,active:4,recovery:16,cancel:13,dmg:9,balance:4,apply:{cracked:1},reach:2.1,arc:1.5,lunge:.8,stop:5,clip:"sunder",sfx:"sunder"},tether:{role:"linker",cd:3,startup:7,active:6,recovery:14,cancel:13,dmg:4,balance:6,apply:{bound:1},reach:6.5,arc:.6,lunge:0,stop:4,clip:"tether",sfx:"tether"},breaker:{role:"ender",cd:4,startup:16,active:5,recovery:24,cancel:21,dmg:14,balance:8,consume:{cracked:{dmg:8,balance:16},bound:{dmg:4,balance:12}},reach:2.4,arc:1.9,lunge:.5,stop:7,stopPerStatus:2,clip:"breaker",sfx:"breaker"},giantfall:{role:"finisher",startup:18,active:6,recovery:30,dmg:40,perComboHit:3,reach:3.2,arc:3.2,lunge:1.2,stop:18,slow:[.5,.35],clip:"giantfall",sfx:"giantfall"},counter:{role:"counter",startup:7,active:4,recovery:16,cancel:11,dmg:60,balance:24,reach:2.6,arc:2.2,lunge:5,stop:14,slow:[.45,.35],clip:"slash3",sfx:"heavy",_note:"only after a perfect roll (rules.counter): the hero leaps up to lunge metres at the giant and is safe until the blow lands"},dodge:{clip:"roll",frames:17,iframes:20,perfect:11,dist:3,cd:.45,cancelFrom:12},_cancel:"What a move can be cut into. 'hit' = only after it landed and from its cancel frame; 'recovery' = from the first recovery frame even on a miss; 'hitOrRecovery' = either; 'any' = at any frame (light hits never trap you); 'always' = from nextFrom, hit or miss.",cancelRules:{string:{next:"always",skill:"hit",dodge:"any"},opener:{light:"hit",skill:"hit",dodge:"hitOrRecovery"},linker:{light:"hit",skill:"hit",dodge:"hitOrRecovery"},ender:{light:"hit",skill:"hit",dodge:"recovery"},counter:{light:"hit",skill:"hit",dodge:"hitOrRecovery"},finisher:{dodge:"recovery"}}};var lh={_about:"Rules shared by every fight. Seconds unless the name says frames. First guesses until people play; sources in design/NUMBERS.md.",arena:{radius:8.2},hero:{hp:100,speed:5.2,radius:.45,hurtIframes:.6,hurtLock:.25,hurtPush:1.2,moveInMove:.12,aimAssist:3,pullTime:.16},input:{buffer:.15,dodgeBuffer:.45},combo:{window:2,cap:20,variety:[1,1,1.3,1.6],repeat:.6},balance:{idle:1.5,drain:20,drainFloor:.35},topple:{time:4,dmgMul:2,grow:1.2,getup:.9,afterFinisher:.6,quake:{r:2.4,dmg:60},fallWindow:1.4},status:{cracked:{max:2,time:6,balanceGainPerStack:.25},bound:{max:1,time:3,giantTimeMul:.65}},perfect:{balance:8,slow:[.3,.3]},counter:{_about:"Perfect-dodge counter: after a perfect roll, Strike within window seconds (game time) leaps at whoever struck (a standing giant, a small foe, or a stone's thrower within the leap). On in the game (Jame 21 Nov); ?nocounter=1 turns it off for comparison.",enabled:!0,window:.6},feel:{stopGap:.25,toppleStop:14,toppleSlow:[.45,.3],winSlow:[1.2,.25]},assist:{offerAfter:2,startPct:20,perDownPct:5,capPct:60},flow:{intro:2}};var Kt={_about:"Giants. wind = telegraph time before the blow (seconds), open = punish window after it, track = share of the wind-up during which a slam follows the hero before it locks. range = [min, max] distance from the giant at which it picks this attack. First guesses until people play.",hollen:{name:"Hollen",title:"Warden of the East Gate",hp:3150,balance:200,radius:1.6,height:5.4,speed:1.35,turn:2.4,reachWant:2.6,think:[.3,.8],phases:[{from:1,attacks:["slam","sweep","charge"],windMul:1,openMul:1},{from:.5,attacks:["slam","sweep","charge","slamSweep"],windMul:.85,openMul:.8,roar:1.4}],attacks:{slam:{shape:"circle",at:"hero",r:2.3,wind:1.05,track:.5,open:1.1,dmg:18,range:[0,7.5],weight:3,sfx:"slam"},sweep:{shape:"ring",at:"self",r:3.9,inner:0,wind:.95,open:.9,dmg:14,range:[0,3.6],weight:3,sfx:"sweep"},charge:{shape:"lane",at:"self",w:3.2,len:9,wind:1,dash:.55,open:1.3,dmg:20,range:[4,30],weight:2,sfx:"charge"},slamSweep:{chain:["slam","sweep"],weight:2}},tint:null},cairn:{name:"Cairn",title:"the Young Warden",hp:1500,balance:80,radius:1.25,height:3.6,speed:1.25,turn:2.2,reachWant:2.3,think:[.6,1.2],tint:"#c7c08a",phases:[{from:1,attacks:["slam","sweep"],windMul:1,openMul:1}],attacks:{slam:{shape:"circle",at:"hero",r:2,wind:1.15,track:.45,open:1.4,dmg:12,range:[0,7],weight:3,sfx:"slam"},sweep:{shape:"ring",at:"self",r:3.2,inner:0,wind:1,open:1.2,dmg:9,range:[0,3],weight:2,sfx:"sweep"}}}};var tp={_about:"Elara's lines. Each event has several lines; she says one, never the same one twice in a row, and waits `gap` seconds between lines and stays up long enough to read (at least `show` seconds, or words / `wordsPerSec`) unless the event is urgent. {key:x} is replaced by the key the player uses for x. Plain words, short, warm, a little teasing. Never 'you died'. Non-urgent lines wait `gap` seconds after any line; the same event speaks at most once per `repeatGap` seconds. Urgent = the few story moments (first fight, giant intros, first topple, the end of a run).",gap:18,show:2.8,events:{intro:{urgent:!0,lines:["That's Hollen. Oldest of them all. Be gentle \u2014 he only forgot why he stands.","Hollen again. He's not angry at you. He's just lost.","Ready? Crack him, hold him, break him \u2014 in any order. Mixing is what fills the bar."]},firstFight:{urgent:!0,lines:["Little stones first. Move with {key:move}, strike with {key:light}. Watch the red on the floor \u2014 that's where they land."]},firstWind:{lines:["Red floor means he's coming down there. Roll out with {key:dodge}!","See him wind up? That's your cue to roll."],urgent:!1},firstHurt:{lines:["Ouch. Roll when the red fills up, not before.","Get out of the red, Breaker!"],urgent:!1},firstPerfect:{urgent:!1,lines:["Perfect! Rolling right as he lands shakes his balance.","Ooh \u2014 right on the beat. He felt that."]},firstCounter:{urgent:!1,lines:["He's open \u2014 {key:light}, strike back now!","Now! {key:light} \u2014 hit him before he recovers!"]},noSkills:{lines:["Try {key:sunder} \u2014 Sunder cracks the stone.","Strikes alone won't bring him down. Crack him with {key:sunder}."],urgent:!1},firstCracked:{urgent:!1,lines:["He's cracked! Now hold him with {key:tether}, or break it open with {key:breaker}.","Cracked! A Break on that will hurt his balance a lot."]},firstBound:{lines:["Bound! He's slow now. Finish with {key:breaker}.","Got him tethered. Break it, quick!"],urgent:!1},firstSpend:{urgent:!1,lines:["See the gold bar jump? That's his balance going.","That's it \u2014 crack, hold, break. Look at his balance bar!"]},teeter:{lines:["He's teetering! One more push!","Almost \u2014 he's swaying!"],urgent:!1},firstTopple:{urgent:!0,lines:["He's DOWN! Hit him while he's down \u2014 when Break says FALL!, finish him with {key:breaker}.","Down he goes! Beat on him \u2014 then Giantfall with {key:breaker} when it says FALL!"]},topple:{urgent:!1,lines:["Down again!","Timber!","He's down \u2014 make it count!","Again! He'll be steadier next time."]},finisherBig:{lines:["That was beautiful.","The terrace shook. Did you feel it?","Big combo, big fall. I like your style."],urgent:!1},repeat:{lines:["Same trick again? He's learning it. Mix it up.","You keep doing that one. Try a different order!","Variety, Breaker. The bar fills faster when you mix."],urgent:!1},lowHp:{urgent:!1,lines:["Careful! You're hurt. Roll more, swing less.","Breathe. Watch him. Roll."]},phase2:{urgent:!1,lines:["He's angry now. Faster swings \u2014 watch closely.","Half his strength gone and he knows it. Stay sharp!"]},winFirst:{urgent:!0,lines:["\u266A Hm-mm, hm-mm\u2026 \u266A Sleep now, Hollen. \u2026Thank you, Breaker."]},win:{urgent:!0,lines:["\u266A Hm-mm\u2026 \u266A He's sleeping. Gently done.","\u266A Hm, hm-mm\u2026 \u266A Rest, old Warden.","\u266A Hm-mm\u2026 \u266A Another fall. You're getting good at this."]},down1:{urgent:!0,lines:["Get up, Breaker. He was hurting too.","Up you get. You saw his moves now."]},down2:{urgent:!0,lines:["That was close. If you want, I can take some of the hits with you \u2014 your choice.","Again? Good. I'm staying right here."]},downMore:{urgent:!0,lines:["Every fall teaches something. What did he do just before?","You're closer each time. I can see it.","Deep breath. Mix your skills \u2014 the bar fills faster."]},close:{urgent:!0,lines:["He was SO close to falling. One more try?","A sliver! He had a sliver left!"]},runAgain:{urgent:!0,lines:["The terrace again. You know them better now.","Up we go. Crack, hold, break \u2014 any order, just mix.","Back where we started \u2014 but you're not the same Breaker."]},firstFoeWind:{lines:["See that little red circle? It's about to jump at you. Roll!","Shardlings lunge after they glow. Hit them first \u2014 a hit breaks their wind-up."],urgent:!1},firstKill:{lines:["One down!","Shardlings are bits of Warden stone. They'll sleep too.","Nice. Keep moving."],urgent:!1},waveNext:{lines:["More coming. The far ones throw stones \u2014 Tether pulls them close.","Slingers keep their distance. {key:tether} drags them in.","Here comes the next lot."],urgent:!1},swarm:{urgent:!1,lines:["The wind's turning. Dusk is when Hollen wakes.","A whole swarm. Stay moving, Breaker.","They're everywhere \u2014 use the walls, don't get surrounded."]},pickFirst:{urgent:!0,lines:["Rest a moment. Pick a power \u2014 each one changes how your combos work."]},pick:{urgent:!1,lines:["Choose well.","Which one feels like you?","Take a breath. Then choose."]},picked:{lines:["Good choice.","Ooh, I like that one.","Let's see what that does to them."],urgent:!1},cairnIntro:{urgent:!0,lines:["That's Cairn. The youngest Warden. Watch the gold bar under his name \u2014 fill it and he falls.","Cairn! He's clumsy. Fill the gold bar under his name and he'll sit down hard."]},cairnAgain:{urgent:!0,lines:["Cairn again. You know his trick.","Hello again, little Warden."]},cairnRest:{urgent:!0,lines:["Sleep, Cairn. ...Hear that? Something big is waking.","He's resting. That was the easy one."]},hollenIntro:{urgent:!0,lines:["That's Hollen. Oldest of them all. Be gentle \u2014 he only forgot why he stands.","Hollen. He guarded the East Gate before anyone remembers. Bring him down."]},hollenAgain:{urgent:!0,lines:["Hollen again. He remembers you too.","Him. Deep breath."]},adds:{lines:["He's calling the little ones! Topple him next to them \u2014 the fall smashes them.","Shardlings! Lure them close to him, then bring him down on them."],urgent:!1},firstCrush:{urgent:!1,lines:["Did you see that? His fall smashed them!","Ha! Bring him down next to them \u2014 the ground does the rest."]},crush:{lines:["Crushed!","The fall did that. Beautiful.","Timber \u2014 and the little ones with him."],urgent:!1}},repeatGap:90,wordsPerSec:3.5};var np={_about:"Elara in Thai (test link only, src/i18n.js). Same events and placeholders as lines.json. charsPerSec: Thai has few spaces, so reading time is counted in characters.",gap:18,show:2.8,events:{intro:{urgent:!0,lines:["\u0E19\u0E31\u0E48\u0E19\u0E04\u0E37\u0E2D Hollen \u0E41\u0E01\u0E48\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E2B\u0E21\u0E39\u0E48\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32 \u0E04\u0E48\u0E2D\u0E22\u0E46 \u0E19\u0E30 \u0E40\u0E02\u0E32\u0E41\u0E04\u0E48\u0E25\u0E37\u0E21\u0E44\u0E1B\u0E27\u0E48\u0E32\u0E22\u0E37\u0E19\u0E40\u0E1D\u0E49\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E30\u0E44\u0E23","Hollen \u0E2D\u0E35\u0E01\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E02\u0E32\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E42\u0E01\u0E23\u0E18\u0E40\u0E23\u0E32 \u0E40\u0E02\u0E32\u0E41\u0E04\u0E48\u0E2B\u0E25\u0E07\u0E17\u0E32\u0E07","\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E44\u0E2B\u0E21? \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E23\u0E49\u0E32\u0E27 \u0E21\u0E31\u0E14\u0E44\u0E27\u0E49 \u0E41\u0E25\u0E49\u0E27\u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01 \u0E25\u0E33\u0E14\u0E31\u0E1A\u0E44\u0E2B\u0E19\u0E01\u0E47\u0E44\u0E14\u0E49 \u0E1C\u0E2A\u0E21\u0E2A\u0E01\u0E34\u0E25\u0E41\u0E25\u0E49\u0E27\u0E41\u0E16\u0E1A\u0E25\u0E49\u0E21\u0E08\u0E30\u0E40\u0E15\u0E47\u0E21\u0E40\u0E23\u0E47\u0E27"]},firstFight:{urgent:!0,lines:["\u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01\u0E2B\u0E34\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E47\u0E01\u0E01\u0E48\u0E2D\u0E19 \u0E40\u0E14\u0E34\u0E19\u0E14\u0E49\u0E27\u0E22 {key:move} \u0E1F\u0E31\u0E19\u0E14\u0E49\u0E27\u0E22 {key:light} \u0E14\u0E39\u0E1E\u0E37\u0E49\u0E19\u0E2A\u0E35\u0E41\u0E14\u0E07\u0E44\u0E27\u0E49 \u0E19\u0E31\u0E48\u0E19\u0E04\u0E37\u0E2D\u0E08\u0E38\u0E14\u0E17\u0E35\u0E48\u0E21\u0E31\u0E19\u0E08\u0E30\u0E1F\u0E32\u0E14\u0E25\u0E07\u0E21\u0E32"]},firstWind:{lines:["\u0E1E\u0E37\u0E49\u0E19\u0E41\u0E14\u0E07\u0E04\u0E37\u0E2D\u0E08\u0E38\u0E14\u0E17\u0E35\u0E48\u0E21\u0E31\u0E19\u0E08\u0E30\u0E1F\u0E32\u0E14\u0E25\u0E07\u0E21\u0E32 \u0E21\u0E49\u0E27\u0E19\u0E2D\u0E2D\u0E01\u0E14\u0E49\u0E27\u0E22 {key:dodge}!","\u0E40\u0E2B\u0E47\u0E19\u0E21\u0E31\u0E19\u0E07\u0E49\u0E32\u0E07\u0E44\u0E2B\u0E21? \u0E19\u0E31\u0E48\u0E19\u0E41\u0E2B\u0E25\u0E30\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E13\u0E43\u0E2B\u0E49\u0E21\u0E49\u0E27\u0E19"],urgent:!1},firstHurt:{lines:["\u0E42\u0E2D\u0E4A\u0E22 \u0E21\u0E49\u0E27\u0E19\u0E15\u0E2D\u0E19\u0E2A\u0E35\u0E41\u0E14\u0E07\u0E40\u0E15\u0E47\u0E21\u0E27\u0E07 \u0E2D\u0E22\u0E48\u0E32\u0E21\u0E49\u0E27\u0E19\u0E01\u0E48\u0E2D\u0E19","\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E2A\u0E35\u0E41\u0E14\u0E07\u0E40\u0E23\u0E47\u0E27 \u0E19\u0E31\u0E01\u0E17\u0E38\u0E1A!"],urgent:!1},firstPerfect:{urgent:!1,lines:["\u0E2B\u0E25\u0E1A\u0E1E\u0E2D\u0E14\u0E35! \u0E21\u0E49\u0E27\u0E19\u0E15\u0E2D\u0E19\u0E21\u0E31\u0E19\u0E1F\u0E32\u0E14\u0E25\u0E07\u0E1E\u0E2D\u0E14\u0E35 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E21\u0E31\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E25\u0E31\u0E01","\u0E42\u0E2D\u0E49 \u0E15\u0E23\u0E07\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E30\u0E40\u0E1B\u0E4A\u0E30 \u0E21\u0E31\u0E19\u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E40\u0E25\u0E22"]},firstCounter:{urgent:!1,lines:["\u0E21\u0E31\u0E19\u0E40\u0E1B\u0E34\u0E14\u0E0A\u0E48\u0E2D\u0E07! \u0E01\u0E14 {key:light} \u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E40\u0E25\u0E22!","\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49! {key:light} \u0E15\u0E35\u0E01\u0E48\u0E2D\u0E19\u0E21\u0E31\u0E19\u0E15\u0E31\u0E49\u0E07\u0E15\u0E31\u0E27!"]},noSkills:{lines:["\u0E25\u0E2D\u0E07 {key:sunder} \u0E2A\u0E34 \u0E17\u0E38\u0E1A\u0E23\u0E49\u0E32\u0E27\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E2B\u0E34\u0E19\u0E23\u0E49\u0E32\u0E27","\u0E1F\u0E31\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E25\u0E49\u0E21\u0E21\u0E31\u0E19\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E2B\u0E23\u0E2D\u0E01 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E21\u0E31\u0E19\u0E23\u0E49\u0E32\u0E27\u0E14\u0E49\u0E27\u0E22 {key:sunder}"],urgent:!1},firstCracked:{urgent:!1,lines:["\u0E21\u0E31\u0E19\u0E23\u0E49\u0E32\u0E27\u0E41\u0E25\u0E49\u0E27! \u0E21\u0E31\u0E14\u0E44\u0E27\u0E49\u0E14\u0E49\u0E27\u0E22 {key:tether} \u0E2B\u0E23\u0E37\u0E2D\u0E17\u0E38\u0E1A\u0E43\u0E2B\u0E49\u0E41\u0E15\u0E01\u0E14\u0E49\u0E27\u0E22 {key:breaker}","\u0E23\u0E49\u0E32\u0E27\u0E41\u0E25\u0E49\u0E27! \u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01\u0E15\u0E23\u0E07\u0E19\u0E31\u0E49\u0E19 \u0E41\u0E16\u0E1A\u0E25\u0E49\u0E21\u0E08\u0E30\u0E02\u0E36\u0E49\u0E19\u0E40\u0E22\u0E2D\u0E30\u0E21\u0E32\u0E01"]},firstBound:{lines:["\u0E21\u0E31\u0E14\u0E44\u0E14\u0E49\u0E41\u0E25\u0E49\u0E27! \u0E21\u0E31\u0E19\u0E0A\u0E49\u0E32\u0E25\u0E07 \u0E1B\u0E34\u0E14\u0E14\u0E49\u0E27\u0E22 {key:breaker}","\u0E21\u0E31\u0E14\u0E21\u0E31\u0E19\u0E44\u0E27\u0E49\u0E41\u0E25\u0E49\u0E27 \u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01\u0E40\u0E23\u0E47\u0E27!"],urgent:!1},firstSpend:{urgent:!1,lines:["\u0E40\u0E2B\u0E47\u0E19\u0E41\u0E16\u0E1A\u0E17\u0E2D\u0E07\u0E01\u0E23\u0E30\u0E42\u0E14\u0E14\u0E02\u0E36\u0E49\u0E19\u0E44\u0E2B\u0E21? \u0E19\u0E31\u0E48\u0E19\u0E04\u0E37\u0E2D\u0E21\u0E31\u0E19\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E25\u0E31\u0E01","\u0E19\u0E31\u0E48\u0E19\u0E41\u0E2B\u0E25\u0E30 \u0E23\u0E49\u0E32\u0E27 \u0E21\u0E31\u0E14 \u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01 \u0E14\u0E39\u0E41\u0E16\u0E1A\u0E25\u0E49\u0E21\u0E02\u0E2D\u0E07\u0E21\u0E31\u0E19\u0E2A\u0E34!"]},teeter:{lines:["\u0E21\u0E31\u0E19\u0E42\u0E2D\u0E19\u0E40\u0E2D\u0E19\u0E41\u0E25\u0E49\u0E27! \u0E2D\u0E35\u0E01\u0E19\u0E34\u0E14\u0E40\u0E14\u0E35\u0E22\u0E27!","\u0E40\u0E01\u0E37\u0E2D\u0E1A\u0E41\u0E25\u0E49\u0E27 \u0E21\u0E31\u0E19\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E0B!"],urgent:!1},firstTopple:{urgent:!0,lines:["\u0E21\u0E31\u0E19\u0E25\u0E49\u0E21\u0E41\u0E25\u0E49\u0E27! \u0E15\u0E35\u0E15\u0E2D\u0E19\u0E21\u0E31\u0E19\u0E25\u0E49\u0E21\u0E2D\u0E22\u0E39\u0E48 \u0E1E\u0E2D\u0E1B\u0E38\u0E48\u0E21\u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01\u0E02\u0E36\u0E49\u0E19\u0E27\u0E48\u0E32 \u0E1B\u0E34\u0E14\u0E09\u0E32\u0E01! \u0E01\u0E14 {key:breaker} \u0E08\u0E1A\u0E21\u0E31\u0E19\u0E40\u0E25\u0E22","\u0E25\u0E49\u0E21\u0E25\u0E07\u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27! \u0E23\u0E38\u0E21\u0E15\u0E35\u0E40\u0E25\u0E22 \u0E41\u0E25\u0E49\u0E27\u0E1E\u0E2D\u0E02\u0E36\u0E49\u0E19\u0E27\u0E48\u0E32 \u0E1B\u0E34\u0E14\u0E09\u0E32\u0E01! \u0E01\u0E14 {key:breaker}"]},topple:{urgent:!1,lines:["\u0E25\u0E49\u0E21\u0E2D\u0E35\u0E01\u0E41\u0E25\u0E49\u0E27!","\u0E25\u0E49\u0E21\u0E21\u0E21!","\u0E21\u0E31\u0E19\u0E25\u0E49\u0E21\u0E41\u0E25\u0E49\u0E27 \u0E15\u0E35\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E49\u0E21!","\u0E2D\u0E35\u0E01\u0E41\u0E25\u0E49\u0E27! \u0E04\u0E23\u0E31\u0E49\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E21\u0E31\u0E19\u0E08\u0E30\u0E22\u0E37\u0E19\u0E21\u0E31\u0E48\u0E19\u0E02\u0E36\u0E49\u0E19\u0E19\u0E30"]},finisherBig:{lines:["\u0E2A\u0E27\u0E22\u0E21\u0E32\u0E01","\u0E25\u0E32\u0E19\u0E2B\u0E34\u0E19\u0E2A\u0E31\u0E48\u0E19\u0E44\u0E1B\u0E2B\u0E21\u0E14 \u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E44\u0E2B\u0E21?","\u0E04\u0E2D\u0E21\u0E42\u0E1A\u0E22\u0E32\u0E27 \u0E25\u0E49\u0E21\u0E41\u0E23\u0E07 \u0E0A\u0E2D\u0E1A\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E19\u0E35\u0E49"],urgent:!1},repeat:{lines:["\u0E17\u0E48\u0E32\u0E40\u0E14\u0E34\u0E21\u0E2D\u0E35\u0E01\u0E41\u0E25\u0E49\u0E27? \u0E21\u0E31\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E33\u0E44\u0E14\u0E49\u0E41\u0E25\u0E49\u0E27\u0E19\u0E30 \u0E25\u0E2D\u0E07\u0E1C\u0E2A\u0E21\u0E14\u0E39","\u0E43\u0E0A\u0E49\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19\u0E0B\u0E49\u0E33\u0E46 \u0E25\u0E2D\u0E07\u0E2A\u0E25\u0E31\u0E1A\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E14\u0E39\u0E2A\u0E34!","\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22\u0E2B\u0E19\u0E48\u0E2D\u0E22 \u0E19\u0E31\u0E01\u0E17\u0E38\u0E1A \u0E1C\u0E2A\u0E21\u0E2A\u0E01\u0E34\u0E25\u0E41\u0E25\u0E49\u0E27\u0E41\u0E16\u0E1A\u0E40\u0E15\u0E47\u0E21\u0E40\u0E23\u0E47\u0E27\u0E01\u0E27\u0E48\u0E32"],urgent:!1},lowHp:{urgent:!1,lines:["\u0E23\u0E30\u0E27\u0E31\u0E07! \u0E40\u0E08\u0E47\u0E1A\u0E41\u0E25\u0E49\u0E27 \u0E21\u0E49\u0E27\u0E19\u0E40\u0E22\u0E2D\u0E30\u0E46 \u0E1F\u0E31\u0E19\u0E19\u0E49\u0E2D\u0E22\u0E25\u0E07","\u0E2B\u0E32\u0E22\u0E43\u0E08\u0E25\u0E36\u0E01\u0E46 \u0E14\u0E39\u0E21\u0E31\u0E19\u0E44\u0E27\u0E49 \u0E41\u0E25\u0E49\u0E27\u0E21\u0E49\u0E27\u0E19"]},phase2:{urgent:!1,lines:["\u0E21\u0E31\u0E19\u0E42\u0E01\u0E23\u0E18\u0E41\u0E25\u0E49\u0E27 \u0E1F\u0E32\u0E14\u0E40\u0E23\u0E47\u0E27\u0E02\u0E36\u0E49\u0E19 \u0E14\u0E39\u0E14\u0E35\u0E46","\u0E41\u0E23\u0E07\u0E21\u0E31\u0E19\u0E2B\u0E32\u0E22\u0E44\u0E1B\u0E04\u0E23\u0E36\u0E48\u0E07\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E41\u0E25\u0E49\u0E27 \u0E21\u0E31\u0E19\u0E23\u0E39\u0E49\u0E15\u0E31\u0E27 \u0E23\u0E30\u0E27\u0E31\u0E07\u0E44\u0E27\u0E49!"]},winFirst:{urgent:!0,lines:["\u266A \u0E2E\u0E36\u0E21-\u0E21\u0E21 \u0E2E\u0E36\u0E21-\u0E21\u0E21\u2026 \u266A \u0E2B\u0E25\u0E31\u0E1A\u0E40\u0E16\u0E2D\u0E30 Hollen \u2026\u0E02\u0E2D\u0E1A\u0E43\u0E08\u0E19\u0E30 \u0E19\u0E31\u0E01\u0E17\u0E38\u0E1A"]},win:{urgent:!0,lines:["\u266A \u0E2E\u0E36\u0E21-\u0E21\u0E21\u2026 \u266A \u0E40\u0E02\u0E32\u0E2B\u0E25\u0E31\u0E1A\u0E41\u0E25\u0E49\u0E27 \u0E17\u0E33\u0E44\u0E14\u0E49\u0E19\u0E38\u0E48\u0E21\u0E19\u0E27\u0E25\u0E14\u0E35","\u266A \u0E2E\u0E36\u0E21 \u0E2E\u0E36\u0E21-\u0E21\u0E21\u2026 \u266A \u0E1E\u0E31\u0E01\u0E40\u0E16\u0E2D\u0E30 \u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E1C\u0E39\u0E49\u0E40\u0E12\u0E48\u0E32","\u266A \u0E2E\u0E36\u0E21-\u0E21\u0E21\u2026 \u266A \u0E25\u0E49\u0E21\u0E44\u0E14\u0E49\u0E2D\u0E35\u0E01\u0E15\u0E31\u0E27 \u0E40\u0E01\u0E48\u0E07\u0E02\u0E36\u0E49\u0E19\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E22\u0E46 \u0E19\u0E30"]},down1:{urgent:!0,lines:["\u0E25\u0E38\u0E01\u0E02\u0E36\u0E49\u0E19\u0E21\u0E32 \u0E19\u0E31\u0E01\u0E17\u0E38\u0E1A \u0E21\u0E31\u0E19\u0E01\u0E47\u0E40\u0E08\u0E47\u0E1A\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E01\u0E31\u0E19","\u0E25\u0E38\u0E01\u0E40\u0E16\u0E2D\u0E30 \u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E40\u0E2B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E21\u0E31\u0E19\u0E2B\u0E21\u0E14\u0E41\u0E25\u0E49\u0E27"]},down2:{urgent:!0,lines:["\u0E40\u0E09\u0E35\u0E22\u0E14\u0E09\u0E34\u0E27 \u0E16\u0E49\u0E32\u0E2D\u0E22\u0E32\u0E01\u0E44\u0E14\u0E49 \u0E09\u0E31\u0E19\u0E0A\u0E48\u0E27\u0E22\u0E23\u0E31\u0E1A\u0E41\u0E23\u0E07\u0E15\u0E35\u0E01\u0E31\u0E1A\u0E40\u0E18\u0E2D\u0E44\u0E14\u0E49\u0E19\u0E30 \u0E41\u0E25\u0E49\u0E27\u0E41\u0E15\u0E48\u0E40\u0E18\u0E2D\u0E40\u0E25\u0E37\u0E2D\u0E01","\u0E2D\u0E35\u0E01\u0E23\u0E2D\u0E1A\u0E40\u0E2B\u0E23\u0E2D? \u0E14\u0E35\u0E40\u0E25\u0E22 \u0E09\u0E31\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E15\u0E23\u0E07\u0E19\u0E35\u0E49\u0E19\u0E30"]},downMore:{urgent:!0,lines:["\u0E25\u0E49\u0E21\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E31\u0E49\u0E19\u0E21\u0E31\u0E19\u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23?","\u0E43\u0E01\u0E25\u0E49\u0E02\u0E36\u0E49\u0E19\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 \u0E09\u0E31\u0E19\u0E40\u0E2B\u0E47\u0E19\u0E19\u0E30","\u0E2B\u0E32\u0E22\u0E43\u0E08\u0E25\u0E36\u0E01\u0E46 \u0E1C\u0E2A\u0E21\u0E2A\u0E01\u0E34\u0E25\u0E44\u0E27\u0E49 \u0E41\u0E16\u0E1A\u0E08\u0E30\u0E40\u0E15\u0E47\u0E21\u0E40\u0E23\u0E47\u0E27\u0E02\u0E36\u0E49\u0E19"]},close:{urgent:!0,lines:["\u0E21\u0E31\u0E19\u0E40\u0E01\u0E37\u0E2D\u0E1A\u0E25\u0E49\u0E21\u0E41\u0E25\u0E49\u0E27\u0E08\u0E23\u0E34\u0E07\u0E46! \u0E2D\u0E35\u0E01\u0E2A\u0E31\u0E01\u0E23\u0E2D\u0E1A\u0E44\u0E2B\u0E21?","\u0E19\u0E34\u0E14\u0E40\u0E14\u0E35\u0E22\u0E27! \u0E21\u0E31\u0E19\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E41\u0E23\u0E07\u0E19\u0E34\u0E14\u0E40\u0E14\u0E35\u0E22\u0E27\u0E40\u0E2D\u0E07!"]},runAgain:{urgent:!0,lines:["\u0E25\u0E32\u0E19\u0E2B\u0E34\u0E19\u0E2D\u0E35\u0E01\u0E23\u0E2D\u0E1A \u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01\u0E1E\u0E27\u0E01\u0E21\u0E31\u0E19\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E41\u0E25\u0E49\u0E27","\u0E44\u0E1B\u0E01\u0E31\u0E19\u0E40\u0E25\u0E22 \u0E23\u0E49\u0E32\u0E27 \u0E21\u0E31\u0E14 \u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01 \u0E25\u0E33\u0E14\u0E31\u0E1A\u0E44\u0E2B\u0E19\u0E01\u0E47\u0E44\u0E14\u0E49 \u0E02\u0E2D\u0E41\u0E04\u0E48\u0E1C\u0E2A\u0E21","\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E17\u0E35\u0E48\u0E40\u0E14\u0E34\u0E21 \u0E41\u0E15\u0E48\u0E40\u0E18\u0E2D\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E19\u0E31\u0E01\u0E17\u0E38\u0E1A\u0E04\u0E19\u0E40\u0E14\u0E34\u0E21\u0E41\u0E25\u0E49\u0E27"]},firstFoeWind:{lines:["\u0E40\u0E2B\u0E47\u0E19\u0E27\u0E07\u0E41\u0E14\u0E07\u0E40\u0E25\u0E47\u0E01\u0E46 \u0E44\u0E2B\u0E21? \u0E21\u0E31\u0E19\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E1E\u0E38\u0E48\u0E07\u0E43\u0E2A\u0E48 \u0E21\u0E49\u0E27\u0E19\u0E40\u0E25\u0E22!","\u0E2B\u0E34\u0E19\u0E08\u0E34\u0E4B\u0E27\u0E08\u0E30\u0E1E\u0E38\u0E48\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E40\u0E23\u0E37\u0E2D\u0E07\u0E41\u0E2A\u0E07 \u0E15\u0E35\u0E21\u0E31\u0E19\u0E01\u0E48\u0E2D\u0E19 \u0E15\u0E35\u0E42\u0E14\u0E19\u0E41\u0E25\u0E49\u0E27\u0E21\u0E31\u0E19\u0E08\u0E30\u0E07\u0E49\u0E32\u0E07\u0E44\u0E21\u0E48\u0E08\u0E1A"],urgent:!1},firstKill:{lines:["\u0E15\u0E31\u0E27\u0E19\u0E36\u0E07\u0E41\u0E25\u0E49\u0E27!","\u0E2B\u0E34\u0E19\u0E08\u0E34\u0E4B\u0E27\u0E04\u0E37\u0E2D\u0E40\u0E28\u0E29\u0E2B\u0E34\u0E19\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39 \u0E1E\u0E27\u0E01\u0E21\u0E31\u0E19\u0E08\u0E30\u0E2B\u0E25\u0E31\u0E1A\u0E14\u0E49\u0E27\u0E22","\u0E14\u0E35\u0E21\u0E32\u0E01 \u0E40\u0E14\u0E34\u0E19\u0E15\u0E48\u0E2D\u0E44\u0E1B"],urgent:!1},waveNext:{lines:["\u0E21\u0E35\u0E21\u0E32\u0E2D\u0E35\u0E01 \u0E15\u0E31\u0E27\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E44\u0E01\u0E25\u0E08\u0E30\u0E02\u0E27\u0E49\u0E32\u0E07\u0E2B\u0E34\u0E19 \u0E43\u0E0A\u0E49\u0E21\u0E31\u0E14\u0E14\u0E36\u0E07\u0E21\u0E31\u0E19\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32","\u0E15\u0E31\u0E27\u0E02\u0E27\u0E49\u0E32\u0E07\u0E0A\u0E2D\u0E1A\u0E2D\u0E22\u0E39\u0E48\u0E2B\u0E48\u0E32\u0E07 {key:tether} \u0E14\u0E36\u0E07\u0E21\u0E31\u0E19\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E44\u0E14\u0E49","\u0E0A\u0E38\u0E14\u0E15\u0E48\u0E2D\u0E44\u0E1B\u0E21\u0E32\u0E41\u0E25\u0E49\u0E27"],urgent:!1},swarm:{urgent:!1,lines:["\u0E25\u0E21\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E25\u0E49\u0E27 \u0E15\u0E2D\u0E19\u0E1E\u0E25\u0E1A\u0E04\u0E48\u0E33 Hollen \u0E08\u0E30\u0E15\u0E37\u0E48\u0E19","\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E1D\u0E39\u0E07\u0E40\u0E25\u0E22 \u0E2D\u0E22\u0E48\u0E32\u0E2B\u0E22\u0E38\u0E14\u0E40\u0E14\u0E34\u0E19 \u0E19\u0E31\u0E01\u0E17\u0E38\u0E1A","\u0E40\u0E15\u0E47\u0E21\u0E44\u0E1B\u0E2B\u0E21\u0E14 \u0E2D\u0E32\u0E28\u0E31\u0E22\u0E01\u0E33\u0E41\u0E1E\u0E07 \u0E2D\u0E22\u0E48\u0E32\u0E43\u0E2B\u0E49\u0E42\u0E14\u0E19\u0E25\u0E49\u0E2D\u0E21"]},pickFirst:{urgent:!0,lines:["\u0E1E\u0E31\u0E01\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48 \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1E\u0E25\u0E31\u0E07\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07 \u0E41\u0E15\u0E48\u0E25\u0E30\u0E2D\u0E31\u0E19\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E27\u0E34\u0E18\u0E35\u0E17\u0E35\u0E48\u0E04\u0E2D\u0E21\u0E42\u0E1A\u0E17\u0E33\u0E07\u0E32\u0E19"]},pick:{urgent:!1,lines:["\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E14\u0E35\u0E46","\u0E2D\u0E31\u0E19\u0E44\u0E2B\u0E19\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E40\u0E18\u0E2D\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14?","\u0E2B\u0E32\u0E22\u0E43\u0E08\u0E01\u0E48\u0E2D\u0E19 \u0E41\u0E25\u0E49\u0E27\u0E04\u0E48\u0E2D\u0E22\u0E40\u0E25\u0E37\u0E2D\u0E01"]},picked:{lines:["\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E14\u0E49\u0E14\u0E35","\u0E42\u0E2D\u0E49 \u0E0A\u0E2D\u0E1A\u0E2D\u0E31\u0E19\u0E19\u0E35\u0E49","\u0E21\u0E32\u0E14\u0E39\u0E01\u0E31\u0E19\u0E27\u0E48\u0E32\u0E21\u0E31\u0E19\u0E08\u0E30\u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23\u0E01\u0E31\u0E1A\u0E1E\u0E27\u0E01\u0E19\u0E31\u0E49\u0E19\u0E44\u0E14\u0E49"],urgent:!1},cairnIntro:{urgent:!0,lines:["\u0E19\u0E31\u0E48\u0E19\u0E04\u0E37\u0E2D Cairn \u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E17\u0E35\u0E48\u0E2D\u0E32\u0E22\u0E38\u0E19\u0E49\u0E2D\u0E22\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14 \u0E14\u0E39\u0E41\u0E16\u0E1A\u0E17\u0E2D\u0E07\u0E43\u0E15\u0E49\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E32 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E15\u0E47\u0E21\u0E41\u0E25\u0E49\u0E27\u0E40\u0E02\u0E32\u0E08\u0E30\u0E25\u0E49\u0E21","Cairn! \u0E40\u0E02\u0E32\u0E0B\u0E38\u0E48\u0E21\u0E0B\u0E48\u0E32\u0E21 \u0E40\u0E15\u0E34\u0E21\u0E41\u0E16\u0E1A\u0E17\u0E2D\u0E07\u0E43\u0E15\u0E49\u0E0A\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E15\u0E47\u0E21 \u0E41\u0E25\u0E49\u0E27\u0E40\u0E02\u0E32\u0E08\u0E30\u0E25\u0E49\u0E21\u0E01\u0E49\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01"]},cairnAgain:{urgent:!0,lines:["Cairn \u0E2D\u0E35\u0E01\u0E41\u0E25\u0E49\u0E27 \u0E23\u0E39\u0E49\u0E17\u0E32\u0E07\u0E40\u0E02\u0E32\u0E41\u0E25\u0E49\u0E27\u0E19\u0E35\u0E48","\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 \u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E15\u0E31\u0E27\u0E19\u0E49\u0E2D\u0E22"]},cairnRest:{urgent:!0,lines:["\u0E2B\u0E25\u0E31\u0E1A\u0E40\u0E16\u0E2D\u0E30 Cairn \u2026\u0E44\u0E14\u0E49\u0E22\u0E34\u0E19\u0E44\u0E2B\u0E21? \u0E2D\u0E30\u0E44\u0E23\u0E15\u0E31\u0E27\u0E43\u0E2B\u0E0D\u0E48\u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E37\u0E48\u0E19","\u0E40\u0E02\u0E32\u0E1E\u0E31\u0E01\u0E41\u0E25\u0E49\u0E27 \u0E19\u0E31\u0E48\u0E19\u0E15\u0E31\u0E27\u0E07\u0E48\u0E32\u0E22\u0E19\u0E30"]},hollenIntro:{urgent:!0,lines:["\u0E19\u0E31\u0E48\u0E19\u0E04\u0E37\u0E2D Hollen \u0E41\u0E01\u0E48\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E2B\u0E21\u0E39\u0E48\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32 \u0E04\u0E48\u0E2D\u0E22\u0E46 \u0E19\u0E30 \u0E40\u0E02\u0E32\u0E41\u0E04\u0E48\u0E25\u0E37\u0E21\u0E44\u0E1B\u0E27\u0E48\u0E32\u0E22\u0E37\u0E19\u0E40\u0E1D\u0E49\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E30\u0E44\u0E23","Hollen \u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E43\u0E04\u0E23\u0E08\u0E30\u0E08\u0E33\u0E44\u0E14\u0E49 \u0E25\u0E49\u0E21\u0E40\u0E02\u0E32\u0E43\u0E2B\u0E49\u0E44\u0E14\u0E49"]},hollenAgain:{urgent:!0,lines:["Hollen \u0E2D\u0E35\u0E01\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E02\u0E32\u0E01\u0E47\u0E08\u0E33\u0E40\u0E18\u0E2D\u0E44\u0E14\u0E49\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E01\u0E31\u0E19","\u0E40\u0E02\u0E32\u0E19\u0E31\u0E48\u0E19\u0E41\u0E2B\u0E25\u0E30 \u0E2B\u0E32\u0E22\u0E43\u0E08\u0E25\u0E36\u0E01\u0E46"]},adds:{lines:["\u0E21\u0E31\u0E19\u0E40\u0E23\u0E35\u0E22\u0E01\u0E15\u0E31\u0E27\u0E40\u0E25\u0E47\u0E01\u0E21\u0E32\u0E0A\u0E48\u0E27\u0E22! \u0E25\u0E49\u0E21\u0E21\u0E31\u0E19\u0E02\u0E49\u0E32\u0E07\u0E1E\u0E27\u0E01\u0E19\u0E31\u0E49\u0E19 \u0E15\u0E2D\u0E19\u0E25\u0E49\u0E21\u0E08\u0E30\u0E17\u0E31\u0E1A\u0E41\u0E2B\u0E25\u0E01","\u0E2B\u0E34\u0E19\u0E08\u0E34\u0E4B\u0E27! \u0E25\u0E48\u0E2D\u0E1E\u0E27\u0E01\u0E21\u0E31\u0E19\u0E21\u0E32\u0E43\u0E01\u0E25\u0E49\u0E40\u0E02\u0E32 \u0E41\u0E25\u0E49\u0E27\u0E25\u0E49\u0E21\u0E40\u0E02\u0E32\u0E17\u0E31\u0E1A\u0E1E\u0E27\u0E01\u0E21\u0E31\u0E19"],urgent:!1},firstCrush:{urgent:!1,lines:["\u0E40\u0E2B\u0E47\u0E19\u0E44\u0E2B\u0E21? \u0E15\u0E2D\u0E19\u0E25\u0E49\u0E21\u0E17\u0E31\u0E1A\u0E1E\u0E27\u0E01\u0E19\u0E31\u0E49\u0E19\u0E41\u0E2B\u0E25\u0E01\u0E40\u0E25\u0E22!","\u0E2E\u0E48\u0E32! \u0E25\u0E49\u0E21\u0E40\u0E02\u0E32\u0E02\u0E49\u0E32\u0E07\u0E1E\u0E27\u0E01\u0E21\u0E31\u0E19 \u0E1E\u0E37\u0E49\u0E19\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E40\u0E2D\u0E07"]},crush:{lines:["\u0E17\u0E31\u0E1A\u0E41\u0E2B\u0E25\u0E01!","\u0E15\u0E2D\u0E19\u0E25\u0E49\u0E21\u0E17\u0E33\u0E41\u0E1A\u0E1A\u0E19\u0E31\u0E49\u0E19\u0E40\u0E2D\u0E07 \u0E2A\u0E27\u0E22\u0E21\u0E32\u0E01","\u0E25\u0E49\u0E21\u0E21\u0E21 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E15\u0E31\u0E27\u0E40\u0E25\u0E47\u0E01\u0E14\u0E49\u0E27\u0E22"],urgent:!1}},repeatGap:90,wordsPerSec:3.5,charsPerSec:13};var zi="en";function sp(i){zi=i==="th"?"th":"en"}var ip={Strike:"\u0E1F\u0E31\u0E19",Sunder:"\u0E17\u0E38\u0E1A\u0E23\u0E49\u0E32\u0E27",Tether:"\u0E21\u0E31\u0E14",Break:"\u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01",Roll:"\u0E21\u0E49\u0E27\u0E19",Counter:"\u0E2A\u0E27\u0E19",crack:"\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E23\u0E49\u0E32\u0E27",hold:"\u0E15\u0E23\u0E36\u0E07\u0E44\u0E27\u0E49",spend:"\u0E43\u0E0A\u0E49\u0E23\u0E2D\u0E22","FALL!":"\u0E1B\u0E34\u0E14\u0E09\u0E32\u0E01!",BALANCE:"\u0E41\u0E16\u0E1A\u0E25\u0E49\u0E21",TOPPLED:"\u0E25\u0E49\u0E21\u0E41\u0E25\u0E49\u0E27",HITS:"\u0E2E\u0E34\u0E15",HP:"\u0E40\u0E25\u0E37\u0E2D\u0E14",Elara:"\u0E40\u0E2D\u0E25\u0E32\u0E23\u0E48\u0E32",CRACKED:"\u0E23\u0E49\u0E32\u0E27",BOUND:"\u0E16\u0E39\u0E01\u0E21\u0E31\u0E14",CRUSHED:"\u0E17\u0E31\u0E1A\u0E41\u0E2B\u0E25\u0E01",PERFECT:"\u0E2B\u0E25\u0E1A\u0E1E\u0E2D\u0E14\u0E35!","STRIKE BACK!":"\u0E2A\u0E27\u0E19\u0E40\u0E25\u0E22!","COUNTER!":"\u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A!","SPENT!":"\u0E43\u0E0A\u0E49\u0E23\u0E2D\u0E22!","REPEAT \xD70.6":"\u0E0B\u0E49\u0E33 \xD70.6","MIX \xD7{n}":"\u0E1C\u0E2A\u0E21 \xD7{n}","TOPPLED!":"\u0E25\u0E49\u0E21\u0E41\u0E25\u0E49\u0E27!","Hit him while he's down \u2014 double damage":"\u0E15\u0E35\u0E15\u0E2D\u0E19\u0E21\u0E31\u0E19\u0E25\u0E49\u0E21 \u0E14\u0E32\u0E40\u0E21\u0E08 \xD72","GIANTFALL!":"\u0E1B\u0E34\u0E14\u0E09\u0E32\u0E01!","Tap FALL! \u2014 finish him":"\u0E41\u0E15\u0E30\u0E1B\u0E38\u0E48\u0E21 \u0E1B\u0E34\u0E14\u0E09\u0E32\u0E01! \u0E08\u0E1A\u0E21\u0E31\u0E19\u0E40\u0E25\u0E22","Press [{key}] \u2014 finish him":"\u0E01\u0E14 [{key}] \u0E08\u0E1A\u0E21\u0E31\u0E19\u0E40\u0E25\u0E22","{name} AWAKENS":"{name} \u0E15\u0E37\u0E48\u0E19\u0E40\u0E15\u0E47\u0E21\u0E17\u0E35\u0E48","He strikes faster now":"\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E21\u0E31\u0E19\u0E1F\u0E32\u0E14\u0E40\u0E23\u0E47\u0E27\u0E02\u0E36\u0E49\u0E19","{name} RESTS":"{name} \u0E2B\u0E25\u0E31\u0E1A\u0E41\u0E25\u0E49\u0E27","The terrace goes quiet\u2026":"\u0E25\u0E32\u0E19\u0E2B\u0E34\u0E19\u0E40\u0E07\u0E35\u0E22\u0E1A\u0E25\u0E07\u2026","THE DAWN TERRACES":"\u0E25\u0E32\u0E19\u0E2B\u0E34\u0E19\u0E23\u0E38\u0E48\u0E07\u0E2D\u0E23\u0E38\u0E13","Bring the Wardens to rest":"\u0E1E\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E44\u0E1B\u0E1E\u0E31\u0E01\u0E1C\u0E48\u0E2D\u0E19",FALLEN:"\u0E25\u0E49\u0E21\u0E25\u0E07","The Terrace Wakes":"\u0E25\u0E32\u0E19\u0E2B\u0E34\u0E19\u0E15\u0E37\u0E48\u0E19","Stones That Throw":"\u0E2B\u0E34\u0E19\u0E02\u0E27\u0E49\u0E32\u0E07","The Swarm":"\u0E1D\u0E39\u0E07\u0E2B\u0E34\u0E19","Warden of the East Gate":"\u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01","the Young Warden":"\u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E23\u0E38\u0E48\u0E19\u0E40\u0E22\u0E32\u0E27\u0E4C","Mix your skills, break their balance, and bring down giants a hundred times your size.":"\u0E1C\u0E2A\u0E21\u0E2A\u0E01\u0E34\u0E25 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E25\u0E31\u0E01 \u0E41\u0E25\u0E49\u0E27\u0E25\u0E49\u0E21\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E17\u0E35\u0E48\u0E15\u0E31\u0E27\u0E43\u0E2B\u0E0D\u0E48\u0E01\u0E27\u0E48\u0E32\u0E40\u0E23\u0E32\u0E23\u0E49\u0E2D\u0E22\u0E40\u0E17\u0E48\u0E32",Begin:"\u0E40\u0E23\u0E34\u0E48\u0E21","Copy play report":"\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19","One run: about 3 minutes \xB7 two Wardens to bring down":"\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E23\u0E2D\u0E1A\u0E23\u0E32\u0E27 3\u20134 \u0E19\u0E32\u0E17\u0E35 \xB7 \u0E15\u0E49\u0E2D\u0E07\u0E25\u0E49\u0E21\u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39 2 \u0E15\u0E19","Fight lab \xB7 Hollen only":"\u0E25\u0E32\u0E19\u0E1D\u0E36\u0E01 \xB7 Hollen \u0E15\u0E31\u0E27\u0E40\u0E14\u0E35\u0E22\u0E27","Choose a power":"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1E\u0E25\u0E31\u0E07","Elara hums while you rest (+{n} HP). One of three:":"\u0E40\u0E2D\u0E25\u0E32\u0E23\u0E48\u0E32\u0E2E\u0E31\u0E21\u0E40\u0E1E\u0E25\u0E07\u0E43\u0E2B\u0E49\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1E\u0E31\u0E01 (+{n} \u0E40\u0E25\u0E37\u0E2D\u0E14) \u0E40\u0E25\u0E37\u0E2D\u0E01 1 \u0E43\u0E19 3:",Paused:"\u0E2B\u0E22\u0E38\u0E14\u0E40\u0E01\u0E21","Your powers":"\u0E1E\u0E25\u0E31\u0E07\u0E17\u0E35\u0E48\u0E21\u0E35",Resume:"\u0E40\u0E25\u0E48\u0E19\u0E15\u0E48\u0E2D","Sound: on":"\u0E40\u0E2A\u0E35\u0E22\u0E07: \u0E40\u0E1B\u0E34\u0E14","Sound: off":"\u0E40\u0E2A\u0E35\u0E22\u0E07: \u0E1B\u0E34\u0E14","Screen shake: full":"\u0E08\u0E2D\u0E2A\u0E31\u0E48\u0E19: \u0E40\u0E15\u0E47\u0E21","Screen shake: less":"\u0E08\u0E2D\u0E2A\u0E31\u0E48\u0E19: \u0E19\u0E49\u0E2D\u0E22","Screen shake: off":"\u0E08\u0E2D\u0E2A\u0E31\u0E48\u0E19: \u0E1B\u0E34\u0E14","Elara: all hints":"\u0E40\u0E2D\u0E25\u0E32\u0E23\u0E48\u0E32: \u0E1A\u0E2D\u0E01\u0E17\u0E38\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07","Elara: key moments":"\u0E40\u0E2D\u0E25\u0E32\u0E23\u0E48\u0E32: \u0E40\u0E09\u0E1E\u0E32\u0E30\u0E2A\u0E33\u0E04\u0E31\u0E0D","Elara: off":"\u0E40\u0E2D\u0E25\u0E32\u0E23\u0E48\u0E32: \u0E1B\u0E34\u0E14","The Terraces sleep.":"\u0E25\u0E32\u0E19\u0E2B\u0E34\u0E19\u0E2B\u0E25\u0E31\u0E1A\u0E43\u0E2B\u0E25\u0E41\u0E25\u0E49\u0E27","Hollen rests.":"Hollen \u0E2B\u0E25\u0E31\u0E1A\u0E41\u0E25\u0E49\u0E27","So close.":"\u0E40\u0E01\u0E37\u0E2D\u0E1A\u0E41\u0E25\u0E49\u0E27!","Get up, Breaker.":"\u0E25\u0E38\u0E01\u0E02\u0E36\u0E49\u0E19\u0E21\u0E32 \u0E19\u0E31\u0E01\u0E17\u0E38\u0E1A","You fell at {stage}":"\u0E25\u0E49\u0E21\u0E17\u0E35\u0E48 {stage}"," \u2014 {giant} had {n}% left":" \u2014 {giant} \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E41\u0E23\u0E07 {n}%",time:"\u0E40\u0E27\u0E25\u0E32","HP left":"\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E40\u0E2B\u0E25\u0E37\u0E2D","Hollen's strength left":"\u0E41\u0E23\u0E07 Hollen \u0E17\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E37\u0E2D",topples:"\u0E25\u0E49\u0E21\u0E22\u0E31\u0E01\u0E29\u0E4C",crushed:"\u0E17\u0E31\u0E1A\u0E41\u0E2B\u0E25\u0E01","best combo":"\u0E04\u0E2D\u0E21\u0E42\u0E1A\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14","perfect rolls":"\u0E2B\u0E25\u0E1A\u0E1E\u0E2D\u0E14\u0E35","Powers: {list}":"\u0E1E\u0E25\u0E31\u0E07: {list}","Face {who} again":"\u0E2A\u0E39\u0E49 {who} \u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",him:"\u0E21\u0E31\u0E19","Run from the start":"\u0E40\u0E23\u0E34\u0E48\u0E21\u0E43\u0E2B\u0E21\u0E48\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E15\u0E49\u0E19","Run again":"\u0E40\u0E25\u0E48\u0E19\u0E2D\u0E35\u0E01\u0E23\u0E2D\u0E1A","Fight again":"\u0E2A\u0E39\u0E49\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07","Elara's Shield: take {n}% less damage":"\u0E42\u0E25\u0E48\u0E02\u0E2D\u0E07\u0E40\u0E2D\u0E25\u0E32\u0E23\u0E48\u0E32: \u0E42\u0E14\u0E19\u0E40\u0E1A\u0E32\u0E25\u0E07 {n}%","(your choice \u2014 it never weakens Hollen)":"(\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E2D\u0E07\u0E44\u0E14\u0E49 \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E17\u0E33\u0E43\u0E2B\u0E49 Hollen \u0E2D\u0E48\u0E2D\u0E19\u0E25\u0E07)","Copied. Paste it to whoever asked you to play.":"\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27 \u0E27\u0E32\u0E07\u0E2A\u0E48\u0E07\u0E43\u0E2B\u0E49\u0E04\u0E19\u0E17\u0E35\u0E48\u0E0A\u0E27\u0E19\u0E40\u0E25\u0E48\u0E19\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22","Left side: move":"\u0E0B\u0E49\u0E32\u0E22\u0E08\u0E2D: \u0E40\u0E14\u0E34\u0E19",cracks:"\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E23\u0E49\u0E32\u0E27",holds:"\u0E15\u0E23\u0E36\u0E07\u0E44\u0E27\u0E49",spends:"\u0E43\u0E0A\u0E49\u0E23\u0E2D\u0E22",dodges:"\u0E2B\u0E25\u0E1A",move:"\u0E40\u0E14\u0E34\u0E19","/ click strike":"/ \u0E04\u0E25\u0E34\u0E01 \u0E1F\u0E31\u0E19","Sunder \u2014 crack":"\u0E17\u0E38\u0E1A\u0E23\u0E49\u0E32\u0E27 \u2014 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E23\u0E49\u0E32\u0E27","Tether \u2014 hold":"\u0E21\u0E31\u0E14 \u2014 \u0E15\u0E23\u0E36\u0E07\u0E44\u0E27\u0E49","Break \u2014 spend":"\u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01 \u2014 \u0E43\u0E0A\u0E49\u0E23\u0E2D\u0E22",roll:"\u0E21\u0E49\u0E27\u0E19",pause:"\u0E2B\u0E22\u0E38\u0E14","the stick":"\u0E08\u0E2D\u0E22\u0E0B\u0E49\u0E32\u0E22","Level {n}":"\u0E23\u0E30\u0E14\u0E31\u0E1A {n}","the game as it is":"\u0E40\u0E01\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E01\u0E15\u0E34","New: {x}":"\u0E40\u0E1E\u0E34\u0E48\u0E21: {x}","plus everything below":"+ \u0E17\u0E38\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E01\u0E48\u0E2D\u0E19","New difficulty unlocked: Level {n}":"\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E01\u0E43\u0E2B\u0E21\u0E48: \u0E23\u0E30\u0E14\u0E31\u0E1A {n}","Loading\u2026":"\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14\u2026","Waking the terraces\u2026":"\u0E01\u0E33\u0E25\u0E31\u0E07\u0E1B\u0E25\u0E38\u0E01\u0E25\u0E32\u0E19\u0E2B\u0E34\u0E19\u2026",Ready:"\u0E1E\u0E23\u0E49\u0E2D\u0E21","Could not load. Please reload.":"\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E25\u0E2D\u0E07\u0E42\u0E2B\u0E25\u0E14\u0E2B\u0E19\u0E49\u0E32\u0E43\u0E2B\u0E21\u0E48","Turn your phone sideways":"\u0E2B\u0E21\u0E38\u0E19\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19","Toppleheart plays in landscape":"Toppleheart \u0E40\u0E25\u0E48\u0E19\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19"},qo={burningTether:["\u0E21\u0E31\u0E14\u0E40\u0E1E\u0E25\u0E34\u0E07","\u0E21\u0E31\u0E14\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E2B\u0E34\u0E19\u0E23\u0E49\u0E32\u0E27\u0E14\u0E49\u0E27\u0E22 \u0E04\u0E39\u0E25\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E02\u0E2D\u0E07\u0E21\u0E31\u0E14\u0E19\u0E32\u0E19\u0E02\u0E36\u0E49\u0E19 1 \u0E27\u0E34"],deepFissure:["\u0E23\u0E2D\u0E22\u0E23\u0E49\u0E32\u0E27\u0E25\u0E36\u0E01","\u0E23\u0E2D\u0E22\u0E23\u0E49\u0E32\u0E27\u0E0B\u0E49\u0E2D\u0E19\u0E44\u0E14\u0E49\u0E16\u0E36\u0E07 3 \u0E0A\u0E31\u0E49\u0E19 \u0E04\u0E39\u0E25\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E02\u0E2D\u0E07\u0E17\u0E38\u0E1A\u0E23\u0E49\u0E32\u0E27\u0E19\u0E32\u0E19\u0E02\u0E36\u0E49\u0E19 0.6 \u0E27\u0E34"],lingering:["\u0E23\u0E2D\u0E22\u0E23\u0E49\u0E32\u0E27\u0E04\u0E49\u0E32\u0E07","\u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01\u0E41\u0E25\u0E49\u0E27\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E23\u0E2D\u0E22\u0E23\u0E49\u0E32\u0E27\u0E44\u0E27\u0E49 1 \u0E0A\u0E31\u0E49\u0E19 \u0E41\u0E15\u0E48\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E44\u0E1B\u0E40\u0E15\u0E34\u0E21\u0E41\u0E16\u0E1A\u0E25\u0E49\u0E21\u0E19\u0E49\u0E2D\u0E22\u0E25\u0E07 25%"],rollCrack:["\u0E21\u0E49\u0E27\u0E19\u0E1C\u0E48\u0E32\u0E2B\u0E34\u0E19","\u0E2B\u0E25\u0E1A\u0E1E\u0E2D\u0E14\u0E35\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E23\u0E49\u0E32\u0E27"],longTether:["\u0E21\u0E31\u0E14\u0E44\u0E01\u0E25","\u0E21\u0E31\u0E14\u0E22\u0E34\u0E07\u0E44\u0E01\u0E25\u0E02\u0E36\u0E49\u0E19 3 \u0E40\u0E21\u0E15\u0E23 \u0E41\u0E25\u0E30\u0E14\u0E36\u0E07\u0E15\u0E31\u0E27\u0E40\u0E23\u0E32\u0E44\u0E1B\u0E2B\u0E32\u0E22\u0E31\u0E01\u0E29\u0E4C \u0E04\u0E39\u0E25\u0E14\u0E32\u0E27\u0E19\u0E4C +0.5 \u0E27\u0E34"],quickHands:["\u0E21\u0E37\u0E2D\u0E44\u0E27","\u0E01\u0E32\u0E23\u0E1F\u0E31\u0E19\u0E40\u0E15\u0E34\u0E21\u0E41\u0E16\u0E1A\u0E25\u0E49\u0E21\u0E40\u0E1E\u0E34\u0E48\u0E21 60% \u0E41\u0E15\u0E48\u0E17\u0E38\u0E01\u0E2A\u0E01\u0E34\u0E25\u0E04\u0E39\u0E25\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E0A\u0E49\u0E32\u0E25\u0E07 20%"],heavySunder:["\u0E17\u0E38\u0E1A\u0E23\u0E49\u0E32\u0E27\u0E2B\u0E19\u0E31\u0E01","\u0E17\u0E38\u0E1A\u0E23\u0E49\u0E32\u0E27\u0E17\u0E35\u0E40\u0E14\u0E35\u0E22\u0E27\u0E23\u0E49\u0E32\u0E27 2 \u0E0A\u0E31\u0E49\u0E19 \u0E04\u0E39\u0E25\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E19\u0E32\u0E19\u0E02\u0E36\u0E49\u0E19 1.5 \u0E27\u0E34"],afterquake:["\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27\u0E15\u0E32\u0E21","\u0E17\u0E48\u0E32\u0E1B\u0E34\u0E14\u0E09\u0E32\u0E01\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E25\u0E32\u0E19\u0E2A\u0E31\u0E48\u0E19\u0E17\u0E31\u0E49\u0E07\u0E25\u0E32\u0E19 \u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E31\u0E27\u0E40\u0E25\u0E47\u0E01\u0E17\u0E38\u0E01\u0E15\u0E31\u0E27\u0E42\u0E14\u0E19 40 \u0E41\u0E25\u0E30\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E25\u0E49\u0E21\u0E19\u0E32\u0E19\u0E02\u0E36\u0E49\u0E19 1 \u0E27\u0E34"],secondWind:["\u0E25\u0E21\u0E2B\u0E32\u0E22\u0E43\u0E08\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E07","\u0E1F\u0E37\u0E49\u0E19\u0E40\u0E25\u0E37\u0E2D\u0E14 2 \u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E25\u0E49\u0E21"],chainReaction:["\u0E1B\u0E0F\u0E34\u0E01\u0E34\u0E23\u0E34\u0E22\u0E32\u0E25\u0E39\u0E01\u0E42\u0E0B\u0E48","\u0E17\u0E38\u0E1A\u0E41\u0E15\u0E01\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E21\u0E31\u0E14 \u0E41\u0E25\u0E49\u0E27\u0E21\u0E31\u0E14\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E0A\u0E49\u0E17\u0E31\u0E19\u0E17\u0E35"],glassStone:["\u0E2B\u0E34\u0E19\u0E41\u0E01\u0E49\u0E27","\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 25% \u0E41\u0E15\u0E48\u0E42\u0E14\u0E19\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 25%"],steadyFeet:["\u0E40\u0E17\u0E49\u0E32\u0E21\u0E31\u0E48\u0E19","\u0E21\u0E49\u0E27\u0E19\u0E0B\u0E49\u0E33\u0E44\u0E14\u0E49\u0E40\u0E23\u0E47\u0E27\u0E02\u0E36\u0E49\u0E19 40% \u0E41\u0E15\u0E48\u0E0A\u0E48\u0E27\u0E07\u0E44\u0E21\u0E48\u0E42\u0E14\u0E19\u0E15\u0E35\u0E15\u0E2D\u0E19\u0E21\u0E49\u0E27\u0E19\u0E2A\u0E31\u0E49\u0E19\u0E25\u0E07 40% \xB7 \u0E0A\u0E48\u0E27\u0E07\u0E2B\u0E25\u0E1A\u0E1E\u0E2D\u0E14\u0E35\u0E22\u0E32\u0E27\u0E02\u0E36\u0E49\u0E19 4 \u0E40\u0E1F\u0E23\u0E21 \xB7 \u0E01\u0E32\u0E23\u0E1F\u0E31\u0E19\u0E41\u0E23\u0E07\u0E25\u0E07 15%"]};function j(i,e){let t=zi==="th"&&i!=null&&ip[i]!=null?ip[i]:i;return e&&t!=null&&(t=String(t).replace(/\{(\w+)\}/g,(n,s)=>s in e?e[s]:n)),t}var _r=i=>zi==="th"&&qo[i.id]?qo[i.id][0]:i.name,$o=i=>zi==="th"&&qo[i.id]?qo[i.id][1]:i.text;var yr=i=>`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${i}</svg>`,Hi={light:yr('<path d="M5 19 L17.5 6.5 L19.5 4.5 L19 7 L6.5 19.5 Z" fill="currentColor" stroke-width="1.6"/><path d="M4 15.5 L8.5 20"/><path d="M3.2 20.8 L5.2 18.8"/>'),sunder:yr('<path d="M12 2.5 L10 8 L13.5 11 L9.5 15.5 L12 21.5"/><path d="M13.5 11 L19 9"/><path d="M10 8 L5 6.5"/><path d="M9.5 15.5 L4.5 17"/><path d="M13 17 L18.5 18.5"/>'),tether:yr('<rect x="2.5" y="8.5" width="10" height="7" rx="3.5" transform="rotate(-30 7.5 12)"/><rect x="11.5" y="8.5" width="10" height="7" rx="3.5" transform="rotate(-30 16.5 12)"/>'),breaker:yr('<path d="M12 3 L13.6 8.4 L19 6.5 L15.6 11 L21 13 L15.4 14.2 L17 20 L12 16.4 L7 20 L8.6 14.2 L3 13 L8.4 11 L5 6.5 L10.4 8.4 Z" fill="currentColor" fill-opacity=".25"/>'),heart:yr('<path d="M12 20 C5 15 3 11.5 3 8.5 A4.5 4.5 0 0 1 12 6.5 A4.5 4.5 0 0 1 21 8.5 C21 11.5 19 15 12 20 Z" fill="currentColor" fill-opacity=".25"/>'),dodge:yr('<path d="M19.5 12 A7.5 7.5 0 1 1 15.5 5.4"/><path d="M15.8 1.8 L16 5.8 L12 6.2"/>')};var rp={_about:"Small foes: Shardlings, young bits of Warden stone. No Balance bar; a hit interrupts their wind-up (stagger). wind = warning before the blow (s). First guesses until people play.",shardling:{name:"Shardling",hp:70,radius:.55,height:1.3,speed:2.6,reach:1.4,wind:.55,dmg:7,lunge:1.6,rest:[.9,1.6],stagger:.35,push:.6,tint:"#b9a17a"},slinger:{name:"Slinger",hp:50,radius:.5,height:1.15,speed:2.2,keep:[4.5,6.5],wind:.7,dmg:7,shot:{speed:9,radius:.35,life:1.6},rest:[1.4,2.2],stagger:.4,push:.6,tint:"#7d8aa8"},status:{crackedDmgMul:1.5,boundStun:1.2,breakerShatter:2.5,counterPush:2.2,counterStop:10}};var vr={_about:"Power cards: one is picked from three after each early stage. Each changes how combos are built and most cost something. 'set' writes into sim.mods (src/sim/mods.js). Numbers are first guesses.",cards:[{id:"burningTether",icons:["tether","sunder"],name:"Burning Tether",text:"Tether also CRACKS the stone. Its cooldown is 1 s longer.",set:{tetherCracks:!0,"cd.tether":1}},{id:"deepFissure",icons:["sunder"],name:"Deep Fissure",text:"CRACKED stacks up to 3. Sunder's cooldown is 0.6 s longer.",set:{crackedMax:1,"cd.sunder":.6}},{id:"lingering",icons:["breaker","sunder"],name:"Lingering Crack",text:"Break leaves one CRACK behind, but each spent status gives 25% less Balance.",set:{breakKeepsCrack:!0,breakGainMul:.75}},{id:"rollCrack",icons:["dodge","sunder"],name:"Splitting Roll",text:"A Perfect roll CRACKS the giant.",set:{perfectCracks:!0}},{id:"longTether",icons:["tether"],name:"Long Tether",text:"Tether reaches 3 m further and pulls YOU to the giant. Cooldown +0.5 s.",set:{tetherReach:3,tetherPullsSelf:!0,"cd.tether":.5}},{id:"quickHands",icons:["light"],name:"Quick Hands",text:"Strikes add 60% more Balance. Every skill cools down 20% slower.",set:{lightBalanceMul:1.6,cdMul:1.2}},{id:"heavySunder",icons:["sunder"],name:"Heavy Sunder",text:"Sunder cracks twice. Its cooldown is 1.5 s longer.",set:{sunderStacks:2,"cd.sunder":1.5}},{id:"afterquake",icons:["breaker"],name:"Afterquake",text:"Giantfall shakes the whole terrace: every small foe takes 40. Topples last 1 s longer.",set:{giantfallQuake:40,toppleTime:1}},{id:"secondWind",icons:["heart"],name:"Second Wind",text:"Heal 2 HP every time a giant topples.",set:{toppleHeal:2}},{id:"chainReaction",icons:["breaker","tether"],name:"Chain Reaction",text:"Breaking a BOUND giant makes Tether ready again.",set:{breakResetsTether:!0}},{id:"glassStone",icons:["light","heart"],name:"Glass Stone",text:"Deal 25% more damage. Take 25% more damage.",set:{dmgOut:1.25,dmgIn:1.25}},{id:"steadyFeet",icons:["dodge"],name:"Steady Feet",text:"Roll again 40% sooner, but each roll keeps you safe 40% shorter. Perfect window 4 frames longer. Strikes do 15% less damage.",set:{dodgeCdMul:.6,perfectBonus:4,lightDmgMul:.85,dodgeSafeMul:.6}}]};var Yo={_about:"One run, about 4 minutes. Stages play in order; 'pick' offers 3 power cards (and rests: heal). The run is won when the last giant rests; a down restarts the run. Spawn ring = metres from the centre. Targets per stage are guesses to check with bots (tools/run-sweep.mjs).",intro:1.6,pickHeal:35,spawnRing:7.2,stages:[{type:"wave",name:"The Terrace Wakes",mood:1,foes:[["shardling",3]],target:"0:00-0:25",later:[["shardling",2]]},{type:"pick"},{type:"wave",name:"Stones That Throw",mood:1,foes:[["shardling",3],["slinger",2]],target:"0:30-0:55",later:[["shardling",2],["slinger",1]]},{type:"giant",giant:"cairn",mood:1,foes:[],target:"1:00-1:45",adds:{at:.5,foes:[["shardling",3]]}},{type:"pick"},{type:"wave",name:"The Swarm",mood:2,foes:[["shardling",3],["slinger",2]],later:[["shardling",3],["slinger",1]],target:"1:50-2:40"},{type:"pick"},{type:"giant",giant:"hollen",mood:2,foes:[],adds:{at:.6,foes:[["shardling",3]]},target:"2:50-4:30"}]};var ch={_about:"Difficulty levels unlocked by winning (like Hades' Heat or Slay the Spire's Ascension). Level 0 is the game as it is; level N applies the first N entries, in order, to a copy of the data (src/sim/ascension.js). A win at your highest level unlocks the next. Numbers are first guesses, set by stand-in sweeps (tools/asc-sweep.mjs).",minWind:.75,levels:[{mod:"heavyBlows",mul:1.25,en:"Blows hit 25% harder",th:"\u0E42\u0E14\u0E19\u0E15\u0E35\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 25%"},{mod:"quickWind",mul:.88,en:"Giants wind up 12% faster",th:"\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E07\u0E49\u0E32\u0E07\u0E40\u0E23\u0E47\u0E27\u0E02\u0E36\u0E49\u0E19 12%"},{mod:"aggressive",mul:.7,en:"Giants rest 30% less between blows",th:"\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E1E\u0E31\u0E01\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E17\u0E48\u0E32\u0E2A\u0E31\u0E49\u0E19\u0E25\u0E07 30%"},{mod:"moreStones",add:2,en:"Two more small stones in every wave",th:"\u0E15\u0E31\u0E27\u0E40\u0E25\u0E47\u0E01\u0E21\u0E32\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E14\u0E48\u0E32\u0E19\u0E25\u0E30 2 \u0E15\u0E31\u0E27"},{mod:"toughGiants",mul:1.25,en:"Giants are 25% tougher",th:"\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E2D\u0E36\u0E14\u0E02\u0E36\u0E49\u0E19 25%"},{mod:"shortRest",mul:.65,en:"Rests heal a third less",th:"\u0E1E\u0E31\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1E\u0E25\u0E31\u0E07\u0E44\u0E14\u0E49\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E04\u0E37\u0E19\u0E19\u0E49\u0E2D\u0E22\u0E25\u0E07 1 \u0E43\u0E19 3"},{mod:"fragile",mul:.8,en:"You start with 20% less health",th:"\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E40\u0E15\u0E47\u0E21\u0E19\u0E49\u0E2D\u0E22\u0E25\u0E07 20%"}]};var KM={quickWind(i,e,t){for(let n of Object.values(i.giants)){if(!n||!n.attacks)continue;let s=Math.min(1,...(n.phases||[]).map(r=>r.windMul||1));for(let r of Object.values(n.attacks))r.wind&&(r.wind=Math.max(t.minWind/s,r.wind*e.mul))}},toughGiants(i,e){for(let t of Object.values(i.giants))t&&t.hp&&(t.hp=Math.round(t.hp*e.mul))},moreStones(i,e){for(let t of i.run.stages)t.type==="wave"&&(t.later=(t.later||[]).map(n=>n.slice()),t.later.push(["shardling",e.add]))},heavyBlows(i,e){for(let t of Object.values(i.giants))if(t&&t.attacks)for(let n of Object.values(t.attacks))n.dmg&&(n.dmg=Math.round(n.dmg*e.mul));for(let t of Object.values(i.foes))t&&t.dmg&&(t.dmg=Math.round(t.dmg*e.mul))},aggressive(i,e){for(let t of Object.values(i.giants))if(!(!t||!t.attacks)){t.think&&(t.think=t.think.map(n=>Math.round(n*e.mul*100)/100));for(let n of Object.values(t.attacks))n.open&&(n.open=Math.round(n.open*e.mul*100)/100)}},shortRest(i,e){i.run.pickHeal=Math.round(i.run.pickHeal*e.mul)},fragile(i,e){i.rules.hero.hp=Math.round(i.rules.hero.hp*e.mul)},tightPerfect(i,e){i.moves.dodge.perfect=Math.max(4,i.moves.dodge.perfect+e.add)}};function ap(i,e){let t=i.ascension;if(!e||!t)return i;let n=structuredClone(i),s=Math.min(e,t.levels.length);for(let r=0;r<s;r++){let a=t.levels[r];KM[a.mod](n,a,t)}return n}var op=i=>i.ascension?i.ascension.levels.length:0;function Zo(i){let e=i>>>0||1,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.weighted=(n,s)=>{let r=n.reduce((o,l)=>o+s(l),0),a=t()*r;for(let o of n)if(a-=s(o),a<=0)return o;return n[n.length-1]},t.state=()=>e,t}var Ko=class{constructor(){this.n={},this.timed=[]}add(e){this.n[e]=(this.n[e]||0)+1}release(e){if(!this.n[e])throw new Error(`lock "${e}" released more often than taken`);this.n[e]--}has(e){return(this.n[e]||0)>0}hold(e,t){this.add(e),this.timed.push({k:e,t})}tick(e){for(let t=this.timed.length-1;t>=0;t--){let n=this.timed[t];n.t-=e,n.t<=0&&(this.release(n.k),this.timed.splice(t,1))}}clear(){this.n={},this.timed=[]}};function lp(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0).toString(16).padStart(8,"0")}var it=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z),St=(i,e)=>Math.atan2(e.x-i.x,e.z-i.z),uh=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},Mr=(i,e,t)=>{let n=uh(e-i);return i+Math.max(-t,Math.min(t,n))};var ZM=new Set(["opener","linker","ender"]);function hh(){return{hits:0,t:0,skills:[],last:null,best:0}}function Jo(i,e=i.combo){let t=i.data.rules.combo.variety,n=new Set(e.skills).size;return t[Math.min(n,t.length-1)]}function br(i,e){let t=i.combo;if(t.hits>0){let s=t.skills.join(">");i.fight.combos.push({hits:t.hits,seq:s,reason:e,variety:Jo(i)}),i.emit({t:"comboEnd",hits:t.hits,seq:s,reason:e})}let n=Math.max(t.best,t.hits);i.combo=hh(),i.combo.best=n}function cp(i,e){let t=i.combo;t.hits===0||i.hero.dodge||(t.t-=e,t.t<=0&&br(i,"time"))}function dh(i,e){let t=i.data.rules,n=i.data.moves[e],s=i.combo;if(e==="giantfall")return s.hits++,s.t=t.combo.window,{variety:1,repeat:!1};let r=!1;return ZM.has(n.role)&&(r=s.last===e,s.skills.push(e),s.last=e),s.hits++,s.t=t.combo.window,{variety:Jo(i),repeat:r}}function JM(i,e){return i.data.rules.status[e].max+(e==="cracked"?i.mods.crackedMax:0)}function fh(i,e,t,n=1){let s=i.data.rules.status[t],r=e.status[t],a=r.n;r.n=Math.min(JM(i,t),r.n+n),r.t=s.time,r.n!==a&&i.emit({t:"status",on:!0,name:t,n:r.n,target:e.kind,id:e.id}),t==="cracked"&&r.n>i.data.rules.status.cracked.max&&i.powerFired("deepFissure")}function jo(i,e,t){for(let n of Object.keys(e.status)){let s=e.status[n];s.n>0&&(s.t-=t,s.t<=0&&(s.n=0,i.emit({t:"status",on:!1,name:n,n:0,target:e.kind,id:e.id})))}}function up(i,e,t){let n={...t.apply||{}};return e==="sunder"&&(n.cracked=i.mods.sunderStacks),e==="tether"&&i.mods.tetherCracks&&(n.cracked=(n.cracked||0)+1),n}var hp=(i,e)=>i.mods.dmgOut*(e.role==="string"?i.mods.lightDmgMul:1);function dp(i,e,t,n){let s=i.mods;e==="tether"&&s.tetherCracks&&i.powerFired("burningTether"),e==="sunder"&&s.sunderStacks>1&&i.powerFired("heavySunder"),t.role==="string"&&s.lightBalanceMul>1&&n&&i.powerFired("quickHands"),s.dmgOut>1&&i.powerFired("glassStone"),t.role==="string"&&s.lightDmgMul<1&&i.powerFired("steadyFeet")}function fp(i,e,t,n=dh(i,e)){let s=i.data.rules,r=i.mods,a=i.data.moves[e],o=t.state==="toppled",l={move:e,role:a.role,dmg:a.dmg,dmgMul:hp(i,a),balance:a.balance||0,balanceMul:a.role==="string"?r.lightBalanceMul:1,apply:up(i,e,a),consumed:{},variety:n.variety,repeat:n.repeat,toppled:o,toppledNow:!1};if(a.consume){for(let[d,g]of Object.entries(a.consume)){let m=t.status[d].n;m>0&&(l.dmg+=g.dmg*m,l.balance+=g.balance*m*r.breakGainMul,l.consumed[d]=m,t.status[d].n=0,i.emit({t:"status",on:!1,name:d,n:0,consumed:!0,target:"giant"}))}r.breakKeepsCrack&&l.consumed.cracked&&(t.status.cracked.n=1,t.status.cracked.t=s.status.cracked.time,i.powerFired("lingering")),r.breakResetsTether&&l.consumed.bound&&(i.hero.cd.tether=0,i.powerFired("chainReaction"))}if(l.balanceMul+=s.status.cracked.balanceGainPerStack*t.status.cracked.n,e==="giantfall"){let d=t.toppleQ||{hits:0,variety:1};l.dmg+=a.perComboHit*d.hits,l.dmgMul*=d.variety,l.variety=d.variety}else{o&&(l.dmgMul*=s.topple.dmgMul);let d=l.repeat?s.combo.repeat:1;l.dmgMul*=l.variety*d,l.balanceMul*=l.variety*d}for(let d of i.hooks.beforeHit)d(l,t,i);let c=Math.max(1,Math.round(l.dmg*l.dmgMul));t.hp=Math.max(0,t.hp-c);let u=i.hero;t.lastHitDir=St(u,t),t.sinceHit=0;let h=0;!o&&t.state!=="fallen"&&(h=l.balance*l.balanceMul,Number.isFinite(h)||(h=0),t.balance=Math.min(t.balMax,t.balance+h));for(let[d,g]of Object.entries(l.apply))fh(i,t,d,g);if(e==="tether"&&r.tetherPullsSelf){let d=St(t,u),g=t.radius+1,m=s.hero.pullTime;u.pull={x0:u.x,z0:u.z,x1:t.x+Math.sin(d)*g,z1:t.z+Math.cos(d)*g,t:0,dur:m},u.iframe=Math.max(u.iframe,m+.05),i.emit({t:"pull",x0:u.x,z0:u.z,x:u.pull.x1,z:u.pull.z1}),i.powerFired("longTether")}dp(i,e,a,h>0),i.fight.dmgDealt+=c,i.emit({t:"hit",target:"giant",move:e,dmg:c,gain:Math.round(h*10)/10,variety:l.variety,repeat:l.repeat,consumed:l.consumed,toppled:o,x:t.x,z:t.z,combo:i.combo.hits}),e==="counter"?(i.slowT=0,i.slowScale=1,i.stopT=Math.max(i.stopT,a.stop/60),i.lastStopAt=i.realTime,i.lastStopLen=a.stop/60):i.stop(a.stop+(a.stopPerStatus||0)*Object.values(l.consumed).reduce((d,g)=>d+g,0)),a.slow&&i.slow(a.slow[0],a.slow[1]);for(let d of i.hooks.afterHit)d(l,t,i);if(e==="giantfall"&&r.giantfallQuake){for(let d of i.foes)d.hp>0&&Qo(i,d,r.giantfallQuake,"quake",St(t,d),1.5);i.powerFired("afterquake")}if(t.hp<=0)return i.giantFallen(t),l;if(e==="giantfall"&&t.state==="toppled"&&(t.t=Math.min(t.t,s.topple.afterFinisher)),!o&&t.balance>=t.balMax)i.topple(t),l.toppledNow=!0;else{let d=i.giantDef(t).phases[t.phase+1];d&&t.hp/t.max<=d.from&&i.phaseUp(t)}return i.combo.hits>=s.combo.cap&&br(i,"cap"),l}function Qo(i,e,t,n,s,r=1){let a=i.data.foes[e.type];e.hp=Math.max(0,e.hp-t),(e.state==="wind"||e.state==="move"||e.state==="rest")&&(e.state="stagger",e.t=a.stagger,e.tg=null),e.x+=Math.sin(s)*a.push*r,e.z+=Math.cos(s)*a.push*r,e.flash=1,e.hp<=0&&i.foeDown(e,n)}function pp(i,e,t,n){let s=i.data.moves[e],r=i.data.foes.status,a=i.data.rules,o=s.dmg*hp(i,s)*n.variety*(n.repeat?a.combo.repeat:1),l=1,c={};if(t.status.cracked.n>0&&(o*=r.crackedDmgMul),s.consume)for(let[m,x]of Object.entries(s.consume)){let p=t.status[m].n;p>0&&(o+=x.dmg*2*p,c[m]=p,t.status[m].n=0,l=r.breakerShatter)}let u=i.hero,h=St(u,t),d=up(i,e,s);for(let[m,x]of Object.entries(d))fh(i,t,m,x);if(e==="counter"&&(l=r.counterPush),d.bound){let m=1.1+t.radius;t.x=u.x+Math.sin(h)*m,t.z=u.z+Math.cos(h)*m,t.state="stun",t.t=r.boundStun,t.tg=null,l=0}let g=Math.max(1,Math.round(o));if(i.fight.dmgDealt+=g,dp(i,e,s,!1),i.emit({t:"hit",target:"foe",id:t.id,move:e,dmg:g,variety:n.variety,repeat:n.repeat,consumed:c,x:t.x,z:t.z,combo:i.combo.hits}),Qo(i,t,g,e,h,l),t.state==="stagger"&&d.bound&&(t.state="stun",t.t=r.boundStun),e==="counter"){let m=r.counterStop/60;i.slowT=0,i.slowScale=1,i.stopT=Math.max(i.stopT,m),i.lastStopAt=i.realTime,i.lastStopLen=m}else i.stop(Math.max(2,s.stop-2));i.combo.hits>=a.combo.cap&&br(i,"cap")}function fs(i,e,t){var u,h;let n=i.hero,s=i.data.rules,r=i.data.moves.dodge,a=t&&t.kind==="giant"?t:null;if(i.flow.state!=="fight"||n.hp<=0||i.giant&&i.giant.state==="fallen")return"none";if(n.dodge&&n.dodge.t*60<r.perfect+i.mods.perfectBonus){if(i.fight.perfects++,i.emit({t:"perfect",x:n.x,z:n.z}),i.slow(s.perfect.slow[0],s.perfect.slow[1]),n.dodge.t*60>=r.perfect&&i.powerFired("steadyFeet"),a&&a.state!=="toppled"&&a.state!=="fallen"&&(a.balance=Math.min(a.balMax,a.balance+s.perfect.balance),a.sinceHit=0,i.mods.perfectCracks&&(fh(i,a,"cracked",1),i.powerFired("rollCrack")),a.balance>=a.balMax&&(a.lastHitDir=St(n,a),i.topple(a))),i.counterOn){let d=i.data.moves.counter,g=null;if(a)g=a.state!=="toppled"&&a.state!=="fallen"&&a.hp>0?a:null;else if(t&&t.kind==="foe")g=t.hp>0?t:null;else if(t&&t.kind==="shot"){let m=i.foes.find(x=>x.id===t.from&&x.hp>0);g=m&&it(n,m)-m.radius<=d.lunge+d.reach?m:null}g&&(n.counterT=s.counter.window,n.counterOn={kind:g.kind,id:g.id},i.fight.counterWins++,i.emit({t:"counterReady",x:n.x,z:n.z,target:g.kind}))}return"perfect"}if(n.iframe>0||n.hurtT>0)return i.emit({t:"evade"}),"evade";let o={dmg:e.dmg,mul:(1-i.assistPct/100)*i.mods.dmgIn};for(let d of i.hooks.beforeHurt)d(o,t,i);let l=Math.max(1,Math.round(o.dmg*o.mul));i.mods.dmgIn>1&&i.powerFired("glassStone",{hurt:!0}),n.hp=Math.max(0,n.hp-l),n.hurtT=s.hero.hurtIframes,n.iframe=s.hero.hurtIframes,i.locks.hold("act",s.hero.hurtLock),n.move=null;let c=St(t,n);n.x+=Math.sin(c)*s.hero.hurtPush*(a?1:.5),n.z+=Math.cos(c)*s.hero.hurtPush*(a?1:.5),i.fight.hitsTaken++,i.fight.dmgTaken+=l;{let d=(a?a.id+":":"")+(e.name||"?");if(i.fight.hitsBy[d]=(i.fight.hitsBy[d]||0)+1,i.run){let g=(u=i.fight.hitsByStage)[h=i.run.stage]||(u[h]={});g[d]=(g[d]||0)+1}}return br(i,"hurt"),i.emit({t:"hurt",dmg:l,hp:n.hp,from:e.name}),n.hp<=0&&i.heroDown(),"hurt"}var jM=["light","sunder","tether","breaker","dodge"],xp=["sunder","tether","breaker"];function _p(i){return{x:0,z:4.5,face:Math.PI,hp:i.hero.hp,max:i.hero.hp,move:null,dodge:null,dodgeCd:0,iframe:0,hurtT:0,counterT:0,counterOn:null,pull:null,cd:{sunder:0,tether:0,breaker:0},mx:0,mz:0,moving:!1}}var yp=i=>i&&i.state!=="fallen"&&i.state!=="intro";function Sr(i){let e=i.foes.filter(t=>t.hp>0&&t.state!=="spawn");return yp(i.giant)&&e.push(i.giant),e}function ha(i){let e=i.hero,t=e.counterOn;if(!(e.counterT>0)||!t)return null;if(t.kind==="giant"){let s=i.giant;return s&&s.id===t.id&&yp(s)&&s.state!=="toppled"&&s.hp>0?s:null}let n=i.foes.find(s=>s.id===t.id);return n&&n.hp>0&&n.state!=="spawn"?n:null}function QM(i,e){let t=i.hero,n=i.data.moves,s=i.giant;if(e==="light"&&ha(i))return"counter";if(e==="light"){let r=t.move&&n[t.move.id];return r&&r.role==="string"&&r.next?r.next:"light1"}return e==="breaker"&&s&&s.state==="toppled"&&!s.finisherUsed?"giantfall":e}function mp(i,e){let t=i.hero,n=i.data.moves;if(i.locks.has("act")&&e!=="counter"||xp.includes(e)&&t.cd[e]>0||e==="dodge"&&t.dodgeCd>0)return!1;if(t.dodge)return e==="counter"||e!=="dodge"&&t.dodge.t*60+1e-6>=n.dodge.cancelFrom;if(!t.move)return e!=="light2"&&e!=="light3";let s=n[t.move.id],r=t.move.t*60+1e-6,a=n.cancelRules[s.role]||{},o;e==="dodge"?o="dodge":s.role==="string"&&e===s.next?o="next":n[e].role==="string"?o="light":o="skill";let l=a[o];return l?l==="always"?r>=s.nextFrom:l==="hit"?t.move.hit&&r>=s.cancel:l==="recovery"?r>=s.startup+s.active:l==="hitOrRecovery"?t.move.hit&&r>=s.cancel||r>=s.startup+s.active:l==="any":!1}var vp=(i,e)=>i.data.moves[e].reach+(e==="tether"?i.mods.tetherReach:0);function eb(i,e){let t=i.hero,n=i.data.moves,s=i.data.rules,r=n[e],a=i.giant,o=e==="counter"?ha(i):null;t.move&&t.move.id!==e&&i.emit({t:"cancel",from:t.move.id,to:e}),t.dodge=null,t.move={id:e,t:0,hit:!1,done:!1},t.counterT=0,e==="counter"&&(i.slowT=0,i.slowScale=1,t.iframe=Math.max(t.iframe,(r.startup+r.active)/60),i.fight.counters++),r.cd&&(t.cd[e]=(r.cd+i.mods.cd[e])*i.mods.cdMul),e==="giantfall"&&a&&(a.finisherUsed=!0,a.state==="toppled"&&(a.t=Math.max(a.t,(r.startup+r.active)/60+.05)));let l=vp(i,e)+s.hero.aimAssist,c=Sr(i).filter(h=>it(t,h)-h.radius<l).sort((h,d)=>it(t,h)-h.radius-(it(t,d)-d.radius)),u=o||(e==="giantfall"&&a?a:null)||(c.includes(a)&&it(t,a)-a.radius<r.reach+1.2?a:c[0]);u?t.face=St(t,u):t.moving&&(t.face=Math.atan2(t.mx,t.mz)),i.fight.moves[e]=(i.fight.moves[e]||0)+1,i.emit({t:"swing",move:e})}function gp(i){let e=i.hero,t=i.data.moves.dodge;e.move&&i.emit({t:"cancel",from:e.move.id,to:"dodge"}),e.move=null,e.counterT=0,e.pull=null;let n=e.moving?Math.atan2(e.mx,e.mz):e.face+Math.PI;e.dodge={t:0,a:n,p:0},e.dodgeCd=t.cd*i.mods.dodgeCdMul,e.iframe=t.iframes/60*i.mods.dodgeSafeMul,i.fight.dodges++,i.emit({t:"dodge"})}function Mp(i,e){for(let t of e||[]){if(!jM.includes(t))continue;let n=t==="dodge"&&i.buffer.find(s=>s.p==="dodge");n?n.age=0:i.buffer.push({p:t,age:0})}}function bp(i,e){var r;let t=i.data.rules.input,n=t.buffer,s=(r=t.dodgeBuffer)!=null?r:t.buffer;for(let a=i.buffer.length-1;a>=0;a--){let o=i.buffer[a];o.age+=e,o.age>(o.p==="dodge"?s:n)&&(i.fight.dropped++,i.buffer.splice(a,1))}}function tb(i){let e=i.buffer.findIndex(t=>t.p==="dodge");if(e>=0){mp(i,"dodge")&&(i.buffer.splice(e,1),gp(i));return}for(let t=0;t<i.buffer.length;t++){let n=QM(i,i.buffer[t].p);if(mp(i,n)){i.buffer.splice(t,1),n==="dodge"?gp(i):eb(i,n);return}}}function nb(i,e,t,n){let s=i.hero,r=it(s,n);if(r-n.radius>t)return!1;let a=e.arc/2+Math.asin(Math.min(1,n.radius/Math.max(r,.01)));return Math.abs(uh(St(s,n)-s.face))<=a}function ib(i,e){let t=i.data.moves[e],n=vp(i,e),s=i.hero,r=Sr(i).filter(a=>nb(i,t,n,a));return e==="giantfall"&&(r=r.filter(a=>a.kind==="giant")),e==="tether"&&r.length>1&&(r.sort((a,o)=>it(s,a)-a.radius-(it(s,o)-o.radius)),r=[r[0]]),r.sort((a,o)=>(o.kind==="giant")-(a.kind==="giant"))}function Sp(i,e,t){let n=i.hero,s=i.data.rules,r=i.data.moves;for(let o of xp)n.cd[o]=Math.max(0,n.cd[o]-e);n.dodgeCd-=e,n.iframe-=e,n.hurtT-=e,n.counterT=Math.max(0,n.counterT-e),n.counterT>0&&!ha(i)&&(n.counterT=0),i.locks.tick(e),n.mx=t.mx||0,n.mz=t.mz||0;let a=Math.hypot(n.mx,n.mz);if(a>1&&(n.mx/=a,n.mz/=a),n.moving=Math.hypot(n.mx,n.mz)>.15,i.flow.state!=="fight"||n.hp<=0){n.move=null,n.dodge=null;return}if(tb(i),n.pull){let o=n.pull;o.t+=e;let l=Math.min(1,o.t/o.dur),c=1-(1-l)*(1-l);n.x=o.x0+(o.x1-o.x0)*c,n.z=o.z0+(o.z1-o.z0)*c,l>=1&&(n.pull=null,i.emit({t:"pullEnd",x:n.x,z:n.z}))}if(n.move){let o=n.move,l=r[o.id],c=o.t*60;o.t+=e;let u=o.t*60+1e-6;if(c<l.startup&&l.lunge&&!n.pull){let h=l.lunge*(Math.min(u,l.startup)-c)/l.startup,d=n.x+Math.sin(n.face)*h,g=n.z+Math.cos(n.face)*h;Sr(i).some(m=>it({x:d,z:g},m)<=m.radius+s.hero.radius+.15)||(n.x=d,n.z=g)}if(n.moving&&!n.pull&&(n.x+=n.mx*s.hero.speed*s.hero.moveInMove*e,n.z+=n.mz*s.hero.speed*s.hero.moveInMove*e),!o.done&&u>=l.startup){let h=ib(i,o.id);if(h.length){o.hit=!0,o.done=!0;let d=dh(i,o.id);for(let g of h)g.kind==="giant"?fp(i,o.id,g,d):g.hp>0&&pp(i,o.id,g,d)}else u>=l.startup+l.active&&(o.done=!0,i.emit({t:"whiff",move:o.id}))}n.move===o&&u>=l.startup+l.active+l.recovery&&(n.move=null)}else if(n.dodge){let o=r.dodge,l=n.dodge;l.t+=e;let c=Math.min(1,l.t*60/o.frames),u=1-(1-c)*(1-c),h=u-l.p;l.p=u,n.x+=Math.sin(l.a)*o.dist*h,n.z+=Math.cos(l.a)*o.dist*h,c>=1&&(n.dodge=null)}else n.moving&&!n.pull&&!i.locks.has("act")&&(n.x+=n.mx*s.hero.speed*e,n.z+=n.mz*s.hero.speed*e,n.face=Math.atan2(n.mx,n.mz));sb(i)}function sb(i){let e=i.hero,t=i.data.rules;for(let r of Sr(i)){let a=it(e,r),o=r.radius+t.hero.radius;if(a<o){let l=a>1e-4?St(r,e):0;e.x=r.x+Math.sin(l)*o,e.z=r.z+Math.cos(l)*o}}let n=Math.hypot(e.x,e.z),s=t.arena.radius-t.hero.radius;n>s&&(e.x*=s/n,e.z*=s/n)}function ph(i,e){let t=i.data.giants[e];return{kind:"giant",id:e,x:0,z:-2.5,introT:null,face:0,hp:t.hp,max:t.hp,balance:0,balMax:t.balance,radius:t.radius,state:"intro",t:0,atk:null,queue:[],phase:0,tg:null,windAge:0,think:0,dashLeft:0,struck:!1,status:{cracked:{n:0,t:0},bound:{n:0,t:0}},sinceHit:99,lastHitDir:0,toppleDir:0,toppleQ:null,topples:0}}var wr=(i,e)=>i.data.giants[e.id],el=(i,e)=>wr(i,e).phases[e.phase];function rb(i,e){let t=wr(i,e),n=it(e,i.hero),s=el(i,e).attacks.filter(r=>{let a=t.attacks[r];return a.chain?n<=Math.min(...a.chain.map(o=>t.attacks[o].range[1])):n>=a.range[0]&&n<=a.range[1]});return s.length?i.rng.weighted(s,r=>t.attacks[r].weight):null}function wp(i,e,t){let n=wr(i,e),s=el(i,e),r=n.attacks[t];r.chain&&(e.queue=r.chain.slice(1),t=r.chain[0],r=n.attacks[t]),e.state="wind",e.atk=t,e.windAge=0,e.t=r.wind*s.windMul,e.struck=!1;let a=i.hero;e.tg={kind:r.shape,x:r.at==="hero"?a.x:e.x,z:r.at==="hero"?a.z:e.z,r:r.r||0,inner:r.inner||0,w:r.w||0,len:r.len||0,ang:e.face,k:0,dur:e.t},i.emit({t:"wind",atk:t,dur:e.t})}function ab(i,e){let t=wr(i,e),n=t.attacks[e.atk],s=i.hero,r=e.tg,a={name:e.atk,dmg:n.dmg};if(i.emit({t:"strike",atk:e.atk,x:r.x,z:r.z}),n.shape==="circle")it(s,r)<=r.r+.15&&fs(i,a,e);else if(n.shape==="ring"){let o=it(s,e);o<=r.r&&o>=r.inner&&fs(i,a,e)}if(e.state==="wind"){if(n.shape==="lane"){e.state="active",e.dashLeft=n.dash;return}Tp(i,e)}}function Tp(i,e){let t=wr(i,e).attacks[e.atk];e.state="open",e.t=t.open*el(i,e).openMul,e.tg=null}function Ep(i,e,t){let n=i.data.rules,s=wr(i,e),r=i.hero;jo(i,e,t);let a=t*(e.status.bound.n>0?n.status.bound.giantTimeMul:1);if(e.sinceHit+=t,e.state!=="toppled"&&e.state!=="fallen"&&e.sinceHit>n.balance.idle&&e.balance>0){let c=n.balance.drainFloor+(1-n.balance.drainFloor)*(e.hp/e.max);e.balance=Math.max(0,e.balance-n.balance.drain*c*t)}let o=St(e,r),l=it(e,r);switch(e.state){case"intro":e.introT!=null&&(e.introT-=t,e.introT<=0&&(e.state="approach",e.think=.6,i.emit({t:"giantReady",id:e.id})));break;case"approach":{if(e.face=Mr(e.face,o,s.turn*a),l>s.reachWant+e.radius&&(e.x+=Math.sin(e.face)*s.speed*a,e.z+=Math.cos(e.face)*s.speed*a),e.think-=a,e.think<=0){let c=rb(i,e);c&&wp(i,e,c)}break}case"wind":{let c=s.attacks[e.atk];e.t-=a,e.windAge+=a;let u=c.track?c.track:.7;e.windAge<e.tg.dur*u&&(e.face=Mr(e.face,o,s.turn*a),c.at==="hero"?(e.tg.x=r.x,e.tg.z=r.z):(e.tg.x=e.x,e.tg.z=e.z,e.tg.ang=e.face)),e.tg.k=1-Math.max(0,e.t)/e.tg.dur,e.t<=0&&ab(i,e);break}case"active":{let c=s.attacks[e.atk],u=c.len/c.dash;e.x+=Math.sin(e.tg.ang)*u*a,e.z+=Math.cos(e.tg.ang)*u*a,e.dashLeft-=a;let h=Math.hypot(e.x,e.z),d=n.arena.radius-e.radius*.6;h>d&&(e.x*=d/h,e.z*=d/h,e.dashLeft=0,i.emit({t:"wallHit",x:e.x,z:e.z})),!e.struck&&it(e,r)<=c.w/2+n.hero.radius&&(e.struck=!0,fs(i,{name:e.atk,dmg:c.dmg},e)),e.state==="active"&&e.dashLeft<=0&&Tp(i,e);break}case"open":e.t-=a,e.t<=0&&(e.queue.length?wp(i,e,e.queue.shift()):(e.state="approach",e.atk=null,e.think=i.rng.range(s.think[0],s.think[1])));break;case"roar":e.t-=a,e.t<=0&&(e.state="approach",e.think=i.rng.range(s.think[0],s.think[1]));break;case"toppled":e.t-=t,!e.fallReady&&e.t<=n.topple.fallWindow&&(e.fallReady=!0,i.emit({t:"fallReady"})),e.t<=0&&(e.state="getup",e.t=n.topple.getup,i.emit({t:"getup"}));break;case"getup":e.t-=a,e.t<=0&&(e.state="approach",e.think=i.rng.range(s.think[0],s.think[1])*.5);break;default:break}}function Ap(i,e,t){let n=i.data.rules,s=i.hero;e.state="toppled",e.t=n.topple.time+i.mods.toppleTime,e.tg=null,e.queue=[],e.atk=null,e.fallReady=!1,i.mods.toppleTime>0&&i.powerFired("afterquake"),e.balance=0,e.balMax*=n.topple.grow,e.toppleQ=t,e.topples++,e.finisherUsed=!1;let r=e.lastHitDir;Math.abs(Math.sin(r))<.5&&(r+=(s.x>=e.x?-1:1)*Math.PI/3),e.toppleDir=r,i.emit({t:"topple",dir:r,x:e.x,z:e.z,n:e.topples,hits:t.hits});let a=i.giantDef(e).height*.9,o=Math.sin(r),l=Math.cos(r);for(let u of i.foes){if(u.hp<=0||u.state==="dead")continue;let h=u.x-e.x,d=u.z-e.z,g=h*o+d*l,m=Math.abs(h*l-d*o);g>-.5&&g<a&&m<1.3+u.radius&&(u.hp=0,i.fight.crushes++,i.emit({t:"crush",id:u.id,x:u.x,z:u.z}),i.foeDown(u,"crush"))}let c=i.data.rules.topple.quake;for(let u of i.foes)u.hp>0&&u.state!=="dead"&&Math.hypot(u.x-e.x,u.z-e.z)<e.radius+c.r&&(i.fight.crushes++,Qo(i,u,c.dmg,"quake",Math.atan2(u.x-e.x,u.z-e.z),2.5));if(i.mods.toppleHeal){let u=s.hp;s.hp=Math.min(s.max,s.hp+i.mods.toppleHeal),s.hp>u&&(i.emit({t:"heal",n:s.hp-u}),i.powerFired("secondWind"))}}function Rp(i,e){e.phase++;let t=el(i,e);i.emit({t:"phase",n:e.phase}),!(e.state==="toppled"||e.state==="getup")&&(e.state="roar",e.t=t.roar||1,e.tg=null,e.queue=[],e.atk=null)}function Ip(i,e,t,n){let s=i.data.foes[e];return{kind:"foe",id:++i.nextId,type:e,x:t,z:n,face:St({x:t,z:n},i.hero),hp:s.hp,max:s.hp,radius:s.radius,state:"spawn",t:.7,tg:null,status:{cracked:{n:0,t:0},bound:{n:0,t:0}},flash:0,struck:!1,lungeLeft:0,cool:0}}function Cp(i,e){let t=i.data.foes[e.type],n=i.hero;e.state="wind",e.t=t.wind,e.struck=!1,e.face=St(e,n),e.tg=e.type==="slinger"?{kind:"lane",x:e.x,z:e.z,w:.7,len:9,ang:e.face,k:0,dur:t.wind,small:!0}:{kind:"lane",x:e.x,z:e.z,w:2*(e.radius+.35),len:t.lunge+e.radius+.35,ang:e.face,k:0,dur:t.wind,small:!0},i.emit({t:"foeWind",id:e.id,type:e.type})}function Pp(i,e){let t=i.hero,n=i.data.rules;for(let r=i.foes.length-1;r>=0;r--){let a=i.foes[r],o=i.data.foes[a.type];if(a.flash=Math.max(0,a.flash-e*8),a.state==="dead"){a.t-=e,a.t<=0&&i.foes.splice(r,1);continue}jo(i,a,e);let l=it(a,t),c=St(a,t);switch(a.state){case"spawn":a.t-=e,a.t<=0&&(a.state="move",a.cool=i.rng.range(.2,.8));break;case"move":{if(a.face=Mr(a.face,c,6*e),a.cool-=e,a.type==="slinger"){let[u,h]=o.keep;l<u?(a.x-=Math.sin(c)*o.speed*e,a.z-=Math.cos(c)*o.speed*e):l>h&&(a.x+=Math.sin(c)*o.speed*e,a.z+=Math.cos(c)*o.speed*e),l<=h+1&&a.cool<=0&&Cp(i,a)}else l>o.reach+a.radius+n.hero.radius?(a.x+=Math.sin(a.face)*o.speed*e,a.z+=Math.cos(a.face)*o.speed*e):a.cool<=0&&Cp(i,a);break}case"wind":if(a.t-=e,a.t>a.tg.dur*.45&&(a.face=Mr(a.face,c,5*e),a.type==="slinger"?(a.tg.x=a.x,a.tg.z=a.z,a.tg.ang=a.face):(a.tg.x=a.x+Math.sin(a.face)*o.lunge,a.tg.z=a.z+Math.cos(a.face)*o.lunge)),a.tg.k=1-Math.max(0,a.t)/a.tg.dur,a.t<=0)if(a.type==="slinger"){let u=o.shot;i.shots.push({x:a.x+Math.sin(a.tg.ang)*.6,z:a.z+Math.cos(a.tg.ang)*.6,vx:Math.sin(a.tg.ang)*u.speed,vz:Math.cos(a.tg.ang)*u.speed,r:u.radius,life:u.life,dmg:o.dmg,kind:"shot",from:a.id}),i.emit({t:"throw",id:a.id}),a.state="rest",a.t=i.rng.range(o.rest[0],o.rest[1]),a.tg=null}else a.state="act",a.lungeLeft=.16,a.tg=null,i.emit({t:"lunge",id:a.id});break;case"act":{let u=o.lunge/.16;a.x+=Math.sin(a.face)*u*e,a.z+=Math.cos(a.face)*u*e,a.lungeLeft-=e,!a.struck&&it(a,t)<=a.radius+n.hero.radius+.35&&(a.struck=!0,fs(i,{name:a.type,dmg:o.dmg},a)),a.lungeLeft<=0&&a.state==="act"&&(a.state="rest",a.t=i.rng.range(o.rest[0],o.rest[1]));break}case"rest":case"stagger":case"stun":a.t-=e,a.t<=0&&(a.cool=a.state==="rest"?0:i.rng.range(.1,.4),a.state="move");break;default:break}}let s=i.foes.filter(r=>r.state!=="dead");for(let r=0;r<s.length;r++){let a=s[r];for(let u=r+1;u<s.length;u++){let h=s[u],d=it(a,h),g=a.radius+h.radius;if(d<g&&d>1e-4){let m=(g-d)/2,x=St(a,h);a.x-=Math.sin(x)*m,a.z-=Math.cos(x)*m,h.x+=Math.sin(x)*m,h.z+=Math.cos(x)*m}}let o=i.giant;if(o&&o.state!=="fallen"){let u=it(a,o),h=a.radius+o.radius;if(u<h&&u>1e-4){let d=St(o,a);a.x=o.x+Math.sin(d)*h,a.z=o.z+Math.cos(d)*h}}let l=Math.hypot(a.x,a.z),c=n.arena.radius-a.radius;l>c&&(a.x*=c/l,a.z*=c/l)}}function Lp(i,e){let t=i.hero,n=i.data.rules;for(let s=i.shots.length-1;s>=0;s--){let r=i.shots[s];if(r.x+=r.vx*e,r.z+=r.vz*e,r.life-=e,it(r,t)<=r.r+n.hero.radius){fs(i,{name:"stone",dmg:r.dmg},r),i.shots.splice(s,1);continue}(r.life<=0||Math.hypot(r.x,r.z)>n.arena.radius+1)&&i.shots.splice(s,1)}}var ob=new Set(["crackedMax","tetherReach","toppleTime","toppleHeal","giantfallQuake","perfectBonus","sunderStacks"]),lb=new Set(["breakGainMul","lightBalanceMul","cdMul","dmgOut","dmgIn","dodgeCdMul","dodgeSafeMul","lightDmgMul"]);function Dp(){return{tetherCracks:!1,crackedMax:0,breakKeepsCrack:!1,breakGainMul:1,perfectCracks:!1,tetherReach:0,tetherPullsSelf:!1,lightBalanceMul:1,cdMul:1,cd:{sunder:0,tether:0,breaker:0},sunderStacks:1,giantfallQuake:0,toppleTime:0,toppleHeal:0,breakResetsTether:!1,dmgOut:1,dmgIn:1,dodgeCdMul:1,dodgeSafeMul:1,perfectBonus:0,lightDmgMul:1}}function mh(i,e){for(let[t,n]of Object.entries(e.set))if(t.startsWith("cd."))i.cd[t.slice(3)]+=n;else if(t==="sunderStacks")i.sunderStacks=Math.max(i.sunderStacks,n);else if(ob.has(t))i[t]+=n;else if(lb.has(t))i[t]*=n;else if(typeof n=="boolean")i[t]=n;else throw new Error(`power card ${e.id}: unknown field ${t}`)}var Vi=1/60,cb={intro:["fight"],fight:["pick","won","down"],pick:["fight"],won:["intro"],down:["intro"]};function Np(i,e={}){var m,x;let t=e.asc||0,n=ap(i,t),s={data:n,asc:t,seed:(m=e.seed)!=null?m:1,strict:!!e.strict,counterOn:(x=e.counter)!=null?x:!!(n.rules.counter&&n.rules.counter.enabled),mode:e.mode||"lab",giantId:e.giant||"hollen",events:[],hooks:{beforeHit:[],afterHit:[],beforeHurt:[]},flow:{state:"intro",t:0,seen:{},errors:[]},log:[],downsInRow:0,assistPct:0,nextId:0,realTime:0,runsStarted:0,resume:null,time:0,stopT:0,lastStopAt:-99,lastStopLen:0,slowT:0,slowScale:1},r=n.run;s.emit=p=>{p.at=Math.round(s.time*1e3)/1e3,s.events.push(p)},s.drain=()=>{let p=s.events;return s.events=[],p},s.powerFired=(p,f={})=>{s.run&&s.run.picks.includes(p)&&s.emit({t:"power",id:p,...f})},s.giantDef=p=>n.giants[p.id],s.setFlow=p=>{let f=s.flow.state,y=`${f}>${p}`;if(s.flow.seen[y]=(s.flow.seen[y]||0)+1,!(cb[f]||[]).includes(p)&&(s.flow.errors.push(y),s.strict))throw new Error(`flow ${y} is not allowed`);s.flow.state=p,s.flow.t=0,s.emit({t:"flow",from:f,to:p})},s.stop=p=>{let f=p/60,y=n.rules.feel.stopGap;f<=0||s.slowT>0||s.realTime-s.lastStopAt<y&&f<=s.lastStopLen||(s.stopT=Math.max(s.stopT,f),s.lastStopAt=s.realTime,s.lastStopLen=f)},s.slow=(p,f)=>{s.slowScale=s.slowT>0?Math.min(s.slowScale,f):f,s.slowT=Math.max(s.slowT,p)},s.topple=p=>{Ap(s,p,{hits:s.combo.hits,variety:Jo(s)}),s.fight.topples++,s.stopT=Math.max(s.stopT,n.rules.feel.toppleStop/60),s.lastStopAt=s.realTime,s.slow(n.rules.feel.toppleSlow[0],n.rules.feel.toppleSlow[1])},s.phaseUp=p=>Rp(s,p),s.giantFallen=p=>{if(p.state="fallen",p.tg=null,p.balance=0,br(s,"win"),s.slow(n.rules.feel.winSlow[0],n.rules.feel.winSlow[1]),s.fight.giantsDown++,s.emit({t:"fallen",id:p.id,x:p.x,z:p.z,last:s.mode==="lab"||s.run.stage===r.stages.length-1}),s.mode==="lab"){a("won");return}for(let f of s.foes)f.hp>0&&(f.hp=0,s.foeDown(f,"crumble"));s.shots.length=0,s.run.clearT=0},s.foeDown=(p,f)=>{p.state!=="dead"&&(p.hp=0,p.state="dead",p.t=.9,p.tg=null,p.how=f,s.fight.foesDown++,s.emit({t:"foeDown",id:p.id,type:p.type,how:f,x:p.x,z:p.z}))},s.heroDown=()=>{a("down")};function a(p){var M;let f=s.fight,y=s.giant,b=s.hero;f.result=p,f.asc=s.asc,f.time=Math.round(s.time*10)/10,f.heroHp=b.hp,f.realSec=s.run?Math.round((s.realTime-s.run.t0)*10)/10:f.time,f.giantHpPct=y?y.hp>0?Math.max(1,Math.round(100*y.hp/y.max)):0:null,f.assistPct=s.assistPct,f.bestCombo=s.combo.best,s.mode==="run"&&(f.resumedAt=(M=s.run.resumedAt)!=null?M:null,f.stage=s.run.stage,f.stages=r.stages.length,f.stageName=o(s.run.stage),f.powers=s.run.picks.slice(),f.hpAt=s.run.hpAt.slice(),f.stageTimes=s.run.times.slice()),s.log.push(f),s.downsInRow=p==="down"?s.downsInRow+1:0,s.setFlow(p)}let o=p=>{let f=r&&r.stages[p];return f?f.type==="giant"?n.giants[f.giant].name:f.name||f.type:""};function l(p){let f=s.hero,y=Math.PI-Math.sign(f.x||1)*Math.min(.7,Math.abs(f.x)*.15),b=0,M=p.reduce((C,[,E])=>C+E,0);for(let[C,E]of p)for(let T=0;T<E;T++){let I=y+(b-(M-1)/2)*.55+s.rng.range(-.15,.15);b++,s.foes.push(Ip(s,C,Math.sin(I)*r.spawnRing,Math.cos(I)*r.spawnRing))}s.emit({t:"spawn",n:M})}function c(p){let f=r.stages[p];if(s.run.stage=p,s.run.stageT=0,s.run.laterDone=!1,s.run.addsDone=!1,s.run.clearT=-1,f.type==="giant"){s.giant=ph(s,f.giant),s.giant.introT=r.intro;let y=s.hero;Math.hypot(y.x-s.giant.x,y.z-s.giant.z)<4&&(y.x=0,y.z=4.5)}else s.giant=null;f.foes&&f.foes.length&&l(f.foes),s.emit({t:"stage",i:p,type:f.type,name:o(p),mood:f.mood||1,giant:f.giant||null})}function u(){let p=r.stages[s.run.stage],f=s.foes.some(y=>y.state!=="dead");return p.type==="wave"?!f&&(!p.later||s.run.laterDone):s.giant&&s.giant.state==="fallen"&&s.run.clearT>=2.6}function h(){s.run.times.push(Math.round((s.realTime-s.run.t0)*10)/10),s.run.hpAt.push(Math.round(s.hero.hp));let p=s.run.stage+1;if(p>=r.stages.length){a("won");return}if(r.stages[p].type==="pick"){s.run.stage=p,d(),s.setFlow("pick");return}c(p)}function d(){let p=n.powers.cards.filter(y=>!s.run.picks.includes(y.id)),f=[];for(;f.length<3&&p.length;)f.push(p.splice(Math.floor(s.rng()*p.length),1)[0]);s.run.offer=f,s.emit({t:"offer",cards:f.map(y=>y.id)})}s.choose=p=>{if(s.flow.state!=="pick"||!s.run.offer||!s.run.offer[p])return!1;let f=s.run.offer[p];mh(s.mods,f),s.run.picks.push(f.id),s.run.offer=null,s.run.times.push(Math.round((s.realTime-s.run.t0)*10)/10),s.run.hpAt.push(Math.round(s.hero.hp));let y=s.hero,b=y.hp;return y.hp=Math.min(y.max,y.hp+r.pickHeal),s.emit({t:"picked",id:f.id,heal:y.hp-b}),s.setFlow("fight"),c(s.run.stage+1),!0};function g(p){if(s.flow.state!=="fight")return;let f=r.stages[s.run.stage];s.run.stageT+=p,f.type==="wave"&&f.later&&!s.run.laterDone&&s.foes.filter(y=>y.state!=="dead").length<=1&&(s.run.laterDone=!0,l(f.later)),f.type==="giant"&&f.adds&&!s.run.addsDone&&s.giant&&s.giant.hp/s.giant.max<=f.adds.at&&(s.run.addsDone=!0,l(f.adds.foes)),s.run.clearT>=0&&(s.run.clearT+=p),u()&&h()}return s.reset=()=>{s.rng=Zo(s.seed+s.log.length*7919),s.locks=new Ko,s.buffer=[],s.mods=Dp(),s.hero=_p(n.rules),s.foes=[],s.shots=[],s.nextId=0,s.giant=s.mode==="lab"?ph(s,s.giantId):null,s.run=s.mode==="run"?{stage:-1,stageT:0,picks:[],offer:null,clearT:-1,times:[],hpAt:[],t0:s.realTime}:null,s.combo=hh(),s.time=0,s.stopT=0,s.slowT=0,s.slowScale=1,s.fight={n:s.log.length+1,result:null,hitsTaken:0,dmgTaken:0,dmgDealt:0,topples:0,perfects:0,counterWins:0,counters:0,dodges:0,dropped:0,combos:[],moves:{},hitsBy:{},hitsByStage:{},foesDown:0,crushes:0,giantsDown:0},s.flow.state!=="intro"&&s.setFlow("intro"),s.flow.t=0},s.setAssist=p=>{s.assistPct=Math.max(0,Math.min(n.rules.assist.capPct,p))},s.assistOffer=()=>{let p=n.rules.assist;return s.downsInRow<p.offerAfter?0:Math.min(p.capPct,p.startPct+p.perDownPct*(s.downsInRow-p.offerAfter))},s.step=(p={})=>{if(s.realTime+=Vi,s.flow.state==="pick")return;if(Mp(s,p.press),s.stopT>1e-6){s.stopT-=Vi;return}let f=1;s.slowT>0&&(f=s.slowScale,s.slowT-=Vi,s.slowT<=0&&(s.slowScale=1));let y=Vi*f;if(s.time+=y,s.flow.t+=y,bp(s,Vi),s.flow.state==="intro"&&s.flow.t>=(s.mode==="run"?r.intro:n.rules.flow.intro))if(s.mode==="lab")s.giant.state="approach",s.giant.think=.6,s.setFlow("fight"),s.runsStarted++;else{s.setFlow("fight"),s.runsStarted++;let M=s.resume;if(s.resume=null,M){for(let C of M.picks){let E=n.powers.cards.find(T=>T.id===C);E&&(mh(s.mods,E),s.run.picks.push(C))}s.run.resumedAt=M.stage,c(M.stage)}else c(0)}Sp(s,y,p),(s.flow.state==="fight"||s.flow.state==="intro")&&s.giant&&Ep(s,s.giant,y),s.flow.state==="fight"&&(Pp(s,y),Lp(s,y),cp(s,y),s.mode==="run"&&g(y))},s.hash=()=>{let p=b=>Math.round(b*1e3),f=s.hero,y=s.giant;return lp(JSON.stringify([s.flow.state,p(s.time),p(f.x),p(f.z),p(f.face),f.hp,f.move&&f.move.id,y?[p(y.x),p(y.z),p(y.face),y.hp,p(y.balance),y.state,y.atk,y.topples]:null,s.foes.map(b=>[b.id,p(b.x),p(b.z),b.hp,b.state]),s.combo.hits,s.rng.state(),s.log.length,s.run&&s.run.stage]))},s.report=()=>{let p=s.log,f=p.flatMap(T=>T.combos).filter(T=>T.seq),y={};for(let T of f)y[T.seq]=(y[T.seq]||0)+1;let b=Object.entries(y).sort((T,I)=>I[1]-T[1])[0],M={};for(let T of f){let I=T.seq.split(">").slice(0,3).join(">");M[I]=(M[I]||0)+1}let C=Object.entries(M).sort((T,I)=>I[1]-T[1])[0],E=p.filter(T=>T.result==="won");return{version:3,mode:s.mode,...s.counterOn?{counter:!0}:{},runs:p.length,wins:E.length,firstWinAt:E.length?p.indexOf(E[0])+1:null,zeroHitWins:E.filter(T=>T.hitsTaken===0).length,runsStarted:s.runsStarted,topSequence:b?{seq:b[0],share:Math.round(100*b[1]/f.length)}:null,topOpening:C?{seq:C[0],share:Math.round(100*C[1]/f.length)}:null,skillCombos:f.length,perRun:p.map(T=>{var I,v;return{n:T.n,result:T.result,time:T.time,realSec:T.realSec,resumedAt:(I=T.resumedAt)!=null?I:null,stage:(v=T.stageName)!=null?v:null,heroHp:T.heroHp,giantHpPct:T.giantHpPct,hitsTaken:T.hitsTaken,topples:T.topples,crushes:T.crushes,perfects:T.perfects,hpAtStageEnd:T.hpAt||[],hitsBy:T.hitsBy||{},hitsByStage:T.hitsByStage||{},rolls:T.dodges,rollsPerMin:T.time>0?Math.round(T.dodges/(T.time/60)*10)/10:0,bestCombo:T.bestCombo,powers:T.powers||[],stageTimes:T.stageTimes||[],assistPct:T.assistPct,asc:T.asc||0,...s.counterOn?{counterWins:T.counterWins,counters:T.counters}:{}}})}},s.reset(),s}var ub={novice:{reaction:.4,miss:.3,lead:[.04,.45],plan:"mash",gap:.22,careful:0,counter:.25},mid:{reaction:.28,miss:.15,lead:[.03,.26],plan:"mixed",gap:.15,careful:.5,counter:.6},skilled:{reaction:.18,miss:.04,lead:[.02,.13],plan:"combo",gap:.1,careful:1,counter:.95},human:{reaction:.32,miss:.08,readMu:.84,readSd:.18,lead:[.03,.32],plan:"mixed",gap:.34,careful:.3,counter:.5},veteran:{reaction:.25,miss:.05,readMu:.6,readSd:.15,lead:[.03,.26],plan:"mixed",gap:.26,careful:.5,counter:.8}};function hb(i,e,t,n){if(t.kind==="circle")return it(i,t)<=t.r+n;if(t.kind==="ring")return it(i,e)<=t.r+n;let s=i.x-t.x,r=i.z-t.z,a=s*Math.sin(t.ang)+r*Math.cos(t.ang),o=Math.abs(s*Math.cos(t.ang)-r*Math.sin(t.ang));return a>-1&&a<t.len+1&&o<t.w/2+n}function Up(i,e,t){if(t.kind==="ring")return St(e,i);if(t.kind==="circle")return it(i,t)>.2?St(t,i):St(e,i);let n=(i.x-t.x)*Math.cos(t.ang)-(i.z-t.z)*Math.sin(t.ang);return t.ang+(n>=0?-Math.PI/2:Math.PI/2)}var db=i=>.5*(1+Math.tanh(.7978845608*(i+.044715*i*i*i)));function fb(i,e,t){if(e.src!==t||i.readMu==null)return i.miss;let n=e.age+e.left;return Math.max(i.miss,1-db((n-i.readMu)/i.readSd))}function kp(i,e=1){let t=ub[i],n=Zo(e),s=new Map,r=0,a=!1,o=0,l=null,c=!1;return u=>{let h=u.giant,d=u.hero,g=[],m=0,x=0;if(u.time<o&&(s=new Map,r=0,a=!1),o=u.time,u.flow.state==="pick")return u.choose(Math.floor(n()*u.run.offer.length)),{mx:m,mz:x,press:g};if(u.flow.state!=="fight")return{mx:m,mz:x,press:g};let p=[];h&&h.state==="wind"&&p.push({key:`g${h.atk}@${(u.time-h.windAge).toFixed(2)}`,age:h.windAge,left:h.t,src:h,tg:h.tg});for(let _ of u.foes)_.state==="wind"&&_.tg&&p.push({key:`f${_.id}@${(u.time-(_.tg.dur-_.t)).toFixed(2)}`,age:_.tg.dur-_.t,left:_.t+(_.type==="slinger"?it(_,d)/u.data.foes.slinger.shot.speed:.08),src:_,tg:_.tg});let f=null;for(let _ of p){if(_.age<t.reaction)continue;s.has(_.key)||s.set(_.key,{miss:n()<fb(t,_,h),lead:n.range(t.lead[0],t.lead[1]),done:!1});let P=s.get(_.key);P.miss||P.done||!hb(d,_.src,_.tg,.6)||(!f||_.left<f.left)&&(f={..._,p:P})}if(s.size>60&&(s=new Map([...s].slice(-20))),f&&f.left<=f.p.lead){let _=Up(d,f.src,f.tg);return f.p.done=!0,{mx:Math.sin(_),mz:Math.cos(_),press:["dodge"]}}if(h&&h.state==="active"&&!a&&it(h,d)<h.radius+2.2&&(a=!0,n()>=t.miss)){let _=Up(d,h,h.tg||{kind:"ring"});return{mx:Math.sin(_),mz:Math.cos(_),press:["dodge"]}}(!h||h.state!=="active")&&(a=!1);let y=ha(u);if(y){let _=`${u.fight.n}:${u.fight.counterWins}`,P=u.data.moves.counter;if(l!==_&&(l=_,c=n()<(t.counter||0)),c&&u.data.rules.counter.window-d.counterT>=t.reaction*.5&&it(d,y)-y.radius<P.reach+P.lunge)return c=!1,{mx:m,mz:x,press:["light"]}}if(f&&f.left<.5&&n()<t.careful)return{mx:m,mz:x,press:g};let b=Sr(u);if(!b.length)return{mx:m,mz:x,press:g};let M=b.includes(h)?h:b.sort((_,P)=>it(d,_)-it(d,P))[0],C=it(d,M);if(C-M.radius>1.5){let _=St(d,M);m=Math.sin(_),x=Math.cos(_)}if(u.time<r||C-M.radius>2.1)return{mx:m,mz:x,press:g};r=u.time+t.gap*n.range(.8,1.25);let E=_=>d.cd[_]<=0,T=h&&h.state==="toppled",I=T&&h.fallReady,v="light";if(t.plan==="mash"){if(T&&n()<.4)v="breaker";else if(n()<.22){let _=["sunder","tether","breaker"].filter(E);_.length&&(v=_[Math.floor(n()*_.length)])}}else if(t.plan==="mixed"){if(I&&n()<.75)v="breaker";else if(n()<.5){let _=["sunder","tether","breaker"].filter(P=>E(P)&&!(T&&P==="breaker"));_.length&&(v=_[Math.floor(n()*_.length)])}}else{let _=M.status.cracked.n,P=M.status.bound.n;I?v="breaker":T?v="light":_>=1&&P===0&&E("tether")?v="tether":(_>=1||P)&&E("breaker")?v="breaker":E("sunder")&&_<2&&(v="sunder")}return g.push(v),{mx:m,mz:x,press:g}}}var da={value:0};function Bp(i){da.value=i}var gh=`
float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vn(p); p *= 2.03; a *= 0.5; } return s; }
`;function Op(i,e){let t=[];for(let n=0;n<=14;n++){let s=n/14;t.push(new Ne(e*Math.sin(Math.PI*Math.min(1,s*1.25+.05))*(1-s)**.55+.001,s*i))}return new Io(t,18)}function Fp(i,e,t){return new en({uniforms:{uT:da,uPh:{value:e},uK:t,uInner:{value:i?1:0}},vertexShader:`
      uniform float uT, uPh; varying vec2 vUv; varying float vRim;
      void main(){
        vUv = uv; vec3 p = position; float y = uv.y;
        float sw = sin(y * 5.0 - uT * 7.0 + uPh) * 0.09 + sin(y * 9.0 - uT * 13.0 + uPh * 2.0) * 0.04;   // sways more toward the tip
        p.x += sw * y * 1.4; p.z += cos(y * 4.0 - uT * 6.0 + uPh) * 0.06 * y;
        p.y *= 1.0 + sin(uT * 11.0 + uPh) * 0.06 + sin(uT * 17.3 + uPh * 1.7) * 0.04;                       // flicker
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vec3 n = normalize(normalMatrix * normal); vRim = abs(dot(n, normalize(-mv.xyz)));
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:gh+`
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
      }`,transparent:!0,depthWrite:!1,blending:i?Gn:Pn,side:Rt})}function pb(i,e,t,n){let s=new Dn(e,i);s.translate(0,i/2,0);let r=new en({uniforms:{uT:da,uPh:{value:t},uK:n},vertexShader:`
      varying vec2 vUv; void main(){ vUv = uv;
        vec4 c = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);                    // spherical billboard around the base
        vec3 sx = vec3(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz), 1.0);
        c.xy += position.xy * sx.xy; gl_Position = projectionMatrix * c; }`,fragmentShader:gh+`
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
      }`,transparent:!0,depthWrite:!1,side:Rt}),a=new Pe(s,r);return a.frustumCulled=!1,a.renderOrder=5,a}function mb(i,e,t,n,s){let r=new wt,a=new Float32Array(i);for(let c=0;c<i;c++)a[c]=(c+.37)/i;r.setAttribute("position",new Et(new Float32Array(i*3),3)),r.setAttribute("aSeed",new Et(a,1));let o=new en({uniforms:{uT:da,uPh:{value:n},uH:{value:e},uR:{value:t},uK:s,uPx:{value:1}},vertexShader:`
      attribute float aSeed; uniform float uT, uPh, uH, uR, uPx; varying float vL;
      void main(){
        float s = aSeed * 17.31 + uPh, life = fract(uT * (0.45 + fract(s) * 0.4) + aSeed);
        vec3 p = vec3(sin(s * 6.1 + life * 3.0) * uR * (0.4 + life), life * uH * 2.2, cos(s * 4.7 + life * 2.6) * uR * (0.4 + life));
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vL = life;
        gl_PointSize = uPx * (1.0 - life) * 0.09 * 600.0 / -mv.z; gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uK; varying float vL;
      void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)) * (1.0 - vL) * uK; gl_FragColor = vec4(vec3(1.0, 0.62, 0.2) * a, a); }`,transparent:!0,depthWrite:!1,blending:Gn}),l=new cr(r,o);return l.frustumCulled=!1,l.userData.px=o.uniforms.uPx,l}function zp(i=1,e=.3,{sparks:t=10,ph:n=Math.random()*10}={}){let s=new ct,r={value:1},a=pb(i*1.1,e*2.6,n,r),o=new Pe(Op(i*.8,e),Fp(!1,n,r));o.renderOrder=4;let l=new Pe(Op(i*.5,e*.55),Fp(!0,n+3.1,r));return l.renderOrder=6,s.add(o,a,l),t&&s.add(mb(t,i,e,n,r)),s.userData.k=r,s}function xh(i,e){let t={value:0},n=new en({uniforms:{uT:da,uOpen:t},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:gh+`
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
      }`,transparent:!0,depthWrite:!1,side:Rt}),s=new Pe(new Dn(i,e),n);return s.userData.setOpen=(r,a=.016)=>{t.value+=((r?1:0)-t.value)*Math.min(1,a*3)},s}function Hp(i,e,t){let n=new ct,s=e*9301+49297,r=()=>(s=(s*9301+49297)%233280,s/233280),a=new ur(1,2),o=7+Math.floor(r()*4);for(let c=0;c<o;c++){let u=c/(o-1)-.5,h=1-Math.abs(u)*1.1,d=new Pe(a,t),g=i*(.45+h*.55)*(.8+r()*.4);d.position.set(u*i*3+(r()-.5)*i*.4,g*.25+r()*i*.25*h,(r()-.5)*i*.9),d.scale.set(g,g*.82,g*.9),n.add(d)}let l=new Pe(a,t);return l.scale.set(i*1.9,i*.38,i*.9),l.position.y=-i*.05,n.add(l),n.userData.craft="cloud",n}function Vp(i){let e=new Map,t=new Map,n=i.clone();return Gp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Gp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Gp(i.children[n],e.children[n],t)}var yt={sky:["#8fc6f7","#ffd0b0","#ffb38a"],outline:"#3a2b25",floor:"#eadfc8",floor2:"#d9c9a6",trim:"#b88f5a",tower:"#cdb994",pillar:"#f1e8d6",golem:"#c9b38c",golem2:"#a48a63",moss:"#7fae5a",core:"#5fd8ff",eye:"#ffb84a",sun:"#fff0d2",amb:"#ffe2c6",slime:"#6fdcc4",shield:"#8fa6d9",sprout:"#9ad16a",petal:"#ff8fb1",warn:"#ff4b3a",portal:"#ffd36b",wolf:"#5d5a8f",wolf2:"#3f3c6b",wolfEye:"#ff5c7a",dusk:["#5b6bc8","#c58ab8","#ff9a72"]},ps=null,Xn=()=>{if(ps)return ps;let i=[110,185,255],e=new Uint8Array(i.length*4);return i.forEach((t,n)=>{e[n*4]=e[n*4+1]=e[n*4+2]=t,e[n*4+3]=255}),ps=new or(e,i.length,1),ps.minFilter=ps.magFilter=Ot,ps.needsUpdate=!0,ps},_h=new Map,Gi=i=>(_h.has(i)||_h.set(i,new nn({color:i,gradientMap:Xn()})),_h.get(i)),gb=new Ct({color:yt.outline,side:$t});function Wi(i,e,t=0,n=0,s=0,r=!0,a=!0){let o=new Pe(i,e);if(o.position.set(t,n,s),o.castShadow=a,r){i.computeBoundingSphere();let l=new Pe(i,gb);l.scale.setScalar(1+.035/Math.max(i.boundingSphere.radius,.08)),o.add(l)}return o}function Tr(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Co(n);return s.colorSpace=At,s}var yh=Tr(64,64,i=>{let e=i.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,64,64)});function ms(i,e,t=1){let n=new Di(new ci({map:yh,color:i,blending:Gn,depthWrite:!1,transparent:!0,opacity:t}));return n.scale.setScalar(e),n}function Wp(i,e){let t=i.scene.clone(!0);t.traverse(o=>{if(!o.isMesh)return;let l=o.material,c=l.emissive&&l.emissive.getHex()!==0;o.material=new nn({color:l.color,gradientMap:Xn(),emissive:c?l.emissive:l.color,emissiveIntensity:c?1.1:.16,transparent:l.transparent,opacity:l.opacity}),o.castShadow=!0});let n=new Ft().setFromObject(t),s=n.getSize(new L),r=e/s.y;t.scale.multiplyScalar(r),t.position.set(-(n.min.x+s.x/2)*r,-n.min.y*r,-(n.min.z+s.z/2)*r);let a=new ct;return a.add(t),a}var vh=(i,e)=>i.getObjectByName(e)||null,Mh=i=>{let e=new Pe(new Ni(i,24),new Ct({color:"#3a2a20",transparent:!0,opacity:.25,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.03,e};function fa(i,e){let t=i.scene.clone(!0),n=new Ft().setFromObject(t),s=n.getSize(new L),r=e/s.y;t.scale.multiplyScalar(r),t.position.set(-(n.min.x+s.x/2)*r,-n.min.y*r,-(n.min.z+s.z/2)*r),t.traverse(o=>{if(!o.isMesh)return;let l=o.material,c=l.transparent||l.alphaTest>0;o.material=new nn({map:l.map,gradientMap:Xn(),emissive:"#ffffff",emissiveMap:l.map,emissiveIntensity:.25,alphaTest:c?.5:0,side:c?Rt:Mn}),o.castShadow=!0,o.receiveShadow=!c});let a=new ct;return a.add(t),a}function Xp(i,e,t={},n=8.2){let s=R=>{let N=new Lt(R);return N.colorSpace=At,N.anisotropy=4,N.needsUpdate=!0,N};i.background=t.skyDawn?s(t.skyDawn):Tr(4,256,(R,N,G)=>{let D=R.createLinearGradient(0,0,0,G);D.addColorStop(0,yt.sky[0]),D.addColorStop(.55,yt.sky[1]),D.addColorStop(1,yt.sky[2]),R.fillStyle=D,R.fillRect(0,0,N,G)}),i.add(new Uo(yt.amb,yt.floor2,1.25));let r=new mr(yt.sun,2.6);r.position.set(-6,12,7),e.shadows&&(r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:40}),r.shadow.bias=-8e-4,r.shadow.normalBias=.03),i.add(r);let a=new ct;i.add(a);let o=Tr(512,512,(R,N)=>{R.fillStyle=yt.floor,R.fillRect(0,0,N,N);let G=N/2;R.strokeStyle=yt.floor2,R.lineWidth=7;for(let D of[.12,.26,.4,.47])R.beginPath(),R.arc(G,G,D*N,0,7),R.stroke();R.lineWidth=4;for(let D=0;D<12;D++){let z=D*Math.PI/6;R.beginPath(),R.moveTo(G+Math.cos(z)*.26*N,G+Math.sin(z)*.26*N),R.lineTo(G+Math.cos(z)*.47*N,G+Math.sin(z)*.47*N),R.stroke()}}),l=n+.4,c=new Pe(new Ni(l,64),new nn({map:t.floor?s(t.floor):o,gradientMap:Xn()}));c.rotation.x=-Math.PI/2,c.receiveShadow=!0,a.add(c);let u=l+1.35,h=l+.68,d=new Pe(new tn(l-.05,u,72,1),new nn({color:"#c9a273",gradientMap:Xn()}));d.rotation.x=-Math.PI/2,d.position.y=-.02,d.receiveShadow=!0,a.add(d),a.add(Wi(new Nn(u+.12,u+.12,.5,64,1,!0),Gi(yt.trim),0,-.27,0,!1,!1)),a.add(Wi(new Nn(l-.3,l-.9,40,24,1,!0),Gi(yt.tower),0,-20.4,0,!1,!1));let g=[];for(let R=0;R<7;R++){let N=Math.PI*(1.08+R*.14),G=Math.cos(N)*h,D=Math.sin(N)*h,z=R%3===1?2.6:4.6,F=R%3===1,Y=F&&t.pillarCracked||t.pillar;if(Y){let ee=fa(Y,4.8);if(!F&&R%3===0&&t.pillarClaw){let ae=fa(t.pillarClaw,4.8);ae.visible=!1,ae.rotation.y=-Math.atan2(-G,-D),ee.add(ae),g.push([ee.children[0],ae])}if(F&&t.bannerTorn){ee.updateMatrixWorld(!0);let ae=[];if(ee.traverse(_e=>{_e.isMesh&&_e.material.alphaTest>0&&ae.push(_e)}),ae.length){let _e=new Ft;ae.forEach(Z=>_e.expandByObject(Z));let ke=_e.getSize(new L),H=fa(t.bannerTorn,ke.y);H.position.set((_e.min.x+_e.max.x)/2,_e.min.y,_e.max.z+.01),H.visible=!1,ee.add(H),ae.forEach(Z=>g.push([Z,null])),g.push([null,H])}}ee.position.set(G,0,D),ee.rotation.y=Math.atan2(-G,-D),ee.userData.pillar=!0,a.add(ee);continue}a.add(Wi(new Nn(.42,.5,z,10),Gi(yt.pillar),G,z/2,D)),a.children[a.children.length-1].userData.pillar=!0,a.add(Wi(new fn(1.25,.32,1.25),Gi(yt.trim),G,z+.16,D)),a.add(Wi(new fn(1.3,.3,1.3),Gi(yt.trim),G,.15,D,!0,!1))}if(t.wall){let R=s(t.wall);R.wrapS=ls;let N=new nn({color:"#d2aa78",map:R,gradientMap:Xn(),side:Rt}),G=new nn({color:"#fbe9c8",gradientMap:Xn(),side:Rt}),D=l+.15,z=.34,F=t.wall.width/t.wall.height,Y=(ee,ae,_e)=>{let ke=ae-ee,H=Math.ceil(ke*20),Z=Math.max(1,Math.round(D*ke/(_e*F)));for(let W of[D+z/2,D-z/2]){let ye=new Nn(W,W,_e,H,1,!0,ee,ke),le=ye.attributes.uv;for(let Ce=0;Ce<le.count;Ce++)le.setX(Ce,le.getX(Ce)*Z);let pe=new Pe(ye,N);pe.position.y=_e/2,pe.receiveShadow=!0,a.add(pe)}let oe=new Pe(new tn(D-z/2,D+z/2,H,1,Math.PI/2-ae,ke),G);oe.rotation.x=Math.PI/2,oe.position.y=_e,a.add(oe);for(let W of[ee,ae]){let ye=new Pe(new Dn(z,_e),G);ye.position.set(D*Math.sin(W),_e/2,D*Math.cos(W)),ye.rotation.y=W+Math.PI/2,a.add(ye)}};Y(-Math.PI/2,Math.PI/2,.5),Y(Math.PI/2,Math.PI-.34,1),Y(Math.PI+.34,Math.PI*1.5,1)}let m=[],x=1;if(t.brazier)for(let[R,N]of[[-Math.PI/2,h],[Math.PI/2,h],[-.3*Math.PI,h],[.3*Math.PI,h]]){let G=N*Math.sin(R),D=N*Math.cos(R),z=fa(t.brazier,1);z.position.set(G,0,D),a.add(z);let F=zp(1.15,.28,{sparks:14,ph:m.length*2.7});F.position.set(G,.9,D),a.add(F);let Y=ms("#ff9a3c",1.8,.3);Y.position.set(G,1.3,D),a.add(Y),m.push({f:F,h:Y,ph:m.length*1.9})}let p=new nn({color:"#fff4e6",gradientMap:Xn(),emissive:"#ffe3cf",emissiveIntensity:.45}),f=[];for(let[R,N,G,D]of[[-14,-3,-12,3],[-9,-4.5,-15,2.2],[13,-2.5,-14,3.4],[17,-5,-6,2.4],[-18,-5,-4,2.6],[4,-6,-20,3]]){let z=Hp(D*.75,f.length+3,p);z.position.set(R,N,G),z.rotation.y=(f.length%3-1)*.4,i.add(z),f.push({cl:z,x:R,ph:f.length*1.3})}let y=ms("#fff0c0",26,.9);y.position.set(9,6,-30),i.add(y);let b=new ct;b.position.set(0,0,-(n-.3)),a.add(b);let M,C;t.gate?(b.add(fa(t.gate,5.2)),M=xh(1.75,4.05),M.position.set(0,.5+2.02,.45),C=ms(yt.portal,5,0),C.position.set(0,2.4,.8)):(b.add(Wi(new fn(.7,4.4,.7),Gi(yt.pillar),-1.7,2.2,0),Wi(new fn(.7,4.4,.7),Gi(yt.pillar),1.7,2.2,0),Wi(new fn(4.6,.8,.9),Gi(yt.trim),0,4.7,0)),M=xh(2.7,4.2),M.position.set(0,2.15,0),C=ms(yt.portal,5,0),C.position.set(0,2.3,.4)),b.add(M,C);let E=i.children.find(R=>R.isHemisphereLight),T=i.background,I=t.skyDusk?s(t.skyDusk):Tr(4,256,(R,N,G)=>{let D=R.createLinearGradient(0,0,0,G);D.addColorStop(0,yt.dusk[0]),D.addColorStop(.55,yt.dusk[1]),D.addColorStop(1,yt.dusk[2]),R.fillStyle=D,R.fillRect(0,0,N,G)}),v=[];a.traverse(R=>{R.userData.pillar&&v.push(R)});for(let R of v){let N=new L;R.getWorldPosition(N),R.userData.at=N,R.userData.fade=1,R.userData.mats=[],R.traverse(G=>{G.isMesh&&(G.material=G.material.clone(),G.material.userData.op0=G.material.opacity,R.userData.mats.push(G.material))})}let _=.75,P=4.9,V=(R,N,G,D,z)=>{let F=R.position,Y=N.userData.at,ee=G-F.x,ae=D-F.y,_e=z-F.z,ke=Math.hypot(ee,ae,_e),H=ee/ke,Z=ae/ke,oe=_e/ke,W=F.x-Y.x,ye=F.z-Y.z,le=H*H+oe*oe,pe=2*(W*H+ye*oe),Ce=W*W+ye*ye-_*_,Oe=pe*pe-4*le*Ce;if(Oe<0||le<1e-9)return!1;let rt=(-pe-Math.sqrt(Oe))/(2*le);if(rt<=0||rt>=ke)return!1;let U=F.y+Z*rt;return U>=0&&U<=P};return{sun:r,tower:a,pillars:v,fadePillars(R,N,G){let D=1-Math.exp(-G*10);for(let z of v){let F=N.some(([ee,ae,_e])=>V(R,z,ee,ae,_e))?.28:1,Y=z.userData.fade+=(F-z.userData.fade)*D;for(let ee of z.userData.mats){let ae=Y<.99;ee.transparent=ae||ee.userData.op0<1||ee.alphaTest>0,ee.opacity=ee.userData.op0*Y,ee.depthWrite=!ae}}},setZone(R){x=R===2?1.25:1;for(let[N,G]of g)N&&(N.visible=R!==2),G&&(G.visible=R===2);p.color.set(R===2?"#c9b3e0":"#fff4e6"),p.emissive.set(R===2?"#8a6fae":"#ffe3cf"),i.background=R===2?I:T,E.color.set(R===2?"#c9b6ff":yt.amb),r.color.set(R===2?"#ffc79a":yt.sun),r.intensity=R===2?2.2:2.6},setGate(R,N=0){var D;let G=Math.min(.1,Math.max(0,N-((D=this._gt)!=null?D:N)));this._gt=N,M.userData.setOpen(R,G),C.material.opacity=R?.55:0},gatePos:new L(0,0,-(n-.3)),tick(R){for(let N of f)N.cl.position.x=N.x+Math.sin(R*.05+N.ph)*1.2;for(let{f:N,h:G,ph:D}of m){let z=1+Math.sin(R*11+D)*.08+Math.sin(R*17.3+D*2)*.05;N.userData.k.value=x,N.scale.setScalar(x**.5),G.material.opacity=(.24+Math.sin(R*9+D)*.05)*x}}}}function bh(i,e,t=-Math.PI/2){let n=new ct,s=new ct,r=Vp(i.scene),a=new Ft().setFromObject(r),o=a.getSize(new L),l=e/o.y;r.scale.multiplyScalar(l),r.position.set(-(a.min.x+o.x/2)*l,-a.min.y*l,-(a.min.z+o.z/2)*l);let c=new ct;c.rotation.y=t,c.add(r),s.add(c),n.add(s);let u=[];r.traverse(d=>{if(d.isMesh){let g=new nn({map:d.material.map,gradientMap:Xn(),transparent:!0,side:d.material.side,emissive:"#ffffff",emissiveMap:d.material.map,emissiveIntensity:.3});d.material=g,d.frustumCulled=!1,u.push(g)}});let h=new Pe(new Ni(.42,20),new Ct({color:"#3a2a20",transparent:!0,opacity:.25,depthWrite:!1}));return h.rotation.x=-Math.PI/2,h.position.y=.02,n.add(h),n.userData={body:s,mats:u,H:e,anim:xb(r,i.animations||[])},n}function xb(i,e){let t=new Bo(i),n={};for(let l of e)n[l.name]=t.clipAction(l);let s=null,r=null,a=!1,o=(l,c)=>{let u=n[l];return u?(s===u&&!c||(u.reset(),u.setLoop(c?Su:wu,1/0),u.clampWhenFinished=!!c,u.enabled=!0,u.setEffectiveWeight(1),u.play(),s&&s!==u&&s.crossFadeTo(u,c?.06:.15,!1),s=u),!0):!1};return t.addEventListener("finished",l=>{l.action===r&&(r=null)}),{has:l=>!!n[l],current:()=>s?s.getClip().name:null,once(l){o(l,!0)&&(r=n[l])},hold(l,c){let u=n[l];return u?(s!==u&&o(l,!0),r=null,u.paused=!0,u.time=Math.min(.999,Math.max(0,c))*u.getClip().duration,a=!0,!0):!1},update(l,c,u=1){if(Number.isFinite(l)||(l=0),Number.isFinite(t.time)||t.setTime(0),a){a=!1,t.update(l);return}s&&s.paused&&(s.paused=!1),r||(o(c,!1),n[c]&&(n[c].timeScale=u)),t.update(l)}}}function qp(i,e,t,n=!1){if(i.userData.weapon&&(i.userData.weapon.removeFromParent(),i.userData.weapon=null),!e)return!1;let s=null;if(i.traverse(l=>{l.isBone&&/forearm\.?R$/i.test(l.name)&&(s=l)}),!s)return!1;let r=e.scene.clone(!0);r.traverse(l=>{if(!l.isMesh)return;let c=l.material,u=c.emissive&&c.emissive.getHex()!==0;l.material=new nn({color:c.color,gradientMap:Xn(),emissive:u?c.emissive:"#000000",emissiveIntensity:u?1.1:0}),l.castShadow=!0,l.frustumCulled=!1});let a=new Ft().setFromObject(r);r.scale.setScalar(t/(a.max.y-a.min.y)),n&&(r.rotation.x=Math.PI),i.updateMatrixWorld(!0);let o=new ct;return o.add(r),o.scale.setScalar(1/s.getWorldScale(new L).x),o.position.set(0,s.position.length()*.92,0),s.add(o),i.userData.weapon=o,!0}function $p(i){let e=bh(i,1.75),t=new Pe(new Po(.16,.38,3),new Ct({color:"#f2b33d",transparent:!0,opacity:.85,depthWrite:!1}));t.userData.craft="facing arrow",t.rotation.x=Math.PI/2,t.position.set(0,.04,.85);let n=new ct;return n.add(t),e.add(n),e.userData.arrow=n,e}function Er(i,e,t){let n=new ct,s=new Ct({color:yt.warn,transparent:!0,opacity:.25,depthWrite:!1}),r=new Ct({color:yt.warn,transparent:!0,opacity:.55,depthWrite:!1}),a;if(i==="circle")n.add(new Pe(new Ni(e,40),s)),n.add(new Pe(new tn(e*.93,e,48),r)),a=new Pe(new Ni(e,40),r),n.add(a);else if(i==="ring")n.add(new Pe(new tn(t,e,48),s)),n.add(new Pe(new tn(e*.95,e,48),r)),a=new Pe(new tn(t,e,48),r),n.add(a);else{let l=new Pe(new Dn(e,t),s);l.position.y=t/2,n.add(l),a=new Pe(new Dn(e,t),r),a.position.y=t/2,n.add(a)}n.rotation.x=-Math.PI/2,n.position.y=.03;let o=new ct;return o.add(n),o.userData={fill:a,kind:i,len:t},o}function Sh(i,e){if(!i)return;let t=i.userData.fill,n=Math.max(.001,e);i.userData.kind==="lane"?(t.scale.set(1,n,1),t.position.y=i.userData.len*n/2):t.scale.set(n,n,1)}function pa(i){i&&(i.removeFromParent(),i.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}))}var _b=Tr(128,128,i=>{let e=[[[18,20],[46,52],[38,70],[66,92],[60,110]],[[46,52],[80,44],[104,26]],[[66,92],[96,96]]];for(let[t,n]of[[17,"#3a0c00"],[10,"#ff5a0a"],[4,"#ffe08a"]]){i.strokeStyle=n,i.lineWidth=t,i.lineJoin="round",i.lineCap="round";for(let s of e)i.beginPath(),s.forEach(([r,a],o)=>o?i.lineTo(r,a):i.moveTo(r,a)),i.stroke()}}),Kp=i=>!!(i&&i.animations&&i.animations.length);function Zp(i,e,t){if(Kp(i)){let s=bh(i,e);for(let r of s.userData.mats)r.emissiveIntensity=.1;return{root:s,anim:s.userData.anim,mats:s.userData.mats}}let n=Wp(i,e);return vb(n,t),{root:n,anim:null}}var sn=i=>i*i*(3-2*i),wh=i=>Math.max(0,Math.min(1,i)),yb={light1:[[-40,-80],[-80,60]],light2:[[-80,60],[-40,-80]],light3:[[-165,-10],[-45,0]],sunder:[[-175,-10],[-35,5]],tether:[[-20,0],[-95,0]],counter:[[-160,-45],[-50,45]]},Yp=Math.PI/180;function Jp(i,e){let t=$p(i),n=t.userData;e&&qp(t,e,1.05);let s=0,r=0,a=null,o=null,l=null,c=null,u=null,h=0;t.traverse(y=>{y.isBone&&/upperarm\.?R$/i.test(y.name)&&!l&&(l=y)});let d=l&&l.quaternion.clone(),g=l&&l.quaternion.clone(),m=l&&l.position.clone().set(1,0,0),x=l&&l.position.clone().set(0,0,1),p=null,f=null;return{obj:t,update(y,b,M){let C=y.hero,E=n.body;if(c===null||!(C.hurtT>0)||!(b>0))(c===null||b>0)&&(c=C.x,u=C.z);else{let v=1-Math.exp(-b*24);c+=(C.x-c)*v,u+=(C.z-u)*v}if(t.position.set(c,0,u),o===null||!(b>0))o=C.face;else{let v=Math.atan2(Math.sin(C.face-o),Math.cos(C.face-o));o+=v*(1-Math.exp(-b*22))}t.rotation.y=o,E.position.y=0,E.rotation.set(0,0,0),E.scale.set(1,1,1);let T=C.moving&&!C.move?"run":"idle";if(C.move){let v=M[C.move.id],_=C.move.t*60,P=v.startup+v.active,V=_<v.startup?.45*_/v.startup:_<P?.45+.15*(_-v.startup)/v.active:.6+.4*wh((_-P)/v.recovery);n.anim.hold(n.anim.has(v.clip)?v.clip:"attack",V);let R=yb[C.move.id];if(R){let[N,G]=R,D=(z,F,Y)=>[z[0]+(F[0]-z[0])*Y,z[1]+(F[1]-z[1])*Y];p=V<.3?D([0,0],N,sn(V/.3)):V<.45?D(N,G,sn((V-.3)/.15)):V<.6?G:D(G,[0,0],sn((V-.6)/.4))}if(C.move.id==="light2"&&(E.rotation.y=.5*Math.sin(Math.PI*V)),C.move.id==="breaker"){let N=_<v.startup?Math.sin(Math.PI*_/v.startup):0;E.position.y=N*.7,E.rotation.x=.35*N}if(C.move.id==="counter"){let N=_<v.startup?Math.sin(Math.PI*_/v.startup):0;E.position.y=N*.9,E.rotation.x=-.35*N}if(C.move.id==="giantfall"){let N=_<v.startup?Math.sin(Math.PI*.5*_/v.startup):Math.max(0,1-(_-v.startup)/6);E.position.y=N*1.6,E.rotation.x=-.6*N}C.move.id!==a&&(s=0)}else if(C.dodge){let v=wh(C.dodge.t*60/M.dodge.frames);n.anim.has("roll")?(n.anim.hold("roll",v),E.rotation.x=Math.sin(Math.PI*v)*.5,E.position.y=Math.sin(Math.PI*v)*.15):(s=v*Math.PI*2,E.rotation.y=-s,E.scale.set(1.08,.82,1.08),E.position.y=Math.sin(Math.PI*v)*.12),T="run"}a=C.move?C.move.id:null,C.pull&&(E.rotation.x=.55),r=C.hp<=0?Math.min(1,r+b*2.5):0,r>0?(E.rotation.x=-Math.PI/2*sn(r),E.position.y=.25*r):h>0&&(h=Math.max(0,h-b*3.2),E.rotation.x-=.5*h,E.position.y+=.28*Math.sin(Math.PI*(1-h)));let I=C.hurtT>0&&Math.floor(C.hurtT*20)%2===0;for(let v of n.mats)v.opacity=I?.45:1;n.arrow.visible=y.flow.state==="fight",C.move?n.anim.update(b,T):n.anim.update(b,T,T==="run"?1.2:1),l&&!f&&!C.move&&(f=l.quaternion.clone()),l&&f&&p&&(d.setFromAxisAngle(x,p[0]*Yp),g.setFromAxisAngle(m,p[1]*Yp),l.quaternion.copy(f).multiply(d).multiply(g)),p=null},hurt(){n.anim.once("hurt"),h=1},win(){n.anim.once("win")}}}var vb=(i,e)=>{if(!e)return;let t=new Re(e);i.traverse(n=>{n.isMesh&&(n.material.color.multiply(t),n.material.emissive&&n.material.emissive.multiply(t))})};function Th(i,e,t=5.4,n=null,s="hollen"){let r=new ct,a=new ct,o=new ct;r.add(a,Mh(t*.3)),a.add(o);let l=Zp(i,t,n),c=l.root,u=l.anim;o.add(c);let h=H=>u?null:vh(c,H),d=h("upper"),g=h("armL"),m=h("armR"),x=h("head"),p=h("legL"),f=h("legR");r.updateMatrixWorld(!0);for(let H of[g,m,x])H&&d&&d.attach(H);let y=new Map;for(let H of[d,g,m,x,p,f])H&&y.set(H,H.rotation.clone());let b=[];c.traverse(H=>{H.isMesh&&H.material.emissive&&b.push({m:H.material,e:H.material.emissive.clone(),ei:H.material.emissiveIntensity})}),r.userData.rigged=!!u;let M=t*.32,C=[[-.45,.62],[.38,.72],[.05,.47],[-.18,.82],[.55,.5],[-.6,.42]].map(([H,Z],oe)=>{let W=new Di(new ci({map:_b,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,rotation:oe*1.1}));return W.scale.setScalar(t*.26),W.position.set(H*M,Z*t,M*.95),W.renderOrder=6,a.add(W),W}),E=new Ct({color:"#1fb5ea",transparent:!0,opacity:0,depthWrite:!1}),T=[.3,.58].map(H=>{let Z=new Pe(new hr(M*1.08,t*.022,8,40),E);return Z.rotation.x=Math.PI/2,Z.position.set(0,H*t,0),Z.userData.y=H*t,a.add(Z),Z}),I=[0,1,2,3].map(()=>{let H=ms("#ffe48a",.45,0);return o.add(H),H});u||(r.userData.placeholder=`${s}: stand-in Stone Guardian parts (art/boss-guardian.glb) until art/giant-${s}.glb loads`);for(let H of[...C,...I,...T])H.userData.craft="giant status light";let v=0,_=null,P=null,V=0,R=0,N=0,G=0,D=0,z=9,F="",Y=0,ee=0,ae=0,_e=new L,ke=(H,Z=0,oe=0,W=0)=>{if(!H)return;let ye=y.get(H);H.rotation.set(ye.x+Z,ye.y+oe,ye.z+W)};return{obj:r,get tg(){return _},get heals(){return v},hit(H,Z){N=.06,G=H.move==="counter"?.34:Math.min(.22,.05+(Number.isFinite(H.gain)?H.gain:0)*.006+(H.move==="breaker"?.08:0)),D=Number.isFinite(Z)?Z:0},strike(){z=0},update(H,Z,oe){let W=H.giant&&H.giant.id===s?H.giant:null;if(r.visible=!!W,!W)return _&&(pa(_),_=null,P=null),{struckT:z};let ye=H.data.giants[W.id];W.state!==F?(F=W.state,Y=0):Y+=Z,r.position.set(W.x,0,W.z),o.rotation.y=W.face,z+=Z,N-=Z,G=Math.max(0,G-Z*1.6),ee+=Z;let le=W.state==="approach"||W.state==="active";V+=Z*(W.state==="active"?9:le?3.2:0);let pe=le?Math.sin(V)*(W.state==="active"?.55:.3):0;ke(p,pe),ke(f,-pe);let Ce=0,Oe=0,rt=0,U=[0,0,0],Ke=[0,0,0],Ve=0,Fe=0,be=W.atk,at=W.tg?W.tg.k:0;if(W.state==="wind"&&be==="slam"){let se=sn(at);U=[-2.7*se,0,.2*se],Ke=[-2.7*se,0,-.2*se],Ce=-.3*se}else if(W.state==="wind"&&be==="sweep"){let se=sn(at);Oe=1.1*se,Ke=[-1.2*se,0,-1.2*se],U=[0,0,.5*se]}else if(W.state==="wind"&&be==="charge"){let se=sn(at);Ce=.45*se,Ve=.25*se,U=[.8*se,0,0],Ke=[.8*se,0,0]}else if(W.state==="active")Ce=.6,U=[1,0,0],Ke=[1,0,0];else if(W.state==="open"){let se=ye.attacks[be]||{},ne=wh(1-W.t/Math.max(.01,se.open||1));if(be==="slam"){let fe=Math.min(1,Y/.08);Ce=.55*fe*(1-sn(ne)),U=[(-2.7+3.4*fe)*(1-sn(ne)),0,0],Ke=U.slice(),Ve=.35*fe*(1-sn(ne))}else be==="sweep"?(Oe=(1.1-2.5*Math.min(1,Y/.1))*(1-sn(ne)),Ke=[-1.2*(1-sn(ne)),0,-1.2*(1-sn(ne))]):Ce=.35*(1-sn(ne))}else if(W.state==="roar"){let se=Math.sin(Math.min(1,Y/.3)*Math.PI/2);Ce=-.35*se,U=[-.6*se,0,1.3*se],Ke=[-.6*se,0,-1.3*se],Fe=Math.sin(oe*40)*.06*se}let De=W.balMax?W.balance/W.balMax:0,A=De*De*.09;if(rt+=Math.sin(oe*3.1)*A,Ce+=Math.sin(oe*2.3+1)*A*.6,Ce-=G*Math.cos(D-W.face),rt+=G*Math.sin(D-W.face)*.6,ke(d,Ce,Oe,rt),ke(g,...U),ke(m,...Ke),ke(x,Fe),u){let se=ye.attacks[be]||{},ne=be==="sweep";W.state==="wind"?u.hold(ne?"windup2":"windup",be==="charge"?at*.6:at):W.state==="open"&&Y<(se.open||1)*.6?u.hold(ne?"strike2":"strike",Math.min(1,Y/.25)):W.state==="roar"&&u.hold("windup2",Math.min(1,Y/.4)),u.update(Z,W.state==="toppled"||W.state==="fallen"||W.state==="getup"?"dizzy":le?"run":"idle",W.state==="active"?2.2:1),c.rotation.z=rt,c.rotation.x=Ce*.5}o.position.y=-Ve,W.state==="toppled"?R=Math.min(1,R+Z/.45):W.state==="getup"?R=Math.max(0,1-Y/(H.data.rules.topple.getup||.9)):W.state==="fallen"?(R=Math.min(1,R+Z/1.1),ae=Math.min(1,ae+Z/3)):R=Math.max(0,R-Z*3);let S=W.state==="fallen"?1.45:1.2,X=W.state==="toppled"||W.state==="fallen"?R*R:sn(R),Q=W.state==="toppled"&&R>=1?Math.max(0,Math.sin(Math.min(1,(Y-.45)/.35)*Math.PI))*.08:0,ie=W.toppleDir;_e.set(Math.cos(ie),0,-Math.sin(ie)),a.quaternion.setFromAxisAngle(_e,X*S-Q),a.position.y=-1.1*X,X>0&&(ke(p,-.9*X),ke(f,-.7*X));let J=W.status.cracked.n,we=W.status.bound.n;for(let se of b)N>0?(se.m.emissive.copy(se.e).lerp(new Re("#fff4dc"),.6),se.m.emissiveIntensity=se.ei+.35):J>0?(se.m.emissive.copy(se.e).lerp(new Re("#ff5a10"),Math.min(.8,.4*J)*(.75+.25*Math.sin(oe*6))),se.m.emissiveIntensity=se.ei+.25*J):ae>0?(se.m.emissive.copy(se.e).lerp(new Re("#ffe8a8"),.4*ae),se.m.emissiveIntensity=se.ei):(se.m.emissive.copy(se.e),se.m.emissiveIntensity=se.ei);C.forEach((se,ne)=>{se.material.opacity=ne<J*2?.85+.15*Math.sin(oe*7+ne):0}),E.opacity=we?.8+.15*Math.sin(oe*8):0,T.forEach((se,ne)=>{se.position.y=se.userData.y+t*.02*Math.sin(oe*4+ne*2),se.rotation.z=oe*(ne?-.8:.8)});let he=W.state==="toppled";return I.forEach((se,ne)=>{let fe=oe*3+ne*Math.PI/2;se.position.set(Math.sin(fe)*.9,t*.92,Math.cos(fe)*.9),se.material.opacity=he?.9:0}),((W.tg?W.tg.kind:null)!==P||_&&!W.tg)&&(pa(_),_=null,P=null),W.tg&&!_&&(_=W.tg.kind==="circle"?Er("circle",W.tg.r):W.tg.kind==="ring"?Er("ring",W.tg.r,W.tg.inner):Er("lane",W.tg.w,W.tg.len),_.userData.craft="telegraph",P=W.tg.kind,e.add(_)),_&&(_.position.set(W.tg.x,0,W.tg.z),P==="lane"&&(_.rotation.y=W.tg.ang+Math.PI),Sh(_,W.tg.k)),[r.position.x,r.position.z,o.rotation.y,o.position.y,c.rotation.x,c.rotation.z,a.quaternion.x,a.quaternion.y,a.quaternion.z,a.quaternion.w,a.position.y].every(Number.isFinite)||(v++,G=0,D=0,R=0,r.position.set(W.x||0,0,W.z||0),o.rotation.y=W.face||0,o.position.y=0,c.rotation.set(0,0,0),a.quaternion.identity(),a.position.y=0),{struckT:z}}}}function jp(i,e,t={}){let n=new Map,s=new Map,r=new ur(.26,0),a=new nn({color:"#8d8476"});function o(c,u){let h=new ct,d=new ct;h.add(d,Mh(u.radius*1.1));let g=t[c.type]||i,m=Zp(g,u.height,Kp(g)?null:u.tint),x=m.root;d.add(x);let p=v=>m.anim?null:vh(x,v),f=p("upper"),y=p("armL"),b=p("armR"),M=p("legL"),C=p("legR");h.updateMatrixWorld(!0);for(let v of[y,b,p("head")])v&&f&&f.attach(v);let E=new Map;for(let v of[f,y,b,M,C])v&&E.set(v,v.rotation.clone());let T=[];x.traverse(v=>{v.isMesh&&v.material.emissive&&T.push({m:v.material,e:v.material.emissive.clone()})});let I=ms("#ffe48a",.35,0);return I.position.y=u.height*1.05,d.add(I),m.anim||(h.userData.placeholder=`${c.type}: stand-in tinted guardian parts until art/foe-${c.type}.glb loads`),I.userData.craft="stun light",e.add(h),{obj:h,yaw:d,up:f,aL:y,aR:b,lL:M,lR:C,rest:E,mats:T,star:I,anim:m.anim,walk:Math.random()*6,tg:null,tgKind:null,deadT:0}}let l=(c,u,h=0,d=0,g=0)=>{if(!u)return;let m=c.rest.get(u);u.rotation.set(m.x+h,m.y+d,m.z+g)};return{update(c,u,h){let d=new Set;for(let m of c.foes){let x=c.data.foes[m.type],p=n.get(m.id);p||(p=o(m,x),n.set(m.id,p)),d.add(m.id),p.obj.position.set(m.x,0,m.z),p.yaw.rotation.y=m.face;let f=m.state==="move";p.walk+=u*(f?9:0);let y=f?Math.sin(p.walk)*.5:0;l(p,p.lL,y),l(p,p.lR,-y);let b=0,M=0,C=1,E=0;if(m.state==="spawn")C=Math.min(1,1-m.t/.7+.2),E=-.6*(m.t/.7);else if(m.state==="wind"){let _=m.tg?m.tg.k:0;M=-2.4*_,b=m.type==="slinger"?-.3*_:.25*_}else m.state==="act"?(b=.6,M=.8):m.state==="stagger"?b=-.35*Math.max(0,m.t/x.stagger):m.state==="dead"&&(p.deadT+=u,C=Math.max(.01,1-p.deadT/.9),E=-.5*p.deadT,b=.6*p.deadT);l(p,p.up,b),l(p,p.aL,M),l(p,p.aR,m.type==="slinger"?0:M),p.anim&&(m.state==="wind"?p.anim.hold("windup",m.tg?m.tg.k:0):(m.state==="act"||m.state==="rest"&&m.t>.6)&&p.anim.hold("strike",m.state==="act"?.6:1),p.anim.update(u,m.state==="stun"||m.state==="stagger"?"dizzy":f?"run":"idle",f?1.4:1));let T=0;if(m.state==="stagger"&&(T=-.45*Math.max(0,m.t/x.stagger)),m.state==="act"){let _=Math.min(1,1-Math.max(0,m.lungeLeft||0)/.16);E+=Math.sin(Math.PI*_)*.45,T=.35}p.yaw.rotation.x=T,p.sx===void 0&&(p.sx=m.x,p.sz=m.z);let I=Math.hypot(m.x-p.sx,m.z-p.sz);if(I>.25&&u>0&&m.state!=="act"){let _=1-Math.exp(-u*24);p.sx+=(m.x-p.sx)*_,p.sz+=(m.z-p.sz)*_}else(u>0||I<=.25)&&(p.sx=m.x,p.sz=m.z);p.obj.position.x=p.sx,p.obj.position.z=p.sz,p.obj.scale.setScalar(C),p.obj.position.y=E;for(let _ of p.mats)m.flash>0?_.m.emissive.set("#fff4dc"):m.status.cracked.n?_.m.emissive.copy(_.e).lerp(new Re("#ff6a1a"),.35):_.m.emissive.copy(_.e);p.star.material.opacity=m.state==="stun"?.9:0,p.star.position.x=Math.sin(h*6)*.3,(m.tg?m.tg.kind:null)!==p.tgKind&&(pa(p.tg),p.tg=null,p.tgKind=null),m.tg&&!p.tg&&(p.tg=m.tg.kind==="circle"?Er("circle",m.tg.r):Er("lane",m.tg.w,m.tg.len),p.tg.userData.craft="telegraph",p.tgKind=m.tg.kind,p.tg.traverse(_=>{_.material&&(_.material.opacity*=.8)}),e.add(p.tg)),p.tg&&(p.tg.position.set(m.tg.x,0,m.tg.z),p.tgKind==="lane"&&(p.tg.rotation.y=m.tg.ang+Math.PI),Sh(p.tg,m.tg.k))}for(let[m,x]of n)d.has(m)||(pa(x.tg),x.obj.removeFromParent(),x.obj.traverse(p=>{p.isMesh&&p.material&&p.material.dispose()}),n.delete(m));let g=new Set;for(let m of c.shots){let x=s.get(m);x||(x=new Pe(r,a),x.castShadow=!0,x.userData.craft="thrown stone",e.add(x),s.set(m,x)),g.add(m),x.position.set(m.x,1,m.z),x.rotation.x+=u*12}for(let[m,x]of s)g.has(m)||(x.removeFromParent(),s.delete(m))},count:()=>n.size}}var Ht={arc:new tn(.9,1.35,24,1,-.9,1.8),arcBig:new tn(1.2,2.1,32,1,-1.3,2.6),ring:new tn(.86,1,48),spark:new fn(.07,.07,.32),beam:new Nn(.05,.05,1,6,1,!0),beamCore:new Nn(.11,.11,1,8,1,!0),chop:new tn(.75,1.55,28,1,-1,2),crack:new wt().setFromPoints([new L(-.14,0,0),new L(.14,0,0),new L(.05,.55,0),new L(.14,0,0),new L(.09,.5,0),new L(.05,.55,0),new L(.05,.55,0),new L(.09,.5,0),new L(-.02,1,0)]),bindRing:new hr(1,.085,6,40)};Ht.crack.rotateX(-Math.PI/2);Ht.beam.translate(0,.5,0);Ht.beam.rotateX(Math.PI/2);Ht.beamCore.translate(0,.5,0);Ht.beamCore.rotateX(Math.PI/2);var Qp=i=>i-Math.PI/2,em={light1:["#fff4d6",0],light2:["#fff4d6",.5],light3:["#ffe2a0",-.4],sunder:["#ff8a3c",.25],breaker:["#ffd36b",0],giantfall:["#ffffff",0],counter:["#12aee0",-.55]};function tm(i){let e=[],t=(r,a,o)=>(r.userData.craft="hit effect",i.add(r),e.push({obj:r,life:a,t:0,step:o}),r),n=(r,a=1,o=!0)=>new Ct({color:r,transparent:!0,opacity:a,depthWrite:!1,side:Rt,blending:o?Gn:Pn}),s=(r,a,o=1)=>{let l=new Di(new ci({map:yh,color:r,transparent:!0,opacity:o,depthWrite:!1,blending:Gn}));return l.scale.setScalar(a),l};return{count:()=>e.length,slash(r,a){let[o,l]=em[a]||em.light1,c=a==="breaker"||a==="giantfall",u=a==="counter",h=new Pe(c||u?Ht.arcBig:Ht.arc,n(o,u?.95:.85,!u));if(h.position.set(r.x,c?.25:1,r.z),h.rotation.order="YXZ",h.rotation.y=Qp(r.face),h.rotation.x=c?-Math.PI/2:-Math.PI/2+l,t(h,c||u?.24:.2,d=>{h.material.opacity=(u?.95:.85)*(1-d),h.scale.setScalar(1+d*.35)}),!c){let d=a==="light2"?1:-1;for(let g=1;g<=2;g++){let m=new Pe(h.geometry,n(o,(u?.6:.5)/g,!u));m.position.copy(h.position),m.rotation.order="YXZ",m.rotation.copy(h.rotation),m.rotation.z+=d*.32*g;let x=m.material.opacity;t(m,.22+.07*g,p=>{m.material.opacity=x*(1-p)*(1-p),m.scale.setScalar(1+p*.2)})}}},chop(r){let a=new Pe(Ht.chop,n("#f26a1b",.92,!1));a.position.set(r.x,1.1,r.z),a.rotation.order="YXZ",a.rotation.y=Qp(r.face),a.rotation.x=-Math.PI/2+.75,t(a,.2,o=>{a.material.opacity=.95*(1-o),a.scale.setScalar(1+o*.25)})},cracks(r,a,o,l=7){for(let c=0;c<l;c++){let u=new Pe(Ht.crack,n(c%2?"#b2400c":"#e85a10",.95,!1)),h=1.3+Math.random()*1.1;u.position.set(r,.05,a),u.rotation.y=o+c*(Math.PI*2/l)+(Math.random()-.5)*.4,t(u,.6,d=>{u.scale.set(1-d*.5,1,h*Math.min(1,d*6)),u.material.opacity=.9*(1-d*d)})}this.flash(r,.5,a,"#ff9a4a",2.2,.2)},bind(r,a,o,l){for(let[c,u]of[[0,a],[.08,a+.45]]){let h=new Pe(Ht.bindRing,n("#13a9d6",0,!1));h.rotation.x=Math.PI/2,h.position.set(r,u,o),t(h,.45+c,(d,g,m)=>{let x=Math.max(0,(m-c)/.45);h.scale.setScalar(l*(1.9-.9*Math.min(1,x*2.5))),h.material.opacity=x<=0?0:.95*(1-Math.max(0,x-.5)*2)})}},sparks(r,a,o,l,c=10,u="#ffd9a0"){for(let h=0;h<c;h++){let d=new Pe(Ht.spark,n(u,1));d.position.set(r,a,o);let g=l+(Math.random()-.5)*2.2,m=Math.random()*4+1,x=Math.random()*6+3,p=new L(Math.sin(g)*x,m,Math.cos(g)*x);d.lookAt(d.position.clone().add(p)),t(d,.28+Math.random()*.15,(f,y)=>{p.y-=14*y,d.position.addScaledVector(p,y),d.material.opacity=1-f})}},shatter(r,a,o,l,c=14,u="#ff8a3c",h=2.2){for(let d=0;d<c;d++){let g=new Pe(Ht.spark,n(u,1,!1));g.scale.setScalar(h*(.7+Math.random()*.6));let m=Math.random()*Math.PI*2,x=Math.random()*5+2,p=Math.random()*5+4;g.position.set(r+Math.sin(m)*l,a+(Math.random()-.3)*l,o+Math.cos(m)*l);let f=new L(Math.sin(m)*p,x,Math.cos(m)*p),y=new L(Math.random()*12,Math.random()*12,0);t(g,.55+Math.random()*.25,(b,M)=>{f.y-=16*M,g.position.addScaledVector(f,M),g.rotation.x+=y.x*M,g.rotation.y+=y.y*M,g.material.opacity=b<.6?1:(1-b)/.4})}},shock(r,a,o,l="#ffe7b0",c=.45){let u=new Pe(Ht.ring,n(l,.8));u.rotation.x=-Math.PI/2,u.position.set(r,.06,a),t(u,c,h=>{u.scale.setScalar(o*(.25+.75*Math.sqrt(h))),u.material.opacity=.8*(1-h)})},dust(r,a,o=10,l=2,c="#d8c4a0"){for(let u=0;u<o;u++){let h=s(c,1.2,.5);h.material.blending=Pn;let d=Math.random()*Math.PI*2,g=Math.random()*l;h.position.set(r+Math.sin(d)*g,.4,a+Math.cos(d)*g);let m=new L(Math.sin(d)*1.6,.8+Math.random(),Math.cos(d)*1.6);t(h,.9+Math.random()*.5,(x,p)=>{h.position.addScaledVector(m,p),h.scale.setScalar(1.2+x*2.2),h.material.opacity=.5*(1-x)})}},beam(r,a,o="#7fe3ff"){let l=Math.hypot(a.x-r.x,a.z-r.z),c=Math.atan2(a.x-r.x,a.z-r.z);for(let[u,h,d,g]of[[Ht.beamCore,"#13a9d6",.85,!1],[Ht.beam,"#ffffff",1,!0]]){let m=new Pe(u,n(h,d,g));m.position.set(r.x,1.15,r.z),m.rotation.y=c,m.scale.set(1,1,.01),t(m,.36,x=>{m.scale.set(1+x*.6,1+x*.6,l*Math.min(1,x*5)),m.material.opacity=d*(1-x*x)})}},dash(r,a,o,l,c="#6fd0ff"){let u=Math.hypot(o-r,l-a),h=Math.atan2(o-r,l-a);if(u>.3)for(let[d,g,m,x,p]of[[Ht.beamCore,c,.8,!1,2.2],[Ht.beam,"#ffffff",.9,!0,1.5]]){let f=new Pe(d,n(g,m,x));f.position.set(r,.45,a),f.rotation.y=h,f.scale.set(p,p,u),t(f,.3,y=>{f.scale.set(p*(1-y),p*(1-y),u),f.material.opacity=m*(1-y)})}},flash(r,a,o,l,c=2.5,u=.18){let h=s(l,c,1);h.position.set(r,a,o),t(h,u,d=>{h.material.opacity=1-d,h.scale.setScalar(c*(1+d))})},motes(r,a,o=24,l="#ffe8a8"){for(let c=0;c<o;c++){let u=s(l,.35,.9),h=Math.random()*Math.PI*2,d=Math.random()*2;u.position.set(r+Math.sin(h)*d,.3+Math.random(),a+Math.cos(h)*d);let g=.8+Math.random()*1.4,m=Math.random()*6;t(u,2.5+Math.random()*1.5,(x,p,f)=>{u.position.y+=g*p,u.position.x+=Math.sin(f*2+m)*p*.3,u.material.opacity=.9*Math.sin(Math.PI*Math.min(1,x*1.2))})}},update(r){for(let a=e.length-1;a>=0;a--){let o=e[a];o.t+=r;let l=Math.min(1,o.t/o.life);o.step(l,r,o.t),l>=1&&(o.obj.removeFromParent(),o.obj.material.dispose(),e.splice(a,1))}}}}var nm={light:["KeyJ","Mouse0"],sunder:["KeyK","Digit1"],tether:["KeyL","Digit2"],breaker:["Semicolon","Digit3","KeyI"],dodge:["Space","ShiftLeft","ShiftRight"]},Un={light:"J",sunder:"K",tether:"L",breaker:";",dodge:"SPACE"},ma={up:["KeyW","ArrowUp"],down:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"]},Eh={};for(let[i,e]of Object.entries(nm))for(let t of e)Eh[t]=i;var Mb=new Set([...Object.values(nm).flat(),...Object.values(ma).flat()]),gs=new Set,mi={x:0,y:0},Ar=[],Ah=null,ga=!0,Rh={presses:0},bb=i=>{let e=i.target;return!!e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)};window.addEventListener("keydown",i=>{if(bb(i))return;Mb.has(i.code)&&i.preventDefault();let e=!gs.has(i.code);if(gs.add(i.code),Ah){Ah(i.code,i);return}e&&ga&&Eh[i.code]&&(Ar.push(Eh[i.code]),Rh.presses++)});window.addEventListener("keyup",i=>gs.delete(i.code));window.addEventListener("blur",()=>{gs.clear(),Ar=[],mi.x=mi.y=0});window.addEventListener("contextmenu",i=>i.preventDefault());var Vt={stats:Rh,touch:mi,onKey(i){Ah=i},setEnabled(i){ga=i,i||(Ar=[])},press(i){ga&&(Ar.push(i),Rh.presses++)},hold(i,e){e?gs.add(i):gs.delete(i)},frame(){let i=r=>r.some(a=>gs.has(a)),e=(i(ma.right)?1:0)-(i(ma.left)?1:0)+mi.x,t=(i(ma.down)?1:0)-(i(ma.up)?1:0)+mi.y,n=Math.hypot(e,t);n>1&&(e/=n,t/=n);let s=Ar;return Ar=[],{mx:ga?e:0,mz:ga?t:0,press:s}}};function im(i){i.addEventListener("pointerdown",e=>{e.pointerType==="mouse"&&e.button===0&&Vt.press("light")})}function sm(i){let e=document.createElement("div");e.className="tpad",e.innerHTML='<div class="tbase"><div class="tknob"></div></div>';let t=document.createElement("div");t.className="tbtns",t.innerHTML=[["light","Strike"],["sunder","Sunder"],["tether","Tether"],["breaker","Break"],["dodge","Roll"]].map(([m,x])=>`<button class="tb tb-${m}" data-a="${m}" aria-label="${j(x)}">${Hi[m]}<b>${j(x)}</b><em></em></button>`).join(""),i.append(e,t);let n=e.querySelector(".tbase"),s=e.querySelector(".tknob"),r=null,a=0,o=0,l=0,c=0,u=54,h=.12,d=()=>{n.style.left=`${a-l}px`,n.style.top=`${o-c}px`};e.addEventListener("pointerdown",m=>{if(r!==null)return;let x=e.getBoundingClientRect();l=x.left,c=x.top,r=m.pointerId,a=m.clientX,o=m.clientY,e.setPointerCapture(r),d(),n.classList.add("on")}),e.addEventListener("pointermove",m=>{if(m.pointerId!==r)return;let x=m.clientX-a,p=m.clientY-o,f=Math.hypot(x,p);f>u&&(a+=x*(1-u/f),o+=p*(1-u/f),x*=u/f,p*=u/f,d()),s.style.transform=`translate(${x}px, ${p}px)`;let y=Math.min(1,f/u);mi.x=y<h?0:x/u,mi.y=y<h?0:p/u});let g=m=>{m.pointerId===r&&(r=null,mi.x=mi.y=0,s.style.transform="",n.classList.remove("on"),n.style.left=n.style.top="")};e.addEventListener("pointerup",g),e.addEventListener("pointercancel",g);for(let m of t.querySelectorAll("button")){m.addEventListener("pointerdown",p=>{p.preventDefault(),m.classList.add("down"),Vt.press(m.dataset.a)});let x=()=>m.classList.remove("down");m.addEventListener("pointerup",x),m.addEventListener("pointercancel",x),m.addEventListener("pointerleave",x)}return t}var Be=null,Xi=null,tl=null,Gt=null,Ih=0,qi=i=>440*2**((i-69)/12);function hm(i,e){if(Be)return;Be=i,Xi=Be.createGain(),Xi.gain.value=.62,Xi.connect(e);let t=Math.floor(Be.sampleRate*2.2),n=Be.createBuffer(2,t,Be.sampleRate);for(let r=0;r<2;r++){let a=n.getChannelData(r);for(let o=0;o<t;o++)a[o]=(Math.random()*2-1)*(1-o/t)**2.6}let s=Be.createConvolver();s.buffer=n,tl=Be.createGain(),tl.gain.value=.32,tl.connect(s),s.connect(Xi),Sb()}function Sb(){let i=new Set;for(let[n,s]of[[pm,"town"],[Rr,"climb"],[mm,"boss"]])for(let r=0;r<8;r++){let a=n.chords[r],o=n.bass[r];if(s==="town"){i.add(`${o}:0.3`),i.add(`${o+7}:0.3`);for(let l of[a[0],a[1],a[2],a[0]+12,a[1]+12])i.add(`${l+12}:0.55`)}else{for(let l of[a[0],a[2],a[0]+12])i.add(`${l+(s==="boss"?0:12)}:0.65`);i.add(`${o}:0.25`),i.add(`${o+12}:0.25`)}}for(let n of[65,69,72,77,81,60,64,67,72,76,79,84])i.add(`${n}:0.7`);for(let n of[69,65,62,57])i.add(`${n}:0.35`);let e=[...i].map(n=>n.split(":").map(Number)),t=()=>{for(let n=0;n<3&&e.length;n++){let[s,r]=e.shift();dm(s,r)}e.length&&setTimeout(t,30)};setTimeout(t,30)}var Ch=new Map;function dm(i,e=.5,t=1.6){let n=`${i}:${e}`;if(Ch.has(n))return Ch.get(n);let s=Be.sampleRate,r=Math.floor(s*t),a=Math.max(2,Math.round(s/qi(i))),o=Be.createBuffer(1,r,s),l=o.getChannelData(0),c=0;for(let h=0;h<a;h++){let d=Math.random()*2-1;c=c+(d-c)*(.35+e*.6),l[h]=c}let u=.996-(i>76?.004:0);for(let h=a;h<r;h++)l[h]=u*.5*(l[h-a]+l[h-a-1<0?0:h-a-1]);return Ch.set(n,o),o}function xs(i,e,t=1){let n=Be.createGain();if(n.gain.value=e,i.connect(n),n.connect(Gt?Gt.gain:Xi),t){let s=Be.createGain();s.gain.value=t,n.connect(s),s.connect(tl)}return n}function xa(i,e,t=.3,n=.5){let s=Be.createBufferSource();s.buffer=dm(i,n),xs(s,t),s.start(e)}function rm(i,e,t,n=.12){let s=Be.createOscillator(),r=Be.createOscillator(),a=Be.createGain(),o=Be.createOscillator(),l=Be.createGain();s.type="sine",s.frequency.value=qi(i),r.type="triangle",r.frequency.value=qi(i)*2,o.frequency.value=5.2,l.gain.value=qi(i)*.006,o.connect(l),l.connect(s.frequency),l.connect(r.frequency);let c=Be.createGain();c.gain.value=.12,r.connect(c),c.connect(a),s.connect(a),a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(1,e+.07),a.gain.setValueAtTime(1,e+Math.max(.08,t-.12)),a.gain.exponentialRampToValueAtTime(1e-4,e+t+.18),xs(a,n,1.4);for(let u of[s,r,o])u.start(e),u.stop(e+t+.25)}function am(i,e,t,n=.035){let s=Be.createBiquadFilter();s.type="lowpass",s.frequency.value=900;let r=Be.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(1,e+Math.min(1.2,t*.4)),r.gain.setValueAtTime(1,e+t*.75),r.gain.exponentialRampToValueAtTime(1e-4,e+t+.8),s.connect(r),xs(r,n,1.2);for(let a of i)for(let o of[-6,6]){let l=Be.createOscillator();l.type="sawtooth",l.frequency.value=qi(a),l.detune.value=o,l.connect(s),l.start(e),l.stop(e+t+1)}}function nl(){if(nl.b)return nl.b;let i=Be.sampleRate*.5,e=Be.createBuffer(1,i,Be.sampleRate),t=e.getChannelData(0);for(let n=0;n<i;n++)t[n]=Math.random()*2-1;return nl.b=e}function om(i,e=.5){let t=Be.createOscillator(),n=Be.createGain();t.frequency.setValueAtTime(130,i),t.frequency.exponentialRampToValueAtTime(42,i+.22),n.gain.setValueAtTime(1,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.32),t.connect(n),xs(n,e,.1),t.start(i),t.stop(i+.35)}function fm(i,e,t,n){let s=Be.createBufferSource(),r=Be.createBiquadFilter(),a=Be.createGain();s.buffer=nl(),r.type="highpass",r.frequency.value=t,a.gain.setValueAtTime(1,i),a.gain.exponentialRampToValueAtTime(1e-4,i+n),s.connect(r),r.connect(a),xs(a,e,.4),s.start(i),s.stop(i+n+.02)}var wb=(i,e=.16)=>{fm(i,e,1400,.16);let t=Be.createOscillator(),n=Be.createGain();t.frequency.value=190,n.gain.setValueAtTime(.6,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.1),t.connect(n),xs(n,e*.6,.3),t.start(i),t.stop(i+.12)},Tb=(i,e=.05)=>fm(i,e,6500,.05);function Eb(i,e,t=.1){let n=Be.createOscillator(),s=Be.createOscillator(),r=Be.createGain(),a=Be.createGain();n.frequency.value=qi(i),s.frequency.value=qi(i)*3.5,r.gain.value=qi(i)*1.2,s.connect(r),r.connect(n.frequency),a.gain.setValueAtTime(1,e),a.gain.exponentialRampToValueAtTime(1e-4,e+1.6),n.connect(a),xs(a,t,1.5);for(let o of[n,s])o.start(e),o.stop(e+1.7)}var pm={bpm:88,chords:[[53,57,60],[57,60,64],[58,62,65],[60,64,67],[53,57,60],[50,53,57],[58,62,65],[60,64,67]],bass:[41,45,46,48,41,50,46,48],melody:[[[0,72,1],[1,69,1],[2,67,.5],[2.5,69,1.5]],[[0,64,2],[2,67,1],[3,69,1]],[[0,65,1],[1,67,1],[2,69,2]],[[0,67,3],[3,64,1]],[[0,72,1],[1,74,1],[2,72,.5],[2.5,69,1.5]],[[0,69,2],[2,65,1],[3,67,1]],[[0,65,1.5],[1.5,62,.5],[2,65,1],[3,67,1]],[[0,64,2],[2,60,2]]]},Rr={bpm:124,chords:[[62,65,69],[58,62,65],[60,64,67],[57,61,64],[62,65,69],[58,62,65],[60,64,67],[57,61,64]],bass:[38,34,36,33,38,34,36,33],melody:[[[0,74,1],[1,77,1],[2,76,.5],[2.5,74,1.5]],[[0,70,1],[1,74,1],[2,77,2]],[[0,76,1.5],[1.5,74,.5],[2,72,2]],[[0,73,2],[2,76,1],[3,69,1]],[[0,74,.5],[.5,77,.5],[1,81,1],[2,79,1],[3,77,1]],[[0,74,2],[2,77,2]],[[0,79,1],[1,76,1],[2,72,1],[3,76,1]],[[0,73,3],[3,76,1]]]},mm={...Rr,bpm:138,chords:Rr.chords.map(i=>i.map(e=>e+2)),bass:Rr.bass.map(i=>i+2),melody:Rr.melody.map(i=>i.map(([e,t,n])=>[e,t-10,n]))};function Ab(i,e,t,n,s){let r=60/i.bpm,a=i.chords[t%8],o=i.bass[t%8];if(e==="town"){if(am(a,n,r*4),xa(o,n,.34,.3),xa(o+7,n+r*2,.22,.3),[a[0],a[1],a[2],a[0]+12,a[1]+12,a[2],a[1],a[0]].forEach((c,u)=>xa(c+12,n+u*r/2,.16+(u===0?.05:0),.55)),s%2===0)for(let[c,u,h]of i.melody[t%8])rm(u,n+c*r,h*r*.95,.11);t%8===7&&Eb(84,n+r*3.5,.05)}else{let l=e==="boss";am(a.map(c=>c-12),n,r*4,.03);for(let c=0;c<16;c++){let u=[a[0],a[2],a[0]+12,a[2]][c%4]+(l?0:12);xa(u,n+c*r/4,c%4===0?.15:.09,.65)}for(let c=0;c<8;c++)xa(o+(c%2?12:0),n+c*r/2,.3,.25);for(let c=0;c<4;c++)(c%2===0||l)&&om(n+c*r,l?.55:.45),c%2&&wb(n+c*r);if(l)for(let c=0;c<4;c++)om(n+(c+.5)*r,.25);for(let c=0;c<8;c++)Tb(n+c*r/2,c%2?.04:.025);if(s%2===1||l)for(let[c,u,h]of i.melody[t%8])rm(u,n+c*r,h*r*.9,l?.1:.09)}}var il={},lm={},cm=1.1;function um(i){il[i]||lm[i]||(lm[i]=!0,fetch(`music-${i}.mp3`).then(e=>e.ok?e.arrayBuffer():Promise.reject(e.status)).then(e=>new Promise((t,n)=>Be.decodeAudioData(e,t,n))).then(e=>{let t=e.getChannelData(0),n=0,s=t.length-1;for(;n<8192&&Math.abs(t[n])<1e-4;)n++;for(;s>t.length-8192&&Math.abs(t[s])<1e-4;)s--;il[i]={b:e,t0:n/e.sampleRate,len:(s-n)/e.sampleRate},Gt&&Gt.kind===i&&Gt.synth&&Ph(i,!0)}).catch(()=>{}))}function Rb(i,e){let t=il[i],n=.04,s=a=>{let o=Be.createBufferSource(),l=Be.createGain();return o.buffer=t.b,o.connect(l),l.connect(e.gain),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(cm,a+n),l.gain.setValueAtTime(cm,a+t.len-n),l.gain.exponentialRampToValueAtTime(1e-4,a+t.len),o.start(a,t.t0,t.len+.01),e.srcs.push(o),e.srcs.length>3&&e.srcs.shift(),a+t.len-n};e.next=s(Be.currentTime+.05),Ih=setInterval(()=>{if(Gt===e)for(;e.next<Be.currentTime+1.5;)e.next=s(e.next)},400)}function Ph(i,e=!1){if(!Be||Gt&&Gt.kind===i&&!e)return;if(Gt){let a=Gt;a.gain.gain.cancelScheduledValues(Be.currentTime),a.gain.gain.setTargetAtTime(0,Be.currentTime,.4),setTimeout(()=>{a.gain.disconnect();for(let o of a.srcs||[])try{o.stop()}catch{}},3e3)}if(Gt=null,clearInterval(Ih),!i)return;let t=Be.createGain();t.gain.value=0,t.connect(Xi),t.gain.setTargetAtTime(1,Be.currentTime,.6),um(i);for(let a of["climb","boss"])a!==i&&setTimeout(()=>um(a),4e3);if(il[i]){let a=Gt={kind:i,gain:t,srcs:[],synth:!1};Rb(i,a);return}let n={town:pm,climb:Rr,boss:mm}[i],s=Gt={kind:i,gain:t,next:Be.currentTime+.15,i:0,synth:!0},r=()=>{if(Gt!==s)return;let a=240/n.bpm;for(;s.next<Be.currentTime+.6;)Ab(n,i,s.i,s.next,Math.floor(s.i/8)),s.next+=a,s.i++};r(),Ih=setInterval(r,200)}function gm(i){Xi&&Be&&Xi.gain.setTargetAtTime(i?.22:.62,Be.currentTime,.25)}var xm=()=>Gt?Gt.kind+(Gt.synth?":code":":file"):"";var Le=null,kn=null,ol=!0,Nh=!1,Em="";function Am(i){try{let e=navigator.audioSession;e&&e.type!==(i?"playback":"ambient")&&(e.type=i?"playback":"ambient")}catch{}}function Cr(){if(!Le){Am(ol);let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;Le=new i,kn=Le.createGain(),kn.gain.value=.5,kn.connect(Le.destination)}return Le}var _m=()=>{kn&&kn.gain.setTargetAtTime(ol&&!Nh?.5:0,Le.currentTime,.05)},_s=()=>ol&&!Nh&&Cr()&&Le.state==="running";function tt(i,e,t,n="square",s=.2,r=0){if(!_s())return;let a=Le.currentTime+r,o=Le.createOscillator(),l=Le.createGain();o.type=n,o.frequency.setValueAtTime(i,a),o.frequency.exponentialRampToValueAtTime(Math.max(20,e),a+t),l.gain.setValueAtTime(s,a),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l),l.connect(kn),o.start(a),o.stop(a+t+.02)}function mn(i,e=.25,t=900){if(!_s())return;let n=Le.currentTime,s=Math.floor(Le.sampleRate*i),r=Le.createBuffer(1,s,Le.sampleRate),a=r.getChannelData(0);for(let u=0;u<s;u++)a[u]=(Math.random()*2-1)*(1-u/s);let o=Le.createBufferSource(),l=Le.createBiquadFilter(),c=Le.createGain();o.buffer=r,l.type="lowpass",l.frequency.value=t,c.gain.value=e,o.connect(l),l.connect(c),c.connect(kn),o.start(n)}var Uh={slash:["knifeSlice","knifeSlice2"],draw:["drawKnife1","drawKnife2","drawKnife3"],chop:["chop"],clang:["metalPot1","metalPot2","metalPot3"],click:["metalClick"],latch:["metalLatch"],cloth:["cloth1","cloth2","cloth3","cloth4"],step:["footstep00","footstep01","footstep02","footstep03","footstep04","footstep05"],coins:["handleCoins","handleCoins2"],soft:["impactSoft_medium_000","impactSoft_medium_001","impactSoft_medium_002","impactSoft_medium_003","impactSoft_medium_004"],wood:["impactWood_light_000","impactWood_light_001","impactWood_light_002","impactWood_light_003","impactWood_light_004"],metal:["impactMetal_medium_000","impactMetal_medium_001","impactMetal_medium_002","impactMetal_medium_003","impactMetal_medium_004"],punch:["impactPunch_medium_000","impactPunch_medium_001","impactPunch_medium_002","impactPunch_medium_003","impactPunch_medium_004"],punchHeavy:["impactPunch_heavy_000","impactPunch_heavy_001","impactPunch_heavy_002","impactPunch_heavy_003","impactPunch_heavy_004"],stone:["impactMining_000","impactMining_001","impactMining_002","impactMining_003","impactMining_004"],bell:["impactBell_heavy_000","impactBell_heavy_001","impactBell_heavy_002","impactBell_heavy_003","impactBell_heavy_004"],thud:["impactPlate_heavy_000","impactPlate_heavy_001","impactPlate_heavy_002","impactPlate_heavy_003","impactPlate_heavy_004"],stepStone:["footstep_concrete_000","footstep_concrete_001","footstep_concrete_002","footstep_concrete_003","footstep_concrete_004"],glass:["impactGlass_light_000","impactGlass_light_001","impactGlass_light_002","impactGlass_light_003","impactGlass_light_004"],open:["bookOpen"],close:["bookClose"],flip:["bookFlip1"],belt:["beltHandle1","clothBelt"],creak:["creak1"],door:["doorOpen_1"],uiClick:["click_002"],jLevel:["jingles_PIZZI04"],jWin:["jingles_PIZZI02"],jDown:["jingles_PIZZI01"],jTing:["jingles_PIZZI16"],chest_common:["jingles_PIZZI08"],chest_rare:["jingles_PIZZI10"],chest_epic:["jingles_PIZZI13"],chest_legend:["jingles_PIZZI15"]},rl={},Lh={},ym=!1,Rm=0,sl="";function Cb(){if(ym||!Cr())return;ym=!0;let i=[...new Set(Object.values(Uh).flat())],e=()=>{let t=i.shift();t&&fetch(`sfx-${t}.mp3`).then(n=>n.ok?n.arrayBuffer():Promise.reject(n.status)).then(n=>new Promise((s,r)=>Le.decodeAudioData(n,s,r))).then(n=>{rl[t]=n}).catch(()=>{Rm++}).finally(()=>setTimeout(e,15))};for(let t=0;t<4;t++)e()}function Xe(i,e=.5,t=.06){if(!_s())return!1;let n=Uh[i].filter(a=>rl[a]);if(!n.length)return!1;let s=Le.createBufferSource(),r=Le.createGain();return s.buffer=rl[n[Math.floor(Math.random()*n.length)]],s.playbackRate.value=1+(Math.random()*2-1)*t,r.gain.value=e,s.connect(r),r.connect(kn),s.start(),Lh[i]=(Lh[i]||0)+1,!0}var gi=null,al="",Dh=0;function Ib(i=2){let e=Le.sampleRate*i,t=Le.createBuffer(1,e,Le.sampleRate),n=t.getChannelData(0),s=0;for(let r=0;r<e;r++){let a=Math.random()*2-1;s=(s+.02*a)/1.02,n[r]=s*3.5}return t}function Pb(i,e,t){let n=Le.createOscillator(),s=Le.createGain();n.type="sine",n.frequency.setValueAtTime(e,i),n.frequency.exponentialRampToValueAtTime(e*1.5,i+.05),n.frequency.exponentialRampToValueAtTime(e*1.1,i+.09),s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(t,i+.012),s.gain.exponentialRampToValueAtTime(1e-4,i+.1),n.connect(s),s.connect(gi.out),n.start(i),n.stop(i+.12)}var vm=[[69,.5],[65,.45],[67,.7],[64,.6],[65,.45],[62,1.5]];function Mm(i,e,t,n=.16){let s=vm.reduce((m,x)=>m+x[1],0),r=m=>440*2**((m-69)/12),a=i.createOscillator(),o=i.createOscillator(),l=i.createGain(),c=i.createBiquadFilter(),u=i.createGain(),h=i.createOscillator(),d=i.createGain();a.type="sine",o.type="triangle",l.gain.value=.35,c.type="lowpass",c.frequency.value=900,c.Q.value=.7,h.frequency.value=5.2,d.gain.value=4,h.connect(d),d.connect(a.frequency),d.connect(o.frequency),a.connect(c),o.connect(l),l.connect(c),c.connect(u),u.connect(e),u.gain.setValueAtTime(1e-4,t);let g=t;for(let[m,x]of vm)a.frequency.setTargetAtTime(r(m),g,.04),o.frequency.setTargetAtTime(r(m),g,.04),u.gain.setTargetAtTime(n,g,.06),u.gain.setTargetAtTime(n*.55,g+x-.08,.04),g+=x;u.gain.setTargetAtTime(1e-4,g-.6,.25);for(let m of[a,o,h])m.start(t),m.stop(t+s+.5);return s}function Lb(i,e){for(let[t,n]of[[0,330],[.28,300],[.5,280]]){let s=Le.createOscillator(),r=Le.createGain(),a=Le.createOscillator(),o=Le.createGain();s.type="sine",s.frequency.value=n,a.frequency.value=26,o.gain.value=18,a.connect(o),o.connect(s.frequency),r.gain.setValueAtTime(1e-4,i+t),r.gain.exponentialRampToValueAtTime(e,i+t+.05),r.gain.exponentialRampToValueAtTime(1e-4,i+t+.22),s.connect(r),r.connect(gi.out),s.start(i+t),a.start(i+t),s.stop(i+t+.25),a.stop(i+t+.25)}}function Db(i,e){let t=Math.floor(Le.sampleRate*.03),n=Le.createBuffer(1,t,Le.sampleRate),s=n.getChannelData(0);for(let l=0;l<t;l++)s[l]=(Math.random()*2-1)*Math.exp(-l/(t*.15));let r=Le.createBufferSource(),a=Le.createBiquadFilter(),o=Le.createGain();r.buffer=n,a.type="highpass",a.frequency.value=1200,o.gain.value=e,r.connect(a),a.connect(o),o.connect(gi.out),r.start(i)}function bm(i){if(Cm(),!Cr())return;let e=Le.createGain();e.gain.value=0,e.connect(kn);let t=Le.createBufferSource();t.buffer=Ib(),t.loop=!0;let n=Le.createBiquadFilter(),s=Le.createOscillator(),r=Le.createGain();i==="town"?(n.type="bandpass",n.frequency.value=900,n.Q.value=.7,s.frequency.value=.35,r.gain.value=260):(n.type="lowpass",n.frequency.value=420,n.Q.value=.4,s.frequency.value=.08,r.gain.value=240),s.connect(r),r.connect(n.frequency),t.connect(n),n.connect(e),t.start(),s.start(),gi={out:e,nodes:[t,s],kind:i},al=i,e.gain.linearRampToValueAtTime(i==="town"?.16:.13,Le.currentTime+1.5),clearInterval(Dh),Dh=setInterval(()=>{if(!gi||!_s())return;let a=Le.currentTime+Math.random()*.4;if(gi.kind==="town"){if(Math.random()<.35){let o=2600+Math.random()*1400;for(let l=0;l<2+Math.floor(Math.random()*3);l++)Pb(a+l*.13,o*(1+(Math.random()-.5)*.1),.05)}Math.random()<.08&&Lb(a,.07)}else for(let o=0;o<3+Math.floor(Math.random()*5);o++)Db(a+Math.random()*.9,.05+Math.random()*.06)},1e3)}var Sm=!1;function wm(){!Cr()||Le.state!=="running"||(Sm||(hm(Le,kn),Sm=!0),Ph(Em))}function Cm(){if(clearInterval(Dh),!gi)return;let i=gi;gi=null,al="";try{i.out.gain.cancelScheduledValues(Le.currentTime),i.out.gain.setValueAtTime(i.out.gain.value,Le.currentTime),i.out.gain.linearRampToValueAtTime(0,Le.currentTime+.6)}catch{}setTimeout(()=>{for(let e of i.nodes)try{e.stop()}catch{}i.out.disconnect()},700)}var Tm=0,Ue={ambience(i){if(i!==al){if(!i){Cm();return}Cr()&&Le.state==="running"?bm(i):sl=i}},unlock(){let i=()=>{sl&&(bm(sl),sl=""),wm()};Cr()&&Le.state!=="running"?Le.resume().then(i).catch(()=>{}):i(),Cb()},music(i){Em=i,wm()},duck(i){gm(i)},debug(){return{music:xm(),ambience:al,state:Le?Le.state:"none",files:new Set(Object.values(Uh).flat()).size,loaded:Object.keys(rl).length,failed:Rm,played:{...Lh}}},setEnabled(i){ol=i,Am(i),_m()},setForcedMute(i){Nh=i,_m()},click(){Xe("uiClick",.3,.05)},swing(i){if(i==="tether"){Xe("click",.35,.1),tt(330,990,.18,"triangle",.06);return}if(i==="breaker"||i==="giantfall"){Xe("draw",.55,.05),mn(.22,.14,900);return}if(i==="counter"){Xe("draw",.5,.05),tt(600,1800,.14,"triangle",.07);return}Xe("slash",i==="light3"||i==="sunder"?.55:.4,.12)||mn(.09,.12,2400)},hit(i,e){let t=Le?Le.currentTime:0;t-Tm<.03||(Tm=t,tt(150,60,.09,"sine",.16),Xe("stone",.55,.1),Xe("chop",.3,.12),i==="sunder"&&(Xe("glass",.32,.08),tt(1500,700,.12,"square",.03)),i==="tether"&&(Xe("latch",.4,.05),tt(440,660,.25,"sine",.05)),i==="breaker"&&(Xe("punchHeavy",.6,.04),Xe("thud",.5,.04),e&&(Xe("bell",.35,.03),tt(220,880,.3,"triangle",.08))),i==="counter"&&(Xe("punchHeavy",.7,.04),Xe("thud",.7,.03),Xe("bell",.45,.02),Xe("glass",.3,.05),tt(110,45,.5,"sine",.3),tt(900,2200,.3,"triangle",.08,.05)),i==="giantfall"&&(tt(70,30,.9,"sine",.42),mn(.6,.22,320),Xe("thud",.9,.02),Xe("bell",.5,.01)))},whiff(){mn(.05,.04,3e3)},status(i){i==="cracked"?(Xe("glass",.25,.1),tt(900,1800,.12,"sine",.05)):(Xe("click",.3,.05),tt(520,780,.2,"triangle",.05))},wind(i){_s()&&(i==="slam"?(tt(60,150,.7,"sawtooth",.06),Xe("clang",.12,.2)):i==="sweep"?(tt(90,210,.6,"sawtooth",.05),mn(.5,.06,700)):(tt(50,120,.8,"square",.04),mn(.7,.08,300)))},strike(i){i==="slam"?(tt(90,35,.45,"sine",.35),mn(.35,.3,380),Xe("thud",.8,.05),Xe("stone",.5,.1)):i==="sweep"?(mn(.3,.22,1200),Xe("stone",.4,.15)):(mn(.5,.25,260),Xe("stepStone",.6,.1))},wallHit(){tt(70,35,.5,"sine",.3),Xe("stone",.7,.05),Xe("thud",.6,.05)},topple(){_s()&&(tt(55,28,1.6,"sine",.45),mn(1.2,.22,240),Xe("thud",1,0),setTimeout(()=>Xe("bell",.55,0),180),setTimeout(()=>Xe("stone",.6,.05),380))},getup(){tt(60,110,.7,"sawtooth",.05),Xe("stone",.35,.1)},roar(){Xe("bell",.5,0),tt(110,330,.8,"sawtooth",.08),tt(70,40,1,"sine",.3),mn(.8,.12,500)},counterReady(){tt(880,1760,.16,"triangle",.12,.08),tt(1320,2640,.16,"sine",.07,.12)},perfect(){Xe("glass",.4,.05),tt(660,1320,.25,"triangle",.16),tt(990,1980,.25,"triangle",.09,.06)},land(){Xe("stone",.3,.1),tt(140,70,.12,"sine",.1)},dodge(){Xe("cloth",.6,.1)||mn(.12,.14,900)},hurt(){Xe("punchHeavy",.7,.06)?tt(220,90,.16,"triangle",.08):tt(300,80,.2,"sawtooth",.16)},step(i=.16){Xe("stepStone",i,.08)},giantStep(i=.35){Xe("thud",i,.1),tt(55,40,.18,"sine",i*.4)},power(){tt(1175,1760,.12,"sine",.07),tt(1568,2349,.14,"triangle",.04,.05)},foeWind(){tt(320,620,.18,"triangle",.035)},foeDown(){Xe("stone",.45,.15),mn(.18,.1,600)},combo(i){tt(660+i*20,990+i*30,.08,"triangle",.035)},hum(){_s()&&Mm(Le,kn,Le.currentTime+.05)},async renderHum(){let e=new OfflineAudioContext(1,12e4,24e3);return Mm(e,e.destination,.05),(await e.startRendering()).getChannelData(0)},win(){Xe("jWin",.55,0)||[523,659,784,1047,1319].forEach((i,e)=>tt(i,i,.22,"triangle",.17,e*.1))},down(){Xe("jDown",.5,0)||tt(400,60,.5,"triangle",.18)},ting(){Xe("jTing",.4,0)||tt(1568,1568,.12,"sine",.14)}};var Bt=null,On=!1,ll="none",kh=!1;function _a(i){if(On)try{i()}catch{}}var Fh=!1,Oh=-1e9,Bh=null;function Pm(){if(Bh=null,Fh===kh)return;let i=performance.now();if(i-Oh<1100){Bh=setTimeout(Pm,1100-(i-Oh));return}kh=Fh,Oh=i,_a(()=>kh?Bt.game.gameplayStart():Bt.game.gameplayStop())}function Im(i){Fh=i,Bh||Pm()}var gn={async init(){try{window.CrazyGames&&window.CrazyGames.SDK&&(Bt=window.CrazyGames.SDK,await Promise.race([Bt.init(),new Promise((i,e)=>setTimeout(()=>e(new Error("timeout")),5e3))]),ll=Bt.environment,On=ll==="local"||ll==="crazygames")}catch{On=!1}return On},get env(){return ll},storage(){try{return On&&Bt.data?Bt.data:null}catch{return null}},loadingStart(){_a(()=>Bt.game.loadingStart())},loadingStop(){_a(()=>Bt.game.loadingStop())},gameplayStart(){Im(!0)},gameplayStop(){Im(!1)},happytime(){_a(()=>Bt.game.happytime())},muted(){try{return!!(On&&Bt.game.settings&&Bt.game.settings.muteAudio)}catch{return!1}},onSettings(i){_a(()=>Bt.game.addSettingsChangeListener(i))},deviceType(){try{return On?Bt.user.systemInfo.device.type:null}catch{return null}},locale(){try{return On?Bt.user.systemInfo.locale:null}catch{return null}},async hasAdblock(){if(!On)return!1;try{return!!await Promise.race([Bt.ad.hasAdblock(),new Promise(i=>setTimeout(()=>i(!1),3e3))])}catch{return!1}},rewarded(i){return new Promise(e=>{if(!On){e({ok:!1,code:"noSdk"});return}let t=!1,n=s=>{t||(t=!0,e(s))};try{Bt.ad.requestAd("rewarded",{adStarted:()=>{i&&i()},adFinished:()=>n({ok:!0}),adError:s=>n({ok:!1,code:s&&s.code||"other"})})}catch{n({ok:!1,code:"other"})}})},midgame(i){return new Promise(e=>{if(!On){e(!1);return}let t=!1,n=!1,s=r=>{n||(n=!0,e(r))};setTimeout(()=>{t||s(!1)},8e3);try{Bt.ad.requestAd("midgame",{adStarted:()=>{t=!0,i&&i()},adFinished:()=>s(!0),adError:()=>s(!1)})}catch{s(!1)}})}};var xn=(i,e,t="")=>{let n=document.createElement(i);return e&&(n.className=e),n.innerHTML=t,n},Nb=[["light","Strike",""],["sunder","Sunder","crack"],["tether","Tether","hold"],["breaker","Break","spend"],["dodge","Roll",""]];function Lm(i,{touch:e,stages:t=null}){let n=xn("div","gbar",`<div class="gname"><b></b><span></span></div>
    <div class="bar hp"><i class="trail"></i><i class="fill"></i></div>
    <div class="bar bal"><i class="fill"></i><em>${j("BALANCE")}</em></div>
    <div class="chips"></div>`),s=xn("div","hbar",'<div class="lab">HP <b></b><span class="ascl"></span></div><div class="bar mine"><i class="trail"></i><i class="fill"></i></div><div class="powers"></div>'),r=xn("div","keys"+(e?" hide":""),Nb.map(([D,z,F])=>`<div class="key k-${D}" data-a="${D}"><kbd>${Un[D]}</kbd>${Hi[D]}<b>${j(z)}</b><small>${F?j(F):""}</small><i class="cd"></i></div>`).join("")),a=xn("div","combo",`<b>0</b><span>${j("HITS")}</span><em></em>`),o=xn("div","banner"),l=xn("div","coach",`<b>${j("Elara")}</b><span></span>`),c=xn("div","nums"),u=xn("div","flash"),h=xn("div","prog"+(t?"":" hide"),t?t.map((D,z)=>`<i class="s-${D.type}" data-i="${z}" title="${D.type==="giant"?D.giant:D.name||"power"}"></i>`).join(""):""),d=xn("button","pausebtn","II");d.setAttribute("aria-label","Pause");let g=xn("div","modal hide");i.append(u,c,n,s,r,a,o,l,h,d,g);let m=(D,z)=>D.querySelector(z),x=m(n,".hp .fill"),p=m(n,".hp .trail"),f=m(n,".bal .fill"),y=m(n,".chips"),b=m(n,".bal"),M=m(s,".fill"),C=m(s,".trail"),E=m(s,".lab b"),T=1,I=1,v=0,_=0,P=0,V="",R=[],N=[];return{setAsc(D){let z=m(s,".ascl");z.textContent=D?` \xB7 ${j("Level {n}",{n:D})}`:""},setGiant(D,z){m(n,".gname b").textContent=D,m(n,".gname span").textContent=z},onPause(D){d.onclick=D},showBars(D){for(let z of[n,s,r,a])z.classList.toggle("off",!D)},setPowers(D){let z=m(s,".powers");z.innerHTML=D.map(F=>`<i data-id="${F.id}" title="${F.text}">${F.name}</i>`).join("")},powerPulse(D){let z=m(s,`.powers [data-id="${D}"]`);z&&(z.classList.remove("fire"),z.offsetWidth,z.classList.add("fire"))},setStage(D){!t||!D.run||h.querySelectorAll("i").forEach((z,F)=>{z.classList.toggle("done",F<D.run.stage),z.classList.toggle("now",F===D.run.stage)})},banner(D,z="",F="",Y=1.6){o.className=`banner show ${F}`,o.innerHTML=`<b>${D}</b>${z?`<span>${z}</span>`:""}`,_=Y},say(D,z=2.8){m(l,"span").textContent=D,l.classList.add("show"),P=z},flash(D="#fff",z=.5){u.style.background=D,u.style.transition="none",u.style.opacity=z,requestAnimationFrame(()=>{u.style.transition="opacity .35s",u.style.opacity=0})},num(D,z,F=""){R.length>24&&R.shift().e.remove();let Y=xn("div",`num ${F}`,z);c.append(Y),R.push({e:Y,pos:{...D},t:0,life:F.includes("big")?1.1:.75})},sparks(D,z,F="gold"){for(let Y=0;Y<z&&N.length<80;Y++){let ee=xn("i",`spark ${F}`);ee.style.opacity=0,c.append(ee),N.push({e:ee,pos:{...D},from:null,t:-Y*.035,life:.45+Math.random()*.1,jx:(Math.random()-.5)*90,jy:-60-Math.random()*70})}},dropNums(D){for(let z=R.length-1;z>=0;z--)R[z].e.classList.contains(D)&&(R[z].e.remove(),R.splice(z,1))},comboPulse(D,z){let F=m(a,"em");F.textContent=D,F.className=z,F.style.animation="none",F.offsetWidth,F.style.animation=""},update(D,z,F){let Y=D.giant,ee=D.hero;if(n.classList.toggle("hide",!Y||Y.state==="fallen"),Y){let le=Y.hp/Y.max;T=Math.max(le,T-z*.35),x.style.width=`${le*100}%`,p.style.width=`${T*100}%`;let pe=Y.state==="toppled"?Y.t/D.data.rules.topple.time:Y.balance/Y.balMax;f.style.width=`${pe*100}%`,b.classList.toggle("down",Y.state==="toppled"),b.classList.toggle("near",Y.state!=="toppled"&&pe>.75),m(b,"em").textContent=j(Y.state==="toppled"?"TOPPLED":"BALANCE");let Ce=[];Y.status.cracked.n&&Ce.push(`<i class="c-cracked">${Hi.sunder}${j("CRACKED")}${Y.status.cracked.n>1?" \xD7"+Y.status.cracked.n:""}</i>`),Y.status.bound.n&&Ce.push(`<i class="c-bound">${Hi.tether}${j("BOUND")}</i>`);let Oe=Ce.join("");Oe!==V&&(y.innerHTML=Oe,V=Oe)}let ae=ee.hp/ee.max;I=Math.max(ae,I-z*.5),M.style.width=`${ae*100}%`,C.style.width=`${I*100}%`,E.textContent=ee.hp,s.classList.toggle("low",ae<=.3);let _e=D.data.moves;for(let le of["sunder","tether","breaker"]){let pe=ee.cd[le]/_e[le].cd;m(r,`.k-${le} .cd`).style.height=`${Math.max(0,pe)*100}%`}let ke=!!Y&&Y.status.cracked.n+Y.status.bound.n>0,H=!!Y&&Y.state==="toppled"&&!Y.finisherUsed&&!!Y.fallReady,Z=m(r,".k-breaker");Z.classList.toggle("glow",ke||H),m(Z,"b").textContent=j(H?"FALL!":"Break");let oe=ee.counterT>0,W=m(r,".k-light");if(W.classList.toggle("glow",oe),m(W,"b").textContent=j(oe?"Counter":"Strike"),e){let le=i.querySelector(".tb-light");le&&(le.classList.toggle("glow",oe),le.querySelector("b").textContent=j(oe?"Counter":"Strike"))}if(m(r,".k-dodge .cd").style.height=`${Math.max(0,ee.dodgeCd/_e.dodge.cd)*100}%`,e)for(let le of["sunder","tether","breaker","dodge"]){let pe=i.querySelector(`.tb-${le}`);if(!pe)continue;let Ce=le==="dodge"?ee.dodgeCd/_e.dodge.cd:ee.cd[le]/_e[le].cd;pe.querySelector("em").style.height=`${Math.max(0,Ce)*100}%`,le==="breaker"&&(pe.classList.toggle("glow",ke||H),pe.querySelector("b").textContent=j(H?"FALL!":"Break"))}let ye=D.combo;if(ye.hits>=2&&(v=1.2,m(a,"b").textContent=ye.hits),v-=z,a.classList.toggle("show",v>0),_-=z,_<=0&&o.classList.remove("show"),P-=z,P<=0&&l.classList.remove("show"),N.length){let le=b.getBoundingClientRect(),pe=f.getBoundingClientRect(),Ce=Math.max(le.left+6,pe.right),Oe=le.top+le.height/2,rt=!1;for(let U=N.length-1;U>=0;U--){let Ke=N[U];if(Ke.t+=z,Ke.t<0)continue;Ke.from||(Ke.from=F(Ke.pos.x,Ke.pos.y,Ke.pos.z));let Ve=Math.min(1,Ke.t/Ke.life),Fe=Ve*Ve*(3-2*Ve),be=Ke.from.x+Ke.jx,at=Math.min(Ke.from.y,Oe)+Ke.jy,De=(1-Fe)*(1-Fe)*Ke.from.x+2*(1-Fe)*Fe*be+Fe*Fe*Ce,A=(1-Fe)*(1-Fe)*Ke.from.y+2*(1-Fe)*Fe*at+Fe*Fe*Oe;Ke.e.style.opacity=1,Ke.e.style.transform=`translate(${De}px, ${A}px) translate(-50%, -50%) scale(${1-.4*Ve})`,Ve>=1&&(Ke.e.remove(),N.splice(U,1),rt=!0)}rt&&(b.classList.remove("gain"),b.offsetWidth,b.classList.add("gain"))}for(let le=R.length-1;le>=0;le--){let pe=R[le];pe.t+=z;let Ce=pe.t/pe.life;if(Ce>=1){pe.e.remove(),R.splice(le,1);continue}let Oe=F(pe.pos.x,pe.pos.y+Ce*.9,pe.pos.z);pe.e.style.transform=`translate(${Oe.x}px, ${Oe.y}px) translate(-50%, -50%) scale(${Ce<.12?.6+Ce*4:1})`,pe.e.style.opacity=Ce>.7?(1-Ce)/.3:1}},modal(D,z={}){return g.innerHTML=`<div class="card">${D}</div>`,g.classList.remove("hide"),document.body.classList.add("modal-on"),g},closeModal(){g.classList.add("hide"),g.innerHTML="",document.body.classList.remove("modal-on")},get modalOpen(){return!g.classList.contains("hide")}}}function Dm(i,e,t,n=()=>"all"){let s=new Set,r={},a=new Set,o={},l=0,c=0,u={seq:"",n:0},h=0,d=!1,g=f=>f.replace(/\{key:(\w+)\}/g,(y,b)=>b==="move"?t.move:`[${t[b]||b}]`);function m(f,y={}){var I;let b=i.events[f];if(!b)return!1;let M=n();if(M==="off"||M==="key"&&!b.urgent||c>0&&!b.urgent&&!y.force||!y.force&&l-((I=o[f])!=null?I:-1e9)<(i.repeatGap||0))return!1;o[f]=l;let C=b.lines.length,E=Math.floor(Math.random()*C);C>1&&E===r[f]&&(E=(E+1)%C),r[f]=E,c=i.gap;let T=g(b.lines[E]);return e.say(T,Math.max(i.show,i.charsPerSec?T.length/i.charsPerSec:T.split(/\s+/).length/(i.wordsPerSec||3.5))),!0}let x=(f,y)=>s.has(f)?!1:m(y)?(s.add(f),!0):!1,p=(f,y)=>{a.has(f)||m(y)&&a.add(f)};return{say:m,handle(f,y){switch(f.t){case"flow":if(f.to==="intro"&&(a.clear(),h=0,d=!1,u={seq:"",n:0}),f.to==="fight"&&f.from==="intro"&&(s.has("fought")?m(y.mode==="run"?"runAgain":"intro",{force:!0}):(s.add("fought"),m("firstFight",{force:!0}))),f.to==="won"&&(m(s.has("won")?"win":"winFirst",{force:!0}),s.add("won")),f.to==="pick"&&x("picked","pickFirst"),f.to==="down"){let b=y.giant;b&&b.hp/b.max<=.15?m("close",{force:!0}):m(y.downsInRow===1?"down1":y.downsInRow===2?"down2":"downMore",{force:!0})}break;case"wind":x("wind","firstWind");break;case"hurt":!x("hurt","firstHurt")&&f.hp>0&&f.hp<=30&&p("low","lowHp");break;case"perfect":x("perfect","firstPerfect");break;case"counterReady":s.has("counter")||(s.add("counter"),m("firstCounter",{force:!0}));break;case"status":f.on&&x(f.name,f.name==="cracked"?"firstCracked":"firstBound");break;case"hit":f.consumed&&Object.keys(f.consumed).length&&x("spend","firstSpend"),f.move==="giantfall"&&y.giant.toppleQ&&y.giant.toppleQ.hits>=12&&m("finisherBig");break;case"swing":["sunder","tether","breaker"].includes(f.move)&&h++;break;case"topple":x("topple","firstTopple");break;case"phase":m("phase2");break;case"stage":f.giant?(m(f.giant==="cairn"?s.has("cairn")?"cairnAgain":"cairnIntro":s.has("hollen")?"hollenAgain":"hollenIntro",{force:!0}),s.add(f.giant)):f.i>0&&m(f.mood===2?"swarm":"waveNext");break;case"foeWind":x("foeWind","firstFoeWind");break;case"foeDown":f.how==="crush"||f.how==="quake"?x("crush","firstCrush")||m("crush"):p("firstKill","firstKill");break;case"spawn":y.giant&&y.giant.state!=="fallen"&&m("adds");break;case"fallen":f.last||m(f.id==="cairn"?"cairnRest":"win");break;case"comboEnd":if(!f.seq)break;f.seq===u.seq?u.n++:u={seq:f.seq,n:1},u.n>=3&&p("repeat","repeat");break;default:break}},tick(f,y){if(c-=f,l+=f,y.flow.state!=="fight")return;y.time>14&&h===0&&y.giant&&p("noSkills","noSkills");let b=y.giant;b&&!d&&b.state!=="toppled"&&b.balance/b.balMax>.85&&(d=!0,x("teeter","teeter"))}}}var Zt=new URLSearchParams(location.search),xi=Zt.has("capture"),Ub=xi||Zt.has("test"),ba=Zt.get("bot"),$m=Zt.has("holdpick"),Fn=matchMedia("(pointer: coarse)").matches||Zt.has("touch"),Ym=matchMedia("(prefers-reduced-motion: reduce)").matches,Km={moves:oh,rules:lh,giants:Kt,foes:rp,powers:vr,run:Yo,ascension:ch},Nm={all:"all hints",key:"key moments",off:"off"},_i=Zt.has("lab")?"lab":"run",Um=Un,Xh="WASD",Zm="giantfall_v1",gl=()=>gn.storage()||(()=>{try{return window.localStorage}catch{return null}})(),st={sound:!0,shake:Ym?"less":"full",elara:"all",fights:0,wins:0,ascUnlocked:0,asc:0},dl=0,Bn=null;function kb(){try{let i=gl(),e=i&&i.getItem(Zm);e&&(st={...st,...JSON.parse(e)})}catch{}}function Sa(){try{let i=gl();i&&i.setItem(Zm,JSON.stringify(st))}catch{}}var Jm="96ad68c",jm=Zt.has("counter")?"giantfall_report_counter_v1":"giantfall_report_v1",Ki=null,Zi=null,Kh=Zt.has("tester")||/(^|\.)titanth\.com$/.test(location.hostname);sp(Zt.get("lang")||(Kh?"th":"en"));document.documentElement.lang=zi;var Ob=zi==="th"?np:tp;{let i=(e,t)=>{let n=document.querySelector(e);n&&(n.textContent=j(t))};i("#ltext","Loading\u2026"),i("#turn b","Turn your phone sideways"),i("#turn span","Toppleheart plays in landscape")}function Fb(){if(!(xi||ba))try{let i=gl(),e=i&&i.getItem(jm);if(!e)return;let t=JSON.parse(e);Array.isArray(t.log)&&ce.log.push(...t.log),t.answers&&(Zi=t.answers),ce.fight&&ce.fight.result==null&&(ce.fight.n=ce.log.length+1),ce.runsStarted=t.runsStarted||0,Ki=t.beganAt||null}catch{}}function qh(){if(!(xi||ba))try{let i=gl();i&&i.setItem(jm,JSON.stringify({log:ce.log,runsStarted:ce.runsStarted,beganAt:Ki,answers:Zi}))}catch{}}function Bb(){let i=ce.report();return i.build=Jm,Zi&&(i.answers=Zi),i.viewHeals=Ms?Object.values(Ms).reduce((e,t)=>e+t.heals,0):0,i.minutesSinceFirstBegin=Ki?Math.round((Date.now()-Ki)/6e3)/10:null,i.perRun=i.perRun.map((e,t)=>({...e,wallMin:ce.log[t]&&ce.log[t].wallMin!=null?ce.log[t].wallMin:null})),i}function xl(i){let e=JSON.stringify(Bb()).replace(/":/g,'": '),t=document.getElementById(i);(navigator.clipboard?navigator.clipboard.writeText(e):Promise.reject()).then(()=>{t&&(t.textContent=j("Copied. Paste it to whoever asked you to play."))}).catch(()=>{t&&(t.textContent=e)})}var ys,qn,It,Dr,wa,Ms,Zh,Qe,Se,Jh,ce,fl=null,cl=()=>ce.giant?Ms[ce.giant.id]:null,km=-9,Om=0,ya=null,zh=!1,yi=!1,$i=!1,vs=0,Fm=0,Pr=0,ul=0,Bm=0,Lr=!1,zm=new L(0,12,16),Hm=new L(0,1,0),Hh=new L,Vm=document.getElementById("ui");function zb(i){return new Promise((e,t)=>{let n=new Image;n.onload=()=>e(n),n.onerror=t,n.src=i})}function Vh(i,e){let t=document.getElementById("lfill"),n=document.getElementById("ltext");t&&(t.style.width=`${Math.round(i*100)}%`),n&&e&&(n.textContent=e)}var pl=40,Gm=!1;function Wm(){let i=innerWidth,e=innerHeight;ys.setSize(i,e,!1),It.aspect=i/e;let t=i/e;pl=t<1?62:t<1.4?50:40,Gm||(It.fov=pl,Gm=!0),It.updateProjectionMatrix()}function Hb(i,e,t){return Hh.set(i,e,t).project(It),{x:(Hh.x+1)/2*innerWidth,y:(1-Hh.y)/2*innerHeight}}var ln=(i,e=null)=>{Pr=Math.max(Pr,i),ul=e},Gh={v:1},Wh=new Set,Xm={};function Vb(i){let e=ce.giant,t=ce.hero;switch(Jh.handle(i,ce),i.t){case"swing":Ue.swing(i.move),i.move==="counter"&&(Se.dropNums("counter"),Se.dropNums("perfect"),ya={x:t.x,z:t.z},zh=!1);break;case"hit":{Ue.hit(i.move,i.consumed&&Object.keys(i.consumed).length);let n=i.target==="giant",s=n?e.radius:.5,r=n?1.4+Math.random()*.8:.7,a=Math.atan2(t.x-i.x,t.z-i.z),o=i.x+Math.sin(a)*s*.9,l=i.z+Math.cos(a)*s*.9,c=i.move==="breaker"||i.move==="giantfall";if(Wh.has(i.move+ce.combo.hits)||(Wh.add(i.move+ce.combo.hits),i.move==="tether"?Qe.beam(t,i):i.move==="sunder"?Qe.chop(t):Qe.slash(t,i.move)),i.move==="sunder"?Qe.cracks(o,l,a):i.move==="tether"&&Qe.bind(i.x,n?1.2:.7,i.z,n?e.radius*.9:.6),Qe.sparks(o,r,l,a,c?18:n?9:6,i.move==="sunder"?"#ff9a4a":"#ffe2a8"),Qe.dust(o,l,c?7:n?4:3,c?1.2:.5),c&&n&&(Qe.shock(i.x,i.z,i.move==="giantfall"?6:3.2),Qe.flash(o,1.6,l,"#ffd36b",3)),n&&i.consumed){let u=Kt[e.id].height;i.consumed.cracked&&Qe.shatter(e.x,u*.6,e.z,u*.3,10+6*i.consumed.cracked,"#ff7a1f",2.4),i.consumed.bound&&(Qe.shatter(e.x,u*.45,e.z,u*.35,12,"#1fb5ea",2.8),Qe.shock(e.x,e.z,u*.7,"#7fe3ff",.4))}if(n&&i.gain>0){let u=i.consumed&&Object.keys(i.consumed).length?"spend":i.repeat?"repeat":i.variety>1?"mix":"gold",h=Math.max(u==="repeat"?1:2,Math.min(16,Math.round(i.gain/(u==="repeat"?4:1.5))));Se.sparks({x:o,y:r,z:l},h,u)}if(n&&cl()&&cl().hit(i,t.face),i.move==="counter"?Se.num({x:n?e.x:i.x,y:n?4:2,z:n?e.z:i.z},i.dmg,"big counterdmg"):Se.num({x:o,y:n?2.6:1.6,z:l},i.dmg,c&&n?"big":i.toppled?"down":n?"":"small"),i.consumed&&Object.keys(i.consumed).length?(Se.comboPulse(j("SPENT!"),"spent"),Se.flash("#ffd36b",.18)):i.repeat?Se.comboPulse(j("REPEAT \xD70.6"),"repeat"):i.variety>Gh.v&&Se.comboPulse(j("MIX \xD7{n}",{n:i.variety}),"mix"),Gh.v=i.variety,ln(c?.55:.12+(i.move==="sunder"?.08:0),a+Math.PI),i.move==="giantfall"&&(Se.flash("#fff6d8",.55),ln(.9)),i.move==="counter"&&!zh){zh=!0;let u=n?e.x:i.x,h=n?e.z:i.z;Se.comboPulse(j("COUNTER!"),"counter"),Se.flash("#9ff0ff",n?.32:.22),ya&&(Qe.dash(ya.x,ya.z,t.x,t.z,"#2fc8ff"),ya=null),Qe.flash(u,n?2.8:1,h,"#2fc8ff",n?9:4.5,.45),Qe.flash(o,n?1.6:.8,l,"#ffffff",3.5,.25),Qe.shock(i.x,i.z,n?e.radius+3.2:2.2,"#7fe6ff",.55),Qe.sparks(o,r,l,a,n?28:20,"#9ff0ff"),Se.num({x:u,y:n?5.3:2.8,z:h},j("COUNTER!"),"counterbig"),ln(n?.85:.55,a+Math.PI)}ce.combo.hits>=5&&ce.combo.hits%5===0&&Ue.combo(ce.combo.hits);break}case"whiff":i.move==="tether"?Qe.beam(t,{x:t.x+Math.sin(t.face)*6.5,z:t.z+Math.cos(t.face)*6.5}):i.move==="sunder"?Qe.chop(t):Qe.slash(t,i.move),Ue.whiff();break;case"cancel":break;case"comboEnd":Gh.v=1,Wh.clear();break;case"status":i.on&&i.target==="giant"&&e&&(Ue.status(i.name),Se.num({x:e.x,y:3.6,z:e.z},j(i.name==="cracked"?"CRACKED":"BOUND"),`tag ${i.name}`));break;case"wind":Ue.wind(i.atk);break;case"strike":{Ue.strike(i.atk),cl()&&cl().strike(),i.atk==="slam"?(Qe.shock(i.x,i.z,2.6,"#ffb08a"),Qe.dust(i.x,i.z,10,1.6),ln(.5)):i.atk==="sweep"?(Qe.shock(e.x,e.z,4.2,"#ffc9a8",.35),ln(.25)):ln(.3);break}case"wallHit":Ue.wallHit(),Qe.dust(i.x,i.z,14,2),ln(.6);break;case"topple":{Ue.topple(),Ue.duck(!0),Ma(1.6,()=>Ue.duck(!1));let n=e.x+Math.sin(i.dir)*1.6,s=e.z+Math.cos(i.dir)*1.6;Qe.dust(n,s,22,2.8),Qe.shock(n,s,7,"#ffe7b0",.7),ln(1),Se.flash("#ffe7b0",.35),Se.banner(j("TOPPLED!"),j("Hit him while he's down \u2014 double damage"),"topple",2.2);break}case"fallReady":Se.banner(j("GIANTFALL!"),Fn?j("Tap FALL! \u2014 finish him"):j("Press [{key}] \u2014 finish him",{key:Un.breaker}),"topple",1.3),Ue.ting();break;case"getup":Ue.getup(),Qe.dust(e.x,e.z,8,1.5);break;case"phase":Ue.roar(),Se.banner(j("{name} AWAKENS",{name:Kt[e.id].name.toUpperCase()}),j("He strikes faster now"),"phase",2),ln(.45);break;case"stage":{Dr.setZone(i.mood===2?2:1),Ue.music(i.type==="giant"?"boss":"climb"),i.giant?(Se.setGiant(Kt[i.giant].name,j(Kt[i.giant].title)),Se.banner(Kt[i.giant].name.toUpperCase(),j(Kt[i.giant].title),"intro",2.2),Ue.roar(),ln(.4)):Se.banner(j(i.name),"","stage",1.6),Se.setStage(ce);break}case"spawn":Ue.getup();break;case"foeWind":Ue.foeWind();break;case"lunge":Ue.dodge();break;case"throw":Ue.swing("light1");break;case"foeDown":Qe.dust(i.x,i.z,i.how==="crush"||i.how==="quake"?8:5,.6),Ue.foeDown(),(i.how==="quake"||i.how==="crush")&&Se.num({x:i.x,y:1.4,z:i.z},j("CRUSHED"),"tag crushed");break;case"heal":Se.num({x:t.x,y:2.2,z:t.z},`+${i.n}`,"heal"),Ue.ting();break;case"pull":Qe.dash(i.x0,i.z0,i.x,i.z,"#6fd0ff"),Ue.dodge();break;case"pullEnd":Qe.dust(i.x,i.z,6,.5),Ue.land(),ln(.2);break;case"giantReady":break;case"offer":break;case"picked":Ue.ting(),i.heal&&Se.num({x:t.x,y:2.2,z:t.z},`+${i.heal}`,"heal"),Se.setPowers(ce.run.picks.map(n=>vr.cards.find(s=>s.id===n)).map(n=>({...n,name:_r(n),text:$o(n)})));break;case"power":{Se.powerPulse(i.id);let n=ce.realTime;if(n-(Xm[i.id]||-9)<2.5)break;Xm[i.id]=n;let s=vr.cards.find(o=>o.id===i.id),r=n-km<.8?Math.min(Om+1,3):0,a=.55*r;Om=r,km=n,Se.num({x:t.x,y:2.9+a,z:t.z},_r(s),`tag power${i.hurt?" cost":""}`),Ue.power();break}case"counterReady":Ue.counterReady(),Se.num({x:t.x,y:3,z:t.z},Fn?j("STRIKE BACK!"):`[${Un.light}] ${j("STRIKE BACK!")}`,"tag counter");break;case"perfect":Ue.perfect(),Qe.flash(t.x,1,t.z,"#9ff0ff",3,.3),Se.num({x:t.x,y:2.3,z:t.z},j("PERFECT"),"tag perfect"),ln(.15);break;case"dodge":Ue.dodge(),Qe.dust(t.x,t.z,3,.3);break;case"hurt":Ue.hurt(),wa.hurt(),Se.flash("#ff3a2a",.32),Se.num({x:t.x,y:2.2,z:t.z},`-${i.dmg}`,"hurt"),ln(.45);break;case"fallen":Ue.duck(!0),Qe.motes(e.x,e.z),Qe.dust(e.x,e.z,26,3),ln(1),Se.banner(j("{name} RESTS",{name:Kt[e.id].name.toUpperCase()}),i.last?"":j("The terrace goes quiet\u2026"),"win",3),i.last&&wa.win(),i.last?(Ma(.9,()=>Ue.hum()),Ma(5.4,()=>{Ue.win(),Ue.duck(!1)})):Ma(.9,()=>{Ue.ting(),Ue.duck(!1)});break;case"flow":if(i.to==="fight"&&i.from==="intro"&&(Ki||(Ki=Date.now()),qh()),i.to==="fight"&&(gn.gameplayStart(),_i==="lab"&&Ue.music("boss"),Se.showBars(!0),i.from==="pick"&&(Vt.onKey(null),Se.closeModal())),i.to==="pick"&&(gn.gameplayStop(),(!fl||$m)&&Xb()),i.to==="intro"&&(_i==="lab"?Se.banner(Kt[ce.giantId].name.toUpperCase(),j(Kt[ce.giantId].title),"intro",2):(Dr.setZone(1),Se.banner(j("THE DAWN TERRACES"),j("Bring the Wardens to rest"),"intro",2),Ue.music("climb")),Se.showBars(!0),Se.setStage(ce),Se.setPowers([]),Lr=!1),i.to==="won"||i.to==="down"){st.fights++,i.to==="won"&&st.wins++,dl=0,i.to==="won"&&_i==="run"&&ce.asc>=st.ascUnlocked&&st.ascUnlocked<op(Km)&&(st.ascUnlocked=ce.asc+1,dl=st.ascUnlocked),Sa();let n=ce.log[ce.log.length-1];n&&Ki&&(n.wallMin=Math.round((Date.now()-Ki)/6e3)/10),qh(),i.to==="down"&&(Ue.down(),Se.banner(j("FALLEN"),"","down",2)),Ma(i.to==="won"?2.6:1.5,()=>{gn.gameplayStop(),rg()})}break;default:break}}function Qm(){return Fn?`<p class="small">${j("Left side: move")} \xB7 <b>${j("Strike")}</b> \xB7 <b>${j("Sunder")}</b> ${j("cracks")} \xB7 <b>${j("Tether")}</b> ${j("holds")} \xB7 <b>${j("Break")}</b> ${j("spends")} \xB7 <b>${j("Roll")}</b> ${j("dodges")}</p>`:`<div class="ctl"><span><kbd>${Xh}</kbd> ${j("move")}</span><span><kbd>${Un.light}</kbd> ${j("/ click strike")}</span><span><kbd>${Un.sunder}</kbd> ${j("Sunder \u2014 crack")}</span><span><kbd>${Un.tether}</kbd> ${j("Tether \u2014 hold")}</span><span><kbd>${Un.breaker}</kbd> ${j("Break \u2014 spend")}</span><span><kbd>SPACE</kbd> ${j("roll")}</span><span><kbd>P</kbd> ${j("pause")}</span></div>`}function _l(i){let e=document.querySelector(".modal");for(let[t,n]of Object.entries(i)){let s=e.querySelector(t);s&&(s.onclick=r=>{r.preventDefault(),Ue.click(),n()})}}function Gb(){if(Fn)try{let i=screen.orientation;i&&i.lock&&i.lock("landscape").catch(()=>{})}catch{}}var qm=[["q1","\u0E16\u0E49\u0E32\u0E40\u0E25\u0E48\u0E32\u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E1F\u0E31\u0E07 \u0E40\u0E01\u0E21\u0E19\u0E35\u0E49\u0E43\u0E2B\u0E49\u0E40\u0E23\u0E32\u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23"],["q2","\u0E16\u0E49\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E2D\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19: \u0E17\u0E33\u0E22\u0E31\u0E07\u0E44\u0E07\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E16\u0E36\u0E07\u0E25\u0E49\u0E21 (\u0E2A\u0E15\u0E31\u0E49\u0E19)? \u0E40\u0E25\u0E48\u0E32\u0E27\u0E34\u0E18\u0E35\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32 1\u20132 \u0E1B\u0E23\u0E30\u0E42\u0E22\u0E04"],["q3","\u0E0A\u0E48\u0E27\u0E07\u0E44\u0E2B\u0E19\u0E17\u0E35\u0E48\u0E25\u0E38\u0E49\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14"],["q5","\u0E21\u0E35\u0E15\u0E2D\u0E19\u0E44\u0E2B\u0E19\u0E17\u0E35\u0E48\u0E07\u0E07 \u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E27\u0E48\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23\u0E44\u0E2B\u0E21"],["q6","\u0E21\u0E35\u0E15\u0E2D\u0E19\u0E44\u0E2B\u0E19\u0E17\u0E35\u0E48\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21\u0E41\u0E25\u0E49\u0E27\u0E40\u0E01\u0E21\u0E44\u0E21\u0E48\u0E17\u0E33\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E17\u0E35\u0E48\u0E15\u0E31\u0E49\u0E07\u0E43\u0E08\u0E44\u0E2B\u0E21"]];function eg(i){let e=Zi||{},t=a=>String(a||"").replace(/[&<>"]/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[o]),n=(a,o)=>`<div class="qpick" data-q="${a}">${o.map(([l,c])=>`<button type="button" class="ghost${e[a]===l?" on":""}" data-v="${l}">${c}</button>`).join("")}</div>`;Se.modal(`<h2>\u0E04\u0E33\u0E16\u0E32\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E04\u0E19\u0E17\u0E14\u0E2A\u0E2D\u0E1A</h2><p class="small">\u0E15\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E04\u0E33\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 1\u20132 \u0E1B\u0E23\u0E30\u0E42\u0E22\u0E04 \u0E04\u0E33\u0E15\u0E2D\u0E1A\u0E08\u0E30\u0E15\u0E34\u0E14\u0E44\u0E1B\u0E01\u0E31\u0E1A\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19</p>
    <div class="qa"><label>\u0E40\u0E04\u0E22\u0E40\u0E2B\u0E47\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E19\u0E35\u0E49\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E21</label>${n("seen",[["no","\u0E44\u0E21\u0E48\u0E40\u0E04\u0E22"],["yes","\u0E40\u0E04\u0E22"]])}
    ${qm.slice(0,3).map(([a,o])=>`<label for="${a}">${o}</label><textarea id="${a}" rows="2">${t(e[a])}</textarea>`).join("")}
    <label>\u0E15\u0E2D\u0E19\u0E41\u0E1E\u0E49 \u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E27\u0E48\u0E32</label>${n("q4",[["me","\u0E40\u0E23\u0E32\u0E1E\u0E25\u0E32\u0E14\u0E40\u0E2D\u0E07"],["game","\u0E40\u0E01\u0E21\u0E44\u0E21\u0E48\u0E41\u0E1F\u0E23\u0E4C"],["none","\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E41\u0E1E\u0E49"]])}
    <textarea id="q4note" rows="1" placeholder="(\u0E17\u0E33\u0E44\u0E21 \u0E16\u0E49\u0E32\u0E2D\u0E22\u0E32\u0E01\u0E40\u0E25\u0E48\u0E32)">${t(e.q4note)}</textarea>
    ${qm.slice(3).map(([a,o])=>`<label for="${a}">${o}</label><textarea id="${a}" rows="2">${t(e[a])}</textarea>`).join("")}</div>
    <button class="go" id="qsave">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 \u0E41\u0E25\u0E49\u0E27\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19</button><button class="ghost" id="qback">\u0E01\u0E25\u0E31\u0E1A</button><p class="small" id="rep"></p>`);let s={seen:e.seen,q4:e.q4};document.querySelectorAll(".qpick").forEach(a=>a.querySelectorAll("button").forEach(o=>{o.onclick=()=>{s[a.dataset.q]=o.dataset.v,a.querySelectorAll("button").forEach(l=>l.classList.toggle("on",l===o))}}));let r=()=>{Zi={seen:s.seen||null,q4:s.q4||null,at:new Date().toISOString().slice(0,16)},Zi.qv=2;for(let a of["q1","q2","q3","q4note","q5","q6"])Zi[a]=(document.getElementById(a).value||"").trim().slice(0,600);qh()};_l({"#qsave":()=>{r(),xl("rep")},"#qback":()=>{r(),i()}}),Vt.onKey(null)}var Wb=+(Zt.get("seed")||Date.now()%1e5);function jh(i){let e=ce;ce=Np(Km,{seed:Wb,mode:_i,asc:i,counter:Zt.has("nocounter")?!1:Zt.has("counter")?!0:void 0}),e&&(ce.log=e.log,ce.runsStarted=e.runsStarted),Se&&Se.setAsc(i)}var tg=i=>i===0?j("the game as it is"):`${j("New: {x}",{x:ch.levels[i-1][zi==="th"?"th":"en"]})}${i>1?` \xB7 ${j("plus everything below")}`:""}`;function ng(){if(!st.ascUnlocked||_i!=="run")return"";let i=Bn!=null?Bn:ce.asc;return`<div class="ascpick"><button class="ghost" id="ascDn" aria-label="-">\u25C0</button><span><b id="ascN">${j("Level {n}",{n:i})}</b><small id="ascD">${tg(i)}</small></span><button class="ghost" id="ascUp" aria-label="+">\u25B6</button></div>`}function ig(){let i=n=>{let s=Bn!=null?Bn:ce.asc,r=Math.max(0,Math.min(st.ascUnlocked,s+n));if(r===s)return;st.asc=r,Sa(),Ue.click(),yi?Bn=r:jh(r);let a=document.getElementById("ascN"),o=document.getElementById("ascD");a&&(a.textContent=j("Level {n}",{n:r})),o&&(o.textContent=tg(r))},e=document.getElementById("ascDn"),t=document.getElementById("ascUp");e&&(e.onclick=n=>{n.preventDefault(),i(-1)}),t&&(t.onclick=n=>{n.preventDefault(),i(1)})}function sg(){Se.modal(`<h1>TOPPLE<span>HEART</span></h1><p class="promise">${j("Mix your skills, break their balance, and bring down giants a hundred times your size.")}</p>${Qm()}${ng()}<button class="go" id="go">${j("Begin")}</button>${ce.log.length?`${Kh?'<button class="ghost" id="qs">\u0E15\u0E2D\u0E1A\u0E04\u0E33\u0E16\u0E32\u0E21\u0E04\u0E19\u0E17\u0E14\u0E2A\u0E2D\u0E1A</button>':""}<button class="ghost" id="report">${j("Copy play report")}</button><p class="small" id="rep"></p>`:""}<p class="small">${_i==="run"?j("One run: about 3 minutes \xB7 two Wardens to bring down"):j("Fight lab \xB7 Hollen only")}</p>`);let i=()=>{yi||(yi=!0,Vt.onKey(null),Se.closeModal(),Ue.unlock(),Ue.setEnabled(st.sound),Ue.ambience("tower"),vs=0,Gb())};_l({"#go":i,"#report":()=>xl("rep"),"#qs":()=>eg(sg)}),ig(),Vt.onKey(e=>{e!=="Escape"&&i()})}function Xb(){let i=ce.run.offer;Se.modal(`<h2>${j("Choose a power")}</h2><p class="small">${j("Elara hums while you rest (+{n} HP). One of three:",{n:Yo.pickHeal})}</p>
    <div class="cards">${i.map((t,n)=>`<button class="pcard" data-k="${n}"><kbd>${n+1}</kbd><i class="picons">${(t.icons||[]).map(s=>Hi[s]||"").join("")}</i><b>${_r(t)}</b><span>${$o(t)}</span></button>`).join("")}</div>`);let e=t=>{ce.choose(t)&&Ue.click()};document.querySelectorAll(".pcard").forEach(t=>{t.onclick=()=>e(+t.dataset.k)}),Vt.onKey(t=>{let n=["Digit1","Digit2","Digit3"].indexOf(t);n>=0&&e(n)})}function rg(){if(Lr)return;Lr=!0;let i=ce.log[ce.log.length-1],e=i.result==="won",t=ce.assistOffer(),n=!e&&i.giantHpPct!=null&&i.giantHpPct<=15,s=_i==="run"&&!e&&i.giant&&i.stage===i.stages-1,r=_i==="run",a=u=>`${Math.floor(u/60)}:${String(Math.floor(u%60)).padStart(2,"0")}`,o=r?Math.round(100*(i.stage+(i.giantHpPct!=null?1-i.giantHpPct/100:0))/i.stages):0,l=r?i.powers.map(u=>vr.cards.find(h=>h.id===u)).filter(Boolean).map(_r):[];Se.modal(`<h2>${j(e?r?"The Terraces sleep.":"Hollen rests.":n?"So close.":"Get up, Breaker.")}</h2>
    ${r&&!e?`<p class="small">${j("You fell at {stage}",{stage:`<b>${j(i.stageName)}</b>`})}${i.giantHpPct!=null?j(" \u2014 {giant} had {n}% left",{giant:i.giant==="hollen"?"Hollen":"Cairn",n:i.giantHpPct}):""}.</p><div class="runbar"><i style="width:${o}%"></i></div>`:""}
    <div class="stats">
      ${e?`<div><b>${r?a(i.realSec):i.time+"s"}</b><span>${j("time")}</span></div><div><b>${i.heroHp}</b><span>${j("HP left")}</span></div>`:i.giantHpPct!=null&&!r?`<div><b>${i.giantHpPct}%</b><span>${j("Hollen's strength left")}</span></div>`:""}
      <div><b>${i.topples}</b><span>${j("topples")}</span></div>${r?`<div><b>${i.crushes}</b><span>${j("crushed")}</span></div>`:""}<div><b>${i.bestCombo}</b><span>${j("best combo")}</span></div><div><b>${i.perfects}</b><span>${j("perfect rolls")}</span></div>
    </div>
    ${l.length?`<p class="small">${j("Powers: {list}",{list:l.join(" \xB7 ")})}</p>`:""}
    ${dl?`<p class="unlock">${j("New difficulty unlocked: Level {n}",{n:dl})}</p>`:""}${ng()}
    ${t?`<label class="assist"><input type="checkbox" id="assist" ${ce.assistPct?"checked":""}> ${j("Elara's Shield: take {n}% less damage",{n:t})} <small>${j("(your choice \u2014 it never weakens Hollen)")}</small></label>`:""}
    ${s?`<button class="go" id="retry">${j("Face {who} again",{who:i.giant==="hollen"?"Hollen":j("him")})}</button><button class="ghost" id="again">${j("Run from the start")}</button>`:`<button class="go" id="again">${j(r?"Run again":"Fight again")}</button>`}
    ${Kh?'<button class="ghost" id="qs">\u0E15\u0E2D\u0E1A\u0E04\u0E33\u0E16\u0E32\u0E21\u0E04\u0E19\u0E17\u0E14\u0E2A\u0E2D\u0E1A</button>':""}<button class="ghost" id="report">${j("Copy play report")}</button><p class="small" id="rep"></p>`),_l({"#qs":()=>eg(()=>{Lr=!1,rg()}),"#again":hl,"#retry":()=>hl({stage:i.stage,picks:i.powers.slice()}),"#report":()=>xl("rep")}),ig();let c=document.getElementById("assist");c&&(c.onchange=()=>ce.setAssist(c.checked?t:0)),Vt.onKey(u=>{(u==="Enter"||u==="Space")&&hl(s?{stage:i.stage,picks:i.powers.slice()}:null)})}function hl(i=null){Vt.onKey(null),Se.closeModal(),Bn!==null&&Bn!==ce.asc&&jh(Bn),Bn=null,ce.reset(),ce.resume=i,vs=0}function Yi(i){if(!(!yi||Lr||$i===i))if($i=i,i){gn.gameplayStop(),Ue.duck(!0);let e=ce.run?ce.run.picks.map(t=>vr.cards.find(n=>n.id===t)):[];Se.modal(`<h2>${j("Paused")}</h2>${e.length?`<div class="plist"><b>${j("Your powers")}</b>${e.map(t=>`<div><b>${_r(t)}</b>${$o(t)}</div>`).join("")}</div>`:""}${Qm()}<div class="row"><button class="ghost" id="snd">${j(`Sound: ${st.sound?"on":"off"}`)}</button><button class="ghost" id="shk">${j(`Screen shake: ${st.shake}`)}</button><button class="ghost" id="ela">${j(`Elara: ${Nm[st.elara]}`)}</button></div><button class="go" id="res">${j("Resume")}</button><button class="ghost" id="report">${j("Copy play report")}</button><p class="small" id="rep"></p><p class="small build">build ${Jm}</p>`),_l({"#res":()=>Yi(!1),"#report":()=>xl("rep"),"#snd":()=>{st.sound=!st.sound,Ue.setEnabled(st.sound),Sa(),document.getElementById("snd").textContent=j(`Sound: ${st.sound?"on":"off"}`)},"#ela":()=>{st.elara=st.elara==="all"?"key":st.elara==="key"?"off":"all",Sa(),document.getElementById("ela").textContent=j(`Elara: ${Nm[st.elara]}`)},"#shk":()=>{st.shake=st.shake==="full"?"less":st.shake==="less"?"off":"full",Sa(),document.getElementById("shk").textContent=j(`Screen shake: ${st.shake}`)}}),Vt.onKey(t=>{(t==="Escape"||t==="KeyP")&&Yi(!1)})}else Vt.onKey(null),Se.closeModal(),Ue.duck(!1),ce.flow.state==="fight"&&gn.gameplayStart(),vs=0}function qb(){let i=ce.hero,e=[[i.x,.5,i.z],[i.x,1.6,i.z]];for(let n of ce.foes)n.state!=="dead"&&e.push([n.x,.6,n.z]);let t=ce.giant;return t&&t.state!=="fallen"&&e.push([t.x,1,t.z],[t.x,3,t.z]),e}function ag(i){let e=xi&&ml.lookAt;if(e){It.position.set(e[0]+e[3],e[1]+e[4],e[2]+e[5]),It.lookAt(e[0],e[1],e[2]);return}let t=ce.hero,n=ce.giant,s=new L(t.x*.8,1,t.z*.75-.8);if(n&&n.state!=="fallen")s.lerp(new L(n.x,1.8,n.z),.32);else if(ce.foes.length){let c=0,u=0;for(let h of ce.foes)c+=h.x,u+=h.z;s.lerp(new L(c/ce.foes.length,1,u/ce.foes.length),.2)}let a=innerWidth/innerHeight<1?new L(0,14.5,13):new L(0,12,13);n&&n.state==="toppled"&&a.multiplyScalar(.88);let o=s.clone().add(a),l=1-Math.exp(-i*5);if(zm.lerp(o,l),Hm.lerp(s,l),It.position.copy(zm),Pr>0&&st.shake!=="off"){let c=Math.min(1,Pr),u=c*c*.45*(st.shake==="less"||Ym?.3:1)*(innerWidth<600?.7:1);Bm+=i;let h=Math.sin(Bm*70)*u;ul!=null?(It.position.x+=Math.sin(ul)*h,It.position.z+=Math.cos(ul)*h,It.position.y+=(Math.random()-.5)*u*.3):(It.position.x+=(Math.random()-.5)*u*2,It.position.y+=(Math.random()-.5)*u*2)}Pr=Math.max(0,Pr-i*2.4),Math.abs(It.fov-pl)>.01&&(It.fov+=(pl-It.fov)*(1-Math.exp(-(i||.016)*6)),It.updateProjectionMatrix()),It.lookAt(Hm)}var og=0,$h=0,va=0,Ir=[],Ma=(i,e)=>Ir.push({t:i,fn:e});function Yh(i){og++;for(let n=Ir.length-1;n>=0&&!$i;n--)if(Ir[n].t-=i,Ir[n].t<=0){let s=Ir[n].fn;Ir.splice(n,1),s()}if(yi&&!$i){vs+=i;let n=0;for(;vs>=Vi&&n<8;){ce.step(fl&&!($m&&ce.flow.state==="pick")?fl(ce):Vt.frame());for(let s of ce.drain())Vb(s);vs-=Vi,n++,$h++}n===8&&(vs=0),Jh.tick(i,ce)}let e=!yi||$i||ce.stopT>1e-6?0:i*(ce.slowT>0?ce.slowScale:1),t=$i?0:i;va+=t,wa.update(ce,e,oh);for(let n of Object.values(Ms))n.update(ce,e,va);Zh.update(ce,e,va),Qe.update(e),Dr.tick(va),Bp(va),$i||ag(i),Dr.fadePillars(It,qb(),t),Se.update(ce,t,Hb),ys.render(qn,It)}function lg(i){let e=Math.min(.1,(i-(Fm||i))/1e3);Fm=i,Yh(e),requestAnimationFrame(lg)}async function $b(){gn.loadingStart(),Vh(.05,j("Waking the terraces\u2026")),await gn.init(),kb();let i=gn.deviceType();i&&!Zt.has("touch")&&(Fn=i!=="desktop"),Fn&&(Um={light:j("Strike"),sunder:j("Sunder"),tether:j("Tether"),breaker:j("Break"),dodge:j("Roll")});try{if(navigator.keyboard&&navigator.keyboard.getLayoutMap){let v=await Promise.race([navigator.keyboard.getLayoutMap(),new Promise(V=>setTimeout(()=>V(null),300))]),_=v&&v.get("Semicolon");_&&_!==";"&&(Un.breaker=_.toUpperCase());let P=v&&["KeyW","KeyA","KeyS","KeyD"].map(V=>v.get(V)).join("");P&&P.length===4&&(Xh=P.toUpperCase())}}catch{}let e=new Wo,t=v=>e.loadAsync(v).catch(()=>null),n=0,s=v=>v.then(_=>(n++,Vh(.1+.85*n/14),_)),[r,a,o,l,c,u,h,d,g]=await Promise.all(["hero","boss-guardian","weapon-firstLight","arena-pillar","arena-pillar-cracked","arena-pillar-claw","arena-gate","arena-brazier","arena-banner-torn"].map(v=>s(t(`${v}.glb`)))),m=await fetch("models.json").then(v=>v.json()).catch(()=>[]),x={};await Promise.all(["giant-hollen","giant-cairn","foe-shardling","foe-slinger"].filter(v=>m.includes(`${v}.glb`)).map(async v=>{x[v]=await t(`${v}.glb`)}));let[p,f,y,b]=await Promise.all(["arena-floor","sky-dawn","sky-dusk","arena-wall"].map(v=>s(zb(`${v}.webp`).catch(()=>null)))),M=document.getElementById("c"),C=(navigator.hardwareConcurrency||4)<=4||Fn;ys=new vo({canvas:M,antialias:!C,powerPreference:"high-performance",preserveDrawingBuffer:xi}),ys.setPixelRatio(Math.min(devicePixelRatio,C?1.5:2)),ys.shadowMap.enabled=!0,ys.shadowMap.type=pu,qn=new Mo,It=new Dt(40,16/9,.1,200),Dr=Xp(qn,{shadows:!0},{floor:p,skyDawn:f,skyDusk:y,wall:b,pillar:l,pillarCracked:c,pillarClaw:u,gate:h,brazier:d,bannerTorn:g},lh.arena.radius),Dr.setGate(!1,0),jh(Zt.has("asc")?+Zt.get("asc"):Math.min(st.asc,st.ascUnlocked)),ba&&(fl=kp(ba,7)),Fb(),wa=Jp(r,o),qn.add(wa.obj),Ms={hollen:Th(x["giant-hollen"]||a,qn,Kt.hollen.height,null,"hollen"),cairn:Th(x["giant-cairn"]||a,qn,Kt.cairn.height,Kt.cairn.tint,"cairn")};for(let v of Object.values(Ms))qn.add(v.obj);Zh=jp(a,qn,{shardling:x["foe-shardling"],slinger:x["foe-slinger"]}),Qe=tm(qn),Se=Lm(Vm,{touch:Fn,stages:_i==="run"?Yo.stages:null}),Se.setGiant(Kt.hollen.name,j(Kt.hollen.title)),Se.setAsc(ce.asc),Se.onPause(()=>Yi(!0)),Jh=Dm(Ob,Se,{...Um,move:Fn?j("the stick"):Xh},()=>st.elara),Fn?(document.body.classList.add("touch-ui"),sm(Vm)):im(M),addEventListener("resize",Wm),Wm();for(let v of["gesturestart","gesturechange","gestureend"])document.addEventListener(v,_=>_.preventDefault(),{passive:!1});document.addEventListener("dblclick",v=>v.preventDefault(),{passive:!1}),document.addEventListener("touchmove",v=>{(v.touches.length>1||!v.target.closest(".modal"))&&v.preventDefault()},{passive:!1});let E=0;if(document.addEventListener("touchend",v=>{v.timeStamp-E<320&&!v.target.closest(".modal")&&v.preventDefault(),E=v.timeStamp},{passive:!1}),Zt.has("dbg")){let v=document.createElement("pre");v.style.cssText="position:fixed;left:50%;top:0;z-index:99;margin:0;font:11px monospace;background:#000a;color:#fff;pointer-events:none;padding:2px 4px",document.body.append(v);let _=0,P="",V=0;addEventListener("touchstart",R=>{_=R.touches.length;let N=R.target;P=`${N.tagName}${N.id?"#"+N.id:""}.${String(N.className).split(" ")[0]} @${Math.round(R.touches[0].clientX)},${Math.round(R.touches[0].clientY)}`},!0),addEventListener("click",()=>{V++},!0),addEventListener("touchend",R=>{_=R.touches.length},!0),setInterval(()=>{let R=visualViewport;v.textContent=`zoom ${R?R.scale.toFixed(2):"?"} vv ${R?Math.round(R.width)+"x"+Math.round(R.height):""} win ${innerWidth}x${innerHeight} dpr ${devicePixelRatio} touches ${_} stick ${Vt.touch?Vt.touch.x.toFixed(2):"-"}
last touch ${P} clicks ${V}`},200)}let T=matchMedia("(orientation: portrait)"),I=()=>{let v=Fn&&T.matches;document.body.classList.toggle("turn",v),v&&!xi&&Yi(!0)};T.addEventListener("change",I),I(),addEventListener("keydown",v=>{(v.code==="Escape"||v.code==="KeyP")&&!Se.modalOpen&&Yi(!0)}),addEventListener("pointerdown",()=>Ue.unlock()),addEventListener("keydown",()=>Ue.unlock()),addEventListener("touchend",()=>Ue.unlock()),document.addEventListener("visibilitychange",()=>{document.hidden&&Yi(!0)}),addEventListener("blur",()=>{xi||Yi(!0)}),gn.muted()&&Ue.setForcedMute(!0),gn.onSettings(v=>Ue.setForcedMute(!!v.muteAudio)),Vh(1,j("Ready")),document.getElementById("loader").classList.add("gone"),gn.loadingStop(),ag(1),ba||xi?yi=!0:sg(),xi||requestAnimationFrame(lg),ml.ready=!0}var ml={ready:!1,lookAt:null,get sim(){return ce},rigged:()=>Object.fromEntries(Object.entries(Ms).map(([i,e])=>[i,e.obj.userData.rigged])),foeViews:()=>Zh.count(),pick:i=>ce.choose(i),get scene(){return qn},get renderer(){return ys},get camera(){return It},input:Vt,audio:Ue,settings:()=>st,advance(i){let e=Math.round(i/16.666666666666668);for(let t=0;t<e;t++)Yh(1/60)},frameAt(i){return Yh(1/i),$h},start(){yi||(yi=!0,Vt.onKey(null),Se.closeModal())},pause:Yi,again:hl,fxCount:()=>Qe.count(),frames:()=>og,steps:()=>$h,shown:()=>({modal:Se.modalOpen,ended:Lr,paused:$i})};Ub&&(window.__gf=ml);$b().catch(i=>{console.error(i);let e=document.getElementById("ltext");e&&(e.textContent=j("Could not load. Please reload."))});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
