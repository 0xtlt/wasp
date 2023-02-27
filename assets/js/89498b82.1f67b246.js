"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9360],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={title:"Overview"},o=void 0,l={unversionedId:"language/overview",id:"language/overview",title:"Overview",description:"Wasp is a declarative language that recognizes web application-specific terms (e.g. page or route) as",source:"@site/docs/language/overview.md",sourceDirName:"language",slug:"/language/overview",permalink:"/docs/language/overview",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/language/overview.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"TypeScript Support",permalink:"/docs/typescript"},next:{title:"Syntax",permalink:"/docs/language/syntax"}},s={},p=[],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wasp is a declarative language that recognizes web application-specific terms (e.g. ",(0,a.kt)("em",{parentName:"p"},"page")," or ",(0,a.kt)("em",{parentName:"p"},"route"),") as\nwords (types) of the language."),(0,a.kt)("p",null,"The basic idea is that the higher-level overview of an app (e.g. pages, routes, database model, ...) is defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"*.wasp")," files (for now just one), while the specific parts (web components, back-end queries, ...) are implemented in specific non-Wasp technologies (React, NodeJS, Prisma) and then referenced in the ",(0,a.kt)("inlineCode",{parentName:"p"},"*.wasp")," files."),(0,a.kt)("p",null,"Basic structure of a Wasp project is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*.wasp")," file"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"src/")," folder -> Contains non-Wasp code (JS, CSS, ...). You can structure it however you want, as long as you put it somewhere inside the correct subfolder:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"src/server")," folder - Contains your server code (i.e., executed by Node JS)."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"src/client")," folder - Contains your client code (i.e., executed by JS in user's browsers)."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"src/shared")," folder - Contains the code you want to share between the server and the client (e.g., utility functions).")))),(0,a.kt)("p",null,"When referencing code from ",(0,a.kt)("inlineCode",{parentName:"p"},"src/server")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"*.wasp")," file, you do it as ",(0,a.kt)("inlineCode",{parentName:"p"},"@server/relative/path/of/file/in/the/server/dir"),"."),(0,a.kt)("p",null,"When referencing code from ",(0,a.kt)("inlineCode",{parentName:"p"},"src/client")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"*.wasp")," file, you do it as ",(0,a.kt)("inlineCode",{parentName:"p"},"@client/relative/path/of/file/in/the/client/dir"),"."),(0,a.kt)("p",null,"You can't reference shared code inside the Wasp file, but you can import and use it in all code that lives in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/client")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"src/server"),". Use a relative import to do this. For example, the file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/server/something.js")," can import a shared function from ",(0,a.kt)("inlineCode",{parentName:"p"},"src/shared/utilities.js")," like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import someFunction from '../shared/utilities.js'\n\n// ...\n")),(0,a.kt)("h1",{id:"simple-example"},"Simple example"),(0,a.kt)("p",null,"We're omitting all pregenerated none-code files Wasp needs to function (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"jsconfig.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".wasproot"),") and are focusing only on the files you would write yourself:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"TodoApp/\n  - main.wasp\n  - src/\n      - server/\n        - operations.js\n      - client/\n        - pages/\n          - Main.js\n      - shared/\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="main.wasp"',title:'"main.wasp"'},'app todoApp {\n  wasp: {\n    version: "^0.6.0"\n  },\n\n  title: "ToDo App"\n}\n\nroute RootRoute { path: "/", to: MainPage }\npage MainPage {\n  component: import Main from "@client/pages/Main"\n}\n\nquery getTasks {\n  fn: import { getTasks } from "@server/operations.js",\n  entities: [Task]\n}\n\naction createTask {\n  fn: import { createTask } from "@server/operations.js",\n  entities: [Task]\n}\n\nentity Task {=psl\n  id          Int     @id @default(autoincrement())\n  description String\n  isDone      Boolean @default(false)\npsl=}\n')),(0,a.kt)("p",null,"You can check out a full working example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/main/waspc/examples/todoApp"},"here"),"."),(0,a.kt)("p",null,"In the following sections each of the basic language features is explained."))}u.isMDXComponent=!0}}]);