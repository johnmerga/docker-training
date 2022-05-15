// auth middleware
const authMiddleware = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "You must be logged in" });
  }
  req.user = req.session.user;
  next();
};

export default authMiddleware;