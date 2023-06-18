const { verifyToken } = require('../auth/authToken');

const validateAdminToken = async (req, res, next) => {
  const token = req.header('Authorization');

  const { payload } = await verifyToken(token);

  if (payload.role !== 'admin') {
    return res.status(401).json({ message: 'Not Authorized!' });
  }

  return next();
};

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  const { payload } = verifyToken(token);

  if (!payload) {
    return res.status(409).json({ message: 'Invalid Token!' });
  }

  req.payload = payload;
  
  return next();
};

module.exports = { validateAdminToken, validateToken };
