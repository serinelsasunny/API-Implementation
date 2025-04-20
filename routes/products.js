const express=require("express")
const router = express.Router();
const{getCourses,getCoursebyId,createCourse,updateCourse,deleteCourse}=require('../controllers/products')



router.route('/').get(getCourses).post(createCourse)
//use all the routes together using one router
router.route('/:id').get(getCoursebyId).put(updateCourse).delete(deleteCourse)



module.exports = router