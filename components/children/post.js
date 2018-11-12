"use strict";

const post = {

    template: `
    <button class = "add-post" ng-click = "$ctrl.onSubmit($ctrl.post);">Add Post</button>
    `,
    bindings: {
        post: "<",
    }

};

angular 
    .module("App")
    .component("post", post);