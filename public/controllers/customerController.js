import { MongoClient } from "mongodb";

// MongoDB connection string
const uri =
	"mongodb+srv://admin:admin@cluster0.g1dam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// MongoClient instance with the connection string
const client = new MongoClient(uri);

// Export the getAllCustomers function to be used as middleware
export const getAllCustomers = async (req, res) => {
	try {
		// Connect to the MongoDB client
		await client.connect();

		// Access the database and collection
		const database = client.db("EthernetCustomerTracking");
		const customers = database.collection("customers");

		// Retrieve all customers from the collection
		const allCustomers = await customers.find({}).toArray();
		console.log(allCustomers);
		// Send the customers as a JSON response with HTTP status 200 (OK)
		res.status(200).json(allCustomers);
	} catch (err) {
		// Send an error response with HTTP status 500 (Internal Server Error)
		res
			.status(500)
			.json({ message: "Error retrieving customers" });
	} finally {
		// Close MongoDB client
		await client.close();
	}
};
