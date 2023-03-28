import { ddbDocClient } from "../../libs/ddbDocClient.js";
import { GetCommand } from "@aws-sdk/lib-dynamodb";

export const getItem = async (params) => {
  try {
    const data = await ddbDocClient.send(new GetCommand(params));
    console.log('sucesso', data);
    return data;
  } catch (error) {
    console.log('Error', error);
  }
}