import express from "express";
import cors from "cors";
import { sample_devices, sample_tags } from "./data";

const app = express();
app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

app.get('/api/devices', (req, res) => {
    res.send(sample_devices);
})

app.get('/api/devices/search/:searchTerm', (req, res) => {
    const searchTerm = req.params.searchTerm;
    const devices = sample_devices.filter(device => device.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(devices);
})

app.get('/api/devices/tags', (req, res) => {
    res.send(sample_tags);
})

app.get('/api/devices/tags/:tagName', (req, res) => {
    const tagName = req.params.tagName;
    const devices = sample_devices.filter(Phones =>Phones.tags?.includes(tagName));
    res.send(devices);

})

app.get('/api/devices/:deviceId', (req, res) => {
    const deviceId = req.params.deviceId;
    const device = sample_devices.find(device => device.id == deviceId)
    res.send(device);
})

const port = 5000;
app.listen(port, () =>{
    console.log("Website served on http://localhost:" + port);
})