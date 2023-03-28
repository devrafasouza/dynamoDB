import { ddbClient } from './src/libs/ddbClient.js';
import { listTables } from './src/services/table/listTables.js';
import { describeTable } from './src/services/table/describeTable.js';
import { createTable } from './src/services/table/createTable.js';
import { deleteTable } from './src/services/table/deleteTable.js';
import { updateTable } from './src/services/table/updateTable.js';
import { getItem } from './src/services/itemTable/getItemTable.js';
import { putItem } from './src/services/itemTable/putItemTable.js';
import { updateItem } from './src/services/itemTable/updateItemTable.js';
import { deleteItem } from './src/services/itemTable/deleteItemTable.js';


const paramsForNewTable = {
  AttributeDefinitions: [
    {
      AttributeName: 'AttributeName2',
      AttributeType: 'B'
    },
    {
      AttributeName: 'AttributeName3',
      AttributeType: 'N'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'AttributeName2',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'AttributeName3',
      KeyType: 'RANGE'
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'TEST_NEW_TABLE',
  StreamSpecification: {
    StreamEnabled: false
  }
};

const paramsForUpdateTable = {
  "ProvisionedThroughput": {
    "ReadCapacityUnits": 2,
    "WriteCapacityUnits": 2,
  },
  "TableName": 'TEST_NEW_TABLE'
};

const paramsForGetItem = {
  TableName: "td_notes",
  Key: {
    user_id: "3221312",
    timestamp: 1524898163
  }
};

const paramsForPutItem = {
  TableName: "td_notes",
  Item: {
    user_id: "32213123",
    timestamp: 41524898163
  }
};
const paramsForRemoveItem = {
  TableName: "td_notes",
  Key: {
    user_id: "3221312",
    timestamp: 1524898163
  }
};

export const paramsForUpdateItem = {
  TableName: "td_notes",
  /*
  Convert the attribute JavaScript object you are updating to the required
  Amazon  DynamoDB record. The format of values specifies the datatype. The
  following list demonstrates different datatype formatting requirements:
  String: "String",
  NumAttribute: 1,
  BoolAttribute: true,
  ListAttribute: [1, "two", false],
  MapAttribute: { foo: "bar" },
  NullAttribute: null
   */
  Key: {
    user_id: "3221312", // For example, 'Season': 2.
    timestamp: 1524898163, // For example,  'Episode': 1; (only required if table has sort key).
  },
  // Define expressions for the new or updated attributes
  UpdateExpression: "set content = :t, note_id = :s", // For example, "'set Title = :t, Subtitle = :s'"
  ExpressionAttributeValues: {
    ":t": "novo content", // For example ':t' : 'NEW_TITLE'
    ":s": "69", // For example ':s' : 'NEW_SUBTITLE'
  },
  ReturnValues: "ALL_NEW"
};

const newTable = await createTable(ddbClient, paramsForNewTable);
console.log('aqui começa00');
console.log("Criação de nova tabela sendo chamada modularizada", newTable);
console.log("Descrição da tabela sendo chamada modularizada", await describeTable(ddbClient, {'TableName': 'TEST_NEW_TABLE'}));
//console.log("Exclusão da tabela sendo chamada modularizada", await describeTable(ddbClient, {'TableName': 'TEST_NEW_TABLE'}));
console.log("Atualização de uma tabela existente sendo chamada modularizada", await updateTable(ddbClient, paramsForUpdateTable));
console.log("Descrição da tabela sendo chamada modularizada", await describeTable(ddbClient, {'TableName': 'TEST_NEW_TABLE'}));
console.log('Lista das tabelas sendo chamada modularizada', await listTables(ddbClient));


console.log("Recuperação de um item da tabela", await getItem(paramsForGetItem));
console.log("Adição de um item da tabela", await putItem(paramsForPutItem));
console.log("Atualização de um item da tabela", await updateItem(paramsForUpdateItem));

console.log("Remoção de um item da tabela", await deleteItem(paramsForRemoveItem));

