import { CreateTableCommand } from "@aws-sdk/client-dynamodb";

export const createTable = async (client, params) => {
  try {
    const table = await client.send(new CreateTableCommand(params));
    return table;
  } catch (error) {
    return error;
  }
};