import Post from "../models/Post.js"
import User from '../models/user.js'


export const createPost = async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost)
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}


export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.body._id)
    if (post.userId === req.params.id) {
      await post.updateOne({ $set: req.body })
      res.status(200).json({ message: "the post has been updated" })
    }
    else {
      res.status(403).json({ message: "you can update only your post" })
    }

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }

}



export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.body._id)
    if (post.userId === req.params.id) {
      await post.deleteOne()
      res.status(200).json({ message: "the post has been deleted" })
    }
    else {
      res.status(403).json({ message: "you can delete only your post" })
    }

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }

}


export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.body._id)

    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

export const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.body._id)
    if (!post.likes.includes(req.params.id)) {
      await post.updateOne({ $push: { likes: req.params.id } })
      res.status(200).json({ message: "the post has been liked" })

    } else {
      await post.updateOne({ $pull: { likes: req.params.id } })
      res.status(200).json({ message: "the post has been disliked" })
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })

  }
}

export const getTimelinePosts = async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.id)
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId })
      })
    )

    res.status(200).json(userPosts.concat(...friendPosts))
    res.send("ok")
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })

  }
}




export const commentOnPost = () => {

}
export const deleteComment = () => {

}
export const likeComment = () => {

}
export const unlikeComment = () => {

}
export const replyPost = () => {

}
export const deleteReplyPost = () => {

}
export const share = () => {

}
export const hidePost = () => {

}

