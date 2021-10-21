export default function handler(req, res){

  res.json({
      Welcome: '*** Email Validation API 📬 ***',
      Usage: 'Send a POST request to the endpoint {/api/validate} with the email address as your query parameter',
      Response: 'Expected responses => SuccessMsg: Valid Email, ErrorMsg: Invalid Email',
      cheers: '🙏🏻 Thank You 🥂'
  })
}