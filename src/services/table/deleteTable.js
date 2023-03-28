import { DeleteTableCommand } from "@aws-sdk/client-dynamodb";

export const deleteTable = async (client, tableName) => {
  try {
    const deleteTable = await client.send(new DeleteTableCommand(tableName));
    return deleteTable;
  } catch (error) {
    return error;
  }
}