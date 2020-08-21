var nodemailer = require('nodemailer');

let Email = async function(req, res){
    

    let transporter = nodemailer.createTransport({
        host: "mail.terralunalodge.com",
        port: 465,
        auth: {
          user: 'prueba@terralunalodge.com', // generated ethereal user
          pass: 'raposene123', // generated ethereal password
        },
      });
    
      try{

        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <prueba@terralunalodge.com>', // sender address
            to: "joaco.alonso.garcia@gmail.com, pepejose@outlook.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          });
          console.log(info)
          res.send(info)

      }catch (error){
        console.log(error)
        res.send(error)
      }
  
}



exports.Mailchimp = Email;