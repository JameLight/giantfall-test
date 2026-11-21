(()=>{var iu="170";var Wm=0,Yh=1,Xm=2;var hf=1,su=2,Qn=3,_n=0,Xt=1,Et=2,Ei=0,Pn=1,yn=2,$h=3,Kh=4,qm=5,Ji=100,Ym=101,$m=102,Km=103,Zm=104,Jm=200,jm=201,Qm=202,eg=203,Gc=204,Wc=205,tg=206,ng=207,ig=208,sg=209,rg=210,ag=211,og=212,cg=213,lg=214,Xc=0,qc=1,Yc=2,Gs=3,$c=4,Kc=5,Zc=6,Jc=7,df=0,ug=1,hg=2,Ai=0,dg=1,fg=2,pg=3,mg=4,gg=5,xg=6,_g=7,Zh="attached",yg="detached",ff=300,Ws=301,Xs=302,jc=303,Qc=304,Io=306,Qi=1e3,ti=1001,es=1002,Ut=1003,ru=1004;var ks=1005;var nn=1006,Vr=1007;var Hn=1008;var si=1009,pf=1010,mf=1011,qr=1012,au=1013,ts=1014,In=1015,ea=1016,ou=1017,cu=1018,qs=1020,gf=35902,xf=1021,_f=1022,xn=1023,yf=1024,vf=1025,zs=1026,Ys=1027,lu=1028,uu=1029,Mf=1030,hu=1031;var du=1033,Ya=33776,$a=33777,Ka=33778,Za=33779,el=35840,tl=35841,nl=35842,il=35843,sl=36196,rl=37492,al=37496,ol=37808,cl=37809,ll=37810,ul=37811,hl=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,xl=37818,_l=37819,yl=37820,vl=37821,Ja=36492,Ml=36494,bl=36495,bf=36283,Sl=36284,wl=36285,Tl=36286,fu=2200,pu=2201,vg=2202,$s=2300,Ks=2301,uc=2302,Os=2400,Fs=2401,ja=2402,mu=2500,Mg=2501,Sf=0,Po=1,ta=2,bg=3200,Sg=3201;var gu=0,wg=1,Si="",Tt="srgb",qt="srgb-linear",Lo="linear",ht="srgb";var xs=7680;var Jh=519,Tg=512,Eg=513,Ag=514,wf=515,Rg=516,Cg=517,Ig=518,Pg=519,El=35044;var jh="300 es",ni=2e3,Qa=2001,ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qh=1234567,Gr=Math.PI/180,Zs=180/Math.PI;function Ln(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Ft(i,e,t){return Math.max(e,Math.min(t,i))}function xu(i,e){return(i%e+e)%e}function Lg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Dg(i,e,t){return i!==e?(t-i)/(e-i):0}function Wr(i,e,t){return(1-t)*i+t*e}function Ng(i,e,t,n){return Wr(i,e,1-Math.exp(-t*n))}function Ug(i,e=1){return e-Math.abs(xu(i,e*2)-e)}function kg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Og(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Fg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Bg(i,e){return i+Math.random()*(e-i)}function zg(i){return i*(.5-Math.random())}function Hg(i){i!==void 0&&(Qh=i);let e=Qh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vg(i){return i*Gr}function Gg(i){return i*Zs}function Wg(i){return(i&i-1)===0&&i!==0}function Xg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),f=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*f,c*m,o*l);break;case"YXY":i.set(c*m,o*u,c*f,o*l);break;case"ZYZ":i.set(c*f,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Tf={DEG2RAD:Gr,RAD2DEG:Zs,generateUUID:Ln,clamp:Ft,euclideanModulo:xu,mapLinear:Lg,inverseLerp:Dg,lerp:Wr,damp:Ng,pingpong:Ug,smoothstep:kg,smootherstep:Og,randInt:Fg,randFloat:Bg,randFloatSpread:zg,seededRandom:Hg,degToRad:Vg,radToDeg:Gg,isPowerOfTwo:Wg,ceilPowerOfTwo:Xg,floorPowerOfTwo:qg,setQuaternionFromProperEuler:Yg,normalize:lt,denormalize:Cn},Ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xe=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],f=n[8],x=s[0],g=s[3],p=s[6],y=s[1],M=s[4],v=s[7],E=s[2],T=s[5],A=s[8];return r[0]=a*x+o*y+c*E,r[3]=a*g+o*M+c*T,r[6]=a*p+o*v+c*A,r[1]=l*x+u*y+h*E,r[4]=l*g+u*M+h*T,r[7]=l*p+u*v+h*A,r[2]=d*x+m*y+f*E,r[5]=d*g+m*M+f*T,r[8]=d*p+m*v+f*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,m=l*r-a*c,f=t*h+n*d+s*m;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(hc.makeScale(e,t)),this}rotate(e){return this.premultiply(hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hc=new Xe;function Ef(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $g(){let i=Yr("canvas");return i.style.display="block",i}var ed={};function zr(i){i in ed||(ed[i]=!0,console.warn(i))}function Kg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Zg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Je={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ht&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ht&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?Lo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var td=[.64,.33,.3,.6,.15,.06],nd=[.2126,.7152,.0722],id=[.3127,.329],sd=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rd=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[qt]:{primaries:td,whitePoint:id,transfer:Lo,toXYZ:sd,fromXYZ:rd,luminanceCoefficients:nd,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:td,whitePoint:id,transfer:ht,toXYZ:sd,fromXYZ:rd,luminanceCoefficients:nd,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});var _s,Al=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=Yr("canvas")),_s.width=e.width,_s.height=e.height;let n=_s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jg=0,eo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dc(s[a].image)):r.push(dc(s[a]))}else r=dc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function dc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qg=0,It=class i extends ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ti,s=ti,r=nn,a=Hn,o=xn,c=si,l=i.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Ln(),this.name="",this.source=new eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qi:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case es:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qi:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case es:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=ff;It.DEFAULT_ANISOTROPY=1;var it=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],f=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(f-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(f+g)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,v=(m+1)/2,E=(p+1)/2,T=(u+d)/4,A=(h+x)/4,C=(f+g)/4;return M>v&&M>E?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=A/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=C/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=A/r,s=C/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-f)*(g-f)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-f)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rl=class extends ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new It(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new eo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends Rl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},to=class extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cl=class extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],m=r[a+1],f=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=f,e[t+3]=x;return}if(h!==x||c!==d||l!==m||u!==f){let g=1-o,p=c*d+l*m+u*f+h*x,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let E=Math.sqrt(M),T=Math.atan2(E,p*y);g=Math.sin(g*T)/E,o=Math.sin(o*T)/E}let v=o*y;if(c=c*g+d*v,l=l*g+m*v,u=u*g+f*v,h=h*g+x*v,g===1-o){let E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],m=r[a+2],f=r[a+3];return e[t]=o*f+u*h+c*m-l*d,e[t+1]=c*f+u*d+l*h-o*m,e[t+2]=l*f+u*m+o*d-c*h,e[t+3]=u*f-o*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),m=c(s/2),f=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*m*f,this._y=l*m*h-d*u*f,this._z=l*u*f+d*m*h,this._w=l*u*h-d*m*f;break;case"YXZ":this._x=d*u*h+l*m*f,this._y=l*m*h-d*u*f,this._z=l*u*f-d*m*h,this._w=l*u*h+d*m*f;break;case"ZXY":this._x=d*u*h-l*m*f,this._y=l*m*h+d*u*f,this._z=l*u*f+d*m*h,this._w=l*u*h-d*m*f;break;case"ZYX":this._x=d*u*h-l*m*f,this._y=l*m*h+d*u*f,this._z=l*u*f-d*m*h,this._w=l*u*h+d*m*f;break;case"YZX":this._x=d*u*h+l*m*f,this._y=l*m*h+d*u*f,this._z=l*u*f-d*m*h,this._w=l*u*h-d*m*f;break;case"XZY":this._x=d*u*h-l*m*f,this._y=l*m*h-d*u*f,this._z=l*u*f+d*m*h,this._w=l*u*h+d*m*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>h){let m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>h){let m=2*Math.sqrt(1+o-n-h);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ad.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fc=new P,ad=new sn,kt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),_a.subVectors(this.max,Cr),ys.subVectors(e.a,Cr),vs.subVectors(e.b,Cr),Ms.subVectors(e.c,Cr),xi.subVectors(vs,ys),_i.subVectors(Ms,vs),Wi.subVectors(ys,Ms);let t=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-Wi.z,Wi.y,xi.z,0,-xi.x,_i.z,0,-_i.x,Wi.z,0,-Wi.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-Wi.y,Wi.x,0];return!pc(t,ys,vs,Ms,_a)||(t=[1,0,0,0,1,0,0,0,1],!pc(t,ys,vs,Ms,_a))?!1:(ya.crossVectors(xi,_i),t=[ya.x,ya.y,ya.z],pc(t,ys,vs,Ms,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Yn=[new P,new P,new P,new P,new P,new P,new P,new P],En=new P,xa=new kt,ys=new P,vs=new P,Ms=new P,xi=new P,_i=new P,Wi=new P,Cr=new P,_a=new P,ya=new P,Xi=new P;function pc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xi.fromArray(i,r);let o=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),c=e.dot(Xi),l=t.dot(Xi),u=n.dot(Xi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var e0=new kt,Ir=new P,mc=new P,ln=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):e0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);let t=Ir.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ir,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(mc)),this.expandByPoint(Ir.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},$n=new P,gc=new P,va=new P,yi=new P,xc=new P,Ma=new P,_c=new P,Js=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gc.copy(e).add(t).multiplyScalar(.5),va.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(gc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(va),o=yi.dot(this.direction),c=-yi.dot(va),l=yi.lengthSq(),u=Math.abs(1-a*a),h,d,m,f;if(u>0)if(h=a*c-o,d=a*o-c,f=r*u,h>=0)if(d>=-f)if(d<=f){let x=1/u;h*=x,d*=x,m=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d<=-f?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=f?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(gc).addScaledVector(va,d),m}intersectSphere(e,t){$n.subVectors(e.center,this.origin);let n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,s,r){xc.subVectors(t,e),Ma.subVectors(n,e),_c.crossVectors(xc,Ma);let a=this.direction.dot(_c),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,e);let c=o*this.direction.dot(Ma.crossVectors(yi,Ma));if(c<0)return null;let l=o*this.direction.dot(xc.cross(yi));if(l<0||c+l>a)return null;let u=-o*yi.dot(_c);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class i{constructor(e,t,n,s,r,a,o,c,l,u,h,d,m,f,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,m,f,x,g)}set(e,t,n,s,r,a,o,c,l,u,h,d,m,f,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=f,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/bs.setFromMatrixColumn(e,0).length(),r=1/bs.setFromMatrixColumn(e,1).length(),a=1/bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,m=a*h,f=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+f*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=f+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,m=c*h,f=l*u,x=l*h;t[0]=d+x*o,t[4]=f*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-f,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,m=c*h,f=l*u,x=l*h;t[0]=d-x*o,t[4]=-a*h,t[8]=f+m*o,t[1]=m+f*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,m=a*h,f=o*u,x=o*h;t[0]=c*u,t[4]=f*l-m,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=m*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,f=o*c,x=o*l;t[0]=c*u,t[4]=x-d*h,t[8]=f*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+f,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*c,m=a*l,f=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=a*u,t[9]=m*h-f,t[2]=f*h-m,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t0,e,n0)}lookAt(e,t,n){let s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),vi.crossVectors(n,on),vi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),vi.crossVectors(n,on)),vi.normalize(),ba.crossVectors(on,vi),s[0]=vi.x,s[4]=ba.x,s[8]=on.x,s[1]=vi.y,s[5]=ba.y,s[9]=on.y,s[2]=vi.z,s[6]=ba.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],f=n[2],x=n[6],g=n[10],p=n[14],y=n[3],M=n[7],v=n[11],E=n[15],T=s[0],A=s[4],C=s[8],_=s[12],b=s[1],L=s[5],H=s[9],I=s[13],U=s[2],N=s[6],D=s[10],q=s[14],O=s[3],te=s[7],ne=s[11],oe=s[15];return r[0]=a*T+o*b+c*U+l*O,r[4]=a*A+o*L+c*N+l*te,r[8]=a*C+o*H+c*D+l*ne,r[12]=a*_+o*I+c*q+l*oe,r[1]=u*T+h*b+d*U+m*O,r[5]=u*A+h*L+d*N+m*te,r[9]=u*C+h*H+d*D+m*ne,r[13]=u*_+h*I+d*q+m*oe,r[2]=f*T+x*b+g*U+p*O,r[6]=f*A+x*L+g*N+p*te,r[10]=f*C+x*H+g*D+p*ne,r[14]=f*_+x*I+g*q+p*oe,r[3]=y*T+M*b+v*U+E*O,r[7]=y*A+M*L+v*N+E*te,r[11]=y*C+M*H+v*D+E*ne,r[15]=y*_+M*I+v*q+E*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],f=e[3],x=e[7],g=e[11],p=e[15];return f*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*m-n*c*m)+x*(+t*c*m-t*l*d+r*a*d-s*a*m+s*l*u-r*c*u)+g*(+t*l*h-t*o*m-r*a*h+n*a*m+r*o*u-n*l*u)+p*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],f=e[12],x=e[13],g=e[14],p=e[15],y=h*g*l-x*d*l+x*c*m-o*g*m-h*c*p+o*d*p,M=f*d*l-u*g*l-f*c*m+a*g*m+u*c*p-a*d*p,v=u*x*l-f*h*l+f*o*m-a*x*m-u*o*p+a*h*p,E=f*h*c-u*x*c-f*o*d+a*x*d+u*o*g-a*h*g,T=t*y+n*M+s*v+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=y*A,e[1]=(x*d*r-h*g*r-x*s*m+n*g*m+h*s*p-n*d*p)*A,e[2]=(o*g*r-x*c*r+x*s*l-n*g*l-o*s*p+n*c*p)*A,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*m-n*c*m)*A,e[4]=M*A,e[5]=(u*g*r-f*d*r+f*s*m-t*g*m-u*s*p+t*d*p)*A,e[6]=(f*c*r-a*g*r-f*s*l+t*g*l+a*s*p-t*c*p)*A,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*m+t*c*m)*A,e[8]=v*A,e[9]=(f*h*r-u*x*r-f*n*m+t*x*m+u*n*p-t*h*p)*A,e[10]=(a*x*r-f*o*r+f*n*l-t*x*l-a*n*p+t*o*p)*A,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*m-t*o*m)*A,e[12]=E*A,e[13]=(u*x*s-f*h*s+f*n*d-t*x*d-u*n*g+t*h*g)*A,e[14]=(f*o*s-a*x*s-f*n*c+t*x*c+a*n*g-t*o*g)*A,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,m=r*u,f=r*h,x=a*u,g=a*h,p=o*h,y=c*l,M=c*u,v=c*h,E=n.x,T=n.y,A=n.z;return s[0]=(1-(x+p))*E,s[1]=(m+v)*E,s[2]=(f-M)*E,s[3]=0,s[4]=(m-v)*T,s[5]=(1-(d+p))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(f+M)*A,s[9]=(g-y)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=bs.set(s[0],s[1],s[2]).length(),a=bs.set(s[4],s[5],s[6]).length(),o=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);let l=1/r,u=1/a,h=1/o;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,t.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ni){let c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),m,f;if(o===ni)m=-(a+r)/(a-r),f=-2*a*r/(a-r);else if(o===Qa)m=-a/(a-r),f=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ni){let c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*l,m=(n+s)*u,f,x;if(o===ni)f=(a+r)*h,x=-2*h;else if(o===Qa)f=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},bs=new P,An=new ze,t0=new P(0,0,0),n0=new P(1,1,1),vi=new P,ba=new P,on=new P,od=new ze,cd=new sn,Vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(od,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cd.setFromEuler(this),this.setFromQuaternion(cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var no=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},i0=0,ld=new P,Ss=new sn,Kn=new ze,Sa=new P,Pr=new P,s0=new P,r0=new sn,ud=new P(1,0,0),hd=new P(0,1,0),dd=new P(0,0,1),fd={type:"added"},a0={type:"removed"},ws={type:"childadded",child:null},yc={type:"childremoved",child:null},vt=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Vn,n=new sn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new Xe}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(ud,e)}rotateY(e){return this.rotateOnAxis(hd,e)}rotateZ(e){return this.rotateOnAxis(dd,e)}translateOnAxis(e,t){return ld.copy(e).applyQuaternion(this.quaternion),this.position.add(ld.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ud,e)}translateY(e){return this.translateOnAxis(hd,e)}translateZ(e){return this.translateOnAxis(dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sa.copy(e):Sa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Pr,Sa,this.up):Kn.lookAt(Sa,Pr,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(Kn),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fd),ws.child=e,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a0),yc.child=e,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fd),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,s0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,r0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};vt.DEFAULT_UP=new P(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new P,Zn=new P,vc=new P,Jn=new P,Ts=new P,Es=new P,pd=new P,Mc=new P,bc=new P,Sc=new P,wc=new it,Tc=new it,Ec=new it,wi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),Zn.subVectors(n,t),vc.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(Zn),c=Rn.dot(vc),l=Zn.dot(Zn),u=Zn.dot(vc),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,m=(l*c-o*u)*d,f=(a*u-o*c)*d;return r.set(1-m-f,f,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return wc.setScalar(0),Tc.setScalar(0),Ec.setScalar(0),wc.fromBufferAttribute(e,t),Tc.fromBufferAttribute(e,n),Ec.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(wc,r.x),a.addScaledVector(Tc,r.y),a.addScaledVector(Ec,r.z),a}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),Zn.subVectors(e,t),Rn.cross(Zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Rn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ts.subVectors(s,n),Es.subVectors(r,n),Mc.subVectors(e,n);let c=Ts.dot(Mc),l=Es.dot(Mc);if(c<=0&&l<=0)return t.copy(n);bc.subVectors(e,s);let u=Ts.dot(bc),h=Es.dot(bc);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ts,a);Sc.subVectors(e,r);let m=Ts.dot(Sc),f=Es.dot(Sc);if(f>=0&&m<=f)return t.copy(r);let x=m*l-c*f;if(x<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Es,o);let g=u*f-m*h;if(g<=0&&h-u>=0&&m-f>=0)return pd.subVectors(r,s),o=(h-u)/(h-u+(m-f)),t.copy(s).addScaledVector(pd,o);let p=1/(g+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(Ts,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function Ac(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=xu(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ac(a,r,e+1/3),this.g=Ac(a,r,e),this.b=Ac(a,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=Af[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Je.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Ft(Wt.r*255,0,255))*65536+Math.round(Ft(Wt.g*255,0,255))*256+Math.round(Ft(Wt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Wt.copy(this),t);let n=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Tt){Je.fromWorkingColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,s=Wt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(wa);let n=Wr(Mi.h,wa.h,t),s=Wr(Mi.s,wa.s,t),r=Wr(Mi.l,wa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new Te;Te.NAMES=Af;var o0=0,Kt=class extends ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Ln(),this.name="",this.blending=Pn,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pn&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==Wc&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},At=class extends Kt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new P,Ta=new Ce,wt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=El,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),e}};var io=class extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var so=class extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ot=class extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},c0=0,gn=new ze,Rc=new vt,As=new P,cn=new kt,Lr=new kt,Nt=new P,bt=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ef(e)?so:io)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(cn.min,Lr.min),cn.expandByPoint(Nt),Nt.addVectors(cn.max,Lr.max),cn.expandByPoint(Nt)):(cn.expandByPoint(Lr.min),cn.expandByPoint(Lr.max))}cn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Nt.fromBufferAttribute(o,l),c&&(As.fromBufferAttribute(e,l),Nt.add(As)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new P,c[C]=new P;let l=new P,u=new P,h=new P,d=new Ce,m=new Ce,f=new Ce,x=new P,g=new P;function p(C,_,b){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,C),m.fromBufferAttribute(r,_),f.fromBufferAttribute(r,b),u.sub(l),h.sub(l),m.sub(d),f.sub(d);let L=1/(m.x*f.y-f.x*m.y);isFinite(L)&&(x.copy(u).multiplyScalar(f.y).addScaledVector(h,-m.y).multiplyScalar(L),g.copy(h).multiplyScalar(m.x).addScaledVector(u,-f.x).multiplyScalar(L),o[C].add(x),o[_].add(x),o[b].add(x),c[C].add(g),c[_].add(g),c[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,_=y.length;C<_;++C){let b=y[C],L=b.start,H=b.count;for(let I=L,U=L+H;I<U;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new P,v=new P,E=new P,T=new P;function A(C){E.fromBufferAttribute(s,C),T.copy(E);let _=o[C];M.copy(_),M.sub(E.multiplyScalar(E.dot(_))).normalize(),v.crossVectors(T,_);let L=v.dot(c[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,L)}for(let C=0,_=y.length;C<_;++C){let b=y[C],L=b.start,H=b.count;for(let I=L,U=L+H;I<U;I+=3)A(e.getX(I+0)),A(e.getX(I+1)),A(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){let f=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),m=0,f=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*u;for(let p=0;p<u;p++)d[f++]=l[m++]}return new wt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},md=new ze,qi=new Js,Ea=new ln,gd=new P,Aa=new P,Ra=new P,Ca=new P,Cc=new P,Ia=new P,xd=new P,Pa=new P,Le=class extends vt{constructor(e=new bt,t=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ia.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(Cc.fromBufferAttribute(h,e),a?Ia.addScaledVector(Cc,u):Ia.addScaledVector(Cc.sub(t),u))}t.add(Ia)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),qi.copy(e.ray).recast(e.near),!(Ea.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Ea,gd)===null||qi.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(md.copy(r).invert(),qi.copy(e.ray).applyMatrix4(md),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,x=d.length;f<x;f++){let g=d[f],p=a[g.materialIndex],y=Math.max(g.start,m.start),M=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let v=y,E=M;v<E;v+=3){let T=o.getX(v),A=o.getX(v+1),C=o.getX(v+2);s=La(this,p,e,n,l,u,h,T,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let g=f,p=x;g<p;g+=3){let y=o.getX(g),M=o.getX(g+1),v=o.getX(g+2);s=La(this,a,e,n,l,u,h,y,M,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let f=0,x=d.length;f<x;f++){let g=d[f],p=a[g.materialIndex],y=Math.max(g.start,m.start),M=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let v=y,E=M;v<E;v+=3){let T=v,A=v+1,C=v+2;s=La(this,p,e,n,l,u,h,T,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let g=f,p=x;g<p;g+=3){let y=g,M=g+1,v=g+2;s=La(this,a,e,n,l,u,h,y,M,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function l0(i,e,t,n,s,r,a,o){let c;if(e.side===Xt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===_n,o),c===null)return null;Pa.copy(o),Pa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Pa);return l<t.near||l>t.far?null:{distance:l,point:Pa.clone(),object:i}}function La(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Aa),i.getVertexPosition(c,Ra),i.getVertexPosition(l,Ca);let u=l0(i,e,t,n,Aa,Ra,Ca,xd);if(u){let h=new P;wi.getBarycoord(xd,Aa,Ra,Ca,h),s&&(u.uv=wi.getInterpolatedAttribute(s,o,c,l,h,new Ce)),r&&(u.uv1=wi.getInterpolatedAttribute(r,o,c,l,h,new Ce)),a&&(u.normal=wi.getInterpolatedAttribute(a,o,c,l,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};wi.getNormal(Aa,Ra,Ca,d.normal),u.face=d,u.barycoord=h}return u}var un=class i extends bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,m=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(h,2));function f(x,g,p,y,M,v,E,T,A,C,_){let b=v/A,L=E/C,H=v/2,I=E/2,U=T/2,N=A+1,D=C+1,q=0,O=0,te=new P;for(let ne=0;ne<D;ne++){let oe=ne*L-I;for(let he=0;he<N;he++){let ce=he*b-H;te[x]=ce*y,te[g]=oe*M,te[p]=U,l.push(te.x,te.y,te.z),te[x]=0,te[g]=0,te[p]=T>0?1:-1,u.push(te.x,te.y,te.z),h.push(he/A),h.push(1-ne/C),q+=1}}for(let ne=0;ne<C;ne++)for(let oe=0;oe<A;oe++){let he=d+oe+N*ne,ce=d+oe+N*(ne+1),G=d+(oe+1)+N*(ne+1),J=d+(oe+1)+N*ne;c.push(he,ce,J),c.push(ce,G,J),O+=6}o.addGroup(m,O,_),m+=O,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function js(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function $t(i){let e={};for(let t=0;t<i.length;t++){let n=js(i[t]);for(let s in n)e[s]=n[s]}return e}function u0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var h0={clone:js,merge:$t},d0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zt=class extends Kt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=u0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ro=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bi=new P,_d=new Ce,yd=new Ce,Pt=class extends ro{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,_d,yd),t.subVectors(yd,_d)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rs=-90,Cs=1,Il=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pt(Rs,Cs,e,t);s.layers=this.layers,this.add(s);let r=new Pt(Rs,Cs,e,t);r.layers=this.layers,this.add(r);let a=new Pt(Rs,Cs,e,t);a.layers=this.layers,this.add(a);let o=new Pt(Rs,Cs,e,t);o.layers=this.layers,this.add(o);let c=new Pt(Rs,Cs,e,t);c.layers=this.layers,this.add(c);let l=new Pt(Rs,Cs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},ao=class extends It{constructor(e,t,n,s,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ws,super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pl=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ao(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Ei});r.uniforms.tEquirect.value=t;let a=new Le(s,r),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=nn),new Il(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ic=new P,p0=new P,m0=new Xe,ei=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ic.subVectors(n,t).cross(p0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ic),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||m0.getNormalMatrix(e),s=this.coplanarPoint(Ic).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new ln,Da=new P,$r=class{constructor(e=new ei,t=new ei,n=new ei,s=new ei,r=new ei,a=new ei){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],m=s[8],f=s[9],x=s[10],g=s[11],p=s[12],y=s[13],M=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,g-m,v-p).normalize(),n[1].setComponents(c+r,d+l,g+m,v+p).normalize(),n[2].setComponents(c+a,d+u,g+f,v+y).normalize(),n[3].setComponents(c-a,d-u,g-f,v-y).normalize(),n[4].setComponents(c-o,d-h,g-x,v-M).normalize(),t===ni)n[5].setComponents(c+o,d+h,g+x,v+M).normalize();else if(t===Qa)n[5].setComponents(o,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Da.x=s.normal.x>0?e.max.x:e.min.x,Da.y=s.normal.y>0?e.max.y:e.min.y,Da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Cf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function g0(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((m,f)=>m.start-f.start);let d=0;for(let m=1;m<h.length;m++){let f=h[d],x=h[m];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++d,h[d]=x)}h.length=d+1;for(let m=0,f=h.length;m<f;m++){let x=h[m];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Dn=class i extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,m=[],f=[],x=[],g=[];for(let p=0;p<u;p++){let y=p*d-a;for(let M=0;M<l;M++){let v=M*h-r;f.push(v,-y,0),x.push(0,0,1),g.push(M/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let M=y+l*p,v=y+l*(p+1),E=y+1+l*(p+1),T=y+1+l*p;m.push(M,v,T),m.push(v,E,T)}this.setIndex(m),this.setAttribute("position",new ot(f,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_0=`#ifdef USE_ALPHAHASH
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
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S0=`#ifdef USE_AOMAP
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
#endif`,w0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0=`#ifdef USE_BATCHING
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
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I0=`#ifdef USE_IRIDESCENCE
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
#endif`,P0=`#ifdef USE_BUMPMAP
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,z0=`#define PI 3.141592653589793
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
} // validated`,H0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,V0=`vec3 transformedNormal = objectNormal;
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
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",$0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ix=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sx=`#ifdef USE_GRADIENTMAP
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
}`,rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cx=`uniform bool receiveShadow;
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
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,px=`PhysicalMaterial material;
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
#endif`,mx=`struct PhysicalMaterial {
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
}`,gx=`
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
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
#endif`,_x=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ex=`#if defined( USE_POINTS_UV )
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
#endif`,Ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lx=`#ifdef USE_MORPHTARGETS
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
#endif`,Dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bx=`#ifdef USE_NORMALMAP
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
#endif`,zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t_=`float getShadowMask() {
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
}`,n_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i_=`#ifdef USE_SKINNING
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
#endif`,s_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,a_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u_=`#ifdef USE_TRANSMISSION
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
#endif`,h_=`#ifdef USE_TRANSMISSION
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,g_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x_=`uniform sampler2D t2D;
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`#include <common>
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
}`,S_=`#if DEPTH_PACKING == 3200
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
}`,w_=`#define DISTANCE
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
}`,T_=`#define DISTANCE
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`uniform float scale;
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
}`,C_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,P_=`uniform vec3 diffuse;
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
}`,L_=`#define LAMBERT
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
}`,D_=`#define LAMBERT
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
}`,N_=`#define MATCAP
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
}`,U_=`#define MATCAP
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
}`,k_=`#define NORMAL
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
}`,O_=`#define NORMAL
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
}`,F_=`#define PHONG
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
}`,B_=`#define PHONG
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
}`,z_=`#define STANDARD
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
}`,H_=`#define STANDARD
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
}`,V_=`#define TOON
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
}`,G_=`#define TOON
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
}`,W_=`uniform float size;
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
}`,X_=`uniform vec3 diffuse;
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
}`,q_=`#include <common>
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
}`,Y_=`uniform vec3 color;
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
}`,$_=`uniform float rotation;
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
}`,K_=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:x0,alphahash_pars_fragment:_0,alphamap_fragment:y0,alphamap_pars_fragment:v0,alphatest_fragment:M0,alphatest_pars_fragment:b0,aomap_fragment:S0,aomap_pars_fragment:w0,batching_pars_vertex:T0,batching_vertex:E0,begin_vertex:A0,beginnormal_vertex:R0,bsdfs:C0,iridescence_fragment:I0,bumpmap_pars_fragment:P0,clipping_planes_fragment:L0,clipping_planes_pars_fragment:D0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:U0,color_fragment:k0,color_pars_fragment:O0,color_pars_vertex:F0,color_vertex:B0,common:z0,cube_uv_reflection_fragment:H0,defaultnormal_vertex:V0,displacementmap_pars_vertex:G0,displacementmap_vertex:W0,emissivemap_fragment:X0,emissivemap_pars_fragment:q0,colorspace_fragment:Y0,colorspace_pars_fragment:$0,envmap_fragment:K0,envmap_common_pars_fragment:Z0,envmap_pars_fragment:J0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:lx,envmap_vertex:Q0,fog_vertex:ex,fog_pars_vertex:tx,fog_fragment:nx,fog_pars_fragment:ix,gradientmap_pars_fragment:sx,lightmap_pars_fragment:rx,lights_lambert_fragment:ax,lights_lambert_pars_fragment:ox,lights_pars_begin:cx,lights_toon_fragment:ux,lights_toon_pars_fragment:hx,lights_phong_fragment:dx,lights_phong_pars_fragment:fx,lights_physical_fragment:px,lights_physical_pars_fragment:mx,lights_fragment_begin:gx,lights_fragment_maps:xx,lights_fragment_end:_x,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:vx,logdepthbuf_pars_vertex:Mx,logdepthbuf_vertex:bx,map_fragment:Sx,map_pars_fragment:wx,map_particle_fragment:Tx,map_particle_pars_fragment:Ex,metalnessmap_fragment:Ax,metalnessmap_pars_fragment:Rx,morphinstance_vertex:Cx,morphcolor_vertex:Ix,morphnormal_vertex:Px,morphtarget_pars_vertex:Lx,morphtarget_vertex:Dx,normal_fragment_begin:Nx,normal_fragment_maps:Ux,normal_pars_fragment:kx,normal_pars_vertex:Ox,normal_vertex:Fx,normalmap_pars_fragment:Bx,clearcoat_normal_fragment_begin:zx,clearcoat_normal_fragment_maps:Hx,clearcoat_pars_fragment:Vx,iridescence_pars_fragment:Gx,opaque_fragment:Wx,packing:Xx,premultiplied_alpha_fragment:qx,project_vertex:Yx,dithering_fragment:$x,dithering_pars_fragment:Kx,roughnessmap_fragment:Zx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:jx,shadowmap_pars_vertex:Qx,shadowmap_vertex:e_,shadowmask_pars_fragment:t_,skinbase_vertex:n_,skinning_pars_vertex:i_,skinning_vertex:s_,skinnormal_vertex:r_,specularmap_fragment:a_,specularmap_pars_fragment:o_,tonemapping_fragment:c_,tonemapping_pars_fragment:l_,transmission_fragment:u_,transmission_pars_fragment:h_,uv_pars_fragment:d_,uv_pars_vertex:f_,uv_vertex:p_,worldpos_vertex:m_,background_vert:g_,background_frag:x_,backgroundCube_vert:__,backgroundCube_frag:y_,cube_vert:v_,cube_frag:M_,depth_vert:b_,depth_frag:S_,distanceRGBA_vert:w_,distanceRGBA_frag:T_,equirect_vert:E_,equirect_frag:A_,linedashed_vert:R_,linedashed_frag:C_,meshbasic_vert:I_,meshbasic_frag:P_,meshlambert_vert:L_,meshlambert_frag:D_,meshmatcap_vert:N_,meshmatcap_frag:U_,meshnormal_vert:k_,meshnormal_frag:O_,meshphong_vert:F_,meshphong_frag:B_,meshphysical_vert:z_,meshphysical_frag:H_,meshtoon_vert:V_,meshtoon_frag:G_,points_vert:W_,points_frag:X_,shadow_vert:q_,shadow_frag:Y_,sprite_vert:$_,sprite_frag:K_},le={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},zn={basic:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:$t([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:$t([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:$t([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:$t([le.points,le.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:$t([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:$t([le.common,le.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:$t([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:$t([le.sprite,le.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:$t([le.common,le.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:$t([le.lights,le.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};zn.physical={uniforms:$t([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Na={r:0,b:0,g:0},$i=new Vn,Z_=new ze;function J_(i,e,t,n,s,r,a){let o=new Te(0),c=r===!0?0:1,l,u,h=null,d=0,m=null;function f(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function x(y){let M=!1,v=f(y);v===null?p(o,c):v&&v.isColor&&(p(v,1),M=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,M){let v=f(M);v&&(v.isCubeTexture||v.mapping===Io)?(u===void 0&&(u=new Le(new un(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:js(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),$i.copy(M.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Z_.makeRotationFromEuler($i)),u.material.toneMapped=Je.getTransfer(v.colorSpace)!==ht,(h!==v||d!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Le(new Dn(2,2),new Zt({name:"BackgroundMaterial",uniforms:js(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Je.getTransfer(v.colorSpace)!==ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,M){y.getRGB(Na,Rf(i)),n.buffers.color.setClear(Na.r,Na.g,Na.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),c=M,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:x,addToRenderList:g}}function j_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(b,L,H,I,U){let N=!1,D=h(I,H,L);r!==D&&(r=D,l(r.object)),N=m(b,I,H,U),N&&f(b,I,H,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,v(b,L,H,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,L,H){let I=H.wireframe===!0,U=n[b.id];U===void 0&&(U={},n[b.id]=U);let N=U[L.id];N===void 0&&(N={},U[L.id]=N);let D=N[I];return D===void 0&&(D=d(c()),N[I]=D),D}function d(b){let L=[],H=[],I=[];for(let U=0;U<t;U++)L[U]=0,H[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:I,object:b,attributes:{},index:null}}function m(b,L,H,I){let U=r.attributes,N=L.attributes,D=0,q=H.getAttributes();for(let O in q)if(q[O].location>=0){let ne=U[O],oe=N[O];if(oe===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),ne===void 0||ne.attribute!==oe||oe&&ne.data!==oe.data)return!0;D++}return r.attributesNum!==D||r.index!==I}function f(b,L,H,I){let U={},N=L.attributes,D=0,q=H.getAttributes();for(let O in q)if(q[O].location>=0){let ne=N[O];ne===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor));let oe={};oe.attribute=ne,ne&&ne.data&&(oe.data=ne.data),U[O]=oe,D++}r.attributes=U,r.attributesNum=D,r.index=I}function x(){let b=r.newAttributes;for(let L=0,H=b.length;L<H;L++)b[L]=0}function g(b){p(b,0)}function p(b,L){let H=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;H[b]=1,I[b]===0&&(i.enableVertexAttribArray(b),I[b]=1),U[b]!==L&&(i.vertexAttribDivisor(b,L),U[b]=L)}function y(){let b=r.newAttributes,L=r.enabledAttributes;for(let H=0,I=L.length;H<I;H++)L[H]!==b[H]&&(i.disableVertexAttribArray(H),L[H]=0)}function M(b,L,H,I,U,N,D){D===!0?i.vertexAttribIPointer(b,L,H,U,N):i.vertexAttribPointer(b,L,H,I,U,N)}function v(b,L,H,I){x();let U=I.attributes,N=H.getAttributes(),D=L.defaultAttributeValues;for(let q in N){let O=N[q];if(O.location>=0){let te=U[q];if(te===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(te=b.instanceColor)),te!==void 0){let ne=te.normalized,oe=te.itemSize,he=e.get(te);if(he===void 0)continue;let ce=he.buffer,G=he.type,J=he.bytesPerElement,Y=G===i.INT||G===i.UNSIGNED_INT||te.gpuType===au;if(te.isInterleavedBufferAttribute){let se=te.data,ae=se.stride,ue=te.offset;if(se.isInstancedInterleavedBuffer){for(let ge=0;ge<O.locationSize;ge++)p(O.location+ge,se.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ge=0;ge<O.locationSize;ge++)g(O.location+ge);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let ge=0;ge<O.locationSize;ge++)M(O.location+ge,oe/O.locationSize,G,ne,ae*J,(ue+oe/O.locationSize*ge)*J,Y)}else{if(te.isInstancedBufferAttribute){for(let se=0;se<O.locationSize;se++)p(O.location+se,te.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let se=0;se<O.locationSize;se++)g(O.location+se);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let se=0;se<O.locationSize;se++)M(O.location+se,oe/O.locationSize,G,ne,oe*J,oe/O.locationSize*se*J,Y)}}else if(D!==void 0){let ne=D[q];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(O.location,ne);break;case 3:i.vertexAttrib3fv(O.location,ne);break;case 4:i.vertexAttrib4fv(O.location,ne);break;default:i.vertexAttrib1fv(O.location,ne)}}}}y()}function E(){C();for(let b in n){let L=n[b];for(let H in L){let I=L[H];for(let U in I)u(I[U].object),delete I[U];delete L[H]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let L=n[b.id];for(let H in L){let I=L[H];for(let U in I)u(I[U].object),delete I[U];delete L[H]}delete n[b.id]}function A(b){for(let L in n){let H=n[L];if(H[b.id]===void 0)continue;let I=H[b.id];for(let U in I)u(I[U].object),delete I[U];delete H[b.id]}}function C(){_(),a=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:_,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Q_(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let m=0;for(let f=0;f<h;f++)m+=u[f];t.update(m,n,1)}function c(l,u,h,d){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<l.length;f++)a(l[f],u[f],d[f]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let f=0;for(let x=0;x<h;x++)f+=u[x]*d[x];t.update(f,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ey(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let C=A===ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==si&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==In&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:E,maxSamples:T}}function ty(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ei,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){let f=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||f===null||f.length===0||r&&!g)r?u(null):l();else{let y=r?0:n,M=y*4,v=p.clippingState||null;c.value=v,v=u(f,d,M,m);for(let E=0;E!==M;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,f){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=c.value,f!==!0||g===null){let p=m+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=m;M!==x;++M,v+=4)a.copy(h[M]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function ny(i){let e=new WeakMap;function t(a,o){return o===jc?a.mapping=Ws:o===Qc&&(a.mapping=Xs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===jc||o===Qc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Pl(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Qs=class extends ro{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bs=4,vd=[.125,.215,.35,.446,.526,.582],ji=20,Pc=new Qs,Md=new Te,Lc=null,Dc=0,Nc=0,Uc=!1,Zi=(1+Math.sqrt(5))/2,Is=1/Zi,bd=[new P(-Zi,Is,0),new P(Zi,Is,0),new P(-Is,0,Zi),new P(Is,0,Zi),new P(0,Zi,-Is),new P(0,Zi,Is),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],oo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lc,Dc,Nc),this._renderer.xr.enabled=Uc,e.scissorTest=!1,Ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ea,format:xn,colorSpace:qt,depthBuffer:!1},s=Sd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iy(r)),this._blurMaterial=sy(r,e,t)}return s}_compileMaterial(e){let t=new Le(this._lodPlanes[0],e);this._renderer.compile(t,Pc)}_sceneToCubeUV(e,t,n,s){let o=new Pt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Md),u.toneMapping=Ai,u.autoClear=!1;let m=new At({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),f=new Le(new un,m),x=!1,g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,x=!0):(m.color.copy(Md),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let M=this._cubeSize;Ua(s,y*M,p>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(f,o),u.render(e,o)}f.geometry.dispose(),f.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ws||e.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Ua(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Pc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bd[(s-r-1)%bd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Le(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ji-1),x=r/f,g=isFinite(r)?1+Math.floor(u*x):ji;g>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ji}`);let p=[],y=0;for(let A=0;A<ji;++A){let C=A/x,_=Math.exp(-C*C/2);p.push(_),A===0?y+=_:A<g&&(y+=2*_)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=f,d.mipInt.value=M-n;let v=this._sizeLods[s],E=3*v*(s>M-Bs?s-M+Bs:0),T=4*(this._cubeSize-v);Ua(t,E,T,3*v,2*v),c.setRenderTarget(t),c.render(h,Pc)}};function iy(i){let e=[],t=[],n=[],s=i,r=i-Bs+1+vd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Bs?c=vd[a-i+Bs-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,f=6,x=3,g=2,p=1,y=new Float32Array(x*f*m),M=new Float32Array(g*f*m),v=new Float32Array(p*f*m);for(let T=0;T<m;T++){let A=T%3*2/3-1,C=T>2?0:-1,_=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(_,x*f*T),M.set(d,g*f*T);let b=[T,T,T,T,T,T];v.set(b,p*f*T)}let E=new bt;E.setAttribute("position",new wt(y,x)),E.setAttribute("uv",new wt(M,g)),E.setAttribute("faceIndex",new wt(v,p)),e.push(E),s>Bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sd(i,e,t){let n=new ai(i,e,t);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ua(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function sy(i,e,t){let n=new Float32Array(ji),s=new P(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_u(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function wd(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Td(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function _u(){return`

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
	`}function ry(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===jc||c===Qc,u=c===Ws||c===Xs;if(l||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new oo(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let m=o.image;return l&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new oo(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ay(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&zr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function oy(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let f in d.attributes)e.remove(d.attributes[f]);for(let f in d.morphAttributes){let x=d.morphAttributes[f];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER);let m=h.morphAttributes;for(let f in m){let x=m[f];for(let g=0,p=x.length;g<p;g++)e.update(x[g],i.ARRAY_BUFFER)}}function l(h){let d=[],m=h.index,f=h.attributes.position,x=0;if(m!==null){let y=m.array;x=m.version;for(let M=0,v=y.length;M<v;M+=3){let E=y[M+0],T=y[M+1],A=y[M+2];d.push(E,T,T,A,A,E)}}else if(f!==void 0){let y=f.array;x=f.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let E=M+0,T=M+1,A=M+2;d.push(E,T,T,A,A,E)}}else return;let g=new(Ef(d)?so:io)(d,1);g.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function cy(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,m){i.drawElements(n,m,r,d*a),t.update(m,n,1)}function l(d,m,f){f!==0&&(i.drawElementsInstanced(n,m,r,d*a,f),t.update(m,n,f))}function u(d,m,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,f);let g=0;for(let p=0;p<f;p++)g+=m[p];t.update(g,n,1)}function h(d,m,f,x){if(f===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,m[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,x,0,f);let p=0;for(let y=0;y<f;y++)p+=m[y]*x[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ly(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function uy(i,e,t){let n=new WeakMap,s=new it;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let _=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],M=0;m===!0&&(M=1),f===!0&&(M=2),x===!0&&(M=3);let v=o.attributes.position.count*M,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*E*4*h),A=new to(T,v,E,h);A.type=In,A.needsUpdate=!0;let C=M*4;for(let b=0;b<h;b++){let L=g[b],H=p[b],I=y[b],U=v*E*4*b;for(let N=0;N<L.count;N++){let D=N*C;m===!0&&(s.fromBufferAttribute(L,N),T[U+D+0]=s.x,T[U+D+1]=s.y,T[U+D+2]=s.z,T[U+D+3]=0),f===!0&&(s.fromBufferAttribute(H,N),T[U+D+4]=s.x,T[U+D+5]=s.y,T[U+D+6]=s.z,T[U+D+7]=0),x===!0&&(s.fromBufferAttribute(I,N),T[U+D+8]=s.x,T[U+D+9]=s.y,T[U+D+10]=s.z,T[U+D+11]=I.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new Ce(v,E)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];let f=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",f),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function hy(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var co=class extends It{constructor(e,t,n,s,r,a,o,c,l,u=zs){if(u!==zs&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zs&&(n=ts),n===void 0&&u===Ys&&(n=qs),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ut,this.minFilter=c!==void 0?c:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},If=new It,Ed=new co(1,1),Pf=new to,Lf=new Cl,Df=new ao,Ad=[],Rd=[],Cd=new Float32Array(16),Id=new Float32Array(9),Pd=new Float32Array(4);function hr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ad[s];if(r===void 0&&(r=new Float32Array(s),Ad[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Do(i,e){let t=Rd[e];t===void 0&&(t=new Int32Array(e),Rd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function my(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function gy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Pd.set(n),i.uniformMatrix2fv(this.addr,!1,Pd),Dt(t,n)}}function xy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Id.set(n),i.uniformMatrix3fv(this.addr,!1,Id),Dt(t,n)}}function _y(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Cd.set(n),i.uniformMatrix4fv(this.addr,!1,Cd),Dt(t,n)}}function yy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function My(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function by(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Sy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function Ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function Ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function Ay(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ed.compareFunction=wf,r=Ed):r=If,t.setTexture2D(e||r,s)}function Ry(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lf,s)}function Cy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Df,s)}function Iy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Pf,s)}function Py(i){switch(i){case 5126:return dy;case 35664:return fy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return xy;case 35676:return _y;case 5124:case 35670:return yy;case 35667:case 35671:return vy;case 35668:case 35672:return My;case 35669:case 35673:return by;case 5125:return Sy;case 36294:return wy;case 36295:return Ty;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Ry;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Iy}}function Ly(i,e){i.uniform1fv(this.addr,e)}function Dy(i,e){let t=hr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ny(i,e){let t=hr(e,this.size,3);i.uniform3fv(this.addr,t)}function Uy(i,e){let t=hr(e,this.size,4);i.uniform4fv(this.addr,t)}function ky(i,e){let t=hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Oy(i,e){let t=hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fy(i,e){let t=hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function By(i,e){i.uniform1iv(this.addr,e)}function zy(i,e){i.uniform2iv(this.addr,e)}function Hy(i,e){i.uniform3iv(this.addr,e)}function Vy(i,e){i.uniform4iv(this.addr,e)}function Gy(i,e){i.uniform1uiv(this.addr,e)}function Wy(i,e){i.uniform2uiv(this.addr,e)}function Xy(i,e){i.uniform3uiv(this.addr,e)}function qy(i,e){i.uniform4uiv(this.addr,e)}function Yy(i,e,t){let n=this.cache,s=e.length,r=Do(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||If,r[a])}function $y(i,e,t){let n=this.cache,s=e.length,r=Do(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Lf,r[a])}function Ky(i,e,t){let n=this.cache,s=e.length,r=Do(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Df,r[a])}function Zy(i,e,t){let n=this.cache,s=e.length,r=Do(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Pf,r[a])}function Jy(i){switch(i){case 5126:return Ly;case 35664:return Dy;case 35665:return Ny;case 35666:return Uy;case 35674:return ky;case 35675:return Oy;case 35676:return Fy;case 5124:case 35670:return By;case 35667:case 35671:return zy;case 35668:case 35672:return Hy;case 35669:case 35673:return Vy;case 5125:return Gy;case 36294:return Wy;case 36295:return Xy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return Ky;case 36289:case 36303:case 36311:case 36292:return Zy}}var Ll=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Py(t.type)}},Dl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jy(t.type)}},Nl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},kc=/(\w+)(\])?(\[|\.)?/g;function Ld(i,e){i.seq.push(e),i.map[e.id]=e}function jy(i,e,t){let n=i.name,s=n.length;for(kc.lastIndex=0;;){let r=kc.exec(n),a=kc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ld(t,l===void 0?new Ll(o,i,e):new Dl(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Nl(o),Ld(t,h)),t=h}}}var Vs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);jy(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Dd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Qy=37297,ev=0;function tv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Nd=new Xe;function nv(i){Je._getMatrix(Nd,Je.workingColorSpace,i);let e=`mat3( ${Nd.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Lo:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ud(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+tv(i.getShaderSource(e),a)}else return s}function iv(i,e){let t=nv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sv(i,e){let t;switch(e){case dg:t="Linear";break;case fg:t="Reinhard";break;case pg:t="Cineon";break;case mg:t="ACESFilmic";break;case xg:t="AgX";break;case _g:t="Neutral";break;case gg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ka=new P;function rv(){Je.getLuminanceCoefficients(ka);let i=ka.x.toFixed(4),e=ka.y.toFixed(4),t=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function av(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function ov(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Hr(i){return i!==""}function kd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Od(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(i){return i.replace(lv,hv)}var uv=new Map;function hv(i,e){let t=Ye[e];if(t===void 0){let n=uv.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ul(t)}var dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fd(i){return i.replace(dv,fv)}function fv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function pv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===su?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function mv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case Io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function xv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case df:e="ENVMAP_BLENDING_MULTIPLY";break;case ug:e="ENVMAP_BLENDING_MIX";break;case hg:e="ENVMAP_BLENDING_ADD";break}return e}function _v(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function yv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=pv(t),l=mv(t),u=gv(t),h=xv(t),d=_v(t),m=av(t),f=ov(r),x=s.createProgram(),g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Hr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(g=[Bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),p=[Bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ai?sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,iv("linearToOutputTexel",t.outputColorSpace),rv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),a=Ul(a),a=kd(a,t),a=Od(a,t),o=Ul(o),o=kd(o,t),o=Od(o,t),a=Fd(a),o=Fd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+g+a,v=y+p+o,E=Dd(s,s.VERTEX_SHADER,M),T=Dd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,E),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(x).trim(),I=s.getShaderInfoLog(E).trim(),U=s.getShaderInfoLog(T).trim(),N=!0,D=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,T);else{let q=Ud(s,E,"vertex"),O=Ud(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+q+`
`+O)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(I===""||U==="")&&(D=!1);D&&(L.diagnostics={runnable:N,programLog:H,vertexShader:{log:I,prefix:g},fragmentShader:{log:U,prefix:p}})}s.deleteShader(E),s.deleteShader(T),C=new Vs(s,x),_=cv(s,x)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let _;this.getAttributes=function(){return _===void 0&&A(this),_};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Qy)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ev++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}var vv=0,kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ol(e),t.set(e,n)),n}},Ol=class{constructor(e){this.id=vv++,this.code=e,this.usedTimes=0}};function Mv(i,e,t,n,s,r,a){let o=new no,c=new kl,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,L,H,I){let U=H.fog,N=I.geometry,D=_.isMeshStandardMaterial?H.environment:null,q=(_.isMeshStandardMaterial?t:e).get(_.envMap||D),O=q&&q.mapping===Io?q.image.height:null,te=f[_.type];_.precision!==null&&(m=s.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let ne=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,oe=ne!==void 0?ne.length:0,he=0;N.morphAttributes.position!==void 0&&(he=1),N.morphAttributes.normal!==void 0&&(he=2),N.morphAttributes.color!==void 0&&(he=3);let ce,G,J,Y;if(te){let ct=zn[te];ce=ct.vertexShader,G=ct.fragmentShader}else ce=_.vertexShader,G=_.fragmentShader,c.update(_),J=c.getVertexShaderID(_),Y=c.getFragmentShaderID(_);let se=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),ue=I.isInstancedMesh===!0,ge=I.isBatchedMesh===!0,He=!!_.map,Ve=!!_.matcap,je=!!q,k=!!_.aoMap,Ht=!!_.lightMap,Ke=!!_.bumpMap,Fe=!!_.normalMap,Re=!!_.displacementMap,ut=!!_.emissiveMap,Pe=!!_.metalnessMap,R=!!_.roughnessMap,S=_.anisotropy>0,V=_.clearcoat>0,j=_.dispersion>0,ee=_.iridescence>0,Z=_.sheen>0,Me=_.transmission>0,de=S&&!!_.anisotropyMap,K=V&&!!_.clearcoatMap,Ne=V&&!!_.clearcoatNormalMap,ie=V&&!!_.clearcoatRoughnessMap,ye=ee&&!!_.iridescenceMap,ke=ee&&!!_.iridescenceThicknessMap,Oe=Z&&!!_.sheenColorMap,ve=Z&&!!_.sheenRoughnessMap,Qe=!!_.specularMap,qe=!!_.specularColorMap,pt=!!_.specularIntensityMap,F=Me&&!!_.transmissionMap,fe=Me&&!!_.thicknessMap,$=!!_.gradientMap,Q=!!_.alphaMap,xe=_.alphaTest>0,pe=!!_.alphaHash,Ge=!!_.extensions,St=Ai;_.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(St=i.toneMapping);let Vt={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:ce,fragmentShader:G,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:ge,batchingColor:ge&&I._colorsTexture!==null,instancing:ue,instancingColor:ue&&I.instanceColor!==null,instancingMorph:ue&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:qt,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:Ve,envMap:je,envMapMode:je&&q.mapping,envMapCubeUVHeight:O,aoMap:k,lightMap:Ht,bumpMap:Ke,normalMap:Fe,displacementMap:d&&Re,emissiveMap:ut,normalMapObjectSpace:Fe&&_.normalMapType===wg,normalMapTangentSpace:Fe&&_.normalMapType===gu,metalnessMap:Pe,roughnessMap:R,anisotropy:S,anisotropyMap:de,clearcoat:V,clearcoatMap:K,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ie,dispersion:j,iridescence:ee,iridescenceMap:ye,iridescenceThicknessMap:ke,sheen:Z,sheenColorMap:Oe,sheenRoughnessMap:ve,specularMap:Qe,specularColorMap:qe,specularIntensityMap:pt,transmission:Me,transmissionMap:F,thicknessMap:fe,gradientMap:$,opaque:_.transparent===!1&&_.blending===Pn&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:xe,alphaHash:pe,combine:_.combine,mapUv:He&&x(_.map.channel),aoMapUv:k&&x(_.aoMap.channel),lightMapUv:Ht&&x(_.lightMap.channel),bumpMapUv:Ke&&x(_.bumpMap.channel),normalMapUv:Fe&&x(_.normalMap.channel),displacementMapUv:Re&&x(_.displacementMap.channel),emissiveMapUv:ut&&x(_.emissiveMap.channel),metalnessMapUv:Pe&&x(_.metalnessMap.channel),roughnessMapUv:R&&x(_.roughnessMap.channel),anisotropyMapUv:de&&x(_.anisotropyMap.channel),clearcoatMapUv:K&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(_.sheenRoughnessMap.channel),specularMapUv:Qe&&x(_.specularMap.channel),specularColorMapUv:qe&&x(_.specularColorMap.channel),specularIntensityMapUv:pt&&x(_.specularIntensityMap.channel),transmissionMapUv:F&&x(_.transmissionMap.channel),thicknessMapUv:fe&&x(_.thicknessMap.channel),alphaMapUv:Q&&x(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Fe||S),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(He||Q),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ae,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:he,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===ht,decodeVideoTextureEmissive:ut&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Et,flipSided:_.side===Xt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ge&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&_.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function p(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)b.push(L),b.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(y(b,_),M(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function y(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function M(_,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),_.push(o.mask)}function v(_){let b=f[_.type],L;if(b){let H=zn[b];L=h0.clone(H.uniforms)}else L=_.uniforms;return L}function E(_,b){let L;for(let H=0,I=u.length;H<I;H++){let U=u[H];if(U.cacheKey===b){L=U,++L.usedTimes;break}}return L===void 0&&(L=new yv(i,b,_,r),u.push(L)),L}function T(_){if(--_.usedTimes===0){let b=u.indexOf(_);u[b]=u[u.length-1],u.pop(),_.destroy()}}function A(_){c.remove(_)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:C}}function bv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Sv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,m,f,x,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:f,renderOrder:h.renderOrder,z:x,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=f,p.renderOrder=h.renderOrder,p.z=x,p.group=g),e++,p}function o(h,d,m,f,x,g){let p=a(h,d,m,f,x,g);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):t.push(p)}function c(h,d,m,f,x,g){let p=a(h,d,m,f,x,g);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||Sv),n.length>1&&n.sort(d||zd),s.length>1&&s.sort(d||zd)}function u(){for(let h=e,d=i.length;h<d;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function wv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Hd,i.set(n,[a])):s>=r.length?(a=new Hd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Tv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Te};break;case"SpotLight":t={position:new P,direction:new P,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Ev(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Av=0;function Rv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cv(i){let e=new Tv,t=Ev(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new ze,a=new ze;function o(l){let u=0,h=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let m=0,f=0,x=0,g=0,p=0,y=0,M=0,v=0,E=0,T=0,A=0;l.sort(Rv);for(let _=0,b=l.length;_<b;_++){let L=l[_],H=L.color,I=L.intensity,U=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=H.r*I,h+=H.g*I,d+=H.b*I;else if(L.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(L.sh.coefficients[D],I);A++}else if(L.isDirectionalLight){let D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let q=L.shadow,O=t.get(L);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,n.directionalShadow[m]=O,n.directionalShadowMap[m]=N,n.directionalShadowMatrix[m]=L.shadow.matrix,y++}n.directional[m]=D,m++}else if(L.isSpotLight){let D=e.get(L);D.position.setFromMatrixPosition(L.matrixWorld),D.color.copy(H).multiplyScalar(I),D.distance=U,D.coneCos=Math.cos(L.angle),D.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),D.decay=L.decay,n.spot[x]=D;let q=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,q.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[x]=q.matrix,L.castShadow){let O=t.get(L);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,n.spotShadow[x]=O,n.spotShadowMap[x]=N,v++}x++}else if(L.isRectAreaLight){let D=e.get(L);D.color.copy(H).multiplyScalar(I),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=D,g++}else if(L.isPointLight){let D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),D.distance=L.distance,D.decay=L.decay,L.castShadow){let q=L.shadow,O=t.get(L);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,O.shadowCameraNear=q.camera.near,O.shadowCameraFar=q.camera.far,n.pointShadow[f]=O,n.pointShadowMap[f]=N,n.pointShadowMatrix[f]=L.shadow.matrix,M++}n.point[f]=D,f++}else if(L.isHemisphereLight){let D=e.get(L);D.skyColor.copy(L.color).multiplyScalar(I),D.groundColor.copy(L.groundColor).multiplyScalar(I),n.hemi[p]=D,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==m||C.pointLength!==f||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==E||C.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=g,n.point.length=f,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.directionalLength=m,C.pointLength=f,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=E,C.numLightProbes=A,n.version=Av++)}function c(l,u){let h=0,d=0,m=0,f=0,x=0,g=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let M=l[p];if(M.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(M.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),m++}else if(M.isRectAreaLight){let v=n.rectArea[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),f++}else if(M.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function Vd(i){let e=new Cv(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Iv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Vd(i),e.set(s,[o])):r>=a.length?(o=new Vd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Fl=class extends Kt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bl=class extends Kt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
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
}`;function Dv(i,e,t){let n=new $r,s=new Ce,r=new Ce,a=new it,o=new Fl({depthPacking:Sg}),c=new Bl,l={},u=t.maxTextureSize,h={[_n]:Xt,[Xt]:_n,[Et]:Et},d=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Pv,fragmentShader:Lv}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let f=new bt;f.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Le(f,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hf;let p=this.type;this.render=function(T,A,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let _=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Ei),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let I=p!==Qn&&this.type===Qn,U=p===Qn&&this.type!==Qn;for(let N=0,D=T.length;N<D;N++){let q=T[N],O=q.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let te=O.getFrameExtents();if(s.multiply(te),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,O.mapSize.y=r.y)),O.map===null||I===!0||U===!0){let oe=this.type!==Qn?{minFilter:Ut,magFilter:Ut}:{};O.map!==null&&O.map.dispose(),O.map=new ai(s.x,s.y,oe),O.map.texture.name=q.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let ne=O.getViewportCount();for(let oe=0;oe<ne;oe++){let he=O.getViewport(oe);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),H.viewport(a),O.updateMatrices(q,oe),n=O.getFrustum(),v(A,C,O.camera,q,this.type)}O.isPointLightShadow!==!0&&this.type===Qn&&y(O,C),O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(_,b,L)};function y(T,A){let C=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ai(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,C,m,x,null)}function M(T,A,C,_){let b=null,L=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=C.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=b.uuid,I=A.uuid,U=l[H];U===void 0&&(U={},l[H]=U);let N=U[I];N===void 0&&(N=b.clone(),U[I]=N,A.addEventListener("dispose",E)),b=N}if(b.visible=A.visible,b.wireframe=A.wireframe,_===Qn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:h[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=i.properties.get(b);H.light=C}return b}function v(T,A,C,_,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Qn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let I=e.update(T),U=T.material;if(Array.isArray(U)){let N=I.groups;for(let D=0,q=N.length;D<q;D++){let O=N[D],te=U[O.materialIndex];if(te&&te.visible){let ne=M(T,te,_,b);T.onBeforeShadow(i,T,A,C,I,ne,O),i.renderBufferDirect(C,null,I,ne,T,O),T.onAfterShadow(i,T,A,C,I,ne,O)}}}else if(U.visible){let N=M(T,U,_,b);T.onBeforeShadow(i,T,A,C,I,N,null),i.renderBufferDirect(C,null,I,N,T,null),T.onAfterShadow(i,T,A,C,I,N,null)}}let H=T.children;for(let I=0,U=H.length;I<U;I++)v(H[I],A,C,_,b)}function E(T){T.target.removeEventListener("dispose",E);for(let C in l){let _=l[C],b=T.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}var Nv={[Xc]:qc,[Yc]:Zc,[$c]:Jc,[Gs]:Kc,[qc]:Xc,[Zc]:Yc,[Jc]:$c,[Kc]:Gs};function Uv(i,e){function t(){let F=!1,fe=new it,$=null,Q=new it(0,0,0,0);return{setMask:function(xe){$!==xe&&!F&&(i.colorMask(xe,xe,xe,xe),$=xe)},setLocked:function(xe){F=xe},setClear:function(xe,pe,Ge,St,Vt){Vt===!0&&(xe*=St,pe*=St,Ge*=St),fe.set(xe,pe,Ge,St),Q.equals(fe)===!1&&(i.clearColor(xe,pe,Ge,St),Q.copy(fe))},reset:function(){F=!1,$=null,Q.set(-1,0,0,0)}}}function n(){let F=!1,fe=!1,$=null,Q=null,xe=null;return{setReversed:function(pe){if(fe!==pe){let Ge=e.get("EXT_clip_control");fe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);let St=xe;xe=null,this.setClear(St)}fe=pe},getReversed:function(){return fe},setTest:function(pe){pe?se(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(pe){$!==pe&&!F&&(i.depthMask(pe),$=pe)},setFunc:function(pe){if(fe&&(pe=Nv[pe]),Q!==pe){switch(pe){case Xc:i.depthFunc(i.NEVER);break;case qc:i.depthFunc(i.ALWAYS);break;case Yc:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case $c:i.depthFunc(i.EQUAL);break;case Kc:i.depthFunc(i.GEQUAL);break;case Zc:i.depthFunc(i.GREATER);break;case Jc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=pe}},setLocked:function(pe){F=pe},setClear:function(pe){xe!==pe&&(fe&&(pe=1-pe),i.clearDepth(pe),xe=pe)},reset:function(){F=!1,$=null,Q=null,xe=null,fe=!1}}}function s(){let F=!1,fe=null,$=null,Q=null,xe=null,pe=null,Ge=null,St=null,Vt=null;return{setTest:function(ct){F||(ct?se(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(ct){fe!==ct&&!F&&(i.stencilMask(ct),fe=ct)},setFunc:function(ct,wn,Xn){($!==ct||Q!==wn||xe!==Xn)&&(i.stencilFunc(ct,wn,Xn),$=ct,Q=wn,xe=Xn)},setOp:function(ct,wn,Xn){(pe!==ct||Ge!==wn||St!==Xn)&&(i.stencilOp(ct,wn,Xn),pe=ct,Ge=wn,St=Xn)},setLocked:function(ct){F=ct},setClear:function(ct){Vt!==ct&&(i.clearStencil(ct),Vt=ct)},reset:function(){F=!1,fe=null,$=null,Q=null,xe=null,pe=null,Ge=null,St=null,Vt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,m=[],f=null,x=!1,g=null,p=null,y=null,M=null,v=null,E=null,T=null,A=new Te(0,0,0),C=0,_=!1,b=null,L=null,H=null,I=null,U=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,q=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(O)[1]),D=q>=1):O.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),D=q>=2);let te=null,ne={},oe=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),ce=new it().fromArray(oe),G=new it().fromArray(he);function J(F,fe,$,Q){let xe=new Uint8Array(4),pe=i.createTexture();i.bindTexture(F,pe),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<$;Ge++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(fe+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return pe}let Y={};Y[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(Gs),Ke(!1),Fe(Yh),se(i.CULL_FACE),k(Ei);function se(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function ae(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function ue(F,fe){return h[F]!==fe?(i.bindFramebuffer(F,fe),h[F]=fe,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=fe),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function ge(F,fe){let $=m,Q=!1;if(F){$=d.get(fe),$===void 0&&($=[],d.set(fe,$));let xe=F.textures;if($.length!==xe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Ge=xe.length;pe<Ge;pe++)$[pe]=i.COLOR_ATTACHMENT0+pe;$.length=xe.length,Q=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Q=!0);Q&&i.drawBuffers($)}function He(F){return f!==F?(i.useProgram(F),f=F,!0):!1}let Ve={[Ji]:i.FUNC_ADD,[Ym]:i.FUNC_SUBTRACT,[$m]:i.FUNC_REVERSE_SUBTRACT};Ve[Km]=i.MIN,Ve[Zm]=i.MAX;let je={[Jm]:i.ZERO,[jm]:i.ONE,[Qm]:i.SRC_COLOR,[Gc]:i.SRC_ALPHA,[rg]:i.SRC_ALPHA_SATURATE,[ig]:i.DST_COLOR,[tg]:i.DST_ALPHA,[eg]:i.ONE_MINUS_SRC_COLOR,[Wc]:i.ONE_MINUS_SRC_ALPHA,[sg]:i.ONE_MINUS_DST_COLOR,[ng]:i.ONE_MINUS_DST_ALPHA,[ag]:i.CONSTANT_COLOR,[og]:i.ONE_MINUS_CONSTANT_COLOR,[cg]:i.CONSTANT_ALPHA,[lg]:i.ONE_MINUS_CONSTANT_ALPHA};function k(F,fe,$,Q,xe,pe,Ge,St,Vt,ct){if(F===Ei){x===!0&&(ae(i.BLEND),x=!1);return}if(x===!1&&(se(i.BLEND),x=!0),F!==qm){if(F!==g||ct!==_){if((p!==Ji||v!==Ji)&&(i.blendEquation(i.FUNC_ADD),p=Ji,v=Ji),ct)switch(F){case Pn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFunc(i.ONE,i.ONE);break;case $h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Pn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,M=null,E=null,T=null,A.set(0,0,0),C=0,g=F,_=ct}return}xe=xe||fe,pe=pe||$,Ge=Ge||Q,(fe!==p||xe!==v)&&(i.blendEquationSeparate(Ve[fe],Ve[xe]),p=fe,v=xe),($!==y||Q!==M||pe!==E||Ge!==T)&&(i.blendFuncSeparate(je[$],je[Q],je[pe],je[Ge]),y=$,M=Q,E=pe,T=Ge),(St.equals(A)===!1||Vt!==C)&&(i.blendColor(St.r,St.g,St.b,Vt),A.copy(St),C=Vt),g=F,_=!1}function Ht(F,fe){F.side===Et?ae(i.CULL_FACE):se(i.CULL_FACE);let $=F.side===Xt;fe&&($=!$),Ke($),F.blending===Pn&&F.transparent===!1?k(Ei):k(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let Q=F.stencilWrite;o.setTest(Q),Q&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ut(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(F){b!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),b=F)}function Fe(F){F!==Wm?(se(i.CULL_FACE),F!==L&&(F===Yh?i.cullFace(i.BACK):F===Xm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),L=F}function Re(F){F!==H&&(D&&i.lineWidth(F),H=F)}function ut(F,fe,$){F?(se(i.POLYGON_OFFSET_FILL),(I!==fe||U!==$)&&(i.polygonOffset(fe,$),I=fe,U=$)):ae(i.POLYGON_OFFSET_FILL)}function Pe(F){F?se(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function R(F){F===void 0&&(F=i.TEXTURE0+N-1),te!==F&&(i.activeTexture(F),te=F)}function S(F,fe,$){$===void 0&&(te===null?$=i.TEXTURE0+N-1:$=te);let Q=ne[$];Q===void 0&&(Q={type:void 0,texture:void 0},ne[$]=Q),(Q.type!==F||Q.texture!==fe)&&(te!==$&&(i.activeTexture($),te=$),i.bindTexture(F,fe||Y[F]),Q.type=F,Q.texture=fe)}function V(){let F=ne[te];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(F){ce.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ce.copy(F))}function ve(F){G.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),G.copy(F))}function Qe(F,fe){let $=l.get(fe);$===void 0&&($=new WeakMap,l.set(fe,$));let Q=$.get(F);Q===void 0&&(Q=i.getUniformBlockIndex(fe,F.name),$.set(F,Q))}function qe(F,fe){let Q=l.get(fe).get(F);c.get(fe)!==Q&&(i.uniformBlockBinding(fe,Q,F.__bindingPointIndex),c.set(fe,Q))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},te=null,ne={},h={},d=new WeakMap,m=[],f=null,x=!1,g=null,p=null,y=null,M=null,v=null,E=null,T=null,A=new Te(0,0,0),C=0,_=!1,b=null,L=null,H=null,I=null,U=null,ce.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:ae,bindFramebuffer:ue,drawBuffers:ge,useProgram:He,setBlending:k,setMaterial:Ht,setFlipSided:Ke,setCullFace:Fe,setLineWidth:Re,setPolygonOffset:ut,setScissorTest:Pe,activeTexture:R,bindTexture:S,unbindTexture:V,compressedTexImage2D:j,compressedTexImage3D:ee,texImage2D:ye,texImage3D:ke,updateUBOMapping:Qe,uniformBlockBinding:qe,texStorage2D:Ne,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:Me,compressedTexSubImage2D:de,compressedTexSubImage3D:K,scissor:Oe,viewport:ve,reset:pt}}function Gd(i,e,t,n){let s=kv(n);switch(t){case xf:return i*e;case yf:return i*e;case vf:return i*e*2;case lu:return i*e/s.components*s.byteLength;case uu:return i*e/s.components*s.byteLength;case Mf:return i*e*2/s.components*s.byteLength;case hu:return i*e*2/s.components*s.byteLength;case _f:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case du:return i*e*4/s.components*s.byteLength;case Ya:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:case il:return Math.max(i,16)*Math.max(e,8)/4;case el:case nl:return Math.max(i,8)*Math.max(e,8)/2;case sl:case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ja:case Ml:case bl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bf:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wl:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kv(i){switch(i){case si:case pf:return{byteLength:1,components:1};case qr:case mf:case ea:return{byteLength:2,components:1};case ou:case cu:return{byteLength:2,components:4};case ts:case au:case In:return{byteLength:4,components:1};case gf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ov(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ce,u=new WeakMap,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(R,S){return m?new OffscreenCanvas(R,S):Yr("canvas")}function x(R,S,V){let j=1,ee=Pe(R);if((ee.width>V||ee.height>V)&&(j=V/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let Z=Math.floor(j*ee.width),Me=Math.floor(j*ee.height);h===void 0&&(h=f(Z,Me));let de=S?f(Z,Me):h;return de.width=Z,de.height=Me,de.getContext("2d").drawImage(R,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+Me+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,S,V,j,ee=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=S;if(S===i.RED&&(V===i.FLOAT&&(Z=i.R32F),V===i.HALF_FLOAT&&(Z=i.R16F),V===i.UNSIGNED_BYTE&&(Z=i.R8)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.R8UI),V===i.UNSIGNED_SHORT&&(Z=i.R16UI),V===i.UNSIGNED_INT&&(Z=i.R32UI),V===i.BYTE&&(Z=i.R8I),V===i.SHORT&&(Z=i.R16I),V===i.INT&&(Z=i.R32I)),S===i.RG&&(V===i.FLOAT&&(Z=i.RG32F),V===i.HALF_FLOAT&&(Z=i.RG16F),V===i.UNSIGNED_BYTE&&(Z=i.RG8)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RG8UI),V===i.UNSIGNED_SHORT&&(Z=i.RG16UI),V===i.UNSIGNED_INT&&(Z=i.RG32UI),V===i.BYTE&&(Z=i.RG8I),V===i.SHORT&&(Z=i.RG16I),V===i.INT&&(Z=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),V===i.UNSIGNED_INT&&(Z=i.RGB32UI),V===i.BYTE&&(Z=i.RGB8I),V===i.SHORT&&(Z=i.RGB16I),V===i.INT&&(Z=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),V===i.UNSIGNED_INT&&(Z=i.RGBA32UI),V===i.BYTE&&(Z=i.RGBA8I),V===i.SHORT&&(Z=i.RGBA16I),V===i.INT&&(Z=i.RGBA32I)),S===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),S===i.RGBA){let Me=ee?Lo:Je.getTransfer(j);V===i.FLOAT&&(Z=i.RGBA32F),V===i.HALF_FLOAT&&(Z=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Z=Me===ht?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(R,S){let V;return R?S===null||S===ts||S===qs?V=i.DEPTH24_STENCIL8:S===In?V=i.DEPTH32F_STENCIL8:S===qr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ts||S===qs?V=i.DEPTH_COMPONENT24:S===In?V=i.DEPTH_COMPONENT32F:S===qr&&(V=i.DEPTH_COMPONENT16),V}function E(R,S){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ut&&R.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){let S=R.target;S.removeEventListener("dispose",T),C(S),S.isVideoTexture&&u.delete(S)}function A(R){let S=R.target;S.removeEventListener("dispose",A),b(S)}function C(R){let S=n.get(R);if(S.__webglInit===void 0)return;let V=R.source,j=d.get(V);if(j){let ee=j[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&_(R),Object.keys(j).length===0&&d.delete(V)}n.remove(R)}function _(R){let S=n.get(R);i.deleteTexture(S.__webglTexture);let V=R.source,j=d.get(V);delete j[S.__cacheKey],a.memory.textures--}function b(R){let S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let ee=0;ee<S.__webglFramebuffer[j].length;ee++)i.deleteFramebuffer(S.__webglFramebuffer[j][ee]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=R.textures;for(let j=0,ee=V.length;j<ee;j++){let Z=n.get(V[j]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(V[j])}n.remove(R)}let L=0;function H(){L=0}function I(){let R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function U(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function N(R,S){let V=n.get(R);if(R.isVideoTexture&&Re(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){let j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(V,R,S);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function D(R,S){let V=n.get(R);if(R.version>0&&V.__version!==R.version){G(V,R,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function q(R,S){let V=n.get(R);if(R.version>0&&V.__version!==R.version){G(V,R,S);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function O(R,S){let V=n.get(R);if(R.version>0&&V.__version!==R.version){J(V,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}let te={[Qi]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[es]:i.MIRRORED_REPEAT},ne={[Ut]:i.NEAREST,[ru]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Vr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},oe={[Tg]:i.NEVER,[Pg]:i.ALWAYS,[Eg]:i.LESS,[wf]:i.LEQUAL,[Ag]:i.EQUAL,[Ig]:i.GEQUAL,[Rg]:i.GREATER,[Cg]:i.NOTEQUAL};function he(R,S){if(S.type===In&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===Vr||S.magFilter===ks||S.magFilter===Hn||S.minFilter===nn||S.minFilter===Vr||S.minFilter===ks||S.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,te[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,te[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,te[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ne[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ne[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ut||S.minFilter!==ks&&S.minFilter!==Hn||S.type===In&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ce(R,S){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));let j=S.source,ee=d.get(j);ee===void 0&&(ee={},d.set(j,ee));let Z=U(S);if(Z!==R.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ee[Z].usedTimes++;let Me=ee[R.__cacheKey];Me!==void 0&&(ee[R.__cacheKey].usedTimes--,Me.usedTimes===0&&_(S)),R.__cacheKey=Z,R.__webglTexture=ee[Z].texture}return V}function G(R,S,V){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);let ee=ce(R,S),Z=S.source;t.bindTexture(j,R.__webglTexture,i.TEXTURE0+V);let Me=n.get(Z);if(Z.version!==Me.__version||ee===!0){t.activeTexture(i.TEXTURE0+V);let de=Je.getPrimaries(Je.workingColorSpace),K=S.colorSpace===Si?null:Je.getPrimaries(S.colorSpace),Ne=S.colorSpace===Si||de===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ie=x(S.image,!1,s.maxTextureSize);ie=ut(S,ie);let ye=r.convert(S.format,S.colorSpace),ke=r.convert(S.type),Oe=M(S.internalFormat,ye,ke,S.colorSpace,S.isVideoTexture);he(j,S);let ve,Qe=S.mipmaps,qe=S.isVideoTexture!==!0,pt=Me.__version===void 0||ee===!0,F=Z.dataReady,fe=E(S,ie);if(S.isDepthTexture)Oe=v(S.format===Ys,S.type),pt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Oe,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Oe,ie.width,ie.height,0,ye,ke,null));else if(S.isDataTexture)if(Qe.length>0){qe&&pt&&t.texStorage2D(i.TEXTURE_2D,fe,Oe,Qe[0].width,Qe[0].height);for(let $=0,Q=Qe.length;$<Q;$++)ve=Qe[$],qe?F&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ve.width,ve.height,ye,ke,ve.data):t.texImage2D(i.TEXTURE_2D,$,Oe,ve.width,ve.height,0,ye,ke,ve.data);S.generateMipmaps=!1}else qe?(pt&&t.texStorage2D(i.TEXTURE_2D,fe,Oe,ie.width,ie.height),F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,ye,ke,ie.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,ie.width,ie.height,0,ye,ke,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Oe,Qe[0].width,Qe[0].height,ie.depth);for(let $=0,Q=Qe.length;$<Q;$++)if(ve=Qe[$],S.format!==xn)if(ye!==null)if(qe){if(F)if(S.layerUpdates.size>0){let xe=Gd(ve.width,ve.height,S.format,S.type);for(let pe of S.layerUpdates){let Ge=ve.data.subarray(pe*xe/ve.data.BYTES_PER_ELEMENT,(pe+1)*xe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,pe,ve.width,ve.height,1,ye,Ge)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,ie.depth,ye,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Oe,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,ie.depth,ye,ke,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Oe,ve.width,ve.height,ie.depth,0,ye,ke,ve.data)}else{qe&&pt&&t.texStorage2D(i.TEXTURE_2D,fe,Oe,Qe[0].width,Qe[0].height);for(let $=0,Q=Qe.length;$<Q;$++)ve=Qe[$],S.format!==xn?ye!==null?qe?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Oe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?F&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ve.width,ve.height,ye,ke,ve.data):t.texImage2D(i.TEXTURE_2D,$,Oe,ve.width,ve.height,0,ye,ke,ve.data)}else if(S.isDataArrayTexture)if(qe){if(pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Oe,ie.width,ie.height,ie.depth),F)if(S.layerUpdates.size>0){let $=Gd(ie.width,ie.height,S.format,S.type);for(let Q of S.layerUpdates){let xe=ie.data.subarray(Q*$/ie.data.BYTES_PER_ELEMENT,(Q+1)*$/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,ye,ke,xe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,ke,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,ie.width,ie.height,ie.depth,0,ye,ke,ie.data);else if(S.isData3DTexture)qe?(pt&&t.texStorage3D(i.TEXTURE_3D,fe,Oe,ie.width,ie.height,ie.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,ke,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,ie.width,ie.height,ie.depth,0,ye,ke,ie.data);else if(S.isFramebufferTexture){if(pt)if(qe)t.texStorage2D(i.TEXTURE_2D,fe,Oe,ie.width,ie.height);else{let $=ie.width,Q=ie.height;for(let xe=0;xe<fe;xe++)t.texImage2D(i.TEXTURE_2D,xe,Oe,$,Q,0,ye,ke,null),$>>=1,Q>>=1}}else if(Qe.length>0){if(qe&&pt){let $=Pe(Qe[0]);t.texStorage2D(i.TEXTURE_2D,fe,Oe,$.width,$.height)}for(let $=0,Q=Qe.length;$<Q;$++)ve=Qe[$],qe?F&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ye,ke,ve):t.texImage2D(i.TEXTURE_2D,$,Oe,ye,ke,ve);S.generateMipmaps=!1}else if(qe){if(pt){let $=Pe(ie);t.texStorage2D(i.TEXTURE_2D,fe,Oe,$.width,$.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,ke,ie)}else t.texImage2D(i.TEXTURE_2D,0,Oe,ye,ke,ie);g(S)&&p(j),Me.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function J(R,S,V){if(S.image.length!==6)return;let j=ce(R,S),ee=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);let Z=n.get(ee);if(ee.version!==Z.__version||j===!0){t.activeTexture(i.TEXTURE0+V);let Me=Je.getPrimaries(Je.workingColorSpace),de=S.colorSpace===Si?null:Je.getPrimaries(S.colorSpace),K=S.colorSpace===Si||Me===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let Ne=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let Q=0;Q<6;Q++)!Ne&&!ie?ye[Q]=x(S.image[Q],!0,s.maxCubemapSize):ye[Q]=ie?S.image[Q].image:S.image[Q],ye[Q]=ut(S,ye[Q]);let ke=ye[0],Oe=r.convert(S.format,S.colorSpace),ve=r.convert(S.type),Qe=M(S.internalFormat,Oe,ve,S.colorSpace),qe=S.isVideoTexture!==!0,pt=Z.__version===void 0||j===!0,F=ee.dataReady,fe=E(S,ke);he(i.TEXTURE_CUBE_MAP,S);let $;if(Ne){qe&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Qe,ke.width,ke.height);for(let Q=0;Q<6;Q++){$=ye[Q].mipmaps;for(let xe=0;xe<$.length;xe++){let pe=$[xe];S.format!==xn?Oe!==null?qe?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,pe.width,pe.height,Oe,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,Qe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,pe.width,pe.height,Oe,ve,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,Qe,pe.width,pe.height,0,Oe,ve,pe.data)}}}else{if($=S.mipmaps,qe&&pt){$.length>0&&fe++;let Q=Pe(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){qe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ye[Q].width,ye[Q].height,Oe,ve,ye[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Qe,ye[Q].width,ye[Q].height,0,Oe,ve,ye[Q].data);for(let xe=0;xe<$.length;xe++){let Ge=$[xe].image[Q].image;qe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,Ge.width,Ge.height,Oe,ve,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,Qe,Ge.width,Ge.height,0,Oe,ve,Ge.data)}}else{qe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Oe,ve,ye[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Qe,Oe,ve,ye[Q]);for(let xe=0;xe<$.length;xe++){let pe=$[xe];qe?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,Oe,ve,pe.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,Qe,Oe,ve,pe.image[Q])}}}g(S)&&p(i.TEXTURE_CUBE_MAP),Z.__version=ee.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Y(R,S,V,j,ee,Z){let Me=r.convert(V.format,V.colorSpace),de=r.convert(V.type),K=M(V.internalFormat,Me,de,V.colorSpace),Ne=n.get(S),ie=n.get(V);if(ie.__renderTarget=S,!Ne.__hasExternalTextures){let ye=Math.max(1,S.width>>Z),ke=Math.max(1,S.height>>Z);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,K,ye,ke,S.depth,0,Me,de,null):t.texImage2D(ee,Z,K,ye,ke,0,Me,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ee,ie.__webglTexture,0,Ke(S)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ee,ie.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(R,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){let j=S.depthTexture,ee=j&&j.isDepthTexture?j.type:null,Z=v(S.stencilBuffer,ee),Me=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=Ke(S);Fe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,Z,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,R)}else{let j=S.textures;for(let ee=0;ee<j.length;ee++){let Z=j[ee],Me=r.convert(Z.format,Z.colorSpace),de=r.convert(Z.type),K=M(Z.internalFormat,Me,de,Z.colorSpace),Ne=Ke(S);V&&Fe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,K,S.width,S.height):Fe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,K,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,K,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);let ee=j.__webglTexture,Z=Ke(S);if(S.depthTexture.format===zs)Fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(S.depthTexture.format===Ys)Fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ue(R){let S=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let j=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){let ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=j}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ae(S.__webglFramebuffer,R)}else if(V){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),se(S.__webglDepthbuffer[j],R,!1);else{let ee=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),se(S.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(R,S,V){let j=n.get(R);S!==void 0&&Y(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ue(R)}function He(R){let S=R.texture,V=n.get(R),j=n.get(S);R.addEventListener("dispose",A);let ee=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,a.memory.textures++),Z){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let K=0;K<S.mipmaps.length;K++)V.__webglFramebuffer[de][K]=i.createFramebuffer()}else V.__webglFramebuffer[de]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<S.mipmaps.length;de++)V.__webglFramebuffer[de]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Me)for(let de=0,K=ee.length;de<K;de++){let Ne=n.get(ee[de]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Fe(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){let K=ee[de];V.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[de]);let Ne=r.convert(K.format,K.colorSpace),ie=r.convert(K.type),ye=M(K.internalFormat,Ne,ie,K.colorSpace,R.isXRRenderTarget===!0),ke=Ke(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,ye,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,V.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),se(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),he(i.TEXTURE_CUBE_MAP,S);for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)Y(V.__webglFramebuffer[de][K],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,K);else Y(V.__webglFramebuffer[de],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let de=0,K=ee.length;de<K;de++){let Ne=ee[de],ie=n.get(Ne);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),he(i.TEXTURE_2D,Ne),Y(V.__webglFramebuffer,R,Ne,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),g(Ne)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,j.__webglTexture),he(de,S),S.mipmaps&&S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)Y(V.__webglFramebuffer[K],R,S,i.COLOR_ATTACHMENT0,de,K);else Y(V.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,de,0);g(S)&&p(de),t.unbindTexture()}R.depthBuffer&&ue(R)}function Ve(R){let S=R.textures;for(let V=0,j=S.length;V<j;V++){let ee=S[V];if(g(ee)){let Z=y(R),Me=n.get(ee).__webglTexture;t.bindTexture(Z,Me),p(Z),t.unbindTexture()}}}let je=[],k=[];function Ht(R){if(R.samples>0){if(Fe(R)===!1){let S=R.textures,V=R.width,j=R.height,ee=i.COLOR_BUFFER_BIT,Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(R),de=S.length>1;if(de)for(let K=0;K<S.length;K++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let K=0;K<S.length;K++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[K]);let Ne=n.get(S[K]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,V,j,0,0,V,j,ee,i.NEAREST),c===!0&&(je.length=0,k.length=0,je.push(i.COLOR_ATTACHMENT0+K),R.depthBuffer&&R.resolveDepthBuffer===!1&&(je.push(Z),k.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let K=0;K<S.length;K++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,Me.__webglColorRenderbuffer[K]);let Ne=n.get(S[K]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ke(R){return Math.min(s.maxSamples,R.samples)}function Fe(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Re(R){let S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function ut(R,S){let V=R.colorSpace,j=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==qt&&V!==Si&&(Je.getTransfer(V)===ht?(j!==xn||ee!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Pe(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=H,this.setTexture2D=N,this.setTexture2DArray=D,this.setTexture3D=q,this.setTextureCube=O,this.rebindTextures=ge,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Fe}function Fv(i,e){function t(n,s=Si){let r,a=Je.getTransfer(s);if(n===si)return i.UNSIGNED_BYTE;if(n===ou)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pf)return i.BYTE;if(n===mf)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===au)return i.INT;if(n===ts)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===ea)return i.HALF_FLOAT;if(n===xf)return i.ALPHA;if(n===_f)return i.RGB;if(n===xn)return i.RGBA;if(n===yf)return i.LUMINANCE;if(n===vf)return i.LUMINANCE_ALPHA;if(n===zs)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===lu)return i.RED;if(n===uu)return i.RED_INTEGER;if(n===Mf)return i.RG;if(n===hu)return i.RG_INTEGER;if(n===du)return i.RGBA_INTEGER;if(n===Ya||n===$a||n===Ka||n===Za)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===rl||n===al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sl||n===rl)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===al)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ol||n===cl||n===ll||n===ul||n===hl||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ul)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ja||n===Ml||n===bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ja)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bf||n===Sl||n===wl||n===Tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var zl=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},st=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bv={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,f=.005;l.inputState.pinching&&d>m+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hv=`
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

}`,Hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new It,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zt({vertexShader:zv,fragmentShader:Hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new Dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vl=class extends ri{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,f=null,x=new Hl,g=t.getContextAttributes(),p=null,y=null,M=[],v=[],E=new Ce,T=null,A=new Pt;A.viewport=new it;let C=new Pt;C.viewport=new it;let _=[A,C],b=new zl,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=M[G];return J===void 0&&(J=new Xr,M[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=M[G];return J===void 0&&(J=new Xr,M[G]=J),J.getGripSpace()},this.getHand=function(G){let J=M[G];return J===void 0&&(J=new Xr,M[G]=J),J.getHandSpace()};function I(G){let J=v.indexOf(G.inputSource);if(J===-1)return;let Y=M[J];Y!==void 0&&(Y.update(G.inputSource,G.frame,l||a),Y.dispatchEvent({type:G.type,data:G.inputSource}))}function U(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",N);for(let G=0;G<M.length;G++){let J=v[G];J!==null&&(v[G]=null,M[G].disconnect(J))}L=null,H=null,x.reset(),e.setRenderTarget(p),m=null,d=null,h=null,s=null,y=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",U),s.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0){let J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new ai(m.framebufferWidth,m.framebufferHeight,{format:xn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,Y=null,se=null;g.depth&&(se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?Ys:zs,Y=g.stencil?qs:ts);let ae={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ae),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ai(d.textureWidth,d.textureHeight,{format:xn,type:si,depthTexture:new co(d.textureWidth,d.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(G){for(let J=0;J<G.removed.length;J++){let Y=G.removed[J],se=v.indexOf(Y);se>=0&&(v[se]=null,M[se].disconnect(Y))}for(let J=0;J<G.added.length;J++){let Y=G.added[J],se=v.indexOf(Y);if(se===-1){for(let ue=0;ue<M.length;ue++)if(ue>=v.length){v.push(Y),se=ue;break}else if(v[ue]===null){v[ue]=Y,se=ue;break}if(se===-1)break}let ae=M[se];ae&&ae.connect(Y)}}let D=new P,q=new P;function O(G,J,Y){D.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(Y.matrixWorld);let se=D.distanceTo(q),ae=J.projectionMatrix.elements,ue=Y.projectionMatrix.elements,ge=ae[14]/(ae[10]-1),He=ae[14]/(ae[10]+1),Ve=(ae[9]+1)/ae[5],je=(ae[9]-1)/ae[5],k=(ae[8]-1)/ae[0],Ht=(ue[8]+1)/ue[0],Ke=ge*k,Fe=ge*Ht,Re=se/(-k+Ht),ut=Re*-k;if(J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ut),G.translateZ(Re),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ae[10]===-1)G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let Pe=ge+Re,R=He+Re,S=Ke-ut,V=Fe+(se-ut),j=Ve*He/R*Pe,ee=je*He/R*Pe;G.projectionMatrix.makePerspective(S,V,j,ee,Pe,R),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function te(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let J=G.near,Y=G.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(Y=x.depthFar)),b.near=C.near=A.near=J,b.far=C.far=A.far=Y,(L!==b.near||H!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,H=b.far),A.layers.mask=G.layers.mask|2,C.layers.mask=G.layers.mask|4,b.layers.mask=A.layers.mask|C.layers.mask;let se=G.parent,ae=b.cameras;te(b,se);for(let ue=0;ue<ae.length;ue++)te(ae[ue],se);ae.length===2?O(b,A,C):b.projectionMatrix.copy(A.projectionMatrix),ne(G,b,se)};function ne(G,J,Y){Y===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(Y.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Zs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let oe=null;function he(G,J){if(u=J.getViewerPose(l||a),f=J,u!==null){let Y=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let se=!1;Y.length!==b.cameras.length&&(b.cameras.length=0,se=!0);for(let ue=0;ue<Y.length;ue++){let ge=Y[ue],He=null;if(m!==null)He=m.getViewport(ge);else{let je=h.getViewSubImage(d,ge);He=je.viewport,ue===0&&(e.setRenderTargetTextures(y,je.colorTexture,d.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(y))}let Ve=_[ue];Ve===void 0&&(Ve=new Pt,Ve.layers.enable(ue),Ve.viewport=new it,_[ue]=Ve),Ve.matrix.fromArray(ge.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(ge.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(He.x,He.y,He.width,He.height),ue===0&&(b.matrix.copy(Ve.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),se===!0&&b.cameras.push(Ve)}let ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")){let ue=h.getDepthInformation(Y[0]);ue&&ue.isValid&&ue.texture&&x.init(e,ue,s.renderState)}}for(let Y=0;Y<M.length;Y++){let se=v[Y],ae=M[Y];se!==null&&ae!==void 0&&ae.update(se,J,l||a)}oe&&oe(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),f=null}let ce=new Cf;ce.setAnimationLoop(he),this.setAnimationLoop=function(G){oe=G},this.dispose=function(){}}},Ki=new Vn,Vv=new ze;function Gv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Rf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&m(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),f(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,y,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Xt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Xt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p),M=y.envMap,v=y.envMapRotation;M&&(g.envMap.value=M,Ki.copy(v),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),g.envMapRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(Ki)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let v=M.program;n.uniformBlockBinding(y,v)}function l(y,M){let v=s[y.id];v===void 0&&(f(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",g));let E=M.program;n.updateUBOMapping(y,E);let T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function u(y){let M=h();y.__bindingPointIndex=M;let v=i.createBuffer(),E=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,A=v.length;T<A;T++){let C=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,b=C.length;_<b;_++){let L=C[_];if(m(L,T,_,E)===!0){let H=L.__offset,I=Array.isArray(L.value)?L.value:[L.value],U=0;for(let N=0;N<I.length;N++){let D=I[N],q=x(D);typeof D=="number"||typeof D=="boolean"?(L.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,H+U,L.__data)):D.isMatrix3?(L.__data[0]=D.elements[0],L.__data[1]=D.elements[1],L.__data[2]=D.elements[2],L.__data[3]=0,L.__data[4]=D.elements[3],L.__data[5]=D.elements[4],L.__data[6]=D.elements[5],L.__data[7]=0,L.__data[8]=D.elements[6],L.__data[9]=D.elements[7],L.__data[10]=D.elements[8],L.__data[11]=0):(D.toArray(L.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,M,v,E){let T=y.value,A=M+"_"+v;if(E[A]===void 0)return typeof T=="number"||typeof T=="boolean"?E[A]=T:E[A]=T.clone(),!0;{let C=E[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return E[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function f(y){let M=y.uniforms,v=0,E=16;for(let A=0,C=M.length;A<C;A++){let _=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,L=_.length;b<L;b++){let H=_[b],I=Array.isArray(H.value)?H.value:[H.value];for(let U=0,N=I.length;U<N;U++){let D=I[U],q=x(D),O=v%E,te=O%q.boundary,ne=O+te;v+=te,ne!==0&&E-ne<q.storage&&(v+=E-ne),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=q.storage}}}let T=v%E;return T>0&&(v+=E-T),y.__size=v,y.__cache={},this}function x(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){let M=y.target;M.removeEventListener("dispose",g);let v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var lo=class{constructor(e={}){let{canvas:t=$g(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let f=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=Ai,this.toneMappingExposure=1;let v=this,E=!1,T=0,A=0,C=null,_=-1,b=null,L=new it,H=new it,I=null,U=new Te(0),N=0,D=t.width,q=t.height,O=1,te=null,ne=null,oe=new it(0,0,D,q),he=new it(0,0,D,q),ce=!1,G=new $r,J=!1,Y=!1,se=new ze,ae=new ze,ue=new P,ge=new it,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function je(){return C===null?O:1}let k=n;function Ht(w,B){return t.getContext(w,B)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${iu}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",pe,!1),k===null){let B="webgl2";if(k=Ht(B,w),k===null)throw Ht(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ke,Fe,Re,ut,Pe,R,S,V,j,ee,Z,Me,de,K,Ne,ie,ye,ke,Oe,ve,Qe,qe,pt,F;function fe(){Ke=new ay(k),Ke.init(),qe=new Fv(k,Ke),Fe=new ey(k,Ke,e,qe),Re=new Uv(k,Ke),Fe.reverseDepthBuffer&&d&&Re.buffers.depth.setReversed(!0),ut=new ly(k),Pe=new bv,R=new Ov(k,Ke,Re,Pe,Fe,qe,ut),S=new ny(v),V=new ry(v),j=new g0(k),pt=new j_(k,j),ee=new oy(k,j,ut,pt),Z=new hy(k,ee,j,ut),Oe=new uy(k,Fe,R),ie=new ty(Pe),Me=new Mv(v,S,V,Ke,Fe,pt,ie),de=new Gv(v,Pe),K=new wv,Ne=new Iv(Ke),ke=new J_(v,S,V,Re,Z,m,c),ye=new Dv(v,Z,Fe),F=new Wv(k,ut,Fe,Re),ve=new Q_(k,Ke,ut),Qe=new cy(k,Ke,ut),ut.programs=Me.programs,v.capabilities=Fe,v.extensions=Ke,v.properties=Pe,v.renderLists=K,v.shadowMap=ye,v.state=Re,v.info=ut}fe();let $=new Vl(v,k);this.xr=$,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let w=Ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(D,q,!1))},this.getSize=function(w){return w.set(D,q)},this.setSize=function(w,B,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,q=B,t.width=Math.floor(w*O),t.height=Math.floor(B*O),W===!0&&(t.style.width=w+"px",t.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(D*O,q*O).floor()},this.setDrawingBufferSize=function(w,B,W){D=w,q=B,O=W,t.width=Math.floor(w*W),t.height=Math.floor(B*W),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,B,W,X){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,B,W,X),Re.viewport(L.copy(oe).multiplyScalar(O).round())},this.getScissor=function(w){return w.copy(he)},this.setScissor=function(w,B,W,X){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,B,W,X),Re.scissor(H.copy(he).multiplyScalar(O).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(w){Re.setScissorTest(ce=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(w=!0,B=!0,W=!0){let X=0;if(w){let z=!1;if(C!==null){let re=C.texture.format;z=re===du||re===hu||re===uu}if(z){let re=C.texture.type,me=re===si||re===ts||re===qr||re===qs||re===ou||re===cu,be=ke.getClearColor(),Se=ke.getClearAlpha(),Be=be.r,We=be.g,we=be.b;me?(f[0]=Be,f[1]=We,f[2]=we,f[3]=Se,k.clearBufferuiv(k.COLOR,0,f)):(x[0]=Be,x[1]=We,x[2]=we,x[3]=Se,k.clearBufferiv(k.COLOR,0,x))}else X|=k.COLOR_BUFFER_BIT}B&&(X|=k.DEPTH_BUFFER_BIT),W&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),K.dispose(),Ne.dispose(),Pe.dispose(),S.dispose(),V.dispose(),Z.dispose(),pt.dispose(),F.dispose(),Me.dispose(),$.dispose(),$.removeEventListener("sessionstart",Bh),$.removeEventListener("sessionend",zh),Gi.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=ut.autoReset,B=ye.enabled,W=ye.autoUpdate,X=ye.needsUpdate,z=ye.type;fe(),ut.autoReset=w,ye.enabled=B,ye.autoUpdate=W,ye.needsUpdate=X,ye.type=z}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ge(w){let B=w.target;B.removeEventListener("dispose",Ge),St(B)}function St(w){Vt(w),Pe.remove(w)}function Vt(w){let B=Pe.get(w).programs;B!==void 0&&(B.forEach(function(W){Me.releaseProgram(W)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,W,X,z,re){B===null&&(B=He);let me=z.isMesh&&z.matrixWorld.determinant()<0,be=Hm(w,B,W,X,z);Re.setMaterial(X,me);let Se=W.index,Be=1;if(X.wireframe===!0){if(Se=ee.getWireframeAttribute(W),Se===void 0)return;Be=2}let We=W.drawRange,we=W.attributes.position,tt=We.start*Be,mt=(We.start+We.count)*Be;re!==null&&(tt=Math.max(tt,re.start*Be),mt=Math.min(mt,(re.start+re.count)*Be)),Se!==null?(tt=Math.max(tt,0),mt=Math.min(mt,Se.count)):we!=null&&(tt=Math.max(tt,0),mt=Math.min(mt,we.count));let xt=mt-tt;if(xt<0||xt===1/0)return;pt.setup(z,X,be,W,Se);let tn,rt=ve;if(Se!==null&&(tn=j.get(Se),rt=Qe,rt.setIndex(tn)),z.isMesh)X.wireframe===!0?(Re.setLineWidth(X.wireframeLinewidth*je()),rt.setMode(k.LINES)):rt.setMode(k.TRIANGLES);else if(z.isLine){let Ee=X.linewidth;Ee===void 0&&(Ee=1),Re.setLineWidth(Ee*je()),z.isLineSegments?rt.setMode(k.LINES):z.isLineLoop?rt.setMode(k.LINE_LOOP):rt.setMode(k.LINE_STRIP)}else z.isPoints?rt.setMode(k.POINTS):z.isSprite&&rt.setMode(k.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)rt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))rt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ee=z._multiDrawStarts,qn=z._multiDrawCounts,at=z._multiDrawCount,Tn=Se?j.get(Se).bytesPerElement:1,gs=Pe.get(X).currentProgram.getUniforms();for(let an=0;an<at;an++)gs.setValue(k,"_gl_DrawID",an),rt.render(Ee[an]/Tn,qn[an])}else if(z.isInstancedMesh)rt.renderInstances(tt,xt,z.count);else if(W.isInstancedBufferGeometry){let Ee=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,qn=Math.min(W.instanceCount,Ee);rt.renderInstances(tt,xt,qn)}else rt.render(tt,xt)};function ct(w,B,W){w.transparent===!0&&w.side===Et&&w.forceSinglePass===!1?(w.side=Xt,w.needsUpdate=!0,ga(w,B,W),w.side=_n,w.needsUpdate=!0,ga(w,B,W),w.side=Et):ga(w,B,W)}this.compile=function(w,B,W=null){W===null&&(W=w),p=Ne.get(W),p.init(B),M.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==W&&w.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let X=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let re=z.material;if(re)if(Array.isArray(re))for(let me=0;me<re.length;me++){let be=re[me];ct(be,W,z),X.add(be)}else ct(re,W,z),X.add(re)}),M.pop(),p=null,X},this.compileAsync=function(w,B,W=null){let X=this.compile(w,B,W);return new Promise(z=>{function re(){if(X.forEach(function(me){Pe.get(me).currentProgram.isReady()&&X.delete(me)}),X.size===0){z(w);return}setTimeout(re,10)}Ke.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let wn=null;function Xn(w){wn&&wn(w)}function Bh(){Gi.stop()}function zh(){Gi.start()}let Gi=new Cf;Gi.setAnimationLoop(Xn),typeof self!="undefined"&&Gi.setContext(self),this.setAnimationLoop=function(w){wn=w,$.setAnimationLoop(w),w===null?Gi.stop():Gi.start()},$.addEventListener("sessionstart",Bh),$.addEventListener("sessionend",zh),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,C),p=Ne.get(w,M.length),p.init(B),M.push(p),ae.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),G.setFromProjectionMatrix(ae),Y=this.localClippingEnabled,J=ie.init(this.clippingPlanes,Y),g=K.get(w,y.length),g.init(),y.push(g),$.enabled===!0&&$.isPresenting===!0){let re=v.xr.getDepthSensingMesh();re!==null&&lc(re,B,-1/0,v.sortObjects)}lc(w,B,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(te,ne),Ve=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ve&&ke.addToRenderList(g,w),this.info.render.frame++,J===!0&&ie.beginShadows();let W=p.state.shadowsArray;ye.render(W,w,B),J===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=g.opaque,z=g.transmissive;if(p.setupLights(),B.isArrayCamera){let re=B.cameras;if(z.length>0)for(let me=0,be=re.length;me<be;me++){let Se=re[me];Vh(X,z,w,Se)}Ve&&ke.render(w);for(let me=0,be=re.length;me<be;me++){let Se=re[me];Hh(g,w,Se,Se.viewport)}}else z.length>0&&Vh(X,z,w,B),Ve&&ke.render(w),Hh(g,w,B);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,B),pt.resetDefaultState(),_=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],J===!0&&ie.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function lc(w,B,W,X){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){X&&ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);let me=Z.update(w),be=w.material;be.visible&&g.push(w,me,be,W,ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||G.intersectsObject(w))){let me=Z.update(w),be=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ge.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),ge.copy(me.boundingSphere.center)),ge.applyMatrix4(w.matrixWorld).applyMatrix4(ae)),Array.isArray(be)){let Se=me.groups;for(let Be=0,We=Se.length;Be<We;Be++){let we=Se[Be],tt=be[we.materialIndex];tt&&tt.visible&&g.push(w,me,tt,W,ge.z,we)}}else be.visible&&g.push(w,me,be,W,ge.z,null)}}let re=w.children;for(let me=0,be=re.length;me<be;me++)lc(re[me],B,W,X)}function Hh(w,B,W,X){let z=w.opaque,re=w.transmissive,me=w.transparent;p.setupLightsView(W),J===!0&&ie.setGlobalState(v.clippingPlanes,W),X&&Re.viewport(L.copy(X)),z.length>0&&ma(z,B,W),re.length>0&&ma(re,B,W),me.length>0&&ma(me,B,W),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Vh(w,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new ai(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?ea:si,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let re=p.state.transmissionRenderTarget[X.id],me=X.viewport||L;re.setSize(me.z,me.w);let be=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(U),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear(),Ve&&ke.render(W);let Se=v.toneMapping;v.toneMapping=Ai;let Be=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),J===!0&&ie.setGlobalState(v.clippingPlanes,X),ma(w,W,X),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let we=0,tt=B.length;we<tt;we++){let mt=B[we],xt=mt.object,tn=mt.geometry,rt=mt.material,Ee=mt.group;if(rt.side===Et&&xt.layers.test(X.layers)){let qn=rt.side;rt.side=Xt,rt.needsUpdate=!0,Gh(xt,W,X,tn,rt,Ee),rt.side=qn,rt.needsUpdate=!0,We=!0}}We===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}v.setRenderTarget(be),v.setClearColor(U,N),Be!==void 0&&(X.viewport=Be),v.toneMapping=Se}function ma(w,B,W){let X=B.isScene===!0?B.overrideMaterial:null;for(let z=0,re=w.length;z<re;z++){let me=w[z],be=me.object,Se=me.geometry,Be=X===null?me.material:X,We=me.group;be.layers.test(W.layers)&&Gh(be,B,W,Se,Be,We)}}function Gh(w,B,W,X,z,re){w.onBeforeRender(v,B,W,X,z,re),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(v,B,W,X,w,re),z.transparent===!0&&z.side===Et&&z.forceSinglePass===!1?(z.side=Xt,z.needsUpdate=!0,v.renderBufferDirect(W,B,X,z,w,re),z.side=_n,z.needsUpdate=!0,v.renderBufferDirect(W,B,X,z,w,re),z.side=Et):v.renderBufferDirect(W,B,X,z,w,re),w.onAfterRender(v,B,W,X,z,re)}function ga(w,B,W){B.isScene!==!0&&(B=He);let X=Pe.get(w),z=p.state.lights,re=p.state.shadowsArray,me=z.state.version,be=Me.getParameters(w,z.state,re,B,W),Se=Me.getProgramCacheKey(be),Be=X.programs;X.environment=w.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(w.isMeshStandardMaterial?V:S).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",Ge),Be=new Map,X.programs=Be);let We=Be.get(Se);if(We!==void 0){if(X.currentProgram===We&&X.lightsStateVersion===me)return Xh(w,be),We}else be.uniforms=Me.getUniforms(w),w.onBeforeCompile(be,v),We=Me.acquireProgram(be,Se),Be.set(Se,We),X.uniforms=be.uniforms;let we=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(we.clippingPlanes=ie.uniform),Xh(w,be),X.needsLights=Gm(w),X.lightsStateVersion=me,X.needsLights&&(we.ambientLightColor.value=z.state.ambient,we.lightProbe.value=z.state.probe,we.directionalLights.value=z.state.directional,we.directionalLightShadows.value=z.state.directionalShadow,we.spotLights.value=z.state.spot,we.spotLightShadows.value=z.state.spotShadow,we.rectAreaLights.value=z.state.rectArea,we.ltc_1.value=z.state.rectAreaLTC1,we.ltc_2.value=z.state.rectAreaLTC2,we.pointLights.value=z.state.point,we.pointLightShadows.value=z.state.pointShadow,we.hemisphereLights.value=z.state.hemi,we.directionalShadowMap.value=z.state.directionalShadowMap,we.directionalShadowMatrix.value=z.state.directionalShadowMatrix,we.spotShadowMap.value=z.state.spotShadowMap,we.spotLightMatrix.value=z.state.spotLightMatrix,we.spotLightMap.value=z.state.spotLightMap,we.pointShadowMap.value=z.state.pointShadowMap,we.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=We,X.uniformsList=null,We}function Wh(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=Vs.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Xh(w,B){let W=Pe.get(w);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Hm(w,B,W,X,z){B.isScene!==!0&&(B=He),R.resetTextureUnits();let re=B.fog,me=X.isMeshStandardMaterial?B.environment:null,be=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:qt,Se=(X.isMeshStandardMaterial?V:S).get(X.envMap||me),Be=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),we=!!W.morphAttributes.position,tt=!!W.morphAttributes.normal,mt=!!W.morphAttributes.color,xt=Ai;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=v.toneMapping);let tn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rt=tn!==void 0?tn.length:0,Ee=Pe.get(X),qn=p.state.lights;if(J===!0&&(Y===!0||w!==b)){let mn=w===b&&X.id===_;ie.setState(X,w,mn)}let at=!1;X.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==qn.state.version||Ee.outputColorSpace!==be||z.isBatchedMesh&&Ee.batching===!1||!z.isBatchedMesh&&Ee.batching===!0||z.isBatchedMesh&&Ee.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ee.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ee.instancing===!1||!z.isInstancedMesh&&Ee.instancing===!0||z.isSkinnedMesh&&Ee.skinning===!1||!z.isSkinnedMesh&&Ee.skinning===!0||z.isInstancedMesh&&Ee.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ee.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ee.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ee.instancingMorph===!1&&z.morphTexture!==null||Ee.envMap!==Se||X.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==Be||Ee.vertexTangents!==We||Ee.morphTargets!==we||Ee.morphNormals!==tt||Ee.morphColors!==mt||Ee.toneMapping!==xt||Ee.morphTargetsCount!==rt)&&(at=!0):(at=!0,Ee.__version=X.version);let Tn=Ee.currentProgram;at===!0&&(Tn=ga(X,B,z));let gs=!1,an=!1,Ar=!1,_t=Tn.getUniforms(),Bn=Ee.uniforms;if(Re.useProgram(Tn.program)&&(gs=!0,an=!0,Ar=!0),X.id!==_&&(_=X.id,an=!0),gs||b!==w){Re.buffers.depth.getReversed()?(se.copy(w.projectionMatrix),Zg(se),Jg(se),_t.setValue(k,"projectionMatrix",se)):_t.setValue(k,"projectionMatrix",w.projectionMatrix),_t.setValue(k,"viewMatrix",w.matrixWorldInverse);let mi=_t.map.cameraPosition;mi!==void 0&&mi.setValue(k,ue.setFromMatrixPosition(w.matrixWorld)),Fe.logarithmicDepthBuffer&&_t.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&_t.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,an=!0,Ar=!0)}if(z.isSkinnedMesh){_t.setOptional(k,z,"bindMatrix"),_t.setOptional(k,z,"bindMatrixInverse");let mn=z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),_t.setValue(k,"boneTexture",mn.boneTexture,R))}z.isBatchedMesh&&(_t.setOptional(k,z,"batchingTexture"),_t.setValue(k,"batchingTexture",z._matricesTexture,R),_t.setOptional(k,z,"batchingIdTexture"),_t.setValue(k,"batchingIdTexture",z._indirectTexture,R),_t.setOptional(k,z,"batchingColorTexture"),z._colorsTexture!==null&&_t.setValue(k,"batchingColorTexture",z._colorsTexture,R));let Rr=W.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0)&&Oe.update(z,W,Tn),(an||Ee.receiveShadow!==z.receiveShadow)&&(Ee.receiveShadow=z.receiveShadow,_t.setValue(k,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Bn.envMap.value=Se,Bn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(Bn.envMapIntensity.value=B.environmentIntensity),an&&(_t.setValue(k,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&Vm(Bn,Ar),re&&X.fog===!0&&de.refreshFogUniforms(Bn,re),de.refreshMaterialUniforms(Bn,X,O,q,p.state.transmissionRenderTarget[w.id]),Vs.upload(k,Wh(Ee),Bn,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Vs.upload(k,Wh(Ee),Bn,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&_t.setValue(k,"center",z.center),_t.setValue(k,"modelViewMatrix",z.modelViewMatrix),_t.setValue(k,"normalMatrix",z.normalMatrix),_t.setValue(k,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let mn=X.uniformsGroups;for(let mi=0,gi=mn.length;mi<gi;mi++){let qh=mn[mi];F.update(qh,Tn),F.bind(qh,Tn)}}return Tn}function Vm(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Gm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,B,W){Pe.get(w.texture).__webglTexture=B,Pe.get(w.depthTexture).__webglTexture=W;let X=Pe.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){let W=Pe.get(w);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,W=0){C=w,T=B,A=W;let X=!0,z=null,re=!1,me=!1;if(w){let Se=Pe.get(w);if(Se.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(k.FRAMEBUFFER,null),X=!1;else if(Se.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Se.__hasExternalTextures)R.rebindTextures(w,Pe.get(w.texture).__webglTexture,Pe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let we=w.depthTexture;if(Se.__boundDepthTexture!==we){if(we!==null&&Pe.has(we)&&(w.width!==we.image.width||w.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}let Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);let We=Pe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[B])?z=We[B][W]:z=We[B],re=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?z=Pe.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?z=We[W]:z=We,L.copy(w.viewport),H.copy(w.scissor),I=w.scissorTest}else L.copy(oe).multiplyScalar(O).floor(),H.copy(he).multiplyScalar(O).floor(),I=ce;if(Re.bindFramebuffer(k.FRAMEBUFFER,z)&&X&&Re.drawBuffers(w,z),Re.viewport(L),Re.scissor(H),Re.setScissorTest(I),re){let Se=Pe.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,Se.__webglTexture,W)}else if(me){let Se=Pe.get(w.texture),Be=B||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Se.__webglTexture,W||0,Be)}_=-1},this.readRenderTargetPixels=function(w,B,W,X,z,re,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){Re.bindFramebuffer(k.FRAMEBUFFER,be);try{let Se=w.texture,Be=Se.format,We=Se.type;if(!Fe.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-X&&W>=0&&W<=w.height-z&&k.readPixels(B,W,X,z,qe.convert(Be),qe.convert(We),re)}finally{let Se=C!==null?Pe.get(C).__webglFramebuffer:null;Re.bindFramebuffer(k.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(w,B,W,X,z,re,me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){let Se=w.texture,Be=Se.format,We=Se.type;if(!Fe.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-X&&W>=0&&W<=w.height-z){Re.bindFramebuffer(k.FRAMEBUFFER,be);let we=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,we),k.bufferData(k.PIXEL_PACK_BUFFER,re.byteLength,k.STREAM_READ),k.readPixels(B,W,X,z,qe.convert(Be),qe.convert(We),0);let tt=C!==null?Pe.get(C).__webglFramebuffer:null;Re.bindFramebuffer(k.FRAMEBUFFER,tt);let mt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Kg(k,mt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,we),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,re),k.deleteBuffer(we),k.deleteSync(mt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,B=null,W=0){w.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);let X=Math.pow(2,-W),z=Math.floor(w.image.width*X),re=Math.floor(w.image.height*X),me=B!==null?B.x:0,be=B!==null?B.y:0;R.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,me,be,z,re),Re.unbindTexture()},this.copyTextureToTexture=function(w,B,W=null,X=null,z=0){w.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],B=arguments[2],z=arguments[3]||0,W=null);let re,me,be,Se,Be,We,we,tt,mt,xt=w.isCompressedTexture?w.mipmaps[z]:w.image;W!==null?(re=W.max.x-W.min.x,me=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,Se=W.min.x,Be=W.min.y,We=W.isBox3?W.min.z:0):(re=xt.width,me=xt.height,be=xt.depth||1,Se=0,Be=0,We=0),X!==null?(we=X.x,tt=X.y,mt=X.z):(we=0,tt=0,mt=0);let tn=qe.convert(B.format),rt=qe.convert(B.type),Ee;B.isData3DTexture?(R.setTexture3D(B,0),Ee=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),Ee=k.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),Ee=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let qn=k.getParameter(k.UNPACK_ROW_LENGTH),at=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Tn=k.getParameter(k.UNPACK_SKIP_PIXELS),gs=k.getParameter(k.UNPACK_SKIP_ROWS),an=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,xt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Se),k.pixelStorei(k.UNPACK_SKIP_ROWS,Be),k.pixelStorei(k.UNPACK_SKIP_IMAGES,We);let Ar=w.isDataArrayTexture||w.isData3DTexture,_t=B.isDataArrayTexture||B.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Bn=Pe.get(w),Rr=Pe.get(B),mn=Pe.get(Bn.__renderTarget),mi=Pe.get(Rr.__renderTarget);Re.bindFramebuffer(k.READ_FRAMEBUFFER,mn.__webglFramebuffer),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let gi=0;gi<be;gi++)Ar&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pe.get(w).__webglTexture,z,We+gi),w.isDepthTexture?(_t&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pe.get(B).__webglTexture,z,mt+gi),k.blitFramebuffer(Se,Be,re,me,we,tt,re,me,k.DEPTH_BUFFER_BIT,k.NEAREST)):_t?k.copyTexSubImage3D(Ee,z,we,tt,mt+gi,Se,Be,re,me):k.copyTexSubImage2D(Ee,z,we,tt,mt+gi,Se,Be,re,me);Re.bindFramebuffer(k.READ_FRAMEBUFFER,null),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else _t?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Ee,z,we,tt,mt,re,me,be,tn,rt,xt.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(Ee,z,we,tt,mt,re,me,be,tn,xt.data):k.texSubImage3D(Ee,z,we,tt,mt,re,me,be,tn,rt,xt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,z,we,tt,re,me,tn,rt,xt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,z,we,tt,xt.width,xt.height,tn,xt.data):k.texSubImage2D(k.TEXTURE_2D,z,we,tt,re,me,tn,rt,xt);k.pixelStorei(k.UNPACK_ROW_LENGTH,qn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,at),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Tn),k.pixelStorei(k.UNPACK_SKIP_ROWS,gs),k.pixelStorei(k.UNPACK_SKIP_IMAGES,an),z===0&&B.generateMipmaps&&k.generateMipmap(Ee),Re.unbindTexture()},this.copyTextureToTexture3D=function(w,B,W=null,X=null,z=0){return w.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,w=arguments[2],B=arguments[3],z=arguments[4]||0),zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,B,W,X,z)},this.initRenderTarget=function(w){Pe.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){T=0,A=0,C=null,Re.reset(),pt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var uo=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},er=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=El,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Yt=new P,ns=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},is=class extends Kt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ps,Dr=new P,Ls=new P,Ds=new P,Ns=new Ce,Nr=new Ce,Nf=new ze,Oa=new P,Ur=new P,Fa=new P,Wd=new Ce,Oc=new Ce,Xd=new Ce,tr=class extends vt{constructor(e=new is){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new er(t,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new ns(n,3,0,!1)),Ps.setAttribute("uv",new ns(n,2,3,!1))}this.geometry=Ps,this.material=e,this.center=new Ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ls.setFromMatrixScale(this.matrixWorld),Nf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-Ds.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ba(Oa.set(-.5,-.5,0),Ds,a,Ls,s,r),Ba(Ur.set(.5,-.5,0),Ds,a,Ls,s,r),Ba(Fa.set(.5,.5,0),Ds,a,Ls,s,r),Wd.set(0,0),Oc.set(1,0),Xd.set(1,1);let o=e.ray.intersectTriangle(Oa,Ur,Fa,!1,Dr);if(o===null&&(Ba(Ur.set(-.5,.5,0),Ds,a,Ls,s,r),Oc.set(0,1),o=e.ray.intersectTriangle(Oa,Fa,Ur,!1,Dr),o===null))return;let c=e.ray.origin.distanceTo(Dr);c<e.near||c>e.far||t.push({distance:c,point:Dr.clone(),uv:wi.getInterpolation(Dr,Oa,Ur,Fa,Wd,Oc,Xd,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ba(i,e,t,n,s,r){Ns.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Nr.x=r*Ns.x-s*Ns.y,Nr.y=s*Ns.x+r*Ns.y):Nr.copy(Ns),i.copy(e),i.x+=Nr.x,i.y+=Nr.y,i.applyMatrix4(Nf)}var qd=new P,Yd=new it,$d=new it,Xv=new P,Kd=new ze,za=new P,Fc=new ln,Zd=new ze,Bc=new Js,ho=class extends Le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zh,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,za),this.boundingBox.expandByPoint(za)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,za),this.boundingSphere.expandByPoint(za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fc.copy(this.boundingSphere),Fc.applyMatrix4(s),e.ray.intersectsSphere(Fc)!==!1&&(Zd.copy(s).invert(),Bc.copy(e.ray).applyMatrix4(Zd),!(this.boundingBox!==null&&Bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Yd.fromBufferAttribute(s.attributes.skinIndex,e),$d.fromBufferAttribute(s.attributes.skinWeight,e),qd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=$d.getComponent(r);if(a!==0){let o=Yd.getComponent(r);Kd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Xv.copy(qd).applyMatrix4(Kd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Kr=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},nr=class extends It{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Ut,u=Ut,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jd=new ze,qv=new ze,fo=class i{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:qv;Jd.multiplyMatrices(o,t[r]),Jd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new nr(t,e,e,xn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Kr),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},ss=class extends wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Us=new ze,jd=new ze,Ha=[],Qd=new kt,Yv=new ze,kr=new Le,Or=new ln,po=class extends Le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ss(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),Qd.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(Qd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),Or.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),e.ray.intersectsSphere(Or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),jd.multiplyMatrices(n,Us),kr.matrixWorld=jd,kr.raycast(e,Ha);for(let a=0,o=Ha.length;a<o;a++){let c=Ha[a];c.instanceId=r,c.object=this,t.push(c)}Ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new nr(new Float32Array(s*this.count),s,this.count,lu,In));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Zr=class extends Kt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},mo=new P,go=new P,ef=new ze,Fr=new Js,Va=new ln,zc=new P,tf=new P,ir=class extends vt{constructor(e=new bt,t=new Zr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)mo.fromBufferAttribute(t,s-1),go.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=mo.distanceTo(go);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(s),Va.radius+=r,e.ray.intersectsSphere(Va)===!1)return;ef.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(ef);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let m=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let x=m,g=f-1;x<g;x+=l){let p=u.getX(x),y=u.getX(x+1),M=Ga(this,e,Fr,c,p,y);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(f-1),g=u.getX(m),p=Ga(this,e,Fr,c,x,g);p&&t.push(p)}}else{let m=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=m,g=f-1;x<g;x+=l){let p=Ga(this,e,Fr,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=Ga(this,e,Fr,c,f-1,m);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ga(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(mo.fromBufferAttribute(a,s),go.fromBufferAttribute(a,r),t.distanceSqToSegment(mo,go,zc,tf)>n)return;zc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(zc);if(!(c<e.near||c>e.far))return{distance:c,point:tf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var nf=new P,sf=new P,xo=class extends ir{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)nf.fromBufferAttribute(t,s),sf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+nf.distanceTo(sf);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},_o=class extends ir{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Jr=class extends Kt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rf=new ze,Gl=new Js,Wa=new ln,Xa=new P,sr=class extends vt{constructor(e=new bt,t=new Jr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;rf.copy(s).invert(),Gl.copy(e.ray).applyMatrix4(rf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let f=d,x=m;f<x;f++){let g=l.getX(f);Xa.fromBufferAttribute(h,g),af(Xa,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let f=d,x=m;f<x;f++)Xa.fromBufferAttribute(h,f),af(Xa,f,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function af(i,e,t,n,s,r,a){let o=Gl.distanceSqToPoint(i);if(o<t){let c=new P;Gl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var yo=class extends It{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var vo=class i extends bt{constructor(e=[new Ce(0,-.5),new Ce(.5,0),new Ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ft(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,h=new P,d=new Ce,m=new P,f=new P,x=new P,g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,m.x=p*1,m.y=-g,m.z=p*0,x.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,m.x=p*1,m.y=-g,m.z=p*0,f.copy(m),m.x+=x.x,m.y+=x.y,m.z+=x.z,m.normalize(),c.push(m.x,m.y,m.z),x.copy(f)}for(let y=0;y<=t;y++){let M=n+y*u*s,v=Math.sin(M),E=Math.cos(M);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*v,h.y=e[T].y,h.z=e[T].x*E,a.push(h.x,h.y,h.z),d.x=y/t,d.y=T/(e.length-1),o.push(d.x,d.y);let A=c[3*T+0]*v,C=c[3*T+1],_=c[3*T+0]*E;l.push(A,C,_)}}for(let y=0;y<t;y++)for(let M=0;M<e.length-1;M++){let v=M+y*e.length,E=v,T=v+e.length,A=v+e.length+1,C=v+1;r.push(E,T,C),r.push(A,C,T)}this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("uv",new ot(o,2)),this.setAttribute("normal",new ot(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ri=class i extends bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new P,u=new Ce;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let m=n+h/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(o,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nn=class i extends bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],m=[],f=0,x=[],g=n/2,p=0;y(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(m,2));function y(){let v=new P,E=new P,T=0,A=(t-e)/n;for(let C=0;C<=r;C++){let _=[],b=C/r,L=b*(t-e)+e;for(let H=0;H<=s;H++){let I=H/s,U=I*c+o,N=Math.sin(U),D=Math.cos(U);E.x=L*N,E.y=-b*n+g,E.z=L*D,h.push(E.x,E.y,E.z),v.set(N,A,D).normalize(),d.push(v.x,v.y,v.z),m.push(I,1-b),_.push(f++)}x.push(_)}for(let C=0;C<s;C++)for(let _=0;_<r;_++){let b=x[_][C],L=x[_+1][C],H=x[_+1][C+1],I=x[_][C+1];(e>0||_!==0)&&(u.push(b,L,I),T+=3),(t>0||_!==r-1)&&(u.push(L,H,I),T+=3)}l.addGroup(p,T,0),p+=T}function M(v){let E=f,T=new Ce,A=new P,C=0,_=v===!0?e:t,b=v===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,g*b,0),d.push(0,b,0),m.push(.5,.5),f++;let L=f;for(let H=0;H<=s;H++){let U=H/s*c+o,N=Math.cos(U),D=Math.sin(U);A.x=_*D,A.y=g*b,A.z=_*N,h.push(A.x,A.y,A.z),d.push(0,b,0),T.x=N*.5+.5,T.y=D*.5*b+.5,m.push(T.x,T.y),f++}for(let H=0;H<s;H++){let I=E+H,U=L+H;v===!0?u.push(U,U+1,I):u.push(U+1,U,I),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mo=class i extends Nn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wl=class i extends bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let M=new P,v=new P,E=new P;for(let T=0;T<t.length;T+=3)m(t[T+0],M),m(t[T+1],v),m(t[T+2],E),c(M,v,E,y)}function c(y,M,v,E){let T=E+1,A=[];for(let C=0;C<=T;C++){A[C]=[];let _=y.clone().lerp(v,C/T),b=M.clone().lerp(v,C/T),L=T-C;for(let H=0;H<=L;H++)H===0&&C===T?A[C][H]=_:A[C][H]=_.clone().lerp(b,H/L)}for(let C=0;C<T;C++)for(let _=0;_<2*(T-C)-1;_++){let b=Math.floor(_/2);_%2===0?(d(A[C][b+1]),d(A[C+1][b]),d(A[C][b])):(d(A[C][b+1]),d(A[C+1][b+1]),d(A[C+1][b]))}}function l(y){let M=new P;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(y),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function u(){let y=new P;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let v=g(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;a.push(v,1-E)}f(),h()}function h(){for(let y=0;y<a.length;y+=6){let M=a[y+0],v=a[y+2],E=a[y+4],T=Math.max(M,v,E),A=Math.min(M,v,E);T>.9&&A<.1&&(M<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function m(y,M){let v=y*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function f(){let y=new P,M=new P,v=new P,E=new P,T=new Ce,A=new Ce,C=new Ce;for(let _=0,b=0;_<r.length;_+=9,b+=6){y.set(r[_+0],r[_+1],r[_+2]),M.set(r[_+3],r[_+4],r[_+5]),v.set(r[_+6],r[_+7],r[_+8]),T.set(a[b+0],a[b+1]),A.set(a[b+2],a[b+3]),C.set(a[b+4],a[b+5]),E.copy(y).add(M).add(v).divideScalar(3);let L=g(E);x(T,b+0,y,L),x(A,b+2,M,L),x(C,b+4,v,L)}}function x(y,M,v,E){E<0&&y.x===1&&(a[M]=y.x-1),v.x===0&&v.z===0&&(a[M]=E/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var rr=class i extends Wl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Jt=class i extends bt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],u=[],h=e,d=(t-e)/s,m=new P,f=new Ce;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*a;m.x=h*Math.cos(p),m.y=h*Math.sin(p),c.push(m.x,m.y,m.z),l.push(0,0,1),f.x=(m.x/t+1)/2,f.y=(m.y/t+1)/2,u.push(f.x,f.y)}h+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,M=y,v=y+n+1,E=y+n+2,T=y+1;o.push(M,v,T),o.push(v,E,T)}}this.setIndex(o),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ar=class i extends bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],u=new P,h=new P,d=new P;for(let m=0;m<=n;m++)for(let f=0;f<=s;f++){let x=f/s*r,g=m/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(f/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let f=1;f<=s;f++){let x=(s+1)*m+f-1,g=(s+1)*(m-1)+f-1,p=(s+1)*(m-1)+f,y=(s+1)*m+f;a.push(x,g,y),a.push(g,p,y)}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var or=class extends Kt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gu,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hn=class extends or{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var jt=class extends Kt{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Te(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gu,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function qa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $v(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Kv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function of(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Uf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ci=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xl=class extends Ci{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Os,endingEnd:Os}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fs:r=e,o=2*t-n;break;case ja:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fs:a=e,c=2*n-t;break;case ja:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,f=(n-t)/(s-t),x=f*f,g=x*f,p=-d*g+2*d*x-d*f,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*f+1,M=(-1-m)*g+(1.5+m)*x+.5*f,v=m*g-m*x;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+y*a[l+E]+M*a[c+E]+v*a[h+E];return r}},bo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}},ql=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qa(t,this.TimeBufferType),this.values=qa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qa(e.times,Array),values:qa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case uc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&$v(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===uc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let h=o*n,d=h-n,m=h+n;for(let f=0;f!==n;++f){let x=t[h+f];if(x!==t[d+f]||x!==t[m+f]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Ks;var Ii=class extends vn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=$s;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends vn{};So.prototype.ValueTypeName="color";var oi=class extends vn{};oi.prototype.ValueTypeName="number";var Yl=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)sn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ci=class extends vn{InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}};ci.prototype.ValueTypeName="quaternion";ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends vn{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=$s;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends vn{};li.prototype.ValueTypeName="vector";var cr=class{constructor(e="",t=-1,n=[],s=mu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Jv(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=Kv(c);c=of(c,1,u),l=of(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new oi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,m,f,x){if(m.length!==0){let g=[],p=[];Uf(m,g,p,f),g.length!==0&&x.push(new h(d,g,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},f;for(f=0;f<d.length;f++)if(d[f].morphTargets)for(let x=0;x<d[f].morphTargets.length;x++)m[d[f].morphTargets[x]]=-1;for(let x in m){let g=[],p=[];for(let y=0;y!==d[f].morphTargets.length;++y){let M=d[f];g.push(M.time),p.push(M.morphTarget===x?1:0)}s.push(new oi(".morphTargetInfluence["+x+"]",g,p))}c=m.length*a}else{let m=".bones["+t[h].name+"]";n(li,m+".position",d,"pos",s),n(ci,m+".quaternion",d,"rot",s),n(li,m+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Zv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oi;case"vector":case"vector2":case"vector3":case"vector4":return li;case"color":return So;case"quaternion":return ci;case"bool":case"boolean":return Ii;case"string":return Pi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Jv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Zv(i.type);if(i.times===void 0){let t=[],n=[];Uf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ti={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},$l=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let m=l[h],f=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return f}return null}}},jv=new $l,ui=class{constructor(e){this.manager=e!==void 0?e:jv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ui.DEFAULT_MATERIAL_NAME="__DEFAULT";var jn={},Kl=class extends Error{constructor(e,t){super(e),this.response=t}},jr=class extends ui{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ti.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(jn[e]!==void 0){jn[e].push({onLoad:t,onProgress:n,onError:s});return}jn[e]=[],jn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let u=jn[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=d?parseInt(d):0,f=m!==0,x=0,g=new ReadableStream({start(p){y();function y(){h.read().then(({done:M,value:v})=>{if(M)p.close();else{x+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:f,loaded:x,total:m});for(let T=0,A=u.length;T<A;T++){let C=u[T];C.onProgress&&C.onProgress(E)}p.enqueue(v),y()}},M=>{p.error(M)})}}});return new Response(g)}else throw new Kl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(f=>m.decode(f))}}}).then(l=>{Ti.add(e,l);let u=jn[e];delete jn[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{let u=jn[e];if(u===void 0)throw this.manager.itemError(e),l;delete jn[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Zl=class extends ui{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ti.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Yr("img");function c(){u(),Ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var wo=class extends ui{constructor(e){super(e)}load(e,t,n,s){let r=new It,a=new Zl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},lr=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},To=class extends lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Hc=new ze,cf=new P,lf=new P,Qr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(cf),lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lf),t.updateMatrixWorld(),Hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jl=class extends Qr{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Zs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Eo=class extends lr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Jl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},uf=new ze,Br=new P,Vc=new P,jl=class extends Qr{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Br.setFromMatrixPosition(e.matrixWorld),n.position.copy(Br),Vc.copy(n.position),Vc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vc),n.updateMatrixWorld(),s.makeTranslation(-Br.x,-Br.y,-Br.z),uf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uf)}},Ao=class extends lr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ql=class extends Qr{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ur=class extends lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Ql}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Li=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ro=class extends ui{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ti.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ti.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ti.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ti.add(e,c),r.manager.itemStart(e)}};var eu=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){sn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;sn.multiplyQuaternionsFlat(e,a,e,t,e,n),sn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},yu="\\[\\]\\.:\\/",Qv=new RegExp("["+yu+"]","g"),vu="[^"+yu+"]",eM="[^"+yu.replace("\\.","")+"]",tM=/((?:WC+[\/:])*)/.source.replace("WC",vu),nM=/(WCOD+)?/.source.replace("WCOD",eM),iM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vu),sM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vu),rM=new RegExp("^"+tM+nM+iM+sM+"$"),aM=["material","materials","bones","map"],tu=class{constructor(e,t,n){let s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qv,"")}static parseTrackName(e){let t=rM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);aM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=tu;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nu=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Os,endingEnd:Os};for(let l=0;l!==a;++l){let u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=pu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Mg:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case mu:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===vg;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===fu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Fs,s.endingEnd=Fs):(e?s.endingStart=this.zeroSlopeAtStart?Fs:Os:s.endingStart=ja,t?s.endingEnd=this.zeroSlopeAtEnd?Fs:Os:s.endingEnd=ja)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},oM=new Float32Array(1),Co=class extends ri{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let d=s[h],m=d.name,f=u[m];if(f!==void 0)++f.referenceCount,a[h]=f;else{if(f=a[h],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,c,m));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;f=new eu(ft.create(n,m,x),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,c,m),a[h]=f}o[h].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new bo(new Float32Array(2),new Float32Array(2),1,oM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?cr.findByName(s,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=mu),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let u=new nu(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?cr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:iu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=iu);function Mu(i,e){if(e===Sf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ta||e===Po){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ta)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var No=class extends ui{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Vu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Li.extractUrlBase(e);a=Li.resolveURL(l,this.path)}else a=Li.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new jr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===zf){try{a[Ze.KHR_BINARY_GLTF]=new Gu(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Zu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:a[h]=new Eu;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[h]=new Wu(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[h]=new Xu;break;case Ze.KHR_MESH_QUANTIZATION:a[h]=new qu;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function cM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Tu=class{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Te(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],qt);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ur(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ao(u),l.distance=h;break;case"spot":l=new Eo(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,hi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Eu=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return At}extendParams(e,t,n){let s=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],qt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}},Au=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Ru=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(o,o)}return Promise.all(r)}},Cu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Iu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],qt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Tt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Du=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(o[0],o[1],o[2],qt),Promise.all(r)}},Nu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Uu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(o[0],o[1],o[2],qt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Tt)),Promise.all(r)}},ku=class{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Ou=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Fu=class{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Bu=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},zu=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Hu=class{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(m){return m.buffer}):a.ready.then(function(){let m=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(m),u,h,d,s.mode,s.filter),m})})}else return null}},Vu=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Mn.TRIANGLES&&l.mode!==Mn.TRIANGLE_STRIP&&l.mode!==Mn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,m=[];for(let f of h){let x=new ze,g=new P,p=new sn,y=new P(1,1,1),M=new po(f.geometry,f.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),M.setMatrixAt(v,x.compose(g,p,y));for(let v in c)if(v==="_COLOR_0"){let E=c[v];M.instanceColor=new ss(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&f.geometry.setAttribute(v,c[v]);vt.prototype.copy.call(M,f),this.parser.assignFinalMaterial(M),m.push(M)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}},zf="glTF",ia=12,kf={JSON:1313821514,BIN:5130562},Gu=class{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ia),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ia,r=new DataView(e,ia),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===kf.JSON){let l=new Uint8Array(e,ia+a,o);this.content=n.decode(l)}else if(c===kf.BIN){let l=ia+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Wu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=$u[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=$u[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],m=dr[d.componentType];l[h]=m.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(m){for(let f in m.attributes){let x=m.attributes[f],g=c[f];g!==void 0&&(x.normalized=g)}h(m)},o,l,qt,d)})})}},Xu=class{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},qu=class{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}},Uo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,h=(n-t)/u,d=h*h,m=d*h,f=e*l,x=f-l,g=-2*m+3*d,p=m-d,y=1-g,M=p-d+h;for(let v=0;v!==o;v++){let E=a[x+v+o],T=a[x+v+c]*u,A=a[f+v+o],C=a[f+v]*u;r[v]=y*E+M*T+g*A+p*C}return r}},lM=new sn,Yu=class extends Uo{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return lM.fromArray(r).normalize().toArray(r),r}},Mn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Of={9728:Ut,9729:nn,9984:ru,9985:Vr,9986:ks,9987:Hn},Ff={33071:ti,33648:es,10497:Qi},bu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$u={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uM={CUBICSPLINE:void 0,LINEAR:Ks,STEP:$s},Su={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new or({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_n})),i.DefaultMaterial}function rs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function fM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pM(i){let e,t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wu(t.attributes):e=i.indices+":"+wu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+wu(i.targets[n]);return e}function wu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ku(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var gM=new ze,Zu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&a<98?this.textureLoader=new wo(this.options.manager):this.textureLoader=new Ro(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return rs(r,o,s),hi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Li.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=bu[s.type],o=dr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new wt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=bu[s.type],l=dr[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,m=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,f=s.normalized===!0,x,g;if(m&&m!==h){let p=Math.floor(d/m),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(y);M||(x=new l(o,p*m,s.count*m/u),M=new er(x,m/u),t.cache.add(y,M)),g=new ns(M,c,d%m/u,f)}else o===null?x=new l(s.count*c):x=new l(o,d,s.count*c),g=new wt(x,c,f);if(s.sparse!==void 0){let p=bu.SCALAR,y=dr[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new y(a[1],M,s.sparse.count*p),T=new l(a[2],v,s.sparse.count*c);o!==null&&(g=new wt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,C=E.length;A<C;A++){let _=E[A];if(g.setX(_,T[A*c]),c>=2&&g.setY(_,T[A*c+1]),c>=3&&g.setZ(_,T[A*c+2]),c>=4&&g.setW(_,T[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=f}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Of[d.magFilter]||nn,u.minFilter=Of[d.minFilter]||Hn,u.wrapS=Ff[d.wrapS]||Qi,u.wrapT=Ff[d.wrapT]||Qi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ut&&u.minFilter!==nn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,m){let f=d;t.isImageBitmapLoader===!0&&(f=function(x){let g=new It(x);g.needsUpdate=!0,d(g)}),t.load(Li.resolveURL(h,r.path),f,void 0,m)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),hi(h,a),h.userData.mimeType=a.mimeType||mM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Jr,Kt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Zr,Kt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return or}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){let h=s[Ze.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],qt),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Tt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Et);let u=r.alphaMode||Su.OPAQUE;if(u===Su.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Su.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==At&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==At&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==At){let h=r.emissiveFactor;o.emissive=new Te().setRGB(h[0],h[1],h[2],qt)}return r.emissiveTexture!==void 0&&a!==At&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(l).then(function(){let h=new a(o);return r.name&&(h.name=r.name),hi(h,r),t.associations.set(h,{materials:e}),r.extensions&&rs(s,h,r),h})}createUniqueName(e){let t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Bf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=pM(l),h=s[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Bf(new bt,l,t),s[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?hM(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let m=0,f=u.length;m<f;m++){let x=u[m],g=a[m],p,y=l[m];if(g.mode===Mn.TRIANGLES||g.mode===Mn.TRIANGLE_STRIP||g.mode===Mn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new ho(x,y):new Le(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Mn.TRIANGLE_STRIP?p.geometry=Mu(p.geometry,Po):g.mode===Mn.TRIANGLE_FAN&&(p.geometry=Mu(p.geometry,ta));else if(g.mode===Mn.LINES)p=new xo(x,y);else if(g.mode===Mn.LINE_STRIP)p=new ir(x,y);else if(g.mode===Mn.LINE_LOOP)p=new _o(x,y);else if(g.mode===Mn.POINTS)p=new sr(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&fM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),hi(p,r),g.extensions&&rs(s,p,g),t.assignFinalMaterial(p),h.push(p)}for(let m=0,f=h.length;m<f;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return r.extensions&&rs(s,h[0],r),h[0];let d=new st;r.extensions&&rs(s,d,r),t.associations.set(d,{meshes:e});for(let m=0,f=h.length;m<f;m++)d.add(h[m]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Pt(Tf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Qs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let d=new ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new fo(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let m=s.channels[h],f=s.samplers[m.sampler],x=m.target,g=x.node,p=s.parameters!==void 0?s.parameters[f.input]:f.input,y=s.parameters!==void 0?s.parameters[f.output]:f.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(f),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],m=h[1],f=h[2],x=h[3],g=h[4],p=[];for(let y=0,M=d.length;y<M;y++){let v=d[y],E=m[y],T=f[y],A=x[y],C=g[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let _=n._createAnimationTracks(v,E,T,A,C);if(_)for(let b=0;b<_.length;b++)p.push(_[b])}return new cr(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(d,gM)});for(let m=0,f=h.length;m<f;m++)u.add(h[m]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new Kr:l.length>1?u=new st:l.length===1?u=l[0]:u=new vt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),hi(u,r),r.extensions&&rs(n,u,r),r.matrix!==void 0){let h=new ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new st;n.name&&(r.name=s.createUniqueName(n.name)),hi(r,n),n.extensions&&rs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[d,m]of s.associations)(d instanceof Kt||d instanceof It)&&h.set(d,m);return u.traverse(d=>{let m=s.associations.get(d);m!=null&&h.set(d,m)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];Di[r.path]===Di.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Di[r.path]){case Di.weights:l=oi;break;case Di.rotation:l=ci;break;case Di.position:case Di.scale:l=li;break;default:switch(n.itemSize){case 1:l=oi;break;case 2:case 3:default:l=li;break}break}let u=s.interpolation!==void 0?uM[s.interpolation]:Ks,h=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){let f=new l(c[d]+"."+Di[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),a.push(f)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ku(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ci?Yu:Uo;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function xM(i,e,t){let n=e.attributes,s=new kt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let u=Ku(dr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,c=new P;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],m=d.min,f=d.max;if(m!==void 0&&f!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(f[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(f[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(f[2]))),d.normalized){let x=Ku(dr[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new ln;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Bf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=$u[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Je.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),hi(i,e),xM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?dM(i,e.targets,t):i})}var Ju={_about:"Hero moves. Times in frames at 60 Hz (startup = frames before the hit, active = frames the hit can land, recovery = frames after). reach in metres, arc in radians. balance = Balance points added on hit. All numbers are first guesses until people play.",light1:{role:"string",startup:5,active:3,recovery:13,next:"light2",nextFrom:7,cancel:7,dmg:6,balance:3,reach:1.9,arc:1.7,lunge:.35,stop:3,clip:"attack",sfx:"light"},light2:{role:"string",startup:5,active:3,recovery:14,next:"light3",nextFrom:7,cancel:7,dmg:7,balance:3.5,reach:1.9,arc:1.7,lunge:.35,stop:3,clip:"slash2",sfx:"light"},light3:{role:"string",startup:8,active:4,recovery:20,cancel:11,dmg:10,balance:5,reach:2,arc:1.9,lunge:.6,stop:5,clip:"slash3",sfx:"heavy"},sunder:{role:"opener",cd:2.4,startup:9,active:4,recovery:16,cancel:13,dmg:9,balance:4,apply:{cracked:1},reach:2.1,arc:1.5,lunge:.8,stop:5,clip:"sunder",sfx:"sunder"},tether:{role:"linker",cd:3,startup:7,active:6,recovery:14,cancel:13,dmg:4,balance:6,apply:{bound:1},reach:6.5,arc:.6,lunge:0,stop:4,clip:"tether",sfx:"tether"},breaker:{role:"ender",cd:4,startup:16,active:5,recovery:24,cancel:21,dmg:14,balance:8,consume:{cracked:{dmg:8,balance:16},bound:{dmg:4,balance:12}},reach:2.4,arc:1.9,lunge:.5,stop:7,stopPerStatus:2,clip:"breaker",sfx:"breaker"},giantfall:{role:"finisher",startup:18,active:6,recovery:30,dmg:40,perComboHit:3,reach:3.2,arc:3.2,lunge:1.2,stop:18,slow:[.5,.35],clip:"giantfall",sfx:"giantfall"},counter:{role:"counter",startup:7,active:4,recovery:16,cancel:11,dmg:24,balance:18,reach:2.6,arc:2.2,lunge:5,stop:9,clip:"slash3",sfx:"heavy",_note:"only after a perfect roll (rules.counter): the hero leaps up to lunge metres at the giant and is safe until the blow lands"},dodge:{clip:"roll",frames:17,iframes:20,perfect:11,dist:3,cd:.45,cancelFrom:12},_cancel:"What a move can be cut into. 'hit' = only after it landed and from its cancel frame; 'recovery' = from the first recovery frame even on a miss; 'hitOrRecovery' = either; 'any' = at any frame (light hits never trap you); 'always' = from nextFrom, hit or miss.",cancelRules:{string:{next:"always",skill:"hit",dodge:"any"},opener:{light:"hit",skill:"hit",dodge:"hitOrRecovery"},linker:{light:"hit",skill:"hit",dodge:"hitOrRecovery"},ender:{light:"hit",skill:"hit",dodge:"recovery"},counter:{light:"hit",skill:"hit",dodge:"hitOrRecovery"},finisher:{dodge:"recovery"}}};var ju={_about:"Rules shared by every fight. Seconds unless the name says frames. First guesses until people play; sources in design/NUMBERS.md.",arena:{radius:8.2},hero:{hp:100,speed:5.2,radius:.45,hurtIframes:.6,hurtLock:.25,hurtPush:1.2,moveInMove:.12,aimAssist:3},input:{buffer:.15},combo:{window:2,cap:20,variety:[1,1,1.3,1.6],repeat:.6},balance:{idle:1.5,drain:20,drainFloor:.35},topple:{time:4,dmgMul:2,grow:1.2,getup:.9,afterFinisher:.6,quake:{r:2.4,dmg:60},fallWindow:1.4},status:{cracked:{max:2,time:6,balanceGainPerStack:.25},bound:{max:1,time:3,giantTimeMul:.65}},perfect:{balance:8,slow:[.3,.3]},counter:{_about:"Perfect-dodge counter: after a perfect roll against a standing giant, Strike within window seconds (game time) leaps at him with the counter move. Off unless the page asks for it (?counter=1).",enabled:!1,window:.6},feel:{stopGap:.25,toppleStop:14,toppleSlow:[.45,.3],winSlow:[1.2,.25]},assist:{offerAfter:2,startPct:20,perDownPct:5,capPct:60},flow:{intro:2}};var Qt={_about:"Giants. wind = telegraph time before the blow (seconds), open = punish window after it, track = share of the wind-up during which a slam follows the hero before it locks. range = [min, max] distance from the giant at which it picks this attack. First guesses until people play.",hollen:{name:"Hollen",title:"Warden of the East Gate",hp:2450,balance:200,radius:1.6,height:5.4,speed:1.35,turn:2.4,reachWant:2.6,think:[.3,.8],phases:[{from:1,attacks:["slam","sweep","charge"],windMul:1,openMul:1},{from:.5,attacks:["slam","sweep","charge","slamSweep"],windMul:.85,openMul:.8,roar:1.4}],attacks:{slam:{shape:"circle",at:"hero",r:2.3,wind:1.05,track:.5,open:1.1,dmg:18,range:[0,7.5],weight:3,sfx:"slam"},sweep:{shape:"ring",at:"self",r:3.9,inner:0,wind:.95,open:.9,dmg:14,range:[0,3.6],weight:3,sfx:"sweep"},charge:{shape:"lane",at:"self",w:3.2,len:9,wind:1,dash:.55,open:1.3,dmg:20,range:[4,30],weight:2,sfx:"charge"},slamSweep:{chain:["slam","sweep"],weight:2}},tint:null},cairn:{name:"Cairn",title:"the Young Warden",hp:1500,balance:80,radius:1.25,height:3.6,speed:1.25,turn:2.2,reachWant:2.3,think:[.6,1.2],tint:"#c7c08a",phases:[{from:1,attacks:["slam","sweep"],windMul:1,openMul:1}],attacks:{slam:{shape:"circle",at:"hero",r:2,wind:1.15,track:.45,open:1.4,dmg:12,range:[0,7],weight:3,sfx:"slam"},sweep:{shape:"ring",at:"self",r:3.2,inner:0,wind:1,open:1.2,dmg:9,range:[0,3],weight:2,sfx:"sweep"}}}};var Hf={_about:"Elara's lines. Each event has several lines; she says one, never the same one twice in a row, and waits `gap` seconds between lines and stays up long enough to read (at least `show` seconds, or words / `wordsPerSec`) unless the event is urgent. {key:x} is replaced by the key the player uses for x. Plain words, short, warm, a little teasing. Never 'you died'. Non-urgent lines wait `gap` seconds after any line; the same event speaks at most once per `repeatGap` seconds. Urgent = the few story moments (first fight, giant intros, first topple, the end of a run).",gap:18,show:2.8,events:{intro:{urgent:!0,lines:["That's Hollen. Oldest of them all. Be gentle \u2014 he only forgot why he stands.","Hollen again. He's not angry at you. He's just lost.","Ready? Crack him, hold him, break him \u2014 in any order. Mixing is what fills the bar."]},firstFight:{urgent:!0,lines:["Little stones first. Move with {key:move}, strike with {key:light}. Watch the red on the floor \u2014 that's where they land."]},firstWind:{lines:["Red floor means he's coming down there. Roll out with {key:dodge}!","See him wind up? That's your cue to roll."],urgent:!1},firstHurt:{lines:["Ouch. Roll when the red fills up, not before.","Get out of the red, Breaker!"],urgent:!1},firstPerfect:{urgent:!1,lines:["Perfect! Rolling right as he lands shakes his balance.","Ooh \u2014 right on the beat. He felt that."]},firstCounter:{urgent:!1,lines:["He's open \u2014 {key:light}, strike back now!","Now! {key:light} \u2014 hit him before he recovers!"]},noSkills:{lines:["Try {key:sunder} \u2014 Sunder cracks the stone.","Strikes alone won't bring him down. Crack him with {key:sunder}."],urgent:!1},firstCracked:{urgent:!1,lines:["He's cracked! Now hold him with {key:tether}, or break it open with {key:breaker}.","Cracked! A Break on that will hurt his balance a lot."]},firstBound:{lines:["Bound! He's slow now. Finish with {key:breaker}.","Got him tethered. Break it, quick!"],urgent:!1},firstSpend:{urgent:!1,lines:["See the gold bar jump? That's his balance going.","That's it \u2014 crack, hold, break. Look at his balance bar!"]},teeter:{lines:["He's teetering! One more push!","Almost \u2014 he's swaying!"],urgent:!1},firstTopple:{urgent:!0,lines:["He's DOWN! Hit him while he's down \u2014 when Break says FALL!, finish him with {key:breaker}.","Down he goes! Beat on him \u2014 then Giantfall with {key:breaker} when it says FALL!"]},topple:{urgent:!1,lines:["Down again!","Timber!","He's down \u2014 make it count!","Again! He'll be steadier next time."]},finisherBig:{lines:["That was beautiful.","The terrace shook. Did you feel it?","Big combo, big fall. I like your style."],urgent:!1},repeat:{lines:["Same trick again? He's learning it. Mix it up.","You keep doing that one. Try a different order!","Variety, Breaker. The bar fills faster when you mix."],urgent:!1},lowHp:{urgent:!1,lines:["Careful! You're hurt. Roll more, swing less.","Breathe. Watch him. Roll."]},phase2:{urgent:!1,lines:["He's angry now. Faster swings \u2014 watch closely.","Half his strength gone and he knows it. Stay sharp!"]},winFirst:{urgent:!0,lines:["\u266A Hm-mm, hm-mm\u2026 \u266A Sleep now, Hollen. \u2026Thank you, Breaker."]},win:{urgent:!0,lines:["\u266A Hm-mm\u2026 \u266A He's sleeping. Gently done.","\u266A Hm, hm-mm\u2026 \u266A Rest, old Warden.","\u266A Hm-mm\u2026 \u266A Another fall. You're getting good at this."]},down1:{urgent:!0,lines:["Get up, Breaker. He was hurting too.","Up you get. You saw his moves now."]},down2:{urgent:!0,lines:["That was close. If you want, I can take some of the hits with you \u2014 your choice.","Again? Good. I'm staying right here."]},downMore:{urgent:!0,lines:["Every fall teaches something. What did he do just before?","You're closer each time. I can see it.","Deep breath. Mix your skills \u2014 the bar fills faster."]},close:{urgent:!0,lines:["He was SO close to falling. One more try?","A sliver! He had a sliver left!"]},runAgain:{urgent:!0,lines:["The terrace again. You know them better now.","Up we go. Crack, hold, break \u2014 any order, just mix.","Back where we started \u2014 but you're not the same Breaker."]},firstFoeWind:{lines:["See that little red circle? It's about to jump at you. Roll!","Shardlings lunge after they glow. Hit them first \u2014 a hit breaks their wind-up."],urgent:!1},firstKill:{lines:["One down!","Shardlings are bits of Warden stone. They'll sleep too.","Nice. Keep moving."],urgent:!1},waveNext:{lines:["More coming. The far ones throw stones \u2014 Tether pulls them close.","Slingers keep their distance. {key:tether} drags them in.","Here comes the next lot."],urgent:!1},swarm:{urgent:!1,lines:["The wind's turning. Dusk is when Hollen wakes.","A whole swarm. Stay moving, Breaker.","They're everywhere \u2014 use the walls, don't get surrounded."]},pickFirst:{urgent:!0,lines:["Rest a moment. Pick a power \u2014 each one changes how your combos work."]},pick:{urgent:!1,lines:["Choose well.","Which one feels like you?","Take a breath. Then choose."]},picked:{lines:["Good choice.","Ooh, I like that one.","Let's see what that does to them."],urgent:!1},cairnIntro:{urgent:!0,lines:["That's Cairn. The youngest Warden. Watch the gold bar under his name \u2014 fill it and he falls.","Cairn! He's clumsy. Fill the gold bar under his name and he'll sit down hard."]},cairnAgain:{urgent:!0,lines:["Cairn again. You know his trick.","Hello again, little Warden."]},cairnRest:{urgent:!0,lines:["Sleep, Cairn. ...Hear that? Something big is waking.","He's resting. That was the easy one."]},hollenIntro:{urgent:!0,lines:["That's Hollen. Oldest of them all. Be gentle \u2014 he only forgot why he stands.","Hollen. He guarded the East Gate before anyone remembers. Bring him down."]},hollenAgain:{urgent:!0,lines:["Hollen again. He remembers you too.","Him. Deep breath."]},adds:{lines:["He's calling the little ones! Topple him next to them \u2014 the fall smashes them.","Shardlings! Lure them close to him, then bring him down on them."],urgent:!1},firstCrush:{urgent:!1,lines:["Did you see that? His fall smashed them!","Ha! Bring him down next to them \u2014 the ground does the rest."]},crush:{lines:["Crushed!","The fall did that. Beautiful.","Timber \u2014 and the little ones with him."],urgent:!1}},repeatGap:90,wordsPerSec:3.5};var Vf={_about:"Small foes: Shardlings, young bits of Warden stone. No Balance bar; a hit interrupts their wind-up (stagger). wind = warning before the blow (s). First guesses until people play.",shardling:{name:"Shardling",hp:70,radius:.55,height:1.3,speed:2.6,reach:1.4,wind:.55,dmg:7,lunge:1.6,rest:[.9,1.6],stagger:.35,push:.6,tint:"#b9a17a"},slinger:{name:"Slinger",hp:50,radius:.5,height:1.15,speed:2.2,keep:[4.5,6.5],wind:.7,dmg:7,shot:{speed:9,radius:.35,life:1.6},rest:[1.4,2.2],stagger:.4,push:.6,tint:"#7d8aa8"},status:{crackedDmgMul:1.5,boundStun:1.2,breakerShatter:2.5}};var fr={_about:"Power cards: one is picked from three after each early stage. Each changes how combos are built and most cost something. 'set' writes into sim.mods (src/sim/mods.js). Numbers are first guesses.",cards:[{id:"burningTether",name:"Burning Tether",text:"Tether also CRACKS the stone. Its cooldown is 1 s longer.",set:{tetherCracks:!0,"cd.tether":1}},{id:"deepFissure",name:"Deep Fissure",text:"CRACKED stacks up to 3. Sunder's cooldown is 0.6 s longer.",set:{crackedMax:1,"cd.sunder":.6}},{id:"lingering",name:"Lingering Crack",text:"Break leaves one CRACK behind, but each spent status gives 25% less Balance.",set:{breakKeepsCrack:!0,breakGainMul:.75}},{id:"rollCrack",name:"Splitting Roll",text:"A Perfect roll CRACKS the giant.",set:{perfectCracks:!0}},{id:"longTether",name:"Long Tether",text:"Tether reaches 3 m further and pulls YOU to the giant. Cooldown +0.5 s.",set:{tetherReach:3,tetherPullsSelf:!0,"cd.tether":.5}},{id:"quickHands",name:"Quick Hands",text:"Strikes add 60% more Balance. Every skill cools down 20% slower.",set:{lightBalanceMul:1.6,cdMul:1.2}},{id:"heavySunder",name:"Heavy Sunder",text:"Sunder cracks twice. Its cooldown is 1.5 s longer.",set:{sunderStacks:2,"cd.sunder":1.5}},{id:"afterquake",name:"Afterquake",text:"Giantfall shakes the whole terrace: every small foe takes 40. Topples last 1 s longer.",set:{giantfallQuake:40,toppleTime:1}},{id:"secondWind",name:"Second Wind",text:"Heal 2 HP every time a giant topples.",set:{toppleHeal:2}},{id:"chainReaction",name:"Chain Reaction",text:"Breaking a BOUND giant makes Tether ready again.",set:{breakResetsTether:!0}},{id:"glassStone",name:"Glass Stone",text:"Deal 25% more damage. Take 25% more damage.",set:{dmgOut:1.25,dmgIn:1.25}},{id:"steadyFeet",name:"Steady Feet",text:"Roll again 40% sooner, but each roll keeps you safe 40% shorter. Perfect window 4 frames longer. Strikes do 15% less damage.",set:{dodgeCdMul:.6,perfectBonus:4,lightDmgMul:.85,dodgeSafeMul:.6}}]};var ko={_about:"One run, about 4 minutes. Stages play in order; 'pick' offers 3 power cards (and rests: heal). The run is won when the last giant rests; a down restarts the run. Spawn ring = metres from the centre. Targets per stage are guesses to check with bots (tools/run-sweep.mjs).",intro:1.6,pickHeal:35,spawnRing:7.2,stages:[{type:"wave",name:"The Terrace Wakes",mood:1,foes:[["shardling",3]],target:"0:00-0:25",later:[["shardling",2]]},{type:"pick"},{type:"wave",name:"Stones That Throw",mood:1,foes:[["shardling",3],["slinger",2]],target:"0:30-0:55",later:[["shardling",2],["slinger",1]]},{type:"giant",giant:"cairn",mood:1,foes:[],target:"1:00-1:45",adds:{at:.5,foes:[["shardling",3]]}},{type:"pick"},{type:"wave",name:"The Swarm",mood:2,foes:[["shardling",3],["slinger",2]],later:[["shardling",3],["slinger",1]],target:"1:50-2:40"},{type:"pick"},{type:"giant",giant:"hollen",mood:2,foes:[],adds:{at:.6,foes:[["shardling",3]]},target:"2:50-4:30"}]};function Fo(i){let e=i>>>0||1,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.weighted=(n,s)=>{let r=n.reduce((o,c)=>o+s(c),0),a=t()*r;for(let o of n)if(a-=s(o),a<=0)return o;return n[n.length-1]},t.state=()=>e,t}var Oo=class{constructor(){this.n={},this.timed=[]}add(e){this.n[e]=(this.n[e]||0)+1}release(e){if(!this.n[e])throw new Error(`lock "${e}" released more often than taken`);this.n[e]--}has(e){return(this.n[e]||0)>0}hold(e,t){this.add(e),this.timed.push({k:e,t})}tick(e){for(let t=this.timed.length-1;t>=0;t--){let n=this.timed[t];n.t-=e,n.t<=0&&(this.release(n.k),this.timed.splice(t,1))}}clear(){this.n={},this.timed=[]}};function Gf(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0).toString(16).padStart(8,"0")}var nt=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z),Mt=(i,e)=>Math.atan2(e.x-i.x,e.z-i.z),Qu=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},pr=(i,e,t)=>{let n=Qu(e-i);return i+Math.max(-t,Math.min(t,n))};var TM=new Set(["opener","linker","ender"]);function eh(){return{hits:0,t:0,skills:[],last:null,best:0}}function Bo(i,e=i.combo){let t=i.data.rules.combo.variety,n=new Set(e.skills).size;return t[Math.min(n,t.length-1)]}function mr(i,e){let t=i.combo;if(t.hits>0){let s=t.skills.join(">");i.fight.combos.push({hits:t.hits,seq:s,reason:e,variety:Bo(i)}),i.emit({t:"comboEnd",hits:t.hits,seq:s,reason:e})}let n=Math.max(t.best,t.hits);i.combo=eh(),i.combo.best=n}function Wf(i,e){let t=i.combo;t.hits===0||i.hero.dodge||(t.t-=e,t.t<=0&&mr(i,"time"))}function th(i,e){let t=i.data.rules,n=i.data.moves[e],s=i.combo;if(e==="giantfall")return s.hits++,s.t=t.combo.window,{variety:1,repeat:!1};let r=!1;return TM.has(n.role)&&(r=s.last===e,s.skills.push(e),s.last=e),s.hits++,s.t=t.combo.window,{variety:Bo(i),repeat:r}}function EM(i,e){return i.data.rules.status[e].max+(e==="cracked"?i.mods.crackedMax:0)}function nh(i,e,t,n=1){let s=i.data.rules.status[t],r=e.status[t],a=r.n;r.n=Math.min(EM(i,t),r.n+n),r.t=s.time,r.n!==a&&i.emit({t:"status",on:!0,name:t,n:r.n,target:e.kind,id:e.id}),t==="cracked"&&r.n>i.data.rules.status.cracked.max&&i.powerFired("deepFissure")}function zo(i,e,t){for(let n of Object.keys(e.status)){let s=e.status[n];s.n>0&&(s.t-=t,s.t<=0&&(s.n=0,i.emit({t:"status",on:!1,name:n,n:0,target:e.kind,id:e.id})))}}function Xf(i,e,t){let n={...t.apply||{}};return e==="sunder"&&(n.cracked=i.mods.sunderStacks),e==="tether"&&i.mods.tetherCracks&&(n.cracked=(n.cracked||0)+1),n}var qf=(i,e)=>i.mods.dmgOut*(e.role==="string"?i.mods.lightDmgMul:1);function Yf(i,e,t,n){let s=i.mods;e==="tether"&&s.tetherCracks&&i.powerFired("burningTether"),e==="sunder"&&s.sunderStacks>1&&i.powerFired("heavySunder"),t.role==="string"&&s.lightBalanceMul>1&&n&&i.powerFired("quickHands"),s.dmgOut>1&&i.powerFired("glassStone"),t.role==="string"&&s.lightDmgMul<1&&i.powerFired("steadyFeet")}function $f(i,e,t,n=th(i,e)){let s=i.data.rules,r=i.mods,a=i.data.moves[e],o=t.state==="toppled",c={move:e,role:a.role,dmg:a.dmg,dmgMul:qf(i,a),balance:a.balance||0,balanceMul:a.role==="string"?r.lightBalanceMul:1,apply:Xf(i,e,a),consumed:{},variety:n.variety,repeat:n.repeat,toppled:o,toppledNow:!1};if(a.consume){for(let[d,m]of Object.entries(a.consume)){let f=t.status[d].n;f>0&&(c.dmg+=m.dmg*f,c.balance+=m.balance*f*r.breakGainMul,c.consumed[d]=f,t.status[d].n=0,i.emit({t:"status",on:!1,name:d,n:0,consumed:!0,target:"giant"}))}r.breakKeepsCrack&&c.consumed.cracked&&(t.status.cracked.n=1,t.status.cracked.t=s.status.cracked.time,i.powerFired("lingering")),r.breakResetsTether&&c.consumed.bound&&(i.hero.cd.tether=0,i.powerFired("chainReaction"))}if(c.balanceMul+=s.status.cracked.balanceGainPerStack*t.status.cracked.n,e==="giantfall"){let d=t.toppleQ||{hits:0,variety:1};c.dmg+=a.perComboHit*d.hits,c.dmgMul*=d.variety,c.variety=d.variety}else{o&&(c.dmgMul*=s.topple.dmgMul);let d=c.repeat?s.combo.repeat:1;c.dmgMul*=c.variety*d,c.balanceMul*=c.variety*d}for(let d of i.hooks.beforeHit)d(c,t,i);let l=Math.max(1,Math.round(c.dmg*c.dmgMul));t.hp=Math.max(0,t.hp-l);let u=i.hero;t.lastHitDir=Mt(u,t),t.sinceHit=0;let h=0;!o&&t.state!=="fallen"&&(h=c.balance*c.balanceMul,Number.isFinite(h)||(h=0),t.balance=Math.min(t.balMax,t.balance+h));for(let[d,m]of Object.entries(c.apply))nh(i,t,d,m);if(e==="tether"&&r.tetherPullsSelf){let d=Mt(t,u),m=t.radius+1;u.x=t.x+Math.sin(d)*m,u.z=t.z+Math.cos(d)*m,i.emit({t:"pull",x:u.x,z:u.z}),i.powerFired("longTether")}Yf(i,e,a,h>0),i.fight.dmgDealt+=l,i.emit({t:"hit",target:"giant",move:e,dmg:l,gain:Math.round(h*10)/10,variety:c.variety,repeat:c.repeat,consumed:c.consumed,toppled:o,x:t.x,z:t.z,combo:i.combo.hits}),i.stop(a.stop+(a.stopPerStatus||0)*Object.values(c.consumed).reduce((d,m)=>d+m,0)),a.slow&&i.slow(a.slow[0],a.slow[1]);for(let d of i.hooks.afterHit)d(c,t,i);if(e==="giantfall"&&r.giantfallQuake){for(let d of i.foes)d.hp>0&&Ho(i,d,r.giantfallQuake,"quake",Mt(t,d),1.5);i.powerFired("afterquake")}if(t.hp<=0)return i.giantFallen(t),c;if(e==="giantfall"&&t.state==="toppled"&&(t.t=Math.min(t.t,s.topple.afterFinisher)),!o&&t.balance>=t.balMax)i.topple(t),c.toppledNow=!0;else{let d=i.giantDef(t).phases[t.phase+1];d&&t.hp/t.max<=d.from&&i.phaseUp(t)}return i.combo.hits>=s.combo.cap&&mr(i,"cap"),c}function Ho(i,e,t,n,s,r=1){let a=i.data.foes[e.type];e.hp=Math.max(0,e.hp-t),(e.state==="wind"||e.state==="move"||e.state==="rest")&&(e.state="stagger",e.t=a.stagger,e.tg=null),e.x+=Math.sin(s)*a.push*r,e.z+=Math.cos(s)*a.push*r,e.flash=1,e.hp<=0&&i.foeDown(e,n)}function Kf(i,e,t,n){let s=i.data.moves[e],r=i.data.foes.status,a=i.data.rules,o=s.dmg*qf(i,s)*n.variety*(n.repeat?a.combo.repeat:1),c=1,l={};if(t.status.cracked.n>0&&(o*=r.crackedDmgMul),s.consume)for(let[f,x]of Object.entries(s.consume)){let g=t.status[f].n;g>0&&(o+=x.dmg*2*g,l[f]=g,t.status[f].n=0,c=r.breakerShatter)}let u=i.hero,h=Mt(u,t),d=Xf(i,e,s);for(let[f,x]of Object.entries(d))nh(i,t,f,x);if(d.bound){let f=1.1+t.radius;t.x=u.x+Math.sin(h)*f,t.z=u.z+Math.cos(h)*f,t.state="stun",t.t=r.boundStun,t.tg=null,c=0}let m=Math.max(1,Math.round(o));i.fight.dmgDealt+=m,Yf(i,e,s,!1),i.emit({t:"hit",target:"foe",id:t.id,move:e,dmg:m,variety:n.variety,repeat:n.repeat,consumed:l,x:t.x,z:t.z,combo:i.combo.hits}),Ho(i,t,m,e,h,c),t.state==="stagger"&&d.bound&&(t.state="stun",t.t=r.boundStun),i.stop(Math.max(2,s.stop-2)),i.combo.hits>=a.combo.cap&&mr(i,"cap")}function as(i,e,t){var u,h;let n=i.hero,s=i.data.rules,r=i.data.moves.dodge,a=t&&t.kind==="giant"?t:null;if(i.flow.state!=="fight"||n.hp<=0||i.giant&&i.giant.state==="fallen")return"none";if(n.dodge&&n.dodge.t*60<r.perfect+i.mods.perfectBonus)return i.fight.perfects++,i.emit({t:"perfect",x:n.x,z:n.z}),i.slow(s.perfect.slow[0],s.perfect.slow[1]),n.dodge.t*60>=r.perfect&&i.powerFired("steadyFeet"),a&&a.state!=="toppled"&&a.state!=="fallen"&&(a.balance=Math.min(a.balMax,a.balance+s.perfect.balance),a.sinceHit=0,i.mods.perfectCracks&&(nh(i,a,"cracked",1),i.powerFired("rollCrack")),a.balance>=a.balMax&&(a.lastHitDir=Mt(n,a),i.topple(a))),i.counterOn&&a&&a.state!=="toppled"&&a.state!=="fallen"&&a.hp>0&&(n.counterT=s.counter.window,i.fight.counterWins++,i.emit({t:"counterReady",x:n.x,z:n.z})),"perfect";if(n.iframe>0||n.hurtT>0)return i.emit({t:"evade"}),"evade";let o={dmg:e.dmg,mul:(1-i.assistPct/100)*i.mods.dmgIn};for(let d of i.hooks.beforeHurt)d(o,t,i);let c=Math.max(1,Math.round(o.dmg*o.mul));i.mods.dmgIn>1&&i.powerFired("glassStone",{hurt:!0}),n.hp=Math.max(0,n.hp-c),n.hurtT=s.hero.hurtIframes,n.iframe=s.hero.hurtIframes,i.locks.hold("act",s.hero.hurtLock),n.move=null;let l=Mt(t,n);n.x+=Math.sin(l)*s.hero.hurtPush*(a?1:.5),n.z+=Math.cos(l)*s.hero.hurtPush*(a?1:.5),i.fight.hitsTaken++,i.fight.dmgTaken+=c;{let d=(a?a.id+":":"")+(e.name||"?");if(i.fight.hitsBy[d]=(i.fight.hitsBy[d]||0)+1,i.run){let m=(u=i.fight.hitsByStage)[h=i.run.stage]||(u[h]={});m[d]=(m[d]||0)+1}}return mr(i,"hurt"),i.emit({t:"hurt",dmg:c,hp:n.hp,from:e.name}),n.hp<=0&&i.heroDown(),"hurt"}var AM=["light","sunder","tether","breaker","dodge"],jf=["sunder","tether","breaker"];function Qf(i){return{x:0,z:4.5,face:Math.PI,hp:i.hero.hp,max:i.hero.hp,move:null,dodge:null,dodgeCd:0,iframe:0,hurtT:0,counterT:0,cd:{sunder:0,tether:0,breaker:0},mx:0,mz:0,moving:!1}}var ep=i=>i&&i.state!=="fallen"&&i.state!=="intro";function gr(i){let e=i.foes.filter(t=>t.hp>0&&t.state!=="spawn");return ep(i.giant)&&e.push(i.giant),e}function RM(i,e){let t=i.hero,n=i.data.moves,s=i.giant;if(e==="light"&&t.counterT>0&&ep(s)&&s.state!=="toppled")return"counter";if(e==="light"){let r=t.move&&n[t.move.id];return r&&r.role==="string"&&r.next?r.next:"light1"}return e==="breaker"&&s&&s.state==="toppled"&&!s.finisherUsed?"giantfall":e}function Zf(i,e){let t=i.hero,n=i.data.moves;if(i.locks.has("act")||jf.includes(e)&&t.cd[e]>0||e==="dodge"&&t.dodgeCd>0)return!1;if(t.dodge)return e==="counter"||e!=="dodge"&&t.dodge.t*60+1e-6>=n.dodge.cancelFrom;if(!t.move)return e!=="light2"&&e!=="light3";let s=n[t.move.id],r=t.move.t*60+1e-6,a=n.cancelRules[s.role]||{},o;e==="dodge"?o="dodge":s.role==="string"&&e===s.next?o="next":n[e].role==="string"?o="light":o="skill";let c=a[o];return c?c==="always"?r>=s.nextFrom:c==="hit"?t.move.hit&&r>=s.cancel:c==="recovery"?r>=s.startup+s.active:c==="hitOrRecovery"?t.move.hit&&r>=s.cancel||r>=s.startup+s.active:c==="any":!1}var tp=(i,e)=>i.data.moves[e].reach+(e==="tether"?i.mods.tetherReach:0);function CM(i,e){let t=i.hero,n=i.data.moves,s=i.data.rules,r=n[e],a=i.giant;t.move&&t.move.id!==e&&i.emit({t:"cancel",from:t.move.id,to:e}),t.dodge=null,t.move={id:e,t:0,hit:!1,done:!1},t.counterT=0,e==="counter"&&(t.iframe=Math.max(t.iframe,(r.startup+r.active)/60),i.fight.counters++),r.cd&&(t.cd[e]=(r.cd+i.mods.cd[e])*i.mods.cdMul),e==="giantfall"&&a&&(a.finisherUsed=!0,a.state==="toppled"&&(a.t=Math.max(a.t,(r.startup+r.active)/60+.05)));let o=tp(i,e)+s.hero.aimAssist,c=gr(i).filter(u=>nt(t,u)-u.radius<o).sort((u,h)=>nt(t,u)-u.radius-(nt(t,h)-h.radius)),l=(e==="giantfall"||e==="counter")&&a||c.includes(a)&&nt(t,a)-a.radius<r.reach+1.2?a:c[0];l?t.face=Mt(t,l):t.moving&&(t.face=Math.atan2(t.mx,t.mz)),i.fight.moves[e]=(i.fight.moves[e]||0)+1,i.emit({t:"swing",move:e})}function Jf(i){let e=i.hero,t=i.data.moves.dodge;e.move&&i.emit({t:"cancel",from:e.move.id,to:"dodge"}),e.move=null,e.counterT=0;let n=e.moving?Math.atan2(e.mx,e.mz):e.face+Math.PI;e.dodge={t:0,a:n,p:0},e.dodgeCd=t.cd*i.mods.dodgeCdMul,e.iframe=t.iframes/60*i.mods.dodgeSafeMul,i.fight.dodges++,i.emit({t:"dodge"})}function np(i,e){for(let t of e||[])AM.includes(t)&&i.buffer.push({p:t,age:0})}function ip(i,e){let t=i.data.rules.input.buffer;for(let n=i.buffer.length-1;n>=0;n--)i.buffer[n].age+=e,i.buffer[n].age>t&&(i.fight.dropped++,i.buffer.splice(n,1))}function IM(i){let e=i.buffer.findIndex(t=>t.p==="dodge");if(e>=0){Zf(i,"dodge")&&(i.buffer.splice(e,1),Jf(i));return}for(let t=0;t<i.buffer.length;t++){let n=RM(i,i.buffer[t].p);if(Zf(i,n)){i.buffer.splice(t,1),n==="dodge"?Jf(i):CM(i,n);return}}}function PM(i,e,t,n){let s=i.hero,r=nt(s,n);if(r-n.radius>t)return!1;let a=e.arc/2+Math.asin(Math.min(1,n.radius/Math.max(r,.01)));return Math.abs(Qu(Mt(s,n)-s.face))<=a}function LM(i,e){let t=i.data.moves[e],n=tp(i,e),s=i.hero,r=gr(i).filter(a=>PM(i,t,n,a));return e==="giantfall"&&(r=r.filter(a=>a.kind==="giant")),e==="tether"&&r.length>1&&(r.sort((a,o)=>nt(s,a)-a.radius-(nt(s,o)-o.radius)),r=[r[0]]),r.sort((a,o)=>(o.kind==="giant")-(a.kind==="giant"))}function sp(i,e,t){let n=i.hero,s=i.data.rules,r=i.data.moves;for(let o of jf)n.cd[o]=Math.max(0,n.cd[o]-e);n.dodgeCd-=e,n.iframe-=e,n.hurtT-=e,n.counterT=Math.max(0,n.counterT-e),i.locks.tick(e),n.mx=t.mx||0,n.mz=t.mz||0;let a=Math.hypot(n.mx,n.mz);if(a>1&&(n.mx/=a,n.mz/=a),n.moving=Math.hypot(n.mx,n.mz)>.15,i.flow.state!=="fight"||n.hp<=0){n.move=null,n.dodge=null;return}if(IM(i),n.move){let o=n.move,c=r[o.id],l=o.t*60;o.t+=e;let u=o.t*60+1e-6;if(l<c.startup&&c.lunge){let h=c.lunge*(Math.min(u,c.startup)-l)/c.startup,d=n.x+Math.sin(n.face)*h,m=n.z+Math.cos(n.face)*h;gr(i).some(f=>nt({x:d,z:m},f)<=f.radius+s.hero.radius+.15)||(n.x=d,n.z=m)}if(n.moving&&(n.x+=n.mx*s.hero.speed*s.hero.moveInMove*e,n.z+=n.mz*s.hero.speed*s.hero.moveInMove*e),!o.done&&u>=c.startup){let h=LM(i,o.id);if(h.length){o.hit=!0,o.done=!0;let d=th(i,o.id);for(let m of h)m.kind==="giant"?$f(i,o.id,m,d):m.hp>0&&Kf(i,o.id,m,d)}else u>=c.startup+c.active&&(o.done=!0,i.emit({t:"whiff",move:o.id}))}n.move===o&&u>=c.startup+c.active+c.recovery&&(n.move=null)}else if(n.dodge){let o=r.dodge,c=n.dodge;c.t+=e;let l=Math.min(1,c.t*60/o.frames),u=1-(1-l)*(1-l),h=u-c.p;c.p=u,n.x+=Math.sin(c.a)*o.dist*h,n.z+=Math.cos(c.a)*o.dist*h,l>=1&&(n.dodge=null)}else n.moving&&!i.locks.has("act")&&(n.x+=n.mx*s.hero.speed*e,n.z+=n.mz*s.hero.speed*e,n.face=Math.atan2(n.mx,n.mz));DM(i)}function DM(i){let e=i.hero,t=i.data.rules;for(let r of gr(i)){let a=nt(e,r),o=r.radius+t.hero.radius;if(a<o){let c=a>1e-4?Mt(r,e):0;e.x=r.x+Math.sin(c)*o,e.z=r.z+Math.cos(c)*o}}let n=Math.hypot(e.x,e.z),s=t.arena.radius-t.hero.radius;n>s&&(e.x*=s/n,e.z*=s/n)}function ih(i,e){let t=i.data.giants[e];return{kind:"giant",id:e,x:0,z:-2.5,introT:null,face:0,hp:t.hp,max:t.hp,balance:0,balMax:t.balance,radius:t.radius,state:"intro",t:0,atk:null,queue:[],phase:0,tg:null,windAge:0,think:0,dashLeft:0,struck:!1,status:{cracked:{n:0,t:0},bound:{n:0,t:0}},sinceHit:99,lastHitDir:0,toppleDir:0,toppleQ:null,topples:0}}var xr=(i,e)=>i.data.giants[e.id],Vo=(i,e)=>xr(i,e).phases[e.phase];function NM(i,e){let t=xr(i,e),n=nt(e,i.hero),s=Vo(i,e).attacks.filter(r=>{let a=t.attacks[r];return a.chain?n<=Math.min(...a.chain.map(o=>t.attacks[o].range[1])):n>=a.range[0]&&n<=a.range[1]});return s.length?i.rng.weighted(s,r=>t.attacks[r].weight):null}function rp(i,e,t){let n=xr(i,e),s=Vo(i,e),r=n.attacks[t];r.chain&&(e.queue=r.chain.slice(1),t=r.chain[0],r=n.attacks[t]),e.state="wind",e.atk=t,e.windAge=0,e.t=r.wind*s.windMul,e.struck=!1;let a=i.hero;e.tg={kind:r.shape,x:r.at==="hero"?a.x:e.x,z:r.at==="hero"?a.z:e.z,r:r.r||0,inner:r.inner||0,w:r.w||0,len:r.len||0,ang:e.face,k:0,dur:e.t},i.emit({t:"wind",atk:t,dur:e.t})}function UM(i,e){let t=xr(i,e),n=t.attacks[e.atk],s=i.hero,r=e.tg,a={name:e.atk,dmg:n.dmg};if(i.emit({t:"strike",atk:e.atk,x:r.x,z:r.z}),n.shape==="circle")nt(s,r)<=r.r+.15&&as(i,a,e);else if(n.shape==="ring"){let o=nt(s,e);o<=r.r&&o>=r.inner&&as(i,a,e)}if(e.state==="wind"){if(n.shape==="lane"){e.state="active",e.dashLeft=n.dash;return}ap(i,e)}}function ap(i,e){let t=xr(i,e).attacks[e.atk];e.state="open",e.t=t.open*Vo(i,e).openMul,e.tg=null}function op(i,e,t){let n=i.data.rules,s=xr(i,e),r=i.hero;zo(i,e,t);let a=t*(e.status.bound.n>0?n.status.bound.giantTimeMul:1);if(e.sinceHit+=t,e.state!=="toppled"&&e.state!=="fallen"&&e.sinceHit>n.balance.idle&&e.balance>0){let l=n.balance.drainFloor+(1-n.balance.drainFloor)*(e.hp/e.max);e.balance=Math.max(0,e.balance-n.balance.drain*l*t)}let o=Mt(e,r),c=nt(e,r);switch(e.state){case"intro":e.introT!=null&&(e.introT-=t,e.introT<=0&&(e.state="approach",e.think=.6,i.emit({t:"giantReady",id:e.id})));break;case"approach":{if(e.face=pr(e.face,o,s.turn*a),c>s.reachWant+e.radius&&(e.x+=Math.sin(e.face)*s.speed*a,e.z+=Math.cos(e.face)*s.speed*a),e.think-=a,e.think<=0){let l=NM(i,e);l&&rp(i,e,l)}break}case"wind":{let l=s.attacks[e.atk];e.t-=a,e.windAge+=a;let u=l.track?l.track:.7;e.windAge<e.tg.dur*u&&(e.face=pr(e.face,o,s.turn*a),l.at==="hero"?(e.tg.x=r.x,e.tg.z=r.z):(e.tg.x=e.x,e.tg.z=e.z,e.tg.ang=e.face)),e.tg.k=1-Math.max(0,e.t)/e.tg.dur,e.t<=0&&UM(i,e);break}case"active":{let l=s.attacks[e.atk],u=l.len/l.dash;e.x+=Math.sin(e.tg.ang)*u*a,e.z+=Math.cos(e.tg.ang)*u*a,e.dashLeft-=a;let h=Math.hypot(e.x,e.z),d=n.arena.radius-e.radius*.6;h>d&&(e.x*=d/h,e.z*=d/h,e.dashLeft=0,i.emit({t:"wallHit",x:e.x,z:e.z})),!e.struck&&nt(e,r)<=l.w/2+n.hero.radius&&(e.struck=!0,as(i,{name:e.atk,dmg:l.dmg},e)),e.state==="active"&&e.dashLeft<=0&&ap(i,e);break}case"open":e.t-=a,e.t<=0&&(e.queue.length?rp(i,e,e.queue.shift()):(e.state="approach",e.atk=null,e.think=i.rng.range(s.think[0],s.think[1])));break;case"roar":e.t-=a,e.t<=0&&(e.state="approach",e.think=i.rng.range(s.think[0],s.think[1]));break;case"toppled":e.t-=t,!e.fallReady&&e.t<=n.topple.fallWindow&&(e.fallReady=!0,i.emit({t:"fallReady"})),e.t<=0&&(e.state="getup",e.t=n.topple.getup,i.emit({t:"getup"}));break;case"getup":e.t-=a,e.t<=0&&(e.state="approach",e.think=i.rng.range(s.think[0],s.think[1])*.5);break;default:break}}function cp(i,e,t){let n=i.data.rules,s=i.hero;e.state="toppled",e.t=n.topple.time+i.mods.toppleTime,e.tg=null,e.queue=[],e.atk=null,e.fallReady=!1,i.mods.toppleTime>0&&i.powerFired("afterquake"),e.balance=0,e.balMax*=n.topple.grow,e.toppleQ=t,e.topples++,e.finisherUsed=!1;let r=e.lastHitDir;Math.abs(Math.sin(r))<.5&&(r+=(s.x>=e.x?-1:1)*Math.PI/3),e.toppleDir=r,i.emit({t:"topple",dir:r,x:e.x,z:e.z,n:e.topples,hits:t.hits});let a=i.giantDef(e).height*.9,o=Math.sin(r),c=Math.cos(r);for(let u of i.foes){if(u.hp<=0||u.state==="dead")continue;let h=u.x-e.x,d=u.z-e.z,m=h*o+d*c,f=Math.abs(h*c-d*o);m>-.5&&m<a&&f<1.3+u.radius&&(u.hp=0,i.fight.crushes++,i.emit({t:"crush",id:u.id,x:u.x,z:u.z}),i.foeDown(u,"crush"))}let l=i.data.rules.topple.quake;for(let u of i.foes)u.hp>0&&u.state!=="dead"&&Math.hypot(u.x-e.x,u.z-e.z)<e.radius+l.r&&(i.fight.crushes++,Ho(i,u,l.dmg,"quake",Math.atan2(u.x-e.x,u.z-e.z),2.5));if(i.mods.toppleHeal){let u=s.hp;s.hp=Math.min(s.max,s.hp+i.mods.toppleHeal),s.hp>u&&(i.emit({t:"heal",n:s.hp-u}),i.powerFired("secondWind"))}}function lp(i,e){e.phase++;let t=Vo(i,e);i.emit({t:"phase",n:e.phase}),!(e.state==="toppled"||e.state==="getup")&&(e.state="roar",e.t=t.roar||1,e.tg=null,e.queue=[],e.atk=null)}function hp(i,e,t,n){let s=i.data.foes[e];return{kind:"foe",id:++i.nextId,type:e,x:t,z:n,face:Mt({x:t,z:n},i.hero),hp:s.hp,max:s.hp,radius:s.radius,state:"spawn",t:.7,tg:null,status:{cracked:{n:0,t:0},bound:{n:0,t:0}},flash:0,struck:!1,lungeLeft:0,cool:0}}function up(i,e){let t=i.data.foes[e.type],n=i.hero;e.state="wind",e.t=t.wind,e.struck=!1,e.face=Mt(e,n),e.tg=e.type==="slinger"?{kind:"lane",x:e.x,z:e.z,w:.7,len:9,ang:e.face,k:0,dur:t.wind,small:!0}:{kind:"lane",x:e.x,z:e.z,w:2*(e.radius+.35),len:t.lunge+e.radius+.35,ang:e.face,k:0,dur:t.wind,small:!0},i.emit({t:"foeWind",id:e.id,type:e.type})}function dp(i,e){let t=i.hero,n=i.data.rules;for(let r=i.foes.length-1;r>=0;r--){let a=i.foes[r],o=i.data.foes[a.type];if(a.flash=Math.max(0,a.flash-e*8),a.state==="dead"){a.t-=e,a.t<=0&&i.foes.splice(r,1);continue}zo(i,a,e);let c=nt(a,t),l=Mt(a,t);switch(a.state){case"spawn":a.t-=e,a.t<=0&&(a.state="move",a.cool=i.rng.range(.2,.8));break;case"move":{if(a.face=pr(a.face,l,6*e),a.cool-=e,a.type==="slinger"){let[u,h]=o.keep;c<u?(a.x-=Math.sin(l)*o.speed*e,a.z-=Math.cos(l)*o.speed*e):c>h&&(a.x+=Math.sin(l)*o.speed*e,a.z+=Math.cos(l)*o.speed*e),c<=h+1&&a.cool<=0&&up(i,a)}else c>o.reach+a.radius+n.hero.radius?(a.x+=Math.sin(a.face)*o.speed*e,a.z+=Math.cos(a.face)*o.speed*e):a.cool<=0&&up(i,a);break}case"wind":if(a.t-=e,a.t>a.tg.dur*.45&&(a.face=pr(a.face,l,5*e),a.type==="slinger"?(a.tg.x=a.x,a.tg.z=a.z,a.tg.ang=a.face):(a.tg.x=a.x+Math.sin(a.face)*o.lunge,a.tg.z=a.z+Math.cos(a.face)*o.lunge)),a.tg.k=1-Math.max(0,a.t)/a.tg.dur,a.t<=0)if(a.type==="slinger"){let u=o.shot;i.shots.push({x:a.x+Math.sin(a.tg.ang)*.6,z:a.z+Math.cos(a.tg.ang)*.6,vx:Math.sin(a.tg.ang)*u.speed,vz:Math.cos(a.tg.ang)*u.speed,r:u.radius,life:u.life,dmg:o.dmg,kind:"shot"}),i.emit({t:"throw",id:a.id}),a.state="rest",a.t=i.rng.range(o.rest[0],o.rest[1]),a.tg=null}else a.state="act",a.lungeLeft=.16,a.tg=null,i.emit({t:"lunge",id:a.id});break;case"act":{let u=o.lunge/.16;a.x+=Math.sin(a.face)*u*e,a.z+=Math.cos(a.face)*u*e,a.lungeLeft-=e,!a.struck&&nt(a,t)<=a.radius+n.hero.radius+.35&&(a.struck=!0,as(i,{name:a.type,dmg:o.dmg},a)),a.lungeLeft<=0&&a.state==="act"&&(a.state="rest",a.t=i.rng.range(o.rest[0],o.rest[1]));break}case"rest":case"stagger":case"stun":a.t-=e,a.t<=0&&(a.cool=a.state==="rest"?0:i.rng.range(.1,.4),a.state="move");break;default:break}}let s=i.foes.filter(r=>r.state!=="dead");for(let r=0;r<s.length;r++){let a=s[r];for(let u=r+1;u<s.length;u++){let h=s[u],d=nt(a,h),m=a.radius+h.radius;if(d<m&&d>1e-4){let f=(m-d)/2,x=Mt(a,h);a.x-=Math.sin(x)*f,a.z-=Math.cos(x)*f,h.x+=Math.sin(x)*f,h.z+=Math.cos(x)*f}}let o=i.giant;if(o&&o.state!=="fallen"){let u=nt(a,o),h=a.radius+o.radius;if(u<h&&u>1e-4){let d=Mt(o,a);a.x=o.x+Math.sin(d)*h,a.z=o.z+Math.cos(d)*h}}let c=Math.hypot(a.x,a.z),l=n.arena.radius-a.radius;c>l&&(a.x*=l/c,a.z*=l/c)}}function fp(i,e){let t=i.hero,n=i.data.rules;for(let s=i.shots.length-1;s>=0;s--){let r=i.shots[s];if(r.x+=r.vx*e,r.z+=r.vz*e,r.life-=e,nt(r,t)<=r.r+n.hero.radius){as(i,{name:"stone",dmg:r.dmg},r),i.shots.splice(s,1);continue}(r.life<=0||Math.hypot(r.x,r.z)>n.arena.radius+1)&&i.shots.splice(s,1)}}var kM=new Set(["crackedMax","tetherReach","toppleTime","toppleHeal","giantfallQuake","perfectBonus","sunderStacks"]),OM=new Set(["breakGainMul","lightBalanceMul","cdMul","dmgOut","dmgIn","dodgeCdMul","dodgeSafeMul","lightDmgMul"]);function pp(){return{tetherCracks:!1,crackedMax:0,breakKeepsCrack:!1,breakGainMul:1,perfectCracks:!1,tetherReach:0,tetherPullsSelf:!1,lightBalanceMul:1,cdMul:1,cd:{sunder:0,tether:0,breaker:0},sunderStacks:1,giantfallQuake:0,toppleTime:0,toppleHeal:0,breakResetsTether:!1,dmgOut:1,dmgIn:1,dodgeCdMul:1,dodgeSafeMul:1,perfectBonus:0,lightDmgMul:1}}function sh(i,e){for(let[t,n]of Object.entries(e.set))if(t.startsWith("cd."))i.cd[t.slice(3)]+=n;else if(t==="sunderStacks")i.sunderStacks=Math.max(i.sunderStacks,n);else if(kM.has(t))i[t]+=n;else if(OM.has(t))i[t]*=n;else if(typeof n=="boolean")i[t]=n;else throw new Error(`power card ${e.id}: unknown field ${t}`)}var Ni=1/60,FM={intro:["fight"],fight:["pick","won","down"],pick:["fight"],won:["intro"],down:["intro"]};function mp(i,e={}){var d,m;let t={data:i,seed:(d=e.seed)!=null?d:1,strict:!!e.strict,counterOn:(m=e.counter)!=null?m:!!(i.rules.counter&&i.rules.counter.enabled),mode:e.mode||"lab",giantId:e.giant||"hollen",events:[],hooks:{beforeHit:[],afterHit:[],beforeHurt:[]},flow:{state:"intro",t:0,seen:{},errors:[]},log:[],downsInRow:0,assistPct:0,nextId:0,realTime:0,runsStarted:0,resume:null,time:0,stopT:0,lastStopAt:-99,lastStopLen:0,slowT:0,slowScale:1},n=i.run;t.emit=f=>{f.at=Math.round(t.time*1e3)/1e3,t.events.push(f)},t.drain=()=>{let f=t.events;return t.events=[],f},t.powerFired=(f,x={})=>{t.run&&t.run.picks.includes(f)&&t.emit({t:"power",id:f,...x})},t.giantDef=f=>i.giants[f.id],t.setFlow=f=>{let x=t.flow.state,g=`${x}>${f}`;if(t.flow.seen[g]=(t.flow.seen[g]||0)+1,!(FM[x]||[]).includes(f)&&(t.flow.errors.push(g),t.strict))throw new Error(`flow ${g} is not allowed`);t.flow.state=f,t.flow.t=0,t.emit({t:"flow",from:x,to:f})},t.stop=f=>{let x=f/60,g=i.rules.feel.stopGap;x<=0||t.slowT>0||t.realTime-t.lastStopAt<g&&x<=t.lastStopLen||(t.stopT=Math.max(t.stopT,x),t.lastStopAt=t.realTime,t.lastStopLen=x)},t.slow=(f,x)=>{t.slowScale=t.slowT>0?Math.min(t.slowScale,x):x,t.slowT=Math.max(t.slowT,f)},t.topple=f=>{cp(t,f,{hits:t.combo.hits,variety:Bo(t)}),t.fight.topples++,t.stopT=Math.max(t.stopT,i.rules.feel.toppleStop/60),t.lastStopAt=t.realTime,t.slow(i.rules.feel.toppleSlow[0],i.rules.feel.toppleSlow[1])},t.phaseUp=f=>lp(t,f),t.giantFallen=f=>{if(f.state="fallen",f.tg=null,f.balance=0,mr(t,"win"),t.slow(i.rules.feel.winSlow[0],i.rules.feel.winSlow[1]),t.fight.giantsDown++,t.emit({t:"fallen",id:f.id,x:f.x,z:f.z,last:t.mode==="lab"||t.run.stage===n.stages.length-1}),t.mode==="lab"){s("won");return}for(let x of t.foes)x.hp>0&&(x.hp=0,t.foeDown(x,"crumble"));t.shots.length=0,t.run.clearT=0},t.foeDown=(f,x)=>{f.state!=="dead"&&(f.hp=0,f.state="dead",f.t=.9,f.tg=null,f.how=x,t.fight.foesDown++,t.emit({t:"foeDown",id:f.id,type:f.type,how:x,x:f.x,z:f.z}))},t.heroDown=()=>{s("down")};function s(f){var y;let x=t.fight,g=t.giant,p=t.hero;x.result=f,x.time=Math.round(t.time*10)/10,x.heroHp=p.hp,x.realSec=t.run?Math.round((t.realTime-t.run.t0)*10)/10:x.time,x.giantHpPct=g?g.hp>0?Math.max(1,Math.round(100*g.hp/g.max)):0:null,x.assistPct=t.assistPct,x.bestCombo=t.combo.best,t.mode==="run"&&(x.resumedAt=(y=t.run.resumedAt)!=null?y:null,x.stage=t.run.stage,x.stages=n.stages.length,x.stageName=r(t.run.stage),x.powers=t.run.picks.slice(),x.hpAt=t.run.hpAt.slice(),x.stageTimes=t.run.times.slice()),t.log.push(x),t.downsInRow=f==="down"?t.downsInRow+1:0,t.setFlow(f)}let r=f=>{let x=n&&n.stages[f];return x?x.type==="giant"?i.giants[x.giant].name:x.name||x.type:""};function a(f){let x=t.hero,g=Math.PI-Math.sign(x.x||1)*Math.min(.7,Math.abs(x.x)*.15),p=0,y=f.reduce((M,[,v])=>M+v,0);for(let[M,v]of f)for(let E=0;E<v;E++){let T=g+(p-(y-1)/2)*.55+t.rng.range(-.15,.15);p++,t.foes.push(hp(t,M,Math.sin(T)*n.spawnRing,Math.cos(T)*n.spawnRing))}t.emit({t:"spawn",n:y})}function o(f){let x=n.stages[f];if(t.run.stage=f,t.run.stageT=0,t.run.laterDone=!1,t.run.addsDone=!1,t.run.clearT=-1,x.type==="giant"){t.giant=ih(t,x.giant),t.giant.introT=n.intro;let g=t.hero;Math.hypot(g.x-t.giant.x,g.z-t.giant.z)<4&&(g.x=0,g.z=4.5)}else t.giant=null;x.foes&&x.foes.length&&a(x.foes),t.emit({t:"stage",i:f,type:x.type,name:r(f),mood:x.mood||1,giant:x.giant||null})}function c(){let f=n.stages[t.run.stage],x=t.foes.some(g=>g.state!=="dead");return f.type==="wave"?!x&&(!f.later||t.run.laterDone):t.giant&&t.giant.state==="fallen"&&t.run.clearT>=2.6}function l(){t.run.times.push(Math.round((t.realTime-t.run.t0)*10)/10),t.run.hpAt.push(Math.round(t.hero.hp));let f=t.run.stage+1;if(f>=n.stages.length){s("won");return}if(n.stages[f].type==="pick"){t.run.stage=f,u(),t.setFlow("pick");return}o(f)}function u(){let f=i.powers.cards.filter(g=>!t.run.picks.includes(g.id)),x=[];for(;x.length<3&&f.length;)x.push(f.splice(Math.floor(t.rng()*f.length),1)[0]);t.run.offer=x,t.emit({t:"offer",cards:x.map(g=>g.id)})}t.choose=f=>{if(t.flow.state!=="pick"||!t.run.offer||!t.run.offer[f])return!1;let x=t.run.offer[f];sh(t.mods,x),t.run.picks.push(x.id),t.run.offer=null,t.run.times.push(Math.round((t.realTime-t.run.t0)*10)/10),t.run.hpAt.push(Math.round(t.hero.hp));let g=t.hero,p=g.hp;return g.hp=Math.min(g.max,g.hp+n.pickHeal),t.emit({t:"picked",id:x.id,heal:g.hp-p}),t.setFlow("fight"),o(t.run.stage+1),!0};function h(f){if(t.flow.state!=="fight")return;let x=n.stages[t.run.stage];t.run.stageT+=f,x.type==="wave"&&x.later&&!t.run.laterDone&&t.foes.filter(g=>g.state!=="dead").length<=1&&(t.run.laterDone=!0,a(x.later)),x.type==="giant"&&x.adds&&!t.run.addsDone&&t.giant&&t.giant.hp/t.giant.max<=x.adds.at&&(t.run.addsDone=!0,a(x.adds.foes)),t.run.clearT>=0&&(t.run.clearT+=f),c()&&l()}return t.reset=()=>{t.rng=Fo(t.seed+t.log.length*7919),t.locks=new Oo,t.buffer=[],t.mods=pp(),t.hero=Qf(i.rules),t.foes=[],t.shots=[],t.nextId=0,t.giant=t.mode==="lab"?ih(t,t.giantId):null,t.run=t.mode==="run"?{stage:-1,stageT:0,picks:[],offer:null,clearT:-1,times:[],hpAt:[],t0:t.realTime}:null,t.combo=eh(),t.time=0,t.stopT=0,t.slowT=0,t.slowScale=1,t.fight={n:t.log.length+1,result:null,hitsTaken:0,dmgTaken:0,dmgDealt:0,topples:0,perfects:0,counterWins:0,counters:0,dodges:0,dropped:0,combos:[],moves:{},hitsBy:{},hitsByStage:{},foesDown:0,crushes:0,giantsDown:0},t.flow.state!=="intro"&&t.setFlow("intro"),t.flow.t=0},t.setAssist=f=>{t.assistPct=Math.max(0,Math.min(i.rules.assist.capPct,f))},t.assistOffer=()=>{let f=i.rules.assist;return t.downsInRow<f.offerAfter?0:Math.min(f.capPct,f.startPct+f.perDownPct*(t.downsInRow-f.offerAfter))},t.step=(f={})=>{if(t.realTime+=Ni,t.flow.state==="pick")return;if(np(t,f.press),t.stopT>1e-6){t.stopT-=Ni;return}let x=1;t.slowT>0&&(x=t.slowScale,t.slowT-=Ni,t.slowT<=0&&(t.slowScale=1));let g=Ni*x;if(t.time+=g,t.flow.t+=g,ip(t,Ni),t.flow.state==="intro"&&t.flow.t>=(t.mode==="run"?n.intro:i.rules.flow.intro))if(t.mode==="lab")t.giant.state="approach",t.giant.think=.6,t.setFlow("fight"),t.runsStarted++;else{t.setFlow("fight"),t.runsStarted++;let y=t.resume;if(t.resume=null,y){for(let M of y.picks){let v=i.powers.cards.find(E=>E.id===M);v&&(sh(t.mods,v),t.run.picks.push(M))}t.run.resumedAt=y.stage,o(y.stage)}else o(0)}sp(t,g,f),(t.flow.state==="fight"||t.flow.state==="intro")&&t.giant&&op(t,t.giant,g),t.flow.state==="fight"&&(dp(t,g),fp(t,g),Wf(t,g),t.mode==="run"&&h(g))},t.hash=()=>{let f=p=>Math.round(p*1e3),x=t.hero,g=t.giant;return Gf(JSON.stringify([t.flow.state,f(t.time),f(x.x),f(x.z),f(x.face),x.hp,x.move&&x.move.id,g?[f(g.x),f(g.z),f(g.face),g.hp,f(g.balance),g.state,g.atk,g.topples]:null,t.foes.map(p=>[p.id,f(p.x),f(p.z),p.hp,p.state]),t.combo.hits,t.rng.state(),t.log.length,t.run&&t.run.stage]))},t.report=()=>{let f=t.log,x=f.flatMap(E=>E.combos).filter(E=>E.seq),g={};for(let E of x)g[E.seq]=(g[E.seq]||0)+1;let p=Object.entries(g).sort((E,T)=>T[1]-E[1])[0],y={};for(let E of x){let T=E.seq.split(">").slice(0,3).join(">");y[T]=(y[T]||0)+1}let M=Object.entries(y).sort((E,T)=>T[1]-E[1])[0],v=f.filter(E=>E.result==="won");return{version:3,mode:t.mode,...t.counterOn?{counter:!0}:{},runs:f.length,wins:v.length,firstWinAt:v.length?f.indexOf(v[0])+1:null,zeroHitWins:v.filter(E=>E.hitsTaken===0).length,runsStarted:t.runsStarted,topSequence:p?{seq:p[0],share:Math.round(100*p[1]/x.length)}:null,topOpening:M?{seq:M[0],share:Math.round(100*M[1]/x.length)}:null,skillCombos:x.length,perRun:f.map(E=>{var T,A;return{n:E.n,result:E.result,time:E.time,realSec:E.realSec,resumedAt:(T=E.resumedAt)!=null?T:null,stage:(A=E.stageName)!=null?A:null,heroHp:E.heroHp,giantHpPct:E.giantHpPct,hitsTaken:E.hitsTaken,topples:E.topples,crushes:E.crushes,perfects:E.perfects,hpAtStageEnd:E.hpAt||[],hitsBy:E.hitsBy||{},hitsByStage:E.hitsByStage||{},rolls:E.dodges,rollsPerMin:E.time>0?Math.round(E.dodges/(E.time/60)*10)/10:0,bestCombo:E.bestCombo,powers:E.powers||[],stageTimes:E.stageTimes||[],assistPct:E.assistPct,...t.counterOn?{counterWins:E.counterWins,counters:E.counters}:{}}})}},t.reset(),t}var BM={novice:{reaction:.4,miss:.3,lead:[.04,.45],plan:"mash",gap:.22,careful:0,counter:.25},mid:{reaction:.28,miss:.15,lead:[.03,.26],plan:"mixed",gap:.15,careful:.5,counter:.6},skilled:{reaction:.18,miss:.04,lead:[.02,.13],plan:"combo",gap:.1,careful:1,counter:.95},human:{reaction:.32,miss:.08,readMu:.84,readSd:.18,lead:[.03,.32],plan:"mixed",gap:.34,careful:.3,counter:.5}};function zM(i,e,t,n){if(t.kind==="circle")return nt(i,t)<=t.r+n;if(t.kind==="ring")return nt(i,e)<=t.r+n;let s=i.x-t.x,r=i.z-t.z,a=s*Math.sin(t.ang)+r*Math.cos(t.ang),o=Math.abs(s*Math.cos(t.ang)-r*Math.sin(t.ang));return a>-1&&a<t.len+1&&o<t.w/2+n}function gp(i,e,t){if(t.kind==="ring")return Mt(e,i);if(t.kind==="circle")return nt(i,t)>.2?Mt(t,i):Mt(e,i);let n=(i.x-t.x)*Math.cos(t.ang)-(i.z-t.z)*Math.sin(t.ang);return t.ang+(n>=0?-Math.PI/2:Math.PI/2)}var HM=i=>.5*(1+Math.tanh(.7978845608*(i+.044715*i*i*i)));function VM(i,e,t){if(e.src!==t||i.readMu==null)return i.miss;let n=e.age+e.left;return Math.max(i.miss,1-HM((n-i.readMu)/i.readSd))}function xp(i,e=1){let t=BM[i],n=Fo(e),s=new Map,r=0,a=!1,o=0,c=null,l=!1;return u=>{let h=u.giant,d=u.hero,m=[],f=0,x=0;if(u.time<o&&(s=new Map,r=0,a=!1),o=u.time,u.flow.state==="pick")return u.choose(Math.floor(n()*u.run.offer.length)),{mx:f,mz:x,press:m};if(u.flow.state!=="fight")return{mx:f,mz:x,press:m};let g=[];h&&h.state==="wind"&&g.push({key:`g${h.atk}@${(u.time-h.windAge).toFixed(2)}`,age:h.windAge,left:h.t,src:h,tg:h.tg});for(let _ of u.foes)_.state==="wind"&&_.tg&&g.push({key:`f${_.id}@${(u.time-(_.tg.dur-_.t)).toFixed(2)}`,age:_.tg.dur-_.t,left:_.t+(_.type==="slinger"?nt(_,d)/u.data.foes.slinger.shot.speed:.08),src:_,tg:_.tg});let p=null;for(let _ of g){if(_.age<t.reaction)continue;s.has(_.key)||s.set(_.key,{miss:n()<VM(t,_,h),lead:n.range(t.lead[0],t.lead[1]),done:!1});let b=s.get(_.key);b.miss||b.done||!zM(d,_.src,_.tg,.6)||(!p||_.left<p.left)&&(p={..._,p:b})}if(s.size>60&&(s=new Map([...s].slice(-20))),p&&p.left<=p.p.lead){let _=gp(d,p.src,p.tg);return p.p.done=!0,{mx:Math.sin(_),mz:Math.cos(_),press:["dodge"]}}if(h&&h.state==="active"&&!a&&nt(h,d)<h.radius+2.2&&(a=!0,n()>=t.miss)){let _=gp(d,h,h.tg||{kind:"ring"});return{mx:Math.sin(_),mz:Math.cos(_),press:["dodge"]}}if((!h||h.state!=="active")&&(a=!1),d.counterT>0&&h){let _=`${u.fight.n}:${u.fight.counterWins}`,b=u.data.moves.counter;if(c!==_&&(c=_,l=n()<(t.counter||0)),l&&u.data.rules.counter.window-d.counterT>=t.reaction*.5&&nt(d,h)-h.radius<b.reach+b.lunge)return l=!1,{mx:f,mz:x,press:["light"]}}if(p&&p.left<.5&&n()<t.careful)return{mx:f,mz:x,press:m};let y=gr(u);if(!y.length)return{mx:f,mz:x,press:m};let M=y.includes(h)?h:y.sort((_,b)=>nt(d,_)-nt(d,b))[0],v=nt(d,M);if(v-M.radius>1.5){let _=Mt(d,M);f=Math.sin(_),x=Math.cos(_)}if(u.time<r||v-M.radius>2.1)return{mx:f,mz:x,press:m};r=u.time+t.gap*n.range(.8,1.25);let E=_=>d.cd[_]<=0,T=h&&h.state==="toppled",A=T&&h.fallReady,C="light";if(t.plan==="mash"){if(T&&n()<.4)C="breaker";else if(n()<.22){let _=["sunder","tether","breaker"].filter(E);_.length&&(C=_[Math.floor(n()*_.length)])}}else if(t.plan==="mixed"){if(A&&n()<.75)C="breaker";else if(n()<.5){let _=["sunder","tether","breaker"].filter(b=>E(b)&&!(T&&b==="breaker"));_.length&&(C=_[Math.floor(n()*_.length)])}}else{let _=M.status.cracked.n,b=M.status.bound.n;A?C="breaker":T?C="light":_>=1&&b===0&&E("tether")?C="tether":(_>=1||b)&&E("breaker")?C="breaker":E("sunder")&&_<2&&(C="sunder")}return m.push(C),{mx:f,mz:x,press:m}}}var sa={value:0};function vp(i){sa.value=i}var rh=`
float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vn(p); p *= 2.03; a *= 0.5; } return s; }
`;function _p(i,e){let t=[];for(let n=0;n<=14;n++){let s=n/14;t.push(new Ce(e*Math.sin(Math.PI*Math.min(1,s*1.25+.05))*(1-s)**.55+.001,s*i))}return new vo(t,18)}function yp(i,e,t){return new Zt({uniforms:{uT:sa,uPh:{value:e},uK:t,uInner:{value:i?1:0}},vertexShader:`
      uniform float uT, uPh; varying vec2 vUv; varying float vRim;
      void main(){
        vUv = uv; vec3 p = position; float y = uv.y;
        float sw = sin(y * 5.0 - uT * 7.0 + uPh) * 0.09 + sin(y * 9.0 - uT * 13.0 + uPh * 2.0) * 0.04;   // sways more toward the tip
        p.x += sw * y * 1.4; p.z += cos(y * 4.0 - uT * 6.0 + uPh) * 0.06 * y;
        p.y *= 1.0 + sin(uT * 11.0 + uPh) * 0.06 + sin(uT * 17.3 + uPh * 1.7) * 0.04;                       // flicker
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vec3 n = normalize(normalMatrix * normal); vRim = abs(dot(n, normalize(-mv.xyz)));
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:rh+`
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
      }`,transparent:!0,depthWrite:!1,blending:i?yn:Pn,side:Et})}function GM(i,e,t,n){let s=new Dn(e,i);s.translate(0,i/2,0);let r=new Zt({uniforms:{uT:sa,uPh:{value:t},uK:n},vertexShader:`
      varying vec2 vUv; void main(){ vUv = uv;
        vec4 c = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);                    // spherical billboard around the base
        vec3 sx = vec3(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz), 1.0);
        c.xy += position.xy * sx.xy; gl_Position = projectionMatrix * c; }`,fragmentShader:rh+`
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
      }`,transparent:!0,depthWrite:!1,side:Et}),a=new Le(s,r);return a.frustumCulled=!1,a.renderOrder=5,a}function WM(i,e,t,n,s){let r=new bt,a=new Float32Array(i);for(let l=0;l<i;l++)a[l]=(l+.37)/i;r.setAttribute("position",new wt(new Float32Array(i*3),3)),r.setAttribute("aSeed",new wt(a,1));let o=new Zt({uniforms:{uT:sa,uPh:{value:n},uH:{value:e},uR:{value:t},uK:s,uPx:{value:1}},vertexShader:`
      attribute float aSeed; uniform float uT, uPh, uH, uR, uPx; varying float vL;
      void main(){
        float s = aSeed * 17.31 + uPh, life = fract(uT * (0.45 + fract(s) * 0.4) + aSeed);
        vec3 p = vec3(sin(s * 6.1 + life * 3.0) * uR * (0.4 + life), life * uH * 2.2, cos(s * 4.7 + life * 2.6) * uR * (0.4 + life));
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vL = life;
        gl_PointSize = uPx * (1.0 - life) * 0.09 * 600.0 / -mv.z; gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uK; varying float vL;
      void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)) * (1.0 - vL) * uK; gl_FragColor = vec4(vec3(1.0, 0.62, 0.2) * a, a); }`,transparent:!0,depthWrite:!1,blending:yn}),c=new sr(r,o);return c.frustumCulled=!1,c.userData.px=o.uniforms.uPx,c}function Mp(i=1,e=.3,{sparks:t=10,ph:n=Math.random()*10}={}){let s=new st,r={value:1},a=GM(i*1.1,e*2.6,n,r),o=new Le(_p(i*.8,e),yp(!1,n,r));o.renderOrder=4;let c=new Le(_p(i*.5,e*.55),yp(!0,n+3.1,r));return c.renderOrder=6,s.add(o,a,c),t&&s.add(WM(t,i,e,n,r)),s.userData.k=r,s}function ah(i,e){let t={value:0},n=new Zt({uniforms:{uT:sa,uOpen:t},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:rh+`
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
      }`,transparent:!0,depthWrite:!1,side:Et}),s=new Le(new Dn(i,e),n);return s.userData.setOpen=(r,a=.016)=>{t.value+=((r?1:0)-t.value)*Math.min(1,a*3)},s}function bp(i,e,t){let n=new st,s=e*9301+49297,r=()=>(s=(s*9301+49297)%233280,s/233280),a=new rr(1,2),o=7+Math.floor(r()*4);for(let l=0;l<o;l++){let u=l/(o-1)-.5,h=1-Math.abs(u)*1.1,d=new Le(a,t),m=i*(.45+h*.55)*(.8+r()*.4);d.position.set(u*i*3+(r()-.5)*i*.4,m*.25+r()*i*.25*h,(r()-.5)*i*.9),d.scale.set(m,m*.82,m*.9),n.add(d)}let c=new Le(a,t);return c.scale.set(i*1.9,i*.38,i*.9),c.position.y=-i*.05,n.add(c),n.userData.craft="cloud",n}function Sp(i){let e=new Map,t=new Map,n=i.clone();return wp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function wp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)wp(i.children[n],e.children[n],t)}var gt={sky:["#8fc6f7","#ffd0b0","#ffb38a"],outline:"#3a2b25",floor:"#eadfc8",floor2:"#d9c9a6",trim:"#b88f5a",tower:"#cdb994",pillar:"#f1e8d6",golem:"#c9b38c",golem2:"#a48a63",moss:"#7fae5a",core:"#5fd8ff",eye:"#ffb84a",sun:"#fff0d2",amb:"#ffe2c6",slime:"#6fdcc4",shield:"#8fa6d9",sprout:"#9ad16a",petal:"#ff8fb1",warn:"#ff4b3a",portal:"#ffd36b",wolf:"#5d5a8f",wolf2:"#3f3c6b",wolfEye:"#ff5c7a",dusk:["#5b6bc8","#c58ab8","#ff9a72"]},os=null,Gn=()=>{if(os)return os;let i=[110,185,255],e=new Uint8Array(i.length*4);return i.forEach((t,n)=>{e[n*4]=e[n*4+1]=e[n*4+2]=t,e[n*4+3]=255}),os=new nr(e,i.length,1),os.minFilter=os.magFilter=Ut,os.needsUpdate=!0,os},oh=new Map,Ui=i=>(oh.has(i)||oh.set(i,new jt({color:i,gradientMap:Gn()})),oh.get(i)),XM=new At({color:gt.outline,side:Xt});function ki(i,e,t=0,n=0,s=0,r=!0,a=!0){let o=new Le(i,e);if(o.position.set(t,n,s),o.castShadow=a,r){i.computeBoundingSphere();let c=new Le(i,XM);c.scale.setScalar(1+.035/Math.max(i.boundingSphere.radius,.08)),o.add(c)}return o}function Go(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new yo(n);return s.colorSpace=Tt,s}var ch=Go(64,64,i=>{let e=i.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,64,64)});function Oi(i,e,t=1){let n=new tr(new is({map:ch,color:i,blending:yn,depthWrite:!1,transparent:!0,opacity:t}));return n.scale.setScalar(e),n}function Tp(i,e){let t=i.scene.clone(!0);t.traverse(o=>{if(!o.isMesh)return;let c=o.material,l=c.emissive&&c.emissive.getHex()!==0;o.material=new jt({color:c.color,gradientMap:Gn(),emissive:l?c.emissive:c.color,emissiveIntensity:l?1.1:.16,transparent:c.transparent,opacity:c.opacity}),o.castShadow=!0});let n=new kt().setFromObject(t),s=n.getSize(new P),r=e/s.y;t.scale.multiplyScalar(r),t.position.set(-(n.min.x+s.x/2)*r,-n.min.y*r,-(n.min.z+s.z/2)*r);let a=new st;return a.add(t),a}var lh=(i,e)=>i.getObjectByName(e)||null,uh=i=>{let e=new Le(new Ri(i,24),new At({color:"#3a2a20",transparent:!0,opacity:.25,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.03,e};function ra(i,e){let t=i.scene.clone(!0),n=new kt().setFromObject(t),s=n.getSize(new P),r=e/s.y;t.scale.multiplyScalar(r),t.position.set(-(n.min.x+s.x/2)*r,-n.min.y*r,-(n.min.z+s.z/2)*r),t.traverse(o=>{if(!o.isMesh)return;let c=o.material,l=c.transparent||c.alphaTest>0;o.material=new jt({map:c.map,gradientMap:Gn(),emissive:"#ffffff",emissiveMap:c.map,emissiveIntensity:.25,alphaTest:l?.5:0,side:l?Et:_n}),o.castShadow=!0,o.receiveShadow=!l});let a=new st;return a.add(t),a}function Ep(i,e,t={},n=8.2){let s=I=>{let U=new It(I);return U.colorSpace=Tt,U.anisotropy=4,U.needsUpdate=!0,U};i.background=t.skyDawn?s(t.skyDawn):Go(4,256,(I,U,N)=>{let D=I.createLinearGradient(0,0,0,N);D.addColorStop(0,gt.sky[0]),D.addColorStop(.55,gt.sky[1]),D.addColorStop(1,gt.sky[2]),I.fillStyle=D,I.fillRect(0,0,U,N)}),i.add(new To(gt.amb,gt.floor2,1.25));let r=new ur(gt.sun,2.6);r.position.set(-6,12,7),e.shadows&&(r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:40}),r.shadow.bias=-8e-4,r.shadow.normalBias=.03),i.add(r);let a=new st;i.add(a);let o=Go(512,512,(I,U)=>{I.fillStyle=gt.floor,I.fillRect(0,0,U,U);let N=U/2;I.strokeStyle=gt.floor2,I.lineWidth=7;for(let D of[.12,.26,.4,.47])I.beginPath(),I.arc(N,N,D*U,0,7),I.stroke();I.lineWidth=4;for(let D=0;D<12;D++){let q=D*Math.PI/6;I.beginPath(),I.moveTo(N+Math.cos(q)*.26*U,N+Math.sin(q)*.26*U),I.lineTo(N+Math.cos(q)*.47*U,N+Math.sin(q)*.47*U),I.stroke()}}),c=n+.4,l=new Le(new Ri(c,64),new jt({map:t.floor?s(t.floor):o,gradientMap:Gn()}));l.rotation.x=-Math.PI/2,l.receiveShadow=!0,a.add(l);let u=c+1.35,h=c+.68,d=new Le(new Jt(c-.05,u,72,1),new jt({color:"#c9a273",gradientMap:Gn()}));d.rotation.x=-Math.PI/2,d.position.y=-.02,d.receiveShadow=!0,a.add(d),a.add(ki(new Nn(u+.12,u+.12,.5,64,1,!0),Ui(gt.trim),0,-.27,0,!1,!1)),a.add(ki(new Nn(c-.3,c-.9,40,24,1,!0),Ui(gt.tower),0,-20.4,0,!1,!1));let m=[];for(let I=0;I<7;I++){let U=Math.PI*(1.08+I*.14),N=Math.cos(U)*h,D=Math.sin(U)*h,q=I%3===1?2.6:4.6,O=I%3===1,te=O&&t.pillarCracked||t.pillar;if(te){let ne=ra(te,4.8);if(!O&&I%3===0&&t.pillarClaw){let oe=ra(t.pillarClaw,4.8);oe.visible=!1,oe.rotation.y=-Math.atan2(-N,-D),ne.add(oe),m.push([ne.children[0],oe])}if(O&&t.bannerTorn){ne.updateMatrixWorld(!0);let oe=[];if(ne.traverse(he=>{he.isMesh&&he.material.alphaTest>0&&oe.push(he)}),oe.length){let he=new kt;oe.forEach(J=>he.expandByObject(J));let ce=he.getSize(new P),G=ra(t.bannerTorn,ce.y);G.position.set((he.min.x+he.max.x)/2,he.min.y,he.max.z+.01),G.visible=!1,ne.add(G),oe.forEach(J=>m.push([J,null])),m.push([null,G])}}ne.position.set(N,0,D),ne.rotation.y=Math.atan2(-N,-D),ne.userData.pillar=!0,a.add(ne);continue}a.add(ki(new Nn(.42,.5,q,10),Ui(gt.pillar),N,q/2,D)),a.children[a.children.length-1].userData.pillar=!0,a.add(ki(new un(1.25,.32,1.25),Ui(gt.trim),N,q+.16,D)),a.add(ki(new un(1.3,.3,1.3),Ui(gt.trim),N,.15,D,!0,!1))}if(t.wall){let I=s(t.wall);I.wrapS=es;let U=new jt({color:"#d2aa78",map:I,gradientMap:Gn(),side:Et}),N=new jt({color:"#fbe9c8",gradientMap:Gn(),side:Et}),D=c+.15,q=.34,O=t.wall.width/t.wall.height,te=(ne,oe,he)=>{let ce=oe-ne,G=Math.ceil(ce*20),J=Math.max(1,Math.round(D*ce/(he*O)));for(let se of[D+q/2,D-q/2]){let ae=new Nn(se,se,he,G,1,!0,ne,ce),ue=ae.attributes.uv;for(let He=0;He<ue.count;He++)ue.setX(He,ue.getX(He)*J);let ge=new Le(ae,U);ge.position.y=he/2,ge.receiveShadow=!0,a.add(ge)}let Y=new Le(new Jt(D-q/2,D+q/2,G,1,Math.PI/2-oe,ce),N);Y.rotation.x=Math.PI/2,Y.position.y=he,a.add(Y);for(let se of[ne,oe]){let ae=new Le(new Dn(q,he),N);ae.position.set(D*Math.sin(se),he/2,D*Math.cos(se)),ae.rotation.y=se+Math.PI/2,a.add(ae)}};te(-Math.PI/2,Math.PI/2,.5),te(Math.PI/2,Math.PI-.34,1),te(Math.PI+.34,Math.PI*1.5,1)}let f=[],x=1;if(t.brazier)for(let[I,U]of[[-Math.PI/2,h],[Math.PI/2,h],[-.3*Math.PI,h],[.3*Math.PI,h]]){let N=U*Math.sin(I),D=U*Math.cos(I),q=ra(t.brazier,1);q.position.set(N,0,D),a.add(q);let O=Mp(1.15,.28,{sparks:14,ph:f.length*2.7});O.position.set(N,.9,D),a.add(O);let te=Oi("#ff9a3c",1.8,.3);te.position.set(N,1.3,D),a.add(te),f.push({f:O,h:te,ph:f.length*1.9})}let g=new jt({color:"#fff4e6",gradientMap:Gn(),emissive:"#ffe3cf",emissiveIntensity:.45}),p=[];for(let[I,U,N,D]of[[-14,-3,-12,3],[-9,-4.5,-15,2.2],[13,-2.5,-14,3.4],[17,-5,-6,2.4],[-18,-5,-4,2.6],[4,-6,-20,3]]){let q=bp(D*.75,p.length+3,g);q.position.set(I,U,N),q.rotation.y=(p.length%3-1)*.4,i.add(q),p.push({cl:q,x:I,ph:p.length*1.3})}let y=Oi("#fff0c0",26,.9);y.position.set(9,6,-30),i.add(y);let M=new st;M.position.set(0,0,-(n-.3)),a.add(M);let v,E;t.gate?(M.add(ra(t.gate,5.2)),v=ah(1.75,4.05),v.position.set(0,.5+2.02,.45),E=Oi(gt.portal,5,0),E.position.set(0,2.4,.8)):(M.add(ki(new un(.7,4.4,.7),Ui(gt.pillar),-1.7,2.2,0),ki(new un(.7,4.4,.7),Ui(gt.pillar),1.7,2.2,0),ki(new un(4.6,.8,.9),Ui(gt.trim),0,4.7,0)),v=ah(2.7,4.2),v.position.set(0,2.15,0),E=Oi(gt.portal,5,0),E.position.set(0,2.3,.4)),M.add(v,E);let T=i.children.find(I=>I.isHemisphereLight),A=i.background,C=t.skyDusk?s(t.skyDusk):Go(4,256,(I,U,N)=>{let D=I.createLinearGradient(0,0,0,N);D.addColorStop(0,gt.dusk[0]),D.addColorStop(.55,gt.dusk[1]),D.addColorStop(1,gt.dusk[2]),I.fillStyle=D,I.fillRect(0,0,U,N)}),_=[];a.traverse(I=>{I.userData.pillar&&_.push(I)});for(let I of _){let U=new P;I.getWorldPosition(U),I.userData.at=U,I.userData.fade=1,I.userData.mats=[],I.traverse(N=>{N.isMesh&&(N.material=N.material.clone(),N.material.userData.op0=N.material.opacity,I.userData.mats.push(N.material))})}let b=.75,L=4.9,H=(I,U,N,D,q)=>{let O=I.position,te=U.userData.at,ne=N-O.x,oe=D-O.y,he=q-O.z,ce=Math.hypot(ne,oe,he),G=ne/ce,J=oe/ce,Y=he/ce,se=O.x-te.x,ae=O.z-te.z,ue=G*G+Y*Y,ge=2*(se*G+ae*Y),He=se*se+ae*ae-b*b,Ve=ge*ge-4*ue*He;if(Ve<0||ue<1e-9)return!1;let je=(-ge-Math.sqrt(Ve))/(2*ue);if(je<=0||je>=ce)return!1;let k=O.y+J*je;return k>=0&&k<=L};return{sun:r,tower:a,pillars:_,fadePillars(I,U,N){let D=1-Math.exp(-N*10);for(let q of _){let O=U.some(([ne,oe,he])=>H(I,q,ne,oe,he))?.28:1,te=q.userData.fade+=(O-q.userData.fade)*D;for(let ne of q.userData.mats){let oe=te<.99;ne.transparent=oe||ne.userData.op0<1||ne.alphaTest>0,ne.opacity=ne.userData.op0*te,ne.depthWrite=!oe}}},setZone(I){x=I===2?1.25:1;for(let[U,N]of m)U&&(U.visible=I!==2),N&&(N.visible=I===2);g.color.set(I===2?"#c9b3e0":"#fff4e6"),g.emissive.set(I===2?"#8a6fae":"#ffe3cf"),i.background=I===2?C:A,T.color.set(I===2?"#c9b6ff":gt.amb),r.color.set(I===2?"#ffc79a":gt.sun),r.intensity=I===2?2.2:2.6},setGate(I,U=0){var D;let N=Math.min(.1,Math.max(0,U-((D=this._gt)!=null?D:U)));this._gt=U,v.userData.setOpen(I,N),E.material.opacity=I?.55:0},gatePos:new P(0,0,-(n-.3)),tick(I){for(let U of p)U.cl.position.x=U.x+Math.sin(I*.05+U.ph)*1.2;for(let{f:U,h:N,ph:D}of f){let q=1+Math.sin(I*11+D)*.08+Math.sin(I*17.3+D*2)*.05;U.userData.k.value=x,U.scale.setScalar(x**.5),N.material.opacity=(.24+Math.sin(I*9+D)*.05)*x}}}}function hh(i,e,t=-Math.PI/2){let n=new st,s=new st,r=Sp(i.scene),a=new kt().setFromObject(r),o=a.getSize(new P),c=e/o.y;r.scale.multiplyScalar(c),r.position.set(-(a.min.x+o.x/2)*c,-a.min.y*c,-(a.min.z+o.z/2)*c);let l=new st;l.rotation.y=t,l.add(r),s.add(l),n.add(s);let u=[];r.traverse(d=>{if(d.isMesh){let m=new jt({map:d.material.map,gradientMap:Gn(),transparent:!0,side:d.material.side,emissive:"#ffffff",emissiveMap:d.material.map,emissiveIntensity:.3});d.material=m,d.frustumCulled=!1,u.push(m)}});let h=new Le(new Ri(.42,20),new At({color:"#3a2a20",transparent:!0,opacity:.25,depthWrite:!1}));return h.rotation.x=-Math.PI/2,h.position.y=.02,n.add(h),n.userData={body:s,mats:u,H:e,anim:qM(r,i.animations||[])},n}function qM(i,e){let t=new Co(i),n={};for(let c of e)n[c.name]=t.clipAction(c);let s=null,r=null,a=!1,o=(c,l)=>{let u=n[c];return u?(s===u&&!l||(u.reset(),u.setLoop(l?fu:pu,1/0),u.clampWhenFinished=!!l,u.enabled=!0,u.setEffectiveWeight(1),u.play(),s&&s!==u&&s.crossFadeTo(u,l?.06:.15,!1),s=u),!0):!1};return t.addEventListener("finished",c=>{c.action===r&&(r=null)}),{has:c=>!!n[c],current:()=>s?s.getClip().name:null,once(c){o(c,!0)&&(r=n[c])},hold(c,l){let u=n[c];return u?(s!==u&&o(c,!0),r=null,u.paused=!0,u.time=Math.min(.999,Math.max(0,l))*u.getClip().duration,a=!0,!0):!1},update(c,l,u=1){if(Number.isFinite(c)||(c=0),Number.isFinite(t.time)||t.setTime(0),a){a=!1,t.update(c);return}s&&s.paused&&(s.paused=!1),r||(o(l,!1),n[l]&&(n[l].timeScale=u)),t.update(c)}}}function Ap(i,e,t,n=!1){if(i.userData.weapon&&(i.userData.weapon.removeFromParent(),i.userData.weapon=null),!e)return!1;let s=null;if(i.traverse(c=>{c.isBone&&/forearm\.?R$/i.test(c.name)&&(s=c)}),!s)return!1;let r=e.scene.clone(!0);r.traverse(c=>{if(!c.isMesh)return;let l=c.material,u=l.emissive&&l.emissive.getHex()!==0;c.material=new jt({color:l.color,gradientMap:Gn(),emissive:u?l.emissive:"#000000",emissiveIntensity:u?1.1:0}),c.castShadow=!0,c.frustumCulled=!1});let a=new kt().setFromObject(r);r.scale.setScalar(t/(a.max.y-a.min.y)),n&&(r.rotation.x=Math.PI),i.updateMatrixWorld(!0);let o=new st;return o.add(r),o.scale.setScalar(1/s.getWorldScale(new P).x),o.position.set(0,s.position.length()*.92,0),s.add(o),i.userData.weapon=o,!0}function Rp(i){let e=hh(i,1.75),t=new Le(new Mo(.16,.38,3),new At({color:"#f2b33d",transparent:!0,opacity:.85,depthWrite:!1}));t.userData.craft="facing arrow",t.rotation.x=Math.PI/2,t.position.set(0,.04,.85);let n=new st;return n.add(t),e.add(n),e.userData.arrow=n,e}function _r(i,e,t){let n=new st,s=new At({color:gt.warn,transparent:!0,opacity:.25,depthWrite:!1}),r=new At({color:gt.warn,transparent:!0,opacity:.55,depthWrite:!1}),a;if(i==="circle")n.add(new Le(new Ri(e,40),s)),n.add(new Le(new Jt(e*.93,e,48),r)),a=new Le(new Ri(e,40),r),n.add(a);else if(i==="ring")n.add(new Le(new Jt(t,e,48),s)),n.add(new Le(new Jt(e*.95,e,48),r)),a=new Le(new Jt(t,e,48),r),n.add(a);else{let c=new Le(new Dn(e,t),s);c.position.y=t/2,n.add(c),a=new Le(new Dn(e,t),r),a.position.y=t/2,n.add(a)}n.rotation.x=-Math.PI/2,n.position.y=.03;let o=new st;return o.add(n),o.userData={fill:a,kind:i,len:t},o}function dh(i,e){if(!i)return;let t=i.userData.fill,n=Math.max(.001,e);i.userData.kind==="lane"?(t.scale.set(1,n,1),t.position.y=i.userData.len*n/2):t.scale.set(n,n,1)}function aa(i){i&&(i.removeFromParent(),i.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}))}var Ip=i=>!!(i&&i.animations&&i.animations.length);function Pp(i,e,t){if(Ip(i)){let s=hh(i,e);for(let r of s.userData.mats)r.emissiveIntensity=.1;return{root:s,anim:s.userData.anim,mats:s.userData.mats}}let n=Tp(i,e);return $M(n,t),{root:n,anim:null}}var en=i=>i*i*(3-2*i),fh=i=>Math.max(0,Math.min(1,i)),YM={light1:[[-40,-80],[-80,60]],light2:[[-80,60],[-40,-80]],light3:[[-165,-10],[-45,0]],sunder:[[-175,-10],[-35,5]],tether:[[-20,0],[-95,0]],counter:[[-160,-45],[-50,45]]},Cp=Math.PI/180;function Lp(i,e){let t=Rp(i),n=t.userData;e&&Ap(t,e,1.05);let s=0,r=0,a=null,o=null,c=null;t.traverse(x=>{x.isBone&&/upperarm\.?R$/i.test(x.name)&&!c&&(c=x)});let l=c&&c.quaternion.clone(),u=c&&c.quaternion.clone(),h=c&&c.position.clone().set(1,0,0),d=c&&c.position.clone().set(0,0,1),m=null,f=null;return{obj:t,update(x,g,p){let y=x.hero,M=n.body;if(t.position.set(y.x,0,y.z),o===null||!(g>0))o=y.face;else{let T=Math.atan2(Math.sin(y.face-o),Math.cos(y.face-o));o+=T*(1-Math.exp(-g*22))}t.rotation.y=o,M.position.y=0,M.rotation.set(0,0,0),M.scale.set(1,1,1);let v=y.moving&&!y.move?"run":"idle";if(y.move){let T=p[y.move.id],A=y.move.t*60,C=T.startup+T.active,_=A<T.startup?.45*A/T.startup:A<C?.45+.15*(A-T.startup)/T.active:.6+.4*fh((A-C)/T.recovery);n.anim.hold(n.anim.has(T.clip)?T.clip:"attack",_);let b=YM[y.move.id];if(b){let[L,H]=b,I=(U,N,D)=>[U[0]+(N[0]-U[0])*D,U[1]+(N[1]-U[1])*D];m=_<.3?I([0,0],L,en(_/.3)):_<.45?I(L,H,en((_-.3)/.15)):_<.6?H:I(H,[0,0],en((_-.6)/.4))}if(y.move.id==="light2"&&(M.rotation.y=.5*Math.sin(Math.PI*_)),y.move.id==="breaker"){let L=A<T.startup?Math.sin(Math.PI*A/T.startup):0;M.position.y=L*.7,M.rotation.x=.35*L}if(y.move.id==="counter"){let L=A<T.startup?Math.sin(Math.PI*A/T.startup):0;M.position.y=L*.9,M.rotation.x=-.35*L}if(y.move.id==="giantfall"){let L=A<T.startup?Math.sin(Math.PI*.5*A/T.startup):Math.max(0,1-(A-T.startup)/6);M.position.y=L*1.6,M.rotation.x=-.6*L}y.move.id!==a&&(s=0)}else if(y.dodge){let T=fh(y.dodge.t*60/p.dodge.frames);n.anim.has("roll")?(n.anim.hold("roll",T),M.rotation.x=Math.sin(Math.PI*T)*.5,M.position.y=Math.sin(Math.PI*T)*.15):(s=T*Math.PI*2,M.rotation.y=-s,M.scale.set(1.08,.82,1.08),M.position.y=Math.sin(Math.PI*T)*.12),v="run"}a=y.move?y.move.id:null,r=y.hp<=0?Math.min(1,r+g*2.5):0,r>0&&(M.rotation.x=-Math.PI/2*en(r),M.position.y=.25*r);let E=y.hurtT>0&&Math.floor(y.hurtT*20)%2===0;for(let T of n.mats)T.opacity=E?.45:1;n.arrow.visible=x.flow.state==="fight",y.move?n.anim.update(g,v):n.anim.update(g,v,v==="run"?1.2:1),c&&!f&&!y.move&&(f=c.quaternion.clone()),c&&f&&m&&(l.setFromAxisAngle(d,m[0]*Cp),u.setFromAxisAngle(h,m[1]*Cp),c.quaternion.copy(f).multiply(l).multiply(u)),m=null},hurt(){n.anim.once("hurt")},win(){n.anim.once("win")}}}var $M=(i,e)=>{if(!e)return;let t=new Te(e);i.traverse(n=>{n.isMesh&&(n.material.color.multiply(t),n.material.emissive&&n.material.emissive.multiply(t))})};function ph(i,e,t=5.4,n=null,s="hollen"){let r=new st,a=new st,o=new st;r.add(a,uh(t*.3)),a.add(o);let c=Pp(i,t,n),l=c.root,u=c.anim;o.add(l);let h=ce=>u?null:lh(l,ce),d=h("upper"),m=h("armL"),f=h("armR"),x=h("head"),g=h("legL"),p=h("legR");r.updateMatrixWorld(!0);for(let ce of[m,f,x])ce&&d&&d.attach(ce);let y=new Map;for(let ce of[d,m,f,x,g,p])ce&&y.set(ce,ce.rotation.clone());let M=[];l.traverse(ce=>{ce.isMesh&&ce.material.emissive&&M.push({m:ce.material,e:ce.material.emissive.clone(),ei:ce.material.emissiveIntensity})}),r.userData.rigged=!!u;let v=[[0,.62,.55],[-.45,.78,.35],[.42,.7,.42]].map(([ce,G,J])=>{let Y=Oi("#ff7a2a",.9,0);return Y.position.set(ce*t*.32,G*t,J*t*.32),o.add(Y),Y}),E=new At({color:"#7fe3ff",transparent:!0,opacity:0,depthWrite:!1,blending:yn}),T=[-.38,.38].map(ce=>{let G=new Le(new ar(.42,.05,6,28),E);return G.rotation.x=Math.PI/2,G.position.set(ce*t*.22,.5,0),o.add(G),G}),A=[0,1,2,3].map(()=>{let ce=Oi("#ffe48a",.45,0);return o.add(ce),ce});u||(r.userData.placeholder=`${s}: stand-in Stone Guardian parts (art/boss-guardian.glb) until art/giant-${s}.glb loads`);for(let ce of[...v,...A,...T])ce.userData.craft="giant status light";let C=0,_=null,b=null,L=0,H=0,I=0,U=0,N=0,D=9,q="",O=0,te=0,ne=0,oe=new P,he=(ce,G=0,J=0,Y=0)=>{if(!ce)return;let se=y.get(ce);ce.rotation.set(se.x+G,se.y+J,se.z+Y)};return{obj:r,get tg(){return _},get heals(){return C},hit(ce,G){I=.06,U=Math.min(.22,.05+(Number.isFinite(ce.gain)?ce.gain:0)*.006+(ce.move==="breaker"?.08:0)),N=Number.isFinite(G)?G:0},strike(){D=0},update(ce,G,J){let Y=ce.giant&&ce.giant.id===s?ce.giant:null;if(r.visible=!!Y,!Y)return _&&(aa(_),_=null,b=null),{struckT:D};let se=ce.data.giants[Y.id];Y.state!==q?(q=Y.state,O=0):O+=G,r.position.set(Y.x,0,Y.z),o.rotation.y=Y.face,D+=G,I-=G,U=Math.max(0,U-G*1.6),te+=G;let ae=Y.state==="approach"||Y.state==="active";L+=G*(Y.state==="active"?9:ae?3.2:0);let ue=ae?Math.sin(L)*(Y.state==="active"?.55:.3):0;he(g,ue),he(p,-ue);let ge=0,He=0,Ve=0,je=[0,0,0],k=[0,0,0],Ht=0,Ke=0,Fe=Y.atk,Re=Y.tg?Y.tg.k:0;if(Y.state==="wind"&&Fe==="slam"){let K=en(Re);je=[-2.7*K,0,.2*K],k=[-2.7*K,0,-.2*K],ge=-.3*K}else if(Y.state==="wind"&&Fe==="sweep"){let K=en(Re);He=1.1*K,k=[-1.2*K,0,-1.2*K],je=[0,0,.5*K]}else if(Y.state==="wind"&&Fe==="charge"){let K=en(Re);ge=.45*K,Ht=.25*K,je=[.8*K,0,0],k=[.8*K,0,0]}else if(Y.state==="active")ge=.6,je=[1,0,0],k=[1,0,0];else if(Y.state==="open"){let K=se.attacks[Fe]||{},Ne=fh(1-Y.t/Math.max(.01,K.open||1));if(Fe==="slam"){let ie=Math.min(1,O/.08);ge=.55*ie*(1-en(Ne)),je=[(-2.7+3.4*ie)*(1-en(Ne)),0,0],k=je.slice(),Ht=.35*ie*(1-en(Ne))}else Fe==="sweep"?(He=(1.1-2.5*Math.min(1,O/.1))*(1-en(Ne)),k=[-1.2*(1-en(Ne)),0,-1.2*(1-en(Ne))]):ge=.35*(1-en(Ne))}else if(Y.state==="roar"){let K=Math.sin(Math.min(1,O/.3)*Math.PI/2);ge=-.35*K,je=[-.6*K,0,1.3*K],k=[-.6*K,0,-1.3*K],Ke=Math.sin(J*40)*.06*K}let ut=Y.balMax?Y.balance/Y.balMax:0,Pe=ut*ut*.09;if(Ve+=Math.sin(J*3.1)*Pe,ge+=Math.sin(J*2.3+1)*Pe*.6,ge-=U*Math.cos(N-Y.face),Ve+=U*Math.sin(N-Y.face)*.6,he(d,ge,He,Ve),he(m,...je),he(f,...k),he(x,Ke),u){let K=se.attacks[Fe]||{},Ne=Fe==="sweep";Y.state==="wind"?u.hold(Ne?"windup2":"windup",Fe==="charge"?Re*.6:Re):Y.state==="open"&&O<(K.open||1)*.6?u.hold(Ne?"strike2":"strike",Math.min(1,O/.25)):Y.state==="roar"&&u.hold("windup2",Math.min(1,O/.4)),u.update(G,Y.state==="toppled"||Y.state==="fallen"||Y.state==="getup"?"dizzy":ae?"run":"idle",Y.state==="active"?2.2:1),l.rotation.z=Ve,l.rotation.x=ge*.5}o.position.y=-Ht,Y.state==="toppled"?H=Math.min(1,H+G/.45):Y.state==="getup"?H=Math.max(0,1-O/(ce.data.rules.topple.getup||.9)):Y.state==="fallen"?(H=Math.min(1,H+G/1.1),ne=Math.min(1,ne+G/3)):H=Math.max(0,H-G*3);let R=Y.state==="fallen"?1.45:1.2,S=Y.state==="toppled"||Y.state==="fallen"?H*H:en(H),V=Y.state==="toppled"&&H>=1?Math.max(0,Math.sin(Math.min(1,(O-.45)/.35)*Math.PI))*.08:0,j=Y.toppleDir;oe.set(Math.cos(j),0,-Math.sin(j)),a.quaternion.setFromAxisAngle(oe,S*R-V),a.position.y=-1.1*S,S>0&&(he(g,-.9*S),he(p,-.7*S));let ee=Y.status.cracked.n,Z=Y.status.bound.n;for(let K of M)I>0?(K.m.emissive.copy(K.e).lerp(new Te("#fff4dc"),.6),K.m.emissiveIntensity=K.ei+.35):ee>0?(K.m.emissive.copy(K.e).lerp(new Te("#ff6a1a"),.25*ee*(.7+.3*Math.sin(J*6))),K.m.emissiveIntensity=K.ei+.12*ee):ne>0?(K.m.emissive.copy(K.e).lerp(new Te("#ffe8a8"),.4*ne),K.m.emissiveIntensity=K.ei):(K.m.emissive.copy(K.e),K.m.emissiveIntensity=K.ei);v.forEach((K,Ne)=>{K.material.opacity=Ne<ee*2-(ee===2?0:1)?.7+.3*Math.sin(J*7+Ne):0}),E.opacity=Z?.55+.3*Math.sin(J*8):0,T.forEach((K,Ne)=>{K.position.y=.5+.06*Math.sin(J*4+Ne*2)});let Me=Y.state==="toppled";return A.forEach((K,Ne)=>{let ie=J*3+Ne*Math.PI/2;K.position.set(Math.sin(ie)*.9,t*.92,Math.cos(ie)*.9),K.material.opacity=Me?.9:0}),((Y.tg?Y.tg.kind:null)!==b||_&&!Y.tg)&&(aa(_),_=null,b=null),Y.tg&&!_&&(_=Y.tg.kind==="circle"?_r("circle",Y.tg.r):Y.tg.kind==="ring"?_r("ring",Y.tg.r,Y.tg.inner):_r("lane",Y.tg.w,Y.tg.len),_.userData.craft="telegraph",b=Y.tg.kind,e.add(_)),_&&(_.position.set(Y.tg.x,0,Y.tg.z),b==="lane"&&(_.rotation.y=Y.tg.ang+Math.PI),dh(_,Y.tg.k)),[r.position.x,r.position.z,o.rotation.y,o.position.y,l.rotation.x,l.rotation.z,a.quaternion.x,a.quaternion.y,a.quaternion.z,a.quaternion.w,a.position.y].every(Number.isFinite)||(C++,U=0,N=0,H=0,r.position.set(Y.x||0,0,Y.z||0),o.rotation.y=Y.face||0,o.position.y=0,l.rotation.set(0,0,0),a.quaternion.identity(),a.position.y=0),{struckT:D}}}}function Dp(i,e,t={}){let n=new Map,s=new Map,r=new rr(.26,0),a=new jt({color:"#8d8476"});function o(l,u){let h=new st,d=new st;h.add(d,uh(u.radius*1.1));let m=t[l.type]||i,f=Pp(m,u.height,Ip(m)?null:u.tint),x=f.root;d.add(x);let g=_=>f.anim?null:lh(x,_),p=g("upper"),y=g("armL"),M=g("armR"),v=g("legL"),E=g("legR");h.updateMatrixWorld(!0);for(let _ of[y,M,g("head")])_&&p&&p.attach(_);let T=new Map;for(let _ of[p,y,M,v,E])_&&T.set(_,_.rotation.clone());let A=[];x.traverse(_=>{_.isMesh&&_.material.emissive&&A.push({m:_.material,e:_.material.emissive.clone()})});let C=Oi("#ffe48a",.35,0);return C.position.y=u.height*1.05,d.add(C),f.anim||(h.userData.placeholder=`${l.type}: stand-in tinted guardian parts until art/foe-${l.type}.glb loads`),C.userData.craft="stun light",e.add(h),{obj:h,yaw:d,up:p,aL:y,aR:M,lL:v,lR:E,rest:T,mats:A,star:C,anim:f.anim,walk:Math.random()*6,tg:null,tgKind:null,deadT:0}}let c=(l,u,h=0,d=0,m=0)=>{if(!u)return;let f=l.rest.get(u);u.rotation.set(f.x+h,f.y+d,f.z+m)};return{update(l,u,h){let d=new Set;for(let f of l.foes){let x=l.data.foes[f.type],g=n.get(f.id);g||(g=o(f,x),n.set(f.id,g)),d.add(f.id),g.obj.position.set(f.x,0,f.z),g.yaw.rotation.y=f.face;let p=f.state==="move";g.walk+=u*(p?9:0);let y=p?Math.sin(g.walk)*.5:0;c(g,g.lL,y),c(g,g.lR,-y);let M=0,v=0,E=1,T=0;if(f.state==="spawn")E=Math.min(1,1-f.t/.7+.2),T=-.6*(f.t/.7);else if(f.state==="wind"){let C=f.tg?f.tg.k:0;v=-2.4*C,M=f.type==="slinger"?-.3*C:.25*C}else f.state==="act"?(M=.6,v=.8):f.state==="stagger"?M=-.35*Math.sin(h*30):f.state==="dead"&&(g.deadT+=u,E=Math.max(.01,1-g.deadT/.9),T=-.5*g.deadT,M=.6*g.deadT);c(g,g.up,M),c(g,g.aL,v),c(g,g.aR,f.type==="slinger"?0:v),g.anim&&(f.state==="wind"?g.anim.hold("windup",f.tg?f.tg.k:0):(f.state==="act"||f.state==="rest"&&f.t>.6)&&g.anim.hold("strike",f.state==="act"?.6:1),g.anim.update(u,f.state==="stun"||f.state==="stagger"?"dizzy":p?"run":"idle",p?1.4:1)),g.obj.scale.setScalar(E),g.obj.position.y=T;for(let C of g.mats)f.flash>0?C.m.emissive.set("#fff4dc"):f.status.cracked.n?C.m.emissive.copy(C.e).lerp(new Te("#ff6a1a"),.35):C.m.emissive.copy(C.e);g.star.material.opacity=f.state==="stun"?.9:0,g.star.position.x=Math.sin(h*6)*.3,(f.tg?f.tg.kind:null)!==g.tgKind&&(aa(g.tg),g.tg=null,g.tgKind=null),f.tg&&!g.tg&&(g.tg=f.tg.kind==="circle"?_r("circle",f.tg.r):_r("lane",f.tg.w,f.tg.len),g.tg.userData.craft="telegraph",g.tgKind=f.tg.kind,g.tg.traverse(C=>{C.material&&(C.material.opacity*=.8)}),e.add(g.tg)),g.tg&&(g.tg.position.set(f.tg.x,0,f.tg.z),g.tgKind==="lane"&&(g.tg.rotation.y=f.tg.ang+Math.PI),dh(g.tg,f.tg.k))}for(let[f,x]of n)d.has(f)||(aa(x.tg),x.obj.removeFromParent(),x.obj.traverse(g=>{g.isMesh&&g.material&&g.material.dispose()}),n.delete(f));let m=new Set;for(let f of l.shots){let x=s.get(f);x||(x=new Le(r,a),x.castShadow=!0,x.userData.craft="thrown stone",e.add(x),s.set(f,x)),m.add(f),x.position.set(f.x,1,f.z),x.rotation.x+=u*12}for(let[f,x]of s)m.has(f)||(x.removeFromParent(),s.delete(f))},count:()=>n.size}}var rn={arc:new Jt(.9,1.35,24,1,-.9,1.8),arcBig:new Jt(1.2,2.1,32,1,-1.3,2.6),ring:new Jt(.86,1,48),spark:new un(.07,.07,.32),beam:new Nn(.05,.05,1,6,1,!0),beamCore:new Nn(.11,.11,1,8,1,!0),chop:new Jt(.75,1.55,28,1,-1,2),crack:new bt().setFromPoints([new P(-.14,0,0),new P(.14,0,0),new P(.05,.55,0),new P(.14,0,0),new P(.09,.5,0),new P(.05,.55,0),new P(.05,.55,0),new P(.09,.5,0),new P(-.02,1,0)]),bindRing:new ar(1,.085,6,40)};rn.crack.rotateX(-Math.PI/2);rn.beam.translate(0,.5,0);rn.beam.rotateX(Math.PI/2);rn.beamCore.translate(0,.5,0);rn.beamCore.rotateX(Math.PI/2);var Np=i=>i-Math.PI/2,Up={light1:["#fff4d6",0],light2:["#fff4d6",.5],light3:["#ffe2a0",-.4],sunder:["#ff8a3c",.25],breaker:["#ffd36b",0],giantfall:["#ffffff",0],counter:["#12aee0",-.55]};function kp(i){let e=[],t=(r,a,o)=>(r.userData.craft="hit effect",i.add(r),e.push({obj:r,life:a,t:0,step:o}),r),n=(r,a=1,o=!0)=>new At({color:r,transparent:!0,opacity:a,depthWrite:!1,side:Et,blending:o?yn:Pn}),s=(r,a,o=1)=>{let c=new tr(new is({map:ch,color:r,transparent:!0,opacity:o,depthWrite:!1,blending:yn}));return c.scale.setScalar(a),c};return{count:()=>e.length,slash(r,a){let[o,c]=Up[a]||Up.light1,l=a==="breaker"||a==="giantfall",u=a==="counter",h=new Le(l||u?rn.arcBig:rn.arc,n(o,u?.95:.85,!u));h.position.set(r.x,l?.25:1,r.z),h.rotation.order="YXZ",h.rotation.y=Np(r.face),h.rotation.x=l?-Math.PI/2:-Math.PI/2+c,t(h,l||u?.22:.14,d=>{h.material.opacity=(u?.95:.85)*(1-d),h.scale.setScalar(1+d*.35)})},chop(r){let a=new Le(rn.chop,n("#f26a1b",.92,!1));a.position.set(r.x,1.1,r.z),a.rotation.order="YXZ",a.rotation.y=Np(r.face),a.rotation.x=-Math.PI/2+.75,t(a,.2,o=>{a.material.opacity=.95*(1-o),a.scale.setScalar(1+o*.25)})},cracks(r,a,o,c=7){for(let l=0;l<c;l++){let u=new Le(rn.crack,n(l%2?"#b2400c":"#e85a10",.95,!1)),h=1.3+Math.random()*1.1;u.position.set(r,.05,a),u.rotation.y=o+l*(Math.PI*2/c)+(Math.random()-.5)*.4,t(u,.6,d=>{u.scale.set(1-d*.5,1,h*Math.min(1,d*6)),u.material.opacity=.9*(1-d*d)})}this.flash(r,.5,a,"#ff9a4a",2.2,.2)},bind(r,a,o,c){for(let[l,u]of[[0,a],[.08,a+.45]]){let h=new Le(rn.bindRing,n("#13a9d6",0,!1));h.rotation.x=Math.PI/2,h.position.set(r,u,o),t(h,.45+l,(d,m,f)=>{let x=Math.max(0,(f-l)/.45);h.scale.setScalar(c*(1.9-.9*Math.min(1,x*2.5))),h.material.opacity=x<=0?0:.95*(1-Math.max(0,x-.5)*2)})}},sparks(r,a,o,c,l=10,u="#ffd9a0"){for(let h=0;h<l;h++){let d=new Le(rn.spark,n(u,1));d.position.set(r,a,o);let m=c+(Math.random()-.5)*2.2,f=Math.random()*4+1,x=Math.random()*6+3,g=new P(Math.sin(m)*x,f,Math.cos(m)*x);d.lookAt(d.position.clone().add(g)),t(d,.28+Math.random()*.15,(p,y)=>{g.y-=14*y,d.position.addScaledVector(g,y),d.material.opacity=1-p})}},shock(r,a,o,c="#ffe7b0",l=.45){let u=new Le(rn.ring,n(c,.8));u.rotation.x=-Math.PI/2,u.position.set(r,.06,a),t(u,l,h=>{u.scale.setScalar(o*(.25+.75*Math.sqrt(h))),u.material.opacity=.8*(1-h)})},dust(r,a,o=10,c=2,l="#d8c4a0"){for(let u=0;u<o;u++){let h=s(l,1.2,.5);h.material.blending=Pn;let d=Math.random()*Math.PI*2,m=Math.random()*c;h.position.set(r+Math.sin(d)*m,.4,a+Math.cos(d)*m);let f=new P(Math.sin(d)*1.6,.8+Math.random(),Math.cos(d)*1.6);t(h,.9+Math.random()*.5,(x,g)=>{h.position.addScaledVector(f,g),h.scale.setScalar(1.2+x*2.2),h.material.opacity=.5*(1-x)})}},beam(r,a,o="#7fe3ff"){let c=Math.hypot(a.x-r.x,a.z-r.z),l=Math.atan2(a.x-r.x,a.z-r.z);for(let[u,h,d,m]of[[rn.beamCore,"#13a9d6",.85,!1],[rn.beam,"#ffffff",1,!0]]){let f=new Le(u,n(h,d,m));f.position.set(r.x,1.15,r.z),f.rotation.y=l,f.scale.set(1,1,.01),t(f,.36,x=>{f.scale.set(1+x*.6,1+x*.6,c*Math.min(1,x*5)),f.material.opacity=d*(1-x*x)})}},flash(r,a,o,c,l=2.5,u=.18){let h=s(c,l,1);h.position.set(r,a,o),t(h,u,d=>{h.material.opacity=1-d,h.scale.setScalar(l*(1+d))})},motes(r,a,o=24,c="#ffe8a8"){for(let l=0;l<o;l++){let u=s(c,.35,.9),h=Math.random()*Math.PI*2,d=Math.random()*2;u.position.set(r+Math.sin(h)*d,.3+Math.random(),a+Math.cos(h)*d);let m=.8+Math.random()*1.4,f=Math.random()*6;t(u,2.5+Math.random()*1.5,(x,g,p)=>{u.position.y+=m*g,u.position.x+=Math.sin(p*2+f)*g*.3,u.material.opacity=.9*Math.sin(Math.PI*Math.min(1,x*1.2))})}},update(r){for(let a=e.length-1;a>=0;a--){let o=e[a];o.t+=r;let c=Math.min(1,o.t/o.life);o.step(c,r,o.t),c>=1&&(o.obj.removeFromParent(),o.obj.material.dispose(),e.splice(a,1))}}}}var oa=i=>`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${i}</svg>`,Wo={light:oa('<path d="M5 19 L17.5 6.5 L19.5 4.5 L19 7 L6.5 19.5 Z" fill="currentColor" stroke-width="1.6"/><path d="M4 15.5 L8.5 20"/><path d="M3.2 20.8 L5.2 18.8"/>'),sunder:oa('<path d="M12 2.5 L10 8 L13.5 11 L9.5 15.5 L12 21.5"/><path d="M13.5 11 L19 9"/><path d="M10 8 L5 6.5"/><path d="M9.5 15.5 L4.5 17"/><path d="M13 17 L18.5 18.5"/>'),tether:oa('<rect x="2.5" y="8.5" width="10" height="7" rx="3.5" transform="rotate(-30 7.5 12)"/><rect x="11.5" y="8.5" width="10" height="7" rx="3.5" transform="rotate(-30 16.5 12)"/>'),breaker:oa('<path d="M12 3 L13.6 8.4 L19 6.5 L15.6 11 L21 13 L15.4 14.2 L17 20 L12 16.4 L7 20 L8.6 14.2 L3 13 L8.4 11 L5 6.5 L10.4 8.4 Z" fill="currentColor" fill-opacity=".25"/>'),dodge:oa('<path d="M19.5 12 A7.5 7.5 0 1 1 15.5 5.4"/><path d="M15.8 1.8 L16 5.8 L12 6.2"/>')};var Op={light:["KeyJ","Mouse0"],sunder:["KeyK","Digit1"],tether:["KeyL","Digit2"],breaker:["Semicolon","Digit3","KeyI"],dodge:["Space","ShiftLeft","ShiftRight"]},Un={light:"J",sunder:"K",tether:"L",breaker:";",dodge:"SPACE"},ca={up:["KeyW","ArrowUp"],down:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"]},mh={};for(let[i,e]of Object.entries(Op))for(let t of e)mh[t]=i;var KM=new Set([...Object.values(Op).flat(),...Object.values(ca).flat()]),cs=new Set,di={x:0,y:0},yr=[],gh=null,la=!0,xh={presses:0},ZM=i=>{let e=i.target;return!!e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)};window.addEventListener("keydown",i=>{if(ZM(i))return;KM.has(i.code)&&i.preventDefault();let e=!cs.has(i.code);if(cs.add(i.code),gh){gh(i.code,i);return}e&&la&&mh[i.code]&&(yr.push(mh[i.code]),xh.presses++)});window.addEventListener("keyup",i=>cs.delete(i.code));window.addEventListener("blur",()=>{cs.clear(),yr=[],di.x=di.y=0});window.addEventListener("contextmenu",i=>i.preventDefault());var Bt={stats:xh,touch:di,onKey(i){gh=i},setEnabled(i){la=i,i||(yr=[])},press(i){la&&(yr.push(i),xh.presses++)},hold(i,e){e?cs.add(i):cs.delete(i)},frame(){let i=r=>r.some(a=>cs.has(a)),e=(i(ca.right)?1:0)-(i(ca.left)?1:0)+di.x,t=(i(ca.down)?1:0)-(i(ca.up)?1:0)+di.y,n=Math.hypot(e,t);n>1&&(e/=n,t/=n);let s=yr;return yr=[],{mx:la?e:0,mz:la?t:0,press:s}}};function Fp(i){i.addEventListener("pointerdown",e=>{e.pointerType==="mouse"&&e.button===0&&Bt.press("light")})}function Bp(i){let e=document.createElement("div");e.className="tpad",e.innerHTML='<div class="tbase"><div class="tknob"></div></div>';let t=document.createElement("div");t.className="tbtns",t.innerHTML=[["light","Strike"],["sunder","Sunder"],["tether","Tether"],["breaker","Break"],["dodge","Roll"]].map(([f,x])=>`<button class="tb tb-${f}" data-a="${f}" aria-label="${x}">${Wo[f]}<b>${x}</b><em></em></button>`).join(""),i.append(e,t);let n=e.querySelector(".tbase"),s=e.querySelector(".tknob"),r=null,a=0,o=0,c=0,l=0,u=54,h=.12,d=()=>{n.style.left=`${a-c}px`,n.style.top=`${o-l}px`};e.addEventListener("pointerdown",f=>{if(r!==null)return;let x=e.getBoundingClientRect();c=x.left,l=x.top,r=f.pointerId,a=f.clientX,o=f.clientY,e.setPointerCapture(r),d(),n.classList.add("on")}),e.addEventListener("pointermove",f=>{if(f.pointerId!==r)return;let x=f.clientX-a,g=f.clientY-o,p=Math.hypot(x,g);p>u&&(a+=x*(1-u/p),o+=g*(1-u/p),x*=u/p,g*=u/p,d()),s.style.transform=`translate(${x}px, ${g}px)`;let y=Math.min(1,p/u);di.x=y<h?0:x/u,di.y=y<h?0:g/u});let m=f=>{f.pointerId===r&&(r=null,di.x=di.y=0,s.style.transform="",n.classList.remove("on"),n.style.left=n.style.top="")};e.addEventListener("pointerup",m),e.addEventListener("pointercancel",m);for(let f of t.querySelectorAll("button")){f.addEventListener("pointerdown",g=>{g.preventDefault(),f.classList.add("down"),Bt.press(f.dataset.a)});let x=()=>f.classList.remove("down");f.addEventListener("pointerup",x),f.addEventListener("pointercancel",x),f.addEventListener("pointerleave",x)}return t}var Ue=null,Fi=null,Xo=null,zt=null,yh=0,Bi=i=>440*2**((i-69)/12);function qp(i,e){if(Ue)return;Ue=i,Fi=Ue.createGain(),Fi.gain.value=.62,Fi.connect(e);let t=Math.floor(Ue.sampleRate*2.2),n=Ue.createBuffer(2,t,Ue.sampleRate);for(let r=0;r<2;r++){let a=n.getChannelData(r);for(let o=0;o<t;o++)a[o]=(Math.random()*2-1)*(1-o/t)**2.6}let s=Ue.createConvolver();s.buffer=n,Xo=Ue.createGain(),Xo.gain.value=.32,Xo.connect(s),s.connect(Fi),JM()}function JM(){let i=new Set;for(let[n,s]of[[Kp,"town"],[vr,"climb"],[Zp,"boss"]])for(let r=0;r<8;r++){let a=n.chords[r],o=n.bass[r];if(s==="town"){i.add(`${o}:0.3`),i.add(`${o+7}:0.3`);for(let c of[a[0],a[1],a[2],a[0]+12,a[1]+12])i.add(`${c+12}:0.55`)}else{for(let c of[a[0],a[2],a[0]+12])i.add(`${c+(s==="boss"?0:12)}:0.65`);i.add(`${o}:0.25`),i.add(`${o+12}:0.25`)}}for(let n of[65,69,72,77,81,60,64,67,72,76,79,84])i.add(`${n}:0.7`);for(let n of[69,65,62,57])i.add(`${n}:0.35`);let e=[...i].map(n=>n.split(":").map(Number)),t=()=>{for(let n=0;n<3&&e.length;n++){let[s,r]=e.shift();Yp(s,r)}e.length&&setTimeout(t,30)};setTimeout(t,30)}var _h=new Map;function Yp(i,e=.5,t=1.6){let n=`${i}:${e}`;if(_h.has(n))return _h.get(n);let s=Ue.sampleRate,r=Math.floor(s*t),a=Math.max(2,Math.round(s/Bi(i))),o=Ue.createBuffer(1,r,s),c=o.getChannelData(0),l=0;for(let h=0;h<a;h++){let d=Math.random()*2-1;l=l+(d-l)*(.35+e*.6),c[h]=l}let u=.996-(i>76?.004:0);for(let h=a;h<r;h++)c[h]=u*.5*(c[h-a]+c[h-a-1<0?0:h-a-1]);return _h.set(n,o),o}function ls(i,e,t=1){let n=Ue.createGain();if(n.gain.value=e,i.connect(n),n.connect(zt?zt.gain:Fi),t){let s=Ue.createGain();s.gain.value=t,n.connect(s),s.connect(Xo)}return n}function ua(i,e,t=.3,n=.5){let s=Ue.createBufferSource();s.buffer=Yp(i,n),ls(s,t),s.start(e)}function zp(i,e,t,n=.12){let s=Ue.createOscillator(),r=Ue.createOscillator(),a=Ue.createGain(),o=Ue.createOscillator(),c=Ue.createGain();s.type="sine",s.frequency.value=Bi(i),r.type="triangle",r.frequency.value=Bi(i)*2,o.frequency.value=5.2,c.gain.value=Bi(i)*.006,o.connect(c),c.connect(s.frequency),c.connect(r.frequency);let l=Ue.createGain();l.gain.value=.12,r.connect(l),l.connect(a),s.connect(a),a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(1,e+.07),a.gain.setValueAtTime(1,e+Math.max(.08,t-.12)),a.gain.exponentialRampToValueAtTime(1e-4,e+t+.18),ls(a,n,1.4);for(let u of[s,r,o])u.start(e),u.stop(e+t+.25)}function Hp(i,e,t,n=.035){let s=Ue.createBiquadFilter();s.type="lowpass",s.frequency.value=900;let r=Ue.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(1,e+Math.min(1.2,t*.4)),r.gain.setValueAtTime(1,e+t*.75),r.gain.exponentialRampToValueAtTime(1e-4,e+t+.8),s.connect(r),ls(r,n,1.2);for(let a of i)for(let o of[-6,6]){let c=Ue.createOscillator();c.type="sawtooth",c.frequency.value=Bi(a),c.detune.value=o,c.connect(s),c.start(e),c.stop(e+t+1)}}function qo(){if(qo.b)return qo.b;let i=Ue.sampleRate*.5,e=Ue.createBuffer(1,i,Ue.sampleRate),t=e.getChannelData(0);for(let n=0;n<i;n++)t[n]=Math.random()*2-1;return qo.b=e}function Vp(i,e=.5){let t=Ue.createOscillator(),n=Ue.createGain();t.frequency.setValueAtTime(130,i),t.frequency.exponentialRampToValueAtTime(42,i+.22),n.gain.setValueAtTime(1,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.32),t.connect(n),ls(n,e,.1),t.start(i),t.stop(i+.35)}function $p(i,e,t,n){let s=Ue.createBufferSource(),r=Ue.createBiquadFilter(),a=Ue.createGain();s.buffer=qo(),r.type="highpass",r.frequency.value=t,a.gain.setValueAtTime(1,i),a.gain.exponentialRampToValueAtTime(1e-4,i+n),s.connect(r),r.connect(a),ls(a,e,.4),s.start(i),s.stop(i+n+.02)}var jM=(i,e=.16)=>{$p(i,e,1400,.16);let t=Ue.createOscillator(),n=Ue.createGain();t.frequency.value=190,n.gain.setValueAtTime(.6,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.1),t.connect(n),ls(n,e*.6,.3),t.start(i),t.stop(i+.12)},QM=(i,e=.05)=>$p(i,e,6500,.05);function eb(i,e,t=.1){let n=Ue.createOscillator(),s=Ue.createOscillator(),r=Ue.createGain(),a=Ue.createGain();n.frequency.value=Bi(i),s.frequency.value=Bi(i)*3.5,r.gain.value=Bi(i)*1.2,s.connect(r),r.connect(n.frequency),a.gain.setValueAtTime(1,e),a.gain.exponentialRampToValueAtTime(1e-4,e+1.6),n.connect(a),ls(a,t,1.5);for(let o of[n,s])o.start(e),o.stop(e+1.7)}var Kp={bpm:88,chords:[[53,57,60],[57,60,64],[58,62,65],[60,64,67],[53,57,60],[50,53,57],[58,62,65],[60,64,67]],bass:[41,45,46,48,41,50,46,48],melody:[[[0,72,1],[1,69,1],[2,67,.5],[2.5,69,1.5]],[[0,64,2],[2,67,1],[3,69,1]],[[0,65,1],[1,67,1],[2,69,2]],[[0,67,3],[3,64,1]],[[0,72,1],[1,74,1],[2,72,.5],[2.5,69,1.5]],[[0,69,2],[2,65,1],[3,67,1]],[[0,65,1.5],[1.5,62,.5],[2,65,1],[3,67,1]],[[0,64,2],[2,60,2]]]},vr={bpm:124,chords:[[62,65,69],[58,62,65],[60,64,67],[57,61,64],[62,65,69],[58,62,65],[60,64,67],[57,61,64]],bass:[38,34,36,33,38,34,36,33],melody:[[[0,74,1],[1,77,1],[2,76,.5],[2.5,74,1.5]],[[0,70,1],[1,74,1],[2,77,2]],[[0,76,1.5],[1.5,74,.5],[2,72,2]],[[0,73,2],[2,76,1],[3,69,1]],[[0,74,.5],[.5,77,.5],[1,81,1],[2,79,1],[3,77,1]],[[0,74,2],[2,77,2]],[[0,79,1],[1,76,1],[2,72,1],[3,76,1]],[[0,73,3],[3,76,1]]]},Zp={...vr,bpm:138,chords:vr.chords.map(i=>i.map(e=>e+2)),bass:vr.bass.map(i=>i+2),melody:vr.melody.map(i=>i.map(([e,t,n])=>[e,t-10,n]))};function tb(i,e,t,n,s){let r=60/i.bpm,a=i.chords[t%8],o=i.bass[t%8];if(e==="town"){if(Hp(a,n,r*4),ua(o,n,.34,.3),ua(o+7,n+r*2,.22,.3),[a[0],a[1],a[2],a[0]+12,a[1]+12,a[2],a[1],a[0]].forEach((l,u)=>ua(l+12,n+u*r/2,.16+(u===0?.05:0),.55)),s%2===0)for(let[l,u,h]of i.melody[t%8])zp(u,n+l*r,h*r*.95,.11);t%8===7&&eb(84,n+r*3.5,.05)}else{let c=e==="boss";Hp(a.map(l=>l-12),n,r*4,.03);for(let l=0;l<16;l++){let u=[a[0],a[2],a[0]+12,a[2]][l%4]+(c?0:12);ua(u,n+l*r/4,l%4===0?.15:.09,.65)}for(let l=0;l<8;l++)ua(o+(l%2?12:0),n+l*r/2,.3,.25);for(let l=0;l<4;l++)(l%2===0||c)&&Vp(n+l*r,c?.55:.45),l%2&&jM(n+l*r);if(c)for(let l=0;l<4;l++)Vp(n+(l+.5)*r,.25);for(let l=0;l<8;l++)QM(n+l*r/2,l%2?.04:.025);if(s%2===1||c)for(let[l,u,h]of i.melody[t%8])zp(u,n+l*r,h*r*.9,c?.1:.09)}}var Yo={},Gp={},Wp=1.1;function Xp(i){Yo[i]||Gp[i]||(Gp[i]=!0,fetch(`music-${i}.mp3`).then(e=>e.ok?e.arrayBuffer():Promise.reject(e.status)).then(e=>new Promise((t,n)=>Ue.decodeAudioData(e,t,n))).then(e=>{let t=e.getChannelData(0),n=0,s=t.length-1;for(;n<8192&&Math.abs(t[n])<1e-4;)n++;for(;s>t.length-8192&&Math.abs(t[s])<1e-4;)s--;Yo[i]={b:e,t0:n/e.sampleRate,len:(s-n)/e.sampleRate},zt&&zt.kind===i&&zt.synth&&vh(i,!0)}).catch(()=>{}))}function nb(i,e){let t=Yo[i],n=.04,s=a=>{let o=Ue.createBufferSource(),c=Ue.createGain();return o.buffer=t.b,o.connect(c),c.connect(e.gain),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(Wp,a+n),c.gain.setValueAtTime(Wp,a+t.len-n),c.gain.exponentialRampToValueAtTime(1e-4,a+t.len),o.start(a,t.t0,t.len+.01),e.srcs.push(o),e.srcs.length>3&&e.srcs.shift(),a+t.len-n};e.next=s(Ue.currentTime+.05),yh=setInterval(()=>{if(zt===e)for(;e.next<Ue.currentTime+1.5;)e.next=s(e.next)},400)}function vh(i,e=!1){if(!Ue||zt&&zt.kind===i&&!e)return;if(zt){let a=zt;a.gain.gain.cancelScheduledValues(Ue.currentTime),a.gain.gain.setTargetAtTime(0,Ue.currentTime,.4),setTimeout(()=>{a.gain.disconnect();for(let o of a.srcs||[])try{o.stop()}catch{}},3e3)}if(zt=null,clearInterval(yh),!i)return;let t=Ue.createGain();t.gain.value=0,t.connect(Fi),t.gain.setTargetAtTime(1,Ue.currentTime,.6),Xp(i);for(let a of["climb","boss"])a!==i&&setTimeout(()=>Xp(a),4e3);if(Yo[i]){let a=zt={kind:i,gain:t,srcs:[],synth:!1};nb(i,a);return}let n={town:Kp,climb:vr,boss:Zp}[i],s=zt={kind:i,gain:t,next:Ue.currentTime+.15,i:0,synth:!0},r=()=>{if(zt!==s)return;let a=240/n.bpm;for(;s.next<Ue.currentTime+.6;)tb(n,i,s.i,s.next,Math.floor(s.i/8)),s.next+=a,s.i++};r(),yh=setInterval(r,200)}function Jp(i){Fi&&Ue&&Fi.gain.setTargetAtTime(i?.22:.62,Ue.currentTime,.25)}var jp=()=>zt?zt.kind+(zt.synth?":code":":file"):"";var Ae=null,kn=null,Jo=!0,Sh=!1,om="";function cm(i){try{let e=navigator.audioSession;e&&e.type!==(i?"playback":"ambient")&&(e.type=i?"playback":"ambient")}catch{}}function Mr(){if(!Ae){cm(Jo);let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;Ae=new i,kn=Ae.createGain(),kn.gain.value=.5,kn.connect(Ae.destination)}return Ae}var Qp=()=>{kn&&kn.gain.setTargetAtTime(Jo&&!Sh?.5:0,Ae.currentTime,.05)},us=()=>Jo&&!Sh&&Mr()&&Ae.state==="running";function et(i,e,t,n="square",s=.2,r=0){if(!us())return;let a=Ae.currentTime+r,o=Ae.createOscillator(),c=Ae.createGain();o.type=n,o.frequency.setValueAtTime(i,a),o.frequency.exponentialRampToValueAtTime(Math.max(20,e),a+t),c.gain.setValueAtTime(s,a),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(c),c.connect(kn),o.start(a),o.stop(a+t+.02)}function dn(i,e=.25,t=900){if(!us())return;let n=Ae.currentTime,s=Math.floor(Ae.sampleRate*i),r=Ae.createBuffer(1,s,Ae.sampleRate),a=r.getChannelData(0);for(let u=0;u<s;u++)a[u]=(Math.random()*2-1)*(1-u/s);let o=Ae.createBufferSource(),c=Ae.createBiquadFilter(),l=Ae.createGain();o.buffer=r,c.type="lowpass",c.frequency.value=t,l.gain.value=e,o.connect(c),c.connect(l),l.connect(kn),o.start(n)}var wh={slash:["knifeSlice","knifeSlice2"],draw:["drawKnife1","drawKnife2","drawKnife3"],chop:["chop"],clang:["metalPot1","metalPot2","metalPot3"],click:["metalClick"],latch:["metalLatch"],cloth:["cloth1","cloth2","cloth3","cloth4"],step:["footstep00","footstep01","footstep02","footstep03","footstep04","footstep05"],coins:["handleCoins","handleCoins2"],soft:["impactSoft_medium_000","impactSoft_medium_001","impactSoft_medium_002","impactSoft_medium_003","impactSoft_medium_004"],wood:["impactWood_light_000","impactWood_light_001","impactWood_light_002","impactWood_light_003","impactWood_light_004"],metal:["impactMetal_medium_000","impactMetal_medium_001","impactMetal_medium_002","impactMetal_medium_003","impactMetal_medium_004"],punch:["impactPunch_medium_000","impactPunch_medium_001","impactPunch_medium_002","impactPunch_medium_003","impactPunch_medium_004"],punchHeavy:["impactPunch_heavy_000","impactPunch_heavy_001","impactPunch_heavy_002","impactPunch_heavy_003","impactPunch_heavy_004"],stone:["impactMining_000","impactMining_001","impactMining_002","impactMining_003","impactMining_004"],bell:["impactBell_heavy_000","impactBell_heavy_001","impactBell_heavy_002","impactBell_heavy_003","impactBell_heavy_004"],thud:["impactPlate_heavy_000","impactPlate_heavy_001","impactPlate_heavy_002","impactPlate_heavy_003","impactPlate_heavy_004"],stepStone:["footstep_concrete_000","footstep_concrete_001","footstep_concrete_002","footstep_concrete_003","footstep_concrete_004"],glass:["impactGlass_light_000","impactGlass_light_001","impactGlass_light_002","impactGlass_light_003","impactGlass_light_004"],open:["bookOpen"],close:["bookClose"],flip:["bookFlip1"],belt:["beltHandle1","clothBelt"],creak:["creak1"],door:["doorOpen_1"],uiClick:["click_002"],jLevel:["jingles_PIZZI04"],jWin:["jingles_PIZZI02"],jDown:["jingles_PIZZI01"],jTing:["jingles_PIZZI16"],chest_common:["jingles_PIZZI08"],chest_rare:["jingles_PIZZI10"],chest_epic:["jingles_PIZZI13"],chest_legend:["jingles_PIZZI15"]},Ko={},Mh={},em=!1,lm=0,$o="";function ib(){if(em||!Mr())return;em=!0;let i=[...new Set(Object.values(wh).flat())],e=()=>{let t=i.shift();t&&fetch(`sfx-${t}.mp3`).then(n=>n.ok?n.arrayBuffer():Promise.reject(n.status)).then(n=>new Promise((s,r)=>Ae.decodeAudioData(n,s,r))).then(n=>{Ko[t]=n}).catch(()=>{lm++}).finally(()=>setTimeout(e,15))};for(let t=0;t<4;t++)e()}function $e(i,e=.5,t=.06){if(!us())return!1;let n=wh[i].filter(a=>Ko[a]);if(!n.length)return!1;let s=Ae.createBufferSource(),r=Ae.createGain();return s.buffer=Ko[n[Math.floor(Math.random()*n.length)]],s.playbackRate.value=1+(Math.random()*2-1)*t,r.gain.value=e,s.connect(r),r.connect(kn),s.start(),Mh[i]=(Mh[i]||0)+1,!0}var fi=null,Zo="",bh=0;function sb(i=2){let e=Ae.sampleRate*i,t=Ae.createBuffer(1,e,Ae.sampleRate),n=t.getChannelData(0),s=0;for(let r=0;r<e;r++){let a=Math.random()*2-1;s=(s+.02*a)/1.02,n[r]=s*3.5}return t}function rb(i,e,t){let n=Ae.createOscillator(),s=Ae.createGain();n.type="sine",n.frequency.setValueAtTime(e,i),n.frequency.exponentialRampToValueAtTime(e*1.5,i+.05),n.frequency.exponentialRampToValueAtTime(e*1.1,i+.09),s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(t,i+.012),s.gain.exponentialRampToValueAtTime(1e-4,i+.1),n.connect(s),s.connect(fi.out),n.start(i),n.stop(i+.12)}var tm=[[69,.5],[65,.45],[67,.7],[64,.6],[65,.45],[62,1.5]];function nm(i,e,t,n=.16){let s=tm.reduce((f,x)=>f+x[1],0),r=f=>440*2**((f-69)/12),a=i.createOscillator(),o=i.createOscillator(),c=i.createGain(),l=i.createBiquadFilter(),u=i.createGain(),h=i.createOscillator(),d=i.createGain();a.type="sine",o.type="triangle",c.gain.value=.35,l.type="lowpass",l.frequency.value=900,l.Q.value=.7,h.frequency.value=5.2,d.gain.value=4,h.connect(d),d.connect(a.frequency),d.connect(o.frequency),a.connect(l),o.connect(c),c.connect(l),l.connect(u),u.connect(e),u.gain.setValueAtTime(1e-4,t);let m=t;for(let[f,x]of tm)a.frequency.setTargetAtTime(r(f),m,.04),o.frequency.setTargetAtTime(r(f),m,.04),u.gain.setTargetAtTime(n,m,.06),u.gain.setTargetAtTime(n*.55,m+x-.08,.04),m+=x;u.gain.setTargetAtTime(1e-4,m-.6,.25);for(let f of[a,o,h])f.start(t),f.stop(t+s+.5);return s}function ab(i,e){for(let[t,n]of[[0,330],[.28,300],[.5,280]]){let s=Ae.createOscillator(),r=Ae.createGain(),a=Ae.createOscillator(),o=Ae.createGain();s.type="sine",s.frequency.value=n,a.frequency.value=26,o.gain.value=18,a.connect(o),o.connect(s.frequency),r.gain.setValueAtTime(1e-4,i+t),r.gain.exponentialRampToValueAtTime(e,i+t+.05),r.gain.exponentialRampToValueAtTime(1e-4,i+t+.22),s.connect(r),r.connect(fi.out),s.start(i+t),a.start(i+t),s.stop(i+t+.25),a.stop(i+t+.25)}}function ob(i,e){let t=Math.floor(Ae.sampleRate*.03),n=Ae.createBuffer(1,t,Ae.sampleRate),s=n.getChannelData(0);for(let c=0;c<t;c++)s[c]=(Math.random()*2-1)*Math.exp(-c/(t*.15));let r=Ae.createBufferSource(),a=Ae.createBiquadFilter(),o=Ae.createGain();r.buffer=n,a.type="highpass",a.frequency.value=1200,o.gain.value=e,r.connect(a),a.connect(o),o.connect(fi.out),r.start(i)}function im(i){if(um(),!Mr())return;let e=Ae.createGain();e.gain.value=0,e.connect(kn);let t=Ae.createBufferSource();t.buffer=sb(),t.loop=!0;let n=Ae.createBiquadFilter(),s=Ae.createOscillator(),r=Ae.createGain();i==="town"?(n.type="bandpass",n.frequency.value=900,n.Q.value=.7,s.frequency.value=.35,r.gain.value=260):(n.type="lowpass",n.frequency.value=420,n.Q.value=.4,s.frequency.value=.08,r.gain.value=240),s.connect(r),r.connect(n.frequency),t.connect(n),n.connect(e),t.start(),s.start(),fi={out:e,nodes:[t,s],kind:i},Zo=i,e.gain.linearRampToValueAtTime(i==="town"?.16:.13,Ae.currentTime+1.5),clearInterval(bh),bh=setInterval(()=>{if(!fi||!us())return;let a=Ae.currentTime+Math.random()*.4;if(fi.kind==="town"){if(Math.random()<.35){let o=2600+Math.random()*1400;for(let c=0;c<2+Math.floor(Math.random()*3);c++)rb(a+c*.13,o*(1+(Math.random()-.5)*.1),.05)}Math.random()<.08&&ab(a,.07)}else for(let o=0;o<3+Math.floor(Math.random()*5);o++)ob(a+Math.random()*.9,.05+Math.random()*.06)},1e3)}var sm=!1;function rm(){!Mr()||Ae.state!=="running"||(sm||(qp(Ae,kn),sm=!0),vh(om))}function um(){if(clearInterval(bh),!fi)return;let i=fi;fi=null,Zo="";try{i.out.gain.cancelScheduledValues(Ae.currentTime),i.out.gain.setValueAtTime(i.out.gain.value,Ae.currentTime),i.out.gain.linearRampToValueAtTime(0,Ae.currentTime+.6)}catch{}setTimeout(()=>{for(let e of i.nodes)try{e.stop()}catch{}i.out.disconnect()},700)}var am=0,De={ambience(i){if(i!==Zo){if(!i){um();return}Mr()&&Ae.state==="running"?im(i):$o=i}},unlock(){let i=()=>{$o&&(im($o),$o=""),rm()};Mr()&&Ae.state!=="running"?Ae.resume().then(i).catch(()=>{}):i(),ib()},music(i){om=i,rm()},duck(i){Jp(i)},debug(){return{music:jp(),ambience:Zo,state:Ae?Ae.state:"none",files:new Set(Object.values(wh).flat()).size,loaded:Object.keys(Ko).length,failed:lm,played:{...Mh}}},setEnabled(i){Jo=i,cm(i),Qp()},setForcedMute(i){Sh=i,Qp()},click(){$e("uiClick",.3,.05)},swing(i){if(i==="tether"){$e("click",.35,.1),et(330,990,.18,"triangle",.06);return}if(i==="breaker"||i==="giantfall"){$e("draw",.55,.05),dn(.22,.14,900);return}if(i==="counter"){$e("draw",.5,.05),et(600,1800,.14,"triangle",.07);return}$e("slash",i==="light3"||i==="sunder"?.55:.4,.12)||dn(.09,.12,2400)},hit(i,e){let t=Ae?Ae.currentTime:0;t-am<.03||(am=t,et(150,60,.09,"sine",.16),$e("stone",.55,.1),$e("chop",.3,.12),i==="sunder"&&($e("glass",.32,.08),et(1500,700,.12,"square",.03)),i==="tether"&&($e("latch",.4,.05),et(440,660,.25,"sine",.05)),i==="breaker"&&($e("punchHeavy",.6,.04),$e("thud",.5,.04),e&&($e("bell",.35,.03),et(220,880,.3,"triangle",.08))),i==="counter"&&($e("punchHeavy",.55,.04),$e("glass",.3,.05),et(1200,2400,.2,"triangle",.07)),i==="giantfall"&&(et(70,30,.9,"sine",.42),dn(.6,.22,320),$e("thud",.9,.02),$e("bell",.5,.01)))},whiff(){dn(.05,.04,3e3)},status(i){i==="cracked"?($e("glass",.25,.1),et(900,1800,.12,"sine",.05)):($e("click",.3,.05),et(520,780,.2,"triangle",.05))},wind(i){us()&&(i==="slam"?(et(60,150,.7,"sawtooth",.06),$e("clang",.12,.2)):i==="sweep"?(et(90,210,.6,"sawtooth",.05),dn(.5,.06,700)):(et(50,120,.8,"square",.04),dn(.7,.08,300)))},strike(i){i==="slam"?(et(90,35,.45,"sine",.35),dn(.35,.3,380),$e("thud",.8,.05),$e("stone",.5,.1)):i==="sweep"?(dn(.3,.22,1200),$e("stone",.4,.15)):(dn(.5,.25,260),$e("stepStone",.6,.1))},wallHit(){et(70,35,.5,"sine",.3),$e("stone",.7,.05),$e("thud",.6,.05)},topple(){us()&&(et(55,28,1.6,"sine",.45),dn(1.2,.22,240),$e("thud",1,0),setTimeout(()=>$e("bell",.55,0),180),setTimeout(()=>$e("stone",.6,.05),380))},getup(){et(60,110,.7,"sawtooth",.05),$e("stone",.35,.1)},roar(){$e("bell",.5,0),et(110,330,.8,"sawtooth",.08),et(70,40,1,"sine",.3),dn(.8,.12,500)},counterReady(){et(880,1760,.16,"triangle",.12,.08),et(1320,2640,.16,"sine",.07,.12)},perfect(){$e("glass",.4,.05),et(660,1320,.25,"triangle",.16),et(990,1980,.25,"triangle",.09,.06)},dodge(){$e("cloth",.6,.1)||dn(.12,.14,900)},hurt(){$e("punchHeavy",.7,.06)?et(220,90,.16,"triangle",.08):et(300,80,.2,"sawtooth",.16)},step(i=.16){$e("stepStone",i,.08)},giantStep(i=.35){$e("thud",i,.1),et(55,40,.18,"sine",i*.4)},power(){et(1175,1760,.12,"sine",.07),et(1568,2349,.14,"triangle",.04,.05)},foeWind(){et(320,620,.18,"triangle",.035)},foeDown(){$e("stone",.45,.15),dn(.18,.1,600)},combo(i){et(660+i*20,990+i*30,.08,"triangle",.035)},hum(){us()&&nm(Ae,kn,Ae.currentTime+.05)},async renderHum(){let e=new OfflineAudioContext(1,12e4,24e3);return nm(e,e.destination,.05),(await e.startRendering()).getChannelData(0)},win(){$e("jWin",.55,0)||[523,659,784,1047,1319].forEach((i,e)=>et(i,i,.22,"triangle",.17,e*.1))},down(){$e("jDown",.5,0)||et(400,60,.5,"triangle",.18)},ting(){$e("jTing",.4,0)||et(1568,1568,.12,"sine",.14)}};var Ot=null,On=!1,jo="none",Th=!1;function ha(i){if(On)try{i()}catch{}}var Ah=!1,Eh=-1e9,Rh=null;function dm(){if(Rh=null,Ah===Th)return;let i=performance.now();if(i-Eh<1100){Rh=setTimeout(dm,1100-(i-Eh));return}Th=Ah,Eh=i,ha(()=>Th?Ot.game.gameplayStart():Ot.game.gameplayStop())}function hm(i){Ah=i,Rh||dm()}var fn={async init(){try{window.CrazyGames&&window.CrazyGames.SDK&&(Ot=window.CrazyGames.SDK,await Promise.race([Ot.init(),new Promise((i,e)=>setTimeout(()=>e(new Error("timeout")),5e3))]),jo=Ot.environment,On=jo==="local"||jo==="crazygames")}catch{On=!1}return On},get env(){return jo},storage(){try{return On&&Ot.data?Ot.data:null}catch{return null}},loadingStart(){ha(()=>Ot.game.loadingStart())},loadingStop(){ha(()=>Ot.game.loadingStop())},gameplayStart(){hm(!0)},gameplayStop(){hm(!1)},happytime(){ha(()=>Ot.game.happytime())},muted(){try{return!!(On&&Ot.game.settings&&Ot.game.settings.muteAudio)}catch{return!1}},onSettings(i){ha(()=>Ot.game.addSettingsChangeListener(i))},deviceType(){try{return On?Ot.user.systemInfo.device.type:null}catch{return null}},locale(){try{return On?Ot.user.systemInfo.locale:null}catch{return null}},async hasAdblock(){if(!On)return!1;try{return!!await Promise.race([Ot.ad.hasAdblock(),new Promise(i=>setTimeout(()=>i(!1),3e3))])}catch{return!1}},rewarded(i){return new Promise(e=>{if(!On){e({ok:!1,code:"noSdk"});return}let t=!1,n=s=>{t||(t=!0,e(s))};try{Ot.ad.requestAd("rewarded",{adStarted:()=>{i&&i()},adFinished:()=>n({ok:!0}),adError:s=>n({ok:!1,code:s&&s.code||"other"})})}catch{n({ok:!1,code:"other"})}})},midgame(i){return new Promise(e=>{if(!On){e(!1);return}let t=!1,n=!1,s=r=>{n||(n=!0,e(r))};setTimeout(()=>{t||s(!1)},8e3);try{Ot.ad.requestAd("midgame",{adStarted:()=>{t=!0,i&&i()},adFinished:()=>s(!0),adError:()=>s(!1)})}catch{s(!1)}})}};var bn=(i,e,t="")=>{let n=document.createElement(i);return e&&(n.className=e),n.innerHTML=t,n},cb=[["light","Strike",""],["sunder","Sunder","crack"],["tether","Tether","hold"],["breaker","Break","spend"],["dodge","Roll",""]];function fm(i,{touch:e,stages:t=null}){let n=bn("div","gbar",`<div class="gname"><b></b><span></span></div>
    <div class="bar hp"><i class="trail"></i><i class="fill"></i></div>
    <div class="bar bal"><i class="fill"></i><em>BALANCE</em></div>
    <div class="chips"></div>`),s=bn("div","hbar",'<div class="lab">HP <b></b></div><div class="bar mine"><i class="trail"></i><i class="fill"></i></div><div class="powers"></div>'),r=bn("div","keys"+(e?" hide":""),cb.map(([N,D,q])=>`<div class="key k-${N}" data-a="${N}"><kbd>${Un[N]}</kbd>${Wo[N]}<b>${D}</b><small>${q}</small><i class="cd"></i></div>`).join("")),a=bn("div","combo","<b>0</b><span>HITS</span><em></em>"),o=bn("div","banner"),c=bn("div","coach","<b>Elara</b><span></span>"),l=bn("div","nums"),u=bn("div","flash"),h=bn("div","prog"+(t?"":" hide"),t?t.map((N,D)=>`<i class="s-${N.type}" data-i="${D}" title="${N.type==="giant"?N.giant:N.name||"power"}"></i>`).join(""):""),d=bn("button","pausebtn","II");d.setAttribute("aria-label","Pause");let m=bn("div","modal hide");i.append(u,l,n,s,r,a,o,c,h,d,m);let f=(N,D)=>N.querySelector(D),x=f(n,".hp .fill"),g=f(n,".hp .trail"),p=f(n,".bal .fill"),y=f(n,".chips"),M=f(n,".bal"),v=f(s,".fill"),E=f(s,".trail"),T=f(s,".lab b"),A=1,C=1,_=0,b=0,L=0,H="",I=[];return{setGiant(N,D){f(n,".gname b").textContent=N,f(n,".gname span").textContent=D},onPause(N){d.onclick=N},showBars(N){for(let D of[n,s,r,a])D.classList.toggle("off",!N)},setPowers(N){let D=f(s,".powers");D.innerHTML=N.map(q=>`<i data-id="${q.id}" title="${q.text}">${q.name}</i>`).join("")},powerPulse(N){let D=f(s,`.powers [data-id="${N}"]`);D&&(D.classList.remove("fire"),D.offsetWidth,D.classList.add("fire"))},setStage(N){!t||!N.run||h.querySelectorAll("i").forEach((D,q)=>{D.classList.toggle("done",q<N.run.stage),D.classList.toggle("now",q===N.run.stage)})},banner(N,D="",q="",O=1.6){o.className=`banner show ${q}`,o.innerHTML=`<b>${N}</b>${D?`<span>${D}</span>`:""}`,b=O},say(N,D=2.8){f(c,"span").textContent=N,c.classList.add("show"),L=D},flash(N="#fff",D=.5){u.style.background=N,u.style.transition="none",u.style.opacity=D,requestAnimationFrame(()=>{u.style.transition="opacity .35s",u.style.opacity=0})},num(N,D,q=""){I.length>24&&I.shift().e.remove();let O=bn("div",`num ${q}`,D);l.append(O),I.push({e:O,pos:{...N},t:0,life:q.includes("big")?1.1:.75})},dropNums(N){for(let D=I.length-1;D>=0;D--)I[D].e.classList.contains(N)&&(I[D].e.remove(),I.splice(D,1))},comboPulse(N,D){let q=f(a,"em");q.textContent=N,q.className=D,q.style.animation="none",q.offsetWidth,q.style.animation=""},update(N,D,q){let O=N.giant,te=N.hero;if(n.classList.toggle("hide",!O||O.state==="fallen"),O){let ae=O.hp/O.max;A=Math.max(ae,A-D*.35),x.style.width=`${ae*100}%`,g.style.width=`${A*100}%`;let ue=O.state==="toppled"?O.t/N.data.rules.topple.time:O.balance/O.balMax;p.style.width=`${ue*100}%`,M.classList.toggle("down",O.state==="toppled"),M.classList.toggle("near",O.state!=="toppled"&&ue>.75),f(M,"em").textContent=O.state==="toppled"?"TOPPLED":"BALANCE";let ge=[];O.status.cracked.n&&ge.push(`<i class="c-cracked">CRACKED${O.status.cracked.n>1?" \xD7"+O.status.cracked.n:""}</i>`),O.status.bound.n&&ge.push('<i class="c-bound">BOUND</i>');let He=ge.join("");He!==H&&(y.innerHTML=He,H=He)}let ne=te.hp/te.max;C=Math.max(ne,C-D*.5),v.style.width=`${ne*100}%`,E.style.width=`${C*100}%`,T.textContent=te.hp,s.classList.toggle("low",ne<=.3);let oe=N.data.moves;for(let ae of["sunder","tether","breaker"]){let ue=te.cd[ae]/oe[ae].cd;f(r,`.k-${ae} .cd`).style.height=`${Math.max(0,ue)*100}%`}let he=!!O&&O.status.cracked.n+O.status.bound.n>0,ce=!!O&&O.state==="toppled"&&!O.finisherUsed&&!!O.fallReady,G=f(r,".k-breaker");G.classList.toggle("glow",he||ce),f(G,"b").textContent=ce?"FALL!":"Break";let J=te.counterT>0,Y=f(r,".k-light");if(Y.classList.toggle("glow",J),f(Y,"b").textContent=J?"Counter":"Strike",e){let ae=i.querySelector(".tb-light");ae&&(ae.classList.toggle("glow",J),ae.querySelector("b").textContent=J?"Counter":"Strike")}if(f(r,".k-dodge .cd").style.height=`${Math.max(0,te.dodgeCd/oe.dodge.cd)*100}%`,e)for(let ae of["sunder","tether","breaker","dodge"]){let ue=i.querySelector(`.tb-${ae}`);if(!ue)continue;let ge=ae==="dodge"?te.dodgeCd/oe.dodge.cd:te.cd[ae]/oe[ae].cd;ue.querySelector("em").style.height=`${Math.max(0,ge)*100}%`,ae==="breaker"&&(ue.classList.toggle("glow",he||ce),ue.querySelector("b").textContent=ce?"FALL!":"Break")}let se=N.combo;se.hits>=2&&(_=1.2,f(a,"b").textContent=se.hits),_-=D,a.classList.toggle("show",_>0),b-=D,b<=0&&o.classList.remove("show"),L-=D,L<=0&&c.classList.remove("show");for(let ae=I.length-1;ae>=0;ae--){let ue=I[ae];ue.t+=D;let ge=ue.t/ue.life;if(ge>=1){ue.e.remove(),I.splice(ae,1);continue}let He=q(ue.pos.x,ue.pos.y+ge*.9,ue.pos.z);ue.e.style.transform=`translate(${He.x}px, ${He.y}px) translate(-50%, -50%) scale(${ge<.12?.6+ge*4:1})`,ue.e.style.opacity=ge>.7?(1-ge)/.3:1}},modal(N,D={}){return m.innerHTML=`<div class="card">${N}</div>`,m.classList.remove("hide"),document.body.classList.add("modal-on"),m},closeModal(){m.classList.add("hide"),m.innerHTML="",document.body.classList.remove("modal-on")},get modalOpen(){return!m.classList.contains("hide")}}}function pm(i,e,t,n=()=>"all"){let s=new Set,r={},a=new Set,o={},c=0,l=0,u={seq:"",n:0},h=0,d=!1,m=p=>p.replace(/\{key:(\w+)\}/g,(y,M)=>M==="move"?t.move:`[${t[M]||M}]`);function f(p,y={}){var C;let M=i.events[p];if(!M)return!1;let v=n();if(v==="off"||v==="key"&&!M.urgent||l>0&&!M.urgent&&!y.force||!y.force&&c-((C=o[p])!=null?C:-1e9)<(i.repeatGap||0))return!1;o[p]=c;let E=M.lines.length,T=Math.floor(Math.random()*E);E>1&&T===r[p]&&(T=(T+1)%E),r[p]=T,l=i.gap;let A=m(M.lines[T]);return e.say(A,Math.max(i.show,A.split(/\s+/).length/(i.wordsPerSec||3.5))),!0}let x=(p,y)=>s.has(p)?!1:f(y)?(s.add(p),!0):!1,g=(p,y)=>{a.has(p)||f(y)&&a.add(p)};return{say:f,handle(p,y){switch(p.t){case"flow":if(p.to==="intro"&&(a.clear(),h=0,d=!1,u={seq:"",n:0}),p.to==="fight"&&p.from==="intro"&&(s.has("fought")?f(y.mode==="run"?"runAgain":"intro",{force:!0}):(s.add("fought"),f("firstFight",{force:!0}))),p.to==="won"&&(f(s.has("won")?"win":"winFirst",{force:!0}),s.add("won")),p.to==="pick"&&x("picked","pickFirst"),p.to==="down"){let M=y.giant;M&&M.hp/M.max<=.15?f("close",{force:!0}):f(y.downsInRow===1?"down1":y.downsInRow===2?"down2":"downMore",{force:!0})}break;case"wind":x("wind","firstWind");break;case"hurt":!x("hurt","firstHurt")&&p.hp>0&&p.hp<=30&&g("low","lowHp");break;case"perfect":x("perfect","firstPerfect");break;case"counterReady":s.has("counter")||(s.add("counter"),f("firstCounter",{force:!0}));break;case"status":p.on&&x(p.name,p.name==="cracked"?"firstCracked":"firstBound");break;case"hit":p.consumed&&Object.keys(p.consumed).length&&x("spend","firstSpend"),p.move==="giantfall"&&y.giant.toppleQ&&y.giant.toppleQ.hits>=12&&f("finisherBig");break;case"swing":["sunder","tether","breaker"].includes(p.move)&&h++;break;case"topple":x("topple","firstTopple");break;case"phase":f("phase2");break;case"stage":p.giant?(f(p.giant==="cairn"?s.has("cairn")?"cairnAgain":"cairnIntro":s.has("hollen")?"hollenAgain":"hollenIntro",{force:!0}),s.add(p.giant)):p.i>0&&f(p.mood===2?"swarm":"waveNext");break;case"foeWind":x("foeWind","firstFoeWind");break;case"foeDown":p.how==="crush"||p.how==="quake"?x("crush","firstCrush")||f("crush"):g("firstKill","firstKill");break;case"spawn":y.giant&&y.giant.state!=="fallen"&&f("adds");break;case"fallen":p.last||f(p.id==="cairn"?"cairnRest":"win");break;case"comboEnd":if(!p.seq)break;p.seq===u.seq?u.n++:u={seq:p.seq,n:1},u.n>=3&&g("repeat","repeat");break;default:break}},tick(p,y){if(l-=p,c+=p,y.flow.state!=="fight")return;y.time>14&&h===0&&y.giant&&g("noSkills","noSkills");let M=y.giant;M&&!d&&M.state!=="toppled"&&M.balance/M.balMax>.85&&(d=!0,x("teeter","teeter"))}}}var Sn=new URLSearchParams(location.search),pi=Sn.has("capture"),lb=pi||Sn.has("test"),fa=Sn.get("bot"),Rm=Sn.has("holdpick"),Fn=matchMedia("(pointer: coarse)").matches||Sn.has("touch"),Cm=matchMedia("(prefers-reduced-motion: reduce)").matches,ub={moves:Ju,rules:ju,giants:Qt,foes:Vf,powers:fr,run:ko},mm={all:"all hints",key:"key moments",off:"off"},ps=Sn.has("lab")?"lab":"run",gm=Un,Dh="WASD",Im="giantfall_v1",ac=()=>fn.storage()||(()=>{try{return window.localStorage}catch{return null}})(),yt={sound:!0,shake:Cm?"less":"full",elara:"all",fights:0,wins:0};function hb(){try{let i=ac(),e=i&&i.getItem(Im);e&&(yt={...yt,...JSON.parse(e)})}catch{}}function ec(){try{let i=ac();i&&i.setItem(Im,JSON.stringify(yt))}catch{}}var Pm="b858aa3",Lm=Sn.has("counter")?"giantfall_report_counter_v1":"giantfall_report_v1",Hi=null,fs=null,Dm=Sn.has("tester")||/(^|\.)titanth\.com$/.test(location.hostname);function db(){if(!(pi||fa))try{let i=ac(),e=i&&i.getItem(Lm);if(!e)return;let t=JSON.parse(e);Array.isArray(t.log)&&_e.log.push(...t.log),t.answers&&(fs=t.answers),_e.fight&&_e.fight.result==null&&(_e.fight.n=_e.log.length+1),_e.runsStarted=t.runsStarted||0,Hi=t.beganAt||null}catch{}}function Nh(){if(!(pi||fa))try{let i=ac();i&&i.setItem(Lm,JSON.stringify({log:_e.log,runsStarted:_e.runsStarted,beganAt:Hi,answers:fs}))}catch{}}function fb(){let i=_e.report();return i.build=Pm,fs&&(i.answers=fs),i.viewHeals=ms?Object.values(ms).reduce((e,t)=>e+t.heals,0):0,i.minutesSinceFirstBegin=Hi?Math.round((Date.now()-Hi)/6e3)/10:null,i.perRun=i.perRun.map((e,t)=>({...e,wallMin:_e.log[t]&&_e.log[t].wallMin!=null?_e.log[t].wallMin:null})),i}function oc(i){let e=JSON.stringify(fb()).replace(/":/g,'": '),t=document.getElementById(i);(navigator.clipboard?navigator.clipboard.writeText(e):Promise.reject()).then(()=>{t&&(t.textContent="Copied. Paste it to whoever asked you to play.")}).catch(()=>{t&&(t.textContent=e)})}var hs,Wn,Rt,Er,pa,ms,Oh,dt,Ie,Fh,_e,ic=null,Qo=()=>_e.giant?ms[_e.giant.id]:null,xm=-9,_m=0,Vi=!1,wr=!1,ds=0,ym=0,Sr=0,tc=0,vm=0,Tr=!1,Mm=new P(0,12,16),bm=new P(0,1,0),Ch=new P,Sm=document.getElementById("ui");function pb(i){return new Promise((e,t)=>{let n=new Image;n.onload=()=>e(n),n.onerror=t,n.src=i})}function Ih(i,e){let t=document.getElementById("lfill"),n=document.getElementById("ltext");t&&(t.style.width=`${Math.round(i*100)}%`),n&&e&&(n.textContent=e)}var sc=40,wm=!1;function Tm(){let i=innerWidth,e=innerHeight;hs.setSize(i,e,!1),Rt.aspect=i/e;let t=i/e;sc=t<1?62:t<1.4?50:40,wm||(Rt.fov=sc,wm=!0),Rt.updateProjectionMatrix()}function mb(i,e,t){return Ch.set(i,e,t).project(Rt),{x:(Ch.x+1)/2*innerWidth,y:(1-Ch.y)/2*innerHeight}}var pn=(i,e=null)=>{Sr=Math.max(Sr,i),tc=e},Ph={v:1},Lh=new Set,Em={};function gb(i){let e=_e.giant,t=_e.hero;switch(Fh.handle(i,_e),i.t){case"swing":De.swing(i.move),i.move==="counter"&&(Ie.dropNums("counter"),Ie.dropNums("perfect"));break;case"hit":{De.hit(i.move,i.consumed&&Object.keys(i.consumed).length);let n=i.target==="giant",s=n?e.radius:.5,r=n?1.4+Math.random()*.8:.7,a=Math.atan2(t.x-i.x,t.z-i.z),o=i.x+Math.sin(a)*s*.9,c=i.z+Math.cos(a)*s*.9,l=i.move==="breaker"||i.move==="giantfall";Lh.has(i.move+_e.combo.hits)||(Lh.add(i.move+_e.combo.hits),i.move==="tether"?dt.beam(t,i):i.move==="sunder"?dt.chop(t):dt.slash(t,i.move)),i.move==="sunder"?dt.cracks(o,c,a):i.move==="tether"&&dt.bind(i.x,n?1.2:.7,i.z,n?e.radius*.9:.6),dt.sparks(o,r,c,a,l?18:n?9:6,i.move==="sunder"?"#ff9a4a":"#ffe2a8"),l&&n&&(dt.shock(i.x,i.z,i.move==="giantfall"?6:3.2),dt.flash(o,1.6,c,"#ffd36b",3)),n&&Qo()&&Qo().hit(i,t.face),Ie.num({x:o,y:n?2.6:1.6,z:c},i.dmg,(l||i.move==="counter")&&n?"big":i.toppled?"down":n?"":"small"),i.consumed&&Object.keys(i.consumed).length?(Ie.comboPulse("SPENT!","spent"),Ie.flash("#ffd36b",.18)):i.repeat?Ie.comboPulse("REPEAT \xD70.6","repeat"):i.variety>Ph.v&&Ie.comboPulse(`MIX \xD7${i.variety}`,"mix"),Ph.v=i.variety,pn(l?.55:.12+(i.move==="sunder"?.08:0),a+Math.PI),i.move==="giantfall"&&(Ie.flash("#fff6d8",.55),pn(.9)),i.move==="counter"&&(Ie.comboPulse("COUNTER!","counter"),Ie.flash("#9ff0ff",.22),dt.flash(o,1.6,c,"#9ff0ff",3),pn(.45,a+Math.PI)),_e.combo.hits>=5&&_e.combo.hits%5===0&&De.combo(_e.combo.hits);break}case"whiff":i.move==="tether"?dt.beam(t,{x:t.x+Math.sin(t.face)*6.5,z:t.z+Math.cos(t.face)*6.5}):i.move==="sunder"?dt.chop(t):dt.slash(t,i.move),De.whiff();break;case"cancel":break;case"comboEnd":Ph.v=1,Lh.clear();break;case"status":i.on&&i.target==="giant"&&e&&(De.status(i.name),Ie.num({x:e.x,y:3.6,z:e.z},i.name==="cracked"?"CRACKED":"BOUND",`tag ${i.name}`));break;case"wind":De.wind(i.atk);break;case"strike":{De.strike(i.atk),Qo()&&Qo().strike(),i.atk==="slam"?(dt.shock(i.x,i.z,2.6,"#ffb08a"),dt.dust(i.x,i.z,10,1.6),pn(.5)):i.atk==="sweep"?(dt.shock(e.x,e.z,4.2,"#ffc9a8",.35),pn(.25)):pn(.3);break}case"wallHit":De.wallHit(),dt.dust(i.x,i.z,14,2),pn(.6);break;case"topple":{De.topple(),De.duck(!0),da(1.6,()=>De.duck(!1));let n=e.x+Math.sin(i.dir)*1.6,s=e.z+Math.cos(i.dir)*1.6;dt.dust(n,s,22,2.8),dt.shock(n,s,7,"#ffe7b0",.7),pn(1),Ie.flash("#ffe7b0",.35),Ie.banner("TOPPLED!","Hit him while he's down \u2014 double damage","topple",2.2);break}case"fallReady":Ie.banner("GIANTFALL!",Fn?"Tap FALL! \u2014 finish him":`Press [${Un.breaker}] \u2014 finish him`,"topple",1.3),De.ting();break;case"getup":De.getup(),dt.dust(e.x,e.z,8,1.5);break;case"phase":De.roar(),Ie.banner(`${Qt[e.id].name.toUpperCase()} AWAKENS`,"He strikes faster now","phase",2),pn(.45);break;case"stage":{Er.setZone(i.mood===2?2:1),De.music(i.type==="giant"?"boss":"climb"),i.giant?(Ie.setGiant(Qt[i.giant].name,Qt[i.giant].title),Ie.banner(Qt[i.giant].name.toUpperCase(),Qt[i.giant].title,"intro",2.2),De.roar(),pn(.4)):Ie.banner(i.name,"","stage",1.6),Ie.setStage(_e);break}case"spawn":De.getup();break;case"foeWind":De.foeWind();break;case"lunge":De.dodge();break;case"throw":De.swing("light1");break;case"foeDown":dt.dust(i.x,i.z,i.how==="crush"||i.how==="quake"?8:5,.6),De.foeDown(),(i.how==="quake"||i.how==="crush")&&Ie.num({x:i.x,y:1.4,z:i.z},"CRUSHED","tag crushed");break;case"heal":Ie.num({x:t.x,y:2.2,z:t.z},`+${i.n}`,"heal"),De.ting();break;case"pull":dt.dust(t.x,t.z,4,.4);break;case"giantReady":break;case"offer":break;case"picked":De.ting(),i.heal&&Ie.num({x:t.x,y:2.2,z:t.z},`+${i.heal}`,"heal"),Ie.setPowers(_e.run.picks.map(n=>fr.cards.find(s=>s.id===n)));break;case"power":{Ie.powerPulse(i.id);let n=_e.realTime;if(n-(Em[i.id]||-9)<2.5)break;Em[i.id]=n;let s=fr.cards.find(o=>o.id===i.id),r=n-xm<.8?Math.min(_m+1,3):0,a=.55*r;_m=r,xm=n,Ie.num({x:t.x,y:2.9+a,z:t.z},s.name,`tag power${i.hurt?" cost":""}`),De.power();break}case"counterReady":De.counterReady(),Ie.num({x:t.x,y:3,z:t.z},Fn?"STRIKE BACK!":`[${Un.light}] STRIKE BACK!`,"tag counter");break;case"perfect":De.perfect(),dt.flash(t.x,1,t.z,"#9ff0ff",3,.3),Ie.num({x:t.x,y:2.3,z:t.z},"PERFECT","tag perfect"),pn(.15);break;case"dodge":De.dodge(),dt.dust(t.x,t.z,3,.3);break;case"hurt":De.hurt(),pa.hurt(),Ie.flash("#ff3a2a",.32),Ie.num({x:t.x,y:2.2,z:t.z},`-${i.dmg}`,"hurt"),pn(.45);break;case"fallen":De.duck(!0),dt.motes(e.x,e.z),dt.dust(e.x,e.z,26,3),pn(1),Ie.banner(`${Qt[e.id].name.toUpperCase()} RESTS`,i.last?"":"The terrace goes quiet\u2026","win",3),i.last&&pa.win(),i.last?(da(.9,()=>De.hum()),da(5.4,()=>{De.win(),De.duck(!1)})):da(.9,()=>{De.ting(),De.duck(!1)});break;case"flow":if(i.to==="fight"&&i.from==="intro"&&(Hi||(Hi=Date.now()),Nh()),i.to==="fight"&&(fn.gameplayStart(),ps==="lab"&&De.music("boss"),Ie.showBars(!0),i.from==="pick"&&(Bt.onKey(null),Ie.closeModal())),i.to==="pick"&&(fn.gameplayStop(),(!ic||Rm)&&_b()),i.to==="intro"&&(ps==="lab"?Ie.banner(Qt[_e.giantId].name.toUpperCase(),Qt[_e.giantId].title,"intro",2):(Er.setZone(1),Ie.banner("THE DAWN TERRACES","Bring the Wardens to rest","intro",2),De.music("climb")),Ie.showBars(!0),Ie.setStage(_e),Ie.setPowers([]),Tr=!1),i.to==="won"||i.to==="down"){yt.fights++,i.to==="won"&&yt.wins++,ec();let n=_e.log[_e.log.length-1];n&&Hi&&(n.wallMin=Math.round((Date.now()-Hi)/6e3)/10),Nh(),i.to==="down"&&(De.down(),Ie.banner("FALLEN","","down",2)),da(i.to==="won"?2.6:1.5,()=>{fn.gameplayStop(),Om()})}break;default:break}}function Nm(){return Fn?'<p class="small">Left side: move \xB7 <b>Strike</b> \xB7 <b>Sunder</b> cracks \xB7 <b>Tether</b> holds \xB7 <b>Break</b> spends \xB7 <b>Roll</b> dodges</p>':`<div class="ctl"><span><kbd>${Dh}</kbd> move</span><span><kbd>${Un.light}</kbd> / click strike</span><span><kbd>${Un.sunder}</kbd> Sunder \u2014 crack</span><span><kbd>${Un.tether}</kbd> Tether \u2014 hold</span><span><kbd>${Un.breaker}</kbd> Break \u2014 spend</span><span><kbd>SPACE</kbd> roll</span><span><kbd>P</kbd> pause</span></div>`}function cc(i){let e=document.querySelector(".modal");for(let[t,n]of Object.entries(i)){let s=e.querySelector(t);s&&(s.onclick=r=>{r.preventDefault(),De.click(),n()})}}function xb(){if(Fn)try{let i=screen.orientation;i&&i.lock&&i.lock("landscape").catch(()=>{})}catch{}}var Am=[["q1","\u0E40\u0E01\u0E21\u0E19\u0E35\u0E49\u0E43\u0E2B\u0E49\u0E40\u0E23\u0E32\u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23 (\u0E1A\u0E2D\u0E01\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E33\u0E1E\u0E39\u0E14\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07)"],["q2","\u0E17\u0E33\u0E22\u0E31\u0E07\u0E44\u0E07\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E16\u0E36\u0E07\u0E25\u0E49\u0E21"],["q3","\u0E0A\u0E48\u0E27\u0E07\u0E44\u0E2B\u0E19\u0E17\u0E35\u0E48\u0E43\u0E08\u0E40\u0E15\u0E49\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14"],["q5","\u0E21\u0E35\u0E15\u0E2D\u0E19\u0E44\u0E2B\u0E19\u0E17\u0E35\u0E48\u0E07\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E34\u0E14\u0E44\u0E2B\u0E21"]];function Um(i){let e=fs||{},t=a=>String(a||"").replace(/[&<>"]/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[o]),n=(a,o)=>`<div class="qpick" data-q="${a}">${o.map(([c,l])=>`<button type="button" class="ghost${e[a]===c?" on":""}" data-v="${c}">${l}</button>`).join("")}</div>`;Ie.modal(`<h2>\u0E04\u0E33\u0E16\u0E32\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E04\u0E19\u0E17\u0E14\u0E2A\u0E2D\u0E1A</h2><p class="small">\u0E15\u0E2D\u0E1A\u0E2A\u0E31\u0E49\u0E19\u0E46 \u0E01\u0E47\u0E1E\u0E2D \u0E04\u0E33\u0E15\u0E2D\u0E1A\u0E08\u0E30\u0E15\u0E34\u0E14\u0E44\u0E1B\u0E01\u0E31\u0E1A\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19</p>
    <div class="qa"><label>\u0E40\u0E04\u0E22\u0E40\u0E2B\u0E47\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E25\u0E48\u0E19\u0E40\u0E01\u0E21\u0E19\u0E35\u0E49\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E21</label>${n("seen",[["no","\u0E44\u0E21\u0E48\u0E40\u0E04\u0E22"],["yes","\u0E40\u0E04\u0E22"]])}
    ${Am.slice(0,3).map(([a,o])=>`<label for="${a}">${o}</label><textarea id="${a}" rows="2">${t(e[a])}</textarea>`).join("")}
    <label>\u0E15\u0E2D\u0E19\u0E41\u0E1E\u0E49 \u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E27\u0E48\u0E32\u0E40\u0E23\u0E32\u0E1E\u0E25\u0E32\u0E14\u0E40\u0E2D\u0E07 \u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E27\u0E48\u0E32\u0E40\u0E01\u0E21\u0E42\u0E01\u0E07</label>${n("q4",[["me","\u0E40\u0E23\u0E32\u0E1E\u0E25\u0E32\u0E14\u0E40\u0E2D\u0E07"],["game","\u0E40\u0E01\u0E21\u0E42\u0E01\u0E07"],["none","\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E41\u0E1E\u0E49"]])}
    <textarea id="q4note" rows="1" placeholder="(\u0E16\u0E49\u0E32\u0E2D\u0E22\u0E32\u0E01\u0E40\u0E25\u0E48\u0E32\u0E40\u0E1E\u0E34\u0E48\u0E21)">${t(e.q4note)}</textarea>
    <label for="q5">${Am[3][1]}</label><textarea id="q5" rows="2">${t(e.q5)}</textarea></div>
    <button class="go" id="qsave">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 \u0E41\u0E25\u0E49\u0E27\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19</button><button class="ghost" id="qback">\u0E01\u0E25\u0E31\u0E1A</button><p class="small" id="rep"></p>`);let s={seen:e.seen,q4:e.q4};document.querySelectorAll(".qpick").forEach(a=>a.querySelectorAll("button").forEach(o=>{o.onclick=()=>{s[a.dataset.q]=o.dataset.v,a.querySelectorAll("button").forEach(c=>c.classList.toggle("on",c===o))}}));let r=()=>{fs={seen:s.seen||null,q4:s.q4||null,at:new Date().toISOString().slice(0,16)};for(let a of["q1","q2","q3","q4note","q5"])fs[a]=(document.getElementById(a).value||"").trim().slice(0,600);Nh()};cc({"#qsave":()=>{r(),oc("rep")},"#qback":()=>{r(),i()}}),Bt.onKey(null)}function km(){Ie.modal(`<h1>TOPPLE<span>HEART</span></h1><p class="promise">Mix your skills, break their balance, and bring down giants a hundred times your size.</p>${Nm()}<button class="go" id="go">Begin</button>${_e.log.length?`${Dm?'<button class="ghost" id="qs">\u0E15\u0E2D\u0E1A\u0E04\u0E33\u0E16\u0E32\u0E21\u0E04\u0E19\u0E17\u0E14\u0E2A\u0E2D\u0E1A</button>':""}<button class="ghost" id="report">Copy play report</button><p class="small" id="rep"></p>`:""}<p class="small">${ps==="run"?"One run: about 3 minutes \xB7 two Wardens to bring down":"Fight lab \xB7 Hollen only"}</p>`);let i=()=>{Vi||(Vi=!0,Bt.onKey(null),Ie.closeModal(),De.unlock(),De.setEnabled(yt.sound),De.ambience("tower"),ds=0,xb())};cc({"#go":i,"#report":()=>oc("rep"),"#qs":()=>Um(km)}),Bt.onKey(e=>{e!=="Escape"&&i()})}function _b(){let i=_e.run.offer;Ie.modal(`<h2>Choose a power</h2><p class="small">Elara hums while you rest (+${ko.pickHeal} HP). One of three:</p>
    <div class="cards">${i.map((t,n)=>`<button class="pcard" data-k="${n}"><kbd>${n+1}</kbd><b>${t.name}</b><span>${t.text}</span></button>`).join("")}</div>`);let e=t=>{_e.choose(t)&&De.click()};document.querySelectorAll(".pcard").forEach(t=>{t.onclick=()=>e(+t.dataset.k)}),Bt.onKey(t=>{let n=["Digit1","Digit2","Digit3"].indexOf(t);n>=0&&e(n)})}function Om(){if(Tr)return;Tr=!0;let i=_e.log[_e.log.length-1],e=i.result==="won",t=_e.assistOffer(),n=!e&&i.giantHpPct!=null&&i.giantHpPct<=15,s=ps==="run"&&!e&&i.giant&&i.stage===i.stages-1,r=ps==="run",a=u=>`${Math.floor(u/60)}:${String(Math.floor(u%60)).padStart(2,"0")}`,o=r?Math.round(100*(i.stage+(i.giantHpPct!=null?1-i.giantHpPct/100:0))/i.stages):0,c=r?i.powers.map(u=>(fr.cards.find(h=>h.id===u)||{}).name).filter(Boolean):[];Ie.modal(`<h2>${e?r?"The Terraces sleep.":"Hollen rests.":n?"So close.":"Get up, Breaker."}</h2>
    ${r&&!e?`<p class="small">You fell at <b>${i.stageName}</b>${i.giantHpPct!=null?` \u2014 ${i.giant==="hollen"?"Hollen":"Cairn"} had ${i.giantHpPct}% left`:""}.</p><div class="runbar"><i style="width:${o}%"></i></div>`:""}
    <div class="stats">
      ${e?`<div><b>${r?a(i.realSec):i.time+"s"}</b><span>time</span></div><div><b>${i.heroHp}</b><span>HP left</span></div>`:i.giantHpPct!=null&&!r?`<div><b>${i.giantHpPct}%</b><span>Hollen's strength left</span></div>`:""}
      <div><b>${i.topples}</b><span>topples</span></div>${r?`<div><b>${i.crushes}</b><span>crushed</span></div>`:""}<div><b>${i.bestCombo}</b><span>best combo</span></div><div><b>${i.perfects}</b><span>perfect rolls</span></div>
    </div>
    ${c.length?`<p class="small">Powers: ${c.join(" \xB7 ")}</p>`:""}
    ${t?`<label class="assist"><input type="checkbox" id="assist" ${_e.assistPct?"checked":""}> Elara's Shield: take ${t}% less damage <small>(your choice \u2014 it never weakens Hollen)</small></label>`:""}
    ${s?`<button class="go" id="retry">Face ${i.giant==="hollen"?"Hollen":"him"} again</button><button class="ghost" id="again">Run from the start</button>`:`<button class="go" id="again">${r?"Run again":"Fight again"}</button>`}
    ${Dm?'<button class="ghost" id="qs">\u0E15\u0E2D\u0E1A\u0E04\u0E33\u0E16\u0E32\u0E21\u0E04\u0E19\u0E17\u0E14\u0E2A\u0E2D\u0E1A</button>':""}<button class="ghost" id="report">Copy play report</button><p class="small" id="rep"></p>`),cc({"#qs":()=>Um(()=>{Tr=!1,Om()}),"#again":nc,"#retry":()=>nc({stage:i.stage,picks:i.powers.slice()}),"#report":()=>oc("rep")});let l=document.getElementById("assist");l&&(l.onchange=()=>_e.setAssist(l.checked?t:0)),Bt.onKey(u=>{(u==="Enter"||u==="Space")&&nc(s?{stage:i.stage,picks:i.powers.slice()}:null)})}function nc(i=null){Bt.onKey(null),Ie.closeModal(),_e.reset(),_e.resume=i,ds=0}function zi(i){if(!(!Vi||Tr||wr===i))if(wr=i,i){fn.gameplayStop(),De.duck(!0);let e=_e.run?_e.run.picks.map(t=>fr.cards.find(n=>n.id===t)):[];Ie.modal(`<h2>Paused</h2>${e.length?`<div class="plist"><b>Your powers</b>${e.map(t=>`<div><b>${t.name}</b>${t.text}</div>`).join("")}</div>`:""}${Nm()}<div class="row"><button class="ghost" id="snd">Sound: ${yt.sound?"on":"off"}</button><button class="ghost" id="shk">Screen shake: ${yt.shake}</button><button class="ghost" id="ela">Elara: ${mm[yt.elara]}</button></div><button class="go" id="res">Resume</button><button class="ghost" id="report">Copy play report</button><p class="small" id="rep"></p><p class="small build">build ${Pm}</p>`),cc({"#res":()=>zi(!1),"#report":()=>oc("rep"),"#snd":()=>{yt.sound=!yt.sound,De.setEnabled(yt.sound),ec(),document.getElementById("snd").textContent=`Sound: ${yt.sound?"on":"off"}`},"#ela":()=>{yt.elara=yt.elara==="all"?"key":yt.elara==="key"?"off":"all",ec(),document.getElementById("ela").textContent=`Elara: ${mm[yt.elara]}`},"#shk":()=>{yt.shake=yt.shake==="full"?"less":yt.shake==="less"?"off":"full",ec(),document.getElementById("shk").textContent=`Screen shake: ${yt.shake}`}}),Bt.onKey(t=>{(t==="Escape"||t==="KeyP")&&zi(!1)})}else Bt.onKey(null),Ie.closeModal(),De.duck(!1),_e.flow.state==="fight"&&fn.gameplayStart(),ds=0}function yb(){let i=_e.hero,e=[[i.x,.5,i.z],[i.x,1.6,i.z]];for(let n of _e.foes)n.state!=="dead"&&e.push([n.x,.6,n.z]);let t=_e.giant;return t&&t.state!=="fallen"&&e.push([t.x,1,t.z],[t.x,3,t.z]),e}function Fm(i){let e=pi&&rc.lookAt;if(e){Rt.position.set(e[0]+e[3],e[1]+e[4],e[2]+e[5]),Rt.lookAt(e[0],e[1],e[2]);return}let t=_e.hero,n=_e.giant,s=new P(t.x*.8,1,t.z*.75-.8);if(n&&n.state!=="fallen")s.lerp(new P(n.x,1.8,n.z),.32);else if(_e.foes.length){let l=0,u=0;for(let h of _e.foes)l+=h.x,u+=h.z;s.lerp(new P(l/_e.foes.length,1,u/_e.foes.length),.2)}let a=innerWidth/innerHeight<1?new P(0,14.5,13):new P(0,12,13);n&&n.state==="toppled"&&a.multiplyScalar(.88);let o=s.clone().add(a),c=1-Math.exp(-i*5);if(Mm.lerp(o,c),bm.lerp(s,c),Rt.position.copy(Mm),Sr>0&&yt.shake!=="off"){let l=Math.min(1,Sr),u=l*l*.45*(yt.shake==="less"||Cm?.3:1)*(innerWidth<600?.7:1);vm+=i;let h=Math.sin(vm*70)*u;tc!=null?(Rt.position.x+=Math.sin(tc)*h,Rt.position.z+=Math.cos(tc)*h,Rt.position.y+=(Math.random()-.5)*u*.3):(Rt.position.x+=(Math.random()-.5)*u*2,Rt.position.y+=(Math.random()-.5)*u*2)}Sr=Math.max(0,Sr-i*2.4),Math.abs(Rt.fov-sc)>.01&&(Rt.fov+=(sc-Rt.fov)*(1-Math.exp(-(i||.016)*6)),Rt.updateProjectionMatrix()),Rt.lookAt(bm)}var Bm=0,Uh=0,br=[],da=(i,e)=>br.push({t:i,fn:e});function kh(i){Bm++;for(let t=br.length-1;t>=0&&!wr;t--)if(br[t].t-=i,br[t].t<=0){let n=br[t].fn;br.splice(t,1),n()}if(Vi&&!wr){ds+=i;let t=0;for(;ds>=Ni&&t<8;){_e.step(ic&&!(Rm&&_e.flow.state==="pick")?ic(_e):Bt.frame());for(let n of _e.drain())gb(n);ds-=Ni,t++,Uh++}t===8&&(ds=0),Fh.tick(i,_e)}let e=!Vi||wr||_e.stopT>1e-6?0:i*(_e.slowT>0?_e.slowScale:1);pa.update(_e,e,Ju);for(let t of Object.values(ms))t.update(_e,e,performance.now()/1e3);Oh.update(_e,e,performance.now()/1e3),dt.update(e),Er.tick(performance.now()/1e3),vp(performance.now()/1e3),Fm(i),Er.fadePillars(Rt,yb(),i),Ie.update(_e,i,mb),hs.render(Wn,Rt)}function zm(i){let e=Math.min(.1,(i-(ym||i))/1e3);ym=i,kh(e),requestAnimationFrame(zm)}async function vb(){fn.loadingStart(),Ih(.05,"Waking the terraces\u2026"),await fn.init(),hb();let i=fn.deviceType();i&&!Sn.has("touch")&&(Fn=i!=="desktop"),Fn&&(gm={light:"Strike",sunder:"Sunder",tether:"Tether",breaker:"Break",dodge:"Roll"});try{if(navigator.keyboard&&navigator.keyboard.getLayoutMap){let _=await Promise.race([navigator.keyboard.getLayoutMap(),new Promise(H=>setTimeout(()=>H(null),300))]),b=_&&_.get("Semicolon");b&&b!==";"&&(Un.breaker=b.toUpperCase());let L=_&&["KeyW","KeyA","KeyS","KeyD"].map(H=>_.get(H)).join("");L&&L.length===4&&(Dh=L.toUpperCase())}}catch{}let e=new No,t=_=>e.loadAsync(_).catch(()=>null),n=0,s=_=>_.then(b=>(n++,Ih(.1+.85*n/14),b)),[r,a,o,c,l,u,h,d,m]=await Promise.all(["hero","boss-guardian","weapon-firstLight","arena-pillar","arena-pillar-cracked","arena-pillar-claw","arena-gate","arena-brazier","arena-banner-torn"].map(_=>s(t(`${_}.glb`)))),f=await fetch("models.json").then(_=>_.json()).catch(()=>[]),x={};await Promise.all(["giant-hollen","giant-cairn","foe-shardling","foe-slinger"].filter(_=>f.includes(`${_}.glb`)).map(async _=>{x[_]=await t(`${_}.glb`)}));let[g,p,y,M]=await Promise.all(["arena-floor","sky-dawn","sky-dusk","arena-wall"].map(_=>s(pb(`${_}.webp`).catch(()=>null)))),v=document.getElementById("c"),E=(navigator.hardwareConcurrency||4)<=4||Fn;hs=new lo({canvas:v,antialias:!E,powerPreference:"high-performance",preserveDrawingBuffer:pi}),hs.setPixelRatio(Math.min(devicePixelRatio,E?1.5:2)),hs.shadowMap.enabled=!0,hs.shadowMap.type=su,Wn=new uo,Rt=new Pt(40,16/9,.1,200),Er=Ep(Wn,{shadows:!0},{floor:g,skyDawn:p,skyDusk:y,wall:M,pillar:c,pillarCracked:l,pillarClaw:u,gate:h,brazier:d,bannerTorn:m},ju.arena.radius),Er.setGate(!1,0),_e=mp(ub,{seed:+(Sn.get("seed")||Date.now()%1e5),mode:ps,counter:Sn.has("counter")}),fa&&(ic=xp(fa,7)),db(),pa=Lp(r,o),Wn.add(pa.obj),ms={hollen:ph(x["giant-hollen"]||a,Wn,Qt.hollen.height,null,"hollen"),cairn:ph(x["giant-cairn"]||a,Wn,Qt.cairn.height,Qt.cairn.tint,"cairn")};for(let _ of Object.values(ms))Wn.add(_.obj);Oh=Dp(a,Wn,{shardling:x["foe-shardling"],slinger:x["foe-slinger"]}),dt=kp(Wn),Ie=fm(Sm,{touch:Fn,stages:ps==="run"?ko.stages:null}),Ie.setGiant(Qt.hollen.name,Qt.hollen.title),Ie.onPause(()=>zi(!0)),Fh=pm(Hf,Ie,{...gm,move:Fn?"the stick":Dh},()=>yt.elara),Fn?(document.body.classList.add("touch-ui"),Bp(Sm)):Fp(v),addEventListener("resize",Tm),Tm();for(let _ of["gesturestart","gesturechange","gestureend"])document.addEventListener(_,b=>b.preventDefault(),{passive:!1});document.addEventListener("dblclick",_=>_.preventDefault(),{passive:!1}),document.addEventListener("touchmove",_=>{(_.touches.length>1||!_.target.closest(".modal"))&&_.preventDefault()},{passive:!1});let T=0;if(document.addEventListener("touchend",_=>{_.timeStamp-T<320&&!_.target.closest(".modal")&&_.preventDefault(),T=_.timeStamp},{passive:!1}),Sn.has("dbg")){let _=document.createElement("pre");_.style.cssText="position:fixed;left:50%;top:0;z-index:99;margin:0;font:11px monospace;background:#000a;color:#fff;pointer-events:none;padding:2px 4px",document.body.append(_);let b=0,L="",H=0;addEventListener("touchstart",I=>{b=I.touches.length;let U=I.target;L=`${U.tagName}${U.id?"#"+U.id:""}.${String(U.className).split(" ")[0]} @${Math.round(I.touches[0].clientX)},${Math.round(I.touches[0].clientY)}`},!0),addEventListener("click",()=>{H++},!0),addEventListener("touchend",I=>{b=I.touches.length},!0),setInterval(()=>{let I=visualViewport;_.textContent=`zoom ${I?I.scale.toFixed(2):"?"} vv ${I?Math.round(I.width)+"x"+Math.round(I.height):""} win ${innerWidth}x${innerHeight} dpr ${devicePixelRatio} touches ${b} stick ${Bt.touch?Bt.touch.x.toFixed(2):"-"}
last touch ${L} clicks ${H}`},200)}let A=matchMedia("(orientation: portrait)"),C=()=>{let _=Fn&&A.matches;document.body.classList.toggle("turn",_),_&&!pi&&zi(!0)};A.addEventListener("change",C),C(),addEventListener("keydown",_=>{(_.code==="Escape"||_.code==="KeyP")&&!Ie.modalOpen&&zi(!0)}),addEventListener("pointerdown",()=>De.unlock()),addEventListener("keydown",()=>De.unlock()),addEventListener("touchend",()=>De.unlock()),document.addEventListener("visibilitychange",()=>{document.hidden&&zi(!0)}),addEventListener("blur",()=>{pi||zi(!0)}),fn.muted()&&De.setForcedMute(!0),fn.onSettings(_=>De.setForcedMute(!!_.muteAudio)),Ih(1,"Ready"),document.getElementById("loader").classList.add("gone"),fn.loadingStop(),Fm(1),fa||pi?Vi=!0:km(),pi||requestAnimationFrame(zm),rc.ready=!0}var rc={ready:!1,lookAt:null,get sim(){return _e},rigged:()=>Object.fromEntries(Object.entries(ms).map(([i,e])=>[i,e.obj.userData.rigged])),foeViews:()=>Oh.count(),pick:i=>_e.choose(i),get scene(){return Wn},get renderer(){return hs},get camera(){return Rt},input:Bt,audio:De,settings:()=>yt,advance(i){let e=Math.round(i/16.666666666666668);for(let t=0;t<e;t++)kh(1/60)},frameAt(i){return kh(1/i),Uh},start(){Vi||(Vi=!0,Bt.onKey(null),Ie.closeModal())},pause:zi,again:nc,fxCount:()=>dt.count(),frames:()=>Bm,steps:()=>Uh,shown:()=>({modal:Ie.modalOpen,ended:Tr,paused:wr})};lb&&(window.__gf=rc);vb().catch(i=>{console.error(i);let e=document.getElementById("ltext");e&&(e.textContent="Could not load. Please reload.")});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
