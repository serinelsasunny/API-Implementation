

//@desc Get the details of a course
//@route GET api/products
//access public
const getCourses=(req,res,next)=>{
    res.status(200).json({id:1,title:"Men's T-shirt",price:"$50",imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"})
}

//@desc Get the details of a course by ID
//@route GET api/products/id
//access public
const getCoursebyId=(req,res,next)=>{
    //console.log(req.reqStartTime)
    res.status(200).json({id:req.params.id,title:"Men's T-shirt",price:"$50",imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"})
}

//@desc Create a new course
//@route POST api/products
//access public
const createCourse = (req,res,next)=>{
    res.status(200).json({id:10,title:"Men's T-shirt",price:"$50",imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"})
}

//@desc Update the details of a course
//@route PUT api/products/id
//access public
const updateCourse = (req,res)=>{
    res.status(200).json({id:req.params.id,title:"Men's T-shirt",price:"$100",imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"})
}

//@desc Delete details of a course
//@route DELETE api/products/id
//access public
const deleteCourse = (req,res)=>{
    res.status(200).json({message:`Deleted the product with id:${req.params.id}`})
}

module.exports = {
    getCourses,
    getCoursebyId,
    createCourse,
    updateCourse,
    deleteCourse

}