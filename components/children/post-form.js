"use strict";

const postForm = {
    template: `
    <form ng-submit= "$ctrl.onSubmit($ctrl.post);">
        <label>Title</label>
        <input type = "text" ng-model = "$ctrl.post.title" placeholder = "Post title">
        <label>Thought</label>
        <input type = "text" ng-model = "ctrl.post.thought">
        <post></post>
    </form>
    `,

    controller: [function(){
        let vm = this;
        vm.onSumbit = (post) => {
            console.log(post);
        };
    

        
    }
        

        

    ],


    bindings: {
        post: "<"
    }


};

angular
    .module("App")
    .component("postForm", postForm)