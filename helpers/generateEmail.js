// =================
// Helper - Nodemailer Email Templates
// =================
const generateEmail = {};

const emailSignature = `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title></title>
</head>

<body style="word-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space; line-height:1.6;">
  <div>
    <div class="target" style="display:flex; align-items: center; margin-top:10px;">
      <a href="https://www.yourrestaurant.online/">
        <img style="width:50px; height:50px; margin-right: 10px;" src="https://res.cloudinary.com/spencermarx/image/upload/v1560197143/Personal/Logo_-_Black_White_Ver_2_2x.png" alt="Logo"/>
      </a>
      <a href="https://www.yourrestaurant.online/" style="text-decoration:none!important; color: black;">
        <div style="font-weight:normal; text-decoration: none; color: black;">Best Regards,</div>
        <div style="font-weight:normal; text-decoration: none; color: black;">Spencer Marx</div>
        <div style="font-weight:bold; text-decoration: none;">Designer | Your Restaurant Online</div>
      </a>
    </div>
  </div>
</body>
</html>
`;

generateEmail.helloHTML = function(recipientFirstName) {
  const emailHTML = `
  <body>
  <p>
  Hi ${recipientFirstName}!
  <br>
  <br>Thanks for reaching out! I'm Spencer, the founder of Your Restaurant Online. I received your message and will be in touch shortly to finish arranging your free intro call! I look forward to speaking with you soon!
  <br>
  <br>${emailSignature}
  </p>
  </body>`;
  return emailHTML;
};

generateEmail.client = function(
  receipientEmailAddress,
  recipientFirstName,
  template
) {
  if (template === 'hello') {
    const helloTemplate = {
      from: 'spencer@yourrestaurant.online', // sender address
      to: receipientEmailAddress, // list of receivers
      bcc: 'spencer@yourrestaurant.online', // BCC Spencer
      subject: 'Intro Call - Your Restaurant Online', // Subject line
      html: this.helloHTML(recipientFirstName), // plain text body
    };
    return helloTemplate;
  }
};

module.exports = generateEmail;
