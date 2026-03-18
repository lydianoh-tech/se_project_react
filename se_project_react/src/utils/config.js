export const BASE_URL = import.meta.env.PROD
  ? "https://api.appwtwr.jumpingcrab.com"
  : "http://localhost:3001";
const { JWT_SECRET = "super-strong-secret" } = process.env;

module.exports = {
  JWT_SECRET,
};
