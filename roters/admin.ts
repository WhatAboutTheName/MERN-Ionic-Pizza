import * as express from 'express';
import { AdminControllers } from '../controllers/admin';
import multer from 'multer';

export const adminRoutes = express.Router();

const adminControllers = new AdminControllers();

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[(file.mimetype as "image/png" | "image/jpeg" | "image/jpg")];
    let error: { name: string, message: string } | null = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "server/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[(file.mimetype as "image/png" | "image/jpeg" | "image/jpg")];
    cb(null, name + "-" + Date.now() + "." + ext);
  }
});

adminRoutes.post('/create-pizza', multer({ storage: storage }).single("image"), adminControllers.createPizza);

adminRoutes.get('/get-all-orders', adminControllers.getAllOrders);
