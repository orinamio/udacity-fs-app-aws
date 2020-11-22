import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";

import { IndexRouter } from "./controllers/index.routes";

(async () => {
	// Init the Express application
	const app: Express = express();

	// Set the network port
	const port: number | string = process.env.PORT || 8082;

	// Use the body parser middleware for post requests
	app.use(bodyParser.json());

	app.use("/", IndexRouter);

	// Root Endpoint
	// Displays a simple message to the user
	app.get("/", async (req: Request, res: Response) => {
		res.send("try GET /filteredimage?image_url={{}}");
	});

	// Start the Server
	app.listen(port, () => {
		console.log(`server running http://localhost:${port}`);
		console.log(`press CTRL+C to stop server`);
	});
})();
