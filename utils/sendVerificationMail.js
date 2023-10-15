require("dotenv").config();
var { SendMailClient } = require("zeptomail");
module.exports = async (code, email, name) => {
  const url = "api.zeptomail.in/";
  const token = `Zoho-enczapikey ${process.env.ZOHO_WELCOME_MAIL_AGENT}`;

  const link = `https://tarangfest.com/verification-success?code=` + code;
  const html = `
  <!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
<meta charset="utf-8" />
<meta content="width=device-width" name="viewport" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta name="x-apple-disable-message-reformatting" />
<meta content="telephone=no,address=no,email=no,date=no,url=no" name="format-detection" />
<title>verify email address</title>
<link href="https://fonts.googleapis.com/css?family=Roboto:600" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Roboto:400" rel="stylesheet" type="text/css">
<!--[if mso]>
            <style>
                * {
                    font-family: sans-serif !important;
                }
            </style>
        <![endif]-->
<!--[if !mso]><!-->
<!-- <![endif]-->
<style>
html {
    margin: 0 !important;
    padding: 0 !important;
}

* {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
td {
    vertical-align: top;
    mso-table-lspace: 0pt !important;
    mso-table-rspace: 0pt !important;
}
a {
    text-decoration: none;
}
img {
    -ms-interpolation-mode:bicubic;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
    u ~ div .email-container {
        min-width: 320px !important;
    }
}
@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
    u ~ div .email-container {
        min-width: 375px !important;
    }
}
@media only screen and (min-device-width: 414px) {
    u ~ div .email-container {
        min-width: 414px !important;
    }
}
</style>
<!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
<style>
@media only screen and (max-device-width: 599px), only screen and (max-width: 599px) {

    .eh {
        height:auto !important;
    }
    .desktop {
        display: none !important;
        height: 0 !important;
        margin: 0 !important;
        max-height: 0 !important;
        overflow: hidden !important;
        padding: 0 !important;
        visibility: hidden !important;
        width: 0 !important;
    }
    .mobile {
        display: block !important;
        width: auto !important;
        height: auto !important;
        float: none !important;
    }
    .email-container {
        width: 100% !important;
        margin: auto !important;
    }
    .stack-column,
    .stack-column-center {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        direction: ltr !important;
    }
    .wid-auto {
        width:auto !important;
    }

    .table-w-full-mobile {
        width: 100%;
    }

    
    

    .mobile-center {
        text-align: center;
    }

    .mobile-center > table {
        display: inline-block;
        vertical-align: inherit;
    }

    .mobile-left {
        text-align: left;
    }

    .mobile-left > table {
        display: inline-block;
        vertical-align: inherit;
    }

    .mobile-right {
        text-align: right;
    }

    .mobile-right > table {
        display: inline-block;
        vertical-align: inherit;
    }

}

</style>
</head>

<body width="100%" style="background-color:#1e1e1e;margin:0;padding:0!important;mso-line-height-rule:exactly;">
<div style="background-color:#1e1e1e">
<!--[if gte mso 9]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" color="#1e1e1e"/>
                </v:background>
                <![endif]-->
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td valign="top" align="center">
<table bgcolor="#ffffff" style="margin:0 auto;" align="center" id="brick_container" cellspacing="0" cellpadding="0" border="0" width="600" class="email-container">
<tr>
<td width="600">
<table cellspacing="0" cellpadding="0" border="0">
<tr>
<td width="600" style="background-color:#ffffff;  " bgcolor="#ffffff">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td width="100%" align="center">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td width="100%">
<table width="100%" cellspacing="0" cellpadding="0" border="0">
<tr>
<td width="100%" align="center" style="background-color:#f3f2f5;   padding-left:24px; padding-right:24px;" bgcolor="#f3f2f5">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td height="12" style="height:12px; min-height:12px; line-height:12px;"></td>
</tr>
<tr>
<td align="center">
</td>
</tr>
<tr>
<td height="12" style="height:12px; min-height:12px; line-height:12px;"></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td width="100%">
<table width="100%" cellspacing="0" cellpadding="0" border="0">
<tr>
<td width="100%" align="center" style="background-color:#ffffff;   padding-left:24px; padding-right:24px;" bgcolor="#ffffff">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
</tr>
<tr>
<td align="center">
<table cellspacing="0" cellpadding="0" border="0">
<tr>
<td width="202" align="center"><img src="https://plugin.markaimg.com/public/546e8548/PAC0EtqhXSFWbp39u9aMyjSJDf6AXf.png" width="202" border="0" style="
         max-width:202px; width: 100%; height: auto; display: block;"></td>
</tr>
</table>
</td>
</tr>
<tr>
<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td width="100%">
<table width="100%" cellspacing="0" cellpadding="0" border="0">
<tr>
<td width="100%" align="center" style="background-color:#ffffff;   padding-left:24px; padding-right:24px;" bgcolor="#ffffff">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
</tr>
<tr>
<td width="100%">
<table width="100%" cellspacing="0" cellpadding="0" border="0">
<tr>
<td width="100%" align="center" style="background-color:#ffffff;  " bgcolor="#ffffff">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td align="center">
<table cellspacing="0" cellpadding="0" border="0">
<tr>
<td align="center">
<div style="line-height:32px;text-align:center;"><span style="color:#363a57;font-weight:600;font-family:Roboto,Arial,sans-serif;font-size:24px;letter-spacing:-0.02em;line-height:32px;text-align:center;">Verify your Email Address for Tarang</span></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td height="16" style="height:16px; min-height:16px; line-height:16px;"></td>
</tr>
<tr>
<td align="center">
<div style="line-height:24px;text-align:left;"><span style="color:#000000;font-family:Roboto,Arial,sans-serif;font-size:19px;line-height:24px;text-align:left;">Hello ${name},<br>Thank you for registering with Tarang! To complete your registration and start exploring our exciting events, please click the link below to verify your email address:</span></div>
</td>
</tr>
<tr>
<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td width="100%">
<table width="100%" cellspacing="0" cellpadding="0" border="0">
<tr>
<td width="100%" align="center" style="background-color:#ffffff;   padding-left:24px; padding-right:24px;" bgcolor="#ffffff">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
</tr>
<tr>
<td align="center">
<div style="line-height:24px;text-align:left;"><a href="${link}"><span style="color:#2e27ef;font-family:Roboto,Arial,sans-serif;font-size:19px;text-decoration:underline;line-height:24px;text-align:left;">${link}</span></a></div>
</td>
</tr>
<tr>
<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
</tr>
<tr>
<td align="center">
<div style="line-height:24px;text-align:left;"><span style="color:#000000;font-family:Roboto,Arial,sans-serif;font-size:19px;line-height:24px;text-align:left;">If you didn't request this email, please ignore it.<br>Warm regards, <br>The Tarang Team</span></div>
</td>
</tr>
<tr>
<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
</tr>
<tr>
<td width="100%" align="center" style="vertical-align: middle; height:2px;   padding-left:30px; padding-right:30px;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align: middle;" width="492" align="center">
<table cellspacing="0" cellpadding="0" border="0">
<tr>
<td width="492">
<table cellpadding="0" cellspacing="0" bgcolor="#000000" height="2" width="100%" style="line-height:2px;height:2px!important;background-color:#000000;  border-collapse:separate !important;margin:0 auto;text-align:center;">
<tr>
<td> </td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td width="100%">
<table width="100%" cellspacing="0" cellpadding="0" border="0">
<tr>
<td width="100%" align="center" style="background-color:#ffffff;   padding-left:24px; padding-right:24px;" bgcolor="#ffffff">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
</tr>
<tr>
<td width="100%" align="center">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td align="center">
<div style="line-height:20px;text-align:center;"><span style="color:#979dad;font-family:Arial,Arial,sans-serif;font-size:15px;line-height:20px;text-align:center;">© Tarang IIITDMJ. All rights reserved. </span></div>
</td>
</tr>
<tr>
<td height="8" style="height:8px; min-height:8px; line-height:8px;"></td>
</tr>
<tr>
<td align="center">
<div style="line-height:20px;text-align:center;"><span style="color:#979dad;font-family:Arial,Arial,sans-serif;font-size:15px;line-height:20px;text-align:center;">If you have any questions please contact us tarang@iiitdmj.ac.in</span></div>
</td>
</tr>
<tr>
<td height="8" style="height:8px; min-height:8px; line-height:8px;"></td>
</tr>
<tr>
<td align="center">
<div style="line-height:20px;text-align:center;"><span style="color:#979dad;font-family:Arial,Arial,sans-serif;font-size:15px;line-height:20px;text-align:center;">Unsubscribe</span></div>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
</tr>
<tr>
<td align="center">
<table cellspacing="0" cellpadding="0" border="0">
<tr>
<td>
<table cellspacing="0" cellpadding="0" border="0">
<tr>
<td style="vertical-align: middle; background-color:#ffffff;  " bgcolor="#ffffff">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align: middle;" width="24"><a href="https://tarangfest.com"><img src="https://plugin.markaimg.com/public/546e8548/JK0FFgGvyywTKDFkmQQbXRPcoCOFaN.png" width="24" border="0" style="min-width:24px; width:24px;
         min-width:24px; width:24px; height: auto; display: block;"></a></td>
<td style="width:16px; min-width:16px;" width="16"></td>
<td style="vertical-align: middle;" width="32"><a href="https://www.instagram.com/tarang.iiitdmj/"><img src="https://plugin.markaimg.com/public/546e8548/Bx4uuvTgrEXSsNnN6Ad8QQp41DtfiP.png" width="32" border="0" style="min-width:32px; width:32px;
         min-width:32px; width:32px; height: auto; display: block;"></a></td>
<td style="width:16px; min-width:16px;" width="16"></td>

</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td height="24" style="height:24px; min-height:24px; line-height:24px;"></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
</body>

</html>
  `;
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
