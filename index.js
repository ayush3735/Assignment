const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app=express();
const url = "https://time.com";

app.get('/getTimeStories',(req,response)=>{
    var resData;
    axios.get(url).then(res=>{
        //console.log(res.data);
         resData=getData(res.data);
         response.send(resData)
    }).catch(err=>{
        console.log(err);
    })
})

app.get('/',(req,res)=>{
    res.send('jhvjfdbhjbk')
})


function getData(data){
const x = cheerio.load(data)
var objArray=[];

    x('.latest ol li h2').each(function (i, e) {
        let ref=x(this).find('a').attr('href');
        reference= url+ref;

         objArray.push({
             "title": x(this).text(),
             "link": reference
         })
    });
    console.log(objArray);
    return objArray;
}



app.listen(8888,()=>{
    console.log('listening at 8888')
})