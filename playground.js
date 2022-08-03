const { ref, reactive, computed, toRef, toRefs } = require("vue");

let a = ref(1);
let b = ref(2);

let c = computed(() => a.value + b.value);
console.log(c.value);

a.value = 8;
console.log(c.value);

//with reactive you don't need to use ref and then access the value with
//the .value property

const person = reactive({
  firstName: "John",
  lastName: "Deep",
});

const { firstName, lastName } = toRefs(person);

const title = computed(() => `${firstName.value} ${lastName.value} the Great`);
console.log(title.value);

person.firstName = "Machiavelli";
console.log(title.value);

person.lastName = "Ivan IV";
console.log(title.value);
