(this.webpackJsonpgenius_square=this.webpackJsonpgenius_square||[]).push([[0],{31:function(t,e,o){"use strict";o.r(e);var n=o(7),a=o.n(n),s=o(19),i=o.n(s),r=o(2),h=o(3),c=o(5),p=o(4),l=(o(24),o(25),o(10)),u=o(13),j=o(8),b=60,f=50,S=80,v=o(1),x=57,g=function(t){return t.map((function(t){return Object(u.a)(t)}))},O=function(t){var e=t.x,o=t.y,n=t.opacity,a=t.fill,s=[e+x,o];return s=[].concat(Object(u.a)(s),[e+x+7,o+7,e+x+7,o+7+x,e+7,o+x+7,e,o+x,e+x,o+x]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(l.e,{points:s,stroke:a,strokeWidth:.1,opacity:.4*n,fill:a,closed:!0}),Object(v.jsx)(l.f,{x:e,y:o,width:x,height:x,stroke:"black",strokeWidth:.5,opacity:.5*n}),Object(v.jsx)(l.f,{x:e,y:o,width:x,height:x,fill:a,shadowBlur:1,shadowOpacity:.5*n,shadowColor:"red",opacity:n})]})},d=function(t){var e=t.x,o=t.y,n=t.onRotate,a=e+8*Math.cos(Math.PI/180*30),s=o-8*Math.sin(Math.PI/180*30);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(l.f,{x:e-8-7,y:o-8-7,width:30,height:30,onClick:n,onTap:n}),Object(v.jsx)(l.e,{points:[a,s-7,a,s,a-7,s],stroke:"black",lineJoin:"round"}),Object(v.jsx)(l.a,{x:e,y:o,angle:310,rotation:25,innerRadius:8,outerRadius:8.5,stroke:"black",strokeWidth:1})]})},y=function(t){Object(c.a)(o,t);var e=Object(p.a)(o);function o(t){var n;return Object(r.a)(this,o),(n=e.call(this,t)).onRotate=function(){var t=(n.state.rotation+1)%n.takens.length;n.setState({rotation:t,taken:g(n.takens[t])})},n.takens=t.takens,n.state={opacity:1,rotation:0,drag:!1,taken:g(n.takens[0])},n.x=t.x,n.y=t.y,n.offset_x=t.x,n.offset_y=t.y,n.fill=t.fill,n.num_move=0,n}return Object(h.a)(o,[{key:"render",value:function(){var t=this,e=this.props.x,o=this.props.y,n=this.x,a=this.y;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(l.c,{draggable:!0,onMouseEnter:function(t){t.target.getStage().container().style.cursor="pointer"},onMouseLeave:function(t){t.target.getStage().container().style.cursor="default"},onDragStart:function(e){t.x=e.target.getAbsolutePosition().x+t.offset_x,t.y=e.target.getAbsolutePosition().y+t.offset_y,t.props.onShapeMoveStart(e,t.props.id),t.setState({opacity:.7,drag:!0,move_x:100})},onDragMove:function(e){t.num_move%2===0&&t.props.onShapeMove(e,t.props.id,t.state.taken),t.num_move++},onDragEnd:function(e){t.x=e.target.getAbsolutePosition().x+t.offset_x,t.y=e.target.getAbsolutePosition().y+t.offset_y,t.props.onShapeDown(e,t.props.id,t.state.taken),t.setState({opacity:1,drag:!1})},onMouseDown:function(e){t.setState({opacity:.7})},onMouseUp:function(e){t.setState({opacity:1})},children:[this.state.taken.map((function(n,a){return n.map((function(n,s){return n?Object(v.jsx)(O,{x:e+x*s,y:o+x*a,opacity:t.state.opacity,fill:t.fill},"block ".concat(a," ").concat(s)):null}))})),this.props.rotation&&1!==this.takens.length&&Object(v.jsx)(d,{x:e+x*this.state.taken[0].length+20,y:o,opacity:this.state.opacity,onRotate:this.onRotate})]}),this.state.drag&&this.state.taken.map((function(e,o){return e.map((function(e,s){return e?Object(v.jsx)(O,{x:n+x*s,y:a+x*o,opacity:t.state.opacity,fill:t.fill},"original-block ".concat(o," ").concat(s)):null}))}))]})}}]),o}(n.Component),k=function(t){var e=[[[!1,!0,!1],[!0,!0,!0]],[[!0,!1],[!0,!0],[!0,!1]],[[!0,!0,!0],[!1,!0,!1]],[[!1,!0],[!0,!0],[!1,!0]]];return Object(v.jsx)(y,Object(j.a)(Object(j.a)({},t),{},{takens:e,fill:"#DEC20B"}))},M=function(t){var e=[[[!0,!1],[!0,!0],[!1,!0]],[[!1,!0,!0],[!0,!0,!1]],[[!1,!0],[!0,!0],[!0,!1]],[[!0,!0,!1],[!1,!0,!0]]];return Object(v.jsx)(y,Object(j.a)(Object(j.a)({},t),{},{takens:e,fill:"red"}))},_=function(t){var e=[[[!0,!0,!0]],[[!0],[!0],[!0]]];return Object(v.jsx)(y,Object(j.a)(Object(j.a)({},t),{},{takens:e,fill:"orange"}))},m=function(t){var e=[[[!0,!0],[!0,!1],[!0,!1]],[[!0,!0],[!1,!0],[!1,!0]],[[!1,!1,!0],[!0,!0,!0]],[[!0,!1,!1],[!0,!0,!0]],[[!1,!0],[!1,!0],[!0,!0]],[[!0,!1],[!0,!1],[!0,!0]],[[!0,!0,!0],[!0,!1,!1]],[[!0,!0,!0],[!1,!1,!0]]];return Object(v.jsx)(y,Object(j.a)(Object(j.a)({},t),{},{takens:e,fill:"lightblue"}))},w=function(t){var e=[[[!0,!1],[!0,!0]],[[!1,!0],[!0,!0]],[[!0,!0],[!0,!1]],[[!0,!0],[!1,!0]]];return Object(v.jsx)(y,Object(j.a)(Object(j.a)({},t),{},{takens:e,fill:"#9370DB"}))},D=function(t){var e=[[[!0,!0],[!0,!0]]];return Object(v.jsx)(y,Object(j.a)(Object(j.a)({},t),{},{takens:e,fill:"green"}))},P=function(t){var e=[[[!0,!0]],[[!0],[!0]]];return Object(v.jsx)(y,Object(j.a)(Object(j.a)({},t),{},{takens:e,fill:"#a66b1f"}))},C=function(t){var e=[[[!0]]];return Object(v.jsx)(y,Object(j.a)(Object(j.a)({},t),{},{takens:e,fill:"#1E90FF"}))},W=function(t){var e=[[[!0,!0,!0,!0]],[[!0],[!0],[!0],[!0]]];return Object(v.jsx)(y,Object(j.a)(Object(j.a)({},t),{},{takens:e,fill:"grey"}))},A=function(t){var e=t.i,o=t.j;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(l.b,{x:f+o*b+30,y:S+e*b+30-2.5,radiusX:24,radiusY:b/3.5,fill:"grey"}),Object(v.jsx)(l.b,{x:f+o*b+30,y:S+e*b+30+2.5,radiusX:24,radiusY:b/3.5,fill:"grey",opacity:.5,strokeWidth:0,stroke:"white"})]})},F=function(t){Object(c.a)(o,t);var e=Object(p.a)(o);function o(t){var n;return Object(r.a)(this,o),(n=e.call(this,t)).onShapeMoveStart=function(t,e){var o=t.target.getAbsolutePosition();n.shape_abs_positions[e][0]=o.x,n.shape_abs_positions[e][1]=o.y},n.onShapeMove=function(t,e,o){var a,s,i=n.state.fill,r=t.target.getAbsolutePosition(),h=n.shape_positions[e][0]+r.x,c=n.shape_positions[e][1]+r.y;if(s=Math.round((h-f)/b),!((a=Math.round((c-S)/b))>=6||s>=6)){for(var p=0;p<i.length;p++)for(var l=0;l<i[p].length;l++)i[p][l]=!1;for(var u=0;u<o.length;u++)for(var j=0;j<o[u].length;j++)a+u>=0&&a+u<6&&s+j>=0&&s+j<6&&o[u][j]&&(i[a+u][s+j]=!0);a>=0&&a<6&&s>=0&&s<6&&t.target.setAbsolutePosition({x:r.x+s*b+f-h,y:r.y+a*b+S-c}),n.setState({fill:i})}},n.onShapeDown=function(t,e,o){for(var a=n.state.taken,s=n.state.rotation,i=t.target.getAbsolutePosition(),r=n.shape_positions[e][0]+i.x,h=n.shape_positions[e][1]+i.y,c=Math.round((r-f)/b),p=Math.round((h-S)/b),l=!0,u=n.shape_positions[e][0]+n.shape_abs_positions[e][0],j=n.shape_positions[e][1]+n.shape_abs_positions[e][1],v=Math.round((u-f)/b),x=Math.round((j-S)/b),g=!0,O=0;O<o.length;O++)for(var d=0;d<o[O].length;d++)if(!(x+O>=0&&x+O<6&&v+d>=0&&v+d<6)){g=!1;break}if(g)for(var y=0;y<o.length;y++)for(var k=0;k<o[y].length;k++)n.state.block_pieces[x+y][v+k]||(a[x+y][v+k]=!1);if(p>=6||c>=6)return s[e]=!0,void n.setState({taken:a,rotation:s});for(var M=0;M<o.length;M++)for(var _=0;_<o[M].length;_++)if(!(p+M>=0&&p+M<6&&c+_>=0&&c+_<6&&(!1===o[M][_]||!1===a[p+M][c+_]&&!0===o[M][_]))){l=!1;break}if(l){s[e]=!1;for(var m=0;m<o.length;m++)for(var w=0;w<o[m].length;w++)o[m][w]&&(a[p+m][c+w]=!0);for(var D=!0,P=0;P<a.length;P++)for(var C=0;C<a[P].length;C++)if(!a[P][C]){D=!1;break}D&&n.props.onWin()}else t.target.setAbsolutePosition({x:n.shape_abs_positions[e][0],y:n.shape_abs_positions[e][1]});n.setState({taken:a,rotation:s})},n.random_game=function(){for(var t=n.state.taken,e=[],o=0;o<t.length;o++){for(var a=0;a<t[o].length;a++)t[o][a]=!1;e.push(Object(u.a)(t[o]))}for(var s=0;s<7;){var i=Math.floor(6*Math.random()),r=Math.floor(6*Math.random());!1===t[i][r]&&(t[i][r]=!0,e[i][r]=!0,s++)}n.setState({block_pieces:e,taken:t})},n.state={block_pieces:[],taken:[[!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1]],fill:[[!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1]],rotation:[!0,!0,!0,!0,!0,!0,!0,!0,!0]},n.shape_positions=[[450,30],[670,30],[890,30],[450,230],[670,230],[890,230],[450,430],[670,430],[890,430]],n.shape_abs_positions=[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],n}return Object(h.a)(o,[{key:"componentDidMount",value:function(){this.random_game()}},{key:"render",value:function(){var t=this;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(l.f,{x:f,y:S,width:360,height:360,stroke:"grey",strokeWidth:10}),this.state.taken.map((function(e,o){return e.map((function(e,n){return Object(v.jsx)(l.f,{x:f+n*b,y:S+o*b,width:b,height:b,stroke:"grey",strokeWidth:1.2,fill:t.state.fill[o][n]?"#DCDCDC":"white"},"".concat(o," ").concat(n))}))})),this.state.block_pieces.map((function(t,e){return t.map((function(t,o){return t?Object(v.jsx)(A,{i:e,j:o},"block piece ".concat(e," ").concat(o)):null}))})),Object(v.jsx)(k,{x:this.shape_positions[0][0],y:this.shape_positions[0][1],onShapeMove:this.onShapeMove,onShapeDown:this.onShapeDown,onShapeMoveStart:this.onShapeMoveStart,id:0,rotation:this.state.rotation[0]}),Object(v.jsx)(M,{x:this.shape_positions[1][0],y:this.shape_positions[1][1],onShapeMove:this.onShapeMove,onShapeDown:this.onShapeDown,onShapeMoveStart:this.onShapeMoveStart,id:1,rotation:this.state.rotation[1]}),Object(v.jsx)(_,{x:this.shape_positions[2][0],y:this.shape_positions[2][1],onShapeMove:this.onShapeMove,onShapeDown:this.onShapeDown,onShapeMoveStart:this.onShapeMoveStart,id:2,rotation:this.state.rotation[2]}),Object(v.jsx)(m,{x:this.shape_positions[3][0],y:this.shape_positions[3][1],onShapeMove:this.onShapeMove,onShapeDown:this.onShapeDown,onShapeMoveStart:this.onShapeMoveStart,id:3,rotation:this.state.rotation[3]}),Object(v.jsx)(w,{x:this.shape_positions[4][0],y:this.shape_positions[4][1],onShapeMove:this.onShapeMove,onShapeDown:this.onShapeDown,onShapeMoveStart:this.onShapeMoveStart,id:4,rotation:this.state.rotation[4]}),Object(v.jsx)(D,{x:this.shape_positions[5][0],y:this.shape_positions[5][1],onShapeMove:this.onShapeMove,onShapeDown:this.onShapeDown,onShapeMoveStart:this.onShapeMoveStart,id:5,rotation:this.state.rotation[5]}),Object(v.jsx)(P,{x:this.shape_positions[6][0],y:this.shape_positions[6][1],onShapeMove:this.onShapeMove,onShapeDown:this.onShapeDown,onShapeMoveStart:this.onShapeMoveStart,id:6,rotation:this.state.rotation[6]}),Object(v.jsx)(C,{x:this.shape_positions[7][0],y:this.shape_positions[7][1],onShapeMove:this.onShapeMove,onShapeDown:this.onShapeDown,onShapeMoveStart:this.onShapeMoveStart,rotation:this.state.rotation[7],id:7}),Object(v.jsx)(W,{x:this.shape_positions[8][0],y:this.shape_positions[8][1],onShapeMove:this.onShapeMove,onShapeDown:this.onShapeDown,onShapeMoveStart:this.onShapeMoveStart,rotation:this.state.rotation[8],id:8})]})}}]),o}(n.Component),R=function(t){Object(c.a)(o,t);var e=Object(p.a)(o);function o(t){var n;return Object(r.a)(this,o),(n=e.call(this,t)).onNewGame=function(){n.setState({num_game:n.state.num_game+1,win:!1})},n.onWin=function(){n.setState({win:!0})},n.state={num_game:0,win:!1},n}return Object(h.a)(o,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"ml-5 mt-2 mb-0",children:[Object(v.jsx)("h2",{children:"Genius Square Game"}),Object(v.jsx)("p",{children:"Please move the blocks to fill out the 6x6 grid. You can change the block's shape by clicking rotation icons"}),Object(v.jsx)("button",{className:"btn btn-primary",onClick:this.onNewGame,children:"Start a new game"}),this.state.win&&Object(v.jsx)("span",{className:"ml-5 text-primary",style:{fontSize:"20px"},children:"Congratulations! You beat me"})]}),Object(v.jsx)(l.g,{width:1200,height:700,children:Object(v.jsx)(l.d,{children:Object(v.jsx)(F,{onWin:this.onWin},this.state.num_game)})})]})}}]),o}(n.Component);i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(R,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.76dea037.chunk.js.map