(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,t,n){e.exports=n(77)},56:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(41),l=n.n(i),o=(n(56),n(5)),c=n(6),u=n(8),s=n(7),d=n(9),m=n(16),h=n(83),g=n(84),p=n(87),v=n(85),b=n(86),f=n(79),E=n(76),O=n(4),j=n(17);function S(){var e=Object(j.a)(["\n    query GetSituation($id: ID!){\n        situation(id: $id) {\n            id\n            title\n            description\n            date\n            author {\n                id\n                name\n                surname\n                age\n                email\n                phase\n                situations {\n                    title\n                    description\n                    id\n                }\n            }\n        }\n    }\n"]);return S=function(){return e},e}function y(){var e=Object(j.a)(["\n    query GetDepressiondegree($id: ID!){\n        depressiondegree(id: $id) {\n            id\n            degree\n            date\n            author {\n                id\n                name\n                surname\n                age\n                email\n                phase\n                depressiondegrees {\n                    degree\n                    id\n                }\n            }\n        }\n    }\n"]);return y=function(){return e},e}function I(){var e=Object(j.a)(["\n    mutation AddLoginStatistic($day: Int!, $date: String!, $logintime: String!, $duration: String!, $authorId: ID!, $email: String!){\n        addLoginStatistic(day: $day, date: $date, logintime: $logintime, duration: $duration, authorId: $authorId, email: $email){\n            day\n            date\n            logintime\n            duration\n            email\n            id\n        }\n    }\n"]);return I=function(){return e},e}function k(){var e=Object(j.a)(["\n    mutation AddSituation($title: String!, $description: String!, $date: String!, $authorId: ID!){\n        addSituation(title: $title, description: $description, date: $date, authorId: $authorId){\n            title\n            description\n            date\n            id\n        }\n    }\n"]);return k=function(){return e},e}function $(){var e=Object(j.a)(["\n    mutation AddKieslerCircle($circlename: String!, $date: String!, $authorId: ID!){\n        addKiesler (circlename: $circlename, date: $date, authorId: $authorId){\n            circlename\n            date\n            id\n        }\n    }\n"]);return $=function(){return e},e}function D(){var e=Object(j.a)(["\n    mutation AddDepressiondegree($degree: Int!, $date: String!, $authorId: ID!){\n        addDepressiondegree(degree: $degree, date: $date, authorId: $authorId){\n            degree\n            date\n            id\n        }\n    }\n"]);return D=function(){return e},e}function w(){var e=Object(j.a)(["\n    mutation AddAuthor($name: String!, $surname: String!, $age: Int!, $gender: String!, $email: String!, $phase: String!, $date: String!){\n        addAuthor(name: $name, surname: $surname, age: $age, gender: $gender, email: $email, phase: $phase, date: $date){\n            name\n            surname\n            age\n            gender\n            email\n            phase\n            date\n            id\n        }\n    }\n"]);return w=function(){return e},e}function N(){var e=Object(j.a)(["\n    {\n        situations {\n            title\n            description\n            date\n            id\n        }\n    }\n"]);return N=function(){return e},e}function C(){var e=Object(j.a)(["\n    {\n        kieslerCircles {\n            circlename\n            date\n            id\n        }\n    }\n"]);return C=function(){return e},e}function F(){var e=Object(j.a)(["\n    {\n        depressiondegrees {\n            degree\n            date\n            id\n        }\n    }\n"]);return F=function(){return e},e}function A(){var e=Object(j.a)(["\n    query GetAuthorID($email: String!){\n        authorIds(email: $email) {\n            id\n        }\n    }\n"]);return A=function(){return e},e}function K(){var e=Object(j.a)(["\nquery GetAuthor($id: ID!){\n        author(id: $id) {\n            name\n            id\n            depressiondegrees {\n                degree\n                date\n              }\n            situations {\n                title\n                date\n            }\n            kieslers {\n                circlename\n                date\n            }\n            situationCounts {\n                count\n                date\n            }\n        }\n    }\n"]);return K=function(){return e},e}function L(){var e=Object(j.a)(["\n    {\n        authors {\n            name\n            surname\n            age\n            email\n            gender\n            phase\n            id\n        }\n    }\n"]);return L=function(){return e},e}var q=Object(m.b)(L()),M=Object(m.b)(K()),T=Object(m.b)(A()),P=Object(m.b)(F()),x=Object(m.b)(C()),W=Object(m.b)(N()),z=Object(m.b)(w()),_=Object(m.b)(D()),G=Object(m.b)($()),J=Object(m.b)(k()),Y=(Object(m.b)(I()),Object(m.b)(y()),Object(m.b)(S()),n(18)),Q=n.n(Y),R=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={selected:null},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"getDepressionDegree",value:function(){var e=this.props.data.author;return e?e.depressiondegrees.map(function(e){return e.degree,e.date}):0}},{key:"displayDepressiondegrees",value:function(){var e=this.props.data;return e.loading?r.a.createElement("div",null,"Loading depression degrees..."):e.author.depressiondegrees.map(function(e){return localStorage.setItem("degrees",JSON.stringify(e.degree)),localStorage.setItem("dates",JSON.stringify(e.date)),r.a.createElement("li",{key:e.id},r.a.createElement("div",null,"Degree:"),e.degree,r.a.createElement("div",null,"Date:"),e.date,r.a.createElement("br",null))})}},{key:"restoreStateFromLocalStorage",value:function(){return r.a.createElement("li",null,r.a.createElement("div",null,"Degree:"),JSON.parse(localStorage.getItem("degrees")),r.a.createElement("div",null,"Date:"),JSON.parse(localStorage.getItem("dates")),r.a.createElement("br",null))}},{key:"render",value:function(){return navigator.onLine?r.a.createElement(Q.a,{speed:.8,className:"area",contentClassName:"content",horizontal:!1},r.a.createElement("div",null,r.a.createElement("ul",null,this.displayDepressiondegrees()))):r.a.createElement(Q.a,{speed:.8,className:"area",contentClassName:"content",horizontal:!1},r.a.createElement("div",null,r.a.createElement("ul",null,this.restoreStateFromLocalStorage())))}}]),t}(a.Component),U=Object(O.graphql)(M,{options:function(e){return{variables:{id:localStorage.getItem("authorid")}}}})(R),B=new Date,H=B.getDate(),V=B.getMonth()+1,X=B.getFullYear();H<10&&(H="0"+H),V<10&&(V="0"+V),B=V+"/"+H+"/"+X;var Z=localStorage.getItem("authorid"),ee=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={degree:"",date:""+B,authorId:""+Z},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"submitForm",value:function(e){e.preventDefault(),this.props.addDepressiondegreeMutation({variables:{degree:this.state.degree,date:this.state.date,authorId:this.state.authorId},refetchQueries:[{query:P}]})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{id:"add-depressiondegree",onSubmit:this.submitForm.bind(this)},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Depression degree:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({degree:t.target.value})}}),r.a.createElement(U,null)),r.a.createElement("button",null,"+"))}}]),t}(a.Component),te=Object(O.compose)(Object(O.graphql)(q,{name:"getAuthorsQuery"}),Object(O.graphql)(_,{name:"addDepressiondegreeMutation"}))(ee),ne=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={selected:null},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"displaySituations",value:function(){var e=this.props.data;return e.loading?r.a.createElement("div",null,"Loading situations..."):e.author.situations.map(function(e){return localStorage.setItem("SituationTitle",e.title),localStorage.setItem("SituationDate",e.date),r.a.createElement("li",{key:e.id},r.a.createElement("div",null,"Title:"),e.title,r.a.createElement("div",null,"Date:"),e.date,r.a.createElement("br",null))})}},{key:"restoreStateFromLocalStorage",value:function(){return r.a.createElement("li",null,r.a.createElement("div",null,"Title:"),localStorage.getItem("SituationTitle"),r.a.createElement("div",null,"Date:"),localStorage.getItem("SituationDate"),r.a.createElement("br",null))}},{key:"render",value:function(){return navigator.onLine?r.a.createElement(Q.a,{speed:.8,className:"area",contentClassName:"content",horizontal:!1},r.a.createElement("div",null,r.a.createElement("ul",null,this.displaySituations()))):r.a.createElement(Q.a,{speed:.8,className:"area",contentClassName:"content",horizontal:!1},r.a.createElement("div",null,r.a.createElement("ul",null,this.restoreStateFromLocalStorage())))}}]),t}(a.Component),ae=Object(O.graphql)(M,{options:function(e){return{variables:{id:localStorage.getItem("authorid")}}}})(ne),re=new Date,ie=re.getDate()-1,le=re.getMonth()+1,oe=re.getFullYear();ie<10&&(ie="0"+ie),le<10&&(le="0"+le),re=le+"/"+ie+"/"+oe;var ce=localStorage.getItem("authorid"),ue=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={title:"",description:"",date:""+re,authorId:""+ce},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"submitForm",value:function(e){e.preventDefault(),this.props.addSituationMutation({variables:{title:this.state.title,description:this.state.description,date:this.state.date,authorId:this.state.authorId},refetchQueries:[{query:W}]})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{id:"add-situation",onSubmit:this.submitForm.bind(this)},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Situation Title:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({title:t.target.value})}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Situation Description:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({description:t.target.value})}})),r.a.createElement("button",null,"Add"),r.a.createElement(ae,null))}}]),t}(a.Component),se=Object(O.compose)(Object(O.graphql)(J,{name:"addSituationMutation"}))(ue),de=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={selected:null},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"displayKieslerCircle",value:function(){var e=this.props.data;return e.loading?r.a.createElement("div",null,"Loading kiesler circle..."):e.author.kieslers.map(function(e){return localStorage.setItem("KieslerTitle",e.circlename),localStorage.setItem("KieslerDate",e.date),r.a.createElement("li",{key:e.id},r.a.createElement("div",null,"Kiesler:"),e.circlename,r.a.createElement("div",null,"Date:"),e.date,r.a.createElement("br",null))})}},{key:"restoreStateFromLocalStorage",value:function(){return r.a.createElement("li",null,r.a.createElement("div",null,"Kiesler:"),localStorage.getItem("KieslerTitle"),r.a.createElement("div",null,"Date:"),localStorage.getItem("KieslerDate"),r.a.createElement("br",null))}},{key:"render",value:function(){return navigator.onLine?r.a.createElement(Q.a,{speed:.8,className:"area",contentClassName:"content",horizontal:!1},r.a.createElement("div",null,r.a.createElement("ul",null,this.displayKieslerCircle()))):r.a.createElement(Q.a,{speed:.8,className:"area",contentClassName:"content",horizontal:!1},r.a.createElement("div",null,r.a.createElement("ul",null,this.restoreStateFromLocalStorage())))}}]),t}(a.Component),me=Object(O.graphql)(M,{options:function(e){return{variables:{id:localStorage.getItem("authorid")}}}})(de),he=new Date,ge=he.getDate(),pe=he.getMonth()+1,ve=he.getFullYear();ge<10&&(ge="0"+ge),pe<10&&(pe="0"+pe),he=pe+"/"+ge+"/"+ve;var be=localStorage.getItem("authorid"),fe=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={circlename:"",date:""+he,authorId:""+be},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"submitForm",value:function(e){e.preventDefault(),this.props.addKieslerCircleMutation({variables:{circlename:this.state.circlename,date:this.state.date,authorId:this.state.authorId},refetchQueries:[{query:x}]})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{id:"add-kieslercircle",onSubmit:this.submitForm.bind(this)},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Kiesler Kreis:"),r.a.createElement("select",{onChange:function(t){return e.setState({circlename:t.target.value})}},r.a.createElement("option",null,"Freundlich"),r.a.createElement("option",null,"Freundlich-Dominant"),r.a.createElement("option",null,"Dominant"),r.a.createElement("option",null,"Freundlich-Unterw\xfcrfig"),r.a.createElement("option",null,"Unterw\xfcrfig"),r.a.createElement("option",null,"Feindselig-Unterw\xfcrfig"),r.a.createElement("option",null,"Feindselig"),r.a.createElement("option",null,"Feindselig-Dominant")),r.a.createElement(me,null)),r.a.createElement("button",null,"+"))}}]),t}(a.Component),Ee=Object(O.compose)(Object(O.graphql)(G,{name:"addKieslerCircleMutation"}))(fe),Oe=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"getAuthorId",value:function(){var e=this.props.data.authorIds;return e?e.map(function(e){return localStorage.setItem("authorid",e.id)}):r.a.createElement("div",null)}},{key:"render",value:function(){return r.a.createElement("div",{id:"getAuthorId"},this.getAuthorId())}}]),t}(a.Component),je=Object(O.graphql)(T,{options:function(e){return{variables:{email:e.emailId}}}})(Oe),Se=new Date,ye=Se.getDate(),Ie=Se.getMonth()+1,ke=Se.getFullYear();ye<10&&(ye="0"+ye),Ie<10&&(Ie="0"+Ie),Se=Ie+"/"+ye+"/"+ke;var $e=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={name:"",surname:"",age:"",email:"",gender:"",phase:"",date:""+Se},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"submitForm",value:function(e){e.preventDefault(),this.props.addAuthorMutation({variables:{name:this.state.name,surname:this.state.surname,age:this.state.age,email:this.state.email,gender:this.state.gender,phase:this.state.phase,date:this.state.date},refetchQueries:[{query:q}]})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{id:"add-registration",onSubmit:this.submitForm.bind(this)},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Vorname:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({name:t.target.value})}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Nachname:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({surname:t.target.value})}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Alter:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({age:t.target.value})}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({email:t.target.value})}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Geschlecht:"),r.a.createElement("select",{onChange:function(t){return e.setState({gender:t.target.value})}},r.a.createElement("option",{selected:!0,value:""},"W\xe4hlen Ihr Geschlecht"),r.a.createElement("option",{value:"M\xe4nnlich"},"M\xe4nnlich"),r.a.createElement("option",{value:"Weiblich"},"Weiblich"),r.a.createElement("option",{value:"Drittes"},"Drittes"))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Therapie-Phase:"),r.a.createElement("select",{onChange:function(t){return e.setState({phase:t.target.value})}},r.a.createElement("option",{selected:!0,value:""},"W\xe4hlen eine Phase"),r.a.createElement("option",{value:"Klinik"},"Klinik"),r.a.createElement("option",{value:"Tages-Klinik"},"Tages-Klinik"),r.a.createElement("option",{value:"Ambulant"},"Ambulant"),r.a.createElement("option",{value:"Wartezeit"},"Wartezeit"),r.a.createElement("option",{value:"R\xfcckfall-Prophylaxe"},"R\xfcckfall-Prophylaxe"))),r.a.createElement("button",null,"Registrieren"))}}]),t}(a.Component),De=Object(O.compose)(Object(O.graphql)(z,{name:"addAuthorMutation"}))($e),we=new Date,Ne=we.getDate(),Ce=we.getMonth()+1,Fe=we.getFullYear(),Ae=we.getTime();Ne<10&&(Ne="0"+Ne),Ce<10&&(Ce="0"+Ce);var Ke=Ce+"/"+Ne+"/"+Fe+"-"+we.getHours()+":"+we.getMinutes()+":"+we.getSeconds();localStorage.setItem("firstEnter",Ke),localStorage.setItem("time",Ae);var Le=new m.a({uri:"http://localhost:4000/graphql"});function qe(){return r.a.createElement("div",{className:"links"},r.a.createElement(h.a,{to:"/depressiondegree",className:"link"}," _Depressionsgrad_ "),r.a.createElement(h.a,{to:"/situation",className:"link"}," _Situation Analyse_ "),r.a.createElement(h.a,{to:"/kiesler",className:"link"}," _Kiesler Kreis_ "),r.a.createElement(h.a,{to:"/admin",className:"link"}," _Logout_ "))}function Me(){return r.a.createElement("div",{className:"links"},r.a.createElement(E.a,{to:"/registration",className:"link"}," Registration "))}var Te={loggedIn:!1,login:function(){this.loggedIn=!0},logout:function(){this.loggedIn=!1}},Pe=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"logout",value:function(){Te.logout(),this.props.history.replace("/")}},{key:"render",value:function(){return Te.loggedIn?r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Depression App."),r.a.createElement("h1",null,'To sign out press "Logout" button.'),r.a.createElement("button",{onClick:this.logout.bind(this)},"Logout")):r.a.createElement(g.a,{to:"/"})}}]),t}(r.a.Component),xe=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={email:"",password:"",showPromptOnNav:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"savePassword",value:function(e){this.setState({password:e.target.value,showPromptOnNav:e.target.value.length>0})}},{key:"saveEmail",value:function(e){this.setState({email:e.target.value,showPromptOnNav:e.target.value.length>0})}},{key:"handleFormSubmit",value:function(e){e.preventDefault(),"password"==this.state.password?(Te.login(),this.props.history.replace("/admin")):alert("Password is wrong.")}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleFormSubmit.bind(this)},r.a.createElement("h3",null,"Please sign in"),r.a.createElement("input",{type:"email",placeholder:"Type email",value:this.state.email,onChange:this.saveEmail.bind(this)}),r.a.createElement(je,{emailId:this.state.email}),r.a.createElement(je,null),r.a.createElement("input",{type:"password",placeholder:"Type password",value:this.state.password,onChange:this.savePassword.bind(this)}),r.a.createElement("button",{type:"submit"}," Submit "),r.a.createElement(p.a,{when:this.state.showPromptOnNav,message:"Are you sure? Your data will be lost."}),r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement(Me,null),r.a.createElement(b.a,null,r.a.createElement(f.a,{path:"/registration",component:De})))))}}]),t}(r.a.Component),We=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(O.ApolloProvider,{client:Le},r.a.createElement(v.a,null,r.a.createElement("div",{id:"main"},r.a.createElement(qe,null),r.a.createElement("div",{className:"views"},r.a.createElement(b.a,null,r.a.createElement(f.a,{exact:!0,path:"/",component:xe}),r.a.createElement(f.a,{path:"/depressiondegree",component:te}),r.a.createElement(f.a,{path:"/admin",component:Pe}),r.a.createElement(f.a,{path:"/registration",component:De}),r.a.createElement(f.a,{path:"/situation",component:se}),r.a.createElement(f.a,{path:"/kiesler",component:Ee}))))))}}]),t}(a.Component),ze=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _e(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(We,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");ze?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):_e(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):_e(e)})}}()}},[[51,2,1]]]);
//# sourceMappingURL=main.b2ad0bee.chunk.js.map