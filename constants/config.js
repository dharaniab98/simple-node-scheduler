module.exports = {
    mongodb: {
      db: {
        name: 'poll',
        server: '0.0.0.0',
        port: 27017,
        address: 'mongodb://127.0.0.1/agendadb?connectTimeoutMS=30000',
        collection: 'agendaSimpleScheduler',
      },
      options: {  
        server: {
          auto_reconnect: true
        }
      }
    }
}