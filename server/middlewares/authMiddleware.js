import jwt from "jsonwebtoken";

const authorization = async (req, res, next) => {
  const token = req.header("Authorization");
  console.log(token);
  if (!token)
    return res
      .status(401)
      .json({ error: "No token, authorization Access denied" });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified.user;
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token" });
  }
};
export default authorization;
