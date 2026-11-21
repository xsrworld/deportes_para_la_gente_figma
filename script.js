(function(){
var C={k:'#152d22',s:'#bfa27e',w:'#f0e4cc',g:'#6a9a4f',d:'#152d22',o:'#ee7339',n:'#8a6b4a'};
var A=["...dddd.....","..dssssd....","..dssssd....","...wwww.....","..wwwwww..s.",".swwwwww.s..","..wwwwww....","..gggggg....","..gg..gg....",".ss....ss...",".dd....dd..."];
function sprite(m,sw,sh){return m.map(function(r){return r.split('').map(function(c){return c==='w'&&sw?'o':c==='g'&&sh?'d':c;}).join('');});}
function draw(rows,x,y,u,out){rows.forEach(function(r,j){for(var i=0;i<r.length;i++){var c=r[i];if(c!=='.')out.push('<rect x="'+(x+i*u)+'" y="'+(y+j*u)+'" width="'+u+'" height="'+u+'" fill="'+C[c]+'"/>');}});}
var S=[];
S.push('<rect width="800" height="362" fill="#152d22"/>');
// sun
[[736,12,40],[724,24,64],[716,36,80],[724,60,64]].forEach(function(r){S.push('<rect x="'+(r[0]-0)+'" y="'+r[1]+'" width="'+r[2]+'" height="14" fill="#ee7339"/>');});
S.push('<rect x="728" y="14" width="56" height="70" fill="#ee7339"/>');
// floodlights
for(var f=0;f<2;f++){var fx=f?700:40;S.push('<rect x="'+fx+'" y="8" width="52" height="8" fill="#f0e4cc"/><rect x="'+(fx+22)+'" y="16" width="6" height="64" fill="#f0e4cc"/>');}
// skyline + stands
S.push('<rect x="0" y="86" width="800" height="26" fill="#6a9a4f"/>');
for(var b=0;b<14;b++){S.push('<rect x="'+(b*58+10)+'" y="'+(70+(b*37%22))+'" width="22" height="30" fill="#6a9a4f"/>');}
var bands=['#f0e4cc','#6a9a4f','#f0e4cc','#8fb06a','#6a9a4f','#f0e4cc'];
bands.forEach(function(c,i){S.push('<rect x="0" y="'+(112+i*13)+'" width="800" height="13" fill="'+c+'"/>');});
for(var q=0;q<44;q++){var cc=['#ee7339','#152d22','#f0e4cc'][q%3];S.push('<rect x="'+((q*47+13)%790)+'" y="'+(116+(q%6)*13)+'" width="8" height="6" fill="'+cc+'"/>');}
// wall + tan strip
S.push('<rect x="0" y="190" width="800" height="12" fill="#152d22"/><rect x="0" y="202" width="800" height="22" fill="#bfa27e"/><rect x="0" y="224" width="800" height="14" fill="#f0e4cc"/>');
// goal
S.push('<rect x="40" y="196" width="150" height="50" fill="#f0e4cc"/>');
for(var gy=0;gy<5;gy++)for(var gx=0;gx<14;gx++){S.push('<rect x="'+(46+gx*10)+'" y="'+(202+gy*8)+'" width="6" height="4" fill="#bfa27e"/>');}
// pitch stripes
['#6a9a4f','#7fae5b','#6a9a4f','#5c8b44','#6a9a4f','#7fae5b'].forEach(function(c,i){S.push('<rect x="0" y="'+(246+i*20)+'" width="800" height="20" fill="'+c+'"/>');});
S.push('<rect x="0" y="342" width="800" height="20" fill="#5c8b44"/>');
// players + ball
draw(sprite(A,false,false),440,118,16,S);
draw(sprite(A,true,true),600,178,16,S);
S.push('<rect x="520" y="296" width="14" height="14" fill="#f0e4cc"/><rect x="524" y="300" width="6" height="6" fill="#152d22"/>');
// ground shadows
S.push('<rect x="420" y="296" width="110" height="8" fill="#152d22" opacity=".35"/>');
document.getElementById('scene').innerHTML=S.join('');
document.querySelectorAll('svg.px').forEach(function(el){
  var o=[];o.push('<rect width="130" height="151" fill="#6a9a4f"/>');
  for(var i=0;i<6;i++)o.push('<rect x="0" y="'+(i*26+8)+'" width="130" height="12" fill="#7fae5b"/>');
  draw(sprite(A,el.dataset.s==='b',el.dataset.s==='b'),10,24,10,o);
  el.innerHTML=o.join('');
});
})();
