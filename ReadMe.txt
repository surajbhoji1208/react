					React
What is cdn? What is its use?
What is cross origin
CDN
	React.developemend.js=>its core react code
	react-dom.development.js=>use to modify the dom 
NPM
    NPM is not stand for node package manager
    NPM store the all the package
Budnlur
    WHole code need to be minified befor it can be send to production Budnlur help for this 
    Webpack,parcel,veet this are Budnlur
    it bundle the file for prosside to production

    -therre are two type of dependencies dev dependencies and normal dependencies
        dev are require for development
        normal dependencies are require for production     

differece between tilde and caret
    ^=caret(for minar update)    ~=tilde(mejor updates)
package_lock:it keeps the exact version of dependencies

Node_module:   it contain all the code which we fecth form npm 
                inside node moudle ther are many package that are depends on other this is called transictive dependencies
#ingite ap using parcel
    npm i parcel <source fiel>
    =>npm i parcel index.html
    it create build 
    it create local server
    HMR = hot module replecement 
    it used file wathing algo -which is written in c++ 
    it will also do image optimization 
    it will do minification file while production build 
    it will bundle all the file 
    it compress the file 
    it will do code spliting 
    differentiat bunddling -to support older Browser 
    it give better error suggestions 
    it give option to host app on https 
    it do tree shaking -removed unused code for us 
npm and npx 
     npm is installing the package 
     npx is executing the package

CDN link is not good way to bring react into project 
    fetching from cdn is take costly operations 
    it keep changing the version based on url 
Install react - npm install react
Install react DOM-npm install react-dom

Browser dont no the import that why we need to tell it by adding attibut type="module" in script tag

Create production build 
    npx parcel build index.html

Browser list 
    its a NPM package that need some configuration to run code on old brouser
    add it to package.json ,it take array of Browser

************episod 3 laying the foundation**********
JSX:    it is js syntax which is easier to create react elements
        jsx is not part of react 
        we can write react without jsx 
        Browser does not understand jsx 
        pracel is doing the job behind the sence(this trinsfile befor it reaches to js engine)
        parcel used bebel to transfile the jsx to js(its package used by  parcel)
        jsx code is transfile to react.CreateElement=>js obj=>render
        in jsx instead of give class it should given as className 
        if u gave attributs then u have to give in camal case 
        if there is multiple line then wrap it in round brackets  dont neeed for single line 
    
React components : everything in react is a component
                   there are two type 1) class based comp(old way) 2) functional comp(new way)
React functional comp: it is just a normal js fun
                       fun name should be capital latter
                       root.render<comp/> (this is how we render the component)
                       if we call comp inside a com it called component composition
                       if we put {} insid jsx we can run any fun inside this  {}
Style: u can give Style using js obj

Props:property which is somthing that u can pass to component 
      this are just args to a function 
confict driven ui: based on backend responce changing the ui property 

for loop: while using for loop need to give key for components bcose if we didnt give the key then react render whole dom aggain for new component
        dont use index as key 

*****************************React Hooks*************************************episod 5

there are two types of export and inport
-Default export/import =     export Default <nane>
-                             import name form "path"
Named export inport  =       export const <name>
                             import name form "path"
Event Handlers: Onclick=> it take callback function
State variable: this is supper powerfull variableS 
                for that we use hooks which is known as usesState
                it is a normal js function 
                two main hooks
                useState()- used to generate supper powerfull state variable in react
                            it maintain the state of component
                            const [varName] = useState([]) we can pass default value insid fun
                            to update state it take fun as value in array const [varName,fun] = usesState()
                            whenever state variable update react rerender the component
                useEffect()- It take two args 1st is arrow fun(call back fun ) 2nd is dipendancey array(optinal) 
                             call back fun is called after your component get renderd
                             dependencies array changes the behevier of ther render
                             if there is no dependencies array it call every render
                             if dependencies array is empty then useEffect called on only initial render
                             if there something inside dependencies array then it only called dependencies changes
                             

React algoridam(behinde the sence):
        react used reconselation algoridam(react fibar)
        in react 16 new algoridam come to update the dom called react fiber
        whenever changes in ui is known as reconciliation
        react dom is all tags <div> <h1>...
        virtual dom is representation of equal dom
        in react elements are objects and virtual dom is those objects 
        virtual dom is just normal js object 
    diff algorithm
        it find the diff between update vertual dom and previouse virtual dom

********************API CALL***********EPISOD6************
Page Load=>Render=>API=>render

********************ROUTING***********EPISOD7************
NPM I REACT-ROUTER-DOM
create routing configuration  inside app.js
use createBrowserRouter(configuration),RouterProvider(component)
this is give one imp hooks {userRouteError}
we show specific detail error on page using thi hook

Children Rout:- 
            outlet component is used to load the Children 
            never use a <a> tag for routing  because its refreshing the page
            react give {link} component to this 
useParams: this is hook given by react router dom


********************CLASS BASED COMPONENTS***********EPISOD 8************
its a older way of creating compoent in react 
to create class extend js class with React.Compoent
now this class has render() inside it which retrun peace of jsx
to revice a props in class create constractore and need to call supper key with passing props
constructor(props){supper(props)}
why we alway have to use supper?

state and local variabl inside class
    to do so use this.state
    this is big objest which contain all the state variabl
    never update state variabl directly 
    react give this.setState() to update the state variabl inside this we pass obj whic contain updated value


