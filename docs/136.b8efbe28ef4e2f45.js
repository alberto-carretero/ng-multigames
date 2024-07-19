"use strict";(self.webpackChunkng_multigames=self.webpackChunkng_multigames||[]).push([[136],{2136:(Y,g,p)=>{p.r(g),p.d(g,{RockPaperScissorModule:()=>J});var i=p(6895),f=p(4228),l=p(4032),d=p(5925),c=(()=>{return(o=c||(c={})).ROCK="rock",o.PAPER="paper",o.SCISSOR="scissor",c;var o})(),a=(()=>{return(o=a||(a={})).PLAYERS="players",o.COM="com",a;var o})(),e=p(8274),_=p(1135);let u=(()=>{class o{constructor(){this.gameStatus=new _.X({message:"games.rockPaperScissor.waitingForGame",playerOnePoints:0,playerTwoPoints:0,comPoints:0}),this.currentPlayer=1,this.playPlayers=""}getComputerChoice(){return[c.ROCK,c.PAPER,c.SCISSOR][Math.floor(3*Math.random())]}game(t,s){switch(t){case`${c.ROCK}${c.SCISSOR}`:case`${c.SCISSOR}${c.PAPER}`:case`${c.PAPER}${c.ROCK}`:this.gameStatus.next({...this.gameStatus.getValue(),message:s===a.COM?"games.win":"games.rockPaperScissor.winPlayerOne",playerOnePoints:this.gameStatus.getValue().playerOnePoints+1});break;case`${c.SCISSOR}${c.ROCK}`:case`${c.PAPER}${c.SCISSOR}`:case`${c.ROCK}${c.PAPER}`:this.gameStatus.next({...this.gameStatus.getValue(),message:s===a.COM?"games.lose":"games.rockPaperScissor.winPlayerTwo",...s===a.PLAYERS&&{playerTwoPoints:this.gameStatus.getValue().playerTwoPoints+1},...s===a.COM&&{comPoints:this.gameStatus.getValue().comPoints+1}});break;case`${c.SCISSOR}${c.SCISSOR}`:case`${c.PAPER}${c.PAPER}`:case`${c.ROCK}${c.ROCK}`:this.gameStatus.next({...this.gameStatus.getValue(),message:"games.rockPaperScissor.draw"})}}resetGameStatus(){this.gameStatus.next({message:"games.rockPaperScissor.waitingForGame",playerOnePoints:0,playerTwoPoints:0,comPoints:0})}resetTwoPlayersCurrentValues(){this.playPlayers="",this.currentPlayer=1}static#e=this.\u0275fac=function(s){return new(s||o)};static#o=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var h=p(5861);const C=function(){return{number:1}},S=function(){return{number:2}};function P(o,n){if(1&o&&(e.TgZ(0,"div",1),e._UZ(1,"i",2),e.TgZ(2,"div",3),e._uU(3),e.ALo(4,"translate"),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"div",4),e._uU(7),e.qZA(),e.TgZ(8,"div",5),e._uU(9,"/"),e.qZA(),e.TgZ(10,"div",6),e._uU(11),e.qZA(),e.TgZ(12,"div",7),e._uU(13),e.ALo(14,"translate"),e.ALo(15,"translate"),e.qZA(),e._UZ(16,"i",8),e.qZA()),2&o){const t=n.ngIf,s=e.oxw();e.xp6(3),e.hij(" ",s.mode===s.gameMode.COM?e.lcZ(4,5,"games.rockPaperScissor.user"):e.xi3(5,7,"games.rockPaperScissor.player",e.DdM(15,C))," "),e.xp6(4),e.Oqu(t.playerOnePoints),e.xp6(4),e.Oqu(s.mode===s.gameMode.COM?t.comPoints:t.playerTwoPoints),e.xp6(2),e.hij(" ",s.mode===s.gameMode.COM?e.lcZ(14,10,"games.rockPaperScissor.device"):e.xi3(15,12,"games.rockPaperScissor.player",e.DdM(16,S))," "),e.xp6(3),e.Q6J("ngClass",s.mode===s.gameMode.COM?"bi-pc-display":"bi-person")}}let k=(()=>{class o{constructor(){this.gameStatus=new _.X({message:"games.rockPaperScissor.waitingForGame",playerOnePoints:0,playerTwoPoints:0,comPoints:0}),this.mode=null,this.gameMode=a}static#e=this.\u0275fac=function(s){return new(s||o)};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-rock-paper-scissor-score"]],inputs:{gameStatus:"gameStatus",mode:"mode"},decls:2,vars:3,consts:[["class","d-flex align-items-center fs-4 mb-3",4,"ngIf"],[1,"d-flex","align-items-center","fs-4","mb-3"],[1,"bi","bi-person"],[1,"mx-3"],[1,"score__points"],[1,"score__baffle","mx-2"],[1,"score__player-two","score__points"],[1,"score__player-two","mx-3"],[1,"score__player-two","bi",3,"ngClass"]],template:function(s,r){1&s&&(e.YNc(0,P,17,17,"div",0),e.ALo(1,"async")),2&s&&e.Q6J("ngIf",e.lcZ(1,1,r.gameStatus))},dependencies:[i.mk,i.O5,i.Ov,l.X$],styles:[".score__player-two[_ngcontent-%COMP%]{color:#ffdead}.score__points[_ngcontent-%COMP%]{width:20px;text-align:center}.score__baffle[_ngcontent-%COMP%]{background:-webkit-linear-gradient(#ffdead,#ffffff);-webkit-background-clip:text;-webkit-text-fill-color:transparent}"],changeDetection:0})}return o})();function y(o,n){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,1,"games.rockPaperScissor."+t.playerOneChoice))}}function x(o,n){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Oqu(e.lcZ(2,1,"games.rockPaperScissor."+t.comChoice))}}function O(o,n){if(1&o&&(e.ynx(0),e.YNc(1,x,3,3,"span",2),e.BQk()),2&o){const t=e.oxw(),s=e.MAs(9);e.xp6(1),e.Q6J("ngIf",t.comChoice)("ngIfElse",s)}}function b(o,n){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Oqu(e.lcZ(2,1,"games.rockPaperScissor."+t.playerTwoChoice))}}function v(o,n){if(1&o&&(e.ynx(0),e.YNc(1,b,3,3,"span",2),e.BQk()),2&o){const t=e.oxw(),s=e.MAs(9);e.xp6(1),e.Q6J("ngIf",t.playerTwoChoice)("ngIfElse",s)}}function T(o,n){1&o&&(e.TgZ(0,"span"),e._uU(1,"-"),e.qZA())}let w=(()=>{class o{constructor(){this.playerOneChoice="",this.playerTwoChoice="",this.comChoice="",this.mode=a.COM,this.gameMode=a}static#e=this.\u0275fac=function(s){return new(s||o)};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-rock-paper-scissor-last-game-choices"]],inputs:{playerOneChoice:"playerOneChoice",playerTwoChoice:"playerTwoChoice",comChoice:"comChoice",mode:"mode"},decls:10,vars:5,consts:[[1,"last-game-choice","text-center","mt-2","mb-3","fs-5"],[1,"bi","bi-person","me-2"],[4,"ngIf","ngIfElse"],[1,"last-game-choice__baffle","mx-2"],[4,"ngIf"],[1,"last-game-choice__player-two","bi","ms-2",3,"ngClass"],["emptyTmpl",""]],template:function(s,r){if(1&s&&(e.TgZ(0,"div",0),e._UZ(1,"i",1),e.YNc(2,y,3,3,"span",2),e.TgZ(3,"span",3),e._uU(4,"/"),e.qZA(),e.YNc(5,O,2,2,"ng-container",4),e.YNc(6,v,2,2,"ng-container",4),e._UZ(7,"i",5),e.qZA(),e.YNc(8,T,2,0,"ng-template",null,6,e.W1O)),2&s){const m=e.MAs(9);e.xp6(2),e.Q6J("ngIf",r.playerOneChoice&&r.mode===r.gameMode.COM||r.playerOneChoice&&r.playerTwoChoice&&r.mode===r.gameMode.PLAYERS)("ngIfElse",m),e.xp6(3),e.Q6J("ngIf",r.mode===r.gameMode.COM),e.xp6(1),e.Q6J("ngIf",r.mode===r.gameMode.PLAYERS),e.xp6(1),e.Q6J("ngClass",r.mode===r.gameMode.COM?"bi-pc-display":"bi-person")}},dependencies:[i.mk,i.O5,l.X$],styles:[".last-game-choice__player-two[_ngcontent-%COMP%]{color:#ffdead}.last-game-choice__baffle[_ngcontent-%COMP%]{background:-webkit-linear-gradient(#ffdead,#ffffff);-webkit-background-clip:text;-webkit-text-fill-color:transparent}"],changeDetection:0})}return o})();function M(o,n){if(1&o&&(e.TgZ(0,"div",8),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o){const t=n.ngIf;e.xp6(1),e.hij(" ",e.lcZ(2,1,t.message)," ")}}function Z(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",9),e.NdJ("click",function(){const m=e.CHM(t).$implicit,G=e.oxw();return e.KtG(G.play(m))}),e._UZ(1,"img",10),e.qZA()}if(2&o){const t=n.$implicit;e.xp6(1),e.MGl("src","assets/images/rock-paper-scissors/",t,".png",e.LSH)}}let R=(()=>{class o{constructor(t,s){this.rockPaperScissorService=t,this.translateService=s,this.optionImageUrls=[],this.mode=a.COM,this.back=new e.vpe,this.gameMode=a,this.gameInfo="",this.playerOneChoice="",this.playerTwoChoice="",this.comChoice=""}ngOnInit(){this.gameInfo=this.mode===a.COM?this.setTranslation("games.rockPaperScissor.chooseOne"):this.setTranslation("games.rockPaperScissor.choosePlayer",{number:this.rockPaperScissorService.currentPlayer})}play(t){this.mode===a.COM?this.playWithCom(t):this.playWithOtherPlayer(t)}goBack(){this.rockPaperScissorService.resetGameStatus(),this.back.emit(!0)}playWithCom(t){this.playerOneChoice=t,this.comChoice=this.rockPaperScissorService.getComputerChoice(),this.rockPaperScissorService.game(t+this.comChoice,this.mode)}playWithOtherPlayer(t){var s=this;return(0,h.Z)(function*(){s.rockPaperScissorService.playPlayers+=t,1===s.rockPaperScissorService.currentPlayer?(s.playerOneChoice=t,s.rockPaperScissorService.currentPlayer++,s.gameInfo=s.setTranslation("games.rockPaperScissor.choosePlayer",{number:s.rockPaperScissorService.currentPlayer})):(s.playerTwoChoice=t,yield s.rockPaperScissorService.game(s.rockPaperScissorService.playPlayers,s.mode),s.rockPaperScissorService.resetTwoPlayersCurrentValues(),s.resetGameInfo())})()}resetGameInfo(){this.gameInfo=this.setTranslation("games.rockPaperScissor.choosePlayer",{number:1}),setTimeout(()=>{this.playerOneChoice="",this.playerTwoChoice=""},500)}setTranslation(t,s){return this.translateService.instant(t,s)}static#e=this.\u0275fac=function(s){return new(s||o)(e.Y36(u),e.Y36(l.sK))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-rock-paper-scissor-board"]],inputs:{optionImageUrls:"optionImageUrls",mode:"mode"},outputs:{back:"back"},decls:10,vars:13,consts:[[1,"board","container-fluid","vh-100","py-4"],[1,"board__back","bi","bi-arrow-left","position-absolute","top-0","end-0","fs-4","p-2",3,"click"],[3,"gameStatus","mode"],["class","text-center fs-2",4,"ngIf"],[3,"playerOneChoice","playerTwoChoice","comChoice","mode"],[1,"d-flex","justify-content-center","align-items-center"],["class","board__option mx-3 p-3 border border-3 rounded",3,"click",4,"ngFor","ngForOf"],[1,"mt-3","text-center","fs-2"],[1,"text-center","fs-2"],[1,"board__option","mx-3","p-3","border","border-3","rounded",3,"click"],[3,"src"]],template:function(s,r){1&s&&(e.TgZ(0,"div",0)(1,"i",1),e.NdJ("click",function(){return r.goBack()}),e.qZA(),e._UZ(2,"app-rock-paper-scissor-score",2),e.YNc(3,M,3,3,"div",3),e.ALo(4,"async"),e._UZ(5,"app-rock-paper-scissor-last-game-choices",4),e.TgZ(6,"div",5),e.YNc(7,Z,2,1,"div",6),e.qZA(),e.TgZ(8,"div",7),e._uU(9),e.qZA()()),2&s&&(e.xp6(2),e.Q6J("gameStatus",r.rockPaperScissorService.gameStatus)("mode",r.mode),e.xp6(1),e.Q6J("ngIf",e.lcZ(4,11,r.rockPaperScissorService.gameStatus)),e.xp6(2),e.Q6J("playerOneChoice",r.playerOneChoice)("playerTwoChoice",r.playerTwoChoice)("comChoice",r.comChoice)("mode",r.mode),e.xp6(2),e.Q6J("ngForOf",r.optionImageUrls),e.xp6(1),e.ekj("board__game-info--two",2===r.rockPaperScissorService.currentPlayer),e.xp6(1),e.hij(" ",r.gameInfo," "))},dependencies:[i.sg,i.O5,k,w,i.Ov,l.X$],styles:[".board__option[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;cursor:pointer;background-color:#fff}.board__option[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;max-width:100px;filter:drop-shadow(5px 5px 4px #000000)}.board__game-info--two[_ngcontent-%COMP%]{color:#ffdead}"],changeDetection:0})}return o})();function A(o,n){1&o&&e._UZ(0,"app-exit-game")}function I(o,n){if(1&o&&(e.TgZ(0,"div",11),e._UZ(1,"img",12),e.TgZ(2,"p",13),e._uU(3),e.ALo(4,"translate"),e.qZA()()),2&o){const t=n.$implicit;e.xp6(1),e.MGl("src","assets/images/rock-paper-scissors/",t,".png",e.LSH),e.xp6(2),e.Oqu(e.lcZ(4,2,"games.rockPaperScissor."+t))}}function U(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",4)(1,"div",5),e.YNc(2,I,5,4,"div",6),e.qZA(),e.TgZ(3,"div",7)(4,"button",8),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.selectMode(r.modeType.PLAYERS))}),e._UZ(5,"i",9),e._uU(6," vs "),e._UZ(7,"i",9),e.qZA(),e.TgZ(8,"button",8),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.selectMode(r.modeType.COM))}),e._UZ(9,"i",9),e._uU(10," vs "),e._UZ(11,"i",10),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.optionImageUrls)}}function L(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"app-rock-paper-scissor-board",14),e.NdJ("back",function(r){e.CHM(t);const m=e.oxw();return e.KtG(m.showMenu(r))}),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("optionImageUrls",t.optionImageUrls)("mode",t.selectedMode)}}const $=[{path:"",component:(()=>{class o{constructor(t){this.rockPaperScissorService=t,this.optionImageUrls=[c.ROCK,c.PAPER,c.SCISSOR],this.selectedMode=a.COM,this.modeType=a,this.displayMenu=!0}selectMode(t){this.selectedMode=t,this.displayMenu=!1}showMenu(t){this.displayMenu=t}static#e=this.\u0275fac=function(s){return new(s||o)(e.Y36(u))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-rock-paper-scissor"]],decls:4,vars:3,consts:[[1,"rock-paper-scissors","container-fluid","vh-100"],[4,"ngIf"],["class","d-flex flex-column justify-content-center align-items-center vh-100",4,"ngIf"],[3,"optionImageUrls","mode","back",4,"ngIf"],[1,"d-flex","flex-column","justify-content-center","align-items-center","vh-100"],[1,"d-flex","my-4"],["class","rock-paper-scissors__option mx-3 p-3 text-center",4,"ngFor","ngForOf"],[1,"d-flex","flex-column"],["type","button",1,"btn","fs-5","my-2",3,"click"],[1,"bi","bi-person"],[1,"bi-pc-display"],[1,"rock-paper-scissors__option","mx-3","p-3","text-center"],[3,"src"],[1,"mt-3","mb-0","fs-3"],[3,"optionImageUrls","mode","back"]],template:function(s,r){1&s&&(e.TgZ(0,"div",0),e.YNc(1,A,1,0,"app-exit-game",1),e.YNc(2,U,12,1,"div",2),e.YNc(3,L,1,2,"app-rock-paper-scissor-board",3),e.qZA()),2&s&&(e.xp6(1),e.Q6J("ngIf",r.displayMenu),e.xp6(1),e.Q6J("ngIf",r.displayMenu),e.xp6(1),e.Q6J("ngIf",!r.displayMenu))},dependencies:[i.sg,i.O5,d.R,R,l.X$],styles:[".rock-paper-scissors[_ngcontent-%COMP%]{color:#fff;text-shadow:2px 2px 2px rgba(150,102,107,.5);background-image:linear-gradient(180deg,#96666b,#dccacb)}.rock-paper-scissors[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#96666b;color:#fff;width:150px}.rock-paper-scissors[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#fff;color:#96666b;border:1px solid #96666b}.rock-paper-scissors__option[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.rock-paper-scissors__option[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;max-width:100px;filter:drop-shadow(5px 5px 4px #000000)}"]})}return o})()}];let J=(()=>{class o{static#e=this.\u0275fac=function(s){return new(s||o)};static#o=this.\u0275mod=e.oAB({type:o});static#t=this.\u0275inj=e.cJS({imports:[f.Bz.forChild($),i.ez,l.aw,d.R]})}return o})()}}]);