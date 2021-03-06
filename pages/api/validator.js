import EmailValidator from 'email-deep-validator'
import isBizMail from 'is-biz-mail'
const emailValidator = new EmailValidator();

export default async function Validate(req, res) {
    if (req.method === 'POST') {
        try {

            const email = req.query.email;

            const { wellFormed, validDomain, validMailbox } = await emailValidator.verify(email);

            const result = isBizMail.isFreeMailAddress(email);

            if (result) {

                if (wellFormed, validDomain, validMailbox) {

                    return res.json({ SuccessMsg: "Valid Email 📬", statusCode: res.statusCode, result: validMailbox })

                } else if (validMailbox !== false) {

                    return res.json({ SuccessMsg: "Valid Email 📬", statusCode: res.statusCode, result: validMailbox })

                } else {
                    return res.json({ ErrorMsg: "Invalid Email 🚫", result: [validMailbox, result] })
                }
            } else if(result===false && validMailbox===true){
                // console.log(result, validMailbox)
                return res.json({  SuccessMsg: "Valid Email 📬", statusCode: res.statusCode, result: validMailbox  })
            }else if(result===false && validMailbox===null){
                // console.log(result, validMailbox)
                return res.json({  SuccessMsg: "Valid Email 📬", statusCode: res.statusCode, result: validMailbox  })
            }else{
                return res.json({ ErrorMsg: "Invalid Email 🚫", result: [validMailbox, result] })
            }


        } catch (error) {

            return res.json({ ErrorMsg: error.message });
        }
    } else {
        res.json({ Msg: "Sorry You need to use a POST method!" })
    }

}
