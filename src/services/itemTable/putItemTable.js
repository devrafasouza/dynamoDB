import { ddbDocClient } from "../../libs/ddbDocClient.js";
import { PutCommand } from "@aws-sdk/lib-dynamodb";

export const putItem = async (params) => {
  try {
    const data = await ddbDocClient.send(new PutCommand(params));
    return data;
  } catch (error) {
    console.log('Error', error);
  }
}