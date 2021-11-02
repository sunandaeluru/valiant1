var nodemailer=require('nodemailer')

var transportter= nodemailer.createTransport({
    service:'gmail',
    auth:{

        username:'sunanda.e97@gmail.com',
        pass:'s9849677260'
    }
})


var mailoptions={
    from:'sunanda.e97@gmail.com',
    to:'sunanda.eluru97@gmail.com',
    subject:'test',
    text:'email confirmation'
}

transportter.sendMail(mailoptions,(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log('mail sent')
    }
})