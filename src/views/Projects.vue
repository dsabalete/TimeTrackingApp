<template>
    <b-container class="projects-page">
        <b-row>
            <b-col sm="8" offset-sm="2">
                <b-row class="mt-5 mb-4">
                    <b-col>
                        <h1>Projects</h1>
                    </b-col>
                    <b-col>
                        <b-btn
                            variant="primary"
                            @click="$router.push({ name: 'ProjectEntry' })"
                            >+ Add New Project</b-btn
                        >
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <v-select :options="projects" />
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'Projects',
    computed: {
        ...mapState(['projects'])
    },
    mounted() {
        this.readProjects();
    },
    methods: {
        ...mapActions(['readProjects'])
    }
};
</script>

<style scoped></style>
