### REACT ###
===============

### 1 . What is `Emmet` ###
===========================
A: `Emmet` is the essential toolkit for web-developers. It allows you to `type shortcuts` that are then expanded into full pieces of code for writing `HTML and CSS`, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.


### 2 .  What is `CDN`? Why do we use it ###
============================================
A: A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The goal is to provide high availability and performance by distributing the service spatially relative to end users.


### 3 . Why is `React known as React` ###
==========================================
A: And it's called `React` because it `reacts`. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.


### 4 .  `ADVANTAGES OF CDN` ###
================================
## Faster content delivery
Servers are distributed globally, so users receive content from the server closest to their location, reducing latency.

## Improved Website Performance
By caching content such as images, videos, CSS, and JavaScript files, CDNs reduce the load on the origin server, improving site load times.

## Reduced Bandwidth Costs
CDNs reduce the amount of data your origin server must provide, lowering bandwidth consumption and costs.
Scalability
CDNs can handle high traffic volumes by distributing requests across multiple servers, making it easier to scale for traffic spikes.

## Improved Availability and Redundancy
If one CDN server goes down, others can take over, reducing the risk of downtime.

## DDoS Protection
Many CDNs offer security features, such as Distributed Denial of Service (DDoS) attack mitigation, by distributing traffic and providing firewalls.

## Better SEO Rankings
Faster website performance can positively impact SEO rankings, as search engines like Google favor faster-loading sites.

## Global Reach
With servers distributed across different regions, a CDN allows businesses to serve global users more effectively.


### 5 . `DISADVANTAGES OF CDN` ###
==================================
## Cost  
While CDNs can save bandwidth costs, they come with additional service fees, which can be expensive for smaller websites or businesses.

## Caching Issues  
Sometimes, content updates may take longer to propagate across all CDN servers, resulting in users seeing outdated content.

## Complexity  
Configuring and managing a CDN can be complex, especially for small teams or websites with limited technical expertise.

## Limited Control  
Once content is distributed across a CDN’s servers, you have less control over how it is cached or served.

## Geographical Limitations  
Although CDNs have global reach, certain regions may still have fewer servers, potentially affecting performance for users in those areas.

## Data Privacy Concerns  
CDNs are third-party services, which means your data will pass through external servers, raising privacy concerns, especially for sensitive content.

## Potential Latency in Dynamic Content  
While CDNs excel with static content, dynamic content (like real-time data or personalized information) might not benefit as much, and in some cases, could introduce slight delays.


### 6 . `FRAMEWORK`  ###
========================
A: A framework is a set of pre-written code that provides a structure for developing software applications. A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.

Frameworks are more opinionated than libraries, meaning they require you to follow specific patterns and conventions.

It often calls your code at certain points (called **Inversion of Control**), meaning the framework has more control over how your application is organized and executed.

**Examples:** Angular, Django, Ruby


### 7 . `LIBRARY` ###
======================
A library is a collection of pre-written code, functions, or utilities that helps developers perform common tasks more efficiently.

Libraries are tools you can call upon whenever you need them in your code. They give you control over when and how to use them.

A `library` is a collection of packages that perform specific operations whereas a `framework` contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.

**Examples:** React, Lodash, jQuery


### 8 . `CDN LINKS FOR REACT` ###
==================================
"Using React via CDN is not an ideal approach for larger applications because multiple network calls may occur, which can impact performance. Additionally, you'll need to manually update the URL whenever a new version of React is released."

### How CDN Links for React Work ###
CDNs host popular libraries like React. When you include a React CDN link in your HTML file, the React JavaScript files (either the development or production version) are fetched from the CDN's global servers.

### Loading React via URL ###
You include the CDN links in the `<script>` tag in your HTML file, and the browser fetches the library from the closest CDN server, improving load time.


### 9 . `What These Links Do` ###
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


### 10 . `Difference Between Actual DOM and Virtual DOM` ###
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


### 11 . `Difference Between Actual DOM and Virtual DOM` ###
============================================================
## Actual DOM
--------------
- **Definition**: The Actual DOM is the real representation of the UI components in a web application.
- **Performance**: Updating the Actual DOM is slow because it involves complex operations that require recalculating styles and re-rendering elements.
- **Changes**: Any change in the Actual DOM triggers a complete re-render of the entire UI, which can lead to performance issues.
- **Manipulation**: Direct manipulation of the Actual DOM can be inefficient, especially for large applications.

## Virtual DOM
---------------
- **Definition**: The Virtual DOM is an in-memory representation of the Actual DOM. It is a lightweight copy that React uses to optimize updates.
- **Performance**: Updating the Virtual DOM is faster because it minimizes direct interactions with the Actual DOM.
- **Changes**: When changes occur, React updates the Virtual DOM first, compares it with the previous version, and calculates the minimum number of changes needed before updating the Actual DOM.
- **Manipulation**: The Virtual DOM allows for efficient batch updates, leading to better performance in rendering and re-rendering UI components.


### 12 . `Difference Between Single Page and Multi Page Application` ###
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


### 13 . `CSR vs SSR` ###
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


### 14 . `JSX vs HTML` ###
==========================
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


### 15 . WHAT IS `REACT`? ###
==============================
React is a JavaScript library developed by Facebook for building user interfaces (UI), especially in single-page applications (SPAs). It enables developers to create large web applications that can efficiently update and render in response to changing data. React is component-based, meaning UIs are built using small, reusable pieces of code called components.


### 16 . `HOW REACT WORKS`? ###
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


### 17 . ADVANTAGES OF `REACT` ###
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


### 18 . DISADVANTAGES OF `REACT` ###
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


### 19 . `REACT` ELEMENT ###
=============================
A React element is a plain JavaScript object that represents a part of the user interface (UI). It describes what should appear on the screen. React uses this element to create and update the actual DOM in a web browser.


### 20 . `RENDER METHOD` ###
============================
The `ReactDOM.render()` method is responsible for rendering React elements into the actual browser DOM. It takes React elements (which are JavaScript objects) and translates them into HTML elements that the browser can understand.

- **Transforms React Elements into Browser Tags**  
  It converts the React elements into corresponding HTML tags that can be displayed in the browser.

- **Replaces Existing DOM Content**  
  The method updates the DOM by replacing the existing content with the newly rendered elements.


### 21 . `NPM` ###
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


### 22 . `NODE MODULE FOLDER` ###
==================================
A: The `node_modules` folder contains generated code. This is not code you've written and you should never make any updates to the files inside Node modules because there's a pretty good chance they'll get overwritten next time you install some modules.

It is better to not commit the `node_modules` folder, and instead add it to your `.gitignore` file.

Here are all the reasons why you shouldn't commit it: The node_modules folder has a massive size (up to Gigabytes). It is easy to recreate the node_modules folder via packages. json

- **Transitive Dependencies**  
  Packages can rely on other packages, which may also have their own dependencies. This nested relationship is known as transitive dependency.


### 23 . `PACKAGE.JSON` ###
============================
`package.json` is a configuration file that provides key details about your project, including its metadata, dependencies, and scripts for tasks like building or testing. It helps npm manage package installations and tracks the setup for your project.


### 24 . `PACKAGE-LOCK.JSON` ###
=================================
`package-lock.json` is generated by npm to lock the exact versions of installed dependencies, ensuring that every installation uses the same versions, even if the original packages are updated. This consistency helps prevent unexpected issues across different environments.

- **Integrity**  
  This field contains a hash value that ensures the downloaded package content hasn't been tampered with, offering security against malicious changes.

- **Dev**  
  The `dev` property indicates whether a package is a development dependency (used during development) or a regular one.

- **Resolved**  
  The `resolved` property shows the exact URL from which the package was downloaded, ensuring npm fetches the correct version during installation.


### 25 . `GITIGNORE` ###
==========================
- `/node_modules` should always be included in `.gitignore` to avoid unnecessary files being tracked in your Git repository.
- Files like `package.json` and `package-lock.json` should **not** be ignored, as they are critical for managing the project’s dependencies and ensuring consistency across environments.
- The general rule: Don't push files that can be regenerated (like `node_modules`) to Git; use `.gitignore` for them.


### 26 . `BUNDLERS` ###
=======================
Bundlers are tools that combine all the files and dependencies in your project into a single (or a few smaller) bundle(s). This improves loading performance by reducing the number of HTTP requests and minimizing file sizes through:
- **Minification** (removing unnecessary characters or whitespace).
- **Code splitting** (splitting the code into chunks to load them as needed).

They handle different assets like JavaScript, CSS, and images, and may use loaders and plugins to transform code.

Example: **Create React App** uses Webpack as its default bundler.


### 27 . `DEPENDENCIES` ###
============================
Dependencies are external libraries or packages that your project requires for specific features. There are two types:
- **Dev dependencies**: Needed only during development (e.g., testing, build tools).
- **Regular dependencies**: Needed in production (e.g., the main library or framework).

Symbols in dependency versions:
- **Caret `^`**: Automatically updates to a new **minor version** (e.g., from 2.1.0 to 2.2.x).
- **Tilde `~`**: Automatically updates to a new **patch version** (e.g., from 2.1.0 to 2.1.x).
- **No symbol**: Locks the version to the current one.


### 28 . `PARCEL` ###
=====================
A: `Parcel` and `webpack` are the bundlers used mostly for `JavaScript` or `Typescript` code that helps you to `minify, clean, and make your code compact` so that it becomes easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application. Both of these bundlers substantially reduce the time it takes for the transfer of data and files to the server from the application. Along with that both bundlers parcel and webpack remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged.

Use of `Parcel/Webpack`:
Module bundlers are the way to organize and combine many files of JavaScript code into one file. A JavaScript bundler can be used when your project becomes too large for a single file or when you're working with libraries that have multiple dependencies.

features include:
- **Fast Dev Build**: Quick build process for development.
- **Local Server**: Runs a development server locally.
- **HMR (Hot Module Replacement)**: Automatically updates modules without refreshing the entire page.
- **Image Optimization**: Compresses images for faster loading.
- **Minification & Compression**: Reduces file size.
- **Tree Shaking**: Removes unused code for smaller bundle size.
- **Differential Bundling**: Generates bundles for modern and older browsers.
- **HTTPS Support**: For secure development environments.
- **Code Splitting**: Loads only the required parts of the code, improving load times.
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- Different Build for dev and prod bundles

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

## What is `.parcel-cache` folder
---------------------------------
A: `cache folder` (or `.parcel-cache in parcel v2`) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

## What is the `dist` folder
-----------------------------
A: The `/dist` stands for distributable. The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications.

Parcel's default directory for your output is named dist . The --dist-dir public tag defines the output folder for your production files and is named public to avoid confusion with the dist default directory.

## What is `browserlists`
-------------------------
A: Browserslist defines and shares the list of target browsers between various frontend build tools.


### 29 . `NPX` ###
===================
A: `npx` stands for `Node Package eXecute`. It is simply an `npm` package runner. It allows developers to execute any Javascript Package available on the npm registry without even installing it. npx is installed automatically with npm version 5.2.

Example: npx parcel index.html

This command runs Parcel with `index.html` as the entry point.


### 30 . `JSX` ###
==================
JSX is a syntax extension for JavaScript that looks similar to HTML, but it's not exactly HTML or XML. JavaScript engines can't interpret JSX directly, so it needs to be transformed into regular JavaScript objects before the engine can process it.

Key points about JSX:
- Attributes must be written in **camelCase** (e.g., `className`, `onClick`).
- For multiple lines of JSX, wrap them in parentheses for clarity.
- JSX enhances readability but must be converted to JavaScript for browsers.

JSX makes React code more readable and maintainable while enabling you to structure UI elements within JavaScript code.


### 31 . `JSX in React` ###
===========================
JSX is a syntax extension for JavaScript commonly used in React. It allows us to write HTML-like code within JavaScript. However, JSX is not directly understood by JavaScript engines because they only interpret ECMAScript (ES) standards.

## Superpowers of `JSX`.
------------------------
A: Using JSX,  wecan write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

**Example**
```js
function greeting(user) {
  return <h1>{user}, How are you!!!</h1>;
}
```

## `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
---------------------------------------------------------------------------------------------------
A: The Difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable.
  The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
  A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.


## Transpilation Process
------------------------
Tools like **Parcel** or other bundlers manage the transpilation process for JSX. They transform JSX into JavaScript code using **Babel** behind the scenes. Babel converts JSX into JavaScript objects that React can process.

When transpiled, JSX is transformed into a `React.createElement` function, which creates a plain JavaScript object. During rendering, this object is converted into an HTML element in the DOM.

## Babel
--------
**Babel** is a JavaScript compiler that transpiles JSX into React elements and also converts newer ES versions to older versions for compatibility with older browsers.

### Component Composition in JSX
----------------------------------
We can use curly braces inside JSX elements to integrate other JSX elements or add JavaScript expressions. This allows for dynamic content rendering within JSX components.

## Cross-Site Scripting (XSS)
-----------------------------
When using curly braces in JSX, you can embed JavaScript expressions. However, JSX automatically sanitizes any data received from an API or external source, helping to protect against Cross-Site Scripting (XSS) attacks. JSX escapes values by default, preventing malicious code from being executed unless you explicitly mark it as unsafe using methods like `dangerouslySetInnerHTML`.

### 32 . `DOM` Concept in JavaScript ###
========================================
The **Document Object Model (DOM)** is a programming interface for web documents, representing the structure of an HTML or XML document as a tree of objects. It allows JavaScript to interact with and manipulate the content, structure, and style of web pages dynamically.

## Key Concepts in the DOM
----------------------------
- **Document**: The root of the DOM, representing the entire HTML document, and providing access to all other nodes.
- **Nodes**: Everything in the document is represented as nodes—elements, attributes, text, and comments.

## Tree Structure of the DOM
-------------------------------
The DOM represents the HTML document as a tree, with the document object as the root. Each element becomes a node in this tree, and the relationships between elements are represented as parent-child relationships.


### 33 . Concept of `Reusability in React` ###
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


### 33 . `ES6` New Methods ###
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


### 34 . `Components` in React ###
==================================
In React, components are the building blocks of any React application. They allow you to split the UI into independent, reusable pieces and think about each piece in isolation. There are two main types of components in React: **Class Components** and **Functional Components**.

## Functional Components
-------------------------
Functional components are simpler and are written as JavaScript functions. Before React Hooks, functional components were stateless. However, with the introduction of hooks (like `useState`, `useEffect`), functional components can now manage state and lifecycle events just like class components.

It's nothing but a JavaScript function that returns a piece of JSX element.

When creating a functional component, we need to make its name start with a capital letter for React to understand that it's a functional component.

Functional components use the `useEffect` hook to manage side effects and lifecycle behaviors.

**Example:**
-------------
const HeadingOne = () => {
    return <h1>This is a functional component</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingOne/>)

## Class Components (with Lifecycle Methods)
---------------------------------------------
Class components were the standard way to create components in React before the introduction of hooks. They extend from React.Component and allow the use of lifecycle methods to manage component states and behavior over time.

## Component composition
------------------------
Component composition refers to the ability of one component to call or include another component.

**Example:**
-------------
const HeadingThree = () => (
    <div>
        {Heading()}
        <HeadingOne></HeadingOne>
        <HeadingTwo />
        <h1>This is a functional component without using return and curly braces, but wrapped in parentheses</h1>
    </div>
);

In this example, Heading, HeadingOne, and HeadingTwo are functional components. Since they are JavaScript functions, they can be composed in this manner.

This format maintains the markdown syntax with proper headings, subheadings, code blocks, and lists for easy readability in a `.md` file.


### 35 . `DYNAMIC ROUTING` ###
==============================
Dynamic routing in React.js refers to the ability to render different components or pages based on the current URL or user input. This is often achieved using React Router, which is a popular library for handling routing in React applications.

### Dynamic Route Parameters
-----------------------------
You can create routes that accept parameters, making the route dynamic. For example, `/user/:id` will match `/user/1`, `/user/2`, etc., where `:id` is a dynamic segment.

<Route path="/user/:id" component={UserComponent} />

## Accessing Route Parameter
-----------------------------
You can access dynamic route parameters using the useParams hook in the component:

```js
const { id } = useParams();
```
## Conditional Rendering
-------------------------
React can dynamically render components based on route parameters or user input. For example, if a user visits /product/42, the app will display details for product ID 42.

## Nested Routes
----------------
Dynamic routing also supports nested routes where a route can have sub-routes based on the URL.

<Route path="/category/:categoryId">
  <CategoryComponent />
  <Route path="/category/:categoryId/product/:productId" component={ProductComponent} />
</Route>

## Code Splitting with Dynamic Import
--------------------------------------
You can use dynamic routing along with code-splitting techniques to load only the necessary components for each route dynamically.

const ProductPage = React.lazy(() => import('./ProductPage'));

## Route Switching
-------------------
Using Switch in React Router ensures that only the first matched route is rendered, which is useful when you have dynamic and static routes.

<Switch>
  <Route path="/user/:id" component={UserComponent} />
  <Route path="/home" component={HomeComponent} />
</Switch>


### 35 . `REACT HOOKS` ##
=========================
React hooks are functions that let you use state and other React features in functional components. They allow you to manage state, handle side effects, and interact with the component lifecycle without writing class components.

## useState
-----------
**Purpose:** `useState` is a hook that allows you to add state to your functional components.
**Usage:** You can define a state variable and a function to update that state.

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
## useEffect
-------------
Purpose: useEffect is a hook that lets you perform side effects in your components, such as data fetching, subscriptions, or manual DOM manipulation.

useEffect have two arguments one is a call back function and another one is the dependency array
So if we are using useEffect inside a component when we render the compoenent will load first and then the useEffectcallback function will call

Usage: You can specify when the effect should run by providing a dependency array.

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

## useRef
------------
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

### 36 . `useHistory vs useNavigate` ###
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


### 36 . `REACT ROUTER` ###
===========================
React Router is a powerful library used for routing in React applications. It allows you to create a single-page application (SPA) with dynamic navigation between different views or components without reloading the entire page. Here's a breakdown of the key concepts and components of React Router:

## BrowserRouter
-----------------
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

## Route
------------
The Route component is used to define a mapping between a URL path and a component. When the URL matches the path, the corresponding component is rendered.

```js
import { Route } from 'react-router-dom';

<Route path="/about" component={About} />
```
## Switch (or Routes in newer versions)
---------------------------------------
The Switch component (or Routes in React Router v6) renders the first child `<Route>` or `<Redirect>` that matches the location. It is useful for grouping multiple routes.

```js
 import { Routes, Route } from 'react-router-dom';

 <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
 </Routes>
```

## Link
----------
The Link component is used to create navigational links that change the URL without reloading the page.

```js
import { Link } from 'react-router-dom';

 <Link to="/about">About</Link>
```

## NavLink
--------------
Similar to Link, but it provides additional styling capabilities for the active link.

```js
import { NavLink } from 'react-router-dom';

<NavLink to="/about" activeClassName="active">About</NavLink>
```

## useParams
-------------
A hook that allows you to access the URL parameters defined in the route. Useful for dynamic routing.

```js
import { useParams } from 'react-router-dom';

 function UserProfile() {
     const { userId } = useParams();
     return <div>User ID: {userId}</div>;
 }
```

## useHistory / useNavigate (v6)
---------------------------------
A hook that allows you to programmatically navigate in your application.

 ```js
 import { useNavigate } from 'react-router-dom';

 function MyComponent() {
     const navigate = useNavigate();
     const handleClick = () => {
         navigate('/about');
     };

     return <button onClick={handleClick}>Go to About</button>;
 }
 ```


### 37 . `Event Handlers` in React ###
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


### 38 . `Life Cycle` ###
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


### 39 . What are `async and differ` attributes in `<script>` tag ###
======================================================================
A: `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.

### _Syntax_
------------
```js
<script async src="demo_async.js"></script>
```

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.

### _Syntax_
-------------

```js
<script defer src="demo_defer.js"></script>
```


### 40 . What is difference between `React and ReactDOM` ###
==============================================================
A: `React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`.

The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.


### 41.Role of `type` attribute in script tag? What options can I use there
=============================================================================
A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.

## `type` attribute can be of the following types
--------------------------------------------------
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
  ### Syntax
  ```
  <script type="text/javascript"></script>
  ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

### Props ###
==============
The arguments that passed in the functional component

### Config driven UI ###
=========================
The ui is driven the config , the config is the data so that we change the ui according to the locations

### `Key` Property in Jsx element ###
======================================
Whenever we are looping and making data dynamic we need to set a key property to the JSX element like key = {value}

So these keys are very important for the app optimization 

Suppose if a new data came to the array we are looping , and if there is not unique key for the elements , The react will rerender all the elements again because react dont knwo which is the newly added data so this will make our app more complex in loading

So keeping a unique key for the element will help the react to identify the newly added data and then the react will only render that data

NOTE THAT :- never use the index of the looping as the unique key

A: A `key` is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists.
Keys should be given to the elements within the array to give the elements a stable identity.

### Good Practice ###
======================
## Components Folder Naming
- The file name should exactly match the component name.
- The extension of the file can be `.js`, `.jsx`, or `.tsx` — the extension doesn't matter as long as it matches your setup.

## Util / Common Folder in `src`
- This folder can contain files like `constants.js`, which will store hardcoded data and export it for use across the project.

## Named Export
- Named exports are used when we want to export multiple items from a single file.
- If we export multiple items using a default export inside an object, it may prevent the bundler from optimizing the code.
- When importing a named export, you need to wrap the names inside curly braces.


# Why React is Fast

## Reconciliation
**Reconciliation** is the process by which React updates the actual DOM to match the virtual DOM. When there are changes in the application (like user input or data updates), React uses reconciliation to figure out the minimal number of updates needed to the actual DOM.

- React compares the old virtual DOM and the new virtual DOM using a **Diff Algorithm**.
- Only the parts of the DOM that have actually changed are updated, making the rendering process more efficient.

## React Fiber
**React Fiber** is the new reconciliation engine introduced in React 16. It’s designed to enable incremental rendering, meaning React can split the work of updating the UI into smaller tasks. This allows React to pause, prioritize, or stop work, making it more responsive during complex updates or when the user interacts with the application.

- Fiber improves React’s ability to handle updates to the virtual DOM efficiently, especially in apps with complex UIs.

## Diff Algorithm
The **Diff Algorithm** is used by React to efficiently compare the old virtual DOM with the new one. Instead of comparing every single element, the diff algorithm identifies only the parts of the virtual DOM tree that have changed. These minimal changes are then applied to the actual DOM, reducing the performance impact of re-rendering.

## Incremental Rendering
With **React Fiber**, React introduced **Incremental Rendering**, which breaks down rendering work into smaller units or tasks. This allows React to handle large updates by spreading the work over multiple frames, ensuring smoother performance and avoiding UI blocking. React can pause and resume rendering, giving more flexibility in handling updates and maintaining responsiveness.



### Shadow DOM ###
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

### `<> </>` in React (Fragment Syntax) ###
=============================================
In React, `<> </>` is shorthand for **React Fragments**. A Fragment allows grouping multiple child elements without adding an extra node to the DOM, which is common when returning multiple elements from a component.

### Why Use Fragments?
- Avoids adding unnecessary DOM elements like extra `div` or `span` tags.
- Keeps the DOM clean and helps reduce extra styling and layout issues.

### Example:
```jsx
return (
  <>
    <h1>Hello, World!</h1>
    <p>This is a React fragment.</p>
  </>
);
```

### Monolith Architecture ###
==============================
In **Monolith Architecture**, the entire application is built as a single, unified unit. All components (like user interface, business logic, and data access) are interconnected and managed in a single codebase.

- **Tightly Coupled**: All parts of the system are tightly connected, making the entire system dependent on each component.
- **Deployment**: The application is deployed as a single unit. If any part of the application is updated, the entire application needs to be redeployed.
- **Scalability**: Scaling a monolith often requires scaling the entire application, even if only one part needs more resources.

---

### Microservice Architecture ###
=================================
**Microservice Architecture** is an architectural style where an application is composed of small, loosely coupled services. Each service is responsible for a specific functionality and operates independently.

### Key Principles:
- **Separation of Concerns**: Each microservice is responsible for a distinct functionality and operates independently of the others.
- **Single Responsibility Principle**: Each microservice should focus on one specific task or business function, improving modularity and allowing easier updates.

### Deployment:
- Microservices are typically deployed independently and run on different ports or servers.
- Each service can be scaled independently, offering more flexibility and efficient use of resources.




### Rendering Approach ###
===========================

## 1st Approach
---------------
- **Page loads** → API request is sent → Render the page with the API response.
- In this approach, the page will wait for the API response before rendering anything.

### Pros:
- Ensures that the data is already available when the page renders.
  
### Cons:
- Slower initial load time, as the page waits for the API response before rendering.

---

## 2nd Approach
---------------
- **Page loads** → Render the structure → API request is sent → Render again with the API response.
- In this approach, the page structure is rendered first, and once the API response is received, the data is loaded into the already rendered structure.

### Pros:
- Faster initial load as the basic structure is displayed first.
  
### Cons:
- May result in a flicker or empty placeholders while waiting for the API data to load.







	










	
	






