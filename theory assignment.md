
## Theory Assignment: `Chapter - 02 Igniting React App`

#### What is NPM ?

`NPM` is one of the most popular manager for sharing utilities/packages. Another popular package manager is `yarn`. React is app is powered by alot of helper packages for 
minifying,optimising which can be monitore through.

### 2. What is `Parcel/Webpack`? Why do we need it? 

Parcel and Webpack are the most popular
web app bundlers, they are used to minmize the developement process by providing various functionalities like optimising, minifying codes etc in production. 

### 3. What is `.parcel-cache` 
In this file parcel stores the information about the project, so when 
its tries to rebuild the project it doesnt have to reparse the data and so takes less time in building the whole  proejct again.

### 4. What is `npx` ? 
npx is the npm package runner which is use to run the packages of npm inside our project.

`npx parcel index.html` >> npx searches for parcel package in your and if not found, downloads it and then runs the command. with index.html as the entry point, you can remove index.html put it in the source of package.json as well.

`npx create-react-app my-appname` ->
npx searches the create-react-app in our environment, if not found will download it and then create my-app in the current project directory.

### 5. What is difference between `dependencies` vs `devDependencies`






| dependencies                                                    | devDependencies           | 
| -------------                                                   |:-------------:             | 


| packages that are required in production environment | packages that are required in developement environment |

| commands :`npm install <package-name>` | commands : `npm insall -D <package-name>`|


### 6. What is Tree Shaking? 

Tree shaking in js is the process of removing dead code, by bundlers like parcel/Webpack while bundling mulitple files into single file thus improving the web performance.

### 7. What is Hot Module Replacement? (HRM)

The process of adding, removing and updating the Modules while application is running without reloading is HRM. 

### 8. List down your favourite superpowers of Parcel and describe any 3 of them in your own words.

1. Image optimisation 
2. compression 
3. cleaning our code
4. supre fast build
5. dev and prod build 
6. caching while developement 
7. works with older versions of browsers 
8. Https on dev as well npx parcel index.html (--https)   
9. consistent hasing algorithm
10. zero configuration
11. tree shaking 
12. API proxy 


My top favourites : 
1.`Tree shaking` (described about it in q.no 6) 
2. `caching` parcel caches everything it builds, if you restart the dev server.
3. `Image optimisation` parcel automatically optimise images of all formats no extra plugins requires.


### 10. What is the difference between `package.json` and `package-lock.json`

| package.json    | package-lock.json    | 
| -------------   |:-------------:       |

| this file is created when npm init is fired | this file is created automatically when npm modifies either node modules tree or package.json |

| It contains metadata about the project like name, versions, authour, scipts and dependencies required by the project | It also contains dependencies required by the project with exact version of project |


### 11. Why should I not modify `package-lock.json`? 
 
 As its name suggests <lock>  file it contains dependencies files and structres so its better to not poke this file.

### 12. What is `node_modules` ? Is it a good idea to push that on git? 

`node_modules` 

In simple words, `node_modules` holds the source code of the packages that are installed through npm. It is a very bad practice to push `node_modules` to git (source control) since it is huge in size and blow up the project capacity and moreover all the packages in `node_modules` can be re-generated using `package.json` file.  


### 13. What is the `dist` folder? 

`dist` folder is created once the application is build using `parcel` web application bundler. IT contains the output of the bundler i.e all js files, css files and html files bundled into a single js file, css file and html file that is compressed and minified. 

### 14. What is `browserlists`. Read about dif bundlers: vite, webpack, parcel 

The  `browserslist` field in package.json can be used to specify which browsers/node.js versions the application supports. The value of this object can be an array of statistics ( % coverage), last versions, Node.js versions, Browser versions or even unreleased versions.
 
 ```
"browsersList" : ["last 2 versions", "> 1%", "not dead"]

```

 ### 15. Read about: ^ - caret and ~ - tilda 


 | ^ version | ~ version | 
| --- | :----: | 
| In package.json, if a dependency's version [majorversion.minorversion.patchversion] is prefixed with `^` , then it will be updated to all future `minor` versions and not any major version | In package.json, if a dependency's version [majorversion.minorversion.patchversion] is prefixed with `~` , then it will be updated to all future `patch` versions and not minor/major versions | 
| Eg: "react": "^18.2.0" will use releases from 18.2.0 to < 19.0.0 | Eg: "~18.2.0" will use releases from "18.2.0" < 18.3.0 |

Patch version is used for any bug fixes. Minor version is used for adding new functionality. Major version may contain major functionality changes/ some existing features may be deprecated.
So if ~ is used , user will be updated to all bug fixed patch versions. If ^ is used, user will be updated to all new functionality/ features included minor version.


### 16. Read about Script types in html (MDN Docs)
`type` attribute of the <script> tag indicates the type of script.Until HTML 4,  type is a required attribute. The value of type can be any of the following : 



```
<script type="" src="app.js"></script>
```
In HTML5, type attribute is not mandatory. If type attribute is not present(default), or an empty string (type="") or javascript MIME type (text/javascript or application/ecmascript), it is treated as classic "javascript" file.


```
<script type="module" src="app.js"></script>
```
If the type attribute is set `module`, then the code in that js file is treated as module.
 

 ```
<script type="{$anyothervalue}" src="app.js"></script>
```
If the type attribute contains anyother value, then the code is treated as data block and will not be processed by the browser. A valid MIME type other than Javascript MIME type (Eg: image/png or text/css) must be mentioned. All the other attributes for this type will be ignored even the `src` attribute.






