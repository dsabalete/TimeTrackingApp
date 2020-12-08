import Vue from 'vue';
import Vuex from 'vuex';
import PouchDB from 'pouchdb';
import { v4 as uuidv4 } from 'uuid';

import router from '../router';

// PouchDB Config
const timeEntriesDB = new PouchDB('timeEntries');
const projectsDB = new PouchDB('projects');

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        timeEntries: [],
        projects: []
    },
    getters: {
        getProjects(state) {
            return state.projects.map(project => {
                return {
                    label: project.name,
                    code: project.code
                };
            });
        }
    },
    mutations: {
        setTimeEntries(state, payload) {
            state.timeEntries = payload.map(entry => entry.doc);
        },
        setProjects(state, payload) {
            state.projects = payload;
        }
    },
    actions: {
        async readTimeEntries({ commit }) {
            const docs = await timeEntriesDB.allDocs({
                include_docs: true
            });
            commit('setTimeEntries', docs.rows);
        },
        async createTimeEntry({ commit }, payload) {
            try {
                const res = await timeEntriesDB.put({
                    _id: uuidv4(),
                    ...payload
                });
                console.log('success', res);
                router.push({ name: 'HoursLog' });
            } catch (error) {
                console.error(error);
            }
        },
        async readProjects({ commit }) {
            const docs = await projectsDB.allDocs({
                include_docs: true
            });
            console.log(docs);
            // ! FIX this
            commit('setProjects', docs.rows || []);
        },
        async createProject({}, payload) {
            try {
                const res = await projectsDB.put({
                    _id: uuidv4(),
                    ...payload
                });
                console.log('success', res);
                router.push({ name: 'Projects' });
            } catch (error) {
                console.error(error);
            }
        }
    },
    modules: {}
});
