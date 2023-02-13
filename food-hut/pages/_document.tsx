import Document from "next/document";
import { augmentDocumentWithEmotionCache } from "./_app";

//You can also pass your custom document if you have one.
augmentDocumentWithEmotionCache(Document);

export default Document;
