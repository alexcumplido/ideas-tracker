import { Client, Databases, Account } from "appwrite";

const client = new Client()

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65b7812c4a99f035fa87');

export const account = new Account(client);
export const databases = new Databases(client);