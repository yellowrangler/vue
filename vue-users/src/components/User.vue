<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <p>Name is: {{ uname }}</p>
        <p>Age is: {{ uage }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                :name="uname" 
                :userAge="uage" 
                :resetFn="resetName"></app-user-detail> 
                <!-- :resetFn="resetName"></app-user-detail> -->
                <!-- another way is to pass back via emiter -->
                <!-- @nameWasReset="uname=$event"></app-user-detail> -->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                :name="uname" 
                :userAge="uage" 
                @ageWasEdited="uage=$event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                uname: 'Tarry',
                uage: 64
            };
        },
        methods: {
            changeName: function() {
                this.uname = 'Tammy'
            },
            resetName: function() {
                this.uname = "Tarry"
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
