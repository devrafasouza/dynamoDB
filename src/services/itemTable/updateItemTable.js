import { ddbDocClient } from "../../libs/ddbDocClient.js";
import { UpdateCommand } from "@aws-sdk/lib-dynamodb";

export const updateItem = async (params) => {
  try {
    const data = await ddbDocClient.send(new UpdateCommand(params));
    return data;
  } catch (error) {
    console.log('Error', error);
  }
}