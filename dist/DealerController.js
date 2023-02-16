import express from 'express';
import ip from 'ip';
import bodyParser from 'body-parser';
import multer from 'multer';
import cors from 'cors';
import { MockDatabase } from './MockDatabase.js';
const endpoint = express();
const backendPort = process.env.BACKEND_PORT || '30552';
const backendIp = process.env.BACKEND_PORT || ip.address();
const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, './result-files');
    },
    filename(req, file, callback) {
        callback(null, file.originalname);
    },
});
const upload = multer({ storage });
endpoint.use(cors());
endpoint.use(bodyParser.json());
endpoint.use(bodyParser.urlencoded({ extended: true }));
const mockDatabase = new MockDatabase();
endpoint.post('/startgame', async (request, response) => {
    const gameId = await mockDatabase.startGame();
    response.json({ 'gameID': gameId });
});
endpoint.get('/draw-card/:gameID', async (request, response) => {
    const testCard = await mockDatabase.drawTestCard(request.params.gameID);
    response.download(testCard.script);
    console.log(`Log: ${testCard.name} drawn`);
});
endpoint.post('/reveal-card/:gameID', upload.single('result'), async (request, response) => {
    const folderMessage = await request.body;
    console.log(`Log: reveived result card: ${folderMessage.name}`);
    response.json({ 'received': 'ok' });
});
endpoint.listen(backendPort, () => {
    console.log(`Log: server running at http://${backendIp}:${backendPort}`);
});
//# sourceMappingURL=DealerController.js.map