export default function handler(request, response) {
  // Возвращаем конфигурацию клиенту
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Content-Type', 'application/json');
  
  response.status(200).json({
    webhookUrl: process.env.WEBHOOK_URL,
    bytescaleApiKey: process.env.BYTESCALE_API_KEY,
    bytescaleUploadUrl: process.env.BYTESCALE_UPLOAD_URL
  });
}
