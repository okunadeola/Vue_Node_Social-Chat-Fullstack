import User from "../models/user.js"
import bcrypt from "bcryptjs"



export const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find()

    const refinedData = allUsers.map(user => {
      const { password, ...others } = user._doc
      if (!user.isAdmin) return others
    })
    res.status(200).json({ users: refinedData })
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}



export const updateUser = async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 12)
    }
    const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body })

    res.status(200).json({ message: "Account has been updated" })
  } catch (error) {
    return res.status(500).json({ message: "something went wrong" })
  }
}


export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    const { password, updatedAt, ...others } = user._doc
    res.status(200).json({ message: "Account found", user: others },)
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}


export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Account has been deleted" })
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}


export const followUser = async (req, res) => {
  if (req.user.id !== req.body.id) {
    try {
      const currentUser = await User.findById(req.params.id)
      const user = await User.findById(req.body.id)
      if (!user.followers.includes(req.user.id)) {
        await user.updateOne({ $push: { followers: req.user.id } })
        await currentUser.updateOne({ $push: { followings: req.body.id } })

        res.status(200).json({ message: "user has been followed" })
      } else {
        res.status(403).json({ message: "You already follow this user" })
      }
    } catch (error) {
      res.status(500).json({ message: "something went wrong" })
    }
  } else {
    res.status(403).json({ message: "You can't follow yourself" })
  }
}




export const unfollowUser = async (req, res) => {
  if (req.user.id !== req.body.id) {
    try {
      const currentUser = await User.findById(req.params.id)
      const user = await User.findById(req.body.id)
      if (user.followers.includes(req.user.id)) {
        await user.updateOne({ $pull: { followers: req.user.id } })
        await currentUser.updateOne({ $pull: { followings: req.body.id } })

        res.status(200).json({ message: "user has been unfollowed" })
      } else {
        res.status(403).json({ message: "You already unfollow this user" })
      }
    } catch (error) {
      res.status(500).json({ message: "something went wrong" })
    }
  } else {
    res.status(403).json({ message: "You can't unfollow yourself" })
  }
}



export const restrictUser = async (req, res) => {

}















































// import CryptoJS from 'crypto-js'
// import User from '../models/user.js';




// // update user
// export const updateUser = async (req, res) => {
//   if (req.body.password) {
//     req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
//   }

//   try {
//     const updatedUser = await User.findByIdAndUpdate(req.params.id, {
//       $set: req.body
//     }, { new: true })

//     res.status(200).json(updatedUser);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// }


// // delete user
// export const deleteUser = async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id)
//     res.status(200).json("User has been deleted...");
//   } catch (error) {
//     res.status(500).json(error);
//   }
// }



// // get user
// export const getUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id)
//     const { password, ...others } = user._doc;
//     res.status(200).json(others);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// }


// // get all users
// export const getAllUsers = async (req, res) => {
//   const query = req.query.new;
//   try {
//     const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// }


// // get user stats
// export const usersStats = async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

//   try {
//     const data = await User.aggregate([
//       { $match: { createdAt: { $gte: lastYear } } },
//       { $project: { month: { $month: "$createdAt" } } },
//       { $group: { _id: "$month", total: { $sum: 1 } } }
//     ])
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// }







































// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";



// import User from "../models/user.js";

// const secret = 'mongo-express';

// export const signin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const oldUser = await User.findOne({ email });

//     if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

//     const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

//     if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

//     res.status(200).json({ result: oldUser, token });
//   } catch (err) {
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };

// export const signup = async (req, res) => {
//   const { email, password, firstName, lastName } = req.body;

//   try {
//     const oldUser = await User.findOne({ email });

//     if (oldUser) return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 12);

//     const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

//     const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

//     res.status(201).json({ result, token });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong" });

//     console.log(error);
//   }
// };































