Javascript frameworks
=====================
Essential part of modern front-end development
Provides developers with robust tools for scalable, interactive web-applications
Many modern companies use framworks as a standard part of their tooling
Many front-end jobs require framwrok experience.

Libraries and frameworks
========================
Javascript added interactivity to web pages.
JS-devs wrote JS tools to solve problems. They packaged these tools into reusable packages called 'libraries' so that people could share their solutions.
This shared ecosystem of libraries helped shape the growth of the web, yielding to frameworks.
Framework. A library that offers opinions about how software gets built. These opinions allow for predictability. This predictability allows for scalability.

Popular frameworks
==================
Ember (2011)
Angular (2016)
Vue (2014)
React (2013)

Why do frameworks exist?
========================
Example. A to-do list application must:
- let users render a task list
- let users add a new task
- let users delete tasks
- track and update data of application (i.e. state)
In theory each task is simple in isolation.
For example, one can iterate over data to render it
One can add to an object to make a new task.
One can access a task via identifier (e.g. global button as constant).
Problem: Every time the state changes, the UI must be updated also.
See: frameworks-and-libraries.js
- There are about thirty lines of code dedicated to just putting stuff on the page. Neither user interaction or task management is handled yet. When these features are added, the UI must be updated at the right time and in the right way.
- JS frameworks make this sort of work easier. They exist to provide a more productive experience developing UIs.
- One could think of frameworks as interfaces to using JS. Something something press one react-button to activate ten JS-buttons.

Another way to build UIs
========================
Javascript frameworks enable developers to write UIs more declaratively.
i.e. Developers can declare how it must look, and the framework will handle the rest using its pre-defined implementation. The logic is taken care of.
L48@%<
- Thirty lines of code are reduced to six.
- No functions were written in the making of this UI
- We the dev needed only to describe the format of the UI
- In vanilla!JS, writing this interface is possible, but it is not practical, when thousands of records of data must be managed, and just as many elements must be rendered.

Other things frameworks offer
=============================

Tooling
-------
Testing: Ensures that application behaves as it should.
Linting: Ensures that code is error-free and stylistically consistent.

Compartmentalization
--------------------
Different parts of user interfaces are sectioned into *components*.
- Components: Maintainable, reusable lines of code that interact with one another.
All code can live in one file, so that you know where to make changes to that component.
In vanilla!JS, organizing code must be done manually.
Many JS developers end up organizing code improperly.

Routing
-------
Server-side routing: Allows user to navigate trail of visited documents.
Modern applications do not fetch and render new HTML files
- They load a single HTML shell, and continually update the DOM within.
- These are known as single-page applications (SPAs).
- They do not direct clients to new addresses on the Web.
- Each iteration of a DOM is called a 'view'; no routing is done.
If an SPA is complex enough, and renders enough unique views, it may be time to implement routing.
- People are used to being able to link to specific pages in their history.
- Routing handled by a client application is called 'client-side routing'.

Things to consider
==================
Do not use a framework for the sake of using a framework.
*Likewise, do not be productive just to be productive.*
Familiarity: Make sure you acquaint yourself with a framework before deciding to use it.
Overengineering: If the website is small, then a framework may not be necessary.
[Vue can replace jQuery](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/) in making a site interactive.
Larger code base
- Letting the framework deal with the technicalities of updating the DOM and the like streamlines the web-dev experience, but at a cost. The cost is that frameworks must execute code of their own, which makes the final product larger and more resource-intensive. The overhead does not have zero-cost.
- Some frameworks support 'tree-shaking', the removal of any code that isn't actually used. Performance must still be considered, especially when serving mobile devices.
- Ultimately, the layer of your web-page that the user interacts with is your HTML. Writing a whole application in JS can cause you to forget about the HTML. In turn, you'll produce an HTML document that has no semantic value, and is inaccessible. It is possible to write an application that cannot function without JS.
- Frameworks increase the power with which a developer develops. It also increases the magnitude of the problems, if your priorities are skewed. They amplify fragility, bloat, and inaccessibility. Modern web-dev priorities have inverted the structure of the Web in some places; in those places, JS is prioritized over UX.

Accessibility
=============
Advanced framework APIs must be employed to access ARIA [live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) and the like.
Sometimes frameworks create accessibility barriers that don't exist for traditional websites, such as client-side routing.
Each time you visit a traditional site:
- Browser knows to set focus to top of page.
- Assistive technologies know to announce page title.
With client-side routing:
- No new page is loaded upon DOM change.
- So far, no framework has been able to recreate predictable behavior.
Accessibility should be considered from the start of every web project.
Codebases that use frameworks are more likely to suffer accessibility issues than those that don't.

Choosing a framework
====================
Choosing is a team- and project-dependent process.
One should do one's own research to determine one's needs.
Main questions to ask:
1. What browsers does the framework support?
2. What domain-specific languages does the framework utilize?
3. Does the framework have a strong community and good docs?
*Domain-specific languages (DSLs)* are programming languages in specific areas of software development. WRT frameworks, DSLs are variants of JS / HTML that facilitate development in a given framework. It's not typically needed for a dev to learn a specific DSL.
*Does the framework have a strong community?*
- Hardest metric to measure.
- In theory one can check GitHub stars or weekly *npm* downloads.
- Ultimately one should check forums or with developers.
- Does it have good documentation?
Wikimedia chose Vue as its front-end. A [request for comments](https://phabricator.wikimedia.org/T241180) (RFC) has been posted.
RFCs can serve as an example of the research one should do for oneself when planning to use a front-end framework.
[State of JS survey](https://stateofjs.com/) is a collection of feedback from JS developers. [A comparison of Vue to other frameworks](https://v2.vuejs.org/v2/guide/comparison.html) has also been made.

Alternatives to frameworks
==========================
Suppose you want to ease the web-dev process and you know your project isn't going to be JS-heavy. A number of other options are available also:
- A content management system (CMS)
- Server-side rendering
- Static site generator

Content management system
-------------------------
Allows user to create content for the web without directly writing code themselves.
Good solution for projects that require input from content writers with limited coding abilities.
Significant amount of time investment needed.
Utilizing a CMS means you surrender some control over your final output.

Server-side rendering
---------------------
An application architecture where the server must render an SPA.
Server-side rendering is easier on the client, because you're only sending a single HTML file to them.
See:
[next-js](https://nextjs.org/) for React
[nuxt](https://nuxt.com/) for Vue
[fastboot](https://github.com/ember-fastboot/ember-cli-fastboot) for Ember
[angular-universal](https://angular.dev/guide/universal) for Angular

Static site generators
----------------------
Programs that dynamically generate all webpages of a multi-page site.
This allows the site to be published in any number of places.
Performance is better, since client device isn't building the site with JS
Security is better, because static sites have fewer attack vectors (i.e. openings where a virus or something like that can strike)
These sites do not depend on JS, but can utilize it.
Static sites can have as many web-pages as you want
Templates:
- components that define common pieces of your web-pages.
- components can be composed to create a final page.
Web-pages built by SSGs can also host framework applications.
Examples:
[Astro](https://astro.build/)
[Eleventy](https://www.11ty.dev/)
[Hugo](https://gohugo.io/)
[Jekyll](https://jekyllrb.com/)
[Gatsby](https://www.gatsbyjs.com/)
[Docusaurus](https://docusaurus.io/)
[VitePress](https://docusaurus.io/)
:wall

[To learn more about SSG's as a whole.](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/)


__________________________________________________________________

Contents
========
- Domain-specific languages
- Writing components
- Styling components
- Handling dependencies
- Rendering elements
- Routing
- Testing

Domain-specific languages
-------------------------
Languages that can't be read directly by the browser.
Must be transformed into JS or HTML first.
Framework tooling includes the tools to handle the conversion; it can be adjusted as necessary.
Possible to develop in a framework without DSLs, but DSLs streamline the process.
DSLs are more ubiquitous among the web-dev community than plain JS/HTML
Examples of DSLs
- JSX: For React, and is used by other frameworks like Vue
- Handlebars: Utilized heavily in Ember, and is equipped to import data from 'elsewhere'
- TypeScript: Superset of JS that enforces type-checking

Writing components
------------------
Most frameworks have a component model.
**Props** are external data that a component needs in order to be rendered properly.
Example:
1. You're building a website for a magazine.
2. Each writer needs to be credited for their work.
3. One might build an `AuthorCredit` component to affix to each article. This component must display an author's portrait and byline. In order to know what image to render and which byline to print, `AuthorCredit` must accept props.
**State** must be handled by a robust mechanism. Such is the key to an effective framework. Each component may contain data that wants its state controlled. This state will persist for as long as the component is in use. State can affect how a component is rendered.
**Events** are things to which components respond (e.g. mouse-click, hover). They enable applications to respond to our users. Frameworks each provide their own syntax for listening to events. Usually, the names of the equivalent native browser events are ferenced.

Styling components
------------------
Each framework offers a means whereby one can style components.
Approaches differ by framework, but each framework give you multiple options.
One can also style framework apps in [Sass](https://sass-lang.com/) or [Less](https://lesscss.org/) one can also transpile with [PostCSS](https://postcss.org/).

Handling dependencies
---------------------
All frameworks provide mechanisms to handle dependencies.
Exact mechanism differs by framework.
Components can be composed together.
- i.e. One can write components within other components.
### Dependency injection
Applications can often involve component structures with multiple levels of nesting. An `AuthorCredit` component nested many levels deep might need data from the root level.
Mechanisms for dependency injection include:
- Angular: [dependency injection](https://angular.dev/guide/di/dependency-injection)
- Vue: [provide-inject](https://v2.vuejs.org/v2/api/#provide-inject)
- React: [Context API](https://react.dev/learn/passing-data-deeply-with-context)
- Ember: [services](https://guides.emberjs.com/release/services/)

Lifecycle
---------
A collection of phases a component goes through from the moment it's appended to the DOM, then rendered by the browser, (**mounting**), then when it's removed from the DOM (**unmounting**).
The name of this **lifecycle** differs by framework. Access to each phase of the cycle also differs by framework.
All frameworks follow the same general model:
- enable developers to perform certain actions upon **mounting**
- '' upon rendering
- '' at many phases in-between
- '' upon unmounting
The *render* phase is most crucial to understand.
- It's repeated the most number of times as your user interacts with the application.
- It's run every time the browser must render new info (e.g. update, delete, add).
[An overview of a React component](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

Rendering elements
------------------
Approach to rendering differs by -- guess what! -- framework.
All approaches track the current render of the browser's DOM.
Each makes different decisions about how the DOM should change as components are re-rendered.
DOM is not interacted with directly.
Having an interface to the DOM costs more, but without it the ease of programming declaratively is lost.
### Virtual DOM
An approach whereby info about DOM is stored in JS's memory.
This copy is auto-updated, and compared to the real DOM --- the one that's rendered for the end-user.
A 'diff' is built to contrast the two DOM's. That diff is applied to the real DOM.
This DOM model is iused by React and Vue
[More info here](https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom)
### Incremental DOM
Like VDOM, builds diff to decide what to render.
Different in that no complete copy is created in JS's memory.
Parts of the DOM that don't want changing are ignored.
Used by Angular and Angular alone.
[More info here](https://auth0.com/blog/incremental-dom/)
### Glimmer VM
Unique to Ember.
Neither Virtual nor Incremental.
Separate process through which templates are transpiled into a sort of bytecode that is easier and faster to read than JS.

Routing
-------
[On the importance of routing](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#routing)
A complex app with many views can result in a broken experience.
To this end, each framework provides librarie(s) that help developers implement client-side routing in their applications.

Testing
-------
All frameworks provide tooling to facilitate writing tests.
Testing tools aren't built into the frameworks themselves.
CLI tools used to generate framework applications give access to proper tooling.
Each framework has tooling for unit- and integration- testing.
[TestingLibrary](https://testing-library.com/) is a suite of testing utilities for many JS environments (e.g. frameworks).
Ember docs encompass [testing](https://guides.emberjs.com/release/testing/).

__________________________________________________________________

Getting started with React
==========================

Hello React
-----------
React is a library for building user interfaces.
It is no framework, nor is it exclusive to the web.
It's used in conjunction with other libraries to render certain environments.
Note: [React Native](https://reactnative.dev/) can be used to build mobile applications.
React is used in tandem with [ReactDOM](https://react.dev/reference/react-dom).
Loosely speaking, the two taken as a whole constitute a 'framework'.
Main goal of React is to minimize bugs that occur when devs build UIs.
Minimization is implemented through the use of `components`, self-contained, logical pieces of code that describe a portion of the user interface.
Components can be composed to create a full UI.
Rendering work is delegated to React, so dev can focus on design moreso than implementation.

Use cases
---------
No strict rules regarding code conventions or file organization are enforced.
React can be used to [insert into an existing project](https://react.dev/learn/add-react-to-an-existing-project), but it is not as easy to do so as *jQuery* or as *VueJS*.
More ideal to build an entire application with React.
Many dev-experience benefits of a React application, such as writing interfaces via JSX, require compilation.
Tacking on a compiler to a website makes the code on it run more slowly.
- To circumvent this, developers often set up tooling with a build step.
- React has a heavy tooling requirement, but it can be learnt.
Tutorial shall mandate users to use a modern front-end build tool called [Vite](https://vite.dev/)

How does React use JavaScript?
------------------------------
React has JSX as a DSL (domain-specific language)
JSX extends JS's syntax so that HTML notation can be used alongside it.
```javascript
const heading = <h1>Mozilla Developer Network</h1>;
```
This is known as a **JSX expression**. React can use it to render that \<h1\> tag.
```javascript
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```
Parentheses have no effect on application. They're just syntactic sugar.
Without help, a browser cannot read JSX. When compiled (using a tool like [Babel]() or [Parcel]()), the header expression is translated into vanilla!JS.
In theory one can skip the compilation step, but then the declarative benefit of JSX is lost, and the code can become obfuscated.
- declarative: In which a user can say what he wants, and the computer does the rest.
Compilation is an extra step in the dev-process, but the readability of code is agreed to be worth the trade-off.
Modern front-end dev-work invariably involves a build process anyway.
- e.g. One must down-level modern syntax for compatibility with modern browsers.
- e.g. One may wish to [minify](https://developer.mozilla.org/en-US/docs/Glossary/Minification) code for performance.
As JSX is a blend of HTML and JS, some find it intuitive (i.e. easy to use).
Others argue the blending makes it confusing.
Once familiarity with it is established, UIs can be built more quickly and allow users to understand your code-base more readily.
For more information about JSX, access [this link](https://react.dev/learn/writing-markup-with-jsx)

Setting up your first React application
---------------------------------------
One can add React to an existing project just by copying some \<script\> elements into an HTML file.
For more information, [click here](https://react.dev/learn/add-react-to-an-existing-project).
[NodeJS](https://nodejs.org/en/) is a prerequisite to using Vite.
Node also includes `npm`.
For more information on `npm` and `yarn`, click [here](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)!
https://docs.npmjs.com/about-npm/
https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner
https://vite.dev/guide/

Initializing your app
---------------------
https://docs.npmjs.com/cli/v9/configuring-npm/package-json/
https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json/
package.\*\.json files are also discussed in [this tutorial](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)

Exploring our first React component
-----------------------------------
A **component** is a reusable module that renders a part of our overall application.
Components can be big or small, but are usually rigorous in definition (i.e. they serve an ostensible purpose).
The `.jsx` suffix is important, in that it tells the compiler to translate the code within into vanilla!JS.
The default `App.jsx` file consists of three main parts:
1. `import` statements near the top.
2. `App()` function in the middle.
3. `export` statement on the bottom.
### Import statements
These statements allow `App.jsx` to use code that's been implemented elsewhere.
```javascript
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```
Line 1: `useState` hook from `react` library is imported. Hooks are a way of using React features inside a component.
Lines 2-3: {react,vite}Logo are imported. Note: Import paths start with './' and '/' respectively, and both end with `.svg` suffix. This tells the compiler these imports are local, referencing our own files rather than `npm` packages.
Line 4: Imports CSS for `<App />` component. No variable name nor `from` directive present within this statement. This is known as a  [side-effect import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only), which imports no values into the JS file, but tells Vite to add the referenced CSS file to the final code output, so that it can be used in the browser.
### The `App()` function
Functions describe the structure of their components.
Most of the JS community prefers the lower camel-case naming convention
React uses Pascal case (i.e. upper camel-case)
The return value is what the browser renders to the DOM.
Just below the `return` keyword is a bit of syntax: `<>`
- This is a [fragment](https://react.dev/reference/react/Fragment)
- React components must return a single JSX element, and fragments allow us to do that without rendering arbitrary `<div>` elements in the browser. Fragments are fairly ubiquitous.
### The `export` statement
The `export default [identifiers]` statement avails functions to other modules.

Moving onto `main`
------------------
```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```
https://react.dev/reference/react-dom/client/createRoot
https://react.dev/reference/react/StrictMode

Components
----------
Props
: A means of passing data into a React component
Their syntax is identical to that of HTML attributes (i.e. prop='value').
Props are to components as attributes are as to HTML elements
Flow of data is unidirectional. Props can only be passed from parent to child

Summary
-------
- Components can import modules for needed functionality, and must be exported if they are to be used in other modules.
- Component functions are named in PascalCase.
- JS expressions can be rendered in JSX by inserting them between curly braces, like so: {alert('This is a message from JS.'); }.
- Some attributes in JSX are named differently from those in HTML, to prevent any naming collisions.
- Syntactically, props are to components as attributes are to HTML elements. Props are to component-functions as arguments are to Python functions, except props are basically always dict objects.
Learn more about React [here](https://scrimba.com/learn-react-c0e?via=mdn).

React ToDo application
======================

Our application's user stories
------------------------------
User story
: An actionable goal from the perspective of the user.
This will enable us to focus our work.
The motivation behind this application comprises these things:
- reading a list of tasks
- adding a task via mouse or keyboard 
- mark any task as completed
- delete task
- edit task
- view subset of tasks possibly via filtering

Accessibility features
----------------------
`aria-pressed`
: Tells assistive technology that the button can assume one of two states: `pressed` and `unpressed` (i.e. on, off). `true` === `pressed`
`visually-hidden`
: Has semantic value as a reminder to dev to add appropriate CSS. Once hidden via CSS, assistive technology will make this available to those who must consume it. Visually absent, not so absent in other ways, hence the name.
`role`
: Helps assistive tech explain what kind of element a tag represents. By default, `\<ul\>` semantically represents a list, but the styles to be introduced will subvert that. [Why is this necessary, you ask?](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html)
`aria-labelledby`
: Tells assistive tech that list heading is to be treated as 'the label that describes the purpose of the list beneath it'. 'Making this association gives the list more informative context', which clarifies the list's purpose to assistive-tech users.

JSX attributes
--------------
`defaultChecked`
: Tells React to check this box initially. Using the HTML attribute `checked` would cause React to log event-handling warnings into the console; this must be avoided, and will be expounded later on.
> Note: This is a boolean attribute. Non-empty values as treated as 'truthy'.
`htmlFor`
: Equivalent to the `for` attribute in HTML. `for` cannot be used in JSX, because it's a keyword.

React components
================
A component should (normative) be defined to be
: An obvious 'chunk' of your application
: Code that gets reused often
`key` is an attribute of all React components
It is a special prop managed by React
Key can be used for no other purpose
A unique key should always be passed to anything rendered with iteration

Iteration and Transformation
----------------------------
```javascript
const taskList = props.tasks?.map(
  (task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} />
  )
)
```
?
: Error check prior to invoking the method to follow.
map
: Transform iterable of one thing into an iterable of another

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state

TODO: Learn how to program client-side rendering.

React events and state
======================
When writing vanilla!JS, one would usually have a separate JS file in which one would write functionality to affix to some DOM nodes via event-listeners.
Whereas in JSX, the code describing the UI lives aside our event-listeners. This may seem counter to best practice advice about not writing JS in HTML, but since this is JSX, which is HTML in JS, this is just righteous bookending.
Example:
```javascript
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>
```
onClick
- Tells React to run a given function when the user clicks on the button.
- The camelCase is important, because JSX will not represent the JS name, `onclick`.
- All browsers follow this format in JSX: `on`(Eventname)
Callback props
--------------
Interactivity is rarely confined to just one components
Events that happen in one component happen elsewhere also
`callback prop`
: A function that expects data from a form as input to be passed as a prop
Persisting and changing data with state
---------------------------------------
Note: Props are immutable.
A component cannot change or create its own props.
When creating interactive pages (e.g. SPAs), one needs the functionality to create new data, retain it, and update it later.
For this purpose, **state** exists.
Props can be thought of as a means whereby components can communicate. State can be thought of as a means whereby components can remember these conversations, so to speak.
For this purpose, a special function is provided: `react.useState`.
`useState`
: Takes single argument that determines the initial value of state. Argument can be of most types.
: A two-item array is returned, containing two items:
    1. Current value
    2. A function with which one can update the state.
```javascript
import { useState } from 'react'

const [name, setName] = useState('Learn React')
```
Many things are happening inside this code:
- A `name` constant is being defined with the value 'Learn React'.
- A function that modifies `name` is being declared: `setName`
    - (If `name` is a constant, then how can it be modified...?)
- These things are being returned in an array, which is destructured via the appropriate notation.
Reading state
-------------
On `onChange` attribute of `input` node:
1. To be set to a function that receives one argument.
2. This argument is the `event` object that the *callback prop* receives when called. [i.e. `callbackProp(event)`]
3. The `event` in turn has a [target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) property, which represents the element that triggered the `change`-event. [i.e. in \<input ... onChange='callbackProp' \>, the \<input\> node is the element.]
4. The `event.target.value` is the text inside the input. [i.e. in \<input value={name}\>, 'name' is the value.]

TODO
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state#putting_it_all_together_adding_a_task

Putting it all together: Adding a task
--------------------------------------
[Generating a new id](https://github.com/ai/nanoid)

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_resources


