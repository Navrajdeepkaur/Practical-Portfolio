const app = Vue.createApp({
    data() {
        return {
            todos: [
                { id: 0, text: "Learn Vue", checked: false }
            ]
        }
    },

    methods: {
        toogle(todo) {
            todo.checked = !todo.checked
        }
    }
}).mount('#right');

let n = 0;

function add() {
    n = n + 1;
    var texty = document.getElementById("item2").value;
    app.todos.push({ id: n, text: texty, checked: false });
    document.getElementById("item2").value = '';
}

function myFunction1()

    {

        var x = document.getElementById("show");

        if (x.style.display === "none")

            {

                x.style.display = "block";

            }

        else

            {

                x.style.display = "none";

            }

    }

function myfunction()
{
    document.getElementsByTagName("li")[0].style.color ="red";
    document.getElementsByTagName("li")[1].style.color ="blue";
    document.getElementsByTagName("li")[2].style.color ="orange";
    document.getElementsByTagName("li")[3].style.color ="green";
}
