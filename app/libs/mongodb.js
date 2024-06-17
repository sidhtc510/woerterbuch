import mongoose from 'mongoose';

const connectMongoDB = async () => {
    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    }
};

export default connectMongoDB;