(this["webpackJsonporaculo-pandemico"]=this["webpackJsonporaculo-pandemico"]||[]).push([[0],{24:function(e,a,t){e.exports=t(36)},29:function(e,a,t){},30:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(22),o=t.n(s),l=(t(29),t(30),t(2)),i=t(1),u=t(7),c=t.n(u);var m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"cristalBall"},r.a.createElement("div",{className:"cristal"},r.a.createElement("div",{className:"ball",onMouseOver:function(){c()(document).ready((function(){var e="Or\xe1culo pand\xe9mico",a=e.length,t=0,n=0,r="",s="";!function o(l){setTimeout((function(){--l&&o(l),function(o){for(var l=0;l<a-n;l++){var i=Math.floor("abcdefghijklmnopqrstuvwxyz&^$!".length*Math.random()),u="abcdefghijklmnopqrstuvwxyz&^$!".charAt(i);r+=u}9===t&&n++;10===t&&(s+=e.charAt(n-1),t=0);c()(".name").html(s+r),r=""}(),t+=1}),20)}(10*a+1)}))}},r.a.createElement("div",{className:"name"},"Or\xe1culo pand\xe9mico"),r.a.createElement("button",{type:"button",className:"start-button"},r.a.createElement(i.b,{className:"link-oracle",to:"/form",title:"Comenzar"},"Comenzar")),r.a.createElement("div",{className:"bright"})),r.a.createElement("div",{className:"step first"},r.a.createElement("div",{className:"square"},r.a.createElement("div",{className:"div1"}),r.a.createElement("div",{className:"div2"})),r.a.createElement("div",{className:"square"},r.a.createElement("div",{className:"div3"}),r.a.createElement("div",{className:"div4"}))),r.a.createElement("div",{className:"step second"},r.a.createElement("div",{className:"square"},r.a.createElement("div",{className:"div1"}),r.a.createElement("div",{className:"div2"})),r.a.createElement("div",{className:"square"},r.a.createElement("div",{className:"div3"}),r.a.createElement("div",{className:"div4"})))),r.a.createElement("div",{className:"bottom"},r.a.createElement("div",{className:"bottom1"}),r.a.createElement("div",{className:"bottom3"})),r.a.createElement("div",{className:"table"})),r.a.createElement("div",{className:"background"},r.a.createElement("div",{className:"circle"},r.a.createElement("div",{className:"circle1"},r.a.createElement("div",{className:"circle2"},"\u2736",r.a.createElement("div",{className:"circle3"},r.a.createElement("div",{className:"star"},"\u2736"))))),r.a.createElement("div",null)))},d=t(11),p=t(10),b=t(12),h=t(13),f=t(14),v=t(16),E=t(15),g=function(e){var a=function(a){e.handleInputValue(a.currentTarget.name,a.currentTarget.value)};return r.a.createElement("div",{className:"form-input"},r.a.createElement("label",{htmlFor:e.name,className:e.name},e.labelName),r.a.createElement("input",{className:"".concat("hair-input"===e.id?"hiddenInputMessage":""),type:e.type,name:e.name,id:e.id,value:e.value,onChange:a,required:!0}),r.a.createElement("select",{className:"".concat("hair-input"!==e.id?"hiddenInputMessage":""),onChange:a,name:e.name,id:e.id},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"liso"},"liso"),r.a.createElement("option",{value:"rizado"},"rizado"),r.a.createElement("option",{value:"ondulado"},"ondulado"),r.a.createElement("option",{value:"inexistente"},"inexistente")))},y=function(e){Object(v.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(b.a)(this,t),(n=a.call(this,e)).state={userInfo:{firstName:"",surname:"",age:"",city:"",hate:"",love:"",food:"",phobia:"",hair:""},isValidated:!1},n.handleInputValue=n.handleInputValue.bind(Object(f.a)(n)),n}return Object(h.a)(t,[{key:"swing",value:function(){for(var e=c()(".swinger"),a=0;a<15;a++){var t=document.createElement("li"),n=document.createElement("span"),r=document.createElement("span");t.className="no"+a,n.className="string",r.className="ballP",e.append(t),c()(t).append(n,r)}for(var s=[],o=0;o<15;o++){var l=2352/Math.pow(2*Math.PI*(15+o),2);s.push(l)}s.reverse();for(var i=c()("li"),u=0;u<15;u++){var m=i[u],d=2*Math.PI*Math.sqrt(s[u]/9.8),p=150*s[u];c()(".string",m).height(10*p),c()(".ballP",m).height(p).width(p).css("left",-.5*p),c()(m).attr("style","animation-duration: "+d+"s;")}}},{key:"componentDidUpdate",value:function(){localStorage.setItem("data",JSON.stringify(this.state.userInfo))}},{key:"componentDidMount",value:function(){this.swing();var e=JSON.parse(localStorage.getItem("data"));null!==e&&this.setState((function(a){return{userInfo:Object(p.a)(Object(p.a)({},a.userInfo),{},{firstName:e.firstName,surname:e.surname,age:e.age,city:e.city,hate:e.hate,love:e.love,food:e.food,phobia:e.phobia,hair:e.hair})}}))}},{key:"handleInputValue",value:function(e,a){var t=this;this.setState((function(t){return{userInfo:Object(p.a)(Object(p.a)({},t.userInfo),{},Object(d.a)({},e,a))}}),(function(){return t.validateForm()}))}},{key:"validateForm",value:function(){var e=this.state.userInfo,a=e.firstName,t=e.surname,n=e.age,r=e.city,s=e.hate,o=e.love,l=e.food,i=e.phobia,u=e.hair,c=a.length>0&&t.length>0&&n.length>0&&r.length>0&&s.length>0&&o.length>0&&l.length>0&&i.length>0&&u.length>0;this.setState({isValidated:c})}},{key:"render",value:function(e){return r.a.createElement("div",{className:"form"},r.a.createElement("form",{id:"formContainer"},r.a.createElement(i.b,{className:"link-return1",to:"/",title:"Volver"},"Volver"),r.a.createElement("h2",{className:"form-title"},"Para descubrir tus vidas pasadas ",r.a.createElement("br",null),"el Or\xe1culo necesita saber de ti ..."),r.a.createElement("ul",{className:"swinger"}),r.a.createElement(g,{id:"name-input",labelName:"Nombre",className:"name-input",type:"text",name:"firstName",value:this.state.userInfo.firstName,handleInputValue:this.handleInputValue}),r.a.createElement(g,{id:"surname-input",labelName:"Apellido",className:"surname-input",type:"text",name:"surname",value:this.state.userInfo.surname,handleInputValue:this.handleInputValue}),r.a.createElement(g,{id:"age-input",labelName:"Edad",className:"age-input",type:"number",name:"age",value:this.state.userInfo.age,handleInputValue:this.handleInputValue}),r.a.createElement(g,{id:"city-input",labelName:"Lugar de residencia",className:"city-input",type:"text",name:"city",value:this.state.userInfo.city,handleInputValue:this.handleInputValue}),r.a.createElement(g,{id:"hate-input",labelName:"Lo que m\xe1s odias en este mundo",className:"hate-input",type:"text",name:"hate",value:this.state.userInfo.hate,handleInputValue:this.handleInputValue}),r.a.createElement(g,{id:"love-input",labelName:"Lo que m\xe1s te gusta de la vida",className:"love-input",type:"text",name:"love",value:this.state.userInfo.love,handleInputValue:this.handleInputValue}),r.a.createElement(g,{id:"food-input",labelName:"Tu comida favorita",className:"food-input",type:"text",name:"food",value:this.state.userInfo.food,handleInputValue:this.handleInputValue}),r.a.createElement(g,{id:"phobia-input",labelName:"Tu mayor fobia",className:"phobia-input",type:"text",name:"phobia",value:this.state.userInfo.phobia,handleInputValue:this.handleInputValue}),r.a.createElement(g,{id:"hair-input",labelName:"\xbfC\xf3mo tienes el pelo?",className:"hair-input",type:"text",name:"hair",value:this.state.userInfo.hair,handleInputValue:this.handleInputValue}),r.a.createElement("button",{type:"button",className:"".concat(this.state.isValidated?"ancestor-button":"buttonDisabled")},r.a.createElement(i.b,{className:"link-ancestor",to:{pathname:"/ancestor",state:{userInfo:this.state.userInfo}},title:"Contacta con tus ancestros"},"Conoce tu reencarnaci\xf3n"))))}}]),t}(r.a.Component);y.defaultProps={name:"Marciana",surname:"Gutierrez",age:"35",city:"Bogota",hate:"que me toquen los pies",love:"desayunar en la cama",food:"tortilla de patatas sin cebolla",phobia:"insectos",hair:"liso"};var q=y,N=function(e){return r.a.createElement("div",{className:"history"},r.a.createElement("div",{className:"photo-container"},r.a.createElement(i.b,{className:"link-return",to:"/form",title:"Volver"},"Volver"),r.a.createElement("img",{className:"photo",src:"../img/agapita.jpg",alt:"Agapita"})),r.a.createElement("div",{className:"text"},"Tu nombre era Agapita y sobreviviste a una epidemia de tuberculosis que asol\xf3 tu pueblo a principios del siglo XX. ",r.a.createElement("br",null),r.a.createElement("br",null),"A pesar de nacer en ",e.state.userInfo.city," all\xe1 por 1875, te mudaste a Rascafr\xeda de Lozoya con tu madre y fuiste pionera en la fabricaci\xf3n de todo tipo de m\xe1quinas, como la que vemos en la foto. Aunque no ten\xedas estudios, siempre sab\xedas qu\xe9 hacer con unas chapas, un par de tuercas, un tubo, un poquito de pegamento... et voil\xe0! te fabricabas un respirador casero en un momento. ",r.a.createElement("br",null),r.a.createElement("br",null),"A los ",e.state.userInfo.age," a\xf1os, decidiste que lo que m\xe1s te gustaba en el mundo era ",e.state.userInfo.love," y dejaste de lado tu prometedora carrera como inventora para perseguir tu sue\xf1o. ",r.a.createElement("br",null),r.a.createElement("br",null),"Cuando ten\xedas buen d\xeda, te preparabas un buen plato de ",e.state.userInfo.food," para celebrar lo hermosa que era la vida (a pesar de la tuberculosis), pero en tus malos ratos te visitaba una nube negra en forma de ",e.state.userInfo.phobia,".",r.a.createElement("br",null),r.a.createElement("br",null),"Tras una relativamente larga y feliz existencia, Agapita, maravillosa mujer de pelo ",e.state.userInfo.hair,", sufri\xf3 una muerte tr\xe1gica y muri\xf3 en manos de lo que m\xe1s odiaba : ",e.state.userInfo.hate,".",r.a.createElement("br",null),r.a.createElement("br",null),e.state.userInfo.firstName," ",e.state.userInfo.surname,", seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. \xbfQuieres hablar con tu reencarnaci\xf3n?",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"chat"},r.a.createElement(i.b,{className:"link-chat",to:{pathname:"/chat",state:{userInfo:e.state.userInfo}},title:"Chatea con ella"},"Chatea con tu alma transmigrada"))))},I=function(e){return r.a.createElement("div",{className:"history"},r.a.createElement("div",{className:"photo-container"},r.a.createElement(i.b,{className:"link-return",to:"/form",title:"Volver"},"Volver"),r.a.createElement("img",{className:"photo",src:"../img/eladia.jpg",alt:"Eladia"})),r.a.createElement("div",{className:"text"},"Te llamas Eladia. T\xfa y tus amigas os proteg\xe9is de la gripe rusa, pandemia que, entre 1889 y 1894, caus\xf3 un mill\xf3n de muertes en todo el planeta. Eres la primera de la foto, empezando por la izquierda.",r.a.createElement("br",null),r.a.createElement("br",null),"Est\xe1 feo decirlo, pero a ti, a Eustaquia y a Mar\xeda Eusebia os gustaba mucho disfrazaros de mujeres del saco y la pandemia os vino fenomenal en ese sentido. No ten\xedais que arreglaros, os dejasteis crecer el bigote y la larga melena de pelo ",e.state.userInfo.hair," y pod\xedais comer ",e.state.userInfo.food," hasta reventar, porque la s\xe1bana tapaba vuestros kilos de manteca.",r.a.createElement("br",null),r.a.createElement("br",null),"A los ",e.state.userInfo.age," a\xf1os, decidiste abandonar el pueblo extreme\xf1o donde hab\xedas nacido y mudarte a ",e.state.userInfo.city,". Separarte de tus amigas fue duro, pero estabas llena de ambici\xf3n, y pronto abriste una churrer\xeda en la calle m\xe1s c\xe9ntrica de la localidad.",r.a.createElement("br",null),r.a.createElement("br",null),"El \xe9xito econ\xf3mico no se hizo esperar, pero la capucha te daba tanto calor que te provocaba alucionaciones y ve\xedas ",e.state.userInfo.phobia," cada vez que fre\xedas una docena de churros.",r.a.createElement("br",null),r.a.createElement("br",null),"Tu salud se resent\xeda y tuviste que renunciar a tu negocio, porque la vida te sab\xeda a ",e.state.userInfo.hate," y no consegu\xedas animarte ni con ",e.state.userInfo.love,".",r.a.createElement("br",null),r.a.createElement("br",null),"Pero la vida te deparaba sorpresas. Conociste a un pirata de los mares (por aquel entonces no hab\xeda inform\xe1ticos) y pasaste las \xfaltimas d\xe9cadas de tu vida asaltando embarcaciones en el canal de la Mancha.",r.a.createElement("br",null),r.a.createElement("br",null),e.state.userInfo.firstName," ",e.state.userInfo.surname,", seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. \xbfQuieres hablar con tu reencarnaci\xf3n?",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"chat"},r.a.createElement(i.b,{className:"link-chat",to:{pathname:"/chat",state:{userInfo:e.state.userInfo}},title:"Chatea con ella"},"Chatea con tu alma transmigrada"))))},T=function(e){return r.a.createElement("div",{className:"history3"},r.a.createElement("div",{className:"photo-container3"},r.a.createElement(i.b,{className:"link-return3",to:"/form",title:"Volver"},"Volver"),r.a.createElement("img",{className:"photo3",src:"../img/fulgencio.jpg",alt:"Fulgencio"}),r.a.createElement("img",{className:"photo4",src:"../img/fulgencio2.jpg",alt:"Fulgencio y su familia"})),r.a.createElement("div",{className:"text3"},"Te llamas Fulgencio y eres un se\xf1or elegante. Esta foto demuestra que sobreviviste al primer brote de gripe porcina, o virus influenza AH1N1, uno de los descendientes de la temible gripe espa\xf1ola de 1918. ",r.a.createElement("br",null),r.a.createElement("br",null),"Esta es una prueba m\xe1s de tu innegable estilo, de que siempre has sido de buena familia y has tenido buen porte. Naciste en un barco velero, de ah\xed tu bronceado y tus ojoz azul oce\xe1nico, pero a los 24 a\xf1os te casaste y te mudaste a ",e.state.userInfo.city,". Aunque de joven tuviste un pelo ",e.state.userInfo.hair," muy hermoso, cuando ten\xedas ",e.state.userInfo.age," te quedaste completamente calvo y abriste una f\xe1brica de sombreros. El de la foto es un ejemplar de la colecci\xf3n primavera-verano 1919. ",r.a.createElement("br",null),r.a.createElement("br",null),"En realidad siempre tuviste otro sue\xf1o : ser cocinero y especializarte en ",e.state.userInfo.food,", pero la calvicie trastoc\xf3 tus planes. De tan frustrado que estuviste, llegaste a perder la alegr\xeda de vivir, y ni ",e.state.userInfo.love," te animaba. ",r.a.createElement("br",null),r.a.createElement("br",null),"Tuviste una vida tr\xe1gica, no te voy a enga\xf1ar. Te volviste mani\xe1tico, te molestabas por cosas insignificantes como ",e.state.userInfo.hate,".",r.a.createElement("br",null),r.a.createElement("br",null),"Finalmente, una fr\xeda ma\xf1ana de diciembre despertaste y te topaste con ",e.state.userInfo.phobia,". El susto fue tan grande, que te tuviste que quitar la mascarilla para poder respirar y te contagiaste de inmediato. Fuiste la primera v\xedctima de gripe porcina en ",e.state.userInfo.city,".",r.a.createElement("br",null),r.a.createElement("br",null),e.state.userInfo.firstName," ",e.state.userInfo.surname,", seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. \xbfQuieres hablar con tu reencarnaci\xf3n?",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"chat3"},r.a.createElement(i.b,{className:"link-chat",to:{pathname:"/chat",state:{userInfo:e.state.userInfo}},title:"Chatea con \xe9l"},"Chatea con tu alma transmigrada"))))},j=function(e){return r.a.createElement("div",{className:"history"},r.a.createElement("div",{className:"photo-container"},r.a.createElement(i.b,{className:"link-return",to:"/form",title:"Volver"},"Volver"),r.a.createElement("img",{className:"photo",src:"../img/merceditas.jpg",alt:"Merceditas"})),r.a.createElement("div",{className:"text"},"Te llamabas Merceditas y eras una mujer elegante, con clase y poder\xeda. Mira qu\xe9 abrigo de vis\xf3n llevabas todos los domingos a misa. Desgraciadamente, el dinero no transmigra y a ti, ",e.state.userInfo.firstName,", nunca te ha llegado una peseta de Merceditas.",r.a.createElement("br",null),r.a.createElement("br",null),"Eras una mujer orgullosa que se cre\xeda omnipotente. F\xedjate si no en c\xf3mo llevabas la mascarilla, con la nariz fuera, y los guantes sin poner. Menos mal que en aquella \xe9poca no se pon\xedan multas. Como eras de buena familia cre\xedas que la gripe espa\xf1ola no iba a poder contigo... y acertaste. Una gripe que en 1918, en un solo a\xf1o, mat\xf3 entre 20 y 40 millones de personas no pudo acabar contigo. Al\xe9grate por los genes que puedes haber heredado y por ese pelo lustroso y ",e.state.userInfo.hair," que te ha dejado Merceditas.",r.a.createElement("br",null),r.a.createElement("br",null),"En la foto saludas a tu amiga Gertrudis, que vuelve del mercado de comprar ",e.state.userInfo.food,". La miras con tirria porque siempre te deja sin ",e.state.userInfo.food,", que es tu comida favorita. Por ello, piensas en el mal de ojo que le vas a echar luego en tu casa, en la invocaci\xf3n de ",e.state.userInfo.phobia," que vas a realizar con tu bola m\xe1gica de bruja-pitonisa.",r.a.createElement("br",null),r.a.createElement("br",null),"Y es que, a los ",e.state.userInfo.age," a\xf1os, descubriste que ten\xedas poderes y que pod\xedas conseguir ",e.state.userInfo.love," en gran cantidad y sin esfuerzo, y evitar desgracias como ",e.state.userInfo.hate,".",r.a.createElement("br",null),r.a.createElement("br",null),"Falleciste a los 99 a\xf1os en ",e.state.userInfo.city,", un poco triste porque nunca encontraste el elixir de la vida eterna que andabas buscando.",r.a.createElement("br",null),r.a.createElement("br",null),e.state.userInfo.firstName," ",e.state.userInfo.surname,", seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. \xbfQuieres hablar con tu reencarnaci\xf3n?",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"chat"},r.a.createElement(i.b,{className:"link-chat",to:{pathname:"/chat",state:{userInfo:e.state.userInfo}},title:"Chatea con ella"},"Chatea con tu alma transmigrada"))))},x=function(e){return r.a.createElement("div",{className:"history"},r.a.createElement("div",{className:"photo-container"},r.a.createElement(i.b,{className:"link-return",to:"/form",title:"Volver"},"Volver"),r.a.createElement("img",{className:"photo",src:"../img/leocadio.jpg",alt:"Leocadio"})),r.a.createElement("div",{className:"text"},"La persona que est\xe1 bajo esa bombona se llama Leocadio y es una de tus reencarnaciones m\xe1s interesantes. Trata de luchar contra la quinta pandemia de c\xf3lera, que se extendi\xf3 por el mundo a finales del siglo XIX y mat\xf3 a m\xe1s de 60.000 personas en Espa\xf1a.",r.a.createElement("br",null),r.a.createElement("br",null),"En esta vida fuiste un inventor brillante e ideaste aparatos como el 'isolator', una m\xe1quina conectada a una botella de ox\xedgeno que te permit\xeda seguir estudiando y creando sin arriesgarte al contagio. A pesar de tu brillantez intelectual, eras tonto de lo bueno que eras. Pasabas el d\xeda pensando en lo que le gustaba ",e.state.userInfo.love," en lugar de esforzarte con el networking, que hasta los antiguos sab\xedan que era necesario para prosperar. Y un americano espabilado te rob\xf3 la patente del 'isolator' y te dej\xf3 en la ruina.",r.a.createElement("br",null),r.a.createElement("br",null),"Ni comer ",e.state.userInfo.food," te quitaba el disgusto que ten\xedas. Debido al fracaso laboral y vital, tuviste que mudarte de Nueva York a ",e.state.userInfo.city," y, con ",e.state.userInfo.age," a\xf1os reci\xe9n cumplidos, reinventarte y empezar de cero.",r.a.createElement("br",null),r.a.createElement("br",null),"Adem\xe1s, te quedaste sin el poco pelo ",e.state.userInfo.hair," que ten\xedas y te sent\xedas vac\xedo sin tu 'isolator'. Por las noches so\xf1abas con ",e.state.userInfo.phobia," y tu vida era una sucesi\xf3n de disgustos. Todo te sentaba tan mal como ",e.state.userInfo.hate,".",r.a.createElement("br",null),r.a.createElement("br",null),"Pero esta no es una historia de final tr\xe1gico. Tratando de emular tu famoso invento robado, fabricaste novedosos prototipos que pon\xedas a prueba bajo el agua. As\xed inventaste la escafandra. Y esta vez no se te olvid\xf3 patentarla. Triunfaste much\xedsimo en tu pueblo y a nivel internacional.",r.a.createElement("br",null),r.a.createElement("br",null),e.state.userInfo.firstName," ",e.state.userInfo.surname,", seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. \xbfQuieres hablar con tu reencarnaci\xf3n?",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"chat"},r.a.createElement(i.b,{className:"link-chat",to:{pathname:"/chat",state:{userInfo:e.state.userInfo}},title:"Chatea con \xe9l"},"Chatea con tu alma transmigrada"))))},V=function(e){return r.a.createElement("div",{className:"history3"},r.a.createElement("div",{className:"photo-container3"},r.a.createElement(i.b,{className:"link-return3",to:"/form",title:"Volver"},"Volver"),r.a.createElement("img",{className:"photo3",src:"../img/horacio.jpg",alt:"Horacio"}),r.a.createElement("img",{className:"photo4",src:"../img/horacio2.jpg",alt:"Horacio en su \xe9poca salvaje"})),r.a.createElement("div",{className:"text3"},"Sin duda una de tus vidas pasadas m\xe1s ex\xf3ticas: te llamas Horacio y eres barrendero en el lejano y salvaje Oeste, en la segunda mitad del siglo XIX. Te proteges de una epidemia de tifus, propagada por las pulgas de los roedores. De ah\xed que tu trabajo fuera vital para mantener a las ratas lejos de la poblaci\xf3n de tu ciudad, Memphis. ",r.a.createElement("br",null),r.a.createElement("br",null),"Aunque tu familia era originaria de ",e.state.userInfo.city,", a ti te encantaban las historias de indios y vaqueros desde ni\xf1o, por lo que embarcaste en un velero, a los ",e.state.userInfo.age," a\xf1os, rumbo a las Am\xe9ricas.",r.a.createElement("br",null),r.a.createElement("br",null),"A ti te ca\xedan mejor los indios, desde siempre, pero nunca viste ninguno. As\xed que te compraste una escoba y un cubo de basura y te sentiste enga\xf1ado por la ficci\xf3n y nost\xe1lgico de tu tierra. Ya nunca m\xe1s comer\xedas ",e.state.userInfo.food," ni podr\xedas exhibir ese pelazo ",e.state.userInfo.hair," que te obligaban a esconder debajo de un rid\xedculo sombrero.",r.a.createElement("br",null),r.a.createElement("br",null),"Menos mal que no todo en la vida estaba perdido y que siempre te quedar\xeda la alegr\xeda de ",e.state.userInfo.love," y la esperanza de conocer a alg\xfan Cherokee que te aceptara en su comunidad. Ese momento se hizo esperar y lleg\xf3 en la vejez : un sue\xf1o de ",e.state.userInfo.phobia," te ense\xf1\xf3 el camino a la aldea india m\xe1s pr\xf3xima.",r.a.createElement("br",null),r.a.createElement("br",null),"Tras d\xedas y semanas caminando en el desierto, acosado por el horror de ",e.state.userInfo.hate,", llegaste a la comunidad Cherokee, donde fuiste aceptado y practicaste el chamanismo hasta tu muerte.",r.a.createElement("br",null),r.a.createElement("br",null),e.state.userInfo.firstName," ",e.state.userInfo.surname,", seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. Por ejemplo, por qu\xe9 te gusta tanto eliminar el polvo y quitar pelusas. \xbfQuieres hablar con tu reencarnaci\xf3n?",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"chat3"},r.a.createElement(i.b,{className:"link-chat",to:{pathname:"/chat",state:{userInfo:e.state.userInfo}},title:"Chatea con \xe9l"},"Chatea con tu alma transmigrada"))))},z=function(e){return r.a.createElement("div",{className:"history3"},r.a.createElement("div",{className:"photo-container3"},r.a.createElement(i.b,{className:"link-return3",to:"/form",title:"Volver"},"Volver"),r.a.createElement("img",{className:"photo3",src:"../img/rigoberta.jpeg",alt:"Rigoberta y Filemona"}),r.a.createElement("img",{className:"photo5",src:"../img/rigoberta2.jpg",alt:"Relajadas en el campo"})),r.a.createElement("div",{className:"text3"},"Te llamabas Rigoberta y pertenec\xedas a una conocida familia de la alta burgues\xeda mexicana, emigrada a ",e.state.userInfo.city," a principios del siglo XX. No empezaste tu nueva vida con buen pie, porque al poco de llegar, te topaste con una pandemia bastante letal: la gripe espa\xf1ola de 1918, que caus\xf3 nada menos que 100 millones de v\xedctimas.",r.a.createElement("br",null),r.a.createElement("br",null),"Pero a ti nada te hac\xeda perder el estilo. Te echaste una amiga \xedntima (t\xfa eres la alta y ella la bajita, que se llama Filemona y mira a la c\xe1mara con chuler\xeda) y viajabas con ella de casino en casino. Cuando ganabas, invitabas a Filemona a ",e.state.userInfo.food,", pero cuando perd\xedas todo lo que ten\xedas, te dabas a la bebida y so\xf1abas con ",e.state.userInfo.phobia,".",r.a.createElement("br",null),r.a.createElement("br",null),"Quisiste quitarte del vicio del juego y el alcohol, pero en aquella \xe9poca no exist\xeda Proyecto Hombre ni nada parecido. Cuando ganabas a la ruleta, la vida era maravillosa y tan bonita como ",e.state.userInfo.love,", pero las bajonas cada vez eran peores y ya no remontabas... tu existencia era tan horrorosa como ",e.state.userInfo.hate,".",r.a.createElement("br",null),r.a.createElement("br",null),"A los ",e.state.userInfo.age," a\xf1os, perdiste todo tu dinero en el casino de Montecarlo y Filemona te dio un ultim\xe1tum : como no dejes el vicio te arranco el poco pelo ",e.state.userInfo.hair," que te queda y te abandono.",r.a.createElement("br",null),r.a.createElement("br",null),"Y el amor todo lo pudo porque, arruinadas pero contentas, os mudasteis al campo. Aunque perdisteis una pizca de elegancia, salisteis vivas de la pandemia y vivisteis felices el resto de vuestros d\xedas.",r.a.createElement("br",null),r.a.createElement("br",null),e.state.userInfo.firstName," ",e.state.userInfo.surname,", seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. \xbfQuieres hablar con tu reencarnaci\xf3n?",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"chat3"},r.a.createElement(i.b,{className:"link-chat",to:{pathname:"/chat",state:{userInfo:e.state.userInfo}},title:"Chatea con \xe9l"},"Chatea con tu alma transmigrada"))))},C=function(e){return r.a.createElement("div",{className:"history"},r.a.createElement("div",{className:"photo-container"},r.a.createElement(i.b,{className:"link-return",to:"/form",title:"Volver"},"Volver"),r.a.createElement("img",{className:"photo",src:"../img/josefi.jpg",alt:"Josefi"})),r.a.createElement("div",{className:"text"},"\xbfAlguna vez te has preguntado por qu\xe9 te pasas el d\xeda toquiteando el tel\xe9fono? Pues porque en otra vida fuiste operadora telef\xf3nica. Como las de Jazztel pero en antiguo. Te llamabas Josefi y ten\xedas un peinado muy moderno para la \xe9poca, precursor del tup\xe9 Rock n' Roll.",r.a.createElement("br",null),r.a.createElement("br",null),"Tuviste una juventud complicada. Porque nada m\xe1s empezar de telefonista, se desat\xf3 la gripe espa\xf1ola de 1918 y te obligaron a llevar una mascarilla que hac\xeda que nadie te entendiera cuando le llamabas. Y es que en aquella \xe9poca no hab\xeda buena cobertura, pero s\xed exist\xeda el marketing telef\xf3nico, y todo el mundo te colgaba de inmediato porque no quer\xedan otro colch\xf3n de paja ni m\xe1s jab\xf3n Lagarto.",r.a.createElement("br",null),r.a.createElement("br",null),"A los ",e.state.userInfo.age," a\xf1os, llena de frustraci\xf3n, lo dejaste todo y te mudaste a ",e.state.userInfo.city,", donde cambiar\xedas por vigesimosexta vez de peinado : tu nuevo pelo ser\xeda largo, pelirrojo y ",e.state.userInfo.hair,". Descubriste que lo tuyo era la moda y decidiste dejar de usar mascarilla porque, seg\xfan tu opini\xf3n, era incompatible con la belleza.",r.a.createElement("br",null),r.a.createElement("br",null),"Huelga decir que aquello fue un grand\xedsimo error y que terminaste en un hospital de infecciosos, donde ten\xedas pesadillas con ",e.state.userInfo.hate," y ",e.state.userInfo.phobia,". Gracias a la fe cristiana y a la comida de las enfermeras, que te tra\xedan ",e.state.userInfo.food," con todo el cari\xf1o, saliste adelante y recuperaste la alegr\xeda de vivir.",r.a.createElement("br",null),r.a.createElement("br",null),"En los a\xf1os 20 te metiste a monja de clausura y tuviste una existencia larga y pl\xe1cida, llena de felicidad y de ",e.state.userInfo.love,".",r.a.createElement("br",null),r.a.createElement("br",null),e.state.userInfo.firstName," ",e.state.userInfo.surname,", seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. \xbfQuieres hablar con tu reencarnaci\xf3n?",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"chat"},r.a.createElement(i.b,{className:"link-chat",to:{pathname:"/chat",state:{userInfo:e.state.userInfo}},title:"Chatea con ella"},"Chatea con tu alma transmigrada"))))},k=function(e){return r.a.createElement("div",{className:"history"},r.a.createElement("div",{className:"photo-container"},r.a.createElement(i.b,{className:"link-return",to:"/form",title:"Volver"},"Volver"),r.a.createElement("img",{className:"photo",src:"../img/paco.jpg",alt:"Paco y su esposa Angelita"})),r.a.createElement("div",{className:"text"},"Tu nombre era Paco y as\xed te proteg\xedas de la viruela en la Inglaterra de los a\xf1os 20. Esta tremenbunda enfermedad mat\xf3 a 300 millones de personas solo en el siglo XX, pero a ti no te pill\xf3. Y a tu esposa Angelita tampoco ",r.a.createElement("br",null),r.a.createElement("br",null),"Erais gente con clase. De j\xf3venes, en ",e.state.userInfo.city,", ya destacabais por vuestra elegancia. As\xed que, a los ",e.state.userInfo.age," a\xf1os, emigrasteis a Londres y abristeis una tienda de chaquetones en Bond Street.",r.a.createElement("br",null),r.a.createElement("br",null),"Tu mayor preocupaci\xf3n era no perder el estilo por culpa de una sucia enfermedad que obligaba a la gente a convertirse en adefesios. \xbfPor qu\xe9 ten\xedan que ponerse esas rid\xedculas mascarillas blancas que parec\xedan baberos? Esto te provocaba una indignaci\xf3n semejante a la que sent\xedas por ",e.state.userInfo.hate,", as\xed que invertiste todos tus ahorros en dise\xf1ar y fabricar una mascarilla de piel de nutria, como la que se puede ver en la foto.",r.a.createElement("br",null),r.a.createElement("br",null),"La primera acogida de tu producto entre la \xe9lite londinense fue muy positiva. La vida te sonre\xeda, todas las tardes encontrabas un momento para disfrutar de lo que m\xe1s te gustaba en el mundo, ",e.state.userInfo.love,", y todos los domingos invitabas a tus amigos a tu chalet a comer tu plato favorito : ",e.state.userInfo.food,". ",r.a.createElement("br",null),r.a.createElement("br",null),"Pero la vida es perra y pronto surgieron problemas: la piel de nutria era impermeable, muy conveniente para no mojarse el hocico con los chaparrones londinenses, pero los grupos ecologistas consideraron inmoral la matanza de nutrias. Tampoco era un dise\xf1o muy pr\xe1ctico para la gente a la que le gustaba hablar. En cuanto abr\xedas la boca, quedabas expuesto y te com\xedas todos los virus. No te quiero aburrir con todas las pegas que ten\xeda el invento. ",r.a.createElement("br",null),r.a.createElement("br",null),"Aquello fue devastador para el negocio y para la autoestima. Te quedaste sin el hermoso pelazo ",e.state.userInfo.hair," que ten\xedas y desarrollaste toda una serie de miedos, como la fobia a ",e.state.userInfo.phobia,". Angelita te oblig\xf3 a retirarte prematuramente, os comprasteis un barco y vivisteis en Regent's Canal el resto de vuestros d\xedas.",r.a.createElement("br",null),r.a.createElement("br",null),e.state.userInfo.firstName," ",e.state.userInfo.surname,", seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. \xbfQuieres hablar con tu reencarnaci\xf3n?",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"chat"},r.a.createElement(i.b,{className:"link-chat",to:{pathname:"/chat",state:{userInfo:e.state.userInfo}},title:"Chatea con \xe9l"},"Chatea con tu alma transmigrada"))))},S=function(e){Object(v.a)(t,e);var a=Object(E.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"randomize",value:function(e){return e[Math.floor(Math.random()*e.length)]}},{key:"render",value:function(){var e=[r.a.createElement(N,{state:this.props.location.state}),r.a.createElement(I,{state:this.props.location.state}),r.a.createElement(T,{state:this.props.location.state}),r.a.createElement(j,{state:this.props.location.state}),r.a.createElement(x,{state:this.props.location.state}),r.a.createElement(V,{state:this.props.location.state}),r.a.createElement(z,{state:this.props.location.state}),r.a.createElement(C,{state:this.props.location.state}),r.a.createElement(k,{state:this.props.location.state})];return r.a.createElement("div",{className:"ancestor"},this.randomize(e))}}]),t}(r.a.Component),A=function(e){t(),setTimeout(s,3e3);var a=new Audio;function t(){var e=setInterval(n,100);setTimeout((function(){clearInterval(e)}),4e3)}function n(){var e=document.querySelector(".chat-container");e.classList.toggle("ghost"),e.classList.toggle("scary"),a.play()}function s(){document.querySelector(".message").innerText="No tengas miedo.",setTimeout(o,3e3)}function o(){document.querySelector(".message").innerText="En realidad, esto es como un di\xe1logo interno",setTimeout(l,4e3)}function l(){document.querySelector(".message").innerText="porque somos la misma persona.",setTimeout(u,3e3)}function u(){document.querySelector(".message").innerText="As\xed que, todo lo que te diga",setTimeout(c,3e3)}function c(){document.querySelector(".message").innerText="ya lo sabes.",setTimeout(m,2e3)}function m(){document.querySelector(".message").innerText="\xbfC\xf3mo te va la vida? Cu\xe9ntame.";var e=document.querySelector(".extra"),a=document.createElement("input");a.classList.add("input"),e.appendChild(a),setTimeout((function(){document.querySelector(".input").style.display="none"}),8e3),setTimeout(d,8e3)}function d(){t(),document.querySelector(".message").innerText="Aqu\xed no hay mucha cobertura",setTimeout(p,3e3)}function p(){document.querySelector(".message").innerText="y tus mensajes no me llegan",setTimeout(b,3e3)}function b(){document.querySelector(".message").innerText="pero todo va a ir bien.",setTimeout(h,2e3)}function h(){document.querySelector(".message").innerText="En realidad, piensa que solo eres un envoltorio.",setTimeout(f,4e3)}function f(){document.querySelector(".message").innerText="Te lo digo como un cumplido.",setTimeout(v,3e3)}function v(){t(),document.querySelector(".message").innerText="Cuando la cosa se tuerza",setTimeout(E,3e3)}function E(){document.querySelector(".message").innerText="piensa en ".concat(e.location.state.userInfo.love,"."),setTimeout(g,3e3)}function g(){document.querySelector(".message").innerText="Te voy a dar dos consejos.",setTimeout(y,3e3)}function y(){document.querySelector(".message").innerText="No te quites la mascarilla.",setTimeout(q,3e3)}function q(){document.querySelector(".message").innerText="Tienes que durar unos a\xf1os m\xe1s.",setTimeout(N,3e3)}function N(){t(),document.querySelector(".message").innerText="Y nunca llames a Jazztel",setTimeout(I,3e3)}function I(){document.querySelector(".message").innerText="para pedir informaci\xf3n sobre la tarifa m\xe1s barata.",setTimeout(T,4e3)}function T(){document.querySelector(".message").innerText="Me tengo que ir.",setTimeout(j,2e3)}function j(){t(),document.querySelector(".message").innerText="Aqu\xed hace mucho fr\xedo.",setTimeout(x,2e3)}function x(){document.querySelector(".message").innerText="Cu\xeddate mucho.",setTimeout(V,3e3)}function V(){document.querySelector(".message").innerText="Si quieres conocer m\xe1s reencarnaciones",setTimeout(z,3e3)}function z(){document.querySelector(".message").innerText="vuelve al formulario y pide conocer otra de tus vidas.",setTimeout(C,4e3)}function C(){document.querySelector(".message").innerText="Pero yo soy tu mejor versi\xf3n de ti.",setTimeout(k,3e3)}function k(){document.querySelector(".message").innerText="Choque de codos.",setTimeout(S,3e3)}function S(){document.querySelector(".message").innerText="Adi\xf3s",setTimeout(A,2e3)}function A(){document.querySelector(".message").innerText=""}return a.src="./audio/psicofonia.mp3",r.a.createElement("div",{className:"chat-container"},r.a.createElement(i.b,{className:"link-return2",to:"/form",title:"Volver"},"Volver"),r.a.createElement("div",{className:"ghost-text"},r.a.createElement("p",{className:"message"},"Hola ",e.location.state.userInfo.firstName),r.a.createElement("div",{className:"extra"})))};var M=function(){return r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(m,null)),r.a.createElement(l.a,{path:"/form",component:q}),r.a.createElement(l.a,{path:"/form-input",component:g}),r.a.createElement(l.a,{path:"/ancestor",component:S}),r.a.createElement(l.a,{path:"/chat",component:A}))};function O(){var e=Object(l.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(O,null),r.a.createElement(M,null))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.31ca7456.chunk.js.map