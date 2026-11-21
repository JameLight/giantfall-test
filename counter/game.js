(()=>{var ru="170";var qm=0,Kh=1,Ym=2;var ff=1,au=2,Qn=3,_n=0,Xt=1,At=2,Ai=0,In=1,Hn=2,Zh=3,Jh=4,$m=5,Qi=100,Km=101,Zm=102,Jm=103,jm=104,Qm=200,eg=201,tg=202,ng=203,Xl=204,ql=205,ig=206,sg=207,rg=208,ag=209,og=210,lg=211,cg=212,ug=213,hg=214,Yl=0,$l=1,Kl=2,Xs=3,Zl=4,Jl=5,jl=6,Ql=7,pf=0,dg=1,fg=2,Ri=0,pg=1,mg=2,gg=3,xg=4,_g=5,yg=6,vg=7,jh="attached",Mg="detached",mf=300,qs=301,Ys=302,ec=303,tc=304,Do=306,ts=1e3,ti=1001,ns=1002,kt=1003,ou=1004;var Fs=1005;var sn=1006,Gr=1007;var zn=1008;var si=1009,gf=1010,xf=1011,Yr=1012,lu=1013,is=1014,Cn=1015,ta=1016,cu=1017,uu=1018,$s=1020,_f=35902,yf=1021,vf=1022,xn=1023,Mf=1024,bf=1025,Vs=1026,Ks=1027,hu=1028,du=1029,Sf=1030,fu=1031;var pu=1033,Za=33776,Ja=33777,ja=33778,Qa=33779,nc=35840,ic=35841,sc=35842,rc=35843,ac=36196,oc=37492,lc=37496,cc=37808,uc=37809,hc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,xc=37816,_c=37817,yc=37818,vc=37819,Mc=37820,bc=37821,eo=36492,Sc=36494,wc=36495,wf=36283,Tc=36284,Ec=36285,Ac=36286,mu=2200,gu=2201,bg=2202,Zs=2300,Js=2301,dl=2302,Bs=2400,zs=2401,to=2402,xu=2500,Sg=2501,Tf=0,No=1,na=2,wg=3200,Tg=3201;var _u=0,Eg=1,wi="",Et="srgb",qt="srgb-linear",Uo="linear",dt="srgb";var ys=7680;var Qh=519,Ag=512,Rg=513,Cg=514,Ef=515,Ig=516,Pg=517,Lg=518,Dg=519,Rc=35044;var ed="300 es",ni=2e3,no=2001,ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],td=1234567,Wr=Math.PI/180,js=180/Math.PI;function Pn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function yu(i,e){return(i%e+e)%e}function Ng(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ug(i,e,t){return i!==e?(t-i)/(e-i):0}function Xr(i,e,t){return(1-t)*i+t*e}function kg(i,e,t,n){return Xr(i,e,1-Math.exp(-t*n))}function Og(i,e=1){return e-Math.abs(yu(i,e*2)-e)}function Fg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Hg(i,e){return i+Math.random()*(e-i)}function Vg(i){return i*(.5-Math.random())}function Gg(i){i!==void 0&&(td=i);let e=td+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wg(i){return i*Wr}function Xg(i){return i*js}function qg(i){return(i&i-1)===0&&i!==0}function Yg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $g(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),g=r((n-e)/2),f=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*f,l*g,o*c);break;case"YXY":i.set(l*g,o*u,l*f,o*c);break;case"ZYZ":i.set(l*f,l*g,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Af={DEG2RAD:Wr,RAD2DEG:js,generateUUID:Pn,clamp:Bt,euclideanModulo:yu,mapLinear:Ng,inverseLerp:Ug,lerp:Xr,damp:kg,pingpong:Og,smoothstep:Fg,smootherstep:Bg,randInt:zg,randFloat:Hg,randFloatSpread:Vg,seededRandom:Gg,degToRad:Wg,radToDeg:Xg,isPowerOfTwo:qg,ceilPowerOfTwo:Yg,floorPowerOfTwo:$g,setQuaternionFromProperEuler:Kg,normalize:ht,denormalize:Rn},Ie=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],g=n[5],f=n[8],x=s[0],m=s[3],p=s[6],y=s[1],b=s[4],v=s[7],E=s[2],T=s[5],R=s[8];return r[0]=a*x+o*y+l*E,r[3]=a*m+o*b+l*T,r[6]=a*p+o*v+l*R,r[1]=c*x+u*y+h*E,r[4]=c*m+u*b+h*T,r[7]=c*p+u*v+h*R,r[2]=d*x+g*y+f*E,r[5]=d*m+g*b+f*T,r[8]=d*p+g*v+f*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,g=c*r-a*l,f=t*h+n*d+s*g;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=g*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fl.makeScale(e,t)),this}rotate(e){return this.premultiply(fl.makeRotation(-e)),this}translate(e,t){return this.premultiply(fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fl=new We;function Rf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zg(){let i=$r("canvas");return i.style.display="block",i}var nd={};function Hr(i){i in nd||(nd[i]=!0,console.warn(i))}function Jg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function jg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Qg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Je={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===dt&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===dt&&(i.r=Gs(i.r),i.g=Gs(i.g),i.b=Gs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wi?Uo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var id=[.64,.33,.3,.6,.15,.06],sd=[.2126,.7152,.0722],rd=[.3127,.329],ad=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),od=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[qt]:{primaries:id,whitePoint:rd,transfer:Uo,toXYZ:ad,fromXYZ:od,luminanceCoefficients:sd,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:id,whitePoint:rd,transfer:dt,toXYZ:ad,fromXYZ:od,luminanceCoefficients:sd,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}});var vs,Cc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vs===void 0&&(vs=$r("canvas")),vs.width=e.width,vs.height=e.height;let n=vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=$r("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},e0=0,io=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(pl(s[a].image)):r.push(pl(s[a]))}else r=pl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function pl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Cc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var t0=0,Pt=class i extends ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ti,s=ti,r=sn,a=zn,o=xn,l=si,c=i.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Pn(),this.name="",this.source=new io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case ns:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case ns:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=mf;Pt.DEFAULT_ANISOTROPY=1;var st=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],g=l[5],f=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(f+m)<.1&&Math.abs(c+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,v=(g+1)/2,E=(p+1)/2,T=(u+d)/4,R=(h+x)/4,I=(f+m)/4;return b>v&&b>E?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=R/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=I/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=I/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-f)*(m-f)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-f)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+g+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ic=class extends ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Pt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new io(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends Ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},so=class extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pc=class extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],g=r[a+1],f=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=g,e[t+2]=f,e[t+3]=x;return}if(h!==x||l!==d||c!==g||u!==f){let m=1-o,p=l*d+c*g+u*f+h*x,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let E=Math.sqrt(b),T=Math.atan2(E,p*y);m=Math.sin(m*T)/E,o=Math.sin(o*T)/E}let v=o*y;if(l=l*m+d*v,c=c*m+g*v,u=u*m+f*v,h=h*m+x*v,m===1-o){let E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],g=r[a+2],f=r[a+3];return e[t]=o*f+u*h+l*g-c*d,e[t+1]=l*f+u*d+c*h-o*g,e[t+2]=c*f+u*g+o*d-l*h,e[t+3]=u*f-o*h-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),g=l(s/2),f=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*g*f,this._y=c*g*h-d*u*f,this._z=c*u*f+d*g*h,this._w=c*u*h-d*g*f;break;case"YXZ":this._x=d*u*h+c*g*f,this._y=c*g*h-d*u*f,this._z=c*u*f-d*g*h,this._w=c*u*h+d*g*f;break;case"ZXY":this._x=d*u*h-c*g*f,this._y=c*g*h+d*u*f,this._z=c*u*f+d*g*h,this._w=c*u*h-d*g*f;break;case"ZYX":this._x=d*u*h-c*g*f,this._y=c*g*h+d*u*f,this._z=c*u*f-d*g*h,this._w=c*u*h+d*g*f;break;case"YZX":this._x=d*u*h+c*g*f,this._y=c*g*h+d*u*f,this._z=c*u*f-d*g*h,this._w=c*u*h-d*g*f;break;case"XZY":this._x=d*u*h-c*g*f,this._y=c*g*h-d*u*f,this._z=c*u*f+d*g*h,this._w=c*u*h+d*g*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>h){let g=2*Math.sqrt(1+n-o-h);this._w=(u-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>h){let g=2*Math.sqrt(1+o-n-h);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+u)/g}else{let g=2*Math.sqrt(1+h-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ld.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ld.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ml=new P,ld=new rn,Ot=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),va.copy(n.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Ma.subVectors(this.max,Ir),Ms.subVectors(e.a,Ir),bs.subVectors(e.b,Ir),Ss.subVectors(e.c,Ir),_i.subVectors(bs,Ms),yi.subVectors(Ss,bs),qi.subVectors(Ms,Ss);let t=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-qi.z,qi.y,_i.z,0,-_i.x,yi.z,0,-yi.x,qi.z,0,-qi.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-qi.y,qi.x,0];return!gl(t,Ms,bs,Ss,Ma)||(t=[1,0,0,0,1,0,0,0,1],!gl(t,Ms,bs,Ss,Ma))?!1:(ba.crossVectors(_i,yi),t=[ba.x,ba.y,ba.z],gl(t,Ms,bs,Ss,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Yn=[new P,new P,new P,new P,new P,new P,new P,new P],Tn=new P,va=new Ot,Ms=new P,bs=new P,Ss=new P,_i=new P,yi=new P,qi=new P,Ir=new P,Ma=new P,ba=new P,Yi=new P;function gl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yi.fromArray(i,r);let o=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),u=n.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var n0=new Ot,Pr=new P,xl=new P,un=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):n0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(xl)),this.expandByPoint(Pr.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},$n=new P,_l=new P,Sa=new P,vi=new P,yl=new P,wa=new P,vl=new P,Qs=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_l.copy(e).add(t).multiplyScalar(.5),Sa.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(_l);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Sa),o=vi.dot(this.direction),l=-vi.dot(Sa),c=vi.lengthSq(),u=Math.abs(1-a*a),h,d,g,f;if(u>0)if(h=a*l-o,d=a*o-l,f=r*u,h>=0)if(d>=-f)if(d<=f){let x=1/u;h*=x,d*=x,g=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;else d<=-f?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),g=-h*h+d*(d+2*l)+c):d<=f?(h=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),g=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(_l).addScaledVector(Sa,d),g}intersectSphere(e,t){$n.subVectors(e.center,this.origin);let n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,s,r){yl.subVectors(t,e),wa.subVectors(n,e),vl.crossVectors(yl,wa);let a=this.direction.dot(vl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,e);let l=o*this.direction.dot(wa.crossVectors(vi,wa));if(l<0)return null;let c=o*this.direction.dot(yl.cross(vi));if(c<0||l+c>a)return null;let u=-o*vi.dot(vl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,d,g,f,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,g,f,x,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,g,f,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=g,p[7]=f,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ws.setFromMatrixColumn(e,0).length(),r=1/ws.setFromMatrixColumn(e,1).length(),a=1/ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,g=a*h,f=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=g+f*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=f+g*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,g=l*h,f=c*u,x=c*h;t[0]=d+x*o,t[4]=f*o-g,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=g*o-f,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,g=l*h,f=c*u,x=c*h;t[0]=d-x*o,t[4]=-a*h,t[8]=f+g*o,t[1]=g+f*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,g=a*h,f=o*u,x=o*h;t[0]=l*u,t[4]=f*c-g,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=g*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,g=a*c,f=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=f*h+g,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=g*h+f,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*l,g=a*c,f=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=a*u,t[9]=g*h-f,t[2]=f*h-g,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i0,e,s0)}lookAt(e,t,n){let s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Mi.crossVectors(n,ln),Mi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Mi.crossVectors(n,ln)),Mi.normalize(),Ta.crossVectors(ln,Mi),s[0]=Mi.x,s[4]=Ta.x,s[8]=ln.x,s[1]=Mi.y,s[5]=Ta.y,s[9]=ln.y,s[2]=Mi.z,s[6]=Ta.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],g=n[13],f=n[2],x=n[6],m=n[10],p=n[14],y=n[3],b=n[7],v=n[11],E=n[15],T=s[0],R=s[4],I=s[8],_=s[12],M=s[1],L=s[5],W=s[9],C=s[13],U=s[2],N=s[6],D=s[10],q=s[14],B=s[3],J=s[7],ne=s[11],re=s[15];return r[0]=a*T+o*M+l*U+c*B,r[4]=a*R+o*L+l*N+c*J,r[8]=a*I+o*W+l*D+c*ne,r[12]=a*_+o*C+l*q+c*re,r[1]=u*T+h*M+d*U+g*B,r[5]=u*R+h*L+d*N+g*J,r[9]=u*I+h*W+d*D+g*ne,r[13]=u*_+h*C+d*q+g*re,r[2]=f*T+x*M+m*U+p*B,r[6]=f*R+x*L+m*N+p*J,r[10]=f*I+x*W+m*D+p*ne,r[14]=f*_+x*C+m*q+p*re,r[3]=y*T+b*M+v*U+E*B,r[7]=y*R+b*L+v*N+E*J,r[11]=y*I+b*W+v*D+E*ne,r[15]=y*_+b*C+v*q+E*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],g=e[14],f=e[3],x=e[7],m=e[11],p=e[15];return f*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*g-n*l*g)+x*(+t*l*g-t*c*d+r*a*d-s*a*g+s*c*u-r*l*u)+m*(+t*c*h-t*o*g-r*a*h+n*a*g+r*o*u-n*c*u)+p*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],g=e[11],f=e[12],x=e[13],m=e[14],p=e[15],y=h*m*c-x*d*c+x*l*g-o*m*g-h*l*p+o*d*p,b=f*d*c-u*m*c-f*l*g+a*m*g+u*l*p-a*d*p,v=u*x*c-f*h*c+f*o*g-a*x*g-u*o*p+a*h*p,E=f*h*l-u*x*l-f*o*d+a*x*d+u*o*m-a*h*m,T=t*y+n*b+s*v+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=y*R,e[1]=(x*d*r-h*m*r-x*s*g+n*m*g+h*s*p-n*d*p)*R,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*R,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*g-n*l*g)*R,e[4]=b*R,e[5]=(u*m*r-f*d*r+f*s*g-t*m*g-u*s*p+t*d*p)*R,e[6]=(f*l*r-a*m*r-f*s*c+t*m*c+a*s*p-t*l*p)*R,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*g+t*l*g)*R,e[8]=v*R,e[9]=(f*h*r-u*x*r-f*n*g+t*x*g+u*n*p-t*h*p)*R,e[10]=(a*x*r-f*o*r+f*n*c-t*x*c-a*n*p+t*o*p)*R,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*g-t*o*g)*R,e[12]=E*R,e[13]=(u*x*s-f*h*s+f*n*d-t*x*d-u*n*m+t*h*m)*R,e[14]=(f*o*s-a*x*s-f*n*l+t*x*l+a*n*m-t*o*m)*R,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,g=r*u,f=r*h,x=a*u,m=a*h,p=o*h,y=l*c,b=l*u,v=l*h,E=n.x,T=n.y,R=n.z;return s[0]=(1-(x+p))*E,s[1]=(g+v)*E,s[2]=(f-b)*E,s[3]=0,s[4]=(g-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(f+b)*R,s[9]=(m-y)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ws.set(s[0],s[1],s[2]).length(),a=ws.set(s[4],s[5],s[6]).length(),o=ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);let c=1/r,u=1/a,h=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,t.setFromRotationMatrix(En),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ni){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),g,f;if(o===ni)g=-(a+r)/(a-r),f=-2*a*r/(a-r);else if(o===no)g=-a/(a-r),f=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ni){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*c,g=(n+s)*u,f,x;if(o===ni)f=(a+r)*h,x=-2*h;else if(o===no)f=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ws=new P,En=new ze,i0=new P(0,0,0),s0=new P(1,1,1),Mi=new P,Ta=new P,ln=new P,cd=new ze,ud=new rn,Vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ud.setFromEuler(this),this.setFromQuaternion(ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var ro=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},r0=0,hd=new P,Ts=new rn,Kn=new ze,Ea=new P,Lr=new P,a0=new P,o0=new rn,dd=new P(1,0,0),fd=new P(0,1,0),pd=new P(0,0,1),md={type:"added"},l0={type:"removed"},Es={type:"childadded",child:null},Ml={type:"childremoved",child:null},vt=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Vn,n=new rn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new We}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(dd,e)}rotateY(e){return this.rotateOnAxis(fd,e)}rotateZ(e){return this.rotateOnAxis(pd,e)}translateOnAxis(e,t){return hd.copy(e).applyQuaternion(this.quaternion),this.position.add(hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dd,e)}translateY(e){return this.translateOnAxis(fd,e)}translateZ(e){return this.translateOnAxis(pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ea.copy(e):Ea.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Lr,Ea,this.up):Kn.lookAt(Ea,Lr,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(Kn),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(md),Es.child=e,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l0),Ml.child=e,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(md),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,a0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,o0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),g=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};vt.DEFAULT_UP=new P(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new P,Zn=new P,bl=new P,Jn=new P,As=new P,Rs=new P,gd=new P,Sl=new P,wl=new P,Tl=new P,El=new st,Al=new st,Rl=new st,Ti=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),An.subVectors(e,t),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){An.subVectors(s,t),Zn.subVectors(n,t),bl.subVectors(e,t);let a=An.dot(An),o=An.dot(Zn),l=An.dot(bl),c=Zn.dot(Zn),u=Zn.dot(bl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,g=(c*l-o*u)*d,f=(a*u-o*l)*d;return r.set(1-g-f,f,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return El.setScalar(0),Al.setScalar(0),Rl.setScalar(0),El.fromBufferAttribute(e,t),Al.fromBufferAttribute(e,n),Rl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(El,r.x),a.addScaledVector(Al,r.y),a.addScaledVector(Rl,r.z),a}static isFrontFacing(e,t,n,s){return An.subVectors(n,t),Zn.subVectors(e,t),An.cross(Zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),An.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;As.subVectors(s,n),Rs.subVectors(r,n),Sl.subVectors(e,n);let l=As.dot(Sl),c=Rs.dot(Sl);if(l<=0&&c<=0)return t.copy(n);wl.subVectors(e,s);let u=As.dot(wl),h=Rs.dot(wl);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(As,a);Tl.subVectors(e,r);let g=As.dot(Tl),f=Rs.dot(Tl);if(f>=0&&g<=f)return t.copy(r);let x=g*c-l*f;if(x<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Rs,o);let m=u*f-g*h;if(m<=0&&h-u>=0&&g-f>=0)return gd.subVectors(r,s),o=(h-u)/(h-u+(g-f)),t.copy(s).addScaledVector(gd,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(As,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function Cl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=yu(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Cl(a,r,e+1/3),this.g=Cl(a,r,e),this.b=Cl(a,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=Cf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Je.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Bt(Wt.r*255,0,255))*65536+Math.round(Bt(Wt.g*255,0,255))*256+Math.round(Bt(Wt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Wt.copy(this),t);let n=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Et){Je.fromWorkingColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,s=Wt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Aa);let n=Xr(bi.h,Aa.h,t),s=Xr(bi.s,Aa.s,t),r=Xr(bi.l,Aa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new Ee;Ee.NAMES=Cf;var c0=0,Zt=class extends ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Pn(),this.name="",this.blending=In,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=ql,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==In&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xl&&(n.blendSrc=this.blendSrc),this.blendDst!==ql&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Rt=class extends Zt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var It=new P,Ra=new Ie,wt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}};var ao=class extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var oo=class extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},u0=0,gn=new ze,Il=new vt,Cs=new P,cn=new Ot,Dr=new Ot,Ut=new P,bt=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rf(e)?oo:ao)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ot);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(cn.min,Dr.min),cn.expandByPoint(Ut),Ut.addVectors(cn.max,Dr.max),cn.expandByPoint(Ut)):(cn.expandByPoint(Dr.min),cn.expandByPoint(Dr.max))}cn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ut.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),Ut.add(Cs)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new P,l[I]=new P;let c=new P,u=new P,h=new P,d=new Ie,g=new Ie,f=new Ie,x=new P,m=new P;function p(I,_,M){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),g.fromBufferAttribute(r,_),f.fromBufferAttribute(r,M),u.sub(c),h.sub(c),g.sub(d),f.sub(d);let L=1/(g.x*f.y-f.x*g.y);isFinite(L)&&(x.copy(u).multiplyScalar(f.y).addScaledVector(h,-g.y).multiplyScalar(L),m.copy(h).multiplyScalar(g.x).addScaledVector(u,-f.x).multiplyScalar(L),o[I].add(x),o[_].add(x),o[M].add(x),l[I].add(m),l[_].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,_=y.length;I<_;++I){let M=y[I],L=M.start,W=M.count;for(let C=L,U=L+W;C<U;C+=3)p(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let b=new P,v=new P,E=new P,T=new P;function R(I){E.fromBufferAttribute(s,I),T.copy(E);let _=o[I];b.copy(_),b.sub(E.multiplyScalar(E.dot(_))).normalize(),v.crossVectors(T,_);let L=v.dot(l[I])<0?-1:1;a.setXYZW(I,b.x,b.y,b.z,L)}for(let I=0,_=y.length;I<_;++I){let M=y[I],L=M.start,W=M.count;for(let C=L,U=L+W;C<U;C+=3)R(e.getX(C+0)),R(e.getX(C+1)),R(e.getX(C+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,g=e.count;d<g;d+=3){let f=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,g=t.count;d<g;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),g=0,f=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?g=l[x]*o.data.stride+o.offset:g=l[x]*u;for(let p=0;p<u;p++)d[f++]=c[g++]}return new wt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],g=e(d,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let g=c[h];u.push(g.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,g=h.length;d<g;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xd=new ze,$i=new Qs,Ca=new un,_d=new P,Ia=new P,Pa=new P,La=new P,Pl=new P,Da=new P,yd=new P,Na=new P,Pe=class extends vt{constructor(e=new bt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Pl.fromBufferAttribute(h,e),a?Da.addScaledVector(Pl,u):Da.addScaledVector(Pl.sub(t),u))}t.add(Da)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(Ca.containsPoint($i.origin)===!1&&($i.intersectSphere(Ca,_d)===null||$i.origin.distanceToSquared(_d)>(e.far-e.near)**2))&&(xd.copy(r).invert(),$i.copy(e.ray).applyMatrix4(xd),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,x=d.length;f<x;f++){let m=d[f],p=a[m.materialIndex],y=Math.max(m.start,g.start),b=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let v=y,E=b;v<E;v+=3){let T=o.getX(v),R=o.getX(v+1),I=o.getX(v+2);s=Ua(this,p,e,n,c,u,h,T,R,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let m=f,p=x;m<p;m+=3){let y=o.getX(m),b=o.getX(m+1),v=o.getX(m+2);s=Ua(this,a,e,n,c,u,h,y,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,x=d.length;f<x;f++){let m=d[f],p=a[m.materialIndex],y=Math.max(m.start,g.start),b=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let v=y,E=b;v<E;v+=3){let T=v,R=v+1,I=v+2;s=Ua(this,p,e,n,c,u,h,T,R,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=f,p=x;m<p;m+=3){let y=m,b=m+1,v=m+2;s=Ua(this,a,e,n,c,u,h,y,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function h0(i,e,t,n,s,r,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===_n,o),l===null)return null;Na.copy(o),Na.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Na);return c<t.near||c>t.far?null:{distance:c,point:Na.clone(),object:i}}function Ua(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ia),i.getVertexPosition(l,Pa),i.getVertexPosition(c,La);let u=h0(i,e,t,n,Ia,Pa,La,yd);if(u){let h=new P;Ti.getBarycoord(yd,Ia,Pa,La,h),s&&(u.uv=Ti.getInterpolatedAttribute(s,o,l,c,h,new Ie)),r&&(u.uv1=Ti.getInterpolatedAttribute(r,o,l,c,h,new Ie)),a&&(u.normal=Ti.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};Ti.getNormal(Ia,Pa,La,d.normal),u.face=d,u.barycoord=h}return u}var hn=class i extends bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,g=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function f(x,m,p,y,b,v,E,T,R,I,_){let M=v/R,L=E/I,W=v/2,C=E/2,U=T/2,N=R+1,D=I+1,q=0,B=0,J=new P;for(let ne=0;ne<D;ne++){let re=ne*L-C;for(let xe=0;xe<N;xe++){let De=xe*M-W;J[x]=De*y,J[m]=re*b,J[p]=U,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[p]=T>0?1:-1,u.push(J.x,J.y,J.z),h.push(xe/R),h.push(1-ne/I),q+=1}}for(let ne=0;ne<I;ne++)for(let re=0;re<R;re++){let xe=d+re+N*ne,De=d+re+N*(ne+1),H=d+(re+1)+N*(ne+1),K=d+(re+1)+N*ne;l.push(xe,De,K),l.push(De,H,K),B+=6}o.addGroup(g,B,_),g+=B,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function er(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Kt(i){let e={};for(let t=0;t<i.length;t++){let n=er(i[t]);for(let s in n)e[s]=n[s]}return e}function d0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function If(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var f0={clone:er,merge:Kt},p0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends Zt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p0,this.fragmentShader=m0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=d0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},lo=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Si=new P,vd=new Ie,Md=new Ie,Lt=class extends lo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,vd,Md),t.subVectors(Md,vd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Wr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Is=-90,Ps=1,Lc=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Lt(Is,Ps,e,t);s.layers=this.layers,this.add(s);let r=new Lt(Is,Ps,e,t);r.layers=this.layers,this.add(r);let a=new Lt(Is,Ps,e,t);a.layers=this.layers,this.add(a);let o=new Lt(Is,Ps,e,t);o.layers=this.layers,this.add(o);let l=new Lt(Is,Ps,e,t);l.layers=this.layers,this.add(l);let c=new Lt(Is,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===no)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,g),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},co=class extends Pt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dc=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new co(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hn(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Ai});r.uniforms.tEquirect.value=t;let a=new Pe(s,r),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=sn),new Lc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ll=new P,g0=new P,x0=new We,ei=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ll.subVectors(n,t).cross(g0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ll),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||x0.getNormalMatrix(e),s=this.coplanarPoint(Ll).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new un,ka=new P,Kr=class{constructor(e=new ei,t=new ei,n=new ei,s=new ei,r=new ei,a=new ei){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],g=s[8],f=s[9],x=s[10],m=s[11],p=s[12],y=s[13],b=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-g,v-p).normalize(),n[1].setComponents(l+r,d+c,m+g,v+p).normalize(),n[2].setComponents(l+a,d+u,m+f,v+y).normalize(),n[3].setComponents(l-a,d-u,m-f,v-y).normalize(),n[4].setComponents(l-o,d-h,m-x,v-b).normalize(),t===ni)n[5].setComponents(l+o,d+h,m+x,v+b).normalize();else if(t===no)n[5].setComponents(o,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ka.x=s.normal.x>0?e.max.x:e.min.x,ka.y=s.normal.y>0?e.max.y:e.min.y,ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _0(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((g,f)=>g.start-f.start);let d=0;for(let g=1;g<h.length;g++){let f=h[d],x=h[g];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++d,h[d]=x)}h.length=d+1;for(let g=0,f=h.length;g<f;g++){let x=h[g];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ln=class i extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,g=[],f=[],x=[],m=[];for(let p=0;p<u;p++){let y=p*d-a;for(let b=0;b<c;b++){let v=b*h-r;f.push(v,-y,0),x.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let b=y+c*p,v=y+c*(p+1),E=y+1+c*(p+1),T=y+1+c*p;g.push(b,v,T),g.push(v,E,T)}this.setIndex(g),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
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
#endif`,E0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
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
#endif`,R0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,D0=`#ifdef USE_BUMPMAP
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,V0=`#define PI 3.141592653589793
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
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W0=`vec3 transformedNormal = objectNormal;
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
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ax=`#ifdef USE_GRADIENTMAP
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
}`,ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
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
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
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
#endif`,xx=`struct PhysicalMaterial {
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
}`,_x=`
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
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
#endif`,vx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rx=`#if defined( USE_POINTS_UV )
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
#endif`,Cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
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
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i_=`float getShadowMask() {
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
}`,s_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,a_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o_=`#ifdef USE_SKINNING
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
#endif`,l_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d_=`#ifdef USE_TRANSMISSION
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
#endif`,f_=`#ifdef USE_TRANSMISSION
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,__=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y_=`uniform sampler2D t2D;
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`#include <common>
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
}`,T_=`#if DEPTH_PACKING == 3200
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
}`,E_=`#define DISTANCE
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
}`,A_=`#define DISTANCE
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`uniform float scale;
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
}`,P_=`uniform vec3 diffuse;
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
}`,L_=`#include <common>
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
}`,D_=`uniform vec3 diffuse;
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
}`,N_=`#define LAMBERT
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
}`,U_=`#define LAMBERT
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
}`,k_=`#define MATCAP
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
}`,O_=`#define MATCAP
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
}`,F_=`#define NORMAL
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
}`,B_=`#define NORMAL
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
}`,z_=`#define PHONG
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
}`,H_=`#define PHONG
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
}`,V_=`#define STANDARD
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
}`,G_=`#define STANDARD
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
}`,W_=`#define TOON
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
}`,X_=`#define TOON
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
}`,q_=`uniform float size;
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
}`,Y_=`uniform vec3 diffuse;
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
}`,$_=`#include <common>
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
}`,K_=`uniform vec3 color;
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
}`,Z_=`uniform float rotation;
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
}`,J_=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:y0,alphahash_pars_fragment:v0,alphamap_fragment:M0,alphamap_pars_fragment:b0,alphatest_fragment:S0,alphatest_pars_fragment:w0,aomap_fragment:T0,aomap_pars_fragment:E0,batching_pars_vertex:A0,batching_vertex:R0,begin_vertex:C0,beginnormal_vertex:I0,bsdfs:P0,iridescence_fragment:L0,bumpmap_pars_fragment:D0,clipping_planes_fragment:N0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:O0,color_fragment:F0,color_pars_fragment:B0,color_pars_vertex:z0,color_vertex:H0,common:V0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:W0,displacementmap_pars_vertex:X0,displacementmap_vertex:q0,emissivemap_fragment:Y0,emissivemap_pars_fragment:$0,colorspace_fragment:K0,colorspace_pars_fragment:Z0,envmap_fragment:J0,envmap_common_pars_fragment:j0,envmap_pars_fragment:Q0,envmap_pars_vertex:ex,envmap_physical_pars_fragment:hx,envmap_vertex:tx,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:sx,fog_pars_fragment:rx,gradientmap_pars_fragment:ax,lightmap_pars_fragment:ox,lights_lambert_fragment:lx,lights_lambert_pars_fragment:cx,lights_pars_begin:ux,lights_toon_fragment:dx,lights_toon_pars_fragment:fx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:xx,lights_fragment_begin:_x,lights_fragment_maps:yx,lights_fragment_end:vx,logdepthbuf_fragment:Mx,logdepthbuf_pars_fragment:bx,logdepthbuf_pars_vertex:Sx,logdepthbuf_vertex:wx,map_fragment:Tx,map_pars_fragment:Ex,map_particle_fragment:Ax,map_particle_pars_fragment:Rx,metalnessmap_fragment:Cx,metalnessmap_pars_fragment:Ix,morphinstance_vertex:Px,morphcolor_vertex:Lx,morphnormal_vertex:Dx,morphtarget_pars_vertex:Nx,morphtarget_vertex:Ux,normal_fragment_begin:kx,normal_fragment_maps:Ox,normal_pars_fragment:Fx,normal_pars_vertex:Bx,normal_vertex:zx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Xx,opaque_fragment:qx,packing:Yx,premultiplied_alpha_fragment:$x,project_vertex:Kx,dithering_fragment:Zx,dithering_pars_fragment:Jx,roughnessmap_fragment:jx,roughnessmap_pars_fragment:Qx,shadowmap_pars_fragment:e_,shadowmap_pars_vertex:t_,shadowmap_vertex:n_,shadowmask_pars_fragment:i_,skinbase_vertex:s_,skinning_pars_vertex:r_,skinning_vertex:a_,skinnormal_vertex:o_,specularmap_fragment:l_,specularmap_pars_fragment:c_,tonemapping_fragment:u_,tonemapping_pars_fragment:h_,transmission_fragment:d_,transmission_pars_fragment:f_,uv_pars_fragment:p_,uv_pars_vertex:m_,uv_vertex:g_,worldpos_vertex:x_,background_vert:__,background_frag:y_,backgroundCube_vert:v_,backgroundCube_frag:M_,cube_vert:b_,cube_frag:S_,depth_vert:w_,depth_frag:T_,distanceRGBA_vert:E_,distanceRGBA_frag:A_,equirect_vert:R_,equirect_frag:C_,linedashed_vert:I_,linedashed_frag:P_,meshbasic_vert:L_,meshbasic_frag:D_,meshlambert_vert:N_,meshlambert_frag:U_,meshmatcap_vert:k_,meshmatcap_frag:O_,meshnormal_vert:F_,meshnormal_frag:B_,meshphong_vert:z_,meshphong_frag:H_,meshphysical_vert:V_,meshphysical_frag:G_,meshtoon_vert:W_,meshtoon_frag:X_,points_vert:q_,points_frag:Y_,shadow_vert:$_,shadow_frag:K_,sprite_vert:Z_,sprite_frag:J_},le={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Bn={basic:{uniforms:Kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Kt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Kt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Kt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Kt([le.points,le.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Kt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Kt([le.common,le.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Kt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Kt([le.sprite,le.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Kt([le.common,le.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Kt([le.lights,le.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Bn.physical={uniforms:Kt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Oa={r:0,b:0,g:0},Zi=new Vn,j_=new ze;function Q_(i,e,t,n,s,r,a){let o=new Ee(0),l=r===!0?0:1,c,u,h=null,d=0,g=null;function f(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function x(y){let b=!1,v=f(y);v===null?p(o,l):v&&v.isColor&&(p(v,1),b=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,b){let v=f(b);v&&(v.isCubeTexture||v.mapping===Do)?(u===void 0&&(u=new Pe(new hn(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:er(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Zi.copy(b.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(j_.makeRotationFromEuler(Zi)),u.material.toneMapped=Je.getTransfer(v.colorSpace)!==dt,(h!==v||d!==v.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,g=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Pe(new Ln(2,2),new Jt({name:"BackgroundMaterial",uniforms:er(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Je.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,g=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,b){y.getRGB(Oa,If(i)),n.buffers.color.setClear(Oa.r,Oa.g,Oa.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:x,addToRenderList:m}}function ey(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(M,L,W,C,U){let N=!1,D=h(C,W,L);r!==D&&(r=D,c(r.object)),N=g(M,C,W,U),N&&f(M,C,W,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,v(M,L,W,C),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,L,W){let C=W.wireframe===!0,U=n[M.id];U===void 0&&(U={},n[M.id]=U);let N=U[L.id];N===void 0&&(N={},U[L.id]=N);let D=N[C];return D===void 0&&(D=d(l()),N[C]=D),D}function d(M){let L=[],W=[],C=[];for(let U=0;U<t;U++)L[U]=0,W[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:C,object:M,attributes:{},index:null}}function g(M,L,W,C){let U=r.attributes,N=L.attributes,D=0,q=W.getAttributes();for(let B in q)if(q[B].location>=0){let ne=U[B],re=N[B];if(re===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),ne===void 0||ne.attribute!==re||re&&ne.data!==re.data)return!0;D++}return r.attributesNum!==D||r.index!==C}function f(M,L,W,C){let U={},N=L.attributes,D=0,q=W.getAttributes();for(let B in q)if(q[B].location>=0){let ne=N[B];ne===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor));let re={};re.attribute=ne,ne&&ne.data&&(re.data=ne.data),U[B]=re,D++}r.attributes=U,r.attributesNum=D,r.index=C}function x(){let M=r.newAttributes;for(let L=0,W=M.length;L<W;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){let W=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;W[M]=1,C[M]===0&&(i.enableVertexAttribArray(M),C[M]=1),U[M]!==L&&(i.vertexAttribDivisor(M,L),U[M]=L)}function y(){let M=r.newAttributes,L=r.enabledAttributes;for(let W=0,C=L.length;W<C;W++)L[W]!==M[W]&&(i.disableVertexAttribArray(W),L[W]=0)}function b(M,L,W,C,U,N,D){D===!0?i.vertexAttribIPointer(M,L,W,U,N):i.vertexAttribPointer(M,L,W,C,U,N)}function v(M,L,W,C){x();let U=C.attributes,N=W.getAttributes(),D=L.defaultAttributeValues;for(let q in N){let B=N[q];if(B.location>=0){let J=U[q];if(J===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){let ne=J.normalized,re=J.itemSize,xe=e.get(J);if(xe===void 0)continue;let De=xe.buffer,H=xe.type,K=xe.bytesPerElement,oe=H===i.INT||H===i.UNSIGNED_INT||J.gpuType===lu;if(J.isInterleavedBufferAttribute){let V=J.data,ie=V.stride,ce=J.offset;if(V.isInstancedInterleavedBuffer){for(let ve=0;ve<B.locationSize;ve++)p(B.location+ve,V.meshPerAttribute);M.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ve=0;ve<B.locationSize;ve++)m(B.location+ve);i.bindBuffer(i.ARRAY_BUFFER,De);for(let ve=0;ve<B.locationSize;ve++)b(B.location+ve,re/B.locationSize,H,ne,ie*K,(ce+re/B.locationSize*ve)*K,oe)}else{if(J.isInstancedBufferAttribute){for(let V=0;V<B.locationSize;V++)p(B.location+V,J.meshPerAttribute);M.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let V=0;V<B.locationSize;V++)m(B.location+V);i.bindBuffer(i.ARRAY_BUFFER,De);for(let V=0;V<B.locationSize;V++)b(B.location+V,re/B.locationSize,H,ne,re*K,re/B.locationSize*V*K,oe)}}else if(D!==void 0){let ne=D[q];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(B.location,ne);break;case 3:i.vertexAttrib3fv(B.location,ne);break;case 4:i.vertexAttrib4fv(B.location,ne);break;default:i.vertexAttrib1fv(B.location,ne)}}}}y()}function E(){I();for(let M in n){let L=n[M];for(let W in L){let C=L[W];for(let U in C)u(C[U].object),delete C[U];delete L[W]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let W in L){let C=L[W];for(let U in C)u(C[U].object),delete C[U];delete L[W]}delete n[M.id]}function R(M){for(let L in n){let W=n[L];if(W[M.id]===void 0)continue;let C=W[M.id];for(let U in C)u(C[U].object),delete C[U];delete W[M.id]}}function I(){_(),a=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:_,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function ty(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let g=0;for(let f=0;f<h;f++)g+=u[f];t.update(g,n,1)}function l(c,u,h,d){if(h===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<c.length;f++)a(c[f],u[f],d[f]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let f=0;for(let x=0;x<h;x++)f+=u[x]*d[x];t.update(f,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ny(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let I=R===ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==si&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Cn&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:g,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:E,maxSamples:T}}function iy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ei,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let g=h.length!==0||d||n!==0||s;return s=d,n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,g){let f=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||f===null||f.length===0||r&&!m)r?u(null):c();else{let y=r?0:n,b=y*4,v=p.clippingState||null;l.value=v,v=u(f,d,b,g);for(let E=0;E!==b;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,g,f){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,f!==!0||m===null){let p=g+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=g;b!==x;++b,v+=4)a.copy(h[b]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function sy(i){let e=new WeakMap;function t(a,o){return o===ec?a.mapping=qs:o===tc&&(a.mapping=Ys),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ec||o===tc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Dc(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var tr=class extends lo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hs=4,bd=[.125,.215,.35,.446,.526,.582],es=20,Dl=new tr,Sd=new Ee,Nl=null,Ul=0,kl=0,Ol=!1,ji=(1+Math.sqrt(5))/2,Ls=1/ji,wd=[new P(-ji,Ls,0),new P(ji,Ls,0),new P(-Ls,0,ji),new P(Ls,0,ji),new P(0,ji,-Ls),new P(0,ji,Ls),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],uo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Nl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nl,Ul,kl),this._renderer.xr.enabled=Ol,e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ta,format:xn,colorSpace:qt,depthBuffer:!1},s=Td(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Td(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ry(r)),this._blurMaterial=ay(r,e,t)}return s}_compileMaterial(e){let t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,Dl)}_sceneToCubeUV(e,t,n,s){let o=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Sd),u.toneMapping=Ri,u.autoClear=!1;let g=new Rt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),f=new Pe(new hn,g),x=!1,m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,x=!0):(g.color.copy(Sd),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let b=this._cubeSize;Fa(s,y*b,p>2?b:0,b,b),u.setRenderTarget(s),x&&u.render(f,o),u.render(e,o)}f.geometry.dispose(),f.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===qs||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Fa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Dl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wd[(s-r-1)%wd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Pe(this._lodPlanes[s],c),d=c.uniforms,g=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*es-1),x=r/f,m=isFinite(r)?1+Math.floor(u*x):es;m>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);let p=[],y=0;for(let R=0;R<es;++R){let I=R/x,_=Math.exp(-I*I/2);p.push(_),R===0?y+=_:R<m&&(y+=2*_)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=f,d.mipInt.value=b-n;let v=this._sizeLods[s],E=3*v*(s>b-Hs?s-b+Hs:0),T=4*(this._cubeSize-v);Fa(t,E,T,3*v,2*v),l.setRenderTarget(t),l.render(h,Dl)}};function ry(i){let e=[],t=[],n=[],s=i,r=i-Hs+1+bd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Hs?l=bd[a-i+Hs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,f=6,x=3,m=2,p=1,y=new Float32Array(x*f*g),b=new Float32Array(m*f*g),v=new Float32Array(p*f*g);for(let T=0;T<g;T++){let R=T%3*2/3-1,I=T>2?0:-1,_=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];y.set(_,x*f*T),b.set(d,m*f*T);let M=[T,T,T,T,T,T];v.set(M,p*f*T)}let E=new bt;E.setAttribute("position",new wt(y,x)),E.setAttribute("uv",new wt(b,m)),E.setAttribute("faceIndex",new wt(v,p)),e.push(E),s>Hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Td(i,e,t){let n=new ai(i,e,t);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ay(i,e,t){let n=new Float32Array(es),s=new P(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Ed(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Ad(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function vu(){return`

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
	`}function oy(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ec||l===tc,u=l===qs||l===Ys;if(c||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new uo(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let g=o.image;return c&&g&&g.height>0||u&&g&&s(g)?(t===null&&(t=new uo(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ly(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cy(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let f in d.attributes)e.remove(d.attributes[f]);for(let f in d.morphAttributes){let x=d.morphAttributes[f];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let g=r.get(d);g&&(e.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER);let g=h.morphAttributes;for(let f in g){let x=g[f];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(h){let d=[],g=h.index,f=h.attributes.position,x=0;if(g!==null){let y=g.array;x=g.version;for(let b=0,v=y.length;b<v;b+=3){let E=y[b+0],T=y[b+1],R=y[b+2];d.push(E,T,T,R,R,E)}}else if(f!==void 0){let y=f.array;x=f.version;for(let b=0,v=y.length/3-1;b<v;b+=3){let E=b+0,T=b+1,R=b+2;d.push(E,T,T,R,R,E)}}else return;let m=new(Rf(d)?oo:ao)(d,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function uy(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,g){i.drawElements(n,g,r,d*a),t.update(g,n,1)}function c(d,g,f){f!==0&&(i.drawElementsInstanced(n,g,r,d*a,f),t.update(g,n,f))}function u(d,g,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,d,0,f);let m=0;for(let p=0;p<f;p++)m+=g[p];t.update(m,n,1)}function h(d,g,f,x){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,g[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,r,d,0,x,0,f);let p=0;for(let y=0;y<f;y++)p+=g[y]*x[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function hy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function dy(i,e,t){let n=new WeakMap,s=new st;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let _=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;g===!0&&(b=1),f===!0&&(b=2),x===!0&&(b=3);let v=o.attributes.position.count*b,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*E*4*h),R=new so(T,v,E,h);R.type=Cn,R.needsUpdate=!0;let I=b*4;for(let M=0;M<h;M++){let L=m[M],W=p[M],C=y[M],U=v*E*4*M;for(let N=0;N<L.count;N++){let D=N*I;g===!0&&(s.fromBufferAttribute(L,N),T[U+D+0]=s.x,T[U+D+1]=s.y,T[U+D+2]=s.z,T[U+D+3]=0),f===!0&&(s.fromBufferAttribute(W,N),T[U+D+4]=s.x,T[U+D+5]=s.y,T[U+D+6]=s.z,T[U+D+7]=0),x===!0&&(s.fromBufferAttribute(C,N),T[U+D+8]=s.x,T[U+D+9]=s.y,T[U+D+10]=s.z,T[U+D+11]=C.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new Ie(v,E)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];let f=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function fy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var ho=class extends Pt{constructor(e,t,n,s,r,a,o,l,c,u=Vs){if(u!==Vs&&u!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vs&&(n=is),n===void 0&&u===Ks&&(n=$s),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Lf=new Pt,Rd=new ho(1,1),Df=new so,Nf=new Pc,Uf=new co,Cd=[],Id=[],Pd=new Float32Array(16),Ld=new Float32Array(9),Dd=new Float32Array(4);function dr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Cd[s];if(r===void 0&&(r=new Float32Array(s),Cd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ko(i,e){let t=Id[e];t===void 0&&(t=new Int32Array(e),Id[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function py(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function my(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function _y(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;Dd.set(n),i.uniformMatrix2fv(this.addr,!1,Dd),Nt(t,n)}}function yy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;Ld.set(n),i.uniformMatrix3fv(this.addr,!1,Ld),Nt(t,n)}}function vy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;Pd.set(n),i.uniformMatrix4fv(this.addr,!1,Pd),Nt(t,n)}}function My(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function by(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function Sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function Ty(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function Ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function Ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function Cy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rd.compareFunction=Ef,r=Rd):r=Lf,t.setTexture2D(e||r,s)}function Iy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Nf,s)}function Py(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Uf,s)}function Ly(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Df,s)}function Dy(i){switch(i){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return xy;case 35674:return _y;case 35675:return yy;case 35676:return vy;case 5124:case 35670:return My;case 35667:case 35671:return by;case 35668:case 35672:return Sy;case 35669:case 35673:return wy;case 5125:return Ty;case 36294:return Ey;case 36295:return Ay;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Ly}}function Ny(i,e){i.uniform1fv(this.addr,e)}function Uy(i,e){let t=dr(e,this.size,2);i.uniform2fv(this.addr,t)}function ky(i,e){let t=dr(e,this.size,3);i.uniform3fv(this.addr,t)}function Oy(i,e){let t=dr(e,this.size,4);i.uniform4fv(this.addr,t)}function Fy(i,e){let t=dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function By(i,e){let t=dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zy(i,e){let t=dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Hy(i,e){i.uniform1iv(this.addr,e)}function Vy(i,e){i.uniform2iv(this.addr,e)}function Gy(i,e){i.uniform3iv(this.addr,e)}function Wy(i,e){i.uniform4iv(this.addr,e)}function Xy(i,e){i.uniform1uiv(this.addr,e)}function qy(i,e){i.uniform2uiv(this.addr,e)}function Yy(i,e){i.uniform3uiv(this.addr,e)}function $y(i,e){i.uniform4uiv(this.addr,e)}function Ky(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Lf,r[a])}function Zy(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Nf,r[a])}function Jy(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Uf,r[a])}function jy(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Df,r[a])}function Qy(i){switch(i){case 5126:return Ny;case 35664:return Uy;case 35665:return ky;case 35666:return Oy;case 35674:return Fy;case 35675:return By;case 35676:return zy;case 5124:case 35670:return Hy;case 35667:case 35671:return Vy;case 35668:case 35672:return Gy;case 35669:case 35673:return Wy;case 5125:return Xy;case 36294:return qy;case 36295:return Yy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return jy}}var Nc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dy(t.type)}},Uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qy(t.type)}},kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Fl=/(\w+)(\])?(\[|\.)?/g;function Nd(i,e){i.seq.push(e),i.map[e.id]=e}function ev(i,e,t){let n=i.name,s=n.length;for(Fl.lastIndex=0;;){let r=Fl.exec(n),a=Fl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nd(t,c===void 0?new Nc(o,i,e):new Uc(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new kc(o),Nd(t,h)),t=h}}}var Ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ev(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ud(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var tv=37297,nv=0;function iv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var kd=new We;function sv(i){Je._getMatrix(kd,Je.workingColorSpace,i);let e=`mat3( ${kd.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Uo:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Od(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+iv(i.getShaderSource(e),a)}else return s}function rv(i,e){let t=sv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function av(i,e){let t;switch(e){case pg:t="Linear";break;case mg:t="Reinhard";break;case gg:t="Cineon";break;case xg:t="ACESFilmic";break;case yg:t="AgX";break;case vg:t="Neutral";break;case _g:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ba=new P;function ov(){Je.getLuminanceCoefficients(Ba);let i=Ba.x.toFixed(4),e=Ba.y.toFixed(4),t=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function cv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Vr(i){return i!==""}function Fd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(i){return i.replace(hv,fv)}var dv=new Map;function fv(i,e){let t=Ye[e];if(t===void 0){let n=dv.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Oc(t)}var pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(i){return i.replace(pv,mv)}function mv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function gv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ff?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===au?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function xv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _v(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function yv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pf:e="ENVMAP_BLENDING_MULTIPLY";break;case dg:e="ENVMAP_BLENDING_MIX";break;case fg:e="ENVMAP_BLENDING_ADD";break}return e}function vv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Mv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=gv(t),c=xv(t),u=_v(t),h=yv(t),d=vv(t),g=lv(t),f=cv(r),x=s.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Vr).join(`
`),p.length>0&&(p+=`
`)):(m=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),p=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ri?av("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,rv("linearToOutputTexel",t.outputColorSpace),ov(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),a=Oc(a),a=Fd(a,t),a=Bd(a,t),o=Oc(o),o=Fd(o,t),o=Bd(o,t),a=zd(a),o=zd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=y+m+a,v=y+p+o,E=Ud(s,s.VERTEX_SHADER,b),T=Ud(s,s.FRAGMENT_SHADER,v);s.attachShader(x,E),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(x).trim(),C=s.getShaderInfoLog(E).trim(),U=s.getShaderInfoLog(T).trim(),N=!0,D=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,T);else{let q=Od(s,E,"vertex"),B=Od(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+q+`
`+B)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(C===""||U==="")&&(D=!1);D&&(L.diagnostics={runnable:N,programLog:W,vertexShader:{log:C,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(E),s.deleteShader(T),I=new Ws(s,x),_=uv(s,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let _;this.getAttributes=function(){return _===void 0&&R(this),_};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,tv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}var bv=0,Fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bc(e),t.set(e,n)),n}},Bc=class{constructor(e){this.id=bv++,this.code=e,this.usedTimes=0}};function Sv(i,e,t,n,s,r,a){let o=new ro,l=new Fc,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,g=s.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,M,L,W,C){let U=W.fog,N=C.geometry,D=_.isMeshStandardMaterial?W.environment:null,q=(_.isMeshStandardMaterial?t:e).get(_.envMap||D),B=q&&q.mapping===Do?q.image.height:null,J=f[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let ne=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,re=ne!==void 0?ne.length:0,xe=0;N.morphAttributes.position!==void 0&&(xe=1),N.morphAttributes.normal!==void 0&&(xe=2),N.morphAttributes.color!==void 0&&(xe=3);let De,H,K,oe;if(J){let ut=Bn[J];De=ut.vertexShader,H=ut.fragmentShader}else De=_.vertexShader,H=_.fragmentShader,l.update(_),K=l.getVertexShaderID(_),oe=l.getFragmentShaderID(_);let V=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),ce=C.isInstancedMesh===!0,ve=C.isBatchedMesh===!0,ke=!!_.map,Xe=!!_.matcap,at=!!q,k=!!_.aoMap,Tt=!!_.lightMap,$e=!!_.bumpMap,Ke=!!_.normalMap,Me=!!_.displacementMap,it=!!_.emissiveMap,Ne=!!_.metalnessMap,A=!!_.roughnessMap,S=_.anisotropy>0,G=_.clearcoat>0,j=_.dispersion>0,te=_.iridescence>0,Z=_.sheen>0,be=_.transmission>0,ue=S&&!!_.anisotropyMap,_e=G&&!!_.clearcoatMap,se=G&&!!_.clearcoatNormalMap,ee=G&&!!_.clearcoatRoughnessMap,de=te&&!!_.iridescenceMap,Oe=te&&!!_.iridescenceThicknessMap,Fe=Z&&!!_.sheenColorMap,ye=Z&&!!_.sheenRoughnessMap,Qe=!!_.specularMap,qe=!!_.specularColorMap,pt=!!_.specularIntensityMap,O=be&&!!_.transmissionMap,he=be&&!!_.thicknessMap,$=!!_.gradientMap,Q=!!_.alphaMap,me=_.alphaTest>0,fe=!!_.alphaHash,Ve=!!_.extensions,St=Ri;_.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(St=i.toneMapping);let Vt={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:De,fragmentShader:H,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:oe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:ve,batchingColor:ve&&C._colorsTexture!==null,instancing:ce,instancingColor:ce&&C.instanceColor!==null,instancingMorph:ce&&C.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:V===null?i.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:qt,alphaToCoverage:!!_.alphaToCoverage,map:ke,matcap:Xe,envMap:at,envMapMode:at&&q.mapping,envMapCubeUVHeight:B,aoMap:k,lightMap:Tt,bumpMap:$e,normalMap:Ke,displacementMap:d&&Me,emissiveMap:it,normalMapObjectSpace:Ke&&_.normalMapType===Eg,normalMapTangentSpace:Ke&&_.normalMapType===_u,metalnessMap:Ne,roughnessMap:A,anisotropy:S,anisotropyMap:ue,clearcoat:G,clearcoatMap:_e,clearcoatNormalMap:se,clearcoatRoughnessMap:ee,dispersion:j,iridescence:te,iridescenceMap:de,iridescenceThicknessMap:Oe,sheen:Z,sheenColorMap:Fe,sheenRoughnessMap:ye,specularMap:Qe,specularColorMap:qe,specularIntensityMap:pt,transmission:be,transmissionMap:O,thicknessMap:he,gradientMap:$,opaque:_.transparent===!1&&_.blending===In&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:me,alphaHash:fe,combine:_.combine,mapUv:ke&&x(_.map.channel),aoMapUv:k&&x(_.aoMap.channel),lightMapUv:Tt&&x(_.lightMap.channel),bumpMapUv:$e&&x(_.bumpMap.channel),normalMapUv:Ke&&x(_.normalMap.channel),displacementMapUv:Me&&x(_.displacementMap.channel),emissiveMapUv:it&&x(_.emissiveMap.channel),metalnessMapUv:Ne&&x(_.metalnessMap.channel),roughnessMapUv:A&&x(_.roughnessMap.channel),anisotropyMapUv:ue&&x(_.anisotropyMap.channel),clearcoatMapUv:_e&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(_.sheenRoughnessMap.channel),specularMapUv:Qe&&x(_.specularMap.channel),specularColorMapUv:qe&&x(_.specularColorMap.channel),specularIntensityMapUv:pt&&x(_.specularIntensityMap.channel),transmissionMapUv:O&&x(_.transmissionMap.channel),thicknessMapUv:he&&x(_.thicknessMap.channel),alphaMapUv:Q&&x(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ke||S),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!N.attributes.uv&&(ke||Q),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ie,skinning:C.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:ke&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:it&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===At,flipSided:_.side===Xt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ve&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&_.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function p(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)M.push(L),M.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(y(M,_),b(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function y(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function b(_,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),_.push(o.mask)}function v(_){let M=f[_.type],L;if(M){let W=Bn[M];L=f0.clone(W.uniforms)}else L=_.uniforms;return L}function E(_,M){let L;for(let W=0,C=u.length;W<C;W++){let U=u[W];if(U.cacheKey===M){L=U,++L.usedTimes;break}}return L===void 0&&(L=new Mv(i,M,_,r),u.push(L)),L}function T(_){if(--_.usedTimes===0){let M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),_.destroy()}}function R(_){l.remove(_)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:I}}function wv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Tv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,g,f,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:g,groupOrder:f,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=g,p.groupOrder=f,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function o(h,d,g,f,x,m){let p=a(h,d,g,f,x,m);g.transmission>0?n.push(p):g.transparent===!0?s.push(p):t.push(p)}function l(h,d,g,f,x,m){let p=a(h,d,g,f,x,m);g.transmission>0?n.unshift(p):g.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Tv),n.length>1&&n.sort(d||Vd),s.length>1&&s.sort(d||Vd)}function u(){for(let h=e,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Ev(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Gd,i.set(n,[a])):s>=r.length?(a=new Gd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Av(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ee};break;case"SpotLight":t={position:new P,direction:new P,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Rv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Cv=0;function Iv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Pv(i){let e=new Av,t=Rv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new ze,a=new ze;function o(c){let u=0,h=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let g=0,f=0,x=0,m=0,p=0,y=0,b=0,v=0,E=0,T=0,R=0;c.sort(Iv);for(let _=0,M=c.length;_<M;_++){let L=c[_],W=L.color,C=L.intensity,U=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=W.r*C,h+=W.g*C,d+=W.b*C;else if(L.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(L.sh.coefficients[D],C);R++}else if(L.isDirectionalLight){let D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let q=L.shadow,B=t.get(L);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,n.directionalShadow[g]=B,n.directionalShadowMap[g]=N,n.directionalShadowMatrix[g]=L.shadow.matrix,y++}n.directional[g]=D,g++}else if(L.isSpotLight){let D=e.get(L);D.position.setFromMatrixPosition(L.matrixWorld),D.color.copy(W).multiplyScalar(C),D.distance=U,D.coneCos=Math.cos(L.angle),D.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),D.decay=L.decay,n.spot[x]=D;let q=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,q.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[x]=q.matrix,L.castShadow){let B=t.get(L);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=N,v++}x++}else if(L.isRectAreaLight){let D=e.get(L);D.color.copy(W).multiplyScalar(C),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=D,m++}else if(L.isPointLight){let D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),D.distance=L.distance,D.decay=L.decay,L.castShadow){let q=L.shadow,B=t.get(L);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,B.shadowCameraNear=q.camera.near,B.shadowCameraFar=q.camera.far,n.pointShadow[f]=B,n.pointShadowMap[f]=N,n.pointShadowMatrix[f]=L.shadow.matrix,b++}n.point[f]=D,f++}else if(L.isHemisphereLight){let D=e.get(L);D.skyColor.copy(L.color).multiplyScalar(C),D.groundColor.copy(L.groundColor).multiplyScalar(C),n.hemi[p]=D,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==g||I.pointLength!==f||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==b||I.numSpotShadows!==v||I.numSpotMaps!==E||I.numLightProbes!==R)&&(n.directional.length=g,n.spot.length=x,n.rectArea.length=m,n.point.length=f,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.directionalLength=g,I.pointLength=f,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=b,I.numSpotShadows=v,I.numSpotMaps=E,I.numLightProbes=R,n.version=Cv++)}function l(c,u){let h=0,d=0,g=0,f=0,x=0,m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let b=c[p];if(b.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(b.isSpotLight){let v=n.spot[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),g++}else if(b.isRectAreaLight){let v=n.rectArea[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),f++}else if(b.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Wd(i){let e=new Pv(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Lv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Wd(i),e.set(s,[o])):r>=a.length?(o=new Wd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var zc=class extends Zt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hc=class extends Zt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nv=`uniform sampler2D shadow_pass;
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
}`;function Uv(i,e,t){let n=new Kr,s=new Ie,r=new Ie,a=new st,o=new zc({depthPacking:Tg}),l=new Hc,c={},u=t.maxTextureSize,h={[_n]:Xt,[Xt]:_n,[At]:At},d=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Dv,fragmentShader:Nv}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let f=new bt;f.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pe(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ff;let p=this.type;this.render=function(T,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let _=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Ai),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let C=p!==Qn&&this.type===Qn,U=p===Qn&&this.type!==Qn;for(let N=0,D=T.length;N<D;N++){let q=T[N],B=q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let J=B.getFrameExtents();if(s.multiply(J),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,B.mapSize.y=r.y)),B.map===null||C===!0||U===!0){let re=this.type!==Qn?{minFilter:kt,magFilter:kt}:{};B.map!==null&&B.map.dispose(),B.map=new ai(s.x,s.y,re),B.map.texture.name=q.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();let ne=B.getViewportCount();for(let re=0;re<ne;re++){let xe=B.getViewport(re);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),W.viewport(a),B.updateMatrices(q,re),n=B.getFrustum(),v(R,I,B.camera,q,this.type)}B.isPointLightShadow!==!0&&this.type===Qn&&y(B,I),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,M,L)};function y(T,R){let I=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ai(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,x,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,I,g,x,null)}function b(T,R,I,_){let M=null,L=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=M.uuid,C=R.uuid,U=c[W];U===void 0&&(U={},c[W]=U);let N=U[C];N===void 0&&(N=M.clone(),U[C]=N,R.addEventListener("dispose",E)),M=N}if(M.visible=R.visible,M.wireframe=R.wireframe,_===Qn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let W=i.properties.get(M);W.light=I}return M}function v(T,R,I,_,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Qn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let C=e.update(T),U=T.material;if(Array.isArray(U)){let N=C.groups;for(let D=0,q=N.length;D<q;D++){let B=N[D],J=U[B.materialIndex];if(J&&J.visible){let ne=b(T,J,_,M);T.onBeforeShadow(i,T,R,I,C,ne,B),i.renderBufferDirect(I,null,C,ne,T,B),T.onAfterShadow(i,T,R,I,C,ne,B)}}}else if(U.visible){let N=b(T,U,_,M);T.onBeforeShadow(i,T,R,I,C,N,null),i.renderBufferDirect(I,null,C,N,T,null),T.onAfterShadow(i,T,R,I,C,N,null)}}let W=T.children;for(let C=0,U=W.length;C<U;C++)v(W[C],R,I,_,M)}function E(T){T.target.removeEventListener("dispose",E);for(let I in c){let _=c[I],M=T.target.uuid;M in _&&(_[M].dispose(),delete _[M])}}}var kv={[Yl]:$l,[Kl]:jl,[Zl]:Ql,[Xs]:Jl,[$l]:Yl,[jl]:Kl,[Ql]:Zl,[Jl]:Xs};function Ov(i,e){function t(){let O=!1,he=new st,$=null,Q=new st(0,0,0,0);return{setMask:function(me){$!==me&&!O&&(i.colorMask(me,me,me,me),$=me)},setLocked:function(me){O=me},setClear:function(me,fe,Ve,St,Vt){Vt===!0&&(me*=St,fe*=St,Ve*=St),he.set(me,fe,Ve,St),Q.equals(he)===!1&&(i.clearColor(me,fe,Ve,St),Q.copy(he))},reset:function(){O=!1,$=null,Q.set(-1,0,0,0)}}}function n(){let O=!1,he=!1,$=null,Q=null,me=null;return{setReversed:function(fe){if(he!==fe){let Ve=e.get("EXT_clip_control");he?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let St=me;me=null,this.setClear(St)}he=fe},getReversed:function(){return he},setTest:function(fe){fe?V(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(fe){$!==fe&&!O&&(i.depthMask(fe),$=fe)},setFunc:function(fe){if(he&&(fe=kv[fe]),Q!==fe){switch(fe){case Yl:i.depthFunc(i.NEVER);break;case $l:i.depthFunc(i.ALWAYS);break;case Kl:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case Zl:i.depthFunc(i.EQUAL);break;case Jl:i.depthFunc(i.GEQUAL);break;case jl:i.depthFunc(i.GREATER);break;case Ql:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=fe}},setLocked:function(fe){O=fe},setClear:function(fe){me!==fe&&(he&&(fe=1-fe),i.clearDepth(fe),me=fe)},reset:function(){O=!1,$=null,Q=null,me=null,he=!1}}}function s(){let O=!1,he=null,$=null,Q=null,me=null,fe=null,Ve=null,St=null,Vt=null;return{setTest:function(ut){O||(ut?V(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(ut){he!==ut&&!O&&(i.stencilMask(ut),he=ut)},setFunc:function(ut,Sn,Xn){($!==ut||Q!==Sn||me!==Xn)&&(i.stencilFunc(ut,Sn,Xn),$=ut,Q=Sn,me=Xn)},setOp:function(ut,Sn,Xn){(fe!==ut||Ve!==Sn||St!==Xn)&&(i.stencilOp(ut,Sn,Xn),fe=ut,Ve=Sn,St=Xn)},setLocked:function(ut){O=ut},setClear:function(ut){Vt!==ut&&(i.clearStencil(ut),Vt=ut)},reset:function(){O=!1,he=null,$=null,Q=null,me=null,fe=null,Ve=null,St=null,Vt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,g=[],f=null,x=!1,m=null,p=null,y=null,b=null,v=null,E=null,T=null,R=new Ee(0,0,0),I=0,_=!1,M=null,L=null,W=null,C=null,U=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,q=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(B)[1]),D=q>=1):B.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),D=q>=2);let J=null,ne={},re=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),De=new st().fromArray(re),H=new st().fromArray(xe);function K(O,he,$,Q){let me=new Uint8Array(4),fe=i.createTexture();i.bindTexture(O,fe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<$;Ve++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(he+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return fe}let oe={};oe[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),V(i.DEPTH_TEST),a.setFunc(Xs),$e(!1),Ke(Kh),V(i.CULL_FACE),k(Ai);function V(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function ie(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function ce(O,he){return h[O]!==he?(i.bindFramebuffer(O,he),h[O]=he,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=he),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=he),!0):!1}function ve(O,he){let $=g,Q=!1;if(O){$=d.get(he),$===void 0&&($=[],d.set(he,$));let me=O.textures;if($.length!==me.length||$[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Ve=me.length;fe<Ve;fe++)$[fe]=i.COLOR_ATTACHMENT0+fe;$.length=me.length,Q=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Q=!0);Q&&i.drawBuffers($)}function ke(O){return f!==O?(i.useProgram(O),f=O,!0):!1}let Xe={[Qi]:i.FUNC_ADD,[Km]:i.FUNC_SUBTRACT,[Zm]:i.FUNC_REVERSE_SUBTRACT};Xe[Jm]=i.MIN,Xe[jm]=i.MAX;let at={[Qm]:i.ZERO,[eg]:i.ONE,[tg]:i.SRC_COLOR,[Xl]:i.SRC_ALPHA,[og]:i.SRC_ALPHA_SATURATE,[rg]:i.DST_COLOR,[ig]:i.DST_ALPHA,[ng]:i.ONE_MINUS_SRC_COLOR,[ql]:i.ONE_MINUS_SRC_ALPHA,[ag]:i.ONE_MINUS_DST_COLOR,[sg]:i.ONE_MINUS_DST_ALPHA,[lg]:i.CONSTANT_COLOR,[cg]:i.ONE_MINUS_CONSTANT_COLOR,[ug]:i.CONSTANT_ALPHA,[hg]:i.ONE_MINUS_CONSTANT_ALPHA};function k(O,he,$,Q,me,fe,Ve,St,Vt,ut){if(O===Ai){x===!0&&(ie(i.BLEND),x=!1);return}if(x===!1&&(V(i.BLEND),x=!0),O!==$m){if(O!==m||ut!==_){if((p!==Qi||v!==Qi)&&(i.blendEquation(i.FUNC_ADD),p=Qi,v=Qi),ut)switch(O){case In:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hn:i.blendFunc(i.ONE,i.ONE);break;case Zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case In:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,b=null,E=null,T=null,R.set(0,0,0),I=0,m=O,_=ut}return}me=me||he,fe=fe||$,Ve=Ve||Q,(he!==p||me!==v)&&(i.blendEquationSeparate(Xe[he],Xe[me]),p=he,v=me),($!==y||Q!==b||fe!==E||Ve!==T)&&(i.blendFuncSeparate(at[$],at[Q],at[fe],at[Ve]),y=$,b=Q,E=fe,T=Ve),(St.equals(R)===!1||Vt!==I)&&(i.blendColor(St.r,St.g,St.b,Vt),R.copy(St),I=Vt),m=O,_=!1}function Tt(O,he){O.side===At?ie(i.CULL_FACE):V(i.CULL_FACE);let $=O.side===Xt;he&&($=!$),$e($),O.blending===In&&O.transparent===!1?k(Ai):k(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let Q=O.stencilWrite;o.setTest(Q),Q&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),it(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(O){M!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),M=O)}function Ke(O){O!==qm?(V(i.CULL_FACE),O!==L&&(O===Kh?i.cullFace(i.BACK):O===Ym?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),L=O}function Me(O){O!==W&&(D&&i.lineWidth(O),W=O)}function it(O,he,$){O?(V(i.POLYGON_OFFSET_FILL),(C!==he||U!==$)&&(i.polygonOffset(he,$),C=he,U=$)):ie(i.POLYGON_OFFSET_FILL)}function Ne(O){O?V(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function A(O){O===void 0&&(O=i.TEXTURE0+N-1),J!==O&&(i.activeTexture(O),J=O)}function S(O,he,$){$===void 0&&(J===null?$=i.TEXTURE0+N-1:$=J);let Q=ne[$];Q===void 0&&(Q={type:void 0,texture:void 0},ne[$]=Q),(Q.type!==O||Q.texture!==he)&&(J!==$&&(i.activeTexture($),J=$),i.bindTexture(O,he||oe[O]),Q.type=O,Q.texture=he)}function G(){let O=ne[J];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(O){De.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),De.copy(O))}function ye(O){H.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),H.copy(O))}function Qe(O,he){let $=c.get(he);$===void 0&&($=new WeakMap,c.set(he,$));let Q=$.get(O);Q===void 0&&(Q=i.getUniformBlockIndex(he,O.name),$.set(O,Q))}function qe(O,he){let Q=c.get(he).get(O);l.get(he)!==Q&&(i.uniformBlockBinding(he,Q,O.__bindingPointIndex),l.set(he,Q))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},J=null,ne={},h={},d=new WeakMap,g=[],f=null,x=!1,m=null,p=null,y=null,b=null,v=null,E=null,T=null,R=new Ee(0,0,0),I=0,_=!1,M=null,L=null,W=null,C=null,U=null,De.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:V,disable:ie,bindFramebuffer:ce,drawBuffers:ve,useProgram:ke,setBlending:k,setMaterial:Tt,setFlipSided:$e,setCullFace:Ke,setLineWidth:Me,setPolygonOffset:it,setScissorTest:Ne,activeTexture:A,bindTexture:S,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:te,texImage2D:de,texImage3D:Oe,updateUBOMapping:Qe,uniformBlockBinding:qe,texStorage2D:se,texStorage3D:ee,texSubImage2D:Z,texSubImage3D:be,compressedTexSubImage2D:ue,compressedTexSubImage3D:_e,scissor:Fe,viewport:ye,reset:pt}}function Xd(i,e,t,n){let s=Fv(n);switch(t){case yf:return i*e;case Mf:return i*e;case bf:return i*e*2;case hu:return i*e/s.components*s.byteLength;case du:return i*e/s.components*s.byteLength;case Sf:return i*e*2/s.components*s.byteLength;case fu:return i*e*2/s.components*s.byteLength;case vf:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case pu:return i*e*4/s.components*s.byteLength;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ja:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:case rc:return Math.max(i,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(i,8)*Math.max(e,8)/2;case ac:case oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case eo:case Sc:case wc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wf:case Tc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ec:case Ac:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fv(i){switch(i){case si:case gf:return{byteLength:1,components:1};case Yr:case xf:case ta:return{byteLength:2,components:1};case cu:case uu:return{byteLength:2,components:4};case is:case lu:case Cn:return{byteLength:4,components:1};case _f:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Bv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,u=new WeakMap,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,S){return g?new OffscreenCanvas(A,S):$r("canvas")}function x(A,S,G){let j=1,te=Ne(A);if((te.width>G||te.height>G)&&(j=G/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let Z=Math.floor(j*te.width),be=Math.floor(j*te.height);h===void 0&&(h=f(Z,be));let ue=S?f(Z,be):h;return ue.width=Z,ue.height=be,ue.getContext("2d").drawImage(A,0,0,Z,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+be+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,S,G,j,te=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=S;if(S===i.RED&&(G===i.FLOAT&&(Z=i.R32F),G===i.HALF_FLOAT&&(Z=i.R16F),G===i.UNSIGNED_BYTE&&(Z=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.R8UI),G===i.UNSIGNED_SHORT&&(Z=i.R16UI),G===i.UNSIGNED_INT&&(Z=i.R32UI),G===i.BYTE&&(Z=i.R8I),G===i.SHORT&&(Z=i.R16I),G===i.INT&&(Z=i.R32I)),S===i.RG&&(G===i.FLOAT&&(Z=i.RG32F),G===i.HALF_FLOAT&&(Z=i.RG16F),G===i.UNSIGNED_BYTE&&(Z=i.RG8)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RG8UI),G===i.UNSIGNED_SHORT&&(Z=i.RG16UI),G===i.UNSIGNED_INT&&(Z=i.RG32UI),G===i.BYTE&&(Z=i.RG8I),G===i.SHORT&&(Z=i.RG16I),G===i.INT&&(Z=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),G===i.UNSIGNED_INT&&(Z=i.RGB32UI),G===i.BYTE&&(Z=i.RGB8I),G===i.SHORT&&(Z=i.RGB16I),G===i.INT&&(Z=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),G===i.UNSIGNED_INT&&(Z=i.RGBA32UI),G===i.BYTE&&(Z=i.RGBA8I),G===i.SHORT&&(Z=i.RGBA16I),G===i.INT&&(Z=i.RGBA32I)),S===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),S===i.RGBA){let be=te?Uo:Je.getTransfer(j);G===i.FLOAT&&(Z=i.RGBA32F),G===i.HALF_FLOAT&&(Z=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Z=be===dt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(A,S){let G;return A?S===null||S===is||S===$s?G=i.DEPTH24_STENCIL8:S===Cn?G=i.DEPTH32F_STENCIL8:S===Yr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===is||S===$s?G=i.DEPTH_COMPONENT24:S===Cn?G=i.DEPTH_COMPONENT32F:S===Yr&&(G=i.DEPTH_COMPONENT16),G}function E(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==kt&&A.minFilter!==sn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){let S=A.target;S.removeEventListener("dispose",T),I(S),S.isVideoTexture&&u.delete(S)}function R(A){let S=A.target;S.removeEventListener("dispose",R),M(S)}function I(A){let S=n.get(A);if(S.__webglInit===void 0)return;let G=A.source,j=d.get(G);if(j){let te=j[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&_(A),Object.keys(j).length===0&&d.delete(G)}n.remove(A)}function _(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let G=A.source,j=d.get(G);delete j[S.__cacheKey],a.memory.textures--}function M(A){let S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let te=0;te<S.__webglFramebuffer[j].length;te++)i.deleteFramebuffer(S.__webglFramebuffer[j][te]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=A.textures;for(let j=0,te=G.length;j<te;j++){let Z=n.get(G[j]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(G[j])}n.remove(A)}let L=0;function W(){L=0}function C(){let A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function U(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function N(A,S){let G=n.get(A);if(A.isVideoTexture&&Me(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){let j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(G,A,S);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function D(A,S){let G=n.get(A);if(A.version>0&&G.__version!==A.version){H(G,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function q(A,S){let G=n.get(A);if(A.version>0&&G.__version!==A.version){H(G,A,S);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function B(A,S){let G=n.get(A);if(A.version>0&&G.__version!==A.version){K(G,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}let J={[ts]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[ns]:i.MIRRORED_REPEAT},ne={[kt]:i.NEAREST,[ou]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},re={[Ag]:i.NEVER,[Dg]:i.ALWAYS,[Rg]:i.LESS,[Ef]:i.LEQUAL,[Cg]:i.EQUAL,[Lg]:i.GEQUAL,[Ig]:i.GREATER,[Pg]:i.NOTEQUAL};function xe(A,S){if(S.type===Cn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===sn||S.magFilter===Gr||S.magFilter===Fs||S.magFilter===zn||S.minFilter===sn||S.minFilter===Gr||S.minFilter===Fs||S.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,J[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,J[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,J[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ne[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ne[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===kt||S.minFilter!==Fs&&S.minFilter!==zn||S.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function De(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));let j=S.source,te=d.get(j);te===void 0&&(te={},d.set(j,te));let Z=U(S);if(Z!==A.__cacheKey){te[Z]===void 0&&(te[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),te[Z].usedTimes++;let be=te[A.__cacheKey];be!==void 0&&(te[A.__cacheKey].usedTimes--,be.usedTimes===0&&_(S)),A.__cacheKey=Z,A.__webglTexture=te[Z].texture}return G}function H(A,S,G){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);let te=De(A,S),Z=S.source;t.bindTexture(j,A.__webglTexture,i.TEXTURE0+G);let be=n.get(Z);if(Z.version!==be.__version||te===!0){t.activeTexture(i.TEXTURE0+G);let ue=Je.getPrimaries(Je.workingColorSpace),_e=S.colorSpace===wi?null:Je.getPrimaries(S.colorSpace),se=S.colorSpace===wi||ue===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ee=x(S.image,!1,s.maxTextureSize);ee=it(S,ee);let de=r.convert(S.format,S.colorSpace),Oe=r.convert(S.type),Fe=b(S.internalFormat,de,Oe,S.colorSpace,S.isVideoTexture);xe(j,S);let ye,Qe=S.mipmaps,qe=S.isVideoTexture!==!0,pt=be.__version===void 0||te===!0,O=Z.dataReady,he=E(S,ee);if(S.isDepthTexture)Fe=v(S.format===Ks,S.type),pt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Fe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Fe,ee.width,ee.height,0,de,Oe,null));else if(S.isDataTexture)if(Qe.length>0){qe&&pt&&t.texStorage2D(i.TEXTURE_2D,he,Fe,Qe[0].width,Qe[0].height);for(let $=0,Q=Qe.length;$<Q;$++)ye=Qe[$],qe?O&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ye.width,ye.height,de,Oe,ye.data):t.texImage2D(i.TEXTURE_2D,$,Fe,ye.width,ye.height,0,de,Oe,ye.data);S.generateMipmaps=!1}else qe?(pt&&t.texStorage2D(i.TEXTURE_2D,he,Fe,ee.width,ee.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,de,Oe,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,ee.width,ee.height,0,de,Oe,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Fe,Qe[0].width,Qe[0].height,ee.depth);for(let $=0,Q=Qe.length;$<Q;$++)if(ye=Qe[$],S.format!==xn)if(de!==null)if(qe){if(O)if(S.layerUpdates.size>0){let me=Xd(ye.width,ye.height,S.format,S.type);for(let fe of S.layerUpdates){let Ve=ye.data.subarray(fe*me/ye.data.BYTES_PER_ELEMENT,(fe+1)*me/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,fe,ye.width,ye.height,1,de,Ve)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,ee.depth,de,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Fe,ye.width,ye.height,ee.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,ee.depth,de,Oe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Fe,ye.width,ye.height,ee.depth,0,de,Oe,ye.data)}else{qe&&pt&&t.texStorage2D(i.TEXTURE_2D,he,Fe,Qe[0].width,Qe[0].height);for(let $=0,Q=Qe.length;$<Q;$++)ye=Qe[$],S.format!==xn?de!==null?qe?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ye.width,ye.height,de,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Fe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?O&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ye.width,ye.height,de,Oe,ye.data):t.texImage2D(i.TEXTURE_2D,$,Fe,ye.width,ye.height,0,de,Oe,ye.data)}else if(S.isDataArrayTexture)if(qe){if(pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Fe,ee.width,ee.height,ee.depth),O)if(S.layerUpdates.size>0){let $=Xd(ee.width,ee.height,S.format,S.type);for(let Q of S.layerUpdates){let me=ee.data.subarray(Q*$/ee.data.BYTES_PER_ELEMENT,(Q+1)*$/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ee.width,ee.height,1,de,Oe,me)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,de,Oe,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,ee.width,ee.height,ee.depth,0,de,Oe,ee.data);else if(S.isData3DTexture)qe?(pt&&t.texStorage3D(i.TEXTURE_3D,he,Fe,ee.width,ee.height,ee.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,de,Oe,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,ee.width,ee.height,ee.depth,0,de,Oe,ee.data);else if(S.isFramebufferTexture){if(pt)if(qe)t.texStorage2D(i.TEXTURE_2D,he,Fe,ee.width,ee.height);else{let $=ee.width,Q=ee.height;for(let me=0;me<he;me++)t.texImage2D(i.TEXTURE_2D,me,Fe,$,Q,0,de,Oe,null),$>>=1,Q>>=1}}else if(Qe.length>0){if(qe&&pt){let $=Ne(Qe[0]);t.texStorage2D(i.TEXTURE_2D,he,Fe,$.width,$.height)}for(let $=0,Q=Qe.length;$<Q;$++)ye=Qe[$],qe?O&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,de,Oe,ye):t.texImage2D(i.TEXTURE_2D,$,Fe,de,Oe,ye);S.generateMipmaps=!1}else if(qe){if(pt){let $=Ne(ee);t.texStorage2D(i.TEXTURE_2D,he,Fe,$.width,$.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Oe,ee)}else t.texImage2D(i.TEXTURE_2D,0,Fe,de,Oe,ee);m(S)&&p(j),be.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function K(A,S,G){if(S.image.length!==6)return;let j=De(A,S),te=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);let Z=n.get(te);if(te.version!==Z.__version||j===!0){t.activeTexture(i.TEXTURE0+G);let be=Je.getPrimaries(Je.workingColorSpace),ue=S.colorSpace===wi?null:Je.getPrimaries(S.colorSpace),_e=S.colorSpace===wi||be===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let se=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,de=[];for(let Q=0;Q<6;Q++)!se&&!ee?de[Q]=x(S.image[Q],!0,s.maxCubemapSize):de[Q]=ee?S.image[Q].image:S.image[Q],de[Q]=it(S,de[Q]);let Oe=de[0],Fe=r.convert(S.format,S.colorSpace),ye=r.convert(S.type),Qe=b(S.internalFormat,Fe,ye,S.colorSpace),qe=S.isVideoTexture!==!0,pt=Z.__version===void 0||j===!0,O=te.dataReady,he=E(S,Oe);xe(i.TEXTURE_CUBE_MAP,S);let $;if(se){qe&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Qe,Oe.width,Oe.height);for(let Q=0;Q<6;Q++){$=de[Q].mipmaps;for(let me=0;me<$.length;me++){let fe=$[me];S.format!==xn?Fe!==null?qe?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,fe.width,fe.height,Fe,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,Qe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,fe.width,fe.height,Fe,ye,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,Qe,fe.width,fe.height,0,Fe,ye,fe.data)}}}else{if($=S.mipmaps,qe&&pt){$.length>0&&he++;let Q=Ne(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ee){qe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,de[Q].width,de[Q].height,Fe,ye,de[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Qe,de[Q].width,de[Q].height,0,Fe,ye,de[Q].data);for(let me=0;me<$.length;me++){let Ve=$[me].image[Q].image;qe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Ve.width,Ve.height,Fe,ye,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,Qe,Ve.width,Ve.height,0,Fe,ye,Ve.data)}}else{qe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Fe,ye,de[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Qe,Fe,ye,de[Q]);for(let me=0;me<$.length;me++){let fe=$[me];qe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Fe,ye,fe.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,Qe,Fe,ye,fe.image[Q])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),Z.__version=te.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function oe(A,S,G,j,te,Z){let be=r.convert(G.format,G.colorSpace),ue=r.convert(G.type),_e=b(G.internalFormat,be,ue,G.colorSpace),se=n.get(S),ee=n.get(G);if(ee.__renderTarget=S,!se.__hasExternalTextures){let de=Math.max(1,S.width>>Z),Oe=Math.max(1,S.height>>Z);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,_e,de,Oe,S.depth,0,be,ue,null):t.texImage2D(te,Z,_e,de,Oe,0,be,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ke(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,te,ee.__webglTexture,0,$e(S)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,te,ee.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function V(A,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let j=S.depthTexture,te=j&&j.isDepthTexture?j.type:null,Z=v(S.stencilBuffer,te),be=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=$e(S);Ke(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,Z,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,A)}else{let j=S.textures;for(let te=0;te<j.length;te++){let Z=j[te],be=r.convert(Z.format,Z.colorSpace),ue=r.convert(Z.type),_e=b(Z.internalFormat,be,ue,Z.colorSpace),se=$e(S);G&&Ke(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,_e,S.width,S.height):Ke(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,_e,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,_e,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ie(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);let te=j.__webglTexture,Z=$e(S);if(S.depthTexture.format===Vs)Ke(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(S.depthTexture.format===Ks)Ke(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ce(A){let S=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let j=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){let te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=j}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ie(S.__webglFramebuffer,A)}else if(G){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),V(S.__webglDepthbuffer[j],A,!1);else{let te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),V(S.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(A,S,G){let j=n.get(A);S!==void 0&&oe(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ce(A)}function ke(A){let S=A.texture,G=n.get(A),j=n.get(S);A.addEventListener("dispose",R);let te=A.textures,Z=A.isWebGLCubeRenderTarget===!0,be=te.length>1;if(be||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,a.memory.textures++),Z){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let _e=0;_e<S.mipmaps.length;_e++)G.__webglFramebuffer[ue][_e]=i.createFramebuffer()}else G.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)G.__webglFramebuffer[ue]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(be)for(let ue=0,_e=te.length;ue<_e;ue++){let se=n.get(te[ue]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Ke(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){let _e=te[ue];G.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ue]);let se=r.convert(_e.format,_e.colorSpace),ee=r.convert(_e.type),de=b(_e.internalFormat,se,ee,_e.colorSpace,A.isXRRenderTarget===!0),Oe=$e(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,de,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,G.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),V(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),xe(i.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)oe(G.__webglFramebuffer[ue][_e],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,_e);else oe(G.__webglFramebuffer[ue],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ue=0,_e=te.length;ue<_e;ue++){let se=te[ue],ee=n.get(se);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),xe(i.TEXTURE_2D,se),oe(G.__webglFramebuffer,A,se,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),m(se)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,j.__webglTexture),xe(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)oe(G.__webglFramebuffer[_e],A,S,i.COLOR_ATTACHMENT0,ue,_e);else oe(G.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ue,0);m(S)&&p(ue),t.unbindTexture()}A.depthBuffer&&ce(A)}function Xe(A){let S=A.textures;for(let G=0,j=S.length;G<j;G++){let te=S[G];if(m(te)){let Z=y(A),be=n.get(te).__webglTexture;t.bindTexture(Z,be),p(Z),t.unbindTexture()}}}let at=[],k=[];function Tt(A){if(A.samples>0){if(Ke(A)===!1){let S=A.textures,G=A.width,j=A.height,te=i.COLOR_BUFFER_BIT,Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(A),ue=S.length>1;if(ue)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);let se=n.get(S[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,G,j,0,0,G,j,te,i.NEAREST),l===!0&&(at.length=0,k.length=0,at.push(i.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.resolveDepthBuffer===!1&&(at.push(Z),k.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);let se=n.get(S[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function $e(A){return Math.min(s.maxSamples,A.samples)}function Ke(A){let S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Me(A){let S=a.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function it(A,S){let G=A.colorSpace,j=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==qt&&G!==wi&&(Je.getTransfer(G)===dt?(j!==xn||te!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Ne(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=W,this.setTexture2D=N,this.setTexture2DArray=D,this.setTexture3D=q,this.setTextureCube=B,this.rebindTextures=ve,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ke}function zv(i,e){function t(n,s=wi){let r,a=Je.getTransfer(s);if(n===si)return i.UNSIGNED_BYTE;if(n===cu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_f)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gf)return i.BYTE;if(n===xf)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===lu)return i.INT;if(n===is)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===ta)return i.HALF_FLOAT;if(n===yf)return i.ALPHA;if(n===vf)return i.RGB;if(n===xn)return i.RGBA;if(n===Mf)return i.LUMINANCE;if(n===bf)return i.LUMINANCE_ALPHA;if(n===Vs)return i.DEPTH_COMPONENT;if(n===Ks)return i.DEPTH_STENCIL;if(n===hu)return i.RED;if(n===du)return i.RED_INTEGER;if(n===Sf)return i.RG;if(n===fu)return i.RG_INTEGER;if(n===pu)return i.RGBA_INTEGER;if(n===Za||n===Ja||n===ja||n===Qa)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ac||n===oc||n===lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ac||n===oc)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cc||n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===_c||n===yc||n===vc||n===Mc||n===bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===Sc||n===wc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===eo)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wf||n===Tc||n===Ec||n===Ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Vc=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},rt=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hv={type:"move"},qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),g=.02,f=.005;c.inputState.pinching&&d>g+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gv=`
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

}`,Gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Pt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jt({vertexShader:Vv,fragmentShader:Gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wc=class extends ri{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,g=null,f=null,x=new Gc,m=t.getContextAttributes(),p=null,y=null,b=[],v=[],E=new Ie,T=null,R=new Lt;R.viewport=new st;let I=new Lt;I.viewport=new st;let _=[R,I],M=new Vc,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=b[H];return K===void 0&&(K=new qr,b[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=b[H];return K===void 0&&(K=new qr,b[H]=K),K.getGripSpace()},this.getHand=function(H){let K=b[H];return K===void 0&&(K=new qr,b[H]=K),K.getHandSpace()};function C(H){let K=v.indexOf(H.inputSource);if(K===-1)return;let oe=b[K];oe!==void 0&&(oe.update(H.inputSource,H.frame,c||a),oe.dispatchEvent({type:H.type,data:H.inputSource}))}function U(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",N);for(let H=0;H<b.length;H++){let K=v[H];K!==null&&(v[H]=null,b[H].disconnect(K))}L=null,W=null,x.reset(),e.setRenderTarget(p),g=null,d=null,h=null,s=null,y=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",U),s.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0){let K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new ai(g.framebufferWidth,g.framebufferHeight,{format:xn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,oe=null,V=null;m.depth&&(V=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?Ks:Vs,oe=m.stencil?$s:is);let ie={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ai(d.textureWidth,d.textureHeight,{format:xn,type:si,depthTexture:new ho(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(H){for(let K=0;K<H.removed.length;K++){let oe=H.removed[K],V=v.indexOf(oe);V>=0&&(v[V]=null,b[V].disconnect(oe))}for(let K=0;K<H.added.length;K++){let oe=H.added[K],V=v.indexOf(oe);if(V===-1){for(let ce=0;ce<b.length;ce++)if(ce>=v.length){v.push(oe),V=ce;break}else if(v[ce]===null){v[ce]=oe,V=ce;break}if(V===-1)break}let ie=b[V];ie&&ie.connect(oe)}}let D=new P,q=new P;function B(H,K,oe){D.setFromMatrixPosition(K.matrixWorld),q.setFromMatrixPosition(oe.matrixWorld);let V=D.distanceTo(q),ie=K.projectionMatrix.elements,ce=oe.projectionMatrix.elements,ve=ie[14]/(ie[10]-1),ke=ie[14]/(ie[10]+1),Xe=(ie[9]+1)/ie[5],at=(ie[9]-1)/ie[5],k=(ie[8]-1)/ie[0],Tt=(ce[8]+1)/ce[0],$e=ve*k,Ke=ve*Tt,Me=V/(-k+Tt),it=Me*-k;if(K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(it),H.translateZ(Me),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ie[10]===-1)H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Ne=ve+Me,A=ke+Me,S=$e-it,G=Ke+(V-it),j=Xe*ke/A*Ne,te=at*ke/A*Ne;H.projectionMatrix.makePerspective(S,G,j,te,Ne,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function J(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let K=H.near,oe=H.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(oe=x.depthFar)),M.near=I.near=R.near=K,M.far=I.far=R.far=oe,(L!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,W=M.far),R.layers.mask=H.layers.mask|2,I.layers.mask=H.layers.mask|4,M.layers.mask=R.layers.mask|I.layers.mask;let V=H.parent,ie=M.cameras;J(M,V);for(let ce=0;ce<ie.length;ce++)J(ie[ce],V);ie.length===2?B(M,R,I):M.projectionMatrix.copy(R.projectionMatrix),ne(H,M,V)};function ne(H,K,oe){oe===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(oe.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=js*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let re=null;function xe(H,K){if(u=K.getViewerPose(c||a),f=K,u!==null){let oe=u.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let V=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,V=!0);for(let ce=0;ce<oe.length;ce++){let ve=oe[ce],ke=null;if(g!==null)ke=g.getViewport(ve);else{let at=h.getViewSubImage(d,ve);ke=at.viewport,ce===0&&(e.setRenderTargetTextures(y,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(y))}let Xe=_[ce];Xe===void 0&&(Xe=new Lt,Xe.layers.enable(ce),Xe.viewport=new st,_[ce]=Xe),Xe.matrix.fromArray(ve.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(ve.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ke.x,ke.y,ke.width,ke.height),ce===0&&(M.matrix.copy(Xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),V===!0&&M.cameras.push(Xe)}let ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")){let ce=h.getDepthInformation(oe[0]);ce&&ce.isValid&&ce.texture&&x.init(e,ce,s.renderState)}}for(let oe=0;oe<b.length;oe++){let V=v[oe],ie=b[oe];V!==null&&ie!==void 0&&ie.update(V,K,c||a)}re&&re(H,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),f=null}let De=new Pf;De.setAnimationLoop(xe),this.setAnimationLoop=function(H){re=H},this.dispose=function(){}}},Ji=new Vn,Wv=new ze;function Xv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,If(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&g(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),f(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),b=y.envMap,v=y.envMapRotation;b&&(m.envMap.value=b,Ji.copy(v),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),m.envMapRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(Ji)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function g(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let v=b.program;n.uniformBlockBinding(y,v)}function c(y,b){let v=s[y.id];v===void 0&&(f(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",m));let E=b.program;n.updateUBOMapping(y,E);let T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function u(y){let b=h();y.__bindingPointIndex=b;let v=i.createBuffer(),E=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let b=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,R=v.length;T<R;T++){let I=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,M=I.length;_<M;_++){let L=I[_];if(g(L,T,_,E)===!0){let W=L.__offset,C=Array.isArray(L.value)?L.value:[L.value],U=0;for(let N=0;N<C.length;N++){let D=C[N],q=x(D);typeof D=="number"||typeof D=="boolean"?(L.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,W+U,L.__data)):D.isMatrix3?(L.__data[0]=D.elements[0],L.__data[1]=D.elements[1],L.__data[2]=D.elements[2],L.__data[3]=0,L.__data[4]=D.elements[3],L.__data[5]=D.elements[4],L.__data[6]=D.elements[5],L.__data[7]=0,L.__data[8]=D.elements[6],L.__data[9]=D.elements[7],L.__data[10]=D.elements[8],L.__data[11]=0):(D.toArray(L.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,b,v,E){let T=y.value,R=b+"_"+v;if(E[R]===void 0)return typeof T=="number"||typeof T=="boolean"?E[R]=T:E[R]=T.clone(),!0;{let I=E[R];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return E[R]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function f(y){let b=y.uniforms,v=0,E=16;for(let R=0,I=b.length;R<I;R++){let _=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,L=_.length;M<L;M++){let W=_[M],C=Array.isArray(W.value)?W.value:[W.value];for(let U=0,N=C.length;U<N;U++){let D=C[U],q=x(D),B=v%E,J=B%q.boundary,ne=B+J;v+=J,ne!==0&&E-ne<q.storage&&(v+=E-ne),W.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=q.storage}}}let T=v%E;return T>0&&(v+=E-T),y.__size=v,y.__cache={},this}function x(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){let b=y.target;b.removeEventListener("dispose",m);let v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var fo=class{constructor(e={}){let{canvas:t=Zg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let f=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=Ri,this.toneMappingExposure=1;let v=this,E=!1,T=0,R=0,I=null,_=-1,M=null,L=new st,W=new st,C=null,U=new Ee(0),N=0,D=t.width,q=t.height,B=1,J=null,ne=null,re=new st(0,0,D,q),xe=new st(0,0,D,q),De=!1,H=new Kr,K=!1,oe=!1,V=new ze,ie=new ze,ce=new P,ve=new st,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function at(){return I===null?B:1}let k=n;function Tt(w,F){return t.getContext(w,F)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ru}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",fe,!1),k===null){let F="webgl2";if(k=Tt(F,w),k===null)throw Tt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let $e,Ke,Me,it,Ne,A,S,G,j,te,Z,be,ue,_e,se,ee,de,Oe,Fe,ye,Qe,qe,pt,O;function he(){$e=new ly(k),$e.init(),qe=new zv(k,$e),Ke=new ny(k,$e,e,qe),Me=new Ov(k,$e),Ke.reverseDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),it=new hy(k),Ne=new wv,A=new Bv(k,$e,Me,Ne,Ke,qe,it),S=new sy(v),G=new oy(v),j=new _0(k),pt=new ey(k,j),te=new cy(k,j,it,pt),Z=new fy(k,te,j,it),Fe=new dy(k,Ke,A),ee=new iy(Ne),be=new Sv(v,S,G,$e,Ke,pt,ee),ue=new Xv(v,Ne),_e=new Ev,se=new Lv($e),Oe=new Q_(v,S,G,Me,Z,g,l),de=new Uv(v,Z,Ke),O=new qv(k,it,Ke,Me),ye=new ty(k,$e,it),Qe=new uy(k,$e,it),it.programs=be.programs,v.capabilities=Ke,v.extensions=$e,v.properties=Ne,v.renderLists=_e,v.shadowMap=de,v.state=Me,v.info=it}he();let $=new Wc(v,k);this.xr=$,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let w=$e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=$e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(D,q,!1))},this.getSize=function(w){return w.set(D,q)},this.setSize=function(w,F,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,q=F,t.width=Math.floor(w*B),t.height=Math.floor(F*B),X===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(D*B,q*B).floor()},this.setDrawingBufferSize=function(w,F,X){D=w,q=F,B=X,t.width=Math.floor(w*X),t.height=Math.floor(F*X),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(re)},this.setViewport=function(w,F,X,Y){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,F,X,Y),Me.viewport(L.copy(re).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(xe)},this.setScissor=function(w,F,X,Y){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,F,X,Y),Me.scissor(W.copy(xe).multiplyScalar(B).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(w){Me.setScissorTest(De=w)},this.setOpaqueSort=function(w){J=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(w=!0,F=!0,X=!0){let Y=0;if(w){let z=!1;if(I!==null){let ae=I.texture.format;z=ae===pu||ae===fu||ae===du}if(z){let ae=I.texture.type,pe=ae===si||ae===is||ae===Yr||ae===$s||ae===cu||ae===uu,Se=Oe.getClearColor(),we=Oe.getClearAlpha(),Be=Se.r,Ge=Se.g,Te=Se.b;pe?(f[0]=Be,f[1]=Ge,f[2]=Te,f[3]=we,k.clearBufferuiv(k.COLOR,0,f)):(x[0]=Be,x[1]=Ge,x[2]=Te,x[3]=we,k.clearBufferiv(k.COLOR,0,x))}else Y|=k.COLOR_BUFFER_BIT}F&&(Y|=k.DEPTH_BUFFER_BIT),X&&(Y|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),_e.dispose(),se.dispose(),Ne.dispose(),S.dispose(),G.dispose(),Z.dispose(),pt.dispose(),O.dispose(),be.dispose(),$.dispose(),$.removeEventListener("sessionstart",Hh),$.removeEventListener("sessionend",Vh),Xi.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=it.autoReset,F=de.enabled,X=de.autoUpdate,Y=de.needsUpdate,z=de.type;he(),it.autoReset=w,de.enabled=F,de.autoUpdate=X,de.needsUpdate=Y,de.type=z}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ve(w){let F=w.target;F.removeEventListener("dispose",Ve),St(F)}function St(w){Vt(w),Ne.remove(w)}function Vt(w){let F=Ne.get(w).programs;F!==void 0&&(F.forEach(function(X){be.releaseProgram(X)}),w.isShaderMaterial&&be.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,X,Y,z,ae){F===null&&(F=ke);let pe=z.isMesh&&z.matrixWorld.determinant()<0,Se=Gm(w,F,X,Y,z);Me.setMaterial(Y,pe);let we=X.index,Be=1;if(Y.wireframe===!0){if(we=te.getWireframeAttribute(X),we===void 0)return;Be=2}let Ge=X.drawRange,Te=X.attributes.position,tt=Ge.start*Be,mt=(Ge.start+Ge.count)*Be;ae!==null&&(tt=Math.max(tt,ae.start*Be),mt=Math.min(mt,(ae.start+ae.count)*Be)),we!==null?(tt=Math.max(tt,0),mt=Math.min(mt,we.count)):Te!=null&&(tt=Math.max(tt,0),mt=Math.min(mt,Te.count));let xt=mt-tt;if(xt<0||xt===1/0)return;pt.setup(z,Y,Se,X,we);let nn,ot=ye;if(we!==null&&(nn=j.get(we),ot=Qe,ot.setIndex(nn)),z.isMesh)Y.wireframe===!0?(Me.setLineWidth(Y.wireframeLinewidth*at()),ot.setMode(k.LINES)):ot.setMode(k.TRIANGLES);else if(z.isLine){let Ae=Y.linewidth;Ae===void 0&&(Ae=1),Me.setLineWidth(Ae*at()),z.isLineSegments?ot.setMode(k.LINES):z.isLineLoop?ot.setMode(k.LINE_LOOP):ot.setMode(k.LINE_STRIP)}else z.isPoints?ot.setMode(k.POINTS):z.isSprite&&ot.setMode(k.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ot.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))ot.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ae=z._multiDrawStarts,qn=z._multiDrawCounts,lt=z._multiDrawCount,wn=we?j.get(we).bytesPerElement:1,_s=Ne.get(Y).currentProgram.getUniforms();for(let on=0;on<lt;on++)_s.setValue(k,"_gl_DrawID",on),ot.render(Ae[on]/wn,qn[on])}else if(z.isInstancedMesh)ot.renderInstances(tt,xt,z.count);else if(X.isInstancedBufferGeometry){let Ae=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,qn=Math.min(X.instanceCount,Ae);ot.renderInstances(tt,xt,qn)}else ot.render(tt,xt)};function ut(w,F,X){w.transparent===!0&&w.side===At&&w.forceSinglePass===!1?(w.side=Xt,w.needsUpdate=!0,ya(w,F,X),w.side=_n,w.needsUpdate=!0,ya(w,F,X),w.side=At):ya(w,F,X)}this.compile=function(w,F,X=null){X===null&&(X=w),p=se.get(X),p.init(F),b.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==X&&w.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let Y=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ae=z.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){let Se=ae[pe];ut(Se,X,z),Y.add(Se)}else ut(ae,X,z),Y.add(ae)}),b.pop(),p=null,Y},this.compileAsync=function(w,F,X=null){let Y=this.compile(w,F,X);return new Promise(z=>{function ae(){if(Y.forEach(function(pe){Ne.get(pe).currentProgram.isReady()&&Y.delete(pe)}),Y.size===0){z(w);return}setTimeout(ae,10)}$e.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Sn=null;function Xn(w){Sn&&Sn(w)}function Hh(){Xi.stop()}function Vh(){Xi.start()}let Xi=new Pf;Xi.setAnimationLoop(Xn),typeof self!="undefined"&&Xi.setContext(self),this.setAnimationLoop=function(w){Sn=w,$.setAnimationLoop(w),w===null?Xi.stop():Xi.start()},$.addEventListener("sessionstart",Hh),$.addEventListener("sessionend",Vh),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,F,I),p=se.get(w,b.length),p.init(F),b.push(p),ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),H.setFromProjectionMatrix(ie),oe=this.localClippingEnabled,K=ee.init(this.clippingPlanes,oe),m=_e.get(w,y.length),m.init(),y.push(m),$.enabled===!0&&$.isPresenting===!0){let ae=v.xr.getDepthSensingMesh();ae!==null&&hl(ae,F,-1/0,v.sortObjects)}hl(w,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(J,ne),Xe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Xe&&Oe.addToRenderList(m,w),this.info.render.frame++,K===!0&&ee.beginShadows();let X=p.state.shadowsArray;de.render(X,w,F),K===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,z=m.transmissive;if(p.setupLights(),F.isArrayCamera){let ae=F.cameras;if(z.length>0)for(let pe=0,Se=ae.length;pe<Se;pe++){let we=ae[pe];Wh(Y,z,w,we)}Xe&&Oe.render(w);for(let pe=0,Se=ae.length;pe<Se;pe++){let we=ae[pe];Gh(m,w,we,we.viewport)}}else z.length>0&&Wh(Y,z,w,F),Xe&&Oe.render(w),Gh(m,w,F);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(v,w,F),pt.resetDefaultState(),_=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],K===!0&&ee.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function hl(w,F,X,Y){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||H.intersectsSprite(w)){Y&&ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ie);let pe=Z.update(w),Se=w.material;Se.visible&&m.push(w,pe,Se,X,ve.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||H.intersectsObject(w))){let pe=Z.update(w),Se=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ve.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ve.copy(pe.boundingSphere.center)),ve.applyMatrix4(w.matrixWorld).applyMatrix4(ie)),Array.isArray(Se)){let we=pe.groups;for(let Be=0,Ge=we.length;Be<Ge;Be++){let Te=we[Be],tt=Se[Te.materialIndex];tt&&tt.visible&&m.push(w,pe,tt,X,ve.z,Te)}}else Se.visible&&m.push(w,pe,Se,X,ve.z,null)}}let ae=w.children;for(let pe=0,Se=ae.length;pe<Se;pe++)hl(ae[pe],F,X,Y)}function Gh(w,F,X,Y){let z=w.opaque,ae=w.transmissive,pe=w.transparent;p.setupLightsView(X),K===!0&&ee.setGlobalState(v.clippingPlanes,X),Y&&Me.viewport(L.copy(Y)),z.length>0&&_a(z,F,X),ae.length>0&&_a(ae,F,X),pe.length>0&&_a(pe,F,X),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Wh(w,F,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new ai(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?ta:si,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let ae=p.state.transmissionRenderTarget[Y.id],pe=Y.viewport||L;ae.setSize(pe.z,pe.w);let Se=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(U),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear(),Xe&&Oe.render(X);let we=v.toneMapping;v.toneMapping=Ri;let Be=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),K===!0&&ee.setGlobalState(v.clippingPlanes,Y),_a(w,X,Y),A.updateMultisampleRenderTarget(ae),A.updateRenderTargetMipmap(ae),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Te=0,tt=F.length;Te<tt;Te++){let mt=F[Te],xt=mt.object,nn=mt.geometry,ot=mt.material,Ae=mt.group;if(ot.side===At&&xt.layers.test(Y.layers)){let qn=ot.side;ot.side=Xt,ot.needsUpdate=!0,Xh(xt,X,Y,nn,ot,Ae),ot.side=qn,ot.needsUpdate=!0,Ge=!0}}Ge===!0&&(A.updateMultisampleRenderTarget(ae),A.updateRenderTargetMipmap(ae))}v.setRenderTarget(Se),v.setClearColor(U,N),Be!==void 0&&(Y.viewport=Be),v.toneMapping=we}function _a(w,F,X){let Y=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ae=w.length;z<ae;z++){let pe=w[z],Se=pe.object,we=pe.geometry,Be=Y===null?pe.material:Y,Ge=pe.group;Se.layers.test(X.layers)&&Xh(Se,F,X,we,Be,Ge)}}function Xh(w,F,X,Y,z,ae){w.onBeforeRender(v,F,X,Y,z,ae),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(v,F,X,Y,w,ae),z.transparent===!0&&z.side===At&&z.forceSinglePass===!1?(z.side=Xt,z.needsUpdate=!0,v.renderBufferDirect(X,F,Y,z,w,ae),z.side=_n,z.needsUpdate=!0,v.renderBufferDirect(X,F,Y,z,w,ae),z.side=At):v.renderBufferDirect(X,F,Y,z,w,ae),w.onAfterRender(v,F,X,Y,z,ae)}function ya(w,F,X){F.isScene!==!0&&(F=ke);let Y=Ne.get(w),z=p.state.lights,ae=p.state.shadowsArray,pe=z.state.version,Se=be.getParameters(w,z.state,ae,F,X),we=be.getProgramCacheKey(Se),Be=Y.programs;Y.environment=w.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(w.isMeshStandardMaterial?G:S).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",Ve),Be=new Map,Y.programs=Be);let Ge=Be.get(we);if(Ge!==void 0){if(Y.currentProgram===Ge&&Y.lightsStateVersion===pe)return Yh(w,Se),Ge}else Se.uniforms=be.getUniforms(w),w.onBeforeCompile(Se,v),Ge=be.acquireProgram(Se,we),Be.set(we,Ge),Y.uniforms=Se.uniforms;let Te=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Te.clippingPlanes=ee.uniform),Yh(w,Se),Y.needsLights=Xm(w),Y.lightsStateVersion=pe,Y.needsLights&&(Te.ambientLightColor.value=z.state.ambient,Te.lightProbe.value=z.state.probe,Te.directionalLights.value=z.state.directional,Te.directionalLightShadows.value=z.state.directionalShadow,Te.spotLights.value=z.state.spot,Te.spotLightShadows.value=z.state.spotShadow,Te.rectAreaLights.value=z.state.rectArea,Te.ltc_1.value=z.state.rectAreaLTC1,Te.ltc_2.value=z.state.rectAreaLTC2,Te.pointLights.value=z.state.point,Te.pointLightShadows.value=z.state.pointShadow,Te.hemisphereLights.value=z.state.hemi,Te.directionalShadowMap.value=z.state.directionalShadowMap,Te.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Te.spotShadowMap.value=z.state.spotShadowMap,Te.spotLightMatrix.value=z.state.spotLightMatrix,Te.spotLightMap.value=z.state.spotLightMap,Te.pointShadowMap.value=z.state.pointShadowMap,Te.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=Ge,Y.uniformsList=null,Ge}function qh(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Ws.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Yh(w,F){let X=Ne.get(w);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Gm(w,F,X,Y,z){F.isScene!==!0&&(F=ke),A.resetTextureUnits();let ae=F.fog,pe=Y.isMeshStandardMaterial?F.environment:null,Se=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:qt,we=(Y.isMeshStandardMaterial?G:S).get(Y.envMap||pe),Be=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Te=!!X.morphAttributes.position,tt=!!X.morphAttributes.normal,mt=!!X.morphAttributes.color,xt=Ri;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xt=v.toneMapping);let nn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ot=nn!==void 0?nn.length:0,Ae=Ne.get(Y),qn=p.state.lights;if(K===!0&&(oe===!0||w!==M)){let mn=w===M&&Y.id===_;ee.setState(Y,w,mn)}let lt=!1;Y.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==qn.state.version||Ae.outputColorSpace!==Se||z.isBatchedMesh&&Ae.batching===!1||!z.isBatchedMesh&&Ae.batching===!0||z.isBatchedMesh&&Ae.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ae.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ae.instancing===!1||!z.isInstancedMesh&&Ae.instancing===!0||z.isSkinnedMesh&&Ae.skinning===!1||!z.isSkinnedMesh&&Ae.skinning===!0||z.isInstancedMesh&&Ae.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ae.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ae.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ae.instancingMorph===!1&&z.morphTexture!==null||Ae.envMap!==we||Y.fog===!0&&Ae.fog!==ae||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ee.numPlanes||Ae.numIntersection!==ee.numIntersection)||Ae.vertexAlphas!==Be||Ae.vertexTangents!==Ge||Ae.morphTargets!==Te||Ae.morphNormals!==tt||Ae.morphColors!==mt||Ae.toneMapping!==xt||Ae.morphTargetsCount!==ot)&&(lt=!0):(lt=!0,Ae.__version=Y.version);let wn=Ae.currentProgram;lt===!0&&(wn=ya(Y,F,z));let _s=!1,on=!1,Rr=!1,_t=wn.getUniforms(),Fn=Ae.uniforms;if(Me.useProgram(wn.program)&&(_s=!0,on=!0,Rr=!0),Y.id!==_&&(_=Y.id,on=!0),_s||M!==w){Me.buffers.depth.getReversed()?(V.copy(w.projectionMatrix),jg(V),Qg(V),_t.setValue(k,"projectionMatrix",V)):_t.setValue(k,"projectionMatrix",w.projectionMatrix),_t.setValue(k,"viewMatrix",w.matrixWorldInverse);let gi=_t.map.cameraPosition;gi!==void 0&&gi.setValue(k,ce.setFromMatrixPosition(w.matrixWorld)),Ke.logarithmicDepthBuffer&&_t.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&_t.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,on=!0,Rr=!0)}if(z.isSkinnedMesh){_t.setOptional(k,z,"bindMatrix"),_t.setOptional(k,z,"bindMatrixInverse");let mn=z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),_t.setValue(k,"boneTexture",mn.boneTexture,A))}z.isBatchedMesh&&(_t.setOptional(k,z,"batchingTexture"),_t.setValue(k,"batchingTexture",z._matricesTexture,A),_t.setOptional(k,z,"batchingIdTexture"),_t.setValue(k,"batchingIdTexture",z._indirectTexture,A),_t.setOptional(k,z,"batchingColorTexture"),z._colorsTexture!==null&&_t.setValue(k,"batchingColorTexture",z._colorsTexture,A));let Cr=X.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0)&&Fe.update(z,X,wn),(on||Ae.receiveShadow!==z.receiveShadow)&&(Ae.receiveShadow=z.receiveShadow,_t.setValue(k,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Fn.envMap.value=we,Fn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(Fn.envMapIntensity.value=F.environmentIntensity),on&&(_t.setValue(k,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&Wm(Fn,Rr),ae&&Y.fog===!0&&ue.refreshFogUniforms(Fn,ae),ue.refreshMaterialUniforms(Fn,Y,B,q,p.state.transmissionRenderTarget[w.id]),Ws.upload(k,qh(Ae),Fn,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ws.upload(k,qh(Ae),Fn,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&_t.setValue(k,"center",z.center),_t.setValue(k,"modelViewMatrix",z.modelViewMatrix),_t.setValue(k,"normalMatrix",z.normalMatrix),_t.setValue(k,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let mn=Y.uniformsGroups;for(let gi=0,xi=mn.length;gi<xi;gi++){let $h=mn[gi];O.update($h,wn),O.bind($h,wn)}}return wn}function Wm(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Xm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,F,X){Ne.get(w.texture).__webglTexture=F,Ne.get(w.depthTexture).__webglTexture=X;let Y=Ne.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){let X=Ne.get(w);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,X=0){I=w,T=F,R=X;let Y=!0,z=null,ae=!1,pe=!1;if(w){let we=Ne.get(w);if(we.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(k.FRAMEBUFFER,null),Y=!1;else if(we.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(we.__hasExternalTextures)A.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Te=w.depthTexture;if(we.__boundDepthTexture!==Te){if(Te!==null&&Ne.has(Te)&&(w.width!==Te.image.width||w.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(pe=!0);let Ge=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?z=Ge[F][X]:z=Ge[F],ae=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?z=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?z=Ge[X]:z=Ge,L.copy(w.viewport),W.copy(w.scissor),C=w.scissorTest}else L.copy(re).multiplyScalar(B).floor(),W.copy(xe).multiplyScalar(B).floor(),C=De;if(Me.bindFramebuffer(k.FRAMEBUFFER,z)&&Y&&Me.drawBuffers(w,z),Me.viewport(L),Me.scissor(W),Me.setScissorTest(C),ae){let we=Ne.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,X)}else if(pe){let we=Ne.get(w.texture),Be=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,we.__webglTexture,X||0,Be)}_=-1},this.readRenderTargetPixels=function(w,F,X,Y,z,ae,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){Me.bindFramebuffer(k.FRAMEBUFFER,Se);try{let we=w.texture,Be=we.format,Ge=we.type;if(!Ke.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-Y&&X>=0&&X<=w.height-z&&k.readPixels(F,X,Y,z,qe.convert(Be),qe.convert(Ge),ae)}finally{let we=I!==null?Ne.get(I).__webglFramebuffer:null;Me.bindFramebuffer(k.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,F,X,Y,z,ae,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){let we=w.texture,Be=we.format,Ge=we.type;if(!Ke.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-Y&&X>=0&&X<=w.height-z){Me.bindFramebuffer(k.FRAMEBUFFER,Se);let Te=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Te),k.bufferData(k.PIXEL_PACK_BUFFER,ae.byteLength,k.STREAM_READ),k.readPixels(F,X,Y,z,qe.convert(Be),qe.convert(Ge),0);let tt=I!==null?Ne.get(I).__webglFramebuffer:null;Me.bindFramebuffer(k.FRAMEBUFFER,tt);let mt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Jg(k,mt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Te),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ae),k.deleteBuffer(Te),k.deleteSync(mt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,X=0){w.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);let Y=Math.pow(2,-X),z=Math.floor(w.image.width*Y),ae=Math.floor(w.image.height*Y),pe=F!==null?F.x:0,Se=F!==null?F.y:0;A.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,pe,Se,z,ae),Me.unbindTexture()},this.copyTextureToTexture=function(w,F,X=null,Y=null,z=0){w.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1],F=arguments[2],z=arguments[3]||0,X=null);let ae,pe,Se,we,Be,Ge,Te,tt,mt,xt=w.isCompressedTexture?w.mipmaps[z]:w.image;X!==null?(ae=X.max.x-X.min.x,pe=X.max.y-X.min.y,Se=X.isBox3?X.max.z-X.min.z:1,we=X.min.x,Be=X.min.y,Ge=X.isBox3?X.min.z:0):(ae=xt.width,pe=xt.height,Se=xt.depth||1,we=0,Be=0,Ge=0),Y!==null?(Te=Y.x,tt=Y.y,mt=Y.z):(Te=0,tt=0,mt=0);let nn=qe.convert(F.format),ot=qe.convert(F.type),Ae;F.isData3DTexture?(A.setTexture3D(F,0),Ae=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),Ae=k.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),Ae=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);let qn=k.getParameter(k.UNPACK_ROW_LENGTH),lt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),wn=k.getParameter(k.UNPACK_SKIP_PIXELS),_s=k.getParameter(k.UNPACK_SKIP_ROWS),on=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,xt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,we),k.pixelStorei(k.UNPACK_SKIP_ROWS,Be),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ge);let Rr=w.isDataArrayTexture||w.isData3DTexture,_t=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Fn=Ne.get(w),Cr=Ne.get(F),mn=Ne.get(Fn.__renderTarget),gi=Ne.get(Cr.__renderTarget);Me.bindFramebuffer(k.READ_FRAMEBUFFER,mn.__webglFramebuffer),Me.bindFramebuffer(k.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let xi=0;xi<Se;xi++)Rr&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.get(w).__webglTexture,z,Ge+xi),w.isDepthTexture?(_t&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.get(F).__webglTexture,z,mt+xi),k.blitFramebuffer(we,Be,ae,pe,Te,tt,ae,pe,k.DEPTH_BUFFER_BIT,k.NEAREST)):_t?k.copyTexSubImage3D(Ae,z,Te,tt,mt+xi,we,Be,ae,pe):k.copyTexSubImage2D(Ae,z,Te,tt,mt+xi,we,Be,ae,pe);Me.bindFramebuffer(k.READ_FRAMEBUFFER,null),Me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else _t?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Ae,z,Te,tt,mt,ae,pe,Se,nn,ot,xt.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(Ae,z,Te,tt,mt,ae,pe,Se,nn,xt.data):k.texSubImage3D(Ae,z,Te,tt,mt,ae,pe,Se,nn,ot,xt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,z,Te,tt,ae,pe,nn,ot,xt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,z,Te,tt,xt.width,xt.height,nn,xt.data):k.texSubImage2D(k.TEXTURE_2D,z,Te,tt,ae,pe,nn,ot,xt);k.pixelStorei(k.UNPACK_ROW_LENGTH,qn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,lt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,wn),k.pixelStorei(k.UNPACK_SKIP_ROWS,_s),k.pixelStorei(k.UNPACK_SKIP_IMAGES,on),z===0&&F.generateMipmaps&&k.generateMipmap(Ae),Me.unbindTexture()},this.copyTextureToTexture3D=function(w,F,X=null,Y=null,z=0){return w.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,w=arguments[2],F=arguments[3],z=arguments[4]||0),Hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,X,Y,z)},this.initRenderTarget=function(w){Ne.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){T=0,R=0,I=null,Me.reset(),pt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var po=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$t=new P,ss=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},oi=class extends Zt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ds,Nr=new P,Ns=new P,Us=new P,ks=new Ie,Ur=new Ie,kf=new ze,za=new P,kr=new P,Ha=new P,qd=new Ie,Bl=new Ie,Yd=new Ie,Ci=class extends vt{constructor(e=new oi){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nr(t,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new ss(n,3,0,!1)),Ds.setAttribute("uv",new ss(n,2,3,!1))}this.geometry=Ds,this.material=e,this.center=new Ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),kf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Us.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Va(za.set(-.5,-.5,0),Us,a,Ns,s,r),Va(kr.set(.5,-.5,0),Us,a,Ns,s,r),Va(Ha.set(.5,.5,0),Us,a,Ns,s,r),qd.set(0,0),Bl.set(1,0),Yd.set(1,1);let o=e.ray.intersectTriangle(za,kr,Ha,!1,Nr);if(o===null&&(Va(kr.set(-.5,.5,0),Us,a,Ns,s,r),Bl.set(0,1),o=e.ray.intersectTriangle(za,Ha,kr,!1,Nr),o===null))return;let l=e.ray.origin.distanceTo(Nr);l<e.near||l>e.far||t.push({distance:l,point:Nr.clone(),uv:Ti.getInterpolation(Nr,za,kr,Ha,qd,Bl,Yd,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Va(i,e,t,n,s,r){ks.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ur.x=r*ks.x-s*ks.y,Ur.y=s*ks.x+r*ks.y):Ur.copy(ks),i.copy(e),i.x+=Ur.x,i.y+=Ur.y,i.applyMatrix4(kf)}var $d=new P,Kd=new st,Zd=new st,Yv=new P,Jd=new ze,Ga=new P,zl=new un,jd=new ze,Hl=new Qs,mo=class extends Pe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jh,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ot),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ga),this.boundingBox.expandByPoint(Ga)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ga),this.boundingSphere.expandByPoint(Ga)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zl.copy(this.boundingSphere),zl.applyMatrix4(s),e.ray.intersectsSphere(zl)!==!1&&(jd.copy(s).invert(),Hl.copy(e.ray).applyMatrix4(jd),!(this.boundingBox!==null&&Hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Kd.fromBufferAttribute(s.attributes.skinIndex,e),Zd.fromBufferAttribute(s.attributes.skinWeight,e),$d.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Zd.getComponent(r);if(a!==0){let o=Kd.getComponent(r);Jd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Yv.copy($d).applyMatrix4(Jd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Zr=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ir=class extends Pt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=kt,u=kt,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qd=new ze,$v=new ze,go=class i{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:$v;Qd.multiplyMatrices(o,t[r]),Qd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ir(t,e,e,xn,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Zr),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},rs=class extends wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Os=new ze,ef=new ze,Wa=[],tf=new Ot,Kv=new ze,Or=new Pe,Fr=new un,xo=class extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ot),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),tf.copy(e.boundingBox).applyMatrix4(Os),this.boundingBox.union(tf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),Fr.copy(e.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),ef.multiplyMatrices(n,Os),Or.matrixWorld=ef,Or.raycast(e,Wa);for(let a=0,o=Wa.length;a<o;a++){let l=Wa[a];l.instanceId=r,l.object=this,t.push(l)}Wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ir(new Float32Array(s*this.count),s,this.count,hu,Cn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Jr=class extends Zt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_o=new P,yo=new P,nf=new ze,Br=new Qs,Xa=new un,Vl=new P,sf=new P,sr=class extends vt{constructor(e=new bt,t=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)_o.fromBufferAttribute(t,s-1),yo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=_o.distanceTo(yo);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,e.ray.intersectsSphere(Xa)===!1)return;nf.copy(s).invert(),Br.copy(e.ray).applyMatrix4(nf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let g=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let x=g,m=f-1;x<m;x+=c){let p=u.getX(x),y=u.getX(x+1),b=qa(this,e,Br,l,p,y);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(f-1),m=u.getX(g),p=qa(this,e,Br,l,x,m);p&&t.push(p)}}else{let g=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=g,m=f-1;x<m;x+=c){let p=qa(this,e,Br,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=qa(this,e,Br,l,f-1,g);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qa(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(_o.fromBufferAttribute(a,s),yo.fromBufferAttribute(a,r),t.distanceSqToSegment(_o,yo,Vl,sf)>n)return;Vl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Vl);if(!(l<e.near||l>e.far))return{distance:l,point:sf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var rf=new P,af=new P,vo=class extends sr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)rf.fromBufferAttribute(t,s),af.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rf.distanceTo(af);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Mo=class extends sr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},jr=class extends Zt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},of=new ze,Xc=new Qs,Ya=new un,$a=new P,rr=class extends vt{constructor(e=new bt,t=new jr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(s),Ya.radius+=r,e.ray.intersectsSphere(Ya)===!1)return;of.copy(s).invert(),Xc.copy(e.ray).applyMatrix4(of);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let f=d,x=g;f<x;f++){let m=c.getX(f);$a.fromBufferAttribute(h,m),lf($a,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let f=d,x=g;f<x;f++)$a.fromBufferAttribute(h,f),lf($a,f,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lf(i,e,t,n,s,r,a){let o=Xc.distanceSqToPoint(i);if(o<t){let l=new P;Xc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var bo=class extends Pt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var So=class i extends bt{constructor(e=[new Ie(0,-.5),new Ie(.5,0),new Ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Bt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,h=new P,d=new Ie,g=new P,f=new P,x=new P,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,g.x=p*1,g.y=-m,g.z=p*0,x.copy(g),g.normalize(),l.push(g.x,g.y,g.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,g.x=p*1,g.y=-m,g.z=p*0,f.copy(g),g.x+=x.x,g.y+=x.y,g.z+=x.z,g.normalize(),l.push(g.x,g.y,g.z),x.copy(f)}for(let y=0;y<=t;y++){let b=n+y*u*s,v=Math.sin(b),E=Math.cos(b);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*v,h.y=e[T].y,h.z=e[T].x*E,a.push(h.x,h.y,h.z),d.x=y/t,d.y=T/(e.length-1),o.push(d.x,d.y);let R=l[3*T+0]*v,I=l[3*T+1],_=l[3*T+0]*E;c.push(R,I,_)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let v=b+y*e.length,E=v,T=v+e.length,R=v+e.length+1,I=v+1;r.push(E,T,I),r.push(R,I,T)}this.setIndex(r),this.setAttribute("position",new ct(a,3)),this.setAttribute("uv",new ct(o,2)),this.setAttribute("normal",new ct(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ii=class i extends bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,u=new Ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let g=n+h/t*s;c.x=e*Math.cos(g),c.y=e*Math.sin(g),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(o,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Dn=class i extends bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],g=[],f=0,x=[],m=n/2,p=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(g,2));function y(){let v=new P,E=new P,T=0,R=(t-e)/n;for(let I=0;I<=r;I++){let _=[],M=I/r,L=M*(t-e)+e;for(let W=0;W<=s;W++){let C=W/s,U=C*l+o,N=Math.sin(U),D=Math.cos(U);E.x=L*N,E.y=-M*n+m,E.z=L*D,h.push(E.x,E.y,E.z),v.set(N,R,D).normalize(),d.push(v.x,v.y,v.z),g.push(C,1-M),_.push(f++)}x.push(_)}for(let I=0;I<s;I++)for(let _=0;_<r;_++){let M=x[_][I],L=x[_+1][I],W=x[_+1][I+1],C=x[_][I+1];(e>0||_!==0)&&(u.push(M,L,C),T+=3),(t>0||_!==r-1)&&(u.push(L,W,C),T+=3)}c.addGroup(p,T,0),p+=T}function b(v){let E=f,T=new Ie,R=new P,I=0,_=v===!0?e:t,M=v===!0?1:-1;for(let W=1;W<=s;W++)h.push(0,m*M,0),d.push(0,M,0),g.push(.5,.5),f++;let L=f;for(let W=0;W<=s;W++){let U=W/s*l+o,N=Math.cos(U),D=Math.sin(U);R.x=_*D,R.y=m*M,R.z=_*N,h.push(R.x,R.y,R.z),d.push(0,M,0),T.x=N*.5+.5,T.y=D*.5*M+.5,g.push(T.x,T.y),f++}for(let W=0;W<s;W++){let C=E+W,U=L+W;v===!0?u.push(U,U+1,C):u.push(U+1,U,C),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wo=class i extends Dn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qc=class i extends bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let b=new P,v=new P,E=new P;for(let T=0;T<t.length;T+=3)g(t[T+0],b),g(t[T+1],v),g(t[T+2],E),l(b,v,E,y)}function l(y,b,v,E){let T=E+1,R=[];for(let I=0;I<=T;I++){R[I]=[];let _=y.clone().lerp(v,I/T),M=b.clone().lerp(v,I/T),L=T-I;for(let W=0;W<=L;W++)W===0&&I===T?R[I][W]=_:R[I][W]=_.clone().lerp(M,W/L)}for(let I=0;I<T;I++)for(let _=0;_<2*(T-I)-1;_++){let M=Math.floor(_/2);_%2===0?(d(R[I][M+1]),d(R[I+1][M]),d(R[I][M])):(d(R[I][M+1]),d(R[I+1][M+1]),d(R[I+1][M]))}}function c(y){let b=new P;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(y),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function u(){let y=new P;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let v=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;a.push(v,1-E)}f(),h()}function h(){for(let y=0;y<a.length;y+=6){let b=a[y+0],v=a[y+2],E=a[y+4],T=Math.max(b,v,E),R=Math.min(b,v,E);T>.9&&R<.1&&(b<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function g(y,b){let v=y*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function f(){let y=new P,b=new P,v=new P,E=new P,T=new Ie,R=new Ie,I=new Ie;for(let _=0,M=0;_<r.length;_+=9,M+=6){y.set(r[_+0],r[_+1],r[_+2]),b.set(r[_+3],r[_+4],r[_+5]),v.set(r[_+6],r[_+7],r[_+8]),T.set(a[M+0],a[M+1]),R.set(a[M+2],a[M+3]),I.set(a[M+4],a[M+5]),E.copy(y).add(b).add(v).divideScalar(3);let L=m(E);x(T,M+0,y,L),x(R,M+2,b,L),x(I,M+4,v,L)}}function x(y,b,v,E){E<0&&y.x===1&&(a[b]=y.x-1),v.x===0&&v.z===0&&(a[b]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var ar=class i extends qc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var jt=class i extends bt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,g=new P,f=new Ie;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;g.x=h*Math.cos(p),g.y=h*Math.sin(p),l.push(g.x,g.y,g.z),c.push(0,0,1),f.x=(g.x/t+1)/2,f.y=(g.y/t+1)/2,u.push(f.x,f.y)}h+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,b=y,v=y+n+1,E=y+n+2,T=y+1;o.push(b,v,T),o.push(v,E,T)}}this.setIndex(o),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var or=class i extends bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new P,h=new P,d=new P;for(let g=0;g<=n;g++)for(let f=0;f<=s;f++){let x=f/s*r,m=g/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(f/s),c.push(g/n)}for(let g=1;g<=n;g++)for(let f=1;f<=s;f++){let x=(s+1)*g+f-1,m=(s+1)*(g-1)+f-1,p=(s+1)*(g-1)+f,y=(s+1)*g+f;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var lr=class extends Zt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dn=class extends lr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Qt=class extends Zt{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function Ka(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Zv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Jv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function cf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Of(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Pi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yc=class extends Pi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bs,endingEnd:Bs}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zs:r=e,o=2*t-n;break;case to:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zs:a=e,l=2*n-t;break;case to:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,g=this._weightNext,f=(n-t)/(s-t),x=f*f,m=x*f,p=-d*m+2*d*x-d*f,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*f+1,b=(-1-g)*m+(1.5+g)*x+.5*f,v=g*m-g*x;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+y*a[c+E]+b*a[l+E]+v*a[h+E];return r}},To=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},$c=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ka(t,this.TimeBufferType),this.values=Ka(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ka(e.times,Array),values:Ka(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zs:t=this.InterpolantFactoryMethodDiscrete;break;case Js:t=this.InterpolantFactoryMethodLinear;break;case dl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return Js;case this.InterpolantFactoryMethodSmooth:return dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Zv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===dl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,g=h+n;for(let f=0;f!==n;++f){let x=t[h+f];if(x!==t[d+f]||x!==t[g+f]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let g=0;g!==n;++g)t[d+g]=t[h+g]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Js;var Li=class extends yn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Zs;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends yn{};Eo.prototype.ValueTypeName="color";var li=class extends yn{};li.prototype.ValueTypeName="number";var Kc=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)rn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ci=class extends yn{InterpolantFactoryMethodLinear(e){return new Kc(this.times,this.values,this.getValueSize(),e)}};ci.prototype.ValueTypeName="quaternion";ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends yn{constructor(e,t,n){super(e,t,n)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Zs;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends yn{};ui.prototype.ValueTypeName="vector";var cr=class{constructor(e="",t=-1,n=[],s=xu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Qv(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(yn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=Jv(l);l=cf(l,1,u),c=cf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new li(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,g,f,x){if(g.length!==0){let m=[],p=[];Of(g,m,p,f),m.length!==0&&x.push(new h(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let g={},f;for(f=0;f<d.length;f++)if(d[f].morphTargets)for(let x=0;x<d[f].morphTargets.length;x++)g[d[f].morphTargets[x]]=-1;for(let x in g){let m=[],p=[];for(let y=0;y!==d[f].morphTargets.length;++y){let b=d[f];m.push(b.time),p.push(b.morphTarget===x?1:0)}s.push(new li(".morphTargetInfluence["+x+"]",m,p))}l=g.length*a}else{let g=".bones["+t[h].name+"]";n(ui,g+".position",d,"pos",s),n(ci,g+".quaternion",d,"rot",s),n(ui,g+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function jv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return li;case"vector":case"vector2":case"vector3":case"vector4":return ui;case"color":return Eo;case"quaternion":return ci;case"bool":case"boolean":return Li;case"string":return Di}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Qv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=jv(i.type);if(i.times===void 0){let t=[],n=[];Of(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ei={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Zc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let g=c[h],f=c[h+1];if(g.global&&(g.lastIndex=0),g.test(u))return f}return null}}},eM=new Zc,hi=class{constructor(e){this.manager=e!==void 0?e:eM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};hi.DEFAULT_MATERIAL_NAME="__DEFAULT";var jn={},Jc=class extends Error{constructor(e,t){super(e),this.response=t}},Qr=class extends hi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ei.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(jn[e]!==void 0){jn[e].push({onLoad:t,onProgress:n,onError:s});return}jn[e]=[],jn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=jn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),g=d?parseInt(d):0,f=g!==0,x=0,m=new ReadableStream({start(p){y();function y(){h.read().then(({done:b,value:v})=>{if(b)p.close();else{x+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:f,loaded:x,total:g});for(let T=0,R=u.length;T<R;T++){let I=u[T];I.onProgress&&I.onProgress(E)}p.enqueue(v),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Jc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,g=new TextDecoder(d);return c.arrayBuffer().then(f=>g.decode(f))}}}).then(c=>{Ei.add(e,c);let u=jn[e];delete jn[e];for(let h=0,d=u.length;h<d;h++){let g=u[h];g.onLoad&&g.onLoad(c)}}).catch(c=>{let u=jn[e];if(u===void 0)throw this.manager.itemError(e),c;delete jn[e];for(let h=0,d=u.length;h<d;h++){let g=u[h];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var jc=class extends hi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ei.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=$r("img");function l(){u(),Ei.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Ao=class extends hi{constructor(e){super(e)}load(e,t,n,s){let r=new Pt,a=new jc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ur=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ro=class extends ur{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Gl=new ze,uf=new P,hf=new P,ea=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(uf),hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hf),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qc=class extends ea{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=js*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Co=class extends ur{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Qc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},df=new ze,zr=new P,Wl=new P,eu=class extends ea{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(zr),Wl.copy(n.position),Wl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wl),n.updateMatrixWorld(),s.makeTranslation(-zr.x,-zr.y,-zr.z),df.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(df)}},Io=class extends ur{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},tu=class extends ea{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new tu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ni=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Po=class extends hi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ei.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ei.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ei.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ei.add(e,l),r.manager.itemStart(e)}};var nu=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){rn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;rn.multiplyQuaternionsFlat(e,a,e,t,e,n),rn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},Mu="\\[\\]\\.:\\/",tM=new RegExp("["+Mu+"]","g"),bu="[^"+Mu+"]",nM="[^"+Mu.replace("\\.","")+"]",iM=/((?:WC+[\/:])*)/.source.replace("WC",bu),sM=/(WCOD+)?/.source.replace("WCOD",nM),rM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bu),aM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bu),oM=new RegExp("^"+iM+sM+rM+aM+"$"),lM=["material","materials","bones","map"],iu=class{constructor(e,t,n){let s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tM,"")}static parseTrackName(e){let t=oM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=iu;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var su=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Bs,endingEnd:Bs};for(let c=0;c!==a;++c){let u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=gu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Sg:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case xu:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===bg;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===mu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=zs,s.endingEnd=zs):(e?s.endingStart=this.zeroSlopeAtStart?zs:Bs:s.endingStart=to,t?s.endingEnd=this.zeroSlopeAtEnd?zs:Bs:s.endingEnd=to)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},cM=new Float32Array(1),Lo=class extends ri{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=s[h],g=d.name,f=u[g];if(f!==void 0)++f.referenceCount,a[h]=f;else{if(f=a[h],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,g));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;f=new nu(ft.create(n,g,x),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,g),a[h]=f}o[h].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new To(new Float32Array(2),new Float32Array(2),1,cM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?cr.findByName(s,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=xu),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let u=new su(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?cr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ru}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ru);function Su(i,e){if(e===Tf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===na||e===No){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===na)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Oo=class extends hi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Iu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Wu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ni.extractUrlBase(e);a=Ni.resolveURL(c,this.path)}else a=Ni.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Qr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Vf){try{a[Ze.KHR_BINARY_GLTF]=new Xu(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ju(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:a[h]=new Ru;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[h]=new qu(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[h]=new Yu;break;case Ze.KHR_MESH_QUANTIZATION:a[h]=new $u;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function uM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Au=class{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ee(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],qt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new hr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Io(u),c.distance=h;break;case"spot":c=new Co(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,di(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Ru=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Rt}extendParams(e,t,n){let s=[];e.color=new Ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],qt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(s)}},Cu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Iu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(o,o)}return Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Lu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Du=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],qt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Et)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Nu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Uu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(o[0],o[1],o[2],qt),Promise.all(r)}},ku=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Ou=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(o[0],o[1],o[2],qt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Et)),Promise.all(r)}},Fu=class{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Bu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},zu=class{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Hu=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Vu=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Gu=class{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(g){return g.buffer}):a.ready.then(function(){let g=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(g),u,h,d,s.mode,s.filter),g})})}else return null}},Wu=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==vn.TRIANGLES&&c.mode!==vn.TRIANGLE_STRIP&&c.mode!==vn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,g=[];for(let f of h){let x=new ze,m=new P,p=new rn,y=new P(1,1,1),b=new xo(f.geometry,f.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),b.setMatrixAt(v,x.compose(m,p,y));for(let v in l)if(v==="_COLOR_0"){let E=l[v];b.instanceColor=new rs(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&f.geometry.setAttribute(v,l[v]);vt.prototype.copy.call(b,f),this.parser.assignFinalMaterial(b),g.push(b)}return u.isGroup?(u.clear(),u.add(...g),u):g[0]}))}},Vf="glTF",sa=12,Ff={JSON:1313821514,BIN:5130562},Xu=class{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,sa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-sa,r=new DataView(e,sa),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Ff.JSON){let c=new Uint8Array(e,sa+a,o);this.content=n.decode(c)}else if(l===Ff.BIN){let c=sa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},qu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=Zu[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Zu[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],g=fr[d.componentType];c[h]=g.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(g){for(let f in g.attributes){let x=g.attributes[f],m=l[f];m!==void 0&&(x.normalized=m)}h(g)},o,c,qt,d)})})}},Yu=class{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},$u=class{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}},Fo=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,g=d*h,f=e*c,x=f-c,m=-2*g+3*d,p=g-d,y=1-m,b=p-d+h;for(let v=0;v!==o;v++){let E=a[x+v+o],T=a[x+v+l]*u,R=a[f+v+o],I=a[f+v]*u;r[v]=y*E+b*T+m*R+p*I}return r}},hM=new rn,Ku=class extends Fo{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return hM.fromArray(r).normalize().toArray(r),r}},vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bf={9728:kt,9729:sn,9984:ou,9985:Gr,9986:Fs,9987:zn},zf={33071:ti,33648:ns,10497:ts},wu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dM={CUBICSPLINE:void 0,LINEAR:Js,STEP:Zs},Tu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new lr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_n})),i.DefaultMaterial}function as(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function di(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function mM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gM(i){let e,t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Eu(t.attributes):e=i.indices+":"+Eu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Eu(i.targets[n]);return e}function Eu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ju(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var _M=new ze,ju=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&a<98?this.textureLoader=new Ao(this.options.manager):this.textureLoader=new Po(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return as(r,o,s),di(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ni.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=wu[s.type],o=fr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new wt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=wu[s.type],c=fr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,g=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,f=s.normalized===!0,x,m;if(g&&g!==h){let p=Math.floor(d/g),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,b=t.cache.get(y);b||(x=new c(o,p*g,s.count*g/u),b=new nr(x,g/u),t.cache.add(y,b)),m=new ss(b,l,d%g/u,f)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),m=new wt(x,l,f);if(s.sparse!==void 0){let p=wu.SCALAR,y=fr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new y(a[1],b,s.sparse.count*p),T=new c(a[2],v,s.sparse.count*l);o!==null&&(m=new wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,I=E.length;R<I;R++){let _=E[R];if(m.setX(_,T[R*l]),l>=2&&m.setY(_,T[R*l+1]),l>=3&&m.setZ(_,T[R*l+2]),l>=4&&m.setW(_,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=f}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Bf[d.magFilter]||sn,u.minFilter=Bf[d.minFilter]||zn,u.wrapS=zf[d.wrapS]||ts,u.wrapT=zf[d.wrapT]||ts,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==kt&&u.minFilter!==sn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,g){let f=d;t.isImageBitmapLoader===!0&&(f=function(x){let m=new Pt(x);m.needsUpdate=!0,d(m)}),t.load(Ni.resolveURL(h,r.path),f,void 0,g)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),di(h,a),h.userData.mimeType=a.mimeType||xM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new jr,Zt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Jr,Zt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return lr}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){let h=s[Ze.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],qt),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Et)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=At);let u=r.alphaMode||Tu.OPAQUE;if(u===Tu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Tu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Rt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ie(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Rt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Rt){let h=r.emissiveFactor;o.emissive=new Ee().setRGB(h[0],h[1],h[2],qt)}return r.emissiveTexture!==void 0&&a!==Rt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Et)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),di(h,r),t.associations.set(h,{materials:e}),r.extensions&&as(s,h,r),h})}createUniqueName(e){let t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Hf(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=gM(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Hf(new bt,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?fM(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let g=0,f=u.length;g<f;g++){let x=u[g],m=a[g],p,y=c[g];if(m.mode===vn.TRIANGLES||m.mode===vn.TRIANGLE_STRIP||m.mode===vn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new mo(x,y):new Pe(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===vn.TRIANGLE_STRIP?p.geometry=Su(p.geometry,No):m.mode===vn.TRIANGLE_FAN&&(p.geometry=Su(p.geometry,na));else if(m.mode===vn.LINES)p=new vo(x,y);else if(m.mode===vn.LINE_STRIP)p=new sr(x,y);else if(m.mode===vn.LINE_LOOP)p=new Mo(x,y);else if(m.mode===vn.POINTS)p=new rr(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&mM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),di(p,r),m.extensions&&as(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let g=0,f=h.length;g<f;g++)t.associations.set(h[g],{meshes:e,primitives:g});if(h.length===1)return r.extensions&&as(s,h[0],r),h[0];let d=new rt;r.extensions&&as(s,d,r),t.associations.set(d,{meshes:e});for(let g=0,f=h.length;g<f;g++)d.add(h[g]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(Af.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new tr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),di(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new go(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let g=s.channels[h],f=s.samplers[g.sampler],x=g.target,m=x.node,p=s.parameters!==void 0?s.parameters[f.input]:f.input,y=s.parameters!==void 0?s.parameters[f.output]:f.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(f),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],g=h[1],f=h[2],x=h[3],m=h[4],p=[];for(let y=0,b=d.length;y<b;y++){let v=d[y],E=g[y],T=f[y],R=x[y],I=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let _=n._createAnimationTracks(v,E,T,R,I);if(_)for(let M=0;M<_.length;M++)p.push(_[M])}return new cr(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(g){g.isSkinnedMesh&&g.bind(d,_M)});for(let g=0,f=h.length;g<f;g++)u.add(h[g]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Zr:c.length>1?u=new rt:c.length===1?u=c[0]:u=new vt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),di(u,r),r.extensions&&as(n,u,r),r.matrix!==void 0){let h=new ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new rt;n.name&&(r.name=s.createUniqueName(n.name)),di(r,n),n.extensions&&as(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,g]of s.associations)(d instanceof Zt||d instanceof Pt)&&h.set(d,g);return u.traverse(d=>{let g=s.associations.get(d);g!=null&&h.set(d,g)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];Ui[r.path]===Ui.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Ui[r.path]){case Ui.weights:c=li;break;case Ui.rotation:c=ci;break;case Ui.position:case Ui.scale:c=ui;break;default:switch(n.itemSize){case 1:c=li;break;case 2:case 3:default:c=ui;break}break}let u=s.interpolation!==void 0?dM[s.interpolation]:Js,h=this._getArrayFromAccessor(n);for(let d=0,g=l.length;d<g;d++){let f=new c(l[d]+"."+Ui[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),a.push(f)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ju(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ci?Ku:Fo;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function yM(i,e,t){let n=e.attributes,s=new Ot;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){let u=Ju(fr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,l=new P;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],g=d.min,f=d.max;if(g!==void 0&&f!==void 0){if(l.setX(Math.max(Math.abs(g[0]),Math.abs(f[0]))),l.setY(Math.max(Math.abs(g[1]),Math.abs(f[1]))),l.setZ(Math.max(Math.abs(g[2]),Math.abs(f[2]))),d.normalized){let x=Ju(fr[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new un;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Hf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Zu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Je.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),di(i,e),yM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?pM(i,e.targets,t):i})}var Qu={_about:"Hero moves. Times in frames at 60 Hz (startup = frames before the hit, active = frames the hit can land, recovery = frames after). reach in metres, arc in radians. balance = Balance points added on hit. All numbers are first guesses until people play.",light1:{role:"string",startup:5,active:3,recovery:13,next:"light2",nextFrom:7,cancel:7,dmg:6,balance:3,reach:1.9,arc:1.7,lunge:.35,stop:3,clip:"attack",sfx:"light"},light2:{role:"string",startup:5,active:3,recovery:14,next:"light3",nextFrom:7,cancel:7,dmg:7,balance:3.5,reach:1.9,arc:1.7,lunge:.35,stop:3,clip:"slash2",sfx:"light"},light3:{role:"string",startup:8,active:4,recovery:20,cancel:11,dmg:10,balance:5,reach:2,arc:1.9,lunge:.6,stop:5,clip:"slash3",sfx:"heavy"},sunder:{role:"opener",cd:2.4,startup:9,active:4,recovery:16,cancel:13,dmg:9,balance:4,apply:{cracked:1},reach:2.1,arc:1.5,lunge:.8,stop:5,clip:"sunder",sfx:"sunder"},tether:{role:"linker",cd:3,startup:7,active:6,recovery:14,cancel:13,dmg:4,balance:6,apply:{bound:1},reach:6.5,arc:.6,lunge:0,stop:4,clip:"tether",sfx:"tether"},breaker:{role:"ender",cd:4,startup:16,active:5,recovery:24,cancel:21,dmg:14,balance:8,consume:{cracked:{dmg:8,balance:16},bound:{dmg:4,balance:12}},reach:2.4,arc:1.9,lunge:.5,stop:7,stopPerStatus:2,clip:"breaker",sfx:"breaker"},giantfall:{role:"finisher",startup:18,active:6,recovery:30,dmg:40,perComboHit:3,reach:3.2,arc:3.2,lunge:1.2,stop:18,slow:[.5,.35],clip:"giantfall",sfx:"giantfall"},counter:{role:"counter",startup:7,active:4,recovery:16,cancel:11,dmg:60,balance:24,reach:2.6,arc:2.2,lunge:5,stop:14,slow:[.45,.35],clip:"slash3",sfx:"heavy",_note:"only after a perfect roll (rules.counter): the hero leaps up to lunge metres at the giant and is safe until the blow lands"},dodge:{clip:"roll",frames:17,iframes:20,perfect:11,dist:3,cd:.45,cancelFrom:12},_cancel:"What a move can be cut into. 'hit' = only after it landed and from its cancel frame; 'recovery' = from the first recovery frame even on a miss; 'hitOrRecovery' = either; 'any' = at any frame (light hits never trap you); 'always' = from nextFrom, hit or miss.",cancelRules:{string:{next:"always",skill:"hit",dodge:"any"},opener:{light:"hit",skill:"hit",dodge:"hitOrRecovery"},linker:{light:"hit",skill:"hit",dodge:"hitOrRecovery"},ender:{light:"hit",skill:"hit",dodge:"recovery"},counter:{light:"hit",skill:"hit",dodge:"hitOrRecovery"},finisher:{dodge:"recovery"}}};var eh={_about:"Rules shared by every fight. Seconds unless the name says frames. First guesses until people play; sources in design/NUMBERS.md.",arena:{radius:8.2},hero:{hp:100,speed:5.2,radius:.45,hurtIframes:.6,hurtLock:.25,hurtPush:1.2,moveInMove:.12,aimAssist:3,pullTime:.16},input:{buffer:.15},combo:{window:2,cap:20,variety:[1,1,1.3,1.6],repeat:.6},balance:{idle:1.5,drain:20,drainFloor:.35},topple:{time:4,dmgMul:2,grow:1.2,getup:.9,afterFinisher:.6,quake:{r:2.4,dmg:60},fallWindow:1.4},status:{cracked:{max:2,time:6,balanceGainPerStack:.25},bound:{max:1,time:3,giantTimeMul:.65}},perfect:{balance:8,slow:[.3,.3]},counter:{_about:"Perfect-dodge counter: after a perfect roll against a standing giant, Strike within window seconds (game time) leaps at him with the counter move. Off unless the page asks for it (?counter=1).",enabled:!1,window:.6},feel:{stopGap:.25,toppleStop:14,toppleSlow:[.45,.3],winSlow:[1.2,.25]},assist:{offerAfter:2,startPct:20,perDownPct:5,capPct:60},flow:{intro:2}};var en={_about:"Giants. wind = telegraph time before the blow (seconds), open = punish window after it, track = share of the wind-up during which a slam follows the hero before it locks. range = [min, max] distance from the giant at which it picks this attack. First guesses until people play.",hollen:{name:"Hollen",title:"Warden of the East Gate",hp:2450,balance:200,radius:1.6,height:5.4,speed:1.35,turn:2.4,reachWant:2.6,think:[.3,.8],phases:[{from:1,attacks:["slam","sweep","charge"],windMul:1,openMul:1},{from:.5,attacks:["slam","sweep","charge","slamSweep"],windMul:.85,openMul:.8,roar:1.4}],attacks:{slam:{shape:"circle",at:"hero",r:2.3,wind:1.05,track:.5,open:1.1,dmg:18,range:[0,7.5],weight:3,sfx:"slam"},sweep:{shape:"ring",at:"self",r:3.9,inner:0,wind:.95,open:.9,dmg:14,range:[0,3.6],weight:3,sfx:"sweep"},charge:{shape:"lane",at:"self",w:3.2,len:9,wind:1,dash:.55,open:1.3,dmg:20,range:[4,30],weight:2,sfx:"charge"},slamSweep:{chain:["slam","sweep"],weight:2}},tint:null},cairn:{name:"Cairn",title:"the Young Warden",hp:1500,balance:80,radius:1.25,height:3.6,speed:1.25,turn:2.2,reachWant:2.3,think:[.6,1.2],tint:"#c7c08a",phases:[{from:1,attacks:["slam","sweep"],windMul:1,openMul:1}],attacks:{slam:{shape:"circle",at:"hero",r:2,wind:1.15,track:.45,open:1.4,dmg:12,range:[0,7],weight:3,sfx:"slam"},sweep:{shape:"ring",at:"self",r:3.2,inner:0,wind:1,open:1.2,dmg:9,range:[0,3],weight:2,sfx:"sweep"}}}};var Gf={_about:"Elara's lines. Each event has several lines; she says one, never the same one twice in a row, and waits `gap` seconds between lines and stays up long enough to read (at least `show` seconds, or words / `wordsPerSec`) unless the event is urgent. {key:x} is replaced by the key the player uses for x. Plain words, short, warm, a little teasing. Never 'you died'. Non-urgent lines wait `gap` seconds after any line; the same event speaks at most once per `repeatGap` seconds. Urgent = the few story moments (first fight, giant intros, first topple, the end of a run).",gap:18,show:2.8,events:{intro:{urgent:!0,lines:["That's Hollen. Oldest of them all. Be gentle \u2014 he only forgot why he stands.","Hollen again. He's not angry at you. He's just lost.","Ready? Crack him, hold him, break him \u2014 in any order. Mixing is what fills the bar."]},firstFight:{urgent:!0,lines:["Little stones first. Move with {key:move}, strike with {key:light}. Watch the red on the floor \u2014 that's where they land."]},firstWind:{lines:["Red floor means he's coming down there. Roll out with {key:dodge}!","See him wind up? That's your cue to roll."],urgent:!1},firstHurt:{lines:["Ouch. Roll when the red fills up, not before.","Get out of the red, Breaker!"],urgent:!1},firstPerfect:{urgent:!1,lines:["Perfect! Rolling right as he lands shakes his balance.","Ooh \u2014 right on the beat. He felt that."]},firstCounter:{urgent:!1,lines:["He's open \u2014 {key:light}, strike back now!","Now! {key:light} \u2014 hit him before he recovers!"]},noSkills:{lines:["Try {key:sunder} \u2014 Sunder cracks the stone.","Strikes alone won't bring him down. Crack him with {key:sunder}."],urgent:!1},firstCracked:{urgent:!1,lines:["He's cracked! Now hold him with {key:tether}, or break it open with {key:breaker}.","Cracked! A Break on that will hurt his balance a lot."]},firstBound:{lines:["Bound! He's slow now. Finish with {key:breaker}.","Got him tethered. Break it, quick!"],urgent:!1},firstSpend:{urgent:!1,lines:["See the gold bar jump? That's his balance going.","That's it \u2014 crack, hold, break. Look at his balance bar!"]},teeter:{lines:["He's teetering! One more push!","Almost \u2014 he's swaying!"],urgent:!1},firstTopple:{urgent:!0,lines:["He's DOWN! Hit him while he's down \u2014 when Break says FALL!, finish him with {key:breaker}.","Down he goes! Beat on him \u2014 then Giantfall with {key:breaker} when it says FALL!"]},topple:{urgent:!1,lines:["Down again!","Timber!","He's down \u2014 make it count!","Again! He'll be steadier next time."]},finisherBig:{lines:["That was beautiful.","The terrace shook. Did you feel it?","Big combo, big fall. I like your style."],urgent:!1},repeat:{lines:["Same trick again? He's learning it. Mix it up.","You keep doing that one. Try a different order!","Variety, Breaker. The bar fills faster when you mix."],urgent:!1},lowHp:{urgent:!1,lines:["Careful! You're hurt. Roll more, swing less.","Breathe. Watch him. Roll."]},phase2:{urgent:!1,lines:["He's angry now. Faster swings \u2014 watch closely.","Half his strength gone and he knows it. Stay sharp!"]},winFirst:{urgent:!0,lines:["\u266A Hm-mm, hm-mm\u2026 \u266A Sleep now, Hollen. \u2026Thank you, Breaker."]},win:{urgent:!0,lines:["\u266A Hm-mm\u2026 \u266A He's sleeping. Gently done.","\u266A Hm, hm-mm\u2026 \u266A Rest, old Warden.","\u266A Hm-mm\u2026 \u266A Another fall. You're getting good at this."]},down1:{urgent:!0,lines:["Get up, Breaker. He was hurting too.","Up you get. You saw his moves now."]},down2:{urgent:!0,lines:["That was close. If you want, I can take some of the hits with you \u2014 your choice.","Again? Good. I'm staying right here."]},downMore:{urgent:!0,lines:["Every fall teaches something. What did he do just before?","You're closer each time. I can see it.","Deep breath. Mix your skills \u2014 the bar fills faster."]},close:{urgent:!0,lines:["He was SO close to falling. One more try?","A sliver! He had a sliver left!"]},runAgain:{urgent:!0,lines:["The terrace again. You know them better now.","Up we go. Crack, hold, break \u2014 any order, just mix.","Back where we started \u2014 but you're not the same Breaker."]},firstFoeWind:{lines:["See that little red circle? It's about to jump at you. Roll!","Shardlings lunge after they glow. Hit them first \u2014 a hit breaks their wind-up."],urgent:!1},firstKill:{lines:["One down!","Shardlings are bits of Warden stone. They'll sleep too.","Nice. Keep moving."],urgent:!1},waveNext:{lines:["More coming. The far ones throw stones \u2014 Tether pulls them close.","Slingers keep their distance. {key:tether} drags them in.","Here comes the next lot."],urgent:!1},swarm:{urgent:!1,lines:["The wind's turning. Dusk is when Hollen wakes.","A whole swarm. Stay moving, Breaker.","They're everywhere \u2014 use the walls, don't get surrounded."]},pickFirst:{urgent:!0,lines:["Rest a moment. Pick a power \u2014 each one changes how your combos work."]},pick:{urgent:!1,lines:["Choose well.","Which one feels like you?","Take a breath. Then choose."]},picked:{lines:["Good choice.","Ooh, I like that one.","Let's see what that does to them."],urgent:!1},cairnIntro:{urgent:!0,lines:["That's Cairn. The youngest Warden. Watch the gold bar under his name \u2014 fill it and he falls.","Cairn! He's clumsy. Fill the gold bar under his name and he'll sit down hard."]},cairnAgain:{urgent:!0,lines:["Cairn again. You know his trick.","Hello again, little Warden."]},cairnRest:{urgent:!0,lines:["Sleep, Cairn. ...Hear that? Something big is waking.","He's resting. That was the easy one."]},hollenIntro:{urgent:!0,lines:["That's Hollen. Oldest of them all. Be gentle \u2014 he only forgot why he stands.","Hollen. He guarded the East Gate before anyone remembers. Bring him down."]},hollenAgain:{urgent:!0,lines:["Hollen again. He remembers you too.","Him. Deep breath."]},adds:{lines:["He's calling the little ones! Topple him next to them \u2014 the fall smashes them.","Shardlings! Lure them close to him, then bring him down on them."],urgent:!1},firstCrush:{urgent:!1,lines:["Did you see that? His fall smashed them!","Ha! Bring him down next to them \u2014 the ground does the rest."]},crush:{lines:["Crushed!","The fall did that. Beautiful.","Timber \u2014 and the little ones with him."],urgent:!1}},repeatGap:90,wordsPerSec:3.5};var Wf={_about:"Small foes: Shardlings, young bits of Warden stone. No Balance bar; a hit interrupts their wind-up (stagger). wind = warning before the blow (s). First guesses until people play.",shardling:{name:"Shardling",hp:70,radius:.55,height:1.3,speed:2.6,reach:1.4,wind:.55,dmg:7,lunge:1.6,rest:[.9,1.6],stagger:.35,push:.6,tint:"#b9a17a"},slinger:{name:"Slinger",hp:50,radius:.5,height:1.15,speed:2.2,keep:[4.5,6.5],wind:.7,dmg:7,shot:{speed:9,radius:.35,life:1.6},rest:[1.4,2.2],stagger:.4,push:.6,tint:"#7d8aa8"},status:{crackedDmgMul:1.5,boundStun:1.2,breakerShatter:2.5}};var pr={_about:"Power cards: one is picked from three after each early stage. Each changes how combos are built and most cost something. 'set' writes into sim.mods (src/sim/mods.js). Numbers are first guesses.",cards:[{id:"burningTether",name:"Burning Tether",text:"Tether also CRACKS the stone. Its cooldown is 1 s longer.",set:{tetherCracks:!0,"cd.tether":1}},{id:"deepFissure",name:"Deep Fissure",text:"CRACKED stacks up to 3. Sunder's cooldown is 0.6 s longer.",set:{crackedMax:1,"cd.sunder":.6}},{id:"lingering",name:"Lingering Crack",text:"Break leaves one CRACK behind, but each spent status gives 25% less Balance.",set:{breakKeepsCrack:!0,breakGainMul:.75}},{id:"rollCrack",name:"Splitting Roll",text:"A Perfect roll CRACKS the giant.",set:{perfectCracks:!0}},{id:"longTether",name:"Long Tether",text:"Tether reaches 3 m further and pulls YOU to the giant. Cooldown +0.5 s.",set:{tetherReach:3,tetherPullsSelf:!0,"cd.tether":.5}},{id:"quickHands",name:"Quick Hands",text:"Strikes add 60% more Balance. Every skill cools down 20% slower.",set:{lightBalanceMul:1.6,cdMul:1.2}},{id:"heavySunder",name:"Heavy Sunder",text:"Sunder cracks twice. Its cooldown is 1.5 s longer.",set:{sunderStacks:2,"cd.sunder":1.5}},{id:"afterquake",name:"Afterquake",text:"Giantfall shakes the whole terrace: every small foe takes 40. Topples last 1 s longer.",set:{giantfallQuake:40,toppleTime:1}},{id:"secondWind",name:"Second Wind",text:"Heal 2 HP every time a giant topples.",set:{toppleHeal:2}},{id:"chainReaction",name:"Chain Reaction",text:"Breaking a BOUND giant makes Tether ready again.",set:{breakResetsTether:!0}},{id:"glassStone",name:"Glass Stone",text:"Deal 25% more damage. Take 25% more damage.",set:{dmgOut:1.25,dmgIn:1.25}},{id:"steadyFeet",name:"Steady Feet",text:"Roll again 40% sooner, but each roll keeps you safe 40% shorter. Perfect window 4 frames longer. Strikes do 15% less damage.",set:{dodgeCdMul:.6,perfectBonus:4,lightDmgMul:.85,dodgeSafeMul:.6}}]};var Bo={_about:"One run, about 4 minutes. Stages play in order; 'pick' offers 3 power cards (and rests: heal). The run is won when the last giant rests; a down restarts the run. Spawn ring = metres from the centre. Targets per stage are guesses to check with bots (tools/run-sweep.mjs).",intro:1.6,pickHeal:35,spawnRing:7.2,stages:[{type:"wave",name:"The Terrace Wakes",mood:1,foes:[["shardling",3]],target:"0:00-0:25",later:[["shardling",2]]},{type:"pick"},{type:"wave",name:"Stones That Throw",mood:1,foes:[["shardling",3],["slinger",2]],target:"0:30-0:55",later:[["shardling",2],["slinger",1]]},{type:"giant",giant:"cairn",mood:1,foes:[],target:"1:00-1:45",adds:{at:.5,foes:[["shardling",3]]}},{type:"pick"},{type:"wave",name:"The Swarm",mood:2,foes:[["shardling",3],["slinger",2]],later:[["shardling",3],["slinger",1]],target:"1:50-2:40"},{type:"pick"},{type:"giant",giant:"hollen",mood:2,foes:[],adds:{at:.6,foes:[["shardling",3]]},target:"2:50-4:30"}]};function Ho(i){let e=i>>>0||1,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.weighted=(n,s)=>{let r=n.reduce((o,l)=>o+s(l),0),a=t()*r;for(let o of n)if(a-=s(o),a<=0)return o;return n[n.length-1]},t.state=()=>e,t}var zo=class{constructor(){this.n={},this.timed=[]}add(e){this.n[e]=(this.n[e]||0)+1}release(e){if(!this.n[e])throw new Error(`lock "${e}" released more often than taken`);this.n[e]--}has(e){return(this.n[e]||0)>0}hold(e,t){this.add(e),this.timed.push({k:e,t})}tick(e){for(let t=this.timed.length-1;t>=0;t--){let n=this.timed[t];n.t-=e,n.t<=0&&(this.release(n.k),this.timed.splice(t,1))}}clear(){this.n={},this.timed=[]}};function Xf(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0).toString(16).padStart(8,"0")}var nt=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z),Mt=(i,e)=>Math.atan2(e.x-i.x,e.z-i.z),th=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},mr=(i,e,t)=>{let n=th(e-i);return i+Math.max(-t,Math.min(t,n))};var AM=new Set(["opener","linker","ender"]);function nh(){return{hits:0,t:0,skills:[],last:null,best:0}}function Vo(i,e=i.combo){let t=i.data.rules.combo.variety,n=new Set(e.skills).size;return t[Math.min(n,t.length-1)]}function gr(i,e){let t=i.combo;if(t.hits>0){let s=t.skills.join(">");i.fight.combos.push({hits:t.hits,seq:s,reason:e,variety:Vo(i)}),i.emit({t:"comboEnd",hits:t.hits,seq:s,reason:e})}let n=Math.max(t.best,t.hits);i.combo=nh(),i.combo.best=n}function qf(i,e){let t=i.combo;t.hits===0||i.hero.dodge||(t.t-=e,t.t<=0&&gr(i,"time"))}function ih(i,e){let t=i.data.rules,n=i.data.moves[e],s=i.combo;if(e==="giantfall")return s.hits++,s.t=t.combo.window,{variety:1,repeat:!1};let r=!1;return AM.has(n.role)&&(r=s.last===e,s.skills.push(e),s.last=e),s.hits++,s.t=t.combo.window,{variety:Vo(i),repeat:r}}function RM(i,e){return i.data.rules.status[e].max+(e==="cracked"?i.mods.crackedMax:0)}function sh(i,e,t,n=1){let s=i.data.rules.status[t],r=e.status[t],a=r.n;r.n=Math.min(RM(i,t),r.n+n),r.t=s.time,r.n!==a&&i.emit({t:"status",on:!0,name:t,n:r.n,target:e.kind,id:e.id}),t==="cracked"&&r.n>i.data.rules.status.cracked.max&&i.powerFired("deepFissure")}function Go(i,e,t){for(let n of Object.keys(e.status)){let s=e.status[n];s.n>0&&(s.t-=t,s.t<=0&&(s.n=0,i.emit({t:"status",on:!1,name:n,n:0,target:e.kind,id:e.id})))}}function Yf(i,e,t){let n={...t.apply||{}};return e==="sunder"&&(n.cracked=i.mods.sunderStacks),e==="tether"&&i.mods.tetherCracks&&(n.cracked=(n.cracked||0)+1),n}var $f=(i,e)=>i.mods.dmgOut*(e.role==="string"?i.mods.lightDmgMul:1);function Kf(i,e,t,n){let s=i.mods;e==="tether"&&s.tetherCracks&&i.powerFired("burningTether"),e==="sunder"&&s.sunderStacks>1&&i.powerFired("heavySunder"),t.role==="string"&&s.lightBalanceMul>1&&n&&i.powerFired("quickHands"),s.dmgOut>1&&i.powerFired("glassStone"),t.role==="string"&&s.lightDmgMul<1&&i.powerFired("steadyFeet")}function Zf(i,e,t,n=ih(i,e)){let s=i.data.rules,r=i.mods,a=i.data.moves[e],o=t.state==="toppled",l={move:e,role:a.role,dmg:a.dmg,dmgMul:$f(i,a),balance:a.balance||0,balanceMul:a.role==="string"?r.lightBalanceMul:1,apply:Yf(i,e,a),consumed:{},variety:n.variety,repeat:n.repeat,toppled:o,toppledNow:!1};if(a.consume){for(let[d,g]of Object.entries(a.consume)){let f=t.status[d].n;f>0&&(l.dmg+=g.dmg*f,l.balance+=g.balance*f*r.breakGainMul,l.consumed[d]=f,t.status[d].n=0,i.emit({t:"status",on:!1,name:d,n:0,consumed:!0,target:"giant"}))}r.breakKeepsCrack&&l.consumed.cracked&&(t.status.cracked.n=1,t.status.cracked.t=s.status.cracked.time,i.powerFired("lingering")),r.breakResetsTether&&l.consumed.bound&&(i.hero.cd.tether=0,i.powerFired("chainReaction"))}if(l.balanceMul+=s.status.cracked.balanceGainPerStack*t.status.cracked.n,e==="giantfall"){let d=t.toppleQ||{hits:0,variety:1};l.dmg+=a.perComboHit*d.hits,l.dmgMul*=d.variety,l.variety=d.variety}else{o&&(l.dmgMul*=s.topple.dmgMul);let d=l.repeat?s.combo.repeat:1;l.dmgMul*=l.variety*d,l.balanceMul*=l.variety*d}for(let d of i.hooks.beforeHit)d(l,t,i);let c=Math.max(1,Math.round(l.dmg*l.dmgMul));t.hp=Math.max(0,t.hp-c);let u=i.hero;t.lastHitDir=Mt(u,t),t.sinceHit=0;let h=0;!o&&t.state!=="fallen"&&(h=l.balance*l.balanceMul,Number.isFinite(h)||(h=0),t.balance=Math.min(t.balMax,t.balance+h));for(let[d,g]of Object.entries(l.apply))sh(i,t,d,g);if(e==="tether"&&r.tetherPullsSelf){let d=Mt(t,u),g=t.radius+1,f=s.hero.pullTime;u.pull={x0:u.x,z0:u.z,x1:t.x+Math.sin(d)*g,z1:t.z+Math.cos(d)*g,t:0,dur:f},u.iframe=Math.max(u.iframe,f+.05),i.emit({t:"pull",x0:u.x,z0:u.z,x:u.pull.x1,z:u.pull.z1}),i.powerFired("longTether")}Kf(i,e,a,h>0),i.fight.dmgDealt+=c,i.emit({t:"hit",target:"giant",move:e,dmg:c,gain:Math.round(h*10)/10,variety:l.variety,repeat:l.repeat,consumed:l.consumed,toppled:o,x:t.x,z:t.z,combo:i.combo.hits}),e==="counter"?(i.slowT=0,i.slowScale=1,i.stopT=Math.max(i.stopT,a.stop/60),i.lastStopAt=i.realTime,i.lastStopLen=a.stop/60):i.stop(a.stop+(a.stopPerStatus||0)*Object.values(l.consumed).reduce((d,g)=>d+g,0)),a.slow&&i.slow(a.slow[0],a.slow[1]);for(let d of i.hooks.afterHit)d(l,t,i);if(e==="giantfall"&&r.giantfallQuake){for(let d of i.foes)d.hp>0&&Wo(i,d,r.giantfallQuake,"quake",Mt(t,d),1.5);i.powerFired("afterquake")}if(t.hp<=0)return i.giantFallen(t),l;if(e==="giantfall"&&t.state==="toppled"&&(t.t=Math.min(t.t,s.topple.afterFinisher)),!o&&t.balance>=t.balMax)i.topple(t),l.toppledNow=!0;else{let d=i.giantDef(t).phases[t.phase+1];d&&t.hp/t.max<=d.from&&i.phaseUp(t)}return i.combo.hits>=s.combo.cap&&gr(i,"cap"),l}function Wo(i,e,t,n,s,r=1){let a=i.data.foes[e.type];e.hp=Math.max(0,e.hp-t),(e.state==="wind"||e.state==="move"||e.state==="rest")&&(e.state="stagger",e.t=a.stagger,e.tg=null),e.x+=Math.sin(s)*a.push*r,e.z+=Math.cos(s)*a.push*r,e.flash=1,e.hp<=0&&i.foeDown(e,n)}function Jf(i,e,t,n){let s=i.data.moves[e],r=i.data.foes.status,a=i.data.rules,o=s.dmg*$f(i,s)*n.variety*(n.repeat?a.combo.repeat:1),l=1,c={};if(t.status.cracked.n>0&&(o*=r.crackedDmgMul),s.consume)for(let[f,x]of Object.entries(s.consume)){let m=t.status[f].n;m>0&&(o+=x.dmg*2*m,c[f]=m,t.status[f].n=0,l=r.breakerShatter)}let u=i.hero,h=Mt(u,t),d=Yf(i,e,s);for(let[f,x]of Object.entries(d))sh(i,t,f,x);if(d.bound){let f=1.1+t.radius;t.x=u.x+Math.sin(h)*f,t.z=u.z+Math.cos(h)*f,t.state="stun",t.t=r.boundStun,t.tg=null,l=0}let g=Math.max(1,Math.round(o));i.fight.dmgDealt+=g,Kf(i,e,s,!1),i.emit({t:"hit",target:"foe",id:t.id,move:e,dmg:g,variety:n.variety,repeat:n.repeat,consumed:c,x:t.x,z:t.z,combo:i.combo.hits}),Wo(i,t,g,e,h,l),t.state==="stagger"&&d.bound&&(t.state="stun",t.t=r.boundStun),i.stop(Math.max(2,s.stop-2)),i.combo.hits>=a.combo.cap&&gr(i,"cap")}function os(i,e,t){var u,h;let n=i.hero,s=i.data.rules,r=i.data.moves.dodge,a=t&&t.kind==="giant"?t:null;if(i.flow.state!=="fight"||n.hp<=0||i.giant&&i.giant.state==="fallen")return"none";if(n.dodge&&n.dodge.t*60<r.perfect+i.mods.perfectBonus)return i.fight.perfects++,i.emit({t:"perfect",x:n.x,z:n.z}),i.slow(s.perfect.slow[0],s.perfect.slow[1]),n.dodge.t*60>=r.perfect&&i.powerFired("steadyFeet"),a&&a.state!=="toppled"&&a.state!=="fallen"&&(a.balance=Math.min(a.balMax,a.balance+s.perfect.balance),a.sinceHit=0,i.mods.perfectCracks&&(sh(i,a,"cracked",1),i.powerFired("rollCrack")),a.balance>=a.balMax&&(a.lastHitDir=Mt(n,a),i.topple(a))),i.counterOn&&a&&a.state!=="toppled"&&a.state!=="fallen"&&a.hp>0&&(n.counterT=s.counter.window,i.fight.counterWins++,i.emit({t:"counterReady",x:n.x,z:n.z})),"perfect";if(n.iframe>0||n.hurtT>0)return i.emit({t:"evade"}),"evade";let o={dmg:e.dmg,mul:(1-i.assistPct/100)*i.mods.dmgIn};for(let d of i.hooks.beforeHurt)d(o,t,i);let l=Math.max(1,Math.round(o.dmg*o.mul));i.mods.dmgIn>1&&i.powerFired("glassStone",{hurt:!0}),n.hp=Math.max(0,n.hp-l),n.hurtT=s.hero.hurtIframes,n.iframe=s.hero.hurtIframes,i.locks.hold("act",s.hero.hurtLock),n.move=null;let c=Mt(t,n);n.x+=Math.sin(c)*s.hero.hurtPush*(a?1:.5),n.z+=Math.cos(c)*s.hero.hurtPush*(a?1:.5),i.fight.hitsTaken++,i.fight.dmgTaken+=l;{let d=(a?a.id+":":"")+(e.name||"?");if(i.fight.hitsBy[d]=(i.fight.hitsBy[d]||0)+1,i.run){let g=(u=i.fight.hitsByStage)[h=i.run.stage]||(u[h]={});g[d]=(g[d]||0)+1}}return gr(i,"hurt"),i.emit({t:"hurt",dmg:l,hp:n.hp,from:e.name}),n.hp<=0&&i.heroDown(),"hurt"}var CM=["light","sunder","tether","breaker","dodge"],ep=["sunder","tether","breaker"];function tp(i){return{x:0,z:4.5,face:Math.PI,hp:i.hero.hp,max:i.hero.hp,move:null,dodge:null,dodgeCd:0,iframe:0,hurtT:0,counterT:0,pull:null,cd:{sunder:0,tether:0,breaker:0},mx:0,mz:0,moving:!1}}var np=i=>i&&i.state!=="fallen"&&i.state!=="intro";function xr(i){let e=i.foes.filter(t=>t.hp>0&&t.state!=="spawn");return np(i.giant)&&e.push(i.giant),e}function IM(i,e){let t=i.hero,n=i.data.moves,s=i.giant;if(e==="light"&&t.counterT>0&&np(s)&&s.state!=="toppled")return"counter";if(e==="light"){let r=t.move&&n[t.move.id];return r&&r.role==="string"&&r.next?r.next:"light1"}return e==="breaker"&&s&&s.state==="toppled"&&!s.finisherUsed?"giantfall":e}function jf(i,e){let t=i.hero,n=i.data.moves;if(i.locks.has("act")||ep.includes(e)&&t.cd[e]>0||e==="dodge"&&t.dodgeCd>0)return!1;if(t.dodge)return e==="counter"||e!=="dodge"&&t.dodge.t*60+1e-6>=n.dodge.cancelFrom;if(!t.move)return e!=="light2"&&e!=="light3";let s=n[t.move.id],r=t.move.t*60+1e-6,a=n.cancelRules[s.role]||{},o;e==="dodge"?o="dodge":s.role==="string"&&e===s.next?o="next":n[e].role==="string"?o="light":o="skill";let l=a[o];return l?l==="always"?r>=s.nextFrom:l==="hit"?t.move.hit&&r>=s.cancel:l==="recovery"?r>=s.startup+s.active:l==="hitOrRecovery"?t.move.hit&&r>=s.cancel||r>=s.startup+s.active:l==="any":!1}var ip=(i,e)=>i.data.moves[e].reach+(e==="tether"?i.mods.tetherReach:0);function PM(i,e){let t=i.hero,n=i.data.moves,s=i.data.rules,r=n[e],a=i.giant;t.move&&t.move.id!==e&&i.emit({t:"cancel",from:t.move.id,to:e}),t.dodge=null,t.move={id:e,t:0,hit:!1,done:!1},t.counterT=0,e==="counter"&&(i.slowT=0,i.slowScale=1,t.iframe=Math.max(t.iframe,(r.startup+r.active)/60),i.fight.counters++),r.cd&&(t.cd[e]=(r.cd+i.mods.cd[e])*i.mods.cdMul),e==="giantfall"&&a&&(a.finisherUsed=!0,a.state==="toppled"&&(a.t=Math.max(a.t,(r.startup+r.active)/60+.05)));let o=ip(i,e)+s.hero.aimAssist,l=xr(i).filter(u=>nt(t,u)-u.radius<o).sort((u,h)=>nt(t,u)-u.radius-(nt(t,h)-h.radius)),c=(e==="giantfall"||e==="counter")&&a||l.includes(a)&&nt(t,a)-a.radius<r.reach+1.2?a:l[0];c?t.face=Mt(t,c):t.moving&&(t.face=Math.atan2(t.mx,t.mz)),i.fight.moves[e]=(i.fight.moves[e]||0)+1,i.emit({t:"swing",move:e})}function Qf(i){let e=i.hero,t=i.data.moves.dodge;e.move&&i.emit({t:"cancel",from:e.move.id,to:"dodge"}),e.move=null,e.counterT=0,e.pull=null;let n=e.moving?Math.atan2(e.mx,e.mz):e.face+Math.PI;e.dodge={t:0,a:n,p:0},e.dodgeCd=t.cd*i.mods.dodgeCdMul,e.iframe=t.iframes/60*i.mods.dodgeSafeMul,i.fight.dodges++,i.emit({t:"dodge"})}function sp(i,e){for(let t of e||[])CM.includes(t)&&i.buffer.push({p:t,age:0})}function rp(i,e){let t=i.data.rules.input.buffer;for(let n=i.buffer.length-1;n>=0;n--)i.buffer[n].age+=e,i.buffer[n].age>t&&(i.fight.dropped++,i.buffer.splice(n,1))}function LM(i){let e=i.buffer.findIndex(t=>t.p==="dodge");if(e>=0){jf(i,"dodge")&&(i.buffer.splice(e,1),Qf(i));return}for(let t=0;t<i.buffer.length;t++){let n=IM(i,i.buffer[t].p);if(jf(i,n)){i.buffer.splice(t,1),n==="dodge"?Qf(i):PM(i,n);return}}}function DM(i,e,t,n){let s=i.hero,r=nt(s,n);if(r-n.radius>t)return!1;let a=e.arc/2+Math.asin(Math.min(1,n.radius/Math.max(r,.01)));return Math.abs(th(Mt(s,n)-s.face))<=a}function NM(i,e){let t=i.data.moves[e],n=ip(i,e),s=i.hero,r=xr(i).filter(a=>DM(i,t,n,a));return e==="giantfall"&&(r=r.filter(a=>a.kind==="giant")),e==="tether"&&r.length>1&&(r.sort((a,o)=>nt(s,a)-a.radius-(nt(s,o)-o.radius)),r=[r[0]]),r.sort((a,o)=>(o.kind==="giant")-(a.kind==="giant"))}function ap(i,e,t){let n=i.hero,s=i.data.rules,r=i.data.moves;for(let o of ep)n.cd[o]=Math.max(0,n.cd[o]-e);n.dodgeCd-=e,n.iframe-=e,n.hurtT-=e,n.counterT=Math.max(0,n.counterT-e),i.locks.tick(e),n.mx=t.mx||0,n.mz=t.mz||0;let a=Math.hypot(n.mx,n.mz);if(a>1&&(n.mx/=a,n.mz/=a),n.moving=Math.hypot(n.mx,n.mz)>.15,i.flow.state!=="fight"||n.hp<=0){n.move=null,n.dodge=null;return}if(LM(i),n.pull){let o=n.pull;o.t+=e;let l=Math.min(1,o.t/o.dur),c=1-(1-l)*(1-l);n.x=o.x0+(o.x1-o.x0)*c,n.z=o.z0+(o.z1-o.z0)*c,l>=1&&(n.pull=null,i.emit({t:"pullEnd",x:n.x,z:n.z}))}if(n.move){let o=n.move,l=r[o.id],c=o.t*60;o.t+=e;let u=o.t*60+1e-6;if(c<l.startup&&l.lunge&&!n.pull){let h=l.lunge*(Math.min(u,l.startup)-c)/l.startup,d=n.x+Math.sin(n.face)*h,g=n.z+Math.cos(n.face)*h;xr(i).some(f=>nt({x:d,z:g},f)<=f.radius+s.hero.radius+.15)||(n.x=d,n.z=g)}if(n.moving&&!n.pull&&(n.x+=n.mx*s.hero.speed*s.hero.moveInMove*e,n.z+=n.mz*s.hero.speed*s.hero.moveInMove*e),!o.done&&u>=l.startup){let h=NM(i,o.id);if(h.length){o.hit=!0,o.done=!0;let d=ih(i,o.id);for(let g of h)g.kind==="giant"?Zf(i,o.id,g,d):g.hp>0&&Jf(i,o.id,g,d)}else u>=l.startup+l.active&&(o.done=!0,i.emit({t:"whiff",move:o.id}))}n.move===o&&u>=l.startup+l.active+l.recovery&&(n.move=null)}else if(n.dodge){let o=r.dodge,l=n.dodge;l.t+=e;let c=Math.min(1,l.t*60/o.frames),u=1-(1-c)*(1-c),h=u-l.p;l.p=u,n.x+=Math.sin(l.a)*o.dist*h,n.z+=Math.cos(l.a)*o.dist*h,c>=1&&(n.dodge=null)}else n.moving&&!n.pull&&!i.locks.has("act")&&(n.x+=n.mx*s.hero.speed*e,n.z+=n.mz*s.hero.speed*e,n.face=Math.atan2(n.mx,n.mz));UM(i)}function UM(i){let e=i.hero,t=i.data.rules;for(let r of xr(i)){let a=nt(e,r),o=r.radius+t.hero.radius;if(a<o){let l=a>1e-4?Mt(r,e):0;e.x=r.x+Math.sin(l)*o,e.z=r.z+Math.cos(l)*o}}let n=Math.hypot(e.x,e.z),s=t.arena.radius-t.hero.radius;n>s&&(e.x*=s/n,e.z*=s/n)}function rh(i,e){let t=i.data.giants[e];return{kind:"giant",id:e,x:0,z:-2.5,introT:null,face:0,hp:t.hp,max:t.hp,balance:0,balMax:t.balance,radius:t.radius,state:"intro",t:0,atk:null,queue:[],phase:0,tg:null,windAge:0,think:0,dashLeft:0,struck:!1,status:{cracked:{n:0,t:0},bound:{n:0,t:0}},sinceHit:99,lastHitDir:0,toppleDir:0,toppleQ:null,topples:0}}var _r=(i,e)=>i.data.giants[e.id],Xo=(i,e)=>_r(i,e).phases[e.phase];function kM(i,e){let t=_r(i,e),n=nt(e,i.hero),s=Xo(i,e).attacks.filter(r=>{let a=t.attacks[r];return a.chain?n<=Math.min(...a.chain.map(o=>t.attacks[o].range[1])):n>=a.range[0]&&n<=a.range[1]});return s.length?i.rng.weighted(s,r=>t.attacks[r].weight):null}function op(i,e,t){let n=_r(i,e),s=Xo(i,e),r=n.attacks[t];r.chain&&(e.queue=r.chain.slice(1),t=r.chain[0],r=n.attacks[t]),e.state="wind",e.atk=t,e.windAge=0,e.t=r.wind*s.windMul,e.struck=!1;let a=i.hero;e.tg={kind:r.shape,x:r.at==="hero"?a.x:e.x,z:r.at==="hero"?a.z:e.z,r:r.r||0,inner:r.inner||0,w:r.w||0,len:r.len||0,ang:e.face,k:0,dur:e.t},i.emit({t:"wind",atk:t,dur:e.t})}function OM(i,e){let t=_r(i,e),n=t.attacks[e.atk],s=i.hero,r=e.tg,a={name:e.atk,dmg:n.dmg};if(i.emit({t:"strike",atk:e.atk,x:r.x,z:r.z}),n.shape==="circle")nt(s,r)<=r.r+.15&&os(i,a,e);else if(n.shape==="ring"){let o=nt(s,e);o<=r.r&&o>=r.inner&&os(i,a,e)}if(e.state==="wind"){if(n.shape==="lane"){e.state="active",e.dashLeft=n.dash;return}lp(i,e)}}function lp(i,e){let t=_r(i,e).attacks[e.atk];e.state="open",e.t=t.open*Xo(i,e).openMul,e.tg=null}function cp(i,e,t){let n=i.data.rules,s=_r(i,e),r=i.hero;Go(i,e,t);let a=t*(e.status.bound.n>0?n.status.bound.giantTimeMul:1);if(e.sinceHit+=t,e.state!=="toppled"&&e.state!=="fallen"&&e.sinceHit>n.balance.idle&&e.balance>0){let c=n.balance.drainFloor+(1-n.balance.drainFloor)*(e.hp/e.max);e.balance=Math.max(0,e.balance-n.balance.drain*c*t)}let o=Mt(e,r),l=nt(e,r);switch(e.state){case"intro":e.introT!=null&&(e.introT-=t,e.introT<=0&&(e.state="approach",e.think=.6,i.emit({t:"giantReady",id:e.id})));break;case"approach":{if(e.face=mr(e.face,o,s.turn*a),l>s.reachWant+e.radius&&(e.x+=Math.sin(e.face)*s.speed*a,e.z+=Math.cos(e.face)*s.speed*a),e.think-=a,e.think<=0){let c=kM(i,e);c&&op(i,e,c)}break}case"wind":{let c=s.attacks[e.atk];e.t-=a,e.windAge+=a;let u=c.track?c.track:.7;e.windAge<e.tg.dur*u&&(e.face=mr(e.face,o,s.turn*a),c.at==="hero"?(e.tg.x=r.x,e.tg.z=r.z):(e.tg.x=e.x,e.tg.z=e.z,e.tg.ang=e.face)),e.tg.k=1-Math.max(0,e.t)/e.tg.dur,e.t<=0&&OM(i,e);break}case"active":{let c=s.attacks[e.atk],u=c.len/c.dash;e.x+=Math.sin(e.tg.ang)*u*a,e.z+=Math.cos(e.tg.ang)*u*a,e.dashLeft-=a;let h=Math.hypot(e.x,e.z),d=n.arena.radius-e.radius*.6;h>d&&(e.x*=d/h,e.z*=d/h,e.dashLeft=0,i.emit({t:"wallHit",x:e.x,z:e.z})),!e.struck&&nt(e,r)<=c.w/2+n.hero.radius&&(e.struck=!0,os(i,{name:e.atk,dmg:c.dmg},e)),e.state==="active"&&e.dashLeft<=0&&lp(i,e);break}case"open":e.t-=a,e.t<=0&&(e.queue.length?op(i,e,e.queue.shift()):(e.state="approach",e.atk=null,e.think=i.rng.range(s.think[0],s.think[1])));break;case"roar":e.t-=a,e.t<=0&&(e.state="approach",e.think=i.rng.range(s.think[0],s.think[1]));break;case"toppled":e.t-=t,!e.fallReady&&e.t<=n.topple.fallWindow&&(e.fallReady=!0,i.emit({t:"fallReady"})),e.t<=0&&(e.state="getup",e.t=n.topple.getup,i.emit({t:"getup"}));break;case"getup":e.t-=a,e.t<=0&&(e.state="approach",e.think=i.rng.range(s.think[0],s.think[1])*.5);break;default:break}}function up(i,e,t){let n=i.data.rules,s=i.hero;e.state="toppled",e.t=n.topple.time+i.mods.toppleTime,e.tg=null,e.queue=[],e.atk=null,e.fallReady=!1,i.mods.toppleTime>0&&i.powerFired("afterquake"),e.balance=0,e.balMax*=n.topple.grow,e.toppleQ=t,e.topples++,e.finisherUsed=!1;let r=e.lastHitDir;Math.abs(Math.sin(r))<.5&&(r+=(s.x>=e.x?-1:1)*Math.PI/3),e.toppleDir=r,i.emit({t:"topple",dir:r,x:e.x,z:e.z,n:e.topples,hits:t.hits});let a=i.giantDef(e).height*.9,o=Math.sin(r),l=Math.cos(r);for(let u of i.foes){if(u.hp<=0||u.state==="dead")continue;let h=u.x-e.x,d=u.z-e.z,g=h*o+d*l,f=Math.abs(h*l-d*o);g>-.5&&g<a&&f<1.3+u.radius&&(u.hp=0,i.fight.crushes++,i.emit({t:"crush",id:u.id,x:u.x,z:u.z}),i.foeDown(u,"crush"))}let c=i.data.rules.topple.quake;for(let u of i.foes)u.hp>0&&u.state!=="dead"&&Math.hypot(u.x-e.x,u.z-e.z)<e.radius+c.r&&(i.fight.crushes++,Wo(i,u,c.dmg,"quake",Math.atan2(u.x-e.x,u.z-e.z),2.5));if(i.mods.toppleHeal){let u=s.hp;s.hp=Math.min(s.max,s.hp+i.mods.toppleHeal),s.hp>u&&(i.emit({t:"heal",n:s.hp-u}),i.powerFired("secondWind"))}}function hp(i,e){e.phase++;let t=Xo(i,e);i.emit({t:"phase",n:e.phase}),!(e.state==="toppled"||e.state==="getup")&&(e.state="roar",e.t=t.roar||1,e.tg=null,e.queue=[],e.atk=null)}function fp(i,e,t,n){let s=i.data.foes[e];return{kind:"foe",id:++i.nextId,type:e,x:t,z:n,face:Mt({x:t,z:n},i.hero),hp:s.hp,max:s.hp,radius:s.radius,state:"spawn",t:.7,tg:null,status:{cracked:{n:0,t:0},bound:{n:0,t:0}},flash:0,struck:!1,lungeLeft:0,cool:0}}function dp(i,e){let t=i.data.foes[e.type],n=i.hero;e.state="wind",e.t=t.wind,e.struck=!1,e.face=Mt(e,n),e.tg=e.type==="slinger"?{kind:"lane",x:e.x,z:e.z,w:.7,len:9,ang:e.face,k:0,dur:t.wind,small:!0}:{kind:"lane",x:e.x,z:e.z,w:2*(e.radius+.35),len:t.lunge+e.radius+.35,ang:e.face,k:0,dur:t.wind,small:!0},i.emit({t:"foeWind",id:e.id,type:e.type})}function pp(i,e){let t=i.hero,n=i.data.rules;for(let r=i.foes.length-1;r>=0;r--){let a=i.foes[r],o=i.data.foes[a.type];if(a.flash=Math.max(0,a.flash-e*8),a.state==="dead"){a.t-=e,a.t<=0&&i.foes.splice(r,1);continue}Go(i,a,e);let l=nt(a,t),c=Mt(a,t);switch(a.state){case"spawn":a.t-=e,a.t<=0&&(a.state="move",a.cool=i.rng.range(.2,.8));break;case"move":{if(a.face=mr(a.face,c,6*e),a.cool-=e,a.type==="slinger"){let[u,h]=o.keep;l<u?(a.x-=Math.sin(c)*o.speed*e,a.z-=Math.cos(c)*o.speed*e):l>h&&(a.x+=Math.sin(c)*o.speed*e,a.z+=Math.cos(c)*o.speed*e),l<=h+1&&a.cool<=0&&dp(i,a)}else l>o.reach+a.radius+n.hero.radius?(a.x+=Math.sin(a.face)*o.speed*e,a.z+=Math.cos(a.face)*o.speed*e):a.cool<=0&&dp(i,a);break}case"wind":if(a.t-=e,a.t>a.tg.dur*.45&&(a.face=mr(a.face,c,5*e),a.type==="slinger"?(a.tg.x=a.x,a.tg.z=a.z,a.tg.ang=a.face):(a.tg.x=a.x+Math.sin(a.face)*o.lunge,a.tg.z=a.z+Math.cos(a.face)*o.lunge)),a.tg.k=1-Math.max(0,a.t)/a.tg.dur,a.t<=0)if(a.type==="slinger"){let u=o.shot;i.shots.push({x:a.x+Math.sin(a.tg.ang)*.6,z:a.z+Math.cos(a.tg.ang)*.6,vx:Math.sin(a.tg.ang)*u.speed,vz:Math.cos(a.tg.ang)*u.speed,r:u.radius,life:u.life,dmg:o.dmg,kind:"shot"}),i.emit({t:"throw",id:a.id}),a.state="rest",a.t=i.rng.range(o.rest[0],o.rest[1]),a.tg=null}else a.state="act",a.lungeLeft=.16,a.tg=null,i.emit({t:"lunge",id:a.id});break;case"act":{let u=o.lunge/.16;a.x+=Math.sin(a.face)*u*e,a.z+=Math.cos(a.face)*u*e,a.lungeLeft-=e,!a.struck&&nt(a,t)<=a.radius+n.hero.radius+.35&&(a.struck=!0,os(i,{name:a.type,dmg:o.dmg},a)),a.lungeLeft<=0&&a.state==="act"&&(a.state="rest",a.t=i.rng.range(o.rest[0],o.rest[1]));break}case"rest":case"stagger":case"stun":a.t-=e,a.t<=0&&(a.cool=a.state==="rest"?0:i.rng.range(.1,.4),a.state="move");break;default:break}}let s=i.foes.filter(r=>r.state!=="dead");for(let r=0;r<s.length;r++){let a=s[r];for(let u=r+1;u<s.length;u++){let h=s[u],d=nt(a,h),g=a.radius+h.radius;if(d<g&&d>1e-4){let f=(g-d)/2,x=Mt(a,h);a.x-=Math.sin(x)*f,a.z-=Math.cos(x)*f,h.x+=Math.sin(x)*f,h.z+=Math.cos(x)*f}}let o=i.giant;if(o&&o.state!=="fallen"){let u=nt(a,o),h=a.radius+o.radius;if(u<h&&u>1e-4){let d=Mt(o,a);a.x=o.x+Math.sin(d)*h,a.z=o.z+Math.cos(d)*h}}let l=Math.hypot(a.x,a.z),c=n.arena.radius-a.radius;l>c&&(a.x*=c/l,a.z*=c/l)}}function mp(i,e){let t=i.hero,n=i.data.rules;for(let s=i.shots.length-1;s>=0;s--){let r=i.shots[s];if(r.x+=r.vx*e,r.z+=r.vz*e,r.life-=e,nt(r,t)<=r.r+n.hero.radius){os(i,{name:"stone",dmg:r.dmg},r),i.shots.splice(s,1);continue}(r.life<=0||Math.hypot(r.x,r.z)>n.arena.radius+1)&&i.shots.splice(s,1)}}var FM=new Set(["crackedMax","tetherReach","toppleTime","toppleHeal","giantfallQuake","perfectBonus","sunderStacks"]),BM=new Set(["breakGainMul","lightBalanceMul","cdMul","dmgOut","dmgIn","dodgeCdMul","dodgeSafeMul","lightDmgMul"]);function gp(){return{tetherCracks:!1,crackedMax:0,breakKeepsCrack:!1,breakGainMul:1,perfectCracks:!1,tetherReach:0,tetherPullsSelf:!1,lightBalanceMul:1,cdMul:1,cd:{sunder:0,tether:0,breaker:0},sunderStacks:1,giantfallQuake:0,toppleTime:0,toppleHeal:0,breakResetsTether:!1,dmgOut:1,dmgIn:1,dodgeCdMul:1,dodgeSafeMul:1,perfectBonus:0,lightDmgMul:1}}function ah(i,e){for(let[t,n]of Object.entries(e.set))if(t.startsWith("cd."))i.cd[t.slice(3)]+=n;else if(t==="sunderStacks")i.sunderStacks=Math.max(i.sunderStacks,n);else if(FM.has(t))i[t]+=n;else if(BM.has(t))i[t]*=n;else if(typeof n=="boolean")i[t]=n;else throw new Error(`power card ${e.id}: unknown field ${t}`)}var ki=1/60,zM={intro:["fight"],fight:["pick","won","down"],pick:["fight"],won:["intro"],down:["intro"]};function xp(i,e={}){var d,g;let t={data:i,seed:(d=e.seed)!=null?d:1,strict:!!e.strict,counterOn:(g=e.counter)!=null?g:!!(i.rules.counter&&i.rules.counter.enabled),mode:e.mode||"lab",giantId:e.giant||"hollen",events:[],hooks:{beforeHit:[],afterHit:[],beforeHurt:[]},flow:{state:"intro",t:0,seen:{},errors:[]},log:[],downsInRow:0,assistPct:0,nextId:0,realTime:0,runsStarted:0,resume:null,time:0,stopT:0,lastStopAt:-99,lastStopLen:0,slowT:0,slowScale:1},n=i.run;t.emit=f=>{f.at=Math.round(t.time*1e3)/1e3,t.events.push(f)},t.drain=()=>{let f=t.events;return t.events=[],f},t.powerFired=(f,x={})=>{t.run&&t.run.picks.includes(f)&&t.emit({t:"power",id:f,...x})},t.giantDef=f=>i.giants[f.id],t.setFlow=f=>{let x=t.flow.state,m=`${x}>${f}`;if(t.flow.seen[m]=(t.flow.seen[m]||0)+1,!(zM[x]||[]).includes(f)&&(t.flow.errors.push(m),t.strict))throw new Error(`flow ${m} is not allowed`);t.flow.state=f,t.flow.t=0,t.emit({t:"flow",from:x,to:f})},t.stop=f=>{let x=f/60,m=i.rules.feel.stopGap;x<=0||t.slowT>0||t.realTime-t.lastStopAt<m&&x<=t.lastStopLen||(t.stopT=Math.max(t.stopT,x),t.lastStopAt=t.realTime,t.lastStopLen=x)},t.slow=(f,x)=>{t.slowScale=t.slowT>0?Math.min(t.slowScale,x):x,t.slowT=Math.max(t.slowT,f)},t.topple=f=>{up(t,f,{hits:t.combo.hits,variety:Vo(t)}),t.fight.topples++,t.stopT=Math.max(t.stopT,i.rules.feel.toppleStop/60),t.lastStopAt=t.realTime,t.slow(i.rules.feel.toppleSlow[0],i.rules.feel.toppleSlow[1])},t.phaseUp=f=>hp(t,f),t.giantFallen=f=>{if(f.state="fallen",f.tg=null,f.balance=0,gr(t,"win"),t.slow(i.rules.feel.winSlow[0],i.rules.feel.winSlow[1]),t.fight.giantsDown++,t.emit({t:"fallen",id:f.id,x:f.x,z:f.z,last:t.mode==="lab"||t.run.stage===n.stages.length-1}),t.mode==="lab"){s("won");return}for(let x of t.foes)x.hp>0&&(x.hp=0,t.foeDown(x,"crumble"));t.shots.length=0,t.run.clearT=0},t.foeDown=(f,x)=>{f.state!=="dead"&&(f.hp=0,f.state="dead",f.t=.9,f.tg=null,f.how=x,t.fight.foesDown++,t.emit({t:"foeDown",id:f.id,type:f.type,how:x,x:f.x,z:f.z}))},t.heroDown=()=>{s("down")};function s(f){var y;let x=t.fight,m=t.giant,p=t.hero;x.result=f,x.time=Math.round(t.time*10)/10,x.heroHp=p.hp,x.realSec=t.run?Math.round((t.realTime-t.run.t0)*10)/10:x.time,x.giantHpPct=m?m.hp>0?Math.max(1,Math.round(100*m.hp/m.max)):0:null,x.assistPct=t.assistPct,x.bestCombo=t.combo.best,t.mode==="run"&&(x.resumedAt=(y=t.run.resumedAt)!=null?y:null,x.stage=t.run.stage,x.stages=n.stages.length,x.stageName=r(t.run.stage),x.powers=t.run.picks.slice(),x.hpAt=t.run.hpAt.slice(),x.stageTimes=t.run.times.slice()),t.log.push(x),t.downsInRow=f==="down"?t.downsInRow+1:0,t.setFlow(f)}let r=f=>{let x=n&&n.stages[f];return x?x.type==="giant"?i.giants[x.giant].name:x.name||x.type:""};function a(f){let x=t.hero,m=Math.PI-Math.sign(x.x||1)*Math.min(.7,Math.abs(x.x)*.15),p=0,y=f.reduce((b,[,v])=>b+v,0);for(let[b,v]of f)for(let E=0;E<v;E++){let T=m+(p-(y-1)/2)*.55+t.rng.range(-.15,.15);p++,t.foes.push(fp(t,b,Math.sin(T)*n.spawnRing,Math.cos(T)*n.spawnRing))}t.emit({t:"spawn",n:y})}function o(f){let x=n.stages[f];if(t.run.stage=f,t.run.stageT=0,t.run.laterDone=!1,t.run.addsDone=!1,t.run.clearT=-1,x.type==="giant"){t.giant=rh(t,x.giant),t.giant.introT=n.intro;let m=t.hero;Math.hypot(m.x-t.giant.x,m.z-t.giant.z)<4&&(m.x=0,m.z=4.5)}else t.giant=null;x.foes&&x.foes.length&&a(x.foes),t.emit({t:"stage",i:f,type:x.type,name:r(f),mood:x.mood||1,giant:x.giant||null})}function l(){let f=n.stages[t.run.stage],x=t.foes.some(m=>m.state!=="dead");return f.type==="wave"?!x&&(!f.later||t.run.laterDone):t.giant&&t.giant.state==="fallen"&&t.run.clearT>=2.6}function c(){t.run.times.push(Math.round((t.realTime-t.run.t0)*10)/10),t.run.hpAt.push(Math.round(t.hero.hp));let f=t.run.stage+1;if(f>=n.stages.length){s("won");return}if(n.stages[f].type==="pick"){t.run.stage=f,u(),t.setFlow("pick");return}o(f)}function u(){let f=i.powers.cards.filter(m=>!t.run.picks.includes(m.id)),x=[];for(;x.length<3&&f.length;)x.push(f.splice(Math.floor(t.rng()*f.length),1)[0]);t.run.offer=x,t.emit({t:"offer",cards:x.map(m=>m.id)})}t.choose=f=>{if(t.flow.state!=="pick"||!t.run.offer||!t.run.offer[f])return!1;let x=t.run.offer[f];ah(t.mods,x),t.run.picks.push(x.id),t.run.offer=null,t.run.times.push(Math.round((t.realTime-t.run.t0)*10)/10),t.run.hpAt.push(Math.round(t.hero.hp));let m=t.hero,p=m.hp;return m.hp=Math.min(m.max,m.hp+n.pickHeal),t.emit({t:"picked",id:x.id,heal:m.hp-p}),t.setFlow("fight"),o(t.run.stage+1),!0};function h(f){if(t.flow.state!=="fight")return;let x=n.stages[t.run.stage];t.run.stageT+=f,x.type==="wave"&&x.later&&!t.run.laterDone&&t.foes.filter(m=>m.state!=="dead").length<=1&&(t.run.laterDone=!0,a(x.later)),x.type==="giant"&&x.adds&&!t.run.addsDone&&t.giant&&t.giant.hp/t.giant.max<=x.adds.at&&(t.run.addsDone=!0,a(x.adds.foes)),t.run.clearT>=0&&(t.run.clearT+=f),l()&&c()}return t.reset=()=>{t.rng=Ho(t.seed+t.log.length*7919),t.locks=new zo,t.buffer=[],t.mods=gp(),t.hero=tp(i.rules),t.foes=[],t.shots=[],t.nextId=0,t.giant=t.mode==="lab"?rh(t,t.giantId):null,t.run=t.mode==="run"?{stage:-1,stageT:0,picks:[],offer:null,clearT:-1,times:[],hpAt:[],t0:t.realTime}:null,t.combo=nh(),t.time=0,t.stopT=0,t.slowT=0,t.slowScale=1,t.fight={n:t.log.length+1,result:null,hitsTaken:0,dmgTaken:0,dmgDealt:0,topples:0,perfects:0,counterWins:0,counters:0,dodges:0,dropped:0,combos:[],moves:{},hitsBy:{},hitsByStage:{},foesDown:0,crushes:0,giantsDown:0},t.flow.state!=="intro"&&t.setFlow("intro"),t.flow.t=0},t.setAssist=f=>{t.assistPct=Math.max(0,Math.min(i.rules.assist.capPct,f))},t.assistOffer=()=>{let f=i.rules.assist;return t.downsInRow<f.offerAfter?0:Math.min(f.capPct,f.startPct+f.perDownPct*(t.downsInRow-f.offerAfter))},t.step=(f={})=>{if(t.realTime+=ki,t.flow.state==="pick")return;if(sp(t,f.press),t.stopT>1e-6){t.stopT-=ki;return}let x=1;t.slowT>0&&(x=t.slowScale,t.slowT-=ki,t.slowT<=0&&(t.slowScale=1));let m=ki*x;if(t.time+=m,t.flow.t+=m,rp(t,ki),t.flow.state==="intro"&&t.flow.t>=(t.mode==="run"?n.intro:i.rules.flow.intro))if(t.mode==="lab")t.giant.state="approach",t.giant.think=.6,t.setFlow("fight"),t.runsStarted++;else{t.setFlow("fight"),t.runsStarted++;let y=t.resume;if(t.resume=null,y){for(let b of y.picks){let v=i.powers.cards.find(E=>E.id===b);v&&(ah(t.mods,v),t.run.picks.push(b))}t.run.resumedAt=y.stage,o(y.stage)}else o(0)}ap(t,m,f),(t.flow.state==="fight"||t.flow.state==="intro")&&t.giant&&cp(t,t.giant,m),t.flow.state==="fight"&&(pp(t,m),mp(t,m),qf(t,m),t.mode==="run"&&h(m))},t.hash=()=>{let f=p=>Math.round(p*1e3),x=t.hero,m=t.giant;return Xf(JSON.stringify([t.flow.state,f(t.time),f(x.x),f(x.z),f(x.face),x.hp,x.move&&x.move.id,m?[f(m.x),f(m.z),f(m.face),m.hp,f(m.balance),m.state,m.atk,m.topples]:null,t.foes.map(p=>[p.id,f(p.x),f(p.z),p.hp,p.state]),t.combo.hits,t.rng.state(),t.log.length,t.run&&t.run.stage]))},t.report=()=>{let f=t.log,x=f.flatMap(E=>E.combos).filter(E=>E.seq),m={};for(let E of x)m[E.seq]=(m[E.seq]||0)+1;let p=Object.entries(m).sort((E,T)=>T[1]-E[1])[0],y={};for(let E of x){let T=E.seq.split(">").slice(0,3).join(">");y[T]=(y[T]||0)+1}let b=Object.entries(y).sort((E,T)=>T[1]-E[1])[0],v=f.filter(E=>E.result==="won");return{version:3,mode:t.mode,...t.counterOn?{counter:!0}:{},runs:f.length,wins:v.length,firstWinAt:v.length?f.indexOf(v[0])+1:null,zeroHitWins:v.filter(E=>E.hitsTaken===0).length,runsStarted:t.runsStarted,topSequence:p?{seq:p[0],share:Math.round(100*p[1]/x.length)}:null,topOpening:b?{seq:b[0],share:Math.round(100*b[1]/x.length)}:null,skillCombos:x.length,perRun:f.map(E=>{var T,R;return{n:E.n,result:E.result,time:E.time,realSec:E.realSec,resumedAt:(T=E.resumedAt)!=null?T:null,stage:(R=E.stageName)!=null?R:null,heroHp:E.heroHp,giantHpPct:E.giantHpPct,hitsTaken:E.hitsTaken,topples:E.topples,crushes:E.crushes,perfects:E.perfects,hpAtStageEnd:E.hpAt||[],hitsBy:E.hitsBy||{},hitsByStage:E.hitsByStage||{},rolls:E.dodges,rollsPerMin:E.time>0?Math.round(E.dodges/(E.time/60)*10)/10:0,bestCombo:E.bestCombo,powers:E.powers||[],stageTimes:E.stageTimes||[],assistPct:E.assistPct,...t.counterOn?{counterWins:E.counterWins,counters:E.counters}:{}}})}},t.reset(),t}var HM={novice:{reaction:.4,miss:.3,lead:[.04,.45],plan:"mash",gap:.22,careful:0,counter:.25},mid:{reaction:.28,miss:.15,lead:[.03,.26],plan:"mixed",gap:.15,careful:.5,counter:.6},skilled:{reaction:.18,miss:.04,lead:[.02,.13],plan:"combo",gap:.1,careful:1,counter:.95},human:{reaction:.32,miss:.08,readMu:.84,readSd:.18,lead:[.03,.32],plan:"mixed",gap:.34,careful:.3,counter:.5}};function VM(i,e,t,n){if(t.kind==="circle")return nt(i,t)<=t.r+n;if(t.kind==="ring")return nt(i,e)<=t.r+n;let s=i.x-t.x,r=i.z-t.z,a=s*Math.sin(t.ang)+r*Math.cos(t.ang),o=Math.abs(s*Math.cos(t.ang)-r*Math.sin(t.ang));return a>-1&&a<t.len+1&&o<t.w/2+n}function _p(i,e,t){if(t.kind==="ring")return Mt(e,i);if(t.kind==="circle")return nt(i,t)>.2?Mt(t,i):Mt(e,i);let n=(i.x-t.x)*Math.cos(t.ang)-(i.z-t.z)*Math.sin(t.ang);return t.ang+(n>=0?-Math.PI/2:Math.PI/2)}var GM=i=>.5*(1+Math.tanh(.7978845608*(i+.044715*i*i*i)));function WM(i,e,t){if(e.src!==t||i.readMu==null)return i.miss;let n=e.age+e.left;return Math.max(i.miss,1-GM((n-i.readMu)/i.readSd))}function yp(i,e=1){let t=HM[i],n=Ho(e),s=new Map,r=0,a=!1,o=0,l=null,c=!1;return u=>{let h=u.giant,d=u.hero,g=[],f=0,x=0;if(u.time<o&&(s=new Map,r=0,a=!1),o=u.time,u.flow.state==="pick")return u.choose(Math.floor(n()*u.run.offer.length)),{mx:f,mz:x,press:g};if(u.flow.state!=="fight")return{mx:f,mz:x,press:g};let m=[];h&&h.state==="wind"&&m.push({key:`g${h.atk}@${(u.time-h.windAge).toFixed(2)}`,age:h.windAge,left:h.t,src:h,tg:h.tg});for(let _ of u.foes)_.state==="wind"&&_.tg&&m.push({key:`f${_.id}@${(u.time-(_.tg.dur-_.t)).toFixed(2)}`,age:_.tg.dur-_.t,left:_.t+(_.type==="slinger"?nt(_,d)/u.data.foes.slinger.shot.speed:.08),src:_,tg:_.tg});let p=null;for(let _ of m){if(_.age<t.reaction)continue;s.has(_.key)||s.set(_.key,{miss:n()<WM(t,_,h),lead:n.range(t.lead[0],t.lead[1]),done:!1});let M=s.get(_.key);M.miss||M.done||!VM(d,_.src,_.tg,.6)||(!p||_.left<p.left)&&(p={..._,p:M})}if(s.size>60&&(s=new Map([...s].slice(-20))),p&&p.left<=p.p.lead){let _=_p(d,p.src,p.tg);return p.p.done=!0,{mx:Math.sin(_),mz:Math.cos(_),press:["dodge"]}}if(h&&h.state==="active"&&!a&&nt(h,d)<h.radius+2.2&&(a=!0,n()>=t.miss)){let _=_p(d,h,h.tg||{kind:"ring"});return{mx:Math.sin(_),mz:Math.cos(_),press:["dodge"]}}if((!h||h.state!=="active")&&(a=!1),d.counterT>0&&h){let _=`${u.fight.n}:${u.fight.counterWins}`,M=u.data.moves.counter;if(l!==_&&(l=_,c=n()<(t.counter||0)),c&&u.data.rules.counter.window-d.counterT>=t.reaction*.5&&nt(d,h)-h.radius<M.reach+M.lunge)return c=!1,{mx:f,mz:x,press:["light"]}}if(p&&p.left<.5&&n()<t.careful)return{mx:f,mz:x,press:g};let y=xr(u);if(!y.length)return{mx:f,mz:x,press:g};let b=y.includes(h)?h:y.sort((_,M)=>nt(d,_)-nt(d,M))[0],v=nt(d,b);if(v-b.radius>1.5){let _=Mt(d,b);f=Math.sin(_),x=Math.cos(_)}if(u.time<r||v-b.radius>2.1)return{mx:f,mz:x,press:g};r=u.time+t.gap*n.range(.8,1.25);let E=_=>d.cd[_]<=0,T=h&&h.state==="toppled",R=T&&h.fallReady,I="light";if(t.plan==="mash"){if(T&&n()<.4)I="breaker";else if(n()<.22){let _=["sunder","tether","breaker"].filter(E);_.length&&(I=_[Math.floor(n()*_.length)])}}else if(t.plan==="mixed"){if(R&&n()<.75)I="breaker";else if(n()<.5){let _=["sunder","tether","breaker"].filter(M=>E(M)&&!(T&&M==="breaker"));_.length&&(I=_[Math.floor(n()*_.length)])}}else{let _=b.status.cracked.n,M=b.status.bound.n;R?I="breaker":T?I="light":_>=1&&M===0&&E("tether")?I="tether":(_>=1||M)&&E("breaker")?I="breaker":E("sunder")&&_<2&&(I="sunder")}return g.push(I),{mx:f,mz:x,press:g}}}var ra={value:0};function bp(i){ra.value=i}var oh=`
float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vn(p); p *= 2.03; a *= 0.5; } return s; }
`;function vp(i,e){let t=[];for(let n=0;n<=14;n++){let s=n/14;t.push(new Ie(e*Math.sin(Math.PI*Math.min(1,s*1.25+.05))*(1-s)**.55+.001,s*i))}return new So(t,18)}function Mp(i,e,t){return new Jt({uniforms:{uT:ra,uPh:{value:e},uK:t,uInner:{value:i?1:0}},vertexShader:`
      uniform float uT, uPh; varying vec2 vUv; varying float vRim;
      void main(){
        vUv = uv; vec3 p = position; float y = uv.y;
        float sw = sin(y * 5.0 - uT * 7.0 + uPh) * 0.09 + sin(y * 9.0 - uT * 13.0 + uPh * 2.0) * 0.04;   // sways more toward the tip
        p.x += sw * y * 1.4; p.z += cos(y * 4.0 - uT * 6.0 + uPh) * 0.06 * y;
        p.y *= 1.0 + sin(uT * 11.0 + uPh) * 0.06 + sin(uT * 17.3 + uPh * 1.7) * 0.04;                       // flicker
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vec3 n = normalize(normalMatrix * normal); vRim = abs(dot(n, normalize(-mv.xyz)));
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:oh+`
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
      }`,transparent:!0,depthWrite:!1,blending:i?Hn:In,side:At})}function XM(i,e,t,n){let s=new Ln(e,i);s.translate(0,i/2,0);let r=new Jt({uniforms:{uT:ra,uPh:{value:t},uK:n},vertexShader:`
      varying vec2 vUv; void main(){ vUv = uv;
        vec4 c = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);                    // spherical billboard around the base
        vec3 sx = vec3(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz), 1.0);
        c.xy += position.xy * sx.xy; gl_Position = projectionMatrix * c; }`,fragmentShader:oh+`
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
      }`,transparent:!0,depthWrite:!1,side:At}),a=new Pe(s,r);return a.frustumCulled=!1,a.renderOrder=5,a}function qM(i,e,t,n,s){let r=new bt,a=new Float32Array(i);for(let c=0;c<i;c++)a[c]=(c+.37)/i;r.setAttribute("position",new wt(new Float32Array(i*3),3)),r.setAttribute("aSeed",new wt(a,1));let o=new Jt({uniforms:{uT:ra,uPh:{value:n},uH:{value:e},uR:{value:t},uK:s,uPx:{value:1}},vertexShader:`
      attribute float aSeed; uniform float uT, uPh, uH, uR, uPx; varying float vL;
      void main(){
        float s = aSeed * 17.31 + uPh, life = fract(uT * (0.45 + fract(s) * 0.4) + aSeed);
        vec3 p = vec3(sin(s * 6.1 + life * 3.0) * uR * (0.4 + life), life * uH * 2.2, cos(s * 4.7 + life * 2.6) * uR * (0.4 + life));
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vL = life;
        gl_PointSize = uPx * (1.0 - life) * 0.09 * 600.0 / -mv.z; gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uK; varying float vL;
      void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)) * (1.0 - vL) * uK; gl_FragColor = vec4(vec3(1.0, 0.62, 0.2) * a, a); }`,transparent:!0,depthWrite:!1,blending:Hn}),l=new rr(r,o);return l.frustumCulled=!1,l.userData.px=o.uniforms.uPx,l}function Sp(i=1,e=.3,{sparks:t=10,ph:n=Math.random()*10}={}){let s=new rt,r={value:1},a=XM(i*1.1,e*2.6,n,r),o=new Pe(vp(i*.8,e),Mp(!1,n,r));o.renderOrder=4;let l=new Pe(vp(i*.5,e*.55),Mp(!0,n+3.1,r));return l.renderOrder=6,s.add(o,a,l),t&&s.add(qM(t,i,e,n,r)),s.userData.k=r,s}function lh(i,e){let t={value:0},n=new Jt({uniforms:{uT:ra,uOpen:t},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:oh+`
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
      }`,transparent:!0,depthWrite:!1,side:At}),s=new Pe(new Ln(i,e),n);return s.userData.setOpen=(r,a=.016)=>{t.value+=((r?1:0)-t.value)*Math.min(1,a*3)},s}function wp(i,e,t){let n=new rt,s=e*9301+49297,r=()=>(s=(s*9301+49297)%233280,s/233280),a=new ar(1,2),o=7+Math.floor(r()*4);for(let c=0;c<o;c++){let u=c/(o-1)-.5,h=1-Math.abs(u)*1.1,d=new Pe(a,t),g=i*(.45+h*.55)*(.8+r()*.4);d.position.set(u*i*3+(r()-.5)*i*.4,g*.25+r()*i*.25*h,(r()-.5)*i*.9),d.scale.set(g,g*.82,g*.9),n.add(d)}let l=new Pe(a,t);return l.scale.set(i*1.9,i*.38,i*.9),l.position.y=-i*.05,n.add(l),n.userData.craft="cloud",n}function Tp(i){let e=new Map,t=new Map,n=i.clone();return Ep(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Ep(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Ep(i.children[n],e.children[n],t)}var gt={sky:["#8fc6f7","#ffd0b0","#ffb38a"],outline:"#3a2b25",floor:"#eadfc8",floor2:"#d9c9a6",trim:"#b88f5a",tower:"#cdb994",pillar:"#f1e8d6",golem:"#c9b38c",golem2:"#a48a63",moss:"#7fae5a",core:"#5fd8ff",eye:"#ffb84a",sun:"#fff0d2",amb:"#ffe2c6",slime:"#6fdcc4",shield:"#8fa6d9",sprout:"#9ad16a",petal:"#ff8fb1",warn:"#ff4b3a",portal:"#ffd36b",wolf:"#5d5a8f",wolf2:"#3f3c6b",wolfEye:"#ff5c7a",dusk:["#5b6bc8","#c58ab8","#ff9a72"]},ls=null,Gn=()=>{if(ls)return ls;let i=[110,185,255],e=new Uint8Array(i.length*4);return i.forEach((t,n)=>{e[n*4]=e[n*4+1]=e[n*4+2]=t,e[n*4+3]=255}),ls=new ir(e,i.length,1),ls.minFilter=ls.magFilter=kt,ls.needsUpdate=!0,ls},ch=new Map,Oi=i=>(ch.has(i)||ch.set(i,new Qt({color:i,gradientMap:Gn()})),ch.get(i)),YM=new Rt({color:gt.outline,side:Xt});function Fi(i,e,t=0,n=0,s=0,r=!0,a=!0){let o=new Pe(i,e);if(o.position.set(t,n,s),o.castShadow=a,r){i.computeBoundingSphere();let l=new Pe(i,YM);l.scale.setScalar(1+.035/Math.max(i.boundingSphere.radius,.08)),o.add(l)}return o}function yr(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new bo(n);return s.colorSpace=Et,s}var uh=yr(64,64,i=>{let e=i.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,64,64)});function cs(i,e,t=1){let n=new Ci(new oi({map:uh,color:i,blending:Hn,depthWrite:!1,transparent:!0,opacity:t}));return n.scale.setScalar(e),n}function Ap(i,e){let t=i.scene.clone(!0);t.traverse(o=>{if(!o.isMesh)return;let l=o.material,c=l.emissive&&l.emissive.getHex()!==0;o.material=new Qt({color:l.color,gradientMap:Gn(),emissive:c?l.emissive:l.color,emissiveIntensity:c?1.1:.16,transparent:l.transparent,opacity:l.opacity}),o.castShadow=!0});let n=new Ot().setFromObject(t),s=n.getSize(new P),r=e/s.y;t.scale.multiplyScalar(r),t.position.set(-(n.min.x+s.x/2)*r,-n.min.y*r,-(n.min.z+s.z/2)*r);let a=new rt;return a.add(t),a}var hh=(i,e)=>i.getObjectByName(e)||null,dh=i=>{let e=new Pe(new Ii(i,24),new Rt({color:"#3a2a20",transparent:!0,opacity:.25,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.03,e};function aa(i,e){let t=i.scene.clone(!0),n=new Ot().setFromObject(t),s=n.getSize(new P),r=e/s.y;t.scale.multiplyScalar(r),t.position.set(-(n.min.x+s.x/2)*r,-n.min.y*r,-(n.min.z+s.z/2)*r),t.traverse(o=>{if(!o.isMesh)return;let l=o.material,c=l.transparent||l.alphaTest>0;o.material=new Qt({map:l.map,gradientMap:Gn(),emissive:"#ffffff",emissiveMap:l.map,emissiveIntensity:.25,alphaTest:c?.5:0,side:c?At:_n}),o.castShadow=!0,o.receiveShadow=!c});let a=new rt;return a.add(t),a}function Rp(i,e,t={},n=8.2){let s=C=>{let U=new Pt(C);return U.colorSpace=Et,U.anisotropy=4,U.needsUpdate=!0,U};i.background=t.skyDawn?s(t.skyDawn):yr(4,256,(C,U,N)=>{let D=C.createLinearGradient(0,0,0,N);D.addColorStop(0,gt.sky[0]),D.addColorStop(.55,gt.sky[1]),D.addColorStop(1,gt.sky[2]),C.fillStyle=D,C.fillRect(0,0,U,N)}),i.add(new Ro(gt.amb,gt.floor2,1.25));let r=new hr(gt.sun,2.6);r.position.set(-6,12,7),e.shadows&&(r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:40}),r.shadow.bias=-8e-4,r.shadow.normalBias=.03),i.add(r);let a=new rt;i.add(a);let o=yr(512,512,(C,U)=>{C.fillStyle=gt.floor,C.fillRect(0,0,U,U);let N=U/2;C.strokeStyle=gt.floor2,C.lineWidth=7;for(let D of[.12,.26,.4,.47])C.beginPath(),C.arc(N,N,D*U,0,7),C.stroke();C.lineWidth=4;for(let D=0;D<12;D++){let q=D*Math.PI/6;C.beginPath(),C.moveTo(N+Math.cos(q)*.26*U,N+Math.sin(q)*.26*U),C.lineTo(N+Math.cos(q)*.47*U,N+Math.sin(q)*.47*U),C.stroke()}}),l=n+.4,c=new Pe(new Ii(l,64),new Qt({map:t.floor?s(t.floor):o,gradientMap:Gn()}));c.rotation.x=-Math.PI/2,c.receiveShadow=!0,a.add(c);let u=l+1.35,h=l+.68,d=new Pe(new jt(l-.05,u,72,1),new Qt({color:"#c9a273",gradientMap:Gn()}));d.rotation.x=-Math.PI/2,d.position.y=-.02,d.receiveShadow=!0,a.add(d),a.add(Fi(new Dn(u+.12,u+.12,.5,64,1,!0),Oi(gt.trim),0,-.27,0,!1,!1)),a.add(Fi(new Dn(l-.3,l-.9,40,24,1,!0),Oi(gt.tower),0,-20.4,0,!1,!1));let g=[];for(let C=0;C<7;C++){let U=Math.PI*(1.08+C*.14),N=Math.cos(U)*h,D=Math.sin(U)*h,q=C%3===1?2.6:4.6,B=C%3===1,J=B&&t.pillarCracked||t.pillar;if(J){let ne=aa(J,4.8);if(!B&&C%3===0&&t.pillarClaw){let re=aa(t.pillarClaw,4.8);re.visible=!1,re.rotation.y=-Math.atan2(-N,-D),ne.add(re),g.push([ne.children[0],re])}if(B&&t.bannerTorn){ne.updateMatrixWorld(!0);let re=[];if(ne.traverse(xe=>{xe.isMesh&&xe.material.alphaTest>0&&re.push(xe)}),re.length){let xe=new Ot;re.forEach(K=>xe.expandByObject(K));let De=xe.getSize(new P),H=aa(t.bannerTorn,De.y);H.position.set((xe.min.x+xe.max.x)/2,xe.min.y,xe.max.z+.01),H.visible=!1,ne.add(H),re.forEach(K=>g.push([K,null])),g.push([null,H])}}ne.position.set(N,0,D),ne.rotation.y=Math.atan2(-N,-D),ne.userData.pillar=!0,a.add(ne);continue}a.add(Fi(new Dn(.42,.5,q,10),Oi(gt.pillar),N,q/2,D)),a.children[a.children.length-1].userData.pillar=!0,a.add(Fi(new hn(1.25,.32,1.25),Oi(gt.trim),N,q+.16,D)),a.add(Fi(new hn(1.3,.3,1.3),Oi(gt.trim),N,.15,D,!0,!1))}if(t.wall){let C=s(t.wall);C.wrapS=ns;let U=new Qt({color:"#d2aa78",map:C,gradientMap:Gn(),side:At}),N=new Qt({color:"#fbe9c8",gradientMap:Gn(),side:At}),D=l+.15,q=.34,B=t.wall.width/t.wall.height,J=(ne,re,xe)=>{let De=re-ne,H=Math.ceil(De*20),K=Math.max(1,Math.round(D*De/(xe*B)));for(let V of[D+q/2,D-q/2]){let ie=new Dn(V,V,xe,H,1,!0,ne,De),ce=ie.attributes.uv;for(let ke=0;ke<ce.count;ke++)ce.setX(ke,ce.getX(ke)*K);let ve=new Pe(ie,U);ve.position.y=xe/2,ve.receiveShadow=!0,a.add(ve)}let oe=new Pe(new jt(D-q/2,D+q/2,H,1,Math.PI/2-re,De),N);oe.rotation.x=Math.PI/2,oe.position.y=xe,a.add(oe);for(let V of[ne,re]){let ie=new Pe(new Ln(q,xe),N);ie.position.set(D*Math.sin(V),xe/2,D*Math.cos(V)),ie.rotation.y=V+Math.PI/2,a.add(ie)}};J(-Math.PI/2,Math.PI/2,.5),J(Math.PI/2,Math.PI-.34,1),J(Math.PI+.34,Math.PI*1.5,1)}let f=[],x=1;if(t.brazier)for(let[C,U]of[[-Math.PI/2,h],[Math.PI/2,h],[-.3*Math.PI,h],[.3*Math.PI,h]]){let N=U*Math.sin(C),D=U*Math.cos(C),q=aa(t.brazier,1);q.position.set(N,0,D),a.add(q);let B=Sp(1.15,.28,{sparks:14,ph:f.length*2.7});B.position.set(N,.9,D),a.add(B);let J=cs("#ff9a3c",1.8,.3);J.position.set(N,1.3,D),a.add(J),f.push({f:B,h:J,ph:f.length*1.9})}let m=new Qt({color:"#fff4e6",gradientMap:Gn(),emissive:"#ffe3cf",emissiveIntensity:.45}),p=[];for(let[C,U,N,D]of[[-14,-3,-12,3],[-9,-4.5,-15,2.2],[13,-2.5,-14,3.4],[17,-5,-6,2.4],[-18,-5,-4,2.6],[4,-6,-20,3]]){let q=wp(D*.75,p.length+3,m);q.position.set(C,U,N),q.rotation.y=(p.length%3-1)*.4,i.add(q),p.push({cl:q,x:C,ph:p.length*1.3})}let y=cs("#fff0c0",26,.9);y.position.set(9,6,-30),i.add(y);let b=new rt;b.position.set(0,0,-(n-.3)),a.add(b);let v,E;t.gate?(b.add(aa(t.gate,5.2)),v=lh(1.75,4.05),v.position.set(0,.5+2.02,.45),E=cs(gt.portal,5,0),E.position.set(0,2.4,.8)):(b.add(Fi(new hn(.7,4.4,.7),Oi(gt.pillar),-1.7,2.2,0),Fi(new hn(.7,4.4,.7),Oi(gt.pillar),1.7,2.2,0),Fi(new hn(4.6,.8,.9),Oi(gt.trim),0,4.7,0)),v=lh(2.7,4.2),v.position.set(0,2.15,0),E=cs(gt.portal,5,0),E.position.set(0,2.3,.4)),b.add(v,E);let T=i.children.find(C=>C.isHemisphereLight),R=i.background,I=t.skyDusk?s(t.skyDusk):yr(4,256,(C,U,N)=>{let D=C.createLinearGradient(0,0,0,N);D.addColorStop(0,gt.dusk[0]),D.addColorStop(.55,gt.dusk[1]),D.addColorStop(1,gt.dusk[2]),C.fillStyle=D,C.fillRect(0,0,U,N)}),_=[];a.traverse(C=>{C.userData.pillar&&_.push(C)});for(let C of _){let U=new P;C.getWorldPosition(U),C.userData.at=U,C.userData.fade=1,C.userData.mats=[],C.traverse(N=>{N.isMesh&&(N.material=N.material.clone(),N.material.userData.op0=N.material.opacity,C.userData.mats.push(N.material))})}let M=.75,L=4.9,W=(C,U,N,D,q)=>{let B=C.position,J=U.userData.at,ne=N-B.x,re=D-B.y,xe=q-B.z,De=Math.hypot(ne,re,xe),H=ne/De,K=re/De,oe=xe/De,V=B.x-J.x,ie=B.z-J.z,ce=H*H+oe*oe,ve=2*(V*H+ie*oe),ke=V*V+ie*ie-M*M,Xe=ve*ve-4*ce*ke;if(Xe<0||ce<1e-9)return!1;let at=(-ve-Math.sqrt(Xe))/(2*ce);if(at<=0||at>=De)return!1;let k=B.y+K*at;return k>=0&&k<=L};return{sun:r,tower:a,pillars:_,fadePillars(C,U,N){let D=1-Math.exp(-N*10);for(let q of _){let B=U.some(([ne,re,xe])=>W(C,q,ne,re,xe))?.28:1,J=q.userData.fade+=(B-q.userData.fade)*D;for(let ne of q.userData.mats){let re=J<.99;ne.transparent=re||ne.userData.op0<1||ne.alphaTest>0,ne.opacity=ne.userData.op0*J,ne.depthWrite=!re}}},setZone(C){x=C===2?1.25:1;for(let[U,N]of g)U&&(U.visible=C!==2),N&&(N.visible=C===2);m.color.set(C===2?"#c9b3e0":"#fff4e6"),m.emissive.set(C===2?"#8a6fae":"#ffe3cf"),i.background=C===2?I:R,T.color.set(C===2?"#c9b6ff":gt.amb),r.color.set(C===2?"#ffc79a":gt.sun),r.intensity=C===2?2.2:2.6},setGate(C,U=0){var D;let N=Math.min(.1,Math.max(0,U-((D=this._gt)!=null?D:U)));this._gt=U,v.userData.setOpen(C,N),E.material.opacity=C?.55:0},gatePos:new P(0,0,-(n-.3)),tick(C){for(let U of p)U.cl.position.x=U.x+Math.sin(C*.05+U.ph)*1.2;for(let{f:U,h:N,ph:D}of f){let q=1+Math.sin(C*11+D)*.08+Math.sin(C*17.3+D*2)*.05;U.userData.k.value=x,U.scale.setScalar(x**.5),N.material.opacity=(.24+Math.sin(C*9+D)*.05)*x}}}}function fh(i,e,t=-Math.PI/2){let n=new rt,s=new rt,r=Tp(i.scene),a=new Ot().setFromObject(r),o=a.getSize(new P),l=e/o.y;r.scale.multiplyScalar(l),r.position.set(-(a.min.x+o.x/2)*l,-a.min.y*l,-(a.min.z+o.z/2)*l);let c=new rt;c.rotation.y=t,c.add(r),s.add(c),n.add(s);let u=[];r.traverse(d=>{if(d.isMesh){let g=new Qt({map:d.material.map,gradientMap:Gn(),transparent:!0,side:d.material.side,emissive:"#ffffff",emissiveMap:d.material.map,emissiveIntensity:.3});d.material=g,d.frustumCulled=!1,u.push(g)}});let h=new Pe(new Ii(.42,20),new Rt({color:"#3a2a20",transparent:!0,opacity:.25,depthWrite:!1}));return h.rotation.x=-Math.PI/2,h.position.y=.02,n.add(h),n.userData={body:s,mats:u,H:e,anim:$M(r,i.animations||[])},n}function $M(i,e){let t=new Lo(i),n={};for(let l of e)n[l.name]=t.clipAction(l);let s=null,r=null,a=!1,o=(l,c)=>{let u=n[l];return u?(s===u&&!c||(u.reset(),u.setLoop(c?mu:gu,1/0),u.clampWhenFinished=!!c,u.enabled=!0,u.setEffectiveWeight(1),u.play(),s&&s!==u&&s.crossFadeTo(u,c?.06:.15,!1),s=u),!0):!1};return t.addEventListener("finished",l=>{l.action===r&&(r=null)}),{has:l=>!!n[l],current:()=>s?s.getClip().name:null,once(l){o(l,!0)&&(r=n[l])},hold(l,c){let u=n[l];return u?(s!==u&&o(l,!0),r=null,u.paused=!0,u.time=Math.min(.999,Math.max(0,c))*u.getClip().duration,a=!0,!0):!1},update(l,c,u=1){if(Number.isFinite(l)||(l=0),Number.isFinite(t.time)||t.setTime(0),a){a=!1,t.update(l);return}s&&s.paused&&(s.paused=!1),r||(o(c,!1),n[c]&&(n[c].timeScale=u)),t.update(l)}}}function Cp(i,e,t,n=!1){if(i.userData.weapon&&(i.userData.weapon.removeFromParent(),i.userData.weapon=null),!e)return!1;let s=null;if(i.traverse(l=>{l.isBone&&/forearm\.?R$/i.test(l.name)&&(s=l)}),!s)return!1;let r=e.scene.clone(!0);r.traverse(l=>{if(!l.isMesh)return;let c=l.material,u=c.emissive&&c.emissive.getHex()!==0;l.material=new Qt({color:c.color,gradientMap:Gn(),emissive:u?c.emissive:"#000000",emissiveIntensity:u?1.1:0}),l.castShadow=!0,l.frustumCulled=!1});let a=new Ot().setFromObject(r);r.scale.setScalar(t/(a.max.y-a.min.y)),n&&(r.rotation.x=Math.PI),i.updateMatrixWorld(!0);let o=new rt;return o.add(r),o.scale.setScalar(1/s.getWorldScale(new P).x),o.position.set(0,s.position.length()*.92,0),s.add(o),i.userData.weapon=o,!0}function Ip(i){let e=fh(i,1.75),t=new Pe(new wo(.16,.38,3),new Rt({color:"#f2b33d",transparent:!0,opacity:.85,depthWrite:!1}));t.userData.craft="facing arrow",t.rotation.x=Math.PI/2,t.position.set(0,.04,.85);let n=new rt;return n.add(t),e.add(n),e.userData.arrow=n,e}function vr(i,e,t){let n=new rt,s=new Rt({color:gt.warn,transparent:!0,opacity:.25,depthWrite:!1}),r=new Rt({color:gt.warn,transparent:!0,opacity:.55,depthWrite:!1}),a;if(i==="circle")n.add(new Pe(new Ii(e,40),s)),n.add(new Pe(new jt(e*.93,e,48),r)),a=new Pe(new Ii(e,40),r),n.add(a);else if(i==="ring")n.add(new Pe(new jt(t,e,48),s)),n.add(new Pe(new jt(e*.95,e,48),r)),a=new Pe(new jt(t,e,48),r),n.add(a);else{let l=new Pe(new Ln(e,t),s);l.position.y=t/2,n.add(l),a=new Pe(new Ln(e,t),r),a.position.y=t/2,n.add(a)}n.rotation.x=-Math.PI/2,n.position.y=.03;let o=new rt;return o.add(n),o.userData={fill:a,kind:i,len:t},o}function ph(i,e){if(!i)return;let t=i.userData.fill,n=Math.max(.001,e);i.userData.kind==="lane"?(t.scale.set(1,n,1),t.position.y=i.userData.len*n/2):t.scale.set(n,n,1)}function oa(i){i&&(i.removeFromParent(),i.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}))}var KM=yr(128,128,i=>{let e=[[[18,20],[46,52],[38,70],[66,92],[60,110]],[[46,52],[80,44],[104,26]],[[66,92],[96,96]]];for(let[t,n]of[[17,"#3a0c00"],[10,"#ff5a0a"],[4,"#ffe08a"]]){i.strokeStyle=n,i.lineWidth=t,i.lineJoin="round",i.lineCap="round";for(let s of e)i.beginPath(),s.forEach(([r,a],o)=>o?i.lineTo(r,a):i.moveTo(r,a)),i.stroke()}}),Lp=i=>!!(i&&i.animations&&i.animations.length);function Dp(i,e,t){if(Lp(i)){let s=fh(i,e);for(let r of s.userData.mats)r.emissiveIntensity=.1;return{root:s,anim:s.userData.anim,mats:s.userData.mats}}let n=Ap(i,e);return JM(n,t),{root:n,anim:null}}var tn=i=>i*i*(3-2*i),mh=i=>Math.max(0,Math.min(1,i)),ZM={light1:[[-40,-80],[-80,60]],light2:[[-80,60],[-40,-80]],light3:[[-165,-10],[-45,0]],sunder:[[-175,-10],[-35,5]],tether:[[-20,0],[-95,0]],counter:[[-160,-45],[-50,45]]},Pp=Math.PI/180;function Np(i,e){let t=Ip(i),n=t.userData;e&&Cp(t,e,1.05);let s=0,r=0,a=null,o=null,l=null;t.traverse(x=>{x.isBone&&/upperarm\.?R$/i.test(x.name)&&!l&&(l=x)});let c=l&&l.quaternion.clone(),u=l&&l.quaternion.clone(),h=l&&l.position.clone().set(1,0,0),d=l&&l.position.clone().set(0,0,1),g=null,f=null;return{obj:t,update(x,m,p){let y=x.hero,b=n.body;if(t.position.set(y.x,0,y.z),o===null||!(m>0))o=y.face;else{let T=Math.atan2(Math.sin(y.face-o),Math.cos(y.face-o));o+=T*(1-Math.exp(-m*22))}t.rotation.y=o,b.position.y=0,b.rotation.set(0,0,0),b.scale.set(1,1,1);let v=y.moving&&!y.move?"run":"idle";if(y.move){let T=p[y.move.id],R=y.move.t*60,I=T.startup+T.active,_=R<T.startup?.45*R/T.startup:R<I?.45+.15*(R-T.startup)/T.active:.6+.4*mh((R-I)/T.recovery);n.anim.hold(n.anim.has(T.clip)?T.clip:"attack",_);let M=ZM[y.move.id];if(M){let[L,W]=M,C=(U,N,D)=>[U[0]+(N[0]-U[0])*D,U[1]+(N[1]-U[1])*D];g=_<.3?C([0,0],L,tn(_/.3)):_<.45?C(L,W,tn((_-.3)/.15)):_<.6?W:C(W,[0,0],tn((_-.6)/.4))}if(y.move.id==="light2"&&(b.rotation.y=.5*Math.sin(Math.PI*_)),y.move.id==="breaker"){let L=R<T.startup?Math.sin(Math.PI*R/T.startup):0;b.position.y=L*.7,b.rotation.x=.35*L}if(y.move.id==="counter"){let L=R<T.startup?Math.sin(Math.PI*R/T.startup):0;b.position.y=L*.9,b.rotation.x=-.35*L}if(y.move.id==="giantfall"){let L=R<T.startup?Math.sin(Math.PI*.5*R/T.startup):Math.max(0,1-(R-T.startup)/6);b.position.y=L*1.6,b.rotation.x=-.6*L}y.move.id!==a&&(s=0)}else if(y.dodge){let T=mh(y.dodge.t*60/p.dodge.frames);n.anim.has("roll")?(n.anim.hold("roll",T),b.rotation.x=Math.sin(Math.PI*T)*.5,b.position.y=Math.sin(Math.PI*T)*.15):(s=T*Math.PI*2,b.rotation.y=-s,b.scale.set(1.08,.82,1.08),b.position.y=Math.sin(Math.PI*T)*.12),v="run"}a=y.move?y.move.id:null,y.pull&&(b.rotation.x=.55),r=y.hp<=0?Math.min(1,r+m*2.5):0,r>0&&(b.rotation.x=-Math.PI/2*tn(r),b.position.y=.25*r);let E=y.hurtT>0&&Math.floor(y.hurtT*20)%2===0;for(let T of n.mats)T.opacity=E?.45:1;n.arrow.visible=x.flow.state==="fight",y.move?n.anim.update(m,v):n.anim.update(m,v,v==="run"?1.2:1),l&&!f&&!y.move&&(f=l.quaternion.clone()),l&&f&&g&&(c.setFromAxisAngle(d,g[0]*Pp),u.setFromAxisAngle(h,g[1]*Pp),l.quaternion.copy(f).multiply(c).multiply(u)),g=null},hurt(){n.anim.once("hurt")},win(){n.anim.once("win")}}}var JM=(i,e)=>{if(!e)return;let t=new Ee(e);i.traverse(n=>{n.isMesh&&(n.material.color.multiply(t),n.material.emissive&&n.material.emissive.multiply(t))})};function gh(i,e,t=5.4,n=null,s="hollen"){let r=new rt,a=new rt,o=new rt;r.add(a,dh(t*.3)),a.add(o);let l=Dp(i,t,n),c=l.root,u=l.anim;o.add(c);let h=H=>u?null:hh(c,H),d=h("upper"),g=h("armL"),f=h("armR"),x=h("head"),m=h("legL"),p=h("legR");r.updateMatrixWorld(!0);for(let H of[g,f,x])H&&d&&d.attach(H);let y=new Map;for(let H of[d,g,f,x,m,p])H&&y.set(H,H.rotation.clone());let b=[];c.traverse(H=>{H.isMesh&&H.material.emissive&&b.push({m:H.material,e:H.material.emissive.clone(),ei:H.material.emissiveIntensity})}),r.userData.rigged=!!u;let v=t*.32,E=[[-.45,.62],[.38,.72],[.05,.47],[-.18,.82],[.55,.5],[-.6,.42]].map(([H,K],oe)=>{let V=new Ci(new oi({map:KM,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,rotation:oe*1.1}));return V.scale.setScalar(t*.26),V.position.set(H*v,K*t,v*.95),V.renderOrder=6,a.add(V),V}),T=new Rt({color:"#1fb5ea",transparent:!0,opacity:0,depthWrite:!1}),R=[.3,.58].map(H=>{let K=new Pe(new or(v*1.08,t*.022,8,40),T);return K.rotation.x=Math.PI/2,K.position.set(0,H*t,0),K.userData.y=H*t,a.add(K),K}),I=[0,1,2,3].map(()=>{let H=cs("#ffe48a",.45,0);return o.add(H),H});u||(r.userData.placeholder=`${s}: stand-in Stone Guardian parts (art/boss-guardian.glb) until art/giant-${s}.glb loads`);for(let H of[...E,...I,...R])H.userData.craft="giant status light";let _=0,M=null,L=null,W=0,C=0,U=0,N=0,D=0,q=9,B="",J=0,ne=0,re=0,xe=new P,De=(H,K=0,oe=0,V=0)=>{if(!H)return;let ie=y.get(H);H.rotation.set(ie.x+K,ie.y+oe,ie.z+V)};return{obj:r,get tg(){return M},get heals(){return _},hit(H,K){U=.06,N=H.move==="counter"?.34:Math.min(.22,.05+(Number.isFinite(H.gain)?H.gain:0)*.006+(H.move==="breaker"?.08:0)),D=Number.isFinite(K)?K:0},strike(){q=0},update(H,K,oe){let V=H.giant&&H.giant.id===s?H.giant:null;if(r.visible=!!V,!V)return M&&(oa(M),M=null,L=null),{struckT:q};let ie=H.data.giants[V.id];V.state!==B?(B=V.state,J=0):J+=K,r.position.set(V.x,0,V.z),o.rotation.y=V.face,q+=K,U-=K,N=Math.max(0,N-K*1.6),ne+=K;let ce=V.state==="approach"||V.state==="active";W+=K*(V.state==="active"?9:ce?3.2:0);let ve=ce?Math.sin(W)*(V.state==="active"?.55:.3):0;De(m,ve),De(p,-ve);let ke=0,Xe=0,at=0,k=[0,0,0],Tt=[0,0,0],$e=0,Ke=0,Me=V.atk,it=V.tg?V.tg.k:0;if(V.state==="wind"&&Me==="slam"){let se=tn(it);k=[-2.7*se,0,.2*se],Tt=[-2.7*se,0,-.2*se],ke=-.3*se}else if(V.state==="wind"&&Me==="sweep"){let se=tn(it);Xe=1.1*se,Tt=[-1.2*se,0,-1.2*se],k=[0,0,.5*se]}else if(V.state==="wind"&&Me==="charge"){let se=tn(it);ke=.45*se,$e=.25*se,k=[.8*se,0,0],Tt=[.8*se,0,0]}else if(V.state==="active")ke=.6,k=[1,0,0],Tt=[1,0,0];else if(V.state==="open"){let se=ie.attacks[Me]||{},ee=mh(1-V.t/Math.max(.01,se.open||1));if(Me==="slam"){let de=Math.min(1,J/.08);ke=.55*de*(1-tn(ee)),k=[(-2.7+3.4*de)*(1-tn(ee)),0,0],Tt=k.slice(),$e=.35*de*(1-tn(ee))}else Me==="sweep"?(Xe=(1.1-2.5*Math.min(1,J/.1))*(1-tn(ee)),Tt=[-1.2*(1-tn(ee)),0,-1.2*(1-tn(ee))]):ke=.35*(1-tn(ee))}else if(V.state==="roar"){let se=Math.sin(Math.min(1,J/.3)*Math.PI/2);ke=-.35*se,k=[-.6*se,0,1.3*se],Tt=[-.6*se,0,-1.3*se],Ke=Math.sin(oe*40)*.06*se}let Ne=V.balMax?V.balance/V.balMax:0,A=Ne*Ne*.09;if(at+=Math.sin(oe*3.1)*A,ke+=Math.sin(oe*2.3+1)*A*.6,ke-=N*Math.cos(D-V.face),at+=N*Math.sin(D-V.face)*.6,De(d,ke,Xe,at),De(g,...k),De(f,...Tt),De(x,Ke),u){let se=ie.attacks[Me]||{},ee=Me==="sweep";V.state==="wind"?u.hold(ee?"windup2":"windup",Me==="charge"?it*.6:it):V.state==="open"&&J<(se.open||1)*.6?u.hold(ee?"strike2":"strike",Math.min(1,J/.25)):V.state==="roar"&&u.hold("windup2",Math.min(1,J/.4)),u.update(K,V.state==="toppled"||V.state==="fallen"||V.state==="getup"?"dizzy":ce?"run":"idle",V.state==="active"?2.2:1),c.rotation.z=at,c.rotation.x=ke*.5}o.position.y=-$e,V.state==="toppled"?C=Math.min(1,C+K/.45):V.state==="getup"?C=Math.max(0,1-J/(H.data.rules.topple.getup||.9)):V.state==="fallen"?(C=Math.min(1,C+K/1.1),re=Math.min(1,re+K/3)):C=Math.max(0,C-K*3);let S=V.state==="fallen"?1.45:1.2,G=V.state==="toppled"||V.state==="fallen"?C*C:tn(C),j=V.state==="toppled"&&C>=1?Math.max(0,Math.sin(Math.min(1,(J-.45)/.35)*Math.PI))*.08:0,te=V.toppleDir;xe.set(Math.cos(te),0,-Math.sin(te)),a.quaternion.setFromAxisAngle(xe,G*S-j),a.position.y=-1.1*G,G>0&&(De(m,-.9*G),De(p,-.7*G));let Z=V.status.cracked.n,be=V.status.bound.n;for(let se of b)U>0?(se.m.emissive.copy(se.e).lerp(new Ee("#fff4dc"),.6),se.m.emissiveIntensity=se.ei+.35):Z>0?(se.m.emissive.copy(se.e).lerp(new Ee("#ff5a10"),Math.min(.8,.4*Z)*(.75+.25*Math.sin(oe*6))),se.m.emissiveIntensity=se.ei+.25*Z):re>0?(se.m.emissive.copy(se.e).lerp(new Ee("#ffe8a8"),.4*re),se.m.emissiveIntensity=se.ei):(se.m.emissive.copy(se.e),se.m.emissiveIntensity=se.ei);E.forEach((se,ee)=>{se.material.opacity=ee<Z*2?.85+.15*Math.sin(oe*7+ee):0}),T.opacity=be?.8+.15*Math.sin(oe*8):0,R.forEach((se,ee)=>{se.position.y=se.userData.y+t*.02*Math.sin(oe*4+ee*2),se.rotation.z=oe*(ee?-.8:.8)});let ue=V.state==="toppled";return I.forEach((se,ee)=>{let de=oe*3+ee*Math.PI/2;se.position.set(Math.sin(de)*.9,t*.92,Math.cos(de)*.9),se.material.opacity=ue?.9:0}),((V.tg?V.tg.kind:null)!==L||M&&!V.tg)&&(oa(M),M=null,L=null),V.tg&&!M&&(M=V.tg.kind==="circle"?vr("circle",V.tg.r):V.tg.kind==="ring"?vr("ring",V.tg.r,V.tg.inner):vr("lane",V.tg.w,V.tg.len),M.userData.craft="telegraph",L=V.tg.kind,e.add(M)),M&&(M.position.set(V.tg.x,0,V.tg.z),L==="lane"&&(M.rotation.y=V.tg.ang+Math.PI),ph(M,V.tg.k)),[r.position.x,r.position.z,o.rotation.y,o.position.y,c.rotation.x,c.rotation.z,a.quaternion.x,a.quaternion.y,a.quaternion.z,a.quaternion.w,a.position.y].every(Number.isFinite)||(_++,N=0,D=0,C=0,r.position.set(V.x||0,0,V.z||0),o.rotation.y=V.face||0,o.position.y=0,c.rotation.set(0,0,0),a.quaternion.identity(),a.position.y=0),{struckT:q}}}}function Up(i,e,t={}){let n=new Map,s=new Map,r=new ar(.26,0),a=new Qt({color:"#8d8476"});function o(c,u){let h=new rt,d=new rt;h.add(d,dh(u.radius*1.1));let g=t[c.type]||i,f=Dp(g,u.height,Lp(g)?null:u.tint),x=f.root;d.add(x);let m=_=>f.anim?null:hh(x,_),p=m("upper"),y=m("armL"),b=m("armR"),v=m("legL"),E=m("legR");h.updateMatrixWorld(!0);for(let _ of[y,b,m("head")])_&&p&&p.attach(_);let T=new Map;for(let _ of[p,y,b,v,E])_&&T.set(_,_.rotation.clone());let R=[];x.traverse(_=>{_.isMesh&&_.material.emissive&&R.push({m:_.material,e:_.material.emissive.clone()})});let I=cs("#ffe48a",.35,0);return I.position.y=u.height*1.05,d.add(I),f.anim||(h.userData.placeholder=`${c.type}: stand-in tinted guardian parts until art/foe-${c.type}.glb loads`),I.userData.craft="stun light",e.add(h),{obj:h,yaw:d,up:p,aL:y,aR:b,lL:v,lR:E,rest:T,mats:R,star:I,anim:f.anim,walk:Math.random()*6,tg:null,tgKind:null,deadT:0}}let l=(c,u,h=0,d=0,g=0)=>{if(!u)return;let f=c.rest.get(u);u.rotation.set(f.x+h,f.y+d,f.z+g)};return{update(c,u,h){let d=new Set;for(let f of c.foes){let x=c.data.foes[f.type],m=n.get(f.id);m||(m=o(f,x),n.set(f.id,m)),d.add(f.id),m.obj.position.set(f.x,0,f.z),m.yaw.rotation.y=f.face;let p=f.state==="move";m.walk+=u*(p?9:0);let y=p?Math.sin(m.walk)*.5:0;l(m,m.lL,y),l(m,m.lR,-y);let b=0,v=0,E=1,T=0;if(f.state==="spawn")E=Math.min(1,1-f.t/.7+.2),T=-.6*(f.t/.7);else if(f.state==="wind"){let I=f.tg?f.tg.k:0;v=-2.4*I,b=f.type==="slinger"?-.3*I:.25*I}else f.state==="act"?(b=.6,v=.8):f.state==="stagger"?b=-.35*Math.sin(h*30):f.state==="dead"&&(m.deadT+=u,E=Math.max(.01,1-m.deadT/.9),T=-.5*m.deadT,b=.6*m.deadT);l(m,m.up,b),l(m,m.aL,v),l(m,m.aR,f.type==="slinger"?0:v),m.anim&&(f.state==="wind"?m.anim.hold("windup",f.tg?f.tg.k:0):(f.state==="act"||f.state==="rest"&&f.t>.6)&&m.anim.hold("strike",f.state==="act"?.6:1),m.anim.update(u,f.state==="stun"||f.state==="stagger"?"dizzy":p?"run":"idle",p?1.4:1)),m.obj.scale.setScalar(E),m.obj.position.y=T;for(let I of m.mats)f.flash>0?I.m.emissive.set("#fff4dc"):f.status.cracked.n?I.m.emissive.copy(I.e).lerp(new Ee("#ff6a1a"),.35):I.m.emissive.copy(I.e);m.star.material.opacity=f.state==="stun"?.9:0,m.star.position.x=Math.sin(h*6)*.3,(f.tg?f.tg.kind:null)!==m.tgKind&&(oa(m.tg),m.tg=null,m.tgKind=null),f.tg&&!m.tg&&(m.tg=f.tg.kind==="circle"?vr("circle",f.tg.r):vr("lane",f.tg.w,f.tg.len),m.tg.userData.craft="telegraph",m.tgKind=f.tg.kind,m.tg.traverse(I=>{I.material&&(I.material.opacity*=.8)}),e.add(m.tg)),m.tg&&(m.tg.position.set(f.tg.x,0,f.tg.z),m.tgKind==="lane"&&(m.tg.rotation.y=f.tg.ang+Math.PI),ph(m.tg,f.tg.k))}for(let[f,x]of n)d.has(f)||(oa(x.tg),x.obj.removeFromParent(),x.obj.traverse(m=>{m.isMesh&&m.material&&m.material.dispose()}),n.delete(f));let g=new Set;for(let f of c.shots){let x=s.get(f);x||(x=new Pe(r,a),x.castShadow=!0,x.userData.craft="thrown stone",e.add(x),s.set(f,x)),g.add(f),x.position.set(f.x,1,f.z),x.rotation.x+=u*12}for(let[f,x]of s)g.has(f)||(x.removeFromParent(),s.delete(f))},count:()=>n.size}}var Yt={arc:new jt(.9,1.35,24,1,-.9,1.8),arcBig:new jt(1.2,2.1,32,1,-1.3,2.6),ring:new jt(.86,1,48),spark:new hn(.07,.07,.32),beam:new Dn(.05,.05,1,6,1,!0),beamCore:new Dn(.11,.11,1,8,1,!0),chop:new jt(.75,1.55,28,1,-1,2),crack:new bt().setFromPoints([new P(-.14,0,0),new P(.14,0,0),new P(.05,.55,0),new P(.14,0,0),new P(.09,.5,0),new P(.05,.55,0),new P(.05,.55,0),new P(.09,.5,0),new P(-.02,1,0)]),bindRing:new or(1,.085,6,40)};Yt.crack.rotateX(-Math.PI/2);Yt.beam.translate(0,.5,0);Yt.beam.rotateX(Math.PI/2);Yt.beamCore.translate(0,.5,0);Yt.beamCore.rotateX(Math.PI/2);var kp=i=>i-Math.PI/2,Op={light1:["#fff4d6",0],light2:["#fff4d6",.5],light3:["#ffe2a0",-.4],sunder:["#ff8a3c",.25],breaker:["#ffd36b",0],giantfall:["#ffffff",0],counter:["#12aee0",-.55]};function Fp(i){let e=[],t=(r,a,o)=>(r.userData.craft="hit effect",i.add(r),e.push({obj:r,life:a,t:0,step:o}),r),n=(r,a=1,o=!0)=>new Rt({color:r,transparent:!0,opacity:a,depthWrite:!1,side:At,blending:o?Hn:In}),s=(r,a,o=1)=>{let l=new Ci(new oi({map:uh,color:r,transparent:!0,opacity:o,depthWrite:!1,blending:Hn}));return l.scale.setScalar(a),l};return{count:()=>e.length,slash(r,a){let[o,l]=Op[a]||Op.light1,c=a==="breaker"||a==="giantfall",u=a==="counter",h=new Pe(c||u?Yt.arcBig:Yt.arc,n(o,u?.95:.85,!u));h.position.set(r.x,c?.25:1,r.z),h.rotation.order="YXZ",h.rotation.y=kp(r.face),h.rotation.x=c?-Math.PI/2:-Math.PI/2+l,t(h,c||u?.22:.14,d=>{h.material.opacity=(u?.95:.85)*(1-d),h.scale.setScalar(1+d*.35)})},chop(r){let a=new Pe(Yt.chop,n("#f26a1b",.92,!1));a.position.set(r.x,1.1,r.z),a.rotation.order="YXZ",a.rotation.y=kp(r.face),a.rotation.x=-Math.PI/2+.75,t(a,.2,o=>{a.material.opacity=.95*(1-o),a.scale.setScalar(1+o*.25)})},cracks(r,a,o,l=7){for(let c=0;c<l;c++){let u=new Pe(Yt.crack,n(c%2?"#b2400c":"#e85a10",.95,!1)),h=1.3+Math.random()*1.1;u.position.set(r,.05,a),u.rotation.y=o+c*(Math.PI*2/l)+(Math.random()-.5)*.4,t(u,.6,d=>{u.scale.set(1-d*.5,1,h*Math.min(1,d*6)),u.material.opacity=.9*(1-d*d)})}this.flash(r,.5,a,"#ff9a4a",2.2,.2)},bind(r,a,o,l){for(let[c,u]of[[0,a],[.08,a+.45]]){let h=new Pe(Yt.bindRing,n("#13a9d6",0,!1));h.rotation.x=Math.PI/2,h.position.set(r,u,o),t(h,.45+c,(d,g,f)=>{let x=Math.max(0,(f-c)/.45);h.scale.setScalar(l*(1.9-.9*Math.min(1,x*2.5))),h.material.opacity=x<=0?0:.95*(1-Math.max(0,x-.5)*2)})}},sparks(r,a,o,l,c=10,u="#ffd9a0"){for(let h=0;h<c;h++){let d=new Pe(Yt.spark,n(u,1));d.position.set(r,a,o);let g=l+(Math.random()-.5)*2.2,f=Math.random()*4+1,x=Math.random()*6+3,m=new P(Math.sin(g)*x,f,Math.cos(g)*x);d.lookAt(d.position.clone().add(m)),t(d,.28+Math.random()*.15,(p,y)=>{m.y-=14*y,d.position.addScaledVector(m,y),d.material.opacity=1-p})}},shock(r,a,o,l="#ffe7b0",c=.45){let u=new Pe(Yt.ring,n(l,.8));u.rotation.x=-Math.PI/2,u.position.set(r,.06,a),t(u,c,h=>{u.scale.setScalar(o*(.25+.75*Math.sqrt(h))),u.material.opacity=.8*(1-h)})},dust(r,a,o=10,l=2,c="#d8c4a0"){for(let u=0;u<o;u++){let h=s(c,1.2,.5);h.material.blending=In;let d=Math.random()*Math.PI*2,g=Math.random()*l;h.position.set(r+Math.sin(d)*g,.4,a+Math.cos(d)*g);let f=new P(Math.sin(d)*1.6,.8+Math.random(),Math.cos(d)*1.6);t(h,.9+Math.random()*.5,(x,m)=>{h.position.addScaledVector(f,m),h.scale.setScalar(1.2+x*2.2),h.material.opacity=.5*(1-x)})}},beam(r,a,o="#7fe3ff"){let l=Math.hypot(a.x-r.x,a.z-r.z),c=Math.atan2(a.x-r.x,a.z-r.z);for(let[u,h,d,g]of[[Yt.beamCore,"#13a9d6",.85,!1],[Yt.beam,"#ffffff",1,!0]]){let f=new Pe(u,n(h,d,g));f.position.set(r.x,1.15,r.z),f.rotation.y=c,f.scale.set(1,1,.01),t(f,.36,x=>{f.scale.set(1+x*.6,1+x*.6,l*Math.min(1,x*5)),f.material.opacity=d*(1-x*x)})}},dash(r,a,o,l,c="#6fd0ff"){let u=Math.hypot(o-r,l-a),h=Math.atan2(o-r,l-a);if(u>.3)for(let[d,g,f,x,m]of[[Yt.beamCore,c,.8,!1,2.2],[Yt.beam,"#ffffff",.9,!0,1.5]]){let p=new Pe(d,n(g,f,x));p.position.set(r,.45,a),p.rotation.y=h,p.scale.set(m,m,u),t(p,.3,y=>{p.scale.set(m*(1-y),m*(1-y),u),p.material.opacity=f*(1-y)})}},flash(r,a,o,l,c=2.5,u=.18){let h=s(l,c,1);h.position.set(r,a,o),t(h,u,d=>{h.material.opacity=1-d,h.scale.setScalar(c*(1+d))})},motes(r,a,o=24,l="#ffe8a8"){for(let c=0;c<o;c++){let u=s(l,.35,.9),h=Math.random()*Math.PI*2,d=Math.random()*2;u.position.set(r+Math.sin(h)*d,.3+Math.random(),a+Math.cos(h)*d);let g=.8+Math.random()*1.4,f=Math.random()*6;t(u,2.5+Math.random()*1.5,(x,m,p)=>{u.position.y+=g*m,u.position.x+=Math.sin(p*2+f)*m*.3,u.material.opacity=.9*Math.sin(Math.PI*Math.min(1,x*1.2))})}},update(r){for(let a=e.length-1;a>=0;a--){let o=e[a];o.t+=r;let l=Math.min(1,o.t/o.life);o.step(l,r,o.t),l>=1&&(o.obj.removeFromParent(),o.obj.material.dispose(),e.splice(a,1))}}}}var la=i=>`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${i}</svg>`,qo={light:la('<path d="M5 19 L17.5 6.5 L19.5 4.5 L19 7 L6.5 19.5 Z" fill="currentColor" stroke-width="1.6"/><path d="M4 15.5 L8.5 20"/><path d="M3.2 20.8 L5.2 18.8"/>'),sunder:la('<path d="M12 2.5 L10 8 L13.5 11 L9.5 15.5 L12 21.5"/><path d="M13.5 11 L19 9"/><path d="M10 8 L5 6.5"/><path d="M9.5 15.5 L4.5 17"/><path d="M13 17 L18.5 18.5"/>'),tether:la('<rect x="2.5" y="8.5" width="10" height="7" rx="3.5" transform="rotate(-30 7.5 12)"/><rect x="11.5" y="8.5" width="10" height="7" rx="3.5" transform="rotate(-30 16.5 12)"/>'),breaker:la('<path d="M12 3 L13.6 8.4 L19 6.5 L15.6 11 L21 13 L15.4 14.2 L17 20 L12 16.4 L7 20 L8.6 14.2 L3 13 L8.4 11 L5 6.5 L10.4 8.4 Z" fill="currentColor" fill-opacity=".25"/>'),dodge:la('<path d="M19.5 12 A7.5 7.5 0 1 1 15.5 5.4"/><path d="M15.8 1.8 L16 5.8 L12 6.2"/>')};var Bp={light:["KeyJ","Mouse0"],sunder:["KeyK","Digit1"],tether:["KeyL","Digit2"],breaker:["Semicolon","Digit3","KeyI"],dodge:["Space","ShiftLeft","ShiftRight"]},Nn={light:"J",sunder:"K",tether:"L",breaker:";",dodge:"SPACE"},ca={up:["KeyW","ArrowUp"],down:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"]},xh={};for(let[i,e]of Object.entries(Bp))for(let t of e)xh[t]=i;var jM=new Set([...Object.values(Bp).flat(),...Object.values(ca).flat()]),us=new Set,fi={x:0,y:0},Mr=[],_h=null,ua=!0,yh={presses:0},QM=i=>{let e=i.target;return!!e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)};window.addEventListener("keydown",i=>{if(QM(i))return;jM.has(i.code)&&i.preventDefault();let e=!us.has(i.code);if(us.add(i.code),_h){_h(i.code,i);return}e&&ua&&xh[i.code]&&(Mr.push(xh[i.code]),yh.presses++)});window.addEventListener("keyup",i=>us.delete(i.code));window.addEventListener("blur",()=>{us.clear(),Mr=[],fi.x=fi.y=0});window.addEventListener("contextmenu",i=>i.preventDefault());var zt={stats:yh,touch:fi,onKey(i){_h=i},setEnabled(i){ua=i,i||(Mr=[])},press(i){ua&&(Mr.push(i),yh.presses++)},hold(i,e){e?us.add(i):us.delete(i)},frame(){let i=r=>r.some(a=>us.has(a)),e=(i(ca.right)?1:0)-(i(ca.left)?1:0)+fi.x,t=(i(ca.down)?1:0)-(i(ca.up)?1:0)+fi.y,n=Math.hypot(e,t);n>1&&(e/=n,t/=n);let s=Mr;return Mr=[],{mx:ua?e:0,mz:ua?t:0,press:s}}};function zp(i){i.addEventListener("pointerdown",e=>{e.pointerType==="mouse"&&e.button===0&&zt.press("light")})}function Hp(i){let e=document.createElement("div");e.className="tpad",e.innerHTML='<div class="tbase"><div class="tknob"></div></div>';let t=document.createElement("div");t.className="tbtns",t.innerHTML=[["light","Strike"],["sunder","Sunder"],["tether","Tether"],["breaker","Break"],["dodge","Roll"]].map(([f,x])=>`<button class="tb tb-${f}" data-a="${f}" aria-label="${x}">${qo[f]}<b>${x}</b><em></em></button>`).join(""),i.append(e,t);let n=e.querySelector(".tbase"),s=e.querySelector(".tknob"),r=null,a=0,o=0,l=0,c=0,u=54,h=.12,d=()=>{n.style.left=`${a-l}px`,n.style.top=`${o-c}px`};e.addEventListener("pointerdown",f=>{if(r!==null)return;let x=e.getBoundingClientRect();l=x.left,c=x.top,r=f.pointerId,a=f.clientX,o=f.clientY,e.setPointerCapture(r),d(),n.classList.add("on")}),e.addEventListener("pointermove",f=>{if(f.pointerId!==r)return;let x=f.clientX-a,m=f.clientY-o,p=Math.hypot(x,m);p>u&&(a+=x*(1-u/p),o+=m*(1-u/p),x*=u/p,m*=u/p,d()),s.style.transform=`translate(${x}px, ${m}px)`;let y=Math.min(1,p/u);fi.x=y<h?0:x/u,fi.y=y<h?0:m/u});let g=f=>{f.pointerId===r&&(r=null,fi.x=fi.y=0,s.style.transform="",n.classList.remove("on"),n.style.left=n.style.top="")};e.addEventListener("pointerup",g),e.addEventListener("pointercancel",g);for(let f of t.querySelectorAll("button")){f.addEventListener("pointerdown",m=>{m.preventDefault(),f.classList.add("down"),zt.press(f.dataset.a)});let x=()=>f.classList.remove("down");f.addEventListener("pointerup",x),f.addEventListener("pointercancel",x),f.addEventListener("pointerleave",x)}return t}var Ue=null,Bi=null,Yo=null,Ht=null,Mh=0,zi=i=>440*2**((i-69)/12);function $p(i,e){if(Ue)return;Ue=i,Bi=Ue.createGain(),Bi.gain.value=.62,Bi.connect(e);let t=Math.floor(Ue.sampleRate*2.2),n=Ue.createBuffer(2,t,Ue.sampleRate);for(let r=0;r<2;r++){let a=n.getChannelData(r);for(let o=0;o<t;o++)a[o]=(Math.random()*2-1)*(1-o/t)**2.6}let s=Ue.createConvolver();s.buffer=n,Yo=Ue.createGain(),Yo.gain.value=.32,Yo.connect(s),s.connect(Bi),eb()}function eb(){let i=new Set;for(let[n,s]of[[Jp,"town"],[br,"climb"],[jp,"boss"]])for(let r=0;r<8;r++){let a=n.chords[r],o=n.bass[r];if(s==="town"){i.add(`${o}:0.3`),i.add(`${o+7}:0.3`);for(let l of[a[0],a[1],a[2],a[0]+12,a[1]+12])i.add(`${l+12}:0.55`)}else{for(let l of[a[0],a[2],a[0]+12])i.add(`${l+(s==="boss"?0:12)}:0.65`);i.add(`${o}:0.25`),i.add(`${o+12}:0.25`)}}for(let n of[65,69,72,77,81,60,64,67,72,76,79,84])i.add(`${n}:0.7`);for(let n of[69,65,62,57])i.add(`${n}:0.35`);let e=[...i].map(n=>n.split(":").map(Number)),t=()=>{for(let n=0;n<3&&e.length;n++){let[s,r]=e.shift();Kp(s,r)}e.length&&setTimeout(t,30)};setTimeout(t,30)}var vh=new Map;function Kp(i,e=.5,t=1.6){let n=`${i}:${e}`;if(vh.has(n))return vh.get(n);let s=Ue.sampleRate,r=Math.floor(s*t),a=Math.max(2,Math.round(s/zi(i))),o=Ue.createBuffer(1,r,s),l=o.getChannelData(0),c=0;for(let h=0;h<a;h++){let d=Math.random()*2-1;c=c+(d-c)*(.35+e*.6),l[h]=c}let u=.996-(i>76?.004:0);for(let h=a;h<r;h++)l[h]=u*.5*(l[h-a]+l[h-a-1<0?0:h-a-1]);return vh.set(n,o),o}function hs(i,e,t=1){let n=Ue.createGain();if(n.gain.value=e,i.connect(n),n.connect(Ht?Ht.gain:Bi),t){let s=Ue.createGain();s.gain.value=t,n.connect(s),s.connect(Yo)}return n}function ha(i,e,t=.3,n=.5){let s=Ue.createBufferSource();s.buffer=Kp(i,n),hs(s,t),s.start(e)}function Vp(i,e,t,n=.12){let s=Ue.createOscillator(),r=Ue.createOscillator(),a=Ue.createGain(),o=Ue.createOscillator(),l=Ue.createGain();s.type="sine",s.frequency.value=zi(i),r.type="triangle",r.frequency.value=zi(i)*2,o.frequency.value=5.2,l.gain.value=zi(i)*.006,o.connect(l),l.connect(s.frequency),l.connect(r.frequency);let c=Ue.createGain();c.gain.value=.12,r.connect(c),c.connect(a),s.connect(a),a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(1,e+.07),a.gain.setValueAtTime(1,e+Math.max(.08,t-.12)),a.gain.exponentialRampToValueAtTime(1e-4,e+t+.18),hs(a,n,1.4);for(let u of[s,r,o])u.start(e),u.stop(e+t+.25)}function Gp(i,e,t,n=.035){let s=Ue.createBiquadFilter();s.type="lowpass",s.frequency.value=900;let r=Ue.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(1,e+Math.min(1.2,t*.4)),r.gain.setValueAtTime(1,e+t*.75),r.gain.exponentialRampToValueAtTime(1e-4,e+t+.8),s.connect(r),hs(r,n,1.2);for(let a of i)for(let o of[-6,6]){let l=Ue.createOscillator();l.type="sawtooth",l.frequency.value=zi(a),l.detune.value=o,l.connect(s),l.start(e),l.stop(e+t+1)}}function $o(){if($o.b)return $o.b;let i=Ue.sampleRate*.5,e=Ue.createBuffer(1,i,Ue.sampleRate),t=e.getChannelData(0);for(let n=0;n<i;n++)t[n]=Math.random()*2-1;return $o.b=e}function Wp(i,e=.5){let t=Ue.createOscillator(),n=Ue.createGain();t.frequency.setValueAtTime(130,i),t.frequency.exponentialRampToValueAtTime(42,i+.22),n.gain.setValueAtTime(1,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.32),t.connect(n),hs(n,e,.1),t.start(i),t.stop(i+.35)}function Zp(i,e,t,n){let s=Ue.createBufferSource(),r=Ue.createBiquadFilter(),a=Ue.createGain();s.buffer=$o(),r.type="highpass",r.frequency.value=t,a.gain.setValueAtTime(1,i),a.gain.exponentialRampToValueAtTime(1e-4,i+n),s.connect(r),r.connect(a),hs(a,e,.4),s.start(i),s.stop(i+n+.02)}var tb=(i,e=.16)=>{Zp(i,e,1400,.16);let t=Ue.createOscillator(),n=Ue.createGain();t.frequency.value=190,n.gain.setValueAtTime(.6,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.1),t.connect(n),hs(n,e*.6,.3),t.start(i),t.stop(i+.12)},nb=(i,e=.05)=>Zp(i,e,6500,.05);function ib(i,e,t=.1){let n=Ue.createOscillator(),s=Ue.createOscillator(),r=Ue.createGain(),a=Ue.createGain();n.frequency.value=zi(i),s.frequency.value=zi(i)*3.5,r.gain.value=zi(i)*1.2,s.connect(r),r.connect(n.frequency),a.gain.setValueAtTime(1,e),a.gain.exponentialRampToValueAtTime(1e-4,e+1.6),n.connect(a),hs(a,t,1.5);for(let o of[n,s])o.start(e),o.stop(e+1.7)}var Jp={bpm:88,chords:[[53,57,60],[57,60,64],[58,62,65],[60,64,67],[53,57,60],[50,53,57],[58,62,65],[60,64,67]],bass:[41,45,46,48,41,50,46,48],melody:[[[0,72,1],[1,69,1],[2,67,.5],[2.5,69,1.5]],[[0,64,2],[2,67,1],[3,69,1]],[[0,65,1],[1,67,1],[2,69,2]],[[0,67,3],[3,64,1]],[[0,72,1],[1,74,1],[2,72,.5],[2.5,69,1.5]],[[0,69,2],[2,65,1],[3,67,1]],[[0,65,1.5],[1.5,62,.5],[2,65,1],[3,67,1]],[[0,64,2],[2,60,2]]]},br={bpm:124,chords:[[62,65,69],[58,62,65],[60,64,67],[57,61,64],[62,65,69],[58,62,65],[60,64,67],[57,61,64]],bass:[38,34,36,33,38,34,36,33],melody:[[[0,74,1],[1,77,1],[2,76,.5],[2.5,74,1.5]],[[0,70,1],[1,74,1],[2,77,2]],[[0,76,1.5],[1.5,74,.5],[2,72,2]],[[0,73,2],[2,76,1],[3,69,1]],[[0,74,.5],[.5,77,.5],[1,81,1],[2,79,1],[3,77,1]],[[0,74,2],[2,77,2]],[[0,79,1],[1,76,1],[2,72,1],[3,76,1]],[[0,73,3],[3,76,1]]]},jp={...br,bpm:138,chords:br.chords.map(i=>i.map(e=>e+2)),bass:br.bass.map(i=>i+2),melody:br.melody.map(i=>i.map(([e,t,n])=>[e,t-10,n]))};function sb(i,e,t,n,s){let r=60/i.bpm,a=i.chords[t%8],o=i.bass[t%8];if(e==="town"){if(Gp(a,n,r*4),ha(o,n,.34,.3),ha(o+7,n+r*2,.22,.3),[a[0],a[1],a[2],a[0]+12,a[1]+12,a[2],a[1],a[0]].forEach((c,u)=>ha(c+12,n+u*r/2,.16+(u===0?.05:0),.55)),s%2===0)for(let[c,u,h]of i.melody[t%8])Vp(u,n+c*r,h*r*.95,.11);t%8===7&&ib(84,n+r*3.5,.05)}else{let l=e==="boss";Gp(a.map(c=>c-12),n,r*4,.03);for(let c=0;c<16;c++){let u=[a[0],a[2],a[0]+12,a[2]][c%4]+(l?0:12);ha(u,n+c*r/4,c%4===0?.15:.09,.65)}for(let c=0;c<8;c++)ha(o+(c%2?12:0),n+c*r/2,.3,.25);for(let c=0;c<4;c++)(c%2===0||l)&&Wp(n+c*r,l?.55:.45),c%2&&tb(n+c*r);if(l)for(let c=0;c<4;c++)Wp(n+(c+.5)*r,.25);for(let c=0;c<8;c++)nb(n+c*r/2,c%2?.04:.025);if(s%2===1||l)for(let[c,u,h]of i.melody[t%8])Vp(u,n+c*r,h*r*.9,l?.1:.09)}}var Ko={},Xp={},qp=1.1;function Yp(i){Ko[i]||Xp[i]||(Xp[i]=!0,fetch(`music-${i}.mp3`).then(e=>e.ok?e.arrayBuffer():Promise.reject(e.status)).then(e=>new Promise((t,n)=>Ue.decodeAudioData(e,t,n))).then(e=>{let t=e.getChannelData(0),n=0,s=t.length-1;for(;n<8192&&Math.abs(t[n])<1e-4;)n++;for(;s>t.length-8192&&Math.abs(t[s])<1e-4;)s--;Ko[i]={b:e,t0:n/e.sampleRate,len:(s-n)/e.sampleRate},Ht&&Ht.kind===i&&Ht.synth&&bh(i,!0)}).catch(()=>{}))}function rb(i,e){let t=Ko[i],n=.04,s=a=>{let o=Ue.createBufferSource(),l=Ue.createGain();return o.buffer=t.b,o.connect(l),l.connect(e.gain),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(qp,a+n),l.gain.setValueAtTime(qp,a+t.len-n),l.gain.exponentialRampToValueAtTime(1e-4,a+t.len),o.start(a,t.t0,t.len+.01),e.srcs.push(o),e.srcs.length>3&&e.srcs.shift(),a+t.len-n};e.next=s(Ue.currentTime+.05),Mh=setInterval(()=>{if(Ht===e)for(;e.next<Ue.currentTime+1.5;)e.next=s(e.next)},400)}function bh(i,e=!1){if(!Ue||Ht&&Ht.kind===i&&!e)return;if(Ht){let a=Ht;a.gain.gain.cancelScheduledValues(Ue.currentTime),a.gain.gain.setTargetAtTime(0,Ue.currentTime,.4),setTimeout(()=>{a.gain.disconnect();for(let o of a.srcs||[])try{o.stop()}catch{}},3e3)}if(Ht=null,clearInterval(Mh),!i)return;let t=Ue.createGain();t.gain.value=0,t.connect(Bi),t.gain.setTargetAtTime(1,Ue.currentTime,.6),Yp(i);for(let a of["climb","boss"])a!==i&&setTimeout(()=>Yp(a),4e3);if(Ko[i]){let a=Ht={kind:i,gain:t,srcs:[],synth:!1};rb(i,a);return}let n={town:Jp,climb:br,boss:jp}[i],s=Ht={kind:i,gain:t,next:Ue.currentTime+.15,i:0,synth:!0},r=()=>{if(Ht!==s)return;let a=240/n.bpm;for(;s.next<Ue.currentTime+.6;)sb(n,i,s.i,s.next,Math.floor(s.i/8)),s.next+=a,s.i++};r(),Mh=setInterval(r,200)}function Qp(i){Bi&&Ue&&Bi.gain.setTargetAtTime(i?.22:.62,Ue.currentTime,.25)}var em=()=>Ht?Ht.kind+(Ht.synth?":code":":file"):"";var Re=null,Un=null,Qo=!0,Th=!1,cm="";function um(i){try{let e=navigator.audioSession;e&&e.type!==(i?"playback":"ambient")&&(e.type=i?"playback":"ambient")}catch{}}function Sr(){if(!Re){um(Qo);let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;Re=new i,Un=Re.createGain(),Un.gain.value=.5,Un.connect(Re.destination)}return Re}var tm=()=>{Un&&Un.gain.setTargetAtTime(Qo&&!Th?.5:0,Re.currentTime,.05)},ds=()=>Qo&&!Th&&Sr()&&Re.state==="running";function je(i,e,t,n="square",s=.2,r=0){if(!ds())return;let a=Re.currentTime+r,o=Re.createOscillator(),l=Re.createGain();o.type=n,o.frequency.setValueAtTime(i,a),o.frequency.exponentialRampToValueAtTime(Math.max(20,e),a+t),l.gain.setValueAtTime(s,a),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l),l.connect(Un),o.start(a),o.stop(a+t+.02)}function fn(i,e=.25,t=900){if(!ds())return;let n=Re.currentTime,s=Math.floor(Re.sampleRate*i),r=Re.createBuffer(1,s,Re.sampleRate),a=r.getChannelData(0);for(let u=0;u<s;u++)a[u]=(Math.random()*2-1)*(1-u/s);let o=Re.createBufferSource(),l=Re.createBiquadFilter(),c=Re.createGain();o.buffer=r,l.type="lowpass",l.frequency.value=t,c.gain.value=e,o.connect(l),l.connect(c),c.connect(Un),o.start(n)}var Eh={slash:["knifeSlice","knifeSlice2"],draw:["drawKnife1","drawKnife2","drawKnife3"],chop:["chop"],clang:["metalPot1","metalPot2","metalPot3"],click:["metalClick"],latch:["metalLatch"],cloth:["cloth1","cloth2","cloth3","cloth4"],step:["footstep00","footstep01","footstep02","footstep03","footstep04","footstep05"],coins:["handleCoins","handleCoins2"],soft:["impactSoft_medium_000","impactSoft_medium_001","impactSoft_medium_002","impactSoft_medium_003","impactSoft_medium_004"],wood:["impactWood_light_000","impactWood_light_001","impactWood_light_002","impactWood_light_003","impactWood_light_004"],metal:["impactMetal_medium_000","impactMetal_medium_001","impactMetal_medium_002","impactMetal_medium_003","impactMetal_medium_004"],punch:["impactPunch_medium_000","impactPunch_medium_001","impactPunch_medium_002","impactPunch_medium_003","impactPunch_medium_004"],punchHeavy:["impactPunch_heavy_000","impactPunch_heavy_001","impactPunch_heavy_002","impactPunch_heavy_003","impactPunch_heavy_004"],stone:["impactMining_000","impactMining_001","impactMining_002","impactMining_003","impactMining_004"],bell:["impactBell_heavy_000","impactBell_heavy_001","impactBell_heavy_002","impactBell_heavy_003","impactBell_heavy_004"],thud:["impactPlate_heavy_000","impactPlate_heavy_001","impactPlate_heavy_002","impactPlate_heavy_003","impactPlate_heavy_004"],stepStone:["footstep_concrete_000","footstep_concrete_001","footstep_concrete_002","footstep_concrete_003","footstep_concrete_004"],glass:["impactGlass_light_000","impactGlass_light_001","impactGlass_light_002","impactGlass_light_003","impactGlass_light_004"],open:["bookOpen"],close:["bookClose"],flip:["bookFlip1"],belt:["beltHandle1","clothBelt"],creak:["creak1"],door:["doorOpen_1"],uiClick:["click_002"],jLevel:["jingles_PIZZI04"],jWin:["jingles_PIZZI02"],jDown:["jingles_PIZZI01"],jTing:["jingles_PIZZI16"],chest_common:["jingles_PIZZI08"],chest_rare:["jingles_PIZZI10"],chest_epic:["jingles_PIZZI13"],chest_legend:["jingles_PIZZI15"]},Jo={},Sh={},nm=!1,hm=0,Zo="";function ab(){if(nm||!Sr())return;nm=!0;let i=[...new Set(Object.values(Eh).flat())],e=()=>{let t=i.shift();t&&fetch(`sfx-${t}.mp3`).then(n=>n.ok?n.arrayBuffer():Promise.reject(n.status)).then(n=>new Promise((s,r)=>Re.decodeAudioData(n,s,r))).then(n=>{Jo[t]=n}).catch(()=>{hm++}).finally(()=>setTimeout(e,15))};for(let t=0;t<4;t++)e()}function He(i,e=.5,t=.06){if(!ds())return!1;let n=Eh[i].filter(a=>Jo[a]);if(!n.length)return!1;let s=Re.createBufferSource(),r=Re.createGain();return s.buffer=Jo[n[Math.floor(Math.random()*n.length)]],s.playbackRate.value=1+(Math.random()*2-1)*t,r.gain.value=e,s.connect(r),r.connect(Un),s.start(),Sh[i]=(Sh[i]||0)+1,!0}var pi=null,jo="",wh=0;function ob(i=2){let e=Re.sampleRate*i,t=Re.createBuffer(1,e,Re.sampleRate),n=t.getChannelData(0),s=0;for(let r=0;r<e;r++){let a=Math.random()*2-1;s=(s+.02*a)/1.02,n[r]=s*3.5}return t}function lb(i,e,t){let n=Re.createOscillator(),s=Re.createGain();n.type="sine",n.frequency.setValueAtTime(e,i),n.frequency.exponentialRampToValueAtTime(e*1.5,i+.05),n.frequency.exponentialRampToValueAtTime(e*1.1,i+.09),s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(t,i+.012),s.gain.exponentialRampToValueAtTime(1e-4,i+.1),n.connect(s),s.connect(pi.out),n.start(i),n.stop(i+.12)}var im=[[69,.5],[65,.45],[67,.7],[64,.6],[65,.45],[62,1.5]];function sm(i,e,t,n=.16){let s=im.reduce((f,x)=>f+x[1],0),r=f=>440*2**((f-69)/12),a=i.createOscillator(),o=i.createOscillator(),l=i.createGain(),c=i.createBiquadFilter(),u=i.createGain(),h=i.createOscillator(),d=i.createGain();a.type="sine",o.type="triangle",l.gain.value=.35,c.type="lowpass",c.frequency.value=900,c.Q.value=.7,h.frequency.value=5.2,d.gain.value=4,h.connect(d),d.connect(a.frequency),d.connect(o.frequency),a.connect(c),o.connect(l),l.connect(c),c.connect(u),u.connect(e),u.gain.setValueAtTime(1e-4,t);let g=t;for(let[f,x]of im)a.frequency.setTargetAtTime(r(f),g,.04),o.frequency.setTargetAtTime(r(f),g,.04),u.gain.setTargetAtTime(n,g,.06),u.gain.setTargetAtTime(n*.55,g+x-.08,.04),g+=x;u.gain.setTargetAtTime(1e-4,g-.6,.25);for(let f of[a,o,h])f.start(t),f.stop(t+s+.5);return s}function cb(i,e){for(let[t,n]of[[0,330],[.28,300],[.5,280]]){let s=Re.createOscillator(),r=Re.createGain(),a=Re.createOscillator(),o=Re.createGain();s.type="sine",s.frequency.value=n,a.frequency.value=26,o.gain.value=18,a.connect(o),o.connect(s.frequency),r.gain.setValueAtTime(1e-4,i+t),r.gain.exponentialRampToValueAtTime(e,i+t+.05),r.gain.exponentialRampToValueAtTime(1e-4,i+t+.22),s.connect(r),r.connect(pi.out),s.start(i+t),a.start(i+t),s.stop(i+t+.25),a.stop(i+t+.25)}}function ub(i,e){let t=Math.floor(Re.sampleRate*.03),n=Re.createBuffer(1,t,Re.sampleRate),s=n.getChannelData(0);for(let l=0;l<t;l++)s[l]=(Math.random()*2-1)*Math.exp(-l/(t*.15));let r=Re.createBufferSource(),a=Re.createBiquadFilter(),o=Re.createGain();r.buffer=n,a.type="highpass",a.frequency.value=1200,o.gain.value=e,r.connect(a),a.connect(o),o.connect(pi.out),r.start(i)}function rm(i){if(dm(),!Sr())return;let e=Re.createGain();e.gain.value=0,e.connect(Un);let t=Re.createBufferSource();t.buffer=ob(),t.loop=!0;let n=Re.createBiquadFilter(),s=Re.createOscillator(),r=Re.createGain();i==="town"?(n.type="bandpass",n.frequency.value=900,n.Q.value=.7,s.frequency.value=.35,r.gain.value=260):(n.type="lowpass",n.frequency.value=420,n.Q.value=.4,s.frequency.value=.08,r.gain.value=240),s.connect(r),r.connect(n.frequency),t.connect(n),n.connect(e),t.start(),s.start(),pi={out:e,nodes:[t,s],kind:i},jo=i,e.gain.linearRampToValueAtTime(i==="town"?.16:.13,Re.currentTime+1.5),clearInterval(wh),wh=setInterval(()=>{if(!pi||!ds())return;let a=Re.currentTime+Math.random()*.4;if(pi.kind==="town"){if(Math.random()<.35){let o=2600+Math.random()*1400;for(let l=0;l<2+Math.floor(Math.random()*3);l++)lb(a+l*.13,o*(1+(Math.random()-.5)*.1),.05)}Math.random()<.08&&cb(a,.07)}else for(let o=0;o<3+Math.floor(Math.random()*5);o++)ub(a+Math.random()*.9,.05+Math.random()*.06)},1e3)}var am=!1;function om(){!Sr()||Re.state!=="running"||(am||($p(Re,Un),am=!0),bh(cm))}function dm(){if(clearInterval(wh),!pi)return;let i=pi;pi=null,jo="";try{i.out.gain.cancelScheduledValues(Re.currentTime),i.out.gain.setValueAtTime(i.out.gain.value,Re.currentTime),i.out.gain.linearRampToValueAtTime(0,Re.currentTime+.6)}catch{}setTimeout(()=>{for(let e of i.nodes)try{e.stop()}catch{}i.out.disconnect()},700)}var lm=0,Le={ambience(i){if(i!==jo){if(!i){dm();return}Sr()&&Re.state==="running"?rm(i):Zo=i}},unlock(){let i=()=>{Zo&&(rm(Zo),Zo=""),om()};Sr()&&Re.state!=="running"?Re.resume().then(i).catch(()=>{}):i(),ab()},music(i){cm=i,om()},duck(i){Qp(i)},debug(){return{music:em(),ambience:jo,state:Re?Re.state:"none",files:new Set(Object.values(Eh).flat()).size,loaded:Object.keys(Jo).length,failed:hm,played:{...Sh}}},setEnabled(i){Qo=i,um(i),tm()},setForcedMute(i){Th=i,tm()},click(){He("uiClick",.3,.05)},swing(i){if(i==="tether"){He("click",.35,.1),je(330,990,.18,"triangle",.06);return}if(i==="breaker"||i==="giantfall"){He("draw",.55,.05),fn(.22,.14,900);return}if(i==="counter"){He("draw",.5,.05),je(600,1800,.14,"triangle",.07);return}He("slash",i==="light3"||i==="sunder"?.55:.4,.12)||fn(.09,.12,2400)},hit(i,e){let t=Re?Re.currentTime:0;t-lm<.03||(lm=t,je(150,60,.09,"sine",.16),He("stone",.55,.1),He("chop",.3,.12),i==="sunder"&&(He("glass",.32,.08),je(1500,700,.12,"square",.03)),i==="tether"&&(He("latch",.4,.05),je(440,660,.25,"sine",.05)),i==="breaker"&&(He("punchHeavy",.6,.04),He("thud",.5,.04),e&&(He("bell",.35,.03),je(220,880,.3,"triangle",.08))),i==="counter"&&(He("punchHeavy",.7,.04),He("thud",.7,.03),He("bell",.45,.02),He("glass",.3,.05),je(110,45,.5,"sine",.3),je(900,2200,.3,"triangle",.08,.05)),i==="giantfall"&&(je(70,30,.9,"sine",.42),fn(.6,.22,320),He("thud",.9,.02),He("bell",.5,.01)))},whiff(){fn(.05,.04,3e3)},status(i){i==="cracked"?(He("glass",.25,.1),je(900,1800,.12,"sine",.05)):(He("click",.3,.05),je(520,780,.2,"triangle",.05))},wind(i){ds()&&(i==="slam"?(je(60,150,.7,"sawtooth",.06),He("clang",.12,.2)):i==="sweep"?(je(90,210,.6,"sawtooth",.05),fn(.5,.06,700)):(je(50,120,.8,"square",.04),fn(.7,.08,300)))},strike(i){i==="slam"?(je(90,35,.45,"sine",.35),fn(.35,.3,380),He("thud",.8,.05),He("stone",.5,.1)):i==="sweep"?(fn(.3,.22,1200),He("stone",.4,.15)):(fn(.5,.25,260),He("stepStone",.6,.1))},wallHit(){je(70,35,.5,"sine",.3),He("stone",.7,.05),He("thud",.6,.05)},topple(){ds()&&(je(55,28,1.6,"sine",.45),fn(1.2,.22,240),He("thud",1,0),setTimeout(()=>He("bell",.55,0),180),setTimeout(()=>He("stone",.6,.05),380))},getup(){je(60,110,.7,"sawtooth",.05),He("stone",.35,.1)},roar(){He("bell",.5,0),je(110,330,.8,"sawtooth",.08),je(70,40,1,"sine",.3),fn(.8,.12,500)},counterReady(){je(880,1760,.16,"triangle",.12,.08),je(1320,2640,.16,"sine",.07,.12)},perfect(){He("glass",.4,.05),je(660,1320,.25,"triangle",.16),je(990,1980,.25,"triangle",.09,.06)},land(){He("stone",.3,.1),je(140,70,.12,"sine",.1)},dodge(){He("cloth",.6,.1)||fn(.12,.14,900)},hurt(){He("punchHeavy",.7,.06)?je(220,90,.16,"triangle",.08):je(300,80,.2,"sawtooth",.16)},step(i=.16){He("stepStone",i,.08)},giantStep(i=.35){He("thud",i,.1),je(55,40,.18,"sine",i*.4)},power(){je(1175,1760,.12,"sine",.07),je(1568,2349,.14,"triangle",.04,.05)},foeWind(){je(320,620,.18,"triangle",.035)},foeDown(){He("stone",.45,.15),fn(.18,.1,600)},combo(i){je(660+i*20,990+i*30,.08,"triangle",.035)},hum(){ds()&&sm(Re,Un,Re.currentTime+.05)},async renderHum(){let e=new OfflineAudioContext(1,12e4,24e3);return sm(e,e.destination,.05),(await e.startRendering()).getChannelData(0)},win(){He("jWin",.55,0)||[523,659,784,1047,1319].forEach((i,e)=>je(i,i,.22,"triangle",.17,e*.1))},down(){He("jDown",.5,0)||je(400,60,.5,"triangle",.18)},ting(){He("jTing",.4,0)||je(1568,1568,.12,"sine",.14)}};var Ft=null,kn=!1,el="none",Ah=!1;function da(i){if(kn)try{i()}catch{}}var Ch=!1,Rh=-1e9,Ih=null;function pm(){if(Ih=null,Ch===Ah)return;let i=performance.now();if(i-Rh<1100){Ih=setTimeout(pm,1100-(i-Rh));return}Ah=Ch,Rh=i,da(()=>Ah?Ft.game.gameplayStart():Ft.game.gameplayStop())}function fm(i){Ch=i,Ih||pm()}var pn={async init(){try{window.CrazyGames&&window.CrazyGames.SDK&&(Ft=window.CrazyGames.SDK,await Promise.race([Ft.init(),new Promise((i,e)=>setTimeout(()=>e(new Error("timeout")),5e3))]),el=Ft.environment,kn=el==="local"||el==="crazygames")}catch{kn=!1}return kn},get env(){return el},storage(){try{return kn&&Ft.data?Ft.data:null}catch{return null}},loadingStart(){da(()=>Ft.game.loadingStart())},loadingStop(){da(()=>Ft.game.loadingStop())},gameplayStart(){fm(!0)},gameplayStop(){fm(!1)},happytime(){da(()=>Ft.game.happytime())},muted(){try{return!!(kn&&Ft.game.settings&&Ft.game.settings.muteAudio)}catch{return!1}},onSettings(i){da(()=>Ft.game.addSettingsChangeListener(i))},deviceType(){try{return kn?Ft.user.systemInfo.device.type:null}catch{return null}},locale(){try{return kn?Ft.user.systemInfo.locale:null}catch{return null}},async hasAdblock(){if(!kn)return!1;try{return!!await Promise.race([Ft.ad.hasAdblock(),new Promise(i=>setTimeout(()=>i(!1),3e3))])}catch{return!1}},rewarded(i){return new Promise(e=>{if(!kn){e({ok:!1,code:"noSdk"});return}let t=!1,n=s=>{t||(t=!0,e(s))};try{Ft.ad.requestAd("rewarded",{adStarted:()=>{i&&i()},adFinished:()=>n({ok:!0}),adError:s=>n({ok:!1,code:s&&s.code||"other"})})}catch{n({ok:!1,code:"other"})}})},midgame(i){return new Promise(e=>{if(!kn){e(!1);return}let t=!1,n=!1,s=r=>{n||(n=!0,e(r))};setTimeout(()=>{t||s(!1)},8e3);try{Ft.ad.requestAd("midgame",{adStarted:()=>{t=!0,i&&i()},adFinished:()=>s(!0),adError:()=>s(!1)})}catch{s(!1)}})}};var Mn=(i,e,t="")=>{let n=document.createElement(i);return e&&(n.className=e),n.innerHTML=t,n},hb=[["light","Strike",""],["sunder","Sunder","crack"],["tether","Tether","hold"],["breaker","Break","spend"],["dodge","Roll",""]];function mm(i,{touch:e,stages:t=null}){let n=Mn("div","gbar",`<div class="gname"><b></b><span></span></div>
    <div class="bar hp"><i class="trail"></i><i class="fill"></i></div>
    <div class="bar bal"><i class="fill"></i><em>BALANCE</em></div>
    <div class="chips"></div>`),s=Mn("div","hbar",'<div class="lab">HP <b></b></div><div class="bar mine"><i class="trail"></i><i class="fill"></i></div><div class="powers"></div>'),r=Mn("div","keys"+(e?" hide":""),hb.map(([N,D,q])=>`<div class="key k-${N}" data-a="${N}"><kbd>${Nn[N]}</kbd>${qo[N]}<b>${D}</b><small>${q}</small><i class="cd"></i></div>`).join("")),a=Mn("div","combo","<b>0</b><span>HITS</span><em></em>"),o=Mn("div","banner"),l=Mn("div","coach","<b>Elara</b><span></span>"),c=Mn("div","nums"),u=Mn("div","flash"),h=Mn("div","prog"+(t?"":" hide"),t?t.map((N,D)=>`<i class="s-${N.type}" data-i="${D}" title="${N.type==="giant"?N.giant:N.name||"power"}"></i>`).join(""):""),d=Mn("button","pausebtn","II");d.setAttribute("aria-label","Pause");let g=Mn("div","modal hide");i.append(u,c,n,s,r,a,o,l,h,d,g);let f=(N,D)=>N.querySelector(D),x=f(n,".hp .fill"),m=f(n,".hp .trail"),p=f(n,".bal .fill"),y=f(n,".chips"),b=f(n,".bal"),v=f(s,".fill"),E=f(s,".trail"),T=f(s,".lab b"),R=1,I=1,_=0,M=0,L=0,W="",C=[];return{setGiant(N,D){f(n,".gname b").textContent=N,f(n,".gname span").textContent=D},onPause(N){d.onclick=N},showBars(N){for(let D of[n,s,r,a])D.classList.toggle("off",!N)},setPowers(N){let D=f(s,".powers");D.innerHTML=N.map(q=>`<i data-id="${q.id}" title="${q.text}">${q.name}</i>`).join("")},powerPulse(N){let D=f(s,`.powers [data-id="${N}"]`);D&&(D.classList.remove("fire"),D.offsetWidth,D.classList.add("fire"))},setStage(N){!t||!N.run||h.querySelectorAll("i").forEach((D,q)=>{D.classList.toggle("done",q<N.run.stage),D.classList.toggle("now",q===N.run.stage)})},banner(N,D="",q="",B=1.6){o.className=`banner show ${q}`,o.innerHTML=`<b>${N}</b>${D?`<span>${D}</span>`:""}`,M=B},say(N,D=2.8){f(l,"span").textContent=N,l.classList.add("show"),L=D},flash(N="#fff",D=.5){u.style.background=N,u.style.transition="none",u.style.opacity=D,requestAnimationFrame(()=>{u.style.transition="opacity .35s",u.style.opacity=0})},num(N,D,q=""){C.length>24&&C.shift().e.remove();let B=Mn("div",`num ${q}`,D);c.append(B),C.push({e:B,pos:{...N},t:0,life:q.includes("big")?1.1:.75})},dropNums(N){for(let D=C.length-1;D>=0;D--)C[D].e.classList.contains(N)&&(C[D].e.remove(),C.splice(D,1))},comboPulse(N,D){let q=f(a,"em");q.textContent=N,q.className=D,q.style.animation="none",q.offsetWidth,q.style.animation=""},update(N,D,q){let B=N.giant,J=N.hero;if(n.classList.toggle("hide",!B||B.state==="fallen"),B){let ie=B.hp/B.max;R=Math.max(ie,R-D*.35),x.style.width=`${ie*100}%`,m.style.width=`${R*100}%`;let ce=B.state==="toppled"?B.t/N.data.rules.topple.time:B.balance/B.balMax;p.style.width=`${ce*100}%`,b.classList.toggle("down",B.state==="toppled"),b.classList.toggle("near",B.state!=="toppled"&&ce>.75),f(b,"em").textContent=B.state==="toppled"?"TOPPLED":"BALANCE";let ve=[];B.status.cracked.n&&ve.push(`<i class="c-cracked">CRACKED${B.status.cracked.n>1?" \xD7"+B.status.cracked.n:""}</i>`),B.status.bound.n&&ve.push('<i class="c-bound">BOUND</i>');let ke=ve.join("");ke!==W&&(y.innerHTML=ke,W=ke)}let ne=J.hp/J.max;I=Math.max(ne,I-D*.5),v.style.width=`${ne*100}%`,E.style.width=`${I*100}%`,T.textContent=J.hp,s.classList.toggle("low",ne<=.3);let re=N.data.moves;for(let ie of["sunder","tether","breaker"]){let ce=J.cd[ie]/re[ie].cd;f(r,`.k-${ie} .cd`).style.height=`${Math.max(0,ce)*100}%`}let xe=!!B&&B.status.cracked.n+B.status.bound.n>0,De=!!B&&B.state==="toppled"&&!B.finisherUsed&&!!B.fallReady,H=f(r,".k-breaker");H.classList.toggle("glow",xe||De),f(H,"b").textContent=De?"FALL!":"Break";let K=J.counterT>0,oe=f(r,".k-light");if(oe.classList.toggle("glow",K),f(oe,"b").textContent=K?"Counter":"Strike",e){let ie=i.querySelector(".tb-light");ie&&(ie.classList.toggle("glow",K),ie.querySelector("b").textContent=K?"Counter":"Strike")}if(f(r,".k-dodge .cd").style.height=`${Math.max(0,J.dodgeCd/re.dodge.cd)*100}%`,e)for(let ie of["sunder","tether","breaker","dodge"]){let ce=i.querySelector(`.tb-${ie}`);if(!ce)continue;let ve=ie==="dodge"?J.dodgeCd/re.dodge.cd:J.cd[ie]/re[ie].cd;ce.querySelector("em").style.height=`${Math.max(0,ve)*100}%`,ie==="breaker"&&(ce.classList.toggle("glow",xe||De),ce.querySelector("b").textContent=De?"FALL!":"Break")}let V=N.combo;V.hits>=2&&(_=1.2,f(a,"b").textContent=V.hits),_-=D,a.classList.toggle("show",_>0),M-=D,M<=0&&o.classList.remove("show"),L-=D,L<=0&&l.classList.remove("show");for(let ie=C.length-1;ie>=0;ie--){let ce=C[ie];ce.t+=D;let ve=ce.t/ce.life;if(ve>=1){ce.e.remove(),C.splice(ie,1);continue}let ke=q(ce.pos.x,ce.pos.y+ve*.9,ce.pos.z);ce.e.style.transform=`translate(${ke.x}px, ${ke.y}px) translate(-50%, -50%) scale(${ve<.12?.6+ve*4:1})`,ce.e.style.opacity=ve>.7?(1-ve)/.3:1}},modal(N,D={}){return g.innerHTML=`<div class="card">${N}</div>`,g.classList.remove("hide"),document.body.classList.add("modal-on"),g},closeModal(){g.classList.add("hide"),g.innerHTML="",document.body.classList.remove("modal-on")},get modalOpen(){return!g.classList.contains("hide")}}}function gm(i,e,t,n=()=>"all"){let s=new Set,r={},a=new Set,o={},l=0,c=0,u={seq:"",n:0},h=0,d=!1,g=p=>p.replace(/\{key:(\w+)\}/g,(y,b)=>b==="move"?t.move:`[${t[b]||b}]`);function f(p,y={}){var I;let b=i.events[p];if(!b)return!1;let v=n();if(v==="off"||v==="key"&&!b.urgent||c>0&&!b.urgent&&!y.force||!y.force&&l-((I=o[p])!=null?I:-1e9)<(i.repeatGap||0))return!1;o[p]=l;let E=b.lines.length,T=Math.floor(Math.random()*E);E>1&&T===r[p]&&(T=(T+1)%E),r[p]=T,c=i.gap;let R=g(b.lines[T]);return e.say(R,Math.max(i.show,R.split(/\s+/).length/(i.wordsPerSec||3.5))),!0}let x=(p,y)=>s.has(p)?!1:f(y)?(s.add(p),!0):!1,m=(p,y)=>{a.has(p)||f(y)&&a.add(p)};return{say:f,handle(p,y){switch(p.t){case"flow":if(p.to==="intro"&&(a.clear(),h=0,d=!1,u={seq:"",n:0}),p.to==="fight"&&p.from==="intro"&&(s.has("fought")?f(y.mode==="run"?"runAgain":"intro",{force:!0}):(s.add("fought"),f("firstFight",{force:!0}))),p.to==="won"&&(f(s.has("won")?"win":"winFirst",{force:!0}),s.add("won")),p.to==="pick"&&x("picked","pickFirst"),p.to==="down"){let b=y.giant;b&&b.hp/b.max<=.15?f("close",{force:!0}):f(y.downsInRow===1?"down1":y.downsInRow===2?"down2":"downMore",{force:!0})}break;case"wind":x("wind","firstWind");break;case"hurt":!x("hurt","firstHurt")&&p.hp>0&&p.hp<=30&&m("low","lowHp");break;case"perfect":x("perfect","firstPerfect");break;case"counterReady":s.has("counter")||(s.add("counter"),f("firstCounter",{force:!0}));break;case"status":p.on&&x(p.name,p.name==="cracked"?"firstCracked":"firstBound");break;case"hit":p.consumed&&Object.keys(p.consumed).length&&x("spend","firstSpend"),p.move==="giantfall"&&y.giant.toppleQ&&y.giant.toppleQ.hits>=12&&f("finisherBig");break;case"swing":["sunder","tether","breaker"].includes(p.move)&&h++;break;case"topple":x("topple","firstTopple");break;case"phase":f("phase2");break;case"stage":p.giant?(f(p.giant==="cairn"?s.has("cairn")?"cairnAgain":"cairnIntro":s.has("hollen")?"hollenAgain":"hollenIntro",{force:!0}),s.add(p.giant)):p.i>0&&f(p.mood===2?"swarm":"waveNext");break;case"foeWind":x("foeWind","firstFoeWind");break;case"foeDown":p.how==="crush"||p.how==="quake"?x("crush","firstCrush")||f("crush"):m("firstKill","firstKill");break;case"spawn":y.giant&&y.giant.state!=="fallen"&&f("adds");break;case"fallen":p.last||f(p.id==="cairn"?"cairnRest":"win");break;case"comboEnd":if(!p.seq)break;p.seq===u.seq?u.n++:u={seq:p.seq,n:1},u.n>=3&&m("repeat","repeat");break;default:break}},tick(p,y){if(c-=p,l+=p,y.flow.state!=="fight")return;y.time>14&&h===0&&y.giant&&m("noSkills","noSkills");let b=y.giant;b&&!d&&b.state!=="toppled"&&b.balance/b.balMax>.85&&(d=!0,x("teeter","teeter"))}}}var bn=new URLSearchParams(location.search),mi=bn.has("capture"),db=mi||bn.has("test"),ga=bn.get("bot"),Im=bn.has("holdpick"),On=matchMedia("(pointer: coarse)").matches||bn.has("touch"),Pm=matchMedia("(prefers-reduced-motion: reduce)").matches,fb={moves:Qu,rules:eh,giants:en,foes:Wf,powers:pr,run:Bo},xm={all:"all hints",key:"key moments",off:"off"},gs=bn.has("lab")?"lab":"run",_m=Nn,Uh="WASD",Lm="giantfall_v1",ll=()=>pn.storage()||(()=>{try{return window.localStorage}catch{return null}})(),yt={sound:!0,shake:Pm?"less":"full",elara:"all",fights:0,wins:0};function pb(){try{let i=ll(),e=i&&i.getItem(Lm);e&&(yt={...yt,...JSON.parse(e)})}catch{}}function nl(){try{let i=ll();i&&i.setItem(Lm,JSON.stringify(yt))}catch{}}var Dm="8f3ffe0",Nm=bn.has("counter")?"giantfall_report_counter_v1":"giantfall_report_v1",Gi=null,ms=null,Um=bn.has("tester")||/(^|\.)titanth\.com$/.test(location.hostname);function mb(){if(!(mi||ga))try{let i=ll(),e=i&&i.getItem(Nm);if(!e)return;let t=JSON.parse(e);Array.isArray(t.log)&&ge.log.push(...t.log),t.answers&&(ms=t.answers),ge.fight&&ge.fight.result==null&&(ge.fight.n=ge.log.length+1),ge.runsStarted=t.runsStarted||0,Gi=t.beganAt||null}catch{}}function kh(){if(!(mi||ga))try{let i=ll();i&&i.setItem(Nm,JSON.stringify({log:ge.log,runsStarted:ge.runsStarted,beganAt:Gi,answers:ms}))}catch{}}function gb(){let i=ge.report();return i.build=Dm,ms&&(i.answers=ms),i.viewHeals=xs?Object.values(xs).reduce((e,t)=>e+t.heals,0):0,i.minutesSinceFirstBegin=Gi?Math.round((Date.now()-Gi)/6e3)/10:null,i.perRun=i.perRun.map((e,t)=>({...e,wallMin:ge.log[t]&&ge.log[t].wallMin!=null?ge.log[t].wallMin:null})),i}function cl(i){let e=JSON.stringify(gb()).replace(/":/g,'": '),t=document.getElementById(i);(navigator.clipboard?navigator.clipboard.writeText(e):Promise.reject()).then(()=>{t&&(t.textContent="Copied. Paste it to whoever asked you to play.")}).catch(()=>{t&&(t.textContent=e)})}var fs,Wn,Ct,Ar,xa,xs,Bh,et,Ce,zh,ge,rl=null,tl=()=>ge.giant?xs[ge.giant.id]:null,ym=-9,vm=0,fa=null,Wi=!1,Hi=!1,ps=0,Mm=0,Tr=0,il=0,bm=0,Er=!1,Sm=new P(0,12,16),wm=new P(0,1,0),Ph=new P,Tm=document.getElementById("ui");function xb(i){return new Promise((e,t)=>{let n=new Image;n.onload=()=>e(n),n.onerror=t,n.src=i})}function Lh(i,e){let t=document.getElementById("lfill"),n=document.getElementById("ltext");t&&(t.style.width=`${Math.round(i*100)}%`),n&&e&&(n.textContent=e)}var al=40,Em=!1;function Am(){let i=innerWidth,e=innerHeight;fs.setSize(i,e,!1),Ct.aspect=i/e;let t=i/e;al=t<1?62:t<1.4?50:40,Em||(Ct.fov=al,Em=!0),Ct.updateProjectionMatrix()}function _b(i,e,t){return Ph.set(i,e,t).project(Ct),{x:(Ph.x+1)/2*innerWidth,y:(1-Ph.y)/2*innerHeight}}var an=(i,e=null)=>{Tr=Math.max(Tr,i),il=e},Dh={v:1},Nh=new Set,Rm={};function yb(i){let e=ge.giant,t=ge.hero;switch(zh.handle(i,ge),i.t){case"swing":Le.swing(i.move),i.move==="counter"&&(Ce.dropNums("counter"),Ce.dropNums("perfect"),fa={x:t.x,z:t.z});break;case"hit":{Le.hit(i.move,i.consumed&&Object.keys(i.consumed).length);let n=i.target==="giant",s=n?e.radius:.5,r=n?1.4+Math.random()*.8:.7,a=Math.atan2(t.x-i.x,t.z-i.z),o=i.x+Math.sin(a)*s*.9,l=i.z+Math.cos(a)*s*.9,c=i.move==="breaker"||i.move==="giantfall";Nh.has(i.move+ge.combo.hits)||(Nh.add(i.move+ge.combo.hits),i.move==="tether"?et.beam(t,i):i.move==="sunder"?et.chop(t):et.slash(t,i.move)),i.move==="sunder"?et.cracks(o,l,a):i.move==="tether"&&et.bind(i.x,n?1.2:.7,i.z,n?e.radius*.9:.6),et.sparks(o,r,l,a,c?18:n?9:6,i.move==="sunder"?"#ff9a4a":"#ffe2a8"),c&&n&&(et.shock(i.x,i.z,i.move==="giantfall"?6:3.2),et.flash(o,1.6,l,"#ffd36b",3)),n&&tl()&&tl().hit(i,t.face),i.move==="counter"&&n?Ce.num({x:e.x,y:4,z:e.z},i.dmg,"big counterdmg"):Ce.num({x:o,y:n?2.6:1.6,z:l},i.dmg,c&&n?"big":i.toppled?"down":n?"":"small"),i.consumed&&Object.keys(i.consumed).length?(Ce.comboPulse("SPENT!","spent"),Ce.flash("#ffd36b",.18)):i.repeat?Ce.comboPulse("REPEAT \xD70.6","repeat"):i.variety>Dh.v&&Ce.comboPulse(`MIX \xD7${i.variety}`,"mix"),Dh.v=i.variety,an(c?.55:.12+(i.move==="sunder"?.08:0),a+Math.PI),i.move==="giantfall"&&(Ce.flash("#fff6d8",.55),an(.9)),i.move==="counter"&&n&&(Ce.comboPulse("COUNTER!","counter"),Ce.flash("#9ff0ff",.32),fa&&(et.dash(fa.x,fa.z,t.x,t.z,"#2fc8ff"),fa=null),et.flash(e.x,2.8,e.z,"#2fc8ff",9,.45),et.flash(o,1.6,l,"#ffffff",3.5,.25),et.shock(i.x,i.z,e.radius+3.2,"#7fe6ff",.55),et.sparks(o,r,l,a,28,"#9ff0ff"),Ce.num({x:e.x,y:5.3,z:e.z},"COUNTER!","counterbig"),an(.85,a+Math.PI)),ge.combo.hits>=5&&ge.combo.hits%5===0&&Le.combo(ge.combo.hits);break}case"whiff":i.move==="tether"?et.beam(t,{x:t.x+Math.sin(t.face)*6.5,z:t.z+Math.cos(t.face)*6.5}):i.move==="sunder"?et.chop(t):et.slash(t,i.move),Le.whiff();break;case"cancel":break;case"comboEnd":Dh.v=1,Nh.clear();break;case"status":i.on&&i.target==="giant"&&e&&(Le.status(i.name),Ce.num({x:e.x,y:3.6,z:e.z},i.name==="cracked"?"CRACKED":"BOUND",`tag ${i.name}`));break;case"wind":Le.wind(i.atk);break;case"strike":{Le.strike(i.atk),tl()&&tl().strike(),i.atk==="slam"?(et.shock(i.x,i.z,2.6,"#ffb08a"),et.dust(i.x,i.z,10,1.6),an(.5)):i.atk==="sweep"?(et.shock(e.x,e.z,4.2,"#ffc9a8",.35),an(.25)):an(.3);break}case"wallHit":Le.wallHit(),et.dust(i.x,i.z,14,2),an(.6);break;case"topple":{Le.topple(),Le.duck(!0),ma(1.6,()=>Le.duck(!1));let n=e.x+Math.sin(i.dir)*1.6,s=e.z+Math.cos(i.dir)*1.6;et.dust(n,s,22,2.8),et.shock(n,s,7,"#ffe7b0",.7),an(1),Ce.flash("#ffe7b0",.35),Ce.banner("TOPPLED!","Hit him while he's down \u2014 double damage","topple",2.2);break}case"fallReady":Ce.banner("GIANTFALL!",On?"Tap FALL! \u2014 finish him":`Press [${Nn.breaker}] \u2014 finish him`,"topple",1.3),Le.ting();break;case"getup":Le.getup(),et.dust(e.x,e.z,8,1.5);break;case"phase":Le.roar(),Ce.banner(`${en[e.id].name.toUpperCase()} AWAKENS`,"He strikes faster now","phase",2),an(.45);break;case"stage":{Ar.setZone(i.mood===2?2:1),Le.music(i.type==="giant"?"boss":"climb"),i.giant?(Ce.setGiant(en[i.giant].name,en[i.giant].title),Ce.banner(en[i.giant].name.toUpperCase(),en[i.giant].title,"intro",2.2),Le.roar(),an(.4)):Ce.banner(i.name,"","stage",1.6),Ce.setStage(ge);break}case"spawn":Le.getup();break;case"foeWind":Le.foeWind();break;case"lunge":Le.dodge();break;case"throw":Le.swing("light1");break;case"foeDown":et.dust(i.x,i.z,i.how==="crush"||i.how==="quake"?8:5,.6),Le.foeDown(),(i.how==="quake"||i.how==="crush")&&Ce.num({x:i.x,y:1.4,z:i.z},"CRUSHED","tag crushed");break;case"heal":Ce.num({x:t.x,y:2.2,z:t.z},`+${i.n}`,"heal"),Le.ting();break;case"pull":et.dash(i.x0,i.z0,i.x,i.z,"#6fd0ff"),Le.dodge();break;case"pullEnd":et.dust(i.x,i.z,6,.5),Le.land(),an(.2);break;case"giantReady":break;case"offer":break;case"picked":Le.ting(),i.heal&&Ce.num({x:t.x,y:2.2,z:t.z},`+${i.heal}`,"heal"),Ce.setPowers(ge.run.picks.map(n=>pr.cards.find(s=>s.id===n)));break;case"power":{Ce.powerPulse(i.id);let n=ge.realTime;if(n-(Rm[i.id]||-9)<2.5)break;Rm[i.id]=n;let s=pr.cards.find(o=>o.id===i.id),r=n-ym<.8?Math.min(vm+1,3):0,a=.55*r;vm=r,ym=n,Ce.num({x:t.x,y:2.9+a,z:t.z},s.name,`tag power${i.hurt?" cost":""}`),Le.power();break}case"counterReady":Le.counterReady(),Ce.num({x:t.x,y:3,z:t.z},On?"STRIKE BACK!":`[${Nn.light}] STRIKE BACK!`,"tag counter");break;case"perfect":Le.perfect(),et.flash(t.x,1,t.z,"#9ff0ff",3,.3),Ce.num({x:t.x,y:2.3,z:t.z},"PERFECT","tag perfect"),an(.15);break;case"dodge":Le.dodge(),et.dust(t.x,t.z,3,.3);break;case"hurt":Le.hurt(),xa.hurt(),Ce.flash("#ff3a2a",.32),Ce.num({x:t.x,y:2.2,z:t.z},`-${i.dmg}`,"hurt"),an(.45);break;case"fallen":Le.duck(!0),et.motes(e.x,e.z),et.dust(e.x,e.z,26,3),an(1),Ce.banner(`${en[e.id].name.toUpperCase()} RESTS`,i.last?"":"The terrace goes quiet\u2026","win",3),i.last&&xa.win(),i.last?(ma(.9,()=>Le.hum()),ma(5.4,()=>{Le.win(),Le.duck(!1)})):ma(.9,()=>{Le.ting(),Le.duck(!1)});break;case"flow":if(i.to==="fight"&&i.from==="intro"&&(Gi||(Gi=Date.now()),kh()),i.to==="fight"&&(pn.gameplayStart(),gs==="lab"&&Le.music("boss"),Ce.showBars(!0),i.from==="pick"&&(zt.onKey(null),Ce.closeModal())),i.to==="pick"&&(pn.gameplayStop(),(!rl||Im)&&Mb()),i.to==="intro"&&(gs==="lab"?Ce.banner(en[ge.giantId].name.toUpperCase(),en[ge.giantId].title,"intro",2):(Ar.setZone(1),Ce.banner("THE DAWN TERRACES","Bring the Wardens to rest","intro",2),Le.music("climb")),Ce.showBars(!0),Ce.setStage(ge),Ce.setPowers([]),Er=!1),i.to==="won"||i.to==="down"){yt.fights++,i.to==="won"&&yt.wins++,nl();let n=ge.log[ge.log.length-1];n&&Gi&&(n.wallMin=Math.round((Date.now()-Gi)/6e3)/10),kh(),i.to==="down"&&(Le.down(),Ce.banner("FALLEN","","down",2)),ma(i.to==="won"?2.6:1.5,()=>{pn.gameplayStop(),Bm()})}break;default:break}}function km(){return On?'<p class="small">Left side: move \xB7 <b>Strike</b> \xB7 <b>Sunder</b> cracks \xB7 <b>Tether</b> holds \xB7 <b>Break</b> spends \xB7 <b>Roll</b> dodges</p>':`<div class="ctl"><span><kbd>${Uh}</kbd> move</span><span><kbd>${Nn.light}</kbd> / click strike</span><span><kbd>${Nn.sunder}</kbd> Sunder \u2014 crack</span><span><kbd>${Nn.tether}</kbd> Tether \u2014 hold</span><span><kbd>${Nn.breaker}</kbd> Break \u2014 spend</span><span><kbd>SPACE</kbd> roll</span><span><kbd>P</kbd> pause</span></div>`}function ul(i){let e=document.querySelector(".modal");for(let[t,n]of Object.entries(i)){let s=e.querySelector(t);s&&(s.onclick=r=>{r.preventDefault(),Le.click(),n()})}}function vb(){if(On)try{let i=screen.orientation;i&&i.lock&&i.lock("landscape").catch(()=>{})}catch{}}var Cm=[["q1","\u0E40\u0E01\u0E21\u0E19\u0E35\u0E49\u0E43\u0E2B\u0E49\u0E40\u0E23\u0E32\u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23 (\u0E1A\u0E2D\u0E01\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E33\u0E1E\u0E39\u0E14\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07)"],["q2","\u0E17\u0E33\u0E22\u0E31\u0E07\u0E44\u0E07\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E16\u0E36\u0E07\u0E25\u0E49\u0E21"],["q3","\u0E0A\u0E48\u0E27\u0E07\u0E44\u0E2B\u0E19\u0E17\u0E35\u0E48\u0E43\u0E08\u0E40\u0E15\u0E49\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14"],["q5","\u0E21\u0E35\u0E15\u0E2D\u0E19\u0E44\u0E2B\u0E19\u0E17\u0E35\u0E48\u0E07\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E34\u0E14\u0E44\u0E2B\u0E21"]];function Om(i){let e=ms||{},t=a=>String(a||"").replace(/[&<>"]/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[o]),n=(a,o)=>`<div class="qpick" data-q="${a}">${o.map(([l,c])=>`<button type="button" class="ghost${e[a]===l?" on":""}" data-v="${l}">${c}</button>`).join("")}</div>`;Ce.modal(`<h2>\u0E04\u0E33\u0E16\u0E32\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E04\u0E19\u0E17\u0E14\u0E2A\u0E2D\u0E1A</h2><p class="small">\u0E15\u0E2D\u0E1A\u0E2A\u0E31\u0E49\u0E19\u0E46 \u0E01\u0E47\u0E1E\u0E2D \u0E04\u0E33\u0E15\u0E2D\u0E1A\u0E08\u0E30\u0E15\u0E34\u0E14\u0E44\u0E1B\u0E01\u0E31\u0E1A\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19</p>
    <div class="qa"><label>\u0E40\u0E04\u0E22\u0E40\u0E2B\u0E47\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E19\u0E35\u0E49\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E21</label>${n("seen",[["no","\u0E44\u0E21\u0E48\u0E40\u0E04\u0E22"],["yes","\u0E40\u0E04\u0E22"]])}
    ${Cm.slice(0,3).map(([a,o])=>`<label for="${a}">${o}</label><textarea id="${a}" rows="2">${t(e[a])}</textarea>`).join("")}
    <label>\u0E15\u0E2D\u0E19\u0E41\u0E1E\u0E49 \u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E27\u0E48\u0E32\u0E40\u0E23\u0E32\u0E1E\u0E25\u0E32\u0E14\u0E40\u0E2D\u0E07 \u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E27\u0E48\u0E32\u0E40\u0E01\u0E21\u0E42\u0E01\u0E07</label>${n("q4",[["me","\u0E40\u0E23\u0E32\u0E1E\u0E25\u0E32\u0E14\u0E40\u0E2D\u0E07"],["game","\u0E40\u0E01\u0E21\u0E42\u0E01\u0E07"],["none","\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E41\u0E1E\u0E49"]])}
    <textarea id="q4note" rows="1" placeholder="(\u0E16\u0E49\u0E32\u0E2D\u0E22\u0E32\u0E01\u0E40\u0E25\u0E48\u0E32\u0E40\u0E1E\u0E34\u0E48\u0E21)">${t(e.q4note)}</textarea>
    <label for="q5">${Cm[3][1]}</label><textarea id="q5" rows="2">${t(e.q5)}</textarea></div>
    <button class="go" id="qsave">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 \u0E41\u0E25\u0E49\u0E27\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19</button><button class="ghost" id="qback">\u0E01\u0E25\u0E31\u0E1A</button><p class="small" id="rep"></p>`);let s={seen:e.seen,q4:e.q4};document.querySelectorAll(".qpick").forEach(a=>a.querySelectorAll("button").forEach(o=>{o.onclick=()=>{s[a.dataset.q]=o.dataset.v,a.querySelectorAll("button").forEach(l=>l.classList.toggle("on",l===o))}}));let r=()=>{ms={seen:s.seen||null,q4:s.q4||null,at:new Date().toISOString().slice(0,16)};for(let a of["q1","q2","q3","q4note","q5"])ms[a]=(document.getElementById(a).value||"").trim().slice(0,600);kh()};ul({"#qsave":()=>{r(),cl("rep")},"#qback":()=>{r(),i()}}),zt.onKey(null)}function Fm(){Ce.modal(`<h1>TOPPLE<span>HEART</span></h1><p class="promise">Mix your skills, break their balance, and bring down giants a hundred times your size.</p>${km()}<button class="go" id="go">Begin</button>${ge.log.length?`${Um?'<button class="ghost" id="qs">\u0E15\u0E2D\u0E1A\u0E04\u0E33\u0E16\u0E32\u0E21\u0E04\u0E19\u0E17\u0E14\u0E2A\u0E2D\u0E1A</button>':""}<button class="ghost" id="report">Copy play report</button><p class="small" id="rep"></p>`:""}<p class="small">${gs==="run"?"One run: about 3 minutes \xB7 two Wardens to bring down":"Fight lab \xB7 Hollen only"}</p>`);let i=()=>{Wi||(Wi=!0,zt.onKey(null),Ce.closeModal(),Le.unlock(),Le.setEnabled(yt.sound),Le.ambience("tower"),ps=0,vb())};ul({"#go":i,"#report":()=>cl("rep"),"#qs":()=>Om(Fm)}),zt.onKey(e=>{e!=="Escape"&&i()})}function Mb(){let i=ge.run.offer;Ce.modal(`<h2>Choose a power</h2><p class="small">Elara hums while you rest (+${Bo.pickHeal} HP). One of three:</p>
    <div class="cards">${i.map((t,n)=>`<button class="pcard" data-k="${n}"><kbd>${n+1}</kbd><b>${t.name}</b><span>${t.text}</span></button>`).join("")}</div>`);let e=t=>{ge.choose(t)&&Le.click()};document.querySelectorAll(".pcard").forEach(t=>{t.onclick=()=>e(+t.dataset.k)}),zt.onKey(t=>{let n=["Digit1","Digit2","Digit3"].indexOf(t);n>=0&&e(n)})}function Bm(){if(Er)return;Er=!0;let i=ge.log[ge.log.length-1],e=i.result==="won",t=ge.assistOffer(),n=!e&&i.giantHpPct!=null&&i.giantHpPct<=15,s=gs==="run"&&!e&&i.giant&&i.stage===i.stages-1,r=gs==="run",a=u=>`${Math.floor(u/60)}:${String(Math.floor(u%60)).padStart(2,"0")}`,o=r?Math.round(100*(i.stage+(i.giantHpPct!=null?1-i.giantHpPct/100:0))/i.stages):0,l=r?i.powers.map(u=>(pr.cards.find(h=>h.id===u)||{}).name).filter(Boolean):[];Ce.modal(`<h2>${e?r?"The Terraces sleep.":"Hollen rests.":n?"So close.":"Get up, Breaker."}</h2>
    ${r&&!e?`<p class="small">You fell at <b>${i.stageName}</b>${i.giantHpPct!=null?` \u2014 ${i.giant==="hollen"?"Hollen":"Cairn"} had ${i.giantHpPct}% left`:""}.</p><div class="runbar"><i style="width:${o}%"></i></div>`:""}
    <div class="stats">
      ${e?`<div><b>${r?a(i.realSec):i.time+"s"}</b><span>time</span></div><div><b>${i.heroHp}</b><span>HP left</span></div>`:i.giantHpPct!=null&&!r?`<div><b>${i.giantHpPct}%</b><span>Hollen's strength left</span></div>`:""}
      <div><b>${i.topples}</b><span>topples</span></div>${r?`<div><b>${i.crushes}</b><span>crushed</span></div>`:""}<div><b>${i.bestCombo}</b><span>best combo</span></div><div><b>${i.perfects}</b><span>perfect rolls</span></div>
    </div>
    ${l.length?`<p class="small">Powers: ${l.join(" \xB7 ")}</p>`:""}
    ${t?`<label class="assist"><input type="checkbox" id="assist" ${ge.assistPct?"checked":""}> Elara's Shield: take ${t}% less damage <small>(your choice \u2014 it never weakens Hollen)</small></label>`:""}
    ${s?`<button class="go" id="retry">Face ${i.giant==="hollen"?"Hollen":"him"} again</button><button class="ghost" id="again">Run from the start</button>`:`<button class="go" id="again">${r?"Run again":"Fight again"}</button>`}
    ${Um?'<button class="ghost" id="qs">\u0E15\u0E2D\u0E1A\u0E04\u0E33\u0E16\u0E32\u0E21\u0E04\u0E19\u0E17\u0E14\u0E2A\u0E2D\u0E1A</button>':""}<button class="ghost" id="report">Copy play report</button><p class="small" id="rep"></p>`),ul({"#qs":()=>Om(()=>{Er=!1,Bm()}),"#again":sl,"#retry":()=>sl({stage:i.stage,picks:i.powers.slice()}),"#report":()=>cl("rep")});let c=document.getElementById("assist");c&&(c.onchange=()=>ge.setAssist(c.checked?t:0)),zt.onKey(u=>{(u==="Enter"||u==="Space")&&sl(s?{stage:i.stage,picks:i.powers.slice()}:null)})}function sl(i=null){zt.onKey(null),Ce.closeModal(),ge.reset(),ge.resume=i,ps=0}function Vi(i){if(!(!Wi||Er||Hi===i))if(Hi=i,i){pn.gameplayStop(),Le.duck(!0);let e=ge.run?ge.run.picks.map(t=>pr.cards.find(n=>n.id===t)):[];Ce.modal(`<h2>Paused</h2>${e.length?`<div class="plist"><b>Your powers</b>${e.map(t=>`<div><b>${t.name}</b>${t.text}</div>`).join("")}</div>`:""}${km()}<div class="row"><button class="ghost" id="snd">Sound: ${yt.sound?"on":"off"}</button><button class="ghost" id="shk">Screen shake: ${yt.shake}</button><button class="ghost" id="ela">Elara: ${xm[yt.elara]}</button></div><button class="go" id="res">Resume</button><button class="ghost" id="report">Copy play report</button><p class="small" id="rep"></p><p class="small build">build ${Dm}</p>`),ul({"#res":()=>Vi(!1),"#report":()=>cl("rep"),"#snd":()=>{yt.sound=!yt.sound,Le.setEnabled(yt.sound),nl(),document.getElementById("snd").textContent=`Sound: ${yt.sound?"on":"off"}`},"#ela":()=>{yt.elara=yt.elara==="all"?"key":yt.elara==="key"?"off":"all",nl(),document.getElementById("ela").textContent=`Elara: ${xm[yt.elara]}`},"#shk":()=>{yt.shake=yt.shake==="full"?"less":yt.shake==="less"?"off":"full",nl(),document.getElementById("shk").textContent=`Screen shake: ${yt.shake}`}}),zt.onKey(t=>{(t==="Escape"||t==="KeyP")&&Vi(!1)})}else zt.onKey(null),Ce.closeModal(),Le.duck(!1),ge.flow.state==="fight"&&pn.gameplayStart(),ps=0}function bb(){let i=ge.hero,e=[[i.x,.5,i.z],[i.x,1.6,i.z]];for(let n of ge.foes)n.state!=="dead"&&e.push([n.x,.6,n.z]);let t=ge.giant;return t&&t.state!=="fallen"&&e.push([t.x,1,t.z],[t.x,3,t.z]),e}function zm(i){let e=mi&&ol.lookAt;if(e){Ct.position.set(e[0]+e[3],e[1]+e[4],e[2]+e[5]),Ct.lookAt(e[0],e[1],e[2]);return}let t=ge.hero,n=ge.giant,s=new P(t.x*.8,1,t.z*.75-.8);if(n&&n.state!=="fallen")s.lerp(new P(n.x,1.8,n.z),.32);else if(ge.foes.length){let c=0,u=0;for(let h of ge.foes)c+=h.x,u+=h.z;s.lerp(new P(c/ge.foes.length,1,u/ge.foes.length),.2)}let a=innerWidth/innerHeight<1?new P(0,14.5,13):new P(0,12,13);n&&n.state==="toppled"&&a.multiplyScalar(.88);let o=s.clone().add(a),l=1-Math.exp(-i*5);if(Sm.lerp(o,l),wm.lerp(s,l),Ct.position.copy(Sm),Tr>0&&yt.shake!=="off"){let c=Math.min(1,Tr),u=c*c*.45*(yt.shake==="less"||Pm?.3:1)*(innerWidth<600?.7:1);bm+=i;let h=Math.sin(bm*70)*u;il!=null?(Ct.position.x+=Math.sin(il)*h,Ct.position.z+=Math.cos(il)*h,Ct.position.y+=(Math.random()-.5)*u*.3):(Ct.position.x+=(Math.random()-.5)*u*2,Ct.position.y+=(Math.random()-.5)*u*2)}Tr=Math.max(0,Tr-i*2.4),Math.abs(Ct.fov-al)>.01&&(Ct.fov+=(al-Ct.fov)*(1-Math.exp(-(i||.016)*6)),Ct.updateProjectionMatrix()),Ct.lookAt(wm)}var Hm=0,Oh=0,pa=0,wr=[],ma=(i,e)=>wr.push({t:i,fn:e});function Fh(i){Hm++;for(let n=wr.length-1;n>=0&&!Hi;n--)if(wr[n].t-=i,wr[n].t<=0){let s=wr[n].fn;wr.splice(n,1),s()}if(Wi&&!Hi){ps+=i;let n=0;for(;ps>=ki&&n<8;){ge.step(rl&&!(Im&&ge.flow.state==="pick")?rl(ge):zt.frame());for(let s of ge.drain())yb(s);ps-=ki,n++,Oh++}n===8&&(ps=0),zh.tick(i,ge)}let e=!Wi||Hi||ge.stopT>1e-6?0:i*(ge.slowT>0?ge.slowScale:1),t=Hi?0:i;pa+=t,xa.update(ge,e,Qu);for(let n of Object.values(xs))n.update(ge,e,pa);Bh.update(ge,e,pa),et.update(e),Ar.tick(pa),bp(pa),Hi||zm(i),Ar.fadePillars(Ct,bb(),t),Ce.update(ge,t,_b),fs.render(Wn,Ct)}function Vm(i){let e=Math.min(.1,(i-(Mm||i))/1e3);Mm=i,Fh(e),requestAnimationFrame(Vm)}async function Sb(){pn.loadingStart(),Lh(.05,"Waking the terraces\u2026"),await pn.init(),pb();let i=pn.deviceType();i&&!bn.has("touch")&&(On=i!=="desktop"),On&&(_m={light:"Strike",sunder:"Sunder",tether:"Tether",breaker:"Break",dodge:"Roll"});try{if(navigator.keyboard&&navigator.keyboard.getLayoutMap){let _=await Promise.race([navigator.keyboard.getLayoutMap(),new Promise(W=>setTimeout(()=>W(null),300))]),M=_&&_.get("Semicolon");M&&M!==";"&&(Nn.breaker=M.toUpperCase());let L=_&&["KeyW","KeyA","KeyS","KeyD"].map(W=>_.get(W)).join("");L&&L.length===4&&(Uh=L.toUpperCase())}}catch{}let e=new Oo,t=_=>e.loadAsync(_).catch(()=>null),n=0,s=_=>_.then(M=>(n++,Lh(.1+.85*n/14),M)),[r,a,o,l,c,u,h,d,g]=await Promise.all(["hero","boss-guardian","weapon-firstLight","arena-pillar","arena-pillar-cracked","arena-pillar-claw","arena-gate","arena-brazier","arena-banner-torn"].map(_=>s(t(`${_}.glb`)))),f=await fetch("models.json").then(_=>_.json()).catch(()=>[]),x={};await Promise.all(["giant-hollen","giant-cairn","foe-shardling","foe-slinger"].filter(_=>f.includes(`${_}.glb`)).map(async _=>{x[_]=await t(`${_}.glb`)}));let[m,p,y,b]=await Promise.all(["arena-floor","sky-dawn","sky-dusk","arena-wall"].map(_=>s(xb(`${_}.webp`).catch(()=>null)))),v=document.getElementById("c"),E=(navigator.hardwareConcurrency||4)<=4||On;fs=new fo({canvas:v,antialias:!E,powerPreference:"high-performance",preserveDrawingBuffer:mi}),fs.setPixelRatio(Math.min(devicePixelRatio,E?1.5:2)),fs.shadowMap.enabled=!0,fs.shadowMap.type=au,Wn=new po,Ct=new Lt(40,16/9,.1,200),Ar=Rp(Wn,{shadows:!0},{floor:m,skyDawn:p,skyDusk:y,wall:b,pillar:l,pillarCracked:c,pillarClaw:u,gate:h,brazier:d,bannerTorn:g},eh.arena.radius),Ar.setGate(!1,0),ge=xp(fb,{seed:+(bn.get("seed")||Date.now()%1e5),mode:gs,counter:bn.has("counter")}),ga&&(rl=yp(ga,7)),mb(),xa=Np(r,o),Wn.add(xa.obj),xs={hollen:gh(x["giant-hollen"]||a,Wn,en.hollen.height,null,"hollen"),cairn:gh(x["giant-cairn"]||a,Wn,en.cairn.height,en.cairn.tint,"cairn")};for(let _ of Object.values(xs))Wn.add(_.obj);Bh=Up(a,Wn,{shardling:x["foe-shardling"],slinger:x["foe-slinger"]}),et=Fp(Wn),Ce=mm(Tm,{touch:On,stages:gs==="run"?Bo.stages:null}),Ce.setGiant(en.hollen.name,en.hollen.title),Ce.onPause(()=>Vi(!0)),zh=gm(Gf,Ce,{..._m,move:On?"the stick":Uh},()=>yt.elara),On?(document.body.classList.add("touch-ui"),Hp(Tm)):zp(v),addEventListener("resize",Am),Am();for(let _ of["gesturestart","gesturechange","gestureend"])document.addEventListener(_,M=>M.preventDefault(),{passive:!1});document.addEventListener("dblclick",_=>_.preventDefault(),{passive:!1}),document.addEventListener("touchmove",_=>{(_.touches.length>1||!_.target.closest(".modal"))&&_.preventDefault()},{passive:!1});let T=0;if(document.addEventListener("touchend",_=>{_.timeStamp-T<320&&!_.target.closest(".modal")&&_.preventDefault(),T=_.timeStamp},{passive:!1}),bn.has("dbg")){let _=document.createElement("pre");_.style.cssText="position:fixed;left:50%;top:0;z-index:99;margin:0;font:11px monospace;background:#000a;color:#fff;pointer-events:none;padding:2px 4px",document.body.append(_);let M=0,L="",W=0;addEventListener("touchstart",C=>{M=C.touches.length;let U=C.target;L=`${U.tagName}${U.id?"#"+U.id:""}.${String(U.className).split(" ")[0]} @${Math.round(C.touches[0].clientX)},${Math.round(C.touches[0].clientY)}`},!0),addEventListener("click",()=>{W++},!0),addEventListener("touchend",C=>{M=C.touches.length},!0),setInterval(()=>{let C=visualViewport;_.textContent=`zoom ${C?C.scale.toFixed(2):"?"} vv ${C?Math.round(C.width)+"x"+Math.round(C.height):""} win ${innerWidth}x${innerHeight} dpr ${devicePixelRatio} touches ${M} stick ${zt.touch?zt.touch.x.toFixed(2):"-"}
last touch ${L} clicks ${W}`},200)}let R=matchMedia("(orientation: portrait)"),I=()=>{let _=On&&R.matches;document.body.classList.toggle("turn",_),_&&!mi&&Vi(!0)};R.addEventListener("change",I),I(),addEventListener("keydown",_=>{(_.code==="Escape"||_.code==="KeyP")&&!Ce.modalOpen&&Vi(!0)}),addEventListener("pointerdown",()=>Le.unlock()),addEventListener("keydown",()=>Le.unlock()),addEventListener("touchend",()=>Le.unlock()),document.addEventListener("visibilitychange",()=>{document.hidden&&Vi(!0)}),addEventListener("blur",()=>{mi||Vi(!0)}),pn.muted()&&Le.setForcedMute(!0),pn.onSettings(_=>Le.setForcedMute(!!_.muteAudio)),Lh(1,"Ready"),document.getElementById("loader").classList.add("gone"),pn.loadingStop(),zm(1),ga||mi?Wi=!0:Fm(),mi||requestAnimationFrame(Vm),ol.ready=!0}var ol={ready:!1,lookAt:null,get sim(){return ge},rigged:()=>Object.fromEntries(Object.entries(xs).map(([i,e])=>[i,e.obj.userData.rigged])),foeViews:()=>Bh.count(),pick:i=>ge.choose(i),get scene(){return Wn},get renderer(){return fs},get camera(){return Ct},input:zt,audio:Le,settings:()=>yt,advance(i){let e=Math.round(i/16.666666666666668);for(let t=0;t<e;t++)Fh(1/60)},frameAt(i){return Fh(1/i),Oh},start(){Wi||(Wi=!0,zt.onKey(null),Ce.closeModal())},pause:Vi,again:sl,fxCount:()=>et.count(),frames:()=>Hm,steps:()=>Oh,shown:()=>({modal:Ce.modalOpen,ended:Er,paused:Hi})};db&&(window.__gf=ol);Sb().catch(i=>{console.error(i);let e=document.getElementById("ltext");e&&(e.textContent="Could not load. Please reload.")});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
