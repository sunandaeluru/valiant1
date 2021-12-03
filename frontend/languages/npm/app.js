var nodemailer=require('nodemailer')


var tronsportter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'sunanda.eluru1997@gmail.com',
        pass:'9347476520'
    }
})


var mailoptions={
    from:'sunanda.eluru1997@gmail.com',
    to:'sunanda.eluru97@gmail.com',
    subject:'testing our email program',
    text:'test'
}

tronsportter.sendMail(mailoptions,(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log('mail send')
    }
})