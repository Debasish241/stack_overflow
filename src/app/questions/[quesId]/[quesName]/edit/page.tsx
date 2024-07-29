import { db, questionsCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import React from "react";
import EditQues from "./EditQues";

const Page = async ({
  params,
}: {
  params: { quesId: string; quesName: string };
}) => {
  const question = await databases.getDocument(
    db,
    questionsCollection,
    params.quesId
  );

  return <EditQues question={question} />;
};

export default Page;
