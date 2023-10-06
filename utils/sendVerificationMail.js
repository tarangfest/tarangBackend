require("dotenv").config();
var { SendMailClient } = require("zeptomail");
module.exports = async (code, email, name) => {
  const url = "api.zeptomail.in/";
  const token = `Zoho-enczapikey ${process.env.ZOHO_WELCOME_MAIL_AGENT}`;

  const link = `https://tarangfest.com/verification-success?code=` + code;
  const html = `<table cellspacing="0" cellpadding="0" style="background-color: #F4F6F7; border: 1px solid #eee; width: 100%;">
    <tbody>
        <tr>
            <td>
                <div
                    style="background-color: #fff; border: 1px solid #DEE6E9; border-radius: 10px; box-sizing: border-box; font-family: Lato, Helvetica, 'Helvetica Neue', Arial, 'sans-serif'; margin: auto; max-width: 600px; overflow: hidden; width: 600px;">
                    <div
                        style="background-color: #25586B; padding: 40px; text-align: center; background-image: url(../images/sampleTemplates/otp.svg); background-repeat: no-repeat; background-position: calc( 100% - 20px ) 20px; background-size: 50px;">
                        <h2 style="color: #fff; font-size: 24px; font-weight: normal; margin: 0;">Tarang 2k23 - Vibe
                            lmfao<br></h2>
                    </div>
                    <div
                        style="padding: 40px 50px; background-image: url(../images/sampleTemplates/shadow.svg); background-repeat: no-repeat; background-position: top; background-size: contain;">
                        <p style="margin: 0px 0px 25px;">
                            <span class="size" style="font-size: 14px; margin: 0px 0px 25px;">Hi ${name}</span><br></p>
                        <p style="margin: 0px 0px 35px; line-height: 22px;">
                            <span class="size" style="font-size: 16px; margin: 0px 0px 35px; line-height: 22px;">Verify you email address. Click on the link below to verify your email address<b>:</b></span><br>
                        </p>
                        <div style="text-align: center;">
                            <div
                                style="background-color: #25586B0D; border-radius: 6px; color: #25586B; display: inline-block; font-size: 30px; padding: 20px 30px;">
                                ${link}</div><br>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: center; margin-top: 15px;">
                            <div
                                style="background-image: url(../images/sampleTemplates/copy.svg); background-repeat: no-repeat; background-size: contain; height: 14px; width: 14px;">
                                <br></div>
                        </div>
                        <p style="margin: 35px 0px; line-height: 22px;">
                            <span class="size" style="font-size: 14px; margin: 35px 0px; line-height: 22px;">If you didn't request this, ignore the email.</span><br>
                        </p>
                        <p style="margin: 0px 0px 35px; line-height: 22px;">
                            <span class="size" style="font-size: 14px; margin: 0px 0px 35px; line-height: 22px;">If you'd like to know more about Tarang 2k23 or want to get in touch with us, get in touch with our customer support team.</span><br>
                        </p>
                        <p style="margin: 0px; line-height: 22px;">
                            <span class="size" style="font-size: 14px; margin: 0px; line-height: 22px;">Thank you,</span><br>
                        </p>
                        <p style="margin: 0px; line-height: 22px;">Tarang Web Team<br></p>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
<div>k<br></div>`;
  let client = new SendMailClient({ url, token });

  client
    .sendMail({
      from: {
        address: "noreply@tarangfest.com",
        name: "Tarang 2k23",
      },
      to: [
        {
          email_address: {
            address: email,
            name: name,
          },
        },
      ],
      subject: "Email Verification Mail for Tarang 2k23",
      htmlbody: html,
    })
    .then((resp) => null)
    .catch((error) => console.log(JSON.stringify(error)));
};
