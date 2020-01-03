import * as Yup from "yup";

import Post from "../models/Post";
import User from "../models/User";
class PostController {
  async index(req, res) {
    const posts = await Post.findAll({
      order: ["created_at"],
      attributes: ["id", "title", "text"],
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name"]
        }
      ]
    });

    return res.json(posts);
  }
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      text: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const post = await Post.create({
      user_id: 1,
      title: req.body.title,
      text: req.body.text
    });
    return res.json(post);
  }
}

export default new PostController();
