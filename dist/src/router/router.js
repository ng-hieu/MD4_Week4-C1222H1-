"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogController_1 = __importDefault(require("../controller/blogController"));
const userController_1 = __importDefault(require("../controller/userController"));
const router = (0, express_1.Router)();
router.get('/information', userController_1.default.pageInfor);
router.post('/createBlog', blogController_1.default.addNewBlog);
router.get('/home_bf', blogController_1.default.checkTemplate);
router.get('/edit/:id', blogController_1.default.bfEditBlog);
router.put('/edit/:id', blogController_1.default.afEditBlog);
router.delete('/delete/:id', blogController_1.default.deleteBlog);
exports.default = router;
//# sourceMappingURL=router.js.map