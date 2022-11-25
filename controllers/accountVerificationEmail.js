const { createTransport } = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const {
  GOOGLE_ID,
  GOOGLE_REFRESH,
  GOOGLE_SECRET,
  GOOGLE_URL,
  GOOGLE_USER,
  BACK_URL,
} = process.env;

function createClient() {
  return new OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_URL);
}

function getTransport(client) {
  const accessToken = client.getAccessToken();
  return createTransport({
    service: "gmail",
    auth: {
      user: GOOGLE_USER,
      type: "OAuth2",
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      refreshToken: GOOGLE_REFRESH,
      accessToken: accessToken,
    },
    tls: { rejectUnauthorized: false },
  });
}

function getEmailBody({ email, host, code }) {
  //lo que va a recibir el usuario en el correo de verificacion
  return `
        <div>
            <h1>Hola, ${email}</h1>            
            <a href="${host}auth/verify/${code}">
                Verify my account.
            </a>
        </div>
    `;
}

//funcion que junta todos los pasos necesarios para exportar
const accountVerificationEmail = async (
  newUserMail,
  codeWithCrypto,
  userName
) => {
  const client = createClient();
  client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH });
  const transport = getTransport(client);
  const mailOptions = {
    from: GOOGLE_USER,
    to: newUserMail,
    subject: "Verify your new account in My Tinerary",
    html: getEmailBody({
      name: userName,
      code: codeWithCrypto,
      host: BACK_URL,
    }),
  };
  await transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Email sent!");
  });
};
module.exports = accountVerificationEmail;
