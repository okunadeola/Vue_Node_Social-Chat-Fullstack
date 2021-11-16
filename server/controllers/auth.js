import User from '../models/user.js'
import bycrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'



export const register = async (req, res) => {
  const { email } = req.body;

  try {
    const oldUser = await User.findOne({ email: email });
    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const oldUserWithUsername =  await User.findOne({ username: req.body.username })
    if (oldUserWithUsername) return res.status(400).json({ message: "Username not available" });

    const hashedPassword = await bycrypt.hash(req.body.password, 12);

    const newUser = await User.create({ email: email, password: hashedPassword, username: req.body.username });

    const token = jwt.sign({ email: newUser.email, id: newUser._id, isAdmin: newUser.isAdmin, }, process.env.JWT_SEC, { expiresIn: "1d" });

    const { password, ...others } = newUser._doc

    res.status(201).json({ others, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }


}


export const login = async (req, res) => {
  const { email } = req.body;

  try {
    const oldUser = await User.findOne({ email: email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bycrypt.compare(req.body.password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id, isAdmin: oldUser.isAdmin, }, process.env.JWT_SEC, { expiresIn: "1d" });

    const { password, ...others } = oldUser._doc

    res.status(200).json({ data: others, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};









