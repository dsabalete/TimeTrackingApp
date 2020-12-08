import PouchDB from 'pouchdb';

// PouchDB Config
const timeEntriesDB = new PouchDB('timeEntries');
const projectsDB = new PouchDB('projects');
PouchDB.debug.enable('*');

export default {
    timeEntriesDB,
    projectsDB
};
