<template>
    <b-container class="time-entry-page">
        <b-row>
            <b-col sm="6" offset-sm="3">
                <b-row>
                    <b-col>
                        <h1>
                            New Entry Time
                        </h1>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col
                        ><b-form @submit="onSubmit" @reset="onReset">
                            <b-form-group
                                id="input-group-1"
                                label="Start Date:"
                                label-for="input-1"
                            >
                                <date-picker
                                    v-model="formData.startDate"
                                    type="datetime"
                                />
                            </b-form-group>
                            <b-form-group
                                id="input-group-2"
                                label="End Date:"
                                label-for="input-2"
                            >
                                <date-picker
                                    v-model="formData.endDate"
                                    type="datetime"
                                />
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
export default {
    name: 'TimeEntry',
    data() {
        return {
            formData: {
                startDate: '',
                endDate: '',
                name: ''
            },
            foods: [
                { text: 'Select One', value: null },
                'Carrots',
                'Beans',
                'Tomatoes',
                'Corn'
            ]
        };
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.form));
        },
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values
            this.form.email = '';
            this.form.name = '';
            this.form.food = null;
            this.form.checked = [];
        }
    }
};
</script>

<style lang="scss" scoped></style>
