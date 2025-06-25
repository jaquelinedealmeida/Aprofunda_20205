import express from "express";
import { createPost, listPosts } from "../controllers/blog-controller";

const router = express.Router();

router.post("/texts", createPost);
router.get("/texts", listPosts);

export default router;
