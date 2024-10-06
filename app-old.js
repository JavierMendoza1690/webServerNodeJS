import http from 'node:http';

const server = http.createServer((req, res)=>{
    console.log(req);

    // forza el estado a lo enviado por parametro
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    
    res.write( 'Hola Mundo');

    res.end();
})

server.listen( 8080 );


console.log('Escuchando el puerto', 8080);

