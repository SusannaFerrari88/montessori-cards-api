import { Router, Request, Response } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response, next): Promise<void> => {
  const name = req.query.name as string;
  const index = (req.query.index || 0) as string;

  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${name}`,
    {
      headers: {
        Authorization: process.env.PEXELS_API_KEY || "",
      },
    }
  );
  const responseJson = await response.json();
  if (responseJson && responseJson.photos.length) {
    const imageUrl = responseJson?.photos[index]?.src?.tiny;
    res.json(imageUrl);
  }

  next();
});

export default router;
