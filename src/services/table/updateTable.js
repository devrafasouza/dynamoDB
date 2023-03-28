import { UpdateTableCommand } from "@aws-sdk/client-dynamodb";

export const updateTable = async (client, params) => {
  try {
    const tableUpdated = await client.send(new UpdateTableCommand(params));
    return tableUpdated;
  } catch (error) {
    return error;
  }
};