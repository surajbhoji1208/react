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
                useState()- used to generate supper powerful state variable in react
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
                useRef()-useRef does not re-render components
                         useRef can store mutable values (like a variable) that don’t cause the component to re-render when updated.
                         useRef to directly reference a DOM element in a functional component.
                             

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

state and local variable inside class
    to do so use this.state
    this is big object which contain all the state variable
    never update state variable directly 
    react give this.setState() to update the state variable inside this we pass obj which contain updated value

What is life cycle of react class 
    -Template is get rendered line by line whenever it sees any class component in parent comp it started loading that class components
    -Then instance of class get created and constructor get loaded first
    -After constructor render() is called  

ComponentDidMount()=> when the component is loaded into dom then this method get called, it is called after render method 
                      -this method used for api call
                      -when there parent child relation then the life cycle is
                        parent =>constructor
                                render()
                                child=>
                                    constructor
                                    render()
                                    ComponentDidMount()
                                ComponentDidMount()    
                        -When there is multiple behavior changes 
                         https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

                -When the component is mounted it is mounted 2 phases 
                1)render phases                   
                2)commit phase 
                -1st constructor is called then render is called(render phase)
                -then react update the dom
                -then componentDidMount get called
                -form multiple child react optimize render and commit phase it batch the render phase and then it batch thee commit phase
                -thats why react call componentDidMount after all child get rendered 

                Mounting Phase=>
                    constructor called
                    component render
                    Update dom with dommy data 
                    componentDidMount get called 
                Updating Phase=>
                    when we do set state updating phase start
                    set state update the state variable 
                    react trigger render once again 
                    react update dom
                    then componentDidUpdate called=at the end   
                Unmounting phase=>
                    there is function called componentWillUnmount() 
                    this is called when component destroyed 

why we cant make async in useEffect()?


*********************************EPISODE 9******************************************************************

Custom Hooks=>
    always start name with 'use'(not mandatory)
    it is an normal js function
    inside that fun use all hooks of react

App Chunking=> 
    this is process where app is broken down into smaller peace 
    also known as code spiting,dynamic bundling, lazy loading ,on demand loading
    react give lazy() to load component lazily
    it take callback fun eg lazy(()={import("path")})
    rap those component with suspense component

    *************************Episode 10***************************************
    Sass Scss
        sass add some supper power to css
        tailwind css uses postCSS to transfer css with js
        parser used postCSS to read tailwind css 


    *************************Episode 11***************************************
Higher Order component=>
    it is a fun which takes a component and return a component
    it takes a component and add extra feature into it and give it back 
Controlled and Uncontrolled Component
    parent component is controlling childe component 
    if child component has its own state then it is Uncontrolled component 
    it is not possible to modify state variable of parent directly but it can b possible indirectly 
    this is called lifting state up (read it more form react doc)
Props drilling 
    react has one way data flow, it flow top to bottom(parent to child )
    eg there is relation parent=>child1->child2
    here if we want to pass data to child 2 form from parent need to pass to child one this is called props drilling 
    to resolve this prop drilling problem react give us something known "as react context"
    accessing the context in class base component is diff  use <context.consumer><context.consumer>
    to set new value to context use `<context.provider value={{name:newVal}}> componentName</context.provider>`
    what is difference between redux and context store 

    *************************Episode 12***************************************
redux   
    redux work on the data layer 
    redux offer easy debugging 
        redux is big obj
        multiple slices are present inside that object 
        if we want to cart data in redux we can create separate slice for it 
    Add data=>    
        whenever we want to modify the slice it can not be done directly
        from particular event "dispatch action" this action called an "function"  and that function internally  modify the slice 
        that function is basically known as reducer  
    Read data=>
        from read the data from the slice of redux store we use something known as "selector"
        we use selector to read the data from store and it modify our react component
        this phenomena is know as subscribing to the store 

        ![Alt text](react/Image/redux.png)

    use:
        -Install @reduxjs/toolkit and react-reducx
        -Build store
        -Connect store to app
        -Slice(cartSlice)
        -dispatch(action)
        -selector  
    reducer:
        it is combination of small reducers
        redux toolkit uses immer BTS  
js question 
    <button onClick={handleAdd}></button>
    <button onClick={handleAdd(data)}></button>
    <button onClick={()=>handleAdd(data)}></button>
    explain this 3 diff function call on button click

    =>1.handleAdd is passed as a reference. The function handleAdd will be called when the button is clicked, but it won't be executed until that click happens.
      2.handleAdd(data) is executed immediately as the page renders. This is because you are invoking the function rather than passing its reference.
      3.This syntax creates a new function using an arrow function. The handleAdd(data) function is wrapped in an anonymous function (()=>), which will only be executed when the button is clicked.



      *************************Episode 13***************************************
    Type of testing (developer)
        -Unit testing
            u test ur react component in isolation 
            testing small unit of application 
        -Integration testing
            testing the integration of component
        -End to End Testing 
            in this testing we test as soon as user enter to site upto it changes the site
        
        #React-testing-library
            it build in top up on tom testing library
            it uses jest - a lightweight js framework  
             npm i -D @testing-library/react
             npm i -D jest
            when u use babel then need to install additional dependencies
                npm install --save-dev babel-jest @babel/core @babel/preset-env
                configure this with creating babel.config.js
            parcel already uses babel and parcel has its won config for babel 
            now we are trying to add extra config so it will going to confuse 
            there for we have to change parcels behavior 
            to do this create .parcelrc file and past following code
                {
                     "extends": "@parcel/config-default",
                     "transformers": {
                       "*.{js,mjs,jsx,cjs,ts,tsx}": [
                         "@parcel/transformer-js",
                         "@parcel/transformer-react-refresh-wrap"
                       ]
                     }
                }
            Writing jest configuration for testing
                npx jest --init (it will create new file )
                select js dom for testing env
                #js dome: when u run test cases there is no server running there is no Browser they will need env for that we use js dom
                if jest version is greater than 28 then need to install jest-environment-jsdom separately
                npm install -D jest-environment-jsdom
            Install @bebel/preset-react - to make jsx work in test
                add this it into babel config 
                it help to testing library to convert that jsx code to html
            Install @testing-library/jest-dom

Note: add " "watch-jest":"jest --watch" in json to watch test(it will check file change and run automatically)

  