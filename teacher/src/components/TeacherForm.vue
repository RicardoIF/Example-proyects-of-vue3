<template>
    <section>
        <h3>Agregar profesor:</h3>
        <div>
            <label for="">Nombre:</label>
            <input type="text" v-model="teacher.teacherName">
        </div>
        <div>
            
            <label for="">Apellidos:</label>
            <input type="text" v-model="teacher.teacherSurname">
        </div>
        <div>
            
            <label for="">Cedula:</label>
            <input type="text" v-model="teacher.dni">
        </div>
        <div>
            <label for="">Materias:</label>
            <input type="text" v-model="subject">
            <button @click="addSubjects">Agregar</button>
        </div>
        <div>
            <ul>
                <li v-for="(subj, index) in teacher.subjects" :key="index">{{ subj }}</li>
            </ul>
        </div>
        <input type="checkbox" name="" id="" v-model="teacher.doc"/>Documentacion entregada
        <button @click="addTeacher">Agregar</button>
    </section>
    <section>
        <h3>
            Listado de profesores
        </h3>
        <ul>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>DNI</th>
                    <th>Materias</th>
                    <th>Doc</th>
                </tr>
                <tr v-for="(elm) in teachers" :key="elm.dni">
                    <th>{{ elm.teacherName }}</th>
                    <th>{{ elm.teacherSurname }}</th>
                    <th>{{ elm.dni }}</th>
                    <th>
                        <ul>
                            <li v-for="(item, index) in elm.subjects" :key="index">{{ item }}</li>
                        </ul>
                    </th>
                    <th v-if="elm.doc">Entregada</th>
                    <th v-else>No Entrega</th>
                </tr>
            </table>
        </ul>
    </section>
</template>

<script setup>
    import { ref } from 'vue'
    let teacher = ref({
        teacherName: '', 
        teacherSurname: '', 
        dni: '',
        subjects: [],
        doc: false
    })
    let teachers = ref([]);
    
    let subject = ref('');
    const addSubjects = () => {
        teacher.value.subjects.push(subject.value);
        subject.value = '';
    }
    const addTeacher = () => {
        teachers.value.push({
            teacherName: teacher.value.teacherName, 
            teacherSurname: teacher.value.teacherSurname, 
            dni: teacher.value.dni,
            subjects: teacher.value.subjects,
            doc: teacher.value.doc
        });
        teacher.value.teacherName= '', 
        teacher.value.teacherSurname= '', 
        teacher.value.dni= '',
        teacher.value.subjects= [],
        teacher.value.doc= false
    }
</script>

<style scoped>

</style>