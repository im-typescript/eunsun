import { connect } from "../mongodb/connect";

const insertDocumentTest = async () => {
  let connection, cursor;
  try {
    connection = await connect();
    const db = await connection.db("ch12-2");
    const personsCollection = db.collection("persons");
    const addressesCollection = db.collection("addresses");

    cursor = personsCollection.find({ name: "Jack" });
    const foundPersons = await cursor.toArray();
    console.log(foundPersons);

    cursor = addressesCollection.find({});
    const foundAddresses = await cursor.toArray();
    console.log(foundAddresses);
  } catch (e) {
    console.log(e.message);
  } finally {
    connection.close();
  }
};

insertDocumentTest();
