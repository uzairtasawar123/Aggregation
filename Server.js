const express = require('express')
const mongoose = require('mongoose');
const data = require('./Data')
const University = require('./Schema');
const Student = require('./StuSchema');


const app = express()
const port = 8000;

mongoose.connect('mongodb://localhost:27017/Aggregation' , (err)=>{
    if(err){
        console.log('Some error occur' , err)
    }
    else{
        console.log('DB Connected Successfully')
        }
})


////////////   Inserting Data   ////////////
app.post('/send' , async (req , res)=>{
     const hello = await University.insertMany(data.university)
     return res.status(200).send(hello)
})
app.post('/sendstu' , async (req , res)=>{
    const hello = await Student.insertMany(data.student)
    return res.status(200).send(hello)
})


/////////////////////////          AGGREGATION     ////////////////////////////////


/////////////////////////    MATCH      ////////////////////////////
app.get('/match' , async (req , res)=>{
    //const hellomatched = await University.aggregate([{$match : {name:'UET'}}])
    const helloStudent = await Student.aggregate([{$match:{uni:'UCP'}},{$sort : {reg:-1}}])
     //res.status(200).send(hellomatched)
     res.status(200).send(helloStudent)
})

////////////////////////      PROJECT      ////////////////////////////////////
app.get('/project' , async (req , res)=>{
    const helloStudent = await Student.aggregate([{$project:{_id:0 , name:1 , reg:1}}])
     res.status(200).send(helloStudent)
})

//////////////////////      LIMIT   ////////////////////
app.get('/limit' , async (req , res)=>{
    const helloStudent = await Student.aggregate([{$limit:2} , {$project : {_id:0, name:0}}])
     res.status(200).send(helloStudent)
})

///////////////////////    GROUP     /////////////////////////
app.get('/group' , async (req , res)=>{
    //const helloStudent = await Student.aggregate([{$match:{uni:"UCP"}},{$group:{_id:'$uni', name:{$last:'$name'}, sum:{$sum:'$reg'}}}])
    //const helloStudent = await Student.aggregate([{$match:{uni:"UCP"}},{$group:{_id:'$uni', name:{$last:'$name'}, sum:{$sum:1}}}])

    //const helloStudent = await Student.aggregate([{$match:{uni:"UCP"}},{$group:{_id:'$uni', name:{$last:'$name'}, sum:{$avg:'$reg'}}}])
    //const helloStudent = await Student.aggregate([{$match:{uni:"UCP"}},{$group:{_id:'$uni', name:{$last:'$name'}, sum:{$max:'$reg'}}}])
    //const helloStudent = await Student.aggregate([{$match:{uni:"UCP"}},{$group:{_id:'$uni', name:{$last:'$name'}, sum:{$min:'$reg'}}}])
    //const helloStudent = await Student.aggregate([{$match:{uni:"UCP"}},{$group:{_id:'$uni', name:{$last:'$name'}, sum:{$push:'$reg'}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', name:{$last:'$name'}, product:{$sum:{$multiply:['$reg' ,10]}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', name:{$last:'$name'}, product:{$sum:{$multiply:['$reg' ,10]}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', name:{$last:'$name'}, product:{$sum:{$divide:['$reg' ,10]}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni',count:{$sum:1}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} ,   name:{$last:'$name'}, product:{$sum:{$pow:['$reg' ,2]}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} ,   name:{$last:'$name'}, SQRTANDTHENSUM:{$sum:{$sqrt:'$reg'}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} ,   name:{$last:'$name'}, SQRTANDTHENSUM:{$sum:{$abs:'$reg'}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} ,   name:{$last:'$name'}, Output:{$sum:{$ln:'$reg'}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} ,   name:{$last:'$name'}, Output:{$sum:{$mod:['$reg',10]}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} ,   name:{$last:'$name'}, Output:{$sum:{$subtract:['$reg' , 10]}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} ,   name:{$last:'$name'}, Output:{$sum:{$trunc:'$reg'}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} ,   name:{$last:'$name'}, Output:{$first:{$gt:['$reg' , 36]}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} ,   name:{$last:'$name'}, Output:{$first:{$gte:['$reg' , 36]}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} ,   name:{$last:'$name'}, Output:{$first:{$cmp:['$reg' , 36]}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} ,   name:{$last:'$name'}, Output:{$first:{$lt:['$reg' , 36]}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} ,   name:{$last:'$name'}, Output:{$first:{$lte:['$reg' , 36]}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} ,   name:{$last:'$name'}, Output:{$first:{$ne:['$reg' , 36]}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} ,   name:{$last:'$name'}, Output:{$first:{$eq:['$reg' , 36]}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} ,   name:{$last:'$name'}, Output:{$first:{$toUpper:'$name'}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} , name:{$last:'$name'}, Output:{$first:{$toString:'$reg'}}}}])
    //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} , name:{$last:'$name'}, Output:{$first:{$sin:'$reg'}}}}])
          /////////////   As it is       for    cos($cos),tan($tan)   ,  for Inverses $asin , $acos , $atan and many more
     //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} , name:{$last:'$name'}, Output:{$first:{$degreesToRadians:'$reg'}}}}])
            /////////////   Population Standard Deviation    //////////////////
     //const helloStudent = await Student.aggregate([{$group:{_id:'$uni', count:{$sum:1}, reg:{$first:'$reg'} , name:{$last:'$name'}, Output:{$stdDevPop:'$reg'}}}])
          /////////////   sample standard deviation   /////////////////
     
     res.status(200).send(helloStudent)

})

///////////////////     $out    /////////////////////////
app.get('/out' , async (req , res)=>{
    const Hello = await Student.aggregate([{$match:{uni:"LUMS"}} , {$out:'lums'}])
     res.status(200).send(Hello)
})

 ////////////////         $addFields    /////////////////////////
 app.get('/addfields' , async (req , res)=>{
    const Hello = await Student.aggregate([{$match:{uni:"LUMS"}} , {$addFields:{year:2022}}])
     res.status(200).send(Hello)
})


/////////////////    $count    ////////////////////////
app.get('/count' , async (req , res)=>{
    const Hello = await Student.aggregate([{$match:{uni:"UET"}} , {$count:"Hello_Total"}])
     res.status(200).send(Hello)
})

//////////////    $sortByCount   ////////////////
app.get('/sortbycount' , async (req , res)=>{
    const Hello = await Student.aggregate([{$sortByCount : '$uni'}])
     res.status(200).send(Hello)
})

/////////////   $facet    //////////////
app.get('/facet' , async (req , res)=>{
    const Hello = await Student.aggregate([{$match:{uni:"UET"}} ,{$facet:[{'Universities':{$sortByCount:"$reg"}}]}])
     res.status(200).send(Hello)
})

 ////////////////   $LookUp   //////////////////
 app.get('/lookup' , async (req , res)=>{
    const Hello = await Student.aggregate([{$lookup:{from:"universities", localField:'uni' , foreignField:'name' , as:'University_Detail'}}])
     res.status(200).send(Hello)
})

///////////////    Unary Operators   ////////////////
app.get('/operator' , async (req , res)=>{
    const Hello = await Student.aggregate([{$match:{}}])
     res.status(200).send(Hello)
})






app.listen(port , ()=> console.log(`We are listening you at http://localhost:${port}`))
