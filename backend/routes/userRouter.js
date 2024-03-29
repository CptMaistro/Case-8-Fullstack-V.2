import express from 'express';
const router = express.Router();

export default router.get('/', async (req, res) => {
    try {
        const data = { username: 'John Doe', password: 'taco'};
        console.log(data);
        res.json(data);

    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});