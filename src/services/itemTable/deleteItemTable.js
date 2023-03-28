import { ddbDocClient } from "../../libs/ddbDocClient.js";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";

export const deleteItem = async (params) => {
  try {
    const data = await ddbDocClient.send(new DeleteCommand(params));
    return data
  } catch (error) {
    console.log("Error", error);
  }
}