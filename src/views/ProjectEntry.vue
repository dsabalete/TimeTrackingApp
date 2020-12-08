<template>
    <b-container class="project-entry-page">
        <b-row>
            <b-col sm="6" offset-sm="3">
                <b-row>
                    <b-col>
                        <h1>
                            New Entry Project
                        </h1>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col
                        ><b-form @submit="onSubmit" @reset="onReset">
                            <b-form-group
                                id="input-group-1"
                                label="Name:"
                                label-for="input-1"
                            >
                                <b-form-input
                                    id="input-1"
                                    v-model="formData.name"
                                    required
                                    placeholder="Name"
                                />
                            </b-form-group>
                            <b-form-group
                                id="input-group-2"
                                label="Description:"
                                label-for="textarea"
                            >
                                <b-form-textarea
                                    id="textarea"
                                    type="text"
                                    v-model="formData.description"
                                    placeholder="Enter a description..."
                                    rows="3"
                                    max-rows="6"
                                />
                            </b-form-group>
                            <b-form-group
                                id="input-group-3"
                                label="Color:"
                                label-for="input-3"
                            >
                                <input type="color" v-model="formData.color" />
                            </b-form-group>

                            <b-button type="submit" variant="primary"
                                >Submit</b-button
                            >
                            <b-button type="reset" variant="danger"
                                >Reset</b-button
                            >
                        </b-form>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'ProjectEntry',
    data() {
        return {
            formData: {
                name: '',
                description: '',
                color: ''
            }
        };
    },
    methods: {
        ...mapActions(['createProject']),
        onSubmit(e) {
            e.preventDefault();
            this.createProject(this.fromData);
        },
        onReset(e) {
            e.preventDefault();
            // Reset our form values
            this.form.name = '';
            this.form.description = '';
            this.form.color = '';
        }
    }
};
</script>

<style scoped></style>
