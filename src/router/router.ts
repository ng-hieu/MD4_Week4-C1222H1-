import {Router} from 'express';
import BlogControler from '../controller/blogController'
import PageController from '../controller/pageController'
import UserController from "../controller/userController";
import MusicController from "../controller/musicController";
const router = Router();
// router.get('/home_af', BlogControler.showAll)
router.get('/information', UserController.pageInfor)
// router.get('/createBlog', PageController.pageAddBlog)
router.post('/createBlog',BlogControler.addNewBlog)
router.get('/home_bf', BlogControler.checkTemplate)
// router.get('/sign_in', PageController.signIn)
// router.post('/sign_in', UserController.signIn)
// router.get('/register', PageController.register)
// router.post('/register', UserController.registerUser)
router.get('/edit/:id', BlogControler.bfEditBlog)
router.put('/edit/:id', BlogControler.afEditBlog)
router.delete('/delete/:id', BlogControler.deleteBlog)
// router.get('/sign_out', PageController.signOut)
// router.get('/change/:id', UserController.bfChangeInfor)
// router.post('/change/:id', UserController.afChangeInfor)
// router.get('/search', BlogControler.searchBlog)
// router.get('/music', MusicController.showMusic)
// router.get('/createMusic', PageController.pageAddMusic)
// router.post('/createMusic', MusicController.addNewMusic)
// router.get('/searchSong', MusicController.searchMusic)
export default router