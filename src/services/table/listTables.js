import { ListTablesCommand } from "@aws-sdk/client-dynamodb";

export const listTables = async (client) => {
  try {
    const listTables = await client.send(new ListTablesCommand({}));
    return listTables
  } catch (error) {
    return error;
  }
}