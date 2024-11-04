import { copyFile } from "fs/promises";

copyFile("README.md", "dist/README.md");
