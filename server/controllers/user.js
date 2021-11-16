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












































































