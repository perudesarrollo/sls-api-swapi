const AWS = require("aws-sdk");

module.exports = {
  async setItem(data, tableName) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: tableName,
      Item: data,
    };
    await dynamoDb.put(params).promise();

    return data;
  },
  async getItem(id, tableName) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: tableName,
      Key: {
        id,
      },
    };
    const result = await dynamoDb.get(params).promise();

    return result.Item;
  },
  async getItemName(value, tableName) {
    const params = {
      TableName: tableName,
      FilterExpression: "#name = :nameValue",
      ExpressionAttributeNames: {
        "#name": "name",
      },
      ExpressionAttributeValues: {
        ":nameValue": value,
      },
    };

    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const result = await dynamoDb.get(params).promise();
    return result.Item;
  },
  async getAll(tableName, filters = null) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const result = await dynamoDb.scan({ TableName: tableName }).promise();

    return result.Items;
  },
};
