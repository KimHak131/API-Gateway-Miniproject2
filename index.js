const e1 = require('express');
const app = e1();

// use proxy server to redirect the incoming request
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

// redirect to the student micro-service
app.use('/student', (req, res) => {
    console.log("INSIDE API GATEWAY STUDENT ROUTE");
    proxy.web(req, res, { target: 'http://localhost:5005' });
});

// redirect to the teacher micro-service
app.use('/teacher', (req, res) => {
    console.log("INSIDE API GATEWAY TEACHER ROUTE");
    proxy.web(req, res, { target: 'http://localhost:5010' });
});

// START THE EXPRESS SERVER. 4000 is the PORT NUMBER
app.listen(4000, () =>
    console.log('EXPRESS Server Started at Port No: 4000'));


