import waitPort from 'wait-port';

const params = {
  host: process.env.DB_HOST || 'db',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  timeout: 30000, // 30 segundos
  waitForDns: true,
};

console.log(`Aguardando o banco de dados em ${params.host}:${params.port}...`);
waitPort(params).then(open => {
  if (!open) {
    console.error('Banco de dados não está disponível!');
    process.exit(1);
  } else {
    console.log('Banco de dados disponível!');
    process.exit(0);
  }
});