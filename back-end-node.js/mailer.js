const mailer = require('nodemailer')
// const { Hello } = require("/.hello_template")


const getEmailData = (to, name, template) => {
    let date = null;
    
    switch(template) {
        case "hello" :
            data = {
                from: "nastehhpro@gmail.com",
                to,
                subject : `Hello ${name}`,
                html: Hello()
        }
        break;

        case "Thanks" :
            data = {
                from: "nastehhpro@gmail.com",
                to,
                subject : `Hello ${name}`,
                html: Thanks()
            }
            break;
        default:
            data
    }
    return data;
}

const sendEmail = (to, name, type) => {
    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "nastehhpro@gmail.com",
            password: "Iseries123"
        }
    })

    const mail = getEmailData(to, name, type)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log("email sent successfully")
        }
    smtpTransport.close();
    })

}

module.exports = { sendEmail }