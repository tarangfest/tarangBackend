require("dotenv").config();

module.exports = async (uuid) => {
    // const link = 'tarangfest.org/api/verify/' + uuid;
    const link = `http://localhost:${process.env.PORT}/api/verify/` + uuid;
    // {TODO: send email}
    // send email with link
    return link;
}