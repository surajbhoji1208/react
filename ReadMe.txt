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