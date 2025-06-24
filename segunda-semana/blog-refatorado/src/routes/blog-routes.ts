import express, { Application } from "express";

const router = express.Router();

router.post("/texts", blogController.createPost);
router.get("/texts", blogController.listPosts);
