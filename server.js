var express=require('express');
var app=express();
var http=require('http').Server(app);
var io=require('socket.io')(http);
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


http.listen(3000, function () {
  console.log('Server listening at port %d', 18080);
});

app.get('/',function(req,res){
	res.sendFile(__dirname+'/123.html');
});
  
server.on('message', function(msg, rinfo) {
    console.log('服务端获取信息：'+msg+'来自：'+rinfo.address+':'+rinfo.port);
	var json = eval('(' + msg + ')');  
	io.emit('data',json);
});
  
server.on('listening', function() {
    var address = server.address();
    console.log('服务端正在监听：'+address.address+':'+address.port);
});

io.on('connection', function(){
	console.log('connected');
});


server.bind(7);

