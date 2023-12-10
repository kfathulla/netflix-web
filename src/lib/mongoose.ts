import mongoose, {ConnectOptions} from "mongoose"

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set("strictQuery", true);

    if (!process.env.MONGODB_URL) {
        throw new Error("MONGODB_URL not found")
    }

    if (isConnected) {
        return;
    }

    try {
        const options: ConnectOptions = {
            dbName: "netflix",
            autoCreate: true,
        }

        await mongoose.connect(process.env.MONGODB_URL, options);

        isConnected = true;
        console.log("MongoDb is connected");
    } catch (e) {
        console.log("MongoDb connectoin error. Please make sure mongodb is running. exception: ", e);
    }
}