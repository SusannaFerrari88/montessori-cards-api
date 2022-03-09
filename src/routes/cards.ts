import Card from "../models/Card";
import { Router, Request, Response } from "express";
import CardType from "../types/Card";

const router = Router();

router.get("/", (req: Request, res: Response): void => {
  Card.find().exec((err: any, data: CardType[]) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data });
  });
});

router.get("/:id", (req: Request, res: Response): void => {
  const id = req.params.id;
  Card.findById(id, (err: Error, data: CardType) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data });
  });
});

router.post("/", (req: Request, res: Response): void => {
  const { id, update } = req.body;
  Card.findByIdAndUpdate(id, update, (err: Error) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  Card.findByIdAndRemove(id, (err: Error) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

router.put("/", (req: Request, res: Response) => {
  let data = new Card();

  const { name, imageUrl, translations } = req.body;

  if (!name || !imageUrl) {
    return res.json({
      success: false,
      error: "INVALID INPUTS",
    });
  }
  data.name = name;
  data.imageUrl = imageUrl;
  data.translations = translations;

  data.save((err: Error, object: CardType) => {
    if (err) {
      console.log(err);
      return res.json({ success: false, error: err });
    }
    return res.json({ success: true, object });
  });
});

export default router;
