require("dotenv").config();

module.exports = async (uuid) => {
    // const link = 'tarangfest.org/api/verify/' + uuid;
    const link = `localhost:${process.env.PORT}/api/verify/` + uuid;
    // {TODO: send email}
    // send email with link
    console.log(link);
}