REACT
=========

1 . Set up
===========
⦁	npx create-react-app <appName >
⦁	components ~
⦁	default is App
⦁	rafce, tsrafce
⦁	calling function on button click
⦁	without parameter
⦁	with parameter
⦁	Fragments
⦁	Children Prop

2 . Theory
========
⦁	What is React
⦁	DOM
⦁	DOM vs Virtual DOM   ~
⦁	Reconciliation
⦁	working
⦁	Diffing Algorithm
⦁	React Fibre
⦁	incremental rendering
⦁	Shadow DOM
⦁	Dynamic rendering
⦁	props vs state
⦁	Server Side vs Client Side Rendering in React ~
⦁	Synthetic Events
⦁	Life Cycle
⦁	View Oriented
⦁	Memoization
⦁	Pure functions
⦁	Strict Mode
⦁	SPAs vs MPAs
⦁	CSR vs SSR
⦁	Static vs Dynamic rendering
⦁	ISR, SPA

3 . Components
===========
⦁	A React render tree
⦁	top-level components
⦁	leaf components
⦁	Props
⦁	immutable
⦁	Forwarding props
⦁	children
⦁	Importance of making them pure
⦁	local mutation

4 . JSX
====
⦁	Rules of JSX
⦁	Fragment
⦁	JavaScript in JSX
⦁	HTML VS JSX
⦁	Conditional rendering
⦁	Key

5 . UI as a tree
===========
⦁	Render trees
⦁	Module Dependency Tree 
⦁	Bundler
⦁	eg: Webpack
⦁	Compiling
⦁	Loader
⦁	Code splitting

6 . JSX
=====
⦁	Rules of JSX
⦁	Fragment
⦁	JavaScript in JSX
⦁	HTML VS JSX

7 . Rendering steps
===============
⦁	Triggering
⦁	Rendering
⦁	Committing
⦁	Rerendering
⦁	Batching updates

8 . State
=======
⦁	Behaviour
⦁	Queueing updates
⦁	Updater function
⦁	Updating object
⦁	local var vs state var
⦁	local mutation
⦁	Lifting state
⦁	Reducer

9 . Event handlers
==============
⦁	onClick, onSubmit etc…d
⦁	Stopping propagation
⦁	Preventing default

10 . Lifecycle Methods
=================
⦁	What is Mounting, Unmounting
⦁	Phases
⦁	- Mounting phase
⦁	constructor
⦁	render
⦁	getDerivedStateFromProps
⦁	componentDidMount

11 . Updating phase
==============
⦁	shouldComponentUpdate
⦁	componentWillUpdate
⦁	componentDidUpdate
⦁	getSnapshotBeforeUpdate
⦁	Unmounting phase
⦁	componentWillUnmount
⦁	Error Handling
⦁	getDerivedStateFromError
⦁	componentDidCatch

12 . Hooks
======
12 . 1 . useState
=========
⦁	changeValue
⦁	changeValueWithFunction

12 . 2 . useRef
=======
⦁	useState vs useRef
⦁	forwardRef
⦁	useImperativeHandle
⦁	flushSync

2 . 3 . useEffect
=========
⦁	dependency  
⦁	return in useEffect
⦁	useLayoutEffect

12 . 4 . useMemo
=========
⦁	sample
⦁	recache
⦁	pros and cons
⦁	referential equality

12 . 5 . useHistory
===========
⦁	push
⦁	pop
⦁	replace
⦁	Redirect

12 . 6 . useNavigate
===========
⦁	navigate()
⦁	route
⦁	-1, 1

12 . 7 . useCallback
============
⦁	sample
⦁	useMemo vs useCallback
⦁	uses
⦁	useContext
⦁	sample

12 . 8 . useReducer

2 . 9 . Create custom hooks
==================
⦁	useDebugValue
⦁	useTransition
⦁	useDeferredValue	
⦁	useId
⦁	sample
⦁	useImperativeHandle

12 . 10 . Props
=======
⦁	default prop
⦁	PropDrilling
⦁	Children 

13 . Components
==========
⦁	Creating Components
⦁	Controlled vs Uncontrolled Components
⦁	Inputs
⦁	Higher order components
⦁	Pure components

14 . React Router
=============
⦁	install
⦁	Hooks
⦁	useHistory
⦁	useNavigate
⦁	use

15 . Link
====
⦁	replace
⦁	reloadDocument
⦁	state={}
⦁	- useLocation()

16 . NavLink
========
⦁	-isActive
⦁	end

17 . Navigate
=========
⦁	useNavigate
⦁	navigate(-1)

18 . Types of Router
==============
⦁	BrowserRouter
⦁	HashRouter
⦁	HistoryRouter
⦁	MemoryRouter
⦁	StaticRouter
⦁	NativeRouter

19 . Nesting Routes
==============
⦁	index 
⦁	location
⦁	shared element with children
⦁	outlet
⦁	- useOutletContext()
⦁	Nesting in separate file
⦁	useRoute

20 . Lazy Loading
=================
⦁	fallback ui
⦁	suspense
⦁	Error boundaries
⦁	componentDidCatch
⦁	Fallback UI
⦁	Nested & Propagation

21 . useReducer
===============
⦁	 dispatch
⦁	useReducer vs useState
⦁	useReducer vs redux
⦁	payload

22 . PropTypes
===============
⦁	types => name, string, any
⦁	required, optional, 
⦁	node, element type
⦁	oneof, shape
⦁	PropTypes vs Typescript

23 . useMemo vs useCallback
==========================
⦁	React.Memo vs useMemo
⦁	Object reference
⦁	Pros and cons of memoization

24 . Context API
===============
⦁	Provider
⦁	Consumer
⦁	useContext
⦁	useReducer

25 . Webpack
==============
⦁	Module Bundler
⦁	Code Splitting
⦁	Webpack Dev Server
⦁	Hot Module Replacement (HMR)
⦁	Tree Shaking

26 . Babel
===========
⦁	Transpilation
⦁	Plugins
⦁	Runtime Polyfills
⦁	Dynamic Import
⦁	useDeferedValue
⦁	useTransition

27 . Extras
=======
⦁	params (:id)
⦁	cont {<name>} = useParams()
⦁	useSearchParams
⦁	Conditional rendering
⦁	Key
⦁	Declarative vs Imperative UI
⦁	Immer
⦁	Object.entries(e)
⦁	Icons
⦁	Experimental Hooks
⦁	useEffectEvent
⦁	use
⦁	useFormStatus
⦁	useOptimistic
⦁	Object.entries(e)
⦁	Icons
⦁	Experimental Hooks
⦁	useEffectEvent
⦁	use
⦁	useFormStatus
⦁	useOptimistic
⦁	Render props
⦁	Higher order components
⦁	Custom hooks
⦁	Code splitting
⦁	Route based
⦁	Component based
⦁	React.lazy
⦁	Higher order comps
⦁	forward ref
⦁	useDebugValue
⦁	useImperativeHandle
⦁	Axios interceptor
⦁	Concurrent Requests
⦁	axios.all(), axios.spread()
⦁	cancel Token

Task 1
--------
1 . DOM concepts in Javascript
2 . Difference between actual DOM and virtual DOM 
3 . Difference between single Page and multi-page application 
4 . CSR vs SSR
5 . Concept of reusability 
6 . Learn about es6 versions syntaxes
	Arrow functions 
	Map
	Destructuring
	Filter
	Reduce
	Import/Export 
7 . Difference between JSX and HTML 
8 . Learn about components
	Class (basic- lifecycle methods)
	Functional
9 . Dynamic rendering
10 . Lifecycle methods
11 . Learn the concept of hooks
	useState
	useEffect
	useRef
	useHistory vs useNavigate
12 . Learn the concept of event handlers 
	onClick
	onChange
13 . Learn the concept of React router


