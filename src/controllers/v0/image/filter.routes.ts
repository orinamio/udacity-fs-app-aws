import { Router, Request, Response, NextFunction } from "express";

import {
	deleteLocalFiles,
	filterImageFromURL,
	isValidUrl,
} from "../../../util/util";

const router: Router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
	const imageUrl: string = req.query.image_url;

	// check if imageUrl query string exist
	if (!imageUrl) {
		return res.status(400).send({ message: "Image URL is required" });
	}

	// check if it's a valid url
	if (!isValidUrl(imageUrl)) {
		return res.status(400).send({
			message: "Image URL is not valid",
		});
	}

	const filteredImage: string = await filterImageFromURL(imageUrl);

	return res.status(200).sendFile(filteredImage, function (err: Error) {
		if (err) {
			next(err);
		} else {
			// clean up
			deleteLocalFiles([filteredImage]);
		}
	});
});

export const FilteredImageRouter: Router = router;
