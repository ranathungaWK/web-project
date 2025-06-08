import multer from "multer";

export const storage = multer({storage: multer.diskStorage({})})

const upload = multer({storage});
export {upload};