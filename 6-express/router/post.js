import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).send("GET: /posts");
});

router.get("/", (req, res) => {
  res.status(201).send("POST: /posts");
});

router.get("/:id", (req, res) => {
  res.status(201).send("PUT: /posts/:id");
});

router.get("/:id", (req, res) => {
  res.status(201).send("DELETE: /posts/:id");
});

export default router;
