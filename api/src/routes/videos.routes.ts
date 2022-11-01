import { Router } from "express";
import * as videoCtrl from "./videos.controller";
const router = Router();

router.get("/videos", videoCtrl.getVideos);
router.get("/video/:id", videoCtrl.getVideo);
router.post("/videos", videoCtrl.createVideo);
router.put("/video/:id", videoCtrl.updateVideo);
router.delete("/video/:id", videoCtrl.deleteVideo);

export default router;
