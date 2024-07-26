import { IndexType, Permission } from "node-appwrite";

import { db, questionsCollection } from "../name";
import { databases } from "./config";

export default async function createQuestionCollection() {
  //create collection
  await databases.createCollection(
    db,
    questionsCollection,
    questionsCollection,
    [
      Permission.read("any"),
      Permission.read("users"),
      Permission.create("users"),
      Permission.update("users"),
      Permission.delete("users"),
    ]
  );
  console.log("Question collection is created");
  //creating attributes and indexes
  await Promise.all([
    databases.createStringAttribute(
      db,
      questionsCollection,
      "title",
      100,
      true
    ),
    databases.createStringAttribute(
      db,
      questionsCollection,
      "content",
      10000,
      true
    ),
    databases.createStringAttribute(
      db,
      questionsCollection,
      "authorId",
      50,
      true
    ),
    databases.createStringAttribute(
      db,
      questionsCollection,
      "tags",
      50,
      true,
      undefined,
      true
    ),
    databases.createStringAttribute(
      db,
      questionsCollection,
      "attatchmentId",
      50,
      false
    ),
  ]);
  console.log("Question Attributes created");
  //create Indexes
  //   await Promise.all([
  //     databases.createIndex(
  //       db,
  //       questionsCollection,
  //       "title",
  //       IndexType.Fulltext,
  //       ["title"],
  //       ["asc"]
  //     ),
  //     databases.createIndex(
  //       db,
  //       questionsCollection,
  //       "content",
  //       IndexType.Fulltext,
  //       ["content"],
  //       ["asc"]
  //     ),
  //   ]);
  console.log("Question Indexes created");
}
