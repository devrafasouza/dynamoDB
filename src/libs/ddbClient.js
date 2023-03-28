import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const REGION = "us-east-1"; // Setar a região do banco
// Objeto serviço cliente dynamoDB
const ddbClient = new DynamoDBClient({ region: REGION });

export { ddbClient };
