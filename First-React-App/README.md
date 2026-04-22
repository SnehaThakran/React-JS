# NOTES 
1. COMPONENT FIRST LETTER MUST BE CAPITAL.
2. AFTER CREATING REACT PROJECT DELETE THE EXISTING CODE IN App.jsx AND WRITE rafce TO CREAT SAMPLE COMPONENT.
3. RUN THE REACT PROJECT BY WRITING npm run dev in terminal.
4. ALWAYS CREATE THE COMPONENT INSIDE src.

### React features
### one way binding 

### named export and default export 
named export component must be wrap in {} at the time of export


## virtual dom 
## 1. the changes will not directly change in react dom so the frequent changes done by user will not effect the server because the changes will be managed by virtual dom this why react acts faster. 
## 2. single page applicatioin SPA
## 3. JSX and BABEL
## jsx is the extention to execute html and js 
## Virtual Dom

1. The Changes will no directly change in real DOM, so the frequent changes made by user will not affect to the page or server. Because the changes will manage by virtual DOM. That's why React acts faster.

# JSX & Babel

JSX is the extension to execute htmland js code in one page.

const demo()=>{
    //logic
        return(
            <HTML>
        )
}

Babel is a JS compiler. Babel can compile JSX code into plain JS code that can be run in any modern wen browser.

## Conditional Statement Rules
1. if-else: that is used outside JSX.
2. Ternary: used inside jsx.
3. AND: Show something only in true. 

## HOOKS 
1. Hooks are functions.
2. Hooks allows to state and write other features without a class.

>Rules to use Hooks
1.  only call hooks at the top level.
2. only call hooks from react functions.
