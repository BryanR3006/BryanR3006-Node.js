import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const url = process.env.MONGODB_URI || 'mongodb+srv://root:22ymeSnTJL0wH4UE@cluster0.4zfca7y.mongodb.net/linktree_node_typescript';
        const { connection } = await mongoose.connect(url);

        const url2 = `${connection.host}:${connection.port}`;
        console.log(`Connecting to the database ${url2}`);
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};
