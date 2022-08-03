const { ref, reactive, computed } = require("vue");

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
const title = computed(
  () => `${person.firstName} ${person.lastName} the Great`
);
const titleLength = computed(() => title.value.length);
console.log(title.value);
console.log(titleLength.value);

person.firstName = "Machiavelli";
console.log(title.value);
console.log(titleLength.value);

person.lastName = "Ivan IV";
console.log(title.value);
console.log(titleLength.value);
