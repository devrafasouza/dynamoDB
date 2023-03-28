import { DescribeTableCommand } from "@aws-sdk/client-dynamodb";

export const describeTable = async (client, tableName) => {
  try {
    const describeTable = await client.send(new DescribeTableCommand(tableName));
    return describeTable;
  } catch (error) {
    return error;
  }
};