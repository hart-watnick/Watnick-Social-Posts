"use strict";

const socialPosts = {
    template: `

    <h1>My Thoughts</h1>

    <button class="new-thought" on-submit="$ctrl.onSumbit();">New Thought</button>

    <ul>
        <li ng-repeat = "post in $ctrl.postList | filter: $ctrl.filterList track by $index">
            {{post.title}}
            {{post.thought}}
            <button class= "remove" ng-click = "$ctrl.removePost($index);">X</button>
        </li>    
    </ul>

    

    <post-form on-submit = $ctrl.onSubmit($ctrl.post);></post-form>
    `,
    controller: [function(){

        let vm = this;
        this.postList = [
            {
                title: "Dog",
                thought: "I love My dog"
            },
            {
                title: "Cat",
                thought: "I love my Cat"
            },
            {
                title: "Gerbile",
                thought: "I love My Gerbile"
            },
            {
                title: "Pig",
                thought: "I love My pig"
            },

        ]
        vm.removePost = (index) => {
            vm.postList.splice (index, 1);
            console.log(index);
        };
        vm.showForm = () => {
            // form.css("display", "flex");
            console.log("form will display");
        };

    

    }],

    bindings: {
        onSubmit: "&"
    }

   
}


angular
    .module("App")
    .component("socialPosts", socialPosts);