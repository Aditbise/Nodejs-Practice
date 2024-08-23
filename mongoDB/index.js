const readline = require('readline');
const deleteRecord = require('./indexdelete');
const insertRecord = require('./indexinsert');
const readRecords = require('./indexread');
const updateRecord = require('./indexupdate');
const { MongoClient } = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    try {
        let exit = false;
        while (!exit) {
            const choice = await askQuestion('Choose an option:\n1. Insert\n2. Read\n3. Update\n4. Delete\n5. Exit\n');
            switch (choice) {
                case '1':
                    const insertDoc = JSON.parse(await askQuestion('Enter document to insert (in JSON format): '));
                    await insertRecord(insertDoc);
                    break;
                case '2':
                    const readQuery = JSON.parse(await askQuestion('Enter query to read (in JSON format): '));
                    await readRecords(readQuery);
                    break;
                case '3':
                    const updateQuery = JSON.parse(await askQuestion('Enter query to update (in JSON format): '));
                    const updateDoc = JSON.parse(await askQuestion('Enter update document (in JSON format): '));
                    await updateRecord(updateQuery, updateDoc);
                    break;
                case '4':
                    const deleteQuery = JSON.parse(await askQuestion('Enter query to delete (in JSON format): '));
                    await deleteRecord(deleteQuery);
                    break;
                case '5':
                    exit = true;
                    console.log('Exiting...');
                    break;
                default:
                    console.log('Invalid choice, please try again.');
            }
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        rl.close();
        await client.close();
    }
}

main();
