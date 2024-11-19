### REACT ###
===============

"DEVELOPERS CODE FASTER TAKE TOO MUCH TIME FOR DEBUGGING THE DEVS CODES SLOW EVEN DONT NEED TO DEBUG"

###  Why is `React known as React` ###
==========================================
A: And it's called `React` because it `reacts`. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.





### `FRAMEWORK`  ###
========================
A: A framework is a set of pre-written code that provides a structure for developing software applications. A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.

Frameworks are more opinionated than libraries, meaning they require you to follow specific patterns and conventions.

It often calls your code at certain points (called **Inversion of Control**), meaning the framework has more control over how your application is organized and executed.

**Examples:** Angular, Django, Ruby





### `LIBRARY` ###
======================
A library is a collection of pre-written code, functions, or utilities that helps developers perform common tasks more efficiently.

Libraries are tools you can call upon whenever you need them in your code. They give you control over when and how to use them.

A `library` is a collection of packages that perform specific operations whereas a `framework` contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.

**Examples:** React, Lodash, jQuery





### `CDN LINKS FOR REACT` ###
==================================
"Using React via CDN is not an ideal approach for larger applications because multiple network calls may occur, which can impact performance. Additionally, you'll need to manually update the URL whenever a new version of React is released."

### How CDN Links for React Work ###
CDNs host popular libraries like React. When you include a React CDN link in your HTML file, the React JavaScript files (either the development or production version) are fetched from the CDN's global servers.

### Loading React via URL ###
You include the CDN links in the `<script>` tag in your HTML file, and the browser fetches the library from the closest CDN server, improving load time.





###  `What These Links Do` ###
==================================

## React and ReactDOM Inclusion
-------------------------------
- React CDN links include both React and ReactDOM.
- `react.development.js` or `react.production.min.js`: This is the React library.
- `react-dom.development.js` or `react-dom.production.min.js`: This is ReactDOM, which is responsible for rendering React components into the DOM.

## Development vs Production
-----------------------------
- **Development version** (`development.js`): Includes helpful warnings and detailed error messages for developers.
- **Production version** (`production.min.js`): Optimized and minified, with debugging features removed for better performance in production.

`Development build` is several times (maybe 3-5x) `slower` than the `production build`.

## CORS (Cross-Origin Resource Sharing) in script tag
------------------------------------------------------
The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

## Avoiding Local Setup
------------------------
- CDN links help you skip setting up a local environment (like Node.js), useful for small applications, demos, or prototypes.

## Advantages of Using React CDN Link
--------------------------------------
- **Faster Load Times**: React libraries load faster from globally distributed CDN servers.
- **Reduced Server Load**: No need to host React on your own server, saving bandwidth.
- **Shared Caching**: Users who have previously accessed the same React version may have it cached, speeding up load times.
- **Quick Prototyping**: Useful for quickly testing React components without a full build setup.

## Disadvantages of Using React CDN Link
----------------------------------------
- **No Local Development Environment**: You miss out on tools like React DevTools, which work better with local setups.
- **Version Management**: You must manually update the CDN link when new React versions are released.
- **Limited Flexibility**: No control over additional configurations, build processes, or optimizations that can be done with tools like Webpack or Parcel.

## Crossorigin in Link
------------------------
- Cross-origin requests refer to accessing resources (scripts, images, etc.) from a different domain or protocol than the current webpage.
- CORS (Cross-Origin Resource Sharing) ensures that these resources are accessed safely across different origins.





### `Difference Between Actual DOM and Virtual DOM` ###
============================================================

## Actual DOM
--------------
- **Definition**: The Actual DOM is the real representation of the UI components in a web application.
- **Performance**: Updating the Actual DOM is slow because it involves complex operations that require recalculating styles and re-rendering elements.
- **Changes**: Any change in the Actual DOM triggers a complete re-render of the entire UI, which can lead to performance issues.
- **Manipulation**: Direct manipulation of the Actual DOM can be inefficient, especially for large applications.

## Virtual DOM
-----------------
- **Definition**: The Virtual DOM is an in-memory representation of the Actual DOM. It is a lightweight copy that React uses to optimize updates.
- **Performance**: Updating the Virtual DOM is faster because it minimizes direct interactions with the Actual DOM.
- **Changes**: When changes occur, React updates the Virtual DOM first, compares it with the previous version, and calculates the minimum number of changes needed before updating the Actual DOM.
- **Manipulation**: The Virtual DOM allows for efficient batch updates, leading to better performance in rendering and re-rendering UI components.






### `Difference Between Single Page and Multi Page Application` ###
=========================================================================
## Single Page Application (SPA)
--------------------------------
- **Definition**: An SPA loads a single HTML page and dynamically updates the content as the user interacts with the app.
- **Performance**: SPAs offer a smooth user experience with faster load times after the initial load since only data is transferred between the server and client.
- **Navigation**: Uses client-side routing, allowing for navigation without full page reloads.
- **Frameworks**: Common frameworks include React, Angular, and Vue.js.

## Multi Page Application (MPA)
-------------------------------
- **Definition**: An MPA consists of multiple HTML pages, each linked to different URLs. Each page reloads the entire application.
- **Performance**: MPAs can have slower navigation since each new page requires a full reload, including fetching new HTML.
- **Navigation**: Each link in the application leads to a different HTML page, causing the browser to request a new page from the server.
- **Frameworks**: Often built using traditional server-side frameworks like PHP, Ruby on Rails, or ASP.NET.





### `CSR vs SSR` ###
==========================
## Client-Side Rendering (CSR)
------------------------------
- **Definition**: In CSR, the rendering of the web application occurs in the browser, using JavaScript to fetch and display data.
- **Performance**: Initial loading can be slower since the browser must download the entire JavaScript bundle before rendering.
- **SEO**: SEO can be challenging as search engines may have difficulty indexing content that is rendered client-side.
- **User Experience**: Offers a more dynamic and interactive user experience after the initial load.

## Server-Side Rendering (SSR)
------------------------------
- **Definition**: In SSR, the server renders the web application, generating HTML content on each request and sending it to the browser.
- **Performance**: The initial loading is faster as users receive a fully rendered page from the server.
- **SEO**: Better for SEO, as search engines can easily crawl and index the content.
- **User Experience**: Can lead to a less interactive experience post-initial load since subsequent navigation may require re-fetching from the server.





### `Static vs Dynamic` Rendering ###
=====================================

## Static Rendering
--------------------
- **Definition:** Static rendering involves generating the HTML of a web page at build time. This means that the content is fixed and does not change based on user interaction or data fetching after the page is loaded.
- **Characteristics:**
  - Pages are pre-rendered, so they load quickly.
  - Ideal for content that doesn’t change frequently, such as blogs or marketing sites.
  - No need for server-side processing on each request.

## Dynamic Rendering
-----------------------
- **Definition:** Dynamic rendering generates the HTML of a web page on the fly, often based on user interaction, server data, or API calls. This means the content can change based on various factors, such as user input or current state.
- **Characteristics:**
  - Pages are generated in real-time, allowing for personalized content.
  - Suitable for applications with frequently changing data, like social media or e-commerce sites.
  - May require more server resources, as content is generated with each request.





### `ISR` (Incremental Static Regeneration) and `SPA` (Single Page Application) ###
=================================================================================

## ISR (Incremental Static Regeneration)
-----------------------------------------
- **Definition:** ISR is a feature used in frameworks like Next.js that allows you to update static content incrementally without needing to rebuild the entire site. This means you can regenerate specific pages after deployment based on user requests or at defined intervals.
- **Characteristics:**
  - Combines the benefits of static and dynamic rendering.
  - Enables faster page loads while keeping content fresh.
  - Pages can be statically generated and updated on demand, making it ideal for sites with frequently changing data.

## SPA (Single Page Application)
---------------------------------
- **Definition:** An SPA is a web application that loads a single HTML page and dynamically updates content as the user interacts with the app. Instead of loading new pages from the server, SPAs fetch data and render updates using JavaScript.
- **Characteristics:**
  - Provides a smoother and faster user experience, similar to desktop applications.
  - Only the necessary components are updated, minimizing server requests.
  - Routing and state management are often handled on the client side, which can lead to complexities in managing application state.





### WHAT IS `REACT`? ###
==============================
React is a JavaScript library developed by Facebook for building user interfaces (UI), especially in single-page applications (SPAs). It enables developers to create large web applications that can efficiently update and render in response to changing data. React is component-based, meaning UIs are built using small, reusable pieces of code called components.





### What is difference between `React and ReactDOM` ###
==============================================================
A: `React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`.

The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.





### Why React is `Fast` ###
============================
## Reconciliation
-------------------
Reconciliation is the process by which React updates the actual DOM to match the virtual DOM. When there are changes in the application (like user input or data updates), React uses reconciliation to figure out the minimal number of updates needed to the actual DOM.

- React compares the old virtual DOM and the new virtual DOM using a **Diff Algorithm**.
- Only the parts of the DOM that have actually changed are updated, making the rendering process more efficient.

## React Fiber
-----------------
React Fiber is the new reconciliation engine introduced in React 16. It’s designed to enable incremental rendering, meaning React can split the work of updating the UI into smaller tasks. This allows React to pause, prioritize, or stop work, making it more responsive during complex updates or when the user interacts with the application.

- Fiber improves React’s ability to handle updates to the virtual DOM efficiently, especially in apps with complex UIs.

## Diff Algorithm
------------------
The **Diff Algorithm** is used by React to efficiently compare the old virtual DOM with the new one. Instead of comparing every single element, the diff algorithm identifies only the parts of the virtual DOM tree that have changed. These minimal changes are then applied to the actual DOM, reducing the performance impact of re-rendering.

## Incremental Rendering
------------------------
With **React Fiber**, React introduced **Incremental Rendering**, which breaks down rendering work into smaller units or tasks. This allows React to handle large updates by spreading the work over multiple frames, ensuring smoother performance and avoiding UI blocking. React can pause and resume rendering, giving more flexibility in handling updates and maintaining responsiveness.





### `HOW REACT WORKS`? ###
=================================
## Component-Based Architecture
-------------------------------
- React applications are constructed from independent and reusable components, each returning a piece of UI (usually HTML) based on the data it receives. 

## Virtual DOM
---------------
- React uses a Virtual DOM, which is a lightweight copy of the actual DOM. It updates the virtual DOM first, compares it with the previous version (reconciliation), and only changes the parts of the actual DOM that need to be updated. This makes updates fast and efficient.

## JSX (JavaScript XML)
------------------------
- JSX is a syntax extension that looks similar to HTML, allowing you to write HTML-like code directly in JavaScript. It simplifies the creation of UI components.

## Unidirectional Data Flow
----------------------------
- React employs one-way data binding, where data flows from parent components to child components. This simplifies understanding data movement and debugging.

## State and Props
------------------
- **State**: Components maintain internal data called state, which can change over time. When the state changes, the component re-renders to reflect the new data.
  
- **Props**: Short for "properties," props pass data from one component to another (usually parent to child). They are read-only and cannot be modified by the child component.

## React Hooks
--------------
- Hooks let you use state and other React features in function components. For example, the `useState` hook allows you to add state to functional components, making it easier to manage stateful logic without using class components.





### ADVANTAGES OF `REACT` ###
==================================

## Component-Based Architecture
--------------------------------
- React enables you to build encapsulated components that manage their own state, making the code modular, reusable, and easier to maintain.

## Virtual DOM for Performance
------------------------------
- The Virtual DOM efficiently updates only the changed parts of the actual DOM, resulting in faster UI updates and better overall performance.

## JSX for Readability
-----------------------
- JSX combines HTML and JavaScript, making it easy to write and understand the structure of components, leading to more intuitive code.

## One-Way Data Binding
------------------------
- Unidirectional data flow ensures predictable state management, making it easier to debug and understand how data moves through the application.

## Rich Ecosystem
-----------------
- React has a large community with many libraries, tools, and frameworks (like Next.js) that enhance its functionality, speeding up development.

## React Developer Tools
------------------------
- Official Chrome and Firefox extensions assist in debugging React applications, providing insights into component hierarchies and states.

## React Native
----------------
- React can also be used for mobile app development through React Native, allowing code reuse between web and mobile platforms.

## SEO-Friendly (with SSR)
--------------------------
- Server-side rendering (using tools like Next.js) improves SEO for React apps by rendering content on the server rather than just on the client side.





### DISADVANTAGES OF `REACT` ###
=====================================

## Rapidly Changing
--------------------
- React is frequently updated, which is good for features but may require constant learning and adaptation.

## Learning Curve
-------------------
- Although React is simple at its core, concepts like JSX, props, state, and Hooks can be challenging for beginners to grasp.

## JSX Syntax
--------------
- Some developers find the combination of HTML and JavaScript in JSX confusing, especially those with a non-JavaScript background.

## Not a Full Framework
------------------------
- React is a library, not a full framework, so you need additional libraries for routing, form handling, and global state management (e.g., React Router, Redux).

## Poor Documentation of External Libraries
---------------------------------------------
- While React itself has good documentation, many third-party libraries often lack proper documentation, leading to longer research times.

## SEO Challenges (without SSR)
--------------------------------
- Fully client-rendered React apps can struggle with SEO, as search engines may have difficulty crawling JavaScript-heavy pages without server-side rendering.

## Heavy Initial Setup
-----------------------
- The initial setup with build tools (Webpack, Babel, etc.) can be overwhelming for beginners, although tools like create-react-app simplify this.

### State Management Complexity
-------------------------------
- Managing global state in large applications can become complex, requiring libraries like Redux, which adds to the learning curve.





### `REACT` ELEMENT ###
=============================
A React element is a plain JavaScript object that represents a part of the user interface (UI). It describes what should appear on the screen. React uses this element to create and update the actual DOM in a web browser.





### `RENDER METHOD` ###
============================
The `ReactDOM.render()` method is responsible for rendering React elements into the actual browser DOM. It takes React elements (which are JavaScript objects) and translates them into HTML elements that the browser can understand.

- **Transforms React Elements into Browser Tags**  
  It converts the React elements into corresponding HTML tags that can be displayed in the browser.

- **Replaces Existing DOM Content**  
  The method updates the DOM by replacing the existing content with the newly rendered elements.





### `NPX` ###
===================
A: `npx` stands for `Node Package eXecute`. It is simply an `npm` package runner. It allows developers to execute any Javascript Package available on the npm registry without even installing it. npx is installed automatically with npm version 5.2.

Example: npx parcel index.html

This command runs Parcel with `index.html` as the entry point.





### `NPM` ###
===================
A: `npm` is the world's largest Software Registry. The registry contains over 800,000 code packages. Open-source developers use `npm` to share software.

npm is lots of things:

- `npm` is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.

- The `npm` Registry is a public collection of packages of open-source code for` Node.js, front-end web apps, mobile apps, robots, routers`, and countless other needs of the JavaScript community.
- `npm` alternative is `yarn`

## How to initialize npm
------------------------
npm init

`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.

- `npm` is the command line client that allows developers to install and publish those packages.





### `NODE MODULE FOLDER` ###
==================================
A: The `node_modules` folder contains generated code. This is not code you've written and you should never make any updates to the files inside Node modules because there's a pretty good chance they'll get overwritten next time you install some modules.

It is better to not commit the `node_modules` folder, and instead add it to your `.gitignore` file.

Here are all the reasons why you shouldn't commit it: The node_modules folder has a massive size (up to Gigabytes). It is easy to recreate the node_modules folder via packages. json

- **Transitive Dependencies**  
  Packages can rely on other packages, which may also have their own dependencies. This nested relationship is known as transitive dependency.





### `PACKAGE.JSON` ###
============================
`package.json` is a configuration file that provides key details about your project, including its metadata, dependencies, and scripts for tasks like building or testing. It helps npm manage package installations and tracks the setup for your project.

## What is `browserlists` in package.json
------------------------------------------
A: Browserslist defines and shares the list of target browsers between various frontend build tools.





### `PACKAGE-LOCK.JSON` ###
=================================
`package-lock.json` is generated by npm to lock the exact versions of installed dependencies, ensuring that every installation uses the same versions, even if the original packages are updated. This consistency helps prevent unexpected issues across different environments.

- **Integrity**  
  This field contains a hash value that ensures the downloaded package content hasn't been tampered with, offering security against malicious changes.

- **Dev**  
  The `dev` property indicates whether a package is a development dependency (used during development) or a regular one.

- **Resolved**  
  The `resolved` property shows the exact URL from which the package was downloaded, ensuring npm fetches the correct version during installation.





### `GITIGNORE` ###
==========================
- `/node_modules` should always be included in `.gitignore` to avoid unnecessary files being tracked in your Git repository.
- Files like `package.json` and `package-lock.json` should **not** be ignored, as they are critical for managing the project’s dependencies and ensuring consistency across environments.
- The general rule: Don't push files that can be regenerated (like `node_modules`) to Git; use `.gitignore` for them.





### `BUNDLERS` ###
=======================
Bundlers are tools that combine all the files and dependencies in your project into a single (or a few smaller) bundle(s). This improves loading performance by reducing the number of HTTP requests and minimizing file sizes through:
- **Minification** (removing unnecessary characters or whitespace).
- **Code splitting** (splitting the code into chunks to load them as needed).

They handle different assets like JavaScript, CSS, and images, and may use loaders and plugins to transform code.

Example: **Create React App** uses Webpack as its default bundler.





### `DEPENDENCIES` ###
============================
Dependencies are external libraries or packages that your project requires for specific features. There are two types:
- **Dev dependencies**: Needed only during development (e.g., testing, build tools).
- **Regular dependencies**: Needed in production (e.g., the main library or framework).

Symbols in dependency versions:
- **Caret `^`**: Automatically updates to a new **minor version** (e.g., from 2.1.0 to 2.2.x).
- **Tilde `~`**: Automatically updates to a new **patch version** (e.g., from 2.1.0 to 2.1.x).
- **No symbol**: Locks the version to the current one.





### `PARCEL` ###
=================
A: `Parcel` and `webpack` are the bundlers used mostly for `JavaScript` or `Typescript` code that helps you to `minify, clean, and make your code compact` so that it becomes easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application. Both of these bundlers substantially reduce the time it takes for the transfer of data and files to the server from the application. Along with that both bundlers parcel and webpack remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged.

Use of `Parcel/Webpack`:
Module bundlers are the way to organize and combine many files of JavaScript code into one file. A JavaScript bundler can be used when your project becomes too large for a single file or when you're working with libraries that have multiple dependencies.

Here is the refined version with duplicates removed and a concise, organized structure:

### **Features**  
- **Fast Dev Build**: Quick build process for development.  
- **Local Server**: Runs a development server locally.  
- **HMR (Hot Module Replacement)**: Automatically updates modules without full-page refresh.  
- **Image Optimization**: Compresses images for faster loading.  
- **Minification & Compression**: Reduces file size for better performance.  
- **Tree Shaking**: Eliminates unused code to reduce bundle size.  
- **Differential Bundling**: Generates optimized bundles for both modern and older browsers.  
- **HTTPS Support**: Enables secure development environments.  
- **Code Splitting**: Loads only necessary parts of the code, improving load times.  
- **File Watching Algorithm**: Written in C++ for efficiency.  
- **Caching**: Speeds up builds by reusing previously generated files.  
- **Consistent Hashing**: Ensures unique and stable file names across builds.  
- **Diagnostic & Error Handling**: Provides meaningful errors and diagnostics.  
- **Separate Dev and Prod Bundles**: Optimizes the build differently for development and production environments.  

This version removes redundancy while maintaining clarity and professionalism.

For a **production build**, you can run: npx parcel build index.html

During production builds, the `dist` folder will contain optimized files, and you can remove the `main` property from `package.json` to avoid errors related to the entry point.

## installation commands
-------------------------
- Install:

npm install -D parcel

`-D` is used for development and as a development dependency.

- Parcel Commands :
  - For development build:
  ```
  npx parcel <entry_point>
  ```
  - For production build :
  ```
  npx parcel build <entry_point>

## `Transpilation` Process
---------------------------
Tools like **Parcel** or other bundlers manage the transpilation process for JSX. They transform JSX into JavaScript code using **Babel** behind the scenes. Babel converts JSX into JavaScript objects that React can process.

When transpiled, JSX is transformed into a `React.createElement` function, which creates a plain JavaScript object. During rendering, this object is converted into an HTML element in the DOM.

## `Babel`
-----------
**Babel** is a JavaScript compiler that transpiles JSX into React elements and also converts newer ES versions to older versions for compatibility with older browsers.

## What is `.parcel-cache` folder
---------------------------------
A: `cache folder` (or `.parcel-cache in parcel v2`) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

## What is the `dist` folder
-----------------------------
A: The `/dist` stands for distributable. The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications.

Parcel's default directory for your output is named dist . The --dist-dir public tag defines the output folder for your production files and is named public to avoid confusion with the dist default directory.

## `Logical Bundling` -> Good for Performance
-------------------------------------------
Logical bundling refers to bundling the code by organizing it into different bundles, each containing a **single, full feature**.  

## Key Benefits:
------------------
- Improves performance by **loading only what is required**.
- Helps maintain **modular code structure**.
- Reduces the initial load time by avoiding unnecessary bundles.

## Module Dependency Tree
--------------------------
Represents how different modules in a project depend on each other.
Helps the bundler know which files need to be included and in what order.

## Compiling
---------------
The process of converting code (e.g., from JSX or TypeScript) into browser-compatible JavaScript.

## Loader
------------
Special plugins used by bundlers to transform files (like Babel for JavaScript or CSS loaders).

## Code Splitting
------------------
Breaks large bundles into smaller chunks to load only what is necessary at a given moment.
Improves performance by loading parts of the code on-demand.





### `Rendering Steps` ###
========================
React follows specific steps during the rendering process to efficiently update the UI. These steps ensure optimal performance and minimize unnecessary re-renders.

## 1. Triggering
------------------
An event, state change, or props update triggers a render.
Examples include user interactions (like button clicks) or data changes.

## 2. Rendering
------------------
React calls the render function to generate a virtual DOM based on the component's current state and props.
This phase doesn't interact with the real DOM—only virtual DOM trees are prepared.

## 3. Committing
------------------
The virtual DOM is compared to the real DOM (using reconciliation) to determine the minimal set of changes.
React updates the real DOM based on the diff, ensuring only necessary elements are modified.

## 4. Rerendering
-------------------
If state or props change again, React triggers another render to reflect the updated data.
This can happen multiple times if components depend on frequently changing data.

## 5. Batching Updates
-----------------------
React batches multiple state or prop updates to avoid unnecessary renders.
This improves performance by combining several changes into a single render cycle instead of rendering for every update individually.





##### `JSX` ####
==================
JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML but is not exactly HTML or XML. It allows you to write HTML-like code within JavaScript, making React components more readable and maintainable. However, JavaScript engines cannot interpret JSX directly, so it must be transformed into JavaScript objects before browsers can process it.

## `JSX` Key points 
------------------------
Attributes in camelCase: Use className instead of class, and onClick instead of onclick.
Wrap multi-line JSX in parentheses: Improves clarity and readability.
JSX needs to be converted: Browsers can only interpret standard JavaScript, so JSX is compiled by tools like Babel.
Logic + Markup Together: Write both logic and UI markup in a single file, improving maintainability and debugging.

## Benifits of `JSX`.
------------------------
Improved Readability: Helps structure UI components more intuitively within JavaScript.
Easier Debugging: Combining logic and markup in one place makes it easier to debug.
Code Maintainability: Writing everything in one place ensures that UI changes are straightforward.

**Example**
```js
function greeting(user) {
  return <h1>{user}, How are you!!!</h1>;
}

const eg = <h1> Hello world </h1>
```

## `Rules` of JSX  
----------------
JSX (JavaScript XML) is a syntax extension in React that allows writing HTML-like code within JavaScript. While it looks similar to HTML, JSX follows some specific rules.

1. **Every JSX Element Must Have One Parent Element:** 
--------------------------------------------------------
   - All JSX must be wrapped inside a single parent element, such as a `<div>` or `<React.Fragment>`.  

   - **Example:**  
     ```jsx
     return (
       <div>
         <h1>Hello</h1>
         <p>World</p>
       </div>
     );
     ```

2. **JSX Tags Must Be Properly Closed:**  
------------------------------------------
   - Every tag in JSX must be self-closing or have an explicit closing tag.
   - **Correct:** `<img src="image.png" />`
   - **Incorrect:** `<img src="image.png">`

3. **Use `className` Instead of `class`:**  
-------------------------------------------
   - Since `class` is a reserved keyword in JavaScript, JSX uses `className` for CSS classes.

   - **Example:**  
     ```jsx
     <div className="container">Hello</div>
     ```

4. **JavaScript Expressions inside JSX:**  
------------------------------------------
   - You can embed JavaScript expressions inside JSX using curly braces `{}`.

   - **Example:**  
     ```jsx
     const name = "John";
     return <h1>Hello, {name}!</h1>;
     ```

5. **Use `camelCase` for HTML Attributes:**  
--------------------------------------------
   - In JSX, HTML attributes follow camelCase naming conventions (e.g., `onClick` instead of `onclick`).

   - **Example:**  
     ```jsx
     <button onClick={handleClick}>Click Me</button>
     ```

6. **Conditional Rendering with Ternary Operators:**  
----------------------------------------------------
   - You can use JavaScript ternary operators for conditional rendering.
   
   - **Example:**  
     ```jsx
     {isLoggedIn ? <h1>Welcome Back</h1> : <h1>Please Log In</h1>}
     ```

7. **JSX Elements Must Be Properly Indented and Structured:**  
--------------------------------------------------------------
   - Proper formatting and indentation improve readability.

8. **Fragments to Avoid Extra Nodes:**  
----------------------------------------
   - Use `<React.Fragment>` or shorthand `<>` to group elements without adding unnecessary nodes to the DOM.

   - **Example:**  
     ```jsx
     return (
       <>
         <h1>Title</h1>
         <p>Paragraph</p>
       </>
     );
     ```

9. **JSX Prevents Injection Attacks:**  
---------------------------------------
   - JSX escapes values by default, protecting the application from XSS (Cross-Site Scripting) attacks.

10. **Comments in JSX:**  
--------------------------
   - Comments in JSX must be wrapped inside curly braces `{}`.
   
   - **Example:**  
     ```jsx
     return (
       <div>
         {/* This is a comment */}
         <h1>Hello World</h1>
       </div>
     );
     ```

## `JSX vs HTML` 
-----------------
## JSX
-------
- **Definition**: JSX is a syntax extension for JavaScript, allowing you to write HTML-like code within JavaScript files.
- **Functionality**: Allows embedding JavaScript expressions within braces `{}`.
- **Usage**: Used primarily with React to describe the UI components.
- **Transpilation**: Needs to be transpiled to JavaScript (using tools like Babel) to run in the browser.

## HTML
-------
- **Definition**: HTML (HyperText Markup Language) is the standard markup language for creating web pages.
- **Functionality**: Static markup that does not allow embedding JavaScript expressions directly.
- **Usage**: Used to structure content on the web.
- **Browser Interpretation**: Browsers natively understand and render HTML without any transpilation.


## `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
---------------------------------------------------------------------------------------------------
A: The Difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable.
  The `{}` can embed a javascript expression or a variable inside it.

- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
  A component is written inside the `{<  />}` expression.
  
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

## Component Composition in JSX
----------------------------------
We can use curly braces inside JSX elements to integrate other JSX elements or add JavaScript expressions. This allows for dynamic content rendering within JSX components.

## Cross-Site Scripting (XSS)
-----------------------------
When using curly braces in JSX, you can embed JavaScript expressions. However, JSX automatically sanitizes any data received from an API or external source, helping to protect against Cross-Site Scripting (XSS) attacks. JSX escapes values by default, preventing malicious code from being executed unless you explicitly mark it as unsafe using methods like `dangerouslySetInnerHTML`.

## Conditional Rendering
-------------------------
React can dynamically render components based on route parameters or user input. For example, if a user visits /product/42, the app will display details for product ID 42.

## `<> </>` in React (Fragment Syntax)
---------------------------------------
In React, `<> </>` is shorthand for **React Fragments**. A Fragment allows grouping multiple child elements without adding an extra node to the DOM, which is common when returning multiple elements from a component.

### Why Use Fragments?
- Avoids adding unnecessary DOM elements like extra `div` or `span` tags.
- Keeps the DOM clean and helps reduce extra styling and layout issues.

 **Example:**
```jsx
return (
  <>
    <h1>Hello, World!</h1>
    <p>This is a React fragment.</p>
  </>
);
```

## `Key` Property in Jsx element
--------------------------------
Whenever we are looping and making data dynamic we need to set a key property to the JSX element like key = {value}

So these keys are very important for the app optimization 

Suppose if a new data came to the array we are looping , and if there is not unique key for the elements , The react will rerender all the elements again because react dont knwo which is the newly added data so this will make our app more complex in loading

So keeping a unique key for the element will help the react to identify the newly added data and then the react will only render that data

NOTE THAT :- never use the index of the looping as the unique key

A: A `key` is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists.
Keys should be given to the elements within the array to give the elements a stable identity.





### `DOM` Concept in JavaScript ###
========================================
The **Document Object Model (DOM)** is a programming interface for web documents, representing the structure of an HTML or XML document as a tree of objects. It allows JavaScript to interact with and manipulate the content, structure, and style of web pages dynamically.

## Key Concepts in the DOM
----------------------------
- **Document**: The root of the DOM, representing the entire HTML document, and providing access to all other nodes.
- **Nodes**: Everything in the document is represented as nodes—elements, attributes, text, and comments.

## Tree Structure of the DOM
-------------------------------
The DOM represents the HTML document as a tree, with the document object as the root. Each element becomes a node in this tree, and the relationships between elements are represented as parent-child relationships.





### Concept of `Reusability in React` ###
==============================================
**Reusability** in React refers to creating modular, independent components that can be used across different parts of an application or even across multiple projects. React’s component-based architecture is designed to promote reusability, which makes it easier to build scalable and maintainable applications.

## Component-Based Structure
-----------------------------
React allows developers to break down the UI into small, self-contained components. These components can be reused multiple times in different places, helping to reduce code duplication.

## Props for Customization
--------------------------
Props allow components to be reusable with different data inputs, enabling developers to pass dynamic content to a single component without rewriting it. This promotes flexibility while maintaining a modular structure.

## Higher-Order Components (HOCs)
---------------------------------
**HOCs** are functions that take a component and return a new component, allowing you to add reusable logic to multiple components without changing their implementations.

## Render Props
---------------
The **Render Props** pattern allows a component to share reusable logic by passing a function as a prop to decide what to render, providing flexibility in rendering logic while promoting reusability.

## Custom Hooks
---------------
React hooks like `useState`, `useEffect`, and `useReducer` promote the reuse of logic across different components. Custom hooks allow developers to extract reusable logic and share it between multiple components for consistency and modularity.

## Component Libraries
----------------------
You can create libraries of reusable components, such as buttons, forms, or modals, and use them across multiple projects. Libraries like **Material-UI** or **Bootstrap** provide reusable UI components for rapid development.




### `Synthetic Events` ###  
========================  
Synthetic Events in React are objects that wrap native browser events to provide a consistent API across all browsers. React’s synthetic event system ensures that event handling works uniformly across different platforms.

1. **What are Synthetic Events?**  
----------------------------------
   - Synthetic events are React’s cross-browser wrapper around native events.
   - These events behave identically across all browsers, providing a consistent interface.

2. **How Synthetic Events Work:**  
----------------------------------
   - React creates a synthetic event object that mimics the original native event.
   - The synthetic event gets automatically pooled (reused) to improve performance. This means the event object is cleared and reused after the callback finishes executing.
   - If you need to access the event asynchronously, call `event.persist()` to prevent React from reusing it.

3. **Event Handling in React:**  
-------------------------------
   - Event handlers in React are added using camelCase syntax (e.g., `onClick` instead of `onclick`).
   - React follows the virtual DOM pattern, meaning event handlers are attached at the root of the DOM, not directly on individual nodes.

4. **Examples of Synthetic Events:**
----------------------------------------

   - **onClick:** Handles button clicks.
     ```jsx
     <button onClick={() => alert('Button clicked!')}>Click Me</button>
     ```

   - **onChange:** Handles input field changes.
     ```jsx
     <input type="text" onChange={(e) => console.log(e.target.value)} />
     ```

   - **onSubmit:** Handles form submission.
     ```jsx
     <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
       <button type="submit">Submit</button>
     </form>
     ```

5. **Event Pooling:**  
---------------------
   - React reuses the synthetic event object to improve performance. This means the event’s properties become unavailable after the event handler is executed.  
   - **Example of Persisting an Event:**
     ```jsx
     function handleClick(event) {
       event.persist(); // Prevents the event from being reused
       setTimeout(() => console.log(event.type), 1000);
     }

     <button onClick={handleClick}>Click Me</button>
     ```

6. **Supported Synthetic Events in React:**  
----------------------------------------------
   React supports many types of synthetic events, such as:

   - **Mouse Events:** `onClick`, `onDoubleClick`, `onMouseEnter`, `onMouseLeave`
   - **Keyboard Events:** `onKeyDown`, `onKeyUp`, `onKeyPress`
   - **Form Events:** `onChange`, `onSubmit`, `onInput`
   - **Focus Events:** `onFocus`, `onBlur`
   - **Touch Events:** `onTouchStart`, `onTouchEnd`
   - **Clipboard Events:** `onCopy`, `onPaste`

7. **Advantages of Synthetic Events:**  
---------------------------------------
   - **Cross-browser Compatibility:** Provides uniform behavior across different browsers.
   - **Performance:** Uses event delegation by attaching handlers to the root, reducing the need for multiple listeners.
   - **Abstraction:** Makes handling events simpler by wrapping the native browser events.

Synthetic events are an essential part of React, ensuring seamless event handling with optimized performance and consistency.





### `Memoization` ###  
====================  
Memoization is an optimization technique used to improve the performance of applications by caching the results of expensive function calls and returning the cached result when the same inputs occur again.

1. **What is Memoization?**  
-----------------------------
   - Memoization stores the results of function calls and reuses them if the same inputs are passed again, avoiding redundant computations.
   - It ensures that a function doesn’t run more than necessary by returning previously computed results.

2. **How Memoization Works:**  
-------------------------------
   - The first time a function is called with certain arguments, it computes the result and stores it in memory.
   - If the function is called again with the same arguments, the stored result is returned instead of recalculating it.

3. **Memoization in React:**  
------------------------------
   React provides built-in tools for memoization to optimize rendering and avoid unnecessary re-renders.

   - **React.memo:**  
     - A higher-order component (HOC) that memoizes a functional component, preventing unnecessary re-renders if the props don’t change.
   
   - **useMemo:**  
     - A React hook that memoizes the result of a function to prevent expensive recalculations on every render.

   - **useCallback:**  
     - Memoizes a function definition so that the same function reference is used across renders, avoiding re-renders in child components that rely on it.

4. **Why Use Memoization?**  
-----------------------------
   - **Performance Optimization:** Reduces unnecessary recalculations or re-renders, making the application faster.
   - **Avoids Redundant Logic:** Ensures that the same logic isn’t executed multiple times for the same inputs.
   - **Improves User Experience:** Faster load times and fewer re-renders lead to smoother interactions.

5. **When to Use Memoization in React:**  
-----------------------------------------
   - **Expensive Calculations:** Use `useMemo` for computations that take significant time.
   - **Callback Functions Passed as Props:** Use `useCallback` to ensure that child components don’t re-render unnecessarily.
   - **Rendering Pure Components:** Use `React.memo` to memoize components that rely only on props, avoiding re-renders unless the props change.

6. **Drawbacks of Memoization:**  
---------------------------------
   - **Memory Consumption:** Cached data can accumulate over time, increasing memory usage.
   - **Overhead:** If not used carefully, memoization can add unnecessary complexity, leading to premature optimization.
   - **Limited Benefit for Lightweight Functions:** Memoization might not significantly improve performance for simple functions.




   
### `ES6` New Methods ###
==============================
## Arrow Function
------------------
Arrow functions provide a shorter syntax for writing functions and automatically bind the context (`this`) to the enclosing scope.

## Map
------
`map()` is a method that creates a new array by applying a function to each element of an existing array.

## Destructuring
-----------------
Destructuring allows you to unpack values from arrays or properties from objects into distinct variables, simplifying assignments.

## Filter
----------
`filter()` is a method that creates a new array containing only the elements that pass a specified test.

## Reduce
----------
`reduce()` executes a reducer function on each element of the array, resulting in a single output value (e.g., sum, product, etc.).

## Import / Export
-------------------
ES6 introduced modules, allowing developers to organize and reuse code across files using `import` and `export`.

## Default Export/Import
-------------------------
Each file/module can have only one default export.
When importing, you can use any name for the imported module.
Default exports are often used for the primary function/class of a module.

## Named Export/Import
----------------------
Multiple named exports can exist in a single module.
When importing, you must use the exact names of the exported entities, unless you use aliases.
Named exports are great for exporting multiple utilities or constants.




### `Pure Functions` ###  
=======================  
A pure function is a function that adheres to two key principles:

1. **Deterministic:**  
   - For a given set of inputs, a pure function always produces the same output. This means the function’s behavior is predictable and does not depend on any external state or data.
  
2. **No Side Effects:**  
   - Pure functions do not cause any observable changes in the application’s state or interact with the outside world (like modifying global variables, changing object properties, or performing I/O operations).
  
#### Example of a Pure Function:  
```javascript
function add(a, b) {
    return a + b; // Always returns the same result for the same inputs
}
```





### `Strict Mode` ###
===================
Strict Mode is a feature in JavaScript that helps identify and catch common programming errors, as well as enforce a stricter set of rules for JavaScript code. It can be enabled in both JavaScript files and within React components.

Key Features of Strict Mode:
Eliminates Silent Errors:

Throws errors for silent mistakes (like assigning values to undeclared variables) that would otherwise fail silently.
Disallows Duplicate Parameter Names:

Prevents the use of duplicate parameter names in functions, which can lead to confusion.
Prevents this from Being Implicitly Global:

In strict mode, this inside a function that’s called as a function (not as a method of an object) is undefined, preventing accidental global variable creation.
Disallows with Statement:

The with statement is not allowed in strict mode, which can lead to code that is hard to understand and maintain.
Changes to Certain Global Variables:

Some global variables (like eval and arguments) are restricted in strict mode.

**Example**
-----------
```js
<React.StrictMode>
    <App />
</React.StrictMode>
```

## Benefits of Strict Mode:
-----------------------------
Better Error Checking: Helps developers catch errors early during development.
More Secure Code: Reduces the likelihood of certain bugs and security issues.
Encourages Best Practices: Promotes cleaner and more maintainable code by discouraging potentially problematic features.





### `Components` in React ###
==================================
In React, components are the building blocks of any React application. They allow you to split the UI into independent, reusable pieces and think about each piece in isolation. There are two main types of components in React: **Class Components** and **Functional Components**.

## `Functional` Components
-------------------------
Functional components are simpler and are written as JavaScript functions. Before React Hooks, functional components were stateless. However, with the introduction of hooks (like `useState`, `useEffect`), functional components can now manage state and lifecycle events just like class components.

It's nothing but a JavaScript function that returns a piece of JSX element.

When creating a functional component, we need to make its name start with a capital letter for React to understand that it's a functional component.

Functional components use the `useEffect` hook to manage side effects and lifecycle behaviors.

**Example:**
-------------
```js
const HeadingOne = () => {
    return <h1>This is a functional component</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingOne/>)
```

## `Class` Components (with Lifecycle Methods)
---------------------------------------------
Class components were the standard way to create components in React before the introduction of hooks. They extend from React.Component and allow the use of lifecycle methods to manage state and behavior over time.

In essence, a class component is a JavaScript class with the name of the component, which inherits from React.Component (provided by React) and contains a render() method that returns some piece of JSX.

# Receiving Props in Class Components
-------------------------------------
To access props in a class component, you typically use a constructor method. Inside the constructor, you must call the parent class's constructor using super(props) to properly initialize the component.

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props); // Call parent constructor to initialize 'this'
    console.log(this.props); // Now 'this.props' is accessible here
  }

  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

A super constructor is a special constructor in the class hierarchy of object-oriented programming languages. It refers to the constructor of the parent class that is being extended in the current class. The purpose of using the super constructor with a props argument is to inherit the properties of the parent class and also pass in additional properties as arguments to the child class.

The main reason for passing props parameter to super() call is to access this.props in your child constructors.

When you extend the React.Component class, you must call the parent class's constructor using super(). If you're planning to access props inside the constructor, you need to pass props to super()

if we pass props inside super we can call this.props inside constructor other it will be undefined but we can use props alone without this keyword

Whenever the class component loads or mounted, the constructor is called and then render function is called then the componentDidMount function is called

# componentDidMount()
----------------------
The componentDidMount lifecycle method is primarily used for making API calls. In React, the typical lifecycle of a component is to load the component, render it, and then make API calls to fetch data.

This method is called after the initial render, allowing you to fetch data and update the component's state with the fetched data, which will subsequently trigger a re-render of the component.

In functional components, this can be achieved using the useEffect hook, which allows you to perform side effects, such as fetching data.

# componentDidUpdate()
-----------------------
The componentDidUpdate lifecycle method is invoked after every re-render of the component, which occurs when either props or state change.

This method receives prevProps and prevState as arguments, enabling you to compare them with the current props and state to determine if specific updates are necessary. This is particularly useful for optimizing component performance and avoiding unnecessary operations.

# componentWillUnmount()
--------------------------
The componentWillUnmount lifecycle method is called just before a component is unmounted and destroyed. This is the appropriate place to clean up resources, such as removing event listeners, stopping timers, cancelling subscriptions, or aborting network requests, to prevent memory leaks.

For example, if you start a setInterval in componentDidMount, it will continue to run even if the component is no longer displayed. To prevent this, you should stop the interval in componentWillUnmount, ensuring it only operates while the specific component is mounted.

# Lifecycle of parent child class component
--------------------------------------------
parent constructor
parent render
child constructor
child render
child componentDidMount
parent componentDidMount 

First the parent class constructor and render function will call and then if there is any child class its constructor and then its render will call and then the child class componentDidMount will call and then parents componentDidMount will call

# Render phase
----------------
Constructor Calling: When a component is instantiated, the constructor is called. This is where you can initialize state and bind methods.

Rendering: After the constructor, the render method is invoked. This method returns the JSX that describes what should be rendered on the screen. React then constructs the Virtual DOM based on this returned JSX.

# Commit phase
----------------
React Updates DOM: After the Render phase, React compares the Virtual DOM with the actual DOM (this process is known as reconciliation) and identifies changes.

componentDidMount: Once the changes are determined, React updates the actual DOM to reflect the new state of the component. After this update, the componentDidMount lifecycle method is called, which is often used for side effects, such as fetching data or setting up subscriptions.

# Mounting
-----------
Constructor Called: The component's constructor is invoked, where initial state and bindings can be set up.
Render Component with Dummy Data: The render method is called, and the component is rendered with initial or dummy data.
Update the DOM with Dummy Data: React updates the actual DOM to reflect the rendered output.
componentDidMount: After the DOM updates, the componentDidMount lifecycle method is called, allowing for side effects like API calls or subscriptions.

# Updating
-----------
State Update: Within the componentDidMount, if this.setState is called (possibly due to an API fetch), it triggers a re-render.
Render with API Data: The component re-renders, now displaying the fetched API data.
Update the DOM with API Data: React updates the actual DOM to reflect the new data.
componentDidUpdate Called: After the DOM updates, the componentDidUpdate lifecycle method is invoked, allowing for further side effects or logic based on the updated props or state.

# Unmounting
-------------
componentWillUnmount: This method is called when the component is about to be removed from the DOM. It’s the ideal place to clean up resources, such as timers, subscriptions, or event listeners, to prevent memory leaks. For example, when navigating away from a component by clicking a link, componentWillUnmount is triggered.

# Why?
-------
When you create a class component in React by extending React.Component, the parent class's constructor initializes the component's props. If you skip passing props to super(), React may not initialize them correctly within the instance.

Key Points:
Instance-specific Props: Each instance of the class (the component) maintains its own props. By passing props to super(), you ensure that the specific props are correctly initialized for that instance.

Accessing Props: Outside the constructor, you typically use this.props and this.state within class methods or event handlers. These methods need to refer to the current instance of the class to access the correct props and state.

Correct Method Functionality: If you do not call super(props), the this.props inside your methods would be undefined, leading to potential errors. The method wouldn't know which component's props to access, which can cause unexpected behavior in your application.

## state variable
------------------
In React class components, state variables are managed using this.state, which is an object that holds the component's dynamic data.

# Declaring State Variables
State variables can be declared inside the constructor using this.state.

```js
constructor(props) {
    super(props);
    this.state = {
        variableName: initialValue,
        // other state variables
    };
}
```

# Updating State Variables
Avoid Direct Updates: Never update state variables directly using:

```js
this.state.variableName = this.state.variableName + 1;
```
Directly mutating the state can lead to unexpected behavior and bugs, as React relies on its internal mechanisms to manage re-renders.

Using this.setState(): Instead, use the this.setState() method provided by React to update state variables. This method accepts an object containing the state variables you want to update.

```js
this.setState({ variableName: this.state.variableName + 1 });
```
Reactivity: When you call this.setState(), React merges the provided object with the current state. React then compares the previous state object with the new state object to determine what has changed. If there are differences, React triggers a re-render of the component, ensuring the UI reflects the latest state.

## Eaxmple
-----------
```js
import React from 'react'

class Component extends React.component{

   constructor(props) {
    super(props); // Required to access `this.props`
    console.log(this.props); // Now accessible
    console.log(props) // accessible

    this.state = {
      count : 0,
      count2 : 1,
    }
  }

  render(
    return(
      <div>
      <h1>count : {this.state.count}</h1>
      <button onClick={() => {
        this.setState({
          count : this.state.count + 1
        })
      }}>count increment</button>
      <h1>Hello this is a class compoenent</h1>
      </div>
    )
  )
}
```





### React `Render Tree` and Component Concepts ###
=====================================================
In React, the **render tree** represents how components are structured and nested to form the UI. Each component plays a specific role, and understanding their properties, behavior, and relationships is crucial to building efficient applications.

## 1. **Top-level Components**
--------------------------------
These are the main or parent components responsible for rendering sections or pages of the application. They often serve as containers for other components.

**Example:**
```jsx
function App() {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}
```





### `Leaf` Components ###
========================
Leaf components are the smallest building blocks of the UI. They do not contain other components but may receive props to configure their behavior.

**Example**
-----------
```js
function Button({ label }) {
  return <button>{label}</button>;
}
```





### `Props` ###
==============
Props (short for "properties") are the mechanism by which data is passed from a parent component to a child component in React. They allow you to customize and control how components behave and render based on the input they receive.

# Key Points about Props:
--------------------------
Data Transfer: Props are used to pass data and event handlers down to child components.
Immutable: Props are read-only. A child component cannot modify its own props.
Function Components: In functional components, props are received as arguments.
Class Components: In class components, props are accessed using this.props.
Default Props: You can define default values for props using the defaultProps property in class components or default parameters in functional components.

# Example
---------
```js
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greeting name="Midhun" />
```





### `Immutable` Props ###
========================
Props are immutable, meaning the child component cannot modify them directly. This ensures predictable behavior and maintains React’s unidirectional data flow.

**Example**
------------
```js
function DisplayNumber({ number }) {
  // Trying to modify props will cause an error.
  // number = number + 1; ❌
  return <p>{number}</p>;
}
```





### `Forwarding` Props ###
===========================
When a parent component needs to pass props through an intermediate component to a deeper child, prop forwarding is used.

**Example**
-----------
```js
function Input(props) {
  return <input {...props} />;
}

function Form() {
  return <Input placeholder="Enter text" />;
}
```





### `Children` Prop ###
======================
The children prop allows you to pass elements or components between the opening and closing tags of another component.

**Example**
-----------
```js
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

<Wrapper>
  <h1>Title</h1>
  <p>This is some content.</p>
</Wrapper>;
```




### Importance of `Pure Components` ###
========================================
A pure component behaves predictably by rendering the same output for the same input (props or state). Avoiding side effects helps ensure the component's integrity.

**Example**
-----------
```js
function PureGreeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
```





### `Local Mutation` and Why to Avoid It ###
===========================================
Directly modifying state or props can lead to unpredictable behavior. React promotes immutability by encouraging controlled updates using setState or hooks.

**Example**
------------
```js
this.state.count = this.state.count + 1; // ❌ Avoid direct mutation.

this.setState({ count: this.state.count + 1 }); // ✅ Use setState instead.
```





### React Functional Component Snippets: `rafce` and `tsrafce` ###
===================================================================

## 1. `rafce` (React Arrow Function Component Export)
-----------------------------------------------------------
This snippet quickly generates a React functional component with an arrow function and exports it by default.

**Usage:**  
- Primarily used in JavaScript (`.js`) React projects.
- Reduces repetitive boilerplate when creating functional components.

**Example:**
```jsx
import React from 'react';

const ExampleComponent = () => {
  return <div>Hello, World!</div>;
};

export default ExampleComponent;
```

## 2. `tsrafce` (TypeScript React Arrow Function Component Export)
--------------------------------------------------------------------
This snippet is similar to rafce but used for TypeScript projects. It adds type annotations to ensure type safety.

**Usage:**
Preferred for React projects using TypeScript (.tsx files).
Ensures props and other values are properly typed.

```js
import React from 'react';

interface ExampleProps {
  title: string;
}

const ExampleComponent: React.FC<ExampleProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default ExampleComponent;
```





### `Life Cycle` ###
=========================
React component lifecycle methods allow you to control what happens at specific stages of a component's life. Class components in React use lifecycle methods to manage component behavior during its creation, updating, and destruction phases.

## Mounting Phase
-----------------
The lifecycle methods during the mounting phase are invoked when a component is created and added to the DOM.

### `constructor(props)`
This is the very first method called in the lifecycle. It is used for initializing state or binding event handlers.

### `static getDerivedStateFromProps(props, state)`
This is a rarely used method that allows the component to update its internal state based on changes in props.

### `render()`
This is the only required lifecycle method in a class component. It returns the JSX that defines the component's UI. It is called every time the component is re-rendered.

### `componentDidMount()`
Called immediately after the component is inserted into the DOM. This is a good place to perform side effects like fetching data, setting up subscriptions, or interacting with the DOM.

## Updating Phase
------------------
The updating phase happens whenever the component's state or props change, causing it to re-render.

### `static getDerivedStateFromProps(props, state)`
As mentioned earlier, it is called before rendering during both mounting and updating. It can update the component's state in response to prop changes.

### `shouldComponentUpdate(nextProps, nextState)`
This method determines whether a re-render is necessary. If it returns false, React skips the rendering and updating process.

### `render()`
Called whenever the component is re-rendered. It returns the JSX structure of the component.

### `getSnapshotBeforeUpdate(prevProps, prevState)`
This method is invoked right before the DOM is updated. It allows you to capture information (e.g., scroll position) before the DOM changes. The value returned from this method is passed as a parameter to `componentDidUpdate()`.

### `componentDidUpdate(prevProps, prevState, snapshot)`
This method is called after the component's updates are flushed to the DOM.

## Unmounting Phase
--------------------
This phase occurs when the component is removed from the DOM.

### `componentWillUnmount()`
This method is invoked just before the component is removed from the DOM. It is commonly used to clean up resources like event listeners, timers, or network requests.


### `DYNAMIC ROUTING` ###
==============================
Dynamic routing in React.js refers to the ability to render different components or pages based on the current URL or user input. This is often achieved using React Router, which is a popular library for handling routing in React applications.

## Dynamic Route Parameters
-----------------------------
You can create routes that accept parameters, making the route dynamic. For example, `/user/:id` will match `/user/1`, `/user/2`, etc., where `:id` is a dynamic segment.

<Route path="/user/:id" component={UserComponent} />

## Accessing Route Parameter
-----------------------------
You can access dynamic route parameters using the useParams hook in the component:

```js
const { id } = useParams();
```
## Nested Routes
----------------
Dynamic routing also supports nested routes where a route can have sub-routes based on the URL.

<Route path="/category/:categoryId">
  <CategoryComponent />
  <Route path="/category/:categoryId/product/:productId" component={ProductComponent} />
</Route>

### `Old Way Routing` (React Router v5 and below)
-------------------------------------------------
## Router
---------
Definition: The Router component is a high-level component that keeps the UI in sync with the URL. It uses the browser's history API to enable navigation without page reloads.

Usage: You typically use the BrowserRouter or HashRouter as the Router component, depending on how you want to manage the history.

## Routes
-----------
Definition: The Routes component is a container for all the Route components. It looks through its children Route elements and matches the current location to one of them. It renders the first Route that matches the location.

Usage: You use Routes to group multiple Route components.

## Route
--------
Definition: The Route component is used to define a mapping between a URL path and a component. When the app's location matches the path defined in a Route, the corresponding component will render.

Usage: You specify the path prop for the URL and the element prop for the component to render.

```js
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}
```

## BrowserRouter
-----------------------
This component is the top-level wrapper that enables routing in your application. It uses the HTML5 history API to keep your UI in sync with the URL.

```js
import { BrowserRouter } from 'react-router-dom';

function App() {
     return (
         <BrowserRouter>
             {/* Your components and routes will go here */}
         </BrowserRouter>
     );
 }
 ```

## Route Switching
-------------------
Using Switch in React Router ensures that only the first matched route is rendered, which is useful when you have dynamic and static routes.

<Switch>
  <Route path="/user/:id" component={UserComponent} />
  <Route path="/home" component={HomeComponent} />
</Switch>


### `New Routing`
-----------------
## createBrowserRouter
-----------------------
This function is used to create a router instance that uses the HTML5 history API to manage navigation and URL changes. It allows you to define routes in a declarative manner and supports dynamic routing.

## RouterProvider
------------------
This component provides the router context to your application. It is used to wrap your application and pass the router instance created by createBrowserRouter. This makes routing functionalities available throughout your app.

## Outlet
----------
This component acts as a placeholder for nested routes. It allows you to render child routes inside a parent route component, enabling you to build complex layouts where specific components change based on the current route.

## Link
--------
This component is used to create navigational links to different routes in your application. It allows users to navigate without causing a full page reload, leveraging the single-page application (SPA) behavior of React Router.

## NavLink
--------------
Similar to Link, but it provides additional styling capabilities for the active link.

```js
import { NavLink } from 'react-router-dom';

<NavLink to="/about" activeClassName="active">About</NavLink>
```

# Example
---------
```js
// App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  useParams
} from 'react-router-dom';

// Layout component
function AppLayout() {
  return (
    <div>
      <h1>My Application</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 2</Link>
      </nav>
      <Outlet /> {/* Renders the matched child route component */}
    </div>
  );
}

// Home component
function Home() {
  return <h2>Home Page</h2>;
}

// About component
function About() {
  return <h2>About Page</h2>;
}

// User component
function User() {
  const { id } = useParams(); // Access the dynamic route parameter
  return <h2>User ID: {id}</h2>;
}

// Create the router with dynamic routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Layout component with Outlet
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "user/:id", element: <User /> },
    ],
  },
]);

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

```


### `REACT HOOKS` ##
=========================
React hooks are functions that let you use state and other React features in functional components. They allow you to manage state, handle side effects, and interact with the component lifecycle without writing class components.

## 1 . `useState`
------------------
**Purpose:** `useState` is a hook that allows you to add state to your functional components.
**Usage:** You can define a state variable and a function to update that state.

Whenever a state variable changed the react will trigger a reconcilation cycle (re-render)

Never declare a useState outside of a component
Never declare a useState inside a if else statement, for loops and functions

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial state is 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
## 2. `useEffect`
------------------
Purpose: useEffect is a hook that lets you perform side effects in your components, such as data fetching, subscriptions, or manual DOM manipulation.

useEffect have two arguments one is a call back function and another one is the dependency array
So if we are using useEffect inside a component when we render the compoenent will load first and then the useEffectcallback function will call

Usage: You can specify when the effect should run by providing a dependency array.

Two arguments one us a callback function and another is the dependency array
the dependency array is not mandatory

If no dependency array is not assigned, useEffect is called every render
If the dependency array is an empty array, useEffect is called on inital (just once)
If the dependency array have value like eg: a stateVariable, the useEffect is called whenever the stateVariable updated

Like in the class component we use componentWillUnmount there is no method in functional compoenent but we can use a
return inside the useEffect and this returns a an arrow function inside this arrow function we can constrol the whatever we need to stop like compoenentWillUnmount
```js
import React, { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty array means it runs once after the first render

  return <div>{JSON.stringify(data)}</div>;
}
```

## 3. `useRef`
---------------
Purpose: useRef is a hook that allows you to create a mutable object which holds a .current property. This is often used to directly access a DOM element or to hold a mutable value that does not cause re-renders.

Usage: You can store a reference to a DOM element or keep track of a value without triggering a re-render.

```js
import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Focus the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

# 3.1 `forwardRef`
------------------
forwardRef is a React function that lets you pass a ref from a parent component to a child component. This is useful when you need to access a child component's DOM element or imperative methods directly from the parent.

# When to use forwardRef?
-------------------------
When you want to expose a child’s DOM element to the parent.
Useful for handling native DOM manipulations like focusing input fields.

**Example**
-----------
```js
import React, { forwardRef } from 'react';

const InputComponent = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

export default InputComponent;
```

# 3.2 `useImperativeHandle`
--------------------------
useImperativeHandle allows you to customize the instance value (or methods) exposed when a parent accesses the child’s ref. It works alongside forwardRef.

# When to use useImperativeHandle?
----------------------------------
When you want to expose only specific functionalities to the parent (instead of the whole DOM).
It provides a way to limit or control what gets exposed via the ref.

**Example**
------------
```js
import React, { useImperativeHandle, forwardRef, useRef } from 'react';

const InputComponent = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));

  return <input ref={inputRef} {...props} />;
});

export default InputComponent;
```

# 3.3 `flushSync`
--------------------
flushSync forces React to flush state updates synchronously, ensuring that the DOM updates immediately. This is useful when you need to guarantee a visual update (e.g., animations or measurements) before continuing with other tasks.

# When to use flushSync?
-------------------------
In cases where React’s batching mechanism delays updates, but you need an immediate DOM change.
It’s useful for smooth animations or UI consistency when multiple state updates happen at once.

**Example**
-----------
```js
import { useState } from 'react';
import { flushSync } from 'react-dom';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    flushSync(() => {
      setCount(count + 1); // Immediate update in the DOM
    });
    console.log('Count updated:', count);
  };

  return <button onClick={handleClick}>Increment</button>;
}
```

# 3.4 How These Work with `useRef`
-----------------------------------
forwardRef: Passes down a ref from the parent to a child component.
useImperativeHandle: Controls what part of the component is exposed to the parent through the ref.
flushSync: Ensures immediate updates to the DOM, which can be crucial when dealing with DOM elements accessed through useRef.

## 4. `useRouterError`
----------------------
Used to show the exact error, when we use this it will give us an object with the exact error.

```js
import { useRouterError } from 'react-router-dom';

const Component = () => {
  const err = useRouterError()
  return (
    <div>
      <h1>{err}</h1>
    </div>
  )
}
```

## 5. `usePaarams`
-------------------
useParams is a hook provided by React Router that allows you to access the dynamic parameters of the current route. This is particularly useful for extracting values from the URL, such as IDs or slugs.

You typically use useParams inside a functional component to retrieve the parameters defined in your route configuration.

Assuming you have a route defined like this:
```js
<Route path="/user/:id" element={<UserComponent />} />
```
In your UserComponent, you can access the id parameter using useParams
```js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserComponent = () => {
  const { id } = useParams(); // Accessing the 'id' parameter from the URL

  return (
    <div>
      <h1>User ID: {id}</h1>
      {/* You can use the id to fetch user data or display user information */}
    </div>
  );
};

export default UserComponent;
```

## 6. `useLayoutEffect`
------------------------
Runs synchronously after the DOM updates but before the browser paints the screen.
Blocks rendering until the effect completes, ensuring DOM updates are applied before the browser paints.

**Suitable for:**
Measurements (e.g., getting element dimensions).
Synchronous DOM mutations that need to be immediately reflected.
Preventing visual flicker caused by rapid updates.

**Example**
------------
```js
import React, { useLayoutEffect, useRef } from 'react';

function Example() {
  const divRef = useRef();

  useLayoutEffect(() => {
    console.log(divRef.current.offsetHeight); // Measure height before painting.
  }, []);

  return <div ref={divRef}>Hello World</div>;
}
```

## 7. `useMemo`
===============
Use memo is a react hook that lets you cache a result of a calculation between re-renders.
It ensures that a function’s return value is only recomputed if its dependencies change.
Use useMemo only when you notice performance issues.
If the dependencies are complex objects or arrays that change frequently, the memoization might not help much.

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

## 8. `useCallback`
====================
useCallback is a React Hook that memoizes a function so that it is only re-created when its dependencies change. This helps prevent unnecessary re-renders, especially when passing functions as props to child components.

It’s particularly useful when:

A function is passed as a prop to a memoized child component.
The function is defined inside a component and changes on every render, causing unnecessary child component updates.

```js
const memoizedCallback = useCallback(() => {
  // Function logic here
}, [dependencies]);
```


## 9. `useReducer`
==================
Its a hook that is used for state management, alternative to useState
useState is built using useReducer

useReducer have two parameter one is reducer function and another is initial value
the reducer function will two parameters currentState and action and it returns a newState
useReducer returns a pair of values newState and dispatch

## 10. `useContext`
====================
The Context API in React allows you to share state and data globally across components without the need to pass props down the component tree manually. It is useful when multiple components need access to the same data.

The useContext hook makes it easier to consume data from a context inside functional components.

## `Reat.memo`
===============
React.memo is a higher-order component (HOC) in React that optimizes functional components by preventing unnecessary re-renders. It does this by memoizing the component—that is, it only re-renders the component if the props have changed.
When you wrap a component with React.memo, React will compare the new props with the previous ones.
If the props are the same, React skips rendering that component.
If the props are different, the component will re-render as usual.




### `useHistory vs useNavigate` ###
========================================
## useHistory
-----------------
**Part of:** React Router (v5 and earlier).
**Purpose:** Used to access the history instance, allowing you to programmatically navigate between routes.

```jsx
import { useHistory } from 'react-router-dom';

function GoHomeButton() {
  const history = useHistory();

  const goHome = () => {
    history.push('/home'); // Navigate to the home route
  };

  return <button onClick={goHome}>Go Home</button>;
}
```

## useNavigate
---------------
Part of: Introduced in React Router (v6).
Purpose: A replacement for useHistory. It provides a simpler API for navigating to different routes.

```js
import { useNavigate } from 'react-router-dom';

function GoHomeButton() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home'); // Navigate to the home route
  };

  return <button onClick={goHome}>Go Home</button>;
}
```






### `Event Handlers` in React ###
=======================================
Event handlers are functions that respond to specific events (like clicks, changes, etc.) triggered by the user interacting with a component. In React, these handlers are usually passed as props to the respective components.

## onClick Event Handler
-------------------------
**Usage:** The onClick event handler is used to handle click events on elements such as buttons, links, or any clickable element.

```js
import React from 'react';

function App() {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <button onClick={handleClick}>Click Me</button>
    );
}

export default App;
```

## onChange Event Handler
-------------------------
Usage: The onChange event handler is used to handle changes to form elements such as <input>, <textarea>, and <select>. It is typically used to capture user input in forms.

```js
import React, { useState } from 'react';

function App() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>You typed: {inputValue}</p>
        </div>
    );
}

export default App;
```





### `Shadow` DOM ###
====================
The **Shadow DOM** is a web standard that allows developers to encapsulate a section of the DOM and its styles. It creates a separate, isolated DOM tree within an element, preventing the styles and scripts inside the shadow DOM from affecting the main DOM or other parts of the page. This isolation ensures that the internal structure is hidden from the global document styling and scripting, making it useful for creating reusable and maintainable web components.

- **Use Case**: Shadow DOM is commonly used in frameworks like Web Components to encapsulate custom elements and their styles.
- **Example**: A `video` element in HTML uses the shadow DOM to manage its built-in controls.


### Actual DOM ###
==================
The **Actual DOM** refers to the real Document Object Model (DOM), which is a tree-like structure representing the HTML elements in a web page. Any changes to the DOM result in re-rendering, which can be slow as the entire page or large parts of it need to be updated.


### Virtual DOM ###
====================
The **Virtual DOM** is a lightweight, in-memory representation of the actual DOM. It exists as a JavaScript object. When the state of a component changes, React creates a new virtual DOM instead of updating the actual DOM immediately. This allows for faster operations because manipulating JavaScript objects is more efficient than working directly with the DOM.






### `Lazy Loading` / On-Demand Loading / Dynamic Import  
=======================================================
Lazy loading means **splitting the components** into separate bundles that load only when needed. When the application initially loads, only the required bundles are sent, and other components are loaded **on-demand** when the user navigates to them.

#### Benefits:
- **Reduces the initial load** time by keeping the main bundle small.
- **Improves performance** by loading only the necessary components dynamically.

#### React’s Implementation:
- React provides a **lazy component** for this purpose. Inside the lazy component, we use a **callback with dynamic `import()`** to load the component when required.
  
- However, because React **renders quickly**, the bundle might not load immediately, causing React to throw an **error or display a fallback page**.

#### Handling Loading State with Suspense:
- To avoid rendering errors, we use React's **`Suspense`** component to wrap lazy-loaded components.
- The **`fallback` prop** of `Suspense` can display a loading UI (like a **shimmer effect**) while the component bundle is being fetched.

This approach ensures smooth **lazy loading** and avoids disrupting the user experience.





### `Hiegher order component`
=============================
Its a function takes a component and returns a component

### Controlled and Uncontrolled component
=========================================

### `Lifting state up`
=======================

### `Props drilling`
======================

### `React context`
=====================
It is used to avoid props drilling
we can make an context file and import it in any module

so in functional component for using the context react is giving a hook that is useContext and we can pass the specifi context we have created to that useContext hook and  extract the data inside the context

But in class component we can also import the context but there is no hook inside class component so that react is giving a power that **.consumer** so we can use this  like as an component with adding this to the name of context that we have created <Context.Consumer> </Context.Consumer>  inside this component we can use a curly brace and inside it we can use a call back function and this call back function will take the data as a parameter and we can use this parameter to take the values inside the context 

we can use ContextName.provide component ofr wrapping up other component  and can pass value prop inside it for updating the content fileds , can wrpa the whole app or can wrap a single component and also we can use for wrap our whole app with a updated data and inside the app we can use it again for wrapping another component and pass a different updated data

### `Redux`
============
Redux is not Mandotory
Redux is a seperate library

Redux is not only the one library for state management eg: Zustand
Easy to debug
Predictable state container for js application

Vanila reducx and redux toolkit

Redux store is a big javascript object that kept in a global central place
Any component can read and write data in redux store

So that keeping the redux store as a big javascript oject is fine but we logically divide the redux store in to different slices so that each slice can hold a specific data that is responsible for a specific operation examples are cart , userInfo etc...

We cant directly edit the slice inside the redux store for that we need to do some steps

Example scenario
----------------
If we need to modify ccart that is writing
when we click the button

1. we need to **dispatch** an **Action**
2. This action calls a **function**. This function is known as **reducer**
3. This function modifies the cart slice

Reading the data from cart slice

1. We need a **selector** to read data from the slice. This is known as **subscribing** to the store
2. This selector will update the react component
3. Now the component is synced with the store , whenever the store updates the react component will get that data
	
  Select is a hook known as useSelector
  Whenever we are using selector to subscribing the store not subscribe the entire store make it only for the portion of store, subscribing the entire store will make performance loss

  ```js
  // subscribing the entire store
  const store = useSelector((store) => store)
  const cartItems = store.cart.items

  // subscribing to the portion of the store
  const cartItems = useSelectr((store) => store.cart.items)
  ```
  
# Steps
--------
- Install @reduxjs/toolkit and react redux library
- Build our store
- Connect our store to our app
- Slice
- Dispatch (action)
-Selector (subscribe)

**Important**
In the older version of redux that is **vanila redux** we should **not mutate** the state, instead of this we need to make a copy of the state and modify that copy of the state and return the copy of the state

Now we are using the **redux toolkit** which is the new version in this we have toe **mutate** the state directly in the reducers each action of the slices andd behind the scenes redux toolkit is using a library called **Immer** this library is doing the same thing which is in the vanila redux for us. Instead of mutation the state we can also return a new state.

In vanila redux we need to usea **middlewares and thungs** but in the redux toolkit we have **RTK Query**



## React `Strictmode`
=====================
This is wrapping up our whole app and this will rerender our component for chcking the inconsistency in our component
Thats why we see while consoling any data it will print twice
This twice checking behaviour is only occure in the development mode, but in the build mode it will occur once.





