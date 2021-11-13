import jwt from 'jsonwebtoken'


export const verification = async (req, res, next) => {
  const authToken = req?.headers?.authorization
  try {
    if (authToken) {
      const token = authToken.split(" ")[1]
      jwt.verify(token, process.env.JWT_SEC, (err, user) => {
        if (err) res.status(403).json({ message: "Token is invalid" })
        req.user = user;
        next();
      })
    } else {
      res.status(401).json({ message: "You are not authenticated" })
    }

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}


export const verifyTokenAndAuthorization = (req, res, next) => {
  verification(req, res, () => {
    // or if req.user
    if (req.user?.id === req.params?.id || req.user?.isAdmin) {
      next()
    } else {
      res.status(403).json({ message: "You are not allowed to do that" })
    }
  })
}



export const verifyTokenAndAdmin = (req, res, next) => {
  verification(req, res, () => {
    if (req.user.isAdmin) {
      next()
    } else {
      res.status(403).json({ message: "You are not allowed to do that" })
    }
  })
}