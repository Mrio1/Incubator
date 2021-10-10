/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_storageController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/storageController */ \"./src/scripts/storageController.js\");\n/* harmony import */ var _scripts_themeToggler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/themeToggler */ \"./src/scripts/themeToggler.js\");\n/* harmony import */ var _scripts_sortDirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/sortDirect */ \"./src/scripts/sortDirect.js\");\n/* harmony import */ var _scripts_dateController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/dateController */ \"./src/scripts/dateController.js\");\n\r\n\r\n\r\n\r\n\r\n/* const modal = document.querySelector('.modal-content')\r\nconst modalCloseButton = document.querySelector('.close');\r\n\r\nconst inputTitle = document.getElementById('inputTitle');\r\nconst inputText = document.getElementById('inputText');\r\n//const closeButton = document.getElementById('close');\r\n\r\nmodal.addEventListener('click', () => {\r\n    modalCloseButton.click();\r\n}) */\r\n\r\n(0,_scripts_themeToggler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nclass ToDo {\r\n    constructor(){\r\n        this.storageController = new _scripts_storageController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        this.init();\r\n    }\r\n\r\n    init() {\r\n        this.newTaskId = 0;\r\n        this.completeTaskId = 0;\r\n        this.currentTasks = document.getElementById('currentTasks');\r\n        this.completedTasks = document.getElementById('completedTasks');\r\n        this.modalForm = document.forms.modalForm;\r\n        this.addTaskButton = document.querySelector('[data-target=\"#exampleModal\"]');\r\n        this.modalCloseButton = document.getElementById('close');\r\n        this.inputTitle = document.getElementById('inputTitle');\r\n        this.inputTask = document.getElementById('inputText');\r\n        this.inputPriority = document.getElementById('inputPriority');\r\n        this.modalForm.addEventListener('submit', this.modalSubmitHandler.bind(this));\r\n        this.taskContainer = document.getElementById('taskContainer');\r\n        this.sortButtons = document.getElementById('sortButtons');\r\n        this.sortDirectionStorage = new _scripts_sortDirect__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        this.sortDirection = this.sortDirectionStorage.getDirection();\r\n        this.isUpdate = false;\r\n        this.sortButtons.addEventListener('click', this.sortDirectionClickHandler.bind(this));\r\n        this.taskContainer.addEventListener('click', this.taskContainerClickHandler.bind(this));\r\n        this.dateController = new _scripts_dateController__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n        this.currentCountNode = document.getElementById('currentCount');\r\n        this.completeCountNode = document.getElementById('completeCount');\r\n        this.refreshTaskFields();\r\n    }\r\n\r\n    refreshTaskFields() {\r\n        this.newTaskId = 0;\r\n        this.completeTaskId = 0;\r\n        this.currentTasks.innerHTML = '';\r\n        this.completedTasks.innerHTML = '';\r\n\r\n        if (this.storageController.getCurentItemsList().length > 0) {\r\n            this.storageController.getCurentItemsList().forEach((item, index) => {\r\n                this.createTaskNode(item.title, item.task, item.priority, item.date)\r\n            });\r\n        }\r\n        if (this.storageController.getCompleteItemsList().length > 0) {\r\n            this.storageController.getCompleteItemsList().forEach((item, index) => {\r\n                this.createTaskNode(item.title, item.task, item.priority, item.date, false)\r\n            })\r\n        }\r\n    }\r\n\r\n    sortDirectionClickHandler({target}) {\r\n        let button;\r\n        if (target.tagName == 'I') {\r\n            button = target.closest('[data-sort]');\r\n        } else {\r\n            button = target;\r\n        }\r\n        const direction = (button.dataset.sort == 'true') || false;\r\n        if (this.sortDirection != direction) {\r\n            this.sortDirection = direction;\r\n            this.sortDirectionStorage.changeDirection(direction);\r\n            this.refreshTaskFields();\r\n        }\r\n        \r\n    }\r\n\r\n    getModalData() {\r\n        return [this.inputTitle.value, this.inputTask.value, this.getFieldsetValue()]\r\n    }\r\n\r\n    putModalData(id) {\r\n        const {title, task, priority} = this.storageController.getCurentItemsList()[id];\r\n        this.inputTitle.value = title;\r\n        this.inputTask.value = task;\r\n        document.getElementById(priority).checked = true;\r\n    }\r\n\r\n    getFieldsetValue(){\r\n        return document.querySelector('.form-check-input:checked').value;\r\n    }\r\n\r\n    modalSubmitHandler(event) {\r\n        event.preventDefault();\r\n        const [title, task, priority] = this.getModalData();\r\n        this.closeModal();\r\n        if (!this.isUpdate) {\r\n            const date = this.dateController.getCurrentDate();\r\n            this.storageController.addNewItem(title, task, priority, date)\r\n        }\r\n        this.createTaskNode(title, task, priority);\r\n    }\r\n\r\n    completeTask(id) {\r\n        const newCompleteTask = document.querySelector(`[data-id=\"${id}\"]`);\r\n        const {title, task, priority, date} = this.storageController.changeItemStatus(id);\r\n        this.createTaskNode(title, task, priority, date, false);\r\n        newCompleteTask.remove();   \r\n    }\r\n\r\n    deleteTask(task, taskId) {\r\n        if(task.closest('ul').id == 'currentTasks') {\r\n            this.storageController.removeCurrentItem(taskId);\r\n            task.remove();\r\n        } else {\r\n            this.storageController.removeCompleteItem(taskId);\r\n            task.remove();\r\n        }\r\n        this.updateCounters();\r\n    }\r\n\r\n    editTask(task, id) {\r\n        this.isUpdate = true;\r\n        this.updateTask = task;\r\n        this.updateTaskId = id;\r\n        this.addTaskButton.click();\r\n        this.putModalData(id);\r\n    }\r\n\r\n    createTaskNode(title, task, priority,  date = this.dateController.getCurrentDate(), isNew = true) {\r\n        const taskNode = document.createElement('li');\r\n        taskNode.className = `list-group-item d-flex w-100 mb-2 bg-${priority}`;\r\n        if (this.isUpdate) {\r\n            taskNode.dataset.id = this.updateTaskId;\r\n        } else {\r\n            taskNode.dataset.id = isNew ? this.newTaskId : this.completeTaskId;\r\n        }\r\n        \r\n        taskNode.innerHTML = `\r\n            <div class=\"w-100 mr-2\">\r\n                <div class=\"d-flex w-100 justify-content-between\">\r\n                    <h5 class=\"mb-1\">${title}</h5>\r\n                    <div>\r\n                        <small class=\"mr-2\">${priority} priority</small>\r\n                        <small>${date}</small>\r\n                    </div>\r\n                </div>\r\n                <p class=\"mb-1 w-100\">${task}</p>\r\n            </div>\r\n            ` + `\r\n            <div class=\"dropdown m-2 dropleft\">\r\n            <button class=\"btn btn-secondary h-100\" type=\"button\" id=\"dropdownMenuItem1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"fas fa-ellipsis-v\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu p-2 flex-column\" aria-labelledby=\"dropdownMenuItem1\">\r\n                ${ (isNew )? '<button type=\"button\" class=\"btn btn-success w-100\" data-mode=\"complete\">Complete</button><button type=\"button\" class=\"btn btn-info w-100 my-2\" data-mode=\"edit\">Edit</button>' : ''}\r\n                <button type=\"button\" class=\"btn btn-danger w-100\" data-mode ='delete'>Delete</button>\r\n            </div>\r\n        </div>\r\n            `\r\n        if(this.isUpdate) {\r\n            this.storageController.removeCurrentItem(this.updateTaskId, {title, task, priority})\r\n            this.updateTask.replaceWith(taskNode);\r\n            this.isUpdate = false;\r\n            this.updateCounters();\r\n            return\r\n        }\r\n        if (isNew) {\r\n            (this.sortDirection) ? this.currentTasks.append(taskNode) : this.currentTasks.prepend(taskNode);\r\n            this.newTaskId++;\r\n            \r\n        } else {\r\n            (this.sortDirection) ? this.completedTasks.append(taskNode) : this.completedTasks.prepend(taskNode);\r\n            this.completeTaskId++;\r\n        }\r\n        this.updateCounters();\r\n    }\r\n\r\n    \r\n\r\n    closeModal() {\r\n        this.modalForm.reset();\r\n        this.modalCloseButton.click();\r\n    }\r\n\r\n    taskContainerClickHandler(e) {\r\n        if (e.target.dataset.mode) {\r\n            const mode = e.target.dataset.mode;\r\n            const task =  e.target.closest('li');\r\n            const taskId =  task.dataset.id;\r\n            if (mode == 'complete') {\r\n                this.completeTask(taskId);\r\n            } else if (mode == 'edit') {\r\n                this.editTask(task, taskId)\r\n            } else if (mode == 'delete') {\r\n                this.deleteTask(task, taskId)\r\n            }\r\n        }\r\n    }\r\n\r\n    updateCounters() {\r\n        this.currentCountNode.textContent = this.storageController.getCurrentCount();\r\n        this.completeCountNode.textContent = this.storageController.getCompleteCount();\r\n    }\r\n\r\n}\r\n\r\nnew ToDo();\r\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/scripts/dateController.js":
/*!***************************************!*\
  !*** ./src/scripts/dateController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass DateController {\r\n    constructor() {\r\n    }\r\n\r\n    getCurrentDate() {\r\n        const date = new Date();\r\n        return `\r\n            ${date.toDateString()} ${date.getHours()}-${date.getMinutes()}\r\n        `\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateController);\r\n\n\n//# sourceURL=webpack://todo/./src/scripts/dateController.js?");

/***/ }),

/***/ "./src/scripts/sortDirect.js":
/*!***********************************!*\
  !*** ./src/scripts/sortDirect.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\r\n    constructor(){\r\n        this.init();\r\n    }\r\n\r\n    init() {\r\n        let direction = JSON.parse(localStorage.getItem('direction'));\r\n        if (direction === null) {\r\n            localStorage.setItem('direction', true);\r\n            this.direction = true;\r\n        } else {\r\n            this.direction = direction;\r\n        }\r\n        \r\n    }\r\n\r\n    getDirection() {\r\n        return this.direction;\r\n    }\r\n\r\n    changeDirection(direction) {\r\n        if (this.direction !== direction) {\r\n            this.direction = !this.direction;\r\n            localStorage.setItem('direction', direction);\r\n        }\r\n        return direction;\r\n    }\r\n});\n\n//# sourceURL=webpack://todo/./src/scripts/sortDirect.js?");

/***/ }),

/***/ "./src/scripts/storageController.js":
/*!******************************************!*\
  !*** ./src/scripts/storageController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass StorageController {\r\n    constructor(name) {\r\n        this.init();\r\n        this.data;\r\n    }\r\n\r\n    init() {\r\n        if (!localStorage.getItem('toDo')){\r\n            localStorage.setItem('toDo', JSON.stringify(\r\n                {\r\n                    'currentTasks': [],\r\n                    'completeTasks': [],\r\n                }\r\n            ));\r\n        }\r\n        this.data = JSON.parse(localStorage.getItem('toDo'));\r\n        this.removeEmptyItems();\r\n    }\r\n\r\n    removeEmptyItems() {\r\n        this.data['currentTasks'] = this.data['currentTasks'].filter((item) => {return item != null});\r\n        this.data['completeTasks'] = this.data['completeTasks'].filter((item) => {return item != null});    \r\n    }\r\n\r\n    updateStorage() {\r\n        localStorage.setItem('toDo', JSON.stringify(this.data));\r\n        this.data = JSON.parse(localStorage.getItem('toDo'));\r\n    }\r\n    \r\n    getItemsList() {\r\n        return this.data;\r\n    }\r\n\r\n    getCurentItemsList() {\r\n        return this.data['currentTasks'];\r\n    }\r\n\r\n    getCompleteItemsList() {\r\n        return this.data['completeTasks'];\r\n    }\r\n\r\n    addNewItem(title, task, priority, date) {\r\n        this.data.currentTasks.push(\r\n            {\r\n                'title': title,\r\n                'task': task,\r\n                /* 'date': date, */\r\n                'priority': priority,\r\n                'date': date\r\n            }\r\n        )\r\n        localStorage.setItem('toDo', JSON.stringify(this.data));\r\n    }\r\n\r\n    changeItemStatus(id) {\r\n        let currentTaskList = this.getCurentItemsList();\r\n        const task = currentTaskList[id];\r\n        this.getCompleteItemsList().push(task);\r\n        this.data.currentTasks.splice(id, 1, null);\r\n        this.updateStorage();\r\n        return task;\r\n    }\r\n\r\n    removeCurrentItem(id, updateData) {\r\n        if(updateData) {\r\n            this.data.currentTasks[id] = updateData;\r\n        } else {\r\n            this.data.currentTasks.splice(id, 1, null);\r\n        }\r\n        this.updateStorage();\r\n    }\r\n\r\n    removeCompleteItem(id){\r\n        this.data.completeTasks.splice(id, 1, null);\r\n        this.updateStorage();\r\n    }\r\n\r\n    getCurrentCount() {\r\n        return this.getCurentItemsList().filter(item => item != null).length;\r\n    }\r\n\r\n    getCompleteCount() {\r\n        return this.getCompleteItemsList().filter(item => item != null).length;\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageController);\r\n\n\n//# sourceURL=webpack://todo/./src/scripts/storageController.js?");

/***/ }),

/***/ "./src/scripts/themeToggler.js":
/*!*************************************!*\
  !*** ./src/scripts/themeToggler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    const toggler = document.getElementById('togglerCheckbox');\r\n    const body = document.body;\r\n    let theme = getLocalTheme();\r\n    if (theme == 'dark') {\r\n        toggler.checked = true;\r\n    }\r\n    body.className = theme;\r\n    toggler.addEventListener('change', ()=> {\r\n        if (toggler.checked) {\r\n            theme = 'dark'\r\n        } else {\r\n            theme = 'light'\r\n        }\r\n        body.className = theme;\r\n        changeLocalTheme(theme)\r\n    })\r\n}\r\n\r\nfunction getLocalTheme() {\r\n    let theme = localStorage.getItem('colorTheme');\r\n    if (!theme) {\r\n        localStorage.setItem('colorTheme', 'light');\r\n        theme = 'light';\r\n    }\r\n    return theme;\r\n}\r\n\r\nfunction changeLocalTheme(theme) {\r\n    localStorage.setItem('colorTheme', theme);\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/scripts/themeToggler.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;